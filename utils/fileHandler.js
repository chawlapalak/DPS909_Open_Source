const result = require('dotenv').config();
const fs = require('fs');
const axios = require('axios'); //using axios for fetching
const colors = require('colors'); //using colors for req of colors
const cliColor = process.env.CLICOLOR || result.parsed.CLICOLOR ;         //using cliColor 

if(cliColor === "0"){
    colors.disable();
}
else{
    colors.enable();
}

var urls = [];
var urlsIgnore = [];



//this method will read the file and check if the url is matching the pattern
const readCheckFile = (fileName,ignoreFile,displayOption) => {
    
    if(ignoreFile)
    {
        console.log(`Ignore URLs file: ${ignoreFile}`);
        checkValid(ignoreFile);
    }
        
    fs.readFile(fileName, 'utf8', (err, data) => {
        if(err) {
            console.log(err);
        }
        else {
            urls = data
            .match(/(http|https)(:\/\/)([\w+\-&@`~#$%^*.=/?:]+)/gi);            
            
            checkURL(urls, urlsIgnore, displayOption);            
        }
    } );
}

//this method will check the urls if they are working or not and then print the codes in assigned colors 
const checkURL = (urlList,ignoreUrlList, displayOption) => {
    const showBad = displayOption==='all' || displayOption==='bad';
    const showGood = displayOption==='all' || displayOption==='good';
    let urlListFinal = [];
    
    //if ignore urls list is not empty than push each url to the final list if the  url is not included in the ignore urls file
    if(ignoreUrlList != null)
    {
        
       urlList.forEach((url) =>{
           if(!ignoreUrlList.includes(url))
           {
                urlListFinal.push(url);
           }
       })

    }
    else
    {
        urlListFinal = urlList;
    }
    urlListFinal.forEach(async (url) => {
        await axios
            .head(url, { timeout: 1500})
            .then((res) => {
                if(res.status === 200 && showGood ) {
                    console.log(colors.green.bold(`GOOD , Status : ${res.status} ${url}`));
                }
                else if(showBad){
                    console.log(colors.grey.bold(`UNKNOWN , Status : ${res.status} ${url}`));
                }
            })
            .catch((err) => {
                if(err.response === undefined && showBad) {
                console.log(colors.grey.bold(`UNKNOWN , Status : UNKNOWN ${url}`));
                }
                else if(showBad){
                    if(err.response.status === 400 || err.response.status === 404) {
                        console.log(colors.red.bold(`BAD , Status : ${err.response.status} ${url}`));
                    }
                    else {
                    console.log(colors.grey.bold(`UNKNOWN , Status : ${err.response.status} ${url}`));
                    }
                }
            })
    })

}

//function that checks if the ignore urls file is valid and returns a list of urls to ignore
const checkValid = (fileName) => 
{
    
    fs.readFile(fileName, 'utf8', (err, data) => {
        if(err) {
            console.log(err);
        }
        else {
            invalid = data
            .match(/[\n][^(#|http|https)].+$/gm);
            if(invalid != null)
            {
                console.log(`${fileName} include invalid links. Links should start with http:// or https://`)
                process.exit(1); 
            }
            else {
                urlsIgnore = data.match(/(http|https)(:\/\/)([\w+\-&@`~#$%^*.=/?:]+)/gi); 
                if(urlsIgnore != null)
                {
                    console.log(`The following URLs will not be checked ${urlsIgnore}`);                
                }                
            }
            
        }
    } );

    
}


module.exports = {    
    readCheckFile        
}