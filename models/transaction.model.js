const mongoose = require('mongoose');
const transactionSchema = new mongoose.Schema({
    assetId: {
        type: String,
        required: [true, 'The phone brand is required']
    },
    newOwner: {
        type: String,
        required: [true, 'owner is required']
    },
    newValue: {
        type: Number,
        required: [true, 'Value is required']
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

 const Transaction = mongoose.model('Transaction', assetSchema);
 module.exports = Transaction;
