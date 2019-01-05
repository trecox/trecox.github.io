const request = require('request');
const cheerio = require('cheerio');

request('https://www.npmjs.com/package/article-parser', (error,
   response, html) => {
     if (!error && response.statusCode == 200) {
       console.log(html);
     }
   });
