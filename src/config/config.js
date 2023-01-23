config = {
  production: {
    PORT: 1234,
  },
  development: {
    PORT: 5000,
  },
};

//? If the current environment variable is set i.e is not undefined use it
let env = process.env.node_env;
module.exports = config[env || "development"];
