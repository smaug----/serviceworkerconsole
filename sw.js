(function() {
   addEventListener("message",
                    function(e) {
                      e.source.postMessage(eval(e.data) + "");
                    },
                    true);
})();

// Hack. Apparently this should keep the ServiceWorker alive.
/*(function() {
   addEventListener("install",
                    function(e) {
                      e.waitUntil(new Promise(function() {}));
                    },
                    true);
})();
*/
