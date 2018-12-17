/* eslint-disable no-unused-vars */

class Service {
  constructor (options) {
    this.options = options || {};
  }

  async setup(app){
    this.app = app;
  }

  async find (params) {
    const adv = this.app.service('advertises');
    const usr = this.app.service('users');

    let result = [] ;

    return usr.find().then(users => {
      return adv.find().then(adv1=> {
        var userData;
        userData = users.data;
        
        Array.prototype.forEach.call(adv1.data, adv => {
          let itm;
          userData.forEach(itm => {
            if( itm.id == adv['ownerId']){
              delete itm.password;
              result.push({
                id: adv['id'],
                user: { username:itm['userName'],
                  email: itm['email']
                },
                margin: adv['margin']
              });
            }
          });
        });

        adv1.data = result;

        return adv1;
      });
    });
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
