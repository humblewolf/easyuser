module.exports = {


  friendlyName: 'Create',


  description: 'Create user.',


  inputs: {

    user_json: {
      type: {},
      required: true,
    },
    phone: {
      type: 'string',
      required: false,
    },
    email: {
      type: 'string',
      required: false,
    }

  },


  exits: {

  },


  fn: async function ({user_json, phone, email}) {

    if(!(phone || email)){
      return "one of phone or email is required"
    }

    let coll = await sails.helpers.getUserCollection();
    let selection_clause = user.getCompositeUniqueSelectorMongo(phone, email);

    return coll.updateOne(selection_clause, {'$set': user_json}, {upsert: true});

  }


};
