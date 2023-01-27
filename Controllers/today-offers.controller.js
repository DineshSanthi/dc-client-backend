const axios = require("axios");

const getTodayOffers = async (req, res) => {
    try {
    const options = {
      method: "GET",
      url: "https://desichowrastha.onrender.com/api/todayoffers/list",
    };

    // AXIOS REQUEST
    axios.request(options).then(function (response) {
        var todayoffers = response.data.result;
        
        var TodayOffersArray = [];
      
        for (var i = 0; i < todayoffers.length; i++) { 
            var todayoffersObject = todayoffers[i];

            var todayOffersJSON = new Object();
            todayOffersJSON.saleName = todayoffersObject.saleName;
            todayOffersJSON.saleTitle = todayoffersObject.saleTitle;
            todayOffersJSON.saleDescription = todayoffersObject.saleDescription;
            todayOffersJSON.salePrice = todayoffersObject.salePrice;

            todayOffersJSON.fiftyPercentOff1Title = todayoffersObject.fiftypercentOff1Title;
            todayOffersJSON.fiftypercentOff1Description = todayoffersObject.fiftypercentOff1Description;

            todayOffersJSON.fiftyPercentOff2Title = todayoffersObject.fiftypercentOff2Title;
            todayOffersJSON.fiftypercentOff2Description = todayoffersObject.fiftypercentOff2Description;

            todayOffersJSON.comboOffersTitle = todayoffersObject.comboOffersTitle;
            todayOffersJSON.comboOffersDescription = todayoffersObject.comboOffersDescription;
            todayOffersJSON.comboOffersPrice = todayoffersObject.comboOffersPrice;

            todayOffersJSON.festiveOffersTitle = todayoffersObject.festiveOffersTitle;
            todayOffersJSON.festiveOffersDescription = todayoffersObject.festiveOffersDescription;
            todayOffersJSON.festiveOffersPrice = todayoffersObject.festiveOffersPrice;
            TodayOffersArray.push(todayOffersJSON);
        }

      // SENDING RESPONSE TO CLIENT FROM SERVER
      res.send(TodayOffersArray);
    });
  } catch (err) { 
    console.log(err);
  }
};

module.exports = {
  getTodayOffers,
};