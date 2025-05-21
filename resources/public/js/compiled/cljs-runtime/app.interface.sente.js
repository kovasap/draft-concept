goog.provide('app.interface$.sente');
app.interface$.sente._QMARK_csrf_token = (function (){var temp__5804__auto__ = document.getElementById("sente-csrf-token");
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
return el.getAttribute("data-csrf-token");
} else {
return null;
}
})();
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TOKEN",app.interface$.sente._QMARK_csrf_token], 0));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["HOST",app.config.api_host], 0));
var map__74407_74463 = taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic("/chsk",app.interface$.sente._QMARK_csrf_token,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"host","host",-1558485167),app.config.api_host,new cljs.core.Keyword(null,"port","port",1534937262),app.config.api_port], null)], 0));
var map__74407_74464__$1 = cljs.core.__destructure_map(map__74407_74463);
var chsk_74465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74407_74464__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_74466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74407_74464__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_74467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74407_74464__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_74468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74407_74464__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
app.interface$.sente.chsk = chsk_74465;

app.interface$.sente.ch_chsk = ch_recv_74466;

app.interface$.sente.chsk_send_BANG_ = send_fn_74467;

app.interface$.sente.chsk_state = state_74468;
/**
 * Useful for removing functions from the db before sending to the server.
 *   
 *   Currently only removes functions if they are values in a map, not if they are
 *   elements of a vector/list.
 */
app.interface$.sente.remove_fns = (function app$interface$sente$remove_fns(data){
return clojure.walk.prewalk((function (node){
if(cljs.core.map_QMARK_(node)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5520__auto__ = (function app$interface$sente$remove_fns_$_iter__74408(s__74409){
return (new cljs.core.LazySeq(null,(function (){
var s__74409__$1 = s__74409;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__74409__$1);
if(temp__5804__auto__){
var s__74409__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74409__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__74409__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__74411 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__74410 = (0);
while(true){
if((i__74410 < size__5519__auto__)){
var vec__74412 = cljs.core._nth(c__5518__auto__,i__74410);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74412,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74412,(1),null);
if((!(cljs.core.fn_QMARK_(v)))){
cljs.core.chunk_append(b__74411,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__74469 = (i__74410 + (1));
i__74410 = G__74469;
continue;
} else {
var G__74470 = (i__74410 + (1));
i__74410 = G__74470;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74411),app$interface$sente$remove_fns_$_iter__74408(cljs.core.chunk_rest(s__74409__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74411),null);
}
} else {
var vec__74415 = cljs.core.first(s__74409__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74415,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74415,(1),null);
if((!(cljs.core.fn_QMARK_(v)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),app$interface$sente$remove_fns_$_iter__74408(cljs.core.rest(s__74409__$2)));
} else {
var G__74471 = cljs.core.rest(s__74409__$2);
s__74409__$1 = G__74471;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(node);
})());
} else {
return node;
}
}),data);
});
app.interface$.sente.send_state_to_server_BANG_ = (function app$interface$sente$send_state_to_server_BANG_(db){
var G__74418 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","sync-state","app/sync-state",-1325307300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),app.interface$.sente.remove_fns(db)], null)], null);
var G__74419 = (5000);
var G__74420 = (function (cb_reply){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["sent state to server"], 0));
});
return (app.interface$.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 ? app.interface$.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(G__74418,G__74419,G__74420) : app.interface$.sente.chsk_send_BANG_.call(null,G__74418,G__74419,G__74420));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("game","update-state","game/update-state",-658693393),(function (_,p__74421){
var vec__74422 = p__74421;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74422,(0),null);
var db_from_server = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74422,(1),null);
return db_from_server;
}));
/**
 * Use any login procedure you'd like. Here we'll trigger an Ajax
 * POST request that resets our server-side session. Then we ask
 * our channel socket to reconnect, thereby picking up the new
 * session.
 */
app.interface$.sente.login = (function app$interface$sente$login(user_id){
var req = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),app.interface$.sente._QMARK_csrf_token], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_id)], null)], null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"app.interface.sente",null,71,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Trying login with %s",req], null);
}),null)),null,263951535,null);

var G__74425 = "/login";
var G__74426 = req;
var G__74427 = (function (ajax_resp){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"app.interface.sente",null,74,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ajax login response: %s",ajax_resp], null);
}),null)),null,1105719972,null);

var login_successful_QMARK_ = true;
if((!(login_successful_QMARK_))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"app.interface.sente",null,78,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Login failed for %s",user_id], null);
}),null)),null,823371227,null);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"app.interface.sente",null,80,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Login successful for %s",user_id], null);
}),null)),null,-207109614,null);

return taoensso.sente.chsk_reconnect_BANG_(app.interface$.sente.chsk);
}
});
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__74425,G__74426,G__74427) : taoensso.sente.ajax_lite.call(null,G__74425,G__74426,G__74427));
});
if((typeof app !== 'undefined') && (typeof app.interface$ !== 'undefined') && (typeof app.interface$.sente !== 'undefined') && (typeof app.interface$.sente._event_msg_handler !== 'undefined')){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
app.interface$.sente._event_msg_handler = (function (){var method_table__5639__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__74430 = cljs.core.get_global_hierarchy;
return (fexpr__74430.cljs$core$IFn$_invoke$arity$0 ? fexpr__74430.cljs$core$IFn$_invoke$arity$0() : fexpr__74430.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.interface.sente","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
/**
 * Wraps `-event-msg-handler` with logging, error catching, etc.
 */
app.interface$.sente.event_msg_handler = (function app$interface$sente$event_msg_handler(p__74431){
var map__74432 = p__74431;
var map__74432__$1 = cljs.core.__destructure_map(map__74432);
var ev_msg = map__74432__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74432__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74432__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74432__$1,new cljs.core.Keyword(null,"event","event",301435442));
return app.interface$.sente._event_msg_handler.cljs$core$IFn$_invoke$arity$1(ev_msg);
});
app.interface$.sente._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__74433){
var map__74434 = p__74433;
var map__74434__$1 = cljs.core.__destructure_map(map__74434);
var ev_msg = map__74434__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74434__$1,new cljs.core.Keyword(null,"event","event",301435442));
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"app.interface.sente",null,98,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unhandled event: %s",event], null);
}),null)),null,1092058797,null);
}));
app.interface$.sente._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__74435){
var map__74436 = p__74435;
var map__74436__$1 = cljs.core.__destructure_map(map__74436);
var ev_msg = map__74436__$1;
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74436__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__74437 = (function (){var e = (function (){try{if(cljs.core.vector_QMARK_(_QMARK_data)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e74442){if((e74442 instanceof Error)){
var e = e74442;
return e;
} else {
throw e74442;

}
}})();
if((e == null)){
return _QMARK_data;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"app.interface.sente",102,"(vector? ?data)",_QMARK_data,e,null);
}
})();
var old_state_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74437,(0),null);
var new_state_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74437,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(new_state_map))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"app.interface.sente",null,104,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Channel socket successfully established!: %s",new_state_map], null);
}),null)),null,75652633,null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"app.interface.sente",null,105,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Channel socket state change: %s",new_state_map], null);
}),null)),null,1042249916,null);
}
}));
app.interface$.sente._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__74444){
var map__74445 = p__74444;
var map__74445__$1 = cljs.core.__destructure_map(map__74445);
var ev_msg = map__74445__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74445__$1,new cljs.core.Keyword(null,"event","event",301435442));
var vec__74446 = event;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74446,(0),null);
var vec__74449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74446,(1),null);
var ev_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74449,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74449,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev_name,new cljs.core.Keyword("game","broadcast-state","game/broadcast-state",2018058695))){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Got game state from server!"], 0));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("game","update-state","game/update-state",-658693393),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(data)], null));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"app.interface.sente",null,114,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Push event from server: %s",ev_msg], null);
}),null)),null,-1627266073,null);
}
}));
app.interface$.sente._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__74455){
var map__74456 = p__74455;
var map__74456__$1 = cljs.core.__destructure_map(map__74456);
var ev_msg = map__74456__$1;
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74456__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__74458 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74458,(0),null);
var _QMARK_csrf_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74458,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74458,(2),null);
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"app.interface.sente",null,119,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handshake: %s",_QMARK_data,_QMARK_uid], null);
}),null)),null,-519580090,null);
}));
if((typeof app !== 'undefined') && (typeof app.interface$ !== 'undefined') && (typeof app.interface$.sente !== 'undefined') && (typeof app.interface$.sente.router_ !== 'undefined')){
} else {
app.interface$.sente.router_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
app.interface$.sente.stop_router_BANG_ = (function app$interface$sente$stop_router_BANG_(){
var temp__5804__auto__ = cljs.core.deref(app.interface$.sente.router_);
if(cljs.core.truth_(temp__5804__auto__)){
var stop_f = temp__5804__auto__;
return (stop_f.cljs$core$IFn$_invoke$arity$0 ? stop_f.cljs$core$IFn$_invoke$arity$0() : stop_f.call(null));
} else {
return null;
}
});
app.interface$.sente.start_router_BANG_ = (function app$interface$sente$start_router_BANG_(){
app.interface$.sente.stop_router_BANG_();

return cljs.core.reset_BANG_(app.interface$.sente.router_,taoensso.sente.start_client_chsk_router_BANG_(app.interface$.sente.ch_chsk,app.interface$.sente.event_msg_handler));
});
app.interface$.sente.start_BANG_ = (function app$interface$sente$start_BANG_(){
return app.interface$.sente.start_router_BANG_();
});
if((typeof app !== 'undefined') && (typeof app.interface$ !== 'undefined') && (typeof app.interface$.sente !== 'undefined') && (typeof app.interface$.sente._start_once !== 'undefined')){
} else {
app.interface$.sente._start_once = app.interface$.sente.start_BANG_();
}

//# sourceMappingURL=app.interface.sente.js.map
