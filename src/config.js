config = {
  production: {
    PORT: 1234,
  },
  development: {
    PORT: 5000,
  },
};

//? If the current environment variable is set i.e is not undefined use it
module.exports = config[process.env.node_env.trim() || "development"];
