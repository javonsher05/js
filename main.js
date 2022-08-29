// |
// 1

// let hafta = parseInt(prompt("son "))
// switch (hafta) {
//     case 1:
//         alert("dushanba")
//         break;
//     case 2:
//         alert("seshanba")
//         break;
//     case 3:
//         alert("chorshanba")
//         break;
//     case 4:
//         alert("bashamba")
//         break;
//     case 5:
//         alert("juma")
//         break;
//     case 6:
//         alert("shanba")
//         break;
//     case 7:
//         alert("yakshanba")
//         break;
//     default:
//         break;
// }

// 2

// let baho = parseInt(prompt("son"))
// switch (baho) {
//     case 1:
//         alert("yomon")
//         break;
//     case 2:
//         alert("qoniqarsiz")
//         break;
//     case 3:
//         alert("qoniqarli")
//         break;
//     case 4:
//         alert("yaxshi")
//         break;
//     case 5:
//         alert("a'lo")
//         break;
//     default:alert("son")
//         break;
// }

// 3

// let fasil = parseInt(prompt("fasilni kiriting"))
// switch (fasil) {
//     case 1:
//         alert("yanvar" + "fevral" + "dekabr")
//         break;
//     case 2:
//         alert("mart" + "aprel" + "may")
//         break;
//     case 3:
//         alert("iyun" + "iyul" + "avgust")
//         break;
//     case 4:
//         alert("sentyabr" + "okatbr" + "noyabr")
//     default: alert("fasilni kiriting")
//         break;
// }

// 4

// let fasil = parseInt(prompt("fasilni kiriting"))
// switch (fasil) {
//     case 1:
//         alert(" yanvar" + " fevral" + " dekabr" + " 31-kun")
//         break;
//     case 2:
//         alert(" mart" + " aprel" + " may"+" 30-kun")
//         break;
//     case 3:
//         alert(" iyun" + " iyul" + " avgust"+" 30-kun")
//         break;
//     case 4:
//         alert(" sentyabr" + " okatbr" + " noyabr"+" 31-kun")
//     default: alert("fasilni kiriting")
//         break;
// }

// 5

// let a=parseInt(prompt("1-soni kiriting:"))
// let b=parseInt(prompt("2-soni kiriting:"))
// let misol = parseInt(prompt("soni kiriting:"));
// switch (misol){
//     case 1:
//         misol=a+b;
//         alert(misol);
//     break;
//     case 2:
//         misol=a-b;
//         alert(misol);
//     break;
//     case 3:
//         misol=a/b;
//         alert(misol);
//     break;
//     case 4:
//         misol=a*b;
//         alert(misol);
//     break;
// }

// 6

// let uzunlig=parseInt(prompt("Soni kiriting:"))
// let son=parseInt(prompt("1 dan 5 gacha son kiriting:"))
// let mAylantir;
// switch (son){
//     case 1:
//         mAylantir=uzunlig/10;
//     break;
//     case 2:
//         mAylantir=uzunlig*1000;
//     break;
//     case 3:
//         mAylantir=uzunlig;
//     break;
//     case 4:
//         mAylantir=uzunlig/1000;
//     break;
//     case 5:
//         mAylantir=uzunlig/100;
//     break;
// }
// alert("Uzunlig: "+mAylantir+" m ga teng");

// 7

// let ogirlik=parseInt(prompt("Soni kiriting:"))
// let son=parseInt(prompt("1 dan 5 gacha son kiriting:"))
// let kgAylantir;
// switch (son){
//     case 1:
//         kgAylantir=ogirlik;
//     break;
//     case 2:
//         kgAylantir=ogirlik/1000;
//     break;
//     case 3:
//         kgAylantir=ogirlik/100;
//     break;
//     case 4:
//         kgAylantir=ogirlik*1000;
//     break;
//     case 5:
//         kgAylantir=ogirlik*100;
//     break;
// }
// alert("Og'irligi: "+kgAylantir+" kg ga teng");

// 8

let kunlar = parseInt(prompt("Sanani kiriting kiriting:"));
let oy = parseInt(prompt("Oy raqamini kiriting:"));
let oy_n;
let h_kun = parseInt(prompt("Haftfa kunini raqamini kiriting:"));
let h_kun_n;
switch (oy) {
    case 1:
        oy_n = "Yanvar";
        break;
    case 2:
        oy_n = "Fevral";
        break;
    case 3:
        oy_n = "Mart";
        break;
    case 4:
        oy_n = "Aprel";
        break;
    case 5:
        oy_n = "May";
        break;
    case 6:
        oy_n = "Iyun";
        break;
    case 7:
        oy_n = "Iyul";
        break;
    case 8:
        oy_n = "Avgust";
        break;
    case 9:
        oy_n = "Sentyabr";
        break;
    case 10:
        oy_n = "Oktyabr";
        break;
    case 11:
        oy_n = "Noyabr";
        break;
    case 12:
        oy_n = "Dekabr";
        break;
}
switch (h_kun) {
    case 1:
        h_kun_n = "Dushanba";
        break;
    case 2:
        h_kun_n = "Seshanba";
        break;
    case 3:
        h_kun_n = "Chorshanba";
        break;
    case 4:
        h_kun_n = "Payshanba";
        break;
    case 5:
        h_kun_n = "Juma";
        break;
    case 6:
        h_kun_n = "Shanba";
        break;
    case 7:
        h_kun_n = "Yakshanba";
        break;
}
alert("Hozir " + oy_n + " oyinig " + h_kun_n + " kuni " + kunlar)

// 9

