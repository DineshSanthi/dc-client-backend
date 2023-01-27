const axios = require("axios");

const getUserDetails = async (req, res) => {
    const userMobileNumber = req.body.mobileNumber;
    const orders = JSON.stringify(req.body.orders);
    const orderTotal = req.body.totalPrice;
    const quantity = req.body.quantity;

    console.log(userMobileNumber+"\n"+orders+"\n"+orderTotal+"\n"+quantity);
    const resp = userMobileNumber+"\n"+orders+"\n"+orderTotal+"\n"+quantity;
    res.send(resp);
};

module.exports = {
    getUserDetails,
};
