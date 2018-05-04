const TEXTS = require('./texts');
const validator = require('validator');

// all validator available https://github.com/chriso/validator.js

const assertString = (input, error) => {
    const isString = (typeof input === 'string' || input instanceof String);

    if (!isString) {
        throw new TypeError(error);
    }
};


const VALIDATORS = {

    required: (value) => !validator.isEmpty(value)
        ? ''
        : TEXTS.required
    ,

    int: (value) => validator.isInt(value)
        ? ''
        : TEXTS.int
    ,

    number: (value) => validator.isNumeric(value)
        ? ''
        : TEXTS.number
    ,

    float: (value) => validator.isFloat(value)
        ? ''
        : TEXTS.float
    ,

    isCreditCard: (value) => validator.isCreditCard(value)
        ? ''
        : TEXTS.cc
    ,

    boolean: (value) => (['true', 'false'].includes(value.toLowerCase()))
        ? ''
        : TEXTS.bool
    ,

    isLatLong: (value) => validator.isLatLong(value)
        ? ''
        : TEXTS.latLng
    ,

    email: (value) => validator.isEmail(value)
        ? ''
        : TEXTS.email
    ,

    data: (value) => validator.toDate(value) !== null
        ? ''
        : TEXTS.date
    ,

    url: (value) => validator.isURL(value)
        ? ''
        : TEXTS.url
    ,

    ip: (value) => validator.isIP(value)
        ? ''
        : TEXTS.ip
    ,

    min: (_value, _min) => {
        const valueFloat = validator.toFloat(_value);
        const min = validator.toFloat(_min);

        if (!validator.isNumeric(_value)) {
            return _value.length > min
                ? ''
                : TEXTS.minString(min);
        } else {
            return valueFloat > min
                ? ''
                : TEXTS.minNumber(min);
        }
    },

    max: (_value, _max) => {
        const valueFloat = validator.toFloat(_value);
        const max = validator.toFloat(_max);

        if (!validator.isNumeric(_value)) {
            return _value.length < max
                ? ''
                : TEXTS.maxString(max);
        } else {
            return valueFloat < max
                ? ''
                : TEXTS.maxNumber(max);
        }
    }
};


const validate = ({ants, value}) => {
    assertString(ants, TEXTS.antsFormat);
    assertString(value, TEXTS.valueFormat);

    const validators = ants
        .split('@')
        .map(ant => ant.trim().toLowerCase())
        .splice(1);

    const errors = validators
        .map(validator => {
            const parts = validator
                .replace(')', '')
                .split('(');

            const name = parts[0];
            const config = parts[1];

            return {
                name,
                config
            };
        }).reduce((sum, validator) => {
            const { name, config } = validator;
            const vfn = VALIDATORS[name];
            const error = vfn
                ? vfn(value, config)
                : console.warn(`Trying to use unknown validator: (${name})`);
            error && sum.push(error);

            return sum;
        }, []);

    return errors;
};


module.exports = validate;





