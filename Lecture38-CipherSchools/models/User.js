const { model, Schema } = require("mongoose");

const { isEmail } = require("validator");
const { encryptPassword } = require("../bcrypt");

const UserSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },

        email: {
            type: String, required: true, trim: true, lowercase: true, unique: true, validate: {
                validator(email) {
                    return isEmail(email);
                }
            }
        },

        age: {
            type: Number, required: true, validate: {
                validator(age) {
                    if (age < 0) {
                        throw new Error(`Age must be positive`);
                    }
                    return true;
                }
            }
        },
        password: {
            type: String, required: true, trim: true, validate: {
                validator(password) {
                    if (password.includes(" ") || password.includes("\n") || password.includes("\t")) {
                        throw new Error("Password must not includes space/tab/newline characters");
                    }
                    if (password.toLowerCase().includes("password")) {
                        throw new Error(`Password must not contains 'password'`);
                    }
                }
            }
        }

    }, { timestamps: true }
);


UserSchema.static.findByEmailAndPasswordForAuth = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("Invalid Credentials");
        }
        if (password !== user.password) {
            throw new Error("Invalid Credentials");
        }
        console.log(`Login Successful`);
        return user;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

UserSchema.pre("save",async function(next){
    const user = this;
    if(user.modifiedPaths().includes("password"))
        {
            user.password = await encryptPassword(user.password);
        }
        next();

})

const User = model("User", UserSchema);

module.exports = User;