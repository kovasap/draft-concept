goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___64266 = arguments.length;
var i__5767__auto___64267 = (0);
while(true){
if((i__5767__auto___64267 < len__5766__auto___64266)){
args__5772__auto__.push((arguments[i__5767__auto___64267]));

var G__64268 = (i__5767__auto___64267 + (1));
i__5767__auto___64267 = G__64268;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq63580){
var G__63581 = cljs.core.first(seq63580);
var seq63580__$1 = cljs.core.next(seq63580);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63581,seq63580__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__63589 = cljs.core.seq(sources);
var chunk__63590 = null;
var count__63591 = (0);
var i__63592 = (0);
while(true){
if((i__63592 < count__63591)){
var map__63617 = chunk__63590.cljs$core$IIndexed$_nth$arity$2(null,i__63592);
var map__63617__$1 = cljs.core.__destructure_map(map__63617);
var src = map__63617__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63617__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63617__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63617__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63617__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e63623){var e_64275 = e63623;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_64275);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_64275.message)].join('')));
}

var G__64276 = seq__63589;
var G__64277 = chunk__63590;
var G__64278 = count__63591;
var G__64279 = (i__63592 + (1));
seq__63589 = G__64276;
chunk__63590 = G__64277;
count__63591 = G__64278;
i__63592 = G__64279;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__63589);
if(temp__5804__auto__){
var seq__63589__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63589__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__63589__$1);
var G__64280 = cljs.core.chunk_rest(seq__63589__$1);
var G__64281 = c__5565__auto__;
var G__64282 = cljs.core.count(c__5565__auto__);
var G__64283 = (0);
seq__63589 = G__64280;
chunk__63590 = G__64281;
count__63591 = G__64282;
i__63592 = G__64283;
continue;
} else {
var map__63628 = cljs.core.first(seq__63589__$1);
var map__63628__$1 = cljs.core.__destructure_map(map__63628);
var src = map__63628__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63628__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63628__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63628__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63628__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e63635){var e_64284 = e63635;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_64284);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_64284.message)].join('')));
}

var G__64285 = cljs.core.next(seq__63589__$1);
var G__64286 = null;
var G__64287 = (0);
var G__64288 = (0);
seq__63589 = G__64285;
chunk__63590 = G__64286;
count__63591 = G__64287;
i__63592 = G__64288;
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
var seq__63645 = cljs.core.seq(js_requires);
var chunk__63646 = null;
var count__63647 = (0);
var i__63648 = (0);
while(true){
if((i__63648 < count__63647)){
var js_ns = chunk__63646.cljs$core$IIndexed$_nth$arity$2(null,i__63648);
var require_str_64289 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_64289);


var G__64290 = seq__63645;
var G__64291 = chunk__63646;
var G__64292 = count__63647;
var G__64293 = (i__63648 + (1));
seq__63645 = G__64290;
chunk__63646 = G__64291;
count__63647 = G__64292;
i__63648 = G__64293;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__63645);
if(temp__5804__auto__){
var seq__63645__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63645__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__63645__$1);
var G__64294 = cljs.core.chunk_rest(seq__63645__$1);
var G__64295 = c__5565__auto__;
var G__64296 = cljs.core.count(c__5565__auto__);
var G__64297 = (0);
seq__63645 = G__64294;
chunk__63646 = G__64295;
count__63647 = G__64296;
i__63648 = G__64297;
continue;
} else {
var js_ns = cljs.core.first(seq__63645__$1);
var require_str_64298 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_64298);


var G__64301 = cljs.core.next(seq__63645__$1);
var G__64302 = null;
var G__64303 = (0);
var G__64304 = (0);
seq__63645 = G__64301;
chunk__63646 = G__64302;
count__63647 = G__64303;
i__63648 = G__64304;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__63651){
var map__63652 = p__63651;
var map__63652__$1 = cljs.core.__destructure_map(map__63652);
var msg = map__63652__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63652__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63652__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63653(s__63654){
return (new cljs.core.LazySeq(null,(function (){
var s__63654__$1 = s__63654;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__63654__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__63659 = cljs.core.first(xs__6360__auto__);
var map__63659__$1 = cljs.core.__destructure_map(map__63659);
var src = map__63659__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63659__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63659__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__63654__$1,map__63659,map__63659__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__63652,map__63652__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63653_$_iter__63655(s__63656){
return (new cljs.core.LazySeq(null,((function (s__63654__$1,map__63659,map__63659__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__63652,map__63652__$1,msg,info,reload_info){
return (function (){
var s__63656__$1 = s__63656;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__63656__$1);
if(temp__5804__auto____$1){
var s__63656__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63656__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__63656__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__63658 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__63657 = (0);
while(true){
if((i__63657 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__63657);
cljs.core.chunk_append(b__63658,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__64309 = (i__63657 + (1));
i__63657 = G__64309;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63658),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63653_$_iter__63655(cljs.core.chunk_rest(s__63656__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63658),null);
}
} else {
var warning = cljs.core.first(s__63656__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63653_$_iter__63655(cljs.core.rest(s__63656__$2)));
}
} else {
return null;
}
break;
}
});})(s__63654__$1,map__63659,map__63659__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__63652,map__63652__$1,msg,info,reload_info))
,null,null));
});})(s__63654__$1,map__63659,map__63659__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__63652,map__63652__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63653(cljs.core.rest(s__63654__$1)));
} else {
var G__64311 = cljs.core.rest(s__63654__$1);
s__63654__$1 = G__64311;
continue;
}
} else {
var G__64313 = cljs.core.rest(s__63654__$1);
s__63654__$1 = G__64313;
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
var seq__63667_64314 = cljs.core.seq(warnings);
var chunk__63668_64315 = null;
var count__63669_64316 = (0);
var i__63670_64317 = (0);
while(true){
if((i__63670_64317 < count__63669_64316)){
var map__63675_64318 = chunk__63668_64315.cljs$core$IIndexed$_nth$arity$2(null,i__63670_64317);
var map__63675_64319__$1 = cljs.core.__destructure_map(map__63675_64318);
var w_64320 = map__63675_64319__$1;
var msg_64321__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63675_64319__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_64322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63675_64319__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_64323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63675_64319__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_64324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63675_64319__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_64324)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_64322),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_64323),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_64321__$1)].join(''));


var G__64325 = seq__63667_64314;
var G__64326 = chunk__63668_64315;
var G__64327 = count__63669_64316;
var G__64328 = (i__63670_64317 + (1));
seq__63667_64314 = G__64325;
chunk__63668_64315 = G__64326;
count__63669_64316 = G__64327;
i__63670_64317 = G__64328;
continue;
} else {
var temp__5804__auto___64329 = cljs.core.seq(seq__63667_64314);
if(temp__5804__auto___64329){
var seq__63667_64330__$1 = temp__5804__auto___64329;
if(cljs.core.chunked_seq_QMARK_(seq__63667_64330__$1)){
var c__5565__auto___64331 = cljs.core.chunk_first(seq__63667_64330__$1);
var G__64332 = cljs.core.chunk_rest(seq__63667_64330__$1);
var G__64333 = c__5565__auto___64331;
var G__64334 = cljs.core.count(c__5565__auto___64331);
var G__64335 = (0);
seq__63667_64314 = G__64332;
chunk__63668_64315 = G__64333;
count__63669_64316 = G__64334;
i__63670_64317 = G__64335;
continue;
} else {
var map__63676_64336 = cljs.core.first(seq__63667_64330__$1);
var map__63676_64337__$1 = cljs.core.__destructure_map(map__63676_64336);
var w_64338 = map__63676_64337__$1;
var msg_64339__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63676_64337__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_64340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63676_64337__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_64341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63676_64337__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_64342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63676_64337__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_64342)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_64340),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_64341),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_64339__$1)].join(''));


var G__64343 = cljs.core.next(seq__63667_64330__$1);
var G__64344 = null;
var G__64345 = (0);
var G__64346 = (0);
seq__63667_64314 = G__64343;
chunk__63668_64315 = G__64344;
count__63669_64316 = G__64345;
i__63670_64317 = G__64346;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__63650_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__63650_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__63682){
var map__63683 = p__63682;
var map__63683__$1 = cljs.core.__destructure_map(map__63683);
var msg = map__63683__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63683__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63683__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__63684 = cljs.core.seq(updates);
var chunk__63689 = null;
var count__63690 = (0);
var i__63691 = (0);
while(true){
if((i__63691 < count__63690)){
var path = chunk__63689.cljs$core$IIndexed$_nth$arity$2(null,i__63691);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__63948_64351 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__63952_64352 = null;
var count__63953_64353 = (0);
var i__63954_64354 = (0);
while(true){
if((i__63954_64354 < count__63953_64353)){
var node_64355 = chunk__63952_64352.cljs$core$IIndexed$_nth$arity$2(null,i__63954_64354);
if(cljs.core.not(node_64355.shadow$old)){
var path_match_64356 = shadow.cljs.devtools.client.browser.match_paths(node_64355.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64356)){
var new_link_64357 = (function (){var G__64005 = node_64355.cloneNode(true);
G__64005.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64356),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64005;
})();
(node_64355.shadow$old = true);

(new_link_64357.onload = ((function (seq__63948_64351,chunk__63952_64352,count__63953_64353,i__63954_64354,seq__63684,chunk__63689,count__63690,i__63691,new_link_64357,path_match_64356,node_64355,path,map__63683,map__63683__$1,msg,updates,reload_info){
return (function (e){
var seq__64006_64358 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__64008_64359 = null;
var count__64009_64360 = (0);
var i__64010_64361 = (0);
while(true){
if((i__64010_64361 < count__64009_64360)){
var map__64025_64366 = chunk__64008_64359.cljs$core$IIndexed$_nth$arity$2(null,i__64010_64361);
var map__64025_64367__$1 = cljs.core.__destructure_map(map__64025_64366);
var task_64368 = map__64025_64367__$1;
var fn_str_64369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64025_64367__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64025_64367__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64372 = goog.getObjectByName(fn_str_64369,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64370)].join(''));

(fn_obj_64372.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64372.cljs$core$IFn$_invoke$arity$2(path,new_link_64357) : fn_obj_64372.call(null,path,new_link_64357));


var G__64375 = seq__64006_64358;
var G__64376 = chunk__64008_64359;
var G__64377 = count__64009_64360;
var G__64378 = (i__64010_64361 + (1));
seq__64006_64358 = G__64375;
chunk__64008_64359 = G__64376;
count__64009_64360 = G__64377;
i__64010_64361 = G__64378;
continue;
} else {
var temp__5804__auto___64379 = cljs.core.seq(seq__64006_64358);
if(temp__5804__auto___64379){
var seq__64006_64380__$1 = temp__5804__auto___64379;
if(cljs.core.chunked_seq_QMARK_(seq__64006_64380__$1)){
var c__5565__auto___64381 = cljs.core.chunk_first(seq__64006_64380__$1);
var G__64382 = cljs.core.chunk_rest(seq__64006_64380__$1);
var G__64383 = c__5565__auto___64381;
var G__64384 = cljs.core.count(c__5565__auto___64381);
var G__64385 = (0);
seq__64006_64358 = G__64382;
chunk__64008_64359 = G__64383;
count__64009_64360 = G__64384;
i__64010_64361 = G__64385;
continue;
} else {
var map__64031_64386 = cljs.core.first(seq__64006_64380__$1);
var map__64031_64387__$1 = cljs.core.__destructure_map(map__64031_64386);
var task_64388 = map__64031_64387__$1;
var fn_str_64389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64031_64387__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64031_64387__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64391 = goog.getObjectByName(fn_str_64389,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64390)].join(''));

(fn_obj_64391.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64391.cljs$core$IFn$_invoke$arity$2(path,new_link_64357) : fn_obj_64391.call(null,path,new_link_64357));


var G__64392 = cljs.core.next(seq__64006_64380__$1);
var G__64393 = null;
var G__64394 = (0);
var G__64395 = (0);
seq__64006_64358 = G__64392;
chunk__64008_64359 = G__64393;
count__64009_64360 = G__64394;
i__64010_64361 = G__64395;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_64355);
});})(seq__63948_64351,chunk__63952_64352,count__63953_64353,i__63954_64354,seq__63684,chunk__63689,count__63690,i__63691,new_link_64357,path_match_64356,node_64355,path,map__63683,map__63683__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64356], 0));

goog.dom.insertSiblingAfter(new_link_64357,node_64355);


var G__64396 = seq__63948_64351;
var G__64397 = chunk__63952_64352;
var G__64398 = count__63953_64353;
var G__64399 = (i__63954_64354 + (1));
seq__63948_64351 = G__64396;
chunk__63952_64352 = G__64397;
count__63953_64353 = G__64398;
i__63954_64354 = G__64399;
continue;
} else {
var G__64400 = seq__63948_64351;
var G__64401 = chunk__63952_64352;
var G__64402 = count__63953_64353;
var G__64403 = (i__63954_64354 + (1));
seq__63948_64351 = G__64400;
chunk__63952_64352 = G__64401;
count__63953_64353 = G__64402;
i__63954_64354 = G__64403;
continue;
}
} else {
var G__64405 = seq__63948_64351;
var G__64406 = chunk__63952_64352;
var G__64407 = count__63953_64353;
var G__64408 = (i__63954_64354 + (1));
seq__63948_64351 = G__64405;
chunk__63952_64352 = G__64406;
count__63953_64353 = G__64407;
i__63954_64354 = G__64408;
continue;
}
} else {
var temp__5804__auto___64410 = cljs.core.seq(seq__63948_64351);
if(temp__5804__auto___64410){
var seq__63948_64411__$1 = temp__5804__auto___64410;
if(cljs.core.chunked_seq_QMARK_(seq__63948_64411__$1)){
var c__5565__auto___64412 = cljs.core.chunk_first(seq__63948_64411__$1);
var G__64413 = cljs.core.chunk_rest(seq__63948_64411__$1);
var G__64414 = c__5565__auto___64412;
var G__64415 = cljs.core.count(c__5565__auto___64412);
var G__64416 = (0);
seq__63948_64351 = G__64413;
chunk__63952_64352 = G__64414;
count__63953_64353 = G__64415;
i__63954_64354 = G__64416;
continue;
} else {
var node_64417 = cljs.core.first(seq__63948_64411__$1);
if(cljs.core.not(node_64417.shadow$old)){
var path_match_64418 = shadow.cljs.devtools.client.browser.match_paths(node_64417.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64418)){
var new_link_64419 = (function (){var G__64033 = node_64417.cloneNode(true);
G__64033.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64418),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64033;
})();
(node_64417.shadow$old = true);

(new_link_64419.onload = ((function (seq__63948_64351,chunk__63952_64352,count__63953_64353,i__63954_64354,seq__63684,chunk__63689,count__63690,i__63691,new_link_64419,path_match_64418,node_64417,seq__63948_64411__$1,temp__5804__auto___64410,path,map__63683,map__63683__$1,msg,updates,reload_info){
return (function (e){
var seq__64034_64422 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__64036_64423 = null;
var count__64037_64424 = (0);
var i__64038_64425 = (0);
while(true){
if((i__64038_64425 < count__64037_64424)){
var map__64043_64426 = chunk__64036_64423.cljs$core$IIndexed$_nth$arity$2(null,i__64038_64425);
var map__64043_64427__$1 = cljs.core.__destructure_map(map__64043_64426);
var task_64428 = map__64043_64427__$1;
var fn_str_64429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64043_64427__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64043_64427__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64431 = goog.getObjectByName(fn_str_64429,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64430)].join(''));

(fn_obj_64431.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64431.cljs$core$IFn$_invoke$arity$2(path,new_link_64419) : fn_obj_64431.call(null,path,new_link_64419));


var G__64432 = seq__64034_64422;
var G__64433 = chunk__64036_64423;
var G__64434 = count__64037_64424;
var G__64435 = (i__64038_64425 + (1));
seq__64034_64422 = G__64432;
chunk__64036_64423 = G__64433;
count__64037_64424 = G__64434;
i__64038_64425 = G__64435;
continue;
} else {
var temp__5804__auto___64436__$1 = cljs.core.seq(seq__64034_64422);
if(temp__5804__auto___64436__$1){
var seq__64034_64437__$1 = temp__5804__auto___64436__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64034_64437__$1)){
var c__5565__auto___64438 = cljs.core.chunk_first(seq__64034_64437__$1);
var G__64440 = cljs.core.chunk_rest(seq__64034_64437__$1);
var G__64441 = c__5565__auto___64438;
var G__64442 = cljs.core.count(c__5565__auto___64438);
var G__64443 = (0);
seq__64034_64422 = G__64440;
chunk__64036_64423 = G__64441;
count__64037_64424 = G__64442;
i__64038_64425 = G__64443;
continue;
} else {
var map__64044_64444 = cljs.core.first(seq__64034_64437__$1);
var map__64044_64445__$1 = cljs.core.__destructure_map(map__64044_64444);
var task_64446 = map__64044_64445__$1;
var fn_str_64447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64044_64445__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64044_64445__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64449 = goog.getObjectByName(fn_str_64447,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64448)].join(''));

(fn_obj_64449.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64449.cljs$core$IFn$_invoke$arity$2(path,new_link_64419) : fn_obj_64449.call(null,path,new_link_64419));


var G__64451 = cljs.core.next(seq__64034_64437__$1);
var G__64452 = null;
var G__64453 = (0);
var G__64454 = (0);
seq__64034_64422 = G__64451;
chunk__64036_64423 = G__64452;
count__64037_64424 = G__64453;
i__64038_64425 = G__64454;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_64417);
});})(seq__63948_64351,chunk__63952_64352,count__63953_64353,i__63954_64354,seq__63684,chunk__63689,count__63690,i__63691,new_link_64419,path_match_64418,node_64417,seq__63948_64411__$1,temp__5804__auto___64410,path,map__63683,map__63683__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64418], 0));

goog.dom.insertSiblingAfter(new_link_64419,node_64417);


var G__64457 = cljs.core.next(seq__63948_64411__$1);
var G__64458 = null;
var G__64459 = (0);
var G__64460 = (0);
seq__63948_64351 = G__64457;
chunk__63952_64352 = G__64458;
count__63953_64353 = G__64459;
i__63954_64354 = G__64460;
continue;
} else {
var G__64462 = cljs.core.next(seq__63948_64411__$1);
var G__64463 = null;
var G__64464 = (0);
var G__64465 = (0);
seq__63948_64351 = G__64462;
chunk__63952_64352 = G__64463;
count__63953_64353 = G__64464;
i__63954_64354 = G__64465;
continue;
}
} else {
var G__64466 = cljs.core.next(seq__63948_64411__$1);
var G__64467 = null;
var G__64468 = (0);
var G__64469 = (0);
seq__63948_64351 = G__64466;
chunk__63952_64352 = G__64467;
count__63953_64353 = G__64468;
i__63954_64354 = G__64469;
continue;
}
}
} else {
}
}
break;
}


var G__64471 = seq__63684;
var G__64472 = chunk__63689;
var G__64473 = count__63690;
var G__64474 = (i__63691 + (1));
seq__63684 = G__64471;
chunk__63689 = G__64472;
count__63690 = G__64473;
i__63691 = G__64474;
continue;
} else {
var G__64475 = seq__63684;
var G__64476 = chunk__63689;
var G__64477 = count__63690;
var G__64478 = (i__63691 + (1));
seq__63684 = G__64475;
chunk__63689 = G__64476;
count__63690 = G__64477;
i__63691 = G__64478;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__63684);
if(temp__5804__auto__){
var seq__63684__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63684__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__63684__$1);
var G__64481 = cljs.core.chunk_rest(seq__63684__$1);
var G__64482 = c__5565__auto__;
var G__64483 = cljs.core.count(c__5565__auto__);
var G__64484 = (0);
seq__63684 = G__64481;
chunk__63689 = G__64482;
count__63690 = G__64483;
i__63691 = G__64484;
continue;
} else {
var path = cljs.core.first(seq__63684__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__64053_64486 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__64057_64487 = null;
var count__64058_64488 = (0);
var i__64059_64489 = (0);
while(true){
if((i__64059_64489 < count__64058_64488)){
var node_64490 = chunk__64057_64487.cljs$core$IIndexed$_nth$arity$2(null,i__64059_64489);
if(cljs.core.not(node_64490.shadow$old)){
var path_match_64491 = shadow.cljs.devtools.client.browser.match_paths(node_64490.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64491)){
var new_link_64493 = (function (){var G__64155 = node_64490.cloneNode(true);
G__64155.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64491),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64155;
})();
(node_64490.shadow$old = true);

(new_link_64493.onload = ((function (seq__64053_64486,chunk__64057_64487,count__64058_64488,i__64059_64489,seq__63684,chunk__63689,count__63690,i__63691,new_link_64493,path_match_64491,node_64490,path,seq__63684__$1,temp__5804__auto__,map__63683,map__63683__$1,msg,updates,reload_info){
return (function (e){
var seq__64156_64496 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__64158_64498 = null;
var count__64159_64499 = (0);
var i__64160_64500 = (0);
while(true){
if((i__64160_64500 < count__64159_64499)){
var map__64172_64502 = chunk__64158_64498.cljs$core$IIndexed$_nth$arity$2(null,i__64160_64500);
var map__64172_64503__$1 = cljs.core.__destructure_map(map__64172_64502);
var task_64504 = map__64172_64503__$1;
var fn_str_64505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64172_64503__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64172_64503__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64507 = goog.getObjectByName(fn_str_64505,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64506)].join(''));

(fn_obj_64507.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64507.cljs$core$IFn$_invoke$arity$2(path,new_link_64493) : fn_obj_64507.call(null,path,new_link_64493));


var G__64513 = seq__64156_64496;
var G__64514 = chunk__64158_64498;
var G__64515 = count__64159_64499;
var G__64516 = (i__64160_64500 + (1));
seq__64156_64496 = G__64513;
chunk__64158_64498 = G__64514;
count__64159_64499 = G__64515;
i__64160_64500 = G__64516;
continue;
} else {
var temp__5804__auto___64517__$1 = cljs.core.seq(seq__64156_64496);
if(temp__5804__auto___64517__$1){
var seq__64156_64518__$1 = temp__5804__auto___64517__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64156_64518__$1)){
var c__5565__auto___64520 = cljs.core.chunk_first(seq__64156_64518__$1);
var G__64522 = cljs.core.chunk_rest(seq__64156_64518__$1);
var G__64523 = c__5565__auto___64520;
var G__64524 = cljs.core.count(c__5565__auto___64520);
var G__64525 = (0);
seq__64156_64496 = G__64522;
chunk__64158_64498 = G__64523;
count__64159_64499 = G__64524;
i__64160_64500 = G__64525;
continue;
} else {
var map__64182_64526 = cljs.core.first(seq__64156_64518__$1);
var map__64182_64527__$1 = cljs.core.__destructure_map(map__64182_64526);
var task_64528 = map__64182_64527__$1;
var fn_str_64529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64182_64527__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64182_64527__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64535 = goog.getObjectByName(fn_str_64529,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64530)].join(''));

(fn_obj_64535.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64535.cljs$core$IFn$_invoke$arity$2(path,new_link_64493) : fn_obj_64535.call(null,path,new_link_64493));


var G__64537 = cljs.core.next(seq__64156_64518__$1);
var G__64538 = null;
var G__64539 = (0);
var G__64540 = (0);
seq__64156_64496 = G__64537;
chunk__64158_64498 = G__64538;
count__64159_64499 = G__64539;
i__64160_64500 = G__64540;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_64490);
});})(seq__64053_64486,chunk__64057_64487,count__64058_64488,i__64059_64489,seq__63684,chunk__63689,count__63690,i__63691,new_link_64493,path_match_64491,node_64490,path,seq__63684__$1,temp__5804__auto__,map__63683,map__63683__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64491], 0));

goog.dom.insertSiblingAfter(new_link_64493,node_64490);


var G__64541 = seq__64053_64486;
var G__64542 = chunk__64057_64487;
var G__64543 = count__64058_64488;
var G__64544 = (i__64059_64489 + (1));
seq__64053_64486 = G__64541;
chunk__64057_64487 = G__64542;
count__64058_64488 = G__64543;
i__64059_64489 = G__64544;
continue;
} else {
var G__64546 = seq__64053_64486;
var G__64547 = chunk__64057_64487;
var G__64548 = count__64058_64488;
var G__64549 = (i__64059_64489 + (1));
seq__64053_64486 = G__64546;
chunk__64057_64487 = G__64547;
count__64058_64488 = G__64548;
i__64059_64489 = G__64549;
continue;
}
} else {
var G__64552 = seq__64053_64486;
var G__64553 = chunk__64057_64487;
var G__64554 = count__64058_64488;
var G__64555 = (i__64059_64489 + (1));
seq__64053_64486 = G__64552;
chunk__64057_64487 = G__64553;
count__64058_64488 = G__64554;
i__64059_64489 = G__64555;
continue;
}
} else {
var temp__5804__auto___64556__$1 = cljs.core.seq(seq__64053_64486);
if(temp__5804__auto___64556__$1){
var seq__64053_64557__$1 = temp__5804__auto___64556__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64053_64557__$1)){
var c__5565__auto___64558 = cljs.core.chunk_first(seq__64053_64557__$1);
var G__64560 = cljs.core.chunk_rest(seq__64053_64557__$1);
var G__64561 = c__5565__auto___64558;
var G__64562 = cljs.core.count(c__5565__auto___64558);
var G__64563 = (0);
seq__64053_64486 = G__64560;
chunk__64057_64487 = G__64561;
count__64058_64488 = G__64562;
i__64059_64489 = G__64563;
continue;
} else {
var node_64565 = cljs.core.first(seq__64053_64557__$1);
if(cljs.core.not(node_64565.shadow$old)){
var path_match_64567 = shadow.cljs.devtools.client.browser.match_paths(node_64565.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64567)){
var new_link_64568 = (function (){var G__64186 = node_64565.cloneNode(true);
G__64186.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64567),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64186;
})();
(node_64565.shadow$old = true);

(new_link_64568.onload = ((function (seq__64053_64486,chunk__64057_64487,count__64058_64488,i__64059_64489,seq__63684,chunk__63689,count__63690,i__63691,new_link_64568,path_match_64567,node_64565,seq__64053_64557__$1,temp__5804__auto___64556__$1,path,seq__63684__$1,temp__5804__auto__,map__63683,map__63683__$1,msg,updates,reload_info){
return (function (e){
var seq__64189_64569 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__64191_64570 = null;
var count__64192_64571 = (0);
var i__64193_64572 = (0);
while(true){
if((i__64193_64572 < count__64192_64571)){
var map__64207_64573 = chunk__64191_64570.cljs$core$IIndexed$_nth$arity$2(null,i__64193_64572);
var map__64207_64574__$1 = cljs.core.__destructure_map(map__64207_64573);
var task_64575 = map__64207_64574__$1;
var fn_str_64576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64207_64574__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64207_64574__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64578 = goog.getObjectByName(fn_str_64576,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64577)].join(''));

(fn_obj_64578.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64578.cljs$core$IFn$_invoke$arity$2(path,new_link_64568) : fn_obj_64578.call(null,path,new_link_64568));


var G__64579 = seq__64189_64569;
var G__64580 = chunk__64191_64570;
var G__64581 = count__64192_64571;
var G__64582 = (i__64193_64572 + (1));
seq__64189_64569 = G__64579;
chunk__64191_64570 = G__64580;
count__64192_64571 = G__64581;
i__64193_64572 = G__64582;
continue;
} else {
var temp__5804__auto___64583__$2 = cljs.core.seq(seq__64189_64569);
if(temp__5804__auto___64583__$2){
var seq__64189_64584__$1 = temp__5804__auto___64583__$2;
if(cljs.core.chunked_seq_QMARK_(seq__64189_64584__$1)){
var c__5565__auto___64585 = cljs.core.chunk_first(seq__64189_64584__$1);
var G__64586 = cljs.core.chunk_rest(seq__64189_64584__$1);
var G__64587 = c__5565__auto___64585;
var G__64588 = cljs.core.count(c__5565__auto___64585);
var G__64589 = (0);
seq__64189_64569 = G__64586;
chunk__64191_64570 = G__64587;
count__64192_64571 = G__64588;
i__64193_64572 = G__64589;
continue;
} else {
var map__64210_64590 = cljs.core.first(seq__64189_64584__$1);
var map__64210_64591__$1 = cljs.core.__destructure_map(map__64210_64590);
var task_64592 = map__64210_64591__$1;
var fn_str_64593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64210_64591__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64210_64591__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64595 = goog.getObjectByName(fn_str_64593,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64594)].join(''));

(fn_obj_64595.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64595.cljs$core$IFn$_invoke$arity$2(path,new_link_64568) : fn_obj_64595.call(null,path,new_link_64568));


var G__64596 = cljs.core.next(seq__64189_64584__$1);
var G__64597 = null;
var G__64598 = (0);
var G__64599 = (0);
seq__64189_64569 = G__64596;
chunk__64191_64570 = G__64597;
count__64192_64571 = G__64598;
i__64193_64572 = G__64599;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_64565);
});})(seq__64053_64486,chunk__64057_64487,count__64058_64488,i__64059_64489,seq__63684,chunk__63689,count__63690,i__63691,new_link_64568,path_match_64567,node_64565,seq__64053_64557__$1,temp__5804__auto___64556__$1,path,seq__63684__$1,temp__5804__auto__,map__63683,map__63683__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64567], 0));

goog.dom.insertSiblingAfter(new_link_64568,node_64565);


var G__64602 = cljs.core.next(seq__64053_64557__$1);
var G__64603 = null;
var G__64604 = (0);
var G__64605 = (0);
seq__64053_64486 = G__64602;
chunk__64057_64487 = G__64603;
count__64058_64488 = G__64604;
i__64059_64489 = G__64605;
continue;
} else {
var G__64606 = cljs.core.next(seq__64053_64557__$1);
var G__64607 = null;
var G__64608 = (0);
var G__64609 = (0);
seq__64053_64486 = G__64606;
chunk__64057_64487 = G__64607;
count__64058_64488 = G__64608;
i__64059_64489 = G__64609;
continue;
}
} else {
var G__64610 = cljs.core.next(seq__64053_64557__$1);
var G__64611 = null;
var G__64612 = (0);
var G__64613 = (0);
seq__64053_64486 = G__64610;
chunk__64057_64487 = G__64611;
count__64058_64488 = G__64612;
i__64059_64489 = G__64613;
continue;
}
}
} else {
}
}
break;
}


var G__64614 = cljs.core.next(seq__63684__$1);
var G__64615 = null;
var G__64616 = (0);
var G__64617 = (0);
seq__63684 = G__64614;
chunk__63689 = G__64615;
count__63690 = G__64616;
i__63691 = G__64617;
continue;
} else {
var G__64618 = cljs.core.next(seq__63684__$1);
var G__64619 = null;
var G__64620 = (0);
var G__64621 = (0);
seq__63684 = G__64618;
chunk__63689 = G__64619;
count__63690 = G__64620;
i__63691 = G__64621;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__64221){
var map__64222 = p__64221;
var map__64222__$1 = cljs.core.__destructure_map(map__64222);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64222__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__64234){
var map__64235 = p__64234;
var map__64235__$1 = cljs.core.__destructure_map(map__64235);
var _ = map__64235__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64235__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__64239,done,error){
var map__64240 = p__64239;
var map__64240__$1 = cljs.core.__destructure_map(map__64240);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64240__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__64242,done,error){
var map__64243 = p__64242;
var map__64243__$1 = cljs.core.__destructure_map(map__64243);
var msg = map__64243__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64243__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64243__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64243__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__64245){
var map__64246 = p__64245;
var map__64246__$1 = cljs.core.__destructure_map(map__64246);
var src = map__64246__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64246__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__64248 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__64248) : done.call(null,G__64248));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__64249){
var map__64250 = p__64249;
var map__64250__$1 = cljs.core.__destructure_map(map__64250);
var msg__$1 = map__64250__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64250__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e64251){var ex = e64251;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__64252){
var map__64253 = p__64252;
var map__64253__$1 = cljs.core.__destructure_map(map__64253);
var env = map__64253__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64253__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__64260){
var map__64261 = p__64260;
var map__64261__$1 = cljs.core.__destructure_map(map__64261);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64261__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64261__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__64262){
var map__64263 = p__64262;
var map__64263__$1 = cljs.core.__destructure_map(map__64263);
var svc = map__64263__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64263__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
