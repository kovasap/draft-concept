goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__59608){
var map__59610 = p__59608;
var map__59610__$1 = cljs.core.__destructure_map(map__59610);
var m = map__59610__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59610__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59610__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__59613_59943 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59614_59944 = null;
var count__59615_59945 = (0);
var i__59616_59946 = (0);
while(true){
if((i__59616_59946 < count__59615_59945)){
var f_59947 = chunk__59614_59944.cljs$core$IIndexed$_nth$arity$2(null,i__59616_59946);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_59947], 0));


var G__59949 = seq__59613_59943;
var G__59950 = chunk__59614_59944;
var G__59951 = count__59615_59945;
var G__59952 = (i__59616_59946 + (1));
seq__59613_59943 = G__59949;
chunk__59614_59944 = G__59950;
count__59615_59945 = G__59951;
i__59616_59946 = G__59952;
continue;
} else {
var temp__5804__auto___59953 = cljs.core.seq(seq__59613_59943);
if(temp__5804__auto___59953){
var seq__59613_59954__$1 = temp__5804__auto___59953;
if(cljs.core.chunked_seq_QMARK_(seq__59613_59954__$1)){
var c__5565__auto___59956 = cljs.core.chunk_first(seq__59613_59954__$1);
var G__59957 = cljs.core.chunk_rest(seq__59613_59954__$1);
var G__59958 = c__5565__auto___59956;
var G__59959 = cljs.core.count(c__5565__auto___59956);
var G__59960 = (0);
seq__59613_59943 = G__59957;
chunk__59614_59944 = G__59958;
count__59615_59945 = G__59959;
i__59616_59946 = G__59960;
continue;
} else {
var f_59962 = cljs.core.first(seq__59613_59954__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_59962], 0));


var G__59964 = cljs.core.next(seq__59613_59954__$1);
var G__59965 = null;
var G__59966 = (0);
var G__59967 = (0);
seq__59613_59943 = G__59964;
chunk__59614_59944 = G__59965;
count__59615_59945 = G__59966;
i__59616_59946 = G__59967;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_59974 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_59974], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_59974)))?cljs.core.second(arglists_59974):arglists_59974)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__59626_59978 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59627_59979 = null;
var count__59628_59980 = (0);
var i__59629_59981 = (0);
while(true){
if((i__59629_59981 < count__59628_59980)){
var vec__59681_59987 = chunk__59627_59979.cljs$core$IIndexed$_nth$arity$2(null,i__59629_59981);
var name_59988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59681_59987,(0),null);
var map__59684_59989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59681_59987,(1),null);
var map__59684_59990__$1 = cljs.core.__destructure_map(map__59684_59989);
var doc_59991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59684_59990__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59684_59990__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_59988], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_59992], 0));

if(cljs.core.truth_(doc_59991)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_59991], 0));
} else {
}


var G__59993 = seq__59626_59978;
var G__59994 = chunk__59627_59979;
var G__59995 = count__59628_59980;
var G__59996 = (i__59629_59981 + (1));
seq__59626_59978 = G__59993;
chunk__59627_59979 = G__59994;
count__59628_59980 = G__59995;
i__59629_59981 = G__59996;
continue;
} else {
var temp__5804__auto___59997 = cljs.core.seq(seq__59626_59978);
if(temp__5804__auto___59997){
var seq__59626_59998__$1 = temp__5804__auto___59997;
if(cljs.core.chunked_seq_QMARK_(seq__59626_59998__$1)){
var c__5565__auto___59999 = cljs.core.chunk_first(seq__59626_59998__$1);
var G__60000 = cljs.core.chunk_rest(seq__59626_59998__$1);
var G__60001 = c__5565__auto___59999;
var G__60002 = cljs.core.count(c__5565__auto___59999);
var G__60003 = (0);
seq__59626_59978 = G__60000;
chunk__59627_59979 = G__60001;
count__59628_59980 = G__60002;
i__59629_59981 = G__60003;
continue;
} else {
var vec__59689_60004 = cljs.core.first(seq__59626_59998__$1);
var name_60005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59689_60004,(0),null);
var map__59692_60006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59689_60004,(1),null);
var map__59692_60007__$1 = cljs.core.__destructure_map(map__59692_60006);
var doc_60008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59692_60007__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59692_60007__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_60005], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_60009], 0));

if(cljs.core.truth_(doc_60008)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_60008], 0));
} else {
}


var G__60010 = cljs.core.next(seq__59626_59998__$1);
var G__60011 = null;
var G__60012 = (0);
var G__60013 = (0);
seq__59626_59978 = G__60010;
chunk__59627_59979 = G__60011;
count__59628_59980 = G__60012;
i__59629_59981 = G__60013;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__59698 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__59699 = null;
var count__59700 = (0);
var i__59701 = (0);
while(true){
if((i__59701 < count__59700)){
var role = chunk__59699.cljs$core$IIndexed$_nth$arity$2(null,i__59701);
var temp__5804__auto___60014__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___60014__$1)){
var spec_60018 = temp__5804__auto___60014__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_60018)], 0));
} else {
}


var G__60019 = seq__59698;
var G__60020 = chunk__59699;
var G__60021 = count__59700;
var G__60022 = (i__59701 + (1));
seq__59698 = G__60019;
chunk__59699 = G__60020;
count__59700 = G__60021;
i__59701 = G__60022;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__59698);
if(temp__5804__auto____$1){
var seq__59698__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__59698__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__59698__$1);
var G__60023 = cljs.core.chunk_rest(seq__59698__$1);
var G__60024 = c__5565__auto__;
var G__60025 = cljs.core.count(c__5565__auto__);
var G__60026 = (0);
seq__59698 = G__60023;
chunk__59699 = G__60024;
count__59700 = G__60025;
i__59701 = G__60026;
continue;
} else {
var role = cljs.core.first(seq__59698__$1);
var temp__5804__auto___60027__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___60027__$2)){
var spec_60028 = temp__5804__auto___60027__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_60028)], 0));
} else {
}


var G__60029 = cljs.core.next(seq__59698__$1);
var G__60030 = null;
var G__60031 = (0);
var G__60032 = (0);
seq__59698 = G__60029;
chunk__59699 = G__60030;
count__59700 = G__60031;
i__59701 = G__60032;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__60038 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__60039 = cljs.core.ex_cause(t);
via = G__60038;
t = G__60039;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__59748 = datafied_throwable;
var map__59748__$1 = cljs.core.__destructure_map(map__59748);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59748__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59748__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59748__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__59750 = cljs.core.last(via);
var map__59750__$1 = cljs.core.__destructure_map(map__59750);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59750__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59750__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59750__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__59751 = data;
var map__59751__$1 = cljs.core.__destructure_map(map__59751);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59751__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59751__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59751__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__59752 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__59752__$1 = cljs.core.__destructure_map(map__59752);
var top_data = map__59752__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59752__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__59761 = phase;
var G__59761__$1 = (((G__59761 instanceof cljs.core.Keyword))?G__59761.fqn:null);
switch (G__59761__$1) {
case "read-source":
var map__59763 = data;
var map__59763__$1 = cljs.core.__destructure_map(map__59763);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59763__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59763__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__59764 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__59764__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59764,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__59764);
var G__59764__$2 = (cljs.core.truth_((function (){var fexpr__59765 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59765.cljs$core$IFn$_invoke$arity$1 ? fexpr__59765.cljs$core$IFn$_invoke$arity$1(source) : fexpr__59765.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59764__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__59764__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59764__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__59764__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__59766 = top_data;
var G__59766__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59766,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__59766);
var G__59766__$2 = (cljs.core.truth_((function (){var fexpr__59770 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59770.cljs$core$IFn$_invoke$arity$1 ? fexpr__59770.cljs$core$IFn$_invoke$arity$1(source) : fexpr__59770.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59766__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__59766__$1);
var G__59766__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59766__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__59766__$2);
var G__59766__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59766__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__59766__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59766__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__59766__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__59789 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59789,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59789,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59789,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59789,(3),null);
var G__59792 = top_data;
var G__59792__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59792,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__59792);
var G__59792__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59792__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__59792__$1);
var G__59792__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59792__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__59792__$2);
var G__59792__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59792__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__59792__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59792__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__59792__$4;
}

break;
case "execution":
var vec__59811 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59811,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59811,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59811,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59811,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59745_SHARP_){
var or__5043__auto__ = (p1__59745_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var fexpr__59817 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59817.cljs$core$IFn$_invoke$arity$1 ? fexpr__59817.cljs$core$IFn$_invoke$arity$1(p1__59745_SHARP_) : fexpr__59817.call(null,p1__59745_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__59819 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__59819__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59819,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__59819);
var G__59819__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59819__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__59819__$1);
var G__59819__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59819__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__59819__$2);
var G__59819__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59819__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__59819__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59819__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__59819__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59761__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__59841){
var map__59842 = p__59841;
var map__59842__$1 = cljs.core.__destructure_map(map__59842);
var triage_data = map__59842__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59842__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59842__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59842__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59842__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59842__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59842__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59842__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59842__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__59848 = phase;
var G__59848__$1 = (((G__59848 instanceof cljs.core.Keyword))?G__59848.fqn:null);
switch (G__59848__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__59852 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__59853 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59854 = loc;
var G__59855 = (cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__59857_60065 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__59858_60066 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__59859_60067 = true;
var _STAR_print_fn_STAR__temp_val__59860_60068 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__59859_60067);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__59860_60068);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59834_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59834_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__59858_60066);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__59857_60065);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__59852,G__59853,G__59854,G__59855) : format.call(null,G__59852,G__59853,G__59854,G__59855));

break;
case "macroexpansion":
var G__59869 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__59870 = cause_type;
var G__59871 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59872 = loc;
var G__59873 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59869,G__59870,G__59871,G__59872,G__59873) : format.call(null,G__59869,G__59870,G__59871,G__59872,G__59873));

break;
case "compile-syntax-check":
var G__59874 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__59875 = cause_type;
var G__59876 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59877 = loc;
var G__59878 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59874,G__59875,G__59876,G__59877,G__59878) : format.call(null,G__59874,G__59875,G__59876,G__59877,G__59878));

break;
case "compilation":
var G__59885 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__59886 = cause_type;
var G__59887 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59888 = loc;
var G__59889 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59885,G__59886,G__59887,G__59888,G__59889) : format.call(null,G__59885,G__59886,G__59887,G__59888,G__59889));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__59909 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__59910 = symbol;
var G__59911 = loc;
var G__59912 = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__59913_60073 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__59914_60074 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__59915_60075 = true;
var _STAR_print_fn_STAR__temp_val__59916_60076 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__59915_60075);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__59916_60076);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59837_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59837_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__59914_60074);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__59913_60073);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__59909,G__59910,G__59911,G__59912) : format.call(null,G__59909,G__59910,G__59911,G__59912));
} else {
var G__59922 = "Execution error%s at %s(%s).\n%s\n";
var G__59923 = cause_type;
var G__59924 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59925 = loc;
var G__59926 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59922,G__59923,G__59924,G__59925,G__59926) : format.call(null,G__59922,G__59923,G__59924,G__59925,G__59926));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59848__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
