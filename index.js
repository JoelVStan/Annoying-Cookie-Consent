const modalEl = document.getElementById('modal')
const closeButton = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
document.getElementById('modal-inner')

setTimeout(function() {
    modalEl.style.display = 'inline'
}, 1500)

closeButton.addEventListener('click', function() {
    modalEl.style.display = 'none'
})

consentForm.addEventListener('submit', function(e) {
    e.preventDefault()

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">
            Uploading your data to the dark web...😎😼
        </p>
    </div>
    `

    setTimeout(function(){
        document.getElementById('upload-text').innerText = `Making the sale..🤑💰`
    }, 2000);

    setTimeout(function() {
        document.getElementById('modal-inner').innerHTML = `
        <h2 class="text-[30px] font-bold mt-5 mb-5">Thanks for your info! </h2>
        <p class="modal-text">We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/laugh.gif" class="shadow-[1px_1px_3px_gray] rounded">
        </div>
        `
    }, 3000);

})

