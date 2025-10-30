const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    name: String,
    year: Number,
    brand: String,
    style: String,
    color: String,
    price: Number,
    image: String,
    description: String
});

// tự động sinh ID
// CarSchema.pre('save', async function(next) {
//     if (this.isNew) {
//         let existingIds = await Car.find({}, '_id');
//         let newId = 1;

//         while (existingIds.some(car => car._id === newId)) {
//             newId++;
//         }

//         this._id = newId; 
//     }
//     next();
// });

module.exports = mongoose.model('Cars', CarSchema);