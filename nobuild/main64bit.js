//import { configure, fs } from '@zenfs/core';
//import { WebStorage } from '@zenfs/dom'
import   duplexify from "https://cdn.jsdelivr.net/npm/duplexify@4.1.3/+esm" 
import  readablestream from "https://cdn.jsdelivr.net/npm/readable-stream@3.6.2/+esm"
import zenfscore from 'https://cdn.jsdelivr.net/npm/@zenfs/core@1.6.16/+esm'
export var Duplex = duplexify.Duplex
//import { Zip } from '@zenfs/archives';
//import { Emscripten } from '@zenfs/emscripten';


(async () => {
    try {
        console.log("test 2");


        // Uncomment the following line if you want to use it
         //const res = await fetch('./slitaz-rolling.iso');

      //  await configure({
            mounts: {
              //  '/tmp': window.WebStorage.InMemory,
                // Uncomment the following line if you want to use it
          //       '/': { backend: iso, data: await res.arrayBuffer() },
            }
   //     });
        console.log(window.WebStorage)
        console.log("great");
    } catch (error) {
        console.error("An error occurred:", error);
    }
})();