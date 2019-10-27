function AdOverlayClose() {
    const button = document.querySelector('.ytp-ad-overlay-close-button');
    if (button) {
        button.click();
    }
}

function AdOverlaySkip() {
    const button = document.querySelector('.ytp-ad-skip-button');
    if (button) {
        button.click();
    }
}

function AdCeElement() {
    const elements = document.querySelectorAll('.ytp-ce-element');
    if (elements) {
        elements.forEach(e => e.style.display = 'none');
    }
}

function AdVideoClose() {
    const video = document.querySelector('.html5-video-player.ad-showing .video-stream.html5-main-video');
    if (video) {
        video.currentTime = video.duration;
    }
}


if (!window.___ytad) {
    window.___ytad = true;

    setInterval(() => {
        AdOverlayClose();
        AdOverlaySkip();
        AdCeElement();
        AdVideoClose();
    }, 500);
}
