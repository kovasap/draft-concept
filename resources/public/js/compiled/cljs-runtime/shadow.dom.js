goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_61857 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_61857(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_61858 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_61858(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__60827 = coll;
var G__60828 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__60827,G__60828) : shadow.dom.lazy_native_coll_seq.call(null,G__60827,G__60828));
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
var G__60875 = arguments.length;
switch (G__60875) {
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
var G__60881 = arguments.length;
switch (G__60881) {
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
var G__60889 = arguments.length;
switch (G__60889) {
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
var G__60905 = arguments.length;
switch (G__60905) {
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
var G__60919 = arguments.length;
switch (G__60919) {
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
var G__60934 = arguments.length;
switch (G__60934) {
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
}catch (e60944){if((e60944 instanceof Object)){
var e = e60944;
return console.log("didnt support attachEvent",el,e);
} else {
throw e60944;

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
var seq__60954 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__60955 = null;
var count__60956 = (0);
var i__60957 = (0);
while(true){
if((i__60957 < count__60956)){
var el = chunk__60955.cljs$core$IIndexed$_nth$arity$2(null,i__60957);
var handler_61866__$1 = ((function (seq__60954,chunk__60955,count__60956,i__60957,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__60954,chunk__60955,count__60956,i__60957,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_61866__$1);


var G__61867 = seq__60954;
var G__61868 = chunk__60955;
var G__61869 = count__60956;
var G__61870 = (i__60957 + (1));
seq__60954 = G__61867;
chunk__60955 = G__61868;
count__60956 = G__61869;
i__60957 = G__61870;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__60954);
if(temp__5804__auto__){
var seq__60954__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60954__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__60954__$1);
var G__61871 = cljs.core.chunk_rest(seq__60954__$1);
var G__61872 = c__5565__auto__;
var G__61873 = cljs.core.count(c__5565__auto__);
var G__61874 = (0);
seq__60954 = G__61871;
chunk__60955 = G__61872;
count__60956 = G__61873;
i__60957 = G__61874;
continue;
} else {
var el = cljs.core.first(seq__60954__$1);
var handler_61875__$1 = ((function (seq__60954,chunk__60955,count__60956,i__60957,el,seq__60954__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__60954,chunk__60955,count__60956,i__60957,el,seq__60954__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_61875__$1);


var G__61876 = cljs.core.next(seq__60954__$1);
var G__61877 = null;
var G__61878 = (0);
var G__61879 = (0);
seq__60954 = G__61876;
chunk__60955 = G__61877;
count__60956 = G__61878;
i__60957 = G__61879;
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
var G__60975 = arguments.length;
switch (G__60975) {
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
var seq__60983 = cljs.core.seq(events);
var chunk__60984 = null;
var count__60985 = (0);
var i__60986 = (0);
while(true){
if((i__60986 < count__60985)){
var vec__60999 = chunk__60984.cljs$core$IIndexed$_nth$arity$2(null,i__60986);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60999,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60999,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__61881 = seq__60983;
var G__61882 = chunk__60984;
var G__61883 = count__60985;
var G__61884 = (i__60986 + (1));
seq__60983 = G__61881;
chunk__60984 = G__61882;
count__60985 = G__61883;
i__60986 = G__61884;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__60983);
if(temp__5804__auto__){
var seq__60983__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60983__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__60983__$1);
var G__61885 = cljs.core.chunk_rest(seq__60983__$1);
var G__61886 = c__5565__auto__;
var G__61887 = cljs.core.count(c__5565__auto__);
var G__61888 = (0);
seq__60983 = G__61885;
chunk__60984 = G__61886;
count__60985 = G__61887;
i__60986 = G__61888;
continue;
} else {
var vec__61007 = cljs.core.first(seq__60983__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61007,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61007,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__61889 = cljs.core.next(seq__60983__$1);
var G__61890 = null;
var G__61891 = (0);
var G__61892 = (0);
seq__60983 = G__61889;
chunk__60984 = G__61890;
count__60985 = G__61891;
i__60986 = G__61892;
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
var seq__61010 = cljs.core.seq(styles);
var chunk__61011 = null;
var count__61012 = (0);
var i__61013 = (0);
while(true){
if((i__61013 < count__61012)){
var vec__61029 = chunk__61011.cljs$core$IIndexed$_nth$arity$2(null,i__61013);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61029,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61029,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__61893 = seq__61010;
var G__61894 = chunk__61011;
var G__61895 = count__61012;
var G__61896 = (i__61013 + (1));
seq__61010 = G__61893;
chunk__61011 = G__61894;
count__61012 = G__61895;
i__61013 = G__61896;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__61010);
if(temp__5804__auto__){
var seq__61010__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61010__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__61010__$1);
var G__61897 = cljs.core.chunk_rest(seq__61010__$1);
var G__61898 = c__5565__auto__;
var G__61899 = cljs.core.count(c__5565__auto__);
var G__61900 = (0);
seq__61010 = G__61897;
chunk__61011 = G__61898;
count__61012 = G__61899;
i__61013 = G__61900;
continue;
} else {
var vec__61035 = cljs.core.first(seq__61010__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61035,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61035,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__61901 = cljs.core.next(seq__61010__$1);
var G__61902 = null;
var G__61903 = (0);
var G__61904 = (0);
seq__61010 = G__61901;
chunk__61011 = G__61902;
count__61012 = G__61903;
i__61013 = G__61904;
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
var G__61046_61905 = key;
var G__61046_61906__$1 = (((G__61046_61905 instanceof cljs.core.Keyword))?G__61046_61905.fqn:null);
switch (G__61046_61906__$1) {
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
var ks_61908 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_61908,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_61908,"aria-");
}
})())){
el.setAttribute(ks_61908,value);
} else {
(el[ks_61908] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__61077){
var map__61078 = p__61077;
var map__61078__$1 = cljs.core.__destructure_map(map__61078);
var props = map__61078__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61078__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__61079 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61079,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61079,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61079,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__61083 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__61083,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__61083;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__61089 = arguments.length;
switch (G__61089) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__61094){
var vec__61095 = p__61094;
var seq__61096 = cljs.core.seq(vec__61095);
var first__61097 = cljs.core.first(seq__61096);
var seq__61096__$1 = cljs.core.next(seq__61096);
var nn = first__61097;
var first__61097__$1 = cljs.core.first(seq__61096__$1);
var seq__61096__$2 = cljs.core.next(seq__61096__$1);
var np = first__61097__$1;
var nc = seq__61096__$2;
var node = vec__61095;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61101 = nn;
var G__61102 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__61101,G__61102) : create_fn.call(null,G__61101,G__61102));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61103 = nn;
var G__61104 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__61103,G__61104) : create_fn.call(null,G__61103,G__61104));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__61109 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61109,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61109,(1),null);
var seq__61113_61922 = cljs.core.seq(node_children);
var chunk__61114_61923 = null;
var count__61115_61924 = (0);
var i__61116_61925 = (0);
while(true){
if((i__61116_61925 < count__61115_61924)){
var child_struct_61926 = chunk__61114_61923.cljs$core$IIndexed$_nth$arity$2(null,i__61116_61925);
var children_61927 = shadow.dom.dom_node(child_struct_61926);
if(cljs.core.seq_QMARK_(children_61927)){
var seq__61170_61928 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_61927));
var chunk__61172_61929 = null;
var count__61173_61930 = (0);
var i__61174_61931 = (0);
while(true){
if((i__61174_61931 < count__61173_61930)){
var child_61932 = chunk__61172_61929.cljs$core$IIndexed$_nth$arity$2(null,i__61174_61931);
if(cljs.core.truth_(child_61932)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61932);


var G__61933 = seq__61170_61928;
var G__61934 = chunk__61172_61929;
var G__61935 = count__61173_61930;
var G__61936 = (i__61174_61931 + (1));
seq__61170_61928 = G__61933;
chunk__61172_61929 = G__61934;
count__61173_61930 = G__61935;
i__61174_61931 = G__61936;
continue;
} else {
var G__61937 = seq__61170_61928;
var G__61938 = chunk__61172_61929;
var G__61939 = count__61173_61930;
var G__61940 = (i__61174_61931 + (1));
seq__61170_61928 = G__61937;
chunk__61172_61929 = G__61938;
count__61173_61930 = G__61939;
i__61174_61931 = G__61940;
continue;
}
} else {
var temp__5804__auto___61941 = cljs.core.seq(seq__61170_61928);
if(temp__5804__auto___61941){
var seq__61170_61942__$1 = temp__5804__auto___61941;
if(cljs.core.chunked_seq_QMARK_(seq__61170_61942__$1)){
var c__5565__auto___61943 = cljs.core.chunk_first(seq__61170_61942__$1);
var G__61944 = cljs.core.chunk_rest(seq__61170_61942__$1);
var G__61945 = c__5565__auto___61943;
var G__61946 = cljs.core.count(c__5565__auto___61943);
var G__61947 = (0);
seq__61170_61928 = G__61944;
chunk__61172_61929 = G__61945;
count__61173_61930 = G__61946;
i__61174_61931 = G__61947;
continue;
} else {
var child_61948 = cljs.core.first(seq__61170_61942__$1);
if(cljs.core.truth_(child_61948)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61948);


var G__61949 = cljs.core.next(seq__61170_61942__$1);
var G__61950 = null;
var G__61951 = (0);
var G__61952 = (0);
seq__61170_61928 = G__61949;
chunk__61172_61929 = G__61950;
count__61173_61930 = G__61951;
i__61174_61931 = G__61952;
continue;
} else {
var G__61953 = cljs.core.next(seq__61170_61942__$1);
var G__61954 = null;
var G__61955 = (0);
var G__61956 = (0);
seq__61170_61928 = G__61953;
chunk__61172_61929 = G__61954;
count__61173_61930 = G__61955;
i__61174_61931 = G__61956;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_61927);
}


var G__61957 = seq__61113_61922;
var G__61958 = chunk__61114_61923;
var G__61959 = count__61115_61924;
var G__61960 = (i__61116_61925 + (1));
seq__61113_61922 = G__61957;
chunk__61114_61923 = G__61958;
count__61115_61924 = G__61959;
i__61116_61925 = G__61960;
continue;
} else {
var temp__5804__auto___61961 = cljs.core.seq(seq__61113_61922);
if(temp__5804__auto___61961){
var seq__61113_61962__$1 = temp__5804__auto___61961;
if(cljs.core.chunked_seq_QMARK_(seq__61113_61962__$1)){
var c__5565__auto___61963 = cljs.core.chunk_first(seq__61113_61962__$1);
var G__61964 = cljs.core.chunk_rest(seq__61113_61962__$1);
var G__61965 = c__5565__auto___61963;
var G__61966 = cljs.core.count(c__5565__auto___61963);
var G__61967 = (0);
seq__61113_61922 = G__61964;
chunk__61114_61923 = G__61965;
count__61115_61924 = G__61966;
i__61116_61925 = G__61967;
continue;
} else {
var child_struct_61968 = cljs.core.first(seq__61113_61962__$1);
var children_61969 = shadow.dom.dom_node(child_struct_61968);
if(cljs.core.seq_QMARK_(children_61969)){
var seq__61188_61970 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_61969));
var chunk__61190_61971 = null;
var count__61191_61972 = (0);
var i__61192_61973 = (0);
while(true){
if((i__61192_61973 < count__61191_61972)){
var child_61974 = chunk__61190_61971.cljs$core$IIndexed$_nth$arity$2(null,i__61192_61973);
if(cljs.core.truth_(child_61974)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61974);


var G__61975 = seq__61188_61970;
var G__61976 = chunk__61190_61971;
var G__61977 = count__61191_61972;
var G__61978 = (i__61192_61973 + (1));
seq__61188_61970 = G__61975;
chunk__61190_61971 = G__61976;
count__61191_61972 = G__61977;
i__61192_61973 = G__61978;
continue;
} else {
var G__61979 = seq__61188_61970;
var G__61980 = chunk__61190_61971;
var G__61981 = count__61191_61972;
var G__61982 = (i__61192_61973 + (1));
seq__61188_61970 = G__61979;
chunk__61190_61971 = G__61980;
count__61191_61972 = G__61981;
i__61192_61973 = G__61982;
continue;
}
} else {
var temp__5804__auto___61983__$1 = cljs.core.seq(seq__61188_61970);
if(temp__5804__auto___61983__$1){
var seq__61188_61984__$1 = temp__5804__auto___61983__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61188_61984__$1)){
var c__5565__auto___61985 = cljs.core.chunk_first(seq__61188_61984__$1);
var G__61986 = cljs.core.chunk_rest(seq__61188_61984__$1);
var G__61987 = c__5565__auto___61985;
var G__61988 = cljs.core.count(c__5565__auto___61985);
var G__61989 = (0);
seq__61188_61970 = G__61986;
chunk__61190_61971 = G__61987;
count__61191_61972 = G__61988;
i__61192_61973 = G__61989;
continue;
} else {
var child_61990 = cljs.core.first(seq__61188_61984__$1);
if(cljs.core.truth_(child_61990)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61990);


var G__61991 = cljs.core.next(seq__61188_61984__$1);
var G__61992 = null;
var G__61993 = (0);
var G__61994 = (0);
seq__61188_61970 = G__61991;
chunk__61190_61971 = G__61992;
count__61191_61972 = G__61993;
i__61192_61973 = G__61994;
continue;
} else {
var G__61995 = cljs.core.next(seq__61188_61984__$1);
var G__61996 = null;
var G__61997 = (0);
var G__61998 = (0);
seq__61188_61970 = G__61995;
chunk__61190_61971 = G__61996;
count__61191_61972 = G__61997;
i__61192_61973 = G__61998;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_61969);
}


var G__61999 = cljs.core.next(seq__61113_61962__$1);
var G__62000 = null;
var G__62001 = (0);
var G__62002 = (0);
seq__61113_61922 = G__61999;
chunk__61114_61923 = G__62000;
count__61115_61924 = G__62001;
i__61116_61925 = G__62002;
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
var seq__61223 = cljs.core.seq(node);
var chunk__61224 = null;
var count__61225 = (0);
var i__61226 = (0);
while(true){
if((i__61226 < count__61225)){
var n = chunk__61224.cljs$core$IIndexed$_nth$arity$2(null,i__61226);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__62016 = seq__61223;
var G__62017 = chunk__61224;
var G__62018 = count__61225;
var G__62019 = (i__61226 + (1));
seq__61223 = G__62016;
chunk__61224 = G__62017;
count__61225 = G__62018;
i__61226 = G__62019;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__61223);
if(temp__5804__auto__){
var seq__61223__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61223__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__61223__$1);
var G__62021 = cljs.core.chunk_rest(seq__61223__$1);
var G__62022 = c__5565__auto__;
var G__62023 = cljs.core.count(c__5565__auto__);
var G__62024 = (0);
seq__61223 = G__62021;
chunk__61224 = G__62022;
count__61225 = G__62023;
i__61226 = G__62024;
continue;
} else {
var n = cljs.core.first(seq__61223__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__62025 = cljs.core.next(seq__61223__$1);
var G__62026 = null;
var G__62027 = (0);
var G__62028 = (0);
seq__61223 = G__62025;
chunk__61224 = G__62026;
count__61225 = G__62027;
i__61226 = G__62028;
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
var G__61236 = arguments.length;
switch (G__61236) {
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
var G__61247 = arguments.length;
switch (G__61247) {
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
var G__61258 = arguments.length;
switch (G__61258) {
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
var len__5766__auto___62037 = arguments.length;
var i__5767__auto___62038 = (0);
while(true){
if((i__5767__auto___62038 < len__5766__auto___62037)){
args__5772__auto__.push((arguments[i__5767__auto___62038]));

var G__62039 = (i__5767__auto___62038 + (1));
i__5767__auto___62038 = G__62039;
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
var seq__61274_62040 = cljs.core.seq(nodes);
var chunk__61275_62041 = null;
var count__61276_62042 = (0);
var i__61277_62043 = (0);
while(true){
if((i__61277_62043 < count__61276_62042)){
var node_62044 = chunk__61275_62041.cljs$core$IIndexed$_nth$arity$2(null,i__61277_62043);
fragment.appendChild(shadow.dom._to_dom(node_62044));


var G__62045 = seq__61274_62040;
var G__62046 = chunk__61275_62041;
var G__62047 = count__61276_62042;
var G__62048 = (i__61277_62043 + (1));
seq__61274_62040 = G__62045;
chunk__61275_62041 = G__62046;
count__61276_62042 = G__62047;
i__61277_62043 = G__62048;
continue;
} else {
var temp__5804__auto___62049 = cljs.core.seq(seq__61274_62040);
if(temp__5804__auto___62049){
var seq__61274_62050__$1 = temp__5804__auto___62049;
if(cljs.core.chunked_seq_QMARK_(seq__61274_62050__$1)){
var c__5565__auto___62051 = cljs.core.chunk_first(seq__61274_62050__$1);
var G__62052 = cljs.core.chunk_rest(seq__61274_62050__$1);
var G__62053 = c__5565__auto___62051;
var G__62054 = cljs.core.count(c__5565__auto___62051);
var G__62055 = (0);
seq__61274_62040 = G__62052;
chunk__61275_62041 = G__62053;
count__61276_62042 = G__62054;
i__61277_62043 = G__62055;
continue;
} else {
var node_62056 = cljs.core.first(seq__61274_62050__$1);
fragment.appendChild(shadow.dom._to_dom(node_62056));


var G__62057 = cljs.core.next(seq__61274_62050__$1);
var G__62058 = null;
var G__62059 = (0);
var G__62060 = (0);
seq__61274_62040 = G__62057;
chunk__61275_62041 = G__62058;
count__61276_62042 = G__62059;
i__61277_62043 = G__62060;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq61267){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61267));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__61298_62061 = cljs.core.seq(scripts);
var chunk__61299_62062 = null;
var count__61300_62063 = (0);
var i__61301_62064 = (0);
while(true){
if((i__61301_62064 < count__61300_62063)){
var vec__61312_62065 = chunk__61299_62062.cljs$core$IIndexed$_nth$arity$2(null,i__61301_62064);
var script_tag_62066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61312_62065,(0),null);
var script_body_62067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61312_62065,(1),null);
eval(script_body_62067);


var G__62068 = seq__61298_62061;
var G__62069 = chunk__61299_62062;
var G__62070 = count__61300_62063;
var G__62071 = (i__61301_62064 + (1));
seq__61298_62061 = G__62068;
chunk__61299_62062 = G__62069;
count__61300_62063 = G__62070;
i__61301_62064 = G__62071;
continue;
} else {
var temp__5804__auto___62072 = cljs.core.seq(seq__61298_62061);
if(temp__5804__auto___62072){
var seq__61298_62073__$1 = temp__5804__auto___62072;
if(cljs.core.chunked_seq_QMARK_(seq__61298_62073__$1)){
var c__5565__auto___62074 = cljs.core.chunk_first(seq__61298_62073__$1);
var G__62075 = cljs.core.chunk_rest(seq__61298_62073__$1);
var G__62076 = c__5565__auto___62074;
var G__62077 = cljs.core.count(c__5565__auto___62074);
var G__62078 = (0);
seq__61298_62061 = G__62075;
chunk__61299_62062 = G__62076;
count__61300_62063 = G__62077;
i__61301_62064 = G__62078;
continue;
} else {
var vec__61318_62079 = cljs.core.first(seq__61298_62073__$1);
var script_tag_62080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61318_62079,(0),null);
var script_body_62081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61318_62079,(1),null);
eval(script_body_62081);


var G__62082 = cljs.core.next(seq__61298_62073__$1);
var G__62083 = null;
var G__62084 = (0);
var G__62085 = (0);
seq__61298_62061 = G__62082;
chunk__61299_62062 = G__62083;
count__61300_62063 = G__62084;
i__61301_62064 = G__62085;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__61322){
var vec__61323 = p__61322;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61323,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61323,(1),null);
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
var G__61340 = arguments.length;
switch (G__61340) {
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
var seq__61365 = cljs.core.seq(style_keys);
var chunk__61366 = null;
var count__61367 = (0);
var i__61369 = (0);
while(true){
if((i__61369 < count__61367)){
var it = chunk__61366.cljs$core$IIndexed$_nth$arity$2(null,i__61369);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__62094 = seq__61365;
var G__62095 = chunk__61366;
var G__62096 = count__61367;
var G__62097 = (i__61369 + (1));
seq__61365 = G__62094;
chunk__61366 = G__62095;
count__61367 = G__62096;
i__61369 = G__62097;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__61365);
if(temp__5804__auto__){
var seq__61365__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61365__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__61365__$1);
var G__62098 = cljs.core.chunk_rest(seq__61365__$1);
var G__62099 = c__5565__auto__;
var G__62100 = cljs.core.count(c__5565__auto__);
var G__62101 = (0);
seq__61365 = G__62098;
chunk__61366 = G__62099;
count__61367 = G__62100;
i__61369 = G__62101;
continue;
} else {
var it = cljs.core.first(seq__61365__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__62102 = cljs.core.next(seq__61365__$1);
var G__62103 = null;
var G__62104 = (0);
var G__62105 = (0);
seq__61365 = G__62102;
chunk__61366 = G__62103;
count__61367 = G__62104;
i__61369 = G__62105;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k61374,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__61383 = k61374;
var G__61383__$1 = (((G__61383 instanceof cljs.core.Keyword))?G__61383.fqn:null);
switch (G__61383__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61374,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__61384){
var vec__61385 = p__61384;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61385,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61385,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61373){
var self__ = this;
var G__61373__$1 = this;
return (new cljs.core.RecordIter((0),G__61373__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61375,other61376){
var self__ = this;
var this61375__$1 = this;
return (((!((other61376 == null)))) && ((((this61375__$1.constructor === other61376.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61375__$1.x,other61376.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61375__$1.y,other61376.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61375__$1.__extmap,other61376.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k61374){
var self__ = this;
var this__5347__auto____$1 = this;
var G__61418 = k61374;
var G__61418__$1 = (((G__61418 instanceof cljs.core.Keyword))?G__61418.fqn:null);
switch (G__61418__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k61374);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__61373){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__61420 = cljs.core.keyword_identical_QMARK_;
var expr__61421 = k__5349__auto__;
if(cljs.core.truth_((pred__61420.cljs$core$IFn$_invoke$arity$2 ? pred__61420.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__61421) : pred__61420.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__61421)))){
return (new shadow.dom.Coordinate(G__61373,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61420.cljs$core$IFn$_invoke$arity$2 ? pred__61420.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__61421) : pred__61420.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__61421)))){
return (new shadow.dom.Coordinate(self__.x,G__61373,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__61373),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__61373){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__61373,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__61378){
var extmap__5382__auto__ = (function (){var G__61433 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61378,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__61378)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61433);
} else {
return G__61433;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__61378),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__61378),null,cljs.core.not_empty(extmap__5382__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k61446,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__61453 = k61446;
var G__61453__$1 = (((G__61453 instanceof cljs.core.Keyword))?G__61453.fqn:null);
switch (G__61453__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61446,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__61458){
var vec__61459 = p__61458;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61459,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61459,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61445){
var self__ = this;
var G__61445__$1 = this;
return (new cljs.core.RecordIter((0),G__61445__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61447,other61448){
var self__ = this;
var this61447__$1 = this;
return (((!((other61448 == null)))) && ((((this61447__$1.constructor === other61448.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61447__$1.w,other61448.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61447__$1.h,other61448.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61447__$1.__extmap,other61448.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k61446){
var self__ = this;
var this__5347__auto____$1 = this;
var G__61483 = k61446;
var G__61483__$1 = (((G__61483 instanceof cljs.core.Keyword))?G__61483.fqn:null);
switch (G__61483__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k61446);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__61445){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__61489 = cljs.core.keyword_identical_QMARK_;
var expr__61490 = k__5349__auto__;
if(cljs.core.truth_((pred__61489.cljs$core$IFn$_invoke$arity$2 ? pred__61489.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__61490) : pred__61489.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__61490)))){
return (new shadow.dom.Size(G__61445,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61489.cljs$core$IFn$_invoke$arity$2 ? pred__61489.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__61490) : pred__61489.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__61490)))){
return (new shadow.dom.Size(self__.w,G__61445,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__61445),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__61445){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__61445,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__61450){
var extmap__5382__auto__ = (function (){var G__61508 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61450,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__61450)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61508);
} else {
return G__61508;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__61450),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__61450),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
var G__62152 = (i + (1));
var G__62153 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__62152;
ret = G__62153;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61548){
var vec__61550 = p__61548;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61550,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61550,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__61562 = arguments.length;
switch (G__61562) {
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
var G__62158 = ps;
var G__62159 = (i + (1));
el__$1 = G__62158;
i = G__62159;
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
var vec__61598 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61598,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61598,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61598,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__61603_62161 = cljs.core.seq(props);
var chunk__61604_62162 = null;
var count__61605_62163 = (0);
var i__61606_62164 = (0);
while(true){
if((i__61606_62164 < count__61605_62163)){
var vec__61628_62166 = chunk__61604_62162.cljs$core$IIndexed$_nth$arity$2(null,i__61606_62164);
var k_62167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61628_62166,(0),null);
var v_62168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61628_62166,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_62167);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_62167),v_62168);


var G__62169 = seq__61603_62161;
var G__62170 = chunk__61604_62162;
var G__62171 = count__61605_62163;
var G__62172 = (i__61606_62164 + (1));
seq__61603_62161 = G__62169;
chunk__61604_62162 = G__62170;
count__61605_62163 = G__62171;
i__61606_62164 = G__62172;
continue;
} else {
var temp__5804__auto___62173 = cljs.core.seq(seq__61603_62161);
if(temp__5804__auto___62173){
var seq__61603_62174__$1 = temp__5804__auto___62173;
if(cljs.core.chunked_seq_QMARK_(seq__61603_62174__$1)){
var c__5565__auto___62177 = cljs.core.chunk_first(seq__61603_62174__$1);
var G__62178 = cljs.core.chunk_rest(seq__61603_62174__$1);
var G__62179 = c__5565__auto___62177;
var G__62180 = cljs.core.count(c__5565__auto___62177);
var G__62181 = (0);
seq__61603_62161 = G__62178;
chunk__61604_62162 = G__62179;
count__61605_62163 = G__62180;
i__61606_62164 = G__62181;
continue;
} else {
var vec__61639_62182 = cljs.core.first(seq__61603_62174__$1);
var k_62183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61639_62182,(0),null);
var v_62184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61639_62182,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_62183);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_62183),v_62184);


var G__62185 = cljs.core.next(seq__61603_62174__$1);
var G__62186 = null;
var G__62187 = (0);
var G__62188 = (0);
seq__61603_62161 = G__62185;
chunk__61604_62162 = G__62186;
count__61605_62163 = G__62187;
i__61606_62164 = G__62188;
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
var vec__61661 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61661,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61661,(1),null);
var seq__61664_62191 = cljs.core.seq(node_children);
var chunk__61666_62192 = null;
var count__61667_62193 = (0);
var i__61668_62194 = (0);
while(true){
if((i__61668_62194 < count__61667_62193)){
var child_struct_62195 = chunk__61666_62192.cljs$core$IIndexed$_nth$arity$2(null,i__61668_62194);
if((!((child_struct_62195 == null)))){
if(typeof child_struct_62195 === 'string'){
var text_62196 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_62196),child_struct_62195].join(''));
} else {
var children_62198 = shadow.dom.svg_node(child_struct_62195);
if(cljs.core.seq_QMARK_(children_62198)){
var seq__61727_62200 = cljs.core.seq(children_62198);
var chunk__61729_62201 = null;
var count__61730_62202 = (0);
var i__61731_62203 = (0);
while(true){
if((i__61731_62203 < count__61730_62202)){
var child_62204 = chunk__61729_62201.cljs$core$IIndexed$_nth$arity$2(null,i__61731_62203);
if(cljs.core.truth_(child_62204)){
node.appendChild(child_62204);


var G__62205 = seq__61727_62200;
var G__62206 = chunk__61729_62201;
var G__62207 = count__61730_62202;
var G__62208 = (i__61731_62203 + (1));
seq__61727_62200 = G__62205;
chunk__61729_62201 = G__62206;
count__61730_62202 = G__62207;
i__61731_62203 = G__62208;
continue;
} else {
var G__62209 = seq__61727_62200;
var G__62210 = chunk__61729_62201;
var G__62211 = count__61730_62202;
var G__62212 = (i__61731_62203 + (1));
seq__61727_62200 = G__62209;
chunk__61729_62201 = G__62210;
count__61730_62202 = G__62211;
i__61731_62203 = G__62212;
continue;
}
} else {
var temp__5804__auto___62213 = cljs.core.seq(seq__61727_62200);
if(temp__5804__auto___62213){
var seq__61727_62214__$1 = temp__5804__auto___62213;
if(cljs.core.chunked_seq_QMARK_(seq__61727_62214__$1)){
var c__5565__auto___62215 = cljs.core.chunk_first(seq__61727_62214__$1);
var G__62216 = cljs.core.chunk_rest(seq__61727_62214__$1);
var G__62217 = c__5565__auto___62215;
var G__62218 = cljs.core.count(c__5565__auto___62215);
var G__62219 = (0);
seq__61727_62200 = G__62216;
chunk__61729_62201 = G__62217;
count__61730_62202 = G__62218;
i__61731_62203 = G__62219;
continue;
} else {
var child_62220 = cljs.core.first(seq__61727_62214__$1);
if(cljs.core.truth_(child_62220)){
node.appendChild(child_62220);


var G__62221 = cljs.core.next(seq__61727_62214__$1);
var G__62222 = null;
var G__62223 = (0);
var G__62224 = (0);
seq__61727_62200 = G__62221;
chunk__61729_62201 = G__62222;
count__61730_62202 = G__62223;
i__61731_62203 = G__62224;
continue;
} else {
var G__62225 = cljs.core.next(seq__61727_62214__$1);
var G__62226 = null;
var G__62227 = (0);
var G__62228 = (0);
seq__61727_62200 = G__62225;
chunk__61729_62201 = G__62226;
count__61730_62202 = G__62227;
i__61731_62203 = G__62228;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_62198);
}
}


var G__62229 = seq__61664_62191;
var G__62230 = chunk__61666_62192;
var G__62231 = count__61667_62193;
var G__62232 = (i__61668_62194 + (1));
seq__61664_62191 = G__62229;
chunk__61666_62192 = G__62230;
count__61667_62193 = G__62231;
i__61668_62194 = G__62232;
continue;
} else {
var G__62233 = seq__61664_62191;
var G__62234 = chunk__61666_62192;
var G__62235 = count__61667_62193;
var G__62236 = (i__61668_62194 + (1));
seq__61664_62191 = G__62233;
chunk__61666_62192 = G__62234;
count__61667_62193 = G__62235;
i__61668_62194 = G__62236;
continue;
}
} else {
var temp__5804__auto___62237 = cljs.core.seq(seq__61664_62191);
if(temp__5804__auto___62237){
var seq__61664_62238__$1 = temp__5804__auto___62237;
if(cljs.core.chunked_seq_QMARK_(seq__61664_62238__$1)){
var c__5565__auto___62239 = cljs.core.chunk_first(seq__61664_62238__$1);
var G__62240 = cljs.core.chunk_rest(seq__61664_62238__$1);
var G__62241 = c__5565__auto___62239;
var G__62242 = cljs.core.count(c__5565__auto___62239);
var G__62243 = (0);
seq__61664_62191 = G__62240;
chunk__61666_62192 = G__62241;
count__61667_62193 = G__62242;
i__61668_62194 = G__62243;
continue;
} else {
var child_struct_62244 = cljs.core.first(seq__61664_62238__$1);
if((!((child_struct_62244 == null)))){
if(typeof child_struct_62244 === 'string'){
var text_62245 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_62245),child_struct_62244].join(''));
} else {
var children_62246 = shadow.dom.svg_node(child_struct_62244);
if(cljs.core.seq_QMARK_(children_62246)){
var seq__61753_62247 = cljs.core.seq(children_62246);
var chunk__61755_62248 = null;
var count__61756_62249 = (0);
var i__61757_62250 = (0);
while(true){
if((i__61757_62250 < count__61756_62249)){
var child_62251 = chunk__61755_62248.cljs$core$IIndexed$_nth$arity$2(null,i__61757_62250);
if(cljs.core.truth_(child_62251)){
node.appendChild(child_62251);


var G__62252 = seq__61753_62247;
var G__62253 = chunk__61755_62248;
var G__62254 = count__61756_62249;
var G__62255 = (i__61757_62250 + (1));
seq__61753_62247 = G__62252;
chunk__61755_62248 = G__62253;
count__61756_62249 = G__62254;
i__61757_62250 = G__62255;
continue;
} else {
var G__62256 = seq__61753_62247;
var G__62257 = chunk__61755_62248;
var G__62258 = count__61756_62249;
var G__62259 = (i__61757_62250 + (1));
seq__61753_62247 = G__62256;
chunk__61755_62248 = G__62257;
count__61756_62249 = G__62258;
i__61757_62250 = G__62259;
continue;
}
} else {
var temp__5804__auto___62261__$1 = cljs.core.seq(seq__61753_62247);
if(temp__5804__auto___62261__$1){
var seq__61753_62262__$1 = temp__5804__auto___62261__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61753_62262__$1)){
var c__5565__auto___62265 = cljs.core.chunk_first(seq__61753_62262__$1);
var G__62266 = cljs.core.chunk_rest(seq__61753_62262__$1);
var G__62267 = c__5565__auto___62265;
var G__62268 = cljs.core.count(c__5565__auto___62265);
var G__62269 = (0);
seq__61753_62247 = G__62266;
chunk__61755_62248 = G__62267;
count__61756_62249 = G__62268;
i__61757_62250 = G__62269;
continue;
} else {
var child_62270 = cljs.core.first(seq__61753_62262__$1);
if(cljs.core.truth_(child_62270)){
node.appendChild(child_62270);


var G__62272 = cljs.core.next(seq__61753_62262__$1);
var G__62273 = null;
var G__62274 = (0);
var G__62275 = (0);
seq__61753_62247 = G__62272;
chunk__61755_62248 = G__62273;
count__61756_62249 = G__62274;
i__61757_62250 = G__62275;
continue;
} else {
var G__62276 = cljs.core.next(seq__61753_62262__$1);
var G__62277 = null;
var G__62278 = (0);
var G__62279 = (0);
seq__61753_62247 = G__62276;
chunk__61755_62248 = G__62277;
count__61756_62249 = G__62278;
i__61757_62250 = G__62279;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_62246);
}
}


var G__62280 = cljs.core.next(seq__61664_62238__$1);
var G__62281 = null;
var G__62282 = (0);
var G__62283 = (0);
seq__61664_62191 = G__62280;
chunk__61666_62192 = G__62281;
count__61667_62193 = G__62282;
i__61668_62194 = G__62283;
continue;
} else {
var G__62284 = cljs.core.next(seq__61664_62238__$1);
var G__62285 = null;
var G__62286 = (0);
var G__62287 = (0);
seq__61664_62191 = G__62284;
chunk__61666_62192 = G__62285;
count__61667_62193 = G__62286;
i__61668_62194 = G__62287;
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
var len__5766__auto___62289 = arguments.length;
var i__5767__auto___62290 = (0);
while(true){
if((i__5767__auto___62290 < len__5766__auto___62289)){
args__5772__auto__.push((arguments[i__5767__auto___62290]));

var G__62291 = (i__5767__auto___62290 + (1));
i__5767__auto___62290 = G__62291;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq61780){
var G__61781 = cljs.core.first(seq61780);
var seq61780__$1 = cljs.core.next(seq61780);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61781,seq61780__$1);
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
var G__61794 = arguments.length;
switch (G__61794) {
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
var c__57853__auto___62300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_61809){
var state_val_61810 = (state_61809[(1)]);
if((state_val_61810 === (1))){
var state_61809__$1 = state_61809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61809__$1,(2),once_or_cleanup);
} else {
if((state_val_61810 === (2))){
var inst_61805 = (state_61809[(2)]);
var inst_61806 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_61809__$1 = (function (){var statearr_61825 = state_61809;
(statearr_61825[(7)] = inst_61805);

return statearr_61825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_61809__$1,inst_61806);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__57795__auto__ = null;
var shadow$dom$state_machine__57795__auto____0 = (function (){
var statearr_61838 = [null,null,null,null,null,null,null,null];
(statearr_61838[(0)] = shadow$dom$state_machine__57795__auto__);

(statearr_61838[(1)] = (1));

return statearr_61838;
});
var shadow$dom$state_machine__57795__auto____1 = (function (state_61809){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_61809);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e61840){var ex__57798__auto__ = e61840;
var statearr_61841_62301 = state_61809;
(statearr_61841_62301[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_61809[(4)]))){
var statearr_61843_62302 = state_61809;
(statearr_61843_62302[(1)] = cljs.core.first((state_61809[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62303 = state_61809;
state_61809 = G__62303;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
shadow$dom$state_machine__57795__auto__ = function(state_61809){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__57795__auto____0.call(this);
case 1:
return shadow$dom$state_machine__57795__auto____1.call(this,state_61809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__57795__auto____0;
shadow$dom$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__57795__auto____1;
return shadow$dom$state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_61844 = f__57854__auto__();
(statearr_61844[(6)] = c__57853__auto___62300);

return statearr_61844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
