const User = require('../models/users');

getUserList = (req, res) => {
    let where = req.body;
    User.find( where, (err, data) => {
      if ( err ) {  
        res.json({ status: 500, message: 'There are some error on getting the users list', data: false });
      } else {
        res.json({ status: 200, message: 'User list fetched successfully.', data: data });
      }
    });
  };
 
saveUser = (req, res) => {
    let postData = req.body;
    let postObj = new User(postData);
        postObj.save((err, data) => {
            if (err) {
                res.json({ status: 500, message: 'There is some error while inserting the user.', data: false });
            } else {
                res.json({ status: 200, message: 'user saved successfully.', data: data });
            }
        });
 }

 module.exports = {
    getUserList,
    saveUser
}
