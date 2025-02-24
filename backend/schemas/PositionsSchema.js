const { Schema } = require("mongoose");

const PositionsSchema = new Schema({
    product:String,
    name:String,
    qty:Number,
    avg:Number,
    price:Number,
    ner:String,
    day:String,
    isLoss:Boolean,
});

module.exports = { PositionsSchema };