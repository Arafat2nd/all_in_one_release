let do_btn = document.getElementById('btn_close');
let clos_btn = document.querySelector('.containerd');
document.querySelectorAll('input');
console.log();
let flag = 0;
do_btn.addEventListener('click', function (event) {
    flag = 0;
    event.preventDefault();
    for (let i = 1; i < 5; i++) {
        if (document.querySelectorAll('input')[i].value == "") {
            flag += 1;
        }
        else {
            continue;
        }
    }
    if (flag == 0) {
        let xhr2=new XMLHttpRequest();
            xhr2.open("POST", "http://localhost:6464/AIO/All%20in%20One/server_files/php/save_user.php", true);
            xhr2.setRequestHeader("Content-Type", "application/json");
            let name = document.querySelector("#name").value;
            let number = document.querySelector("#mobile").value ;
            let job = document.querySelector("#job").value ;
            let date = document.querySelector("#birthday").value.toString();
            xhr2.send(JSON.stringify({"name": name, "job": job, "date": date, "mobile": number}));
            xhr2.onreadystatechange = function () {
                if (xhr2.readyState == XMLHttpRequest.DONE) {
                     clos_btn.style.setProperty("display", 'none', 'important');
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Thank you for joining All in One',
                        showConfirmButton: false,
                        timer: 2000
                    })

                }
            };



    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
    }
})
let v_name = document.querySelector('.name');
let v_job = document.querySelector('.job');
let v_mobi = document.querySelector('.mobi');
let v_done = document.querySelector('.btm');
let errorr = document.querySelector('.errorr')
let errorr_ = document.querySelector('.errorr_')
let errorr__ = document.querySelector('.errorr__')

function chInputs() {
    if (isNameValid) {
        v_done.removeAttribute('disabled');
    } else {
        v_done.setAttribute('disabled', 'disabled')
    }
}

isNameValid = false;
v_name.onkeyup = function () {
    var pattern = /^[A-Z][a-z]{2,30}$/;
    if (pattern.test(v_name.value)) {
        v_name.classList.add('is-valid')
        v_name.classList.remove('is-invalid')
        errorr.style.setProperty("display", 'none', 'important');
        isNameValid = true
    }
    else {
        v_name.classList.add('is-invalid')
        errorr.style.setProperty("display", 'block', 'important');
        v_name.classList.remove('is-valid')
        isNameValid = false
    }
    chInputs()
}

isNameValid = false;
v_job.onkeyup = function () {
    var pattern = /^[A-Z][a-z]{4,40}$/;
    if (pattern.test(v_job.value)) {
        v_job.classList.add('is-valid')
        v_job.classList.remove('is-invalid')
        isNameValid = true
        errorr_.style.setProperty("display", 'none', 'important');
    }
    else {
        v_job.classList.add('is-invalid')
        errorr_.style.setProperty("display", 'block', 'important');
        v_job.classList.remove('is-valid')
        isNameValid = false
    }
    chInputs()
}

isNameValid = false;
v_mobi.onkeyup = function () {
    var pattern = /^[0-9]{10,13}$/;
    if (pattern.test(v_mobi.value)) {
        v_mobi.classList.add('is-valid')
        v_mobi.classList.remove('is-invalid')
        isNameValid = true
        errorr__.style.setProperty("display", 'none', 'important');

    }
    else {
        v_mobi.classList.add('is-invalid')
        v_mobi.classList.remove('is-valid')
        isNameValid = false
        errorr__.style.setProperty("display", 'block', 'important');
    }
    chInputs()
}