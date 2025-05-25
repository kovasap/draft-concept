goog.provide('sci.impl.analyzer');
goog.scope(function(){
  sci.impl.analyzer.goog$module$goog$object = goog.module.get('goog.object');
});
sci.impl.analyzer.recur_target = (function sci$impl$analyzer$recur_target(ctx){
return new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536).cljs$core$IFn$_invoke$arity$1(ctx);
});
sci.impl.analyzer.with_recur_target = (function sci$impl$analyzer$with_recur_target(ctx,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536),v);
});
sci.impl.analyzer.without_recur_target = (function sci$impl$analyzer$without_recur_target(ctx){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536),false);
});
sci.impl.analyzer.recur_target_QMARK_ = (function sci$impl$analyzer$recur_target_QMARK_(ctx){
return new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536).cljs$core$IFn$_invoke$arity$1(ctx);
});
sci.impl.analyzer.special_syms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"finally","finally",-1065347064,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"new","new",-444906321,null),"null",new cljs.core.Symbol(null,"let*","let*",1920721458,null),"null",new cljs.core.Symbol(null,"recur","recur",1202958259,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"var","var",870848730,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"catch","catch",-1616370245,null),"null",new cljs.core.Symbol(null,"throw","throw",595905694,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
sci.impl.analyzer.throw_error_with_location = (function sci$impl$analyzer$throw_error_with_location(msg,node){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),"analysis"], null));
});




sci.impl.analyzer.macroexpand_1 = (function sci$impl$analyzer$macroexpand_1(ctx,expr){
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true);
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,expr) : sci.impl.analyzer.analyze.call(null,ctx__$1,expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("clojure.core","defrecord","clojure.core/defrecord",581689476,null),op)){
return expr;
} else {
var f = (function (){try{return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx__$1,op,true);
}catch (e53757){var _ = e53757;
return new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858);
}})();
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858),f)){
return expr;
} else {
var macro_var_QMARK_ = (function (){var and__5041__auto__ = sci.impl.vars.var_QMARK_(f);
if(and__5041__auto__){
return sci.impl.vars.isMacro(f);
} else {
return and__5041__auto__;
}
})();
var needs_ctx_QMARK_ = cljs.core.keyword_identical_QMARK_(sci.impl.utils.needs_ctx,(function (){var G__53760 = f;
var G__53760__$1 = (((G__53760 == null))?null:cljs.core.meta(G__53760));
if((G__53760__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__53760__$1);
}
})());
var f__$1 = (cljs.core.truth_(macro_var_QMARK_)?cljs.core.deref(f):f);
if(cljs.core.truth_((function (){var or__5043__auto__ = macro_var_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return sci.impl.utils.macro_QMARK_(f__$1);
}
})())){
if(needs_ctx_QMARK_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$1),ctx__$1,cljs.core.rest(expr));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$1),cljs.core.rest(expr));
}
} else {
return expr;
}
}

}
}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.analyzer.macroexpand = (function sci$impl$analyzer$macroexpand(ctx,form){
var ex = sci.impl.analyzer.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.macroexpand.call(null,ctx,ex));
}
});
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_STAR_,sci.impl.analyzer.macroexpand);
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_1_STAR_,sci.impl.analyzer.macroexpand_1);
sci.impl.analyzer.analyze_children_tail = (function sci$impl$analyzer$analyze_children_tail(ctx,children){
var rt = sci.impl.analyzer.recur_target(ctx);
var non_tail_ctx = sci.impl.analyzer.without_recur_target(ctx);
var analyzed_children_non_tail = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__53767_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(non_tail_ctx,p1__53767_SHARP_) : sci.impl.analyzer.analyze.call(null,non_tail_ctx,p1__53767_SHARP_));
}),cljs.core.butlast(children));
var ret_child = (function (){var G__53792 = sci.impl.analyzer.with_recur_target(ctx,rt);
var G__53793 = cljs.core.last(children);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__53792,G__53793) : sci.impl.analyzer.analyze.call(null,G__53792,G__53793));
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(analyzed_children_non_tail,ret_child);
});
sci.impl.analyzer.return_do = (function sci$impl$analyzer$return_do(ctx,expr,children){
var analyzed_children = (new cljs.core.Delay((function (){
return sci.impl.analyzer.analyze_children_tail(ctx,children);
}),null));
var G__53802 = cljs.core.count(children);
switch (G__53802) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
sci.impl.types.eval(arg0,ctx__$1,bindings);

return sci.impl.types.eval(arg1,ctx__$1,bindings);
}),null);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
sci.impl.types.eval(arg0,ctx__$1,bindings);

sci.impl.types.eval(arg1,ctx__$1,bindings);

return sci.impl.types.eval(arg2,ctx__$1,bindings);
}),null);

break;
default:
var analyzed_children__$1 = cljs.core.deref(analyzed_children);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_do(ctx__$1,bindings,analyzed_children__$1);
}),null);

}
});
sci.impl.analyzer.return_or = (function sci$impl$analyzer$return_or(ctx,expr,children){
var analyzed_children = (new cljs.core.Delay((function (){
return sci.impl.analyzer.analyze_children_tail(ctx,children);
}),null));
var G__53810 = cljs.core.count(children);
switch (G__53810) {
case (0):
return null;

break;
case (1):
var G__53811 = ctx;
var G__53812 = cljs.core.first(children);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__53811,G__53812) : sci.impl.analyzer.analyze.call(null,G__53811,G__53812));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return sci.impl.types.eval(arg1,ctx__$1,bindings);
}
}),null);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return sci.impl.types.eval(arg2,ctx__$1,bindings);
}
}
}),null);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
return sci.impl.types.eval(arg3,ctx__$1,bindings);
}
}
}
}),null);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
return sci.impl.types.eval(arg4,ctx__$1,bindings);
}
}
}
}
}),null);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
return sci.impl.types.eval(arg5,ctx__$1,bindings);
}
}
}
}
}
}),null);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
return sci.impl.types.eval(arg6,ctx__$1,bindings);
}
}
}
}
}
}
}),null);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
return sci.impl.types.eval(arg7,ctx__$1,bindings);
}
}
}
}
}
}
}
}),null);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
} else {
return sci.impl.types.eval(arg8,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}),null);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
} else {
var or__5043__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$8)){
return or__5043__auto____$8;
} else {
return sci.impl.types.eval(arg9,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}),null);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
} else {
var or__5043__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$8)){
return or__5043__auto____$8;
} else {
var or__5043__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$9)){
return or__5043__auto____$9;
} else {
return sci.impl.types.eval(arg10,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
} else {
var or__5043__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$8)){
return or__5043__auto____$8;
} else {
var or__5043__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$9)){
return or__5043__auto____$9;
} else {
var or__5043__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$10)){
return or__5043__auto____$10;
} else {
return sci.impl.types.eval(arg11,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
} else {
var or__5043__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$8)){
return or__5043__auto____$8;
} else {
var or__5043__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$9)){
return or__5043__auto____$9;
} else {
var or__5043__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$10)){
return or__5043__auto____$10;
} else {
var or__5043__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$11)){
return or__5043__auto____$11;
} else {
return sci.impl.types.eval(arg12,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
} else {
var or__5043__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$8)){
return or__5043__auto____$8;
} else {
var or__5043__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$9)){
return or__5043__auto____$9;
} else {
var or__5043__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$10)){
return or__5043__auto____$10;
} else {
var or__5043__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$11)){
return or__5043__auto____$11;
} else {
var or__5043__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$12)){
return or__5043__auto____$12;
} else {
return sci.impl.types.eval(arg13,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
} else {
var or__5043__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$8)){
return or__5043__auto____$8;
} else {
var or__5043__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$9)){
return or__5043__auto____$9;
} else {
var or__5043__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$10)){
return or__5043__auto____$10;
} else {
var or__5043__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$11)){
return or__5043__auto____$11;
} else {
var or__5043__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$12)){
return or__5043__auto____$12;
} else {
var or__5043__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$13)){
return or__5043__auto____$13;
} else {
return sci.impl.types.eval(arg14,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
} else {
var or__5043__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$8)){
return or__5043__auto____$8;
} else {
var or__5043__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$9)){
return or__5043__auto____$9;
} else {
var or__5043__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$10)){
return or__5043__auto____$10;
} else {
var or__5043__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$11)){
return or__5043__auto____$11;
} else {
var or__5043__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$12)){
return or__5043__auto____$12;
} else {
var or__5043__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$13)){
return or__5043__auto____$13;
} else {
var or__5043__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$14)){
return or__5043__auto____$14;
} else {
return sci.impl.types.eval(arg15,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
} else {
var or__5043__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$8)){
return or__5043__auto____$8;
} else {
var or__5043__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$9)){
return or__5043__auto____$9;
} else {
var or__5043__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$10)){
return or__5043__auto____$10;
} else {
var or__5043__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$11)){
return or__5043__auto____$11;
} else {
var or__5043__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$12)){
return or__5043__auto____$12;
} else {
var or__5043__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$13)){
return or__5043__auto____$13;
} else {
var or__5043__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$14)){
return or__5043__auto____$14;
} else {
var or__5043__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$15)){
return or__5043__auto____$15;
} else {
return sci.impl.types.eval(arg16,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(17));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
} else {
var or__5043__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$8)){
return or__5043__auto____$8;
} else {
var or__5043__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$9)){
return or__5043__auto____$9;
} else {
var or__5043__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$10)){
return or__5043__auto____$10;
} else {
var or__5043__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$11)){
return or__5043__auto____$11;
} else {
var or__5043__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$12)){
return or__5043__auto____$12;
} else {
var or__5043__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$13)){
return or__5043__auto____$13;
} else {
var or__5043__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$14)){
return or__5043__auto____$14;
} else {
var or__5043__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$15)){
return or__5043__auto____$15;
} else {
var or__5043__auto____$16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$16)){
return or__5043__auto____$16;
} else {
return sci.impl.types.eval(arg17,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(18));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5043__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
} else {
var or__5043__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$8)){
return or__5043__auto____$8;
} else {
var or__5043__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$9)){
return or__5043__auto____$9;
} else {
var or__5043__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$10)){
return or__5043__auto____$10;
} else {
var or__5043__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$11)){
return or__5043__auto____$11;
} else {
var or__5043__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$12)){
return or__5043__auto____$12;
} else {
var or__5043__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$13)){
return or__5043__auto____$13;
} else {
var or__5043__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$14)){
return or__5043__auto____$14;
} else {
var or__5043__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$15)){
return or__5043__auto____$15;
} else {
var or__5043__auto____$16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$16)){
return or__5043__auto____$16;
} else {
var or__5043__auto____$17 = sci.impl.types.eval(arg17,ctx__$1,bindings);
if(cljs.core.truth_(or__5043__auto____$17)){
return or__5043__auto____$17;
} else {
return sci.impl.types.eval(arg18,ctx__$1,bindings);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),null);

break;
default:
var analyzed_children__$1 = cljs.core.deref(analyzed_children);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_or(analyzed_children__$1,ctx__$1,bindings);
}),null);

}
});
sci.impl.analyzer.return_and = (function sci$impl$analyzer$return_and(ctx,expr,children){
var analyzed_children = (new cljs.core.Delay((function (){
return sci.impl.analyzer.analyze_children_tail(ctx,children);
}),null));
var G__53954 = cljs.core.count(children);
switch (G__53954) {
case (0):
return null;

break;
case (1):
var G__53955 = ctx;
var G__53956 = cljs.core.first(children);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__53955,G__53956) : sci.impl.analyzer.analyze.call(null,G__53955,G__53956));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
return sci.impl.types.eval(arg1,ctx__$1,bindings);
} else {
return and__5041__auto__;
}
}),null);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
return sci.impl.types.eval(arg2,ctx__$1,bindings);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}),null);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
return sci.impl.types.eval(arg3,ctx__$1,bindings);
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}),null);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
return sci.impl.types.eval(arg4,ctx__$1,bindings);
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}),null);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
return sci.impl.types.eval(arg5,ctx__$1,bindings);
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}),null);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
return sci.impl.types.eval(arg6,ctx__$1,bindings);
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}),null);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
return sci.impl.types.eval(arg7,ctx__$1,bindings);
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}),null);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
var and__5041__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$7)){
return sci.impl.types.eval(arg8,ctx__$1,bindings);
} else {
return and__5041__auto____$7;
}
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}),null);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
var and__5041__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$7)){
var and__5041__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$8)){
return sci.impl.types.eval(arg9,ctx__$1,bindings);
} else {
return and__5041__auto____$8;
}
} else {
return and__5041__auto____$7;
}
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}),null);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
var and__5041__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$7)){
var and__5041__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$8)){
var and__5041__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$9)){
return sci.impl.types.eval(arg10,ctx__$1,bindings);
} else {
return and__5041__auto____$9;
}
} else {
return and__5041__auto____$8;
}
} else {
return and__5041__auto____$7;
}
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}),null);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
var and__5041__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$7)){
var and__5041__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$8)){
var and__5041__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$9)){
var and__5041__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$10)){
return sci.impl.types.eval(arg11,ctx__$1,bindings);
} else {
return and__5041__auto____$10;
}
} else {
return and__5041__auto____$9;
}
} else {
return and__5041__auto____$8;
}
} else {
return and__5041__auto____$7;
}
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}),null);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
var and__5041__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$7)){
var and__5041__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$8)){
var and__5041__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$9)){
var and__5041__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$10)){
var and__5041__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$11)){
return sci.impl.types.eval(arg12,ctx__$1,bindings);
} else {
return and__5041__auto____$11;
}
} else {
return and__5041__auto____$10;
}
} else {
return and__5041__auto____$9;
}
} else {
return and__5041__auto____$8;
}
} else {
return and__5041__auto____$7;
}
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}),null);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
var and__5041__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$7)){
var and__5041__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$8)){
var and__5041__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$9)){
var and__5041__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$10)){
var and__5041__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$11)){
var and__5041__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$12)){
return sci.impl.types.eval(arg13,ctx__$1,bindings);
} else {
return and__5041__auto____$12;
}
} else {
return and__5041__auto____$11;
}
} else {
return and__5041__auto____$10;
}
} else {
return and__5041__auto____$9;
}
} else {
return and__5041__auto____$8;
}
} else {
return and__5041__auto____$7;
}
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}),null);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
var and__5041__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$7)){
var and__5041__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$8)){
var and__5041__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$9)){
var and__5041__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$10)){
var and__5041__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$11)){
var and__5041__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$12)){
var and__5041__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$13)){
return sci.impl.types.eval(arg14,ctx__$1,bindings);
} else {
return and__5041__auto____$13;
}
} else {
return and__5041__auto____$12;
}
} else {
return and__5041__auto____$11;
}
} else {
return and__5041__auto____$10;
}
} else {
return and__5041__auto____$9;
}
} else {
return and__5041__auto____$8;
}
} else {
return and__5041__auto____$7;
}
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}),null);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
var and__5041__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$7)){
var and__5041__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$8)){
var and__5041__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$9)){
var and__5041__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$10)){
var and__5041__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$11)){
var and__5041__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$12)){
var and__5041__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$13)){
var and__5041__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$14)){
return sci.impl.types.eval(arg15,ctx__$1,bindings);
} else {
return and__5041__auto____$14;
}
} else {
return and__5041__auto____$13;
}
} else {
return and__5041__auto____$12;
}
} else {
return and__5041__auto____$11;
}
} else {
return and__5041__auto____$10;
}
} else {
return and__5041__auto____$9;
}
} else {
return and__5041__auto____$8;
}
} else {
return and__5041__auto____$7;
}
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}),null);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
var and__5041__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$7)){
var and__5041__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$8)){
var and__5041__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$9)){
var and__5041__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$10)){
var and__5041__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$11)){
var and__5041__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$12)){
var and__5041__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$13)){
var and__5041__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$14)){
var and__5041__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$15)){
return sci.impl.types.eval(arg16,ctx__$1,bindings);
} else {
return and__5041__auto____$15;
}
} else {
return and__5041__auto____$14;
}
} else {
return and__5041__auto____$13;
}
} else {
return and__5041__auto____$12;
}
} else {
return and__5041__auto____$11;
}
} else {
return and__5041__auto____$10;
}
} else {
return and__5041__auto____$9;
}
} else {
return and__5041__auto____$8;
}
} else {
return and__5041__auto____$7;
}
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}),null);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(17));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
var and__5041__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$7)){
var and__5041__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$8)){
var and__5041__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$9)){
var and__5041__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$10)){
var and__5041__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$11)){
var and__5041__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$12)){
var and__5041__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$13)){
var and__5041__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$14)){
var and__5041__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$15)){
var and__5041__auto____$16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$16)){
return sci.impl.types.eval(arg17,ctx__$1,bindings);
} else {
return and__5041__auto____$16;
}
} else {
return and__5041__auto____$15;
}
} else {
return and__5041__auto____$14;
}
} else {
return and__5041__auto____$13;
}
} else {
return and__5041__auto____$12;
}
} else {
return and__5041__auto____$11;
}
} else {
return and__5041__auto____$10;
}
} else {
return and__5041__auto____$9;
}
} else {
return and__5041__auto____$8;
}
} else {
return and__5041__auto____$7;
}
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}),null);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(analyzed_children),(18));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5041__auto__ = sci.impl.types.eval(arg0,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$3)){
var and__5041__auto____$4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$4)){
var and__5041__auto____$5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$5)){
var and__5041__auto____$6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$6)){
var and__5041__auto____$7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$7)){
var and__5041__auto____$8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$8)){
var and__5041__auto____$9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$9)){
var and__5041__auto____$10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$10)){
var and__5041__auto____$11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$11)){
var and__5041__auto____$12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$12)){
var and__5041__auto____$13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$13)){
var and__5041__auto____$14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$14)){
var and__5041__auto____$15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$15)){
var and__5041__auto____$16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$16)){
var and__5041__auto____$17 = sci.impl.types.eval(arg17,ctx__$1,bindings);
if(cljs.core.truth_(and__5041__auto____$17)){
return sci.impl.types.eval(arg18,ctx__$1,bindings);
} else {
return and__5041__auto____$17;
}
} else {
return and__5041__auto____$16;
}
} else {
return and__5041__auto____$15;
}
} else {
return and__5041__auto____$14;
}
} else {
return and__5041__auto____$13;
}
} else {
return and__5041__auto____$12;
}
} else {
return and__5041__auto____$11;
}
} else {
return and__5041__auto____$10;
}
} else {
return and__5041__auto____$9;
}
} else {
return and__5041__auto____$8;
}
} else {
return and__5041__auto____$7;
}
} else {
return and__5041__auto____$6;
}
} else {
return and__5041__auto____$5;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}),null);

break;
default:
var analyzed_children__$1 = cljs.core.deref(analyzed_children);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_and(ctx__$1,bindings,analyzed_children__$1);
}),null);

}
});
sci.impl.analyzer.return_recur = (function sci$impl$analyzer$return_recur(ctx,expr,analyzed_children){
if(cljs.core.truth_(sci.impl.analyzer.recur_target_QMARK_(ctx))){
} else {
sci.impl.analyzer.throw_error_with_location("Can only recur from tail position",expr);
}

var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctx);
var G__54183 = cljs.core.count(analyzed_children);
switch (G__54183) {
case (0):
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
(bindings[(0)] = eval_0);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var param15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(15));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
var eval_15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

(bindings[(15)] = eval_15);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var param15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var param16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(16));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
var eval_15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
var eval_16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

(bindings[(15)] = eval_15);

(bindings[(16)] = eval_16);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var param15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var param16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var param17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(17));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
var eval_15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
var eval_16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
var eval_17 = sci.impl.types.eval(arg17,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

(bindings[(15)] = eval_15);

(bindings[(16)] = eval_16);

(bindings[(17)] = eval_17);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var param15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var param16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var param17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
var param18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(18));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
var eval_15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
var eval_16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
var eval_17 = sci.impl.types.eval(arg17,ctx__$1,bindings);
var eval_18 = sci.impl.types.eval(arg18,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

(bindings[(15)] = eval_15);

(bindings[(16)] = eval_16);

(bindings[(17)] = eval_17);

(bindings[(18)] = eval_18);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54183)].join('')));

}
});
sci.impl.analyzer.analyze_children = (function sci$impl$analyzer$analyze_children(ctx,children){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__54230_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,p1__54230_SHARP_) : sci.impl.analyzer.analyze.call(null,ctx,p1__54230_SHARP_));
}),children);
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
sci.impl.analyzer.FnBody = (function (params,body,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx,__meta,__extmap,__hash){
this.params = params;
this.body = body;
this.fixed_arity = fixed_arity;
this.var_arg_name = var_arg_name;
this.self_ref_idx = self_ref_idx;
this.iden__GT_invoke_idx = iden__GT_invoke_idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k54233,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__54238 = k54233;
var G__54238__$1 = (((G__54238 instanceof cljs.core.Keyword))?G__54238.fqn:null);
switch (G__54238__$1) {
case "params":
return self__.params;

break;
case "body":
return self__.body;

break;
case "fixed-arity":
return self__.fixed_arity;

break;
case "var-arg-name":
return self__.var_arg_name;

break;
case "self-ref-idx":
return self__.self_ref_idx;

break;
case "iden->invoke-idx":
return self__.iden__GT_invoke_idx;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54233,else__5343__auto__);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__54239){
var vec__54240 = p__54239;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54240,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54240,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#sci.impl.analyzer.FnBody{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),self__.fixed_arity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),self__.var_arg_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),self__.self_ref_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),self__.iden__GT_invoke_idx],null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54232){
var self__ = this;
var G__54232__$1 = this;
return (new cljs.core.RecordIter((0),G__54232__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1733662014 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54234,other54235){
var self__ = this;
var this54234__$1 = this;
return (((!((other54235 == null)))) && ((((this54234__$1.constructor === other54235.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54234__$1.params,other54235.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54234__$1.body,other54235.body)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54234__$1.fixed_arity,other54235.fixed_arity)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54234__$1.var_arg_name,other54235.var_arg_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54234__$1.self_ref_idx,other54235.self_ref_idx)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54234__$1.iden__GT_invoke_idx,other54235.iden__GT_invoke_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54234__$1.__extmap,other54235.__extmap)))))))))))))))));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),null,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k54233){
var self__ = this;
var this__5347__auto____$1 = this;
var G__54243 = k54233;
var G__54243__$1 = (((G__54243 instanceof cljs.core.Keyword))?G__54243.fqn:null);
switch (G__54243__$1) {
case "params":
case "body":
case "fixed-arity":
case "var-arg-name":
case "self-ref-idx":
case "iden->invoke-idx":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k54233);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__54232){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__54244 = cljs.core.keyword_identical_QMARK_;
var expr__54245 = k__5349__auto__;
if(cljs.core.truth_((pred__54244.cljs$core$IFn$_invoke$arity$2 ? pred__54244.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__54245) : pred__54244.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__54245)))){
return (new sci.impl.analyzer.FnBody(G__54232,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54244.cljs$core$IFn$_invoke$arity$2 ? pred__54244.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669),expr__54245) : pred__54244.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__54245)))){
return (new sci.impl.analyzer.FnBody(self__.params,G__54232,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54244.cljs$core$IFn$_invoke$arity$2 ? pred__54244.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__54245) : pred__54244.call(null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__54245)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,G__54232,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54244.cljs$core$IFn$_invoke$arity$2 ? pred__54244.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__54245) : pred__54244.call(null,new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__54245)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,G__54232,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54244.cljs$core$IFn$_invoke$arity$2 ? pred__54244.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),expr__54245) : pred__54244.call(null,new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),expr__54245)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,G__54232,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54244.cljs$core$IFn$_invoke$arity$2 ? pred__54244.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),expr__54245) : pred__54244.call(null,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),expr__54245)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,G__54232,self__.__meta,self__.__extmap,null));
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__54232),null));
}
}
}
}
}
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"body","body",-2049205669),self__.body,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),self__.fixed_arity,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),self__.var_arg_name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),self__.self_ref_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),self__.iden__GT_invoke_idx,null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__54232){
var self__ = this;
var this__5339__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,G__54232,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(sci.impl.analyzer.FnBody.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"fixed-arity","fixed-arity",-1067989900,null),new cljs.core.Symbol(null,"var-arg-name","var-arg-name",540506640,null),new cljs.core.Symbol(null,"self-ref-idx","self-ref-idx",255993715,null),new cljs.core.Symbol(null,"iden->invoke-idx","iden->invoke-idx",-157095499,null)], null);
}));

(sci.impl.analyzer.FnBody.cljs$lang$type = true);

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"sci.impl.analyzer/FnBody",null,(1),null));
}));

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"sci.impl.analyzer/FnBody");
}));

/**
 * Positional factory function for sci.impl.analyzer/FnBody.
 */
sci.impl.analyzer.__GT_FnBody = (function sci$impl$analyzer$__GT_FnBody(params,body,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx){
return (new sci.impl.analyzer.FnBody(params,body,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx,null,null,null));
});

/**
 * Factory function for sci.impl.analyzer/FnBody, taking a map of keywords to field values.
 */
sci.impl.analyzer.map__GT_FnBody = (function sci$impl$analyzer$map__GT_FnBody(G__54237){
var extmap__5382__auto__ = (function (){var G__54257 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54237,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026)], 0));
if(cljs.core.record_QMARK_(G__54237)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54257);
} else {
return G__54257;
}
})();
return (new sci.impl.analyzer.FnBody(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__54237),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__54237),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(G__54237),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(G__54237),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(G__54237),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(G__54237),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__54259,p__54260,macro_QMARK_,fn_name,fn_id){
var map__54261 = p__54259;
var map__54261__$1 = cljs.core.__destructure_map(map__54261);
var ctx = map__54261__$1;
var fn_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54261__$1,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985));
var vec__54262 = p__54260;
var seq__54263 = cljs.core.seq(vec__54262);
var first__54264 = cljs.core.first(seq__54263);
var seq__54263__$1 = cljs.core.next(seq__54263);
var binding_vector = first__54264;
var body_exprs = seq__54263__$1;
if(cljs.core.truth_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",fn_expr);
}

if(cljs.core.vector_QMARK_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration should be a vector",fn_expr);
}

var binding_vector__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",1482799337,null),new cljs.core.Symbol(null,"&env","&env",-919163083,null)], null),binding_vector):binding_vector);
var next_body = cljs.core.next(body_exprs);
var conds = ((next_body)?(function (){var e = cljs.core.first(body_exprs);
if(cljs.core.map_QMARK_(e)){
return e;
} else {
return null;
}
})():null);
var body_exprs__$1 = (cljs.core.truth_(conds)?next_body:body_exprs);
var conds__$1 = (function (){var or__5043__auto__ = conds;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.meta(binding_vector__$1);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body_exprs__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body_exprs__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body_exprs__$1))):cljs.core.first(body_exprs__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body_exprs__$1);
var body_exprs__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body_exprs__$2):body_exprs__$2);
var map__54266 = sci.impl.utils.maybe_destructured(binding_vector__$1,body_exprs__$3);
var map__54266__$1 = cljs.core.__destructure_map(map__54266);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54266__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54266__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var vec__54267 = cljs.core.split_with((function (p1__54258_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__54258_SHARP_);
}),params);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54267,(0),null);
var vec__54270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54267,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54270,(0),null);
var var_arg_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54270,(1),null);
var fixed_args__$1 = cljs.core.vec(fixed_args);
var fixed_arity = cljs.core.count(fixed_args__$1);
var param_names = (function (){var G__54277 = fixed_args__$1;
if(cljs.core.truth_(var_arg_name)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__54277,var_arg_name);
} else {
return G__54277;
}
})();
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"params","params",710516235),param_names);
var param_count = cljs.core.count(param_names);
var param_idens = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(param_count,cljs.core.gensym);
var param_bindings = cljs.core.zipmap(param_names,param_idens);
var iden__GT_invoke_idx = cljs.core.zipmap(param_idens,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var bindings = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$1);
var ctx__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bindings,param_bindings], 0)));
var ctx__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$2,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),iden__GT_invoke_idx);
var ctx__$4 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx__$3,new cljs.core.Keyword(null,"parents","parents",-2027538891),cljs.core.conj,fixed_arity);
var ___$1 = cljs.core._vreset_BANG_(new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4),cljs.core.assoc_in(cljs.core._deref(new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx__$4),new cljs.core.Keyword(null,"syms","syms",-1575891762)),cljs.core.zipmap(param_idens,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
var self_ref_idx = (cljs.core.truth_(fn_name)?(function (){var G__54278 = ctx__$4;
var G__54279 = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4);
var G__54280 = fn_id;
return (sci.impl.analyzer.update_parents.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.update_parents.cljs$core$IFn$_invoke$arity$3(G__54278,G__54279,G__54280) : sci.impl.analyzer.update_parents.call(null,G__54278,G__54279,G__54280));
})():null);
var body__$1 = sci.impl.analyzer.return_do(sci.impl.analyzer.with_recur_target(ctx__$4,true),fn_expr,body);
var iden__GT_invoke_idx__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx__$4),new cljs.core.Keyword(null,"syms","syms",-1575891762)));
var G__54285 = sci.impl.analyzer.__GT_FnBody(params,body__$1,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx__$1);
if(cljs.core.truth_(var_arg_name)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54285,new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228),cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx__$1,cljs.core.last(param_idens)));
} else {
return G__54285;
}
});
sci.impl.analyzer.analyzed_fn_meta = (function sci$impl$analyzer$analyzed_fn_meta(ctx,m){
var meta_needs_eval_QMARK_ = (cljs.core.count(m) > (2));
var m__$1 = ((meta_needs_eval_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__54286 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__54287 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__54286,G__54287) : sci.impl.analyzer.analyze.call(null,G__54286,G__54287));
})(),cljs.core.assoc,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"eval","eval",-1103567905)):m);
return m__$1;
});
sci.impl.analyzer.analyze_fn_STAR_ = (function sci$impl$analyzer$analyze_fn_STAR_(ctx,p__54293,macro_QMARK_){
var vec__54294 = p__54293;
var seq__54295 = cljs.core.seq(vec__54294);
var first__54296 = cljs.core.first(seq__54295);
var seq__54295__$1 = cljs.core.next(seq__54295);
var _fn = first__54296;
var first__54296__$1 = cljs.core.first(seq__54295__$1);
var seq__54295__$2 = cljs.core.next(seq__54295__$1);
var name_QMARK_ = first__54296__$1;
var body = seq__54295__$2;
var fn_expr = vec__54294;
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985),fn_expr);
var fn_name = (((name_QMARK_ instanceof cljs.core.Symbol))?name_QMARK_:null);
var body__$1 = (cljs.core.truth_(fn_name)?body:cljs.core.cons(name_QMARK_,body));
var bodies = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?body__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null));
var fn_id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var parents = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY)(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx__$1),fn_id);
var ctx__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.Keyword(null,"parents","parents",-2027538891),parents);
var ctx__$3 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in(ctx__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),fn_id):ctx__$2);
var bindings = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$3);
var bound_idens = cljs.core.set(cljs.core.vals(bindings));
var ctx__$4 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$3,new cljs.core.Keyword(null,"outer-idens","outer-idens",1197381241),bound_idens);
var closure_bindings = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4);
var analyzed_bodies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__54297,body__$2){
var map__54298 = p__54297;
var map__54298__$1 = cljs.core.__destructure_map(map__54298);
var acc = map__54298__$1;
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54298__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var min_varargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54298__$1,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596));
var orig_body = body__$2;
var arglist = cljs.core.first(body__$2);
var body__$3 = sci.impl.analyzer.expand_fn_args_PLUS_body(ctx__$4,body__$2,macro_QMARK_,fn_name,fn_id);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(body__$3);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(body__$3);
var new_min_varargs = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_((function (){var and__5041__auto__ = var_arg_name;
if(cljs.core.truth_(and__5041__auto__)){
return min_varargs;
} else {
return and__5041__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have more than 1 variadic overload",fn_expr);
} else {
}

if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(var_arg_name);
if(and__5041__auto__){
var and__5041__auto____$1 = min_varargs;
if(cljs.core.truth_(and__5041__auto____$1)){
return (fixed_arity > min_varargs);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have fixed arity function with more params than variadic function",fn_expr);
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596),new_min_varargs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(function (){var x__5128__auto__ = fixed_arity;
var y__5129__auto__ = max_fixed;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})()], 0)),new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(body__$3,new cljs.core.Keyword(null,"orig","orig",-1678309870),orig_body)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.conj,arglist);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"min-var-args","min-var-args",-1883389660),null,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(-1)], null),bodies);
var cb_idens_by_arity = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(closure_bindings),parents);
var cb_idens = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.vals(cb_idens_by_arity)));
var self_ref_QMARK_ = (cljs.core.truth_(fn_name)?cljs.core.contains_QMARK_(cb_idens,fn_id):null);
var closed_over_idens = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(bound_idens,cljs.core.keys(cb_idens));
var iden__GT_invoke_idx = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(closure_bindings),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(parents),new cljs.core.Keyword(null,"syms","syms",-1575891762)));
var closed_over_iden__GT_binding_idx = (cljs.core.truth_(iden__GT_invoke_idx)?cljs.core.zipmap(closed_over_idens,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx,closed_over_idens)):null);
var closed_over_cnt = cljs.core.count(closed_over_idens);
var iden__GT_enclosed_idx = cljs.core.zipmap(closed_over_idens,cljs.core.range.cljs$core$IFn$_invoke$arity$1(closed_over_cnt));
var iden__GT_enclosed_idx__$1 = (cljs.core.truth_(fn_name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(iden__GT_enclosed_idx,fn_id,closed_over_cnt):iden__GT_enclosed_idx);
var enclosed_array_fn = (((function (){var or__5043__auto__ = self_ref_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.seq(closed_over_iden__GT_binding_idx);
}
})())?(function (){var enclosed_array_cnt = (function (){var G__54302 = closed_over_cnt;
if(cljs.core.truth_(fn_name)){
return (G__54302 + (1));
} else {
return G__54302;
}
})();
var binding__GT_enclosed = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (iden){
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx,iden);
if(cljs.core.truth_(temp__5804__auto__)){
var binding_idx = temp__5804__auto__;
var enclosed_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_enclosed_idx__$1,iden);
var G__54303 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__54303[(0)] = binding_idx);

(G__54303[(1)] = enclosed_idx);

return G__54303;
} else {
return null;
}
}),closed_over_idens));
return (function (bindings__$1){
var a__5630__auto__ = binding__GT_enclosed;
var l__5631__auto__ = a__5630__auto__.length;
var idx = (0);
var ret = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(enclosed_array_cnt);
while(true){
if((idx < l__5631__auto__)){
var G__55845 = (idx + (1));
var G__55846 = (function (){var idxs = (binding__GT_enclosed[idx]);
var binding_idx = (idxs[(0)]);
var binding_val = (bindings__$1[binding_idx]);
var enclosed_idx = (idxs[(1)]);
(ret[enclosed_idx] = binding_val);

return ret;
})();
idx = G__55845;
ret = G__55846;
continue;
} else {
return ret;
}
break;
}
});
})():cljs.core.constantly(null));
var bodies__$1 = new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var bodies__$2 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (body__$2){
var iden__GT_invocation_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(body__$2);
var invocation_self_idx = new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(body__$2);
var enclosed__GT_invocation = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (iden){
var temp__5804__auto__ = (iden__GT_invocation_idx.cljs$core$IFn$_invoke$arity$1 ? iden__GT_invocation_idx.cljs$core$IFn$_invoke$arity$1(iden) : iden__GT_invocation_idx.call(null,iden));
if(cljs.core.truth_(temp__5804__auto__)){
var invocation_idx = temp__5804__auto__;
var G__54305 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__54305[(0)] = (iden__GT_enclosed_idx__$1.cljs$core$IFn$_invoke$arity$1 ? iden__GT_enclosed_idx__$1.cljs$core$IFn$_invoke$arity$1(iden) : iden__GT_enclosed_idx__$1.call(null,iden)));

(G__54305[(1)] = invocation_idx);

return G__54305;
} else {
return null;
}
}),closed_over_idens));
var invoc_size = cljs.core.count(iden__GT_invocation_idx);
var copy_enclosed__GT_invocation = (((enclosed__GT_invocation.length > (0)))?(function (enclosed_array,invoc_array){
var a__5630__auto__ = enclosed__GT_invocation;
var l__5631__auto__ = a__5630__auto__.length;
var idx = (0);
var ret = invoc_array;
while(true){
if((idx < l__5631__auto__)){
var G__55849 = (idx + (1));
var G__55850 = (function (){var idxs = (enclosed__GT_invocation[idx]);
var enclosed_idx = (idxs[(0)]);
var enclosed_val = (enclosed_array[enclosed_idx]);
var invoc_idx = (idxs[(1)]);
(ret[invoc_idx] = enclosed_val);

return ret;
})();
idx = G__55849;
ret = G__55850;
continue;
} else {
return ret;
}
break;
}
}):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(body__$2,new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058),invoc_size,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"invocation-self-idx","invocation-self-idx",-1258983407),invocation_self_idx,new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729),copy_enclosed__GT_invocation], 0));
}),bodies__$1);
var arglists = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var fn_meta = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(fn_expr),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"column","column",2078222095)], 0));
var ana_fn_meta = ((cljs.core.seq(fn_meta))?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$4,fn_meta) : sci.impl.analyzer.analyze.call(null,ctx__$4,fn_meta)):null);
var struct = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661),bodies__$2,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name,new cljs.core.Keyword("sci.impl","self-ref?","sci.impl/self-ref?",-276538273),self_ref_QMARK_,new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395),arglists,new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),true,new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639),ana_fn_meta,new cljs.core.Keyword("sci.impl","bindings-fn","sci.impl/bindings-fn",-992456394),enclosed_array_fn], null);
return struct;
});
sci.impl.analyzer.fn_ctx_fn = (function sci$impl$analyzer$fn_ctx_fn(_ctx,struct,fn_meta){
var fn_name = new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569).cljs$core$IFn$_invoke$arity$1(struct);
var fn_bodies = new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661).cljs$core$IFn$_invoke$arity$1(struct);
var macro_QMARK_ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(struct);
var single_arity = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fn_bodies)))?cljs.core.first(fn_bodies):null);
var bindings_fn = new cljs.core.Keyword("sci.impl","bindings-fn","sci.impl/bindings-fn",-992456394).cljs$core$IFn$_invoke$arity$1(struct);
var self_ref_QMARK_ = new cljs.core.Keyword("sci.impl","self-ref?","sci.impl/self-ref?",-276538273).cljs$core$IFn$_invoke$arity$1(struct);
if(cljs.core.truth_(fn_meta)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var fn_meta__$1 = sci.impl.types.eval(fn_meta,ctx,bindings);
var f = sci.impl.fns.eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_,bindings_fn);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(f,cljs.core.merge,fn_meta__$1);
}),null);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return sci.impl.fns.eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_,bindings_fn);
}),null);
}
});
sci.impl.analyzer.analyze_fn = (function sci$impl$analyzer$analyze_fn(ctx,fn_expr,macro_QMARK_){
var struct = sci.impl.analyzer.analyze_fn_STAR_(ctx,fn_expr,macro_QMARK_);
var fn_meta = new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639).cljs$core$IFn$_invoke$arity$1(struct);
return sci.impl.analyzer.fn_ctx_fn(ctx,struct,fn_meta);
});
/**
 * :syms = closed over values
 */
sci.impl.analyzer.update_parents = (function sci$impl$analyzer$update_parents(ctx,closure_bindings,ob){
var parents = new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx);
var new_cb = cljs.core._vreset_BANG_(closure_bindings,(function (cb){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cb,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,new cljs.core.Keyword(null,"syms","syms",-1575891762)),(function (iden__GT_invoke_idx){
if(cljs.core.contains_QMARK_(iden__GT_invoke_idx,ob)){
return iden__GT_invoke_idx;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(iden__GT_invoke_idx,ob,cljs.core.count(iden__GT_invoke_idx));
}
}));
})(cljs.core._deref(closure_bindings)));
var closure_idx = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_cb,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(parents,new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ob], 0)));
return closure_idx;
});
sci.impl.analyzer.analyze_let_STAR_ = (function sci$impl$analyzer$analyze_let_STAR_(ctx,expr,destructured_let_bindings,exprs){
var rt = sci.impl.analyzer.recur_target(ctx);
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var vec__54310 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__54314,p__54315){
var vec__54317 = p__54314;
var ctx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54317,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54317,(1),null);
var idens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54317,(2),null);
var vec__54320 = p__54315;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54320,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54320,(1),null);
var m = cljs.core.meta(binding_value);
var t = (cljs.core.truth_(m)?new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m):null);
var binding_name__$1 = (cljs.core.truth_(t)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(binding_name,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),t):binding_name);
var v = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$2,binding_value) : sci.impl.analyzer.analyze.call(null,ctx__$2,binding_value));
var new_iden = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var cb = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$2);
var idx = sci.impl.analyzer.update_parents(ctx__$2,cb,new_iden);
var iden__GT_invoke_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(ctx__$2);
var iden__GT_invoke_idx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(iden__GT_invoke_idx,new_iden,idx);
var ctx__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$2,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),iden__GT_invoke_idx__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$5(ctx__$3,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.assoc,binding_name__$1,new_iden),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new_let_bindings,binding_name__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(idens,new_iden)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx__$1,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),destructured_let_bindings));
var ctx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54310,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54310,(1),null);
var idens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54310,(2),null);
var body = sci.impl.analyzer.return_do(sci.impl.analyzer.with_recur_target(ctx__$2,rt),expr,exprs);
var iden__GT_invoke_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(ctx__$2);
var idxs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx,idens);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$3,bindings){
return sci.impl.evaluator.eval_let(ctx__$3,bindings,new_let_bindings,body,idxs);
}),null);
});
/**
 * The let macro from clojure.core
 */
sci.impl.analyzer.analyze_let = (function sci$impl$analyzer$analyze_let(ctx,p__54323){
var vec__54324 = p__54323;
var seq__54325 = cljs.core.seq(vec__54324);
var first__54326 = cljs.core.first(seq__54325);
var seq__54325__$1 = cljs.core.next(seq__54325);
var _let = first__54326;
var first__54326__$1 = cljs.core.first(seq__54325__$1);
var seq__54325__$2 = cljs.core.next(seq__54325__$1);
var let_bindings = first__54326__$1;
var exprs = seq__54325__$2;
var expr = vec__54324;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.analyzer.analyze_let_STAR_(ctx,expr,let_bindings__$1,exprs);
});
sci.impl.analyzer.init_var_BANG_ = (function sci$impl$analyzer$init_var_BANG_(ctx,name,expr){
var cnn_55856 = sci.impl.vars.current_ns_name();
var env_55857 = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var the_current_ns_55858 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(env_55857),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_55856], null));
var refers_55859 = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns_55858);
var the_current_ns_55860__$1 = (function (){var temp__5802__auto__ = (function (){var and__5041__auto__ = refers_55859;
if(cljs.core.truth_(and__5041__auto__)){
return refers_55859.get(name);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var x = temp__5802__auto__;
return sci.impl.analyzer.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," already refers to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_55856)].join(''),expr);
} else {
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns_55858,name))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns_55858,name,(function (){var G__54331 = sci.impl.vars.__GT_SciVar(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_55856),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(name),new cljs.core.Keyword(null,"name","name",1843675177),name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0)),false);
G__54331.sci$impl$vars$IVar$unbind$arity$1(null);

return G__54331;
})());
} else {
return the_current_ns_55858;
}
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_55857,(function (env__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.assoc,cnn_55856,the_current_ns_55860__$1);
}));

return null;
});
sci.impl.analyzer.analyze_def = (function sci$impl$analyzer$analyze_def(ctx,expr){
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var vec__54332 = expr;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54332,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54332,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54332,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54332,(3),null);
sci.impl.analyzer.init_var_BANG_(ctx__$1,var_name,expr);

if(cljs.core.simple_symbol_QMARK_(var_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var arg_count = cljs.core.count(expr);
var docstring = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arg_count)) && (typeof _QMARK_docstring === 'string')))?_QMARK_docstring:null);
var expected_arg_count = (cljs.core.truth_(docstring)?(4):(3));
if((arg_count <= expected_arg_count)){
} else {
throw (new Error("Too many arguments to def"));
}

var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arg_count))?sci.impl.utils.var_unbound:(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,init) : sci.impl.analyzer.analyze.call(null,ctx__$1,init)));
var m = cljs.core.meta(var_name);
var m_needs_eval_QMARK_ = m;
var m__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns));
var m__$2 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m__$1);
var m__$3 = (cljs.core.truth_(m_needs_eval_QMARK_)?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,m__$2) : sci.impl.analyzer.analyze.call(null,ctx__$1,m__$2)):sci.impl.types.__GT_constant(m__$2));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.evaluator.eval_def(ctx__$2,bindings,var_name,init__$1,m__$3);
}),null);
});
sci.impl.analyzer.analyze_defn = (function sci$impl$analyzer$analyze_defn(ctx,p__54343){
var vec__54344 = p__54343;
var seq__54345 = cljs.core.seq(vec__54344);
var first__54346 = cljs.core.first(seq__54345);
var seq__54345__$1 = cljs.core.next(seq__54345);
var op = first__54346;
var first__54346__$1 = cljs.core.first(seq__54345__$1);
var seq__54345__$2 = cljs.core.next(seq__54345__$1);
var fn_name = first__54346__$1;
var body = seq__54345__$2;
var expr = vec__54344;
if(cljs.core.simple_symbol_QMARK_(fn_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

sci.impl.analyzer.init_var_BANG_(ctx,fn_name,expr);

var macro_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("defmacro",cljs.core.name(op));
var vec__54347 = cljs.core.split_with(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.sequential_QMARK_),body);
var pre_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54347,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54347,(1),null);
var _ = ((cljs.core.empty_QMARK_(body__$1))?sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",expr):null);
var docstring = (function (){var temp__5804__auto__ = cljs.core.first(pre_body);
if(cljs.core.truth_(temp__5804__auto__)){
var ds = temp__5804__auto__;
if(typeof ds === 'string'){
return ds;
} else {
return null;
}
} else {
return null;
}
})();
var meta_map = (function (){var temp__5804__auto__ = cljs.core.last(pre_body);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
if(cljs.core.map_QMARK_(m)){
return m;
} else {
return null;
}
} else {
return null;
}
})();
var vec__54350 = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?(function (){var lb = cljs.core.last(body__$1);
if(cljs.core.map_QMARK_(lb)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lb,cljs.core.butlast(body__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body__$1], null);
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body__$1], null));
var meta_map2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54350,(0),null);
var body__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54350,(1),null);
var meta_map__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(fn_name),cljs.core.meta(expr),meta_map], 0));
var meta_map__$2 = (cljs.core.truth_(meta_map2)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta_map__$1,meta_map2], 0)):meta_map__$1);
var fn_body = cljs.core.with_meta(cljs.core.cons(new cljs.core.Symbol(null,"fn","fn",465265323,null),body__$2),cljs.core.meta(expr));
var f = sci.impl.analyzer.analyze_fn_STAR_(ctx,fn_body,macro_QMARK_);
var arglists = (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.seq(new cljs.core.Keyword("sci.impl","arglists","sci.impl/arglists",-802264395).cljs$core$IFn$_invoke$arity$1(f)),null,(1),null)),(2),null));
var meta_map__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(meta_map__$2,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists], 0));
var meta_map__$4 = (function (){var G__54353 = meta_map__$3;
var G__54353__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54353,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):G__54353);
if(macro_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54353__$1,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
return G__54353__$1;
}
})();
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569),fn_name,new cljs.core.Keyword("sci.impl","defn","sci.impl/defn",1087257818),true], 0));
var fn_meta = new cljs.core.Keyword("sci.impl","fn-meta","sci.impl/fn-meta",1093684639).cljs$core$IFn$_invoke$arity$1(f__$1);
var ctxfn = sci.impl.analyzer.fn_ctx_fn(ctx,f__$1,fn_meta);
var f__$2 = ctxfn;
var meta_map__$5 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,meta_map__$4) : sci.impl.analyzer.analyze.call(null,ctx,meta_map__$4));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_def(ctx__$1,bindings,fn_name,f__$2,meta_map__$5);
}),null);
});
sci.impl.analyzer.analyze_loop = (function sci$impl$analyzer$analyze_loop(ctx,expr){
var bv = cljs.core.second(expr);
var arg_names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bv);
var init_vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(bv));
var vec__54357 = ((cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,arg_names))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bv,arg_names], null):(function (){var syms = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_names),cljs.core.gensym);
var bv1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,syms,init_vals);
var bv2 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,arg_names,syms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bv1,bv2)),syms], null);
})());
var bv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54357,(0),null);
var syms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54357,(1),null);
var body = cljs.core.nnext(expr);
var expansion = (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),(new cljs.core.List(null,bv__$1,(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(arg_names),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),syms),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,expansion) : sci.impl.analyzer.analyze.call(null,ctx,expansion));
});
sci.impl.analyzer.analyze_lazy_seq = (function sci$impl$analyzer$analyze_lazy_seq(ctx,expr){
var body = cljs.core.rest(expr);
var ctx__$1 = sci.impl.analyzer.with_recur_target(ctx,true);
var ana = sci.impl.analyzer.return_do(ctx__$1,expr,body);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return (new cljs.core.LazySeq(null,(function (){
return sci.impl.types.eval(ana,ctx__$2,bindings);
}),null,null));
}),null);
});
sci.impl.analyzer.return_if = (function sci$impl$analyzer$return_if(ctx,expr){
var exprs = cljs.core.rest(expr);
var children = sci.impl.analyzer.analyze_children(ctx,exprs);
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword(null,"special","special",-1125941630),true], 0));
var G__54368 = cljs.core.count(children);
switch (G__54368) {
case (0):
case (1):
return sci.impl.analyzer.throw_error_with_location("Too few arguments to if",expr);

break;
case (2):
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
if(cljs.core.not(condition)){
return null;
} else {
if(sci.impl.utils.constant_QMARK_(condition)){
return then;
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
if(cljs.core.truth_(sci.impl.types.eval(condition,ctx__$1,bindings))){
return sci.impl.types.eval(then,ctx__$1,bindings);
} else {
return null;
}
}),stack);

}
}

break;
case (3):
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(2));
if(cljs.core.not(condition)){
return else$;
} else {
if(sci.impl.utils.constant_QMARK_(condition)){
return then;
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
if(cljs.core.truth_(sci.impl.types.eval(condition,ctx__$1,bindings))){
return sci.impl.types.eval(then,ctx__$1,bindings);
} else {
return sci.impl.types.eval(else$,ctx__$1,bindings);
}
}),stack);

}
}

break;
default:
return sci.impl.analyzer.throw_error_with_location("Too many arguments to if",expr);

}
});
sci.impl.analyzer.analyze_case = (function sci$impl$analyzer$analyze_case(ctx,expr){
var ctx_wo_rt = sci.impl.analyzer.without_recur_target(ctx);
var case_val = (function (){var G__54376 = ctx_wo_rt;
var G__54377 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__54376,G__54377) : sci.impl.analyzer.analyze.call(null,G__54376,G__54377));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children(ctx,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var vec__54373 = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,(function (){var G__54378 = ctx;
var G__54379 = cljs.core.last(clauses);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__54378,G__54379) : sci.impl.analyzer.analyze.call(null,G__54378,G__54379));
})()], null):null);
var default_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54373,(0),null);
var case_default = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54373,(1),null);
var cases = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(match_clauses,result_clauses);
var assoc_new = (function (m,k,v){
if((!(cljs.core.contains_QMARK_(m,k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return sci.impl.analyzer.throw_error_with_location(["Duplicate case test constant ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),expr);
}
});
var case_map = (function (){var cases__$1 = cljs.core.seq(cases);
var ret_map = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cases__$1){
var vec__54387 = cases__$1;
var seq__54388 = cljs.core.seq(vec__54387);
var first__54389 = cljs.core.first(seq__54388);
var seq__54388__$1 = cljs.core.next(seq__54388);
var k = first__54389;
var first__54389__$1 = cljs.core.first(seq__54388__$1);
var seq__54388__$2 = cljs.core.next(seq__54388__$1);
var v = first__54389__$1;
var cases__$2 = seq__54388__$2;
if(cljs.core.seq_QMARK_(k)){
var G__55870 = cases__$2;
var G__55871 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cases__$1,ret_map,vec__54387,seq__54388,first__54389,seq__54388__$1,k,first__54389__$1,seq__54388__$2,v,cases__$2,ctx_wo_rt,case_val,clauses,match_clauses,result_clauses,vec__54373,default_QMARK_,case_default,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new(acc,k__$1,v);
});})(cases__$1,ret_map,vec__54387,seq__54388,first__54389,seq__54388__$1,k,first__54389__$1,seq__54388__$2,v,cases__$2,ctx_wo_rt,case_val,clauses,match_clauses,result_clauses,vec__54373,default_QMARK_,case_default,cases,assoc_new))
,ret_map,k);
cases__$1 = G__55870;
ret_map = G__55871;
continue;
} else {
var G__55872 = cases__$2;
var G__55873 = assoc_new(ret_map,k,v);
cases__$1 = G__55872;
ret_map = G__55873;
continue;
}
} else {
return ret_map;
}
break;
}
})();
var f = (cljs.core.truth_(default_QMARK_)?sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5(ctx__$1,bindings,case_map,case_val,case_default);
}),null):sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4(ctx__$1,bindings,case_map,case_val);
}),null));
return f;
});
sci.impl.analyzer.analyze_try = (function sci$impl$analyzer$analyze_try(ctx,expr){
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var body = cljs.core.next(expr);
var vec__54399 = (function (){var exprs = body;
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr__$1 = cljs.core.first(exprs);
var exprs__$1 = cljs.core.next(exprs);
if(((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),cljs.core.first(expr__$1))))){
var G__55875 = exprs__$1;
var G__55876 = body_exprs;
var G__55877 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(catch_exprs,expr__$1);
var G__55878 = finally_expr;
exprs = G__55875;
body_exprs = G__55876;
catch_exprs = G__55877;
finally_expr = G__55878;
continue;
} else {
if(((cljs.core.not(exprs__$1)) && (((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first(expr__$1))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr__$1], null);
} else {
var G__55879 = exprs__$1;
var G__55880 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_exprs,expr__$1);
var G__55881 = catch_exprs;
var G__55882 = finally_expr;
exprs = G__55879;
body_exprs = G__55880;
catch_exprs = G__55881;
finally_expr = G__55882;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54399,(0),null);
var catches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54399,(1),null);
var finally$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54399,(2),null);
var body__$1 = (function (){var G__54402 = ctx__$1;
var G__54403 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body_exprs);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__54402,G__54403) : sci.impl.analyzer.analyze.call(null,G__54402,G__54403));
})();
var catches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__54405 = c;
var seq__54406 = cljs.core.seq(vec__54405);
var first__54407 = cljs.core.first(seq__54406);
var seq__54406__$1 = cljs.core.next(seq__54406);
var _ = first__54407;
var first__54407__$1 = cljs.core.first(seq__54406__$1);
var seq__54406__$2 = cljs.core.next(seq__54406__$1);
var ex = first__54407__$1;
var first__54407__$2 = cljs.core.first(seq__54406__$2);
var seq__54406__$3 = cljs.core.next(seq__54406__$2);
var binding = first__54407__$2;
var body__$2 = seq__54406__$3;
var temp__5802__auto__ = (function (){var G__54415 = ex;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),G__54415)){
return Error;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Object","js/Object",61215323,null),G__54415)){
return Object;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__54415)){
return new cljs.core.Keyword(null,"default","default",-1987822328);
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,ex) : sci.impl.analyzer.analyze.call(null,ctx__$1,ex));

}
}
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var clazz = temp__5802__auto__;
var ex_iden = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var closure_bindings = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$1);
var ex_idx = sci.impl.analyzer.update_parents(ctx__$1,closure_bindings,ex_iden);
var ctx__$2 = cljs.core.assoc_in(cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),binding], null),ex_iden),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),ex_iden], null),ex_idx);
var analyzed_body = (function (){var G__54417 = ctx__$2;
var G__54418 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body__$2);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__54417,G__54418) : sci.impl.analyzer.analyze.call(null,G__54417,G__54418));
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),clazz,new cljs.core.Keyword(null,"ex-idx","ex-idx",795118805),ex_idx,new cljs.core.Keyword(null,"body","body",-2049205669),analyzed_body], null);
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex)].join(''),ex);
}
}),catches);
var finally$__$1 = (cljs.core.truth_(finally$)?(function (){var G__54419 = ctx__$1;
var G__54420 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.rest(finally$));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__54419,G__54420) : sci.impl.analyzer.analyze.call(null,G__54419,G__54420));
})():null);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.evaluator.eval_try(ctx__$2,bindings,body__$1,catches__$1,finally$__$1);
}),null);
});
sci.impl.analyzer.analyze_throw = (function sci$impl$analyzer$analyze_throw(ctx,p__54421){
var vec__54422 = p__54421;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54422,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54422,(1),null);
var expr = vec__54422;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(expr))){
} else {
sci.impl.analyzer.throw_error_with_location("Too many arguments to throw",expr);
}

var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var ana = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,ex) : sci.impl.analyzer.analyze.call(null,ctx__$1,ex));
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword(null,"special","special",-1125941630),true], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx__$2,bindings,sci.impl.types.eval(ana,ctx__$2,bindings),this$);
}),stack);
});
sci.impl.analyzer.analyze_dot = (function sci$impl$analyzer$analyze_dot(ctx,p__54430){
var vec__54431 = p__54430;
var seq__54432 = cljs.core.seq(vec__54431);
var first__54433 = cljs.core.first(seq__54432);
var seq__54432__$1 = cljs.core.next(seq__54432);
var _dot = first__54433;
var first__54433__$1 = cljs.core.first(seq__54432__$1);
var seq__54432__$2 = cljs.core.next(seq__54432__$1);
var instance_expr = first__54433__$1;
var first__54433__$2 = cljs.core.first(seq__54432__$2);
var seq__54432__$3 = cljs.core.next(seq__54432__$2);
var method_expr = first__54433__$2;
var args = seq__54432__$3;
var expr = vec__54431;
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var vec__54434 = ((cljs.core.seq_QMARK_(method_expr))?method_expr:cljs.core.cons(method_expr,args));
var seq__54435 = cljs.core.seq(vec__54434);
var first__54436 = cljs.core.first(seq__54435);
var seq__54435__$1 = cljs.core.next(seq__54435);
var method_expr__$1 = first__54436;
var args__$1 = seq__54435__$1;
var instance_expr__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,instance_expr) : sci.impl.analyzer.analyze.call(null,ctx__$1,instance_expr));
var method_name = cljs.core.name(method_expr__$1);
var args__$2 = ((args__$1)?sci.impl.analyzer.analyze_children(ctx__$1,args__$1):null);
var res = (function (){var field_access = clojure.string.starts_with_QMARK_(method_name,"-");
var meth_name = ((field_access)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_name,(1)):method_name);
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0));
var allowed_QMARK_ = (method_expr__$1 === sci.impl.utils.allowed_append);
return cljs.core.with_meta(sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.evaluator.eval_instance_method_invocation(ctx__$2,bindings,instance_expr__$1,meth_name,field_access,args__$2,allowed_QMARK_);
}),stack),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("sci.impl.analyzer","instance-expr","sci.impl.analyzer/instance-expr",629338719),instance_expr__$1,new cljs.core.Keyword("sci.impl.analyzer","method-name","sci.impl.analyzer/method-name",-842600667),method_name], null));
})();
return res;
});
/**
 * Expands (. x method)
 */
sci.impl.analyzer.expand_dot_STAR__STAR_ = (function sci$impl$analyzer$expand_dot_STAR__STAR_(ctx,expr){
if((cljs.core.count(expr) < (3))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.analyze_dot(ctx,expr);
});
/**
 * Expands (.foo x)
 */
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__54445){
var vec__54446 = p__54445;
var seq__54447 = cljs.core.seq(vec__54446);
var first__54448 = cljs.core.first(seq__54447);
var seq__54447__$1 = cljs.core.next(seq__54447);
var method_name = first__54448;
var first__54448__$1 = cljs.core.first(seq__54447__$1);
var seq__54447__$2 = cljs.core.next(seq__54447__$1);
var obj = first__54448__$1;
var args = seq__54447__$2;
var expr = vec__54446;
if((cljs.core.count(expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.analyze_dot(ctx,(new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(method_name),(1))),args),null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.analyze_new = (function sci$impl$analyzer$analyze_new(ctx,p__54459){
var vec__54460 = p__54459;
var seq__54461 = cljs.core.seq(vec__54460);
var first__54462 = cljs.core.first(seq__54461);
var seq__54461__$1 = cljs.core.next(seq__54461);
var _new = first__54462;
var first__54462__$1 = cljs.core.first(seq__54461__$1);
var seq__54461__$2 = cljs.core.next(seq__54461__$1);
var class_sym = first__54462__$1;
var args = seq__54461__$2;
var expr = vec__54460;
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
if((class_sym instanceof cljs.core.Symbol)){
var temp__5802__auto__ = (function (){var or__5043__auto__ = (function (){var temp__5804__auto__ = (function (){var temp__5804__auto__ = sci.impl.interop.resolve_class_opts(ctx__$1,class_sym);
if(cljs.core.truth_(temp__5804__auto__)){
var opts = temp__5804__auto__;
var or__5043__auto__ = new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts);
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var clazz = temp__5804__auto__;
return clazz;
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx__$1,class_sym,false);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var class$ = temp__5802__auto__;
var args__$1 = sci.impl.analyzer.analyze_children(ctx__$1,args);
var var_QMARK_ = sci.impl.vars.var_QMARK_(class$);
var maybe_var = ((var_QMARK_)?class$:null);
var maybe_record = ((var_QMARK_)?cljs.core.deref(maybe_var):(((class$ instanceof cljs.core.Symbol))?class$:null));
var maybe_record_constructor = (cljs.core.truth_(maybe_record)?new cljs.core.Keyword("sci.impl.record","constructor","sci.impl.record/constructor",-2025684209).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(maybe_record)):null);
if(cljs.core.truth_(maybe_record_constructor)){
var G__54463 = ctx__$1;
var G__54464 = expr;
var G__54465 = maybe_record_constructor;
var G__54466 = args__$1;
var G__54467 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0));
var G__54468 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__54463,G__54464,G__54465,G__54466,G__54467,G__54468) : sci.impl.analyzer.return_call.call(null,G__54463,G__54464,G__54465,G__54466,G__54467,G__54468));
} else {
if(var_QMARK_){
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_constructor(cljs.core.deref(maybe_var),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__54451_SHARP_){
return sci.impl.types.eval(p1__54451_SHARP_,ctx__$2,bindings);
}),args__$1));
}),null);
} else {
if((class$ instanceof sci.impl.types.NodeR)){
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_constructor(sci.impl.types.eval(class$,ctx__$2,bindings),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__54453_SHARP_){
return sci.impl.types.eval(p1__54453_SHARP_,ctx__$2,bindings);
}),args__$1));
}),null);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_constructor(class$,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__54457_SHARP_){
return sci.impl.types.eval(p1__54457_SHARP_,ctx__$2,bindings);
}),args__$1));
}),null);

}
}
}
} else {
var temp__5802__auto____$1 = sci.impl.records.resolve_record_class(ctx__$1,class_sym);
if(cljs.core.truth_(temp__5802__auto____$1)){
var record = temp__5802__auto____$1;
var args__$1 = sci.impl.analyzer.analyze_children(ctx__$1,args);
var G__54473 = ctx__$1;
var G__54474 = expr;
var G__54475 = new cljs.core.Keyword("sci.impl.record","constructor","sci.impl.record/constructor",-2025684209).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(record));
var G__54476 = args__$1;
var G__54477 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0));
var G__54478 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__54473,G__54474,G__54475,G__54476,G__54477,G__54478) : sci.impl.analyzer.return_call.call(null,G__54473,G__54474,G__54475,G__54476,G__54477,G__54478));
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_sym)].join(''),class_sym);
}
}
} else {
var class$ = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,class_sym) : sci.impl.analyzer.analyze.call(null,ctx__$1,class_sym));
var args__$1 = sci.impl.analyzer.analyze_children(ctx__$1,args);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_constructor(sci.impl.types.eval(class$,ctx__$2,bindings),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__54458_SHARP_){
return sci.impl.types.eval(p1__54458_SHARP_,ctx__$2,bindings);
}),args__$1));
}),null);
}
});
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__54479){
var vec__54484 = p__54479;
var seq__54485 = cljs.core.seq(vec__54484);
var first__54486 = cljs.core.first(seq__54485);
var seq__54485__$1 = cljs.core.next(seq__54485);
var constructor_sym = first__54486;
var args = seq__54485__$1;
var constructor_name = cljs.core.name(constructor_sym);
var class_sym = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta(constructor_sym));
return sci.impl.analyzer.analyze_new(ctx,cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),class_sym,args),cljs.core.meta(constructor_sym)));
});
sci.impl.analyzer.return_ns_op = (function sci$impl$analyzer$return_ns_op(_ctx,f,expr,analyzed_args){
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns)], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ctx,analyzed_args);
}catch (e54487){if((e54487 instanceof Error)){
var e = e54487;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,this$);
} else {
throw e54487;

}
}}),stack);
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__54492){
var vec__54493 = p__54492;
var seq__54494 = cljs.core.seq(vec__54493);
var first__54495 = cljs.core.first(seq__54494);
var seq__54494__$1 = cljs.core.next(seq__54494);
var _ns = first__54495;
var first__54495__$1 = cljs.core.first(seq__54494__$1);
var seq__54494__$2 = cljs.core.next(seq__54494__$1);
var ns_name = first__54495__$1;
var exprs = seq__54494__$2;
var expr = vec__54493;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))].join('')));
}

var vec__54496 = (function (){var fexpr = cljs.core.first(exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next(exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54496,(0),null);
var exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54496,(1),null);
var vec__54499 = (function (){var m = cljs.core.first(exprs__$1);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next(exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54499,(0),null);
var exprs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54499,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_map,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr_map);
sci.impl.utils.set_namespace_BANG_(ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__54507 = cljs.core.first(exprs__$3);
var seq__54508 = cljs.core.seq(vec__54507);
var first__54509 = cljs.core.first(seq__54508);
var seq__54508__$1 = cljs.core.next(seq__54508);
var k = first__54509;
var args = seq__54508__$1;
var expr__$1 = vec__54507;
var G__54510 = k;
var G__54510__$1 = (((G__54510 instanceof cljs.core.Keyword))?G__54510.fqn:null);
switch (G__54510__$1) {
case "require":
case "use":
case "import":
case "refer-clojure":
var G__55896 = cljs.core.next(exprs__$3);
var G__55897 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.analyzer.return_ns_op(ctx,(function (){var G__54511 = k;
var G__54511__$1 = (((G__54511 instanceof cljs.core.Keyword))?G__54511.fqn:null);
switch (G__54511__$1) {
case "require":
return sci.impl.load.eval_require;

break;
case "use":
return sci.impl.load.eval_use;

break;
case "import":
return sci.impl.evaluator.eval_import;

break;
case "refer-clojure":
return ((function (exprs__$3,ret,G__54511,G__54511__$1,G__54510,G__54510__$1,vec__54507,seq__54508,first__54509,seq__54508__$1,k,args,expr__$1,vec__54496,docstring,exprs__$1,vec__54499,attr_map,exprs__$2,attr_map__$1,vec__54493,seq__54494,first__54495,seq__54494__$1,_ns,first__54495__$1,seq__54494__$2,ns_name,exprs,expr){
return (function() { 
var G__55900__delegate = function (ctx__$1,args__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.eval_refer,ctx__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),args__$1);
};
var G__55900 = function (ctx__$1,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__55901__i = 0, G__55901__a = new Array(arguments.length -  1);
while (G__55901__i < G__55901__a.length) {G__55901__a[G__55901__i] = arguments[G__55901__i + 1]; ++G__55901__i;}
  args__$1 = new cljs.core.IndexedSeq(G__55901__a,0,null);
} 
return G__55900__delegate.call(this,ctx__$1,args__$1);};
G__55900.cljs$lang$maxFixedArity = 1;
G__55900.cljs$lang$applyTo = (function (arglist__55902){
var ctx__$1 = cljs.core.first(arglist__55902);
var args__$1 = cljs.core.rest(arglist__55902);
return G__55900__delegate(ctx__$1,args__$1);
});
G__55900.cljs$core$IFn$_invoke$arity$variadic = G__55900__delegate;
return G__55900;
})()
;
;})(exprs__$3,ret,G__54511,G__54511__$1,G__54510,G__54510__$1,vec__54507,seq__54508,first__54509,seq__54508__$1,k,args,expr__$1,vec__54496,docstring,exprs__$1,vec__54499,attr_map,exprs__$2,attr_map__$1,vec__54493,seq__54494,first__54495,seq__54494__$1,_ns,first__54495__$1,seq__54494__$2,ns_name,exprs,expr))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54511__$1)].join('')));

}
})(),expr__$1,args));
exprs__$3 = G__55896;
ret = G__55897;
continue;

break;
case "gen-class":
var G__55903 = cljs.core.next(exprs__$3);
var G__55904 = ret;
exprs__$3 = G__55903;
ret = G__55904;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54510__$1)].join('')));

}
} else {
return sci.impl.analyzer.return_do(ctx,expr,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.types.__GT_NodeR(((function (exprs__$3,ret,vec__54496,docstring,exprs__$1,vec__54499,attr_map,exprs__$2,attr_map__$1,vec__54493,seq__54494,first__54495,seq__54494__$1,_ns,first__54495__$1,seq__54494__$2,ns_name,exprs,expr){
return (function (this$,ctx__$1,bindings){
sci.impl.load.add_loaded_lib(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx__$1),ns_name);

return null;
});})(exprs__$3,ret,vec__54496,docstring,exprs__$1,vec__54499,attr_map,exprs__$2,attr_map__$1,vec__54493,seq__54494,first__54495,seq__54494__$1,_ns,first__54495__$1,seq__54494__$2,ns_name,exprs,expr))
,null)));
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__54514){
var vec__54515 = p__54514;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54515,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54515,(1),null);
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__54518){
var vec__54519 = p__54518;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54519,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54519,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54519,(2),null);
var expr = vec__54519;
if((obj instanceof cljs.core.Symbol)){
var obj__$1 = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,obj);
var ___$1 = ((sci.impl.vars.var_QMARK_(obj__$1))?null:sci.impl.analyzer.throw_error_with_location("Invalid assignment target",expr));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var v__$2 = sci.impl.types.eval(v__$1,ctx__$1,bindings);
return sci.impl.types.setVal(obj__$1,v__$2);
}),null);
} else {
if(cljs.core.seq_QMARK_(obj)){
var obj__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.analyzer.analyze.call(null,ctx,obj));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
var info = cljs.core.meta(obj__$1);
var k = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.analyzer","method-name","sci.impl.analyzer/method-name",-842600667).cljs$core$IFn$_invoke$arity$1(info),(1));
var obj__$2 = new cljs.core.Keyword("sci.impl.analyzer","instance-expr","sci.impl.analyzer/instance-expr",629338719).cljs$core$IFn$_invoke$arity$1(info);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var obj__$3 = sci.impl.types.eval(obj__$2,ctx__$1,bindings);
var v__$2 = sci.impl.types.eval(v__$1,ctx__$1,bindings);
return sci.impl.analyzer.goog$module$goog$object.set(obj__$3,k,v__$2);
}),null);
} else {
return sci.impl.analyzer.throw_error_with_location("Invalid assignment target",expr);

}
}
});
sci.impl.analyzer.return_binding_call = (function sci$impl$analyzer$return_binding_call(_ctx,expr,idx,f,analyzed_children,stack){
var G__54527 = cljs.core.count(analyzed_children);
switch (G__54527) {
case (0):
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var fexpr__54529 = (bindings[idx]);
return (fexpr__54529.cljs$core$IFn$_invoke$arity$0 ? fexpr__54529.cljs$core$IFn$_invoke$arity$0() : fexpr__54529.call(null));
}catch (e54528){if((e54528 instanceof Error)){
var e__10000__auto__ = e54528;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10000__auto__,this$);
} else {
throw e54528;

}
}}),stack);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__54532 = sci.impl.types.eval(arg0,ctx,bindings);
var fexpr__54531 = (bindings[idx]);
return (fexpr__54531.cljs$core$IFn$_invoke$arity$1 ? fexpr__54531.cljs$core$IFn$_invoke$arity$1(G__54532) : fexpr__54531.call(null,G__54532));
}catch (e54530){if((e54530 instanceof Error)){
var e__10000__auto__ = e54530;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10000__auto__,this$);
} else {
throw e54530;

}
}}),stack);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__54536 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54538 = sci.impl.types.eval(arg1,ctx,bindings);
var fexpr__54535 = (bindings[idx]);
return (fexpr__54535.cljs$core$IFn$_invoke$arity$2 ? fexpr__54535.cljs$core$IFn$_invoke$arity$2(G__54536,G__54538) : fexpr__54535.call(null,G__54536,G__54538));
}catch (e54533){if((e54533 instanceof Error)){
var e__10000__auto__ = e54533;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10000__auto__,this$);
} else {
throw e54533;

}
}}),stack);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__54543 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54544 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54545 = sci.impl.types.eval(arg2,ctx,bindings);
var fexpr__54542 = (bindings[idx]);
return (fexpr__54542.cljs$core$IFn$_invoke$arity$3 ? fexpr__54542.cljs$core$IFn$_invoke$arity$3(G__54543,G__54544,G__54545) : fexpr__54542.call(null,G__54543,G__54544,G__54545));
}catch (e54541){if((e54541 instanceof Error)){
var e__10000__auto__ = e54541;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10000__auto__,this$);
} else {
throw e54541;

}
}}),stack);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__54548 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54549 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54550 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54551 = sci.impl.types.eval(arg3,ctx,bindings);
var fexpr__54547 = (bindings[idx]);
return (fexpr__54547.cljs$core$IFn$_invoke$arity$4 ? fexpr__54547.cljs$core$IFn$_invoke$arity$4(G__54548,G__54549,G__54550,G__54551) : fexpr__54547.call(null,G__54548,G__54549,G__54550,G__54551));
}catch (e54546){if((e54546 instanceof Error)){
var e__10000__auto__ = e54546;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10000__auto__,this$);
} else {
throw e54546;

}
}}),stack);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__54554 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54555 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54556 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54557 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54558 = sci.impl.types.eval(arg4,ctx,bindings);
var fexpr__54553 = (bindings[idx]);
return (fexpr__54553.cljs$core$IFn$_invoke$arity$5 ? fexpr__54553.cljs$core$IFn$_invoke$arity$5(G__54554,G__54555,G__54556,G__54557,G__54558) : fexpr__54553.call(null,G__54554,G__54555,G__54556,G__54557,G__54558));
}catch (e54552){if((e54552 instanceof Error)){
var e__10000__auto__ = e54552;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10000__auto__,this$);
} else {
throw e54552;

}
}}),stack);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__54565 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54566 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54567 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54568 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54569 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54570 = sci.impl.types.eval(arg5,ctx,bindings);
var fexpr__54564 = (bindings[idx]);
return (fexpr__54564.cljs$core$IFn$_invoke$arity$6 ? fexpr__54564.cljs$core$IFn$_invoke$arity$6(G__54565,G__54566,G__54567,G__54568,G__54569,G__54570) : fexpr__54564.call(null,G__54565,G__54566,G__54567,G__54568,G__54569,G__54570));
}catch (e54563){if((e54563 instanceof Error)){
var e__10000__auto__ = e54563;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10000__auto__,this$);
} else {
throw e54563;

}
}}),stack);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__54573 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54574 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54575 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54576 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54577 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54578 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54579 = sci.impl.types.eval(arg6,ctx,bindings);
var fexpr__54572 = (bindings[idx]);
return (fexpr__54572.cljs$core$IFn$_invoke$arity$7 ? fexpr__54572.cljs$core$IFn$_invoke$arity$7(G__54573,G__54574,G__54575,G__54576,G__54577,G__54578,G__54579) : fexpr__54572.call(null,G__54573,G__54574,G__54575,G__54576,G__54577,G__54578,G__54579));
}catch (e54571){if((e54571 instanceof Error)){
var e__10000__auto__ = e54571;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10000__auto__,this$);
} else {
throw e54571;

}
}}),stack);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__54586 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54587 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54588 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54589 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54590 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54591 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54592 = sci.impl.types.eval(arg6,ctx,bindings);
var G__54593 = sci.impl.types.eval(arg7,ctx,bindings);
var fexpr__54585 = (bindings[idx]);
return (fexpr__54585.cljs$core$IFn$_invoke$arity$8 ? fexpr__54585.cljs$core$IFn$_invoke$arity$8(G__54586,G__54587,G__54588,G__54589,G__54590,G__54591,G__54592,G__54593) : fexpr__54585.call(null,G__54586,G__54587,G__54588,G__54589,G__54590,G__54591,G__54592,G__54593));
}catch (e54584){if((e54584 instanceof Error)){
var e__10000__auto__ = e54584;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10000__auto__,this$);
} else {
throw e54584;

}
}}),stack);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__54596 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54597 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54598 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54599 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54600 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54601 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54602 = sci.impl.types.eval(arg6,ctx,bindings);
var G__54603 = sci.impl.types.eval(arg7,ctx,bindings);
var G__54604 = sci.impl.types.eval(arg8,ctx,bindings);
var fexpr__54595 = (bindings[idx]);
return (fexpr__54595.cljs$core$IFn$_invoke$arity$9 ? fexpr__54595.cljs$core$IFn$_invoke$arity$9(G__54596,G__54597,G__54598,G__54599,G__54600,G__54601,G__54602,G__54603,G__54604) : fexpr__54595.call(null,G__54596,G__54597,G__54598,G__54599,G__54600,G__54601,G__54602,G__54603,G__54604));
}catch (e54594){if((e54594 instanceof Error)){
var e__10000__auto__ = e54594;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10000__auto__,this$);
} else {
throw e54594;

}
}}),stack);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__54612 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54613 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54614 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54615 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54616 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54617 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54618 = sci.impl.types.eval(arg6,ctx,bindings);
var G__54619 = sci.impl.types.eval(arg7,ctx,bindings);
var G__54620 = sci.impl.types.eval(arg8,ctx,bindings);
var G__54621 = sci.impl.types.eval(arg9,ctx,bindings);
var fexpr__54611 = (bindings[idx]);
return (fexpr__54611.cljs$core$IFn$_invoke$arity$10 ? fexpr__54611.cljs$core$IFn$_invoke$arity$10(G__54612,G__54613,G__54614,G__54615,G__54616,G__54617,G__54618,G__54619,G__54620,G__54621) : fexpr__54611.call(null,G__54612,G__54613,G__54614,G__54615,G__54616,G__54617,G__54618,G__54619,G__54620,G__54621));
}catch (e54610){if((e54610 instanceof Error)){
var e__10000__auto__ = e54610;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10000__auto__,this$);
} else {
throw e54610;

}
}}),stack);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__54624 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54625 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54626 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54627 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54628 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54629 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54630 = sci.impl.types.eval(arg6,ctx,bindings);
var G__54631 = sci.impl.types.eval(arg7,ctx,bindings);
var G__54632 = sci.impl.types.eval(arg8,ctx,bindings);
var G__54633 = sci.impl.types.eval(arg9,ctx,bindings);
var G__54634 = sci.impl.types.eval(arg10,ctx,bindings);
var fexpr__54623 = (bindings[idx]);
return (fexpr__54623.cljs$core$IFn$_invoke$arity$11 ? fexpr__54623.cljs$core$IFn$_invoke$arity$11(G__54624,G__54625,G__54626,G__54627,G__54628,G__54629,G__54630,G__54631,G__54632,G__54633,G__54634) : fexpr__54623.call(null,G__54624,G__54625,G__54626,G__54627,G__54628,G__54629,G__54630,G__54631,G__54632,G__54633,G__54634));
}catch (e54622){if((e54622 instanceof Error)){
var e__10000__auto__ = e54622;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10000__auto__,this$);
} else {
throw e54622;

}
}}),stack);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__54640 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54641 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54642 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54643 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54644 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54645 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54646 = sci.impl.types.eval(arg6,ctx,bindings);
var G__54647 = sci.impl.types.eval(arg7,ctx,bindings);
var G__54648 = sci.impl.types.eval(arg8,ctx,bindings);
var G__54649 = sci.impl.types.eval(arg9,ctx,bindings);
var G__54650 = sci.impl.types.eval(arg10,ctx,bindings);
var G__54651 = sci.impl.types.eval(arg11,ctx,bindings);
var fexpr__54639 = (bindings[idx]);
return (fexpr__54639.cljs$core$IFn$_invoke$arity$12 ? fexpr__54639.cljs$core$IFn$_invoke$arity$12(G__54640,G__54641,G__54642,G__54643,G__54644,G__54645,G__54646,G__54647,G__54648,G__54649,G__54650,G__54651) : fexpr__54639.call(null,G__54640,G__54641,G__54642,G__54643,G__54644,G__54645,G__54646,G__54647,G__54648,G__54649,G__54650,G__54651));
}catch (e54638){if((e54638 instanceof Error)){
var e__10000__auto__ = e54638;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10000__auto__,this$);
} else {
throw e54638;

}
}}),stack);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__54659 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54660 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54661 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54662 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54663 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54664 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54665 = sci.impl.types.eval(arg6,ctx,bindings);
var G__54666 = sci.impl.types.eval(arg7,ctx,bindings);
var G__54667 = sci.impl.types.eval(arg8,ctx,bindings);
var G__54668 = sci.impl.types.eval(arg9,ctx,bindings);
var G__54669 = sci.impl.types.eval(arg10,ctx,bindings);
var G__54670 = sci.impl.types.eval(arg11,ctx,bindings);
var G__54671 = sci.impl.types.eval(arg12,ctx,bindings);
var fexpr__54658 = (bindings[idx]);
return (fexpr__54658.cljs$core$IFn$_invoke$arity$13 ? fexpr__54658.cljs$core$IFn$_invoke$arity$13(G__54659,G__54660,G__54661,G__54662,G__54663,G__54664,G__54665,G__54666,G__54667,G__54668,G__54669,G__54670,G__54671) : fexpr__54658.call(null,G__54659,G__54660,G__54661,G__54662,G__54663,G__54664,G__54665,G__54666,G__54667,G__54668,G__54669,G__54670,G__54671));
}catch (e54657){if((e54657 instanceof Error)){
var e__10000__auto__ = e54657;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10000__auto__,this$);
} else {
throw e54657;

}
}}),stack);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__54680 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54681 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54682 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54683 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54684 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54685 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54686 = sci.impl.types.eval(arg6,ctx,bindings);
var G__54687 = sci.impl.types.eval(arg7,ctx,bindings);
var G__54688 = sci.impl.types.eval(arg8,ctx,bindings);
var G__54689 = sci.impl.types.eval(arg9,ctx,bindings);
var G__54690 = sci.impl.types.eval(arg10,ctx,bindings);
var G__54691 = sci.impl.types.eval(arg11,ctx,bindings);
var G__54692 = sci.impl.types.eval(arg12,ctx,bindings);
var G__54693 = sci.impl.types.eval(arg13,ctx,bindings);
var fexpr__54679 = (bindings[idx]);
return (fexpr__54679.cljs$core$IFn$_invoke$arity$14 ? fexpr__54679.cljs$core$IFn$_invoke$arity$14(G__54680,G__54681,G__54682,G__54683,G__54684,G__54685,G__54686,G__54687,G__54688,G__54689,G__54690,G__54691,G__54692,G__54693) : fexpr__54679.call(null,G__54680,G__54681,G__54682,G__54683,G__54684,G__54685,G__54686,G__54687,G__54688,G__54689,G__54690,G__54691,G__54692,G__54693));
}catch (e54678){if((e54678 instanceof Error)){
var e__10000__auto__ = e54678;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10000__auto__,this$);
} else {
throw e54678;

}
}}),stack);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__54703 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54704 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54705 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54706 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54707 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54708 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54709 = sci.impl.types.eval(arg6,ctx,bindings);
var G__54710 = sci.impl.types.eval(arg7,ctx,bindings);
var G__54711 = sci.impl.types.eval(arg8,ctx,bindings);
var G__54712 = sci.impl.types.eval(arg9,ctx,bindings);
var G__54713 = sci.impl.types.eval(arg10,ctx,bindings);
var G__54714 = sci.impl.types.eval(arg11,ctx,bindings);
var G__54715 = sci.impl.types.eval(arg12,ctx,bindings);
var G__54716 = sci.impl.types.eval(arg13,ctx,bindings);
var G__54717 = sci.impl.types.eval(arg14,ctx,bindings);
var fexpr__54702 = (bindings[idx]);
return (fexpr__54702.cljs$core$IFn$_invoke$arity$15 ? fexpr__54702.cljs$core$IFn$_invoke$arity$15(G__54703,G__54704,G__54705,G__54706,G__54707,G__54708,G__54709,G__54710,G__54711,G__54712,G__54713,G__54714,G__54715,G__54716,G__54717) : fexpr__54702.call(null,G__54703,G__54704,G__54705,G__54706,G__54707,G__54708,G__54709,G__54710,G__54711,G__54712,G__54713,G__54714,G__54715,G__54716,G__54717));
}catch (e54701){if((e54701 instanceof Error)){
var e__10000__auto__ = e54701;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10000__auto__,this$);
} else {
throw e54701;

}
}}),stack);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__54720 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54721 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54722 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54723 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54724 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54725 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54726 = sci.impl.types.eval(arg6,ctx,bindings);
var G__54727 = sci.impl.types.eval(arg7,ctx,bindings);
var G__54728 = sci.impl.types.eval(arg8,ctx,bindings);
var G__54729 = sci.impl.types.eval(arg9,ctx,bindings);
var G__54730 = sci.impl.types.eval(arg10,ctx,bindings);
var G__54731 = sci.impl.types.eval(arg11,ctx,bindings);
var G__54732 = sci.impl.types.eval(arg12,ctx,bindings);
var G__54733 = sci.impl.types.eval(arg13,ctx,bindings);
var G__54734 = sci.impl.types.eval(arg14,ctx,bindings);
var G__54735 = sci.impl.types.eval(arg15,ctx,bindings);
var fexpr__54719 = (bindings[idx]);
return (fexpr__54719.cljs$core$IFn$_invoke$arity$16 ? fexpr__54719.cljs$core$IFn$_invoke$arity$16(G__54720,G__54721,G__54722,G__54723,G__54724,G__54725,G__54726,G__54727,G__54728,G__54729,G__54730,G__54731,G__54732,G__54733,G__54734,G__54735) : fexpr__54719.call(null,G__54720,G__54721,G__54722,G__54723,G__54724,G__54725,G__54726,G__54727,G__54728,G__54729,G__54730,G__54731,G__54732,G__54733,G__54734,G__54735));
}catch (e54718){if((e54718 instanceof Error)){
var e__10000__auto__ = e54718;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10000__auto__,this$);
} else {
throw e54718;

}
}}),stack);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__54739 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54740 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54741 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54742 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54743 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54744 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54745 = sci.impl.types.eval(arg6,ctx,bindings);
var G__54746 = sci.impl.types.eval(arg7,ctx,bindings);
var G__54747 = sci.impl.types.eval(arg8,ctx,bindings);
var G__54748 = sci.impl.types.eval(arg9,ctx,bindings);
var G__54749 = sci.impl.types.eval(arg10,ctx,bindings);
var G__54750 = sci.impl.types.eval(arg11,ctx,bindings);
var G__54751 = sci.impl.types.eval(arg12,ctx,bindings);
var G__54752 = sci.impl.types.eval(arg13,ctx,bindings);
var G__54753 = sci.impl.types.eval(arg14,ctx,bindings);
var G__54754 = sci.impl.types.eval(arg15,ctx,bindings);
var G__54755 = sci.impl.types.eval(arg16,ctx,bindings);
var fexpr__54738 = (bindings[idx]);
return (fexpr__54738.cljs$core$IFn$_invoke$arity$17 ? fexpr__54738.cljs$core$IFn$_invoke$arity$17(G__54739,G__54740,G__54741,G__54742,G__54743,G__54744,G__54745,G__54746,G__54747,G__54748,G__54749,G__54750,G__54751,G__54752,G__54753,G__54754,G__54755) : fexpr__54738.call(null,G__54739,G__54740,G__54741,G__54742,G__54743,G__54744,G__54745,G__54746,G__54747,G__54748,G__54749,G__54750,G__54751,G__54752,G__54753,G__54754,G__54755));
}catch (e54737){if((e54737 instanceof Error)){
var e__10000__auto__ = e54737;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10000__auto__,this$);
} else {
throw e54737;

}
}}),stack);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__54762 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54763 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54764 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54765 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54766 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54767 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54768 = sci.impl.types.eval(arg6,ctx,bindings);
var G__54769 = sci.impl.types.eval(arg7,ctx,bindings);
var G__54770 = sci.impl.types.eval(arg8,ctx,bindings);
var G__54771 = sci.impl.types.eval(arg9,ctx,bindings);
var G__54772 = sci.impl.types.eval(arg10,ctx,bindings);
var G__54773 = sci.impl.types.eval(arg11,ctx,bindings);
var G__54774 = sci.impl.types.eval(arg12,ctx,bindings);
var G__54775 = sci.impl.types.eval(arg13,ctx,bindings);
var G__54776 = sci.impl.types.eval(arg14,ctx,bindings);
var G__54777 = sci.impl.types.eval(arg15,ctx,bindings);
var G__54778 = sci.impl.types.eval(arg16,ctx,bindings);
var G__54779 = sci.impl.types.eval(arg17,ctx,bindings);
var fexpr__54761 = (bindings[idx]);
return (fexpr__54761.cljs$core$IFn$_invoke$arity$18 ? fexpr__54761.cljs$core$IFn$_invoke$arity$18(G__54762,G__54763,G__54764,G__54765,G__54766,G__54767,G__54768,G__54769,G__54770,G__54771,G__54772,G__54773,G__54774,G__54775,G__54776,G__54777,G__54778,G__54779) : fexpr__54761.call(null,G__54762,G__54763,G__54764,G__54765,G__54766,G__54767,G__54768,G__54769,G__54770,G__54771,G__54772,G__54773,G__54774,G__54775,G__54776,G__54777,G__54778,G__54779));
}catch (e54760){if((e54760 instanceof Error)){
var e__10000__auto__ = e54760;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10000__auto__,this$);
} else {
throw e54760;

}
}}),stack);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__54789 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54790 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54791 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54792 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54793 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54794 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54795 = sci.impl.types.eval(arg6,ctx,bindings);
var G__54796 = sci.impl.types.eval(arg7,ctx,bindings);
var G__54797 = sci.impl.types.eval(arg8,ctx,bindings);
var G__54798 = sci.impl.types.eval(arg9,ctx,bindings);
var G__54799 = sci.impl.types.eval(arg10,ctx,bindings);
var G__54800 = sci.impl.types.eval(arg11,ctx,bindings);
var G__54801 = sci.impl.types.eval(arg12,ctx,bindings);
var G__54802 = sci.impl.types.eval(arg13,ctx,bindings);
var G__54803 = sci.impl.types.eval(arg14,ctx,bindings);
var G__54804 = sci.impl.types.eval(arg15,ctx,bindings);
var G__54805 = sci.impl.types.eval(arg16,ctx,bindings);
var G__54806 = sci.impl.types.eval(arg17,ctx,bindings);
var G__54807 = sci.impl.types.eval(arg18,ctx,bindings);
var fexpr__54788 = (bindings[idx]);
return (fexpr__54788.cljs$core$IFn$_invoke$arity$19 ? fexpr__54788.cljs$core$IFn$_invoke$arity$19(G__54789,G__54790,G__54791,G__54792,G__54793,G__54794,G__54795,G__54796,G__54797,G__54798,G__54799,G__54800,G__54801,G__54802,G__54803,G__54804,G__54805,G__54806,G__54807) : fexpr__54788.call(null,G__54789,G__54790,G__54791,G__54792,G__54793,G__54794,G__54795,G__54796,G__54797,G__54798,G__54799,G__54800,G__54801,G__54802,G__54803,G__54804,G__54805,G__54806,G__54807));
}catch (e54787){if((e54787 instanceof Error)){
var e__10000__auto__ = e54787;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10000__auto__,this$);
} else {
throw e54787;

}
}}),stack);

break;
default:
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,(bindings[idx]),analyzed_children);
});

}
});
sci.impl.analyzer.return_needs_ctx_call = (function sci$impl$analyzer$return_needs_ctx_call(_ctx,expr,f,analyzed_children){
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns)], 0));
var G__54812 = cljs.core.count(analyzed_children);
switch (G__54812) {
case (0):
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(ctx) : f.call(null,ctx));
}),stack);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__54813 = ctx;
var G__54814 = sci.impl.types.eval(arg0,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__54813,G__54814) : f.call(null,G__54813,G__54814));
}),stack);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__54815 = ctx;
var G__54816 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54817 = sci.impl.types.eval(arg1,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__54815,G__54816,G__54817) : f.call(null,G__54815,G__54816,G__54817));
}),stack);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__54818 = ctx;
var G__54819 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54820 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54821 = sci.impl.types.eval(arg2,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__54818,G__54819,G__54820,G__54821) : f.call(null,G__54818,G__54819,G__54820,G__54821));
}),stack);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__54822 = ctx;
var G__54823 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54824 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54825 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54826 = sci.impl.types.eval(arg3,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__54822,G__54823,G__54824,G__54825,G__54826) : f.call(null,G__54822,G__54823,G__54824,G__54825,G__54826));
}),stack);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__54827 = ctx;
var G__54828 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54829 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54830 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54831 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54832 = sci.impl.types.eval(arg4,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__54827,G__54828,G__54829,G__54830,G__54831,G__54832) : f.call(null,G__54827,G__54828,G__54829,G__54830,G__54831,G__54832));
}),stack);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__54833 = ctx;
var G__54834 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54835 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54836 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54837 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54838 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54839 = sci.impl.types.eval(arg5,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__54833,G__54834,G__54835,G__54836,G__54837,G__54838,G__54839) : f.call(null,G__54833,G__54834,G__54835,G__54836,G__54837,G__54838,G__54839));
}),stack);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__54840 = ctx;
var G__54841 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54842 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54843 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54844 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54845 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54846 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54847 = sci.impl.types.eval(arg6,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__54840,G__54841,G__54842,G__54843,G__54844,G__54845,G__54846,G__54847) : f.call(null,G__54840,G__54841,G__54842,G__54843,G__54844,G__54845,G__54846,G__54847));
}),stack);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__54848 = ctx;
var G__54849 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54850 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54851 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54852 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54853 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54854 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54855 = sci.impl.types.eval(arg6,ctx,bindings);
var G__54856 = sci.impl.types.eval(arg7,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__54848,G__54849,G__54850,G__54851,G__54852,G__54853,G__54854,G__54855,G__54856) : f.call(null,G__54848,G__54849,G__54850,G__54851,G__54852,G__54853,G__54854,G__54855,G__54856));
}),stack);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__54857 = ctx;
var G__54858 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54859 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54860 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54861 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54862 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54863 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54864 = sci.impl.types.eval(arg6,ctx,bindings);
var G__54865 = sci.impl.types.eval(arg7,ctx,bindings);
var G__54866 = sci.impl.types.eval(arg8,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__54857,G__54858,G__54859,G__54860,G__54861,G__54862,G__54863,G__54864,G__54865,G__54866) : f.call(null,G__54857,G__54858,G__54859,G__54860,G__54861,G__54862,G__54863,G__54864,G__54865,G__54866));
}),stack);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__54871 = ctx;
var G__54872 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54873 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54874 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54875 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54876 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54877 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54878 = sci.impl.types.eval(arg6,ctx,bindings);
var G__54879 = sci.impl.types.eval(arg7,ctx,bindings);
var G__54880 = sci.impl.types.eval(arg8,ctx,bindings);
var G__54881 = sci.impl.types.eval(arg9,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__54871,G__54872,G__54873,G__54874,G__54875,G__54876,G__54877,G__54878,G__54879,G__54880,G__54881) : f.call(null,G__54871,G__54872,G__54873,G__54874,G__54875,G__54876,G__54877,G__54878,G__54879,G__54880,G__54881));
}),stack);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__54883 = ctx;
var G__54884 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54885 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54886 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54887 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54888 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54889 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54890 = sci.impl.types.eval(arg6,ctx,bindings);
var G__54891 = sci.impl.types.eval(arg7,ctx,bindings);
var G__54892 = sci.impl.types.eval(arg8,ctx,bindings);
var G__54893 = sci.impl.types.eval(arg9,ctx,bindings);
var G__54894 = sci.impl.types.eval(arg10,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__54883,G__54884,G__54885,G__54886,G__54887,G__54888,G__54889,G__54890,G__54891,G__54892,G__54893,G__54894) : f.call(null,G__54883,G__54884,G__54885,G__54886,G__54887,G__54888,G__54889,G__54890,G__54891,G__54892,G__54893,G__54894));
}),stack);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__54895 = ctx;
var G__54896 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54897 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54898 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54899 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54900 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54901 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54902 = sci.impl.types.eval(arg6,ctx,bindings);
var G__54903 = sci.impl.types.eval(arg7,ctx,bindings);
var G__54904 = sci.impl.types.eval(arg8,ctx,bindings);
var G__54905 = sci.impl.types.eval(arg9,ctx,bindings);
var G__54906 = sci.impl.types.eval(arg10,ctx,bindings);
var G__54907 = sci.impl.types.eval(arg11,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__54895,G__54896,G__54897,G__54898,G__54899,G__54900,G__54901,G__54902,G__54903,G__54904,G__54905,G__54906,G__54907) : f.call(null,G__54895,G__54896,G__54897,G__54898,G__54899,G__54900,G__54901,G__54902,G__54903,G__54904,G__54905,G__54906,G__54907));
}),stack);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__54909 = ctx;
var G__54910 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54911 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54912 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54913 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54914 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54915 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54916 = sci.impl.types.eval(arg6,ctx,bindings);
var G__54917 = sci.impl.types.eval(arg7,ctx,bindings);
var G__54918 = sci.impl.types.eval(arg8,ctx,bindings);
var G__54919 = sci.impl.types.eval(arg9,ctx,bindings);
var G__54920 = sci.impl.types.eval(arg10,ctx,bindings);
var G__54921 = sci.impl.types.eval(arg11,ctx,bindings);
var G__54922 = sci.impl.types.eval(arg12,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__54909,G__54910,G__54911,G__54912,G__54913,G__54914,G__54915,G__54916,G__54917,G__54918,G__54919,G__54920,G__54921,G__54922) : f.call(null,G__54909,G__54910,G__54911,G__54912,G__54913,G__54914,G__54915,G__54916,G__54917,G__54918,G__54919,G__54920,G__54921,G__54922));
}),stack);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__54927 = ctx;
var G__54928 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54929 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54930 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54931 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54932 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54933 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54934 = sci.impl.types.eval(arg6,ctx,bindings);
var G__54935 = sci.impl.types.eval(arg7,ctx,bindings);
var G__54936 = sci.impl.types.eval(arg8,ctx,bindings);
var G__54937 = sci.impl.types.eval(arg9,ctx,bindings);
var G__54938 = sci.impl.types.eval(arg10,ctx,bindings);
var G__54939 = sci.impl.types.eval(arg11,ctx,bindings);
var G__54940 = sci.impl.types.eval(arg12,ctx,bindings);
var G__54941 = sci.impl.types.eval(arg13,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__54927,G__54928,G__54929,G__54930,G__54931,G__54932,G__54933,G__54934,G__54935,G__54936,G__54937,G__54938,G__54939,G__54940,G__54941) : f.call(null,G__54927,G__54928,G__54929,G__54930,G__54931,G__54932,G__54933,G__54934,G__54935,G__54936,G__54937,G__54938,G__54939,G__54940,G__54941));
}),stack);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__54944 = ctx;
var G__54945 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54946 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54947 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54948 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54949 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54950 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54951 = sci.impl.types.eval(arg6,ctx,bindings);
var G__54952 = sci.impl.types.eval(arg7,ctx,bindings);
var G__54953 = sci.impl.types.eval(arg8,ctx,bindings);
var G__54954 = sci.impl.types.eval(arg9,ctx,bindings);
var G__54955 = sci.impl.types.eval(arg10,ctx,bindings);
var G__54956 = sci.impl.types.eval(arg11,ctx,bindings);
var G__54957 = sci.impl.types.eval(arg12,ctx,bindings);
var G__54958 = sci.impl.types.eval(arg13,ctx,bindings);
var G__54959 = sci.impl.types.eval(arg14,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__54944,G__54945,G__54946,G__54947,G__54948,G__54949,G__54950,G__54951,G__54952,G__54953,G__54954,G__54955,G__54956,G__54957,G__54958,G__54959) : f.call(null,G__54944,G__54945,G__54946,G__54947,G__54948,G__54949,G__54950,G__54951,G__54952,G__54953,G__54954,G__54955,G__54956,G__54957,G__54958,G__54959));
}),stack);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__54960 = ctx;
var G__54961 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54962 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54963 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54964 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54965 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54966 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54967 = sci.impl.types.eval(arg6,ctx,bindings);
var G__54968 = sci.impl.types.eval(arg7,ctx,bindings);
var G__54969 = sci.impl.types.eval(arg8,ctx,bindings);
var G__54970 = sci.impl.types.eval(arg9,ctx,bindings);
var G__54971 = sci.impl.types.eval(arg10,ctx,bindings);
var G__54972 = sci.impl.types.eval(arg11,ctx,bindings);
var G__54973 = sci.impl.types.eval(arg12,ctx,bindings);
var G__54974 = sci.impl.types.eval(arg13,ctx,bindings);
var G__54975 = sci.impl.types.eval(arg14,ctx,bindings);
var G__54976 = sci.impl.types.eval(arg15,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__54960,G__54961,G__54962,G__54963,G__54964,G__54965,G__54966,G__54967,G__54968,G__54969,G__54970,G__54971,G__54972,G__54973,G__54974,G__54975,G__54976) : f.call(null,G__54960,G__54961,G__54962,G__54963,G__54964,G__54965,G__54966,G__54967,G__54968,G__54969,G__54970,G__54971,G__54972,G__54973,G__54974,G__54975,G__54976));
}),stack);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__54979 = ctx;
var G__54980 = sci.impl.types.eval(arg0,ctx,bindings);
var G__54981 = sci.impl.types.eval(arg1,ctx,bindings);
var G__54982 = sci.impl.types.eval(arg2,ctx,bindings);
var G__54983 = sci.impl.types.eval(arg3,ctx,bindings);
var G__54984 = sci.impl.types.eval(arg4,ctx,bindings);
var G__54985 = sci.impl.types.eval(arg5,ctx,bindings);
var G__54986 = sci.impl.types.eval(arg6,ctx,bindings);
var G__54987 = sci.impl.types.eval(arg7,ctx,bindings);
var G__54988 = sci.impl.types.eval(arg8,ctx,bindings);
var G__54989 = sci.impl.types.eval(arg9,ctx,bindings);
var G__54990 = sci.impl.types.eval(arg10,ctx,bindings);
var G__54991 = sci.impl.types.eval(arg11,ctx,bindings);
var G__54992 = sci.impl.types.eval(arg12,ctx,bindings);
var G__54993 = sci.impl.types.eval(arg13,ctx,bindings);
var G__54994 = sci.impl.types.eval(arg14,ctx,bindings);
var G__54995 = sci.impl.types.eval(arg15,ctx,bindings);
var G__54996 = sci.impl.types.eval(arg16,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__54979,G__54980,G__54981,G__54982,G__54983,G__54984,G__54985,G__54986,G__54987,G__54988,G__54989,G__54990,G__54991,G__54992,G__54993,G__54994,G__54995,G__54996) : f.call(null,G__54979,G__54980,G__54981,G__54982,G__54983,G__54984,G__54985,G__54986,G__54987,G__54988,G__54989,G__54990,G__54991,G__54992,G__54993,G__54994,G__54995,G__54996));
}),stack);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__54999 = ctx;
var G__55000 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55001 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55002 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55003 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55004 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55005 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55006 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55007 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55008 = sci.impl.types.eval(arg8,ctx,bindings);
var G__55009 = sci.impl.types.eval(arg9,ctx,bindings);
var G__55010 = sci.impl.types.eval(arg10,ctx,bindings);
var G__55011 = sci.impl.types.eval(arg11,ctx,bindings);
var G__55012 = sci.impl.types.eval(arg12,ctx,bindings);
var G__55013 = sci.impl.types.eval(arg13,ctx,bindings);
var G__55014 = sci.impl.types.eval(arg14,ctx,bindings);
var G__55015 = sci.impl.types.eval(arg15,ctx,bindings);
var G__55016 = sci.impl.types.eval(arg16,ctx,bindings);
var G__55017 = sci.impl.types.eval(arg17,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__54999,G__55000,G__55001,G__55002,G__55003,G__55004,G__55005,G__55006,G__55007,G__55008,G__55009,G__55010,G__55011,G__55012,G__55013,G__55014,G__55015,G__55016,G__55017) : f.call(null,G__54999,G__55000,G__55001,G__55002,G__55003,G__55004,G__55005,G__55006,G__55007,G__55008,G__55009,G__55010,G__55011,G__55012,G__55013,G__55014,G__55015,G__55016,G__55017));
}),stack);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__55018 = ctx;
var G__55019 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55020 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55021 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55022 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55023 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55024 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55025 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55026 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55027 = sci.impl.types.eval(arg8,ctx,bindings);
var G__55028 = sci.impl.types.eval(arg9,ctx,bindings);
var G__55029 = sci.impl.types.eval(arg10,ctx,bindings);
var G__55030 = sci.impl.types.eval(arg11,ctx,bindings);
var G__55031 = sci.impl.types.eval(arg12,ctx,bindings);
var G__55032 = sci.impl.types.eval(arg13,ctx,bindings);
var G__55033 = sci.impl.types.eval(arg14,ctx,bindings);
var G__55034 = sci.impl.types.eval(arg15,ctx,bindings);
var G__55035 = sci.impl.types.eval(arg16,ctx,bindings);
var G__55036 = sci.impl.types.eval(arg17,ctx,bindings);
var G__55037 = sci.impl.types.eval(arg18,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__55018,G__55019,G__55020,G__55021,G__55022,G__55023,G__55024,G__55025,G__55026,G__55027,G__55028,G__55029,G__55030,G__55031,G__55032,G__55033,G__55034,G__55035,G__55036,G__55037) : f.call(null,G__55018,G__55019,G__55020,G__55021,G__55022,G__55023,G__55024,G__55025,G__55026,G__55027,G__55028,G__55029,G__55030,G__55031,G__55032,G__55033,G__55034,G__55035,G__55036,G__55037));
}),stack);

break;
default:
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,cljs.core.cons(ctx,analyzed_children));
}),stack);

}
});
sci.impl.analyzer.return_call = (function sci$impl$analyzer$return_call(_ctx,expr,f,analyzed_children,stack,wrap){
var G__55052 = cljs.core.count(analyzed_children);
switch (G__55052) {
case (0):
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var fexpr__55054 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__55054.cljs$core$IFn$_invoke$arity$0 ? fexpr__55054.cljs$core$IFn$_invoke$arity$0() : fexpr__55054.call(null));
}catch (e55053){if((e55053 instanceof Error)){
var e__10123__auto__ = e55053;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55053;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}catch (e55055){if((e55055 instanceof Error)){
var e__10123__auto__ = e55055;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55055;

}
}}),stack);
}

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55058 = sci.impl.types.eval(arg0,ctx,bindings);
var fexpr__55057 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__55057.cljs$core$IFn$_invoke$arity$1 ? fexpr__55057.cljs$core$IFn$_invoke$arity$1(G__55058) : fexpr__55057.call(null,G__55058));
}catch (e55056){if((e55056 instanceof Error)){
var e__10123__auto__ = e55056;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55056;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55063 = sci.impl.types.eval(arg0,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__55063) : f.call(null,G__55063));
}catch (e55062){if((e55062 instanceof Error)){
var e__10123__auto__ = e55062;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55062;

}
}}),stack);
}

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55066 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55067 = sci.impl.types.eval(arg1,ctx,bindings);
var fexpr__55065 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__55065.cljs$core$IFn$_invoke$arity$2 ? fexpr__55065.cljs$core$IFn$_invoke$arity$2(G__55066,G__55067) : fexpr__55065.call(null,G__55066,G__55067));
}catch (e55064){if((e55064 instanceof Error)){
var e__10123__auto__ = e55064;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55064;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55069 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55070 = sci.impl.types.eval(arg1,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__55069,G__55070) : f.call(null,G__55069,G__55070));
}catch (e55068){if((e55068 instanceof Error)){
var e__10123__auto__ = e55068;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55068;

}
}}),stack);
}

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55073 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55074 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55075 = sci.impl.types.eval(arg2,ctx,bindings);
var fexpr__55072 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__55072.cljs$core$IFn$_invoke$arity$3 ? fexpr__55072.cljs$core$IFn$_invoke$arity$3(G__55073,G__55074,G__55075) : fexpr__55072.call(null,G__55073,G__55074,G__55075));
}catch (e55071){if((e55071 instanceof Error)){
var e__10123__auto__ = e55071;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55071;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55079 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55080 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55081 = sci.impl.types.eval(arg2,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__55079,G__55080,G__55081) : f.call(null,G__55079,G__55080,G__55081));
}catch (e55077){if((e55077 instanceof Error)){
var e__10123__auto__ = e55077;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55077;

}
}}),stack);
}

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55084 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55085 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55086 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55087 = sci.impl.types.eval(arg3,ctx,bindings);
var fexpr__55083 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__55083.cljs$core$IFn$_invoke$arity$4 ? fexpr__55083.cljs$core$IFn$_invoke$arity$4(G__55084,G__55085,G__55086,G__55087) : fexpr__55083.call(null,G__55084,G__55085,G__55086,G__55087));
}catch (e55082){if((e55082 instanceof Error)){
var e__10123__auto__ = e55082;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55082;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55089 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55090 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55091 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55092 = sci.impl.types.eval(arg3,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__55089,G__55090,G__55091,G__55092) : f.call(null,G__55089,G__55090,G__55091,G__55092));
}catch (e55088){if((e55088 instanceof Error)){
var e__10123__auto__ = e55088;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55088;

}
}}),stack);
}

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55095 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55096 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55097 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55098 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55099 = sci.impl.types.eval(arg4,ctx,bindings);
var fexpr__55094 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__55094.cljs$core$IFn$_invoke$arity$5 ? fexpr__55094.cljs$core$IFn$_invoke$arity$5(G__55095,G__55096,G__55097,G__55098,G__55099) : fexpr__55094.call(null,G__55095,G__55096,G__55097,G__55098,G__55099));
}catch (e55093){if((e55093 instanceof Error)){
var e__10123__auto__ = e55093;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55093;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55101 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55102 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55103 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55104 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55105 = sci.impl.types.eval(arg4,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__55101,G__55102,G__55103,G__55104,G__55105) : f.call(null,G__55101,G__55102,G__55103,G__55104,G__55105));
}catch (e55100){if((e55100 instanceof Error)){
var e__10123__auto__ = e55100;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55100;

}
}}),stack);
}

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55108 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55109 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55110 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55111 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55112 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55113 = sci.impl.types.eval(arg5,ctx,bindings);
var fexpr__55107 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__55107.cljs$core$IFn$_invoke$arity$6 ? fexpr__55107.cljs$core$IFn$_invoke$arity$6(G__55108,G__55109,G__55110,G__55111,G__55112,G__55113) : fexpr__55107.call(null,G__55108,G__55109,G__55110,G__55111,G__55112,G__55113));
}catch (e55106){if((e55106 instanceof Error)){
var e__10123__auto__ = e55106;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55106;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55118 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55119 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55120 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55121 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55122 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55123 = sci.impl.types.eval(arg5,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__55118,G__55119,G__55120,G__55121,G__55122,G__55123) : f.call(null,G__55118,G__55119,G__55120,G__55121,G__55122,G__55123));
}catch (e55114){if((e55114 instanceof Error)){
var e__10123__auto__ = e55114;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55114;

}
}}),stack);
}

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55126 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55127 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55128 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55129 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55130 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55131 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55132 = sci.impl.types.eval(arg6,ctx,bindings);
var fexpr__55125 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__55125.cljs$core$IFn$_invoke$arity$7 ? fexpr__55125.cljs$core$IFn$_invoke$arity$7(G__55126,G__55127,G__55128,G__55129,G__55130,G__55131,G__55132) : fexpr__55125.call(null,G__55126,G__55127,G__55128,G__55129,G__55130,G__55131,G__55132));
}catch (e55124){if((e55124 instanceof Error)){
var e__10123__auto__ = e55124;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55124;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55134 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55135 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55136 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55137 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55138 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55139 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55140 = sci.impl.types.eval(arg6,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__55134,G__55135,G__55136,G__55137,G__55138,G__55139,G__55140) : f.call(null,G__55134,G__55135,G__55136,G__55137,G__55138,G__55139,G__55140));
}catch (e55133){if((e55133 instanceof Error)){
var e__10123__auto__ = e55133;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55133;

}
}}),stack);
}

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55147 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55148 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55149 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55150 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55151 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55152 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55153 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55154 = sci.impl.types.eval(arg7,ctx,bindings);
var fexpr__55146 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__55146.cljs$core$IFn$_invoke$arity$8 ? fexpr__55146.cljs$core$IFn$_invoke$arity$8(G__55147,G__55148,G__55149,G__55150,G__55151,G__55152,G__55153,G__55154) : fexpr__55146.call(null,G__55147,G__55148,G__55149,G__55150,G__55151,G__55152,G__55153,G__55154));
}catch (e55145){if((e55145 instanceof Error)){
var e__10123__auto__ = e55145;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55145;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55156 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55157 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55158 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55159 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55160 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55161 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55162 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55163 = sci.impl.types.eval(arg7,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__55156,G__55157,G__55158,G__55159,G__55160,G__55161,G__55162,G__55163) : f.call(null,G__55156,G__55157,G__55158,G__55159,G__55160,G__55161,G__55162,G__55163));
}catch (e55155){if((e55155 instanceof Error)){
var e__10123__auto__ = e55155;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55155;

}
}}),stack);
}

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55166 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55167 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55168 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55169 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55170 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55171 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55172 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55173 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55174 = sci.impl.types.eval(arg8,ctx,bindings);
var fexpr__55165 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__55165.cljs$core$IFn$_invoke$arity$9 ? fexpr__55165.cljs$core$IFn$_invoke$arity$9(G__55166,G__55167,G__55168,G__55169,G__55170,G__55171,G__55172,G__55173,G__55174) : fexpr__55165.call(null,G__55166,G__55167,G__55168,G__55169,G__55170,G__55171,G__55172,G__55173,G__55174));
}catch (e55164){if((e55164 instanceof Error)){
var e__10123__auto__ = e55164;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55164;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55180 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55181 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55182 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55183 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55184 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55185 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55186 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55187 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55188 = sci.impl.types.eval(arg8,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__55180,G__55181,G__55182,G__55183,G__55184,G__55185,G__55186,G__55187,G__55188) : f.call(null,G__55180,G__55181,G__55182,G__55183,G__55184,G__55185,G__55186,G__55187,G__55188));
}catch (e55175){if((e55175 instanceof Error)){
var e__10123__auto__ = e55175;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55175;

}
}}),stack);
}

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55191 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55192 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55193 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55194 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55195 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55196 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55197 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55198 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55199 = sci.impl.types.eval(arg8,ctx,bindings);
var G__55200 = sci.impl.types.eval(arg9,ctx,bindings);
var fexpr__55190 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__55190.cljs$core$IFn$_invoke$arity$10 ? fexpr__55190.cljs$core$IFn$_invoke$arity$10(G__55191,G__55192,G__55193,G__55194,G__55195,G__55196,G__55197,G__55198,G__55199,G__55200) : fexpr__55190.call(null,G__55191,G__55192,G__55193,G__55194,G__55195,G__55196,G__55197,G__55198,G__55199,G__55200));
}catch (e55189){if((e55189 instanceof Error)){
var e__10123__auto__ = e55189;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55189;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55202 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55203 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55204 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55205 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55206 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55207 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55208 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55209 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55210 = sci.impl.types.eval(arg8,ctx,bindings);
var G__55211 = sci.impl.types.eval(arg9,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__55202,G__55203,G__55204,G__55205,G__55206,G__55207,G__55208,G__55209,G__55210,G__55211) : f.call(null,G__55202,G__55203,G__55204,G__55205,G__55206,G__55207,G__55208,G__55209,G__55210,G__55211));
}catch (e55201){if((e55201 instanceof Error)){
var e__10123__auto__ = e55201;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55201;

}
}}),stack);
}

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55214 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55215 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55216 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55217 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55218 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55219 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55220 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55221 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55222 = sci.impl.types.eval(arg8,ctx,bindings);
var G__55223 = sci.impl.types.eval(arg9,ctx,bindings);
var G__55224 = sci.impl.types.eval(arg10,ctx,bindings);
var fexpr__55213 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__55213.cljs$core$IFn$_invoke$arity$11 ? fexpr__55213.cljs$core$IFn$_invoke$arity$11(G__55214,G__55215,G__55216,G__55217,G__55218,G__55219,G__55220,G__55221,G__55222,G__55223,G__55224) : fexpr__55213.call(null,G__55214,G__55215,G__55216,G__55217,G__55218,G__55219,G__55220,G__55221,G__55222,G__55223,G__55224));
}catch (e55212){if((e55212 instanceof Error)){
var e__10123__auto__ = e55212;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55212;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55226 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55227 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55228 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55229 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55230 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55231 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55232 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55233 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55234 = sci.impl.types.eval(arg8,ctx,bindings);
var G__55235 = sci.impl.types.eval(arg9,ctx,bindings);
var G__55236 = sci.impl.types.eval(arg10,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__55226,G__55227,G__55228,G__55229,G__55230,G__55231,G__55232,G__55233,G__55234,G__55235,G__55236) : f.call(null,G__55226,G__55227,G__55228,G__55229,G__55230,G__55231,G__55232,G__55233,G__55234,G__55235,G__55236));
}catch (e55225){if((e55225 instanceof Error)){
var e__10123__auto__ = e55225;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55225;

}
}}),stack);
}

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55242 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55243 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55244 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55245 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55246 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55247 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55248 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55249 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55250 = sci.impl.types.eval(arg8,ctx,bindings);
var G__55251 = sci.impl.types.eval(arg9,ctx,bindings);
var G__55252 = sci.impl.types.eval(arg10,ctx,bindings);
var G__55253 = sci.impl.types.eval(arg11,ctx,bindings);
var fexpr__55241 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__55241.cljs$core$IFn$_invoke$arity$12 ? fexpr__55241.cljs$core$IFn$_invoke$arity$12(G__55242,G__55243,G__55244,G__55245,G__55246,G__55247,G__55248,G__55249,G__55250,G__55251,G__55252,G__55253) : fexpr__55241.call(null,G__55242,G__55243,G__55244,G__55245,G__55246,G__55247,G__55248,G__55249,G__55250,G__55251,G__55252,G__55253));
}catch (e55240){if((e55240 instanceof Error)){
var e__10123__auto__ = e55240;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55240;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55256 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55257 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55258 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55259 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55260 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55261 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55262 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55263 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55264 = sci.impl.types.eval(arg8,ctx,bindings);
var G__55265 = sci.impl.types.eval(arg9,ctx,bindings);
var G__55266 = sci.impl.types.eval(arg10,ctx,bindings);
var G__55267 = sci.impl.types.eval(arg11,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__55256,G__55257,G__55258,G__55259,G__55260,G__55261,G__55262,G__55263,G__55264,G__55265,G__55266,G__55267) : f.call(null,G__55256,G__55257,G__55258,G__55259,G__55260,G__55261,G__55262,G__55263,G__55264,G__55265,G__55266,G__55267));
}catch (e55254){if((e55254 instanceof Error)){
var e__10123__auto__ = e55254;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55254;

}
}}),stack);
}

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55272 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55273 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55274 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55275 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55276 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55277 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55278 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55279 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55280 = sci.impl.types.eval(arg8,ctx,bindings);
var G__55281 = sci.impl.types.eval(arg9,ctx,bindings);
var G__55282 = sci.impl.types.eval(arg10,ctx,bindings);
var G__55283 = sci.impl.types.eval(arg11,ctx,bindings);
var G__55284 = sci.impl.types.eval(arg12,ctx,bindings);
var fexpr__55271 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__55271.cljs$core$IFn$_invoke$arity$13 ? fexpr__55271.cljs$core$IFn$_invoke$arity$13(G__55272,G__55273,G__55274,G__55275,G__55276,G__55277,G__55278,G__55279,G__55280,G__55281,G__55282,G__55283,G__55284) : fexpr__55271.call(null,G__55272,G__55273,G__55274,G__55275,G__55276,G__55277,G__55278,G__55279,G__55280,G__55281,G__55282,G__55283,G__55284));
}catch (e55269){if((e55269 instanceof Error)){
var e__10123__auto__ = e55269;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55269;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55293 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55294 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55295 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55296 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55297 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55298 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55299 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55300 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55301 = sci.impl.types.eval(arg8,ctx,bindings);
var G__55302 = sci.impl.types.eval(arg9,ctx,bindings);
var G__55303 = sci.impl.types.eval(arg10,ctx,bindings);
var G__55304 = sci.impl.types.eval(arg11,ctx,bindings);
var G__55305 = sci.impl.types.eval(arg12,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__55293,G__55294,G__55295,G__55296,G__55297,G__55298,G__55299,G__55300,G__55301,G__55302,G__55303,G__55304,G__55305) : f.call(null,G__55293,G__55294,G__55295,G__55296,G__55297,G__55298,G__55299,G__55300,G__55301,G__55302,G__55303,G__55304,G__55305));
}catch (e55292){if((e55292 instanceof Error)){
var e__10123__auto__ = e55292;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55292;

}
}}),stack);
}

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55318 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55319 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55320 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55321 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55322 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55323 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55324 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55325 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55326 = sci.impl.types.eval(arg8,ctx,bindings);
var G__55327 = sci.impl.types.eval(arg9,ctx,bindings);
var G__55328 = sci.impl.types.eval(arg10,ctx,bindings);
var G__55329 = sci.impl.types.eval(arg11,ctx,bindings);
var G__55330 = sci.impl.types.eval(arg12,ctx,bindings);
var G__55331 = sci.impl.types.eval(arg13,ctx,bindings);
var fexpr__55317 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__55317.cljs$core$IFn$_invoke$arity$14 ? fexpr__55317.cljs$core$IFn$_invoke$arity$14(G__55318,G__55319,G__55320,G__55321,G__55322,G__55323,G__55324,G__55325,G__55326,G__55327,G__55328,G__55329,G__55330,G__55331) : fexpr__55317.call(null,G__55318,G__55319,G__55320,G__55321,G__55322,G__55323,G__55324,G__55325,G__55326,G__55327,G__55328,G__55329,G__55330,G__55331));
}catch (e55312){if((e55312 instanceof Error)){
var e__10123__auto__ = e55312;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55312;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55335 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55336 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55337 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55338 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55339 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55340 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55341 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55342 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55343 = sci.impl.types.eval(arg8,ctx,bindings);
var G__55344 = sci.impl.types.eval(arg9,ctx,bindings);
var G__55345 = sci.impl.types.eval(arg10,ctx,bindings);
var G__55346 = sci.impl.types.eval(arg11,ctx,bindings);
var G__55347 = sci.impl.types.eval(arg12,ctx,bindings);
var G__55348 = sci.impl.types.eval(arg13,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__55335,G__55336,G__55337,G__55338,G__55339,G__55340,G__55341,G__55342,G__55343,G__55344,G__55345,G__55346,G__55347,G__55348) : f.call(null,G__55335,G__55336,G__55337,G__55338,G__55339,G__55340,G__55341,G__55342,G__55343,G__55344,G__55345,G__55346,G__55347,G__55348));
}catch (e55334){if((e55334 instanceof Error)){
var e__10123__auto__ = e55334;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55334;

}
}}),stack);
}

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55355 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55356 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55357 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55358 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55359 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55360 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55361 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55362 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55363 = sci.impl.types.eval(arg8,ctx,bindings);
var G__55364 = sci.impl.types.eval(arg9,ctx,bindings);
var G__55365 = sci.impl.types.eval(arg10,ctx,bindings);
var G__55366 = sci.impl.types.eval(arg11,ctx,bindings);
var G__55367 = sci.impl.types.eval(arg12,ctx,bindings);
var G__55368 = sci.impl.types.eval(arg13,ctx,bindings);
var G__55369 = sci.impl.types.eval(arg14,ctx,bindings);
var fexpr__55354 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__55354.cljs$core$IFn$_invoke$arity$15 ? fexpr__55354.cljs$core$IFn$_invoke$arity$15(G__55355,G__55356,G__55357,G__55358,G__55359,G__55360,G__55361,G__55362,G__55363,G__55364,G__55365,G__55366,G__55367,G__55368,G__55369) : fexpr__55354.call(null,G__55355,G__55356,G__55357,G__55358,G__55359,G__55360,G__55361,G__55362,G__55363,G__55364,G__55365,G__55366,G__55367,G__55368,G__55369));
}catch (e55353){if((e55353 instanceof Error)){
var e__10123__auto__ = e55353;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55353;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55371 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55372 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55373 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55374 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55375 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55376 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55377 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55378 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55379 = sci.impl.types.eval(arg8,ctx,bindings);
var G__55380 = sci.impl.types.eval(arg9,ctx,bindings);
var G__55381 = sci.impl.types.eval(arg10,ctx,bindings);
var G__55382 = sci.impl.types.eval(arg11,ctx,bindings);
var G__55383 = sci.impl.types.eval(arg12,ctx,bindings);
var G__55384 = sci.impl.types.eval(arg13,ctx,bindings);
var G__55385 = sci.impl.types.eval(arg14,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__55371,G__55372,G__55373,G__55374,G__55375,G__55376,G__55377,G__55378,G__55379,G__55380,G__55381,G__55382,G__55383,G__55384,G__55385) : f.call(null,G__55371,G__55372,G__55373,G__55374,G__55375,G__55376,G__55377,G__55378,G__55379,G__55380,G__55381,G__55382,G__55383,G__55384,G__55385));
}catch (e55370){if((e55370 instanceof Error)){
var e__10123__auto__ = e55370;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55370;

}
}}),stack);
}

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55391 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55392 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55393 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55394 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55395 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55396 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55397 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55398 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55399 = sci.impl.types.eval(arg8,ctx,bindings);
var G__55400 = sci.impl.types.eval(arg9,ctx,bindings);
var G__55401 = sci.impl.types.eval(arg10,ctx,bindings);
var G__55402 = sci.impl.types.eval(arg11,ctx,bindings);
var G__55403 = sci.impl.types.eval(arg12,ctx,bindings);
var G__55404 = sci.impl.types.eval(arg13,ctx,bindings);
var G__55405 = sci.impl.types.eval(arg14,ctx,bindings);
var G__55406 = sci.impl.types.eval(arg15,ctx,bindings);
var fexpr__55390 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__55390.cljs$core$IFn$_invoke$arity$16 ? fexpr__55390.cljs$core$IFn$_invoke$arity$16(G__55391,G__55392,G__55393,G__55394,G__55395,G__55396,G__55397,G__55398,G__55399,G__55400,G__55401,G__55402,G__55403,G__55404,G__55405,G__55406) : fexpr__55390.call(null,G__55391,G__55392,G__55393,G__55394,G__55395,G__55396,G__55397,G__55398,G__55399,G__55400,G__55401,G__55402,G__55403,G__55404,G__55405,G__55406));
}catch (e55389){if((e55389 instanceof Error)){
var e__10123__auto__ = e55389;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55389;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55408 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55409 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55410 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55411 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55412 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55413 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55414 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55415 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55416 = sci.impl.types.eval(arg8,ctx,bindings);
var G__55417 = sci.impl.types.eval(arg9,ctx,bindings);
var G__55418 = sci.impl.types.eval(arg10,ctx,bindings);
var G__55419 = sci.impl.types.eval(arg11,ctx,bindings);
var G__55420 = sci.impl.types.eval(arg12,ctx,bindings);
var G__55421 = sci.impl.types.eval(arg13,ctx,bindings);
var G__55422 = sci.impl.types.eval(arg14,ctx,bindings);
var G__55423 = sci.impl.types.eval(arg15,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__55408,G__55409,G__55410,G__55411,G__55412,G__55413,G__55414,G__55415,G__55416,G__55417,G__55418,G__55419,G__55420,G__55421,G__55422,G__55423) : f.call(null,G__55408,G__55409,G__55410,G__55411,G__55412,G__55413,G__55414,G__55415,G__55416,G__55417,G__55418,G__55419,G__55420,G__55421,G__55422,G__55423));
}catch (e55407){if((e55407 instanceof Error)){
var e__10123__auto__ = e55407;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55407;

}
}}),stack);
}

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55428 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55429 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55430 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55431 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55432 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55433 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55434 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55435 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55436 = sci.impl.types.eval(arg8,ctx,bindings);
var G__55437 = sci.impl.types.eval(arg9,ctx,bindings);
var G__55438 = sci.impl.types.eval(arg10,ctx,bindings);
var G__55439 = sci.impl.types.eval(arg11,ctx,bindings);
var G__55440 = sci.impl.types.eval(arg12,ctx,bindings);
var G__55441 = sci.impl.types.eval(arg13,ctx,bindings);
var G__55442 = sci.impl.types.eval(arg14,ctx,bindings);
var G__55443 = sci.impl.types.eval(arg15,ctx,bindings);
var G__55444 = sci.impl.types.eval(arg16,ctx,bindings);
var fexpr__55427 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__55427.cljs$core$IFn$_invoke$arity$17 ? fexpr__55427.cljs$core$IFn$_invoke$arity$17(G__55428,G__55429,G__55430,G__55431,G__55432,G__55433,G__55434,G__55435,G__55436,G__55437,G__55438,G__55439,G__55440,G__55441,G__55442,G__55443,G__55444) : fexpr__55427.call(null,G__55428,G__55429,G__55430,G__55431,G__55432,G__55433,G__55434,G__55435,G__55436,G__55437,G__55438,G__55439,G__55440,G__55441,G__55442,G__55443,G__55444));
}catch (e55426){if((e55426 instanceof Error)){
var e__10123__auto__ = e55426;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55426;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55446 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55447 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55448 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55449 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55450 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55451 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55452 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55453 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55454 = sci.impl.types.eval(arg8,ctx,bindings);
var G__55455 = sci.impl.types.eval(arg9,ctx,bindings);
var G__55456 = sci.impl.types.eval(arg10,ctx,bindings);
var G__55457 = sci.impl.types.eval(arg11,ctx,bindings);
var G__55458 = sci.impl.types.eval(arg12,ctx,bindings);
var G__55459 = sci.impl.types.eval(arg13,ctx,bindings);
var G__55460 = sci.impl.types.eval(arg14,ctx,bindings);
var G__55461 = sci.impl.types.eval(arg15,ctx,bindings);
var G__55462 = sci.impl.types.eval(arg16,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__55446,G__55447,G__55448,G__55449,G__55450,G__55451,G__55452,G__55453,G__55454,G__55455,G__55456,G__55457,G__55458,G__55459,G__55460,G__55461,G__55462) : f.call(null,G__55446,G__55447,G__55448,G__55449,G__55450,G__55451,G__55452,G__55453,G__55454,G__55455,G__55456,G__55457,G__55458,G__55459,G__55460,G__55461,G__55462));
}catch (e55445){if((e55445 instanceof Error)){
var e__10123__auto__ = e55445;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55445;

}
}}),stack);
}

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55466 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55467 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55468 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55469 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55470 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55471 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55472 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55473 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55474 = sci.impl.types.eval(arg8,ctx,bindings);
var G__55475 = sci.impl.types.eval(arg9,ctx,bindings);
var G__55476 = sci.impl.types.eval(arg10,ctx,bindings);
var G__55477 = sci.impl.types.eval(arg11,ctx,bindings);
var G__55478 = sci.impl.types.eval(arg12,ctx,bindings);
var G__55479 = sci.impl.types.eval(arg13,ctx,bindings);
var G__55480 = sci.impl.types.eval(arg14,ctx,bindings);
var G__55481 = sci.impl.types.eval(arg15,ctx,bindings);
var G__55482 = sci.impl.types.eval(arg16,ctx,bindings);
var G__55483 = sci.impl.types.eval(arg17,ctx,bindings);
var fexpr__55465 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__55465.cljs$core$IFn$_invoke$arity$18 ? fexpr__55465.cljs$core$IFn$_invoke$arity$18(G__55466,G__55467,G__55468,G__55469,G__55470,G__55471,G__55472,G__55473,G__55474,G__55475,G__55476,G__55477,G__55478,G__55479,G__55480,G__55481,G__55482,G__55483) : fexpr__55465.call(null,G__55466,G__55467,G__55468,G__55469,G__55470,G__55471,G__55472,G__55473,G__55474,G__55475,G__55476,G__55477,G__55478,G__55479,G__55480,G__55481,G__55482,G__55483));
}catch (e55464){if((e55464 instanceof Error)){
var e__10123__auto__ = e55464;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55464;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55485 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55486 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55487 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55488 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55489 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55490 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55491 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55492 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55493 = sci.impl.types.eval(arg8,ctx,bindings);
var G__55494 = sci.impl.types.eval(arg9,ctx,bindings);
var G__55495 = sci.impl.types.eval(arg10,ctx,bindings);
var G__55496 = sci.impl.types.eval(arg11,ctx,bindings);
var G__55497 = sci.impl.types.eval(arg12,ctx,bindings);
var G__55498 = sci.impl.types.eval(arg13,ctx,bindings);
var G__55499 = sci.impl.types.eval(arg14,ctx,bindings);
var G__55500 = sci.impl.types.eval(arg15,ctx,bindings);
var G__55501 = sci.impl.types.eval(arg16,ctx,bindings);
var G__55502 = sci.impl.types.eval(arg17,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__55485,G__55486,G__55487,G__55488,G__55489,G__55490,G__55491,G__55492,G__55493,G__55494,G__55495,G__55496,G__55497,G__55498,G__55499,G__55500,G__55501,G__55502) : f.call(null,G__55485,G__55486,G__55487,G__55488,G__55489,G__55490,G__55491,G__55492,G__55493,G__55494,G__55495,G__55496,G__55497,G__55498,G__55499,G__55500,G__55501,G__55502));
}catch (e55484){if((e55484 instanceof Error)){
var e__10123__auto__ = e55484;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55484;

}
}}),stack);
}

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55507 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55508 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55509 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55510 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55511 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55512 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55513 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55514 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55515 = sci.impl.types.eval(arg8,ctx,bindings);
var G__55516 = sci.impl.types.eval(arg9,ctx,bindings);
var G__55517 = sci.impl.types.eval(arg10,ctx,bindings);
var G__55518 = sci.impl.types.eval(arg11,ctx,bindings);
var G__55519 = sci.impl.types.eval(arg12,ctx,bindings);
var G__55520 = sci.impl.types.eval(arg13,ctx,bindings);
var G__55521 = sci.impl.types.eval(arg14,ctx,bindings);
var G__55522 = sci.impl.types.eval(arg15,ctx,bindings);
var G__55523 = sci.impl.types.eval(arg16,ctx,bindings);
var G__55524 = sci.impl.types.eval(arg17,ctx,bindings);
var G__55525 = sci.impl.types.eval(arg18,ctx,bindings);
var fexpr__55506 = (wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f));
return (fexpr__55506.cljs$core$IFn$_invoke$arity$19 ? fexpr__55506.cljs$core$IFn$_invoke$arity$19(G__55507,G__55508,G__55509,G__55510,G__55511,G__55512,G__55513,G__55514,G__55515,G__55516,G__55517,G__55518,G__55519,G__55520,G__55521,G__55522,G__55523,G__55524,G__55525) : fexpr__55506.call(null,G__55507,G__55508,G__55509,G__55510,G__55511,G__55512,G__55513,G__55514,G__55515,G__55516,G__55517,G__55518,G__55519,G__55520,G__55521,G__55522,G__55523,G__55524,G__55525));
}catch (e55505){if((e55505 instanceof Error)){
var e__10123__auto__ = e55505;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55505;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__55527 = sci.impl.types.eval(arg0,ctx,bindings);
var G__55528 = sci.impl.types.eval(arg1,ctx,bindings);
var G__55529 = sci.impl.types.eval(arg2,ctx,bindings);
var G__55530 = sci.impl.types.eval(arg3,ctx,bindings);
var G__55531 = sci.impl.types.eval(arg4,ctx,bindings);
var G__55532 = sci.impl.types.eval(arg5,ctx,bindings);
var G__55533 = sci.impl.types.eval(arg6,ctx,bindings);
var G__55534 = sci.impl.types.eval(arg7,ctx,bindings);
var G__55535 = sci.impl.types.eval(arg8,ctx,bindings);
var G__55536 = sci.impl.types.eval(arg9,ctx,bindings);
var G__55537 = sci.impl.types.eval(arg10,ctx,bindings);
var G__55538 = sci.impl.types.eval(arg11,ctx,bindings);
var G__55539 = sci.impl.types.eval(arg12,ctx,bindings);
var G__55540 = sci.impl.types.eval(arg13,ctx,bindings);
var G__55541 = sci.impl.types.eval(arg14,ctx,bindings);
var G__55542 = sci.impl.types.eval(arg15,ctx,bindings);
var G__55543 = sci.impl.types.eval(arg16,ctx,bindings);
var G__55544 = sci.impl.types.eval(arg17,ctx,bindings);
var G__55545 = sci.impl.types.eval(arg18,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__55527,G__55528,G__55529,G__55530,G__55531,G__55532,G__55533,G__55534,G__55535,G__55536,G__55537,G__55538,G__55539,G__55540,G__55541,G__55542,G__55543,G__55544,G__55545) : f.call(null,G__55527,G__55528,G__55529,G__55530,G__55531,G__55532,G__55533,G__55534,G__55535,G__55536,G__55537,G__55538,G__55539,G__55540,G__55541,G__55542,G__55543,G__55544,G__55545));
}catch (e55526){if((e55526 instanceof Error)){
var e__10123__auto__ = e55526;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__10123__auto__,this$);
} else {
throw e55526;

}
}}),stack);
}

break;
default:
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,(wrap.cljs$core$IFn$_invoke$arity$2 ? wrap.cljs$core$IFn$_invoke$arity$2(bindings,f) : wrap.call(null,bindings,f)),analyzed_children);
}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,analyzed_children);
}),stack);
}

}
});
sci.impl.analyzer.analyze_quote = (function sci$impl$analyzer$analyze_quote(_ctx,expr){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(expr))){
} else {
sci.impl.analyzer.throw_error_with_location("Wrong number of args (0) passed to quote",expr);
}

var snd = cljs.core.second(expr);
return sci.impl.types.__GT_constant(snd);
});
sci.impl.analyzer.analyze_in_ns = (function sci$impl$analyzer$analyze_in_ns(ctx,expr){
var ns_expr = (function (){var G__55548 = ctx;
var G__55549 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__55548,G__55549) : sci.impl.analyzer.analyze.call(null,G__55548,G__55549));
})();
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var ns_sym = sci.impl.types.eval(ns_expr,ctx__$1,bindings);
sci.impl.utils.set_namespace_BANG_(ctx__$1,ns_sym,null);

return null;
}),null);
});
sci.impl.analyzer.analyze_import = (function sci$impl$analyzer$analyze_import(_ctx,expr){
var args = cljs.core.rest(expr);
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_import,ctx,args);
}catch (e55553){if((e55553 instanceof Error)){
var e = e55553;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,this$);
} else {
throw e55553;

}
}}),stack);
});
sci.impl.analyzer.analyze_call = (function sci$impl$analyzer$analyze_call(ctx,expr,m,top_level_QMARK_){
var eval_file = new cljs.core.Keyword("clojure.core","eval-file","clojure.core/eval-file",801420726).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(eval_file)){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_file,eval_file]));
} else {
}

try{var f = cljs.core.first(expr);
if((f instanceof cljs.core.Symbol)){
var fsym = f;
var special_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,f);
var _ = (cljs.core.truth_((function (){var and__5041__auto__ = special_sym;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword(null,"check-permissions","check-permissions",669054317).cljs$core$IFn$_invoke$arity$1(ctx);
} else {
return and__5041__auto__;
}
})())?sci.impl.resolve.check_permission_BANG_(ctx,f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_sym,null], null)):null);
var f__$1 = (function (){var or__5043__auto__ = special_sym;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,f,true);
}
})();
var f_meta = cljs.core.meta(f__$1);
var eval_QMARK_ = (function (){var and__5041__auto__ = f_meta;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = f_meta;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword("sci.impl.analyzer","static-access","sci.impl.analyzer/static-access",-79014000).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__5041__auto__;
}
})())){
var vec__55694 = f__$1;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55694,(0),null);
var method_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55694,(1),null);
var method_name__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name);
var len = method_name__$1.length;
var idx = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(method_name__$1,".");
var f__$2 = (cljs.core.truth_((function (){var and__5041__auto__ = idx;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((len - (1)),idx);
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.analyzer.goog$module$goog$object.getValueByKeys(class$,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(method_name__$1,(0),idx).split("."))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_name__$1,(idx + (1)))], null):f__$1);
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_static_method_invocation(ctx__$1,bindings,cljs.core.cons(f__$2,children));
}),null);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(eval_QMARK_);
if(and__5041__auto__){
var and__5041__auto____$1 = (f__$1 instanceof cljs.core.Symbol);
if(and__5041__auto____$1){
var or__5043__auto__ = special_sym;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.contains_QMARK_(sci.impl.utils.ana_macros,f__$1);
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var G__55698 = f__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__55698)){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__55698)){
return sci.impl.analyzer.return_and(ctx,expr,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__55698)){
return sci.impl.analyzer.analyze_import(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__55698)){
return sci.impl.analyzer.analyze_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),G__55698)){
return sci.impl.analyzer.analyze_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__55698)){
return sci.impl.analyzer.return_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),G__55698)){
var ret = sci.impl.analyzer.analyze_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defn","defn",-126010802,null),G__55698)){
var ret = sci.impl.analyzer.analyze_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__55698)){
return sci.impl.analyzer.return_do(ctx,expr,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"loop","loop",1244978678,null),G__55698)){
return sci.impl.analyzer.analyze_loop(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),G__55698)){
return sci.impl.analyzer.expand_constructor(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__55698)){
return sci.impl.analyzer.analyze_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__55698)){
return sci.impl.analyzer.analyze_quote(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let*","let*",1920721458,null),G__55698)){
return sci.impl.analyzer.analyze_let_STAR_(ctx,expr,cljs.core.second(expr),cljs.core.nnext(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),G__55698)){
return sci.impl.analyzer.expand_dot_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),G__55698)){
return sci.impl.analyzer.analyze_ns_form(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__55698)){
return sci.impl.analyzer.analyze_let(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),G__55698)){
return sci.impl.analyzer.analyze_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__55698)){
return sci.impl.analyzer.analyze_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__55698)){
return sci.impl.analyzer.analyze_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__55698)){
return sci.impl.analyzer.return_recur(ctx,expr,sci.impl.analyzer.analyze_children(sci.impl.analyzer.without_recur_target(ctx),cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__55698)){
return sci.impl.analyzer.analyze_new(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),G__55698)){
return sci.impl.analyzer.analyze_var(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__55698)){
return sci.impl.analyzer.analyze_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__55698)){
return sci.impl.analyzer.analyze_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__55698)){
return sci.impl.analyzer.analyze_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__55698)){
return sci.impl.analyzer.return_or(ctx,expr,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55698)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
} else {
try{if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$1))){
var needs_ctx_QMARK_ = (sci.impl.utils.needs_ctx === new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1)));
var f__$2 = ((sci.impl.vars.var_QMARK_(f__$1))?cljs.core.deref(f__$1):f__$1);
var v = ((needs_ctx_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$2,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),ctx,cljs.core.rest(expr)):cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$2,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr)));
var expanded = (cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))?v:(cljs.core.truth_((function (){var and__5041__auto__ = top_level_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.seq_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(v))));
} else {
return and__5041__auto__;
}
})())?sci.impl.types.__GT_EvalForm(v):(function (){var v__$1 = (cljs.core.truth_(m)?(((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.with_meta(v,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,cljs.core.meta(v)], 0))):v):v);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx,v__$1,top_level_QMARK_) : sci.impl.analyzer.analyze.call(null,ctx,v__$1,top_level_QMARK_));
})()
));
return expanded;
} else {
var temp__5802__auto__ = new cljs.core.Keyword("sci.impl","inlined","sci.impl/inlined",-478453593).cljs$core$IFn$_invoke$arity$1(f_meta);
if(cljs.core.truth_(temp__5802__auto__)){
var f__$2 = temp__5802__auto__;
return sci.impl.analyzer.return_call(ctx,expr,f__$2,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);
} else {
var temp__5802__auto____$1 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1));
if(cljs.core.truth_(temp__5802__auto____$1)){
var op = temp__5802__auto____$1;
var G__55707 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"needs-ctx","needs-ctx",1605017124,null),G__55707)){
if((sci.impl.utils.needs_ctx === op)){
return sci.impl.analyzer.return_needs_ctx_call(ctx,expr,f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resolve-sym","resolve-sym",-1193683260),G__55707)){
return sci.impl.analyzer.return_binding_call(ctx,expr,new cljs.core.Keyword("sci.impl","idx","sci.impl/idx",700902278).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1)),f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);

}
}
} else {
var self_ref_QMARK_ = new cljs.core.Keyword(null,"self-ref?","self-ref?",412808630).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__5041__auto__ = self_ref_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (self_ref_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self_ref_QMARK_.cljs$core$IFn$_invoke$arity$1(f__$1) : self_ref_QMARK_.call(null,f__$1));
} else {
return and__5041__auto__;
}
})())){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),(function (bindings,___$1){
return cljs.core.deref(bindings.get(fsym));
}));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),((sci.impl.vars.var_QMARK_(f__$1))?(function (___$1,v){
return cljs.core.deref(v);
}):null));
}
}
}
}
}catch (e55702){if((e55702 instanceof Error)){
var e = e55702;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3(ctx,e,(function (){var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return null;
}),stack);
})());
} else {
throw e55702;

}
}
}
}
} else {
if((f instanceof cljs.core.Keyword)){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
var ccount = cljs.core.count(children);
var G__55710 = ccount;
switch (G__55710) {
case (1):
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return f.cljs$core$IFn$_invoke$arity$1(sci.impl.types.eval(arg,ctx__$1,bindings));
}),null);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return f.cljs$core$IFn$_invoke$arity$2(sci.impl.types.eval(arg0,ctx__$1,bindings),sci.impl.types.eval(arg1,ctx__$1,bindings));
}),null);

break;
default:
return sci.impl.analyzer.throw_error_with_location(["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ccount),") passed to: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''),expr);

}
} else {
var f__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.analyzer.analyze.call(null,ctx,f));
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.vars.current_file)], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var f__$2 = sci.impl.types.eval(f__$1,ctx__$1,bindings);
if(cljs.core.ifn_QMARK_(f__$2)){
return sci.impl.evaluator.fn_call(ctx__$1,bindings,f__$2,children);
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$2], 0))," as a function."].join('')));
}
}),stack);

}
}
}finally {if(cljs.core.truth_(eval_file)){
sci.impl.vars.pop_thread_bindings();
} else {
}
}});
sci.impl.analyzer.map_fn = (function sci$impl$analyzer$map_fn(children_count){
if((children_count <= (16))){
return cljs.core.array_map;
} else {
return cljs.core.hash_map;
}
});
sci.impl.analyzer.return_map = (function sci$impl$analyzer$return_map(ctx,the_map,analyzed_children){
var mf = sci.impl.analyzer.map_fn(cljs.core.count(analyzed_children));
sci.impl.analyzer.return_call(ctx,the_map,mf,analyzed_children,null,null);

return sci.impl.analyzer.return_call(ctx,the_map,mf,analyzed_children,null,null);
});
sci.impl.analyzer.constant_node_QMARK_ = (function sci$impl$analyzer$constant_node_QMARK_(x){
return (!((x instanceof sci.impl.types.NodeR)));
});
sci.impl.analyzer.analyze_map = (function sci$impl$analyzer$analyze_map(ctx,expr,m){
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,expr);
var analyzed_children = sci.impl.analyzer.analyze_children(ctx__$1,children);
var const_QMARK_ = cljs.core.every_QMARK_(sci.impl.analyzer.constant_node_QMARK_,analyzed_children);
var same_QMARK_ = ((const_QMARK_)?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(children,analyzed_children):null);
var const_val = ((const_QMARK_)?(cljs.core.truth_(same_QMARK_)?expr:(function (){var mf = sci.impl.analyzer.map_fn(cljs.core.count(analyzed_children));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mf,analyzed_children);
})()):null);
var analyzed_map = ((const_QMARK_)?sci.impl.types.__GT_constant(const_val):sci.impl.analyzer.return_map(ctx__$1,expr,analyzed_children));
var analyzed_meta = (cljs.core.truth_(m)?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,m) : sci.impl.analyzer.analyze.call(null,ctx__$1,m)):null);
var ret = (cljs.core.truth_(analyzed_meta)?sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
var coll = sci.impl.types.eval(analyzed_map,ctx__$2,bindings);
var md = sci.impl.types.eval(analyzed_meta,ctx__$2,bindings);
return cljs.core.with_meta(coll,md);
}),null):analyzed_map);
return ret;
});
/**
 * Returns analyzed vector or set
 */
sci.impl.analyzer.analyze_vec_or_set = (function sci$impl$analyzer$analyze_vec_or_set(ctx,f1,f2,expr,m){
var ctx__$1 = sci.impl.analyzer.without_recur_target(ctx);
var analyzed_meta = (cljs.core.truth_(m)?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,m) : sci.impl.analyzer.analyze.call(null,ctx__$1,m)):null);
var analyzed_children = sci.impl.analyzer.analyze_children(ctx__$1,expr);
var const_QMARK_ = cljs.core.every_QMARK_(sci.impl.analyzer.constant_node_QMARK_,analyzed_children);
var set_expr_QMARK_ = cljs.core.set_QMARK_(expr);
var same_QMARK_ = ((const_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((set_expr_QMARK_)?(function (){var or__5043__auto__ = cljs.core.seq(expr);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})():expr),analyzed_children)));
var const_val = ((const_QMARK_)?((same_QMARK_)?((cljs.core.empty_QMARK_(expr))?((set_expr_QMARK_)?cljs.core.PersistentHashSet.EMPTY:cljs.core.PersistentVector.EMPTY):expr):(f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(analyzed_children) : f1.call(null,analyzed_children))):null);
var analyzed_coll = ((const_QMARK_)?sci.impl.types.__GT_constant(const_val):sci.impl.analyzer.return_call(ctx__$1,expr,f2,analyzed_children,null,null));
var ret = (cljs.core.truth_(analyzed_meta)?sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
var coll = sci.impl.types.eval(analyzed_coll,ctx__$2,bindings);
var md = sci.impl.types.eval(analyzed_meta,ctx__$2,bindings);
return cljs.core.with_meta(coll,md);
}),null):analyzed_coll);
return ret;
});
sci.impl.analyzer.analyze_js_obj = (function sci$impl$analyzer$analyze_js_obj(ctx,js_val){
var v = js_val.val;
if(cljs.core.map_QMARK_(v)){
var ks = cljs.core.keys(v);
var ks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,ks);
var vs = cljs.core.vals(v);
var vs__$1 = sci.impl.analyzer.analyze_children(ctx,vs);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.js_obj,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(ks__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55729_SHARP_){
return sci.impl.types.eval(p1__55729_SHARP_,ctx__$1,bindings);
}),vs__$1)));
}),null);
} else {
var vs = sci.impl.analyzer.analyze_children(ctx,v);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var arr = [];
var seq__55731_56000 = cljs.core.seq(vs);
var chunk__55732_56001 = null;
var count__55733_56002 = (0);
var i__55734_56003 = (0);
while(true){
if((i__55734_56003 < count__55733_56002)){
var x_56004 = chunk__55732_56001.cljs$core$IIndexed$_nth$arity$2(null,i__55734_56003);
arr.push(sci.impl.types.eval(x_56004,ctx__$1,bindings));


var G__56005 = seq__55731_56000;
var G__56006 = chunk__55732_56001;
var G__56007 = count__55733_56002;
var G__56008 = (i__55734_56003 + (1));
seq__55731_56000 = G__56005;
chunk__55732_56001 = G__56006;
count__55733_56002 = G__56007;
i__55734_56003 = G__56008;
continue;
} else {
var temp__5804__auto___56009 = cljs.core.seq(seq__55731_56000);
if(temp__5804__auto___56009){
var seq__55731_56010__$1 = temp__5804__auto___56009;
if(cljs.core.chunked_seq_QMARK_(seq__55731_56010__$1)){
var c__5565__auto___56011 = cljs.core.chunk_first(seq__55731_56010__$1);
var G__56012 = cljs.core.chunk_rest(seq__55731_56010__$1);
var G__56013 = c__5565__auto___56011;
var G__56014 = cljs.core.count(c__5565__auto___56011);
var G__56015 = (0);
seq__55731_56000 = G__56012;
chunk__55732_56001 = G__56013;
count__55733_56002 = G__56014;
i__55734_56003 = G__56015;
continue;
} else {
var x_56016 = cljs.core.first(seq__55731_56010__$1);
arr.push(sci.impl.types.eval(x_56016,ctx__$1,bindings));


var G__56018 = cljs.core.next(seq__55731_56010__$1);
var G__56019 = null;
var G__56020 = (0);
var G__56021 = (0);
seq__55731_56000 = G__56018;
chunk__55732_56001 = G__56019;
count__55733_56002 = G__56020;
i__55734_56003 = G__56021;
continue;
}
} else {
}
}
break;
}

return arr;
}),null);
}
});
sci.impl.analyzer.analyze = (function sci$impl$analyzer$analyze(var_args){
var G__55739 = arguments.length;
switch (G__55739) {
case 2:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (ctx,expr){
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx,expr,false);
}));

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (ctx,expr,top_level_QMARK_){
var m = cljs.core.meta(expr);
if(sci.impl.utils.constant_QMARK_(expr)){
return sci.impl.types.__GT_constant(expr);
} else {
if((expr instanceof cljs.core.Symbol)){
var v = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4(ctx,expr,false,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m));
var mv = cljs.core.meta(v);
if(sci.impl.utils.constant_QMARK_(v)){
return sci.impl.types.__GT_constant(v);
} else {
if((sci.impl.utils.needs_ctx === new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(mv))){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(v,ctx);
} else {
if(sci.impl.vars.var_QMARK_(v)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(mv))){
return cljs.core.deref(v);
} else {
if(cljs.core.truth_(sci.impl.vars.isMacro(v))){
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return cljs.core._deref(v);
}),null);
}
}
} else {
return v;

}
}
}
} else {
if(cljs.core.record_QMARK_(expr)){
return expr;
} else {
if(cljs.core.map_QMARK_(expr)){
return sci.impl.analyzer.analyze_map(ctx,expr,m);
} else {
if((expr instanceof cljs.tagged_literals.JSValue)){
return sci.impl.analyzer.analyze_js_obj(ctx,expr);
} else {
if(cljs.core.vector_QMARK_(expr)){
return sci.impl.analyzer.analyze_vec_or_set(ctx,cljs.core.identity,cljs.core.vector,expr,m);
} else {
if(cljs.core.set_QMARK_(expr)){
return sci.impl.analyzer.analyze_vec_or_set(ctx,cljs.core.set,cljs.core.hash_set,expr,m);
} else {
if(cljs.core.seq_QMARK_(expr)){
if(cljs.core.seq(expr)){
return sci.impl.analyzer.analyze_call(ctx,expr,m,top_level_QMARK_);
} else {
return expr;
}
} else {
return expr;

}
}
}
}
}
}
}
}
}));

(sci.impl.analyzer.analyze.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=sci.impl.analyzer.js.map
