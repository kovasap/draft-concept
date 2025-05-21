goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60655,p__60656){
var map__60657 = p__60655;
var map__60657__$1 = cljs.core.__destructure_map(map__60657);
var svc = map__60657__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60657__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60657__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60657__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60658 = p__60656;
var map__60658__$1 = cljs.core.__destructure_map(map__60658);
var msg = map__60658__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60658__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60658__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60658__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60658__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60661,p__60662){
var map__60663 = p__60661;
var map__60663__$1 = cljs.core.__destructure_map(map__60663);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60663__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60664 = p__60662;
var map__60664__$1 = cljs.core.__destructure_map(map__60664);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60664__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60665,p__60666){
var map__60669 = p__60665;
var map__60669__$1 = cljs.core.__destructure_map(map__60669);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60669__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60669__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60670 = p__60666;
var map__60670__$1 = cljs.core.__destructure_map(map__60670);
var msg = map__60670__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60670__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60676,tid){
var map__60677 = p__60676;
var map__60677__$1 = cljs.core.__destructure_map(map__60677);
var svc = map__60677__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60677__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60691 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60692 = null;
var count__60693 = (0);
var i__60694 = (0);
while(true){
if((i__60694 < count__60693)){
var vec__60714 = chunk__60692.cljs$core$IIndexed$_nth$arity$2(null,i__60694);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60714,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60714,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60765 = seq__60691;
var G__60766 = chunk__60692;
var G__60767 = count__60693;
var G__60768 = (i__60694 + (1));
seq__60691 = G__60765;
chunk__60692 = G__60766;
count__60693 = G__60767;
i__60694 = G__60768;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__60691);
if(temp__5804__auto__){
var seq__60691__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60691__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__60691__$1);
var G__60772 = cljs.core.chunk_rest(seq__60691__$1);
var G__60773 = c__5565__auto__;
var G__60774 = cljs.core.count(c__5565__auto__);
var G__60775 = (0);
seq__60691 = G__60772;
chunk__60692 = G__60773;
count__60693 = G__60774;
i__60694 = G__60775;
continue;
} else {
var vec__60723 = cljs.core.first(seq__60691__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60723,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60723,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60776 = cljs.core.next(seq__60691__$1);
var G__60777 = null;
var G__60778 = (0);
var G__60779 = (0);
seq__60691 = G__60776;
chunk__60692 = G__60777;
count__60693 = G__60778;
i__60694 = G__60779;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60681_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60681_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60682_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60682_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60683_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60683_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60684_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60684_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60733){
var map__60734 = p__60733;
var map__60734__$1 = cljs.core.__destructure_map(map__60734);
var svc = map__60734__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60734__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60734__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
