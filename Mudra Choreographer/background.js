chrome.runtime.onMessage.addListener(data => {
    switch (data.event) {
        case 'onNext':
            console.log("Hit Next Line")
            break;
    }
})