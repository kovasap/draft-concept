goog.provide('rewrite_clj.zip.move');
/**
 * Return zipper with location moved right to next non-whitespace/non-comment sibling of current node in `zloc`.
 */
rewrite_clj.zip.move.right = (function rewrite_clj$zip$move$right(zloc){
var G__49941 = zloc;
var G__49941__$1 = (((G__49941 == null))?null:rewrite_clj.custom_zipper.core.right(G__49941));
if((G__49941__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__49941__$1);
}
});
/**
 * Return zipper with location moved left to next non-whitespace/non-comment sibling of current node in `zloc`.
 */
rewrite_clj.zip.move.left = (function rewrite_clj$zip$move$left(zloc){
var G__49943 = zloc;
var G__49943__$1 = (((G__49943 == null))?null:rewrite_clj.custom_zipper.core.left(G__49943));
if((G__49943__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left(G__49943__$1);
}
});
/**
 * Return zipper with location moved down to the first non-whitespace/non-comment child node of the current node in `zloc`, or nil if no applicable children.
 */
rewrite_clj.zip.move.down = (function rewrite_clj$zip$move$down(zloc){
var G__49946 = zloc;
var G__49946__$1 = (((G__49946 == null))?null:rewrite_clj.custom_zipper.core.down(G__49946));
if((G__49946__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__49946__$1);
}
});
/**
 * Return zipper with location moved up to next non-whitespace/non-comment parent of current node in `zloc`, or `nil` if at the top.
 */
rewrite_clj.zip.move.up = (function rewrite_clj$zip$move$up(zloc){
var G__49949 = zloc;
var G__49949__$1 = (((G__49949 == null))?null:rewrite_clj.custom_zipper.core.up(G__49949));
if((G__49949__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left(G__49949__$1);
}
});
/**
 * Return zipper with location moved to the next depth-first non-whitespace/non-comment node in `zloc`.
 * End can be detected with [[end?]], if already at end, stays there.
 */
rewrite_clj.zip.move.next = (function rewrite_clj$zip$move$next(zloc){
if(cljs.core.truth_(zloc)){
var or__5043__auto__ = (function (){var G__49952 = zloc;
var G__49952__$1 = (((G__49952 == null))?null:rewrite_clj.custom_zipper.core.next(G__49952));
if((G__49952__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(rewrite_clj.custom_zipper.core.next,G__49952__$1);
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(zloc,cljs.core.assoc,new cljs.core.Keyword("rewrite-clj.zip.move","end?","rewrite-clj.zip.move/end?",891526475),true);
}
} else {
return null;
}
});
/**
 * Return true if `zloc` is at end of depth-first traversal.
 */
rewrite_clj.zip.move.end_QMARK_ = (function rewrite_clj$zip$move$end_QMARK_(zloc){
var or__5043__auto__ = cljs.core.not(zloc);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = rewrite_clj.custom_zipper.core.end_QMARK_(zloc);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return new cljs.core.Keyword("rewrite-clj.zip.move","end?","rewrite-clj.zip.move/end?",891526475).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(zloc));
}
}
});
/**
 * Return true if at rightmost non-whitespace/non-comment sibling node in `zloc`.
 */
rewrite_clj.zip.move.rightmost_QMARK_ = (function rewrite_clj$zip$move$rightmost_QMARK_(zloc){
return (rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(rewrite_clj.custom_zipper.core.right(zloc)) == null);
});
/**
 * Return true if at leftmost non-whitespace/non-comment sibling node in `zloc`.
 */
rewrite_clj.zip.move.leftmost_QMARK_ = (function rewrite_clj$zip$move$leftmost_QMARK_(zloc){
return (rewrite_clj.zip.whitespace.skip_whitespace_left(rewrite_clj.custom_zipper.core.left(zloc)) == null);
});
/**
 * Return zipper with location moved to the previous depth-first non-whitespace/non-comment node in `zloc`. If already at root, returns nil.
 */
rewrite_clj.zip.move.prev = (function rewrite_clj$zip$move$prev(zloc){
var G__49955 = zloc;
var G__49955__$1 = (((G__49955 == null))?null:rewrite_clj.custom_zipper.core.prev(G__49955));
if((G__49955__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(rewrite_clj.custom_zipper.core.prev,G__49955__$1);
}
});
/**
 * Return zipper with location moved to the leftmost non-whitespace/non-comment sibling of current node in `zloc`.
 */
rewrite_clj.zip.move.leftmost = (function rewrite_clj$zip$move$leftmost(zloc){
var G__49959 = zloc;
var G__49959__$1 = (((G__49959 == null))?null:rewrite_clj.custom_zipper.core.leftmost(G__49959));
if((G__49959__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__49959__$1);
}
});
/**
 * Return zipper with location moved to the rightmost non-whitespace/non-comment sibling of current node in `zloc`.
 */
rewrite_clj.zip.move.rightmost = (function rewrite_clj$zip$move$rightmost(zloc){
var G__49960 = zloc;
var G__49960__$1 = (((G__49960 == null))?null:rewrite_clj.custom_zipper.core.rightmost(G__49960));
if((G__49960__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left(G__49960__$1);
}
});

//# sourceMappingURL=rewrite_clj.zip.move.js.map
