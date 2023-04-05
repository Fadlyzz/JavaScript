let hari;
switch (new Date().getDay()) {
  case 0:
    hari= "Ahad";
    break;
  case 1:
    hari = "Senin";
    break;
  case 2:
    hari = "Selasa";
    break;
  case 3:
    hari = "Rabu";
    break;
  case 4:
    hari = "Kamis";
    break;
  case 5:
    hari = "jum'at";
    break;
  case  6:
    hari = "Sabtu";
}
document.getElementById("case").innerHTML =
"Hari ini adalah Hari " + hari;