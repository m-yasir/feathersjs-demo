// Initializes the `templates` service on path `/users/templates`
const { Templates } = require("./templates.class");
const createModel = require("../../models/templates.model");
const hooks = require("./templates.hooks");
const { Op } = require("sequelize");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    operators: {
      $like: Op.like,
    },
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/templates", new Templates(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("templates");

  service.hooks(hooks);
};
