

function _typeof(obj) {
    '@babel/helpers - typeof'; return _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
    }, _typeof(obj);
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key); if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    } return obj;
}
function _toPropertyKey(arg) {
    const key = _toPrimitive(arg, 'string'); return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== 'object' || input === null) return input; const prim = input[Symbol.toPrimitive]; if (prim !== undefined) {
        const res = prim.call(input, hint || 'default'); if (_typeof(res) !== 'object') return res; throw new TypeError('@@toPrimitive must return a primitive value.');
    } return (hint === 'string' ? String : Number)(input);
}
const User = require('../models/model');
const _require = require('uuid');
const uuidv4 = _require.v4;
const _require2 = require('sequelize');
const Op = _require2.Op;
const createUser = function createUser(userData) {
    return User.create({
        id: uuidv4(),
        login: userData.login,
        password: userData.password,
        age: userData.age,
        isDeleted: userData.isDeleted
    });
};
const findUserById = function findUserById(userId) {
    return User.findByPk(userId);
};
const findAllUsers = function findAllUsers(subString, limit) {
    return User.findAll({
        where: {
            login: _defineProperty({}, Op.substring, subString),
            isDeleted: false
        },
        limit
    });
};
module.exports = {
    createUser,
    findUserById,
    findAllUsers
};
