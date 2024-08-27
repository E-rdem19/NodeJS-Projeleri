const http=require('http');

const server=http.createServer((req,res)=>{
const url =req.url;
if(url==="/"){
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Anasayfa</h2>");
}else if(url==="/hakkımda"){
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Hakkımda</h2>");
}else if(url==="/iletisim"){
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>İletisim</h2>");
}else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h2>404 Sayfa bulunamadı.</h2>");
}
console.log("Sunucu başarıyla oluşturuldu.");
});

const port=5001;
server.listen(port,()=>{
    console.log('Sunucu şu pota ${port} da başarıyla çalıştırıldı.')
});