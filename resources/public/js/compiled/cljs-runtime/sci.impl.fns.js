goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,enclosed_array,bindings,fn_body,fn_name,macro_QMARK_){
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
var enclosed__GT_invocation = new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_body);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body);
var invoc_size = new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body);
var self_ref_idx = new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(fn_body);
var nsm = sci.impl.vars.current_ns_name();
var vararg_idx = new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body);
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__52368 = (fixed_arity | (0));
switch (G__52368) {
case (0):
return (function() { 
var sci$impl$fns$fun_$_arity_0__delegate = function (G__52369){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__52369);

while(true){
var ret__7886__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7886__auto__)){
continue;
} else {
return ret__7886__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_0 = function (var_args){
var G__52369 = null;
if (arguments.length > 0) {
var G__53702__i = 0, G__53702__a = new Array(arguments.length -  0);
while (G__53702__i < G__53702__a.length) {G__53702__a[G__53702__i] = arguments[G__53702__i + 0]; ++G__53702__i;}
  G__52369 = new cljs.core.IndexedSeq(G__53702__a,0,null);
} 
return sci$impl$fns$fun_$_arity_0__delegate.call(this,G__52369);};
sci$impl$fns$fun_$_arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_arity_0.cljs$lang$applyTo = (function (arglist__53703){
var G__52369 = cljs.core.seq(arglist__53703);
return sci$impl$fns$fun_$_arity_0__delegate(G__52369);
});
sci$impl$fns$fun_$_arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_0__delegate;
return sci$impl$fns$fun_$_arity_0;
})()
;

break;
case (1):
var G__52372 = cljs.core._nth(params,(0));
return (function() { 
var sci$impl$fns$fun_$_arity_1__delegate = function (G__52370,G__52371){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52370);

(invoc_array[vararg_idx] = G__52371);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_1 = function (G__52370,var_args){
var G__52371 = null;
if (arguments.length > 1) {
var G__53710__i = 0, G__53710__a = new Array(arguments.length -  1);
while (G__53710__i < G__53710__a.length) {G__53710__a[G__53710__i] = arguments[G__53710__i + 1]; ++G__53710__i;}
  G__52371 = new cljs.core.IndexedSeq(G__53710__a,0,null);
} 
return sci$impl$fns$fun_$_arity_1__delegate.call(this,G__52370,G__52371);};
sci$impl$fns$fun_$_arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$fun_$_arity_1.cljs$lang$applyTo = (function (arglist__53711){
var G__52370 = cljs.core.first(arglist__53711);
var G__52371 = cljs.core.rest(arglist__53711);
return sci$impl$fns$fun_$_arity_1__delegate(G__52370,G__52371);
});
sci$impl$fns$fun_$_arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_1__delegate;
return sci$impl$fns$fun_$_arity_1;
})()
;

break;
case (2):
var G__52377 = cljs.core._nth(params,(0));
var G__52378 = cljs.core._nth(params,(1));
return (function() { 
var sci$impl$fns$fun_$_arity_2__delegate = function (G__52374,G__52375,G__52376){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52374);

(invoc_array[(1)] = G__52375);

(invoc_array[vararg_idx] = G__52376);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_2 = function (G__52374,G__52375,var_args){
var G__52376 = null;
if (arguments.length > 2) {
var G__53719__i = 0, G__53719__a = new Array(arguments.length -  2);
while (G__53719__i < G__53719__a.length) {G__53719__a[G__53719__i] = arguments[G__53719__i + 2]; ++G__53719__i;}
  G__52376 = new cljs.core.IndexedSeq(G__53719__a,0,null);
} 
return sci$impl$fns$fun_$_arity_2__delegate.call(this,G__52374,G__52375,G__52376);};
sci$impl$fns$fun_$_arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$fun_$_arity_2.cljs$lang$applyTo = (function (arglist__53720){
var G__52374 = cljs.core.first(arglist__53720);
arglist__53720 = cljs.core.next(arglist__53720);
var G__52375 = cljs.core.first(arglist__53720);
var G__52376 = cljs.core.rest(arglist__53720);
return sci$impl$fns$fun_$_arity_2__delegate(G__52374,G__52375,G__52376);
});
sci$impl$fns$fun_$_arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_2__delegate;
return sci$impl$fns$fun_$_arity_2;
})()
;

break;
case (3):
var G__52398 = cljs.core._nth(params,(0));
var G__52399 = cljs.core._nth(params,(1));
var G__52400 = cljs.core._nth(params,(2));
return (function() { 
var sci$impl$fns$fun_$_arity_3__delegate = function (G__52394,G__52395,G__52396,G__52397){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52394);

(invoc_array[(1)] = G__52395);

(invoc_array[(2)] = G__52396);

(invoc_array[vararg_idx] = G__52397);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_3 = function (G__52394,G__52395,G__52396,var_args){
var G__52397 = null;
if (arguments.length > 3) {
var G__53722__i = 0, G__53722__a = new Array(arguments.length -  3);
while (G__53722__i < G__53722__a.length) {G__53722__a[G__53722__i] = arguments[G__53722__i + 3]; ++G__53722__i;}
  G__52397 = new cljs.core.IndexedSeq(G__53722__a,0,null);
} 
return sci$impl$fns$fun_$_arity_3__delegate.call(this,G__52394,G__52395,G__52396,G__52397);};
sci$impl$fns$fun_$_arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$fun_$_arity_3.cljs$lang$applyTo = (function (arglist__53723){
var G__52394 = cljs.core.first(arglist__53723);
arglist__53723 = cljs.core.next(arglist__53723);
var G__52395 = cljs.core.first(arglist__53723);
arglist__53723 = cljs.core.next(arglist__53723);
var G__52396 = cljs.core.first(arglist__53723);
var G__52397 = cljs.core.rest(arglist__53723);
return sci$impl$fns$fun_$_arity_3__delegate(G__52394,G__52395,G__52396,G__52397);
});
sci$impl$fns$fun_$_arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_3__delegate;
return sci$impl$fns$fun_$_arity_3;
})()
;

break;
case (4):
var G__52414 = cljs.core._nth(params,(0));
var G__52415 = cljs.core._nth(params,(1));
var G__52416 = cljs.core._nth(params,(2));
var G__52417 = cljs.core._nth(params,(3));
return (function() { 
var sci$impl$fns$fun_$_arity_4__delegate = function (G__52409,G__52410,G__52411,G__52412,G__52413){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52409);

(invoc_array[(1)] = G__52410);

(invoc_array[(2)] = G__52411);

(invoc_array[(3)] = G__52412);

(invoc_array[vararg_idx] = G__52413);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_4 = function (G__52409,G__52410,G__52411,G__52412,var_args){
var G__52413 = null;
if (arguments.length > 4) {
var G__53725__i = 0, G__53725__a = new Array(arguments.length -  4);
while (G__53725__i < G__53725__a.length) {G__53725__a[G__53725__i] = arguments[G__53725__i + 4]; ++G__53725__i;}
  G__52413 = new cljs.core.IndexedSeq(G__53725__a,0,null);
} 
return sci$impl$fns$fun_$_arity_4__delegate.call(this,G__52409,G__52410,G__52411,G__52412,G__52413);};
sci$impl$fns$fun_$_arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$fun_$_arity_4.cljs$lang$applyTo = (function (arglist__53726){
var G__52409 = cljs.core.first(arglist__53726);
arglist__53726 = cljs.core.next(arglist__53726);
var G__52410 = cljs.core.first(arglist__53726);
arglist__53726 = cljs.core.next(arglist__53726);
var G__52411 = cljs.core.first(arglist__53726);
arglist__53726 = cljs.core.next(arglist__53726);
var G__52412 = cljs.core.first(arglist__53726);
var G__52413 = cljs.core.rest(arglist__53726);
return sci$impl$fns$fun_$_arity_4__delegate(G__52409,G__52410,G__52411,G__52412,G__52413);
});
sci$impl$fns$fun_$_arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_4__delegate;
return sci$impl$fns$fun_$_arity_4;
})()
;

break;
case (5):
var G__52452 = cljs.core._nth(params,(0));
var G__52453 = cljs.core._nth(params,(1));
var G__52454 = cljs.core._nth(params,(2));
var G__52455 = cljs.core._nth(params,(3));
var G__52456 = cljs.core._nth(params,(4));
return (function() { 
var sci$impl$fns$fun_$_arity_5__delegate = function (G__52446,G__52447,G__52448,G__52449,G__52450,G__52451){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52446);

(invoc_array[(1)] = G__52447);

(invoc_array[(2)] = G__52448);

(invoc_array[(3)] = G__52449);

(invoc_array[(4)] = G__52450);

(invoc_array[vararg_idx] = G__52451);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_5 = function (G__52446,G__52447,G__52448,G__52449,G__52450,var_args){
var G__52451 = null;
if (arguments.length > 5) {
var G__53727__i = 0, G__53727__a = new Array(arguments.length -  5);
while (G__53727__i < G__53727__a.length) {G__53727__a[G__53727__i] = arguments[G__53727__i + 5]; ++G__53727__i;}
  G__52451 = new cljs.core.IndexedSeq(G__53727__a,0,null);
} 
return sci$impl$fns$fun_$_arity_5__delegate.call(this,G__52446,G__52447,G__52448,G__52449,G__52450,G__52451);};
sci$impl$fns$fun_$_arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$fun_$_arity_5.cljs$lang$applyTo = (function (arglist__53728){
var G__52446 = cljs.core.first(arglist__53728);
arglist__53728 = cljs.core.next(arglist__53728);
var G__52447 = cljs.core.first(arglist__53728);
arglist__53728 = cljs.core.next(arglist__53728);
var G__52448 = cljs.core.first(arglist__53728);
arglist__53728 = cljs.core.next(arglist__53728);
var G__52449 = cljs.core.first(arglist__53728);
arglist__53728 = cljs.core.next(arglist__53728);
var G__52450 = cljs.core.first(arglist__53728);
var G__52451 = cljs.core.rest(arglist__53728);
return sci$impl$fns$fun_$_arity_5__delegate(G__52446,G__52447,G__52448,G__52449,G__52450,G__52451);
});
sci$impl$fns$fun_$_arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_5__delegate;
return sci$impl$fns$fun_$_arity_5;
})()
;

break;
case (6):
var G__52464 = cljs.core._nth(params,(0));
var G__52465 = cljs.core._nth(params,(1));
var G__52466 = cljs.core._nth(params,(2));
var G__52467 = cljs.core._nth(params,(3));
var G__52468 = cljs.core._nth(params,(4));
var G__52469 = cljs.core._nth(params,(5));
return (function() { 
var sci$impl$fns$fun_$_arity_6__delegate = function (G__52457,G__52458,G__52459,G__52460,G__52461,G__52462,G__52463){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52457);

(invoc_array[(1)] = G__52458);

(invoc_array[(2)] = G__52459);

(invoc_array[(3)] = G__52460);

(invoc_array[(4)] = G__52461);

(invoc_array[(5)] = G__52462);

(invoc_array[vararg_idx] = G__52463);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_6 = function (G__52457,G__52458,G__52459,G__52460,G__52461,G__52462,var_args){
var G__52463 = null;
if (arguments.length > 6) {
var G__53729__i = 0, G__53729__a = new Array(arguments.length -  6);
while (G__53729__i < G__53729__a.length) {G__53729__a[G__53729__i] = arguments[G__53729__i + 6]; ++G__53729__i;}
  G__52463 = new cljs.core.IndexedSeq(G__53729__a,0,null);
} 
return sci$impl$fns$fun_$_arity_6__delegate.call(this,G__52457,G__52458,G__52459,G__52460,G__52461,G__52462,G__52463);};
sci$impl$fns$fun_$_arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$fun_$_arity_6.cljs$lang$applyTo = (function (arglist__53730){
var G__52457 = cljs.core.first(arglist__53730);
arglist__53730 = cljs.core.next(arglist__53730);
var G__52458 = cljs.core.first(arglist__53730);
arglist__53730 = cljs.core.next(arglist__53730);
var G__52459 = cljs.core.first(arglist__53730);
arglist__53730 = cljs.core.next(arglist__53730);
var G__52460 = cljs.core.first(arglist__53730);
arglist__53730 = cljs.core.next(arglist__53730);
var G__52461 = cljs.core.first(arglist__53730);
arglist__53730 = cljs.core.next(arglist__53730);
var G__52462 = cljs.core.first(arglist__53730);
var G__52463 = cljs.core.rest(arglist__53730);
return sci$impl$fns$fun_$_arity_6__delegate(G__52457,G__52458,G__52459,G__52460,G__52461,G__52462,G__52463);
});
sci$impl$fns$fun_$_arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_6__delegate;
return sci$impl$fns$fun_$_arity_6;
})()
;

break;
case (7):
var G__52517 = cljs.core._nth(params,(0));
var G__52518 = cljs.core._nth(params,(1));
var G__52519 = cljs.core._nth(params,(2));
var G__52520 = cljs.core._nth(params,(3));
var G__52521 = cljs.core._nth(params,(4));
var G__52522 = cljs.core._nth(params,(5));
var G__52523 = cljs.core._nth(params,(6));
return (function() { 
var sci$impl$fns$fun_$_arity_7__delegate = function (G__52509,G__52510,G__52511,G__52512,G__52513,G__52514,G__52515,G__52516){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52509);

(invoc_array[(1)] = G__52510);

(invoc_array[(2)] = G__52511);

(invoc_array[(3)] = G__52512);

(invoc_array[(4)] = G__52513);

(invoc_array[(5)] = G__52514);

(invoc_array[(6)] = G__52515);

(invoc_array[vararg_idx] = G__52516);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_7 = function (G__52509,G__52510,G__52511,G__52512,G__52513,G__52514,G__52515,var_args){
var G__52516 = null;
if (arguments.length > 7) {
var G__53731__i = 0, G__53731__a = new Array(arguments.length -  7);
while (G__53731__i < G__53731__a.length) {G__53731__a[G__53731__i] = arguments[G__53731__i + 7]; ++G__53731__i;}
  G__52516 = new cljs.core.IndexedSeq(G__53731__a,0,null);
} 
return sci$impl$fns$fun_$_arity_7__delegate.call(this,G__52509,G__52510,G__52511,G__52512,G__52513,G__52514,G__52515,G__52516);};
sci$impl$fns$fun_$_arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$fun_$_arity_7.cljs$lang$applyTo = (function (arglist__53732){
var G__52509 = cljs.core.first(arglist__53732);
arglist__53732 = cljs.core.next(arglist__53732);
var G__52510 = cljs.core.first(arglist__53732);
arglist__53732 = cljs.core.next(arglist__53732);
var G__52511 = cljs.core.first(arglist__53732);
arglist__53732 = cljs.core.next(arglist__53732);
var G__52512 = cljs.core.first(arglist__53732);
arglist__53732 = cljs.core.next(arglist__53732);
var G__52513 = cljs.core.first(arglist__53732);
arglist__53732 = cljs.core.next(arglist__53732);
var G__52514 = cljs.core.first(arglist__53732);
arglist__53732 = cljs.core.next(arglist__53732);
var G__52515 = cljs.core.first(arglist__53732);
var G__52516 = cljs.core.rest(arglist__53732);
return sci$impl$fns$fun_$_arity_7__delegate(G__52509,G__52510,G__52511,G__52512,G__52513,G__52514,G__52515,G__52516);
});
sci$impl$fns$fun_$_arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_7__delegate;
return sci$impl$fns$fun_$_arity_7;
})()
;

break;
case (8):
var G__52545 = cljs.core._nth(params,(0));
var G__52546 = cljs.core._nth(params,(1));
var G__52547 = cljs.core._nth(params,(2));
var G__52548 = cljs.core._nth(params,(3));
var G__52549 = cljs.core._nth(params,(4));
var G__52550 = cljs.core._nth(params,(5));
var G__52551 = cljs.core._nth(params,(6));
var G__52552 = cljs.core._nth(params,(7));
return (function() { 
var sci$impl$fns$fun_$_arity_8__delegate = function (G__52536,G__52537,G__52538,G__52539,G__52540,G__52541,G__52542,G__52543,G__52544){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52536);

(invoc_array[(1)] = G__52537);

(invoc_array[(2)] = G__52538);

(invoc_array[(3)] = G__52539);

(invoc_array[(4)] = G__52540);

(invoc_array[(5)] = G__52541);

(invoc_array[(6)] = G__52542);

(invoc_array[(7)] = G__52543);

(invoc_array[vararg_idx] = G__52544);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_8 = function (G__52536,G__52537,G__52538,G__52539,G__52540,G__52541,G__52542,G__52543,var_args){
var G__52544 = null;
if (arguments.length > 8) {
var G__53735__i = 0, G__53735__a = new Array(arguments.length -  8);
while (G__53735__i < G__53735__a.length) {G__53735__a[G__53735__i] = arguments[G__53735__i + 8]; ++G__53735__i;}
  G__52544 = new cljs.core.IndexedSeq(G__53735__a,0,null);
} 
return sci$impl$fns$fun_$_arity_8__delegate.call(this,G__52536,G__52537,G__52538,G__52539,G__52540,G__52541,G__52542,G__52543,G__52544);};
sci$impl$fns$fun_$_arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$fun_$_arity_8.cljs$lang$applyTo = (function (arglist__53736){
var G__52536 = cljs.core.first(arglist__53736);
arglist__53736 = cljs.core.next(arglist__53736);
var G__52537 = cljs.core.first(arglist__53736);
arglist__53736 = cljs.core.next(arglist__53736);
var G__52538 = cljs.core.first(arglist__53736);
arglist__53736 = cljs.core.next(arglist__53736);
var G__52539 = cljs.core.first(arglist__53736);
arglist__53736 = cljs.core.next(arglist__53736);
var G__52540 = cljs.core.first(arglist__53736);
arglist__53736 = cljs.core.next(arglist__53736);
var G__52541 = cljs.core.first(arglist__53736);
arglist__53736 = cljs.core.next(arglist__53736);
var G__52542 = cljs.core.first(arglist__53736);
arglist__53736 = cljs.core.next(arglist__53736);
var G__52543 = cljs.core.first(arglist__53736);
var G__52544 = cljs.core.rest(arglist__53736);
return sci$impl$fns$fun_$_arity_8__delegate(G__52536,G__52537,G__52538,G__52539,G__52540,G__52541,G__52542,G__52543,G__52544);
});
sci$impl$fns$fun_$_arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_8__delegate;
return sci$impl$fns$fun_$_arity_8;
})()
;

break;
case (9):
var G__52594 = cljs.core._nth(params,(0));
var G__52595 = cljs.core._nth(params,(1));
var G__52596 = cljs.core._nth(params,(2));
var G__52597 = cljs.core._nth(params,(3));
var G__52598 = cljs.core._nth(params,(4));
var G__52599 = cljs.core._nth(params,(5));
var G__52600 = cljs.core._nth(params,(6));
var G__52601 = cljs.core._nth(params,(7));
var G__52602 = cljs.core._nth(params,(8));
return (function() { 
var sci$impl$fns$fun_$_arity_9__delegate = function (G__52584,G__52585,G__52586,G__52587,G__52588,G__52589,G__52590,G__52591,G__52592,G__52593){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52584);

(invoc_array[(1)] = G__52585);

(invoc_array[(2)] = G__52586);

(invoc_array[(3)] = G__52587);

(invoc_array[(4)] = G__52588);

(invoc_array[(5)] = G__52589);

(invoc_array[(6)] = G__52590);

(invoc_array[(7)] = G__52591);

(invoc_array[(8)] = G__52592);

(invoc_array[vararg_idx] = G__52593);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_9 = function (G__52584,G__52585,G__52586,G__52587,G__52588,G__52589,G__52590,G__52591,G__52592,var_args){
var G__52593 = null;
if (arguments.length > 9) {
var G__53740__i = 0, G__53740__a = new Array(arguments.length -  9);
while (G__53740__i < G__53740__a.length) {G__53740__a[G__53740__i] = arguments[G__53740__i + 9]; ++G__53740__i;}
  G__52593 = new cljs.core.IndexedSeq(G__53740__a,0,null);
} 
return sci$impl$fns$fun_$_arity_9__delegate.call(this,G__52584,G__52585,G__52586,G__52587,G__52588,G__52589,G__52590,G__52591,G__52592,G__52593);};
sci$impl$fns$fun_$_arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$fun_$_arity_9.cljs$lang$applyTo = (function (arglist__53741){
var G__52584 = cljs.core.first(arglist__53741);
arglist__53741 = cljs.core.next(arglist__53741);
var G__52585 = cljs.core.first(arglist__53741);
arglist__53741 = cljs.core.next(arglist__53741);
var G__52586 = cljs.core.first(arglist__53741);
arglist__53741 = cljs.core.next(arglist__53741);
var G__52587 = cljs.core.first(arglist__53741);
arglist__53741 = cljs.core.next(arglist__53741);
var G__52588 = cljs.core.first(arglist__53741);
arglist__53741 = cljs.core.next(arglist__53741);
var G__52589 = cljs.core.first(arglist__53741);
arglist__53741 = cljs.core.next(arglist__53741);
var G__52590 = cljs.core.first(arglist__53741);
arglist__53741 = cljs.core.next(arglist__53741);
var G__52591 = cljs.core.first(arglist__53741);
arglist__53741 = cljs.core.next(arglist__53741);
var G__52592 = cljs.core.first(arglist__53741);
var G__52593 = cljs.core.rest(arglist__53741);
return sci$impl$fns$fun_$_arity_9__delegate(G__52584,G__52585,G__52586,G__52587,G__52588,G__52589,G__52590,G__52591,G__52592,G__52593);
});
sci$impl$fns$fun_$_arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_9__delegate;
return sci$impl$fns$fun_$_arity_9;
})()
;

break;
case (10):
var G__52650 = cljs.core._nth(params,(0));
var G__52651 = cljs.core._nth(params,(1));
var G__52652 = cljs.core._nth(params,(2));
var G__52653 = cljs.core._nth(params,(3));
var G__52654 = cljs.core._nth(params,(4));
var G__52655 = cljs.core._nth(params,(5));
var G__52656 = cljs.core._nth(params,(6));
var G__52657 = cljs.core._nth(params,(7));
var G__52658 = cljs.core._nth(params,(8));
var G__52659 = cljs.core._nth(params,(9));
return (function() { 
var sci$impl$fns$fun_$_arity_10__delegate = function (G__52639,G__52640,G__52641,G__52642,G__52643,G__52644,G__52645,G__52646,G__52647,G__52648,G__52649){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52639);

(invoc_array[(1)] = G__52640);

(invoc_array[(2)] = G__52641);

(invoc_array[(3)] = G__52642);

(invoc_array[(4)] = G__52643);

(invoc_array[(5)] = G__52644);

(invoc_array[(6)] = G__52645);

(invoc_array[(7)] = G__52646);

(invoc_array[(8)] = G__52647);

(invoc_array[(9)] = G__52648);

(invoc_array[vararg_idx] = G__52649);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_10 = function (G__52639,G__52640,G__52641,G__52642,G__52643,G__52644,G__52645,G__52646,G__52647,G__52648,var_args){
var G__52649 = null;
if (arguments.length > 10) {
var G__53743__i = 0, G__53743__a = new Array(arguments.length -  10);
while (G__53743__i < G__53743__a.length) {G__53743__a[G__53743__i] = arguments[G__53743__i + 10]; ++G__53743__i;}
  G__52649 = new cljs.core.IndexedSeq(G__53743__a,0,null);
} 
return sci$impl$fns$fun_$_arity_10__delegate.call(this,G__52639,G__52640,G__52641,G__52642,G__52643,G__52644,G__52645,G__52646,G__52647,G__52648,G__52649);};
sci$impl$fns$fun_$_arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$fun_$_arity_10.cljs$lang$applyTo = (function (arglist__53744){
var G__52639 = cljs.core.first(arglist__53744);
arglist__53744 = cljs.core.next(arglist__53744);
var G__52640 = cljs.core.first(arglist__53744);
arglist__53744 = cljs.core.next(arglist__53744);
var G__52641 = cljs.core.first(arglist__53744);
arglist__53744 = cljs.core.next(arglist__53744);
var G__52642 = cljs.core.first(arglist__53744);
arglist__53744 = cljs.core.next(arglist__53744);
var G__52643 = cljs.core.first(arglist__53744);
arglist__53744 = cljs.core.next(arglist__53744);
var G__52644 = cljs.core.first(arglist__53744);
arglist__53744 = cljs.core.next(arglist__53744);
var G__52645 = cljs.core.first(arglist__53744);
arglist__53744 = cljs.core.next(arglist__53744);
var G__52646 = cljs.core.first(arglist__53744);
arglist__53744 = cljs.core.next(arglist__53744);
var G__52647 = cljs.core.first(arglist__53744);
arglist__53744 = cljs.core.next(arglist__53744);
var G__52648 = cljs.core.first(arglist__53744);
var G__52649 = cljs.core.rest(arglist__53744);
return sci$impl$fns$fun_$_arity_10__delegate(G__52639,G__52640,G__52641,G__52642,G__52643,G__52644,G__52645,G__52646,G__52647,G__52648,G__52649);
});
sci$impl$fns$fun_$_arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_10__delegate;
return sci$impl$fns$fun_$_arity_10;
})()
;

break;
case (11):
var G__52673 = cljs.core._nth(params,(0));
var G__52674 = cljs.core._nth(params,(1));
var G__52675 = cljs.core._nth(params,(2));
var G__52676 = cljs.core._nth(params,(3));
var G__52677 = cljs.core._nth(params,(4));
var G__52678 = cljs.core._nth(params,(5));
var G__52679 = cljs.core._nth(params,(6));
var G__52680 = cljs.core._nth(params,(7));
var G__52681 = cljs.core._nth(params,(8));
var G__52682 = cljs.core._nth(params,(9));
var G__52683 = cljs.core._nth(params,(10));
return (function() { 
var sci$impl$fns$fun_$_arity_11__delegate = function (G__52661,G__52662,G__52663,G__52664,G__52665,G__52666,G__52667,G__52668,G__52669,G__52670,G__52671,G__52672){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52661);

(invoc_array[(1)] = G__52662);

(invoc_array[(2)] = G__52663);

(invoc_array[(3)] = G__52664);

(invoc_array[(4)] = G__52665);

(invoc_array[(5)] = G__52666);

(invoc_array[(6)] = G__52667);

(invoc_array[(7)] = G__52668);

(invoc_array[(8)] = G__52669);

(invoc_array[(9)] = G__52670);

(invoc_array[(10)] = G__52671);

(invoc_array[vararg_idx] = G__52672);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_11 = function (G__52661,G__52662,G__52663,G__52664,G__52665,G__52666,G__52667,G__52668,G__52669,G__52670,G__52671,var_args){
var G__52672 = null;
if (arguments.length > 11) {
var G__53745__i = 0, G__53745__a = new Array(arguments.length -  11);
while (G__53745__i < G__53745__a.length) {G__53745__a[G__53745__i] = arguments[G__53745__i + 11]; ++G__53745__i;}
  G__52672 = new cljs.core.IndexedSeq(G__53745__a,0,null);
} 
return sci$impl$fns$fun_$_arity_11__delegate.call(this,G__52661,G__52662,G__52663,G__52664,G__52665,G__52666,G__52667,G__52668,G__52669,G__52670,G__52671,G__52672);};
sci$impl$fns$fun_$_arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$fun_$_arity_11.cljs$lang$applyTo = (function (arglist__53746){
var G__52661 = cljs.core.first(arglist__53746);
arglist__53746 = cljs.core.next(arglist__53746);
var G__52662 = cljs.core.first(arglist__53746);
arglist__53746 = cljs.core.next(arglist__53746);
var G__52663 = cljs.core.first(arglist__53746);
arglist__53746 = cljs.core.next(arglist__53746);
var G__52664 = cljs.core.first(arglist__53746);
arglist__53746 = cljs.core.next(arglist__53746);
var G__52665 = cljs.core.first(arglist__53746);
arglist__53746 = cljs.core.next(arglist__53746);
var G__52666 = cljs.core.first(arglist__53746);
arglist__53746 = cljs.core.next(arglist__53746);
var G__52667 = cljs.core.first(arglist__53746);
arglist__53746 = cljs.core.next(arglist__53746);
var G__52668 = cljs.core.first(arglist__53746);
arglist__53746 = cljs.core.next(arglist__53746);
var G__52669 = cljs.core.first(arglist__53746);
arglist__53746 = cljs.core.next(arglist__53746);
var G__52670 = cljs.core.first(arglist__53746);
arglist__53746 = cljs.core.next(arglist__53746);
var G__52671 = cljs.core.first(arglist__53746);
var G__52672 = cljs.core.rest(arglist__53746);
return sci$impl$fns$fun_$_arity_11__delegate(G__52661,G__52662,G__52663,G__52664,G__52665,G__52666,G__52667,G__52668,G__52669,G__52670,G__52671,G__52672);
});
sci$impl$fns$fun_$_arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_11__delegate;
return sci$impl$fns$fun_$_arity_11;
})()
;

break;
case (12):
var G__52725 = cljs.core._nth(params,(0));
var G__52726 = cljs.core._nth(params,(1));
var G__52727 = cljs.core._nth(params,(2));
var G__52728 = cljs.core._nth(params,(3));
var G__52729 = cljs.core._nth(params,(4));
var G__52730 = cljs.core._nth(params,(5));
var G__52731 = cljs.core._nth(params,(6));
var G__52732 = cljs.core._nth(params,(7));
var G__52733 = cljs.core._nth(params,(8));
var G__52734 = cljs.core._nth(params,(9));
var G__52735 = cljs.core._nth(params,(10));
var G__52736 = cljs.core._nth(params,(11));
return (function() { 
var sci$impl$fns$fun_$_arity_12__delegate = function (G__52712,G__52713,G__52714,G__52715,G__52716,G__52717,G__52718,G__52719,G__52720,G__52721,G__52722,G__52723,G__52724){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52712);

(invoc_array[(1)] = G__52713);

(invoc_array[(2)] = G__52714);

(invoc_array[(3)] = G__52715);

(invoc_array[(4)] = G__52716);

(invoc_array[(5)] = G__52717);

(invoc_array[(6)] = G__52718);

(invoc_array[(7)] = G__52719);

(invoc_array[(8)] = G__52720);

(invoc_array[(9)] = G__52721);

(invoc_array[(10)] = G__52722);

(invoc_array[(11)] = G__52723);

(invoc_array[vararg_idx] = G__52724);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_12 = function (G__52712,G__52713,G__52714,G__52715,G__52716,G__52717,G__52718,G__52719,G__52720,G__52721,G__52722,G__52723,var_args){
var G__52724 = null;
if (arguments.length > 12) {
var G__53748__i = 0, G__53748__a = new Array(arguments.length -  12);
while (G__53748__i < G__53748__a.length) {G__53748__a[G__53748__i] = arguments[G__53748__i + 12]; ++G__53748__i;}
  G__52724 = new cljs.core.IndexedSeq(G__53748__a,0,null);
} 
return sci$impl$fns$fun_$_arity_12__delegate.call(this,G__52712,G__52713,G__52714,G__52715,G__52716,G__52717,G__52718,G__52719,G__52720,G__52721,G__52722,G__52723,G__52724);};
sci$impl$fns$fun_$_arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$fun_$_arity_12.cljs$lang$applyTo = (function (arglist__53749){
var G__52712 = cljs.core.first(arglist__53749);
arglist__53749 = cljs.core.next(arglist__53749);
var G__52713 = cljs.core.first(arglist__53749);
arglist__53749 = cljs.core.next(arglist__53749);
var G__52714 = cljs.core.first(arglist__53749);
arglist__53749 = cljs.core.next(arglist__53749);
var G__52715 = cljs.core.first(arglist__53749);
arglist__53749 = cljs.core.next(arglist__53749);
var G__52716 = cljs.core.first(arglist__53749);
arglist__53749 = cljs.core.next(arglist__53749);
var G__52717 = cljs.core.first(arglist__53749);
arglist__53749 = cljs.core.next(arglist__53749);
var G__52718 = cljs.core.first(arglist__53749);
arglist__53749 = cljs.core.next(arglist__53749);
var G__52719 = cljs.core.first(arglist__53749);
arglist__53749 = cljs.core.next(arglist__53749);
var G__52720 = cljs.core.first(arglist__53749);
arglist__53749 = cljs.core.next(arglist__53749);
var G__52721 = cljs.core.first(arglist__53749);
arglist__53749 = cljs.core.next(arglist__53749);
var G__52722 = cljs.core.first(arglist__53749);
arglist__53749 = cljs.core.next(arglist__53749);
var G__52723 = cljs.core.first(arglist__53749);
var G__52724 = cljs.core.rest(arglist__53749);
return sci$impl$fns$fun_$_arity_12__delegate(G__52712,G__52713,G__52714,G__52715,G__52716,G__52717,G__52718,G__52719,G__52720,G__52721,G__52722,G__52723,G__52724);
});
sci$impl$fns$fun_$_arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_12__delegate;
return sci$impl$fns$fun_$_arity_12;
})()
;

break;
case (13):
var G__52772 = cljs.core._nth(params,(0));
var G__52773 = cljs.core._nth(params,(1));
var G__52774 = cljs.core._nth(params,(2));
var G__52775 = cljs.core._nth(params,(3));
var G__52776 = cljs.core._nth(params,(4));
var G__52777 = cljs.core._nth(params,(5));
var G__52778 = cljs.core._nth(params,(6));
var G__52779 = cljs.core._nth(params,(7));
var G__52780 = cljs.core._nth(params,(8));
var G__52781 = cljs.core._nth(params,(9));
var G__52782 = cljs.core._nth(params,(10));
var G__52783 = cljs.core._nth(params,(11));
var G__52784 = cljs.core._nth(params,(12));
return (function() { 
var sci$impl$fns$fun_$_arity_13__delegate = function (G__52758,G__52759,G__52760,G__52761,G__52762,G__52763,G__52764,G__52765,G__52766,G__52767,G__52768,G__52769,G__52770,G__52771){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52758);

(invoc_array[(1)] = G__52759);

(invoc_array[(2)] = G__52760);

(invoc_array[(3)] = G__52761);

(invoc_array[(4)] = G__52762);

(invoc_array[(5)] = G__52763);

(invoc_array[(6)] = G__52764);

(invoc_array[(7)] = G__52765);

(invoc_array[(8)] = G__52766);

(invoc_array[(9)] = G__52767);

(invoc_array[(10)] = G__52768);

(invoc_array[(11)] = G__52769);

(invoc_array[(12)] = G__52770);

(invoc_array[vararg_idx] = G__52771);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_13 = function (G__52758,G__52759,G__52760,G__52761,G__52762,G__52763,G__52764,G__52765,G__52766,G__52767,G__52768,G__52769,G__52770,var_args){
var G__52771 = null;
if (arguments.length > 13) {
var G__53754__i = 0, G__53754__a = new Array(arguments.length -  13);
while (G__53754__i < G__53754__a.length) {G__53754__a[G__53754__i] = arguments[G__53754__i + 13]; ++G__53754__i;}
  G__52771 = new cljs.core.IndexedSeq(G__53754__a,0,null);
} 
return sci$impl$fns$fun_$_arity_13__delegate.call(this,G__52758,G__52759,G__52760,G__52761,G__52762,G__52763,G__52764,G__52765,G__52766,G__52767,G__52768,G__52769,G__52770,G__52771);};
sci$impl$fns$fun_$_arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$fun_$_arity_13.cljs$lang$applyTo = (function (arglist__53755){
var G__52758 = cljs.core.first(arglist__53755);
arglist__53755 = cljs.core.next(arglist__53755);
var G__52759 = cljs.core.first(arglist__53755);
arglist__53755 = cljs.core.next(arglist__53755);
var G__52760 = cljs.core.first(arglist__53755);
arglist__53755 = cljs.core.next(arglist__53755);
var G__52761 = cljs.core.first(arglist__53755);
arglist__53755 = cljs.core.next(arglist__53755);
var G__52762 = cljs.core.first(arglist__53755);
arglist__53755 = cljs.core.next(arglist__53755);
var G__52763 = cljs.core.first(arglist__53755);
arglist__53755 = cljs.core.next(arglist__53755);
var G__52764 = cljs.core.first(arglist__53755);
arglist__53755 = cljs.core.next(arglist__53755);
var G__52765 = cljs.core.first(arglist__53755);
arglist__53755 = cljs.core.next(arglist__53755);
var G__52766 = cljs.core.first(arglist__53755);
arglist__53755 = cljs.core.next(arglist__53755);
var G__52767 = cljs.core.first(arglist__53755);
arglist__53755 = cljs.core.next(arglist__53755);
var G__52768 = cljs.core.first(arglist__53755);
arglist__53755 = cljs.core.next(arglist__53755);
var G__52769 = cljs.core.first(arglist__53755);
arglist__53755 = cljs.core.next(arglist__53755);
var G__52770 = cljs.core.first(arglist__53755);
var G__52771 = cljs.core.rest(arglist__53755);
return sci$impl$fns$fun_$_arity_13__delegate(G__52758,G__52759,G__52760,G__52761,G__52762,G__52763,G__52764,G__52765,G__52766,G__52767,G__52768,G__52769,G__52770,G__52771);
});
sci$impl$fns$fun_$_arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_13__delegate;
return sci$impl$fns$fun_$_arity_13;
})()
;

break;
case (14):
var G__52806 = cljs.core._nth(params,(0));
var G__52807 = cljs.core._nth(params,(1));
var G__52808 = cljs.core._nth(params,(2));
var G__52809 = cljs.core._nth(params,(3));
var G__52810 = cljs.core._nth(params,(4));
var G__52811 = cljs.core._nth(params,(5));
var G__52812 = cljs.core._nth(params,(6));
var G__52813 = cljs.core._nth(params,(7));
var G__52814 = cljs.core._nth(params,(8));
var G__52815 = cljs.core._nth(params,(9));
var G__52816 = cljs.core._nth(params,(10));
var G__52817 = cljs.core._nth(params,(11));
var G__52818 = cljs.core._nth(params,(12));
var G__52819 = cljs.core._nth(params,(13));
return (function() { 
var sci$impl$fns$fun_$_arity_14__delegate = function (G__52791,G__52792,G__52793,G__52794,G__52795,G__52796,G__52797,G__52798,G__52799,G__52800,G__52801,G__52802,G__52803,G__52804,G__52805){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52791);

(invoc_array[(1)] = G__52792);

(invoc_array[(2)] = G__52793);

(invoc_array[(3)] = G__52794);

(invoc_array[(4)] = G__52795);

(invoc_array[(5)] = G__52796);

(invoc_array[(6)] = G__52797);

(invoc_array[(7)] = G__52798);

(invoc_array[(8)] = G__52799);

(invoc_array[(9)] = G__52800);

(invoc_array[(10)] = G__52801);

(invoc_array[(11)] = G__52802);

(invoc_array[(12)] = G__52803);

(invoc_array[(13)] = G__52804);

(invoc_array[vararg_idx] = G__52805);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_14 = function (G__52791,G__52792,G__52793,G__52794,G__52795,G__52796,G__52797,G__52798,G__52799,G__52800,G__52801,G__52802,G__52803,G__52804,var_args){
var G__52805 = null;
if (arguments.length > 14) {
var G__53756__i = 0, G__53756__a = new Array(arguments.length -  14);
while (G__53756__i < G__53756__a.length) {G__53756__a[G__53756__i] = arguments[G__53756__i + 14]; ++G__53756__i;}
  G__52805 = new cljs.core.IndexedSeq(G__53756__a,0,null);
} 
return sci$impl$fns$fun_$_arity_14__delegate.call(this,G__52791,G__52792,G__52793,G__52794,G__52795,G__52796,G__52797,G__52798,G__52799,G__52800,G__52801,G__52802,G__52803,G__52804,G__52805);};
sci$impl$fns$fun_$_arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$fun_$_arity_14.cljs$lang$applyTo = (function (arglist__53758){
var G__52791 = cljs.core.first(arglist__53758);
arglist__53758 = cljs.core.next(arglist__53758);
var G__52792 = cljs.core.first(arglist__53758);
arglist__53758 = cljs.core.next(arglist__53758);
var G__52793 = cljs.core.first(arglist__53758);
arglist__53758 = cljs.core.next(arglist__53758);
var G__52794 = cljs.core.first(arglist__53758);
arglist__53758 = cljs.core.next(arglist__53758);
var G__52795 = cljs.core.first(arglist__53758);
arglist__53758 = cljs.core.next(arglist__53758);
var G__52796 = cljs.core.first(arglist__53758);
arglist__53758 = cljs.core.next(arglist__53758);
var G__52797 = cljs.core.first(arglist__53758);
arglist__53758 = cljs.core.next(arglist__53758);
var G__52798 = cljs.core.first(arglist__53758);
arglist__53758 = cljs.core.next(arglist__53758);
var G__52799 = cljs.core.first(arglist__53758);
arglist__53758 = cljs.core.next(arglist__53758);
var G__52800 = cljs.core.first(arglist__53758);
arglist__53758 = cljs.core.next(arglist__53758);
var G__52801 = cljs.core.first(arglist__53758);
arglist__53758 = cljs.core.next(arglist__53758);
var G__52802 = cljs.core.first(arglist__53758);
arglist__53758 = cljs.core.next(arglist__53758);
var G__52803 = cljs.core.first(arglist__53758);
arglist__53758 = cljs.core.next(arglist__53758);
var G__52804 = cljs.core.first(arglist__53758);
var G__52805 = cljs.core.rest(arglist__53758);
return sci$impl$fns$fun_$_arity_14__delegate(G__52791,G__52792,G__52793,G__52794,G__52795,G__52796,G__52797,G__52798,G__52799,G__52800,G__52801,G__52802,G__52803,G__52804,G__52805);
});
sci$impl$fns$fun_$_arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_14__delegate;
return sci$impl$fns$fun_$_arity_14;
})()
;

break;
case (15):
var G__52864 = cljs.core._nth(params,(0));
var G__52865 = cljs.core._nth(params,(1));
var G__52866 = cljs.core._nth(params,(2));
var G__52867 = cljs.core._nth(params,(3));
var G__52868 = cljs.core._nth(params,(4));
var G__52869 = cljs.core._nth(params,(5));
var G__52870 = cljs.core._nth(params,(6));
var G__52871 = cljs.core._nth(params,(7));
var G__52872 = cljs.core._nth(params,(8));
var G__52873 = cljs.core._nth(params,(9));
var G__52874 = cljs.core._nth(params,(10));
var G__52875 = cljs.core._nth(params,(11));
var G__52876 = cljs.core._nth(params,(12));
var G__52877 = cljs.core._nth(params,(13));
var G__52878 = cljs.core._nth(params,(14));
return (function() { 
var sci$impl$fns$fun_$_arity_15__delegate = function (G__52848,G__52849,G__52850,G__52851,G__52852,G__52853,G__52854,G__52855,G__52856,G__52857,G__52858,G__52859,G__52860,G__52861,G__52862,G__52863){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52848);

(invoc_array[(1)] = G__52849);

(invoc_array[(2)] = G__52850);

(invoc_array[(3)] = G__52851);

(invoc_array[(4)] = G__52852);

(invoc_array[(5)] = G__52853);

(invoc_array[(6)] = G__52854);

(invoc_array[(7)] = G__52855);

(invoc_array[(8)] = G__52856);

(invoc_array[(9)] = G__52857);

(invoc_array[(10)] = G__52858);

(invoc_array[(11)] = G__52859);

(invoc_array[(12)] = G__52860);

(invoc_array[(13)] = G__52861);

(invoc_array[(14)] = G__52862);

(invoc_array[vararg_idx] = G__52863);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_15 = function (G__52848,G__52849,G__52850,G__52851,G__52852,G__52853,G__52854,G__52855,G__52856,G__52857,G__52858,G__52859,G__52860,G__52861,G__52862,var_args){
var G__52863 = null;
if (arguments.length > 15) {
var G__53764__i = 0, G__53764__a = new Array(arguments.length -  15);
while (G__53764__i < G__53764__a.length) {G__53764__a[G__53764__i] = arguments[G__53764__i + 15]; ++G__53764__i;}
  G__52863 = new cljs.core.IndexedSeq(G__53764__a,0,null);
} 
return sci$impl$fns$fun_$_arity_15__delegate.call(this,G__52848,G__52849,G__52850,G__52851,G__52852,G__52853,G__52854,G__52855,G__52856,G__52857,G__52858,G__52859,G__52860,G__52861,G__52862,G__52863);};
sci$impl$fns$fun_$_arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$fun_$_arity_15.cljs$lang$applyTo = (function (arglist__53765){
var G__52848 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52849 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52850 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52851 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52852 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52853 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52854 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52855 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52856 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52857 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52858 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52859 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52860 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52861 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52862 = cljs.core.first(arglist__53765);
var G__52863 = cljs.core.rest(arglist__53765);
return sci$impl$fns$fun_$_arity_15__delegate(G__52848,G__52849,G__52850,G__52851,G__52852,G__52853,G__52854,G__52855,G__52856,G__52857,G__52858,G__52859,G__52860,G__52861,G__52862,G__52863);
});
sci$impl$fns$fun_$_arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_15__delegate;
return sci$impl$fns$fun_$_arity_15;
})()
;

break;
case (16):
var G__52907 = cljs.core._nth(params,(0));
var G__52908 = cljs.core._nth(params,(1));
var G__52909 = cljs.core._nth(params,(2));
var G__52910 = cljs.core._nth(params,(3));
var G__52911 = cljs.core._nth(params,(4));
var G__52912 = cljs.core._nth(params,(5));
var G__52913 = cljs.core._nth(params,(6));
var G__52914 = cljs.core._nth(params,(7));
var G__52915 = cljs.core._nth(params,(8));
var G__52916 = cljs.core._nth(params,(9));
var G__52917 = cljs.core._nth(params,(10));
var G__52918 = cljs.core._nth(params,(11));
var G__52919 = cljs.core._nth(params,(12));
var G__52920 = cljs.core._nth(params,(13));
var G__52921 = cljs.core._nth(params,(14));
var G__52922 = cljs.core._nth(params,(15));
return (function() { 
var sci$impl$fns$fun_$_arity_16__delegate = function (G__52890,G__52891,G__52892,G__52893,G__52894,G__52895,G__52896,G__52897,G__52898,G__52899,G__52900,G__52901,G__52902,G__52903,G__52904,G__52905,G__52906){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52890);

(invoc_array[(1)] = G__52891);

(invoc_array[(2)] = G__52892);

(invoc_array[(3)] = G__52893);

(invoc_array[(4)] = G__52894);

(invoc_array[(5)] = G__52895);

(invoc_array[(6)] = G__52896);

(invoc_array[(7)] = G__52897);

(invoc_array[(8)] = G__52898);

(invoc_array[(9)] = G__52899);

(invoc_array[(10)] = G__52900);

(invoc_array[(11)] = G__52901);

(invoc_array[(12)] = G__52902);

(invoc_array[(13)] = G__52903);

(invoc_array[(14)] = G__52904);

(invoc_array[(15)] = G__52905);

(invoc_array[vararg_idx] = G__52906);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_16 = function (G__52890,G__52891,G__52892,G__52893,G__52894,G__52895,G__52896,G__52897,G__52898,G__52899,G__52900,G__52901,G__52902,G__52903,G__52904,G__52905,var_args){
var G__52906 = null;
if (arguments.length > 16) {
var G__53774__i = 0, G__53774__a = new Array(arguments.length -  16);
while (G__53774__i < G__53774__a.length) {G__53774__a[G__53774__i] = arguments[G__53774__i + 16]; ++G__53774__i;}
  G__52906 = new cljs.core.IndexedSeq(G__53774__a,0,null);
} 
return sci$impl$fns$fun_$_arity_16__delegate.call(this,G__52890,G__52891,G__52892,G__52893,G__52894,G__52895,G__52896,G__52897,G__52898,G__52899,G__52900,G__52901,G__52902,G__52903,G__52904,G__52905,G__52906);};
sci$impl$fns$fun_$_arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$fun_$_arity_16.cljs$lang$applyTo = (function (arglist__53775){
var G__52890 = cljs.core.first(arglist__53775);
arglist__53775 = cljs.core.next(arglist__53775);
var G__52891 = cljs.core.first(arglist__53775);
arglist__53775 = cljs.core.next(arglist__53775);
var G__52892 = cljs.core.first(arglist__53775);
arglist__53775 = cljs.core.next(arglist__53775);
var G__52893 = cljs.core.first(arglist__53775);
arglist__53775 = cljs.core.next(arglist__53775);
var G__52894 = cljs.core.first(arglist__53775);
arglist__53775 = cljs.core.next(arglist__53775);
var G__52895 = cljs.core.first(arglist__53775);
arglist__53775 = cljs.core.next(arglist__53775);
var G__52896 = cljs.core.first(arglist__53775);
arglist__53775 = cljs.core.next(arglist__53775);
var G__52897 = cljs.core.first(arglist__53775);
arglist__53775 = cljs.core.next(arglist__53775);
var G__52898 = cljs.core.first(arglist__53775);
arglist__53775 = cljs.core.next(arglist__53775);
var G__52899 = cljs.core.first(arglist__53775);
arglist__53775 = cljs.core.next(arglist__53775);
var G__52900 = cljs.core.first(arglist__53775);
arglist__53775 = cljs.core.next(arglist__53775);
var G__52901 = cljs.core.first(arglist__53775);
arglist__53775 = cljs.core.next(arglist__53775);
var G__52902 = cljs.core.first(arglist__53775);
arglist__53775 = cljs.core.next(arglist__53775);
var G__52903 = cljs.core.first(arglist__53775);
arglist__53775 = cljs.core.next(arglist__53775);
var G__52904 = cljs.core.first(arglist__53775);
arglist__53775 = cljs.core.next(arglist__53775);
var G__52905 = cljs.core.first(arglist__53775);
var G__52906 = cljs.core.rest(arglist__53775);
return sci$impl$fns$fun_$_arity_16__delegate(G__52890,G__52891,G__52892,G__52893,G__52894,G__52895,G__52896,G__52897,G__52898,G__52899,G__52900,G__52901,G__52902,G__52903,G__52904,G__52905,G__52906);
});
sci$impl$fns$fun_$_arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_16__delegate;
return sci$impl$fns$fun_$_arity_16;
})()
;

break;
case (17):
var G__52960 = cljs.core._nth(params,(0));
var G__52961 = cljs.core._nth(params,(1));
var G__52962 = cljs.core._nth(params,(2));
var G__52963 = cljs.core._nth(params,(3));
var G__52964 = cljs.core._nth(params,(4));
var G__52965 = cljs.core._nth(params,(5));
var G__52966 = cljs.core._nth(params,(6));
var G__52967 = cljs.core._nth(params,(7));
var G__52968 = cljs.core._nth(params,(8));
var G__52969 = cljs.core._nth(params,(9));
var G__52970 = cljs.core._nth(params,(10));
var G__52971 = cljs.core._nth(params,(11));
var G__52972 = cljs.core._nth(params,(12));
var G__52973 = cljs.core._nth(params,(13));
var G__52974 = cljs.core._nth(params,(14));
var G__52975 = cljs.core._nth(params,(15));
var G__52976 = cljs.core._nth(params,(16));
return (function() { 
var sci$impl$fns$fun_$_arity_17__delegate = function (G__52942,G__52943,G__52944,G__52945,G__52946,G__52947,G__52948,G__52949,G__52950,G__52951,G__52952,G__52953,G__52954,G__52955,G__52956,G__52957,G__52958,G__52959){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52942);

(invoc_array[(1)] = G__52943);

(invoc_array[(2)] = G__52944);

(invoc_array[(3)] = G__52945);

(invoc_array[(4)] = G__52946);

(invoc_array[(5)] = G__52947);

(invoc_array[(6)] = G__52948);

(invoc_array[(7)] = G__52949);

(invoc_array[(8)] = G__52950);

(invoc_array[(9)] = G__52951);

(invoc_array[(10)] = G__52952);

(invoc_array[(11)] = G__52953);

(invoc_array[(12)] = G__52954);

(invoc_array[(13)] = G__52955);

(invoc_array[(14)] = G__52956);

(invoc_array[(15)] = G__52957);

(invoc_array[(16)] = G__52958);

(invoc_array[vararg_idx] = G__52959);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_17 = function (G__52942,G__52943,G__52944,G__52945,G__52946,G__52947,G__52948,G__52949,G__52950,G__52951,G__52952,G__52953,G__52954,G__52955,G__52956,G__52957,G__52958,var_args){
var G__52959 = null;
if (arguments.length > 17) {
var G__53786__i = 0, G__53786__a = new Array(arguments.length -  17);
while (G__53786__i < G__53786__a.length) {G__53786__a[G__53786__i] = arguments[G__53786__i + 17]; ++G__53786__i;}
  G__52959 = new cljs.core.IndexedSeq(G__53786__a,0,null);
} 
return sci$impl$fns$fun_$_arity_17__delegate.call(this,G__52942,G__52943,G__52944,G__52945,G__52946,G__52947,G__52948,G__52949,G__52950,G__52951,G__52952,G__52953,G__52954,G__52955,G__52956,G__52957,G__52958,G__52959);};
sci$impl$fns$fun_$_arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$fun_$_arity_17.cljs$lang$applyTo = (function (arglist__53787){
var G__52942 = cljs.core.first(arglist__53787);
arglist__53787 = cljs.core.next(arglist__53787);
var G__52943 = cljs.core.first(arglist__53787);
arglist__53787 = cljs.core.next(arglist__53787);
var G__52944 = cljs.core.first(arglist__53787);
arglist__53787 = cljs.core.next(arglist__53787);
var G__52945 = cljs.core.first(arglist__53787);
arglist__53787 = cljs.core.next(arglist__53787);
var G__52946 = cljs.core.first(arglist__53787);
arglist__53787 = cljs.core.next(arglist__53787);
var G__52947 = cljs.core.first(arglist__53787);
arglist__53787 = cljs.core.next(arglist__53787);
var G__52948 = cljs.core.first(arglist__53787);
arglist__53787 = cljs.core.next(arglist__53787);
var G__52949 = cljs.core.first(arglist__53787);
arglist__53787 = cljs.core.next(arglist__53787);
var G__52950 = cljs.core.first(arglist__53787);
arglist__53787 = cljs.core.next(arglist__53787);
var G__52951 = cljs.core.first(arglist__53787);
arglist__53787 = cljs.core.next(arglist__53787);
var G__52952 = cljs.core.first(arglist__53787);
arglist__53787 = cljs.core.next(arglist__53787);
var G__52953 = cljs.core.first(arglist__53787);
arglist__53787 = cljs.core.next(arglist__53787);
var G__52954 = cljs.core.first(arglist__53787);
arglist__53787 = cljs.core.next(arglist__53787);
var G__52955 = cljs.core.first(arglist__53787);
arglist__53787 = cljs.core.next(arglist__53787);
var G__52956 = cljs.core.first(arglist__53787);
arglist__53787 = cljs.core.next(arglist__53787);
var G__52957 = cljs.core.first(arglist__53787);
arglist__53787 = cljs.core.next(arglist__53787);
var G__52958 = cljs.core.first(arglist__53787);
var G__52959 = cljs.core.rest(arglist__53787);
return sci$impl$fns$fun_$_arity_17__delegate(G__52942,G__52943,G__52944,G__52945,G__52946,G__52947,G__52948,G__52949,G__52950,G__52951,G__52952,G__52953,G__52954,G__52955,G__52956,G__52957,G__52958,G__52959);
});
sci$impl$fns$fun_$_arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_17__delegate;
return sci$impl$fns$fun_$_arity_17;
})()
;

break;
case (18):
var G__53002 = cljs.core._nth(params,(0));
var G__53003 = cljs.core._nth(params,(1));
var G__53004 = cljs.core._nth(params,(2));
var G__53005 = cljs.core._nth(params,(3));
var G__53006 = cljs.core._nth(params,(4));
var G__53007 = cljs.core._nth(params,(5));
var G__53008 = cljs.core._nth(params,(6));
var G__53009 = cljs.core._nth(params,(7));
var G__53010 = cljs.core._nth(params,(8));
var G__53011 = cljs.core._nth(params,(9));
var G__53012 = cljs.core._nth(params,(10));
var G__53013 = cljs.core._nth(params,(11));
var G__53014 = cljs.core._nth(params,(12));
var G__53015 = cljs.core._nth(params,(13));
var G__53016 = cljs.core._nth(params,(14));
var G__53017 = cljs.core._nth(params,(15));
var G__53018 = cljs.core._nth(params,(16));
var G__53019 = cljs.core._nth(params,(17));
return (function() { 
var sci$impl$fns$fun_$_arity_18__delegate = function (G__52983,G__52984,G__52985,G__52986,G__52987,G__52988,G__52989,G__52990,G__52991,G__52992,G__52993,G__52994,G__52995,G__52996,G__52997,G__52998,G__52999,G__53000,G__53001){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52983);

(invoc_array[(1)] = G__52984);

(invoc_array[(2)] = G__52985);

(invoc_array[(3)] = G__52986);

(invoc_array[(4)] = G__52987);

(invoc_array[(5)] = G__52988);

(invoc_array[(6)] = G__52989);

(invoc_array[(7)] = G__52990);

(invoc_array[(8)] = G__52991);

(invoc_array[(9)] = G__52992);

(invoc_array[(10)] = G__52993);

(invoc_array[(11)] = G__52994);

(invoc_array[(12)] = G__52995);

(invoc_array[(13)] = G__52996);

(invoc_array[(14)] = G__52997);

(invoc_array[(15)] = G__52998);

(invoc_array[(16)] = G__52999);

(invoc_array[(17)] = G__53000);

(invoc_array[vararg_idx] = G__53001);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_18 = function (G__52983,G__52984,G__52985,G__52986,G__52987,G__52988,G__52989,G__52990,G__52991,G__52992,G__52993,G__52994,G__52995,G__52996,G__52997,G__52998,G__52999,G__53000,var_args){
var G__53001 = null;
if (arguments.length > 18) {
var G__53791__i = 0, G__53791__a = new Array(arguments.length -  18);
while (G__53791__i < G__53791__a.length) {G__53791__a[G__53791__i] = arguments[G__53791__i + 18]; ++G__53791__i;}
  G__53001 = new cljs.core.IndexedSeq(G__53791__a,0,null);
} 
return sci$impl$fns$fun_$_arity_18__delegate.call(this,G__52983,G__52984,G__52985,G__52986,G__52987,G__52988,G__52989,G__52990,G__52991,G__52992,G__52993,G__52994,G__52995,G__52996,G__52997,G__52998,G__52999,G__53000,G__53001);};
sci$impl$fns$fun_$_arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$fun_$_arity_18.cljs$lang$applyTo = (function (arglist__53794){
var G__52983 = cljs.core.first(arglist__53794);
arglist__53794 = cljs.core.next(arglist__53794);
var G__52984 = cljs.core.first(arglist__53794);
arglist__53794 = cljs.core.next(arglist__53794);
var G__52985 = cljs.core.first(arglist__53794);
arglist__53794 = cljs.core.next(arglist__53794);
var G__52986 = cljs.core.first(arglist__53794);
arglist__53794 = cljs.core.next(arglist__53794);
var G__52987 = cljs.core.first(arglist__53794);
arglist__53794 = cljs.core.next(arglist__53794);
var G__52988 = cljs.core.first(arglist__53794);
arglist__53794 = cljs.core.next(arglist__53794);
var G__52989 = cljs.core.first(arglist__53794);
arglist__53794 = cljs.core.next(arglist__53794);
var G__52990 = cljs.core.first(arglist__53794);
arglist__53794 = cljs.core.next(arglist__53794);
var G__52991 = cljs.core.first(arglist__53794);
arglist__53794 = cljs.core.next(arglist__53794);
var G__52992 = cljs.core.first(arglist__53794);
arglist__53794 = cljs.core.next(arglist__53794);
var G__52993 = cljs.core.first(arglist__53794);
arglist__53794 = cljs.core.next(arglist__53794);
var G__52994 = cljs.core.first(arglist__53794);
arglist__53794 = cljs.core.next(arglist__53794);
var G__52995 = cljs.core.first(arglist__53794);
arglist__53794 = cljs.core.next(arglist__53794);
var G__52996 = cljs.core.first(arglist__53794);
arglist__53794 = cljs.core.next(arglist__53794);
var G__52997 = cljs.core.first(arglist__53794);
arglist__53794 = cljs.core.next(arglist__53794);
var G__52998 = cljs.core.first(arglist__53794);
arglist__53794 = cljs.core.next(arglist__53794);
var G__52999 = cljs.core.first(arglist__53794);
arglist__53794 = cljs.core.next(arglist__53794);
var G__53000 = cljs.core.first(arglist__53794);
var G__53001 = cljs.core.rest(arglist__53794);
return sci$impl$fns$fun_$_arity_18__delegate(G__52983,G__52984,G__52985,G__52986,G__52987,G__52988,G__52989,G__52990,G__52991,G__52992,G__52993,G__52994,G__52995,G__52996,G__52997,G__52998,G__52999,G__53000,G__53001);
});
sci$impl$fns$fun_$_arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_18__delegate;
return sci$impl$fns$fun_$_arity_18;
})()
;

break;
case (19):
var G__53042 = cljs.core._nth(params,(0));
var G__53043 = cljs.core._nth(params,(1));
var G__53044 = cljs.core._nth(params,(2));
var G__53045 = cljs.core._nth(params,(3));
var G__53046 = cljs.core._nth(params,(4));
var G__53047 = cljs.core._nth(params,(5));
var G__53048 = cljs.core._nth(params,(6));
var G__53049 = cljs.core._nth(params,(7));
var G__53050 = cljs.core._nth(params,(8));
var G__53051 = cljs.core._nth(params,(9));
var G__53052 = cljs.core._nth(params,(10));
var G__53053 = cljs.core._nth(params,(11));
var G__53054 = cljs.core._nth(params,(12));
var G__53055 = cljs.core._nth(params,(13));
var G__53056 = cljs.core._nth(params,(14));
var G__53057 = cljs.core._nth(params,(15));
var G__53058 = cljs.core._nth(params,(16));
var G__53059 = cljs.core._nth(params,(17));
var G__53060 = cljs.core._nth(params,(18));
return (function() { 
var sci$impl$fns$fun_$_arity_19__delegate = function (G__53022,G__53023,G__53024,G__53025,G__53026,G__53027,G__53028,G__53029,G__53030,G__53031,G__53032,G__53033,G__53034,G__53035,G__53036,G__53037,G__53038,G__53039,G__53040,G__53041){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53022);

(invoc_array[(1)] = G__53023);

(invoc_array[(2)] = G__53024);

(invoc_array[(3)] = G__53025);

(invoc_array[(4)] = G__53026);

(invoc_array[(5)] = G__53027);

(invoc_array[(6)] = G__53028);

(invoc_array[(7)] = G__53029);

(invoc_array[(8)] = G__53030);

(invoc_array[(9)] = G__53031);

(invoc_array[(10)] = G__53032);

(invoc_array[(11)] = G__53033);

(invoc_array[(12)] = G__53034);

(invoc_array[(13)] = G__53035);

(invoc_array[(14)] = G__53036);

(invoc_array[(15)] = G__53037);

(invoc_array[(16)] = G__53038);

(invoc_array[(17)] = G__53039);

(invoc_array[(18)] = G__53040);

(invoc_array[vararg_idx] = G__53041);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_19 = function (G__53022,G__53023,G__53024,G__53025,G__53026,G__53027,G__53028,G__53029,G__53030,G__53031,G__53032,G__53033,G__53034,G__53035,G__53036,G__53037,G__53038,G__53039,G__53040,var_args){
var G__53041 = null;
if (arguments.length > 19) {
var G__53799__i = 0, G__53799__a = new Array(arguments.length -  19);
while (G__53799__i < G__53799__a.length) {G__53799__a[G__53799__i] = arguments[G__53799__i + 19]; ++G__53799__i;}
  G__53041 = new cljs.core.IndexedSeq(G__53799__a,0,null);
} 
return sci$impl$fns$fun_$_arity_19__delegate.call(this,G__53022,G__53023,G__53024,G__53025,G__53026,G__53027,G__53028,G__53029,G__53030,G__53031,G__53032,G__53033,G__53034,G__53035,G__53036,G__53037,G__53038,G__53039,G__53040,G__53041);};
sci$impl$fns$fun_$_arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$fun_$_arity_19.cljs$lang$applyTo = (function (arglist__53800){
var G__53022 = cljs.core.first(arglist__53800);
arglist__53800 = cljs.core.next(arglist__53800);
var G__53023 = cljs.core.first(arglist__53800);
arglist__53800 = cljs.core.next(arglist__53800);
var G__53024 = cljs.core.first(arglist__53800);
arglist__53800 = cljs.core.next(arglist__53800);
var G__53025 = cljs.core.first(arglist__53800);
arglist__53800 = cljs.core.next(arglist__53800);
var G__53026 = cljs.core.first(arglist__53800);
arglist__53800 = cljs.core.next(arglist__53800);
var G__53027 = cljs.core.first(arglist__53800);
arglist__53800 = cljs.core.next(arglist__53800);
var G__53028 = cljs.core.first(arglist__53800);
arglist__53800 = cljs.core.next(arglist__53800);
var G__53029 = cljs.core.first(arglist__53800);
arglist__53800 = cljs.core.next(arglist__53800);
var G__53030 = cljs.core.first(arglist__53800);
arglist__53800 = cljs.core.next(arglist__53800);
var G__53031 = cljs.core.first(arglist__53800);
arglist__53800 = cljs.core.next(arglist__53800);
var G__53032 = cljs.core.first(arglist__53800);
arglist__53800 = cljs.core.next(arglist__53800);
var G__53033 = cljs.core.first(arglist__53800);
arglist__53800 = cljs.core.next(arglist__53800);
var G__53034 = cljs.core.first(arglist__53800);
arglist__53800 = cljs.core.next(arglist__53800);
var G__53035 = cljs.core.first(arglist__53800);
arglist__53800 = cljs.core.next(arglist__53800);
var G__53036 = cljs.core.first(arglist__53800);
arglist__53800 = cljs.core.next(arglist__53800);
var G__53037 = cljs.core.first(arglist__53800);
arglist__53800 = cljs.core.next(arglist__53800);
var G__53038 = cljs.core.first(arglist__53800);
arglist__53800 = cljs.core.next(arglist__53800);
var G__53039 = cljs.core.first(arglist__53800);
arglist__53800 = cljs.core.next(arglist__53800);
var G__53040 = cljs.core.first(arglist__53800);
var G__53041 = cljs.core.rest(arglist__53800);
return sci$impl$fns$fun_$_arity_19__delegate(G__53022,G__53023,G__53024,G__53025,G__53026,G__53027,G__53028,G__53029,G__53030,G__53031,G__53032,G__53033,G__53034,G__53035,G__53036,G__53037,G__53038,G__53039,G__53040,G__53041);
});
sci$impl$fns$fun_$_arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_19__delegate;
return sci$impl$fns$fun_$_arity_19;
})()
;

break;
case (20):
var G__53084 = cljs.core._nth(params,(0));
var G__53085 = cljs.core._nth(params,(1));
var G__53086 = cljs.core._nth(params,(2));
var G__53087 = cljs.core._nth(params,(3));
var G__53088 = cljs.core._nth(params,(4));
var G__53089 = cljs.core._nth(params,(5));
var G__53090 = cljs.core._nth(params,(6));
var G__53091 = cljs.core._nth(params,(7));
var G__53092 = cljs.core._nth(params,(8));
var G__53093 = cljs.core._nth(params,(9));
var G__53094 = cljs.core._nth(params,(10));
var G__53095 = cljs.core._nth(params,(11));
var G__53096 = cljs.core._nth(params,(12));
var G__53097 = cljs.core._nth(params,(13));
var G__53098 = cljs.core._nth(params,(14));
var G__53099 = cljs.core._nth(params,(15));
var G__53100 = cljs.core._nth(params,(16));
var G__53101 = cljs.core._nth(params,(17));
var G__53103 = cljs.core._nth(params,(18));
var G__53104 = cljs.core._nth(params,(19));
return (function() { 
var sci$impl$fns$fun_$_arity_20__delegate = function (G__53063,G__53064,G__53065,G__53066,G__53067,G__53068,G__53069,G__53070,G__53071,G__53072,G__53073,G__53074,G__53075,G__53076,G__53077,G__53078,G__53079,G__53080,G__53081,G__53082,G__53083){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53063);

(invoc_array[(1)] = G__53064);

(invoc_array[(2)] = G__53065);

(invoc_array[(3)] = G__53066);

(invoc_array[(4)] = G__53067);

(invoc_array[(5)] = G__53068);

(invoc_array[(6)] = G__53069);

(invoc_array[(7)] = G__53070);

(invoc_array[(8)] = G__53071);

(invoc_array[(9)] = G__53072);

(invoc_array[(10)] = G__53073);

(invoc_array[(11)] = G__53074);

(invoc_array[(12)] = G__53075);

(invoc_array[(13)] = G__53076);

(invoc_array[(14)] = G__53077);

(invoc_array[(15)] = G__53078);

(invoc_array[(16)] = G__53079);

(invoc_array[(17)] = G__53080);

(invoc_array[(18)] = G__53081);

(invoc_array[(19)] = G__53082);

(invoc_array[vararg_idx] = G__53083);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
};
var sci$impl$fns$fun_$_arity_20 = function (G__53063,G__53064,G__53065,G__53066,G__53067,G__53068,G__53069,G__53070,G__53071,G__53072,G__53073,G__53074,G__53075,G__53076,G__53077,G__53078,G__53079,G__53080,G__53081,G__53082,var_args){
var G__53083 = null;
if (arguments.length > 20) {
var G__53804__i = 0, G__53804__a = new Array(arguments.length -  20);
while (G__53804__i < G__53804__a.length) {G__53804__a[G__53804__i] = arguments[G__53804__i + 20]; ++G__53804__i;}
  G__53083 = new cljs.core.IndexedSeq(G__53804__a,0,null);
} 
return sci$impl$fns$fun_$_arity_20__delegate.call(this,G__53063,G__53064,G__53065,G__53066,G__53067,G__53068,G__53069,G__53070,G__53071,G__53072,G__53073,G__53074,G__53075,G__53076,G__53077,G__53078,G__53079,G__53080,G__53081,G__53082,G__53083);};
sci$impl$fns$fun_$_arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$fun_$_arity_20.cljs$lang$applyTo = (function (arglist__53805){
var G__53063 = cljs.core.first(arglist__53805);
arglist__53805 = cljs.core.next(arglist__53805);
var G__53064 = cljs.core.first(arglist__53805);
arglist__53805 = cljs.core.next(arglist__53805);
var G__53065 = cljs.core.first(arglist__53805);
arglist__53805 = cljs.core.next(arglist__53805);
var G__53066 = cljs.core.first(arglist__53805);
arglist__53805 = cljs.core.next(arglist__53805);
var G__53067 = cljs.core.first(arglist__53805);
arglist__53805 = cljs.core.next(arglist__53805);
var G__53068 = cljs.core.first(arglist__53805);
arglist__53805 = cljs.core.next(arglist__53805);
var G__53069 = cljs.core.first(arglist__53805);
arglist__53805 = cljs.core.next(arglist__53805);
var G__53070 = cljs.core.first(arglist__53805);
arglist__53805 = cljs.core.next(arglist__53805);
var G__53071 = cljs.core.first(arglist__53805);
arglist__53805 = cljs.core.next(arglist__53805);
var G__53072 = cljs.core.first(arglist__53805);
arglist__53805 = cljs.core.next(arglist__53805);
var G__53073 = cljs.core.first(arglist__53805);
arglist__53805 = cljs.core.next(arglist__53805);
var G__53074 = cljs.core.first(arglist__53805);
arglist__53805 = cljs.core.next(arglist__53805);
var G__53075 = cljs.core.first(arglist__53805);
arglist__53805 = cljs.core.next(arglist__53805);
var G__53076 = cljs.core.first(arglist__53805);
arglist__53805 = cljs.core.next(arglist__53805);
var G__53077 = cljs.core.first(arglist__53805);
arglist__53805 = cljs.core.next(arglist__53805);
var G__53078 = cljs.core.first(arglist__53805);
arglist__53805 = cljs.core.next(arglist__53805);
var G__53079 = cljs.core.first(arglist__53805);
arglist__53805 = cljs.core.next(arglist__53805);
var G__53080 = cljs.core.first(arglist__53805);
arglist__53805 = cljs.core.next(arglist__53805);
var G__53081 = cljs.core.first(arglist__53805);
arglist__53805 = cljs.core.next(arglist__53805);
var G__53082 = cljs.core.first(arglist__53805);
var G__53083 = cljs.core.rest(arglist__53805);
return sci$impl$fns$fun_$_arity_20__delegate(G__53063,G__53064,G__53065,G__53066,G__53067,G__53068,G__53069,G__53070,G__53071,G__53072,G__53073,G__53074,G__53075,G__53076,G__53077,G__53078,G__53079,G__53080,G__53081,G__53082,G__53083);
});
sci$impl$fns$fun_$_arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_20__delegate;
return sci$impl$fns$fun_$_arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52368)].join('')));

}
})():(function (){var G__53123 = (fixed_arity | (0));
switch (G__53123) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__7886__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7886__auto__)){
continue;
} else {
return ret__7886__auto__;
}
break;
}
});

break;
case (1):
var G__53128 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__53127){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53127);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
});

break;
case (2):
var G__53132 = cljs.core._nth(params,(0));
var G__53133 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__53130,G__53131){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53130);

(invoc_array[(1)] = G__53131);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
});

break;
case (3):
var G__53137 = cljs.core._nth(params,(0));
var G__53138 = cljs.core._nth(params,(1));
var G__53139 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__53134,G__53135,G__53136){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53134);

(invoc_array[(1)] = G__53135);

(invoc_array[(2)] = G__53136);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
});

break;
case (4):
var G__53152 = cljs.core._nth(params,(0));
var G__53153 = cljs.core._nth(params,(1));
var G__53154 = cljs.core._nth(params,(2));
var G__53155 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__53148,G__53149,G__53150,G__53151){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53148);

(invoc_array[(1)] = G__53149);

(invoc_array[(2)] = G__53150);

(invoc_array[(3)] = G__53151);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
});

break;
case (5):
var G__53166 = cljs.core._nth(params,(0));
var G__53167 = cljs.core._nth(params,(1));
var G__53168 = cljs.core._nth(params,(2));
var G__53169 = cljs.core._nth(params,(3));
var G__53170 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__53161,G__53162,G__53163,G__53164,G__53165){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53161);

(invoc_array[(1)] = G__53162);

(invoc_array[(2)] = G__53163);

(invoc_array[(3)] = G__53164);

(invoc_array[(4)] = G__53165);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
});

break;
case (6):
var G__53188 = cljs.core._nth(params,(0));
var G__53189 = cljs.core._nth(params,(1));
var G__53190 = cljs.core._nth(params,(2));
var G__53191 = cljs.core._nth(params,(3));
var G__53194 = cljs.core._nth(params,(4));
var G__53195 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__53182,G__53183,G__53184,G__53185,G__53186,G__53187){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53182);

(invoc_array[(1)] = G__53183);

(invoc_array[(2)] = G__53184);

(invoc_array[(3)] = G__53185);

(invoc_array[(4)] = G__53186);

(invoc_array[(5)] = G__53187);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
});

break;
case (7):
var G__53209 = cljs.core._nth(params,(0));
var G__53210 = cljs.core._nth(params,(1));
var G__53211 = cljs.core._nth(params,(2));
var G__53212 = cljs.core._nth(params,(3));
var G__53213 = cljs.core._nth(params,(4));
var G__53214 = cljs.core._nth(params,(5));
var G__53215 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__53202,G__53203,G__53204,G__53205,G__53206,G__53207,G__53208){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53202);

(invoc_array[(1)] = G__53203);

(invoc_array[(2)] = G__53204);

(invoc_array[(3)] = G__53205);

(invoc_array[(4)] = G__53206);

(invoc_array[(5)] = G__53207);

(invoc_array[(6)] = G__53208);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
});

break;
case (8):
var G__53231 = cljs.core._nth(params,(0));
var G__53232 = cljs.core._nth(params,(1));
var G__53233 = cljs.core._nth(params,(2));
var G__53234 = cljs.core._nth(params,(3));
var G__53235 = cljs.core._nth(params,(4));
var G__53236 = cljs.core._nth(params,(5));
var G__53237 = cljs.core._nth(params,(6));
var G__53238 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__53223,G__53224,G__53225,G__53226,G__53227,G__53228,G__53229,G__53230){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53223);

(invoc_array[(1)] = G__53224);

(invoc_array[(2)] = G__53225);

(invoc_array[(3)] = G__53226);

(invoc_array[(4)] = G__53227);

(invoc_array[(5)] = G__53228);

(invoc_array[(6)] = G__53229);

(invoc_array[(7)] = G__53230);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
});

break;
case (9):
var G__53250 = cljs.core._nth(params,(0));
var G__53251 = cljs.core._nth(params,(1));
var G__53252 = cljs.core._nth(params,(2));
var G__53253 = cljs.core._nth(params,(3));
var G__53254 = cljs.core._nth(params,(4));
var G__53255 = cljs.core._nth(params,(5));
var G__53256 = cljs.core._nth(params,(6));
var G__53257 = cljs.core._nth(params,(7));
var G__53258 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__53241,G__53242,G__53243,G__53244,G__53245,G__53246,G__53247,G__53248,G__53249){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53241);

(invoc_array[(1)] = G__53242);

(invoc_array[(2)] = G__53243);

(invoc_array[(3)] = G__53244);

(invoc_array[(4)] = G__53245);

(invoc_array[(5)] = G__53246);

(invoc_array[(6)] = G__53247);

(invoc_array[(7)] = G__53248);

(invoc_array[(8)] = G__53249);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
});

break;
case (10):
var G__53269 = cljs.core._nth(params,(0));
var G__53270 = cljs.core._nth(params,(1));
var G__53271 = cljs.core._nth(params,(2));
var G__53272 = cljs.core._nth(params,(3));
var G__53273 = cljs.core._nth(params,(4));
var G__53274 = cljs.core._nth(params,(5));
var G__53275 = cljs.core._nth(params,(6));
var G__53276 = cljs.core._nth(params,(7));
var G__53277 = cljs.core._nth(params,(8));
var G__53278 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__53259,G__53260,G__53261,G__53262,G__53263,G__53264,G__53265,G__53266,G__53267,G__53268){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53259);

(invoc_array[(1)] = G__53260);

(invoc_array[(2)] = G__53261);

(invoc_array[(3)] = G__53262);

(invoc_array[(4)] = G__53263);

(invoc_array[(5)] = G__53264);

(invoc_array[(6)] = G__53265);

(invoc_array[(7)] = G__53266);

(invoc_array[(8)] = G__53267);

(invoc_array[(9)] = G__53268);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
});

break;
case (11):
var G__53295 = cljs.core._nth(params,(0));
var G__53296 = cljs.core._nth(params,(1));
var G__53297 = cljs.core._nth(params,(2));
var G__53298 = cljs.core._nth(params,(3));
var G__53299 = cljs.core._nth(params,(4));
var G__53300 = cljs.core._nth(params,(5));
var G__53301 = cljs.core._nth(params,(6));
var G__53302 = cljs.core._nth(params,(7));
var G__53303 = cljs.core._nth(params,(8));
var G__53304 = cljs.core._nth(params,(9));
var G__53305 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__53284,G__53285,G__53286,G__53287,G__53288,G__53289,G__53290,G__53291,G__53292,G__53293,G__53294){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53284);

(invoc_array[(1)] = G__53285);

(invoc_array[(2)] = G__53286);

(invoc_array[(3)] = G__53287);

(invoc_array[(4)] = G__53288);

(invoc_array[(5)] = G__53289);

(invoc_array[(6)] = G__53290);

(invoc_array[(7)] = G__53291);

(invoc_array[(8)] = G__53292);

(invoc_array[(9)] = G__53293);

(invoc_array[(10)] = G__53294);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
});

break;
case (12):
var G__53321 = cljs.core._nth(params,(0));
var G__53322 = cljs.core._nth(params,(1));
var G__53323 = cljs.core._nth(params,(2));
var G__53324 = cljs.core._nth(params,(3));
var G__53325 = cljs.core._nth(params,(4));
var G__53326 = cljs.core._nth(params,(5));
var G__53327 = cljs.core._nth(params,(6));
var G__53328 = cljs.core._nth(params,(7));
var G__53329 = cljs.core._nth(params,(8));
var G__53330 = cljs.core._nth(params,(9));
var G__53331 = cljs.core._nth(params,(10));
var G__53332 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__53309,G__53310,G__53311,G__53312,G__53313,G__53314,G__53315,G__53316,G__53317,G__53318,G__53319,G__53320){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53309);

(invoc_array[(1)] = G__53310);

(invoc_array[(2)] = G__53311);

(invoc_array[(3)] = G__53312);

(invoc_array[(4)] = G__53313);

(invoc_array[(5)] = G__53314);

(invoc_array[(6)] = G__53315);

(invoc_array[(7)] = G__53316);

(invoc_array[(8)] = G__53317);

(invoc_array[(9)] = G__53318);

(invoc_array[(10)] = G__53319);

(invoc_array[(11)] = G__53320);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
});

break;
case (13):
var G__53352 = cljs.core._nth(params,(0));
var G__53353 = cljs.core._nth(params,(1));
var G__53354 = cljs.core._nth(params,(2));
var G__53355 = cljs.core._nth(params,(3));
var G__53356 = cljs.core._nth(params,(4));
var G__53357 = cljs.core._nth(params,(5));
var G__53358 = cljs.core._nth(params,(6));
var G__53359 = cljs.core._nth(params,(7));
var G__53360 = cljs.core._nth(params,(8));
var G__53361 = cljs.core._nth(params,(9));
var G__53362 = cljs.core._nth(params,(10));
var G__53363 = cljs.core._nth(params,(11));
var G__53364 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__53339,G__53340,G__53341,G__53342,G__53343,G__53344,G__53345,G__53346,G__53347,G__53348,G__53349,G__53350,G__53351){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53339);

(invoc_array[(1)] = G__53340);

(invoc_array[(2)] = G__53341);

(invoc_array[(3)] = G__53342);

(invoc_array[(4)] = G__53343);

(invoc_array[(5)] = G__53344);

(invoc_array[(6)] = G__53345);

(invoc_array[(7)] = G__53346);

(invoc_array[(8)] = G__53347);

(invoc_array[(9)] = G__53348);

(invoc_array[(10)] = G__53349);

(invoc_array[(11)] = G__53350);

(invoc_array[(12)] = G__53351);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
});

break;
case (14):
var G__53381 = cljs.core._nth(params,(0));
var G__53382 = cljs.core._nth(params,(1));
var G__53383 = cljs.core._nth(params,(2));
var G__53384 = cljs.core._nth(params,(3));
var G__53385 = cljs.core._nth(params,(4));
var G__53386 = cljs.core._nth(params,(5));
var G__53387 = cljs.core._nth(params,(6));
var G__53388 = cljs.core._nth(params,(7));
var G__53389 = cljs.core._nth(params,(8));
var G__53390 = cljs.core._nth(params,(9));
var G__53391 = cljs.core._nth(params,(10));
var G__53392 = cljs.core._nth(params,(11));
var G__53393 = cljs.core._nth(params,(12));
var G__53394 = cljs.core._nth(params,(13));
return (function sci$impl$fns$fun_$_arity_14(G__53367,G__53368,G__53369,G__53370,G__53371,G__53372,G__53373,G__53374,G__53375,G__53376,G__53377,G__53378,G__53379,G__53380){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53367);

(invoc_array[(1)] = G__53368);

(invoc_array[(2)] = G__53369);

(invoc_array[(3)] = G__53370);

(invoc_array[(4)] = G__53371);

(invoc_array[(5)] = G__53372);

(invoc_array[(6)] = G__53373);

(invoc_array[(7)] = G__53374);

(invoc_array[(8)] = G__53375);

(invoc_array[(9)] = G__53376);

(invoc_array[(10)] = G__53377);

(invoc_array[(11)] = G__53378);

(invoc_array[(12)] = G__53379);

(invoc_array[(13)] = G__53380);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
});

break;
case (15):
var G__53415 = cljs.core._nth(params,(0));
var G__53416 = cljs.core._nth(params,(1));
var G__53417 = cljs.core._nth(params,(2));
var G__53418 = cljs.core._nth(params,(3));
var G__53419 = cljs.core._nth(params,(4));
var G__53420 = cljs.core._nth(params,(5));
var G__53421 = cljs.core._nth(params,(6));
var G__53422 = cljs.core._nth(params,(7));
var G__53423 = cljs.core._nth(params,(8));
var G__53424 = cljs.core._nth(params,(9));
var G__53425 = cljs.core._nth(params,(10));
var G__53426 = cljs.core._nth(params,(11));
var G__53427 = cljs.core._nth(params,(12));
var G__53428 = cljs.core._nth(params,(13));
var G__53429 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__53400,G__53401,G__53402,G__53403,G__53404,G__53405,G__53406,G__53407,G__53408,G__53409,G__53410,G__53411,G__53412,G__53413,G__53414){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53400);

(invoc_array[(1)] = G__53401);

(invoc_array[(2)] = G__53402);

(invoc_array[(3)] = G__53403);

(invoc_array[(4)] = G__53404);

(invoc_array[(5)] = G__53405);

(invoc_array[(6)] = G__53406);

(invoc_array[(7)] = G__53407);

(invoc_array[(8)] = G__53408);

(invoc_array[(9)] = G__53409);

(invoc_array[(10)] = G__53410);

(invoc_array[(11)] = G__53411);

(invoc_array[(12)] = G__53412);

(invoc_array[(13)] = G__53413);

(invoc_array[(14)] = G__53414);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
});

break;
case (16):
var G__53447 = cljs.core._nth(params,(0));
var G__53448 = cljs.core._nth(params,(1));
var G__53449 = cljs.core._nth(params,(2));
var G__53450 = cljs.core._nth(params,(3));
var G__53451 = cljs.core._nth(params,(4));
var G__53452 = cljs.core._nth(params,(5));
var G__53453 = cljs.core._nth(params,(6));
var G__53454 = cljs.core._nth(params,(7));
var G__53455 = cljs.core._nth(params,(8));
var G__53456 = cljs.core._nth(params,(9));
var G__53457 = cljs.core._nth(params,(10));
var G__53458 = cljs.core._nth(params,(11));
var G__53459 = cljs.core._nth(params,(12));
var G__53460 = cljs.core._nth(params,(13));
var G__53461 = cljs.core._nth(params,(14));
var G__53462 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__53431,G__53432,G__53433,G__53434,G__53435,G__53436,G__53437,G__53438,G__53439,G__53440,G__53441,G__53442,G__53443,G__53444,G__53445,G__53446){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53431);

(invoc_array[(1)] = G__53432);

(invoc_array[(2)] = G__53433);

(invoc_array[(3)] = G__53434);

(invoc_array[(4)] = G__53435);

(invoc_array[(5)] = G__53436);

(invoc_array[(6)] = G__53437);

(invoc_array[(7)] = G__53438);

(invoc_array[(8)] = G__53439);

(invoc_array[(9)] = G__53440);

(invoc_array[(10)] = G__53441);

(invoc_array[(11)] = G__53442);

(invoc_array[(12)] = G__53443);

(invoc_array[(13)] = G__53444);

(invoc_array[(14)] = G__53445);

(invoc_array[(15)] = G__53446);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
});

break;
case (17):
var G__53490 = cljs.core._nth(params,(0));
var G__53491 = cljs.core._nth(params,(1));
var G__53492 = cljs.core._nth(params,(2));
var G__53493 = cljs.core._nth(params,(3));
var G__53494 = cljs.core._nth(params,(4));
var G__53495 = cljs.core._nth(params,(5));
var G__53496 = cljs.core._nth(params,(6));
var G__53497 = cljs.core._nth(params,(7));
var G__53498 = cljs.core._nth(params,(8));
var G__53499 = cljs.core._nth(params,(9));
var G__53500 = cljs.core._nth(params,(10));
var G__53501 = cljs.core._nth(params,(11));
var G__53502 = cljs.core._nth(params,(12));
var G__53503 = cljs.core._nth(params,(13));
var G__53504 = cljs.core._nth(params,(14));
var G__53505 = cljs.core._nth(params,(15));
var G__53506 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__53473,G__53474,G__53475,G__53476,G__53477,G__53478,G__53479,G__53480,G__53481,G__53482,G__53483,G__53484,G__53485,G__53486,G__53487,G__53488,G__53489){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53473);

(invoc_array[(1)] = G__53474);

(invoc_array[(2)] = G__53475);

(invoc_array[(3)] = G__53476);

(invoc_array[(4)] = G__53477);

(invoc_array[(5)] = G__53478);

(invoc_array[(6)] = G__53479);

(invoc_array[(7)] = G__53480);

(invoc_array[(8)] = G__53481);

(invoc_array[(9)] = G__53482);

(invoc_array[(10)] = G__53483);

(invoc_array[(11)] = G__53484);

(invoc_array[(12)] = G__53485);

(invoc_array[(13)] = G__53486);

(invoc_array[(14)] = G__53487);

(invoc_array[(15)] = G__53488);

(invoc_array[(16)] = G__53489);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
});

break;
case (18):
var G__53536 = cljs.core._nth(params,(0));
var G__53537 = cljs.core._nth(params,(1));
var G__53538 = cljs.core._nth(params,(2));
var G__53539 = cljs.core._nth(params,(3));
var G__53540 = cljs.core._nth(params,(4));
var G__53541 = cljs.core._nth(params,(5));
var G__53542 = cljs.core._nth(params,(6));
var G__53543 = cljs.core._nth(params,(7));
var G__53544 = cljs.core._nth(params,(8));
var G__53545 = cljs.core._nth(params,(9));
var G__53546 = cljs.core._nth(params,(10));
var G__53547 = cljs.core._nth(params,(11));
var G__53548 = cljs.core._nth(params,(12));
var G__53549 = cljs.core._nth(params,(13));
var G__53550 = cljs.core._nth(params,(14));
var G__53551 = cljs.core._nth(params,(15));
var G__53552 = cljs.core._nth(params,(16));
var G__53553 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__53518,G__53519,G__53520,G__53521,G__53522,G__53523,G__53524,G__53525,G__53526,G__53527,G__53528,G__53529,G__53530,G__53531,G__53532,G__53533,G__53534,G__53535){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53518);

(invoc_array[(1)] = G__53519);

(invoc_array[(2)] = G__53520);

(invoc_array[(3)] = G__53521);

(invoc_array[(4)] = G__53522);

(invoc_array[(5)] = G__53523);

(invoc_array[(6)] = G__53524);

(invoc_array[(7)] = G__53525);

(invoc_array[(8)] = G__53526);

(invoc_array[(9)] = G__53527);

(invoc_array[(10)] = G__53528);

(invoc_array[(11)] = G__53529);

(invoc_array[(12)] = G__53530);

(invoc_array[(13)] = G__53531);

(invoc_array[(14)] = G__53532);

(invoc_array[(15)] = G__53533);

(invoc_array[(16)] = G__53534);

(invoc_array[(17)] = G__53535);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
});

break;
case (19):
var G__53580 = cljs.core._nth(params,(0));
var G__53581 = cljs.core._nth(params,(1));
var G__53582 = cljs.core._nth(params,(2));
var G__53583 = cljs.core._nth(params,(3));
var G__53584 = cljs.core._nth(params,(4));
var G__53585 = cljs.core._nth(params,(5));
var G__53586 = cljs.core._nth(params,(6));
var G__53587 = cljs.core._nth(params,(7));
var G__53588 = cljs.core._nth(params,(8));
var G__53589 = cljs.core._nth(params,(9));
var G__53590 = cljs.core._nth(params,(10));
var G__53591 = cljs.core._nth(params,(11));
var G__53592 = cljs.core._nth(params,(12));
var G__53593 = cljs.core._nth(params,(13));
var G__53594 = cljs.core._nth(params,(14));
var G__53595 = cljs.core._nth(params,(15));
var G__53596 = cljs.core._nth(params,(16));
var G__53597 = cljs.core._nth(params,(17));
var G__53598 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__53561,G__53562,G__53563,G__53564,G__53565,G__53566,G__53567,G__53568,G__53569,G__53570,G__53571,G__53572,G__53573,G__53574,G__53575,G__53576,G__53577,G__53578,G__53579){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53561);

(invoc_array[(1)] = G__53562);

(invoc_array[(2)] = G__53563);

(invoc_array[(3)] = G__53564);

(invoc_array[(4)] = G__53565);

(invoc_array[(5)] = G__53566);

(invoc_array[(6)] = G__53567);

(invoc_array[(7)] = G__53568);

(invoc_array[(8)] = G__53569);

(invoc_array[(9)] = G__53570);

(invoc_array[(10)] = G__53571);

(invoc_array[(11)] = G__53572);

(invoc_array[(12)] = G__53573);

(invoc_array[(13)] = G__53574);

(invoc_array[(14)] = G__53575);

(invoc_array[(15)] = G__53576);

(invoc_array[(16)] = G__53577);

(invoc_array[(17)] = G__53578);

(invoc_array[(18)] = G__53579);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
});

break;
case (20):
var G__53638 = cljs.core._nth(params,(0));
var G__53639 = cljs.core._nth(params,(1));
var G__53640 = cljs.core._nth(params,(2));
var G__53641 = cljs.core._nth(params,(3));
var G__53642 = cljs.core._nth(params,(4));
var G__53644 = cljs.core._nth(params,(5));
var G__53645 = cljs.core._nth(params,(6));
var G__53646 = cljs.core._nth(params,(7));
var G__53647 = cljs.core._nth(params,(8));
var G__53648 = cljs.core._nth(params,(9));
var G__53649 = cljs.core._nth(params,(10));
var G__53650 = cljs.core._nth(params,(11));
var G__53651 = cljs.core._nth(params,(12));
var G__53652 = cljs.core._nth(params,(13));
var G__53653 = cljs.core._nth(params,(14));
var G__53654 = cljs.core._nth(params,(15));
var G__53655 = cljs.core._nth(params,(16));
var G__53656 = cljs.core._nth(params,(17));
var G__53657 = cljs.core._nth(params,(18));
var G__53658 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__53618,G__53619,G__53620,G__53621,G__53622,G__53623,G__53624,G__53625,G__53626,G__53627,G__53628,G__53629,G__53630,G__53631,G__53632,G__53633,G__53634,G__53635,G__53636,G__53637){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53618);

(invoc_array[(1)] = G__53619);

(invoc_array[(2)] = G__53620);

(invoc_array[(3)] = G__53621);

(invoc_array[(4)] = G__53622);

(invoc_array[(5)] = G__53623);

(invoc_array[(6)] = G__53624);

(invoc_array[(7)] = G__53625);

(invoc_array[(8)] = G__53626);

(invoc_array[(9)] = G__53627);

(invoc_array[(10)] = G__53628);

(invoc_array[(11)] = G__53629);

(invoc_array[(12)] = G__53630);

(invoc_array[(13)] = G__53631);

(invoc_array[(14)] = G__53632);

(invoc_array[(15)] = G__53633);

(invoc_array[(16)] = G__53634);

(invoc_array[(17)] = G__53635);

(invoc_array[(18)] = G__53636);

(invoc_array[(19)] = G__53637);

while(true){
var ret__7887__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__7887__auto__)){
continue;
} else {
return ret__7887__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53123)].join('')));

}
})());
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,bindings,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun(ctx,enclosed_array,bindings,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_,bindings_fn){
var enclosed_array = (bindings_fn.cljs$core$IFn$_invoke$arity$1 ? bindings_fn.cljs$core$IFn$_invoke$arity$1(bindings) : bindings_fn.call(null,bindings));
var f = (cljs.core.truth_(single_arity)?sci.impl.fns.fun(ctx,enclosed_array,bindings,single_arity,fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map(ctx,enclosed_array,bindings,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__53865__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5802__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__53865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53866__i = 0, G__53866__a = new Array(arguments.length -  0);
while (G__53866__i < G__53866__a.length) {G__53866__a[G__53866__i] = arguments[G__53866__i + 0]; ++G__53866__i;}
  args = new cljs.core.IndexedSeq(G__53866__a,0,null);
} 
return G__53865__delegate.call(this,args);};
G__53865.cljs$lang$maxFixedArity = 0;
G__53865.cljs$lang$applyTo = (function (arglist__53867){
var args = cljs.core.seq(arglist__53867);
return G__53865__delegate(args);
});
G__53865.cljs$core$IFn$_invoke$arity$variadic = G__53865__delegate;
return G__53865;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__53683_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__53683_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","inner-fn","sci.impl/inner-fn",1663302998),f], 0));
})):f);
if(cljs.core.truth_(self_ref_QMARK_)){
(enclosed_array[(cljs.core.count(enclosed_array) - (1))] = f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
