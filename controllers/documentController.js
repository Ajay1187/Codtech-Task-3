const documents = {};

exports.getAllDocs = (req, res) => res.json(Object.keys(documents));
exports.getDocById = (req, res) => res.json({ content: documents[req.params.id] || "" });
exports.createDoc = (req, res) => {
    const docId = `doc-${Date.now()}`;
    documents[docId] = "";
    res.json({ id: docId });
};
