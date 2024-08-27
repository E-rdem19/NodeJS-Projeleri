const Gönderiler=[
    {Gönderi:" Hayat çok sıkıcı",Yazar:"Hayattan biri",Tarih:"22.03.2025"},
    {Gönderi:"Kod yazmak bana iyi geliyor.",Yazar:"Önemsiz biri",Tarih:"22.03.2014"},
    {Gönderi:"Bu kafa çok güzel",Yazar:"Kimsesiz insan ",Tarih:"30.05.2026"},
];
const Listeleme=()=>{
    Gönderiler.map((gönderi)=>{
        console.log("Gönderi="+gönderi.Gönderi);
        console.log("Yazar="+gönderi.Yazar);
        console.log("Gönderi tarihi="+gönderi.Tarih);
    });
};
const GönderiEkleme=(gönderi)=>{
    let promise1= new Promise((resolve,reject)=>{
        Gönderiler.push(gönderi);
        if(gönderi!==0||gönderi!==null){
            resolve("Post Başarı şekilde kaydedildi.");
        }else{
            reject("Post bilgileri boş olduğu için post kaydedilmedi.");
        }
    })
    return promise1;
};
GönderiEkleme({Gönderi:"Hayat nasıl millet",Yazar:"afkPro",Tarih:"22.07.2025"})
.then(()=>{
    console.log("Postlar:");
    Listeleme();
}).catch((Error)=>{
    console.log(Error)
});
