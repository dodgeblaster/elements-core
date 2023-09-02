export function createEventBus() {
    const events = {}
    return {
        on: (event, fn) => {
            if (!events[event]) {
                events[event] = []
            }
            events[event].push(fn)
        },

        emit: (event, payload) => {
            if (!events[event]) {
                return {
                    success: false,
                    error: event + ' is not a valid event'
                }
            }

            events[event].forEach(async (fn) => {
                void (await fn(payload))
            })

            return {
                success: true,
                value: true
            }
        }
    }
}
