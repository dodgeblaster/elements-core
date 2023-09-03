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
