module.exports = {


  friendlyName: 'Read',


  description: 'Read user.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    coll = await sails.helpers.getUserCollection();
    return coll.find({}).toArray();

  }


};
