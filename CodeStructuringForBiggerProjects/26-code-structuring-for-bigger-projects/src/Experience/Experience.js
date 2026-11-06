import Sizes from  './Utils/Sizes.js'
import Time from './Utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'

import * as THREE from 'three'

let instance = null

export default class Experience
{
    constructor(canvas)
    {
        // singleton
        if(instance)
        {
            return instance
        }
        instance = this

        console.log('XP gained')
        window.experience = this

        this.canvas = canvas

        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.camera = new Camera(this)
        this.renderer = new Renderer()

        // resize event
        this.sizes.on('resize', () =>
        {
            console.log('A resize occurred')
        })
        console.log(this.sizes.width)
        console.log(this.sizes.height)
        console.log(this.sizes.pixelRatio)

        this.time.on('tick', () =>
        {
            this.update()
        })
    }

    resize()
    {
        this.camera.resize()
    }

    update()
    {
        this.camera.update()
    }
}