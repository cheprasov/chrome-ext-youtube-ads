const link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', chrome.extension.getURL('/css/ads_off.css'));
document.getElementsByTagName('head')[0].appendChild(link);

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
    const dialogs = document.querySelectorAll('.ytd-popup-container[role=dialog]');
    if (!dialogs) {
        return;
    }
    dialogs.forEach((dialog) => {
        const text = (dialog.innerText || '').toLowerCase();
        if (!text) {
            return;
        }
        if (text.indexOf('video paused') === -1) {
            return;
        }
        const button = dialog.querySelector('.yt-confirm-dialog-renderer .yt-button-renderer');
        if (button) {
            button.click();
        }
    });
}

function AdFirstGridItem() {
    const div = document.querySelector('ytd-rich-item-renderer > div > ytd-display-ad-renderer');
    if (!div) {
        return;
    }
    div.parentElement.parentElement.style.display = 'none';
}

function removeShadowOnVideoPause() {
    const div = document.querySelector('.ytp-gradient-bottom');
    if (!div) {
        return;
    }
    if (div.style.backgroundImage === 'none') {
        return;
    }
    div.style.backgroundImage = 'none';
}

function skipTrialButton() {
    // <paper-button id="button" class="style-scope ytd-button-renderer style-text size-default" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false" aria-label="Skip trial"><!--css-build:shady--><yt-formatted-string id="text" class="style-scope ytd-button-renderer style-text size-default">Skip trial</yt-formatted-string><paper-ripple class="style-scope paper-button"
    const button = document.querySelector('[aria-label="Skip trial"]')
    if (!button || !button.click) {
        return;
    }
    button.click()
}


if (!window.___ytad) {
    window.___ytad = true;

    setInterval(() => {
        AdOverlayClose();
        AdOverlaySkip();
        AdCeElement();
        AdVideoClose();
        AdConfirmDialogRenderYes();
        AdFirstGridItem();
    }, 500);

    setInterval(() => {
        removeShadowOnVideoPause();
        skipTrialButton();
    }, 1000);

}
