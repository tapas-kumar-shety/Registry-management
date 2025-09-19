
const requirelogin = (req, res, next) => {
    if (!req.session.user_id) {
        req.session.errorMessage = "You are not the admin. First, login as an admin.";
        return res.redirect('/user/login');
    }
    next();
};

module.exports = requirelogin;
