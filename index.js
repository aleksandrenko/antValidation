const TEXTS = require('./texts');

const assertString = (input, error) => {
    const isString = (typeof input === 'string' || input instanceof String);

    if (!isString) {
        throw new TypeError(error);
    }
};


const VALIDATORS = {

    required: (value) => (value !== '' && value !== undefined)
        ? ''
        : TEXTS.required
    ,

    int: (value) => (parseInt(value).toString() === value)
        ? ''
        : TEXTS.int
    ,

    float: (value) => (parseFloat(value).toString() === value)
        ? ''
        : TEXTS.float
    ,

    boolean: (value) => (['true', 'false'].includes(value.toLowerCase()))
        ? ''
        : TEXTS.bool
    ,

    // date: (value) => '',
    // format: (value, format) => '',
    // future: (value) => '',
    // futureOrPresent: (value) => '',
    // past: (value) => '',
    // pastOrPresent: (value) => '',
    // email: (value) => '',
    // file: (value) => '',
    // ip: (value) => '',
    // url: (value) => '',
    // precision: (value, percision) => '',
    // positive: (value) => '',
    // positiveOrZero: (value) => '',
    // negative: (value) => '',
    // negativeOrZero: (value) => '',

    min: (_value, _min) => {
        const valueFloat = parseFloat(_value);
        const min = parseFloat(_min);

        if (Number.isNaN(valueFloat)) {
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
        const valueFloat = parseFloat(_value);
        const max = parseFloat(_max);

        if (Number.isNaN(valueFloat)) {
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
                : console.warn(`Trying to use unknown validator (${name})`);
            error && sum.push(error);

            return sum;
        }, []);

    return errors;
};


module.exports = validate;





