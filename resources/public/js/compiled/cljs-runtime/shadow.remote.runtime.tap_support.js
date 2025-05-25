goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__61762,p__61763){
var map__61764 = p__61762;
var map__61764__$1 = cljs.core.__destructure_map(map__61764);
var svc = map__61764__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61764__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61764__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61764__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61765 = p__61763;
var map__61765__$1 = cljs.core.__destructure_map(map__61765);
var msg = map__61765__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61765__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61765__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61765__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61765__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__61776,p__61777){
var map__61778 = p__61776;
var map__61778__$1 = cljs.core.__destructure_map(map__61778);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61778__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61779 = p__61777;
var map__61779__$1 = cljs.core.__destructure_map(map__61779);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61779__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__61784,p__61785){
var map__61788 = p__61784;
var map__61788__$1 = cljs.core.__destructure_map(map__61788);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61788__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61788__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61789 = p__61785;
var map__61789__$1 = cljs.core.__destructure_map(map__61789);
var msg = map__61789__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61789__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61796,tid){
var map__61797 = p__61796;
var map__61797__$1 = cljs.core.__destructure_map(map__61797);
var svc = map__61797__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61797__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61807 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61808 = null;
var count__61809 = (0);
var i__61810 = (0);
while(true){
if((i__61810 < count__61809)){
var vec__61832 = chunk__61808.cljs$core$IIndexed$_nth$arity$2(null,i__61810);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61832,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61832,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61850 = seq__61807;
var G__61851 = chunk__61808;
var G__61852 = count__61809;
var G__61853 = (i__61810 + (1));
seq__61807 = G__61850;
chunk__61808 = G__61851;
count__61809 = G__61852;
i__61810 = G__61853;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__61807);
if(temp__5804__auto__){
var seq__61807__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61807__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__61807__$1);
var G__61854 = cljs.core.chunk_rest(seq__61807__$1);
var G__61855 = c__5565__auto__;
var G__61856 = cljs.core.count(c__5565__auto__);
var G__61857 = (0);
seq__61807 = G__61854;
chunk__61808 = G__61855;
count__61809 = G__61856;
i__61810 = G__61857;
continue;
} else {
var vec__61838 = cljs.core.first(seq__61807__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61838,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61838,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61861 = cljs.core.next(seq__61807__$1);
var G__61862 = null;
var G__61863 = (0);
var G__61864 = (0);
seq__61807 = G__61861;
chunk__61808 = G__61862;
count__61809 = G__61863;
i__61810 = G__61864;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61801_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61801_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61802_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61802_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61803_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61803_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61804_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61804_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__61842){
var map__61843 = p__61842;
var map__61843__$1 = cljs.core.__destructure_map(map__61843);
var svc = map__61843__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61843__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61843__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
