goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__45208__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__45208__auto__["add"]).call(o__45208__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__45208__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__45208__auto__["delete"]).call(o__45208__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__45208__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__45208__auto__["has"]).call(o__45208__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__48532 = data;
var target__45224__auto__ = G__48532;
if(cljs.core.truth_(target__45224__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48532)].join(''),"\n","target__45224__auto__"].join('')));
}

(target__45224__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__48532;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_48575 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_48575);
} else {
var seq__48553_48576 = cljs.core.seq(json_ml);
var chunk__48554_48577 = null;
var count__48555_48578 = (0);
var i__48556_48579 = (0);
while(true){
if((i__48556_48579 < count__48555_48578)){
var item_48580 = chunk__48554_48577.cljs$core$IIndexed$_nth$arity$2(null,i__48556_48579);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_48580,new_depth_budget_48575) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_48580,new_depth_budget_48575));


var G__48581 = seq__48553_48576;
var G__48582 = chunk__48554_48577;
var G__48583 = count__48555_48578;
var G__48584 = (i__48556_48579 + (1));
seq__48553_48576 = G__48581;
chunk__48554_48577 = G__48582;
count__48555_48578 = G__48583;
i__48556_48579 = G__48584;
continue;
} else {
var temp__5804__auto___48585 = cljs.core.seq(seq__48553_48576);
if(temp__5804__auto___48585){
var seq__48553_48587__$1 = temp__5804__auto___48585;
if(cljs.core.chunked_seq_QMARK_(seq__48553_48587__$1)){
var c__5565__auto___48588 = cljs.core.chunk_first(seq__48553_48587__$1);
var G__48589 = cljs.core.chunk_rest(seq__48553_48587__$1);
var G__48590 = c__5565__auto___48588;
var G__48591 = cljs.core.count(c__5565__auto___48588);
var G__48592 = (0);
seq__48553_48576 = G__48589;
chunk__48554_48577 = G__48590;
count__48555_48578 = G__48591;
i__48556_48579 = G__48592;
continue;
} else {
var item_48593 = cljs.core.first(seq__48553_48587__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_48593,new_depth_budget_48575) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_48593,new_depth_budget_48575));


var G__48595 = cljs.core.next(seq__48553_48587__$1);
var G__48596 = null;
var G__48597 = (0);
var G__48598 = (0);
seq__48553_48576 = G__48595;
chunk__48554_48577 = G__48596;
count__48555_48578 = G__48597;
i__48556_48579 = G__48598;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5802__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5802__auto__)){
var initial_hierarchy_depth_budget = temp__5802__auto__;
var remaining_depth_budget = (function (){var or__5043__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=devtools.formatters.budgeting.js.map
