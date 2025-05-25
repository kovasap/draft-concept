goog.provide('rewrite_clj.custom_zipper.core');
rewrite_clj.custom_zipper.core.custom_zipper = (function rewrite_clj$custom_zipper$core$custom_zipper(root){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("rewrite-clj.custom-zipper.core","custom?","rewrite-clj.custom-zipper.core/custom?",-1122119625),true,new cljs.core.Keyword(null,"node","node",581201198),root,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.List.EMPTY], null);
});
rewrite_clj.custom_zipper.core.zipper = (function rewrite_clj$custom_zipper$core$zipper(root){
return clojure.zip.zipper(rewrite_clj.node.protocols.inner_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,rewrite_clj.node.protocols.children),rewrite_clj.node.protocols.replace_children,root);
});
rewrite_clj.custom_zipper.core.custom_zipper_QMARK_ = (function rewrite_clj$custom_zipper$core$custom_zipper_QMARK_(value){
return new cljs.core.Keyword("rewrite-clj.custom-zipper.core","custom?","rewrite-clj.custom-zipper.core/custom?",-1122119625).cljs$core$IFn$_invoke$arity$1(value);
});
/**
 * Returns the current node in `zloc`.
 */
rewrite_clj.custom_zipper.core.node = (function rewrite_clj$custom_zipper$core$node(G__49110){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__49110))){
var zloc = G__49110;
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
return clojure.zip.node(G__49110);
}
});
/**
 * Returns true if the current node in `zloc` is a branch.
 */
rewrite_clj.custom_zipper.core.branch_QMARK_ = (function rewrite_clj$custom_zipper$core$branch_QMARK_(G__49116){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__49116))){
var zloc = G__49116;
return rewrite_clj.node.protocols.inner_QMARK_(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(zloc));
} else {
return clojure.zip.branch_QMARK_(G__49116);
}
});
/**
 * Returns a seq of the children of current node in `zloc`, which must be a branch.
 */
rewrite_clj.custom_zipper.core.children = (function rewrite_clj$custom_zipper$core$children(G__49117){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__49117))){
var map__49118 = G__49117;
var map__49118__$1 = cljs.core.__destructure_map(map__49118);
var zloc = map__49118__$1;
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49118__$1,new cljs.core.Keyword(null,"node","node",581201198));
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.branch_QMARK_(zloc))){
return cljs.core.seq(rewrite_clj.node.protocols.children(node));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("called children on a leaf node",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return clojure.zip.children(G__49117);
}
});
/**
 * Returns a new branch node, given an existing `node` and new
 *   `children`. 
 */
rewrite_clj.custom_zipper.core.make_node = (function rewrite_clj$custom_zipper$core$make_node(G__49120,G__49121,G__49122){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__49120))){
var _zloc = G__49120;
var node = G__49121;
var children = G__49122;
return rewrite_clj.node.protocols.replace_children(node,children);
} else {
return clojure.zip.make_node(G__49120,G__49121,G__49122);
}
});
/**
 * Returns the ones-based `[row col]` of the start of the current node in `zloc`.
 * 
 *   Throws if `zloc` was not created with [position tracking](/doc/01-user-guide.adoc#position-tracking).
 */
rewrite_clj.custom_zipper.core.position = (function rewrite_clj$custom_zipper$core$position(zloc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(zloc))){
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["to use position functions, please construct your zipper with ","':track-position?'  set to true."].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Returns the ones-based `[[start-row start-col] [end-row end-col]]` of the current node in `zloc`.
 *   `end-col` is exclusive.
 * 
 *   Throws if `zloc` was not created with [position tracking](/doc/01-user-guide.adoc#position-tracking).
 */
rewrite_clj.custom_zipper.core.position_span = (function rewrite_clj$custom_zipper$core$position_span(zloc){
var start_pos = rewrite_clj.custom_zipper.core.position(zloc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_pos,rewrite_clj.node.protocols._PLUS_extent(start_pos,rewrite_clj.node.protocols.extent(rewrite_clj.custom_zipper.core.node(zloc)))], null);
});
/**
 * Returns a seq of the left siblings of current node in `zloc`.
 */
rewrite_clj.custom_zipper.core.lefts = (function rewrite_clj$custom_zipper$core$lefts(G__49129){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__49129))){
var zloc = G__49129;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(zloc));
} else {
return clojure.zip.lefts(G__49129);
}
});
/**
 * Returns zipper with the location at the leftmost child of current node in `zloc`, or
 *   nil if no children.
 */
rewrite_clj.custom_zipper.core.down = (function rewrite_clj$custom_zipper$core$down(G__49133){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__49133))){
var zloc = G__49133;
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.branch_QMARK_(zloc))){
var map__49136 = zloc;
var map__49136__$1 = cljs.core.__destructure_map(map__49136);
var vec__49137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49136__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49137,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49137,(1),null);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49136__$1,new cljs.core.Keyword(null,"node","node",581201198));
var vec__49140 = rewrite_clj.custom_zipper.core.children(zloc);
var seq__49141 = cljs.core.seq(vec__49140);
var first__49142 = cljs.core.first(seq__49141);
var seq__49141__$1 = cljs.core.next(seq__49141);
var c = first__49142;
var cnext = seq__49141__$1;
var cs = vec__49140;
if(cljs.core.truth_(cs)){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("rewrite-clj.custom-zipper.core","custom?","rewrite-clj.custom-zipper.core/custom?",-1122119625),true,new cljs.core.Keyword(null,"node","node",581201198),c,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(col + rewrite_clj.node.protocols.leader_length(node))], null),new cljs.core.Keyword(null,"parent","parent",-878878779),zloc,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cnext], null),cljs.core.meta(zloc));
} else {
return null;
}
} else {
return null;
}
} else {
return clojure.zip.down(G__49133);
}
});
/**
 * Returns zipper with the location at the parent of current node in `zloc`, or nil if at
 *   the top.
 */
rewrite_clj.custom_zipper.core.up = (function rewrite_clj$custom_zipper$core$up(G__49146){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__49146))){
var zloc = G__49146;
var map__49147 = zloc;
var map__49147__$1 = cljs.core.__destructure_map(map__49147);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49147__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49147__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49147__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49147__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49147__$1,new cljs.core.Keyword(null,"changed?","changed?",-437828330));
if(cljs.core.truth_(parent)){
if(cljs.core.truth_(changed_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),rewrite_clj.custom_zipper.core.make_node(zloc,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(parent),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,left),cljs.core.cons(node,right)))], 0));
} else {
return parent;
}
} else {
return null;
}
} else {
return clojure.zip.up(G__49146);
}
});
/**
 * Zips all the way up `zloc` and returns the root node, reflecting any changes.
 */
rewrite_clj.custom_zipper.core.root = (function rewrite_clj$custom_zipper$core$root(G__49149){
while(true){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__49149))){
var zloc = G__49149;
if(cljs.core.truth_(new cljs.core.Keyword(null,"end?","end?",-1423391609).cljs$core$IFn$_invoke$arity$1(zloc))){
return rewrite_clj.custom_zipper.core.node(zloc);
} else {
var p = rewrite_clj.custom_zipper.core.up(zloc);
if(cljs.core.truth_(p)){
var G__49229 = p;
G__49149 = G__49229;
continue;
} else {
return rewrite_clj.custom_zipper.core.node(zloc);
}
}
} else {
return clojure.zip.root(G__49149);
}
break;
}
});
/**
 * Returns zipper with location at the right sibling of the current node in `zloc`, or nil.
 */
rewrite_clj.custom_zipper.core.right = (function rewrite_clj$custom_zipper$core$right(G__49150){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__49150))){
var zloc = G__49150;
var map__49152 = zloc;
var map__49152__$1 = cljs.core.__destructure_map(map__49152);
var vec__49153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49152__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var seq__49154 = cljs.core.seq(vec__49153);
var first__49155 = cljs.core.first(seq__49154);
var seq__49154__$1 = cljs.core.next(seq__49154);
var r = first__49155;
var rnext = seq__49154__$1;
var right = vec__49153;
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49152__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49152__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49152__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49152__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.truth_((function (){var and__5041__auto__ = parent;
if(cljs.core.truth_(and__5041__auto__)){
return right;
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"node","node",581201198),r,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(left,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,position], null)),new cljs.core.Keyword(null,"right","right",-452581833),rnext,new cljs.core.Keyword(null,"position","position",-2011731912),rewrite_clj.node.protocols._PLUS_extent(position,rewrite_clj.node.protocols.extent(node))], 0));
} else {
return null;
}
} else {
return clojure.zip.right(G__49150);
}
});
/**
 * Returns zipper with location at the rightmost sibling of the current node in `zloc`, or self.
 */
rewrite_clj.custom_zipper.core.rightmost = (function rewrite_clj$custom_zipper$core$rightmost(G__49156){
while(true){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__49156))){
var zloc = G__49156;
var temp__5802__auto__ = rewrite_clj.custom_zipper.core.right(zloc);
if(cljs.core.truth_(temp__5802__auto__)){
var next = temp__5802__auto__;
var G__49231 = next;
G__49156 = G__49231;
continue;
} else {
return zloc;
}
} else {
return clojure.zip.rightmost(G__49156);
}
break;
}
});
/**
 * Returns zipper with location at the left sibling of the current node in `zloc`, or nil.
 */
rewrite_clj.custom_zipper.core.left = (function rewrite_clj$custom_zipper$core$left(G__49158){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__49158))){
var zloc = G__49158;
var map__49163 = zloc;
var map__49163__$1 = cljs.core.__destructure_map(map__49163);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49163__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49163__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49163__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49163__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_((function (){var and__5041__auto__ = parent;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(left);
} else {
return and__5041__auto__;
}
})())){
var vec__49164 = cljs.core.peek(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49164,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49164,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"node","node",581201198),lnode,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop(left),new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.cons(node,right)], 0));
} else {
return null;
}
} else {
return clojure.zip.left(G__49158);
}
});
/**
 * Returns zipper with location at the leftmost sibling of the current node in `zloc`, or self.
 */
rewrite_clj.custom_zipper.core.leftmost = (function rewrite_clj$custom_zipper$core$leftmost(G__49167){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__49167))){
var zloc = G__49167;
var map__49168 = zloc;
var map__49168__$1 = cljs.core.__destructure_map(map__49168);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49168__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49168__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49168__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49168__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_((function (){var and__5041__auto__ = parent;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(left);
} else {
return and__5041__auto__;
}
})())){
var vec__49170 = cljs.core.first(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49170,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49170,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"node","node",581201198),lnode,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest(left)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([right], 0))], 0));
} else {
return zloc;
}
} else {
return clojure.zip.leftmost(G__49167);
}
});
/**
 * Returns zipper with node `item` inserted as the left sibling of current node in `zloc`,
 *  without moving location.
 */
rewrite_clj.custom_zipper.core.insert_left = (function rewrite_clj$custom_zipper$core$insert_left(G__49173,G__49174){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__49173))){
var zloc = G__49173;
var item = G__49174;
var map__49175 = zloc;
var map__49175__$1 = cljs.core.__destructure_map(map__49175);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49175__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49175__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49175__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.not(parent)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot insert left at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(left,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,position], null)),new cljs.core.Keyword(null,"position","position",-2011731912),rewrite_clj.node.protocols._PLUS_extent(position,rewrite_clj.node.protocols.extent(item))], 0));
}
} else {
return clojure.zip.insert_left(G__49173,G__49174);
}
});
/**
 * Returns zipper with node `item` inserted as the right sibling of the current node in `zloc`,
 *   without moving location.
 */
rewrite_clj.custom_zipper.core.insert_right = (function rewrite_clj$custom_zipper$core$insert_right(G__49176,G__49177){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__49176))){
var zloc = G__49176;
var item = G__49177;
var map__49178 = zloc;
var map__49178__$1 = cljs.core.__destructure_map(map__49178);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49178__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49178__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.not(parent)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot insert right at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.cons(item,right)], 0));
}
} else {
return clojure.zip.insert_right(G__49176,G__49177);
}
});
/**
 * Returns zipper with node `item` replacing current node in `zloc`, without moving location.
 */
rewrite_clj.custom_zipper.core.replace = (function rewrite_clj$custom_zipper$core$replace(G__49186,G__49187){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__49186))){
var zloc = G__49186;
var item = G__49187;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),item], 0));
} else {
return clojure.zip.replace(G__49186,G__49187);
}
});
/**
 * Returns zipper with value of `(apply f current-node args)` replacing current node in `zloc`.
 * 
 * The result of `f` should be a rewrite-clj node.
 */
rewrite_clj.custom_zipper.core.edit = (function rewrite_clj$custom_zipper$core$edit(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49245 = arguments.length;
var i__5767__auto___49246 = (0);
while(true){
if((i__5767__auto___49246 < len__5766__auto___49245)){
args__5772__auto__.push((arguments[i__5767__auto___49246]));

var G__49247 = (i__5767__auto___49246 + (1));
i__5767__auto___49246 = G__49247;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return rewrite_clj.custom_zipper.core.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(rewrite_clj.custom_zipper.core.edit.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,f,args){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(zloc))){
return rewrite_clj.custom_zipper.core.replace(zloc,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,rewrite_clj.custom_zipper.core.node(zloc),args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clojure.zip.edit,zloc,f,args);
}
}));

(rewrite_clj.custom_zipper.core.edit.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rewrite_clj.custom_zipper.core.edit.cljs$lang$applyTo = (function (seq49189){
var G__49190 = cljs.core.first(seq49189);
var seq49189__$1 = cljs.core.next(seq49189);
var G__49191 = cljs.core.first(seq49189__$1);
var seq49189__$2 = cljs.core.next(seq49189__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49190,G__49191,seq49189__$2);
}));

/**
 * Returns zipper with node `item` inserted as the leftmost child of the current node in `zloc`,
 *   without moving location.
 */
rewrite_clj.custom_zipper.core.insert_child = (function rewrite_clj$custom_zipper$core$insert_child(G__49193,G__49194){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__49193))){
var zloc = G__49193;
var item = G__49194;
return rewrite_clj.custom_zipper.core.replace(zloc,rewrite_clj.custom_zipper.core.make_node(zloc,rewrite_clj.custom_zipper.core.node(zloc),cljs.core.cons(item,rewrite_clj.custom_zipper.core.children(zloc))));
} else {
return clojure.zip.insert_child(G__49193,G__49194);
}
});
/**
 * Returns zipper with node `item` inserted as the rightmost child of the current node in `zloc`,
 *   without moving.
 */
rewrite_clj.custom_zipper.core.append_child = (function rewrite_clj$custom_zipper$core$append_child(G__49201,G__49202){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__49201))){
var zloc = G__49201;
var item = G__49202;
return rewrite_clj.custom_zipper.core.replace(zloc,rewrite_clj.custom_zipper.core.make_node(zloc,rewrite_clj.custom_zipper.core.node(zloc),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rewrite_clj.custom_zipper.core.children(zloc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
} else {
return clojure.zip.append_child(G__49201,G__49202);
}
});
/**
 * Returns zipper with location at the next depth-first location in the hierarchy in `zloc`.
 *   When reaching the end, returns a distinguished zipper detectable via [[end?]]. If already
 *   at the end, stays there.
 */
rewrite_clj.custom_zipper.core.next = (function rewrite_clj$custom_zipper$core$next(G__49203){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__49203))){
var zloc = G__49203;
if(cljs.core.truth_(new cljs.core.Keyword(null,"end?","end?",-1423391609).cljs$core$IFn$_invoke$arity$1(zloc))){
return zloc;
} else {
var or__5043__auto__ = (function (){var and__5041__auto__ = rewrite_clj.custom_zipper.core.branch_QMARK_(zloc);
if(cljs.core.truth_(and__5041__auto__)){
return rewrite_clj.custom_zipper.core.down(zloc);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = rewrite_clj.custom_zipper.core.right(zloc);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var p = zloc;
while(true){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.up(p))){
var or__5043__auto____$2 = rewrite_clj.custom_zipper.core.right(rewrite_clj.custom_zipper.core.up(p));
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var G__49252 = rewrite_clj.custom_zipper.core.up(p);
p = G__49252;
continue;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,new cljs.core.Keyword(null,"end?","end?",-1423391609),true);
}
break;
}
}
}
}
} else {
return clojure.zip.next(G__49203);
}
});
/**
 * Returns zipper with location at the previous depth-first location in the hierarchy in `zloc`.
 *   If already at the root, returns nil.
 */
rewrite_clj.custom_zipper.core.prev = (function rewrite_clj$custom_zipper$core$prev(G__49204){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__49204))){
var zloc = G__49204;
var temp__5802__auto__ = rewrite_clj.custom_zipper.core.left(zloc);
if(cljs.core.truth_(temp__5802__auto__)){
var lloc = temp__5802__auto__;
var zloc__$1 = lloc;
while(true){
var temp__5802__auto____$1 = (function (){var and__5041__auto__ = rewrite_clj.custom_zipper.core.branch_QMARK_(zloc__$1);
if(cljs.core.truth_(and__5041__auto__)){
return rewrite_clj.custom_zipper.core.down(zloc__$1);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto____$1)){
var child = temp__5802__auto____$1;
var G__49253 = rewrite_clj.custom_zipper.core.rightmost(child);
zloc__$1 = G__49253;
continue;
} else {
return zloc__$1;
}
break;
}
} else {
return rewrite_clj.custom_zipper.core.up(zloc);
}
} else {
return clojure.zip.prev(G__49204);
}
});
/**
 * Returns true if at end of depth-first walk in `zloc`.
 */
rewrite_clj.custom_zipper.core.end_QMARK_ = (function rewrite_clj$custom_zipper$core$end_QMARK_(G__49205){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__49205))){
var zloc = G__49205;
return new cljs.core.Keyword(null,"end?","end?",-1423391609).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
return clojure.zip.end_QMARK_(G__49205);
}
});
/**
 * Returns zipper with current node in `zloc` removed, with location at node that would have preceded
 *   it in a depth-first walk.
 */
rewrite_clj.custom_zipper.core.remove = (function rewrite_clj$custom_zipper$core$remove(G__49210){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__49210))){
var zloc = G__49210;
var map__49212 = zloc;
var map__49212__$1 = cljs.core.__destructure_map(map__49212);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49212__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49212__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49212__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.not(parent)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot remove at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core.seq(left)){
var zloc__$1 = (function (){var vec__49216 = cljs.core.peek(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49216,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49216,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"node","node",581201198),lnode,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop(left)], 0));
})();
while(true){
var temp__5802__auto__ = (function (){var and__5041__auto__ = rewrite_clj.custom_zipper.core.branch_QMARK_(zloc__$1);
if(cljs.core.truth_(and__5041__auto__)){
return rewrite_clj.custom_zipper.core.down(zloc__$1);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
var G__49257 = rewrite_clj.custom_zipper.core.rightmost(child);
zloc__$1 = G__49257;
continue;
} else {
return zloc__$1;
}
break;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),rewrite_clj.custom_zipper.core.make_node(zloc,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(parent),right)], 0));
}
}
} else {
return clojure.zip.remove(G__49210);
}
});

//# sourceMappingURL=rewrite_clj.custom_zipper.core.js.map
