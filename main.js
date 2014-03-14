'use strict';

var formatOneToNineteen = function (value) {
    // Format Numbers 1 through 19
    switch(value) {
        case 14:
        case 16:
        case 17:
        case 19:
            return formatInt(value - 10) + 'teen';

        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        case 10:
            return 'ten';
        case 11:
            return 'eleven';
        case 12:
            return 'twelve';
        case 13:
            return 'thirteen';
        case 15:
            return 'fifteen';
        case 18:
            return 'eighteen';
    }
};

var formatTwentyToNinety = function (value) {
    // Format Numbers 20 through 90
    switch(value) {
        case 2:
            return 'twenty';
        case 3:
            return 'thirty';
        case 4:
            return 'forty';
        case 5:
            return 'fifty';
        case 8:
            return 'eighty';
        case 6:
        case 7:
        case 9:
            return formatOneToNineteen(value) + 'ty';
    }
};

var formatInt = function (value) {

    var levels = [
        {label: 'trillion', power: 12},
        {label: 'billion', power: 9},
        {label: 'million', power: 6},
        {label: 'thousand', power: 3},
        {label: 'hundred', power: 2}
    ];

    for(var level = 0; level < levels.length; level++) {
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

var formatNumber = function (value) {
    value = toInt(value);
    return formatInt(value);
};
