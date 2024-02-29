import mongoose from 'mongoose'
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const DeckSchema = new Schema({
    title: String,
    body: String,
    date: Date,
})

const DeckModel = mongoose.model('Deck', DeckSchema);

export default DeckModel;