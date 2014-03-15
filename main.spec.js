'use strict';

describe('numbers', function () {
    describe('the basics', function () {
        it('should format single digits', function () {
            expect(formatNumber(1)).toBe('one');
            expect(formatNumber(2)).toBe('two');
            expect(formatNumber(3)).toBe('three');
            expect(formatNumber(4)).toBe('four');
            expect(formatNumber(5)).toBe('five');
            expect(formatNumber(6)).toBe('six');
            expect(formatNumber(7)).toBe('seven');
            expect(formatNumber(8)).toBe('eight');
            expect(formatNumber(9)).toBe('nine');
        });
        it('should format 10 - 19', function () {
            expect(formatNumber(10)).toBe('ten');
            expect(formatNumber(11)).toBe('eleven');
            expect(formatNumber(12)).toBe('twelve');
            expect(formatNumber(13)).toBe('thirteen');
            expect(formatNumber(14)).toBe('fourteen');
            expect(formatNumber(15)).toBe('fifteen');
            expect(formatNumber(16)).toBe('sixteen');
            expect(formatNumber(17)).toBe('seventeen');
            expect(formatNumber(18)).toBe('eighteen');
            expect(formatNumber(19)).toBe('nineteen');
        });
        it('should format tens', function () {
            expect(formatNumber(20)).toBe('twenty');
            expect(formatNumber(30)).toBe('thirty');
            expect(formatNumber(40)).toBe('forty');
            expect(formatNumber(50)).toBe('fifty');
            expect(formatNumber(60)).toBe('sixty');
            expect(formatNumber(70)).toBe('seventy');
            expect(formatNumber(80)).toBe('eighty');
            expect(formatNumber(90)).toBe('ninety');
        });
    });
    describe('getting bigger', function () {
        it('should format 21 - 99', function () {
            expect(formatNumber(21)).toBe('twenty-one');
            expect(formatNumber(99)).toBe('ninety-nine');
        });
        it('should format 100 - 999', function () {
            expect(formatNumber(100)).toBe('one hundred');
            expect(formatNumber(201)).toBe('two hundred one');
            expect(formatNumber(345)).toBe('three hundred forty-five');
            expect(formatNumber(999)).toBe('nine hundred ninety-nine');
        });
        it('should format 1,000 - 999,999', function () {
            expect(formatNumber(1000)).toBe('one thousand');
            expect(formatNumber('1,000')).toBe('one thousand');
            expect(formatNumber(2345)).toBe('two thousand three hundred forty-five');
            expect(formatNumber(987654)).toBe('nine hundred eighty-seven thousand six hundred fifty-four');
        });
        it('should format millions', function () {
            expect(formatNumber('1,000,000')).toBe('one million');
            expect(formatNumber('39,000,001')).toBe('thirty-nine million one');
        });
        it('should format billions', function () {
            expect(formatNumber('1,000,000,000')).toBe('one billion');
        });
        it('should format trillions', function () {
            expect(formatNumber('1,000,000,000,000')).toBe('one trillion');
        });
    });
    describe('getting huge!', function () {
        it('should format quadrillions', function () {
            expect(formatNumber('1,000,000,000,000,000')).toBe('one quadrillion');
        });
        it('should format quintillion', function () {
            expect(formatNumber('1,000,000,000,000,000,000')).toBe('one quintillion');
        });
        it('should format sextillion', function () {
            expect(formatNumber('1,000,000,000,000,000,000,000')).toBe('one sextillion');
        });
        it('should format septillion', function () {
            expect(formatNumber('1,000,000,000,000,000,000,000,000')).toBe('one septillion');
        });
        it('should format octillion', function () {
            expect(formatNumber('1,000,000,000,000,000,000,000,000,000')).toBe('one octillion');
        });
        it('should format nonillion', function () {
            expect(formatNumber('1,000,000,000,000,000,000,000,000,000,000')).toBe('one nonillion');
        });
        it('should get crazy', function () {
            var expected = 'five hundred sixty-seven trillion ' +
                'eight hundred ninety billion ' +
                'nine hundred eighty-seven million ' +
                'six hundred fifty-four thousand ' +
                'three hundred twenty-one';
            expect(formatNumber(567890987654321)).toBe(expected);
        });
        it('should get crazy insane', function () {
            expect(formatNumber('1,234,567,890,987,654,321')).toBe('one quintillion ' +
                'two hundred thirty-four quadrillion ' +
                'five hundred sixty-seven trillion ' +
                'eight hundred ninety billion ' +
                'nine hundred eighty-seven million ' +
                'six hundred fifty-four thousand ' +
                'three hundred twenty-one');
        });
    });
    describe('weird cases', function () {
        it('should format sextillion', function () {
            expect(formatNumber('10,000,000,000,010,000,000,000')).toBe('ten sextillion ten billion');
        });
        it('should format strings', function () {
            expect(formatNumber('1')).toBe('one');
            expect(formatNumber(' 9 ')).toBe('nine');
        });
    });
});