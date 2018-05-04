module.exports = {
    valueFormat: 'Only string values can be validated.',
    antsFormat: 'Annotations should be in a form of text. Example: "@max(10) @min(1) @email".',
    required: 'Field is required.',
    int: 'Value must be a whole number.',
    minNumber: (min) => `Value must be larger then ${min}.`,
    minString: (min) => `Text must be longer then ${min} characters.`,
    maxNumber: (max) => `Value must be smaller then ${max}.`,
    maxString: (max) => `Text must be shorter then ${max} characters.`,
    bool: 'Value must me boolean value.',
    float: 'Value must be a number.',
    email: "Value must be a valid email.",
    url: "Value must be a valid URL address.",
    number: "Value must be a number.",
    cc: "Values must be a valid credit card.",
    latLng: "Values must be a valid latitude-longitude coordinate in the format lat,long or lat, long.",
    date: "Value must be a valid date.",
    ip: "Value must be a valid IP address."
};