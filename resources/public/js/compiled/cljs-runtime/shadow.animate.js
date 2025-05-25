goog.provide('shadow.animate');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

var shadow$animate$Animation$_animate_from$dyn_63841 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.animate._animate_from[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.animate._animate_from["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
});
/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_from$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_from$dyn_63841(this$);
}
});

var shadow$animate$Animation$_animate_to$dyn_63843 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.animate._animate_to[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.animate._animate_to["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_to$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_to$dyn_63843(this$);
}
});

var shadow$animate$Animation$_animate_toggles$dyn_63845 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.animate._animate_toggles["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_toggles$dyn_63845(this$);
}
});

var shadow$animate$Animation$_animate_timings$dyn_63847 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.animate._animate_timings["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
});
/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_timings$dyn_63847(this$);
}
});

var shadow$animate$Animation$_animate_delays$dyn_63848 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.animate._animate_delays["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
});
/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_delays$dyn_63848(this$);
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__63431){
var vec__63432 = p__63431;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63432,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63432,(1),null);
return [cljs.core.name(attr)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing),(function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__5041__auto__ = delay;
if(cljs.core.truth_(and__5041__auto__)){
return (delay > (0));
} else {
return and__5041__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join('');
} else {
return null;
}
})()].join('');
}),timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

var shadow$animate$IAnimator$get_duration$dyn_63855 = (function (animator){
var x__5390__auto__ = (((animator == null))?null:animator);
var m__5391__auto__ = (shadow.animate.get_duration[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5391__auto__.call(null,animator));
} else {
var m__5389__auto__ = (shadow.animate.get_duration["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5389__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
});
shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
return shadow$animate$IAnimator$get_duration$dyn_63855(animator);
}
});

var shadow$animate$IAnimator$init_BANG_$dyn_63868 = (function (animator){
var x__5390__auto__ = (((animator == null))?null:animator);
var m__5391__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5391__auto__.call(null,animator));
} else {
var m__5389__auto__ = (shadow.animate.init_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5389__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
});
/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$init_BANG_$dyn_63868(animator);
}
});

var shadow$animate$IAnimator$start_BANG_$dyn_63878 = (function (animator){
var x__5390__auto__ = (((animator == null))?null:animator);
var m__5391__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5391__auto__.call(null,animator));
} else {
var m__5389__auto__ = (shadow.animate.start_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5389__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
});
/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$start_BANG_$dyn_63878(animator);
}
});

var shadow$animate$IAnimator$finish_BANG_$dyn_63887 = (function (animator){
var x__5390__auto__ = (((animator == null))?null:animator);
var m__5391__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5391__auto__.call(null,animator));
} else {
var m__5389__auto__ = (shadow.animate.finish_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5389__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
});
/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$finish_BANG_$dyn_63887(animator);
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
(shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5633__auto__ = self__.items.length;
var i__59147__auto__ = (0);
while(true){
if((i__59147__auto__ < n__5633__auto__)){
var map__63491_63888 = (self__.items[i__59147__auto__]);
var map__63491_63889__$1 = cljs.core.__destructure_map(map__63491_63888);
var el_63890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63491_63889__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_63891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63491_63889__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_63890,from_63891);

var G__63892 = (i__59147__auto__ + (1));
i__59147__auto__ = G__63892;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5633__auto__ = self__.items.length;
var i__59147__auto__ = (0);
while(true){
if((i__59147__auto__ < n__5633__auto__)){
var map__63499_63893 = (self__.items[i__59147__auto__]);
var map__63499_63894__$1 = cljs.core.__destructure_map(map__63499_63893);
var el_63895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63499_63894__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_63896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63499_63894__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_63897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63499_63894__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_63896["transition"] = transition_63897);

goog.style.setStyle(el_63895,to_63896);

var G__63898 = (i__59147__auto__ + (1));
i__59147__auto__ = G__63898;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5633__auto__ = self__.items.length;
var i__59147__auto__ = (0);
while(true){
if((i__59147__auto__ < n__5633__auto__)){
var map__63505_63900 = (self__.items[i__59147__auto__]);
var map__63505_63901__$1 = cljs.core.__destructure_map(map__63505_63900);
var el_63902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63505_63901__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_63903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63505_63901__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_63903["transition"] = null);

goog.style.setStyle(el_63902,toggles_63903);

var G__63905 = (i__59147__auto__ + (1));
i__59147__auto__ = G__63905;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
}));

(shadow.animate.Animator.cljs$lang$type = true);

(shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator");

(shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.animate/Animator");
}));

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
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
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k63512,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__63525 = k63512;
var G__63525__$1 = (((G__63525 instanceof cljs.core.Keyword))?G__63525.fqn:null);
switch (G__63525__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63512,else__5343__auto__);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__63527){
var vec__63528 = p__63527;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63528,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63528,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63511){
var self__ = this;
var G__63511__$1 = this;
return (new cljs.core.RecordIter((0),G__63511__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63513,other63514){
var self__ = this;
var this63513__$1 = this;
return (((!((other63514 == null)))) && ((((this63513__$1.constructor === other63514.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63513__$1.el,other63514.el)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63513__$1.from,other63514.from)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63513__$1.to,other63514.to)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63513__$1.toggles,other63514.toggles)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63513__$1.transition,other63514.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63513__$1.__extmap,other63514.__extmap)))))))))))))));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k63512){
var self__ = this;
var this__5347__auto____$1 = this;
var G__63535 = k63512;
var G__63535__$1 = (((G__63535 instanceof cljs.core.Keyword))?G__63535.fqn:null);
switch (G__63535__$1) {
case "el":
case "from":
case "to":
case "toggles":
case "transition":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63512);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__63511){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__63536 = cljs.core.keyword_identical_QMARK_;
var expr__63537 = k__5349__auto__;
if(cljs.core.truth_((pred__63536.cljs$core$IFn$_invoke$arity$2 ? pred__63536.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"el","el",-1618201118),expr__63537) : pred__63536.call(null,new cljs.core.Keyword(null,"el","el",-1618201118),expr__63537)))){
return (new shadow.animate.AnimationStep(G__63511,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63536.cljs$core$IFn$_invoke$arity$2 ? pred__63536.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from","from",1815293044),expr__63537) : pred__63536.call(null,new cljs.core.Keyword(null,"from","from",1815293044),expr__63537)))){
return (new shadow.animate.AnimationStep(self__.el,G__63511,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63536.cljs$core$IFn$_invoke$arity$2 ? pred__63536.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007),expr__63537) : pred__63536.call(null,new cljs.core.Keyword(null,"to","to",192099007),expr__63537)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__63511,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63536.cljs$core$IFn$_invoke$arity$2 ? pred__63536.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__63537) : pred__63536.call(null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__63537)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__63511,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63536.cljs$core$IFn$_invoke$arity$2 ? pred__63536.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transition","transition",765692007),expr__63537) : pred__63536.call(null,new cljs.core.Keyword(null,"transition","transition",765692007),expr__63537)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__63511,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__63511),null));
}
}
}
}
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"el","el",-1618201118),self__.el,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"from","from",1815293044),self__.from,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"to","to",192099007),self__.to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition,null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__63511){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__63511,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
}));

(shadow.animate.AnimationStep.cljs$lang$type = true);

(shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
}));

(shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.animate/AnimationStep");
}));

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__63518){
var extmap__5382__auto__ = (function (){var G__63574 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63518,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0));
if(cljs.core.record_QMARK_(G__63518)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63574);
} else {
return G__63574;
}
})();
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__63518),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__63518),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__63518),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__63518),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__63518),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$animate$setup_$_iter__63576(s__63577){
return (new cljs.core.LazySeq(null,(function (){
var s__63577__$1 = s__63577;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__63577__$1);
if(temp__5804__auto__){
var s__63577__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63577__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__63577__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__63579 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__63578 = (0);
while(true){
if((i__63578 < size__5519__auto__)){
var vec__63583 = cljs.core._nth(c__5518__auto__,i__63578);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63583,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63583,(1),null);
cljs.core.chunk_append(b__63579,(function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__63943 = (i__63578 + (1));
i__63578 = G__63943;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63579),shadow$animate$setup_$_iter__63576(cljs.core.chunk_rest(s__63577__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63579),null);
}
} else {
var vec__63602 = cljs.core.first(s__63577__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63602,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63602,(1),null);
return cljs.core.cons((function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__63576(cljs.core.rest(s__63577__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__59002__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59003__auto__ = (function (){var switch__58889__auto__ = (function (state_63637){
var state_val_63638 = (state_63637[(1)]);
if((state_val_63638 === (1))){
var inst_63627 = shadow.animate.get_duration(animator);
var inst_63628 = cljs.core.async.timeout(inst_63627);
var state_63637__$1 = state_63637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63637__$1,(2),inst_63628);
} else {
if((state_val_63638 === (2))){
var inst_63630 = (state_63637[(2)]);
var inst_63631 = shadow.animate.finish_BANG_(animator);
var state_63637__$1 = (function (){var statearr_63639 = state_63637;
(statearr_63639[(7)] = inst_63631);

(statearr_63639[(8)] = inst_63630);

return statearr_63639;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63637__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});
return (function() {
var shadow$animate$continue_BANG__$_state_machine__58890__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__58890__auto____0 = (function (){
var statearr_63652 = [null,null,null,null,null,null,null,null,null];
(statearr_63652[(0)] = shadow$animate$continue_BANG__$_state_machine__58890__auto__);

(statearr_63652[(1)] = (1));

return statearr_63652;
});
var shadow$animate$continue_BANG__$_state_machine__58890__auto____1 = (function (state_63637){
while(true){
var ret_value__58891__auto__ = (function (){try{while(true){
var result__58892__auto__ = switch__58889__auto__(state_63637);
if(cljs.core.keyword_identical_QMARK_(result__58892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58892__auto__;
}
break;
}
}catch (e63660){var ex__58893__auto__ = e63660;
var statearr_63665_63958 = state_63637;
(statearr_63665_63958[(2)] = ex__58893__auto__);


if(cljs.core.seq((state_63637[(4)]))){
var statearr_63671_63959 = state_63637;
(statearr_63671_63959[(1)] = cljs.core.first((state_63637[(4)])));

} else {
throw ex__58893__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58891__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63960 = state_63637;
state_63637 = G__63960;
continue;
} else {
return ret_value__58891__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__58890__auto__ = function(state_63637){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__58890__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__58890__auto____1.call(this,state_63637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$animate$continue_BANG__$_state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__58890__auto____0;
shadow$animate$continue_BANG__$_state_machine__58890__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__58890__auto____1;
return shadow$animate$continue_BANG__$_state_machine__58890__auto__;
})()
})();
var state__59004__auto__ = (function (){var statearr_63672 = f__59003__auto__();
(statearr_63672[(6)] = c__59002__auto__);

return statearr_63672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59004__auto__);
}));

return c__59002__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
animator.shadow$animate$IAnimator$init_BANG_$arity$1(null);

return shadow.animate.continue_BANG_(animator);
});
/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__63695 = arguments.length;
switch (G__63695) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate63726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate63726 = (function (attr,from,to,timing,delay,meta63727){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta63727 = meta63727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate63726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63728,meta63727__$1){
var self__ = this;
var _63728__$1 = this;
return (new shadow.animate.t_shadow$animate63726(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta63727__$1));
}));

(shadow.animate.t_shadow$animate63726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63728){
var self__ = this;
var _63728__$1 = this;
return self__.meta63727;
}));

(shadow.animate.t_shadow$animate63726.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate63726.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate63726.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate63726.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate63726.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
}));

(shadow.animate.t_shadow$animate63726.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
}));

(shadow.animate.t_shadow$animate63726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta63727","meta63727",2062201258,null)], null);
}));

(shadow.animate.t_shadow$animate63726.cljs$lang$type = true);

(shadow.animate.t_shadow$animate63726.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate63726");

(shadow.animate.t_shadow$animate63726.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.animate/t_shadow$animate63726");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate63726.
 */
shadow.animate.__GT_t_shadow$animate63726 = (function shadow$animate$__GT_t_shadow$animate63726(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta63727){
return (new shadow.animate.t_shadow$animate63726(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta63727));
});

}

return (new shadow.animate.t_shadow$animate63726(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.transition.cljs$lang$maxFixedArity = 5);

shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate63771 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate63771 = (function (attr,from,to,meta63772){
this.attr = attr;
this.from = from;
this.to = to;
this.meta63772 = meta63772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate63771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63773,meta63772__$1){
var self__ = this;
var _63773__$1 = this;
return (new shadow.animate.t_shadow$animate63771(self__.attr,self__.from,self__.to,meta63772__$1));
}));

(shadow.animate.t_shadow$animate63771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63773){
var self__ = this;
var _63773__$1 = this;
return self__.meta63772;
}));

(shadow.animate.t_shadow$animate63771.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate63771.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate63771.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate63771.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate63771.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate63771.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate63771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta63772","meta63772",1034144407,null)], null);
}));

(shadow.animate.t_shadow$animate63771.cljs$lang$type = true);

(shadow.animate.t_shadow$animate63771.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate63771");

(shadow.animate.t_shadow$animate63771.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.animate/t_shadow$animate63771");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate63771.
 */
shadow.animate.__GT_t_shadow$animate63771 = (function shadow$animate$toggle_$___GT_t_shadow$animate63771(attr__$1,from__$1,to__$1,meta63772){
return (new shadow.animate.t_shadow$animate63771(attr__$1,from__$1,to__$1,meta63772));
});

}

return (new shadow.animate.t_shadow$animate63771(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__63782 = arguments.length;
switch (G__63782) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate63783 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate63783 = (function (attrs,meta63784){
this.attrs = attrs;
this.meta63784 = meta63784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate63783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63785,meta63784__$1){
var self__ = this;
var _63785__$1 = this;
return (new shadow.animate.t_shadow$animate63783(self__.attrs,meta63784__$1));
}));

(shadow.animate.t_shadow$animate63783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63785){
var self__ = this;
var _63785__$1 = this;
return self__.meta63784;
}));

(shadow.animate.t_shadow$animate63783.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate63783.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate63783.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
}));

(shadow.animate.t_shadow$animate63783.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate63783.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate63783.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate63783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta63784","meta63784",-1617704085,null)], null);
}));

(shadow.animate.t_shadow$animate63783.cljs$lang$type = true);

(shadow.animate.t_shadow$animate63783.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate63783");

(shadow.animate.t_shadow$animate63783.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.animate/t_shadow$animate63783");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate63783.
 */
shadow.animate.__GT_t_shadow$animate63783 = (function shadow$animate$__GT_t_shadow$animate63783(attrs__$1,meta63784){
return (new shadow.animate.t_shadow$animate63783(attrs__$1,meta63784));
});

}

return (new shadow.animate.t_shadow$animate63783(attrs,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
}));

(shadow.animate.set_attr.cljs$lang$maxFixedArity = 2);

/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate63786 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate63786 = (function (attr,meta63787){
this.attr = attr;
this.meta63787 = meta63787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate63786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63788,meta63787__$1){
var self__ = this;
var _63788__$1 = this;
return (new shadow.animate.t_shadow$animate63786(self__.attr,meta63787__$1));
}));

(shadow.animate.t_shadow$animate63786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63788){
var self__ = this;
var _63788__$1 = this;
return self__.meta63787;
}));

(shadow.animate.t_shadow$animate63786.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate63786.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate63786.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate63786.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
}));

(shadow.animate.t_shadow$animate63786.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate63786.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate63786.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta63787","meta63787",294288852,null)], null);
}));

(shadow.animate.t_shadow$animate63786.cljs$lang$type = true);

(shadow.animate.t_shadow$animate63786.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate63786");

(shadow.animate.t_shadow$animate63786.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.animate/t_shadow$animate63786");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate63786.
 */
shadow.animate.__GT_t_shadow$animate63786 = (function shadow$animate$delete_attr_$___GT_t_shadow$animate63786(attr__$1,meta63787){
return (new shadow.animate.t_shadow$animate63786(attr__$1,meta63787));
});

}

return (new shadow.animate.t_shadow$animate63786(attr,cljs.core.PersistentArrayMap.EMPTY));
});
shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__5772__auto__ = [];
var len__5766__auto___63974 = arguments.length;
var i__5767__auto___63975 = (0);
while(true){
if((i__5767__auto___63975 < len__5766__auto___63974)){
args__5772__auto__.push((arguments[i__5767__auto___63975]));

var G__63976 = (i__5767__auto___63975 + (1));
i__5767__auto___63975 = G__63976;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5802__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var adef = temp__5802__auto__;
var G__63977 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__63978 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__63979 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__63980 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__63981 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__63982 = cljs.core.rest(transitions__$1);
to = G__63977;
from = G__63978;
toggles = G__63979;
timings = G__63980;
delays = G__63981;
transitions__$1 = G__63982;
continue;
} else {
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate63799 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate63799 = (function (transitions,to,from,toggles,timings,delays,temp__5802__auto__,meta63800){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5802__auto__ = temp__5802__auto__;
this.meta63800 = meta63800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate63799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__){
return (function (_63801,meta63800__$1){
var self__ = this;
var _63801__$1 = this;
return (new shadow.animate.t_shadow$animate63799(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5802__auto__,meta63800__$1));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__))
);

(shadow.animate.t_shadow$animate63799.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__){
return (function (_63801){
var self__ = this;
var _63801__$1 = this;
return self__.meta63800;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__))
);

(shadow.animate.t_shadow$animate63799.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate63799.prototype.shadow$animate$Animation$_animate_from$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__))
);

(shadow.animate.t_shadow$animate63799.prototype.shadow$animate$Animation$_animate_to$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__))
);

(shadow.animate.t_shadow$animate63799.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__))
);

(shadow.animate.t_shadow$animate63799.prototype.shadow$animate$Animation$_animate_timings$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__))
);

(shadow.animate.t_shadow$animate63799.prototype.shadow$animate$Animation$_animate_delays$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__))
);

(shadow.animate.t_shadow$animate63799.getBasis = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),cljs.core.with_meta(new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"meta63800","meta63800",-2116001572,null)], null);
});})(to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__))
);

(shadow.animate.t_shadow$animate63799.cljs$lang$type = true);

(shadow.animate.t_shadow$animate63799.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate63799");

(shadow.animate.t_shadow$animate63799.cljs$lang$ctorPrWriter = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__){
return (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.animate/t_shadow$animate63799");
});})(to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__))
);

/**
 * Positional factory function for shadow.animate/t_shadow$animate63799.
 */
shadow.animate.__GT_t_shadow$animate63799 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__){
return (function shadow$animate$__GT_t_shadow$animate63799(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5802__auto____$1,meta63800){
return (new shadow.animate.t_shadow$animate63799(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5802__auto____$1,meta63800));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5802__auto__))
;

}

return (new shadow.animate.t_shadow$animate63799(transitions__$1,to,from,toggles,timings,delays,temp__5802__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
}));

(shadow.animate.combine.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.animate.combine.cljs$lang$applyTo = (function (seq63793){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63793));
}));

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__63803 = arguments.length;
switch (G__63803) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
}));

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
}));

(shadow.animate.fade_in.cljs$lang$maxFixedArity = 1);

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__63805 = arguments.length;
switch (G__63805) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
}));

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
}));

(shadow.animate.fade_out.cljs$lang$maxFixedArity = 1);

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix),"-transform"].join(''));
shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__63808 = arguments.length;
switch (G__63808) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate63809 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate63809 = (function (from,to,timing,delay,meta63810){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta63810 = meta63810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate63809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63811,meta63810__$1){
var self__ = this;
var _63811__$1 = this;
return (new shadow.animate.t_shadow$animate63809(self__.from,self__.to,self__.timing,self__.delay,meta63810__$1));
}));

(shadow.animate.t_shadow$animate63809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63811){
var self__ = this;
var _63811__$1 = this;
return self__.meta63810;
}));

(shadow.animate.t_shadow$animate63809.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate63809.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate63809.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate63809.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate63809.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate63809.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate63809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta63810","meta63810",-2037999466,null)], null);
}));

(shadow.animate.t_shadow$animate63809.cljs$lang$type = true);

(shadow.animate.t_shadow$animate63809.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate63809");

(shadow.animate.t_shadow$animate63809.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.animate/t_shadow$animate63809");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate63809.
 */
shadow.animate.__GT_t_shadow$animate63809 = (function shadow$animate$__GT_t_shadow$animate63809(from__$1,to__$1,timing__$1,delay__$1,meta63810){
return (new shadow.animate.t_shadow$animate63809(from__$1,to__$1,timing__$1,delay__$1,meta63810));
});

}

return (new shadow.animate.t_shadow$animate63809(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_y.cljs$lang$maxFixedArity = 4);

shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__63822 = arguments.length;
switch (G__63822) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate63825 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate63825 = (function (from,to,timing,delay,meta63826){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta63826 = meta63826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate63825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63827,meta63826__$1){
var self__ = this;
var _63827__$1 = this;
return (new shadow.animate.t_shadow$animate63825(self__.from,self__.to,self__.timing,self__.delay,meta63826__$1));
}));

(shadow.animate.t_shadow$animate63825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63827){
var self__ = this;
var _63827__$1 = this;
return self__.meta63826;
}));

(shadow.animate.t_shadow$animate63825.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate63825.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate63825.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate63825.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate63825.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate63825.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate63825.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta63826","meta63826",1616410145,null)], null);
}));

(shadow.animate.t_shadow$animate63825.cljs$lang$type = true);

(shadow.animate.t_shadow$animate63825.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate63825");

(shadow.animate.t_shadow$animate63825.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.animate/t_shadow$animate63825");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate63825.
 */
shadow.animate.__GT_t_shadow$animate63825 = (function shadow$animate$__GT_t_shadow$animate63825(from__$1,to__$1,timing__$1,delay__$1,meta63826){
return (new shadow.animate.t_shadow$animate63825(from__$1,to__$1,timing__$1,delay__$1,meta63826));
});

}

return (new shadow.animate.t_shadow$animate63825(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_x.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.animate.js.map
