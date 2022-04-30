module.exports = {

  attribute: {

    name: { type: 'string'},
    phone: { type: 'string'},
    email: { type: 'string'},
    instaId: { type: 'string'},
    fbId: { type: 'string'},
    fyndsterId: { type: 'string'},
    address: { type: 'string'},
    orders: {
      name: { type: 'string'},
      item_name: { type: 'string' }
    }

  },

  getCompositeUniqueSelectorMongo: function (phone, email){

    let ret_obj = [];

    if(phone){
      ret_obj.push({phone})
    }

    if(email){
      ret_obj.push({email})
    }

    return {"$or": ret_obj}

  }

}
