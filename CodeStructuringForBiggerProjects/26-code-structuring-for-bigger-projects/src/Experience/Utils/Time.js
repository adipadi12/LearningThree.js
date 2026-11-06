import EventEmitter from './EventEmitter'

export default class Time extends EventEmitter
{
    constructor()
    {
        super()

        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 16 // milliseconds between 2 frames at 60 fps

        window.requestAnimationFrame(() =>
        {
            this.tick()
        })
    }

    tick()
    {
        const currentTime = Date.now()
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed = this.current - this.start
        console.log('tick')
        this.trigger('tick')
        window.requestAnimationFrame(() =>
        {
            this.tick()
        })
    }
}