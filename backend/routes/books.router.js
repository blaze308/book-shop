const { Router } = require("express");
const { byCategory, byAuthor } = require("../middlewares/books.middleware");
const router = Router();
const {
    createBook, 
    getAllBooks,
    updateBook, 
} =require("../controllers/books.controller");


// adding middlewares to filter books by category or by author
router.get("/", [byCategory, byAuthor], getAllBooks);

router.post("/", createBook);

// update book details by isbn [international standard book number]
router.put("/", updateBook);

module.exports = router;