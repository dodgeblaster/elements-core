import { test } from 'node:test'
import assert from 'node:assert'
import { createEventBus } from './index.mjs'

test('can register and emit an event', () => {
    const events = createEventBus()
    const state = []
    const gameEvent = {
        module: 'one',
        name: 'two',
        payload: {
            action: 'jump'
        }
    }
    events.on('USER_ADDED_NOTE', (x) => {
        const payload = x.payload
        state.push(payload.action)
    })
    events.emit('USER_ADDED_NOTE', gameEvent)

    assert.equal(state[0], 'jump')
})

test('will return an error result when trying to emit an invalid event', () => {
    const gameEvent = {
        module: 'one',
        name: 'two',
        payload: {
            action: 'jump'
        }
    }

    const events = createEventBus()
    const result = events.emit('INVALID', gameEvent)
    assert.deepEqual(result, {
        error: 'INVALID is not a valid event',
        success: false
    })
})
