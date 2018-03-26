const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const SALT_WORK_FACTOR = 10;

const participantSchema = new mongoose.Schema({
  
  email: {
    type: String,
    lowercase: true,
    required: [true, 'Email is required'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'User needs a password']
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  vatIdNumber: {
    type: String
  },
  description: {
    type: String,
    maxlength: 250
  },
  image: {
    type: String,
    default: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=250×250&w=250&h=250'
  },
  address: [{ 
    country: String, 
    address1: String,
    address1: String,
    city: String,
    postalCode: String 
  }],
  roll: {
    type: String,
    required: [true, 'User needs a password'],
    default: ''

  }
},

//Additional Mongoose Settings
{ 
  //Añade fecha de creación y de modificación.
  timestamps: true,

  //método middleware de serialización a JSON
  toJSON: {
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
      delete ret.__v;
      delete ret.password;
      return ret;
    }
  }
});


participantSchema.pre('save', function save(next) {
  const participant = this;
  if (!participant.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(SALT_WORK_FACTOR)
    .then(salt => {
      bcrypt.hash(participant.password, salt)
        .then(hash => {
          participant.password = hash;
          return next();
        })
        .catch(err => next(err));
    })
    .catch(err => next(err));
});

participantSchema.methods.checkPassword = function (password) {
  return bcrypt.compare(password, this.password);
}

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;
