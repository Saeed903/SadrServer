
const { authenticate } = require('@feathersjs/authentication').hooks;
const hooks = require('feathers-authentication-hooks');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [hooks.restrictToOwner({ idField: 'id', ownerField: 'ownerId' })],
    create: [hooks.associateCurrentUser({ idField: 'id', as: 'ownerId'})],
    update: [hooks.restrictToOwner({ idField: 'id', ownerField: 'ownerId' })],
    patch: [hooks.restrictToOwner({ idField: 'id', ownerField: 'ownerId' })],
    remove: [hooks.restrictToOwner({ idField: 'id', ownerField: 'ownerId' })]
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
