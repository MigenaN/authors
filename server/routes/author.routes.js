const authorController = require('../controllers/author.controller');
module.exports = (app) => {
        app.post("/api/authors", authorController.createAuthor);
        app.get("/api/authors", authorController.getAuthors);
        app.get("/api/authors/:id", authorController.getAuthorById);
        app.put("/api/authors/:id", authorController.editAuthor);
        app.delete("/api/authors/:id", authorController.deleteAuthor);
    }