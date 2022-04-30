module.exports = {


  friendlyName: 'Get user collection',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    let db = user.getDatastore().manager;
    return  db.collection('user');

  }


};

