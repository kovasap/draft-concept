goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__59091 = arguments.length;
switch (G__59091) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59094 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59094 = (function (f,blockable,meta59095){
this.f = f;
this.blockable = blockable;
this.meta59095 = meta59095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59096,meta59095__$1){
var self__ = this;
var _59096__$1 = this;
return (new cljs.core.async.t_cljs$core$async59094(self__.f,self__.blockable,meta59095__$1));
}));

(cljs.core.async.t_cljs$core$async59094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59096){
var self__ = this;
var _59096__$1 = this;
return self__.meta59095;
}));

(cljs.core.async.t_cljs$core$async59094.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59094.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async59094.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async59094.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async59094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta59095","meta59095",1848860804,null)], null);
}));

(cljs.core.async.t_cljs$core$async59094.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59094");

(cljs.core.async.t_cljs$core$async59094.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async59094");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59094.
 */
cljs.core.async.__GT_t_cljs$core$async59094 = (function cljs$core$async$__GT_t_cljs$core$async59094(f__$1,blockable__$1,meta59095){
return (new cljs.core.async.t_cljs$core$async59094(f__$1,blockable__$1,meta59095));
});

}

return (new cljs.core.async.t_cljs$core$async59094(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__59155 = arguments.length;
switch (G__59155) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__59170 = arguments.length;
switch (G__59170) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__59190 = arguments.length;
switch (G__59190) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_61886 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_61886) : fn1.call(null,val_61886));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_61886) : fn1.call(null,val_61886));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__59195 = arguments.length;
switch (G__59195) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___61890 = n;
var x_61891 = (0);
while(true){
if((x_61891 < n__5633__auto___61890)){
(a[x_61891] = x_61891);

var G__61892 = (x_61891 + (1));
x_61891 = G__61892;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59205 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59205 = (function (flag,meta59206){
this.flag = flag;
this.meta59206 = meta59206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59207,meta59206__$1){
var self__ = this;
var _59207__$1 = this;
return (new cljs.core.async.t_cljs$core$async59205(self__.flag,meta59206__$1));
}));

(cljs.core.async.t_cljs$core$async59205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59207){
var self__ = this;
var _59207__$1 = this;
return self__.meta59206;
}));

(cljs.core.async.t_cljs$core$async59205.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async59205.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async59205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async59205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta59206","meta59206",-821219621,null)], null);
}));

(cljs.core.async.t_cljs$core$async59205.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59205");

(cljs.core.async.t_cljs$core$async59205.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async59205");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59205.
 */
cljs.core.async.__GT_t_cljs$core$async59205 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async59205(flag__$1,meta59206){
return (new cljs.core.async.t_cljs$core$async59205(flag__$1,meta59206));
});

}

return (new cljs.core.async.t_cljs$core$async59205(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59215 = (function (flag,cb,meta59216){
this.flag = flag;
this.cb = cb;
this.meta59216 = meta59216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59217,meta59216__$1){
var self__ = this;
var _59217__$1 = this;
return (new cljs.core.async.t_cljs$core$async59215(self__.flag,self__.cb,meta59216__$1));
}));

(cljs.core.async.t_cljs$core$async59215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59217){
var self__ = this;
var _59217__$1 = this;
return self__.meta59216;
}));

(cljs.core.async.t_cljs$core$async59215.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59215.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async59215.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async59215.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async59215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta59216","meta59216",680397914,null)], null);
}));

(cljs.core.async.t_cljs$core$async59215.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59215");

(cljs.core.async.t_cljs$core$async59215.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async59215");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59215.
 */
cljs.core.async.__GT_t_cljs$core$async59215 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async59215(flag__$1,cb__$1,meta59216){
return (new cljs.core.async.t_cljs$core$async59215(flag__$1,cb__$1,meta59216));
});

}

return (new cljs.core.async.t_cljs$core$async59215(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__59231_SHARP_){
var G__59236 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__59231_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__59236) : fret.call(null,G__59236));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__59235_SHARP_){
var G__59237 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__59235_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__59237) : fret.call(null,G__59237));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__61893 = (i + (1));
i = G__61893;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5041__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5041__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___61894 = arguments.length;
var i__5767__auto___61895 = (0);
while(true){
if((i__5767__auto___61895 < len__5766__auto___61894)){
args__5772__auto__.push((arguments[i__5767__auto___61895]));

var G__61896 = (i__5767__auto___61895 + (1));
i__5767__auto___61895 = G__61896;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__59242){
var map__59243 = p__59242;
var map__59243__$1 = cljs.core.__destructure_map(map__59243);
var opts = map__59243__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq59240){
var G__59241 = cljs.core.first(seq59240);
var seq59240__$1 = cljs.core.next(seq59240);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59241,seq59240__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__59248 = arguments.length;
switch (G__59248) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__59002__auto___61900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = (function (state_59272){
var state_val_59275 = (state_59272[(1)]);
if((state_val_59275 === (7))){
var inst_59268 = (state_59272[(2)]);
var state_59272__$1 = state_59272;
var statearr_59283_61901 = state_59272__$1;
(statearr_59283_61901[(2)] = inst_59268);

(statearr_59283_61901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59275 === (1))){
var state_59272__$1 = state_59272;
var statearr_59284_61902 = state_59272__$1;
(statearr_59284_61902[(2)] = null);

(statearr_59284_61902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59275 === (4))){
var inst_59251 = (state_59272[(7)]);
var inst_59251__$1 = (state_59272[(2)]);
var inst_59252 = (inst_59251__$1 == null);
var state_59272__$1 = (function (){var statearr_59285 = state_59272;
(statearr_59285[(7)] = inst_59251__$1);

return statearr_59285;
})();
if(cljs.core.truth_(inst_59252)){
var statearr_59286_61903 = state_59272__$1;
(statearr_59286_61903[(1)] = (5));

} else {
var statearr_59287_61904 = state_59272__$1;
(statearr_59287_61904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59275 === (13))){
var state_59272__$1 = state_59272;
var statearr_59288_61905 = state_59272__$1;
(statearr_59288_61905[(2)] = null);

(statearr_59288_61905[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59275 === (6))){
var inst_59251 = (state_59272[(7)]);
var state_59272__$1 = state_59272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59272__$1,(11),to,inst_59251);
} else {
if((state_val_59275 === (3))){
var inst_59270 = (state_59272[(2)]);
var state_59272__$1 = state_59272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59272__$1,inst_59270);
} else {
if((state_val_59275 === (12))){
var state_59272__$1 = state_59272;
var statearr_59289_61906 = state_59272__$1;
(statearr_59289_61906[(2)] = null);

(statearr_59289_61906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59275 === (2))){
var state_59272__$1 = state_59272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59272__$1,(4),from);
} else {
if((state_val_59275 === (11))){
var inst_59261 = (state_59272[(2)]);
var state_59272__$1 = state_59272;
if(cljs.core.truth_(inst_59261)){
var statearr_59290_61907 = state_59272__$1;
(statearr_59290_61907[(1)] = (12));

} else {
var statearr_59291_61908 = state_59272__$1;
(statearr_59291_61908[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59275 === (9))){
var state_59272__$1 = state_59272;
var statearr_59292_61909 = state_59272__$1;
(statearr_59292_61909[(2)] = null);

(statearr_59292_61909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59275 === (5))){
var state_59272__$1 = state_59272;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59293_61910 = state_59272__$1;
(statearr_59293_61910[(1)] = (8));

} else {
var statearr_59294_61911 = state_59272__$1;
(statearr_59294_61911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59275 === (14))){
var inst_59266 = (state_59272[(2)]);
var state_59272__$1 = state_59272;
var statearr_59295_61912 = state_59272__$1;
(statearr_59295_61912[(2)] = inst_59266);

(statearr_59295_61912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59275 === (10))){
var inst_59258 = (state_59272[(2)]);
var state_59272__$1 = state_59272;
var statearr_59296_61913 = state_59272__$1;
(statearr_59296_61913[(2)] = inst_59258);

(statearr_59296_61913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59275 === (8))){
var inst_59255 = cljs.core.async.close_BANG_(to);
var state_59272__$1 = state_59272;
var statearr_59297_61914 = state_59272__$1;
(statearr_59297_61914[(2)] = inst_59255);

(statearr_59297_61914[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__58890__auto__ = null;
var cljs$core$async$state_machine__58890__auto____0 = (function (){
var statearr_59305 = [null,null,null,null,null,null,null,null];
(statearr_59305[(0)] = cljs$core$async$state_machine__58890__auto__);

(statearr_59305[(1)] = (1));

return statearr_59305;
});
var cljs$core$async$state_machine__58890__auto____1 = (function (state_59272){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_59272);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e59307){var ex__58893__auto__ = e59307;
var statearr_59308_61922 = state_59272;
(statearr_59308_61922[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_59272[(4)]))){
var statearr_59310_61925 = state_59272;
(statearr_59310_61925[(1)] = cljs.core.first((state_59272[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61926 = state_59272;
state_59272 = G__61926;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
cljs$core$async$state_machine__58890__auto__ = function(state_59272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58890__auto____1.call(this,state_59272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58890__auto____0;
cljs$core$async$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58890__auto____1;
return cljs$core$async$state_machine__58890__auto__;
})()
})();
var state__59004__auto__ = (function (){var statearr_59311 = f__59003__auto__();
(statearr_59311[(6)] = c__59002__auto___61900);

return statearr_59311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__59316){
var vec__59317 = p__59316;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59317,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59317,(1),null);
var job = vec__59317;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__59002__auto___61931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = (function (state_59327){
var state_val_59328 = (state_59327[(1)]);
if((state_val_59328 === (1))){
var state_59327__$1 = state_59327;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59327__$1,(2),res,v);
} else {
if((state_val_59328 === (2))){
var inst_59321 = (state_59327[(2)]);
var inst_59322 = cljs.core.async.close_BANG_(res);
var state_59327__$1 = (function (){var statearr_59329 = state_59327;
(statearr_59329[(7)] = inst_59321);

return statearr_59329;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59327__$1,inst_59322);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____0 = (function (){
var statearr_59331 = [null,null,null,null,null,null,null,null];
(statearr_59331[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__);

(statearr_59331[(1)] = (1));

return statearr_59331;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____1 = (function (state_59327){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_59327);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e59332){var ex__58893__auto__ = e59332;
var statearr_59333_61937 = state_59327;
(statearr_59333_61937[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_59327[(4)]))){
var statearr_59334_61939 = state_59327;
(statearr_59334_61939[(1)] = cljs.core.first((state_59327[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61940 = state_59327;
state_59327 = G__61940;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__ = function(state_59327){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____1.call(this,state_59327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__;
})()
})();
var state__59004__auto__ = (function (){var statearr_59338 = f__59003__auto__();
(statearr_59338[(6)] = c__59002__auto___61931);

return statearr_59338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__59340){
var vec__59341 = p__59340;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59341,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59341,(1),null);
var job = vec__59341;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5633__auto___61942 = n;
var __61943 = (0);
while(true){
if((__61943 < n__5633__auto___61942)){
var G__59344_61944 = type;
var G__59344_61945__$1 = (((G__59344_61944 instanceof cljs.core.Keyword))?G__59344_61944.fqn:null);
switch (G__59344_61945__$1) {
case "compute":
var c__59002__auto___61947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__61943,c__59002__auto___61947,G__59344_61944,G__59344_61945__$1,n__5633__auto___61942,jobs,results,process__$1,async){
return (function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = ((function (__61943,c__59002__auto___61947,G__59344_61944,G__59344_61945__$1,n__5633__auto___61942,jobs,results,process__$1,async){
return (function (state_59363){
var state_val_59364 = (state_59363[(1)]);
if((state_val_59364 === (1))){
var state_59363__$1 = state_59363;
var statearr_59371_61948 = state_59363__$1;
(statearr_59371_61948[(2)] = null);

(statearr_59371_61948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59364 === (2))){
var state_59363__$1 = state_59363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59363__$1,(4),jobs);
} else {
if((state_val_59364 === (3))){
var inst_59361 = (state_59363[(2)]);
var state_59363__$1 = state_59363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59363__$1,inst_59361);
} else {
if((state_val_59364 === (4))){
var inst_59353 = (state_59363[(2)]);
var inst_59354 = process__$1(inst_59353);
var state_59363__$1 = state_59363;
if(cljs.core.truth_(inst_59354)){
var statearr_59372_61949 = state_59363__$1;
(statearr_59372_61949[(1)] = (5));

} else {
var statearr_59373_61950 = state_59363__$1;
(statearr_59373_61950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59364 === (5))){
var state_59363__$1 = state_59363;
var statearr_59374_61951 = state_59363__$1;
(statearr_59374_61951[(2)] = null);

(statearr_59374_61951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59364 === (6))){
var state_59363__$1 = state_59363;
var statearr_59375_61952 = state_59363__$1;
(statearr_59375_61952[(2)] = null);

(statearr_59375_61952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59364 === (7))){
var inst_59359 = (state_59363[(2)]);
var state_59363__$1 = state_59363;
var statearr_59378_61953 = state_59363__$1;
(statearr_59378_61953[(2)] = inst_59359);

(statearr_59378_61953[(1)] = (3));


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
});})(__61943,c__59002__auto___61947,G__59344_61944,G__59344_61945__$1,n__5633__auto___61942,jobs,results,process__$1,async))
;
return ((function (__61943,switch__58889__auto__,c__59002__auto___61947,G__59344_61944,G__59344_61945__$1,n__5633__auto___61942,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____0 = (function (){
var statearr_59379 = [null,null,null,null,null,null,null];
(statearr_59379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__);

(statearr_59379[(1)] = (1));

return statearr_59379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____1 = (function (state_59363){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_59363);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e59380){var ex__58893__auto__ = e59380;
var statearr_59381_61963 = state_59363;
(statearr_59381_61963[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_59363[(4)]))){
var statearr_59382_61964 = state_59363;
(statearr_59382_61964[(1)] = cljs.core.first((state_59363[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61968 = state_59363;
state_59363 = G__61968;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__ = function(state_59363){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____1.call(this,state_59363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__;
})()
;})(__61943,switch__58889__auto__,c__59002__auto___61947,G__59344_61944,G__59344_61945__$1,n__5633__auto___61942,jobs,results,process__$1,async))
})();
var state__59004__auto__ = (function (){var statearr_59383 = f__59003__auto__();
(statearr_59383[(6)] = c__59002__auto___61947);

return statearr_59383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
});})(__61943,c__59002__auto___61947,G__59344_61944,G__59344_61945__$1,n__5633__auto___61942,jobs,results,process__$1,async))
);


break;
case "async":
var c__59002__auto___61971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__61943,c__59002__auto___61971,G__59344_61944,G__59344_61945__$1,n__5633__auto___61942,jobs,results,process__$1,async){
return (function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = ((function (__61943,c__59002__auto___61971,G__59344_61944,G__59344_61945__$1,n__5633__auto___61942,jobs,results,process__$1,async){
return (function (state_59396){
var state_val_59397 = (state_59396[(1)]);
if((state_val_59397 === (1))){
var state_59396__$1 = state_59396;
var statearr_59398_61972 = state_59396__$1;
(statearr_59398_61972[(2)] = null);

(statearr_59398_61972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59397 === (2))){
var state_59396__$1 = state_59396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59396__$1,(4),jobs);
} else {
if((state_val_59397 === (3))){
var inst_59394 = (state_59396[(2)]);
var state_59396__$1 = state_59396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59396__$1,inst_59394);
} else {
if((state_val_59397 === (4))){
var inst_59386 = (state_59396[(2)]);
var inst_59387 = async(inst_59386);
var state_59396__$1 = state_59396;
if(cljs.core.truth_(inst_59387)){
var statearr_59403_61975 = state_59396__$1;
(statearr_59403_61975[(1)] = (5));

} else {
var statearr_59405_61976 = state_59396__$1;
(statearr_59405_61976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59397 === (5))){
var state_59396__$1 = state_59396;
var statearr_59407_61978 = state_59396__$1;
(statearr_59407_61978[(2)] = null);

(statearr_59407_61978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59397 === (6))){
var state_59396__$1 = state_59396;
var statearr_59408_61980 = state_59396__$1;
(statearr_59408_61980[(2)] = null);

(statearr_59408_61980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59397 === (7))){
var inst_59392 = (state_59396[(2)]);
var state_59396__$1 = state_59396;
var statearr_59409_61981 = state_59396__$1;
(statearr_59409_61981[(2)] = inst_59392);

(statearr_59409_61981[(1)] = (3));


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
});})(__61943,c__59002__auto___61971,G__59344_61944,G__59344_61945__$1,n__5633__auto___61942,jobs,results,process__$1,async))
;
return ((function (__61943,switch__58889__auto__,c__59002__auto___61971,G__59344_61944,G__59344_61945__$1,n__5633__auto___61942,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____0 = (function (){
var statearr_59410 = [null,null,null,null,null,null,null];
(statearr_59410[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__);

(statearr_59410[(1)] = (1));

return statearr_59410;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____1 = (function (state_59396){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_59396);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e59411){var ex__58893__auto__ = e59411;
var statearr_59412_61985 = state_59396;
(statearr_59412_61985[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_59396[(4)]))){
var statearr_59413_61986 = state_59396;
(statearr_59413_61986[(1)] = cljs.core.first((state_59396[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61991 = state_59396;
state_59396 = G__61991;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__ = function(state_59396){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____1.call(this,state_59396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__;
})()
;})(__61943,switch__58889__auto__,c__59002__auto___61971,G__59344_61944,G__59344_61945__$1,n__5633__auto___61942,jobs,results,process__$1,async))
})();
var state__59004__auto__ = (function (){var statearr_59414 = f__59003__auto__();
(statearr_59414[(6)] = c__59002__auto___61971);

return statearr_59414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
});})(__61943,c__59002__auto___61971,G__59344_61944,G__59344_61945__$1,n__5633__auto___61942,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59344_61945__$1)].join('')));

}

var G__61992 = (__61943 + (1));
__61943 = G__61992;
continue;
} else {
}
break;
}

var c__59002__auto___61993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = (function (state_59436){
var state_val_59437 = (state_59436[(1)]);
if((state_val_59437 === (7))){
var inst_59432 = (state_59436[(2)]);
var state_59436__$1 = state_59436;
var statearr_59444_61996 = state_59436__$1;
(statearr_59444_61996[(2)] = inst_59432);

(statearr_59444_61996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59437 === (1))){
var state_59436__$1 = state_59436;
var statearr_59445_61998 = state_59436__$1;
(statearr_59445_61998[(2)] = null);

(statearr_59445_61998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59437 === (4))){
var inst_59417 = (state_59436[(7)]);
var inst_59417__$1 = (state_59436[(2)]);
var inst_59418 = (inst_59417__$1 == null);
var state_59436__$1 = (function (){var statearr_59446 = state_59436;
(statearr_59446[(7)] = inst_59417__$1);

return statearr_59446;
})();
if(cljs.core.truth_(inst_59418)){
var statearr_59447_62006 = state_59436__$1;
(statearr_59447_62006[(1)] = (5));

} else {
var statearr_59448_62008 = state_59436__$1;
(statearr_59448_62008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59437 === (6))){
var inst_59417 = (state_59436[(7)]);
var inst_59422 = (state_59436[(8)]);
var inst_59422__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_59423 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59424 = [inst_59417,inst_59422__$1];
var inst_59425 = (new cljs.core.PersistentVector(null,2,(5),inst_59423,inst_59424,null));
var state_59436__$1 = (function (){var statearr_59449 = state_59436;
(statearr_59449[(8)] = inst_59422__$1);

return statearr_59449;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59436__$1,(8),jobs,inst_59425);
} else {
if((state_val_59437 === (3))){
var inst_59434 = (state_59436[(2)]);
var state_59436__$1 = state_59436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59436__$1,inst_59434);
} else {
if((state_val_59437 === (2))){
var state_59436__$1 = state_59436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59436__$1,(4),from);
} else {
if((state_val_59437 === (9))){
var inst_59429 = (state_59436[(2)]);
var state_59436__$1 = (function (){var statearr_59450 = state_59436;
(statearr_59450[(9)] = inst_59429);

return statearr_59450;
})();
var statearr_59451_62012 = state_59436__$1;
(statearr_59451_62012[(2)] = null);

(statearr_59451_62012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59437 === (5))){
var inst_59420 = cljs.core.async.close_BANG_(jobs);
var state_59436__$1 = state_59436;
var statearr_59456_62013 = state_59436__$1;
(statearr_59456_62013[(2)] = inst_59420);

(statearr_59456_62013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59437 === (8))){
var inst_59422 = (state_59436[(8)]);
var inst_59427 = (state_59436[(2)]);
var state_59436__$1 = (function (){var statearr_59457 = state_59436;
(statearr_59457[(10)] = inst_59427);

return statearr_59457;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59436__$1,(9),results,inst_59422);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____0 = (function (){
var statearr_59458 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59458[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__);

(statearr_59458[(1)] = (1));

return statearr_59458;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____1 = (function (state_59436){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_59436);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e59459){var ex__58893__auto__ = e59459;
var statearr_59460_62021 = state_59436;
(statearr_59460_62021[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_59436[(4)]))){
var statearr_59461_62022 = state_59436;
(statearr_59461_62022[(1)] = cljs.core.first((state_59436[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62023 = state_59436;
state_59436 = G__62023;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__ = function(state_59436){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____1.call(this,state_59436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__;
})()
})();
var state__59004__auto__ = (function (){var statearr_59462 = f__59003__auto__();
(statearr_59462[(6)] = c__59002__auto___61993);

return statearr_59462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
}));


var c__59002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = (function (state_59500){
var state_val_59501 = (state_59500[(1)]);
if((state_val_59501 === (7))){
var inst_59496 = (state_59500[(2)]);
var state_59500__$1 = state_59500;
var statearr_59502_62028 = state_59500__$1;
(statearr_59502_62028[(2)] = inst_59496);

(statearr_59502_62028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59501 === (20))){
var state_59500__$1 = state_59500;
var statearr_59504_62029 = state_59500__$1;
(statearr_59504_62029[(2)] = null);

(statearr_59504_62029[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59501 === (1))){
var state_59500__$1 = state_59500;
var statearr_59506_62030 = state_59500__$1;
(statearr_59506_62030[(2)] = null);

(statearr_59506_62030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59501 === (4))){
var inst_59465 = (state_59500[(7)]);
var inst_59465__$1 = (state_59500[(2)]);
var inst_59466 = (inst_59465__$1 == null);
var state_59500__$1 = (function (){var statearr_59507 = state_59500;
(statearr_59507[(7)] = inst_59465__$1);

return statearr_59507;
})();
if(cljs.core.truth_(inst_59466)){
var statearr_59508_62035 = state_59500__$1;
(statearr_59508_62035[(1)] = (5));

} else {
var statearr_59509_62036 = state_59500__$1;
(statearr_59509_62036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59501 === (15))){
var inst_59478 = (state_59500[(8)]);
var state_59500__$1 = state_59500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59500__$1,(18),to,inst_59478);
} else {
if((state_val_59501 === (21))){
var inst_59491 = (state_59500[(2)]);
var state_59500__$1 = state_59500;
var statearr_59510_62037 = state_59500__$1;
(statearr_59510_62037[(2)] = inst_59491);

(statearr_59510_62037[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59501 === (13))){
var inst_59493 = (state_59500[(2)]);
var state_59500__$1 = (function (){var statearr_59511 = state_59500;
(statearr_59511[(9)] = inst_59493);

return statearr_59511;
})();
var statearr_59512_62039 = state_59500__$1;
(statearr_59512_62039[(2)] = null);

(statearr_59512_62039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59501 === (6))){
var inst_59465 = (state_59500[(7)]);
var state_59500__$1 = state_59500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59500__$1,(11),inst_59465);
} else {
if((state_val_59501 === (17))){
var inst_59486 = (state_59500[(2)]);
var state_59500__$1 = state_59500;
if(cljs.core.truth_(inst_59486)){
var statearr_59513_62040 = state_59500__$1;
(statearr_59513_62040[(1)] = (19));

} else {
var statearr_59514_62041 = state_59500__$1;
(statearr_59514_62041[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59501 === (3))){
var inst_59498 = (state_59500[(2)]);
var state_59500__$1 = state_59500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59500__$1,inst_59498);
} else {
if((state_val_59501 === (12))){
var inst_59475 = (state_59500[(10)]);
var state_59500__$1 = state_59500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59500__$1,(14),inst_59475);
} else {
if((state_val_59501 === (2))){
var state_59500__$1 = state_59500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59500__$1,(4),results);
} else {
if((state_val_59501 === (19))){
var state_59500__$1 = state_59500;
var statearr_59519_62042 = state_59500__$1;
(statearr_59519_62042[(2)] = null);

(statearr_59519_62042[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59501 === (11))){
var inst_59475 = (state_59500[(2)]);
var state_59500__$1 = (function (){var statearr_59520 = state_59500;
(statearr_59520[(10)] = inst_59475);

return statearr_59520;
})();
var statearr_59521_62043 = state_59500__$1;
(statearr_59521_62043[(2)] = null);

(statearr_59521_62043[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59501 === (9))){
var state_59500__$1 = state_59500;
var statearr_59526_62044 = state_59500__$1;
(statearr_59526_62044[(2)] = null);

(statearr_59526_62044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59501 === (5))){
var state_59500__$1 = state_59500;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59528_62045 = state_59500__$1;
(statearr_59528_62045[(1)] = (8));

} else {
var statearr_59529_62046 = state_59500__$1;
(statearr_59529_62046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59501 === (14))){
var inst_59480 = (state_59500[(11)]);
var inst_59478 = (state_59500[(8)]);
var inst_59478__$1 = (state_59500[(2)]);
var inst_59479 = (inst_59478__$1 == null);
var inst_59480__$1 = cljs.core.not(inst_59479);
var state_59500__$1 = (function (){var statearr_59530 = state_59500;
(statearr_59530[(11)] = inst_59480__$1);

(statearr_59530[(8)] = inst_59478__$1);

return statearr_59530;
})();
if(inst_59480__$1){
var statearr_59531_62047 = state_59500__$1;
(statearr_59531_62047[(1)] = (15));

} else {
var statearr_59533_62048 = state_59500__$1;
(statearr_59533_62048[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59501 === (16))){
var inst_59480 = (state_59500[(11)]);
var state_59500__$1 = state_59500;
var statearr_59535_62049 = state_59500__$1;
(statearr_59535_62049[(2)] = inst_59480);

(statearr_59535_62049[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59501 === (10))){
var inst_59472 = (state_59500[(2)]);
var state_59500__$1 = state_59500;
var statearr_59537_62050 = state_59500__$1;
(statearr_59537_62050[(2)] = inst_59472);

(statearr_59537_62050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59501 === (18))){
var inst_59483 = (state_59500[(2)]);
var state_59500__$1 = state_59500;
var statearr_59542_62054 = state_59500__$1;
(statearr_59542_62054[(2)] = inst_59483);

(statearr_59542_62054[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59501 === (8))){
var inst_59469 = cljs.core.async.close_BANG_(to);
var state_59500__$1 = state_59500;
var statearr_59550_62055 = state_59500__$1;
(statearr_59550_62055[(2)] = inst_59469);

(statearr_59550_62055[(1)] = (10));


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
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____0 = (function (){
var statearr_59554 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59554[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__);

(statearr_59554[(1)] = (1));

return statearr_59554;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____1 = (function (state_59500){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_59500);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e59555){var ex__58893__auto__ = e59555;
var statearr_59556_62056 = state_59500;
(statearr_59556_62056[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_59500[(4)]))){
var statearr_59560_62057 = state_59500;
(statearr_59560_62057[(1)] = cljs.core.first((state_59500[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62058 = state_59500;
state_59500 = G__62058;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__ = function(state_59500){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____1.call(this,state_59500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58890__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58890__auto__;
})()
})();
var state__59004__auto__ = (function (){var statearr_59561 = f__59003__auto__();
(statearr_59561[(6)] = c__59002__auto__);

return statearr_59561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
}));

return c__59002__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__59566 = arguments.length;
switch (G__59566) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__59574 = arguments.length;
switch (G__59574) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__59579 = arguments.length;
switch (G__59579) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__59002__auto___62071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = (function (state_59606){
var state_val_59607 = (state_59606[(1)]);
if((state_val_59607 === (7))){
var inst_59602 = (state_59606[(2)]);
var state_59606__$1 = state_59606;
var statearr_59608_62072 = state_59606__$1;
(statearr_59608_62072[(2)] = inst_59602);

(statearr_59608_62072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59607 === (1))){
var state_59606__$1 = state_59606;
var statearr_59609_62074 = state_59606__$1;
(statearr_59609_62074[(2)] = null);

(statearr_59609_62074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59607 === (4))){
var inst_59583 = (state_59606[(7)]);
var inst_59583__$1 = (state_59606[(2)]);
var inst_59584 = (inst_59583__$1 == null);
var state_59606__$1 = (function (){var statearr_59610 = state_59606;
(statearr_59610[(7)] = inst_59583__$1);

return statearr_59610;
})();
if(cljs.core.truth_(inst_59584)){
var statearr_59611_62075 = state_59606__$1;
(statearr_59611_62075[(1)] = (5));

} else {
var statearr_59612_62076 = state_59606__$1;
(statearr_59612_62076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59607 === (13))){
var state_59606__$1 = state_59606;
var statearr_59613_62077 = state_59606__$1;
(statearr_59613_62077[(2)] = null);

(statearr_59613_62077[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59607 === (6))){
var inst_59583 = (state_59606[(7)]);
var inst_59589 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_59583) : p.call(null,inst_59583));
var state_59606__$1 = state_59606;
if(cljs.core.truth_(inst_59589)){
var statearr_59614_62078 = state_59606__$1;
(statearr_59614_62078[(1)] = (9));

} else {
var statearr_59615_62079 = state_59606__$1;
(statearr_59615_62079[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59607 === (3))){
var inst_59604 = (state_59606[(2)]);
var state_59606__$1 = state_59606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59606__$1,inst_59604);
} else {
if((state_val_59607 === (12))){
var state_59606__$1 = state_59606;
var statearr_59616_62080 = state_59606__$1;
(statearr_59616_62080[(2)] = null);

(statearr_59616_62080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59607 === (2))){
var state_59606__$1 = state_59606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59606__$1,(4),ch);
} else {
if((state_val_59607 === (11))){
var inst_59583 = (state_59606[(7)]);
var inst_59593 = (state_59606[(2)]);
var state_59606__$1 = state_59606;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59606__$1,(8),inst_59593,inst_59583);
} else {
if((state_val_59607 === (9))){
var state_59606__$1 = state_59606;
var statearr_59617_62081 = state_59606__$1;
(statearr_59617_62081[(2)] = tc);

(statearr_59617_62081[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59607 === (5))){
var inst_59586 = cljs.core.async.close_BANG_(tc);
var inst_59587 = cljs.core.async.close_BANG_(fc);
var state_59606__$1 = (function (){var statearr_59618 = state_59606;
(statearr_59618[(8)] = inst_59586);

return statearr_59618;
})();
var statearr_59619_62082 = state_59606__$1;
(statearr_59619_62082[(2)] = inst_59587);

(statearr_59619_62082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59607 === (14))){
var inst_59600 = (state_59606[(2)]);
var state_59606__$1 = state_59606;
var statearr_59620_62084 = state_59606__$1;
(statearr_59620_62084[(2)] = inst_59600);

(statearr_59620_62084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59607 === (10))){
var state_59606__$1 = state_59606;
var statearr_59621_62085 = state_59606__$1;
(statearr_59621_62085[(2)] = fc);

(statearr_59621_62085[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59607 === (8))){
var inst_59595 = (state_59606[(2)]);
var state_59606__$1 = state_59606;
if(cljs.core.truth_(inst_59595)){
var statearr_59622_62086 = state_59606__$1;
(statearr_59622_62086[(1)] = (12));

} else {
var statearr_59623_62087 = state_59606__$1;
(statearr_59623_62087[(1)] = (13));

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
}
});
return (function() {
var cljs$core$async$state_machine__58890__auto__ = null;
var cljs$core$async$state_machine__58890__auto____0 = (function (){
var statearr_59626 = [null,null,null,null,null,null,null,null,null];
(statearr_59626[(0)] = cljs$core$async$state_machine__58890__auto__);

(statearr_59626[(1)] = (1));

return statearr_59626;
});
var cljs$core$async$state_machine__58890__auto____1 = (function (state_59606){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_59606);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e59627){var ex__58893__auto__ = e59627;
var statearr_59628_62089 = state_59606;
(statearr_59628_62089[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_59606[(4)]))){
var statearr_59629_62090 = state_59606;
(statearr_59629_62090[(1)] = cljs.core.first((state_59606[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62094 = state_59606;
state_59606 = G__62094;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
cljs$core$async$state_machine__58890__auto__ = function(state_59606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58890__auto____1.call(this,state_59606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58890__auto____0;
cljs$core$async$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58890__auto____1;
return cljs$core$async$state_machine__58890__auto__;
})()
})();
var state__59004__auto__ = (function (){var statearr_59630 = f__59003__auto__();
(statearr_59630[(6)] = c__59002__auto___62071);

return statearr_59630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__59002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = (function (state_59653){
var state_val_59654 = (state_59653[(1)]);
if((state_val_59654 === (7))){
var inst_59649 = (state_59653[(2)]);
var state_59653__$1 = state_59653;
var statearr_59655_62095 = state_59653__$1;
(statearr_59655_62095[(2)] = inst_59649);

(statearr_59655_62095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59654 === (1))){
var inst_59632 = init;
var inst_59633 = inst_59632;
var state_59653__$1 = (function (){var statearr_59656 = state_59653;
(statearr_59656[(7)] = inst_59633);

return statearr_59656;
})();
var statearr_59657_62096 = state_59653__$1;
(statearr_59657_62096[(2)] = null);

(statearr_59657_62096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59654 === (4))){
var inst_59636 = (state_59653[(8)]);
var inst_59636__$1 = (state_59653[(2)]);
var inst_59637 = (inst_59636__$1 == null);
var state_59653__$1 = (function (){var statearr_59658 = state_59653;
(statearr_59658[(8)] = inst_59636__$1);

return statearr_59658;
})();
if(cljs.core.truth_(inst_59637)){
var statearr_59659_62097 = state_59653__$1;
(statearr_59659_62097[(1)] = (5));

} else {
var statearr_59660_62098 = state_59653__$1;
(statearr_59660_62098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59654 === (6))){
var inst_59636 = (state_59653[(8)]);
var inst_59640 = (state_59653[(9)]);
var inst_59633 = (state_59653[(7)]);
var inst_59640__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_59633,inst_59636) : f.call(null,inst_59633,inst_59636));
var inst_59641 = cljs.core.reduced_QMARK_(inst_59640__$1);
var state_59653__$1 = (function (){var statearr_59665 = state_59653;
(statearr_59665[(9)] = inst_59640__$1);

return statearr_59665;
})();
if(inst_59641){
var statearr_59672_62099 = state_59653__$1;
(statearr_59672_62099[(1)] = (8));

} else {
var statearr_59674_62100 = state_59653__$1;
(statearr_59674_62100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59654 === (3))){
var inst_59651 = (state_59653[(2)]);
var state_59653__$1 = state_59653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59653__$1,inst_59651);
} else {
if((state_val_59654 === (2))){
var state_59653__$1 = state_59653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59653__$1,(4),ch);
} else {
if((state_val_59654 === (9))){
var inst_59640 = (state_59653[(9)]);
var inst_59633 = inst_59640;
var state_59653__$1 = (function (){var statearr_59692 = state_59653;
(statearr_59692[(7)] = inst_59633);

return statearr_59692;
})();
var statearr_59694_62101 = state_59653__$1;
(statearr_59694_62101[(2)] = null);

(statearr_59694_62101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59654 === (5))){
var inst_59633 = (state_59653[(7)]);
var state_59653__$1 = state_59653;
var statearr_59695_62102 = state_59653__$1;
(statearr_59695_62102[(2)] = inst_59633);

(statearr_59695_62102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59654 === (10))){
var inst_59647 = (state_59653[(2)]);
var state_59653__$1 = state_59653;
var statearr_59696_62103 = state_59653__$1;
(statearr_59696_62103[(2)] = inst_59647);

(statearr_59696_62103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59654 === (8))){
var inst_59640 = (state_59653[(9)]);
var inst_59643 = cljs.core.deref(inst_59640);
var state_59653__$1 = state_59653;
var statearr_59697_62104 = state_59653__$1;
(statearr_59697_62104[(2)] = inst_59643);

(statearr_59697_62104[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__58890__auto__ = null;
var cljs$core$async$reduce_$_state_machine__58890__auto____0 = (function (){
var statearr_59699 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59699[(0)] = cljs$core$async$reduce_$_state_machine__58890__auto__);

(statearr_59699[(1)] = (1));

return statearr_59699;
});
var cljs$core$async$reduce_$_state_machine__58890__auto____1 = (function (state_59653){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_59653);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e59700){var ex__58893__auto__ = e59700;
var statearr_59701_62106 = state_59653;
(statearr_59701_62106[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_59653[(4)]))){
var statearr_59702_62107 = state_59653;
(statearr_59702_62107[(1)] = cljs.core.first((state_59653[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62108 = state_59653;
state_59653 = G__62108;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__58890__auto__ = function(state_59653){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__58890__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__58890__auto____1.call(this,state_59653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__58890__auto____0;
cljs$core$async$reduce_$_state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__58890__auto____1;
return cljs$core$async$reduce_$_state_machine__58890__auto__;
})()
})();
var state__59004__auto__ = (function (){var statearr_59705 = f__59003__auto__();
(statearr_59705[(6)] = c__59002__auto__);

return statearr_59705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
}));

return c__59002__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__59002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = (function (state_59714){
var state_val_59715 = (state_59714[(1)]);
if((state_val_59715 === (1))){
var inst_59709 = cljs.core.async.reduce(f__$1,init,ch);
var state_59714__$1 = state_59714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59714__$1,(2),inst_59709);
} else {
if((state_val_59715 === (2))){
var inst_59711 = (state_59714[(2)]);
var inst_59712 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_59711) : f__$1.call(null,inst_59711));
var state_59714__$1 = state_59714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59714__$1,inst_59712);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__58890__auto__ = null;
var cljs$core$async$transduce_$_state_machine__58890__auto____0 = (function (){
var statearr_59738 = [null,null,null,null,null,null,null];
(statearr_59738[(0)] = cljs$core$async$transduce_$_state_machine__58890__auto__);

(statearr_59738[(1)] = (1));

return statearr_59738;
});
var cljs$core$async$transduce_$_state_machine__58890__auto____1 = (function (state_59714){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_59714);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e59742){var ex__58893__auto__ = e59742;
var statearr_59743_62109 = state_59714;
(statearr_59743_62109[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_59714[(4)]))){
var statearr_59748_62110 = state_59714;
(statearr_59748_62110[(1)] = cljs.core.first((state_59714[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62111 = state_59714;
state_59714 = G__62111;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__58890__auto__ = function(state_59714){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__58890__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__58890__auto____1.call(this,state_59714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__58890__auto____0;
cljs$core$async$transduce_$_state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__58890__auto____1;
return cljs$core$async$transduce_$_state_machine__58890__auto__;
})()
})();
var state__59004__auto__ = (function (){var statearr_59765 = f__59003__auto__();
(statearr_59765[(6)] = c__59002__auto__);

return statearr_59765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
}));

return c__59002__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__59795 = arguments.length;
switch (G__59795) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__59002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = (function (state_59835){
var state_val_59836 = (state_59835[(1)]);
if((state_val_59836 === (7))){
var inst_59810 = (state_59835[(2)]);
var state_59835__$1 = state_59835;
var statearr_59837_62113 = state_59835__$1;
(statearr_59837_62113[(2)] = inst_59810);

(statearr_59837_62113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (1))){
var inst_59804 = cljs.core.seq(coll);
var inst_59805 = inst_59804;
var state_59835__$1 = (function (){var statearr_59838 = state_59835;
(statearr_59838[(7)] = inst_59805);

return statearr_59838;
})();
var statearr_59839_62114 = state_59835__$1;
(statearr_59839_62114[(2)] = null);

(statearr_59839_62114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (4))){
var inst_59805 = (state_59835[(7)]);
var inst_59808 = cljs.core.first(inst_59805);
var state_59835__$1 = state_59835;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59835__$1,(7),ch,inst_59808);
} else {
if((state_val_59836 === (13))){
var inst_59825 = (state_59835[(2)]);
var state_59835__$1 = state_59835;
var statearr_59844_62115 = state_59835__$1;
(statearr_59844_62115[(2)] = inst_59825);

(statearr_59844_62115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (6))){
var inst_59813 = (state_59835[(2)]);
var state_59835__$1 = state_59835;
if(cljs.core.truth_(inst_59813)){
var statearr_59849_62116 = state_59835__$1;
(statearr_59849_62116[(1)] = (8));

} else {
var statearr_59851_62117 = state_59835__$1;
(statearr_59851_62117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (3))){
var inst_59832 = (state_59835[(2)]);
var state_59835__$1 = state_59835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59835__$1,inst_59832);
} else {
if((state_val_59836 === (12))){
var state_59835__$1 = state_59835;
var statearr_59859_62118 = state_59835__$1;
(statearr_59859_62118[(2)] = null);

(statearr_59859_62118[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (2))){
var inst_59805 = (state_59835[(7)]);
var state_59835__$1 = state_59835;
if(cljs.core.truth_(inst_59805)){
var statearr_59864_62119 = state_59835__$1;
(statearr_59864_62119[(1)] = (4));

} else {
var statearr_59865_62120 = state_59835__$1;
(statearr_59865_62120[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (11))){
var inst_59822 = cljs.core.async.close_BANG_(ch);
var state_59835__$1 = state_59835;
var statearr_59873_62121 = state_59835__$1;
(statearr_59873_62121[(2)] = inst_59822);

(statearr_59873_62121[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (9))){
var state_59835__$1 = state_59835;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59874_62123 = state_59835__$1;
(statearr_59874_62123[(1)] = (11));

} else {
var statearr_59875_62125 = state_59835__$1;
(statearr_59875_62125[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (5))){
var inst_59805 = (state_59835[(7)]);
var state_59835__$1 = state_59835;
var statearr_59876_62126 = state_59835__$1;
(statearr_59876_62126[(2)] = inst_59805);

(statearr_59876_62126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (10))){
var inst_59827 = (state_59835[(2)]);
var state_59835__$1 = state_59835;
var statearr_59877_62128 = state_59835__$1;
(statearr_59877_62128[(2)] = inst_59827);

(statearr_59877_62128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (8))){
var inst_59805 = (state_59835[(7)]);
var inst_59818 = cljs.core.next(inst_59805);
var inst_59805__$1 = inst_59818;
var state_59835__$1 = (function (){var statearr_59878 = state_59835;
(statearr_59878[(7)] = inst_59805__$1);

return statearr_59878;
})();
var statearr_59879_62130 = state_59835__$1;
(statearr_59879_62130[(2)] = null);

(statearr_59879_62130[(1)] = (2));


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
var cljs$core$async$state_machine__58890__auto__ = null;
var cljs$core$async$state_machine__58890__auto____0 = (function (){
var statearr_59883 = [null,null,null,null,null,null,null,null];
(statearr_59883[(0)] = cljs$core$async$state_machine__58890__auto__);

(statearr_59883[(1)] = (1));

return statearr_59883;
});
var cljs$core$async$state_machine__58890__auto____1 = (function (state_59835){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_59835);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e59887){var ex__58893__auto__ = e59887;
var statearr_59888_62131 = state_59835;
(statearr_59888_62131[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_59835[(4)]))){
var statearr_59889_62132 = state_59835;
(statearr_59889_62132[(1)] = cljs.core.first((state_59835[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62133 = state_59835;
state_59835 = G__62133;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
cljs$core$async$state_machine__58890__auto__ = function(state_59835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58890__auto____1.call(this,state_59835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58890__auto____0;
cljs$core$async$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58890__auto____1;
return cljs$core$async$state_machine__58890__auto__;
})()
})();
var state__59004__auto__ = (function (){var statearr_59890 = f__59003__auto__();
(statearr_59890[(6)] = c__59002__auto__);

return statearr_59890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
}));

return c__59002__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__59893 = arguments.length;
switch (G__59893) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_62135 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_62135(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_62137 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5389__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_62137(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_62143 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_62143(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_62146 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_62146(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59917 = (function (ch,cs,meta59918){
this.ch = ch;
this.cs = cs;
this.meta59918 = meta59918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59919,meta59918__$1){
var self__ = this;
var _59919__$1 = this;
return (new cljs.core.async.t_cljs$core$async59917(self__.ch,self__.cs,meta59918__$1));
}));

(cljs.core.async.t_cljs$core$async59917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59919){
var self__ = this;
var _59919__$1 = this;
return self__.meta59918;
}));

(cljs.core.async.t_cljs$core$async59917.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59917.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async59917.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59917.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async59917.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async59917.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async59917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta59918","meta59918",-1179640015,null)], null);
}));

(cljs.core.async.t_cljs$core$async59917.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59917");

(cljs.core.async.t_cljs$core$async59917.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async59917");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59917.
 */
cljs.core.async.__GT_t_cljs$core$async59917 = (function cljs$core$async$mult_$___GT_t_cljs$core$async59917(ch__$1,cs__$1,meta59918){
return (new cljs.core.async.t_cljs$core$async59917(ch__$1,cs__$1,meta59918));
});

}

return (new cljs.core.async.t_cljs$core$async59917(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__59002__auto___62153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = (function (state_60073){
var state_val_60074 = (state_60073[(1)]);
if((state_val_60074 === (7))){
var inst_60069 = (state_60073[(2)]);
var state_60073__$1 = state_60073;
var statearr_60075_62154 = state_60073__$1;
(statearr_60075_62154[(2)] = inst_60069);

(statearr_60075_62154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (20))){
var inst_59971 = (state_60073[(7)]);
var inst_59986 = cljs.core.first(inst_59971);
var inst_59987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59986,(0),null);
var inst_59988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59986,(1),null);
var state_60073__$1 = (function (){var statearr_60076 = state_60073;
(statearr_60076[(8)] = inst_59987);

return statearr_60076;
})();
if(cljs.core.truth_(inst_59988)){
var statearr_60077_62155 = state_60073__$1;
(statearr_60077_62155[(1)] = (22));

} else {
var statearr_60080_62156 = state_60073__$1;
(statearr_60080_62156[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (27))){
var inst_60016 = (state_60073[(9)]);
var inst_59935 = (state_60073[(10)]);
var inst_60018 = (state_60073[(11)]);
var inst_60023 = (state_60073[(12)]);
var inst_60023__$1 = cljs.core._nth(inst_60016,inst_60018);
var inst_60024 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_60023__$1,inst_59935,done);
var state_60073__$1 = (function (){var statearr_60081 = state_60073;
(statearr_60081[(12)] = inst_60023__$1);

return statearr_60081;
})();
if(cljs.core.truth_(inst_60024)){
var statearr_60082_62158 = state_60073__$1;
(statearr_60082_62158[(1)] = (30));

} else {
var statearr_60083_62159 = state_60073__$1;
(statearr_60083_62159[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (1))){
var state_60073__$1 = state_60073;
var statearr_60084_62163 = state_60073__$1;
(statearr_60084_62163[(2)] = null);

(statearr_60084_62163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (24))){
var inst_59971 = (state_60073[(7)]);
var inst_59993 = (state_60073[(2)]);
var inst_59994 = cljs.core.next(inst_59971);
var inst_59944 = inst_59994;
var inst_59945 = null;
var inst_59946 = (0);
var inst_59947 = (0);
var state_60073__$1 = (function (){var statearr_60085 = state_60073;
(statearr_60085[(13)] = inst_59947);

(statearr_60085[(14)] = inst_59993);

(statearr_60085[(15)] = inst_59945);

(statearr_60085[(16)] = inst_59946);

(statearr_60085[(17)] = inst_59944);

return statearr_60085;
})();
var statearr_60086_62164 = state_60073__$1;
(statearr_60086_62164[(2)] = null);

(statearr_60086_62164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (39))){
var state_60073__$1 = state_60073;
var statearr_60092_62165 = state_60073__$1;
(statearr_60092_62165[(2)] = null);

(statearr_60092_62165[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (4))){
var inst_59935 = (state_60073[(10)]);
var inst_59935__$1 = (state_60073[(2)]);
var inst_59936 = (inst_59935__$1 == null);
var state_60073__$1 = (function (){var statearr_60093 = state_60073;
(statearr_60093[(10)] = inst_59935__$1);

return statearr_60093;
})();
if(cljs.core.truth_(inst_59936)){
var statearr_60094_62187 = state_60073__$1;
(statearr_60094_62187[(1)] = (5));

} else {
var statearr_60095_62188 = state_60073__$1;
(statearr_60095_62188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (15))){
var inst_59947 = (state_60073[(13)]);
var inst_59945 = (state_60073[(15)]);
var inst_59946 = (state_60073[(16)]);
var inst_59944 = (state_60073[(17)]);
var inst_59967 = (state_60073[(2)]);
var inst_59968 = (inst_59947 + (1));
var tmp60089 = inst_59945;
var tmp60090 = inst_59946;
var tmp60091 = inst_59944;
var inst_59944__$1 = tmp60091;
var inst_59945__$1 = tmp60089;
var inst_59946__$1 = tmp60090;
var inst_59947__$1 = inst_59968;
var state_60073__$1 = (function (){var statearr_60098 = state_60073;
(statearr_60098[(13)] = inst_59947__$1);

(statearr_60098[(18)] = inst_59967);

(statearr_60098[(15)] = inst_59945__$1);

(statearr_60098[(16)] = inst_59946__$1);

(statearr_60098[(17)] = inst_59944__$1);

return statearr_60098;
})();
var statearr_60100_62190 = state_60073__$1;
(statearr_60100_62190[(2)] = null);

(statearr_60100_62190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (21))){
var inst_59997 = (state_60073[(2)]);
var state_60073__$1 = state_60073;
var statearr_60104_62192 = state_60073__$1;
(statearr_60104_62192[(2)] = inst_59997);

(statearr_60104_62192[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (31))){
var inst_60023 = (state_60073[(12)]);
var inst_60027 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_60023);
var state_60073__$1 = state_60073;
var statearr_60105_62193 = state_60073__$1;
(statearr_60105_62193[(2)] = inst_60027);

(statearr_60105_62193[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (32))){
var inst_60017 = (state_60073[(19)]);
var inst_60016 = (state_60073[(9)]);
var inst_60015 = (state_60073[(20)]);
var inst_60018 = (state_60073[(11)]);
var inst_60029 = (state_60073[(2)]);
var inst_60030 = (inst_60018 + (1));
var tmp60101 = inst_60017;
var tmp60102 = inst_60016;
var tmp60103 = inst_60015;
var inst_60015__$1 = tmp60103;
var inst_60016__$1 = tmp60102;
var inst_60017__$1 = tmp60101;
var inst_60018__$1 = inst_60030;
var state_60073__$1 = (function (){var statearr_60108 = state_60073;
(statearr_60108[(19)] = inst_60017__$1);

(statearr_60108[(9)] = inst_60016__$1);

(statearr_60108[(20)] = inst_60015__$1);

(statearr_60108[(21)] = inst_60029);

(statearr_60108[(11)] = inst_60018__$1);

return statearr_60108;
})();
var statearr_60109_62194 = state_60073__$1;
(statearr_60109_62194[(2)] = null);

(statearr_60109_62194[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (40))){
var inst_60042 = (state_60073[(22)]);
var inst_60046 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_60042);
var state_60073__$1 = state_60073;
var statearr_60110_62195 = state_60073__$1;
(statearr_60110_62195[(2)] = inst_60046);

(statearr_60110_62195[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (33))){
var inst_60033 = (state_60073[(23)]);
var inst_60035 = cljs.core.chunked_seq_QMARK_(inst_60033);
var state_60073__$1 = state_60073;
if(inst_60035){
var statearr_60111_62196 = state_60073__$1;
(statearr_60111_62196[(1)] = (36));

} else {
var statearr_60112_62197 = state_60073__$1;
(statearr_60112_62197[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (13))){
var inst_59961 = (state_60073[(24)]);
var inst_59964 = cljs.core.async.close_BANG_(inst_59961);
var state_60073__$1 = state_60073;
var statearr_60113_62198 = state_60073__$1;
(statearr_60113_62198[(2)] = inst_59964);

(statearr_60113_62198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (22))){
var inst_59987 = (state_60073[(8)]);
var inst_59990 = cljs.core.async.close_BANG_(inst_59987);
var state_60073__$1 = state_60073;
var statearr_60114_62205 = state_60073__$1;
(statearr_60114_62205[(2)] = inst_59990);

(statearr_60114_62205[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (36))){
var inst_60033 = (state_60073[(23)]);
var inst_60037 = cljs.core.chunk_first(inst_60033);
var inst_60038 = cljs.core.chunk_rest(inst_60033);
var inst_60039 = cljs.core.count(inst_60037);
var inst_60015 = inst_60038;
var inst_60016 = inst_60037;
var inst_60017 = inst_60039;
var inst_60018 = (0);
var state_60073__$1 = (function (){var statearr_60115 = state_60073;
(statearr_60115[(19)] = inst_60017);

(statearr_60115[(9)] = inst_60016);

(statearr_60115[(20)] = inst_60015);

(statearr_60115[(11)] = inst_60018);

return statearr_60115;
})();
var statearr_60116_62206 = state_60073__$1;
(statearr_60116_62206[(2)] = null);

(statearr_60116_62206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (41))){
var inst_60033 = (state_60073[(23)]);
var inst_60048 = (state_60073[(2)]);
var inst_60049 = cljs.core.next(inst_60033);
var inst_60015 = inst_60049;
var inst_60016 = null;
var inst_60017 = (0);
var inst_60018 = (0);
var state_60073__$1 = (function (){var statearr_60120 = state_60073;
(statearr_60120[(19)] = inst_60017);

(statearr_60120[(9)] = inst_60016);

(statearr_60120[(20)] = inst_60015);

(statearr_60120[(25)] = inst_60048);

(statearr_60120[(11)] = inst_60018);

return statearr_60120;
})();
var statearr_60125_62209 = state_60073__$1;
(statearr_60125_62209[(2)] = null);

(statearr_60125_62209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (43))){
var state_60073__$1 = state_60073;
var statearr_60129_62210 = state_60073__$1;
(statearr_60129_62210[(2)] = null);

(statearr_60129_62210[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (29))){
var inst_60057 = (state_60073[(2)]);
var state_60073__$1 = state_60073;
var statearr_60130_62211 = state_60073__$1;
(statearr_60130_62211[(2)] = inst_60057);

(statearr_60130_62211[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (44))){
var inst_60066 = (state_60073[(2)]);
var state_60073__$1 = (function (){var statearr_60131 = state_60073;
(statearr_60131[(26)] = inst_60066);

return statearr_60131;
})();
var statearr_60135_62214 = state_60073__$1;
(statearr_60135_62214[(2)] = null);

(statearr_60135_62214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (6))){
var inst_60007 = (state_60073[(27)]);
var inst_60006 = cljs.core.deref(cs);
var inst_60007__$1 = cljs.core.keys(inst_60006);
var inst_60008 = cljs.core.count(inst_60007__$1);
var inst_60009 = cljs.core.reset_BANG_(dctr,inst_60008);
var inst_60014 = cljs.core.seq(inst_60007__$1);
var inst_60015 = inst_60014;
var inst_60016 = null;
var inst_60017 = (0);
var inst_60018 = (0);
var state_60073__$1 = (function (){var statearr_60136 = state_60073;
(statearr_60136[(19)] = inst_60017);

(statearr_60136[(9)] = inst_60016);

(statearr_60136[(20)] = inst_60015);

(statearr_60136[(27)] = inst_60007__$1);

(statearr_60136[(11)] = inst_60018);

(statearr_60136[(28)] = inst_60009);

return statearr_60136;
})();
var statearr_60137_62215 = state_60073__$1;
(statearr_60137_62215[(2)] = null);

(statearr_60137_62215[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (28))){
var inst_60015 = (state_60073[(20)]);
var inst_60033 = (state_60073[(23)]);
var inst_60033__$1 = cljs.core.seq(inst_60015);
var state_60073__$1 = (function (){var statearr_60138 = state_60073;
(statearr_60138[(23)] = inst_60033__$1);

return statearr_60138;
})();
if(inst_60033__$1){
var statearr_60139_62217 = state_60073__$1;
(statearr_60139_62217[(1)] = (33));

} else {
var statearr_60140_62218 = state_60073__$1;
(statearr_60140_62218[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (25))){
var inst_60017 = (state_60073[(19)]);
var inst_60018 = (state_60073[(11)]);
var inst_60020 = (inst_60018 < inst_60017);
var inst_60021 = inst_60020;
var state_60073__$1 = state_60073;
if(cljs.core.truth_(inst_60021)){
var statearr_60141_62219 = state_60073__$1;
(statearr_60141_62219[(1)] = (27));

} else {
var statearr_60142_62221 = state_60073__$1;
(statearr_60142_62221[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (34))){
var state_60073__$1 = state_60073;
var statearr_60143_62222 = state_60073__$1;
(statearr_60143_62222[(2)] = null);

(statearr_60143_62222[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (17))){
var state_60073__$1 = state_60073;
var statearr_60144_62223 = state_60073__$1;
(statearr_60144_62223[(2)] = null);

(statearr_60144_62223[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (3))){
var inst_60071 = (state_60073[(2)]);
var state_60073__$1 = state_60073;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60073__$1,inst_60071);
} else {
if((state_val_60074 === (12))){
var inst_60002 = (state_60073[(2)]);
var state_60073__$1 = state_60073;
var statearr_60146_62224 = state_60073__$1;
(statearr_60146_62224[(2)] = inst_60002);

(statearr_60146_62224[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (2))){
var state_60073__$1 = state_60073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60073__$1,(4),ch);
} else {
if((state_val_60074 === (23))){
var state_60073__$1 = state_60073;
var statearr_60150_62225 = state_60073__$1;
(statearr_60150_62225[(2)] = null);

(statearr_60150_62225[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (35))){
var inst_60055 = (state_60073[(2)]);
var state_60073__$1 = state_60073;
var statearr_60151_62232 = state_60073__$1;
(statearr_60151_62232[(2)] = inst_60055);

(statearr_60151_62232[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (19))){
var inst_59971 = (state_60073[(7)]);
var inst_59975 = cljs.core.chunk_first(inst_59971);
var inst_59976 = cljs.core.chunk_rest(inst_59971);
var inst_59977 = cljs.core.count(inst_59975);
var inst_59944 = inst_59976;
var inst_59945 = inst_59975;
var inst_59946 = inst_59977;
var inst_59947 = (0);
var state_60073__$1 = (function (){var statearr_60167 = state_60073;
(statearr_60167[(13)] = inst_59947);

(statearr_60167[(15)] = inst_59945);

(statearr_60167[(16)] = inst_59946);

(statearr_60167[(17)] = inst_59944);

return statearr_60167;
})();
var statearr_60168_62233 = state_60073__$1;
(statearr_60168_62233[(2)] = null);

(statearr_60168_62233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (11))){
var inst_59971 = (state_60073[(7)]);
var inst_59944 = (state_60073[(17)]);
var inst_59971__$1 = cljs.core.seq(inst_59944);
var state_60073__$1 = (function (){var statearr_60172 = state_60073;
(statearr_60172[(7)] = inst_59971__$1);

return statearr_60172;
})();
if(inst_59971__$1){
var statearr_60173_62234 = state_60073__$1;
(statearr_60173_62234[(1)] = (16));

} else {
var statearr_60174_62235 = state_60073__$1;
(statearr_60174_62235[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (9))){
var inst_60004 = (state_60073[(2)]);
var state_60073__$1 = state_60073;
var statearr_60175_62236 = state_60073__$1;
(statearr_60175_62236[(2)] = inst_60004);

(statearr_60175_62236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (5))){
var inst_59942 = cljs.core.deref(cs);
var inst_59943 = cljs.core.seq(inst_59942);
var inst_59944 = inst_59943;
var inst_59945 = null;
var inst_59946 = (0);
var inst_59947 = (0);
var state_60073__$1 = (function (){var statearr_60176 = state_60073;
(statearr_60176[(13)] = inst_59947);

(statearr_60176[(15)] = inst_59945);

(statearr_60176[(16)] = inst_59946);

(statearr_60176[(17)] = inst_59944);

return statearr_60176;
})();
var statearr_60177_62237 = state_60073__$1;
(statearr_60177_62237[(2)] = null);

(statearr_60177_62237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (14))){
var state_60073__$1 = state_60073;
var statearr_60182_62238 = state_60073__$1;
(statearr_60182_62238[(2)] = null);

(statearr_60182_62238[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (45))){
var inst_60063 = (state_60073[(2)]);
var state_60073__$1 = state_60073;
var statearr_60183_62241 = state_60073__$1;
(statearr_60183_62241[(2)] = inst_60063);

(statearr_60183_62241[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (26))){
var inst_60007 = (state_60073[(27)]);
var inst_60059 = (state_60073[(2)]);
var inst_60060 = cljs.core.seq(inst_60007);
var state_60073__$1 = (function (){var statearr_60187 = state_60073;
(statearr_60187[(29)] = inst_60059);

return statearr_60187;
})();
if(inst_60060){
var statearr_60188_62243 = state_60073__$1;
(statearr_60188_62243[(1)] = (42));

} else {
var statearr_60189_62244 = state_60073__$1;
(statearr_60189_62244[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (16))){
var inst_59971 = (state_60073[(7)]);
var inst_59973 = cljs.core.chunked_seq_QMARK_(inst_59971);
var state_60073__$1 = state_60073;
if(inst_59973){
var statearr_60190_62245 = state_60073__$1;
(statearr_60190_62245[(1)] = (19));

} else {
var statearr_60191_62246 = state_60073__$1;
(statearr_60191_62246[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (38))){
var inst_60052 = (state_60073[(2)]);
var state_60073__$1 = state_60073;
var statearr_60192_62248 = state_60073__$1;
(statearr_60192_62248[(2)] = inst_60052);

(statearr_60192_62248[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (30))){
var state_60073__$1 = state_60073;
var statearr_60193_62250 = state_60073__$1;
(statearr_60193_62250[(2)] = null);

(statearr_60193_62250[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (10))){
var inst_59947 = (state_60073[(13)]);
var inst_59945 = (state_60073[(15)]);
var inst_59960 = cljs.core._nth(inst_59945,inst_59947);
var inst_59961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59960,(0),null);
var inst_59962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59960,(1),null);
var state_60073__$1 = (function (){var statearr_60197 = state_60073;
(statearr_60197[(24)] = inst_59961);

return statearr_60197;
})();
if(cljs.core.truth_(inst_59962)){
var statearr_60198_62252 = state_60073__$1;
(statearr_60198_62252[(1)] = (13));

} else {
var statearr_60199_62254 = state_60073__$1;
(statearr_60199_62254[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (18))){
var inst_60000 = (state_60073[(2)]);
var state_60073__$1 = state_60073;
var statearr_60200_62255 = state_60073__$1;
(statearr_60200_62255[(2)] = inst_60000);

(statearr_60200_62255[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (42))){
var state_60073__$1 = state_60073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60073__$1,(45),dchan);
} else {
if((state_val_60074 === (37))){
var inst_59935 = (state_60073[(10)]);
var inst_60033 = (state_60073[(23)]);
var inst_60042 = (state_60073[(22)]);
var inst_60042__$1 = cljs.core.first(inst_60033);
var inst_60043 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_60042__$1,inst_59935,done);
var state_60073__$1 = (function (){var statearr_60201 = state_60073;
(statearr_60201[(22)] = inst_60042__$1);

return statearr_60201;
})();
if(cljs.core.truth_(inst_60043)){
var statearr_60202_62258 = state_60073__$1;
(statearr_60202_62258[(1)] = (39));

} else {
var statearr_60205_62265 = state_60073__$1;
(statearr_60205_62265[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60074 === (8))){
var inst_59947 = (state_60073[(13)]);
var inst_59946 = (state_60073[(16)]);
var inst_59954 = (inst_59947 < inst_59946);
var inst_59955 = inst_59954;
var state_60073__$1 = state_60073;
if(cljs.core.truth_(inst_59955)){
var statearr_60207_62268 = state_60073__$1;
(statearr_60207_62268[(1)] = (10));

} else {
var statearr_60208_62269 = state_60073__$1;
(statearr_60208_62269[(1)] = (11));

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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__58890__auto__ = null;
var cljs$core$async$mult_$_state_machine__58890__auto____0 = (function (){
var statearr_60209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60209[(0)] = cljs$core$async$mult_$_state_machine__58890__auto__);

(statearr_60209[(1)] = (1));

return statearr_60209;
});
var cljs$core$async$mult_$_state_machine__58890__auto____1 = (function (state_60073){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_60073);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e60216){var ex__58893__auto__ = e60216;
var statearr_60217_62270 = state_60073;
(statearr_60217_62270[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_60073[(4)]))){
var statearr_60218_62271 = state_60073;
(statearr_60218_62271[(1)] = cljs.core.first((state_60073[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62272 = state_60073;
state_60073 = G__62272;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__58890__auto__ = function(state_60073){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__58890__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__58890__auto____1.call(this,state_60073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__58890__auto____0;
cljs$core$async$mult_$_state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__58890__auto____1;
return cljs$core$async$mult_$_state_machine__58890__auto__;
})()
})();
var state__59004__auto__ = (function (){var statearr_60219 = f__59003__auto__();
(statearr_60219[(6)] = c__59002__auto___62153);

return statearr_60219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__60221 = arguments.length;
switch (G__60221) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_62274 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_62274(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_62275 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_62275(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_62276 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_62276(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_62277 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null,m,state_map));
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5389__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_62277(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_62279 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null,m,mode));
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5389__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_62279(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___62281 = arguments.length;
var i__5767__auto___62282 = (0);
while(true){
if((i__5767__auto___62282 < len__5766__auto___62281)){
args__5772__auto__.push((arguments[i__5767__auto___62282]));

var G__62283 = (i__5767__auto___62282 + (1));
i__5767__auto___62282 = G__62283;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__60273){
var map__60274 = p__60273;
var map__60274__$1 = cljs.core.__destructure_map(map__60274);
var opts = map__60274__$1;
var statearr_60275_62285 = state;
(statearr_60275_62285[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_60276_62286 = state;
(statearr_60276_62286[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_60277_62287 = state;
(statearr_60277_62287[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq60256){
var G__60269 = cljs.core.first(seq60256);
var seq60256__$1 = cljs.core.next(seq60256);
var G__60270 = cljs.core.first(seq60256__$1);
var seq60256__$2 = cljs.core.next(seq60256__$1);
var G__60271 = cljs.core.first(seq60256__$2);
var seq60256__$3 = cljs.core.next(seq60256__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60269,G__60270,G__60271,seq60256__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60278 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta60279){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta60279 = meta60279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60280,meta60279__$1){
var self__ = this;
var _60280__$1 = this;
return (new cljs.core.async.t_cljs$core$async60278(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta60279__$1));
}));

(cljs.core.async.t_cljs$core$async60278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60280){
var self__ = this;
var _60280__$1 = this;
return self__.meta60279;
}));

(cljs.core.async.t_cljs$core$async60278.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60278.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async60278.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60278.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async60278.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async60278.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async60278.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async60278.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async60278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta60279","meta60279",126685592,null)], null);
}));

(cljs.core.async.t_cljs$core$async60278.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60278");

(cljs.core.async.t_cljs$core$async60278.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async60278");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60278.
 */
cljs.core.async.__GT_t_cljs$core$async60278 = (function cljs$core$async$mix_$___GT_t_cljs$core$async60278(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta60279){
return (new cljs.core.async.t_cljs$core$async60278(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta60279));
});

}

return (new cljs.core.async.t_cljs$core$async60278(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__59002__auto___62292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = (function (state_60355){
var state_val_60356 = (state_60355[(1)]);
if((state_val_60356 === (7))){
var inst_60315 = (state_60355[(2)]);
var state_60355__$1 = state_60355;
if(cljs.core.truth_(inst_60315)){
var statearr_60357_62293 = state_60355__$1;
(statearr_60357_62293[(1)] = (8));

} else {
var statearr_60358_62294 = state_60355__$1;
(statearr_60358_62294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60356 === (20))){
var inst_60308 = (state_60355[(7)]);
var state_60355__$1 = state_60355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60355__$1,(23),out,inst_60308);
} else {
if((state_val_60356 === (1))){
var inst_60291 = calc_state();
var inst_60292 = cljs.core.__destructure_map(inst_60291);
var inst_60293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60292,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_60294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60292,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_60295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60292,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_60296 = inst_60291;
var state_60355__$1 = (function (){var statearr_60360 = state_60355;
(statearr_60360[(8)] = inst_60296);

(statearr_60360[(9)] = inst_60293);

(statearr_60360[(10)] = inst_60294);

(statearr_60360[(11)] = inst_60295);

return statearr_60360;
})();
var statearr_60361_62296 = state_60355__$1;
(statearr_60361_62296[(2)] = null);

(statearr_60361_62296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60356 === (24))){
var inst_60299 = (state_60355[(12)]);
var inst_60296 = inst_60299;
var state_60355__$1 = (function (){var statearr_60363 = state_60355;
(statearr_60363[(8)] = inst_60296);

return statearr_60363;
})();
var statearr_60364_62297 = state_60355__$1;
(statearr_60364_62297[(2)] = null);

(statearr_60364_62297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60356 === (4))){
var inst_60310 = (state_60355[(13)]);
var inst_60308 = (state_60355[(7)]);
var inst_60307 = (state_60355[(2)]);
var inst_60308__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60307,(0),null);
var inst_60309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60307,(1),null);
var inst_60310__$1 = (inst_60308__$1 == null);
var state_60355__$1 = (function (){var statearr_60365 = state_60355;
(statearr_60365[(13)] = inst_60310__$1);

(statearr_60365[(7)] = inst_60308__$1);

(statearr_60365[(14)] = inst_60309);

return statearr_60365;
})();
if(cljs.core.truth_(inst_60310__$1)){
var statearr_60366_62298 = state_60355__$1;
(statearr_60366_62298[(1)] = (5));

} else {
var statearr_60367_62299 = state_60355__$1;
(statearr_60367_62299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60356 === (15))){
var inst_60329 = (state_60355[(15)]);
var inst_60300 = (state_60355[(16)]);
var inst_60329__$1 = cljs.core.empty_QMARK_(inst_60300);
var state_60355__$1 = (function (){var statearr_60368 = state_60355;
(statearr_60368[(15)] = inst_60329__$1);

return statearr_60368;
})();
if(inst_60329__$1){
var statearr_60369_62303 = state_60355__$1;
(statearr_60369_62303[(1)] = (17));

} else {
var statearr_60370_62309 = state_60355__$1;
(statearr_60370_62309[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60356 === (21))){
var inst_60299 = (state_60355[(12)]);
var inst_60296 = inst_60299;
var state_60355__$1 = (function (){var statearr_60371 = state_60355;
(statearr_60371[(8)] = inst_60296);

return statearr_60371;
})();
var statearr_60372_62310 = state_60355__$1;
(statearr_60372_62310[(2)] = null);

(statearr_60372_62310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60356 === (13))){
var inst_60322 = (state_60355[(2)]);
var inst_60323 = calc_state();
var inst_60296 = inst_60323;
var state_60355__$1 = (function (){var statearr_60373 = state_60355;
(statearr_60373[(8)] = inst_60296);

(statearr_60373[(17)] = inst_60322);

return statearr_60373;
})();
var statearr_60374_62311 = state_60355__$1;
(statearr_60374_62311[(2)] = null);

(statearr_60374_62311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60356 === (22))){
var inst_60349 = (state_60355[(2)]);
var state_60355__$1 = state_60355;
var statearr_60375_62312 = state_60355__$1;
(statearr_60375_62312[(2)] = inst_60349);

(statearr_60375_62312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60356 === (6))){
var inst_60309 = (state_60355[(14)]);
var inst_60313 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60309,change);
var state_60355__$1 = state_60355;
var statearr_60376_62313 = state_60355__$1;
(statearr_60376_62313[(2)] = inst_60313);

(statearr_60376_62313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60356 === (25))){
var state_60355__$1 = state_60355;
var statearr_60377_62314 = state_60355__$1;
(statearr_60377_62314[(2)] = null);

(statearr_60377_62314[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60356 === (17))){
var inst_60301 = (state_60355[(18)]);
var inst_60309 = (state_60355[(14)]);
var inst_60331 = (inst_60301.cljs$core$IFn$_invoke$arity$1 ? inst_60301.cljs$core$IFn$_invoke$arity$1(inst_60309) : inst_60301.call(null,inst_60309));
var inst_60332 = cljs.core.not(inst_60331);
var state_60355__$1 = state_60355;
var statearr_60378_62315 = state_60355__$1;
(statearr_60378_62315[(2)] = inst_60332);

(statearr_60378_62315[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60356 === (3))){
var inst_60353 = (state_60355[(2)]);
var state_60355__$1 = state_60355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60355__$1,inst_60353);
} else {
if((state_val_60356 === (12))){
var state_60355__$1 = state_60355;
var statearr_60382_62316 = state_60355__$1;
(statearr_60382_62316[(2)] = null);

(statearr_60382_62316[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60356 === (2))){
var inst_60296 = (state_60355[(8)]);
var inst_60299 = (state_60355[(12)]);
var inst_60299__$1 = cljs.core.__destructure_map(inst_60296);
var inst_60300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60299__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_60301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60299__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_60302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60299__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_60355__$1 = (function (){var statearr_60384 = state_60355;
(statearr_60384[(12)] = inst_60299__$1);

(statearr_60384[(18)] = inst_60301);

(statearr_60384[(16)] = inst_60300);

return statearr_60384;
})();
return cljs.core.async.ioc_alts_BANG_(state_60355__$1,(4),inst_60302);
} else {
if((state_val_60356 === (23))){
var inst_60340 = (state_60355[(2)]);
var state_60355__$1 = state_60355;
if(cljs.core.truth_(inst_60340)){
var statearr_60385_62317 = state_60355__$1;
(statearr_60385_62317[(1)] = (24));

} else {
var statearr_60386_62318 = state_60355__$1;
(statearr_60386_62318[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60356 === (19))){
var inst_60335 = (state_60355[(2)]);
var state_60355__$1 = state_60355;
var statearr_60387_62319 = state_60355__$1;
(statearr_60387_62319[(2)] = inst_60335);

(statearr_60387_62319[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60356 === (11))){
var inst_60309 = (state_60355[(14)]);
var inst_60319 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_60309);
var state_60355__$1 = state_60355;
var statearr_60388_62320 = state_60355__$1;
(statearr_60388_62320[(2)] = inst_60319);

(statearr_60388_62320[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60356 === (9))){
var inst_60309 = (state_60355[(14)]);
var inst_60300 = (state_60355[(16)]);
var inst_60326 = (state_60355[(19)]);
var inst_60326__$1 = (inst_60300.cljs$core$IFn$_invoke$arity$1 ? inst_60300.cljs$core$IFn$_invoke$arity$1(inst_60309) : inst_60300.call(null,inst_60309));
var state_60355__$1 = (function (){var statearr_60389 = state_60355;
(statearr_60389[(19)] = inst_60326__$1);

return statearr_60389;
})();
if(cljs.core.truth_(inst_60326__$1)){
var statearr_60392_62323 = state_60355__$1;
(statearr_60392_62323[(1)] = (14));

} else {
var statearr_60393_62324 = state_60355__$1;
(statearr_60393_62324[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60356 === (5))){
var inst_60310 = (state_60355[(13)]);
var state_60355__$1 = state_60355;
var statearr_60396_62325 = state_60355__$1;
(statearr_60396_62325[(2)] = inst_60310);

(statearr_60396_62325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60356 === (14))){
var inst_60326 = (state_60355[(19)]);
var state_60355__$1 = state_60355;
var statearr_60397_62326 = state_60355__$1;
(statearr_60397_62326[(2)] = inst_60326);

(statearr_60397_62326[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60356 === (26))){
var inst_60345 = (state_60355[(2)]);
var state_60355__$1 = state_60355;
var statearr_60402_62331 = state_60355__$1;
(statearr_60402_62331[(2)] = inst_60345);

(statearr_60402_62331[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60356 === (16))){
var inst_60337 = (state_60355[(2)]);
var state_60355__$1 = state_60355;
if(cljs.core.truth_(inst_60337)){
var statearr_60404_62332 = state_60355__$1;
(statearr_60404_62332[(1)] = (20));

} else {
var statearr_60405_62333 = state_60355__$1;
(statearr_60405_62333[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60356 === (10))){
var inst_60351 = (state_60355[(2)]);
var state_60355__$1 = state_60355;
var statearr_60406_62334 = state_60355__$1;
(statearr_60406_62334[(2)] = inst_60351);

(statearr_60406_62334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60356 === (18))){
var inst_60329 = (state_60355[(15)]);
var state_60355__$1 = state_60355;
var statearr_60407_62335 = state_60355__$1;
(statearr_60407_62335[(2)] = inst_60329);

(statearr_60407_62335[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60356 === (8))){
var inst_60308 = (state_60355[(7)]);
var inst_60317 = (inst_60308 == null);
var state_60355__$1 = state_60355;
if(cljs.core.truth_(inst_60317)){
var statearr_60411_62336 = state_60355__$1;
(statearr_60411_62336[(1)] = (11));

} else {
var statearr_60412_62337 = state_60355__$1;
(statearr_60412_62337[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__58890__auto__ = null;
var cljs$core$async$mix_$_state_machine__58890__auto____0 = (function (){
var statearr_60416 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60416[(0)] = cljs$core$async$mix_$_state_machine__58890__auto__);

(statearr_60416[(1)] = (1));

return statearr_60416;
});
var cljs$core$async$mix_$_state_machine__58890__auto____1 = (function (state_60355){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_60355);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e60418){var ex__58893__auto__ = e60418;
var statearr_60419_62338 = state_60355;
(statearr_60419_62338[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_60355[(4)]))){
var statearr_60420_62339 = state_60355;
(statearr_60420_62339[(1)] = cljs.core.first((state_60355[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62340 = state_60355;
state_60355 = G__62340;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__58890__auto__ = function(state_60355){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__58890__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__58890__auto____1.call(this,state_60355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__58890__auto____0;
cljs$core$async$mix_$_state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__58890__auto____1;
return cljs$core$async$mix_$_state_machine__58890__auto__;
})()
})();
var state__59004__auto__ = (function (){var statearr_60421 = f__59003__auto__();
(statearr_60421[(6)] = c__59002__auto___62292);

return statearr_60421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_62341 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5389__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_62341(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_62347 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null,p,v,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5389__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_62347(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_62348 = (function() {
var G__62349 = null;
var G__62349__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null,p));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5389__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__62349__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null,p,v));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5389__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__62349 = function(p,v){
switch(arguments.length){
case 1:
return G__62349__1.call(this,p);
case 2:
return G__62349__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62349.cljs$core$IFn$_invoke$arity$1 = G__62349__1;
G__62349.cljs$core$IFn$_invoke$arity$2 = G__62349__2;
return G__62349;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__60444 = arguments.length;
switch (G__60444) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_62348(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_62348(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__60448 = arguments.length;
switch (G__60448) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__60446_SHARP_){
if(cljs.core.truth_((p1__60446_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__60446_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__60446_SHARP_.call(null,topic)))){
return p1__60446_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60446_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60451 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60451 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta60452){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta60452 = meta60452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60453,meta60452__$1){
var self__ = this;
var _60453__$1 = this;
return (new cljs.core.async.t_cljs$core$async60451(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta60452__$1));
}));

(cljs.core.async.t_cljs$core$async60451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60453){
var self__ = this;
var _60453__$1 = this;
return self__.meta60452;
}));

(cljs.core.async.t_cljs$core$async60451.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60451.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async60451.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60451.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async60451.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async60451.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async60451.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async60451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta60452","meta60452",395252226,null)], null);
}));

(cljs.core.async.t_cljs$core$async60451.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60451.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60451");

(cljs.core.async.t_cljs$core$async60451.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async60451");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60451.
 */
cljs.core.async.__GT_t_cljs$core$async60451 = (function cljs$core$async$__GT_t_cljs$core$async60451(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta60452){
return (new cljs.core.async.t_cljs$core$async60451(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta60452));
});

}

return (new cljs.core.async.t_cljs$core$async60451(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__59002__auto___62355 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = (function (state_60531){
var state_val_60532 = (state_60531[(1)]);
if((state_val_60532 === (7))){
var inst_60527 = (state_60531[(2)]);
var state_60531__$1 = state_60531;
var statearr_60533_62356 = state_60531__$1;
(statearr_60533_62356[(2)] = inst_60527);

(statearr_60533_62356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60532 === (20))){
var state_60531__$1 = state_60531;
var statearr_60534_62361 = state_60531__$1;
(statearr_60534_62361[(2)] = null);

(statearr_60534_62361[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60532 === (1))){
var state_60531__$1 = state_60531;
var statearr_60535_62362 = state_60531__$1;
(statearr_60535_62362[(2)] = null);

(statearr_60535_62362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60532 === (24))){
var inst_60510 = (state_60531[(7)]);
var inst_60519 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_60510);
var state_60531__$1 = state_60531;
var statearr_60536_62363 = state_60531__$1;
(statearr_60536_62363[(2)] = inst_60519);

(statearr_60536_62363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60532 === (4))){
var inst_60462 = (state_60531[(8)]);
var inst_60462__$1 = (state_60531[(2)]);
var inst_60463 = (inst_60462__$1 == null);
var state_60531__$1 = (function (){var statearr_60537 = state_60531;
(statearr_60537[(8)] = inst_60462__$1);

return statearr_60537;
})();
if(cljs.core.truth_(inst_60463)){
var statearr_60538_62364 = state_60531__$1;
(statearr_60538_62364[(1)] = (5));

} else {
var statearr_60539_62365 = state_60531__$1;
(statearr_60539_62365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60532 === (15))){
var inst_60504 = (state_60531[(2)]);
var state_60531__$1 = state_60531;
var statearr_60540_62366 = state_60531__$1;
(statearr_60540_62366[(2)] = inst_60504);

(statearr_60540_62366[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60532 === (21))){
var inst_60524 = (state_60531[(2)]);
var state_60531__$1 = (function (){var statearr_60541 = state_60531;
(statearr_60541[(9)] = inst_60524);

return statearr_60541;
})();
var statearr_60542_62367 = state_60531__$1;
(statearr_60542_62367[(2)] = null);

(statearr_60542_62367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60532 === (13))){
var inst_60486 = (state_60531[(10)]);
var inst_60488 = cljs.core.chunked_seq_QMARK_(inst_60486);
var state_60531__$1 = state_60531;
if(inst_60488){
var statearr_60544_62368 = state_60531__$1;
(statearr_60544_62368[(1)] = (16));

} else {
var statearr_60545_62369 = state_60531__$1;
(statearr_60545_62369[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60532 === (22))){
var inst_60516 = (state_60531[(2)]);
var state_60531__$1 = state_60531;
if(cljs.core.truth_(inst_60516)){
var statearr_60546_62381 = state_60531__$1;
(statearr_60546_62381[(1)] = (23));

} else {
var statearr_60547_62382 = state_60531__$1;
(statearr_60547_62382[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60532 === (6))){
var inst_60510 = (state_60531[(7)]);
var inst_60512 = (state_60531[(11)]);
var inst_60462 = (state_60531[(8)]);
var inst_60510__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_60462) : topic_fn.call(null,inst_60462));
var inst_60511 = cljs.core.deref(mults);
var inst_60512__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60511,inst_60510__$1);
var state_60531__$1 = (function (){var statearr_60548 = state_60531;
(statearr_60548[(7)] = inst_60510__$1);

(statearr_60548[(11)] = inst_60512__$1);

return statearr_60548;
})();
if(cljs.core.truth_(inst_60512__$1)){
var statearr_60549_62386 = state_60531__$1;
(statearr_60549_62386[(1)] = (19));

} else {
var statearr_60550_62387 = state_60531__$1;
(statearr_60550_62387[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60532 === (25))){
var inst_60521 = (state_60531[(2)]);
var state_60531__$1 = state_60531;
var statearr_60551_62388 = state_60531__$1;
(statearr_60551_62388[(2)] = inst_60521);

(statearr_60551_62388[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60532 === (17))){
var inst_60486 = (state_60531[(10)]);
var inst_60495 = cljs.core.first(inst_60486);
var inst_60496 = cljs.core.async.muxch_STAR_(inst_60495);
var inst_60497 = cljs.core.async.close_BANG_(inst_60496);
var inst_60498 = cljs.core.next(inst_60486);
var inst_60472 = inst_60498;
var inst_60473 = null;
var inst_60474 = (0);
var inst_60475 = (0);
var state_60531__$1 = (function (){var statearr_60552 = state_60531;
(statearr_60552[(12)] = inst_60475);

(statearr_60552[(13)] = inst_60472);

(statearr_60552[(14)] = inst_60473);

(statearr_60552[(15)] = inst_60497);

(statearr_60552[(16)] = inst_60474);

return statearr_60552;
})();
var statearr_60553_62392 = state_60531__$1;
(statearr_60553_62392[(2)] = null);

(statearr_60553_62392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60532 === (3))){
var inst_60529 = (state_60531[(2)]);
var state_60531__$1 = state_60531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60531__$1,inst_60529);
} else {
if((state_val_60532 === (12))){
var inst_60506 = (state_60531[(2)]);
var state_60531__$1 = state_60531;
var statearr_60554_62393 = state_60531__$1;
(statearr_60554_62393[(2)] = inst_60506);

(statearr_60554_62393[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60532 === (2))){
var state_60531__$1 = state_60531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60531__$1,(4),ch);
} else {
if((state_val_60532 === (23))){
var state_60531__$1 = state_60531;
var statearr_60555_62395 = state_60531__$1;
(statearr_60555_62395[(2)] = null);

(statearr_60555_62395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60532 === (19))){
var inst_60512 = (state_60531[(11)]);
var inst_60462 = (state_60531[(8)]);
var inst_60514 = cljs.core.async.muxch_STAR_(inst_60512);
var state_60531__$1 = state_60531;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60531__$1,(22),inst_60514,inst_60462);
} else {
if((state_val_60532 === (11))){
var inst_60486 = (state_60531[(10)]);
var inst_60472 = (state_60531[(13)]);
var inst_60486__$1 = cljs.core.seq(inst_60472);
var state_60531__$1 = (function (){var statearr_60556 = state_60531;
(statearr_60556[(10)] = inst_60486__$1);

return statearr_60556;
})();
if(inst_60486__$1){
var statearr_60557_62399 = state_60531__$1;
(statearr_60557_62399[(1)] = (13));

} else {
var statearr_60558_62400 = state_60531__$1;
(statearr_60558_62400[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60532 === (9))){
var inst_60508 = (state_60531[(2)]);
var state_60531__$1 = state_60531;
var statearr_60564_62401 = state_60531__$1;
(statearr_60564_62401[(2)] = inst_60508);

(statearr_60564_62401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60532 === (5))){
var inst_60469 = cljs.core.deref(mults);
var inst_60470 = cljs.core.vals(inst_60469);
var inst_60471 = cljs.core.seq(inst_60470);
var inst_60472 = inst_60471;
var inst_60473 = null;
var inst_60474 = (0);
var inst_60475 = (0);
var state_60531__$1 = (function (){var statearr_60565 = state_60531;
(statearr_60565[(12)] = inst_60475);

(statearr_60565[(13)] = inst_60472);

(statearr_60565[(14)] = inst_60473);

(statearr_60565[(16)] = inst_60474);

return statearr_60565;
})();
var statearr_60566_62402 = state_60531__$1;
(statearr_60566_62402[(2)] = null);

(statearr_60566_62402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60532 === (14))){
var state_60531__$1 = state_60531;
var statearr_60574_62403 = state_60531__$1;
(statearr_60574_62403[(2)] = null);

(statearr_60574_62403[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60532 === (16))){
var inst_60486 = (state_60531[(10)]);
var inst_60490 = cljs.core.chunk_first(inst_60486);
var inst_60491 = cljs.core.chunk_rest(inst_60486);
var inst_60492 = cljs.core.count(inst_60490);
var inst_60472 = inst_60491;
var inst_60473 = inst_60490;
var inst_60474 = inst_60492;
var inst_60475 = (0);
var state_60531__$1 = (function (){var statearr_60579 = state_60531;
(statearr_60579[(12)] = inst_60475);

(statearr_60579[(13)] = inst_60472);

(statearr_60579[(14)] = inst_60473);

(statearr_60579[(16)] = inst_60474);

return statearr_60579;
})();
var statearr_60580_62404 = state_60531__$1;
(statearr_60580_62404[(2)] = null);

(statearr_60580_62404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60532 === (10))){
var inst_60475 = (state_60531[(12)]);
var inst_60472 = (state_60531[(13)]);
var inst_60473 = (state_60531[(14)]);
var inst_60474 = (state_60531[(16)]);
var inst_60480 = cljs.core._nth(inst_60473,inst_60475);
var inst_60481 = cljs.core.async.muxch_STAR_(inst_60480);
var inst_60482 = cljs.core.async.close_BANG_(inst_60481);
var inst_60483 = (inst_60475 + (1));
var tmp60571 = inst_60472;
var tmp60572 = inst_60473;
var tmp60573 = inst_60474;
var inst_60472__$1 = tmp60571;
var inst_60473__$1 = tmp60572;
var inst_60474__$1 = tmp60573;
var inst_60475__$1 = inst_60483;
var state_60531__$1 = (function (){var statearr_60581 = state_60531;
(statearr_60581[(12)] = inst_60475__$1);

(statearr_60581[(13)] = inst_60472__$1);

(statearr_60581[(14)] = inst_60473__$1);

(statearr_60581[(16)] = inst_60474__$1);

(statearr_60581[(17)] = inst_60482);

return statearr_60581;
})();
var statearr_60582_62409 = state_60531__$1;
(statearr_60582_62409[(2)] = null);

(statearr_60582_62409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60532 === (18))){
var inst_60501 = (state_60531[(2)]);
var state_60531__$1 = state_60531;
var statearr_60583_62410 = state_60531__$1;
(statearr_60583_62410[(2)] = inst_60501);

(statearr_60583_62410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60532 === (8))){
var inst_60475 = (state_60531[(12)]);
var inst_60474 = (state_60531[(16)]);
var inst_60477 = (inst_60475 < inst_60474);
var inst_60478 = inst_60477;
var state_60531__$1 = state_60531;
if(cljs.core.truth_(inst_60478)){
var statearr_60584_62411 = state_60531__$1;
(statearr_60584_62411[(1)] = (10));

} else {
var statearr_60585_62412 = state_60531__$1;
(statearr_60585_62412[(1)] = (11));

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
var cljs$core$async$state_machine__58890__auto__ = null;
var cljs$core$async$state_machine__58890__auto____0 = (function (){
var statearr_60586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60586[(0)] = cljs$core$async$state_machine__58890__auto__);

(statearr_60586[(1)] = (1));

return statearr_60586;
});
var cljs$core$async$state_machine__58890__auto____1 = (function (state_60531){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_60531);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e60587){var ex__58893__auto__ = e60587;
var statearr_60588_62413 = state_60531;
(statearr_60588_62413[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_60531[(4)]))){
var statearr_60589_62414 = state_60531;
(statearr_60589_62414[(1)] = cljs.core.first((state_60531[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62415 = state_60531;
state_60531 = G__62415;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
cljs$core$async$state_machine__58890__auto__ = function(state_60531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58890__auto____1.call(this,state_60531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58890__auto____0;
cljs$core$async$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58890__auto____1;
return cljs$core$async$state_machine__58890__auto__;
})()
})();
var state__59004__auto__ = (function (){var statearr_60590 = f__59003__auto__();
(statearr_60590[(6)] = c__59002__auto___62355);

return statearr_60590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__60592 = arguments.length;
switch (G__60592) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__60594 = arguments.length;
switch (G__60594) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__60596 = arguments.length;
switch (G__60596) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__59002__auto___62427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = (function (state_60639){
var state_val_60640 = (state_60639[(1)]);
if((state_val_60640 === (7))){
var state_60639__$1 = state_60639;
var statearr_60641_62429 = state_60639__$1;
(statearr_60641_62429[(2)] = null);

(statearr_60641_62429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60640 === (1))){
var state_60639__$1 = state_60639;
var statearr_60642_62430 = state_60639__$1;
(statearr_60642_62430[(2)] = null);

(statearr_60642_62430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60640 === (4))){
var inst_60600 = (state_60639[(7)]);
var inst_60599 = (state_60639[(8)]);
var inst_60602 = (inst_60600 < inst_60599);
var state_60639__$1 = state_60639;
if(cljs.core.truth_(inst_60602)){
var statearr_60643_62431 = state_60639__$1;
(statearr_60643_62431[(1)] = (6));

} else {
var statearr_60644_62432 = state_60639__$1;
(statearr_60644_62432[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60640 === (15))){
var inst_60625 = (state_60639[(9)]);
var inst_60630 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_60625);
var state_60639__$1 = state_60639;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60639__$1,(17),out,inst_60630);
} else {
if((state_val_60640 === (13))){
var inst_60625 = (state_60639[(9)]);
var inst_60625__$1 = (state_60639[(2)]);
var inst_60626 = cljs.core.some(cljs.core.nil_QMARK_,inst_60625__$1);
var state_60639__$1 = (function (){var statearr_60645 = state_60639;
(statearr_60645[(9)] = inst_60625__$1);

return statearr_60645;
})();
if(cljs.core.truth_(inst_60626)){
var statearr_60646_62433 = state_60639__$1;
(statearr_60646_62433[(1)] = (14));

} else {
var statearr_60647_62434 = state_60639__$1;
(statearr_60647_62434[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60640 === (6))){
var state_60639__$1 = state_60639;
var statearr_60648_62435 = state_60639__$1;
(statearr_60648_62435[(2)] = null);

(statearr_60648_62435[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60640 === (17))){
var inst_60632 = (state_60639[(2)]);
var state_60639__$1 = (function (){var statearr_60654 = state_60639;
(statearr_60654[(10)] = inst_60632);

return statearr_60654;
})();
var statearr_60656_62436 = state_60639__$1;
(statearr_60656_62436[(2)] = null);

(statearr_60656_62436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60640 === (3))){
var inst_60637 = (state_60639[(2)]);
var state_60639__$1 = state_60639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60639__$1,inst_60637);
} else {
if((state_val_60640 === (12))){
var _ = (function (){var statearr_60687 = state_60639;
(statearr_60687[(4)] = cljs.core.rest((state_60639[(4)])));

return statearr_60687;
})();
var state_60639__$1 = state_60639;
var ex60652 = (state_60639__$1[(2)]);
var statearr_60688_62437 = state_60639__$1;
(statearr_60688_62437[(5)] = ex60652);


if((ex60652 instanceof Object)){
var statearr_60701_62438 = state_60639__$1;
(statearr_60701_62438[(1)] = (11));

(statearr_60701_62438[(5)] = null);

} else {
throw ex60652;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60640 === (2))){
var inst_60598 = cljs.core.reset_BANG_(dctr,cnt);
var inst_60599 = cnt;
var inst_60600 = (0);
var state_60639__$1 = (function (){var statearr_60725 = state_60639;
(statearr_60725[(7)] = inst_60600);

(statearr_60725[(8)] = inst_60599);

(statearr_60725[(11)] = inst_60598);

return statearr_60725;
})();
var statearr_60788_62440 = state_60639__$1;
(statearr_60788_62440[(2)] = null);

(statearr_60788_62440[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60640 === (11))){
var inst_60604 = (state_60639[(2)]);
var inst_60605 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_60639__$1 = (function (){var statearr_60807 = state_60639;
(statearr_60807[(12)] = inst_60604);

return statearr_60807;
})();
var statearr_60808_62441 = state_60639__$1;
(statearr_60808_62441[(2)] = inst_60605);

(statearr_60808_62441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60640 === (9))){
var inst_60600 = (state_60639[(7)]);
var _ = (function (){var statearr_60809 = state_60639;
(statearr_60809[(4)] = cljs.core.cons((12),(state_60639[(4)])));

return statearr_60809;
})();
var inst_60611 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_60600) : chs__$1.call(null,inst_60600));
var inst_60612 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_60600) : done.call(null,inst_60600));
var inst_60613 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_60611,inst_60612);
var ___$1 = (function (){var statearr_60820 = state_60639;
(statearr_60820[(4)] = cljs.core.rest((state_60639[(4)])));

return statearr_60820;
})();
var state_60639__$1 = state_60639;
var statearr_60821_62442 = state_60639__$1;
(statearr_60821_62442[(2)] = inst_60613);

(statearr_60821_62442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60640 === (5))){
var inst_60623 = (state_60639[(2)]);
var state_60639__$1 = (function (){var statearr_60832 = state_60639;
(statearr_60832[(13)] = inst_60623);

return statearr_60832;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60639__$1,(13),dchan);
} else {
if((state_val_60640 === (14))){
var inst_60628 = cljs.core.async.close_BANG_(out);
var state_60639__$1 = state_60639;
var statearr_60833_62444 = state_60639__$1;
(statearr_60833_62444[(2)] = inst_60628);

(statearr_60833_62444[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60640 === (16))){
var inst_60635 = (state_60639[(2)]);
var state_60639__$1 = state_60639;
var statearr_60834_62448 = state_60639__$1;
(statearr_60834_62448[(2)] = inst_60635);

(statearr_60834_62448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60640 === (10))){
var inst_60600 = (state_60639[(7)]);
var inst_60616 = (state_60639[(2)]);
var inst_60617 = (inst_60600 + (1));
var inst_60600__$1 = inst_60617;
var state_60639__$1 = (function (){var statearr_60845 = state_60639;
(statearr_60845[(7)] = inst_60600__$1);

(statearr_60845[(14)] = inst_60616);

return statearr_60845;
})();
var statearr_60846_62449 = state_60639__$1;
(statearr_60846_62449[(2)] = null);

(statearr_60846_62449[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60640 === (8))){
var inst_60621 = (state_60639[(2)]);
var state_60639__$1 = state_60639;
var statearr_60847_62450 = state_60639__$1;
(statearr_60847_62450[(2)] = inst_60621);

(statearr_60847_62450[(1)] = (5));


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
}
});
return (function() {
var cljs$core$async$state_machine__58890__auto__ = null;
var cljs$core$async$state_machine__58890__auto____0 = (function (){
var statearr_60904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60904[(0)] = cljs$core$async$state_machine__58890__auto__);

(statearr_60904[(1)] = (1));

return statearr_60904;
});
var cljs$core$async$state_machine__58890__auto____1 = (function (state_60639){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_60639);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e60915){var ex__58893__auto__ = e60915;
var statearr_60916_62451 = state_60639;
(statearr_60916_62451[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_60639[(4)]))){
var statearr_60917_62452 = state_60639;
(statearr_60917_62452[(1)] = cljs.core.first((state_60639[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62453 = state_60639;
state_60639 = G__62453;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
cljs$core$async$state_machine__58890__auto__ = function(state_60639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58890__auto____1.call(this,state_60639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58890__auto____0;
cljs$core$async$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58890__auto____1;
return cljs$core$async$state_machine__58890__auto__;
})()
})();
var state__59004__auto__ = (function (){var statearr_60920 = f__59003__auto__();
(statearr_60920[(6)] = c__59002__auto___62427);

return statearr_60920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__60933 = arguments.length;
switch (G__60933) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59002__auto___62455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = (function (state_60983){
var state_val_60984 = (state_60983[(1)]);
if((state_val_60984 === (7))){
var inst_60955 = (state_60983[(7)]);
var inst_60954 = (state_60983[(8)]);
var inst_60954__$1 = (state_60983[(2)]);
var inst_60955__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60954__$1,(0),null);
var inst_60956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60954__$1,(1),null);
var inst_60957 = (inst_60955__$1 == null);
var state_60983__$1 = (function (){var statearr_60985 = state_60983;
(statearr_60985[(7)] = inst_60955__$1);

(statearr_60985[(9)] = inst_60956);

(statearr_60985[(8)] = inst_60954__$1);

return statearr_60985;
})();
if(cljs.core.truth_(inst_60957)){
var statearr_60986_62456 = state_60983__$1;
(statearr_60986_62456[(1)] = (8));

} else {
var statearr_60987_62457 = state_60983__$1;
(statearr_60987_62457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (1))){
var inst_60944 = cljs.core.vec(chs);
var inst_60945 = inst_60944;
var state_60983__$1 = (function (){var statearr_60996 = state_60983;
(statearr_60996[(10)] = inst_60945);

return statearr_60996;
})();
var statearr_61001_62458 = state_60983__$1;
(statearr_61001_62458[(2)] = null);

(statearr_61001_62458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (4))){
var inst_60945 = (state_60983[(10)]);
var state_60983__$1 = state_60983;
return cljs.core.async.ioc_alts_BANG_(state_60983__$1,(7),inst_60945);
} else {
if((state_val_60984 === (6))){
var inst_60971 = (state_60983[(2)]);
var state_60983__$1 = state_60983;
var statearr_61002_62459 = state_60983__$1;
(statearr_61002_62459[(2)] = inst_60971);

(statearr_61002_62459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (3))){
var inst_60973 = (state_60983[(2)]);
var state_60983__$1 = state_60983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60983__$1,inst_60973);
} else {
if((state_val_60984 === (2))){
var inst_60945 = (state_60983[(10)]);
var inst_60947 = cljs.core.count(inst_60945);
var inst_60948 = (inst_60947 > (0));
var state_60983__$1 = state_60983;
if(cljs.core.truth_(inst_60948)){
var statearr_61006_62460 = state_60983__$1;
(statearr_61006_62460[(1)] = (4));

} else {
var statearr_61007_62461 = state_60983__$1;
(statearr_61007_62461[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (11))){
var inst_60945 = (state_60983[(10)]);
var inst_60964 = (state_60983[(2)]);
var tmp61004 = inst_60945;
var inst_60945__$1 = tmp61004;
var state_60983__$1 = (function (){var statearr_61008 = state_60983;
(statearr_61008[(11)] = inst_60964);

(statearr_61008[(10)] = inst_60945__$1);

return statearr_61008;
})();
var statearr_61009_62462 = state_60983__$1;
(statearr_61009_62462[(2)] = null);

(statearr_61009_62462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (9))){
var inst_60955 = (state_60983[(7)]);
var state_60983__$1 = state_60983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60983__$1,(11),out,inst_60955);
} else {
if((state_val_60984 === (5))){
var inst_60969 = cljs.core.async.close_BANG_(out);
var state_60983__$1 = state_60983;
var statearr_61015_62463 = state_60983__$1;
(statearr_61015_62463[(2)] = inst_60969);

(statearr_61015_62463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (10))){
var inst_60967 = (state_60983[(2)]);
var state_60983__$1 = state_60983;
var statearr_61020_62464 = state_60983__$1;
(statearr_61020_62464[(2)] = inst_60967);

(statearr_61020_62464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60984 === (8))){
var inst_60955 = (state_60983[(7)]);
var inst_60956 = (state_60983[(9)]);
var inst_60954 = (state_60983[(8)]);
var inst_60945 = (state_60983[(10)]);
var inst_60959 = (function (){var cs = inst_60945;
var vec__60950 = inst_60954;
var v = inst_60955;
var c = inst_60956;
return (function (p1__60931_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__60931_SHARP_);
});
})();
var inst_60960 = cljs.core.filterv(inst_60959,inst_60945);
var inst_60945__$1 = inst_60960;
var state_60983__$1 = (function (){var statearr_61027 = state_60983;
(statearr_61027[(10)] = inst_60945__$1);

return statearr_61027;
})();
var statearr_61032_62465 = state_60983__$1;
(statearr_61032_62465[(2)] = null);

(statearr_61032_62465[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__58890__auto__ = null;
var cljs$core$async$state_machine__58890__auto____0 = (function (){
var statearr_61059 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61059[(0)] = cljs$core$async$state_machine__58890__auto__);

(statearr_61059[(1)] = (1));

return statearr_61059;
});
var cljs$core$async$state_machine__58890__auto____1 = (function (state_60983){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_60983);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e61060){var ex__58893__auto__ = e61060;
var statearr_61061_62466 = state_60983;
(statearr_61061_62466[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_60983[(4)]))){
var statearr_61062_62467 = state_60983;
(statearr_61062_62467[(1)] = cljs.core.first((state_60983[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62468 = state_60983;
state_60983 = G__62468;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
cljs$core$async$state_machine__58890__auto__ = function(state_60983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58890__auto____1.call(this,state_60983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58890__auto____0;
cljs$core$async$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58890__auto____1;
return cljs$core$async$state_machine__58890__auto__;
})()
})();
var state__59004__auto__ = (function (){var statearr_61063 = f__59003__auto__();
(statearr_61063[(6)] = c__59002__auto___62455);

return statearr_61063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__61073 = arguments.length;
switch (G__61073) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59002__auto___62471 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = (function (state_61105){
var state_val_61106 = (state_61105[(1)]);
if((state_val_61106 === (7))){
var inst_61082 = (state_61105[(7)]);
var inst_61082__$1 = (state_61105[(2)]);
var inst_61083 = (inst_61082__$1 == null);
var inst_61084 = cljs.core.not(inst_61083);
var state_61105__$1 = (function (){var statearr_61113 = state_61105;
(statearr_61113[(7)] = inst_61082__$1);

return statearr_61113;
})();
if(inst_61084){
var statearr_61114_62475 = state_61105__$1;
(statearr_61114_62475[(1)] = (8));

} else {
var statearr_61116_62476 = state_61105__$1;
(statearr_61116_62476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61106 === (1))){
var inst_61077 = (0);
var state_61105__$1 = (function (){var statearr_61117 = state_61105;
(statearr_61117[(8)] = inst_61077);

return statearr_61117;
})();
var statearr_61118_62477 = state_61105__$1;
(statearr_61118_62477[(2)] = null);

(statearr_61118_62477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61106 === (4))){
var state_61105__$1 = state_61105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61105__$1,(7),ch);
} else {
if((state_val_61106 === (6))){
var inst_61099 = (state_61105[(2)]);
var state_61105__$1 = state_61105;
var statearr_61123_62478 = state_61105__$1;
(statearr_61123_62478[(2)] = inst_61099);

(statearr_61123_62478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61106 === (3))){
var inst_61101 = (state_61105[(2)]);
var inst_61102 = cljs.core.async.close_BANG_(out);
var state_61105__$1 = (function (){var statearr_61124 = state_61105;
(statearr_61124[(9)] = inst_61101);

return statearr_61124;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_61105__$1,inst_61102);
} else {
if((state_val_61106 === (2))){
var inst_61077 = (state_61105[(8)]);
var inst_61079 = (inst_61077 < n);
var state_61105__$1 = state_61105;
if(cljs.core.truth_(inst_61079)){
var statearr_61125_62479 = state_61105__$1;
(statearr_61125_62479[(1)] = (4));

} else {
var statearr_61129_62480 = state_61105__$1;
(statearr_61129_62480[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61106 === (11))){
var inst_61077 = (state_61105[(8)]);
var inst_61088 = (state_61105[(2)]);
var inst_61092 = (inst_61077 + (1));
var inst_61077__$1 = inst_61092;
var state_61105__$1 = (function (){var statearr_61130 = state_61105;
(statearr_61130[(10)] = inst_61088);

(statearr_61130[(8)] = inst_61077__$1);

return statearr_61130;
})();
var statearr_61132_62481 = state_61105__$1;
(statearr_61132_62481[(2)] = null);

(statearr_61132_62481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61106 === (9))){
var state_61105__$1 = state_61105;
var statearr_61133_62482 = state_61105__$1;
(statearr_61133_62482[(2)] = null);

(statearr_61133_62482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61106 === (5))){
var state_61105__$1 = state_61105;
var statearr_61135_62483 = state_61105__$1;
(statearr_61135_62483[(2)] = null);

(statearr_61135_62483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61106 === (10))){
var inst_61096 = (state_61105[(2)]);
var state_61105__$1 = state_61105;
var statearr_61136_62484 = state_61105__$1;
(statearr_61136_62484[(2)] = inst_61096);

(statearr_61136_62484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61106 === (8))){
var inst_61082 = (state_61105[(7)]);
var state_61105__$1 = state_61105;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61105__$1,(11),out,inst_61082);
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
});
return (function() {
var cljs$core$async$state_machine__58890__auto__ = null;
var cljs$core$async$state_machine__58890__auto____0 = (function (){
var statearr_61137 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61137[(0)] = cljs$core$async$state_machine__58890__auto__);

(statearr_61137[(1)] = (1));

return statearr_61137;
});
var cljs$core$async$state_machine__58890__auto____1 = (function (state_61105){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_61105);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e61138){var ex__58893__auto__ = e61138;
var statearr_61139_62485 = state_61105;
(statearr_61139_62485[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_61105[(4)]))){
var statearr_61140_62486 = state_61105;
(statearr_61140_62486[(1)] = cljs.core.first((state_61105[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62487 = state_61105;
state_61105 = G__62487;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
cljs$core$async$state_machine__58890__auto__ = function(state_61105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58890__auto____1.call(this,state_61105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58890__auto____0;
cljs$core$async$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58890__auto____1;
return cljs$core$async$state_machine__58890__auto__;
})()
})();
var state__59004__auto__ = (function (){var statearr_61143 = f__59003__auto__();
(statearr_61143[(6)] = c__59002__auto___62471);

return statearr_61143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61149 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61149 = (function (f,ch,meta61150){
this.f = f;
this.ch = ch;
this.meta61150 = meta61150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61151,meta61150__$1){
var self__ = this;
var _61151__$1 = this;
return (new cljs.core.async.t_cljs$core$async61149(self__.f,self__.ch,meta61150__$1));
}));

(cljs.core.async.t_cljs$core$async61149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61151){
var self__ = this;
var _61151__$1 = this;
return self__.meta61150;
}));

(cljs.core.async.t_cljs$core$async61149.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61149.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async61149.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async61149.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61149.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61169 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61169 = (function (f,ch,meta61150,_,fn1,meta61170){
this.f = f;
this.ch = ch;
this.meta61150 = meta61150;
this._ = _;
this.fn1 = fn1;
this.meta61170 = meta61170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61171,meta61170__$1){
var self__ = this;
var _61171__$1 = this;
return (new cljs.core.async.t_cljs$core$async61169(self__.f,self__.ch,self__.meta61150,self__._,self__.fn1,meta61170__$1));
}));

(cljs.core.async.t_cljs$core$async61169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61171){
var self__ = this;
var _61171__$1 = this;
return self__.meta61170;
}));

(cljs.core.async.t_cljs$core$async61169.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61169.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async61169.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async61169.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__61148_SHARP_){
var G__61195 = (((p1__61148_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__61148_SHARP_) : self__.f.call(null,p1__61148_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__61195) : f1.call(null,G__61195));
});
}));

(cljs.core.async.t_cljs$core$async61169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61150","meta61150",-1095343013,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async61149","cljs.core.async/t_cljs$core$async61149",-870074420,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta61170","meta61170",-1024163176,null)], null);
}));

(cljs.core.async.t_cljs$core$async61169.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61169");

(cljs.core.async.t_cljs$core$async61169.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async61169");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61169.
 */
cljs.core.async.__GT_t_cljs$core$async61169 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async61169(f__$1,ch__$1,meta61150__$1,___$2,fn1__$1,meta61170){
return (new cljs.core.async.t_cljs$core$async61169(f__$1,ch__$1,meta61150__$1,___$2,fn1__$1,meta61170));
});

}

return (new cljs.core.async.t_cljs$core$async61169(self__.f,self__.ch,self__.meta61150,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__61201 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__61201) : self__.f.call(null,G__61201));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async61149.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61149.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async61149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61150","meta61150",-1095343013,null)], null);
}));

(cljs.core.async.t_cljs$core$async61149.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61149");

(cljs.core.async.t_cljs$core$async61149.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async61149");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61149.
 */
cljs.core.async.__GT_t_cljs$core$async61149 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async61149(f__$1,ch__$1,meta61150){
return (new cljs.core.async.t_cljs$core$async61149(f__$1,ch__$1,meta61150));
});

}

return (new cljs.core.async.t_cljs$core$async61149(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61221 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61221 = (function (f,ch,meta61222){
this.f = f;
this.ch = ch;
this.meta61222 = meta61222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61223,meta61222__$1){
var self__ = this;
var _61223__$1 = this;
return (new cljs.core.async.t_cljs$core$async61221(self__.f,self__.ch,meta61222__$1));
}));

(cljs.core.async.t_cljs$core$async61221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61223){
var self__ = this;
var _61223__$1 = this;
return self__.meta61222;
}));

(cljs.core.async.t_cljs$core$async61221.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61221.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async61221.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61221.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async61221.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61221.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async61221.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61222","meta61222",-656394549,null)], null);
}));

(cljs.core.async.t_cljs$core$async61221.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61221.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61221");

(cljs.core.async.t_cljs$core$async61221.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async61221");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61221.
 */
cljs.core.async.__GT_t_cljs$core$async61221 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async61221(f__$1,ch__$1,meta61222){
return (new cljs.core.async.t_cljs$core$async61221(f__$1,ch__$1,meta61222));
});

}

return (new cljs.core.async.t_cljs$core$async61221(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61278 = (function (p,ch,meta61279){
this.p = p;
this.ch = ch;
this.meta61279 = meta61279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61280,meta61279__$1){
var self__ = this;
var _61280__$1 = this;
return (new cljs.core.async.t_cljs$core$async61278(self__.p,self__.ch,meta61279__$1));
}));

(cljs.core.async.t_cljs$core$async61278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61280){
var self__ = this;
var _61280__$1 = this;
return self__.meta61279;
}));

(cljs.core.async.t_cljs$core$async61278.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61278.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async61278.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async61278.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61278.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async61278.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61278.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async61278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61279","meta61279",-601593657,null)], null);
}));

(cljs.core.async.t_cljs$core$async61278.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61278");

(cljs.core.async.t_cljs$core$async61278.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async61278");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61278.
 */
cljs.core.async.__GT_t_cljs$core$async61278 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async61278(p__$1,ch__$1,meta61279){
return (new cljs.core.async.t_cljs$core$async61278(p__$1,ch__$1,meta61279));
});

}

return (new cljs.core.async.t_cljs$core$async61278(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__61285 = arguments.length;
switch (G__61285) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59002__auto___62500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = (function (state_61311){
var state_val_61312 = (state_61311[(1)]);
if((state_val_61312 === (7))){
var inst_61307 = (state_61311[(2)]);
var state_61311__$1 = state_61311;
var statearr_61328_62501 = state_61311__$1;
(statearr_61328_62501[(2)] = inst_61307);

(statearr_61328_62501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61312 === (1))){
var state_61311__$1 = state_61311;
var statearr_61329_62502 = state_61311__$1;
(statearr_61329_62502[(2)] = null);

(statearr_61329_62502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61312 === (4))){
var inst_61293 = (state_61311[(7)]);
var inst_61293__$1 = (state_61311[(2)]);
var inst_61294 = (inst_61293__$1 == null);
var state_61311__$1 = (function (){var statearr_61331 = state_61311;
(statearr_61331[(7)] = inst_61293__$1);

return statearr_61331;
})();
if(cljs.core.truth_(inst_61294)){
var statearr_61332_62503 = state_61311__$1;
(statearr_61332_62503[(1)] = (5));

} else {
var statearr_61345_62504 = state_61311__$1;
(statearr_61345_62504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61312 === (6))){
var inst_61293 = (state_61311[(7)]);
var inst_61298 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_61293) : p.call(null,inst_61293));
var state_61311__$1 = state_61311;
if(cljs.core.truth_(inst_61298)){
var statearr_61346_62505 = state_61311__$1;
(statearr_61346_62505[(1)] = (8));

} else {
var statearr_61347_62506 = state_61311__$1;
(statearr_61347_62506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61312 === (3))){
var inst_61309 = (state_61311[(2)]);
var state_61311__$1 = state_61311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61311__$1,inst_61309);
} else {
if((state_val_61312 === (2))){
var state_61311__$1 = state_61311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61311__$1,(4),ch);
} else {
if((state_val_61312 === (11))){
var inst_61301 = (state_61311[(2)]);
var state_61311__$1 = state_61311;
var statearr_61348_62507 = state_61311__$1;
(statearr_61348_62507[(2)] = inst_61301);

(statearr_61348_62507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61312 === (9))){
var state_61311__$1 = state_61311;
var statearr_61349_62508 = state_61311__$1;
(statearr_61349_62508[(2)] = null);

(statearr_61349_62508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61312 === (5))){
var inst_61296 = cljs.core.async.close_BANG_(out);
var state_61311__$1 = state_61311;
var statearr_61350_62509 = state_61311__$1;
(statearr_61350_62509[(2)] = inst_61296);

(statearr_61350_62509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61312 === (10))){
var inst_61304 = (state_61311[(2)]);
var state_61311__$1 = (function (){var statearr_61351 = state_61311;
(statearr_61351[(8)] = inst_61304);

return statearr_61351;
})();
var statearr_61352_62510 = state_61311__$1;
(statearr_61352_62510[(2)] = null);

(statearr_61352_62510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61312 === (8))){
var inst_61293 = (state_61311[(7)]);
var state_61311__$1 = state_61311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61311__$1,(11),out,inst_61293);
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
});
return (function() {
var cljs$core$async$state_machine__58890__auto__ = null;
var cljs$core$async$state_machine__58890__auto____0 = (function (){
var statearr_61353 = [null,null,null,null,null,null,null,null,null];
(statearr_61353[(0)] = cljs$core$async$state_machine__58890__auto__);

(statearr_61353[(1)] = (1));

return statearr_61353;
});
var cljs$core$async$state_machine__58890__auto____1 = (function (state_61311){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_61311);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e61370){var ex__58893__auto__ = e61370;
var statearr_61371_62511 = state_61311;
(statearr_61371_62511[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_61311[(4)]))){
var statearr_61372_62512 = state_61311;
(statearr_61372_62512[(1)] = cljs.core.first((state_61311[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62513 = state_61311;
state_61311 = G__62513;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
cljs$core$async$state_machine__58890__auto__ = function(state_61311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58890__auto____1.call(this,state_61311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58890__auto____0;
cljs$core$async$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58890__auto____1;
return cljs$core$async$state_machine__58890__auto__;
})()
})();
var state__59004__auto__ = (function (){var statearr_61373 = f__59003__auto__();
(statearr_61373[(6)] = c__59002__auto___62500);

return statearr_61373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__61375 = arguments.length;
switch (G__61375) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__59002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = (function (state_61462){
var state_val_61463 = (state_61462[(1)]);
if((state_val_61463 === (7))){
var inst_61458 = (state_61462[(2)]);
var state_61462__$1 = state_61462;
var statearr_61464_62515 = state_61462__$1;
(statearr_61464_62515[(2)] = inst_61458);

(statearr_61464_62515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61463 === (20))){
var inst_61407 = (state_61462[(7)]);
var inst_61438 = (state_61462[(2)]);
var inst_61440 = cljs.core.next(inst_61407);
var inst_61390 = inst_61440;
var inst_61391 = null;
var inst_61392 = (0);
var inst_61393 = (0);
var state_61462__$1 = (function (){var statearr_61465 = state_61462;
(statearr_61465[(8)] = inst_61393);

(statearr_61465[(9)] = inst_61390);

(statearr_61465[(10)] = inst_61392);

(statearr_61465[(11)] = inst_61438);

(statearr_61465[(12)] = inst_61391);

return statearr_61465;
})();
var statearr_61466_62516 = state_61462__$1;
(statearr_61466_62516[(2)] = null);

(statearr_61466_62516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61463 === (1))){
var state_61462__$1 = state_61462;
var statearr_61467_62518 = state_61462__$1;
(statearr_61467_62518[(2)] = null);

(statearr_61467_62518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61463 === (4))){
var inst_61378 = (state_61462[(13)]);
var inst_61378__$1 = (state_61462[(2)]);
var inst_61379 = (inst_61378__$1 == null);
var state_61462__$1 = (function (){var statearr_61468 = state_61462;
(statearr_61468[(13)] = inst_61378__$1);

return statearr_61468;
})();
if(cljs.core.truth_(inst_61379)){
var statearr_61469_62519 = state_61462__$1;
(statearr_61469_62519[(1)] = (5));

} else {
var statearr_61470_62520 = state_61462__$1;
(statearr_61470_62520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61463 === (15))){
var state_61462__$1 = state_61462;
var statearr_61481_62521 = state_61462__$1;
(statearr_61481_62521[(2)] = null);

(statearr_61481_62521[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61463 === (21))){
var state_61462__$1 = state_61462;
var statearr_61482_62522 = state_61462__$1;
(statearr_61482_62522[(2)] = null);

(statearr_61482_62522[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61463 === (13))){
var inst_61393 = (state_61462[(8)]);
var inst_61390 = (state_61462[(9)]);
var inst_61392 = (state_61462[(10)]);
var inst_61391 = (state_61462[(12)]);
var inst_61400 = (state_61462[(2)]);
var inst_61401 = (inst_61393 + (1));
var tmp61471 = inst_61390;
var tmp61472 = inst_61392;
var tmp61473 = inst_61391;
var inst_61390__$1 = tmp61471;
var inst_61391__$1 = tmp61473;
var inst_61392__$1 = tmp61472;
var inst_61393__$1 = inst_61401;
var state_61462__$1 = (function (){var statearr_61485 = state_61462;
(statearr_61485[(8)] = inst_61393__$1);

(statearr_61485[(9)] = inst_61390__$1);

(statearr_61485[(14)] = inst_61400);

(statearr_61485[(10)] = inst_61392__$1);

(statearr_61485[(12)] = inst_61391__$1);

return statearr_61485;
})();
var statearr_61486_62526 = state_61462__$1;
(statearr_61486_62526[(2)] = null);

(statearr_61486_62526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61463 === (22))){
var state_61462__$1 = state_61462;
var statearr_61487_62527 = state_61462__$1;
(statearr_61487_62527[(2)] = null);

(statearr_61487_62527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61463 === (6))){
var inst_61378 = (state_61462[(13)]);
var inst_61387 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_61378) : f.call(null,inst_61378));
var inst_61388 = cljs.core.seq(inst_61387);
var inst_61390 = inst_61388;
var inst_61391 = null;
var inst_61392 = (0);
var inst_61393 = (0);
var state_61462__$1 = (function (){var statearr_61489 = state_61462;
(statearr_61489[(8)] = inst_61393);

(statearr_61489[(9)] = inst_61390);

(statearr_61489[(10)] = inst_61392);

(statearr_61489[(12)] = inst_61391);

return statearr_61489;
})();
var statearr_61490_62528 = state_61462__$1;
(statearr_61490_62528[(2)] = null);

(statearr_61490_62528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61463 === (17))){
var inst_61407 = (state_61462[(7)]);
var inst_61431 = cljs.core.chunk_first(inst_61407);
var inst_61432 = cljs.core.chunk_rest(inst_61407);
var inst_61433 = cljs.core.count(inst_61431);
var inst_61390 = inst_61432;
var inst_61391 = inst_61431;
var inst_61392 = inst_61433;
var inst_61393 = (0);
var state_61462__$1 = (function (){var statearr_61494 = state_61462;
(statearr_61494[(8)] = inst_61393);

(statearr_61494[(9)] = inst_61390);

(statearr_61494[(10)] = inst_61392);

(statearr_61494[(12)] = inst_61391);

return statearr_61494;
})();
var statearr_61495_62529 = state_61462__$1;
(statearr_61495_62529[(2)] = null);

(statearr_61495_62529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61463 === (3))){
var inst_61460 = (state_61462[(2)]);
var state_61462__$1 = state_61462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61462__$1,inst_61460);
} else {
if((state_val_61463 === (12))){
var inst_61448 = (state_61462[(2)]);
var state_61462__$1 = state_61462;
var statearr_61502_62530 = state_61462__$1;
(statearr_61502_62530[(2)] = inst_61448);

(statearr_61502_62530[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61463 === (2))){
var state_61462__$1 = state_61462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61462__$1,(4),in$);
} else {
if((state_val_61463 === (23))){
var inst_61456 = (state_61462[(2)]);
var state_61462__$1 = state_61462;
var statearr_61503_62531 = state_61462__$1;
(statearr_61503_62531[(2)] = inst_61456);

(statearr_61503_62531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61463 === (19))){
var inst_61443 = (state_61462[(2)]);
var state_61462__$1 = state_61462;
var statearr_61504_62532 = state_61462__$1;
(statearr_61504_62532[(2)] = inst_61443);

(statearr_61504_62532[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61463 === (11))){
var inst_61407 = (state_61462[(7)]);
var inst_61390 = (state_61462[(9)]);
var inst_61407__$1 = cljs.core.seq(inst_61390);
var state_61462__$1 = (function (){var statearr_61505 = state_61462;
(statearr_61505[(7)] = inst_61407__$1);

return statearr_61505;
})();
if(inst_61407__$1){
var statearr_61506_62533 = state_61462__$1;
(statearr_61506_62533[(1)] = (14));

} else {
var statearr_61507_62534 = state_61462__$1;
(statearr_61507_62534[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61463 === (9))){
var inst_61450 = (state_61462[(2)]);
var inst_61451 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_61462__$1 = (function (){var statearr_61509 = state_61462;
(statearr_61509[(15)] = inst_61450);

return statearr_61509;
})();
if(cljs.core.truth_(inst_61451)){
var statearr_61511_62535 = state_61462__$1;
(statearr_61511_62535[(1)] = (21));

} else {
var statearr_61512_62536 = state_61462__$1;
(statearr_61512_62536[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61463 === (5))){
var inst_61381 = cljs.core.async.close_BANG_(out);
var state_61462__$1 = state_61462;
var statearr_61515_62537 = state_61462__$1;
(statearr_61515_62537[(2)] = inst_61381);

(statearr_61515_62537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61463 === (14))){
var inst_61407 = (state_61462[(7)]);
var inst_61429 = cljs.core.chunked_seq_QMARK_(inst_61407);
var state_61462__$1 = state_61462;
if(inst_61429){
var statearr_61516_62538 = state_61462__$1;
(statearr_61516_62538[(1)] = (17));

} else {
var statearr_61518_62539 = state_61462__$1;
(statearr_61518_62539[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61463 === (16))){
var inst_61446 = (state_61462[(2)]);
var state_61462__$1 = state_61462;
var statearr_61520_62540 = state_61462__$1;
(statearr_61520_62540[(2)] = inst_61446);

(statearr_61520_62540[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61463 === (10))){
var inst_61393 = (state_61462[(8)]);
var inst_61391 = (state_61462[(12)]);
var inst_61398 = cljs.core._nth(inst_61391,inst_61393);
var state_61462__$1 = state_61462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61462__$1,(13),out,inst_61398);
} else {
if((state_val_61463 === (18))){
var inst_61407 = (state_61462[(7)]);
var inst_61436 = cljs.core.first(inst_61407);
var state_61462__$1 = state_61462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61462__$1,(20),out,inst_61436);
} else {
if((state_val_61463 === (8))){
var inst_61393 = (state_61462[(8)]);
var inst_61392 = (state_61462[(10)]);
var inst_61395 = (inst_61393 < inst_61392);
var inst_61396 = inst_61395;
var state_61462__$1 = state_61462;
if(cljs.core.truth_(inst_61396)){
var statearr_61523_62542 = state_61462__$1;
(statearr_61523_62542[(1)] = (10));

} else {
var statearr_61526_62543 = state_61462__$1;
(statearr_61526_62543[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__58890__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__58890__auto____0 = (function (){
var statearr_61529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61529[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__58890__auto__);

(statearr_61529[(1)] = (1));

return statearr_61529;
});
var cljs$core$async$mapcat_STAR__$_state_machine__58890__auto____1 = (function (state_61462){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_61462);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e61530){var ex__58893__auto__ = e61530;
var statearr_61531_62544 = state_61462;
(statearr_61531_62544[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_61462[(4)]))){
var statearr_61532_62545 = state_61462;
(statearr_61532_62545[(1)] = cljs.core.first((state_61462[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62546 = state_61462;
state_61462 = G__62546;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__58890__auto__ = function(state_61462){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__58890__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__58890__auto____1.call(this,state_61462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__58890__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__58890__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__58890__auto__;
})()
})();
var state__59004__auto__ = (function (){var statearr_61533 = f__59003__auto__();
(statearr_61533[(6)] = c__59002__auto__);

return statearr_61533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
}));

return c__59002__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__61537 = arguments.length;
switch (G__61537) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__61547 = arguments.length;
switch (G__61547) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__61549 = arguments.length;
switch (G__61549) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59002__auto___62550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = (function (state_61576){
var state_val_61577 = (state_61576[(1)]);
if((state_val_61577 === (7))){
var inst_61571 = (state_61576[(2)]);
var state_61576__$1 = state_61576;
var statearr_61578_62551 = state_61576__$1;
(statearr_61578_62551[(2)] = inst_61571);

(statearr_61578_62551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61577 === (1))){
var inst_61553 = null;
var state_61576__$1 = (function (){var statearr_61579 = state_61576;
(statearr_61579[(7)] = inst_61553);

return statearr_61579;
})();
var statearr_61580_62552 = state_61576__$1;
(statearr_61580_62552[(2)] = null);

(statearr_61580_62552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61577 === (4))){
var inst_61556 = (state_61576[(8)]);
var inst_61556__$1 = (state_61576[(2)]);
var inst_61557 = (inst_61556__$1 == null);
var inst_61558 = cljs.core.not(inst_61557);
var state_61576__$1 = (function (){var statearr_61581 = state_61576;
(statearr_61581[(8)] = inst_61556__$1);

return statearr_61581;
})();
if(inst_61558){
var statearr_61582_62553 = state_61576__$1;
(statearr_61582_62553[(1)] = (5));

} else {
var statearr_61583_62554 = state_61576__$1;
(statearr_61583_62554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61577 === (6))){
var state_61576__$1 = state_61576;
var statearr_61584_62555 = state_61576__$1;
(statearr_61584_62555[(2)] = null);

(statearr_61584_62555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61577 === (3))){
var inst_61573 = (state_61576[(2)]);
var inst_61574 = cljs.core.async.close_BANG_(out);
var state_61576__$1 = (function (){var statearr_61585 = state_61576;
(statearr_61585[(9)] = inst_61573);

return statearr_61585;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_61576__$1,inst_61574);
} else {
if((state_val_61577 === (2))){
var state_61576__$1 = state_61576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61576__$1,(4),ch);
} else {
if((state_val_61577 === (11))){
var inst_61556 = (state_61576[(8)]);
var inst_61565 = (state_61576[(2)]);
var inst_61553 = inst_61556;
var state_61576__$1 = (function (){var statearr_61588 = state_61576;
(statearr_61588[(10)] = inst_61565);

(statearr_61588[(7)] = inst_61553);

return statearr_61588;
})();
var statearr_61589_62556 = state_61576__$1;
(statearr_61589_62556[(2)] = null);

(statearr_61589_62556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61577 === (9))){
var inst_61556 = (state_61576[(8)]);
var state_61576__$1 = state_61576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61576__$1,(11),out,inst_61556);
} else {
if((state_val_61577 === (5))){
var inst_61556 = (state_61576[(8)]);
var inst_61553 = (state_61576[(7)]);
var inst_61560 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_61556,inst_61553);
var state_61576__$1 = state_61576;
if(inst_61560){
var statearr_61592_62557 = state_61576__$1;
(statearr_61592_62557[(1)] = (8));

} else {
var statearr_61593_62558 = state_61576__$1;
(statearr_61593_62558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61577 === (10))){
var inst_61568 = (state_61576[(2)]);
var state_61576__$1 = state_61576;
var statearr_61594_62559 = state_61576__$1;
(statearr_61594_62559[(2)] = inst_61568);

(statearr_61594_62559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61577 === (8))){
var inst_61553 = (state_61576[(7)]);
var tmp61590 = inst_61553;
var inst_61553__$1 = tmp61590;
var state_61576__$1 = (function (){var statearr_61595 = state_61576;
(statearr_61595[(7)] = inst_61553__$1);

return statearr_61595;
})();
var statearr_61596_62560 = state_61576__$1;
(statearr_61596_62560[(2)] = null);

(statearr_61596_62560[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__58890__auto__ = null;
var cljs$core$async$state_machine__58890__auto____0 = (function (){
var statearr_61601 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61601[(0)] = cljs$core$async$state_machine__58890__auto__);

(statearr_61601[(1)] = (1));

return statearr_61601;
});
var cljs$core$async$state_machine__58890__auto____1 = (function (state_61576){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_61576);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e61602){var ex__58893__auto__ = e61602;
var statearr_61603_62563 = state_61576;
(statearr_61603_62563[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_61576[(4)]))){
var statearr_61605_62564 = state_61576;
(statearr_61605_62564[(1)] = cljs.core.first((state_61576[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62566 = state_61576;
state_61576 = G__62566;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
cljs$core$async$state_machine__58890__auto__ = function(state_61576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58890__auto____1.call(this,state_61576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58890__auto____0;
cljs$core$async$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58890__auto____1;
return cljs$core$async$state_machine__58890__auto__;
})()
})();
var state__59004__auto__ = (function (){var statearr_61606 = f__59003__auto__();
(statearr_61606[(6)] = c__59002__auto___62550);

return statearr_61606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__61608 = arguments.length;
switch (G__61608) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59002__auto___62575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = (function (state_61652){
var state_val_61653 = (state_61652[(1)]);
if((state_val_61653 === (7))){
var inst_61648 = (state_61652[(2)]);
var state_61652__$1 = state_61652;
var statearr_61656_62576 = state_61652__$1;
(statearr_61656_62576[(2)] = inst_61648);

(statearr_61656_62576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61653 === (1))){
var inst_61609 = (new Array(n));
var inst_61610 = inst_61609;
var inst_61611 = (0);
var state_61652__$1 = (function (){var statearr_61657 = state_61652;
(statearr_61657[(7)] = inst_61611);

(statearr_61657[(8)] = inst_61610);

return statearr_61657;
})();
var statearr_61658_62577 = state_61652__$1;
(statearr_61658_62577[(2)] = null);

(statearr_61658_62577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61653 === (4))){
var inst_61616 = (state_61652[(9)]);
var inst_61616__$1 = (state_61652[(2)]);
var inst_61617 = (inst_61616__$1 == null);
var inst_61618 = cljs.core.not(inst_61617);
var state_61652__$1 = (function (){var statearr_61661 = state_61652;
(statearr_61661[(9)] = inst_61616__$1);

return statearr_61661;
})();
if(inst_61618){
var statearr_61662_62585 = state_61652__$1;
(statearr_61662_62585[(1)] = (5));

} else {
var statearr_61663_62586 = state_61652__$1;
(statearr_61663_62586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61653 === (15))){
var inst_61640 = (state_61652[(2)]);
var state_61652__$1 = state_61652;
var statearr_61664_62588 = state_61652__$1;
(statearr_61664_62588[(2)] = inst_61640);

(statearr_61664_62588[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61653 === (13))){
var state_61652__$1 = state_61652;
var statearr_61665_62589 = state_61652__$1;
(statearr_61665_62589[(2)] = null);

(statearr_61665_62589[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61653 === (6))){
var inst_61611 = (state_61652[(7)]);
var inst_61635 = (inst_61611 > (0));
var state_61652__$1 = state_61652;
if(cljs.core.truth_(inst_61635)){
var statearr_61670_62590 = state_61652__$1;
(statearr_61670_62590[(1)] = (12));

} else {
var statearr_61671_62591 = state_61652__$1;
(statearr_61671_62591[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61653 === (3))){
var inst_61650 = (state_61652[(2)]);
var state_61652__$1 = state_61652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61652__$1,inst_61650);
} else {
if((state_val_61653 === (12))){
var inst_61610 = (state_61652[(8)]);
var inst_61638 = cljs.core.vec(inst_61610);
var state_61652__$1 = state_61652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61652__$1,(15),out,inst_61638);
} else {
if((state_val_61653 === (2))){
var state_61652__$1 = state_61652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61652__$1,(4),ch);
} else {
if((state_val_61653 === (11))){
var inst_61628 = (state_61652[(2)]);
var inst_61629 = (new Array(n));
var inst_61610 = inst_61629;
var inst_61611 = (0);
var state_61652__$1 = (function (){var statearr_61676 = state_61652;
(statearr_61676[(7)] = inst_61611);

(statearr_61676[(8)] = inst_61610);

(statearr_61676[(10)] = inst_61628);

return statearr_61676;
})();
var statearr_61677_62597 = state_61652__$1;
(statearr_61677_62597[(2)] = null);

(statearr_61677_62597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61653 === (9))){
var inst_61610 = (state_61652[(8)]);
var inst_61626 = cljs.core.vec(inst_61610);
var state_61652__$1 = state_61652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61652__$1,(11),out,inst_61626);
} else {
if((state_val_61653 === (5))){
var inst_61611 = (state_61652[(7)]);
var inst_61610 = (state_61652[(8)]);
var inst_61616 = (state_61652[(9)]);
var inst_61621 = (state_61652[(11)]);
var inst_61620 = (inst_61610[inst_61611] = inst_61616);
var inst_61621__$1 = (inst_61611 + (1));
var inst_61622 = (inst_61621__$1 < n);
var state_61652__$1 = (function (){var statearr_61679 = state_61652;
(statearr_61679[(12)] = inst_61620);

(statearr_61679[(11)] = inst_61621__$1);

return statearr_61679;
})();
if(cljs.core.truth_(inst_61622)){
var statearr_61683_62600 = state_61652__$1;
(statearr_61683_62600[(1)] = (8));

} else {
var statearr_61684_62601 = state_61652__$1;
(statearr_61684_62601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61653 === (14))){
var inst_61643 = (state_61652[(2)]);
var inst_61645 = cljs.core.async.close_BANG_(out);
var state_61652__$1 = (function (){var statearr_61686 = state_61652;
(statearr_61686[(13)] = inst_61643);

return statearr_61686;
})();
var statearr_61687_62603 = state_61652__$1;
(statearr_61687_62603[(2)] = inst_61645);

(statearr_61687_62603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61653 === (10))){
var inst_61632 = (state_61652[(2)]);
var state_61652__$1 = state_61652;
var statearr_61689_62604 = state_61652__$1;
(statearr_61689_62604[(2)] = inst_61632);

(statearr_61689_62604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61653 === (8))){
var inst_61610 = (state_61652[(8)]);
var inst_61621 = (state_61652[(11)]);
var tmp61685 = inst_61610;
var inst_61610__$1 = tmp61685;
var inst_61611 = inst_61621;
var state_61652__$1 = (function (){var statearr_61690 = state_61652;
(statearr_61690[(7)] = inst_61611);

(statearr_61690[(8)] = inst_61610__$1);

return statearr_61690;
})();
var statearr_61695_62609 = state_61652__$1;
(statearr_61695_62609[(2)] = null);

(statearr_61695_62609[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__58890__auto__ = null;
var cljs$core$async$state_machine__58890__auto____0 = (function (){
var statearr_61698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61698[(0)] = cljs$core$async$state_machine__58890__auto__);

(statearr_61698[(1)] = (1));

return statearr_61698;
});
var cljs$core$async$state_machine__58890__auto____1 = (function (state_61652){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_61652);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e61699){var ex__58893__auto__ = e61699;
var statearr_61700_62611 = state_61652;
(statearr_61700_62611[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_61652[(4)]))){
var statearr_61701_62612 = state_61652;
(statearr_61701_62612[(1)] = cljs.core.first((state_61652[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62615 = state_61652;
state_61652 = G__62615;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
cljs$core$async$state_machine__58890__auto__ = function(state_61652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58890__auto____1.call(this,state_61652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58890__auto____0;
cljs$core$async$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58890__auto____1;
return cljs$core$async$state_machine__58890__auto__;
})()
})();
var state__59004__auto__ = (function (){var statearr_61706 = f__59003__auto__();
(statearr_61706[(6)] = c__59002__auto___62575);

return statearr_61706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__61710 = arguments.length;
switch (G__61710) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59002__auto___62620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = (function (state_61759){
var state_val_61760 = (state_61759[(1)]);
if((state_val_61760 === (7))){
var inst_61755 = (state_61759[(2)]);
var state_61759__$1 = state_61759;
var statearr_61761_62622 = state_61759__$1;
(statearr_61761_62622[(2)] = inst_61755);

(statearr_61761_62622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (1))){
var inst_61713 = [];
var inst_61714 = inst_61713;
var inst_61715 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_61759__$1 = (function (){var statearr_61766 = state_61759;
(statearr_61766[(7)] = inst_61715);

(statearr_61766[(8)] = inst_61714);

return statearr_61766;
})();
var statearr_61767_62626 = state_61759__$1;
(statearr_61767_62626[(2)] = null);

(statearr_61767_62626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (4))){
var inst_61720 = (state_61759[(9)]);
var inst_61720__$1 = (state_61759[(2)]);
var inst_61721 = (inst_61720__$1 == null);
var inst_61722 = cljs.core.not(inst_61721);
var state_61759__$1 = (function (){var statearr_61773 = state_61759;
(statearr_61773[(9)] = inst_61720__$1);

return statearr_61773;
})();
if(inst_61722){
var statearr_61774_62627 = state_61759__$1;
(statearr_61774_62627[(1)] = (5));

} else {
var statearr_61775_62629 = state_61759__$1;
(statearr_61775_62629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (15))){
var inst_61714 = (state_61759[(8)]);
var inst_61747 = cljs.core.vec(inst_61714);
var state_61759__$1 = state_61759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61759__$1,(18),out,inst_61747);
} else {
if((state_val_61760 === (13))){
var inst_61742 = (state_61759[(2)]);
var state_61759__$1 = state_61759;
var statearr_61780_62632 = state_61759__$1;
(statearr_61780_62632[(2)] = inst_61742);

(statearr_61780_62632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (6))){
var inst_61714 = (state_61759[(8)]);
var inst_61744 = inst_61714.length;
var inst_61745 = (inst_61744 > (0));
var state_61759__$1 = state_61759;
if(cljs.core.truth_(inst_61745)){
var statearr_61781_62637 = state_61759__$1;
(statearr_61781_62637[(1)] = (15));

} else {
var statearr_61783_62639 = state_61759__$1;
(statearr_61783_62639[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (17))){
var inst_61752 = (state_61759[(2)]);
var inst_61753 = cljs.core.async.close_BANG_(out);
var state_61759__$1 = (function (){var statearr_61790 = state_61759;
(statearr_61790[(10)] = inst_61752);

return statearr_61790;
})();
var statearr_61792_62642 = state_61759__$1;
(statearr_61792_62642[(2)] = inst_61753);

(statearr_61792_62642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (3))){
var inst_61757 = (state_61759[(2)]);
var state_61759__$1 = state_61759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61759__$1,inst_61757);
} else {
if((state_val_61760 === (12))){
var inst_61714 = (state_61759[(8)]);
var inst_61735 = cljs.core.vec(inst_61714);
var state_61759__$1 = state_61759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61759__$1,(14),out,inst_61735);
} else {
if((state_val_61760 === (2))){
var state_61759__$1 = state_61759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61759__$1,(4),ch);
} else {
if((state_val_61760 === (11))){
var inst_61714 = (state_61759[(8)]);
var inst_61724 = (state_61759[(11)]);
var inst_61720 = (state_61759[(9)]);
var inst_61732 = inst_61714.push(inst_61720);
var tmp61794 = inst_61714;
var inst_61714__$1 = tmp61794;
var inst_61715 = inst_61724;
var state_61759__$1 = (function (){var statearr_61800 = state_61759;
(statearr_61800[(7)] = inst_61715);

(statearr_61800[(8)] = inst_61714__$1);

(statearr_61800[(12)] = inst_61732);

return statearr_61800;
})();
var statearr_61805_62645 = state_61759__$1;
(statearr_61805_62645[(2)] = null);

(statearr_61805_62645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (9))){
var inst_61715 = (state_61759[(7)]);
var inst_61728 = cljs.core.keyword_identical_QMARK_(inst_61715,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_61759__$1 = state_61759;
var statearr_61806_62646 = state_61759__$1;
(statearr_61806_62646[(2)] = inst_61728);

(statearr_61806_62646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (5))){
var inst_61715 = (state_61759[(7)]);
var inst_61724 = (state_61759[(11)]);
var inst_61725 = (state_61759[(13)]);
var inst_61720 = (state_61759[(9)]);
var inst_61724__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_61720) : f.call(null,inst_61720));
var inst_61725__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_61724__$1,inst_61715);
var state_61759__$1 = (function (){var statearr_61811 = state_61759;
(statearr_61811[(11)] = inst_61724__$1);

(statearr_61811[(13)] = inst_61725__$1);

return statearr_61811;
})();
if(inst_61725__$1){
var statearr_61817_62651 = state_61759__$1;
(statearr_61817_62651[(1)] = (8));

} else {
var statearr_61820_62652 = state_61759__$1;
(statearr_61820_62652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (14))){
var inst_61724 = (state_61759[(11)]);
var inst_61720 = (state_61759[(9)]);
var inst_61737 = (state_61759[(2)]);
var inst_61738 = [];
var inst_61739 = inst_61738.push(inst_61720);
var inst_61714 = inst_61738;
var inst_61715 = inst_61724;
var state_61759__$1 = (function (){var statearr_61822 = state_61759;
(statearr_61822[(7)] = inst_61715);

(statearr_61822[(14)] = inst_61737);

(statearr_61822[(8)] = inst_61714);

(statearr_61822[(15)] = inst_61739);

return statearr_61822;
})();
var statearr_61823_62656 = state_61759__$1;
(statearr_61823_62656[(2)] = null);

(statearr_61823_62656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (16))){
var state_61759__$1 = state_61759;
var statearr_61828_62659 = state_61759__$1;
(statearr_61828_62659[(2)] = null);

(statearr_61828_62659[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (10))){
var inst_61730 = (state_61759[(2)]);
var state_61759__$1 = state_61759;
if(cljs.core.truth_(inst_61730)){
var statearr_61830_62661 = state_61759__$1;
(statearr_61830_62661[(1)] = (11));

} else {
var statearr_61831_62663 = state_61759__$1;
(statearr_61831_62663[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (18))){
var inst_61749 = (state_61759[(2)]);
var state_61759__$1 = state_61759;
var statearr_61835_62664 = state_61759__$1;
(statearr_61835_62664[(2)] = inst_61749);

(statearr_61835_62664[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61760 === (8))){
var inst_61725 = (state_61759[(13)]);
var state_61759__$1 = state_61759;
var statearr_61836_62665 = state_61759__$1;
(statearr_61836_62665[(2)] = inst_61725);

(statearr_61836_62665[(1)] = (10));


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
}
}
});
return (function() {
var cljs$core$async$state_machine__58890__auto__ = null;
var cljs$core$async$state_machine__58890__auto____0 = (function (){
var statearr_61845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61845[(0)] = cljs$core$async$state_machine__58890__auto__);

(statearr_61845[(1)] = (1));

return statearr_61845;
});
var cljs$core$async$state_machine__58890__auto____1 = (function (state_61759){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_61759);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e61846){var ex__58893__auto__ = e61846;
var statearr_61847_62667 = state_61759;
(statearr_61847_62667[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_61759[(4)]))){
var statearr_61848_62670 = state_61759;
(statearr_61848_62670[(1)] = cljs.core.first((state_61759[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62673 = state_61759;
state_61759 = G__62673;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
cljs$core$async$state_machine__58890__auto__ = function(state_61759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58890__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58890__auto____1.call(this,state_61759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58890__auto____0;
cljs$core$async$state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58890__auto____1;
return cljs$core$async$state_machine__58890__auto__;
})()
})();
var state__59004__auto__ = (function (){var statearr_61849 = f__59003__auto__();
(statearr_61849[(6)] = c__59002__auto___62620);

return statearr_61849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
