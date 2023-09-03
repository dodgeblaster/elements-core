import { main } from './src/core.mjs'
import { drawAdaptor } from './src/drawAdaptor.mjs'

export function makePixelCanvas(input) {
    const screen = main.setupScreen({
        div: input.div,
        height: input.height,
        width: input.width
    })

    return {
        startGameLoop: (fn) => {
            main.startGameLoop(screen.context, (timestamp) => (draw) => {
                const instructions = fn(timestamp)
                drawAdaptor(draw)(instructions)
            })
        },
        takePicture: () => {
            screen.openImage()
        }
    }
}
