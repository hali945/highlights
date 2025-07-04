// 手写类的实现

'use strict'
function myClass() {
    if (new.target === undefined) {
        throw new Error("myClass() must be called with new");
    }
    Object.defineProperty(this, "myMethod", {
        value: function () {
            console.log(`output->get:`, new.target);
            if (new.target) {
                throw new Error("myMethod() must not be called with new");
            } else {
                console.log("Hello World");
            }
         },
        enumerable: false
    })
    this.myProperty = 42;

}

const a = new myClass();
// a.myMethod(); // Hello World
// console.log(a.myProperty); // 42
// const b = myClass(); // Error: myClass() must be called with new
const c = new a.myMethod; // Error: myMethod() must not be called with new