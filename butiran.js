function borang() {
    let nama = document.getElementById("nama").value;
    document.getElementById("paparnama").innerHTML = nama;
    let alamat = document.getElementById("alamat").value;
    document.getElementById("paparalamat").innerHTML = alamat;
    let bangsa = document.getElementById("bangsa").value;
    document.getElementById("paparbangsa").innerHTML = bangsa;
    return false;
}

function checkButton() {
    if (document.getElementById('lelaki').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("lelaki").value;
    }
    else if (document.getElementById('wanita').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("wanita").value;
    }
    else {
        document.getElementById("error").innerHTML
        = "Sila pilih jantina";
    }
}

function borang() {
    let x = document.forms["myForms"]["nama"].value;
    if(x=="") {
        alert("Name must be filled out");
        return false;
    }
}

function borang() {
    let x = document.forms["myForms"]["alamat"].value;
    if(x=="") {
        alert("Alamat must be filled out");
        return false;
    }
}

function borang() {
    let x = document.forms["myForms"]["bangsa"].value;
    if(x=="") {
        alert("Bangsa must be filled out");
        return false;
    }
}