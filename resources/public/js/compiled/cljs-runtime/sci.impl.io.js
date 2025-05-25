goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__52418 = arguments.length;
switch (G__52418) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.vars.clojure_core_ns], null));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 2);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__52422 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__52423 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__52423);

try{var G__52424 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__52424);

return G__52424;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__52422);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__52426 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__52427 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__52427);

try{var G__52430 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__52430);

return G__52430;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__52426);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__52433 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__52434 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__52434);

try{var G__52437 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__52437);

return G__52437;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__52433);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__52438 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__52439 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__52439);

try{var G__52440 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__52440);

return G__52440;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__52438);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__52441 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__52442 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__52442);

try{var G__52443 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__52443);

return G__52443;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__52441);
}})();
sci.impl.io.print_meta = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null));
sci.impl.io.print_level = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null));
sci.impl.io.print_namespace_maps = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.flush_on_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),cljs.core._STAR_flush_on_newline_STAR_);
sci.impl.io.print_readably = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),cljs.core._STAR_print_readably_STAR_);
sci.impl.io.print_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),cljs.core._STAR_print_newline_STAR_);
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__52471 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__52472 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52472);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52471);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52748 = arguments.length;
var i__5767__auto___52749 = (0);
while(true){
if((i__5767__auto___52749 < len__5766__auto___52748)){
args__5772__auto__.push((arguments[i__5767__auto___52749]));

var G__52750 = (i__5767__auto___52749 + (1));
i__5767__auto___52749 = G__52750;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__52484 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__52485 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__52486 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__52487 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__52488 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__52489 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__52490 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__52491 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__52492 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__52493 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__52494 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__52495 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__52496 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__52497 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52491);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__52492);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__52493);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__52494);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__52495);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__52496);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52497);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52490);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__52489);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__52488);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__52487);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__52486);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__52485);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52484);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq52481){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52481));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__52502 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__52503 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52503);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52502);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52752 = arguments.length;
var i__5767__auto___52753 = (0);
while(true){
if((i__5767__auto___52753 < len__5766__auto___52752)){
args__5772__auto__.push((arguments[i__5767__auto___52753]));

var G__52754 = (i__5767__auto___52753 + (1));
i__5767__auto___52753 = G__52754;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__52524 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__52525 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__52526 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__52527 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__52528 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__52529 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__52530 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__52531 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__52532 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__52533 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__52534 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__52535 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__52530);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__52531);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__52532);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__52533);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__52534);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52535);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52529);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__52528);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__52527);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__52526);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__52525);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__52524);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq52505){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52505));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52755 = arguments.length;
var i__5767__auto___52756 = (0);
while(true){
if((i__5767__auto___52756 < len__5766__auto___52755)){
args__5772__auto__.push((arguments[i__5767__auto___52756]));

var G__52757 = (i__5767__auto___52756 + (1));
i__5767__auto___52756 = G__52757;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__52555 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__52556 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__52557 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__52558 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__52559 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__52560 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__52561 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__52562 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__52563 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__52564 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__52565 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__52566 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__52567 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__52568 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52562);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__52563);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__52564);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__52565);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__52566);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__52567);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52568);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52561);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__52560);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__52559);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__52558);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__52557);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__52556);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52555);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq52553){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52553));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52785 = arguments.length;
var i__5767__auto___52786 = (0);
while(true){
if((i__5767__auto___52786 < len__5766__auto___52785)){
args__5772__auto__.push((arguments[i__5767__auto___52786]));

var G__52787 = (i__5767__auto___52786 + (1));
i__5767__auto___52786 = G__52787;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__52571 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__52572 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__52573 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__52574 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__52575 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__52576 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__52577 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__52578 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__52579 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__52580 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__52581 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__52582 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__52577);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__52578);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__52579);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__52580);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__52581);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52582);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52576);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__52575);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__52574);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__52573);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__52572);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__52571);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq52569){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52569));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52788 = arguments.length;
var i__5767__auto___52789 = (0);
while(true){
if((i__5767__auto___52789 < len__5766__auto___52788)){
args__5772__auto__.push((arguments[i__5767__auto___52789]));

var G__52790 = (i__5767__auto___52789 + (1));
i__5767__auto___52789 = G__52790;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__52607 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__52608 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__52609 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__52610 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__52611 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__52612 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__52613 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__52614 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__52615 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__52616 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__52617 = null;
var _STAR_print_newline_STAR__temp_val__52618 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52613);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__52614);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__52615);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__52616);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__52617);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52618);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52612);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__52611);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__52610);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__52609);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__52608);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52607);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq52605){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52605));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52821 = arguments.length;
var i__5767__auto___52822 = (0);
while(true){
if((i__5767__auto___52822 < len__5766__auto___52821)){
args__5772__auto__.push((arguments[i__5767__auto___52822]));

var G__52823 = (i__5767__auto___52822 + (1));
i__5767__auto___52822 = G__52823;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__52626 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__52627 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__52628 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__52629 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__52630 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__52631 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__52632 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__52633 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__52634 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__52635 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__52636 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__52637 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__52632);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__52633);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__52634);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__52635);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__52636);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52637);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52631);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__52630);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__52629);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__52628);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__52627);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__52626);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq52619){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52619));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52830 = arguments.length;
var i__5767__auto___52831 = (0);
while(true){
if((i__5767__auto___52831 < len__5766__auto___52830)){
args__5772__auto__.push((arguments[i__5767__auto___52831]));

var G__52833 = (i__5767__auto___52831 + (1));
i__5767__auto___52831 = G__52833;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__52684 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__52685 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__52686 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__52687 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__52688 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__52689 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__52690 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__52691 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__52692 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__52693 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__52694 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__52695 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__52696 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__52697 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52691);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__52692);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__52693);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__52694);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__52695);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__52696);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52697);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52690);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__52689);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__52688);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__52687);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__52686);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__52685);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52684);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq52660){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52660));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52834 = arguments.length;
var i__5767__auto___52835 = (0);
while(true){
if((i__5767__auto___52835 < len__5766__auto___52834)){
args__5772__auto__.push((arguments[i__5767__auto___52835]));

var G__52837 = (i__5767__auto___52835 + (1));
i__5767__auto___52835 = G__52837;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__52700__auto__","s__52700__auto__",248221342,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__52701__auto__","x__52701__auto__",1141062382,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__52700__auto__","s__52700__auto__",248221342,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__52701__auto__","x__52701__auto__",1141062382,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__52700__auto__","s__52700__auto__",248221342,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq52702){
var G__52703 = cljs.core.first(seq52702);
var seq52702__$1 = cljs.core.next(seq52702);
var G__52704 = cljs.core.first(seq52702__$1);
var seq52702__$2 = cljs.core.next(seq52702__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52703,G__52704,seq52702__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
