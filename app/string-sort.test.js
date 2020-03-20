'use strict';

const {mergeSort} = require('./string-sort');

const unsorted = "When not studying nuclear physics, Bambi likes to play\n beach volleyball";
const expected = "aaaaabbbbcccdeeeeeghhhiiiiklllllllmnnnnooopprsssstttuuvwyyyy";

describe('sort', () => {
    describe('string sort', () => {
        test('should correctly arrange a case insensitive string in ascending order', () => {
            expect.assertions(1);
            const sorted = mergeSort(unsorted);
            expect(sorted).toEqual(expected);
        });
    });
});
