const fs = require('fs');
const axios = require('axios'); //using axios for fetching
const colors = require('colors'); //using colors for req of colors

var urls = [];

//this method will read the file and check if the url is matching the pattern
const readCheckFile=(fileName)=>{
    fs.readFile(fileName, 'utf8', (err, data)=>{
        if(err){
            console.log(err);
        }
        else{
            urls = data
            .toString()
            .match(/(http|https)(:\/\/)([\w+\-&@`~#$%^*.=/?:]+)/gi); 
            checkURL(urls);
        }
    });
}

//this method will check the urls if they are working or not and then print the codes in assigned colors 
const checkURL =(urlList)=>{
    urlList.forEach(async (url)=>{
        await axios.head(url).then((res)=>
        {
            if(res.status === 200){
                console.log(colors.green.bold(`GOOD , Status : ${res.status} ${url}`));
            }
            else{
                console.log(colors.grey.bold(`UNKNOWN , Status : ${res.status} ${url}`));
            }
        }).catch((err)=>{
            if(err.response === undefined){
                console.log(colors.grey.bold(`UNKNOWN , Status : UNKNOWN ${url}`));
            }
            else
            {
                if(err.response.status === 400 || err.response.status === 404){
                    console.log(colors.red.bold(`BAD , Status : ${err.response.status} ${url}`));
                }
                else{
                    console.log(colors.grey.bold(`UNKNOWN , Status : ${err.response.status} ${url}`));
                }
            }
        })
    })

}

module.exports = {
    readCheckFile
}