module.exports = {
    valueFormat: 'Only string values can be validated.',
    antsFormat: 'Annotations should be in a form of text. Example: "@max(10) @min(1) @email".',
    required: 'Field is required.',
    int: 'Value must be a whole number.',
    minNumber: (min) => `Value must be larger then ${min}.`,
    minString: (min) => `Text must be longer then ${min} characters.`,
    maxNumber: (max) => `Value must be smaller then ${max}.`,
    maxString: (max) => `Text must be shorter then ${max} characters.`
};