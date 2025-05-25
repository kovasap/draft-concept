goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_62783 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_62783(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_62784 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_62784(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__61897 = coll;
var G__61898 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__61897,G__61898) : shadow.dom.lazy_native_coll_seq.call(null,G__61897,G__61898));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5043__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__61917 = arguments.length;
switch (G__61917) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__61919 = arguments.length;
switch (G__61919) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__61924 = arguments.length;
switch (G__61924) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__61929 = arguments.length;
switch (G__61929) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__61934 = arguments.length;
switch (G__61934) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__61938 = arguments.length;
switch (G__61938) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e61954){if((e61954 instanceof Object)){
var e = e61954;
return console.log("didnt support attachEvent",el,e);
} else {
throw e61954;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__61958 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__61959 = null;
var count__61960 = (0);
var i__61961 = (0);
while(true){
if((i__61961 < count__61960)){
var el = chunk__61959.cljs$core$IIndexed$_nth$arity$2(null,i__61961);
var handler_62796__$1 = ((function (seq__61958,chunk__61959,count__61960,i__61961,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__61958,chunk__61959,count__61960,i__61961,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_62796__$1);


var G__62797 = seq__61958;
var G__62798 = chunk__61959;
var G__62799 = count__61960;
var G__62800 = (i__61961 + (1));
seq__61958 = G__62797;
chunk__61959 = G__62798;
count__61960 = G__62799;
i__61961 = G__62800;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__61958);
if(temp__5804__auto__){
var seq__61958__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61958__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__61958__$1);
var G__62801 = cljs.core.chunk_rest(seq__61958__$1);
var G__62802 = c__5565__auto__;
var G__62803 = cljs.core.count(c__5565__auto__);
var G__62804 = (0);
seq__61958 = G__62801;
chunk__61959 = G__62802;
count__61960 = G__62803;
i__61961 = G__62804;
continue;
} else {
var el = cljs.core.first(seq__61958__$1);
var handler_62805__$1 = ((function (seq__61958,chunk__61959,count__61960,i__61961,el,seq__61958__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__61958,chunk__61959,count__61960,i__61961,el,seq__61958__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_62805__$1);


var G__62806 = cljs.core.next(seq__61958__$1);
var G__62807 = null;
var G__62808 = (0);
var G__62809 = (0);
seq__61958 = G__62806;
chunk__61959 = G__62807;
count__61960 = G__62808;
i__61961 = G__62809;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__61984 = arguments.length;
switch (G__61984) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__61997 = cljs.core.seq(events);
var chunk__61999 = null;
var count__62000 = (0);
var i__62001 = (0);
while(true){
if((i__62001 < count__62000)){
var vec__62014 = chunk__61999.cljs$core$IIndexed$_nth$arity$2(null,i__62001);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62014,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62014,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__62817 = seq__61997;
var G__62818 = chunk__61999;
var G__62819 = count__62000;
var G__62820 = (i__62001 + (1));
seq__61997 = G__62817;
chunk__61999 = G__62818;
count__62000 = G__62819;
i__62001 = G__62820;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__61997);
if(temp__5804__auto__){
var seq__61997__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61997__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__61997__$1);
var G__62822 = cljs.core.chunk_rest(seq__61997__$1);
var G__62823 = c__5565__auto__;
var G__62824 = cljs.core.count(c__5565__auto__);
var G__62825 = (0);
seq__61997 = G__62822;
chunk__61999 = G__62823;
count__62000 = G__62824;
i__62001 = G__62825;
continue;
} else {
var vec__62024 = cljs.core.first(seq__61997__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62024,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62024,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__62826 = cljs.core.next(seq__61997__$1);
var G__62827 = null;
var G__62828 = (0);
var G__62829 = (0);
seq__61997 = G__62826;
chunk__61999 = G__62827;
count__62000 = G__62828;
i__62001 = G__62829;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__62031 = cljs.core.seq(styles);
var chunk__62032 = null;
var count__62033 = (0);
var i__62034 = (0);
while(true){
if((i__62034 < count__62033)){
var vec__62063 = chunk__62032.cljs$core$IIndexed$_nth$arity$2(null,i__62034);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62063,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62063,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__62830 = seq__62031;
var G__62831 = chunk__62032;
var G__62832 = count__62033;
var G__62833 = (i__62034 + (1));
seq__62031 = G__62830;
chunk__62032 = G__62831;
count__62033 = G__62832;
i__62034 = G__62833;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62031);
if(temp__5804__auto__){
var seq__62031__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62031__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__62031__$1);
var G__62834 = cljs.core.chunk_rest(seq__62031__$1);
var G__62835 = c__5565__auto__;
var G__62836 = cljs.core.count(c__5565__auto__);
var G__62837 = (0);
seq__62031 = G__62834;
chunk__62032 = G__62835;
count__62033 = G__62836;
i__62034 = G__62837;
continue;
} else {
var vec__62067 = cljs.core.first(seq__62031__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62067,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62067,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__62838 = cljs.core.next(seq__62031__$1);
var G__62839 = null;
var G__62840 = (0);
var G__62841 = (0);
seq__62031 = G__62838;
chunk__62032 = G__62839;
count__62033 = G__62840;
i__62034 = G__62841;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__62105_62842 = key;
var G__62105_62843__$1 = (((G__62105_62842 instanceof cljs.core.Keyword))?G__62105_62842.fqn:null);
switch (G__62105_62843__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_62845 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_62845,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_62845,"aria-");
}
})())){
el.setAttribute(ks_62845,value);
} else {
(el[ks_62845] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__62136){
var map__62138 = p__62136;
var map__62138__$1 = cljs.core.__destructure_map(map__62138);
var props = map__62138__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62138__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__62140 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62140,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62140,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62140,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__62145 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__62145,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__62145;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__62148 = arguments.length;
switch (G__62148) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__62157){
var vec__62160 = p__62157;
var seq__62161 = cljs.core.seq(vec__62160);
var first__62162 = cljs.core.first(seq__62161);
var seq__62161__$1 = cljs.core.next(seq__62161);
var nn = first__62162;
var first__62162__$1 = cljs.core.first(seq__62161__$1);
var seq__62161__$2 = cljs.core.next(seq__62161__$1);
var np = first__62162__$1;
var nc = seq__62161__$2;
var node = vec__62160;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__62166 = nn;
var G__62167 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__62166,G__62167) : create_fn.call(null,G__62166,G__62167));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__62168 = nn;
var G__62169 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__62168,G__62169) : create_fn.call(null,G__62168,G__62169));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__62171 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62171,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62171,(1),null);
var seq__62174_62855 = cljs.core.seq(node_children);
var chunk__62175_62856 = null;
var count__62176_62857 = (0);
var i__62177_62858 = (0);
while(true){
if((i__62177_62858 < count__62176_62857)){
var child_struct_62860 = chunk__62175_62856.cljs$core$IIndexed$_nth$arity$2(null,i__62177_62858);
var children_62861 = shadow.dom.dom_node(child_struct_62860);
if(cljs.core.seq_QMARK_(children_62861)){
var seq__62226_62862 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_62861));
var chunk__62228_62863 = null;
var count__62229_62864 = (0);
var i__62230_62865 = (0);
while(true){
if((i__62230_62865 < count__62229_62864)){
var child_62866 = chunk__62228_62863.cljs$core$IIndexed$_nth$arity$2(null,i__62230_62865);
if(cljs.core.truth_(child_62866)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62866);


var G__62868 = seq__62226_62862;
var G__62869 = chunk__62228_62863;
var G__62870 = count__62229_62864;
var G__62871 = (i__62230_62865 + (1));
seq__62226_62862 = G__62868;
chunk__62228_62863 = G__62869;
count__62229_62864 = G__62870;
i__62230_62865 = G__62871;
continue;
} else {
var G__62873 = seq__62226_62862;
var G__62874 = chunk__62228_62863;
var G__62875 = count__62229_62864;
var G__62876 = (i__62230_62865 + (1));
seq__62226_62862 = G__62873;
chunk__62228_62863 = G__62874;
count__62229_62864 = G__62875;
i__62230_62865 = G__62876;
continue;
}
} else {
var temp__5804__auto___62877 = cljs.core.seq(seq__62226_62862);
if(temp__5804__auto___62877){
var seq__62226_62878__$1 = temp__5804__auto___62877;
if(cljs.core.chunked_seq_QMARK_(seq__62226_62878__$1)){
var c__5565__auto___62879 = cljs.core.chunk_first(seq__62226_62878__$1);
var G__62880 = cljs.core.chunk_rest(seq__62226_62878__$1);
var G__62881 = c__5565__auto___62879;
var G__62882 = cljs.core.count(c__5565__auto___62879);
var G__62883 = (0);
seq__62226_62862 = G__62880;
chunk__62228_62863 = G__62881;
count__62229_62864 = G__62882;
i__62230_62865 = G__62883;
continue;
} else {
var child_62884 = cljs.core.first(seq__62226_62878__$1);
if(cljs.core.truth_(child_62884)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62884);


var G__62888 = cljs.core.next(seq__62226_62878__$1);
var G__62889 = null;
var G__62890 = (0);
var G__62891 = (0);
seq__62226_62862 = G__62888;
chunk__62228_62863 = G__62889;
count__62229_62864 = G__62890;
i__62230_62865 = G__62891;
continue;
} else {
var G__62892 = cljs.core.next(seq__62226_62878__$1);
var G__62893 = null;
var G__62894 = (0);
var G__62895 = (0);
seq__62226_62862 = G__62892;
chunk__62228_62863 = G__62893;
count__62229_62864 = G__62894;
i__62230_62865 = G__62895;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_62861);
}


var G__62896 = seq__62174_62855;
var G__62897 = chunk__62175_62856;
var G__62898 = count__62176_62857;
var G__62899 = (i__62177_62858 + (1));
seq__62174_62855 = G__62896;
chunk__62175_62856 = G__62897;
count__62176_62857 = G__62898;
i__62177_62858 = G__62899;
continue;
} else {
var temp__5804__auto___62900 = cljs.core.seq(seq__62174_62855);
if(temp__5804__auto___62900){
var seq__62174_62901__$1 = temp__5804__auto___62900;
if(cljs.core.chunked_seq_QMARK_(seq__62174_62901__$1)){
var c__5565__auto___62902 = cljs.core.chunk_first(seq__62174_62901__$1);
var G__62903 = cljs.core.chunk_rest(seq__62174_62901__$1);
var G__62904 = c__5565__auto___62902;
var G__62905 = cljs.core.count(c__5565__auto___62902);
var G__62906 = (0);
seq__62174_62855 = G__62903;
chunk__62175_62856 = G__62904;
count__62176_62857 = G__62905;
i__62177_62858 = G__62906;
continue;
} else {
var child_struct_62907 = cljs.core.first(seq__62174_62901__$1);
var children_62908 = shadow.dom.dom_node(child_struct_62907);
if(cljs.core.seq_QMARK_(children_62908)){
var seq__62259_62909 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_62908));
var chunk__62261_62910 = null;
var count__62262_62911 = (0);
var i__62263_62912 = (0);
while(true){
if((i__62263_62912 < count__62262_62911)){
var child_62913 = chunk__62261_62910.cljs$core$IIndexed$_nth$arity$2(null,i__62263_62912);
if(cljs.core.truth_(child_62913)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62913);


var G__62915 = seq__62259_62909;
var G__62916 = chunk__62261_62910;
var G__62917 = count__62262_62911;
var G__62918 = (i__62263_62912 + (1));
seq__62259_62909 = G__62915;
chunk__62261_62910 = G__62916;
count__62262_62911 = G__62917;
i__62263_62912 = G__62918;
continue;
} else {
var G__62919 = seq__62259_62909;
var G__62920 = chunk__62261_62910;
var G__62921 = count__62262_62911;
var G__62922 = (i__62263_62912 + (1));
seq__62259_62909 = G__62919;
chunk__62261_62910 = G__62920;
count__62262_62911 = G__62921;
i__62263_62912 = G__62922;
continue;
}
} else {
var temp__5804__auto___62923__$1 = cljs.core.seq(seq__62259_62909);
if(temp__5804__auto___62923__$1){
var seq__62259_62925__$1 = temp__5804__auto___62923__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62259_62925__$1)){
var c__5565__auto___62926 = cljs.core.chunk_first(seq__62259_62925__$1);
var G__62927 = cljs.core.chunk_rest(seq__62259_62925__$1);
var G__62928 = c__5565__auto___62926;
var G__62929 = cljs.core.count(c__5565__auto___62926);
var G__62930 = (0);
seq__62259_62909 = G__62927;
chunk__62261_62910 = G__62928;
count__62262_62911 = G__62929;
i__62263_62912 = G__62930;
continue;
} else {
var child_62931 = cljs.core.first(seq__62259_62925__$1);
if(cljs.core.truth_(child_62931)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62931);


var G__62932 = cljs.core.next(seq__62259_62925__$1);
var G__62933 = null;
var G__62934 = (0);
var G__62935 = (0);
seq__62259_62909 = G__62932;
chunk__62261_62910 = G__62933;
count__62262_62911 = G__62934;
i__62263_62912 = G__62935;
continue;
} else {
var G__62936 = cljs.core.next(seq__62259_62925__$1);
var G__62937 = null;
var G__62938 = (0);
var G__62939 = (0);
seq__62259_62909 = G__62936;
chunk__62261_62910 = G__62937;
count__62262_62911 = G__62938;
i__62263_62912 = G__62939;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_62908);
}


var G__62940 = cljs.core.next(seq__62174_62901__$1);
var G__62941 = null;
var G__62942 = (0);
var G__62943 = (0);
seq__62174_62855 = G__62940;
chunk__62175_62856 = G__62941;
count__62176_62857 = G__62942;
i__62177_62858 = G__62943;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__62327 = cljs.core.seq(node);
var chunk__62328 = null;
var count__62329 = (0);
var i__62330 = (0);
while(true){
if((i__62330 < count__62329)){
var n = chunk__62328.cljs$core$IIndexed$_nth$arity$2(null,i__62330);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__62945 = seq__62327;
var G__62946 = chunk__62328;
var G__62947 = count__62329;
var G__62948 = (i__62330 + (1));
seq__62327 = G__62945;
chunk__62328 = G__62946;
count__62329 = G__62947;
i__62330 = G__62948;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62327);
if(temp__5804__auto__){
var seq__62327__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62327__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__62327__$1);
var G__62949 = cljs.core.chunk_rest(seq__62327__$1);
var G__62950 = c__5565__auto__;
var G__62951 = cljs.core.count(c__5565__auto__);
var G__62952 = (0);
seq__62327 = G__62949;
chunk__62328 = G__62950;
count__62329 = G__62951;
i__62330 = G__62952;
continue;
} else {
var n = cljs.core.first(seq__62327__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__62953 = cljs.core.next(seq__62327__$1);
var G__62954 = null;
var G__62955 = (0);
var G__62956 = (0);
seq__62327 = G__62953;
chunk__62328 = G__62954;
count__62329 = G__62955;
i__62330 = G__62956;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__62343 = arguments.length;
switch (G__62343) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__62346 = arguments.length;
switch (G__62346) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__62353 = arguments.length;
switch (G__62353) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5043__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5772__auto__ = [];
var len__5766__auto___62966 = arguments.length;
var i__5767__auto___62967 = (0);
while(true){
if((i__5767__auto___62967 < len__5766__auto___62966)){
args__5772__auto__.push((arguments[i__5767__auto___62967]));

var G__62968 = (i__5767__auto___62967 + (1));
i__5767__auto___62967 = G__62968;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__62357_62969 = cljs.core.seq(nodes);
var chunk__62358_62970 = null;
var count__62359_62971 = (0);
var i__62360_62972 = (0);
while(true){
if((i__62360_62972 < count__62359_62971)){
var node_62973 = chunk__62358_62970.cljs$core$IIndexed$_nth$arity$2(null,i__62360_62972);
fragment.appendChild(shadow.dom._to_dom(node_62973));


var G__62974 = seq__62357_62969;
var G__62975 = chunk__62358_62970;
var G__62976 = count__62359_62971;
var G__62977 = (i__62360_62972 + (1));
seq__62357_62969 = G__62974;
chunk__62358_62970 = G__62975;
count__62359_62971 = G__62976;
i__62360_62972 = G__62977;
continue;
} else {
var temp__5804__auto___62978 = cljs.core.seq(seq__62357_62969);
if(temp__5804__auto___62978){
var seq__62357_62979__$1 = temp__5804__auto___62978;
if(cljs.core.chunked_seq_QMARK_(seq__62357_62979__$1)){
var c__5565__auto___62980 = cljs.core.chunk_first(seq__62357_62979__$1);
var G__62981 = cljs.core.chunk_rest(seq__62357_62979__$1);
var G__62982 = c__5565__auto___62980;
var G__62983 = cljs.core.count(c__5565__auto___62980);
var G__62984 = (0);
seq__62357_62969 = G__62981;
chunk__62358_62970 = G__62982;
count__62359_62971 = G__62983;
i__62360_62972 = G__62984;
continue;
} else {
var node_62985 = cljs.core.first(seq__62357_62979__$1);
fragment.appendChild(shadow.dom._to_dom(node_62985));


var G__62986 = cljs.core.next(seq__62357_62979__$1);
var G__62987 = null;
var G__62988 = (0);
var G__62989 = (0);
seq__62357_62969 = G__62986;
chunk__62358_62970 = G__62987;
count__62359_62971 = G__62988;
i__62360_62972 = G__62989;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq62354){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62354));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__62371_62990 = cljs.core.seq(scripts);
var chunk__62372_62991 = null;
var count__62373_62992 = (0);
var i__62374_62993 = (0);
while(true){
if((i__62374_62993 < count__62373_62992)){
var vec__62383_62994 = chunk__62372_62991.cljs$core$IIndexed$_nth$arity$2(null,i__62374_62993);
var script_tag_62995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62383_62994,(0),null);
var script_body_62996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62383_62994,(1),null);
eval(script_body_62996);


var G__62997 = seq__62371_62990;
var G__62998 = chunk__62372_62991;
var G__62999 = count__62373_62992;
var G__63000 = (i__62374_62993 + (1));
seq__62371_62990 = G__62997;
chunk__62372_62991 = G__62998;
count__62373_62992 = G__62999;
i__62374_62993 = G__63000;
continue;
} else {
var temp__5804__auto___63001 = cljs.core.seq(seq__62371_62990);
if(temp__5804__auto___63001){
var seq__62371_63002__$1 = temp__5804__auto___63001;
if(cljs.core.chunked_seq_QMARK_(seq__62371_63002__$1)){
var c__5565__auto___63006 = cljs.core.chunk_first(seq__62371_63002__$1);
var G__63007 = cljs.core.chunk_rest(seq__62371_63002__$1);
var G__63008 = c__5565__auto___63006;
var G__63009 = cljs.core.count(c__5565__auto___63006);
var G__63010 = (0);
seq__62371_62990 = G__63007;
chunk__62372_62991 = G__63008;
count__62373_62992 = G__63009;
i__62374_62993 = G__63010;
continue;
} else {
var vec__62389_63011 = cljs.core.first(seq__62371_63002__$1);
var script_tag_63012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62389_63011,(0),null);
var script_body_63013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62389_63011,(1),null);
eval(script_body_63013);


var G__63014 = cljs.core.next(seq__62371_63002__$1);
var G__63015 = null;
var G__63016 = (0);
var G__63017 = (0);
seq__62371_62990 = G__63014;
chunk__62372_62991 = G__63015;
count__62373_62992 = G__63016;
i__62374_62993 = G__63017;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__62394){
var vec__62396 = p__62394;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62396,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62396,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__62408 = arguments.length;
switch (G__62408) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__62418 = cljs.core.seq(style_keys);
var chunk__62419 = null;
var count__62420 = (0);
var i__62421 = (0);
while(true){
if((i__62421 < count__62420)){
var it = chunk__62419.cljs$core$IIndexed$_nth$arity$2(null,i__62421);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__63023 = seq__62418;
var G__63024 = chunk__62419;
var G__63025 = count__62420;
var G__63026 = (i__62421 + (1));
seq__62418 = G__63023;
chunk__62419 = G__63024;
count__62420 = G__63025;
i__62421 = G__63026;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62418);
if(temp__5804__auto__){
var seq__62418__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62418__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__62418__$1);
var G__63027 = cljs.core.chunk_rest(seq__62418__$1);
var G__63028 = c__5565__auto__;
var G__63029 = cljs.core.count(c__5565__auto__);
var G__63030 = (0);
seq__62418 = G__63027;
chunk__62419 = G__63028;
count__62420 = G__63029;
i__62421 = G__63030;
continue;
} else {
var it = cljs.core.first(seq__62418__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__63031 = cljs.core.next(seq__62418__$1);
var G__63032 = null;
var G__63033 = (0);
var G__63034 = (0);
seq__62418 = G__63031;
chunk__62419 = G__63032;
count__62420 = G__63033;
i__62421 = G__63034;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k62423,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__62439 = k62423;
var G__62439__$1 = (((G__62439 instanceof cljs.core.Keyword))?G__62439.fqn:null);
switch (G__62439__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62423,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__62443){
var vec__62445 = p__62443;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62445,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62445,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62422){
var self__ = this;
var G__62422__$1 = this;
return (new cljs.core.RecordIter((0),G__62422__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62424,other62425){
var self__ = this;
var this62424__$1 = this;
return (((!((other62425 == null)))) && ((((this62424__$1.constructor === other62425.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62424__$1.x,other62425.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62424__$1.y,other62425.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62424__$1.__extmap,other62425.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k62423){
var self__ = this;
var this__5347__auto____$1 = this;
var G__62469 = k62423;
var G__62469__$1 = (((G__62469 instanceof cljs.core.Keyword))?G__62469.fqn:null);
switch (G__62469__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k62423);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__62422){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__62472 = cljs.core.keyword_identical_QMARK_;
var expr__62473 = k__5349__auto__;
if(cljs.core.truth_((pred__62472.cljs$core$IFn$_invoke$arity$2 ? pred__62472.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__62473) : pred__62472.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__62473)))){
return (new shadow.dom.Coordinate(G__62422,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62472.cljs$core$IFn$_invoke$arity$2 ? pred__62472.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__62473) : pred__62472.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__62473)))){
return (new shadow.dom.Coordinate(self__.x,G__62422,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__62422),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__62422){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__62422,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__62428){
var extmap__5382__auto__ = (function (){var G__62488 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62428,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__62428)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62488);
} else {
return G__62488;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__62428),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__62428),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k62490,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__62494 = k62490;
var G__62494__$1 = (((G__62494 instanceof cljs.core.Keyword))?G__62494.fqn:null);
switch (G__62494__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62490,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__62495){
var vec__62496 = p__62495;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62496,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62496,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Size{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62489){
var self__ = this;
var G__62489__$1 = this;
return (new cljs.core.RecordIter((0),G__62489__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62491,other62492){
var self__ = this;
var this62491__$1 = this;
return (((!((other62492 == null)))) && ((((this62491__$1.constructor === other62492.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62491__$1.w,other62492.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62491__$1.h,other62492.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62491__$1.__extmap,other62492.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k62490){
var self__ = this;
var this__5347__auto____$1 = this;
var G__62517 = k62490;
var G__62517__$1 = (((G__62517 instanceof cljs.core.Keyword))?G__62517.fqn:null);
switch (G__62517__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k62490);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__62489){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__62523 = cljs.core.keyword_identical_QMARK_;
var expr__62524 = k__5349__auto__;
if(cljs.core.truth_((pred__62523.cljs$core$IFn$_invoke$arity$2 ? pred__62523.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__62524) : pred__62523.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__62524)))){
return (new shadow.dom.Size(G__62489,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62523.cljs$core$IFn$_invoke$arity$2 ? pred__62523.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__62524) : pred__62523.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__62524)))){
return (new shadow.dom.Size(self__.w,G__62489,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__62489),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__62489){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__62489,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__62493){
var extmap__5382__auto__ = (function (){var G__62541 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62493,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__62493)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62541);
} else {
return G__62541;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__62493),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__62493),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5630__auto__ = opts;
var l__5631__auto__ = a__5630__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5631__auto__)){
var G__63059 = (i + (1));
var G__63060 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__63059;
ret = G__63060;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__62578){
var vec__62580 = p__62578;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62580,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62580,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__62594 = arguments.length;
switch (G__62594) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__63066 = ps;
var G__63067 = (i + (1));
el__$1 = G__63066;
i = G__63067;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__62682 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62682,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62682,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62682,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__62688_63071 = cljs.core.seq(props);
var chunk__62689_63072 = null;
var count__62690_63073 = (0);
var i__62691_63074 = (0);
while(true){
if((i__62691_63074 < count__62690_63073)){
var vec__62712_63075 = chunk__62689_63072.cljs$core$IIndexed$_nth$arity$2(null,i__62691_63074);
var k_63076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62712_63075,(0),null);
var v_63077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62712_63075,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_63076);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_63076),v_63077);


var G__63078 = seq__62688_63071;
var G__63079 = chunk__62689_63072;
var G__63080 = count__62690_63073;
var G__63081 = (i__62691_63074 + (1));
seq__62688_63071 = G__63078;
chunk__62689_63072 = G__63079;
count__62690_63073 = G__63080;
i__62691_63074 = G__63081;
continue;
} else {
var temp__5804__auto___63082 = cljs.core.seq(seq__62688_63071);
if(temp__5804__auto___63082){
var seq__62688_63083__$1 = temp__5804__auto___63082;
if(cljs.core.chunked_seq_QMARK_(seq__62688_63083__$1)){
var c__5565__auto___63084 = cljs.core.chunk_first(seq__62688_63083__$1);
var G__63085 = cljs.core.chunk_rest(seq__62688_63083__$1);
var G__63086 = c__5565__auto___63084;
var G__63087 = cljs.core.count(c__5565__auto___63084);
var G__63088 = (0);
seq__62688_63071 = G__63085;
chunk__62689_63072 = G__63086;
count__62690_63073 = G__63087;
i__62691_63074 = G__63088;
continue;
} else {
var vec__62715_63089 = cljs.core.first(seq__62688_63083__$1);
var k_63090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62715_63089,(0),null);
var v_63091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62715_63089,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_63090);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_63090),v_63091);


var G__63092 = cljs.core.next(seq__62688_63083__$1);
var G__63093 = null;
var G__63094 = (0);
var G__63095 = (0);
seq__62688_63071 = G__63092;
chunk__62689_63072 = G__63093;
count__62690_63073 = G__63094;
i__62691_63074 = G__63095;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__62719 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62719,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62719,(1),null);
var seq__62722_63096 = cljs.core.seq(node_children);
var chunk__62724_63097 = null;
var count__62725_63098 = (0);
var i__62726_63099 = (0);
while(true){
if((i__62726_63099 < count__62725_63098)){
var child_struct_63100 = chunk__62724_63097.cljs$core$IIndexed$_nth$arity$2(null,i__62726_63099);
if((!((child_struct_63100 == null)))){
if(typeof child_struct_63100 === 'string'){
var text_63101 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_63101),child_struct_63100].join(''));
} else {
var children_63102 = shadow.dom.svg_node(child_struct_63100);
if(cljs.core.seq_QMARK_(children_63102)){
var seq__62746_63103 = cljs.core.seq(children_63102);
var chunk__62748_63104 = null;
var count__62749_63105 = (0);
var i__62750_63106 = (0);
while(true){
if((i__62750_63106 < count__62749_63105)){
var child_63107 = chunk__62748_63104.cljs$core$IIndexed$_nth$arity$2(null,i__62750_63106);
if(cljs.core.truth_(child_63107)){
node.appendChild(child_63107);


var G__63108 = seq__62746_63103;
var G__63109 = chunk__62748_63104;
var G__63110 = count__62749_63105;
var G__63111 = (i__62750_63106 + (1));
seq__62746_63103 = G__63108;
chunk__62748_63104 = G__63109;
count__62749_63105 = G__63110;
i__62750_63106 = G__63111;
continue;
} else {
var G__63112 = seq__62746_63103;
var G__63113 = chunk__62748_63104;
var G__63114 = count__62749_63105;
var G__63115 = (i__62750_63106 + (1));
seq__62746_63103 = G__63112;
chunk__62748_63104 = G__63113;
count__62749_63105 = G__63114;
i__62750_63106 = G__63115;
continue;
}
} else {
var temp__5804__auto___63116 = cljs.core.seq(seq__62746_63103);
if(temp__5804__auto___63116){
var seq__62746_63117__$1 = temp__5804__auto___63116;
if(cljs.core.chunked_seq_QMARK_(seq__62746_63117__$1)){
var c__5565__auto___63118 = cljs.core.chunk_first(seq__62746_63117__$1);
var G__63119 = cljs.core.chunk_rest(seq__62746_63117__$1);
var G__63120 = c__5565__auto___63118;
var G__63121 = cljs.core.count(c__5565__auto___63118);
var G__63122 = (0);
seq__62746_63103 = G__63119;
chunk__62748_63104 = G__63120;
count__62749_63105 = G__63121;
i__62750_63106 = G__63122;
continue;
} else {
var child_63123 = cljs.core.first(seq__62746_63117__$1);
if(cljs.core.truth_(child_63123)){
node.appendChild(child_63123);


var G__63124 = cljs.core.next(seq__62746_63117__$1);
var G__63125 = null;
var G__63126 = (0);
var G__63127 = (0);
seq__62746_63103 = G__63124;
chunk__62748_63104 = G__63125;
count__62749_63105 = G__63126;
i__62750_63106 = G__63127;
continue;
} else {
var G__63128 = cljs.core.next(seq__62746_63117__$1);
var G__63129 = null;
var G__63130 = (0);
var G__63131 = (0);
seq__62746_63103 = G__63128;
chunk__62748_63104 = G__63129;
count__62749_63105 = G__63130;
i__62750_63106 = G__63131;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_63102);
}
}


var G__63132 = seq__62722_63096;
var G__63133 = chunk__62724_63097;
var G__63134 = count__62725_63098;
var G__63135 = (i__62726_63099 + (1));
seq__62722_63096 = G__63132;
chunk__62724_63097 = G__63133;
count__62725_63098 = G__63134;
i__62726_63099 = G__63135;
continue;
} else {
var G__63136 = seq__62722_63096;
var G__63137 = chunk__62724_63097;
var G__63138 = count__62725_63098;
var G__63139 = (i__62726_63099 + (1));
seq__62722_63096 = G__63136;
chunk__62724_63097 = G__63137;
count__62725_63098 = G__63138;
i__62726_63099 = G__63139;
continue;
}
} else {
var temp__5804__auto___63140 = cljs.core.seq(seq__62722_63096);
if(temp__5804__auto___63140){
var seq__62722_63141__$1 = temp__5804__auto___63140;
if(cljs.core.chunked_seq_QMARK_(seq__62722_63141__$1)){
var c__5565__auto___63142 = cljs.core.chunk_first(seq__62722_63141__$1);
var G__63143 = cljs.core.chunk_rest(seq__62722_63141__$1);
var G__63144 = c__5565__auto___63142;
var G__63145 = cljs.core.count(c__5565__auto___63142);
var G__63146 = (0);
seq__62722_63096 = G__63143;
chunk__62724_63097 = G__63144;
count__62725_63098 = G__63145;
i__62726_63099 = G__63146;
continue;
} else {
var child_struct_63147 = cljs.core.first(seq__62722_63141__$1);
if((!((child_struct_63147 == null)))){
if(typeof child_struct_63147 === 'string'){
var text_63148 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_63148),child_struct_63147].join(''));
} else {
var children_63149 = shadow.dom.svg_node(child_struct_63147);
if(cljs.core.seq_QMARK_(children_63149)){
var seq__62752_63150 = cljs.core.seq(children_63149);
var chunk__62754_63151 = null;
var count__62755_63152 = (0);
var i__62756_63153 = (0);
while(true){
if((i__62756_63153 < count__62755_63152)){
var child_63154 = chunk__62754_63151.cljs$core$IIndexed$_nth$arity$2(null,i__62756_63153);
if(cljs.core.truth_(child_63154)){
node.appendChild(child_63154);


var G__63155 = seq__62752_63150;
var G__63156 = chunk__62754_63151;
var G__63157 = count__62755_63152;
var G__63158 = (i__62756_63153 + (1));
seq__62752_63150 = G__63155;
chunk__62754_63151 = G__63156;
count__62755_63152 = G__63157;
i__62756_63153 = G__63158;
continue;
} else {
var G__63159 = seq__62752_63150;
var G__63160 = chunk__62754_63151;
var G__63161 = count__62755_63152;
var G__63162 = (i__62756_63153 + (1));
seq__62752_63150 = G__63159;
chunk__62754_63151 = G__63160;
count__62755_63152 = G__63161;
i__62756_63153 = G__63162;
continue;
}
} else {
var temp__5804__auto___63163__$1 = cljs.core.seq(seq__62752_63150);
if(temp__5804__auto___63163__$1){
var seq__62752_63164__$1 = temp__5804__auto___63163__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62752_63164__$1)){
var c__5565__auto___63165 = cljs.core.chunk_first(seq__62752_63164__$1);
var G__63166 = cljs.core.chunk_rest(seq__62752_63164__$1);
var G__63167 = c__5565__auto___63165;
var G__63168 = cljs.core.count(c__5565__auto___63165);
var G__63169 = (0);
seq__62752_63150 = G__63166;
chunk__62754_63151 = G__63167;
count__62755_63152 = G__63168;
i__62756_63153 = G__63169;
continue;
} else {
var child_63170 = cljs.core.first(seq__62752_63164__$1);
if(cljs.core.truth_(child_63170)){
node.appendChild(child_63170);


var G__63171 = cljs.core.next(seq__62752_63164__$1);
var G__63172 = null;
var G__63173 = (0);
var G__63174 = (0);
seq__62752_63150 = G__63171;
chunk__62754_63151 = G__63172;
count__62755_63152 = G__63173;
i__62756_63153 = G__63174;
continue;
} else {
var G__63175 = cljs.core.next(seq__62752_63164__$1);
var G__63176 = null;
var G__63177 = (0);
var G__63178 = (0);
seq__62752_63150 = G__63175;
chunk__62754_63151 = G__63176;
count__62755_63152 = G__63177;
i__62756_63153 = G__63178;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_63149);
}
}


var G__63179 = cljs.core.next(seq__62722_63141__$1);
var G__63180 = null;
var G__63181 = (0);
var G__63182 = (0);
seq__62722_63096 = G__63179;
chunk__62724_63097 = G__63180;
count__62725_63098 = G__63181;
i__62726_63099 = G__63182;
continue;
} else {
var G__63183 = cljs.core.next(seq__62722_63141__$1);
var G__63184 = null;
var G__63185 = (0);
var G__63186 = (0);
seq__62722_63096 = G__63183;
chunk__62724_63097 = G__63184;
count__62725_63098 = G__63185;
i__62726_63099 = G__63186;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___63187 = arguments.length;
var i__5767__auto___63188 = (0);
while(true){
if((i__5767__auto___63188 < len__5766__auto___63187)){
args__5772__auto__.push((arguments[i__5767__auto___63188]));

var G__63191 = (i__5767__auto___63188 + (1));
i__5767__auto___63188 = G__63191;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq62765){
var G__62766 = cljs.core.first(seq62765);
var seq62765__$1 = cljs.core.next(seq62765);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62766,seq62765__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__62770 = arguments.length;
switch (G__62770) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5041__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5041__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5041__auto__;
}
})())){
var c__59002__auto___63195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = (function (state_62775){
var state_val_62776 = (state_62775[(1)]);
if((state_val_62776 === (1))){
var state_62775__$1 = state_62775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62775__$1,(2),once_or_cleanup);
} else {
if((state_val_62776 === (2))){
var inst_62772 = (state_62775[(2)]);
var inst_62773 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_62775__$1 = (function (){var statearr_62777 = state_62775;
(statearr_62777[(7)] = inst_62772);

return statearr_62777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62775__$1,inst_62773);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__58890__auto__ = null;
var shadow$dom$state_machine__58890__auto____0 = (function (){
var statearr_62778 = [null,null,null,null,null,null,null,null];
(statearr_62778[(0)] = shadow$dom$state_machine__58890__auto__);

(statearr_62778[(1)] = (1));

return statearr_62778;
});
var shadow$dom$state_machine__58890__auto____1 = (function (state_62775){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_62775);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e62779){var ex__58893__auto__ = e62779;
var statearr_62780_63196 = state_62775;
(statearr_62780_63196[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_62775[(4)]))){
var statearr_62781_63197 = state_62775;
(statearr_62781_63197[(1)] = cljs.core.first((state_62775[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63198 = state_62775;
state_62775 = G__63198;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
shadow$dom$state_machine__58890__auto__ = function(state_62775){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__58890__auto____0.call(this);
case 1:
return shadow$dom$state_machine__58890__auto____1.call(this,state_62775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__58890__auto____0;
shadow$dom$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__58890__auto____1;
return shadow$dom$state_machine__58890__auto__;
})()
})();
var state__59004__auto__ = (function (){var statearr_62782 = f__59003__auto__();
(statearr_62782[(6)] = c__59002__auto___63195);

return statearr_62782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
