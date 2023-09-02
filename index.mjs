import { makePixelCanvas } from './canvas/makePixelCanvas.mjs'
import { setupKeyboard } from './controllerInput/index.mjs'
import { createEventBus } from './events/index.mjs'

export const elementsCore = {
    canvas: {
        makePixelCanvas
    },
    controllerInput: {
        setupKeyboard
    },
    events: {
        createEventBus
    }
}
