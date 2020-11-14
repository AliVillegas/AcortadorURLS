const router = require('express').Router();
const homepageController = require('../controllers/HomepageController');
const tasksController = require('../controllers/TasksController');
const urlsController = require('../controllers/UrlsController');

router.get('/', homepageController.index);

router.post('/tasks', tasksController.store);
router.post('/urls', urlsController.store);
router.get('/:id', urlsController.match);
router.post('/tasksUpdate', tasksController.markAsDone);
router.post('/tasksDelete', tasksController.deleteTask);


module.exports = router;