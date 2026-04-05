import mongoose from 'mongoose';

// O campo 'descriptions' será um documento aninhado
const descriptionSchema = new mongoose.Schema({
    genre: String,
    platform: String,
    rating: String,
});

const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    price: Number,
    descriptions: descriptionSchema

    // Defininco o campo como array
    // descriptions: [descriptionSchema]
});

const Games = mongoose.model('Games', gameSchema);

export default Games;