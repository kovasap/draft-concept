goog.provide('app.interface$.utils');
/**
 * Gives the sole element of a sequence
 */
app.interface$.utils.only = (function app$interface$utils$only(x){
if((cljs.core.next(x) == null)){
} else {
throw (new Error("Assert failed: (nil? (next x))"));
}

return cljs.core.first(x);
});
app.interface$.utils.get_only = (function app$interface$utils$get_only(list_of_maps,k,v){
return app.interface$.utils.only(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.group_by(k,list_of_maps),null),v));
});
app.interface$.utils.associate_by = (function app$interface$utils$associate_by(f,coll){

return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll),coll);
});

//# sourceMappingURL=app.interface.utils.js.map
