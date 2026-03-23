use("ecomerce");


// Find all documents in a collection without any filters 
// db.products.find();  

// Find products filtering with category 
// db.products.find({"category":"Electronics"});

// Find products based on their prices using mongoDB operators 
// db.products.find({"price":{$gt:2000}});

// Find produts in range 
// db.products.find({"price":{$gte:1000,$lte:3000}})

// Sort products based on prices 
// db.products.find().sort({price:1})