goog.provide('app.interface$.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","setup","app/setup",1988353633),(function (db,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-encounter-map","current-encounter-map",1023913829),app.interface$.encounters.starter,new cljs.core.Keyword(null,"player-characters","player-characters",-1720805509),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),app.interface$.characters.starting_characters)),new cljs.core.Keyword(null,"characters","characters",-163867197),app.interface$.utils.associate_by(new cljs.core.Keyword(null,"id","id",-1388402092),app.interface$.characters.starting_characters)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"message","message",-406056002),day8.re_frame.undo.undoable.cljs$core$IFn$_invoke$arity$1("Send message"),(function (db,p__76148){
var vec__76149 = p__76148;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76149,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76149,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"message","message",-406056002),message);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
var seq__76152_76156 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-encounter-map","current-encounter-map",1023913829),new cljs.core.Keyword(null,"player-characters","player-characters",-1720805509),new cljs.core.Keyword(null,"characters","characters",-163867197)], null));
var chunk__76153_76157 = null;
var count__76154_76158 = (0);
var i__76155_76159 = (0);
while(true){
if((i__76155_76159 < count__76154_76158)){
var kw_76160 = chunk__76153_76157.cljs$core$IIndexed$_nth$arity$2(null,i__76155_76159);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(kw_76160,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (seq__76152_76156,chunk__76153_76157,count__76154_76158,i__76155_76159,kw_76160){
return (function (db,_){
return (kw_76160.cljs$core$IFn$_invoke$arity$1 ? kw_76160.cljs$core$IFn$_invoke$arity$1(db) : kw_76160.call(null,db));
});})(seq__76152_76156,chunk__76153_76157,count__76154_76158,i__76155_76159,kw_76160))
], 0));


var G__76161 = seq__76152_76156;
var G__76162 = chunk__76153_76157;
var G__76163 = count__76154_76158;
var G__76164 = (i__76155_76159 + (1));
seq__76152_76156 = G__76161;
chunk__76153_76157 = G__76162;
count__76154_76158 = G__76163;
i__76155_76159 = G__76164;
continue;
} else {
var temp__5804__auto___76165 = cljs.core.seq(seq__76152_76156);
if(temp__5804__auto___76165){
var seq__76152_76166__$1 = temp__5804__auto___76165;
if(cljs.core.chunked_seq_QMARK_(seq__76152_76166__$1)){
var c__5565__auto___76167 = cljs.core.chunk_first(seq__76152_76166__$1);
var G__76168 = cljs.core.chunk_rest(seq__76152_76166__$1);
var G__76169 = c__5565__auto___76167;
var G__76170 = cljs.core.count(c__5565__auto___76167);
var G__76171 = (0);
seq__76152_76156 = G__76168;
chunk__76153_76157 = G__76169;
count__76154_76158 = G__76170;
i__76155_76159 = G__76171;
continue;
} else {
var kw_76172 = cljs.core.first(seq__76152_76166__$1);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(kw_76172,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (seq__76152_76156,chunk__76153_76157,count__76154_76158,i__76155_76159,kw_76172,seq__76152_76166__$1,temp__5804__auto___76165){
return (function (db,_){
return (kw_76172.cljs$core$IFn$_invoke$arity$1 ? kw_76172.cljs$core$IFn$_invoke$arity$1(db) : kw_76172.call(null,db));
});})(seq__76152_76156,chunk__76153_76157,count__76154_76158,i__76155_76159,kw_76172,seq__76152_76166__$1,temp__5804__auto___76165))
], 0));


var G__76173 = cljs.core.next(seq__76152_76166__$1);
var G__76174 = null;
var G__76175 = (0);
var G__76176 = (0);
seq__76152_76156 = G__76173;
chunk__76153_76157 = G__76174;
count__76154_76158 = G__76175;
i__76155_76159 = G__76176;
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
