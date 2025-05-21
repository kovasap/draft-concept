
shadow.cljs.devtools.client.env.module_loaded('base');

try { app.interface$.core.init(); } catch (e) { console.error("An error occurred when calling (app.interface.core/init)"); throw(e); }