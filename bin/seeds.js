const mongoose = require('mongoose');
const Asset = require('../models/asset.model');
const Participant = require('../models/participant.model');
const Transaction = require('../models/transaction.model');
require('../configs/db.config');


const participantsData = [
  {
    email: 'juancho@brickfy.com',
    password: 'passw0rd',
    firstName: 'Juancho',
    lastName: 'Arregui',
    vatIdNumber: '2123234P',
    description: 'ironhacker ninja fullstack developer',
    image: 'http://www.elreferente.es/source/noticia/28594/brickfunding_juancho_arregui.jpg',
    address: [{
      country: 'España',
      address1: 'mi calle',
      address2: 'mi piso',
      city: 'mi ciudad',
      postalCode: '234523'
      }],
    roll: 'Admin'
  },
  {
    email: 'paco@brickfy.com',
    password: 'passw0rd',
    firstName: 'Paco',
    lastName: 'Martínez Soria',
    vatIdNumber: '23452344K',
    description: 'don erre que erre',
    image: 'http://s.libertaddigital.com/2016/08/26/martinez-soria-chic.jpg',
    address: [{
      country: 'España',
      address1: 'mi calle',
      address2: 'mi piso',
      city: 'mi ciudad',
      postalCode: '234523'
      }],
    roll: 'Investor'
  },
  {
    email: 'Donald@brickfy.com',
    password: 'passw0rd',
    firstName: 'Donald',
    lastName: 'Trump',
    vatIdNumber: '34568kjghj',
    description: 'el puto amo',
    image: 'https://pmcdeadline2.files.wordpress.com/2018/01/ap_881833377124.jpg?w=446&h=299&crop=1',
    address: [{
      country: 'USA',
      address1: 'mi calle',
      address2: 'mi piso',
      city: 'mi ciudad',
      postalCode: '234523'
      }],
    roll: 'Investor'
  },
  {
    email: 'amanciod@brickfy.com',
    password: 'passw0rd',
    firstName: 'Amancio',
    lastName: 'Ortega',
    vatIdNumber: '3453368kddjghj',
    description: 'mis labores',
    image: 'http://s.libertaddigital.com/2014/03/04/amancio-ortega-portada.jpg',
    address: [{
      country: 'Zaraland',
      address1: 'mi calle',
      address2: 'mi piso',
      city: 'mi ciudad',
      postalCode: '234523'
      }],
    roll: 'Investor'
  },
  {
    email: 'housers@brickfy.com',
    password: 'passw0rd',
    firstName: 'Housers',
    lastName: '',
    vatIdNumber: 'atopedeIVA',
    description: 'Plataforma de inversión',
    image: 'https://www.housers.com/img/HOUSERS-logo-meta.png',
    address: [{
      country: 'Paña',
      address1: 'mi calle',
      address2: 'mi piso',
      city: 'mi ciudad',
      postalCode: '234523'
      }],
    roll: 'Plataforma'
  },
  {
    email: 'prodigy@brickfy.com',
    password: 'passw0rd',
    firstName: 'Prodigy',
    lastName: '',
    vatIdNumber: 'atopedeIVA',
    description: 'Plataforma de inversión ',
    image: 'https://internationalfintech.com/wp-content/uploads/2017/02/Prodigy-Network.png',
    address: [{
      country: 'USA',
      address1: 'mi calle',
      address2: 'mi piso',
      city: 'mi ciudad',
      postalCode: '234523'
      }],
    roll: 'Plataforma'
  }
];


// Asset.create(assetsData)
// .then(() => {
//   console.info("Participants Seeds success:", assetsData);
// })
// .catch(error => {
//   console.error("Participants Seeds error:", assetsData);
// });


Participant.create(participantsData)
  .then(() => {
    console.info("Participants Seeds success:", participantsData);
    mongoose.connection.close();
  })
  .catch(error => {
    console.error("Participants Seeds error:", participantsData);
    mongoose.connection.close();
  });


  
