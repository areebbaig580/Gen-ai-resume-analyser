const mongoose = require('mongoose');

const tokenBlacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [true, "Token is needed"],
    }
}, {
    timestamps: true
})

const tokenBlackListModel = mongoose.model('tokenBlackList', tokenBlacklistSchema)

module.exports = tokenBlackListModel