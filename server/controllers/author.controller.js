const Author = require('../models/author.model');

module.exports.createAuthor = (req, res) => {
  Author.create(req.body)
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err));
};

module.exports.getAuthors = (req, res) => {
  Author.find()
    .sort({ name: 1 }) 
    .then(authors => res.json(authors))
    .catch(err => res.status(400).json(err));
};

module.exports.getAuthorById = (req, res) => {
  Author.findById(req.params.id)
    .then(author => {
      if (!author) {
        res.status(404).json({ message: "Author not found" });
        return;
      }
      res.json(author);
    })
    .catch(err => res.status(400).json(err));
};

module.exports.editAuthor = (req, res) => {
  Author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then(author => {
      if (!author) {
        res.status(404).json({ message: "Author not found" });
        return;
      }
      res.json(author);
    })
    .catch(err => res.status(400).json(err));
};

module.exports.deleteAuthor = (req, res) => {
  Author.findByIdAndDelete(req.params.id)
    .then(author => {
      if (!author) {
        res.status(404).json({ message: "Author not found" });
        return;
      }
      res.json({ message: "Author deleted successfully" });
    })
    .catch(err => res.status(400).json(err));
};
