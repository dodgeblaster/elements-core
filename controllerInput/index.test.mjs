import { test } from 'node:test'
import D from 'jsdom'
import assert from 'node:assert'
import { setupKeyboard } from './index.mjs'

test('test', async () => {
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

    setupKeyboard(controls, page.window.document)
    const simulateKeyPress = (key) =>
        page.window.document.dispatchEvent(
            new page.window.KeyboardEvent('keypress', { key })
        )

    simulateKeyPress('w')
    assert.strictEqual(state[0], 'up')
})
