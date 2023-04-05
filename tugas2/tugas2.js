function cekscore(score) {
    let result;
    if (score >= 90) {
        result = "Selamat! Anda Mendapatkan Nilai A";
    } else if (score >= 80 && score <= 89){
        result = "Anda Mendapatkan Nilai B";
    } else if (score >= 70 && score <= 79){
        result = "Anda Mendapatkan Nilai C";
    } else if (score >= 60 && score <= 69){
        result = "Anda Mendapatkan Nilai D";
    } else {
        result = "Anda Mendapatkan Nilai E";
    }
    return result;
}

document.write(cekscore(90));