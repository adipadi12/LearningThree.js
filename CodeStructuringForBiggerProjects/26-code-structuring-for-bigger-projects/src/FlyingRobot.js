import Robot from './test.js'

export default class FlyingRobot extends Robot
{
    takeOff()
    {
        console.log(`Have a good flight ${this.name}`)
    }

    land()
    {
        console.log(`Welcome back ${this.name}`)
    }

    sayHi()
    {
        super.sayHi()
        console.log(`Hello! My name is ${this.name} and I am a flying robot`)
    }
}