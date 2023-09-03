import core from 'elements-core'

const events = core.events.createEventBus()

events.on('MY_EVENT_HAPPENED', (x) => {
    console.log(x.id)
})

setInterval(() => {
    events.emit('MY_EVENT_HAPPENED', {
        id: 'happened'
    })
}, 1000)
