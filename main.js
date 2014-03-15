'use strict';

var formatOneToNineteen = function (value) {
    var oneToNineteen = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    return oneToNineteen[value - 1];
};

var formatTwentyToNinety = function (value) {
    var tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    return tens[value - 2];
};

var formatInt = function (value) {

    var levels = [
        {label: 'trillion', power: 12},
        {label: 'billion', power: 9},
        {label: 'million', power: 6},
        {label: 'thousand', power: 3},
        {label: 'hundred', power: 2}
    ];

    for (var level = 0; level < levels.length; level++) {
        var cutoff = Math.pow(10, levels[level].power);
        if (value >= cutoff) {
            var aboveCutoff = Math.floor(value / cutoff);
            var belowCutoff = value - (aboveCutoff * cutoff);
            return (formatInt(aboveCutoff) + ' ' + levels[level].label + ' ' + formatInt(belowCutoff)).trim();
        }
    }

    if (value > 19) {
        var aboveCutoff = Math.floor(value / 10);
        var belowCutoff = value - (aboveCutoff * 10);
        return (formatTwentyToNinety(aboveCutoff) + ' ' + formatInt(belowCutoff)).trim();
    }

    if (value > 0) {
        return formatOneToNineteen(value);
    }

    return '';
};

var toInt = function (value) {
    if (typeof value === 'string') {
        value = value.replace(/,/g, '');
    }
    return parseInt(value);
}

/**
 * Convert any number into the corresponding English text
 */
var formatNumber = function (value) {
    value = toInt(value);
    return formatInt(value);
};
