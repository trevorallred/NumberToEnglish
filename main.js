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
        {label: 'nonillion', power: 30},
        {label: 'octillion', power: 27},
        {label: 'septillion', power: 24},
        {label: 'sextillion', power: 21},
        {label: 'quintillion', power: 18},
        {label: 'quadrillion', power: 15},
        {label: 'trillion', power: 12},
        {label: 'billion', power: 9},
        {label: 'million', power: 6},
        {label: 'thousand', power: 3},
        {label: 'hundred', power: 2}
    ];

    for (var level = 0; level < levels.length; level++) {
        if (value.length > levels[level].power) {
            var aboveCutoff = value.substr(0, value.length - levels[level].power);
            aboveCutoff = formatInt(aboveCutoff);
            var belowCutoff = value.substr(value.length - levels[level].power);
            belowCutoff = formatInt(belowCutoff);

            if (aboveCutoff) {
                aboveCutoff += ' ' + levels[level].label;
            }

            if (belowCutoff) {
                aboveCutoff += ' ' + belowCutoff;
            }
            return aboveCutoff.trim();
        }
    }

    value = parseInt(value);
    if (value > 19) {
        var aboveCutoff = Math.floor(value / 10);
        var belowCutoff = value - (aboveCutoff * 10);
        var singleDigit = formatInt(belowCutoff);
        if (singleDigit) {
            return formatTwentyToNinety(aboveCutoff) + '-' + singleDigit;
        } else {
            return formatTwentyToNinety(aboveCutoff);
        }
    }

    if (value > 0) {
        return formatOneToNineteen(value);
    }

    return '';
};

var toCleanString = function (value) {
    if (typeof value === 'string') {
        value = value.replace(/,/g, '');
    }
    return value + '';
}

/**
 * Convert any number into the corresponding English text
 */
var formatNumber = function (value) {
    value = toCleanString(value);
    return formatInt(value);
};
