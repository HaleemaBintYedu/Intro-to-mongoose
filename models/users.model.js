const { schema, model } = require("mongoose");

const userSchema = new schema({

  firstName: {
    type: String,
    required: true,
  },

  middleName: String,

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  gender: String,

});

module.exports = model("User", userSchema);
