exports.register = function (req, res) {
    // console.log("req",req.body);
    var today = new Date();
    var users = {
        "name": req.body.Name1,
        "email": req.body.Emails,
        "password": req.body.Password,
        "phone": req.body.Phone,
        "income": req.body.Income,
        "address": req.body.Address
        
    }
    connection.query('INSERT INTO user SET ?', users, function (error, results, fields) {
        if (error) {
            console.log("error ocurred", error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            console.log('The solution is: ', results);
            res.send({
                "code": 200,
                "success": "user registered sucessfully"
            });
        }
    });
}

