
function getwarna(hasil,warna){
    const w = document.querySelector(warna);
    const h = document.querySelector(hasil);
    h.style.background = "#"+ w.value;
    console.log(h.style.background)
}
function cekwarna(){
    const warna1 = document.querySelector('#warna1').value;
    const warna2 = document.querySelector('#warna2').value;
    const inputWarna = document.querySelector('#inputwarna').value;
    const hasilWarna = document.querySelector('#hasil');

    const W1 = parseInt(warna1,16)
    const W2 = parseInt(warna2,16)
    const IW = parseInt(inputWarna,16)

    const kecerahan = ((W1-W2)*100)/100    
    const hasil = IW - (IW*kecerahan)

    const OW = hasil.toString(16)
    hasilWarna.style.background = "#"+ OW.value;
    console.log(hasilWarna.style.background);
    
}