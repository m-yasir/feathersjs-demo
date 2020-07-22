

module.exports = {
  before: {
    all: [],
    find: [
      (context) => {

        if (context.params.query.prefixMatchKey !== undefined && context.params.query.prefixMatch !== undefined) {
          console.log('context.params.query: ', context.params.query);
          // context.params.query = {
          //   ...context.params.query,
          //   [context.params.query.prefixMatchKey]: {
          //     $like: "%" + context.params.query.prefixMatch + "%",
          //   },
          // };
          console.log('context.params.query: ', context.params.query);
        }

        if (context.params.query.in)
          context.params.query = {
            text: {
              $in: JSON.parse(context.params.query.in),
            },
          };
        
        return context;
      }
    ],
    get: [],
    create: [(context) => {
      console.log("context.data", context.data);
      return context;
    }],
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
