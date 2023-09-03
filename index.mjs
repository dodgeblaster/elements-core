import { makePixelCanvas } from './src/canvas/makePixelCanvas.mjs'
import { setupKeyboard } from './src/controller/index.mjs'
import { createEventBus } from './src/events/index.mjs'

export default {
    canvas: {
        makePixelCanvas
    },
    controller: {
        setupKeyboard
    },
    events: {
        createEventBus
    }
}
