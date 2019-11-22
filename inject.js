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
        const time = video.currentTime;
        video.currentTime = isFinite(time) ? 60 : time;
    }
}

function AdConfirmDialogRenderYes() {
    const dialog = document.querySelector('.ytd-popup-container[role=dialog]');
    if (!dialog) {
        return;
    }
    const text = (dialog.innerText || '').toLowerCase();
    if (!text) {
        return;
    }
    if (text.indexOf('video paused') === -1) {
        return;
    }
    const button = document.querySelector('.yt-confirm-dialog-renderer .yt-button-renderer');
    if (button) {
        button.click();
    }
}


if (!window.___ytad) {
    window.___ytad = true;

    setInterval(() => {
        AdOverlayClose();
        AdOverlaySkip();
        AdCeElement();
        AdVideoClose();
        AdConfirmDialogRenderYes();
    }, 500);
}
