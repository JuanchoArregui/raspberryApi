const mongoose = require('mongoose');
const assetSchema = new mongoose.Schema({
    brickfyAssetId: {
        type: String,
    },
    name: {
        type: String,
        required: [true, 'name is required']
    },
    owner: {
        type: String,
        required: [true, 'owner is required']
    },

    ini: {
        type: Date
    },
    end: {
        type: Date
    },
    disinvestment: {
        type: Number
    },
    gross: {
        type: Number
    },
    net: {
        type: Number,
        required: [true, 'net profitability is required']
    },
    coc: {
        type: Number
    },


    status: {
        type: String,
        enum: [ "open", "closed"],
        required: [true, 'status "open" or "closed" is required'],
        default: 'open'
    },
    target: {
        type: Number,
        required: [true, 'owner is required']
    },
    value: {
        type: Number
    },
    currency: {
        type: String,
        default: 'EUR'
    },
    minimum: {
        type: Number
    },
    investors: {
        type: Number
    },
    completed: {
        type: Number
    },

    address: [{ 
        country: String, 
        address1: String,
        address2: String,
        city: String,
        estate: String,
        postalCode: String 
      }],

    urlAsset: {
        type: String
    },


    images: {
       type: [ String ],
       default: []
    },
    description: {
        type: String
    },


},



//Additional Mongoose Settings
{ 
    timestamps: true,

    toJSON: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
    
 }

);

 const Asset = mongoose.model('Asset', assetSchema);
 module.exports = Asset;
