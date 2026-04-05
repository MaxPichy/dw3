import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    title: String,
    platform: String,
    year: Number,
    price: Number
});

const Games = mongoose.model('Games', gameSchema);

export default Games;