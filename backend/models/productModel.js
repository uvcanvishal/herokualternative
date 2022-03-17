const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please Enter product Description"]
    },
    price:{
        type:String,
        required:[true,"Please Enter product Price"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
        }
    ],
        category:{
            type:String,
            required:[true,"Please Enter product Category"],
        },
        Stock:{
            type:Number,
            required:[true,"Please Enter product Stock"],
            maxLength:[4,"Stock cannot exceed 4 characters"],
            default:1
        },
        numOfReviews:{
            type:Number,
            default:0
        },
        reviews:[
            {
                name:{
                    type:String,
                    required:true,
                },
                rating:{
                    type:String,
                    required:true,
                },
                comment:{
                    type:String,
                    required:true,
                }
            }
        ],
        createdAt:{
            type:Date,
            default:Date.now
        }
})

module.exports = mongoose.model("Product",productSchema);