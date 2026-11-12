var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),l=o(((e,t)=>{var n=typeof Reflect==`object`?Reflect:null,r=n&&typeof n.apply==`function`?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)},i=n&&typeof n.ownKeys==`function`?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};function a(e){console&&console.warn&&console.warn(e)}var o=Number.isNaN||function(e){return e!==e};function s(){s.init.call(this)}t.exports=s,t.exports.once=y,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var c=10;function l(e){if(typeof e!=`function`)throw TypeError(`The "listener" argument must be of type Function. Received type `+typeof e)}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(e){if(typeof e!=`number`||e<0||o(e))throw RangeError(`The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received `+e+`.`);c=e}}),s.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if(typeof e!=`number`||e<0||o(e))throw RangeError(`The value of "n" is out of range. It must be a non-negative number. Received `+e+`.`);return this._maxListeners=e,this};function u(e){return e._maxListeners===void 0?s.defaultMaxListeners:e._maxListeners}s.prototype.getMaxListeners=function(){return u(this)},s.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i=e===`error`,a=this._events;if(a!==void 0)i&&=a.error===void 0;else if(!i)return!1;if(i){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var s=Error(`Unhandled error.`+(o?` (`+o.message+`)`:``));throw s.context=o,s}var c=a[e];if(c===void 0)return!1;if(typeof c==`function`)r(c,this,t);else for(var l=c.length,u=g(c,l),n=0;n<l;++n)r(u[n],this,t);return!0};function d(e,t,n,r){var i,o,s;if(l(n),o=e._events,o===void 0?(o=e._events=Object.create(null),e._eventsCount=0):(o.newListener!==void 0&&(e.emit(`newListener`,t,n.listener?n.listener:n),o=e._events),s=o[t]),s===void 0)s=o[t]=n,++e._eventsCount;else if(typeof s==`function`?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),i=u(e),i>0&&s.length>i&&!s.warned){s.warned=!0;var c=Error(`Possible EventEmitter memory leak detected. `+s.length+` `+String(t)+` listeners added. Use emitter.setMaxListeners() to increase limit`);c.name=`MaxListenersExceededWarning`,c.emitter=e,c.type=t,c.count=s.length,a(c)}return e}s.prototype.addListener=function(e,t){return d(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return d(this,e,t,!0)};function f(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function p(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=f.bind(r);return i.listener=n,r.wrapFn=i,i}s.prototype.once=function(e,t){return l(t),this.on(e,p(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){return l(t),this.prependListener(e,p(this,e,t)),this},s.prototype.removeListener=function(e,t){var n,r,i,a,o;if(l(t),r=this._events,r===void 0||(n=r[e],n===void 0))return this;if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit(`removeListener`,e,n.listener||t));else if(typeof n!=`function`){for(i=-1,a=n.length-1;a>=0;a--)if(n[a]===t||n[a].listener===t){o=n[a].listener,i=a;break}if(i<0)return this;i===0?n.shift():_(n,i),n.length===1&&(r[e]=n[0]),r.removeListener!==void 0&&this.emit(`removeListener`,e,o||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,n=this._events,r;if(n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var i=Object.keys(n),a;for(r=0;r<i.length;++r)a=i[r],a!==`removeListener`&&this.removeAllListeners(a);return this.removeAllListeners(`removeListener`),this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t==`function`)this.removeListener(e,t);else if(t!==void 0)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this};function m(e,t,n){var r=e._events;if(r===void 0)return[];var i=r[t];return i===void 0?[]:typeof i==`function`?n?[i.listener||i]:[i]:n?v(i):g(i,i.length)}s.prototype.listeners=function(e){return m(this,e,!0)},s.prototype.rawListeners=function(e){return m(this,e,!1)},s.listenerCount=function(e,t){return typeof e.listenerCount==`function`?e.listenerCount(t):h.call(e,t)},s.prototype.listenerCount=h;function h(e){var t=this._events;if(t!==void 0){var n=t[e];if(typeof n==`function`)return 1;if(n!==void 0)return n.length}return 0}s.prototype.eventNames=function(){return this._eventsCount>0?i(this._events):[]};function g(e,t){for(var n=Array(t),r=0;r<t;++r)n[r]=e[r];return n}function _(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function v(e){for(var t=Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}function y(e,t){return new Promise(function(n,r){function i(n){e.removeListener(t,a),r(n)}function a(){typeof e.removeListener==`function`&&e.removeListener(`error`,i),n([].slice.call(arguments))}x(e,t,a,{once:!0}),t!==`error`&&b(e,i,{once:!0})})}function b(e,t,n){typeof e.on==`function`&&x(e,`error`,t,n)}function x(e,t,n,r){if(typeof e.on==`function`)r.once?e.once(t,n):e.on(t,n);else if(typeof e.addEventListener==`function`)e.addEventListener(t,function i(a){r.once&&e.removeEventListener(t,i),n(a)});else throw TypeError(`The "emitter" argument must be of type EventEmitter. Received type `+typeof e)}}))();function u(){let e=arguments[0];for(let t=1,n=arguments.length;t<n;t++)if(arguments[t])for(let n in arguments[t])e[n]=arguments[t][n];return e}var d=u;typeof Object.assign==`function`&&(d=Object.assign);function f(e,t,n,r){let i=e._nodes.get(t),a=null;return i&&(a=r===`mixed`?i.out&&i.out[n]||i.undirected&&i.undirected[n]:r===`directed`?i.out&&i.out[n]:i.undirected&&i.undirected[n]),a}function p(e){return typeof e==`object`&&!!e}function m(e){let t;for(t in e)return!1;return!0}function h(e,t,n){Object.defineProperty(e,t,{enumerable:!1,configurable:!1,writable:!0,value:n})}function g(e,t,n){let r={enumerable:!0,configurable:!0};typeof n==`function`?r.get=n:(r.value=n,r.writable=!1),Object.defineProperty(e,t,r)}function _(e){return!(!p(e)||e.attributes&&!Array.isArray(e.attributes))}function v(){let e=Math.floor(Math.random()*256)&255;return()=>e++}function y(){let e=arguments,t=null,n=-1;return{[Symbol.iterator](){return this},next(){let r=null;do{if(t===null){if(n++,n>=e.length)return{done:!0};t=e[n][Symbol.iterator]()}if(r=t.next(),r.done)t=null;else break}while(1);return r}}}function b(){return{[Symbol.iterator](){return this},next(){return{done:!0}}}}var x=class extends Error{constructor(e){super(),this.name=`GraphError`,this.message=e}},S=class e extends x{constructor(t){super(t),this.name=`InvalidArgumentsGraphError`,typeof Error.captureStackTrace==`function`&&Error.captureStackTrace(this,e.prototype.constructor)}},C=class e extends x{constructor(t){super(t),this.name=`NotFoundGraphError`,typeof Error.captureStackTrace==`function`&&Error.captureStackTrace(this,e.prototype.constructor)}},w=class e extends x{constructor(t){super(t),this.name=`UsageGraphError`,typeof Error.captureStackTrace==`function`&&Error.captureStackTrace(this,e.prototype.constructor)}};function T(e,t){this.key=e,this.attributes=t,this.clear()}T.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.undirectedLoops=0,this.directedLoops=0,this.in={},this.out={},this.undirected={}};function E(e,t){this.key=e,this.attributes=t,this.clear()}E.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.directedLoops=0,this.in={},this.out={}};function D(e,t){this.key=e,this.attributes=t,this.clear()}D.prototype.clear=function(){this.undirectedDegree=0,this.undirectedLoops=0,this.undirected={}};function O(e,t,n,r,i){this.key=t,this.attributes=i,this.undirected=e,this.source=n,this.target=r}O.prototype.attach=function(){let e=`out`,t=`in`;this.undirected&&(e=t=`undirected`);let n=this.source.key,r=this.target.key;this.source[e][r]=this,this.undirected&&n===r||(this.target[t][n]=this)},O.prototype.attachMulti=function(){let e=`out`,t=`in`,n=this.source.key,r=this.target.key;this.undirected&&(e=t=`undirected`);let i=this.source[e],a=i[r];a===void 0?(i[r]=this,this.undirected&&n===r||(this.target[t][n]=this)):(a.previous=this,this.next=a,i[r]=this,this.target[t][n]=this)},O.prototype.detach=function(){let e=this.source.key,t=this.target.key,n=`out`,r=`in`;this.undirected&&(n=r=`undirected`),delete this.source[n][t],delete this.target[r][e]},O.prototype.detachMulti=function(){let e=this.source.key,t=this.target.key,n=`out`,r=`in`;this.undirected&&(n=r=`undirected`),this.previous===void 0?this.next===void 0?(delete this.source[n][t],delete this.target[r][e]):(this.next.previous=void 0,this.source[n][t]=this.next,this.target[r][e]=this.next):(this.previous.next=this.next,this.next!==void 0&&(this.next.previous=this.previous))};var k=0,A=1,j=2,M=3;function N(e,t,n,r,i,a,o){let s,c,l,u;if(r=``+r,n===k){if(s=e._nodes.get(r),!s)throw new C(`Graph.${t}: could not find the "${r}" node in the graph.`);l=i,u=a}else if(n===M){if(i=``+i,c=e._edges.get(i),!c)throw new C(`Graph.${t}: could not find the "${i}" edge in the graph.`);let n=c.source.key,d=c.target.key;if(r===n)s=c.target;else if(r===d)s=c.source;else throw new C(`Graph.${t}: the "${r}" node is not attached to the "${i}" edge (${n}, ${d}).`);l=a,u=o}else{if(c=e._edges.get(r),!c)throw new C(`Graph.${t}: could not find the "${r}" edge in the graph.`);s=n===A?c.source:c.target,l=i,u=a}return[s,l,u]}function P(e,t,n){e.prototype[t]=function(e,r,i){let[a,o]=N(this,t,n,e,r,i);return a.attributes[o]}}function F(e,t,n){e.prototype[t]=function(e,r){let[i]=N(this,t,n,e,r);return i.attributes}}function ee(e,t,n){e.prototype[t]=function(e,r,i){let[a,o]=N(this,t,n,e,r,i);return a.attributes.hasOwnProperty(o)}}function I(e,t,n){e.prototype[t]=function(e,r,i,a){let[o,s,c]=N(this,t,n,e,r,i,a);return o.attributes[s]=c,this.emit(`nodeAttributesUpdated`,{key:o.key,type:`set`,attributes:o.attributes,name:s}),this}}function L(e,t,n){e.prototype[t]=function(e,r,i,a){let[o,s,c]=N(this,t,n,e,r,i,a);if(typeof c!=`function`)throw new S(`Graph.${t}: updater should be a function.`);let l=o.attributes;return l[s]=c(l[s]),this.emit(`nodeAttributesUpdated`,{key:o.key,type:`set`,attributes:o.attributes,name:s}),this}}function te(e,t,n){e.prototype[t]=function(e,r,i){let[a,o]=N(this,t,n,e,r,i);return delete a.attributes[o],this.emit(`nodeAttributesUpdated`,{key:a.key,type:`remove`,attributes:a.attributes,name:o}),this}}function ne(e,t,n){e.prototype[t]=function(e,r,i){let[a,o]=N(this,t,n,e,r,i);if(!p(o))throw new S(`Graph.${t}: provided attributes are not a plain object.`);return a.attributes=o,this.emit(`nodeAttributesUpdated`,{key:a.key,type:`replace`,attributes:a.attributes}),this}}function re(e,t,n){e.prototype[t]=function(e,r,i){let[a,o]=N(this,t,n,e,r,i);if(!p(o))throw new S(`Graph.${t}: provided attributes are not a plain object.`);return d(a.attributes,o),this.emit(`nodeAttributesUpdated`,{key:a.key,type:`merge`,attributes:a.attributes,data:o}),this}}function ie(e,t,n){e.prototype[t]=function(e,r,i){let[a,o]=N(this,t,n,e,r,i);if(typeof o!=`function`)throw new S(`Graph.${t}: provided updater is not a function.`);return a.attributes=o(a.attributes),this.emit(`nodeAttributesUpdated`,{key:a.key,type:`update`,attributes:a.attributes}),this}}var ae=[{name:e=>`get${e}Attribute`,attacher:P},{name:e=>`get${e}Attributes`,attacher:F},{name:e=>`has${e}Attribute`,attacher:ee},{name:e=>`set${e}Attribute`,attacher:I},{name:e=>`update${e}Attribute`,attacher:L},{name:e=>`remove${e}Attribute`,attacher:te},{name:e=>`replace${e}Attributes`,attacher:ne},{name:e=>`merge${e}Attributes`,attacher:re},{name:e=>`update${e}Attributes`,attacher:ie}];function oe(e){ae.forEach(function({name:t,attacher:n}){n(e,t(`Node`),k),n(e,t(`Source`),A),n(e,t(`Target`),j),n(e,t(`Opposite`),M)})}function se(e,t,n){e.prototype[t]=function(e,r){let i;if(this.type!==`mixed`&&n!==`mixed`&&n!==this.type)throw new w(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new w(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let a=``+e,o=``+r;if(r=arguments[2],i=f(this,a,o,n),!i)throw new C(`Graph.${t}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(n!==`mixed`)throw new w(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=``+e,i=this._edges.get(e),!i)throw new C(`Graph.${t}: could not find the "${e}" edge in the graph.`)}return i.attributes[r]}}function ce(e,t,n){e.prototype[t]=function(e){let r;if(this.type!==`mixed`&&n!==`mixed`&&n!==this.type)throw new w(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>1){if(this.multi)throw new w(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let i=``+e,a=``+arguments[1];if(r=f(this,i,a,n),!r)throw new C(`Graph.${t}: could not find an edge for the given path ("${i}" - "${a}").`)}else{if(n!==`mixed`)throw new w(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=``+e,r=this._edges.get(e),!r)throw new C(`Graph.${t}: could not find the "${e}" edge in the graph.`)}return r.attributes}}function le(e,t,n){e.prototype[t]=function(e,r){let i;if(this.type!==`mixed`&&n!==`mixed`&&n!==this.type)throw new w(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new w(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let a=``+e,o=``+r;if(r=arguments[2],i=f(this,a,o,n),!i)throw new C(`Graph.${t}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(n!==`mixed`)throw new w(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=``+e,i=this._edges.get(e),!i)throw new C(`Graph.${t}: could not find the "${e}" edge in the graph.`)}return i.attributes.hasOwnProperty(r)}}function ue(e,t,n){e.prototype[t]=function(e,r,i){let a;if(this.type!==`mixed`&&n!==`mixed`&&n!==this.type)throw new w(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new w(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=``+e,s=``+r;if(r=arguments[2],i=arguments[3],a=f(this,o,s,n),!a)throw new C(`Graph.${t}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(n!==`mixed`)throw new w(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=``+e,a=this._edges.get(e),!a)throw new C(`Graph.${t}: could not find the "${e}" edge in the graph.`)}return a.attributes[r]=i,this.emit(`edgeAttributesUpdated`,{key:a.key,type:`set`,attributes:a.attributes,name:r}),this}}function de(e,t,n){e.prototype[t]=function(e,r,i){let a;if(this.type!==`mixed`&&n!==`mixed`&&n!==this.type)throw new w(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new w(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let o=``+e,s=``+r;if(r=arguments[2],i=arguments[3],a=f(this,o,s,n),!a)throw new C(`Graph.${t}: could not find an edge for the given path ("${o}" - "${s}").`)}else{if(n!==`mixed`)throw new w(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=``+e,a=this._edges.get(e),!a)throw new C(`Graph.${t}: could not find the "${e}" edge in the graph.`)}if(typeof i!=`function`)throw new S(`Graph.${t}: updater should be a function.`);return a.attributes[r]=i(a.attributes[r]),this.emit(`edgeAttributesUpdated`,{key:a.key,type:`set`,attributes:a.attributes,name:r}),this}}function fe(e,t,n){e.prototype[t]=function(e,r){let i;if(this.type!==`mixed`&&n!==`mixed`&&n!==this.type)throw new w(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new w(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let a=``+e,o=``+r;if(r=arguments[2],i=f(this,a,o,n),!i)throw new C(`Graph.${t}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(n!==`mixed`)throw new w(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=``+e,i=this._edges.get(e),!i)throw new C(`Graph.${t}: could not find the "${e}" edge in the graph.`)}return delete i.attributes[r],this.emit(`edgeAttributesUpdated`,{key:i.key,type:`remove`,attributes:i.attributes,name:r}),this}}function pe(e,t,n){e.prototype[t]=function(e,r){let i;if(this.type!==`mixed`&&n!==`mixed`&&n!==this.type)throw new w(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new w(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let a=``+e,o=``+r;if(r=arguments[2],i=f(this,a,o,n),!i)throw new C(`Graph.${t}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(n!==`mixed`)throw new w(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=``+e,i=this._edges.get(e),!i)throw new C(`Graph.${t}: could not find the "${e}" edge in the graph.`)}if(!p(r))throw new S(`Graph.${t}: provided attributes are not a plain object.`);return i.attributes=r,this.emit(`edgeAttributesUpdated`,{key:i.key,type:`replace`,attributes:i.attributes}),this}}function me(e,t,n){e.prototype[t]=function(e,r){let i;if(this.type!==`mixed`&&n!==`mixed`&&n!==this.type)throw new w(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new w(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let a=``+e,o=``+r;if(r=arguments[2],i=f(this,a,o,n),!i)throw new C(`Graph.${t}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(n!==`mixed`)throw new w(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=``+e,i=this._edges.get(e),!i)throw new C(`Graph.${t}: could not find the "${e}" edge in the graph.`)}if(!p(r))throw new S(`Graph.${t}: provided attributes are not a plain object.`);return d(i.attributes,r),this.emit(`edgeAttributesUpdated`,{key:i.key,type:`merge`,attributes:i.attributes,data:r}),this}}function he(e,t,n){e.prototype[t]=function(e,r){let i;if(this.type!==`mixed`&&n!==`mixed`&&n!==this.type)throw new w(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new w(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);let a=``+e,o=``+r;if(r=arguments[2],i=f(this,a,o,n),!i)throw new C(`Graph.${t}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(n!==`mixed`)throw new w(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(e=``+e,i=this._edges.get(e),!i)throw new C(`Graph.${t}: could not find the "${e}" edge in the graph.`)}if(typeof r!=`function`)throw new S(`Graph.${t}: provided updater is not a function.`);return i.attributes=r(i.attributes),this.emit(`edgeAttributesUpdated`,{key:i.key,type:`update`,attributes:i.attributes}),this}}var ge=[{name:e=>`get${e}Attribute`,attacher:se},{name:e=>`get${e}Attributes`,attacher:ce},{name:e=>`has${e}Attribute`,attacher:le},{name:e=>`set${e}Attribute`,attacher:ue},{name:e=>`update${e}Attribute`,attacher:de},{name:e=>`remove${e}Attribute`,attacher:fe},{name:e=>`replace${e}Attributes`,attacher:pe},{name:e=>`merge${e}Attributes`,attacher:me},{name:e=>`update${e}Attributes`,attacher:he}];function _e(e){ge.forEach(function({name:t,attacher:n}){n(e,t(`Edge`),`mixed`),n(e,t(`DirectedEdge`),`directed`),n(e,t(`UndirectedEdge`),`undirected`)})}var ve=[{name:`edges`,type:`mixed`},{name:`inEdges`,type:`directed`,direction:`in`},{name:`outEdges`,type:`directed`,direction:`out`},{name:`inboundEdges`,type:`mixed`,direction:`in`},{name:`outboundEdges`,type:`mixed`,direction:`out`},{name:`directedEdges`,type:`directed`},{name:`undirectedEdges`,type:`undirected`}];function ye(e,t,n,r){let i=!1;for(let a in t){if(a===r)continue;let o=t[a];if(i=n(o.key,o.attributes,o.source.key,o.target.key,o.source.attributes,o.target.attributes,o.undirected),e&&i)return o.key}}function be(e,t,n,r){let i,a,o,s=!1;for(let c in t)if(c!==r){i=t[c];do{if(a=i.source,o=i.target,s=n(i.key,i.attributes,a.key,o.key,a.attributes,o.attributes,i.undirected),e&&s)return i.key;i=i.next}while(i!==void 0)}}function xe(e,t){let n=Object.keys(e),r=n.length,i,a=0;return{[Symbol.iterator](){return this},next(){do if(i)i=i.next;else{if(a>=r)return{done:!0};let o=n[a++];if(o===t){i=void 0;continue}i=e[o]}while(!i);return{done:!1,value:{edge:i.key,attributes:i.attributes,source:i.source.key,target:i.target.key,sourceAttributes:i.source.attributes,targetAttributes:i.target.attributes,undirected:i.undirected}}}}}function Se(e,t,n,r){let i=t[n];if(!i)return;let a=i.source,o=i.target;if(r(i.key,i.attributes,a.key,o.key,a.attributes,o.attributes,i.undirected)&&e)return i.key}function Ce(e,t,n,r){let i=t[n];if(!i)return;let a=!1;do{if(a=r(i.key,i.attributes,i.source.key,i.target.key,i.source.attributes,i.target.attributes,i.undirected),e&&a)return i.key;i=i.next}while(i!==void 0)}function we(e,t){let n=e[t];if(n.next!==void 0)return{[Symbol.iterator](){return this},next(){if(!n)return{done:!0};let e={edge:n.key,attributes:n.attributes,source:n.source.key,target:n.target.key,sourceAttributes:n.source.attributes,targetAttributes:n.target.attributes,undirected:n.undirected};return n=n.next,{done:!1,value:e}}};let r=!1;return{[Symbol.iterator](){return this},next(){return r===!0?{done:!0}:(r=!0,{done:!1,value:{edge:n.key,attributes:n.attributes,source:n.source.key,target:n.target.key,sourceAttributes:n.source.attributes,targetAttributes:n.target.attributes,undirected:n.undirected}})}}}function Te(e,t){if(e.size===0)return[];if(t===`mixed`||t===e.type)return Array.from(e._edges.keys());let n=t===`undirected`?e.undirectedSize:e.directedSize,r=Array(n),i=t===`undirected`,a=e._edges.values(),o=0,s,c;for(;s=a.next(),s.done!==!0;)c=s.value,c.undirected===i&&(r[o++]=c.key);return r}function Ee(e,t,n,r){if(t.size===0)return;let i=n!==`mixed`&&n!==t.type,a=n===`undirected`,o,s,c=!1,l=t._edges.values();for(;o=l.next(),o.done!==!0;){if(s=o.value,i&&s.undirected!==a)continue;let{key:t,attributes:n,source:l,target:u}=s;if(c=r(t,n,l.key,u.key,l.attributes,u.attributes,s.undirected),e&&c)return t}}function De(e,t){if(e.size===0)return b();let n=t!==`mixed`&&t!==e.type,r=t===`undirected`,i=e._edges.values();return{[Symbol.iterator](){return this},next(){let e,t;for(;;){if(e=i.next(),e.done)return e;if(t=e.value,!(n&&t.undirected!==r))break}return{value:{edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected},done:!1}}}}function Oe(e,t,n,r,i,a){let o=t?be:ye,s;if(n!==`undirected`&&(r!==`out`&&(s=o(e,i.in,a),e&&s)||r!==`in`&&(s=o(e,i.out,a,r?void 0:i.key),e&&s))||n!==`directed`&&(s=o(e,i.undirected,a),e&&s))return s}function ke(e,t,n,r){let i=[];return Oe(!1,e,t,n,r,function(e){i.push(e)}),i}function Ae(e,t,n){let r=b();return e!==`undirected`&&(t!==`out`&&n.in!==void 0&&(r=y(r,xe(n.in))),t!==`in`&&n.out!==void 0&&(r=y(r,xe(n.out,t?void 0:n.key)))),e!==`directed`&&n.undirected!==void 0&&(r=y(r,xe(n.undirected))),r}function je(e,t,n,r,i,a,o){let s=n?Ce:Se,c;if(t!==`undirected`&&(i.in!==void 0&&r!==`out`&&(c=s(e,i.in,a,o),e&&c)||i.out!==void 0&&r!==`in`&&(r||i.key!==a)&&(c=s(e,i.out,a,o),e&&c))||t!==`directed`&&i.undirected!==void 0&&(c=s(e,i.undirected,a,o),e&&c))return c}function Me(e,t,n,r,i){let a=[];return je(!1,e,t,n,r,i,function(e){a.push(e)}),a}function Ne(e,t,n,r){let i=b();return e!==`undirected`&&(n.in!==void 0&&t!==`out`&&r in n.in&&(i=y(i,we(n.in,r))),n.out!==void 0&&t!==`in`&&r in n.out&&(t||n.key!==r)&&(i=y(i,we(n.out,r)))),e!==`directed`&&n.undirected!==void 0&&r in n.undirected&&(i=y(i,we(n.undirected,r))),i}function Pe(e,t){let{name:n,type:r,direction:i}=t;e.prototype[n]=function(e,t){if(r!==`mixed`&&this.type!==`mixed`&&r!==this.type)return[];if(!arguments.length)return Te(this,r);if(arguments.length===1){e=``+e;let t=this._nodes.get(e);if(t===void 0)throw new C(`Graph.${n}: could not find the "${e}" node in the graph.`);return ke(this.multi,r===`mixed`?this.type:r,i,t)}if(arguments.length===2){e=``+e,t=``+t;let a=this._nodes.get(e);if(!a)throw new C(`Graph.${n}:  could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new C(`Graph.${n}:  could not find the "${t}" target node in the graph.`);return Me(r,this.multi,i,a,t)}throw new S(`Graph.${n}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function Fe(e,t){let{name:n,type:r,direction:i}=t,a=`forEach`+n[0].toUpperCase()+n.slice(1,-1);e.prototype[a]=function(e,t,n){if(r===`mixed`||this.type===`mixed`||r===this.type){if(arguments.length===1)return n=e,Ee(!1,this,r,n);if(arguments.length===2){e=``+e,n=t;let o=this._nodes.get(e);if(o===void 0)throw new C(`Graph.${a}: could not find the "${e}" node in the graph.`);return Oe(!1,this.multi,r===`mixed`?this.type:r,i,o,n)}if(arguments.length===3){e=``+e,t=``+t;let o=this._nodes.get(e);if(!o)throw new C(`Graph.${a}:  could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new C(`Graph.${a}:  could not find the "${t}" target node in the graph.`);return je(!1,r,this.multi,i,o,t,n)}throw new S(`Graph.${a}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)}};let o=`map`+n[0].toUpperCase()+n.slice(1);e.prototype[o]=function(){let e=Array.prototype.slice.call(arguments),t=e.pop(),n;if(e.length===0){let i=0;r!==`directed`&&(i+=this.undirectedSize),r!==`undirected`&&(i+=this.directedSize),n=Array(i);let a=0;e.push((e,r,i,o,s,c,l)=>{n[a++]=t(e,r,i,o,s,c,l)})}else n=[],e.push((e,r,i,a,o,s,c)=>{n.push(t(e,r,i,a,o,s,c))});return this[a].apply(this,e),n};let s=`filter`+n[0].toUpperCase()+n.slice(1);e.prototype[s]=function(){let e=Array.prototype.slice.call(arguments),t=e.pop(),n=[];return e.push((e,r,i,a,o,s,c)=>{t(e,r,i,a,o,s,c)&&n.push(e)}),this[a].apply(this,e),n};let c=`reduce`+n[0].toUpperCase()+n.slice(1);e.prototype[c]=function(){let e=Array.prototype.slice.call(arguments);if(e.length<2||e.length>4)throw new S(`Graph.${c}: invalid number of arguments (expecting 2, 3 or 4 and got ${e.length}).`);if(typeof e[e.length-1]==`function`&&typeof e[e.length-2]!=`function`)throw new S(`Graph.${c}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let t,n;e.length===2?(t=e[0],n=e[1],e=[]):e.length===3?(t=e[1],n=e[2],e=[e[0]]):e.length===4&&(t=e[2],n=e[3],e=[e[0],e[1]]);let r=n;return e.push((e,n,i,a,o,s,c)=>{r=t(r,e,n,i,a,o,s,c)}),this[a].apply(this,e),r}}function Ie(e,t){let{name:n,type:r,direction:i}=t,a=`find`+n[0].toUpperCase()+n.slice(1,-1);e.prototype[a]=function(e,t,n){if(r!==`mixed`&&this.type!==`mixed`&&r!==this.type)return!1;if(arguments.length===1)return n=e,Ee(!0,this,r,n);if(arguments.length===2){e=``+e,n=t;let o=this._nodes.get(e);if(o===void 0)throw new C(`Graph.${a}: could not find the "${e}" node in the graph.`);return Oe(!0,this.multi,r===`mixed`?this.type:r,i,o,n)}if(arguments.length===3){e=``+e,t=``+t;let o=this._nodes.get(e);if(!o)throw new C(`Graph.${a}:  could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new C(`Graph.${a}:  could not find the "${t}" target node in the graph.`);return je(!0,r,this.multi,i,o,t,n)}throw new S(`Graph.${a}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)};let o=`some`+n[0].toUpperCase()+n.slice(1,-1);e.prototype[o]=function(){let e=Array.prototype.slice.call(arguments),t=e.pop();return e.push((e,n,r,i,a,o,s)=>t(e,n,r,i,a,o,s)),!!this[a].apply(this,e)};let s=`every`+n[0].toUpperCase()+n.slice(1,-1);e.prototype[s]=function(){let e=Array.prototype.slice.call(arguments),t=e.pop();return e.push((e,n,r,i,a,o,s)=>!t(e,n,r,i,a,o,s)),!this[a].apply(this,e)}}function Le(e,t){let{name:n,type:r,direction:i}=t,a=n.slice(0,-1)+`Entries`;e.prototype[a]=function(e,t){if(r!==`mixed`&&this.type!==`mixed`&&r!==this.type)return b();if(!arguments.length)return De(this,r);if(arguments.length===1){e=``+e;let t=this._nodes.get(e);if(!t)throw new C(`Graph.${a}: could not find the "${e}" node in the graph.`);return Ae(r,i,t)}if(arguments.length===2){e=``+e,t=``+t;let n=this._nodes.get(e);if(!n)throw new C(`Graph.${a}:  could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new C(`Graph.${a}:  could not find the "${t}" target node in the graph.`);return Ne(r,i,n,t)}throw new S(`Graph.${a}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function Re(e){ve.forEach(t=>{Pe(e,t),Fe(e,t),Ie(e,t),Le(e,t)})}var ze=[{name:`neighbors`,type:`mixed`},{name:`inNeighbors`,type:`directed`,direction:`in`},{name:`outNeighbors`,type:`directed`,direction:`out`},{name:`inboundNeighbors`,type:`mixed`,direction:`in`},{name:`outboundNeighbors`,type:`mixed`,direction:`out`},{name:`directedNeighbors`,type:`directed`},{name:`undirectedNeighbors`,type:`undirected`}];function Be(){this.A=null,this.B=null}Be.prototype.wrap=function(e){this.A===null?this.A=e:this.B===null&&(this.B=e)},Be.prototype.has=function(e){return this.A!==null&&e in this.A||this.B!==null&&e in this.B};function Ve(e,t,n,r,i){for(let a in r){let o=r[a],s=o.source,c=o.target,l=s===n?c:s;if(t&&t.has(l.key))continue;let u=i(l.key,l.attributes);if(e&&u)return l.key}}function He(e,t,n,r,i){if(t!==`mixed`){if(t===`undirected`)return Ve(e,null,r,r.undirected,i);if(typeof n==`string`)return Ve(e,null,r,r[n],i)}let a=new Be,o;if(t!==`undirected`){if(n!==`out`){if(o=Ve(e,null,r,r.in,i),e&&o)return o;a.wrap(r.in)}if(n!==`in`){if(o=Ve(e,a,r,r.out,i),e&&o)return o;a.wrap(r.out)}}if(t!==`directed`&&(o=Ve(e,a,r,r.undirected,i),e&&o))return o}function Ue(e,t,n){if(e!==`mixed`){if(e===`undirected`)return Object.keys(n.undirected);if(typeof t==`string`)return Object.keys(n[t])}let r=[];return He(!1,e,t,n,function(e){r.push(e)}),r}function We(e,t,n){let r=Object.keys(n),i=r.length,a=0;return{[Symbol.iterator](){return this},next(){let o=null;do{if(a>=i)return e&&e.wrap(n),{done:!0};let s=n[r[a++]],c=s.source,l=s.target;o=c===t?l:c,e&&e.has(o.key)&&(o=null)}while(o===null);return{done:!1,value:{neighbor:o.key,attributes:o.attributes}}}}}function Ge(e,t,n){if(e!==`mixed`){if(e===`undirected`)return We(null,n,n.undirected);if(typeof t==`string`)return We(null,n,n[t])}let r=b(),i=new Be;return e!==`undirected`&&(t!==`out`&&(r=y(r,We(i,n,n.in))),t!==`in`&&(r=y(r,We(i,n,n.out)))),e!==`directed`&&(r=y(r,We(i,n,n.undirected))),r}function Ke(e,t){let{name:n,type:r,direction:i}=t;e.prototype[n]=function(e){if(r!==`mixed`&&this.type!==`mixed`&&r!==this.type)return[];e=``+e;let t=this._nodes.get(e);if(t===void 0)throw new C(`Graph.${n}: could not find the "${e}" node in the graph.`);return Ue(r===`mixed`?this.type:r,i,t)}}function qe(e,t){let{name:n,type:r,direction:i}=t,a=`forEach`+n[0].toUpperCase()+n.slice(1,-1);e.prototype[a]=function(e,t){if(r!==`mixed`&&this.type!==`mixed`&&r!==this.type)return;e=``+e;let n=this._nodes.get(e);if(n===void 0)throw new C(`Graph.${a}: could not find the "${e}" node in the graph.`);He(!1,r===`mixed`?this.type:r,i,n,t)};let o=`map`+n[0].toUpperCase()+n.slice(1);e.prototype[o]=function(e,t){let n=[];return this[a](e,(e,r)=>{n.push(t(e,r))}),n};let s=`filter`+n[0].toUpperCase()+n.slice(1);e.prototype[s]=function(e,t){let n=[];return this[a](e,(e,r)=>{t(e,r)&&n.push(e)}),n};let c=`reduce`+n[0].toUpperCase()+n.slice(1);e.prototype[c]=function(e,t,n){if(arguments.length<3)throw new S(`Graph.${c}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let r=n;return this[a](e,(e,n)=>{r=t(r,e,n)}),r}}function Je(e,t){let{name:n,type:r,direction:i}=t,a=n[0].toUpperCase()+n.slice(1,-1),o=`find`+a;e.prototype[o]=function(e,t){if(r!==`mixed`&&this.type!==`mixed`&&r!==this.type)return;e=``+e;let n=this._nodes.get(e);if(n===void 0)throw new C(`Graph.${o}: could not find the "${e}" node in the graph.`);return He(!0,r===`mixed`?this.type:r,i,n,t)};let s=`some`+a;e.prototype[s]=function(e,t){return!!this[o](e,t)};let c=`every`+a;e.prototype[c]=function(e,t){return!this[o](e,(e,n)=>!t(e,n))}}function Ye(e,t){let{name:n,type:r,direction:i}=t,a=n.slice(0,-1)+`Entries`;e.prototype[a]=function(e){if(r!==`mixed`&&this.type!==`mixed`&&r!==this.type)return b();e=``+e;let t=this._nodes.get(e);if(t===void 0)throw new C(`Graph.${a}: could not find the "${e}" node in the graph.`);return Ge(r===`mixed`?this.type:r,i,t)}}function Xe(e){ze.forEach(t=>{Ke(e,t),qe(e,t),Je(e,t),Ye(e,t)})}function Ze(e,t,n,r,i){let a=r._nodes.values(),o=r.type,s,c,l,u,d,f,p;for(;s=a.next(),s.done!==!0;){let r=!1;if(c=s.value,o!==`undirected`)for(l in u=c.out,u){d=u[l];do{if(f=d.target,r=!0,p=i(c.key,f.key,c.attributes,f.attributes,d.key,d.attributes,d.undirected),e&&p)return d;d=d.next}while(d)}if(o!==`directed`){for(l in u=c.undirected,u)if(!(t&&c.key>l)){d=u[l];do{if(f=d.target,f.key!==l&&(f=d.source),r=!0,p=i(c.key,f.key,c.attributes,f.attributes,d.key,d.attributes,d.undirected),e&&p)return d;d=d.next}while(d)}}if(n&&!r&&(p=i(c.key,null,c.attributes,null,null,null,null),e&&p))return null}}function Qe(e,t){let n={key:e};return m(t.attributes)||(n.attributes=d({},t.attributes)),n}function $e(e,t,n){let r={key:t,source:n.source.key,target:n.target.key};return m(n.attributes)||(r.attributes=d({},n.attributes)),e===`mixed`&&n.undirected&&(r.undirected=!0),r}function et(e){if(!p(e))throw new S(`Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.`);if(!(`key`in e))throw new S(`Graph.import: serialized node is missing its key.`);if(`attributes`in e&&(!p(e.attributes)||e.attributes===null))throw new S(`Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.`)}function tt(e){if(!p(e))throw new S(`Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.`);if(!(`source`in e))throw new S(`Graph.import: serialized edge is missing its source.`);if(!(`target`in e))throw new S(`Graph.import: serialized edge is missing its target.`);if(`attributes`in e&&(!p(e.attributes)||e.attributes===null))throw new S(`Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.`);if(`undirected`in e&&typeof e.undirected!=`boolean`)throw new S(`Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.`)}var nt=v(),rt=new Set([`directed`,`undirected`,`mixed`]),it=new Set([`domain`,`_events`,`_eventsCount`,`_maxListeners`]),at=[{name:e=>`${e}Edge`,generateKey:!0},{name:e=>`${e}DirectedEdge`,generateKey:!0,type:`directed`},{name:e=>`${e}UndirectedEdge`,generateKey:!0,type:`undirected`},{name:e=>`${e}EdgeWithKey`},{name:e=>`${e}DirectedEdgeWithKey`,type:`directed`},{name:e=>`${e}UndirectedEdgeWithKey`,type:`undirected`}],ot={allowSelfLoops:!0,multi:!1,type:`mixed`};function st(e,t,n){if(n&&!p(n))throw new S(`Graph.addNode: invalid attributes. Expecting an object but got "${n}"`);if(t=``+t,n||={},e._nodes.has(t))throw new w(`Graph.addNode: the "${t}" node already exist in the graph.`);let r=new e.NodeDataClass(t,n);return e._nodes.set(t,r),e.emit(`nodeAdded`,{key:t,attributes:n}),r}function ct(e,t,n){let r=new e.NodeDataClass(t,n);return e._nodes.set(t,r),e.emit(`nodeAdded`,{key:t,attributes:n}),r}function lt(e,t,n,r,i,a,o,s){if(!r&&e.type===`undirected`)throw new w(`Graph.${t}: you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.`);if(r&&e.type===`directed`)throw new w(`Graph.${t}: you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.`);if(s&&!p(s))throw new S(`Graph.${t}: invalid attributes. Expecting an object but got "${s}"`);if(a=``+a,o=``+o,s||={},!e.allowSelfLoops&&a===o)throw new w(`Graph.${t}: source & target are the same ("${a}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let c=e._nodes.get(a),l=e._nodes.get(o);if(!c)throw new C(`Graph.${t}: source node "${a}" not found.`);if(!l)throw new C(`Graph.${t}: target node "${o}" not found.`);let u={key:null,undirected:r,source:a,target:o,attributes:s};if(n)i=e._edgeKeyGenerator();else if(i=``+i,e._edges.has(i))throw new w(`Graph.${t}: the "${i}" edge already exists in the graph.`);if(!e.multi&&(r?c.undirected[o]!==void 0:c.out[o]!==void 0))throw new w(`Graph.${t}: an edge linking "${a}" to "${o}" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`);let d=new O(r,i,c,l,s);e._edges.set(i,d);let f=a===o;return r?(c.undirectedDegree++,l.undirectedDegree++,f&&(c.undirectedLoops++,e._undirectedSelfLoopCount++)):(c.outDegree++,l.inDegree++,f&&(c.directedLoops++,e._directedSelfLoopCount++)),e.multi?d.attachMulti():d.attach(),r?e._undirectedSize++:e._directedSize++,u.key=i,e.emit(`edgeAdded`,u),i}function ut(e,t,n,r,i,a,o,s,c){if(!r&&e.type===`undirected`)throw new w(`Graph.${t}: you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.`);if(r&&e.type===`directed`)throw new w(`Graph.${t}: you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.`);if(s){if(c){if(typeof s!=`function`)throw new S(`Graph.${t}: invalid updater function. Expecting a function but got "${s}"`)}else if(!p(s))throw new S(`Graph.${t}: invalid attributes. Expecting an object but got "${s}"`)}a=``+a,o=``+o;let l;if(c&&(l=s,s=void 0),!e.allowSelfLoops&&a===o)throw new w(`Graph.${t}: source & target are the same ("${a}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let u=e._nodes.get(a),f=e._nodes.get(o),m,h;if(!n&&(m=e._edges.get(i),m)){if((m.source.key!==a||m.target.key!==o)&&(!r||m.source.key!==o||m.target.key!==a))throw new w(`Graph.${t}: inconsistency detected when attempting to merge the "${i}" edge with "${a}" source & "${o}" target vs. ("${m.source.key}", "${m.target.key}").`);h=m}if(!h&&!e.multi&&u&&(h=r?u.undirected[o]:u.out[o]),h){let t=[h.key,!1,!1,!1];if(c?!l:!s)return t;if(c){let t=h.attributes;h.attributes=l(t),e.emit(`edgeAttributesUpdated`,{type:`replace`,key:h.key,attributes:h.attributes})}else d(h.attributes,s),e.emit(`edgeAttributesUpdated`,{type:`merge`,key:h.key,attributes:h.attributes,data:s});return t}s||={},c&&l&&(s=l(s));let g={key:null,undirected:r,source:a,target:o,attributes:s};if(n)i=e._edgeKeyGenerator();else if(i=``+i,e._edges.has(i))throw new w(`Graph.${t}: the "${i}" edge already exists in the graph.`);let _=!1,v=!1;u||(u=ct(e,a,{}),_=!0,a===o&&(f=u,v=!0)),f||(f=ct(e,o,{}),v=!0),m=new O(r,i,u,f,s),e._edges.set(i,m);let y=a===o;return r?(u.undirectedDegree++,f.undirectedDegree++,y&&(u.undirectedLoops++,e._undirectedSelfLoopCount++)):(u.outDegree++,f.inDegree++,y&&(u.directedLoops++,e._directedSelfLoopCount++)),e.multi?m.attachMulti():m.attach(),r?e._undirectedSize++:e._directedSize++,g.key=i,e.emit(`edgeAdded`,g),[i,!0,_,v]}function dt(e,t){e._edges.delete(t.key);let{source:n,target:r,attributes:i}=t,a=t.undirected,o=n===r;a?(n.undirectedDegree--,r.undirectedDegree--,o&&(n.undirectedLoops--,e._undirectedSelfLoopCount--)):(n.outDegree--,r.inDegree--,o&&(n.directedLoops--,e._directedSelfLoopCount--)),e.multi?t.detachMulti():t.detach(),a?e._undirectedSize--:e._directedSize--,e.emit(`edgeDropped`,{key:t.key,attributes:i,source:n.key,target:r.key,undirected:a})}var R=class e extends l.EventEmitter{constructor(e){if(super(),e=d({},ot,e),typeof e.multi!=`boolean`)throw new S(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "${e.multi}".`);if(!rt.has(e.type))throw new S(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "${e.type}".`);if(typeof e.allowSelfLoops!=`boolean`)throw new S(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "${e.allowSelfLoops}".`);let t=e.type===`mixed`?T:e.type===`directed`?E:D;h(this,`NodeDataClass`,t);let n=`geid_`+nt()+`_`,r=0;h(this,`_attributes`,{}),h(this,`_nodes`,new Map),h(this,`_edges`,new Map),h(this,`_directedSize`,0),h(this,`_undirectedSize`,0),h(this,`_directedSelfLoopCount`,0),h(this,`_undirectedSelfLoopCount`,0),h(this,`_edgeKeyGenerator`,()=>{let e;do e=n+r++;while(this._edges.has(e));return e}),h(this,`_options`,e),it.forEach(e=>h(this,e,this[e])),g(this,`order`,()=>this._nodes.size),g(this,`size`,()=>this._edges.size),g(this,`directedSize`,()=>this._directedSize),g(this,`undirectedSize`,()=>this._undirectedSize),g(this,`selfLoopCount`,()=>this._directedSelfLoopCount+this._undirectedSelfLoopCount),g(this,`directedSelfLoopCount`,()=>this._directedSelfLoopCount),g(this,`undirectedSelfLoopCount`,()=>this._undirectedSelfLoopCount),g(this,`multi`,this._options.multi),g(this,`type`,this._options.type),g(this,`allowSelfLoops`,this._options.allowSelfLoops),g(this,`implementation`,()=>`graphology`)}_resetInstanceCounters(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0}hasNode(e){return this._nodes.has(``+e)}hasDirectedEdge(e,t){if(this.type===`undirected`)return!1;if(arguments.length===1){let t=``+e,n=this._edges.get(t);return!!n&&!n.undirected}if(arguments.length===2){e=``+e,t=``+t;let n=this._nodes.get(e);return n?n.out.hasOwnProperty(t):!1}throw new S(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasUndirectedEdge(e,t){if(this.type===`directed`)return!1;if(arguments.length===1){let t=``+e,n=this._edges.get(t);return!!n&&n.undirected}if(arguments.length===2){e=``+e,t=``+t;let n=this._nodes.get(e);return n?n.undirected.hasOwnProperty(t):!1}throw new S(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasEdge(e,t){if(arguments.length===1){let t=``+e;return this._edges.has(t)}if(arguments.length===2){e=``+e,t=``+t;let n=this._nodes.get(e);return n?n.out!==void 0&&n.out.hasOwnProperty(t)||n.undirected!==void 0&&n.undirected.hasOwnProperty(t):!1}throw new S(`Graph.hasEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}directedEdge(e,t){if(this.type===`undirected`)return;if(e=``+e,t=``+t,this.multi)throw new w(`Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.`);let n=this._nodes.get(e);if(!n)throw new C(`Graph.directedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new C(`Graph.directedEdge: could not find the "${t}" target node in the graph.`);let r=n.out&&n.out[t]||void 0;if(r)return r.key}undirectedEdge(e,t){if(this.type===`directed`)return;if(e=``+e,t=``+t,this.multi)throw new w(`Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.`);let n=this._nodes.get(e);if(!n)throw new C(`Graph.undirectedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new C(`Graph.undirectedEdge: could not find the "${t}" target node in the graph.`);let r=n.undirected&&n.undirected[t]||void 0;if(r)return r.key}edge(e,t){if(this.multi)throw new w(`Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.`);e=``+e,t=``+t;let n=this._nodes.get(e);if(!n)throw new C(`Graph.edge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new C(`Graph.edge: could not find the "${t}" target node in the graph.`);let r=n.out&&n.out[t]||n.undirected&&n.undirected[t]||void 0;if(r)return r.key}areDirectedNeighbors(e,t){e=``+e,t=``+t;let n=this._nodes.get(e);if(!n)throw new C(`Graph.areDirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type===`undirected`?!1:t in n.in||t in n.out}areOutNeighbors(e,t){e=``+e,t=``+t;let n=this._nodes.get(e);if(!n)throw new C(`Graph.areOutNeighbors: could not find the "${e}" node in the graph.`);return this.type!==`undirected`&&t in n.out}areInNeighbors(e,t){e=``+e,t=``+t;let n=this._nodes.get(e);if(!n)throw new C(`Graph.areInNeighbors: could not find the "${e}" node in the graph.`);return this.type!==`undirected`&&t in n.in}areUndirectedNeighbors(e,t){e=``+e,t=``+t;let n=this._nodes.get(e);if(!n)throw new C(`Graph.areUndirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type!==`directed`&&t in n.undirected}areNeighbors(e,t){e=``+e,t=``+t;let n=this._nodes.get(e);if(!n)throw new C(`Graph.areNeighbors: could not find the "${e}" node in the graph.`);return this.type!==`undirected`&&(t in n.in||t in n.out)||this.type!==`directed`&&t in n.undirected}areInboundNeighbors(e,t){e=``+e,t=``+t;let n=this._nodes.get(e);if(!n)throw new C(`Graph.areInboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!==`undirected`&&t in n.in||this.type!==`directed`&&t in n.undirected}areOutboundNeighbors(e,t){e=``+e,t=``+t;let n=this._nodes.get(e);if(!n)throw new C(`Graph.areOutboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!==`undirected`&&t in n.out||this.type!==`directed`&&t in n.undirected}inDegree(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new C(`Graph.inDegree: could not find the "${e}" node in the graph.`);return this.type===`undirected`?0:t.inDegree}outDegree(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new C(`Graph.outDegree: could not find the "${e}" node in the graph.`);return this.type===`undirected`?0:t.outDegree}directedDegree(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new C(`Graph.directedDegree: could not find the "${e}" node in the graph.`);return this.type===`undirected`?0:t.inDegree+t.outDegree}undirectedDegree(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new C(`Graph.undirectedDegree: could not find the "${e}" node in the graph.`);return this.type===`directed`?0:t.undirectedDegree}inboundDegree(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new C(`Graph.inboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!==`directed`&&(n+=t.undirectedDegree),this.type!==`undirected`&&(n+=t.inDegree),n}outboundDegree(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new C(`Graph.outboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!==`directed`&&(n+=t.undirectedDegree),this.type!==`undirected`&&(n+=t.outDegree),n}degree(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new C(`Graph.degree: could not find the "${e}" node in the graph.`);let n=0;return this.type!==`directed`&&(n+=t.undirectedDegree),this.type!==`undirected`&&(n+=t.inDegree+t.outDegree),n}inDegreeWithoutSelfLoops(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new C(`Graph.inDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type===`undirected`?0:t.inDegree-t.directedLoops}outDegreeWithoutSelfLoops(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new C(`Graph.outDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type===`undirected`?0:t.outDegree-t.directedLoops}directedDegreeWithoutSelfLoops(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new C(`Graph.directedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type===`undirected`?0:t.inDegree+t.outDegree-t.directedLoops*2}undirectedDegreeWithoutSelfLoops(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new C(`Graph.undirectedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);return this.type===`directed`?0:t.undirectedDegree-t.undirectedLoops*2}inboundDegreeWithoutSelfLoops(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new C(`Graph.inboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,r=0;return this.type!==`directed`&&(n+=t.undirectedDegree,r+=t.undirectedLoops*2),this.type!==`undirected`&&(n+=t.inDegree,r+=t.directedLoops),n-r}outboundDegreeWithoutSelfLoops(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new C(`Graph.outboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,r=0;return this.type!==`directed`&&(n+=t.undirectedDegree,r+=t.undirectedLoops*2),this.type!==`undirected`&&(n+=t.outDegree,r+=t.directedLoops),n-r}degreeWithoutSelfLoops(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new C(`Graph.degreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n=0,r=0;return this.type!==`directed`&&(n+=t.undirectedDegree,r+=t.undirectedLoops*2),this.type!==`undirected`&&(n+=t.inDegree+t.outDegree,r+=t.directedLoops*2),n-r}source(e){e=``+e;let t=this._edges.get(e);if(!t)throw new C(`Graph.source: could not find the "${e}" edge in the graph.`);return t.source.key}target(e){e=``+e;let t=this._edges.get(e);if(!t)throw new C(`Graph.target: could not find the "${e}" edge in the graph.`);return t.target.key}extremities(e){e=``+e;let t=this._edges.get(e);if(!t)throw new C(`Graph.extremities: could not find the "${e}" edge in the graph.`);return[t.source.key,t.target.key]}opposite(e,t){e=``+e,t=``+t;let n=this._edges.get(t);if(!n)throw new C(`Graph.opposite: could not find the "${t}" edge in the graph.`);let r=n.source.key,i=n.target.key;if(e===r)return i;if(e===i)return r;throw new C(`Graph.opposite: the "${e}" node is not attached to the "${t}" edge (${r}, ${i}).`)}hasExtremity(e,t){e=``+e,t=``+t;let n=this._edges.get(e);if(!n)throw new C(`Graph.hasExtremity: could not find the "${e}" edge in the graph.`);return n.source.key===t||n.target.key===t}isUndirected(e){e=``+e;let t=this._edges.get(e);if(!t)throw new C(`Graph.isUndirected: could not find the "${e}" edge in the graph.`);return t.undirected}isDirected(e){e=``+e;let t=this._edges.get(e);if(!t)throw new C(`Graph.isDirected: could not find the "${e}" edge in the graph.`);return!t.undirected}isSelfLoop(e){e=``+e;let t=this._edges.get(e);if(!t)throw new C(`Graph.isSelfLoop: could not find the "${e}" edge in the graph.`);return t.source===t.target}addNode(e,t){return st(this,e,t).key}mergeNode(e,t){if(t&&!p(t))throw new S(`Graph.mergeNode: invalid attributes. Expecting an object but got "${t}"`);e=``+e,t||={};let n=this._nodes.get(e);return n?(t&&(d(n.attributes,t),this.emit(`nodeAttributesUpdated`,{type:`merge`,key:e,attributes:n.attributes,data:t})),[e,!1]):(n=new this.NodeDataClass(e,t),this._nodes.set(e,n),this.emit(`nodeAdded`,{key:e,attributes:t}),[e,!0])}updateNode(e,t){if(t&&typeof t!=`function`)throw new S(`Graph.updateNode: invalid updater function. Expecting a function but got "${t}"`);e=``+e;let n=this._nodes.get(e);if(n){if(t){let r=n.attributes;n.attributes=t(r),this.emit(`nodeAttributesUpdated`,{type:`replace`,key:e,attributes:n.attributes})}return[e,!1]}let r=t?t({}):{};return n=new this.NodeDataClass(e,r),this._nodes.set(e,n),this.emit(`nodeAdded`,{key:e,attributes:r}),[e,!0]}dropNode(e){e=``+e;let t=this._nodes.get(e);if(!t)throw new C(`Graph.dropNode: could not find the "${e}" node in the graph.`);let n;if(this.type!==`undirected`){for(let e in t.out){n=t.out[e];do dt(this,n),n=n.next;while(n)}for(let e in t.in){n=t.in[e];do dt(this,n),n=n.next;while(n)}}if(this.type!==`directed`)for(let e in t.undirected){n=t.undirected[e];do dt(this,n),n=n.next;while(n)}this._nodes.delete(e),this.emit(`nodeDropped`,{key:e,attributes:t.attributes})}dropEdge(e){let t;if(arguments.length>1){let e=``+arguments[0],n=``+arguments[1];if(t=f(this,e,n,this.type),!t)throw new C(`Graph.dropEdge: could not find the "${e}" -> "${n}" edge in the graph.`)}else if(e=``+e,t=this._edges.get(e),!t)throw new C(`Graph.dropEdge: could not find the "${e}" edge in the graph.`);return dt(this,t),this}dropDirectedEdge(e,t){if(arguments.length<2)throw new w(`Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.`);if(this.multi)throw new w(`Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.`);e=``+e,t=``+t;let n=f(this,e,t,`directed`);if(!n)throw new C(`Graph.dropDirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return dt(this,n),this}dropUndirectedEdge(e,t){if(arguments.length<2)throw new w(`Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.`);if(this.multi)throw new w(`Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.`);let n=f(this,e,t,`undirected`);if(!n)throw new C(`Graph.dropUndirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return dt(this,n),this}clear(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit(`cleared`)}clearEdges(){let e=this._nodes.values(),t;for(;t=e.next(),t.done!==!0;)t.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit(`edgesCleared`)}getAttribute(e){return this._attributes[e]}getAttributes(){return this._attributes}hasAttribute(e){return this._attributes.hasOwnProperty(e)}setAttribute(e,t){return this._attributes[e]=t,this.emit(`attributesUpdated`,{type:`set`,attributes:this._attributes,name:e}),this}updateAttribute(e,t){if(typeof t!=`function`)throw new S(`Graph.updateAttribute: updater should be a function.`);let n=this._attributes[e];return this._attributes[e]=t(n),this.emit(`attributesUpdated`,{type:`set`,attributes:this._attributes,name:e}),this}removeAttribute(e){return delete this._attributes[e],this.emit(`attributesUpdated`,{type:`remove`,attributes:this._attributes,name:e}),this}replaceAttributes(e){if(!p(e))throw new S(`Graph.replaceAttributes: provided attributes are not a plain object.`);return this._attributes=e,this.emit(`attributesUpdated`,{type:`replace`,attributes:this._attributes}),this}mergeAttributes(e){if(!p(e))throw new S(`Graph.mergeAttributes: provided attributes are not a plain object.`);return d(this._attributes,e),this.emit(`attributesUpdated`,{type:`merge`,attributes:this._attributes,data:e}),this}updateAttributes(e){if(typeof e!=`function`)throw new S(`Graph.updateAttributes: provided updater is not a function.`);return this._attributes=e(this._attributes),this.emit(`attributesUpdated`,{type:`update`,attributes:this._attributes}),this}updateEachNodeAttributes(e,t){if(typeof e!=`function`)throw new S(`Graph.updateEachNodeAttributes: expecting an updater function.`);if(t&&!_(t))throw new S(`Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}`);let n=this._nodes.values(),r,i;for(;r=n.next(),r.done!==!0;)i=r.value,i.attributes=e(i.key,i.attributes);this.emit(`eachNodeAttributesUpdated`,{hints:t||null})}updateEachEdgeAttributes(e,t){if(typeof e!=`function`)throw new S(`Graph.updateEachEdgeAttributes: expecting an updater function.`);if(t&&!_(t))throw new S(`Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}`);let n=this._edges.values(),r,i,a,o;for(;r=n.next(),r.done!==!0;)i=r.value,a=i.source,o=i.target,i.attributes=e(i.key,i.attributes,a.key,o.key,a.attributes,o.attributes,i.undirected);this.emit(`eachEdgeAttributesUpdated`,{hints:t||null})}forEachAdjacencyEntry(e){if(typeof e!=`function`)throw new S(`Graph.forEachAdjacencyEntry: expecting a callback.`);Ze(!1,!1,!1,this,e)}forEachAdjacencyEntryWithOrphans(e){if(typeof e!=`function`)throw new S(`Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.`);Ze(!1,!1,!0,this,e)}forEachAssymetricAdjacencyEntry(e){if(typeof e!=`function`)throw new S(`Graph.forEachAssymetricAdjacencyEntry: expecting a callback.`);Ze(!1,!0,!1,this,e)}forEachAssymetricAdjacencyEntryWithOrphans(e){if(typeof e!=`function`)throw new S(`Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.`);Ze(!1,!0,!0,this,e)}nodes(){return Array.from(this._nodes.keys())}forEachNode(e){if(typeof e!=`function`)throw new S(`Graph.forEachNode: expecting a callback.`);let t=this._nodes.values(),n,r;for(;n=t.next(),n.done!==!0;)r=n.value,e(r.key,r.attributes)}findNode(e){if(typeof e!=`function`)throw new S(`Graph.findNode: expecting a callback.`);let t=this._nodes.values(),n,r;for(;n=t.next(),n.done!==!0;)if(r=n.value,e(r.key,r.attributes))return r.key}mapNodes(e){if(typeof e!=`function`)throw new S(`Graph.mapNode: expecting a callback.`);let t=this._nodes.values(),n,r,i=Array(this.order),a=0;for(;n=t.next(),n.done!==!0;)r=n.value,i[a++]=e(r.key,r.attributes);return i}someNode(e){if(typeof e!=`function`)throw new S(`Graph.someNode: expecting a callback.`);let t=this._nodes.values(),n,r;for(;n=t.next(),n.done!==!0;)if(r=n.value,e(r.key,r.attributes))return!0;return!1}everyNode(e){if(typeof e!=`function`)throw new S(`Graph.everyNode: expecting a callback.`);let t=this._nodes.values(),n,r;for(;n=t.next(),n.done!==!0;)if(r=n.value,!e(r.key,r.attributes))return!1;return!0}filterNodes(e){if(typeof e!=`function`)throw new S(`Graph.filterNodes: expecting a callback.`);let t=this._nodes.values(),n,r,i=[];for(;n=t.next(),n.done!==!0;)r=n.value,e(r.key,r.attributes)&&i.push(r.key);return i}reduceNodes(e,t){if(typeof e!=`function`)throw new S(`Graph.reduceNodes: expecting a callback.`);if(arguments.length<2)throw new S(`Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let n=t,r=this._nodes.values(),i,a;for(;i=r.next(),i.done!==!0;)a=i.value,n=e(n,a.key,a.attributes);return n}nodeEntries(){let e=this._nodes.values();return{[Symbol.iterator](){return this},next(){let t=e.next();if(t.done)return t;let n=t.value;return{value:{node:n.key,attributes:n.attributes},done:!1}}}}export(){let e=Array(this._nodes.size),t=0;this._nodes.forEach((n,r)=>{e[t++]=Qe(r,n)});let n=Array(this._edges.size);return t=0,this._edges.forEach((e,r)=>{n[t++]=$e(this.type,r,e)}),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:e,edges:n}}import(t,n=!1){if(t instanceof e)return t.forEachNode((e,t)=>{n?this.mergeNode(e,t):this.addNode(e,t)}),t.forEachEdge((e,t,r,i,a,o,s)=>{n?s?this.mergeUndirectedEdgeWithKey(e,r,i,t):this.mergeDirectedEdgeWithKey(e,r,i,t):s?this.addUndirectedEdgeWithKey(e,r,i,t):this.addDirectedEdgeWithKey(e,r,i,t)}),this;if(!p(t))throw new S(`Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.`);if(t.attributes){if(!p(t.attributes))throw new S(`Graph.import: invalid attributes. Expecting a plain object.`);n?this.mergeAttributes(t.attributes):this.replaceAttributes(t.attributes)}let r,i,a,o,s;if(t.nodes){if(a=t.nodes,!Array.isArray(a))throw new S(`Graph.import: invalid nodes. Expecting an array.`);for(r=0,i=a.length;r<i;r++){o=a[r],et(o);let{key:e,attributes:t}=o;n?this.mergeNode(e,t):this.addNode(e,t)}}if(t.edges){let e=!1;if(this.type===`undirected`&&(e=!0),a=t.edges,!Array.isArray(a))throw new S(`Graph.import: invalid edges. Expecting an array.`);for(r=0,i=a.length;r<i;r++){s=a[r],tt(s);let{source:t,target:i,attributes:o,undirected:c=e}=s,l;`key`in s?(l=n?c?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:c?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey,l.call(this,s.key,t,i,o)):(l=n?c?this.mergeUndirectedEdge:this.mergeDirectedEdge:c?this.addUndirectedEdge:this.addDirectedEdge,l.call(this,t,i,o))}}return this}nullCopy(t){let n=new e(d({},this._options,t));return n.replaceAttributes(d({},this.getAttributes())),n}emptyCopy(e){let t=this.nullCopy(e);return this._nodes.forEach((e,n)=>{let r=d({},e.attributes);e=new t.NodeDataClass(n,r),t._nodes.set(n,e)}),t}copy(e){if(e||={},typeof e.type==`string`&&e.type!==this.type&&e.type!==`mixed`)throw new w(`Graph.copy: cannot create an incompatible copy from "${this.type}" type to "${e.type}" because this would mean losing information about the current graph.`);if(typeof e.multi==`boolean`&&e.multi!==this.multi&&e.multi!==!0)throw new w(`Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.`);if(typeof e.allowSelfLoops==`boolean`&&e.allowSelfLoops!==this.allowSelfLoops&&e.allowSelfLoops!==!0)throw new w(`Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.`);let t=this.emptyCopy(e),n=this._edges.values(),r,i;for(;r=n.next(),r.done!==!0;)i=r.value,lt(t,`copy`,!1,i.undirected,i.key,i.source.key,i.target.key,d({},i.attributes));return t}toJSON(){return this.export()}toString(){return`[object Graph]`}inspect(){let e={};this._nodes.forEach((t,n)=>{e[n]=t.attributes});let t={},n={};this._edges.forEach((e,r)=>{let i=e.undirected?`--`:`->`,a=``,o=e.source.key,s=e.target.key,c;e.undirected&&o>s&&(c=o,o=s,s=c);let l=`(${o})${i}(${s})`;r.startsWith(`geid_`)?this.multi&&(n[l]===void 0?n[l]=0:n[l]++,a+=`${n[l]}. `):a+=`[${r}]: `,a+=l,t[a]=e.attributes});let r={};for(let e in this)this.hasOwnProperty(e)&&!it.has(e)&&typeof this[e]!=`function`&&typeof e!=`symbol`&&(r[e]=this[e]);return r.attributes=this._attributes,r.nodes=e,r.edges=t,h(r,`constructor`,this.constructor),r}};typeof Symbol<`u`&&(R.prototype[Symbol.for(`nodejs.util.inspect.custom`)]=R.prototype.inspect),at.forEach(e=>{[`add`,`merge`,`update`].forEach(t=>{let n=e.name(t),r=t===`add`?lt:ut;e.generateKey?R.prototype[n]=function(i,a,o){return r(this,n,!0,(e.type||this.type)===`undirected`,null,i,a,o,t===`update`)}:R.prototype[n]=function(i,a,o,s){return r(this,n,!1,(e.type||this.type)===`undirected`,i,a,o,s,t===`update`)}})}),oe(R),_e(R),Re(R),Xe(R);var ft=class extends R{constructor(e){let t=d({type:`directed`},e);if(`multi`in t&&t.multi!==!1)throw new S(`DirectedGraph.from: inconsistent indication that the graph should be multi in given options!`);if(t.type!==`directed`)throw new S(`DirectedGraph.from: inconsistent "`+t.type+`" type in given options!`);super(t)}},pt=class extends R{constructor(e){let t=d({type:`undirected`},e);if(`multi`in t&&t.multi!==!1)throw new S(`UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!`);if(t.type!==`undirected`)throw new S(`UndirectedGraph.from: inconsistent "`+t.type+`" type in given options!`);super(t)}},mt=class extends R{constructor(e){let t=d({multi:!0},e);if(`multi`in t&&t.multi!==!0)throw new S(`MultiGraph.from: inconsistent indication that the graph should be simple in given options!`);super(t)}},ht=class extends R{constructor(e){let t=d({type:`directed`,multi:!0},e);if(`multi`in t&&t.multi!==!0)throw new S(`MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!`);if(t.type!==`directed`)throw new S(`MultiDirectedGraph.from: inconsistent "`+t.type+`" type in given options!`);super(t)}},gt=class extends R{constructor(e){let t=d({type:`undirected`,multi:!0},e);if(`multi`in t&&t.multi!==!0)throw new S(`MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!`);if(t.type!==`undirected`)throw new S(`MultiUndirectedGraph.from: inconsistent "`+t.type+`" type in given options!`);super(t)}};function _t(e){e.from=function(t,n){let r=new e(d({},t.options,n));return r.import(t),r}}_t(R),_t(ft),_t(pt),_t(mt),_t(ht),_t(gt),R.Graph=R,R.DirectedGraph=ft,R.UndirectedGraph=pt,R.MultiGraph=mt,R.MultiDirectedGraph=ht,R.MultiUndirectedGraph=gt,R.InvalidArgumentsGraphError=S,R.NotFoundGraphError=C,R.UsageGraphError=w;var vt=o(((e,t)=>{t.exports=function(e){return typeof e==`object`&&!!e&&typeof e.addUndirectedEdgeWithKey==`function`&&typeof e.dropNode==`function`&&typeof e.multi==`boolean`}})),yt=o((e=>{function t(e){return typeof e!=`number`||isNaN(e)?1:e}function n(e,t){var n={},r=function(e){return e===void 0?t:e};typeof t==`function`&&(r=t);var i=function(t){return r(t[e])},a=function(){return r(void 0)};return typeof e==`string`?(n.fromAttributes=i,n.fromGraph=function(e,t){return i(e.getNodeAttributes(t))},n.fromEntry=function(e,t){return i(t)}):typeof e==`function`?(n.fromAttributes=function(){throw Error(`graphology-utils/getters/createNodeValueGetter: irrelevant usage.`)},n.fromGraph=function(t,n){return r(e(n,t.getNodeAttributes(n)))},n.fromEntry=function(t,n){return r(e(t,n))}):(n.fromAttributes=a,n.fromGraph=a,n.fromEntry=a),n}function r(e,t){var n={},r=function(e){return e===void 0?t:e};typeof t==`function`&&(r=t);var i=function(t){return r(t[e])},a=function(){return r(void 0)};return typeof e==`string`?(n.fromAttributes=i,n.fromGraph=function(e,t){return i(e.getEdgeAttributes(t))},n.fromEntry=function(e,t){return i(t)},n.fromPartialEntry=n.fromEntry,n.fromMinimalEntry=n.fromEntry):typeof e==`function`?(n.fromAttributes=function(){throw Error(`graphology-utils/getters/createEdgeValueGetter: irrelevant usage.`)},n.fromGraph=function(t,n){var i=t.extremities(n);return r(e(n,t.getEdgeAttributes(n),i[0],i[1],t.getNodeAttributes(i[0]),t.getNodeAttributes(i[1]),t.isUndirected(n)))},n.fromEntry=function(t,n,i,a,o,s,c){return r(e(t,n,i,a,o,s,c))},n.fromPartialEntry=function(t,n,i,a){return r(e(t,n,i,a))},n.fromMinimalEntry=function(t,n){return r(e(t,n))}):(n.fromAttributes=a,n.fromGraph=a,n.fromEntry=a,n.fromMinimalEntry=a),n}e.createNodeValueGetter=n,e.createEdgeValueGetter=r,e.createEdgeWeightGetter=function(e){return r(e,t)}})),bt=o(((e,t)=>{t.exports=function(e,t,n){var r,i,a,o,s,c,l,u,d,f,p=t.length,m=n.length,h=e.adjustSizes,g=e.barnesHutTheta*e.barnesHutTheta,_,v,y,b,x,S,C,w=[];for(a=0;a<p;a+=10)t[a+4]=t[a+2],t[a+5]=t[a+3],t[a+2]=0,t[a+3]=0;if(e.outboundAttractionDistribution){for(_=0,a=0;a<p;a+=10)_+=t[a+6];_/=p/10}if(e.barnesHutOptimize){var T=1/0,E=-1/0,D=1/0,O=-1/0,k,A,j;for(a=0;a<p;a+=10)T=Math.min(T,t[a+0]),E=Math.max(E,t[a+0]),D=Math.min(D,t[a+1]),O=Math.max(O,t[a+1]);var M=E-T,N=O-D;for(M>N?(D-=(M-N)/2,O=D+M):(T-=(N-M)/2,E=T+N),w[0]=-1,w[1]=(T+E)/2,w[2]=(D+O)/2,w[3]=Math.max(E-T,O-D),w[4]=-1,w[5]=-1,w[6]=0,w[7]=0,w[8]=0,r=1,a=0;a<p;a+=10)for(i=0,j=3;;)if(w[i+5]>=0){k=t[a+0]<w[i+1]?t[a+1]<w[i+2]?w[i+5]:w[i+5]+9:t[a+1]<w[i+2]?w[i+5]+18:w[i+5]+27,w[i+7]=(w[i+7]*w[i+6]+t[a+0]*t[a+6])/(w[i+6]+t[a+6]),w[i+8]=(w[i+8]*w[i+6]+t[a+1]*t[a+6])/(w[i+6]+t[a+6]),w[i+6]+=t[a+6],i=k;continue}else if(w[i+0]<0){w[i+0]=a;break}else{if(w[i+5]=r*9,u=w[i+3]/2,d=w[i+5],w[d+0]=-1,w[d+1]=w[i+1]-u,w[d+2]=w[i+2]-u,w[d+3]=u,w[d+4]=d+9,w[d+5]=-1,w[d+6]=0,w[d+7]=0,w[d+8]=0,d+=9,w[d+0]=-1,w[d+1]=w[i+1]-u,w[d+2]=w[i+2]+u,w[d+3]=u,w[d+4]=d+9,w[d+5]=-1,w[d+6]=0,w[d+7]=0,w[d+8]=0,d+=9,w[d+0]=-1,w[d+1]=w[i+1]+u,w[d+2]=w[i+2]-u,w[d+3]=u,w[d+4]=d+9,w[d+5]=-1,w[d+6]=0,w[d+7]=0,w[d+8]=0,d+=9,w[d+0]=-1,w[d+1]=w[i+1]+u,w[d+2]=w[i+2]+u,w[d+3]=u,w[d+4]=w[i+4],w[d+5]=-1,w[d+6]=0,w[d+7]=0,w[d+8]=0,r+=4,k=t[w[i+0]+0]<w[i+1]?t[w[i+0]+1]<w[i+2]?w[i+5]:w[i+5]+9:t[w[i+0]+1]<w[i+2]?w[i+5]+18:w[i+5]+27,w[i+6]=t[w[i+0]+6],w[i+7]=t[w[i+0]+0],w[i+8]=t[w[i+0]+1],w[k+0]=w[i+0],w[i+0]=-1,A=t[a+0]<w[i+1]?t[a+1]<w[i+2]?w[i+5]:w[i+5]+9:t[a+1]<w[i+2]?w[i+5]+18:w[i+5]+27,k===A){if(j--){i=k;continue}j=3;break}w[A+0]=a;break}}if(e.barnesHutOptimize)for(v=e.scalingRatio,a=0;a<p;a+=10)for(i=0;;)if(w[i+5]>=0){if(S=(t[a+0]-w[i+7])**2+(t[a+1]-w[i+8])**2,f=w[i+3],4*f*f/S<g){if(y=t[a+0]-w[i+7],b=t[a+1]-w[i+8],h===!0?S>0?(C=v*t[a+6]*w[i+6]/S,t[a+2]+=y*C,t[a+3]+=b*C):S<0&&(C=-v*t[a+6]*w[i+6]/Math.sqrt(S),t[a+2]+=y*C,t[a+3]+=b*C):S>0&&(C=v*t[a+6]*w[i+6]/S,t[a+2]+=y*C,t[a+3]+=b*C),i=w[i+4],i<0)break;continue}i=w[i+5];continue}else{if(c=w[i+0],c>=0&&c!==a&&(y=t[a+0]-t[c+0],b=t[a+1]-t[c+1],S=y*y+b*b,h===!0?S>0?(C=v*t[a+6]*t[c+6]/S,t[a+2]+=y*C,t[a+3]+=b*C):S<0&&(C=-v*t[a+6]*t[c+6]/Math.sqrt(S),t[a+2]+=y*C,t[a+3]+=b*C):S>0&&(C=v*t[a+6]*t[c+6]/S,t[a+2]+=y*C,t[a+3]+=b*C)),i=w[i+4],i<0)break;continue}else for(v=e.scalingRatio,o=0;o<p;o+=10)for(s=0;s<o;s+=10)y=t[o+0]-t[s+0],b=t[o+1]-t[s+1],h===!0?(S=Math.sqrt(y*y+b*b)-t[o+8]-t[s+8],S>0?(C=v*t[o+6]*t[s+6]/S/S,t[o+2]+=y*C,t[o+3]+=b*C,t[s+2]-=y*C,t[s+3]-=b*C):S<0&&(C=100*v*t[o+6]*t[s+6],t[o+2]+=y*C,t[o+3]+=b*C,t[s+2]-=y*C,t[s+3]-=b*C)):(S=Math.sqrt(y*y+b*b),S>0&&(C=v*t[o+6]*t[s+6]/S/S,t[o+2]+=y*C,t[o+3]+=b*C,t[s+2]-=y*C,t[s+3]-=b*C));for(d=e.gravity/e.scalingRatio,v=e.scalingRatio,a=0;a<p;a+=10)C=0,y=t[a+0],b=t[a+1],S=Math.sqrt(y**2+b**2),e.strongGravityMode?S>0&&(C=v*t[a+6]*d):S>0&&(C=v*t[a+6]*d/S),t[a+2]-=y*C,t[a+3]-=b*C;for(v=1*(e.outboundAttractionDistribution?_:1),l=0;l<m;l+=3)o=n[l+0],s=n[l+1],u=n[l+2],x=u**+e.edgeWeightInfluence,y=t[o+0]-t[s+0],b=t[o+1]-t[s+1],h===!0?(S=Math.sqrt(y*y+b*b)-t[o+8]-t[s+8],e.linLogMode?e.outboundAttractionDistribution?S>0&&(C=-v*x*Math.log(1+S)/S/t[o+6]):S>0&&(C=-v*x*Math.log(1+S)/S):e.outboundAttractionDistribution?S>0&&(C=-v*x/t[o+6]):S>0&&(C=-v*x)):(S=Math.sqrt(y**2+b**2),e.linLogMode?e.outboundAttractionDistribution?S>0&&(C=-v*x*Math.log(1+S)/S/t[o+6]):S>0&&(C=-v*x*Math.log(1+S)/S):e.outboundAttractionDistribution?(S=1,C=-v*x/t[o+6]):(S=1,C=-v*x)),S>0&&(t[o+2]+=y*C,t[o+3]+=b*C,t[s+2]-=y*C,t[s+3]-=b*C);var P,F,ee,I,L,te;if(h===!0)for(a=0;a<p;a+=10)t[a+9]!==1&&(P=Math.sqrt(t[a+2]**2+t[a+3]**2),P>10&&(t[a+2]=t[a+2]*10/P,t[a+3]=t[a+3]*10/P),F=t[a+6]*Math.sqrt((t[a+4]-t[a+2])*(t[a+4]-t[a+2])+(t[a+5]-t[a+3])*(t[a+5]-t[a+3])),ee=Math.sqrt((t[a+4]+t[a+2])*(t[a+4]+t[a+2])+(t[a+5]+t[a+3])*(t[a+5]+t[a+3]))/2,I=.1*Math.log(1+ee)/(1+Math.sqrt(F)),L=t[a+0]+t[a+2]*(I/e.slowDown),t[a+0]=L,te=t[a+1]+t[a+3]*(I/e.slowDown),t[a+1]=te);else for(a=0;a<p;a+=10)t[a+9]!==1&&(F=t[a+6]*Math.sqrt((t[a+4]-t[a+2])*(t[a+4]-t[a+2])+(t[a+5]-t[a+3])*(t[a+5]-t[a+3])),ee=Math.sqrt((t[a+4]+t[a+2])*(t[a+4]+t[a+2])+(t[a+5]+t[a+3])*(t[a+5]+t[a+3]))/2,I=t[a+7]*Math.log(1+ee)/(1+Math.sqrt(F)),t[a+7]=Math.min(1,Math.sqrt(I*(t[a+2]**2+t[a+3]**2)/(1+Math.sqrt(F)))),L=t[a+0]+t[a+2]*(I/e.slowDown),t[a+0]=L,te=t[a+1]+t[a+3]*(I/e.slowDown),t[a+1]=te);return{}}})),xt=o((e=>{e.assign=function(e){e||={};for(var t=Array.prototype.slice.call(arguments).slice(1),n=0,r,i=t.length;n<i;n++)if(t[n])for(r in t[n])e[r]=t[n][r];return e},e.validateSettings=function(e){return`linLogMode`in e&&typeof e.linLogMode!=`boolean`?{message:"the `linLogMode` setting should be a boolean."}:`outboundAttractionDistribution`in e&&typeof e.outboundAttractionDistribution!=`boolean`?{message:"the `outboundAttractionDistribution` setting should be a boolean."}:`adjustSizes`in e&&typeof e.adjustSizes!=`boolean`?{message:"the `adjustSizes` setting should be a boolean."}:`edgeWeightInfluence`in e&&typeof e.edgeWeightInfluence!=`number`?{message:"the `edgeWeightInfluence` setting should be a number."}:`scalingRatio`in e&&!(typeof e.scalingRatio==`number`&&e.scalingRatio>=0)?{message:"the `scalingRatio` setting should be a number >= 0."}:`strongGravityMode`in e&&typeof e.strongGravityMode!=`boolean`?{message:"the `strongGravityMode` setting should be a boolean."}:`gravity`in e&&!(typeof e.gravity==`number`&&e.gravity>=0)?{message:"the `gravity` setting should be a number >= 0."}:`slowDown`in e&&!(typeof e.slowDown==`number`||e.slowDown>=0)?{message:"the `slowDown` setting should be a number >= 0."}:`barnesHutOptimize`in e&&typeof e.barnesHutOptimize!=`boolean`?{message:"the `barnesHutOptimize` setting should be a boolean."}:`barnesHutTheta`in e&&!(typeof e.barnesHutTheta==`number`&&e.barnesHutTheta>=0)?{message:"the `barnesHutTheta` setting should be a number >= 0."}:null},e.graphToByteArrays=function(e,t){var n=e.order,r=e.size,i={},a,o=new Float32Array(n*10),s=new Float32Array(r*3);return a=0,e.forEachNode(function(e,t){i[e]=a,o[a]=t.x,o[a+1]=t.y,o[a+2]=0,o[a+3]=0,o[a+4]=0,o[a+5]=0,o[a+6]=1,o[a+7]=1,o[a+8]=t.size||1,o[a+9]=+!!t.fixed,a+=10}),a=0,e.forEachEdge(function(e,n,r,c,l,u,d){var f=i[r],p=i[c],m=t(e,n,r,c,l,u,d);o[f+6]+=m,o[p+6]+=m,s[a]=f,s[a+1]=p,s[a+2]=m,a+=3}),{nodes:o,edges:s}},e.assignLayoutChanges=function(e,t,n){var r=0;e.updateEachNodeAttributes(function(e,i){return i.x=t[r],i.y=t[r+1],r+=10,n?n(e,i):i})},e.readGraphPositions=function(e,t){var n=0;e.forEachNode(function(e,r){t[n]=r.x,t[n+1]=r.y,n+=10})},e.collectLayoutChanges=function(e,t,n){for(var r=e.nodes(),i={},a=0,o=0,s=t.length;a<s;a+=10){if(n){var c=Object.assign({},e.getNodeAttributes(r[o]));c.x=t[a],c.y=t[a+1],c=n(r[o],c),i[r[o]]={x:c.x,y:c.y}}else i[r[o]]={x:t[a],y:t[a+1]};o++}return i},e.createWorker=function(e){var t=window.URL||window.webkitURL,n=e.toString(),r=t.createObjectURL(new Blob([`(`+n+`).call(this);`],{type:`text/javascript`})),i=new Worker(r);return t.revokeObjectURL(r),i}})),St=o(((e,t)=>{t.exports={linLogMode:!1,outboundAttractionDistribution:!1,adjustSizes:!1,edgeWeightInfluence:1,scalingRatio:1,strongGravityMode:!1,gravity:1,slowDown:1,barnesHutOptimize:!1,barnesHutTheta:.5}})),Ct=c(o(((e,t)=>{var n=vt(),r=yt().createEdgeWeightGetter,i=bt(),a=xt(),o=St();function s(e,t,s){if(!n(t))throw Error(`graphology-layout-forceatlas2: the given graph is not a valid graphology instance.`);typeof s==`number`&&(s={iterations:s});var c=s.iterations;if(typeof c!=`number`)throw Error(`graphology-layout-forceatlas2: invalid number of iterations.`);if(c<=0)throw Error(`graphology-layout-forceatlas2: you should provide a positive number of iterations.`);var l=r(`getEdgeWeight`in s?s.getEdgeWeight:`weight`).fromEntry,u=typeof s.outputReducer==`function`?s.outputReducer:null,d=a.assign({},o,s.settings),f=a.validateSettings(d);if(f)throw Error(`graphology-layout-forceatlas2: `+f.message);for(var p=a.graphToByteArrays(t,l),m=0;m<c;m++)i(d,p.nodes,p.edges);if(e)a.assignLayoutChanges(t,p.nodes,u);else return a.collectLayoutChanges(t,p.nodes)}function c(e){var t=typeof e==`number`?e:e.order;return{barnesHutOptimize:t>2e3,strongGravityMode:!0,gravity:.05,scalingRatio:10,slowDown:1+Math.log(t)}}var l=s.bind(null,!1);l.assign=s.bind(null,!0),l.inferSettings=c,t.exports=l}))(),1);function wt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Tt(e,t){if(e){if(typeof e==`string`)return wt(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?wt(e,t):void 0}}function Et(e){if(Array.isArray(e))return e}function Dt(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Ot(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(e,t){return Et(e)||Dt(e,t)||Tt(e,t)||Ot()}function B(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=Tt(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function kt(){return Float32Array.of(1,0,0,0,1,0,0,0,1)}function At(e,t,n){return e[0]=t,e[4]=typeof n==`number`?n:t,e}function jt(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=n,e[3]=-n,e[4]=r,e}function Mt(e,t,n){return e[6]=t,e[7]=n,e}function Nt(e,t){var n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],d=t[0],f=t[1],p=t[2],m=t[3],h=t[4],g=t[5],_=t[6],v=t[7],y=t[8];return e[0]=d*n+f*a+p*c,e[1]=d*r+f*o+p*l,e[2]=d*i+f*s+p*u,e[3]=m*n+h*a+g*c,e[4]=m*r+h*o+g*l,e[5]=m*i+h*s+g*u,e[6]=_*n+v*a+y*c,e[7]=_*r+v*o+y*l,e[8]=_*i+v*s+y*u,e}function Pt(e,t){var n=Math.cos(t),r=Math.sin(t);return{x:n*e.x+r*e.y,y:-r*e.x+n*e.y}}function Ft(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,r=e[0],i=e[1],a=e[3],o=e[4],s=e[6],c=e[7],l=t.x,u=t.y;return{x:l*r+u*a+s*n,y:l*i+u*o+c*n}}function It(e,t){var n=e.height/e.width,r=t.height/t.width;return n<1&&r>1||n>1&&r<1?1:Math.min(Math.max(r,1/r),Math.max(1/n,n))}function Lt(e,t,n,r,i){var a=e.angle,o=e.ratio,s=e.x,c=e.y,l=t.width,u=t.height,d=kt(),f=Math.min(l,u)-2*r,p=It(t,n);return i?(Nt(d,Mt(kt(),s,c)),Nt(d,At(kt(),o)),Nt(d,jt(kt(),a)),Nt(d,At(kt(),l/f/2/p,u/f/2/p))):(Nt(d,At(kt(),f/l*2*p,f/u*2*p)),Nt(d,jt(kt(),-a)),Nt(d,At(kt(),1/o)),Nt(d,Mt(kt(),-s,-c))),d}function Rt(e,t,n){var r=Ft(e,{x:Math.cos(t.angle),y:Math.sin(t.angle)},0),i=r.x,a=r.y;return 1/Math.sqrt(i**2+a**2)/n.width}function zt(e,t,n,r,i){return[Math.floor(t/i*r),Math.floor(e.drawingBufferHeight/i-n/i*r)]}var Bt={black:`#000000`,silver:`#C0C0C0`,gray:`#808080`,grey:`#808080`,white:`#FFFFFF`,maroon:`#800000`,red:`#FF0000`,purple:`#800080`,fuchsia:`#FF00FF`,green:`#008000`,lime:`#00FF00`,olive:`#808000`,yellow:`#FFFF00`,navy:`#000080`,blue:`#0000FF`,teal:`#008080`,aqua:`#00FFFF`,darkblue:`#00008B`,mediumblue:`#0000CD`,darkgreen:`#006400`,darkcyan:`#008B8B`,deepskyblue:`#00BFFF`,darkturquoise:`#00CED1`,mediumspringgreen:`#00FA9A`,springgreen:`#00FF7F`,cyan:`#00FFFF`,midnightblue:`#191970`,dodgerblue:`#1E90FF`,lightseagreen:`#20B2AA`,forestgreen:`#228B22`,seagreen:`#2E8B57`,darkslategray:`#2F4F4F`,darkslategrey:`#2F4F4F`,limegreen:`#32CD32`,mediumseagreen:`#3CB371`,turquoise:`#40E0D0`,royalblue:`#4169E1`,steelblue:`#4682B4`,darkslateblue:`#483D8B`,mediumturquoise:`#48D1CC`,indigo:`#4B0082`,darkolivegreen:`#556B2F`,cadetblue:`#5F9EA0`,cornflowerblue:`#6495ED`,rebeccapurple:`#663399`,mediumaquamarine:`#66CDAA`,dimgray:`#696969`,dimgrey:`#696969`,slateblue:`#6A5ACD`,olivedrab:`#6B8E23`,slategray:`#708090`,slategrey:`#708090`,lightslategray:`#778899`,lightslategrey:`#778899`,mediumslateblue:`#7B68EE`,lawngreen:`#7CFC00`,chartreuse:`#7FFF00`,aquamarine:`#7FFFD4`,skyblue:`#87CEEB`,lightskyblue:`#87CEFA`,blueviolet:`#8A2BE2`,darkred:`#8B0000`,darkmagenta:`#8B008B`,saddlebrown:`#8B4513`,darkseagreen:`#8FBC8F`,lightgreen:`#90EE90`,mediumpurple:`#9370DB`,darkviolet:`#9400D3`,palegreen:`#98FB98`,darkorchid:`#9932CC`,yellowgreen:`#9ACD32`,sienna:`#A0522D`,brown:`#A52A2A`,darkgray:`#A9A9A9`,darkgrey:`#A9A9A9`,lightblue:`#ADD8E6`,greenyellow:`#ADFF2F`,paleturquoise:`#AFEEEE`,lightsteelblue:`#B0C4DE`,powderblue:`#B0E0E6`,firebrick:`#B22222`,darkgoldenrod:`#B8860B`,mediumorchid:`#BA55D3`,rosybrown:`#BC8F8F`,darkkhaki:`#BDB76B`,mediumvioletred:`#C71585`,indianred:`#CD5C5C`,peru:`#CD853F`,chocolate:`#D2691E`,tan:`#D2B48C`,lightgray:`#D3D3D3`,lightgrey:`#D3D3D3`,thistle:`#D8BFD8`,orchid:`#DA70D6`,goldenrod:`#DAA520`,palevioletred:`#DB7093`,crimson:`#DC143C`,gainsboro:`#DCDCDC`,plum:`#DDA0DD`,burlywood:`#DEB887`,lightcyan:`#E0FFFF`,lavender:`#E6E6FA`,darksalmon:`#E9967A`,violet:`#EE82EE`,palegoldenrod:`#EEE8AA`,lightcoral:`#F08080`,khaki:`#F0E68C`,aliceblue:`#F0F8FF`,honeydew:`#F0FFF0`,azure:`#F0FFFF`,sandybrown:`#F4A460`,wheat:`#F5DEB3`,beige:`#F5F5DC`,whitesmoke:`#F5F5F5`,mintcream:`#F5FFFA`,ghostwhite:`#F8F8FF`,salmon:`#FA8072`,antiquewhite:`#FAEBD7`,linen:`#FAF0E6`,lightgoldenrodyellow:`#FAFAD2`,oldlace:`#FDF5E6`,magenta:`#FF00FF`,deeppink:`#FF1493`,orangered:`#FF4500`,tomato:`#FF6347`,hotpink:`#FF69B4`,coral:`#FF7F50`,darkorange:`#FF8C00`,lightsalmon:`#FFA07A`,orange:`#FFA500`,lightpink:`#FFB6C1`,pink:`#FFC0CB`,gold:`#FFD700`,peachpuff:`#FFDAB9`,navajowhite:`#FFDEAD`,moccasin:`#FFE4B5`,bisque:`#FFE4C4`,mistyrose:`#FFE4E1`,blanchedalmond:`#FFEBCD`,papayawhip:`#FFEFD5`,lavenderblush:`#FFF0F5`,seashell:`#FFF5EE`,cornsilk:`#FFF8DC`,lemonchiffon:`#FFFACD`,floralwhite:`#FFFAF0`,snow:`#FFFAFA`,lightyellow:`#FFFFE0`,ivory:`#FFFFF0`},Vt=new Int8Array(4),Ht=new Int32Array(Vt.buffer,0,1),Ut=new Float32Array(Vt.buffer,0,1),Wt=/^\s*rgba?\s*\(/,Gt=/^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;function Kt(e){var t=0,n=0,r=0,i=1,a=e.toLowerCase();if(a===`transparent`)return{r:0,g:0,b:0,a:0};if(a in Bt)return Kt(Bt[a]);if(e[0]===`#`)e.length===4?(t=parseInt(e.charAt(1)+e.charAt(1),16),n=parseInt(e.charAt(2)+e.charAt(2),16),r=parseInt(e.charAt(3)+e.charAt(3),16)):(t=parseInt(e.charAt(1)+e.charAt(2),16),n=parseInt(e.charAt(3)+e.charAt(4),16),r=parseInt(e.charAt(5)+e.charAt(6),16)),e.length===9&&(i=parseInt(e.charAt(7)+e.charAt(8),16)/255);else if(Wt.test(e)){var o=e.match(Gt);o&&(t=+o[1],n=+o[2],r=+o[3],o[4]&&(i=+o[4]))}return{r:t,g:n,b:r,a:i}}function qt(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=Kt(e),r=n.r,i=n.g,a=n.b,o=n.a;return t?[r/255*o,i/255*o,a/255*o,o]:[r/255,i/255,a/255,o]}var Jt={};for(var Yt in Bt)Jt[Yt]=Zt(Bt[Yt]),Jt[Bt[Yt]]=Jt[Yt];function Xt(e,t,n,r,i){return Ht[0]=r<<24|n<<16|t<<8|e,i&&(Ht[0]&=4278190079),Ut[0]}function Zt(e){if(e=e.toLowerCase(),Jt[e]!==void 0)return Jt[e];var t=Kt(e),n=t.r,r=t.g,i=t.b,a=t.a;a=a*255|0;var o=Xt(n,r,i,a,!0);return Jt[e]=o,o}function Qt(e,t){Ut[0]=Zt(e);var n=Ht[0];return t&&(n|=16777216),[n&255,n>>8&255,n>>16&255,n>>24&255]}function $t(e){var t=e>>>8&255,n=e>>>16&255,r=e>>>24&255;return((e&255)<<24|r<<16|n<<8|t)>>>0}function en(e,t,n,r){return(n<<24|t<<16|e<<8|r)>>>0}function tn(e,t,n,r,i,a){var o=z(zt(e,n,r,i,a),2),s=o[0],c=o[1],l=new Uint8Array(4);e.bindFramebuffer(e.FRAMEBUFFER,t),e.readPixels(s,c,1,1,e.RGBA,e.UNSIGNED_BYTE,l);var u=z(l,4);return[u[0],u[1],u[2],u[3]]}function nn(e){var t=Kt(e),n=t.r,r=t.g,i=t.b,a=t.a;return`vec4(${(n/255).toFixed(6)}, ${(r/255).toFixed(6)}, ${(i/255).toFixed(6)}, ${a.toFixed(6)})`}function rn(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function an(e){var t=rn(e,`string`);return typeof t==`symbol`?t:t+``}function V(e,t,n){return(t=an(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function on(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?on(Object(n),!0).forEach(function(t){V(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):on(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function U(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function sn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,an(r.key),r)}}function W(e,t,n){return t&&sn(e.prototype,t),n&&sn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function cn(e){return cn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},cn(e)}function ln(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ln=function(){return!!e})()}function un(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function dn(e,t){if(t&&(typeof t==`object`||typeof t==`function`))return t;if(t!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return un(e)}function G(e,t,n){return t=cn(t),dn(e,ln()?Reflect.construct(t,n||[],cn(e).constructor):t.apply(e,n))}function fn(e,t){return fn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},fn(e,t)}function K(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&fn(e,t)}function pn(e){if(Array.isArray(e))return wt(e)}function mn(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function hn(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(e){return pn(e)||mn(e)||Tt(e)||hn()}function J(e){"@babel/helpers - typeof";return J=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},J(e)}function gn(e){return J(e)===`object`&&e!==null&&`attribute`in e}function _n(){return{name:`circle`,glsl:`
float sdf_circle(vec2 uv, float size) {
  return length(uv) - size;
}
`,uniforms:[]}}function vn(e){var t=WebGL2RenderingContext.UNSIGNED_BYTE,n=e?.color??{attribute:`color`};return gn(n)?{name:`fill`,uniforms:[],attributes:[{name:`fillColor`,size:4,type:t,normalized:!0,source:n.attribute}],glsl:`
vec4 layer_fill(vec4 v_fillColor) {
  return v_fillColor;
}
`}:{name:`fill`,uniforms:[],attributes:[],glsl:`
vec4 layer_fill() {
  return ${nn(n)};
}
`}}function yn(e,t){if(typeof e==`string`){var n=z(qt(e).map(function(e){return e.toFixed(6)}),4);return{glsl:`vec4(${n[0]}, ${n[1]}, ${n[2]}, ${n[3]})`,attributes:[],needsNodeColors:!1}}if(`node`in e&&e.node)return{glsl:e.node===`source`?`v_sourceColor`:`v_targetColor`,attributes:[],needsNodeColors:!0};var r=e;return{glsl:`v_${t}`,attributes:[{name:`a_${t}`,size:4,type:WebGL2RenderingContext.UNSIGNED_BYTE,normalized:!0,source:r.attribute,defaultValue:r.default}],needsNodeColors:!1}}function bn(e){var t=e?.color;if(t===void 0)return{name:`plain`,glsl:`
// Plain solid color layer
vec4 layer_plain(EdgeContext ctx) {
  return v_color;
}
`,uniforms:[],attributes:[]};var n=yn(t,`plainColor`);return{name:`plain`,glsl:`
// Plain solid color layer
vec4 layer_plain(EdgeContext ctx) {
  return ${n.glsl};
}
`,uniforms:[],attributes:n.attributes,needsNodeColors:n.needsNodeColors}}function xn(){return{name:`straight`,segments:1,minBodyLengthRatio:0,linearParameterization:!0,glsl:`
// Position at parameter t ∈ [0, 1]
vec2 path_straight_position(float t, vec2 source, vec2 target) {
  return mix(source, target, t);
}

// Total length of the path (analytical - more efficient than sampling)
float path_straight_length(vec2 source, vec2 target) {
  return length(target - source);
}
`,uniforms:[],attributes:[]}}function Sn(e){var t=(e??{}).segments;return{name:`loop`,segments:t===void 0?32:t,glsl:`
const float LOOP_PI = 3.141592653589793;

float loopWorldRadius() {
  float nodeWorldRadius = v_sourceNodeSize * u_correctionRatio / u_sizeRatio;
  return max(v_loopRadius * nodeWorldRadius, 0.001);
}

// Cubic Bézier with P0 = P3 = source.
// Control points extend outward orthogonal to the node surface at exit/entry angles.
vec2 path_loop_position(float t, vec2 source, vec2 target) {
  float R = loopWorldRadius();
  float angle = v_loopAngle + (v_loopFixedOrientation > 0.5 ? u_cameraAngle : 0.0);
  float halfSpread = v_loopSpread * 0.5;

  float exitAngle = angle - halfSpread;
  float entryAngle = angle + halfSpread;

  // Control point distance: at t=0.5 the Bézier reaches 0.75 * cpDist * cos(halfSpread)
  // from source. Solve for cpDist so the loop tip reaches exactly R.
  float cpDist = R / (0.75 * cos(halfSpread));

  vec2 cp1 = source + cpDist * vec2(cos(exitAngle), sin(exitAngle));
  vec2 cp2 = source + cpDist * vec2(cos(entryAngle), sin(entryAngle));

  float u = 1.0 - t;
  vec2 d1 = cp1 - source;
  vec2 d2 = cp2 - source;
  return source + 3.0 * t * u * (u * d1 + t * d2);
}

// Approximate arc length via chord sampling
float path_loop_length(vec2 source, vec2 target) {
  float len = 0.0;
  vec2 prev = path_loop_position(0.0, source, target);
  const int STEPS = 16;
  for (int i = 1; i <= STEPS; i++) {
    float t = float(i) / float(STEPS);
    vec2 cur = path_loop_position(t, source, target);
    len += length(cur - prev);
    prev = cur;
  }
  return len;
}
`,needsNodeSize:!0,uniforms:[],attributes:[{name:`loopRadius`,size:1,type:WebGL2RenderingContext.FLOAT},{name:`loopAngle`,size:1,type:WebGL2RenderingContext.FLOAT},{name:`loopSpread`,size:1,type:WebGL2RenderingContext.FLOAT},{name:`loopFixedOrientation`,size:1,type:WebGL2RenderingContext.FLOAT}],variables:{loopRadius:{type:`number`,default:4},loopAngle:{type:`number`,default:Math.PI/4},loopSpread:{type:`number`,default:80*Math.PI/180},loopFixedOrientation:{type:`number`,default:0}},spread:{variable:`loopRadius`,compute:function(e){return e+4}}}}function Cn(e){return J(e)===`object`&&`glsl`in e&&!(`attributes`in e)}function wn(e){return J(e)===`object`&&`glsl`in e&&!(`attributes`in e)}var Tn={shapes:[_n()],variables:{},layers:[vn()],label:{},backdrop:{},labelAttachments:{}},En={paths:[xn(),Sn()],extremities:[],variables:{},layers:[bn()],defaultHead:`none`,defaultTail:`none`,label:{}},Dn=[`nodes`,`topNodes`],On=[`edges`,`topEdges`],kn=[].concat(On,Dn),An={nodes:Tn,edges:En,depthLayers:q(kn)},jn={linear:function(e){return e},quadraticIn:function(e){return e*e},quadraticOut:function(e){return e*(2-e)},quadraticInOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)},cubicIn:function(e){return e*e*e},cubicOut:function(e){return--e*e*e+1},cubicInOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)},exponentialIn:function(e){return e===0?0:2**(10*(e-1))},exponentialOut:function(e){return e===1?1:1-2**(-10*e)},exponentialInOut:function(e){return e===0?0:e===1?1:e<.5?2**(10*(2*e-1))/2:(2-2**(-10*(2*e-1)))/2}};function Mn(e){return e?typeof e==`function`?e:jn[e]:jn.linear}function Nn(e){return J(e)===`object`&&e!==null&&`attribute`in e}function Pn(e){return typeof e==`function`}function Fn(e){return J(e)===`object`&&e!==null&&`when`in e&&typeof e.when==`function`&&`then`in e}function In(e){return J(e)===`object`&&e!==null&&`whenState`in e&&`then`in e}function Ln(e){return J(e)===`object`&&e!==null&&`whenData`in e&&`then`in e}var Rn={isHovered:!1,isLabelHovered:!1,isHidden:!1,isHighlighted:!1,isDragged:!1},zn={isHovered:!1,isLabelHovered:!1,isHidden:!1,isHighlighted:!1,parallelIndex:0,parallelCount:1},Bn={isIdle:!0,isPanning:!1,isZooming:!1,isDragging:!1,hasHovered:!1,hasHighlighted:!1};function Vn(e){return H(H({},Rn),e)}function Hn(e){return H(H({},zn),e)}function Un(e){return H(H({},Bn),e)}var Wn={nodes:H(H({},{x:{attribute:`x`},y:{attribute:`y`},size:{whenState:`isHovered`,then:{attribute:`size`,defaultValue:12},else:{attribute:`size`,defaultValue:10}},color:{attribute:`color`,defaultValue:`#666`},label:{attribute:`label`},visibility:{whenState:`isHidden`,then:`hidden`,else:`visible`},labelVisibility:{whenState:`isHovered`,then:`visible`,else:`auto`},backdropVisibility:{whenState:`isHovered`,then:`visible`,else:`hidden`},backdropColor:`#ffffff`,backdropShadowColor:`rgba(0, 0, 0, 0.5)`,backdropShadowBlur:12,backdropPadding:6}),{},{depth:{whenState:`isHovered`,then:`topNodes`,else:`nodes`}}),edges:H(H({},{size:{attribute:`size`,defaultValue:1},color:{attribute:`color`,defaultValue:`#ccc`},label:{attribute:`label`},visibility:{whenState:`isHidden`,then:`hidden`,else:`visible`}}),{},{depth:{whenState:[`isHighlighted`,`isHovered`],then:`topEdges`,else:`edges`}})};function Gn(e){return`min`in e||`max`in e||`minValue`in e||`maxValue`in e||`easing`in e}function Kn(e){return`dict`in e}function qn(e,t){return typeof e==`string`?t[e]===!0:Array.isArray(e)?e.every(function(e){return t[e]===!0}):J(e)===`object`&&e!==null&&Object.entries(e).every(function(e){var n=z(e,2),r=n[0],i=n[1];return t[r]===i})}function Jn(e,t){var n=t[e.attribute];return n===void 0?e.defaultValue:n}function Yn(e,t,n){var r=t[e.attribute];if(r===void 0)return e.defaultValue;var i=Number(r);if(isNaN(i))return e.defaultValue;if(e.min===void 0&&e.max===void 0)return i;var a=e.minValue??i,o=e.maxValue??i;if(o===a)return e.min??i;var s=(i-a)/(o-a);s=Math.max(0,Math.min(1,s)),s=Mn(e.easing)(s);var c=e.min??0,l=e.max??1;return c+s*(l-c)}function Xn(e,t){var n=t[e.attribute];if(n===void 0)return e.defaultValue;var r=String(n);return r in e.dict?e.dict[r]:e.defaultValue}function Zn(e,t,n){return Kn(e)?Xn(e,t):Gn(e)?Yn(e,t):Jn(e,t)}function Qn(e,t){return typeof e==`string`?!!t[e]:Array.isArray(e)?e.every(function(e){return!!t[e]}):J(e)===`object`&&e!==null&&Object.entries(e).every(function(e){var n=z(e,2),r=n[0],i=n[1];return t[r]===i})}function $n(e,t,n,r,i,a){if(e==null)return a;if(J(e)!==`object`&&typeof e!=`function`)return e;if(Fn(e)){var o=e.when(t,n,r,i)?e.then:e.else;return o===void 0?a:$n(o,t,n,r,i,a)}if(In(e)){var s=qn(e.whenState,n)?e.then:e.else;return s===void 0?a:$n(s,t,n,r,i,a)}if(Ln(e)){var c=Qn(e.whenData,t)?e.then:e.else;return c===void 0?a:$n(c,t,n,r,i,a)}return Pn(e)?e(t,n,r,i)??a:Nn(e)?Zn(e,t)??a:e}function er(e){return e==null?`static`:Fn(e)?`graph-state`:In(e)?tr(`item-state`,tr(er(e.then),e.else===void 0?`static`:er(e.else))):Ln(e)?tr(er(e.then),e.else===void 0?`static`:er(e.else)):Pn(e)?`graph-state`:(Nn(e),`static`)}function tr(e,t){return e===`graph-state`||t===`graph-state`?`graph-state`:e===`item-state`||t===`item-state`?`item-state`:`static`}function nr(e){if(!e)return{dependency:`static`,xAttribute:null,yAttribute:null};var t=Array.isArray(e)?e:[e],n=`static`,r=null,i=null,a=B(t),o;try{for(a.s();!(o=a.n()).done;){var s=o.value;if(`matchData`in s&&`cases`in s)for(var c=s.cases,l=0,u=Object.values(c);l<u.length;l++)for(var d=u[l],f=0,p=Object.values(d);f<p.length;f++){var m=p[f];n=tr(n,er(m))}else if(`matchState`in s&&`cases`in s){n=tr(n,`item-state`);for(var h=s.cases,g=0,_=Object.values(h);g<_.length;g++)for(var v=_[g],y=0,b=Object.values(v);y<b.length;y++){var x=b[y];n=tr(n,er(x))}}else if(`when`in s&&`then`in s)n=`graph-state`;else if(`whenState`in s){n=tr(n,`item-state`);var S=s.then;if(S&&J(S)===`object`)for(var C=0,w=Object.values(S);C<w.length;C++){var T=w[C];n=tr(n,er(T))}var E=s.else;if(E&&J(E)===`object`)for(var D=0,O=Object.values(E);D<O.length;D++){var k=O[D];n=tr(n,er(k))}}else if(`whenData`in s){var A=s.then;if(A&&J(A)===`object`)for(var j=0,M=Object.values(A);j<M.length;j++){var N=M[j];n=tr(n,er(N))}var P=s.else;if(P&&J(P)===`object`)for(var F=0,ee=Object.values(P);F<ee.length;F++){var I=ee[F];n=tr(n,er(I))}}else for(var L=0,te=Object.entries(s);L<te.length;L++){var ne=z(te[L],2),re=ne[0],ie=ne[1];if(!ar.has(re)&&(n=tr(n,er(ie)),(re===`x`||re===`y`)&&Nn(ie))){var ae=ie.attribute;re===`x`&&!r&&(r=ae),re===`y`&&!i&&(i=ae)}}}}catch(e){a.e(e)}finally{a.f()}return{dependency:n,xAttribute:r,yAttribute:i}}var rr={size:10,color:`#666`,opacity:1,shape:`circle`,rotationAlignment:`viewport`,labelRotationAlignment:`viewport`,visibility:`visible`,depth:`nodes`,zIndex:0,label:``,labelColor:`#000`,labelSize:12,labelFont:`sans-serif`,labelVisibility:`auto`,labelPosition:`right`,labelAngle:0,labelDepth:`nodes`,backdropVisibility:`hidden`,backdropColor:`transparent`,backdropShadowColor:`transparent`,backdropShadowBlur:0,backdropPadding:0,backdropBorderColor:`transparent`,backdropBorderWidth:0,backdropCornerRadius:0,backdropLabelPadding:-1,backdropArea:`both`,labelAttachment:null,labelAttachmentPlacement:`below`},ir={size:1,color:`#ccc`,opacity:1,path:`straight`,selfLoopPath:`loop`,parallelSpread:.25,tail:`none`,head:`none`,visibility:`visible`,depth:`edges`,zIndex:0,label:``,labelColor:`#666`,labelVisibility:`auto`,labelDepth:`edges`},ar=new Set([`when`,`whenState`,`whenData`,`then`,`else`]),or=Object.keys(rr),sr=Object.values(rr),cr=Object.keys(ir),lr=Object.values(ir);function ur(e,t,n,r,i,a,o){for(var s in t)if(!ar.has(s)){var c=e[s]??o[s];e[s]=$n(t[s],n,r,i,a,c)}`depth`in t&&!(`labelDepth`in t)&&(e.labelDepth=e.depth)}function dr(e,t,n,r,i,a,o){var s=B(t),c;try{for(s.s();!(c=s.n()).done;){var l=c.value;if(`matchData`in l&&`cases`in l){var u=String(n[l.matchData]??``),d=l.cases;u in d&&ur(e,d[u],n,r,i,a,o)}else if(`matchState`in l&&`cases`in l){var f=String(r[l.matchState]??``),p=l.cases;f in p&&ur(e,p[f],n,r,i,a,o)}else if(`when`in l&&`then`in l){var m=l.when;if(!m(n,r,i,a))continue;ur(e,l.then,n,r,i,a,o)}else if(`whenState`in l&&`then`in l){if(!qn(l.whenState,r))continue;ur(e,l.then,n,r,i,a,o)}else if(`whenData`in l&&`then`in l){if(!Qn(l.whenData,n))continue;ur(e,l.then,n,r,i,a,o)}else ur(e,l,n,r,i,a,o)}}catch(e){s.e(e)}finally{s.f()}}function fr(e,t,n,r,i,a){for(var o=a||{},s=o,c=0,l=or.length;c<l;c++)s[or[c]]=sr[c];return s.x=void 0,s.y=void 0,s.labelBackgroundColor=void 0,s.labelBackgroundPadding=void 0,s.labelCursor=void 0,e?(dr(s,Array.isArray(e)?e:[e],t,n,r,i,rr),o):(s.x=t.x??0,s.y=t.y??0,o.size=t.size??10,o.color=t.color??`#666`,o.label=t.label??``,o)}function pr(e,t,n,r,i,a){for(var o=a||{},s=o,c=0,l=cr.length;c<l;c++)s[cr[c]]=lr[c];return e?(dr(s,Array.isArray(e)?e:[e],t,n,r,i,ir),typeof s.labelPosition==`number`&&(s.labelPosition=void 0),o):(o.size=t.size??1,o.color=t.color??`#ccc`,o.label=t.label??``,o)}function mr(e,t,n){if(e==null)return n;if(typeof e==`function`)return e(t)??n;if(J(e)===`object`&&`when`in e){var r=e,i=r.when(t)?r.then:r.else;return i===void 0?n:typeof i==`function`?i(t)??n:i??n}if(J(e)===`object`&&`whenState`in e){var a=e,o=qn(a.whenState,t)?a.then:a.else;return o===void 0?n:typeof o==`function`?o(t)??n:o??n}return e??n}function hr(e,t){var n={};if(!e)return n;var r=B(Array.isArray(e)?e:[e]),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(`when`in a&&`then`in a){var o=a.when(t)?a.then:a.else;o&&J(o)===`object`&&gr(n,o,t)}else if(`whenState`in a&&`then`in a){var s=qn(a.whenState,t)?a.then:a.else;s&&J(s)===`object`&&gr(n,s,t)}else gr(n,a,t)}}catch(e){r.e(e)}finally{r.f()}return n}function gr(e,t,n){for(var r=0,i=Object.entries(t);r<i.length;r++){var a=z(i[r],2),o=a[0],s=a[1];ar.has(o)||(e[o]=mr(s,n))}}var _r=function(e){function t(){var e;return U(this,t),e=G(this,t),e.rawEmitter=e,e}return K(t,e),W(t)}(l.EventEmitter),vr=An;function yr(e,t){var n=t.size;if(n!==0){var r=e.length;e.length+=n;var i=0;t.forEach(function(t){e[r+i]=t,i++})}}function br(e){e||={};for(var t=0,n=arguments.length<=1?0:arguments.length-1;t<n;t++){var r=t+1<1||arguments.length<=t+1?void 0:arguments[t+1];r&&Object.assign(e,r)}return e}function xr(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&t[n]!==e[n])return!0;return!1}function Sr(e,t){var n=e,r=t;for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)&&n[i]!==r[i])return!1;for(var a in r)if(Object.prototype.hasOwnProperty.call(r,a)&&r[a]!==n[a])return!1;return!0}function Cr(e,t,n){n?e.add(t):e.delete(t)}var wr=c(vt()),Tr={easing:`quadraticInOut`,duration:150};function Er(e){return e.labelVisibility===`visible`&&e.visibility!==`hidden`}function Dr(e){return e.backdropVisibility===`visible`&&e.visibility!==`hidden`}function Or(e){return[+(e.rotationAlignment===`graph`),+(e.labelRotationAlignment===`graph`)]}function kr(e,t,n){var r=e[t];if(r)for(var i=0;i<r.length;i++){var a=r[i];if(!(n<a.offset||n>=a.offset+a.count)){if(a.count===1)r.splice(i,1);else if(n===a.offset)a.offset++,a.count--;else if(n===a.offset+a.count-1)a.count--;else{var o=n+1,s=a.offset+a.count-o;a.count=n-a.offset,r.splice(i+1,0,{offset:o,count:s})}return}}}function Ar(e,t,n){if(!e[t])e[t]=[{offset:n,count:1}];else{for(var r=e[t],i=r.length,a=0;a<r.length;a++)if(n<r[a].offset){i=a;break}var o=i>0?r[i-1]:null,s=i<r.length?r[i]:null,c=o&&o.offset+o.count===n,l=s&&n+1===s.offset;c&&l?(o.count+=1+s.count,r.splice(i,1)):c?o.count++:l?(s.offset--,s.count++):r.splice(i,0,{offset:n,count:1})}}function jr(e){if(!(0,wr.default)(e))throw Error(`Sigma: invalid graph instance.`)}function Mr(e){var t=z(e.x,2),n=t[0],r=t[1],i=z(e.y,2),a=i[0],o=i[1],s=Math.max(r-n,o-a),c=(r+n)/2,l=(o+a)/2;(s===0||Math.abs(s)===1/0||isNaN(s))&&(s=1),isNaN(c)&&(c=0),isNaN(l)&&(l=0);var u=function(e){return{x:.5+(e.x-c)/s,y:.5+(e.y-l)/s}};return u.applyTo=function(e){e.x=.5+(e.x-c)/s,e.y=.5+(e.y-l)/s},u.inverse=function(e){return{x:c+s*(e.x-.5),y:l+s*(e.y-.5)}},u.ratio=s,u}var Nr={hideEdgesOnMove:!1,hideLabelsOnMove:!1,renderLabels:!0,renderEdgeLabels:!1,edgeLabelAnchors:`nodeLabels`,enableEdgeEvents:!1,nodeLabelEvents:!1,edgeLabelEvents:!1,pickingDownSizingRatio:2,nodePickingPadding:0,edgePickingPadding:4,labelPickingPadding:10,stagePadding:30,minEdgeThickness:1.7,antiAliasingFeather:1,antialiasEdges:!0,antialiasNodes:!0,dragTimeout:100,draggedEventsTolerance:3,inertiaDuration:200,inertiaRatio:3,zoomDuration:250,zoomingRatio:1.7,doubleClickTimeout:300,doubleClickZoomingRatio:2.2,doubleClickZoomingDuration:200,tapMoveTolerance:10,zoomToSizeRatioFunction:Math.sqrt,itemSizesReference:`positions`,autoRescale:!0,autoRescaleContent:`positions`,enableNodeDrag:!1,getDraggedNodes:function(e){return[e]},dragPositionToAttributes:null,labelDensity:1,labelGridCellSize:100,labelRenderedSizeThreshold:6,labelPixelSnapping:!0,minCameraRatio:null,maxCameraRatio:null,enableCameraZooming:!0,enableCameraPanning:!0,enableCameraRotation:!0,enableCameraMouseRotation:!0,cameraPanBoundaries:null,gestureTarget:`graph`,sharedGestureWheelMessage:`Use Ctrl + scroll to zoom the graph`,sharedGestureAppleWheelMessage:`Use ⌘ + scroll to zoom the graph`,sharedGestureTouchMessage:`Use two fingers to move the graph`,allowInvalidContainer:!1,DEBUG_displayPickingLayer:!1,DEBUG_logShaders:!1,DEBUG_logRenderStats:!1,DEBUG_gpuTimerQueries:!1};function Pr(e){if(typeof e.labelDensity!=`number`||e.labelDensity<0)throw Error("Settings: invalid `labelDensity`. Expecting a positive number.");var t=e.minCameraRatio,n=e.maxCameraRatio;if(typeof t==`number`&&typeof n==`number`&&n<t)throw Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.")}function Fr(e){return br({},Nr,e)}var Ir=new Set([`italic`,`oblique`]),Lr=new Set([`bold`,`bolder`,`lighter`]);function Rr(e){for(var t=`normal`,n=`normal`,r=e.trim(),i=r.split(/\s+/),a=0,o=0;o<i.length;o++){var s=i[o].toLowerCase();if(Ir.has(s))n=s,a=o+1;else if(Lr.has(s)||/^\d{3}$/.test(s))t=s,a=o+1;else if(s===`normal`)a=o+1;else break}return{family:i.slice(a).join(` `)||r,weight:t,style:n}}function zr(e,t,n){var r=document.createElement(e);if(t)for(var i in t)r.style[i]=t[i];if(n)for(var a in n)r.setAttribute(a,n[a]);return r}function Br(){return window.devicePixelRatio===void 0?1:window.devicePixelRatio}function Vr(e){var t=e.type===WebGL2RenderingContext.FLOAT&&!e.normalized,n=e.type===WebGL2RenderingContext.UNSIGNED_BYTE&&e.size===4&&e.normalized;if(!t&&!n)throw Error(`Attribute "${e.name}" is invalid: only non-normalized FLOAT and normalized UNSIGNED_BYTE with size 4 are supported.`);return e.normalized?1:e.size}function Hr(e){var t=0;return e.forEach(function(e){return t+=Vr(e)}),t}function Ur(e,t,n){var r=e===`VERTEX`?t.VERTEX_SHADER:t.FRAGMENT_SHADER,i=t.createShader(r);if(i===null)throw Error(`loadShader: error while creating the shader`);if(t.shaderSource(i,n),t.compileShader(i),!t.getShaderParameter(i,t.COMPILE_STATUS)){var a=t.getShaderInfoLog(i);throw t.deleteShader(i),Error(`loadShader: error while compiling the shader:
${a}
${n}`)}return i}function Wr(e,t){return Ur(`VERTEX`,e,t)}function Gr(e,t){return Ur(`FRAGMENT`,e,t)}function Kr(e,t){var n=e.createProgram();if(n===null)throw Error(`loadProgram: error while creating the program.`);for(var r=0,i=t.length;r<i;r++)e.attachShader(n,t[r]);if(e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS)){var a=e.getProgramInfoLog(n);throw e.deleteProgram(n),Error(`loadProgram: error while linking the program: ${a}`)}return n}function qr(e){var t=e.gl,n=e.buffer,r=e.program,i=e.vertexShader,a=e.fragmentShader;t.deleteShader(i),t.deleteShader(a),t.deleteProgram(r),t.deleteBuffer(n)}function Y(e){return e%1==0?e.toFixed(1):e.toString()}var Jr=new Map,Yr=new Map,Xr=0;function Zr(e,t){var n,r=(n=e.variables)==null||(n=n[t.source||t.name.replace(/^a_/,``)])==null?void 0:n.default;return Y(typeof r==`number`?r:typeof t.defaultValue==`number`?t.defaultValue:0)}function Qr(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:function(e){return`v_${e.name.replace(/^a_/,``)}`},i=[t,n].concat(q(e.uniforms.filter(function(e){return e.type===`float`}).map(function(e){return Y(e.value??0)})),q((e.attributes??[]).map(r)));return`sdf_${e.name}(${i.join(`, `)})`}function $r(e){var t=e.name,n=e.uniforms.filter(function(e){return e.type===`float`&&e.value!==void 0&&e.value!==0}).map(function(e){return`${e.name.replace(`u_`,``)}=${e.value}`}).sort(),r=(e.attributes??[]).map(function(t){return`${t.name}@${t.source??``}=${Zr(e,t)}`}),i=[].concat(q(n),q(r));return i.length>0&&(t+=`#`+i.join(`#`)),t}function ei(e){var t=$r(e);if(!Jr.has(t)){var n={},r=B(e.uniforms),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;a.type===`float`&&a.value!==void 0&&(n[a.name]=a.value)}}catch(e){r.e(e)}finally{r.f()}Jr.set(t,{shape:e,uniformValues:n,slug:t}),Yr.set(t,Xr++)}return t}function ti(e){return Yr.get(e)??-1}function ni(e){var t=[],n=new Set,r=new Set,i=/mat2 rotate2D\(float angle\)\s*\{[^}]+\}/,a=B(e),o;try{for(a.s();!(o=a.n()).done;){var s=o.value;if(!r.has(s.name)){r.add(s.name);var c=s.glsl;i.test(c)&&(n.has(`rotate2D`)?c=c.replace(i,``):n.add(`rotate2D`)),t.push(c)}}}catch(e){a.e(e)}finally{a.f()}return t.join(`
`)}function ri(){return ni(Array.from(Jr.values()).map(function(e){return e.shape}))}function ii(e){var t=Array.from(Jr.entries());return t.length===0?`
float querySDF(int shapeId, vec2 uv, float size) {
  return length(uv) - size;
}
`:`
float querySDF(int shapeId, vec2 uv, float size) {
  switch (shapeId) {
${t.map(function(t,n){var r=z(t,2),i=r[0],a=r[1].shape;return`    case ${n}: return ${Qr(a,`uv`,`size`,function(t){var n=t.name.replace(/^a_/,``);return e!=null&&e.has(n)?`g_${n}`:Zr(a,t)})}; // ${i}`}).join(`
`)}
    default: return length(uv) - size;
  }
}
`}function ai(e){return ni(e)}function oi(e){return q(new Map(e.flatMap(function(e){return e.uniforms}).map(function(e){return[e.name,e]})).values())}function si(e,t){if(e.length===0)return`
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  context.sdf = length(uv) - size;
  context.inradiusFactor = 1.0;
}
`;var n=function(e){return Qr(e,`uv`,`size`)},r=function(e){return e.inradiusFactorGLSL??Y(e.inradiusFactor??1)};if(e.length===1){var i=e[0];return`
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  context.sdf = ${n(i)};
  context.inradiusFactor = ${r(i)};
}
`}var a=e.map(function(e,t){return`    case ${t}: // ${e.name}
      context.sdf = ${n(e)};
      context.inradiusFactor = ${r(e)};
      break;`}).join(`
`),o=e[0],s=``,c=`shapeId`;return t&&t.length>1&&(s=`
int globalToLocalShapeId(int globalId) {
  switch (globalId) {
${t.map(function(t,n){return`    case ${t}: return ${n}; // ${e[n].name}`}).join(`
`)}
    default: return 0;
  }
}
`,c=`globalToLocalShapeId(shapeId)`),`${s}
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  switch (${c}) {
${a}
    default:
      context.sdf = ${n(o)};
      context.inradiusFactor = ${r(o)};
  }
}
`}var ci={right:0,left:1,above:2,below:3,over:4},li=`
float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
float nodeRadiusGraphSpace = nodeSize * u_correctionRatio / u_sizeRatio * 2.0;
float nodeRadiusNDC = nodeRadiusGraphSpace * matrixScaleX;
float nodeRadiusPixels = nodeRadiusNDC * u_resolution.x / 2.0;
`,ui=`
mat2 rotate2D(float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return mat2(c, -s, s, c);
}
`,di=`
vec2 getLabelDirection(float positionMode) {
  if (positionMode < 0.5) return vec2(1.0, 0.0);   // Right
  if (positionMode < 1.5) return vec2(-1.0, 0.0);  // Left
  if (positionMode < 2.5) return vec2(0.0, -1.0);  // Above
  if (positionMode < 3.5) return vec2(0.0, 1.0);   // Below
  return vec2(0.0);                                 // Over (centered)
}
`,fi=`
float sdfBox(vec2 p, vec2 halfSize) {
  vec2 d = abs(p) - halfSize;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}
`,pi=`
float sdfRotatedBox(vec2 p, vec2 halfSize, float angle) {
  float c = cos(-angle);
  float s = sin(-angle);
  vec2 rotatedP = mat2(c, -s, s, c) * p;
  return sdfBox(rotatedP, halfSize);
}
`,mi=`
float sdfRoundedBox(vec2 p, vec2 halfSize, float radius) {
  vec2 d = abs(p) - halfSize + radius;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - radius;
}
`,hi=`
float sdfRoundedRotatedBox(vec2 p, vec2 halfSize, float angle, float radius) {
  float c = cos(-angle);
  float s = sin(-angle);
  vec2 rotatedP = mat2(c, -s, s, c) * p;
  return sdfRoundedBox(rotatedP, halfSize, radius);
}
`,gi=`
vec2 labelBoxCenter(float positionMode, float labelStart, vec2 halfSize, float textHalfY) {
  if (positionMode < 0.5) return vec2(labelStart + halfSize.x, 0.0);    // right
  if (positionMode < 1.5) return vec2(-(labelStart + halfSize.x), 0.0); // left
  if (positionMode < 2.5) return vec2(0.0, -(labelStart + textHalfY));  // above
  if (positionMode < 3.5) return vec2(0.0, labelStart + textHalfY);     // below
  return vec2(0.0);                                                     // over
}
`,_i=`
vec4 readNodeData(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * 2;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  return texelFetch(nodeDataTexture, coord, 0);
}
`,vi=`
vec4 readNodeFlags(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * 2 + 1;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  return texelFetch(nodeDataTexture, coord, 0);
}
`,yi=`
vec4 readNodeColor(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * 2 + 1;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  vec4 texel = texelFetch(nodeDataTexture, coord, 0);
  float r = floor(texel.b / 65536.0);
  float g = floor(mod(texel.b, 65536.0) / 256.0);
  float b = mod(texel.b, 256.0);
  return vec4(r / 255.0, g / 255.0, b / 255.0, texel.a);
}
`,bi=`
vec4 readFrameTexel(sampler2D frameTexture, int frameTextureWidth, int index) {
  ivec2 coord = ivec2(index % frameTextureWidth, index / frameTextureWidth);
  return texelFetch(frameTexture, coord, 0);
}
`;function xi(e,t){var n=function(e){return Qr(e,`uv`,`size`)};return e.length===1?{code:Si(n(e[0])),multiShape:!1}:{code:`
float queryShapeSDF(int shapeId, vec2 uv, float size) {
  switch (shapeId) {
${e.map(function(e,r){return`    case ${t?t[r]:r}: return ${n(e)};`}).join(`
`)}
    default: return ${n(e[0])};
  }
}
int g_shapeId;
${Si(`queryShapeSDF(g_shapeId, uv, size)`)}
`,multiShape:!0}}function Si(e){return`
float findEdgeDistance(vec2 direction, float size) {
  float lo = 0.0, hi = 2.0;
  for (int i = 0; i < 8; i++) {
    float mid = (lo + hi) * 0.5;
    vec2 uv = direction * mid;
    if (${e} < 0.0) lo = mid; else hi = mid;
  }
  return (lo + hi) * 0.5;
}
`}function Ci(e,t){for(;!{}.hasOwnProperty.call(e,t)&&(e=cn(e))!==null;);return e}function wi(){return wi=typeof Reflect<`u`&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=Ci(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},wi.apply(null,arguments)}function X(e,t,n,r){var i=wi(cn(1&r?e.prototype:e),t,n);return 2&r&&typeof i==`function`?function(e){return i.apply(n,e)}:i}var Ti=1024,Ei=1.5,Di=4096,Oi=-1,ki=function(){function e(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ti;U(this,e),V(this,`texture`,null),V(this,`dirty`,!1),V(this,`dirtyRangeStart`,1/0),V(this,`dirtyRangeEnd`,-1),V(this,`indexMap`,new Map),V(this,`freeIndices`,[]),V(this,`nextIndex`,0),this.gl=t,this.TEXELS_PER_ITEM=n,this.capacity=this.roundUpToPowerOfTwo(r);var i=this.computeTextureDimensions(this.capacity);this.textureWidth=i.width,this.textureHeight=i.height,this.data=new Float32Array(this.textureWidth*this.textureHeight*4),this.createTexture()}return W(e,[{key:`computeTextureDimensions`,value:function(e){var t=e*this.TEXELS_PER_ITEM,n=Math.min(t,Di);return{width:n,height:Math.ceil(t/n)}}},{key:`roundUpToPowerOfTwo`,value:function(e){return 2**Math.ceil(Math.log2(Math.max(1,e)))}},{key:`createTexture`,value:function(){var e=this.gl;this.texture=e.createTexture(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.textureWidth,this.textureHeight,0,e.RGBA,e.FLOAT,this.data),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null)}},{key:`resize`,value:function(e){if(!(e<=this.capacity)){var t=this.roundUpToPowerOfTwo(Math.ceil(e*Ei)),n=this.gl,r=this.computeTextureDimensions(t),i=new Float32Array(r.width*r.height*4);i.set(this.data),this.texture&&n.deleteTexture(this.texture),this.data=i,this.capacity=t,this.textureWidth=r.width,this.textureHeight=r.height,this.createTexture(),this.dirty=!0,this.dirtyRangeStart=0,this.dirtyRangeEnd=this.nextIndex}}},{key:`allocate`,value:function(e){var t=this.indexMap.get(e);if(t!==void 0)return t;var n;return this.freeIndices.length>0?n=this.freeIndices.pop():(n=this.nextIndex++,n>=this.capacity&&this.resize(n+1)),this.indexMap.set(e,n),n}},{key:`free`,value:function(e){var t=this.indexMap.get(e);if(t!==void 0){this.indexMap.delete(e),this.freeIndices.push(t);for(var n=t*this.TEXELS_PER_ITEM*4,r=0;r<this.TEXELS_PER_ITEM*4;r++)this.data[n+r]=0;this.markDirty(t)}}},{key:`getIndex`,value:function(e){return this.indexMap.get(e)??-1}},{key:`has`,value:function(e){return this.indexMap.has(e)}},{key:`markDirty`,value:function(e){this.dirty=!0,this.dirtyRangeStart=Math.min(this.dirtyRangeStart,e),this.dirtyRangeEnd=Math.max(this.dirtyRangeEnd,e+1)}},{key:`upload`,value:function(){if(this.dirty&&this.texture){var e=this.gl,t=this.textureWidth;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture);var n=this.dirtyRangeStart*this.TEXELS_PER_ITEM,r=Math.min(this.dirtyRangeEnd*this.TEXELS_PER_ITEM,this.capacity*this.TEXELS_PER_ITEM);if(n<r)for(var i=Math.floor(n/t),a=Math.floor((r-1)/t),o=i;o<=a;o++){var s=o*t,c=Math.min(s+t,this.capacity*this.TEXELS_PER_ITEM),l=Math.max(n,s),u=Math.min(r,c);if(l<u){var d=l-s,f=u-l,p=this.data.subarray(l*4,u*4);e.texSubImage2D(e.TEXTURE_2D,0,d,o,f,1,e.RGBA,e.FLOAT,p)}}e.bindTexture(e.TEXTURE_2D,null),this.dirty=!1,this.dirtyRangeStart=1/0,this.dirtyRangeEnd=-1}}},{key:`bind`,value:function(e){var t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture)}},{key:`getTexture`,value:function(){return this.texture}},{key:`getCapacity`,value:function(){return this.capacity}},{key:`getTextureWidth`,value:function(){return this.textureWidth}},{key:`getTextureHeight`,value:function(){return this.textureHeight}},{key:`getTexelsPerItem`,value:function(){return this.TEXELS_PER_ITEM}},{key:`getCount`,value:function(){return this.indexMap.size}},{key:`getHighWaterMark`,value:function(){return this.nextIndex}},{key:`isDirty`,value:function(){return this.dirty}},{key:`clear`,value:function(){this.indexMap.clear(),this.freeIndices=[],this.nextIndex=0,this.data.fill(0),this.dirty=!0,this.dirtyRangeStart=0,this.dirtyRangeEnd=this.capacity}},{key:`restore`,value:function(){this.createTexture(),this.dirty=!1,this.dirtyRangeStart=1/0,this.dirtyRangeEnd=-1}},{key:`kill`,value:function(){this.texture&&=(this.gl.deleteTexture(this.texture),null),this.indexMap.clear(),this.freeIndices=[]}}])}();function Ai(e){var t={},n={},r=0,i=B(e),a;try{for(i.s();!(a=i.n()).done;){var o=a.value,s=B(o.attributes),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=l.name.replace(/^a_/,``);u in t||(t[u]=r,n[u]=l,r+=l.size)}}catch(e){s.e(e)}finally{s.f()}}}catch(e){i.e(e)}finally{i.f()}return{floatsPerItem:r,texelsPerItem:Math.max(1,Math.ceil(r/4)),offsets:t,specs:n}}var ji=function(e){function t(e,n,r){var i;return U(this,t),i=G(this,t,[e,n.texelsPerItem,r]),i.floatsPerItem=n.floatsPerItem,i}return K(t,e),W(t,[{key:`updateAllAttributes`,value:function(e,t){var n=this.indexMap.get(e);n===void 0&&(n=this.allocate(e));for(var r=n*this.TEXELS_PER_ITEM*4,i=Math.min(t.length,this.floatsPerItem),a=0;a<i;a++)this.data[r+a]=t[a];this.markDirty(n)}},{key:`updateAllAttributesAtRow`,value:function(e,t){e>=this.capacity&&this.resize(e+1);for(var n=e*this.TEXELS_PER_ITEM*4,r=Math.min(t.length,this.floatsPerItem),i=0;i<r;i++)this.data[n+i]=t[i];this.markDirty(e)}}])}(ki);function Mi(e,t,n){for(var r=[],i=new Set,a=0;a<e.length;a++){var o=e[a],s=B(o.attributes),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=l.name.replace(/^a_/,``);if(!i.has(u)){i.add(u);var d=t.offsets[u];if(d!==void 0){var f=n?.get(a);r.push({sourceKey:l.source||u,packedOffset:d,size:l.size,isColor:l.size===4&&!!l.normalized,defaultNum:typeof l.defaultValue==`number`?l.defaultValue:+(l.defaultValue===!0),defaultColor:typeof l.defaultValue==`string`?l.defaultValue:``,sourceIndex:a,hasLifecycleHook:!!(f!=null&&f.getAttributeData)})}}}}catch(e){s.e(e)}finally{s.f()}}return r}function Ni(e,t,n,r,i,a){n.fill(0);for(var o=0,s=e.length;o<s;o++){var c=e[o],l=c.packedOffset,u=void 0;if(c.hasLifecycleHook?(u=i.get(c.sourceIndex-a).getAttributeData(t,c.sourceKey),u===null&&(u=t[c.sourceKey])):u=t[c.sourceKey],c.isColor){var d=z(Qt(typeof u==`string`?u:c.defaultColor||r),4),f=d[0],p=d[1],m=d[2],h=d[3];n[l]=f/255,n[l+1]=p/255,n[l+2]=m/255,n[l+3]=h/255}else if(c.size===1)n[l]=typeof u==`number`?u:typeof u==`boolean`?+!!u:c.defaultNum;else{var g=Array.isArray(u)?u:null;if(g)for(var _=0;_<c.size;_++)n[l+_]=g[_]??0}}}var Pi=[`r`,`g`,`b`,`a`];function Fi(e,t){var n=e.offsets,r=e.specs,i=e.texelsPerItem,a=e.floatsPerItem,o=Object.keys(n);if(o.length===0||a===0)return{fetchCode:``,varyingAssignments:``};var s=t.varPrefix,c=t.baseTexelExpr,l=t.textureWidthUniform,u=t.textureSamplerUniform,d=t.outputPrefix,f=d===void 0?`v_`:d,p=[];p.push(`  int ${s}BaseTexel = ${c};`),p.push(``);for(var m=0;m<i;m++)p.push(`  ivec2 ${s}Coord${m} = ivec2((${s}BaseTexel + ${m}) % ${l}, (${s}BaseTexel + ${m}) / ${l});`),p.push(`  vec4 ${s}Texel${m} = texelFetch(${u}, ${s}Coord${m}, 0);`);p.push(``);for(var h=[],g=function(){var e=v[_],t=r[e],i=n[e],a=Math.floor(i/4),o=i%4,c=`${s}Texel${a}`,l=`${s}Texel${a+1}`,u=`${s}Fetched_${e}`;if(t.size===1)p.push(`  float ${u} = ${c}.${Pi[o]};`);else if(t.size===4&&o===0)p.push(`  vec4 ${u} = ${c};`);else{var d=o+t.size;if(d<=4){var m=`vec${t.size}`,g=Pi.slice(o,d).join(``);p.push(`  ${m} ${u} = ${c}.${g};`)}else{var y=t.size===4?`vec4`:`vec${t.size}`,b=Pi.slice(o).map(function(e){return`${c}.${e}`}),x=Pi.slice(0,d-4).map(function(e){return`${l}.${e}`}),S=[].concat(q(b),q(x)).join(`, `);p.push(`  ${y} ${u} = ${y}(${S});`)}}h.push(`  ${f}${e} = ${u};`)},_=0,v=o;_<v.length;_++)g();return{fetchCode:p.join(`
`),varyingAssignments:h.join(`
`)}}function Ii(e,t,n){if(t&&n.type!==`sampler2D`)switch(n.type){case`float`:e.uniform1f(t,n.value);break;case`int`:case`bool`:e.uniform1i(t,n.value);break;case`vec2`:e.uniform2fv(t,n.value);break;case`vec3`:e.uniform3fv(t,n.value);break;case`vec4`:e.uniform4fv(t,n.value);break;case`mat3`:e.uniformMatrix3fv(t,!1,n.value);break;case`mat4`:e.uniformMatrix4fv(t,!1,n.value)}}var Li=V(V(V(V(V(V(V(V({},WebGL2RenderingContext.BOOL,1),WebGL2RenderingContext.BYTE,1),WebGL2RenderingContext.UNSIGNED_BYTE,1),WebGL2RenderingContext.SHORT,2),WebGL2RenderingContext.UNSIGNED_SHORT,2),WebGL2RenderingContext.INT,4),WebGL2RenderingContext.UNSIGNED_INT,4),WebGL2RenderingContext.FLOAT,4);function Ri(e){var t=e.match(/^(#version[^\n]*\n)/);return t?t[1]+`#define PICKING_MODE
`+e.slice(t[1].length):`#define PICKING_MODE
`+e}var zi=function(){function e(t,n,r){U(this,e),V(this,`floats`,new Float32Array),V(this,`ints`,new Uint32Array),V(this,`constantArray`,new Float32Array),V(this,`capacity`,0),V(this,`verticesCount`,0),V(this,`bufferGeneration`,0),V(this,`uploadedGeneration`,new Map),V(this,`constantBufferGeneration`,0),V(this,`uploadedConstantGeneration`,new Map),V(this,`renderOffset`,0),V(this,`renderCount`,-1),V(this,`debugStats`,{drawCalls:0,verticesDrawn:0,bufferUploadBytes:0}),V(this,`shadersLogged`,!1),V(this,`pickProgram`,null);var i=this.getDefinition();if(this.VERTICES=i.VERTICES,this.VERTEX_SHADER_SOURCE=i.VERTEX_SHADER_SOURCE,this.FRAGMENT_SHADER_SOURCE=i.FRAGMENT_SHADER_SOURCE,this.UNIFORMS=i.UNIFORMS,this.ATTRIBUTES=i.ATTRIBUTES,this.METHOD=i.METHOD,this.CONSTANT_ATTRIBUTES=`CONSTANT_ATTRIBUTES`in i?i.CONSTANT_ATTRIBUTES:[],this.CONSTANT_DATA=`CONSTANT_DATA`in i?i.CONSTANT_DATA:[],this.isInstanced=`CONSTANT_ATTRIBUTES`in i,this.ATTRIBUTES_ITEMS_COUNT=Hr(this.ATTRIBUTES),this.STRIDE=this.VERTICES*this.ATTRIBUTES_ITEMS_COUNT,this.renderer=r,this.normalProgram=this.getProgramInfo(`normal`,t,i.VERTEX_SHADER_SOURCE,i.FRAGMENT_SHADER_SOURCE,null),this.pickProgram=this.getProgramInfo(`pick`,t,Ri(i.VERTEX_SHADER_SOURCE),Ri(i.FRAGMENT_SHADER_SOURCE),null),this.isInstanced){var a=Hr(this.CONSTANT_ATTRIBUTES);if(this.CONSTANT_DATA.length!==this.VERTICES)throw Error(`Program: error while getting constant data (expected ${this.VERTICES} items, received ${this.CONSTANT_DATA.length} instead)`);this.constantArray=new Float32Array(this.CONSTANT_DATA.length*a);for(var o=0;o<this.CONSTANT_DATA.length;o++){var s=this.CONSTANT_DATA[o];if(s.length!==a)throw Error(`Program: error while getting constant data (one vector has ${s.length} items instead of ${a})`);for(var c=0;c<s.length;c++)this.constantArray[o*a+c]=s[c]}this.STRIDE=this.ATTRIBUTES_ITEMS_COUNT}}return W(e,[{key:`kill`,value:function(){qr(this.normalProgram),this.pickProgram&&qr(this.pickProgram)}},{key:`resetDebugStats`,value:function(){this.debugStats.drawCalls=0,this.debugStats.verticesDrawn=0,this.debugStats.bufferUploadBytes=0}},{key:`getProgramInfo`,value:function(e,t,n,r,i){var a=t.createBuffer();if(a===null)throw Error(`Program: error while creating the WebGL buffer.`);var o=Wr(t,n),s=Gr(t,r),c=Kr(t,[o,s]),l={};this.UNIFORMS.forEach(function(e){var n=t.getUniformLocation(c,e);n&&(l[e]=n)});var u={};this.ATTRIBUTES.forEach(function(e){u[e.name]=t.getAttribLocation(c,e.name)});var d;if(this.isInstanced&&(this.CONSTANT_ATTRIBUTES.forEach(function(e){u[e.name]=t.getAttribLocation(c,e.name)}),d=t.createBuffer(),d===null))throw Error(`Program: error while creating the WebGL constant buffer.`);return{name:e,program:c,gl:t,frameBuffer:i,buffer:a,constantBuffer:d||{},uniformLocations:l,attributeLocations:u,isPicking:e===`pick`,vertexShader:o,fragmentShader:s}}},{key:`bindProgram`,value:function(e){var t=this,n=0,r=e.gl,i=e.buffer;if(this.isInstanced){if(r.bindBuffer(r.ARRAY_BUFFER,e.constantBuffer),n=0,this.CONSTANT_ATTRIBUTES.forEach(function(r){return n+=t.bindAttribute(r,e,n,!1)}),this.uploadedConstantGeneration.get(e.constantBuffer)!==this.constantBufferGeneration){var a;r.bufferData(r.ARRAY_BUFFER,this.constantArray,r.STATIC_DRAW),this.uploadedConstantGeneration.set(e.constantBuffer,this.constantBufferGeneration),(a=this.renderer)!=null&&a.getSetting(`DEBUG_logRenderStats`)&&(this.debugStats.bufferUploadBytes+=this.constantArray.byteLength)}if(r.bindBuffer(r.ARRAY_BUFFER,e.buffer),n=this.renderOffset*this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT,this.ATTRIBUTES.forEach(function(r){return n+=t.bindAttribute(r,e,n,!0)}),this.uploadedGeneration.get(i)!==this.bufferGeneration){var o;r.bufferData(r.ARRAY_BUFFER,this.floats,r.DYNAMIC_DRAW),this.uploadedGeneration.set(i,this.bufferGeneration),(o=this.renderer)!=null&&o.getSetting(`DEBUG_logRenderStats`)&&(this.debugStats.bufferUploadBytes+=this.floats.byteLength)}}else if(r.bindBuffer(r.ARRAY_BUFFER,i),n=0,this.ATTRIBUTES.forEach(function(r){return n+=t.bindAttribute(r,e,n)}),this.uploadedGeneration.get(i)!==this.bufferGeneration){var s;r.bufferData(r.ARRAY_BUFFER,this.floats,r.DYNAMIC_DRAW),this.uploadedGeneration.set(i,this.bufferGeneration),(s=this.renderer)!=null&&s.getSetting(`DEBUG_logRenderStats`)&&(this.debugStats.bufferUploadBytes+=this.floats.byteLength)}r.bindBuffer(r.ARRAY_BUFFER,null)}},{key:`unbindProgram`,value:function(e){var t=this;this.isInstanced?(this.CONSTANT_ATTRIBUTES.forEach(function(n){return t.unbindAttribute(n,e,!1)}),this.ATTRIBUTES.forEach(function(n){return t.unbindAttribute(n,e,!0)})):this.ATTRIBUTES.forEach(function(n){return t.unbindAttribute(n,e)})}},{key:`bindAttribute`,value:function(e,t,n,r){var i=Li[e.type];if(typeof i!=`number`)throw Error(`Program.bind: yet unsupported attribute type "${e.type}"`);var a=t.attributeLocations[e.name],o=t.gl;if(a!==-1){o.enableVertexAttribArray(a);var s=this.isInstanced?(r?this.ATTRIBUTES_ITEMS_COUNT:Hr(this.CONSTANT_ATTRIBUTES))*Float32Array.BYTES_PER_ELEMENT:this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT;o.vertexAttribPointer(a,e.size,e.type,e.normalized||!1,s,n),this.isInstanced&&r&&o.vertexAttribDivisor(a,1)}return e.size*i}},{key:`unbindAttribute`,value:function(e,t,n){var r=t.attributeLocations[e.name],i=t.gl;r!==-1&&(i.disableVertexAttribArray(r),this.isInstanced&&n&&i.vertexAttribDivisor(r,0))}},{key:`reallocate`,value:function(e){e!==this.capacity&&(this.capacity=e,this.verticesCount=this.VERTICES*e,this.floats=new Float32Array(this.isInstanced?this.capacity*this.ATTRIBUTES_ITEMS_COUNT:this.verticesCount*this.ATTRIBUTES_ITEMS_COUNT),this.ints=new Uint32Array(this.floats.buffer),this.invalidateBuffers())}},{key:`invalidateBuffers`,value:function(){this.bufferGeneration++,this.constantBufferGeneration++}},{key:`hasNothingToRender`,value:function(){return this.verticesCount===0}},{key:`setTypedUniform`,value:function(e,t){Ii(t.gl,t.uniformLocations[e.name]??null,e)}},{key:`renderProgram`,value:function(e,t){var n=t.gl,r=t.program;t.isPicking?n.disable(n.BLEND):n.enable(n.BLEND),n.useProgram(r),this.setUniforms(e,t),this.drawWebGL(this.METHOD,t)}},{key:`render`,value:function(e,t,n){var r;if(!this.shadersLogged&&(r=this.renderer)!=null&&r.getSetting(`DEBUG_logShaders`)&&(this.shadersLogged=!0,console.log(`[sigma] DEBUG_logShaders: ${this.constructor.name}`,{normal:{vertexShaderSource:this.VERTEX_SHADER_SOURCE,fragmentShaderSource:this.FRAGMENT_SHADER_SOURCE},pick:{vertexShaderSource:Ri(this.VERTEX_SHADER_SOURCE),fragmentShaderSource:Ri(this.FRAGMENT_SHADER_SOURCE)}})),!this.hasNothingToRender()){this.renderOffset=t??0,this.renderCount=n??-1;var i=this.normalProgram.gl;if(i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,e.width*e.pixelRatio,e.height*e.pixelRatio),this.bindProgram(this.normalProgram),this.renderProgram(e,this.normalProgram),this.unbindProgram(this.normalProgram),this.pickProgram&&e.pickingFrameBuffer){var a=Math.ceil(e.width*e.pixelRatio/e.downSizingRatio),o=Math.ceil(e.height*e.pixelRatio/e.downSizingRatio);i.bindFramebuffer(i.FRAMEBUFFER,e.pickingFrameBuffer),i.viewport(0,0,a,o),this.bindProgram(this.pickProgram),this.renderProgram(e,this.pickProgram),this.unbindProgram(this.pickProgram),i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,e.width*e.pixelRatio,e.height*e.pixelRatio)}}}},{key:`drawWebGL`,value:function(e,t){var n,r=t.gl,i=this.renderCount>=0?this.renderCount:this.capacity;(n=this.renderer)!=null&&n.getSetting(`DEBUG_logRenderStats`)&&(this.debugStats.drawCalls++,this.debugStats.verticesDrawn+=i*this.VERTICES),this.isInstanced?r.drawArraysInstanced(e,0,this.VERTICES,i):r.drawArrays(e,this.renderOffset*this.VERTICES,i*this.VERTICES)}}])}(),Bi={below:0,above:1,left:2,right:3};function Vi(){return`#version 300 es
precision highp float;

uniform mat3 u_matrix;
uniform vec2 u_resolution;
uniform float u_labelPixelSnapping;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform float u_pixelRatio;
uniform float u_labelMargin;
uniform float u_zoomLabelSizeRatio;

uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_nodeFrameTexture;
uniform int u_nodeFrameTextureWidth;

// Atlas size is fixed at 2048×2048 — matches AttachmentManager.ATLAS_SIZE.
uniform sampler2D u_atlasTexture;
const vec2 u_atlasSize = vec2(2048.0);

// Per-instance
in float a_nodeIndex;           // node-data texture index
in vec4 a_atlasRect;            // x, y, width, height in atlas pixels
in vec2 a_attachmentSize;       // attachment dimensions (CSS px)
in float a_positionMode;        // label position: 0=right 1=left 2=above 3=below 4=over
in float a_attachmentPlacement; // 0=below 1=above 2=left 3=right (relative to label)
in float a_labelWidth;          // label width (CSS px)
in float a_labelHeight;         // label height: font line box (CSS px)
in float a_textHeight;          // actual glyph height (CSS px)
in float a_labelAngle;          // label rotation angle (radians)

// Per-vertex (constant)
in vec2 a_quadCorner;           // [-1,-1], [1,-1], [-1,1], [1,1]

out vec2 v_texCoord;

${_i}
${vi}
${bi}
${gi}
${ui}

void main() {
  int nodeIdx = int(a_nodeIndex);

  // Node data: (x, y, size, shapeId).
  vec4 nodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  vec2 nodePos = nodeData.xy;
  float nodeSize = nodeData.z;

  // Normalized edge distance from the shared frame texture (the frame-pass ran
  // the SDF search once; we just read the result).
  float edgeDist = readFrameTexel(u_nodeFrameTexture, u_nodeFrameTextureWidth, nodeIdx).r;

  // Per-node label rotation alignment: 0 = viewport, 1 = label turns with camera.
  float labelRotation = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx).g;

  vec3 nodeClip = u_matrix * vec3(nodePos, 1.0);

  // Node radius in physical pixels (matches label/background).
  float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
  float nodeRadiusGraphSpace = nodeSize * u_correctionRatio / u_sizeRatio * 2.0;
  float nodeRadiusPixels = nodeRadiusGraphSpace * matrixScaleX * u_resolution.x / 2.0;

  // CSS-px inputs -> physical px, scaled by the zoom-dependent label ratio, so
  // the attachment stays glued to the label box exactly as the label scales.
  float zoomScale = u_zoomLabelSizeRatio;
  vec2 labelHalf = vec2(a_labelWidth, a_labelHeight) * 0.5 * zoomScale * u_pixelRatio;
  vec2 attachHalf = a_attachmentSize * 0.5 * zoomScale * u_pixelRatio;
  float gap = ${2 .toFixed(1)} * zoomScale * u_pixelRatio;
  float labelMargin = u_labelMargin * zoomScale * u_pixelRatio;

  // Graph-aligned labels add the camera angle so the attachment orbits with the box.
  mat2 labelRotMat = rotate2D(a_labelAngle - labelRotation * u_cameraAngle);

  // Label box center relative to the node center (pre-rotation). The shape-aware
  // edge distance comes from the frame texture, so placement matches the label.
  vec2 boxCenter = vec2(0.0);
  if (a_positionMode < 4.0) {
    float labelStart = nodeRadiusPixels * edgeDist + labelMargin;
    float textHalf = a_textHeight * 0.5 * zoomScale * u_pixelRatio;
    boxCenter = labelBoxCenter(a_positionMode, labelStart, labelHalf, textHalf);
  }

  // Horizontal anchor of below/above attachments tracks the label position, so
  // the attachment hangs from the label edge nearest the node (or is centered
  // when the label itself is node-centered): right->left, left->right, else center.
  float anchorX = 0.0;
  if (a_positionMode < 0.5) anchorX = -labelHalf.x + attachHalf.x;       // right label
  else if (a_positionMode < 1.5) anchorX = labelHalf.x - attachHalf.x;   // left label

  // Attachment center relative to the box (pre-rotation, Y-down). This offset
  // depends only on the box, the gap and the attachment size — never the shape.
  vec2 attachCenter;
  if (a_attachmentPlacement < 0.5) {
    // below
    attachCenter = boxCenter + vec2(anchorX, labelHalf.y + gap + attachHalf.y);
  } else if (a_attachmentPlacement < 1.5) {
    // above
    attachCenter = boxCenter + vec2(anchorX, -(labelHalf.y + gap + attachHalf.y));
  } else if (a_attachmentPlacement < 2.5) {
    // left, top-aligned
    attachCenter = boxCenter + vec2(-(labelHalf.x + gap + attachHalf.x), -labelHalf.y + attachHalf.y);
  } else {
    // right, top-aligned
    attachCenter = boxCenter + vec2(labelHalf.x + gap + attachHalf.x, -labelHalf.y + attachHalf.y);
  }

  // Rotate the whole assembly by the label angle, around the node center.
  vec2 rotatedCenter = labelRotMat * attachCenter;
  vec2 cornerOffset = labelRotMat * (a_quadCorner * attachHalf);

  // Node center in screen px (Y-down).
  vec2 nodeScreen = vec2(
    (nodeClip.x + 1.0) * u_resolution.x,
    (1.0 - nodeClip.y) * u_resolution.y
  ) * 0.5;

  // Snap node center to the pixel grid so label/backdrop/attachment move as one.
  vec2 snapDelta = (round(nodeScreen) - nodeScreen) * u_labelPixelSnapping;

  // Snap the quad's top-left to integer pixels so atlas texels map 1:1.
  vec2 centerScreen = nodeScreen + rotatedCenter + snapDelta;
  vec2 topLeft = centerScreen - attachHalf;
  topLeft = mix(topLeft, round(topLeft), u_labelPixelSnapping);
  centerScreen = topLeft + attachHalf;

  vec2 vertexScreen = centerScreen + cornerOffset;
  gl_Position = vec4(
    vertexScreen.x * 2.0 / u_resolution.x - 1.0,
    1.0 - vertexScreen.y * 2.0 / u_resolution.y,
    0.0, 1.0
  );

  vec2 texOrigin = a_atlasRect.xy / u_atlasSize;
  vec2 texSize = a_atlasRect.zw / u_atlasSize;
  vec2 uv = (a_quadCorner + 1.0) / 2.0;
  v_texCoord = texOrigin + uv * texSize;
}
`}var Hi=`#version 300 es
precision highp float;

uniform sampler2D u_atlasTexture;

in vec2 v_texCoord;

layout(location = 0) out vec4 fragColor;
#ifdef PICKING_MODE
layout(location = 1) out vec4 pickColor;
#endif

void main() {
  // Canvas textures are premultiplied; output directly for (ONE, 1-SRC_ALPHA) blending
  vec4 color = texture(u_atlasTexture, v_texCoord);
  if (color.a < 0.01) discard;
  fragColor = color;
#ifdef PICKING_MODE
  pickColor = vec4(0.0); // Attachments are not pickable
#endif
}
`;function Ui(e,t,n,r){var i=r.label,a=i===void 0?{}:i,o=a.margin??5,s=a.zoomToLabelSizeRatioFunction??function(){return 1},c=Vi(),l=Hi,u=function(e){function t(){var e;U(this,t);var n=[...arguments];return e=G(this,t,[].concat(n)),V(e,`totalCount`,0),V(e,`bufferCapacity`,0),e}return K(t,e),W(t,[{key:`getDefinition`,value:function(){var e=WebGL2RenderingContext,t=e.FLOAT;return{VERTICES:4,VERTEX_SHADER_SOURCE:c,FRAGMENT_SHADER_SOURCE:l,METHOD:e.TRIANGLE_STRIP,UNIFORMS:[`u_matrix`,`u_resolution`,`u_labelPixelSnapping`,`u_sizeRatio`,`u_correctionRatio`,`u_cameraAngle`,`u_pixelRatio`,`u_labelMargin`,`u_zoomLabelSizeRatio`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_nodeFrameTexture`,`u_nodeFrameTextureWidth`,`u_atlasTexture`],ATTRIBUTES:[{name:`a_nodeIndex`,size:1,type:t},{name:`a_atlasRect`,size:4,type:t},{name:`a_attachmentSize`,size:2,type:t},{name:`a_positionMode`,size:1,type:t},{name:`a_attachmentPlacement`,size:1,type:t},{name:`a_labelWidth`,size:1,type:t},{name:`a_labelHeight`,size:1,type:t},{name:`a_textHeight`,size:1,type:t},{name:`a_labelAngle`,size:1,type:t}],CONSTANT_ATTRIBUTES:[{name:`a_quadCorner`,size:2,type:t}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:`processAttachment`,value:function(e,t){var n=this.floats,r=e*this.STRIDE;n[r++]=t.nodeIndex,n[r++]=t.atlasX,n[r++]=t.atlasY,n[r++]=t.atlasW,n[r++]=t.atlasH,n[r++]=t.attachWidth,n[r++]=t.attachHeight,n[r++]=t.positionMode,n[r++]=t.attachmentPlacement,n[r++]=t.labelWidth,n[r++]=t.labelHeight,n[r++]=t.textHeight,n[r++]=t.labelAngle}},{key:`setUniforms`,value:function(e,n){var r=n.gl,i=n.uniformLocations;r.uniformMatrix3fv(i.u_matrix,!1,e.matrix),r.uniform2f(i.u_resolution,e.width*e.pixelRatio,e.height*e.pixelRatio),r.uniform1f(i.u_labelPixelSnapping,e.labelPixelSnapping),r.uniform1f(i.u_sizeRatio,e.sizeRatio),r.uniform1f(i.u_correctionRatio,e.correctionRatio),r.uniform1f(i.u_cameraAngle,e.cameraAngle),r.uniform1f(i.u_pixelRatio,e.pixelRatio),r.uniform1f(i.u_labelMargin,t.labelMargin),r.uniform1f(i.u_zoomLabelSizeRatio,1/s(e.zoomRatio)),r.uniform1i(i.u_nodeDataTexture,e.nodeDataTextureUnit),r.uniform1i(i.u_nodeDataTextureWidth,e.nodeDataTextureWidth),r.uniform1i(i.u_nodeFrameTexture,e.nodeFrameTextureUnit),r.uniform1i(i.u_nodeFrameTextureWidth,e.nodeFrameTextureWidth),r.uniform1i(i.u_atlasTexture,7)}},{key:`reallocateAttachments`,value:function(e){this.totalCount=e,e>this.bufferCapacity&&(this.bufferCapacity=Math.max(e,Math.ceil(this.bufferCapacity*1.5)||10),X(t,`reallocate`,this,3)([this.bufferCapacity]))}},{key:`hasNothingToRender`,value:function(){return this.totalCount===0}},{key:`drawWebGL`,value:function(e,t){var n=t.gl;this.totalCount!==0&&n.drawArraysInstanced(e,0,this.VERTICES,this.totalCount)}}])}(zi);return V(u,`labelMargin`,o),new u(e,t,n)}var Wi=5;function Gi(e,t){return[].concat(q(t),q(e.map(function(e){return{attributes:e.attributes??[]}})))}function Ki(e,t){var n=Ai(Gi(e,t)),r=new Set(e.flatMap(function(e){return e.attributes??[]}).map(function(e){return e.name.replace(/^a_/,``)})),i={},a={},o=B(r),s;try{for(o.s();!(s=o.n()).done;){var c=s.value;i[c]=n.offsets[c],a[c]=n.specs[c]}}catch(e){o.e(e)}finally{o.f()}return H(H({},n),{},{offsets:i,specs:a})}function qi(e,t){var n=new Set([`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_cameraAngle`,`u_pickingPadding`,`u_nodeDataTexture`,`u_layerAttributeTexture`]),r=new Set,i=e.flatMap(function(e){return e.uniforms}).filter(function(e){return n.has(e.name)||r.has(e.name)?!1:(r.add(e.name),!0)}).map(function(e){return`uniform ${e.type} ${e.name};`}).join(`
`),a=t.flatMap(function(e){return e.uniforms}).filter(function(e){return n.has(e.name)||r.has(e.name)?!1:(r.add(e.name),!0)}).map(function(e){return`uniform ${e.type} ${e.name};`}).join(`
`),o=Gi(e,t),s=new Set,c=o.flatMap(function(e){return e.attributes}).filter(function(e){var t=e.name.replace(/^a_/,``);return!s.has(t)&&(s.add(t),!0)}).map(function(e){var t=e.name.replace(/^a_/,``);return`out ${e.size===1?`float`:`vec${e.size}`} v_${t};`}).join(`
`),l=Fi(Ai(o),{varPrefix:`layer`,baseTexelExpr:`nodeIdx * u_layerAttributeTexelsPerNode`,textureWidthUniform:`u_layerAttributeTextureWidth`,textureSamplerUniform:`u_layerAttributeTexture`});return`#version 300 es

// Standard node attributes (per instance) - minimal buffer usage
in float a_nodeIndex;  // Index into node data texture AND layer attribute texture
in vec4 a_id;          // Node ID for picking
in float a_opacity;    // Node opacity, applied once to the final fragment

// Constant attributes (per vertex, same for all instances)
in vec2 a_quadCorner;  // (-1,-1), (1,-1), (1,1), (-1,1) for quad corners

// Standard uniforms
uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
#ifdef PICKING_MODE
uniform float u_pickingPadding;
#endif
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;

// Layer attribute texture uniforms
uniform sampler2D u_layerAttributeTexture;
uniform int u_layerAttributeTextureWidth;
uniform int u_layerAttributeTexelsPerNode;

${i}
${a}

// Standard varyings
out vec2 v_uv;                    // Normalized coordinates [-1, 1]
out vec4 v_id;
out float v_opacity;
out float v_antialiasingWidth;    // Width for antialiasing in UV space
out float v_pixelSize;            // Node size in pixels (for pixel-mode borders)
out float v_pixelToUV;            // Conversion factor: multiply by this to convert screen pixels to UV units
out float v_shapeId;              // Shape ID for multi-shape programs

// Layer varyings
${c}

// Node-data fetch helpers (geometry texel + rotation-flags texel)
${_i}
${vi}

void main() {
  // Fetch node geometry: vec4(x, y, size, shapeId).
  int nodeIdx = int(a_nodeIndex);

  // Hidden nodes are flagged with a negative row by NodeProgram.process(). Push
  // the whole quad outside the clip volume: every vertex lands at the same
  // out-of-range position, so the primitive is fully clipped and rasterizes
  // nothing — neither to the frame buffer nor to the picking buffer.
  if (nodeIdx < 0) {
    gl_Position = vec4(2.0, 0.0, 0.0, 1.0);
    v_id = vec4(0.0);
    return;
  }

  vec4 nodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  vec2 a_position = nodeData.xy;
  float a_size = nodeData.z;
  v_shapeId = nodeData.w;  // Pass shape ID to fragment shader

  // Per-node rotation alignment: 0 = viewport (screen-upright), 1 = graph.
  float nodeRotation = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx).r;

${l.fetchCode}

  // Calculate the actual size in pixels
  float size = a_size * u_correctionRatio / u_sizeRatio * 2.0;

  // In PICKING_MODE, inflate the quad by nodePickingPadding pixels on each side
  #ifdef PICKING_MODE
    float paddedSize = size + u_pickingPadding * u_correctionRatio;
    vec2 offset = a_quadCorner * paddedSize;
  #else
    vec2 offset = a_quadCorner * size;
  #endif
  // Counter-rotate the quad offset so viewport-aligned nodes stay upright as the
  // camera turns. Graph-aligned nodes (nodeRotation=1) skip it and turn with the
  // camera. The angle scales by (1 - nodeRotation) so both fall out of one path.
  {
    float ca = u_cameraAngle * (1.0 - nodeRotation);
    float c = cos(ca);
    float s = sin(ca);
    offset = mat2(c, s, -s, c) * offset;
  }
  vec2 position = a_position + offset;

  gl_Position = vec4(
    (u_matrix * vec3(position, 1)).xy,
    0,
    1
  );

  // In PICKING_MODE, UV is scaled beyond [-1, 1] to match the inflated quad
  #ifdef PICKING_MODE
    v_uv = a_quadCorner * (paddedSize / size);
  #else
    v_uv = a_quadCorner;
  #endif

  // Pass ID to fragment shader
  v_id = a_id;
  v_opacity = a_opacity;

  // Pass pixel size for layers that need pixel-mode calculations
  // Multiply by 2 because 'size' is half-width (offset from center), not full diameter
  v_pixelSize = size * 2.0;

  // Conversion factor from screen pixels to UV units
  // Same derivation as v_antialiasingWidth which represents ~1 pixel in UV space
  // P pixels in UV space = P * u_correctionRatio / size
  v_pixelToUV = u_correctionRatio / size;

  // We use an antialiasing width of 1px (so v_pixelToUV)
  v_antialiasingWidth = v_pixelToUV;

  // Pass layer attributes to fragment shader (fetched from texture)
${l.varyingAssignments}
}
`}function Ji(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,i=t.map(function(e,t){var n=`layer_${e.name}`,r=[].concat(q(e.attributes.map(function(e){return`v_${e.name.replace(/^a_/,``)}`})),q(e.uniforms.map(function(e){return e.name}))).join(`, `);return`  // Layer ${t+1}: ${e.name}
  color = blendOver(color, ${n}(${r}));`}).join(`

`),a=new Set([`u_correctionRatio`]),o=new Set,s=e.flatMap(function(e){return e.uniforms}).filter(function(e){return a.has(e.name)||o.has(e.name)?!1:(o.add(e.name),!0)}).map(function(e){return`uniform ${e.type} ${e.name};`}).join(`
`),c=t.flatMap(function(e){return e.uniforms}).filter(function(e){return a.has(e.name)||o.has(e.name)?!1:(o.add(e.name),!0)}).map(function(e){return`uniform ${e.type} ${e.name};`}).join(`
`),l=new Set;return`#version 300 es
precision highp float;

// Standard varyings
in vec2 v_uv;
in vec4 v_id;
in float v_opacity;
in float v_antialiasingWidth;
in float v_pixelSize;
in float v_pixelToUV;
in float v_shapeId;  // Shape ID for multi-shape programs

// Standard uniforms (needed for some layer calculations like pixel-mode borders)
uniform float u_correctionRatio;
#ifdef PICKING_MODE
uniform float u_pickingPadding;
#endif

// Shape uniforms
${s}

// Layer uniforms
${c}

// Layer varyings
${Gi(e,t).flatMap(function(e){return e.attributes}).filter(function(e){var t=e.name.replace(/^a_/,``);return!l.has(t)&&(l.add(t),!0)}).map(function(e){var t=e.name.replace(/^a_/,``);return`in ${e.size===1?`float`:`vec${e.size}`} v_${t};`}).join(`
`)}

// Fragment output (single target - picking handled via separate pass)
out vec4 fragColor;

// LayerContext struct - provides rendering context to all layers
struct LayerContext {
  float sdf;             // Signed distance from shape boundary (negative inside)
  vec2 uv;               // UV coordinates [-1, 1], center at (0,0)
  float shapeSize;       // Effective shape size (~diameter) in UV space (1.0 - aaWidth)
  float shapeHalfSize;   // Effective shape half size (~radius) in UV space
  float pixelSize;       // Node full size (~diameter) in screen pixels
  float aaWidth;         // Anti-aliasing width for smooth transitions
  float correctionRatio; // Scaling factor for consistent rendering across zoom levels
  float pixelToUV;       // Conversion factor: multiply screen pixels by this to get UV units
  float inradiusFactor;  // Ratio of inradius to circumradius (shape depth factor)
};

LayerContext context;  // Global instance, populated before layer calls

// Alpha "over" compositing for layer blending
vec4 blendOver(vec4 bg, vec4 fg) {
  float a = fg.a;
  return vec4(mix(bg.rgb, fg.rgb, a), bg.a + a * (1.0 - bg.a));
}

// SDF shape functions
${ai(e)}

// Shape selector function (sets context.sdf and context.inradiusFactor)
${si(e,n)}

// Layer functions
${t.map(function(e){return e.glsl}).join(`

`)}

void main() {
  // 1. Setup LayerContext (available to all layer functions)
  context.shapeSize = 1.0 - v_antialiasingWidth;
  context.shapeHalfSize = context.shapeSize * 0.5;
  context.pixelSize = v_pixelSize;
  context.uv = v_uv;
  context.aaWidth = v_antialiasingWidth;
  context.correctionRatio = u_correctionRatio;
  context.pixelToUV = v_pixelToUV;

  // Query shape SDF based on shapeId (sets context.sdf and context.inradiusFactor)
  queryNodeSDF(int(v_shapeId), v_uv, context.shapeSize);

  // 2. Early discard for pixels fully outside the shape (with AA margin)
  // In PICKING_MODE, allow extra fragments up to the picking padding distance
  #ifdef PICKING_MODE
    if (context.sdf > u_pickingPadding * v_pixelToUV + context.aaWidth) discard;
  #else
    if (context.sdf > context.aaWidth) discard;
  #endif

  // 3. Apply layers sequentially with "over" compositing
  vec4 color = vec4(0.0);

${i}

  #ifdef PICKING_MODE
    // Picking pass: output node ID for pixels within the picking area.
    if (context.sdf > u_pickingPadding * v_pixelToUV) discard;
    fragColor = v_id;
  #else
${r?`    // Visual pass: apply antialiasing at shape boundary, node opacity once
    // smoothstep provides smooth transition from opaque to transparent
    float alpha = smoothstep(context.aaWidth, -context.aaWidth, context.sdf) * v_opacity;`:`    // Visual pass: hard-edged (no anti-aliasing gradient) shape boundary, node opacity applied once
    float alpha = (context.sdf < 0.0 ? 1.0 : 0.0) * v_opacity;`}
    // Mix with transparent to fade both color AND alpha together (avoids bright halo)
    fragColor = mix(vec4(0.0), color, alpha);
  #endif
}
`}function Yi(e,t){var n=new Set;return n.add(`u_matrix`),n.add(`u_sizeRatio`),n.add(`u_correctionRatio`),n.add(`u_cameraAngle`),n.add(`u_pickingPadding`),n.add(`u_nodeDataTexture`),n.add(`u_nodeDataTextureWidth`),n.add(`u_layerAttributeTexture`),n.add(`u_layerAttributeTextureWidth`),n.add(`u_layerAttributeTexelsPerNode`),e.forEach(function(e){e.uniforms.forEach(function(e){return n.add(e.name)})}),t.forEach(function(e){e.uniforms.forEach(function(e){return n.add(e.name)})}),Array.from(n)}function Xi(e){var t=WebGL2RenderingContext,n=t.UNSIGNED_BYTE,r=t.FLOAT;return[{name:`a_nodeIndex`,size:1,type:r},{name:`a_id`,size:4,type:n,normalized:!0},{name:`a_opacity`,size:1,type:r}]}function Zi(e){var t=e.shapes,n=e.layers,r=e.shapeGlobalIds,i=e.antialias,a=i===void 0||i;return{vertexShader:qi(t,n),fragmentShader:Ji(t,n,r,a),uniforms:Yi(t,n),attributes:Xi()}}function Qi(e,t,n){var r=Ki(e,t).specs;return Object.keys(r).map(function(e){return`flat ${n} ${r[e].size===1?`float`:`vec${r[e].size}`} v_${e};`}).join(`
`)}function $i(e){var t=e.shapes,n=e.layers,r=e.shapeGlobalIds,i=Fi(Ki(t,n),{varPrefix:`nodeAttr`,baseTexelExpr:`nodeIdx * u_layerAttributeTexelsPerNode`,textureWidthUniform:`u_layerAttributeTextureWidth`,textureSamplerUniform:`u_layerAttributeTexture`}),a=t.length===1?`float inradiusFactor = ${Y(t[0].inradiusFactor??1)};`:`float inradiusFactor = ${Y(t[0].inradiusFactor??1)};
  switch (int(shapeId)) {
${t.map(function(e,t){return`    case ${r?r[t]:t}: inradiusFactor = ${Y(e.inradiusFactor??1)}; break;`}).join(`
`)}
    default: break;
  }`;return`#version 300 es

in float a_nodeIndex;
in float a_labelWidth;
in float a_labelHeight;
in float a_textHeight;
in float a_positionMode;
in float a_labelAngle;
in vec4 a_backdropColor;
in vec4 a_backdropShadowColor;
in float a_backdropShadowBlur;
in float a_backdropPadding;
in vec4 a_backdropBorderColor;
in vec4 a_backdropExtra; // [borderWidth, cornerRadius, labelPadding, area]
in vec2 a_labelBoxOffset;
in vec2 a_quadCorner;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_labelMargin;
uniform float u_zoomLabelSizeRatio;
uniform float u_labelPixelSnapping;
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_nodeFrameTexture;
uniform int u_nodeFrameTextureWidth;
uniform sampler2D u_layerAttributeTexture;
uniform int u_layerAttributeTextureWidth;
uniform int u_layerAttributeTexelsPerNode;

out vec2 v_uv;
out vec2 v_nodeCenter;
out float v_nodeRadius;
out vec2 v_labelCenter;
out vec2 v_labelHalfSize;
out float v_aaWidth;
out float v_shapeId;
out float v_nodeRotation;
out float v_labelAngle;
out vec4 v_backdropColor;
out vec4 v_backdropShadowColor;
out float v_backdropShadowBlur;
out float v_backdropPadding;
out vec4 v_backdropBorderColor;
out float v_backdropBorderWidth;
out float v_backdropCornerRadius;
out float v_backdropArea;
${Qi(t,n,`out`)}

${_i}
${vi}
${bi}

void main() {
  int nodeIdx = int(a_nodeIndex);
${i.fetchCode}
${i.varyingAssignments}

  // Node data: (x, y, size, shapeId). shapeId (global) is forwarded to the
  // fragment shader, which keeps the shape SDF for the outline.
  vec4 nodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  vec2 nodePosition = nodeData.xy;
  float nodeSize = nodeData.z;
  float shapeId = nodeData.w;

  // Per-node rotation alignment (0 = viewport, 1 = graph). nodeRotation drives
  // the fragment's shape outline; labelRotation turns the label box with camera.
  vec4 nodeFlags = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  float nodeRotation = nodeFlags.r;
  float labelRotation = nodeFlags.g;
  v_nodeRotation = nodeRotation;

  ${li}
  // CSS pixel attributes are multiplied by u_pixelRatio to match nodeRadiusPixels,
  // which is already in physical pixels (nodeRadiusNDC * u_resolution.x / 2.0).
  float padding = a_backdropPadding * u_pixelRatio;
  float shadowBlur = a_backdropShadowBlur * u_pixelRatio;
  // Unpack a_backdropExtra: [borderWidth, cornerRadius, labelPadding, area]
  float borderWidth = a_backdropExtra.x * u_pixelRatio;
  float cornerRadius = a_backdropExtra.y * u_pixelRatio;
  float labelPad = a_backdropExtra.z * u_pixelRatio;
  float backdropArea = a_backdropExtra.w;
  // Use 2x shadowBlur so the Gaussian fully decays before the quad edge
  float totalExpansion = shadowBlur * 2.0 + borderWidth;
  float enlargedRadius = nodeRadiusPixels + padding;

  // Circumscribed radius for the quad bounds. Non-circular shapes reach past
  // their inradius out to their circumradius (= enlargedRadius / inradiusFactor),
  // in any direction once rotated. The axis-aligned quad must contain that, or
  // the fill/shadow gets clipped (square corners, triangle tip, etc.).
  ${a}
  float boundRadius = enlargedRadius / inradiusFactor;

  // Apply zoom-dependent label size scaling
  float zoomScale = u_zoomLabelSizeRatio;
  float labelW = a_labelWidth * zoomScale * u_pixelRatio;
  float labelH = a_labelHeight * zoomScale * u_pixelRatio;
  float labelMargin = u_labelMargin * zoomScale * u_pixelRatio;

  // Only apply labelPad when a label is actually present
  float effectiveLabelPad = labelW > 0.0 ? labelPad : 0.0;
  vec2 labelHalfSize = vec2(labelW * 0.5 + effectiveLabelPad, labelH * 0.5 + effectiveLabelPad);
  vec2 labelOffset = vec2(0.0);

  // Effective label angle: intrinsic angle plus the camera angle when the label
  // is graph-aligned, so the box orbits the node in lockstep with the frame-pass.
  float labelAngle = a_labelAngle - labelRotation * u_cameraAngle;
  float la_c = cos(labelAngle);
  float la_s = sin(labelAngle);
  mat2 labelRotMat = mat2(la_c, -la_s, la_s, la_c);

  vec3 nodeClip = u_matrix * vec3(nodePosition, 1.0);
  vec2 snapDelta = vec2(0.0);

  if (labelW > 0.0) {
    // labelW > 0.0 means this node's label is displayed, so the frame-pass wrote
    // its edge distance this frame.
    float edgeDistPixels = nodeRadiusPixels * readFrameTexel(u_nodeFrameTexture, u_nodeFrameTextureWidth, nodeIdx).r;
    // labelMargin matches the label shader's margin (gap from node edge to text)
    float labelStart = edgeDistPixels + labelMargin;
    // Above/below center on the actual glyph height, not the font line box, so
    // the box stays aligned with the rendered text (matches labelBoxCenter()).
    float textHalf = a_textHeight * zoomScale * u_pixelRatio * 0.5;

    // Snap node center to pixel grid so label/backdrop/attachment move as a unit
    vec2 nodeScreen = vec2(
      (nodeClip.x + 1.0) * u_resolution.x,
      (1.0 - nodeClip.y) * u_resolution.y
    ) * 0.5;
    snapDelta = (round(nodeScreen) - nodeScreen) * u_labelPixelSnapping;

    if (a_positionMode < 0.5) {
      // Right: box spans from node center to text end + padding
      float boxRightEdge = labelStart + labelW + labelPad;
      labelOffset = vec2(boxRightEdge * 0.5, 0.0);
      labelHalfSize.x = boxRightEdge * 0.5;
    } else if (a_positionMode < 1.5) {
      // Left: mirror of right
      float boxLeftEdge = labelStart + labelW + labelPad;
      labelOffset = vec2(-boxLeftEdge * 0.5, 0.0);
      labelHalfSize.x = boxLeftEdge * 0.5;
    } else if (a_positionMode < 2.5) {
      // Above: text bottom at labelStart, centered horizontally
      labelOffset = vec2(0.0, -(labelStart + textHalf));
    } else if (a_positionMode < 3.5) {
      // Below: text top at labelStart, centered horizontally
      labelOffset = vec2(0.0, labelStart + textHalf);
    }
    // over (>=4): labelOffset stays (0,0) — text centered on the node.

    // The attachment-cover shift is in label space (like the attachment itself),
    // so rotate it together with the position offset — otherwise the box drifts
    // off the attachment as the label angle grows.
    labelOffset = labelRotMat * (labelOffset + a_labelBoxOffset * zoomScale * u_pixelRatio);
  }

  // For node-only mode, zero out label dimensions
  if (backdropArea > 0.5 && backdropArea < 1.5) {
    labelHalfSize = vec2(0.0);
    labelOffset = vec2(0.0);
  }

  vec2 minBound, maxBound;

  bool hasLabelBounds = labelW > 0.0 && (backdropArea > 1.5 || backdropArea < 0.5);

  if (hasLabelBounds) {
    // Union with label bounds (area=both) or label-only bounds (area=label)
    vec2 labelMin, labelMax;

    if (a_labelAngle != 0.0) {
      vec2 corner1 = labelOffset + labelRotMat * vec2(-labelHalfSize.x, -labelHalfSize.y);
      vec2 corner2 = labelOffset + labelRotMat * vec2(labelHalfSize.x, -labelHalfSize.y);
      vec2 corner3 = labelOffset + labelRotMat * vec2(labelHalfSize.x, labelHalfSize.y);
      vec2 corner4 = labelOffset + labelRotMat * vec2(-labelHalfSize.x, labelHalfSize.y);
      labelMin = min(min(corner1, corner2), min(corner3, corner4));
      labelMax = max(max(corner1, corner2), max(corner3, corner4));
    } else {
      labelMin = labelOffset - labelHalfSize;
      labelMax = labelOffset + labelHalfSize;
    }

    if (backdropArea > 1.5) {
      // Label-only: bounds from label rect only
      minBound = labelMin - totalExpansion;
      maxBound = labelMax + totalExpansion;
    } else {
      // Both: union of node + label
      minBound = min(-vec2(boundRadius), labelMin) - totalExpansion;
      maxBound = max(vec2(boundRadius), labelMax) + totalExpansion;
    }
  } else {
    // Node-only or no visible label
    float totalRadius = boundRadius + totalExpansion;
    minBound = -vec2(totalRadius);
    maxBound = vec2(totalRadius);
  }

  vec2 quadSize = maxBound - minBound;
  vec2 quadCenter = (minBound + maxBound) * 0.5;

  vec2 localPos = quadCenter + a_quadCorner * quadSize * 0.5 + snapDelta;
  vec2 ndcOffset = localPos * 2.0 / u_resolution;
  ndcOffset.y = -ndcOffset.y;

  gl_Position = vec4(nodeClip.xy + ndcOffset, 0.0, 1.0);

  v_uv = localPos;
  v_nodeCenter = vec2(0.0);
  v_nodeRadius = nodeRadiusPixels;
  v_labelCenter = labelOffset;
  v_labelHalfSize = labelHalfSize;
  v_aaWidth = 1.0;
  v_shapeId = shapeId;
  v_labelAngle = labelAngle;
  v_backdropColor = a_backdropColor;
  v_backdropShadowColor = a_backdropShadowColor;
  v_backdropShadowBlur = a_backdropShadowBlur;
  v_backdropPadding = a_backdropPadding;
  v_backdropBorderColor = a_backdropBorderColor;
  v_backdropBorderWidth = borderWidth;
  v_backdropCornerRadius = cornerRadius;
  v_backdropArea = backdropArea;
}
`}function ea(e){var t=e.shapes,n=e.layers,r=e.shapeGlobalIds,i=ai(t),a=oi(t).map(function(e){return`uniform ${e.type} ${e.name};`}).join(`
`),o=function(e){return Qr(e,`nodeUV`,`1.0`)},s=t.length===1?`float nodeSdfNormalized = ${o(t[0])};`:`float nodeSdfNormalized;
  int shapeId = int(v_shapeId);
  switch (shapeId) {
${t.map(function(e,t){return`    case ${r?r[t]:t}: nodeSdfNormalized = ${o(e)}; break;`}).join(`
`)}
    default: nodeSdfNormalized = ${o(t[0])};
  }`;return`#version 300 es
precision highp float;

in vec2 v_uv;
in vec2 v_nodeCenter;
in float v_nodeRadius;
in vec2 v_labelCenter;
in vec2 v_labelHalfSize;
in float v_aaWidth;
in float v_shapeId;
in float v_nodeRotation;
in float v_labelAngle;
in vec4 v_backdropColor;
in vec4 v_backdropShadowColor;
in float v_backdropShadowBlur;
in float v_backdropPadding;
in vec4 v_backdropBorderColor;
in float v_backdropBorderWidth;
in float v_backdropCornerRadius;
in float v_backdropArea;
${Qi(t,n,`in`)}

uniform float u_cameraAngle;
${a}

layout(location = 0) out vec4 fragColor;
layout(location = 1) out vec4 fragPicking;

${i}
${fi}
${pi}
${mi}
${hi}

void main() {
  vec4 backdropColor = v_backdropColor;
  vec4 shadowColor = v_backdropShadowColor;
  float shadowBlur = v_backdropShadowBlur;
  float padding = v_backdropPadding;
  vec4 borderColor = v_backdropBorderColor;
  float borderWidth = v_backdropBorderWidth;
  float cornerRadius = v_backdropCornerRadius;

  float enlargedRadius = v_nodeRadius + padding;
  vec2 screenUV = v_uv - v_nodeCenter;
  float effectiveRadius = max(enlargedRadius - cornerRadius, 0.01);
  float ca = u_cameraAngle * v_nodeRotation;
  float ca_c = cos(ca);
  float ca_s = sin(ca);
  vec2 rotatedScreenUV = mat2(ca_c, -ca_s, ca_s, ca_c) * screenUV;
  vec2 nodeUV = vec2(rotatedScreenUV.x, -rotatedScreenUV.y) / effectiveRadius;

  // Query the correct shape SDF based on shapeId
  ${s}
  float nodeSdfPixels = nodeSdfNormalized * effectiveRadius - cornerRadius;

  // Label SDF with optional corner radius and rotation
  float labelSdfPixels;
  if (v_labelHalfSize.x > 0.0) {
    vec2 labelP = v_uv - v_labelCenter;
    labelSdfPixels = sdfRoundedRotatedBox(labelP, v_labelHalfSize, v_labelAngle, cornerRadius);
  } else {
    labelSdfPixels = 10000.0;
  }

  // Select area: 0=both, 1=node, 2=label
  float combinedSdf;
  if (v_backdropArea > 1.5) {
    combinedSdf = labelSdfPixels;
  } else if (v_backdropArea > 0.5) {
    combinedSdf = nodeSdfPixels;
  } else {
    combinedSdf = min(nodeSdfPixels, labelSdfPixels);
  }

  // Fill + border composite
  float outerEdge = smoothstep(v_aaWidth, -v_aaWidth, combinedSdf);
  vec4 background;
  if (borderWidth > 0.5) {
    float innerEdge = smoothstep(v_aaWidth, -v_aaWidth, combinedSdf + borderWidth);
    float fillAlpha = innerEdge * backdropColor.a;
    vec4 fill = vec4(backdropColor.rgb * fillAlpha, fillAlpha);
    float borderAlpha = (outerEdge - innerEdge) * borderColor.a;
    vec4 border = vec4(borderColor.rgb * borderAlpha, borderAlpha);
    background = fill + border * (1.0 - fill.a);
  } else {
    float fillAlpha = outerEdge * backdropColor.a;
    background = vec4(backdropColor.rgb * fillAlpha, fillAlpha);
  }

  // Gaussian-like shadow falloff (mimics canvas shadowBlur)
  vec4 shadow = vec4(0.0);
  float sigma = shadowBlur / 2.5;
  if (sigma > 0.001) {
    float shadowDist = max(0.0, combinedSdf);
    float shadowAlpha = exp(-(shadowDist * shadowDist) / (2.0 * sigma * sigma)) * shadowColor.a;
    shadow = vec4(shadowColor.rgb * shadowAlpha, shadowAlpha);
  }

  fragColor = background + shadow * (1.0 - background.a);
  fragPicking = vec4(0.0);
}
`}function ta(e){var t=[`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_cameraAngle`,`u_resolution`,`u_pixelRatio`,`u_labelMargin`,`u_zoomLabelSizeRatio`,`u_labelPixelSnapping`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_nodeFrameTexture`,`u_nodeFrameTextureWidth`,`u_layerAttributeTexture`,`u_layerAttributeTextureWidth`,`u_layerAttributeTexelsPerNode`],n=B(oi(e)),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;t.includes(i.name)||t.push(i.name)}}catch(e){n.e(e)}finally{n.f()}return t}function na(e){return{vertexShader:$i(e),fragmentShader:ea(e),uniforms:ta(e.shapes)}}function ra(e,t,n,r){var i=r.label,a=i===void 0?{}:i,o=r.shapes,s=r.layers,c=r.getAttributeTexture,l=r.shapeGlobalIds;if(o.length===0)throw Error(`createBackdropProgram: at least one shape must be provided in 'shapes'`);var u=a.margin??5,d=a.zoomToLabelSizeRatioFunction??function(){return 1},f=na({shapes:o,layers:s,shapeGlobalIds:l}),p=function(e){function t(){var e;U(this,t);var n=[...arguments];return e=G(this,t,[].concat(n)),V(e,`totalBackdropCount`,0),V(e,`bufferCapacity`,0),e}return K(t,e),W(t,[{key:`getDefinition`,value:function(){var e=WebGL2RenderingContext,t=e.FLOAT,n=e.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:f.vertexShader,FRAGMENT_SHADER_SOURCE:f.fragmentShader,METHOD:n,UNIFORMS:f.uniforms,ATTRIBUTES:[{name:`a_nodeIndex`,size:1,type:t},{name:`a_labelWidth`,size:1,type:t},{name:`a_labelHeight`,size:1,type:t},{name:`a_textHeight`,size:1,type:t},{name:`a_positionMode`,size:1,type:t},{name:`a_labelAngle`,size:1,type:t},{name:`a_backdropColor`,size:4,type:t},{name:`a_backdropShadowColor`,size:4,type:t},{name:`a_backdropShadowBlur`,size:1,type:t},{name:`a_backdropPadding`,size:1,type:t},{name:`a_backdropBorderColor`,size:4,type:t},{name:`a_backdropExtra`,size:4,type:t},{name:`a_labelBoxOffset`,size:2,type:t}],CONSTANT_ATTRIBUTES:[{name:`a_quadCorner`,size:2,type:t}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:`processBackdrop`,value:function(e,t){var n=this.floats,r=e*this.STRIDE;n[r++]=t.nodeIndex,n[r++]=t.labelWidth,n[r++]=t.labelHeight,n[r++]=t.textHeight,n[r++]=ci[t.position],n[r++]=t.labelAngle,n[r++]=t.backdropColor[0],n[r++]=t.backdropColor[1],n[r++]=t.backdropColor[2],n[r++]=t.backdropColor[3],n[r++]=t.backdropShadowColor[0],n[r++]=t.backdropShadowColor[1],n[r++]=t.backdropShadowColor[2],n[r++]=t.backdropShadowColor[3],n[r++]=t.backdropShadowBlur,n[r++]=t.backdropPadding,n[r++]=t.backdropBorderColor[0],n[r++]=t.backdropBorderColor[1],n[r++]=t.backdropBorderColor[2],n[r++]=t.backdropBorderColor[3],n[r++]=t.backdropBorderWidth,n[r++]=t.backdropCornerRadius,n[r++]=t.backdropLabelPadding,n[r++]=t.backdropArea,n[r++]=t.labelBoxOffset[0],n[r++]=t.labelBoxOffset[1]}},{key:`setUniforms`,value:function(e,n){var r=n.gl,i=n.uniformLocations;r.uniformMatrix3fv(i.u_matrix,!1,e.matrix),r.uniform1f(i.u_sizeRatio,e.sizeRatio),r.uniform1f(i.u_correctionRatio,e.correctionRatio),r.uniform1f(i.u_cameraAngle,e.cameraAngle),r.uniform2f(i.u_resolution,e.width*e.pixelRatio,e.height*e.pixelRatio),r.uniform1f(i.u_pixelRatio,e.pixelRatio),r.uniform1f(i.u_labelMargin,t.labelMargin),r.uniform1f(i.u_zoomLabelSizeRatio,1/d(e.zoomRatio)),r.uniform1f(i.u_labelPixelSnapping,e.labelPixelSnapping),r.uniform1i(i.u_nodeDataTexture,e.nodeDataTextureUnit),r.uniform1i(i.u_nodeDataTextureWidth,e.nodeDataTextureWidth),r.uniform1i(i.u_nodeFrameTexture,e.nodeFrameTextureUnit),r.uniform1i(i.u_nodeFrameTextureWidth,e.nodeFrameTextureWidth);var a=c();i.u_layerAttributeTexture&&a&&(a.bind(Wi),r.uniform1i(i.u_layerAttributeTexture,Wi),r.uniform1i(i.u_layerAttributeTextureWidth,a.getTextureWidth()),r.uniform1i(i.u_layerAttributeTexelsPerNode,a.getTexelsPerItem()));var s=B(oi(o)),l;try{for(s.s();!(l=s.n()).done;){var u=l.value;this.setTypedUniform(u,n)}}catch(e){s.e(e)}finally{s.f()}}},{key:`hasNothingToRender`,value:function(){return this.totalBackdropCount===0}},{key:`drawWebGL`,value:function(e,t){var n=t.gl;this.totalBackdropCount!==0&&(this.isInstanced?n.drawArraysInstanced(e,0,this.VERTICES,this.totalBackdropCount):n.drawArrays(e,0,this.totalBackdropCount*this.VERTICES))}},{key:`reallocate`,value:function(e){this.totalBackdropCount=e,e>this.bufferCapacity&&(this.bufferCapacity=Math.max(e,Math.ceil(this.bufferCapacity*1.5)||10),X(t,`reallocate`,this,3)([this.bufferCapacity]))}}])}(zi);return V(p,`labelMargin`,u),new p(e,t,n)}var ia=function(e){function t(){var e;U(this,t);var n=[...arguments];return e=G(this,t,[].concat(n)),V(e,`totalCharacterCount`,0),V(e,`bufferCapacity`,0),e}return K(t,e),W(t,[{key:`processLabel`,value:function(e,t,n){if(n.hidden||!n.text)return 0;for(var r=n.text,i=r.length,a=0;a<i;a++){var o=r[a];this.processCharacter(t+a,n,o,a)}return i}},{key:`hasNothingToRender`,value:function(){return this.totalCharacterCount===0}},{key:`drawWebGL`,value:function(e,t){var n=t.gl;this.totalCharacterCount!==0&&(this.isInstanced?n.drawArraysInstanced(e,0,this.VERTICES,this.totalCharacterCount):n.drawArrays(e,0,this.totalCharacterCount*this.VERTICES))}},{key:`reallocate`,value:function(e){this.totalCharacterCount=e,e>this.bufferCapacity&&(this.bufferCapacity=Math.max(e,Math.ceil(this.bufferCapacity*1.5)||1e3),X(t,`reallocate`,this,3)([this.bufferCapacity]))}}])}(zi);function aa(){return`#version 300 es

in float a_nodeIndex;
in vec4 a_id;
in vec4 a_color;
in float a_labelWidth;
in float a_labelHeight;
in float a_textHeight;
in float a_positionMode;
in float a_labelAngle;
in float a_padding;
in vec2 a_quadCorner;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_labelMargin;
uniform float u_zoomLabelSizeRatio;
uniform float u_labelPixelSnapping;
uniform float u_pickingPadding;
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_nodeFrameTexture;
uniform int u_nodeFrameTextureWidth;

out vec4 v_id;
out vec4 v_color;

${_i}
${vi}
${bi}
${gi}

void main() {
  int nodeIdx = int(a_nodeIndex);

  // Node data: (x, y, size, shapeId).
  vec4 nodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  vec2 nodePosition = nodeData.xy;
  float nodeSize = nodeData.z;

  // Shape-aware edge distance, read once from the shared frame texture.
  float edgeDist = readFrameTexel(u_nodeFrameTexture, u_nodeFrameTextureWidth, nodeIdx).r;

  // Per-node label rotation alignment: 0 = viewport, 1 = label turns with camera.
  float labelRotation = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx).g;

  ${li}

  float zoomScale = u_zoomLabelSizeRatio;
  float labelW = a_labelWidth * zoomScale * u_pixelRatio;
  float labelH = a_labelHeight * zoomScale * u_pixelRatio;
  float labelMargin = u_labelMargin * zoomScale * u_pixelRatio;
#ifdef PICKING_MODE
  float padding = u_pickingPadding * u_pixelRatio;
#else
  float padding = a_padding * u_pixelRatio;
#endif

  if (labelW <= 0.0) {
    gl_Position = vec4(2.0, 0.0, 0.0, 1.0);
    v_id = vec4(0.0);
    v_color = vec4(0.0);
    return;
  }

  vec2 labelHalfSize = vec2(labelW * 0.5 + padding, labelH * 0.5 + padding);
  vec2 labelOffset = vec2(0.0);

  // Graph-aligned labels add the camera angle so the rect orbits with the text.
  float labelAngle = a_labelAngle - labelRotation * u_cameraAngle;
  float la_c = cos(labelAngle);
  float la_s = sin(labelAngle);
  mat2 labelRotMat = mat2(la_c, -la_s, la_s, la_c);

  vec3 nodeClip = u_matrix * vec3(nodePosition, 1.0);
  vec2 nodeScreen = vec2(
    (nodeClip.x + 1.0) * u_resolution.x,
    (1.0 - nodeClip.y) * u_resolution.y
  ) * 0.5;
  vec2 snapDelta = (round(nodeScreen) - nodeScreen) * u_labelPixelSnapping;

  if (a_positionMode < 4.0) {
    float labelStart = nodeRadiusPixels * edgeDist + labelMargin;
    float textHalf = a_textHeight * zoomScale * u_pixelRatio * 0.5;
    // Box center uses the text half-size; the padding expands the quad below.
    labelOffset = labelRotMat * labelBoxCenter(a_positionMode, labelStart, vec2(labelW * 0.5, labelH * 0.5), textHalf);
  }

  // Rotate the rect with the label so it stays aligned with the (rotated) text.
  vec2 localPos = labelOffset + labelRotMat * (a_quadCorner * labelHalfSize);
  vec2 ndcOffset = (localPos + snapDelta) * 2.0 / u_resolution;
  ndcOffset.y = -ndcOffset.y;

  gl_Position = vec4(nodeClip.xy + ndcOffset, 0.0, 1.0);
  v_id = a_id;
  v_color = a_color;
}
`}var oa=`#version 300 es
precision highp float;

in vec4 v_id;
in vec4 v_color;

out vec4 fragColor;

void main() {
  #ifdef PICKING_MODE
    fragColor = v_id;
  #else
    if (v_color.a <= 0.0) discard;
    // v_color is non-premultiplied RGBA (0-1); convert to premultiplied for blending
    fragColor = vec4(v_color.rgb * v_color.a, v_color.a);
  #endif
}
`;function sa(e,t,n,r){var i=r.label,a=i===void 0?{}:i,o=a.margin??5,s=a.zoomToLabelSizeRatioFunction??function(){return 1},c=aa(),l=function(e){function t(){var e;U(this,t);var n=[...arguments];return e=G(this,t,[].concat(n)),V(e,`totalCount`,0),V(e,`bufferCapacity`,0),e}return K(t,e),W(t,[{key:`getDefinition`,value:function(){var e=WebGL2RenderingContext,t=e.FLOAT,n=e.UNSIGNED_BYTE;return{VERTICES:4,VERTEX_SHADER_SOURCE:c,FRAGMENT_SHADER_SOURCE:oa,METHOD:e.TRIANGLE_STRIP,UNIFORMS:[`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_cameraAngle`,`u_resolution`,`u_pixelRatio`,`u_labelMargin`,`u_zoomLabelSizeRatio`,`u_labelPixelSnapping`,`u_pickingPadding`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_nodeFrameTexture`,`u_nodeFrameTextureWidth`],ATTRIBUTES:[{name:`a_nodeIndex`,size:1,type:t},{name:`a_id`,size:4,type:n,normalized:!0},{name:`a_color`,size:4,type:n,normalized:!0},{name:`a_labelWidth`,size:1,type:t},{name:`a_labelHeight`,size:1,type:t},{name:`a_textHeight`,size:1,type:t},{name:`a_positionMode`,size:1,type:t},{name:`a_labelAngle`,size:1,type:t},{name:`a_padding`,size:1,type:t}],CONSTANT_ATTRIBUTES:[{name:`a_quadCorner`,size:2,type:t}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:`processLabelBackground`,value:function(e,t){var n=this.floats,r=this.ints,i=e*this.STRIDE;n[i++]=t.nodeIndex,r[i++]=t.id,n[i++]=t.color,n[i++]=t.labelWidth,n[i++]=t.labelHeight,n[i++]=t.textHeight,n[i++]=t.positionMode,n[i++]=t.labelAngle,n[i++]=t.padding}},{key:`setUniforms`,value:function(e,n){var r=n.gl,i=n.uniformLocations;r.uniformMatrix3fv(i.u_matrix,!1,e.matrix),r.uniform1f(i.u_sizeRatio,e.sizeRatio),r.uniform1f(i.u_correctionRatio,e.correctionRatio),r.uniform1f(i.u_cameraAngle,e.cameraAngle),r.uniform2f(i.u_resolution,e.width*e.pixelRatio,e.height*e.pixelRatio),r.uniform1f(i.u_pixelRatio,e.pixelRatio),r.uniform1f(i.u_labelMargin,t.labelMargin),r.uniform1f(i.u_zoomLabelSizeRatio,1/s(e.zoomRatio)),r.uniform1f(i.u_labelPixelSnapping,e.labelPixelSnapping),r.uniform1f(i.u_pickingPadding,e.labelPickingPadding),r.uniform1i(i.u_nodeDataTexture,e.nodeDataTextureUnit),r.uniform1i(i.u_nodeDataTextureWidth,e.nodeDataTextureWidth),r.uniform1i(i.u_nodeFrameTexture,e.nodeFrameTextureUnit),r.uniform1i(i.u_nodeFrameTextureWidth,e.nodeFrameTextureWidth)}},{key:`hasNothingToRender`,value:function(){return this.totalCount===0}},{key:`drawWebGL`,value:function(e,t){var n=t.gl;this.totalCount!==0&&n.drawArraysInstanced(n.TRIANGLE_STRIP,0,this.VERTICES,this.totalCount)}},{key:`reallocate`,value:function(e){this.totalCount=e,e>this.bufferCapacity&&(this.bufferCapacity=Math.max(e,Math.ceil(this.bufferCapacity*1.5)||10),X(t,`reallocate`,this,3)([this.bufferCapacity]))}}])}(zi);return V(l,`labelMargin`,o),new l(e,t,n)}var ca={fontSize:64,buffer:8,radius:24,cutoff:.25,maxTextureSize:2048,debounceTimeout:100},la=2,ua=0x56bc75e2d63100000;function da(e,t,n,r,i){var a=e+i*4,o=document.createElement(`canvas`);o.width=a,o.height=a;var s=o.getContext(`2d`,{willReadFrequently:!0});return s.font=`${r} ${n} ${e}px ${t}`,s.textBaseline=`alphabetic`,s.textAlign=`left`,s.fillStyle=`black`,{ctx:s,canvasSize:a,gridOuter:new Float64Array(a*a),gridInner:new Float64Array(a*a),f:new Float64Array(a),z:new Float64Array(a+1),v:new Uint16Array(a)}}function fa(e,t,n,r,i){var a=e.ctx,o=e.canvasSize,s=a.measureText(t),c=s.width,l=s.actualBoundingBoxAscent,u=s.actualBoundingBoxDescent,d=s.actualBoundingBoxLeft,f=s.actualBoundingBoxRight,p=Math.ceil(l),m=Math.ceil(d),h=Math.max(0,Math.min(o-n,Math.ceil(d)+Math.ceil(f))),g=Math.min(o-n,p+Math.ceil(u)),_=h+2*n,v=g+2*n,y=Math.max(_*v,0),b=new Uint8ClampedArray(y),x={data:b,width:_,height:v,glyphWidth:h,glyphHeight:g,glyphTop:p,glyphLeft:m,glyphAdvance:c};if(h===0||g===0)return x;var S=e.gridInner,C=e.gridOuter;a.clearRect(n,n,h,g),a.fillText(t,n+m,n+p);var w=a.getImageData(n,n,h,g);C.fill(ua,0,y),S.fill(0,0,y);for(var T=0;T<g;T++)for(var E=0;E<h;E++){var D=w.data[4*(T*h+E)+3]/255;if(D!==0){var O=(T+n)*_+E+n;if(D===1)C[O]=0,S[O]=ua;else{var k=.5-D;C[O]=k>0?k*k:0,S[O]=k<0?k*k:0}}}pa(C,0,0,_,v,_,e.f,e.v,e.z),pa(S,n,n,h,g,_,e.f,e.v,e.z);for(var A=0;A<y;A++){var j=Math.sqrt(C[A])-Math.sqrt(S[A]);b[A]=Math.round(255-255*(j/r+i))}return x}function pa(e,t,n,r,i,a,o,s,c){for(var l=t;l<t+r;l++)ma(e,n*a+l,a,i,o,s,c);for(var u=n;u<n+i;u++)ma(e,u*a+t,1,r,o,s,c)}function ma(e,t,n,r,i,a,o){a[0]=0,o[0]=-ua,o[1]=ua,i[0]=e[t];for(var s=1,c=0,l=0;s<r;s++){i[s]=e[t+s*n];var u=s*s;do{var d=a[c];l=(i[s]-i[d]+u-d*d)/(s-d)/2}while(l<=o[c]&&--c>-1);c++,a[c]=s,o[c]=l,o[c+1]=ua}for(var f=0,p=0;f<r;f++){for(;o[p+1]<f;)p++;var m=a[p],h=f-m;e[t+f*n]=i[m]+h*h}}var ha=function(e){function t(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return U(this,t),e=G(this,t),V(e,`fonts`,new Map),V(e,`textures`,[]),V(e,`cursor`,{x:0,y:0,rowHeight:0,atlasIndex:0}),V(e,`pendingGlyphs`,[]),V(e,`debounceTimer`,null),e.options=H(H({},ca),n),e.canvas=document.createElement(`canvas`),e.canvas.width=e.options.maxTextureSize,e.canvas.height=e.options.maxTextureSize,e.ctx=e.canvas.getContext(`2d`,{willReadFrequently:!0}),e.measureCanvas=document.createElement(`canvas`),e.measureCtx=e.measureCanvas.getContext(`2d`),e.textures.push(e.ctx.getImageData(0,0,1,1)),e}return K(t,e),W(t,[{key:`getFontKey`,value:function(e){return`${e.family}-${e.weight}-${e.style}`}},{key:`registerFont`,value:function(e){var t=this.getFontKey(e);if(this.fonts.has(t))return t;var n=da(this.options.fontSize,e.family,e.weight,e.style,this.options.buffer);return this.fonts.set(t,{descriptor:e,generator:n,glyphs:new Map}),t}},{key:`ensureGlyphs`,value:function(e,t){var n=this.fonts.get(t);if(!n)throw Error(`Font "${t}" is not registered. Call registerFont() first.`);var r=!1,i=B(e),a;try{for(i.s();!(a=i.n()).done;){var o=a.value.codePointAt(0);o!==void 0&&(n.glyphs.has(o)||(this.pendingGlyphs.push({fontKey:t,charCode:o}),r=!0))}}catch(e){i.e(e)}finally{i.f()}r&&this.scheduleTextureGeneration()}},{key:`measureText`,value:function(e,t){var n=this.fonts.get(t);if(!n)throw Error(`Font "${t}" is not registered.`);var r=n.descriptor,i=r.family,a=r.weight,o=r.style;return this.measureCtx.font=`${o} ${a} ${this.options.fontSize}px ${i}`,this.measureCtx.measureText(e).width}},{key:`getGlyph`,value:function(e,t){var n=this.fonts.get(t);if(n)return n.glyphs.get(e)}},{key:`getTextures`,value:function(){return this.textures}},{key:`getFontCount`,value:function(){return this.fonts.size}},{key:`getGlyphCount`,value:function(){var e=0,t=B(this.fonts.values()),n;try{for(t.s();!(n=t.n()).done;){var r=n.value;e+=r.glyphs.size}}catch(e){t.e(e)}finally{t.f()}return e}},{key:`hasPendingGlyphs`,value:function(){return this.pendingGlyphs.length>0}},{key:`flush`,value:function(){this.debounceTimer&&=(clearTimeout(this.debounceTimer),null),this.generateTextures()}},{key:`destroy`,value:function(){this.debounceTimer&&clearTimeout(this.debounceTimer),this.fonts.clear(),this.textures=[],this.pendingGlyphs=[],this.removeAllListeners()}},{key:`scheduleTextureGeneration`,value:function(){var e=this;this.debounceTimer===null&&(this.options.debounceTimeout===null?this.generateTextures():this.debounceTimer=setTimeout(function(){e.debounceTimer=null,e.generateTextures()},this.options.debounceTimeout))}},{key:`generateTextures`,value:function(){if(this.pendingGlyphs.length!==0){var e=this.options,n=e.maxTextureSize,r=e.buffer,i=e.radius,a=e.cutoff,o=B(this.pendingGlyphs),s;try{for(o.s();!(s=o.n()).done;){var c=s.value,l=c.fontKey,u=c.charCode,d=this.fonts.get(l);if(d&&!d.glyphs.has(u)){var f=String.fromCodePoint(u),p=fa(d.generator,f,r,i,a),m=p.width,h=p.height;this.cursor.x+m+la>n&&(this.cursor.x=0,this.cursor.y+=this.cursor.rowHeight+la,this.cursor.rowHeight=0),this.cursor.y+h+la>n&&(this.finalizeCurrentTexture(),this.cursor={x:0,y:0,rowHeight:0,atlasIndex:this.cursor.atlasIndex+1},this.ctx.clearRect(0,0,n,n));for(var g=p.data,_=new Uint8ClampedArray(m*h*4),v=0;v<g.length;v++){var y=v*4;_[y]=255,_[y+1]=255,_[y+2]=255,_[y+3]=g[v]}var b=new ImageData(_,m,h);this.ctx.putImageData(b,this.cursor.x,this.cursor.y);var x={charCode:u,width:p.glyphWidth,height:p.glyphHeight,bearingX:-p.glyphLeft-r,bearingY:p.glyphTop+r,advance:p.glyphAdvance,atlasX:this.cursor.x,atlasY:this.cursor.y,atlasWidth:m,atlasHeight:h,atlasIndex:this.cursor.atlasIndex};d.glyphs.set(u,x),this.cursor.x+=m+la,this.cursor.rowHeight=Math.max(this.cursor.rowHeight,h)}}}catch(e){o.e(e)}finally{o.f()}this.finalizeCurrentTexture(),this.pendingGlyphs=[],this.emit(t.ATLAS_UPDATED_EVENT,{textures:this.textures,glyphCount:this.getGlyphCount()})}}},{key:`finalizeCurrentTexture`,value:function(){var e=this.options.maxTextureSize,t=this.cursor.y>0||this.cursor.rowHeight>0,n=Math.min(e,Math.max(this.cursor.x,t?e:1)),r=Math.min(e,this.cursor.y+this.cursor.rowHeight+la),i=this.ctx.getImageData(0,0,n,r);this.cursor.atlasIndex>=this.textures.length?this.textures.push(i):this.textures[this.cursor.atlasIndex]=i}}])}(l.EventEmitter);V(ha,`ATLAS_UPDATED_EVENT`,`atlasUpdated`);var ga=ca.fontSize;function _a(){return`#version 300 es

// ============================================================================
// Attributes
// ============================================================================

// Per-character (instanced)
in float a_nodeIndex;        // Index into node data texture
in vec2 a_charOffset;        // Character offset from label origin (pixels)
in vec2 a_charSize;          // Character dimensions (pixels)
in vec4 a_texCoords;         // Atlas coords: (x, y, width, height) in pixels
in vec4 a_color;             // Text color (RGBA)
in float a_margin;           // Gap between node edge and label (pixels)
in float a_positionMode;     // Position: 0=right, 1=left, 2=above, 3=below, 4=over
in float a_labelWidth;       // Total label width (pixels)
in float a_labelHeight;      // Label height (pixels)
in float a_verticalCenter;   // Vertical center offset from baseline (pixels)
in float a_textHeight;       // Actual text height: maxAscent + maxDescent (pixels)
in float a_labelAngle;       // Label rotation angle (radians)

// Per-vertex (constant quad corners)
in vec2 a_quadCorner;        // Quad corner: [-1,-1], [1,-1], [-1,1], [1,1]

// ============================================================================
// Uniforms
// ============================================================================

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform vec2 u_resolution;
uniform vec2 u_atlasSize;
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_nodeFrameTexture;
uniform int u_nodeFrameTextureWidth;
uniform float u_zoomLabelSizeRatio;
uniform float u_labelPixelSnapping;
uniform float u_pixelRatio;

// ============================================================================
// Varyings
// ============================================================================

out vec2 v_texCoord;
out vec4 v_color;
out float v_fontScale;

// ============================================================================
// Constants
// ============================================================================

const float bias = 255.0 / 254.0;
const float ATLAS_FONT_SIZE = ${Y(ga)};

// ============================================================================
// Helper Functions
// ============================================================================

${_i}
${vi}
${bi}
${di}

// ============================================================================
// Main
// ============================================================================

void main() {
  // -------------------------------------------------------------------------
  // Step 0: Fetch node data + shared edge distance from textures
  // -------------------------------------------------------------------------
  // Node-data texture format: vec4(x, y, size, shapeId)
  // 2D texture layout: texCoord = (index % width, index / width)
  int nodeIdx = int(a_nodeIndex);
  vec4 nodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  vec2 a_anchorPosition = nodeData.xy;
  float a_nodeSize = nodeData.z;

  // Normalized edge distance from the shared frame texture (the frame-pass ran
  // the SDF search once; the label just reads the result).
  float edgeDist = readFrameTexel(u_nodeFrameTexture, u_nodeFrameTextureWidth, nodeIdx).r;

  // Per-node label rotation alignment: 0 = viewport, 1 = label turns with camera.
  float labelRotation = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx).g;

  // Apply zoom-dependent label size scaling
  // Positional values are in CSS pixels; multiply by u_pixelRatio to convert to
  // physical pixels, which is what the NDC conversion (/ u_resolution) expects.
  float zoomScale = u_zoomLabelSizeRatio;
  float margin = a_margin * zoomScale * u_pixelRatio;
  vec2 charOffset = a_charOffset * zoomScale * u_pixelRatio;
  vec2 charSize = a_charSize * zoomScale * u_pixelRatio;
  float labelWidth = a_labelWidth * zoomScale * u_pixelRatio;
  float labelHeight = a_labelHeight * zoomScale;

  // Font scale: ratio of CSS label size to the base atlas font size.
  // Divided by u_pixelRatio because the atlas is generated at ATLAS_FONT_SIZE * pixelRatio,
  // which cancels out the u_pixelRatio in the fragment shader's gamma formula and keeps
  // the anti-aliasing band width consistent across pixel densities.
  v_fontScale = a_labelHeight * zoomScale / (ATLAS_FONT_SIZE * u_pixelRatio);

  // -------------------------------------------------------------------------
  // Step 1: Transform node position to clip space
  // -------------------------------------------------------------------------
  vec3 anchorClip = u_matrix * vec3(a_anchorPosition, 1.0);

  // -------------------------------------------------------------------------
  // Step 2: Convert node size to screen pixels
  // -------------------------------------------------------------------------
  float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
  float nodeRadiusGraphSpace = a_nodeSize * u_correctionRatio / u_sizeRatio * 2.0;
  float nodeRadiusNDC = nodeRadiusGraphSpace * matrixScaleX;
  float nodeRadiusPixels = nodeRadiusNDC * u_resolution.x / 2.0;

  // -------------------------------------------------------------------------
  // Step 3: Calculate position offset from the shared edge distance
  // -------------------------------------------------------------------------
  vec2 positionOffset = vec2(0.0);

  if (a_positionMode < 4.0) {
    vec2 screenDir = getLabelDirection(a_positionMode);
    float boundaryDistPixels = nodeRadiusPixels * edgeDist;
    positionOffset = screenDir * (boundaryDistPixels + margin);
  }

  // -------------------------------------------------------------------------
  // Step 4: Calculate final vertex position
  // -------------------------------------------------------------------------
  vec2 cornerOffset = (a_quadCorner + 1.0) * 0.5;
  vec2 charPixelPos = positionOffset + charOffset + cornerOffset * charSize;

  // Apply text alignment based on position mode
  float verticalCenter = a_verticalCenter * zoomScale * u_pixelRatio;
  float textHeight = a_textHeight * zoomScale * u_pixelRatio;
  float baselineToDescent = textHeight / 2.0 - verticalCenter;
  float baselineToAscent = textHeight / 2.0 + verticalCenter;

  if (a_positionMode < 0.5) {
    // Right: vertically center
    charPixelPos.y += verticalCenter;
  } else if (a_positionMode < 1.5) {
    // Left: right-align and vertically center
    charPixelPos.x -= labelWidth;
    charPixelPos.y += verticalCenter;
  } else if (a_positionMode < 2.5) {
    // Above: center horizontally, bottom of text at anchor
    charPixelPos.x -= labelWidth * 0.5;
    charPixelPos.y -= baselineToDescent;
  } else if (a_positionMode < 3.5) {
    // Below: center horizontally, top of text at anchor
    charPixelPos.x -= labelWidth * 0.5;
    charPixelPos.y += baselineToAscent;
  } else {
    // Over: center both
    charPixelPos.x -= labelWidth * 0.5;
    charPixelPos.y += verticalCenter;
  }

  // Apply label angle rotation. Graph-aligned labels add the camera angle so the
  // whole label orbits the node in lockstep with the frame-pass edge distance.
  float labelAngle = a_labelAngle - labelRotation * u_cameraAngle;
  float la_c = cos(labelAngle);
  float la_s = sin(labelAngle);
  mat2 labelRotMat = mat2(la_c, -la_s, la_s, la_c);
  charPixelPos = labelRotMat * charPixelPos;

  // Snap node center to pixel grid so label/backdrop/attachment move as a unit
  vec2 nodeScreen = vec2(
    (anchorClip.x + 1.0) * u_resolution.x,
    (1.0 - anchorClip.y) * u_resolution.y
  ) * 0.5;
  charPixelPos += (round(nodeScreen) - nodeScreen) * u_labelPixelSnapping;

  // Convert to NDC (flip Y: screen Y-down -> clip Y-up)
  vec2 ndcOffset = vec2(charPixelPos.x, -charPixelPos.y) * 2.0 / u_resolution;
  gl_Position = vec4(anchorClip.xy + ndcOffset, 0.0, 1.0);

  // -------------------------------------------------------------------------
  // Step 5: Texture coordinates
  // -------------------------------------------------------------------------
  v_texCoord = (a_texCoords.xy + cornerOffset * a_texCoords.zw) / u_atlasSize;

  // -------------------------------------------------------------------------
  // Step 6: Pass color
  // -------------------------------------------------------------------------
  v_color = a_color;
  v_color.a *= bias;
}
`}function va(){return`#version 300 es
precision highp float;

in vec2 v_texCoord;
in vec4 v_color;
in float v_fontScale;

uniform sampler2D u_atlas;
uniform float u_gamma;
uniform float u_sdfBuffer;
uniform float u_pixelRatio;

// Fragment output (single target - picking handled via separate pass)
out vec4 fragColor;

void main() {
  #ifdef PICKING_MODE
    // Labels are not pickable - discard all fragments in picking mode
    fragColor = vec4(0.0);
    discard;
  #else
    // Sample SDF value from atlas (high = inside glyph, low = outside)
    float sdfValue = texture(u_atlas, v_texCoord).a;

    // Edge threshold: 1.0 - cutoff = 0.75 for default cutoff=0.25
    // This is where the glyph edge is located in the SDF
    float edgeThreshold = 1.0 - u_sdfBuffer;

    // Gamma controls the anti-aliasing band width.
    // Scale inversely with font scale so small labels get a wider AA band
    // (smoother) and large labels get a tighter band (sharper).
    float gamma = u_gamma / (u_pixelRatio * v_fontScale);

    // Pure gamma-based anti-aliasing using smoothstep
    // The AA band extends from (threshold - gamma) to (threshold + gamma)
    float alpha = smoothstep(edgeThreshold - gamma, edgeThreshold + gamma, sdfValue);

    // Premultiplied alpha output for correct blending
    float finalAlpha = v_color.a * alpha;
    fragColor = vec4(v_color.rgb * finalAlpha, finalAlpha);
  #endif
}
`}function ya(){return[`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_cameraAngle`,`u_resolution`,`u_atlasSize`,`u_atlas`,`u_gamma`,`u_sdfBuffer`,`u_pixelRatio`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_nodeFrameTexture`,`u_nodeFrameTextureWidth`,`u_zoomLabelSizeRatio`,`u_labelPixelSnapping`]}function ba(){return{vertexShader:_a(),fragmentShader:va(),uniforms:ya()}}function xa(e,t,n,r){var i=r.label,a=i===void 0?{}:i,o=a.margin??5,s=a.zoomToLabelSizeRatioFunction??function(){return 1},c=ba(),l=function(e){function t(e,n,r){var i;if(U(this,t),i=G(this,t,[e,n,r]),V(i,`atlasTexture`,null),V(i,`atlasNeedsUpdate`,!1),V(i,`labelGlyphCache`,new Map),i.atlasFontSize=ca.fontSize*Br(),i.atlasManager=new ha({fontSize:i.atlasFontSize}),i.gamma=.025,i.sdfBuffer=ca.cutoff,i.atlasTexture=e.createTexture(),!i.atlasTexture)throw Error(`NodeLabelProgram: failed to create atlas texture`);e.bindTexture(e.TEXTURE_2D,i.atlasTexture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),i.atlasManager.on(ha.ATLAS_UPDATED_EVENT,function(){i.atlasNeedsUpdate=!0});var o={family:a.font?.family||`sans-serif`,weight:a.font?.weight||`normal`,style:a.font?.style||`normal`};return i.defaultFontKey=i.atlasManager.registerFont(o),i}return K(t,e),W(t,[{key:`getDefinition`,value:function(){var e=WebGL2RenderingContext,t=e.FLOAT,n=e.UNSIGNED_BYTE,r=e.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:c.vertexShader,FRAGMENT_SHADER_SOURCE:c.fragmentShader,METHOD:r,UNIFORMS:c.uniforms,ATTRIBUTES:[{name:`a_nodeIndex`,size:1,type:t},{name:`a_charOffset`,size:2,type:t},{name:`a_charSize`,size:2,type:t},{name:`a_texCoords`,size:4,type:t},{name:`a_color`,size:4,type:n,normalized:!0},{name:`a_margin`,size:1,type:t},{name:`a_positionMode`,size:1,type:t},{name:`a_labelWidth`,size:1,type:t},{name:`a_labelHeight`,size:1,type:t},{name:`a_verticalCenter`,size:1,type:t},{name:`a_textHeight`,size:1,type:t},{name:`a_labelAngle`,size:1,type:t}],CONSTANT_ATTRIBUTES:[{name:`a_quadCorner`,size:2,type:t}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:`prepareLabelGlyphs`,value:function(e,t){if(t.hidden||!t.text)this.labelGlyphCache.delete(e);else{var n=t.text,r=t.fontKey||this.defaultFontKey;this.atlasManager.ensureGlyphs(n,r);var i=[],a=[],o=0,s=0,c=0,l=B(n),u;try{for(l.s();!(u=l.n()).done;){var d=u.value.codePointAt(0);if(d===void 0)i.push(void 0),a.push(o);else{var f=this.atlasManager.getGlyph(d,r);i.push(f),a.push(o),f&&(o+=f.advance,s=Math.max(s,f.bearingY),c=Math.max(c,f.atlasHeight-f.bearingY))}}}catch(e){l.e(e)}finally{l.f()}this.labelGlyphCache.set(e,{glyphs:i,xOffsets:a,totalWidth:o,totalHeight:s+c,verticalCenterOffset:(s-c)/2})}}},{key:`processCharacter`,value:function(e,t,n,r){var i=this.floats,a=this.STRIDE,o=e*a,s=this.labelGlyphCache.get(t.parentKey);if(!s||!s.glyphs[r])for(var c=0;c<a;c++)i[o+c]=0;else{var l=s.glyphs[r],u=s.xOffsets[r],d=t.size/this.atlasFontSize,f=Zt(t.color),p=o;i[p++]=t.nodeIndex,i[p++]=(u+l.bearingX)*d,i[p++]=-l.bearingY*d,i[p++]=l.atlasWidth*d,i[p++]=l.atlasHeight*d,i[p++]=l.atlasX,i[p++]=l.atlasY,i[p++]=l.atlasWidth,i[p++]=l.atlasHeight,i[p++]=f,i[p++]=t.margin,i[p++]=ci[t.position],i[p++]=s.totalWidth*d,i[p++]=t.size,i[p++]=s.verticalCenterOffset*d,i[p++]=s.totalHeight*d,i[p++]=t.labelAngle}}},{key:`processLabel`,value:function(e,n,r){return this.prepareLabelGlyphs(e,r),X(t,`processLabel`,this,3)([e,n,r])}},{key:`updateAtlasTexture`,value:function(){if(this.atlasNeedsUpdate){var e=this.normalProgram.gl,t=this.atlasManager.getTextures();if(t.length!==0){var n=t[0];e.bindTexture(e.TEXTURE_2D,this.atlasTexture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n.width,n.height,0,e.RGBA,e.UNSIGNED_BYTE,n.data),e.bindTexture(e.TEXTURE_2D,null),this.atlasNeedsUpdate=!1}}}},{key:`setUniforms`,value:function(e,n){var r=n.gl,i=n.uniformLocations;r.uniformMatrix3fv(i.u_matrix,!1,e.matrix),r.uniform1f(i.u_sizeRatio,e.sizeRatio),r.uniform1f(i.u_correctionRatio,e.correctionRatio),r.uniform1f(i.u_cameraAngle,e.cameraAngle),r.uniform2f(i.u_resolution,e.width*e.pixelRatio,e.height*e.pixelRatio);var a=this.atlasManager.getTextures();a.length>0?r.uniform2f(i.u_atlasSize,a[0].width,a[0].height):r.uniform2f(i.u_atlasSize,1,1),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,this.atlasTexture),r.uniform1i(i.u_atlas,0),i.u_nodeDataTexture!==void 0&&r.uniform1i(i.u_nodeDataTexture,e.nodeDataTextureUnit),i.u_nodeDataTextureWidth!==void 0&&r.uniform1i(i.u_nodeDataTextureWidth,e.nodeDataTextureWidth),r.uniform1i(i.u_nodeFrameTexture,e.nodeFrameTextureUnit),r.uniform1i(i.u_nodeFrameTextureWidth,e.nodeFrameTextureWidth),r.uniform1f(i.u_gamma,this.gamma),r.uniform1f(i.u_sdfBuffer,this.sdfBuffer),r.uniform1f(i.u_pixelRatio,e.pixelRatio),r.uniform1f(i.u_zoomLabelSizeRatio,1/t.zoomToLabelSizeRatioFunction(e.zoomRatio)),r.uniform1f(i.u_labelPixelSnapping,e.labelPixelSnapping)}},{key:`renderProgram`,value:function(e,n){this.updateAtlasTexture(),this.atlasManager.hasPendingGlyphs()&&(this.atlasManager.flush(),this.updateAtlasTexture()),X(t,`renderProgram`,this,3)([e,n])}},{key:`registerFont`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:`normal`,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:`normal`;return this.atlasManager.registerFont({family:e,weight:t,style:n})}},{key:`getAtlasManager`,value:function(){return this.atlasManager}},{key:`measureLabel`,value:function(e,t,n){var r=n||this.defaultFontKey;this.atlasManager.ensureGlyphs(e,r),this.atlasManager.hasPendingGlyphs()&&this.atlasManager.flush();var i=0,a=0,o=0,s=B(e),c;try{for(s.s();!(c=s.n()).done;){var l=c.value.codePointAt(0);if(l!==void 0){var u=this.atlasManager.getGlyph(l,r);u&&(i+=u.advance,a=Math.max(a,u.bearingY),o=Math.max(o,u.atlasHeight-u.bearingY))}}}catch(e){s.e(e)}finally{s.f()}var d=t/this.atlasFontSize;return{width:i*d,height:t,textHeight:(a+o)*d}}},{key:`ensureGlyphsReady`,value:function(e,t){var n=t||this.defaultFontKey,r=B(e),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;this.atlasManager.ensureGlyphs(a,n)}}catch(e){r.e(e)}finally{r.f()}this.atlasManager.flush()}},{key:`kill`,value:function(){var e=this.normalProgram.gl;this.atlasTexture&&=(e.deleteTexture(this.atlasTexture),null),this.atlasManager.destroy(),this.labelGlyphCache.clear(),X(t,`kill`,this,3)([])}}])}(ia);return V(l,`labelMargin`,o),V(l,`zoomToLabelSizeRatioFunction`,s),new l(e,t,n)}var Sa=`#version 300 es
precision highp float;

in float v_edgeDist;

// R32F target: only the .r channel is stored.
out vec4 fragColor;

void main() {
  fragColor = vec4(v_edgeDist, 0.0, 0.0, 0.0);
}
`;function Ca(e,t,n){var r=ai(e),i=oi(e).map(function(e){return`uniform ${e.type} ${e.name};`}).join(`
`),a=xi(e,n),o=a.code,s=a.multiShape,c=Ki(e,t),l=Object.keys(c.specs).map(function(e){return`float v_${e};`}).join(`
`),u=Fi(c,{varPrefix:`nodeAttr`,baseTexelExpr:`nodeIdx * u_layerAttributeTexelsPerNode`,textureWidthUniform:`u_layerAttributeTextureWidth`,textureSamplerUniform:`u_layerAttributeTexture`});return`#version 300 es
precision highp float;

uniform float u_cameraAngle;
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform float u_frameTextureWidth;
uniform float u_frameTextureHeight;
uniform sampler2D u_layerAttributeTexture;
uniform int u_layerAttributeTextureWidth;
uniform int u_layerAttributeTexelsPerNode;
${i}

in float a_nodeIndex;     // node-data texture index (also the target frame texel)
in float a_positionMode;  // 0=right 1=left 2=above 3=below 4=over
in float a_labelAngle;    // intrinsic label angle (radians)

out float v_edgeDist;

// Shape attributes (plain globals: this pass is vertex-only)
${l}

${_i}
${vi}
${r}
${o}
${di}

void main() {
  int nodeIdx = int(a_nodeIndex);
${u.fetchCode}
${u.varyingAssignments}
  ${s?`// Multi-shape: the shape id lives in the node-data texture's .w channel:
  g_shapeId = int(readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx).w);`:`// Single-shape mode, shape id not needed`}

  // Per-node rotation alignment (0 = viewport, 1 = graph).
  vec4 nodeFlags = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, nodeIdx);
  float nodeRotation = nodeFlags.r;
  float labelRotation = nodeFlags.g;

  // Effective angle: intrinsic (style-given) plus the camera angle when the label
  // is graph-aligned. The companions place the box at this same angle.
  float effectiveAngle = a_labelAngle - labelRotation * u_cameraAngle;

  // The "over" mode (4) sits on the node center, so it has no edge distance.
  float edgeDist = 0.0;
  if (a_positionMode < 4.0) {
    vec2 screenDir = getLabelDirection(a_positionMode);
    // Rotate by the effective label angle. Inlined rather than via rotate2D()
    // because the shape SDFs (getShapeGLSLForShapes) already define that helper
    // for multi-shape programs, and redefining it would be a GLSL error.
    float ea_c = cos(effectiveAngle);
    float ea_s = sin(effectiveAngle);
    vec2 rotatedScreenDir = mat2(ea_c, -ea_s, ea_s, ea_c) * screenDir;
    // Screen (Y-down) -> SDF (Y-up).
    vec2 sdfDir = vec2(rotatedScreenDir.x, -rotatedScreenDir.y);
    // Counter-rotate into the shape's local frame for graph-aligned nodes, so the
    // boundary is queried against the shape's actual on-screen orientation.
    float nodeCa = -u_cameraAngle * nodeRotation;
    float nc = cos(nodeCa), ns = sin(nodeCa);
    sdfDir = mat2(nc, -ns, ns, nc) * sdfDir;
    edgeDist = findEdgeDistance(sdfDir, 1.0);
  }
  v_edgeDist = edgeDist;

  // Scatter to this node's texel center in the frame texture.
  float x = mod(a_nodeIndex, u_frameTextureWidth);
  float y = floor(a_nodeIndex / u_frameTextureWidth);
  vec2 ndc = (vec2(x, y) + 0.5) / vec2(u_frameTextureWidth, u_frameTextureHeight) * 2.0 - 1.0;
  gl_Position = vec4(ndc, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`}var wa=function(){function e(t,n){U(this,e),V(this,`uniformLocations`,{});var r=n.shapes,i=n.layers,a=n.shapeGlobalIds;if(r.length===0)throw Error(`NodeLabelFramePass: at least one shape must be provided`);this.gl=t,this.shapeUniforms=oi(r),this.hasAttributeData=Object.keys(Ki(r,i).offsets).length>0,this.vertexShader=Wr(t,Ca(r,i,a)),this.fragmentShader=Gr(t,Sa),this.program=Kr(t,[this.vertexShader,this.fragmentShader]);var o=B([`u_cameraAngle`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_frameTextureWidth`,`u_frameTextureHeight`,`u_layerAttributeTexture`,`u_layerAttributeTextureWidth`,`u_layerAttributeTexelsPerNode`].concat(q(this.shapeUniforms.map(function(e){return e.name})))),s;try{for(o.s();!(s=o.n()).done;){var c=s.value;this.uniformLocations[c]=t.getUniformLocation(this.program,c)}}catch(e){o.e(e)}finally{o.f()}var l=e.FLOATS_PER_POINT*4;this.vao=t.createVertexArray(),this.buffer=t.createBuffer(),t.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,this.buffer);var u=B([[`a_nodeIndex`,0],[`a_positionMode`,4],[`a_labelAngle`,8]]),d;try{for(u.s();!(d=u.n()).done;){var f=z(d.value,2),p=f[0],m=f[1],h=t.getAttribLocation(this.program,p);h>=0&&(t.enableVertexAttribArray(h),t.vertexAttribPointer(h,1,t.FLOAT,!1,l,m))}}catch(e){u.e(e)}finally{u.f()}t.bindVertexArray(null)}return W(e,[{key:`run`,value:function(t,n,r,i,a){if(n!==0){var o=this.gl;o.useProgram(this.program),o.bindVertexArray(this.vao),o.bindBuffer(o.ARRAY_BUFFER,this.buffer),o.bufferData(o.ARRAY_BUFFER,t.subarray(0,n*e.FLOATS_PER_POINT),o.DYNAMIC_DRAW);var s=this.uniformLocations;o.uniform1f(s.u_cameraAngle,i.cameraAngle),o.uniform1i(s.u_nodeDataTexture,i.nodeDataTextureUnit),o.uniform1i(s.u_nodeDataTextureWidth,i.nodeDataTextureWidth),o.uniform1f(s.u_frameTextureWidth,r.getTextureWidth()),o.uniform1f(s.u_frameTextureHeight,r.getTextureHeight()),this.hasAttributeData&&a&&(a.bind(Wi),s.u_layerAttributeTexture&&o.uniform1i(s.u_layerAttributeTexture,Wi),s.u_layerAttributeTextureWidth&&o.uniform1i(s.u_layerAttributeTextureWidth,a.getTextureWidth()),s.u_layerAttributeTexelsPerNode&&o.uniform1i(s.u_layerAttributeTexelsPerNode,a.getTexelsPerItem()));var c=B(this.shapeUniforms),l;try{for(c.s();!(l=c.n()).done;){var u=l.value;Ii(o,this.uniformLocations[u.name],u)}}catch(e){c.e(e)}finally{c.f()}r.bindAsRenderTarget(),o.disable(o.BLEND),o.disable(o.DEPTH_TEST),o.drawArrays(o.POINTS,0,n),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindVertexArray(null)}}},{key:`kill`,value:function(){var e=this.gl;e.deleteProgram(this.program),e.deleteShader(this.vertexShader),e.deleteShader(this.fragmentShader),e.deleteBuffer(this.buffer),e.deleteVertexArray(this.vao)}}])}();V(wa,`FLOATS_PER_POINT`,3);function Ta(e,t,n,r,i){var a,o=r.label,s=o===void 0?{}:o,c=r.shapes;if(c.length===0)throw Error(`createNodeProgram: at least one shape must be provided in 'shapes'`);var l={},u=[],d;c.forEach(function(e,t){var n=ei(e);t===0&&(d=n),l[e.name]=t,u[t]=ti(n)});var f=q(r.layers),p=Zi({shapes:c,layers:f,shapeGlobalIds:c.length>1?u:void 0,antialias:i}),m=xa(e,null,n,{label:s}),h=ra(e,null,n,{shapes:c,layers:f,getAttributeTexture:function(){return S.getAttributeTexture()},label:s,shapeGlobalIds:c.length>1?u:void 0}),g=sa(e,t,n,{label:s}),_=r.labelAttachments&&Object.keys(r.labelAttachments).length>0?Ui(e,null,n,{label:s}):null,v=new wa(e,{shapes:c,layers:f,shapeGlobalIds:c.length>1?u:void 0}),y=Gi(c,f),b=Ai(y),x=(a=function(e){function t(e,n,r){var i;U(this,t),i=G(this,t,[e,n,r]),V(i,`layerLifecycles`,new Map),V(i,`layersNeedingRegeneration`,new Set),V(i,`attrDescriptors`,[]),i._pickingBuffer=n;var a=x.layerTextures.get(e);a||(a=new ji(e,b),x.layerTextures.set(e,a)),i.layerAttributeTexture=a;var o=x.textureRefCounts.get(e)||0;x.textureRefCounts.set(e,o+1),i.packedAttributeData=new Float32Array(b.floatsPerItem),f.forEach(function(t,n){if(t.lifecycle){var a={gl:e,renderer:{refresh:function(){return r.refresh()}},getUniformLocation:function(t){return e.getUniformLocation(i.normalProgram.program,t)},requestShaderRegeneration:function(){i.layersNeedingRegeneration.add(n)},requestRefresh:function(){r.refresh()}},o=t.lifecycle(a);i.layerLifecycles.set(n,o)}}),i.layerLifecycles.forEach(function(e){var t;(t=e.init)==null||t.call(e)});var s=new Map;return i.layerLifecycles.forEach(function(e,t){e.getAttributeData&&s.set(t,e)}),i.attrDescriptors=Mi(y,b,s),i}return K(t,e),W(t,[{key:`getDefinition`,value:function(){var e=WebGL2RenderingContext,t=e.FLOAT,n=e.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:p.vertexShader,FRAGMENT_SHADER_SOURCE:p.fragmentShader,METHOD:n,UNIFORMS:p.uniforms,ATTRIBUTES:p.attributes,CONSTANT_ATTRIBUTES:[{name:`a_quadCorner`,size:2,type:t}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:`maybeRegenerateShaders`,value:function(){var e=this;if(this.layersNeedingRegeneration.size!==0){f=f.map(function(t,n){if(e.layersNeedingRegeneration.has(n)){var r=e.layerLifecycles.get(n);if(r!=null&&r.regenerate)return H(H({},r.regenerate()),{},{lifecycle:t.lifecycle})}return t}),this.layersNeedingRegeneration.clear(),p=Zi({shapes:c,layers:f,shapeGlobalIds:c.length>1?u:void 0,antialias:this.renderer.getSetting(`antialiasNodes`)});var t=this.normalProgram.gl,n=this.normalProgram,r=n.program,i=n.buffer,a=n.vertexShader,o=n.fragmentShader;t.deleteProgram(r),t.deleteBuffer(i),t.deleteShader(a),t.deleteShader(o),this.normalProgram=this.getProgramInfo(`normal`,t,p.vertexShader,p.fragmentShader,this._pickingBuffer)}}},{key:`allocateNode`,value:function(e){this.layerAttributeTexture.allocate(e)}},{key:`freeNode`,value:function(e){this.layerAttributeTexture.free(e)}},{key:`getAttributeTexture`,value:function(){return this.layerAttributeTexture}},{key:`uploadLayerTexture`,value:function(){this.layerAttributeTexture.upload()}},{key:`process`,value:function(e,t,n,r,i){var a=t*this.STRIDE;if(n.visibility===`hidden`){for(var o=a+this.STRIDE;a<o;a++)this.floats[a]=0;this.floats[t*this.STRIDE]=Oi}else this.processVisibleItem($t(e),a,n,r,i)}},{key:`processVisibleItem`,value:function(e,t,n,r,i){var a=this.floats,o=this.ints;if(a[t++]=r,o[t++]=e,a[t++]=n.opacity??1,b.floatsPerItem!==0){var s=this.packedAttributeData;Ni(this.attrDescriptors,n,s,n.color,this.layerLifecycles,0),this.layerAttributeTexture.updateAllAttributes(i,s)}}},{key:`setUniforms`,value:function(e,t){var n=this,r=t.gl,i=t.uniformLocations;i.u_matrix&&r.uniformMatrix3fv(i.u_matrix,!1,e.matrix),i.u_sizeRatio&&r.uniform1f(i.u_sizeRatio,e.sizeRatio),i.u_correctionRatio&&r.uniform1f(i.u_correctionRatio,e.correctionRatio),i.u_pickingPadding&&r.uniform1f(i.u_pickingPadding,e.nodePickingPadding),i.u_cameraAngle&&r.uniform1f(i.u_cameraAngle,e.cameraAngle),i.u_nodeDataTexture&&r.uniform1i(i.u_nodeDataTexture,e.nodeDataTextureUnit),i.u_nodeDataTextureWidth&&r.uniform1i(i.u_nodeDataTextureWidth,e.nodeDataTextureWidth),i.u_layerAttributeTexture&&(this.layerAttributeTexture.bind(Wi),r.uniform1i(i.u_layerAttributeTexture,Wi)),i.u_layerAttributeTextureWidth&&r.uniform1i(i.u_layerAttributeTextureWidth,this.layerAttributeTexture.getTextureWidth()),i.u_layerAttributeTexelsPerNode&&r.uniform1i(i.u_layerAttributeTexelsPerNode,this.layerAttributeTexture.getTexelsPerItem()),c.forEach(function(e){e.uniforms.forEach(function(e){n.setTypedUniform(e,t)})}),f.forEach(function(e){e.uniforms.forEach(function(e){n.setTypedUniform(e,t)})})}},{key:`render`,value:function(e,n,r){this.maybeRegenerateShaders(),X(t,`render`,this,3)([e,n,r])}},{key:`renderProgram`,value:function(e,n){var r=n.gl,i=n.program;r.useProgram(i),n===this.normalProgram&&this.layerLifecycles.forEach(function(e){var t;(t=e.beforeRender)==null||t.call(e)}),X(t,`renderProgram`,this,3)([e,n])}},{key:`kill`,value:function(){this.layerLifecycles.forEach(function(e){var t;(t=e.kill)==null||t.call(e)}),this.layerLifecycles.clear();var e=this.normalProgram.gl,n=(x.textureRefCounts.get(e)||1)-1;n<=0?(this.layerAttributeTexture.kill(),x.layerTextures.delete(e),x.textureRefCounts.delete(e)):x.textureRefCounts.set(e,n),X(t,`kill`,this,3)([])}}])}(zi),V(a,`layerTextures`,new WeakMap),V(a,`textureRefCounts`,new WeakMap),a),S=new x(e,null,n);return{nodeProgram:S,labelProgram:m,backdropProgram:h,labelBackgroundProgram:g,attachmentProgram:_,framePass:v,shapeSlug:d,shapeNameToIndex:c.length>1?l:void 0,shapeGlobalIds:c.length>1?u:void 0}}var Ea=6;function Da(e){var t=e.offsets,n=e.specs,r=e.floatsPerItem,i=Object.keys(t);if(i.length===0||r===0)return{uniformDeclarations:``,uniformNames:[],vertexVaryingDeclarations:``,fragmentVaryingDeclarations:``,fetchCode:``,varyingAssignments:``};var a=`
uniform sampler2D u_edgeAttributeTexture;
uniform int u_edgeAttributeTextureWidth;
uniform int u_edgeAttributeTexelsPerEdge;`,o=[`u_edgeAttributeTexture`,`u_edgeAttributeTextureWidth`,`u_edgeAttributeTexelsPerEdge`],s=i.map(function(e){return`${n[e].size===1?`float`:`vec${n[e].size}`} v_${e};`}),c=s.map(function(e){return`out ${e}`}).join(`
`),l=s.map(function(e){return`in ${e}`}).join(`
`),u=Fi(e,{varPrefix:`attr`,baseTexelExpr:`edgeIdx * u_edgeAttributeTexelsPerEdge`,textureWidthUniform:`u_edgeAttributeTextureWidth`,textureSamplerUniform:`u_edgeAttributeTexture`});return{uniformDeclarations:a,uniformNames:o,vertexVaryingDeclarations:c,fragmentVaryingDeclarations:l,fetchCode:u.fetchCode,varyingAssignments:u.varyingAssignments}}function Oa(e){return`
float findSourceClampT_${e}(vec2 source, float sourceSize, int sourceShapeId, float sourceRotateAlign, vec2 target, float margin) {
  float lo = 0.0, hi = 0.5;
  float nodeExtent = sourceSize * u_correctionRatio / u_sizeRatio * 2.0;
  float effectiveSize = 1.0 - u_correctionRatio / nodeExtent;

  // Counter-rotate the query point so viewport-aligned nodes (rotateAlign=0) are
  // clamped against their on-screen orientation; graph-aligned nodes skip it.
  float ca = u_cameraAngle * (1.0 - sourceRotateAlign);
  float rc = cos(ca), rs = sin(ca);
  mat2 rot = mat2(rc, -rs, rs, rc);

  for (int i = 0; i < 12; i++) {
    float mid = (lo + hi) * 0.5;
    vec2 pos = path_${e}_position(mid, source, target);
    vec2 localPos = rot * ((pos - source) / nodeExtent);
    float sdf = querySDF(sourceShapeId, localPos, effectiveSize);
    if (sdf < 0.0) lo = mid;
    else hi = mid;
  }

  float pathLen = path_${e}_length(source, target);
  float marginT = (margin * u_correctionRatio / u_sizeRatio) / pathLen;
  return (lo + hi) * 0.5 + marginT;
}
`}function ka(e){return`
float findTargetClampT_${e}(vec2 source, vec2 target, float targetSize, int targetShapeId, float targetRotateAlign, float margin) {
  float lo = 0.5, hi = 1.0;
  float nodeExtent = targetSize * u_correctionRatio / u_sizeRatio * 2.0;
  float effectiveSize = 1.0 - u_correctionRatio / nodeExtent;

  // See findSourceClampT_ for the rotation rationale.
  float ca = u_cameraAngle * (1.0 - targetRotateAlign);
  float rc = cos(ca), rs = sin(ca);
  mat2 rot = mat2(rc, -rs, rs, rc);

  for (int i = 0; i < 12; i++) {
    float mid = (lo + hi) * 0.5;
    vec2 pos = path_${e}_position(mid, source, target);
    vec2 localPos = rot * ((pos - target) / nodeExtent);
    float sdf = querySDF(targetShapeId, localPos, effectiveSize);
    if (sdf < 0.0) hi = mid;
    else lo = mid;
  }

  float pathLen = path_${e}_length(source, target);
  float marginT = (margin * u_correctionRatio / u_sizeRatio) / pathLen;
  return (lo + hi) * 0.5 - marginT;
}
`}function Aa(e){return`
// Auto-generated numerical tangent (from position via finite differences)
vec2 path_${e}_tangent(float t, vec2 source, vec2 target) {
  float epsilon = 0.001;
  float t1 = max(0.0, t - epsilon);
  float t2 = min(1.0, t + epsilon);
  vec2 p1 = path_${e}_position(t1, source, target);
  vec2 p2 = path_${e}_position(t2, source, target);
  return normalize(p2 - p1);
}

// Auto-generated normal (perpendicular to tangent)
vec2 path_${e}_normal(float t, vec2 source, vec2 target) {
  vec2 tangent = path_${e}_tangent(t, source, target);
  return vec2(-tangent.y, tangent.x);
}
`}function ja(e){return`
// Auto-generated path length (samples position 16 times)
float path_${e}_length(vec2 source, vec2 target) {
  float len = 0.0;
  vec2 prev = path_${e}_position(0.0, source, target);
  for (int i = 1; i <= 16; i++) {
    float t = float(i) / 16.0;
    vec2 curr = path_${e}_position(t, source, target);
    len += length(curr - prev);
    prev = curr;
  }
  return len;
}
`}function Ma(e){return`
// Auto-generated closest_t (coarse sample + ternary search)
float path_${e}_closest_t(vec2 p, vec2 source, vec2 target) {
  // Coarse search: find best among 10 samples
  float bestT = 0.0;
  float bestDist = 1e10;
  for (int i = 0; i <= 10; i++) {
    float t = float(i) / 10.0;
    vec2 pos = path_${e}_position(t, source, target);
    float d = length(p - pos);
    if (d < bestDist) {
      bestDist = d;
      bestT = t;
    }
  }

  // Refine with ternary search
  float lo = max(0.0, bestT - 0.1);
  float hi = min(1.0, bestT + 0.1);
  for (int i = 0; i < 10; i++) {
    float mid1 = lo + (hi - lo) / 3.0;
    float mid2 = hi - (hi - lo) / 3.0;
    float d1 = length(p - path_${e}_position(mid1, source, target));
    float d2 = length(p - path_${e}_position(mid2, source, target));
    if (d1 < d2) {
      hi = mid2;
    } else {
      lo = mid1;
    }
  }
  return (lo + hi) * 0.5;
}
`}function Na(e){return`
// Auto-generated signed distance (via closest_t + normal)
float path_${e}_distance(vec2 p, vec2 source, vec2 target) {
  float closestT = path_${e}_closest_t(p, source, target);
  vec2 closest = path_${e}_position(closestT, source, target);
  vec2 diff = p - closest;
  float dist = length(diff);
  if (dist < 0.0001) return 0.0;

  // Get normal at closest point
  vec2 normal = path_${e}_normal(closestT, source, target);
  return dist * sign(dot(diff, normal));
}
`}function Pa(e){return`
// Auto-generated t_at_distance (binary search)
float path_${e}_t_at_distance(float targetDist, vec2 source, vec2 target) {
  if (targetDist <= 0.0) return 0.0;

  float totalLen = path_${e}_length(source, target);
  if (targetDist >= totalLen) return 1.0;

  // Binary search for t
  float lo = 0.0, hi = 1.0;
  for (int i = 0; i < 12; i++) {
    float mid = (lo + hi) * 0.5;

    // Compute arc length from 0 to mid
    float arcLen = 0.0;
    vec2 prev = path_${e}_position(0.0, source, target);
    for (int j = 1; j <= 8; j++) {
      float t = mid * float(j) / 8.0;
      vec2 curr = path_${e}_position(t, source, target);
      arcLen += length(curr - prev);
      prev = curr;
    }

    if (arcLen < targetDist) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return (lo + hi) * 0.5;
}
`}function Fa(e,t){return RegExp(`\\b(float|vec[234]|void|int|bool)\\s+${t}\\s*\\(`).test(e)}function Ia(e,t){var n=[];return Fa(t,`path_${e}_length`)||n.push(ja(e)),Fa(t,`path_${e}_closest_t`)||n.push(Ma(e)),Fa(t,`path_${e}_distance`)||n.push(Na(e)),Fa(t,`path_${e}_t_at_distance`)||n.push(Pa(e)),n.length>0?`
// ============================================================================
// Auto-generated fallback functions (path only provided position)
// ============================================================================
${n.join(`
`)}`:``}function La(e){var t=e.paths,n=e.layers,r=e.extremities??[];if(t.length===0)throw Error(`At least one path is required in 'paths'`);if(n.length===0)throw Error(`At least one layer is required in 'layers'`);var i=e.defaultHead??`none`,a=e.defaultTail??`none`;return{paths:t,extremities:r,layers:n,path:t[0],layer:n[0],defaultHead:i,defaultTail:a}}var Ra=WebGL2RenderingContext,za=Ra.FLOAT,Ba=Ra.UNSIGNED_BYTE;function Va(e,t,n){var r=new Set(new Set([`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_zoomRatio`,`u_pixelRatio`,`u_cameraAngle`,`u_minEdgeThickness`,`u_pickingPadding`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_edgeDataTexture`,`u_edgeDataTextureWidth`,`u_edgeFrameTexture`,`u_edgeFrameTextureWidth`,`u_edgeAttributeTexture`,`u_edgeAttributeTextureWidth`,`u_edgeAttributeTexelsPerEdge`]));return e.forEach(function(e){return e.uniforms.forEach(function(e){return r.add(e.name)})}),t.forEach(function(e){return e.uniforms.forEach(function(e){return r.add(e.name)})}),n.forEach(function(e){return e.uniforms.forEach(function(e){return r.add(e.name)})}),Array.from(r)}function Ha(e){var t=new Set,n=[],r=B(e),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;t.has(a.name)||(t.add(a.name),n.push(`// Path: ${a.name}`),n.push(a.glsl),n.push(Aa(a.name)),n.push(Ia(a.name,a.glsl)))}}catch(e){r.e(e)}finally{r.f()}return n.join(`

`)}function Ua(e){var t=[],n=B(e),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;t.push(`// Extremity: ${i.name}`),t.push(i.glsl)}}catch(e){n.e(e)}finally{n.f()}return t.join(`

`)}var Wa=[{queryName:`queryPathPosition`,pathFunc:`position`,returnType:`vec2`,params:`float t, vec2 source, vec2 target`,args:`t, source, target`},{queryName:`queryPathTangent`,pathFunc:`tangent`,returnType:`vec2`,params:`float t, vec2 source, vec2 target`,args:`t, source, target`},{queryName:`queryPathNormal`,pathFunc:`normal`,returnType:`vec2`,params:`float t, vec2 source, vec2 target`,args:`t, source, target`},{queryName:`queryPathLength`,pathFunc:`length`,returnType:`float`,params:`vec2 source, vec2 target`,args:`source, target`},{queryName:`queryPathClosestT`,pathFunc:`closest_t`,returnType:`float`,params:`vec2 p, vec2 source, vec2 target`,args:`p, source, target`}];function Ga(e,t){var n=t.queryName,r=t.pathFunc,i=t.returnType,a=t.params,o=t.args;return e.length===1?`${i} ${n}(int pathId, ${a}) {
  return path_${e[0].name}_${r}(${o});
}`:`${i} ${n}(int pathId, ${a}) {
  switch (pathId) {
${e.map(function(e,t){return`    case ${t}: return path_${e.name}_${r}(${o});`}).join(`
`)}
    default: return path_${e[0].name}_${r}(${o});
  }
}`}function Ka(e){return Wa.map(function(t){return Ga(e,t)}).join(`

`)}function qa(e){return e.length===1?`float queryExtremitySDF(int extremityId, vec2 uv, float lengthRatio, float widthRatio) {
  return extremity_${e[0].name}(uv, lengthRatio, widthRatio);
}`:`float queryExtremitySDF(int extremityId, vec2 uv, float lengthRatio, float widthRatio) {
  switch (extremityId) {
${e.map(function(e,t){return`    case ${t}: return extremity_${e.name}(uv, lengthRatio, widthRatio);`}).join(`
`)}
    default: return extremity_${e[0].name}(uv, lengthRatio, widthRatio);
  }
}`}function Ja(e){var t=[],n=B(e),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;t.push(Oa(i.name)),t.push(ka(i.name))}}catch(e){n.e(e)}finally{n.f()}if(e.length===1)t.push(`
float queryFindSourceClampT(int pathId, vec2 source, float sourceSize, int sourceShapeId, float sourceRotateAlign, vec2 target, float margin) {
  return findSourceClampT_${e[0].name}(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);
}

float queryFindTargetClampT(int pathId, vec2 source, vec2 target, float targetSize, int targetShapeId, float targetRotateAlign, float margin) {
  return findTargetClampT_${e[0].name}(source, target, targetSize, targetShapeId, targetRotateAlign, margin);
}`);else{var a=e.map(function(e,t){return`    case ${t}: return findSourceClampT_${e.name}(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);`}).join(`
`),o=e.map(function(e,t){return`    case ${t}: return findTargetClampT_${e.name}(source, target, targetSize, targetShapeId, targetRotateAlign, margin);`}).join(`
`);t.push(`
float queryFindSourceClampT(int pathId, vec2 source, float sourceSize, int sourceShapeId, float sourceRotateAlign, vec2 target, float margin) {
  switch (pathId) {
${a}
    default: return findSourceClampT_${e[0].name}(source, sourceSize, sourceShapeId, sourceRotateAlign, target, margin);
  }
}

float queryFindTargetClampT(int pathId, vec2 source, vec2 target, float targetSize, int targetShapeId, float targetRotateAlign, float margin) {
  switch (pathId) {
${o}
    default: return findTargetClampT_${e[0].name}(source, target, targetSize, targetShapeId, targetRotateAlign, margin);
  }
}`)}return t.join(`

`)}function Ya(e,t,n,r,i){var a=Da(Ai([].concat(q(e),q(n)))),o=Ki(r,i),s=Object.keys(o.offsets),c=function(e){var t=o.specs[e].size;return t===1?`float`:`vec${t}`},l=s.map(function(e){return`${c(e)} v_source_${e};
${c(e)} v_target_${e};`}).join(`
`),u=Fi(o,{varPrefix:`srcNodeAttr`,baseTexelExpr:`srcIdx * u_layerAttributeTexelsPerNode`,textureWidthUniform:`u_layerAttributeTextureWidth`,textureSamplerUniform:`u_layerAttributeTexture`,outputPrefix:`v_source_`}),d=Fi(o,{varPrefix:`tgtNodeAttr`,baseTexelExpr:`tgtIdx * u_layerAttributeTexelsPerNode`,textureWidthUniform:`u_layerAttributeTextureWidth`,textureSamplerUniform:`u_layerAttributeTexture`,outputPrefix:`v_target_`}),f=s.map(function(e){return`${c(e)} g_${e};`}).join(`
`),p=s.map(function(e){return`  g_${e} = v_source_${e};`}).join(`
`),m=s.map(function(e){return`  g_${e} = v_target_${e};`}).join(`
`),h=new Set,g=[],_=function(e){h.has(e.name)||(h.add(e.name),g.push(`uniform ${e.type} ${e.name};`))};e.forEach(function(e){return e.uniforms.forEach(_)}),t.forEach(function(e){return e.uniforms.forEach(_)});var v=t.map(function(e){return Y(e.widthFactor)}).join(`, `),y=Math.max.apply(Math,q(e.map(function(e){return e.minBodyLengthRatio||0})));return`#version 300 es

// Node and edge data textures
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_edgeDataTexture;
uniform int u_edgeDataTextureWidth;

// Edge attribute texture (for path-specific attributes like curvature)
${a.uniformDeclarations}

// Node attribute texture (for node shape attributes)
uniform sampler2D u_layerAttributeTexture;
uniform int u_layerAttributeTextureWidth;
uniform int u_layerAttributeTexelsPerNode;

// Render params needed for clamping
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
uniform float u_minEdgeThickness;

// Edge-frame texture dimensions, for scattering each point to its texel
uniform float u_frameTextureWidth;
uniform float u_frameTextureHeight;

// Custom path/extremity uniforms
${g.join(`
`)}

// Path attribute varyings — assigned so path functions can read them as globals
${a.vertexVaryingDeclarations}

// Node size varyings — read by path functions like loop
out float v_sourceNodeSize;
out float v_targetNodeSize;

// Node shape attributes per endpoint, and the ones querySDF reads
${l}
${f}

// Scattered output written to the edge-frame texel: [tStart, tEnd, straightenFactor, pathLength]
out vec4 v_clamp;

// Extremity width factor array (needed for extremityScale computation)
const float EXTREMITY_WIDTH_FACTORS[${t.length}] = float[](${v});

// Node-data fetch helpers (geometry texel + rotation-flags texel)
${_i}
${vi}

// Shape SDFs for node boundary clamping
${ri()}
${ii(new Set(s))}

// Path functions
${Ha(e)}
${Ka(e)}
${Ja(e)}

void main() {
  // One point per edge-data row; the row index is the edge-frame texel target.
  int edgeIdx = gl_VertexID;
  int texel0Idx = edgeIdx * 2;
  int texel1Idx = edgeIdx * 2 + 1;
  ivec2 edgeTexCoord0 = ivec2(texel0Idx % u_edgeDataTextureWidth, texel0Idx / u_edgeDataTextureWidth);
  ivec2 edgeTexCoord1 = ivec2(texel1Idx % u_edgeDataTextureWidth, texel1Idx / u_edgeDataTextureWidth);
  vec4 edgeData0 = texelFetch(u_edgeDataTexture, edgeTexCoord0, 0);
  vec4 edgeData1 = texelFetch(u_edgeDataTexture, edgeTexCoord1, 0);

  int srcIdx = int(edgeData0.x);
  int tgtIdx = int(edgeData0.y);
  float a_thickness = edgeData0.z;
  float a_headLengthRatio = edgeData1.x;
  float a_tailLengthRatio = edgeData1.y;
  int pathId = int(edgeData1.z);
  int extremityPacked = int(edgeData1.w);
  int headId = extremityPacked >> 4;
  int tailId = extremityPacked & 15;

  // Fetch path/layer attributes and assign to path-function globals
${a.fetchCode}
${a.varyingAssignments}

  // Fetch node shape attributes for both endpoints
${u.fetchCode}
${u.varyingAssignments}
${d.fetchCode}
${d.varyingAssignments}

  // Fetch node geometry (texel 0) and rotation flags (texel 1).
  vec4 srcNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx);
  vec4 tgtNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx);

  vec2 a_source = srcNodeData.xy;
  vec2 a_target = tgtNodeData.xy;
  float a_sourceSize = srcNodeData.z;
  float a_targetSize = tgtNodeData.z;
  float a_sourceShapeId = srcNodeData.w;
  float a_targetShapeId = tgtNodeData.w;
  // Per-node rotation alignment (0 = viewport, 1 = graph), for boundary clamping.
  float a_sourceRotateAlign = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx).r;
  float a_targetRotateAlign = readNodeFlags(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx).r;

  v_sourceNodeSize = a_sourceSize;
  v_targetNodeSize = a_targetSize;

  float headLengthRatio = a_headLengthRatio;
  float tailLengthRatio = a_tailLengthRatio;
  float headWidthFactor = EXTREMITY_WIDTH_FACTORS[headId];
  float tailWidthFactor = EXTREMITY_WIDTH_FACTORS[tailId];
  float minBodyLengthRatio = ${Y(y)};

  // Thickness in WebGL units (needed to compute clamping margin and extremity lengths)
  float pixelsThickness = max(a_thickness, u_minEdgeThickness * u_sizeRatio);
  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;

  // SDF clamping: find where the edge body meets the node boundaries. Always
  // searched (ungated) so labels get a true boundary clamp; the body re-applies
  // its extremity gating in-shader.
${p}
  float tStart = queryFindSourceClampT(pathId, a_source, a_sourceSize, int(a_sourceShapeId), a_sourceRotateAlign, a_target, 0.0);
${m}
  float tEnd = queryFindTargetClampT(pathId, a_source, a_target, a_targetSize, int(a_targetShapeId), a_targetRotateAlign, 0.0);

  // straightenFactor (frame .z) is consumed only by the body, which runs to the
  // node center when an extremity is absent. Derive the straightening math from
  // these gated clamps — not the ungated boundary ones above — so it matches the
  // geometry it drives. The ungated tStart/tEnd remain what labels read.
  float bodyTStart = tailLengthRatio > 0.0 ? tStart : 0.0;
  float bodyTEnd = headLengthRatio > 0.0 ? tEnd : 1.0;

  // Path length and zone boundaries (needed for straightening check)
  float pathLength = queryPathLength(pathId, a_source, a_target);
  float visibleLength = pathLength * (bodyTEnd - bodyTStart);

  float headLength = headLengthRatio * webGLThickness;
  float tailLength = tailLengthRatio * webGLThickness;
  float minBodyLength = minBodyLengthRatio * webGLThickness;

  float totalNeededLength = headLength + tailLength + minBodyLength;
  float extremityScale = 1.0;
  if (totalNeededLength > visibleLength && totalNeededLength > 0.0001) {
    extremityScale = visibleLength / totalNeededLength;
    headLength *= extremityScale;
    tailLength *= extremityScale;
  }

  float headLengthT = pathLength > 0.0001 ? headLength / pathLength : 0.0;
  float tailLengthT = pathLength > 0.0001 ? tailLength / pathLength : 0.0;

  float tTailEnd = bodyTStart + tailLengthT;
  float tHeadStart = bodyTEnd - headLengthT;
  if (tTailEnd > tHeadStart) {
    float mid = (bodyTStart + bodyTEnd) * 0.5;
    tTailEnd = mid;
    tHeadStart = mid;
  }

  // Straighten factor: blend toward straight line when path twists in extremity zones
  float straightenFactor = 0.0;
  {
    float maxDeviation = 0.0;
    if (tailLengthT > 0.0001) {
      vec2 tailTang = queryPathTangent(pathId, tTailEnd, a_source, a_target);
      vec2 tailChord = queryPathPosition(pathId, bodyTStart, a_source, a_target)
                     - queryPathPosition(pathId, tTailEnd, a_source, a_target);
      float tailChordLen = length(tailChord);
      if (tailChordLen > 0.0001) {
        maxDeviation = max(maxDeviation, 1.0 - dot(-tailTang, tailChord / tailChordLen));
      }
    }
    if (headLengthT > 0.0001) {
      vec2 headTang = queryPathTangent(pathId, tHeadStart, a_source, a_target);
      vec2 headChord = queryPathPosition(pathId, bodyTEnd, a_source, a_target)
                     - queryPathPosition(pathId, tHeadStart, a_source, a_target);
      float headChordLen = length(headChord);
      if (headChordLen > 0.0001) {
        maxDeviation = max(maxDeviation, 1.0 - dot(headTang, headChord / headChordLen));
      }
    }
    straightenFactor = smoothstep(0.035, 0.5, maxDeviation);
  }

  // When straightening, blend the ungated tStart/tEnd (the label-facing clamps)
  // toward straight-line clamp positions.
  if (straightenFactor > 0.001) {
    if (tailLengthRatio > 0.0) {
${p}
      float srcExtent = a_sourceSize * u_correctionRatio / u_sizeRatio * 2.0;
      float srcEffective = 1.0 - u_correctionRatio / srcExtent;
      float srcCa = u_cameraAngle * (1.0 - a_sourceRotateAlign);
      mat2 srcRot = mat2(cos(srcCa), -sin(srcCa), sin(srcCa), cos(srcCa));
      float lo = 0.0, hi = 0.5;
      for (int i = 0; i < 12; i++) {
        float mid = (lo + hi) * 0.5;
        vec2 pos = mix(a_source, a_target, mid);
        vec2 localPos = srcRot * ((pos - a_source) / srcExtent);
        float sdf = querySDF(int(a_sourceShapeId), localPos, srcEffective);
        if (sdf < 0.0) lo = mid; else hi = mid;
      }
      tStart = mix(tStart, (lo + hi) * 0.5, straightenFactor);
    }
    if (headLengthRatio > 0.0) {
${m}
      float tgtExtent = a_targetSize * u_correctionRatio / u_sizeRatio * 2.0;
      float tgtEffective = 1.0 - u_correctionRatio / tgtExtent;
      float tgtCa = u_cameraAngle * (1.0 - a_targetRotateAlign);
      mat2 tgtRot = mat2(cos(tgtCa), -sin(tgtCa), sin(tgtCa), cos(tgtCa));
      float lo = 0.5, hi = 1.0;
      for (int i = 0; i < 12; i++) {
        float mid = (lo + hi) * 0.5;
        vec2 pos = mix(a_source, a_target, mid);
        vec2 localPos = tgtRot * ((pos - a_target) / tgtExtent);
        float sdf = querySDF(int(a_targetShapeId), localPos, tgtEffective);
        if (sdf < 0.0) hi = mid; else lo = mid;
      }
      tEnd = mix(tEnd, (lo + hi) * 0.5, straightenFactor);
    }
  }

  v_clamp = vec4(tStart, tEnd, straightenFactor, pathLength);

  // Scatter this point to its edge's texel center in the frame texture.
  float x = mod(float(edgeIdx), u_frameTextureWidth);
  float y = floor(float(edgeIdx) / u_frameTextureWidth);
  vec2 ndc = (vec2(x, y) + 0.5) / vec2(u_frameTextureWidth, u_frameTextureHeight) * 2.0 - 1.0;
  gl_Position = vec4(ndc, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`}var Xa=0,Za=1,Qa=2;function $a(e,t,n){var r=[];n&&(r.push([Xa,0,-1],[Xa,0,1]),r.push([Xa,1,-1],[Xa,1,1]));for(var i=0;i<=e;i++){var a=i/e;r.push([Za,a,-1],[Za,a,1])}return t&&(r.push([Qa,0,-1],[Qa,0,1]),r.push([Qa,1,-1],[Qa,1,1])),{data:r,attributes:[{name:`a_zone`,size:1,type:za},{name:`a_zoneT`,size:1,type:za},{name:`a_side`,size:1,type:za}],verticesPerEdge:r.length}}function eo(e,t,n,r){var i=Da(Ai([].concat(q(e),q(n)))),a=new Set([`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_zoomRatio`,`u_pixelRatio`,`u_cameraAngle`,`u_minEdgeThickness`,`u_pickingPadding`,`u_nodeDataTexture`]),o=new Set,s=[],c=function(e){!a.has(e.name)&&!o.has(e.name)&&(o.add(e.name),s.push(`uniform ${e.type} ${e.name};`))};e.forEach(function(e){return e.uniforms.forEach(c)}),t.forEach(function(e){return e.uniforms.forEach(c)}),n.forEach(function(e){return e.uniforms.forEach(c)});var l=r.map(function(e){return`in ${e.size===1?`float`:`vec${e.size}`} ${e.name};`}).join(`
`),u=t.map(function(e){return Y(e.widthFactor)}).join(`, `),d=Math.max.apply(Math,q(e.map(function(e){return e.minBodyLengthRatio||0}))),f=n.some(function(e){return e.needsNodeColors}),p=e.some(function(e){return e.needsNodeSize});return`#version 300 es

// Constant attributes (per vertex)
${l}

// Per-edge attributes
// Edge data (source/target indices, thickness, extremity ratios, path/extremity IDs)
// is fetched from edge data texture via edge index
in float a_edgeIndex;   // Index into edge data texture
in vec4 a_color;        // Edge color
in vec4 a_id;           // Edge ID for picking
in float a_opacity;     // Edge opacity

// Standard uniforms
uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_zoomRatio;
uniform float u_pixelRatio;
uniform float u_cameraAngle;
uniform float u_minEdgeThickness;
#ifdef PICKING_MODE
uniform float u_pickingPadding;
#endif
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_edgeDataTexture;
uniform int u_edgeDataTextureWidth;
uniform sampler2D u_edgeFrameTexture;
uniform int u_edgeFrameTextureWidth;

// Edge path attribute texture uniforms
${i.uniformDeclarations}

// Custom uniforms
${s.join(`
`)}

// Standard varyings
out vec4 v_color;
out float v_opacity;
out vec4 v_id;
out float v_thickness;       // Edge body thickness (in consistent units)
out float v_t;
out float v_tStart;
out float v_tEnd;
out float v_side;
out float v_antialiasingWidth;  // Anti-aliasing width (normalized: u_correctionRatio / thickness)
out vec2 v_source;
out vec2 v_target;
out float v_edgeLength;
${p?`
out float v_sourceNodeSize;  // Source node size (mirrored in labels/generator.ts as plain float)
out float v_targetNodeSize;  // Target node size (mirrored in labels/generator.ts as plain float)`:``}
${f?`
out vec4 v_sourceColor;
out vec4 v_targetColor;`:``}
// Zone varyings
out float v_zone;            // 0=tail, 1=body, 2=head
out float v_zoneT;           // Position within zone [0,1]
out float v_headLengthRatio; // Head length as ratio of thickness
out float v_tailLengthRatio; // Tail length as ratio of thickness
out float v_headWidthRatio;  // Head width factor
out float v_tailWidthRatio;  // Tail width factor

// Multi-path/extremity varyings
flat out int v_pathId;
flat out int v_headId;
flat out int v_tailId;

// Path/layer attribute varyings (fetched from edge attribute texture)
${i.vertexVaryingDeclarations}

const float bias = 255.0 / 254.0;

// Width factor array for extremities (shared pool for head/tail)
const float EXTREMITY_WIDTH_FACTORS[${t.length}] = float[](${u});

// All path functions
${Ha(e)}

// Path selector functions
${Ka(e)}

// Node-data fetch helper (geometry texel of the two-texel node stride)
${_i}
${f?yi:``}
// Per-edge clamp from the frame-pass (tStart, tEnd, straightenFactor, pathLength)
${bi}

void main() {
  // Fetch edge data from edge texture (2 texels per edge)
  // Texel 0: sourceNodeIndex, targetNodeIndex, thickness, reserved
  // Texel 1: headLengthRatio, tailLengthRatio, pathId, (headId << 4) | tailId
  int edgeIdx = int(a_edgeIndex);

  // Hidden edges are flagged with a negative row by EdgeProgram.process(). Push
  // the whole primitive outside the clip volume: every vertex lands at the same
  // out-of-range position, so it is fully clipped and rasterizes nothing —
  // neither to the frame buffer nor to the picking buffer.
  if (edgeIdx < 0) {
    gl_Position = vec4(2.0, 0.0, 0.0, 1.0);
    v_color = vec4(0.0);
    v_id = vec4(0.0);
    return;
  }

  int texel0Idx = edgeIdx * 2;
  int texel1Idx = edgeIdx * 2 + 1;
  ivec2 edgeTexCoord0 = ivec2(texel0Idx % u_edgeDataTextureWidth, texel0Idx / u_edgeDataTextureWidth);
  ivec2 edgeTexCoord1 = ivec2(texel1Idx % u_edgeDataTextureWidth, texel1Idx / u_edgeDataTextureWidth);
  vec4 edgeData0 = texelFetch(u_edgeDataTexture, edgeTexCoord0, 0);
  vec4 edgeData1 = texelFetch(u_edgeDataTexture, edgeTexCoord1, 0);

  // Unpack edge data
  int srcIdx = int(edgeData0.x);
  int tgtIdx = int(edgeData0.y);
  float a_thickness = edgeData0.z;
  // edgeData0.w is now reserved (curvature moved to path attribute texture)
  float a_headLengthRatio = edgeData1.x;
  float a_tailLengthRatio = edgeData1.y;
  int pathId = int(edgeData1.z);
  int extremityPacked = int(edgeData1.w);
  int headId = extremityPacked >> 4;
  int tailId = extremityPacked & 15;

  // Fetch path/layer attributes from edge attribute texture
${i.fetchCode}

  // Assign path/layer attribute varyings
${i.varyingAssignments}

  // Fetch source and target node geometry (texel 0 of the two-texel node stride)
  vec4 srcNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx);
  vec4 tgtNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx);

  vec2 a_source = srcNodeData.xy;
  vec2 a_target = tgtNodeData.xy;
${p?`
  // Assign node size varyings early (path functions like loops need them during clamping)
  v_sourceNodeSize = srcNodeData.z;
  v_targetNodeSize = tgtNodeData.z;`:``}
${f?`
  v_sourceColor = readNodeColor(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx);
  v_targetColor = readNodeColor(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx);`:``}

  // Convert thickness to WebGL units
  float minThickness = u_minEdgeThickness;
  float pixelsThickness = max(a_thickness, minThickness * u_sizeRatio);
  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;

  // Extremity parameters from ID lookups (shared pool)
  float headLengthRatio = a_headLengthRatio;
  float tailLengthRatio = a_tailLengthRatio;
  float headWidthFactor = EXTREMITY_WIDTH_FACTORS[headId];
  float tailWidthFactor = EXTREMITY_WIDTH_FACTORS[tailId];
  float minBodyLengthRatio = ${Y(d)};

  // Per-edge values from the frame-pass texture (read by edge index).
  // tStart/tEnd are the ungated boundary clamps: re-apply the body's extremity
  // gating here (no extremity → body runs to the node center, 0/1).
  vec4 frameClamp = readFrameTexel(u_edgeFrameTexture, u_edgeFrameTextureWidth, edgeIdx);
  float tStart           = a_tailLengthRatio > 0.0 ? frameClamp.x : 0.0;
  float tEnd             = a_headLengthRatio > 0.0 ? frameClamp.y : 1.0;
  float straightenFactor = frameClamp.z;
  float pathLength       = frameClamp.w;

  // Anti-aliasing width (~1 pixel, normalized by thickness)
  float antialiasingWidth = u_correctionRatio / webGLThickness;

  float visibleLength = pathLength * (tEnd - tStart);

  // Compute extremity lengths in world units
  float headLength = headLengthRatio * webGLThickness;
  float tailLength = tailLengthRatio * webGLThickness;
  float minBodyLength = minBodyLengthRatio * webGLThickness;

  // Handle short edges: scale down extremities if needed
  float totalNeededLength = headLength + tailLength + minBodyLength;
  float extremityScale = 1.0;
  if (totalNeededLength > visibleLength && totalNeededLength > 0.0001) {
    extremityScale = visibleLength / totalNeededLength;
    headLength *= extremityScale;
    tailLength *= extremityScale;
  }

  // Convert lengths to t-values
  float headLengthT = pathLength > 0.0001 ? headLength / pathLength : 0.0;
  float tailLengthT = pathLength > 0.0001 ? tailLength / pathLength : 0.0;

  // Zone boundaries in t-space
  float tTailEnd = tStart + tailLengthT;
  float tHeadStart = tEnd - headLengthT;

  // Ensure body has non-negative length
  if (tTailEnd > tHeadStart) {
    float mid = (tStart + tEnd) * 0.5;
    tTailEnd = mid;
    tHeadStart = mid;
  }

  // Convert to webGL units for geometry expansion
  float aaWidthWebGL = antialiasingWidth * webGLThickness;

  // Extra geometry width for picking padding (0 in visual mode)
  #ifdef PICKING_MODE
    float pickingPaddingWebGL = u_pickingPadding * u_correctionRatio;
  #else
    float pickingPaddingWebGL = 0.0;
  #endif

  // Straight-line direction and normal (for blending when straightenFactor > 0)
  vec2 straightDir = length(a_target - a_source) > 0.0001
    ? normalize(a_target - a_source) : vec2(1.0, 0.0);
  vec2 straightNormal = vec2(-straightDir.y, straightDir.x);

  // Zone-based vertex processing using path selectors
  vec2 position;
  vec2 normal;
  float t;
  float zone = a_zone;
  float zoneT = a_zoneT;
  float side = a_side;

  // Scaled extremity width factors (geometry must be at least as wide as body)
  float scaledTailWidth = max(tailWidthFactor * extremityScale, 1.0);
  float scaledHeadWidth = max(headWidthFactor * extremityScale, 1.0);

  if (zone < 0.5) {
    // TAIL ZONE: rectangular quad with scaled width
    vec2 tang = queryPathTangent(pathId, tTailEnd, a_source, a_target);
    normal = vec2(-tang.y, tang.x);
    vec2 centerPos = mix(queryPathPosition(pathId, tStart, a_source, a_target),
                         queryPathPosition(pathId, tTailEnd, a_source, a_target), zoneT);
    float halfWidth = webGLThickness * scaledTailWidth * 0.5 + aaWidthWebGL + pickingPaddingWebGL;
    position = centerPos + normal * side * halfWidth;
    t = mix(tStart, tTailEnd, zoneT);

  } else if (zone < 1.5) {
    // BODY ZONE: follows path curvature with width = 1.0
    t = mix(tTailEnd, tHeadStart, zoneT);
    normal = queryPathNormal(pathId, t, a_source, a_target);
    float halfWidth = webGLThickness * 0.5 + aaWidthWebGL + pickingPaddingWebGL;
    position = queryPathPosition(pathId, t, a_source, a_target) + normal * side * halfWidth;

  } else {
    // HEAD ZONE: rectangular quad with scaled width
    vec2 tang = queryPathTangent(pathId, tHeadStart, a_source, a_target);
    normal = vec2(-tang.y, tang.x);
    vec2 centerPos = mix(queryPathPosition(pathId, tHeadStart, a_source, a_target),
                         queryPathPosition(pathId, tEnd, a_source, a_target), zoneT);
    float halfWidth = webGLThickness * scaledHeadWidth * 0.5 + aaWidthWebGL + pickingPaddingWebGL;
    position = centerPos + normal * side * halfWidth;
    t = mix(tHeadStart, tEnd, zoneT);
  }

  // Blend toward straight line based on path twist in extremity zones
  if (straightenFactor > 0.001) {
    float zoneWidth = zone < 0.5 ? webGLThickness * scaledTailWidth * 0.5 + aaWidthWebGL + pickingPaddingWebGL :
                      zone < 1.5 ? webGLThickness * 0.5 + aaWidthWebGL + pickingPaddingWebGL :
                      webGLThickness * scaledHeadWidth * 0.5 + aaWidthWebGL + pickingPaddingWebGL;
    vec2 straightPos = mix(a_source, a_target, t) + straightNormal * side * zoneWidth;
    position = mix(position, straightPos, straightenFactor);
  }

  gl_Position = vec4((u_matrix * vec3(position, 1.0)).xy, 0.0, 1.0);

  // Pass varyings to fragment shader
  v_color = a_color;
  v_color.a *= bias;
  v_opacity = a_opacity;
  v_id = a_id;
  v_thickness = webGLThickness;
  v_t = t;
  v_tStart = tStart;
  v_tEnd = tEnd;
  v_side = side;
  v_antialiasingWidth = antialiasingWidth;
  v_source = a_source;
  v_target = a_target;
  v_edgeLength = pathLength;

  // Zone varyings
  v_zone = zone;
  v_zoneT = zoneT;
  v_headLengthRatio = headLengthRatio * extremityScale;
  v_tailLengthRatio = tailLengthRatio * extremityScale;
  // Scale extremity width proportionally with length when crushed
  v_headWidthRatio = headWidthFactor * extremityScale;
  v_tailWidthRatio = tailWidthFactor * extremityScale;

  // Multi-path varyings
  v_pathId = pathId;
  v_headId = headId;
  v_tailId = tailId;
}
`}function to(e,t,n,r){var i=Da(Ai([].concat(q(e),q(n)))),a=new Set([`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_zoomRatio`,`u_pixelRatio`,`u_cameraAngle`,`u_minEdgeThickness`,`u_pickingPadding`]),o=new Set,s=[],c=function(e){!a.has(e.name)&&!o.has(e.name)&&(o.add(e.name),s.push(`uniform ${e.type} ${e.name};`))};e.forEach(function(e){return e.uniforms.forEach(c)}),t.forEach(function(e){return e.uniforms.forEach(c)}),n.forEach(function(e){return e.uniforms.forEach(c)});var l=t.map(function(e){return Y(e.baseRatio??.5)}).join(`, `),u=function(e){return t.length>1?`EXTREMITY_BASE_RATIOS[${e}]`:Y(t[0]?.baseRatio??.5)},d=t.some(function(e){return gn(e.length)?!0:e.length>0}),f=n.some(function(e){return e.needsNodeColors}),p=e.some(function(e){return e.needsNodeSize}),m=n.map(function(e,t){return`  // Layer ${t+1}: ${e.name}
  color = blendOver(color, layer_${e.name}(context));`}).join(`

`);return`#version 300 es
precision highp float;

// Standard varyings
in vec4 v_color;
in float v_opacity;
in vec4 v_id;
in float v_thickness;       // Edge body thickness
in float v_t;
in float v_tStart;
in float v_tEnd;
in float v_side;
in float v_antialiasingWidth;  // Anti-aliasing width (normalized: u_correctionRatio / thickness)
in vec2 v_source;
in vec2 v_target;
in float v_edgeLength;
${p?`
in float v_sourceNodeSize;   // Source node size (mirrored in labels/generator.ts as plain float)
in float v_targetNodeSize;   // Target node size (mirrored in labels/generator.ts as plain float)`:``}
${f?`
in vec4 v_sourceColor;
in vec4 v_targetColor;`:``}
// Zone varyings
in float v_zone;            // 0=tail, 1=body, 2=head
in float v_zoneT;           // Position within zone [0,1]
in float v_headLengthRatio; // Head length as ratio of thickness (scaled for short edges)
in float v_tailLengthRatio; // Tail length as ratio of thickness (scaled for short edges)
in float v_headWidthRatio;  // Head width factor
in float v_tailWidthRatio;  // Tail width factor

// Multi-path/extremity varyings
flat in int v_pathId;
flat in int v_headId;
flat in int v_tailId;

// Path/layer attribute varyings (from vertex shader texture fetch)
${i.fragmentVaryingDeclarations}

// Standard uniforms (needed by some path types)
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_cameraAngle;
#ifdef PICKING_MODE
uniform float u_pickingPadding;
#endif

// Custom uniforms
${s.join(`
`)}

// Fragment output (single target - picking handled via separate pass)
out vec4 fragColor;

${t.length>1?`// Base ratio array for extremities (shared pool for head/tail)
const float EXTREMITY_BASE_RATIOS[${t.length}] = float[](${l});`:``}

// EdgeContext struct
struct EdgeContext {
  float t;                   // Position along path [0, 1]
  float sdf;                 // Signed distance from centerline
  vec2 position;             // World position
  vec2 tangent;              // Path tangent
  vec2 normal;               // Path normal
  float thickness;           // Edge thickness
  float aaWidth;             // Anti-aliasing width
  float edgeLength;          // Total path length
  float tStart;              // Clamped start t
  float tEnd;                // Clamped end t
  float distanceFromSource;  // Arc distance from source
  float distanceToTarget;    // Arc distance to target
};

EdgeContext context;

// Alpha "over" compositing for layer blending
vec4 blendOver(vec4 bg, vec4 fg) {
  float a = fg.a;
  return vec4(mix(bg.rgb, fg.rgb, a), bg.a + a * (1.0 - bg.a));
}

// All path functions
${Ha(e)}

// Path selector functions
${Ka(e)}

// All extremity functions
${Ua(t)}

// Extremity SDF selector (shared pool for head/tail)
${qa(t)}

// Layer functions
${n.map(function(e){return e.glsl}).join(`

`)}

// Helper: Compute arc length using path selector
float computeArcLengthMulti(int pathId, float t0, float t1, vec2 source, vec2 target, int samples) {
  float arcLen = 0.0;
  vec2 prev = queryPathPosition(pathId, t0, source, target);
  for (int i = 1; i <= samples; i++) {
    float t = t0 + (t1 - t0) * float(i) / float(samples);
    vec2 curr = queryPathPosition(pathId, t, source, target);
    arcLen += length(curr - prev);
    prev = curr;
  }
  return arcLen;
}

void main() {
  // Compute normalized t within visible edge (0 = start, 1 = end)
  float tNorm = (v_t - v_tStart) / max(v_tEnd - v_tStart, 0.0001);

  // Edge body half-thickness
  float halfThickness = v_thickness * 0.5;

  // Convert normalized AA width to webGL units (~1 pixel)
  float aaWidthWebGL = v_antialiasingWidth * v_thickness;

  // Distance from centerline based on v_side interpolation
  float zoneWidthFactor = v_zone < 0.5 ? v_tailWidthRatio :
                          v_zone < 1.5 ? 1.0 :
                          v_headWidthRatio;
  // In PICKING_MODE, inflate halfGeometryWidth to match the inflated vertex geometry
  #ifdef PICKING_MODE
    float halfGeometryWidth = halfThickness * zoneWidthFactor + aaWidthWebGL + u_pickingPadding * aaWidthWebGL;
  #else
    float halfGeometryWidth = halfThickness * zoneWidthFactor + aaWidthWebGL;
  #endif
  float distFromCenter = abs(v_side) * halfGeometryWidth;

  // Populate EdgeContext (for layer functions)
  context.t = tNorm;
  context.sdf = distFromCenter - halfThickness;
  context.position = queryPathPosition(v_pathId, v_t, v_source, v_target);
  context.tangent = queryPathTangent(v_pathId, v_t, v_source, v_target);
  context.normal = vec2(-context.tangent.y, context.tangent.x);
  context.thickness = v_thickness;
  context.aaWidth = aaWidthWebGL;
  context.edgeLength = v_edgeLength;
  context.tStart = v_tStart;
  context.tEnd = v_tEnd;

  // Compute arc distances
  float visibleLength = v_edgeLength * (v_tEnd - v_tStart);
  float pathT = v_t;
  float pathTNorm = tNorm;
${e.every(function(e){return e.linearParameterization})?`  // All paths have linear parameterization: t maps directly to arc distance
  context.distanceFromSource = pathTNorm * visibleLength;
  context.distanceToTarget = (1.0 - pathTNorm) * visibleLength;`:e.every(function(e){return!e.linearParameterization})?`  // No paths have linear parameterization: use numerical integration
  context.distanceFromSource = computeArcLengthMulti(v_pathId, v_tStart, pathT, v_source, v_target, 16);
  context.distanceToTarget = computeArcLengthMulti(v_pathId, pathT, v_tEnd, v_source, v_target, 16);`:`  // Mixed parameterization: use analytical for linear paths, numerical for others
  if (${e.filter(function(e){return e.linearParameterization}).map(function(t){return`v_pathId == ${e.indexOf(t)}`}).join(` || `)}) {
    context.distanceFromSource = pathTNorm * visibleLength;
    context.distanceToTarget = (1.0 - pathTNorm) * visibleLength;
  } else {
    context.distanceFromSource = computeArcLengthMulti(v_pathId, v_tStart, pathT, v_source, v_target, 16);
    context.distanceToTarget = computeArcLengthMulti(v_pathId, pathT, v_tEnd, v_source, v_target, 16);
  }`}

  // Compute SDF based on zone using extremity selector (shared pool)
  float bodySDF = distFromCenter - halfThickness;
  float finalSDF;

${d?`  // Base ratios, from baseRatioLookup
  float headBaseRatio = ${u(`v_headId`)};
  float tailBaseRatio = ${u(`v_tailId`)};

  if (v_zone < 0.5) {
    // TAIL ZONE: v_zoneT goes 0 (tip) to 1 (base)
    vec2 uv = vec2((1.0 - v_zoneT) * v_tailLengthRatio, v_side * v_tailWidthRatio * 0.5);
    float tailSDF = queryExtremitySDF(v_tailId, uv, v_tailLengthRatio, v_tailWidthRatio) * v_thickness;

    // Apply union only near base (v_zoneT > 1 - baseRatio)
    if (v_zoneT > 1.0 - tailBaseRatio) {
      finalSDF = min(tailSDF, bodySDF);
    } else {
      finalSDF = tailSDF;
    }
  } else if (v_zone < 1.5) {
    // BODY ZONE: distance from centerline
    finalSDF = bodySDF;
  } else {
    // HEAD ZONE: v_zoneT goes 0 (base) to 1 (tip)
    vec2 uv = vec2(v_zoneT * v_headLengthRatio, v_side * v_headWidthRatio * 0.5);
    float headSDF = queryExtremitySDF(v_headId, uv, v_headLengthRatio, v_headWidthRatio) * v_thickness;

    // Apply union only near base (v_zoneT < baseRatio)
    if (v_zoneT < headBaseRatio) {
      finalSDF = min(headSDF, bodySDF);
    } else {
      finalSDF = headSDF;
    }
  }`:`  // No extremity draws tail/head geometry, so every vertex is body zone.
  finalSDF = bodySDF;`}

  #ifdef PICKING_MODE
    // Picking pass: output edge ID for pixels within the picking area
    if (finalSDF > u_pickingPadding * aaWidthWebGL) discard;
    fragColor = v_id;
  #else
${r?`    // Visual pass: anti-aliased edge with layers, edge opacity applied once
    float alpha = smoothstep(aaWidthWebGL, -aaWidthWebGL, finalSDF) * v_opacity;`:`    // Visual pass: hard-edged (no anti-aliasing gradient) edge with layers, edge opacity applied once
    float alpha = (finalSDF < 0.0 ? 1.0 : 0.0) * v_opacity;`}
    if (alpha < 0.01) discard;

    // Apply layers sequentially with "over" compositing
    vec4 color = vec4(0.0);

${m}

    // Mix with transparent to fade both color AND alpha (pre-multiplied alpha for correct blending)
    fragColor = mix(vec4(0.0), color, alpha);
  #endif
}
`}function no(e,t,n){var r=gn(t.length)?!0:t.length>0,i=gn(n.length)?!0:n.length>0;if(e.generateConstantData){var a=e.generateConstantData();return{data:a.data,attributes:a.attributes,verticesPerEdge:a.verticesPerEdge}}return $a(e.segments,r,i)}function ro(e){var t=La(e),n=t.paths,r=t.extremities,i=t.layers,a=e.antialias??!0,o=new Map,s=new Map,c=new Map,l=B(n),u;try{for(l.s();!(u=l.n()).done;){var d=u.value,f=B(r),p;try{for(f.s();!(p=f.n()).done;){var m=p.value,h=B(r),g;try{for(h.s();!(g=h.n()).done;){var _=g.value,v=`${d.name}:${m.name}:${_.name}`,y=no(d,m,_);o.set(v,y.verticesPerEdge),s.set(v,y.data);var b=B(y.attributes),x;try{for(b.s();!(x=b.n()).done;){var S=x.value;c.has(S.name)||c.set(S.name,S)}}catch(e){b.e(e)}finally{b.f()}}}catch(e){h.e(e)}finally{h.f()}}}catch(e){f.e(e)}finally{f.f()}}}catch(e){l.e(e)}finally{l.f()}var C=Array.from(c.values()),w={};C.forEach(function(e,t){w[e.name]=t});var T=0,E=``,D=B(o),O;try{for(D.s();!(O=D.n()).done;){var k=z(O.value,2),A=k[0],j=k[1];j>T&&(T=j,E=A)}}catch(e){D.e(e)}finally{D.f()}var M=s.get(E)||[],N=z(E.split(`:`),1)[0],P=n.find(function(e){return e.name===N}),F=[];F=P!=null&&P.generateConstantData?P.generateConstantData().attributes:[{name:`a_zone`},{name:`a_zoneT`},{name:`a_side`}];var ee=M.map(function(e){var t=Array(C.length).fill(0);return F.forEach(function(n,r){var i=w[n.name];i!==void 0&&r<e.length&&(t[i]=e[r])}),t});return{vertexShader:eo(n,r,i,C),fragmentShader:to(n,r,i,a),uniforms:Va(n,r,i),attributes:io(),verticesPerEdge:T,constantData:ee,constantAttributes:C,vertexCountsPerCombination:o,constantDataPerCombination:s}}function io(e,t,n){return[{name:`a_edgeIndex`,size:1,type:za},{name:`a_color`,size:4,type:Ba,normalized:!0},{name:`a_id`,size:4,type:Ba,normalized:!0},{name:`a_opacity`,size:1,type:za}]}var ao=`#version 300 es
precision highp float;

in vec4 v_clamp;

// RGBA32F target: stores (tStart, tEnd, straightenFactor, pathLength).
out vec4 fragColor;

void main() {
  fragColor = v_clamp;
}
`,oo=function(){function e(t,n){U(this,e),V(this,`uniformLocations`,{});var r=n.paths,i=n.extremities,a=n.layers,o=n.nodeShapes,s=n.nodeLayers;this.gl=t,this.hasAttributeData=Ai([].concat(q(r),q(a))).floatsPerItem>0,this.hasNodeAttributeData=Object.keys(Ki(o,s).offsets).length>0,this.vertexShader=Wr(t,Ya(r,i,a,o,s)),this.fragmentShader=Gr(t,ao),this.program=Kr(t,[this.vertexShader,this.fragmentShader]);var c=new Set;this.customUniforms=[];for(var l=0,u=[].concat(q(r),q(i));l<u.length;l++){var d=u[l],f=B(d.uniforms),p;try{for(f.s();!(p=f.n()).done;){var m=p.value;c.has(m.name)||(c.add(m.name),this.customUniforms.push(m))}}catch(e){f.e(e)}finally{f.f()}}var h=B([`u_sizeRatio`,`u_correctionRatio`,`u_cameraAngle`,`u_minEdgeThickness`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_edgeDataTexture`,`u_edgeDataTextureWidth`,`u_edgeAttributeTexture`,`u_edgeAttributeTextureWidth`,`u_edgeAttributeTexelsPerEdge`,`u_layerAttributeTexture`,`u_layerAttributeTextureWidth`,`u_layerAttributeTexelsPerNode`,`u_frameTextureWidth`,`u_frameTextureHeight`].concat(q(this.customUniforms.map(function(e){return e.name})))),g;try{for(h.s();!(g=h.n()).done;){var _=g.value;this.uniformLocations[_]=t.getUniformLocation(this.program,_)}}catch(e){h.e(e)}finally{h.f()}this.vao=t.createVertexArray()}return W(e,[{key:`run`,value:function(e,t,n,r,i){if(n!==0){var a=this.gl,o=this.uniformLocations;a.useProgram(this.program),a.bindVertexArray(this.vao),o.u_sizeRatio&&a.uniform1f(o.u_sizeRatio,e.sizeRatio),o.u_correctionRatio&&a.uniform1f(o.u_correctionRatio,e.correctionRatio),o.u_cameraAngle&&a.uniform1f(o.u_cameraAngle,e.cameraAngle),o.u_minEdgeThickness&&a.uniform1f(o.u_minEdgeThickness,e.minEdgeThickness),o.u_nodeDataTexture&&a.uniform1i(o.u_nodeDataTexture,e.nodeDataTextureUnit),o.u_nodeDataTextureWidth&&a.uniform1i(o.u_nodeDataTextureWidth,e.nodeDataTextureWidth),o.u_edgeDataTexture&&a.uniform1i(o.u_edgeDataTexture,e.edgeDataTextureUnit),o.u_edgeDataTextureWidth&&a.uniform1i(o.u_edgeDataTextureWidth,e.edgeDataTextureWidth),o.u_frameTextureWidth&&a.uniform1f(o.u_frameTextureWidth,t.getTextureWidth()),o.u_frameTextureHeight&&a.uniform1f(o.u_frameTextureHeight,t.getTextureHeight()),this.hasAttributeData&&r&&(r.bind(Ea),o.u_edgeAttributeTexture&&a.uniform1i(o.u_edgeAttributeTexture,Ea),o.u_edgeAttributeTextureWidth&&a.uniform1i(o.u_edgeAttributeTextureWidth,r.getTextureWidth()),o.u_edgeAttributeTexelsPerEdge&&a.uniform1i(o.u_edgeAttributeTexelsPerEdge,r.getTexelsPerItem())),this.hasNodeAttributeData&&i&&(i.bind(Wi),o.u_layerAttributeTexture&&a.uniform1i(o.u_layerAttributeTexture,Wi),o.u_layerAttributeTextureWidth&&a.uniform1i(o.u_layerAttributeTextureWidth,i.getTextureWidth()),o.u_layerAttributeTexelsPerNode&&a.uniform1i(o.u_layerAttributeTexelsPerNode,i.getTexelsPerItem()));var s=B(this.customUniforms),c;try{for(s.s();!(c=s.n()).done;){var l=c.value;Ii(a,this.uniformLocations[l.name],l)}}catch(e){s.e(e)}finally{s.f()}t.bindAsRenderTarget(),a.disable(a.BLEND),a.disable(a.DEPTH_TEST),a.drawArrays(a.POINTS,0,n),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindVertexArray(null)}}},{key:`kill`,value:function(){var e=this.gl;e.deleteProgram(this.program),e.deleteShader(this.vertexShader),e.deleteShader(this.fragmentShader),e.deleteVertexArray(this.vao)}}])}();function so(e,t,n,r,i,a){return e.length===1?`${r} ${t}(int pathId, ${i}) {
  return path_${e[0].name}_${n}(${a});
}`:`${r} ${t}(int pathId, ${i}) {
  switch (pathId) {
${e.map(function(e,t){return`    case ${t}: return path_${e.name}_${n}(${a});`}).join(`
`)}
    default: return path_${e[0].name}_${n}(${a});
  }
}`}var co=`
vec3 computeEdgeLabelBodyBounds(
  float tStart, float tEnd, float pathLength,
  float webGLThickness, float headLengthRatio, float tailLengthRatio
) {
  float visibleLength = pathLength * (tEnd - tStart);

  float headLength = headLengthRatio * webGLThickness;
  float tailLength = tailLengthRatio * webGLThickness;
  float totalNeededLength = headLength + tailLength;
  if (totalNeededLength > visibleLength && totalNeededLength > 0.0001) {
    float extremityScale = visibleLength / totalNeededLength;
    headLength *= extremityScale;
    tailLength *= extremityScale;
  }

  float bodyStartDist = tStart * pathLength + tailLength;
  float bodyEndDist = tEnd * pathLength - headLength;
  return vec3(bodyStartDist, bodyEndDist, max(bodyEndDist - bodyStartDist, 0.0));
}
`;function lo(e,t){var n=Y(e),r=Y(t);return`
float computeEdgeLabelAlpha(float bodyLength, float textWidthWebGL) {
  float ratio = textWidthWebGL > 0.0001 ? min(bodyLength / textWidthWebGL, 1.0) : 1.0;
  if (ratio < ${n}) return 0.0;
  if (ratio < ${r}) return (ratio - ${n}) / (${r} - ${n});
  return 1.0;
}
`}var uo=`
float computeEdgeLabelScreenDir(int pathId, float t, vec2 source, vec2 target, mat3 matrix) {
  vec2 tangent = queryPathTangent(pathId, t, source, target);
  return (matrix * vec3(tangent, 0.0)).x < 0.0 ? -1.0 : 1.0;
}
`,fo=`
float computeEdgeLabelPerpOffset(
  float positionMode,
  float halfThickness, float marginWebGL, float halfTextHeight,
  float readingSign, float screenDir
) {
  float magnitude = halfThickness + marginWebGL + halfTextHeight;
  if (positionMode == 1.0) return magnitude * readingSign;
  if (positionMode == 2.0) return -magnitude * readingSign;
  if (positionMode == 3.0) return magnitude * screenDir;
  return 0.0;
}
`;function po(e){var t=e.paths,n=e.minVisibilityThreshold,r=e.fullVisibilityThreshold,i=t.some(function(e){return e.hasSharpCorners}),a=t.map(function(e){return`// --- Path: ${e.name} ---
${e.glsl}

// Tangent/normal functions: analytical if provided, otherwise numerical
${e.analyticalTangentGlsl||Aa(e.name)}

// Auto-generated fallbacks for any missing path functions
${Ia(e.name,e.glsl)}

// Corner skip helpers (for paths with sharp corners like step/taxi)
${e.cornerSkipGlsl||``}
`}).join(`
`),o=i?`// Corner function selectors (only some paths have sharp corners)
vec2 queryGetCornerTs(int pathId, vec2 source, vec2 target) {
  switch (pathId) {
${t.map(function(e,t){return e.hasSharpCorners?`    case ${t}: return path_${e.name}_getCornerTs(source, target);`:`    case ${t}: return vec2(-1.0, -1.0); // No corners for ${e.name}`}).join(`
`)}
    default: return vec2(-1.0, -1.0);
  }
}

vec2 queryGetCornerConcavity(int pathId, vec2 source, vec2 target, float perpOffset) {
  switch (pathId) {
${t.map(function(e,t){return e.hasSharpCorners?`    case ${t}: return path_${e.name}_getCornerConcavity(source, target, perpOffset);`:`    case ${t}: return vec2(0.0, 0.0); // No corners for ${e.name}`}).join(`
`)}
    default: return vec2(0.0, 0.0);
  }
}`:``;return`
// ============================================================================
// Node data fetch (geometry texel) and per-edge clamp fetch (edge-frame texture)
// ============================================================================

${_i}
${bi}

// ============================================================================
// Path Functions (one block per path)
// ============================================================================

${a}

// ============================================================================
// Path Query Selectors (dispatch by pathId)
// ============================================================================

${so(t,`queryPathPosition`,`position`,`vec2`,`float t, vec2 source, vec2 target`,`t, source, target`)}

${so(t,`queryPathTangent`,`tangent`,`vec2`,`float t, vec2 source, vec2 target`,`t, source, target`)}

${so(t,`queryPathNormal`,`normal`,`vec2`,`float t, vec2 source, vec2 target`,`t, source, target`)}

${so(t,`queryPathLength`,`length`,`float`,`vec2 source, vec2 target`,`source, target`)}

${so(t,`queryPathTAtDistance`,`t_at_distance`,`float`,`float dist, vec2 source, vec2 target`,`dist, source, target`)}

${o}

// ============================================================================
// Shared helpers (body bounds, alpha ramp, screen direction, perpendicular offset)
// ============================================================================

${co}
${lo(n,r)}
${uo}
${fo}
`}var mo=ca.fontSize,ho=new Map,go=24,_o=(go+1)*2;function vo(e){var t=e.paths,n=e.fontSizeMode,r=e.headLengthRatio,i=e.tailLengthRatio,a=e.minVisibilityThreshold,o=e.fullVisibilityThreshold,s=e.keepUpright,c=n===`scaled`,l=bn(),u=Da(Ai([].concat(q(t),[l])));return`#version 300 es

// Per-instance attributes
in float a_edgeIndex;
in float a_edgeAttrIndex;
in float a_baseFontSize;
in float a_totalTextWidth;
in float a_positionMode;
in float a_margin;
in float a_padding;
in vec4 a_color;
in vec4 a_id;

// Per-vertex (constant) attribute: strip vertex index
in float a_vertexIndex;

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_pixelRatio;
uniform float u_cameraAngle;
uniform vec2 u_resolution;
uniform sampler2D u_nodeDataTexture;
uniform int u_nodeDataTextureWidth;
uniform sampler2D u_edgeDataTexture;
uniform int u_edgeDataTextureWidth;
uniform sampler2D u_edgeFrameTexture; // Per-edge clamp (tStart, tEnd, straightenFactor, pathLength)
uniform int u_edgeFrameTextureWidth;
${c?`uniform float u_zoomSizeRatio;`:``}

${u.uniformDeclarations}

out vec4 v_color;
out vec4 v_id;
out float v_alphaModifier;

const float ATLAS_FONT_SIZE = ${Y(mo)};
const float HEAD_RATIO = ${Y(r)};
const float TAIL_RATIO = ${Y(i)};
const int RIBBON_SEGMENTS = ${go};

// Path attribute varyings (declared as plain locals since this shader has no FS inputs for them)
${u.vertexVaryingDeclarations.replace(/out /g,``)}

// Node size variables used by some path functions (self-loops, etc.)
float v_sourceNodeSize;
float v_targetNodeSize;

// Shared preamble: shape SDFs, path functions + selectors, clamp, helpers.
${po({paths:t,minVisibilityThreshold:a,fullVisibilityThreshold:o})}

void main() {
  int vIdx = int(a_vertexIndex);
  int pairIdx = vIdx / 2;
  int side = vIdx - pairIdx * 2; // 0 = left/bottom, 1 = right/top

  // --- Fetch edge data (2 texels per edge) ---
  int edgeIdx = int(a_edgeIndex);
  int texel0Idx = edgeIdx * 2;
  int texel1Idx = edgeIdx * 2 + 1;
  ivec2 e0 = ivec2(texel0Idx % u_edgeDataTextureWidth, texel0Idx / u_edgeDataTextureWidth);
  ivec2 e1 = ivec2(texel1Idx % u_edgeDataTextureWidth, texel1Idx / u_edgeDataTextureWidth);
  vec4 edgeData0 = texelFetch(u_edgeDataTexture, e0, 0);
  vec4 edgeData1 = texelFetch(u_edgeDataTexture, e1, 0);

  int srcIdx = int(edgeData0.x);
  int tgtIdx = int(edgeData0.y);
  float thickness = edgeData0.z;
  int pathId = int(edgeData1.z);

  // --- Fetch path attributes (curvature, etc.) ---
  {
    int edgeIdx = int(a_edgeAttrIndex);
${u.fetchCode}
${u.varyingAssignments}
  }

  // --- Fetch node data: geometry (texel 0) + rotation flags (texel 1) ---
  vec4 srcN = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx);
  vec4 tgtN = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx);

  vec2 source = srcN.xy;
  vec2 target = tgtN.xy;
  float sourceSize = srcN.z;
  float targetSize = tgtN.z;
  v_sourceNodeSize = sourceSize;
  v_targetNodeSize = targetSize;

  // --- Pixel-to-graph conversion (fixed font mode) ---
  float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
  float pixelToGraph = 2.0 / (matrixScaleX * u_resolution.x);

  float webGLThickness = thickness * u_correctionRatio / u_sizeRatio;

  // --- Body bounds (shared with edge label shader) ---
  vec4 edgeClamp = readFrameTexel(u_edgeFrameTexture, u_edgeFrameTextureWidth, edgeIdx);
  vec3 bodyBounds = computeEdgeLabelBodyBounds(
    edgeClamp.x, edgeClamp.y, edgeClamp.w,
    webGLThickness, HEAD_RATIO, TAIL_RATIO
  );
  float bodyStartDist = bodyBounds.x;
  float bodyEndDist = bodyBounds.y;
  float bodyLength = bodyBounds.z;

  // --- Text dimensions ---
  float baseFontSize = a_baseFontSize;
  ${c?`float fontScale = baseFontSize / ATLAS_FONT_SIZE * u_zoomSizeRatio;
  float textWidthWebGL = a_totalTextWidth * fontScale * u_correctionRatio / u_sizeRatio;
  float halfTextHeight = baseFontSize * 0.35 * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;
  float marginWebGL = a_margin * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;`:`float fontScale = baseFontSize / ATLAS_FONT_SIZE;
  float textWidthWebGL = a_totalTextWidth * fontScale * pixelToGraph;
  float halfTextHeight = baseFontSize * 0.35 * pixelToGraph;
  float marginWebGL = a_margin * pixelToGraph;`}
  float paddingWebGL = a_padding * pixelToGraph;

  // --- Alpha modifier (shared with edge label shader) ---
  float alphaModifier = computeEdgeLabelAlpha(bodyLength, textWidthWebGL);
  if (alphaModifier <= 0.0 || textWidthWebGL <= 0.0) {
    gl_Position = vec4(2.0, 0.0, 0.0, 1.0);
    v_color = vec4(0.0);
    v_id = vec4(0.0);
    v_alphaModifier = 0.0;
    return;
  }

  // --- Perpendicular offset (shared with edge label shader) ---
  float bodyCenterDist = (bodyStartDist + bodyEndDist) * 0.5;
  float centerT = queryPathTAtDistance(pathId, bodyCenterDist, source, target);
  float screenDir = computeEdgeLabelScreenDir(pathId, centerT, source, target, u_matrix);
  float readingSign = ${s?`screenDir`:`1.0`};
  float halfThickness = webGLThickness * 0.5;
  float perpOffset = computeEdgeLabelPerpOffset(
    a_positionMode, halfThickness, marginWebGL, halfTextHeight, readingSign, screenDir
  );

  // --- Ribbon span (clipped to body) ---
  float halfTextWebGL = textWidthWebGL * 0.5;
  float labelStartDist = max(bodyCenterDist - halfTextWebGL, bodyStartDist);
  float labelEndDist = min(bodyCenterDist + halfTextWebGL, bodyEndDist);

  // Sample centerline at this pair, then apply perpendicular offset.
  // The ribbon follows the centerline path (simple & robust); for curved edges
  // this closely matches the offset path the characters sit on.
  float u = float(pairIdx) / float(RIBBON_SEGMENTS);
  float arcDist = mix(labelStartDist, labelEndDist, u);
  float t = queryPathTAtDistance(pathId, arcDist, source, target);
  vec2 pos = queryPathPosition(pathId, t, source, target);
  vec2 tan = queryPathTangent(pathId, t, source, target);
  vec2 perp = vec2(-tan.y, tan.x);

  vec2 centerPos = pos + perp * perpOffset;

  float halfRibbon = halfTextHeight + paddingWebGL;
  float sideSign = side == 0 ? -1.0 : 1.0;
  vec2 ribbonPos = centerPos + perp * (sideSign * halfRibbon);

  vec3 clipPos = u_matrix * vec3(ribbonPos, 1.0);
  gl_Position = vec4(clipPos.xy, 0.0, 1.0);

  v_color = a_color;
  v_id = a_id;
  v_alphaModifier = alphaModifier;
}
`}var yo=`#version 300 es
precision highp float;

in vec4 v_color;
in vec4 v_id;
in float v_alphaModifier;

out vec4 fragColor;

void main() {
#ifdef PICKING_MODE
  if (v_alphaModifier <= 0.0) discard;
  fragColor = v_id;
#else
  float alpha = v_color.a * v_alphaModifier;
  if (alpha <= 0.0) discard;
  fragColor = vec4(v_color.rgb * alpha, alpha);
#endif
}
`;function bo(e,t,n,r){var i=r.shaderConfig,a=i.paths,o=i.fontSizeMode;if(a.length===0)throw Error(`createEdgeLabelBackgroundProgram: shaderConfig must declare at least one path`);var s=bn(),c=Ai([].concat(q(a),[s])),l=Mi([].concat(q(a),[s]),c),u=vo(i);return new(function(e){function t(e,n,r){var i;return U(this,t),i=G(this,t,[e,n,r]),V(i,`totalCount`,0),V(i,`bufferCapacity`,0),V(i,`edgeAttributeTexture`,null),i.edgeAttributeTexture=new ji(e,c),i.packedAttributeData=new Float32Array(c.floatsPerItem),i}return K(t,e),W(t,[{key:`getDefinition`,value:function(){for(var e=WebGL2RenderingContext,t=e.FLOAT,n=e.UNSIGNED_BYTE,r=e.TRIANGLE_STRIP,i=[],a=0;a<_o;a++)i.push([a]);var s=[`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_pixelRatio`,`u_cameraAngle`,`u_resolution`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_edgeDataTexture`,`u_edgeDataTextureWidth`,`u_edgeFrameTexture`,`u_edgeFrameTextureWidth`];return o===`scaled`&&s.push(`u_zoomSizeRatio`),c.floatsPerItem>0&&s.push(`u_edgeAttributeTexture`,`u_edgeAttributeTextureWidth`,`u_edgeAttributeTexelsPerEdge`),{VERTICES:_o,VERTEX_SHADER_SOURCE:u,FRAGMENT_SHADER_SOURCE:yo,METHOD:r,UNIFORMS:s,ATTRIBUTES:[{name:`a_edgeIndex`,size:1,type:t},{name:`a_edgeAttrIndex`,size:1,type:t},{name:`a_baseFontSize`,size:1,type:t},{name:`a_totalTextWidth`,size:1,type:t},{name:`a_positionMode`,size:1,type:t},{name:`a_margin`,size:1,type:t},{name:`a_padding`,size:1,type:t},{name:`a_color`,size:4,type:n,normalized:!0},{name:`a_id`,size:4,type:n,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:`a_vertexIndex`,size:1,type:t}],CONSTANT_DATA:i}}},{key:`processEdgeLabelBackground`,value:function(e,t,n){var r=0;if(this.edgeAttributeTexture&&c.floatsPerItem>0){r=this.edgeAttributeTexture.allocate(t);var i=this.packedAttributeData;Ni(l,n.edgeAttributes,i,``,ho,0),this.edgeAttributeTexture.updateAllAttributes(t,i)}var a=this.floats,o=this.ints,s=e*this.STRIDE;a[s++]=n.edgeIndex,a[s++]=r,a[s++]=n.baseFontSize,a[s++]=n.totalTextWidth,a[s++]=n.positionMode,a[s++]=n.margin,a[s++]=n.padding,a[s++]=n.color,o[s++]=n.id}},{key:`setUniforms`,value:function(e,t){var n=t.gl,r=t.uniformLocations;if(n.uniformMatrix3fv(r.u_matrix,!1,e.matrix),n.uniform1f(r.u_sizeRatio,e.sizeRatio),n.uniform1f(r.u_correctionRatio,e.correctionRatio),n.uniform1f(r.u_pixelRatio,e.pixelRatio),n.uniform1f(r.u_cameraAngle,e.cameraAngle),n.uniform2f(r.u_resolution,e.width,e.height),r.u_nodeDataTexture!==void 0&&n.uniform1i(r.u_nodeDataTexture,e.nodeDataTextureUnit),r.u_nodeDataTextureWidth!==void 0&&n.uniform1i(r.u_nodeDataTextureWidth,e.nodeDataTextureWidth),r.u_edgeDataTexture!==void 0&&n.uniform1i(r.u_edgeDataTexture,e.edgeDataTextureUnit),r.u_edgeDataTextureWidth!==void 0&&n.uniform1i(r.u_edgeDataTextureWidth,e.edgeDataTextureWidth),r.u_edgeFrameTexture!==void 0&&n.uniform1i(r.u_edgeFrameTexture,e.edgeFrameTextureUnit),r.u_edgeFrameTextureWidth!==void 0&&n.uniform1i(r.u_edgeFrameTextureWidth,e.edgeFrameTextureWidth),o===`scaled`&&r.u_zoomSizeRatio!==void 0){var i=this.renderer.getSetting(`zoomToSizeRatioFunction`);n.uniform1f(r.u_zoomSizeRatio,1/i(e.zoomRatio))}this.edgeAttributeTexture&&c.floatsPerItem>0&&r.u_edgeAttributeTexture!==void 0&&(this.edgeAttributeTexture.bind(Ea),n.uniform1i(r.u_edgeAttributeTexture,Ea),n.uniform1i(r.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),n.uniform1i(r.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem()))}},{key:`renderProgram`,value:function(e,n){this.edgeAttributeTexture&&c.floatsPerItem>0&&this.edgeAttributeTexture.upload(),X(t,`renderProgram`,this,3)([e,n])}},{key:`kill`,value:function(){this.edgeAttributeTexture&&=(this.edgeAttributeTexture.kill(),null),X(t,`kill`,this,3)([])}},{key:`drawWebGL`,value:function(e,t){var n=t.gl;this.totalCount!==0&&n.drawArraysInstanced(n.TRIANGLE_STRIP,0,this.VERTICES,this.totalCount)}},{key:`reallocate`,value:function(e){this.totalCount=e,e>this.bufferCapacity&&(this.bufferCapacity=Math.max(e,Math.ceil(this.bufferCapacity*1.5)||10),X(t,`reallocate`,this,3)([this.bufferCapacity]))}}])}(zi))(e,t,n)}function xo(e){return{paths:e.paths,headLengthRatio:e.headLengthRatio??0,tailLengthRatio:e.tailLengthRatio??0,fontSizeMode:e.fontSizeMode??`fixed`,minVisibilityThreshold:e.minVisibilityThreshold??.7,fullVisibilityThreshold:e.fullVisibilityThreshold??.8,keepUpright:e.keepUpright??!0}}var So=ca.fontSize,Co=17/64;function wo(e){var t=e.paths,n=e.hasBorder,r=n!==void 0&&n,i=e.fontSizeMode,a=i===void 0?`fixed`:i,o=e.minVisibilityThreshold,s=o===void 0?.5:o,c=e.fullVisibilityThreshold,l=c===void 0?.6:c,u=e.keepUpright,d=u===void 0||u,f=a===`scaled`,p=t.some(function(e){return e.hasSharpCorners}),m=bn(),h=Da(Ai([].concat(q(t),[m])));return`#version 300 es

// ============================================================================
// Attributes - Per Character (Instanced)
// ============================================================================

// Edge geometry: indices for texture lookup
// Edge data (source/target node indices, thickness, head/tail ratios) is fetched from edge data texture
// Edge path attributes (curvature, etc.) are fetched from edge attribute texture
in float a_edgeIndex;       // Index into edge data texture
in float a_edgeAttrIndex;   // Index into edge attribute texture (for curvature, etc.)
in float a_baseFontSize;    // Base font size in pixels (per-label)

// Character metrics (in glyph units = atlas font size pixels)
in vec4 a_charMetrics;      // (charTextOffset, charAdvance, totalTextWidth, positionMode)
in vec4 a_charDims;         // (charSize.x, charSize.y, charOffset.x, charOffset.y)

// Atlas texture coordinates
in vec4 a_texCoords;        // (x, y, width, height) in atlas pixels

// Label parameters
in vec2 a_labelParams;      // (margin, unused)

// Appearance
in vec4 a_color;            // Character color (RGBA, normalized)
${r?`in vec4 a_borderColor;      // Border color (RGBA, normalized)`:``}

// ============================================================================
// Attributes - Per Vertex (Constant)
// ============================================================================

in vec2 a_quadCorner;       // Quad corner: (0,0), (1,0), (0,1), (1,1)

// ============================================================================
// Uniforms
// ============================================================================

uniform mat3 u_matrix;
uniform float u_sizeRatio;
uniform float u_correctionRatio;
uniform float u_pixelRatio;
uniform float u_cameraAngle;    // Required by node shape SDFs
// u_sdfBufferPixels kept for ABI compatibility but unused in shader
uniform float u_sdfBufferPixels;
uniform vec2 u_resolution;
uniform vec2 u_atlasSize;
uniform sampler2D u_nodeDataTexture; // Shared texture with node position/size/shape data
uniform int u_nodeDataTextureWidth;  // Width of 2D node data texture for coordinate calculation
uniform sampler2D u_edgeDataTexture; // Shared texture with edge data
uniform int u_edgeDataTextureWidth;  // Width of 2D edge data texture for coordinate calculation
uniform sampler2D u_edgeFrameTexture; // Per-edge clamp (tStart, tEnd, straightenFactor, pathLength)
uniform int u_edgeFrameTextureWidth;
${f?`uniform float u_zoomSizeRatio;  // Zoom-based size ratio from zoomToSizeRatioFunction`:``}

// Edge path attribute texture uniforms (for curvature and other path attributes)
${h.uniformDeclarations}

// ============================================================================
// Varyings
// ============================================================================

out vec2 v_texCoord;
out vec4 v_color;
${r?`out vec4 v_borderColor;`:``}
out float v_edgeFade;  // 0 = fully visible, 1 = fully faded (outside body)
out float v_alphaModifier;  // 0-1 based on label visibility ratio
out float v_fontScale;  // Ratio of rendered font size to atlas font size
${r?`out float v_positionMode;  // Position mode for conditional border (0=over needs border)`:``}

// ============================================================================
// Constants
// ============================================================================

const float bias = 255.0 / 254.0;
const float FADE_WIDTH_PIXELS = 15.0;  // Width of fade gradient in pixels
const float ATLAS_FONT_SIZE = ${Y(So)};  // Base font size used in SDF atlas
const float VERTICAL_CENTER_RATIO = ${Y(Co)};  // Baseline to visual center ratio

// ============================================================================
// Path Attribute Variables (set in main, used by path functions)
// ============================================================================
// Path attributes are fetched from the edge attribute texture and stored in
// variables with v_ prefix (e.g., v_curvature) for path functions to access.
${h.vertexVaryingDeclarations.replace(/out /g,``)}

// Node size variables (set in main, used by some path functions like loops).
// These mirror the v_sourceNodeSize / v_targetNodeSize varyings in generator.ts,
// but are plain floats here since the label shader is vertex-only.
float v_sourceNodeSize;
float v_targetNodeSize;

// Shared preamble: shape SDFs, path functions + selectors, clamp, helpers.
${po({paths:t,minVisibilityThreshold:s,fullVisibilityThreshold:l})}

// ============================================================================
// Main
// ============================================================================

void main() {
  // -------------------------------------------------------------------------
  // Fetch edge data from edge texture (2 texels per edge)
  // -------------------------------------------------------------------------
  // Texel 0: sourceNodeIndex, targetNodeIndex, thickness, reserved
  // Texel 1: headLengthRatio, tailLengthRatio, pathId, extremityIds
  int edgeIdx = int(a_edgeIndex);
  int texel0Idx = edgeIdx * 2;
  int texel1Idx = edgeIdx * 2 + 1;
  ivec2 edgeTexCoord0 = ivec2(texel0Idx % u_edgeDataTextureWidth, texel0Idx / u_edgeDataTextureWidth);
  ivec2 edgeTexCoord1 = ivec2(texel1Idx % u_edgeDataTextureWidth, texel1Idx / u_edgeDataTextureWidth);
  vec4 edgeData0 = texelFetch(u_edgeDataTexture, edgeTexCoord0, 0);
  vec4 edgeData1 = texelFetch(u_edgeDataTexture, edgeTexCoord1, 0);

  // Unpack edge data
  int srcIdx = int(edgeData0.x);
  int tgtIdx = int(edgeData0.y);
  float thickness = edgeData0.z;
  // edgeData0.w is reserved
  float headLengthRatio = edgeData1.x;
  float tailLengthRatio = edgeData1.y;
  int pathId = int(edgeData1.z);  // Path type for multi-path support
  float baseFontSize = a_baseFontSize;

  // -------------------------------------------------------------------------
  // Fetch path attributes from edge attribute texture
  // -------------------------------------------------------------------------
  // Note: The fetch code uses 'edgeIdx' variable, so we set it to the attribute texture index
  {
    int edgeIdx = int(a_edgeAttrIndex);  // Use attribute texture index for path attributes
${h.fetchCode}
${h.varyingAssignments}
  }

  // -------------------------------------------------------------------------
  // Fetch node data from node texture (geometry texel + rotation-flags texel)
  // -------------------------------------------------------------------------
  vec4 srcNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, srcIdx);
  vec4 tgtNodeData = readNodeData(u_nodeDataTexture, u_nodeDataTextureWidth, tgtIdx);

  vec2 source = srcNodeData.xy;
  vec2 target = tgtNodeData.xy;
  float sourceSize = srcNodeData.z;
  float targetSize = tgtNodeData.z;
  v_sourceNodeSize = sourceSize;
  v_targetNodeSize = targetSize;
  float charTextOffset = a_charMetrics.x;
  float charAdvance = a_charMetrics.y;
  float totalTextWidth = a_charMetrics.z;
  float positionMode = a_charMetrics.w;
  vec2 charSize = a_charDims.xy;
  vec2 charOffset = a_charDims.zw;
  float margin = a_labelParams.x;

  // -------------------------------------------------------------------------
  // Compute pixel-to-graph conversion (for fixed font size mode)
  // -------------------------------------------------------------------------
  // This converts screen pixels to graph units such that N pixels on screen
  // becomes N pixels regardless of zoom level.
  // matrixScaleX is how much the matrix scales graph units to clip space
  float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
  float pixelToGraph = 2.0 / (matrixScaleX * u_resolution.x);

  // -------------------------------------------------------------------------
  // Step 1: Convert thickness to WebGL units
  // -------------------------------------------------------------------------
  float webGLThickness = thickness * u_correctionRatio / u_sizeRatio;

  // -------------------------------------------------------------------------
  // Step 2: Compute body bounds (truncated at node boundaries + extremities)
  // -------------------------------------------------------------------------
  vec4 edgeClamp = readFrameTexel(u_edgeFrameTexture, u_edgeFrameTextureWidth, edgeIdx);
  vec3 bodyBounds = computeEdgeLabelBodyBounds(
    edgeClamp.x, edgeClamp.y, edgeClamp.w,
    webGLThickness, headLengthRatio, tailLengthRatio
  );
  float bodyStartDist = bodyBounds.x;
  float bodyEndDist = bodyBounds.y;
  float bodyLength = bodyBounds.z;

  // -------------------------------------------------------------------------
  // Step 3: Compute font scale and text dimensions
  // -------------------------------------------------------------------------
  // Font size modes:
  // - "fixed": Constant pixel size regardless of zoom, using pixelToGraph conversion
  // - "scaled": Scales with zoom using zoomToSizeRatioFunction
  ${f?`// Scaled mode: font scales with zoom
  float fontScale = baseFontSize / ATLAS_FONT_SIZE * u_zoomSizeRatio;
  // Convert glyph-unit metrics to WebGL units (scales with zoom)
  float textWidthWebGL = totalTextWidth * fontScale * u_correctionRatio / u_sizeRatio;
  float charOffsetWebGL = charTextOffset * fontScale * u_correctionRatio / u_sizeRatio;
  float charAdvanceWebGL = charAdvance * fontScale * u_correctionRatio / u_sizeRatio;`:`// Fixed mode: font stays constant in screen pixels
  float fontScale = baseFontSize / ATLAS_FONT_SIZE;
  // Convert glyph-unit metrics to graph units using pixelToGraph (zoom-independent)
  float textWidthWebGL = totalTextWidth * fontScale * pixelToGraph;
  float charOffsetWebGL = charTextOffset * fontScale * pixelToGraph;
  float charAdvanceWebGL = charAdvance * fontScale * pixelToGraph;`}

  // Font scale varying for fragment shader gamma scaling.
  // Ratio of rendered font size to atlas font size — used to tighten the
  // anti-aliasing band for large labels so they stay sharp.
  v_fontScale = fontScale;

  // -------------------------------------------------------------------------
  // Step 4: Alpha modifier from how much of the label fits in the body
  // -------------------------------------------------------------------------
  float alphaModifier = computeEdgeLabelAlpha(bodyLength, textWidthWebGL);

  // -------------------------------------------------------------------------
  // Step 5: Compute character center offset (truncation check moved to after curvature adjustment)
  // -------------------------------------------------------------------------
  // Body center in arc distance
  float bodyCenterDist = (bodyStartDist + bodyEndDist) * 0.5;

  float centerT = queryPathTAtDistance(pathId, bodyCenterDist, source, target);
  float screenDir = computeEdgeLabelScreenDir(pathId, centerT, source, target, u_matrix);

  // Reversed labels lay their characters out from target to source
  float readingSign = ${d?`screenDir`:`1.0`};

  // Character center position relative to label center (on centerline, before curvature adjustment)
  float charCenterOffset = readingSign * (charOffsetWebGL + charAdvanceWebGL * 0.5 - textWidthWebGL * 0.5);

  // -------------------------------------------------------------------------
  // Step 6: Compute perpendicular offset based on position mode
  // -------------------------------------------------------------------------
  // Position modes: 0=over, 1=above, 2=below, 3=auto
  // Needed early for curvature-adaptive character spacing in Step 7
  float halfThickness = webGLThickness * 0.5;
  ${f?`// Scaled mode: margin and text height scale with zoom (same factor as font)
  float marginWebGL = margin * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;
  float halfTextHeight = baseFontSize * 0.35 * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;`:`// Fixed mode: margin and text height stay constant in screen pixels
  float marginWebGL = margin * pixelToGraph;
  float halfTextHeight = baseFontSize * 0.35 * pixelToGraph;`}
  float perpOffset = computeEdgeLabelPerpOffset(
    positionMode, halfThickness, marginWebGL, halfTextHeight, readingSign, screenDir
  );

  // -------------------------------------------------------------------------
  // Step 7: Position character on path using offset path traversal
  // -------------------------------------------------------------------------
  // For "over" mode (perpOffset = 0), use simple centerline placement
  // For above/below modes, walk along the offset path to find correct position
  float charT;

  if (perpOffset == 0.0) {
    // Simple case: place on centerline
    float charArcDist = bodyCenterDist + charCenterOffset;
    charT = queryPathTAtDistance(pathId, charArcDist, source, target);
  } else {
    // Offset path traversal: walk along the offset curve to find character position
    // This ensures even character spacing regardless of curvature

    ${p?`// -----------------------------------------------------------------------
    // Corner skip setup for step/taxi edges with above/below labels
    // -----------------------------------------------------------------------
    // At concave corners (inner side of the bend), characters would bunch up
    // because the offset path has near-zero arc length. We detect corner
    // crossings during the offset path traversal and add skip distance.

    // Get corner t values and concavity
    vec2 cornerTs = queryGetCornerTs(pathId, source, target);
    vec2 concavity = queryGetCornerConcavity(pathId, source, target, perpOffset);

    // Skip distance in graph units, proportional to on-screen font size
    // For fixed mode: use pixelToGraph so gap stays constant regardless of zoom
    // For scaled mode: use the same conversion as text width
    ${f?`float skipDistGraph = STEP_INNER_CORNER_SKIP_FACTOR * baseFontSize * u_zoomSizeRatio * u_correctionRatio / u_sizeRatio;`:`float skipDistGraph = STEP_INNER_CORNER_SKIP_FACTOR * baseFontSize * pixelToGraph;`}

    // Corner t values for detecting crossings during traversal
    float corner1T = cornerTs.x;
    float corner2T = cornerTs.y;
    bool corner1IsConcave = concavity.x > 0.5;
    bool corner2IsConcave = concavity.y > 0.5;`:``}

    // Target distance along offset path from center
    float targetOffsetDist = abs(charCenterOffset);

    // Handle center character (charCenterOffset ≈ 0) - no search needed
    if (targetOffsetDist < 0.0001) {
      charT = centerT;
    } else {
      vec2 centerPos = queryPathPosition(pathId, centerT, source, target);
      vec2 centerNormal = queryPathNormal(pathId, centerT, source, target);
      vec2 offsetCenter = centerPos + centerNormal * perpOffset;

      float searchDir = charCenterOffset > 0.0 ? 1.0 : -1.0;

      // Search bounds (t values for body start and end)
      float tBodyStart = queryPathTAtDistance(pathId, bodyStartDist, source, target);
      float tBodyEnd = queryPathTAtDistance(pathId, bodyEndDist, source, target);

      // Walk along offset path to find character position
      float accumDist = 0.0;
      vec2 prevOffsetPos = offsetCenter;
      float prevT = centerT;
      float foundT = centerT;

      // Search range depends on direction
      float tSearchEnd = searchDir > 0.0 ? tBodyEnd : tBodyStart;

      ${p?`// Track which concave corners we've crossed to add skip distance
      bool crossedCorner1 = false;
      bool crossedCorner2 = false;
      float effectiveTargetDist = targetOffsetDist;`:``}

      const int STEPS = 32;
      for (int i = 1; i <= STEPS; i++) {
        // Step along centerline t, from center toward target
        float stepT = centerT + searchDir * float(i) * abs(tSearchEnd - centerT) / float(STEPS);

        ${p?`// Check for concave corner crossings and add skip distance
        // Corner 1 crossing check
        if (corner1IsConcave && !crossedCorner1) {
          bool crossingCorner1 = (searchDir > 0.0)
            ? (prevT < corner1T && stepT >= corner1T)
            : (prevT > corner1T && stepT <= corner1T);
          if (crossingCorner1) {
            crossedCorner1 = true;
            effectiveTargetDist += skipDistGraph;
          }
        }

        // Corner 2 crossing check
        if (corner2IsConcave && !crossedCorner2) {
          bool crossingCorner2 = (searchDir > 0.0)
            ? (prevT < corner2T && stepT >= corner2T)
            : (prevT > corner2T && stepT <= corner2T);
          if (crossingCorner2) {
            crossedCorner2 = true;
            effectiveTargetDist += skipDistGraph;
          }
        }`:``}

        // Compute offset position at this t
        vec2 stepPos = queryPathPosition(pathId, stepT, source, target);
        vec2 stepNormal = queryPathNormal(pathId, stepT, source, target);
        vec2 offsetPos = stepPos + stepNormal * perpOffset;

        // Distance along offset path
        float segDist = length(offsetPos - prevOffsetPos);

        ${p?`if (accumDist + segDist >= effectiveTargetDist) {
          // Interpolate within segment to find exact t
          float remaining = effectiveTargetDist - accumDist;
          float segT = remaining / max(segDist, 0.0001);
          foundT = mix(prevT, stepT, segT);
          break;
        }`:`if (accumDist + segDist >= targetOffsetDist) {
          // Interpolate within segment to find exact t
          float remaining = targetOffsetDist - accumDist;
          float segT = remaining / max(segDist, 0.0001);
          foundT = mix(prevT, stepT, segT);
          break;
        }`}

        accumDist += segDist;
        prevOffsetPos = offsetPos;
        prevT = stepT;
        // Update foundT to last valid position in case loop exhausts without finding target
        foundT = stepT;
      }

      charT = foundT;
    }
  }

  // Get position and tangent at final character position
  vec2 pathPos = queryPathPosition(pathId, charT, source, target);
  vec2 tangent = queryPathTangent(pathId, charT, source, target);

  // Compute perpendicular direction (90 degrees from tangent)
  vec2 perpDir = vec2(-tangent.y, tangent.x);

  // Apply perpendicular offset to path position
  vec2 offsetPathPos = pathPos + perpDir * perpOffset;

  // -------------------------------------------------------------------------
  // Step 8: Build character quad
  // -------------------------------------------------------------------------
  // Character size in screen pixels
  vec2 charSizePixels = charSize * fontScale;

  // Character offset from origin to the atlas region's top-left corner.
  // bearingX/bearingY already include the SDF buffer.
  vec2 charOffsetPixels = charOffset * fontScale;

  // The character's local X offset from pathPos (which is at character center)
  float charLocalX = -charAdvance * 0.5 * fontScale;

  // Build quad position:
  // - Start at character origin (charLocalX on X axis, 0 on Y axis = baseline)
  // - Add bearing offset to get to atlas region corner
  // - Add quad corner * size to get vertex position
  vec2 quadPos;
  quadPos.x = charLocalX + charOffsetPixels.x + a_quadCorner.x * charSizePixels.x;
  // charOffset.y = -bearingY (negated), so -charOffsetPixels.y = bearingY * fontScale
  // (distance from baseline to atlas region top, positive = upward)
  // Quad corner (0,0) = bottom-left, (1,1) = top-right
  quadPos.y = -charOffsetPixels.y - charSizePixels.y * (1.0 - a_quadCorner.y);

  // Center vertically on the path by offsetting by half the visual text height
  // VERTICAL_CENTER_RATIO is the distance from baseline to visual center as a ratio of atlas font size
  float verticalCenterOffset = VERTICAL_CENTER_RATIO * ATLAS_FONT_SIZE * fontScale;
  quadPos.y -= verticalCenterOffset;

  // -------------------------------------------------------------------------
  // Step 9: Rotate quad to align with tangent
  // -------------------------------------------------------------------------
  // Rotation matrix from the reading direction
  // readingDir = (cos(angle), sin(angle)), so we can build rotation directly
  vec2 readingDir = tangent * readingSign;
  mat2 rotation = mat2(readingDir.x, readingDir.y, -readingDir.y, readingDir.x);

  // Convert pixel offset to WebGL units for rotation
  ${f?`vec2 quadPosWebGL = quadPos * u_correctionRatio / u_sizeRatio; // Scaled mode`:`vec2 quadPosWebGL = quadPos * pixelToGraph; // Fixed mode: use pixelToGraph for zoom-independent size`}

  // Rotate around character center on path
  vec2 rotatedOffset = rotation * quadPosWebGL;

  // Final position in graph space (using offset path position for above/below modes)
  vec2 worldPos = offsetPathPos + rotatedOffset;

  // -------------------------------------------------------------------------
  // Step 10: Transform to clip space
  // -------------------------------------------------------------------------
  vec3 clipPos = u_matrix * vec3(worldPos, 1.0);
  gl_Position = vec4(clipPos.xy, 0.0, 1.0);

  // -------------------------------------------------------------------------
  // Step 11: Texture coordinates
  // -------------------------------------------------------------------------
  // Flip Y for texture coordinates (texture Y goes down, quad Y goes up)
  vec2 texCorner = vec2(a_quadCorner.x, 1.0 - a_quadCorner.y);
  v_texCoord = (a_texCoords.xy + texCorner * a_texCoords.zw) / u_atlasSize;

  // -------------------------------------------------------------------------
  // Step 12: Pass color, border color, and alpha modifier
  // -------------------------------------------------------------------------
  v_color = a_color;
  v_color.a *= bias;
${r?`  v_borderColor = a_borderColor;
  v_borderColor.a *= bias;
  v_positionMode = positionMode;`:``}
  v_alphaModifier = alphaModifier;

  // -------------------------------------------------------------------------
  // Step 13: Compute edge fade for soft truncation
  // -------------------------------------------------------------------------
  // Convert fade width from pixels to WebGL units
  ${f?`float fadeWidthWebGL = FADE_WIDTH_PIXELS * u_correctionRatio / u_sizeRatio;`:`float fadeWidthWebGL = FADE_WIDTH_PIXELS * pixelToGraph;`}

  // Compute the arc position of THIS VERTEX (not just character center)
  // The quad extends from charCenter - advance/2 to charCenter + advance/2
  // a_quadCorner.x is 0 for left edge, 1 for right edge
  float vertexLocalOffset = readingSign * (a_quadCorner.x - 0.5) * charAdvanceWebGL;
  float vertexArcOffset = charCenterOffset + vertexLocalOffset;

  // Compute distance from body edges (positive = inside body, negative = outside)
  float halfBody = bodyLength * 0.5;
  float distFromStart = vertexArcOffset + halfBody;  // Distance from body start edge
  float distFromEnd = halfBody - vertexArcOffset;    // Distance from body end edge
  float distFromEdge = min(distFromStart, distFromEnd);

  // Compute fade: 0 = fully visible (deep inside body), 1 = fully faded (at body edge)
  // Fade goes from 0 (at 2*fadeWidth inside) to 1 (at body edge)
  // This ensures text is fully transparent before reaching extremities
  v_edgeFade = 1.0 - smoothstep(0.0, fadeWidthWebGL * 2.0, distFromEdge);
}
`}function To(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).hasBorder,t=e!==void 0&&e;return`#version 300 es
precision highp float;

in vec2 v_texCoord;
in vec4 v_color;
${t?`in vec4 v_borderColor;`:``}
in float v_edgeFade;  // 0 = fully visible, 1 = fully faded
in float v_alphaModifier;  // 0-1 based on label visibility ratio
in float v_fontScale;  // Ratio of rendered font size to atlas font size
${t?`in float v_positionMode;  // Position mode (0=over, 1=above, 2=below, 3=auto)`:``}

uniform sampler2D u_atlas;
uniform float u_gamma;
uniform float u_sdfBuffer;
uniform float u_pixelRatio;
${t?`uniform float u_borderWidth;  // Border width in SDF units (normalized)`:``}

// Fragment output (single target - picking handled via separate pass)
out vec4 fragColor;

void main() {
  #ifdef PICKING_MODE
    // Edge labels are not pickable - discard all fragments in picking mode
    fragColor = vec4(0.0);
    discard;
  #else
  // SDF stores normalized distance: 0.5 = on edge, >0.5 = inside glyph
  float sdfValue = texture(u_atlas, v_texCoord).a;

  // Edge threshold accounting for SDF buffer padding
  float edge = 1.0 - u_sdfBuffer;

  // Scale gamma inversely with font scale so small labels get a wider AA band
  // (smoother) and large labels get a tighter band (sharper).
  float aaWidth = u_gamma / (u_pixelRatio * v_fontScale);

  // Apply edge fade for soft truncation at body boundaries
  // Also apply visibility-based alpha modifier for short edge labels
  float edgeAlpha = (1.0 - v_edgeFade) * v_alphaModifier;

${t?`  // Fill alpha: fully opaque inside the glyph
  float fillAlpha = smoothstep(edge - aaWidth, edge + aaWidth, sdfValue);

  // Only apply border for "over" position mode (v_positionMode == 0.0)
  // Labels positioned above/below/auto don't overlap the edge line and don't need borders
  if (v_positionMode < 0.5) {
    // Border rendering: compute alpha for both fill and border regions
    // Border extends from (edge - borderWidth) to edge
    float borderEdge = edge - u_borderWidth;

    // Border alpha: opaque in the border region (between borderEdge and edge)
    float borderAlpha = smoothstep(borderEdge - aaWidth, borderEdge + aaWidth, sdfValue);

    // Composite: fill on top of border
    // Border is visible where borderAlpha > 0 but fillAlpha < 1
    vec3 borderColorPremult = v_borderColor.rgb * v_borderColor.a * borderAlpha * edgeAlpha;
    vec3 fillColorPremult = v_color.rgb * v_color.a * fillAlpha * edgeAlpha;

    // Blend fill over border (fill replaces border where fill is opaque)
    float finalBorderAlpha = borderAlpha * (1.0 - fillAlpha);
    vec3 finalColor = fillColorPremult + v_borderColor.rgb * v_borderColor.a * finalBorderAlpha * edgeAlpha;
    float finalAlpha = (v_color.a * fillAlpha + v_borderColor.a * finalBorderAlpha) * edgeAlpha;

    fragColor = vec4(finalColor, finalAlpha);
  } else {
    // No border for above/below/auto positions - simple text rendering
    float finalAlpha = v_color.a * fillAlpha * edgeAlpha;
    fragColor = vec4(v_color.rgb * finalAlpha, finalAlpha);
  }`:`  // Smooth transition from transparent to opaque at glyph edge
  float alpha = smoothstep(edge - aaWidth, edge + aaWidth, sdfValue);

  // Premultiplied alpha output
  float finalAlpha = v_color.a * alpha * edgeAlpha;
  fragColor = vec4(v_color.rgb * finalAlpha, finalAlpha);`}
  #endif
}
`}function Eo(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:`fixed`,r=[`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_pixelRatio`,`u_cameraAngle`,`u_sdfBufferPixels`,`u_resolution`,`u_atlasSize`,`u_atlas`,`u_gamma`,`u_sdfBuffer`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_edgeDataTexture`,`u_edgeDataTextureWidth`,`u_edgeFrameTexture`,`u_edgeFrameTextureWidth`,`u_edgeAttributeTexture`,`u_edgeAttributeTextureWidth`,`u_edgeAttributeTexelsPerEdge`];n===`scaled`&&r.push(`u_zoomSizeRatio`),t&&r.push(`u_borderWidth`);var i=B(e),a;try{for(i.s();!(a=i.n()).done;){var o=a.value,s=B(o.uniforms),c;try{for(s.s();!(c=s.n()).done;){var l=c.value;r.includes(l.name)||r.push(l.name)}}catch(e){s.e(e)}finally{s.f()}}}catch(e){i.e(e)}finally{i.f()}return r}function Do(e){var t=e.hasBorder,n=t!==void 0&&t,r=e.fontSizeMode,i=r===void 0?`fixed`:r;return{vertexShader:wo(e),fragmentShader:To({hasBorder:n}),uniforms:Eo(e.paths,n,i)}}var Oo=new Map;function ko(e){switch(e){case`over`:return 0;case`above`:return 1;case`below`:return 2;case`auto`:return 3;default:return 0}}function Ao(e,t,n,r){var i=r.color,a=r.margin,o=r.textBorder,s=xo(r),c=s.paths,l=s.fontSizeMode,u=s.minVisibilityThreshold,d=s.fullVisibilityThreshold,f=s.keepUpright,p=!!o,m=Do({paths:c,hasBorder:p,fontSizeMode:l,minVisibilityThreshold:u,fullVisibilityThreshold:d,keepUpright:f}),h=function(e){function t(e,n,r){var i;U(this,t),i=G(this,t,[e,n,r]),V(i,`atlasTexture`,null),V(i,`atlasNeedsUpdate`,!1),V(i,`refreshTimeout`,null),V(i,`labelGlyphCache`,new Map),V(i,`edgeAttributeTexture`,null);var a=bn();if(i.attributeLayout=Ai([].concat(q(c),[a])),i.attrDescriptors=Mi([].concat(q(c),[a]),i.attributeLayout),i.edgeAttributeTexture=new ji(e,i.attributeLayout),i.packedAttributeData=new Float32Array(i.attributeLayout.floatsPerItem),i.atlasManager=new ha,i.gamma=.025,i.sdfBuffer=ca.cutoff,i.atlasTexture=e.createTexture(),!i.atlasTexture)throw Error(`EdgeLabelProgram: failed to create atlas texture`);return e.bindTexture(e.TEXTURE_2D,i.atlasTexture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),i.atlasManager.on(ha.ATLAS_UPDATED_EVENT,function(){i.atlasNeedsUpdate=!0,i.refreshTimeout!==null&&clearTimeout(i.refreshTimeout),i.refreshTimeout=setTimeout(function(){i.refreshTimeout=null,i.renderer.refresh()},0)}),i.defaultFontKey=i.atlasManager.registerFont({family:`sans-serif`,weight:`normal`,style:`normal`}),i}return K(t,e),W(t,[{key:`getDefinition`,value:function(){var e=WebGL2RenderingContext,t=e.FLOAT,n=e.UNSIGNED_BYTE,r=e.TRIANGLE_STRIP,i=new Set,a=[],o=B(c),s;try{for(o.s();!(s=o.n()).done;){var l=s.value,u=B(l.attributes),d;try{for(u.s();!(d=u.n()).done;){var f=d.value,h=f.name.startsWith(`a_`)?f.name:`a_${f.name}`;i.has(h)||(i.add(h),a.push({name:h,size:f.size,type:f.type}))}}catch(e){u.e(e)}finally{u.f()}}}catch(e){o.e(e)}finally{o.f()}return{VERTICES:4,VERTEX_SHADER_SOURCE:m.vertexShader,FRAGMENT_SHADER_SOURCE:m.fragmentShader,METHOD:r,UNIFORMS:m.uniforms,ATTRIBUTES:[{name:`a_edgeIndex`,size:1,type:t},{name:`a_edgeAttrIndex`,size:1,type:t},{name:`a_baseFontSize`,size:1,type:t},{name:`a_charMetrics`,size:4,type:t},{name:`a_charDims`,size:4,type:t},{name:`a_texCoords`,size:4,type:t},{name:`a_labelParams`,size:2,type:t},{name:`a_color`,size:4,type:n,normalized:!0}].concat(q(p?[{name:`a_borderColor`,size:4,type:n,normalized:!0}]:[]),q(a.filter(function(e){return![`a_curvature`,`curvature`].includes(e.name)}))),CONSTANT_ATTRIBUTES:[{name:`a_quadCorner`,size:2,type:t}],CONSTANT_DATA:[[0,0],[1,0],[0,1],[1,1]]}}},{key:`prepareLabelGlyphs`,value:function(e,t){if(t.hidden||!t.text)this.labelGlyphCache.delete(e);else{var n=t.text,r=t.fontKey||this.defaultFontKey;this.atlasManager.ensureGlyphs(n,r);var i=[],a=[],o=0,s=B(n),c;try{for(s.s();!(c=s.n()).done;){var l=c.value.codePointAt(0);if(l===void 0)i.push(void 0),a.push(o);else{var u=this.atlasManager.getGlyph(l,r);i.push(u),a.push(o),u&&(o+=u.advance)}}}catch(e){s.e(e)}finally{s.f()}this.labelGlyphCache.set(e,{glyphs:i,xOffsets:a,totalWidth:o})}}},{key:`processCharacter`,value:function(e,n,r,i){var a=this.floats,s=this.STRIDE,l=e*s,u=this.labelGlyphCache.get(n.parentKey);if(!u||!u.glyphs[i])for(var d=0;d<s;d++)a[l+d]=0;else{var f=u.glyphs[i],m=u.xOffsets[i],h=t.labelColor,g=Zt(h&&J(h)===`object`&&`color`in h&&h.color?h.color:n.color),_=l;a[_++]=n.edgeIndex,a[_++]=this.edgeAttributeTexture?.getIndex(n.parentKey)??0,a[_++]=n.size,a[_++]=m,a[_++]=f.advance,a[_++]=u.totalWidth,a[_++]=ko(n.position),a[_++]=f.atlasWidth,a[_++]=f.atlasHeight,a[_++]=f.bearingX,a[_++]=-f.bearingY,a[_++]=f.atlasX,a[_++]=f.atlasY,a[_++]=f.atlasWidth,a[_++]=f.atlasHeight;var v=t.labelMargin??n.margin;if(a[_++]=v,a[_++]=0,a[_++]=g,p&&o){var y=typeof o.color==`string`?o.color:o.color.color||`#ffffff`;a[_++]=Zt(y)}var b=new Set,x=B(c),S;try{for(x.s();!(S=x.n()).done;){var C=S.value,w=B(C.attributes),T;try{for(w.s();!(T=w.n()).done;){var E=T.value,D=E.name.startsWith(`a_`)?E.name.slice(2):E.name;if(D!==`curvature`&&!b.has(D)){b.add(D);for(var O=0;O<E.size;O++)a[_++]=0}}}catch(e){w.e(e)}finally{w.f()}}}catch(e){x.e(e)}finally{x.f()}}}},{key:`processEdgeLabel`,value:function(e,n,r){if(this.prepareLabelGlyphs(e,r),this.edgeAttributeTexture&&!r.hidden&&r.text){this.edgeAttributeTexture.allocate(e);var i=this.packedAttributeData;Ni(this.attrDescriptors,r.edgeAttributes,i,``,Oo,0),this.edgeAttributeTexture.updateAllAttributes(e,i)}return X(t,`processLabel`,this,3)([e,n,r])}},{key:`updateAtlasTexture`,value:function(){if(this.atlasNeedsUpdate){var e=this.normalProgram.gl,t=this.atlasManager.getTextures();if(t.length!==0){var n=t[0];e.bindTexture(e.TEXTURE_2D,this.atlasTexture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n.width,n.height,0,e.RGBA,e.UNSIGNED_BYTE,n.data),e.bindTexture(e.TEXTURE_2D,null),this.atlasNeedsUpdate=!1}}}},{key:`setUniforms`,value:function(e,t){var n=t.gl,r=t.uniformLocations,i=this.atlasManager.getTextures(),a=i.length>0?[i[0].width,i[0].height]:[1,1];if(n.uniformMatrix3fv(r.u_matrix,!1,e.matrix),n.uniform1f(r.u_sizeRatio,e.sizeRatio),n.uniform1f(r.u_correctionRatio,e.correctionRatio),n.uniform1f(r.u_pixelRatio,e.pixelRatio),n.uniform1f(r.u_cameraAngle,e.cameraAngle),n.uniform1f(r.u_sdfBufferPixels,ca.buffer),n.uniform2f(r.u_resolution,e.width,e.height),n.uniform2f(r.u_atlasSize,a[0],a[1]),n.uniform1f(r.u_gamma,this.gamma),n.uniform1f(r.u_sdfBuffer,this.sdfBuffer),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.atlasTexture),n.uniform1i(r.u_atlas,0),r.u_nodeDataTexture!==void 0&&n.uniform1i(r.u_nodeDataTexture,e.nodeDataTextureUnit),r.u_nodeDataTextureWidth!==void 0&&n.uniform1i(r.u_nodeDataTextureWidth,e.nodeDataTextureWidth),r.u_edgeDataTexture!==void 0&&n.uniform1i(r.u_edgeDataTexture,e.edgeDataTextureUnit),r.u_edgeDataTextureWidth!==void 0&&n.uniform1i(r.u_edgeDataTextureWidth,e.edgeDataTextureWidth),r.u_edgeFrameTexture!==void 0&&n.uniform1i(r.u_edgeFrameTexture,e.edgeFrameTextureUnit),r.u_edgeFrameTextureWidth!==void 0&&n.uniform1i(r.u_edgeFrameTextureWidth,e.edgeFrameTextureWidth),p&&o&&r.u_borderWidth!==void 0){var s=o.width/ca.buffer*this.sdfBuffer;n.uniform1f(r.u_borderWidth,s)}if(this.edgeAttributeTexture&&r.u_edgeAttributeTexture!==void 0&&(this.edgeAttributeTexture.bind(Ea),n.uniform1i(r.u_edgeAttributeTexture,Ea),n.uniform1i(r.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),n.uniform1i(r.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem())),l===`scaled`&&r.u_zoomSizeRatio!==void 0){var c=1/this.renderer.getSetting(`zoomToSizeRatioFunction`)(e.zoomRatio);n.uniform1f(r.u_zoomSizeRatio,c)}}},{key:`renderProgram`,value:function(e,n){this.updateAtlasTexture(),this.atlasManager.hasPendingGlyphs()&&(this.atlasManager.flush(),this.updateAtlasTexture()),this.edgeAttributeTexture&&this.edgeAttributeTexture.upload(),X(t,`renderProgram`,this,3)([e,n])}},{key:`registerFont`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:`normal`,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:`normal`;return this.atlasManager.registerFont({family:e,weight:t,style:n})}},{key:`getAtlasManager`,value:function(){return this.atlasManager}},{key:`ensureGlyphsReady`,value:function(e,t){var n=t||this.defaultFontKey,r=B(e),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;this.atlasManager.ensureGlyphs(a,n)}}catch(e){r.e(e)}finally{r.f()}this.atlasManager.flush()}},{key:`measureLabelAtlasWidth`,value:function(e,t){var n=t||this.defaultFontKey;this.atlasManager.ensureGlyphs(e,n),this.atlasManager.hasPendingGlyphs()&&this.atlasManager.flush();var r=0,i=B(e),a;try{for(i.s();!(a=i.n()).done;){var o=a.value.codePointAt(0);if(o!==void 0){var s=this.atlasManager.getGlyph(o,n);s&&(r+=s.advance)}}}catch(e){i.e(e)}finally{i.f()}return r}},{key:`measureLabel`,value:function(e,t,n){return{width:this.measureLabelAtlasWidth(e,n)*(t/ca.fontSize),height:t,textHeight:t}}},{key:`kill`,value:function(){var e=this.normalProgram.gl;this.refreshTimeout!==null&&(clearTimeout(this.refreshTimeout),this.refreshTimeout=null),this.atlasTexture&&=(e.deleteTexture(this.atlasTexture),null),this.edgeAttributeTexture&&=(this.edgeAttributeTexture.kill(),null),this.atlasManager.destroy(),this.labelGlyphCache.clear(),X(t,`kill`,this,3)([])}}])}(ia);return V(h,`labelColor`,i),V(h,`labelMargin`,a),new h(e,t,n)}function jo(){return{name:`none`,glsl:`
// No extremity - always returns positive (outside)
float extremity_none(vec2 uv, float lengthRatio, float widthRatio) {
  return 1.0;
}
`,length:0,widthFactor:1,margin:0,uniforms:[],attributes:[]}}function Mo(e,t,n,r,i,a,o){var s=La(r),c=s.paths,l=s.layers,u=s.defaultHead,d=s.defaultTail,f=[jo()].concat(q(s.extremities)),p={},m={};c.forEach(function(e,t){return p[e.name]=t}),f.forEach(function(e,t){return m[e.name]=t});var h=m[u]??0,g=m[d]??0,_=null,v=Ai([].concat(q(c),q(l))),y=function(e){function t(e,n,r){var a;U(this,t),_||=ro({paths:c,extremities:f,layers:l,antialias:i}),a=G(this,t,[e,n,r]),V(a,`layerLifecycles`,new Map),V(a,`needsShaderRegeneration`,!1),V(a,`edgeAttributeTexture`,null),V(a,`layout`,v),V(a,`attrDescriptors`,[]),V(a,`lifecycleIndexOffset`,c.length),a._pickingBuffer=n,a.edgeAttributeTexture=new ji(e,a.layout),a.packedAttributeData=new Float32Array(a.layout.floatsPerItem),l.forEach(function(t,n){if(t.lifecycle){var i={gl:e,renderer:{refresh:function(){return r.refresh()}},getUniformLocation:function(t){return e.getUniformLocation(a.normalProgram.program,t)},requestShaderRegeneration:function(){a.needsShaderRegeneration=!0},requestRefresh:function(){r.refresh()}};a.layerLifecycles.set(n,t.lifecycle(i))}}),a.layerLifecycles.forEach(function(e){return e.init?.call(e)});var o=new Map;return a.layerLifecycles.forEach(function(e,t){e.getAttributeData&&o.set(c.length+t,e)}),a.attrDescriptors=Mi([].concat(q(c),q(l)),a.layout,o),a}return K(t,e),W(t,[{key:`getAttributeTexture`,value:function(){return this.edgeAttributeTexture}},{key:`resolveEdgeIds`,value:function(e,t,n){var r=e,i=0,a=h,o=g,s=t?r.selfLoopPath:n&&r.parallelPath?r.parallelPath:r.path;s&&p[s]!==void 0&&(i=p[s]),r.head&&r.head!==`none`&&m[r.head]!==void 0&&(a=m[r.head]),r.tail&&r.tail!==`none`&&m[r.tail]!==void 0&&(o=m[r.tail]);var c=f[a],l=f[o];return{pathId:i,headId:a,tailId:o,headLengthRatio:gn(c.length)?0:c.length,tailLengthRatio:gn(l.length)?0:l.length}}},{key:`getDefinition`,value:function(){var e=WebGL2RenderingContext.TRIANGLE_STRIP,t=_;return{VERTICES:t.verticesPerEdge,VERTEX_SHADER_SOURCE:t.vertexShader,FRAGMENT_SHADER_SOURCE:t.fragmentShader,METHOD:e,UNIFORMS:t.uniforms,ATTRIBUTES:t.attributes,CONSTANT_ATTRIBUTES:t.constantAttributes,CONSTANT_DATA:t.constantData}}},{key:`maybeRegenerateShaders`,value:function(){var e=this;if(this.needsShaderRegeneration){this.needsShaderRegeneration=!1,_=ro({paths:c,extremities:f,layers:l.map(function(t,n){var r=e.layerLifecycles.get(n);return r!=null&&r.regenerate?r.regenerate():t}),antialias:this.renderer.getSetting(`antialiasEdges`)});var t=this.normalProgram.gl,n=this.normalProgram,r=n.program,i=n.buffer,a=n.vertexShader,o=n.fragmentShader;t.deleteProgram(r),t.deleteBuffer(i),t.deleteShader(a),t.deleteShader(o),this.normalProgram=this.getProgramInfo(`normal`,t,_.vertexShader,_.fragmentShader,this._pickingBuffer)}}},{key:`process`,value:function(e,t,n,r,i,a){var o=t*this.STRIDE;if(i.visibility===`hidden`||n.visibility===`hidden`||r.visibility===`hidden`){for(var s=o+this.STRIDE;o<s;o++)this.floats[o]=0;this.floats[t*this.STRIDE]=Oi}else this.processVisibleItem($t(e),o,n,r,i,a)}},{key:`processVisibleItem`,value:function(e,t,n,r,i,a){var o=this.floats,s=this.ints;o[t++]=a,o[t++]=Zt(i.color),s[t++]=e,o[t++]=i.opacity??1;var c=this.packedAttributeData;Ni(this.attrDescriptors,i,c,i.color,this.layerLifecycles,this.lifecycleIndexOffset),this.edgeAttributeTexture.updateAllAttributesAtRow(a,c)}},{key:`setUniforms`,value:function(e,t){var n=this,r=t.gl,i=t.uniformLocations;i.u_matrix&&r.uniformMatrix3fv(i.u_matrix,!1,e.matrix),i.u_sizeRatio&&r.uniform1f(i.u_sizeRatio,e.sizeRatio),i.u_correctionRatio&&r.uniform1f(i.u_correctionRatio,e.correctionRatio),i.u_zoomRatio&&r.uniform1f(i.u_zoomRatio,e.zoomRatio),i.u_pixelRatio&&r.uniform1f(i.u_pixelRatio,e.pixelRatio),i.u_cameraAngle&&r.uniform1f(i.u_cameraAngle,e.cameraAngle),i.u_feather&&r.uniform1f(i.u_feather,e.antiAliasingFeather),i.u_minEdgeThickness&&r.uniform1f(i.u_minEdgeThickness,e.minEdgeThickness),i.u_pickingPadding&&r.uniform1f(i.u_pickingPadding,e.edgePickingPadding),i.u_nodeDataTexture&&r.uniform1i(i.u_nodeDataTexture,e.nodeDataTextureUnit),i.u_nodeDataTextureWidth&&r.uniform1i(i.u_nodeDataTextureWidth,e.nodeDataTextureWidth),i.u_edgeDataTexture&&r.uniform1i(i.u_edgeDataTexture,e.edgeDataTextureUnit),i.u_edgeDataTextureWidth&&r.uniform1i(i.u_edgeDataTextureWidth,e.edgeDataTextureWidth),i.u_edgeFrameTexture&&r.uniform1i(i.u_edgeFrameTexture,e.edgeFrameTextureUnit),i.u_edgeFrameTextureWidth&&r.uniform1i(i.u_edgeFrameTextureWidth,e.edgeFrameTextureWidth),this.edgeAttributeTexture&&this.layout.floatsPerItem>0&&(this.edgeAttributeTexture.bind(Ea),i.u_edgeAttributeTexture&&r.uniform1i(i.u_edgeAttributeTexture,Ea),i.u_edgeAttributeTextureWidth&&r.uniform1i(i.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),i.u_edgeAttributeTexelsPerEdge&&r.uniform1i(i.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem()));var a=new Set;c.forEach(function(e){e.uniforms.forEach(function(e){a.has(e.name)||(a.add(e.name),n.setTypedUniform(e,t))})}),f.forEach(function(e){e.uniforms.forEach(function(e){a.has(e.name)||(a.add(e.name),n.setTypedUniform(e,t))})}),l.forEach(function(e){e.uniforms.forEach(function(e){a.has(e.name)||(a.add(e.name),n.setTypedUniform(e,t))})})}},{key:`render`,value:function(e,n,r){this.maybeRegenerateShaders(),X(t,`render`,this,3)([e,n,r])}},{key:`renderProgram`,value:function(e,n){this.layerLifecycles.forEach(function(e){return e.beforeRender?.call(e)}),X(t,`renderProgram`,this,3)([e,n])}},{key:`uploadAttributeTexture`,value:function(){this.edgeAttributeTexture&&this.layout.floatsPerItem>0&&this.edgeAttributeTexture.upload()}},{key:`kill`,value:function(){this.layerLifecycles.forEach(function(e){return e.kill?.call(e)}),this.edgeAttributeTexture&&=(this.edgeAttributeTexture.kill(),null),X(t,`kill`,this,3)([])}}])}(zi),b=f[h],x=f[g],S=H({paths:c,headLengthRatio:gn(b.length)?0:b.length,tailLengthRatio:gn(x.length)?0:x.length},r.label),C=xo(S),w=function(){return{labelProgram:Ao(e,null,n,S),labelBackgroundProgram:bo(e,t,n,{shaderConfig:C})}},T=new oo(e,{paths:c,extremities:f,layers:l,nodeShapes:a,nodeLayers:o});return{edgeProgram:new y(e,null,n),createLabelPrograms:w,framePass:T}}function No(e){return J(e)===`object`&&`uniforms`in e&&Array.isArray(e.uniforms)}function Po(e){return J(e)===`object`&&`uniforms`in e&&`attributes`in e&&`glsl`in e}function Fo(e){return J(e)===`object`&&`uniforms`in e&&`attributes`in e&&`segments`in e}function Io(e){return J(e)===`object`&&`uniforms`in e&&`attributes`in e&&`length`in e}function Lo(e){return J(e)===`object`&&`uniforms`in e&&`attributes`in e&&`glsl`in e}function Ro(e){return J(e)===`object`&&`glsl`in e&&`name`in e&&!(`uniforms`in e)}function zo(e){return J(e)===`object`&&`glsl`in e&&`name`in e&&!(`uniforms`in e)}function Bo(e){return J(e)===`object`&&`glsl`in e&&`name`in e&&!(`uniforms`in e)}function Vo(e){if(No(e))return e;if(Ro(e))return{name:e.name,glsl:e.glsl,inradiusFactor:e.inradiusFactor,uniforms:[]};throw Error(`Invalid node shape specification: ${JSON.stringify(e)}`)}function Ho(e){if(Po(e))return e;if(Cn(e))return{name:e.name,glsl:e.glsl,uniforms:[],attributes:[]};throw Error(`Invalid node layer specification: ${JSON.stringify(e)}`)}function Uo(e){if(Fo(e))return e;if(zo(e))return{name:e.name,glsl:e.glsl,segments:e.segments,uniforms:[],attributes:[]};throw Error(`Invalid edge path specification: ${JSON.stringify(e)}`)}function Wo(e){if(Lo(e))return e;if(wn(e))return{name:e.name,glsl:e.glsl,uniforms:[],attributes:[]};throw Error(`Invalid edge layer specification: ${JSON.stringify(e)}`)}function Go(e){if(Io(e))return e;if(Bo(e))return{name:e.name,glsl:e.glsl,length:e.length,widthFactor:e.widthFactor,margin:0,uniforms:[],attributes:[]};throw Error(`Invalid edge extremity specification: ${JSON.stringify(e)}`)}function Ko(e){var t=e?.shapes??Tn.shapes,n=e?.layers??Tn.layers,r=t.map(Vo),i=n.map(Ho);if(r.length===0)throw Error(`At least one node shape must be specified.`);if(i.length===0)throw Error(`At least one node layer must be specified.`);return{shapes:r,layers:i}}function qo(e){var t=e?.paths??En.paths,n=e?.extremities??En.extremities,r=e?.layers??En.layers,i=t.map(Uo),a=n.map(Go).filter(function(e){return e!==null}),o=r.map(Wo);if(i.length===0)throw Error(`At least one edge path must be specified.`);if(o.length===0)throw Error(`At least one edge layer must be specified.`);return{paths:i,extremities:a,layers:o}}function Jo(e,t){var n={},r=B(e),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;a.variables&&Object.assign(n,a.variables)}}catch(e){r.e(e)}finally{r.f()}return Object.assign(n,t||{}),n}function Yo(e,t,n,r,i){var a=Ko(r),o=a.shapes,s=a.layers,c=Jo(o,r?.variables);return H(H({},Ta(e,t,n,{shapes:o,layers:s,label:r?.label,backdrop:r?.backdrop,labelAttachments:r?.labelAttachments},i)),{},{variables:c})}function Xo(e,t,n,r,i,a){var o=qo(r),s=o.paths,c=o.extremities,l=o.layers,u=Ko(a),d=u.shapes,f=u.layers,p=Jo(s,r?.variables);return H(H({},Mo(e,t,n,{paths:s,extremities:c,layers:l,defaultHead:r?.defaultHead,defaultTail:r?.defaultTail,label:r?.label},i,d,f)),{},{variables:p,paths:s})}var Zo=2;function Qo(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Zo,i=t.canvas,a=i.width,o=i.height,s=n.x,c=n.y,l=n.rowHeight,u=n.maxRowWidth,d={},f=[],p=B(e),m;try{for(p.s();!(m=p.n()).done;){var h=m.value,g=h.width+r,_=h.height+r;g>a||_>o||s+g>a&&c+l+_>o?f.push(h):(s+g>a&&(u=Math.max(u,s),s=0,c+=l,l=_),h.draw(t,s,c),d[h.key]={x:s,y:c,width:h.width,height:h.height},s+=g,l=Math.max(l,_))}}catch(e){p.e(e)}finally{p.f()}return u=Math.max(u,s),{atlas:d,cursor:{x:s,y:c,rowHeight:l,maxRowWidth:u},remaining:f}}function $o(e,t,n,r){var i=Object.defineProperty;try{i({},``,{})}catch{i=0}$o=function(e,t,n,r){function a(t,n){$o(e,t,function(e){return this._invoke(t,n,e)})}t?i?i(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(a(`next`,0),a(`throw`,1),a(`return`,2))},$o(e,t,n,r)}function es(){var e,t,n=typeof Symbol==`function`?Symbol:{},r=n.iterator||`@@iterator`,i=n.toStringTag||`@@toStringTag`;function a(n,r,i,a){var c=r&&r.prototype instanceof s?r:s,l=Object.create(c.prototype);return $o(l,`_invoke`,function(n,r,i){var a,s,c,l=0,u=i||[],d=!1,f={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return a=t,s=0,c=e,f.n=n,o}};function p(n,r){for(s=n,c=r,t=0;!d&&l&&!i&&t<u.length;t++){var i,a=u[t],p=f.p,m=a[2];n>3?(i=m===r)&&(c=a[(s=a[4])?5:(s=3,3)],a[4]=a[5]=e):a[0]<=p&&((i=n<2&&p<a[1])?(s=0,f.v=r,f.n=a[1]):p<m&&(i=n<3||a[0]>r||r>m)&&(a[4]=n,a[5]=r,f.n=m,s=0))}if(i||n>1)return o;throw d=!0,r}return function(i,u,m){if(l>1)throw TypeError(`Generator is already running`);for(d&&u===1&&p(u,m),s=u,c=m;(t=s<2?e:c)||!d;){a||(s?s<3?(s>1&&(f.n=-1),p(s,c)):f.n=c:f.v=c);try{if(l=2,a){if(s||(i=`next`),t=a[i]){if(!(t=t.call(a,c)))throw TypeError(`iterator result is not an object`);if(!t.done)return t;c=t.value,s<2&&(s=0)}else s===1&&(t=a.return)&&t.call(a),s<2&&(c=TypeError(`The iterator does not provide a '`+i+`' method`),s=1);a=e}else if((t=(d=f.n<0)?c:n.call(r,f))!==o)break}catch(t){a=e,s=1,c=t}finally{l=1}}return{value:t,done:d}}}(n,i,a),!0),l}var o={};function s(){}function c(){}function l(){}t=Object.getPrototypeOf;var u=[][r]?t(t([][r]())):($o(t={},r,function(){return this}),t),d=l.prototype=s.prototype=Object.create(u);function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,l):(e.__proto__=l,$o(e,i,`GeneratorFunction`)),e.prototype=Object.create(d),e}return c.prototype=l,$o(d,`constructor`,l),$o(l,`constructor`,c),c.displayName=`GeneratorFunction`,$o(l,i,`GeneratorFunction`),$o(d),$o(d,i,`Generator`),$o(d,r,function(){return this}),$o(d,`toString`,function(){return`[object Generator]`}),(es=function(){return{w:a,m:f}})()}function ts(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){n(e);return}s.done?t(c):Promise.resolve(c).then(r,i)}function ns(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){ts(a,r,i,o,s,`next`,e)}function s(e){ts(a,r,i,o,s,`throw`,e)}o(void 0)})}}var rs=new Map,is=!1;function as(e){return new Promise(function(t,n){var r=new FileReader;r.onload=function(){return t(r.result)},r.onerror=n,r.readAsDataURL(e)})}function os(e){if(!rs.has(e)){var t=fetch(e).then(function(e){return e.blob()}).then(as).catch(function(){return rs.delete(e),null});rs.set(e,t)}return rs.get(e)}function ss(e){return cs.apply(this,arguments)}function cs(){return cs=ns(es().m(function e(t){var n,r,i;return es().w(function(e){for(;;)switch(e.n){case 0:return n=document.createElement(`div`),n.innerHTML=t,r=Array.from(n.querySelectorAll(`img[src]`)),i=r.filter(function(e){return!e.getAttribute(`src`).startsWith(`data:`)}),e.n=1,Promise.all(i.map(function(){var e=ns(es().m(function e(t){var n;return es().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,os(t.getAttribute(`src`));case 1:n=e.v,n&&t.setAttribute(`src`,n);case 2:return e.a(2)}},e)}));return function(t){return e.apply(this,arguments)}}()));case 1:return e.a(2,n.innerHTML)}},e)})),cs.apply(this,arguments)}function ls(e){return us.apply(this,arguments)}function us(){return us=ns(es().m(function e(t){var n,r,i,a,o,s,c,l,u,d,f,p,m,h=arguments;return es().w(function(e){for(;;)switch(e.n){case 0:if(n=h.length>1&&h[1]!==void 0?h[1]:1,r=t instanceof SVGElement?new XMLSerializer().serializeToString(t):t,i=new DOMParser,a=i.parseFromString(r,`image/svg+xml`),o=a.querySelector(`svg`),o){e.n=1;break}return e.a(2,null);case 1:if(s=parseFloat(o.getAttribute(`width`)||``),c=parseFloat(o.getAttribute(`height`)||``),s>0&&c>0||(l=o.getAttribute(`viewBox`),l&&(u=l.trim().split(/[\s,]+/),s=parseFloat(u[2]),c=parseFloat(u[3]))),s>0&&c>0){e.n=2;break}return console.warn(`Sigma: SVG label attachment has no parseable dimensions — skipped.`),e.a(2,null);case 2:return d=Math.ceil(s*n),f=Math.ceil(c*n),p=new Blob([r],{type:`image/svg+xml`}),m=URL.createObjectURL(p),e.a(2,new Promise(function(e){var t=new Image;t.onload=function(){var n=document.createElement(`canvas`);n.width=d,n.height=f,n.getContext(`2d`).drawImage(t,0,0,d,f),URL.revokeObjectURL(m);try{n.getContext(`2d`).getImageData(0,0,1,1)}catch(t){if(t instanceof DOMException&&t.name===`SecurityError`){is||(is=!0,console.warn(`Sigma: A label attachment was skipped because the rendered canvas is tainted. SVG with <foreignObject> (used by the "html" attachment type) is blocked in Chromium and Safari. Use type: "canvas" with Canvas 2D rendering instead.`)),e(null);return}throw t}e(n)},t.onerror=function(){URL.revokeObjectURL(m),e(null)},t.src=m}))}},e)})),us.apply(this,arguments)}function ds(e,t){var n=document.createElement(`div`);n.style.cssText=`position:fixed;left:-99999px;top:0;visibility:hidden;width:max-content;height:max-content`,n.innerHTML=(t?`<style>${t}</style>`:``)+e,document.body.appendChild(n);var r=n.getBoundingClientRect(),i=r.width,a=r.height;return document.body.removeChild(n),{width:Math.ceil(i),height:Math.ceil(a)}}function fs(e,t,n,r){return ps.apply(this,arguments)}function ps(){return ps=ns(es().m(function e(t,n,r,i){var a,o,s,c,l,u,d,f,p=arguments;return es().w(function(e){for(;;)switch(e.n){case 0:return a=p.length>4&&p[4]!==void 0?p[4]:1,o=t instanceof HTMLElement?t.outerHTML:t,e.n=1,ss(o);case 1:return s=e.v,(r==null||i==null)&&(c=ds(s,n),r??=c.width,i??=c.height),l=Math.ceil(r*a),u=Math.ceil(i*a),d=n?`<style>${n}</style>`:``,f=`<svg xmlns="http://www.w3.org/2000/svg" width="${l}" height="${u}" viewBox="0 0 ${r} ${i}"><foreignObject width="${r}" height="${i}"><body xmlns="http://www.w3.org/1999/xhtml" style="margin:0;padding:0">${d}${s}</body></foreignObject></svg>`,e.a(2,ls(f,1))}},e)})),ps.apply(this,arguments)}function ms(e){return hs.apply(this,arguments)}function hs(){return hs=ns(es().m(function e(t){var n,r=arguments,i;return es().w(function(e){for(;;)switch(e.n){case 0:n=r.length>1&&r[1]!==void 0?r[1]:1,i=t.type,e.n=i===`canvas`?1:i===`svg`?2:i===`html`?3:4;break;case 1:return e.a(2,t.canvas);case 2:return e.a(2,ls(t.svg,n));case 3:return e.a(2,fs(t.html,t.css,t.width,t.height,n));case 4:return e.a(2)}},e)})),hs.apply(this,arguments)}var gs=2048,_s=function(){function e(t,n,r){U(this,e),V(this,`cache`,new Map),V(this,`pending`,new Set),V(this,`atlas`,{}),V(this,`glTexture`,null),V(this,`dirty`,!0),this.gl=t,this.renderers=n,this.scheduleRender=r,this.packCanvas=document.createElement(`canvas`),this.packCanvas.width=gs,this.packCanvas.height=gs,this.packCtx=this.packCanvas.getContext(`2d`)}return W(e,[{key:`renderAttachment`,value:function(e,t,n){var r=this,i=`${e}:${t}`;if(!(this.cache.has(i)||this.pending.has(i))){var a=this.renderers[t];if(a){var o=a(n);if(o){this.pending.add(i);var s=n.pixelRatio;Promise.resolve(o).then(function(){var e=ns(es().m(function e(t){var n;return es().w(function(e){for(;;)switch(e.n){case 0:if(r.pending.has(i)){e.n=1;break}return e.a(2);case 1:if(r.pending.delete(i),t){e.n=2;break}return e.a(2);case 2:return e.n=3,ms(t,s);case 3:if(n=e.v,n&&n.width!==0&&n.height!==0){e.n=4;break}return e.a(2);case 4:r.cache.set(i,{image:n,width:n.width,height:n.height}),r.dirty=!0,r.scheduleRender();case 5:return e.a(2)}},e)}));return function(t){return e.apply(this,arguments)}}())}}}}},{key:`regenerateAtlas`,value:function(){if(this.dirty){this.dirty=!1;var e=[];if(this.cache.forEach(function(t,n){e.push({key:n,width:t.width,height:t.height,draw:function(e,n,r){e.drawImage(t.image,n,r)}})}),e.length===0)this.atlas={},this.deleteGLTexture();else{var t={x:0,y:0,rowHeight:0,maxRowWidth:0};this.packCtx.clearRect(0,0,gs,gs);var n=Qo(e,this.packCtx,t),r=n.atlas,i=n.remaining;this.atlas=r,i.length>0&&console.warn(`Sigma: ${i.length} label attachment(s) could not fit in the ${gs}x${gs} atlas and will not be rendered.`),this.deleteGLTexture();var a=this.gl,o=a.createTexture();a.activeTexture(a.TEXTURE0+7),a.bindTexture(a.TEXTURE_2D,o),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,this.packCanvas),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),this.glTexture=o}}}},{key:`bindTexture`,value:function(e){if(this.glTexture){var t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.glTexture)}}},{key:`getEntry`,value:function(e,t){var n=`${e}:${t}`;return this.atlas[n]||null}},{key:`invalidateNode`,value:function(e){var t=`${e}:`,n=B(this.cache.keys()),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;i.startsWith(t)&&(this.cache.delete(i),this.dirty=!0)}}catch(e){n.e(e)}finally{n.f()}var a=B(this.pending),o;try{for(a.s();!(o=a.n()).done;){var s=o.value;s.startsWith(t)&&this.pending.delete(s)}}catch(e){a.e(e)}finally{a.f()}}},{key:`restore`,value:function(){this.glTexture=null,this.dirty=!0}},{key:`clear`,value:function(){this.cache.clear(),this.pending.clear(),this.atlas={},this.dirty=!0,this.deleteGLTexture()}},{key:`kill`,value:function(){this.clear(),this.packCanvas=null,this.packCtx=null,this.gl=null}},{key:`deleteGLTexture`,value:function(){this.glTexture&&=(this.gl.deleteTexture(this.glTexture),null)}}])}(),vs=function(){function e(t){U(this,e),V(this,`buckets`,new Map),V(this,`keyDepth`,new Map);var n=B(t),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;this.buckets.set(i,new Set)}}catch(e){n.e(e)}finally{n.f()}}return W(e,[{key:`has`,value:function(e){return this.keyDepth.has(e)}},{key:`getBucket`,value:function(e){return this.buckets.get(e)}},{key:`set`,value:function(e,t){var n,r=this.keyDepth.get(e);if(r!==t){var i=this.buckets.get(t);if(!i)throw Error(`Sigma: "${t}" is not a declared depth layer`);r!==void 0&&((n=this.buckets.get(r))==null||n.delete(e)),i.add(e),this.keyDepth.set(e,t)}}},{key:`remove`,value:function(e){var t=this.keyDepth.get(e);t!==void 0&&(this.buckets.get(t).delete(e),this.keyDepth.delete(e))}},{key:`clearAll`,value:function(){var e=B(this.buckets.values()),t;try{for(e.s();!(t=e.n()).done;)t.value.clear()}catch(t){e.e(t)}finally{e.f()}this.keyDepth.clear()}},{key:`getSorted`,value:function(e,t){var n=this.buckets.get(e);return!n||n.size===0?[]:q(n).sort(function(e,n){return t(e)-t(n)})}}])}(),ys=function(e){function t(e,n){return U(this,t),G(this,t,[e,2,n])}return K(t,e),W(t,[{key:`updateNode`,value:function(e,t,n,r,i,a,o,s){var c=this.indexMap.get(e);if(c===void 0)throw Error(`Node "${e}" not allocated in NodeDataTexture`);var l=z(Qt(s),4),u=l[0],d=l[1],f=l[2],p=l[3],m=c*2*4;this.data[m]=t,this.data[m+1]=n,this.data[m+2]=r,this.data[m+3]=i,this.data[m+4]=a,this.data[m+5]=o,this.data[m+6]=u*65536+d*256+f,this.data[m+7]=p/255,this.markDirty(c)}}])}(ki),bs=1024,xs=1.5,Ss=4096,Cs=function(){function e(t,n){if(U(this,e),V(this,`texture`,null),V(this,`framebuffer`,null),!t.getExtension(`EXT_color_buffer_float`))throw Error(`sigma: EXT_color_buffer_float is required for label/edge placement but is unavailable in this WebGL2 context.`);this.gl=t,this.channels=n.channels,this.capacity=this.roundUpToPowerOfTwo(n.initialCapacity??bs);var r=this.computeDimensions(this.capacity);this.textureWidth=r.width,this.textureHeight=r.height,this.create()}return W(e,[{key:`roundUpToPowerOfTwo`,value:function(e){return 2**Math.ceil(Math.log2(Math.max(1,e)))}},{key:`computeDimensions`,value:function(e){var t=Math.min(e,Ss);return{width:t,height:Math.ceil(e/t)}}},{key:`create`,value:function(){var e=this.gl,t=this.channels===1?e.R32F:e.RGBA32F,n=this.channels===1?e.RED:e.RGBA;if(this.texture=e.createTexture(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,t,this.textureWidth,this.textureHeight,0,n,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),this.framebuffer=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texture,0),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw Error(`sigma: float framebuffer for frame-pass placement is incomplete.`);e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null)}},{key:`ensureCapacity`,value:function(e){if(!(e<=this.capacity)){var t=this.gl;this.capacity=this.roundUpToPowerOfTwo(Math.ceil(e*xs));var n=this.computeDimensions(this.capacity);this.textureWidth=n.width,this.textureHeight=n.height,this.texture&&t.deleteTexture(this.texture),this.framebuffer&&t.deleteFramebuffer(this.framebuffer),this.create()}}},{key:`bindAsRenderTarget`,value:function(){var e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),e.viewport(0,0,this.textureWidth,this.textureHeight)}},{key:`bind`,value:function(e){var t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture)}},{key:`getTexture`,value:function(){return this.texture}},{key:`getTextureWidth`,value:function(){return this.textureWidth}},{key:`getTextureHeight`,value:function(){return this.textureHeight}},{key:`restore`,value:function(){this.gl.getExtension(`EXT_color_buffer_float`),this.create()}},{key:`kill`,value:function(){var e=this.gl;this.texture&&=(e.deleteTexture(this.texture),null),this.framebuffer&&=(e.deleteFramebuffer(this.framebuffer),null)}}])}(),ws=function(e){function t(e,n){return U(this,t),G(this,t,[e,2,n])}return K(t,e),W(t,[{key:`updateEdge`,value:function(e,t,n,r,i,a){var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0,s=arguments.length>7&&arguments[7]!==void 0?arguments[7]:0,c=arguments.length>8&&arguments[8]!==void 0?arguments[8]:0,l=this.indexMap.get(e);if(l===void 0)throw Error(`Edge "${e}" not allocated in EdgeDataTexture`);var u=l*this.TEXELS_PER_ITEM*4;this.data[u+0]=t,this.data[u+1]=n,this.data[u+2]=r,this.data[u+3]=0,this.data[u+4]=i,this.data[u+5]=a,this.data[u+6]=o,this.data[u+7]=(s&15)<<4|c&15,this.markDirty(l)}}])}(ki);function Ts(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Es(e,t){if(e==null)return{};var n,r,i=Ts(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var Ds=[`factor`],Os=[`factor`],ks=1.5,As={x:.5,y:.5,angle:0,ratio:1},js=function(e){function t(){var e;U(this,t);var n=[...arguments];return e=G(this,t,[].concat(n)),V(e,`minRatio`,null),V(e,`maxRatio`,null),V(e,`enabled`,!0),V(e,`enabledZooming`,!0),V(e,`enabledPanning`,!0),V(e,`enabledRotation`,!0),V(e,`constrainState`,null),V(e,`state`,H({},As)),V(e,`previousState`,H({},As)),V(e,`nextFrame`,null),V(e,`currentAnimationFrom`,null),V(e,`currentAnimationTo`,null),V(e,`animationCallback`,null),e}return K(t,e),W(t,[{key:`x`,get:function(){return this.state.x}},{key:`y`,get:function(){return this.state.y}},{key:`angle`,get:function(){return this.state.angle}},{key:`ratio`,get:function(){return this.state.ratio}},{key:`getState`,value:function(){return H({},this.state)}},{key:`getPreviousState`,value:function(){return H({},this.previousState)}},{key:`getBoundedRatio`,value:function(e){var t=e;return typeof this.minRatio==`number`&&(t=Math.max(t,this.minRatio)),typeof this.maxRatio==`number`&&(t=Math.min(t,this.maxRatio)),t}},{key:`validateState`,value:function(e){var t=this.getState();return this.enabledPanning&&typeof e.x==`number`&&(t.x=e.x),this.enabledPanning&&typeof e.y==`number`&&(t.y=e.y),this.enabledZooming&&typeof e.ratio==`number`&&(t.ratio=this.getBoundedRatio(e.ratio)),this.enabledRotation&&typeof e.angle==`number`&&(t.angle=e.angle),this.constrainState?this.constrainState(t):t}},{key:`isAnimating`,value:function(){return this.nextFrame!==null}},{key:`setState`,value:function(e){if(!this.enabled)return this;var t=this.validateState(e);return Sr(this.state,t)||(this.previousState=this.state,this.state=t,this.emit(`updated`,this.getState())),this}},{key:`updateState`,value:function(e){return this.setState(e(this.getState())),this}},{key:`animate`,value:function(e,t){var n=this;return this.enabled?new Promise(function(r){return n.runAnimation(e,H(H({},Tr),t),r)}):Promise.resolve()}},{key:`cancelAnimation`,value:function(){return this.nextFrame!==null&&(cancelAnimationFrame(this.nextFrame),this.nextFrame=null),this.resolveAnimation(),this.emitAnimationEnd(!1),this}},{key:`zoomIn`,value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.factor,n=t===void 0?ks:t,r=Es(e,Ds);return this.animate({ratio:this.ratio/n},r)}},{key:`zoomOut`,value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.factor,n=t===void 0?ks:t,r=Es(e,Os);return this.animate({ratio:this.ratio*n},r)}},{key:`reset`,value:function(e){return this.animate(As,e)}},{key:`runAnimation`,value:function(e,t,n){var r=this,i=Mn(t.easing),a=Date.now(),o=this.getState(),s=this.validateState(e),c=function(){if(!r.enabled)r.cancelAnimation();else{var e=t.duration>0?(Date.now()-a)/t.duration:1;if(e>=1)r.nextFrame=null,r.setState(s),r.resolveAnimation(),r.emitAnimationEnd(!0);else{var n=i(e);r.setState({x:o.x+(s.x-o.x)*n,y:o.y+(s.y-o.y)*n,angle:o.angle+(s.angle-o.angle)*n,ratio:o.ratio+(s.ratio-o.ratio)*n}),r.nextFrame=requestAnimationFrame(c)}}};this.cancelAnimation(),this.currentAnimationFrom=o,this.currentAnimationTo=s,this.animationCallback=n,this.emit(`animationStart`,{from:o,to:s}),c()}},{key:`resolveAnimation`,value:function(){var e=this.animationCallback;this.animationCallback=null,e&&e()}},{key:`emitAnimationEnd`,value:function(e){var t=this.currentAnimationFrom,n=this.currentAnimationTo;t&&n&&(this.currentAnimationFrom=null,this.currentAnimationTo=null,this.emit(`animationEnd`,{from:t,to:n,completed:e}))}}],[{key:`from`,value:function(e){return new t().setState(e)}}])}(_r);function Z(e,t){var n=t.getBoundingClientRect();return{x:e.clientX-n.left,y:e.clientY-n.top}}function Ms(e,t){var n=H(H({},Z(e,t)),{},{sigmaDefaultPrevented:!1,preventSigmaDefault:function(){n.sigmaDefaultPrevented=!0},original:e});return n}function Ns(e){var t=`x`in e?e:H(H({},e.touches[0]||e.previousTouches[0]),{},{original:e.original,sigmaDefaultPrevented:e.sigmaDefaultPrevented,preventSigmaDefault:function(){e.sigmaDefaultPrevented=!0,t.sigmaDefaultPrevented=!0}});return t}function Ps(e,t){var n=Ms(e,t);return n.delta=Rs(e),n}var Fs=2;function Is(e){for(var t=[],n=0,r=Math.min(e.length,Fs);n<r;n++)t.push(e[n]);return t}function Ls(e,t,n){var r={touches:Is(e.touches).map(function(e){return Z(e,n)}),previousTouches:t.map(function(e){return Z(e,n)}),sigmaDefaultPrevented:!1,preventSigmaDefault:function(){r.sigmaDefaultPrevented=!0},original:e};return r}function Rs(e){if(e.deltaY!==void 0)return e.deltaY*-3/360;if(e.detail!==void 0)return e.detail/-9;throw Error(`Captor: could not extract delta from event.`)}var zs=function(e){function t(e,n){var r;return U(this,t),r=G(this,t),r.container=e,r.renderer=n,r}return K(t,e),W(t)}(_r),Bs=[`doubleClickTimeout`,`doubleClickZoomingDuration`,`doubleClickZoomingRatio`,`dragTimeout`,`draggedEventsTolerance`,`enableCameraMouseRotation`,`gestureTarget`,`inertiaDuration`,`inertiaRatio`,`zoomDuration`,`zoomingRatio`].reduce(function(e,t){return H(H({},e),{},V({},t,Nr[t]))},{});function Vs(e){return e instanceof PointerEvent&&e.pointerType===`touch`}var Hs=function(e){function t(e,n){var r;return U(this,t),r=G(this,t,[e,n]),V(r,`enabled`,!0),V(r,`draggedEvents`,0),V(r,`downStartTime`,null),V(r,`lastMouseX`,null),V(r,`lastMouseY`,null),V(r,`isMouseDown`,!1),V(r,`isMoving`,!1),V(r,`isPanningStage`,!1),V(r,`movingTimeout`,null),V(r,`startCameraState`,null),V(r,`clicks`,0),V(r,`doubleClickTimeout`,null),V(r,`isRightMouseDown`,!1),V(r,`startRotationAngle`,null),V(r,`startCameraAngle`,null),V(r,`currentWheelDirection`,0),V(r,`lastWheelAnimationId`,0),V(r,`settings`,Bs),r.handleRightClick=r.handleRightClick.bind(r),r.handleDown=r.handleDown.bind(r),r.handleUp=r.handleUp.bind(r),r.handleMove=r.handleMove.bind(r),r.handleWheel=r.handleWheel.bind(r),r.handleLeave=r.handleLeave.bind(r),r.handleEnter=r.handleEnter.bind(r),e.addEventListener(`contextmenu`,r.handleRightClick,{capture:!1}),e.addEventListener(`pointerdown`,r.handleDown,{capture:!1}),e.addEventListener(`wheel`,r.handleWheel,{capture:!1,passive:!1}),e.addEventListener(`pointerleave`,r.handleLeave,{capture:!1}),e.addEventListener(`pointerenter`,r.handleEnter,{capture:!1}),document.addEventListener(`pointermove`,r.handleMove,{capture:!1}),document.addEventListener(`pointerup`,r.handleUp,{capture:!1}),r}return K(t,e),W(t,[{key:`kill`,value:function(){var e=this.container;e.removeEventListener(`contextmenu`,this.handleRightClick),e.removeEventListener(`pointerdown`,this.handleDown),e.removeEventListener(`wheel`,this.handleWheel),e.removeEventListener(`pointerleave`,this.handleLeave),e.removeEventListener(`pointerenter`,this.handleEnter),document.removeEventListener(`pointermove`,this.handleMove),document.removeEventListener(`pointerup`,this.handleUp)}},{key:`handleClick`,value:function(e){var t=this;if(this.enabled){if(this.clicks++,this.clicks===2)return this.clicks=0,typeof this.doubleClickTimeout==`number`&&(clearTimeout(this.doubleClickTimeout),this.doubleClickTimeout=null),this.handleDoubleClick(e);setTimeout(function(){t.clicks=0,t.doubleClickTimeout=null},this.settings.doubleClickTimeout),this.draggedEvents<this.settings.draggedEventsTolerance&&this.emit(`click`,Ms(e,this.container))}}},{key:`handleRightClick`,value:function(e){this.enabled&&(this.settings.enableCameraMouseRotation&&e.preventDefault(),this.emit(`rightClick`,Ms(e,this.container)))}},{key:`handleDoubleClick`,value:function(e){if(this.enabled){e.preventDefault(),e.stopPropagation();var t=Ms(e,this.container);if(this.emit(`doubleClick`,t),!t.sigmaDefaultPrevented){var n=this.renderer.getCamera(),r=n.getBoundedRatio(n.getState().ratio/this.settings.doubleClickZoomingRatio);n.animate(this.renderer.getViewportZoomedState(Z(e,this.container),r),{easing:`quadraticInOut`,duration:this.settings.doubleClickZoomingDuration})}}}},{key:`handleDown`,value:function(e){if(this.enabled&&!Vs(e)){if(e.button===0){this.startCameraState=this.renderer.getCamera().getState();var t=Z(e,this.container),n=t.x,r=t.y;this.lastMouseX=n,this.lastMouseY=r,this.draggedEvents=0,this.downStartTime=Date.now(),this.isMouseDown=!0}if(e.button===2&&this.settings.enableCameraMouseRotation){var i=Z(e,this.container),a=i.x,o=i.y,s=this.container.offsetWidth/2,c=this.container.offsetHeight/2;this.startRotationAngle=Math.atan2(o-c,a-s),this.startCameraAngle=this.renderer.getCamera().getState().angle,this.isRightMouseDown=!0}this.emit(`mousedown`,Ms(e,this.container))}}},{key:`handleUp`,value:function(e){var t=this;if(this.enabled&&!Vs(e)&&(this.isMouseDown||this.isRightMouseDown)){if(this.isRightMouseDown)this.isRightMouseDown=!1,this.startRotationAngle=null,this.startCameraAngle=null,this.emit(`mouseup`,Ms(e,this.container));else{var n=this.renderer.getCamera();this.isMouseDown=!1,this.isPanningStage&&(this.isPanningStage=!1,this.renderer._setPanning(!1)),typeof this.movingTimeout==`number`&&(clearTimeout(this.movingTimeout),this.movingTimeout=null);var r=Z(e,this.container),i=r.x,a=r.y,o=n.getState(),s=n.getPreviousState();this.isMoving?n.animate({x:o.x+this.settings.inertiaRatio*(o.x-s.x),y:o.y+this.settings.inertiaRatio*(o.y-s.y)},{duration:this.settings.inertiaDuration,easing:`quadraticOut`}):(this.lastMouseX!==i||this.lastMouseY!==a)&&n.setState({x:o.x,y:o.y}),this.isMoving=!1,setTimeout(function(){var e=t.draggedEvents>0;t.draggedEvents=0;var n=t.renderer.getSetting(`hideEdgesOnMove`)||t.renderer.getSetting(`hideLabelsOnMove`);e&&n&&t.renderer.refresh()},0),this.emit(`mouseup`,Ms(e,this.container)),(e.target===this.container||e.composedPath()[0]===this.container)&&this.handleClick(e)}}}},{key:`handleMove`,value:function(e){var t=this;if(this.enabled&&!Vs(e)){var n=Ms(e,this.container);if(this.emit(`mousemovebody`,n),(e.target===this.container||e.composedPath()[0]===this.container)&&this.emit(`mousemove`,n),this.isMouseDown&&this.draggedEvents++,!n.sigmaDefaultPrevented){if(this.isMouseDown){this.isMoving=!0,typeof this.movingTimeout==`number`&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){t.movingTimeout=null,t.isMoving=!1},this.settings.dragTimeout);var r=this.renderer.getCamera(),i=Z(e,this.container),a=i.x,o=i.y,s=this.renderer.viewportToFramedGraph({x:this.lastMouseX,y:this.lastMouseY}),c=this.renderer.viewportToFramedGraph({x:a,y:o}),l=s.x-c.x,u=s.y-c.y,d=r.getState(),f=d.x+l,p=d.y+u;this.isPanningStage||(this.isPanningStage=!0,this.renderer._setPanning(!0)),r.setState({x:f,y:p}),this.lastMouseX=a,this.lastMouseY=o,e.preventDefault(),e.stopPropagation()}if(this.isRightMouseDown){var m=Z(e,this.container),h=m.x,g=m.y,_=this.container.offsetWidth/2,v=this.container.offsetHeight/2,y=Math.atan2(g-v,h-_)-this.startRotationAngle;this.renderer.getCamera().setState({angle:this.startCameraAngle+y}),e.preventDefault(),e.stopPropagation()}}}}},{key:`handleLeave`,value:function(e){Vs(e)||this.emit(`mouseleave`,Ms(e,this.container))}},{key:`handleEnter`,value:function(e){Vs(e)||this.emit(`mouseenter`,Ms(e,this.container))}},{key:`handleWheel`,value:function(e){var t=this,n=this.renderer.getCamera();if(this.enabled&&n.enabledZooming){var r=Ps(e,this.container);if(this.emit(`wheel`,r),!r.sigmaDefaultPrevented){var i=this.settings.gestureTarget;if(i!==`page`){if(i===`shared`&&!e.ctrlKey&&!e.metaKey)this.renderer._showGestureHint(`wheel`);else{var a=Rs(e);if(a){e.preventDefault(),e.stopPropagation();var o=n.getState().ratio,s=a>0?1/this.settings.zoomingRatio:this.settings.zoomingRatio,c=n.getBoundedRatio(o*s),l=a>0?1:-1,u=Date.now();if(o!==c&&!(this.currentWheelDirection===l&&this.lastWheelTriggerTime&&u-this.lastWheelTriggerTime<this.settings.zoomDuration/5)){var d=++this.lastWheelAnimationId;n.animate(this.renderer.getViewportZoomedState(Z(e,this.container),c),{easing:`quadraticOut`,duration:this.settings.zoomDuration}).then(function(){t.lastWheelAnimationId===d&&(t.currentWheelDirection=0)}),this.currentWheelDirection=l,this.lastWheelTriggerTime=u}}}}}}}},{key:`setSettings`,value:function(e){this.settings=e}}])}(zs),Us=[`dragTimeout`,`gestureTarget`,`inertiaDuration`,`inertiaRatio`,`doubleClickTimeout`,`doubleClickZoomingRatio`,`doubleClickZoomingDuration`,`tapMoveTolerance`].reduce(function(e,t){return H(H({},e),{},V({},t,Nr[t]))},{}),Ws=function(e){function t(e,n){var r;return U(this,t),r=G(this,t,[e,n]),V(r,`enabled`,!0),V(r,`isMoving`,!1),V(r,`hasMoved`,!1),V(r,`isPanningStage`,!1),V(r,`isZoomingStage`,!1),V(r,`touchMode`,0),V(r,`startTouchesPositions`,[]),V(r,`lastTouches`,[]),V(r,`lastTap`,null),V(r,`settings`,Us),r.handleStart=r.handleStart.bind(r),r.handleLeave=r.handleLeave.bind(r),r.handleMove=r.handleMove.bind(r),e.addEventListener(`touchstart`,r.handleStart,{capture:!1}),e.addEventListener(`touchcancel`,r.handleLeave,{capture:!1}),document.addEventListener(`touchend`,r.handleLeave,{capture:!1,passive:!1}),document.addEventListener(`touchmove`,r.handleMove,{capture:!1,passive:!1}),r}return K(t,e),W(t,[{key:`kill`,value:function(){var e=this.container;e.removeEventListener(`touchstart`,this.handleStart),e.removeEventListener(`touchcancel`,this.handleLeave),document.removeEventListener(`touchend`,this.handleLeave),document.removeEventListener(`touchmove`,this.handleMove)}},{key:`getDimensions`,value:function(){return{width:this.container.offsetWidth,height:this.container.offsetHeight}}},{key:`doesCapture`,value:function(e){var t=this.settings.gestureTarget;return t===`graph`||t!==`page`&&e>=2}},{key:`syncStageFlags`,value:function(){var e=this.touchMode===1&&this.hasMoved,t=this.touchMode===2;e!==this.isPanningStage&&(this.isPanningStage=e,this.renderer._setPanning(e)),t!==this.isZoomingStage&&(this.isZoomingStage=t,this.renderer._setZooming(t))}},{key:`handleStart`,value:function(e){var t=this;if(this.enabled){var n=Is(e.touches);if(this.touchMode=n.length,this.startCameraState=this.renderer.getCamera().getState(),this.startTouchesPositions=n.map(function(e){return Z(e,t.container)}),this.touchMode===2){var r=z(this.startTouchesPositions,2),i=r[0],a=i.x,o=i.y,s=r[1],c=s.x,l=s.y;this.startTouchesAngle=Math.atan2(l-o,c-a),this.startTouchesDistance=Math.sqrt((c-a)**2+(l-o)**2)}this.syncStageFlags(),this.emit(`touchdown`,Ls(e,this.lastTouches,this.container)),this.lastTouches=n,this.lastTouchesPositions=this.startTouchesPositions,e.cancelable&&(this.doesCapture(e.touches.length)||this.renderer._hasNodeDrag())&&e.preventDefault()}}},{key:`handleLeave`,value:function(e){if(this.enabled&&this.startTouchesPositions.length){switch(e.cancelable&&this.doesCapture(this.touchMode)&&e.preventDefault(),this.movingTimeout&&(this.isMoving=!1,clearTimeout(this.movingTimeout)),this.touchMode){case 2:if(e.touches.length===1){this.handleStart(e);break}case 1:if(this.isMoving){var t=this.renderer.getCamera(),n=t.getState(),r=t.getPreviousState();t.animate({x:n.x+this.settings.inertiaRatio*(n.x-r.x),y:n.y+this.settings.inertiaRatio*(n.y-r.y)},{duration:this.settings.inertiaDuration,easing:`quadraticOut`})}this.hasMoved=!1,this.isMoving=!1,this.touchMode=0}if(this.syncStageFlags(),this.emit(`touchup`,Ls(e,this.lastTouches,this.container)),!e.touches.length){var i=Z(this.lastTouches[0],this.container),a=this.startTouchesPositions[0],o=(i.x-a.x)**2+(i.y-a.y)**2;if(!e.touches.length&&o<this.settings.tapMoveTolerance**2){if(this.lastTap&&Date.now()-this.lastTap.time<this.settings.doubleClickTimeout){var s=Ls(e,this.lastTouches,this.container);if(this.emit(`doubletap`,s),this.lastTap=null,!s.sigmaDefaultPrevented&&this.settings.gestureTarget!==`page`){var c=this.renderer.getCamera(),l=c.getBoundedRatio(c.getState().ratio/this.settings.doubleClickZoomingRatio);c.animate(this.renderer.getViewportZoomedState(i,l),{easing:`quadraticInOut`,duration:this.settings.doubleClickZoomingDuration})}}else{var u=Ls(e,this.lastTouches,this.container);this.emit(`tap`,u),this.lastTap={time:Date.now(),position:u.touches[0]||u.previousTouches[0]}}}}this.lastTouches=Is(e.touches),this.startTouchesPositions=[]}}},{key:`handleMove`,value:function(e){var t=this;if(this.enabled&&this.startTouchesPositions.length){var n=this.doesCapture(e.touches.length);n&&e.preventDefault();var r=Is(e.touches),i=r.map(function(e){return Z(e,t.container)}),a=this.lastTouches;this.lastTouches=r,this.lastTouchesPositions=i;var o=Ls(e,a,this.container);if(this.emit(`touchmove`,o),!o.sigmaDefaultPrevented&&(this.hasMoved||=i.some(function(e,n){var r=t.startTouchesPositions[n];return r&&(e.x!==r.x||e.y!==r.y)}),this.hasMoved)){if(!n)this.settings.gestureTarget===`shared`&&this.renderer._showGestureHint(`touch`);else{this.isMoving=!0,this.syncStageFlags(),this.movingTimeout&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){t.isMoving=!1},this.settings.dragTimeout);var s=this.renderer.getCamera(),c=this.startCameraState,l=this.renderer.getSetting(`stagePadding`);switch(this.touchMode){case 1:var u=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0]),d=u.x,f=u.y,p=this.renderer.viewportToFramedGraph(i[0]),m=p.x,h=p.y;s.setState({x:c.x+d-m,y:c.y+f-h});break;case 2:var g={x:.5,y:.5,angle:0,ratio:1},_=i[0],v=_.x,y=_.y,b=i[1],x=b.x,S=b.y,C=Math.atan2(S-y,x-v)-this.startTouchesAngle,w=Math.hypot(S-y,x-v)/this.startTouchesDistance,T=s.getBoundedRatio(c.ratio/w);g.ratio=T,g.angle=c.angle+C;var E=this.getDimensions(),D=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0],{cameraState:c}),O=Math.min(E.width,E.height)-2*l,k=O/E.width,A=O/E.height,j=T/O,M=v-O/2/k,N=y-O/2/A,P=Pt({x:M,y:N},g.angle);M=P.x,N=P.y,g.x=D.x-M*j,g.y=D.y+N*j,s.setState(g)}}}}}},{key:`setSettings`,value:function(e){this.settings=e}}])}(zs),Gs=function(){function e(t,n,r,i){U(this,e),V(this,`pendingNode`,null),V(this,`session`,null),this.graph=t,this.viewportToGraph=n,this.setNodesState=r,this.emit=i}return W(e,[{key:`start`,value:function(e,t,n,r,i){var a=n(e),o=!1;if(this.emit(`nodeDragStart`,{node:e,allDraggedNodes:a,event:t,preventSigmaDefault:function(){o=!0}}),o)return!1;var s=new Map,c=B(a),l;try{for(c.s();!(l=c.n()).done;){var u=l.value;s.set(u,{x:this.graph.getNodeAttribute(u,r),y:this.graph.getNodeAttribute(u,i)})}}catch(e){c.e(e)}finally{c.f()}return this.session={node:e,allNodes:a,startPosition:this.viewportToGraph(t),startNodePositions:s,xAttr:r,yAttr:i},this.setNodesState(a,{isDragged:!0}),!0}},{key:`applyMove`,value:function(e,t){var n=this.session,r=n.allNodes,i=n.startNodePositions,a=n.startPosition,o=n.xAttr,s=n.yAttr,c=this.viewportToGraph(e),l={x:c.x-a.x,y:c.y-a.y},u=B(r),d;try{for(u.s();!(d=u.n()).done;){var f=d.value,p=i.get(f);if(p&&this.graph.hasNode(f)){var m={x:p.x+l.x,y:p.y+l.y};t?this.graph.mergeNodeAttributes(f,t(m,f)):(this.graph.setNodeAttribute(f,o,m.x),this.graph.setNodeAttribute(f,s,m.y))}}}catch(e){u.e(e)}finally{u.f()}}},{key:`end`,value:function(){if(this.pendingNode=null,!this.session)return null;var e=this.session,t=e.node,n=e.allNodes;return this.setNodesState(n,{isDragged:!1}),this.session=null,{node:t,allNodes:n}}},{key:`removeNode`,value:function(e){e===this.pendingNode&&(this.pendingNode=null),this.session&&(this.session.node===e?(this.setNodesState(this.session.allNodes,{isDragged:!1}),this.session=null):this.session.allNodes.includes(e)&&(this.session.allNodes=this.session.allNodes.filter(function(t){return t!==e}),this.session.startNodePositions.delete(e)))}},{key:`clear`,value:function(){this.pendingNode=null,this.session=null}}])}();function Ks(e,t){return e<t?`${e} ${t}`:`${t} ${e}`}var qs=function(){function e(t,n){U(this,e),V(this,`groups`,new Map),V(this,`edgeToGroupKey`,new Map),this.graph=t,this.onGroupChanged=n}return W(e,[{key:`getGroupKey`,value:function(e){return Ks(this.graph.source(e),this.graph.target(e))}},{key:`sortGroup`,value:function(e,t){var n=this,r=t.split(`\0`)[0];e.sort(function(e,t){return(n.graph.source(e)===r||!n.graph.isDirected(e)?0:1)-(n.graph.source(t)===r||!n.graph.isDirected(t)?0:1)})}},{key:`register`,value:function(e){var t=this.getGroupKey(e),n=this.groups.get(t);n||(n=[],this.groups.set(t,n)),n.includes(e)||n.push(e),this.edgeToGroupKey.set(e,t),n.length>1&&this.sortGroup(n,t),this.onGroupChanged(n,n.length)}},{key:`unregister`,value:function(e){var t=this.edgeToGroupKey.get(e);if(t){this.edgeToGroupKey.delete(e);var n=this.groups.get(t);if(n){var r=n.indexOf(e);r!==-1&&n.splice(r,1),n.length===0?this.groups.delete(t):this.onGroupChanged(n,n.length)}}}},{key:`getGroup`,value:function(e){var t=this.edgeToGroupKey.get(e);return t?this.groups.get(t)??[]:[]}},{key:`getSiblings`,value:function(e){return this.getGroup(e).filter(function(t){return t!==e})}},{key:`rebuild`,value:function(){var e=this;this.groups.clear(),this.edgeToGroupKey.clear(),this.graph.forEachEdge(function(t,n,r,i){var a=Ks(r,i),o=e.groups.get(a);o||(o=[],e.groups.set(a,o)),o.push(t),e.edgeToGroupKey.set(t,a)});var t=B(this.groups),n;try{for(t.s();!(n=t.n()).done;){var r=z(n.value,2),i=r[0],a=r[1];a.length>1&&this.sortGroup(a,i),this.onGroupChanged(a,a.length)}}catch(e){t.e(e)}finally{t.f()}}},{key:`clear`,value:function(){this.groups.clear(),this.edgeToGroupKey.clear()}}])}();function Js(e,t){if(e===!1||e===`extend`||e===`separate`)return e;var n=e[t];return n===void 0?e.default??!1:n}function Ys(e){return e===!1?!1:e===`extend`||e===`separate`||Object.values(e).some(function(e){return e===`extend`||e===`separate`})}function Xs(e){return e===`separate`?!0:e===!1||e===`extend`?!1:e.default===`separate`||Object.values(e).includes(`separate`)}var Q={node:{parent:null,eventSuffix:`Node`,payloadKey:`node`,isEnabled:function(){return!0},writesPickingThisFrame:function(){return!0},setHover:function(e,t,n){return e.setNodeState(t,{isHovered:n})},getCursor:function(e,t){return e.nodeDataCache[t]?.cursor},isHitValid:function(e,t){return e.nodeDataCache[t]?.visibility!==`hidden`}},edge:{parent:null,eventSuffix:`Edge`,payloadKey:`edge`,isEnabled:function(e){return!!e.settings.enableEdgeEvents},writesPickingThisFrame:function(e){return!!e.settings.enableEdgeEvents},setHover:function(e,t,n){return e.setEdgeState(t,{isHovered:n})},getCursor:function(e,t){return e.edgeDataCache[t]?.cursor}},nodeLabel:{parent:`node`,eventSuffix:`NodeLabel`,payloadKey:`node`,isEnabled:function(e){return Xs(e.settings.nodeLabelEvents)},writesPickingThisFrame:function(e){return Ys(e.settings.nodeLabelEvents)},setHover:function(e,t,n){return e.setNodeState(t,{isLabelHovered:n})},getCursor:function(e,t){return e.nodeDataCache[t]?.labelCursor},resolveForVerb:function(e,t,n){var r=Js(n.settings.nodeLabelEvents,t);return r===!1?null:r===`extend`?{kind:`node`,key:e.key}:e}},edgeLabel:{parent:`edge`,eventSuffix:`EdgeLabel`,payloadKey:`edge`,isEnabled:function(e){return Xs(e.settings.edgeLabelEvents)},writesPickingThisFrame:function(e){return Ys(e.settings.edgeLabelEvents)},setHover:function(e,t,n){return e.setEdgeState(t,{isLabelHovered:n})},getCursor:function(e,t){return e.edgeDataCache[t]?.labelCursor},resolveForVerb:function(e,t,n){var r=Js(n.settings.edgeLabelEvents,t);return r===!1?null:r===`extend`?{kind:`edge`,key:e.key}:e}}},Zs=[`node`,`edge`,`nodeLabel`,`edgeLabel`];function Qs(){return{lookup:[null],idsByKind:{node:new Map,edge:new Map,nodeLabel:new Map,edgeLabel:new Map},nextId:1}}function $s(e,t,n){return e.idsByKind[t].get(n)??0}function ec(e,t){var n=B(Zs),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;if(i===t||Q[i].parent===t){var a=B(e.idsByKind[i].values()),o;try{for(a.s();!(o=a.n()).done;){var s=o.value;e.lookup[s]=null}}catch(e){a.e(e)}finally{a.f()}e.idsByKind[i]=new Map}}}catch(e){n.e(e)}finally{n.f()}var c=1,l=B(Zs),u;try{for(l.s();!(u=l.n()).done;){var d=u.value;if(d===t)break;c+=e.idsByKind[d].size}}catch(e){l.e(e)}finally{l.f()}e.nextId=c}function tc(e,t,n){var r=e.nextId++;return e.idsByKind[t].set(n,r),e.lookup[r]={kind:t,key:n},r}function nc(e,t){var n=B(Zs),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;if(Q[i].parent!==null){var a=B(e.idsByKind[i].values()),o;try{for(a.s();!(o=a.n()).done;){var s=o.value;e.lookup[s]=null}}catch(e){a.e(e)}finally{a.f()}e.idsByKind[i]=new Map}}}catch(e){n.e(e)}finally{n.f()}e.nextId=1;var c=B(Zs),l;try{for(c.s();!(l=c.n()).done;){var u=l.value;if(Q[u].parent===null){var d=B(e.idsByKind[u].values()),f;try{for(d.s();!(f=d.n()).done;){var p=f.value;p>=e.nextId&&(e.nextId=p+1)}}catch(e){d.e(e)}finally{d.f()}}}}catch(e){c.e(e)}finally{c.f()}var m=B(Zs),h;try{for(m.s();!(h=m.n()).done;){var g=h.value,_=Q[g];if(_.parent!==null&&_.isEnabled(t)){var v=B(e.idsByKind[_.parent].keys()),y;try{for(v.s();!(y=v.n()).done;){var b=y.value;e.idsByKind[g].set(b,e.nextId),e.lookup[e.nextId]={kind:g,key:b},e.nextId++}}catch(e){v.e(e)}finally{v.f()}}}}catch(e){m.e(e)}finally{m.f()}}function rc(e,t){var n=B(Zs),r;try{for(n.s();!(r=n.n()).done;){var i=r.value,a=e[i],o=t[i];if(a!==o){if(a.size!==o.size)return!1;var s=B(a),c;try{for(s.s();!(c=s.n()).done;){var l=z(c.value,2),u=l[0],d=l[1];if(o.get(u)!==d)return!1}}catch(e){s.e(e)}finally{s.f()}}}}catch(e){n.e(e)}finally{n.f()}return!0}function ic(e,t,n){Q[t.kind].setHover(e,t.key,n)}function ac(e,t){return Q[t.kind].getCursor(e,t.key)}function oc(e,t){return`${t}${Q[e].eventSuffix}`}function sc(e,t){return H(H({},t),{},V({},Q[e.kind].payloadKey,e.key))}function cc(e,t,n){var r=Q[t.kind].resolveForVerb;return r?r(t,n,e):t}function lc(e,t){var n=Q[t.kind].isHitValid;return!n||n(e,t.key)}function uc(e){return Zs.filter(function(t){return t===e||Q[t].parent===e})}function dc(e,t,n){return t&&=cc(e,t,n),t&&!lc(e,t)&&(t=null),t}function fc(e,t,n){return dc(e,n===`wheel`?e.stateManager.hovered:e.getHitAtPosition(t),n)}function pc(e,t){return!e||!t?e===t:e.kind===t.kind&&e.key===t.key}function mc(e,t,n){var r={event:n,preventSigmaDefault:function(){return n.preventSigmaDefault()}},i=e.dragManager.session,a=i?{kind:`node`,key:i.node}:dc(e,t,`enter`),o=e.stateManager,s=o.hovered;pc(s,a)||(s&&(ic(e,s,!1),e.emit(oc(s.kind,`leave`),sc(s,r))),o.setHovered(a),a&&(ic(e,a,!0),e.emit(oc(a.kind,`enter`),sc(a,r))),e.updateContainerCursor())}function hc(e,t,n,r){r.handleResize=function(){return e.scheduleRefresh()},window.addEventListener(`resize`,r.handleResize),r.handleMove=function(t){e.hoverResolver.pointerMoved(Ns(t))},r.handleMoveBody=function(t){var n=Ns(t),r=e.dragManager;if(r.pendingNode&&!r.session){var i=e.nodeStyleAnalysis,a=i.xAttribute,o=i.yAttribute,s=e.settings;r.start(r.pendingNode,n,s.getDraggedNodes,a||`x`,o||`y`),r.pendingNode=null}r.session&&(r.applyMove(n,e.settings.dragPositionToAttributes),e.emit(`nodeDrag`,{node:r.session.node,allDraggedNodes:r.session.allNodes,event:n}),n.preventSigmaDefault()),e.emit(`moveBody`,{event:n,preventSigmaDefault:function(){return n.preventSigmaDefault()}})},r.handleLeave=function(t){var n=Ns(t),r={event:n,preventSigmaDefault:function(){return n.preventSigmaDefault()}};e.hoverResolver.pointerLeft(),mc(e,null,n),e.emit(`leaveStage`,r)},r.handleEnter=function(t){var n=Ns(t);e.emit(`enterStage`,{event:n,preventSigmaDefault:function(){return n.preventSigmaDefault()}})};var i=function(t){return function(n){var r=Ns(n),i={event:r,preventSigmaDefault:function(){return r.preventSigmaDefault()}},a=fc(e,r,t);a?e.emit(oc(a.kind,t),sc(a,i)):e.emit(`${t}Stage`,i)}};r.handleClick=i(`click`),r.handleRightClick=i(`rightClick`),r.handleDoubleClick=i(`doubleClick`),r.handleWheel=i(`wheel`),r.handleDown=function(t){var n=Ns(t),r={event:n,preventSigmaDefault:function(){return n.preventSigmaDefault()}},i=fc(e,n,`down`);i?(i.kind===`node`&&e.settings.enableNodeDrag&&(e.dragManager.pendingNode=i.key),e.emit(oc(i.kind,`down`),sc(i,r))):e.emit(`downStage`,r)},r.handleUp=function(t){var n=Ns(t),r={event:n,preventSigmaDefault:function(){return n.preventSigmaDefault()}},i=e.dragManager.end();i&&e.emit(`nodeDragEnd`,H({node:i.node,allDraggedNodes:i.allNodes},r));var a=fc(e,n,`up`);a?e.emit(oc(a.kind,`up`),sc(a,r)):e.emit(`upStage`,r)},t.on(`mousemove`,r.handleMove),t.on(`mousemovebody`,r.handleMoveBody),t.on(`click`,r.handleClick),t.on(`rightClick`,r.handleRightClick),t.on(`doubleClick`,r.handleDoubleClick),t.on(`wheel`,r.handleWheel),t.on(`mousedown`,r.handleDown),t.on(`mouseup`,r.handleUp),t.on(`mouseleave`,r.handleLeave),t.on(`mouseenter`,r.handleEnter),n.on(`touchdown`,r.handleDown),n.on(`touchdown`,r.handleMove),n.on(`touchup`,r.handleUp),n.on(`touchmove`,r.handleMove),n.on(`tap`,r.handleClick),n.on(`doubletap`,r.handleDoubleClick),n.on(`touchmove`,r.handleMoveBody)}function gc(e,t){var n=e.graph,r=new Set([`x`,`y`,`zIndex`,`type`]);t.eachNodeAttributesUpdatedGraphUpdate=function(t){var i=t.hints?.attributes,a=!i||i.some(function(e){return r.has(e)});e.refresh({partialGraph:{nodes:n.nodes()},skipIndexation:!a,schedule:!0})},t.eachEdgeAttributesUpdatedGraphUpdate=function(t){var r=t.hints?.attributes,i=r&&[`zIndex`,`type`].some(function(e){return r?.includes(e)});e.refresh({partialGraph:{edges:n.edges()},skipIndexation:!i,schedule:!0})},t.addNodeGraphUpdate=function(t){e.addNode(t.key),e.refresh({partialGraph:{nodes:[t.key]},skipIndexation:!1,schedule:!0})},t.updateNodeGraphUpdate=function(t){e.refresh({partialGraph:{nodes:[t.key]},skipIndexation:!1,schedule:!0})},t.dropNodeGraphUpdate=function(t){e.removeNode(t.key),e.refresh({schedule:!0})},t.addEdgeGraphUpdate=function(t){var n=t.key;e.edgeGroups.register(n),e.addEdge(n);var r=e.edgeGroups.getSiblings(n),i=B(r),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;e.addEdge(o)}}catch(e){i.e(e)}finally{i.f()}e.refresh({partialGraph:{edges:[n].concat(q(r))},schedule:!0})},t.updateEdgeGraphUpdate=function(t){e.refresh({partialGraph:{edges:[t.key]},skipIndexation:!1,schedule:!0})},t.dropEdgeGraphUpdate=function(t){var n=t.key,r=e.edgeGroups.getSiblings(n);e.edgeGroups.unregister(n),e.removeEdge(n);var i=B(r),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;e.addEdge(o)}}catch(e){i.e(e)}finally{i.f()}e.refresh({schedule:!0})},t.clearEdgesGraphUpdate=function(){e.clearEdgeState(),e.clearEdgeIndices(),e.refresh({schedule:!0})},t.clearGraphUpdate=function(){e.clearEdgeState(),e.clearNodeState(),e.clearEdgeIndices(),e.clearNodeIndices(),e.refresh({schedule:!0})},n.on(`nodeAdded`,t.addNodeGraphUpdate),n.on(`nodeDropped`,t.dropNodeGraphUpdate),n.on(`nodeAttributesUpdated`,t.updateNodeGraphUpdate),n.on(`eachNodeAttributesUpdated`,t.eachNodeAttributesUpdatedGraphUpdate),n.on(`edgeAdded`,t.addEdgeGraphUpdate),n.on(`edgeDropped`,t.dropEdgeGraphUpdate),n.on(`edgeAttributesUpdated`,t.updateEdgeGraphUpdate),n.on(`eachEdgeAttributesUpdated`,t.eachEdgeAttributesUpdatedGraphUpdate),n.on(`edgesCleared`,t.clearEdgesGraphUpdate),n.on(`cleared`,t.clearGraphUpdate)}function _c(e,t){e.removeListener(`nodeAdded`,t.addNodeGraphUpdate),e.removeListener(`nodeDropped`,t.dropNodeGraphUpdate),e.removeListener(`nodeAttributesUpdated`,t.updateNodeGraphUpdate),e.removeListener(`eachNodeAttributesUpdated`,t.eachNodeAttributesUpdatedGraphUpdate),e.removeListener(`edgeAdded`,t.addEdgeGraphUpdate),e.removeListener(`edgeDropped`,t.dropEdgeGraphUpdate),e.removeListener(`edgeAttributesUpdated`,t.updateEdgeGraphUpdate),e.removeListener(`eachEdgeAttributesUpdated`,t.eachEdgeAttributesUpdatedGraphUpdate),e.removeListener(`edgesCleared`,t.clearEdgesGraphUpdate),e.removeListener(`cleared`,t.clearGraphUpdate)}var vc={x:.5,y:.5,angle:0,ratio:1},yc=8,bc=.001;function xc(e){var t=e.coords,n=e.nodeData,r=e.dimensions,i=e.stagePadding,a=e.zoomToSizeRatioFunction,o=e.itemSizesReference,s=e.fitLabels,c=e.nodeLabelBox,l=Object.keys(t);if(!l.length)return e.extent;for(var u=a(1)||1,d=o===`positions`,f=r.width,p=r.height,m=e.extent,h=0;h<yc;h++){for(var g=Mr(m),_=Lt(vc,r,{width:m.x[1]-m.x[0]||1,height:m.y[1]-m.y[0]||1},i),v=Sc(_,g({x:0,y:0}),f,p),y=Sc(_,g({x:1,y:0}),f,p),b=Math.hypot(y.x-v.x,y.y-v.y)||1,x=1/0,S=-1/0,C=1/0,w=-1/0,T=0,E=l.length;T<E;T++){var D=l[T],O=n[D],k=O.size/u*(d?b:1),A=-k,j=k,M=-k,N=k;if(s){var P=c(O,k);P&&(P.minX<A&&(A=P.minX),P.maxX>j&&(j=P.maxX),P.minY<M&&(M=P.minY),P.maxY>N&&(N=P.maxY))}var F=t[D],ee=F.x,I=F.y;x=Math.min(x,ee+A/b),S=Math.max(S,ee+j/b),C=Math.min(C,I-N/b),w=Math.max(w,I-M/b)}var L={x:[x,S],y:[C,w]},te=Math.max(L.x[1]-L.x[0],L.y[1]-L.y[0])||1,ne=Math.max(Math.abs(L.x[0]-m.x[0]),Math.abs(L.x[1]-m.x[1]),Math.abs(L.y[0]-m.y[0]),Math.abs(L.y[1]-m.y[1]));if(m=L,ne/te<bc)break}return m}function Sc(e,t,n,r){var i=Ft(e,t);return{x:(1+i.x)*n/2,y:(1-i.y)*r/2}}var Cc=typeof navigator<`u`&&/Mac|iP(hone|ad|od)/.test(navigator.platform),wc=1500,Tc=`.sigma-gesture-hint {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1em;
  background: #00000066;
  color: #ffffff;
  font-size: 1em;
  pointer-events: none;
  transition: opacity 0.1s;
}`;function Ec(e){var t=zr(`style`);t.textContent=e,document.head.appendChild(t);var n=(t.sheet?.cssRules.length??0)>0;return t.remove(),n}var Dc=null;function Oc(){return Dc===null&&(Dc=Tc,Ec(`@scope {}`)&&(Dc=`@scope {
${Dc}
}`),Ec(`@layer sigma-gesture-hint {}`)&&(Dc=`@layer sigma-gesture-hint {
${Dc}
}`)),Dc}var kc=function(){function e(t){U(this,e),V(this,`hideTimeout`,null),this.styleElement=zr(`style`),this.styleElement.textContent=Oc(),t.appendChild(this.styleElement),this.element=zr(`div`,{opacity:`0`},{class:`sigma-gesture-hint`}),t.appendChild(this.element)}return W(e,[{key:`show`,value:function(e,t){var n=this,r=e===`touch`?t.sharedGestureTouchMessage:Cc?t.sharedGestureAppleWheelMessage:t.sharedGestureWheelMessage;r&&(this.element.textContent=r,this.element.style.opacity=`1`,typeof this.hideTimeout==`number`&&clearTimeout(this.hideTimeout),this.hideTimeout=window.setTimeout(function(){n.hideTimeout=null,n.element.style.opacity=`0`},wc))}},{key:`kill`,value:function(){typeof this.hideTimeout==`number`&&clearTimeout(this.hideTimeout),this.styleElement.remove(),this.element.remove()}}])}(),Ac=function(){function e(t){U(this,e),V(this,`readBuffer`,null),V(this,`fence`,null),V(this,`result`,new Uint8Array(4)),V(this,`generation`,0),V(this,`readGeneration`,0),V(this,`lastEvent`,null),V(this,`active`,!1),V(this,`dirty`,!1),V(this,`rafId`,null),V(this,`killed`,!1),this.options=t}return W(e,[{key:`pointerMoved`,value:function(e){this.lastEvent=e,this.active=!0,this.options.isRenderPending()||this.request()}},{key:`pointerLeft`,value:function(){this.active=!1,this.dirty=!1}},{key:`frameRendered`,value:function(){this.request()}},{key:`invalidate`,value:function(){this.generation++}},{key:`request`,value:function(){!this.killed&&this.active&&this.lastEvent&&(this.fence?this.dirty=!0:this.startRead())}},{key:`startRead`,value:function(){var e=this.options,t=e.gl,n=e.getFrameBuffer,r=e.getPixelRatio,i=e.getDownSizingRatio;this.readGeneration=this.generation;var a=this.lastEvent,o=z(zt(t,a.x,a.y,r(),i()),2),s=o[0],c=o[1];this.readBuffer||=t.createBuffer(),t.bindFramebuffer(t.FRAMEBUFFER,n()),t.bindBuffer(t.PIXEL_PACK_BUFFER,this.readBuffer),t.bufferData(t.PIXEL_PACK_BUFFER,4,t.STREAM_READ),t.readPixels(s,c,1,1,t.RGBA,t.UNSIGNED_BYTE,0),t.bindBuffer(t.PIXEL_PACK_BUFFER,null),t.bindFramebuffer(t.FRAMEBUFFER,null),this.fence=t.fenceSync(t.SYNC_GPU_COMMANDS_COMPLETE,0),t.flush(),this.schedulePoll(a)}},{key:`schedulePoll`,value:function(e){var t=this;this.rafId=requestAnimationFrame(function(){t.rafId=null,t.poll(e)})}},{key:`poll`,value:function(e){var t=this.options,n=t.gl,r=t.onIndex;if(!this.killed&&this.fence){var i=n.clientWaitSync(this.fence,0,0);if(i===n.TIMEOUT_EXPIRED)this.schedulePoll(e);else{if(n.deleteSync(this.fence),this.fence=null,i!==n.WAIT_FAILED&&this.readGeneration===this.generation){n.bindBuffer(n.PIXEL_PACK_BUFFER,this.readBuffer),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,this.result),n.bindBuffer(n.PIXEL_PACK_BUFFER,null);var a=z(this.result,4),o=a[0],s=a[1],c=a[2],l=a[3];this.active&&r(en(o,s,c,l),e)}this.dirty&&(this.dirty=!1,this.active&&this.lastEvent&&!this.options.isRenderPending()&&this.startRead())}}}},{key:`reset`,value:function(){this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=null,this.fence=null,this.readBuffer=null,this.dirty=!1}},{key:`kill`,value:function(){this.killed=!0,this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=null;var e=this.options.gl;this.fence&&e.deleteSync(this.fence),this.fence=null,this.readBuffer&&e.deleteBuffer(this.readBuffer),this.readBuffer=null}}])}(),jc=function(){function e(t,n){U(this,e),this.key=t,this.size=n}return W(e,null,[{key:`compare`,value:function(e,t){return e.size>t.size?-1:e.size<t.size||e.key>t.key?1:-1}}])}(),Mc=function(){function e(){U(this,e),V(this,`width`,0),V(this,`height`,0),V(this,`cellSize`,0),V(this,`columns`,0),V(this,`rows`,0),V(this,`cells`,{})}return W(e,[{key:`resizeAndClear`,value:function(e,t){this.width=e.width,this.height=e.height,this.cellSize=t,this.columns=Math.ceil(e.width/t),this.rows=Math.ceil(e.height/t),this.cells={}}},{key:`getIndex`,value:function(e){var t=Math.floor(e.x/this.cellSize);return Math.floor(e.y/this.cellSize)*this.columns+t}},{key:`add`,value:function(e,t,n){var r=new jc(e,t),i=this.getIndex(n),a=this.cells[i];a||(a=[],this.cells[i]=a),a.push(r)}},{key:`organize`,value:function(){for(var e in this.cells)this.cells[e].sort(jc.compare)}},{key:`getLabelsToDisplay`,value:function(e,t,n){var r=this.cellSize*this.cellSize,i=r/e/e*t/r,a=Math.ceil(i),o=[];if(n)for(var s=Math.max(0,Math.floor(n.x1/this.cellSize)),c=Math.min(this.columns-1,Math.floor(n.x2/this.cellSize)),l=Math.max(0,Math.floor(n.y1/this.cellSize)),u=Math.min(this.rows-1,Math.floor(n.y2/this.cellSize)),d=l;d<=u;d++)for(var f=s;f<=c;f++){var p=d*this.columns+f,m=this.cells[p];if(m)for(var h=0;h<Math.min(a,m.length);h++)o.push(m[h].key)}else for(var g in this.cells)for(var _=this.cells[g],v=0;v<Math.min(a,_.length);v++)o.push(_[v].key);return o}}])}();function Nc(e){var t=e.graph,n=e.hoveredNode,r=e.highlightedNodes,i=e.displayedNodeLabels,a=new Set,o=new Set(r);n&&o.add(n);var s=B(o),c;try{for(s.s();!(c=s.n()).done;){var l=c.value;t.hasNode(l)&&t.forEachEdge(l,function(e){a.add(e)})}}catch(e){s.e(e)}finally{s.f()}var u=B(i),d;try{var f=function(){var e=d.value;if(o.has(e))return 1;t.forEachEdge(e,function(t,n,r,o){var s=r===e?o:r;i.has(s)&&a.add(t)})};for(u.s();!(d=u.n()).done;)if(f())continue}catch(e){u.e(e)}finally{u.f()}return Array.from(a)}var Pc=150,Fc=50,Ic={both:0,node:1,label:2},Lc={over:0,above:1,below:2,auto:3},Rc=12,zc=3,Bc=function(){function e(t){U(this,e),V(this,`labelGrid`,new Mc),V(this,`edgeAnchorGrid`,new Mc),V(this,`displayedNodeLabels`,new Set),V(this,`displayedEdgeLabels`,new Set),V(this,`edgeLabelCandidates`,[]),V(this,`renderedNodeLabels`,new Set),V(this,`labelSizeCache`,new Map),V(this,`framePassPoints`,new Float32Array),V(this,`labelsDirty`,!0),this.internals=t}return W(e,[{key:`resetFrame`,value:function(){this.displayedNodeLabels=new Set,this.renderedNodeLabels=new Set,this.labelSizeCache.clear()}},{key:`clearEdgeLabels`,value:function(){this.displayedEdgeLabels=new Set}},{key:`resetLabelGrid`,value:function(){this.labelGrid=new Mc,this.edgeAnchorGrid=new Mc}},{key:`processWebGLLabels`,value:function(e){for(var t,n=this.internals,r=n.labelProgram,i=n.primitives,a=n.nodeDataCache,o=(i==null||(t=i.nodes)==null||(t=t.label)==null||(t=t.font)==null?void 0:t.family)||`sans-serif`,s=new Map,c=0,l=e.length;c<l;c++){var u=a[e[c]];if(u.visibility!==`hidden`&&u.label){var d=u.labelFont||o,f=s.get(d);f?f.push(u.label):s.set(d,[u.label])}}var p=B(s),m;try{for(p.s();!(m=p.n()).done;){var h=z(m.value,2),g=h[0],_=h[1],v=Rr(g),y=v.family,b=v.weight,x=v.style,S=r.registerFont(y,b,x);r.ensureGlyphsReady(_,S)}}catch(e){p.e(e)}finally{p.f()}}},{key:`measureNodeLabel`,value:function(e){var t;if(!e.label)return{width:0,height:0,textHeight:0};var n=this.internals,r=n.labelProgram,i=n.primitives,a=e.labelSize??14,o=e.labelFont||(i==null||(t=i.nodes)==null||(t=t.label)==null||(t=t.font)==null?void 0:t.family)||`sans-serif`,s=`${e.label}|${a}|${o}`;if(this.labelSizeCache.has(s))return this.labelSizeCache.get(s);var c=Rr(o),l=c.family,u=c.weight,d=c.style,f=r.registerFont(l,u,d),p=r.measureLabel(e.label,a,f);return this.labelSizeCache.set(s,p),p}},{key:`nodeLabelBox`,value:function(e,t){var n;if(e.visibility===`hidden`||e.labelVisibility===`hidden`)return null;var r=this.measureNodeLabel(e),i=r.width,a=r.height,o=r.textHeight;if(!i)return null;var s=t+(((n=this.internals.primitives)==null||(n=n.nodes)==null||(n=n.label)==null?void 0:n.margin)??5),c=e.labelBackgroundColor?e.labelBackgroundPadding??3:0,l=i/2,u=a/2,d=l+c,f=u+c,p=o/2,m=0,h=0;switch(e.labelPosition??`right`){case`left`:m=-(s+l);break;case`above`:h=-(s+p);break;case`below`:h=s+p;break;case`over`:break;default:m=s+l}var g=e.labelAngle??0,_=Pt({x:m,y:h},g),v=_.x,y=_.y,b=Math.abs(Math.cos(g)),x=Math.abs(Math.sin(g)),S=b*d+x*f,C=x*d+b*f;return{minX:v-S,maxX:v+S,minY:y-C,maxY:y+C}}},{key:`computeDisplayedNodeLabels`,value:function(){var e=this.internals.getCameraState(),t=this.internals.getDimensions(),n=t.width,r=t.height,i=this.internals.viewportToFramedGraph({x:-Pc,y:-Fc}),a=this.internals.viewportToFramedGraph({x:n+Pc,y:-Fc}),o=this.internals.viewportToFramedGraph({x:-Pc,y:r+Fc}),s=this.internals.viewportToFramedGraph({x:n+Pc,y:r+Fc}),c=Math.min(i.x,a.x,o.x,s.x),l=Math.max(i.x,a.x,o.x,s.x),u=Math.min(i.y,a.y,o.y,s.y),d=Math.max(i.y,a.y,o.y,s.y),f=Lt({x:.5,y:.5,ratio:1,angle:0},{width:n,height:r},this.internals.getGraphDimensions(),this.internals.getStagePadding()),p=function(e){var t=Ft(f,e);return{x:(1+t.x)*n/2,y:(1-t.y)*r/2}},m=p({x:c,y:u}),h=p({x:l,y:u}),g=p({x:c,y:d}),_=p({x:l,y:d}),v={x1:Math.min(m.x,h.x,g.x,_.x),y1:Math.min(m.y,h.y,g.y,_.y),x2:Math.max(m.x,h.x,g.x,_.x),y2:Math.max(m.y,h.y,g.y,_.y)},y=this.internals,b=y.settings,x=y.nodeDataCache,S=y.nodesWithForcedLabels,C=this.labelGrid.getLabelsToDisplay(e.ratio,b.labelDensity,v);yr(C,S);for(var w=0,T=C.length;w<T;w++){var E=C[w],D=x[E];if(!this.displayedNodeLabels.has(E)&&D.visibility!==`hidden`&&D.labelVisibility!==`hidden`&&D.label&&!(D.x<c||D.x>l||D.y<u||D.y>d)){var O=this.internals.framedGraphToViewport(D),k=O.x,A=O.y,j=this.internals.scaleSize(D.size);!Er(D)&&j<b.labelRenderedSizeThreshold||k<-Pc-j||k>n+Pc+j||A<-Fc-j||A>r+Fc+j||this.displayedNodeLabels.add(E)}}}},{key:`buildFramePassPoints`,value:function(){var e=this.internals,t=e.nodeDataCache,n=e.nodeDataTexture;if(!n)return{data:this.framePassPoints,count:0};var r=this.displayedNodeLabels.size*3;this.framePassPoints.length<r&&(this.framePassPoints=new Float32Array(r));var i=this.framePassPoints,a=0,o=B(this.displayedNodeLabels),s;try{for(o.s();!(s=o.n()).done;){var c=s.value,l=t[c];if(l){var u=n.getIndex(c);u<0||(i[a*3]=u,i[a*3+1]=ci[l.labelPosition||rr.labelPosition]??0,i[a*3+2]=l.labelAngle??0,a++)}}}catch(e){o.e(e)}finally{o.f()}return{data:i,count:a}}},{key:`renderWebGLLabels`,value:function(e,t){var n=this.internals,r=n.nodeDataCache,i=n.labelProgram,a=n.primitives,o=n.nodeDataTexture,s=[],c=B(this.displayedNodeLabels),l;try{for(c.s();!(l=c.n()).done;){var u=l.value;if(!this.renderedNodeLabels.has(u)){var d=r[u];t&&d.labelDepth!==t||(this.renderedNodeLabels.add(u),s.push(u))}}}catch(e){c.e(e)}finally{c.f()}if(s.length!==0){if(this.labelsDirty){for(var f,p,m=0,h=0,g=s.length;h<g;h++){var _=r[s[h]];m+=_.label.length}i.reallocate(m);for(var v=14,y=(a==null||(f=a.nodes)==null||(f=f.label)==null?void 0:f.margin)??5,b=rr.labelPosition,x=(a==null||(p=a.nodes)==null||(p=p.label)==null||(p=p.font)==null?void 0:p.family)||`sans-serif`,S=new Map,C=0,w=0,T=s.length;w<T;w++){var E=s[w],D=r[E],O=D.labelFont||x,k=S.get(O);if(k===void 0){var A=Rr(O),j=A.family,M=A.weight,N=A.style;k=i.registerFont(j,M,N),S.set(O,k)}var P={text:D.label,x:D.x,y:D.y,size:D.labelSize??v,color:D.labelColor,nodeSize:D.size,margin:y,position:D.labelPosition??b,hidden:!1,forceLabel:Er(D),type:`default`,zIndex:D.zIndex??0,parentType:`node`,parentKey:E,fontKey:k,labelAngle:D.labelAngle??0,nodeIndex:o.getIndex(E)},F=i.processLabel(E,C,P);C+=F}i.invalidateBuffers()}i.render(e)}}},{key:`renderBackdrops`,value:function(e,t){var n=this.internals,r=n.backdropProgram,i=n.nodeDataCache,a=n.nodesWithBackdrop,o=n.attachmentManager,s=n.pixelRatio,c=n.nodeDataTexture,l=[],u=B(a),d;try{for(u.s();!(d=u.n()).done;){var f=d.value,p=i[f];if(p&&p.visibility!==`hidden`&&!(t&&p.depth!==t)){var m=c?.getIndex(f)??-1;m<0||l.push({key:f,nodeIndex:m})}}}catch(e){u.e(e)}finally{u.f()}if(l.length!==0){r.reallocate(l.length);for(var h=0;h<l.length;h++){var g=l[h],_=g.key,v=g.nodeIndex,y=i[_],b=this.displayedNodeLabels.has(_),x=b?this.measureNodeLabel(y):{width:0,height:0,textHeight:0},S=x.textHeight,C=x.width,w=x.height,T=0,E=0;if(b&&y.labelAttachment&&o){var D=o.getEntry(_,y.labelAttachment);if(D){var O=y.labelAttachmentPlacement||`below`;if(O===`below`||O===`above`){var k=D.height/s;w+=k+2,C=Math.max(C,D.width/s),E=O===`below`?(k+2)/2:-(k+2)/2}else{var A=D.width/s;C+=A+2,w=Math.max(w,D.height/s),T=O===`right`?(A+2)/2:-(A+2)/2}}}var j=y.backdropColor?Qt(y.backdropColor):[255,255,255,255],M=y.backdropShadowColor?Qt(y.backdropShadowColor):[0,0,0,128],N=j.map(function(e){return e/255}),P=M.map(function(e){return e/255}),F=y.backdropShadowBlur??12,ee=y.backdropPadding??6,I=(y.backdropBorderColor?Qt(y.backdropBorderColor):[0,0,0,0]).map(function(e){return e/255}),L=y.backdropBorderWidth??0,te=y.backdropCornerRadius??0,ne=y.backdropLabelPadding??-1,re=ne<0?ee:ne,ie=Ic[y.backdropArea??`both`]??0,ae={key:_,nodeIndex:v,label:y.label,labelWidth:C,labelHeight:w,textHeight:S,type:`default`,position:y.labelPosition||rr.labelPosition,labelAngle:y.labelAngle??0,backdropColor:N,backdropShadowColor:P,backdropShadowBlur:F,backdropPadding:ee,backdropBorderColor:I,backdropBorderWidth:L,backdropCornerRadius:te,backdropLabelPadding:re,backdropArea:ie,labelBoxOffset:[T,E]};r.processBackdrop(h,ae)}r.invalidateBuffers(),r.render(e)}}},{key:`renderLabelBackgrounds`,value:function(e,t){var n=this.internals,r=n.labelBackgroundProgram,i=n.nodeDataCache,a=n.nodeDataTexture,o=Q.nodeLabel.writesPickingThisFrame(this.internals),s=[],c=B(this.displayedNodeLabels),l;try{for(c.s();!(l=c.n()).done;){var u=l.value,d=i[u];d&&d.visibility!==`hidden`&&(t&&d.labelDepth!==t||(o||d.labelBackgroundColor)&&s.push(u))}}catch(e){c.e(e)}finally{c.f()}if(s.length!==0){r.reallocate(s.length);for(var f=0;f<s.length;f++){var p=s[f],m=i[p],h=a?.getIndex(p)??-1;if(!(h<0)){var g=this.measureNodeLabel(m),_=g.width,v=g.height,y=g.textHeight,b=$s(this.internals.pickingState,`nodeLabel`,p)||$s(this.internals.pickingState,`node`,p),x=m.labelBackgroundColor?Zt(m.labelBackgroundColor):Zt(`transparent`),S={nodeIndex:h,id:$t(b),color:x,labelWidth:_,labelHeight:v,textHeight:y,positionMode:ci[m.labelPosition||rr.labelPosition]??0,labelAngle:m.labelAngle??0,padding:m.labelBackgroundPadding??3};r.processLabelBackground(f,S)}}r.invalidateBuffers(),r.render(e)}}},{key:`cacheAttachments`,value:function(e){var t=this.internals,n=t.attachmentManager,r=t.pixelRatio,i=t.nodeDataCache,a=t.nodesWithBackdrop,o=t.graph;if(n){var s=B(a),c;try{for(s.s();!(c=s.n()).done;){var l=c.value;if(this.displayedNodeLabels.has(l)){var u=i[l];if(u&&u.visibility!==`hidden`&&!(e&&u.depth!==e)&&u.labelAttachment){var d=o.getNodeAttributes(l),f=this.measureNodeLabel(u),p={node:l,attributes:d,pixelRatio:r,labelWidth:f.width,labelHeight:f.height};n.renderAttachment(l,u.labelAttachment,p)}}}}catch(e){s.e(e)}finally{s.f()}n.regenerateAtlas()}}},{key:`renderAttachments`,value:function(e,t){var n=this.internals,r=n.attachmentManager,i=n.attachmentProgram,a=n.nodeDataCache,o=n.nodesWithBackdrop,s=n.pixelRatio,c=n.nodeDataTexture;if(r&&i){var l=0;i.reallocateAttachments(o.size);var u=B(o),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;if(this.displayedNodeLabels.has(f)){var p=a[f];if(p&&p.visibility!==`hidden`&&!(t&&p.labelDepth!==t)&&p.labelAttachment){var m=r.getEntry(f,p.labelAttachment);if(m){var h=c?.getIndex(f)??-1;if(!(h<0)){var g=this.measureNodeLabel(p),_=g.width,v=g.height,y=g.textHeight,b=Bi[p.labelAttachmentPlacement||`below`]??0;i.processAttachment(l,{nodeIndex:h,atlasX:m.x,atlasY:m.y,atlasW:m.width,atlasH:m.height,attachWidth:m.width/s,attachHeight:m.height/s,positionMode:ci[p.labelPosition||rr.labelPosition]??0,attachmentPlacement:b,labelWidth:_,labelHeight:v,textHeight:y,labelAngle:p.labelAngle??0}),l++}}}}}}catch(e){u.e(e)}finally{u.f()}l!==0&&(i.reallocateAttachments(l),r.bindTexture(7),i.invalidateBuffers(),i.render(e))}}},{key:`computeDisplayedEdgeLabels`,value:function(){var e=this.internals,t=e.graph,n=e.stateManager,r=e.settings,i=e.edgesWithForcedLabels,a=n.getHighlightedNodes(),o=r.edgeLabelAnchors===`allNodes`?new Set(this.edgeAnchorGrid.getLabelsToDisplay(this.internals.getCameraState().ratio,r.labelDensity)):this.displayedNodeLabels,s=n.hovered,c=Nc({graph:t,hoveredNode:s?.kind===`node`?s.key:null,displayedNodeLabels:o,highlightedNodes:a});yr(c,i),this.edgeLabelCandidates=c,this.displayedEdgeLabels=new Set}},{key:`filterEdgeLabelsForDepth`,value:function(e){for(var t=this.internals,n=t.graph,r=t.nodeDataCache,i=t.edgeDataCache,a=[],o=new Set,s=0,c=this.edgeLabelCandidates.length;s<c;s++){var l=this.edgeLabelCandidates[s];if(!o.has(l)){o.add(l);var u=n.extremities(l),d=r[u[0]],f=r[u[1]],p=i[l];p&&d&&f&&p.visibility!==`hidden`&&p.labelVisibility!==`hidden`&&d.visibility!==`hidden`&&f.visibility!==`hidden`&&(e&&p.labelDepth!==e||p.label&&a.push(l))}}return a}},{key:`renderEdgeLabels`,value:function(e,t){var n=this.internals,r=n.graph,i=n.nodeDataCache,a=n.edgeDataCache,o=n.primitives,s=n.edgeLabelProgram,c=n.nodeDataTexture,l=n.edgeDataTexture;if(s){var u=this.filterEdgeLabelsForDepth(t),d=B(u),f;try{for(d.s();!(f=d.n()).done;){var p=f.value;this.displayedEdgeLabels.add(p)}}catch(e){d.e(e)}finally{d.f()}if(u.length!==0){if(this.labelsDirty){var m,h=0,g=B(u),_;try{for(g.s();!(_=g.n()).done;){var v=_.value;h+=a[v].label.length}}catch(e){g.e(e)}finally{g.f()}s.reallocate(h);var y=(o==null||(m=o.edges)==null||(m=m.label)==null?void 0:m.margin)??5,b=`over`,x=0,S=B(u),C;try{for(S.s();!(C=S.n()).done;){var w=C.value,T=r.extremities(w),E=T[0],D=T[1],O=i[E],k=i[D],A=a[w],j=c.getIndex(E),M=c.getIndex(D),N=l.getIndex(w),P={text:A.label,x:(O.x+k.x)/2,y:(O.y+k.y)/2,size:Rc,color:A.labelColor,nodeSize:0,nodeIndex:-1,margin:y,position:A.labelPosition??b,hidden:!1,forceLabel:Er(A),type:`default`,zIndex:A.zIndex??0,parentType:`edge`,parentKey:w,fontKey:``,labelAngle:0,sourceX:O.x,sourceY:O.y,targetX:k.x,targetY:k.y,sourceSize:O.size,targetSize:k.size,sourceShape:O.shape||`circle`,targetShape:k.shape||`circle`,edgeSize:A.size,offset:0,edgeAttributes:A,sourceNodeIndex:j,targetNodeIndex:M,edgeIndex:N},F=s.processEdgeLabel(w,x,P);x+=F}}catch(e){S.e(e)}finally{S.f()}s.invalidateBuffers()}s.render(e)}}}},{key:`renderEdgeLabelBackgrounds`,value:function(e,t){var n,r=this.internals,i=r.edgeLabelBackgroundProgram,a=r.edgeLabelProgram,o=r.edgeDataCache,s=r.primitives,c=r.edgeDataTexture;if(c&&a&&i){var l=Q.edgeLabel.writesPickingThisFrame(this.internals),u=(s==null||(n=s.edges)==null||(n=n.label)==null?void 0:n.margin)??5,d=`over`,f=this.filterEdgeLabelsForDepth(t),p=[],m=B(f),h;try{for(m.s();!(h=m.n()).done;){var g=h.value;(l||o[g].labelBackgroundColor)&&p.push(g)}}catch(e){m.e(e)}finally{m.f()}if(p.length!==0){i.reallocate(p.length);for(var _=0;_<p.length;_++){var v=p[_],y=o[v],b=y.label,x=a.measureLabelAtlasWidth(b),S=y.labelPosition??d,C=typeof S==`string`?Lc[S]??0:0,w=$s(this.internals.pickingState,`edgeLabel`,v)||$s(this.internals.pickingState,`edge`,v),T=y.labelBackgroundColor?Zt(y.labelBackgroundColor):Zt(`transparent`),E={edgeIndex:c.getIndex(v),baseFontSize:Rc,totalTextWidth:x,positionMode:C,margin:u,padding:y.labelBackgroundPadding??zc,color:T,id:$t(w),edgeAttributes:y};i.processEdgeLabelBackground(_,v,E)}i.invalidateBuffers(),i.render(e)}}}}])}(),Vc=function(){function e(t,n,r,i){U(this,e),V(this,`nodeStates`,new Map),V(this,`edgeStates`,new Map),V(this,`hovered`,null),V(this,`dirtyNodes`,new Set),V(this,`dirtyEdges`,new Set),V(this,`graphStateChanged`,!1),V(this,`graphStateFlagsDirty`,!1),this.scheduleRefresh=t,this.customNodeStateDefaults=n,this.customEdgeStateDefaults=r,this.customGraphStateDefaults=i,this.graphState=Un(i)}return W(e,[{key:`getNodeState`,value:function(e){e=``+e;var t=this.nodeStates.get(e);return t||(t=Vn(this.customNodeStateDefaults),this.nodeStates.set(e,t)),t}},{key:`getEdgeState`,value:function(e){e=``+e;var t=this.edgeStates.get(e);return t||(t=Hn(this.customEdgeStateDefaults),this.edgeStates.set(e,t)),t}},{key:`getGraphState`,value:function(){return this.flushGraphStateFlags(),this.graphState}},{key:`getHighlightedNodes`,value:function(){var e=new Set,t=B(this.nodeStates),n;try{for(t.s();!(n=t.n()).done;){var r=z(n.value,2),i=r[0];r[1].isHighlighted&&e.add(i)}}catch(e){t.e(e)}finally{t.f()}return e}},{key:`setNodeState`,value:function(e,t){e=``+e;var n=this.getNodeState(e);if(xr(n,t)){var r=H(H({},n),t);this.nodeStates.set(e,r),this.dirtyNodes.add(e),this.updateHoveredNodeTracking(e,n,r),this.graphStateFlagsDirty=!0,this.scheduleRefresh()}}},{key:`setEdgeState`,value:function(e,t){e=``+e;var n=this.getEdgeState(e);if(xr(n,t)){var r=H(H({},n),t);this.edgeStates.set(e,r),this.dirtyEdges.add(e),this.updateHoveredEdgeTracking(e,n,r),this.graphStateFlagsDirty=!0,this.scheduleRefresh()}}},{key:`setGraphState`,value:function(e){if(xr(this.graphState,e)){var t=H(H({},this.graphState),e);t.isIdle=!t.isPanning&&!t.isZooming&&!t.isDragging,this.graphState=t,this.graphStateChanged=!0,this.scheduleRefresh()}}},{key:`setNodesState`,value:function(e,t){var n=!1,r=B(e),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;a=``+a;var o=this.getNodeState(a);if(xr(o,t)){var s=H(H({},o),t);this.nodeStates.set(a,s),this.dirtyNodes.add(a),this.updateHoveredNodeTracking(a,o,s),n=!0}}}catch(e){r.e(e)}finally{r.f()}n&&(this.graphStateFlagsDirty=!0,this.scheduleRefresh())}},{key:`setEdgesState`,value:function(e,t){var n=!1,r=B(e),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;a=``+a;var o=this.getEdgeState(a);if(xr(o,t)){var s=H(H({},o),t);this.edgeStates.set(a,s),this.dirtyEdges.add(a),this.updateHoveredEdgeTracking(a,o,s),n=!0}}}catch(e){r.e(e)}finally{r.f()}n&&(this.graphStateFlagsDirty=!0,this.scheduleRefresh())}},{key:`removeNode`,value:function(e){this.nodeStates.delete(e),this.dirtyNodes.delete(e),this.clearHoveredFor(`node`,e)}},{key:`removeEdge`,value:function(e){this.edgeStates.delete(e),this.dirtyEdges.delete(e),this.clearHoveredFor(`edge`,e)}},{key:`pruneNodes`,value:function(e){var t=B(this.nodeStates.keys()),n;try{for(t.s();!(n=t.n()).done;){var r=n.value;e(r)||this.removeNode(r)}}catch(e){t.e(e)}finally{t.f()}}},{key:`pruneEdges`,value:function(e){var t=B(this.edgeStates.keys()),n;try{for(t.s();!(n=t.n()).done;){var r=n.value;e(r)||this.removeEdge(r)}}catch(e){t.e(e)}finally{t.f()}}},{key:`clearNodes`,value:function(){this.nodeStates.clear(),this.dirtyNodes.clear(),this.clearHoveredForKinds(uc(`node`))}},{key:`clearEdges`,value:function(){this.edgeStates.clear(),this.dirtyEdges.clear(),this.clearHoveredForKinds(uc(`edge`))}},{key:`resetGraphState`,value:function(){this.graphState=Un(this.customGraphStateDefaults),this.graphStateChanged=!1,this.graphStateFlagsDirty=!1}},{key:`clearDirtyTracking`,value:function(){this.dirtyNodes.clear(),this.dirtyEdges.clear(),this.graphStateChanged=!1}},{key:`setHovered`,value:function(e){this.hovered=e}},{key:`clearHoveredFor`,value:function(e,t){this.hovered&&this.hovered.key===t&&uc(e).includes(this.hovered.kind)&&(this.hovered=null)}},{key:`clearHoveredForKinds`,value:function(e){this.hovered&&e.includes(this.hovered.kind)&&(this.hovered=null)}},{key:`updateGraphStateFromNodes`,value:function(){var e=!1,t=!1,n=!1,r=B(this.nodeStates),i;try{for(r.s();!(i=r.n()).done;){var a=z(i.value,2)[1];if(a.isHovered&&(e=!0),a.isHighlighted&&(t=!0),a.isDragged&&(n=!0),e&&t&&n)break}}catch(e){r.e(e)}finally{r.f()}!e&&this.hovered?.kind===`edge`&&(e=!0);var o=!this.graphState.isPanning&&!this.graphState.isZooming&&!n;(this.graphState.hasHovered!==e||this.graphState.hasHighlighted!==t||this.graphState.isDragging!==n||this.graphState.isIdle!==o)&&(this.graphStateChanged=!0),this.graphState=H(H({},this.graphState),{},{hasHovered:e,hasHighlighted:t,isDragging:n,isIdle:o})}},{key:`updateGraphStateFromEdges`,value:function(){var e=this.hovered?.kind===`node`;if(!e){var t=B(this.edgeStates),n;try{for(t.s();!(n=t.n()).done;)if(z(n.value,2)[1].isHovered){e=!0;break}}catch(e){t.e(e)}finally{t.f()}}this.graphState.hasHovered!==e&&(this.graphStateChanged=!0),this.graphState=H(H({},this.graphState),{},{hasHovered:e})}},{key:`flushGraphStateFlags`,value:function(){this.graphStateFlagsDirty&&=(this.updateGraphStateFromNodes(),this.updateGraphStateFromEdges(),!1)}},{key:`updateHoveredNodeTracking`,value:function(e,t,n){if(t.isHovered!==n.isHovered){if(n.isHovered){if(this.hovered?.kind===`node`&&this.hovered.key!==e){var r=this.hovered.key,i=this.getNodeState(r);this.nodeStates.set(r,H(H({},i),{},{isHovered:!1})),this.dirtyNodes.add(r)}this.hovered={kind:`node`,key:e}}else this.hovered?.kind===`node`&&this.hovered.key===e&&(this.hovered=null)}}},{key:`updateHoveredEdgeTracking`,value:function(e,t,n){if(t.isHovered!==n.isHovered){if(n.isHovered){if(this.hovered?.kind===`edge`&&this.hovered.key!==e){var r=this.hovered.key,i=this.getEdgeState(r);this.edgeStates.set(r,H(H({},i),{},{isHovered:!1})),this.dirtyEdges.add(r)}this.hovered={kind:`edge`,key:e}}else this.hovered?.kind===`edge`&&this.hovered.key===e&&(this.hovered=null)}}}])}(),Hc=1,Uc=2,Wc=3,Gc=4,Kc=function(e){function t(e,n){var r,i,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};U(this,t),i=G(this,t),V(i,`nodeReducer`,null),V(i,`edgeReducer`,null),V(i,`stageCanvas`,null),V(i,`mouseLayer`,null),V(i,`gestureHint`,null),V(i,`extraElements`,{}),V(i,`webGLContext`,null),V(i,`pickingFrameBuffer`,null),V(i,`pickingTexture`,null),V(i,`pickingDepthBuffer`,null),V(i,`activeListeners`,{}),V(i,`nodeVariableEntries`,[]),V(i,`edgeVariableEntries`,[]),V(i,`edgePathsByName`,new Map),V(i,`nodeProgramIndex`,{}),V(i,`edgeProgramIndex`,{}),V(i,`edgeTextureIndexCache`,{}),V(i,`nodeGraphCoords`,{}),V(i,`nodeExtent`,{x:[0,1],y:[0,1]}),V(i,`matrix`,kt()),V(i,`invMatrix`,kt()),V(i,`correctionRatio`,1),V(i,`frameId`,0),V(i,`customBBox`,null),V(i,`gpuTimerExt`,void 0),V(i,`activeGpuTimerQuery`,null),V(i,`pendingGpuTimerQueries`,[]),V(i,`normalizationFunction`,Mr({x:[0,1],y:[0,1]})),V(i,`graphToViewportRatio`,1),V(i,`pickingState`,Qs()),V(i,`prevNodeVisibilities`,{}),V(i,`width`,0),V(i,`height`,0),V(i,`autoRescaleFrozen`,!1),V(i,`stylesDeclaration`,null),V(i,`resolvedStageStyle`,{}),V(i,`renderFrame`,null),V(i,`contextLost`,!1),V(i,`pendingProcess`,`full`),V(i,`needToRefreshState`,!1),V(i,`checkEdgesEventsFrame`,null),V(i,`edgeStyleAnalysis`,{dependency:`static`,xAttribute:null,yAttribute:null}),V(i,`depthLayers`,q(kn)),V(i,`customLayerPrograms`,new Map),V(i,`nodeShapeSlug`,null),V(i,`sdfAtlas`,null),V(i,`depthRanges`,{nodes:{},edges:{}}),V(i,`nodeBaseDepth`,{}),V(i,`edgeBaseDepth`,{});var o=a.primitives,s=a.styles,c=a.settings,l=c===void 0?{}:c,u=a.nodeReducer,d=a.edgeReducer,f=a.customNodeState,p=a.customEdgeState,m=a.customGraphState;i.stateManager=new Vc(function(){return i.scheduleStateRefresh()},f,p,m);var h=o??vr;i.stylesDeclaration=s?{nodes:s.nodes??Wn.nodes,edges:s.edges??Wn.edges,stage:s.stage}:Wn,i.nodeReducer=u??null,i.edgeReducer=d??null;var g=nr(i.stylesDeclaration.nodes);i.nodeReducer&&(g.dependency=`graph-state`),i.edgeStyleAnalysis=nr(i.stylesDeclaration.edges),i.edgeReducer&&(i.edgeStyleAnalysis.dependency=`graph-state`),i.stylesDeclaration.stage&&(i.resolvedStageStyle=hr(i.stylesDeclaration.stage,i.stateManager.graphState));var _=Fr(l);if(Pr(_),_.enableNodeDrag){var v=g.xAttribute,y=g.yAttribute;if((!v||!y)&&!_.dragPositionToAttributes)throw Error('Sigma: `enableNodeDrag` is true but position attribute names could not be inferred from styles. Either use attribute bindings for x/y in your node styles (e.g. `x: { attribute: "x" }`), or provide a `dragPositionToAttributes` setting.')}if(jr(e),!(n instanceof HTMLElement))throw Error(`Sigma: container should be an html element.`);i.container=n,i.edgeGroups=new qs(e,function(e,t){for(var n=0;n<e.length;n++){var r=i.stateManager.getEdgeState(e[n]);r.parallelIndex=n,r.parallelCount=t}});var b=new Gs(e,i.viewportToGraph.bind(i),i.setNodesState.bind(i),function(e,t){return i.emit(e,t)});if(i.depthLayers=h.depthLayers??q(kn),!(s!=null&&s.nodes)&&!Dn.every(function(e){return i.depthLayers.includes(e)}))throw Error(`Sigma: depthLayers must include ${Dn.join(`, `)} for the built-in node styles.`);if(!(s!=null&&s.edges)&&!On.every(function(e){return i.depthLayers.includes(e)}))throw Error(`Sigma: depthLayers must include ${On.join(`, `)} for the built-in edge styles.`);i.itemBuckets={nodes:new vs(i.depthLayers),edges:new vs(i.depthLayers)},i.initWebGLContext(),i.mouseLayer=zr(`div`,{position:`absolute`,touchAction:`none`,userSelect:`none`},{class:`sigma-mouse`}),i.container.appendChild(i.mouseLayer),i.resolvedStageStyle.background&&(i.container.style.backgroundColor=i.resolvedStageStyle.background),i.resolvedStageStyle.cursor&&(i.container.style.cursor=i.resolvedStageStyle.cursor);var x=new ys(i.webGLContext),S=new Cs(i.webGLContext,{channels:1}),C=new ws(i.webGLContext),w=new Cs(i.webGLContext,{channels:4}),T=i.webGLContext,E=new Ac({gl:T,getFrameBuffer:function(){return i.pickingFrameBuffer},getPixelRatio:function(){return i.internals.pixelRatio},getDownSizingRatio:function(){return i.internals.settings.pickingDownSizingRatio},isRenderPending:function(){return i.renderFrame!==null},onIndex:function(e,t){return mc(i.internals,i.pickingState.lookup[e]??null,t)}}),D=i.initPrograms(h,_),O=h==null||(r=h.nodes)==null?void 0:r.labelAttachments,k=null;return O&&Object.keys(O).length>0&&(k=new _s(T,O,function(){return i.scheduleRender()})),i.internals=H(H({nodeDataCache:{},edgeDataCache:{},nodesWithForcedLabels:new Set,nodesWithBackdrop:new Set,edgesWithForcedLabels:new Set,settings:_,primitives:h,pixelRatio:Br(),graph:e,stateManager:i.stateManager,dragManager:b,hoverResolver:E,nodeStyleAnalysis:g,pickingState:i.pickingState},D),{},{attachmentManager:k,nodeDataTexture:x,nodeFrameTexture:S,edgeDataTexture:C,edgeFrameTexture:w,getDimensions:function(){return i.getDimensions()},getGraphDimensions:function(){return i.getGraphDimensions()},getStagePadding:function(){return i.getStagePadding()},getCameraState:function(){return i.camera.getState()},getHitAtPosition:function(e){return i.getHitAtPosition(e)},setNodeState:function(e,t){return i.setNodeState(e,t)},setEdgeState:function(e,t){return i.setEdgeState(e,t)},updateContainerCursor:function(){return i.updateContainerCursor()},scheduleRefresh:function(){return i.scheduleRefresh()},viewportToFramedGraph:function(e){return i.viewportToFramedGraph(e)},viewportToGraph:function(e){return i.viewportToGraph(e)},framedGraphToViewport:function(e){return i.framedGraphToViewport(e)},scaleSize:function(e){return i.scaleSize(e)},emit:function(e,t){return i.emit(e,t)}}),i.labelRenderer=new Bc(i.internals),i.resize(),i.initializeWebGLLabels(),i.camera=new js,i.bindCameraHandlers(),i.mouseCaptor=new Hs(i.mouseLayer,i),i.mouseCaptor.setSettings(i.internals.settings),i.touchCaptor=new Ws(i.mouseLayer,i),i.touchCaptor.setSettings(i.internals.settings),i.bindEventHandlers(),i.bindGraphHandlers(),i.handleSettingsUpdate(),i.refresh(),i}return K(t,e),W(t,[{key:`initializeWebGLLabels`,value:function(){this.sdfAtlas=new ha,this.sdfAtlas.registerFont({family:`sans-serif`,weight:`normal`,style:`normal`})}},{key:`resetWebGLTexture`,value:function(){var e=this.webGLContext;if(!this.pickingFrameBuffer)return this;var t=Math.ceil(this.width*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio),n=Math.ceil(this.height*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio);e.bindFramebuffer(e.FRAMEBUFFER,this.pickingFrameBuffer),this.pickingTexture&&e.deleteTexture(this.pickingTexture);var r=e.createTexture();r&&(e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,n,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),this.pickingTexture=r),this.pickingDepthBuffer&&e.deleteRenderbuffer(this.pickingDepthBuffer);var i=e.createRenderbuffer();return i&&(e.bindRenderbuffer(e.RENDERBUFFER,i),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,t,n),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,i),this.pickingDepthBuffer=i),e.bindFramebuffer(e.FRAMEBUFFER,null),this}},{key:`bindCameraHandlers`,value:function(){var e=this;return this.activeListeners.camera=function(){e.refreshMatrices(),e.labelRenderer.labelsDirty=!0,e.scheduleRender()},this.activeListeners.cameraAnimationStart=function(t){var n=t.from,r=t.to;n.ratio!==r.ratio&&e.stateManager.setGraphState({isZooming:!0})},this.activeListeners.cameraAnimationEnd=function(){e.stateManager.setGraphState({isZooming:!1})},this.camera.on(`updated`,this.activeListeners.camera),this.camera.on(`animationStart`,this.activeListeners.cameraAnimationStart),this.camera.on(`animationEnd`,this.activeListeners.cameraAnimationEnd),this}},{key:`unbindCameraHandlers`,value:function(){return this.camera.removeListener(`updated`,this.activeListeners.camera),this.camera.removeListener(`animationStart`,this.activeListeners.cameraAnimationStart),this.camera.removeListener(`animationEnd`,this.activeListeners.cameraAnimationEnd),this}},{key:`getHitAtPosition`,value:function(e){if(this.contextLost)return null;var t=this.webGLContext;t.bindFramebuffer(t.FRAMEBUFFER,this.pickingFrameBuffer);var n=tn(t,this.pickingFrameBuffer,e.x,e.y,this.internals.pixelRatio,this.internals.settings.pickingDownSizingRatio),r=en.apply(void 0,q(n));return this.pickingState.lookup[r]??null}},{key:`bindEventHandlers`,value:function(){return hc(this.internals,this.mouseCaptor,this.touchCaptor,this.activeListeners),this}},{key:`bindGraphHandlers`,value:function(){return gc({graph:this.internals.graph,edgeGroups:this.edgeGroups,addNode:this.addNode.bind(this),updateNode:this.updateNode.bind(this),removeNode:this.removeNode.bind(this),addEdge:this.addEdge.bind(this),updateEdge:this.updateEdge.bind(this),removeEdge:this.removeEdge.bind(this),clearEdgeState:this.clearEdgeState.bind(this),clearNodeState:this.clearNodeState.bind(this),clearEdgeIndices:this.clearEdgeIndices.bind(this),clearNodeIndices:this.clearNodeIndices.bind(this),refresh:this.refresh.bind(this)},this.activeListeners),this}},{key:`unbindGraphHandlers`,value:function(){_c(this.internals.graph,this.activeListeners)}},{key:`getNodeShapeId`,value:function(e){return this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&e.shape&&e.shape in this.internals.nodeShapeMap?this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[e.shape]]:ti(e.shape||`circle`)}},{key:`processNodes`,value:function(){var e=this,t=this.internals.graph,n=this.internals.settings,r=this.getDimensions(),i=n.autoRescale,a=n.autoRescaleContent,o=this.nodeExtent;if(i===!1){var s=r.width,c=r.height;o={x:[-s/2,s/2],y:[-c/2,c/2]}}else i===`once`&&this.autoRescaleFrozen||(o=this.computeNodeExtent(),a!==`positions`&&!this.customBBox&&(o=xc({extent:o,coords:this.nodeGraphCoords,nodeData:this.internals.nodeDataCache,dimensions:r,stagePadding:this.getStagePadding(),zoomToSizeRatioFunction:n.zoomToSizeRatioFunction,itemSizesReference:n.itemSizesReference,fitLabels:a===`labels`,nodeLabelBox:function(t,n){return e.labelRenderer.nodeLabelBox(t,n)}})),i===`once`&&(this.autoRescaleFrozen=!0));this.nodeExtent=o,this.normalizationFunction=Mr(this.customBBox||this.nodeExtent);var l=Lt(new js().getState(),r,this.getGraphDimensions(),this.getStagePadding());this.labelRenderer.labelGrid.resizeAndClear(r,n.labelGridCellSize),this.labelRenderer.edgeAnchorGrid.resizeAndClear(r,n.labelGridCellSize);var u=n.renderEdgeLabels&&n.edgeLabelAnchors===`allNodes`,d=!1;ec(this.pickingState,`node`);for(var f=t.nodes(),p=0,m=f.length;p<m;p++){var h=f[p],g=this.internals.nodeDataCache[h],_=this.nodeGraphCoords[h];g.x=_.x,g.y=_.y,this.normalizationFunction.applyTo(g),g.visibility!==this.prevNodeVisibilities[h]&&(d=!0),typeof g.label==`string`&&g.visibility!==`hidden`&&g.labelVisibility!==`hidden`&&this.labelRenderer.labelGrid.add(h,g.size,this.framedGraphToViewport(g,{matrix:l})),u&&g.visibility!==`hidden`&&this.labelRenderer.edgeAnchorGrid.add(h,g.size,this.framedGraphToViewport(g,{matrix:l}))}this.labelRenderer.labelGrid.organize(),this.labelRenderer.edgeAnchorGrid.organize(),this.nodeProgram.reallocate(f.length);var v=0;this.depthRanges.nodes={},this.nodeBaseDepth={};var y=this.internals.nodeDataCache,b=B(this.depthLayers),x;try{for(b.s();!(x=b.n()).done;){var S=x.value,C=this.itemBuckets.nodes.getSorted(S,function(e){return y[e].zIndex});if(C.length!==0){this.depthRanges.nodes[S]=[{offset:v,count:C.length}];var w=B(C),T;try{for(w.s();!(T=w.n()).done;){var E=T.value;this.nodeBaseDepth[E]=S,this.nodeProgram.allocateNode(E),tc(this.pickingState,`node`,E),this.addNodeToProgram(E,v++)}}catch(e){w.e(e)}finally{w.f()}}}}catch(e){b.e(e)}finally{b.f()}this.nodeProgram.invalidateBuffers();for(var D=0,O=f.length;D<O;D++)this.prevNodeVisibilities[f[D]]=this.internals.nodeDataCache[f[D]].visibility;this.labelRenderer.processWebGLLabels(f);var k=B(this.customLayerPrograms.values()),A;try{for(k.s();!(A=k.n()).done;){var j=A.value.program;j.cacheData&&j.cacheData()}}catch(e){k.e(e)}finally{k.f()}return d}},{key:`processEdges`,value:function(){var e=this.internals.graph.edges();this.edgeProgram.reallocate(e.length);var t=0;ec(this.pickingState,`edge`),this.depthRanges.edges={},this.edgeBaseDepth={};var n=this.internals.edgeDataCache,r=B(this.depthLayers),i;try{for(r.s();!(i=r.n()).done;){var a=i.value,o=this.itemBuckets.edges.getSorted(a,function(e){return n[e].zIndex});if(o.length!==0){this.depthRanges.edges[a]=[{offset:t,count:o.length}];var s=B(o),c;try{for(s.s();!(c=s.n()).done;){var l=c.value;this.edgeBaseDepth[l]=a,tc(this.pickingState,`edge`,l),this.addEdgeToProgram(l,t++)}}catch(e){s.e(e)}finally{s.f()}}}}catch(e){r.e(e)}finally{r.f()}this.edgeProgram.invalidateBuffers()}},{key:`updateNodeDepthRanges`,value:function(e,t,n){var r=this.nodeProgramIndex[e];r!==void 0&&(kr(this.depthRanges.nodes,t,r),Ar(this.depthRanges.nodes,n,r))}},{key:`updateEdgeDepthRanges`,value:function(e,t,n){var r=this.edgeProgramIndex[e];r!==void 0&&(kr(this.depthRanges.edges,t,r),Ar(this.depthRanges.edges,n,r))}},{key:`handleSettingsUpdate`,value:function(){var e=this,t=this.internals.settings;return this.camera.minRatio=t.minCameraRatio,this.camera.maxRatio=t.maxCameraRatio,this.camera.enabledZooming=t.enableCameraZooming,this.camera.enabledPanning=t.enableCameraPanning,this.camera.enabledRotation=t.enableCameraRotation,t.cameraPanBoundaries?this.camera.constrainState=function(n){return e.cleanCameraState(n,t.cameraPanBoundaries&&J(t.cameraPanBoundaries)===`object`?t.cameraPanBoundaries:{})}:this.camera.constrainState=null,this.camera.setState(this.camera.getState()),this.mouseLayer.style.touchAction=t.gestureTarget===`graph`?`none`:t.gestureTarget===`shared`?`pan-x pan-y`:`auto`,t.gestureTarget!==`shared`&&this.gestureHint&&(this.gestureHint.kill(),this.gestureHint=null),this.mouseCaptor.setSettings(this.internals.settings),this.touchCaptor.setSettings(this.internals.settings),this}},{key:`cleanCameraState`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.tolerance,r=n===void 0?0:n,i=t.boundaries,a=H({},e),o=i||this.nodeExtent,s=z(o.x,2),c=s[0],l=s[1],u=z(o.y,2),d=u[0],f=u[1],p=[this.graphToViewport({x:c,y:d},{cameraState:e}),this.graphToViewport({x:l,y:d},{cameraState:e}),this.graphToViewport({x:c,y:f},{cameraState:e}),this.graphToViewport({x:l,y:f},{cameraState:e})],m=1/0,h=-1/0,g=1/0,_=-1/0;p.forEach(function(e){var t=e.x,n=e.y;m=Math.min(m,t),h=Math.max(h,t),g=Math.min(g,n),_=Math.max(_,n)});var v=h-m,y=_-g,b=this.getDimensions(),x=b.width,S=b.height,C=0,w=0;if(v>=x?h<x-r?C=h-(x-r):m>r&&(C=m-r):h>x+r?C=h-(x+r):m<-r&&(C=m+r),y>=S?_<S-r?w=_-(S-r):g>r&&(w=g-r):_>S+r?w=_-(S+r):g<-r&&(w=g+r),C||w){var T=this.viewportToFramedGraph({x:0,y:0},{cameraState:e}),E=this.viewportToFramedGraph({x:C,y:w},{cameraState:e});C=E.x-T.x,w=E.y-T.y,a.x+=C,a.y+=w}return a}},{key:`refreshMatrices`,value:function(){var e=this.camera.getState(),t=this.getDimensions(),n=this.getGraphDimensions(),r=this.getStagePadding();this.matrix=Lt(e,t,n,r),this.invMatrix=Lt(e,t,n,r,!0),this.correctionRatio=Rt(this.matrix,e,t),this.graphToViewportRatio=this.getGraphToViewportRatio()}},{key:`processData`,value:function(){var e;this.emit(`beforeProcess`),(e=this.internals.attachmentManager)==null||e.clear();var t=H({},this.pickingState.idsByKind),n=this.processNodes();(this.pendingProcess===`full`||n)&&this.processEdges(),nc(this.pickingState,this.internals),rc(t,this.pickingState.idsByKind)||this.internals.hoverResolver.invalidate(),this.pendingProcess=`none`,this.emit(`afterProcess`)}},{key:`render`,value:function(){var e=this;if(this.contextLost)return this;this.emit(`beforeRender`);var t=function(){return e.internals.hoverResolver.frameRendered(),e.emit(`afterRender`),e};if(this.renderFrame&&=(cancelAnimationFrame(this.renderFrame),null),this.resize(),(this.pendingProcess!==`none`||this.needToRefreshState)&&(this.labelRenderer.labelsDirty=!0),this.pendingProcess!==`none`&&this.processData(),this.needToRefreshState&&this.refreshState(),this.needToRefreshState=!1,this.stateManager.clearDirtyTracking(),this.pendingProcess!==`none`&&this.processData(),this.clear(),this.resetWebGLTexture(),!this.internals.graph.order)return t();var n=this.mouseCaptor,r=this.camera.isAnimating()||n.isMoving||n.draggedEvents||n.currentWheelDirection;if(this.refreshMatrices(),this.frameId++,this.internals.settings.renderEdgeLabels&&!this.internals.edgeLabelProgram){var i=this.createEdgeLabelPrograms(),a=i.labelProgram,o=i.labelBackgroundProgram;this.internals.edgeLabelProgram=a,this.internals.edgeLabelBackgroundProgram=o}var s=this.internals.settings.DEBUG_logRenderStats?this.getDebugPrograms():null;s&&s.forEach(function(e){return e.resetDebugStats()}),this.internals.settings.DEBUG_gpuTimerQueries&&this.beginGpuTimerQuery(),this.internals.nodeFrameTexture.ensureCapacity(this.internals.nodeDataTexture.getCapacity()),this.internals.edgeFrameTexture.ensureCapacity(this.internals.edgeDataTexture.getCapacity());var c=this.getRenderParams(),l=Q.edge.writesPickingThisFrame(this.internals)?c:H(H({},c),{},{pickingFrameBuffer:null});this.labelRenderer.resetFrame();var u=this.webGLContext,d=Math.ceil(this.width*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio),f=Math.ceil(this.height*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio);if(u.bindFramebuffer(u.FRAMEBUFFER,this.pickingFrameBuffer),u.viewport(0,0,d,f),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.bindFramebuffer(u.FRAMEBUFFER,null),u.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),this.internals.nodeDataTexture.upload(),this.internals.edgeDataTexture.upload(),this.nodeProgram.uploadLayerTexture(),this.edgeProgram.uploadAttributeTexture(),this.emit(`afterTexturesUpload`),this.internals.nodeDataTexture.bind(Wc),this.internals.edgeDataTexture.bind(Gc),this.edgeFramePass.run(c,this.internals.edgeFrameTexture,this.internals.edgeDataTexture.getHighWaterMark(),this.edgeProgram.getAttributeTexture(),this.nodeProgram.getAttributeTexture()),this.internals.edgeFrameTexture.bind(Hc),this.internals.settings.renderLabels){this.labelRenderer.computeDisplayedNodeLabels();var p=this.labelRenderer.buildFramePassPoints(),m=p.data,h=p.count;this.nodeFramePass.run(m,h,this.internals.nodeFrameTexture,c,this.nodeProgram.getAttributeTexture()),this.internals.nodeFrameTexture.bind(Uc)}this.internals.settings.renderEdgeLabels&&this.labelRenderer.computeDisplayedEdgeLabels();var g=B(this.customLayerPrograms.values()),_;try{for(g.s();!(_=g.n()).done;){var v=_.value.program;v.preRender&&v.preRender(c)}}catch(e){g.e(e)}finally{g.f()}u.bindFramebuffer(u.FRAMEBUFFER,null),u.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio),u.blendFunc(u.ONE,u.ONE_MINUS_SRC_ALPHA);var y=!this.internals.settings.hideLabelsOnMove||!r,b=B(this.depthLayers),x;try{for(b.s();!(x=b.n()).done;){var S=x.value,C=B(this.customLayerPrograms.values()),w;try{for(C.s();!(w=C.n()).done;){var T=w.value;T.depth===S&&T.program.render(c)}}catch(e){C.e(e)}finally{C.f()}var E=this.depthRanges.edges[S];if(E&&(!this.internals.settings.hideEdgesOnMove||!r)){var D=B(E),O;try{for(D.s();!(O=D.n()).done;){var k=O.value,A=k.offset,j=k.count;j>0&&this.edgeProgram.render(l,A,j)}}catch(e){D.e(e)}finally{D.f()}}this.internals.settings.renderEdgeLabels&&y&&(this.labelRenderer.renderEdgeLabelBackgrounds(Q.edgeLabel.writesPickingThisFrame(this.internals)?c:H(H({},c),{},{pickingFrameBuffer:null}),S),this.labelRenderer.renderEdgeLabels(c,S)),this.labelRenderer.cacheAttachments(S),this.labelRenderer.renderBackdrops(H(H({},c),{},{pickingFrameBuffer:null}),S);var M=this.depthRanges.nodes[S];if(M){var N=B(M),P;try{for(N.s();!(P=N.n()).done;){var F=P.value,ee=F.offset,I=F.count;I>0&&this.nodeProgram.render(c,ee,I)}}catch(e){N.e(e)}finally{N.f()}}y&&(this.labelRenderer.renderAttachments(H(H({},c),{},{pickingFrameBuffer:null}),S),this.labelRenderer.renderLabelBackgrounds(Q.nodeLabel.writesPickingThisFrame(this.internals)?c:H(H({},c),{},{pickingFrameBuffer:null}),S),this.internals.settings.renderLabels&&this.labelRenderer.renderWebGLLabels(c,S))}}catch(e){b.e(e)}finally{b.f()}return this.labelRenderer.labelsDirty=!1,this.internals.settings.DEBUG_displayPickingLayer&&(u.bindFramebuffer(u.READ_FRAMEBUFFER,this.pickingFrameBuffer),u.bindFramebuffer(u.DRAW_FRAMEBUFFER,null),u.blitFramebuffer(0,0,d,f,0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio,u.COLOR_BUFFER_BIT,u.NEAREST)),this.internals.settings.DEBUG_gpuTimerQueries&&this.endGpuTimerQuery(),this.pollGpuTimerQueries(),s&&this.logRenderStats(s),t()}},{key:`getDebugPrograms`,value:function(){return[this.nodeProgram,this.edgeProgram,this.internals.labelProgram,this.internals.edgeLabelProgram,this.internals.edgeLabelBackgroundProgram,this.internals.backdropProgram,this.internals.labelBackgroundProgram,this.internals.attachmentProgram].filter(function(e){return e!==null})}},{key:`logRenderStats`,value:function(e){var t={},n=B(e),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;t[i.constructor.name]=H({},i.debugStats)}}catch(e){n.e(e)}finally{n.f()}console.log(`[sigma] DEBUG_logRenderStats: frame #${this.frameId}`),console.table(t)}},{key:`getGpuTimerExtension`,value:function(){return this.gpuTimerExt===void 0&&(this.gpuTimerExt=this.webGLContext.getExtension(`EXT_disjoint_timer_query_webgl2`),this.gpuTimerExt||console.warn(`Sigma: DEBUG_gpuTimerQueries is enabled, but this browser/driver doesn't support EXT_disjoint_timer_query_webgl2.`)),this.gpuTimerExt}},{key:`beginGpuTimerQuery`,value:function(){var e=this.getGpuTimerExtension();if(e){var t=this.webGLContext,n=t.createQuery();n&&(t.beginQuery(e.TIME_ELAPSED_EXT,n),this.activeGpuTimerQuery=n)}}},{key:`endGpuTimerQuery`,value:function(){this.gpuTimerExt&&this.activeGpuTimerQuery&&(this.webGLContext.endQuery(this.gpuTimerExt.TIME_ELAPSED_EXT),this.pendingGpuTimerQueries.push({query:this.activeGpuTimerQuery,frameId:this.frameId}),this.activeGpuTimerQuery=null)}},{key:`pollGpuTimerQueries`,value:function(){if(this.pendingGpuTimerQueries.length!==0){var e=this.webGLContext,t=this.gpuTimerExt;if(!t)this.pendingGpuTimerQueries.forEach(function(t){var n=t.query;return e.deleteQuery(n)}),this.pendingGpuTimerQueries=[];else{var n=e.getParameter(t.GPU_DISJOINT_EXT),r=[],i=B(this.pendingGpuTimerQueries),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;if(!e.getQueryParameter(o.query,e.QUERY_RESULT_AVAILABLE))r.push(o);else{if(!n){var s=e.getQueryParameter(o.query,e.QUERY_RESULT);console.log(`[sigma] DEBUG_gpuTimerQueries: frame #${o.frameId} GPU time = ${(s/1e6).toFixed(2)}ms`)}e.deleteQuery(o.query)}}}catch(e){i.e(e)}finally{i.f()}this.pendingGpuTimerQueries=r}}}},{key:`postEvaluateNode`,value:function(e,t,n){var r=e;r.x===void 0&&(r.x=t.x),r.y===void 0&&(r.y=t.y),e.highlighted=n.isHighlighted;for(var i=0,a=this.nodeVariableEntries.length;i<a;i++){var o=z(this.nodeVariableEntries[i],2),s=o[0],c=o[1];r[s]=r[s]??t[s]??c.default}}},{key:`addNode`,value:function(e){var t=this.internals.graph.getNodeAttributes(e),n=this.stateManager.getNodeState(e),r=this.internals.nodeDataCache[e]||{};if(fr(this.stylesDeclaration.nodes,t,n,this.stateManager.graphState,this.internals.graph,r),this.postEvaluateNode(r,t,n),this.nodeReducer){var i=this.nodeReducer(e,r,t,n,this.stateManager.graphState,this.internals.graph);r=H(H({},r),i)}if(typeof r.x!=`number`||typeof r.y!=`number`)throw Error(`Sigma: could not find a valid position (x, y) for node "${e}". Provide coordinates via node attributes, styles, or a nodeReducer.`);this.internals.nodeShapeMap?r.shape&&r.shape in this.internals.nodeShapeMap||(r.shape=Object.keys(this.internals.nodeShapeMap)[0]):this.nodeShapeSlug&&(r.shape=this.nodeShapeSlug),this.internals.nodeDataCache[e]=r,this.nodeGraphCoords[e]={x:r.x,y:r.y},Cr(this.internals.nodesWithForcedLabels,e,Er(r)),Cr(this.internals.nodesWithBackdrop,e,Dr(r)),this.itemBuckets.nodes.set(e,r.depth)}},{key:`updateNode`,value:function(e){this.addNode(e);var t=this.internals.nodeDataCache[e];this.normalizationFunction.applyTo(t)}},{key:`removeNode`,value:function(e){this.itemBuckets.nodes.remove(e),delete this.internals.nodeDataCache[e],delete this.nodeGraphCoords[e],delete this.nodeProgramIndex[e],this.internals.dragManager.removeNode(e),this.stateManager.removeNode(e),this.internals.nodesWithForcedLabels.delete(e),this.internals.nodesWithBackdrop.delete(e)}},{key:`postEvaluateEdge`,value:function(e,t){for(var n=e,r=0,i=this.edgeVariableEntries.length;r<i;r++){var a=z(this.edgeVariableEntries[r],2),o=a[0],s=a[1];n[o]=n[o]??t[o]??s.default}}},{key:`applyEdgeSpread`,value:function(e,t,n){if(!(n.parallelCount<=1)){var r=this.internals.graph.source(e),i=this.internals.graph.target(e),a=r===i,o=a?t.selfLoopPath||t.path:t.parallelPath||t.path,s=o?this.edgePathsByName.get(o):void 0;if(s!=null&&s.spread){var c=t.parallelSpread??.25,l=s.spread.compute(n.parallelIndex,n.parallelCount,c);!a&&this.internals.graph.isDirected(e)&&r>i&&(l=-l),t[s.spread.variable]=l}}}},{key:`addEdge`,value:function(e){var t=this.internals.graph.getEdgeAttributes(e),n=this.stateManager.getEdgeState(e),r={};if(pr(this.stylesDeclaration.edges,t,n,this.stateManager.graphState,this.internals.graph,r),this.postEvaluateEdge(r,t),this.edgeReducer){var i=this.edgeReducer(e,r,t,n,this.stateManager.graphState,this.internals.graph);r=H(H({},r),i)}this.applyEdgeSpread(e,r,n),this.internals.edgeDataCache[e]=r,Cr(this.internals.edgesWithForcedLabels,e,Er(r)),this.itemBuckets.edges.set(e,r.depth)}},{key:`updateEdge`,value:function(e){this.addEdge(e)}},{key:`removeEdge`,value:function(e){this.itemBuckets.edges.remove(e),delete this.internals.edgeDataCache[e],delete this.edgeProgramIndex[e],delete this.edgeTextureIndexCache[e],this.internals.edgeDataTexture.free(e),this.stateManager.removeEdge(e),this.internals.edgesWithForcedLabels.delete(e)}},{key:`clearNodeIndices`,value:function(){this.labelRenderer.resetLabelGrid(),this.autoRescaleFrozen||(this.nodeExtent={x:[0,1],y:[0,1]}),this.internals.nodeDataCache={},this.nodeGraphCoords={},this.edgeProgramIndex={},this.internals.nodesWithForcedLabels.clear(),this.internals.nodesWithBackdrop.clear(),this.prevNodeVisibilities={},this.itemBuckets.nodes.clearAll(),this.depthRanges.nodes={},this.nodeBaseDepth={}}},{key:`clearEdgeIndices`,value:function(){this.internals.edgeDataCache={},this.edgeProgramIndex={},this.edgeTextureIndexCache={},this.internals.edgesWithForcedLabels.clear(),ec(this.pickingState,`edge`),this.itemBuckets.edges.clearAll(),this.depthRanges.edges={},this.edgeBaseDepth={},this.edgeGroups.clear()}},{key:`clearIndices`,value:function(){this.clearEdgeIndices(),this.clearNodeIndices()}},{key:`clearNodeState`,value:function(){this.labelRenderer.resetFrame(),this.internals.nodesWithBackdrop.clear(),this.internals.dragManager.clear(),this.autoRescaleFrozen=!1,this.stateManager.clearNodes()}},{key:`clearEdgeState`,value:function(){this.labelRenderer.clearEdgeLabels(),this.stateManager.clearEdges()}},{key:`clearState`,value:function(){this.clearEdgeState(),this.clearNodeState(),this.stateManager.resetGraphState()}},{key:`addNodeToProgram`,value:function(e,t){var n,r=this.internals.nodeDataCache[e];this.internals.nodeDataTexture.allocate(e),(n=this.internals.nodeDataTexture).updateNode.apply(n,[e,r.x,r.y,r.size,this.getNodeShapeId(r)].concat(q(Or(r)),[r.color]));var i=this.internals.nodeDataTexture.getIndex(e);this.nodeProgram.process($s(this.pickingState,`node`,e),t,r,i,e),this.nodeProgramIndex[e]=t}},{key:`addEdgeToProgram`,value:function(e,t){var n=this.internals.edgeDataCache[e],r=this.internals.graph.source(e),i=this.internals.graph.target(e),a=this.internals.edgeDataTexture.allocate(e);this.edgeTextureIndexCache[e]=a;var o=r===i,s=!o&&(this.stateManager.getEdgeState(e)?.parallelCount??1)>1,c=this.edgeProgram.resolveEdgeIds(n,o,s),l=c.pathId,u=c.headId,d=c.tailId,f=c.headLengthRatio,p=c.tailLengthRatio;this.internals.edgeDataTexture.updateEdge(e,this.internals.nodeDataTexture.getIndex(r),this.internals.nodeDataTexture.getIndex(i),n.size,f,p,l,u,d),this.edgeProgram.process($s(this.pickingState,`edge`,e),t,this.internals.nodeDataCache[r],this.internals.nodeDataCache[i],n,a),this.edgeProgramIndex[e]=t}},{key:`getRenderParams`,value:function(){return{frameId:this.frameId,matrix:this.matrix,invMatrix:this.invMatrix,width:this.width,height:this.height,pixelRatio:this.internals.pixelRatio,zoomRatio:this.camera.ratio,cameraAngle:this.camera.angle,sizeRatio:1/this.scaleSize(),correctionRatio:this.correctionRatio,downSizingRatio:this.internals.settings.pickingDownSizingRatio,minEdgeThickness:this.internals.settings.minEdgeThickness,antiAliasingFeather:this.internals.settings.antiAliasingFeather,nodePickingPadding:this.internals.settings.nodePickingPadding,edgePickingPadding:this.internals.settings.edgePickingPadding,labelPickingPadding:this.internals.settings.labelPickingPadding,nodeDataTextureUnit:Wc,nodeDataTextureWidth:this.internals.nodeDataTexture.getTextureWidth(),nodeFrameTextureUnit:Uc,nodeFrameTextureWidth:this.internals.nodeFrameTexture.getTextureWidth(),edgeDataTextureUnit:Gc,edgeDataTextureWidth:this.internals.edgeDataTexture.getTextureWidth(),edgeFrameTextureUnit:Hc,edgeFrameTextureWidth:this.internals.edgeFrameTexture.getTextureWidth(),pickingFrameBuffer:this.pickingFrameBuffer,labelPixelSnapping:+!!this.internals.settings.labelPixelSnapping}}},{key:`getStagePadding`,value:function(){var e=this.internals.settings,t=e.stagePadding;return e.autoRescale&&t||0}},{key:`getLayerElement`,value:function(e){if(e===`mouse`)return this.mouseLayer;var t=this.extraElements[e];if(!t)throw Error(`Sigma: layer "${e}" does not exist`);return t}},{key:`initWebGLContext`,value:function(){var e=this,t=this.createWebGLContext(`stage`);this.stageCanvas=this.extraElements.stage,this.webGLContext=t,this.stageCanvas.addEventListener(`webglcontextlost`,function(t){e.webGLContext&&(t.preventDefault(),e.contextLost=!0,e.renderFrame&&=(cancelAnimationFrame(e.renderFrame),null),e.gpuTimerExt=void 0,e.activeGpuTimerQuery=null,e.pendingGpuTimerQueries=[],e.emit(`webglContextLost`))}),this.stageCanvas.addEventListener(`webglcontextrestored`,function(){requestAnimationFrame(function(){e.webGLContext&&!e.webGLContext.isContextLost()&&e.restoreWebGLContext()})}),this.initPickingFramebuffer()}},{key:`initPickingFramebuffer`,value:function(){var e=this.webGLContext,t=e.createFramebuffer();if(!t)throw Error(`Sigma: cannot create picking frame buffer`);e.bindFramebuffer(e.FRAMEBUFFER,t);var n=e.createTexture();if(!n)throw Error(`Sigma: cannot create picking texture`);e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);var r=e.createRenderbuffer();if(!r)throw Error(`Sigma: cannot create picking depth buffer`);if(e.bindRenderbuffer(e.RENDERBUFFER,r),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,1,1),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,r),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw Error(`Sigma: picking framebuffer is not complete`);e.bindFramebuffer(e.FRAMEBUFFER,null),this.pickingFrameBuffer=t,this.pickingTexture=n,this.pickingDepthBuffer=r}},{key:`initPrograms`,value:function(e,t){var n=this,r=this.webGLContext,i=Yo(r,this.pickingFrameBuffer,n,e?.nodes,t.antialiasNodes),a=i.nodeProgram,o=i.labelProgram,s=i.backdropProgram,c=i.labelBackgroundProgram,l=i.attachmentProgram,u=i.framePass,d=i.shapeSlug,f=i.shapeNameToIndex,p=i.shapeGlobalIds,m=i.variables;this.nodeProgram=a,this.nodeFramePass=u,this.nodeVariableEntries=Object.entries(m),d&&(this.nodeShapeSlug=d);var h=Xo(r,this.pickingFrameBuffer,n,e?.edges,t.antialiasEdges,e?.nodes),g=h.edgeProgram,_=h.createLabelPrograms,v=h.framePass,y=h.variables,b=h.paths;return this.createEdgeLabelPrograms=_,this.edgeProgram=g,this.edgeFramePass=v,this.edgeVariableEntries=Object.entries(y),this.edgePathsByName=new Map(b.map(function(e){return[e.name,e]})),{labelProgram:o,edgeLabelProgram:null,edgeLabelBackgroundProgram:null,backdropProgram:s,labelBackgroundProgram:c,attachmentProgram:l,nodeShapeMap:f??null,nodeGlobalShapeIds:p??null}}},{key:`restoreWebGLContext`,value:function(){var e,t,n,r,i,a=this.internals;this.initPickingFramebuffer(),(e=a.nodeDataTexture)==null||e.restore(),(t=a.nodeFrameTexture)==null||t.restore(),(n=a.edgeDataTexture)==null||n.restore(),(r=a.edgeFrameTexture)==null||r.restore(),(i=a.attachmentManager)==null||i.restore(),a.hoverResolver.reset(),Object.assign(a,this.initPrograms(a.primitives,a.settings));var o=B(this.customLayerPrograms.values()),s;try{for(o.s();!(s=o.n()).done;){var c=s.value;c.program.kill(),c.program=c.factory(this.webGLContext)}}catch(e){o.e(e)}finally{o.f()}this.contextLost=!1,this.emit(`webglContextRestored`),this.refresh()}},{key:`createLayer`,value:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.extraElements[e])throw Error(`Sigma: a layer named "${e}" already exists`);var r=zr(t,{position:`absolute`},{class:`sigma-${e}`});return n.style&&Object.assign(r.style,n.style),this.extraElements[e]=r,`beforeLayer`in n&&n.beforeLayer?this.getLayerElement(n.beforeLayer).before(r):`afterLayer`in n&&n.afterLayer?this.getLayerElement(n.afterLayer).after(r):this.container.appendChild(r),r}},{key:`createCanvas`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.createLayer(e,`canvas`,t)}},{key:`createWebGLContext`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=this.createCanvas(e,t);t.hidden&&n.remove();var r=n.getContext(`webgl2`,H({preserveDrawingBuffer:!1,antialias:!1,depth:!0},t));if(!r)throw Error(`Sigma: WebGL 2 is not supported by your browser. Please use a modern browser (Chrome 56+, Firefox 51+, Safari 15+, Edge 79+).`);return r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA),r}},{key:`killLayer`,value:function(e){if(e===`stage`||e===`mouse`)throw Error(`Sigma: cannot kill built-in layer "${e}"`);var t=this.extraElements[e];if(!t)throw Error(`Sigma: cannot kill layer ${e}, which does not exist`);return t.remove(),delete this.extraElements[e],this}},{key:`getWebGLContext`,value:function(){if(!this.webGLContext)throw Error(`Sigma: WebGL context is not available`);return this.webGLContext}},{key:`getNodeDataTexture`,value:function(){if(!this.internals.nodeDataTexture)throw Error(`Sigma: node data texture is not available`);return this.internals.nodeDataTexture}},{key:`getNormalizationFunction`,value:function(){return this.normalizationFunction}},{key:`addCustomLayerProgram`,value:function(e,t,n){var r;if(!this.depthLayers.includes(t))throw Error(`Sigma: cannot add custom layer program at depth "${t}", it must be declared in primitives.depthLayers. Current layers: ${this.depthLayers.join(`, `)}`);(r=this.customLayerPrograms.get(e))==null||r.program.kill();var i=n(this.webGLContext);return this.customLayerPrograms.set(e,{depth:t,factory:n,program:i}),i.cacheData&&i.cacheData(),this.scheduleRender(),this}},{key:`removeCustomLayerProgram`,value:function(e){var t=this.customLayerPrograms.get(e);return t&&(t.program.kill(),this.customLayerPrograms.delete(e),this.scheduleRender()),this}},{key:`getCamera`,value:function(){return this.camera}},{key:`setCamera`,value:function(e){return this.camera.cancelAnimation(),this.unbindCameraHandlers(),this.camera=e,this.bindCameraHandlers(),this.scheduleRender(),this}},{key:`getContainer`,value:function(){return this.container}},{key:`getGraph`,value:function(){return this.internals.graph}},{key:`setGraph`,value:function(e){return e===this.internals.graph||(this.stateManager.pruneNodes(function(t){return e.hasNode(t)}),this.stateManager.pruneEdges(function(t){return e.hasEdge(t)}),this.unbindGraphHandlers(),this.checkEdgesEventsFrame!==null&&(cancelAnimationFrame(this.checkEdgesEventsFrame),this.checkEdgesEventsFrame=null),this.internals.graph=e,this.autoRescaleFrozen=!1,this.bindGraphHandlers(),this.refresh()),this}},{key:`getMouseCaptor`,value:function(){return this.mouseCaptor}},{key:`getTouchCaptor`,value:function(){return this.touchCaptor}},{key:`getDimensions`,value:function(){return{width:this.width,height:this.height}}},{key:`getGraphDimensions`,value:function(){var e=this.customBBox||this.nodeExtent;return{width:e.x[1]-e.x[0]||1,height:e.y[1]-e.y[0]||1}}},{key:`getNodeDisplayData`,value:function(e){var t=this.internals.nodeDataCache[e];return t?Object.assign({},t):void 0}},{key:`getEdgeDisplayData`,value:function(e){var t=this.internals.edgeDataCache[e];return t?Object.assign({},t):void 0}},{key:`getNodeState`,value:function(e){return this.stateManager.getNodeState(e)}},{key:`getEdgeState`,value:function(e){return this.stateManager.getEdgeState(e)}},{key:`getGraphState`,value:function(){return this.stateManager.getGraphState()}},{key:`setNodeState`,value:function(e,t){return this.stateManager.setNodeState(e,t),this}},{key:`setEdgeState`,value:function(e,t){return this.stateManager.setEdgeState(e,t),this}},{key:`setGraphState`,value:function(e){return this.stateManager.setGraphState(e),this}},{key:`_setPanning`,value:function(e){this.stateManager.setGraphState({isPanning:e})}},{key:`_setZooming`,value:function(e){this.stateManager.setGraphState({isZooming:e})}},{key:`_hasNodeDrag`,value:function(){var e=this.internals.dragManager;return!!(e.pendingNode||e.session)}},{key:`_showGestureHint`,value:function(e){var t=this.internals.settings;t.gestureTarget===`shared`&&(this.gestureHint=this.gestureHint||new kc(this.container),this.gestureHint.show(e,t))}},{key:`setNodesState`,value:function(e,t){return this.stateManager.setNodesState(e,t),this}},{key:`setEdgesState`,value:function(e,t){return this.stateManager.setEdgesState(e,t),this}},{key:`updateContainerCursor`,value:function(){var e=this.stateManager.hovered,t=this.resolvedStageStyle.cursor||``;this.container.style.cursor=e&&ac(this.internals,e)||t}},{key:`refreshStageStyle`,value:function(){this.resolvedStageStyle=hr(this.stylesDeclaration.stage,this.stateManager.graphState),this.resolvedStageStyle.background!==void 0&&(this.container.style.backgroundColor=this.resolvedStageStyle.background),this.updateContainerCursor()}},{key:`getNodeDisplayedLabels`,value:function(){return new Set(this.labelRenderer.displayedNodeLabels)}},{key:`getEdgeDisplayedLabels`,value:function(){return new Set(this.labelRenderer.displayedEdgeLabels)}},{key:`getSettings`,value:function(){return H({},this.internals.settings)}},{key:`getSetting`,value:function(e){return this.internals.settings[e]}},{key:`getStyles`,value:function(){return H({},this.stylesDeclaration)}},{key:`getPrimitives`,value:function(){return H({},this.internals.primitives)}},{key:`setSetting`,value:function(e,t){return this.internals.settings[e]=t,Pr(this.internals.settings),this.handleSettingsUpdate(),this.scheduleRefresh(),this}},{key:`updateSetting`,value:function(e,t){return this.setSetting(e,t(this.internals.settings[e])),this}},{key:`setSettings`,value:function(e){return this.internals.settings=H(H({},this.internals.settings),e),Pr(this.internals.settings),this.handleSettingsUpdate(),this.scheduleRefresh(),this}},{key:`resize`,value:function(e){var t=this.width,n=this.height;if(this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.internals.pixelRatio=Br(),this.width===0){if(this.internals.settings.allowInvalidContainer)this.width=1;else throw Error(`Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.`)}if(this.height===0){if(this.internals.settings.allowInvalidContainer)this.height=1;else throw Error(`Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.`)}if(!e&&t===this.width&&n===this.height)return this;this.labelRenderer.labelsDirty=!0;for(var r=0,i=[this.mouseLayer].concat(q(Object.values(this.extraElements)));r<i.length;r++){var a=i[r];a.style.width=this.width+`px`,a.style.height=this.height+`px`}return this.webGLContext&&(this.stageCanvas.setAttribute(`width`,this.width*this.internals.pixelRatio+`px`),this.stageCanvas.setAttribute(`height`,this.height*this.internals.pixelRatio+`px`),this.webGLContext.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio)),this.emit(`resize`),this}},{key:`clear`,value:function(){return this.emit(`beforeClear`),this.webGLContext.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,null),this.webGLContext.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.emit(`afterClear`),this}},{key:`scheduleStateRefresh`,value:function(){this.needToRefreshState=!0,this.scheduleRender()}},{key:`refreshState`,value:function(){var e=this,t;this.stateManager.flushGraphStateFlags();var n=this.stateManager.graphStateChanged&&this.internals.nodeStyleAnalysis.dependency===`graph-state`,r=this.stateManager.graphStateChanged&&this.edgeStyleAnalysis.dependency===`graph-state`,i=!1;if(n)this.internals.graph.forEachNode(function(t){e.refreshNodeState(t)&&(i=!0)});else if(this.internals.nodeStyleAnalysis.dependency!==`static`){var a=B(this.stateManager.dirtyNodes),o;try{for(a.s();!(o=a.n()).done;){var s=o.value;this.refreshNodeState(s)&&(i=!0)}}catch(e){a.e(e)}finally{a.f()}}if(r)this.internals.graph.forEachEdge(function(t){e.refreshEdgeState(t)&&(i=!0)});else if(this.edgeStyleAnalysis.dependency!==`static`){var c=B(this.stateManager.dirtyEdges),l;try{for(c.s();!(l=c.n()).done;){var u=l.value;this.refreshEdgeState(u)&&(i=!0)}}catch(e){c.e(e)}finally{c.f()}}this.stateManager.graphStateChanged&&(t=this.stylesDeclaration)!=null&&t.stage&&this.refreshStageStyle(),this.stateManager.clearDirtyTracking(),i&&(this.pendingProcess=`full`)}},{key:`refreshNodeState`,value:function(e){var t=this.internals.nodeDataCache[e];if(!t||this.nodeReducer){var n,r=this.internals.nodeDataCache[e]?.depth,i=this.internals.nodeDataCache[e]?.zIndex,a=this.internals.nodeDataCache[e]?.labelAttachment;this.updateNode(e);var o=this.internals.nodeDataCache[e];this.internals.attachmentManager&&o.labelAttachment!==a&&this.internals.attachmentManager.invalidateNode(e);var s=this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&o.shape&&o.shape in this.internals.nodeShapeMap?this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[o.shape]]:ti(o.shape||`circle`);(n=this.internals.nodeDataTexture).updateNode.apply(n,[e,o.x,o.y,o.size,s].concat(q(Or(o)),[o.color])),r&&o.depth!==r&&this.updateNodeDepthRanges(e,r,o.depth);var c=this.nodeProgramIndex[e];return c!==void 0&&(this.addNodeToProgram(e,c),this.nodeProgram.invalidateBuffers()),i!==void 0&&o.zIndex!==i}var l=this.internals.graph.getNodeAttributes(e),u=this.stateManager.getNodeState(e),d=t.size,f=t.shape,p=t.depth,m=t.zIndex,h=t.labelAttachment,g=t.rotationAlignment,_=t.labelRotationAlignment,v=t.color;fr(this.stylesDeclaration.nodes,l,u,this.stateManager.graphState,this.internals.graph,t),this.postEvaluateNode(t,l,u);var y=this.nodeGraphCoords[e],b=t.x!==y.x||t.y!==y.y;if(b&&(y.x=t.x,y.y=t.y),this.normalizationFunction.applyTo(t),this.internals.nodeShapeMap?t.shape&&t.shape in this.internals.nodeShapeMap||(t.shape=Object.keys(this.internals.nodeShapeMap)[0]):this.nodeShapeSlug&&(t.shape=this.nodeShapeSlug),this.internals.attachmentManager&&t.labelAttachment!==h&&this.internals.attachmentManager.invalidateNode(e),Cr(this.internals.nodesWithForcedLabels,e,Er(t)),Cr(this.internals.nodesWithBackdrop,e,Dr(t)),b||t.size!==d||t.shape!==f||t.rotationAlignment!==g||t.labelRotationAlignment!==_||t.color!==v){var x,S=this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&t.shape&&t.shape in this.internals.nodeShapeMap?this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[t.shape]]:ti(t.shape||`circle`);(x=this.internals.nodeDataTexture).updateNode.apply(x,[e,t.x,t.y,t.size,S].concat(q(Or(t)),[t.color]))}this.itemBuckets.nodes.set(e,t.depth),t.depth!==p&&this.updateNodeDepthRanges(e,p,t.depth);var C=this.nodeProgramIndex[e];return C!==void 0&&(this.addNodeToProgram(e,C),this.nodeProgram.invalidateBuffers()),t.zIndex!==m}},{key:`refreshEdgeState`,value:function(e){var t=this.internals.edgeDataCache[e];if(!t||this.edgeReducer){var n=t?.depth,r=t?.zIndex;this.updateEdge(e);var i=this.internals.edgeDataCache[e];n&&i.depth!==n&&this.updateEdgeDepthRanges(e,n,i.depth);var a=this.edgeProgramIndex[e];return a!==void 0&&(this.addEdgeToProgram(e,a),this.edgeProgram.invalidateBuffers()),r!==void 0&&i.zIndex!==r}var o=this.internals.graph.getEdgeAttributes(e),s=this.stateManager.getEdgeState(e),c=t.depth,l=t.zIndex,u=t.size,d=t.path,f=t.selfLoopPath,p=t.parallelPath,m=t.head,h=t.tail;pr(this.stylesDeclaration.edges,o,s,this.stateManager.graphState,this.internals.graph,t),this.postEvaluateEdge(t,o),this.applyEdgeSpread(e,t,s),Cr(this.internals.edgesWithForcedLabels,e,Er(t)),this.itemBuckets.edges.set(e,t.depth),t.depth!==c&&this.updateEdgeDepthRanges(e,c,t.depth);var g=this.edgeProgramIndex[e];if(g!==void 0){if(t.size!==u||t.path!==d||t.selfLoopPath!==f||t.parallelPath!==p||t.head!==m||t.tail!==h)this.addEdgeToProgram(e,g),this.edgeProgram.invalidateBuffers();else{var _=this.internals.graph.source(e),v=this.internals.graph.target(e),y=this.internals.nodeDataCache[_],b=this.internals.nodeDataCache[v],x=this.edgeTextureIndexCache[e];this.edgeProgram.process($s(this.pickingState,`edge`,e),g,y,b,t,x),this.edgeProgram.invalidateBuffers()}}return t.zIndex!==l}},{key:`refresh`,value:function(e){var t=this,n=e?.skipIndexation!==void 0&&e?.skipIndexation,r=e?.schedule!==void 0&&e.schedule;if(!e||!e.partialGraph)this.clearEdgeIndices(),this.clearNodeIndices(),this.internals.graph.forEachNode(function(e){return t.addNode(e)}),this.edgeGroups.rebuild(),this.internals.graph.forEachEdge(function(e){return t.addEdge(e)}),this.pendingProcess=`full`;else{for(var i,a=e.partialGraph?.nodes||[],o=0,s=a?.length||0;o<s;o++){var c,l=``+a[o],u=this.internals.nodeDataCache[l]?.labelAttachment;if(this.updateNode(l),this.internals.attachmentManager&&((c=this.internals.nodeDataCache[l])!=null&&c.labelAttachment||u)&&this.internals.attachmentManager.invalidateNode(l),n){var d=this.nodeProgramIndex[l];if(d===void 0)throw Error(`Sigma: node "${l}" can't be repaint`);this.addNodeToProgram(l,d)}}n&&a.length>0&&(this.nodeProgram.invalidateBuffers(),this.labelRenderer.labelsDirty=!0);for(var f=(e==null||(i=e.partialGraph)==null?void 0:i.edges)||[],p=0,m=f.length;p<m;p++){var h=``+f[p];if(this.updateEdge(h),n){var g=this.edgeProgramIndex[h];if(g===void 0)throw Error(`Sigma: edge "${h}" can't be repaint`);this.addEdgeToProgram(h,g)}}n&&f.length>0&&(this.edgeProgram.invalidateBuffers(),this.labelRenderer.labelsDirty=!0),!n&&this.pendingProcess!==`full`&&(this.pendingProcess=f.length>0?`full`:`nodes`)}return r?this.scheduleRender():this.render(),this}},{key:`scheduleRender`,value:function(){var e=this;return this.renderFrame||=requestAnimationFrame(function(){e.render()}),this}},{key:`scheduleRefresh`,value:function(e){return this.refresh(H(H({},e),{},{schedule:!0}))}},{key:`getViewportZoomedState`,value:function(e,t){var n=this.camera.getState(),r=n.ratio,i=n.angle,a=n.x,o=n.y,s=this.internals.settings,c=s.minCameraRatio,l=s.maxCameraRatio;typeof l==`number`&&(t=Math.min(t,l)),typeof c==`number`&&(t=Math.max(t,c));var u=t/r,d={x:this.width/2,y:this.height/2},f=this.viewportToFramedGraph(e),p=this.viewportToFramedGraph(d);return{angle:i,x:(f.x-p.x)*(1-u)+a,y:(f.y-p.y)*(1-u)+o,ratio:t}}},{key:`viewRectangle`,value:function(){var e=this.viewportToFramedGraph({x:0,y:0}),t=this.viewportToFramedGraph({x:this.width,y:0}),n=this.viewportToFramedGraph({x:0,y:this.height});return{x1:e.x,y1:e.y,x2:t.x,y2:t.y,height:t.y-n.y}}},{key:`framedGraphToViewport`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=!!t.cameraState||!!t.viewportDimensions||!!t.graphDimensions||!!t.padding,r=Ft(t.matrix||(n?Lt(t.cameraState||this.camera.getState(),t.viewportDimensions||this.getDimensions(),t.graphDimensions||this.getGraphDimensions(),t.padding||this.getStagePadding()):this.matrix),e);return{x:(1+r.x)*this.width/2,y:(1-r.y)*this.height/2}}},{key:`viewportToFramedGraph`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=!!t.cameraState||!!t.viewportDimensions||!!t.graphDimensions||!!t.padding,r=Ft(t.matrix||(n?Lt(t.cameraState||this.camera.getState(),t.viewportDimensions||this.getDimensions(),t.graphDimensions||this.getGraphDimensions(),t.padding||this.getStagePadding(),!0):this.invMatrix),{x:e.x/this.width*2-1,y:1-e.y/this.height*2});return isNaN(r.x)&&(r.x=0),isNaN(r.y)&&(r.y=0),r}},{key:`viewportToGraph`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.normalizationFunction.inverse(this.viewportToFramedGraph(e,t))}},{key:`graphToViewport`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.framedGraphToViewport(this.normalizationFunction(e),t)}},{key:`graphToFramedGraph`,value:function(e){return this.normalizationFunction(e)}},{key:`framedGraphToGraph`,value:function(e){return this.normalizationFunction.inverse(e)}},{key:`getGraphToViewportRatio`,value:function(){var e={x:0,y:0},t={x:1,y:1},n=Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2),r=this.graphToViewport(e),i=this.graphToViewport(t);return Math.sqrt((r.x-i.x)**2+(r.y-i.y)**2)/n}},{key:`computeNodeExtent`,value:function(){var e=this.nodeGraphCoords,t=Object.keys(e);if(!t.length)return{x:[0,1],y:[0,1]};for(var n=1/0,r=-1/0,i=1/0,a=-1/0,o=0,s=t.length;o<s;o++){var c=e[t[o]],l=c.x,u=c.y;l<n&&(n=l),l>r&&(r=l),u<i&&(i=u),u>a&&(a=u)}return{x:[n,r],y:[i,a]}}},{key:`getBBox`,value:function(){return this.nodeExtent}},{key:`getCustomBBox`,value:function(){return this.customBBox}},{key:`setCustomBBox`,value:function(e){return this.customBBox=e,this.scheduleRender(),this}},{key:`kill`,value:function(){var e,t,n,r,i;this.emit(`kill`),this.removeAllListeners(),this.camera.cancelAnimation(),this.unbindCameraHandlers(),window.removeEventListener(`resize`,this.activeListeners.handleResize),this.mouseCaptor.kill(),this.touchCaptor.kill(),this.internals.hoverResolver.kill(),this.unbindGraphHandlers(),this.clearIndices(),this.clearState(),this.internals.nodeDataCache={},this.internals.edgeDataCache={},this.renderFrame&&=(cancelAnimationFrame(this.renderFrame),null);for(var a=this.container;a.firstChild;)a.removeChild(a.firstChild);this.nodeProgram.kill(),this.nodeFramePass.kill(),this.edgeProgram.kill(),this.edgeFramePass.kill(),this.internals.labelProgram.kill(),(e=this.internals.edgeLabelProgram)==null||e.kill(),(t=this.internals.edgeLabelBackgroundProgram)==null||t.kill(),this.internals.backdropProgram.kill(),this.internals.labelBackgroundProgram.kill(),(n=this.internals.attachmentProgram)==null||n.kill(),(r=this.internals.attachmentManager)==null||r.kill(),this.internals.attachmentProgram=null,this.internals.attachmentManager=null;var o=B(this.customLayerPrograms.values()),s;try{for(o.s();!(s=o.n()).done;)s.value.program.kill()}catch(e){o.e(e)}finally{o.f()}if(this.customLayerPrograms.clear(),this.sdfAtlas&&=null,this.internals.nodeDataTexture&&(this.internals.nodeDataTexture.kill(),this.internals.nodeDataTexture=null),this.internals.nodeFrameTexture&&(this.internals.nodeFrameTexture.kill(),this.internals.nodeFrameTexture=null),this.internals.edgeDataTexture&&(this.internals.edgeDataTexture.kill(),this.internals.edgeDataTexture=null),this.internals.edgeFrameTexture&&(this.internals.edgeFrameTexture.kill(),this.internals.edgeFrameTexture=null),this.webGLContext){var c;(c=this.webGLContext.getExtension(`WEBGL_lose_context`))==null||c.loseContext(),this.webGLContext=null}for(var l in(i=this.gestureHint)==null||i.kill(),this.gestureHint=null,this.mouseLayer.remove(),this.extraElements)this.extraElements[l].remove();this.extraElements={}}},{key:`scaleSize`,value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.camera.ratio;return e/this.internals.settings.zoomToSizeRatioFunction(t)*(this.getSetting(`itemSizesReference`)===`positions`?t*this.graphToViewportRatio:1)}},{key:`getStageCanvas`,value:function(){return this.stageCanvas}},{key:`getMouseLayer`,value:function(){return this.mouseLayer}}])}(_r);function qc(e){let t=[...e.nodes()],n=t.length;if(n!==0)for(let r=0;r<n;r++){let i=2*Math.PI*r/n;e.setNodeAttribute(t[r],`x`,Math.cos(i)),e.setNodeAttribute(t[r],`y`,Math.sin(i))}}function Jc(e,t={}){let n=t.nodeRatio??.05,r=t.edgeRatio??.0045,i=1/0,a=-1/0,o=1/0,s=-1/0;for(let t of e.nodes()){let n=Number(e.getNodeAttribute(t,`x`)),r=Number(e.getNodeAttribute(t,`y`));Number.isFinite(n)&&Number.isFinite(r)&&(n<i&&(i=n),n>a&&(a=n),r<o&&(o=r),r>s&&(s=r))}let c=Math.max(a-i,s-o,1e-6),l=c*n,u=c*r;for(let t of e.nodes())e.setNodeAttribute(t,`size`,l*(.8+.3*e.degree(t)));for(let t of e.edges())e.setEdgeAttribute(t,`size`,u)}function $(e,t){let n=document.createElement(e);return t&&(n.className=t),n}function Yc(e,t){let n=e.querySelector(`[data-sf-status]`);n||(n=$(`p`,`sf-graph-status`),n.setAttribute(`data-sf-status`,``),e.append(n)),n.textContent=t}function Xc(e){return typeof e==`string`&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(e)?e.slice(0,10):typeof e==`object`?JSON.stringify(e):String(e)}function Zc(e,t,n){e.replaceChildren();let r=$(`button`,`sf-card-close`);r.type=`button`,r.setAttribute(`aria-label`,`Close entity card`),r.textContent=`×`;let i=$(`h3`);i.textContent=t.label;let a=$(`span`,`sf-kind-chip`);a.textContent=t.kind,a.style.backgroundColor=n;let o=$(`dl`);for(let[e,n]of Object.entries(t.fields)){if(n==null)continue;let t=$(`div`),r=$(`dt`);r.textContent=e.replace(/[_-]+/g,` `);let i=$(`dd`);i.textContent=Xc(n),t.append(r,i),o.append(t)}let s=$(`a`);s.href=t.href,s.textContent=`Open profile`,e.append(r,a,i,o,s),e.hidden=!1,r.addEventListener(`click`,()=>{e.hidden=!0})}async function Qc(e){let t=e.querySelector(`[data-sf-stage]`),n=e.querySelector(`[data-sf-filters]`),r=e.querySelector(`[data-sf-list]`),i=e.querySelector(`[data-sf-list-items]`),a=e.querySelector(`[data-sf-card]`),o=e.querySelector(`[data-sf-toggle-list]`);if(!t||!n||!r||!i||!a||!o)return;let s;try{let t=await fetch(e.getAttribute(`data-src`)??`/graph.json`,{headers:{Accept:`application/json`}});if(!t.ok)throw Error(`HTTP ${t.status}`);s=await t.json()}catch(e){Yc(t,`Could not load the graph (${e instanceof Error?e.message:`unknown error`}). Check that the build produced graph.json.`);return}if(s.nodes.length===0){Yc(t,`No entities yet. Add YAML files to content/entities and rebuild.`);return}let c=new R({multi:!0,type:`undirected`});for(let e of s.nodes)c.addNode(e.id,{...e});for(let e of s.edges)c.addEdgeWithKey(e.id,e.source,e.target,{color:e.color,size:e.weight});qc(c),Ct.default.assign(c,{iterations:120,settings:Ct.default.inferSettings(c)}),Jc(c);let l=new Map(s.edges.map(e=>[e.id,e])),u=new Map;for(let e of s.edges)e.confidence===`low`&&(u.set(e.source,(u.get(e.source)??0)+1),u.set(e.target,(u.get(e.target)??0)+1));let d=$(`div`,`sf-graph-edge-tip`);d.setAttribute(`aria-hidden`,`true`),d.hidden=!0,t.append(d);let f=(e,t,n)=>{let r=l.get(e);if(!r)return;d.replaceChildren();let i=$(`strong`);i.textContent=r.kind;let a=$(`span`);if(a.textContent=`${r.evidence.length} evidence`,d.append(i,a),r.confidence===`low`){let e=$(`span`,`sf-confidence-chip`);e.setAttribute(`data-confidence`,`low`),e.textContent=`Unverified`,d.append(e)}d.style.left=`${t}px`,d.style.top=`${n}px`,d.hidden=!1},p=new Map(s.legend.map(e=>[e.kind,e.color])),m=new Kc(c,t,{customNodeState:{isActive:!1},customGraphState:{hasSelection:!1},styles:{nodes:[{color:{attribute:`color`},size:{attribute:`size`},label:{attribute:`label`}},{whenState:`isHidden`,then:{visibility:`hidden`}},{whenState:`isActive`,then:{labelVisibility:`visible`}}],edges:[{color:{attribute:`color`},size:{attribute:`size`}},{when:(e,t,n)=>n.hasSelection,then:{color:`#d8dee3`}}]}}),h=null,g=e=>{h&&m.setNodeState(h,{isActive:!1}),h=e,m.setNodeState(e,{isActive:!0}),m.setGraphState({hasSelection:!0}),m.refresh({skipIndexation:!0});let t=s.nodes.find(t=>t.id===e);t&&Zc(a,t,p.get(t.kind)??t.color)},_=()=>{h&&m.setNodeState(h,{isActive:!1}),h=null,m.setGraphState({hasSelection:!1}),m.refresh({skipIndexation:!0}),a.hidden=!0};m.on(`clickNode`,({node:e})=>g(e)),m.on(`clickStage`,()=>_()),m.on(`enterEdge`,({edge:e,event:t})=>f(e,t.x,t.y)),m.on(`leaveEdge`,()=>{d.hidden=!0}),t.querySelector(`[data-sf-status]`)?.remove(),e.__sf={sigma:m,graph:c,doc:s};for(let e of s.legend){let t=$(`label`,`sf-graph-filter`),r=document.createElement(`input`);r.type=`checkbox`,r.checked=!0;let i=$(`span`,`sf-dot`);i.style.backgroundColor=e.color;let a=$(`span`);a.textContent=`${e.kind} (${e.nodeCount})`,t.append(r,i,a),n.append(t),r.addEventListener(`change`,()=>{for(let t of s.nodes)t.kind===e.kind&&m.setNodeState(t.id,{isHidden:!r.checked});if(h&&!r.checked){let t=s.nodes.find(e=>e.id===h);t&&t.kind===e.kind&&_()}m.refresh({skipIndexation:!0})})}for(let e of s.nodes){let t=$(`li`),n=$(`button`);n.type=`button`;let r=$(`span`,`sf-dot`);r.style.backgroundColor=e.color;let a=$(`span`);if(a.textContent=`${e.label} (${e.kind})`,n.append(r,a),(u.get(e.id)??0)>0){let e=$(`span`,`sf-confidence-chip`);e.setAttribute(`data-confidence`,`low`),e.textContent=`Unverified`,n.append(e)}n.addEventListener(`click`,()=>g(e.id)),t.append(n),i.append(t)}o.addEventListener(`click`,()=>{let e=o.getAttribute(`aria-expanded`)===`true`;o.setAttribute(`aria-expanded`,String(!e)),r.hidden=e})}for(let e of document.querySelectorAll(`[data-sf-graph]`))Qc(e);