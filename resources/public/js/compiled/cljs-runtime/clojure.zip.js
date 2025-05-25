goog.provide('clojure.zip');
/**
 * Creates a new zipper structure. 
 * 
 *   branch? is a fn that, given a node, returns true if can have
 *   children, even if it currently doesn't.
 * 
 *   children is a fn that, given a branch node, returns a seq of its
 *   children.
 * 
 *   make-node is a fn that, given an existing node and a seq of
 *   children, returns a new branch node with the supplied children.
 *   root is the root node.
 */
clojure.zip.zipper = (function clojure$zip$zipper(branch_QMARK_,children,make_node,root){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("zip","branch?","zip/branch?",-998880862),branch_QMARK_,new cljs.core.Keyword("zip","children","zip/children",-940194589),children,new cljs.core.Keyword("zip","make-node","zip/make-node",1103800591),make_node], null));
});
/**
 * Returns a zipper for nested sequences, given a root sequence
 */
clojure.zip.seq_zip = (function clojure$zip$seq_zip(root){
return clojure.zip.zipper(cljs.core.seq_QMARK_,cljs.core.identity,(function (node,children){
return cljs.core.with_meta(children,cljs.core.meta(node));
}),root);
});
/**
 * Returns a zipper for nested vectors, given a root vector
 */
clojure.zip.vector_zip = (function clojure$zip$vector_zip(root){
return clojure.zip.zipper(cljs.core.vector_QMARK_,cljs.core.seq,(function (node,children){
return cljs.core.with_meta(cljs.core.vec(children),cljs.core.meta(node));
}),root);
});
/**
 * Returns a zipper for xml elements (as from xml/parse),
 *   given a root element
 */
clojure.zip.xml_zip = (function clojure$zip$xml_zip(root){
return clojure.zip.zipper(cljs.core.complement(cljs.core.string_QMARK_),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,new cljs.core.Keyword(null,"content","content",15833224)),(function (node,children){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"content","content",15833224),(function (){var and__5041__auto__ = children;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,children);
} else {
return and__5041__auto__;
}
})());
}),root);
});
/**
 * Returns the node at loc
 */
clojure.zip.node = (function clojure$zip$node(loc){
return (loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((0)) : loc.call(null,(0)));
});
/**
 * Returns true if the node at loc is a branch
 */
clojure.zip.branch_QMARK_ = (function clojure$zip$branch_QMARK_(loc){
var G__48832 = clojure.zip.node(loc);
var fexpr__48831 = new cljs.core.Keyword("zip","branch?","zip/branch?",-998880862).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(loc));
return (fexpr__48831.cljs$core$IFn$_invoke$arity$1 ? fexpr__48831.cljs$core$IFn$_invoke$arity$1(G__48832) : fexpr__48831.call(null,G__48832));
});
/**
 * Returns a seq of the children of node at loc, which must be a branch
 */
clojure.zip.children = (function clojure$zip$children(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_(loc))){
var G__48837 = clojure.zip.node(loc);
var fexpr__48836 = new cljs.core.Keyword("zip","children","zip/children",-940194589).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(loc));
return (fexpr__48836.cljs$core$IFn$_invoke$arity$1 ? fexpr__48836.cljs$core$IFn$_invoke$arity$1(G__48837) : fexpr__48836.call(null,G__48837));
} else {
throw "called children on a leaf node";
}
});
/**
 * Returns a new branch node, given an existing node and new
 *   children. The loc is only used to supply the constructor.
 */
clojure.zip.make_node = (function clojure$zip$make_node(loc,node,children){
var fexpr__48838 = new cljs.core.Keyword("zip","make-node","zip/make-node",1103800591).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(loc));
return (fexpr__48838.cljs$core$IFn$_invoke$arity$2 ? fexpr__48838.cljs$core$IFn$_invoke$arity$2(node,children) : fexpr__48838.call(null,node,children));
});
/**
 * Returns a seq of nodes leading to this loc
 */
clojure.zip.path = (function clojure$zip$path(loc){
return new cljs.core.Keyword(null,"pnodes","pnodes",1739080565).cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1))));
});
/**
 * Returns a seq of the left siblings of this loc
 */
clojure.zip.lefts = (function clojure$zip$lefts(loc){
return cljs.core.seq(new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1)))));
});
/**
 * Returns a seq of the right siblings of this loc
 */
clojure.zip.rights = (function clojure$zip$rights(loc){
return new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1))));
});
/**
 * Returns the loc of the leftmost child of the node at this loc, or
 *   nil if no children
 */
clojure.zip.down = (function clojure$zip$down(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_(loc))){
var vec__48841 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48841,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48841,(1),null);
var vec__48844 = clojure.zip.children(loc);
var seq__48845 = cljs.core.seq(vec__48844);
var first__48846 = cljs.core.first(seq__48845);
var seq__48845__$1 = cljs.core.next(seq__48845);
var c = first__48846;
var cnext = seq__48845__$1;
var cs = vec__48844;
if(cljs.core.truth_(cs)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565),(cljs.core.truth_(path)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pnodes","pnodes",1739080565).cljs$core$IFn$_invoke$arity$1(path),node):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)),new cljs.core.Keyword(null,"ppath","ppath",-1758182784),path,new cljs.core.Keyword(null,"r","r",-471384190),cnext], null)], null),cljs.core.meta(loc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Returns the loc of the parent of the node at this loc, or nil if at
 *   the top
 */
clojure.zip.up = (function clojure$zip$up(loc){
var vec__48847 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48847,(0),null);
var map__48850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48847,(1),null);
var map__48850__$1 = cljs.core.__destructure_map(map__48850);
var path = map__48850__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48850__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var ppath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48850__$1,new cljs.core.Keyword(null,"ppath","ppath",-1758182784));
var pnodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48850__$1,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48850__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48850__$1,new cljs.core.Keyword(null,"changed?","changed?",-437828330));
if(cljs.core.truth_(pnodes)){
var pnode = cljs.core.peek(pnodes);
return cljs.core.with_meta((cljs.core.truth_(changed_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node(loc,pnode,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(l,cljs.core.cons(node,r))),(function (){var and__5041__auto__ = ppath;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ppath,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
} else {
return and__5041__auto__;
}
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pnode,ppath], null)),cljs.core.meta(loc));
} else {
return null;
}
});
/**
 * zips all the way up and returns the root node, reflecting any
 *  changes.
 */
clojure.zip.root = (function clojure$zip$root(loc){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1))))){
return clojure.zip.node(loc);
} else {
var p = clojure.zip.up(loc);
if(cljs.core.truth_(p)){
var G__48971 = p;
loc = G__48971;
continue;
} else {
return clojure.zip.node(loc);
}
}
break;
}
});
/**
 * Returns the loc of the right sibling of the node at this loc, or nil
 */
clojure.zip.right = (function clojure$zip$right(loc){
var vec__48853 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48853,(0),null);
var map__48856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48853,(1),null);
var map__48856__$1 = cljs.core.__destructure_map(map__48856);
var path = map__48856__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48856__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var vec__48857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48856__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var seq__48858 = cljs.core.seq(vec__48857);
var first__48859 = cljs.core.first(seq__48858);
var seq__48858__$1 = cljs.core.next(seq__48858);
var r = first__48859;
var rnext = seq__48858__$1;
var rs = vec__48857;
if(cljs.core.truth_((function (){var and__5041__auto__ = path;
if(cljs.core.truth_(and__5041__auto__)){
return rs;
} else {
return and__5041__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,node),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"r","r",-471384190),rnext], 0))], null),cljs.core.meta(loc));
} else {
return null;
}
});
/**
 * Returns the loc of the rightmost sibling of the node at this loc, or self
 */
clojure.zip.rightmost = (function clojure$zip$rightmost(loc){
var vec__48860 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48860,(0),null);
var map__48863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48860,(1),null);
var map__48863__$1 = cljs.core.__destructure_map(map__48863);
var path = map__48863__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48863__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48863__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if(cljs.core.truth_((function (){var and__5041__auto__ = path;
if(cljs.core.truth_(and__5041__auto__)){
return r;
} else {
return and__5041__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(r),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.conj,l,node,cljs.core.butlast(r)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"r","r",-471384190),null], 0))], null),cljs.core.meta(loc));
} else {
return loc;
}
});
/**
 * Returns the loc of the left sibling of the node at this loc, or nil
 */
clojure.zip.left = (function clojure$zip$left(loc){
var vec__48871 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48871,(0),null);
var map__48874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48871,(1),null);
var map__48874__$1 = cljs.core.__destructure_map(map__48874);
var path = map__48874__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48874__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48874__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if(cljs.core.truth_((function (){var and__5041__auto__ = path;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(l);
} else {
return and__5041__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop(l),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.cons(node,r)], 0))], null),cljs.core.meta(loc));
} else {
return null;
}
});
/**
 * Returns the loc of the leftmost sibling of the node at this loc, or self
 */
clojure.zip.leftmost = (function clojure$zip$leftmost(loc){
var vec__48882 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48882,(0),null);
var map__48885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48882,(1),null);
var map__48885__$1 = cljs.core.__destructure_map(map__48885);
var path = map__48885__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48885__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48885__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if(cljs.core.truth_((function (){var and__5041__auto__ = path;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(l);
} else {
return and__5041__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.rest(l),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0))], 0))], null),cljs.core.meta(loc));
} else {
return loc;
}
});
/**
 * Inserts the item as the left sibling of the node at this loc,
 *  without moving
 */
clojure.zip.insert_left = (function clojure$zip$insert_left(loc,item){
var vec__48889 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48889,(0),null);
var map__48892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48889,(1),null);
var map__48892__$1 = cljs.core.__destructure_map(map__48892);
var path = map__48892__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48892__$1,new cljs.core.Keyword(null,"l","l",1395893423));
if((path == null)){
throw "Insert at top";
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"changed?","changed?",-437828330),true], 0))], null),cljs.core.meta(loc));
}
});
/**
 * Inserts the item as the right sibling of the node at this loc,
 *   without moving
 */
clojure.zip.insert_right = (function clojure$zip$insert_right(loc,item){
var vec__48900 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48900,(0),null);
var map__48903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48900,(1),null);
var map__48903__$1 = cljs.core.__destructure_map(map__48903);
var path = map__48903__$1;
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48903__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if((path == null)){
throw "Insert at top";
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.cons(item,r),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"changed?","changed?",-437828330),true], 0))], null),cljs.core.meta(loc));
}
});
/**
 * Replaces the node at this loc, without moving
 */
clojure.zip.replace = (function clojure$zip$replace(loc,node){
var vec__48904 = loc;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48904,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48904,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(path,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta(loc));
});
/**
 * Replaces the node at this loc with the value of (f node args)
 */
clojure.zip.edit = (function clojure$zip$edit(var_args){
var args__5772__auto__ = [];
var len__5766__auto___48973 = arguments.length;
var i__5767__auto___48974 = (0);
while(true){
if((i__5767__auto___48974 < len__5766__auto___48973)){
args__5772__auto__.push((arguments[i__5767__auto___48974]));

var G__48975 = (i__5767__auto___48974 + (1));
i__5767__auto___48974 = G__48975;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic = (function (loc,f,args){
return clojure.zip.replace(loc,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,clojure.zip.node(loc),args));
}));

(clojure.zip.edit.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(clojure.zip.edit.cljs$lang$applyTo = (function (seq48907){
var G__48909 = cljs.core.first(seq48907);
var seq48907__$1 = cljs.core.next(seq48907);
var G__48910 = cljs.core.first(seq48907__$1);
var seq48907__$2 = cljs.core.next(seq48907__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48909,G__48910,seq48907__$2);
}));

/**
 * Inserts the item as the leftmost child of the node at this loc,
 *   without moving
 */
clojure.zip.insert_child = (function clojure$zip$insert_child(loc,item){
return clojure.zip.replace(loc,clojure.zip.make_node(loc,clojure.zip.node(loc),cljs.core.cons(item,clojure.zip.children(loc))));
});
/**
 * Inserts the item as the rightmost child of the node at this loc,
 *   without moving
 */
clojure.zip.append_child = (function clojure$zip$append_child(loc,item){
return clojure.zip.replace(loc,clojure.zip.make_node(loc,clojure.zip.node(loc),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.zip.children(loc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
});
/**
 * Moves to the next loc in the hierarchy, depth-first. When reaching
 *   the end, returns a distinguished loc detectable via end?. If already
 *   at the end, stays there.
 */
clojure.zip.next = (function clojure$zip$next(loc){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1))))){
return loc;
} else {
var or__5043__auto__ = (function (){var and__5041__auto__ = clojure.zip.branch_QMARK_(loc);
if(cljs.core.truth_(and__5041__auto__)){
return clojure.zip.down(loc);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = clojure.zip.right(loc);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var p = loc;
while(true){
if(cljs.core.truth_(clojure.zip.up(p))){
var or__5043__auto____$2 = clojure.zip.right(clojure.zip.up(p));
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var G__48984 = clojure.zip.up(p);
p = G__48984;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node(p),new cljs.core.Keyword(null,"end","end",-268185958)], null);
}
break;
}
}
}
}
});
/**
 * Moves to the previous loc in the hierarchy, depth-first. If already
 *   at the root, returns nil.
 */
clojure.zip.prev = (function clojure$zip$prev(loc){
var temp__5802__auto__ = clojure.zip.left(loc);
if(cljs.core.truth_(temp__5802__auto__)){
var lloc = temp__5802__auto__;
var loc__$1 = lloc;
while(true){
var temp__5802__auto____$1 = (function (){var and__5041__auto__ = clojure.zip.branch_QMARK_(loc__$1);
if(cljs.core.truth_(and__5041__auto__)){
return clojure.zip.down(loc__$1);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto____$1)){
var child = temp__5802__auto____$1;
var G__48985 = clojure.zip.rightmost(child);
loc__$1 = G__48985;
continue;
} else {
return loc__$1;
}
break;
}
} else {
return clojure.zip.up(loc);
}
});
/**
 * Returns true if loc represents the end of a depth-first walk
 */
clojure.zip.end_QMARK_ = (function clojure$zip$end_QMARK_(loc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1))));
});
/**
 * Removes the node at loc, returning the loc that would have preceded
 *   it in a depth-first walk.
 */
clojure.zip.remove = (function clojure$zip$remove(loc){
var vec__48948 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48948,(0),null);
var map__48951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48948,(1),null);
var map__48951__$1 = cljs.core.__destructure_map(map__48951);
var path = map__48951__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48951__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var ppath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48951__$1,new cljs.core.Keyword(null,"ppath","ppath",-1758182784));
var pnodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48951__$1,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565));
var rs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48951__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if((path == null)){
throw "Remove at top";
} else {
if((cljs.core.count(l) > (0))){
var loc__$1 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop(l),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"changed?","changed?",-437828330),true], 0))], null),cljs.core.meta(loc));
while(true){
var temp__5802__auto__ = (function (){var and__5041__auto__ = clojure.zip.branch_QMARK_(loc__$1);
if(cljs.core.truth_(and__5041__auto__)){
return clojure.zip.down(loc__$1);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
var G__48986 = clojure.zip.rightmost(child);
loc__$1 = G__48986;
continue;
} else {
return loc__$1;
}
break;
}
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node(loc,cljs.core.peek(pnodes),rs),(function (){var and__5041__auto__ = ppath;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ppath,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
} else {
return and__5041__auto__;
}
})()], null),cljs.core.meta(loc));
}
}
});

//# sourceMappingURL=clojure.zip.js.map
