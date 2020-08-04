var fs = require('fs');
console.log('before calling readfile');
fs.readFile('data.txt', 'utf8',function(err,contents)
{  
    if (err)
     console.log(err);
     else
       console.log(contents) 
} );
console.log('after calling readfile');