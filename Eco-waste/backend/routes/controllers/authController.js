const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '/backend/data/users.json');

// Login Functionality
exports.login = (req, res) => {
    const { username, password } = req.body;
    const users = JSON.parse(fs.readFileSync(usersFilePath));

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

// Signup Functionality
exports.signup = (req, res) => {
    const { username, password } = req.body;
    let users = JSON.parse(fs.readFileSync(usersFilePath));

    const userExists = users.some(u => u.username === username);
    if (userExists) {
        res.status(409).json({ message: 'User already exists' });
    } else {
        users.push({ username, password });
        fs.writeFileSync(usersFilePath, JSON.stringify(users));
        res.status(201).json({ message: 'User created successfully' });
    }
};
