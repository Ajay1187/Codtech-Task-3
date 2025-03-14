const messages = [];

exports.getMessages = (req, res) => res.json(messages);
exports.sendMessage = (req, res) => {
    messages.push(req.body.message);
    res.json({ status: "Message sent!" });
};
