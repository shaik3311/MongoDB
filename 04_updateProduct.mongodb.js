use("ecomerce")

// Update a documents price 
// db.products.update({"name":"Wireless Mouse"},{$set:{"price":599}})

// Increase all products prices by 10 %
// db.products.updateMany({},{$mul:{"price":1.1}})

// Add a new field in document
// db.products.updateMany({},{$set:{"discount":10}})

// Increase stock of all products by 5
db.products.updateMany({},{$inc:{"stock":5}})

db.products.find()
