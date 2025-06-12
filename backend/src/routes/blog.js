const router = require('express').Router();
const Post = require('../models/Post');
const auth = require('../middleware/auth');
const multer = require('multer');
const cloudinary = require('../config/cloudinary');

// Configuración de multer para subida de imágenes
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB max
  },
});

// Obtener todos los posts publicados
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, category } = req.query;
    const query = { status: 'published' };
    
    if (category) {
      query.category = category;
    }

    const posts = await Post.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('author', 'name avatar');

    const count = await Post.countDocuments(query);

    res.json({
      posts,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// Obtener un post específico
router.get('/:slug', async (req, res) => {
  try {
    const post = await Post.findOne({ 
      slug: req.params.slug,
      status: 'published'
    }).populate('author', 'name avatar');

    if (!post) {
      return res.status(404).json({ message: 'Post no encontrado' });
    }

    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// Crear un nuevo post (requiere autenticación)
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const { title, content, excerpt, category, tags, status } = req.body;

    // Subir imagen a Cloudinary si se proporcionó una
    let coverImage = '/blog-default.png';
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.buffer);
      coverImage = result.secure_url;
    }

    // Crear slug desde el título
    const slug = title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    // Calcular tiempo de lectura (palabras / 200 palabras por minuto)
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);

    const post = new Post({
      title,
      slug,
      content,
      excerpt,
      coverImage,
      category,
      tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
      author: req.user.userId,
      status,
      readTime
    });

    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// Actualizar un post (requiere autenticación)
router.put('/:id', auth, upload.single('image'), async (req, res) => {
  try {
    const { title, content, excerpt, category, tags, status } = req.body;
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post no encontrado' });
    }

    // Verificar autorización
    if (post.author.toString() !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'No autorizado' });
    }

    // Actualizar imagen si se proporcionó una nueva
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.buffer);
      post.coverImage = result.secure_url;
    }

    // Actualizar campos
    post.title = title || post.title;
    post.content = content || post.content;
    post.excerpt = excerpt || post.excerpt;
    post.category = category || post.category;
    post.tags = tags ? tags.split(',').map(tag => tag.trim()) : post.tags;
    post.status = status || post.status;

    // Actualizar tiempo de lectura si el contenido cambió
    if (content) {
      const wordCount = content.split(/\s+/).length;
      post.readTime = Math.ceil(wordCount / 200);
    }

    await post.save();
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// Eliminar un post (requiere autenticación)
router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post no encontrado' });
    }

    // Verificar autorización
    if (post.author.toString() !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'No autorizado' });
    }

    await post.remove();
    res.json({ message: 'Post eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router; 