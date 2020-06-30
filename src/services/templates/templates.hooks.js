

module.exports = {
  before: {
    all: [],
    find: [
      (context) => {
        // const sequelizeClient = context.app.get('sequelizeClient');
        
        // const { templates } = sequelizeClient.models;

        // if (context.params.query.prefixMatchKey !== undefined && context.params.query.prefixMatch !== undefined) {
        //   console.log('prefixMatch found: ', context.params.query.prefixMatch);
        //   context.params.query = {
        //     ...context.params.query,
        //     [context.params.query.prefixMatchKey]: {
        //       $like: context.params.query.prefixMatch + "%"
        //     }
        //   }
        // }

        console.log(context.params.query)
        
        return context;
      }
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
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
