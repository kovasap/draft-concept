goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__60988){
var map__60995 = p__60988;
var map__60995__$1 = cljs.core.__destructure_map(map__60995);
var m = map__60995__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60995__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60995__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__60997_61204 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60998_61205 = null;
var count__60999_61206 = (0);
var i__61000_61207 = (0);
while(true){
if((i__61000_61207 < count__60999_61206)){
var f_61208 = chunk__60998_61205.cljs$core$IIndexed$_nth$arity$2(null,i__61000_61207);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_61208], 0));


var G__61209 = seq__60997_61204;
var G__61210 = chunk__60998_61205;
var G__61211 = count__60999_61206;
var G__61212 = (i__61000_61207 + (1));
seq__60997_61204 = G__61209;
chunk__60998_61205 = G__61210;
count__60999_61206 = G__61211;
i__61000_61207 = G__61212;
continue;
} else {
var temp__5804__auto___61213 = cljs.core.seq(seq__60997_61204);
if(temp__5804__auto___61213){
var seq__60997_61214__$1 = temp__5804__auto___61213;
if(cljs.core.chunked_seq_QMARK_(seq__60997_61214__$1)){
var c__5565__auto___61215 = cljs.core.chunk_first(seq__60997_61214__$1);
var G__61216 = cljs.core.chunk_rest(seq__60997_61214__$1);
var G__61217 = c__5565__auto___61215;
var G__61218 = cljs.core.count(c__5565__auto___61215);
var G__61219 = (0);
seq__60997_61204 = G__61216;
chunk__60998_61205 = G__61217;
count__60999_61206 = G__61218;
i__61000_61207 = G__61219;
continue;
} else {
var f_61220 = cljs.core.first(seq__60997_61214__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_61220], 0));


var G__61224 = cljs.core.next(seq__60997_61214__$1);
var G__61225 = null;
var G__61226 = (0);
var G__61227 = (0);
seq__60997_61204 = G__61224;
chunk__60998_61205 = G__61225;
count__60999_61206 = G__61226;
i__61000_61207 = G__61227;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_61228 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_61228], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_61228)))?cljs.core.second(arglists_61228):arglists_61228)], 0));
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
var seq__61010_61229 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61011_61230 = null;
var count__61012_61231 = (0);
var i__61013_61232 = (0);
while(true){
if((i__61013_61232 < count__61012_61231)){
var vec__61040_61233 = chunk__61011_61230.cljs$core$IIndexed$_nth$arity$2(null,i__61013_61232);
var name_61234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61040_61233,(0),null);
var map__61043_61235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61040_61233,(1),null);
var map__61043_61236__$1 = cljs.core.__destructure_map(map__61043_61235);
var doc_61237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61043_61236__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61043_61236__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_61234], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_61238], 0));

if(cljs.core.truth_(doc_61237)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_61237], 0));
} else {
}


var G__61239 = seq__61010_61229;
var G__61240 = chunk__61011_61230;
var G__61241 = count__61012_61231;
var G__61242 = (i__61013_61232 + (1));
seq__61010_61229 = G__61239;
chunk__61011_61230 = G__61240;
count__61012_61231 = G__61241;
i__61013_61232 = G__61242;
continue;
} else {
var temp__5804__auto___61243 = cljs.core.seq(seq__61010_61229);
if(temp__5804__auto___61243){
var seq__61010_61244__$1 = temp__5804__auto___61243;
if(cljs.core.chunked_seq_QMARK_(seq__61010_61244__$1)){
var c__5565__auto___61245 = cljs.core.chunk_first(seq__61010_61244__$1);
var G__61246 = cljs.core.chunk_rest(seq__61010_61244__$1);
var G__61247 = c__5565__auto___61245;
var G__61248 = cljs.core.count(c__5565__auto___61245);
var G__61249 = (0);
seq__61010_61229 = G__61246;
chunk__61011_61230 = G__61247;
count__61012_61231 = G__61248;
i__61013_61232 = G__61249;
continue;
} else {
var vec__61044_61250 = cljs.core.first(seq__61010_61244__$1);
var name_61251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61044_61250,(0),null);
var map__61047_61252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61044_61250,(1),null);
var map__61047_61253__$1 = cljs.core.__destructure_map(map__61047_61252);
var doc_61254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61047_61253__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61047_61253__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_61251], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_61255], 0));

if(cljs.core.truth_(doc_61254)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_61254], 0));
} else {
}


var G__61256 = cljs.core.next(seq__61010_61244__$1);
var G__61257 = null;
var G__61258 = (0);
var G__61259 = (0);
seq__61010_61229 = G__61256;
chunk__61011_61230 = G__61257;
count__61012_61231 = G__61258;
i__61013_61232 = G__61259;
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

var seq__61055 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__61056 = null;
var count__61057 = (0);
var i__61058 = (0);
while(true){
if((i__61058 < count__61057)){
var role = chunk__61056.cljs$core$IIndexed$_nth$arity$2(null,i__61058);
var temp__5804__auto___61260__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___61260__$1)){
var spec_61261 = temp__5804__auto___61260__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_61261)], 0));
} else {
}


var G__61262 = seq__61055;
var G__61263 = chunk__61056;
var G__61264 = count__61057;
var G__61265 = (i__61058 + (1));
seq__61055 = G__61262;
chunk__61056 = G__61263;
count__61057 = G__61264;
i__61058 = G__61265;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__61055);
if(temp__5804__auto____$1){
var seq__61055__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__61055__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__61055__$1);
var G__61266 = cljs.core.chunk_rest(seq__61055__$1);
var G__61267 = c__5565__auto__;
var G__61268 = cljs.core.count(c__5565__auto__);
var G__61269 = (0);
seq__61055 = G__61266;
chunk__61056 = G__61267;
count__61057 = G__61268;
i__61058 = G__61269;
continue;
} else {
var role = cljs.core.first(seq__61055__$1);
var temp__5804__auto___61270__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___61270__$2)){
var spec_61271 = temp__5804__auto___61270__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_61271)], 0));
} else {
}


var G__61272 = cljs.core.next(seq__61055__$1);
var G__61273 = null;
var G__61274 = (0);
var G__61275 = (0);
seq__61055 = G__61272;
chunk__61056 = G__61273;
count__61057 = G__61274;
i__61058 = G__61275;
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
var G__61276 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__61277 = cljs.core.ex_cause(t);
via = G__61276;
t = G__61277;
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
var map__61086 = datafied_throwable;
var map__61086__$1 = cljs.core.__destructure_map(map__61086);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61086__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61086__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61086__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__61089 = cljs.core.last(via);
var map__61089__$1 = cljs.core.__destructure_map(map__61089);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61089__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61089__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61089__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__61090 = data;
var map__61090__$1 = cljs.core.__destructure_map(map__61090);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61090__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61090__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61090__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__61091 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__61091__$1 = cljs.core.__destructure_map(map__61091);
var top_data = map__61091__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61091__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__61104 = phase;
var G__61104__$1 = (((G__61104 instanceof cljs.core.Keyword))?G__61104.fqn:null);
switch (G__61104__$1) {
case "read-source":
var map__61107 = data;
var map__61107__$1 = cljs.core.__destructure_map(map__61107);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61107__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61107__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__61108 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__61108__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61108,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__61108);
var G__61108__$2 = (cljs.core.truth_((function (){var fexpr__61110 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61110.cljs$core$IFn$_invoke$arity$1 ? fexpr__61110.cljs$core$IFn$_invoke$arity$1(source) : fexpr__61110.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61108__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__61108__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61108__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__61108__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__61112 = top_data;
var G__61112__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61112,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__61112);
var G__61112__$2 = (cljs.core.truth_((function (){var fexpr__61115 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61115.cljs$core$IFn$_invoke$arity$1 ? fexpr__61115.cljs$core$IFn$_invoke$arity$1(source) : fexpr__61115.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61112__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__61112__$1);
var G__61112__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61112__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__61112__$2);
var G__61112__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61112__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__61112__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61112__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__61112__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__61119 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61119,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61119,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61119,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61119,(3),null);
var G__61122 = top_data;
var G__61122__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61122,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__61122);
var G__61122__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61122__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__61122__$1);
var G__61122__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61122__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__61122__$2);
var G__61122__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61122__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__61122__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61122__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__61122__$4;
}

break;
case "execution":
var vec__61126 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61126,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61126,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61126,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61126,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__61076_SHARP_){
var or__5043__auto__ = (p1__61076_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var fexpr__61131 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61131.cljs$core$IFn$_invoke$arity$1 ? fexpr__61131.cljs$core$IFn$_invoke$arity$1(p1__61076_SHARP_) : fexpr__61131.call(null,p1__61076_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__61134 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__61134__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61134,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__61134);
var G__61134__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61134__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__61134__$1);
var G__61134__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61134__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__61134__$2);
var G__61134__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61134__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__61134__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61134__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__61134__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61104__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__61144){
var map__61145 = p__61144;
var map__61145__$1 = cljs.core.__destructure_map(map__61145);
var triage_data = map__61145__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61145__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61145__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61145__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61145__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61145__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61145__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61145__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61145__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__61159 = phase;
var G__61159__$1 = (((G__61159 instanceof cljs.core.Keyword))?G__61159.fqn:null);
switch (G__61159__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__61160 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__61161 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61162 = loc;
var G__61163 = (cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__61164_61287 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__61165_61288 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__61166_61289 = true;
var _STAR_print_fn_STAR__temp_val__61167_61290 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61166_61289);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__61167_61290);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61141_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__61141_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__61165_61288);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61164_61287);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__61160,G__61161,G__61162,G__61163) : format.call(null,G__61160,G__61161,G__61162,G__61163));

break;
case "macroexpansion":
var G__61172 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__61173 = cause_type;
var G__61174 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61175 = loc;
var G__61176 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61172,G__61173,G__61174,G__61175,G__61176) : format.call(null,G__61172,G__61173,G__61174,G__61175,G__61176));

break;
case "compile-syntax-check":
var G__61177 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__61178 = cause_type;
var G__61179 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61180 = loc;
var G__61181 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61177,G__61178,G__61179,G__61180,G__61181) : format.call(null,G__61177,G__61178,G__61179,G__61180,G__61181));

break;
case "compilation":
var G__61182 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__61183 = cause_type;
var G__61184 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61185 = loc;
var G__61186 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61182,G__61183,G__61184,G__61185,G__61186) : format.call(null,G__61182,G__61183,G__61184,G__61185,G__61186));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__61187 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__61188 = symbol;
var G__61189 = loc;
var G__61190 = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__61191_61314 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__61192_61315 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__61193_61316 = true;
var _STAR_print_fn_STAR__temp_val__61194_61317 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61193_61316);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__61194_61317);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61142_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__61142_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__61192_61315);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61191_61314);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__61187,G__61188,G__61189,G__61190) : format.call(null,G__61187,G__61188,G__61189,G__61190));
} else {
var G__61196 = "Execution error%s at %s(%s).\n%s\n";
var G__61197 = cause_type;
var G__61198 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61199 = loc;
var G__61200 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61196,G__61197,G__61198,G__61199,G__61200) : format.call(null,G__61196,G__61197,G__61198,G__61199,G__61200));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61159__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
