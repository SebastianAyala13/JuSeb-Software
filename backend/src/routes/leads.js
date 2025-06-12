const router = require('express').Router();
const Lead = require('../models/Lead');
const auth = require('../middleware/auth');
const sendgrid = require('@sendgrid/mail');
const { body, validationResult } = require('express-validator');

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// Crear un nuevo lead
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('El nombre es obligatorio'),
    body('email').isEmail().withMessage('Email inválido'),
    body('projectType').notEmpty().withMessage('El tipo de proyecto es obligatorio'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const lead = new Lead(req.body);
      await lead.save();
      to: lead.email,
      from: process.env.SENDGRID_FROM_EMAIL,
      template_id: process.env.SENDGRID_TEMPLATE_ID,
      dynamic_template_data: {
        name: lead.name,
        projectType: lead.projectType
      }
    };

    await sendgrid.send(msg);

    // Enviar notificación al admin
    const adminMsg = {
      to: process.env.ADMIN_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: 'Nuevo Lead - JuSeb SOFTWARE',
      text: `
        Nombre: ${lead.name}
        Email: ${lead.email}
        Teléfono: ${lead.phone || 'No proporcionado'}
        Empresa: ${lead.company || 'No proporcionada'}
        Tipo de Proyecto: ${lead.projectType}
        Presupuesto: ${lead.budget}
        Mensaje: ${lead.message}
      `
    };

    await sendgrid.send(adminMsg);

    res.status(201).json({ message: 'Solicitud recibida exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// Obtener todos los leads (requiere autenticación)
router.get('/', auth, async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const query = {};
    
    if (status) {
      query.status = status;
    }

    const leads = await Lead.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Lead.countDocuments(query);

    res.json({
      leads,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// Obtener un lead específico (requiere autenticación)
router.get('/:id', auth, async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ message: 'Lead no encontrado' });
    }
    res.json(lead);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// Actualizar estado de un lead (requiere autenticación)
router.patch('/:id', auth, async (req, res) => {
  try {
    const { status, note } = req.body;
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({ message: 'Lead no encontrado' });
    }

    if (status) {
      lead.status = status;
    }

    if (note) {
      lead.notes.push({
        content: note,
        author: req.user.userId
      });
    }

    await lead.save();
    res.json(lead);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router; 