# Elements Core

Elements is a very unoriginal but good enough name for a collection of
libraries that help with making Javascript games on the web. If you are
looking to make js games, there are much better libs to use. The purpose of
this lib is for me to learn how things work at a lower level, and make tools
just good enough to come up with ideas and game POC's quickly.

This repo includes utils for:

-   canvas drawing
-   controller input
-   event bus

# How to setup a canvas to draw on

```js
import core from 'elements-core'

const dotA = {
    color: 'rgb(0,0,255)',
    x: 0,
    y: 0,
    height: 1,
    width: 1
}

const dotB = {
    color: 'rgb(255,0,0)',
    x: 1,
    y: 0,
    height: 1,
    width: 1
}

setInterval(() => {
    dotB.x = dotB.x + 1
}, 100)

function main() {
    const app = document.querySelector('#app')
    const pixelCanvas = core.canvas.makePixelCanvas({
        div: app,
        height: 440,
        width: 800
    })

    pixelCanvas.startGameLoop(() => {
        return [dotA, dotB]
    })
}

main()
```

# How to setup a controller (keyboard)

```js
import core from 'elements-core'

const state = []

const controls = {
    up: () => state.push('up'),
    down: () => state.push('down'),
    left: () => state.push('left'),
    right: () => state.push('right'),
    accept: () => state.push('accept'),
    cancel: () => state.push('cancel'),
    menu: () => state.push('menu')
}

core.controller.setupKeyboard(controls)
```

# How to setup an event bus

```js
import core from 'elements-core'

const events = core.events.createEventBus()

events.on('MY_EVENT_HAPPENED', (x) => {
    console.log(x.id)
})

setInterval(() => {
    events.emit('MY_EVENT_HAPPENED', {
        id: 'happened'
    })
}, 1000)
```
