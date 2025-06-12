const router = require('express').Router();

// Configuración base de precios
const basePrices = {
  web: {
    landing: 1000,
    corporate: 2500,
    ecommerce: 5000,
    custom: 3500
  },
  mobile: {
    android: 4000,
    ios: 4500,
    hybrid: 6000
  },
  desktop: {
    basic: 3000,
    advanced: 5000,
    enterprise: 8000
  }
};

// Multiplicadores por características
const featureMultipliers = {
  auth: 1.2,
  payment: 1.3,
  admin: 1.25,
  api: 1.15,
  realtime: 1.2,
  multilanguage: 1.1,
  seo: 1.1,
  analytics: 1.05
};

// Calcular presupuesto
router.post('/estimate', async (req, res) => {
  try {
    const {
      projectType,
      subtype,
      features = [],
      timeline,
      complexity
    } = req.body;

    // Validar entrada
    if (!projectType || !subtype || !basePrices[projectType] || !basePrices[projectType][subtype]) {
      return res.status(400).json({ message: 'Tipo de proyecto inválido' });
    }

    // Obtener precio base
    let basePrice = basePrices[projectType][subtype];

    // Aplicar multiplicadores por características
    let totalMultiplier = 1;
    features.forEach(feature => {
      if (featureMultipliers[feature]) {
        totalMultiplier *= featureMultipliers[feature];
      }
    });

    // Ajustar por complejidad
    const complexityMultipliers = {
      low: 0.8,
      medium: 1,
      high: 1.3
    };
    totalMultiplier *= complexityMultipliers[complexity] || 1;

    // Ajustar por timeline
    const timelineMultipliers = {
      flexible: 1,
      normal: 1.2,
      urgent: 1.5
    };
    totalMultiplier *= timelineMultipliers[timeline] || 1;

    // Calcular precio final
    const estimatedPrice = Math.round(basePrice * totalMultiplier);

    // Calcular tiempo estimado (en semanas)
    const baseTimelines = {
      web: { landing: 2, corporate: 4, ecommerce: 8, custom: 6 },
      mobile: { android: 6, ios: 6, hybrid: 8 },
      desktop: { basic: 4, advanced: 8, enterprise: 12 }
    };

    let estimatedTime = baseTimelines[projectType][subtype];
    if (timeline === 'urgent') {
      estimatedTime = Math.ceil(estimatedTime * 0.7);
    } else if (timeline === 'flexible') {
      estimatedTime = Math.ceil(estimatedTime * 1.2);
    }

    res.json({
      estimatedPrice,
      estimatedTime,
      breakdown: {
        basePrice,
        features: features.map(f => ({
          name: f,
          multiplier: featureMultipliers[f] || 1
        })),
        complexity: {
          level: complexity,
          multiplier: complexityMultipliers[complexity] || 1
        },
        timeline: {
          type: timeline,
          multiplier: timelineMultipliers[timeline] || 1
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router; 