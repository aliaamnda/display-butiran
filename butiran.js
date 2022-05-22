function borang() {
    let nama = document.getElementById("nama").value;
    document.getElementById("paparnama").innerHTML = nama;
    let alamat = document.getElementById("alamat").value;
    document.getElementById("paparalamat").innerHTML = alamat;
    let bangsa = document.getElementById("bangsa").value;
    document.getElementById("paparbangsa").innerHTML = bangsa;
    jantina = 'try jantina';
    let jantina = document.getElementById("jantina").value;
    document.getElementById("paparjantina").innerHTML = jantina;
    return false;
}