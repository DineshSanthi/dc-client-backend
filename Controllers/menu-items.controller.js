const axios = require("axios");
const generateUniqueId = require('generate-unique-id');

const getMenuItems = async (req, res) => {
  try {
    const options = {
      method: "GET",
      url: "https://desichowrastha.onrender.com/api/menu/list",
    };

    // AXIOS REQUEST
    axios.request(options).then(function (response) {
      var fooditems = response.data.result;

      var FoodItemsBasedOnCategoriesArray = [];

      for (var i = 0; i < fooditems.length; i++) {
        var fooditemsObject = fooditems[i];
        var foodCategoriesObject = fooditems[i]["foodCategory"];

        // SNACK BOX
        if (foodCategoriesObject === "SNACK BOX") {
          // CREATING A JSON OBJECT
          var snackBoxJSON = new Object();
          snackBoxJSON.id = fooditemsObject._id;
          snackBoxJSON.rid = generateUniqueId({
            length: 10,
            useLetters: false
          });
          snackBoxJSON.status = fooditemsObject.status;
          snackBoxJSON.name = fooditemsObject.foodName;
          snackBoxJSON.category = fooditemsObject.foodCategory;
          snackBoxJSON.type = fooditemsObject.foodType;
          snackBoxJSON.imageURL = fooditemsObject.imageURL;
          snackBoxJSON.description = fooditemsObject.description;
          snackBoxJSON.price = fooditemsObject.price;
          FoodItemsBasedOnCategoriesArray.push(snackBoxJSON);
        }

        // JUICES
        else if (foodCategoriesObject === "JUICES") {
          // CREATING A JSON OBJECT
          var juicesJSON = new Object();
          juicesJSON.id = fooditemsObject._id;
          juicesJSON.rid = generateUniqueId({
            length: 10,
            useLetters: false
          });
          juicesJSON.status = fooditemsObject.status;
          juicesJSON.name = fooditemsObject.foodName;
          juicesJSON.category = fooditemsObject.foodCategory;
          juicesJSON.type = fooditemsObject.foodType;
          juicesJSON.imageURL = fooditemsObject.imageURL;
          juicesJSON.description = fooditemsObject.description;
          juicesJSON.price = fooditemsObject.price;
          FoodItemsBasedOnCategoriesArray.push(juicesJSON);
        }

        // APPETIZERS VEG
        else if (foodCategoriesObject === "APPETIZERS VEG") {
          // CREATING A JSON OBJECT
          var appetizersVegJSON = new Object();
          appetizersVegJSON.id = fooditemsObject._id;
          appetizersVegJSON.rid = generateUniqueId({
            length: 10,
            useLetters: false
          });
          appetizersVegJSON.status = fooditemsObject.status;
          appetizersVegJSON.name = fooditemsObject.foodName;
          appetizersVegJSON.category = fooditemsObject.foodCategory;
          appetizersVegJSON.type = fooditemsObject.foodType;
          appetizersVegJSON.imageURL = fooditemsObject.imageURL;
          appetizersVegJSON.description = fooditemsObject.description;
          appetizersVegJSON.price = fooditemsObject.price;
          FoodItemsBasedOnCategoriesArray.push(appetizersVegJSON);
        }

        // APPETIZERS NON VEG
        else if (foodCategoriesObject === "APPETIZERS NON VEG") {
          // CREATING A JSON OBJECT
          var appetizersNonVegJSON = new Object();
          appetizersNonVegJSON.id = fooditemsObject._id;
          appetizersNonVegJSON.rid = generateUniqueId({
            length: 10,
            useLetters: false
          });
          appetizersNonVegJSON.status = fooditemsObject.status;
          appetizersNonVegJSON.name = fooditemsObject.foodName;
          appetizersNonVegJSON.category = fooditemsObject.foodCategory;
          appetizersNonVegJSON.type = fooditemsObject.foodType;
          appetizersNonVegJSON.imageURL = fooditemsObject.imageURL;
          appetizersNonVegJSON.description = fooditemsObject.description;
          appetizersNonVegJSON.price = fooditemsObject.price;
          FoodItemsBasedOnCategoriesArray.push(appetizersNonVegJSON);
        }

        // TANDOOR
        else if (foodCategoriesObject === "TANDOOR") {
          // CREATING A JSON OBJECT
          var tandoorJSON = new Object();
          tandoorJSON.id = fooditemsObject._id;
          tandoorJSON.rid = generateUniqueId({
            length: 10,
            useLetters: false
          });
          tandoorJSON.status = fooditemsObject.status;
          tandoorJSON.name = fooditemsObject.foodName;
          tandoorJSON.category = fooditemsObject.foodCategory;
          tandoorJSON.type = fooditemsObject.foodType;
          tandoorJSON.imageURL = fooditemsObject.imageURL;
          tandoorJSON.description = fooditemsObject.description;
          tandoorJSON.price = fooditemsObject.price;
          FoodItemsBasedOnCategoriesArray.push(tandoorJSON);
        }

        // SIDES
        else if (foodCategoriesObject === "SIDES") {
          // CREATING A JSON OBJECT
          var sidesJSON = new Object();
          sidesJSON.id = fooditemsObject._id;
          sidesJSON.rid = generateUniqueId({
            length: 10,
            useLetters: false
          });
          sidesJSON.status = fooditemsObject.status;
          sidesJSON.name = fooditemsObject.foodName;
          sidesJSON.category = fooditemsObject.foodCategory;
          sidesJSON.type = fooditemsObject.foodType;
          sidesJSON.imageURL = fooditemsObject.imageURL;
          sidesJSON.description = fooditemsObject.description;
          sidesJSON.price = fooditemsObject.price;
          FoodItemsBasedOnCategoriesArray.push(sidesJSON);
        }

        // TIFFINS
        else if (foodCategoriesObject === "TIFFINS") {
          // CREATING A JSON OBJECT
          var tiffinsJSON = new Object();
          tiffinsJSON.id = fooditemsObject._id;
          tiffinsJSON.rid = generateUniqueId({
            length: 10,
            useLetters: false
          });
          tiffinsJSON.status = fooditemsObject.status;
          tiffinsJSON.name = fooditemsObject.foodName;
          tiffinsJSON.category = fooditemsObject.foodCategory;
          tiffinsJSON.type = fooditemsObject.foodType;
          tiffinsJSON.imageURL = fooditemsObject.imageURL;
          tiffinsJSON.description = fooditemsObject.description;
          tiffinsJSON.price = fooditemsObject.price;
          FoodItemsBasedOnCategoriesArray.push(tiffinsJSON);
        }

        // CHAAT SECTION
        else if (foodCategoriesObject === "CHAAT SECTION") {
          // CREATING A JSON OBJECT
          var chaatSectionJSON = new Object();
          chaatSectionJSON.id = fooditemsObject._id;
          chaatSectionJSON.rid = generateUniqueId({
            length: 10,
            useLetters: false
          });
          chaatSectionJSON.status = fooditemsObject.status;
          chaatSectionJSON.name = fooditemsObject.foodName;
          chaatSectionJSON.category = fooditemsObject.foodCategory;
          chaatSectionJSON.type = fooditemsObject.foodType;
          chaatSectionJSON.imageURL = fooditemsObject.imageURL;
          chaatSectionJSON.description = fooditemsObject.description;
          chaatSectionJSON.price = fooditemsObject.price;
          FoodItemsBasedOnCategoriesArray.push(chaatSectionJSON);
        }

        // STREET STYLE
        else if (foodCategoriesObject === "STREET STYLE") {
          // CREATING A JSON OBJECT
          var streetStyleJSON = new Object();
          streetStyleJSON.id = fooditemsObject._id;
          streetStyleJSON.rid = generateUniqueId({
            length: 10,
            useLetters: false
          });
          streetStyleJSON.status = fooditemsObject.status;
          streetStyleJSON.name = fooditemsObject.foodName;
          streetStyleJSON.category = fooditemsObject.foodCategory;
          streetStyleJSON.type = fooditemsObject.foodType;
          streetStyleJSON.imageURL = fooditemsObject.imageURL;
          streetStyleJSON.description = fooditemsObject.description;
          streetStyleJSON.price = fooditemsObject.price;
          FoodItemsBasedOnCategoriesArray.push(streetStyleJSON);
        }

        // VEG GRAVIES
        else if (foodCategoriesObject === "VEG GRAVIES") {
          // CREATING A JSON OBJECT
          var vegGraviesJSON = new Object();
          vegGraviesJSON.id = fooditemsObject._id;
          vegGraviesJSON.rid = generateUniqueId({
            length: 10,
            useLetters: false
          });
          vegGraviesJSON.status = fooditemsObject.status;
          vegGraviesJSON.name = fooditemsObject.foodName;
          vegGraviesJSON.category = fooditemsObject.foodCategory;
          vegGraviesJSON.type = fooditemsObject.foodType;
          vegGraviesJSON.imageURL = fooditemsObject.imageURL;
          vegGraviesJSON.description = fooditemsObject.description;
          vegGraviesJSON.price = fooditemsObject.price;
          FoodItemsBasedOnCategoriesArray.push(vegGraviesJSON);
        }

        // NON VEG GRAVIES
        else if (foodCategoriesObject === "NON VEG GRAVIES") {
          // CREATING A JSON OBJECT
          var nonVegGraviesJSON = new Object();
          nonVegGraviesJSON.id = fooditemsObject._id;
          nonVegGraviesJSON.rid = generateUniqueId({
            length: 10,
            useLetters: false
          });
          nonVegGraviesJSON.status = fooditemsObject.status;
          nonVegGraviesJSON.name = fooditemsObject.foodName;
          nonVegGraviesJSON.category = fooditemsObject.foodCategory;
          nonVegGraviesJSON.type = fooditemsObject.foodType;
          nonVegGraviesJSON.imageURL = fooditemsObject.imageURL;
          nonVegGraviesJSON.description = fooditemsObject.description;
          nonVegGraviesJSON.price = fooditemsObject.price;
          FoodItemsBasedOnCategoriesArray.push(nonVegGraviesJSON);
        }

        // INDIAN WOK
        else if (foodCategoriesObject === "INDIAN WOK") {
          // CREATING A JSON OBJECT
          var indianWokJSON = new Object();
          indianWokJSON.id = fooditemsObject._id;
          indianWokJSON.rid = generateUniqueId({
            length: 10,
            useLetters: false
          });
          indianWokJSON.status = fooditemsObject.status;
          indianWokJSON.name = fooditemsObject.foodName;
          indianWokJSON.category = fooditemsObject.foodCategory;
          indianWokJSON.type = fooditemsObject.foodType;
          indianWokJSON.imageURL = fooditemsObject.imageURL;
          indianWokJSON.description = fooditemsObject.description;
          indianWokJSON.price = fooditemsObject.price;
          FoodItemsBasedOnCategoriesArray.push(indianWokJSON);
        }

        // BREADS
        else if (foodCategoriesObject === "BREADS") {
          // CREATING A JSON OBJECT
          var breadsJSON = new Object();
          breadsJSON.id = fooditemsObject._id;
          breadsJSON.rid = generateUniqueId({
            length: 10,
            useLetters: false
          });
          breadsJSON.status = fooditemsObject.status;
          breadsJSON.name = fooditemsObject.foodName;
          breadsJSON.category = fooditemsObject.foodCategory;
          breadsJSON.type = fooditemsObject.foodType;
          breadsJSON.imageURL = fooditemsObject.imageURL;
          breadsJSON.description = fooditemsObject.description;
          breadsJSON.price = fooditemsObject.price;
          FoodItemsBasedOnCategoriesArray.push(breadsJSON);
        }

        // PULAO
        else if (foodCategoriesObject === "PULAO") {
          // CREATING A JSON OBJECT
          var pulaoJSON = new Object();
          pulaoJSON.id = fooditemsObject._id;
          pulaoJSON.rid = generateUniqueId({
            length: 10,
            useLetters: false
          });
          pulaoJSON.status = fooditemsObject.status;
          pulaoJSON.name = fooditemsObject.foodName;
          pulaoJSON.category = fooditemsObject.foodCategory;
          pulaoJSON.type = fooditemsObject.foodType;
          pulaoJSON.imageURL = fooditemsObject.imageURL;
          pulaoJSON.description = fooditemsObject.description;
          pulaoJSON.price = fooditemsObject.price;
          FoodItemsBasedOnCategoriesArray.push(pulaoJSON);
        }

        // RICE JUNCTION
        else if (foodCategoriesObject === "RICE JUNCTION") {
          // CREATING A JSON OBJECT
          var riceJunctionJSON = new Object();
          riceJunctionJSON.id = fooditemsObject._id;
          riceJunctionJSON.rid = generateUniqueId({
            length: 10,
            useLetters: false
          });
          riceJunctionJSON.status = fooditemsObject.status;
          riceJunctionJSON.name = fooditemsObject.foodName;
          riceJunctionJSON.category = fooditemsObject.foodCategory;
          riceJunctionJSON.type = fooditemsObject.foodType;
          riceJunctionJSON.imageURL = fooditemsObject.imageURL;
          riceJunctionJSON.description = fooditemsObject.description;
          riceJunctionJSON.price = fooditemsObject.price;
          riceJunctionJSON.familyPrice = fooditemsObject.familyPrice;
          FoodItemsBasedOnCategoriesArray.push(riceJunctionJSON);
        }

        // FILL YOUR THIRST
        else if (foodCategoriesObject === "FILL YOUR THIRST") {
          // CREATING A JSON OBJECT
          var fillYourThirstJSON = new Object();
          fillYourThirstJSON.id = fooditemsObject._id;
          fillYourThirstJSON.rid = generateUniqueId({
            length: 10,
            useLetters: false
          });
          fillYourThirstJSON.status = fooditemsObject.status;
          fillYourThirstJSON.name = fooditemsObject.foodName;
          fillYourThirstJSON.category = fooditemsObject.foodCategory;
          fillYourThirstJSON.type = fooditemsObject.foodType;
          fillYourThirstJSON.imageURL = fooditemsObject.imageURL;
          fillYourThirstJSON.description = fooditemsObject.description;
          fillYourThirstJSON.price = fooditemsObject.price;
          FoodItemsBasedOnCategoriesArray.push(fillYourThirstJSON);
        }

        // SWEET CRAVINGS
        else if (foodCategoriesObject === "SWEET CRAVINGS") {
          // CREATING A JSON OBJECT
          var sweetCravingsJSON = new Object();
          sweetCravingsJSON.id = fooditemsObject._id;
          sweetCravingsJSON.rid = generateUniqueId({
            length: 10,
            useLetters: false
          });
          sweetCravingsJSON.status = fooditemsObject.status;
          sweetCravingsJSON.name = fooditemsObject.foodName;
          sweetCravingsJSON.category = fooditemsObject.foodCategory;
          sweetCravingsJSON.type = fooditemsObject.foodType;
          sweetCravingsJSON.imageURL = fooditemsObject.imageURL;
          sweetCravingsJSON.description = fooditemsObject.description;
          sweetCravingsJSON.price = fooditemsObject.price;
          FoodItemsBasedOnCategoriesArray.push(sweetCravingsJSON);
        }

        // PASTRIES
        else if (foodCategoriesObject === "PASTRIES") {
          // CREATING A JSON OBJECT
          var pastriesJSON = new Object();
          pastriesJSON.id = fooditemsObject._id;
          pastriesJSON.rid = generateUniqueId({
            length: 10,
            useLetters: false
          });
          pastriesJSON.status = fooditemsObject.status;
          pastriesJSON.name = fooditemsObject.foodName;
          pastriesJSON.category = fooditemsObject.foodCategory;
          pastriesJSON.type = fooditemsObject.foodType;
          pastriesJSON.imageURL = fooditemsObject.imageURL;
          pastriesJSON.description = fooditemsObject.description;
          pastriesJSON.price = fooditemsObject.price;
          FoodItemsBasedOnCategoriesArray.push(pastriesJSON);
        }

        // SPECIAL PASTRY FLAVORS
        else if (foodCategoriesObject === "SPECIAL PASTRY FLAVORS") {
          // CREATING A JSON OBJECT
          var splPastryFlavorsJSON = new Object();
          splPastryFlavorsJSON.id = fooditemsObject._id;
          splPastryFlavorsJSON.rid = generateUniqueId({
            length: 10,
            useLetters: false
          });
          splPastryFlavorsJSON.status = fooditemsObject.status;
          splPastryFlavorsJSON.name = fooditemsObject.foodName;
          splPastryFlavorsJSON.category = fooditemsObject.foodCategory;
          splPastryFlavorsJSON.type = fooditemsObject.foodType;
          splPastryFlavorsJSON.imageURL = fooditemsObject.imageURL;
          splPastryFlavorsJSON.description = fooditemsObject.description;
          splPastryFlavorsJSON.price = fooditemsObject.price;
          FoodItemsBasedOnCategoriesArray.push(splPastryFlavorsJSON);
        }

        // FUSION DESSERTS
        else if (foodCategoriesObject === "FUSION DESSERTS") {
          // CREATING A JSON OBJECT
          var fussionDessertsJSON = new Object();
          fussionDessertsJSON.id = fooditemsObject._id;
          fussionDessertsJSON.rid = generateUniqueId({
            length: 10,
            useLetters: false
          });
          fussionDessertsJSON.status = fooditemsObject.status;
          fussionDessertsJSON.name = fooditemsObject.foodName;
          fussionDessertsJSON.category = fooditemsObject.foodCategory;
          fussionDessertsJSON.type = fooditemsObject.foodType;
          fussionDessertsJSON.imageURL = fooditemsObject.imageURL;
          fussionDessertsJSON.description = fooditemsObject.description;
          fussionDessertsJSON.price = fooditemsObject.price;
          FoodItemsBasedOnCategoriesArray.push(fussionDessertsJSON);
        }

        else {
          // console.log(fooditemsObject);
        }
      }

      // SENDING RESPONSE TO CLIENT FROM SERVER
      res.send(FoodItemsBasedOnCategoriesArray);
    });
  } catch (err) { 
    console.log(err);
  }
};

module.exports = {
  getMenuItems,
};
