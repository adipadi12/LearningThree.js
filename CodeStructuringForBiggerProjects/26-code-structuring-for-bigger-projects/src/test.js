// export default () =>
// {
//     console.log('Hello modules')
// }

// export default 'Hello modules'

// export default
// {
//     hello: 'modules'
// }


// const toExport = {
//     hello: 'hi'
// }

// const thing1 = () =>
// {
//     console.log('Hi')
// }

// export {toExport, thing1}

class HelloClass{

}

export default class Robot
{
    constructor(name, legs)
    {
        this.name = name
        this.legs = legs

        this.sayHi()

        console.log(`I am ${this.name}. Thank you creator`)
    }
    sayHi()
    {
        console.log(`Hello! My name is ${this.name}`)
    }

    // ...
}


