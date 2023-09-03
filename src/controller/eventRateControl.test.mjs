import { test } from 'node:test'
import assert from 'node:assert'
import { createThrottle } from './eventRateControl.mjs'

test('create throttle will return a isThrottled function that returns a boolean', () => {
    const isThrottled = createThrottle(100)
    assert.equal(typeof isThrottled(), 'boolean')
})

test('create throttle will return a isThrottled function that returns false on first invocation', () => {
    const isThrottled = createThrottle(100)
    assert.equal(isThrottled(), false)
})

test('create throttle will return a isThrottled function that returns true if last call is less than delay time specified', () => {
    let timestampCalls = 0
    const timestampMockReturn = {
        1: 1000,
        2: 1050
    }

    const isThrottled = createThrottle(100, {
        getTimestampFunction: () => {
            timestampCalls++
            return timestampMockReturn[timestampCalls]
        }
    })
    assert.equal(isThrottled(), false)
    assert.equal(isThrottled(), true)
})
