const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location_id: {
        type: Number,
        required: true
    },
    mealtype_id: {
        type: Number,
        required: true
    },
    city:{
        type:String,
    },
    city_id:{
        type:Number,
    },
    locality:{
        type:String,
    },
    thumb:{
            type:Array,
    },
    aggregrate_rating:{
        type:Number,
    },
    rating_text:{
        type:String,
    },
    min_price:{
        type:Number,
    },
    contact_number:{
        type:String,
    },
    cuisine_id:{
        type:Array,
    },
    cuisine:{
        type:Array,
    },
    image:{
        type:String,
    },
    
    


})

module.exports = mongoose.model('restaurants', RestaurantSchema);