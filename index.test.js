const validate = require('./index');
const TEXTS = require('./texts');

test('No validators and no type', () => {
    const ants = 'Some text @min(10) @max(1000)';
    const value = '412';

    const error = validate({ants, value});
    expect(error).toEqual([]);
});

test('Required field', () => {
    const ants = 'Some text @required';
    const value = '';

    const error = validate({ants, value});
    expect(error).toEqual(
        [TEXTS.required]
    );
});

test('Min/Max', () => {
    const ants = 'Some text @min(1) @max(10)';
    expect(validate({ants, value: 'ABC'})).toEqual([]);

    expect(validate({ants, value: ''})).toEqual([
        TEXTS.minString(1)
    ]);

    expect(validate({ants, value: 'a123456789010'})).toEqual([
        TEXTS.maxString(10)
    ]);

    expect(validate({ants, value: '0'})).toEqual([
        TEXTS.minNumber(1)
    ]);

    expect(validate({ants, value: '11'})).toEqual([
        TEXTS.maxNumber(10)
    ]);
});