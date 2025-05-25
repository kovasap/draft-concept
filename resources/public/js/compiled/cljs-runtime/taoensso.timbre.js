goog.provide('taoensso.timbre');
if(cljs.core.vector_QMARK_(taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(126),(2)], null));
} else {
taoensso.encore.assert_min_encore_version(2.126);
}
/**
 * Controls (:timestamp_ data)
 */
taoensso.timbre.default_timestamp_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"iso8601","iso8601",609352650)], null);
/**
 * Default (fn [data]) -> string output fn.
 *  Use`(partial default-output-fn <opts-map>)` to modify default opts.
 */
taoensso.timbre.default_output_fn = (function taoensso$timbre$default_output_fn(var_args){
var G__74584 = arguments.length;
switch (G__74584) {
case 1:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1 = (function (data){
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2(null,data);
}));

(taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2 = (function (opts,data){
var map__74586 = opts;
var map__74586__$1 = cljs.core.__destructure_map(map__74586);
var no_stacktrace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74586__$1,new cljs.core.Keyword(null,"no-stacktrace?","no-stacktrace?",1701072694));
var stacktrace_fonts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74586__$1,new cljs.core.Keyword(null,"stacktrace-fonts","stacktrace-fonts",830799382));
var map__74587 = data;
var map__74587__$1 = cljs.core.__destructure_map(map__74587);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74587__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74587__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74587__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74587__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74587__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74587__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74587__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74587__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [(function (){var temp__5804__auto__ = cljs.core.force(timestamp_);
if(cljs.core.truth_(temp__5804__auto__)){
var ts = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)," "].join('');
} else {
return null;
}
})(),clojure.string.upper_case(cljs.core.name(level))," ","[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = _QMARK_file;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return "?";
}
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = _QMARK_line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "?";
}
})()),"] - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(cljs.core.truth_(no_stacktrace_QMARK_)?null:(function (){var temp__5804__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5804__auto__)){
var err = temp__5804__auto__;
return [taoensso.encore.system_newline,cljs.core.str.cljs$core$IFn$_invoke$arity$1((taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2 ? taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2(err,opts) : taoensso.timbre.stacktrace.call(null,err,opts)))].join('');
} else {
return null;
}
})())].join('');
}));

(taoensso.timbre.default_output_fn.cljs$lang$maxFixedArity = 2);


taoensso.timbre.println_appender = taoensso.timbre.appenders.core.println_appender;
taoensso.timbre.console_appender = taoensso.timbre.appenders.core.console_appender;
/**
 * Default/example Timbre `*config*` value:
 * 
 *  {:min-level :debug #_[["taoensso.*" :error] ["*" :debug]]
 *   :ns-filter #{"*"} #_{:deny #{"taoensso.*"} :allow #{"*"}}
 * 
 *   :middleware [] ; (fns [appender-data]) -> ?data, applied left->right
 * 
 *   :timestamp-opts default-timestamp-opts ; {:pattern _ :locale _ :timezone _}
 *   :output-fn      default-output-fn ; (fn [appender-data]) -> string
 * 
 *   :appenders
 *   #?(:clj
 *      {:println (println-appender {:stream :auto})
 *       ;; :spit (spit-appender    {:fname "./timbre-spit.log"})
 *       }
 * 
 *      :cljs
 *      (if (exists? js/window)
 *        {:console (console-appender {})}
 *        {:println (println-appender {})}))}
 * 
 *  See `*config*` for more info.
 */
taoensso.timbre.default_config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-level","min-level",1634684919),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"ns-filter","ns-filter",108598448),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["*",null], null), null),new cljs.core.Keyword(null,"middleware","middleware",1462115504),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"timestamp-opts","timestamp-opts",-1359534807),taoensso.timbre.default_timestamp_opts,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),taoensso.timbre.default_output_fn,new cljs.core.Keyword(null,"appenders","appenders",1245583998),(((typeof window !== 'undefined'))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"console","console",1228072057),(function (){var G__74594 = cljs.core.PersistentArrayMap.EMPTY;
return (taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1(G__74594) : taoensso.timbre.console_appender.call(null,G__74594));
})()], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"println","println",1920840330),(function (){var G__74595 = cljs.core.PersistentArrayMap.EMPTY;
return (taoensso.timbre.println_appender.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.println_appender.cljs$core$IFn$_invoke$arity$1(G__74595) : taoensso.timbre.println_appender.call(null,G__74595));
})()], null))], null);
if((typeof taoensso !== 'undefined') && (typeof taoensso.timbre !== 'undefined') && (typeof taoensso.timbre._STAR_config_STAR_ !== 'undefined')){
} else {
/**
 * This map controls all Timbre behaviour including:
 *  - When to log (via level and namespace filtering)
 *  - How  to log (which appenders to use)
 *  - What to log (config to control how data sent to appenders
 *                 will be formatted to output string)
 * 
 *   See `default-config` for default value (and example config).
 * 
 *   Modify this config with `binding`, `alter-var-root`, or with utils:
 *     `set-level!`,         `with-level`,
 *    `set-config!`,        `with-config`,
 *  `merge-config!`, `with-merged-config`.
 * 
 *   MAIN OPTIONS
 * 
 *  :min-level
 *    Logging will occur only if a logging call's level is >= this
 *    min-level. Possible values, in order:
 * 
 *      :trace  = level 0
 *      :debug  = level 1 ; Default min-level
 *      :info   = level 2
 *      :warn   = level 3
 *      :error  = level 4 ; Error type
 *      :fatal  = level 5 ; Error type
 *      :report = level 6 ; High general-purpose (non-error) type
 * 
 *    It's also possible to set the min-level based on the namespace
 *    by providing a vector that maps `ns-pattern`s to min-levels, e.g.:
 *    `[[#{"taoensso.*"} :error] ... [#{"*"} :debug]]`.
 * 
 *    Example `ns-pattern`s:
 *      #{}, "*", "foo.bar", "foo.bar.*", #{"foo" "bar.*"},
 *      {:allow #{"foo" "bar.*"} :deny #{"foo.*.bar.*"}}.
 * 
 *  :ns-filter
 *    Logging will occur only if a logging call's namespace is permitted
 *    by this ns-filter. Possible values:
 * 
 *      - Arbitrary (fn may-log-ns? [ns]) predicate fn.
 *      - An `ns-pattern` (see :min-level docs above).
 * 
 *    Useful for turning off logging in noisy libraries, etc.
 * 
 *  :middleware
 *    Vector of simple (fn [appender-data]) -> ?new-data fns (applied left->right)
 *    that transform the data map dispatched to appender fns. If any middleware
 *    returns nil, NO dispatch will occur (i.e. the event will be filtered).
 * 
 *    Useful for layering advanced functionality. Similar to Ring middleware.
 * 
 *  :timestamp-opts ; Config map, see `default-timestamp-opts`
 *  :output-fn      ; (fn [appender-data]) -> string, see `default-output-fn`
 * 
 *  :appenders ; {<appender-id> <appender-map>}
 * 
 *    Where each appender-map has keys:
 *      :enabled?        ; Must be truthy to log
 *      :min-level       ; Optional *additional* appender-specific min-level
 *      :ns-filter       ; Optional *additional* appender-specific ns-filter
 * 
 *      :async?          ; Dispatch using agent? Useful for slow appenders (clj only)
 * 
 *      :rate-limit      ; [[<ncalls-limit> <window-msecs>] ...], or nil
 *                       ; Appender will noop a call after exceeding given number
 *                       ; of the "same" calls within given rolling window/s.
 *                       ;
 *                       ; Example:
 *                       ;   [[100  (encore/ms :mins  1)]
 *                       ;    [1000 (encore/ms :hours 1)]] will noop a call after:
 *                       ;
 *                       ;   - >100  "same" calls in 1 rolling minute, or
 *                       ;   - >1000 "same" calls in 1 rolling hour
 *                       ;
 *                       ; "Same" calls are identified by default as the
 *                       ; combined hash of:
 *                       ;   - Callsite (i.e. each individual Timbre macro form)
 *                       ;   - Logging level
 *                       ;   - All arguments provided for logging
 *                       ;
 *                       ; You can manually override call identification:
 *                       ;   (timbre/infof ^:meta {:id "my-limiter-call-id"} ...)
 *                       ;
 * 
 *      :output-fn       ; Optional override for inherited (fn [appender-data]) -> string
 *      :timestamp-opts  ; Optional override for inherited config map
 *      :fn              ; (fn [appender-data]) -> side-effects, with keys described below
 * 
 *   APPENDER DATA
 *  An appender's fn takes a single data map with keys:
 *    :config          ; Entire active config map
 *    :appender-id     ; Id of appender currently dispatching
 *    :appender        ; Entire map of appender currently dispatching
 *    :instant         ; Platform date (java.util.Date or js/Date)
 *    :level           ; Call's level keyword (e.g. :info) (>= active min-level)
 *    :error-level?    ; Is level e/o #{:error :fatal}?
 *    :?ns-str         ; String,  or nil
 *    :?file           ; String,  or nil
 *    :?line           ; Integer, or nil ; Waiting on CLJ-865
 *    :?err            ; First-arg platform error, or nil
 *    :?meta           ; First-arg map when it has ^:meta metadata, used as a
 *                       way of passing advanced per-call options to appenders
 *    :vargs           ; Vector of raw args provided to logging call
 *    :output_         ; Forceable - final formatted output string created
 *                     ; by calling (output-fn <this-data-map>)
 *    :msg_            ; Forceable - args as a string
 *    :timestamp_      ; Forceable - string
 *    :hostname_       ; Forceable - string (clj only)
 *    :output-fn       ; (fn [data]) -> formatted output string
 *                     ; (see `default-output-fn` for details)
 *    :context         ; `*context*` value at log time (see `with-context`)
 *    :spying?         ; Is call occuring via the `spy` macro?
 * 
 *    **NB** - any keys not specifically documented here should be
 *    considered private / subject to change without notice.
 * 
 *   COMPILE-TIME LEVEL/NS ELISION
 *  To control :min-level and :ns-filter at compile-time, use:
 * 
 *    - `taoensso.timbre.min-level.edn`  JVM property (read as edn)
 *    - `taoensso.timbre.ns-pattern.edn` JVM property (read as edn)
 * 
 *    - `TAOENSSO_TIMBRE_MIN_LEVEL_EDN`  env var      (read as edn)
 *    - `TAOENSSO_TIMBRE_NS_PATTERN_EDN` env var      (read as edn)
 */
taoensso.timbre._STAR_config_STAR_ = taoensso.timbre.default_config;
}
taoensso.timbre.set_config_BANG_ = (function taoensso$timbre$set_config_BANG_(m){
var G__74596 = (function (_old){
return m;
});
return (taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1(G__74596) : taoensso.timbre.swap_config_BANG_.call(null,G__74596));
});
taoensso.timbre.merge_config_BANG_ = (function taoensso$timbre$merge_config_BANG_(m){
var G__74597 = (function (old){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old,m], 0));
});
return (taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1(G__74597) : taoensso.timbre.swap_config_BANG_.call(null,G__74597));
});
taoensso.timbre.swap_config_BANG_ = (function taoensso$timbre$swap_config_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___74740 = arguments.length;
var i__5767__auto___74741 = (0);
while(true){
if((i__5767__auto___74741 < len__5766__auto___74740)){
args__5772__auto__.push((arguments[i__5767__auto___74741]));

var G__74742 = (i__5767__auto___74741 + (1));
i__5767__auto___74741 = G__74742;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (taoensso.timbre._STAR_config_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,taoensso.timbre._STAR_config_STAR_,args));
}));

(taoensso.timbre.swap_config_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.timbre.swap_config_BANG_.cljs$lang$applyTo = (function (seq74598){
var G__74599 = cljs.core.first(seq74598);
var seq74598__$1 = cljs.core.next(seq74598);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74599,seq74598__$1);
}));

taoensso.timbre.set_level_BANG_ = (function taoensso$timbre$set_level_BANG_(level){
return taoensso.timbre.swap_config_BANG_((function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"min-level","min-level",1634684919),level);
}));
});
var err_74743 = "Invalid Timbre logging level: should be e/o #{:trace :debug :info :warn :error :fatal :report}";
var level__GT_int_74744 = (function (p1__74600_SHARP_){
var G__74601 = p1__74600_SHARP_;
var G__74601__$1 = (((G__74601 instanceof cljs.core.Keyword))?G__74601.fqn:null);
switch (G__74601__$1) {
case "trace":
return (0);

break;
case "debug":
return (1);

break;
case "info":
return (2);

break;
case "warn":
return (3);

break;
case "error":
return (4);

break;
case "fatal":
return (5);

break;
case "report":
return (6);

break;
default:
return null;

}
});
taoensso.timbre.valid_level_QMARK_ = (function taoensso$timbre$valid_level_QMARK_(x){
if(cljs.core.truth_(level__GT_int_74744(x))){
return true;
} else {
return false;
}
});

taoensso.timbre.valid_level = (function taoensso$timbre$valid_level(x){
if(cljs.core.truth_(level__GT_int_74744(x))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_74743,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null));
}
});

taoensso.timbre.valid_level__GT_int = (function taoensso$timbre$valid_level__GT_int(x){
var or__5043__auto__ = level__GT_int_74744(x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_74743,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null));
}
});
var valid_level__GT_int_74746 = taoensso.timbre.valid_level__GT_int;
/**
 * Implementation detail.
 */
taoensso.timbre.level_GT__EQ_ = (function taoensso$timbre$level_GT__EQ_(x,y){
return ((valid_level__GT_int_74746.cljs$core$IFn$_invoke$arity$1 ? valid_level__GT_int_74746.cljs$core$IFn$_invoke$arity$1(x) : valid_level__GT_int_74746.call(null,x)) >= (valid_level__GT_int_74746.cljs$core$IFn$_invoke$arity$1 ? valid_level__GT_int_74746.cljs$core$IFn$_invoke$arity$1(y) : valid_level__GT_int_74746.call(null,y)));
});
var fn_QMARK__74747 = cljs.core.fn_QMARK_;
var compile_74748 = taoensso.encore.fmemoize((function (x){
return taoensso.encore.compile_str_filter(x);
}));
var conform_QMARK__STAR__74749 = taoensso.encore.fmemoize((function (x,ns){
var fexpr__74602 = compile_74748(x);
return (fexpr__74602.cljs$core$IFn$_invoke$arity$1 ? fexpr__74602.cljs$core$IFn$_invoke$arity$1(ns) : fexpr__74602.call(null,ns));
}));
var conform_QMARK__74750 = (function (ns_filter,ns){
if(cljs.core.truth_((fn_QMARK__74747.cljs$core$IFn$_invoke$arity$1 ? fn_QMARK__74747.cljs$core$IFn$_invoke$arity$1(ns_filter) : fn_QMARK__74747.call(null,ns_filter)))){
return (ns_filter.cljs$core$IFn$_invoke$arity$1 ? ns_filter.cljs$core$IFn$_invoke$arity$1(ns) : ns_filter.call(null,ns));
} else {
return conform_QMARK__STAR__74749(ns_filter,ns);
}
});
/**
 * Implementation detail.
 */
taoensso.timbre.may_log_ns_QMARK_ = (function taoensso$timbre$may_log_ns_QMARK_(ns_filter,ns){
if(cljs.core.truth_(conform_QMARK__74750(ns_filter,ns))){
return true;
} else {
return false;
}
});

/**
 * [[<ns-pattern> <min-level>] ... ["*" <default-min-level>]], ns -> ?min-level
 */
taoensso.timbre.ns__GT__QMARK_min_level = taoensso.encore.fmemoize((function (specs,ns){
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2((function (p__74605){
var vec__74606 = p__74605;
var ns_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74606,(0),null);
var min_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74606,(1),null);
if(cljs.core.truth_(conform_QMARK__STAR__74749(ns_pattern,ns))){
return taoensso.timbre.valid_level(min_level);
} else {
return null;
}
}),specs);
}));
var valid_level_74751 = taoensso.timbre.valid_level;
var ns__GT__QMARK_min_level_74752 = taoensso.timbre.ns__GT__QMARK_min_level;
taoensso.timbre.get_min_level = (function taoensso$timbre$get_min_level(default$,x,ns){
var G__74612 = (function (){var or__5043__auto__ = ((cljs.core.vector_QMARK_(x))?ns__GT__QMARK_min_level_74752(x,ns):x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
})();
return (valid_level_74751.cljs$core$IFn$_invoke$arity$1 ? valid_level_74751.cljs$core$IFn$_invoke$arity$1(G__74612) : valid_level_74751.call(null,G__74612));
});
var leglist_74753 = (function (x){
if(cljs.core.truth_(x)){
if(cljs.core.truth_((function (){var fexpr__74613 = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY]);
return (fexpr__74613.cljs$core$IFn$_invoke$arity$1 ? fexpr__74613.cljs$core$IFn$_invoke$arity$1(x) : fexpr__74613.call(null,x));
})())){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.timbre.legacy_ns_filter = (function taoensso$timbre$legacy_ns_filter(ns_whitelist,ns_blacklist){
var ns_whitelist__$1 = leglist_74753(ns_whitelist);
var ns_blacklist__$1 = leglist_74753(ns_blacklist);
if(cljs.core.truth_((function (){var or__5043__auto__ = ns_whitelist__$1;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return ns_blacklist__$1;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow","allow",-1857325745),ns_whitelist__$1,new cljs.core.Keyword(null,"deny","deny",1589338523),ns_blacklist__$1], null);
} else {
return null;
}
});
var level_GT__EQ__74754 = taoensso.timbre.level_GT__EQ_;
var may_log_ns_QMARK__74755 = taoensso.timbre.may_log_ns_QMARK_;
var get_min_level_74756 = taoensso.timbre.get_min_level;
var legacy_ns_filter_74757 = taoensso.timbre.legacy_ns_filter;
/**
 * Implementation detail.
 *  Returns true iff level and ns are runtime unfiltered.
 */
taoensso.timbre.may_log_QMARK_ = (function taoensso$timbre$may_log_QMARK_(var_args){
var G__74619 = arguments.length;
switch (G__74619) {
case 1:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (level){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"report","report",1394055010),level,null,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,_QMARK_ns_str){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"report","report",1394055010),level,_QMARK_ns_str,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (level,_QMARK_ns_str,_QMARK_config){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"report","report",1394055010),level,_QMARK_ns_str,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (default_min_level,level,_QMARK_ns_str,_QMARK_config){
var config = (function (){var or__5043__auto__ = _QMARK_config;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return taoensso.timbre._STAR_config_STAR_;
}
})();
var min_level = (function (){var G__74624 = default_min_level;
var G__74625 = (function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"min-level","min-level",1634684919));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"level","level",1290497552));
}
})();
var G__74626 = _QMARK_ns_str;
return (get_min_level_74756.cljs$core$IFn$_invoke$arity$3 ? get_min_level_74756.cljs$core$IFn$_invoke$arity$3(G__74624,G__74625,G__74626) : get_min_level_74756.call(null,G__74624,G__74625,G__74626));
})();
if(cljs.core.truth_((level_GT__EQ__74754.cljs$core$IFn$_invoke$arity$2 ? level_GT__EQ__74754.cljs$core$IFn$_invoke$arity$2(level,min_level) : level_GT__EQ__74754.call(null,level,min_level)))){
var temp__5802__auto__ = (function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"ns-filter","ns-filter",108598448));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var G__74630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"ns-whitelist","ns-whitelist",-1717299774));
var G__74631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142));
return (legacy_ns_filter_74757.cljs$core$IFn$_invoke$arity$2 ? legacy_ns_filter_74757.cljs$core$IFn$_invoke$arity$2(G__74630,G__74631) : legacy_ns_filter_74757.call(null,G__74630,G__74631));
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var ns_filter = temp__5802__auto__;
if(cljs.core.truth_((may_log_ns_QMARK__74755.cljs$core$IFn$_invoke$arity$2 ? may_log_ns_QMARK__74755.cljs$core$IFn$_invoke$arity$2(ns_filter,_QMARK_ns_str) : may_log_ns_QMARK__74755.call(null,ns_filter,_QMARK_ns_str)))){
return true;
} else {
return false;
}
} else {
return true;
}
} else {
return false;
}
}));

(taoensso.timbre.may_log_QMARK_.cljs$lang$maxFixedArity = 4);

taoensso.timbre.str_join = (function taoensso$timbre$str_join(xs){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
var x__$1 = taoensso.encore.nil__GT_str(x);
if(cljs.core.record_QMARK_(x__$1)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1], 0));
} else {
return x__$1;

}
})),xs);
});
if((typeof taoensso !== 'undefined') && (typeof taoensso.timbre !== 'undefined') && (typeof taoensso.timbre.get_rate_limiter !== 'undefined')){
} else {
taoensso.timbre.get_rate_limiter = taoensso.encore.fmemoize((function (appender_id,specs){
return taoensso.encore.limiter(specs);
}));
}
/**
 * General-purpose dynamic logging context
 */
taoensso.timbre._STAR_context_STAR_ = null;
/**
 * vargs -> [?err ?meta ?msg-fmt api-vargs]
 */
taoensso.timbre.parse_vargs = (function taoensso$timbre$parse_vargs(_QMARK_err,msg_type,vargs){
var auto_error_QMARK_ = (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(_QMARK_err,new cljs.core.Keyword(null,"auto","auto",-566279492)) : taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_err,new cljs.core.Keyword(null,"auto","auto",-566279492)));
var fmt_msg_QMARK_ = (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(msg_type,new cljs.core.Keyword(null,"f","f",-1597136552)) : taoensso.encore.kw_identical_QMARK_.call(null,msg_type,new cljs.core.Keyword(null,"f","f",-1597136552)));
var vec__74639 = vargs;
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74639,(0),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = auto_error_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return taoensso.encore.error_QMARK_(v0);
} else {
return and__5041__auto__;
}
})())){
var _QMARK_err__$1 = v0;
var _QMARK_meta = null;
var vargs__$1 = taoensso.encore.vrest(vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__74642 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74642,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.encore.vrest(vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta,_QMARK_msg_fmt,vargs__$2], null);
} else {
var _QMARK_meta = (cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.map_QMARK_(v0);
if(and__5041__auto__){
return new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v0));
} else {
return and__5041__auto__;
}
})())?v0:null);
var _QMARK_err__$1 = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"err","err",-2089457205).cljs$core$IFn$_invoke$arity$1(_QMARK_meta);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.truth_(auto_error_QMARK_)){
return null;
} else {
return _QMARK_err;
}
}
})();
var _QMARK_meta__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_QMARK_meta,new cljs.core.Keyword(null,"err","err",-2089457205));
var vargs__$1 = (cljs.core.truth_(_QMARK_meta__$1)?taoensso.encore.vrest(vargs):vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__74649 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74649,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.encore.vrest(vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta__$1,_QMARK_msg_fmt,vargs__$2], null);
}
});
taoensso.timbre.get_timestamp = (function taoensso$timbre$get_timestamp(timestamp_opts,instant){
var map__74653 = timestamp_opts;
var map__74653__$1 = cljs.core.__destructure_map(map__74653);
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74653__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern,new cljs.core.Keyword(null,"iso8601","iso8601",609352650)) : taoensso.encore.kw_identical_QMARK_.call(null,pattern,new cljs.core.Keyword(null,"iso8601","iso8601",609352650))))){
return (new Date(instant)).toISOString();
} else {
return (new goog.i18n.DateTimeFormat(pattern)).format(instant);
}
});
/**
 * Core low-level log fn. Implementation detail!
 */
taoensso.timbre._log_BANG_ = (function taoensso$timbre$_log_BANG_(var_args){
var G__74664 = arguments.length;
switch (G__74664) {
case 9:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,null,false);
}));

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,false);
}));

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,spying_QMARK_){
if(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"report","report",1394055010),level,_QMARK_ns_str,config)){
var instant_74774 = (new Date());
var context_74775 = taoensso.timbre._STAR_context_STAR_;
var vargs_74776 = cljs.core.deref(vargs_);
var vec__74665_74777 = taoensso.timbre.parse_vargs(_QMARK_err,msg_type,vargs_74776);
var _QMARK_err_74778__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74665_74777,(0),null);
var _QMARK_meta_74779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74665_74777,(1),null);
var _QMARK_msg_fmt_74780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74665_74777,(2),null);
var vargs_74781__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74665_74777,(3),null);
var data_74782 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = _QMARK_base_data;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.Keyword(null,"spying?","spying?",1753444487),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"vargs","vargs",-966597273),new cljs.core.Keyword(null,"?file","?file",1533429675),new cljs.core.Keyword(null,"error-level?","error-level?",778415885),new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"?err","?err",549653299),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"?line","?line",-631853385),new cljs.core.Keyword(null,"?err_","?err_",789480858),new cljs.core.Keyword(null,"?meta","?meta",-793560773),new cljs.core.Keyword(null,"?msg-fmt","?msg-fmt",-852453891)],[instant_74774,spying_QMARK_,config,vargs_74781__$1,_QMARK_file,(function (){var fexpr__74668 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fatal","fatal",1874419888),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__74668.cljs$core$IFn$_invoke$arity$1 ? fexpr__74668.cljs$core$IFn$_invoke$arity$1(level) : fexpr__74668.call(null,level));
})(),_QMARK_ns_str,level,_QMARK_err_74778__$1,context_74775,_QMARK_line,(new cljs.core.Delay((function (){
return _QMARK_err_74778__$1;
}),null)),_QMARK_meta_74779,_QMARK_msg_fmt_74780]));
var _QMARK_data_74783 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,mf){
var result = (mf.cljs$core$IFn$_invoke$arity$1 ? mf.cljs$core$IFn$_invoke$arity$1(acc) : mf.call(null,acc));
if((result == null)){
return cljs.core.reduced(null);
} else {
return result;
}
}),data_74782,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$1(config));
var temp__5804__auto___74784 = _QMARK_data_74783;
if(cljs.core.truth_(temp__5804__auto___74784)){
var data_74785__$1 = temp__5804__auto___74784;
var map__74669_74786 = data_74785__$1;
var map__74669_74787__$1 = cljs.core.__destructure_map(map__74669_74786);
var vargs_74788__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74669_74787__$1,new cljs.core.Keyword(null,"vargs","vargs",-966597273));
var data_74789__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data_74785__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148),(new cljs.core.Delay((function (){
return vargs_74788__$2;
}),null)));
var data_74790__$3 = taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic(data_74789__$2,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay((function (){
var G__74670 = msg_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__74670)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p","p",151049309),G__74670)){
return taoensso.timbre.str_join(vargs_74788__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),G__74670)){
if(typeof _QMARK_msg_fmt_74780 === 'string'){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Timbre format-style logging call without a format pattern (string)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),level,new cljs.core.Keyword(null,"location","location",1815599388),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = _QMARK_file;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return "?";
}
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = _QMARK_line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "?";
}
})())].join('')], null));
}

return taoensso.encore.format_STAR_(_QMARK_msg_fmt_74780,vargs_74788__$2);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74670)].join('')));

}
}
}
}),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hash_","hash_",-827203612),(new cljs.core.Delay((function (){
return cljs.core.hash((function (){var b2__66737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(_QMARK_meta_74779,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(b2__66737__auto__)){
var id = b2__66737__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,callsite_id,level], null);
} else {
var b2__66737__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(_QMARK_meta_74779,new cljs.core.Keyword(null,"id!","id!",218090956));
if(cljs.core.truth_(b2__66737__auto____$1)){
var id = b2__66737__auto____$1;
return id;
} else {
var b2__66737__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(_QMARK_meta_74779,new cljs.core.Keyword(null,"hash","hash",-13781596));
if(cljs.core.truth_(b2__66737__auto____$2)){
var h = b2__66737__auto____$2;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,callsite_id,_QMARK_msg_fmt_74780,level], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vargs_74788__$2,callsite_id,_QMARK_msg_fmt_74780,level], null);
}
}
}
})());
}),null))], 0));
var output_fn1_74791 = taoensso.encore.fmemoize(cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),taoensso.timbre.default_output_fn));
var timestamp_opts1_74792 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(taoensso.timbre.default_timestamp_opts,cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"timestamp-opts","timestamp-opts",-1359534807)));
var get_timestamp__74793 = taoensso.encore.fmemoize((function (opts){
return (new cljs.core.Delay((function (){
return taoensso.timbre.get_timestamp(opts,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_74790__$3,new cljs.core.Keyword(null,"instant","instant",655498374)));
}),null));
}));
cljs.core.reduce_kv((function (_,id,appender){
if(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(and__5041__auto__)){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"trace","trace",-1082747415),level,_QMARK_ns_str,appender);
} else {
return and__5041__auto__;
}
})())){
var rate_limit_specs = new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022).cljs$core$IFn$_invoke$arity$1(appender);
var rate_limit_okay_QMARK_ = (function (){var or__5043__auto__ = cljs.core.empty_QMARK_(rate_limit_specs);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var rl_fn = taoensso.timbre.get_rate_limiter(id,rate_limit_specs);
return cljs.core.not((function (){var G__74685 = cljs.core.force(new cljs.core.Keyword(null,"hash_","hash_",-827203612).cljs$core$IFn$_invoke$arity$1(data_74790__$3));
return (rl_fn.cljs$core$IFn$_invoke$arity$1 ? rl_fn.cljs$core$IFn$_invoke$arity$1(G__74685) : rl_fn.call(null,G__74685));
})());
}
})();
if(rate_limit_okay_QMARK_){
var map__74686 = appender;
var map__74686__$1 = cljs.core.__destructure_map(map__74686);
var apfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74686__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var async_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74686__$1,new cljs.core.Keyword(null,"async?","async?",1523057758));
var output_fn = (function (){var f = new cljs.core.Keyword(null,"output-fn","output-fn",1600951539).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_((function (){var or__5043__auto__ = (f == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"inherit","inherit",-1840815422)) : taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword(null,"inherit","inherit",-1840815422)));
}
})())){
return output_fn1_74791;
} else {
return f;
}
})();
var timestamp_ = (function (){var opts = new cljs.core.Keyword(null,"timestamp-opts","timestamp-opts",-1359534807).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_((function (){var or__5043__auto__ = (opts == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"inherit","inherit",-1840815422)) : taoensso.encore.kw_identical_QMARK_.call(null,opts,new cljs.core.Keyword(null,"inherit","inherit",-1840815422)));
}
})())){
return get_timestamp__74793(timestamp_opts1_74792);
} else {
return get_timestamp__74793(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(timestamp_opts1_74792,opts));
}
})();
var output_ = (new cljs.core.Delay((function (){
var G__74691 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data_74790__$3,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417),timestamp_);
return (output_fn.cljs$core$IFn$_invoke$arity$1 ? output_fn.cljs$core$IFn$_invoke$arity$1(G__74691) : output_fn.call(null,G__74691));
}),null));
var data__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(data_74790__$3,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"appender-id","appender-id",-1917983538),id,new cljs.core.Keyword(null,"appender","appender",1267426510),appender,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),output_fn,new cljs.core.Keyword(null,"output_","output_",-36797880),output_,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417),timestamp_], null));
var _QMARK_data__$1 = (function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"middleware-fn","middleware-fn",-61585752).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(temp__5802__auto__)){
var mfn = temp__5802__auto__;
return (mfn.cljs$core$IFn$_invoke$arity$1 ? mfn.cljs$core$IFn$_invoke$arity$1(data__$4) : mfn.call(null,data__$4));
} else {
return data__$4;
}
})();
var temp__5804__auto____$1 = _QMARK_data__$1;
if(cljs.core.truth_(temp__5804__auto____$1)){
var data__$5 = temp__5804__auto____$1;
return (apfn.cljs$core$IFn$_invoke$arity$1 ? apfn.cljs$core$IFn$_invoke$arity$1(data__$5) : apfn.call(null,data__$5));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}),null,new cljs.core.Keyword(null,"appenders","appenders",1245583998).cljs$core$IFn$_invoke$arity$1(config));
} else {
}
} else {
}

return null;
}));

(taoensso.timbre._log_BANG_.cljs$lang$maxFixedArity = 11);

taoensso.timbre.fline = (function taoensso$timbre$fline(and_form){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(and_form));
});
taoensso.timbre.stacktrace = (function taoensso$timbre$stacktrace(var_args){
var G__74705 = arguments.length;
switch (G__74705) {
case 1:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1 = (function (err){
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2(err,null);
}));

(taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (err,opts){
var or__5043__auto__ = err.stack;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(err);
}
}));

(taoensso.timbre.stacktrace.cljs$lang$maxFixedArity = 2);

taoensso.timbre.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

taoensso.timbre.ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"fatal","fatal",1874419888),new cljs.core.Keyword(null,"report","report",1394055010)], null);

taoensso.timbre.log_QMARK_ = taoensso.timbre.may_log_QMARK_;

/**
 * DEPRECATED, prefer `default-config`
 */
taoensso.timbre.example_config = taoensso.timbre.default_config;

taoensso.timbre.logging_enabled_QMARK_ = (function taoensso$timbre$logging_enabled_QMARK_(level,compile_time_ns){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2(level,cljs.core.str.cljs$core$IFn$_invoke$arity$1(compile_time_ns));
});

taoensso.timbre.str_println = (function taoensso$timbre$str_println(var_args){
var args__5772__auto__ = [];
var len__5766__auto___74799 = arguments.length;
var i__5767__auto___74800 = (0);
while(true){
if((i__5767__auto___74800 < len__5766__auto___74799)){
args__5772__auto__.push((arguments[i__5767__auto___74800]));

var G__74801 = (i__5767__auto___74800 + (1));
i__5767__auto___74800 = G__74801;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.timbre.str_join(xs);
}));

(taoensso.timbre.str_println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.timbre.str_println.cljs$lang$applyTo = (function (seq74706){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq74706));
}));


var ret__5821__auto___74802 = (function (){
taoensso.timbre.with_log_level = (function taoensso$timbre$with_log_level(var_args){
var args__5772__auto__ = [];
var len__5766__auto___74803 = arguments.length;
var i__5767__auto___74804 = (0);
while(true){
if((i__5767__auto___74804 < len__5766__auto___74803)){
args__5772__auto__.push((arguments[i__5767__auto___74804]));

var G__74805 = (i__5767__auto___74804 + (1));
i__5767__auto___74804 = G__74805;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_log_level.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(taoensso.timbre.with_log_level.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","with-level","taoensso.timbre/with-level",1514604232,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.timbre.with_log_level.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_log_level.cljs$lang$applyTo = (function (seq74707){
var G__74708 = cljs.core.first(seq74707);
var seq74707__$1 = cljs.core.next(seq74707);
var G__74709 = cljs.core.first(seq74707__$1);
var seq74707__$2 = cljs.core.next(seq74707__$1);
var G__74710 = cljs.core.first(seq74707__$2);
var seq74707__$3 = cljs.core.next(seq74707__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74708,G__74709,G__74710,seq74707__$3);
}));

return null;
})()
;
(taoensso.timbre.with_log_level.cljs$lang$macro = true);


var ret__5821__auto___74806 = (function (){
taoensso.timbre.with_logging_config = (function taoensso$timbre$with_logging_config(var_args){
var args__5772__auto__ = [];
var len__5766__auto___74810 = arguments.length;
var i__5767__auto___74811 = (0);
while(true){
if((i__5767__auto___74811 < len__5766__auto___74810)){
args__5772__auto__.push((arguments[i__5767__auto___74811]));

var G__74812 = (i__5767__auto___74811 + (1));
i__5767__auto___74811 = G__74812;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_logging_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(taoensso.timbre.with_logging_config.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","with-config","taoensso.timbre/with-config",-1144239945,null),null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.timbre.with_logging_config.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_logging_config.cljs$lang$applyTo = (function (seq74714){
var G__74715 = cljs.core.first(seq74714);
var seq74714__$1 = cljs.core.next(seq74714);
var G__74716 = cljs.core.first(seq74714__$1);
var seq74714__$2 = cljs.core.next(seq74714__$1);
var G__74717 = cljs.core.first(seq74714__$2);
var seq74714__$3 = cljs.core.next(seq74714__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74715,G__74716,G__74717,seq74714__$3);
}));

return null;
})()
;
(taoensso.timbre.with_logging_config.cljs$lang$macro = true);


var ret__5821__auto___74813 = (function (){
taoensso.timbre.logp = (function taoensso$timbre$logp(var_args){
var args__5772__auto__ = [];
var len__5766__auto___74814 = arguments.length;
var i__5767__auto___74815 = (0);
while(true){
if((i__5767__auto___74815 < len__5766__auto___74814)){
args__5772__auto__.push((arguments[i__5767__auto___74815]));

var G__74816 = (i__5767__auto___74815 + (1));
i__5767__auto___74815 = G__74816;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.logp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(taoensso.timbre.logp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log","taoensso.timbre/log",-1743194436,null),null,(1),null)),args)));
}));

(taoensso.timbre.logp.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.logp.cljs$lang$applyTo = (function (seq74718){
var G__74719 = cljs.core.first(seq74718);
var seq74718__$1 = cljs.core.next(seq74718);
var G__74720 = cljs.core.first(seq74718__$1);
var seq74718__$2 = cljs.core.next(seq74718__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74719,G__74720,seq74718__$2);
}));

return null;
})()
;
(taoensso.timbre.logp.cljs$lang$macro = true);


var ret__5821__auto___74817 = (function (){
taoensso.timbre.log_env = (function taoensso$timbre$log_env(var_args){
var G__74725 = arguments.length;
switch (G__74725) {
case 2:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log-env","taoensso.timbre/log-env",-166251696,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),null,(1),null)))));
}));

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,level){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log-env","taoensso.timbre/log-env",-166251696,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"&env",null,(1),null))], 0))));
}));

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,level,name){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log-env","taoensso.timbre/log-env",-166251696,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,name,null,(1),null))], 0))));
}));

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,config,level,name){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log*","taoensso.timbre/log*",1207553629,null),null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,"=>",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","get-env","taoensso.timbre/get-env",92671901,null),null,(1),null))))),null,(1),null))], 0))));
}));

(taoensso.timbre.log_env.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(taoensso.timbre.log_env.cljs$lang$macro = true);


//# sourceMappingURL=taoensso.timbre.js.map
