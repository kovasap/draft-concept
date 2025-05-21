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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__52419 = (fixed_arity | (0));
switch (G__52419) {
case (0):
return (function() { 
var sci$impl$fns$fun_$_arity_0__delegate = function (G__52421){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__52421);

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
var G__52421 = null;
if (arguments.length > 0) {
var G__53688__i = 0, G__53688__a = new Array(arguments.length -  0);
while (G__53688__i < G__53688__a.length) {G__53688__a[G__53688__i] = arguments[G__53688__i + 0]; ++G__53688__i;}
  G__52421 = new cljs.core.IndexedSeq(G__53688__a,0,null);
} 
return sci$impl$fns$fun_$_arity_0__delegate.call(this,G__52421);};
sci$impl$fns$fun_$_arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_arity_0.cljs$lang$applyTo = (function (arglist__53689){
var G__52421 = cljs.core.seq(arglist__53689);
return sci$impl$fns$fun_$_arity_0__delegate(G__52421);
});
sci$impl$fns$fun_$_arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_0__delegate;
return sci$impl$fns$fun_$_arity_0;
})()
;

break;
case (1):
var G__52435 = cljs.core._nth(params,(0));
return (function() { 
var sci$impl$fns$fun_$_arity_1__delegate = function (G__52433,G__52434){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52433);

(invoc_array[vararg_idx] = G__52434);

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
var sci$impl$fns$fun_$_arity_1 = function (G__52433,var_args){
var G__52434 = null;
if (arguments.length > 1) {
var G__53691__i = 0, G__53691__a = new Array(arguments.length -  1);
while (G__53691__i < G__53691__a.length) {G__53691__a[G__53691__i] = arguments[G__53691__i + 1]; ++G__53691__i;}
  G__52434 = new cljs.core.IndexedSeq(G__53691__a,0,null);
} 
return sci$impl$fns$fun_$_arity_1__delegate.call(this,G__52433,G__52434);};
sci$impl$fns$fun_$_arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$fun_$_arity_1.cljs$lang$applyTo = (function (arglist__53692){
var G__52433 = cljs.core.first(arglist__53692);
var G__52434 = cljs.core.rest(arglist__53692);
return sci$impl$fns$fun_$_arity_1__delegate(G__52433,G__52434);
});
sci$impl$fns$fun_$_arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_1__delegate;
return sci$impl$fns$fun_$_arity_1;
})()
;

break;
case (2):
var G__52450 = cljs.core._nth(params,(0));
var G__52451 = cljs.core._nth(params,(1));
return (function() { 
var sci$impl$fns$fun_$_arity_2__delegate = function (G__52447,G__52448,G__52449){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52447);

(invoc_array[(1)] = G__52448);

(invoc_array[vararg_idx] = G__52449);

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
var sci$impl$fns$fun_$_arity_2 = function (G__52447,G__52448,var_args){
var G__52449 = null;
if (arguments.length > 2) {
var G__53693__i = 0, G__53693__a = new Array(arguments.length -  2);
while (G__53693__i < G__53693__a.length) {G__53693__a[G__53693__i] = arguments[G__53693__i + 2]; ++G__53693__i;}
  G__52449 = new cljs.core.IndexedSeq(G__53693__a,0,null);
} 
return sci$impl$fns$fun_$_arity_2__delegate.call(this,G__52447,G__52448,G__52449);};
sci$impl$fns$fun_$_arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$fun_$_arity_2.cljs$lang$applyTo = (function (arglist__53694){
var G__52447 = cljs.core.first(arglist__53694);
arglist__53694 = cljs.core.next(arglist__53694);
var G__52448 = cljs.core.first(arglist__53694);
var G__52449 = cljs.core.rest(arglist__53694);
return sci$impl$fns$fun_$_arity_2__delegate(G__52447,G__52448,G__52449);
});
sci$impl$fns$fun_$_arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_2__delegate;
return sci$impl$fns$fun_$_arity_2;
})()
;

break;
case (3):
var G__52463 = cljs.core._nth(params,(0));
var G__52464 = cljs.core._nth(params,(1));
var G__52466 = cljs.core._nth(params,(2));
return (function() { 
var sci$impl$fns$fun_$_arity_3__delegate = function (G__52459,G__52460,G__52461,G__52462){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52459);

(invoc_array[(1)] = G__52460);

(invoc_array[(2)] = G__52461);

(invoc_array[vararg_idx] = G__52462);

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
var sci$impl$fns$fun_$_arity_3 = function (G__52459,G__52460,G__52461,var_args){
var G__52462 = null;
if (arguments.length > 3) {
var G__53696__i = 0, G__53696__a = new Array(arguments.length -  3);
while (G__53696__i < G__53696__a.length) {G__53696__a[G__53696__i] = arguments[G__53696__i + 3]; ++G__53696__i;}
  G__52462 = new cljs.core.IndexedSeq(G__53696__a,0,null);
} 
return sci$impl$fns$fun_$_arity_3__delegate.call(this,G__52459,G__52460,G__52461,G__52462);};
sci$impl$fns$fun_$_arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$fun_$_arity_3.cljs$lang$applyTo = (function (arglist__53697){
var G__52459 = cljs.core.first(arglist__53697);
arglist__53697 = cljs.core.next(arglist__53697);
var G__52460 = cljs.core.first(arglist__53697);
arglist__53697 = cljs.core.next(arglist__53697);
var G__52461 = cljs.core.first(arglist__53697);
var G__52462 = cljs.core.rest(arglist__53697);
return sci$impl$fns$fun_$_arity_3__delegate(G__52459,G__52460,G__52461,G__52462);
});
sci$impl$fns$fun_$_arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_3__delegate;
return sci$impl$fns$fun_$_arity_3;
})()
;

break;
case (4):
var G__52481 = cljs.core._nth(params,(0));
var G__52482 = cljs.core._nth(params,(1));
var G__52483 = cljs.core._nth(params,(2));
var G__52484 = cljs.core._nth(params,(3));
return (function() { 
var sci$impl$fns$fun_$_arity_4__delegate = function (G__52476,G__52477,G__52478,G__52479,G__52480){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52476);

(invoc_array[(1)] = G__52477);

(invoc_array[(2)] = G__52478);

(invoc_array[(3)] = G__52479);

(invoc_array[vararg_idx] = G__52480);

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
var sci$impl$fns$fun_$_arity_4 = function (G__52476,G__52477,G__52478,G__52479,var_args){
var G__52480 = null;
if (arguments.length > 4) {
var G__53698__i = 0, G__53698__a = new Array(arguments.length -  4);
while (G__53698__i < G__53698__a.length) {G__53698__a[G__53698__i] = arguments[G__53698__i + 4]; ++G__53698__i;}
  G__52480 = new cljs.core.IndexedSeq(G__53698__a,0,null);
} 
return sci$impl$fns$fun_$_arity_4__delegate.call(this,G__52476,G__52477,G__52478,G__52479,G__52480);};
sci$impl$fns$fun_$_arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$fun_$_arity_4.cljs$lang$applyTo = (function (arglist__53699){
var G__52476 = cljs.core.first(arglist__53699);
arglist__53699 = cljs.core.next(arglist__53699);
var G__52477 = cljs.core.first(arglist__53699);
arglist__53699 = cljs.core.next(arglist__53699);
var G__52478 = cljs.core.first(arglist__53699);
arglist__53699 = cljs.core.next(arglist__53699);
var G__52479 = cljs.core.first(arglist__53699);
var G__52480 = cljs.core.rest(arglist__53699);
return sci$impl$fns$fun_$_arity_4__delegate(G__52476,G__52477,G__52478,G__52479,G__52480);
});
sci$impl$fns$fun_$_arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_4__delegate;
return sci$impl$fns$fun_$_arity_4;
})()
;

break;
case (5):
var G__52494 = cljs.core._nth(params,(0));
var G__52495 = cljs.core._nth(params,(1));
var G__52496 = cljs.core._nth(params,(2));
var G__52497 = cljs.core._nth(params,(3));
var G__52498 = cljs.core._nth(params,(4));
return (function() { 
var sci$impl$fns$fun_$_arity_5__delegate = function (G__52488,G__52489,G__52490,G__52491,G__52492,G__52493){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52488);

(invoc_array[(1)] = G__52489);

(invoc_array[(2)] = G__52490);

(invoc_array[(3)] = G__52491);

(invoc_array[(4)] = G__52492);

(invoc_array[vararg_idx] = G__52493);

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
var sci$impl$fns$fun_$_arity_5 = function (G__52488,G__52489,G__52490,G__52491,G__52492,var_args){
var G__52493 = null;
if (arguments.length > 5) {
var G__53701__i = 0, G__53701__a = new Array(arguments.length -  5);
while (G__53701__i < G__53701__a.length) {G__53701__a[G__53701__i] = arguments[G__53701__i + 5]; ++G__53701__i;}
  G__52493 = new cljs.core.IndexedSeq(G__53701__a,0,null);
} 
return sci$impl$fns$fun_$_arity_5__delegate.call(this,G__52488,G__52489,G__52490,G__52491,G__52492,G__52493);};
sci$impl$fns$fun_$_arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$fun_$_arity_5.cljs$lang$applyTo = (function (arglist__53703){
var G__52488 = cljs.core.first(arglist__53703);
arglist__53703 = cljs.core.next(arglist__53703);
var G__52489 = cljs.core.first(arglist__53703);
arglist__53703 = cljs.core.next(arglist__53703);
var G__52490 = cljs.core.first(arglist__53703);
arglist__53703 = cljs.core.next(arglist__53703);
var G__52491 = cljs.core.first(arglist__53703);
arglist__53703 = cljs.core.next(arglist__53703);
var G__52492 = cljs.core.first(arglist__53703);
var G__52493 = cljs.core.rest(arglist__53703);
return sci$impl$fns$fun_$_arity_5__delegate(G__52488,G__52489,G__52490,G__52491,G__52492,G__52493);
});
sci$impl$fns$fun_$_arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_5__delegate;
return sci$impl$fns$fun_$_arity_5;
})()
;

break;
case (6):
var G__52512 = cljs.core._nth(params,(0));
var G__52513 = cljs.core._nth(params,(1));
var G__52514 = cljs.core._nth(params,(2));
var G__52515 = cljs.core._nth(params,(3));
var G__52516 = cljs.core._nth(params,(4));
var G__52517 = cljs.core._nth(params,(5));
return (function() { 
var sci$impl$fns$fun_$_arity_6__delegate = function (G__52505,G__52506,G__52507,G__52508,G__52509,G__52510,G__52511){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52505);

(invoc_array[(1)] = G__52506);

(invoc_array[(2)] = G__52507);

(invoc_array[(3)] = G__52508);

(invoc_array[(4)] = G__52509);

(invoc_array[(5)] = G__52510);

(invoc_array[vararg_idx] = G__52511);

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
var sci$impl$fns$fun_$_arity_6 = function (G__52505,G__52506,G__52507,G__52508,G__52509,G__52510,var_args){
var G__52511 = null;
if (arguments.length > 6) {
var G__53705__i = 0, G__53705__a = new Array(arguments.length -  6);
while (G__53705__i < G__53705__a.length) {G__53705__a[G__53705__i] = arguments[G__53705__i + 6]; ++G__53705__i;}
  G__52511 = new cljs.core.IndexedSeq(G__53705__a,0,null);
} 
return sci$impl$fns$fun_$_arity_6__delegate.call(this,G__52505,G__52506,G__52507,G__52508,G__52509,G__52510,G__52511);};
sci$impl$fns$fun_$_arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$fun_$_arity_6.cljs$lang$applyTo = (function (arglist__53707){
var G__52505 = cljs.core.first(arglist__53707);
arglist__53707 = cljs.core.next(arglist__53707);
var G__52506 = cljs.core.first(arglist__53707);
arglist__53707 = cljs.core.next(arglist__53707);
var G__52507 = cljs.core.first(arglist__53707);
arglist__53707 = cljs.core.next(arglist__53707);
var G__52508 = cljs.core.first(arglist__53707);
arglist__53707 = cljs.core.next(arglist__53707);
var G__52509 = cljs.core.first(arglist__53707);
arglist__53707 = cljs.core.next(arglist__53707);
var G__52510 = cljs.core.first(arglist__53707);
var G__52511 = cljs.core.rest(arglist__53707);
return sci$impl$fns$fun_$_arity_6__delegate(G__52505,G__52506,G__52507,G__52508,G__52509,G__52510,G__52511);
});
sci$impl$fns$fun_$_arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_6__delegate;
return sci$impl$fns$fun_$_arity_6;
})()
;

break;
case (7):
var G__52526 = cljs.core._nth(params,(0));
var G__52527 = cljs.core._nth(params,(1));
var G__52528 = cljs.core._nth(params,(2));
var G__52529 = cljs.core._nth(params,(3));
var G__52530 = cljs.core._nth(params,(4));
var G__52531 = cljs.core._nth(params,(5));
var G__52532 = cljs.core._nth(params,(6));
return (function() { 
var sci$impl$fns$fun_$_arity_7__delegate = function (G__52518,G__52519,G__52520,G__52521,G__52522,G__52523,G__52524,G__52525){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52518);

(invoc_array[(1)] = G__52519);

(invoc_array[(2)] = G__52520);

(invoc_array[(3)] = G__52521);

(invoc_array[(4)] = G__52522);

(invoc_array[(5)] = G__52523);

(invoc_array[(6)] = G__52524);

(invoc_array[vararg_idx] = G__52525);

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
var sci$impl$fns$fun_$_arity_7 = function (G__52518,G__52519,G__52520,G__52521,G__52522,G__52523,G__52524,var_args){
var G__52525 = null;
if (arguments.length > 7) {
var G__53713__i = 0, G__53713__a = new Array(arguments.length -  7);
while (G__53713__i < G__53713__a.length) {G__53713__a[G__53713__i] = arguments[G__53713__i + 7]; ++G__53713__i;}
  G__52525 = new cljs.core.IndexedSeq(G__53713__a,0,null);
} 
return sci$impl$fns$fun_$_arity_7__delegate.call(this,G__52518,G__52519,G__52520,G__52521,G__52522,G__52523,G__52524,G__52525);};
sci$impl$fns$fun_$_arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$fun_$_arity_7.cljs$lang$applyTo = (function (arglist__53714){
var G__52518 = cljs.core.first(arglist__53714);
arglist__53714 = cljs.core.next(arglist__53714);
var G__52519 = cljs.core.first(arglist__53714);
arglist__53714 = cljs.core.next(arglist__53714);
var G__52520 = cljs.core.first(arglist__53714);
arglist__53714 = cljs.core.next(arglist__53714);
var G__52521 = cljs.core.first(arglist__53714);
arglist__53714 = cljs.core.next(arglist__53714);
var G__52522 = cljs.core.first(arglist__53714);
arglist__53714 = cljs.core.next(arglist__53714);
var G__52523 = cljs.core.first(arglist__53714);
arglist__53714 = cljs.core.next(arglist__53714);
var G__52524 = cljs.core.first(arglist__53714);
var G__52525 = cljs.core.rest(arglist__53714);
return sci$impl$fns$fun_$_arity_7__delegate(G__52518,G__52519,G__52520,G__52521,G__52522,G__52523,G__52524,G__52525);
});
sci$impl$fns$fun_$_arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_7__delegate;
return sci$impl$fns$fun_$_arity_7;
})()
;

break;
case (8):
var G__52546 = cljs.core._nth(params,(0));
var G__52547 = cljs.core._nth(params,(1));
var G__52548 = cljs.core._nth(params,(2));
var G__52549 = cljs.core._nth(params,(3));
var G__52550 = cljs.core._nth(params,(4));
var G__52551 = cljs.core._nth(params,(5));
var G__52552 = cljs.core._nth(params,(6));
var G__52553 = cljs.core._nth(params,(7));
return (function() { 
var sci$impl$fns$fun_$_arity_8__delegate = function (G__52537,G__52538,G__52539,G__52540,G__52541,G__52542,G__52543,G__52544,G__52545){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52537);

(invoc_array[(1)] = G__52538);

(invoc_array[(2)] = G__52539);

(invoc_array[(3)] = G__52540);

(invoc_array[(4)] = G__52541);

(invoc_array[(5)] = G__52542);

(invoc_array[(6)] = G__52543);

(invoc_array[(7)] = G__52544);

(invoc_array[vararg_idx] = G__52545);

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
var sci$impl$fns$fun_$_arity_8 = function (G__52537,G__52538,G__52539,G__52540,G__52541,G__52542,G__52543,G__52544,var_args){
var G__52545 = null;
if (arguments.length > 8) {
var G__53720__i = 0, G__53720__a = new Array(arguments.length -  8);
while (G__53720__i < G__53720__a.length) {G__53720__a[G__53720__i] = arguments[G__53720__i + 8]; ++G__53720__i;}
  G__52545 = new cljs.core.IndexedSeq(G__53720__a,0,null);
} 
return sci$impl$fns$fun_$_arity_8__delegate.call(this,G__52537,G__52538,G__52539,G__52540,G__52541,G__52542,G__52543,G__52544,G__52545);};
sci$impl$fns$fun_$_arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$fun_$_arity_8.cljs$lang$applyTo = (function (arglist__53721){
var G__52537 = cljs.core.first(arglist__53721);
arglist__53721 = cljs.core.next(arglist__53721);
var G__52538 = cljs.core.first(arglist__53721);
arglist__53721 = cljs.core.next(arglist__53721);
var G__52539 = cljs.core.first(arglist__53721);
arglist__53721 = cljs.core.next(arglist__53721);
var G__52540 = cljs.core.first(arglist__53721);
arglist__53721 = cljs.core.next(arglist__53721);
var G__52541 = cljs.core.first(arglist__53721);
arglist__53721 = cljs.core.next(arglist__53721);
var G__52542 = cljs.core.first(arglist__53721);
arglist__53721 = cljs.core.next(arglist__53721);
var G__52543 = cljs.core.first(arglist__53721);
arglist__53721 = cljs.core.next(arglist__53721);
var G__52544 = cljs.core.first(arglist__53721);
var G__52545 = cljs.core.rest(arglist__53721);
return sci$impl$fns$fun_$_arity_8__delegate(G__52537,G__52538,G__52539,G__52540,G__52541,G__52542,G__52543,G__52544,G__52545);
});
sci$impl$fns$fun_$_arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_8__delegate;
return sci$impl$fns$fun_$_arity_8;
})()
;

break;
case (9):
var G__52569 = cljs.core._nth(params,(0));
var G__52570 = cljs.core._nth(params,(1));
var G__52571 = cljs.core._nth(params,(2));
var G__52572 = cljs.core._nth(params,(3));
var G__52573 = cljs.core._nth(params,(4));
var G__52574 = cljs.core._nth(params,(5));
var G__52575 = cljs.core._nth(params,(6));
var G__52576 = cljs.core._nth(params,(7));
var G__52577 = cljs.core._nth(params,(8));
return (function() { 
var sci$impl$fns$fun_$_arity_9__delegate = function (G__52559,G__52560,G__52561,G__52562,G__52563,G__52564,G__52565,G__52566,G__52567,G__52568){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52559);

(invoc_array[(1)] = G__52560);

(invoc_array[(2)] = G__52561);

(invoc_array[(3)] = G__52562);

(invoc_array[(4)] = G__52563);

(invoc_array[(5)] = G__52564);

(invoc_array[(6)] = G__52565);

(invoc_array[(7)] = G__52566);

(invoc_array[(8)] = G__52567);

(invoc_array[vararg_idx] = G__52568);

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
var sci$impl$fns$fun_$_arity_9 = function (G__52559,G__52560,G__52561,G__52562,G__52563,G__52564,G__52565,G__52566,G__52567,var_args){
var G__52568 = null;
if (arguments.length > 9) {
var G__53735__i = 0, G__53735__a = new Array(arguments.length -  9);
while (G__53735__i < G__53735__a.length) {G__53735__a[G__53735__i] = arguments[G__53735__i + 9]; ++G__53735__i;}
  G__52568 = new cljs.core.IndexedSeq(G__53735__a,0,null);
} 
return sci$impl$fns$fun_$_arity_9__delegate.call(this,G__52559,G__52560,G__52561,G__52562,G__52563,G__52564,G__52565,G__52566,G__52567,G__52568);};
sci$impl$fns$fun_$_arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$fun_$_arity_9.cljs$lang$applyTo = (function (arglist__53736){
var G__52559 = cljs.core.first(arglist__53736);
arglist__53736 = cljs.core.next(arglist__53736);
var G__52560 = cljs.core.first(arglist__53736);
arglist__53736 = cljs.core.next(arglist__53736);
var G__52561 = cljs.core.first(arglist__53736);
arglist__53736 = cljs.core.next(arglist__53736);
var G__52562 = cljs.core.first(arglist__53736);
arglist__53736 = cljs.core.next(arglist__53736);
var G__52563 = cljs.core.first(arglist__53736);
arglist__53736 = cljs.core.next(arglist__53736);
var G__52564 = cljs.core.first(arglist__53736);
arglist__53736 = cljs.core.next(arglist__53736);
var G__52565 = cljs.core.first(arglist__53736);
arglist__53736 = cljs.core.next(arglist__53736);
var G__52566 = cljs.core.first(arglist__53736);
arglist__53736 = cljs.core.next(arglist__53736);
var G__52567 = cljs.core.first(arglist__53736);
var G__52568 = cljs.core.rest(arglist__53736);
return sci$impl$fns$fun_$_arity_9__delegate(G__52559,G__52560,G__52561,G__52562,G__52563,G__52564,G__52565,G__52566,G__52567,G__52568);
});
sci$impl$fns$fun_$_arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_9__delegate;
return sci$impl$fns$fun_$_arity_9;
})()
;

break;
case (10):
var G__52599 = cljs.core._nth(params,(0));
var G__52600 = cljs.core._nth(params,(1));
var G__52601 = cljs.core._nth(params,(2));
var G__52602 = cljs.core._nth(params,(3));
var G__52603 = cljs.core._nth(params,(4));
var G__52604 = cljs.core._nth(params,(5));
var G__52605 = cljs.core._nth(params,(6));
var G__52606 = cljs.core._nth(params,(7));
var G__52607 = cljs.core._nth(params,(8));
var G__52608 = cljs.core._nth(params,(9));
return (function() { 
var sci$impl$fns$fun_$_arity_10__delegate = function (G__52588,G__52589,G__52590,G__52591,G__52592,G__52593,G__52594,G__52595,G__52596,G__52597,G__52598){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52588);

(invoc_array[(1)] = G__52589);

(invoc_array[(2)] = G__52590);

(invoc_array[(3)] = G__52591);

(invoc_array[(4)] = G__52592);

(invoc_array[(5)] = G__52593);

(invoc_array[(6)] = G__52594);

(invoc_array[(7)] = G__52595);

(invoc_array[(8)] = G__52596);

(invoc_array[(9)] = G__52597);

(invoc_array[vararg_idx] = G__52598);

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
var sci$impl$fns$fun_$_arity_10 = function (G__52588,G__52589,G__52590,G__52591,G__52592,G__52593,G__52594,G__52595,G__52596,G__52597,var_args){
var G__52598 = null;
if (arguments.length > 10) {
var G__53742__i = 0, G__53742__a = new Array(arguments.length -  10);
while (G__53742__i < G__53742__a.length) {G__53742__a[G__53742__i] = arguments[G__53742__i + 10]; ++G__53742__i;}
  G__52598 = new cljs.core.IndexedSeq(G__53742__a,0,null);
} 
return sci$impl$fns$fun_$_arity_10__delegate.call(this,G__52588,G__52589,G__52590,G__52591,G__52592,G__52593,G__52594,G__52595,G__52596,G__52597,G__52598);};
sci$impl$fns$fun_$_arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$fun_$_arity_10.cljs$lang$applyTo = (function (arglist__53744){
var G__52588 = cljs.core.first(arglist__53744);
arglist__53744 = cljs.core.next(arglist__53744);
var G__52589 = cljs.core.first(arglist__53744);
arglist__53744 = cljs.core.next(arglist__53744);
var G__52590 = cljs.core.first(arglist__53744);
arglist__53744 = cljs.core.next(arglist__53744);
var G__52591 = cljs.core.first(arglist__53744);
arglist__53744 = cljs.core.next(arglist__53744);
var G__52592 = cljs.core.first(arglist__53744);
arglist__53744 = cljs.core.next(arglist__53744);
var G__52593 = cljs.core.first(arglist__53744);
arglist__53744 = cljs.core.next(arglist__53744);
var G__52594 = cljs.core.first(arglist__53744);
arglist__53744 = cljs.core.next(arglist__53744);
var G__52595 = cljs.core.first(arglist__53744);
arglist__53744 = cljs.core.next(arglist__53744);
var G__52596 = cljs.core.first(arglist__53744);
arglist__53744 = cljs.core.next(arglist__53744);
var G__52597 = cljs.core.first(arglist__53744);
var G__52598 = cljs.core.rest(arglist__53744);
return sci$impl$fns$fun_$_arity_10__delegate(G__52588,G__52589,G__52590,G__52591,G__52592,G__52593,G__52594,G__52595,G__52596,G__52597,G__52598);
});
sci$impl$fns$fun_$_arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_10__delegate;
return sci$impl$fns$fun_$_arity_10;
})()
;

break;
case (11):
var G__52624 = cljs.core._nth(params,(0));
var G__52625 = cljs.core._nth(params,(1));
var G__52626 = cljs.core._nth(params,(2));
var G__52627 = cljs.core._nth(params,(3));
var G__52628 = cljs.core._nth(params,(4));
var G__52629 = cljs.core._nth(params,(5));
var G__52630 = cljs.core._nth(params,(6));
var G__52631 = cljs.core._nth(params,(7));
var G__52632 = cljs.core._nth(params,(8));
var G__52633 = cljs.core._nth(params,(9));
var G__52634 = cljs.core._nth(params,(10));
return (function() { 
var sci$impl$fns$fun_$_arity_11__delegate = function (G__52612,G__52613,G__52614,G__52615,G__52616,G__52617,G__52618,G__52619,G__52620,G__52621,G__52622,G__52623){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52612);

(invoc_array[(1)] = G__52613);

(invoc_array[(2)] = G__52614);

(invoc_array[(3)] = G__52615);

(invoc_array[(4)] = G__52616);

(invoc_array[(5)] = G__52617);

(invoc_array[(6)] = G__52618);

(invoc_array[(7)] = G__52619);

(invoc_array[(8)] = G__52620);

(invoc_array[(9)] = G__52621);

(invoc_array[(10)] = G__52622);

(invoc_array[vararg_idx] = G__52623);

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
var sci$impl$fns$fun_$_arity_11 = function (G__52612,G__52613,G__52614,G__52615,G__52616,G__52617,G__52618,G__52619,G__52620,G__52621,G__52622,var_args){
var G__52623 = null;
if (arguments.length > 11) {
var G__53752__i = 0, G__53752__a = new Array(arguments.length -  11);
while (G__53752__i < G__53752__a.length) {G__53752__a[G__53752__i] = arguments[G__53752__i + 11]; ++G__53752__i;}
  G__52623 = new cljs.core.IndexedSeq(G__53752__a,0,null);
} 
return sci$impl$fns$fun_$_arity_11__delegate.call(this,G__52612,G__52613,G__52614,G__52615,G__52616,G__52617,G__52618,G__52619,G__52620,G__52621,G__52622,G__52623);};
sci$impl$fns$fun_$_arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$fun_$_arity_11.cljs$lang$applyTo = (function (arglist__53754){
var G__52612 = cljs.core.first(arglist__53754);
arglist__53754 = cljs.core.next(arglist__53754);
var G__52613 = cljs.core.first(arglist__53754);
arglist__53754 = cljs.core.next(arglist__53754);
var G__52614 = cljs.core.first(arglist__53754);
arglist__53754 = cljs.core.next(arglist__53754);
var G__52615 = cljs.core.first(arglist__53754);
arglist__53754 = cljs.core.next(arglist__53754);
var G__52616 = cljs.core.first(arglist__53754);
arglist__53754 = cljs.core.next(arglist__53754);
var G__52617 = cljs.core.first(arglist__53754);
arglist__53754 = cljs.core.next(arglist__53754);
var G__52618 = cljs.core.first(arglist__53754);
arglist__53754 = cljs.core.next(arglist__53754);
var G__52619 = cljs.core.first(arglist__53754);
arglist__53754 = cljs.core.next(arglist__53754);
var G__52620 = cljs.core.first(arglist__53754);
arglist__53754 = cljs.core.next(arglist__53754);
var G__52621 = cljs.core.first(arglist__53754);
arglist__53754 = cljs.core.next(arglist__53754);
var G__52622 = cljs.core.first(arglist__53754);
var G__52623 = cljs.core.rest(arglist__53754);
return sci$impl$fns$fun_$_arity_11__delegate(G__52612,G__52613,G__52614,G__52615,G__52616,G__52617,G__52618,G__52619,G__52620,G__52621,G__52622,G__52623);
});
sci$impl$fns$fun_$_arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_11__delegate;
return sci$impl$fns$fun_$_arity_11;
})()
;

break;
case (12):
var G__52651 = cljs.core._nth(params,(0));
var G__52652 = cljs.core._nth(params,(1));
var G__52653 = cljs.core._nth(params,(2));
var G__52654 = cljs.core._nth(params,(3));
var G__52655 = cljs.core._nth(params,(4));
var G__52656 = cljs.core._nth(params,(5));
var G__52657 = cljs.core._nth(params,(6));
var G__52658 = cljs.core._nth(params,(7));
var G__52659 = cljs.core._nth(params,(8));
var G__52660 = cljs.core._nth(params,(9));
var G__52661 = cljs.core._nth(params,(10));
var G__52662 = cljs.core._nth(params,(11));
return (function() { 
var sci$impl$fns$fun_$_arity_12__delegate = function (G__52638,G__52639,G__52640,G__52641,G__52642,G__52643,G__52644,G__52645,G__52646,G__52647,G__52648,G__52649,G__52650){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52638);

(invoc_array[(1)] = G__52639);

(invoc_array[(2)] = G__52640);

(invoc_array[(3)] = G__52641);

(invoc_array[(4)] = G__52642);

(invoc_array[(5)] = G__52643);

(invoc_array[(6)] = G__52644);

(invoc_array[(7)] = G__52645);

(invoc_array[(8)] = G__52646);

(invoc_array[(9)] = G__52647);

(invoc_array[(10)] = G__52648);

(invoc_array[(11)] = G__52649);

(invoc_array[vararg_idx] = G__52650);

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
var sci$impl$fns$fun_$_arity_12 = function (G__52638,G__52639,G__52640,G__52641,G__52642,G__52643,G__52644,G__52645,G__52646,G__52647,G__52648,G__52649,var_args){
var G__52650 = null;
if (arguments.length > 12) {
var G__53764__i = 0, G__53764__a = new Array(arguments.length -  12);
while (G__53764__i < G__53764__a.length) {G__53764__a[G__53764__i] = arguments[G__53764__i + 12]; ++G__53764__i;}
  G__52650 = new cljs.core.IndexedSeq(G__53764__a,0,null);
} 
return sci$impl$fns$fun_$_arity_12__delegate.call(this,G__52638,G__52639,G__52640,G__52641,G__52642,G__52643,G__52644,G__52645,G__52646,G__52647,G__52648,G__52649,G__52650);};
sci$impl$fns$fun_$_arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$fun_$_arity_12.cljs$lang$applyTo = (function (arglist__53765){
var G__52638 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52639 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52640 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52641 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52642 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52643 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52644 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52645 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52646 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52647 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52648 = cljs.core.first(arglist__53765);
arglist__53765 = cljs.core.next(arglist__53765);
var G__52649 = cljs.core.first(arglist__53765);
var G__52650 = cljs.core.rest(arglist__53765);
return sci$impl$fns$fun_$_arity_12__delegate(G__52638,G__52639,G__52640,G__52641,G__52642,G__52643,G__52644,G__52645,G__52646,G__52647,G__52648,G__52649,G__52650);
});
sci$impl$fns$fun_$_arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_12__delegate;
return sci$impl$fns$fun_$_arity_12;
})()
;

break;
case (13):
var G__52679 = cljs.core._nth(params,(0));
var G__52680 = cljs.core._nth(params,(1));
var G__52681 = cljs.core._nth(params,(2));
var G__52682 = cljs.core._nth(params,(3));
var G__52683 = cljs.core._nth(params,(4));
var G__52684 = cljs.core._nth(params,(5));
var G__52685 = cljs.core._nth(params,(6));
var G__52686 = cljs.core._nth(params,(7));
var G__52687 = cljs.core._nth(params,(8));
var G__52688 = cljs.core._nth(params,(9));
var G__52689 = cljs.core._nth(params,(10));
var G__52690 = cljs.core._nth(params,(11));
var G__52691 = cljs.core._nth(params,(12));
return (function() { 
var sci$impl$fns$fun_$_arity_13__delegate = function (G__52665,G__52666,G__52667,G__52668,G__52669,G__52670,G__52671,G__52672,G__52673,G__52674,G__52675,G__52676,G__52677,G__52678){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52665);

(invoc_array[(1)] = G__52666);

(invoc_array[(2)] = G__52667);

(invoc_array[(3)] = G__52668);

(invoc_array[(4)] = G__52669);

(invoc_array[(5)] = G__52670);

(invoc_array[(6)] = G__52671);

(invoc_array[(7)] = G__52672);

(invoc_array[(8)] = G__52673);

(invoc_array[(9)] = G__52674);

(invoc_array[(10)] = G__52675);

(invoc_array[(11)] = G__52676);

(invoc_array[(12)] = G__52677);

(invoc_array[vararg_idx] = G__52678);

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
var sci$impl$fns$fun_$_arity_13 = function (G__52665,G__52666,G__52667,G__52668,G__52669,G__52670,G__52671,G__52672,G__52673,G__52674,G__52675,G__52676,G__52677,var_args){
var G__52678 = null;
if (arguments.length > 13) {
var G__53785__i = 0, G__53785__a = new Array(arguments.length -  13);
while (G__53785__i < G__53785__a.length) {G__53785__a[G__53785__i] = arguments[G__53785__i + 13]; ++G__53785__i;}
  G__52678 = new cljs.core.IndexedSeq(G__53785__a,0,null);
} 
return sci$impl$fns$fun_$_arity_13__delegate.call(this,G__52665,G__52666,G__52667,G__52668,G__52669,G__52670,G__52671,G__52672,G__52673,G__52674,G__52675,G__52676,G__52677,G__52678);};
sci$impl$fns$fun_$_arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$fun_$_arity_13.cljs$lang$applyTo = (function (arglist__53790){
var G__52665 = cljs.core.first(arglist__53790);
arglist__53790 = cljs.core.next(arglist__53790);
var G__52666 = cljs.core.first(arglist__53790);
arglist__53790 = cljs.core.next(arglist__53790);
var G__52667 = cljs.core.first(arglist__53790);
arglist__53790 = cljs.core.next(arglist__53790);
var G__52668 = cljs.core.first(arglist__53790);
arglist__53790 = cljs.core.next(arglist__53790);
var G__52669 = cljs.core.first(arglist__53790);
arglist__53790 = cljs.core.next(arglist__53790);
var G__52670 = cljs.core.first(arglist__53790);
arglist__53790 = cljs.core.next(arglist__53790);
var G__52671 = cljs.core.first(arglist__53790);
arglist__53790 = cljs.core.next(arglist__53790);
var G__52672 = cljs.core.first(arglist__53790);
arglist__53790 = cljs.core.next(arglist__53790);
var G__52673 = cljs.core.first(arglist__53790);
arglist__53790 = cljs.core.next(arglist__53790);
var G__52674 = cljs.core.first(arglist__53790);
arglist__53790 = cljs.core.next(arglist__53790);
var G__52675 = cljs.core.first(arglist__53790);
arglist__53790 = cljs.core.next(arglist__53790);
var G__52676 = cljs.core.first(arglist__53790);
arglist__53790 = cljs.core.next(arglist__53790);
var G__52677 = cljs.core.first(arglist__53790);
var G__52678 = cljs.core.rest(arglist__53790);
return sci$impl$fns$fun_$_arity_13__delegate(G__52665,G__52666,G__52667,G__52668,G__52669,G__52670,G__52671,G__52672,G__52673,G__52674,G__52675,G__52676,G__52677,G__52678);
});
sci$impl$fns$fun_$_arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_13__delegate;
return sci$impl$fns$fun_$_arity_13;
})()
;

break;
case (14):
var G__52716 = cljs.core._nth(params,(0));
var G__52717 = cljs.core._nth(params,(1));
var G__52718 = cljs.core._nth(params,(2));
var G__52719 = cljs.core._nth(params,(3));
var G__52720 = cljs.core._nth(params,(4));
var G__52721 = cljs.core._nth(params,(5));
var G__52722 = cljs.core._nth(params,(6));
var G__52723 = cljs.core._nth(params,(7));
var G__52724 = cljs.core._nth(params,(8));
var G__52725 = cljs.core._nth(params,(9));
var G__52726 = cljs.core._nth(params,(10));
var G__52727 = cljs.core._nth(params,(11));
var G__52728 = cljs.core._nth(params,(12));
var G__52729 = cljs.core._nth(params,(13));
return (function() { 
var sci$impl$fns$fun_$_arity_14__delegate = function (G__52701,G__52702,G__52703,G__52704,G__52705,G__52706,G__52707,G__52708,G__52709,G__52710,G__52711,G__52712,G__52713,G__52714,G__52715){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52701);

(invoc_array[(1)] = G__52702);

(invoc_array[(2)] = G__52703);

(invoc_array[(3)] = G__52704);

(invoc_array[(4)] = G__52705);

(invoc_array[(5)] = G__52706);

(invoc_array[(6)] = G__52707);

(invoc_array[(7)] = G__52708);

(invoc_array[(8)] = G__52709);

(invoc_array[(9)] = G__52710);

(invoc_array[(10)] = G__52711);

(invoc_array[(11)] = G__52712);

(invoc_array[(12)] = G__52713);

(invoc_array[(13)] = G__52714);

(invoc_array[vararg_idx] = G__52715);

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
var sci$impl$fns$fun_$_arity_14 = function (G__52701,G__52702,G__52703,G__52704,G__52705,G__52706,G__52707,G__52708,G__52709,G__52710,G__52711,G__52712,G__52713,G__52714,var_args){
var G__52715 = null;
if (arguments.length > 14) {
var G__53799__i = 0, G__53799__a = new Array(arguments.length -  14);
while (G__53799__i < G__53799__a.length) {G__53799__a[G__53799__i] = arguments[G__53799__i + 14]; ++G__53799__i;}
  G__52715 = new cljs.core.IndexedSeq(G__53799__a,0,null);
} 
return sci$impl$fns$fun_$_arity_14__delegate.call(this,G__52701,G__52702,G__52703,G__52704,G__52705,G__52706,G__52707,G__52708,G__52709,G__52710,G__52711,G__52712,G__52713,G__52714,G__52715);};
sci$impl$fns$fun_$_arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$fun_$_arity_14.cljs$lang$applyTo = (function (arglist__53801){
var G__52701 = cljs.core.first(arglist__53801);
arglist__53801 = cljs.core.next(arglist__53801);
var G__52702 = cljs.core.first(arglist__53801);
arglist__53801 = cljs.core.next(arglist__53801);
var G__52703 = cljs.core.first(arglist__53801);
arglist__53801 = cljs.core.next(arglist__53801);
var G__52704 = cljs.core.first(arglist__53801);
arglist__53801 = cljs.core.next(arglist__53801);
var G__52705 = cljs.core.first(arglist__53801);
arglist__53801 = cljs.core.next(arglist__53801);
var G__52706 = cljs.core.first(arglist__53801);
arglist__53801 = cljs.core.next(arglist__53801);
var G__52707 = cljs.core.first(arglist__53801);
arglist__53801 = cljs.core.next(arglist__53801);
var G__52708 = cljs.core.first(arglist__53801);
arglist__53801 = cljs.core.next(arglist__53801);
var G__52709 = cljs.core.first(arglist__53801);
arglist__53801 = cljs.core.next(arglist__53801);
var G__52710 = cljs.core.first(arglist__53801);
arglist__53801 = cljs.core.next(arglist__53801);
var G__52711 = cljs.core.first(arglist__53801);
arglist__53801 = cljs.core.next(arglist__53801);
var G__52712 = cljs.core.first(arglist__53801);
arglist__53801 = cljs.core.next(arglist__53801);
var G__52713 = cljs.core.first(arglist__53801);
arglist__53801 = cljs.core.next(arglist__53801);
var G__52714 = cljs.core.first(arglist__53801);
var G__52715 = cljs.core.rest(arglist__53801);
return sci$impl$fns$fun_$_arity_14__delegate(G__52701,G__52702,G__52703,G__52704,G__52705,G__52706,G__52707,G__52708,G__52709,G__52710,G__52711,G__52712,G__52713,G__52714,G__52715);
});
sci$impl$fns$fun_$_arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_14__delegate;
return sci$impl$fns$fun_$_arity_14;
})()
;

break;
case (15):
var G__52754 = cljs.core._nth(params,(0));
var G__52755 = cljs.core._nth(params,(1));
var G__52756 = cljs.core._nth(params,(2));
var G__52757 = cljs.core._nth(params,(3));
var G__52758 = cljs.core._nth(params,(4));
var G__52759 = cljs.core._nth(params,(5));
var G__52760 = cljs.core._nth(params,(6));
var G__52761 = cljs.core._nth(params,(7));
var G__52762 = cljs.core._nth(params,(8));
var G__52763 = cljs.core._nth(params,(9));
var G__52764 = cljs.core._nth(params,(10));
var G__52765 = cljs.core._nth(params,(11));
var G__52766 = cljs.core._nth(params,(12));
var G__52767 = cljs.core._nth(params,(13));
var G__52768 = cljs.core._nth(params,(14));
return (function() { 
var sci$impl$fns$fun_$_arity_15__delegate = function (G__52738,G__52739,G__52740,G__52741,G__52742,G__52743,G__52744,G__52745,G__52746,G__52747,G__52748,G__52749,G__52750,G__52751,G__52752,G__52753){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52738);

(invoc_array[(1)] = G__52739);

(invoc_array[(2)] = G__52740);

(invoc_array[(3)] = G__52741);

(invoc_array[(4)] = G__52742);

(invoc_array[(5)] = G__52743);

(invoc_array[(6)] = G__52744);

(invoc_array[(7)] = G__52745);

(invoc_array[(8)] = G__52746);

(invoc_array[(9)] = G__52747);

(invoc_array[(10)] = G__52748);

(invoc_array[(11)] = G__52749);

(invoc_array[(12)] = G__52750);

(invoc_array[(13)] = G__52751);

(invoc_array[(14)] = G__52752);

(invoc_array[vararg_idx] = G__52753);

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
var sci$impl$fns$fun_$_arity_15 = function (G__52738,G__52739,G__52740,G__52741,G__52742,G__52743,G__52744,G__52745,G__52746,G__52747,G__52748,G__52749,G__52750,G__52751,G__52752,var_args){
var G__52753 = null;
if (arguments.length > 15) {
var G__53809__i = 0, G__53809__a = new Array(arguments.length -  15);
while (G__53809__i < G__53809__a.length) {G__53809__a[G__53809__i] = arguments[G__53809__i + 15]; ++G__53809__i;}
  G__52753 = new cljs.core.IndexedSeq(G__53809__a,0,null);
} 
return sci$impl$fns$fun_$_arity_15__delegate.call(this,G__52738,G__52739,G__52740,G__52741,G__52742,G__52743,G__52744,G__52745,G__52746,G__52747,G__52748,G__52749,G__52750,G__52751,G__52752,G__52753);};
sci$impl$fns$fun_$_arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$fun_$_arity_15.cljs$lang$applyTo = (function (arglist__53810){
var G__52738 = cljs.core.first(arglist__53810);
arglist__53810 = cljs.core.next(arglist__53810);
var G__52739 = cljs.core.first(arglist__53810);
arglist__53810 = cljs.core.next(arglist__53810);
var G__52740 = cljs.core.first(arglist__53810);
arglist__53810 = cljs.core.next(arglist__53810);
var G__52741 = cljs.core.first(arglist__53810);
arglist__53810 = cljs.core.next(arglist__53810);
var G__52742 = cljs.core.first(arglist__53810);
arglist__53810 = cljs.core.next(arglist__53810);
var G__52743 = cljs.core.first(arglist__53810);
arglist__53810 = cljs.core.next(arglist__53810);
var G__52744 = cljs.core.first(arglist__53810);
arglist__53810 = cljs.core.next(arglist__53810);
var G__52745 = cljs.core.first(arglist__53810);
arglist__53810 = cljs.core.next(arglist__53810);
var G__52746 = cljs.core.first(arglist__53810);
arglist__53810 = cljs.core.next(arglist__53810);
var G__52747 = cljs.core.first(arglist__53810);
arglist__53810 = cljs.core.next(arglist__53810);
var G__52748 = cljs.core.first(arglist__53810);
arglist__53810 = cljs.core.next(arglist__53810);
var G__52749 = cljs.core.first(arglist__53810);
arglist__53810 = cljs.core.next(arglist__53810);
var G__52750 = cljs.core.first(arglist__53810);
arglist__53810 = cljs.core.next(arglist__53810);
var G__52751 = cljs.core.first(arglist__53810);
arglist__53810 = cljs.core.next(arglist__53810);
var G__52752 = cljs.core.first(arglist__53810);
var G__52753 = cljs.core.rest(arglist__53810);
return sci$impl$fns$fun_$_arity_15__delegate(G__52738,G__52739,G__52740,G__52741,G__52742,G__52743,G__52744,G__52745,G__52746,G__52747,G__52748,G__52749,G__52750,G__52751,G__52752,G__52753);
});
sci$impl$fns$fun_$_arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_15__delegate;
return sci$impl$fns$fun_$_arity_15;
})()
;

break;
case (16):
var G__52796 = cljs.core._nth(params,(0));
var G__52797 = cljs.core._nth(params,(1));
var G__52798 = cljs.core._nth(params,(2));
var G__52799 = cljs.core._nth(params,(3));
var G__52800 = cljs.core._nth(params,(4));
var G__52801 = cljs.core._nth(params,(5));
var G__52802 = cljs.core._nth(params,(6));
var G__52803 = cljs.core._nth(params,(7));
var G__52804 = cljs.core._nth(params,(8));
var G__52805 = cljs.core._nth(params,(9));
var G__52806 = cljs.core._nth(params,(10));
var G__52807 = cljs.core._nth(params,(11));
var G__52808 = cljs.core._nth(params,(12));
var G__52809 = cljs.core._nth(params,(13));
var G__52810 = cljs.core._nth(params,(14));
var G__52811 = cljs.core._nth(params,(15));
return (function() { 
var sci$impl$fns$fun_$_arity_16__delegate = function (G__52779,G__52780,G__52781,G__52782,G__52783,G__52784,G__52785,G__52786,G__52787,G__52788,G__52789,G__52790,G__52791,G__52792,G__52793,G__52794,G__52795){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52779);

(invoc_array[(1)] = G__52780);

(invoc_array[(2)] = G__52781);

(invoc_array[(3)] = G__52782);

(invoc_array[(4)] = G__52783);

(invoc_array[(5)] = G__52784);

(invoc_array[(6)] = G__52785);

(invoc_array[(7)] = G__52786);

(invoc_array[(8)] = G__52787);

(invoc_array[(9)] = G__52788);

(invoc_array[(10)] = G__52789);

(invoc_array[(11)] = G__52790);

(invoc_array[(12)] = G__52791);

(invoc_array[(13)] = G__52792);

(invoc_array[(14)] = G__52793);

(invoc_array[(15)] = G__52794);

(invoc_array[vararg_idx] = G__52795);

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
var sci$impl$fns$fun_$_arity_16 = function (G__52779,G__52780,G__52781,G__52782,G__52783,G__52784,G__52785,G__52786,G__52787,G__52788,G__52789,G__52790,G__52791,G__52792,G__52793,G__52794,var_args){
var G__52795 = null;
if (arguments.length > 16) {
var G__53820__i = 0, G__53820__a = new Array(arguments.length -  16);
while (G__53820__i < G__53820__a.length) {G__53820__a[G__53820__i] = arguments[G__53820__i + 16]; ++G__53820__i;}
  G__52795 = new cljs.core.IndexedSeq(G__53820__a,0,null);
} 
return sci$impl$fns$fun_$_arity_16__delegate.call(this,G__52779,G__52780,G__52781,G__52782,G__52783,G__52784,G__52785,G__52786,G__52787,G__52788,G__52789,G__52790,G__52791,G__52792,G__52793,G__52794,G__52795);};
sci$impl$fns$fun_$_arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$fun_$_arity_16.cljs$lang$applyTo = (function (arglist__53823){
var G__52779 = cljs.core.first(arglist__53823);
arglist__53823 = cljs.core.next(arglist__53823);
var G__52780 = cljs.core.first(arglist__53823);
arglist__53823 = cljs.core.next(arglist__53823);
var G__52781 = cljs.core.first(arglist__53823);
arglist__53823 = cljs.core.next(arglist__53823);
var G__52782 = cljs.core.first(arglist__53823);
arglist__53823 = cljs.core.next(arglist__53823);
var G__52783 = cljs.core.first(arglist__53823);
arglist__53823 = cljs.core.next(arglist__53823);
var G__52784 = cljs.core.first(arglist__53823);
arglist__53823 = cljs.core.next(arglist__53823);
var G__52785 = cljs.core.first(arglist__53823);
arglist__53823 = cljs.core.next(arglist__53823);
var G__52786 = cljs.core.first(arglist__53823);
arglist__53823 = cljs.core.next(arglist__53823);
var G__52787 = cljs.core.first(arglist__53823);
arglist__53823 = cljs.core.next(arglist__53823);
var G__52788 = cljs.core.first(arglist__53823);
arglist__53823 = cljs.core.next(arglist__53823);
var G__52789 = cljs.core.first(arglist__53823);
arglist__53823 = cljs.core.next(arglist__53823);
var G__52790 = cljs.core.first(arglist__53823);
arglist__53823 = cljs.core.next(arglist__53823);
var G__52791 = cljs.core.first(arglist__53823);
arglist__53823 = cljs.core.next(arglist__53823);
var G__52792 = cljs.core.first(arglist__53823);
arglist__53823 = cljs.core.next(arglist__53823);
var G__52793 = cljs.core.first(arglist__53823);
arglist__53823 = cljs.core.next(arglist__53823);
var G__52794 = cljs.core.first(arglist__53823);
var G__52795 = cljs.core.rest(arglist__53823);
return sci$impl$fns$fun_$_arity_16__delegate(G__52779,G__52780,G__52781,G__52782,G__52783,G__52784,G__52785,G__52786,G__52787,G__52788,G__52789,G__52790,G__52791,G__52792,G__52793,G__52794,G__52795);
});
sci$impl$fns$fun_$_arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_16__delegate;
return sci$impl$fns$fun_$_arity_16;
})()
;

break;
case (17):
var G__52846 = cljs.core._nth(params,(0));
var G__52847 = cljs.core._nth(params,(1));
var G__52848 = cljs.core._nth(params,(2));
var G__52849 = cljs.core._nth(params,(3));
var G__52850 = cljs.core._nth(params,(4));
var G__52851 = cljs.core._nth(params,(5));
var G__52852 = cljs.core._nth(params,(6));
var G__52853 = cljs.core._nth(params,(7));
var G__52854 = cljs.core._nth(params,(8));
var G__52855 = cljs.core._nth(params,(9));
var G__52856 = cljs.core._nth(params,(10));
var G__52857 = cljs.core._nth(params,(11));
var G__52858 = cljs.core._nth(params,(12));
var G__52859 = cljs.core._nth(params,(13));
var G__52860 = cljs.core._nth(params,(14));
var G__52861 = cljs.core._nth(params,(15));
var G__52862 = cljs.core._nth(params,(16));
return (function() { 
var sci$impl$fns$fun_$_arity_17__delegate = function (G__52828,G__52829,G__52830,G__52831,G__52832,G__52833,G__52834,G__52835,G__52836,G__52837,G__52838,G__52839,G__52840,G__52841,G__52842,G__52843,G__52844,G__52845){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52828);

(invoc_array[(1)] = G__52829);

(invoc_array[(2)] = G__52830);

(invoc_array[(3)] = G__52831);

(invoc_array[(4)] = G__52832);

(invoc_array[(5)] = G__52833);

(invoc_array[(6)] = G__52834);

(invoc_array[(7)] = G__52835);

(invoc_array[(8)] = G__52836);

(invoc_array[(9)] = G__52837);

(invoc_array[(10)] = G__52838);

(invoc_array[(11)] = G__52839);

(invoc_array[(12)] = G__52840);

(invoc_array[(13)] = G__52841);

(invoc_array[(14)] = G__52842);

(invoc_array[(15)] = G__52843);

(invoc_array[(16)] = G__52844);

(invoc_array[vararg_idx] = G__52845);

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
var sci$impl$fns$fun_$_arity_17 = function (G__52828,G__52829,G__52830,G__52831,G__52832,G__52833,G__52834,G__52835,G__52836,G__52837,G__52838,G__52839,G__52840,G__52841,G__52842,G__52843,G__52844,var_args){
var G__52845 = null;
if (arguments.length > 17) {
var G__53831__i = 0, G__53831__a = new Array(arguments.length -  17);
while (G__53831__i < G__53831__a.length) {G__53831__a[G__53831__i] = arguments[G__53831__i + 17]; ++G__53831__i;}
  G__52845 = new cljs.core.IndexedSeq(G__53831__a,0,null);
} 
return sci$impl$fns$fun_$_arity_17__delegate.call(this,G__52828,G__52829,G__52830,G__52831,G__52832,G__52833,G__52834,G__52835,G__52836,G__52837,G__52838,G__52839,G__52840,G__52841,G__52842,G__52843,G__52844,G__52845);};
sci$impl$fns$fun_$_arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$fun_$_arity_17.cljs$lang$applyTo = (function (arglist__53834){
var G__52828 = cljs.core.first(arglist__53834);
arglist__53834 = cljs.core.next(arglist__53834);
var G__52829 = cljs.core.first(arglist__53834);
arglist__53834 = cljs.core.next(arglist__53834);
var G__52830 = cljs.core.first(arglist__53834);
arglist__53834 = cljs.core.next(arglist__53834);
var G__52831 = cljs.core.first(arglist__53834);
arglist__53834 = cljs.core.next(arglist__53834);
var G__52832 = cljs.core.first(arglist__53834);
arglist__53834 = cljs.core.next(arglist__53834);
var G__52833 = cljs.core.first(arglist__53834);
arglist__53834 = cljs.core.next(arglist__53834);
var G__52834 = cljs.core.first(arglist__53834);
arglist__53834 = cljs.core.next(arglist__53834);
var G__52835 = cljs.core.first(arglist__53834);
arglist__53834 = cljs.core.next(arglist__53834);
var G__52836 = cljs.core.first(arglist__53834);
arglist__53834 = cljs.core.next(arglist__53834);
var G__52837 = cljs.core.first(arglist__53834);
arglist__53834 = cljs.core.next(arglist__53834);
var G__52838 = cljs.core.first(arglist__53834);
arglist__53834 = cljs.core.next(arglist__53834);
var G__52839 = cljs.core.first(arglist__53834);
arglist__53834 = cljs.core.next(arglist__53834);
var G__52840 = cljs.core.first(arglist__53834);
arglist__53834 = cljs.core.next(arglist__53834);
var G__52841 = cljs.core.first(arglist__53834);
arglist__53834 = cljs.core.next(arglist__53834);
var G__52842 = cljs.core.first(arglist__53834);
arglist__53834 = cljs.core.next(arglist__53834);
var G__52843 = cljs.core.first(arglist__53834);
arglist__53834 = cljs.core.next(arglist__53834);
var G__52844 = cljs.core.first(arglist__53834);
var G__52845 = cljs.core.rest(arglist__53834);
return sci$impl$fns$fun_$_arity_17__delegate(G__52828,G__52829,G__52830,G__52831,G__52832,G__52833,G__52834,G__52835,G__52836,G__52837,G__52838,G__52839,G__52840,G__52841,G__52842,G__52843,G__52844,G__52845);
});
sci$impl$fns$fun_$_arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_17__delegate;
return sci$impl$fns$fun_$_arity_17;
})()
;

break;
case (18):
var G__52895 = cljs.core._nth(params,(0));
var G__52896 = cljs.core._nth(params,(1));
var G__52897 = cljs.core._nth(params,(2));
var G__52898 = cljs.core._nth(params,(3));
var G__52899 = cljs.core._nth(params,(4));
var G__52900 = cljs.core._nth(params,(5));
var G__52901 = cljs.core._nth(params,(6));
var G__52902 = cljs.core._nth(params,(7));
var G__52903 = cljs.core._nth(params,(8));
var G__52904 = cljs.core._nth(params,(9));
var G__52905 = cljs.core._nth(params,(10));
var G__52906 = cljs.core._nth(params,(11));
var G__52907 = cljs.core._nth(params,(12));
var G__52908 = cljs.core._nth(params,(13));
var G__52909 = cljs.core._nth(params,(14));
var G__52910 = cljs.core._nth(params,(15));
var G__52911 = cljs.core._nth(params,(16));
var G__52912 = cljs.core._nth(params,(17));
return (function() { 
var sci$impl$fns$fun_$_arity_18__delegate = function (G__52876,G__52877,G__52878,G__52879,G__52880,G__52881,G__52882,G__52883,G__52884,G__52885,G__52886,G__52887,G__52888,G__52889,G__52890,G__52891,G__52892,G__52893,G__52894){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52876);

(invoc_array[(1)] = G__52877);

(invoc_array[(2)] = G__52878);

(invoc_array[(3)] = G__52879);

(invoc_array[(4)] = G__52880);

(invoc_array[(5)] = G__52881);

(invoc_array[(6)] = G__52882);

(invoc_array[(7)] = G__52883);

(invoc_array[(8)] = G__52884);

(invoc_array[(9)] = G__52885);

(invoc_array[(10)] = G__52886);

(invoc_array[(11)] = G__52887);

(invoc_array[(12)] = G__52888);

(invoc_array[(13)] = G__52889);

(invoc_array[(14)] = G__52890);

(invoc_array[(15)] = G__52891);

(invoc_array[(16)] = G__52892);

(invoc_array[(17)] = G__52893);

(invoc_array[vararg_idx] = G__52894);

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
var sci$impl$fns$fun_$_arity_18 = function (G__52876,G__52877,G__52878,G__52879,G__52880,G__52881,G__52882,G__52883,G__52884,G__52885,G__52886,G__52887,G__52888,G__52889,G__52890,G__52891,G__52892,G__52893,var_args){
var G__52894 = null;
if (arguments.length > 18) {
var G__53839__i = 0, G__53839__a = new Array(arguments.length -  18);
while (G__53839__i < G__53839__a.length) {G__53839__a[G__53839__i] = arguments[G__53839__i + 18]; ++G__53839__i;}
  G__52894 = new cljs.core.IndexedSeq(G__53839__a,0,null);
} 
return sci$impl$fns$fun_$_arity_18__delegate.call(this,G__52876,G__52877,G__52878,G__52879,G__52880,G__52881,G__52882,G__52883,G__52884,G__52885,G__52886,G__52887,G__52888,G__52889,G__52890,G__52891,G__52892,G__52893,G__52894);};
sci$impl$fns$fun_$_arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$fun_$_arity_18.cljs$lang$applyTo = (function (arglist__53841){
var G__52876 = cljs.core.first(arglist__53841);
arglist__53841 = cljs.core.next(arglist__53841);
var G__52877 = cljs.core.first(arglist__53841);
arglist__53841 = cljs.core.next(arglist__53841);
var G__52878 = cljs.core.first(arglist__53841);
arglist__53841 = cljs.core.next(arglist__53841);
var G__52879 = cljs.core.first(arglist__53841);
arglist__53841 = cljs.core.next(arglist__53841);
var G__52880 = cljs.core.first(arglist__53841);
arglist__53841 = cljs.core.next(arglist__53841);
var G__52881 = cljs.core.first(arglist__53841);
arglist__53841 = cljs.core.next(arglist__53841);
var G__52882 = cljs.core.first(arglist__53841);
arglist__53841 = cljs.core.next(arglist__53841);
var G__52883 = cljs.core.first(arglist__53841);
arglist__53841 = cljs.core.next(arglist__53841);
var G__52884 = cljs.core.first(arglist__53841);
arglist__53841 = cljs.core.next(arglist__53841);
var G__52885 = cljs.core.first(arglist__53841);
arglist__53841 = cljs.core.next(arglist__53841);
var G__52886 = cljs.core.first(arglist__53841);
arglist__53841 = cljs.core.next(arglist__53841);
var G__52887 = cljs.core.first(arglist__53841);
arglist__53841 = cljs.core.next(arglist__53841);
var G__52888 = cljs.core.first(arglist__53841);
arglist__53841 = cljs.core.next(arglist__53841);
var G__52889 = cljs.core.first(arglist__53841);
arglist__53841 = cljs.core.next(arglist__53841);
var G__52890 = cljs.core.first(arglist__53841);
arglist__53841 = cljs.core.next(arglist__53841);
var G__52891 = cljs.core.first(arglist__53841);
arglist__53841 = cljs.core.next(arglist__53841);
var G__52892 = cljs.core.first(arglist__53841);
arglist__53841 = cljs.core.next(arglist__53841);
var G__52893 = cljs.core.first(arglist__53841);
var G__52894 = cljs.core.rest(arglist__53841);
return sci$impl$fns$fun_$_arity_18__delegate(G__52876,G__52877,G__52878,G__52879,G__52880,G__52881,G__52882,G__52883,G__52884,G__52885,G__52886,G__52887,G__52888,G__52889,G__52890,G__52891,G__52892,G__52893,G__52894);
});
sci$impl$fns$fun_$_arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_18__delegate;
return sci$impl$fns$fun_$_arity_18;
})()
;

break;
case (19):
var G__52944 = cljs.core._nth(params,(0));
var G__52949 = cljs.core._nth(params,(1));
var G__52950 = cljs.core._nth(params,(2));
var G__52951 = cljs.core._nth(params,(3));
var G__52952 = cljs.core._nth(params,(4));
var G__52953 = cljs.core._nth(params,(5));
var G__52954 = cljs.core._nth(params,(6));
var G__52955 = cljs.core._nth(params,(7));
var G__52956 = cljs.core._nth(params,(8));
var G__52957 = cljs.core._nth(params,(9));
var G__52958 = cljs.core._nth(params,(10));
var G__52959 = cljs.core._nth(params,(11));
var G__52960 = cljs.core._nth(params,(12));
var G__52961 = cljs.core._nth(params,(13));
var G__52962 = cljs.core._nth(params,(14));
var G__52963 = cljs.core._nth(params,(15));
var G__52964 = cljs.core._nth(params,(16));
var G__52965 = cljs.core._nth(params,(17));
var G__52966 = cljs.core._nth(params,(18));
return (function() { 
var sci$impl$fns$fun_$_arity_19__delegate = function (G__52924,G__52925,G__52926,G__52927,G__52928,G__52929,G__52930,G__52931,G__52932,G__52933,G__52934,G__52935,G__52936,G__52937,G__52938,G__52939,G__52940,G__52941,G__52942,G__52943){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52924);

(invoc_array[(1)] = G__52925);

(invoc_array[(2)] = G__52926);

(invoc_array[(3)] = G__52927);

(invoc_array[(4)] = G__52928);

(invoc_array[(5)] = G__52929);

(invoc_array[(6)] = G__52930);

(invoc_array[(7)] = G__52931);

(invoc_array[(8)] = G__52932);

(invoc_array[(9)] = G__52933);

(invoc_array[(10)] = G__52934);

(invoc_array[(11)] = G__52935);

(invoc_array[(12)] = G__52936);

(invoc_array[(13)] = G__52937);

(invoc_array[(14)] = G__52938);

(invoc_array[(15)] = G__52939);

(invoc_array[(16)] = G__52940);

(invoc_array[(17)] = G__52941);

(invoc_array[(18)] = G__52942);

(invoc_array[vararg_idx] = G__52943);

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
var sci$impl$fns$fun_$_arity_19 = function (G__52924,G__52925,G__52926,G__52927,G__52928,G__52929,G__52930,G__52931,G__52932,G__52933,G__52934,G__52935,G__52936,G__52937,G__52938,G__52939,G__52940,G__52941,G__52942,var_args){
var G__52943 = null;
if (arguments.length > 19) {
var G__53850__i = 0, G__53850__a = new Array(arguments.length -  19);
while (G__53850__i < G__53850__a.length) {G__53850__a[G__53850__i] = arguments[G__53850__i + 19]; ++G__53850__i;}
  G__52943 = new cljs.core.IndexedSeq(G__53850__a,0,null);
} 
return sci$impl$fns$fun_$_arity_19__delegate.call(this,G__52924,G__52925,G__52926,G__52927,G__52928,G__52929,G__52930,G__52931,G__52932,G__52933,G__52934,G__52935,G__52936,G__52937,G__52938,G__52939,G__52940,G__52941,G__52942,G__52943);};
sci$impl$fns$fun_$_arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$fun_$_arity_19.cljs$lang$applyTo = (function (arglist__53852){
var G__52924 = cljs.core.first(arglist__53852);
arglist__53852 = cljs.core.next(arglist__53852);
var G__52925 = cljs.core.first(arglist__53852);
arglist__53852 = cljs.core.next(arglist__53852);
var G__52926 = cljs.core.first(arglist__53852);
arglist__53852 = cljs.core.next(arglist__53852);
var G__52927 = cljs.core.first(arglist__53852);
arglist__53852 = cljs.core.next(arglist__53852);
var G__52928 = cljs.core.first(arglist__53852);
arglist__53852 = cljs.core.next(arglist__53852);
var G__52929 = cljs.core.first(arglist__53852);
arglist__53852 = cljs.core.next(arglist__53852);
var G__52930 = cljs.core.first(arglist__53852);
arglist__53852 = cljs.core.next(arglist__53852);
var G__52931 = cljs.core.first(arglist__53852);
arglist__53852 = cljs.core.next(arglist__53852);
var G__52932 = cljs.core.first(arglist__53852);
arglist__53852 = cljs.core.next(arglist__53852);
var G__52933 = cljs.core.first(arglist__53852);
arglist__53852 = cljs.core.next(arglist__53852);
var G__52934 = cljs.core.first(arglist__53852);
arglist__53852 = cljs.core.next(arglist__53852);
var G__52935 = cljs.core.first(arglist__53852);
arglist__53852 = cljs.core.next(arglist__53852);
var G__52936 = cljs.core.first(arglist__53852);
arglist__53852 = cljs.core.next(arglist__53852);
var G__52937 = cljs.core.first(arglist__53852);
arglist__53852 = cljs.core.next(arglist__53852);
var G__52938 = cljs.core.first(arglist__53852);
arglist__53852 = cljs.core.next(arglist__53852);
var G__52939 = cljs.core.first(arglist__53852);
arglist__53852 = cljs.core.next(arglist__53852);
var G__52940 = cljs.core.first(arglist__53852);
arglist__53852 = cljs.core.next(arglist__53852);
var G__52941 = cljs.core.first(arglist__53852);
arglist__53852 = cljs.core.next(arglist__53852);
var G__52942 = cljs.core.first(arglist__53852);
var G__52943 = cljs.core.rest(arglist__53852);
return sci$impl$fns$fun_$_arity_19__delegate(G__52924,G__52925,G__52926,G__52927,G__52928,G__52929,G__52930,G__52931,G__52932,G__52933,G__52934,G__52935,G__52936,G__52937,G__52938,G__52939,G__52940,G__52941,G__52942,G__52943);
});
sci$impl$fns$fun_$_arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_19__delegate;
return sci$impl$fns$fun_$_arity_19;
})()
;

break;
case (20):
var G__52998 = cljs.core._nth(params,(0));
var G__52999 = cljs.core._nth(params,(1));
var G__53000 = cljs.core._nth(params,(2));
var G__53001 = cljs.core._nth(params,(3));
var G__53002 = cljs.core._nth(params,(4));
var G__53003 = cljs.core._nth(params,(5));
var G__53004 = cljs.core._nth(params,(6));
var G__53005 = cljs.core._nth(params,(7));
var G__53006 = cljs.core._nth(params,(8));
var G__53007 = cljs.core._nth(params,(9));
var G__53008 = cljs.core._nth(params,(10));
var G__53009 = cljs.core._nth(params,(11));
var G__53010 = cljs.core._nth(params,(12));
var G__53011 = cljs.core._nth(params,(13));
var G__53012 = cljs.core._nth(params,(14));
var G__53013 = cljs.core._nth(params,(15));
var G__53014 = cljs.core._nth(params,(16));
var G__53015 = cljs.core._nth(params,(17));
var G__53016 = cljs.core._nth(params,(18));
var G__53017 = cljs.core._nth(params,(19));
return (function() { 
var sci$impl$fns$fun_$_arity_20__delegate = function (G__52977,G__52978,G__52979,G__52980,G__52981,G__52982,G__52983,G__52984,G__52985,G__52986,G__52987,G__52988,G__52989,G__52990,G__52991,G__52992,G__52993,G__52994,G__52995,G__52996,G__52997){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52977);

(invoc_array[(1)] = G__52978);

(invoc_array[(2)] = G__52979);

(invoc_array[(3)] = G__52980);

(invoc_array[(4)] = G__52981);

(invoc_array[(5)] = G__52982);

(invoc_array[(6)] = G__52983);

(invoc_array[(7)] = G__52984);

(invoc_array[(8)] = G__52985);

(invoc_array[(9)] = G__52986);

(invoc_array[(10)] = G__52987);

(invoc_array[(11)] = G__52988);

(invoc_array[(12)] = G__52989);

(invoc_array[(13)] = G__52990);

(invoc_array[(14)] = G__52991);

(invoc_array[(15)] = G__52992);

(invoc_array[(16)] = G__52993);

(invoc_array[(17)] = G__52994);

(invoc_array[(18)] = G__52995);

(invoc_array[(19)] = G__52996);

(invoc_array[vararg_idx] = G__52997);

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
var sci$impl$fns$fun_$_arity_20 = function (G__52977,G__52978,G__52979,G__52980,G__52981,G__52982,G__52983,G__52984,G__52985,G__52986,G__52987,G__52988,G__52989,G__52990,G__52991,G__52992,G__52993,G__52994,G__52995,G__52996,var_args){
var G__52997 = null;
if (arguments.length > 20) {
var G__53856__i = 0, G__53856__a = new Array(arguments.length -  20);
while (G__53856__i < G__53856__a.length) {G__53856__a[G__53856__i] = arguments[G__53856__i + 20]; ++G__53856__i;}
  G__52997 = new cljs.core.IndexedSeq(G__53856__a,0,null);
} 
return sci$impl$fns$fun_$_arity_20__delegate.call(this,G__52977,G__52978,G__52979,G__52980,G__52981,G__52982,G__52983,G__52984,G__52985,G__52986,G__52987,G__52988,G__52989,G__52990,G__52991,G__52992,G__52993,G__52994,G__52995,G__52996,G__52997);};
sci$impl$fns$fun_$_arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$fun_$_arity_20.cljs$lang$applyTo = (function (arglist__53857){
var G__52977 = cljs.core.first(arglist__53857);
arglist__53857 = cljs.core.next(arglist__53857);
var G__52978 = cljs.core.first(arglist__53857);
arglist__53857 = cljs.core.next(arglist__53857);
var G__52979 = cljs.core.first(arglist__53857);
arglist__53857 = cljs.core.next(arglist__53857);
var G__52980 = cljs.core.first(arglist__53857);
arglist__53857 = cljs.core.next(arglist__53857);
var G__52981 = cljs.core.first(arglist__53857);
arglist__53857 = cljs.core.next(arglist__53857);
var G__52982 = cljs.core.first(arglist__53857);
arglist__53857 = cljs.core.next(arglist__53857);
var G__52983 = cljs.core.first(arglist__53857);
arglist__53857 = cljs.core.next(arglist__53857);
var G__52984 = cljs.core.first(arglist__53857);
arglist__53857 = cljs.core.next(arglist__53857);
var G__52985 = cljs.core.first(arglist__53857);
arglist__53857 = cljs.core.next(arglist__53857);
var G__52986 = cljs.core.first(arglist__53857);
arglist__53857 = cljs.core.next(arglist__53857);
var G__52987 = cljs.core.first(arglist__53857);
arglist__53857 = cljs.core.next(arglist__53857);
var G__52988 = cljs.core.first(arglist__53857);
arglist__53857 = cljs.core.next(arglist__53857);
var G__52989 = cljs.core.first(arglist__53857);
arglist__53857 = cljs.core.next(arglist__53857);
var G__52990 = cljs.core.first(arglist__53857);
arglist__53857 = cljs.core.next(arglist__53857);
var G__52991 = cljs.core.first(arglist__53857);
arglist__53857 = cljs.core.next(arglist__53857);
var G__52992 = cljs.core.first(arglist__53857);
arglist__53857 = cljs.core.next(arglist__53857);
var G__52993 = cljs.core.first(arglist__53857);
arglist__53857 = cljs.core.next(arglist__53857);
var G__52994 = cljs.core.first(arglist__53857);
arglist__53857 = cljs.core.next(arglist__53857);
var G__52995 = cljs.core.first(arglist__53857);
arglist__53857 = cljs.core.next(arglist__53857);
var G__52996 = cljs.core.first(arglist__53857);
var G__52997 = cljs.core.rest(arglist__53857);
return sci$impl$fns$fun_$_arity_20__delegate(G__52977,G__52978,G__52979,G__52980,G__52981,G__52982,G__52983,G__52984,G__52985,G__52986,G__52987,G__52988,G__52989,G__52990,G__52991,G__52992,G__52993,G__52994,G__52995,G__52996,G__52997);
});
sci$impl$fns$fun_$_arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_arity_20__delegate;
return sci$impl$fns$fun_$_arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52419)].join('')));

}
})():(function (){var G__53028 = (fixed_arity | (0));
switch (G__53028) {
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
var G__53041 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__53040){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53040);

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
var G__53044 = cljs.core._nth(params,(0));
var G__53045 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__53042,G__53043){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53042);

(invoc_array[(1)] = G__53043);

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
var G__53053 = cljs.core._nth(params,(0));
var G__53054 = cljs.core._nth(params,(1));
var G__53055 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__53050,G__53051,G__53052){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53050);

(invoc_array[(1)] = G__53051);

(invoc_array[(2)] = G__53052);

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
var G__53067 = cljs.core._nth(params,(0));
var G__53068 = cljs.core._nth(params,(1));
var G__53069 = cljs.core._nth(params,(2));
var G__53070 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__53063,G__53064,G__53065,G__53066){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53063);

(invoc_array[(1)] = G__53064);

(invoc_array[(2)] = G__53065);

(invoc_array[(3)] = G__53066);

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
var G__53076 = cljs.core._nth(params,(0));
var G__53077 = cljs.core._nth(params,(1));
var G__53078 = cljs.core._nth(params,(2));
var G__53079 = cljs.core._nth(params,(3));
var G__53080 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__53071,G__53072,G__53073,G__53074,G__53075){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53071);

(invoc_array[(1)] = G__53072);

(invoc_array[(2)] = G__53073);

(invoc_array[(3)] = G__53074);

(invoc_array[(4)] = G__53075);

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
var G__53098 = cljs.core._nth(params,(0));
var G__53100 = cljs.core._nth(params,(1));
var G__53101 = cljs.core._nth(params,(2));
var G__53102 = cljs.core._nth(params,(3));
var G__53103 = cljs.core._nth(params,(4));
var G__53104 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__53092,G__53093,G__53094,G__53095,G__53096,G__53097){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53092);

(invoc_array[(1)] = G__53093);

(invoc_array[(2)] = G__53094);

(invoc_array[(3)] = G__53095);

(invoc_array[(4)] = G__53096);

(invoc_array[(5)] = G__53097);

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
var G__53126 = cljs.core._nth(params,(0));
var G__53127 = cljs.core._nth(params,(1));
var G__53128 = cljs.core._nth(params,(2));
var G__53129 = cljs.core._nth(params,(3));
var G__53130 = cljs.core._nth(params,(4));
var G__53131 = cljs.core._nth(params,(5));
var G__53132 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__53119,G__53120,G__53121,G__53122,G__53123,G__53124,G__53125){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53119);

(invoc_array[(1)] = G__53120);

(invoc_array[(2)] = G__53121);

(invoc_array[(3)] = G__53122);

(invoc_array[(4)] = G__53123);

(invoc_array[(5)] = G__53124);

(invoc_array[(6)] = G__53125);

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
var G__53144 = cljs.core._nth(params,(0));
var G__53145 = cljs.core._nth(params,(1));
var G__53146 = cljs.core._nth(params,(2));
var G__53147 = cljs.core._nth(params,(3));
var G__53148 = cljs.core._nth(params,(4));
var G__53149 = cljs.core._nth(params,(5));
var G__53150 = cljs.core._nth(params,(6));
var G__53151 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__53136,G__53137,G__53138,G__53139,G__53140,G__53141,G__53142,G__53143){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53136);

(invoc_array[(1)] = G__53137);

(invoc_array[(2)] = G__53138);

(invoc_array[(3)] = G__53139);

(invoc_array[(4)] = G__53140);

(invoc_array[(5)] = G__53141);

(invoc_array[(6)] = G__53142);

(invoc_array[(7)] = G__53143);

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
var G__53164 = cljs.core._nth(params,(0));
var G__53165 = cljs.core._nth(params,(1));
var G__53166 = cljs.core._nth(params,(2));
var G__53167 = cljs.core._nth(params,(3));
var G__53168 = cljs.core._nth(params,(4));
var G__53169 = cljs.core._nth(params,(5));
var G__53170 = cljs.core._nth(params,(6));
var G__53171 = cljs.core._nth(params,(7));
var G__53172 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__53155,G__53156,G__53157,G__53158,G__53159,G__53160,G__53161,G__53162,G__53163){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53155);

(invoc_array[(1)] = G__53156);

(invoc_array[(2)] = G__53157);

(invoc_array[(3)] = G__53158);

(invoc_array[(4)] = G__53159);

(invoc_array[(5)] = G__53160);

(invoc_array[(6)] = G__53161);

(invoc_array[(7)] = G__53162);

(invoc_array[(8)] = G__53163);

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
var G__53184 = cljs.core._nth(params,(0));
var G__53185 = cljs.core._nth(params,(1));
var G__53186 = cljs.core._nth(params,(2));
var G__53187 = cljs.core._nth(params,(3));
var G__53188 = cljs.core._nth(params,(4));
var G__53189 = cljs.core._nth(params,(5));
var G__53190 = cljs.core._nth(params,(6));
var G__53191 = cljs.core._nth(params,(7));
var G__53192 = cljs.core._nth(params,(8));
var G__53193 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__53174,G__53175,G__53176,G__53177,G__53178,G__53179,G__53180,G__53181,G__53182,G__53183){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53174);

(invoc_array[(1)] = G__53175);

(invoc_array[(2)] = G__53176);

(invoc_array[(3)] = G__53177);

(invoc_array[(4)] = G__53178);

(invoc_array[(5)] = G__53179);

(invoc_array[(6)] = G__53180);

(invoc_array[(7)] = G__53181);

(invoc_array[(8)] = G__53182);

(invoc_array[(9)] = G__53183);

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
var G__53216 = cljs.core._nth(params,(0));
var G__53217 = cljs.core._nth(params,(1));
var G__53218 = cljs.core._nth(params,(2));
var G__53219 = cljs.core._nth(params,(3));
var G__53220 = cljs.core._nth(params,(4));
var G__53221 = cljs.core._nth(params,(5));
var G__53222 = cljs.core._nth(params,(6));
var G__53223 = cljs.core._nth(params,(7));
var G__53224 = cljs.core._nth(params,(8));
var G__53225 = cljs.core._nth(params,(9));
var G__53226 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__53205,G__53206,G__53207,G__53208,G__53209,G__53210,G__53211,G__53212,G__53213,G__53214,G__53215){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53205);

(invoc_array[(1)] = G__53206);

(invoc_array[(2)] = G__53207);

(invoc_array[(3)] = G__53208);

(invoc_array[(4)] = G__53209);

(invoc_array[(5)] = G__53210);

(invoc_array[(6)] = G__53211);

(invoc_array[(7)] = G__53212);

(invoc_array[(8)] = G__53213);

(invoc_array[(9)] = G__53214);

(invoc_array[(10)] = G__53215);

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
var G__53248 = cljs.core._nth(params,(0));
var G__53249 = cljs.core._nth(params,(1));
var G__53250 = cljs.core._nth(params,(2));
var G__53251 = cljs.core._nth(params,(3));
var G__53252 = cljs.core._nth(params,(4));
var G__53253 = cljs.core._nth(params,(5));
var G__53254 = cljs.core._nth(params,(6));
var G__53255 = cljs.core._nth(params,(7));
var G__53256 = cljs.core._nth(params,(8));
var G__53257 = cljs.core._nth(params,(9));
var G__53258 = cljs.core._nth(params,(10));
var G__53259 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__53236,G__53237,G__53238,G__53239,G__53240,G__53241,G__53242,G__53243,G__53244,G__53245,G__53246,G__53247){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53236);

(invoc_array[(1)] = G__53237);

(invoc_array[(2)] = G__53238);

(invoc_array[(3)] = G__53239);

(invoc_array[(4)] = G__53240);

(invoc_array[(5)] = G__53241);

(invoc_array[(6)] = G__53242);

(invoc_array[(7)] = G__53243);

(invoc_array[(8)] = G__53244);

(invoc_array[(9)] = G__53245);

(invoc_array[(10)] = G__53246);

(invoc_array[(11)] = G__53247);

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
var G__53282 = cljs.core._nth(params,(0));
var G__53283 = cljs.core._nth(params,(1));
var G__53284 = cljs.core._nth(params,(2));
var G__53285 = cljs.core._nth(params,(3));
var G__53286 = cljs.core._nth(params,(4));
var G__53287 = cljs.core._nth(params,(5));
var G__53288 = cljs.core._nth(params,(6));
var G__53289 = cljs.core._nth(params,(7));
var G__53290 = cljs.core._nth(params,(8));
var G__53291 = cljs.core._nth(params,(9));
var G__53292 = cljs.core._nth(params,(10));
var G__53293 = cljs.core._nth(params,(11));
var G__53294 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__53269,G__53270,G__53271,G__53272,G__53273,G__53274,G__53275,G__53276,G__53277,G__53278,G__53279,G__53280,G__53281){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53269);

(invoc_array[(1)] = G__53270);

(invoc_array[(2)] = G__53271);

(invoc_array[(3)] = G__53272);

(invoc_array[(4)] = G__53273);

(invoc_array[(5)] = G__53274);

(invoc_array[(6)] = G__53275);

(invoc_array[(7)] = G__53276);

(invoc_array[(8)] = G__53277);

(invoc_array[(9)] = G__53278);

(invoc_array[(10)] = G__53279);

(invoc_array[(11)] = G__53280);

(invoc_array[(12)] = G__53281);

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
var G__53320 = cljs.core._nth(params,(0));
var G__53321 = cljs.core._nth(params,(1));
var G__53322 = cljs.core._nth(params,(2));
var G__53323 = cljs.core._nth(params,(3));
var G__53324 = cljs.core._nth(params,(4));
var G__53325 = cljs.core._nth(params,(5));
var G__53326 = cljs.core._nth(params,(6));
var G__53327 = cljs.core._nth(params,(7));
var G__53328 = cljs.core._nth(params,(8));
var G__53329 = cljs.core._nth(params,(9));
var G__53330 = cljs.core._nth(params,(10));
var G__53331 = cljs.core._nth(params,(11));
var G__53332 = cljs.core._nth(params,(12));
var G__53333 = cljs.core._nth(params,(13));
return (function sci$impl$fns$fun_$_arity_14(G__53305,G__53306,G__53307,G__53308,G__53309,G__53310,G__53311,G__53312,G__53313,G__53314,G__53315,G__53317,G__53318,G__53319){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53305);

(invoc_array[(1)] = G__53306);

(invoc_array[(2)] = G__53307);

(invoc_array[(3)] = G__53308);

(invoc_array[(4)] = G__53309);

(invoc_array[(5)] = G__53310);

(invoc_array[(6)] = G__53311);

(invoc_array[(7)] = G__53312);

(invoc_array[(8)] = G__53313);

(invoc_array[(9)] = G__53314);

(invoc_array[(10)] = G__53315);

(invoc_array[(11)] = G__53317);

(invoc_array[(12)] = G__53318);

(invoc_array[(13)] = G__53319);

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
var G__53355 = cljs.core._nth(params,(0));
var G__53356 = cljs.core._nth(params,(1));
var G__53357 = cljs.core._nth(params,(2));
var G__53358 = cljs.core._nth(params,(3));
var G__53359 = cljs.core._nth(params,(4));
var G__53360 = cljs.core._nth(params,(5));
var G__53361 = cljs.core._nth(params,(6));
var G__53362 = cljs.core._nth(params,(7));
var G__53363 = cljs.core._nth(params,(8));
var G__53364 = cljs.core._nth(params,(9));
var G__53365 = cljs.core._nth(params,(10));
var G__53366 = cljs.core._nth(params,(11));
var G__53367 = cljs.core._nth(params,(12));
var G__53368 = cljs.core._nth(params,(13));
var G__53369 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__53340,G__53341,G__53342,G__53343,G__53344,G__53345,G__53346,G__53347,G__53348,G__53349,G__53350,G__53351,G__53352,G__53353,G__53354){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53340);

(invoc_array[(1)] = G__53341);

(invoc_array[(2)] = G__53342);

(invoc_array[(3)] = G__53343);

(invoc_array[(4)] = G__53344);

(invoc_array[(5)] = G__53345);

(invoc_array[(6)] = G__53346);

(invoc_array[(7)] = G__53347);

(invoc_array[(8)] = G__53348);

(invoc_array[(9)] = G__53349);

(invoc_array[(10)] = G__53350);

(invoc_array[(11)] = G__53351);

(invoc_array[(12)] = G__53352);

(invoc_array[(13)] = G__53353);

(invoc_array[(14)] = G__53354);

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
var G__53391 = cljs.core._nth(params,(0));
var G__53392 = cljs.core._nth(params,(1));
var G__53393 = cljs.core._nth(params,(2));
var G__53394 = cljs.core._nth(params,(3));
var G__53395 = cljs.core._nth(params,(4));
var G__53396 = cljs.core._nth(params,(5));
var G__53397 = cljs.core._nth(params,(6));
var G__53398 = cljs.core._nth(params,(7));
var G__53399 = cljs.core._nth(params,(8));
var G__53400 = cljs.core._nth(params,(9));
var G__53401 = cljs.core._nth(params,(10));
var G__53402 = cljs.core._nth(params,(11));
var G__53403 = cljs.core._nth(params,(12));
var G__53404 = cljs.core._nth(params,(13));
var G__53405 = cljs.core._nth(params,(14));
var G__53406 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__53375,G__53376,G__53377,G__53378,G__53379,G__53380,G__53381,G__53382,G__53383,G__53384,G__53385,G__53386,G__53387,G__53388,G__53389,G__53390){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53375);

(invoc_array[(1)] = G__53376);

(invoc_array[(2)] = G__53377);

(invoc_array[(3)] = G__53378);

(invoc_array[(4)] = G__53379);

(invoc_array[(5)] = G__53380);

(invoc_array[(6)] = G__53381);

(invoc_array[(7)] = G__53382);

(invoc_array[(8)] = G__53383);

(invoc_array[(9)] = G__53384);

(invoc_array[(10)] = G__53385);

(invoc_array[(11)] = G__53386);

(invoc_array[(12)] = G__53387);

(invoc_array[(13)] = G__53388);

(invoc_array[(14)] = G__53389);

(invoc_array[(15)] = G__53390);

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
var G__53458 = cljs.core._nth(params,(0));
var G__53459 = cljs.core._nth(params,(1));
var G__53460 = cljs.core._nth(params,(2));
var G__53461 = cljs.core._nth(params,(3));
var G__53462 = cljs.core._nth(params,(4));
var G__53463 = cljs.core._nth(params,(5));
var G__53464 = cljs.core._nth(params,(6));
var G__53465 = cljs.core._nth(params,(7));
var G__53466 = cljs.core._nth(params,(8));
var G__53467 = cljs.core._nth(params,(9));
var G__53468 = cljs.core._nth(params,(10));
var G__53469 = cljs.core._nth(params,(11));
var G__53470 = cljs.core._nth(params,(12));
var G__53471 = cljs.core._nth(params,(13));
var G__53472 = cljs.core._nth(params,(14));
var G__53473 = cljs.core._nth(params,(15));
var G__53474 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__53441,G__53442,G__53443,G__53444,G__53445,G__53446,G__53447,G__53448,G__53449,G__53450,G__53451,G__53452,G__53453,G__53454,G__53455,G__53456,G__53457){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53441);

(invoc_array[(1)] = G__53442);

(invoc_array[(2)] = G__53443);

(invoc_array[(3)] = G__53444);

(invoc_array[(4)] = G__53445);

(invoc_array[(5)] = G__53446);

(invoc_array[(6)] = G__53447);

(invoc_array[(7)] = G__53448);

(invoc_array[(8)] = G__53449);

(invoc_array[(9)] = G__53450);

(invoc_array[(10)] = G__53451);

(invoc_array[(11)] = G__53452);

(invoc_array[(12)] = G__53453);

(invoc_array[(13)] = G__53454);

(invoc_array[(14)] = G__53455);

(invoc_array[(15)] = G__53456);

(invoc_array[(16)] = G__53457);

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
var G__53530 = cljs.core._nth(params,(0));
var G__53531 = cljs.core._nth(params,(1));
var G__53532 = cljs.core._nth(params,(2));
var G__53533 = cljs.core._nth(params,(3));
var G__53534 = cljs.core._nth(params,(4));
var G__53535 = cljs.core._nth(params,(5));
var G__53536 = cljs.core._nth(params,(6));
var G__53537 = cljs.core._nth(params,(7));
var G__53538 = cljs.core._nth(params,(8));
var G__53539 = cljs.core._nth(params,(9));
var G__53540 = cljs.core._nth(params,(10));
var G__53541 = cljs.core._nth(params,(11));
var G__53542 = cljs.core._nth(params,(12));
var G__53543 = cljs.core._nth(params,(13));
var G__53544 = cljs.core._nth(params,(14));
var G__53545 = cljs.core._nth(params,(15));
var G__53546 = cljs.core._nth(params,(16));
var G__53547 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__53512,G__53513,G__53514,G__53515,G__53516,G__53517,G__53518,G__53519,G__53520,G__53521,G__53522,G__53523,G__53524,G__53525,G__53526,G__53527,G__53528,G__53529){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53512);

(invoc_array[(1)] = G__53513);

(invoc_array[(2)] = G__53514);

(invoc_array[(3)] = G__53515);

(invoc_array[(4)] = G__53516);

(invoc_array[(5)] = G__53517);

(invoc_array[(6)] = G__53518);

(invoc_array[(7)] = G__53519);

(invoc_array[(8)] = G__53520);

(invoc_array[(9)] = G__53521);

(invoc_array[(10)] = G__53522);

(invoc_array[(11)] = G__53523);

(invoc_array[(12)] = G__53524);

(invoc_array[(13)] = G__53525);

(invoc_array[(14)] = G__53526);

(invoc_array[(15)] = G__53527);

(invoc_array[(16)] = G__53528);

(invoc_array[(17)] = G__53529);

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
var G__53596 = cljs.core._nth(params,(0));
var G__53597 = cljs.core._nth(params,(1));
var G__53598 = cljs.core._nth(params,(2));
var G__53599 = cljs.core._nth(params,(3));
var G__53600 = cljs.core._nth(params,(4));
var G__53601 = cljs.core._nth(params,(5));
var G__53602 = cljs.core._nth(params,(6));
var G__53603 = cljs.core._nth(params,(7));
var G__53604 = cljs.core._nth(params,(8));
var G__53605 = cljs.core._nth(params,(9));
var G__53606 = cljs.core._nth(params,(10));
var G__53607 = cljs.core._nth(params,(11));
var G__53608 = cljs.core._nth(params,(12));
var G__53609 = cljs.core._nth(params,(13));
var G__53610 = cljs.core._nth(params,(14));
var G__53611 = cljs.core._nth(params,(15));
var G__53612 = cljs.core._nth(params,(16));
var G__53613 = cljs.core._nth(params,(17));
var G__53614 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__53577,G__53578,G__53579,G__53580,G__53581,G__53582,G__53583,G__53584,G__53585,G__53586,G__53587,G__53588,G__53589,G__53590,G__53591,G__53592,G__53593,G__53594,G__53595){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53577);

(invoc_array[(1)] = G__53578);

(invoc_array[(2)] = G__53579);

(invoc_array[(3)] = G__53580);

(invoc_array[(4)] = G__53581);

(invoc_array[(5)] = G__53582);

(invoc_array[(6)] = G__53583);

(invoc_array[(7)] = G__53584);

(invoc_array[(8)] = G__53585);

(invoc_array[(9)] = G__53586);

(invoc_array[(10)] = G__53587);

(invoc_array[(11)] = G__53588);

(invoc_array[(12)] = G__53589);

(invoc_array[(13)] = G__53590);

(invoc_array[(14)] = G__53591);

(invoc_array[(15)] = G__53592);

(invoc_array[(16)] = G__53593);

(invoc_array[(17)] = G__53594);

(invoc_array[(18)] = G__53595);

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
var G__53640 = cljs.core._nth(params,(0));
var G__53641 = cljs.core._nth(params,(1));
var G__53642 = cljs.core._nth(params,(2));
var G__53643 = cljs.core._nth(params,(3));
var G__53644 = cljs.core._nth(params,(4));
var G__53645 = cljs.core._nth(params,(5));
var G__53646 = cljs.core._nth(params,(6));
var G__53647 = cljs.core._nth(params,(7));
var G__53648 = cljs.core._nth(params,(8));
var G__53649 = cljs.core._nth(params,(9));
var G__53650 = cljs.core._nth(params,(10));
var G__53651 = cljs.core._nth(params,(11));
var G__53652 = cljs.core._nth(params,(12));
var G__53653 = cljs.core._nth(params,(13));
var G__53654 = cljs.core._nth(params,(14));
var G__53655 = cljs.core._nth(params,(15));
var G__53656 = cljs.core._nth(params,(16));
var G__53657 = cljs.core._nth(params,(17));
var G__53658 = cljs.core._nth(params,(18));
var G__53659 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__53620,G__53621,G__53622,G__53623,G__53624,G__53625,G__53626,G__53627,G__53628,G__53629,G__53630,G__53631,G__53632,G__53633,G__53634,G__53635,G__53636,G__53637,G__53638,G__53639){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__53620);

(invoc_array[(1)] = G__53621);

(invoc_array[(2)] = G__53622);

(invoc_array[(3)] = G__53623);

(invoc_array[(4)] = G__53624);

(invoc_array[(5)] = G__53625);

(invoc_array[(6)] = G__53626);

(invoc_array[(7)] = G__53627);

(invoc_array[(8)] = G__53628);

(invoc_array[(9)] = G__53629);

(invoc_array[(10)] = G__53630);

(invoc_array[(11)] = G__53631);

(invoc_array[(12)] = G__53632);

(invoc_array[(13)] = G__53633);

(invoc_array[(14)] = G__53634);

(invoc_array[(15)] = G__53635);

(invoc_array[(16)] = G__53636);

(invoc_array[(17)] = G__53637);

(invoc_array[(18)] = G__53638);

(invoc_array[(19)] = G__53639);

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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53028)].join('')));

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
var G__53887__delegate = function (args){
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
var G__53887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53892__i = 0, G__53892__a = new Array(arguments.length -  0);
while (G__53892__i < G__53892__a.length) {G__53892__a[G__53892__i] = arguments[G__53892__i + 0]; ++G__53892__i;}
  args = new cljs.core.IndexedSeq(G__53892__a,0,null);
} 
return G__53887__delegate.call(this,args);};
G__53887.cljs$lang$maxFixedArity = 0;
G__53887.cljs$lang$applyTo = (function (arglist__53896){
var args = cljs.core.seq(arglist__53896);
return G__53887__delegate(args);
});
G__53887.cljs$core$IFn$_invoke$arity$variadic = G__53887__delegate;
return G__53887;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__53668_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__53668_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","inner-fn","sci.impl/inner-fn",1663302998),f], 0));
})):f);
if(cljs.core.truth_(self_ref_QMARK_)){
(enclosed_array[(cljs.core.count(enclosed_array) - (1))] = f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
