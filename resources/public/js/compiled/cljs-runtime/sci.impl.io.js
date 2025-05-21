goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__51860 = arguments.length;
switch (G__51860) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__51868 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__51869 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__51869);

try{var G__51870 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__51870);

return G__51870;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__51868);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__51874 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__51875 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__51875);

try{var G__51878 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__51878);

return G__51878;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__51874);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__51884 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__51885 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__51885);

try{var G__51887 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__51887);

return G__51887;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__51884);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__51895 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__51896 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__51896);

try{var G__51899 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__51899);

return G__51899;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__51895);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__51903 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__51904 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__51904);

try{var G__51905 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__51905);

return G__51905;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__51903);
}})();
sci.impl.io.print_meta = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null));
sci.impl.io.print_level = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null));
sci.impl.io.print_namespace_maps = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.flush_on_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),cljs.core._STAR_flush_on_newline_STAR_);
sci.impl.io.print_readably = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),cljs.core._STAR_print_readably_STAR_);
sci.impl.io.print_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),cljs.core._STAR_print_newline_STAR_);
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__51929 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__51930 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51930);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51929);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52383 = arguments.length;
var i__5767__auto___52385 = (0);
while(true){
if((i__5767__auto___52385 < len__5766__auto___52383)){
args__5772__auto__.push((arguments[i__5767__auto___52385]));

var G__52386 = (i__5767__auto___52385 + (1));
i__5767__auto___52385 = G__52386;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__51943 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__51944 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__51945 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__51946 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__51947 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__51948 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__51949 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__51950 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__51951 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__51952 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__51953 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__51954 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__51955 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__51956 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51950);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__51951);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__51952);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__51953);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__51954);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__51955);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51956);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51949);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__51948);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__51947);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__51946);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__51945);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__51944);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51943);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq51939){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51939));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__52145 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__52146 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52146);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52145);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52393 = arguments.length;
var i__5767__auto___52394 = (0);
while(true){
if((i__5767__auto___52394 < len__5766__auto___52393)){
args__5772__auto__.push((arguments[i__5767__auto___52394]));

var G__52395 = (i__5767__auto___52394 + (1));
i__5767__auto___52394 = G__52395;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__52178 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__52179 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__52180 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__52181 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__52182 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__52183 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__52184 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__52185 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__52186 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__52187 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__52188 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__52189 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__52184);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__52185);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__52186);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__52187);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__52188);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52189);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52183);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__52182);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__52181);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__52180);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__52179);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__52178);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq52175){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52175));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52400 = arguments.length;
var i__5767__auto___52401 = (0);
while(true){
if((i__5767__auto___52401 < len__5766__auto___52400)){
args__5772__auto__.push((arguments[i__5767__auto___52401]));

var G__52402 = (i__5767__auto___52401 + (1));
i__5767__auto___52401 = G__52402;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__52208 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__52209 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__52210 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__52211 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__52212 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__52213 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__52214 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__52215 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__52216 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__52217 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__52218 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__52219 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__52220 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__52221 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52215);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__52216);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__52217);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__52218);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__52219);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__52220);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52221);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52214);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__52213);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__52212);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__52211);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__52210);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__52209);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52208);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq52199){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52199));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52413 = arguments.length;
var i__5767__auto___52417 = (0);
while(true){
if((i__5767__auto___52417 < len__5766__auto___52413)){
args__5772__auto__.push((arguments[i__5767__auto___52417]));

var G__52418 = (i__5767__auto___52417 + (1));
i__5767__auto___52417 = G__52418;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__52242 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__52243 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__52244 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__52245 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__52246 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__52247 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__52248 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__52249 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__52250 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__52251 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__52252 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__52253 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__52248);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__52249);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__52250);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__52251);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__52252);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52253);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52247);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__52246);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__52245);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__52244);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__52243);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__52242);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq52234){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52234));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52428 = arguments.length;
var i__5767__auto___52429 = (0);
while(true){
if((i__5767__auto___52429 < len__5766__auto___52428)){
args__5772__auto__.push((arguments[i__5767__auto___52429]));

var G__52431 = (i__5767__auto___52429 + (1));
i__5767__auto___52429 = G__52431;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__52258 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__52259 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__52260 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__52261 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__52262 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__52263 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__52264 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__52265 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__52266 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__52267 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__52268 = null;
var _STAR_print_newline_STAR__temp_val__52269 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52264);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__52265);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__52266);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__52267);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__52268);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52269);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52263);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__52262);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__52261);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__52260);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__52259);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52258);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq52256){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52256));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52439 = arguments.length;
var i__5767__auto___52440 = (0);
while(true){
if((i__5767__auto___52440 < len__5766__auto___52439)){
args__5772__auto__.push((arguments[i__5767__auto___52440]));

var G__52443 = (i__5767__auto___52440 + (1));
i__5767__auto___52440 = G__52443;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__52283 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__52284 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__52285 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__52286 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__52287 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__52288 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__52289 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__52290 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__52291 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__52292 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__52293 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__52294 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__52289);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__52290);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__52291);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__52292);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__52293);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52294);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52288);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__52287);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__52286);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__52285);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__52284);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__52283);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq52276){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52276));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52465 = arguments.length;
var i__5767__auto___52469 = (0);
while(true){
if((i__5767__auto___52469 < len__5766__auto___52465)){
args__5772__auto__.push((arguments[i__5767__auto___52469]));

var G__52470 = (i__5767__auto___52469 + (1));
i__5767__auto___52469 = G__52470;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__52315 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__52316 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__52317 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__52318 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__52319 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__52320 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__52321 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__52322 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__52323 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__52324 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__52325 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__52326 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__52327 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__52328 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52322);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__52323);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__52324);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__52325);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__52326);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__52327);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52328);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52321);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__52320);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__52319);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__52318);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__52317);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__52316);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52315);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq52308){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52308));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5772__auto__ = [];
var len__5766__auto___52485 = arguments.length;
var i__5767__auto___52486 = (0);
while(true){
if((i__5767__auto___52486 < len__5766__auto___52485)){
args__5772__auto__.push((arguments[i__5767__auto___52486]));

var G__52487 = (i__5767__auto___52486 + (1));
i__5767__auto___52486 = G__52487;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__52344__auto__","s__52344__auto__",1316164178,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__52345__auto__","x__52345__auto__",-1119196304,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__52344__auto__","s__52344__auto__",1316164178,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__52345__auto__","x__52345__auto__",-1119196304,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__52344__auto__","s__52344__auto__",1316164178,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq52347){
var G__52348 = cljs.core.first(seq52347);
var seq52347__$1 = cljs.core.next(seq52347);
var G__52349 = cljs.core.first(seq52347__$1);
var seq52347__$2 = cljs.core.next(seq52347__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52348,G__52349,seq52347__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
