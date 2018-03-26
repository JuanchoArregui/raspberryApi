const mongoose = require('mongoose');
const assetSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: [true, 'The phone brand is required']
    },
    name: {
        type: String,
        required: [true, 'The phone name is required']
    },
    image: {
        type: String,
        default: ''
    },
    specs: {
        type: [String],
        default: []
    }
}, { 
    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
 });

 const Asset = mongoose.model('Asset', assetSchema);
 module.exports = Asset;
