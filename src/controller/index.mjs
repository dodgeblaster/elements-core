import { createThrottle } from './eventRateControl.mjs'

export const setupKeyboard = (controls, documentRoot) => {
    const doc = documentRoot || document
    const isThrottled = createThrottle(200)
    doc.addEventListener('keypress', (e) => {
        if (isThrottled()) return
        if (e.key === 'o') {
            controls.menu()
        }

        if (e.key === 'l') {
            controls.accept()
        }

        if (e.key === ',') {
            controls.cancel()
        }

        if (e.key === 'd') {
            controls.right()
        }

        if (e.key === 's') {
            controls.down()
        }

        if (e.key === 'a') {
            controls.left()
        }

        if (e.key === 'w') {
            controls.up()
        }
    })
}
