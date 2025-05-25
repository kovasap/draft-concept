goog.provide('sci.impl.load');
sci.impl.load.handle_refer_all = (function sci$impl$load$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__51592){
var vec__51593 = p__51592;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51593,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51593,(1),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = (k instanceof cljs.core.Symbol);
if(and__5041__auto__){
var and__5041__auto____$1 = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__5041__auto____$1)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),referred,the_loaded_ns);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
});
sci.impl.load.handle_require_libspec_env = (function sci$impl$load$handle_require_libspec_env(_ctx,env,current_ns,the_loaded_ns,lib_name,p__51617){
var map__51618 = p__51617;
var map__51618__$1 = cljs.core.__destructure_map(map__51618);
var _parsed_libspec = map__51618__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51618__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51618__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51618__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51618__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51618__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51618__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__5043__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"all","all",892129742),refer);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return use;
}
})())?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?(function (){var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns__$1);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5802__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__51633 = temp__5802__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51633,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51633,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),referred,refer);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns__$1,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
})():(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use)?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
var temp__5804__auto___51814 = (function (){var G__51641 = the_loaded_ns;
var G__51641__$1 = (((G__51641 == null))?null:new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__51641));
var G__51641__$2 = (((G__51641__$1 == null))?null:cljs.core.meta(G__51641__$1));
if((G__51641__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","required-fn","sci.impl/required-fn",2082701278).cljs$core$IFn$_invoke$arity$1(G__51641__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto___51814)){
var on_loaded_51815 = temp__5804__auto___51814;
var G__51642_51816 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_51815.cljs$core$IFn$_invoke$arity$1 ? on_loaded_51815.cljs$core$IFn$_invoke$arity$1(G__51642_51816) : on_loaded_51815.call(null,G__51642_51816));
} else {
}

return env__$1;
});
sci.impl.load.add_loaded_lib = (function sci$impl$load$add_loaded_lib(env,lib){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.update,new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652),(function (loaded_libs){
if((loaded_libs == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([lib]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loaded_libs,lib);
}
}));

return null;
});
sci.impl.load.handle_require_libspec = (function sci$impl$load$handle_require_libspec(ctx,lib,opts){
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var temp__5802__auto__ = new cljs.core.Keyword(null,"as-alias","as-alias",82482467).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5802__auto__)){
var as_alias = temp__5802__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,null,lib,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),as_alias], null)));
} else {
var map__51663 = opts;
var map__51663__$1 = cljs.core.__destructure_map(map__51663);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51663__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reload_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51663__$1,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var reload_STAR_ = (function (){var or__5043__auto__ = reload;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = reload_all;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(ctx);
}
}
})();
var temp__5802__auto___51820__$1 = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib));
if(cljs.core.truth_(temp__5802__auto___51820__$1)){
var the_loaded_ns_51822 = temp__5802__auto___51820__$1;
var loading_51823 = new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__5041__auto__ = loading_51823;
if(cljs.core.truth_(and__5041__auto__)){
return (((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652).cljs$core$IFn$_invoke$arity$1(env),lib)))) && (cljs.core.nat_int_QMARK_(loading_51823.indexOf(lib))));
} else {
return and__5041__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((function (){var lib_emphasized = ["[ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)," ]"].join('');
var loading__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading_51823,lib);
var loading__$2 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([lib,lib_emphasized]),loading__$1);
return ["Cyclic load dependency: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("->",loading__$2)].join('');
})(),lib);
} else {
cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns_51822,lib,opts));
}
} else {
var temp__5802__auto___51824__$2 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5802__auto___51824__$2)){
var load_fn_51825 = temp__5802__auto___51824__$2;
var temp__5802__auto___51826__$3 = (function (){var G__51669 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib,new cljs.core.Keyword(null,"reload","reload",863702807),(function (){var or__5043__auto__ = reload;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return reload_all;
}
})()], null);
return (load_fn_51825.cljs$core$IFn$_invoke$arity$1 ? load_fn_51825.cljs$core$IFn$_invoke$arity$1(G__51669) : load_fn_51825.call(null,G__51669));
})();
if(cljs.core.truth_(temp__5802__auto___51826__$3)){
var map__51670_51828 = temp__5802__auto___51826__$3;
var map__51670_51829__$1 = cljs.core.__destructure_map(map__51670_51828);
var file_51830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51670_51829__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source_51831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51670_51829__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var ctx_51832__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload_all),new cljs.core.Keyword(null,"loading","loading",-737050189),(function (loading){
if((loading == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading,lib);
}
}));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file_51830]));

try{var fexpr__51677_51833 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__51677_51833.cljs$core$IFn$_invoke$arity$2 ? fexpr__51677_51833.cljs$core$IFn$_invoke$arity$2(ctx_51832__$1,source_51831) : fexpr__51677_51833.call(null,ctx_51832__$1,source_51831));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e51676){if((e51676 instanceof Error)){
var e_51836 = e51676;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib], 0));

throw e_51836;
} else {
throw e51676;

}
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib);
return sci.impl.load.handle_require_libspec_env(ctx,env__$1,cnn,the_loaded_ns,lib,opts);
}));
} else {
var or__5043__auto___51838 = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib);
if(cljs.core.truth_(temp__5804__auto__)){
var the_loaded_ns = temp__5804__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5043__auto___51838)){
} else {
throw (new Error(["Could not find namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}
} else {
throw (new Error(["Could not find namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}

sci.impl.load.add_loaded_lib(env_STAR_,lib);

return null;
}
});
sci.impl.load.load_lib = (function sci$impl$load$load_lib(var_args){
var args__5772__auto__ = [];
var len__5766__auto___51839 = arguments.length;
var i__5767__auto___51840 = (0);
while(true){
if((i__5767__auto___51840 < len__5766__auto___51839)){
args__5772__auto__.push((arguments[i__5767__auto___51840]));

var G__51841 = (i__5767__auto___51840 + (1));
i__5767__auto___51840 = G__51841;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,prefix,lib,options){
if(cljs.core.truth_((function (){var and__5041__auto__ = prefix;
if(cljs.core.truth_(and__5041__auto__)){
return (cljs.core.name(lib).indexOf(".") > (0));
} else {
return and__5041__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Found lib name '",cljs.core.name(lib),"' containing period with prefix '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"'.  lib names inside prefix lists must not contain periods"].join(''),lib);
} else {
}

var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')):lib);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);
return sci.impl.load.handle_require_libspec(ctx,lib__$1,opts);
}));

(sci.impl.load.load_lib.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.load.load_lib.cljs$lang$applyTo = (function (seq51683){
var G__51684 = cljs.core.first(seq51683);
var seq51683__$1 = cljs.core.next(seq51683);
var G__51685 = cljs.core.first(seq51683__$1);
var seq51683__$2 = cljs.core.next(seq51683__$1);
var G__51686 = cljs.core.first(seq51683__$2);
var seq51683__$3 = cljs.core.next(seq51683__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51684,G__51685,G__51686,seq51683__$3);
}));

/**
 * Prepends a symbol or a seq to coll
 */
sci.impl.load.prependss = (function sci$impl$load$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons(x,coll);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,coll);
}
});
/**
 * Returns true if x is a libspec
 */
sci.impl.load.libspec_QMARK_ = (function sci$impl$load$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_(x)) && ((((cljs.core.second(x) == null)) || ((cljs.core.second(x) instanceof cljs.core.Keyword)))))));
});
/**
 * Loads libs, evaling libspecs, prefix lists, and flags for
 *   forwarding to load-lib
 */
sci.impl.load.load_libs = (function sci$impl$load$load_libs(ctx,kw,args){
var args_STAR_ = cljs.core.cons(kw,args);
var flags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
var args_STAR___$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),args_STAR_);
var supported_51847 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null);
var unsupported_51848 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_51847,flags));
if(unsupported_51848){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_51848)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__51718 = cljs.core.seq(args_STAR___$1);
var chunk__51719 = null;
var count__51720 = (0);
var i__51721 = (0);
while(true){
if((i__51721 < count__51720)){
var arg = chunk__51719.cljs$core$IIndexed$_nth$arity$2(null,i__51721);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__51740_51849 = arg;
var seq__51741_51850 = cljs.core.seq(vec__51740_51849);
var first__51742_51851 = cljs.core.first(seq__51741_51850);
var seq__51741_51852__$1 = cljs.core.next(seq__51741_51850);
var prefix_51853 = first__51742_51851;
var args_STAR__51854__$2 = seq__51741_51852__$1;
if((prefix_51853 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__51743_51855 = cljs.core.seq(args_STAR__51854__$2);
var chunk__51744_51856 = null;
var count__51745_51857 = (0);
var i__51746_51858 = (0);
while(true){
if((i__51746_51858 < count__51745_51857)){
var arg_51859__$1 = chunk__51744_51856.cljs$core$IIndexed$_nth$arity$2(null,i__51746_51858);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_51853,sci.impl.load.prependss(arg_51859__$1,opts));


var G__51860 = seq__51743_51855;
var G__51861 = chunk__51744_51856;
var G__51862 = count__51745_51857;
var G__51863 = (i__51746_51858 + (1));
seq__51743_51855 = G__51860;
chunk__51744_51856 = G__51861;
count__51745_51857 = G__51862;
i__51746_51858 = G__51863;
continue;
} else {
var temp__5804__auto___51864 = cljs.core.seq(seq__51743_51855);
if(temp__5804__auto___51864){
var seq__51743_51865__$1 = temp__5804__auto___51864;
if(cljs.core.chunked_seq_QMARK_(seq__51743_51865__$1)){
var c__5565__auto___51866 = cljs.core.chunk_first(seq__51743_51865__$1);
var G__51867 = cljs.core.chunk_rest(seq__51743_51865__$1);
var G__51868 = c__5565__auto___51866;
var G__51869 = cljs.core.count(c__5565__auto___51866);
var G__51870 = (0);
seq__51743_51855 = G__51867;
chunk__51744_51856 = G__51868;
count__51745_51857 = G__51869;
i__51746_51858 = G__51870;
continue;
} else {
var arg_51871__$1 = cljs.core.first(seq__51743_51865__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_51853,sci.impl.load.prependss(arg_51871__$1,opts));


var G__51872 = cljs.core.next(seq__51743_51865__$1);
var G__51873 = null;
var G__51874 = (0);
var G__51875 = (0);
seq__51743_51855 = G__51872;
chunk__51744_51856 = G__51873;
count__51745_51857 = G__51874;
i__51746_51858 = G__51875;
continue;
}
} else {
}
}
break;
}
}


var G__51876 = seq__51718;
var G__51877 = chunk__51719;
var G__51878 = count__51720;
var G__51879 = (i__51721 + (1));
seq__51718 = G__51876;
chunk__51719 = G__51877;
count__51720 = G__51878;
i__51721 = G__51879;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51718);
if(temp__5804__auto__){
var seq__51718__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51718__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__51718__$1);
var G__51880 = cljs.core.chunk_rest(seq__51718__$1);
var G__51881 = c__5565__auto__;
var G__51882 = cljs.core.count(c__5565__auto__);
var G__51883 = (0);
seq__51718 = G__51880;
chunk__51719 = G__51881;
count__51720 = G__51882;
i__51721 = G__51883;
continue;
} else {
var arg = cljs.core.first(seq__51718__$1);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__51752_51887 = arg;
var seq__51753_51888 = cljs.core.seq(vec__51752_51887);
var first__51754_51889 = cljs.core.first(seq__51753_51888);
var seq__51753_51890__$1 = cljs.core.next(seq__51753_51888);
var prefix_51891 = first__51754_51889;
var args_STAR__51892__$2 = seq__51753_51890__$1;
if((prefix_51891 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__51758_51893 = cljs.core.seq(args_STAR__51892__$2);
var chunk__51759_51894 = null;
var count__51760_51895 = (0);
var i__51761_51896 = (0);
while(true){
if((i__51761_51896 < count__51760_51895)){
var arg_51897__$1 = chunk__51759_51894.cljs$core$IIndexed$_nth$arity$2(null,i__51761_51896);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_51891,sci.impl.load.prependss(arg_51897__$1,opts));


var G__51898 = seq__51758_51893;
var G__51899 = chunk__51759_51894;
var G__51900 = count__51760_51895;
var G__51901 = (i__51761_51896 + (1));
seq__51758_51893 = G__51898;
chunk__51759_51894 = G__51899;
count__51760_51895 = G__51900;
i__51761_51896 = G__51901;
continue;
} else {
var temp__5804__auto___51902__$1 = cljs.core.seq(seq__51758_51893);
if(temp__5804__auto___51902__$1){
var seq__51758_51903__$1 = temp__5804__auto___51902__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51758_51903__$1)){
var c__5565__auto___51904 = cljs.core.chunk_first(seq__51758_51903__$1);
var G__51905 = cljs.core.chunk_rest(seq__51758_51903__$1);
var G__51906 = c__5565__auto___51904;
var G__51907 = cljs.core.count(c__5565__auto___51904);
var G__51908 = (0);
seq__51758_51893 = G__51905;
chunk__51759_51894 = G__51906;
count__51760_51895 = G__51907;
i__51761_51896 = G__51908;
continue;
} else {
var arg_51909__$1 = cljs.core.first(seq__51758_51903__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_51891,sci.impl.load.prependss(arg_51909__$1,opts));


var G__51910 = cljs.core.next(seq__51758_51903__$1);
var G__51911 = null;
var G__51912 = (0);
var G__51913 = (0);
seq__51758_51893 = G__51910;
chunk__51759_51894 = G__51911;
count__51760_51895 = G__51912;
i__51761_51896 = G__51913;
continue;
}
} else {
}
}
break;
}
}


var G__51914 = cljs.core.next(seq__51718__$1);
var G__51915 = null;
var G__51916 = (0);
var G__51917 = (0);
seq__51718 = G__51914;
chunk__51719 = G__51915;
count__51720 = G__51916;
i__51721 = G__51917;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.load.eval_require = (function sci$impl$load$eval_require(var_args){
var args__5772__auto__ = [];
var len__5766__auto___51919 = arguments.length;
var i__5767__auto___51920 = (0);
while(true){
if((i__5767__auto___51920 < len__5766__auto___51919)){
args__5772__auto__.push((arguments[i__5767__auto___51920]));

var G__51924 = (i__5767__auto___51920 + (1));
i__5767__auto___51920 = G__51924;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"require","require",-468001333),args);
}));

(sci.impl.load.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_require.cljs$lang$applyTo = (function (seq51765){
var G__51766 = cljs.core.first(seq51765);
var seq51765__$1 = cljs.core.next(seq51765);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51766,seq51765__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.load.eval_require);
sci.impl.load.eval_use = (function sci$impl$load$eval_use(var_args){
var args__5772__auto__ = [];
var len__5766__auto___51925 = arguments.length;
var i__5767__auto___51926 = (0);
while(true){
if((i__5767__auto___51926 < len__5766__auto___51925)){
args__5772__auto__.push((arguments[i__5767__auto___51926]));

var G__51927 = (i__5767__auto___51926 + (1));
i__5767__auto___51926 = G__51927;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"use","use",-1846382424),args);
}));

(sci.impl.load.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_use.cljs$lang$applyTo = (function (seq51775){
var G__51776 = cljs.core.first(seq51775);
var seq51775__$1 = cljs.core.next(seq51775);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51776,seq51775__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.load.eval_use);
sci.impl.load.eval_refer_clojure = (function sci$impl$load$eval_refer_clojure(ctx,exprs){
var ns_sym = new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null);
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__51779 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51779,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51779,(1),null);
var G__51782_51928 = k;
var G__51782_51929__$1 = (((G__51782_51928 instanceof cljs.core.Keyword))?G__51782_51928.fqn:null);
switch (G__51782_51929__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__51782_51928,G__51782_51929__$1,vec__51779,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__51782_51928,G__51782_51929__$1,vec__51779,k,v,ns_sym))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__51782_51928,G__51782_51929__$1,vec__51779,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__51782_51928,G__51782_51929__$1,vec__51779,k,v,ns_sym))
);

break;
case "rename":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__51782_51928,G__51782_51929__$1,vec__51779,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var the_current_ns__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__51782_51928,G__51782_51929__$1,vec__51779,k,v,ns_sym){
return (function (acc,p__51783){
var vec__51784 = p__51783;
var original_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51784,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51784,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refers","refers",158076809),new_name], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(other_ns,original_name)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),original_name);
});})(exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__51782_51928,G__51782_51929__$1,vec__51779,k,v,ns_sym))
,the_current_ns,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});})(exprs__$1,G__51782_51928,G__51782_51929__$1,vec__51779,k,v,ns_sym))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51782_51929__$1)].join('')));

}

var G__51939 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__51939;
continue;
} else {
return null;
}
break;
}
});
sci.impl.load.eval_refer_STAR_ = (function sci$impl$load$eval_refer_STAR_(env,ns_sym,filters){

var cnn = sci.impl.vars.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var ns = (function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,ns_sym);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw (new Error(["No namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym)].join('')));
}
})();
var fs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,filters);
var public_keys = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(ns));
var rename = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"rename","rename",1508157613).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var exclude = cljs.core.set(new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(fs));
var to_do = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs)))?public_keys:(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return public_keys;
}
}
})());
var _ = (cljs.core.truth_((function (){var and__5041__auto__ = to_do;
if(cljs.core.truth_(and__5041__auto__)){
return (!(cljs.core.sequential_QMARK_(to_do)));
} else {
return and__5041__auto__;
}
})())?(function(){throw (new Error(":only/:refer value must be a sequential collection of symbols"))})():null);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (referred__$1,sym){
if(cljs.core.not((exclude.cljs$core$IFn$_invoke$arity$1 ? exclude.cljs$core$IFn$_invoke$arity$1(sym) : exclude.call(null,sym)))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns,sym);
if(cljs.core.truth_(v)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')
));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(referred__$1,(function (){var or__5043__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return sym;
}
})(),v);
} else {
return referred__$1;
}
}),referred,to_do);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
var namespaces__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(namespaces,cnn,the_current_ns__$1);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1);
return env__$1;
});
/**
 * The function equivalent of :refer is handled differently than what we
 *   did before (this is more like what Clojure itself does.) For
 *   referring clojure.core we still use the old code.
 */
sci.impl.load.eval_refer = (function sci$impl$load$eval_refer(var_args){
var args__5772__auto__ = [];
var len__5766__auto___51944 = arguments.length;
var i__5767__auto___51946 = (0);
while(true){
if((i__5767__auto___51946 < len__5766__auto___51944)){
args__5772__auto__.push((arguments[i__5767__auto___51946]));

var G__51947 = (i__5767__auto___51946 + (1));
i__5767__auto___51946 = G__51947;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,filters){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),ns_sym)){
sci.impl.load.eval_refer_clojure(ctx,filters);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),sci.impl.load.eval_refer_STAR_,ns_sym,filters);
}

return null;
}));

(sci.impl.load.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.load.eval_refer.cljs$lang$applyTo = (function (seq51799){
var G__51800 = cljs.core.first(seq51799);
var seq51799__$1 = cljs.core.next(seq51799);
var G__51801 = cljs.core.first(seq51799__$1);
var seq51799__$2 = cljs.core.next(seq51799__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51800,G__51801,seq51799__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.load.eval_refer);

//# sourceMappingURL=sci.impl.load.js.map
