const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '/backend/data/impactData.json');

// Get Impact Data
exports.getImpactData = (req, res) => {
    const data = JSON.parse(fs.readFileSync(dataFilePath));
    res.json(data);
};

// Update Impact Data (Admin route)
exports.updateImpactData = (req, res) => {
    const newData = req.body;
    fs.writeFileSync(dataFilePath, JSON.stringify(newData));
    res.status(200).json({ message: 'Data updated successfully' });
};
