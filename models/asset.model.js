const mongoose = require('mongoose');
const assetSchema = new mongoose.Schema({
   
    owner: {
        type: String,
        required: [true, 'owner is required']
    },
    name: {
        type: String
    },
    value: {
        type: String
    },
    specs: [{ 
        spec: String, 
      }],
    image: {
        type: String
    }
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
