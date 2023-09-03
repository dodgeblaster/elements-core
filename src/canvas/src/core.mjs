let start = 0

function makeCanvasElement(div) {
    const c = document.createElement('canvas')
    c.setAttribute('id', 'canvas')
    c.setAttribute('style', 'background: black')
    div.appendChild(c)
}

function removeCanvasElement() {
    const x = document.getElementById('canvas')
    if (!x) return
    x.remove()
    start = 0
}

function getCanvas() {
    const element = document.getElementById('canvas')
    if (!element) {
        throw new Error('Cannot find canvas element')
    }
    return element
}

/**
 * Helper Function
 */
function setupCanvas(x) {
    makeCanvasElement(x.div)
    const element = getCanvas()
    element.setAttribute('width', x.width.toString())
    element.setAttribute('height', x.height.toString())

    const context = element.getContext('2d')
    if (!context) {
        throw new Error('')
    }

    context.imageSmoothingEnabled = true
    context.scale(2, 2)
    window.devicePixelRatio = 4
    const captureImage = () => element.toDataURL('image/png')
    const openImage = () => {
        const res = captureImage()
        Object.assign(document.createElement('a'), {
            target: '_blank',
            rel: 'noopener noreferrer',
            href: res
        }).click()
    }
    return { context, openImage }
}

function makeRectangle(context) {
    return (input) => {
        context.fillStyle = input.color
        context.fillRect(
            input.x + 0.5,
            input.y + 0.5,
            input.width,
            input.height
        )
    }
}

function drawText(context) {
    return (input) => {
        const sizeMap = {
            small: 18,
            normal: 24,
            large: 28
        }

        const style = input.style || {
            color: '#222',
            weight: 'normal',
            size: 'normal'
        }

        context.fillStyle = style.color
        context.font =
            style.weight + ' ' + sizeMap[style.size] + 'px sans-serif'

        context.fillText(input.text, input.x, input.y)
        const m = context.measureText(input.text).width
        return m
    }
}

function drawImage(context) {
    return (input) => {
        context.globalAlpha = input.alpha || 1
        context.drawImage(input.img, input.x, input.y)
        context.globalAlpha = 1
    }
}
function clearCanvas(context) {
    context.clearRect(0, 0, 1610, 1210)
}

/**
 * Render
 */
function draw(context, drawFunction) {
    clearCanvas(context)

    drawFunction({
        drawText: drawText(context),
        drawImage: drawImage(context),
        drawRectangle: makeRectangle(context)
    })
}

export const main = {
    setupScreen: setupCanvas,
    teardownScreen: removeCanvasElement,

    startGameLoop: (context, drawFunction) => {
        window.requestAnimationFrame(gameLoop)
        function gameLoop(timestamp) {
            if (start === undefined) {
                start = timestamp
            }
            const elapsed = timestamp - start

            draw(context, drawFunction(elapsed))
            window.requestAnimationFrame(gameLoop)
        }
    }
}
