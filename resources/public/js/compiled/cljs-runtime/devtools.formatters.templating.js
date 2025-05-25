goog.provide('devtools.formatters.templating');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x47717_47978 = value;
(x47717_47978.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x47761_47979 = value;
(x47761_47979.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x47773_47980 = value;
(x47773_47980.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
return ((devtools.formatters.templating.group_QMARK_(value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((value[(0)]),"object")));
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__5772__auto__ = [];
var len__5766__auto___47981 = arguments.length;
var i__5767__auto___47982 = (0);
while(true){
if((i__5767__auto___47982 < len__5766__auto___47981)){
args__5772__auto__.push((arguments[i__5767__auto___47982]));

var G__47983 = (i__5767__auto___47982 + (1));
i__5767__auto___47982 = G__47983;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_([]);
var seq__47829_47984 = cljs.core.seq(items);
var chunk__47830_47985 = null;
var count__47831_47986 = (0);
var i__47832_47987 = (0);
while(true){
if((i__47832_47987 < count__47831_47986)){
var item_47988 = chunk__47830_47985.cljs$core$IIndexed$_nth$arity$2(null,i__47832_47987);
if((!((item_47988 == null)))){
if(cljs.core.coll_QMARK_(item_47988)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(item_47988)));
} else {
group.push(devtools.formatters.helpers.pref(item_47988));
}
} else {
}


var G__47989 = seq__47829_47984;
var G__47990 = chunk__47830_47985;
var G__47991 = count__47831_47986;
var G__47992 = (i__47832_47987 + (1));
seq__47829_47984 = G__47989;
chunk__47830_47985 = G__47990;
count__47831_47986 = G__47991;
i__47832_47987 = G__47992;
continue;
} else {
var temp__5804__auto___47993 = cljs.core.seq(seq__47829_47984);
if(temp__5804__auto___47993){
var seq__47829_47994__$1 = temp__5804__auto___47993;
if(cljs.core.chunked_seq_QMARK_(seq__47829_47994__$1)){
var c__5565__auto___47995 = cljs.core.chunk_first(seq__47829_47994__$1);
var G__47996 = cljs.core.chunk_rest(seq__47829_47994__$1);
var G__47997 = c__5565__auto___47995;
var G__47998 = cljs.core.count(c__5565__auto___47995);
var G__47999 = (0);
seq__47829_47984 = G__47996;
chunk__47830_47985 = G__47997;
count__47831_47986 = G__47998;
i__47832_47987 = G__47999;
continue;
} else {
var item_48000 = cljs.core.first(seq__47829_47994__$1);
if((!((item_48000 == null)))){
if(cljs.core.coll_QMARK_(item_48000)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(item_48000)));
} else {
group.push(devtools.formatters.helpers.pref(item_48000));
}
} else {
}


var G__48001 = cljs.core.next(seq__47829_47994__$1);
var G__48002 = null;
var G__48003 = (0);
var G__48004 = (0);
seq__47829_47984 = G__48001;
chunk__47830_47985 = G__48002;
count__47831_47986 = G__48003;
i__47832_47987 = G__48004;
continue;
}
} else {
}
}
break;
}

return group;
}));

(devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq47824){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47824));
}));

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__5772__auto__ = [];
var len__5766__auto___48005 = arguments.length;
var i__5767__auto___48006 = (0);
while(true){
if((i__5767__auto___48006 < len__5766__auto___48005)){
args__5772__auto__.push((arguments[i__5767__auto___48006]));

var G__48007 = (i__5767__auto___48006 + (1));
i__5767__auto___48006 = G__48007;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref(tag);
var style__$1 = devtools.formatters.helpers.pref(style);
var template = devtools.formatters.templating.mark_as_template_BANG_([tag__$1,((cljs.core.empty_QMARK_(style__$1))?({}):({"style": style__$1}))]);
var seq__47862_48008 = cljs.core.seq(children);
var chunk__47863_48009 = null;
var count__47864_48010 = (0);
var i__47865_48011 = (0);
while(true){
if((i__47865_48011 < count__47864_48010)){
var child_48012 = chunk__47863_48009.cljs$core$IIndexed$_nth$arity$2(null,i__47865_48011);
if((!((child_48012 == null)))){
if(cljs.core.coll_QMARK_(child_48012)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,child_48012))));
} else {
var temp__5802__auto___48013 = devtools.formatters.helpers.pref(child_48012);
if(cljs.core.truth_(temp__5802__auto___48013)){
var child_value_48014 = temp__5802__auto___48013;
template.push(child_value_48014);
} else {
}
}
} else {
}


var G__48015 = seq__47862_48008;
var G__48016 = chunk__47863_48009;
var G__48017 = count__47864_48010;
var G__48018 = (i__47865_48011 + (1));
seq__47862_48008 = G__48015;
chunk__47863_48009 = G__48016;
count__47864_48010 = G__48017;
i__47865_48011 = G__48018;
continue;
} else {
var temp__5804__auto___48019 = cljs.core.seq(seq__47862_48008);
if(temp__5804__auto___48019){
var seq__47862_48020__$1 = temp__5804__auto___48019;
if(cljs.core.chunked_seq_QMARK_(seq__47862_48020__$1)){
var c__5565__auto___48021 = cljs.core.chunk_first(seq__47862_48020__$1);
var G__48027 = cljs.core.chunk_rest(seq__47862_48020__$1);
var G__48028 = c__5565__auto___48021;
var G__48029 = cljs.core.count(c__5565__auto___48021);
var G__48030 = (0);
seq__47862_48008 = G__48027;
chunk__47863_48009 = G__48028;
count__47864_48010 = G__48029;
i__47865_48011 = G__48030;
continue;
} else {
var child_48031 = cljs.core.first(seq__47862_48020__$1);
if((!((child_48031 == null)))){
if(cljs.core.coll_QMARK_(child_48031)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,child_48031))));
} else {
var temp__5802__auto___48032 = devtools.formatters.helpers.pref(child_48031);
if(cljs.core.truth_(temp__5802__auto___48032)){
var child_value_48033 = temp__5802__auto___48032;
template.push(child_value_48033);
} else {
}
}
} else {
}


var G__48034 = cljs.core.next(seq__47862_48020__$1);
var G__48035 = null;
var G__48036 = (0);
var G__48037 = (0);
seq__47862_48008 = G__48034;
chunk__47863_48009 = G__48035;
count__47864_48010 = G__48036;
i__47865_48011 = G__48037;
continue;
}
} else {
}
}
break;
}

return template;
}));

(devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq47841){
var G__47842 = cljs.core.first(seq47841);
var seq47841__$1 = cljs.core.next(seq47841);
var G__47843 = cljs.core.first(seq47841__$1);
var seq47841__$2 = cljs.core.next(seq47841__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47842,G__47843,seq47841__$2);
}));

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___48038 = arguments.length;
var i__5767__auto___48039 = (0);
while(true){
if((i__5767__auto___48039 < len__5766__auto___48038)){
args__5772__auto__.push((arguments[i__5767__auto___48039]));

var G__48044 = (i__5767__auto___48039 + (1));
i__5767__auto___48039 = G__48044;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_((template["concat"]).apply(template,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.into_array,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,templates)))));
}));

(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq47878){
var G__47879 = cljs.core.first(seq47878);
var seq47878__$1 = cljs.core.next(seq47878);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47879,seq47878__$1);
}));

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___48069 = arguments.length;
var i__5767__auto___48070 = (0);
while(true){
if((i__5767__auto___48070 < len__5766__auto___48069)){
args__5772__auto__.push((arguments[i__5767__auto___48070]));

var G__48071 = (i__5767__auto___48070 + (1));
i__5767__auto___48070 = G__48071;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
}));

(devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq47882){
var G__47883 = cljs.core.first(seq47882);
var seq47882__$1 = cljs.core.next(seq47882);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47883,seq47882__$1);
}));

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__47887 = arguments.length;
switch (G__47887) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2(object,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3(object,header,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4(object,header,body,(0));
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_((function (){var obj47890 = ({"target":object,"header":header,"body":body,"startIndex":(function (){var or__5043__auto__ = start_index;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})()});
return obj47890;
})());
}));

(devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4);

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__5772__auto__ = [];
var len__5766__auto___48085 = arguments.length;
var i__5767__auto___48086 = (0);
while(true){
if((i__5767__auto___48086 < len__5766__auto___48085)){
args__5772__auto__.push((arguments[i__5767__auto___48086]));

var G__48087 = (i__5767__auto___48086 + (1));
i__5767__auto___48086 = G__48087;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__47902){
var vec__47903 = p__47902;
var state_override_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47903,(0),null);
if((((state_override_fn == null)) || (cljs.core.fn_QMARK_(state_override_fn)))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nil-label","nil-label",-587789203)], 0));
} else {
var sub_state = (((!((state_override_fn == null))))?(function (){var G__47909 = devtools.formatters.state.get_current_state();
return (state_override_fn.cljs$core$IFn$_invoke$arity$1 ? state_override_fn.cljs$core$IFn$_invoke$arity$1(G__47909) : state_override_fn.call(null,G__47909));
})():devtools.formatters.state.get_current_state());
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["object",({"object": object, "config": sub_state})], 0));
}
}));

(devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq47894){
var G__47895 = cljs.core.first(seq47894);
var seq47894__$1 = cljs.core.next(seq47894);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47895,seq47894__$1);
}));

devtools.formatters.templating.make_annotation = (function devtools$formatters$templating$make_annotation(data,markups){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(devtools.formatters.templating.make_group,"annotation",cljs.core.clj__GT_js(data),markups);
});
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR__orig_val__47924 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__47925 = (1);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__47925);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([markup], 0));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__47924);
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_(v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk(f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",devtools.formatters.templating.add_stack_separators(devtools.formatters.templating.pprint_render_calls(devtools.formatters.templating.replace_fns_with_markers(cljs.core.reverse(stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",devtools.formatters.templating.pprint_render_path(devtools.formatters.templating._STAR_current_render_path_STAR_),"\n","Render stack:\n",devtools.formatters.templating.pprint_render_stack(devtools.formatters.templating._STAR_current_render_stack_STAR_)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return ((cljs.core.sequential_QMARK_(markup)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(markup),"surrogate")));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__47938 = name;
switch (G__47938) {
case "surrogate":
var obj = cljs.core.first(args);
var converted_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest(args));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.make_surrogate,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first(args);
var converted_obj = ((devtools.formatters.templating.surrogate_markup_QMARK_(obj))?(devtools.formatters.templating.render_json_ml_STAR_.cljs$core$IFn$_invoke$arity$1 ? devtools.formatters.templating.render_json_ml_STAR_.cljs$core$IFn$_invoke$arity$1(obj) : devtools.formatters.templating.render_json_ml_STAR_.call(null,obj)):obj);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.make_reference,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest(args)));

break;
case "annotation":
var data = cljs.core.first(args);
var converted_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest(args));
return devtools.formatters.templating.make_annotation(data,converted_args);

break;
default:
return devtools.formatters.templating.assert_markup_error(["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if(((cljs.core.seqable_QMARK_(v)) || (((cljs.core.array_QMARK_(v)) || (typeof v === 'string'))))){
return cljs.core.empty_QMARK_(v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__47950 = tag;
var html_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47950,(0),null);
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47950,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if((!(cljs.core.sequential_QMARK_(markup)))){
return markup;
} else {
var _STAR_current_render_path_STAR__orig_val__47958 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_path_STAR__temp_val__47959 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first(markup));
(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__47959);

try{var tag = devtools.formatters.helpers.pref(cljs.core.first(markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special(tag,cljs.core.rest(markup));
} else {
if(cljs.core.sequential_QMARK_(tag)){
return devtools.formatters.templating.render_subtree(tag,cljs.core.rest(markup));
} else {
return devtools.formatters.templating.assert_markup_error(["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview(markup)),":"].join(''));

}
}
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__47958);
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR__orig_val__47963 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR__orig_val__47964 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_stack_STAR__temp_val__47965 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);
var _STAR_current_render_path_STAR__temp_val__47966 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");
(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__temp_val__47965);

(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__47966);

try{return devtools.formatters.templating.render_json_ml_STAR_(markup);
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__47964);

(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__orig_val__47963);
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",["result of markup rendering must be a template,\n","resolved to ",devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)),"initial value: ",devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_value], 0))].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_(value)){
var G__48095 = initial_value;
var G__48096 = (value.cljs$core$IFn$_invoke$arity$0 ? value.cljs$core$IFn$_invoke$arity$0() : value.call(null));
initial_value = G__48095;
value = G__48096;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__48097 = initial_value;
var G__48098 = devtools.formatters.helpers.pref(value);
initial_value = G__48097;
value = G__48098;
continue;
} else {
if(cljs.core.sequential_QMARK_(value)){
var G__48099 = initial_value;
var G__48100 = devtools.formatters.templating.render_json_ml(value);
initial_value = G__48099;
value = G__48100;
continue;
} else {
if(devtools.formatters.templating.template_QMARK_(value)){
return value;
} else {
if(devtools.formatters.templating.surrogate_QMARK_(value)){
return value;
} else {
if(devtools.formatters.templating.reference_QMARK_(value)){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_(value,value);
});

//# sourceMappingURL=devtools.formatters.templating.js.map
