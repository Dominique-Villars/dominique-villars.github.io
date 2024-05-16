const leftButton = document.querySelector('#hautes-alpes .body .slideshow .select.left')
const rightButton = document.querySelector('#hautes-alpes .body .slideshow .select.right')

const videos = document.querySelectorAll('#hautes-alpes .body .slideshow .videos .video-container')
let index = 0

function next() {
    return index < 4 ? index + 1 : index
}

function previous() {
    return index > 0 ? index - 1 : index
}

function setActiveVideo(newIndex) {
    const oldVideo = videos[index]
    const newVideo = videos[newIndex]

    switch (newIndex - index) {
        case 1:
            oldVideo.style.transform = 'translateX(-100px)'
            break
        case -1:
            oldVideo.style.transform = 'translateX(100px)'
            break
    }

    oldVideo.style.opacity = '0'
    oldVideo.style.zIndex = '-1'
    newVideo.style.opacity = '100%'
    newVideo.style.zIndex = '1'
    newVideo.style.transform = 'translateX(0)'

    index = newIndex
}

leftButton.onclick = () => setActiveVideo(previous())
rightButton.onclick = () => setActiveVideo(next())