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
var _STAR_current_trace_STAR__orig_val__65567 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__65568 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__65568);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___65707 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___65707)){
var new_db_65708 = temp__5804__auto___65707;
var fexpr__65571_65709 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__65571_65709.cljs$core$IFn$_invoke$arity$1 ? fexpr__65571_65709.cljs$core$IFn$_invoke$arity$1(new_db_65708) : fexpr__65571_65709.call(null,new_db_65708));
} else {
}

var seq__65573 = cljs.core.seq(effects_without_db);
var chunk__65574 = null;
var count__65575 = (0);
var i__65576 = (0);
while(true){
if((i__65576 < count__65575)){
var vec__65591 = chunk__65574.cljs$core$IIndexed$_nth$arity$2(null,i__65576);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65591,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65591,(1),null);
var temp__5802__auto___65710 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___65710)){
var effect_fn_65711 = temp__5802__auto___65710;
(effect_fn_65711.cljs$core$IFn$_invoke$arity$1 ? effect_fn_65711.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_65711.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__65712 = seq__65573;
var G__65713 = chunk__65574;
var G__65714 = count__65575;
var G__65715 = (i__65576 + (1));
seq__65573 = G__65712;
chunk__65574 = G__65713;
count__65575 = G__65714;
i__65576 = G__65715;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65573);
if(temp__5804__auto__){
var seq__65573__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65573__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__65573__$1);
var G__65716 = cljs.core.chunk_rest(seq__65573__$1);
var G__65717 = c__5565__auto__;
var G__65718 = cljs.core.count(c__5565__auto__);
var G__65719 = (0);
seq__65573 = G__65716;
chunk__65574 = G__65717;
count__65575 = G__65718;
i__65576 = G__65719;
continue;
} else {
var vec__65596 = cljs.core.first(seq__65573__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65596,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65596,(1),null);
var temp__5802__auto___65720 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___65720)){
var effect_fn_65721 = temp__5802__auto___65720;
(effect_fn_65721.cljs$core$IFn$_invoke$arity$1 ? effect_fn_65721.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_65721.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__65724 = cljs.core.next(seq__65573__$1);
var G__65725 = null;
var G__65726 = (0);
var G__65727 = (0);
seq__65573 = G__65724;
chunk__65574 = G__65725;
count__65575 = G__65726;
i__65576 = G__65727;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__65212__auto___65728 = re_frame.interop.now();
var duration__65213__auto___65729 = (end__65212__auto___65728 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__65213__auto___65729,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__65212__auto___65728);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__65567);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___65730 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___65730)){
var new_db_65731 = temp__5804__auto___65730;
var fexpr__65601_65732 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__65601_65732.cljs$core$IFn$_invoke$arity$1 ? fexpr__65601_65732.cljs$core$IFn$_invoke$arity$1(new_db_65731) : fexpr__65601_65732.call(null,new_db_65731));
} else {
}

var seq__65603 = cljs.core.seq(effects_without_db);
var chunk__65604 = null;
var count__65605 = (0);
var i__65606 = (0);
while(true){
if((i__65606 < count__65605)){
var vec__65615 = chunk__65604.cljs$core$IIndexed$_nth$arity$2(null,i__65606);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65615,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65615,(1),null);
var temp__5802__auto___65734 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___65734)){
var effect_fn_65735 = temp__5802__auto___65734;
(effect_fn_65735.cljs$core$IFn$_invoke$arity$1 ? effect_fn_65735.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_65735.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__65736 = seq__65603;
var G__65737 = chunk__65604;
var G__65738 = count__65605;
var G__65739 = (i__65606 + (1));
seq__65603 = G__65736;
chunk__65604 = G__65737;
count__65605 = G__65738;
i__65606 = G__65739;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65603);
if(temp__5804__auto__){
var seq__65603__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65603__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__65603__$1);
var G__65740 = cljs.core.chunk_rest(seq__65603__$1);
var G__65741 = c__5565__auto__;
var G__65742 = cljs.core.count(c__5565__auto__);
var G__65743 = (0);
seq__65603 = G__65740;
chunk__65604 = G__65741;
count__65605 = G__65742;
i__65606 = G__65743;
continue;
} else {
var vec__65622 = cljs.core.first(seq__65603__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65622,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65622,(1),null);
var temp__5802__auto___65744 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___65744)){
var effect_fn_65745 = temp__5802__auto___65744;
(effect_fn_65745.cljs$core$IFn$_invoke$arity$1 ? effect_fn_65745.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_65745.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__65746 = cljs.core.next(seq__65603__$1);
var G__65747 = null;
var G__65748 = (0);
var G__65749 = (0);
seq__65603 = G__65746;
chunk__65604 = G__65747;
count__65605 = G__65748;
i__65606 = G__65749;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__65630){
var map__65631 = p__65630;
var map__65631__$1 = cljs.core.__destructure_map(map__65631);
var effect = map__65631__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65631__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65631__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__65635 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__65636 = null;
var count__65637 = (0);
var i__65638 = (0);
while(true){
if((i__65638 < count__65637)){
var effect = chunk__65636.cljs$core$IIndexed$_nth$arity$2(null,i__65638);
re_frame.fx.dispatch_later(effect);


var G__65754 = seq__65635;
var G__65755 = chunk__65636;
var G__65756 = count__65637;
var G__65757 = (i__65638 + (1));
seq__65635 = G__65754;
chunk__65636 = G__65755;
count__65637 = G__65756;
i__65638 = G__65757;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65635);
if(temp__5804__auto__){
var seq__65635__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65635__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__65635__$1);
var G__65758 = cljs.core.chunk_rest(seq__65635__$1);
var G__65759 = c__5565__auto__;
var G__65760 = cljs.core.count(c__5565__auto__);
var G__65761 = (0);
seq__65635 = G__65758;
chunk__65636 = G__65759;
count__65637 = G__65760;
i__65638 = G__65761;
continue;
} else {
var effect = cljs.core.first(seq__65635__$1);
re_frame.fx.dispatch_later(effect);


var G__65762 = cljs.core.next(seq__65635__$1);
var G__65763 = null;
var G__65764 = (0);
var G__65765 = (0);
seq__65635 = G__65762;
chunk__65636 = G__65763;
count__65637 = G__65764;
i__65638 = G__65765;
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
var seq__65655 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__65656 = null;
var count__65657 = (0);
var i__65658 = (0);
while(true){
if((i__65658 < count__65657)){
var vec__65671 = chunk__65656.cljs$core$IIndexed$_nth$arity$2(null,i__65658);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65671,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65671,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___65769 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___65769)){
var effect_fn_65770 = temp__5802__auto___65769;
(effect_fn_65770.cljs$core$IFn$_invoke$arity$1 ? effect_fn_65770.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_65770.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__65771 = seq__65655;
var G__65772 = chunk__65656;
var G__65773 = count__65657;
var G__65774 = (i__65658 + (1));
seq__65655 = G__65771;
chunk__65656 = G__65772;
count__65657 = G__65773;
i__65658 = G__65774;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65655);
if(temp__5804__auto__){
var seq__65655__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65655__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__65655__$1);
var G__65776 = cljs.core.chunk_rest(seq__65655__$1);
var G__65777 = c__5565__auto__;
var G__65778 = cljs.core.count(c__5565__auto__);
var G__65779 = (0);
seq__65655 = G__65776;
chunk__65656 = G__65777;
count__65657 = G__65778;
i__65658 = G__65779;
continue;
} else {
var vec__65674 = cljs.core.first(seq__65655__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65674,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65674,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___65781 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___65781)){
var effect_fn_65782 = temp__5802__auto___65781;
(effect_fn_65782.cljs$core$IFn$_invoke$arity$1 ? effect_fn_65782.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_65782.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__65783 = cljs.core.next(seq__65655__$1);
var G__65784 = null;
var G__65785 = (0);
var G__65786 = (0);
seq__65655 = G__65783;
chunk__65656 = G__65784;
count__65657 = G__65785;
i__65658 = G__65786;
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
var seq__65677 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__65678 = null;
var count__65679 = (0);
var i__65680 = (0);
while(true){
if((i__65680 < count__65679)){
var event = chunk__65678.cljs$core$IIndexed$_nth$arity$2(null,i__65680);
re_frame.router.dispatch(event);


var G__65787 = seq__65677;
var G__65788 = chunk__65678;
var G__65789 = count__65679;
var G__65790 = (i__65680 + (1));
seq__65677 = G__65787;
chunk__65678 = G__65788;
count__65679 = G__65789;
i__65680 = G__65790;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65677);
if(temp__5804__auto__){
var seq__65677__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65677__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__65677__$1);
var G__65791 = cljs.core.chunk_rest(seq__65677__$1);
var G__65792 = c__5565__auto__;
var G__65793 = cljs.core.count(c__5565__auto__);
var G__65794 = (0);
seq__65677 = G__65791;
chunk__65678 = G__65792;
count__65679 = G__65793;
i__65680 = G__65794;
continue;
} else {
var event = cljs.core.first(seq__65677__$1);
re_frame.router.dispatch(event);


var G__65795 = cljs.core.next(seq__65677__$1);
var G__65796 = null;
var G__65797 = (0);
var G__65798 = (0);
seq__65677 = G__65795;
chunk__65678 = G__65796;
count__65679 = G__65797;
i__65680 = G__65798;
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
var seq__65687 = cljs.core.seq(value);
var chunk__65688 = null;
var count__65689 = (0);
var i__65690 = (0);
while(true){
if((i__65690 < count__65689)){
var event = chunk__65688.cljs$core$IIndexed$_nth$arity$2(null,i__65690);
clear_event(event);


var G__65799 = seq__65687;
var G__65800 = chunk__65688;
var G__65801 = count__65689;
var G__65802 = (i__65690 + (1));
seq__65687 = G__65799;
chunk__65688 = G__65800;
count__65689 = G__65801;
i__65690 = G__65802;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65687);
if(temp__5804__auto__){
var seq__65687__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65687__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__65687__$1);
var G__65803 = cljs.core.chunk_rest(seq__65687__$1);
var G__65804 = c__5565__auto__;
var G__65805 = cljs.core.count(c__5565__auto__);
var G__65806 = (0);
seq__65687 = G__65803;
chunk__65688 = G__65804;
count__65689 = G__65805;
i__65690 = G__65806;
continue;
} else {
var event = cljs.core.first(seq__65687__$1);
clear_event(event);


var G__65808 = cljs.core.next(seq__65687__$1);
var G__65809 = null;
var G__65810 = (0);
var G__65811 = (0);
seq__65687 = G__65808;
chunk__65688 = G__65809;
count__65689 = G__65810;
i__65690 = G__65811;
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
