goog.provide('zprint.optionfn');
/**
 * Given a structure which starts with defn or fn format it using the
 *   'rules of defn'.
 */
zprint.optionfn.rodfn = (function zprint$optionfn$rodfn(var_args){
var G__50257 = arguments.length;
switch (G__50257) {
case 0:
return zprint.optionfn.rodfn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return zprint.optionfn.rodfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return zprint.optionfn.rodfn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return zprint.optionfn.rodfn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.optionfn.rodfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return "rodfn";
}));

(zprint.optionfn.rodfn.cljs$core$IFn$_invoke$arity$1 = (function (rod_options){
return "rodfn";
}));

(zprint.optionfn.rodfn.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
return zprint.optionfn.rodfn.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentArrayMap.EMPTY,options,len,sexpr);
}));

(zprint.optionfn.rodfn.cljs$core$IFn$_invoke$arity$4 = (function (rod_options,options,len,sexpr){
var multi_arity_nl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(rod_options,new cljs.core.Keyword(null,"multi-arity-nl?","multi-arity-nl?",-1175171752),true);
var fn_name_QMARK_ = (cljs.core.second(sexpr) instanceof cljs.core.Symbol);
var docstring_QMARK_ = typeof cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,((fn_name_QMARK_)?(2):(1))) === 'string';
var multi_arity_QMARK_ = (!(cljs.core.vector_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,((((fn_name_QMARK_) && (docstring_QMARK_)))?(3):((((fn_name_QMARK_) || (docstring_QMARK_)))?(2):(1)
))))));
var nl_count = (cljs.core.truth_((function (){var and__5041__auto__ = multi_arity_QMARK_;
if(and__5041__auto__){
var and__5041__auto____$1 = multi_arity_nl_QMARK_;
if(cljs.core.truth_(and__5041__auto____$1)){
return docstring_QMARK_;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null):(cljs.core.truth_((function (){var and__5041__auto__ = multi_arity_QMARK_;
if(and__5041__auto__){
return multi_arity_nl_QMARK_;
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)
));
var option_map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nl-count","nl-count",-2027014043),nl_count], null),new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null),new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"nl-count","nl-count",-2027014043)], null)], null)], null);
var option_map__$1 = ((((fn_name_QMARK_) && (docstring_QMARK_)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option_map,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"arg1-force-nl-body","arg1-force-nl-body",1109597845)):((((fn_name_QMARK_) && ((!(multi_arity_QMARK_)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option_map,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"arg2-force-nl-body","arg2-force-nl-body",-2131843122)):((fn_name_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option_map,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"arg1-force-nl-body","arg1-force-nl-body",1109597845)):(((!(multi_arity_QMARK_)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option_map,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"arg1-force-nl-body","arg1-force-nl-body",1109597845)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option_map,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"flow-body","flow-body",1355242804))
))));
if(multi_arity_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option_map__$1,new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null),new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826)], null),new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.Keyword(null,"vector","vector",1902966158)], null)], null)], null));
} else {
return option_map__$1;
}
}));

(zprint.optionfn.rodfn.cljs$lang$maxFixedArity = 4);

/**
 * Look at a list, and if it has metadata, then based on the kind of
 *   metadata, try to do it differently than the normal metadata output.
 */
zprint.optionfn.meta_base_fn = (function zprint$optionfn$meta_base_fn(var_args){
var G__50271 = arguments.length;
switch (G__50271) {
case 0:
return zprint.optionfn.meta_base_fn.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.optionfn.meta_base_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.optionfn.meta_base_fn.cljs$core$IFn$_invoke$arity$0 = (function (){
return "meta-base-fn";
}));

(zprint.optionfn.meta_base_fn.cljs$core$IFn$_invoke$arity$3 = (function (opts,n,exprs){
if(cljs.core.truth_(cljs.core.meta(cljs.core.second(exprs)))){
var zfn_map = new cljs.core.Keyword(null,"zfn-map","zfn-map",1068295789).cljs$core$IFn$_invoke$arity$1(opts);
var zloc_seq_nc = (function (){var G__50280 = cljs.core.identity;
var G__50281 = new cljs.core.Keyword(null,"zloc","zloc",-2123059767).cljs$core$IFn$_invoke$arity$1(opts);
var fexpr__50279 = new cljs.core.Keyword(null,"zmap-no-comment","zmap-no-comment",1484161325).cljs$core$IFn$_invoke$arity$1(zfn_map);
return (fexpr__50279.cljs$core$IFn$_invoke$arity$2 ? fexpr__50279.cljs$core$IFn$_invoke$arity$2(G__50280,G__50281) : fexpr__50279.call(null,G__50280,G__50281));
})();
var meta_zloc = cljs.core.second(zloc_seq_nc);
var meta_seq = (function (){var fexpr__50282 = new cljs.core.Keyword(null,"zmap-no-comment","zmap-no-comment",1484161325).cljs$core$IFn$_invoke$arity$1(zfn_map);
return (fexpr__50282.cljs$core$IFn$_invoke$arity$2 ? fexpr__50282.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,meta_zloc) : fexpr__50282.call(null,cljs.core.identity,meta_zloc));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"meta","meta",1499536964),(function (){var G__50284 = cljs.core.second(meta_seq);
var fexpr__50283 = new cljs.core.Keyword(null,"ztag","ztag",125694964).cljs$core$IFn$_invoke$arity$1(zfn_map);
return (fexpr__50283.cljs$core$IFn$_invoke$arity$1 ? fexpr__50283.cljs$core$IFn$_invoke$arity$1(G__50284) : fexpr__50283.call(null,G__50284));
})())){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"split?","split?",-1633274741),true], null),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),(0)], null),new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),((((cljs.core.map_QMARK_(cljs.core.meta(cljs.core.second(exprs)))) && ((cljs.core.count(cljs.core.keys(cljs.core.meta(cljs.core.second(exprs)))) > (1)))))?new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564):new cljs.core.Keyword(null,"arg2","arg2",1729550917)),new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559)], null)], null)], null);
}
} else {
return null;
}
}));

(zprint.optionfn.meta_base_fn.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=zprint.optionfn.js.map
