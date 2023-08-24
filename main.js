//moduleA.js
let object = {
    a: 5,
};

export { object };

import { object } from './moduleA'



console.log(object.a)
object.a++
console.log(object.a)
