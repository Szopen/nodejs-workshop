const path = require('path');
const router = require('express').Router();


const users = {
	'user1', 'user2', 'user3'
}

router.get('/users', (req, res, next) => {
    //res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
    res.render('users', {users});
})

module.exports = router