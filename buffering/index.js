// var buf = Buffer.from('{"URL": "google.com" }');
// console.log({buf , bufStr : buf.toString(), bufObj : JSON.parse(buf.toString('utf-8')) });

// var litBuf =  ['7b','22','55','52','4c','22','3a','20','22','67','6f','6f','67','6c','65','2e','64','6f','6d','22','20','7d'];
// var decBuf = Buffer.alloc(litBuf.length);
// litBuf.map((el,i)=>{decBuf[i]=el});
// console.log(decBuf.toString());

// var litBuf =  ['7b','22','55','52','4c','22','3a','20','22','67','6f','6f','67','6c','65','2e','64','6f','6d','22','20','7d'];
// var decBuf = Buffer.from(litBuf);
// console.log(decBuf.toString());

// var litBuf =  ['7b','22','55','52','4c','22','3a','20','22','67','6f','6f','67','6c','65','2e','64','6f','6d','22','20','7d'];
// var litBuf =  '{"URL":"google.com" }'.split('');
// var decBuf = Buffer.alloc(litBuf.length);
// litBuf.map((el,i)=>{decBuf[i]=el.charCodeAt()})
// console.log({litbuf:[litBuf, litBuf.length]},decBuf,decBuf.toString())


var litBuf =  ['7b','22','55','52','4c','22','3a','20','22','67','6f','6f','67','6c','65','2e','64','6f','6d','22','20','7d'].join('');
var decBuf = Buffer.from(litBuf, 'hex');
console.log({litbuf:[litBuf, litBuf.length]},decBuf,decBuf.toString())
