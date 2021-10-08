//index.js
const express = require('express');
const app = express();
let superagent =require("superagent");
const cheerio = require('cheerio');
let news=null;

// 抓取数据

superagent.get("https://api.juejin.cn/user_api/v1/author/recommend?aid=2608&uuid=6972050453849802243&category_id=&cursor=0&limit=20").end((error,res)=>{
  if(error){
    console.log("失败了")
  }else{
   
    let $= cheerio.load(res);
    // $('item').each((idx, ele) => {
    //   let news = {
    //     title: $(ele).text(),
    //     href: $(ele).attr('href'),
    //   };
    //   news.push(news)
    // });
    
    news=res.text
  
  
    // console.log("rrrr",res.text);
  }

})

app.get('/',(req,res)=>{
    res.send(news);
})

let server = app.listen(3001, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Your App is running at http://%s:%s', host, port);
});

