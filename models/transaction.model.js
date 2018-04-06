const mongoose = require('mongoose');
const transactionSchema = new mongoose.Schema({
    assetId: {
        type: String,
        required: [true, 'The passet ID is required']
    },
    newOwner: {
        type: String,
        required: [true, 'The owner ID is required']
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

 const Transaction = mongoose.model('Transaction', transactionSchema);
 module.exports = Transaction;
