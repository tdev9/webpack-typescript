import { NumberUtils } from "../../src/number/number-utils";

describe('Test for Number Utils', () => {
    let numberUtils: NumberUtils;
    beforeAll(() => {
        numberUtils = new NumberUtils();
    })
    it('should be return true', () => {
        expect(numberUtils.isItNumber(5)).toBe(true); 
    });
    it('should be return false', () => {
        expect(numberUtils.isItNumber('???')).toBe(false); 
    });
});