goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___64516 = arguments.length;
var i__5767__auto___64517 = (0);
while(true){
if((i__5767__auto___64517 < len__5766__auto___64516)){
args__5772__auto__.push((arguments[i__5767__auto___64517]));

var G__64520 = (i__5767__auto___64517 + (1));
i__5767__auto___64517 = G__64520;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq64043){
var G__64044 = cljs.core.first(seq64043);
var seq64043__$1 = cljs.core.next(seq64043);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64044,seq64043__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__64050 = cljs.core.seq(sources);
var chunk__64051 = null;
var count__64052 = (0);
var i__64053 = (0);
while(true){
if((i__64053 < count__64052)){
var map__64059 = chunk__64051.cljs$core$IIndexed$_nth$arity$2(null,i__64053);
var map__64059__$1 = cljs.core.__destructure_map(map__64059);
var src = map__64059__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64059__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64059__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64059__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64059__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e64060){var e_64528 = e64060;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_64528);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_64528.message)].join('')));
}

var G__64529 = seq__64050;
var G__64530 = chunk__64051;
var G__64531 = count__64052;
var G__64532 = (i__64053 + (1));
seq__64050 = G__64529;
chunk__64051 = G__64530;
count__64052 = G__64531;
i__64053 = G__64532;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__64050);
if(temp__5804__auto__){
var seq__64050__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64050__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__64050__$1);
var G__64534 = cljs.core.chunk_rest(seq__64050__$1);
var G__64535 = c__5565__auto__;
var G__64536 = cljs.core.count(c__5565__auto__);
var G__64537 = (0);
seq__64050 = G__64534;
chunk__64051 = G__64535;
count__64052 = G__64536;
i__64053 = G__64537;
continue;
} else {
var map__64063 = cljs.core.first(seq__64050__$1);
var map__64063__$1 = cljs.core.__destructure_map(map__64063);
var src = map__64063__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64063__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64063__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64063__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64063__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e64064){var e_64538 = e64064;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_64538);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_64538.message)].join('')));
}

var G__64540 = cljs.core.next(seq__64050__$1);
var G__64541 = null;
var G__64542 = (0);
var G__64543 = (0);
seq__64050 = G__64540;
chunk__64051 = G__64541;
count__64052 = G__64542;
i__64053 = G__64543;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__64066 = cljs.core.seq(js_requires);
var chunk__64067 = null;
var count__64068 = (0);
var i__64069 = (0);
while(true){
if((i__64069 < count__64068)){
var js_ns = chunk__64067.cljs$core$IIndexed$_nth$arity$2(null,i__64069);
var require_str_64544 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_64544);


var G__64545 = seq__64066;
var G__64546 = chunk__64067;
var G__64547 = count__64068;
var G__64548 = (i__64069 + (1));
seq__64066 = G__64545;
chunk__64067 = G__64546;
count__64068 = G__64547;
i__64069 = G__64548;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__64066);
if(temp__5804__auto__){
var seq__64066__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64066__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__64066__$1);
var G__64549 = cljs.core.chunk_rest(seq__64066__$1);
var G__64550 = c__5565__auto__;
var G__64551 = cljs.core.count(c__5565__auto__);
var G__64552 = (0);
seq__64066 = G__64549;
chunk__64067 = G__64550;
count__64068 = G__64551;
i__64069 = G__64552;
continue;
} else {
var js_ns = cljs.core.first(seq__64066__$1);
var require_str_64553 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_64553);


var G__64554 = cljs.core.next(seq__64066__$1);
var G__64555 = null;
var G__64556 = (0);
var G__64557 = (0);
seq__64066 = G__64554;
chunk__64067 = G__64555;
count__64068 = G__64556;
i__64069 = G__64557;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__64073){
var map__64075 = p__64073;
var map__64075__$1 = cljs.core.__destructure_map(map__64075);
var msg = map__64075__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64075__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64075__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__64076(s__64077){
return (new cljs.core.LazySeq(null,(function (){
var s__64077__$1 = s__64077;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__64077__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__64082 = cljs.core.first(xs__6360__auto__);
var map__64082__$1 = cljs.core.__destructure_map(map__64082);
var src = map__64082__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64082__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64082__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__64077__$1,map__64082,map__64082__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__64075,map__64075__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__64076_$_iter__64078(s__64079){
return (new cljs.core.LazySeq(null,((function (s__64077__$1,map__64082,map__64082__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__64075,map__64075__$1,msg,info,reload_info){
return (function (){
var s__64079__$1 = s__64079;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__64079__$1);
if(temp__5804__auto____$1){
var s__64079__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__64079__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__64079__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__64081 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__64080 = (0);
while(true){
if((i__64080 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__64080);
cljs.core.chunk_append(b__64081,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__64558 = (i__64080 + (1));
i__64080 = G__64558;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64081),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__64076_$_iter__64078(cljs.core.chunk_rest(s__64079__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64081),null);
}
} else {
var warning = cljs.core.first(s__64079__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__64076_$_iter__64078(cljs.core.rest(s__64079__$2)));
}
} else {
return null;
}
break;
}
});})(s__64077__$1,map__64082,map__64082__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__64075,map__64075__$1,msg,info,reload_info))
,null,null));
});})(s__64077__$1,map__64082,map__64082__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__64075,map__64075__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__64076(cljs.core.rest(s__64077__$1)));
} else {
var G__64560 = cljs.core.rest(s__64077__$1);
s__64077__$1 = G__64560;
continue;
}
} else {
var G__64561 = cljs.core.rest(s__64077__$1);
s__64077__$1 = G__64561;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__64086_64562 = cljs.core.seq(warnings);
var chunk__64087_64563 = null;
var count__64088_64564 = (0);
var i__64089_64565 = (0);
while(true){
if((i__64089_64565 < count__64088_64564)){
var map__64095_64566 = chunk__64087_64563.cljs$core$IIndexed$_nth$arity$2(null,i__64089_64565);
var map__64095_64567__$1 = cljs.core.__destructure_map(map__64095_64566);
var w_64568 = map__64095_64567__$1;
var msg_64569__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64095_64567__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_64570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64095_64567__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_64571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64095_64567__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_64572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64095_64567__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_64572)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_64570),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_64571),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_64569__$1)].join(''));


var G__64575 = seq__64086_64562;
var G__64576 = chunk__64087_64563;
var G__64577 = count__64088_64564;
var G__64578 = (i__64089_64565 + (1));
seq__64086_64562 = G__64575;
chunk__64087_64563 = G__64576;
count__64088_64564 = G__64577;
i__64089_64565 = G__64578;
continue;
} else {
var temp__5804__auto___64580 = cljs.core.seq(seq__64086_64562);
if(temp__5804__auto___64580){
var seq__64086_64581__$1 = temp__5804__auto___64580;
if(cljs.core.chunked_seq_QMARK_(seq__64086_64581__$1)){
var c__5565__auto___64582 = cljs.core.chunk_first(seq__64086_64581__$1);
var G__64583 = cljs.core.chunk_rest(seq__64086_64581__$1);
var G__64584 = c__5565__auto___64582;
var G__64585 = cljs.core.count(c__5565__auto___64582);
var G__64586 = (0);
seq__64086_64562 = G__64583;
chunk__64087_64563 = G__64584;
count__64088_64564 = G__64585;
i__64089_64565 = G__64586;
continue;
} else {
var map__64096_64587 = cljs.core.first(seq__64086_64581__$1);
var map__64096_64588__$1 = cljs.core.__destructure_map(map__64096_64587);
var w_64589 = map__64096_64588__$1;
var msg_64590__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64096_64588__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_64591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64096_64588__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_64592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64096_64588__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_64593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64096_64588__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_64593)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_64591),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_64592),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_64590__$1)].join(''));


var G__64594 = cljs.core.next(seq__64086_64581__$1);
var G__64595 = null;
var G__64596 = (0);
var G__64597 = (0);
seq__64086_64562 = G__64594;
chunk__64087_64563 = G__64595;
count__64088_64564 = G__64596;
i__64089_64565 = G__64597;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__64072_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__64072_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5041__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5041__auto____$1){
return new$;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__64104){
var map__64105 = p__64104;
var map__64105__$1 = cljs.core.__destructure_map(map__64105);
var msg = map__64105__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64105__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64105__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__64106 = cljs.core.seq(updates);
var chunk__64108 = null;
var count__64109 = (0);
var i__64110 = (0);
while(true){
if((i__64110 < count__64109)){
var path = chunk__64108.cljs$core$IIndexed$_nth$arity$2(null,i__64110);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__64286_64603 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__64290_64604 = null;
var count__64291_64605 = (0);
var i__64292_64606 = (0);
while(true){
if((i__64292_64606 < count__64291_64605)){
var node_64607 = chunk__64290_64604.cljs$core$IIndexed$_nth$arity$2(null,i__64292_64606);
if(cljs.core.not(node_64607.shadow$old)){
var path_match_64608 = shadow.cljs.devtools.client.browser.match_paths(node_64607.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64608)){
var new_link_64610 = (function (){var G__64327 = node_64607.cloneNode(true);
G__64327.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64608),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64327;
})();
(node_64607.shadow$old = true);

(new_link_64610.onload = ((function (seq__64286_64603,chunk__64290_64604,count__64291_64605,i__64292_64606,seq__64106,chunk__64108,count__64109,i__64110,new_link_64610,path_match_64608,node_64607,path,map__64105,map__64105__$1,msg,updates,reload_info){
return (function (e){
var seq__64328_64613 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__64330_64614 = null;
var count__64331_64615 = (0);
var i__64332_64616 = (0);
while(true){
if((i__64332_64616 < count__64331_64615)){
var map__64341_64617 = chunk__64330_64614.cljs$core$IIndexed$_nth$arity$2(null,i__64332_64616);
var map__64341_64618__$1 = cljs.core.__destructure_map(map__64341_64617);
var task_64619 = map__64341_64618__$1;
var fn_str_64620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64341_64618__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64341_64618__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64622 = goog.getObjectByName(fn_str_64620,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64621)].join(''));

(fn_obj_64622.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64622.cljs$core$IFn$_invoke$arity$2(path,new_link_64610) : fn_obj_64622.call(null,path,new_link_64610));


var G__64624 = seq__64328_64613;
var G__64625 = chunk__64330_64614;
var G__64626 = count__64331_64615;
var G__64627 = (i__64332_64616 + (1));
seq__64328_64613 = G__64624;
chunk__64330_64614 = G__64625;
count__64331_64615 = G__64626;
i__64332_64616 = G__64627;
continue;
} else {
var temp__5804__auto___64628 = cljs.core.seq(seq__64328_64613);
if(temp__5804__auto___64628){
var seq__64328_64629__$1 = temp__5804__auto___64628;
if(cljs.core.chunked_seq_QMARK_(seq__64328_64629__$1)){
var c__5565__auto___64630 = cljs.core.chunk_first(seq__64328_64629__$1);
var G__64631 = cljs.core.chunk_rest(seq__64328_64629__$1);
var G__64632 = c__5565__auto___64630;
var G__64633 = cljs.core.count(c__5565__auto___64630);
var G__64634 = (0);
seq__64328_64613 = G__64631;
chunk__64330_64614 = G__64632;
count__64331_64615 = G__64633;
i__64332_64616 = G__64634;
continue;
} else {
var map__64342_64635 = cljs.core.first(seq__64328_64629__$1);
var map__64342_64636__$1 = cljs.core.__destructure_map(map__64342_64635);
var task_64637 = map__64342_64636__$1;
var fn_str_64638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64342_64636__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64342_64636__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64641 = goog.getObjectByName(fn_str_64638,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64639)].join(''));

(fn_obj_64641.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64641.cljs$core$IFn$_invoke$arity$2(path,new_link_64610) : fn_obj_64641.call(null,path,new_link_64610));


var G__64642 = cljs.core.next(seq__64328_64629__$1);
var G__64643 = null;
var G__64644 = (0);
var G__64645 = (0);
seq__64328_64613 = G__64642;
chunk__64330_64614 = G__64643;
count__64331_64615 = G__64644;
i__64332_64616 = G__64645;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_64607);
});})(seq__64286_64603,chunk__64290_64604,count__64291_64605,i__64292_64606,seq__64106,chunk__64108,count__64109,i__64110,new_link_64610,path_match_64608,node_64607,path,map__64105,map__64105__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64608], 0));

goog.dom.insertSiblingAfter(new_link_64610,node_64607);


var G__64646 = seq__64286_64603;
var G__64647 = chunk__64290_64604;
var G__64648 = count__64291_64605;
var G__64649 = (i__64292_64606 + (1));
seq__64286_64603 = G__64646;
chunk__64290_64604 = G__64647;
count__64291_64605 = G__64648;
i__64292_64606 = G__64649;
continue;
} else {
var G__64650 = seq__64286_64603;
var G__64651 = chunk__64290_64604;
var G__64652 = count__64291_64605;
var G__64653 = (i__64292_64606 + (1));
seq__64286_64603 = G__64650;
chunk__64290_64604 = G__64651;
count__64291_64605 = G__64652;
i__64292_64606 = G__64653;
continue;
}
} else {
var G__64655 = seq__64286_64603;
var G__64656 = chunk__64290_64604;
var G__64657 = count__64291_64605;
var G__64658 = (i__64292_64606 + (1));
seq__64286_64603 = G__64655;
chunk__64290_64604 = G__64656;
count__64291_64605 = G__64657;
i__64292_64606 = G__64658;
continue;
}
} else {
var temp__5804__auto___64659 = cljs.core.seq(seq__64286_64603);
if(temp__5804__auto___64659){
var seq__64286_64660__$1 = temp__5804__auto___64659;
if(cljs.core.chunked_seq_QMARK_(seq__64286_64660__$1)){
var c__5565__auto___64661 = cljs.core.chunk_first(seq__64286_64660__$1);
var G__64662 = cljs.core.chunk_rest(seq__64286_64660__$1);
var G__64663 = c__5565__auto___64661;
var G__64664 = cljs.core.count(c__5565__auto___64661);
var G__64665 = (0);
seq__64286_64603 = G__64662;
chunk__64290_64604 = G__64663;
count__64291_64605 = G__64664;
i__64292_64606 = G__64665;
continue;
} else {
var node_64666 = cljs.core.first(seq__64286_64660__$1);
if(cljs.core.not(node_64666.shadow$old)){
var path_match_64667 = shadow.cljs.devtools.client.browser.match_paths(node_64666.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64667)){
var new_link_64668 = (function (){var G__64347 = node_64666.cloneNode(true);
G__64347.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64667),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64347;
})();
(node_64666.shadow$old = true);

(new_link_64668.onload = ((function (seq__64286_64603,chunk__64290_64604,count__64291_64605,i__64292_64606,seq__64106,chunk__64108,count__64109,i__64110,new_link_64668,path_match_64667,node_64666,seq__64286_64660__$1,temp__5804__auto___64659,path,map__64105,map__64105__$1,msg,updates,reload_info){
return (function (e){
var seq__64348_64669 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__64350_64670 = null;
var count__64351_64671 = (0);
var i__64352_64672 = (0);
while(true){
if((i__64352_64672 < count__64351_64671)){
var map__64358_64673 = chunk__64350_64670.cljs$core$IIndexed$_nth$arity$2(null,i__64352_64672);
var map__64358_64674__$1 = cljs.core.__destructure_map(map__64358_64673);
var task_64675 = map__64358_64674__$1;
var fn_str_64676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64358_64674__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64358_64674__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64678 = goog.getObjectByName(fn_str_64676,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64677)].join(''));

(fn_obj_64678.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64678.cljs$core$IFn$_invoke$arity$2(path,new_link_64668) : fn_obj_64678.call(null,path,new_link_64668));


var G__64679 = seq__64348_64669;
var G__64680 = chunk__64350_64670;
var G__64681 = count__64351_64671;
var G__64682 = (i__64352_64672 + (1));
seq__64348_64669 = G__64679;
chunk__64350_64670 = G__64680;
count__64351_64671 = G__64681;
i__64352_64672 = G__64682;
continue;
} else {
var temp__5804__auto___64683__$1 = cljs.core.seq(seq__64348_64669);
if(temp__5804__auto___64683__$1){
var seq__64348_64684__$1 = temp__5804__auto___64683__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64348_64684__$1)){
var c__5565__auto___64685 = cljs.core.chunk_first(seq__64348_64684__$1);
var G__64686 = cljs.core.chunk_rest(seq__64348_64684__$1);
var G__64687 = c__5565__auto___64685;
var G__64688 = cljs.core.count(c__5565__auto___64685);
var G__64689 = (0);
seq__64348_64669 = G__64686;
chunk__64350_64670 = G__64687;
count__64351_64671 = G__64688;
i__64352_64672 = G__64689;
continue;
} else {
var map__64361_64691 = cljs.core.first(seq__64348_64684__$1);
var map__64361_64692__$1 = cljs.core.__destructure_map(map__64361_64691);
var task_64693 = map__64361_64692__$1;
var fn_str_64694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64361_64692__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64361_64692__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64697 = goog.getObjectByName(fn_str_64694,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64695)].join(''));

(fn_obj_64697.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64697.cljs$core$IFn$_invoke$arity$2(path,new_link_64668) : fn_obj_64697.call(null,path,new_link_64668));


var G__64698 = cljs.core.next(seq__64348_64684__$1);
var G__64699 = null;
var G__64700 = (0);
var G__64701 = (0);
seq__64348_64669 = G__64698;
chunk__64350_64670 = G__64699;
count__64351_64671 = G__64700;
i__64352_64672 = G__64701;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_64666);
});})(seq__64286_64603,chunk__64290_64604,count__64291_64605,i__64292_64606,seq__64106,chunk__64108,count__64109,i__64110,new_link_64668,path_match_64667,node_64666,seq__64286_64660__$1,temp__5804__auto___64659,path,map__64105,map__64105__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64667], 0));

goog.dom.insertSiblingAfter(new_link_64668,node_64666);


var G__64703 = cljs.core.next(seq__64286_64660__$1);
var G__64704 = null;
var G__64705 = (0);
var G__64706 = (0);
seq__64286_64603 = G__64703;
chunk__64290_64604 = G__64704;
count__64291_64605 = G__64705;
i__64292_64606 = G__64706;
continue;
} else {
var G__64707 = cljs.core.next(seq__64286_64660__$1);
var G__64708 = null;
var G__64709 = (0);
var G__64710 = (0);
seq__64286_64603 = G__64707;
chunk__64290_64604 = G__64708;
count__64291_64605 = G__64709;
i__64292_64606 = G__64710;
continue;
}
} else {
var G__64712 = cljs.core.next(seq__64286_64660__$1);
var G__64713 = null;
var G__64714 = (0);
var G__64715 = (0);
seq__64286_64603 = G__64712;
chunk__64290_64604 = G__64713;
count__64291_64605 = G__64714;
i__64292_64606 = G__64715;
continue;
}
}
} else {
}
}
break;
}


var G__64716 = seq__64106;
var G__64717 = chunk__64108;
var G__64718 = count__64109;
var G__64719 = (i__64110 + (1));
seq__64106 = G__64716;
chunk__64108 = G__64717;
count__64109 = G__64718;
i__64110 = G__64719;
continue;
} else {
var G__64721 = seq__64106;
var G__64722 = chunk__64108;
var G__64723 = count__64109;
var G__64724 = (i__64110 + (1));
seq__64106 = G__64721;
chunk__64108 = G__64722;
count__64109 = G__64723;
i__64110 = G__64724;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__64106);
if(temp__5804__auto__){
var seq__64106__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64106__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__64106__$1);
var G__64725 = cljs.core.chunk_rest(seq__64106__$1);
var G__64726 = c__5565__auto__;
var G__64727 = cljs.core.count(c__5565__auto__);
var G__64728 = (0);
seq__64106 = G__64725;
chunk__64108 = G__64726;
count__64109 = G__64727;
i__64110 = G__64728;
continue;
} else {
var path = cljs.core.first(seq__64106__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__64365_64730 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__64369_64731 = null;
var count__64370_64732 = (0);
var i__64371_64733 = (0);
while(true){
if((i__64371_64733 < count__64370_64732)){
var node_64734 = chunk__64369_64731.cljs$core$IIndexed$_nth$arity$2(null,i__64371_64733);
if(cljs.core.not(node_64734.shadow$old)){
var path_match_64735 = shadow.cljs.devtools.client.browser.match_paths(node_64734.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64735)){
var new_link_64736 = (function (){var G__64406 = node_64734.cloneNode(true);
G__64406.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64735),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64406;
})();
(node_64734.shadow$old = true);

(new_link_64736.onload = ((function (seq__64365_64730,chunk__64369_64731,count__64370_64732,i__64371_64733,seq__64106,chunk__64108,count__64109,i__64110,new_link_64736,path_match_64735,node_64734,path,seq__64106__$1,temp__5804__auto__,map__64105,map__64105__$1,msg,updates,reload_info){
return (function (e){
var seq__64407_64737 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__64409_64738 = null;
var count__64410_64739 = (0);
var i__64411_64740 = (0);
while(true){
if((i__64411_64740 < count__64410_64739)){
var map__64419_64741 = chunk__64409_64738.cljs$core$IIndexed$_nth$arity$2(null,i__64411_64740);
var map__64419_64742__$1 = cljs.core.__destructure_map(map__64419_64741);
var task_64743 = map__64419_64742__$1;
var fn_str_64744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64419_64742__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64419_64742__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64746 = goog.getObjectByName(fn_str_64744,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64745)].join(''));

(fn_obj_64746.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64746.cljs$core$IFn$_invoke$arity$2(path,new_link_64736) : fn_obj_64746.call(null,path,new_link_64736));


var G__64747 = seq__64407_64737;
var G__64748 = chunk__64409_64738;
var G__64749 = count__64410_64739;
var G__64750 = (i__64411_64740 + (1));
seq__64407_64737 = G__64747;
chunk__64409_64738 = G__64748;
count__64410_64739 = G__64749;
i__64411_64740 = G__64750;
continue;
} else {
var temp__5804__auto___64751__$1 = cljs.core.seq(seq__64407_64737);
if(temp__5804__auto___64751__$1){
var seq__64407_64752__$1 = temp__5804__auto___64751__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64407_64752__$1)){
var c__5565__auto___64753 = cljs.core.chunk_first(seq__64407_64752__$1);
var G__64754 = cljs.core.chunk_rest(seq__64407_64752__$1);
var G__64755 = c__5565__auto___64753;
var G__64756 = cljs.core.count(c__5565__auto___64753);
var G__64757 = (0);
seq__64407_64737 = G__64754;
chunk__64409_64738 = G__64755;
count__64410_64739 = G__64756;
i__64411_64740 = G__64757;
continue;
} else {
var map__64421_64758 = cljs.core.first(seq__64407_64752__$1);
var map__64421_64759__$1 = cljs.core.__destructure_map(map__64421_64758);
var task_64760 = map__64421_64759__$1;
var fn_str_64761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64421_64759__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64421_64759__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64763 = goog.getObjectByName(fn_str_64761,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64762)].join(''));

(fn_obj_64763.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64763.cljs$core$IFn$_invoke$arity$2(path,new_link_64736) : fn_obj_64763.call(null,path,new_link_64736));


var G__64764 = cljs.core.next(seq__64407_64752__$1);
var G__64765 = null;
var G__64766 = (0);
var G__64767 = (0);
seq__64407_64737 = G__64764;
chunk__64409_64738 = G__64765;
count__64410_64739 = G__64766;
i__64411_64740 = G__64767;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_64734);
});})(seq__64365_64730,chunk__64369_64731,count__64370_64732,i__64371_64733,seq__64106,chunk__64108,count__64109,i__64110,new_link_64736,path_match_64735,node_64734,path,seq__64106__$1,temp__5804__auto__,map__64105,map__64105__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64735], 0));

goog.dom.insertSiblingAfter(new_link_64736,node_64734);


var G__64768 = seq__64365_64730;
var G__64769 = chunk__64369_64731;
var G__64770 = count__64370_64732;
var G__64771 = (i__64371_64733 + (1));
seq__64365_64730 = G__64768;
chunk__64369_64731 = G__64769;
count__64370_64732 = G__64770;
i__64371_64733 = G__64771;
continue;
} else {
var G__64772 = seq__64365_64730;
var G__64773 = chunk__64369_64731;
var G__64774 = count__64370_64732;
var G__64775 = (i__64371_64733 + (1));
seq__64365_64730 = G__64772;
chunk__64369_64731 = G__64773;
count__64370_64732 = G__64774;
i__64371_64733 = G__64775;
continue;
}
} else {
var G__64776 = seq__64365_64730;
var G__64777 = chunk__64369_64731;
var G__64778 = count__64370_64732;
var G__64779 = (i__64371_64733 + (1));
seq__64365_64730 = G__64776;
chunk__64369_64731 = G__64777;
count__64370_64732 = G__64778;
i__64371_64733 = G__64779;
continue;
}
} else {
var temp__5804__auto___64780__$1 = cljs.core.seq(seq__64365_64730);
if(temp__5804__auto___64780__$1){
var seq__64365_64781__$1 = temp__5804__auto___64780__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64365_64781__$1)){
var c__5565__auto___64782 = cljs.core.chunk_first(seq__64365_64781__$1);
var G__64783 = cljs.core.chunk_rest(seq__64365_64781__$1);
var G__64784 = c__5565__auto___64782;
var G__64785 = cljs.core.count(c__5565__auto___64782);
var G__64786 = (0);
seq__64365_64730 = G__64783;
chunk__64369_64731 = G__64784;
count__64370_64732 = G__64785;
i__64371_64733 = G__64786;
continue;
} else {
var node_64787 = cljs.core.first(seq__64365_64781__$1);
if(cljs.core.not(node_64787.shadow$old)){
var path_match_64788 = shadow.cljs.devtools.client.browser.match_paths(node_64787.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64788)){
var new_link_64789 = (function (){var G__64424 = node_64787.cloneNode(true);
G__64424.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64788),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64424;
})();
(node_64787.shadow$old = true);

(new_link_64789.onload = ((function (seq__64365_64730,chunk__64369_64731,count__64370_64732,i__64371_64733,seq__64106,chunk__64108,count__64109,i__64110,new_link_64789,path_match_64788,node_64787,seq__64365_64781__$1,temp__5804__auto___64780__$1,path,seq__64106__$1,temp__5804__auto__,map__64105,map__64105__$1,msg,updates,reload_info){
return (function (e){
var seq__64426_64792 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__64428_64793 = null;
var count__64429_64794 = (0);
var i__64430_64795 = (0);
while(true){
if((i__64430_64795 < count__64429_64794)){
var map__64436_64796 = chunk__64428_64793.cljs$core$IIndexed$_nth$arity$2(null,i__64430_64795);
var map__64436_64797__$1 = cljs.core.__destructure_map(map__64436_64796);
var task_64798 = map__64436_64797__$1;
var fn_str_64799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64436_64797__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64436_64797__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64802 = goog.getObjectByName(fn_str_64799,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64800)].join(''));

(fn_obj_64802.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64802.cljs$core$IFn$_invoke$arity$2(path,new_link_64789) : fn_obj_64802.call(null,path,new_link_64789));


var G__64804 = seq__64426_64792;
var G__64805 = chunk__64428_64793;
var G__64806 = count__64429_64794;
var G__64807 = (i__64430_64795 + (1));
seq__64426_64792 = G__64804;
chunk__64428_64793 = G__64805;
count__64429_64794 = G__64806;
i__64430_64795 = G__64807;
continue;
} else {
var temp__5804__auto___64808__$2 = cljs.core.seq(seq__64426_64792);
if(temp__5804__auto___64808__$2){
var seq__64426_64809__$1 = temp__5804__auto___64808__$2;
if(cljs.core.chunked_seq_QMARK_(seq__64426_64809__$1)){
var c__5565__auto___64810 = cljs.core.chunk_first(seq__64426_64809__$1);
var G__64811 = cljs.core.chunk_rest(seq__64426_64809__$1);
var G__64812 = c__5565__auto___64810;
var G__64813 = cljs.core.count(c__5565__auto___64810);
var G__64814 = (0);
seq__64426_64792 = G__64811;
chunk__64428_64793 = G__64812;
count__64429_64794 = G__64813;
i__64430_64795 = G__64814;
continue;
} else {
var map__64438_64816 = cljs.core.first(seq__64426_64809__$1);
var map__64438_64817__$1 = cljs.core.__destructure_map(map__64438_64816);
var task_64818 = map__64438_64817__$1;
var fn_str_64819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64438_64817__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64438_64817__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64822 = goog.getObjectByName(fn_str_64819,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64820)].join(''));

(fn_obj_64822.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64822.cljs$core$IFn$_invoke$arity$2(path,new_link_64789) : fn_obj_64822.call(null,path,new_link_64789));


var G__64824 = cljs.core.next(seq__64426_64809__$1);
var G__64825 = null;
var G__64826 = (0);
var G__64827 = (0);
seq__64426_64792 = G__64824;
chunk__64428_64793 = G__64825;
count__64429_64794 = G__64826;
i__64430_64795 = G__64827;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_64787);
});})(seq__64365_64730,chunk__64369_64731,count__64370_64732,i__64371_64733,seq__64106,chunk__64108,count__64109,i__64110,new_link_64789,path_match_64788,node_64787,seq__64365_64781__$1,temp__5804__auto___64780__$1,path,seq__64106__$1,temp__5804__auto__,map__64105,map__64105__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64788], 0));

goog.dom.insertSiblingAfter(new_link_64789,node_64787);


var G__64829 = cljs.core.next(seq__64365_64781__$1);
var G__64830 = null;
var G__64831 = (0);
var G__64832 = (0);
seq__64365_64730 = G__64829;
chunk__64369_64731 = G__64830;
count__64370_64732 = G__64831;
i__64371_64733 = G__64832;
continue;
} else {
var G__64833 = cljs.core.next(seq__64365_64781__$1);
var G__64834 = null;
var G__64835 = (0);
var G__64836 = (0);
seq__64365_64730 = G__64833;
chunk__64369_64731 = G__64834;
count__64370_64732 = G__64835;
i__64371_64733 = G__64836;
continue;
}
} else {
var G__64837 = cljs.core.next(seq__64365_64781__$1);
var G__64838 = null;
var G__64839 = (0);
var G__64840 = (0);
seq__64365_64730 = G__64837;
chunk__64369_64731 = G__64838;
count__64370_64732 = G__64839;
i__64371_64733 = G__64840;
continue;
}
}
} else {
}
}
break;
}


var G__64841 = cljs.core.next(seq__64106__$1);
var G__64842 = null;
var G__64843 = (0);
var G__64844 = (0);
seq__64106 = G__64841;
chunk__64108 = G__64842;
count__64109 = G__64843;
i__64110 = G__64844;
continue;
} else {
var G__64845 = cljs.core.next(seq__64106__$1);
var G__64846 = null;
var G__64847 = (0);
var G__64848 = (0);
seq__64106 = G__64845;
chunk__64108 = G__64846;
count__64109 = G__64847;
i__64110 = G__64848;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__64443){
var map__64444 = p__64443;
var map__64444__$1 = cljs.core.__destructure_map(map__64444);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64444__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__64466){
var map__64467 = p__64466;
var map__64467__$1 = cljs.core.__destructure_map(map__64467);
var _ = map__64467__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64467__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__64468,done,error){
var map__64469 = p__64468;
var map__64469__$1 = cljs.core.__destructure_map(map__64469);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64469__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__64470,done,error){
var map__64471 = p__64470;
var map__64471__$1 = cljs.core.__destructure_map(map__64471);
var msg = map__64471__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64471__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64471__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64471__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__64472){
var map__64473 = p__64472;
var map__64473__$1 = cljs.core.__destructure_map(map__64473);
var src = map__64473__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64473__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__64476 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__64476) : done.call(null,G__64476));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__64482){
var map__64483 = p__64482;
var map__64483__$1 = cljs.core.__destructure_map(map__64483);
var msg__$1 = map__64483__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64483__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e64484){var ex = e64484;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__64488){
var map__64489 = p__64488;
var map__64489__$1 = cljs.core.__destructure_map(map__64489);
var env = map__64489__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64489__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__64500){
var map__64501 = p__64500;
var map__64501__$1 = cljs.core.__destructure_map(map__64501);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64501__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64501__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__64504){
var map__64506 = p__64504;
var map__64506__$1 = cljs.core.__destructure_map(map__64506);
var svc = map__64506__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64506__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
