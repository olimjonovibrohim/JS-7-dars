// let matn = "Quyosh charqdan chiqib g`arbga botadi";

// document.write(matn.slice(-5,-7));
// let son = 7;
// let matnSon = "8";
// document.write(typeof son.toString());
// document.write(typeof parseInt(matnSon));

// let list = [];
// list.push("Sabo");
// list.push("17 yoshda");
// list.push("Oyxon");
// list.push("16yoshda");
// list.push("sarvinoz");
// list.push("18yoshda");
// console.log(list.length);
// console.log(list);
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);

// let list = [];
// list.unshift("sabo");
// list.unshift("17 yoshda");
// list.unshift("oyxon");
// list.unshift("16 yoshda");
// list.unshift("sarvinoz");
// list.unshift("18 yoshda");
// console.log(list.length);
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);

// let list = ["Abdumurod", "Ibrohim","Quvonchbek" , "Sabo" ,"Qodir", "Islom", "Boston"];
// console.log(list.sort());
// console.log(list.sort().reverse())

// let sonlar = [142,37,5,2010,109,564];
// let tartibSon = sonlar.sort(function(a,b){
//     return a-b;
// })
// console.log(tartibSon.reverse())                                                                                                         

// let belgilar = "qwertyuiopasdfghjklzxcvbnm0123456789QWERTYUIOPASDFGHJKLZXCVBNM";
// function parolniBer(){
//     let i = 0;
//     let parol = "";
//     while(i < 6){
//         let son = parseInt(Math.random() * belgilar.length)
//         parol += belgilar [son];
//         i++
//     }
//     document.querySelector("input").value = parol;  
// }




document.querySelector(".tugma").addEventListener("click",function(){
    let  ekran = document.querySelector(".ekran");
    console.log(typeof parseInt(ekran.value));
    ekran.value = parseInt(ekran.value) +1
})
document.querySelector(".nolga").addEventListener("click",function(){
    document.querySelector(".ekran").value = 0;
})