goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__57919 = arguments.length;
switch (G__57919) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57929 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57929 = (function (f,blockable,meta57930){
this.f = f;
this.blockable = blockable;
this.meta57930 = meta57930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57931,meta57930__$1){
var self__ = this;
var _57931__$1 = this;
return (new cljs.core.async.t_cljs$core$async57929(self__.f,self__.blockable,meta57930__$1));
}));

(cljs.core.async.t_cljs$core$async57929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57931){
var self__ = this;
var _57931__$1 = this;
return self__.meta57930;
}));

(cljs.core.async.t_cljs$core$async57929.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57929.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57929.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async57929.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async57929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta57930","meta57930",-23809444,null)], null);
}));

(cljs.core.async.t_cljs$core$async57929.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57929");

(cljs.core.async.t_cljs$core$async57929.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async57929");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57929.
 */
cljs.core.async.__GT_t_cljs$core$async57929 = (function cljs$core$async$__GT_t_cljs$core$async57929(f__$1,blockable__$1,meta57930){
return (new cljs.core.async.t_cljs$core$async57929(f__$1,blockable__$1,meta57930));
});

}

return (new cljs.core.async.t_cljs$core$async57929(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__57963 = arguments.length;
switch (G__57963) {
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
var G__57977 = arguments.length;
switch (G__57977) {
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
var G__57987 = arguments.length;
switch (G__57987) {
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
var val_60737 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_60737) : fn1.call(null,val_60737));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_60737) : fn1.call(null,val_60737));
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
var G__58000 = arguments.length;
switch (G__58000) {
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
var n__5633__auto___60751 = n;
var x_60752 = (0);
while(true){
if((x_60752 < n__5633__auto___60751)){
(a[x_60752] = x_60752);

var G__60753 = (x_60752 + (1));
x_60752 = G__60753;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58002 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58002 = (function (flag,meta58003){
this.flag = flag;
this.meta58003 = meta58003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58004,meta58003__$1){
var self__ = this;
var _58004__$1 = this;
return (new cljs.core.async.t_cljs$core$async58002(self__.flag,meta58003__$1));
}));

(cljs.core.async.t_cljs$core$async58002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58004){
var self__ = this;
var _58004__$1 = this;
return self__.meta58003;
}));

(cljs.core.async.t_cljs$core$async58002.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async58002.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async58002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta58003","meta58003",1034748931,null)], null);
}));

(cljs.core.async.t_cljs$core$async58002.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58002");

(cljs.core.async.t_cljs$core$async58002.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async58002");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58002.
 */
cljs.core.async.__GT_t_cljs$core$async58002 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async58002(flag__$1,meta58003){
return (new cljs.core.async.t_cljs$core$async58002(flag__$1,meta58003));
});

}

return (new cljs.core.async.t_cljs$core$async58002(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58014 = (function (flag,cb,meta58015){
this.flag = flag;
this.cb = cb;
this.meta58015 = meta58015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58016,meta58015__$1){
var self__ = this;
var _58016__$1 = this;
return (new cljs.core.async.t_cljs$core$async58014(self__.flag,self__.cb,meta58015__$1));
}));

(cljs.core.async.t_cljs$core$async58014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58016){
var self__ = this;
var _58016__$1 = this;
return self__.meta58015;
}));

(cljs.core.async.t_cljs$core$async58014.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58014.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async58014.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58014.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async58014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta58015","meta58015",-479160860,null)], null);
}));

(cljs.core.async.t_cljs$core$async58014.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58014");

(cljs.core.async.t_cljs$core$async58014.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async58014");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58014.
 */
cljs.core.async.__GT_t_cljs$core$async58014 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async58014(flag__$1,cb__$1,meta58015){
return (new cljs.core.async.t_cljs$core$async58014(flag__$1,cb__$1,meta58015));
});

}

return (new cljs.core.async.t_cljs$core$async58014(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__58026_SHARP_){
var G__58029 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58026_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__58029) : fret.call(null,G__58029));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__58027_SHARP_){
var G__58030 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58027_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__58030) : fret.call(null,G__58030));
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
var G__60781 = (i + (1));
i = G__60781;
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
var len__5766__auto___60783 = arguments.length;
var i__5767__auto___60784 = (0);
while(true){
if((i__5767__auto___60784 < len__5766__auto___60783)){
args__5772__auto__.push((arguments[i__5767__auto___60784]));

var G__60785 = (i__5767__auto___60784 + (1));
i__5767__auto___60784 = G__60785;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__58036){
var map__58037 = p__58036;
var map__58037__$1 = cljs.core.__destructure_map(map__58037);
var opts = map__58037__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq58033){
var G__58034 = cljs.core.first(seq58033);
var seq58033__$1 = cljs.core.next(seq58033);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58034,seq58033__$1);
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
var G__58042 = arguments.length;
switch (G__58042) {
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
var c__57853__auto___60793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_58076){
var state_val_58078 = (state_58076[(1)]);
if((state_val_58078 === (7))){
var inst_58071 = (state_58076[(2)]);
var state_58076__$1 = state_58076;
var statearr_58081_60794 = state_58076__$1;
(statearr_58081_60794[(2)] = inst_58071);

(statearr_58081_60794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58078 === (1))){
var state_58076__$1 = state_58076;
var statearr_58082_60795 = state_58076__$1;
(statearr_58082_60795[(2)] = null);

(statearr_58082_60795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58078 === (4))){
var inst_58052 = (state_58076[(7)]);
var inst_58052__$1 = (state_58076[(2)]);
var inst_58054 = (inst_58052__$1 == null);
var state_58076__$1 = (function (){var statearr_58084 = state_58076;
(statearr_58084[(7)] = inst_58052__$1);

return statearr_58084;
})();
if(cljs.core.truth_(inst_58054)){
var statearr_58085_60799 = state_58076__$1;
(statearr_58085_60799[(1)] = (5));

} else {
var statearr_58086_60800 = state_58076__$1;
(statearr_58086_60800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58078 === (13))){
var state_58076__$1 = state_58076;
var statearr_58088_60801 = state_58076__$1;
(statearr_58088_60801[(2)] = null);

(statearr_58088_60801[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58078 === (6))){
var inst_58052 = (state_58076[(7)]);
var state_58076__$1 = state_58076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58076__$1,(11),to,inst_58052);
} else {
if((state_val_58078 === (3))){
var inst_58074 = (state_58076[(2)]);
var state_58076__$1 = state_58076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58076__$1,inst_58074);
} else {
if((state_val_58078 === (12))){
var state_58076__$1 = state_58076;
var statearr_58090_60803 = state_58076__$1;
(statearr_58090_60803[(2)] = null);

(statearr_58090_60803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58078 === (2))){
var state_58076__$1 = state_58076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58076__$1,(4),from);
} else {
if((state_val_58078 === (11))){
var inst_58064 = (state_58076[(2)]);
var state_58076__$1 = state_58076;
if(cljs.core.truth_(inst_58064)){
var statearr_58092_60804 = state_58076__$1;
(statearr_58092_60804[(1)] = (12));

} else {
var statearr_58093_60805 = state_58076__$1;
(statearr_58093_60805[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58078 === (9))){
var state_58076__$1 = state_58076;
var statearr_58094_60806 = state_58076__$1;
(statearr_58094_60806[(2)] = null);

(statearr_58094_60806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58078 === (5))){
var state_58076__$1 = state_58076;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58095_60810 = state_58076__$1;
(statearr_58095_60810[(1)] = (8));

} else {
var statearr_58096_60814 = state_58076__$1;
(statearr_58096_60814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58078 === (14))){
var inst_58069 = (state_58076[(2)]);
var state_58076__$1 = state_58076;
var statearr_58098_60815 = state_58076__$1;
(statearr_58098_60815[(2)] = inst_58069);

(statearr_58098_60815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58078 === (10))){
var inst_58061 = (state_58076[(2)]);
var state_58076__$1 = state_58076;
var statearr_58099_60816 = state_58076__$1;
(statearr_58099_60816[(2)] = inst_58061);

(statearr_58099_60816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58078 === (8))){
var inst_58057 = cljs.core.async.close_BANG_(to);
var state_58076__$1 = state_58076;
var statearr_58100_60817 = state_58076__$1;
(statearr_58100_60817[(2)] = inst_58057);

(statearr_58100_60817[(1)] = (10));


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
var cljs$core$async$state_machine__57795__auto__ = null;
var cljs$core$async$state_machine__57795__auto____0 = (function (){
var statearr_58102 = [null,null,null,null,null,null,null,null];
(statearr_58102[(0)] = cljs$core$async$state_machine__57795__auto__);

(statearr_58102[(1)] = (1));

return statearr_58102;
});
var cljs$core$async$state_machine__57795__auto____1 = (function (state_58076){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_58076);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e58103){var ex__57798__auto__ = e58103;
var statearr_58104_60818 = state_58076;
(statearr_58104_60818[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_58076[(4)]))){
var statearr_58105_60819 = state_58076;
(statearr_58105_60819[(1)] = cljs.core.first((state_58076[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60823 = state_58076;
state_58076 = G__60823;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
cljs$core$async$state_machine__57795__auto__ = function(state_58076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57795__auto____1.call(this,state_58076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57795__auto____0;
cljs$core$async$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57795__auto____1;
return cljs$core$async$state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_58106 = f__57854__auto__();
(statearr_58106[(6)] = c__57853__auto___60793);

return statearr_58106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
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
var process__$1 = (function (p__58107){
var vec__58108 = p__58107;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58108,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58108,(1),null);
var job = vec__58108;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__57853__auto___60824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_58115){
var state_val_58116 = (state_58115[(1)]);
if((state_val_58116 === (1))){
var state_58115__$1 = state_58115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58115__$1,(2),res,v);
} else {
if((state_val_58116 === (2))){
var inst_58112 = (state_58115[(2)]);
var inst_58113 = cljs.core.async.close_BANG_(res);
var state_58115__$1 = (function (){var statearr_58117 = state_58115;
(statearr_58117[(7)] = inst_58112);

return statearr_58117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58115__$1,inst_58113);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____0 = (function (){
var statearr_58118 = [null,null,null,null,null,null,null,null];
(statearr_58118[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__);

(statearr_58118[(1)] = (1));

return statearr_58118;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____1 = (function (state_58115){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_58115);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e58119){var ex__57798__auto__ = e58119;
var statearr_58120_60829 = state_58115;
(statearr_58120_60829[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_58115[(4)]))){
var statearr_58121_60830 = state_58115;
(statearr_58121_60830[(1)] = cljs.core.first((state_58115[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60831 = state_58115;
state_58115 = G__60831;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__ = function(state_58115){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____1.call(this,state_58115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_58122 = f__57854__auto__();
(statearr_58122[(6)] = c__57853__auto___60824);

return statearr_58122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__58123){
var vec__58124 = p__58123;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58124,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58124,(1),null);
var job = vec__58124;
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
var n__5633__auto___60832 = n;
var __60833 = (0);
while(true){
if((__60833 < n__5633__auto___60832)){
var G__58127_60834 = type;
var G__58127_60835__$1 = (((G__58127_60834 instanceof cljs.core.Keyword))?G__58127_60834.fqn:null);
switch (G__58127_60835__$1) {
case "compute":
var c__57853__auto___60837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__60833,c__57853__auto___60837,G__58127_60834,G__58127_60835__$1,n__5633__auto___60832,jobs,results,process__$1,async){
return (function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = ((function (__60833,c__57853__auto___60837,G__58127_60834,G__58127_60835__$1,n__5633__auto___60832,jobs,results,process__$1,async){
return (function (state_58140){
var state_val_58141 = (state_58140[(1)]);
if((state_val_58141 === (1))){
var state_58140__$1 = state_58140;
var statearr_58142_60838 = state_58140__$1;
(statearr_58142_60838[(2)] = null);

(statearr_58142_60838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58141 === (2))){
var state_58140__$1 = state_58140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58140__$1,(4),jobs);
} else {
if((state_val_58141 === (3))){
var inst_58138 = (state_58140[(2)]);
var state_58140__$1 = state_58140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58140__$1,inst_58138);
} else {
if((state_val_58141 === (4))){
var inst_58130 = (state_58140[(2)]);
var inst_58131 = process__$1(inst_58130);
var state_58140__$1 = state_58140;
if(cljs.core.truth_(inst_58131)){
var statearr_58143_60839 = state_58140__$1;
(statearr_58143_60839[(1)] = (5));

} else {
var statearr_58144_60840 = state_58140__$1;
(statearr_58144_60840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58141 === (5))){
var state_58140__$1 = state_58140;
var statearr_58145_60841 = state_58140__$1;
(statearr_58145_60841[(2)] = null);

(statearr_58145_60841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58141 === (6))){
var state_58140__$1 = state_58140;
var statearr_58146_60842 = state_58140__$1;
(statearr_58146_60842[(2)] = null);

(statearr_58146_60842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58141 === (7))){
var inst_58136 = (state_58140[(2)]);
var state_58140__$1 = state_58140;
var statearr_58147_60843 = state_58140__$1;
(statearr_58147_60843[(2)] = inst_58136);

(statearr_58147_60843[(1)] = (3));


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
});})(__60833,c__57853__auto___60837,G__58127_60834,G__58127_60835__$1,n__5633__auto___60832,jobs,results,process__$1,async))
;
return ((function (__60833,switch__57794__auto__,c__57853__auto___60837,G__58127_60834,G__58127_60835__$1,n__5633__auto___60832,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____0 = (function (){
var statearr_58148 = [null,null,null,null,null,null,null];
(statearr_58148[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__);

(statearr_58148[(1)] = (1));

return statearr_58148;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____1 = (function (state_58140){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_58140);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e58149){var ex__57798__auto__ = e58149;
var statearr_58152_60844 = state_58140;
(statearr_58152_60844[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_58140[(4)]))){
var statearr_58153_60845 = state_58140;
(statearr_58153_60845[(1)] = cljs.core.first((state_58140[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60846 = state_58140;
state_58140 = G__60846;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__ = function(state_58140){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____1.call(this,state_58140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__;
})()
;})(__60833,switch__57794__auto__,c__57853__auto___60837,G__58127_60834,G__58127_60835__$1,n__5633__auto___60832,jobs,results,process__$1,async))
})();
var state__57855__auto__ = (function (){var statearr_58154 = f__57854__auto__();
(statearr_58154[(6)] = c__57853__auto___60837);

return statearr_58154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
});})(__60833,c__57853__auto___60837,G__58127_60834,G__58127_60835__$1,n__5633__auto___60832,jobs,results,process__$1,async))
);


break;
case "async":
var c__57853__auto___60847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__60833,c__57853__auto___60847,G__58127_60834,G__58127_60835__$1,n__5633__auto___60832,jobs,results,process__$1,async){
return (function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = ((function (__60833,c__57853__auto___60847,G__58127_60834,G__58127_60835__$1,n__5633__auto___60832,jobs,results,process__$1,async){
return (function (state_58167){
var state_val_58168 = (state_58167[(1)]);
if((state_val_58168 === (1))){
var state_58167__$1 = state_58167;
var statearr_58169_60848 = state_58167__$1;
(statearr_58169_60848[(2)] = null);

(statearr_58169_60848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58168 === (2))){
var state_58167__$1 = state_58167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58167__$1,(4),jobs);
} else {
if((state_val_58168 === (3))){
var inst_58165 = (state_58167[(2)]);
var state_58167__$1 = state_58167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58167__$1,inst_58165);
} else {
if((state_val_58168 === (4))){
var inst_58157 = (state_58167[(2)]);
var inst_58158 = async(inst_58157);
var state_58167__$1 = state_58167;
if(cljs.core.truth_(inst_58158)){
var statearr_58173_60855 = state_58167__$1;
(statearr_58173_60855[(1)] = (5));

} else {
var statearr_58174_60856 = state_58167__$1;
(statearr_58174_60856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58168 === (5))){
var state_58167__$1 = state_58167;
var statearr_58175_60857 = state_58167__$1;
(statearr_58175_60857[(2)] = null);

(statearr_58175_60857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58168 === (6))){
var state_58167__$1 = state_58167;
var statearr_58176_60858 = state_58167__$1;
(statearr_58176_60858[(2)] = null);

(statearr_58176_60858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58168 === (7))){
var inst_58163 = (state_58167[(2)]);
var state_58167__$1 = state_58167;
var statearr_58177_60859 = state_58167__$1;
(statearr_58177_60859[(2)] = inst_58163);

(statearr_58177_60859[(1)] = (3));


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
});})(__60833,c__57853__auto___60847,G__58127_60834,G__58127_60835__$1,n__5633__auto___60832,jobs,results,process__$1,async))
;
return ((function (__60833,switch__57794__auto__,c__57853__auto___60847,G__58127_60834,G__58127_60835__$1,n__5633__auto___60832,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____0 = (function (){
var statearr_58181 = [null,null,null,null,null,null,null];
(statearr_58181[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__);

(statearr_58181[(1)] = (1));

return statearr_58181;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____1 = (function (state_58167){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_58167);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e58182){var ex__57798__auto__ = e58182;
var statearr_58183_60861 = state_58167;
(statearr_58183_60861[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_58167[(4)]))){
var statearr_58186_60862 = state_58167;
(statearr_58186_60862[(1)] = cljs.core.first((state_58167[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60863 = state_58167;
state_58167 = G__60863;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__ = function(state_58167){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____1.call(this,state_58167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__;
})()
;})(__60833,switch__57794__auto__,c__57853__auto___60847,G__58127_60834,G__58127_60835__$1,n__5633__auto___60832,jobs,results,process__$1,async))
})();
var state__57855__auto__ = (function (){var statearr_58193 = f__57854__auto__();
(statearr_58193[(6)] = c__57853__auto___60847);

return statearr_58193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
});})(__60833,c__57853__auto___60847,G__58127_60834,G__58127_60835__$1,n__5633__auto___60832,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58127_60835__$1)].join('')));

}

var G__60864 = (__60833 + (1));
__60833 = G__60864;
continue;
} else {
}
break;
}

var c__57853__auto___60865 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_58228){
var state_val_58229 = (state_58228[(1)]);
if((state_val_58229 === (7))){
var inst_58221 = (state_58228[(2)]);
var state_58228__$1 = state_58228;
var statearr_58230_60866 = state_58228__$1;
(statearr_58230_60866[(2)] = inst_58221);

(statearr_58230_60866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58229 === (1))){
var state_58228__$1 = state_58228;
var statearr_58232_60868 = state_58228__$1;
(statearr_58232_60868[(2)] = null);

(statearr_58232_60868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58229 === (4))){
var inst_58201 = (state_58228[(7)]);
var inst_58201__$1 = (state_58228[(2)]);
var inst_58202 = (inst_58201__$1 == null);
var state_58228__$1 = (function (){var statearr_58236 = state_58228;
(statearr_58236[(7)] = inst_58201__$1);

return statearr_58236;
})();
if(cljs.core.truth_(inst_58202)){
var statearr_58237_60876 = state_58228__$1;
(statearr_58237_60876[(1)] = (5));

} else {
var statearr_58238_60877 = state_58228__$1;
(statearr_58238_60877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58229 === (6))){
var inst_58206 = (state_58228[(8)]);
var inst_58201 = (state_58228[(7)]);
var inst_58206__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_58210 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_58211 = [inst_58201,inst_58206__$1];
var inst_58212 = (new cljs.core.PersistentVector(null,2,(5),inst_58210,inst_58211,null));
var state_58228__$1 = (function (){var statearr_58242 = state_58228;
(statearr_58242[(8)] = inst_58206__$1);

return statearr_58242;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58228__$1,(8),jobs,inst_58212);
} else {
if((state_val_58229 === (3))){
var inst_58223 = (state_58228[(2)]);
var state_58228__$1 = state_58228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58228__$1,inst_58223);
} else {
if((state_val_58229 === (2))){
var state_58228__$1 = state_58228;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58228__$1,(4),from);
} else {
if((state_val_58229 === (9))){
var inst_58217 = (state_58228[(2)]);
var state_58228__$1 = (function (){var statearr_58247 = state_58228;
(statearr_58247[(9)] = inst_58217);

return statearr_58247;
})();
var statearr_58248_60878 = state_58228__$1;
(statearr_58248_60878[(2)] = null);

(statearr_58248_60878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58229 === (5))){
var inst_58204 = cljs.core.async.close_BANG_(jobs);
var state_58228__$1 = state_58228;
var statearr_58249_60879 = state_58228__$1;
(statearr_58249_60879[(2)] = inst_58204);

(statearr_58249_60879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58229 === (8))){
var inst_58206 = (state_58228[(8)]);
var inst_58214 = (state_58228[(2)]);
var state_58228__$1 = (function (){var statearr_58250 = state_58228;
(statearr_58250[(10)] = inst_58214);

return statearr_58250;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58228__$1,(9),results,inst_58206);
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
var cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____0 = (function (){
var statearr_58254 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58254[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__);

(statearr_58254[(1)] = (1));

return statearr_58254;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____1 = (function (state_58228){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_58228);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e58255){var ex__57798__auto__ = e58255;
var statearr_58256_60882 = state_58228;
(statearr_58256_60882[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_58228[(4)]))){
var statearr_58257_60885 = state_58228;
(statearr_58257_60885[(1)] = cljs.core.first((state_58228[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60886 = state_58228;
state_58228 = G__60886;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__ = function(state_58228){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____1.call(this,state_58228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_58261 = f__57854__auto__();
(statearr_58261[(6)] = c__57853__auto___60865);

return statearr_58261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));


var c__57853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_58306){
var state_val_58307 = (state_58306[(1)]);
if((state_val_58307 === (7))){
var inst_58302 = (state_58306[(2)]);
var state_58306__$1 = state_58306;
var statearr_58314_60888 = state_58306__$1;
(statearr_58314_60888[(2)] = inst_58302);

(statearr_58314_60888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58307 === (20))){
var state_58306__$1 = state_58306;
var statearr_58315_60890 = state_58306__$1;
(statearr_58315_60890[(2)] = null);

(statearr_58315_60890[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58307 === (1))){
var state_58306__$1 = state_58306;
var statearr_58316_60891 = state_58306__$1;
(statearr_58316_60891[(2)] = null);

(statearr_58316_60891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58307 === (4))){
var inst_58264 = (state_58306[(7)]);
var inst_58264__$1 = (state_58306[(2)]);
var inst_58267 = (inst_58264__$1 == null);
var state_58306__$1 = (function (){var statearr_58319 = state_58306;
(statearr_58319[(7)] = inst_58264__$1);

return statearr_58319;
})();
if(cljs.core.truth_(inst_58267)){
var statearr_58320_60892 = state_58306__$1;
(statearr_58320_60892[(1)] = (5));

} else {
var statearr_58322_60893 = state_58306__$1;
(statearr_58322_60893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58307 === (15))){
var inst_58283 = (state_58306[(8)]);
var state_58306__$1 = state_58306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58306__$1,(18),to,inst_58283);
} else {
if((state_val_58307 === (21))){
var inst_58297 = (state_58306[(2)]);
var state_58306__$1 = state_58306;
var statearr_58328_60894 = state_58306__$1;
(statearr_58328_60894[(2)] = inst_58297);

(statearr_58328_60894[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58307 === (13))){
var inst_58299 = (state_58306[(2)]);
var state_58306__$1 = (function (){var statearr_58329 = state_58306;
(statearr_58329[(9)] = inst_58299);

return statearr_58329;
})();
var statearr_58330_60898 = state_58306__$1;
(statearr_58330_60898[(2)] = null);

(statearr_58330_60898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58307 === (6))){
var inst_58264 = (state_58306[(7)]);
var state_58306__$1 = state_58306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58306__$1,(11),inst_58264);
} else {
if((state_val_58307 === (17))){
var inst_58291 = (state_58306[(2)]);
var state_58306__$1 = state_58306;
if(cljs.core.truth_(inst_58291)){
var statearr_58333_60899 = state_58306__$1;
(statearr_58333_60899[(1)] = (19));

} else {
var statearr_58334_60903 = state_58306__$1;
(statearr_58334_60903[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58307 === (3))){
var inst_58304 = (state_58306[(2)]);
var state_58306__$1 = state_58306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58306__$1,inst_58304);
} else {
if((state_val_58307 === (12))){
var inst_58280 = (state_58306[(10)]);
var state_58306__$1 = state_58306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58306__$1,(14),inst_58280);
} else {
if((state_val_58307 === (2))){
var state_58306__$1 = state_58306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58306__$1,(4),results);
} else {
if((state_val_58307 === (19))){
var state_58306__$1 = state_58306;
var statearr_58339_60906 = state_58306__$1;
(statearr_58339_60906[(2)] = null);

(statearr_58339_60906[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58307 === (11))){
var inst_58280 = (state_58306[(2)]);
var state_58306__$1 = (function (){var statearr_58340 = state_58306;
(statearr_58340[(10)] = inst_58280);

return statearr_58340;
})();
var statearr_58341_60907 = state_58306__$1;
(statearr_58341_60907[(2)] = null);

(statearr_58341_60907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58307 === (9))){
var state_58306__$1 = state_58306;
var statearr_58346_60908 = state_58306__$1;
(statearr_58346_60908[(2)] = null);

(statearr_58346_60908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58307 === (5))){
var state_58306__$1 = state_58306;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58347_60909 = state_58306__$1;
(statearr_58347_60909[(1)] = (8));

} else {
var statearr_58348_60910 = state_58306__$1;
(statearr_58348_60910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58307 === (14))){
var inst_58283 = (state_58306[(8)]);
var inst_58285 = (state_58306[(11)]);
var inst_58283__$1 = (state_58306[(2)]);
var inst_58284 = (inst_58283__$1 == null);
var inst_58285__$1 = cljs.core.not(inst_58284);
var state_58306__$1 = (function (){var statearr_58349 = state_58306;
(statearr_58349[(8)] = inst_58283__$1);

(statearr_58349[(11)] = inst_58285__$1);

return statearr_58349;
})();
if(inst_58285__$1){
var statearr_58350_60911 = state_58306__$1;
(statearr_58350_60911[(1)] = (15));

} else {
var statearr_58351_60913 = state_58306__$1;
(statearr_58351_60913[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58307 === (16))){
var inst_58285 = (state_58306[(11)]);
var state_58306__$1 = state_58306;
var statearr_58355_60914 = state_58306__$1;
(statearr_58355_60914[(2)] = inst_58285);

(statearr_58355_60914[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58307 === (10))){
var inst_58276 = (state_58306[(2)]);
var state_58306__$1 = state_58306;
var statearr_58356_60916 = state_58306__$1;
(statearr_58356_60916[(2)] = inst_58276);

(statearr_58356_60916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58307 === (18))){
var inst_58288 = (state_58306[(2)]);
var state_58306__$1 = state_58306;
var statearr_58357_60918 = state_58306__$1;
(statearr_58357_60918[(2)] = inst_58288);

(statearr_58357_60918[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58307 === (8))){
var inst_58273 = cljs.core.async.close_BANG_(to);
var state_58306__$1 = state_58306;
var statearr_58358_60920 = state_58306__$1;
(statearr_58358_60920[(2)] = inst_58273);

(statearr_58358_60920[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____0 = (function (){
var statearr_58362 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58362[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__);

(statearr_58362[(1)] = (1));

return statearr_58362;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____1 = (function (state_58306){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_58306);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e58363){var ex__57798__auto__ = e58363;
var statearr_58364_60923 = state_58306;
(statearr_58364_60923[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_58306[(4)]))){
var statearr_58365_60925 = state_58306;
(statearr_58365_60925[(1)] = cljs.core.first((state_58306[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60928 = state_58306;
state_58306 = G__60928;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__ = function(state_58306){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____1.call(this,state_58306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_58368 = f__57854__auto__();
(statearr_58368[(6)] = c__57853__auto__);

return statearr_58368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));

return c__57853__auto__;
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
var G__58373 = arguments.length;
switch (G__58373) {
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
var G__58380 = arguments.length;
switch (G__58380) {
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
var G__58383 = arguments.length;
switch (G__58383) {
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
var c__57853__auto___60943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_58411){
var state_val_58412 = (state_58411[(1)]);
if((state_val_58412 === (7))){
var inst_58407 = (state_58411[(2)]);
var state_58411__$1 = state_58411;
var statearr_58413_60945 = state_58411__$1;
(statearr_58413_60945[(2)] = inst_58407);

(statearr_58413_60945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58412 === (1))){
var state_58411__$1 = state_58411;
var statearr_58414_60946 = state_58411__$1;
(statearr_58414_60946[(2)] = null);

(statearr_58414_60946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58412 === (4))){
var inst_58388 = (state_58411[(7)]);
var inst_58388__$1 = (state_58411[(2)]);
var inst_58389 = (inst_58388__$1 == null);
var state_58411__$1 = (function (){var statearr_58418 = state_58411;
(statearr_58418[(7)] = inst_58388__$1);

return statearr_58418;
})();
if(cljs.core.truth_(inst_58389)){
var statearr_58419_60950 = state_58411__$1;
(statearr_58419_60950[(1)] = (5));

} else {
var statearr_58420_60951 = state_58411__$1;
(statearr_58420_60951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58412 === (13))){
var state_58411__$1 = state_58411;
var statearr_58421_60952 = state_58411__$1;
(statearr_58421_60952[(2)] = null);

(statearr_58421_60952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58412 === (6))){
var inst_58388 = (state_58411[(7)]);
var inst_58394 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_58388) : p.call(null,inst_58388));
var state_58411__$1 = state_58411;
if(cljs.core.truth_(inst_58394)){
var statearr_58422_60953 = state_58411__$1;
(statearr_58422_60953[(1)] = (9));

} else {
var statearr_58423_60958 = state_58411__$1;
(statearr_58423_60958[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58412 === (3))){
var inst_58409 = (state_58411[(2)]);
var state_58411__$1 = state_58411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58411__$1,inst_58409);
} else {
if((state_val_58412 === (12))){
var state_58411__$1 = state_58411;
var statearr_58424_60960 = state_58411__$1;
(statearr_58424_60960[(2)] = null);

(statearr_58424_60960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58412 === (2))){
var state_58411__$1 = state_58411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58411__$1,(4),ch);
} else {
if((state_val_58412 === (11))){
var inst_58388 = (state_58411[(7)]);
var inst_58398 = (state_58411[(2)]);
var state_58411__$1 = state_58411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58411__$1,(8),inst_58398,inst_58388);
} else {
if((state_val_58412 === (9))){
var state_58411__$1 = state_58411;
var statearr_58425_60961 = state_58411__$1;
(statearr_58425_60961[(2)] = tc);

(statearr_58425_60961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58412 === (5))){
var inst_58391 = cljs.core.async.close_BANG_(tc);
var inst_58392 = cljs.core.async.close_BANG_(fc);
var state_58411__$1 = (function (){var statearr_58426 = state_58411;
(statearr_58426[(8)] = inst_58391);

return statearr_58426;
})();
var statearr_58429_60962 = state_58411__$1;
(statearr_58429_60962[(2)] = inst_58392);

(statearr_58429_60962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58412 === (14))){
var inst_58405 = (state_58411[(2)]);
var state_58411__$1 = state_58411;
var statearr_58432_60963 = state_58411__$1;
(statearr_58432_60963[(2)] = inst_58405);

(statearr_58432_60963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58412 === (10))){
var state_58411__$1 = state_58411;
var statearr_58433_60964 = state_58411__$1;
(statearr_58433_60964[(2)] = fc);

(statearr_58433_60964[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58412 === (8))){
var inst_58400 = (state_58411[(2)]);
var state_58411__$1 = state_58411;
if(cljs.core.truth_(inst_58400)){
var statearr_58435_60966 = state_58411__$1;
(statearr_58435_60966[(1)] = (12));

} else {
var statearr_58436_60967 = state_58411__$1;
(statearr_58436_60967[(1)] = (13));

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
var cljs$core$async$state_machine__57795__auto__ = null;
var cljs$core$async$state_machine__57795__auto____0 = (function (){
var statearr_58437 = [null,null,null,null,null,null,null,null,null];
(statearr_58437[(0)] = cljs$core$async$state_machine__57795__auto__);

(statearr_58437[(1)] = (1));

return statearr_58437;
});
var cljs$core$async$state_machine__57795__auto____1 = (function (state_58411){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_58411);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e58438){var ex__57798__auto__ = e58438;
var statearr_58439_60971 = state_58411;
(statearr_58439_60971[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_58411[(4)]))){
var statearr_58441_60972 = state_58411;
(statearr_58441_60972[(1)] = cljs.core.first((state_58411[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60973 = state_58411;
state_58411 = G__60973;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
cljs$core$async$state_machine__57795__auto__ = function(state_58411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57795__auto____1.call(this,state_58411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57795__auto____0;
cljs$core$async$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57795__auto____1;
return cljs$core$async$state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_58442 = f__57854__auto__();
(statearr_58442[(6)] = c__57853__auto___60943);

return statearr_58442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
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
var c__57853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_58473){
var state_val_58474 = (state_58473[(1)]);
if((state_val_58474 === (7))){
var inst_58469 = (state_58473[(2)]);
var state_58473__$1 = state_58473;
var statearr_58478_60976 = state_58473__$1;
(statearr_58478_60976[(2)] = inst_58469);

(statearr_58478_60976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58474 === (1))){
var inst_58447 = init;
var inst_58448 = inst_58447;
var state_58473__$1 = (function (){var statearr_58482 = state_58473;
(statearr_58482[(7)] = inst_58448);

return statearr_58482;
})();
var statearr_58483_60977 = state_58473__$1;
(statearr_58483_60977[(2)] = null);

(statearr_58483_60977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58474 === (4))){
var inst_58455 = (state_58473[(8)]);
var inst_58455__$1 = (state_58473[(2)]);
var inst_58456 = (inst_58455__$1 == null);
var state_58473__$1 = (function (){var statearr_58485 = state_58473;
(statearr_58485[(8)] = inst_58455__$1);

return statearr_58485;
})();
if(cljs.core.truth_(inst_58456)){
var statearr_58487_60978 = state_58473__$1;
(statearr_58487_60978[(1)] = (5));

} else {
var statearr_58491_60979 = state_58473__$1;
(statearr_58491_60979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58474 === (6))){
var inst_58448 = (state_58473[(7)]);
var inst_58455 = (state_58473[(8)]);
var inst_58459 = (state_58473[(9)]);
var inst_58459__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_58448,inst_58455) : f.call(null,inst_58448,inst_58455));
var inst_58460 = cljs.core.reduced_QMARK_(inst_58459__$1);
var state_58473__$1 = (function (){var statearr_58492 = state_58473;
(statearr_58492[(9)] = inst_58459__$1);

return statearr_58492;
})();
if(inst_58460){
var statearr_58493_60980 = state_58473__$1;
(statearr_58493_60980[(1)] = (8));

} else {
var statearr_58494_60981 = state_58473__$1;
(statearr_58494_60981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58474 === (3))){
var inst_58471 = (state_58473[(2)]);
var state_58473__$1 = state_58473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58473__$1,inst_58471);
} else {
if((state_val_58474 === (2))){
var state_58473__$1 = state_58473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58473__$1,(4),ch);
} else {
if((state_val_58474 === (9))){
var inst_58459 = (state_58473[(9)]);
var inst_58448 = inst_58459;
var state_58473__$1 = (function (){var statearr_58503 = state_58473;
(statearr_58503[(7)] = inst_58448);

return statearr_58503;
})();
var statearr_58504_60992 = state_58473__$1;
(statearr_58504_60992[(2)] = null);

(statearr_58504_60992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58474 === (5))){
var inst_58448 = (state_58473[(7)]);
var state_58473__$1 = state_58473;
var statearr_58506_60993 = state_58473__$1;
(statearr_58506_60993[(2)] = inst_58448);

(statearr_58506_60993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58474 === (10))){
var inst_58467 = (state_58473[(2)]);
var state_58473__$1 = state_58473;
var statearr_58507_60994 = state_58473__$1;
(statearr_58507_60994[(2)] = inst_58467);

(statearr_58507_60994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58474 === (8))){
var inst_58459 = (state_58473[(9)]);
var inst_58463 = cljs.core.deref(inst_58459);
var state_58473__$1 = state_58473;
var statearr_58508_60998 = state_58473__$1;
(statearr_58508_60998[(2)] = inst_58463);

(statearr_58508_60998[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__57795__auto__ = null;
var cljs$core$async$reduce_$_state_machine__57795__auto____0 = (function (){
var statearr_58509 = [null,null,null,null,null,null,null,null,null,null];
(statearr_58509[(0)] = cljs$core$async$reduce_$_state_machine__57795__auto__);

(statearr_58509[(1)] = (1));

return statearr_58509;
});
var cljs$core$async$reduce_$_state_machine__57795__auto____1 = (function (state_58473){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_58473);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e58513){var ex__57798__auto__ = e58513;
var statearr_58514_61002 = state_58473;
(statearr_58514_61002[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_58473[(4)]))){
var statearr_58515_61003 = state_58473;
(statearr_58515_61003[(1)] = cljs.core.first((state_58473[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61005 = state_58473;
state_58473 = G__61005;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__57795__auto__ = function(state_58473){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__57795__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__57795__auto____1.call(this,state_58473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__57795__auto____0;
cljs$core$async$reduce_$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__57795__auto____1;
return cljs$core$async$reduce_$_state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_58518 = f__57854__auto__();
(statearr_58518[(6)] = c__57853__auto__);

return statearr_58518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));

return c__57853__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__57853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_58539){
var state_val_58540 = (state_58539[(1)]);
if((state_val_58540 === (1))){
var inst_58534 = cljs.core.async.reduce(f__$1,init,ch);
var state_58539__$1 = state_58539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58539__$1,(2),inst_58534);
} else {
if((state_val_58540 === (2))){
var inst_58536 = (state_58539[(2)]);
var inst_58537 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_58536) : f__$1.call(null,inst_58536));
var state_58539__$1 = state_58539;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58539__$1,inst_58537);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__57795__auto__ = null;
var cljs$core$async$transduce_$_state_machine__57795__auto____0 = (function (){
var statearr_58543 = [null,null,null,null,null,null,null];
(statearr_58543[(0)] = cljs$core$async$transduce_$_state_machine__57795__auto__);

(statearr_58543[(1)] = (1));

return statearr_58543;
});
var cljs$core$async$transduce_$_state_machine__57795__auto____1 = (function (state_58539){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_58539);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e58544){var ex__57798__auto__ = e58544;
var statearr_58545_61017 = state_58539;
(statearr_58545_61017[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_58539[(4)]))){
var statearr_58546_61018 = state_58539;
(statearr_58546_61018[(1)] = cljs.core.first((state_58539[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61021 = state_58539;
state_58539 = G__61021;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__57795__auto__ = function(state_58539){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__57795__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__57795__auto____1.call(this,state_58539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__57795__auto____0;
cljs$core$async$transduce_$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__57795__auto____1;
return cljs$core$async$transduce_$_state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_58549 = f__57854__auto__();
(statearr_58549[(6)] = c__57853__auto__);

return statearr_58549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));

return c__57853__auto__;
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
var G__58551 = arguments.length;
switch (G__58551) {
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
var c__57853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_58583){
var state_val_58584 = (state_58583[(1)]);
if((state_val_58584 === (7))){
var inst_58562 = (state_58583[(2)]);
var state_58583__$1 = state_58583;
var statearr_58589_61033 = state_58583__$1;
(statearr_58589_61033[(2)] = inst_58562);

(statearr_58589_61033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58584 === (1))){
var inst_58553 = cljs.core.seq(coll);
var inst_58554 = inst_58553;
var state_58583__$1 = (function (){var statearr_58592 = state_58583;
(statearr_58592[(7)] = inst_58554);

return statearr_58592;
})();
var statearr_58593_61038 = state_58583__$1;
(statearr_58593_61038[(2)] = null);

(statearr_58593_61038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58584 === (4))){
var inst_58554 = (state_58583[(7)]);
var inst_58560 = cljs.core.first(inst_58554);
var state_58583__$1 = state_58583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58583__$1,(7),ch,inst_58560);
} else {
if((state_val_58584 === (13))){
var inst_58576 = (state_58583[(2)]);
var state_58583__$1 = state_58583;
var statearr_58597_61040 = state_58583__$1;
(statearr_58597_61040[(2)] = inst_58576);

(statearr_58597_61040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58584 === (6))){
var inst_58565 = (state_58583[(2)]);
var state_58583__$1 = state_58583;
if(cljs.core.truth_(inst_58565)){
var statearr_58598_61042 = state_58583__$1;
(statearr_58598_61042[(1)] = (8));

} else {
var statearr_58600_61043 = state_58583__$1;
(statearr_58600_61043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58584 === (3))){
var inst_58581 = (state_58583[(2)]);
var state_58583__$1 = state_58583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58583__$1,inst_58581);
} else {
if((state_val_58584 === (12))){
var state_58583__$1 = state_58583;
var statearr_58601_61045 = state_58583__$1;
(statearr_58601_61045[(2)] = null);

(statearr_58601_61045[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58584 === (2))){
var inst_58554 = (state_58583[(7)]);
var state_58583__$1 = state_58583;
if(cljs.core.truth_(inst_58554)){
var statearr_58602_61047 = state_58583__$1;
(statearr_58602_61047[(1)] = (4));

} else {
var statearr_58603_61048 = state_58583__$1;
(statearr_58603_61048[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58584 === (11))){
var inst_58573 = cljs.core.async.close_BANG_(ch);
var state_58583__$1 = state_58583;
var statearr_58604_61049 = state_58583__$1;
(statearr_58604_61049[(2)] = inst_58573);

(statearr_58604_61049[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58584 === (9))){
var state_58583__$1 = state_58583;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58608_61051 = state_58583__$1;
(statearr_58608_61051[(1)] = (11));

} else {
var statearr_58609_61053 = state_58583__$1;
(statearr_58609_61053[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58584 === (5))){
var inst_58554 = (state_58583[(7)]);
var state_58583__$1 = state_58583;
var statearr_58612_61055 = state_58583__$1;
(statearr_58612_61055[(2)] = inst_58554);

(statearr_58612_61055[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58584 === (10))){
var inst_58578 = (state_58583[(2)]);
var state_58583__$1 = state_58583;
var statearr_58616_61057 = state_58583__$1;
(statearr_58616_61057[(2)] = inst_58578);

(statearr_58616_61057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58584 === (8))){
var inst_58554 = (state_58583[(7)]);
var inst_58567 = cljs.core.next(inst_58554);
var inst_58554__$1 = inst_58567;
var state_58583__$1 = (function (){var statearr_58617 = state_58583;
(statearr_58617[(7)] = inst_58554__$1);

return statearr_58617;
})();
var statearr_58618_61058 = state_58583__$1;
(statearr_58618_61058[(2)] = null);

(statearr_58618_61058[(1)] = (2));


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
var cljs$core$async$state_machine__57795__auto__ = null;
var cljs$core$async$state_machine__57795__auto____0 = (function (){
var statearr_58622 = [null,null,null,null,null,null,null,null];
(statearr_58622[(0)] = cljs$core$async$state_machine__57795__auto__);

(statearr_58622[(1)] = (1));

return statearr_58622;
});
var cljs$core$async$state_machine__57795__auto____1 = (function (state_58583){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_58583);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e58623){var ex__57798__auto__ = e58623;
var statearr_58626_61062 = state_58583;
(statearr_58626_61062[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_58583[(4)]))){
var statearr_58627_61064 = state_58583;
(statearr_58627_61064[(1)] = cljs.core.first((state_58583[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61066 = state_58583;
state_58583 = G__61066;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
cljs$core$async$state_machine__57795__auto__ = function(state_58583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57795__auto____1.call(this,state_58583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57795__auto____0;
cljs$core$async$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57795__auto____1;
return cljs$core$async$state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_58629 = f__57854__auto__();
(statearr_58629[(6)] = c__57853__auto__);

return statearr_58629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));

return c__57853__auto__;
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
var G__58660 = arguments.length;
switch (G__58660) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_61072 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_61072(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_61073 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_61073(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_61076 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_61076(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_61082 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_61082(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58681 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58681 = (function (ch,cs,meta58682){
this.ch = ch;
this.cs = cs;
this.meta58682 = meta58682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58683,meta58682__$1){
var self__ = this;
var _58683__$1 = this;
return (new cljs.core.async.t_cljs$core$async58681(self__.ch,self__.cs,meta58682__$1));
}));

(cljs.core.async.t_cljs$core$async58681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58683){
var self__ = this;
var _58683__$1 = this;
return self__.meta58682;
}));

(cljs.core.async.t_cljs$core$async58681.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58681.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async58681.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58681.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async58681.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async58681.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async58681.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta58682","meta58682",-1818911368,null)], null);
}));

(cljs.core.async.t_cljs$core$async58681.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58681");

(cljs.core.async.t_cljs$core$async58681.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async58681");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58681.
 */
cljs.core.async.__GT_t_cljs$core$async58681 = (function cljs$core$async$mult_$___GT_t_cljs$core$async58681(ch__$1,cs__$1,meta58682){
return (new cljs.core.async.t_cljs$core$async58681(ch__$1,cs__$1,meta58682));
});

}

return (new cljs.core.async.t_cljs$core$async58681(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__57853__auto___61091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_58820){
var state_val_58821 = (state_58820[(1)]);
if((state_val_58821 === (7))){
var inst_58816 = (state_58820[(2)]);
var state_58820__$1 = state_58820;
var statearr_58823_61092 = state_58820__$1;
(statearr_58823_61092[(2)] = inst_58816);

(statearr_58823_61092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (20))){
var inst_58721 = (state_58820[(7)]);
var inst_58733 = cljs.core.first(inst_58721);
var inst_58734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58733,(0),null);
var inst_58735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58733,(1),null);
var state_58820__$1 = (function (){var statearr_58828 = state_58820;
(statearr_58828[(8)] = inst_58734);

return statearr_58828;
})();
if(cljs.core.truth_(inst_58735)){
var statearr_58829_61098 = state_58820__$1;
(statearr_58829_61098[(1)] = (22));

} else {
var statearr_58830_61099 = state_58820__$1;
(statearr_58830_61099[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (27))){
var inst_58690 = (state_58820[(9)]);
var inst_58763 = (state_58820[(10)]);
var inst_58765 = (state_58820[(11)]);
var inst_58770 = (state_58820[(12)]);
var inst_58770__$1 = cljs.core._nth(inst_58763,inst_58765);
var inst_58771 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_58770__$1,inst_58690,done);
var state_58820__$1 = (function (){var statearr_58831 = state_58820;
(statearr_58831[(12)] = inst_58770__$1);

return statearr_58831;
})();
if(cljs.core.truth_(inst_58771)){
var statearr_58832_61105 = state_58820__$1;
(statearr_58832_61105[(1)] = (30));

} else {
var statearr_58833_61107 = state_58820__$1;
(statearr_58833_61107[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (1))){
var state_58820__$1 = state_58820;
var statearr_58834_61108 = state_58820__$1;
(statearr_58834_61108[(2)] = null);

(statearr_58834_61108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (24))){
var inst_58721 = (state_58820[(7)]);
var inst_58740 = (state_58820[(2)]);
var inst_58741 = cljs.core.next(inst_58721);
var inst_58699 = inst_58741;
var inst_58700 = null;
var inst_58701 = (0);
var inst_58702 = (0);
var state_58820__$1 = (function (){var statearr_58835 = state_58820;
(statearr_58835[(13)] = inst_58701);

(statearr_58835[(14)] = inst_58699);

(statearr_58835[(15)] = inst_58700);

(statearr_58835[(16)] = inst_58740);

(statearr_58835[(17)] = inst_58702);

return statearr_58835;
})();
var statearr_58836_61112 = state_58820__$1;
(statearr_58836_61112[(2)] = null);

(statearr_58836_61112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (39))){
var state_58820__$1 = state_58820;
var statearr_58840_61117 = state_58820__$1;
(statearr_58840_61117[(2)] = null);

(statearr_58840_61117[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (4))){
var inst_58690 = (state_58820[(9)]);
var inst_58690__$1 = (state_58820[(2)]);
var inst_58691 = (inst_58690__$1 == null);
var state_58820__$1 = (function (){var statearr_58841 = state_58820;
(statearr_58841[(9)] = inst_58690__$1);

return statearr_58841;
})();
if(cljs.core.truth_(inst_58691)){
var statearr_58842_61120 = state_58820__$1;
(statearr_58842_61120[(1)] = (5));

} else {
var statearr_58843_61126 = state_58820__$1;
(statearr_58843_61126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (15))){
var inst_58701 = (state_58820[(13)]);
var inst_58699 = (state_58820[(14)]);
var inst_58700 = (state_58820[(15)]);
var inst_58702 = (state_58820[(17)]);
var inst_58717 = (state_58820[(2)]);
var inst_58718 = (inst_58702 + (1));
var tmp58837 = inst_58701;
var tmp58838 = inst_58699;
var tmp58839 = inst_58700;
var inst_58699__$1 = tmp58838;
var inst_58700__$1 = tmp58839;
var inst_58701__$1 = tmp58837;
var inst_58702__$1 = inst_58718;
var state_58820__$1 = (function (){var statearr_58844 = state_58820;
(statearr_58844[(13)] = inst_58701__$1);

(statearr_58844[(14)] = inst_58699__$1);

(statearr_58844[(15)] = inst_58700__$1);

(statearr_58844[(18)] = inst_58717);

(statearr_58844[(17)] = inst_58702__$1);

return statearr_58844;
})();
var statearr_58845_61130 = state_58820__$1;
(statearr_58845_61130[(2)] = null);

(statearr_58845_61130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (21))){
var inst_58744 = (state_58820[(2)]);
var state_58820__$1 = state_58820;
var statearr_58849_61131 = state_58820__$1;
(statearr_58849_61131[(2)] = inst_58744);

(statearr_58849_61131[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (31))){
var inst_58770 = (state_58820[(12)]);
var inst_58774 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_58770);
var state_58820__$1 = state_58820;
var statearr_58850_61132 = state_58820__$1;
(statearr_58850_61132[(2)] = inst_58774);

(statearr_58850_61132[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (32))){
var inst_58763 = (state_58820[(10)]);
var inst_58762 = (state_58820[(19)]);
var inst_58765 = (state_58820[(11)]);
var inst_58764 = (state_58820[(20)]);
var inst_58776 = (state_58820[(2)]);
var inst_58777 = (inst_58765 + (1));
var tmp58846 = inst_58763;
var tmp58847 = inst_58762;
var tmp58848 = inst_58764;
var inst_58762__$1 = tmp58847;
var inst_58763__$1 = tmp58846;
var inst_58764__$1 = tmp58848;
var inst_58765__$1 = inst_58777;
var state_58820__$1 = (function (){var statearr_58855 = state_58820;
(statearr_58855[(21)] = inst_58776);

(statearr_58855[(10)] = inst_58763__$1);

(statearr_58855[(19)] = inst_58762__$1);

(statearr_58855[(11)] = inst_58765__$1);

(statearr_58855[(20)] = inst_58764__$1);

return statearr_58855;
})();
var statearr_58856_61133 = state_58820__$1;
(statearr_58856_61133[(2)] = null);

(statearr_58856_61133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (40))){
var inst_58789 = (state_58820[(22)]);
var inst_58793 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_58789);
var state_58820__$1 = state_58820;
var statearr_58858_61136 = state_58820__$1;
(statearr_58858_61136[(2)] = inst_58793);

(statearr_58858_61136[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (33))){
var inst_58780 = (state_58820[(23)]);
var inst_58782 = cljs.core.chunked_seq_QMARK_(inst_58780);
var state_58820__$1 = state_58820;
if(inst_58782){
var statearr_58859_61137 = state_58820__$1;
(statearr_58859_61137[(1)] = (36));

} else {
var statearr_58860_61138 = state_58820__$1;
(statearr_58860_61138[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (13))){
var inst_58711 = (state_58820[(24)]);
var inst_58714 = cljs.core.async.close_BANG_(inst_58711);
var state_58820__$1 = state_58820;
var statearr_58861_61140 = state_58820__$1;
(statearr_58861_61140[(2)] = inst_58714);

(statearr_58861_61140[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (22))){
var inst_58734 = (state_58820[(8)]);
var inst_58737 = cljs.core.async.close_BANG_(inst_58734);
var state_58820__$1 = state_58820;
var statearr_58862_61151 = state_58820__$1;
(statearr_58862_61151[(2)] = inst_58737);

(statearr_58862_61151[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (36))){
var inst_58780 = (state_58820[(23)]);
var inst_58784 = cljs.core.chunk_first(inst_58780);
var inst_58785 = cljs.core.chunk_rest(inst_58780);
var inst_58786 = cljs.core.count(inst_58784);
var inst_58762 = inst_58785;
var inst_58763 = inst_58784;
var inst_58764 = inst_58786;
var inst_58765 = (0);
var state_58820__$1 = (function (){var statearr_58865 = state_58820;
(statearr_58865[(10)] = inst_58763);

(statearr_58865[(19)] = inst_58762);

(statearr_58865[(11)] = inst_58765);

(statearr_58865[(20)] = inst_58764);

return statearr_58865;
})();
var statearr_58866_61152 = state_58820__$1;
(statearr_58866_61152[(2)] = null);

(statearr_58866_61152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (41))){
var inst_58780 = (state_58820[(23)]);
var inst_58795 = (state_58820[(2)]);
var inst_58796 = cljs.core.next(inst_58780);
var inst_58762 = inst_58796;
var inst_58763 = null;
var inst_58764 = (0);
var inst_58765 = (0);
var state_58820__$1 = (function (){var statearr_58867 = state_58820;
(statearr_58867[(10)] = inst_58763);

(statearr_58867[(19)] = inst_58762);

(statearr_58867[(25)] = inst_58795);

(statearr_58867[(11)] = inst_58765);

(statearr_58867[(20)] = inst_58764);

return statearr_58867;
})();
var statearr_58868_61165 = state_58820__$1;
(statearr_58868_61165[(2)] = null);

(statearr_58868_61165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (43))){
var state_58820__$1 = state_58820;
var statearr_58869_61166 = state_58820__$1;
(statearr_58869_61166[(2)] = null);

(statearr_58869_61166[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (29))){
var inst_58804 = (state_58820[(2)]);
var state_58820__$1 = state_58820;
var statearr_58876_61167 = state_58820__$1;
(statearr_58876_61167[(2)] = inst_58804);

(statearr_58876_61167[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (44))){
var inst_58813 = (state_58820[(2)]);
var state_58820__$1 = (function (){var statearr_58879 = state_58820;
(statearr_58879[(26)] = inst_58813);

return statearr_58879;
})();
var statearr_58880_61168 = state_58820__$1;
(statearr_58880_61168[(2)] = null);

(statearr_58880_61168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (6))){
var inst_58754 = (state_58820[(27)]);
var inst_58753 = cljs.core.deref(cs);
var inst_58754__$1 = cljs.core.keys(inst_58753);
var inst_58755 = cljs.core.count(inst_58754__$1);
var inst_58756 = cljs.core.reset_BANG_(dctr,inst_58755);
var inst_58761 = cljs.core.seq(inst_58754__$1);
var inst_58762 = inst_58761;
var inst_58763 = null;
var inst_58764 = (0);
var inst_58765 = (0);
var state_58820__$1 = (function (){var statearr_58882 = state_58820;
(statearr_58882[(27)] = inst_58754__$1);

(statearr_58882[(10)] = inst_58763);

(statearr_58882[(28)] = inst_58756);

(statearr_58882[(19)] = inst_58762);

(statearr_58882[(11)] = inst_58765);

(statearr_58882[(20)] = inst_58764);

return statearr_58882;
})();
var statearr_58887_61169 = state_58820__$1;
(statearr_58887_61169[(2)] = null);

(statearr_58887_61169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (28))){
var inst_58780 = (state_58820[(23)]);
var inst_58762 = (state_58820[(19)]);
var inst_58780__$1 = cljs.core.seq(inst_58762);
var state_58820__$1 = (function (){var statearr_58888 = state_58820;
(statearr_58888[(23)] = inst_58780__$1);

return statearr_58888;
})();
if(inst_58780__$1){
var statearr_58889_61176 = state_58820__$1;
(statearr_58889_61176[(1)] = (33));

} else {
var statearr_58890_61177 = state_58820__$1;
(statearr_58890_61177[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (25))){
var inst_58765 = (state_58820[(11)]);
var inst_58764 = (state_58820[(20)]);
var inst_58767 = (inst_58765 < inst_58764);
var inst_58768 = inst_58767;
var state_58820__$1 = state_58820;
if(cljs.core.truth_(inst_58768)){
var statearr_58891_61178 = state_58820__$1;
(statearr_58891_61178[(1)] = (27));

} else {
var statearr_58892_61179 = state_58820__$1;
(statearr_58892_61179[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (34))){
var state_58820__$1 = state_58820;
var statearr_58893_61180 = state_58820__$1;
(statearr_58893_61180[(2)] = null);

(statearr_58893_61180[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (17))){
var state_58820__$1 = state_58820;
var statearr_58894_61181 = state_58820__$1;
(statearr_58894_61181[(2)] = null);

(statearr_58894_61181[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (3))){
var inst_58818 = (state_58820[(2)]);
var state_58820__$1 = state_58820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58820__$1,inst_58818);
} else {
if((state_val_58821 === (12))){
var inst_58749 = (state_58820[(2)]);
var state_58820__$1 = state_58820;
var statearr_58895_61182 = state_58820__$1;
(statearr_58895_61182[(2)] = inst_58749);

(statearr_58895_61182[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (2))){
var state_58820__$1 = state_58820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58820__$1,(4),ch);
} else {
if((state_val_58821 === (23))){
var state_58820__$1 = state_58820;
var statearr_58896_61183 = state_58820__$1;
(statearr_58896_61183[(2)] = null);

(statearr_58896_61183[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (35))){
var inst_58802 = (state_58820[(2)]);
var state_58820__$1 = state_58820;
var statearr_58897_61184 = state_58820__$1;
(statearr_58897_61184[(2)] = inst_58802);

(statearr_58897_61184[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (19))){
var inst_58721 = (state_58820[(7)]);
var inst_58725 = cljs.core.chunk_first(inst_58721);
var inst_58726 = cljs.core.chunk_rest(inst_58721);
var inst_58727 = cljs.core.count(inst_58725);
var inst_58699 = inst_58726;
var inst_58700 = inst_58725;
var inst_58701 = inst_58727;
var inst_58702 = (0);
var state_58820__$1 = (function (){var statearr_58902 = state_58820;
(statearr_58902[(13)] = inst_58701);

(statearr_58902[(14)] = inst_58699);

(statearr_58902[(15)] = inst_58700);

(statearr_58902[(17)] = inst_58702);

return statearr_58902;
})();
var statearr_58903_61185 = state_58820__$1;
(statearr_58903_61185[(2)] = null);

(statearr_58903_61185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (11))){
var inst_58699 = (state_58820[(14)]);
var inst_58721 = (state_58820[(7)]);
var inst_58721__$1 = cljs.core.seq(inst_58699);
var state_58820__$1 = (function (){var statearr_58904 = state_58820;
(statearr_58904[(7)] = inst_58721__$1);

return statearr_58904;
})();
if(inst_58721__$1){
var statearr_58905_61186 = state_58820__$1;
(statearr_58905_61186[(1)] = (16));

} else {
var statearr_58907_61187 = state_58820__$1;
(statearr_58907_61187[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (9))){
var inst_58751 = (state_58820[(2)]);
var state_58820__$1 = state_58820;
var statearr_58909_61196 = state_58820__$1;
(statearr_58909_61196[(2)] = inst_58751);

(statearr_58909_61196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (5))){
var inst_58697 = cljs.core.deref(cs);
var inst_58698 = cljs.core.seq(inst_58697);
var inst_58699 = inst_58698;
var inst_58700 = null;
var inst_58701 = (0);
var inst_58702 = (0);
var state_58820__$1 = (function (){var statearr_58910 = state_58820;
(statearr_58910[(13)] = inst_58701);

(statearr_58910[(14)] = inst_58699);

(statearr_58910[(15)] = inst_58700);

(statearr_58910[(17)] = inst_58702);

return statearr_58910;
})();
var statearr_58912_61198 = state_58820__$1;
(statearr_58912_61198[(2)] = null);

(statearr_58912_61198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (14))){
var state_58820__$1 = state_58820;
var statearr_58916_61200 = state_58820__$1;
(statearr_58916_61200[(2)] = null);

(statearr_58916_61200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (45))){
var inst_58810 = (state_58820[(2)]);
var state_58820__$1 = state_58820;
var statearr_58918_61201 = state_58820__$1;
(statearr_58918_61201[(2)] = inst_58810);

(statearr_58918_61201[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (26))){
var inst_58754 = (state_58820[(27)]);
var inst_58806 = (state_58820[(2)]);
var inst_58807 = cljs.core.seq(inst_58754);
var state_58820__$1 = (function (){var statearr_58920 = state_58820;
(statearr_58920[(29)] = inst_58806);

return statearr_58920;
})();
if(inst_58807){
var statearr_58921_61202 = state_58820__$1;
(statearr_58921_61202[(1)] = (42));

} else {
var statearr_58923_61203 = state_58820__$1;
(statearr_58923_61203[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (16))){
var inst_58721 = (state_58820[(7)]);
var inst_58723 = cljs.core.chunked_seq_QMARK_(inst_58721);
var state_58820__$1 = state_58820;
if(inst_58723){
var statearr_58924_61204 = state_58820__$1;
(statearr_58924_61204[(1)] = (19));

} else {
var statearr_58925_61205 = state_58820__$1;
(statearr_58925_61205[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (38))){
var inst_58799 = (state_58820[(2)]);
var state_58820__$1 = state_58820;
var statearr_58928_61206 = state_58820__$1;
(statearr_58928_61206[(2)] = inst_58799);

(statearr_58928_61206[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (30))){
var state_58820__$1 = state_58820;
var statearr_58929_61207 = state_58820__$1;
(statearr_58929_61207[(2)] = null);

(statearr_58929_61207[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (10))){
var inst_58700 = (state_58820[(15)]);
var inst_58702 = (state_58820[(17)]);
var inst_58710 = cljs.core._nth(inst_58700,inst_58702);
var inst_58711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58710,(0),null);
var inst_58712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58710,(1),null);
var state_58820__$1 = (function (){var statearr_58936 = state_58820;
(statearr_58936[(24)] = inst_58711);

return statearr_58936;
})();
if(cljs.core.truth_(inst_58712)){
var statearr_58937_61208 = state_58820__$1;
(statearr_58937_61208[(1)] = (13));

} else {
var statearr_58938_61209 = state_58820__$1;
(statearr_58938_61209[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (18))){
var inst_58747 = (state_58820[(2)]);
var state_58820__$1 = state_58820;
var statearr_58939_61210 = state_58820__$1;
(statearr_58939_61210[(2)] = inst_58747);

(statearr_58939_61210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (42))){
var state_58820__$1 = state_58820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58820__$1,(45),dchan);
} else {
if((state_val_58821 === (37))){
var inst_58690 = (state_58820[(9)]);
var inst_58780 = (state_58820[(23)]);
var inst_58789 = (state_58820[(22)]);
var inst_58789__$1 = cljs.core.first(inst_58780);
var inst_58790 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_58789__$1,inst_58690,done);
var state_58820__$1 = (function (){var statearr_58940 = state_58820;
(statearr_58940[(22)] = inst_58789__$1);

return statearr_58940;
})();
if(cljs.core.truth_(inst_58790)){
var statearr_58942_61212 = state_58820__$1;
(statearr_58942_61212[(1)] = (39));

} else {
var statearr_58943_61213 = state_58820__$1;
(statearr_58943_61213[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58821 === (8))){
var inst_58701 = (state_58820[(13)]);
var inst_58702 = (state_58820[(17)]);
var inst_58704 = (inst_58702 < inst_58701);
var inst_58705 = inst_58704;
var state_58820__$1 = state_58820;
if(cljs.core.truth_(inst_58705)){
var statearr_58944_61215 = state_58820__$1;
(statearr_58944_61215[(1)] = (10));

} else {
var statearr_58945_61216 = state_58820__$1;
(statearr_58945_61216[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__57795__auto__ = null;
var cljs$core$async$mult_$_state_machine__57795__auto____0 = (function (){
var statearr_58948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58948[(0)] = cljs$core$async$mult_$_state_machine__57795__auto__);

(statearr_58948[(1)] = (1));

return statearr_58948;
});
var cljs$core$async$mult_$_state_machine__57795__auto____1 = (function (state_58820){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_58820);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e58949){var ex__57798__auto__ = e58949;
var statearr_58950_61217 = state_58820;
(statearr_58950_61217[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_58820[(4)]))){
var statearr_58955_61218 = state_58820;
(statearr_58955_61218[(1)] = cljs.core.first((state_58820[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61219 = state_58820;
state_58820 = G__61219;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__57795__auto__ = function(state_58820){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__57795__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__57795__auto____1.call(this,state_58820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__57795__auto____0;
cljs$core$async$mult_$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__57795__auto____1;
return cljs$core$async$mult_$_state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_58959 = f__57854__auto__();
(statearr_58959[(6)] = c__57853__auto___61091);

return statearr_58959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
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
var G__58970 = arguments.length;
switch (G__58970) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_61230 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_61230(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_61231 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_61231(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_61232 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_61232(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_61233 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_61233(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_61239 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_61239(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___61248 = arguments.length;
var i__5767__auto___61249 = (0);
while(true){
if((i__5767__auto___61249 < len__5766__auto___61248)){
args__5772__auto__.push((arguments[i__5767__auto___61249]));

var G__61251 = (i__5767__auto___61249 + (1));
i__5767__auto___61249 = G__61251;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__59011){
var map__59012 = p__59011;
var map__59012__$1 = cljs.core.__destructure_map(map__59012);
var opts = map__59012__$1;
var statearr_59013_61253 = state;
(statearr_59013_61253[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_59015_61254 = state;
(statearr_59015_61254[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_59019_61255 = state;
(statearr_59019_61255[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq58999){
var G__59003 = cljs.core.first(seq58999);
var seq58999__$1 = cljs.core.next(seq58999);
var G__59004 = cljs.core.first(seq58999__$1);
var seq58999__$2 = cljs.core.next(seq58999__$1);
var G__59006 = cljs.core.first(seq58999__$2);
var seq58999__$3 = cljs.core.next(seq58999__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59003,G__59004,G__59006,seq58999__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59023 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59023 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta59024){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta59024 = meta59024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59025,meta59024__$1){
var self__ = this;
var _59025__$1 = this;
return (new cljs.core.async.t_cljs$core$async59023(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta59024__$1));
}));

(cljs.core.async.t_cljs$core$async59023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59025){
var self__ = this;
var _59025__$1 = this;
return self__.meta59024;
}));

(cljs.core.async.t_cljs$core$async59023.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59023.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async59023.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59023.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59023.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59023.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59023.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59023.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta59024","meta59024",-1550819764,null)], null);
}));

(cljs.core.async.t_cljs$core$async59023.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59023");

(cljs.core.async.t_cljs$core$async59023.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async59023");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59023.
 */
cljs.core.async.__GT_t_cljs$core$async59023 = (function cljs$core$async$mix_$___GT_t_cljs$core$async59023(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta59024){
return (new cljs.core.async.t_cljs$core$async59023(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta59024));
});

}

return (new cljs.core.async.t_cljs$core$async59023(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__57853__auto___61269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_59131){
var state_val_59132 = (state_59131[(1)]);
if((state_val_59132 === (7))){
var inst_59087 = (state_59131[(2)]);
var state_59131__$1 = state_59131;
if(cljs.core.truth_(inst_59087)){
var statearr_59139_61272 = state_59131__$1;
(statearr_59139_61272[(1)] = (8));

} else {
var statearr_59140_61273 = state_59131__$1;
(statearr_59140_61273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59132 === (20))){
var inst_59080 = (state_59131[(7)]);
var state_59131__$1 = state_59131;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59131__$1,(23),out,inst_59080);
} else {
if((state_val_59132 === (1))){
var inst_59052 = calc_state();
var inst_59054 = cljs.core.__destructure_map(inst_59052);
var inst_59059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59054,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59054,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59054,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_59068 = inst_59052;
var state_59131__$1 = (function (){var statearr_59145 = state_59131;
(statearr_59145[(8)] = inst_59063);

(statearr_59145[(9)] = inst_59059);

(statearr_59145[(10)] = inst_59068);

(statearr_59145[(11)] = inst_59061);

return statearr_59145;
})();
var statearr_59154_61282 = state_59131__$1;
(statearr_59154_61282[(2)] = null);

(statearr_59154_61282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59132 === (24))){
var inst_59071 = (state_59131[(12)]);
var inst_59068 = inst_59071;
var state_59131__$1 = (function (){var statearr_59166 = state_59131;
(statearr_59166[(10)] = inst_59068);

return statearr_59166;
})();
var statearr_59167_61284 = state_59131__$1;
(statearr_59167_61284[(2)] = null);

(statearr_59167_61284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59132 === (4))){
var inst_59080 = (state_59131[(7)]);
var inst_59082 = (state_59131[(13)]);
var inst_59079 = (state_59131[(2)]);
var inst_59080__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59079,(0),null);
var inst_59081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59079,(1),null);
var inst_59082__$1 = (inst_59080__$1 == null);
var state_59131__$1 = (function (){var statearr_59171 = state_59131;
(statearr_59171[(7)] = inst_59080__$1);

(statearr_59171[(13)] = inst_59082__$1);

(statearr_59171[(14)] = inst_59081);

return statearr_59171;
})();
if(cljs.core.truth_(inst_59082__$1)){
var statearr_59172_61290 = state_59131__$1;
(statearr_59172_61290[(1)] = (5));

} else {
var statearr_59173_61291 = state_59131__$1;
(statearr_59173_61291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59132 === (15))){
var inst_59072 = (state_59131[(15)]);
var inst_59102 = (state_59131[(16)]);
var inst_59102__$1 = cljs.core.empty_QMARK_(inst_59072);
var state_59131__$1 = (function (){var statearr_59179 = state_59131;
(statearr_59179[(16)] = inst_59102__$1);

return statearr_59179;
})();
if(inst_59102__$1){
var statearr_59185_61292 = state_59131__$1;
(statearr_59185_61292[(1)] = (17));

} else {
var statearr_59188_61293 = state_59131__$1;
(statearr_59188_61293[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59132 === (21))){
var inst_59071 = (state_59131[(12)]);
var inst_59068 = inst_59071;
var state_59131__$1 = (function (){var statearr_59198 = state_59131;
(statearr_59198[(10)] = inst_59068);

return statearr_59198;
})();
var statearr_59199_61294 = state_59131__$1;
(statearr_59199_61294[(2)] = null);

(statearr_59199_61294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59132 === (13))){
var inst_59094 = (state_59131[(2)]);
var inst_59095 = calc_state();
var inst_59068 = inst_59095;
var state_59131__$1 = (function (){var statearr_59224 = state_59131;
(statearr_59224[(17)] = inst_59094);

(statearr_59224[(10)] = inst_59068);

return statearr_59224;
})();
var statearr_59229_61302 = state_59131__$1;
(statearr_59229_61302[(2)] = null);

(statearr_59229_61302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59132 === (22))){
var inst_59123 = (state_59131[(2)]);
var state_59131__$1 = state_59131;
var statearr_59237_61306 = state_59131__$1;
(statearr_59237_61306[(2)] = inst_59123);

(statearr_59237_61306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59132 === (6))){
var inst_59081 = (state_59131[(14)]);
var inst_59085 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59081,change);
var state_59131__$1 = state_59131;
var statearr_59248_61307 = state_59131__$1;
(statearr_59248_61307[(2)] = inst_59085);

(statearr_59248_61307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59132 === (25))){
var state_59131__$1 = state_59131;
var statearr_59249_61311 = state_59131__$1;
(statearr_59249_61311[(2)] = null);

(statearr_59249_61311[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59132 === (17))){
var inst_59073 = (state_59131[(18)]);
var inst_59081 = (state_59131[(14)]);
var inst_59104 = (inst_59073.cljs$core$IFn$_invoke$arity$1 ? inst_59073.cljs$core$IFn$_invoke$arity$1(inst_59081) : inst_59073.call(null,inst_59081));
var inst_59105 = cljs.core.not(inst_59104);
var state_59131__$1 = state_59131;
var statearr_59250_61315 = state_59131__$1;
(statearr_59250_61315[(2)] = inst_59105);

(statearr_59250_61315[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59132 === (3))){
var inst_59127 = (state_59131[(2)]);
var state_59131__$1 = state_59131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59131__$1,inst_59127);
} else {
if((state_val_59132 === (12))){
var state_59131__$1 = state_59131;
var statearr_59251_61317 = state_59131__$1;
(statearr_59251_61317[(2)] = null);

(statearr_59251_61317[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59132 === (2))){
var inst_59071 = (state_59131[(12)]);
var inst_59068 = (state_59131[(10)]);
var inst_59071__$1 = cljs.core.__destructure_map(inst_59068);
var inst_59072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59071__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59071__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59071__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_59131__$1 = (function (){var statearr_59252 = state_59131;
(statearr_59252[(12)] = inst_59071__$1);

(statearr_59252[(15)] = inst_59072);

(statearr_59252[(18)] = inst_59073);

return statearr_59252;
})();
return cljs.core.async.ioc_alts_BANG_(state_59131__$1,(4),inst_59074);
} else {
if((state_val_59132 === (23))){
var inst_59114 = (state_59131[(2)]);
var state_59131__$1 = state_59131;
if(cljs.core.truth_(inst_59114)){
var statearr_59254_61327 = state_59131__$1;
(statearr_59254_61327[(1)] = (24));

} else {
var statearr_59255_61328 = state_59131__$1;
(statearr_59255_61328[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59132 === (19))){
var inst_59108 = (state_59131[(2)]);
var state_59131__$1 = state_59131;
var statearr_59257_61329 = state_59131__$1;
(statearr_59257_61329[(2)] = inst_59108);

(statearr_59257_61329[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59132 === (11))){
var inst_59081 = (state_59131[(14)]);
var inst_59091 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_59081);
var state_59131__$1 = state_59131;
var statearr_59258_61331 = state_59131__$1;
(statearr_59258_61331[(2)] = inst_59091);

(statearr_59258_61331[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59132 === (9))){
var inst_59098 = (state_59131[(19)]);
var inst_59072 = (state_59131[(15)]);
var inst_59081 = (state_59131[(14)]);
var inst_59098__$1 = (inst_59072.cljs$core$IFn$_invoke$arity$1 ? inst_59072.cljs$core$IFn$_invoke$arity$1(inst_59081) : inst_59072.call(null,inst_59081));
var state_59131__$1 = (function (){var statearr_59261 = state_59131;
(statearr_59261[(19)] = inst_59098__$1);

return statearr_59261;
})();
if(cljs.core.truth_(inst_59098__$1)){
var statearr_59262_61332 = state_59131__$1;
(statearr_59262_61332[(1)] = (14));

} else {
var statearr_59264_61334 = state_59131__$1;
(statearr_59264_61334[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59132 === (5))){
var inst_59082 = (state_59131[(13)]);
var state_59131__$1 = state_59131;
var statearr_59269_61335 = state_59131__$1;
(statearr_59269_61335[(2)] = inst_59082);

(statearr_59269_61335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59132 === (14))){
var inst_59098 = (state_59131[(19)]);
var state_59131__$1 = state_59131;
var statearr_59274_61337 = state_59131__$1;
(statearr_59274_61337[(2)] = inst_59098);

(statearr_59274_61337[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59132 === (26))){
var inst_59119 = (state_59131[(2)]);
var state_59131__$1 = state_59131;
var statearr_59281_61339 = state_59131__$1;
(statearr_59281_61339[(2)] = inst_59119);

(statearr_59281_61339[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59132 === (16))){
var inst_59110 = (state_59131[(2)]);
var state_59131__$1 = state_59131;
if(cljs.core.truth_(inst_59110)){
var statearr_59282_61342 = state_59131__$1;
(statearr_59282_61342[(1)] = (20));

} else {
var statearr_59284_61343 = state_59131__$1;
(statearr_59284_61343[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59132 === (10))){
var inst_59125 = (state_59131[(2)]);
var state_59131__$1 = state_59131;
var statearr_59286_61344 = state_59131__$1;
(statearr_59286_61344[(2)] = inst_59125);

(statearr_59286_61344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59132 === (18))){
var inst_59102 = (state_59131[(16)]);
var state_59131__$1 = state_59131;
var statearr_59288_61346 = state_59131__$1;
(statearr_59288_61346[(2)] = inst_59102);

(statearr_59288_61346[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59132 === (8))){
var inst_59080 = (state_59131[(7)]);
var inst_59089 = (inst_59080 == null);
var state_59131__$1 = state_59131;
if(cljs.core.truth_(inst_59089)){
var statearr_59289_61350 = state_59131__$1;
(statearr_59289_61350[(1)] = (11));

} else {
var statearr_59290_61351 = state_59131__$1;
(statearr_59290_61351[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__57795__auto__ = null;
var cljs$core$async$mix_$_state_machine__57795__auto____0 = (function (){
var statearr_59294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59294[(0)] = cljs$core$async$mix_$_state_machine__57795__auto__);

(statearr_59294[(1)] = (1));

return statearr_59294;
});
var cljs$core$async$mix_$_state_machine__57795__auto____1 = (function (state_59131){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_59131);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e59295){var ex__57798__auto__ = e59295;
var statearr_59296_61353 = state_59131;
(statearr_59296_61353[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_59131[(4)]))){
var statearr_59298_61354 = state_59131;
(statearr_59298_61354[(1)] = cljs.core.first((state_59131[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61355 = state_59131;
state_59131 = G__61355;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__57795__auto__ = function(state_59131){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__57795__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__57795__auto____1.call(this,state_59131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__57795__auto____0;
cljs$core$async$mix_$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__57795__auto____1;
return cljs$core$async$mix_$_state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_59308 = f__57854__auto__();
(statearr_59308[(6)] = c__57853__auto___61269);

return statearr_59308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_61364 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_61364(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_61368 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_61368(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_61371 = (function() {
var G__61372 = null;
var G__61372__1 = (function (p){
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
var G__61372__2 = (function (p,v){
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
G__61372 = function(p,v){
switch(arguments.length){
case 1:
return G__61372__1.call(this,p);
case 2:
return G__61372__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__61372.cljs$core$IFn$_invoke$arity$1 = G__61372__1;
G__61372.cljs$core$IFn$_invoke$arity$2 = G__61372__2;
return G__61372;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__59323 = arguments.length;
switch (G__59323) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_61371(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_61371(p,v);
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
var G__59348 = arguments.length;
switch (G__59348) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__59337_SHARP_){
if(cljs.core.truth_((p1__59337_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__59337_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__59337_SHARP_.call(null,topic)))){
return p1__59337_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__59337_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59353 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59353 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta59354){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta59354 = meta59354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59355,meta59354__$1){
var self__ = this;
var _59355__$1 = this;
return (new cljs.core.async.t_cljs$core$async59353(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta59354__$1));
}));

(cljs.core.async.t_cljs$core$async59353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59355){
var self__ = this;
var _59355__$1 = this;
return self__.meta59354;
}));

(cljs.core.async.t_cljs$core$async59353.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59353.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async59353.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59353.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async59353.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async59353.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async59353.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async59353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta59354","meta59354",74092864,null)], null);
}));

(cljs.core.async.t_cljs$core$async59353.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59353");

(cljs.core.async.t_cljs$core$async59353.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async59353");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59353.
 */
cljs.core.async.__GT_t_cljs$core$async59353 = (function cljs$core$async$__GT_t_cljs$core$async59353(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59354){
return (new cljs.core.async.t_cljs$core$async59353(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59354));
});

}

return (new cljs.core.async.t_cljs$core$async59353(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__57853__auto___61395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_59462){
var state_val_59465 = (state_59462[(1)]);
if((state_val_59465 === (7))){
var inst_59458 = (state_59462[(2)]);
var state_59462__$1 = state_59462;
var statearr_59472_61396 = state_59462__$1;
(statearr_59472_61396[(2)] = inst_59458);

(statearr_59472_61396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59465 === (20))){
var state_59462__$1 = state_59462;
var statearr_59473_61397 = state_59462__$1;
(statearr_59473_61397[(2)] = null);

(statearr_59473_61397[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59465 === (1))){
var state_59462__$1 = state_59462;
var statearr_59476_61398 = state_59462__$1;
(statearr_59476_61398[(2)] = null);

(statearr_59476_61398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59465 === (24))){
var inst_59440 = (state_59462[(7)]);
var inst_59450 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_59440);
var state_59462__$1 = state_59462;
var statearr_59477_61399 = state_59462__$1;
(statearr_59477_61399[(2)] = inst_59450);

(statearr_59477_61399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59465 === (4))){
var inst_59379 = (state_59462[(8)]);
var inst_59379__$1 = (state_59462[(2)]);
var inst_59382 = (inst_59379__$1 == null);
var state_59462__$1 = (function (){var statearr_59481 = state_59462;
(statearr_59481[(8)] = inst_59379__$1);

return statearr_59481;
})();
if(cljs.core.truth_(inst_59382)){
var statearr_59484_61400 = state_59462__$1;
(statearr_59484_61400[(1)] = (5));

} else {
var statearr_59485_61401 = state_59462__$1;
(statearr_59485_61401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59465 === (15))){
var inst_59434 = (state_59462[(2)]);
var state_59462__$1 = state_59462;
var statearr_59486_61402 = state_59462__$1;
(statearr_59486_61402[(2)] = inst_59434);

(statearr_59486_61402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59465 === (21))){
var inst_59455 = (state_59462[(2)]);
var state_59462__$1 = (function (){var statearr_59497 = state_59462;
(statearr_59497[(9)] = inst_59455);

return statearr_59497;
})();
var statearr_59498_61403 = state_59462__$1;
(statearr_59498_61403[(2)] = null);

(statearr_59498_61403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59465 === (13))){
var inst_59414 = (state_59462[(10)]);
var inst_59417 = cljs.core.chunked_seq_QMARK_(inst_59414);
var state_59462__$1 = state_59462;
if(inst_59417){
var statearr_59511_61404 = state_59462__$1;
(statearr_59511_61404[(1)] = (16));

} else {
var statearr_59512_61405 = state_59462__$1;
(statearr_59512_61405[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59465 === (22))){
var inst_59446 = (state_59462[(2)]);
var state_59462__$1 = state_59462;
if(cljs.core.truth_(inst_59446)){
var statearr_59513_61409 = state_59462__$1;
(statearr_59513_61409[(1)] = (23));

} else {
var statearr_59514_61410 = state_59462__$1;
(statearr_59514_61410[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59465 === (6))){
var inst_59440 = (state_59462[(7)]);
var inst_59379 = (state_59462[(8)]);
var inst_59442 = (state_59462[(11)]);
var inst_59440__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_59379) : topic_fn.call(null,inst_59379));
var inst_59441 = cljs.core.deref(mults);
var inst_59442__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59441,inst_59440__$1);
var state_59462__$1 = (function (){var statearr_59515 = state_59462;
(statearr_59515[(7)] = inst_59440__$1);

(statearr_59515[(11)] = inst_59442__$1);

return statearr_59515;
})();
if(cljs.core.truth_(inst_59442__$1)){
var statearr_59516_61414 = state_59462__$1;
(statearr_59516_61414[(1)] = (19));

} else {
var statearr_59518_61415 = state_59462__$1;
(statearr_59518_61415[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59465 === (25))){
var inst_59452 = (state_59462[(2)]);
var state_59462__$1 = state_59462;
var statearr_59519_61417 = state_59462__$1;
(statearr_59519_61417[(2)] = inst_59452);

(statearr_59519_61417[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59465 === (17))){
var inst_59414 = (state_59462[(10)]);
var inst_59424 = cljs.core.first(inst_59414);
var inst_59425 = cljs.core.async.muxch_STAR_(inst_59424);
var inst_59426 = cljs.core.async.close_BANG_(inst_59425);
var inst_59428 = cljs.core.next(inst_59414);
var inst_59398 = inst_59428;
var inst_59399 = null;
var inst_59400 = (0);
var inst_59401 = (0);
var state_59462__$1 = (function (){var statearr_59526 = state_59462;
(statearr_59526[(12)] = inst_59398);

(statearr_59526[(13)] = inst_59426);

(statearr_59526[(14)] = inst_59400);

(statearr_59526[(15)] = inst_59399);

(statearr_59526[(16)] = inst_59401);

return statearr_59526;
})();
var statearr_59527_61419 = state_59462__$1;
(statearr_59527_61419[(2)] = null);

(statearr_59527_61419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59465 === (3))){
var inst_59460 = (state_59462[(2)]);
var state_59462__$1 = state_59462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59462__$1,inst_59460);
} else {
if((state_val_59465 === (12))){
var inst_59436 = (state_59462[(2)]);
var state_59462__$1 = state_59462;
var statearr_59533_61423 = state_59462__$1;
(statearr_59533_61423[(2)] = inst_59436);

(statearr_59533_61423[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59465 === (2))){
var state_59462__$1 = state_59462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59462__$1,(4),ch);
} else {
if((state_val_59465 === (23))){
var state_59462__$1 = state_59462;
var statearr_59538_61424 = state_59462__$1;
(statearr_59538_61424[(2)] = null);

(statearr_59538_61424[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59465 === (19))){
var inst_59379 = (state_59462[(8)]);
var inst_59442 = (state_59462[(11)]);
var inst_59444 = cljs.core.async.muxch_STAR_(inst_59442);
var state_59462__$1 = state_59462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59462__$1,(22),inst_59444,inst_59379);
} else {
if((state_val_59465 === (11))){
var inst_59398 = (state_59462[(12)]);
var inst_59414 = (state_59462[(10)]);
var inst_59414__$1 = cljs.core.seq(inst_59398);
var state_59462__$1 = (function (){var statearr_59543 = state_59462;
(statearr_59543[(10)] = inst_59414__$1);

return statearr_59543;
})();
if(inst_59414__$1){
var statearr_59544_61425 = state_59462__$1;
(statearr_59544_61425[(1)] = (13));

} else {
var statearr_59545_61426 = state_59462__$1;
(statearr_59545_61426[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59465 === (9))){
var inst_59438 = (state_59462[(2)]);
var state_59462__$1 = state_59462;
var statearr_59547_61429 = state_59462__$1;
(statearr_59547_61429[(2)] = inst_59438);

(statearr_59547_61429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59465 === (5))){
var inst_59395 = cljs.core.deref(mults);
var inst_59396 = cljs.core.vals(inst_59395);
var inst_59397 = cljs.core.seq(inst_59396);
var inst_59398 = inst_59397;
var inst_59399 = null;
var inst_59400 = (0);
var inst_59401 = (0);
var state_59462__$1 = (function (){var statearr_59549 = state_59462;
(statearr_59549[(12)] = inst_59398);

(statearr_59549[(14)] = inst_59400);

(statearr_59549[(15)] = inst_59399);

(statearr_59549[(16)] = inst_59401);

return statearr_59549;
})();
var statearr_59551_61430 = state_59462__$1;
(statearr_59551_61430[(2)] = null);

(statearr_59551_61430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59465 === (14))){
var state_59462__$1 = state_59462;
var statearr_59556_61431 = state_59462__$1;
(statearr_59556_61431[(2)] = null);

(statearr_59556_61431[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59465 === (16))){
var inst_59414 = (state_59462[(10)]);
var inst_59419 = cljs.core.chunk_first(inst_59414);
var inst_59420 = cljs.core.chunk_rest(inst_59414);
var inst_59421 = cljs.core.count(inst_59419);
var inst_59398 = inst_59420;
var inst_59399 = inst_59419;
var inst_59400 = inst_59421;
var inst_59401 = (0);
var state_59462__$1 = (function (){var statearr_59558 = state_59462;
(statearr_59558[(12)] = inst_59398);

(statearr_59558[(14)] = inst_59400);

(statearr_59558[(15)] = inst_59399);

(statearr_59558[(16)] = inst_59401);

return statearr_59558;
})();
var statearr_59559_61432 = state_59462__$1;
(statearr_59559_61432[(2)] = null);

(statearr_59559_61432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59465 === (10))){
var inst_59398 = (state_59462[(12)]);
var inst_59400 = (state_59462[(14)]);
var inst_59399 = (state_59462[(15)]);
var inst_59401 = (state_59462[(16)]);
var inst_59407 = cljs.core._nth(inst_59399,inst_59401);
var inst_59408 = cljs.core.async.muxch_STAR_(inst_59407);
var inst_59409 = cljs.core.async.close_BANG_(inst_59408);
var inst_59411 = (inst_59401 + (1));
var tmp59553 = inst_59398;
var tmp59554 = inst_59400;
var tmp59555 = inst_59399;
var inst_59398__$1 = tmp59553;
var inst_59399__$1 = tmp59555;
var inst_59400__$1 = tmp59554;
var inst_59401__$1 = inst_59411;
var state_59462__$1 = (function (){var statearr_59568 = state_59462;
(statearr_59568[(12)] = inst_59398__$1);

(statearr_59568[(14)] = inst_59400__$1);

(statearr_59568[(15)] = inst_59399__$1);

(statearr_59568[(17)] = inst_59409);

(statearr_59568[(16)] = inst_59401__$1);

return statearr_59568;
})();
var statearr_59569_61435 = state_59462__$1;
(statearr_59569_61435[(2)] = null);

(statearr_59569_61435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59465 === (18))){
var inst_59431 = (state_59462[(2)]);
var state_59462__$1 = state_59462;
var statearr_59574_61437 = state_59462__$1;
(statearr_59574_61437[(2)] = inst_59431);

(statearr_59574_61437[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59465 === (8))){
var inst_59400 = (state_59462[(14)]);
var inst_59401 = (state_59462[(16)]);
var inst_59404 = (inst_59401 < inst_59400);
var inst_59405 = inst_59404;
var state_59462__$1 = state_59462;
if(cljs.core.truth_(inst_59405)){
var statearr_59583_61438 = state_59462__$1;
(statearr_59583_61438[(1)] = (10));

} else {
var statearr_59584_61439 = state_59462__$1;
(statearr_59584_61439[(1)] = (11));

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
var cljs$core$async$state_machine__57795__auto__ = null;
var cljs$core$async$state_machine__57795__auto____0 = (function (){
var statearr_59585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59585[(0)] = cljs$core$async$state_machine__57795__auto__);

(statearr_59585[(1)] = (1));

return statearr_59585;
});
var cljs$core$async$state_machine__57795__auto____1 = (function (state_59462){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_59462);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e59590){var ex__57798__auto__ = e59590;
var statearr_59591_61440 = state_59462;
(statearr_59591_61440[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_59462[(4)]))){
var statearr_59601_61442 = state_59462;
(statearr_59601_61442[(1)] = cljs.core.first((state_59462[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61449 = state_59462;
state_59462 = G__61449;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
cljs$core$async$state_machine__57795__auto__ = function(state_59462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57795__auto____1.call(this,state_59462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57795__auto____0;
cljs$core$async$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57795__auto____1;
return cljs$core$async$state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_59602 = f__57854__auto__();
(statearr_59602[(6)] = c__57853__auto___61395);

return statearr_59602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
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
var G__59604 = arguments.length;
switch (G__59604) {
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
var G__59606 = arguments.length;
switch (G__59606) {
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
var G__59611 = arguments.length;
switch (G__59611) {
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
var c__57853__auto___61462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_59676){
var state_val_59677 = (state_59676[(1)]);
if((state_val_59677 === (7))){
var state_59676__$1 = state_59676;
var statearr_59685_61463 = state_59676__$1;
(statearr_59685_61463[(2)] = null);

(statearr_59685_61463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59677 === (1))){
var state_59676__$1 = state_59676;
var statearr_59686_61465 = state_59676__$1;
(statearr_59686_61465[(2)] = null);

(statearr_59686_61465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59677 === (4))){
var inst_59620 = (state_59676[(7)]);
var inst_59621 = (state_59676[(8)]);
var inst_59623 = (inst_59621 < inst_59620);
var state_59676__$1 = state_59676;
if(cljs.core.truth_(inst_59623)){
var statearr_59687_61467 = state_59676__$1;
(statearr_59687_61467[(1)] = (6));

} else {
var statearr_59688_61468 = state_59676__$1;
(statearr_59688_61468[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59677 === (15))){
var inst_59655 = (state_59676[(9)]);
var inst_59660 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_59655);
var state_59676__$1 = state_59676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59676__$1,(17),out,inst_59660);
} else {
if((state_val_59677 === (13))){
var inst_59655 = (state_59676[(9)]);
var inst_59655__$1 = (state_59676[(2)]);
var inst_59656 = cljs.core.some(cljs.core.nil_QMARK_,inst_59655__$1);
var state_59676__$1 = (function (){var statearr_59694 = state_59676;
(statearr_59694[(9)] = inst_59655__$1);

return statearr_59694;
})();
if(cljs.core.truth_(inst_59656)){
var statearr_59695_61469 = state_59676__$1;
(statearr_59695_61469[(1)] = (14));

} else {
var statearr_59696_61471 = state_59676__$1;
(statearr_59696_61471[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59677 === (6))){
var state_59676__$1 = state_59676;
var statearr_59697_61472 = state_59676__$1;
(statearr_59697_61472[(2)] = null);

(statearr_59697_61472[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59677 === (17))){
var inst_59662 = (state_59676[(2)]);
var state_59676__$1 = (function (){var statearr_59703 = state_59676;
(statearr_59703[(10)] = inst_59662);

return statearr_59703;
})();
var statearr_59704_61474 = state_59676__$1;
(statearr_59704_61474[(2)] = null);

(statearr_59704_61474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59677 === (3))){
var inst_59667 = (state_59676[(2)]);
var state_59676__$1 = state_59676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59676__$1,inst_59667);
} else {
if((state_val_59677 === (12))){
var _ = (function (){var statearr_59705 = state_59676;
(statearr_59705[(4)] = cljs.core.rest((state_59676[(4)])));

return statearr_59705;
})();
var state_59676__$1 = state_59676;
var ex59702 = (state_59676__$1[(2)]);
var statearr_59706_61476 = state_59676__$1;
(statearr_59706_61476[(5)] = ex59702);


if((ex59702 instanceof Object)){
var statearr_59707_61477 = state_59676__$1;
(statearr_59707_61477[(1)] = (11));

(statearr_59707_61477[(5)] = null);

} else {
throw ex59702;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59677 === (2))){
var inst_59619 = cljs.core.reset_BANG_(dctr,cnt);
var inst_59620 = cnt;
var inst_59621 = (0);
var state_59676__$1 = (function (){var statearr_59714 = state_59676;
(statearr_59714[(11)] = inst_59619);

(statearr_59714[(7)] = inst_59620);

(statearr_59714[(8)] = inst_59621);

return statearr_59714;
})();
var statearr_59715_61479 = state_59676__$1;
(statearr_59715_61479[(2)] = null);

(statearr_59715_61479[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59677 === (11))){
var inst_59630 = (state_59676[(2)]);
var inst_59631 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_59676__$1 = (function (){var statearr_59716 = state_59676;
(statearr_59716[(12)] = inst_59630);

return statearr_59716;
})();
var statearr_59717_61480 = state_59676__$1;
(statearr_59717_61480[(2)] = inst_59631);

(statearr_59717_61480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59677 === (9))){
var inst_59621 = (state_59676[(8)]);
var _ = (function (){var statearr_59718 = state_59676;
(statearr_59718[(4)] = cljs.core.cons((12),(state_59676[(4)])));

return statearr_59718;
})();
var inst_59641 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_59621) : chs__$1.call(null,inst_59621));
var inst_59642 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_59621) : done.call(null,inst_59621));
var inst_59643 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_59641,inst_59642);
var ___$1 = (function (){var statearr_59720 = state_59676;
(statearr_59720[(4)] = cljs.core.rest((state_59676[(4)])));

return statearr_59720;
})();
var state_59676__$1 = state_59676;
var statearr_59724_61481 = state_59676__$1;
(statearr_59724_61481[(2)] = inst_59643);

(statearr_59724_61481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59677 === (5))){
var inst_59653 = (state_59676[(2)]);
var state_59676__$1 = (function (){var statearr_59725 = state_59676;
(statearr_59725[(13)] = inst_59653);

return statearr_59725;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59676__$1,(13),dchan);
} else {
if((state_val_59677 === (14))){
var inst_59658 = cljs.core.async.close_BANG_(out);
var state_59676__$1 = state_59676;
var statearr_59726_61484 = state_59676__$1;
(statearr_59726_61484[(2)] = inst_59658);

(statearr_59726_61484[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59677 === (16))){
var inst_59665 = (state_59676[(2)]);
var state_59676__$1 = state_59676;
var statearr_59727_61487 = state_59676__$1;
(statearr_59727_61487[(2)] = inst_59665);

(statearr_59727_61487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59677 === (10))){
var inst_59621 = (state_59676[(8)]);
var inst_59646 = (state_59676[(2)]);
var inst_59647 = (inst_59621 + (1));
var inst_59621__$1 = inst_59647;
var state_59676__$1 = (function (){var statearr_59730 = state_59676;
(statearr_59730[(8)] = inst_59621__$1);

(statearr_59730[(14)] = inst_59646);

return statearr_59730;
})();
var statearr_59731_61492 = state_59676__$1;
(statearr_59731_61492[(2)] = null);

(statearr_59731_61492[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59677 === (8))){
var inst_59651 = (state_59676[(2)]);
var state_59676__$1 = state_59676;
var statearr_59738_61496 = state_59676__$1;
(statearr_59738_61496[(2)] = inst_59651);

(statearr_59738_61496[(1)] = (5));


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
var cljs$core$async$state_machine__57795__auto__ = null;
var cljs$core$async$state_machine__57795__auto____0 = (function (){
var statearr_59742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59742[(0)] = cljs$core$async$state_machine__57795__auto__);

(statearr_59742[(1)] = (1));

return statearr_59742;
});
var cljs$core$async$state_machine__57795__auto____1 = (function (state_59676){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_59676);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e59743){var ex__57798__auto__ = e59743;
var statearr_59746_61497 = state_59676;
(statearr_59746_61497[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_59676[(4)]))){
var statearr_59747_61498 = state_59676;
(statearr_59747_61498[(1)] = cljs.core.first((state_59676[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61499 = state_59676;
state_59676 = G__61499;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
cljs$core$async$state_machine__57795__auto__ = function(state_59676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57795__auto____1.call(this,state_59676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57795__auto____0;
cljs$core$async$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57795__auto____1;
return cljs$core$async$state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_59749 = f__57854__auto__();
(statearr_59749[(6)] = c__57853__auto___61462);

return statearr_59749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
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
var G__59762 = arguments.length;
switch (G__59762) {
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
var c__57853__auto___61504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_59809){
var state_val_59810 = (state_59809[(1)]);
if((state_val_59810 === (7))){
var inst_59784 = (state_59809[(7)]);
var inst_59785 = (state_59809[(8)]);
var inst_59784__$1 = (state_59809[(2)]);
var inst_59785__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59784__$1,(0),null);
var inst_59786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59784__$1,(1),null);
var inst_59787 = (inst_59785__$1 == null);
var state_59809__$1 = (function (){var statearr_59818 = state_59809;
(statearr_59818[(7)] = inst_59784__$1);

(statearr_59818[(8)] = inst_59785__$1);

(statearr_59818[(9)] = inst_59786);

return statearr_59818;
})();
if(cljs.core.truth_(inst_59787)){
var statearr_59823_61507 = state_59809__$1;
(statearr_59823_61507[(1)] = (8));

} else {
var statearr_59824_61509 = state_59809__$1;
(statearr_59824_61509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59810 === (1))){
var inst_59767 = cljs.core.vec(chs);
var inst_59768 = inst_59767;
var state_59809__$1 = (function (){var statearr_59825 = state_59809;
(statearr_59825[(10)] = inst_59768);

return statearr_59825;
})();
var statearr_59826_61510 = state_59809__$1;
(statearr_59826_61510[(2)] = null);

(statearr_59826_61510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59810 === (4))){
var inst_59768 = (state_59809[(10)]);
var state_59809__$1 = state_59809;
return cljs.core.async.ioc_alts_BANG_(state_59809__$1,(7),inst_59768);
} else {
if((state_val_59810 === (6))){
var inst_59805 = (state_59809[(2)]);
var state_59809__$1 = state_59809;
var statearr_59830_61512 = state_59809__$1;
(statearr_59830_61512[(2)] = inst_59805);

(statearr_59830_61512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59810 === (3))){
var inst_59807 = (state_59809[(2)]);
var state_59809__$1 = state_59809;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59809__$1,inst_59807);
} else {
if((state_val_59810 === (2))){
var inst_59768 = (state_59809[(10)]);
var inst_59771 = cljs.core.count(inst_59768);
var inst_59772 = (inst_59771 > (0));
var state_59809__$1 = state_59809;
if(cljs.core.truth_(inst_59772)){
var statearr_59832_61515 = state_59809__$1;
(statearr_59832_61515[(1)] = (4));

} else {
var statearr_59833_61516 = state_59809__$1;
(statearr_59833_61516[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59810 === (11))){
var inst_59768 = (state_59809[(10)]);
var inst_59798 = (state_59809[(2)]);
var tmp59831 = inst_59768;
var inst_59768__$1 = tmp59831;
var state_59809__$1 = (function (){var statearr_59835 = state_59809;
(statearr_59835[(10)] = inst_59768__$1);

(statearr_59835[(11)] = inst_59798);

return statearr_59835;
})();
var statearr_59836_61519 = state_59809__$1;
(statearr_59836_61519[(2)] = null);

(statearr_59836_61519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59810 === (9))){
var inst_59785 = (state_59809[(8)]);
var state_59809__$1 = state_59809;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59809__$1,(11),out,inst_59785);
} else {
if((state_val_59810 === (5))){
var inst_59803 = cljs.core.async.close_BANG_(out);
var state_59809__$1 = state_59809;
var statearr_59843_61520 = state_59809__$1;
(statearr_59843_61520[(2)] = inst_59803);

(statearr_59843_61520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59810 === (10))){
var inst_59801 = (state_59809[(2)]);
var state_59809__$1 = state_59809;
var statearr_59844_61522 = state_59809__$1;
(statearr_59844_61522[(2)] = inst_59801);

(statearr_59844_61522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59810 === (8))){
var inst_59768 = (state_59809[(10)]);
var inst_59784 = (state_59809[(7)]);
var inst_59785 = (state_59809[(8)]);
var inst_59786 = (state_59809[(9)]);
var inst_59793 = (function (){var cs = inst_59768;
var vec__59780 = inst_59784;
var v = inst_59785;
var c = inst_59786;
return (function (p1__59753_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__59753_SHARP_);
});
})();
var inst_59794 = cljs.core.filterv(inst_59793,inst_59768);
var inst_59768__$1 = inst_59794;
var state_59809__$1 = (function (){var statearr_59845 = state_59809;
(statearr_59845[(10)] = inst_59768__$1);

return statearr_59845;
})();
var statearr_59846_61525 = state_59809__$1;
(statearr_59846_61525[(2)] = null);

(statearr_59846_61525[(1)] = (2));


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
var cljs$core$async$state_machine__57795__auto__ = null;
var cljs$core$async$state_machine__57795__auto____0 = (function (){
var statearr_59847 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59847[(0)] = cljs$core$async$state_machine__57795__auto__);

(statearr_59847[(1)] = (1));

return statearr_59847;
});
var cljs$core$async$state_machine__57795__auto____1 = (function (state_59809){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_59809);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e59849){var ex__57798__auto__ = e59849;
var statearr_59850_61529 = state_59809;
(statearr_59850_61529[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_59809[(4)]))){
var statearr_59851_61530 = state_59809;
(statearr_59851_61530[(1)] = cljs.core.first((state_59809[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61531 = state_59809;
state_59809 = G__61531;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
cljs$core$async$state_machine__57795__auto__ = function(state_59809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57795__auto____1.call(this,state_59809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57795__auto____0;
cljs$core$async$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57795__auto____1;
return cljs$core$async$state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_59856 = f__57854__auto__();
(statearr_59856[(6)] = c__57853__auto___61504);

return statearr_59856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
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
var G__59868 = arguments.length;
switch (G__59868) {
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
var c__57853__auto___61538 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_59907){
var state_val_59908 = (state_59907[(1)]);
if((state_val_59908 === (7))){
var inst_59884 = (state_59907[(7)]);
var inst_59884__$1 = (state_59907[(2)]);
var inst_59890 = (inst_59884__$1 == null);
var inst_59891 = cljs.core.not(inst_59890);
var state_59907__$1 = (function (){var statearr_59917 = state_59907;
(statearr_59917[(7)] = inst_59884__$1);

return statearr_59917;
})();
if(inst_59891){
var statearr_59918_61545 = state_59907__$1;
(statearr_59918_61545[(1)] = (8));

} else {
var statearr_59920_61546 = state_59907__$1;
(statearr_59920_61546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (1))){
var inst_59879 = (0);
var state_59907__$1 = (function (){var statearr_59927 = state_59907;
(statearr_59927[(8)] = inst_59879);

return statearr_59927;
})();
var statearr_59929_61547 = state_59907__$1;
(statearr_59929_61547[(2)] = null);

(statearr_59929_61547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (4))){
var state_59907__$1 = state_59907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59907__$1,(7),ch);
} else {
if((state_val_59908 === (6))){
var inst_59902 = (state_59907[(2)]);
var state_59907__$1 = state_59907;
var statearr_59930_61553 = state_59907__$1;
(statearr_59930_61553[(2)] = inst_59902);

(statearr_59930_61553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (3))){
var inst_59904 = (state_59907[(2)]);
var inst_59905 = cljs.core.async.close_BANG_(out);
var state_59907__$1 = (function (){var statearr_59931 = state_59907;
(statearr_59931[(9)] = inst_59904);

return statearr_59931;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59907__$1,inst_59905);
} else {
if((state_val_59908 === (2))){
var inst_59879 = (state_59907[(8)]);
var inst_59881 = (inst_59879 < n);
var state_59907__$1 = state_59907;
if(cljs.core.truth_(inst_59881)){
var statearr_59932_61556 = state_59907__$1;
(statearr_59932_61556[(1)] = (4));

} else {
var statearr_59934_61558 = state_59907__$1;
(statearr_59934_61558[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (11))){
var inst_59879 = (state_59907[(8)]);
var inst_59894 = (state_59907[(2)]);
var inst_59895 = (inst_59879 + (1));
var inst_59879__$1 = inst_59895;
var state_59907__$1 = (function (){var statearr_59935 = state_59907;
(statearr_59935[(8)] = inst_59879__$1);

(statearr_59935[(10)] = inst_59894);

return statearr_59935;
})();
var statearr_59939_61563 = state_59907__$1;
(statearr_59939_61563[(2)] = null);

(statearr_59939_61563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (9))){
var state_59907__$1 = state_59907;
var statearr_59940_61565 = state_59907__$1;
(statearr_59940_61565[(2)] = null);

(statearr_59940_61565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (5))){
var state_59907__$1 = state_59907;
var statearr_59941_61566 = state_59907__$1;
(statearr_59941_61566[(2)] = null);

(statearr_59941_61566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (10))){
var inst_59899 = (state_59907[(2)]);
var state_59907__$1 = state_59907;
var statearr_59942_61568 = state_59907__$1;
(statearr_59942_61568[(2)] = inst_59899);

(statearr_59942_61568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59908 === (8))){
var inst_59884 = (state_59907[(7)]);
var state_59907__$1 = state_59907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59907__$1,(11),out,inst_59884);
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
var cljs$core$async$state_machine__57795__auto__ = null;
var cljs$core$async$state_machine__57795__auto____0 = (function (){
var statearr_59948 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59948[(0)] = cljs$core$async$state_machine__57795__auto__);

(statearr_59948[(1)] = (1));

return statearr_59948;
});
var cljs$core$async$state_machine__57795__auto____1 = (function (state_59907){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_59907);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e59955){var ex__57798__auto__ = e59955;
var statearr_59961_61573 = state_59907;
(statearr_59961_61573[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_59907[(4)]))){
var statearr_59963_61574 = state_59907;
(statearr_59963_61574[(1)] = cljs.core.first((state_59907[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61576 = state_59907;
state_59907 = G__61576;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
cljs$core$async$state_machine__57795__auto__ = function(state_59907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57795__auto____1.call(this,state_59907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57795__auto____0;
cljs$core$async$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57795__auto____1;
return cljs$core$async$state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_59975 = f__57854__auto__();
(statearr_59975[(6)] = c__57853__auto___61538);

return statearr_59975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59982 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59982 = (function (f,ch,meta59983){
this.f = f;
this.ch = ch;
this.meta59983 = meta59983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59984,meta59983__$1){
var self__ = this;
var _59984__$1 = this;
return (new cljs.core.async.t_cljs$core$async59982(self__.f,self__.ch,meta59983__$1));
}));

(cljs.core.async.t_cljs$core$async59982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59984){
var self__ = this;
var _59984__$1 = this;
return self__.meta59983;
}));

(cljs.core.async.t_cljs$core$async59982.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59982.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59982.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59982.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59982.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60015 = (function (f,ch,meta59983,_,fn1,meta60016){
this.f = f;
this.ch = ch;
this.meta59983 = meta59983;
this._ = _;
this.fn1 = fn1;
this.meta60016 = meta60016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60017,meta60016__$1){
var self__ = this;
var _60017__$1 = this;
return (new cljs.core.async.t_cljs$core$async60015(self__.f,self__.ch,self__.meta59983,self__._,self__.fn1,meta60016__$1));
}));

(cljs.core.async.t_cljs$core$async60015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60017){
var self__ = this;
var _60017__$1 = this;
return self__.meta60016;
}));

(cljs.core.async.t_cljs$core$async60015.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60015.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async60015.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async60015.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__59976_SHARP_){
var G__60037 = (((p1__59976_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__59976_SHARP_) : self__.f.call(null,p1__59976_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__60037) : f1.call(null,G__60037));
});
}));

(cljs.core.async.t_cljs$core$async60015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59983","meta59983",-1797451912,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async59982","cljs.core.async/t_cljs$core$async59982",-1186197138,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta60016","meta60016",-1813269662,null)], null);
}));

(cljs.core.async.t_cljs$core$async60015.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60015");

(cljs.core.async.t_cljs$core$async60015.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async60015");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60015.
 */
cljs.core.async.__GT_t_cljs$core$async60015 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async60015(f__$1,ch__$1,meta59983__$1,___$2,fn1__$1,meta60016){
return (new cljs.core.async.t_cljs$core$async60015(f__$1,ch__$1,meta59983__$1,___$2,fn1__$1,meta60016));
});

}

return (new cljs.core.async.t_cljs$core$async60015(self__.f,self__.ch,self__.meta59983,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__60041 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__60041) : self__.f.call(null,G__60041));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async59982.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59982.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async59982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59983","meta59983",-1797451912,null)], null);
}));

(cljs.core.async.t_cljs$core$async59982.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59982");

(cljs.core.async.t_cljs$core$async59982.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async59982");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59982.
 */
cljs.core.async.__GT_t_cljs$core$async59982 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async59982(f__$1,ch__$1,meta59983){
return (new cljs.core.async.t_cljs$core$async59982(f__$1,ch__$1,meta59983));
});

}

return (new cljs.core.async.t_cljs$core$async59982(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60052 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60052 = (function (f,ch,meta60053){
this.f = f;
this.ch = ch;
this.meta60053 = meta60053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60054,meta60053__$1){
var self__ = this;
var _60054__$1 = this;
return (new cljs.core.async.t_cljs$core$async60052(self__.f,self__.ch,meta60053__$1));
}));

(cljs.core.async.t_cljs$core$async60052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60054){
var self__ = this;
var _60054__$1 = this;
return self__.meta60053;
}));

(cljs.core.async.t_cljs$core$async60052.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60052.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60052.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60052.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async60052.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60052.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async60052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60053","meta60053",939053834,null)], null);
}));

(cljs.core.async.t_cljs$core$async60052.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60052");

(cljs.core.async.t_cljs$core$async60052.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async60052");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60052.
 */
cljs.core.async.__GT_t_cljs$core$async60052 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async60052(f__$1,ch__$1,meta60053){
return (new cljs.core.async.t_cljs$core$async60052(f__$1,ch__$1,meta60053));
});

}

return (new cljs.core.async.t_cljs$core$async60052(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60069 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60069 = (function (p,ch,meta60070){
this.p = p;
this.ch = ch;
this.meta60070 = meta60070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60071,meta60070__$1){
var self__ = this;
var _60071__$1 = this;
return (new cljs.core.async.t_cljs$core$async60069(self__.p,self__.ch,meta60070__$1));
}));

(cljs.core.async.t_cljs$core$async60069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60071){
var self__ = this;
var _60071__$1 = this;
return self__.meta60070;
}));

(cljs.core.async.t_cljs$core$async60069.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60069.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60069.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60069.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60069.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async60069.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60069.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async60069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60070","meta60070",-688608078,null)], null);
}));

(cljs.core.async.t_cljs$core$async60069.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60069");

(cljs.core.async.t_cljs$core$async60069.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async60069");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60069.
 */
cljs.core.async.__GT_t_cljs$core$async60069 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async60069(p__$1,ch__$1,meta60070){
return (new cljs.core.async.t_cljs$core$async60069(p__$1,ch__$1,meta60070));
});

}

return (new cljs.core.async.t_cljs$core$async60069(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__60088 = arguments.length;
switch (G__60088) {
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
var c__57853__auto___61616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_60109){
var state_val_60110 = (state_60109[(1)]);
if((state_val_60110 === (7))){
var inst_60105 = (state_60109[(2)]);
var state_60109__$1 = state_60109;
var statearr_60111_61621 = state_60109__$1;
(statearr_60111_61621[(2)] = inst_60105);

(statearr_60111_61621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60110 === (1))){
var state_60109__$1 = state_60109;
var statearr_60112_61622 = state_60109__$1;
(statearr_60112_61622[(2)] = null);

(statearr_60112_61622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60110 === (4))){
var inst_60091 = (state_60109[(7)]);
var inst_60091__$1 = (state_60109[(2)]);
var inst_60092 = (inst_60091__$1 == null);
var state_60109__$1 = (function (){var statearr_60113 = state_60109;
(statearr_60113[(7)] = inst_60091__$1);

return statearr_60113;
})();
if(cljs.core.truth_(inst_60092)){
var statearr_60114_61627 = state_60109__$1;
(statearr_60114_61627[(1)] = (5));

} else {
var statearr_60117_61631 = state_60109__$1;
(statearr_60117_61631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60110 === (6))){
var inst_60091 = (state_60109[(7)]);
var inst_60096 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_60091) : p.call(null,inst_60091));
var state_60109__$1 = state_60109;
if(cljs.core.truth_(inst_60096)){
var statearr_60118_61634 = state_60109__$1;
(statearr_60118_61634[(1)] = (8));

} else {
var statearr_60119_61635 = state_60109__$1;
(statearr_60119_61635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60110 === (3))){
var inst_60107 = (state_60109[(2)]);
var state_60109__$1 = state_60109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60109__$1,inst_60107);
} else {
if((state_val_60110 === (2))){
var state_60109__$1 = state_60109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60109__$1,(4),ch);
} else {
if((state_val_60110 === (11))){
var inst_60099 = (state_60109[(2)]);
var state_60109__$1 = state_60109;
var statearr_60120_61637 = state_60109__$1;
(statearr_60120_61637[(2)] = inst_60099);

(statearr_60120_61637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60110 === (9))){
var state_60109__$1 = state_60109;
var statearr_60121_61638 = state_60109__$1;
(statearr_60121_61638[(2)] = null);

(statearr_60121_61638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60110 === (5))){
var inst_60094 = cljs.core.async.close_BANG_(out);
var state_60109__$1 = state_60109;
var statearr_60122_61642 = state_60109__$1;
(statearr_60122_61642[(2)] = inst_60094);

(statearr_60122_61642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60110 === (10))){
var inst_60102 = (state_60109[(2)]);
var state_60109__$1 = (function (){var statearr_60126 = state_60109;
(statearr_60126[(8)] = inst_60102);

return statearr_60126;
})();
var statearr_60127_61645 = state_60109__$1;
(statearr_60127_61645[(2)] = null);

(statearr_60127_61645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60110 === (8))){
var inst_60091 = (state_60109[(7)]);
var state_60109__$1 = state_60109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60109__$1,(11),out,inst_60091);
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
var cljs$core$async$state_machine__57795__auto__ = null;
var cljs$core$async$state_machine__57795__auto____0 = (function (){
var statearr_60128 = [null,null,null,null,null,null,null,null,null];
(statearr_60128[(0)] = cljs$core$async$state_machine__57795__auto__);

(statearr_60128[(1)] = (1));

return statearr_60128;
});
var cljs$core$async$state_machine__57795__auto____1 = (function (state_60109){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_60109);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e60132){var ex__57798__auto__ = e60132;
var statearr_60133_61650 = state_60109;
(statearr_60133_61650[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_60109[(4)]))){
var statearr_60134_61651 = state_60109;
(statearr_60134_61651[(1)] = cljs.core.first((state_60109[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61654 = state_60109;
state_60109 = G__61654;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
cljs$core$async$state_machine__57795__auto__ = function(state_60109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57795__auto____1.call(this,state_60109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57795__auto____0;
cljs$core$async$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57795__auto____1;
return cljs$core$async$state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_60135 = f__57854__auto__();
(statearr_60135[(6)] = c__57853__auto___61616);

return statearr_60135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__60137 = arguments.length;
switch (G__60137) {
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
var c__57853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_60205){
var state_val_60206 = (state_60205[(1)]);
if((state_val_60206 === (7))){
var inst_60201 = (state_60205[(2)]);
var state_60205__$1 = state_60205;
var statearr_60209_61676 = state_60205__$1;
(statearr_60209_61676[(2)] = inst_60201);

(statearr_60209_61676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (20))){
var inst_60170 = (state_60205[(7)]);
var inst_60182 = (state_60205[(2)]);
var inst_60183 = cljs.core.next(inst_60170);
var inst_60154 = inst_60183;
var inst_60155 = null;
var inst_60156 = (0);
var inst_60157 = (0);
var state_60205__$1 = (function (){var statearr_60210 = state_60205;
(statearr_60210[(8)] = inst_60154);

(statearr_60210[(9)] = inst_60182);

(statearr_60210[(10)] = inst_60155);

(statearr_60210[(11)] = inst_60156);

(statearr_60210[(12)] = inst_60157);

return statearr_60210;
})();
var statearr_60211_61679 = state_60205__$1;
(statearr_60211_61679[(2)] = null);

(statearr_60211_61679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (1))){
var state_60205__$1 = state_60205;
var statearr_60212_61680 = state_60205__$1;
(statearr_60212_61680[(2)] = null);

(statearr_60212_61680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (4))){
var inst_60143 = (state_60205[(13)]);
var inst_60143__$1 = (state_60205[(2)]);
var inst_60144 = (inst_60143__$1 == null);
var state_60205__$1 = (function (){var statearr_60215 = state_60205;
(statearr_60215[(13)] = inst_60143__$1);

return statearr_60215;
})();
if(cljs.core.truth_(inst_60144)){
var statearr_60216_61681 = state_60205__$1;
(statearr_60216_61681[(1)] = (5));

} else {
var statearr_60217_61682 = state_60205__$1;
(statearr_60217_61682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (15))){
var state_60205__$1 = state_60205;
var statearr_60221_61683 = state_60205__$1;
(statearr_60221_61683[(2)] = null);

(statearr_60221_61683[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (21))){
var state_60205__$1 = state_60205;
var statearr_60222_61684 = state_60205__$1;
(statearr_60222_61684[(2)] = null);

(statearr_60222_61684[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (13))){
var inst_60154 = (state_60205[(8)]);
var inst_60155 = (state_60205[(10)]);
var inst_60156 = (state_60205[(11)]);
var inst_60157 = (state_60205[(12)]);
var inst_60165 = (state_60205[(2)]);
var inst_60166 = (inst_60157 + (1));
var tmp60218 = inst_60154;
var tmp60219 = inst_60155;
var tmp60220 = inst_60156;
var inst_60154__$1 = tmp60218;
var inst_60155__$1 = tmp60219;
var inst_60156__$1 = tmp60220;
var inst_60157__$1 = inst_60166;
var state_60205__$1 = (function (){var statearr_60230 = state_60205;
(statearr_60230[(8)] = inst_60154__$1);

(statearr_60230[(14)] = inst_60165);

(statearr_60230[(10)] = inst_60155__$1);

(statearr_60230[(11)] = inst_60156__$1);

(statearr_60230[(12)] = inst_60157__$1);

return statearr_60230;
})();
var statearr_60232_61685 = state_60205__$1;
(statearr_60232_61685[(2)] = null);

(statearr_60232_61685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (22))){
var state_60205__$1 = state_60205;
var statearr_60234_61688 = state_60205__$1;
(statearr_60234_61688[(2)] = null);

(statearr_60234_61688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (6))){
var inst_60143 = (state_60205[(13)]);
var inst_60152 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_60143) : f.call(null,inst_60143));
var inst_60153 = cljs.core.seq(inst_60152);
var inst_60154 = inst_60153;
var inst_60155 = null;
var inst_60156 = (0);
var inst_60157 = (0);
var state_60205__$1 = (function (){var statearr_60239 = state_60205;
(statearr_60239[(8)] = inst_60154);

(statearr_60239[(10)] = inst_60155);

(statearr_60239[(11)] = inst_60156);

(statearr_60239[(12)] = inst_60157);

return statearr_60239;
})();
var statearr_60240_61695 = state_60205__$1;
(statearr_60240_61695[(2)] = null);

(statearr_60240_61695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (17))){
var inst_60170 = (state_60205[(7)]);
var inst_60175 = cljs.core.chunk_first(inst_60170);
var inst_60176 = cljs.core.chunk_rest(inst_60170);
var inst_60177 = cljs.core.count(inst_60175);
var inst_60154 = inst_60176;
var inst_60155 = inst_60175;
var inst_60156 = inst_60177;
var inst_60157 = (0);
var state_60205__$1 = (function (){var statearr_60242 = state_60205;
(statearr_60242[(8)] = inst_60154);

(statearr_60242[(10)] = inst_60155);

(statearr_60242[(11)] = inst_60156);

(statearr_60242[(12)] = inst_60157);

return statearr_60242;
})();
var statearr_60243_61696 = state_60205__$1;
(statearr_60243_61696[(2)] = null);

(statearr_60243_61696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (3))){
var inst_60203 = (state_60205[(2)]);
var state_60205__$1 = state_60205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60205__$1,inst_60203);
} else {
if((state_val_60206 === (12))){
var inst_60191 = (state_60205[(2)]);
var state_60205__$1 = state_60205;
var statearr_60247_61697 = state_60205__$1;
(statearr_60247_61697[(2)] = inst_60191);

(statearr_60247_61697[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (2))){
var state_60205__$1 = state_60205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60205__$1,(4),in$);
} else {
if((state_val_60206 === (23))){
var inst_60199 = (state_60205[(2)]);
var state_60205__$1 = state_60205;
var statearr_60248_61698 = state_60205__$1;
(statearr_60248_61698[(2)] = inst_60199);

(statearr_60248_61698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (19))){
var inst_60186 = (state_60205[(2)]);
var state_60205__$1 = state_60205;
var statearr_60249_61699 = state_60205__$1;
(statearr_60249_61699[(2)] = inst_60186);

(statearr_60249_61699[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (11))){
var inst_60154 = (state_60205[(8)]);
var inst_60170 = (state_60205[(7)]);
var inst_60170__$1 = cljs.core.seq(inst_60154);
var state_60205__$1 = (function (){var statearr_60253 = state_60205;
(statearr_60253[(7)] = inst_60170__$1);

return statearr_60253;
})();
if(inst_60170__$1){
var statearr_60254_61700 = state_60205__$1;
(statearr_60254_61700[(1)] = (14));

} else {
var statearr_60255_61703 = state_60205__$1;
(statearr_60255_61703[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (9))){
var inst_60193 = (state_60205[(2)]);
var inst_60194 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_60205__$1 = (function (){var statearr_60257 = state_60205;
(statearr_60257[(15)] = inst_60193);

return statearr_60257;
})();
if(cljs.core.truth_(inst_60194)){
var statearr_60260_61708 = state_60205__$1;
(statearr_60260_61708[(1)] = (21));

} else {
var statearr_60261_61709 = state_60205__$1;
(statearr_60261_61709[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (5))){
var inst_60146 = cljs.core.async.close_BANG_(out);
var state_60205__$1 = state_60205;
var statearr_60262_61710 = state_60205__$1;
(statearr_60262_61710[(2)] = inst_60146);

(statearr_60262_61710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (14))){
var inst_60170 = (state_60205[(7)]);
var inst_60173 = cljs.core.chunked_seq_QMARK_(inst_60170);
var state_60205__$1 = state_60205;
if(inst_60173){
var statearr_60263_61711 = state_60205__$1;
(statearr_60263_61711[(1)] = (17));

} else {
var statearr_60264_61712 = state_60205__$1;
(statearr_60264_61712[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (16))){
var inst_60189 = (state_60205[(2)]);
var state_60205__$1 = state_60205;
var statearr_60265_61713 = state_60205__$1;
(statearr_60265_61713[(2)] = inst_60189);

(statearr_60265_61713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60206 === (10))){
var inst_60155 = (state_60205[(10)]);
var inst_60157 = (state_60205[(12)]);
var inst_60163 = cljs.core._nth(inst_60155,inst_60157);
var state_60205__$1 = state_60205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60205__$1,(13),out,inst_60163);
} else {
if((state_val_60206 === (18))){
var inst_60170 = (state_60205[(7)]);
var inst_60180 = cljs.core.first(inst_60170);
var state_60205__$1 = state_60205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60205__$1,(20),out,inst_60180);
} else {
if((state_val_60206 === (8))){
var inst_60156 = (state_60205[(11)]);
var inst_60157 = (state_60205[(12)]);
var inst_60160 = (inst_60157 < inst_60156);
var inst_60161 = inst_60160;
var state_60205__$1 = state_60205;
if(cljs.core.truth_(inst_60161)){
var statearr_60267_61714 = state_60205__$1;
(statearr_60267_61714[(1)] = (10));

} else {
var statearr_60268_61715 = state_60205__$1;
(statearr_60268_61715[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__57795__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__57795__auto____0 = (function (){
var statearr_60272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60272[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__57795__auto__);

(statearr_60272[(1)] = (1));

return statearr_60272;
});
var cljs$core$async$mapcat_STAR__$_state_machine__57795__auto____1 = (function (state_60205){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_60205);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e60276){var ex__57798__auto__ = e60276;
var statearr_60277_61718 = state_60205;
(statearr_60277_61718[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_60205[(4)]))){
var statearr_60278_61719 = state_60205;
(statearr_60278_61719[(1)] = cljs.core.first((state_60205[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61720 = state_60205;
state_60205 = G__61720;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__57795__auto__ = function(state_60205){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__57795__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__57795__auto____1.call(this,state_60205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__57795__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__57795__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_60281 = f__57854__auto__();
(statearr_60281[(6)] = c__57853__auto__);

return statearr_60281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));

return c__57853__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__60283 = arguments.length;
switch (G__60283) {
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
var G__60291 = arguments.length;
switch (G__60291) {
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
var G__60298 = arguments.length;
switch (G__60298) {
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
var c__57853__auto___61735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_60331){
var state_val_60332 = (state_60331[(1)]);
if((state_val_60332 === (7))){
var inst_60326 = (state_60331[(2)]);
var state_60331__$1 = state_60331;
var statearr_60338_61737 = state_60331__$1;
(statearr_60338_61737[(2)] = inst_60326);

(statearr_60338_61737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60332 === (1))){
var inst_60308 = null;
var state_60331__$1 = (function (){var statearr_60340 = state_60331;
(statearr_60340[(7)] = inst_60308);

return statearr_60340;
})();
var statearr_60342_61738 = state_60331__$1;
(statearr_60342_61738[(2)] = null);

(statearr_60342_61738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60332 === (4))){
var inst_60311 = (state_60331[(8)]);
var inst_60311__$1 = (state_60331[(2)]);
var inst_60312 = (inst_60311__$1 == null);
var inst_60313 = cljs.core.not(inst_60312);
var state_60331__$1 = (function (){var statearr_60343 = state_60331;
(statearr_60343[(8)] = inst_60311__$1);

return statearr_60343;
})();
if(inst_60313){
var statearr_60345_61739 = state_60331__$1;
(statearr_60345_61739[(1)] = (5));

} else {
var statearr_60350_61740 = state_60331__$1;
(statearr_60350_61740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60332 === (6))){
var state_60331__$1 = state_60331;
var statearr_60351_61741 = state_60331__$1;
(statearr_60351_61741[(2)] = null);

(statearr_60351_61741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60332 === (3))){
var inst_60328 = (state_60331[(2)]);
var inst_60329 = cljs.core.async.close_BANG_(out);
var state_60331__$1 = (function (){var statearr_60356 = state_60331;
(statearr_60356[(9)] = inst_60328);

return statearr_60356;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60331__$1,inst_60329);
} else {
if((state_val_60332 === (2))){
var state_60331__$1 = state_60331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60331__$1,(4),ch);
} else {
if((state_val_60332 === (11))){
var inst_60311 = (state_60331[(8)]);
var inst_60320 = (state_60331[(2)]);
var inst_60308 = inst_60311;
var state_60331__$1 = (function (){var statearr_60357 = state_60331;
(statearr_60357[(7)] = inst_60308);

(statearr_60357[(10)] = inst_60320);

return statearr_60357;
})();
var statearr_60358_61748 = state_60331__$1;
(statearr_60358_61748[(2)] = null);

(statearr_60358_61748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60332 === (9))){
var inst_60311 = (state_60331[(8)]);
var state_60331__$1 = state_60331;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60331__$1,(11),out,inst_60311);
} else {
if((state_val_60332 === (5))){
var inst_60311 = (state_60331[(8)]);
var inst_60308 = (state_60331[(7)]);
var inst_60315 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60311,inst_60308);
var state_60331__$1 = state_60331;
if(inst_60315){
var statearr_60360_61749 = state_60331__$1;
(statearr_60360_61749[(1)] = (8));

} else {
var statearr_60361_61750 = state_60331__$1;
(statearr_60361_61750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60332 === (10))){
var inst_60323 = (state_60331[(2)]);
var state_60331__$1 = state_60331;
var statearr_60362_61751 = state_60331__$1;
(statearr_60362_61751[(2)] = inst_60323);

(statearr_60362_61751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60332 === (8))){
var inst_60308 = (state_60331[(7)]);
var tmp60359 = inst_60308;
var inst_60308__$1 = tmp60359;
var state_60331__$1 = (function (){var statearr_60363 = state_60331;
(statearr_60363[(7)] = inst_60308__$1);

return statearr_60363;
})();
var statearr_60364_61752 = state_60331__$1;
(statearr_60364_61752[(2)] = null);

(statearr_60364_61752[(1)] = (2));


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
var cljs$core$async$state_machine__57795__auto__ = null;
var cljs$core$async$state_machine__57795__auto____0 = (function (){
var statearr_60368 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60368[(0)] = cljs$core$async$state_machine__57795__auto__);

(statearr_60368[(1)] = (1));

return statearr_60368;
});
var cljs$core$async$state_machine__57795__auto____1 = (function (state_60331){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_60331);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e60369){var ex__57798__auto__ = e60369;
var statearr_60370_61759 = state_60331;
(statearr_60370_61759[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_60331[(4)]))){
var statearr_60372_61760 = state_60331;
(statearr_60372_61760[(1)] = cljs.core.first((state_60331[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61761 = state_60331;
state_60331 = G__61761;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
cljs$core$async$state_machine__57795__auto__ = function(state_60331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57795__auto____1.call(this,state_60331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57795__auto____0;
cljs$core$async$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57795__auto____1;
return cljs$core$async$state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_60375 = f__57854__auto__();
(statearr_60375[(6)] = c__57853__auto___61735);

return statearr_60375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__60377 = arguments.length;
switch (G__60377) {
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
var c__57853__auto___61766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_60420){
var state_val_60421 = (state_60420[(1)]);
if((state_val_60421 === (7))){
var inst_60416 = (state_60420[(2)]);
var state_60420__$1 = state_60420;
var statearr_60425_61767 = state_60420__$1;
(statearr_60425_61767[(2)] = inst_60416);

(statearr_60425_61767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60421 === (1))){
var inst_60383 = (new Array(n));
var inst_60384 = inst_60383;
var inst_60385 = (0);
var state_60420__$1 = (function (){var statearr_60426 = state_60420;
(statearr_60426[(7)] = inst_60385);

(statearr_60426[(8)] = inst_60384);

return statearr_60426;
})();
var statearr_60431_61768 = state_60420__$1;
(statearr_60431_61768[(2)] = null);

(statearr_60431_61768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60421 === (4))){
var inst_60388 = (state_60420[(9)]);
var inst_60388__$1 = (state_60420[(2)]);
var inst_60389 = (inst_60388__$1 == null);
var inst_60390 = cljs.core.not(inst_60389);
var state_60420__$1 = (function (){var statearr_60435 = state_60420;
(statearr_60435[(9)] = inst_60388__$1);

return statearr_60435;
})();
if(inst_60390){
var statearr_60436_61772 = state_60420__$1;
(statearr_60436_61772[(1)] = (5));

} else {
var statearr_60437_61773 = state_60420__$1;
(statearr_60437_61773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60421 === (15))){
var inst_60410 = (state_60420[(2)]);
var state_60420__$1 = state_60420;
var statearr_60439_61774 = state_60420__$1;
(statearr_60439_61774[(2)] = inst_60410);

(statearr_60439_61774[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60421 === (13))){
var state_60420__$1 = state_60420;
var statearr_60440_61775 = state_60420__$1;
(statearr_60440_61775[(2)] = null);

(statearr_60440_61775[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60421 === (6))){
var inst_60385 = (state_60420[(7)]);
var inst_60406 = (inst_60385 > (0));
var state_60420__$1 = state_60420;
if(cljs.core.truth_(inst_60406)){
var statearr_60443_61776 = state_60420__$1;
(statearr_60443_61776[(1)] = (12));

} else {
var statearr_60444_61777 = state_60420__$1;
(statearr_60444_61777[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60421 === (3))){
var inst_60418 = (state_60420[(2)]);
var state_60420__$1 = state_60420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60420__$1,inst_60418);
} else {
if((state_val_60421 === (12))){
var inst_60384 = (state_60420[(8)]);
var inst_60408 = cljs.core.vec(inst_60384);
var state_60420__$1 = state_60420;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60420__$1,(15),out,inst_60408);
} else {
if((state_val_60421 === (2))){
var state_60420__$1 = state_60420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60420__$1,(4),ch);
} else {
if((state_val_60421 === (11))){
var inst_60400 = (state_60420[(2)]);
var inst_60401 = (new Array(n));
var inst_60384 = inst_60401;
var inst_60385 = (0);
var state_60420__$1 = (function (){var statearr_60445 = state_60420;
(statearr_60445[(10)] = inst_60400);

(statearr_60445[(7)] = inst_60385);

(statearr_60445[(8)] = inst_60384);

return statearr_60445;
})();
var statearr_60446_61779 = state_60420__$1;
(statearr_60446_61779[(2)] = null);

(statearr_60446_61779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60421 === (9))){
var inst_60384 = (state_60420[(8)]);
var inst_60398 = cljs.core.vec(inst_60384);
var state_60420__$1 = state_60420;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60420__$1,(11),out,inst_60398);
} else {
if((state_val_60421 === (5))){
var inst_60393 = (state_60420[(11)]);
var inst_60385 = (state_60420[(7)]);
var inst_60384 = (state_60420[(8)]);
var inst_60388 = (state_60420[(9)]);
var inst_60392 = (inst_60384[inst_60385] = inst_60388);
var inst_60393__$1 = (inst_60385 + (1));
var inst_60394 = (inst_60393__$1 < n);
var state_60420__$1 = (function (){var statearr_60449 = state_60420;
(statearr_60449[(11)] = inst_60393__$1);

(statearr_60449[(12)] = inst_60392);

return statearr_60449;
})();
if(cljs.core.truth_(inst_60394)){
var statearr_60450_61782 = state_60420__$1;
(statearr_60450_61782[(1)] = (8));

} else {
var statearr_60451_61783 = state_60420__$1;
(statearr_60451_61783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60421 === (14))){
var inst_60413 = (state_60420[(2)]);
var inst_60414 = cljs.core.async.close_BANG_(out);
var state_60420__$1 = (function (){var statearr_60458 = state_60420;
(statearr_60458[(13)] = inst_60413);

return statearr_60458;
})();
var statearr_60459_61785 = state_60420__$1;
(statearr_60459_61785[(2)] = inst_60414);

(statearr_60459_61785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60421 === (10))){
var inst_60404 = (state_60420[(2)]);
var state_60420__$1 = state_60420;
var statearr_60460_61786 = state_60420__$1;
(statearr_60460_61786[(2)] = inst_60404);

(statearr_60460_61786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60421 === (8))){
var inst_60393 = (state_60420[(11)]);
var inst_60384 = (state_60420[(8)]);
var tmp60454 = inst_60384;
var inst_60384__$1 = tmp60454;
var inst_60385 = inst_60393;
var state_60420__$1 = (function (){var statearr_60463 = state_60420;
(statearr_60463[(7)] = inst_60385);

(statearr_60463[(8)] = inst_60384__$1);

return statearr_60463;
})();
var statearr_60465_61787 = state_60420__$1;
(statearr_60465_61787[(2)] = null);

(statearr_60465_61787[(1)] = (2));


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
var cljs$core$async$state_machine__57795__auto__ = null;
var cljs$core$async$state_machine__57795__auto____0 = (function (){
var statearr_60468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60468[(0)] = cljs$core$async$state_machine__57795__auto__);

(statearr_60468[(1)] = (1));

return statearr_60468;
});
var cljs$core$async$state_machine__57795__auto____1 = (function (state_60420){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_60420);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e60469){var ex__57798__auto__ = e60469;
var statearr_60470_61790 = state_60420;
(statearr_60470_61790[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_60420[(4)]))){
var statearr_60471_61791 = state_60420;
(statearr_60471_61791[(1)] = cljs.core.first((state_60420[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61793 = state_60420;
state_60420 = G__61793;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
cljs$core$async$state_machine__57795__auto__ = function(state_60420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57795__auto____1.call(this,state_60420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57795__auto____0;
cljs$core$async$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57795__auto____1;
return cljs$core$async$state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_60475 = f__57854__auto__();
(statearr_60475[(6)] = c__57853__auto___61766);

return statearr_60475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__60484 = arguments.length;
switch (G__60484) {
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
var c__57853__auto___61797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__57854__auto__ = (function (){var switch__57794__auto__ = (function (state_60552){
var state_val_60553 = (state_60552[(1)]);
if((state_val_60553 === (7))){
var inst_60542 = (state_60552[(2)]);
var state_60552__$1 = state_60552;
var statearr_60555_61799 = state_60552__$1;
(statearr_60555_61799[(2)] = inst_60542);

(statearr_60555_61799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60553 === (1))){
var inst_60492 = [];
var inst_60493 = inst_60492;
var inst_60494 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_60552__$1 = (function (){var statearr_60556 = state_60552;
(statearr_60556[(7)] = inst_60493);

(statearr_60556[(8)] = inst_60494);

return statearr_60556;
})();
var statearr_60558_61800 = state_60552__$1;
(statearr_60558_61800[(2)] = null);

(statearr_60558_61800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60553 === (4))){
var inst_60497 = (state_60552[(9)]);
var inst_60497__$1 = (state_60552[(2)]);
var inst_60498 = (inst_60497__$1 == null);
var inst_60499 = cljs.core.not(inst_60498);
var state_60552__$1 = (function (){var statearr_60561 = state_60552;
(statearr_60561[(9)] = inst_60497__$1);

return statearr_60561;
})();
if(inst_60499){
var statearr_60564_61801 = state_60552__$1;
(statearr_60564_61801[(1)] = (5));

} else {
var statearr_60567_61802 = state_60552__$1;
(statearr_60567_61802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60553 === (15))){
var inst_60493 = (state_60552[(7)]);
var inst_60533 = cljs.core.vec(inst_60493);
var state_60552__$1 = state_60552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60552__$1,(18),out,inst_60533);
} else {
if((state_val_60553 === (13))){
var inst_60528 = (state_60552[(2)]);
var state_60552__$1 = state_60552;
var statearr_60569_61803 = state_60552__$1;
(statearr_60569_61803[(2)] = inst_60528);

(statearr_60569_61803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60553 === (6))){
var inst_60493 = (state_60552[(7)]);
var inst_60530 = inst_60493.length;
var inst_60531 = (inst_60530 > (0));
var state_60552__$1 = state_60552;
if(cljs.core.truth_(inst_60531)){
var statearr_60572_61808 = state_60552__$1;
(statearr_60572_61808[(1)] = (15));

} else {
var statearr_60574_61811 = state_60552__$1;
(statearr_60574_61811[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60553 === (17))){
var inst_60539 = (state_60552[(2)]);
var inst_60540 = cljs.core.async.close_BANG_(out);
var state_60552__$1 = (function (){var statearr_60576 = state_60552;
(statearr_60576[(10)] = inst_60539);

return statearr_60576;
})();
var statearr_60580_61812 = state_60552__$1;
(statearr_60580_61812[(2)] = inst_60540);

(statearr_60580_61812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60553 === (3))){
var inst_60544 = (state_60552[(2)]);
var state_60552__$1 = state_60552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60552__$1,inst_60544);
} else {
if((state_val_60553 === (12))){
var inst_60493 = (state_60552[(7)]);
var inst_60518 = cljs.core.vec(inst_60493);
var state_60552__$1 = state_60552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60552__$1,(14),out,inst_60518);
} else {
if((state_val_60553 === (2))){
var state_60552__$1 = state_60552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60552__$1,(4),ch);
} else {
if((state_val_60553 === (11))){
var inst_60503 = (state_60552[(11)]);
var inst_60493 = (state_60552[(7)]);
var inst_60497 = (state_60552[(9)]);
var inst_60514 = inst_60493.push(inst_60497);
var tmp60581 = inst_60493;
var inst_60493__$1 = tmp60581;
var inst_60494 = inst_60503;
var state_60552__$1 = (function (){var statearr_60587 = state_60552;
(statearr_60587[(7)] = inst_60493__$1);

(statearr_60587[(12)] = inst_60514);

(statearr_60587[(8)] = inst_60494);

return statearr_60587;
})();
var statearr_60588_61839 = state_60552__$1;
(statearr_60588_61839[(2)] = null);

(statearr_60588_61839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60553 === (9))){
var inst_60494 = (state_60552[(8)]);
var inst_60509 = cljs.core.keyword_identical_QMARK_(inst_60494,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_60552__$1 = state_60552;
var statearr_60589_61842 = state_60552__$1;
(statearr_60589_61842[(2)] = inst_60509);

(statearr_60589_61842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60553 === (5))){
var inst_60506 = (state_60552[(13)]);
var inst_60503 = (state_60552[(11)]);
var inst_60497 = (state_60552[(9)]);
var inst_60494 = (state_60552[(8)]);
var inst_60503__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_60497) : f.call(null,inst_60497));
var inst_60506__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60503__$1,inst_60494);
var state_60552__$1 = (function (){var statearr_60590 = state_60552;
(statearr_60590[(13)] = inst_60506__$1);

(statearr_60590[(11)] = inst_60503__$1);

return statearr_60590;
})();
if(inst_60506__$1){
var statearr_60592_61845 = state_60552__$1;
(statearr_60592_61845[(1)] = (8));

} else {
var statearr_60594_61846 = state_60552__$1;
(statearr_60594_61846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60553 === (14))){
var inst_60503 = (state_60552[(11)]);
var inst_60497 = (state_60552[(9)]);
var inst_60520 = (state_60552[(2)]);
var inst_60521 = [];
var inst_60522 = inst_60521.push(inst_60497);
var inst_60493 = inst_60521;
var inst_60494 = inst_60503;
var state_60552__$1 = (function (){var statearr_60595 = state_60552;
(statearr_60595[(14)] = inst_60522);

(statearr_60595[(15)] = inst_60520);

(statearr_60595[(7)] = inst_60493);

(statearr_60595[(8)] = inst_60494);

return statearr_60595;
})();
var statearr_60599_61847 = state_60552__$1;
(statearr_60599_61847[(2)] = null);

(statearr_60599_61847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60553 === (16))){
var state_60552__$1 = state_60552;
var statearr_60601_61848 = state_60552__$1;
(statearr_60601_61848[(2)] = null);

(statearr_60601_61848[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60553 === (10))){
var inst_60511 = (state_60552[(2)]);
var state_60552__$1 = state_60552;
if(cljs.core.truth_(inst_60511)){
var statearr_60604_61849 = state_60552__$1;
(statearr_60604_61849[(1)] = (11));

} else {
var statearr_60605_61850 = state_60552__$1;
(statearr_60605_61850[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60553 === (18))){
var inst_60535 = (state_60552[(2)]);
var state_60552__$1 = state_60552;
var statearr_60607_61851 = state_60552__$1;
(statearr_60607_61851[(2)] = inst_60535);

(statearr_60607_61851[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60553 === (8))){
var inst_60506 = (state_60552[(13)]);
var state_60552__$1 = state_60552;
var statearr_60610_61852 = state_60552__$1;
(statearr_60610_61852[(2)] = inst_60506);

(statearr_60610_61852[(1)] = (10));


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
var cljs$core$async$state_machine__57795__auto__ = null;
var cljs$core$async$state_machine__57795__auto____0 = (function (){
var statearr_60615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60615[(0)] = cljs$core$async$state_machine__57795__auto__);

(statearr_60615[(1)] = (1));

return statearr_60615;
});
var cljs$core$async$state_machine__57795__auto____1 = (function (state_60552){
while(true){
var ret_value__57796__auto__ = (function (){try{while(true){
var result__57797__auto__ = switch__57794__auto__(state_60552);
if(cljs.core.keyword_identical_QMARK_(result__57797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57797__auto__;
}
break;
}
}catch (e60616){var ex__57798__auto__ = e60616;
var statearr_60618_61854 = state_60552;
(statearr_60618_61854[(2)] = ex__57798__auto__);


if(cljs.core.seq((state_60552[(4)]))){
var statearr_60620_61855 = state_60552;
(statearr_60620_61855[(1)] = cljs.core.first((state_60552[(4)])));

} else {
throw ex__57798__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61856 = state_60552;
state_60552 = G__61856;
continue;
} else {
return ret_value__57796__auto__;
}
break;
}
});
cljs$core$async$state_machine__57795__auto__ = function(state_60552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57795__auto____1.call(this,state_60552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57795__auto____0;
cljs$core$async$state_machine__57795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57795__auto____1;
return cljs$core$async$state_machine__57795__auto__;
})()
})();
var state__57855__auto__ = (function (){var statearr_60621 = f__57854__auto__();
(statearr_60621[(6)] = c__57853__auto___61797);

return statearr_60621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__57855__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
