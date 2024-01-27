export const selectData = {
  forSale: {
    category: [
      "Appliances",
      "Art & Crafts",
      "Audio & Stereo Equipment",
      "Automotive Items & Parts",
      "Baby & Kids Stuff",
      "Bicycles",
      "Books ,Comics & Magazines",
      "Cameras & Photography Equipment",
      "Christmas Decorations",
      "Clothes, Shoes & Accessories",
      "Collectibles &  Sports Memorabilia",
      "Computers,Tablets, Software  & Hardware",
      "DIY Tools & Materials",
      "Freebies",
      "Health & Beauty",
      "Heavy Equipment",
      "Home & Garden",
      "Household & Furniture",
      "Jewellery & Watches",
      "Films & TV",
      "Music & CDs",
      "Musical Instruments & DJ Equipment",
      "Office Furniture & Equipment",
      "Mobile Phones, Smart Watches & Accessories",
      "Sports, Leisure & Travel",
      "Stuff Wanted",
      "Tickets",
      " Video Games & Consoles",
      "Food & Drink",
      "Tyres",
      "Toys & Hobbies",
      "Digital Goods",
    ],
    condition: ["New", "Refurbished", "Used", "For parts or not working"],
    color: [
      "Red",
      "Blue",
      "Green",
      "Yellow",
      "Purple",
      "Pink",
      "Orange",
      "Brown",
      "Black",
      "White",
      "Grey",
      "Gold",
      "Silver",
      "Navy blue",
      "Sky blue",
      "Lime green",
      "Teal",
      "Indigo",
      "Magenta",
      "Violet",
      "Khaki",
      "Salmon",
      "Crimson",
      "Lavender",
      "Plum",
      "Blue violet",
      "Olive",
      "Cyan",
      "Maroon",
      "Beige",
    ],
  },

  estate: {
    listing: ["Buying", "Renting", "Selling"],
    property: [
      "House",
      "Condominium",
      "Apartment/Flat",
      "Commericial",
      "Farmhouse",
      "Land",
      "Industrial",
      "Room",
      "Other",
    ],
    bedrooms: ["1", "2", "3", "4", "5+", "None"],
    bathrooms: ["1", "2", "3", "4", "5+", "None"],
    tenure: ["Freehold", "Leasehold", "Unknown"],
    propertyCondition: ["Excellent", "Good", "In need of repair"],
    key: [
      "Detached property",
      "Garage",
      "Double garage",
      "Private garden",
      "Communal garden",
      "Open plan living",
      "Gated community",
      "Balcony",
    ],
    nearest: [
      "Primary school",
      "Secondary school",
      "University",
      "Hospital",
      "Public transport",
      "Airport",
      "Restaurants & cafes",
      "Shopping centre",
      "Public park",
      "Beach",
      "None",
    ],
    facilities: [
      "Private parking",
      "Off road parking",
      "Internet",
      "Pets allowed",
      "Room service",
      "Shower",
      "Smoke alarms",
      "Fire extinguishers",
      "Washing machine",
      "Dishwasher",
      "Microwave",
      "Refrigerator",
      "Kitchenware",
      "Oven",
      "Dining area",
      "Seating Area",
      "Private entrance",
      "Heating",
      "Air conditioning",
      "Built-in wardrobes",
      "Fitten kitchen",
      "Disabled person facilities",
      "Private swimming pool",
      "Communal swimming pool",
      "Games Room",
      "Underfloor heating",
    ],
  },

  truck: {
    vehicleType: [
      "Aircraft",
      "Boats & Watercraft",
      "Cars",
      "Classic Cars",
      "Commericial Trucks",
      "Motorcycles",
      "RV & Motorhomes",
      "SUVs",
      "Trucks",
      "Utility & Work Trailers",
      "Vans",
      "Bikes",
      "Heavy Machinery",
      "Vehicles Wanted",
    ],
    saleType: ["Private Seller", "Trader"],
    condition: ["Brand new", "Used", "Accident damaged"],
    make: ["Make 1", "Make 2"],
    model: ["Model 1", "Model 2"],
    year: [
      ...[...new Array(new Date().getFullYear() - 1899)].map((_, index) => {
        return (
          index +
          new Date(Date.now()).getFullYear() -
          (new Date(Date.now()).getFullYear() - 1900)
        ).toString();
      }),
    ].reverse(),
    gearBox: ["Manual", "Automatic"],
    fualType: [
      "Gasoline",
      "Petrol",
      "Diesel",
      "Liquefied petroleum gas (LPG)",
      "Compressed Natural Gas (CNG)",
      "Micro Hybrid",
      "Mild Hybrid",
      "Mild Hybrid Electric Vehicle (MHEV)",
      "Hybrid Electric Vehicle (HEV)",
      "Plug-in Hybrid Electric Vehicle (PHEV)",
      "Battery Electric Vehicle (BEV)",
      "Hydrogen Fuel Cell Electric Vehicle (FCEV)",
      "Other",
    ],
    doors: ["1", "2", "3", "4", "5", "6", "7"],
    color: [
      "Beige",
      "Black",
      "Blue",
      "Bronze",
      "Brown",
      "Burgundy",
      "Gold",
      "Green",
      "Grey",
      "Indigo",
      "Magenta",
      "Maroon",
      "Multicolour",
      "Navy",
      "Orange",
      "Pink",
      "Purple",
      "Red",
      "Silver",
      "Turquoise",
      "White",
      "Yellow",
    ],
    bodyType: [
      "Hatchback",
      "Estate/Wagon",
      "SUV",
      "Saloon/Sedan",
      "Coupe",
      "Convertible",
      "Van/Minivan",
      "Truck/Pickup",
    ],
    seats: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19+",
    ],
  },
};
