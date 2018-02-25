
import { ClassB } from '../src/class-b';

describe('ClassB', () => {
    let instance: ClassB;

    beforeEach(() => {
        instance = new ClassB();
    });

    describe('doSomething', () => {
        it('should return whatever the passed function returns', () => {
            const result1 = instance.doSomething(() => 1);
            expect(result1).toBe(1);

            const result2 = instance.doSomething(() => false);
            expect(result2).toBe(false);
        });

        it('should return null if no function is passed', () => {
            const result1 = instance.doSomething(undefined);
            expect(result1).toBe(null);

            const result2 = instance.doSomething(null);
            expect(result2).toBe(null);
        });

        it('should explode if argument is not a function', () => {
            expect(() => {
                instance.doSomething({} as any);
            }).toThrow();
        });
    });
});
