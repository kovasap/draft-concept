goog.provide('app.interface$.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","setup","app/setup",1988353633),(function (db,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-encounter-map","current-encounter-map",1023913829),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"land-type","land-type",-1373586475),"forest"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"land-type","land-type",-1373586475),"clearing"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"land-type","land-type",-1373586475),"clearing",new cljs.core.Keyword(null,"character-ids","character-ids",1847449700),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hare","hare",195746050)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"land-type","land-type",-1373586475),"lake"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"land-type","land-type",-1373586475),"forest"], null)], null)], null),new cljs.core.Keyword(null,"player-characters","player-characters",-1720805509),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),app.interface$.characters.starting_characters)),new cljs.core.Keyword(null,"characters","characters",-163867197),app.interface$.utils.associate_by(new cljs.core.Keyword(null,"id","id",-1388402092),app.interface$.characters.starting_characters)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"message","message",-406056002),day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("Send message"),(function (db,p__52790){
var vec__52791 = p__52790;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52791,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52791,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"message","message",-406056002),message);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-encounter-map-embedded","current-encounter-map-embedded",-719069085),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return clojure.walk.postwalk((function (p__52794){
var map__52795 = p__52794;
var map__52795__$1 = cljs.core.__destructure_map(map__52795);
var element = map__52795__$1;
var character_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52795__$1,new cljs.core.Keyword(null,"character-ids","character-ids",1847449700));
if(cljs.core.truth_(character_ids)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(element,new cljs.core.Keyword(null,"characters","characters",-163867197),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"characters","characters",-163867197).cljs$core$IFn$_invoke$arity$1(db),character_ids));
} else {
return element;
}
}),new cljs.core.Keyword(null,"current-encounter-map","current-encounter-map",1023913829).cljs$core$IFn$_invoke$arity$1(db));
})], 0));
var seq__52796_52800 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-encounter-map","current-encounter-map",1023913829),new cljs.core.Keyword(null,"player-characters","player-characters",-1720805509),new cljs.core.Keyword(null,"characters","characters",-163867197)], null));
var chunk__52797_52801 = null;
var count__52798_52802 = (0);
var i__52799_52803 = (0);
while(true){
if((i__52799_52803 < count__52798_52802)){
var kw_52804 = chunk__52797_52801.cljs$core$IIndexed$_nth$arity$2(null,i__52799_52803);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(kw_52804,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (seq__52796_52800,chunk__52797_52801,count__52798_52802,i__52799_52803,kw_52804){
return (function (db,_){
return (kw_52804.cljs$core$IFn$_invoke$arity$1 ? kw_52804.cljs$core$IFn$_invoke$arity$1(db) : kw_52804.call(null,db));
});})(seq__52796_52800,chunk__52797_52801,count__52798_52802,i__52799_52803,kw_52804))
], 0));


var G__52805 = seq__52796_52800;
var G__52806 = chunk__52797_52801;
var G__52807 = count__52798_52802;
var G__52808 = (i__52799_52803 + (1));
seq__52796_52800 = G__52805;
chunk__52797_52801 = G__52806;
count__52798_52802 = G__52807;
i__52799_52803 = G__52808;
continue;
} else {
var temp__5804__auto___52809 = cljs.core.seq(seq__52796_52800);
if(temp__5804__auto___52809){
var seq__52796_52810__$1 = temp__5804__auto___52809;
if(cljs.core.chunked_seq_QMARK_(seq__52796_52810__$1)){
var c__5565__auto___52811 = cljs.core.chunk_first(seq__52796_52810__$1);
var G__52812 = cljs.core.chunk_rest(seq__52796_52810__$1);
var G__52813 = c__5565__auto___52811;
var G__52814 = cljs.core.count(c__5565__auto___52811);
var G__52815 = (0);
seq__52796_52800 = G__52812;
chunk__52797_52801 = G__52813;
count__52798_52802 = G__52814;
i__52799_52803 = G__52815;
continue;
} else {
var kw_52816 = cljs.core.first(seq__52796_52810__$1);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(kw_52816,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (seq__52796_52800,chunk__52797_52801,count__52798_52802,i__52799_52803,kw_52816,seq__52796_52810__$1,temp__5804__auto___52809){
return (function (db,_){
return (kw_52816.cljs$core$IFn$_invoke$arity$1 ? kw_52816.cljs$core$IFn$_invoke$arity$1(db) : kw_52816.call(null,db));
});})(seq__52796_52800,chunk__52797_52801,count__52798_52802,i__52799_52803,kw_52816,seq__52796_52810__$1,temp__5804__auto___52809))
], 0));


var G__52817 = cljs.core.next(seq__52796_52810__$1);
var G__52818 = null;
var G__52819 = (0);
var G__52820 = (0);
seq__52796_52800 = G__52817;
chunk__52797_52801 = G__52818;
count__52798_52802 = G__52819;
i__52799_52803 = G__52820;
continue;
}
} else {
}
}
break;
}
if((typeof app !== 'undefined') && (typeof app.interface$ !== 'undefined') && (typeof app.interface$.core !== 'undefined') && (typeof app.interface$.core.root !== 'undefined')){
} else {
app.interface$.core.root = module$node_modules$react_dom$client.createRoot(goog.dom.getElement("app"));
}
app.interface$.core.init = (function app$interface$core$init(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","setup","app/setup",1988353633)], null));

return app.interface$.core.root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.interface$.view.main.main], null)));
});
/**
 * The `:dev/after-load` metadata causes this function to be called after
 *   shadow-cljs hot-reloads code. This function is called implicitly by its
 *   annotation.
 */
app.interface$.core.re_render = (function app$interface$core$re_render(){
re_frame.core.clear_subscription_cache_BANG_();

return app.interface$.core.init();
});

//# sourceMappingURL=app.interface.core.js.map
