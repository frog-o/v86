// Filename - index.js
import type { Backend, SimpleSyncStore, Store } from '@zenfs/core';
import { ErrnoError, Errno, SimpleTransaction, StoreFS, decodeRaw, encodeRaw } from '@zenfs/core';



// Importing the http module
//const http = require("http")

// Creating server 
//const server = http.createServer((req, res) => {
    // Sending the response
   // res.write("This is the response from the server")
//    res.end();
//})

// Server listening to port 3000
//server.listen((3000), () => {
    console.log("Server is Running");
    //await new Promise(resolve => setTimeout(resolve, 5000));
    var datetime = new Date();
    console.log(datetime);
//})