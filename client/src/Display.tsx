import { Component, createSignal } from "solid-js";
import createWebsocket from "@solid-primitives/websocket";

export function Display(){
    let textareaRef;
    const [data, setData] = createSignal("");
    const [connect, disconnect, send, state] = createWebsocket(
      "ws://localhost:3000/ws",
      (msg) => setData(msg.data),
      (msg) => setData(msg.error),
      [],
      5,
      5000
    );
    return (
    <>
      <div class="grid place-items-center">
        <b>Status:</b> {state()}
        <br />
        <b>Server Message:</b> {data()}
        <br />
        <textarea ref={textareaRef} id="msg"></textarea>
        <br />
        <br />
      </div>

      <div class="grid place-items-center inline-flex rounded-md shadow-sm" role="group">
        <button type="button" 
                class="py-2 px-4 text-sm font-medium text-gray-900 
                      bg-white rounded-l-lg border border-gray-200 
                      hover:bg-gray-100 hover:text-blue-700 focus:z-10 
                      focus:ring-2 focus:ring-blue-700 focus:text-blue-700 
                      dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                      dark:hover:text-white dark:hover:bg-gray-600 
                      dark:focus:ring-blue-500 dark:focus:text-white"
                onClick={() => send(document.getElementById("msg").value)}>
          Send
        </button>
        <button type="button" 
                class="py-2 px-4 text-sm font-medium text-gray-900 bg-white 
                      border-t border-b border-gray-200 hover:bg-gray-100 
                      hover:text-blue-700 focus:z-10 focus:ring-2 
                      focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 
                      dark:border-gray-600 dark:text-white dark:hover:text-white 
                      dark:hover:bg-gray-600 dark:focus:ring-blue-500 
                      dark:focus:text-white"
                onClick={connect}>
          Connect
        </button>
        <button type="button" 
                class="py-2 px-4 text-sm font-medium text-gray-900 
                bg-white rounded-r-md border border-gray-200 
                hover:bg-gray-100 hover:text-blue-700 focus:z-10 
                focus:ring-2 focus:ring-blue-700 focus:text-blue-700 
                dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                dark:hover:text-white dark:hover:bg-gray-600 
                dark:focus:ring-blue-500 dark:focus:text-white"
                onClick={disconnect}
                >
          Disconnect
        </button>
      </div>
    </>
    );
}