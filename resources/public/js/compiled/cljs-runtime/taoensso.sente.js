goog.provide('taoensso.sente');
if(cljs.core.vector_QMARK_(taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(105),(0)], null));
} else {
taoensso.encore.assert_min_encore_version(2.105);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
if((typeof taoensso !== 'undefined') && (typeof taoensso.sente !== 'undefined') && (typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined')){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
taoensso.sente.expected = (function taoensso$sente$expected(expected,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),expected,new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword(null,"value","value",305978217),x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if((!(cljs.core.vector_QMARK_(x)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915),taoensso.sente.expected(new cljs.core.Keyword(null,"vector","vector",1902966158),x)], null);
} else {
if(cljs.core.not((function (){var G__73657 = cljs.core.count(x);
var fexpr__73656 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null);
return (fexpr__73656.cljs$core$IFn$_invoke$arity$1 ? fexpr__73656.cljs$core$IFn$_invoke$arity$1(G__73657) : fexpr__73656.call(null,G__73657));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__73658 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73658,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73658,(1),null);
if((!((ev_id instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689),taoensso.sente.expected(new cljs.core.Keyword(null,"keyword","keyword",811389747),ev_id)], null);
} else {
if(cljs.core.not(cljs.core.namespace(ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772),taoensso.sente.expected(new cljs.core.Keyword(null,"namespaced-keyword","namespaced-keyword",131372895),ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__5804__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5804__auto__)){
var errs = temp__5804__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event(x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__5802__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5802__auto__)){
var errs = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__5041__auto__ = cljs.core.map_QMARK_(x);
if(and__5041__auto__){
var and__5041__auto____$1 = taoensso.encore.ks_GT__EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__5041__auto____$1){
var map__73661 = x;
var map__73661__$1 = cljs.core.__destructure_map(map__73661);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73661__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73661__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73661__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73661__$1,new cljs.core.Keyword(null,"event","event",301435442));
return ((taoensso.encore.chan_QMARK_(ch_recv)) && (((cljs.core.ifn_QMARK_(send_fn)) && (((taoensso.encore.atom_QMARK_(state)) && (taoensso.sente.event_QMARK_(event)))))));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__5041__auto__ = cljs.core.map_QMARK_(x);
if(and__5041__auto__){
var and__5041__auto____$1 = taoensso.encore.ks_GT__EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__5041__auto____$1){
var map__73662 = x;
var map__73662__$1 = cljs.core.__destructure_map(map__73662);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73662__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73662__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73662__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var send_buffers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73662__$1,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787));
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73662__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73662__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73662__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73662__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
return ((taoensso.encore.chan_QMARK_(ch_recv)) && (((cljs.core.ifn_QMARK_(send_fn)) && (((taoensso.encore.atom_QMARK_(connected_uids)) && (((taoensso.encore.atom_QMARK_(send_buffers)) && (((cljs.core.map_QMARK_(ring_req)) && (((taoensso.encore.nblank_str_QMARK_(client_id)) && (((taoensso.sente.event_QMARK_(event)) && ((((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_(_QMARK_reply_fn)))))))))))))))));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__73663){
var map__73664 = p__73663;
var map__73664__$1 = cljs.core.__destructure_map(map__73664);
var ev_msg = map__73664__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73664__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73664__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__73665 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73665,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73665,(1),null);
var valid_event = vec__73665;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null)], 0));
if((!(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_)))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,194,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
}),null)),null,-2047922457,null);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
var fexpr__73668 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null);
return (fexpr__73668.cljs$core$IFn$_invoke$arity$1 ? fexpr__73668.cljs$core$IFn$_invoke$arity$1(cb_reply_clj) : fexpr__73668.call(null,cb_reply_clj));
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not(taoensso.sente.cb_error_QMARK_(cb_reply_clj));
});
/**
 * Returns [<packed> <?format>]. Used to support some minimal backwards
 *   compatibility between v2 `pack` and v1 `unpack`.
 */
taoensso.sente.parse_packed = (function taoensso$sente$parse_packed(packed){
if(typeof packed === 'string'){
if(taoensso.encore.str_starts_with_QMARK_(packed,"+")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(packed,(1)),new cljs.core.Keyword("v1","wrapped","v1/wrapped",1775176340)], null);
} else {
if(taoensso.encore.str_starts_with_QMARK_(packed,"-")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(packed,(1)),new cljs.core.Keyword("v1","unwrapped","v1/unwrapped",-1881590983)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [packed,new cljs.core.Keyword("v2","unwrapped","v2/unwrapped",-1881590982)], null);

}
}
} else {
return packed;
}
});
/**
 * packed->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,packed){
var vec__73669 = taoensso.sente.parse_packed(packed);
var packed__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73669,(0),null);
var _QMARK_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73669,(1),null);
var unpacked = (function (){try{return taoensso.sente.interfaces.unpack(packer,packed__$1);
}catch (e73675){var t = e73675;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,226,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",packed__$1,t], null);
}),null)),null,-1717766287,null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),packed__$1], null);
}})();
var vec__73672 = (function (){var G__73676 = _QMARK_format;
var G__73676__$1 = (((G__73676 instanceof cljs.core.Keyword))?G__73676.fqn:null);
switch (G__73676__$1) {
case "v1/wrapped":
return unpacked;

break;
case "v1/unwrapped":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [unpacked,null], null);

break;
case "v2/unwrapped":
return unpacked;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73676__$1)].join('')));

}
})();
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73672,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73672,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null);
});
/**
 * Advanced option, most users can ignore this var. Only necessary
 *   for those that want to use Sente < v1.18 with a non-standard
 *   IPacker that deals with non-string payloads.
 * 
 *   Details:
 *  Sente uses a private message format as an implementation detail
 *  for client<->server comms.
 * 
 *  As part of [#398], this format is being updated to support
 *  non-string (e.g. binary) payloads.
 * 
 *  Unfortunately updating the format is non-trivial because:
 *    1. Both the client & server need to support the same format.
 *    2. Clients are often served as cached cl/js.
 * 
 *  To help ease migration, the new pack format is being rolled out
 *  in stages:
 * 
 *    Sente <= v1.16: reads  v1 format only
 *                    writes v1 format only
 * 
 *    Sente    v1.17: reads  v1 and v2 formats
 *                    writes v1 and v2 formats (v1 default) <- Currently here
 * 
 *    Sente    v1.18: reads  v1 and v2 formats
 *                    writes v1 and v2 formats (v2 default)
 * 
 *    Sente >= v1.19: reads  v2 format only
 *                    writes v2 format only
 * 
 *  This var controls which format to use for writing.
 *  Override default with `alter-var-root` or `binding`.
 */
taoensso.sente._STAR_write_legacy_pack_format_QMARK__STAR_ = true;
/**
 * [clj ?cb-uuid]->packed
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__73678 = arguments.length;
switch (G__73678) {
case 2:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2 = (function (packer,clj){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer,clj,null);
}));

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var packed = taoensso.sente.interfaces.pack(packer,(function (){var temp__5806__auto__ = _QMARK_cb_uuid__$1;
if((temp__5806__auto__ == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null);
} else {
var cb_uuid = temp__5806__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,cb_uuid], null);
}
})());
if(cljs.core.truth_(taoensso.sente._STAR_write_legacy_pack_format_QMARK__STAR_)){
return ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof packed === 'string')?packed:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",287,"(string? packed)",packed,null,null)))].join('');
} else {
return packed;
}
}));

(taoensso.sente.pack.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
});
(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1(x);
}));

(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(s);
}));

(taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.sente.EdnPacker.cljs$lang$type = true);

(taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker");

(taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"taoensso.sente/EdnPacker");
}));

/**
 * Positional factory function for taoensso.sente/EdnPacker.
 */
taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__73679_SHARP_){
if((!((p1__73679_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__73679_SHARP_.taoensso$sente$interfaces$IPacker$)))){
return true;
} else {
if((!p1__73679_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__73679_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__73679_SHARP_);
}
})(x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e73680){if((e73680 instanceof Error)){
var e = e73680;
return e;
} else {
throw e73680;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",305,"((fn* [p1__73679#] (satisfies? interfaces/IPacker p1__73679#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0();


/**
 * Alpha, subject to change.
 *   Returns true iff given Ring request is allowed by `allowed-origins`.
 *   `allowed-origins` may be `:all` or #{<origin> ...}.
 */
taoensso.sente.allow_origin_QMARK_ = (function taoensso$sente$allow_origin_QMARK_(allowed_origins,ring_req){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allowed_origins,new cljs.core.Keyword(null,"all","all",892129742))){
return true;
} else {
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"headers","headers",-835030129));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers,"origin",new cljs.core.Keyword(null,"nx","nx",-1996436366));
var have_origin_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(origin,new cljs.core.Keyword(null,"nx","nx",-1996436366));
if(((have_origin_QMARK_) && (cljs.core.contains_QMARK_(cljs.core.set(allowed_origins),origin)))){
return true;
} else {
var referer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers,"referer","");
if(cljs.core.truth_((function (){var and__5041__auto__ = (!(have_origin_QMARK_));
if(and__5041__auto__){
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2((function (p1__73682_SHARP_){
return clojure.string.starts_with_QMARK_(referer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__73682_SHARP_),"/"].join(''));
}),allowed_origins);
} else {
return and__5041__auto__;
}
})())){
return true;
} else {
return false;
}
}
}
});
/**
 * Takes a web server adapter[1] and returns a map with keys:
 * 
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn                     ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req])  for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req])  for Ring GET + chsk URL.
 * 
 *  :connected-uids ;             Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 *  :send-buffers   ; Implementation detail, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Security options:
 * 
 *  :allowed-origins   ; e.g. #{"http://site.com" ...}, defaults to :all. ; Alpha
 * 
 *  :csrf-token-fn     ; ?(fn [ring-req]) -> CSRF-token for Ajax POSTs and WS handshake.
 *                     ; CSRF check will be skipped iff nil (NOT RECOMMENDED!).
 * 
 *  :authorized?-fn    ; ?(fn [ring-req]) -> When non-nil, (authorized?-fn <ring-req>)
 *                     ; must return truthy, otherwise connection requests will be
 *                     ; rejected with (unauthorized-fn <ring-req>) response.
 *                     ;
 *                     ; May check Authroization HTTP header, etc.
 * 
 *  :?unauthorized-fn  ; An alternative API to `authorized?-fn`+`unauthorized-fn` pair.
 *                     ; ?(fn [ring-req)) -> <?rejection-resp>. I.e. when return value
 *                     ; is non-nil, connection requests will be rejected with that
 *                     ; non-nil value.
 * 
 *   Other common options:
 * 
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___74440 = arguments.length;
var i__5767__auto___74441 = (0);
while(true){
if((i__5767__auto___74441 < len__5766__auto___74440)){
args__5772__auto__.push((arguments[i__5767__auto___74441]));

var G__74443 = (i__5767__auto___74441 + (1));
i__5767__auto___74441 = G__74443;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__73686){
var vec__73687 = p__73686;
var map__73690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73687,(0),null);
var map__73690__$1 = cljs.core.__destructure_map(map__73690);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73690__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(25)], 0)));
var _QMARK_unauthorized_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73690__$1,new cljs.core.Keyword(null,"?unauthorized-fn","?unauthorized-fn",-1883475616));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73690__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var allowed_origins = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73690__$1,new cljs.core.Keyword(null,"allowed-origins","allowed-origins",1477851683),new cljs.core.Keyword(null,"all","all",892129742));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73690__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73690__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),(function (ring_req){
var or__5043__auto__ = new cljs.core.Keyword(null,"anti-forgery-token","anti-forgery-token",806990841).cljs$core$IFn$_invoke$arity$1(ring_req);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
}
}));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73690__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var unauthorized_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73690__$1,new cljs.core.Keyword(null,"unauthorized-fn","unauthorized-fn",-2032603957),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(401),new cljs.core.Keyword(null,"body","body",-2049205669),"Unauthorized request"], null);
}));
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73690__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var bad_origin_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73690__$1,new cljs.core.Keyword(null,"bad-origin-fn","bad-origin-fn",1385595727),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Unauthorized origin"], null);
}));
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73690__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),(function (ring_req){
return null;
}));
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73690__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),(function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
}));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73690__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((1000)));
var authorized_QMARK__fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73690__$1,new cljs.core.Keyword(null,"authorized?-fn","authorized?-fn",-1334669261));
var bad_csrf_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73690__$1,new cljs.core.Keyword(null,"bad-csrf-fn","bad-csrf-fn",16619032),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Bad CSRF token"], null);
}));
var e_74452 = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e73691){if((e73691 instanceof Error)){
var e_74452 = e73691;
return e_74452;
} else {
throw e73691;

}
}})();
if((e_74452 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",449,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e_74452,null);
}

var e_74453 = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e73692){if((e73692 instanceof Error)){
var e_74453 = e73692;
return e_74453;
} else {
throw e73692;

}
}})();
if((e_74453 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",449,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e_74453,null);
}


var e_74454 = (function (){try{if((function (p1__73683_SHARP_){
if((!((p1__73683_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__73683_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)))){
return true;
} else {
if((!p1__73683_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__73683_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__73683_SHARP_);
}
})(web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e73693){if((e73693 instanceof Error)){
var e_74454 = e73693;
return e_74454;
} else {
throw e73693;

}
}})();
if((e_74454 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",450,"((fn* [p1__73683#] (satisfies? interfaces/IServerChanAdapter p1__73683#)) web-server-ch-adapter)",web_server_ch_adapter,e_74454,null);
}

var max_ms_74457 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_74457)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_74457)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_74457], null));
} else {
}

var allowed_origins__$1 = (cljs.core.truth_((function (x){
var or__5043__auto__ = cljs.core.set_QMARK_(x);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var fexpr__73695 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all","all",892129742),null], null), null);
return (fexpr__73695.cljs$core$IFn$_invoke$arity$1 ? fexpr__73695.cljs$core$IFn$_invoke$arity$1(x) : fexpr__73695.call(null,x));
}
})(allowed_origins))?allowed_origins:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",459,"([:or set? #{:all}] allowed-origins)",allowed_origins,null,null));
var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = (function (ring_req,client_id){
var or__5043__auto__ = (function (){var G__73696 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__73696) : user_id_fn.call(null,G__73696));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});
var conns_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = (function() {
var G__74461 = null;
var G__74461__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (_QMARK_v){
var vec__73697 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73697,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73697,(1),null);
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
}));
});
var G__74461__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (_QMARK_v){
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
}));
});
G__74461 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__74461__3.call(this,conn_type,uid,client_id);
case 4:
return G__74461__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__74461.cljs$core$IFn$_invoke$arity$3 = G__74461__3;
G__74461.cljs$core$IFn$_invoke$arity$4 = G__74461__4;
return G__74461;
})()
;
var connect_uid_BANG_ = (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e73700){if((e73700 instanceof Error)){
var e = e73700;
return e;
} else {
throw e73700;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",495,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__73701){
var map__73702 = p__73701;
var map__73702__$1 = cljs.core.__destructure_map(map__73702);
var old_m = map__73702__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73702__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73702__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73702__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__73703 = conn_type;
var G__73703__$1 = (((G__73703 instanceof cljs.core.Keyword))?G__73703.fqn:null);
switch (G__73703__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax__$1,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73703__$1)].join('')));

}
})();
return taoensso.encore.swapped(new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((((!(cljs.core.contains_QMARK_(old_any,uid)))) && (cljs.core.contains_QMARK_(new_any,uid)))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
}));
return newly_connected_QMARK_;
});
var upd_connected_uid_BANG_ = (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e73704){if((e73704 instanceof Error)){
var e = e73704;
return e;
} else {
throw e73704;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",512,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__73705){
var map__73706 = p__73705;
var map__73706__$1 = cljs.core.__destructure_map(map__73706);
var old_m = map__73706__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73706__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73706__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73706__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref(conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = ((any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_));
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(any,uid))], null);
return taoensso.encore.swapped(new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if(((cljs.core.contains_QMARK_(old_any,uid)) && ((!(cljs.core.contains_QMARK_(new_any,uid)))))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
}));
return newly_disconnected_QMARK_;
});
var send_fn = (function() { 
var G__74472__delegate = function (user_id,ev,p__73707){
var vec__73708 = p__73707;
var map__73711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73708,(0),null);
var map__73711__$1 = cljs.core.__destructure_map(map__73711);
var opts = map__73711__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73711__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_74473 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __74474 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,538,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_74473,ev], null);
}),null)),null,2097306188,null);
var __74475__$1 = (cljs.core.truth_(uid_74473)?null:(function(){throw (new Error(["Assert failed: ",["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join(''),"\n","uid"].join('')))})());
var __74476__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_74477 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__74478 = (function (conn_type){
var temp__5804__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),(function (m){
var vec__73712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_74473);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73712,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73712,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_74477)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_74473),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_74473));
} else {
return taoensso.encore.swapped(m,null);
}
}));
if(cljs.core.truth_(temp__5804__auto__)){
var pulled = temp__5804__auto__;
var vec__73715 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73715,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73715,(1),null);
if(cljs.core.vector_QMARK_(buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",566,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_(ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",567,"(set? ev-uuids)",ev_uuids,null,null);
}

var buffered_evs_ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,buffered_evs);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,570,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s",buffered_evs_ppstr], null);
}),null)),null,-901229301,null);

var G__73718 = conn_type;
var G__73718__$1 = (((G__73718 instanceof cljs.core.Keyword))?G__73718.fqn:null);
switch (G__73718__$1) {
case "ws":
return (taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4 ? taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4(conns_,uid_74473,buffered_evs_ppstr,upd_conn_BANG_) : taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_74473,buffered_evs_ppstr,upd_conn_BANG_));

break;
case "ajax":
return (taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,uid_74473,buffered_evs_ppstr) : taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_74473,buffered_evs_ppstr));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73718__$1)].join('')));

}
} else {
return null;
}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,579,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_74473], null);
}),null)),null,-316680956,null);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__74478(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__74478(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__73719_74480 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_74473], null))));
var chunk__73720_74481 = null;
var count__73721_74482 = (0);
var i__73722_74483 = (0);
while(true){
if((i__73722_74483 < count__73721_74482)){
var vec__73729_74484 = chunk__73720_74481.cljs$core$IIndexed$_nth$arity$2(null,i__73722_74483);
var _QMARK_sch_74485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73729_74484,(0),null);
var _udt_74486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73729_74484,(1),null);
var temp__5804__auto___74487 = _QMARK_sch_74485;
if(cljs.core.truth_(temp__5804__auto___74487)){
var sch_74488 = temp__5804__auto___74487;
taoensso.sente.interfaces.sch_close_BANG_(sch_74488);
} else {
}


var G__74489 = seq__73719_74480;
var G__74490 = chunk__73720_74481;
var G__74491 = count__73721_74482;
var G__74492 = (i__73722_74483 + (1));
seq__73719_74480 = G__74489;
chunk__73720_74481 = G__74490;
count__73721_74482 = G__74491;
i__73722_74483 = G__74492;
continue;
} else {
var temp__5804__auto___74493 = cljs.core.seq(seq__73719_74480);
if(temp__5804__auto___74493){
var seq__73719_74494__$1 = temp__5804__auto___74493;
if(cljs.core.chunked_seq_QMARK_(seq__73719_74494__$1)){
var c__5565__auto___74495 = cljs.core.chunk_first(seq__73719_74494__$1);
var G__74496 = cljs.core.chunk_rest(seq__73719_74494__$1);
var G__74497 = c__5565__auto___74495;
var G__74498 = cljs.core.count(c__5565__auto___74495);
var G__74499 = (0);
seq__73719_74480 = G__74496;
chunk__73720_74481 = G__74497;
count__73721_74482 = G__74498;
i__73722_74483 = G__74499;
continue;
} else {
var vec__73732_74500 = cljs.core.first(seq__73719_74494__$1);
var _QMARK_sch_74501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73732_74500,(0),null);
var _udt_74502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73732_74500,(1),null);
var temp__5804__auto___74503__$1 = _QMARK_sch_74501;
if(cljs.core.truth_(temp__5804__auto___74503__$1)){
var sch_74504 = temp__5804__auto___74503__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_74504);
} else {
}


var G__74505 = cljs.core.next(seq__73719_74494__$1);
var G__74506 = null;
var G__74507 = (0);
var G__74508 = (0);
seq__73719_74480 = G__74505;
chunk__73720_74481 = G__74506;
count__73721_74482 = G__74507;
i__73722_74483 = G__74508;
continue;
}
} else {
}
}
break;
}

var seq__73735_74509 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_74473], null))));
var chunk__73736_74510 = null;
var count__73737_74511 = (0);
var i__73738_74512 = (0);
while(true){
if((i__73738_74512 < count__73737_74511)){
var vec__73745_74513 = chunk__73736_74510.cljs$core$IIndexed$_nth$arity$2(null,i__73738_74512);
var _QMARK_sch_74514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73745_74513,(0),null);
var _udt_74515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73745_74513,(1),null);
var temp__5804__auto___74516 = _QMARK_sch_74514;
if(cljs.core.truth_(temp__5804__auto___74516)){
var sch_74517 = temp__5804__auto___74516;
taoensso.sente.interfaces.sch_close_BANG_(sch_74517);
} else {
}


var G__74518 = seq__73735_74509;
var G__74519 = chunk__73736_74510;
var G__74520 = count__73737_74511;
var G__74521 = (i__73738_74512 + (1));
seq__73735_74509 = G__74518;
chunk__73736_74510 = G__74519;
count__73737_74511 = G__74520;
i__73738_74512 = G__74521;
continue;
} else {
var temp__5804__auto___74522 = cljs.core.seq(seq__73735_74509);
if(temp__5804__auto___74522){
var seq__73735_74523__$1 = temp__5804__auto___74522;
if(cljs.core.chunked_seq_QMARK_(seq__73735_74523__$1)){
var c__5565__auto___74524 = cljs.core.chunk_first(seq__73735_74523__$1);
var G__74525 = cljs.core.chunk_rest(seq__73735_74523__$1);
var G__74526 = c__5565__auto___74524;
var G__74527 = cljs.core.count(c__5565__auto___74524);
var G__74528 = (0);
seq__73735_74509 = G__74525;
chunk__73736_74510 = G__74526;
count__73737_74511 = G__74527;
i__73738_74512 = G__74528;
continue;
} else {
var vec__73748_74529 = cljs.core.first(seq__73735_74523__$1);
var _QMARK_sch_74530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73748_74529,(0),null);
var _udt_74531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73748_74529,(1),null);
var temp__5804__auto___74532__$1 = _QMARK_sch_74530;
if(cljs.core.truth_(temp__5804__auto___74532__$1)){
var sch_74533 = temp__5804__auto___74532__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_74533);
} else {
}


var G__74534 = cljs.core.next(seq__73735_74523__$1);
var G__74535 = null;
var G__74536 = (0);
var G__74537 = (0);
seq__73735_74509 = G__74534;
chunk__73736_74510 = G__74535;
count__73737_74511 = G__74536;
i__73738_74512 = G__74537;
continue;
}
} else {
}
}
break;
}
} else {
var seq__73751_74538 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__73752_74539 = null;
var count__73753_74540 = (0);
var i__73754_74541 = (0);
while(true){
if((i__73754_74541 < count__73753_74540)){
var conn_type_74542 = chunk__73752_74539.cljs$core$IIndexed$_nth$arity$2(null,i__73754_74541);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_74542,uid_74473], null),((function (seq__73751_74538,chunk__73752_74539,count__73753_74540,i__73754_74541,conn_type_74542,uid_74473,__74474,__74475__$1,__74476__$2,ev_uuid_74477,flush_buffer_BANG__74478,vec__73708,map__73711,map__73711__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__73687,map__73690,map__73690__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_74477])], null);
} else {
var vec__73761 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73761,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73761,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_74477)], null);
}
});})(seq__73751_74538,chunk__73752_74539,count__73753_74540,i__73754_74541,conn_type_74542,uid_74473,__74474,__74475__$1,__74476__$2,ev_uuid_74477,flush_buffer_BANG__74478,vec__73708,map__73711,map__73711__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__73687,map__73690,map__73690__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn))
);


var G__74543 = seq__73751_74538;
var G__74544 = chunk__73752_74539;
var G__74545 = count__73753_74540;
var G__74546 = (i__73754_74541 + (1));
seq__73751_74538 = G__74543;
chunk__73752_74539 = G__74544;
count__73753_74540 = G__74545;
i__73754_74541 = G__74546;
continue;
} else {
var temp__5804__auto___74547 = cljs.core.seq(seq__73751_74538);
if(temp__5804__auto___74547){
var seq__73751_74548__$1 = temp__5804__auto___74547;
if(cljs.core.chunked_seq_QMARK_(seq__73751_74548__$1)){
var c__5565__auto___74549 = cljs.core.chunk_first(seq__73751_74548__$1);
var G__74550 = cljs.core.chunk_rest(seq__73751_74548__$1);
var G__74551 = c__5565__auto___74549;
var G__74552 = cljs.core.count(c__5565__auto___74549);
var G__74553 = (0);
seq__73751_74538 = G__74550;
chunk__73752_74539 = G__74551;
count__73753_74540 = G__74552;
i__73754_74541 = G__74553;
continue;
} else {
var conn_type_74554 = cljs.core.first(seq__73751_74548__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_74554,uid_74473], null),((function (seq__73751_74538,chunk__73752_74539,count__73753_74540,i__73754_74541,conn_type_74554,seq__73751_74548__$1,temp__5804__auto___74547,uid_74473,__74474,__74475__$1,__74476__$2,ev_uuid_74477,flush_buffer_BANG__74478,vec__73708,map__73711,map__73711__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__73687,map__73690,map__73690__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_74477])], null);
} else {
var vec__73764 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73764,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73764,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_74477)], null);
}
});})(seq__73751_74538,chunk__73752_74539,count__73753_74540,i__73754_74541,conn_type_74554,seq__73751_74548__$1,temp__5804__auto___74547,uid_74473,__74474,__74475__$1,__74476__$2,ev_uuid_74477,flush_buffer_BANG__74478,vec__73708,map__73711,map__73711__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__73687,map__73690,map__73690__$1,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,csrf_token_fn,packer,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn))
);


var G__74555 = cljs.core.next(seq__73751_74548__$1);
var G__74556 = null;
var G__74557 = (0);
var G__74558 = (0);
seq__73751_74538 = G__74555;
chunk__73752_74539 = G__74556;
count__73753_74540 = G__74557;
i__73754_74541 = G__74558;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__74478(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__74478(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_74559 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_74560 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__57853__auto___74561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_73771){
var state_val_73772 = (state_73771[(1)]);
if((state_val_73772 === (1))){
var state_73771__$1 = state_73771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73771__$1,(2),ws_timeout_74559);
} else {
if((state_val_73772 === (2))){
var inst_73768 = (state_73771[(2)]);
var inst_73769 = flush_buffer_BANG__74478(new cljs.core.Keyword(null,"ws","ws",86841443));
var state_73771__$1 = (function (){var statearr_73773 = state_73771;
(statearr_73773[(7)] = inst_73768);

return statearr_73773;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_73771__$1,inst_73769);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__57795__auto__ = null;
var taoensso$sente$state_machine__57795__auto____0 = (function (){
var statearr_73774 = [null,null,null,null,null,null,null,null];
(statearr_73774[(0)] = taoensso$sente$state_machine__57795__auto__);

(statearr_73774[(1)] = (1));

return statearr_73774;
});
var taoensso$sente$state_machine__57795__auto____1 = (function (state_73771){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_73771);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e73775){var ex__57798__auto__ = e73775;
var statearr_73776_74562 = state_73771;
(statearr_73776_74562[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_73771[(4)]))){
var statearr_73777_74563 = state_73771;
(statearr_73777_74563[(1)] = cljs.core.first((state_73771[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74564 = state_73771;
state_73771 = G__74564;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
taoensso$sente$state_machine__57795__auto__ = function(state_73771){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__57795__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__57795__auto____1.call(this,state_73771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__57795__auto____0;
taoensso$sente$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__57795__auto____1;
return taoensso$sente$state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_73778 = f__57854__auto__();
(statearr_73778[(6)] = c__57853__auto___74561);

return statearr_73778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));


var c__57853__auto___74565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_73783){
var state_val_73784 = (state_73783[(1)]);
if((state_val_73784 === (1))){
var state_73783__$1 = state_73783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73783__$1,(2),ajax_timeout_74560);
} else {
if((state_val_73784 === (2))){
var inst_73780 = (state_73783[(2)]);
var inst_73781 = flush_buffer_BANG__74478(new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_73783__$1 = (function (){var statearr_73785 = state_73783;
(statearr_73785[(7)] = inst_73780);

return statearr_73785;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_73783__$1,inst_73781);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__57795__auto__ = null;
var taoensso$sente$state_machine__57795__auto____0 = (function (){
var statearr_73786 = [null,null,null,null,null,null,null,null];
(statearr_73786[(0)] = taoensso$sente$state_machine__57795__auto__);

(statearr_73786[(1)] = (1));

return statearr_73786;
});
var taoensso$sente$state_machine__57795__auto____1 = (function (state_73783){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_73783);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e73787){var ex__57798__auto__ = e73787;
var statearr_73788_74566 = state_73783;
(statearr_73788_74566[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_73783[(4)]))){
var statearr_73789_74567 = state_73783;
(statearr_73789_74567[(1)] = cljs.core.first((state_73783[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74568 = state_73783;
state_73783 = G__74568;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
taoensso$sente$state_machine__57795__auto__ = function(state_73783){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__57795__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__57795__auto____1.call(this,state_73783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__57795__auto____0;
taoensso$sente$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__57795__auto____1;
return taoensso$sente$state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_73790 = f__57854__auto__();
(statearr_73790[(6)] = c__57853__auto___74565);

return statearr_73790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));

}
}

return null;
};
var G__74472 = function (user_id,ev,var_args){
var p__73707 = null;
if (arguments.length > 2) {
var G__74569__i = 0, G__74569__a = new Array(arguments.length -  2);
while (G__74569__i < G__74569__a.length) {G__74569__a[G__74569__i] = arguments[G__74569__i + 2]; ++G__74569__i;}
  p__73707 = new cljs.core.IndexedSeq(G__74569__a,0,null);
} 
return G__74472__delegate.call(this,user_id,ev,p__73707);};
G__74472.cljs$lang$maxFixedArity = 2;
G__74472.cljs$lang$applyTo = (function (arglist__74570){
var user_id = cljs.core.first(arglist__74570);
arglist__74570 = cljs.core.next(arglist__74570);
var ev = cljs.core.first(arglist__74570);
var p__73707 = cljs.core.rest(arglist__74570);
return G__74472__delegate(user_id,ev,p__73707);
});
G__74472.cljs$core$IFn$_invoke$arity$variadic = G__74472__delegate;
return G__74472;
})()
;
var bad_csrf_QMARK_ = (function (ring_req){
if((csrf_token_fn == null)){
return false;
} else {
var temp__5802__auto__ = (csrf_token_fn.cljs$core$IFn$_invoke$arity$1 ? csrf_token_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : csrf_token_fn.call(null,ring_req));
if(cljs.core.truth_(temp__5802__auto__)){
var reference_csrf_token = temp__5802__auto__;
var csrf_token_from_client = (function (){var or__5043__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-csrf-token"], null));
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-xsrf-token"], null));
}
}
})();
return cljs.core.not(taoensso.encore.const_str_EQ_(reference_csrf_token,csrf_token_from_client));
} else {
return true;
}
}
});
var unauthorized_QMARK_ = (function (ring_req){
if((authorized_QMARK__fn == null)){
return false;
} else {
return cljs.core.not((authorized_QMARK__fn.cljs$core$IFn$_invoke$arity$1 ? authorized_QMARK__fn.cljs$core$IFn$_invoke$arity$1(ring_req) : authorized_QMARK__fn.call(null,ring_req)));
}
});
var possible_rejection_resp = (function (ring_req){
if(bad_csrf_QMARK_(ring_req)){
return (bad_csrf_fn.cljs$core$IFn$_invoke$arity$1 ? bad_csrf_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_csrf_fn.call(null,ring_req));
} else {
if(taoensso.sente.allow_origin_QMARK_(allowed_origins__$1,ring_req)){
if(unauthorized_QMARK_(ring_req)){
return (unauthorized_fn.cljs$core$IFn$_invoke$arity$1 ? unauthorized_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : unauthorized_fn.call(null,ring_req));
} else {
var b2__66254__auto__ = (function (){var temp__5804__auto__ = _QMARK_unauthorized_fn;
if(cljs.core.truth_(temp__5804__auto__)){
var uf = temp__5804__auto__;
return (uf.cljs$core$IFn$_invoke$arity$1 ? uf.cljs$core$IFn$_invoke$arity$1(ring_req) : uf.call(null,ring_req));
} else {
return null;
}
})();
if((b2__66254__auto__ == null)){
return null;
} else {
var unauthorized_resp = b2__66254__auto__;
return unauthorized_resp;
}
}
} else {
return (bad_origin_fn.cljs$core$IFn$_invoke$arity$1 ? bad_origin_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_origin_fn.call(null,ring_req));
}
}
});
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787),send_buffers_], null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787),send_buffers_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),(function (ring_req){
var b2__66237__auto__ = possible_rejection_resp(ring_req);
if(cljs.core.truth_(b2__66237__auto__)){
var resp = b2__66237__auto__;
return resp;
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (server_ch,websocket_QMARK_){
if(cljs.core.not(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__73791 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73791,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73791,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (resp_clj){
if(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,697,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
}),null)),null,-69866215,null);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,resp_clj));
} else {
return null;
}
});
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1(ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)], 0)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__5804__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5804__auto__)){
var ms = temp__5804__auto__;
var c__57853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_73799){
var state_val_73800 = (state_73799[(1)]);
if((state_val_73800 === (1))){
var inst_73794 = cljs.core.async.timeout(ms);
var state_73799__$1 = state_73799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73799__$1,(2),inst_73794);
} else {
if((state_val_73800 === (2))){
var inst_73796 = (state_73799[(2)]);
var inst_73797 = reply_fn(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_73799__$1 = (function (){var statearr_73801 = state_73799;
(statearr_73801[(7)] = inst_73796);

return statearr_73801;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_73799__$1,inst_73797);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__57795__auto__ = null;
var taoensso$sente$state_machine__57795__auto____0 = (function (){
var statearr_73802 = [null,null,null,null,null,null,null,null];
(statearr_73802[(0)] = taoensso$sente$state_machine__57795__auto__);

(statearr_73802[(1)] = (1));

return statearr_73802;
});
var taoensso$sente$state_machine__57795__auto____1 = (function (state_73799){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_73799);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e73803){var ex__57798__auto__ = e73803;
var statearr_73804_74579 = state_73799;
(statearr_73804_74579[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_73799[(4)]))){
var statearr_73805_74580 = state_73799;
(statearr_73805_74580[(1)] = cljs.core.first((state_73799[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74581 = state_73799;
state_73799 = G__74581;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
taoensso$sente$state_machine__57795__auto__ = function(state_73799){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__57795__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__57795__auto____1.call(this,state_73799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__57795__auto____0;
taoensso$sente$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__57795__auto____1;
return taoensso$sente$state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_73806 = f__57854__auto__();
(statearr_73806[(6)] = c__57853__auto__);

return statearr_73806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));

return c__57853__auto__;
} else {
return null;
}
} else {
return reply_fn(new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
})], null));
}
}),new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),(function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1(ring_req,client_id);
var receive_event_msg_BANG_ = (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.cljs$core$IFn$_invoke$arity$2(event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)], 0)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;
var send_handshake_BANG_ = (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,741,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
}),null)),null,400160230,null);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null,ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,handshake_ev));
});
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,754,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[err_msg,": %s"].join(''),ring_req], null);
}),null)),null,1663302887,null);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
var b2__66237__auto__ = possible_rejection_resp(ring_req);
if(cljs.core.truth_(b2__66237__auto__)){
var resp = b2__66237__auto__;
return resp;
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,765,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
}),null)),null,-490783259,null);
var updated_conn = upd_conn_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

send_handshake_BANG_(server_ch,websocket_QMARK_);

var temp__5804__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__5804__auto__)){
var ms = temp__5804__auto__;
var c__57853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_73843){
var state_val_73844 = (state_73843[(1)]);
if((state_val_73844 === (7))){
var inst_73839 = (state_73843[(2)]);
var state_73843__$1 = state_73843;
var statearr_73845_74603 = state_73843__$1;
(statearr_73845_74603[(2)] = inst_73839);

(statearr_73845_74603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73844 === (1))){
var inst_73807 = udt_open;
var inst_73808 = inst_73807;
var state_73843__$1 = (function (){var statearr_73846 = state_73843;
(statearr_73846[(7)] = inst_73808);

return statearr_73846;
})();
var statearr_73847_74604 = state_73843__$1;
(statearr_73847_74604[(2)] = null);

(statearr_73847_74604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73844 === (4))){
var inst_73817 = (state_73843[(8)]);
var inst_73812 = (state_73843[(2)]);
var inst_73813 = cljs.core.deref(conns_);
var inst_73814 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73815 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_73816 = (new cljs.core.PersistentVector(null,3,(5),inst_73814,inst_73815,null));
var inst_73817__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_73813,inst_73816);
var state_73843__$1 = (function (){var statearr_73848 = state_73843;
(statearr_73848[(9)] = inst_73812);

(statearr_73848[(8)] = inst_73817__$1);

return statearr_73848;
})();
if(cljs.core.truth_(inst_73817__$1)){
var statearr_73849_74605 = state_73843__$1;
(statearr_73849_74605[(1)] = (5));

} else {
var statearr_73850_74606 = state_73843__$1;
(statearr_73850_74606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73844 === (13))){
var inst_73823 = (state_73843[(10)]);
var inst_73832 = (state_73843[(2)]);
var inst_73808 = inst_73823;
var state_73843__$1 = (function (){var statearr_73851 = state_73843;
(statearr_73851[(7)] = inst_73808);

(statearr_73851[(11)] = inst_73832);

return statearr_73851;
})();
var statearr_73852_74607 = state_73843__$1;
(statearr_73852_74607[(2)] = null);

(statearr_73852_74607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73844 === (6))){
var state_73843__$1 = state_73843;
var statearr_73853_74608 = state_73843__$1;
(statearr_73853_74608[(2)] = null);

(statearr_73853_74608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73844 === (3))){
var inst_73841 = (state_73843[(2)]);
var state_73843__$1 = state_73843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73843__$1,inst_73841);
} else {
if((state_val_73844 === (12))){
var state_73843__$1 = state_73843;
var statearr_73854_74609 = state_73843__$1;
(statearr_73854_74609[(2)] = null);

(statearr_73854_74609[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73844 === (2))){
var inst_73810 = cljs.core.async.timeout(ms);
var state_73843__$1 = state_73843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73843__$1,(4),inst_73810);
} else {
if((state_val_73844 === (11))){
var inst_73828 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_73829 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_73828);
var state_73843__$1 = state_73843;
var statearr_73855_74610 = state_73843__$1;
(statearr_73855_74610[(2)] = inst_73829);

(statearr_73855_74610[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73844 === (9))){
var state_73843__$1 = state_73843;
var statearr_73856_74611 = state_73843__$1;
(statearr_73856_74611[(2)] = null);

(statearr_73856_74611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73844 === (5))){
var inst_73817 = (state_73843[(8)]);
var inst_73822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73817,(0),null);
var inst_73823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73817,(1),null);
var inst_73824 = taoensso.sente.interfaces.sch_open_QMARK_(server_ch);
var state_73843__$1 = (function (){var statearr_73857 = state_73843;
(statearr_73857[(12)] = inst_73822);

(statearr_73857[(10)] = inst_73823);

return statearr_73857;
})();
if(cljs.core.truth_(inst_73824)){
var statearr_73858_74612 = state_73843__$1;
(statearr_73858_74612[(1)] = (8));

} else {
var statearr_73859_74613 = state_73843__$1;
(statearr_73859_74613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73844 === (10))){
var inst_73836 = (state_73843[(2)]);
var state_73843__$1 = state_73843;
var statearr_73860_74614 = state_73843__$1;
(statearr_73860_74614[(2)] = inst_73836);

(statearr_73860_74614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73844 === (8))){
var inst_73808 = (state_73843[(7)]);
var inst_73823 = (state_73843[(10)]);
var inst_73826 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_73823,inst_73808);
var state_73843__$1 = state_73843;
if(inst_73826){
var statearr_73861_74615 = state_73843__$1;
(statearr_73861_74615[(1)] = (11));

} else {
var statearr_73862_74616 = state_73843__$1;
(statearr_73862_74616[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var taoensso$sente$state_machine__57795__auto__ = null;
var taoensso$sente$state_machine__57795__auto____0 = (function (){
var statearr_73863 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73863[(0)] = taoensso$sente$state_machine__57795__auto__);

(statearr_73863[(1)] = (1));

return statearr_73863;
});
var taoensso$sente$state_machine__57795__auto____1 = (function (state_73843){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_73843);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e73864){var ex__57798__auto__ = e73864;
var statearr_73865_74617 = state_73843;
(statearr_73865_74617[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_73843[(4)]))){
var statearr_73866_74618 = state_73843;
(statearr_73866_74618[(1)] = cljs.core.first((state_73843[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74619 = state_73843;
state_73843 = G__74619;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
taoensso$sente$state_machine__57795__auto__ = function(state_73843){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__57795__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__57795__auto____1.call(this,state_73843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__57795__auto____0;
taoensso$sente$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__57795__auto____1;
return taoensso$sente$state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_73867 = f__57854__auto__();
(statearr_73867[(6)] = c__57853__auto__);

return statearr_73867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));

return c__57853__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,794,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
}),null)),null,-2072765191,null);
var updated_conn = upd_conn_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_(server_ch,websocket_QMARK_);
} else {
var temp__5804__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5804__auto__)){
var ms = temp__5804__auto__;
var c__57853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_73893){
var state_val_73894 = (state_73893[(1)]);
if((state_val_73894 === (1))){
var inst_73868 = cljs.core.async.timeout(ms);
var state_73893__$1 = state_73893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73893__$1,(2),inst_73868);
} else {
if((state_val_73894 === (2))){
var inst_73875 = (state_73893[(7)]);
var inst_73870 = (state_73893[(2)]);
var inst_73871 = cljs.core.deref(conns_);
var inst_73872 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73873 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_73874 = (new cljs.core.PersistentVector(null,3,(5),inst_73872,inst_73873,null));
var inst_73875__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_73871,inst_73874);
var state_73893__$1 = (function (){var statearr_73895 = state_73893;
(statearr_73895[(8)] = inst_73870);

(statearr_73895[(7)] = inst_73875__$1);

return statearr_73895;
})();
if(cljs.core.truth_(inst_73875__$1)){
var statearr_73896_74620 = state_73893__$1;
(statearr_73896_74620[(1)] = (3));

} else {
var statearr_73897_74621 = state_73893__$1;
(statearr_73897_74621[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73894 === (3))){
var inst_73875 = (state_73893[(7)]);
var inst_73880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73875,(0),null);
var inst_73881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73875,(1),null);
var inst_73882 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_73881,udt_open);
var state_73893__$1 = (function (){var statearr_73898 = state_73893;
(statearr_73898[(9)] = inst_73880);

return statearr_73898;
})();
if(inst_73882){
var statearr_73899_74622 = state_73893__$1;
(statearr_73899_74622[(1)] = (6));

} else {
var statearr_73900_74623 = state_73893__$1;
(statearr_73900_74623[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73894 === (4))){
var state_73893__$1 = state_73893;
var statearr_73901_74624 = state_73893__$1;
(statearr_73901_74624[(2)] = null);

(statearr_73901_74624[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73894 === (5))){
var inst_73891 = (state_73893[(2)]);
var state_73893__$1 = state_73893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73893__$1,inst_73891);
} else {
if((state_val_73894 === (6))){
var inst_73884 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_73885 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_73884);
var state_73893__$1 = state_73893;
var statearr_73902_74625 = state_73893__$1;
(statearr_73902_74625[(2)] = inst_73885);

(statearr_73902_74625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73894 === (7))){
var state_73893__$1 = state_73893;
var statearr_73903_74626 = state_73893__$1;
(statearr_73903_74626[(2)] = null);

(statearr_73903_74626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73894 === (8))){
var inst_73888 = (state_73893[(2)]);
var state_73893__$1 = state_73893;
var statearr_73904_74627 = state_73893__$1;
(statearr_73904_74627[(2)] = inst_73888);

(statearr_73904_74627[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__57795__auto__ = null;
var taoensso$sente$state_machine__57795__auto____0 = (function (){
var statearr_73905 = [null,null,null,null,null,null,null,null,null,null];
(statearr_73905[(0)] = taoensso$sente$state_machine__57795__auto__);

(statearr_73905[(1)] = (1));

return statearr_73905;
});
var taoensso$sente$state_machine__57795__auto____1 = (function (state_73893){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_73893);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e73906){var ex__57798__auto__ = e73906;
var statearr_73907_74628 = state_73893;
(statearr_73907_74628[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_73893[(4)]))){
var statearr_73908_74629 = state_73893;
(statearr_73908_74629[(1)] = cljs.core.first((state_73893[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74630 = state_73893;
state_73893 = G__74630;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
taoensso$sente$state_machine__57795__auto__ = function(state_73893){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__57795__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__57795__auto____1.call(this,state_73893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__57795__auto____0;
taoensso$sente$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__57795__auto____1;
return taoensso$sente$state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_73909 = f__57854__auto__();
(statearr_73909[(6)] = c__57853__auto__);

return statearr_73909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));

return c__57853__auto__;
} else {
return null;
}
}
}
}),new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),(function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__73910 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73910,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73910,(1),null);
return receive_event_msg_BANG_(clj,(cljs.core.truth_(_QMARK_cb_uuid)?(function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,824,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
}),null)),null,-266413027,null);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,resp_clj,_QMARK_cb_uuid));
}):null));
}),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,833,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
}),null)),null,1317995320,null);
var updated_conn = upd_conn_BANG_(conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__57853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_73964){
var state_val_73965 = (state_73964[(1)]);
if((state_val_73965 === (7))){
var state_73964__$1 = state_73964;
var statearr_73966_74631 = state_73964__$1;
(statearr_73966_74631[(2)] = null);

(statearr_73966_74631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73965 === (1))){
var inst_73913 = cljs.core.async.timeout((5000));
var state_73964__$1 = state_73964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73964__$1,(2),inst_73913);
} else {
if((state_val_73965 === (4))){
var state_73964__$1 = state_73964;
var statearr_73967_74632 = state_73964__$1;
(statearr_73967_74632[(2)] = null);

(statearr_73967_74632[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73965 === (13))){
var state_73964__$1 = state_73964;
var statearr_73968_74633 = state_73964__$1;
(statearr_73968_74633[(2)] = null);

(statearr_73968_74633[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73965 === (6))){
var inst_73924 = (state_73964[(7)]);
var inst_73923 = (state_73964[(8)]);
var inst_73925 = (state_73964[(9)]);
var inst_73941 = (state_73964[(10)]);
var inst_73936 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73937 = [conn_type,uid,client_id];
var inst_73938 = (new cljs.core.PersistentVector(null,3,(5),inst_73936,inst_73937,null));
var inst_73940 = (function (){var vec__73916 = inst_73923;
var __QMARK_sch = inst_73924;
var udt_t1 = inst_73925;
return (function (p__73939){
var vec__73969 = p__73939;
var _sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73969,(0),null);
var udt_t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73969,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1__$1,udt_close)){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_sch,udt_t1__$1], null),false);
}
});
})();
var inst_73941__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_73938,inst_73940);
var state_73964__$1 = (function (){var statearr_73972 = state_73964;
(statearr_73972[(10)] = inst_73941__$1);

return statearr_73972;
})();
if(cljs.core.truth_(inst_73941__$1)){
var statearr_73973_74634 = state_73964__$1;
(statearr_73973_74634[(1)] = (9));

} else {
var statearr_73974_74635 = state_73964__$1;
(statearr_73974_74635[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73965 === (3))){
var inst_73924 = (state_73964[(7)]);
var inst_73923 = (state_73964[(8)]);
var inst_73925 = (state_73964[(9)]);
var inst_73928 = (function (){var vec__73916 = inst_73923;
var __QMARK_sch = inst_73924;
var udt_t1 = inst_73925;
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
})();
var inst_73929 = (new cljs.core.Delay(inst_73928,null));
var inst_73930 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,847,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_73929,null,-930342521,null);
var state_73964__$1 = state_73964;
var statearr_73975_74636 = state_73964__$1;
(statearr_73975_74636[(2)] = inst_73930);

(statearr_73975_74636[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73965 === (12))){
var inst_73950 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73951 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_73952 = (new cljs.core.PersistentVector(null,2,(5),inst_73950,inst_73951,null));
var inst_73953 = receive_event_msg_BANG_(inst_73952);
var state_73964__$1 = state_73964;
var statearr_73976_74637 = state_73964__$1;
(statearr_73976_74637[(2)] = inst_73953);

(statearr_73976_74637[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73965 === (2))){
var inst_73923 = (state_73964[(8)]);
var inst_73915 = (state_73964[(2)]);
var inst_73919 = cljs.core.deref(conns_);
var inst_73920 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73921 = [conn_type,uid,client_id];
var inst_73922 = (new cljs.core.PersistentVector(null,3,(5),inst_73920,inst_73921,null));
var inst_73923__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_73919,inst_73922);
var inst_73924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73923__$1,(0),null);
var inst_73925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73923__$1,(1),null);
var inst_73926 = cljs.core.deref(taoensso.sente.debug_mode_QMARK__);
var state_73964__$1 = (function (){var statearr_73977 = state_73964;
(statearr_73977[(11)] = inst_73915);

(statearr_73977[(7)] = inst_73924);

(statearr_73977[(8)] = inst_73923__$1);

(statearr_73977[(9)] = inst_73925);

return statearr_73977;
})();
if(cljs.core.truth_(inst_73926)){
var statearr_73978_74638 = state_73964__$1;
(statearr_73978_74638[(1)] = (3));

} else {
var statearr_73979_74639 = state_73964__$1;
(statearr_73979_74639[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73965 === (11))){
var inst_73959 = (state_73964[(2)]);
var state_73964__$1 = state_73964;
var statearr_73980_74640 = state_73964__$1;
(statearr_73980_74640[(2)] = inst_73959);

(statearr_73980_74640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73965 === (9))){
var inst_73924 = (state_73964[(7)]);
var inst_73923 = (state_73964[(8)]);
var inst_73925 = (state_73964[(9)]);
var inst_73941 = (state_73964[(10)]);
var inst_73943 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73944 = [conn_type,uid];
var inst_73945 = (new cljs.core.PersistentVector(null,2,(5),inst_73943,inst_73944,null));
var inst_73946 = (function (){var vec__73916 = inst_73923;
var __QMARK_sch = inst_73924;
var udt_t1 = inst_73925;
var disconnect_QMARK_ = inst_73941;
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_(_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
})();
var inst_73947 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_73945,inst_73946);
var inst_73948 = upd_connected_uid_BANG_(uid);
var state_73964__$1 = (function (){var statearr_73981 = state_73964;
(statearr_73981[(12)] = inst_73947);

return statearr_73981;
})();
if(cljs.core.truth_(inst_73948)){
var statearr_73982_74641 = state_73964__$1;
(statearr_73982_74641[(1)] = (12));

} else {
var statearr_73983_74642 = state_73964__$1;
(statearr_73983_74642[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73965 === (5))){
var inst_73925 = (state_73964[(9)]);
var inst_73933 = (state_73964[(2)]);
var inst_73934 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_73925,udt_close);
var state_73964__$1 = (function (){var statearr_73984 = state_73964;
(statearr_73984[(13)] = inst_73933);

return statearr_73984;
})();
if(inst_73934){
var statearr_73985_74643 = state_73964__$1;
(statearr_73985_74643[(1)] = (6));

} else {
var statearr_73986_74644 = state_73964__$1;
(statearr_73986_74644[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73965 === (14))){
var inst_73956 = (state_73964[(2)]);
var state_73964__$1 = state_73964;
var statearr_73987_74645 = state_73964__$1;
(statearr_73987_74645[(2)] = inst_73956);

(statearr_73987_74645[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73965 === (10))){
var state_73964__$1 = state_73964;
var statearr_73988_74646 = state_73964__$1;
(statearr_73988_74646[(2)] = null);

(statearr_73988_74646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73965 === (8))){
var inst_73962 = (state_73964[(2)]);
var state_73964__$1 = state_73964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73964__$1,inst_73962);
} else {
return null;
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
});
return (function() {
var taoensso$sente$state_machine__57795__auto__ = null;
var taoensso$sente$state_machine__57795__auto____0 = (function (){
var statearr_73989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73989[(0)] = taoensso$sente$state_machine__57795__auto__);

(statearr_73989[(1)] = (1));

return statearr_73989;
});
var taoensso$sente$state_machine__57795__auto____1 = (function (state_73964){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_73964);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e73990){var ex__57798__auto__ = e73990;
var statearr_73991_74647 = state_73964;
(statearr_73991_74647[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_73964[(4)]))){
var statearr_73992_74648 = state_73964;
(statearr_73992_74648[(1)] = cljs.core.first((state_73964[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74649 = state_73964;
state_73964 = G__74649;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
taoensso$sente$state_machine__57795__auto__ = function(state_73964){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__57795__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__57795__auto____1.call(this,state_73964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__57795__auto____0;
taoensso$sente$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__57795__auto____1;
return taoensso$sente$state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_73993 = f__57854__auto__();
(statearr_73993[(6)] = c__57853__auto__);

return statearr_73993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));

return c__57853__auto__;
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,869,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
}),null)),null,-1987252114,null);
})], null));
}
}
})], null);
}));

(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq73684){
var G__73685 = cljs.core.first(seq73684);
var seq73684__$1 = cljs.core.next(seq73684);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73685,seq73684__$1);
}));

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,875,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,1109938328,null);

var seq__73994 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__73995 = null;
var count__73996 = (0);
var i__73997 = (0);
while(true){
if((i__73997 < count__73996)){
var vec__74010 = chunk__73995.cljs$core$IIndexed$_nth$arity$2(null,i__73997);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74010,(0),null);
var vec__74013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74010,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74013,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74013,(1),null);
var temp__5804__auto___74650 = _QMARK_sch;
if(cljs.core.truth_(temp__5804__auto___74650)){
var sch_74651 = temp__5804__auto___74650;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id) : upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id));

taoensso.sente.interfaces.sch_send_BANG_(sch_74651,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__74652 = seq__73994;
var G__74653 = chunk__73995;
var G__74654 = count__73996;
var G__74655 = (i__73997 + (1));
seq__73994 = G__74652;
chunk__73995 = G__74653;
count__73996 = G__74654;
i__73997 = G__74655;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__73994);
if(temp__5804__auto__){
var seq__73994__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73994__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__73994__$1);
var G__74656 = cljs.core.chunk_rest(seq__73994__$1);
var G__74657 = c__5565__auto__;
var G__74658 = cljs.core.count(c__5565__auto__);
var G__74659 = (0);
seq__73994 = G__74656;
chunk__73995 = G__74657;
count__73996 = G__74658;
i__73997 = G__74659;
continue;
} else {
var vec__74016 = cljs.core.first(seq__73994__$1);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74016,(0),null);
var vec__74019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74016,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74019,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74019,(1),null);
var temp__5804__auto___74660__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__5804__auto___74660__$1)){
var sch_74661 = temp__5804__auto___74660__$1;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id) : upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id));

taoensso.sente.interfaces.sch_send_BANG_(sch_74661,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__74662 = cljs.core.next(seq__73994__$1);
var G__74663 = null;
var G__74664 = (0);
var G__74665 = (0);
seq__73994 = G__74662;
chunk__73995 = G__74663;
count__73996 = G__74664;
i__73997 = G__74665;
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
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,885,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-959012294,null);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_(client_ids_unsatisfied)){
return null;
} else {
var c__57853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_74068){
var state_val_74069 = (state_74068[(1)]);
if((state_val_74069 === (7))){
var inst_74023 = (state_74068[(7)]);
var inst_74030 = (state_74068[(8)]);
var inst_74024 = (state_74068[(9)]);
var inst_74040 = (function (){var n = inst_74023;
var client_ids_satisfied = inst_74024;
var _QMARK_pulled = inst_74030;
return (function (s,client_id,p__74039){
var vec__74070 = p__74039;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74070,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74070,(1),null);
var sent_QMARK_ = (function (){var temp__5804__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__5804__auto__)){
var sch = temp__5804__auto__;
return taoensso.sente.interfaces.sch_send_BANG_(_QMARK_sch,cljs.core.not(new cljs.core.Keyword(null,"websocket","websocket",-1714963101)),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,client_id);
} else {
return s;
}
});
})();
var inst_74041 = cljs.core.PersistentHashSet.EMPTY;
var inst_74042 = cljs.core.reduce_kv(inst_74040,inst_74041,inst_74030);
var state_74068__$1 = state_74068;
var statearr_74073_74666 = state_74068__$1;
(statearr_74073_74666[(2)] = inst_74042);

(statearr_74073_74666[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74069 === (1))){
var inst_74022 = cljs.core.PersistentHashSet.EMPTY;
var inst_74023 = (0);
var inst_74024 = inst_74022;
var state_74068__$1 = (function (){var statearr_74074 = state_74068;
(statearr_74074[(7)] = inst_74023);

(statearr_74074[(9)] = inst_74024);

return statearr_74074;
})();
var statearr_74075_74667 = state_74068__$1;
(statearr_74075_74667[(2)] = null);

(statearr_74075_74667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74069 === (4))){
var state_74068__$1 = state_74068;
var statearr_74076_74668 = state_74068__$1;
(statearr_74076_74668[(2)] = true);

(statearr_74076_74668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74069 === (15))){
var inst_74061 = (state_74068[(2)]);
var state_74068__$1 = state_74068;
var statearr_74077_74669 = state_74068__$1;
(statearr_74077_74669[(2)] = inst_74061);

(statearr_74077_74669[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74069 === (13))){
var inst_74047 = (state_74068[(10)]);
var inst_74052 = cljs.core.rand_int(inst_74047);
var inst_74053 = (inst_74047 + inst_74052);
var inst_74054 = cljs.core.async.timeout(inst_74053);
var state_74068__$1 = state_74068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74068__$1,(16),inst_74054);
} else {
if((state_val_74069 === (6))){
var inst_74030 = (state_74068[(8)]);
var inst_74037 = (state_74068[(2)]);
var state_74068__$1 = (function (){var statearr_74078 = state_74068;
(statearr_74078[(11)] = inst_74037);

return statearr_74078;
})();
if(cljs.core.truth_(inst_74030)){
var statearr_74079_74670 = state_74068__$1;
(statearr_74079_74670[(1)] = (7));

} else {
var statearr_74080_74671 = state_74068__$1;
(statearr_74080_74671[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74069 === (3))){
var inst_74066 = (state_74068[(2)]);
var state_74068__$1 = state_74068;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74068__$1,inst_74066);
} else {
if((state_val_74069 === (12))){
var inst_74064 = (state_74068[(2)]);
var state_74068__$1 = state_74068;
var statearr_74081_74672 = state_74068__$1;
(statearr_74081_74672[(2)] = inst_74064);

(statearr_74081_74672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74069 === (2))){
var inst_74023 = (state_74068[(7)]);
var inst_74030 = (state_74068[(8)]);
var inst_74024 = (state_74068[(9)]);
var inst_74026 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74027 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_74028 = (new cljs.core.PersistentVector(null,2,(5),inst_74026,inst_74027,null));
var inst_74029 = (function (){var n = inst_74023;
var client_ids_satisfied = inst_74024;
return (function (m){
var ks_to_pull = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(client_ids_satisfied,cljs.core.keys(m));
if(cljs.core.empty_QMARK_(ks_to_pull)){
return taoensso.encore.swapped(m,null);
} else {
return taoensso.encore.swapped(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){
var vec__74082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74082,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74082,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
}),m,ks_to_pull),cljs.core.select_keys(m,ks_to_pull));
}
});
})();
var inst_74030__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_74028,inst_74029);
var inst_74031 = (function (){var n = inst_74023;
var client_ids_satisfied = inst_74024;
var _QMARK_pulled = inst_74030__$1;
return (function (x){
var or__5043__auto__ = (x == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_)(x);
}
});
})();
var inst_74032 = inst_74031(inst_74030__$1);
var state_74068__$1 = (function (){var statearr_74085 = state_74068;
(statearr_74085[(8)] = inst_74030__$1);

return statearr_74085;
})();
if(cljs.core.truth_(inst_74032)){
var statearr_74086_74673 = state_74068__$1;
(statearr_74086_74673[(1)] = (4));

} else {
var statearr_74087_74674 = state_74068__$1;
(statearr_74087_74674[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74069 === (11))){
var state_74068__$1 = state_74068;
var statearr_74088_74675 = state_74068__$1;
(statearr_74088_74675[(2)] = null);

(statearr_74088_74675[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74069 === (9))){
var inst_74023 = (state_74068[(7)]);
var inst_74047 = (state_74068[(10)]);
var inst_74024 = (state_74068[(9)]);
var inst_74045 = (state_74068[(2)]);
var inst_74046 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_74024,inst_74045);
var inst_74047__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_74023);
var state_74068__$1 = (function (){var statearr_74089 = state_74068;
(statearr_74089[(12)] = inst_74046);

(statearr_74089[(10)] = inst_74047__$1);

return statearr_74089;
})();
if(cljs.core.truth_(inst_74047__$1)){
var statearr_74090_74676 = state_74068__$1;
(statearr_74090_74676[(1)] = (10));

} else {
var statearr_74091_74677 = state_74068__$1;
(statearr_74091_74677[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74069 === (5))){
var inst_74030 = (state_74068[(8)]);
var inst_74035 = taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",912,"([:or nil? map?] ?pulled)",inst_74030,null,null);
var state_74068__$1 = state_74068;
var statearr_74092_74678 = state_74068__$1;
(statearr_74092_74678[(2)] = inst_74035);

(statearr_74092_74678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74069 === (14))){
var state_74068__$1 = state_74068;
var statearr_74093_74679 = state_74068__$1;
(statearr_74093_74679[(2)] = null);

(statearr_74093_74679[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74069 === (16))){
var inst_74046 = (state_74068[(12)]);
var inst_74023 = (state_74068[(7)]);
var inst_74056 = (state_74068[(2)]);
var inst_74057 = (inst_74023 + (1));
var inst_74023__$1 = inst_74057;
var inst_74024 = inst_74046;
var state_74068__$1 = (function (){var statearr_74094 = state_74068;
(statearr_74094[(13)] = inst_74056);

(statearr_74094[(7)] = inst_74023__$1);

(statearr_74094[(9)] = inst_74024);

return statearr_74094;
})();
var statearr_74095_74680 = state_74068__$1;
(statearr_74095_74680[(2)] = null);

(statearr_74095_74680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74069 === (10))){
var inst_74046 = (state_74068[(12)]);
var inst_74049 = cljs.core.complement(inst_74046);
var inst_74050 = taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2(inst_74049,client_ids_unsatisfied);
var state_74068__$1 = state_74068;
if(cljs.core.truth_(inst_74050)){
var statearr_74096_74681 = state_74068__$1;
(statearr_74096_74681[(1)] = (13));

} else {
var statearr_74097_74682 = state_74068__$1;
(statearr_74097_74682[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74069 === (8))){
var state_74068__$1 = state_74068;
var statearr_74098_74683 = state_74068__$1;
(statearr_74098_74683[(2)] = null);

(statearr_74098_74683[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__57795__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__57795__auto____0 = (function (){
var statearr_74099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74099[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__57795__auto__);

(statearr_74099[(1)] = (1));

return statearr_74099;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__57795__auto____1 = (function (state_74068){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_74068);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e74100){var ex__57798__auto__ = e74100;
var statearr_74101_74684 = state_74068;
(statearr_74101_74684[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_74068[(4)]))){
var statearr_74102_74685 = state_74068;
(statearr_74102_74685[(1)] = cljs.core.first((state_74068[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74686 = state_74068;
state_74068 = G__74686;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__57795__auto__ = function(state_74068){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__57795__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__57795__auto____1.call(this,state_74068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__57795__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__57795__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_74103 = f__57854__auto__();
(statearr_74103[(6)] = c__57853__auto__);

return statearr_74103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));

return c__57853__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

var taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_74687 = (function (chsk){
var x__5390__auto__ = (((chsk == null))?null:chsk);
var m__5391__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__5391__auto__.call(null,chsk));
} else {
var m__5389__auto__ = (taoensso.sente._chsk_connect_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__5389__auto__.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-connect!",chsk);
}
}
});
taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
return taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_74687(chsk);
}
});

var taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_74688 = (function (chsk,reason){
var x__5390__auto__ = (((chsk == null))?null:chsk);
var m__5391__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__5391__auto__.call(null,chsk,reason));
} else {
var m__5389__auto__ = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__5389__auto__.call(null,chsk,reason));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-disconnect!",chsk);
}
}
});
taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
return taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_74688(chsk,reason);
}
});

var taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_74689 = (function (chsk){
var x__5390__auto__ = (((chsk == null))?null:chsk);
var m__5391__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__5391__auto__.call(null,chsk));
} else {
var m__5389__auto__ = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__5389__auto__.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-reconnect!",chsk);
}
}
});
taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
return taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_74689(chsk);
}
});

var taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_74690 = (function (chsk,ev,opts){
var x__5390__auto__ = (((chsk == null))?null:chsk);
var m__5391__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__5391__auto__.call(null,chsk,ev,opts));
} else {
var m__5389__auto__ = (taoensso.sente._chsk_send_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__5389__auto__.call(null,chsk,ev,opts));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-send!",chsk);
}
}
});
taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
return taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_74690(chsk,ev,opts);
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_(chsk);
});
taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_(chsk,new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641));
});
/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_(chsk);
});
/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var G__74105 = arguments.length;
switch (G__74105) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
}));

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
}));

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,959,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$(new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,1742714842,null);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
}));

(taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4);

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,963,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,-295030289,null);

if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264)));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event(x);

if((((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null)))) || (taoensso.encore.nat_int_QMARK_(_QMARK_timeout_ms)))){
} else {
throw (new Error(["Assert failed: ",["cb requires a timeout; timeout-ms should be a +ive integer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_timeout_ms)].join(''),"\n","(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))"].join('')));
}

if((((_QMARK_cb == null)) || (((cljs.core.ifn_QMARK_(_QMARK_cb)) || (taoensso.encore.chan_QMARK_(_QMARK_cb)))))){
return null;
} else {
throw (new Error(["Assert failed: ",["cb should be nil, an ifn, or a channel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(_QMARK_cb))].join(''),"\n","(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))"].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__5804__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5804__auto__)){
var cb_uuid = temp__5804__auto__;
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),(function (_QMARK_f){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
}));
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__74106 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null,old_state));
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped(new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74106,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74106,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_74692 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e74109){if((e74109 instanceof Error)){
var e_74692 = e74109;
return e_74692;
} else {
throw e74109;

}
}})();
if((e_74692 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1006,"(map? state)",state,e_74692,null);
}

var e_74693 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__74111 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__74111) : taoensso.truss.impl.set_STAR_.call(null,G__74111));
})(),x);
})(reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e74110){if((e74110 instanceof Error)){
var e_74693 = e74110;
return e_74693;
} else {
throw e74110;

}
}})();
if((e_74693 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1007,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_74693,null);
}

if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(reason,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)),new cljs.core.Keyword(null,"open?","open?",1238443125),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null)], 0));
} else {
return state;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if((((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)))){
return _QMARK_cb;
} else {
var e_74694 = (function (){try{if(taoensso.encore.chan_QMARK_(_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e74112){if((e74112 instanceof Error)){
var e_74694 = e74112;
return e_74694;
} else {
throw e74112;

}
}})();
if((e_74694 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1027,"(enc/chan? ?cb)",_QMARK_cb,e_74694,null);
}

taoensso.sente.assert_event(ev);

var vec__74113 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74113,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74113,(1),null);
var cb_ch = _QMARK_cb;
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([taoensso.encore.as_qname(ev_id),".cb"].join('')),reply], null));
});
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,1037,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,256771369,null);

var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1038,"(vector? clj)",clj,null,null));
var seq__74116 = cljs.core.seq(buffered_evs);
var chunk__74117 = null;
var count__74118 = (0);
var i__74119 = (0);
while(true){
if((i__74119 < count__74118)){
var ev = chunk__74117.cljs$core$IIndexed$_nth$arity$2(null,i__74119);
taoensso.sente.assert_event(ev);

var vec__74126_74695 = ev;
var id_74696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74126_74695,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_74696),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__74697 = seq__74116;
var G__74698 = chunk__74117;
var G__74699 = count__74118;
var G__74700 = (i__74119 + (1));
seq__74116 = G__74697;
chunk__74117 = G__74698;
count__74118 = G__74699;
i__74119 = G__74700;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__74116);
if(temp__5804__auto__){
var seq__74116__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74116__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__74116__$1);
var G__74701 = cljs.core.chunk_rest(seq__74116__$1);
var G__74702 = c__5565__auto__;
var G__74703 = cljs.core.count(c__5565__auto__);
var G__74704 = (0);
seq__74116 = G__74701;
chunk__74117 = G__74702;
count__74118 = G__74703;
i__74119 = G__74704;
continue;
} else {
var ev = cljs.core.first(seq__74116__$1);
taoensso.sente.assert_event(ev);

var vec__74129_74705 = ev;
var id_74706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74129_74705,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_74706),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__74707 = cljs.core.next(seq__74116__$1);
var G__74708 = null;
var G__74709 = (0);
var G__74710 = (0);
seq__74116 = G__74707;
chunk__74117 = G__74708;
count__74118 = G__74709;
i__74119 = G__74710;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
var and__5041__auto__ = cljs.core.vector_QMARK_(x);
if(and__5041__auto__){
var vec__74132 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74132,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__5041__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_74711 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__74137 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__74137) : taoensso.truss.impl.set_STAR_.call(null,G__74137));
})(),x);
})(chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e74136){if((e74136 instanceof Error)){
var e_74711 = e74136;
return e_74711;
} else {
throw e74136;

}
}})();
if((e_74711 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1050,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_74711,null);
}

var e_74712 = (function (){try{if(taoensso.sente.handshake_QMARK_(clj)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e74138){if((e74138 instanceof Error)){
var e_74712 = e74138;
return e_74712;
} else {
throw e74138;

}
}})();
if((e_74712 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1051,"(handshake? clj)",clj,e_74712,null);
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,1052,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,1380960168,null);

var vec__74139 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74139,(0),null);
var vec__74142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74139,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74142,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74142,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74142,(2),null);
var map__74145 = chsk;
var map__74145__$1 = cljs.core.__destructure_map(map__74145);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74145__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74145__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,null,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event(handshake_ev);

taoensso.sente.swap_chsk_state_BANG_(chsk,(function (p1__74135_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__74135_SHARP_,new_state], 0));
}));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (function (){var make_package_name = (function (prefix){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"socket"].join('');
});
var require_fn = (((typeof require !== 'undefined'))?require:cljs.core.constantly(new cljs.core.Keyword(null,"no-op","no-op",-93046065)));
return (new cljs.core.Delay((function (){
if(((taoensso.sente.node_target_QMARK_) && ((typeof require !== 'undefined')))){
try{var G__74147 = make_package_name("web");
return (require_fn.cljs$core$IFn$_invoke$arity$1 ? require_fn.cljs$core$IFn$_invoke$arity$1(G__74147) : require_fn.call(null,G__74147));
}catch (e74146){var e = e74146;
return null;
}} else {
return null;
}
}),null));
})();
taoensso.sente.create_js_client_websocket_BANG_ = (function taoensso$sente$create_js_client_websocket_BANG_(p__74148){
var map__74149 = p__74148;
var map__74149__$1 = cljs.core.__destructure_map(map__74149);
var opts = map__74149__$1;
var onerror_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74149__$1,new cljs.core.Keyword(null,"onerror-fn","onerror-fn",1069372505));
var onmessage_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74149__$1,new cljs.core.Keyword(null,"onmessage-fn","onmessage-fn",1633804172));
var onclose_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74149__$1,new cljs.core.Keyword(null,"onclose-fn","onclose-fn",-1388163785));
var uri_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74149__$1,new cljs.core.Keyword(null,"uri-str","uri-str",304128675));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74149__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var binary_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74149__$1,new cljs.core.Keyword(null,"binary-type","binary-type",1096940609));
var temp__5804__auto__ = (function (){var or__5043__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"WebSocket");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"MozWebSocket");
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var WebSocket = temp__5804__auto__;
var socket = (new WebSocket(uri_str));
var G__74150_74713 = socket;
(G__74150_74713["onerror"] = onerror_fn);

(G__74150_74713["onmessage"] = onmessage_fn);

(G__74150_74713["onclose"] = onclose_fn);


var temp__5804__auto___74714__$1 = binary_type;
if(cljs.core.truth_(temp__5804__auto___74714__$1)){
var bt_74715 = temp__5804__auto___74714__$1;
(socket["binaryType"] = bt_74715);
} else {
}

return socket;
} else {
return null;
}
});
taoensso.sente.create_websocket_BANG_ = (function taoensso$sente$create_websocket_BANG_(p__74151){
var map__74152 = p__74151;
var map__74152__$1 = cljs.core.__destructure_map(map__74152);
var opts = map__74152__$1;
var onerror_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74152__$1,new cljs.core.Keyword(null,"onerror-fn","onerror-fn",1069372505));
var onmessage_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74152__$1,new cljs.core.Keyword(null,"onmessage-fn","onmessage-fn",1633804172));
var onclose_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74152__$1,new cljs.core.Keyword(null,"onclose-fn","onclose-fn",-1388163785));
var uri_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74152__$1,new cljs.core.Keyword(null,"uri-str","uri-str",304128675));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74152__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
return taoensso.sente.create_js_client_websocket_BANG_(opts);
});
/**
 * Returns non-blank client CSRF token ?string from given token string
 *   or (fn [])->?string.
 */
taoensso.sente.get_client_csrf_token_str = (function taoensso$sente$get_client_csrf_token_str(warn_QMARK_,token_or_fn){
if(cljs.core.truth_(token_or_fn)){
var dynamic_QMARK_ = cljs.core.fn_QMARK_(token_or_fn);
var temp__5802__auto__ = taoensso.encore.as__QMARK_nblank(((dynamic_QMARK_)?(token_or_fn.cljs$core$IFn$_invoke$arity$0 ? token_or_fn.cljs$core$IFn$_invoke$arity$0() : token_or_fn.call(null)):token_or_fn));
if(cljs.core.truth_(temp__5802__auto__)){
var token = temp__5802__auto__;
return token;
} else {
var temp__5804__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(warn_QMARK_,new cljs.core.Keyword(null,"dynamic","dynamic",704819571)))?dynamic_QMARK_:warn_QMARK_);
if(cljs.core.truth_(temp__5804__auto__)){
var warn_QMARK___$1 = temp__5804__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1175,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WARNING: no client CSRF token provided. Connections will FAIL if server-side CSRF check is enabled (as it is by default)."], null);
}),null)),null,1857796225,null);

return null;
} else {
return null;
}
}
} else {
return null;
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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,headers,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,ws_opts,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.headers = headers;
this.packer = packer;
this.url = url;
this.ws_kalive_ms = ws_kalive_ms;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.ws_opts = ws_opts;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k74160,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__74164 = k74160;
var G__74164__$1 = (((G__74164 instanceof cljs.core.Keyword))?G__74164.fqn:null);
switch (G__74164__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "headers":
return self__.headers;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "socket_":
return self__.socket_;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
case "ws-opts":
return self__.ws_opts;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k74160,else__5343__auto__);

}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__74165){
var vec__74166 = p__74165;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74166,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74166,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),self__.ws_opts],null))], null),self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__74159){
var self__ = this;
var G__74159__$1 = this;
return (new cljs.core.RecordIter((0),G__74159__$1,16,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_opts,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (16 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this74161,other74162){
var self__ = this;
var this74161__$1 = this;
return (((!((other74162 == null)))) && ((((this74161__$1.constructor === other74162.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74161__$1.client_id,other74162.client_id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74161__$1.chs,other74162.chs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74161__$1.params,other74162.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74161__$1.headers,other74162.headers)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74161__$1.packer,other74162.packer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74161__$1.url,other74162.url)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74161__$1.ws_kalive_ms,other74162.ws_kalive_ms)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74161__$1.state_,other74162.state_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74161__$1.instance_handle_,other74162.instance_handle_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74161__$1.retry_count_,other74162.retry_count_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74161__$1.ever_opened_QMARK__,other74162.ever_opened_QMARK__)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74161__$1.backoff_ms_fn,other74162.backoff_ms_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74161__$1.cbs_waiting_,other74162.cbs_waiting_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74161__$1.socket_,other74162.socket_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74161__$1.udt_last_comms_,other74162.udt_last_comms_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74161__$1.ws_opts,other74162.ws_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74161__$1.__extmap,other74162.__extmap)))))))))))))))))))))))))))))))))))));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"headers","headers",-835030129),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_opts,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k74160){
var self__ = this;
var this__5347__auto____$1 = this;
var G__74169 = k74160;
var G__74169__$1 = (((G__74169 instanceof cljs.core.Keyword))?G__74169.fqn:null);
switch (G__74169__$1) {
case "client-id":
case "chs":
case "params":
case "headers":
case "packer":
case "url":
case "ws-kalive-ms":
case "state_":
case "instance-handle_":
case "retry-count_":
case "ever-opened?_":
case "backoff-ms-fn":
case "cbs-waiting_":
case "socket_":
case "udt-last-comms_":
case "ws-opts":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k74160);

}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__74159){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__74170 = cljs.core.keyword_identical_QMARK_;
var expr__74171 = k__5349__auto__;
if(cljs.core.truth_((pred__74170.cljs$core$IFn$_invoke$arity$2 ? pred__74170.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__74171) : pred__74170.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__74171)))){
return (new taoensso.sente.ChWebSocket(G__74159,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74170.cljs$core$IFn$_invoke$arity$2 ? pred__74170.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chs","chs",376886120),expr__74171) : pred__74170.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__74171)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__74159,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74170.cljs$core$IFn$_invoke$arity$2 ? pred__74170.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__74171) : pred__74170.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__74171)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__74159,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74170.cljs$core$IFn$_invoke$arity$2 ? pred__74170.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"headers","headers",-835030129),expr__74171) : pred__74170.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129),expr__74171)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__74159,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74170.cljs$core$IFn$_invoke$arity$2 ? pred__74170.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"packer","packer",66077544),expr__74171) : pred__74170.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__74171)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,G__74159,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74170.cljs$core$IFn$_invoke$arity$2 ? pred__74170.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__74171) : pred__74170.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__74171)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,G__74159,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74170.cljs$core$IFn$_invoke$arity$2 ? pred__74170.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__74171) : pred__74170.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__74171)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,G__74159,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74170.cljs$core$IFn$_invoke$arity$2 ? pred__74170.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__74171) : pred__74170.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__74171)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,G__74159,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74170.cljs$core$IFn$_invoke$arity$2 ? pred__74170.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__74171) : pred__74170.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__74171)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__74159,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74170.cljs$core$IFn$_invoke$arity$2 ? pred__74170.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__74171) : pred__74170.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__74171)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__74159,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74170.cljs$core$IFn$_invoke$arity$2 ? pred__74170.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__74171) : pred__74170.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__74171)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__74159,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74170.cljs$core$IFn$_invoke$arity$2 ? pred__74170.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__74171) : pred__74170.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__74171)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__74159,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74170.cljs$core$IFn$_invoke$arity$2 ? pred__74170.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__74171) : pred__74170.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__74171)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__74159,self__.socket_,self__.udt_last_comms_,self__.ws_opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74170.cljs$core$IFn$_invoke$arity$2 ? pred__74170.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__74171) : pred__74170.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__74171)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__74159,self__.udt_last_comms_,self__.ws_opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74170.cljs$core$IFn$_invoke$arity$2 ? pred__74170.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__74171) : pred__74170.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__74171)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__74159,self__.ws_opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74170.cljs$core$IFn$_invoke$arity$2 ? pred__74170.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),expr__74171) : pred__74170.call(null,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),expr__74171)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__74159,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_opts,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__74159),null));
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
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),self__.ws_opts,null))], null),self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__74159){
var self__ = this;
var this__5339__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_opts,G__74159,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__74153_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__74153_SHARP_,reason);
}));

var temp__5804__auto__ = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5804__auto__)){
var s = temp__5804__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__74173 = opts;
var map__74173__$1 = cljs.core.__destructure_map(map__74173);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74173__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74173__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74173__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,_QMARK_cb_uuid);
var temp__5804__auto___74718 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5804__auto___74718)){
var cb_uuid_74719 = temp__5804__auto___74718;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_74719], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e74174){if((e74174 instanceof Error)){
var e = e74174;
return e;
} else {
throw e74174;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1217,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__5804__auto___74720__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5804__auto___74720__$1)){
var timeout_ms_74721 = temp__5804__auto___74720__$1;
var c__57853__auto___74722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_74185){
var state_val_74186 = (state_74185[(1)]);
if((state_val_74186 === (1))){
var inst_74175 = cljs.core.async.timeout(timeout_ms_74721);
var state_74185__$1 = state_74185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74185__$1,(2),inst_74175);
} else {
if((state_val_74186 === (2))){
var inst_74178 = (state_74185[(7)]);
var inst_74177 = (state_74185[(2)]);
var inst_74178__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_74185__$1 = (function (){var statearr_74187 = state_74185;
(statearr_74187[(7)] = inst_74178__$1);

(statearr_74187[(8)] = inst_74177);

return statearr_74187;
})();
if(cljs.core.truth_(inst_74178__$1)){
var statearr_74188_74723 = state_74185__$1;
(statearr_74188_74723[(1)] = (3));

} else {
var statearr_74189_74724 = state_74185__$1;
(statearr_74189_74724[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74186 === (3))){
var inst_74178 = (state_74185[(7)]);
var inst_74180 = (inst_74178.cljs$core$IFn$_invoke$arity$1 ? inst_74178.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)) : inst_74178.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)));
var state_74185__$1 = state_74185;
var statearr_74190_74725 = state_74185__$1;
(statearr_74190_74725[(2)] = inst_74180);

(statearr_74190_74725[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74186 === (4))){
var state_74185__$1 = state_74185;
var statearr_74191_74726 = state_74185__$1;
(statearr_74191_74726[(2)] = null);

(statearr_74191_74726[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74186 === (5))){
var inst_74183 = (state_74185[(2)]);
var state_74185__$1 = state_74185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74185__$1,inst_74183);
} else {
return null;
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__57795__auto__ = null;
var taoensso$sente$state_machine__57795__auto____0 = (function (){
var statearr_74192 = [null,null,null,null,null,null,null,null,null];
(statearr_74192[(0)] = taoensso$sente$state_machine__57795__auto__);

(statearr_74192[(1)] = (1));

return statearr_74192;
});
var taoensso$sente$state_machine__57795__auto____1 = (function (state_74185){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_74185);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e74193){var ex__57798__auto__ = e74193;
var statearr_74194_74727 = state_74185;
(statearr_74194_74727[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_74185[(4)]))){
var statearr_74195_74728 = state_74185;
(statearr_74195_74728[(1)] = cljs.core.first((state_74185[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74729 = state_74185;
state_74185 = G__74729;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
taoensso$sente$state_machine__57795__auto__ = function(state_74185){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__57795__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__57795__auto____1.call(this,state_74185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__57795__auto____0;
taoensso$sente$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__57795__auto____1;
return taoensso$sente$state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_74196 = f__57854__auto__();
(statearr_74196[(6)] = c__57853__auto___74722);

return statearr_74196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));

} else {
}
} else {
}

try{cljs.core.deref(self__.socket_).send(ppstr);

cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e74197){var t = e74197;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1231,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"Chsk send error"], null);
}),null)),null,-518061621,null);

var temp__5804__auto___74730 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5804__auto___74730)){
var cb_uuid_74731 = temp__5804__auto___74730;
var cb_fn_STAR__74732 = (function (){var or__5043__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_74731);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e74198){if((e74198 instanceof Error)){
var e = e74198;
return e;
} else {
throw e74198;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1234,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
}
})();
(cb_fn_STAR__74732.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__74732.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","error","chsk/error",-984175439)) : cb_fn_STAR__74732.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439)));
} else {
}

return false;
}}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_(self__.instance_handle_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var have_handle_QMARK_ = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.instance_handle_),instance_handle);
});
var connect_fn = (function taoensso$sente$connect_fn(){
if(have_handle_QMARK_()){
var retry_fn = (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,cljs.core.inc);
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1250,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
}),null)),null,1662128847,null);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__74154_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__74154_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
} else {
return null;
}
});
var onerror_fn = (function (ws_ev){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1263,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e74199){var _ = e74199;
return ws_ev;
}})()], null);
}),null)),null,-396602616,null);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__74155_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__74155_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null));
}));
});
var onmessage_fn = (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__74200 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74200,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74200,(1),null);
cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

var or__5043__auto__ = ((taoensso.sente.handshake_QMARK_(clj))?(function (){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_(self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var temp__5802__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5802__auto__)){
var cb_uuid = temp__5802__auto__;
var temp__5802__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__5802__auto____$1)){
var cb_fn = temp__5802__auto____$1;
return (cb_fn.cljs$core$IFn$_invoke$arity$1 ? cb_fn.cljs$core$IFn$_invoke$arity$1(clj) : cb_fn.call(null,clj));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1307,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
}),null)),null,-419484368,null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});
var onclose_fn = (function (ws_ev){
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"wasClean"),new cljs.core.Keyword(null,"code","code",1586293142),taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"code"),new cljs.core.Keyword(null,"reason","reason",-2070751759),taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"reason")], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"clean?","clean?",-1675631009).cljs$core$IFn$_invoke$arity$1(last_ws_close))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,1333,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
}),null)),null,55078022,null);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__74157_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__74157_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__74158_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__74158_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));

return retry_fn();
}
});
var _QMARK_socket = (function (){try{return taoensso.sente.create_websocket_BANG_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ws_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"onerror-fn","onerror-fn",1069372505),onerror_fn,new cljs.core.Keyword(null,"onmessage-fn","onmessage-fn",1633804172),onmessage_fn,new cljs.core.Keyword(null,"onclose-fn","onclose-fn",-1388163785),onclose_fn,new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers,new cljs.core.Keyword(null,"uri-str","uri-str",304128675),taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),taoensso.sente.get_client_csrf_token_str(new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))], null)], 0)))], null)], 0)));
}catch (e74203){var t = e74203;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1358,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"WebSocket error"], null);
}),null)),null,623898255,null);

return null;
}})();
if(cljs.core.not(_QMARK_socket)){
return retry_fn();
} else {
var temp__5804__auto___74733 = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5804__auto___74733)){
var old_socket_74734 = temp__5804__auto___74733;
old_socket_74734.close();
} else {
}

return cljs.core.reset_BANG_(self__.socket_,_QMARK_socket);
}
} else {
return null;
}
});
cljs.core.reset_BANG_(self__.retry_count_,(0));

connect_fn();

var temp__5804__auto___74735 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5804__auto___74735)){
var ms_74736 = temp__5804__auto___74735;
var c__57853__auto___74737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_74231){
var state_val_74232 = (state_74231[(1)]);
if((state_val_74232 === (7))){
var inst_74227 = (state_74231[(2)]);
var state_74231__$1 = state_74231;
var statearr_74233_74738 = state_74231__$1;
(statearr_74233_74738[(2)] = inst_74227);

(statearr_74233_74738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74232 === (1))){
var state_74231__$1 = state_74231;
var statearr_74234_74739 = state_74231__$1;
(statearr_74234_74739[(2)] = null);

(statearr_74234_74739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74232 === (4))){
var inst_74208 = (state_74231[(2)]);
var inst_74209 = have_handle_QMARK_();
var state_74231__$1 = (function (){var statearr_74235 = state_74231;
(statearr_74235[(7)] = inst_74208);

return statearr_74235;
})();
if(inst_74209){
var statearr_74236_74740 = state_74231__$1;
(statearr_74236_74740[(1)] = (5));

} else {
var statearr_74237_74741 = state_74231__$1;
(statearr_74237_74741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74232 === (6))){
var state_74231__$1 = state_74231;
var statearr_74238_74742 = state_74231__$1;
(statearr_74238_74742[(2)] = null);

(statearr_74238_74742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74232 === (3))){
var inst_74229 = (state_74231[(2)]);
var state_74231__$1 = state_74231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74231__$1,inst_74229);
} else {
if((state_val_74232 === (2))){
var inst_74205 = cljs.core.deref(self__.udt_last_comms_);
var inst_74206 = cljs.core.async.timeout(ms_74736);
var state_74231__$1 = (function (){var statearr_74239 = state_74231;
(statearr_74239[(8)] = inst_74205);

return statearr_74239;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74231__$1,(4),inst_74206);
} else {
if((state_val_74232 === (9))){
var state_74231__$1 = state_74231;
var statearr_74240_74743 = state_74231__$1;
(statearr_74240_74743[(2)] = null);

(statearr_74240_74743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74232 === (5))){
var inst_74205 = (state_74231[(8)]);
var inst_74211 = cljs.core.deref(self__.udt_last_comms_);
var inst_74212 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74205,inst_74211);
var state_74231__$1 = state_74231;
if(inst_74212){
var statearr_74241_74744 = state_74231__$1;
(statearr_74241_74744[(1)] = (8));

} else {
var statearr_74242_74745 = state_74231__$1;
(statearr_74242_74745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74232 === (10))){
var inst_74223 = (state_74231[(2)]);
var state_74231__$1 = (function (){var statearr_74243 = state_74231;
(statearr_74243[(9)] = inst_74223);

return statearr_74243;
})();
var statearr_74244_74746 = state_74231__$1;
(statearr_74244_74746[(2)] = null);

(statearr_74244_74746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74232 === (8))){
var inst_74214 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74215 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_74216 = (new cljs.core.PersistentVector(null,1,(5),inst_74214,inst_74215,null));
var inst_74217 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_74218 = [true];
var inst_74219 = cljs.core.PersistentHashMap.fromArrays(inst_74217,inst_74218);
var inst_74220 = chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null,inst_74216,inst_74219);
var state_74231__$1 = state_74231;
var statearr_74245_74747 = state_74231__$1;
(statearr_74245_74747[(2)] = inst_74220);

(statearr_74245_74747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var taoensso$sente$state_machine__57795__auto__ = null;
var taoensso$sente$state_machine__57795__auto____0 = (function (){
var statearr_74246 = [null,null,null,null,null,null,null,null,null,null];
(statearr_74246[(0)] = taoensso$sente$state_machine__57795__auto__);

(statearr_74246[(1)] = (1));

return statearr_74246;
});
var taoensso$sente$state_machine__57795__auto____1 = (function (state_74231){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_74231);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e74247){var ex__57798__auto__ = e74247;
var statearr_74248_74748 = state_74231;
(statearr_74248_74748[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_74231[(4)]))){
var statearr_74249_74749 = state_74231;
(statearr_74249_74749[(1)] = cljs.core.first((state_74231[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74750 = state_74231;
state_74231 = G__74750;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
taoensso$sente$state_machine__57795__auto__ = function(state_74231){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__57795__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__57795__auto____1.call(this,state_74231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__57795__auto____0;
taoensso$sente$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__57795__auto____1;
return taoensso$sente$state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_74250 = f__57854__auto__();
(statearr_74250[(6)] = c__57853__auto___74737);

return statearr_74250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));

} else {
}

return chsk__$1;
}));

(taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"headers","headers",805501398,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"ws-kalive-ms","ws-kalive-ms",-1212255801,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"udt-last-comms_","udt-last-comms_",1494731888,null),new cljs.core.Symbol(null,"ws-opts","ws-opts",-1166634126,null)], null);
}));

(taoensso.sente.ChWebSocket.cljs$lang$type = true);

(taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChWebSocket",null,(1),null));
}));

(taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"taoensso.sente/ChWebSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChWebSocket.
 */
taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,headers,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,ws_opts){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,headers,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,ws_opts,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChWebSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__74163){
var extmap__5382__auto__ = (function (){var G__74251 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__74163,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643)], 0));
if(cljs.core.record_QMARK_(G__74163)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__74251);
} else {
return G__74251;
}
})();
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__74163),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__74163),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__74163),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(G__74163),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__74163),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__74163),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__74163),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__74163),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__74163),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__74163),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__74163),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__74163),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__74163),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__74163),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__74163),new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643).cljs$core$IFn$_invoke$arity$1(G__74163),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChWebSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(60)], 0));

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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k74259,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__74263 = k74259;
var G__74263__$1 = (((G__74263 instanceof cljs.core.Keyword))?G__74263.fqn:null);
switch (G__74263__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k74259,else__5343__auto__);

}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__74264){
var vec__74265 = p__74264;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74265,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74265,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__74258){
var self__ = this;
var G__74258__$1 = this;
return (new cljs.core.RecordIter((0),G__74258__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this74260,other74261){
var self__ = this;
var this74260__$1 = this;
return (((!((other74261 == null)))) && ((((this74260__$1.constructor === other74261.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74260__$1.client_id,other74261.client_id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74260__$1.chs,other74261.chs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74260__$1.params,other74261.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74260__$1.packer,other74261.packer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74260__$1.url,other74261.url)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74260__$1.state_,other74261.state_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74260__$1.instance_handle_,other74261.instance_handle_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74260__$1.ever_opened_QMARK__,other74261.ever_opened_QMARK__)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74260__$1.backoff_ms_fn,other74261.backoff_ms_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74260__$1.ajax_opts,other74261.ajax_opts)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74260__$1.curr_xhr_,other74261.curr_xhr_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74260__$1.__extmap,other74261.__extmap)))))))))))))))))))))))))));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k74259){
var self__ = this;
var this__5347__auto____$1 = this;
var G__74268 = k74259;
var G__74268__$1 = (((G__74268 instanceof cljs.core.Keyword))?G__74268.fqn:null);
switch (G__74268__$1) {
case "client-id":
case "chs":
case "params":
case "packer":
case "url":
case "state_":
case "instance-handle_":
case "ever-opened?_":
case "backoff-ms-fn":
case "ajax-opts":
case "curr-xhr_":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k74259);

}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__74258){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__74269 = cljs.core.keyword_identical_QMARK_;
var expr__74270 = k__5349__auto__;
if(cljs.core.truth_((pred__74269.cljs$core$IFn$_invoke$arity$2 ? pred__74269.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__74270) : pred__74269.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__74270)))){
return (new taoensso.sente.ChAjaxSocket(G__74258,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74269.cljs$core$IFn$_invoke$arity$2 ? pred__74269.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chs","chs",376886120),expr__74270) : pred__74269.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__74270)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__74258,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74269.cljs$core$IFn$_invoke$arity$2 ? pred__74269.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__74270) : pred__74269.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__74270)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__74258,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74269.cljs$core$IFn$_invoke$arity$2 ? pred__74269.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"packer","packer",66077544),expr__74270) : pred__74269.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__74270)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__74258,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74269.cljs$core$IFn$_invoke$arity$2 ? pred__74269.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__74270) : pred__74269.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__74270)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__74258,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74269.cljs$core$IFn$_invoke$arity$2 ? pred__74269.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__74270) : pred__74269.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__74270)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__74258,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74269.cljs$core$IFn$_invoke$arity$2 ? pred__74269.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__74270) : pred__74269.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__74270)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__74258,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74269.cljs$core$IFn$_invoke$arity$2 ? pred__74269.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__74270) : pred__74269.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__74270)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__74258,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74269.cljs$core$IFn$_invoke$arity$2 ? pred__74269.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__74270) : pred__74269.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__74270)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__74258,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74269.cljs$core$IFn$_invoke$arity$2 ? pred__74269.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__74270) : pred__74269.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__74270)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__74258,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74269.cljs$core$IFn$_invoke$arity$2 ? pred__74269.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__74270) : pred__74269.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__74270)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__74258,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__74258),null));
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
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__74258){
var self__ = this;
var this__5339__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__74258,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__74252_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__74252_SHARP_,reason);
}));

var temp__5804__auto__ = cljs.core.deref(self__.curr_xhr_);
if(cljs.core.truth_(temp__5804__auto__)){
var x = temp__5804__auto__;
return x.abort();
} else {
return null;
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__74272 = opts;
var map__74272__$1 = cljs.core.__destructure_map(map__74272);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74272__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74272__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74272__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token_str = taoensso.sente.get_client_csrf_token_str(new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)));
var G__74273_74753 = self__.url;
var G__74274_74754 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__5043__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token_str], null)], 0)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token_str,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null)], 0));
})()], null)], 0));
var G__74275_74755 = (function taoensso$sente$ajax_cb(p__74276){
var map__74277 = p__74276;
var map__74277__$1 = cljs.core.__destructure_map(map__74277);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74277__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74277__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__74253_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__74253_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","error","chsk/error",-984175439)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439)));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__74278 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74278,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74278,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null,resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1483,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
}),null)),null,-1034345072,null);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__74254_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__74254_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));
}
});
(taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__74273_74753,G__74274_74754,G__74275_74755) : taoensso.sente.ajax_lite.call(null,G__74273_74753,G__74274_74754,G__74275_74755));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_(self__.instance_handle_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var have_handle_QMARK_ = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.instance_handle_),instance_handle);
});
var poll_fn = (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,1493,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
}),null)),null,-1031440659,null);

if(have_handle_QMARK_()){
var retry_fn = (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1501,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
}),null)),null,1449530391,null);

goog.global.setTimeout((function (){
return taoensso$sente$poll_fn(retry_count_STAR_);
}),backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__74255_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__74255_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
} else {
return null;
}
});
return cljs.core.reset_BANG_(self__.curr_xhr_,(function (){var G__74281 = self__.url;
var G__74282 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null))], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),taoensso.sente.get_client_csrf_token_str(new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))], null)], 0))], null)], 0));
var G__74283 = (function taoensso$sente$poll_fn_$_ajax_cb(p__74284){
var map__74285 = p__74284;
var map__74285__$1 = cljs.core.__destructure_map(map__74285);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74285__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74285__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__74256_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__74256_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__74286 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74286,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(handshake_QMARK_){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__74257_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__74257_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));

taoensso$sente$poll_fn((0));

if(handshake_QMARK_){
return null;
} else {
var or__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref(taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_(self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__74281,G__74282,G__74283) : taoensso.sente.ajax_lite.call(null,G__74281,G__74282,G__74283));
})());
} else {
return null;
}
});
poll_fn((0));

return chsk__$1;
}));

(taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
}));

(taoensso.sente.ChAjaxSocket.cljs$lang$type = true);

(taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAjaxSocket",null,(1),null));
}));

(taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"taoensso.sente/ChAjaxSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChAjaxSocket.
 */
taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAjaxSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__74262){
var extmap__5382__auto__ = (function (){var G__74289 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__74262,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], 0));
if(cljs.core.record_QMARK_(G__74262)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__74289);
} else {
return G__74289;
}
})();
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__74262),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__74262),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__74262),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__74262),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__74262),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__74262),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__74262),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__74262),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__74262),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__74262),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__74262),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAjaxSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k74291,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__74295 = k74291;
var G__74295__$1 = (((G__74295 instanceof cljs.core.Keyword))?G__74295.fqn:null);
switch (G__74295__$1) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k74291,else__5343__auto__);

}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__74296){
var vec__74297 = p__74296;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74297,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74297,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__74290){
var self__ = this;
var G__74290__$1 = this;
return (new cljs.core.RecordIter((0),G__74290__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this74292,other74293){
var self__ = this;
var this74292__$1 = this;
return (((!((other74293 == null)))) && ((((this74292__$1.constructor === other74293.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74292__$1.ws_chsk_opts,other74293.ws_chsk_opts)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74292__$1.ajax_chsk_opts,other74293.ajax_chsk_opts)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74292__$1.state_,other74293.state_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74292__$1.impl_,other74293.impl_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74292__$1.__extmap,other74293.__extmap)))))))))))));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k74291){
var self__ = this;
var this__5347__auto____$1 = this;
var G__74300 = k74291;
var G__74300__$1 = (((G__74300 instanceof cljs.core.Keyword))?G__74300.fqn:null);
switch (G__74300__$1) {
case "ws-chsk-opts":
case "ajax-chsk-opts":
case "state_":
case "impl_":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k74291);

}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__74290){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__74301 = cljs.core.keyword_identical_QMARK_;
var expr__74302 = k__5349__auto__;
if(cljs.core.truth_((pred__74301.cljs$core$IFn$_invoke$arity$2 ? pred__74301.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__74302) : pred__74301.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__74302)))){
return (new taoensso.sente.ChAutoSocket(G__74290,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74301.cljs$core$IFn$_invoke$arity$2 ? pred__74301.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__74302) : pred__74301.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__74302)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__74290,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74301.cljs$core$IFn$_invoke$arity$2 ? pred__74301.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__74302) : pred__74301.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__74302)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__74290,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74301.cljs$core$IFn$_invoke$arity$2 ? pred__74301.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__74302) : pred__74301.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__74302)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__74290,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__74290),null));
}
}
}
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__74290){
var self__ = this;
var this__5339__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__74290,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__5804__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5804__auto__)){
var impl = temp__5804__auto__;
return taoensso.sente._chsk_disconnect_BANG_(impl,reason);
} else {
return null;
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5804__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5804__auto__)){
var impl = temp__5804__auto__;
taoensso.sente._chsk_disconnect_BANG_(impl,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
} else {
return null;
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__5802__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5802__auto__)){
var impl = temp__5802__auto__;
return taoensso.sente._chsk_send_BANG_(impl,ev,opts);
} else {
var map__74304 = opts;
var map__74304__$1 = cljs.core.__destructure_map(map__74304);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74304__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_conn_BANG_ = (function (){
cljs.core.remove_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))).taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});
var ws_conn_BANG_ = (function (){
var downgraded_QMARK___74758 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.add_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),(function (_,___$1,old_state,new_state){
var temp__5804__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5804__auto__)){
var impl = temp__5804__auto__;
var temp__5804__auto____$1 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ever_opened_QMARK__ = temp__5804__auto____$1;
if(cljs.core.truth_(cljs.core.deref(ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502).cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.compare_and_set_BANG_(downgraded_QMARK___74758,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1635,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
}),null)),null,-1903339244,null);

taoensso.sente._chsk_disconnect_BANG_(impl,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720));

return cljs.core.reset_BANG_(self__.impl_,ajax_conn_BANG_());
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
}));

return taoensso.sente.new_ChWebSocket(ws_chsk_opts__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))).taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});
cljs.core.reset_BANG_(self__.impl_,(function (){var or__5043__auto__ = ws_conn_BANG_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return ajax_conn_BANG_();
}
})());

return chsk__$1;
}));

(taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
}));

(taoensso.sente.ChAutoSocket.cljs$lang$type = true);

(taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAutoSocket",null,(1),null));
}));

(taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"taoensso.sente/ChAutoSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChAutoSocket.
 */
taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAutoSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__74294){
var extmap__5382__auto__ = (function (){var G__74305 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__74294,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], 0));
if(cljs.core.record_QMARK_(G__74294)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__74305);
} else {
return G__74305;
}
})();
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__74294),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__74294),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__74294),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__74294),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__74306 = protocol;
var G__74306__$1 = (((G__74306 instanceof cljs.core.Keyword))?G__74306.fqn:null);
switch (G__74306__$1) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__74308 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__74308) : taoensso.truss.impl.set_STAR_.call(null,G__74308));
})(),x);
})(protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e74307){if((e74307 instanceof Error)){
var e = e74307;
return e;
} else {
throw e74307;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1654,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__74309 = type;
var G__74309__$1 = (((G__74309 instanceof cljs.core.Keyword))?G__74309.fqn:null);
switch (G__74309__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__74310 = protocol__$2;
switch (G__74310) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74310)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74309__$1)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$3),"//",taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([host,path], 0))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Required arguments:
 *     path              ; Channel socket server route/path (typically `/chsk`)
 *     ?csrf-token-or-fn ; CSRF token string or (fn [])->string to match token
 *                       ; expected by server.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :port           ; Server port (defaults to current page's port).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :headers        ; Map of additional headers to include in the initiating request
 *                     ; (currently only for Java clients).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *     :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___74762 = arguments.length;
var i__5767__auto___74763 = (0);
while(true){
if((i__5767__auto___74763 < len__5766__auto___74762)){
args__5772__auto__.push((arguments[i__5767__auto___74763]));

var G__74764 = (i__5767__auto___74763 + (1));
i__5767__auto___74763 = G__74764;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,_QMARK_csrf_token_or_fn,p__74314){
var vec__74315 = p__74314;
var map__74318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74315,(0),null);
var map__74318__$1 = cljs.core.__destructure_map(map__74318);
var opts = map__74318__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74318__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74318__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74318__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74318__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74318__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74318__$1,new cljs.core.Keyword(null,"params","params",710516235));
var ws_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74318__$1,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74318__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74318__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74318__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74318__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74318__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74318__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74318__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74315,(1),null);
var e_74765 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__74320 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__74320) : taoensso.truss.impl.set_STAR_.call(null,G__74320));
})(),x);
})(type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e74319){if((e74319 instanceof Error)){
var e_74765 = e74319;
return e_74765;
} else {
throw e74319;

}
}})();
if((e_74765 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1703,"([:in #{:ws :ajax :auto}] type)",type,e_74765,null);
}

var e_74766 = (function (){try{if(taoensso.encore.nblank_str_QMARK_(client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e74321){if((e74321 instanceof Error)){
var e_74766 = e74321;
return e_74766;
} else {
throw e74321;

}
}})();
if((e_74766 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1704,"(enc/nblank-str? client-id)",client_id,e_74766,null);
}

if((!((_deprecated_more_opts == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1706,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
}),null)),null,-1074687058,null);
} else {
}

if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1707,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
}),null)),null,-1493603135,null);
} else {
}

taoensso.sente.get_client_csrf_token_str(true,_QMARK_csrf_token_or_fn);

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__74322 = (function (){var win_loc = taoensso.encore.get_win_loc();
var path__$1 = (function (){var z = (function (){try{var or__5043__auto__ = path;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
}catch (e74325){if((e74325 instanceof Error)){
var e = e74325;
return (new taoensso.truss.impl.WrappedError(e));
} else {
throw e74325;

}
}})();
var e = (function (){try{if((z instanceof taoensso.truss.impl.WrappedError)){
return z;
} else {
if(taoensso.truss.impl.some_QMARK_(z)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}
}catch (e74326){if((e74326 instanceof Error)){
var e = e74326;
return e;
} else {
throw e74326;

}
}})();
if((e == null)){
return z;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1718,"(taoensso.truss.impl/some? (or path (:pathname win-loc)))",z,e,null);
}
})();
var temp__5802__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)) : f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443))),(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549)) : f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549)))], null);
} else {
var protocol__$1 = (function (){var or__5043__auto__ = protocol;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (cljs.core.truth_(host)?(cljs.core.truth_(port)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join(''):host):(cljs.core.truth_(port)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hostname","hostname",2105669933).cljs$core$IFn$_invoke$arity$1(win_loc)),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join(''):new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74322,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74322,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer((512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
})));
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),ws_opts], null)], 0));
var ajax_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null)], 0));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__74327 = type;
var G__74327__$1 = (((G__74327 instanceof cljs.core.Keyword))?G__74327.fqn:null);
switch (G__74327__$1) {
case "ws":
return taoensso.sente.new_ChWebSocket(ws_chsk_opts,_QMARK_csrf_token_or_fn);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts,_QMARK_csrf_token_or_fn);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket(auto_chsk_opts,_QMARK_csrf_token_or_fn);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74327__$1)].join('')));

}
})());
var temp__5802__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__5802__auto__)){
var chsk = temp__5802__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ev){
var vec__74328 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74328,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74328,(1),null);
var ev__$1 = vec__74328;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
})));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1813,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
}),null)),null,1604423046,null);
}
}));

(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq74311){
var G__74312 = cljs.core.first(seq74311);
var seq74311__$1 = cljs.core.next(seq74311);
var G__74313 = cljs.core.first(seq74311__$1);
var seq74311__$2 = cljs.core.next(seq74311__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74312,G__74313,seq74311__$2);
}));

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__74331 = opts;
var map__74331__$1 = cljs.core.__destructure_map(map__74331);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74331__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74331__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74331__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var c__57853__auto___74768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_74362){
var state_val_74363 = (state_74362[(1)]);
if((state_val_74363 === (7))){
var inst_74348 = (state_74362[(7)]);
var inst_74348__$1 = (state_74362[(2)]);
var state_74362__$1 = (function (){var statearr_74364 = state_74362;
(statearr_74364[(7)] = inst_74348__$1);

return statearr_74364;
})();
if(cljs.core.truth_(inst_74348__$1)){
var statearr_74365_74769 = state_74362__$1;
(statearr_74365_74769[(1)] = (8));

} else {
var statearr_74366_74770 = state_74362__$1;
(statearr_74366_74770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74363 === (1))){
var state_74362__$1 = state_74362;
var statearr_74367_74771 = state_74362__$1;
(statearr_74367_74771[(2)] = null);

(statearr_74367_74771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74363 === (4))){
var inst_74343 = (state_74362[(8)]);
var inst_74340 = (state_74362[(9)]);
var inst_74342 = (state_74362[(10)]);
var inst_74340__$1 = (state_74362[(2)]);
var inst_74341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74340__$1,(0),null);
var inst_74342__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74340__$1,(1),null);
var inst_74343__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74342__$1,ch_ctrl);
var state_74362__$1 = (function (){var statearr_74368 = state_74362;
(statearr_74368[(8)] = inst_74343__$1);

(statearr_74368[(9)] = inst_74340__$1);

(statearr_74368[(10)] = inst_74342__$1);

(statearr_74368[(11)] = inst_74341);

return statearr_74368;
})();
if(inst_74343__$1){
var statearr_74369_74772 = state_74362__$1;
(statearr_74369_74772[(1)] = (5));

} else {
var statearr_74370_74773 = state_74362__$1;
(statearr_74370_74773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74363 === (6))){
var inst_74341 = (state_74362[(11)]);
var inst_74346 = (inst_74341 == null);
var state_74362__$1 = state_74362;
var statearr_74371_74774 = state_74362__$1;
(statearr_74371_74774[(2)] = inst_74346);

(statearr_74371_74774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74363 === (3))){
var inst_74360 = (state_74362[(2)]);
var state_74362__$1 = state_74362;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74362__$1,inst_74360);
} else {
if((state_val_74363 === (2))){
var inst_74336 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74337 = [ch_recv,ch_ctrl];
var inst_74338 = (new cljs.core.PersistentVector(null,2,(5),inst_74336,inst_74337,null));
var state_74362__$1 = state_74362;
return cljs.core.async.ioc_alts_BANG_(state_74362__$1,(4),inst_74338);
} else {
if((state_val_74363 === (9))){
var inst_74340 = (state_74362[(9)]);
var inst_74342 = (state_74362[(10)]);
var inst_74348 = (state_74362[(7)]);
var inst_74341 = (state_74362[(11)]);
var inst_74352 = cljs.core.__destructure_map(inst_74341);
var inst_74353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74352,new cljs.core.Keyword(null,"event","event",301435442));
var inst_74354 = (function (){var vec__74333 = inst_74340;
var v = inst_74341;
var p = inst_74342;
var stop_QMARK_ = inst_74348;
var map__74351 = inst_74352;
var event_msg = inst_74352;
var event = inst_74353;
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,1840,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
}),null)),null,-1289041788,null);
} else {
}

var G__74374 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(taoensso.sente.server_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e74375){if((e74375 instanceof Error)){
var e = e74375;
return e;
} else {
throw e74375;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1843,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(taoensso.sente.client_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e74376){if((e74376 instanceof Error)){
var e = e74376;
return e;
} else {
throw e74376;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1844,"(client-event-msg? event-msg)",event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__74374) : event_msg_handler.call(null,G__74374));
}catch (e74372){var e1 = e74372;
try{var temp__5802__auto__ = error_handler;
if(cljs.core.truth_(temp__5802__auto__)){
var eh = temp__5802__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(e1,event_msg) : error_handler.call(null,e1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1849,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
}),null)),null,265704017,null);
}
}catch (e74373){var e2 = e74373;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1850,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
}),null)),null,-363462984,null);
}}});
})();
var inst_74355 = execute1(inst_74354);
var state_74362__$1 = (function (){var statearr_74377 = state_74362;
(statearr_74377[(12)] = inst_74355);

return statearr_74377;
})();
var statearr_74378_74775 = state_74362__$1;
(statearr_74378_74775[(2)] = null);

(statearr_74378_74775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74363 === (5))){
var inst_74343 = (state_74362[(8)]);
var state_74362__$1 = state_74362;
var statearr_74379_74776 = state_74362__$1;
(statearr_74379_74776[(2)] = inst_74343);

(statearr_74379_74776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74363 === (10))){
var inst_74358 = (state_74362[(2)]);
var state_74362__$1 = state_74362;
var statearr_74380_74777 = state_74362__$1;
(statearr_74380_74777[(2)] = inst_74358);

(statearr_74380_74777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74363 === (8))){
var state_74362__$1 = state_74362;
var statearr_74381_74778 = state_74362__$1;
(statearr_74381_74778[(2)] = null);

(statearr_74381_74778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__57795__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__57795__auto____0 = (function (){
var statearr_74382 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74382[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__57795__auto__);

(statearr_74382[(1)] = (1));

return statearr_74382;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__57795__auto____1 = (function (state_74362){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_74362);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e74383){var ex__57798__auto__ = e74383;
var statearr_74384_74779 = state_74362;
(statearr_74384_74779[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_74362[(4)]))){
var statearr_74385_74780 = state_74362;
(statearr_74385_74780[(1)] = cljs.core.first((state_74362[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74781 = state_74362;
state_74362 = G__74781;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__57795__auto__ = function(state_74362){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__57795__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__57795__auto____1.call(this,state_74362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__57795__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__57795__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_74386 = f__57854__auto__();
(statearr_74386[(6)] = c__57853__auto___74768);

return statearr_74386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));


return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___74782 = arguments.length;
var i__5767__auto___74783 = (0);
while(true){
if((i__5767__auto___74783 < len__5766__auto___74782)){
args__5772__auto__.push((arguments[i__5767__auto___74783]));

var G__74784 = (i__5767__auto___74783 + (1));
i__5767__auto___74783 = G__74784;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__74390){
var vec__74391 = p__74390;
var map__74394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74391,(0),null);
var map__74394__$1 = cljs.core.__destructure_map(map__74394);
var opts = map__74394__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74394__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74394__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74394__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_(new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq74387){
var G__74388 = cljs.core.first(seq74387);
var seq74387__$1 = cljs.core.next(seq74387);
var G__74389 = cljs.core.first(seq74387__$1);
var seq74387__$2 = cljs.core.next(seq74387__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74388,G__74389,seq74387__$2);
}));

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___74785 = arguments.length;
var i__5767__auto___74786 = (0);
while(true){
if((i__5767__auto___74786 < len__5766__auto___74785)){
args__5772__auto__.push((arguments[i__5767__auto___74786]));

var G__74787 = (i__5767__auto___74786 + (1));
i__5767__auto___74786 = G__74787;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__74398){
var vec__74399 = p__74398;
var map__74402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74399,(0),null);
var map__74402__$1 = cljs.core.__destructure_map(map__74402);
var opts = map__74402__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74402__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74402__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq74395){
var G__74396 = cljs.core.first(seq74395);
var seq74395__$1 = cljs.core.next(seq74395);
var G__74397 = cljs.core.first(seq74395__$1);
var seq74395__$2 = cljs.core.next(seq74395__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74396,G__74397,seq74395__$2);
}));

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_(ch_recv,(function (ev_msg){
var G__74403 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__74404 = new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__74403,G__74404) : event_handler.call(null,G__74403,G__74404));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__74405,websocket_QMARK_){
var map__74406 = p__74405;
var map__74406__$1 = cljs.core.__destructure_map(map__74406);
var location__$1 = map__74406__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74406__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74406__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74406__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = path;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=taoensso.sente.js.map
