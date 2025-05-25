goog.provide('shadow.object');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

var shadow$object$IObject$_id$dyn_63420 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.object._id[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.object._id["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
});
shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
return shadow$object$IObject$_id$dyn_63420(this$);
}
});

var shadow$object$IObject$_type$dyn_63421 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.object._type[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.object._type["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
});
shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
return shadow$object$IObject$_type$dyn_63421(this$);
}
});

var shadow$object$IObject$_data$dyn_63422 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.object._data[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.object._data["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
});
shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
return shadow$object$IObject$_data$dyn_63422(this$);
}
});

var shadow$object$IObject$_update$dyn_63423 = (function (this$,update_fn){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.object._update[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__5391__auto__.call(null,this$,update_fn));
} else {
var m__5389__auto__ = (shadow.object._update["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__5389__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
});
/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
return shadow$object$IObject$_update$dyn_63423(this$,update_fn);
}
});

var shadow$object$IObject$_destroy_BANG_$dyn_63427 = (function (this$,cause){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__5391__auto__.call(null,this$,cause));
} else {
var m__5389__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__5389__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
});
shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
return shadow$object$IObject$_destroy_BANG_$dyn_63427(this$,cause);
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__62812 = arguments.length;
switch (G__62812) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
}));

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
}));

(shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3);

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__5043__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5804__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5804__auto__)){
var oid = temp__5804__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5804__auto__)){
var parent_id = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__63429 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__63429;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__62872_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__62872_SHARP_);
}),child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__62924 = arguments.length;
switch (G__62924) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
}));

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
}));

(shadow.object.tree_seq.cljs$lang$maxFixedArity = 2);

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__62944_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__62944_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__62957){
var map__62959 = p__62957;
var map__62959__$1 = cljs.core.__destructure_map(map__62959);
var oref = map__62959__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62959__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__62963 = arguments.length;
switch (G__62963) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
}));

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__62961_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__62961_SHARP_));
}),shadow.object.get_siblings(oref));
}));

(shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2);

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5802__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5802__auto__)){
var obj = temp__5802__auto__;
return obj;
} else {
var temp__5804__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
var G__63436 = parent;
dom = G__63436;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___63437 = arguments.length;
var i__5767__auto___63438 = (0);
while(true){
if((i__5767__auto___63438 < len__5766__auto___63437)){
args__5772__auto__.push((arguments[i__5767__auto___63438]));

var G__63439 = (i__5767__auto___63438 + (1));
i__5767__auto___63438 = G__63439;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5804__auto__)){
var reactions_to_trigger = temp__5804__auto__;
var seq__63019 = cljs.core.seq(reactions_to_trigger);
var chunk__63020 = null;
var count__63021 = (0);
var i__63022 = (0);
while(true){
if((i__63022 < count__63021)){
var rfn = chunk__63020.cljs$core$IIndexed$_nth$arity$2(null,i__63022);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__63443 = seq__63019;
var G__63444 = chunk__63020;
var G__63445 = count__63021;
var G__63446 = (i__63022 + (1));
seq__63019 = G__63443;
chunk__63020 = G__63444;
count__63021 = G__63445;
i__63022 = G__63446;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__63019);
if(temp__5804__auto____$1){
var seq__63019__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__63019__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__63019__$1);
var G__63447 = cljs.core.chunk_rest(seq__63019__$1);
var G__63448 = c__5565__auto__;
var G__63449 = cljs.core.count(c__5565__auto__);
var G__63450 = (0);
seq__63019 = G__63447;
chunk__63020 = G__63448;
count__63021 = G__63449;
i__63022 = G__63450;
continue;
} else {
var rfn = cljs.core.first(seq__63019__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__63451 = cljs.core.next(seq__63019__$1);
var G__63452 = null;
var G__63453 = (0);
var G__63454 = (0);
seq__63019 = G__63451;
chunk__63020 = G__63452;
count__63021 = G__63453;
i__63022 = G__63454;
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
}));

(shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq63003){
var G__63004 = cljs.core.first(seq63003);
var seq63003__$1 = cljs.core.next(seq63003);
var G__63005 = cljs.core.first(seq63003__$1);
var seq63003__$2 = cljs.core.next(seq63003__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63004,G__63005,seq63003__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__63039_63457 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__63040_63458 = null;
var count__63041_63459 = (0);
var i__63042_63460 = (0);
while(true){
if((i__63042_63460 < count__63041_63459)){
var child_63461 = chunk__63040_63458.cljs$core$IIndexed$_nth$arity$2(null,i__63042_63460);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_63461,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_63461,ev,notify_fn));


var G__63462 = seq__63039_63457;
var G__63463 = chunk__63040_63458;
var G__63464 = count__63041_63459;
var G__63465 = (i__63042_63460 + (1));
seq__63039_63457 = G__63462;
chunk__63040_63458 = G__63463;
count__63041_63459 = G__63464;
i__63042_63460 = G__63465;
continue;
} else {
var temp__5804__auto___63466 = cljs.core.seq(seq__63039_63457);
if(temp__5804__auto___63466){
var seq__63039_63467__$1 = temp__5804__auto___63466;
if(cljs.core.chunked_seq_QMARK_(seq__63039_63467__$1)){
var c__5565__auto___63468 = cljs.core.chunk_first(seq__63039_63467__$1);
var G__63469 = cljs.core.chunk_rest(seq__63039_63467__$1);
var G__63470 = c__5565__auto___63468;
var G__63471 = cljs.core.count(c__5565__auto___63468);
var G__63472 = (0);
seq__63039_63457 = G__63469;
chunk__63040_63458 = G__63470;
count__63041_63459 = G__63471;
i__63042_63460 = G__63472;
continue;
} else {
var child_63473 = cljs.core.first(seq__63039_63467__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_63473,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_63473,ev,notify_fn));


var G__63474 = cljs.core.next(seq__63039_63467__$1);
var G__63475 = null;
var G__63476 = (0);
var G__63477 = (0);
seq__63039_63457 = G__63474;
chunk__63040_63458 = G__63475;
count__63041_63459 = G__63476;
i__63042_63460 = G__63477;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___63478 = arguments.length;
var i__5767__auto___63479 = (0);
while(true){
if((i__5767__auto___63479 < len__5766__auto___63478)){
args__5772__auto__.push((arguments[i__5767__auto___63479]));

var G__63480 = (i__5767__auto___63479 + (1));
i__5767__auto___63479 = G__63480;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq63044){
var G__63045 = cljs.core.first(seq63044);
var seq63044__$1 = cljs.core.next(seq63044);
var G__63046 = cljs.core.first(seq63044__$1);
var seq63044__$2 = cljs.core.next(seq63044__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63045,G__63046,seq63044__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___63481 = arguments.length;
var i__5767__auto___63482 = (0);
while(true){
if((i__5767__auto___63482 < len__5766__auto___63481)){
args__5772__auto__.push((arguments[i__5767__auto___63482]));

var G__63483 = (i__5767__auto___63482 + (1));
i__5767__auto___63482 = G__63483;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__63486 = shadow.object.get_parent(current);
current = G__63486;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq63052){
var G__63053 = cljs.core.first(seq63052);
var seq63052__$1 = cljs.core.next(seq63052);
var G__63054 = cljs.core.first(seq63052__$1);
var seq63052__$2 = cljs.core.next(seq63052__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63053,G__63054,seq63052__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___63487 = arguments.length;
var i__5767__auto___63488 = (0);
while(true){
if((i__5767__auto___63488 < len__5766__auto___63487)){
args__5772__auto__.push((arguments[i__5767__auto___63488]));

var G__63489 = (i__5767__auto___63488 + (1));
i__5767__auto___63488 = G__63489;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});
return shadow.object._update(oref,work_fn);
}));

(shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq63068){
var G__63069 = cljs.core.first(seq63068);
var seq63068__$1 = cljs.core.next(seq63068);
var G__63070 = cljs.core.first(seq63068__$1);
var seq63068__$2 = cljs.core.next(seq63068__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63069,G__63070,seq63068__$2);
}));

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5802__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5802__auto__)){
var custom_remove = temp__5802__auto__;
var G__63189 = this$;
var G__63190 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__63189,G__63190) : custom_remove.call(null,G__63189,G__63190));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__63194 = arguments.length;
switch (G__63194) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
}));

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
}));

(shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2);

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__63199 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__63200 = null;
var count__63201 = (0);
var i__63202 = (0);
while(true){
if((i__63202 < count__63201)){
var vec__63209 = chunk__63200.cljs$core$IIndexed$_nth$arity$2(null,i__63202);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63209,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63209,(1),null);
var ev_def = vec__63209;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_63494__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__63199,chunk__63200,count__63201,i__63202,vec__63209,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__63199,chunk__63200,count__63201,i__63202,vec__63209,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__63199,chunk__63200,count__63201,i__63202,handler_63494__$1,vec__63209,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_63494__$1.cljs$core$IFn$_invoke$arity$3 ? handler_63494__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_63494__$1.call(null,oref,e,el));
});})(seq__63199,chunk__63200,count__63201,i__63202,handler_63494__$1,vec__63209,ev,handler,ev_def))
);


var G__63495 = seq__63199;
var G__63496 = chunk__63200;
var G__63497 = count__63201;
var G__63498 = (i__63202 + (1));
seq__63199 = G__63495;
chunk__63200 = G__63496;
count__63201 = G__63497;
i__63202 = G__63498;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__63199);
if(temp__5804__auto__){
var seq__63199__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63199__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__63199__$1);
var G__63500 = cljs.core.chunk_rest(seq__63199__$1);
var G__63501 = c__5565__auto__;
var G__63502 = cljs.core.count(c__5565__auto__);
var G__63503 = (0);
seq__63199 = G__63500;
chunk__63200 = G__63501;
count__63201 = G__63502;
i__63202 = G__63503;
continue;
} else {
var vec__63215 = cljs.core.first(seq__63199__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63215,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63215,(1),null);
var ev_def = vec__63215;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_63504__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__63199,chunk__63200,count__63201,i__63202,vec__63215,ev,handler,ev_def,seq__63199__$1,temp__5804__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__63199,chunk__63200,count__63201,i__63202,vec__63215,ev,handler,ev_def,seq__63199__$1,temp__5804__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__63199,chunk__63200,count__63201,i__63202,handler_63504__$1,vec__63215,ev,handler,ev_def,seq__63199__$1,temp__5804__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_63504__$1.cljs$core$IFn$_invoke$arity$3 ? handler_63504__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_63504__$1.call(null,oref,e,el));
});})(seq__63199,chunk__63200,count__63201,i__63202,handler_63504__$1,vec__63215,ev,handler,ev_def,seq__63199__$1,temp__5804__auto__))
);


var G__63506 = cljs.core.next(seq__63199__$1);
var G__63507 = null;
var G__63508 = (0);
var G__63509 = (0);
seq__63199 = G__63506;
chunk__63200 = G__63507;
count__63201 = G__63508;
i__63202 = G__63509;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__63221){
var vec__63222 = p__63221;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63222,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63222,(1),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = event;
if(cljs.core.truth_(and__5041__auto__)){
return handler;
} else {
return and__5041__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__5772__auto__ = [];
var len__5766__auto___63515 = arguments.length;
var i__5767__auto___63516 = (0);
while(true){
if((i__5767__auto___63516 < len__5766__auto___63515)){
args__5772__auto__.push((arguments[i__5767__auto___63516]));

var G__63517 = (i__5767__auto___63516 + (1));
i__5767__auto___63516 = G__63517;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e63227){if((e63227 instanceof Object)){
var e = e63227;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e63227;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq63225){
var G__63226 = cljs.core.first(seq63225);
var seq63225__$1 = cljs.core.next(seq63225);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63226,seq63225__$1);
}));

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__63229 = arguments.length;
switch (G__63229) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
}));

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__63231 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__63231) : shadow.dom.build.call(null,G__63231));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
}));

(shadow.object.make_dom.cljs$lang$maxFixedArity = 4);

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k63234,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__63240 = k63234;
var G__63240__$1 = (((G__63240 instanceof cljs.core.Keyword))?G__63240.fqn:null);
switch (G__63240__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63234,else__5343__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__63241){
var vec__63242 = p__63241;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63242,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63242,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.object.Watch{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63233){
var self__ = this;
var G__63233__$1 = this;
return (new cljs.core.RecordIter((0),G__63233__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63235,other63236){
var self__ = this;
var this63235__$1 = this;
return (((!((other63236 == null)))) && ((((this63235__$1.constructor === other63236.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63235__$1.key,other63236.key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63235__$1.handler,other63236.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63235__$1.__extmap,other63236.__extmap)))))))));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k63234){
var self__ = this;
var this__5347__auto____$1 = this;
var G__63245 = k63234;
var G__63245__$1 = (((G__63245 instanceof cljs.core.Keyword))?G__63245.fqn:null);
switch (G__63245__$1) {
case "key":
case "handler":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63234);

}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__63233){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__63246 = cljs.core.keyword_identical_QMARK_;
var expr__63247 = k__5349__auto__;
if(cljs.core.truth_((pred__63246.cljs$core$IFn$_invoke$arity$2 ? pred__63246.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__63247) : pred__63246.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__63247)))){
return (new shadow.object.Watch(G__63233,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63246.cljs$core$IFn$_invoke$arity$2 ? pred__63246.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__63247) : pred__63246.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__63247)))){
return (new shadow.object.Watch(self__.key,G__63233,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__63233),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__63233){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__63233,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.object/Watch");
}));

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__63239){
var extmap__5382__auto__ = (function (){var G__63249 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63239,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__63239)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63249);
} else {
return G__63249;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__63239),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__63239),null,cljs.core.not_empty(extmap__5382__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
}));

(shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),shadow.object._id(other))));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null))));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__63250_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__63250_SHARP_));
}),self__.watches));
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
(self__.data = new$);

var seq__63257 = cljs.core.seq(self__.watches);
var chunk__63258 = null;
var count__63259 = (0);
var i__63260 = (0);
while(true){
if((i__63260 < count__63259)){
var map__63269 = chunk__63258.cljs$core$IIndexed$_nth$arity$2(null,i__63260);
var map__63269__$1 = cljs.core.__destructure_map(map__63269);
var watch = map__63269__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63269__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63269__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__63539 = seq__63257;
var G__63540 = chunk__63258;
var G__63541 = count__63259;
var G__63542 = (i__63260 + (1));
seq__63257 = G__63539;
chunk__63258 = G__63540;
count__63259 = G__63541;
i__63260 = G__63542;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__63257);
if(temp__5804__auto__){
var seq__63257__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63257__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__63257__$1);
var G__63543 = cljs.core.chunk_rest(seq__63257__$1);
var G__63544 = c__5565__auto__;
var G__63545 = cljs.core.count(c__5565__auto__);
var G__63546 = (0);
seq__63257 = G__63543;
chunk__63258 = G__63544;
count__63259 = G__63545;
i__63260 = G__63546;
continue;
} else {
var map__63271 = cljs.core.first(seq__63257__$1);
var map__63271__$1 = cljs.core.__destructure_map(map__63271);
var watch = map__63271__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63271__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63271__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__63547 = cljs.core.next(seq__63257__$1);
var G__63548 = null;
var G__63549 = (0);
var G__63550 = (0);
seq__63257 = G__63547;
chunk__63258 = G__63548;
count__63259 = G__63549;
i__63260 = G__63550;
continue;
}
} else {
return null;
}
}
break;
}
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__63275_63551 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__63276_63552 = null;
var count__63277_63553 = (0);
var i__63278_63554 = (0);
while(true){
if((i__63278_63554 < count__63277_63553)){
var child_63555 = chunk__63276_63552.cljs$core$IIndexed$_nth$arity$2(null,i__63278_63554);
shadow.object._destroy_BANG_(child_63555,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__63556 = seq__63275_63551;
var G__63557 = chunk__63276_63552;
var G__63558 = count__63277_63553;
var G__63559 = (i__63278_63554 + (1));
seq__63275_63551 = G__63556;
chunk__63276_63552 = G__63557;
count__63277_63553 = G__63558;
i__63278_63554 = G__63559;
continue;
} else {
var temp__5804__auto___63560 = cljs.core.seq(seq__63275_63551);
if(temp__5804__auto___63560){
var seq__63275_63561__$1 = temp__5804__auto___63560;
if(cljs.core.chunked_seq_QMARK_(seq__63275_63561__$1)){
var c__5565__auto___63562 = cljs.core.chunk_first(seq__63275_63561__$1);
var G__63563 = cljs.core.chunk_rest(seq__63275_63561__$1);
var G__63564 = c__5565__auto___63562;
var G__63565 = cljs.core.count(c__5565__auto___63562);
var G__63566 = (0);
seq__63275_63551 = G__63563;
chunk__63276_63552 = G__63564;
count__63277_63553 = G__63565;
i__63278_63554 = G__63566;
continue;
} else {
var child_63567 = cljs.core.first(seq__63275_63561__$1);
shadow.object._destroy_BANG_(child_63567,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__63568 = cljs.core.next(seq__63275_63561__$1);
var G__63569 = null;
var G__63570 = (0);
var G__63571 = (0);
seq__63275_63551 = G__63568;
chunk__63276_63552 = G__63569;
count__63277_63553 = G__63570;
i__63278_63554 = G__63571;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_63572 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_63572 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_63572);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
}));

(shadow.object.ObjectRef.cljs$lang$type = true);

(shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef");

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__63294 = arguments.length;
switch (G__63294) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
}));

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
}));

(shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3);

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__63302 = arguments.length;
switch (G__63302) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
}));

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,(function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
}));

(shadow.object.bind_change.cljs$lang$maxFixedArity = 4);

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__5772__auto__ = [];
var len__5766__auto___63580 = arguments.length;
var i__5767__auto___63581 = (0);
while(true){
if((i__5767__auto___63581 < len__5766__auto___63580)){
args__5772__auto__.push((arguments[i__5767__auto___63581]));

var G__63582 = (i__5767__auto___63581 + (1));
i__5767__auto___63581 = G__63582;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_63587 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5802__auto___63588 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5802__auto___63588)){
var dom_63589 = temp__5802__auto___63588;
shadow.dom.set_data(dom_63589,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_63589,dom_events_63587);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_63589], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_63589], 0));
} else {
var temp__5804__auto___63590 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5804__auto___63590)){
var dom_fn_63591 = temp__5804__auto___63590;
var dom_63592 = (function (){var G__63321 = (dom_fn_63591.cljs$core$IFn$_invoke$arity$2 ? dom_fn_63591.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_63591.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__63321) : shadow.dom.build.call(null,G__63321));
})();
shadow.dom.set_data(dom_63592,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_63592], 0));

shadow.object.bind_dom_events(oref,dom_63592,dom_events_63587);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_63592], 0));
} else {
}
}

var temp__5804__auto___63593 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5804__auto___63593)){
var watches_63594 = temp__5804__auto___63593;
var seq__63324_63595 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_63594));
var chunk__63325_63596 = null;
var count__63326_63597 = (0);
var i__63327_63598 = (0);
while(true){
if((i__63327_63598 < count__63326_63597)){
var vec__63336_63599 = chunk__63325_63596.cljs$core$IIndexed$_nth$arity$2(null,i__63327_63598);
var attr_63600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63336_63599,(0),null);
var handler_63601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63336_63599,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_63600,((function (seq__63324_63595,chunk__63325_63596,count__63326_63597,i__63327_63598,vec__63336_63599,attr_63600,handler_63601,watches_63594,temp__5804__auto___63593,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_63601.cljs$core$IFn$_invoke$arity$3 ? handler_63601.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_63601.call(null,oref,old,new$));
});})(seq__63324_63595,chunk__63325_63596,count__63326_63597,i__63327_63598,vec__63336_63599,attr_63600,handler_63601,watches_63594,temp__5804__auto___63593,oid,parent,result_chan,odef,obj,oref))
);


var G__63606 = seq__63324_63595;
var G__63607 = chunk__63325_63596;
var G__63608 = count__63326_63597;
var G__63609 = (i__63327_63598 + (1));
seq__63324_63595 = G__63606;
chunk__63325_63596 = G__63607;
count__63326_63597 = G__63608;
i__63327_63598 = G__63609;
continue;
} else {
var temp__5804__auto___63610__$1 = cljs.core.seq(seq__63324_63595);
if(temp__5804__auto___63610__$1){
var seq__63324_63611__$1 = temp__5804__auto___63610__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63324_63611__$1)){
var c__5565__auto___63612 = cljs.core.chunk_first(seq__63324_63611__$1);
var G__63615 = cljs.core.chunk_rest(seq__63324_63611__$1);
var G__63616 = c__5565__auto___63612;
var G__63617 = cljs.core.count(c__5565__auto___63612);
var G__63618 = (0);
seq__63324_63595 = G__63615;
chunk__63325_63596 = G__63616;
count__63326_63597 = G__63617;
i__63327_63598 = G__63618;
continue;
} else {
var vec__63339_63619 = cljs.core.first(seq__63324_63611__$1);
var attr_63620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63339_63619,(0),null);
var handler_63621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63339_63619,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_63620,((function (seq__63324_63595,chunk__63325_63596,count__63326_63597,i__63327_63598,vec__63339_63619,attr_63620,handler_63621,seq__63324_63611__$1,temp__5804__auto___63610__$1,watches_63594,temp__5804__auto___63593,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_63621.cljs$core$IFn$_invoke$arity$3 ? handler_63621.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_63621.call(null,oref,old,new$));
});})(seq__63324_63595,chunk__63325_63596,count__63326_63597,i__63327_63598,vec__63339_63619,attr_63620,handler_63621,seq__63324_63611__$1,temp__5804__auto___63610__$1,watches_63594,temp__5804__auto___63593,oid,parent,result_chan,odef,obj,oref))
);


var G__63622 = cljs.core.next(seq__63324_63611__$1);
var G__63623 = null;
var G__63624 = (0);
var G__63625 = (0);
seq__63324_63595 = G__63622;
chunk__63325_63596 = G__63623;
count__63326_63597 = G__63624;
i__63327_63598 = G__63625;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
}));

(shadow.object.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.create.cljs$lang$applyTo = (function (seq63316){
var G__63317 = cljs.core.first(seq63316);
var seq63316__$1 = cljs.core.next(seq63316);
var G__63318 = cljs.core.first(seq63316__$1);
var seq63316__$2 = cljs.core.next(seq63316__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63317,G__63318,seq63316__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__63344 = arguments.length;
switch (G__63344) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
}));

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = (function (p1__63342_SHARP_){
var G__63345 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__63342_SHARP_) : node_gen.call(null,p1__63342_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__63345) : shadow.dom.build.call(null,G__63345));
});
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
}));

return cljs.core.deref(node);
}));

(shadow.object.bind_simple.cljs$lang$maxFixedArity = 3);

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)) : shadow.object.notify_down_BANG_.call(null,new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__63348_63640 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__63349_63641 = null;
var count__63350_63642 = (0);
var i__63351_63643 = (0);
while(true){
if((i__63351_63643 < count__63350_63642)){
var obj_63644 = chunk__63349_63641.cljs$core$IIndexed$_nth$arity$2(null,i__63351_63643);
var obj_63645__$1 = shadow.object.get_from_dom(obj_63644);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_63645__$1);


var G__63646 = seq__63348_63640;
var G__63647 = chunk__63349_63641;
var G__63648 = count__63350_63642;
var G__63649 = (i__63351_63643 + (1));
seq__63348_63640 = G__63646;
chunk__63349_63641 = G__63647;
count__63350_63642 = G__63648;
i__63351_63643 = G__63649;
continue;
} else {
var temp__5804__auto___63650 = cljs.core.seq(seq__63348_63640);
if(temp__5804__auto___63650){
var seq__63348_63651__$1 = temp__5804__auto___63650;
if(cljs.core.chunked_seq_QMARK_(seq__63348_63651__$1)){
var c__5565__auto___63653 = cljs.core.chunk_first(seq__63348_63651__$1);
var G__63654 = cljs.core.chunk_rest(seq__63348_63651__$1);
var G__63655 = c__5565__auto___63653;
var G__63656 = cljs.core.count(c__5565__auto___63653);
var G__63657 = (0);
seq__63348_63640 = G__63654;
chunk__63349_63641 = G__63655;
count__63350_63642 = G__63656;
i__63351_63643 = G__63657;
continue;
} else {
var obj_63658 = cljs.core.first(seq__63348_63651__$1);
var obj_63659__$1 = shadow.object.get_from_dom(obj_63658);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_63659__$1);


var G__63661 = cljs.core.next(seq__63348_63651__$1);
var G__63662 = null;
var G__63663 = (0);
var G__63664 = (0);
seq__63348_63640 = G__63661;
chunk__63349_63641 = G__63662;
count__63350_63642 = G__63663;
i__63351_63643 = G__63664;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__63354 = arguments.length;
switch (G__63354) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__63352_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__63352_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__63358){
var vec__63359 = p__63358;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63359,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63359,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,(function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
}));

return obj;
});
var seq__63363_63673 = cljs.core.seq((function (){var G__63368 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__63368) : coll_transform.call(null,G__63368));
})());
var chunk__63364_63674 = null;
var count__63365_63675 = (0);
var i__63366_63676 = (0);
while(true){
if((i__63366_63676 < count__63365_63675)){
var item_63677 = chunk__63364_63674.cljs$core$IIndexed$_nth$arity$2(null,i__63366_63676);
shadow.object.dom_enter(coll_dom,make_item_fn(item_63677));


var G__63678 = seq__63363_63673;
var G__63679 = chunk__63364_63674;
var G__63680 = count__63365_63675;
var G__63681 = (i__63366_63676 + (1));
seq__63363_63673 = G__63678;
chunk__63364_63674 = G__63679;
count__63365_63675 = G__63680;
i__63366_63676 = G__63681;
continue;
} else {
var temp__5804__auto___63682 = cljs.core.seq(seq__63363_63673);
if(temp__5804__auto___63682){
var seq__63363_63683__$1 = temp__5804__auto___63682;
if(cljs.core.chunked_seq_QMARK_(seq__63363_63683__$1)){
var c__5565__auto___63684 = cljs.core.chunk_first(seq__63363_63683__$1);
var G__63685 = cljs.core.chunk_rest(seq__63363_63683__$1);
var G__63686 = c__5565__auto___63684;
var G__63687 = cljs.core.count(c__5565__auto___63684);
var G__63688 = (0);
seq__63363_63673 = G__63685;
chunk__63364_63674 = G__63686;
count__63365_63675 = G__63687;
i__63366_63676 = G__63688;
continue;
} else {
var item_63689 = cljs.core.first(seq__63363_63683__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_63689));


var G__63691 = cljs.core.next(seq__63363_63683__$1);
var G__63692 = null;
var G__63693 = (0);
var G__63694 = (0);
seq__63363_63673 = G__63691;
chunk__63364_63674 = G__63692;
count__63365_63675 = G__63693;
i__63366_63676 = G__63694;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__5131__auto__ = count_new;
var y__5132__auto__ = count_children;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})();
var n__5633__auto___63696 = count_children__$1;
var idx_63697 = (0);
while(true){
if((idx_63697 < n__5633__auto___63696)){
var cn_63699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_63697);
var cc_63700 = shadow.object.get_from_dom(cn_63699);
var ckey_63701 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_63700);
var cval_63702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_63700,item_key);
var vec__63371_63703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_63697);
var nkey_63704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63371_63703,(0),null);
var nval_63705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63371_63703,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_63701,nkey_63704)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_63702,nval_63705)))){
} else {
var new_obj_63706 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_63704,nval_63705], null));
shadow.dom.replace_node(cn_63699,new_obj_63706);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_63700);

shadow.object.notify_tree_BANG_(new_obj_63706,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__63707 = (idx_63697 + (1));
idx_63697 = G__63707;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__63374_63708 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__63375_63709 = null;
var count__63376_63710 = (0);
var i__63377_63711 = (0);
while(true){
if((i__63377_63711 < count__63376_63710)){
var item_63712 = chunk__63375_63709.cljs$core$IIndexed$_nth$arity$2(null,i__63377_63711);
shadow.object.dom_enter(coll_dom,make_item_fn(item_63712));


var G__63713 = seq__63374_63708;
var G__63714 = chunk__63375_63709;
var G__63715 = count__63376_63710;
var G__63716 = (i__63377_63711 + (1));
seq__63374_63708 = G__63713;
chunk__63375_63709 = G__63714;
count__63376_63710 = G__63715;
i__63377_63711 = G__63716;
continue;
} else {
var temp__5804__auto___63717 = cljs.core.seq(seq__63374_63708);
if(temp__5804__auto___63717){
var seq__63374_63718__$1 = temp__5804__auto___63717;
if(cljs.core.chunked_seq_QMARK_(seq__63374_63718__$1)){
var c__5565__auto___63719 = cljs.core.chunk_first(seq__63374_63718__$1);
var G__63720 = cljs.core.chunk_rest(seq__63374_63718__$1);
var G__63721 = c__5565__auto___63719;
var G__63722 = cljs.core.count(c__5565__auto___63719);
var G__63723 = (0);
seq__63374_63708 = G__63720;
chunk__63375_63709 = G__63721;
count__63376_63710 = G__63722;
i__63377_63711 = G__63723;
continue;
} else {
var item_63724 = cljs.core.first(seq__63374_63718__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_63724));


var G__63729 = cljs.core.next(seq__63374_63718__$1);
var G__63731 = null;
var G__63732 = (0);
var G__63733 = (0);
seq__63374_63708 = G__63729;
chunk__63375_63709 = G__63731;
count__63376_63710 = G__63732;
i__63377_63711 = G__63733;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
}));

return coll_dom;
}));

(shadow.object.bind_children.cljs$lang$maxFixedArity = 6);

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__5041__auto__ = key;
if(cljs.core.truth_(and__5041__auto__)){
return path;
} else {
return and__5041__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__63378 = "inspect!";
var G__63379 = shadow.object._id(oref);
var G__63380 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__63381 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__63378,G__63379,G__63380,G__63381) : shadow.object.info.call(null,G__63378,G__63379,G__63380,G__63381));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__63382_63734 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__63383_63735 = null;
var count__63384_63736 = (0);
var i__63385_63737 = (0);
while(true){
if((i__63385_63737 < count__63384_63736)){
var vec__63400_63738 = chunk__63383_63735.cljs$core$IIndexed$_nth$arity$2(null,i__63385_63737);
var id_63739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63400_63738,(0),null);
var oref_63740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63400_63738,(1),null);
var G__63403_63741 = "dump";
var G__63404_63742 = id_63739;
var G__63405_63743 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_63740)], 0));
var G__63406_63744 = cljs.core.deref(shadow.object._data(oref_63740));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__63403_63741,G__63404_63742,G__63405_63743,G__63406_63744) : shadow.object.info.call(null,G__63403_63741,G__63404_63742,G__63405_63743,G__63406_63744));


var G__63745 = seq__63382_63734;
var G__63746 = chunk__63383_63735;
var G__63747 = count__63384_63736;
var G__63748 = (i__63385_63737 + (1));
seq__63382_63734 = G__63745;
chunk__63383_63735 = G__63746;
count__63384_63736 = G__63747;
i__63385_63737 = G__63748;
continue;
} else {
var temp__5804__auto___63749 = cljs.core.seq(seq__63382_63734);
if(temp__5804__auto___63749){
var seq__63382_63750__$1 = temp__5804__auto___63749;
if(cljs.core.chunked_seq_QMARK_(seq__63382_63750__$1)){
var c__5565__auto___63751 = cljs.core.chunk_first(seq__63382_63750__$1);
var G__63752 = cljs.core.chunk_rest(seq__63382_63750__$1);
var G__63753 = c__5565__auto___63751;
var G__63754 = cljs.core.count(c__5565__auto___63751);
var G__63755 = (0);
seq__63382_63734 = G__63752;
chunk__63383_63735 = G__63753;
count__63384_63736 = G__63754;
i__63385_63737 = G__63755;
continue;
} else {
var vec__63407_63756 = cljs.core.first(seq__63382_63750__$1);
var id_63757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63407_63756,(0),null);
var oref_63758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63407_63756,(1),null);
var G__63410_63759 = "dump";
var G__63411_63760 = id_63757;
var G__63412_63761 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_63758)], 0));
var G__63413_63762 = cljs.core.deref(shadow.object._data(oref_63758));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__63410_63759,G__63411_63760,G__63412_63761,G__63413_63762) : shadow.object.info.call(null,G__63410_63759,G__63411_63760,G__63412_63761,G__63413_63762));


var G__63767 = cljs.core.next(seq__63382_63750__$1);
var G__63768 = null;
var G__63769 = (0);
var G__63770 = (0);
seq__63382_63734 = G__63767;
chunk__63383_63735 = G__63768;
count__63384_63736 = G__63769;
i__63385_63737 = G__63770;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
