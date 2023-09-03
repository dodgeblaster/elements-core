export function createThrottle(throttleRate, config) {
    let lastCalled = 0
    return () => {
        const now = config ? config.getTimestampFunction() : Date.now()
        const timeSinceLastCall = now - lastCalled
        if (timeSinceLastCall < throttleRate) return true
        lastCalled = now
        return false
    }
}
