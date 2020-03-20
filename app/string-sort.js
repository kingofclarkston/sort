'use strict';

/**
 * Sorts an English alphabet, case-insensitive string in ascending order using merge sort (eg. "foo bar" => "abfoor")
 * @param unsorted
 * @returns {string|*}
 */
const mergeSort = unsorted => {
    const length = unsorted.length;
    if (length === 1) {
        return unsorted;
    }

    const middle = Math.floor(unsorted.length/2);
    const left = unsorted.slice(0, middle);
    const right = unsorted.slice(middle, length);
    return merge(mergeSort(left), mergeSort(right));
};

const merge = (l, r) => {
    const left = l.match(/[a-z]/i) ? l.toLowerCase() : "";
    const right = r.match(/[a-z]/i) ? r.toLowerCase() : "";

    let result = "";
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result += left[leftIndex++];
        } else {
            result += right[rightIndex++];
        }
    }

    result += left.slice(leftIndex);
    result += right.slice(rightIndex);
    return result;
};

module.exports = { mergeSort };
