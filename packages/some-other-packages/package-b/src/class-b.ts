export class ClassB {
    public doSomething<T>(func: () => T) {
        return func ? func() : null;
    }
}
