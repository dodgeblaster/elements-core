import { test } from 'node:test'
import D from 'jsdom'
import assert from 'node:assert'
import core from '../index.mjs'

function setup() {
    const page = new D.JSDOM('<div></div>')

    let state = []
    const controls = {
        up: () => state.push('up'),
        down: () => state.push('down'),
        left: () => state.push('left'),
        right: () => state.push('right'),
        accept: () => state.push('accept'),
        cancel: () => state.push('cancel'),
        menu: () => state.push('menu')
    }

    core.controller.setupKeyboard(controls, page.window.document)
    const simulateKeyPress = async (key) => {
        page.window.document.dispatchEvent(
            new page.window.KeyboardEvent('keypress', { key })
        )
    }
    return {
        state,
        simulateKeyPress
    }
}

test('controller keyboard up works', async () => {
    const { state, simulateKeyPress } = setup()
    await simulateKeyPress('w')
    assert.strictEqual(state[0], 'up')
})

test('controller keyboard left works', async () => {
    const { state, simulateKeyPress } = setup()
    await simulateKeyPress('a')
    assert.strictEqual(state[0], 'left')
})

test('controller keyboard down works', async () => {
    const { state, simulateKeyPress } = setup()
    await simulateKeyPress('s')
    assert.strictEqual(state[0], 'down')
})

test('controller keyboard right works', async () => {
    const { state, simulateKeyPress } = setup()
    await simulateKeyPress('d')
    assert.strictEqual(state[0], 'right')
})

test('controller keyboard menu works', async () => {
    const { state, simulateKeyPress } = setup()
    await simulateKeyPress('o')
    assert.strictEqual(state[0], 'menu')
})

test('controller keyboard accept works', async () => {
    const { state, simulateKeyPress } = setup()
    await simulateKeyPress('l')
    assert.strictEqual(state[0], 'accept')
})

test('controller keyboard cancel works', async () => {
    const { state, simulateKeyPress } = setup()
    await simulateKeyPress(',')
    assert.strictEqual(state[0], 'cancel')
})

test('controller keyboard will throttle', async () => {
    const { state, simulateKeyPress } = setup()
    await simulateKeyPress(',')
    await simulateKeyPress(',')
    assert.strictEqual(state.length, 1)
})
