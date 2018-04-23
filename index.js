
const VALIDATORS = {
    required: (value) => value !== '' && value !== undefined,
    min: (value, min) => (value.length || value) > min,
    max: (value, max) => (value.length || value) < max,
};


export default ({fieldConfig, value}) => {
    return '';
}

import fieldValidator from './utils/fieldValidator';

const getFieldConfig = (field) => ({
    type: 'text',
    defaultValue: '3',
    validators: {
        int: true,
        float: true,
        string: true,
        boolean: true,
        id: true,
        date: true,
        format: 'mm:dd:yyyy',
        future: true,
        futureOrPresent: true,
        past: true,
        pastOrPresent: true,
        email: true,
        file: true,
        url: true,
        precision: 10,
        positive: true,
        positiveOrZero: true,
        negative: true,
        negativeOrZero: true
    },
    behaviour: {
        noUI: true,
        noUserInput: true
    }
});


test('No validators and no type', () => {
    const fieldConfig = getFieldConfig();
    const value = '4';
    const error = fieldValidator({fieldConfig, value});
    expect(error).toBe('');
});

test('No validators and no type', () => {
    const fieldConfig = getFieldConfig({

    });
    const value = '4';
    const error = fieldValidator({fieldConfig, value});
    expect(error).toBe('');
});


