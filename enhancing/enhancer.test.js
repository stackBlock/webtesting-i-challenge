const { succeed, fail, repair } = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
    describe('repair()', () => {
        it('restores durability to 100', () => {
            expect(repair({ durability: 89 }).durability).toBe(100);
            expect(repair({ durability: -89 }).durability).toBe(100);
            expect(repair({ durability: 100 }).durability).toBe(100);
            expect(repair({ durability: 0 })).toEqual({ durability: 100 });
        });
    });



    describe('succeed()', () => {
        it('adds 1 to enhancement', () => {
            expect(succeed({ enhancement: 10 })).toEqual({ enhancement: 11 });
        });
    });

    describe('succeed()', () => { });
    it('no change is enhancement = 20', () => {
        expect(succeed({ enhancement: 20 })).toEqual({ enhancement: 20 });
    });

    describe('succeed()', () => { });
    it('if above 20 level stays at maximum of 20', () => {
        expect(succeed({ enhancement: 90 })).toEqual({ enhancement: 20 });
    });



    describe('fail()', () => { });
    it('if enhancement is greater then 16 decrease it by 1', () => {
        expect(fail({ enhancement: 17, durability: 0 })).toEqual({ enhancement: 16, durability: -10 });
    });

    describe('fail()', () => { });
    it('if enhancement is 16 or less stay the same', () => {
        expect(fail({ enhancement: 16, durability: 0 })).toEqual({ enhancement: 16, durability: -10 });
    });

    describe('fail()', () => { });
    it('if enhancement is less than 15 durability is minus 5', () => {
        expect(fail({
            enhancement: 10,
            durability: 10
        })).toEqual({
            enhancement: 10,
            durability: 5
        });
    });

    describe('fail()', () => { });
    it('if enhancement is 15 or greater durability minus 10', () => {
        expect(fail({
            enhancement: 20,
            durability: 20
        })).toEqual({
            enhancement: 19,
            durability: 10
        });
    });

});



