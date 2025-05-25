goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_66238 = (function (this$,type){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (malli.registry._schema[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5391__auto__.call(null,this$,type));
} else {
var m__5389__auto__ = (malli.registry._schema["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5389__auto__.call(null,this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_66238(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_66245 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (malli.registry._schemas[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (malli.registry._schemas["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_66245(this$);
}
});

malli.registry.registry_QMARK_ = (function malli$registry$registry_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$registry$Registry$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry66106 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry66106 = (function (m,fm,meta66107){
this.m = m;
this.fm = fm;
this.meta66107 = meta66107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry66106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66108,meta66107__$1){
var self__ = this;
var _66108__$1 = this;
return (new malli.registry.t_malli$registry66106(self__.m,self__.fm,meta66107__$1));
}));

(malli.registry.t_malli$registry66106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66108){
var self__ = this;
var _66108__$1 = this;
return self__.meta66107;
}));

(malli.registry.t_malli$registry66106.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry66106.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry66106.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry66106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta66107","meta66107",-1530686574,null)], null);
}));

(malli.registry.t_malli$registry66106.cljs$lang$type = true);

(malli.registry.t_malli$registry66106.cljs$lang$ctorStr = "malli.registry/t_malli$registry66106");

(malli.registry.t_malli$registry66106.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"malli.registry/t_malli$registry66106");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry66106.
 */
malli.registry.__GT_t_malli$registry66106 = (function malli$registry$fast_registry_$___GT_t_malli$registry66106(m__$1,fm__$1,meta66107){
return (new malli.registry.t_malli$registry66106(m__$1,fm__$1,meta66107));
});

}

return (new malli.registry.t_malli$registry66106(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.simple_registry = (function malli$registry$simple_registry(m){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry66114 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry66114 = (function (m,meta66115){
this.m = m;
this.meta66115 = meta66115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry66114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66116,meta66115__$1){
var self__ = this;
var _66116__$1 = this;
return (new malli.registry.t_malli$registry66114(self__.m,meta66115__$1));
}));

(malli.registry.t_malli$registry66114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66116){
var self__ = this;
var _66116__$1 = this;
return self__.meta66115;
}));

(malli.registry.t_malli$registry66114.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry66114.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry66114.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry66114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta66115","meta66115",-1438755581,null)], null);
}));

(malli.registry.t_malli$registry66114.cljs$lang$type = true);

(malli.registry.t_malli$registry66114.cljs$lang$ctorStr = "malli.registry/t_malli$registry66114");

(malli.registry.t_malli$registry66114.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"malli.registry/t_malli$registry66114");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry66114.
 */
malli.registry.__GT_t_malli$registry66114 = (function malli$registry$simple_registry_$___GT_t_malli$registry66114(m__$1,meta66115){
return (new malli.registry.t_malli$registry66114(m__$1,meta66115));
});

}

return (new malli.registry.t_malli$registry66114(m,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((_QMARK_registry == null)){
return null;
} else {
if(malli.registry.registry_QMARK_(_QMARK_registry)){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
return null;
}
}
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.simple_registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((!((malli.registry.mode === "strict")))){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry, invalid mode",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),malli.registry.mode,new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});
malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry66136 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry66136 = (function (meta66137){
this.meta66137 = meta66137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry66136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66138,meta66137__$1){
var self__ = this;
var _66138__$1 = this;
return (new malli.registry.t_malli$registry66136(meta66137__$1));
}));

(malli.registry.t_malli$registry66136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66138){
var self__ = this;
var _66138__$1 = this;
return self__.meta66137;
}));

(malli.registry.t_malli$registry66136.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry66136.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry66136.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry66136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta66137","meta66137",-669597805,null)], null);
}));

(malli.registry.t_malli$registry66136.cljs$lang$type = true);

(malli.registry.t_malli$registry66136.cljs$lang$ctorStr = "malli.registry/t_malli$registry66136");

(malli.registry.t_malli$registry66136.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"malli.registry/t_malli$registry66136");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry66136.
 */
malli.registry.__GT_t_malli$registry66136 = (function malli$registry$custom_default_registry_$___GT_t_malli$registry66136(meta66137){
return (new malli.registry.t_malli$registry66136(meta66137));
});

}

return (new malli.registry.t_malli$registry66136(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5772__auto__ = [];
var len__5766__auto___66283 = arguments.length;
var i__5767__auto___66285 = (0);
while(true){
if((i__5767__auto___66285 < len__5766__auto___66283)){
args__5772__auto__.push((arguments[i__5767__auto___66285]));

var G__66288 = (i__5767__auto___66285 + (1));
i__5767__auto___66285 = G__66288;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry66155 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry66155 = (function (_QMARK_registries,registries,meta66156){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta66156 = meta66156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry66155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66157,meta66156__$1){
var self__ = this;
var _66157__$1 = this;
return (new malli.registry.t_malli$registry66155(self__._QMARK_registries,self__.registries,meta66156__$1));
}));

(malli.registry.t_malli$registry66155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66157){
var self__ = this;
var _66157__$1 = this;
return self__.meta66156;
}));

(malli.registry.t_malli$registry66155.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry66155.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__66150_SHARP_){
return malli.registry._schema(p1__66150_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry66155.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry66155.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta66156","meta66156",1180351443,null)], null);
}));

(malli.registry.t_malli$registry66155.cljs$lang$type = true);

(malli.registry.t_malli$registry66155.cljs$lang$ctorStr = "malli.registry/t_malli$registry66155");

(malli.registry.t_malli$registry66155.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"malli.registry/t_malli$registry66155");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry66155.
 */
malli.registry.__GT_t_malli$registry66155 = (function malli$registry$__GT_t_malli$registry66155(_QMARK_registries__$1,registries__$1,meta66156){
return (new malli.registry.t_malli$registry66155(_QMARK_registries__$1,registries__$1,meta66156));
});

}

return (new malli.registry.t_malli$registry66155(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq66151){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66151));
}));

malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry66172 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry66172 = (function (db,meta66173){
this.db = db;
this.meta66173 = meta66173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry66172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66174,meta66173__$1){
var self__ = this;
var _66174__$1 = this;
return (new malli.registry.t_malli$registry66172(self__.db,meta66173__$1));
}));

(malli.registry.t_malli$registry66172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66174){
var self__ = this;
var _66174__$1 = this;
return self__.meta66173;
}));

(malli.registry.t_malli$registry66172.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry66172.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry66172.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry66172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta66173","meta66173",-494168936,null)], null);
}));

(malli.registry.t_malli$registry66172.cljs$lang$type = true);

(malli.registry.t_malli$registry66172.cljs$lang$ctorStr = "malli.registry/t_malli$registry66172");

(malli.registry.t_malli$registry66172.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"malli.registry/t_malli$registry66172");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry66172.
 */
malli.registry.__GT_t_malli$registry66172 = (function malli$registry$mutable_registry_$___GT_t_malli$registry66172(db__$1,meta66173){
return (new malli.registry.t_malli$registry66172(db__$1,meta66173));
});

}

return (new malli.registry.t_malli$registry66172(db,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry66184 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry66184 = (function (meta66185){
this.meta66185 = meta66185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry66184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66186,meta66185__$1){
var self__ = this;
var _66186__$1 = this;
return (new malli.registry.t_malli$registry66184(meta66185__$1));
}));

(malli.registry.t_malli$registry66184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66186){
var self__ = this;
var _66186__$1 = this;
return self__.meta66185;
}));

(malli.registry.t_malli$registry66184.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry66184.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry66184.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry66184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta66185","meta66185",1436830459,null)], null);
}));

(malli.registry.t_malli$registry66184.cljs$lang$type = true);

(malli.registry.t_malli$registry66184.cljs$lang$ctorStr = "malli.registry/t_malli$registry66184");

(malli.registry.t_malli$registry66184.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"malli.registry/t_malli$registry66184");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry66184.
 */
malli.registry.__GT_t_malli$registry66184 = (function malli$registry$dynamic_registry_$___GT_t_malli$registry66184(meta66185){
return (new malli.registry.t_malli$registry66184(meta66185));
});

}

return (new malli.registry.t_malli$registry66184(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(function (){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry66195 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry66195 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta66196){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta66196 = meta66196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry66195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66197,meta66196__$1){
var self__ = this;
var _66197__$1 = this;
return (new malli.registry.t_malli$registry66195(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta66196__$1));
}));

(malli.registry.t_malli$registry66195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66197){
var self__ = this;
var _66197__$1 = this;
return self__.meta66196;
}));

(malli.registry.t_malli$registry66195.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry66195.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5043__auto__ = (function (){var fexpr__66202 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__66202.cljs$core$IFn$_invoke$arity$1 ? fexpr__66202.cljs$core$IFn$_invoke$arity$1(name) : fexpr__66202.call(null,name));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var temp__5804__auto__ = (function (){var G__66204 = name;
var G__66205 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__66204,G__66205) : self__.provider.call(null,G__66204,G__66205));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var schema = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry66195.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry66195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta66196","meta66196",100487760,null)], null);
}));

(malli.registry.t_malli$registry66195.cljs$lang$type = true);

(malli.registry.t_malli$registry66195.cljs$lang$ctorStr = "malli.registry/t_malli$registry66195");

(malli.registry.t_malli$registry66195.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"malli.registry/t_malli$registry66195");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry66195.
 */
malli.registry.__GT_t_malli$registry66195 = (function malli$registry$lazy_registry_$___GT_t_malli$registry66195(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta66196){
return (new malli.registry.t_malli$registry66195(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta66196));
});

}

return (new malli.registry.t_malli$registry66195(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY));
})()
], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
