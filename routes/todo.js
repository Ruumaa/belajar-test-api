const router = require('express').Router();
const controller = require('../controllers/todo');

router.get('/',controller.listTodo);

module.exports = router;