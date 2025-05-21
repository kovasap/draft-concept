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

var malli$registry$Registry$_schema$dyn_75711 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_75711(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_75713 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_75713(this$);
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
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry75625 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry75625 = (function (m,fm,meta75626){
this.m = m;
this.fm = fm;
this.meta75626 = meta75626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry75625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75627,meta75626__$1){
var self__ = this;
var _75627__$1 = this;
return (new malli.registry.t_malli$registry75625(self__.m,self__.fm,meta75626__$1));
}));

(malli.registry.t_malli$registry75625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75627){
var self__ = this;
var _75627__$1 = this;
return self__.meta75626;
}));

(malli.registry.t_malli$registry75625.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry75625.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry75625.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry75625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta75626","meta75626",102164995,null)], null);
}));

(malli.registry.t_malli$registry75625.cljs$lang$type = true);

(malli.registry.t_malli$registry75625.cljs$lang$ctorStr = "malli.registry/t_malli$registry75625");

(malli.registry.t_malli$registry75625.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"malli.registry/t_malli$registry75625");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry75625.
 */
malli.registry.__GT_t_malli$registry75625 = (function malli$registry$fast_registry_$___GT_t_malli$registry75625(m__$1,fm__$1,meta75626){
return (new malli.registry.t_malli$registry75625(m__$1,fm__$1,meta75626));
});

}

return (new malli.registry.t_malli$registry75625(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.simple_registry = (function malli$registry$simple_registry(m){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry75630 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry75630 = (function (m,meta75631){
this.m = m;
this.meta75631 = meta75631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry75630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75632,meta75631__$1){
var self__ = this;
var _75632__$1 = this;
return (new malli.registry.t_malli$registry75630(self__.m,meta75631__$1));
}));

(malli.registry.t_malli$registry75630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75632){
var self__ = this;
var _75632__$1 = this;
return self__.meta75631;
}));

(malli.registry.t_malli$registry75630.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry75630.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry75630.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry75630.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta75631","meta75631",-1551547328,null)], null);
}));

(malli.registry.t_malli$registry75630.cljs$lang$type = true);

(malli.registry.t_malli$registry75630.cljs$lang$ctorStr = "malli.registry/t_malli$registry75630");

(malli.registry.t_malli$registry75630.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"malli.registry/t_malli$registry75630");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry75630.
 */
malli.registry.__GT_t_malli$registry75630 = (function malli$registry$simple_registry_$___GT_t_malli$registry75630(m__$1,meta75631){
return (new malli.registry.t_malli$registry75630(m__$1,meta75631));
});

}

return (new malli.registry.t_malli$registry75630(m,cljs.core.PersistentArrayMap.EMPTY));
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
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry75644 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry75644 = (function (meta75645){
this.meta75645 = meta75645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry75644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75646,meta75645__$1){
var self__ = this;
var _75646__$1 = this;
return (new malli.registry.t_malli$registry75644(meta75645__$1));
}));

(malli.registry.t_malli$registry75644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75646){
var self__ = this;
var _75646__$1 = this;
return self__.meta75645;
}));

(malli.registry.t_malli$registry75644.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry75644.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry75644.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry75644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta75645","meta75645",-381607518,null)], null);
}));

(malli.registry.t_malli$registry75644.cljs$lang$type = true);

(malli.registry.t_malli$registry75644.cljs$lang$ctorStr = "malli.registry/t_malli$registry75644");

(malli.registry.t_malli$registry75644.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"malli.registry/t_malli$registry75644");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry75644.
 */
malli.registry.__GT_t_malli$registry75644 = (function malli$registry$custom_default_registry_$___GT_t_malli$registry75644(meta75645){
return (new malli.registry.t_malli$registry75644(meta75645));
});

}

return (new malli.registry.t_malli$registry75644(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5772__auto__ = [];
var len__5766__auto___75724 = arguments.length;
var i__5767__auto___75725 = (0);
while(true){
if((i__5767__auto___75725 < len__5766__auto___75724)){
args__5772__auto__.push((arguments[i__5767__auto___75725]));

var G__75726 = (i__5767__auto___75725 + (1));
i__5767__auto___75725 = G__75726;
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
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry75667 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry75667 = (function (_QMARK_registries,registries,meta75668){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta75668 = meta75668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry75667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75669,meta75668__$1){
var self__ = this;
var _75669__$1 = this;
return (new malli.registry.t_malli$registry75667(self__._QMARK_registries,self__.registries,meta75668__$1));
}));

(malli.registry.t_malli$registry75667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75669){
var self__ = this;
var _75669__$1 = this;
return self__.meta75668;
}));

(malli.registry.t_malli$registry75667.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry75667.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__75657_SHARP_){
return malli.registry._schema(p1__75657_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry75667.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry75667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta75668","meta75668",-1197163839,null)], null);
}));

(malli.registry.t_malli$registry75667.cljs$lang$type = true);

(malli.registry.t_malli$registry75667.cljs$lang$ctorStr = "malli.registry/t_malli$registry75667");

(malli.registry.t_malli$registry75667.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"malli.registry/t_malli$registry75667");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry75667.
 */
malli.registry.__GT_t_malli$registry75667 = (function malli$registry$__GT_t_malli$registry75667(_QMARK_registries__$1,registries__$1,meta75668){
return (new malli.registry.t_malli$registry75667(_QMARK_registries__$1,registries__$1,meta75668));
});

}

return (new malli.registry.t_malli$registry75667(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq75659){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75659));
}));

malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry75679 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry75679 = (function (db,meta75680){
this.db = db;
this.meta75680 = meta75680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry75679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75681,meta75680__$1){
var self__ = this;
var _75681__$1 = this;
return (new malli.registry.t_malli$registry75679(self__.db,meta75680__$1));
}));

(malli.registry.t_malli$registry75679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75681){
var self__ = this;
var _75681__$1 = this;
return self__.meta75680;
}));

(malli.registry.t_malli$registry75679.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry75679.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry75679.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry75679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta75680","meta75680",613857331,null)], null);
}));

(malli.registry.t_malli$registry75679.cljs$lang$type = true);

(malli.registry.t_malli$registry75679.cljs$lang$ctorStr = "malli.registry/t_malli$registry75679");

(malli.registry.t_malli$registry75679.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"malli.registry/t_malli$registry75679");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry75679.
 */
malli.registry.__GT_t_malli$registry75679 = (function malli$registry$mutable_registry_$___GT_t_malli$registry75679(db__$1,meta75680){
return (new malli.registry.t_malli$registry75679(db__$1,meta75680));
});

}

return (new malli.registry.t_malli$registry75679(db,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry75683 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry75683 = (function (meta75684){
this.meta75684 = meta75684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry75683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75685,meta75684__$1){
var self__ = this;
var _75685__$1 = this;
return (new malli.registry.t_malli$registry75683(meta75684__$1));
}));

(malli.registry.t_malli$registry75683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75685){
var self__ = this;
var _75685__$1 = this;
return self__.meta75684;
}));

(malli.registry.t_malli$registry75683.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry75683.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry75683.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry75683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta75684","meta75684",-9188047,null)], null);
}));

(malli.registry.t_malli$registry75683.cljs$lang$type = true);

(malli.registry.t_malli$registry75683.cljs$lang$ctorStr = "malli.registry/t_malli$registry75683");

(malli.registry.t_malli$registry75683.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"malli.registry/t_malli$registry75683");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry75683.
 */
malli.registry.__GT_t_malli$registry75683 = (function malli$registry$dynamic_registry_$___GT_t_malli$registry75683(meta75684){
return (new malli.registry.t_malli$registry75683(meta75684));
});

}

return (new malli.registry.t_malli$registry75683(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(function (){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry75691 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry75691 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta75692){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta75692 = meta75692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry75691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75693,meta75692__$1){
var self__ = this;
var _75693__$1 = this;
return (new malli.registry.t_malli$registry75691(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta75692__$1));
}));

(malli.registry.t_malli$registry75691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75693){
var self__ = this;
var _75693__$1 = this;
return self__.meta75692;
}));

(malli.registry.t_malli$registry75691.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry75691.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5043__auto__ = (function (){var fexpr__75699 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__75699.cljs$core$IFn$_invoke$arity$1 ? fexpr__75699.cljs$core$IFn$_invoke$arity$1(name) : fexpr__75699.call(null,name));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var temp__5804__auto__ = (function (){var G__75700 = name;
var G__75701 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__75700,G__75701) : self__.provider.call(null,G__75700,G__75701));
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

(malli.registry.t_malli$registry75691.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry75691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta75692","meta75692",-1438617907,null)], null);
}));

(malli.registry.t_malli$registry75691.cljs$lang$type = true);

(malli.registry.t_malli$registry75691.cljs$lang$ctorStr = "malli.registry/t_malli$registry75691");

(malli.registry.t_malli$registry75691.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"malli.registry/t_malli$registry75691");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry75691.
 */
malli.registry.__GT_t_malli$registry75691 = (function malli$registry$lazy_registry_$___GT_t_malli$registry75691(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta75692){
return (new malli.registry.t_malli$registry75691(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta75692));
});

}

return (new malli.registry.t_malli$registry75691(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY));
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
