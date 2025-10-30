// back-end/scripts/seed.cars.js
require('dotenv').config();
const mongoose = require('mongoose');
const Car = require('../models/Car');
const data = require('./seed.cars.json');

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    const count = await Car.estimatedDocumentCount();
    if (count === 0) {
      await Car.insertMany(data);
      console.log(`Seeded ${data.length} cars`);
    } else {
      console.log(`Skip seeding: ${count} cars already exist`);
    }
  } catch (e) {
    console.error('Seed error:', e);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
})();
