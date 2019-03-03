export class NumberUtils {
    public isItNumber(num: unknown):boolean {
        if(typeof num === 'number') {
            return true;
        } else {
            return false;
        }
    }
}
