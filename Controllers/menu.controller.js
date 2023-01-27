const axios = require("axios");
const generateUniqueId = require('generate-unique-id');

const getMenuItems = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://desichowrastha.onrender.com/api/fooditems/list",
  };
  // AXIOS REQUEST
  axios.request(options).then(function (response) {
    var fooditems = response.data.result;

    var FoodItemsBasedOnCategoriesArray = [];
    var MenuItemsArray = [];

    for (var i = 0; i < fooditems.length; i++) {
      var fooditemsObject = fooditems[i];
      var foodCategoriesObject = fooditems[i]["foodCategory"];
      // BEVERAGES
      if (foodCategoriesObject === "BEVERAGES") {
        // CREATING A JSON OBJECT
        var beveragesJSON = new Object();
        beveragesJSON.id = fooditemsObject._id;
        beveragesJSON.rid = generateUniqueId({
          length: 10,
          useLetters: false
        });
        beveragesJSON.name = fooditemsObject.foodName;
        beveragesJSON.category = fooditemsObject.foodCategory;
        beveragesJSON.imageURL = fooditemsObject.imageURL;
        beveragesJSON.description = fooditemsObject.description;
        beveragesJSON.price = fooditemsObject.price;
        beveragesJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(beveragesJSON);
      } 

      // BIRYANI / APPETIZER FAMILY PACK
      else if (foodCategoriesObject === "BIRYANI / APPETIZER FAMILY PACK") {
        // CREATING A JSON OBJECT
        var biriyaniFamilyJSON = new Object();
        biriyaniFamilyJSON.id = fooditemsObject._id;
        biriyaniFamilyJSON.rid = generateUniqueId({
          length: 10,
          useLetters: false
        });
        biriyaniFamilyJSON.name = fooditemsObject.foodName;
        biriyaniFamilyJSON.category = fooditemsObject.foodCategory;
        biriyaniFamilyJSON.imageURL = fooditemsObject.imageURL;
        biriyaniFamilyJSON.description = fooditemsObject.description;
        biriyaniFamilyJSON.price = fooditemsObject.price;
        biriyaniFamilyJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(biriyaniFamilyJSON);
      } 
      
      // BIRYANI SINGLE
      else if (foodCategoriesObject === "BIRYANI SINGLE") {
        // CREATING A JSON OBJECT
        var biriyaniSingleJSON = new Object();
        biriyaniSingleJSON.id = fooditemsObject._id;
        biriyaniSingleJSON.rid = generateUniqueId({
          length: 10,
          useLetters: false
        });
        biriyaniSingleJSON.name = fooditemsObject.foodName;
        biriyaniSingleJSON.category = fooditemsObject.foodCategory;
        biriyaniSingleJSON.imageURL = fooditemsObject.imageURL;
        biriyaniSingleJSON.description = fooditemsObject.description;
        biriyaniSingleJSON.price = fooditemsObject.price;
        biriyaniSingleJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(biriyaniSingleJSON);
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
        breadsJSON.name = fooditemsObject.foodName;
        breadsJSON.category = fooditemsObject.foodCategory;
        breadsJSON.imageURL = fooditemsObject.imageURL;
        breadsJSON.description = fooditemsObject.description;
        breadsJSON.price = fooditemsObject.price;
        breadsJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(breadsJSON);
      }

      // CHAAT
      else if (foodCategoriesObject === "CHAAT") {
        // CREATING A JSON OBJECT
        var chaatJSON = new Object();
        chaatJSON.id = fooditemsObject._id;
        chaatJSON.rid = generateUniqueId({
          length: 10,
          useLetters: false
        });
        chaatJSON.name = fooditemsObject.foodName;
        chaatJSON.category = fooditemsObject.foodCategory;
        chaatJSON.imageURL = fooditemsObject.imageURL;
        chaatJSON.description = fooditemsObject.description;
        chaatJSON.price = fooditemsObject.price;
        chaatJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(chaatJSON);
      }

      // CURRIES
      else if (foodCategoriesObject === "CURRIES") {
        // CREATING A JSON OBJECT
        var curriesJSON = new Object();
        curriesJSON.id = fooditemsObject._id;
        curriesJSON.rid = generateUniqueId({
          length: 10,
          useLetters: false
        });
        curriesJSON.name = fooditemsObject.foodName;
        curriesJSON.category = fooditemsObject.foodCategory;
        curriesJSON.imageURL = fooditemsObject.imageURL;
        curriesJSON.description = fooditemsObject.description;
        curriesJSON.price = fooditemsObject.price;
        curriesJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(curriesJSON);
      }

      // DESSERTS
      else if (foodCategoriesObject === "DESSERTS") {
        // CREATING A JSON OBJECT
        var dessertsJSON = new Object();
        dessertsJSON.id = fooditemsObject._id;
        dessertsJSON.rid = generateUniqueId({
          length: 10,
          useLetters: false
        });
        dessertsJSON.name = fooditemsObject.foodName;
        dessertsJSON.category = fooditemsObject.foodCategory;
        dessertsJSON.imageURL = fooditemsObject.imageURL;
        dessertsJSON.description = fooditemsObject.description;
        dessertsJSON.price = fooditemsObject.price;
        dessertsJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(dessertsJSON);
      }

      // VEG APPETIZERS
      else if (foodCategoriesObject === "VEG APPETIZERS") {
        // CREATING A JSON OBJECT
        var vegAppetizersJSON = new Object();
        vegAppetizersJSON.id = fooditemsObject._id;
        vegAppetizersJSON.rid = generateUniqueId({
          length: 10,
          useLetters: false
        });
        vegAppetizersJSON.name = fooditemsObject.foodName;
        vegAppetizersJSON.category = fooditemsObject.foodCategory;
        vegAppetizersJSON.imageURL = fooditemsObject.imageURL;
        vegAppetizersJSON.description = fooditemsObject.description;
        vegAppetizersJSON.price = fooditemsObject.price;
        vegAppetizersJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(vegAppetizersJSON);
      }

      // SNACKS
      else if (foodCategoriesObject === "SNACKS") {
        // CREATING A JSON OBJECT
        var snacksJSON = new Object();
        snacksJSON.id = fooditemsObject._id;
        snacksJSON.rid = generateUniqueId({
          length: 10,
          useLetters: false
        });
        snacksJSON.name = fooditemsObject.foodName;
        snacksJSON.category = fooditemsObject.foodCategory;
        snacksJSON.imageURL = fooditemsObject.imageURL;
        snacksJSON.description = fooditemsObject.description;
        snacksJSON.price = fooditemsObject.price;
        snacksJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(snacksJSON);
      }

      // NON VEG APPETIZERS
      else if (foodCategoriesObject === "NON VEG APPETIZERS") {
        // CREATING A JSON OBJECT
        var nonVegAppetizersJSON = new Object();
        nonVegAppetizersJSON.id = fooditemsObject._id;
        nonVegAppetizersJSON.rid = generateUniqueId({
          length: 10,
          useLetters: false
        });
        nonVegAppetizersJSON.name = fooditemsObject.foodName;
        nonVegAppetizersJSON.category = fooditemsObject.foodCategory;
        nonVegAppetizersJSON.imageURL = fooditemsObject.imageURL;
        nonVegAppetizersJSON.description = fooditemsObject.description;
        nonVegAppetizersJSON.price = fooditemsObject.price;
        nonVegAppetizersJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(nonVegAppetizersJSON);
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
        tandoorJSON.name = fooditemsObject.foodName;
        tandoorJSON.category = fooditemsObject.foodCategory;
        tandoorJSON.imageURL = fooditemsObject.imageURL;
        tandoorJSON.description = fooditemsObject.description;
        tandoorJSON.price = fooditemsObject.price;
        tandoorJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(tandoorJSON);
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
        tiffinsJSON.name = fooditemsObject.foodName;
        tiffinsJSON.category = fooditemsObject.foodCategory;
        tiffinsJSON.imageURL = fooditemsObject.imageURL;
        tiffinsJSON.description = fooditemsObject.description;
        tiffinsJSON.price = fooditemsObject.price;
        tiffinsJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(tiffinsJSON);
      }

      // MAIN ENTREES
      else if (foodCategoriesObject === "MAIN ENTREES") {
        // CREATING A JSON OBJECT
        var mainEntreesJSON = new Object();
        mainEntreesJSON.id = fooditemsObject._id;
        mainEntreesJSON.rid = generateUniqueId({
          length: 10,
          useLetters: false
        });
        mainEntreesJSON.name = fooditemsObject.foodName;
        mainEntreesJSON.category = fooditemsObject.foodCategory;
        mainEntreesJSON.imageURL = fooditemsObject.imageURL;
        mainEntreesJSON.description = fooditemsObject.description;
        mainEntreesJSON.price = fooditemsObject.price;
        mainEntreesJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(mainEntreesJSON);
      }

      // PULAV
      else if (foodCategoriesObject === "PULAV") {
        // CREATING A JSON OBJECT
        var pulavJSON = new Object();
        pulavJSON.id = fooditemsObject._id;
        pulavJSON.rid = generateUniqueId({
          length: 10,
          useLetters: false
        });
        pulavJSON.name = fooditemsObject.foodName;
        pulavJSON.category = fooditemsObject.foodCategory;
        pulavJSON.imageURL = fooditemsObject.imageURL;
        pulavJSON.description = fooditemsObject.description;
        pulavJSON.price = fooditemsObject.price;
        pulavJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(pulavJSON);
      }

      // FRANKIES / WRAPS
      else if (foodCategoriesObject === "FRANKIES / WRAPS") {
        // CREATING A JSON OBJECT
        var frankiesOrWrapsJSON = new Object();
        frankiesOrWrapsJSON.id = fooditemsObject._id;
        frankiesOrWrapsJSON.rid = generateUniqueId({
          length: 10,
          useLetters: false
        });
        frankiesOrWrapsJSON.name = fooditemsObject.foodName;
        frankiesOrWrapsJSON.category = fooditemsObject.foodCategory;
        frankiesOrWrapsJSON.imageURL = fooditemsObject.imageURL;
        frankiesOrWrapsJSON.description = fooditemsObject.description;
        frankiesOrWrapsJSON.price = fooditemsObject.price;
        frankiesOrWrapsJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(frankiesOrWrapsJSON);
      }

      // INDO-CHINESE
      else if (foodCategoriesObject === "INDO-CHINESE") {
        // CREATING A JSON OBJECT
        var indoChineseJSON = new Object();
        indoChineseJSON.id = fooditemsObject._id;
        indoChineseJSON.rid = generateUniqueId({
          length: 10,
          useLetters: false
        });
        indoChineseJSON.name = fooditemsObject.foodName;
        indoChineseJSON.category = fooditemsObject.foodCategory;
        indoChineseJSON.imageURL = fooditemsObject.imageURL;
        indoChineseJSON.description = fooditemsObject.description;
        indoChineseJSON.price = fooditemsObject.price;
        indoChineseJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(indoChineseJSON);
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
        pastriesJSON.name = fooditemsObject.foodName;
        pastriesJSON.category = fooditemsObject.foodCategory;
        pastriesJSON.imageURL = fooditemsObject.imageURL;
        pastriesJSON.description = fooditemsObject.description;
        pastriesJSON.price = fooditemsObject.price;
        pastriesJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(pastriesJSON);
      }

      // PUFFS
      else if (foodCategoriesObject === "PUFFS") {
        // CREATING A JSON OBJECT
        var puffsJSON = new Object();
        puffsJSON.id = fooditemsObject._id;
        puffsJSON.rid = generateUniqueId({
          length: 10,
          useLetters: false
        });
        puffsJSON.name = fooditemsObject.foodName;
        puffsJSON.category = fooditemsObject.foodCategory;
        puffsJSON.imageURL = fooditemsObject.imageURL;
        puffsJSON.description = fooditemsObject.description;
        puffsJSON.price = fooditemsObject.price;
        puffsJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(puffsJSON);
      }

      // EXTRAS
      else if (foodCategoriesObject === "EXTRAS") {
        // CREATING A JSON OBJECT
        var extrasJSON = new Object();
        extrasJSON.id = fooditemsObject._id;
        extrasJSON.rid = generateUniqueId({
          length: 10,
          useLetters: false
        });
        extrasJSON.name = fooditemsObject.foodName;
        extrasJSON.category = fooditemsObject.foodCategory;
        extrasJSON.imageURL = fooditemsObject.imageURL;
        extrasJSON.description = fooditemsObject.description;
        extrasJSON.price = fooditemsObject.price;
        extrasJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(extrasJSON);
      }

      // PARATAS
      else if (foodCategoriesObject === "PARATAS") {
        // CREATING A JSON OBJECT
        var paratasJSON = new Object();
        paratasJSON.id = fooditemsObject._id;
        paratasJSON.rid = generateUniqueId({
          length: 10,
          useLetters: false
        });
        paratasJSON.name = fooditemsObject.foodName;
        paratasJSON.category = fooditemsObject.foodCategory;
        paratasJSON.imageURL = fooditemsObject.imageURL;
        paratasJSON.description = fooditemsObject.description;
        paratasJSON.price = fooditemsObject.price;
        paratasJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(paratasJSON);
      }

      // PULAV FAMILY PACK
      else if (foodCategoriesObject === "PULAV FAMILY PACK") {
        // CREATING A JSON OBJECT
        var pulavFamilyJSON = new Object();
        pulavFamilyJSON.id = fooditemsObject._id;
        pulavFamilyJSON.rid = generateUniqueId({
          length: 10,
          useLetters: false
        });
        pulavFamilyJSON.name = fooditemsObject.foodName;
        pulavFamilyJSON.category = fooditemsObject.foodCategory;
        pulavFamilyJSON.imageURL = fooditemsObject.imageURL;
        pulavFamilyJSON.description = fooditemsObject.description;
        pulavFamilyJSON.price = fooditemsObject.price;
        pulavFamilyJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(pulavFamilyJSON);
      }

      // PIZZA
      else if (foodCategoriesObject === "PIZZA") {
        // CREATING A JSON OBJECT
        var pizzaJSON = new Object();
        pizzaJSON.id = fooditemsObject._id;
        pizzaJSON.rid = generateUniqueId({
          length: 10,
          useLetters: false
        });
        pizzaJSON.name = fooditemsObject.foodName;
        pizzaJSON.category = fooditemsObject.foodCategory;
        pizzaJSON.imageURL = fooditemsObject.imageURL;
        pizzaJSON.description = fooditemsObject.description;
        pizzaJSON.price = fooditemsObject.price;
        pizzaJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(pizzaJSON);
      }

      // UNCATEGORIZED
      else if (foodCategoriesObject === "UNCATEGORIZED") {
        // CREATING A JSON OBJECT
        var uncategorizedJSON = new Object();
        uncategorizedJSON.id = fooditemsObject._id;
        uncategorizedJSON.rid = generateUniqueId({
          length: 10,
          useLetters: false
        });
        uncategorizedJSON.name = fooditemsObject.foodName;
        uncategorizedJSON.category = fooditemsObject.foodCategory;
        uncategorizedJSON.imageURL = fooditemsObject.imageURL;
        uncategorizedJSON.description = fooditemsObject.description;
        uncategorizedJSON.price = fooditemsObject.price;
        uncategorizedJSON.qty = 0;
        FoodItemsBasedOnCategoriesArray.push(uncategorizedJSON);
      }

      else {
        // console.log(fooditemsObject);
      }
      // CREATING A JSON OBJECT
      var menuItemsJSON = new Object();
      menuItemsJSON.menu = FoodItemsBasedOnCategoriesArray;
      MenuItemsArray.push(menuItemsJSON);
    }

    // SENDING RESPONSE TO CLIENT FROM SERVER
    // res.send(MenuItemsArray[0]);
    res.send(FoodItemsBasedOnCategoriesArray);
  });
};

module.exports = {
  getMenuItems,
};
