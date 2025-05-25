goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__62728__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__62728 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62731__i = 0, G__62731__a = new Array(arguments.length -  0);
while (G__62731__i < G__62731__a.length) {G__62731__a[G__62731__i] = arguments[G__62731__i + 0]; ++G__62731__i;}
  args = new cljs.core.IndexedSeq(G__62731__a,0,null);
} 
return G__62728__delegate.call(this,args);};
G__62728.cljs$lang$maxFixedArity = 0;
G__62728.cljs$lang$applyTo = (function (arglist__62736){
var args = cljs.core.seq(arglist__62736);
return G__62728__delegate(args);
});
G__62728.cljs$core$IFn$_invoke$arity$variadic = G__62728__delegate;
return G__62728;
})()
);

(o.error = (function() { 
var G__62737__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__62737 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62738__i = 0, G__62738__a = new Array(arguments.length -  0);
while (G__62738__i < G__62738__a.length) {G__62738__a[G__62738__i] = arguments[G__62738__i + 0]; ++G__62738__i;}
  args = new cljs.core.IndexedSeq(G__62738__a,0,null);
} 
return G__62737__delegate.call(this,args);};
G__62737.cljs$lang$maxFixedArity = 0;
G__62737.cljs$lang$applyTo = (function (arglist__62739){
var args = cljs.core.seq(arglist__62739);
return G__62737__delegate(args);
});
G__62737.cljs$core$IFn$_invoke$arity$variadic = G__62737__delegate;
return G__62737;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
