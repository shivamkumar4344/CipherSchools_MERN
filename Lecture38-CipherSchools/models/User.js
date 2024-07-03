const { model, Schema } = require("mongoose");

const UserSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },

        email: { type: String, required: true, trim: true, lowercase: true, unique: true },

        age: { type: Number, required: true },
        password: { type: String, required: true, trim: true }

    }, { timestamps: true }
);

const User = model("User", UserSchema);

module.exports = User;