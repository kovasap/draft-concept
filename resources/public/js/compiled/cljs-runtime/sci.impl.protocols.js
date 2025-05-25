goog.provide('sci.impl.protocols');
sci.impl.protocols.default_QMARK_ = (function sci$impl$protocols$default_QMARK_(_ctx,sym){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"object","object",-1179821820,null),sym)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"default","default",-347290801,null),sym)));
});
sci.impl.protocols.__GT_sigs = (function sci$impl$protocols$__GT_sigs(signatures){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53140){
var vec__53141 = p__53140;
var seq__53142 = cljs.core.seq(vec__53141);
var first__53143 = cljs.core.first(seq__53142);
var seq__53142__$1 = cljs.core.next(seq__53142);
var name = first__53143;
var arglists = seq__53142__$1;
var l = cljs.core.last(arglists);
var vec__53144 = ((typeof l === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.butlast(arglists),l], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglists,null], null));
var arglists__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53144,(0),null);
var doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53144,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),doc], null)], null);
}),signatures));
});
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53958 = arguments.length;
var i__5767__auto___53959 = (0);
while(true){
if((i__5767__auto___53959 < len__5766__auto___53958)){
args__5772__auto__.push((arguments[i__5767__auto___53959]));

var G__53960 = (i__5767__auto___53959 + (1));
i__5767__auto___53959 = G__53960;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__53217 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53217,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53217,(1),null);
var vec__53220 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53220,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53220,(1),null);
var sigs_map = sci.impl.protocols.__GT_sigs(signatures__$2);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name));
var extend_meta = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts);
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"sigs","sigs",-1653119622),null,(1),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,sigs_map,null,(1),null)),(2),null)),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,extend_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53279){
var vec__53280 = p__53279;
var seq__53281 = cljs.core.seq(vec__53280);
var first__53282 = cljs.core.first(seq__53281);
var seq__53281__$1 = cljs.core.next(seq__53281);
var method_name = first__53282;
var ___$2 = seq__53281__$1;
var fq_name__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__53156__auto__","x__53156__auto__",-776405277,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__53157__auto__","args__53157__auto__",1243808771,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__53158__auto__","methods__53158__auto__",-1001065446,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__53156__auto__","x__53156__auto__",-776405277,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__53159__auto__","m__53159__auto__",-474875304,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__53158__auto__","methods__53158__auto__",-1001065446,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__53159__auto__","m__53159__auto__",-474875304,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__53156__auto__","x__53156__auto__",-776405277,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__53157__auto__","args__53157__auto__",1243808771,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"default__53160__auto__","default__53160__auto__",502628587,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__53160__auto__","default__53160__auto__",502628587,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__53156__auto__","x__53156__auto__",-776405277,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__53157__auto__","args__53157__auto__",1243808771,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,"No method ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__53156__auto__","x__53156__auto__",-776405277,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(extend_meta)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__53171__auto__","x__53171__auto__",-1736231170,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__53172__auto__","args__53172__auto__",-819268818,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__53173__auto__","meta__53173__auto__",-968395717,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__53171__auto__","x__53171__auto__",-1736231170,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__53174__auto__","method__53174__auto__",1806394249,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__53173__auto__","meta__53173__auto__",-968395717,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name__$1,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__53174__auto__","method__53174__auto__",1806394249,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__53174__auto__","method__53174__auto__",1806394249,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__53171__auto__","x__53171__auto__",-1736231170,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__53172__auto__","args__53172__auto__",-819268818,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"method__53174__auto__","method__53174__auto__",1806394249,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__53171__auto__","x__53171__auto__",-1736231170,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"default__53175__auto__","default__53175__auto__",-15154241,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__53174__auto__","method__53174__auto__",1806394249,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"default__53175__auto__","default__53175__auto__",-15154241,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__53174__auto__","method__53174__auto__",1806394249,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__53171__auto__","x__53171__auto__",-1736231170,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__53172__auto__","args__53172__auto__",-819268818,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__53171__auto__","x__53171__auto__",-1736231170,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__53178__auto__","x__53178__auto__",100130802,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__53179__auto__","args__53179__auto__",-1904047092,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"method__53180__auto__","method__53180__auto__",-660544559,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__53178__auto__","x__53178__auto__",100130802,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"default__53181__auto__","default__53181__auto__",69428471,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__53180__auto__","method__53180__auto__",-660544559,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"default__53181__auto__","default__53181__auto__",69428471,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__53180__auto__","method__53180__auto__",-660544559,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__53178__auto__","x__53178__auto__",100130802,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__53179__auto__","args__53179__auto__",-1904047092,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__53178__auto__","x__53178__auto__",100130802,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq53197){
var G__53198 = cljs.core.first(seq53197);
var seq53197__$1 = cljs.core.next(seq53197);
var G__53199 = cljs.core.first(seq53197__$1);
var seq53197__$2 = cljs.core.next(seq53197__$1);
var G__53200 = cljs.core.first(seq53197__$2);
var seq53197__$3 = cljs.core.next(seq53197__$2);
var G__53201 = cljs.core.first(seq53197__$3);
var seq53197__$4 = cljs.core.next(seq53197__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53198,G__53199,G__53200,G__53201,seq53197__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53972 = arguments.length;
var i__5767__auto___53973 = (0);
while(true){
if((i__5767__auto___53973 < len__5766__auto___53972)){
args__5772__auto__.push((arguments[i__5767__auto___53973]));

var G__53974 = (i__5767__auto___53973 + (1));
i__5767__auto___53973 = G__53974;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__53603 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__53605 = null;
var count__53606 = (0);
var i__53607 = (0);
while(true){
if((i__53607 < count__53606)){
var vec__53768 = chunk__53605.cljs$core$IIndexed$_nth$arity$2(null,i__53607);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53768,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53768,(1),null);
var extend_via_metadata_53975 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_53976 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_53977 = sci.impl.vars.getName(proto_ns_53976);
var pns_str_53978 = (cljs.core.truth_(extend_via_metadata_53975)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_53977):null);
var seq__53776_53979 = cljs.core.seq(mmap);
var chunk__53777_53980 = null;
var count__53778_53981 = (0);
var i__53779_53982 = (0);
while(true){
if((i__53779_53982 < count__53778_53981)){
var vec__53796_53983 = chunk__53777_53980.cljs$core$IIndexed$_nth$arity$2(null,i__53779_53982);
var meth_name_53984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53796_53983,(0),null);
var f_53985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53796_53983,(1),null);
var meth_str_53986 = cljs.core.name(meth_name_53984);
var meth_sym_53987 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_53986);
var env_53988 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_53989 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_53988,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_53977,meth_sym_53987], null));
var multi_method_53990 = cljs.core.deref(multi_method_var_53989);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_53990,atype,(cljs.core.truth_(extend_via_metadata_53975)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_53978,meth_str_53986);
return ((function (seq__53776_53979,chunk__53777_53980,count__53778_53981,i__53779_53982,seq__53603,chunk__53605,count__53606,i__53607,fq,meth_str_53986,meth_sym_53987,env_53988,multi_method_var_53989,multi_method_53990,vec__53796_53983,meth_name_53984,f_53985,extend_via_metadata_53975,proto_ns_53976,pns_53977,pns_str_53978,vec__53768,proto,mmap){
return (function() { 
var G__53992__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_53985,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_53985,this$,args);
}
};
var G__53992 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__53993__i = 0, G__53993__a = new Array(arguments.length -  1);
while (G__53993__i < G__53993__a.length) {G__53993__a[G__53993__i] = arguments[G__53993__i + 1]; ++G__53993__i;}
  args = new cljs.core.IndexedSeq(G__53993__a,0,null);
} 
return G__53992__delegate.call(this,this$,args);};
G__53992.cljs$lang$maxFixedArity = 1;
G__53992.cljs$lang$applyTo = (function (arglist__53994){
var this$ = cljs.core.first(arglist__53994);
var args = cljs.core.rest(arglist__53994);
return G__53992__delegate(this$,args);
});
G__53992.cljs$core$IFn$_invoke$arity$variadic = G__53992__delegate;
return G__53992;
})()
;
;})(seq__53776_53979,chunk__53777_53980,count__53778_53981,i__53779_53982,seq__53603,chunk__53605,count__53606,i__53607,fq,meth_str_53986,meth_sym_53987,env_53988,multi_method_var_53989,multi_method_53990,vec__53796_53983,meth_name_53984,f_53985,extend_via_metadata_53975,proto_ns_53976,pns_53977,pns_str_53978,vec__53768,proto,mmap))
})():f_53985));


var G__53995 = seq__53776_53979;
var G__53996 = chunk__53777_53980;
var G__53997 = count__53778_53981;
var G__53998 = (i__53779_53982 + (1));
seq__53776_53979 = G__53995;
chunk__53777_53980 = G__53996;
count__53778_53981 = G__53997;
i__53779_53982 = G__53998;
continue;
} else {
var temp__5804__auto___53999 = cljs.core.seq(seq__53776_53979);
if(temp__5804__auto___53999){
var seq__53776_54000__$1 = temp__5804__auto___53999;
if(cljs.core.chunked_seq_QMARK_(seq__53776_54000__$1)){
var c__5565__auto___54001 = cljs.core.chunk_first(seq__53776_54000__$1);
var G__54002 = cljs.core.chunk_rest(seq__53776_54000__$1);
var G__54003 = c__5565__auto___54001;
var G__54004 = cljs.core.count(c__5565__auto___54001);
var G__54005 = (0);
seq__53776_53979 = G__54002;
chunk__53777_53980 = G__54003;
count__53778_53981 = G__54004;
i__53779_53982 = G__54005;
continue;
} else {
var vec__53807_54006 = cljs.core.first(seq__53776_54000__$1);
var meth_name_54007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53807_54006,(0),null);
var f_54008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53807_54006,(1),null);
var meth_str_54010 = cljs.core.name(meth_name_54007);
var meth_sym_54011 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_54010);
var env_54012 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_54013 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_54012,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_53977,meth_sym_54011], null));
var multi_method_54014 = cljs.core.deref(multi_method_var_54013);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_54014,atype,(cljs.core.truth_(extend_via_metadata_53975)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_53978,meth_str_54010);
return ((function (seq__53776_53979,chunk__53777_53980,count__53778_53981,i__53779_53982,seq__53603,chunk__53605,count__53606,i__53607,fq,meth_str_54010,meth_sym_54011,env_54012,multi_method_var_54013,multi_method_54014,vec__53807_54006,meth_name_54007,f_54008,seq__53776_54000__$1,temp__5804__auto___53999,extend_via_metadata_53975,proto_ns_53976,pns_53977,pns_str_53978,vec__53768,proto,mmap){
return (function() { 
var G__54015__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_54008,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_54008,this$,args);
}
};
var G__54015 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__54016__i = 0, G__54016__a = new Array(arguments.length -  1);
while (G__54016__i < G__54016__a.length) {G__54016__a[G__54016__i] = arguments[G__54016__i + 1]; ++G__54016__i;}
  args = new cljs.core.IndexedSeq(G__54016__a,0,null);
} 
return G__54015__delegate.call(this,this$,args);};
G__54015.cljs$lang$maxFixedArity = 1;
G__54015.cljs$lang$applyTo = (function (arglist__54017){
var this$ = cljs.core.first(arglist__54017);
var args = cljs.core.rest(arglist__54017);
return G__54015__delegate(this$,args);
});
G__54015.cljs$core$IFn$_invoke$arity$variadic = G__54015__delegate;
return G__54015;
})()
;
;})(seq__53776_53979,chunk__53777_53980,count__53778_53981,i__53779_53982,seq__53603,chunk__53605,count__53606,i__53607,fq,meth_str_54010,meth_sym_54011,env_54012,multi_method_var_54013,multi_method_54014,vec__53807_54006,meth_name_54007,f_54008,seq__53776_54000__$1,temp__5804__auto___53999,extend_via_metadata_53975,proto_ns_53976,pns_53977,pns_str_53978,vec__53768,proto,mmap))
})():f_54008));


var G__54018 = cljs.core.next(seq__53776_54000__$1);
var G__54019 = null;
var G__54020 = (0);
var G__54021 = (0);
seq__53776_53979 = G__54018;
chunk__53777_53980 = G__54019;
count__53778_53981 = G__54020;
i__53779_53982 = G__54021;
continue;
}
} else {
}
}
break;
}


var G__54022 = seq__53603;
var G__54023 = chunk__53605;
var G__54024 = count__53606;
var G__54025 = (i__53607 + (1));
seq__53603 = G__54022;
chunk__53605 = G__54023;
count__53606 = G__54024;
i__53607 = G__54025;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53603);
if(temp__5804__auto__){
var seq__53603__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53603__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__53603__$1);
var G__54026 = cljs.core.chunk_rest(seq__53603__$1);
var G__54027 = c__5565__auto__;
var G__54028 = cljs.core.count(c__5565__auto__);
var G__54029 = (0);
seq__53603 = G__54026;
chunk__53605 = G__54027;
count__53606 = G__54028;
i__53607 = G__54029;
continue;
} else {
var vec__53814 = cljs.core.first(seq__53603__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53814,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53814,(1),null);
var extend_via_metadata_54030 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_54031 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_54032 = sci.impl.vars.getName(proto_ns_54031);
var pns_str_54033 = (cljs.core.truth_(extend_via_metadata_54030)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_54032):null);
var seq__53817_54034 = cljs.core.seq(mmap);
var chunk__53818_54035 = null;
var count__53819_54036 = (0);
var i__53820_54037 = (0);
while(true){
if((i__53820_54037 < count__53819_54036)){
var vec__53833_54038 = chunk__53818_54035.cljs$core$IIndexed$_nth$arity$2(null,i__53820_54037);
var meth_name_54039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53833_54038,(0),null);
var f_54040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53833_54038,(1),null);
var meth_str_54041 = cljs.core.name(meth_name_54039);
var meth_sym_54042 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_54041);
var env_54043 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_54044 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_54043,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_54032,meth_sym_54042], null));
var multi_method_54045 = cljs.core.deref(multi_method_var_54044);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_54045,atype,(cljs.core.truth_(extend_via_metadata_54030)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_54033,meth_str_54041);
return ((function (seq__53817_54034,chunk__53818_54035,count__53819_54036,i__53820_54037,seq__53603,chunk__53605,count__53606,i__53607,fq,meth_str_54041,meth_sym_54042,env_54043,multi_method_var_54044,multi_method_54045,vec__53833_54038,meth_name_54039,f_54040,extend_via_metadata_54030,proto_ns_54031,pns_54032,pns_str_54033,vec__53814,proto,mmap,seq__53603__$1,temp__5804__auto__){
return (function() { 
var G__54046__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_54040,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_54040,this$,args);
}
};
var G__54046 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__54047__i = 0, G__54047__a = new Array(arguments.length -  1);
while (G__54047__i < G__54047__a.length) {G__54047__a[G__54047__i] = arguments[G__54047__i + 1]; ++G__54047__i;}
  args = new cljs.core.IndexedSeq(G__54047__a,0,null);
} 
return G__54046__delegate.call(this,this$,args);};
G__54046.cljs$lang$maxFixedArity = 1;
G__54046.cljs$lang$applyTo = (function (arglist__54048){
var this$ = cljs.core.first(arglist__54048);
var args = cljs.core.rest(arglist__54048);
return G__54046__delegate(this$,args);
});
G__54046.cljs$core$IFn$_invoke$arity$variadic = G__54046__delegate;
return G__54046;
})()
;
;})(seq__53817_54034,chunk__53818_54035,count__53819_54036,i__53820_54037,seq__53603,chunk__53605,count__53606,i__53607,fq,meth_str_54041,meth_sym_54042,env_54043,multi_method_var_54044,multi_method_54045,vec__53833_54038,meth_name_54039,f_54040,extend_via_metadata_54030,proto_ns_54031,pns_54032,pns_str_54033,vec__53814,proto,mmap,seq__53603__$1,temp__5804__auto__))
})():f_54040));


var G__54049 = seq__53817_54034;
var G__54050 = chunk__53818_54035;
var G__54051 = count__53819_54036;
var G__54052 = (i__53820_54037 + (1));
seq__53817_54034 = G__54049;
chunk__53818_54035 = G__54050;
count__53819_54036 = G__54051;
i__53820_54037 = G__54052;
continue;
} else {
var temp__5804__auto___54053__$1 = cljs.core.seq(seq__53817_54034);
if(temp__5804__auto___54053__$1){
var seq__53817_54054__$1 = temp__5804__auto___54053__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53817_54054__$1)){
var c__5565__auto___54055 = cljs.core.chunk_first(seq__53817_54054__$1);
var G__54056 = cljs.core.chunk_rest(seq__53817_54054__$1);
var G__54057 = c__5565__auto___54055;
var G__54058 = cljs.core.count(c__5565__auto___54055);
var G__54059 = (0);
seq__53817_54034 = G__54056;
chunk__53818_54035 = G__54057;
count__53819_54036 = G__54058;
i__53820_54037 = G__54059;
continue;
} else {
var vec__53842_54060 = cljs.core.first(seq__53817_54054__$1);
var meth_name_54061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53842_54060,(0),null);
var f_54062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53842_54060,(1),null);
var meth_str_54063 = cljs.core.name(meth_name_54061);
var meth_sym_54064 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_54063);
var env_54065 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_54066 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_54065,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_54032,meth_sym_54064], null));
var multi_method_54067 = cljs.core.deref(multi_method_var_54066);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_54067,atype,(cljs.core.truth_(extend_via_metadata_54030)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_54033,meth_str_54063);
return ((function (seq__53817_54034,chunk__53818_54035,count__53819_54036,i__53820_54037,seq__53603,chunk__53605,count__53606,i__53607,fq,meth_str_54063,meth_sym_54064,env_54065,multi_method_var_54066,multi_method_54067,vec__53842_54060,meth_name_54061,f_54062,seq__53817_54054__$1,temp__5804__auto___54053__$1,extend_via_metadata_54030,proto_ns_54031,pns_54032,pns_str_54033,vec__53814,proto,mmap,seq__53603__$1,temp__5804__auto__){
return (function() { 
var G__54068__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_54062,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_54062,this$,args);
}
};
var G__54068 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__54070__i = 0, G__54070__a = new Array(arguments.length -  1);
while (G__54070__i < G__54070__a.length) {G__54070__a[G__54070__i] = arguments[G__54070__i + 1]; ++G__54070__i;}
  args = new cljs.core.IndexedSeq(G__54070__a,0,null);
} 
return G__54068__delegate.call(this,this$,args);};
G__54068.cljs$lang$maxFixedArity = 1;
G__54068.cljs$lang$applyTo = (function (arglist__54071){
var this$ = cljs.core.first(arglist__54071);
var args = cljs.core.rest(arglist__54071);
return G__54068__delegate(this$,args);
});
G__54068.cljs$core$IFn$_invoke$arity$variadic = G__54068__delegate;
return G__54068;
})()
;
;})(seq__53817_54034,chunk__53818_54035,count__53819_54036,i__53820_54037,seq__53603,chunk__53605,count__53606,i__53607,fq,meth_str_54063,meth_sym_54064,env_54065,multi_method_var_54066,multi_method_54067,vec__53842_54060,meth_name_54061,f_54062,seq__53817_54054__$1,temp__5804__auto___54053__$1,extend_via_metadata_54030,proto_ns_54031,pns_54032,pns_str_54033,vec__53814,proto,mmap,seq__53603__$1,temp__5804__auto__))
})():f_54062));


var G__54072 = cljs.core.next(seq__53817_54054__$1);
var G__54073 = null;
var G__54074 = (0);
var G__54075 = (0);
seq__53817_54034 = G__54072;
chunk__53818_54035 = G__54073;
count__53819_54036 = G__54074;
i__53820_54037 = G__54075;
continue;
}
} else {
}
}
break;
}


var G__54076 = cljs.core.next(seq__53603__$1);
var G__54077 = null;
var G__54078 = (0);
var G__54079 = (0);
seq__53603 = G__54076;
chunk__53605 = G__54077;
count__53606 = G__54078;
i__53607 = G__54079;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq53599){
var G__53600 = cljs.core.first(seq53599);
var seq53599__$1 = cljs.core.next(seq53599);
var G__53601 = cljs.core.first(seq53599__$1);
var seq53599__$2 = cljs.core.next(seq53599__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53600,G__53601,seq53599__$2);
}));

/**
 * Processes single args+body pair for extending via metadata
 */
sci.impl.protocols.process_single_extend_meta = (function sci$impl$protocols$process_single_extend_meta(fq,p__53854,default_method_QMARK_){
var vec__53855 = p__53854;
var seq__53856 = cljs.core.seq(vec__53855);
var first__53857 = cljs.core.first(seq__53856);
var seq__53856__$1 = cljs.core.next(seq__53856);
var args = first__53857;
var body = seq__53856__$1;
return (new cljs.core.List(null,args,(new cljs.core.List(null,(cljs.core.truth_(default_method_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__53847__auto__","farg__53847__auto__",1636994184,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__53848__auto__","m__53848__auto__",-373262133,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__53847__auto__","farg__53847__auto__",1636994184,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__53849__auto__","meth__53849__auto__",206318292,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__53848__auto__","m__53848__auto__",-373262133,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__53849__auto__","meth__53849__auto__",206318292,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__53849__auto__","meth__53849__auto__",206318292,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__53847__auto__","farg__53847__auto__",1636994184,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"default__53850__auto__","default__53850__auto__",1214617693,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__53850__auto__","default__53850__auto__",1214617693,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__53849__auto__","meth__53849__auto__",206318292,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__53849__auto__","meth__53849__auto__",206318292,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__53849__auto__","meth__53849__auto__",206318292,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__53847__auto__","farg__53847__auto__",1636994184,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"default__53850__auto__","default__53850__auto__",1214617693,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__53850__auto__","default__53850__auto__",1214617693,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__53849__auto__","meth__53849__auto__",206318292,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__53849__auto__","meth__53849__auto__",206318292,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__53851__auto__","farg__53851__auto__",936145159,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__53852__auto__","m__53852__auto__",926366728,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__53851__auto__","farg__53851__auto__",936145159,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__53853__auto__","meth__53853__auto__",-509359586,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__53852__auto__","m__53852__auto__",926366728,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__53853__auto__","meth__53853__auto__",-509359586,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),(2),null));
});
sci.impl.protocols.process_single = (function sci$impl$protocols$process_single(fq,p__53877){
var vec__53879 = p__53877;
var seq__53880 = cljs.core.seq(vec__53879);
var first__53881 = cljs.core.first(seq__53880);
var seq__53880__$1 = cljs.core.next(seq__53880);
var args = first__53881;
var body = seq__53880__$1;
return (new cljs.core.List(null,args,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__53874__auto__","farg__53874__auto__",-487014329,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__53875__auto__","meth__53875__auto__",180966377,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__53874__auto__","farg__53874__auto__",-487014329,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"default__53876__auto__","default__53876__auto__",150579698,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__53876__auto__","default__53876__auto__",150579698,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__53875__auto__","meth__53875__auto__",180966377,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__53875__auto__","meth__53875__auto__",180966377,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(2),null));
});
sci.impl.protocols.process_methods = (function sci$impl$protocols$process_methods(ctx,type,meths,protocol_ns,extend_via_metadata){
var default_method_QMARK_ = sci.impl.protocols.default_QMARK_(ctx,type);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53886){
var vec__53887 = p__53886;
var seq__53888 = cljs.core.seq(vec__53887);
var first__53889 = cljs.core.first(seq__53888);
var seq__53888__$1 = cljs.core.next(seq__53888);
var meth_name = first__53889;
var fn_body = seq__53888__$1;
var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(protocol_ns,cljs.core.name(meth_name));
var fn_body__$1 = (cljs.core.truth_(extend_via_metadata)?((cljs.core.vector_QMARK_(cljs.core.first(fn_body)))?sci.impl.protocols.process_single_extend_meta(fq,fn_body,default_method_QMARK_):cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53883_SHARP_){
return sci.impl.protocols.process_single_extend_meta(fq,p1__53883_SHARP_,default_method_QMARK_);
}),fn_body)):((default_method_QMARK_)?((cljs.core.vector_QMARK_(cljs.core.first(fn_body)))?sci.impl.protocols.process_single(fq,fn_body):cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53884_SHARP_){
return sci.impl.protocols.process_single(fq,p1__53884_SHARP_);
}),fn_body)):fn_body
));
if(default_method_QMARK_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),fn_body__$1], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),fn_body__$1], 0))));
}
}),meths);
});
sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___54100 = arguments.length;
var i__5767__auto___54101 = (0);
while(true){
if((i__5767__auto___54101 < len__5766__auto___54100)){
args__5772__auto__.push((arguments[i__5767__auto___54101]));

var G__54102 = (i__5767__auto___54101 + (1));
i__5767__auto___54101 = G__54102;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__53895_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__53895_SHARP_)));
}),impls);
var protocol_var = (function (){var G__53903 = ctx;
var G__53904 = new cljs.core.Keyword(null,"bindingx","bindingx",679516896).cljs$core$IFn$_invoke$arity$1(ctx);
var G__53905 = protocol_name;
var fexpr__53902 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__53902.cljs$core$IFn$_invoke$arity$3 ? fexpr__53902.cljs$core$IFn$_invoke$arity$3(G__53903,G__53904,G__53905) : fexpr__53902.call(null,G__53903,G__53904,G__53905));
})();
var protocol_data = cljs.core.deref(protocol_var);
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(protocol_data);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53906){
var vec__53907 = p__53906;
var seq__53908 = cljs.core.seq(vec__53907);
var first__53909 = cljs.core.first(seq__53908);
var seq__53908__$1 = cljs.core.next(seq__53908);
var type = first__53909;
var meths = seq__53908__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(ctx,type,meths,pns,extend_via_metadata))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq53896){
var G__53897 = cljs.core.first(seq53896);
var seq53896__$1 = cljs.core.next(seq53896);
var G__53898 = cljs.core.first(seq53896__$1);
var seq53896__$2 = cljs.core.next(seq53896__$1);
var G__53899 = cljs.core.first(seq53896__$2);
var seq53896__$3 = cljs.core.next(seq53896__$2);
var G__53900 = cljs.core.first(seq53896__$3);
var seq53896__$4 = cljs.core.next(seq53896__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53897,G__53898,G__53899,G__53900,seq53896__$4);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__5772__auto__ = [];
var len__5766__auto___54110 = arguments.length;
var i__5767__auto___54111 = (0);
while(true){
if((i__5767__auto___54111 < len__5766__auto___54110)){
args__5772__auto__.push((arguments[i__5767__auto___54111]));

var G__54112 = (i__5767__auto___54111 + (1));
i__5767__auto___54111 = G__54112;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,atype,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__53915_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__53915_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53928){
var vec__53929 = p__53928;
var seq__53930 = cljs.core.seq(vec__53929);
var first__53931 = cljs.core.first(seq__53930);
var seq__53930__$1 = cljs.core.next(seq__53930);
var proto = first__53931;
var meths = seq__53930__$1;
var protocol_var = (function (){var G__53933 = ctx;
var G__53934 = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var G__53935 = proto;
var fexpr__53932 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__53932.cljs$core$IFn$_invoke$arity$3 ? fexpr__53932.cljs$core$IFn$_invoke$arity$3(G__53933,G__53934,G__53935) : fexpr__53932.call(null,G__53933,G__53934,G__53935));
})();
var proto_data = cljs.core.deref(protocol_var);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto_data);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(ctx,atype,meths,pns,extend_via_metadata))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq53916){
var G__53917 = cljs.core.first(seq53916);
var seq53916__$1 = cljs.core.next(seq53916);
var G__53918 = cljs.core.first(seq53916__$1);
var seq53916__$2 = cljs.core.next(seq53916__$1);
var G__53919 = cljs.core.first(seq53916__$2);
var seq53916__$3 = cljs.core.next(seq53916__$2);
var G__53920 = cljs.core.first(seq53916__$3);
var seq53916__$4 = cljs.core.next(seq53916__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53917,G__53918,G__53919,G__53920,seq53916__$4);
}));

sci.impl.protocols.find_matching_non_default_method = (function sci$impl$protocols$find_matching_non_default_method(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__53938_SHARP_){
var temp__5804__auto__ = cljs.core.get_method(p1__53938_SHARP_,sci.impl.types.type_impl(obj));
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
var ms = cljs.core.methods$(p1__53938_SHARP_);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.Keyword(null,"default","default",-1987822328));
return (!((m === default$)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
if((obj instanceof sci.impl.types.Reified)){
return cljs.core.contains_QMARK_(obj.sci$impl$types$IReified$getProtocols$arity$1(null),protocol);
} else {
var p = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(protocol);
var or__5043__auto__ = (function (){var and__5041__auto__ = p;
if(cljs.core.truth_(and__5041__auto__)){
var pred__53944 = cljs.core._EQ_;
var expr__53945 = p;
if(cljs.core.truth_((pred__53944.cljs$core$IFn$_invoke$arity$2 ? pred__53944.cljs$core$IFn$_invoke$arity$2(cljs.core.IDeref,expr__53945) : pred__53944.call(null,cljs.core.IDeref,expr__53945)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
}
} else {
if(cljs.core.truth_((pred__53944.cljs$core$IFn$_invoke$arity$2 ? pred__53944.cljs$core$IFn$_invoke$arity$2(cljs.core.ISwap,expr__53945) : pred__53944.call(null,cljs.core.ISwap,expr__53945)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (65536))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$ISwap$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
}
} else {
if(cljs.core.truth_((pred__53944.cljs$core$IFn$_invoke$arity$2 ? pred__53944.cljs$core$IFn$_invoke$arity$2(cljs.core.IReset,expr__53945) : pred__53944.call(null,cljs.core.IReset,expr__53945)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IReset$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__53945)].join('')));
}
}
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return sci.impl.protocols.find_matching_non_default_method(protocol,obj);
}
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((function (){var and__5041__auto__ = (clazz instanceof cljs.core.Symbol);
if(and__5041__auto__){
var G__53951 = clazz;
var G__53951__$1 = (((G__53951 == null))?null:cljs.core.meta(G__53951));
if((G__53951__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(G__53951__$1);
}
} else {
return and__5041__auto__;
}
})())){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x)));
} else {
return (x instanceof clazz);

}
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__53953_SHARP_){
return cljs.core.get_method(p1__53953_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
