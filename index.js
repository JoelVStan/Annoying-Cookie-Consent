const modalEl = document.getElementById('modal')
const closeButton = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtn = document.getElementById('modal-choice-btn')

setTimeout(function() {
    modalEl.style.display = 'inline'
}, 2000)

closeButton.addEventListener('click', function() {
    modalEl.style.display = 'none'
})

declineBtn.addEventListener('click', function() {
    modalChoiceBtn.classList.toggle('modal-btn-reverse')
})

consentForm.addEventListener('submit', function(e) {
    e.preventDefault()

    const consentFormData = new FormData(consentForm)
    const consentFormDataName = consentFormData.get('fullName')

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
        <h2 class="text-[30px] font-bold mt-5 mb-5">Thanks <span class="text-fuchsia-500 text-[32px]">${consentFormDataName}</span>, you fool! </h2>
        <p class="modal-text">We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/laugh.gif" class="shadow-[1px_1px_3px_gray] rounded">
        </div>
        `
        closeButton.disabled = false
    }, 3000);

})

