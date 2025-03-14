const users = {};

exports.signup = (req, res) => {
    const { username, password } = req.body;
    if (users[username]) {
        return res.status(400).json({ message: "User already exists!" });
    }
    users[username] = { password };
    res.json({ message: "Signup successful!" });
};

exports.login = (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username].password === password) {
        return res.json({ message: "Login successful!" });
    }
    res.status(401).json({ message: "Invalid credentials!" });
};
