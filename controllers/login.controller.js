var Users = require('../models/users.model');
const bcrypt = require("bcrypt");
var { body, validationResult } = require('express-validator');

module.exports = {
    'login': (req, res) => {
        console.log('login page')
        res.render('login', { title: 'Login' });
    },
    'forget_pwd': (req, res) => {
        res.render('forgetPwd', { title: 'Forgot Password' });
    },
    'authentication': async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            req.flash('message', errors.errors);
            return res.redirect('/admin');
        }
        try {
            const loginuser = await Users.findOne({ email: req.body.user_email });
            if (!loginuser) {
                req.flash('message', [{ "value": "", "msg": "Invalid User", "param": "user_email", "location": "body" }]);
                return res.redirect('/admin');
            }

            const result = await bcrypt.compare(req.body.user_password, loginuser.password);

            if (!result) {
                req.flash('message', [{ "value": "", "msg": "Invalid Password", "param": "user_password", "location": "body" }]);
                return res.redirect('/admin');
            }

            const loggedinuser = await Users.find({ email: req.body.user_email });

            req.session.auth = loggedinuser;
            return res.redirect('admin/dashboard');

        } catch (error) {
            return { 'message': error };
        }
    },
}
