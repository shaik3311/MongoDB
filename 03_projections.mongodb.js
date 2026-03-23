use("ecomerce");


//  Using projections for selecting perticular fields in document
db.products.find({},{"name":1,"price":1,"_id":0})