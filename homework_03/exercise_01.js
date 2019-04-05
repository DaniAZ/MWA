const { Resolver} = require('dns').promises;
const dns = require('dns');

dns.lookup('www.mum.edu', (err, address, family) => {
  console.log('1: address: %j family: IPv%s', address, family);
});
const resolver = new Resolver();

resolver.resolve4('www.mum.edu').then((addresses) => {
    console.log("2.",addresses);
  });

  
(async function() {
    const addresses = await resolver.resolve4('www.mum.edu');
       console.log("3.",addresses);
  })();

// // another way of making promise without using promisfy
// const resolver = new Resolver();
// const p= new Promise(function(resolve,reject){
//     resolver.resolve4('www.mum.edu',(err,resp)=>{
//         resolve(resp);
//         reject(err);
//     });
    
// }).then(resp=>console.log(resp));
  