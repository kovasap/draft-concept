goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__65234){
var map__65235 = p__65234;
var map__65235__$1 = cljs.core.__destructure_map(map__65235);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65235__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65235__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65235__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65235__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5043__auto__ = child_of;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__65236_65267 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__65237_65268 = null;
var count__65238_65269 = (0);
var i__65239_65270 = (0);
while(true){
if((i__65239_65270 < count__65238_65269)){
var vec__65253_65271 = chunk__65237_65268.cljs$core$IIndexed$_nth$arity$2(null,i__65239_65270);
var k_65272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65253_65271,(0),null);
var cb_65273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65253_65271,(1),null);
try{var G__65257_65275 = cljs.core.deref(re_frame.trace.traces);
(cb_65273.cljs$core$IFn$_invoke$arity$1 ? cb_65273.cljs$core$IFn$_invoke$arity$1(G__65257_65275) : cb_65273.call(null,G__65257_65275));
}catch (e65256){var e_65276 = e65256;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_65272,"while storing",cljs.core.deref(re_frame.trace.traces),e_65276], 0));
}

var G__65278 = seq__65236_65267;
var G__65279 = chunk__65237_65268;
var G__65280 = count__65238_65269;
var G__65281 = (i__65239_65270 + (1));
seq__65236_65267 = G__65278;
chunk__65237_65268 = G__65279;
count__65238_65269 = G__65280;
i__65239_65270 = G__65281;
continue;
} else {
var temp__5804__auto___65282 = cljs.core.seq(seq__65236_65267);
if(temp__5804__auto___65282){
var seq__65236_65283__$1 = temp__5804__auto___65282;
if(cljs.core.chunked_seq_QMARK_(seq__65236_65283__$1)){
var c__5565__auto___65284 = cljs.core.chunk_first(seq__65236_65283__$1);
var G__65285 = cljs.core.chunk_rest(seq__65236_65283__$1);
var G__65286 = c__5565__auto___65284;
var G__65287 = cljs.core.count(c__5565__auto___65284);
var G__65288 = (0);
seq__65236_65267 = G__65285;
chunk__65237_65268 = G__65286;
count__65238_65269 = G__65287;
i__65239_65270 = G__65288;
continue;
} else {
var vec__65258_65289 = cljs.core.first(seq__65236_65283__$1);
var k_65290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65258_65289,(0),null);
var cb_65291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65258_65289,(1),null);
try{var G__65262_65292 = cljs.core.deref(re_frame.trace.traces);
(cb_65291.cljs$core$IFn$_invoke$arity$1 ? cb_65291.cljs$core$IFn$_invoke$arity$1(G__65262_65292) : cb_65291.call(null,G__65262_65292));
}catch (e65261){var e_65293 = e65261;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_65290,"while storing",cljs.core.deref(re_frame.trace.traces),e_65293], 0));
}

var G__65294 = cljs.core.next(seq__65236_65283__$1);
var G__65295 = null;
var G__65296 = (0);
var G__65297 = (0);
seq__65236_65267 = G__65294;
chunk__65237_65268 = G__65295;
count__65238_65269 = G__65296;
i__65239_65270 = G__65297;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
