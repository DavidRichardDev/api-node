const mongoose = require('mongoose');
const Bot = mongoose.model('Bot');

module.exports = {
    async index(req, res){
        const {page = 1} = req.query;
        const bots = await Bot.paginate({}, {page, limit: 5});

        return res.json(bots);
    },

    async show(req, res){
        const bot = await Bot.findById(req.params.id);

        return res.json(bot);
    },

    async store(req, res){
        const bot = await Bot.create(req.body);

        return res.json(bot);
    },

    async update(req, res){
        const bot = await Bot.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(bot);
    },

    async destroy(req, res){
        await Bot.findByIdAndRemove(req.params.id);

        return res.send();
    }
}