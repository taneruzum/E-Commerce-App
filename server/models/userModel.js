const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        sparse: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
},
    {
        timestamps: true
    }
);

// UserSchema.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// };

UserSchema.pre('save', function (next) {
    if (this.role === 'admin') {
        // E-posta alanını boş bırak
        this.email = undefined;
    } else {
        // E-posta alanını zorunlu yap
        if (!this.email) {
            return next(new Error('E-posta alanı zorunludur.'));
        }
    }
    next();
});

module.exports = mongoose.model('User', UserSchema);

