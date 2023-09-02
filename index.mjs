import { makePixelCanvas } from './canvas/makePixelCanvas.mjs'
import { setupKeyboard } from './controller/index.mjs'
import { createEventBus } from './events/index.mjs'

export const elementsCore = {
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
