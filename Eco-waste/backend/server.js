const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Import Routes
const authRoutes = require('/backend/routes/auth.js');
const dataRoutes = require('/backend/routes/data.js');

// Use Routes
app.use('/backend/routes/auth.js', authRoutes);
app.use('/backend/routes/data.js', dataRoutes);

// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
