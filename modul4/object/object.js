const user = {
    firstname : "Bagus",
    lastname : "Fadly Hidayatullah",
    nim : 2022010027,
    ttl : "Jepara, 26 Agustus 2003",
    umur : "19 Tahun",
    prodi : "Rekayasa Perangkat Lunak",
};

const user2 = {
    firstname : "Atep Fahmi",
    lastname : "Al Banani",
    nim : 2022010032,
    umur : "19 Tahun",
    ttl : "Garut, 7 Februari 2004",
    prodi : "Rekayasa Perangkat Lunak",
};
document.getElementById("1").innerHTML =
"Biodata User 1 = </br>" + user.firstname + " " + user.lastname +"</br>"+ user.nim +"</br>"+ user.ttl + "</br>" + user.umur + "</br>" + user.prodi;
document.getElementById("2").innerHTML =
"Biodata User 2 = </br>" + user2.firstname + " " + user2.lastname +"</br>" + user2.nim +"</br>"+ user2.ttl + "</br>" + user2.umur + "</br>" + user2.prodi;