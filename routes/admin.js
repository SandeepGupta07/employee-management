var express = require('express');
var router = express.Router();
var logincontroller = require('../controllers/login.controller');
var employeecontroller = require('../controllers/employeeController');
var projectcontroller = require('../controllers/projectController');
const dashboardController = require('../controllers/dashboard.controller');
const middleware = require('../Middleware/authenication');

router.get('/', logincontroller.login)
router.get('/forget-password', logincontroller.forget_pwd)
router.post('/authentication', logincontroller.authentication)

// employee routes
router.get('/employees', middleware.auth, employeecontroller.show_employee)
router.get('/add-employee',middleware.auth, employeecontroller.add_employee)
router.post('/add-employee',middleware.auth, employeecontroller.store_employee)

// project routes
router.get('/projects',middleware.auth, projectcontroller.show_project)
router.get('/add-project',middleware.auth, projectcontroller.add_project)
router.post('/add-project',middleware.auth,projectcontroller.create_project)

// Dashboard  route
router.get('/dashboard',middleware.auth,dashboardController.index)


module.exports = router;