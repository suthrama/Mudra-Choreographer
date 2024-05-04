// ELEMENTS
const uploadElement = document.getElementById("uploadElement")
// Button Elements
const nextButton = document.getElementById("nextButton")

nextButton.onclick = () => {
    chrome.runtime.sendMessage({ event: 'onNext'})
}