const hooks = require('feathers-authentication-hooks');

module.exports = {
  before: {
    all: [],
    find: [hooks.restrictToOwner( { idField: 'Id', ownerField: 'ownerId' })],
    get: [hooks.restrictToOwner({ idField: 'Id', ownerField: 'ownerId' })],
    create: [hooks.associateCurrentUser({ idField: 'Id', as: 'ownerUser'})],
    update: [hooks.restrictToOwner({ idField: 'Id', ownerField: 'ownerId' })],
    patch: [hooks.restrictToOwner({ idField: 'Id', ownerField: 'ownerId' }) ],
    remove: [hooks.restrictToOwner({ idField: 'Id', ownerField: 'ownerId' })] 
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
