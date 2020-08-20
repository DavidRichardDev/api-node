const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const BotSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
});

BotSchema.plugin(mongoosePaginate);

mongoose.model('Bot', BotSchema);