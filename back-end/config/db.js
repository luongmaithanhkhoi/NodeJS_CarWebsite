require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        addInitialCars();
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};
const Car = require('../models/Car');
async function addInitialCars() {
    try {
        // Check if products already exist
        const carCount = await Car.countDocuments();
        if (carCount === 0) {
            const cars = [
                //{ name: "BMW 6-Series Gran Coupe", year: "2023", brand: 'BMW', style: "Sedan", color: 'Black', price: "85000", image: 'fc1.png', description: 'BMW 6-Series Gran Coupe là một sedan hạng sang kết hợp thiết kế thanh lịch của coupe với tính năng thực dụng của bốn cửa.' },
                //{ name: "BMW M5", year: "2022", brand: 'BMW', style: "Sedan", color: 'Blue', price: "105000", image: 'fc2.png', description: 'BMW M5 là một chiếc sedan hiệu suất cao với động cơ mạnh mẽ và khả năng tăng tốc ấn tượng.' },
                //{ name: "BMW X5", year: "2021", brand: 'BMW', style: "SUV", color: 'White', price: "70000", image: 'fc3.png', description: 'BMW X5 là một chiếc SUV sang trọng với không gian rộng rãi và công nghệ tiên tiến.' },
                { name: "Audi A6", year: "2022", brand: 'Audi', style: "Sedan", color: 'Silver', price: "80000", image: 'fc4.png', description: 'Audi A6 là một sedan hạng sang nổi bật với thiết kế tinh tế và nội thất cao cấp.' },
                { name: "Audi Q7", year: "2020", brand: 'Audi', style: "SUV", color: 'Black', price: "90000", image: 'fc5.png', description: 'Audi Q7 là một chiếc SUV lớn với khả năng vận hành linh hoạt và không gian nội thất rộng rãi.' },
                { name: "Audi A7", year: "2021", brand: 'Audi', style: "Hatchback", color: 'Red', price: "85000", image: 'fc6.png', description: 'Audi A7 là một hatchback sang trọng với thiết kế khí động học và công nghệ tiên tiến.' },
                { name: "Porsche Panamera", year: "2023", brand: 'Porsche', style: "Sedan", color: 'Green', price: "95000", image: 'fc7.png', description: 'Porsche Panamera là một sedan thể thao với hiệu suất cao và trải nghiệm lái tuyệt vời.' },
                { name: "Porsche Cayenne", year: "2019", brand: 'Porsche', style: "SUV", color: 'Brown', price: "80000", image: 'fc8.png', description: 'Porsche Cayenne là một SUV sang trọng với khả năng xử lý tốt và nội thất cao cấp.' },
                { name: "Porsche 911", year: "2022", brand: 'Porsche', style: "Coupe", color: 'Yellow', price: "115000", image: 'fc9.png', description: 'Porsche 911 là một chiếc coupe thể thao biểu tượng với hiệu suất vượt trội và thiết kế đẹp mắt.' },
                { name: "Mercedes-Benz E-Class", year: "2021", brand: 'Mercedes', style: "Sedan", color: 'Gray', price: "75000", image: 'fc10.png', description: 'Mercedes-Benz E-Class là một sedan sang trọng kết hợp giữa công nghệ hiện đại và sự thoải mái.' },
                { name: "Mercedes-Benz GLE", year: "2020", brand: 'Mercedes', style: "SUV", color: 'Blue', price: "85000", image: 'fc11.png', description: 'Mercedes-Benz GLE là một SUV sang trọng với không gian rộng và khả năng off-road tốt.' },
                { name: "Mercedes-Benz S-Class", year: "2022", brand: 'Mercedes', style: "Sedan", color: 'Black', price: "120000", image: 'fc12.png', description: 'Mercedes-Benz S-Class là mẫu sedan đỉnh cao với công nghệ tiên tiến và sự sang trọng tuyệt đối.' },
                //{ name: "BMW Z4", year: "2020", brand: 'BMW', style: "Roadster", color: 'Red', price: "60000", image: 'fc13.png', description: 'BMW Z4 là một chiếc roadster thể thao với thiết kế hấp dẫn và hiệu suất mạnh mẽ.' },
                { name: "Audi Q5", year: "2022", brand: 'Audi', style: "SUV", color: 'White', price: "55000", image: 'fc14.png', description: 'Audi Q5 là một SUV hạng trung với sự kết hợp hoàn hảo giữa hiệu suất và sự thoải mái.' },
                { name: "Porsche Macan", year: "2021", brand: 'Porsche', style: "SUV", color: 'Silver', price: "70000", image: 'fc15.png', description: 'Porsche Macan là một SUV nhỏ gọn với khả năng lái thể thao và thiết kế sang trọng.' },
                { name: "Mercedes-Benz CLA", year: "2023", brand: 'Mercedes', style: "Coupe", color: 'Blue', price: "40000", image: 'fc16.png', description: 'Mercedes-Benz CLA là một chiếc coupe nhỏ gọn với phong cách thể thao và công nghệ hiện đại.' }
            ];
            await Car.insertMany(cars);
            console.log('Added initial cars to the database');
        } else {
            console.log('Cars already exist in the database');
        }
    } catch (err) {
        console.error('Error adding initial products:', err);
    }
};
module.exports = connectDB;
