goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_45489 = (function (value){
var x__5390__auto__ = (((value == null))?null:value);
var m__5391__auto__ = (devtools.format._header[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5391__auto__.call(null,value));
} else {
var m__5389__auto__ = (devtools.format._header["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5389__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_45489(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_45498 = (function (value){
var x__5390__auto__ = (((value == null))?null:value);
var m__5391__auto__ = (devtools.format._has_body[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5391__auto__.call(null,value));
} else {
var m__5389__auto__ = (devtools.format._has_body["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5389__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_45498(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_45499 = (function (value){
var x__5390__auto__ = (((value == null))?null:value);
var m__5391__auto__ = (devtools.format._body[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5391__auto__.call(null,value));
} else {
var m__5389__auto__ = (devtools.format._body["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5389__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_45499(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o45358 = temp__5802__auto__;
var temp__5802__auto____$1 = (o45358["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o45359 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o45359["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o45360 = temp__5802__auto____$2;
return (o45360["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o45367 = temp__5802__auto__;
var temp__5802__auto____$1 = (o45367["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o45368 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o45368["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o45369 = temp__5802__auto____$2;
return (o45369["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o45377 = temp__5802__auto__;
var temp__5802__auto____$1 = (o45377["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o45378 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o45378["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o45379 = temp__5802__auto____$2;
return (o45379["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o45387 = temp__5802__auto__;
var temp__5802__auto____$1 = (o45387["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o45388 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o45388["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o45389 = temp__5802__auto____$2;
return (o45389["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o45391 = temp__5802__auto__;
var temp__5802__auto____$1 = (o45391["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o45392 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o45392["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o45393 = temp__5802__auto____$2;
return (o45393["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o45394 = temp__5802__auto__;
var temp__5802__auto____$1 = (o45394["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o45395 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o45395["markup"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o45396 = temp__5802__auto____$2;
return (o45396["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o45398 = temp__5802__auto__;
var temp__5802__auto____$1 = (o45398["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o45399 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o45399["markup"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o45400 = temp__5802__auto____$2;
return (o45400["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5772__auto__ = [];
var len__5766__auto___45516 = arguments.length;
var i__5767__auto___45517 = (0);
while(true){
if((i__5767__auto___45517 < len__5766__auto___45516)){
args__5772__auto__.push((arguments[i__5767__auto___45517]));

var G__45518 = (i__5767__auto___45517 + (1));
i__5767__auto___45517 = G__45518;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq45411){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45411));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5772__auto__ = [];
var len__5766__auto___45520 = arguments.length;
var i__5767__auto___45521 = (0);
while(true){
if((i__5767__auto___45521 < len__5766__auto___45520)){
args__5772__auto__.push((arguments[i__5767__auto___45521]));

var G__45522 = (i__5767__auto___45521 + (1));
i__5767__auto___45521 = G__45522;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq45424){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45424));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5772__auto__ = [];
var len__5766__auto___45526 = arguments.length;
var i__5767__auto___45527 = (0);
while(true){
if((i__5767__auto___45527 < len__5766__auto___45526)){
args__5772__auto__.push((arguments[i__5767__auto___45527]));

var G__45528 = (i__5767__auto___45527 + (1));
i__5767__auto___45527 = G__45528;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq45431){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45431));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5772__auto__ = [];
var len__5766__auto___45533 = arguments.length;
var i__5767__auto___45534 = (0);
while(true){
if((i__5767__auto___45534 < len__5766__auto___45533)){
args__5772__auto__.push((arguments[i__5767__auto___45534]));

var G__45535 = (i__5767__auto___45534 + (1));
i__5767__auto___45534 = G__45535;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq45440){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45440));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5772__auto__ = [];
var len__5766__auto___45537 = arguments.length;
var i__5767__auto___45538 = (0);
while(true){
if((i__5767__auto___45538 < len__5766__auto___45537)){
args__5772__auto__.push((arguments[i__5767__auto___45538]));

var G__45539 = (i__5767__auto___45538 + (1));
i__5767__auto___45538 = G__45539;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq45446){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45446));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5772__auto__ = [];
var len__5766__auto___45540 = arguments.length;
var i__5767__auto___45542 = (0);
while(true){
if((i__5767__auto___45542 < len__5766__auto___45540)){
args__5772__auto__.push((arguments[i__5767__auto___45542]));

var G__45543 = (i__5767__auto___45542 + (1));
i__5767__auto___45542 = G__45543;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq45449){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45449));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5772__auto__ = [];
var len__5766__auto___45546 = arguments.length;
var i__5767__auto___45547 = (0);
while(true){
if((i__5767__auto___45547 < len__5766__auto___45546)){
args__5772__auto__.push((arguments[i__5767__auto___45547]));

var G__45550 = (i__5767__auto___45547 + (1));
i__5767__auto___45547 = G__45550;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq45451){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45451));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5772__auto__ = [];
var len__5766__auto___45563 = arguments.length;
var i__5767__auto___45564 = (0);
while(true){
if((i__5767__auto___45564 < len__5766__auto___45563)){
args__5772__auto__.push((arguments[i__5767__auto___45564]));

var G__45565 = (i__5767__auto___45564 + (1));
i__5767__auto___45564 = G__45565;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__45458){
var vec__45460 = p__45458;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45460,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__45454_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__45454_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq45455){
var G__45456 = cljs.core.first(seq45455);
var seq45455__$1 = cljs.core.next(seq45455);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45456,seq45455__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__45466 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__45467 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__45468 = (function (){var G__45469 = new cljs.core.Keyword(null,"li","li",723558921);
var G__45470 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__45471 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__45469,G__45470,G__45471) : devtools.format.make_template_fn.call(null,G__45469,G__45470,G__45471));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__45466,G__45467,G__45468) : devtools.format.make_template_fn.call(null,G__45466,G__45467,G__45468));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5772__auto__ = [];
var len__5766__auto___45568 = arguments.length;
var i__5767__auto___45569 = (0);
while(true){
if((i__5767__auto___45569 < len__5766__auto___45568)){
args__5772__auto__.push((arguments[i__5767__auto___45569]));

var G__45571 = (i__5767__auto___45569 + (1));
i__5767__auto___45569 = G__45571;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq45476){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45476));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5772__auto__ = [];
var len__5766__auto___45572 = arguments.length;
var i__5767__auto___45573 = (0);
while(true){
if((i__5767__auto___45573 < len__5766__auto___45572)){
args__5772__auto__.push((arguments[i__5767__auto___45573]));

var G__45581 = (i__5767__auto___45573 + (1));
i__5767__auto___45573 = G__45581;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq45483){
var G__45484 = cljs.core.first(seq45483);
var seq45483__$1 = cljs.core.next(seq45483);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45484,seq45483__$1);
}));


//# sourceMappingURL=devtools.format.js.map
