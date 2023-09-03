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
