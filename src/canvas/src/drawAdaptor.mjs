export function drawAdaptor(x) {
    return (i) => {
        i.sort((a, b) => {
            if (!a.layer && !b.layer) return 0
            if (!a.layer) return -1
            if (!b.layer) return 1
            if (a.layer < b.layer) return -1
            if (a.layer > b.layer) return 1
            return 0
        }).forEach((i) => {
            if (i.type === 'image') {
                x.drawImage({
                    img: i.img,
                    x: i.x,
                    y: i.y
                })
            }

            if (i.type === 'text') {
                x.drawText({
                    text: i.text,
                    x: i.x,
                    y: i.y
                })
            }
            if (i.type === 'rectangle') {
                x.drawRectangle({
                    color: i.color,
                    x: i.x,
                    y: i.y,
                    height: i.height,
                    width: i.width
                })
            }

            if (!i.type) {
                x.drawRectangle({
                    color: i.color,
                    x: i.x,
                    y: i.y,
                    height: i.height,
                    width: i.width
                })
            }
        })
    }
}
