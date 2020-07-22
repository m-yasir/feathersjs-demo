const { Service } = require("feathers-sequelize");

const Sequelize = require("sequelize");

exports.Templates = class Templates extends Service {
  create(data, context) {
    // console.log("DATA: ", data);
    // console.log("CONTEXT: ", context);
    return super._create(data, params);
  }
};
