export function throttle(func, delay) {
    let timeoutId
    let lastArgs
    let lastTime = 0

    return function throttledFn(...args) {
        const currentTime = new Date().getTime()

        if (timeoutId) {
            clearTimeout(timeoutId)
        }

        if (currentTime - lastTime >= delay) {
            func(...args)
            lastTime = currentTime
        } else {
            lastArgs = args
            timeoutId = setTimeout(() => {
                if (lastArgs) {
                    func(...lastArgs)
                    lastTime = new Date().getTime()
                }
            }, delay - (currentTime - lastTime))
        }
    }
}
