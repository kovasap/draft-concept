goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__65872 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__65873 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__65873);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___65984 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___65984)){
var new_db_65985 = temp__5804__auto___65984;
var fexpr__65874_65986 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__65874_65986.cljs$core$IFn$_invoke$arity$1 ? fexpr__65874_65986.cljs$core$IFn$_invoke$arity$1(new_db_65985) : fexpr__65874_65986.call(null,new_db_65985));
} else {
}

var seq__65875 = cljs.core.seq(effects_without_db);
var chunk__65876 = null;
var count__65877 = (0);
var i__65878 = (0);
while(true){
if((i__65878 < count__65877)){
var vec__65891 = chunk__65876.cljs$core$IIndexed$_nth$arity$2(null,i__65878);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65891,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65891,(1),null);
var temp__5802__auto___65987 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___65987)){
var effect_fn_65988 = temp__5802__auto___65987;
(effect_fn_65988.cljs$core$IFn$_invoke$arity$1 ? effect_fn_65988.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_65988.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__65989 = seq__65875;
var G__65990 = chunk__65876;
var G__65991 = count__65877;
var G__65992 = (i__65878 + (1));
seq__65875 = G__65989;
chunk__65876 = G__65990;
count__65877 = G__65991;
i__65878 = G__65992;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65875);
if(temp__5804__auto__){
var seq__65875__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65875__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__65875__$1);
var G__65993 = cljs.core.chunk_rest(seq__65875__$1);
var G__65994 = c__5565__auto__;
var G__65995 = cljs.core.count(c__5565__auto__);
var G__65996 = (0);
seq__65875 = G__65993;
chunk__65876 = G__65994;
count__65877 = G__65995;
i__65878 = G__65996;
continue;
} else {
var vec__65895 = cljs.core.first(seq__65875__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65895,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65895,(1),null);
var temp__5802__auto___65997 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___65997)){
var effect_fn_65998 = temp__5802__auto___65997;
(effect_fn_65998.cljs$core$IFn$_invoke$arity$1 ? effect_fn_65998.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_65998.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__65999 = cljs.core.next(seq__65875__$1);
var G__66000 = null;
var G__66001 = (0);
var G__66002 = (0);
seq__65875 = G__65999;
chunk__65876 = G__66000;
count__65877 = G__66001;
i__65878 = G__66002;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__65218__auto___66003 = re_frame.interop.now();
var duration__65219__auto___66004 = (end__65218__auto___66003 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__65219__auto___66004,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__65218__auto___66003);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__65872);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___66005 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___66005)){
var new_db_66006 = temp__5804__auto___66005;
var fexpr__65898_66007 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__65898_66007.cljs$core$IFn$_invoke$arity$1 ? fexpr__65898_66007.cljs$core$IFn$_invoke$arity$1(new_db_66006) : fexpr__65898_66007.call(null,new_db_66006));
} else {
}

var seq__65899 = cljs.core.seq(effects_without_db);
var chunk__65900 = null;
var count__65901 = (0);
var i__65902 = (0);
while(true){
if((i__65902 < count__65901)){
var vec__65914 = chunk__65900.cljs$core$IIndexed$_nth$arity$2(null,i__65902);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65914,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65914,(1),null);
var temp__5802__auto___66008 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___66008)){
var effect_fn_66009 = temp__5802__auto___66008;
(effect_fn_66009.cljs$core$IFn$_invoke$arity$1 ? effect_fn_66009.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_66009.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__66010 = seq__65899;
var G__66011 = chunk__65900;
var G__66012 = count__65901;
var G__66013 = (i__65902 + (1));
seq__65899 = G__66010;
chunk__65900 = G__66011;
count__65901 = G__66012;
i__65902 = G__66013;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65899);
if(temp__5804__auto__){
var seq__65899__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65899__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__65899__$1);
var G__66014 = cljs.core.chunk_rest(seq__65899__$1);
var G__66015 = c__5565__auto__;
var G__66016 = cljs.core.count(c__5565__auto__);
var G__66017 = (0);
seq__65899 = G__66014;
chunk__65900 = G__66015;
count__65901 = G__66016;
i__65902 = G__66017;
continue;
} else {
var vec__65924 = cljs.core.first(seq__65899__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65924,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65924,(1),null);
var temp__5802__auto___66018 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___66018)){
var effect_fn_66019 = temp__5802__auto___66018;
(effect_fn_66019.cljs$core$IFn$_invoke$arity$1 ? effect_fn_66019.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_66019.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__66020 = cljs.core.next(seq__65899__$1);
var G__66021 = null;
var G__66022 = (0);
var G__66023 = (0);
seq__65899 = G__66020;
chunk__65900 = G__66021;
count__65901 = G__66022;
i__65902 = G__66023;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__65927){
var map__65928 = p__65927;
var map__65928__$1 = cljs.core.__destructure_map(map__65928);
var effect = map__65928__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65928__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65928__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__65931 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__65932 = null;
var count__65933 = (0);
var i__65934 = (0);
while(true){
if((i__65934 < count__65933)){
var effect = chunk__65932.cljs$core$IIndexed$_nth$arity$2(null,i__65934);
re_frame.fx.dispatch_later(effect);


var G__66024 = seq__65931;
var G__66025 = chunk__65932;
var G__66026 = count__65933;
var G__66027 = (i__65934 + (1));
seq__65931 = G__66024;
chunk__65932 = G__66025;
count__65933 = G__66026;
i__65934 = G__66027;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65931);
if(temp__5804__auto__){
var seq__65931__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65931__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__65931__$1);
var G__66028 = cljs.core.chunk_rest(seq__65931__$1);
var G__66029 = c__5565__auto__;
var G__66030 = cljs.core.count(c__5565__auto__);
var G__66031 = (0);
seq__65931 = G__66028;
chunk__65932 = G__66029;
count__65933 = G__66030;
i__65934 = G__66031;
continue;
} else {
var effect = cljs.core.first(seq__65931__$1);
re_frame.fx.dispatch_later(effect);


var G__66032 = cljs.core.next(seq__65931__$1);
var G__66033 = null;
var G__66034 = (0);
var G__66035 = (0);
seq__65931 = G__66032;
chunk__65932 = G__66033;
count__65933 = G__66034;
i__65934 = G__66035;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__65937 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__65938 = null;
var count__65939 = (0);
var i__65940 = (0);
while(true){
if((i__65940 < count__65939)){
var vec__65952 = chunk__65938.cljs$core$IIndexed$_nth$arity$2(null,i__65940);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65952,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65952,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___66036 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___66036)){
var effect_fn_66037 = temp__5802__auto___66036;
(effect_fn_66037.cljs$core$IFn$_invoke$arity$1 ? effect_fn_66037.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_66037.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__66038 = seq__65937;
var G__66039 = chunk__65938;
var G__66040 = count__65939;
var G__66041 = (i__65940 + (1));
seq__65937 = G__66038;
chunk__65938 = G__66039;
count__65939 = G__66040;
i__65940 = G__66041;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65937);
if(temp__5804__auto__){
var seq__65937__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65937__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__65937__$1);
var G__66042 = cljs.core.chunk_rest(seq__65937__$1);
var G__66043 = c__5565__auto__;
var G__66044 = cljs.core.count(c__5565__auto__);
var G__66045 = (0);
seq__65937 = G__66042;
chunk__65938 = G__66043;
count__65939 = G__66044;
i__65940 = G__66045;
continue;
} else {
var vec__65957 = cljs.core.first(seq__65937__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65957,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65957,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___66050 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___66050)){
var effect_fn_66051 = temp__5802__auto___66050;
(effect_fn_66051.cljs$core$IFn$_invoke$arity$1 ? effect_fn_66051.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_66051.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__66052 = cljs.core.next(seq__65937__$1);
var G__66053 = null;
var G__66054 = (0);
var G__66055 = (0);
seq__65937 = G__66052;
chunk__65938 = G__66053;
count__65939 = G__66054;
i__65940 = G__66055;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__65961 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__65962 = null;
var count__65963 = (0);
var i__65964 = (0);
while(true){
if((i__65964 < count__65963)){
var event = chunk__65962.cljs$core$IIndexed$_nth$arity$2(null,i__65964);
re_frame.router.dispatch(event);


var G__66059 = seq__65961;
var G__66060 = chunk__65962;
var G__66061 = count__65963;
var G__66062 = (i__65964 + (1));
seq__65961 = G__66059;
chunk__65962 = G__66060;
count__65963 = G__66061;
i__65964 = G__66062;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65961);
if(temp__5804__auto__){
var seq__65961__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65961__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__65961__$1);
var G__66064 = cljs.core.chunk_rest(seq__65961__$1);
var G__66065 = c__5565__auto__;
var G__66066 = cljs.core.count(c__5565__auto__);
var G__66067 = (0);
seq__65961 = G__66064;
chunk__65962 = G__66065;
count__65963 = G__66066;
i__65964 = G__66067;
continue;
} else {
var event = cljs.core.first(seq__65961__$1);
re_frame.router.dispatch(event);


var G__66068 = cljs.core.next(seq__65961__$1);
var G__66069 = null;
var G__66070 = (0);
var G__66071 = (0);
seq__65961 = G__66068;
chunk__65962 = G__66069;
count__65963 = G__66070;
i__65964 = G__66071;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__65979 = cljs.core.seq(value);
var chunk__65980 = null;
var count__65981 = (0);
var i__65982 = (0);
while(true){
if((i__65982 < count__65981)){
var event = chunk__65980.cljs$core$IIndexed$_nth$arity$2(null,i__65982);
clear_event(event);


var G__66074 = seq__65979;
var G__66075 = chunk__65980;
var G__66076 = count__65981;
var G__66077 = (i__65982 + (1));
seq__65979 = G__66074;
chunk__65980 = G__66075;
count__65981 = G__66076;
i__65982 = G__66077;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65979);
if(temp__5804__auto__){
var seq__65979__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65979__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__65979__$1);
var G__66079 = cljs.core.chunk_rest(seq__65979__$1);
var G__66080 = c__5565__auto__;
var G__66081 = cljs.core.count(c__5565__auto__);
var G__66082 = (0);
seq__65979 = G__66079;
chunk__65980 = G__66080;
count__65981 = G__66081;
i__65982 = G__66082;
continue;
} else {
var event = cljs.core.first(seq__65979__$1);
clear_event(event);


var G__66083 = cljs.core.next(seq__65979__$1);
var G__66084 = null;
var G__66085 = (0);
var G__66086 = (0);
seq__65979 = G__66083;
chunk__65980 = G__66084;
count__65981 = G__66085;
i__65982 = G__66086;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
