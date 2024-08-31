const express = require('express');
const router = express.Router();
const dataController = require('/backend/routes/controllers/dataController.js');

// Get Impact Data
router.get('/impact', dataController.getImpactData);

// Update Impact Data (Admin)
router.post('/impact', dataController.updateImpactData);

module.exports = router;
