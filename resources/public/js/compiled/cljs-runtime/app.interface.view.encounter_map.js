goog.provide('app.interface$.view.encounter_map');
app.interface$.view.encounter_map.location_view = (function app$interface$view$encounter_map$location_view(p__52988){
var map__52989 = p__52988;
var map__52989__$1 = cljs.core.__destructure_map(map__52989);
var location__$1 = map__52989__$1;
var land_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52989__$1,new cljs.core.Keyword(null,"land-type","land-type",-1373586475));
var characters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52989__$1,new cljs.core.Keyword(null,"characters","characters",-163867197));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-4","div.col-4",-64503036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"height","height",1025178622),"150px"], null)], null),land_type,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.interface$.view.character.character_view,characters))], null);
});
app.interface$.view.encounter_map.encounter_map_view = (function app$interface$view$encounter_map$encounter_map_view(embedded_encounter_map){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955)], null),(function (){var iter__5520__auto__ = (function app$interface$view$encounter_map$encounter_map_view_$_iter__52990(s__52991){
return (new cljs.core.LazySeq(null,(function (){
var s__52991__$1 = s__52991;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__52991__$1);
if(temp__5804__auto__){
var s__52991__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52991__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__52991__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__52993 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__52992 = (0);
while(true){
if((i__52992 < size__5519__auto__)){
var same_level_locations = cljs.core._nth(c__5518__auto__,i__52992);
cljs.core.chunk_append(b__52993,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.justify-content-center","div.row.justify-content-center",754397026)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.interface$.view.encounter_map.location_view,same_level_locations)));

var G__52994 = (i__52992 + (1));
i__52992 = G__52994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52993),app$interface$view$encounter_map$encounter_map_view_$_iter__52990(cljs.core.chunk_rest(s__52991__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52993),null);
}
} else {
var same_level_locations = cljs.core.first(s__52991__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.justify-content-center","div.row.justify-content-center",754397026)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.interface$.view.encounter_map.location_view,same_level_locations)),app$interface$view$encounter_map$encounter_map_view_$_iter__52990(cljs.core.rest(s__52991__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.reverse(embedded_encounter_map));
})());
});

//# sourceMappingURL=app.interface.view.encounter_map.js.map
