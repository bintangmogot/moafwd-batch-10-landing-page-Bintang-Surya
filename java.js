function btnAction(){
    let getEmailEl = document.getElementById('getEmail')
    let formFileEl = document.getElementById('formFile')
    let keteranganEl = document.getElementById('keterangan')

    if (getEmailEl.value == '' || keteranganEl.value == '' || formFileEl.value == '') {
        alert('Data tidak boleh kosong!')
    } else {
        let formData = new FormData()
        formData.append('email', getEmailEl.value)
        formData.append('keterangan', keteranganEl.value)
        formData.append('file', formFileEl.files[0])
        alert('Terimakasih, data Kamu sudah terkirim!')
        
    }
    let emailFullEl = document.getElementById('emailFull')
    let formFullEl = document.getElementById('formFull')
    let keteranganFullEl = document.getElementById('keteranganFull')
    
    emailFullEl.innerHTML = getEmailEl.value
    formFullEl.innerHTML = formFile.value
    keteranganFullEl.innerHTML = keteranganEl.value
    
}

function btnSend(){
    let emailEl = document.getElementById('emailKita')
    let penjelasanKuEL = document.getElementById('penjelasanKita')

    if (emailEl.value == '' || penjelasanKuEL.value == '') {
        alert('Data tidak boleh kosong!')
    } else {
        let formData = new FormData()
        formData.append('email', emailEl.value)
        formData.append('penjelasanKu', penjelasanKuEL.value)
        alert('Terimakasih, Pesan Kamu sudah terkirim!')
        
    }
    let emailFullEl = document.getElementById('emailKu')
    let penjelasanKuFullEl = document.getElementById('penjelasanKu')
    
    emailFullEl.innerHTML = emailEl.value
    penjelasanKuFullEl.innerHTML = penjelasanKuEL.value
    
}