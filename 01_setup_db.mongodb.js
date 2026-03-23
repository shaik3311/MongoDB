use("ecomerce");

db.products.insertMany(
    [
  {
    name: "Wireless Mouse",
    price: 499,
    category: "Electronics",
    brand: "LogiTech",
    stock: 120,
    rating: 4.3,
    description: "Smooth wireless mouse with USB receiver"
  },
  {
    name: "Mechanical Keyboard",
    price: 2499,
    category: "Electronics",
    brand: "Redragon",
    stock: 80,
    rating: 4.6,
    description: "RGB mechanical keyboard with blue switches"
  },
  {
    name: "Bluetooth Speaker",
    price: 1499,
    category: "Electronics",
    brand: "Boat",
    stock: 60,
    rating: 4.2,
    description: "Portable speaker with deep bass"
  },
  {
    name: "Running Shoes",
    price: 1999,
    category: "Footwear",
    brand: "Nike",
    stock: 150,
    rating: 4.5,
    description: "Lightweight running shoes"
  },
  {
    name: "Casual T-Shirt",
    price: 499,
    category: "Clothing",
    brand: "Puma",
    stock: 200,
    rating: 4.1,
    description: "Cotton casual wear t-shirt"
  },
  {
    name: "Denim Jeans",
    price: 1299,
    category: "Clothing",
    brand: "Levis",
    stock: 100,
    rating: 4.4,
    description: "Slim fit denim jeans"
  },
  {
    name: "Smartphone",
    price: 14999,
    category: "Electronics",
    brand: "Samsung",
    stock: 50,
    rating: 4.5,
    description: "Android smartphone with AMOLED display"
  },
  {
    name: "Laptop Backpack",
    price: 999,
    category: "Accessories",
    brand: "Wildcraft",
    stock: 90,
    rating: 4.3,
    description: "Waterproof laptop bag"
  },
  {
    name: "Wrist Watch",
    price: 2999,
    category: "Accessories",
    brand: "Fossil",
    stock: 40,
    rating: 4.6,
    description: "Premium analog watch"
  },
  {
    name: "Sunglasses",
    price: 799,
    category: "Accessories",
    brand: "RayBan",
    stock: 70,
    rating: 4.2,
    description: "UV protected sunglasses"
  },

  // --- continue pattern to 50 ---
  {
    name: "Gaming Mouse Pad",
    price: 299,
    category: "Electronics",
    brand: "CosmicByte",
    stock: 110,
    rating: 4.1,
    description: "Large anti-slip mouse pad"
  },
  {
    name: "LED Monitor",
    price: 8999,
    category: "Electronics",
    brand: "LG",
    stock: 30,
    rating: 4.5,
    description: "24-inch Full HD monitor"
  },
  {
    name: "Office Chair",
    price: 5999,
    category: "Furniture",
    brand: "GreenSoul",
    stock: 25,
    rating: 4.4,
    description: "Ergonomic office chair"
  },
  {
    name: "Water Bottle",
    price: 199,
    category: "Home",
    brand: "Milton",
    stock: 200,
    rating: 4.0,
    description: "1L plastic bottle"
  },
  {
    name: "Mixer Grinder",
    price: 3499,
    category: "Home Appliances",
    brand: "Prestige",
    stock: 40,
    rating: 4.3,
    description: "3-jar mixer grinder"
  },
  {
    name: "Air Fryer",
    price: 7999,
    category: "Home Appliances",
    brand: "Philips",
    stock: 20,
    rating: 4.6,
    description: "Oil-free cooking air fryer"
  },
  {
    name: "Notebook",
    price: 99,
    category: "Stationery",
    brand: "Classmate",
    stock: 300,
    rating: 4.2,
    description: "Ruled notebook"
  },
  {
    name: "Pen Pack",
    price: 150,
    category: "Stationery",
    brand: "Cello",
    stock: 250,
    rating: 4.1,
    description: "Pack of 10 pens"
  },
  {
    name: "Desk Lamp",
    price: 699,
    category: "Home",
    brand: "Wipro",
    stock: 60,
    rating: 4.3,
    description: "LED desk lamp"
  },
  {
    name: "Power Bank",
    price: 1299,
    category: "Electronics",
    brand: "Mi",
    stock: 75,
    rating: 4.4,
    description: "10000mAh power bank"
  }
]
);