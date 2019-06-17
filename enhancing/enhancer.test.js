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

    describe('success()', () => { });

    it('should have a max of 100 for durability', () => {
        expect(repair({ durability: 101 }).durability).toBe(100);
    });
});