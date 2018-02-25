import { ClassA, ClassB } from '@lerna-typescript-jest-boilerplate/package-a';

const instanceA = new ClassA();
const instanceB = new ClassB();

const result = instanceB.doSomething(() => instanceA.doSomething());

const h1 = document.createElement('h1');
h1.innerHTML = `Demo app seems to be working, sample code produced: '${result}'`;
document.body.appendChild(h1);
