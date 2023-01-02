import { Component, createSignal } from "solid-js";

export function DPad(){

   return (
        <>
            <div class="grid grid-cols-3 gap-3">
                <div></div>
                <button class=" h-11 w-11 bg-black rotate-45 transform origin-bottom-left"
                        onClick={() => {console.log("jeef")}}>JEEF</button>
                <div></div>
                <button class=" h-11 w-11 bg-black rotate-45 transform origin-bottom-left" 
                        onClick={() => {console.log("jeef")}}>JEEF</button>
                <div></div>
                <button class=" h-11 w-11 bg-black rotate-45 transform origin-bottom-left" onClick={() => {console.log("jeef")}}>JEEF</button>
                <div></div>
                <button class=" h-11 w-11 bg-black rotate-45 transform origin-bottom-left" onClick={() => {console.log("jeef")}}>JEEF</button>
                <div></div>
            </div>
        </>
   );
}