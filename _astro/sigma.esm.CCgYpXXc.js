import{n as e}from"./GraphIsland.astro_astro_type_script_index_0_lang.DfjA-Ybz.js";import{t}from"./events.DhMpV5gO.js";import{t as n}from"./is-graph.CzwcA7Pz.js";function r(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){if(e){if(typeof e==`string`)return r(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function a(e){if(Array.isArray(e))return e}function o(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function s(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(e,t){return a(e)||o(e,t)||i(e,t)||s()}function l(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=i(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,s=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,o=e},f:function(){try{s||n.return==null||n.return()}finally{if(c)throw o}}}}function u(){return Float32Array.of(1,0,0,0,1,0,0,0,1)}function d(e,t,n){return e[0]=t,e[4]=typeof n==`number`?n:t,e}function f(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=n,e[3]=-n,e[4]=r,e}function p(e,t,n){return e[6]=t,e[7]=n,e}function m(e,t){var n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],d=t[0],f=t[1],p=t[2],m=t[3],h=t[4],g=t[5],_=t[6],v=t[7],y=t[8];return e[0]=d*n+f*a+p*c,e[1]=d*r+f*o+p*l,e[2]=d*i+f*s+p*u,e[3]=m*n+h*a+g*c,e[4]=m*r+h*o+g*l,e[5]=m*i+h*s+g*u,e[6]=_*n+v*a+y*c,e[7]=_*r+v*o+y*l,e[8]=_*i+v*s+y*u,e}function h(e,t){var n=Math.cos(t),r=Math.sin(t);return{x:n*e.x+r*e.y,y:-r*e.x+n*e.y}}function g(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,r=e[0],i=e[1],a=e[3],o=e[4],s=e[6],c=e[7],l=t.x,u=t.y;return{x:l*r+u*a+s*n,y:l*i+u*o+c*n}}function _(e,t){var n=e.height/e.width,r=t.height/t.width;return n<1&&r>1||n>1&&r<1?1:Math.min(Math.max(r,1/r),Math.max(1/n,n))}function v(e,t,n,r,i){var a=e.angle,o=e.ratio,s=e.x,c=e.y,l=t.width,h=t.height,g=u(),v=Math.min(l,h)-2*r,y=_(t,n);return i?(m(g,p(u(),s,c)),m(g,d(u(),o)),m(g,f(u(),a)),m(g,d(u(),l/v/2/y,h/v/2/y))):(m(g,d(u(),v/l*2*y,v/h*2*y)),m(g,f(u(),-a)),m(g,d(u(),1/o)),m(g,p(u(),-s,-c))),g}function y(e,t,n){var r=g(e,{x:Math.cos(t.angle),y:Math.sin(t.angle)},0),i=r.x,a=r.y;return 1/Math.sqrt(i**2+a**2)/n.width}function b(e,t,n,r,i){return[Math.floor(t/i*r),Math.floor(e.drawingBufferHeight/i-n/i*r)]}var x={black:`#000000`,silver:`#C0C0C0`,gray:`#808080`,grey:`#808080`,white:`#FFFFFF`,maroon:`#800000`,red:`#FF0000`,purple:`#800080`,fuchsia:`#FF00FF`,green:`#008000`,lime:`#00FF00`,olive:`#808000`,yellow:`#FFFF00`,navy:`#000080`,blue:`#0000FF`,teal:`#008080`,aqua:`#00FFFF`,darkblue:`#00008B`,mediumblue:`#0000CD`,darkgreen:`#006400`,darkcyan:`#008B8B`,deepskyblue:`#00BFFF`,darkturquoise:`#00CED1`,mediumspringgreen:`#00FA9A`,springgreen:`#00FF7F`,cyan:`#00FFFF`,midnightblue:`#191970`,dodgerblue:`#1E90FF`,lightseagreen:`#20B2AA`,forestgreen:`#228B22`,seagreen:`#2E8B57`,darkslategray:`#2F4F4F`,darkslategrey:`#2F4F4F`,limegreen:`#32CD32`,mediumseagreen:`#3CB371`,turquoise:`#40E0D0`,royalblue:`#4169E1`,steelblue:`#4682B4`,darkslateblue:`#483D8B`,mediumturquoise:`#48D1CC`,indigo:`#4B0082`,darkolivegreen:`#556B2F`,cadetblue:`#5F9EA0`,cornflowerblue:`#6495ED`,rebeccapurple:`#663399`,mediumaquamarine:`#66CDAA`,dimgray:`#696969`,dimgrey:`#696969`,slateblue:`#6A5ACD`,olivedrab:`#6B8E23`,slategray:`#708090`,slategrey:`#708090`,lightslategray:`#778899`,lightslategrey:`#778899`,mediumslateblue:`#7B68EE`,lawngreen:`#7CFC00`,chartreuse:`#7FFF00`,aquamarine:`#7FFFD4`,skyblue:`#87CEEB`,lightskyblue:`#87CEFA`,blueviolet:`#8A2BE2`,darkred:`#8B0000`,darkmagenta:`#8B008B`,saddlebrown:`#8B4513`,darkseagreen:`#8FBC8F`,lightgreen:`#90EE90`,mediumpurple:`#9370DB`,darkviolet:`#9400D3`,palegreen:`#98FB98`,darkorchid:`#9932CC`,yellowgreen:`#9ACD32`,sienna:`#A0522D`,brown:`#A52A2A`,darkgray:`#A9A9A9`,darkgrey:`#A9A9A9`,lightblue:`#ADD8E6`,greenyellow:`#ADFF2F`,paleturquoise:`#AFEEEE`,lightsteelblue:`#B0C4DE`,powderblue:`#B0E0E6`,firebrick:`#B22222`,darkgoldenrod:`#B8860B`,mediumorchid:`#BA55D3`,rosybrown:`#BC8F8F`,darkkhaki:`#BDB76B`,mediumvioletred:`#C71585`,indianred:`#CD5C5C`,peru:`#CD853F`,chocolate:`#D2691E`,tan:`#D2B48C`,lightgray:`#D3D3D3`,lightgrey:`#D3D3D3`,thistle:`#D8BFD8`,orchid:`#DA70D6`,goldenrod:`#DAA520`,palevioletred:`#DB7093`,crimson:`#DC143C`,gainsboro:`#DCDCDC`,plum:`#DDA0DD`,burlywood:`#DEB887`,lightcyan:`#E0FFFF`,lavender:`#E6E6FA`,darksalmon:`#E9967A`,violet:`#EE82EE`,palegoldenrod:`#EEE8AA`,lightcoral:`#F08080`,khaki:`#F0E68C`,aliceblue:`#F0F8FF`,honeydew:`#F0FFF0`,azure:`#F0FFFF`,sandybrown:`#F4A460`,wheat:`#F5DEB3`,beige:`#F5F5DC`,whitesmoke:`#F5F5F5`,mintcream:`#F5FFFA`,ghostwhite:`#F8F8FF`,salmon:`#FA8072`,antiquewhite:`#FAEBD7`,linen:`#FAF0E6`,lightgoldenrodyellow:`#FAFAD2`,oldlace:`#FDF5E6`,magenta:`#FF00FF`,deeppink:`#FF1493`,orangered:`#FF4500`,tomato:`#FF6347`,hotpink:`#FF69B4`,coral:`#FF7F50`,darkorange:`#FF8C00`,lightsalmon:`#FFA07A`,orange:`#FFA500`,lightpink:`#FFB6C1`,pink:`#FFC0CB`,gold:`#FFD700`,peachpuff:`#FFDAB9`,navajowhite:`#FFDEAD`,moccasin:`#FFE4B5`,bisque:`#FFE4C4`,mistyrose:`#FFE4E1`,blanchedalmond:`#FFEBCD`,papayawhip:`#FFEFD5`,lavenderblush:`#FFF0F5`,seashell:`#FFF5EE`,cornsilk:`#FFF8DC`,lemonchiffon:`#FFFACD`,floralwhite:`#FFFAF0`,snow:`#FFFAFA`,lightyellow:`#FFFFE0`,ivory:`#FFFFF0`},S=new Int8Array(4),C=new Int32Array(S.buffer,0,1),w=new Float32Array(S.buffer,0,1),T=/^\s*rgba?\s*\(/,E=/^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;function D(e){var t=0,n=0,r=0,i=1,a=e.toLowerCase();if(a===`transparent`)return{r:0,g:0,b:0,a:0};if(a in x)return D(x[a]);if(e[0]===`#`)e.length===4?(t=parseInt(e.charAt(1)+e.charAt(1),16),n=parseInt(e.charAt(2)+e.charAt(2),16),r=parseInt(e.charAt(3)+e.charAt(3),16)):(t=parseInt(e.charAt(1)+e.charAt(2),16),n=parseInt(e.charAt(3)+e.charAt(4),16),r=parseInt(e.charAt(5)+e.charAt(6),16)),e.length===9&&(i=parseInt(e.charAt(7)+e.charAt(8),16)/255);else if(T.test(e)){var o=e.match(E);o&&(t=+o[1],n=+o[2],r=+o[3],o[4]&&(i=+o[4]))}return{r:t,g:n,b:r,a:i}}function O(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=D(e),r=n.r,i=n.g,a=n.b,o=n.a;return t?[r/255*o,i/255*o,a/255*o,o]:[r/255,i/255,a/255,o]}var k={};for(var A in x)k[A]=M(x[A]),k[x[A]]=k[A];function j(e,t,n,r,i){return C[0]=r<<24|n<<16|t<<8|e,i&&(C[0]&=4278190079),w[0]}function M(e){if(e=e.toLowerCase(),k[e]!==void 0)return k[e];var t=D(e),n=t.r,r=t.g,i=t.b,a=t.a;a=a*255|0;var o=j(n,r,i,a,!0);return k[e]=o,o}function N(e,t){w[0]=M(e);var n=C[0];return t&&(n|=16777216),[n&255,n>>8&255,n>>16&255,n>>24&255]}function P(e){var t=e>>>8&255,n=e>>>16&255,r=e>>>24&255;return((e&255)<<24|r<<16|n<<8|t)>>>0}function F(e,t,n,r){return(n<<24|t<<16|e<<8|r)>>>0}function I(e,t,n,r,i,a){var o=c(b(e,n,r,i,a),2),s=o[0],l=o[1],u=new Uint8Array(4);e.bindFramebuffer(e.FRAMEBUFFER,t),e.readPixels(s,l,1,1,e.RGBA,e.UNSIGNED_BYTE,u);var d=c(u,4);return[d[0],d[1],d[2],d[3]]}function ee(e){var t=D(e),n=t.r,r=t.g,i=t.b,a=t.a;return`vec4(${(n/255).toFixed(6)}, ${(r/255).toFixed(6)}, ${(i/255).toFixed(6)}, ${a.toFixed(6)})`}function te(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function L(e){var t=te(e,`string`);return typeof t==`symbol`?t:t+``}function R(e,t,n){return(t=L(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ne(Object(n),!0).forEach(function(t){R(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function B(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,L(r.key),r)}}function V(e,t,n){return t&&re(e.prototype,t),n&&re(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ie(e){return ie=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ie(e)}function ae(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ae=function(){return!!e})()}function oe(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function se(e,t){if(t&&(typeof t==`object`||typeof t==`function`))return t;if(t!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return oe(e)}function H(e,t,n){return t=ie(t),se(e,ae()?Reflect.construct(t,n||[],ie(e).constructor):t.apply(e,n))}function ce(e,t){return ce=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ce(e,t)}function U(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ce(e,t)}function le(e){if(Array.isArray(e))return r(e)}function ue(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function de(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(e){return le(e)||ue(e)||i(e)||de()}function G(e){"@babel/helpers - typeof";return G=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},G(e)}function fe(e){return G(e)===`object`&&e!==null&&`attribute`in e}function pe(){return{name:`circle`,glsl:`
float sdf_circle(vec2 uv, float size) {
  return length(uv) - size;
}
`,uniforms:[]}}function me(e){var t=WebGL2RenderingContext.UNSIGNED_BYTE,n=e?.color??{attribute:`color`};return fe(n)?{name:`fill`,uniforms:[],attributes:[{name:`fillColor`,size:4,type:t,normalized:!0,source:n.attribute}],glsl:`
vec4 layer_fill(vec4 v_fillColor) {
  return v_fillColor;
}
`}:{name:`fill`,uniforms:[],attributes:[],glsl:`
vec4 layer_fill() {
  return ${ee(n)};
}
`}}function he(e,t){if(typeof e==`string`){var n=c(O(e).map(function(e){return e.toFixed(6)}),4);return{glsl:`vec4(${n[0]}, ${n[1]}, ${n[2]}, ${n[3]})`,attributes:[],needsNodeColors:!1}}if(`node`in e&&e.node)return{glsl:e.node===`source`?`v_sourceColor`:`v_targetColor`,attributes:[],needsNodeColors:!0};var r=e;return{glsl:`v_${t}`,attributes:[{name:`a_${t}`,size:4,type:WebGL2RenderingContext.UNSIGNED_BYTE,normalized:!0,source:r.attribute,defaultValue:r.default}],needsNodeColors:!1}}function ge(e){var t=e?.color;if(t===void 0)return{name:`plain`,glsl:`
// Plain solid color layer
vec4 layer_plain(EdgeContext ctx) {
  return v_color;
}
`,uniforms:[],attributes:[]};var n=he(t,`plainColor`);return{name:`plain`,glsl:`
// Plain solid color layer
vec4 layer_plain(EdgeContext ctx) {
  return ${n.glsl};
}
`,uniforms:[],attributes:n.attributes,needsNodeColors:n.needsNodeColors}}function _e(){return{name:`straight`,segments:1,minBodyLengthRatio:0,linearParameterization:!0,glsl:`
// Position at parameter t ∈ [0, 1]
vec2 path_straight_position(float t, vec2 source, vec2 target) {
  return mix(source, target, t);
}

// Total length of the path (analytical - more efficient than sampling)
float path_straight_length(vec2 source, vec2 target) {
  return length(target - source);
}
`,uniforms:[],attributes:[]}}function ve(e){var t=(e??{}).segments;return{name:`loop`,segments:t===void 0?32:t,glsl:`
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
`,needsNodeSize:!0,uniforms:[],attributes:[{name:`loopRadius`,size:1,type:WebGL2RenderingContext.FLOAT},{name:`loopAngle`,size:1,type:WebGL2RenderingContext.FLOAT},{name:`loopSpread`,size:1,type:WebGL2RenderingContext.FLOAT},{name:`loopFixedOrientation`,size:1,type:WebGL2RenderingContext.FLOAT}],variables:{loopRadius:{type:`number`,default:4},loopAngle:{type:`number`,default:Math.PI/4},loopSpread:{type:`number`,default:80*Math.PI/180},loopFixedOrientation:{type:`number`,default:0}},spread:{variable:`loopRadius`,compute:function(e){return e+4}}}}var ye=t();function be(e){return G(e)===`object`&&`glsl`in e&&!(`attributes`in e)}function xe(e){return G(e)===`object`&&`glsl`in e&&!(`attributes`in e)}var Se={shapes:[pe()],variables:{},layers:[me()],label:{},backdrop:{},labelAttachments:{}},Ce={paths:[_e(),ve()],extremities:[],variables:{},layers:[ge()],defaultHead:`none`,defaultTail:`none`,label:{}},we=[`nodes`,`topNodes`],Te=[`edges`,`topEdges`],Ee=[].concat(Te,we),De={nodes:Se,edges:Ce,depthLayers:W(Ee)},Oe={linear:function(e){return e},quadraticIn:function(e){return e*e},quadraticOut:function(e){return e*(2-e)},quadraticInOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)},cubicIn:function(e){return e*e*e},cubicOut:function(e){return--e*e*e+1},cubicInOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)},exponentialIn:function(e){return e===0?0:2**(10*(e-1))},exponentialOut:function(e){return e===1?1:1-2**(-10*e)},exponentialInOut:function(e){return e===0?0:e===1?1:e<.5?2**(10*(2*e-1))/2:(2-2**(-10*(2*e-1)))/2}};function ke(e){return e?typeof e==`function`?e:Oe[e]:Oe.linear}function Ae(e){return G(e)===`object`&&e!==null&&`attribute`in e}function je(e){return typeof e==`function`}function Me(e){return G(e)===`object`&&e!==null&&`when`in e&&typeof e.when==`function`&&`then`in e}function Ne(e){return G(e)===`object`&&e!==null&&`whenState`in e&&`then`in e}function Pe(e){return G(e)===`object`&&e!==null&&`whenData`in e&&`then`in e}var Fe={isHovered:!1,isLabelHovered:!1,isHidden:!1,isHighlighted:!1,isDragged:!1},Ie={isHovered:!1,isLabelHovered:!1,isHidden:!1,isHighlighted:!1,parallelIndex:0,parallelCount:1},Le={isIdle:!0,isPanning:!1,isZooming:!1,isDragging:!1,hasHovered:!1,hasHighlighted:!1};function Re(e){return z(z({},Fe),e)}function ze(e){return z(z({},Ie),e)}function Be(e){return z(z({},Le),e)}var Ve={x:{attribute:`x`},y:{attribute:`y`},size:{whenState:`isHovered`,then:{attribute:`size`,defaultValue:12},else:{attribute:`size`,defaultValue:10}},color:{attribute:`color`,defaultValue:`#666`},label:{attribute:`label`},visibility:{whenState:`isHidden`,then:`hidden`,else:`visible`},labelVisibility:{whenState:`isHovered`,then:`visible`,else:`auto`},backdropVisibility:{whenState:`isHovered`,then:`visible`,else:`hidden`},backdropColor:`#ffffff`,backdropShadowColor:`rgba(0, 0, 0, 0.5)`,backdropShadowBlur:12,backdropPadding:6},He={size:{attribute:`size`,defaultValue:1},color:{attribute:`color`,defaultValue:`#ccc`},label:{attribute:`label`},visibility:{whenState:`isHidden`,then:`hidden`,else:`visible`}},Ue={nodes:Ve,edges:He},We={nodes:z(z({},Ve),{},{depth:{whenState:`isHovered`,then:`topNodes`,else:`nodes`}}),edges:z(z({},He),{},{depth:{whenState:[`isHighlighted`,`isHovered`],then:`topEdges`,else:`edges`}})};function Ge(e){return`min`in e||`max`in e||`minValue`in e||`maxValue`in e||`easing`in e}function Ke(e){return`dict`in e}function qe(e,t){return typeof e==`string`?t[e]===!0:Array.isArray(e)?e.every(function(e){return t[e]===!0}):G(e)===`object`&&e!==null&&Object.entries(e).every(function(e){var n=c(e,2),r=n[0],i=n[1];return t[r]===i})}function Je(e,t){var n=t[e.attribute];return n===void 0?e.defaultValue:n}function Ye(e,t,n){var r=t[e.attribute];if(r===void 0)return e.defaultValue;var i=Number(r);if(isNaN(i))return e.defaultValue;if(e.min===void 0&&e.max===void 0)return i;var a=e.minValue??i,o=e.maxValue??i;if(o===a)return e.min??i;var s=(i-a)/(o-a);s=Math.max(0,Math.min(1,s)),s=ke(e.easing)(s);var c=e.min??0,l=e.max??1;return c+s*(l-c)}function Xe(e,t){var n=t[e.attribute];if(n===void 0)return e.defaultValue;var r=String(n);return r in e.dict?e.dict[r]:e.defaultValue}function Ze(e,t,n){return Ke(e)?Xe(e,t):Ge(e)?Ye(e,t):Je(e,t)}function Qe(e,t){return typeof e==`string`?!!t[e]:Array.isArray(e)?e.every(function(e){return!!t[e]}):G(e)===`object`&&e!==null&&Object.entries(e).every(function(e){var n=c(e,2),r=n[0],i=n[1];return t[r]===i})}function $e(e,t,n,r,i,a){if(e==null)return a;if(G(e)!==`object`&&typeof e!=`function`)return e;if(Me(e)){var o=e.when(t,n,r,i)?e.then:e.else;return o===void 0?a:$e(o,t,n,r,i,a)}if(Ne(e)){var s=qe(e.whenState,n)?e.then:e.else;return s===void 0?a:$e(s,t,n,r,i,a)}if(Pe(e)){var c=Qe(e.whenData,t)?e.then:e.else;return c===void 0?a:$e(c,t,n,r,i,a)}return je(e)?e(t,n,r,i)??a:Ae(e)?Ze(e,t)??a:e}function et(e){return e==null?`static`:Me(e)?`graph-state`:Ne(e)?K(`item-state`,K(et(e.then),e.else===void 0?`static`:et(e.else))):Pe(e)?K(et(e.then),e.else===void 0?`static`:et(e.else)):je(e)?`graph-state`:(Ae(e),`static`)}function K(e,t){return e===`graph-state`||t===`graph-state`?`graph-state`:e===`item-state`||t===`item-state`?`item-state`:`static`}function tt(e){if(!e)return{dependency:`static`,xAttribute:null,yAttribute:null};var t=Array.isArray(e)?e:[e],n=`static`,r=null,i=null,a=l(t),o;try{for(a.s();!(o=a.n()).done;){var s=o.value;if(`matchData`in s&&`cases`in s)for(var u=s.cases,d=0,f=Object.values(u);d<f.length;d++)for(var p=f[d],m=0,h=Object.values(p);m<h.length;m++){var g=h[m];n=K(n,et(g))}else if(`matchState`in s&&`cases`in s){n=K(n,`item-state`);for(var _=s.cases,v=0,y=Object.values(_);v<y.length;v++)for(var b=y[v],x=0,S=Object.values(b);x<S.length;x++){var C=S[x];n=K(n,et(C))}}else if(`when`in s&&`then`in s)n=`graph-state`;else if(`whenState`in s){n=K(n,`item-state`);var w=s.then;if(w&&G(w)===`object`)for(var T=0,E=Object.values(w);T<E.length;T++){var D=E[T];n=K(n,et(D))}var O=s.else;if(O&&G(O)===`object`)for(var k=0,A=Object.values(O);k<A.length;k++){var j=A[k];n=K(n,et(j))}}else if(`whenData`in s){var M=s.then;if(M&&G(M)===`object`)for(var N=0,P=Object.values(M);N<P.length;N++){var F=P[N];n=K(n,et(F))}var I=s.else;if(I&&G(I)===`object`)for(var ee=0,te=Object.values(I);ee<te.length;ee++){var L=te[ee];n=K(n,et(L))}}else for(var R=0,ne=Object.entries(s);R<ne.length;R++){var z=c(ne[R],2),B=z[0],re=z[1];if(!it.has(B)&&(n=K(n,et(re)),(B===`x`||B===`y`)&&Ae(re))){var V=re.attribute;B===`x`&&!r&&(r=V),B===`y`&&!i&&(i=V)}}}}catch(e){a.e(e)}finally{a.f()}return{dependency:n,xAttribute:r,yAttribute:i}}var nt={size:10,color:`#666`,opacity:1,shape:`circle`,rotationAlignment:`viewport`,labelRotationAlignment:`viewport`,visibility:`visible`,depth:`nodes`,zIndex:0,label:``,labelColor:`#000`,labelSize:12,labelFont:`sans-serif`,labelVisibility:`auto`,labelPosition:`right`,labelAngle:0,labelDepth:`nodes`,backdropVisibility:`hidden`,backdropColor:`transparent`,backdropShadowColor:`transparent`,backdropShadowBlur:0,backdropPadding:0,backdropBorderColor:`transparent`,backdropBorderWidth:0,backdropCornerRadius:0,backdropLabelPadding:-1,backdropArea:`both`,labelAttachment:null,labelAttachmentPlacement:`below`},rt={size:1,color:`#ccc`,opacity:1,path:`straight`,selfLoopPath:`loop`,parallelSpread:.25,tail:`none`,head:`none`,visibility:`visible`,depth:`edges`,zIndex:0,label:``,labelColor:`#666`,labelVisibility:`auto`,labelDepth:`edges`},it=new Set([`when`,`whenState`,`whenData`,`then`,`else`]),at=Object.keys(nt),ot=Object.values(nt),st=Object.keys(rt),ct=Object.values(rt);function lt(e,t,n,r,i,a,o){for(var s in t)if(!it.has(s)){var c=e[s]??o[s];e[s]=$e(t[s],n,r,i,a,c)}`depth`in t&&!(`labelDepth`in t)&&(e.labelDepth=e.depth)}function ut(e,t,n,r,i,a,o){var s=l(t),c;try{for(s.s();!(c=s.n()).done;){var u=c.value;if(`matchData`in u&&`cases`in u){var d=String(n[u.matchData]??``),f=u.cases;d in f&&lt(e,f[d],n,r,i,a,o)}else if(`matchState`in u&&`cases`in u){var p=String(r[u.matchState]??``),m=u.cases;p in m&&lt(e,m[p],n,r,i,a,o)}else if(`when`in u&&`then`in u){var h=u.when;if(!h(n,r,i,a))continue;lt(e,u.then,n,r,i,a,o)}else if(`whenState`in u&&`then`in u){if(!qe(u.whenState,r))continue;lt(e,u.then,n,r,i,a,o)}else if(`whenData`in u&&`then`in u){if(!Qe(u.whenData,n))continue;lt(e,u.then,n,r,i,a,o)}else lt(e,u,n,r,i,a,o)}}catch(e){s.e(e)}finally{s.f()}}function dt(e,t,n,r,i,a){for(var o=a||{},s=o,c=0,l=at.length;c<l;c++)s[at[c]]=ot[c];return s.x=void 0,s.y=void 0,s.labelBackgroundColor=void 0,s.labelBackgroundPadding=void 0,s.labelCursor=void 0,e?(ut(s,Array.isArray(e)?e:[e],t,n,r,i,nt),o):(s.x=t.x??0,s.y=t.y??0,o.size=t.size??10,o.color=t.color??`#666`,o.label=t.label??``,o)}function ft(e,t,n,r,i,a){for(var o=a||{},s=o,c=0,l=st.length;c<l;c++)s[st[c]]=ct[c];return e?(ut(s,Array.isArray(e)?e:[e],t,n,r,i,rt),typeof s.labelPosition==`number`&&(s.labelPosition=void 0),o):(o.size=t.size??1,o.color=t.color??`#ccc`,o.label=t.label??``,o)}function pt(e,t,n){if(e==null)return n;if(typeof e==`function`)return e(t)??n;if(G(e)===`object`&&`when`in e){var r=e,i=r.when(t)?r.then:r.else;return i===void 0?n:typeof i==`function`?i(t)??n:i??n}if(G(e)===`object`&&`whenState`in e){var a=e,o=qe(a.whenState,t)?a.then:a.else;return o===void 0?n:typeof o==`function`?o(t)??n:o??n}return e??n}function mt(e,t){var n={};if(!e)return n;var r=l(Array.isArray(e)?e:[e]),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(`when`in a&&`then`in a){var o=a.when(t)?a.then:a.else;o&&G(o)===`object`&&ht(n,o,t)}else if(`whenState`in a&&`then`in a){var s=qe(a.whenState,t)?a.then:a.else;s&&G(s)===`object`&&ht(n,s,t)}else ht(n,a,t)}}catch(e){r.e(e)}finally{r.f()}return n}function ht(e,t,n){for(var r=0,i=Object.entries(t);r<i.length;r++){var a=c(i[r],2),o=a[0],s=a[1];it.has(o)||(e[o]=pt(s,n))}}var gt=function(e){function t(){var e;return B(this,t),e=H(this,t),e.rawEmitter=e,e}return U(t,e),V(t)}(ye.EventEmitter),_t=De;function vt(e,t){var n=t.size;if(n!==0){var r=e.length;e.length+=n;var i=0;t.forEach(function(t){e[r+i]=t,i++})}}function yt(e){e||={};for(var t=0,n=arguments.length<=1?0:arguments.length-1;t<n;t++){var r=t+1<1||arguments.length<=t+1?void 0:arguments[t+1];r&&Object.assign(e,r)}return e}function bt(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&t[n]!==e[n])return!0;return!1}function xt(e,t){var n=e,r=t;for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)&&n[i]!==r[i])return!1;for(var a in r)if(Object.prototype.hasOwnProperty.call(r,a)&&r[a]!==n[a])return!1;return!0}function St(e,t,n){n?e.add(t):e.delete(t)}var Ct=e(n()),wt={easing:`quadraticInOut`,duration:150};function Tt(e){return e.labelVisibility===`visible`&&e.visibility!==`hidden`}function Et(e){return e.backdropVisibility===`visible`&&e.visibility!==`hidden`}function Dt(e){return[+(e.rotationAlignment===`graph`),+(e.labelRotationAlignment===`graph`)]}function Ot(e,t,n){var r=e[t];if(r)for(var i=0;i<r.length;i++){var a=r[i];if(!(n<a.offset||n>=a.offset+a.count)){if(a.count===1)r.splice(i,1);else if(n===a.offset)a.offset++,a.count--;else if(n===a.offset+a.count-1)a.count--;else{var o=n+1,s=a.offset+a.count-o;a.count=n-a.offset,r.splice(i+1,0,{offset:o,count:s})}return}}}function kt(e,t,n){if(!e[t])e[t]=[{offset:n,count:1}];else{for(var r=e[t],i=r.length,a=0;a<r.length;a++)if(n<r[a].offset){i=a;break}var o=i>0?r[i-1]:null,s=i<r.length?r[i]:null,c=o&&o.offset+o.count===n,l=s&&n+1===s.offset;c&&l?(o.count+=1+s.count,r.splice(i,1)):c?o.count++:l?(s.offset--,s.count++):r.splice(i,0,{offset:n,count:1})}}function At(e){if(!(0,Ct.default)(e))throw Error(`Sigma: invalid graph instance.`)}function jt(e){var t=c(e.x,2),n=t[0],r=t[1],i=c(e.y,2),a=i[0],o=i[1],s=Math.max(r-n,o-a),l=(r+n)/2,u=(o+a)/2;(s===0||Math.abs(s)===1/0||isNaN(s))&&(s=1),isNaN(l)&&(l=0),isNaN(u)&&(u=0);var d=function(e){return{x:.5+(e.x-l)/s,y:.5+(e.y-u)/s}};return d.applyTo=function(e){e.x=.5+(e.x-l)/s,e.y=.5+(e.y-u)/s},d.inverse=function(e){return{x:l+s*(e.x-.5),y:u+s*(e.y-.5)}},d.ratio=s,d}var Mt={hideEdgesOnMove:!1,hideLabelsOnMove:!1,renderLabels:!0,renderEdgeLabels:!1,edgeLabelAnchors:`nodeLabels`,enableEdgeEvents:!1,nodeLabelEvents:!1,edgeLabelEvents:!1,pickingDownSizingRatio:2,nodePickingPadding:0,edgePickingPadding:4,labelPickingPadding:10,stagePadding:30,minEdgeThickness:1.7,antiAliasingFeather:1,antialiasEdges:!0,antialiasNodes:!0,dragTimeout:100,draggedEventsTolerance:3,inertiaDuration:200,inertiaRatio:3,zoomDuration:250,zoomingRatio:1.7,doubleClickTimeout:300,doubleClickZoomingRatio:2.2,doubleClickZoomingDuration:200,tapMoveTolerance:10,zoomToSizeRatioFunction:Math.sqrt,itemSizesReference:`positions`,autoRescale:!0,autoRescaleContent:`positions`,enableNodeDrag:!1,getDraggedNodes:function(e){return[e]},dragPositionToAttributes:null,labelDensity:1,labelGridCellSize:100,labelRenderedSizeThreshold:6,labelPixelSnapping:!0,minCameraRatio:null,maxCameraRatio:null,enableCameraZooming:!0,enableCameraPanning:!0,enableCameraRotation:!0,enableCameraMouseRotation:!0,cameraPanBoundaries:null,gestureTarget:`graph`,sharedGestureWheelMessage:`Use Ctrl + scroll to zoom the graph`,sharedGestureAppleWheelMessage:`Use ⌘ + scroll to zoom the graph`,sharedGestureTouchMessage:`Use two fingers to move the graph`,allowInvalidContainer:!1,DEBUG_displayPickingLayer:!1,DEBUG_logShaders:!1,DEBUG_logRenderStats:!1,DEBUG_gpuTimerQueries:!1};function Nt(e){if(typeof e.labelDensity!=`number`||e.labelDensity<0)throw Error("Settings: invalid `labelDensity`. Expecting a positive number.");var t=e.minCameraRatio,n=e.maxCameraRatio;if(typeof t==`number`&&typeof n==`number`&&n<t)throw Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.")}function Pt(e){return yt({},Mt,e)}var Ft=new Set([`italic`,`oblique`]),It=new Set([`bold`,`bolder`,`lighter`]);function Lt(e){for(var t=`normal`,n=`normal`,r=e.trim(),i=r.split(/\s+/),a=0,o=0;o<i.length;o++){var s=i[o].toLowerCase();if(Ft.has(s))n=s,a=o+1;else if(It.has(s)||/^\d{3}$/.test(s))t=s,a=o+1;else if(s===`normal`)a=o+1;else break}return{family:i.slice(a).join(` `)||r,weight:t,style:n}}function Rt(e,t,n){var r=document.createElement(e);if(t)for(var i in t)r.style[i]=t[i];if(n)for(var a in n)r.setAttribute(a,n[a]);return r}function zt(){return window.devicePixelRatio===void 0?1:window.devicePixelRatio}function Bt(e){var t=e.type===WebGL2RenderingContext.FLOAT&&!e.normalized,n=e.type===WebGL2RenderingContext.UNSIGNED_BYTE&&e.size===4&&e.normalized;if(!t&&!n)throw Error(`Attribute "${e.name}" is invalid: only non-normalized FLOAT and normalized UNSIGNED_BYTE with size 4 are supported.`);return e.normalized?1:e.size}function Vt(e){var t=0;return e.forEach(function(e){return t+=Bt(e)}),t}function Ht(e,t,n){var r=e===`VERTEX`?t.VERTEX_SHADER:t.FRAGMENT_SHADER,i=t.createShader(r);if(i===null)throw Error(`loadShader: error while creating the shader`);if(t.shaderSource(i,n),t.compileShader(i),!t.getShaderParameter(i,t.COMPILE_STATUS)){var a=t.getShaderInfoLog(i);throw t.deleteShader(i),Error(`loadShader: error while compiling the shader:
${a}
${n}`)}return i}function Ut(e,t){return Ht(`VERTEX`,e,t)}function Wt(e,t){return Ht(`FRAGMENT`,e,t)}function Gt(e,t){var n=e.createProgram();if(n===null)throw Error(`loadProgram: error while creating the program.`);for(var r=0,i=t.length;r<i;r++)e.attachShader(n,t[r]);if(e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS)){var a=e.getProgramInfoLog(n);throw e.deleteProgram(n),Error(`loadProgram: error while linking the program: ${a}`)}return n}function Kt(e){var t=e.gl,n=e.buffer,r=e.program,i=e.vertexShader,a=e.fragmentShader;t.deleteShader(i),t.deleteShader(a),t.deleteProgram(r),t.deleteBuffer(n)}function q(e){return e%1==0?e.toFixed(1):e.toString()}var qt=new Map,Jt=new Map,Yt=0;function Xt(e,t){var n,r=(n=e.variables)==null||(n=n[t.source||t.name.replace(/^a_/,``)])==null?void 0:n.default;return q(typeof r==`number`?r:typeof t.defaultValue==`number`?t.defaultValue:0)}function Zt(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:function(e){return`v_${e.name.replace(/^a_/,``)}`},i=[t,n].concat(W(e.uniforms.filter(function(e){return e.type===`float`}).map(function(e){return q(e.value??0)})),W((e.attributes??[]).map(r)));return`sdf_${e.name}(${i.join(`, `)})`}function Qt(e){var t=e.name,n=e.uniforms.filter(function(e){return e.type===`float`&&e.value!==void 0&&e.value!==0}).map(function(e){return`${e.name.replace(`u_`,``)}=${e.value}`}).sort(),r=(e.attributes??[]).map(function(t){return`${t.name}@${t.source??``}=${Xt(e,t)}`}),i=[].concat(W(n),W(r));return i.length>0&&(t+=`#`+i.join(`#`)),t}function $t(e){var t=Qt(e);if(!qt.has(t)){var n={},r=l(e.uniforms),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;a.type===`float`&&a.value!==void 0&&(n[a.name]=a.value)}}catch(e){r.e(e)}finally{r.f()}qt.set(t,{shape:e,uniformValues:n,slug:t}),Jt.set(t,Yt++)}return t}function en(e){return Jt.get(e)??-1}function tn(e){var t=[],n=new Set,r=new Set,i=/mat2 rotate2D\(float angle\)\s*\{[^}]+\}/,a=l(e),o;try{for(a.s();!(o=a.n()).done;){var s=o.value;if(!r.has(s.name)){r.add(s.name);var c=s.glsl;i.test(c)&&(n.has(`rotate2D`)?c=c.replace(i,``):n.add(`rotate2D`)),t.push(c)}}}catch(e){a.e(e)}finally{a.f()}return t.join(`
`)}function nn(){return tn(Array.from(qt.values()).map(function(e){return e.shape}))}function rn(e){var t=Array.from(qt.entries());return t.length===0?`
float querySDF(int shapeId, vec2 uv, float size) {
  return length(uv) - size;
}
`:`
float querySDF(int shapeId, vec2 uv, float size) {
  switch (shapeId) {
${t.map(function(t,n){var r=c(t,2),i=r[0],a=r[1].shape;return`    case ${n}: return ${Zt(a,`uv`,`size`,function(t){var n=t.name.replace(/^a_/,``);return e!=null&&e.has(n)?`g_${n}`:Xt(a,t)})}; // ${i}`}).join(`
`)}
    default: return length(uv) - size;
  }
}
`}function an(e){return tn(e)}function on(e){return W(new Map(e.flatMap(function(e){return e.uniforms}).map(function(e){return[e.name,e]})).values())}function sn(e,t){if(e.length===0)return`
void queryNodeSDF(int shapeId, vec2 uv, float size) {
  context.sdf = length(uv) - size;
  context.inradiusFactor = 1.0;
}
`;var n=function(e){return Zt(e,`uv`,`size`)},r=function(e){return e.inradiusFactorGLSL??q(e.inradiusFactor??1)};if(e.length===1){var i=e[0];return`
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
`}var cn={right:0,left:1,above:2,below:3,over:4},ln=`
float matrixScaleX = length(vec2(u_matrix[0][0], u_matrix[1][0]));
float nodeRadiusGraphSpace = nodeSize * u_correctionRatio / u_sizeRatio * 2.0;
float nodeRadiusNDC = nodeRadiusGraphSpace * matrixScaleX;
float nodeRadiusPixels = nodeRadiusNDC * u_resolution.x / 2.0;
`,un=`
mat2 rotate2D(float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return mat2(c, -s, s, c);
}
`,dn=`
vec2 getLabelDirection(float positionMode) {
  if (positionMode < 0.5) return vec2(1.0, 0.0);   // Right
  if (positionMode < 1.5) return vec2(-1.0, 0.0);  // Left
  if (positionMode < 2.5) return vec2(0.0, -1.0);  // Above
  if (positionMode < 3.5) return vec2(0.0, 1.0);   // Below
  return vec2(0.0);                                 // Over (centered)
}
`,fn=`
float sdfBox(vec2 p, vec2 halfSize) {
  vec2 d = abs(p) - halfSize;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}
`,pn=`
float sdfRotatedBox(vec2 p, vec2 halfSize, float angle) {
  float c = cos(-angle);
  float s = sin(-angle);
  vec2 rotatedP = mat2(c, -s, s, c) * p;
  return sdfBox(rotatedP, halfSize);
}
`,mn=`
float sdfRoundedBox(vec2 p, vec2 halfSize, float radius) {
  vec2 d = abs(p) - halfSize + radius;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - radius;
}
`,hn=`
float sdfRoundedRotatedBox(vec2 p, vec2 halfSize, float angle, float radius) {
  float c = cos(-angle);
  float s = sin(-angle);
  vec2 rotatedP = mat2(c, -s, s, c) * p;
  return sdfRoundedBox(rotatedP, halfSize, radius);
}
`,gn=`
vec2 labelBoxCenter(float positionMode, float labelStart, vec2 halfSize, float textHalfY) {
  if (positionMode < 0.5) return vec2(labelStart + halfSize.x, 0.0);    // right
  if (positionMode < 1.5) return vec2(-(labelStart + halfSize.x), 0.0); // left
  if (positionMode < 2.5) return vec2(0.0, -(labelStart + textHalfY));  // above
  if (positionMode < 3.5) return vec2(0.0, labelStart + textHalfY);     // below
  return vec2(0.0);                                                     // over
}
`,_n=`
vec4 readNodeData(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * 2;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  return texelFetch(nodeDataTexture, coord, 0);
}
`,vn=`
vec4 readNodeFlags(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * 2 + 1;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  return texelFetch(nodeDataTexture, coord, 0);
}
`,yn=`
vec4 readNodeColor(sampler2D nodeDataTexture, int nodeDataTextureWidth, int nodeIndex) {
  int t = nodeIndex * 2 + 1;
  ivec2 coord = ivec2(t % nodeDataTextureWidth, t / nodeDataTextureWidth);
  vec4 texel = texelFetch(nodeDataTexture, coord, 0);
  float r = floor(texel.b / 65536.0);
  float g = floor(mod(texel.b, 65536.0) / 256.0);
  float b = mod(texel.b, 256.0);
  return vec4(r / 255.0, g / 255.0, b / 255.0, texel.a);
}
`,bn=`
vec4 readFrameTexel(sampler2D frameTexture, int frameTextureWidth, int index) {
  ivec2 coord = ivec2(index % frameTextureWidth, index / frameTextureWidth);
  return texelFetch(frameTexture, coord, 0);
}
`;function xn(e,t){var n=function(e){return Zt(e,`uv`,`size`)};return e.length===1?{code:Sn(n(e[0])),multiShape:!1}:{code:`
float queryShapeSDF(int shapeId, vec2 uv, float size) {
  switch (shapeId) {
${e.map(function(e,r){return`    case ${t?t[r]:r}: return ${n(e)};`}).join(`
`)}
    default: return ${n(e[0])};
  }
}
int g_shapeId;
${Sn(`queryShapeSDF(g_shapeId, uv, size)`)}
`,multiShape:!0}}function Sn(e){return`
float findEdgeDistance(vec2 direction, float size) {
  float lo = 0.0, hi = 2.0;
  for (int i = 0; i < 8; i++) {
    float mid = (lo + hi) * 0.5;
    vec2 uv = direction * mid;
    if (${e} < 0.0) lo = mid; else hi = mid;
  }
  return (lo + hi) * 0.5;
}
`}function Cn(e,t){for(;!{}.hasOwnProperty.call(e,t)&&(e=ie(e))!==null;);return e}function wn(){return wn=typeof Reflect<`u`&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=Cn(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},wn.apply(null,arguments)}function J(e,t,n,r){var i=wn(ie(1&r?e.prototype:e),t,n);return 2&r&&typeof i==`function`?function(e){return i.apply(n,e)}:i}var Tn=1024,En=1.5,Dn=4096,On=-1,kn=function(){function e(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Tn;B(this,e),R(this,`texture`,null),R(this,`dirty`,!1),R(this,`dirtyRangeStart`,1/0),R(this,`dirtyRangeEnd`,-1),R(this,`indexMap`,new Map),R(this,`freeIndices`,[]),R(this,`nextIndex`,0),this.gl=t,this.TEXELS_PER_ITEM=n,this.capacity=this.roundUpToPowerOfTwo(r);var i=this.computeTextureDimensions(this.capacity);this.textureWidth=i.width,this.textureHeight=i.height,this.data=new Float32Array(this.textureWidth*this.textureHeight*4),this.createTexture()}return V(e,[{key:`computeTextureDimensions`,value:function(e){var t=e*this.TEXELS_PER_ITEM,n=Math.min(t,Dn);return{width:n,height:Math.ceil(t/n)}}},{key:`roundUpToPowerOfTwo`,value:function(e){return 2**Math.ceil(Math.log2(Math.max(1,e)))}},{key:`createTexture`,value:function(){var e=this.gl;this.texture=e.createTexture(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA32F,this.textureWidth,this.textureHeight,0,e.RGBA,e.FLOAT,this.data),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null)}},{key:`resize`,value:function(e){if(!(e<=this.capacity)){var t=this.roundUpToPowerOfTwo(Math.ceil(e*En)),n=this.gl,r=this.computeTextureDimensions(t),i=new Float32Array(r.width*r.height*4);i.set(this.data),this.texture&&n.deleteTexture(this.texture),this.data=i,this.capacity=t,this.textureWidth=r.width,this.textureHeight=r.height,this.createTexture(),this.dirty=!0,this.dirtyRangeStart=0,this.dirtyRangeEnd=this.nextIndex}}},{key:`allocate`,value:function(e){var t=this.indexMap.get(e);if(t!==void 0)return t;var n;return this.freeIndices.length>0?n=this.freeIndices.pop():(n=this.nextIndex++,n>=this.capacity&&this.resize(n+1)),this.indexMap.set(e,n),n}},{key:`free`,value:function(e){var t=this.indexMap.get(e);if(t!==void 0){this.indexMap.delete(e),this.freeIndices.push(t);for(var n=t*this.TEXELS_PER_ITEM*4,r=0;r<this.TEXELS_PER_ITEM*4;r++)this.data[n+r]=0;this.markDirty(t)}}},{key:`getIndex`,value:function(e){return this.indexMap.get(e)??-1}},{key:`has`,value:function(e){return this.indexMap.has(e)}},{key:`markDirty`,value:function(e){this.dirty=!0,this.dirtyRangeStart=Math.min(this.dirtyRangeStart,e),this.dirtyRangeEnd=Math.max(this.dirtyRangeEnd,e+1)}},{key:`upload`,value:function(){if(this.dirty&&this.texture){var e=this.gl,t=this.textureWidth;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture);var n=this.dirtyRangeStart*this.TEXELS_PER_ITEM,r=Math.min(this.dirtyRangeEnd*this.TEXELS_PER_ITEM,this.capacity*this.TEXELS_PER_ITEM);if(n<r)for(var i=Math.floor(n/t),a=Math.floor((r-1)/t),o=i;o<=a;o++){var s=o*t,c=Math.min(s+t,this.capacity*this.TEXELS_PER_ITEM),l=Math.max(n,s),u=Math.min(r,c);if(l<u){var d=l-s,f=u-l,p=this.data.subarray(l*4,u*4);e.texSubImage2D(e.TEXTURE_2D,0,d,o,f,1,e.RGBA,e.FLOAT,p)}}e.bindTexture(e.TEXTURE_2D,null),this.dirty=!1,this.dirtyRangeStart=1/0,this.dirtyRangeEnd=-1}}},{key:`bind`,value:function(e){var t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture)}},{key:`getTexture`,value:function(){return this.texture}},{key:`getCapacity`,value:function(){return this.capacity}},{key:`getTextureWidth`,value:function(){return this.textureWidth}},{key:`getTextureHeight`,value:function(){return this.textureHeight}},{key:`getTexelsPerItem`,value:function(){return this.TEXELS_PER_ITEM}},{key:`getCount`,value:function(){return this.indexMap.size}},{key:`getHighWaterMark`,value:function(){return this.nextIndex}},{key:`isDirty`,value:function(){return this.dirty}},{key:`clear`,value:function(){this.indexMap.clear(),this.freeIndices=[],this.nextIndex=0,this.data.fill(0),this.dirty=!0,this.dirtyRangeStart=0,this.dirtyRangeEnd=this.capacity}},{key:`restore`,value:function(){this.createTexture(),this.dirty=!1,this.dirtyRangeStart=1/0,this.dirtyRangeEnd=-1}},{key:`kill`,value:function(){this.texture&&=(this.gl.deleteTexture(this.texture),null),this.indexMap.clear(),this.freeIndices=[]}}])}();function Y(e){var t={},n={},r=0,i=l(e),a;try{for(i.s();!(a=i.n()).done;){var o=a.value,s=l(o.attributes),c;try{for(s.s();!(c=s.n()).done;){var u=c.value,d=u.name.replace(/^a_/,``);d in t||(t[d]=r,n[d]=u,r+=u.size)}}catch(e){s.e(e)}finally{s.f()}}}catch(e){i.e(e)}finally{i.f()}return{floatsPerItem:r,texelsPerItem:Math.max(1,Math.ceil(r/4)),offsets:t,specs:n}}var An=function(e){function t(e,n,r){var i;return B(this,t),i=H(this,t,[e,n.texelsPerItem,r]),i.floatsPerItem=n.floatsPerItem,i}return U(t,e),V(t,[{key:`updateAllAttributes`,value:function(e,t){var n=this.indexMap.get(e);n===void 0&&(n=this.allocate(e));for(var r=n*this.TEXELS_PER_ITEM*4,i=Math.min(t.length,this.floatsPerItem),a=0;a<i;a++)this.data[r+a]=t[a];this.markDirty(n)}},{key:`updateAllAttributesAtRow`,value:function(e,t){e>=this.capacity&&this.resize(e+1);for(var n=e*this.TEXELS_PER_ITEM*4,r=Math.min(t.length,this.floatsPerItem),i=0;i<r;i++)this.data[n+i]=t[i];this.markDirty(e)}}])}(kn);function jn(e,t,n){for(var r=[],i=new Set,a=0;a<e.length;a++){var o=e[a],s=l(o.attributes),c;try{for(s.s();!(c=s.n()).done;){var u=c.value,d=u.name.replace(/^a_/,``);if(!i.has(d)){i.add(d);var f=t.offsets[d];if(f!==void 0){var p=n?.get(a);r.push({sourceKey:u.source||d,packedOffset:f,size:u.size,isColor:u.size===4&&!!u.normalized,defaultNum:typeof u.defaultValue==`number`?u.defaultValue:+(u.defaultValue===!0),defaultColor:typeof u.defaultValue==`string`?u.defaultValue:``,sourceIndex:a,hasLifecycleHook:!!(p!=null&&p.getAttributeData)})}}}}catch(e){s.e(e)}finally{s.f()}}return r}function Mn(e,t,n,r,i,a){n.fill(0);for(var o=0,s=e.length;o<s;o++){var l=e[o],u=l.packedOffset,d=void 0;if(l.hasLifecycleHook?(d=i.get(l.sourceIndex-a).getAttributeData(t,l.sourceKey),d===null&&(d=t[l.sourceKey])):d=t[l.sourceKey],l.isColor){var f=c(N(typeof d==`string`?d:l.defaultColor||r),4),p=f[0],m=f[1],h=f[2],g=f[3];n[u]=p/255,n[u+1]=m/255,n[u+2]=h/255,n[u+3]=g/255}else if(l.size===1)n[u]=typeof d==`number`?d:typeof d==`boolean`?+!!d:l.defaultNum;else{var _=Array.isArray(d)?d:null;if(_)for(var v=0;v<l.size;v++)n[u+v]=_[v]??0}}}var Nn=[`r`,`g`,`b`,`a`];function Pn(e,t){var n=e.offsets,r=e.specs,i=e.texelsPerItem,a=e.floatsPerItem,o=Object.keys(n);if(o.length===0||a===0)return{fetchCode:``,varyingAssignments:``};var s=t.varPrefix,c=t.baseTexelExpr,l=t.textureWidthUniform,u=t.textureSamplerUniform,d=t.outputPrefix,f=d===void 0?`v_`:d,p=[];p.push(`  int ${s}BaseTexel = ${c};`),p.push(``);for(var m=0;m<i;m++)p.push(`  ivec2 ${s}Coord${m} = ivec2((${s}BaseTexel + ${m}) % ${l}, (${s}BaseTexel + ${m}) / ${l});`),p.push(`  vec4 ${s}Texel${m} = texelFetch(${u}, ${s}Coord${m}, 0);`);p.push(``);for(var h=[],g=function(){var e=v[_],t=r[e],i=n[e],a=Math.floor(i/4),o=i%4,c=`${s}Texel${a}`,l=`${s}Texel${a+1}`,u=`${s}Fetched_${e}`;if(t.size===1)p.push(`  float ${u} = ${c}.${Nn[o]};`);else if(t.size===4&&o===0)p.push(`  vec4 ${u} = ${c};`);else{var d=o+t.size;if(d<=4){var m=`vec${t.size}`,g=Nn.slice(o,d).join(``);p.push(`  ${m} ${u} = ${c}.${g};`)}else{var y=t.size===4?`vec4`:`vec${t.size}`,b=Nn.slice(o).map(function(e){return`${c}.${e}`}),x=Nn.slice(0,d-4).map(function(e){return`${l}.${e}`}),S=[].concat(W(b),W(x)).join(`, `);p.push(`  ${y} ${u} = ${y}(${S});`)}}h.push(`  ${f}${e} = ${u};`)},_=0,v=o;_<v.length;_++)g();return{fetchCode:p.join(`
`),varyingAssignments:h.join(`
`)}}function Fn(e,t,n){if(t&&n.type!==`sampler2D`)switch(n.type){case`float`:e.uniform1f(t,n.value);break;case`int`:case`bool`:e.uniform1i(t,n.value);break;case`vec2`:e.uniform2fv(t,n.value);break;case`vec3`:e.uniform3fv(t,n.value);break;case`vec4`:e.uniform4fv(t,n.value);break;case`mat3`:e.uniformMatrix3fv(t,!1,n.value);break;case`mat4`:e.uniformMatrix4fv(t,!1,n.value)}}var In=R(R(R(R(R(R(R(R({},WebGL2RenderingContext.BOOL,1),WebGL2RenderingContext.BYTE,1),WebGL2RenderingContext.UNSIGNED_BYTE,1),WebGL2RenderingContext.SHORT,2),WebGL2RenderingContext.UNSIGNED_SHORT,2),WebGL2RenderingContext.INT,4),WebGL2RenderingContext.UNSIGNED_INT,4),WebGL2RenderingContext.FLOAT,4);function Ln(e){var t=e.match(/^(#version[^\n]*\n)/);return t?t[1]+`#define PICKING_MODE
`+e.slice(t[1].length):`#define PICKING_MODE
`+e}var Rn=function(){function e(t,n,r){B(this,e),R(this,`floats`,new Float32Array),R(this,`ints`,new Uint32Array),R(this,`constantArray`,new Float32Array),R(this,`capacity`,0),R(this,`verticesCount`,0),R(this,`bufferGeneration`,0),R(this,`uploadedGeneration`,new Map),R(this,`constantBufferGeneration`,0),R(this,`uploadedConstantGeneration`,new Map),R(this,`renderOffset`,0),R(this,`renderCount`,-1),R(this,`debugStats`,{drawCalls:0,verticesDrawn:0,bufferUploadBytes:0}),R(this,`shadersLogged`,!1),R(this,`pickProgram`,null);var i=this.getDefinition();if(this.VERTICES=i.VERTICES,this.VERTEX_SHADER_SOURCE=i.VERTEX_SHADER_SOURCE,this.FRAGMENT_SHADER_SOURCE=i.FRAGMENT_SHADER_SOURCE,this.UNIFORMS=i.UNIFORMS,this.ATTRIBUTES=i.ATTRIBUTES,this.METHOD=i.METHOD,this.CONSTANT_ATTRIBUTES=`CONSTANT_ATTRIBUTES`in i?i.CONSTANT_ATTRIBUTES:[],this.CONSTANT_DATA=`CONSTANT_DATA`in i?i.CONSTANT_DATA:[],this.isInstanced=`CONSTANT_ATTRIBUTES`in i,this.ATTRIBUTES_ITEMS_COUNT=Vt(this.ATTRIBUTES),this.STRIDE=this.VERTICES*this.ATTRIBUTES_ITEMS_COUNT,this.renderer=r,this.normalProgram=this.getProgramInfo(`normal`,t,i.VERTEX_SHADER_SOURCE,i.FRAGMENT_SHADER_SOURCE,null),this.pickProgram=this.getProgramInfo(`pick`,t,Ln(i.VERTEX_SHADER_SOURCE),Ln(i.FRAGMENT_SHADER_SOURCE),null),this.isInstanced){var a=Vt(this.CONSTANT_ATTRIBUTES);if(this.CONSTANT_DATA.length!==this.VERTICES)throw Error(`Program: error while getting constant data (expected ${this.VERTICES} items, received ${this.CONSTANT_DATA.length} instead)`);this.constantArray=new Float32Array(this.CONSTANT_DATA.length*a);for(var o=0;o<this.CONSTANT_DATA.length;o++){var s=this.CONSTANT_DATA[o];if(s.length!==a)throw Error(`Program: error while getting constant data (one vector has ${s.length} items instead of ${a})`);for(var c=0;c<s.length;c++)this.constantArray[o*a+c]=s[c]}this.STRIDE=this.ATTRIBUTES_ITEMS_COUNT}}return V(e,[{key:`kill`,value:function(){Kt(this.normalProgram),this.pickProgram&&Kt(this.pickProgram)}},{key:`resetDebugStats`,value:function(){this.debugStats.drawCalls=0,this.debugStats.verticesDrawn=0,this.debugStats.bufferUploadBytes=0}},{key:`getProgramInfo`,value:function(e,t,n,r,i){var a=t.createBuffer();if(a===null)throw Error(`Program: error while creating the WebGL buffer.`);var o=Ut(t,n),s=Wt(t,r),c=Gt(t,[o,s]),l={};this.UNIFORMS.forEach(function(e){var n=t.getUniformLocation(c,e);n&&(l[e]=n)});var u={};this.ATTRIBUTES.forEach(function(e){u[e.name]=t.getAttribLocation(c,e.name)});var d;if(this.isInstanced&&(this.CONSTANT_ATTRIBUTES.forEach(function(e){u[e.name]=t.getAttribLocation(c,e.name)}),d=t.createBuffer(),d===null))throw Error(`Program: error while creating the WebGL constant buffer.`);return{name:e,program:c,gl:t,frameBuffer:i,buffer:a,constantBuffer:d||{},uniformLocations:l,attributeLocations:u,isPicking:e===`pick`,vertexShader:o,fragmentShader:s}}},{key:`bindProgram`,value:function(e){var t=this,n=0,r=e.gl,i=e.buffer;if(this.isInstanced){if(r.bindBuffer(r.ARRAY_BUFFER,e.constantBuffer),n=0,this.CONSTANT_ATTRIBUTES.forEach(function(r){return n+=t.bindAttribute(r,e,n,!1)}),this.uploadedConstantGeneration.get(e.constantBuffer)!==this.constantBufferGeneration){var a;r.bufferData(r.ARRAY_BUFFER,this.constantArray,r.STATIC_DRAW),this.uploadedConstantGeneration.set(e.constantBuffer,this.constantBufferGeneration),(a=this.renderer)!=null&&a.getSetting(`DEBUG_logRenderStats`)&&(this.debugStats.bufferUploadBytes+=this.constantArray.byteLength)}if(r.bindBuffer(r.ARRAY_BUFFER,e.buffer),n=this.renderOffset*this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT,this.ATTRIBUTES.forEach(function(r){return n+=t.bindAttribute(r,e,n,!0)}),this.uploadedGeneration.get(i)!==this.bufferGeneration){var o;r.bufferData(r.ARRAY_BUFFER,this.floats,r.DYNAMIC_DRAW),this.uploadedGeneration.set(i,this.bufferGeneration),(o=this.renderer)!=null&&o.getSetting(`DEBUG_logRenderStats`)&&(this.debugStats.bufferUploadBytes+=this.floats.byteLength)}}else if(r.bindBuffer(r.ARRAY_BUFFER,i),n=0,this.ATTRIBUTES.forEach(function(r){return n+=t.bindAttribute(r,e,n)}),this.uploadedGeneration.get(i)!==this.bufferGeneration){var s;r.bufferData(r.ARRAY_BUFFER,this.floats,r.DYNAMIC_DRAW),this.uploadedGeneration.set(i,this.bufferGeneration),(s=this.renderer)!=null&&s.getSetting(`DEBUG_logRenderStats`)&&(this.debugStats.bufferUploadBytes+=this.floats.byteLength)}r.bindBuffer(r.ARRAY_BUFFER,null)}},{key:`unbindProgram`,value:function(e){var t=this;this.isInstanced?(this.CONSTANT_ATTRIBUTES.forEach(function(n){return t.unbindAttribute(n,e,!1)}),this.ATTRIBUTES.forEach(function(n){return t.unbindAttribute(n,e,!0)})):this.ATTRIBUTES.forEach(function(n){return t.unbindAttribute(n,e)})}},{key:`bindAttribute`,value:function(e,t,n,r){var i=In[e.type];if(typeof i!=`number`)throw Error(`Program.bind: yet unsupported attribute type "${e.type}"`);var a=t.attributeLocations[e.name],o=t.gl;if(a!==-1){o.enableVertexAttribArray(a);var s=this.isInstanced?(r?this.ATTRIBUTES_ITEMS_COUNT:Vt(this.CONSTANT_ATTRIBUTES))*Float32Array.BYTES_PER_ELEMENT:this.ATTRIBUTES_ITEMS_COUNT*Float32Array.BYTES_PER_ELEMENT;o.vertexAttribPointer(a,e.size,e.type,e.normalized||!1,s,n),this.isInstanced&&r&&o.vertexAttribDivisor(a,1)}return e.size*i}},{key:`unbindAttribute`,value:function(e,t,n){var r=t.attributeLocations[e.name],i=t.gl;r!==-1&&(i.disableVertexAttribArray(r),this.isInstanced&&n&&i.vertexAttribDivisor(r,0))}},{key:`reallocate`,value:function(e){e!==this.capacity&&(this.capacity=e,this.verticesCount=this.VERTICES*e,this.floats=new Float32Array(this.isInstanced?this.capacity*this.ATTRIBUTES_ITEMS_COUNT:this.verticesCount*this.ATTRIBUTES_ITEMS_COUNT),this.ints=new Uint32Array(this.floats.buffer),this.invalidateBuffers())}},{key:`invalidateBuffers`,value:function(){this.bufferGeneration++,this.constantBufferGeneration++}},{key:`hasNothingToRender`,value:function(){return this.verticesCount===0}},{key:`setTypedUniform`,value:function(e,t){Fn(t.gl,t.uniformLocations[e.name]??null,e)}},{key:`renderProgram`,value:function(e,t){var n=t.gl,r=t.program;t.isPicking?n.disable(n.BLEND):n.enable(n.BLEND),n.useProgram(r),this.setUniforms(e,t),this.drawWebGL(this.METHOD,t)}},{key:`render`,value:function(e,t,n){var r;if(!this.shadersLogged&&(r=this.renderer)!=null&&r.getSetting(`DEBUG_logShaders`)&&(this.shadersLogged=!0,console.log(`[sigma] DEBUG_logShaders: ${this.constructor.name}`,{normal:{vertexShaderSource:this.VERTEX_SHADER_SOURCE,fragmentShaderSource:this.FRAGMENT_SHADER_SOURCE},pick:{vertexShaderSource:Ln(this.VERTEX_SHADER_SOURCE),fragmentShaderSource:Ln(this.FRAGMENT_SHADER_SOURCE)}})),!this.hasNothingToRender()){this.renderOffset=t??0,this.renderCount=n??-1;var i=this.normalProgram.gl;if(i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,e.width*e.pixelRatio,e.height*e.pixelRatio),this.bindProgram(this.normalProgram),this.renderProgram(e,this.normalProgram),this.unbindProgram(this.normalProgram),this.pickProgram&&e.pickingFrameBuffer){var a=Math.ceil(e.width*e.pixelRatio/e.downSizingRatio),o=Math.ceil(e.height*e.pixelRatio/e.downSizingRatio);i.bindFramebuffer(i.FRAMEBUFFER,e.pickingFrameBuffer),i.viewport(0,0,a,o),this.bindProgram(this.pickProgram),this.renderProgram(e,this.pickProgram),this.unbindProgram(this.pickProgram),i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,e.width*e.pixelRatio,e.height*e.pixelRatio)}}}},{key:`drawWebGL`,value:function(e,t){var n,r=t.gl,i=this.renderCount>=0?this.renderCount:this.capacity;(n=this.renderer)!=null&&n.getSetting(`DEBUG_logRenderStats`)&&(this.debugStats.drawCalls++,this.debugStats.verticesDrawn+=i*this.VERTICES),this.isInstanced?r.drawArraysInstanced(e,0,this.VERTICES,i):r.drawArrays(e,this.renderOffset*this.VERTICES,i*this.VERTICES)}}])}(),zn={below:0,above:1,left:2,right:3};function Bn(){return`#version 300 es
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

${_n}
${vn}
${bn}
${gn}
${un}

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
`}var Vn=`#version 300 es
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
`;function Hn(e,t,n,r){var i=r.label,a=i===void 0?{}:i,o=a.margin??5,s=a.zoomToLabelSizeRatioFunction??function(){return 1},c=Bn(),l=Vn,u=function(e){function t(){var e;B(this,t);var n=[...arguments];return e=H(this,t,[].concat(n)),R(e,`totalCount`,0),R(e,`bufferCapacity`,0),e}return U(t,e),V(t,[{key:`getDefinition`,value:function(){var e=WebGL2RenderingContext,t=e.FLOAT;return{VERTICES:4,VERTEX_SHADER_SOURCE:c,FRAGMENT_SHADER_SOURCE:l,METHOD:e.TRIANGLE_STRIP,UNIFORMS:[`u_matrix`,`u_resolution`,`u_labelPixelSnapping`,`u_sizeRatio`,`u_correctionRatio`,`u_cameraAngle`,`u_pixelRatio`,`u_labelMargin`,`u_zoomLabelSizeRatio`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_nodeFrameTexture`,`u_nodeFrameTextureWidth`,`u_atlasTexture`],ATTRIBUTES:[{name:`a_nodeIndex`,size:1,type:t},{name:`a_atlasRect`,size:4,type:t},{name:`a_attachmentSize`,size:2,type:t},{name:`a_positionMode`,size:1,type:t},{name:`a_attachmentPlacement`,size:1,type:t},{name:`a_labelWidth`,size:1,type:t},{name:`a_labelHeight`,size:1,type:t},{name:`a_textHeight`,size:1,type:t},{name:`a_labelAngle`,size:1,type:t}],CONSTANT_ATTRIBUTES:[{name:`a_quadCorner`,size:2,type:t}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:`processAttachment`,value:function(e,t){var n=this.floats,r=e*this.STRIDE;n[r++]=t.nodeIndex,n[r++]=t.atlasX,n[r++]=t.atlasY,n[r++]=t.atlasW,n[r++]=t.atlasH,n[r++]=t.attachWidth,n[r++]=t.attachHeight,n[r++]=t.positionMode,n[r++]=t.attachmentPlacement,n[r++]=t.labelWidth,n[r++]=t.labelHeight,n[r++]=t.textHeight,n[r++]=t.labelAngle}},{key:`setUniforms`,value:function(e,n){var r=n.gl,i=n.uniformLocations;r.uniformMatrix3fv(i.u_matrix,!1,e.matrix),r.uniform2f(i.u_resolution,e.width*e.pixelRatio,e.height*e.pixelRatio),r.uniform1f(i.u_labelPixelSnapping,e.labelPixelSnapping),r.uniform1f(i.u_sizeRatio,e.sizeRatio),r.uniform1f(i.u_correctionRatio,e.correctionRatio),r.uniform1f(i.u_cameraAngle,e.cameraAngle),r.uniform1f(i.u_pixelRatio,e.pixelRatio),r.uniform1f(i.u_labelMargin,t.labelMargin),r.uniform1f(i.u_zoomLabelSizeRatio,1/s(e.zoomRatio)),r.uniform1i(i.u_nodeDataTexture,e.nodeDataTextureUnit),r.uniform1i(i.u_nodeDataTextureWidth,e.nodeDataTextureWidth),r.uniform1i(i.u_nodeFrameTexture,e.nodeFrameTextureUnit),r.uniform1i(i.u_nodeFrameTextureWidth,e.nodeFrameTextureWidth),r.uniform1i(i.u_atlasTexture,7)}},{key:`reallocateAttachments`,value:function(e){this.totalCount=e,e>this.bufferCapacity&&(this.bufferCapacity=Math.max(e,Math.ceil(this.bufferCapacity*1.5)||10),J(t,`reallocate`,this,3)([this.bufferCapacity]))}},{key:`hasNothingToRender`,value:function(){return this.totalCount===0}},{key:`drawWebGL`,value:function(e,t){var n=t.gl;this.totalCount!==0&&n.drawArraysInstanced(e,0,this.VERTICES,this.totalCount)}}])}(Rn);return R(u,`labelMargin`,o),new u(e,t,n)}var Un=5;function Wn(e,t){return[].concat(W(t),W(e.map(function(e){return{attributes:e.attributes??[]}})))}function Gn(e,t){var n=Y(Wn(e,t)),r=new Set(e.flatMap(function(e){return e.attributes??[]}).map(function(e){return e.name.replace(/^a_/,``)})),i={},a={},o=l(r),s;try{for(o.s();!(s=o.n()).done;){var c=s.value;i[c]=n.offsets[c],a[c]=n.specs[c]}}catch(e){o.e(e)}finally{o.f()}return z(z({},n),{},{offsets:i,specs:a})}function Kn(e,t){var n=new Set([`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_cameraAngle`,`u_pickingPadding`,`u_nodeDataTexture`,`u_layerAttributeTexture`]),r=new Set,i=e.flatMap(function(e){return e.uniforms}).filter(function(e){return n.has(e.name)||r.has(e.name)?!1:(r.add(e.name),!0)}).map(function(e){return`uniform ${e.type} ${e.name};`}).join(`
`),a=t.flatMap(function(e){return e.uniforms}).filter(function(e){return n.has(e.name)||r.has(e.name)?!1:(r.add(e.name),!0)}).map(function(e){return`uniform ${e.type} ${e.name};`}).join(`
`),o=Wn(e,t),s=new Set,c=o.flatMap(function(e){return e.attributes}).filter(function(e){var t=e.name.replace(/^a_/,``);return!s.has(t)&&(s.add(t),!0)}).map(function(e){var t=e.name.replace(/^a_/,``);return`out ${e.size===1?`float`:`vec${e.size}`} v_${t};`}).join(`
`),l=Pn(Y(o),{varPrefix:`layer`,baseTexelExpr:`nodeIdx * u_layerAttributeTexelsPerNode`,textureWidthUniform:`u_layerAttributeTextureWidth`,textureSamplerUniform:`u_layerAttributeTexture`});return`#version 300 es

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
${_n}
${vn}

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
`}function qn(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,i=t.map(function(e,t){var n=`layer_${e.name}`,r=[].concat(W(e.attributes.map(function(e){return`v_${e.name.replace(/^a_/,``)}`})),W(e.uniforms.map(function(e){return e.name}))).join(`, `);return`  // Layer ${t+1}: ${e.name}
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
${Wn(e,t).flatMap(function(e){return e.attributes}).filter(function(e){var t=e.name.replace(/^a_/,``);return!l.has(t)&&(l.add(t),!0)}).map(function(e){var t=e.name.replace(/^a_/,``);return`in ${e.size===1?`float`:`vec${e.size}`} v_${t};`}).join(`
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
${an(e)}

// Shape selector function (sets context.sdf and context.inradiusFactor)
${sn(e,n)}

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
`}function Jn(e,t){var n=new Set;return n.add(`u_matrix`),n.add(`u_sizeRatio`),n.add(`u_correctionRatio`),n.add(`u_cameraAngle`),n.add(`u_pickingPadding`),n.add(`u_nodeDataTexture`),n.add(`u_nodeDataTextureWidth`),n.add(`u_layerAttributeTexture`),n.add(`u_layerAttributeTextureWidth`),n.add(`u_layerAttributeTexelsPerNode`),e.forEach(function(e){e.uniforms.forEach(function(e){return n.add(e.name)})}),t.forEach(function(e){e.uniforms.forEach(function(e){return n.add(e.name)})}),Array.from(n)}function Yn(e){var t=WebGL2RenderingContext,n=t.UNSIGNED_BYTE,r=t.FLOAT;return[{name:`a_nodeIndex`,size:1,type:r},{name:`a_id`,size:4,type:n,normalized:!0},{name:`a_opacity`,size:1,type:r}]}function Xn(e){var t=e.shapes,n=e.layers,r=e.shapeGlobalIds,i=e.antialias,a=i===void 0||i;return{vertexShader:Kn(t,n),fragmentShader:qn(t,n,r,a),uniforms:Jn(t,n),attributes:Yn()}}function Zn(e,t,n){var r=Gn(e,t).specs;return Object.keys(r).map(function(e){return`flat ${n} ${r[e].size===1?`float`:`vec${r[e].size}`} v_${e};`}).join(`
`)}function Qn(e){var t=e.shapes,n=e.layers,r=e.shapeGlobalIds,i=Pn(Gn(t,n),{varPrefix:`nodeAttr`,baseTexelExpr:`nodeIdx * u_layerAttributeTexelsPerNode`,textureWidthUniform:`u_layerAttributeTextureWidth`,textureSamplerUniform:`u_layerAttributeTexture`}),a=t.length===1?`float inradiusFactor = ${q(t[0].inradiusFactor??1)};`:`float inradiusFactor = ${q(t[0].inradiusFactor??1)};
  switch (int(shapeId)) {
${t.map(function(e,t){return`    case ${r?r[t]:t}: inradiusFactor = ${q(e.inradiusFactor??1)}; break;`}).join(`
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
${Zn(t,n,`out`)}

${_n}
${vn}
${bn}

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

  ${ln}
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
`}function $n(e){var t=e.shapes,n=e.layers,r=e.shapeGlobalIds,i=an(t),a=on(t).map(function(e){return`uniform ${e.type} ${e.name};`}).join(`
`),o=function(e){return Zt(e,`nodeUV`,`1.0`)},s=t.length===1?`float nodeSdfNormalized = ${o(t[0])};`:`float nodeSdfNormalized;
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
${Zn(t,n,`in`)}

uniform float u_cameraAngle;
${a}

layout(location = 0) out vec4 fragColor;
layout(location = 1) out vec4 fragPicking;

${i}
${fn}
${pn}
${mn}
${hn}

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
`}function er(e){var t=[`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_cameraAngle`,`u_resolution`,`u_pixelRatio`,`u_labelMargin`,`u_zoomLabelSizeRatio`,`u_labelPixelSnapping`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_nodeFrameTexture`,`u_nodeFrameTextureWidth`,`u_layerAttributeTexture`,`u_layerAttributeTextureWidth`,`u_layerAttributeTexelsPerNode`],n=l(on(e)),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;t.includes(i.name)||t.push(i.name)}}catch(e){n.e(e)}finally{n.f()}return t}function tr(e){return{vertexShader:Qn(e),fragmentShader:$n(e),uniforms:er(e.shapes)}}function nr(e,t,n,r){var i=r.label,a=i===void 0?{}:i,o=r.shapes,s=r.layers,c=r.getAttributeTexture,u=r.shapeGlobalIds;if(o.length===0)throw Error(`createBackdropProgram: at least one shape must be provided in 'shapes'`);var d=a.margin??5,f=a.zoomToLabelSizeRatioFunction??function(){return 1},p=tr({shapes:o,layers:s,shapeGlobalIds:u}),m=function(e){function t(){var e;B(this,t);var n=[...arguments];return e=H(this,t,[].concat(n)),R(e,`totalBackdropCount`,0),R(e,`bufferCapacity`,0),e}return U(t,e),V(t,[{key:`getDefinition`,value:function(){var e=WebGL2RenderingContext,t=e.FLOAT,n=e.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:p.vertexShader,FRAGMENT_SHADER_SOURCE:p.fragmentShader,METHOD:n,UNIFORMS:p.uniforms,ATTRIBUTES:[{name:`a_nodeIndex`,size:1,type:t},{name:`a_labelWidth`,size:1,type:t},{name:`a_labelHeight`,size:1,type:t},{name:`a_textHeight`,size:1,type:t},{name:`a_positionMode`,size:1,type:t},{name:`a_labelAngle`,size:1,type:t},{name:`a_backdropColor`,size:4,type:t},{name:`a_backdropShadowColor`,size:4,type:t},{name:`a_backdropShadowBlur`,size:1,type:t},{name:`a_backdropPadding`,size:1,type:t},{name:`a_backdropBorderColor`,size:4,type:t},{name:`a_backdropExtra`,size:4,type:t},{name:`a_labelBoxOffset`,size:2,type:t}],CONSTANT_ATTRIBUTES:[{name:`a_quadCorner`,size:2,type:t}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:`processBackdrop`,value:function(e,t){var n=this.floats,r=e*this.STRIDE;n[r++]=t.nodeIndex,n[r++]=t.labelWidth,n[r++]=t.labelHeight,n[r++]=t.textHeight,n[r++]=cn[t.position],n[r++]=t.labelAngle,n[r++]=t.backdropColor[0],n[r++]=t.backdropColor[1],n[r++]=t.backdropColor[2],n[r++]=t.backdropColor[3],n[r++]=t.backdropShadowColor[0],n[r++]=t.backdropShadowColor[1],n[r++]=t.backdropShadowColor[2],n[r++]=t.backdropShadowColor[3],n[r++]=t.backdropShadowBlur,n[r++]=t.backdropPadding,n[r++]=t.backdropBorderColor[0],n[r++]=t.backdropBorderColor[1],n[r++]=t.backdropBorderColor[2],n[r++]=t.backdropBorderColor[3],n[r++]=t.backdropBorderWidth,n[r++]=t.backdropCornerRadius,n[r++]=t.backdropLabelPadding,n[r++]=t.backdropArea,n[r++]=t.labelBoxOffset[0],n[r++]=t.labelBoxOffset[1]}},{key:`setUniforms`,value:function(e,n){var r=n.gl,i=n.uniformLocations;r.uniformMatrix3fv(i.u_matrix,!1,e.matrix),r.uniform1f(i.u_sizeRatio,e.sizeRatio),r.uniform1f(i.u_correctionRatio,e.correctionRatio),r.uniform1f(i.u_cameraAngle,e.cameraAngle),r.uniform2f(i.u_resolution,e.width*e.pixelRatio,e.height*e.pixelRatio),r.uniform1f(i.u_pixelRatio,e.pixelRatio),r.uniform1f(i.u_labelMargin,t.labelMargin),r.uniform1f(i.u_zoomLabelSizeRatio,1/f(e.zoomRatio)),r.uniform1f(i.u_labelPixelSnapping,e.labelPixelSnapping),r.uniform1i(i.u_nodeDataTexture,e.nodeDataTextureUnit),r.uniform1i(i.u_nodeDataTextureWidth,e.nodeDataTextureWidth),r.uniform1i(i.u_nodeFrameTexture,e.nodeFrameTextureUnit),r.uniform1i(i.u_nodeFrameTextureWidth,e.nodeFrameTextureWidth);var a=c();i.u_layerAttributeTexture&&a&&(a.bind(Un),r.uniform1i(i.u_layerAttributeTexture,Un),r.uniform1i(i.u_layerAttributeTextureWidth,a.getTextureWidth()),r.uniform1i(i.u_layerAttributeTexelsPerNode,a.getTexelsPerItem()));var s=l(on(o)),u;try{for(s.s();!(u=s.n()).done;){var d=u.value;this.setTypedUniform(d,n)}}catch(e){s.e(e)}finally{s.f()}}},{key:`hasNothingToRender`,value:function(){return this.totalBackdropCount===0}},{key:`drawWebGL`,value:function(e,t){var n=t.gl;this.totalBackdropCount!==0&&(this.isInstanced?n.drawArraysInstanced(e,0,this.VERTICES,this.totalBackdropCount):n.drawArrays(e,0,this.totalBackdropCount*this.VERTICES))}},{key:`reallocate`,value:function(e){this.totalBackdropCount=e,e>this.bufferCapacity&&(this.bufferCapacity=Math.max(e,Math.ceil(this.bufferCapacity*1.5)||10),J(t,`reallocate`,this,3)([this.bufferCapacity]))}}])}(Rn);return R(m,`labelMargin`,d),new m(e,t,n)}var rr=function(e){function t(){var e;B(this,t);var n=[...arguments];return e=H(this,t,[].concat(n)),R(e,`totalCharacterCount`,0),R(e,`bufferCapacity`,0),e}return U(t,e),V(t,[{key:`processLabel`,value:function(e,t,n){if(n.hidden||!n.text)return 0;for(var r=n.text,i=r.length,a=0;a<i;a++){var o=r[a];this.processCharacter(t+a,n,o,a)}return i}},{key:`hasNothingToRender`,value:function(){return this.totalCharacterCount===0}},{key:`drawWebGL`,value:function(e,t){var n=t.gl;this.totalCharacterCount!==0&&(this.isInstanced?n.drawArraysInstanced(e,0,this.VERTICES,this.totalCharacterCount):n.drawArrays(e,0,this.totalCharacterCount*this.VERTICES))}},{key:`reallocate`,value:function(e){this.totalCharacterCount=e,e>this.bufferCapacity&&(this.bufferCapacity=Math.max(e,Math.ceil(this.bufferCapacity*1.5)||1e3),J(t,`reallocate`,this,3)([this.bufferCapacity]))}}])}(Rn);function ir(){return`#version 300 es

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

${_n}
${vn}
${bn}
${gn}

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

  ${ln}

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
`}var ar=`#version 300 es
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
`;function or(e,t,n,r){var i=r.label,a=i===void 0?{}:i,o=a.margin??5,s=a.zoomToLabelSizeRatioFunction??function(){return 1},c=ir(),l=function(e){function t(){var e;B(this,t);var n=[...arguments];return e=H(this,t,[].concat(n)),R(e,`totalCount`,0),R(e,`bufferCapacity`,0),e}return U(t,e),V(t,[{key:`getDefinition`,value:function(){var e=WebGL2RenderingContext,t=e.FLOAT,n=e.UNSIGNED_BYTE;return{VERTICES:4,VERTEX_SHADER_SOURCE:c,FRAGMENT_SHADER_SOURCE:ar,METHOD:e.TRIANGLE_STRIP,UNIFORMS:[`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_cameraAngle`,`u_resolution`,`u_pixelRatio`,`u_labelMargin`,`u_zoomLabelSizeRatio`,`u_labelPixelSnapping`,`u_pickingPadding`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_nodeFrameTexture`,`u_nodeFrameTextureWidth`],ATTRIBUTES:[{name:`a_nodeIndex`,size:1,type:t},{name:`a_id`,size:4,type:n,normalized:!0},{name:`a_color`,size:4,type:n,normalized:!0},{name:`a_labelWidth`,size:1,type:t},{name:`a_labelHeight`,size:1,type:t},{name:`a_textHeight`,size:1,type:t},{name:`a_positionMode`,size:1,type:t},{name:`a_labelAngle`,size:1,type:t},{name:`a_padding`,size:1,type:t}],CONSTANT_ATTRIBUTES:[{name:`a_quadCorner`,size:2,type:t}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:`processLabelBackground`,value:function(e,t){var n=this.floats,r=this.ints,i=e*this.STRIDE;n[i++]=t.nodeIndex,r[i++]=t.id,n[i++]=t.color,n[i++]=t.labelWidth,n[i++]=t.labelHeight,n[i++]=t.textHeight,n[i++]=t.positionMode,n[i++]=t.labelAngle,n[i++]=t.padding}},{key:`setUniforms`,value:function(e,n){var r=n.gl,i=n.uniformLocations;r.uniformMatrix3fv(i.u_matrix,!1,e.matrix),r.uniform1f(i.u_sizeRatio,e.sizeRatio),r.uniform1f(i.u_correctionRatio,e.correctionRatio),r.uniform1f(i.u_cameraAngle,e.cameraAngle),r.uniform2f(i.u_resolution,e.width*e.pixelRatio,e.height*e.pixelRatio),r.uniform1f(i.u_pixelRatio,e.pixelRatio),r.uniform1f(i.u_labelMargin,t.labelMargin),r.uniform1f(i.u_zoomLabelSizeRatio,1/s(e.zoomRatio)),r.uniform1f(i.u_labelPixelSnapping,e.labelPixelSnapping),r.uniform1f(i.u_pickingPadding,e.labelPickingPadding),r.uniform1i(i.u_nodeDataTexture,e.nodeDataTextureUnit),r.uniform1i(i.u_nodeDataTextureWidth,e.nodeDataTextureWidth),r.uniform1i(i.u_nodeFrameTexture,e.nodeFrameTextureUnit),r.uniform1i(i.u_nodeFrameTextureWidth,e.nodeFrameTextureWidth)}},{key:`hasNothingToRender`,value:function(){return this.totalCount===0}},{key:`drawWebGL`,value:function(e,t){var n=t.gl;this.totalCount!==0&&n.drawArraysInstanced(n.TRIANGLE_STRIP,0,this.VERTICES,this.totalCount)}},{key:`reallocate`,value:function(e){this.totalCount=e,e>this.bufferCapacity&&(this.bufferCapacity=Math.max(e,Math.ceil(this.bufferCapacity*1.5)||10),J(t,`reallocate`,this,3)([this.bufferCapacity]))}}])}(Rn);return R(l,`labelMargin`,o),new l(e,t,n)}var sr={fontSize:64,buffer:8,radius:24,cutoff:.25,maxTextureSize:2048,debounceTimeout:100},cr=2,lr=0x56bc75e2d63100000;function ur(e,t,n,r,i){var a=e+i*4,o=document.createElement(`canvas`);o.width=a,o.height=a;var s=o.getContext(`2d`,{willReadFrequently:!0});return s.font=`${r} ${n} ${e}px ${t}`,s.textBaseline=`alphabetic`,s.textAlign=`left`,s.fillStyle=`black`,{ctx:s,canvasSize:a,gridOuter:new Float64Array(a*a),gridInner:new Float64Array(a*a),f:new Float64Array(a),z:new Float64Array(a+1),v:new Uint16Array(a)}}function dr(e,t,n,r,i){var a=e.ctx,o=e.canvasSize,s=a.measureText(t),c=s.width,l=s.actualBoundingBoxAscent,u=s.actualBoundingBoxDescent,d=s.actualBoundingBoxLeft,f=s.actualBoundingBoxRight,p=Math.ceil(l),m=Math.ceil(d),h=Math.max(0,Math.min(o-n,Math.ceil(d)+Math.ceil(f))),g=Math.min(o-n,p+Math.ceil(u)),_=h+2*n,v=g+2*n,y=Math.max(_*v,0),b=new Uint8ClampedArray(y),x={data:b,width:_,height:v,glyphWidth:h,glyphHeight:g,glyphTop:p,glyphLeft:m,glyphAdvance:c};if(h===0||g===0)return x;var S=e.gridInner,C=e.gridOuter;a.clearRect(n,n,h,g),a.fillText(t,n+m,n+p);var w=a.getImageData(n,n,h,g);C.fill(lr,0,y),S.fill(0,0,y);for(var T=0;T<g;T++)for(var E=0;E<h;E++){var D=w.data[4*(T*h+E)+3]/255;if(D!==0){var O=(T+n)*_+E+n;if(D===1)C[O]=0,S[O]=lr;else{var k=.5-D;C[O]=k>0?k*k:0,S[O]=k<0?k*k:0}}}fr(C,0,0,_,v,_,e.f,e.v,e.z),fr(S,n,n,h,g,_,e.f,e.v,e.z);for(var A=0;A<y;A++){var j=Math.sqrt(C[A])-Math.sqrt(S[A]);b[A]=Math.round(255-255*(j/r+i))}return x}function fr(e,t,n,r,i,a,o,s,c){for(var l=t;l<t+r;l++)pr(e,n*a+l,a,i,o,s,c);for(var u=n;u<n+i;u++)pr(e,u*a+t,1,r,o,s,c)}function pr(e,t,n,r,i,a,o){a[0]=0,o[0]=-lr,o[1]=lr,i[0]=e[t];for(var s=1,c=0,l=0;s<r;s++){i[s]=e[t+s*n];var u=s*s;do{var d=a[c];l=(i[s]-i[d]+u-d*d)/(s-d)/2}while(l<=o[c]&&--c>-1);c++,a[c]=s,o[c]=l,o[c+1]=lr}for(var f=0,p=0;f<r;f++){for(;o[p+1]<f;)p++;var m=a[p],h=f-m;e[t+f*n]=i[m]+h*h}}var mr=function(e){function t(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B(this,t),e=H(this,t),R(e,`fonts`,new Map),R(e,`textures`,[]),R(e,`cursor`,{x:0,y:0,rowHeight:0,atlasIndex:0}),R(e,`pendingGlyphs`,[]),R(e,`debounceTimer`,null),e.options=z(z({},sr),n),e.canvas=document.createElement(`canvas`),e.canvas.width=e.options.maxTextureSize,e.canvas.height=e.options.maxTextureSize,e.ctx=e.canvas.getContext(`2d`,{willReadFrequently:!0}),e.measureCanvas=document.createElement(`canvas`),e.measureCtx=e.measureCanvas.getContext(`2d`),e.textures.push(e.ctx.getImageData(0,0,1,1)),e}return U(t,e),V(t,[{key:`getFontKey`,value:function(e){return`${e.family}-${e.weight}-${e.style}`}},{key:`registerFont`,value:function(e){var t=this.getFontKey(e);if(this.fonts.has(t))return t;var n=ur(this.options.fontSize,e.family,e.weight,e.style,this.options.buffer);return this.fonts.set(t,{descriptor:e,generator:n,glyphs:new Map}),t}},{key:`ensureGlyphs`,value:function(e,t){var n=this.fonts.get(t);if(!n)throw Error(`Font "${t}" is not registered. Call registerFont() first.`);var r=!1,i=l(e),a;try{for(i.s();!(a=i.n()).done;){var o=a.value.codePointAt(0);o!==void 0&&(n.glyphs.has(o)||(this.pendingGlyphs.push({fontKey:t,charCode:o}),r=!0))}}catch(e){i.e(e)}finally{i.f()}r&&this.scheduleTextureGeneration()}},{key:`measureText`,value:function(e,t){var n=this.fonts.get(t);if(!n)throw Error(`Font "${t}" is not registered.`);var r=n.descriptor,i=r.family,a=r.weight,o=r.style;return this.measureCtx.font=`${o} ${a} ${this.options.fontSize}px ${i}`,this.measureCtx.measureText(e).width}},{key:`getGlyph`,value:function(e,t){var n=this.fonts.get(t);if(n)return n.glyphs.get(e)}},{key:`getTextures`,value:function(){return this.textures}},{key:`getFontCount`,value:function(){return this.fonts.size}},{key:`getGlyphCount`,value:function(){var e=0,t=l(this.fonts.values()),n;try{for(t.s();!(n=t.n()).done;){var r=n.value;e+=r.glyphs.size}}catch(e){t.e(e)}finally{t.f()}return e}},{key:`hasPendingGlyphs`,value:function(){return this.pendingGlyphs.length>0}},{key:`flush`,value:function(){this.debounceTimer&&=(clearTimeout(this.debounceTimer),null),this.generateTextures()}},{key:`destroy`,value:function(){this.debounceTimer&&clearTimeout(this.debounceTimer),this.fonts.clear(),this.textures=[],this.pendingGlyphs=[],this.removeAllListeners()}},{key:`scheduleTextureGeneration`,value:function(){var e=this;this.debounceTimer===null&&(this.options.debounceTimeout===null?this.generateTextures():this.debounceTimer=setTimeout(function(){e.debounceTimer=null,e.generateTextures()},this.options.debounceTimeout))}},{key:`generateTextures`,value:function(){if(this.pendingGlyphs.length!==0){var e=this.options,n=e.maxTextureSize,r=e.buffer,i=e.radius,a=e.cutoff,o=l(this.pendingGlyphs),s;try{for(o.s();!(s=o.n()).done;){var c=s.value,u=c.fontKey,d=c.charCode,f=this.fonts.get(u);if(f&&!f.glyphs.has(d)){var p=String.fromCodePoint(d),m=dr(f.generator,p,r,i,a),h=m.width,g=m.height;this.cursor.x+h+cr>n&&(this.cursor.x=0,this.cursor.y+=this.cursor.rowHeight+cr,this.cursor.rowHeight=0),this.cursor.y+g+cr>n&&(this.finalizeCurrentTexture(),this.cursor={x:0,y:0,rowHeight:0,atlasIndex:this.cursor.atlasIndex+1},this.ctx.clearRect(0,0,n,n));for(var _=m.data,v=new Uint8ClampedArray(h*g*4),y=0;y<_.length;y++){var b=y*4;v[b]=255,v[b+1]=255,v[b+2]=255,v[b+3]=_[y]}var x=new ImageData(v,h,g);this.ctx.putImageData(x,this.cursor.x,this.cursor.y);var S={charCode:d,width:m.glyphWidth,height:m.glyphHeight,bearingX:-m.glyphLeft-r,bearingY:m.glyphTop+r,advance:m.glyphAdvance,atlasX:this.cursor.x,atlasY:this.cursor.y,atlasWidth:h,atlasHeight:g,atlasIndex:this.cursor.atlasIndex};f.glyphs.set(d,S),this.cursor.x+=h+cr,this.cursor.rowHeight=Math.max(this.cursor.rowHeight,g)}}}catch(e){o.e(e)}finally{o.f()}this.finalizeCurrentTexture(),this.pendingGlyphs=[],this.emit(t.ATLAS_UPDATED_EVENT,{textures:this.textures,glyphCount:this.getGlyphCount()})}}},{key:`finalizeCurrentTexture`,value:function(){var e=this.options.maxTextureSize,t=this.cursor.y>0||this.cursor.rowHeight>0,n=Math.min(e,Math.max(this.cursor.x,t?e:1)),r=Math.min(e,this.cursor.y+this.cursor.rowHeight+cr),i=this.ctx.getImageData(0,0,n,r);this.cursor.atlasIndex>=this.textures.length?this.textures.push(i):this.textures[this.cursor.atlasIndex]=i}}])}(ye.EventEmitter);R(mr,`ATLAS_UPDATED_EVENT`,`atlasUpdated`);var hr=sr.fontSize;function gr(){return`#version 300 es

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
const float ATLAS_FONT_SIZE = ${q(hr)};

// ============================================================================
// Helper Functions
// ============================================================================

${_n}
${vn}
${bn}
${dn}

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
`}function _r(){return`#version 300 es
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
`}function vr(){return[`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_cameraAngle`,`u_resolution`,`u_atlasSize`,`u_atlas`,`u_gamma`,`u_sdfBuffer`,`u_pixelRatio`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_nodeFrameTexture`,`u_nodeFrameTextureWidth`,`u_zoomLabelSizeRatio`,`u_labelPixelSnapping`]}function yr(){return{vertexShader:gr(),fragmentShader:_r(),uniforms:vr()}}function br(e,t,n,r){var i=r.label,a=i===void 0?{}:i,o=a.margin??5,s=a.zoomToLabelSizeRatioFunction??function(){return 1},c=yr(),u=function(e){function t(e,n,r){var i;if(B(this,t),i=H(this,t,[e,n,r]),R(i,`atlasTexture`,null),R(i,`atlasNeedsUpdate`,!1),R(i,`labelGlyphCache`,new Map),i.atlasFontSize=sr.fontSize*zt(),i.atlasManager=new mr({fontSize:i.atlasFontSize}),i.gamma=.025,i.sdfBuffer=sr.cutoff,i.atlasTexture=e.createTexture(),!i.atlasTexture)throw Error(`NodeLabelProgram: failed to create atlas texture`);e.bindTexture(e.TEXTURE_2D,i.atlasTexture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),i.atlasManager.on(mr.ATLAS_UPDATED_EVENT,function(){i.atlasNeedsUpdate=!0});var o={family:a.font?.family||`sans-serif`,weight:a.font?.weight||`normal`,style:a.font?.style||`normal`};return i.defaultFontKey=i.atlasManager.registerFont(o),i}return U(t,e),V(t,[{key:`getDefinition`,value:function(){var e=WebGL2RenderingContext,t=e.FLOAT,n=e.UNSIGNED_BYTE,r=e.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:c.vertexShader,FRAGMENT_SHADER_SOURCE:c.fragmentShader,METHOD:r,UNIFORMS:c.uniforms,ATTRIBUTES:[{name:`a_nodeIndex`,size:1,type:t},{name:`a_charOffset`,size:2,type:t},{name:`a_charSize`,size:2,type:t},{name:`a_texCoords`,size:4,type:t},{name:`a_color`,size:4,type:n,normalized:!0},{name:`a_margin`,size:1,type:t},{name:`a_positionMode`,size:1,type:t},{name:`a_labelWidth`,size:1,type:t},{name:`a_labelHeight`,size:1,type:t},{name:`a_verticalCenter`,size:1,type:t},{name:`a_textHeight`,size:1,type:t},{name:`a_labelAngle`,size:1,type:t}],CONSTANT_ATTRIBUTES:[{name:`a_quadCorner`,size:2,type:t}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:`prepareLabelGlyphs`,value:function(e,t){if(t.hidden||!t.text)this.labelGlyphCache.delete(e);else{var n=t.text,r=t.fontKey||this.defaultFontKey;this.atlasManager.ensureGlyphs(n,r);var i=[],a=[],o=0,s=0,c=0,u=l(n),d;try{for(u.s();!(d=u.n()).done;){var f=d.value.codePointAt(0);if(f===void 0)i.push(void 0),a.push(o);else{var p=this.atlasManager.getGlyph(f,r);i.push(p),a.push(o),p&&(o+=p.advance,s=Math.max(s,p.bearingY),c=Math.max(c,p.atlasHeight-p.bearingY))}}}catch(e){u.e(e)}finally{u.f()}this.labelGlyphCache.set(e,{glyphs:i,xOffsets:a,totalWidth:o,totalHeight:s+c,verticalCenterOffset:(s-c)/2})}}},{key:`processCharacter`,value:function(e,t,n,r){var i=this.floats,a=this.STRIDE,o=e*a,s=this.labelGlyphCache.get(t.parentKey);if(!s||!s.glyphs[r])for(var c=0;c<a;c++)i[o+c]=0;else{var l=s.glyphs[r],u=s.xOffsets[r],d=t.size/this.atlasFontSize,f=M(t.color),p=o;i[p++]=t.nodeIndex,i[p++]=(u+l.bearingX)*d,i[p++]=-l.bearingY*d,i[p++]=l.atlasWidth*d,i[p++]=l.atlasHeight*d,i[p++]=l.atlasX,i[p++]=l.atlasY,i[p++]=l.atlasWidth,i[p++]=l.atlasHeight,i[p++]=f,i[p++]=t.margin,i[p++]=cn[t.position],i[p++]=s.totalWidth*d,i[p++]=t.size,i[p++]=s.verticalCenterOffset*d,i[p++]=s.totalHeight*d,i[p++]=t.labelAngle}}},{key:`processLabel`,value:function(e,n,r){return this.prepareLabelGlyphs(e,r),J(t,`processLabel`,this,3)([e,n,r])}},{key:`updateAtlasTexture`,value:function(){if(this.atlasNeedsUpdate){var e=this.normalProgram.gl,t=this.atlasManager.getTextures();if(t.length!==0){var n=t[0];e.bindTexture(e.TEXTURE_2D,this.atlasTexture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n.width,n.height,0,e.RGBA,e.UNSIGNED_BYTE,n.data),e.bindTexture(e.TEXTURE_2D,null),this.atlasNeedsUpdate=!1}}}},{key:`setUniforms`,value:function(e,n){var r=n.gl,i=n.uniformLocations;r.uniformMatrix3fv(i.u_matrix,!1,e.matrix),r.uniform1f(i.u_sizeRatio,e.sizeRatio),r.uniform1f(i.u_correctionRatio,e.correctionRatio),r.uniform1f(i.u_cameraAngle,e.cameraAngle),r.uniform2f(i.u_resolution,e.width*e.pixelRatio,e.height*e.pixelRatio);var a=this.atlasManager.getTextures();a.length>0?r.uniform2f(i.u_atlasSize,a[0].width,a[0].height):r.uniform2f(i.u_atlasSize,1,1),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,this.atlasTexture),r.uniform1i(i.u_atlas,0),i.u_nodeDataTexture!==void 0&&r.uniform1i(i.u_nodeDataTexture,e.nodeDataTextureUnit),i.u_nodeDataTextureWidth!==void 0&&r.uniform1i(i.u_nodeDataTextureWidth,e.nodeDataTextureWidth),r.uniform1i(i.u_nodeFrameTexture,e.nodeFrameTextureUnit),r.uniform1i(i.u_nodeFrameTextureWidth,e.nodeFrameTextureWidth),r.uniform1f(i.u_gamma,this.gamma),r.uniform1f(i.u_sdfBuffer,this.sdfBuffer),r.uniform1f(i.u_pixelRatio,e.pixelRatio),r.uniform1f(i.u_zoomLabelSizeRatio,1/t.zoomToLabelSizeRatioFunction(e.zoomRatio)),r.uniform1f(i.u_labelPixelSnapping,e.labelPixelSnapping)}},{key:`renderProgram`,value:function(e,n){this.updateAtlasTexture(),this.atlasManager.hasPendingGlyphs()&&(this.atlasManager.flush(),this.updateAtlasTexture()),J(t,`renderProgram`,this,3)([e,n])}},{key:`registerFont`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:`normal`,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:`normal`;return this.atlasManager.registerFont({family:e,weight:t,style:n})}},{key:`getAtlasManager`,value:function(){return this.atlasManager}},{key:`measureLabel`,value:function(e,t,n){var r=n||this.defaultFontKey;this.atlasManager.ensureGlyphs(e,r),this.atlasManager.hasPendingGlyphs()&&this.atlasManager.flush();var i=0,a=0,o=0,s=l(e),c;try{for(s.s();!(c=s.n()).done;){var u=c.value.codePointAt(0);if(u!==void 0){var d=this.atlasManager.getGlyph(u,r);d&&(i+=d.advance,a=Math.max(a,d.bearingY),o=Math.max(o,d.atlasHeight-d.bearingY))}}}catch(e){s.e(e)}finally{s.f()}var f=t/this.atlasFontSize;return{width:i*f,height:t,textHeight:(a+o)*f}}},{key:`ensureGlyphsReady`,value:function(e,t){var n=t||this.defaultFontKey,r=l(e),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;this.atlasManager.ensureGlyphs(a,n)}}catch(e){r.e(e)}finally{r.f()}this.atlasManager.flush()}},{key:`kill`,value:function(){var e=this.normalProgram.gl;this.atlasTexture&&=(e.deleteTexture(this.atlasTexture),null),this.atlasManager.destroy(),this.labelGlyphCache.clear(),J(t,`kill`,this,3)([])}}])}(rr);return R(u,`labelMargin`,o),R(u,`zoomToLabelSizeRatioFunction`,s),new u(e,t,n)}var xr=`#version 300 es
precision highp float;

in float v_edgeDist;

// R32F target: only the .r channel is stored.
out vec4 fragColor;

void main() {
  fragColor = vec4(v_edgeDist, 0.0, 0.0, 0.0);
}
`;function Sr(e,t,n){var r=an(e),i=on(e).map(function(e){return`uniform ${e.type} ${e.name};`}).join(`
`),a=xn(e,n),o=a.code,s=a.multiShape,c=Gn(e,t),l=Object.keys(c.specs).map(function(e){return`float v_${e};`}).join(`
`),u=Pn(c,{varPrefix:`nodeAttr`,baseTexelExpr:`nodeIdx * u_layerAttributeTexelsPerNode`,textureWidthUniform:`u_layerAttributeTextureWidth`,textureSamplerUniform:`u_layerAttributeTexture`});return`#version 300 es
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

${_n}
${vn}
${r}
${o}
${dn}

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
`}var Cr=function(){function e(t,n){B(this,e),R(this,`uniformLocations`,{});var r=n.shapes,i=n.layers,a=n.shapeGlobalIds;if(r.length===0)throw Error(`NodeLabelFramePass: at least one shape must be provided`);this.gl=t,this.shapeUniforms=on(r),this.hasAttributeData=Object.keys(Gn(r,i).offsets).length>0,this.vertexShader=Ut(t,Sr(r,i,a)),this.fragmentShader=Wt(t,xr),this.program=Gt(t,[this.vertexShader,this.fragmentShader]);var o=l([`u_cameraAngle`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_frameTextureWidth`,`u_frameTextureHeight`,`u_layerAttributeTexture`,`u_layerAttributeTextureWidth`,`u_layerAttributeTexelsPerNode`].concat(W(this.shapeUniforms.map(function(e){return e.name})))),s;try{for(o.s();!(s=o.n()).done;){var u=s.value;this.uniformLocations[u]=t.getUniformLocation(this.program,u)}}catch(e){o.e(e)}finally{o.f()}var d=e.FLOATS_PER_POINT*4;this.vao=t.createVertexArray(),this.buffer=t.createBuffer(),t.bindVertexArray(this.vao),t.bindBuffer(t.ARRAY_BUFFER,this.buffer);var f=l([[`a_nodeIndex`,0],[`a_positionMode`,4],[`a_labelAngle`,8]]),p;try{for(f.s();!(p=f.n()).done;){var m=c(p.value,2),h=m[0],g=m[1],_=t.getAttribLocation(this.program,h);_>=0&&(t.enableVertexAttribArray(_),t.vertexAttribPointer(_,1,t.FLOAT,!1,d,g))}}catch(e){f.e(e)}finally{f.f()}t.bindVertexArray(null)}return V(e,[{key:`run`,value:function(t,n,r,i,a){if(n!==0){var o=this.gl;o.useProgram(this.program),o.bindVertexArray(this.vao),o.bindBuffer(o.ARRAY_BUFFER,this.buffer),o.bufferData(o.ARRAY_BUFFER,t.subarray(0,n*e.FLOATS_PER_POINT),o.DYNAMIC_DRAW);var s=this.uniformLocations;o.uniform1f(s.u_cameraAngle,i.cameraAngle),o.uniform1i(s.u_nodeDataTexture,i.nodeDataTextureUnit),o.uniform1i(s.u_nodeDataTextureWidth,i.nodeDataTextureWidth),o.uniform1f(s.u_frameTextureWidth,r.getTextureWidth()),o.uniform1f(s.u_frameTextureHeight,r.getTextureHeight()),this.hasAttributeData&&a&&(a.bind(Un),s.u_layerAttributeTexture&&o.uniform1i(s.u_layerAttributeTexture,Un),s.u_layerAttributeTextureWidth&&o.uniform1i(s.u_layerAttributeTextureWidth,a.getTextureWidth()),s.u_layerAttributeTexelsPerNode&&o.uniform1i(s.u_layerAttributeTexelsPerNode,a.getTexelsPerItem()));var c=l(this.shapeUniforms),u;try{for(c.s();!(u=c.n()).done;){var d=u.value;Fn(o,this.uniformLocations[d.name],d)}}catch(e){c.e(e)}finally{c.f()}r.bindAsRenderTarget(),o.disable(o.BLEND),o.disable(o.DEPTH_TEST),o.drawArrays(o.POINTS,0,n),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindVertexArray(null)}}},{key:`kill`,value:function(){var e=this.gl;e.deleteProgram(this.program),e.deleteShader(this.vertexShader),e.deleteShader(this.fragmentShader),e.deleteBuffer(this.buffer),e.deleteVertexArray(this.vao)}}])}();R(Cr,`FLOATS_PER_POINT`,3);function wr(e,t,n,r,i){var a,o=r.label,s=o===void 0?{}:o,c=r.shapes;if(c.length===0)throw Error(`createNodeProgram: at least one shape must be provided in 'shapes'`);var l={},u=[],d;c.forEach(function(e,t){var n=$t(e);t===0&&(d=n),l[e.name]=t,u[t]=en(n)});var f=W(r.layers),p=Xn({shapes:c,layers:f,shapeGlobalIds:c.length>1?u:void 0,antialias:i}),m=br(e,null,n,{label:s}),h=nr(e,null,n,{shapes:c,layers:f,getAttributeTexture:function(){return S.getAttributeTexture()},label:s,shapeGlobalIds:c.length>1?u:void 0}),g=or(e,t,n,{label:s}),_=r.labelAttachments&&Object.keys(r.labelAttachments).length>0?Hn(e,null,n,{label:s}):null,v=new Cr(e,{shapes:c,layers:f,shapeGlobalIds:c.length>1?u:void 0}),y=Wn(c,f),b=Y(y),x=(a=function(e){function t(e,n,r){var i;B(this,t),i=H(this,t,[e,n,r]),R(i,`layerLifecycles`,new Map),R(i,`layersNeedingRegeneration`,new Set),R(i,`attrDescriptors`,[]),i._pickingBuffer=n;var a=x.layerTextures.get(e);a||(a=new An(e,b),x.layerTextures.set(e,a)),i.layerAttributeTexture=a;var o=x.textureRefCounts.get(e)||0;x.textureRefCounts.set(e,o+1),i.packedAttributeData=new Float32Array(b.floatsPerItem),f.forEach(function(t,n){if(t.lifecycle){var a={gl:e,renderer:{refresh:function(){return r.refresh()}},getUniformLocation:function(t){return e.getUniformLocation(i.normalProgram.program,t)},requestShaderRegeneration:function(){i.layersNeedingRegeneration.add(n)},requestRefresh:function(){r.refresh()}},o=t.lifecycle(a);i.layerLifecycles.set(n,o)}}),i.layerLifecycles.forEach(function(e){var t;(t=e.init)==null||t.call(e)});var s=new Map;return i.layerLifecycles.forEach(function(e,t){e.getAttributeData&&s.set(t,e)}),i.attrDescriptors=jn(y,b,s),i}return U(t,e),V(t,[{key:`getDefinition`,value:function(){var e=WebGL2RenderingContext,t=e.FLOAT,n=e.TRIANGLE_STRIP;return{VERTICES:4,VERTEX_SHADER_SOURCE:p.vertexShader,FRAGMENT_SHADER_SOURCE:p.fragmentShader,METHOD:n,UNIFORMS:p.uniforms,ATTRIBUTES:p.attributes,CONSTANT_ATTRIBUTES:[{name:`a_quadCorner`,size:2,type:t}],CONSTANT_DATA:[[-1,-1],[1,-1],[-1,1],[1,1]]}}},{key:`maybeRegenerateShaders`,value:function(){var e=this;if(this.layersNeedingRegeneration.size!==0){f=f.map(function(t,n){if(e.layersNeedingRegeneration.has(n)){var r=e.layerLifecycles.get(n);if(r!=null&&r.regenerate)return z(z({},r.regenerate()),{},{lifecycle:t.lifecycle})}return t}),this.layersNeedingRegeneration.clear(),p=Xn({shapes:c,layers:f,shapeGlobalIds:c.length>1?u:void 0,antialias:this.renderer.getSetting(`antialiasNodes`)});var t=this.normalProgram.gl,n=this.normalProgram,r=n.program,i=n.buffer,a=n.vertexShader,o=n.fragmentShader;t.deleteProgram(r),t.deleteBuffer(i),t.deleteShader(a),t.deleteShader(o),this.normalProgram=this.getProgramInfo(`normal`,t,p.vertexShader,p.fragmentShader,this._pickingBuffer)}}},{key:`allocateNode`,value:function(e){this.layerAttributeTexture.allocate(e)}},{key:`freeNode`,value:function(e){this.layerAttributeTexture.free(e)}},{key:`getAttributeTexture`,value:function(){return this.layerAttributeTexture}},{key:`uploadLayerTexture`,value:function(){this.layerAttributeTexture.upload()}},{key:`process`,value:function(e,t,n,r,i){var a=t*this.STRIDE;if(n.visibility===`hidden`){for(var o=a+this.STRIDE;a<o;a++)this.floats[a]=0;this.floats[t*this.STRIDE]=On}else this.processVisibleItem(P(e),a,n,r,i)}},{key:`processVisibleItem`,value:function(e,t,n,r,i){var a=this.floats,o=this.ints;if(a[t++]=r,o[t++]=e,a[t++]=n.opacity??1,b.floatsPerItem!==0){var s=this.packedAttributeData;Mn(this.attrDescriptors,n,s,n.color,this.layerLifecycles,0),this.layerAttributeTexture.updateAllAttributes(i,s)}}},{key:`setUniforms`,value:function(e,t){var n=this,r=t.gl,i=t.uniformLocations;i.u_matrix&&r.uniformMatrix3fv(i.u_matrix,!1,e.matrix),i.u_sizeRatio&&r.uniform1f(i.u_sizeRatio,e.sizeRatio),i.u_correctionRatio&&r.uniform1f(i.u_correctionRatio,e.correctionRatio),i.u_pickingPadding&&r.uniform1f(i.u_pickingPadding,e.nodePickingPadding),i.u_cameraAngle&&r.uniform1f(i.u_cameraAngle,e.cameraAngle),i.u_nodeDataTexture&&r.uniform1i(i.u_nodeDataTexture,e.nodeDataTextureUnit),i.u_nodeDataTextureWidth&&r.uniform1i(i.u_nodeDataTextureWidth,e.nodeDataTextureWidth),i.u_layerAttributeTexture&&(this.layerAttributeTexture.bind(Un),r.uniform1i(i.u_layerAttributeTexture,Un)),i.u_layerAttributeTextureWidth&&r.uniform1i(i.u_layerAttributeTextureWidth,this.layerAttributeTexture.getTextureWidth()),i.u_layerAttributeTexelsPerNode&&r.uniform1i(i.u_layerAttributeTexelsPerNode,this.layerAttributeTexture.getTexelsPerItem()),c.forEach(function(e){e.uniforms.forEach(function(e){n.setTypedUniform(e,t)})}),f.forEach(function(e){e.uniforms.forEach(function(e){n.setTypedUniform(e,t)})})}},{key:`render`,value:function(e,n,r){this.maybeRegenerateShaders(),J(t,`render`,this,3)([e,n,r])}},{key:`renderProgram`,value:function(e,n){var r=n.gl,i=n.program;r.useProgram(i),n===this.normalProgram&&this.layerLifecycles.forEach(function(e){var t;(t=e.beforeRender)==null||t.call(e)}),J(t,`renderProgram`,this,3)([e,n])}},{key:`kill`,value:function(){this.layerLifecycles.forEach(function(e){var t;(t=e.kill)==null||t.call(e)}),this.layerLifecycles.clear();var e=this.normalProgram.gl,n=(x.textureRefCounts.get(e)||1)-1;n<=0?(this.layerAttributeTexture.kill(),x.layerTextures.delete(e),x.textureRefCounts.delete(e)):x.textureRefCounts.set(e,n),J(t,`kill`,this,3)([])}}])}(Rn),R(a,`layerTextures`,new WeakMap),R(a,`textureRefCounts`,new WeakMap),a),S=new x(e,null,n);return{nodeProgram:S,labelProgram:m,backdropProgram:h,labelBackgroundProgram:g,attachmentProgram:_,framePass:v,shapeSlug:d,shapeNameToIndex:c.length>1?l:void 0,shapeGlobalIds:c.length>1?u:void 0}}var Tr=6;function Er(e){var t=e.offsets,n=e.specs,r=e.floatsPerItem,i=Object.keys(t);if(i.length===0||r===0)return{uniformDeclarations:``,uniformNames:[],vertexVaryingDeclarations:``,fragmentVaryingDeclarations:``,fetchCode:``,varyingAssignments:``};var a=`
uniform sampler2D u_edgeAttributeTexture;
uniform int u_edgeAttributeTextureWidth;
uniform int u_edgeAttributeTexelsPerEdge;`,o=[`u_edgeAttributeTexture`,`u_edgeAttributeTextureWidth`,`u_edgeAttributeTexelsPerEdge`],s=i.map(function(e){return`${n[e].size===1?`float`:`vec${n[e].size}`} v_${e};`}),c=s.map(function(e){return`out ${e}`}).join(`
`),l=s.map(function(e){return`in ${e}`}).join(`
`),u=Pn(e,{varPrefix:`attr`,baseTexelExpr:`edgeIdx * u_edgeAttributeTexelsPerEdge`,textureWidthUniform:`u_edgeAttributeTextureWidth`,textureSamplerUniform:`u_edgeAttributeTexture`});return{uniformDeclarations:a,uniformNames:o,vertexVaryingDeclarations:c,fragmentVaryingDeclarations:l,fetchCode:u.fetchCode,varyingAssignments:u.varyingAssignments}}function Dr(e){return`
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
`}function Or(e){return`
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
`}function kr(e){return`
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
`}function Ar(e){return`
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
`}function jr(e){return`
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
`}function Mr(e){return`
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
`}function Nr(e){return`
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
`}function Pr(e,t){return RegExp(`\\b(float|vec[234]|void|int|bool)\\s+${t}\\s*\\(`).test(e)}function Fr(e,t){var n=[];return Pr(t,`path_${e}_length`)||n.push(Ar(e)),Pr(t,`path_${e}_closest_t`)||n.push(jr(e)),Pr(t,`path_${e}_distance`)||n.push(Mr(e)),Pr(t,`path_${e}_t_at_distance`)||n.push(Nr(e)),n.length>0?`
// ============================================================================
// Auto-generated fallback functions (path only provided position)
// ============================================================================
${n.join(`
`)}`:``}function Ir(e){var t=e.paths,n=e.layers,r=e.extremities??[];if(t.length===0)throw Error(`At least one path is required in 'paths'`);if(n.length===0)throw Error(`At least one layer is required in 'layers'`);var i=e.defaultHead??`none`,a=e.defaultTail??`none`;return{paths:t,extremities:r,layers:n,path:t[0],layer:n[0],defaultHead:i,defaultTail:a}}var Lr=WebGL2RenderingContext,Rr=Lr.FLOAT,zr=Lr.UNSIGNED_BYTE;function Br(e,t,n){var r=new Set(new Set([`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_zoomRatio`,`u_pixelRatio`,`u_cameraAngle`,`u_minEdgeThickness`,`u_pickingPadding`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_edgeDataTexture`,`u_edgeDataTextureWidth`,`u_edgeFrameTexture`,`u_edgeFrameTextureWidth`,`u_edgeAttributeTexture`,`u_edgeAttributeTextureWidth`,`u_edgeAttributeTexelsPerEdge`]));return e.forEach(function(e){return e.uniforms.forEach(function(e){return r.add(e.name)})}),t.forEach(function(e){return e.uniforms.forEach(function(e){return r.add(e.name)})}),n.forEach(function(e){return e.uniforms.forEach(function(e){return r.add(e.name)})}),Array.from(r)}function Vr(e){var t=new Set,n=[],r=l(e),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;t.has(a.name)||(t.add(a.name),n.push(`// Path: ${a.name}`),n.push(a.glsl),n.push(kr(a.name)),n.push(Fr(a.name,a.glsl)))}}catch(e){r.e(e)}finally{r.f()}return n.join(`

`)}function Hr(e){var t=[],n=l(e),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;t.push(`// Extremity: ${i.name}`),t.push(i.glsl)}}catch(e){n.e(e)}finally{n.f()}return t.join(`

`)}var Ur=[{queryName:`queryPathPosition`,pathFunc:`position`,returnType:`vec2`,params:`float t, vec2 source, vec2 target`,args:`t, source, target`},{queryName:`queryPathTangent`,pathFunc:`tangent`,returnType:`vec2`,params:`float t, vec2 source, vec2 target`,args:`t, source, target`},{queryName:`queryPathNormal`,pathFunc:`normal`,returnType:`vec2`,params:`float t, vec2 source, vec2 target`,args:`t, source, target`},{queryName:`queryPathLength`,pathFunc:`length`,returnType:`float`,params:`vec2 source, vec2 target`,args:`source, target`},{queryName:`queryPathClosestT`,pathFunc:`closest_t`,returnType:`float`,params:`vec2 p, vec2 source, vec2 target`,args:`p, source, target`}];function Wr(e,t){var n=t.queryName,r=t.pathFunc,i=t.returnType,a=t.params,o=t.args;return e.length===1?`${i} ${n}(int pathId, ${a}) {
  return path_${e[0].name}_${r}(${o});
}`:`${i} ${n}(int pathId, ${a}) {
  switch (pathId) {
${e.map(function(e,t){return`    case ${t}: return path_${e.name}_${r}(${o});`}).join(`
`)}
    default: return path_${e[0].name}_${r}(${o});
  }
}`}function Gr(e){return Ur.map(function(t){return Wr(e,t)}).join(`

`)}function Kr(e){return e.length===1?`float queryExtremitySDF(int extremityId, vec2 uv, float lengthRatio, float widthRatio) {
  return extremity_${e[0].name}(uv, lengthRatio, widthRatio);
}`:`float queryExtremitySDF(int extremityId, vec2 uv, float lengthRatio, float widthRatio) {
  switch (extremityId) {
${e.map(function(e,t){return`    case ${t}: return extremity_${e.name}(uv, lengthRatio, widthRatio);`}).join(`
`)}
    default: return extremity_${e[0].name}(uv, lengthRatio, widthRatio);
  }
}`}function qr(e){var t=[],n=l(e),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;t.push(Dr(i.name)),t.push(Or(i.name))}}catch(e){n.e(e)}finally{n.f()}if(e.length===1)t.push(`
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

`)}function Jr(e,t,n,r,i){var a=Er(Y([].concat(W(e),W(n)))),o=Gn(r,i),s=Object.keys(o.offsets),c=function(e){var t=o.specs[e].size;return t===1?`float`:`vec${t}`},l=s.map(function(e){return`${c(e)} v_source_${e};
${c(e)} v_target_${e};`}).join(`
`),u=Pn(o,{varPrefix:`srcNodeAttr`,baseTexelExpr:`srcIdx * u_layerAttributeTexelsPerNode`,textureWidthUniform:`u_layerAttributeTextureWidth`,textureSamplerUniform:`u_layerAttributeTexture`,outputPrefix:`v_source_`}),d=Pn(o,{varPrefix:`tgtNodeAttr`,baseTexelExpr:`tgtIdx * u_layerAttributeTexelsPerNode`,textureWidthUniform:`u_layerAttributeTextureWidth`,textureSamplerUniform:`u_layerAttributeTexture`,outputPrefix:`v_target_`}),f=s.map(function(e){return`${c(e)} g_${e};`}).join(`
`),p=s.map(function(e){return`  g_${e} = v_source_${e};`}).join(`
`),m=s.map(function(e){return`  g_${e} = v_target_${e};`}).join(`
`),h=new Set,g=[],_=function(e){h.has(e.name)||(h.add(e.name),g.push(`uniform ${e.type} ${e.name};`))};e.forEach(function(e){return e.uniforms.forEach(_)}),t.forEach(function(e){return e.uniforms.forEach(_)});var v=t.map(function(e){return q(e.widthFactor)}).join(`, `),y=Math.max.apply(Math,W(e.map(function(e){return e.minBodyLengthRatio||0})));return`#version 300 es

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
${_n}
${vn}

// Shape SDFs for node boundary clamping
${nn()}
${rn(new Set(s))}

// Path functions
${Vr(e)}
${Gr(e)}
${qr(e)}

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
  float minBodyLengthRatio = ${q(y)};

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
`}var Yr=0,Xr=1,Zr=2;function Qr(e,t,n){var r=[];n&&(r.push([Yr,0,-1],[Yr,0,1]),r.push([Yr,1,-1],[Yr,1,1]));for(var i=0;i<=e;i++){var a=i/e;r.push([Xr,a,-1],[Xr,a,1])}return t&&(r.push([Zr,0,-1],[Zr,0,1]),r.push([Zr,1,-1],[Zr,1,1])),{data:r,attributes:[{name:`a_zone`,size:1,type:Rr},{name:`a_zoneT`,size:1,type:Rr},{name:`a_side`,size:1,type:Rr}],verticesPerEdge:r.length}}function $r(e,t,n,r){var i=Er(Y([].concat(W(e),W(n)))),a=new Set([`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_zoomRatio`,`u_pixelRatio`,`u_cameraAngle`,`u_minEdgeThickness`,`u_pickingPadding`,`u_nodeDataTexture`]),o=new Set,s=[],c=function(e){!a.has(e.name)&&!o.has(e.name)&&(o.add(e.name),s.push(`uniform ${e.type} ${e.name};`))};e.forEach(function(e){return e.uniforms.forEach(c)}),t.forEach(function(e){return e.uniforms.forEach(c)}),n.forEach(function(e){return e.uniforms.forEach(c)});var l=r.map(function(e){return`in ${e.size===1?`float`:`vec${e.size}`} ${e.name};`}).join(`
`),u=t.map(function(e){return q(e.widthFactor)}).join(`, `),d=Math.max.apply(Math,W(e.map(function(e){return e.minBodyLengthRatio||0}))),f=n.some(function(e){return e.needsNodeColors}),p=e.some(function(e){return e.needsNodeSize});return`#version 300 es

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
${Vr(e)}

// Path selector functions
${Gr(e)}

// Node-data fetch helper (geometry texel of the two-texel node stride)
${_n}
${f?yn:``}
// Per-edge clamp from the frame-pass (tStart, tEnd, straightenFactor, pathLength)
${bn}

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
  float minBodyLengthRatio = ${q(d)};

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
`}function ei(e,t,n,r){var i=Er(Y([].concat(W(e),W(n)))),a=new Set([`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_zoomRatio`,`u_pixelRatio`,`u_cameraAngle`,`u_minEdgeThickness`,`u_pickingPadding`]),o=new Set,s=[],c=function(e){!a.has(e.name)&&!o.has(e.name)&&(o.add(e.name),s.push(`uniform ${e.type} ${e.name};`))};e.forEach(function(e){return e.uniforms.forEach(c)}),t.forEach(function(e){return e.uniforms.forEach(c)}),n.forEach(function(e){return e.uniforms.forEach(c)});var l=t.map(function(e){return q(e.baseRatio??.5)}).join(`, `),u=function(e){return t.length>1?`EXTREMITY_BASE_RATIOS[${e}]`:q(t[0]?.baseRatio??.5)},d=t.some(function(e){return fe(e.length)?!0:e.length>0}),f=n.some(function(e){return e.needsNodeColors}),p=e.some(function(e){return e.needsNodeSize}),m=n.map(function(e,t){return`  // Layer ${t+1}: ${e.name}
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
${Vr(e)}

// Path selector functions
${Gr(e)}

// All extremity functions
${Hr(t)}

// Extremity SDF selector (shared pool for head/tail)
${Kr(t)}

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
`}function ti(e,t,n){var r=fe(t.length)?!0:t.length>0,i=fe(n.length)?!0:n.length>0;if(e.generateConstantData){var a=e.generateConstantData();return{data:a.data,attributes:a.attributes,verticesPerEdge:a.verticesPerEdge}}return Qr(e.segments,r,i)}function ni(e){var t=Ir(e),n=t.paths,r=t.extremities,i=t.layers,a=e.antialias??!0,o=new Map,s=new Map,u=new Map,d=l(n),f;try{for(d.s();!(f=d.n()).done;){var p=f.value,m=l(r),h;try{for(m.s();!(h=m.n()).done;){var g=h.value,_=l(r),v;try{for(_.s();!(v=_.n()).done;){var y=v.value,b=`${p.name}:${g.name}:${y.name}`,x=ti(p,g,y);o.set(b,x.verticesPerEdge),s.set(b,x.data);var S=l(x.attributes),C;try{for(S.s();!(C=S.n()).done;){var w=C.value;u.has(w.name)||u.set(w.name,w)}}catch(e){S.e(e)}finally{S.f()}}}catch(e){_.e(e)}finally{_.f()}}}catch(e){m.e(e)}finally{m.f()}}}catch(e){d.e(e)}finally{d.f()}var T=Array.from(u.values()),E={};T.forEach(function(e,t){E[e.name]=t});var D=0,O=``,k=l(o),A;try{for(k.s();!(A=k.n()).done;){var j=c(A.value,2),M=j[0],N=j[1];N>D&&(D=N,O=M)}}catch(e){k.e(e)}finally{k.f()}var P=s.get(O)||[],F=c(O.split(`:`),1)[0],I=n.find(function(e){return e.name===F}),ee=[];ee=I!=null&&I.generateConstantData?I.generateConstantData().attributes:[{name:`a_zone`},{name:`a_zoneT`},{name:`a_side`}];var te=P.map(function(e){var t=Array(T.length).fill(0);return ee.forEach(function(n,r){var i=E[n.name];i!==void 0&&r<e.length&&(t[i]=e[r])}),t});return{vertexShader:$r(n,r,i,T),fragmentShader:ei(n,r,i,a),uniforms:Br(n,r,i),attributes:ri(),verticesPerEdge:D,constantData:te,constantAttributes:T,vertexCountsPerCombination:o,constantDataPerCombination:s}}function ri(e,t,n){return[{name:`a_edgeIndex`,size:1,type:Rr},{name:`a_color`,size:4,type:zr,normalized:!0},{name:`a_id`,size:4,type:zr,normalized:!0},{name:`a_opacity`,size:1,type:Rr}]}var ii=`#version 300 es
precision highp float;

in vec4 v_clamp;

// RGBA32F target: stores (tStart, tEnd, straightenFactor, pathLength).
out vec4 fragColor;

void main() {
  fragColor = v_clamp;
}
`,ai=function(){function e(t,n){B(this,e),R(this,`uniformLocations`,{});var r=n.paths,i=n.extremities,a=n.layers,o=n.nodeShapes,s=n.nodeLayers;this.gl=t,this.hasAttributeData=Y([].concat(W(r),W(a))).floatsPerItem>0,this.hasNodeAttributeData=Object.keys(Gn(o,s).offsets).length>0,this.vertexShader=Ut(t,Jr(r,i,a,o,s)),this.fragmentShader=Wt(t,ii),this.program=Gt(t,[this.vertexShader,this.fragmentShader]);var c=new Set;this.customUniforms=[];for(var u=0,d=[].concat(W(r),W(i));u<d.length;u++){var f=d[u],p=l(f.uniforms),m;try{for(p.s();!(m=p.n()).done;){var h=m.value;c.has(h.name)||(c.add(h.name),this.customUniforms.push(h))}}catch(e){p.e(e)}finally{p.f()}}var g=l([`u_sizeRatio`,`u_correctionRatio`,`u_cameraAngle`,`u_minEdgeThickness`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_edgeDataTexture`,`u_edgeDataTextureWidth`,`u_edgeAttributeTexture`,`u_edgeAttributeTextureWidth`,`u_edgeAttributeTexelsPerEdge`,`u_layerAttributeTexture`,`u_layerAttributeTextureWidth`,`u_layerAttributeTexelsPerNode`,`u_frameTextureWidth`,`u_frameTextureHeight`].concat(W(this.customUniforms.map(function(e){return e.name})))),_;try{for(g.s();!(_=g.n()).done;){var v=_.value;this.uniformLocations[v]=t.getUniformLocation(this.program,v)}}catch(e){g.e(e)}finally{g.f()}this.vao=t.createVertexArray()}return V(e,[{key:`run`,value:function(e,t,n,r,i){if(n!==0){var a=this.gl,o=this.uniformLocations;a.useProgram(this.program),a.bindVertexArray(this.vao),o.u_sizeRatio&&a.uniform1f(o.u_sizeRatio,e.sizeRatio),o.u_correctionRatio&&a.uniform1f(o.u_correctionRatio,e.correctionRatio),o.u_cameraAngle&&a.uniform1f(o.u_cameraAngle,e.cameraAngle),o.u_minEdgeThickness&&a.uniform1f(o.u_minEdgeThickness,e.minEdgeThickness),o.u_nodeDataTexture&&a.uniform1i(o.u_nodeDataTexture,e.nodeDataTextureUnit),o.u_nodeDataTextureWidth&&a.uniform1i(o.u_nodeDataTextureWidth,e.nodeDataTextureWidth),o.u_edgeDataTexture&&a.uniform1i(o.u_edgeDataTexture,e.edgeDataTextureUnit),o.u_edgeDataTextureWidth&&a.uniform1i(o.u_edgeDataTextureWidth,e.edgeDataTextureWidth),o.u_frameTextureWidth&&a.uniform1f(o.u_frameTextureWidth,t.getTextureWidth()),o.u_frameTextureHeight&&a.uniform1f(o.u_frameTextureHeight,t.getTextureHeight()),this.hasAttributeData&&r&&(r.bind(Tr),o.u_edgeAttributeTexture&&a.uniform1i(o.u_edgeAttributeTexture,Tr),o.u_edgeAttributeTextureWidth&&a.uniform1i(o.u_edgeAttributeTextureWidth,r.getTextureWidth()),o.u_edgeAttributeTexelsPerEdge&&a.uniform1i(o.u_edgeAttributeTexelsPerEdge,r.getTexelsPerItem())),this.hasNodeAttributeData&&i&&(i.bind(Un),o.u_layerAttributeTexture&&a.uniform1i(o.u_layerAttributeTexture,Un),o.u_layerAttributeTextureWidth&&a.uniform1i(o.u_layerAttributeTextureWidth,i.getTextureWidth()),o.u_layerAttributeTexelsPerNode&&a.uniform1i(o.u_layerAttributeTexelsPerNode,i.getTexelsPerItem()));var s=l(this.customUniforms),c;try{for(s.s();!(c=s.n()).done;){var u=c.value;Fn(a,this.uniformLocations[u.name],u)}}catch(e){s.e(e)}finally{s.f()}t.bindAsRenderTarget(),a.disable(a.BLEND),a.disable(a.DEPTH_TEST),a.drawArrays(a.POINTS,0,n),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindVertexArray(null)}}},{key:`kill`,value:function(){var e=this.gl;e.deleteProgram(this.program),e.deleteShader(this.vertexShader),e.deleteShader(this.fragmentShader),e.deleteVertexArray(this.vao)}}])}();function oi(e,t,n,r,i,a){return e.length===1?`${r} ${t}(int pathId, ${i}) {
  return path_${e[0].name}_${n}(${a});
}`:`${r} ${t}(int pathId, ${i}) {
  switch (pathId) {
${e.map(function(e,t){return`    case ${t}: return path_${e.name}_${n}(${a});`}).join(`
`)}
    default: return path_${e[0].name}_${n}(${a});
  }
}`}var si=`
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
`;function ci(e,t){var n=q(e),r=q(t);return`
float computeEdgeLabelAlpha(float bodyLength, float textWidthWebGL) {
  float ratio = textWidthWebGL > 0.0001 ? min(bodyLength / textWidthWebGL, 1.0) : 1.0;
  if (ratio < ${n}) return 0.0;
  if (ratio < ${r}) return (ratio - ${n}) / (${r} - ${n});
  return 1.0;
}
`}var li=`
float computeEdgeLabelScreenDir(int pathId, float t, vec2 source, vec2 target, mat3 matrix) {
  vec2 tangent = queryPathTangent(pathId, t, source, target);
  return (matrix * vec3(tangent, 0.0)).x < 0.0 ? -1.0 : 1.0;
}
`,ui=`
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
`;function di(e){var t=e.paths,n=e.minVisibilityThreshold,r=e.fullVisibilityThreshold,i=t.some(function(e){return e.hasSharpCorners}),a=t.map(function(e){return`// --- Path: ${e.name} ---
${e.glsl}

// Tangent/normal functions: analytical if provided, otherwise numerical
${e.analyticalTangentGlsl||kr(e.name)}

// Auto-generated fallbacks for any missing path functions
${Fr(e.name,e.glsl)}

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

${_n}
${bn}

// ============================================================================
// Path Functions (one block per path)
// ============================================================================

${a}

// ============================================================================
// Path Query Selectors (dispatch by pathId)
// ============================================================================

${oi(t,`queryPathPosition`,`position`,`vec2`,`float t, vec2 source, vec2 target`,`t, source, target`)}

${oi(t,`queryPathTangent`,`tangent`,`vec2`,`float t, vec2 source, vec2 target`,`t, source, target`)}

${oi(t,`queryPathNormal`,`normal`,`vec2`,`float t, vec2 source, vec2 target`,`t, source, target`)}

${oi(t,`queryPathLength`,`length`,`float`,`vec2 source, vec2 target`,`source, target`)}

${oi(t,`queryPathTAtDistance`,`t_at_distance`,`float`,`float dist, vec2 source, vec2 target`,`dist, source, target`)}

${o}

// ============================================================================
// Shared helpers (body bounds, alpha ramp, screen direction, perpendicular offset)
// ============================================================================

${si}
${ci(n,r)}
${li}
${ui}
`}var fi=sr.fontSize,pi=new Map,mi=24,hi=(mi+1)*2;function gi(e){var t=e.paths,n=e.fontSizeMode,r=e.headLengthRatio,i=e.tailLengthRatio,a=e.minVisibilityThreshold,o=e.fullVisibilityThreshold,s=e.keepUpright,c=n===`scaled`,l=ge(),u=Er(Y([].concat(W(t),[l])));return`#version 300 es

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

const float ATLAS_FONT_SIZE = ${q(fi)};
const float HEAD_RATIO = ${q(r)};
const float TAIL_RATIO = ${q(i)};
const int RIBBON_SEGMENTS = ${mi};

// Path attribute varyings (declared as plain locals since this shader has no FS inputs for them)
${u.vertexVaryingDeclarations.replace(/out /g,``)}

// Node size variables used by some path functions (self-loops, etc.)
float v_sourceNodeSize;
float v_targetNodeSize;

// Shared preamble: shape SDFs, path functions + selectors, clamp, helpers.
${di({paths:t,minVisibilityThreshold:a,fullVisibilityThreshold:o})}

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
`}var _i=`#version 300 es
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
`;function vi(e,t,n,r){var i=r.shaderConfig,a=i.paths,o=i.fontSizeMode;if(a.length===0)throw Error(`createEdgeLabelBackgroundProgram: shaderConfig must declare at least one path`);var s=ge(),c=Y([].concat(W(a),[s])),l=jn([].concat(W(a),[s]),c),u=gi(i);return new(function(e){function t(e,n,r){var i;return B(this,t),i=H(this,t,[e,n,r]),R(i,`totalCount`,0),R(i,`bufferCapacity`,0),R(i,`edgeAttributeTexture`,null),i.edgeAttributeTexture=new An(e,c),i.packedAttributeData=new Float32Array(c.floatsPerItem),i}return U(t,e),V(t,[{key:`getDefinition`,value:function(){for(var e=WebGL2RenderingContext,t=e.FLOAT,n=e.UNSIGNED_BYTE,r=e.TRIANGLE_STRIP,i=[],a=0;a<hi;a++)i.push([a]);var s=[`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_pixelRatio`,`u_cameraAngle`,`u_resolution`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_edgeDataTexture`,`u_edgeDataTextureWidth`,`u_edgeFrameTexture`,`u_edgeFrameTextureWidth`];return o===`scaled`&&s.push(`u_zoomSizeRatio`),c.floatsPerItem>0&&s.push(`u_edgeAttributeTexture`,`u_edgeAttributeTextureWidth`,`u_edgeAttributeTexelsPerEdge`),{VERTICES:hi,VERTEX_SHADER_SOURCE:u,FRAGMENT_SHADER_SOURCE:_i,METHOD:r,UNIFORMS:s,ATTRIBUTES:[{name:`a_edgeIndex`,size:1,type:t},{name:`a_edgeAttrIndex`,size:1,type:t},{name:`a_baseFontSize`,size:1,type:t},{name:`a_totalTextWidth`,size:1,type:t},{name:`a_positionMode`,size:1,type:t},{name:`a_margin`,size:1,type:t},{name:`a_padding`,size:1,type:t},{name:`a_color`,size:4,type:n,normalized:!0},{name:`a_id`,size:4,type:n,normalized:!0}],CONSTANT_ATTRIBUTES:[{name:`a_vertexIndex`,size:1,type:t}],CONSTANT_DATA:i}}},{key:`processEdgeLabelBackground`,value:function(e,t,n){var r=0;if(this.edgeAttributeTexture&&c.floatsPerItem>0){r=this.edgeAttributeTexture.allocate(t);var i=this.packedAttributeData;Mn(l,n.edgeAttributes,i,``,pi,0),this.edgeAttributeTexture.updateAllAttributes(t,i)}var a=this.floats,o=this.ints,s=e*this.STRIDE;a[s++]=n.edgeIndex,a[s++]=r,a[s++]=n.baseFontSize,a[s++]=n.totalTextWidth,a[s++]=n.positionMode,a[s++]=n.margin,a[s++]=n.padding,a[s++]=n.color,o[s++]=n.id}},{key:`setUniforms`,value:function(e,t){var n=t.gl,r=t.uniformLocations;if(n.uniformMatrix3fv(r.u_matrix,!1,e.matrix),n.uniform1f(r.u_sizeRatio,e.sizeRatio),n.uniform1f(r.u_correctionRatio,e.correctionRatio),n.uniform1f(r.u_pixelRatio,e.pixelRatio),n.uniform1f(r.u_cameraAngle,e.cameraAngle),n.uniform2f(r.u_resolution,e.width,e.height),r.u_nodeDataTexture!==void 0&&n.uniform1i(r.u_nodeDataTexture,e.nodeDataTextureUnit),r.u_nodeDataTextureWidth!==void 0&&n.uniform1i(r.u_nodeDataTextureWidth,e.nodeDataTextureWidth),r.u_edgeDataTexture!==void 0&&n.uniform1i(r.u_edgeDataTexture,e.edgeDataTextureUnit),r.u_edgeDataTextureWidth!==void 0&&n.uniform1i(r.u_edgeDataTextureWidth,e.edgeDataTextureWidth),r.u_edgeFrameTexture!==void 0&&n.uniform1i(r.u_edgeFrameTexture,e.edgeFrameTextureUnit),r.u_edgeFrameTextureWidth!==void 0&&n.uniform1i(r.u_edgeFrameTextureWidth,e.edgeFrameTextureWidth),o===`scaled`&&r.u_zoomSizeRatio!==void 0){var i=this.renderer.getSetting(`zoomToSizeRatioFunction`);n.uniform1f(r.u_zoomSizeRatio,1/i(e.zoomRatio))}this.edgeAttributeTexture&&c.floatsPerItem>0&&r.u_edgeAttributeTexture!==void 0&&(this.edgeAttributeTexture.bind(Tr),n.uniform1i(r.u_edgeAttributeTexture,Tr),n.uniform1i(r.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),n.uniform1i(r.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem()))}},{key:`renderProgram`,value:function(e,n){this.edgeAttributeTexture&&c.floatsPerItem>0&&this.edgeAttributeTexture.upload(),J(t,`renderProgram`,this,3)([e,n])}},{key:`kill`,value:function(){this.edgeAttributeTexture&&=(this.edgeAttributeTexture.kill(),null),J(t,`kill`,this,3)([])}},{key:`drawWebGL`,value:function(e,t){var n=t.gl;this.totalCount!==0&&n.drawArraysInstanced(n.TRIANGLE_STRIP,0,this.VERTICES,this.totalCount)}},{key:`reallocate`,value:function(e){this.totalCount=e,e>this.bufferCapacity&&(this.bufferCapacity=Math.max(e,Math.ceil(this.bufferCapacity*1.5)||10),J(t,`reallocate`,this,3)([this.bufferCapacity]))}}])}(Rn))(e,t,n)}function yi(e){return{paths:e.paths,headLengthRatio:e.headLengthRatio??0,tailLengthRatio:e.tailLengthRatio??0,fontSizeMode:e.fontSizeMode??`fixed`,minVisibilityThreshold:e.minVisibilityThreshold??.7,fullVisibilityThreshold:e.fullVisibilityThreshold??.8,keepUpright:e.keepUpright??!0}}var bi=sr.fontSize,xi=17/64;function Si(e){var t=e.paths,n=e.hasBorder,r=n!==void 0&&n,i=e.fontSizeMode,a=i===void 0?`fixed`:i,o=e.minVisibilityThreshold,s=o===void 0?.5:o,c=e.fullVisibilityThreshold,l=c===void 0?.6:c,u=e.keepUpright,d=u===void 0||u,f=a===`scaled`,p=t.some(function(e){return e.hasSharpCorners}),m=ge(),h=Er(Y([].concat(W(t),[m])));return`#version 300 es

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
const float ATLAS_FONT_SIZE = ${q(bi)};  // Base font size used in SDF atlas
const float VERTICAL_CENTER_RATIO = ${q(xi)};  // Baseline to visual center ratio

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
${di({paths:t,minVisibilityThreshold:s,fullVisibilityThreshold:l})}

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
`}function Ci(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).hasBorder,t=e!==void 0&&e;return`#version 300 es
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
`}function wi(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:`fixed`,r=[`u_matrix`,`u_sizeRatio`,`u_correctionRatio`,`u_pixelRatio`,`u_cameraAngle`,`u_sdfBufferPixels`,`u_resolution`,`u_atlasSize`,`u_atlas`,`u_gamma`,`u_sdfBuffer`,`u_nodeDataTexture`,`u_nodeDataTextureWidth`,`u_edgeDataTexture`,`u_edgeDataTextureWidth`,`u_edgeFrameTexture`,`u_edgeFrameTextureWidth`,`u_edgeAttributeTexture`,`u_edgeAttributeTextureWidth`,`u_edgeAttributeTexelsPerEdge`];n===`scaled`&&r.push(`u_zoomSizeRatio`),t&&r.push(`u_borderWidth`);var i=l(e),a;try{for(i.s();!(a=i.n()).done;){var o=a.value,s=l(o.uniforms),c;try{for(s.s();!(c=s.n()).done;){var u=c.value;r.includes(u.name)||r.push(u.name)}}catch(e){s.e(e)}finally{s.f()}}}catch(e){i.e(e)}finally{i.f()}return r}function Ti(e){var t=e.hasBorder,n=t!==void 0&&t,r=e.fontSizeMode,i=r===void 0?`fixed`:r;return{vertexShader:Si(e),fragmentShader:Ci({hasBorder:n}),uniforms:wi(e.paths,n,i)}}var Ei=new Map;function Di(e){switch(e){case`over`:return 0;case`above`:return 1;case`below`:return 2;case`auto`:return 3;default:return 0}}function Oi(e,t,n,r){var i=r.color,a=r.margin,o=r.textBorder,s=yi(r),c=s.paths,u=s.fontSizeMode,d=s.minVisibilityThreshold,f=s.fullVisibilityThreshold,p=s.keepUpright,m=!!o,h=Ti({paths:c,hasBorder:m,fontSizeMode:u,minVisibilityThreshold:d,fullVisibilityThreshold:f,keepUpright:p}),g=function(e){function t(e,n,r){var i;B(this,t),i=H(this,t,[e,n,r]),R(i,`atlasTexture`,null),R(i,`atlasNeedsUpdate`,!1),R(i,`refreshTimeout`,null),R(i,`labelGlyphCache`,new Map),R(i,`edgeAttributeTexture`,null);var a=ge();if(i.attributeLayout=Y([].concat(W(c),[a])),i.attrDescriptors=jn([].concat(W(c),[a]),i.attributeLayout),i.edgeAttributeTexture=new An(e,i.attributeLayout),i.packedAttributeData=new Float32Array(i.attributeLayout.floatsPerItem),i.atlasManager=new mr,i.gamma=.025,i.sdfBuffer=sr.cutoff,i.atlasTexture=e.createTexture(),!i.atlasTexture)throw Error(`EdgeLabelProgram: failed to create atlas texture`);return e.bindTexture(e.TEXTURE_2D,i.atlasTexture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),i.atlasManager.on(mr.ATLAS_UPDATED_EVENT,function(){i.atlasNeedsUpdate=!0,i.refreshTimeout!==null&&clearTimeout(i.refreshTimeout),i.refreshTimeout=setTimeout(function(){i.refreshTimeout=null,i.renderer.refresh()},0)}),i.defaultFontKey=i.atlasManager.registerFont({family:`sans-serif`,weight:`normal`,style:`normal`}),i}return U(t,e),V(t,[{key:`getDefinition`,value:function(){var e=WebGL2RenderingContext,t=e.FLOAT,n=e.UNSIGNED_BYTE,r=e.TRIANGLE_STRIP,i=new Set,a=[],o=l(c),s;try{for(o.s();!(s=o.n()).done;){var u=s.value,d=l(u.attributes),f;try{for(d.s();!(f=d.n()).done;){var p=f.value,g=p.name.startsWith(`a_`)?p.name:`a_${p.name}`;i.has(g)||(i.add(g),a.push({name:g,size:p.size,type:p.type}))}}catch(e){d.e(e)}finally{d.f()}}}catch(e){o.e(e)}finally{o.f()}return{VERTICES:4,VERTEX_SHADER_SOURCE:h.vertexShader,FRAGMENT_SHADER_SOURCE:h.fragmentShader,METHOD:r,UNIFORMS:h.uniforms,ATTRIBUTES:[{name:`a_edgeIndex`,size:1,type:t},{name:`a_edgeAttrIndex`,size:1,type:t},{name:`a_baseFontSize`,size:1,type:t},{name:`a_charMetrics`,size:4,type:t},{name:`a_charDims`,size:4,type:t},{name:`a_texCoords`,size:4,type:t},{name:`a_labelParams`,size:2,type:t},{name:`a_color`,size:4,type:n,normalized:!0}].concat(W(m?[{name:`a_borderColor`,size:4,type:n,normalized:!0}]:[]),W(a.filter(function(e){return![`a_curvature`,`curvature`].includes(e.name)}))),CONSTANT_ATTRIBUTES:[{name:`a_quadCorner`,size:2,type:t}],CONSTANT_DATA:[[0,0],[1,0],[0,1],[1,1]]}}},{key:`prepareLabelGlyphs`,value:function(e,t){if(t.hidden||!t.text)this.labelGlyphCache.delete(e);else{var n=t.text,r=t.fontKey||this.defaultFontKey;this.atlasManager.ensureGlyphs(n,r);var i=[],a=[],o=0,s=l(n),c;try{for(s.s();!(c=s.n()).done;){var u=c.value.codePointAt(0);if(u===void 0)i.push(void 0),a.push(o);else{var d=this.atlasManager.getGlyph(u,r);i.push(d),a.push(o),d&&(o+=d.advance)}}}catch(e){s.e(e)}finally{s.f()}this.labelGlyphCache.set(e,{glyphs:i,xOffsets:a,totalWidth:o})}}},{key:`processCharacter`,value:function(e,n,r,i){var a=this.floats,s=this.STRIDE,u=e*s,d=this.labelGlyphCache.get(n.parentKey);if(!d||!d.glyphs[i])for(var f=0;f<s;f++)a[u+f]=0;else{var p=d.glyphs[i],h=d.xOffsets[i],g=t.labelColor,_=M(g&&G(g)===`object`&&`color`in g&&g.color?g.color:n.color),v=u;a[v++]=n.edgeIndex,a[v++]=this.edgeAttributeTexture?.getIndex(n.parentKey)??0,a[v++]=n.size,a[v++]=h,a[v++]=p.advance,a[v++]=d.totalWidth,a[v++]=Di(n.position),a[v++]=p.atlasWidth,a[v++]=p.atlasHeight,a[v++]=p.bearingX,a[v++]=-p.bearingY,a[v++]=p.atlasX,a[v++]=p.atlasY,a[v++]=p.atlasWidth,a[v++]=p.atlasHeight;var y=t.labelMargin??n.margin;if(a[v++]=y,a[v++]=0,a[v++]=_,m&&o){var b=typeof o.color==`string`?o.color:o.color.color||`#ffffff`;a[v++]=M(b)}var x=new Set,S=l(c),C;try{for(S.s();!(C=S.n()).done;){var w=C.value,T=l(w.attributes),E;try{for(T.s();!(E=T.n()).done;){var D=E.value,O=D.name.startsWith(`a_`)?D.name.slice(2):D.name;if(O!==`curvature`&&!x.has(O)){x.add(O);for(var k=0;k<D.size;k++)a[v++]=0}}}catch(e){T.e(e)}finally{T.f()}}}catch(e){S.e(e)}finally{S.f()}}}},{key:`processEdgeLabel`,value:function(e,n,r){if(this.prepareLabelGlyphs(e,r),this.edgeAttributeTexture&&!r.hidden&&r.text){this.edgeAttributeTexture.allocate(e);var i=this.packedAttributeData;Mn(this.attrDescriptors,r.edgeAttributes,i,``,Ei,0),this.edgeAttributeTexture.updateAllAttributes(e,i)}return J(t,`processLabel`,this,3)([e,n,r])}},{key:`updateAtlasTexture`,value:function(){if(this.atlasNeedsUpdate){var e=this.normalProgram.gl,t=this.atlasManager.getTextures();if(t.length!==0){var n=t[0];e.bindTexture(e.TEXTURE_2D,this.atlasTexture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n.width,n.height,0,e.RGBA,e.UNSIGNED_BYTE,n.data),e.bindTexture(e.TEXTURE_2D,null),this.atlasNeedsUpdate=!1}}}},{key:`setUniforms`,value:function(e,t){var n=t.gl,r=t.uniformLocations,i=this.atlasManager.getTextures(),a=i.length>0?[i[0].width,i[0].height]:[1,1];if(n.uniformMatrix3fv(r.u_matrix,!1,e.matrix),n.uniform1f(r.u_sizeRatio,e.sizeRatio),n.uniform1f(r.u_correctionRatio,e.correctionRatio),n.uniform1f(r.u_pixelRatio,e.pixelRatio),n.uniform1f(r.u_cameraAngle,e.cameraAngle),n.uniform1f(r.u_sdfBufferPixels,sr.buffer),n.uniform2f(r.u_resolution,e.width,e.height),n.uniform2f(r.u_atlasSize,a[0],a[1]),n.uniform1f(r.u_gamma,this.gamma),n.uniform1f(r.u_sdfBuffer,this.sdfBuffer),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.atlasTexture),n.uniform1i(r.u_atlas,0),r.u_nodeDataTexture!==void 0&&n.uniform1i(r.u_nodeDataTexture,e.nodeDataTextureUnit),r.u_nodeDataTextureWidth!==void 0&&n.uniform1i(r.u_nodeDataTextureWidth,e.nodeDataTextureWidth),r.u_edgeDataTexture!==void 0&&n.uniform1i(r.u_edgeDataTexture,e.edgeDataTextureUnit),r.u_edgeDataTextureWidth!==void 0&&n.uniform1i(r.u_edgeDataTextureWidth,e.edgeDataTextureWidth),r.u_edgeFrameTexture!==void 0&&n.uniform1i(r.u_edgeFrameTexture,e.edgeFrameTextureUnit),r.u_edgeFrameTextureWidth!==void 0&&n.uniform1i(r.u_edgeFrameTextureWidth,e.edgeFrameTextureWidth),m&&o&&r.u_borderWidth!==void 0){var s=o.width/sr.buffer*this.sdfBuffer;n.uniform1f(r.u_borderWidth,s)}if(this.edgeAttributeTexture&&r.u_edgeAttributeTexture!==void 0&&(this.edgeAttributeTexture.bind(Tr),n.uniform1i(r.u_edgeAttributeTexture,Tr),n.uniform1i(r.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),n.uniform1i(r.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem())),u===`scaled`&&r.u_zoomSizeRatio!==void 0){var c=1/this.renderer.getSetting(`zoomToSizeRatioFunction`)(e.zoomRatio);n.uniform1f(r.u_zoomSizeRatio,c)}}},{key:`renderProgram`,value:function(e,n){this.updateAtlasTexture(),this.atlasManager.hasPendingGlyphs()&&(this.atlasManager.flush(),this.updateAtlasTexture()),this.edgeAttributeTexture&&this.edgeAttributeTexture.upload(),J(t,`renderProgram`,this,3)([e,n])}},{key:`registerFont`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:`normal`,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:`normal`;return this.atlasManager.registerFont({family:e,weight:t,style:n})}},{key:`getAtlasManager`,value:function(){return this.atlasManager}},{key:`ensureGlyphsReady`,value:function(e,t){var n=t||this.defaultFontKey,r=l(e),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;this.atlasManager.ensureGlyphs(a,n)}}catch(e){r.e(e)}finally{r.f()}this.atlasManager.flush()}},{key:`measureLabelAtlasWidth`,value:function(e,t){var n=t||this.defaultFontKey;this.atlasManager.ensureGlyphs(e,n),this.atlasManager.hasPendingGlyphs()&&this.atlasManager.flush();var r=0,i=l(e),a;try{for(i.s();!(a=i.n()).done;){var o=a.value.codePointAt(0);if(o!==void 0){var s=this.atlasManager.getGlyph(o,n);s&&(r+=s.advance)}}}catch(e){i.e(e)}finally{i.f()}return r}},{key:`measureLabel`,value:function(e,t,n){return{width:this.measureLabelAtlasWidth(e,n)*(t/sr.fontSize),height:t,textHeight:t}}},{key:`kill`,value:function(){var e=this.normalProgram.gl;this.refreshTimeout!==null&&(clearTimeout(this.refreshTimeout),this.refreshTimeout=null),this.atlasTexture&&=(e.deleteTexture(this.atlasTexture),null),this.edgeAttributeTexture&&=(this.edgeAttributeTexture.kill(),null),this.atlasManager.destroy(),this.labelGlyphCache.clear(),J(t,`kill`,this,3)([])}}])}(rr);return R(g,`labelColor`,i),R(g,`labelMargin`,a),new g(e,t,n)}function ki(){return{name:`none`,glsl:`
// No extremity - always returns positive (outside)
float extremity_none(vec2 uv, float lengthRatio, float widthRatio) {
  return 1.0;
}
`,length:0,widthFactor:1,margin:0,uniforms:[],attributes:[]}}function Ai(e,t,n,r,i,a,o){var s=Ir(r),c=s.paths,l=s.layers,u=s.defaultHead,d=s.defaultTail,f=[ki()].concat(W(s.extremities)),p={},m={};c.forEach(function(e,t){return p[e.name]=t}),f.forEach(function(e,t){return m[e.name]=t});var h=m[u]??0,g=m[d]??0,_=null,v=Y([].concat(W(c),W(l))),y=function(e){function t(e,n,r){var a;B(this,t),_||=ni({paths:c,extremities:f,layers:l,antialias:i}),a=H(this,t,[e,n,r]),R(a,`layerLifecycles`,new Map),R(a,`needsShaderRegeneration`,!1),R(a,`edgeAttributeTexture`,null),R(a,`layout`,v),R(a,`attrDescriptors`,[]),R(a,`lifecycleIndexOffset`,c.length),a._pickingBuffer=n,a.edgeAttributeTexture=new An(e,a.layout),a.packedAttributeData=new Float32Array(a.layout.floatsPerItem),l.forEach(function(t,n){if(t.lifecycle){var i={gl:e,renderer:{refresh:function(){return r.refresh()}},getUniformLocation:function(t){return e.getUniformLocation(a.normalProgram.program,t)},requestShaderRegeneration:function(){a.needsShaderRegeneration=!0},requestRefresh:function(){r.refresh()}};a.layerLifecycles.set(n,t.lifecycle(i))}}),a.layerLifecycles.forEach(function(e){return e.init?.call(e)});var o=new Map;return a.layerLifecycles.forEach(function(e,t){e.getAttributeData&&o.set(c.length+t,e)}),a.attrDescriptors=jn([].concat(W(c),W(l)),a.layout,o),a}return U(t,e),V(t,[{key:`getAttributeTexture`,value:function(){return this.edgeAttributeTexture}},{key:`resolveEdgeIds`,value:function(e,t,n){var r=e,i=0,a=h,o=g,s=t?r.selfLoopPath:n&&r.parallelPath?r.parallelPath:r.path;s&&p[s]!==void 0&&(i=p[s]),r.head&&r.head!==`none`&&m[r.head]!==void 0&&(a=m[r.head]),r.tail&&r.tail!==`none`&&m[r.tail]!==void 0&&(o=m[r.tail]);var c=f[a],l=f[o];return{pathId:i,headId:a,tailId:o,headLengthRatio:fe(c.length)?0:c.length,tailLengthRatio:fe(l.length)?0:l.length}}},{key:`getDefinition`,value:function(){var e=WebGL2RenderingContext.TRIANGLE_STRIP,t=_;return{VERTICES:t.verticesPerEdge,VERTEX_SHADER_SOURCE:t.vertexShader,FRAGMENT_SHADER_SOURCE:t.fragmentShader,METHOD:e,UNIFORMS:t.uniforms,ATTRIBUTES:t.attributes,CONSTANT_ATTRIBUTES:t.constantAttributes,CONSTANT_DATA:t.constantData}}},{key:`maybeRegenerateShaders`,value:function(){var e=this;if(this.needsShaderRegeneration){this.needsShaderRegeneration=!1,_=ni({paths:c,extremities:f,layers:l.map(function(t,n){var r=e.layerLifecycles.get(n);return r!=null&&r.regenerate?r.regenerate():t}),antialias:this.renderer.getSetting(`antialiasEdges`)});var t=this.normalProgram.gl,n=this.normalProgram,r=n.program,i=n.buffer,a=n.vertexShader,o=n.fragmentShader;t.deleteProgram(r),t.deleteBuffer(i),t.deleteShader(a),t.deleteShader(o),this.normalProgram=this.getProgramInfo(`normal`,t,_.vertexShader,_.fragmentShader,this._pickingBuffer)}}},{key:`process`,value:function(e,t,n,r,i,a){var o=t*this.STRIDE;if(i.visibility===`hidden`||n.visibility===`hidden`||r.visibility===`hidden`){for(var s=o+this.STRIDE;o<s;o++)this.floats[o]=0;this.floats[t*this.STRIDE]=On}else this.processVisibleItem(P(e),o,n,r,i,a)}},{key:`processVisibleItem`,value:function(e,t,n,r,i,a){var o=this.floats,s=this.ints;o[t++]=a,o[t++]=M(i.color),s[t++]=e,o[t++]=i.opacity??1;var c=this.packedAttributeData;Mn(this.attrDescriptors,i,c,i.color,this.layerLifecycles,this.lifecycleIndexOffset),this.edgeAttributeTexture.updateAllAttributesAtRow(a,c)}},{key:`setUniforms`,value:function(e,t){var n=this,r=t.gl,i=t.uniformLocations;i.u_matrix&&r.uniformMatrix3fv(i.u_matrix,!1,e.matrix),i.u_sizeRatio&&r.uniform1f(i.u_sizeRatio,e.sizeRatio),i.u_correctionRatio&&r.uniform1f(i.u_correctionRatio,e.correctionRatio),i.u_zoomRatio&&r.uniform1f(i.u_zoomRatio,e.zoomRatio),i.u_pixelRatio&&r.uniform1f(i.u_pixelRatio,e.pixelRatio),i.u_cameraAngle&&r.uniform1f(i.u_cameraAngle,e.cameraAngle),i.u_feather&&r.uniform1f(i.u_feather,e.antiAliasingFeather),i.u_minEdgeThickness&&r.uniform1f(i.u_minEdgeThickness,e.minEdgeThickness),i.u_pickingPadding&&r.uniform1f(i.u_pickingPadding,e.edgePickingPadding),i.u_nodeDataTexture&&r.uniform1i(i.u_nodeDataTexture,e.nodeDataTextureUnit),i.u_nodeDataTextureWidth&&r.uniform1i(i.u_nodeDataTextureWidth,e.nodeDataTextureWidth),i.u_edgeDataTexture&&r.uniform1i(i.u_edgeDataTexture,e.edgeDataTextureUnit),i.u_edgeDataTextureWidth&&r.uniform1i(i.u_edgeDataTextureWidth,e.edgeDataTextureWidth),i.u_edgeFrameTexture&&r.uniform1i(i.u_edgeFrameTexture,e.edgeFrameTextureUnit),i.u_edgeFrameTextureWidth&&r.uniform1i(i.u_edgeFrameTextureWidth,e.edgeFrameTextureWidth),this.edgeAttributeTexture&&this.layout.floatsPerItem>0&&(this.edgeAttributeTexture.bind(Tr),i.u_edgeAttributeTexture&&r.uniform1i(i.u_edgeAttributeTexture,Tr),i.u_edgeAttributeTextureWidth&&r.uniform1i(i.u_edgeAttributeTextureWidth,this.edgeAttributeTexture.getTextureWidth()),i.u_edgeAttributeTexelsPerEdge&&r.uniform1i(i.u_edgeAttributeTexelsPerEdge,this.edgeAttributeTexture.getTexelsPerItem()));var a=new Set;c.forEach(function(e){e.uniforms.forEach(function(e){a.has(e.name)||(a.add(e.name),n.setTypedUniform(e,t))})}),f.forEach(function(e){e.uniforms.forEach(function(e){a.has(e.name)||(a.add(e.name),n.setTypedUniform(e,t))})}),l.forEach(function(e){e.uniforms.forEach(function(e){a.has(e.name)||(a.add(e.name),n.setTypedUniform(e,t))})})}},{key:`render`,value:function(e,n,r){this.maybeRegenerateShaders(),J(t,`render`,this,3)([e,n,r])}},{key:`renderProgram`,value:function(e,n){this.layerLifecycles.forEach(function(e){return e.beforeRender?.call(e)}),J(t,`renderProgram`,this,3)([e,n])}},{key:`uploadAttributeTexture`,value:function(){this.edgeAttributeTexture&&this.layout.floatsPerItem>0&&this.edgeAttributeTexture.upload()}},{key:`kill`,value:function(){this.layerLifecycles.forEach(function(e){return e.kill?.call(e)}),this.edgeAttributeTexture&&=(this.edgeAttributeTexture.kill(),null),J(t,`kill`,this,3)([])}}])}(Rn),b=f[h],x=f[g],S=z({paths:c,headLengthRatio:fe(b.length)?0:b.length,tailLengthRatio:fe(x.length)?0:x.length},r.label),C=yi(S),w=function(){return{labelProgram:Oi(e,null,n,S),labelBackgroundProgram:vi(e,t,n,{shaderConfig:C})}},T=new ai(e,{paths:c,extremities:f,layers:l,nodeShapes:a,nodeLayers:o});return{edgeProgram:new y(e,null,n),createLabelPrograms:w,framePass:T}}function ji(e){return G(e)===`object`&&`uniforms`in e&&Array.isArray(e.uniforms)}function Mi(e){return G(e)===`object`&&`uniforms`in e&&`attributes`in e&&`glsl`in e}function Ni(e){return G(e)===`object`&&`uniforms`in e&&`attributes`in e&&`segments`in e}function Pi(e){return G(e)===`object`&&`uniforms`in e&&`attributes`in e&&`length`in e}function Fi(e){return G(e)===`object`&&`uniforms`in e&&`attributes`in e&&`glsl`in e}function Ii(e){return G(e)===`object`&&`glsl`in e&&`name`in e&&!(`uniforms`in e)}function Li(e){return G(e)===`object`&&`glsl`in e&&`name`in e&&!(`uniforms`in e)}function Ri(e){return G(e)===`object`&&`glsl`in e&&`name`in e&&!(`uniforms`in e)}function zi(e){if(ji(e))return e;if(Ii(e))return{name:e.name,glsl:e.glsl,inradiusFactor:e.inradiusFactor,uniforms:[]};throw Error(`Invalid node shape specification: ${JSON.stringify(e)}`)}function Bi(e){if(Mi(e))return e;if(be(e))return{name:e.name,glsl:e.glsl,uniforms:[],attributes:[]};throw Error(`Invalid node layer specification: ${JSON.stringify(e)}`)}function Vi(e){if(Ni(e))return e;if(Li(e))return{name:e.name,glsl:e.glsl,segments:e.segments,uniforms:[],attributes:[]};throw Error(`Invalid edge path specification: ${JSON.stringify(e)}`)}function Hi(e){if(Fi(e))return e;if(xe(e))return{name:e.name,glsl:e.glsl,uniforms:[],attributes:[]};throw Error(`Invalid edge layer specification: ${JSON.stringify(e)}`)}function Ui(e){if(Pi(e))return e;if(Ri(e))return{name:e.name,glsl:e.glsl,length:e.length,widthFactor:e.widthFactor,margin:0,uniforms:[],attributes:[]};throw Error(`Invalid edge extremity specification: ${JSON.stringify(e)}`)}function Wi(e){var t=e?.shapes??Se.shapes,n=e?.layers??Se.layers,r=t.map(zi),i=n.map(Bi);if(r.length===0)throw Error(`At least one node shape must be specified.`);if(i.length===0)throw Error(`At least one node layer must be specified.`);return{shapes:r,layers:i}}function Gi(e){var t=e?.paths??Ce.paths,n=e?.extremities??Ce.extremities,r=e?.layers??Ce.layers,i=t.map(Vi),a=n.map(Ui).filter(function(e){return e!==null}),o=r.map(Hi);if(i.length===0)throw Error(`At least one edge path must be specified.`);if(o.length===0)throw Error(`At least one edge layer must be specified.`);return{paths:i,extremities:a,layers:o}}function Ki(e,t){var n={},r=l(e),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;a.variables&&Object.assign(n,a.variables)}}catch(e){r.e(e)}finally{r.f()}return Object.assign(n,t||{}),n}function qi(e,t,n,r,i){var a=Wi(r),o=a.shapes,s=a.layers,c=Ki(o,r?.variables);return z(z({},wr(e,t,n,{shapes:o,layers:s,label:r?.label,backdrop:r?.backdrop,labelAttachments:r?.labelAttachments},i)),{},{variables:c})}function Ji(e,t,n,r,i,a){var o=Gi(r),s=o.paths,c=o.extremities,l=o.layers,u=Wi(a),d=u.shapes,f=u.layers,p=Ki(s,r?.variables);return z(z({},Ai(e,t,n,{paths:s,extremities:c,layers:l,defaultHead:r?.defaultHead,defaultTail:r?.defaultTail,label:r?.label},i,d,f)),{},{variables:p,paths:s})}var Yi=2;function Xi(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Yi,i=t.canvas,a=i.width,o=i.height,s=n.x,c=n.y,u=n.rowHeight,d=n.maxRowWidth,f={},p=[],m=l(e),h;try{for(m.s();!(h=m.n()).done;){var g=h.value,_=g.width+r,v=g.height+r;_>a||v>o||s+_>a&&c+u+v>o?p.push(g):(s+_>a&&(d=Math.max(d,s),s=0,c+=u,u=v),g.draw(t,s,c),f[g.key]={x:s,y:c,width:g.width,height:g.height},s+=_,u=Math.max(u,v))}}catch(e){m.e(e)}finally{m.f()}return d=Math.max(d,s),{atlas:f,cursor:{x:s,y:c,rowHeight:u,maxRowWidth:d},remaining:p}}function X(e,t,n,r){var i=Object.defineProperty;try{i({},``,{})}catch{i=0}X=function(e,t,n,r){function a(t,n){X(e,t,function(e){return this._invoke(t,n,e)})}t?i?i(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(a(`next`,0),a(`throw`,1),a(`return`,2))},X(e,t,n,r)}function Z(){var e,t,n=typeof Symbol==`function`?Symbol:{},r=n.iterator||`@@iterator`,i=n.toStringTag||`@@toStringTag`;function a(n,r,i,a){var c=r&&r.prototype instanceof s?r:s,l=Object.create(c.prototype);return X(l,`_invoke`,function(n,r,i){var a,s,c,l=0,u=i||[],d=!1,f={p:0,n:0,v:e,a:p,f:p.bind(e,4),d:function(t,n){return a=t,s=0,c=e,f.n=n,o}};function p(n,r){for(s=n,c=r,t=0;!d&&l&&!i&&t<u.length;t++){var i,a=u[t],p=f.p,m=a[2];n>3?(i=m===r)&&(c=a[(s=a[4])?5:(s=3,3)],a[4]=a[5]=e):a[0]<=p&&((i=n<2&&p<a[1])?(s=0,f.v=r,f.n=a[1]):p<m&&(i=n<3||a[0]>r||r>m)&&(a[4]=n,a[5]=r,f.n=m,s=0))}if(i||n>1)return o;throw d=!0,r}return function(i,u,m){if(l>1)throw TypeError(`Generator is already running`);for(d&&u===1&&p(u,m),s=u,c=m;(t=s<2?e:c)||!d;){a||(s?s<3?(s>1&&(f.n=-1),p(s,c)):f.n=c:f.v=c);try{if(l=2,a){if(s||(i=`next`),t=a[i]){if(!(t=t.call(a,c)))throw TypeError(`iterator result is not an object`);if(!t.done)return t;c=t.value,s<2&&(s=0)}else s===1&&(t=a.return)&&t.call(a),s<2&&(c=TypeError(`The iterator does not provide a '`+i+`' method`),s=1);a=e}else if((t=(d=f.n<0)?c:n.call(r,f))!==o)break}catch(t){a=e,s=1,c=t}finally{l=1}}return{value:t,done:d}}}(n,i,a),!0),l}var o={};function s(){}function c(){}function l(){}t=Object.getPrototypeOf;var u=[][r]?t(t([][r]())):(X(t={},r,function(){return this}),t),d=l.prototype=s.prototype=Object.create(u);function f(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,l):(e.__proto__=l,X(e,i,`GeneratorFunction`)),e.prototype=Object.create(d),e}return c.prototype=l,X(d,`constructor`,l),X(l,`constructor`,c),c.displayName=`GeneratorFunction`,X(l,i,`GeneratorFunction`),X(d),X(d,i,`Generator`),X(d,r,function(){return this}),X(d,`toString`,function(){return`[object Generator]`}),(Z=function(){return{w:a,m:f}})()}function Zi(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){n(e);return}s.done?t(c):Promise.resolve(c).then(r,i)}function Qi(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){Zi(a,r,i,o,s,`next`,e)}function s(e){Zi(a,r,i,o,s,`throw`,e)}o(void 0)})}}var $i=new Map,ea=!1;function ta(e){return new Promise(function(t,n){var r=new FileReader;r.onload=function(){return t(r.result)},r.onerror=n,r.readAsDataURL(e)})}function na(e){if(!$i.has(e)){var t=fetch(e).then(function(e){return e.blob()}).then(ta).catch(function(){return $i.delete(e),null});$i.set(e,t)}return $i.get(e)}function ra(e){return ia.apply(this,arguments)}function ia(){return ia=Qi(Z().m(function e(t){var n,r,i;return Z().w(function(e){for(;;)switch(e.n){case 0:return n=document.createElement(`div`),n.innerHTML=t,r=Array.from(n.querySelectorAll(`img[src]`)),i=r.filter(function(e){return!e.getAttribute(`src`).startsWith(`data:`)}),e.n=1,Promise.all(i.map(function(){var e=Qi(Z().m(function e(t){var n;return Z().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,na(t.getAttribute(`src`));case 1:n=e.v,n&&t.setAttribute(`src`,n);case 2:return e.a(2)}},e)}));return function(t){return e.apply(this,arguments)}}()));case 1:return e.a(2,n.innerHTML)}},e)})),ia.apply(this,arguments)}function aa(e){return oa.apply(this,arguments)}function oa(){return oa=Qi(Z().m(function e(t){var n,r,i,a,o,s,c,l,u,d,f,p,m,h=arguments;return Z().w(function(e){for(;;)switch(e.n){case 0:if(n=h.length>1&&h[1]!==void 0?h[1]:1,r=t instanceof SVGElement?new XMLSerializer().serializeToString(t):t,i=new DOMParser,a=i.parseFromString(r,`image/svg+xml`),o=a.querySelector(`svg`),o){e.n=1;break}return e.a(2,null);case 1:if(s=parseFloat(o.getAttribute(`width`)||``),c=parseFloat(o.getAttribute(`height`)||``),s>0&&c>0||(l=o.getAttribute(`viewBox`),l&&(u=l.trim().split(/[\s,]+/),s=parseFloat(u[2]),c=parseFloat(u[3]))),s>0&&c>0){e.n=2;break}return console.warn(`Sigma: SVG label attachment has no parseable dimensions — skipped.`),e.a(2,null);case 2:return d=Math.ceil(s*n),f=Math.ceil(c*n),p=new Blob([r],{type:`image/svg+xml`}),m=URL.createObjectURL(p),e.a(2,new Promise(function(e){var t=new Image;t.onload=function(){var n=document.createElement(`canvas`);n.width=d,n.height=f,n.getContext(`2d`).drawImage(t,0,0,d,f),URL.revokeObjectURL(m);try{n.getContext(`2d`).getImageData(0,0,1,1)}catch(t){if(t instanceof DOMException&&t.name===`SecurityError`){ea||(ea=!0,console.warn(`Sigma: A label attachment was skipped because the rendered canvas is tainted. SVG with <foreignObject> (used by the "html" attachment type) is blocked in Chromium and Safari. Use type: "canvas" with Canvas 2D rendering instead.`)),e(null);return}throw t}e(n)},t.onerror=function(){URL.revokeObjectURL(m),e(null)},t.src=m}))}},e)})),oa.apply(this,arguments)}function sa(e,t){var n=document.createElement(`div`);n.style.cssText=`position:fixed;left:-99999px;top:0;visibility:hidden;width:max-content;height:max-content`,n.innerHTML=(t?`<style>${t}</style>`:``)+e,document.body.appendChild(n);var r=n.getBoundingClientRect(),i=r.width,a=r.height;return document.body.removeChild(n),{width:Math.ceil(i),height:Math.ceil(a)}}function ca(e,t,n,r){return la.apply(this,arguments)}function la(){return la=Qi(Z().m(function e(t,n,r,i){var a,o,s,c,l,u,d,f,p=arguments;return Z().w(function(e){for(;;)switch(e.n){case 0:return a=p.length>4&&p[4]!==void 0?p[4]:1,o=t instanceof HTMLElement?t.outerHTML:t,e.n=1,ra(o);case 1:return s=e.v,(r==null||i==null)&&(c=sa(s,n),r??=c.width,i??=c.height),l=Math.ceil(r*a),u=Math.ceil(i*a),d=n?`<style>${n}</style>`:``,f=`<svg xmlns="http://www.w3.org/2000/svg" width="${l}" height="${u}" viewBox="0 0 ${r} ${i}"><foreignObject width="${r}" height="${i}"><body xmlns="http://www.w3.org/1999/xhtml" style="margin:0;padding:0">${d}${s}</body></foreignObject></svg>`,e.a(2,aa(f,1))}},e)})),la.apply(this,arguments)}function ua(e){return da.apply(this,arguments)}function da(){return da=Qi(Z().m(function e(t){var n,r=arguments,i;return Z().w(function(e){for(;;)switch(e.n){case 0:n=r.length>1&&r[1]!==void 0?r[1]:1,i=t.type,e.n=i===`canvas`?1:i===`svg`?2:i===`html`?3:4;break;case 1:return e.a(2,t.canvas);case 2:return e.a(2,aa(t.svg,n));case 3:return e.a(2,ca(t.html,t.css,t.width,t.height,n));case 4:return e.a(2)}},e)})),da.apply(this,arguments)}var fa=2048,pa=function(){function e(t,n,r){B(this,e),R(this,`cache`,new Map),R(this,`pending`,new Set),R(this,`atlas`,{}),R(this,`glTexture`,null),R(this,`dirty`,!0),this.gl=t,this.renderers=n,this.scheduleRender=r,this.packCanvas=document.createElement(`canvas`),this.packCanvas.width=fa,this.packCanvas.height=fa,this.packCtx=this.packCanvas.getContext(`2d`)}return V(e,[{key:`renderAttachment`,value:function(e,t,n){var r=this,i=`${e}:${t}`;if(!(this.cache.has(i)||this.pending.has(i))){var a=this.renderers[t];if(a){var o=a(n);if(o){this.pending.add(i);var s=n.pixelRatio;Promise.resolve(o).then(function(){var e=Qi(Z().m(function e(t){var n;return Z().w(function(e){for(;;)switch(e.n){case 0:if(r.pending.has(i)){e.n=1;break}return e.a(2);case 1:if(r.pending.delete(i),t){e.n=2;break}return e.a(2);case 2:return e.n=3,ua(t,s);case 3:if(n=e.v,n&&n.width!==0&&n.height!==0){e.n=4;break}return e.a(2);case 4:r.cache.set(i,{image:n,width:n.width,height:n.height}),r.dirty=!0,r.scheduleRender();case 5:return e.a(2)}},e)}));return function(t){return e.apply(this,arguments)}}())}}}}},{key:`regenerateAtlas`,value:function(){if(this.dirty){this.dirty=!1;var e=[];if(this.cache.forEach(function(t,n){e.push({key:n,width:t.width,height:t.height,draw:function(e,n,r){e.drawImage(t.image,n,r)}})}),e.length===0)this.atlas={},this.deleteGLTexture();else{var t={x:0,y:0,rowHeight:0,maxRowWidth:0};this.packCtx.clearRect(0,0,fa,fa);var n=Xi(e,this.packCtx,t),r=n.atlas,i=n.remaining;this.atlas=r,i.length>0&&console.warn(`Sigma: ${i.length} label attachment(s) could not fit in the ${fa}x${fa} atlas and will not be rendered.`),this.deleteGLTexture();var a=this.gl,o=a.createTexture();a.activeTexture(a.TEXTURE0+7),a.bindTexture(a.TEXTURE_2D,o),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,this.packCanvas),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),this.glTexture=o}}}},{key:`bindTexture`,value:function(e){if(this.glTexture){var t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.glTexture)}}},{key:`getEntry`,value:function(e,t){var n=`${e}:${t}`;return this.atlas[n]||null}},{key:`invalidateNode`,value:function(e){var t=`${e}:`,n=l(this.cache.keys()),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;i.startsWith(t)&&(this.cache.delete(i),this.dirty=!0)}}catch(e){n.e(e)}finally{n.f()}var a=l(this.pending),o;try{for(a.s();!(o=a.n()).done;){var s=o.value;s.startsWith(t)&&this.pending.delete(s)}}catch(e){a.e(e)}finally{a.f()}}},{key:`restore`,value:function(){this.glTexture=null,this.dirty=!0}},{key:`clear`,value:function(){this.cache.clear(),this.pending.clear(),this.atlas={},this.dirty=!0,this.deleteGLTexture()}},{key:`kill`,value:function(){this.clear(),this.packCanvas=null,this.packCtx=null,this.gl=null}},{key:`deleteGLTexture`,value:function(){this.glTexture&&=(this.gl.deleteTexture(this.glTexture),null)}}])}(),ma=function(){function e(t){B(this,e),R(this,`buckets`,new Map),R(this,`keyDepth`,new Map);var n=l(t),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;this.buckets.set(i,new Set)}}catch(e){n.e(e)}finally{n.f()}}return V(e,[{key:`has`,value:function(e){return this.keyDepth.has(e)}},{key:`getBucket`,value:function(e){return this.buckets.get(e)}},{key:`set`,value:function(e,t){var n,r=this.keyDepth.get(e);if(r!==t){var i=this.buckets.get(t);if(!i)throw Error(`Sigma: "${t}" is not a declared depth layer`);r!==void 0&&((n=this.buckets.get(r))==null||n.delete(e)),i.add(e),this.keyDepth.set(e,t)}}},{key:`remove`,value:function(e){var t=this.keyDepth.get(e);t!==void 0&&(this.buckets.get(t).delete(e),this.keyDepth.delete(e))}},{key:`clearAll`,value:function(){var e=l(this.buckets.values()),t;try{for(e.s();!(t=e.n()).done;)t.value.clear()}catch(t){e.e(t)}finally{e.f()}this.keyDepth.clear()}},{key:`getSorted`,value:function(e,t){var n=this.buckets.get(e);return!n||n.size===0?[]:W(n).sort(function(e,n){return t(e)-t(n)})}}])}(),ha=function(e){function t(e,n){return B(this,t),H(this,t,[e,2,n])}return U(t,e),V(t,[{key:`updateNode`,value:function(e,t,n,r,i,a,o,s){var l=this.indexMap.get(e);if(l===void 0)throw Error(`Node "${e}" not allocated in NodeDataTexture`);var u=c(N(s),4),d=u[0],f=u[1],p=u[2],m=u[3],h=l*2*4;this.data[h]=t,this.data[h+1]=n,this.data[h+2]=r,this.data[h+3]=i,this.data[h+4]=a,this.data[h+5]=o,this.data[h+6]=d*65536+f*256+p,this.data[h+7]=m/255,this.markDirty(l)}}])}(kn),ga=1024,_a=1.5,va=4096,ya=function(){function e(t,n){if(B(this,e),R(this,`texture`,null),R(this,`framebuffer`,null),!t.getExtension(`EXT_color_buffer_float`))throw Error(`sigma: EXT_color_buffer_float is required for label/edge placement but is unavailable in this WebGL2 context.`);this.gl=t,this.channels=n.channels,this.capacity=this.roundUpToPowerOfTwo(n.initialCapacity??ga);var r=this.computeDimensions(this.capacity);this.textureWidth=r.width,this.textureHeight=r.height,this.create()}return V(e,[{key:`roundUpToPowerOfTwo`,value:function(e){return 2**Math.ceil(Math.log2(Math.max(1,e)))}},{key:`computeDimensions`,value:function(e){var t=Math.min(e,va);return{width:t,height:Math.ceil(e/t)}}},{key:`create`,value:function(){var e=this.gl,t=this.channels===1?e.R32F:e.RGBA32F,n=this.channels===1?e.RED:e.RGBA;if(this.texture=e.createTexture(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,t,this.textureWidth,this.textureHeight,0,n,e.FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),this.framebuffer=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texture,0),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw Error(`sigma: float framebuffer for frame-pass placement is incomplete.`);e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null)}},{key:`ensureCapacity`,value:function(e){if(!(e<=this.capacity)){var t=this.gl;this.capacity=this.roundUpToPowerOfTwo(Math.ceil(e*_a));var n=this.computeDimensions(this.capacity);this.textureWidth=n.width,this.textureHeight=n.height,this.texture&&t.deleteTexture(this.texture),this.framebuffer&&t.deleteFramebuffer(this.framebuffer),this.create()}}},{key:`bindAsRenderTarget`,value:function(){var e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),e.viewport(0,0,this.textureWidth,this.textureHeight)}},{key:`bind`,value:function(e){var t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture)}},{key:`getTexture`,value:function(){return this.texture}},{key:`getTextureWidth`,value:function(){return this.textureWidth}},{key:`getTextureHeight`,value:function(){return this.textureHeight}},{key:`restore`,value:function(){this.gl.getExtension(`EXT_color_buffer_float`),this.create()}},{key:`kill`,value:function(){var e=this.gl;this.texture&&=(e.deleteTexture(this.texture),null),this.framebuffer&&=(e.deleteFramebuffer(this.framebuffer),null)}}])}(),ba=function(e){function t(e,n){return B(this,t),H(this,t,[e,2,n])}return U(t,e),V(t,[{key:`updateEdge`,value:function(e,t,n,r,i,a){var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0,s=arguments.length>7&&arguments[7]!==void 0?arguments[7]:0,c=arguments.length>8&&arguments[8]!==void 0?arguments[8]:0,l=this.indexMap.get(e);if(l===void 0)throw Error(`Edge "${e}" not allocated in EdgeDataTexture`);var u=l*this.TEXELS_PER_ITEM*4;this.data[u+0]=t,this.data[u+1]=n,this.data[u+2]=r,this.data[u+3]=0,this.data[u+4]=i,this.data[u+5]=a,this.data[u+6]=o,this.data[u+7]=(s&15)<<4|c&15,this.markDirty(l)}}])}(kn);function xa(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Sa(e,t){if(e==null)return{};var n,r,i=xa(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var Ca=[`factor`],wa=[`factor`],Ta=1.5,Ea={x:.5,y:.5,angle:0,ratio:1},Da=function(e){function t(){var e;B(this,t);var n=[...arguments];return e=H(this,t,[].concat(n)),R(e,`minRatio`,null),R(e,`maxRatio`,null),R(e,`enabled`,!0),R(e,`enabledZooming`,!0),R(e,`enabledPanning`,!0),R(e,`enabledRotation`,!0),R(e,`constrainState`,null),R(e,`state`,z({},Ea)),R(e,`previousState`,z({},Ea)),R(e,`nextFrame`,null),R(e,`currentAnimationFrom`,null),R(e,`currentAnimationTo`,null),R(e,`animationCallback`,null),e}return U(t,e),V(t,[{key:`x`,get:function(){return this.state.x}},{key:`y`,get:function(){return this.state.y}},{key:`angle`,get:function(){return this.state.angle}},{key:`ratio`,get:function(){return this.state.ratio}},{key:`getState`,value:function(){return z({},this.state)}},{key:`getPreviousState`,value:function(){return z({},this.previousState)}},{key:`getBoundedRatio`,value:function(e){var t=e;return typeof this.minRatio==`number`&&(t=Math.max(t,this.minRatio)),typeof this.maxRatio==`number`&&(t=Math.min(t,this.maxRatio)),t}},{key:`validateState`,value:function(e){var t=this.getState();return this.enabledPanning&&typeof e.x==`number`&&(t.x=e.x),this.enabledPanning&&typeof e.y==`number`&&(t.y=e.y),this.enabledZooming&&typeof e.ratio==`number`&&(t.ratio=this.getBoundedRatio(e.ratio)),this.enabledRotation&&typeof e.angle==`number`&&(t.angle=e.angle),this.constrainState?this.constrainState(t):t}},{key:`isAnimating`,value:function(){return this.nextFrame!==null}},{key:`setState`,value:function(e){if(!this.enabled)return this;var t=this.validateState(e);return xt(this.state,t)||(this.previousState=this.state,this.state=t,this.emit(`updated`,this.getState())),this}},{key:`updateState`,value:function(e){return this.setState(e(this.getState())),this}},{key:`animate`,value:function(e,t){var n=this;return this.enabled?new Promise(function(r){return n.runAnimation(e,z(z({},wt),t),r)}):Promise.resolve()}},{key:`cancelAnimation`,value:function(){return this.nextFrame!==null&&(cancelAnimationFrame(this.nextFrame),this.nextFrame=null),this.resolveAnimation(),this.emitAnimationEnd(!1),this}},{key:`zoomIn`,value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.factor,n=t===void 0?Ta:t,r=Sa(e,Ca);return this.animate({ratio:this.ratio/n},r)}},{key:`zoomOut`,value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.factor,n=t===void 0?Ta:t,r=Sa(e,wa);return this.animate({ratio:this.ratio*n},r)}},{key:`reset`,value:function(e){return this.animate(Ea,e)}},{key:`runAnimation`,value:function(e,t,n){var r=this,i=ke(t.easing),a=Date.now(),o=this.getState(),s=this.validateState(e),c=function(){if(!r.enabled)r.cancelAnimation();else{var e=t.duration>0?(Date.now()-a)/t.duration:1;if(e>=1)r.nextFrame=null,r.setState(s),r.resolveAnimation(),r.emitAnimationEnd(!0);else{var n=i(e);r.setState({x:o.x+(s.x-o.x)*n,y:o.y+(s.y-o.y)*n,angle:o.angle+(s.angle-o.angle)*n,ratio:o.ratio+(s.ratio-o.ratio)*n}),r.nextFrame=requestAnimationFrame(c)}}};this.cancelAnimation(),this.currentAnimationFrom=o,this.currentAnimationTo=s,this.animationCallback=n,this.emit(`animationStart`,{from:o,to:s}),c()}},{key:`resolveAnimation`,value:function(){var e=this.animationCallback;this.animationCallback=null,e&&e()}},{key:`emitAnimationEnd`,value:function(e){var t=this.currentAnimationFrom,n=this.currentAnimationTo;t&&n&&(this.currentAnimationFrom=null,this.currentAnimationTo=null,this.emit(`animationEnd`,{from:t,to:n,completed:e}))}}],[{key:`from`,value:function(e){return new t().setState(e)}}])}(gt);function Q(e,t){var n=t.getBoundingClientRect();return{x:e.clientX-n.left,y:e.clientY-n.top}}function Oa(e,t){var n=z(z({},Q(e,t)),{},{sigmaDefaultPrevented:!1,preventSigmaDefault:function(){n.sigmaDefaultPrevented=!0},original:e});return n}function ka(e){var t=`x`in e?e:z(z({},e.touches[0]||e.previousTouches[0]),{},{original:e.original,sigmaDefaultPrevented:e.sigmaDefaultPrevented,preventSigmaDefault:function(){e.sigmaDefaultPrevented=!0,t.sigmaDefaultPrevented=!0}});return t}function Aa(e,t){var n=Oa(e,t);return n.delta=Pa(e),n}var ja=2;function Ma(e){for(var t=[],n=0,r=Math.min(e.length,ja);n<r;n++)t.push(e[n]);return t}function Na(e,t,n){var r={touches:Ma(e.touches).map(function(e){return Q(e,n)}),previousTouches:t.map(function(e){return Q(e,n)}),sigmaDefaultPrevented:!1,preventSigmaDefault:function(){r.sigmaDefaultPrevented=!0},original:e};return r}function Pa(e){if(e.deltaY!==void 0)return e.deltaY*-3/360;if(e.detail!==void 0)return e.detail/-9;throw Error(`Captor: could not extract delta from event.`)}var Fa=function(e){function t(e,n){var r;return B(this,t),r=H(this,t),r.container=e,r.renderer=n,r}return U(t,e),V(t)}(gt),Ia=[`doubleClickTimeout`,`doubleClickZoomingDuration`,`doubleClickZoomingRatio`,`dragTimeout`,`draggedEventsTolerance`,`enableCameraMouseRotation`,`gestureTarget`,`inertiaDuration`,`inertiaRatio`,`zoomDuration`,`zoomingRatio`].reduce(function(e,t){return z(z({},e),{},R({},t,Mt[t]))},{});function La(e){return e instanceof PointerEvent&&e.pointerType===`touch`}var Ra=function(e){function t(e,n){var r;return B(this,t),r=H(this,t,[e,n]),R(r,`enabled`,!0),R(r,`draggedEvents`,0),R(r,`downStartTime`,null),R(r,`lastMouseX`,null),R(r,`lastMouseY`,null),R(r,`isMouseDown`,!1),R(r,`isMoving`,!1),R(r,`isPanningStage`,!1),R(r,`movingTimeout`,null),R(r,`startCameraState`,null),R(r,`clicks`,0),R(r,`doubleClickTimeout`,null),R(r,`isRightMouseDown`,!1),R(r,`startRotationAngle`,null),R(r,`startCameraAngle`,null),R(r,`currentWheelDirection`,0),R(r,`lastWheelAnimationId`,0),R(r,`settings`,Ia),r.handleRightClick=r.handleRightClick.bind(r),r.handleDown=r.handleDown.bind(r),r.handleUp=r.handleUp.bind(r),r.handleMove=r.handleMove.bind(r),r.handleWheel=r.handleWheel.bind(r),r.handleLeave=r.handleLeave.bind(r),r.handleEnter=r.handleEnter.bind(r),e.addEventListener(`contextmenu`,r.handleRightClick,{capture:!1}),e.addEventListener(`pointerdown`,r.handleDown,{capture:!1}),e.addEventListener(`wheel`,r.handleWheel,{capture:!1,passive:!1}),e.addEventListener(`pointerleave`,r.handleLeave,{capture:!1}),e.addEventListener(`pointerenter`,r.handleEnter,{capture:!1}),document.addEventListener(`pointermove`,r.handleMove,{capture:!1}),document.addEventListener(`pointerup`,r.handleUp,{capture:!1}),r}return U(t,e),V(t,[{key:`kill`,value:function(){var e=this.container;e.removeEventListener(`contextmenu`,this.handleRightClick),e.removeEventListener(`pointerdown`,this.handleDown),e.removeEventListener(`wheel`,this.handleWheel),e.removeEventListener(`pointerleave`,this.handleLeave),e.removeEventListener(`pointerenter`,this.handleEnter),document.removeEventListener(`pointermove`,this.handleMove),document.removeEventListener(`pointerup`,this.handleUp)}},{key:`handleClick`,value:function(e){var t=this;if(this.enabled){if(this.clicks++,this.clicks===2)return this.clicks=0,typeof this.doubleClickTimeout==`number`&&(clearTimeout(this.doubleClickTimeout),this.doubleClickTimeout=null),this.handleDoubleClick(e);setTimeout(function(){t.clicks=0,t.doubleClickTimeout=null},this.settings.doubleClickTimeout),this.draggedEvents<this.settings.draggedEventsTolerance&&this.emit(`click`,Oa(e,this.container))}}},{key:`handleRightClick`,value:function(e){this.enabled&&(this.settings.enableCameraMouseRotation&&e.preventDefault(),this.emit(`rightClick`,Oa(e,this.container)))}},{key:`handleDoubleClick`,value:function(e){if(this.enabled){e.preventDefault(),e.stopPropagation();var t=Oa(e,this.container);if(this.emit(`doubleClick`,t),!t.sigmaDefaultPrevented){var n=this.renderer.getCamera(),r=n.getBoundedRatio(n.getState().ratio/this.settings.doubleClickZoomingRatio);n.animate(this.renderer.getViewportZoomedState(Q(e,this.container),r),{easing:`quadraticInOut`,duration:this.settings.doubleClickZoomingDuration})}}}},{key:`handleDown`,value:function(e){if(this.enabled&&!La(e)){if(e.button===0){this.startCameraState=this.renderer.getCamera().getState();var t=Q(e,this.container),n=t.x,r=t.y;this.lastMouseX=n,this.lastMouseY=r,this.draggedEvents=0,this.downStartTime=Date.now(),this.isMouseDown=!0}if(e.button===2&&this.settings.enableCameraMouseRotation){var i=Q(e,this.container),a=i.x,o=i.y,s=this.container.offsetWidth/2,c=this.container.offsetHeight/2;this.startRotationAngle=Math.atan2(o-c,a-s),this.startCameraAngle=this.renderer.getCamera().getState().angle,this.isRightMouseDown=!0}this.emit(`mousedown`,Oa(e,this.container))}}},{key:`handleUp`,value:function(e){var t=this;if(this.enabled&&!La(e)&&(this.isMouseDown||this.isRightMouseDown)){if(this.isRightMouseDown)this.isRightMouseDown=!1,this.startRotationAngle=null,this.startCameraAngle=null,this.emit(`mouseup`,Oa(e,this.container));else{var n=this.renderer.getCamera();this.isMouseDown=!1,this.isPanningStage&&(this.isPanningStage=!1,this.renderer._setPanning(!1)),typeof this.movingTimeout==`number`&&(clearTimeout(this.movingTimeout),this.movingTimeout=null);var r=Q(e,this.container),i=r.x,a=r.y,o=n.getState(),s=n.getPreviousState();this.isMoving?n.animate({x:o.x+this.settings.inertiaRatio*(o.x-s.x),y:o.y+this.settings.inertiaRatio*(o.y-s.y)},{duration:this.settings.inertiaDuration,easing:`quadraticOut`}):(this.lastMouseX!==i||this.lastMouseY!==a)&&n.setState({x:o.x,y:o.y}),this.isMoving=!1,setTimeout(function(){var e=t.draggedEvents>0;t.draggedEvents=0;var n=t.renderer.getSetting(`hideEdgesOnMove`)||t.renderer.getSetting(`hideLabelsOnMove`);e&&n&&t.renderer.refresh()},0),this.emit(`mouseup`,Oa(e,this.container)),(e.target===this.container||e.composedPath()[0]===this.container)&&this.handleClick(e)}}}},{key:`handleMove`,value:function(e){var t=this;if(this.enabled&&!La(e)){var n=Oa(e,this.container);if(this.emit(`mousemovebody`,n),(e.target===this.container||e.composedPath()[0]===this.container)&&this.emit(`mousemove`,n),this.isMouseDown&&this.draggedEvents++,!n.sigmaDefaultPrevented){if(this.isMouseDown){this.isMoving=!0,typeof this.movingTimeout==`number`&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){t.movingTimeout=null,t.isMoving=!1},this.settings.dragTimeout);var r=this.renderer.getCamera(),i=Q(e,this.container),a=i.x,o=i.y,s=this.renderer.viewportToFramedGraph({x:this.lastMouseX,y:this.lastMouseY}),c=this.renderer.viewportToFramedGraph({x:a,y:o}),l=s.x-c.x,u=s.y-c.y,d=r.getState(),f=d.x+l,p=d.y+u;this.isPanningStage||(this.isPanningStage=!0,this.renderer._setPanning(!0)),r.setState({x:f,y:p}),this.lastMouseX=a,this.lastMouseY=o,e.preventDefault(),e.stopPropagation()}if(this.isRightMouseDown){var m=Q(e,this.container),h=m.x,g=m.y,_=this.container.offsetWidth/2,v=this.container.offsetHeight/2,y=Math.atan2(g-v,h-_)-this.startRotationAngle;this.renderer.getCamera().setState({angle:this.startCameraAngle+y}),e.preventDefault(),e.stopPropagation()}}}}},{key:`handleLeave`,value:function(e){La(e)||this.emit(`mouseleave`,Oa(e,this.container))}},{key:`handleEnter`,value:function(e){La(e)||this.emit(`mouseenter`,Oa(e,this.container))}},{key:`handleWheel`,value:function(e){var t=this,n=this.renderer.getCamera();if(this.enabled&&n.enabledZooming){var r=Aa(e,this.container);if(this.emit(`wheel`,r),!r.sigmaDefaultPrevented){var i=this.settings.gestureTarget;if(i!==`page`){if(i===`shared`&&!e.ctrlKey&&!e.metaKey)this.renderer._showGestureHint(`wheel`);else{var a=Pa(e);if(a){e.preventDefault(),e.stopPropagation();var o=n.getState().ratio,s=a>0?1/this.settings.zoomingRatio:this.settings.zoomingRatio,c=n.getBoundedRatio(o*s),l=a>0?1:-1,u=Date.now();if(o!==c&&!(this.currentWheelDirection===l&&this.lastWheelTriggerTime&&u-this.lastWheelTriggerTime<this.settings.zoomDuration/5)){var d=++this.lastWheelAnimationId;n.animate(this.renderer.getViewportZoomedState(Q(e,this.container),c),{easing:`quadraticOut`,duration:this.settings.zoomDuration}).then(function(){t.lastWheelAnimationId===d&&(t.currentWheelDirection=0)}),this.currentWheelDirection=l,this.lastWheelTriggerTime=u}}}}}}}},{key:`setSettings`,value:function(e){this.settings=e}}])}(Fa),za=[`dragTimeout`,`gestureTarget`,`inertiaDuration`,`inertiaRatio`,`doubleClickTimeout`,`doubleClickZoomingRatio`,`doubleClickZoomingDuration`,`tapMoveTolerance`].reduce(function(e,t){return z(z({},e),{},R({},t,Mt[t]))},{}),Ba=function(e){function t(e,n){var r;return B(this,t),r=H(this,t,[e,n]),R(r,`enabled`,!0),R(r,`isMoving`,!1),R(r,`hasMoved`,!1),R(r,`isPanningStage`,!1),R(r,`isZoomingStage`,!1),R(r,`touchMode`,0),R(r,`startTouchesPositions`,[]),R(r,`lastTouches`,[]),R(r,`lastTap`,null),R(r,`settings`,za),r.handleStart=r.handleStart.bind(r),r.handleLeave=r.handleLeave.bind(r),r.handleMove=r.handleMove.bind(r),e.addEventListener(`touchstart`,r.handleStart,{capture:!1}),e.addEventListener(`touchcancel`,r.handleLeave,{capture:!1}),document.addEventListener(`touchend`,r.handleLeave,{capture:!1,passive:!1}),document.addEventListener(`touchmove`,r.handleMove,{capture:!1,passive:!1}),r}return U(t,e),V(t,[{key:`kill`,value:function(){var e=this.container;e.removeEventListener(`touchstart`,this.handleStart),e.removeEventListener(`touchcancel`,this.handleLeave),document.removeEventListener(`touchend`,this.handleLeave),document.removeEventListener(`touchmove`,this.handleMove)}},{key:`getDimensions`,value:function(){return{width:this.container.offsetWidth,height:this.container.offsetHeight}}},{key:`doesCapture`,value:function(e){var t=this.settings.gestureTarget;return t===`graph`||t!==`page`&&e>=2}},{key:`syncStageFlags`,value:function(){var e=this.touchMode===1&&this.hasMoved,t=this.touchMode===2;e!==this.isPanningStage&&(this.isPanningStage=e,this.renderer._setPanning(e)),t!==this.isZoomingStage&&(this.isZoomingStage=t,this.renderer._setZooming(t))}},{key:`handleStart`,value:function(e){var t=this;if(this.enabled){var n=Ma(e.touches);if(this.touchMode=n.length,this.startCameraState=this.renderer.getCamera().getState(),this.startTouchesPositions=n.map(function(e){return Q(e,t.container)}),this.touchMode===2){var r=c(this.startTouchesPositions,2),i=r[0],a=i.x,o=i.y,s=r[1],l=s.x,u=s.y;this.startTouchesAngle=Math.atan2(u-o,l-a),this.startTouchesDistance=Math.sqrt((l-a)**2+(u-o)**2)}this.syncStageFlags(),this.emit(`touchdown`,Na(e,this.lastTouches,this.container)),this.lastTouches=n,this.lastTouchesPositions=this.startTouchesPositions,e.cancelable&&(this.doesCapture(e.touches.length)||this.renderer._hasNodeDrag())&&e.preventDefault()}}},{key:`handleLeave`,value:function(e){if(this.enabled&&this.startTouchesPositions.length){switch(e.cancelable&&this.doesCapture(this.touchMode)&&e.preventDefault(),this.movingTimeout&&(this.isMoving=!1,clearTimeout(this.movingTimeout)),this.touchMode){case 2:if(e.touches.length===1){this.handleStart(e);break}case 1:if(this.isMoving){var t=this.renderer.getCamera(),n=t.getState(),r=t.getPreviousState();t.animate({x:n.x+this.settings.inertiaRatio*(n.x-r.x),y:n.y+this.settings.inertiaRatio*(n.y-r.y)},{duration:this.settings.inertiaDuration,easing:`quadraticOut`})}this.hasMoved=!1,this.isMoving=!1,this.touchMode=0}if(this.syncStageFlags(),this.emit(`touchup`,Na(e,this.lastTouches,this.container)),!e.touches.length){var i=Q(this.lastTouches[0],this.container),a=this.startTouchesPositions[0],o=(i.x-a.x)**2+(i.y-a.y)**2;if(!e.touches.length&&o<this.settings.tapMoveTolerance**2){if(this.lastTap&&Date.now()-this.lastTap.time<this.settings.doubleClickTimeout){var s=Na(e,this.lastTouches,this.container);if(this.emit(`doubletap`,s),this.lastTap=null,!s.sigmaDefaultPrevented&&this.settings.gestureTarget!==`page`){var c=this.renderer.getCamera(),l=c.getBoundedRatio(c.getState().ratio/this.settings.doubleClickZoomingRatio);c.animate(this.renderer.getViewportZoomedState(i,l),{easing:`quadraticInOut`,duration:this.settings.doubleClickZoomingDuration})}}else{var u=Na(e,this.lastTouches,this.container);this.emit(`tap`,u),this.lastTap={time:Date.now(),position:u.touches[0]||u.previousTouches[0]}}}}this.lastTouches=Ma(e.touches),this.startTouchesPositions=[]}}},{key:`handleMove`,value:function(e){var t=this;if(this.enabled&&this.startTouchesPositions.length){var n=this.doesCapture(e.touches.length);n&&e.preventDefault();var r=Ma(e.touches),i=r.map(function(e){return Q(e,t.container)}),a=this.lastTouches;this.lastTouches=r,this.lastTouchesPositions=i;var o=Na(e,a,this.container);if(this.emit(`touchmove`,o),!o.sigmaDefaultPrevented&&(this.hasMoved||=i.some(function(e,n){var r=t.startTouchesPositions[n];return r&&(e.x!==r.x||e.y!==r.y)}),this.hasMoved)){if(!n)this.settings.gestureTarget===`shared`&&this.renderer._showGestureHint(`touch`);else{this.isMoving=!0,this.syncStageFlags(),this.movingTimeout&&clearTimeout(this.movingTimeout),this.movingTimeout=window.setTimeout(function(){t.isMoving=!1},this.settings.dragTimeout);var s=this.renderer.getCamera(),c=this.startCameraState,l=this.renderer.getSetting(`stagePadding`);switch(this.touchMode){case 1:var u=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0]),d=u.x,f=u.y,p=this.renderer.viewportToFramedGraph(i[0]),m=p.x,g=p.y;s.setState({x:c.x+d-m,y:c.y+f-g});break;case 2:var _={x:.5,y:.5,angle:0,ratio:1},v=i[0],y=v.x,b=v.y,x=i[1],S=x.x,C=x.y,w=Math.atan2(C-b,S-y)-this.startTouchesAngle,T=Math.hypot(C-b,S-y)/this.startTouchesDistance,E=s.getBoundedRatio(c.ratio/T);_.ratio=E,_.angle=c.angle+w;var D=this.getDimensions(),O=this.renderer.viewportToFramedGraph((this.startTouchesPositions||[])[0],{cameraState:c}),k=Math.min(D.width,D.height)-2*l,A=k/D.width,j=k/D.height,M=E/k,N=y-k/2/A,P=b-k/2/j,F=h({x:N,y:P},_.angle);N=F.x,P=F.y,_.x=O.x-N*M,_.y=O.y+P*M,s.setState(_)}}}}}},{key:`setSettings`,value:function(e){this.settings=e}}])}(Fa),Va=function(){function e(t,n,r,i){B(this,e),R(this,`pendingNode`,null),R(this,`session`,null),this.graph=t,this.viewportToGraph=n,this.setNodesState=r,this.emit=i}return V(e,[{key:`start`,value:function(e,t,n,r,i){var a=n(e),o=!1;if(this.emit(`nodeDragStart`,{node:e,allDraggedNodes:a,event:t,preventSigmaDefault:function(){o=!0}}),o)return!1;var s=new Map,c=l(a),u;try{for(c.s();!(u=c.n()).done;){var d=u.value;s.set(d,{x:this.graph.getNodeAttribute(d,r),y:this.graph.getNodeAttribute(d,i)})}}catch(e){c.e(e)}finally{c.f()}return this.session={node:e,allNodes:a,startPosition:this.viewportToGraph(t),startNodePositions:s,xAttr:r,yAttr:i},this.setNodesState(a,{isDragged:!0}),!0}},{key:`applyMove`,value:function(e,t){var n=this.session,r=n.allNodes,i=n.startNodePositions,a=n.startPosition,o=n.xAttr,s=n.yAttr,c=this.viewportToGraph(e),u={x:c.x-a.x,y:c.y-a.y},d=l(r),f;try{for(d.s();!(f=d.n()).done;){var p=f.value,m=i.get(p);if(m&&this.graph.hasNode(p)){var h={x:m.x+u.x,y:m.y+u.y};t?this.graph.mergeNodeAttributes(p,t(h,p)):(this.graph.setNodeAttribute(p,o,h.x),this.graph.setNodeAttribute(p,s,h.y))}}}catch(e){d.e(e)}finally{d.f()}}},{key:`end`,value:function(){if(this.pendingNode=null,!this.session)return null;var e=this.session,t=e.node,n=e.allNodes;return this.setNodesState(n,{isDragged:!1}),this.session=null,{node:t,allNodes:n}}},{key:`removeNode`,value:function(e){e===this.pendingNode&&(this.pendingNode=null),this.session&&(this.session.node===e?(this.setNodesState(this.session.allNodes,{isDragged:!1}),this.session=null):this.session.allNodes.includes(e)&&(this.session.allNodes=this.session.allNodes.filter(function(t){return t!==e}),this.session.startNodePositions.delete(e)))}},{key:`clear`,value:function(){this.pendingNode=null,this.session=null}}])}();function Ha(e,t){return e<t?`${e} ${t}`:`${t} ${e}`}var Ua=function(){function e(t,n){B(this,e),R(this,`groups`,new Map),R(this,`edgeToGroupKey`,new Map),this.graph=t,this.onGroupChanged=n}return V(e,[{key:`getGroupKey`,value:function(e){return Ha(this.graph.source(e),this.graph.target(e))}},{key:`sortGroup`,value:function(e,t){var n=this,r=t.split(`\0`)[0];e.sort(function(e,t){return(n.graph.source(e)===r||!n.graph.isDirected(e)?0:1)-(n.graph.source(t)===r||!n.graph.isDirected(t)?0:1)})}},{key:`register`,value:function(e){var t=this.getGroupKey(e),n=this.groups.get(t);n||(n=[],this.groups.set(t,n)),n.includes(e)||n.push(e),this.edgeToGroupKey.set(e,t),n.length>1&&this.sortGroup(n,t),this.onGroupChanged(n,n.length)}},{key:`unregister`,value:function(e){var t=this.edgeToGroupKey.get(e);if(t){this.edgeToGroupKey.delete(e);var n=this.groups.get(t);if(n){var r=n.indexOf(e);r!==-1&&n.splice(r,1),n.length===0?this.groups.delete(t):this.onGroupChanged(n,n.length)}}}},{key:`getGroup`,value:function(e){var t=this.edgeToGroupKey.get(e);return t?this.groups.get(t)??[]:[]}},{key:`getSiblings`,value:function(e){return this.getGroup(e).filter(function(t){return t!==e})}},{key:`rebuild`,value:function(){var e=this;this.groups.clear(),this.edgeToGroupKey.clear(),this.graph.forEachEdge(function(t,n,r,i){var a=Ha(r,i),o=e.groups.get(a);o||(o=[],e.groups.set(a,o)),o.push(t),e.edgeToGroupKey.set(t,a)});var t=l(this.groups),n;try{for(t.s();!(n=t.n()).done;){var r=c(n.value,2),i=r[0],a=r[1];a.length>1&&this.sortGroup(a,i),this.onGroupChanged(a,a.length)}}catch(e){t.e(e)}finally{t.f()}}},{key:`clear`,value:function(){this.groups.clear(),this.edgeToGroupKey.clear()}}])}();function Wa(e,t){if(e===!1||e===`extend`||e===`separate`)return e;var n=e[t];return n===void 0?e.default??!1:n}function Ga(e){return e===!1?!1:e===`extend`||e===`separate`||Object.values(e).some(function(e){return e===`extend`||e===`separate`})}function Ka(e){return e===`separate`?!0:e===!1||e===`extend`?!1:e.default===`separate`||Object.values(e).includes(`separate`)}var $={node:{parent:null,eventSuffix:`Node`,payloadKey:`node`,isEnabled:function(){return!0},writesPickingThisFrame:function(){return!0},setHover:function(e,t,n){return e.setNodeState(t,{isHovered:n})},getCursor:function(e,t){return e.nodeDataCache[t]?.cursor},isHitValid:function(e,t){return e.nodeDataCache[t]?.visibility!==`hidden`}},edge:{parent:null,eventSuffix:`Edge`,payloadKey:`edge`,isEnabled:function(e){return!!e.settings.enableEdgeEvents},writesPickingThisFrame:function(e){return!!e.settings.enableEdgeEvents},setHover:function(e,t,n){return e.setEdgeState(t,{isHovered:n})},getCursor:function(e,t){return e.edgeDataCache[t]?.cursor}},nodeLabel:{parent:`node`,eventSuffix:`NodeLabel`,payloadKey:`node`,isEnabled:function(e){return Ka(e.settings.nodeLabelEvents)},writesPickingThisFrame:function(e){return Ga(e.settings.nodeLabelEvents)},setHover:function(e,t,n){return e.setNodeState(t,{isLabelHovered:n})},getCursor:function(e,t){return e.nodeDataCache[t]?.labelCursor},resolveForVerb:function(e,t,n){var r=Wa(n.settings.nodeLabelEvents,t);return r===!1?null:r===`extend`?{kind:`node`,key:e.key}:e}},edgeLabel:{parent:`edge`,eventSuffix:`EdgeLabel`,payloadKey:`edge`,isEnabled:function(e){return Ka(e.settings.edgeLabelEvents)},writesPickingThisFrame:function(e){return Ga(e.settings.edgeLabelEvents)},setHover:function(e,t,n){return e.setEdgeState(t,{isLabelHovered:n})},getCursor:function(e,t){return e.edgeDataCache[t]?.labelCursor},resolveForVerb:function(e,t,n){var r=Wa(n.settings.edgeLabelEvents,t);return r===!1?null:r===`extend`?{kind:`edge`,key:e.key}:e}}},qa=[`node`,`edge`,`nodeLabel`,`edgeLabel`];function Ja(){return{lookup:[null],idsByKind:{node:new Map,edge:new Map,nodeLabel:new Map,edgeLabel:new Map},nextId:1}}function Ya(e,t,n){return e.idsByKind[t].get(n)??0}function Xa(e,t){var n=l(qa),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;if(i===t||$[i].parent===t){var a=l(e.idsByKind[i].values()),o;try{for(a.s();!(o=a.n()).done;){var s=o.value;e.lookup[s]=null}}catch(e){a.e(e)}finally{a.f()}e.idsByKind[i]=new Map}}}catch(e){n.e(e)}finally{n.f()}var c=1,u=l(qa),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;if(f===t)break;c+=e.idsByKind[f].size}}catch(e){u.e(e)}finally{u.f()}e.nextId=c}function Za(e,t,n){var r=e.nextId++;return e.idsByKind[t].set(n,r),e.lookup[r]={kind:t,key:n},r}function Qa(e,t){var n=l(qa),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;if($[i].parent!==null){var a=l(e.idsByKind[i].values()),o;try{for(a.s();!(o=a.n()).done;){var s=o.value;e.lookup[s]=null}}catch(e){a.e(e)}finally{a.f()}e.idsByKind[i]=new Map}}}catch(e){n.e(e)}finally{n.f()}e.nextId=1;var c=l(qa),u;try{for(c.s();!(u=c.n()).done;){var d=u.value;if($[d].parent===null){var f=l(e.idsByKind[d].values()),p;try{for(f.s();!(p=f.n()).done;){var m=p.value;m>=e.nextId&&(e.nextId=m+1)}}catch(e){f.e(e)}finally{f.f()}}}}catch(e){c.e(e)}finally{c.f()}var h=l(qa),g;try{for(h.s();!(g=h.n()).done;){var _=g.value,v=$[_];if(v.parent!==null&&v.isEnabled(t)){var y=l(e.idsByKind[v.parent].keys()),b;try{for(y.s();!(b=y.n()).done;){var x=b.value;e.idsByKind[_].set(x,e.nextId),e.lookup[e.nextId]={kind:_,key:x},e.nextId++}}catch(e){y.e(e)}finally{y.f()}}}}catch(e){h.e(e)}finally{h.f()}}function $a(e,t){var n=l(qa),r;try{for(n.s();!(r=n.n()).done;){var i=r.value,a=e[i],o=t[i];if(a!==o){if(a.size!==o.size)return!1;var s=l(a),u;try{for(s.s();!(u=s.n()).done;){var d=c(u.value,2),f=d[0],p=d[1];if(o.get(f)!==p)return!1}}catch(e){s.e(e)}finally{s.f()}}}}catch(e){n.e(e)}finally{n.f()}return!0}function eo(e,t,n){$[t.kind].setHover(e,t.key,n)}function to(e,t){return $[t.kind].getCursor(e,t.key)}function no(e,t){return`${t}${$[e].eventSuffix}`}function ro(e,t){return z(z({},t),{},R({},$[e.kind].payloadKey,e.key))}function io(e,t,n){var r=$[t.kind].resolveForVerb;return r?r(t,n,e):t}function ao(e,t){var n=$[t.kind].isHitValid;return!n||n(e,t.key)}function oo(e){return qa.filter(function(t){return t===e||$[t].parent===e})}function so(e,t,n){return t&&=io(e,t,n),t&&!ao(e,t)&&(t=null),t}function co(e,t,n){return so(e,n===`wheel`?e.stateManager.hovered:e.getHitAtPosition(t),n)}function lo(e,t){return!e||!t?e===t:e.kind===t.kind&&e.key===t.key}function uo(e,t,n){var r={event:n,preventSigmaDefault:function(){return n.preventSigmaDefault()}},i=e.dragManager.session,a=i?{kind:`node`,key:i.node}:so(e,t,`enter`),o=e.stateManager,s=o.hovered;lo(s,a)||(s&&(eo(e,s,!1),e.emit(no(s.kind,`leave`),ro(s,r))),o.setHovered(a),a&&(eo(e,a,!0),e.emit(no(a.kind,`enter`),ro(a,r))),e.updateContainerCursor())}function fo(e,t,n,r){r.handleResize=function(){return e.scheduleRefresh()},window.addEventListener(`resize`,r.handleResize),r.handleMove=function(t){e.hoverResolver.pointerMoved(ka(t))},r.handleMoveBody=function(t){var n=ka(t),r=e.dragManager;if(r.pendingNode&&!r.session){var i=e.nodeStyleAnalysis,a=i.xAttribute,o=i.yAttribute,s=e.settings;r.start(r.pendingNode,n,s.getDraggedNodes,a||`x`,o||`y`),r.pendingNode=null}r.session&&(r.applyMove(n,e.settings.dragPositionToAttributes),e.emit(`nodeDrag`,{node:r.session.node,allDraggedNodes:r.session.allNodes,event:n}),n.preventSigmaDefault()),e.emit(`moveBody`,{event:n,preventSigmaDefault:function(){return n.preventSigmaDefault()}})},r.handleLeave=function(t){var n=ka(t),r={event:n,preventSigmaDefault:function(){return n.preventSigmaDefault()}};e.hoverResolver.pointerLeft(),uo(e,null,n),e.emit(`leaveStage`,r)},r.handleEnter=function(t){var n=ka(t);e.emit(`enterStage`,{event:n,preventSigmaDefault:function(){return n.preventSigmaDefault()}})};var i=function(t){return function(n){var r=ka(n),i={event:r,preventSigmaDefault:function(){return r.preventSigmaDefault()}},a=co(e,r,t);a?e.emit(no(a.kind,t),ro(a,i)):e.emit(`${t}Stage`,i)}};r.handleClick=i(`click`),r.handleRightClick=i(`rightClick`),r.handleDoubleClick=i(`doubleClick`),r.handleWheel=i(`wheel`),r.handleDown=function(t){var n=ka(t),r={event:n,preventSigmaDefault:function(){return n.preventSigmaDefault()}},i=co(e,n,`down`);i?(i.kind===`node`&&e.settings.enableNodeDrag&&(e.dragManager.pendingNode=i.key),e.emit(no(i.kind,`down`),ro(i,r))):e.emit(`downStage`,r)},r.handleUp=function(t){var n=ka(t),r={event:n,preventSigmaDefault:function(){return n.preventSigmaDefault()}},i=e.dragManager.end();i&&e.emit(`nodeDragEnd`,z({node:i.node,allDraggedNodes:i.allNodes},r));var a=co(e,n,`up`);a?e.emit(no(a.kind,`up`),ro(a,r)):e.emit(`upStage`,r)},t.on(`mousemove`,r.handleMove),t.on(`mousemovebody`,r.handleMoveBody),t.on(`click`,r.handleClick),t.on(`rightClick`,r.handleRightClick),t.on(`doubleClick`,r.handleDoubleClick),t.on(`wheel`,r.handleWheel),t.on(`mousedown`,r.handleDown),t.on(`mouseup`,r.handleUp),t.on(`mouseleave`,r.handleLeave),t.on(`mouseenter`,r.handleEnter),n.on(`touchdown`,r.handleDown),n.on(`touchdown`,r.handleMove),n.on(`touchup`,r.handleUp),n.on(`touchmove`,r.handleMove),n.on(`tap`,r.handleClick),n.on(`doubletap`,r.handleDoubleClick),n.on(`touchmove`,r.handleMoveBody)}function po(e,t){var n=e.graph,r=new Set([`x`,`y`,`zIndex`,`type`]);t.eachNodeAttributesUpdatedGraphUpdate=function(t){var i=t.hints?.attributes,a=!i||i.some(function(e){return r.has(e)});e.refresh({partialGraph:{nodes:n.nodes()},skipIndexation:!a,schedule:!0})},t.eachEdgeAttributesUpdatedGraphUpdate=function(t){var r=t.hints?.attributes,i=r&&[`zIndex`,`type`].some(function(e){return r?.includes(e)});e.refresh({partialGraph:{edges:n.edges()},skipIndexation:!i,schedule:!0})},t.addNodeGraphUpdate=function(t){e.addNode(t.key),e.refresh({partialGraph:{nodes:[t.key]},skipIndexation:!1,schedule:!0})},t.updateNodeGraphUpdate=function(t){e.refresh({partialGraph:{nodes:[t.key]},skipIndexation:!1,schedule:!0})},t.dropNodeGraphUpdate=function(t){e.removeNode(t.key),e.refresh({schedule:!0})},t.addEdgeGraphUpdate=function(t){var n=t.key;e.edgeGroups.register(n),e.addEdge(n);var r=e.edgeGroups.getSiblings(n),i=l(r),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;e.addEdge(o)}}catch(e){i.e(e)}finally{i.f()}e.refresh({partialGraph:{edges:[n].concat(W(r))},schedule:!0})},t.updateEdgeGraphUpdate=function(t){e.refresh({partialGraph:{edges:[t.key]},skipIndexation:!1,schedule:!0})},t.dropEdgeGraphUpdate=function(t){var n=t.key,r=e.edgeGroups.getSiblings(n);e.edgeGroups.unregister(n),e.removeEdge(n);var i=l(r),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;e.addEdge(o)}}catch(e){i.e(e)}finally{i.f()}e.refresh({schedule:!0})},t.clearEdgesGraphUpdate=function(){e.clearEdgeState(),e.clearEdgeIndices(),e.refresh({schedule:!0})},t.clearGraphUpdate=function(){e.clearEdgeState(),e.clearNodeState(),e.clearEdgeIndices(),e.clearNodeIndices(),e.refresh({schedule:!0})},n.on(`nodeAdded`,t.addNodeGraphUpdate),n.on(`nodeDropped`,t.dropNodeGraphUpdate),n.on(`nodeAttributesUpdated`,t.updateNodeGraphUpdate),n.on(`eachNodeAttributesUpdated`,t.eachNodeAttributesUpdatedGraphUpdate),n.on(`edgeAdded`,t.addEdgeGraphUpdate),n.on(`edgeDropped`,t.dropEdgeGraphUpdate),n.on(`edgeAttributesUpdated`,t.updateEdgeGraphUpdate),n.on(`eachEdgeAttributesUpdated`,t.eachEdgeAttributesUpdatedGraphUpdate),n.on(`edgesCleared`,t.clearEdgesGraphUpdate),n.on(`cleared`,t.clearGraphUpdate)}function mo(e,t){e.removeListener(`nodeAdded`,t.addNodeGraphUpdate),e.removeListener(`nodeDropped`,t.dropNodeGraphUpdate),e.removeListener(`nodeAttributesUpdated`,t.updateNodeGraphUpdate),e.removeListener(`eachNodeAttributesUpdated`,t.eachNodeAttributesUpdatedGraphUpdate),e.removeListener(`edgeAdded`,t.addEdgeGraphUpdate),e.removeListener(`edgeDropped`,t.dropEdgeGraphUpdate),e.removeListener(`edgeAttributesUpdated`,t.updateEdgeGraphUpdate),e.removeListener(`eachEdgeAttributesUpdated`,t.eachEdgeAttributesUpdatedGraphUpdate),e.removeListener(`edgesCleared`,t.clearEdgesGraphUpdate),e.removeListener(`cleared`,t.clearGraphUpdate)}var ho={x:.5,y:.5,angle:0,ratio:1},go=8,_o=.001;function vo(e){var t=e.coords,n=e.nodeData,r=e.dimensions,i=e.stagePadding,a=e.zoomToSizeRatioFunction,o=e.itemSizesReference,s=e.fitLabels,c=e.nodeLabelBox,l=Object.keys(t);if(!l.length)return e.extent;for(var u=a(1)||1,d=o===`positions`,f=r.width,p=r.height,m=e.extent,h=0;h<go;h++){for(var g=jt(m),_=v(ho,r,{width:m.x[1]-m.x[0]||1,height:m.y[1]-m.y[0]||1},i),y=yo(_,g({x:0,y:0}),f,p),b=yo(_,g({x:1,y:0}),f,p),x=Math.hypot(b.x-y.x,b.y-y.y)||1,S=1/0,C=-1/0,w=1/0,T=-1/0,E=0,D=l.length;E<D;E++){var O=l[E],k=n[O],A=k.size/u*(d?x:1),j=-A,M=A,N=-A,P=A;if(s){var F=c(k,A);F&&(F.minX<j&&(j=F.minX),F.maxX>M&&(M=F.maxX),F.minY<N&&(N=F.minY),F.maxY>P&&(P=F.maxY))}var I=t[O],ee=I.x,te=I.y;S=Math.min(S,ee+j/x),C=Math.max(C,ee+M/x),w=Math.min(w,te-P/x),T=Math.max(T,te-N/x)}var L={x:[S,C],y:[w,T]},R=Math.max(L.x[1]-L.x[0],L.y[1]-L.y[0])||1,ne=Math.max(Math.abs(L.x[0]-m.x[0]),Math.abs(L.x[1]-m.x[1]),Math.abs(L.y[0]-m.y[0]),Math.abs(L.y[1]-m.y[1]));if(m=L,ne/R<_o)break}return m}function yo(e,t,n,r){var i=g(e,t);return{x:(1+i.x)*n/2,y:(1-i.y)*r/2}}var bo=typeof navigator<`u`&&/Mac|iP(hone|ad|od)/.test(navigator.platform),xo=1500,So=`.sigma-gesture-hint {
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
}`;function Co(e){var t=Rt(`style`);t.textContent=e,document.head.appendChild(t);var n=(t.sheet?.cssRules.length??0)>0;return t.remove(),n}var wo=null;function To(){return wo===null&&(wo=So,Co(`@scope {}`)&&(wo=`@scope {
${wo}
}`),Co(`@layer sigma-gesture-hint {}`)&&(wo=`@layer sigma-gesture-hint {
${wo}
}`)),wo}var Eo=function(){function e(t){B(this,e),R(this,`hideTimeout`,null),this.styleElement=Rt(`style`),this.styleElement.textContent=To(),t.appendChild(this.styleElement),this.element=Rt(`div`,{opacity:`0`},{class:`sigma-gesture-hint`}),t.appendChild(this.element)}return V(e,[{key:`show`,value:function(e,t){var n=this,r=e===`touch`?t.sharedGestureTouchMessage:bo?t.sharedGestureAppleWheelMessage:t.sharedGestureWheelMessage;r&&(this.element.textContent=r,this.element.style.opacity=`1`,typeof this.hideTimeout==`number`&&clearTimeout(this.hideTimeout),this.hideTimeout=window.setTimeout(function(){n.hideTimeout=null,n.element.style.opacity=`0`},xo))}},{key:`kill`,value:function(){typeof this.hideTimeout==`number`&&clearTimeout(this.hideTimeout),this.styleElement.remove(),this.element.remove()}}])}(),Do=function(){function e(t){B(this,e),R(this,`readBuffer`,null),R(this,`fence`,null),R(this,`result`,new Uint8Array(4)),R(this,`generation`,0),R(this,`readGeneration`,0),R(this,`lastEvent`,null),R(this,`active`,!1),R(this,`dirty`,!1),R(this,`rafId`,null),R(this,`killed`,!1),this.options=t}return V(e,[{key:`pointerMoved`,value:function(e){this.lastEvent=e,this.active=!0,this.options.isRenderPending()||this.request()}},{key:`pointerLeft`,value:function(){this.active=!1,this.dirty=!1}},{key:`frameRendered`,value:function(){this.request()}},{key:`invalidate`,value:function(){this.generation++}},{key:`request`,value:function(){!this.killed&&this.active&&this.lastEvent&&(this.fence?this.dirty=!0:this.startRead())}},{key:`startRead`,value:function(){var e=this.options,t=e.gl,n=e.getFrameBuffer,r=e.getPixelRatio,i=e.getDownSizingRatio;this.readGeneration=this.generation;var a=this.lastEvent,o=c(b(t,a.x,a.y,r(),i()),2),s=o[0],l=o[1];this.readBuffer||=t.createBuffer(),t.bindFramebuffer(t.FRAMEBUFFER,n()),t.bindBuffer(t.PIXEL_PACK_BUFFER,this.readBuffer),t.bufferData(t.PIXEL_PACK_BUFFER,4,t.STREAM_READ),t.readPixels(s,l,1,1,t.RGBA,t.UNSIGNED_BYTE,0),t.bindBuffer(t.PIXEL_PACK_BUFFER,null),t.bindFramebuffer(t.FRAMEBUFFER,null),this.fence=t.fenceSync(t.SYNC_GPU_COMMANDS_COMPLETE,0),t.flush(),this.schedulePoll(a)}},{key:`schedulePoll`,value:function(e){var t=this;this.rafId=requestAnimationFrame(function(){t.rafId=null,t.poll(e)})}},{key:`poll`,value:function(e){var t=this.options,n=t.gl,r=t.onIndex;if(!this.killed&&this.fence){var i=n.clientWaitSync(this.fence,0,0);if(i===n.TIMEOUT_EXPIRED)this.schedulePoll(e);else{if(n.deleteSync(this.fence),this.fence=null,i!==n.WAIT_FAILED&&this.readGeneration===this.generation){n.bindBuffer(n.PIXEL_PACK_BUFFER,this.readBuffer),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,this.result),n.bindBuffer(n.PIXEL_PACK_BUFFER,null);var a=c(this.result,4),o=a[0],s=a[1],l=a[2],u=a[3];this.active&&r(F(o,s,l,u),e)}this.dirty&&(this.dirty=!1,this.active&&this.lastEvent&&!this.options.isRenderPending()&&this.startRead())}}}},{key:`reset`,value:function(){this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=null,this.fence=null,this.readBuffer=null,this.dirty=!1}},{key:`kill`,value:function(){this.killed=!0,this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=null;var e=this.options.gl;this.fence&&e.deleteSync(this.fence),this.fence=null,this.readBuffer&&e.deleteBuffer(this.readBuffer),this.readBuffer=null}}])}(),Oo=function(){function e(t,n){B(this,e),this.key=t,this.size=n}return V(e,null,[{key:`compare`,value:function(e,t){return e.size>t.size?-1:e.size<t.size||e.key>t.key?1:-1}}])}(),ko=function(){function e(){B(this,e),R(this,`width`,0),R(this,`height`,0),R(this,`cellSize`,0),R(this,`columns`,0),R(this,`rows`,0),R(this,`cells`,{})}return V(e,[{key:`resizeAndClear`,value:function(e,t){this.width=e.width,this.height=e.height,this.cellSize=t,this.columns=Math.ceil(e.width/t),this.rows=Math.ceil(e.height/t),this.cells={}}},{key:`getIndex`,value:function(e){var t=Math.floor(e.x/this.cellSize);return Math.floor(e.y/this.cellSize)*this.columns+t}},{key:`add`,value:function(e,t,n){var r=new Oo(e,t),i=this.getIndex(n),a=this.cells[i];a||(a=[],this.cells[i]=a),a.push(r)}},{key:`organize`,value:function(){for(var e in this.cells)this.cells[e].sort(Oo.compare)}},{key:`getLabelsToDisplay`,value:function(e,t,n){var r=this.cellSize*this.cellSize,i=r/e/e*t/r,a=Math.ceil(i),o=[];if(n)for(var s=Math.max(0,Math.floor(n.x1/this.cellSize)),c=Math.min(this.columns-1,Math.floor(n.x2/this.cellSize)),l=Math.max(0,Math.floor(n.y1/this.cellSize)),u=Math.min(this.rows-1,Math.floor(n.y2/this.cellSize)),d=l;d<=u;d++)for(var f=s;f<=c;f++){var p=d*this.columns+f,m=this.cells[p];if(m)for(var h=0;h<Math.min(a,m.length);h++)o.push(m[h].key)}else for(var g in this.cells)for(var _=this.cells[g],v=0;v<Math.min(a,_.length);v++)o.push(_[v].key);return o}}])}();function Ao(e){var t=e.graph,n=e.hoveredNode,r=e.highlightedNodes,i=e.displayedNodeLabels,a=new Set,o=new Set(r);n&&o.add(n);var s=l(o),c;try{for(s.s();!(c=s.n()).done;){var u=c.value;t.hasNode(u)&&t.forEachEdge(u,function(e){a.add(e)})}}catch(e){s.e(e)}finally{s.f()}var d=l(i),f;try{var p=function(){var e=f.value;if(o.has(e))return 1;t.forEachEdge(e,function(t,n,r,o){var s=r===e?o:r;i.has(s)&&a.add(t)})};for(d.s();!(f=d.n()).done;)if(p())continue}catch(e){d.e(e)}finally{d.f()}return Array.from(a)}var jo=150,Mo=50,No={both:0,node:1,label:2},Po={over:0,above:1,below:2,auto:3},Fo=12,Io=3,Lo=function(){function e(t){B(this,e),R(this,`labelGrid`,new ko),R(this,`edgeAnchorGrid`,new ko),R(this,`displayedNodeLabels`,new Set),R(this,`displayedEdgeLabels`,new Set),R(this,`edgeLabelCandidates`,[]),R(this,`renderedNodeLabels`,new Set),R(this,`labelSizeCache`,new Map),R(this,`framePassPoints`,new Float32Array),R(this,`labelsDirty`,!0),this.internals=t}return V(e,[{key:`resetFrame`,value:function(){this.displayedNodeLabels=new Set,this.renderedNodeLabels=new Set,this.labelSizeCache.clear()}},{key:`clearEdgeLabels`,value:function(){this.displayedEdgeLabels=new Set}},{key:`resetLabelGrid`,value:function(){this.labelGrid=new ko,this.edgeAnchorGrid=new ko}},{key:`processWebGLLabels`,value:function(e){for(var t,n=this.internals,r=n.labelProgram,i=n.primitives,a=n.nodeDataCache,o=(i==null||(t=i.nodes)==null||(t=t.label)==null||(t=t.font)==null?void 0:t.family)||`sans-serif`,s=new Map,u=0,d=e.length;u<d;u++){var f=a[e[u]];if(f.visibility!==`hidden`&&f.label){var p=f.labelFont||o,m=s.get(p);m?m.push(f.label):s.set(p,[f.label])}}var h=l(s),g;try{for(h.s();!(g=h.n()).done;){var _=c(g.value,2),v=_[0],y=_[1],b=Lt(v),x=b.family,S=b.weight,C=b.style,w=r.registerFont(x,S,C);r.ensureGlyphsReady(y,w)}}catch(e){h.e(e)}finally{h.f()}}},{key:`measureNodeLabel`,value:function(e){var t;if(!e.label)return{width:0,height:0,textHeight:0};var n=this.internals,r=n.labelProgram,i=n.primitives,a=e.labelSize??14,o=e.labelFont||(i==null||(t=i.nodes)==null||(t=t.label)==null||(t=t.font)==null?void 0:t.family)||`sans-serif`,s=`${e.label}|${a}|${o}`;if(this.labelSizeCache.has(s))return this.labelSizeCache.get(s);var c=Lt(o),l=c.family,u=c.weight,d=c.style,f=r.registerFont(l,u,d),p=r.measureLabel(e.label,a,f);return this.labelSizeCache.set(s,p),p}},{key:`nodeLabelBox`,value:function(e,t){var n;if(e.visibility===`hidden`||e.labelVisibility===`hidden`)return null;var r=this.measureNodeLabel(e),i=r.width,a=r.height,o=r.textHeight;if(!i)return null;var s=t+(((n=this.internals.primitives)==null||(n=n.nodes)==null||(n=n.label)==null?void 0:n.margin)??5),c=e.labelBackgroundColor?e.labelBackgroundPadding??3:0,l=i/2,u=a/2,d=l+c,f=u+c,p=o/2,m=0,g=0;switch(e.labelPosition??`right`){case`left`:m=-(s+l);break;case`above`:g=-(s+p);break;case`below`:g=s+p;break;case`over`:break;default:m=s+l}var _=e.labelAngle??0,v=h({x:m,y:g},_),y=v.x,b=v.y,x=Math.abs(Math.cos(_)),S=Math.abs(Math.sin(_)),C=x*d+S*f,w=S*d+x*f;return{minX:y-C,maxX:y+C,minY:b-w,maxY:b+w}}},{key:`computeDisplayedNodeLabels`,value:function(){var e=this.internals.getCameraState(),t=this.internals.getDimensions(),n=t.width,r=t.height,i=this.internals.viewportToFramedGraph({x:-jo,y:-Mo}),a=this.internals.viewportToFramedGraph({x:n+jo,y:-Mo}),o=this.internals.viewportToFramedGraph({x:-jo,y:r+Mo}),s=this.internals.viewportToFramedGraph({x:n+jo,y:r+Mo}),c=Math.min(i.x,a.x,o.x,s.x),l=Math.max(i.x,a.x,o.x,s.x),u=Math.min(i.y,a.y,o.y,s.y),d=Math.max(i.y,a.y,o.y,s.y),f=v({x:.5,y:.5,ratio:1,angle:0},{width:n,height:r},this.internals.getGraphDimensions(),this.internals.getStagePadding()),p=function(e){var t=g(f,e);return{x:(1+t.x)*n/2,y:(1-t.y)*r/2}},m=p({x:c,y:u}),h=p({x:l,y:u}),_=p({x:c,y:d}),y=p({x:l,y:d}),b={x1:Math.min(m.x,h.x,_.x,y.x),y1:Math.min(m.y,h.y,_.y,y.y),x2:Math.max(m.x,h.x,_.x,y.x),y2:Math.max(m.y,h.y,_.y,y.y)},x=this.internals,S=x.settings,C=x.nodeDataCache,w=x.nodesWithForcedLabels,T=this.labelGrid.getLabelsToDisplay(e.ratio,S.labelDensity,b);vt(T,w);for(var E=0,D=T.length;E<D;E++){var O=T[E],k=C[O];if(!this.displayedNodeLabels.has(O)&&k.visibility!==`hidden`&&k.labelVisibility!==`hidden`&&k.label&&!(k.x<c||k.x>l||k.y<u||k.y>d)){var A=this.internals.framedGraphToViewport(k),j=A.x,M=A.y,N=this.internals.scaleSize(k.size);!Tt(k)&&N<S.labelRenderedSizeThreshold||j<-jo-N||j>n+jo+N||M<-Mo-N||M>r+Mo+N||this.displayedNodeLabels.add(O)}}}},{key:`buildFramePassPoints`,value:function(){var e=this.internals,t=e.nodeDataCache,n=e.nodeDataTexture;if(!n)return{data:this.framePassPoints,count:0};var r=this.displayedNodeLabels.size*3;this.framePassPoints.length<r&&(this.framePassPoints=new Float32Array(r));var i=this.framePassPoints,a=0,o=l(this.displayedNodeLabels),s;try{for(o.s();!(s=o.n()).done;){var c=s.value,u=t[c];if(u){var d=n.getIndex(c);d<0||(i[a*3]=d,i[a*3+1]=cn[u.labelPosition||nt.labelPosition]??0,i[a*3+2]=u.labelAngle??0,a++)}}}catch(e){o.e(e)}finally{o.f()}return{data:i,count:a}}},{key:`renderWebGLLabels`,value:function(e,t){var n=this.internals,r=n.nodeDataCache,i=n.labelProgram,a=n.primitives,o=n.nodeDataTexture,s=[],c=l(this.displayedNodeLabels),u;try{for(c.s();!(u=c.n()).done;){var d=u.value;if(!this.renderedNodeLabels.has(d)){var f=r[d];t&&f.labelDepth!==t||(this.renderedNodeLabels.add(d),s.push(d))}}}catch(e){c.e(e)}finally{c.f()}if(s.length!==0){if(this.labelsDirty){for(var p,m,h=0,g=0,_=s.length;g<_;g++){var v=r[s[g]];h+=v.label.length}i.reallocate(h);for(var y=14,b=(a==null||(p=a.nodes)==null||(p=p.label)==null?void 0:p.margin)??5,x=nt.labelPosition,S=(a==null||(m=a.nodes)==null||(m=m.label)==null||(m=m.font)==null?void 0:m.family)||`sans-serif`,C=new Map,w=0,T=0,E=s.length;T<E;T++){var D=s[T],O=r[D],k=O.labelFont||S,A=C.get(k);if(A===void 0){var j=Lt(k),M=j.family,N=j.weight,P=j.style;A=i.registerFont(M,N,P),C.set(k,A)}var F={text:O.label,x:O.x,y:O.y,size:O.labelSize??y,color:O.labelColor,nodeSize:O.size,margin:b,position:O.labelPosition??x,hidden:!1,forceLabel:Tt(O),type:`default`,zIndex:O.zIndex??0,parentType:`node`,parentKey:D,fontKey:A,labelAngle:O.labelAngle??0,nodeIndex:o.getIndex(D)},I=i.processLabel(D,w,F);w+=I}i.invalidateBuffers()}i.render(e)}}},{key:`renderBackdrops`,value:function(e,t){var n=this.internals,r=n.backdropProgram,i=n.nodeDataCache,a=n.nodesWithBackdrop,o=n.attachmentManager,s=n.pixelRatio,c=n.nodeDataTexture,u=[],d=l(a),f;try{for(d.s();!(f=d.n()).done;){var p=f.value,m=i[p];if(m&&m.visibility!==`hidden`&&!(t&&m.depth!==t)){var h=c?.getIndex(p)??-1;h<0||u.push({key:p,nodeIndex:h})}}}catch(e){d.e(e)}finally{d.f()}if(u.length!==0){r.reallocate(u.length);for(var g=0;g<u.length;g++){var _=u[g],v=_.key,y=_.nodeIndex,b=i[v],x=this.displayedNodeLabels.has(v),S=x?this.measureNodeLabel(b):{width:0,height:0,textHeight:0},C=S.textHeight,w=S.width,T=S.height,E=0,D=0;if(x&&b.labelAttachment&&o){var O=o.getEntry(v,b.labelAttachment);if(O){var k=b.labelAttachmentPlacement||`below`;if(k===`below`||k===`above`){var A=O.height/s;T+=A+2,w=Math.max(w,O.width/s),D=k===`below`?(A+2)/2:-(A+2)/2}else{var j=O.width/s;w+=j+2,T=Math.max(T,O.height/s),E=k===`right`?(j+2)/2:-(j+2)/2}}}var M=b.backdropColor?N(b.backdropColor):[255,255,255,255],P=b.backdropShadowColor?N(b.backdropShadowColor):[0,0,0,128],F=M.map(function(e){return e/255}),I=P.map(function(e){return e/255}),ee=b.backdropShadowBlur??12,te=b.backdropPadding??6,L=(b.backdropBorderColor?N(b.backdropBorderColor):[0,0,0,0]).map(function(e){return e/255}),R=b.backdropBorderWidth??0,ne=b.backdropCornerRadius??0,z=b.backdropLabelPadding??-1,B=z<0?te:z,re=No[b.backdropArea??`both`]??0,V={key:v,nodeIndex:y,label:b.label,labelWidth:w,labelHeight:T,textHeight:C,type:`default`,position:b.labelPosition||nt.labelPosition,labelAngle:b.labelAngle??0,backdropColor:F,backdropShadowColor:I,backdropShadowBlur:ee,backdropPadding:te,backdropBorderColor:L,backdropBorderWidth:R,backdropCornerRadius:ne,backdropLabelPadding:B,backdropArea:re,labelBoxOffset:[E,D]};r.processBackdrop(g,V)}r.invalidateBuffers(),r.render(e)}}},{key:`renderLabelBackgrounds`,value:function(e,t){var n=this.internals,r=n.labelBackgroundProgram,i=n.nodeDataCache,a=n.nodeDataTexture,o=$.nodeLabel.writesPickingThisFrame(this.internals),s=[],c=l(this.displayedNodeLabels),u;try{for(c.s();!(u=c.n()).done;){var d=u.value,f=i[d];f&&f.visibility!==`hidden`&&(t&&f.labelDepth!==t||(o||f.labelBackgroundColor)&&s.push(d))}}catch(e){c.e(e)}finally{c.f()}if(s.length!==0){r.reallocate(s.length);for(var p=0;p<s.length;p++){var m=s[p],h=i[m],g=a?.getIndex(m)??-1;if(!(g<0)){var _=this.measureNodeLabel(h),v=_.width,y=_.height,b=_.textHeight,x=Ya(this.internals.pickingState,`nodeLabel`,m)||Ya(this.internals.pickingState,`node`,m),S=h.labelBackgroundColor?M(h.labelBackgroundColor):M(`transparent`),C={nodeIndex:g,id:P(x),color:S,labelWidth:v,labelHeight:y,textHeight:b,positionMode:cn[h.labelPosition||nt.labelPosition]??0,labelAngle:h.labelAngle??0,padding:h.labelBackgroundPadding??3};r.processLabelBackground(p,C)}}r.invalidateBuffers(),r.render(e)}}},{key:`cacheAttachments`,value:function(e){var t=this.internals,n=t.attachmentManager,r=t.pixelRatio,i=t.nodeDataCache,a=t.nodesWithBackdrop,o=t.graph;if(n){var s=l(a),c;try{for(s.s();!(c=s.n()).done;){var u=c.value;if(this.displayedNodeLabels.has(u)){var d=i[u];if(d&&d.visibility!==`hidden`&&!(e&&d.depth!==e)&&d.labelAttachment){var f=o.getNodeAttributes(u),p=this.measureNodeLabel(d),m={node:u,attributes:f,pixelRatio:r,labelWidth:p.width,labelHeight:p.height};n.renderAttachment(u,d.labelAttachment,m)}}}}catch(e){s.e(e)}finally{s.f()}n.regenerateAtlas()}}},{key:`renderAttachments`,value:function(e,t){var n=this.internals,r=n.attachmentManager,i=n.attachmentProgram,a=n.nodeDataCache,o=n.nodesWithBackdrop,s=n.pixelRatio,c=n.nodeDataTexture;if(r&&i){var u=0;i.reallocateAttachments(o.size);var d=l(o),f;try{for(d.s();!(f=d.n()).done;){var p=f.value;if(this.displayedNodeLabels.has(p)){var m=a[p];if(m&&m.visibility!==`hidden`&&!(t&&m.labelDepth!==t)&&m.labelAttachment){var h=r.getEntry(p,m.labelAttachment);if(h){var g=c?.getIndex(p)??-1;if(!(g<0)){var _=this.measureNodeLabel(m),v=_.width,y=_.height,b=_.textHeight,x=zn[m.labelAttachmentPlacement||`below`]??0;i.processAttachment(u,{nodeIndex:g,atlasX:h.x,atlasY:h.y,atlasW:h.width,atlasH:h.height,attachWidth:h.width/s,attachHeight:h.height/s,positionMode:cn[m.labelPosition||nt.labelPosition]??0,attachmentPlacement:x,labelWidth:v,labelHeight:y,textHeight:b,labelAngle:m.labelAngle??0}),u++}}}}}}catch(e){d.e(e)}finally{d.f()}u!==0&&(i.reallocateAttachments(u),r.bindTexture(7),i.invalidateBuffers(),i.render(e))}}},{key:`computeDisplayedEdgeLabels`,value:function(){var e=this.internals,t=e.graph,n=e.stateManager,r=e.settings,i=e.edgesWithForcedLabels,a=n.getHighlightedNodes(),o=r.edgeLabelAnchors===`allNodes`?new Set(this.edgeAnchorGrid.getLabelsToDisplay(this.internals.getCameraState().ratio,r.labelDensity)):this.displayedNodeLabels,s=n.hovered,c=Ao({graph:t,hoveredNode:s?.kind===`node`?s.key:null,displayedNodeLabels:o,highlightedNodes:a});vt(c,i),this.edgeLabelCandidates=c,this.displayedEdgeLabels=new Set}},{key:`filterEdgeLabelsForDepth`,value:function(e){for(var t=this.internals,n=t.graph,r=t.nodeDataCache,i=t.edgeDataCache,a=[],o=new Set,s=0,c=this.edgeLabelCandidates.length;s<c;s++){var l=this.edgeLabelCandidates[s];if(!o.has(l)){o.add(l);var u=n.extremities(l),d=r[u[0]],f=r[u[1]],p=i[l];p&&d&&f&&p.visibility!==`hidden`&&p.labelVisibility!==`hidden`&&d.visibility!==`hidden`&&f.visibility!==`hidden`&&(e&&p.labelDepth!==e||p.label&&a.push(l))}}return a}},{key:`renderEdgeLabels`,value:function(e,t){var n=this.internals,r=n.graph,i=n.nodeDataCache,a=n.edgeDataCache,o=n.primitives,s=n.edgeLabelProgram,c=n.nodeDataTexture,u=n.edgeDataTexture;if(s){var d=this.filterEdgeLabelsForDepth(t),f=l(d),p;try{for(f.s();!(p=f.n()).done;){var m=p.value;this.displayedEdgeLabels.add(m)}}catch(e){f.e(e)}finally{f.f()}if(d.length!==0){if(this.labelsDirty){var h,g=0,_=l(d),v;try{for(_.s();!(v=_.n()).done;){var y=v.value;g+=a[y].label.length}}catch(e){_.e(e)}finally{_.f()}s.reallocate(g);var b=(o==null||(h=o.edges)==null||(h=h.label)==null?void 0:h.margin)??5,x=`over`,S=0,C=l(d),w;try{for(C.s();!(w=C.n()).done;){var T=w.value,E=r.extremities(T),D=E[0],O=E[1],k=i[D],A=i[O],j=a[T],M=c.getIndex(D),N=c.getIndex(O),P=u.getIndex(T),F={text:j.label,x:(k.x+A.x)/2,y:(k.y+A.y)/2,size:Fo,color:j.labelColor,nodeSize:0,nodeIndex:-1,margin:b,position:j.labelPosition??x,hidden:!1,forceLabel:Tt(j),type:`default`,zIndex:j.zIndex??0,parentType:`edge`,parentKey:T,fontKey:``,labelAngle:0,sourceX:k.x,sourceY:k.y,targetX:A.x,targetY:A.y,sourceSize:k.size,targetSize:A.size,sourceShape:k.shape||`circle`,targetShape:A.shape||`circle`,edgeSize:j.size,offset:0,edgeAttributes:j,sourceNodeIndex:M,targetNodeIndex:N,edgeIndex:P},I=s.processEdgeLabel(T,S,F);S+=I}}catch(e){C.e(e)}finally{C.f()}s.invalidateBuffers()}s.render(e)}}}},{key:`renderEdgeLabelBackgrounds`,value:function(e,t){var n,r=this.internals,i=r.edgeLabelBackgroundProgram,a=r.edgeLabelProgram,o=r.edgeDataCache,s=r.primitives,c=r.edgeDataTexture;if(c&&a&&i){var u=$.edgeLabel.writesPickingThisFrame(this.internals),d=(s==null||(n=s.edges)==null||(n=n.label)==null?void 0:n.margin)??5,f=`over`,p=this.filterEdgeLabelsForDepth(t),m=[],h=l(p),g;try{for(h.s();!(g=h.n()).done;){var _=g.value;(u||o[_].labelBackgroundColor)&&m.push(_)}}catch(e){h.e(e)}finally{h.f()}if(m.length!==0){i.reallocate(m.length);for(var v=0;v<m.length;v++){var y=m[v],b=o[y],x=b.label,S=a.measureLabelAtlasWidth(x),C=b.labelPosition??f,w=typeof C==`string`?Po[C]??0:0,T=Ya(this.internals.pickingState,`edgeLabel`,y)||Ya(this.internals.pickingState,`edge`,y),E=b.labelBackgroundColor?M(b.labelBackgroundColor):M(`transparent`),D={edgeIndex:c.getIndex(y),baseFontSize:Fo,totalTextWidth:S,positionMode:w,margin:d,padding:b.labelBackgroundPadding??Io,color:E,id:P(T),edgeAttributes:b};i.processEdgeLabelBackground(v,y,D)}i.invalidateBuffers(),i.render(e)}}}}])}(),Ro=function(){function e(t,n,r,i){B(this,e),R(this,`nodeStates`,new Map),R(this,`edgeStates`,new Map),R(this,`hovered`,null),R(this,`dirtyNodes`,new Set),R(this,`dirtyEdges`,new Set),R(this,`graphStateChanged`,!1),R(this,`graphStateFlagsDirty`,!1),this.scheduleRefresh=t,this.customNodeStateDefaults=n,this.customEdgeStateDefaults=r,this.customGraphStateDefaults=i,this.graphState=Be(i)}return V(e,[{key:`getNodeState`,value:function(e){e=``+e;var t=this.nodeStates.get(e);return t||(t=Re(this.customNodeStateDefaults),this.nodeStates.set(e,t)),t}},{key:`getEdgeState`,value:function(e){e=``+e;var t=this.edgeStates.get(e);return t||(t=ze(this.customEdgeStateDefaults),this.edgeStates.set(e,t)),t}},{key:`getGraphState`,value:function(){return this.flushGraphStateFlags(),this.graphState}},{key:`getHighlightedNodes`,value:function(){var e=new Set,t=l(this.nodeStates),n;try{for(t.s();!(n=t.n()).done;){var r=c(n.value,2),i=r[0];r[1].isHighlighted&&e.add(i)}}catch(e){t.e(e)}finally{t.f()}return e}},{key:`setNodeState`,value:function(e,t){e=``+e;var n=this.getNodeState(e);if(bt(n,t)){var r=z(z({},n),t);this.nodeStates.set(e,r),this.dirtyNodes.add(e),this.updateHoveredNodeTracking(e,n,r),this.graphStateFlagsDirty=!0,this.scheduleRefresh()}}},{key:`setEdgeState`,value:function(e,t){e=``+e;var n=this.getEdgeState(e);if(bt(n,t)){var r=z(z({},n),t);this.edgeStates.set(e,r),this.dirtyEdges.add(e),this.updateHoveredEdgeTracking(e,n,r),this.graphStateFlagsDirty=!0,this.scheduleRefresh()}}},{key:`setGraphState`,value:function(e){if(bt(this.graphState,e)){var t=z(z({},this.graphState),e);t.isIdle=!t.isPanning&&!t.isZooming&&!t.isDragging,this.graphState=t,this.graphStateChanged=!0,this.scheduleRefresh()}}},{key:`setNodesState`,value:function(e,t){var n=!1,r=l(e),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;a=``+a;var o=this.getNodeState(a);if(bt(o,t)){var s=z(z({},o),t);this.nodeStates.set(a,s),this.dirtyNodes.add(a),this.updateHoveredNodeTracking(a,o,s),n=!0}}}catch(e){r.e(e)}finally{r.f()}n&&(this.graphStateFlagsDirty=!0,this.scheduleRefresh())}},{key:`setEdgesState`,value:function(e,t){var n=!1,r=l(e),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;a=``+a;var o=this.getEdgeState(a);if(bt(o,t)){var s=z(z({},o),t);this.edgeStates.set(a,s),this.dirtyEdges.add(a),this.updateHoveredEdgeTracking(a,o,s),n=!0}}}catch(e){r.e(e)}finally{r.f()}n&&(this.graphStateFlagsDirty=!0,this.scheduleRefresh())}},{key:`removeNode`,value:function(e){this.nodeStates.delete(e),this.dirtyNodes.delete(e),this.clearHoveredFor(`node`,e)}},{key:`removeEdge`,value:function(e){this.edgeStates.delete(e),this.dirtyEdges.delete(e),this.clearHoveredFor(`edge`,e)}},{key:`pruneNodes`,value:function(e){var t=l(this.nodeStates.keys()),n;try{for(t.s();!(n=t.n()).done;){var r=n.value;e(r)||this.removeNode(r)}}catch(e){t.e(e)}finally{t.f()}}},{key:`pruneEdges`,value:function(e){var t=l(this.edgeStates.keys()),n;try{for(t.s();!(n=t.n()).done;){var r=n.value;e(r)||this.removeEdge(r)}}catch(e){t.e(e)}finally{t.f()}}},{key:`clearNodes`,value:function(){this.nodeStates.clear(),this.dirtyNodes.clear(),this.clearHoveredForKinds(oo(`node`))}},{key:`clearEdges`,value:function(){this.edgeStates.clear(),this.dirtyEdges.clear(),this.clearHoveredForKinds(oo(`edge`))}},{key:`resetGraphState`,value:function(){this.graphState=Be(this.customGraphStateDefaults),this.graphStateChanged=!1,this.graphStateFlagsDirty=!1}},{key:`clearDirtyTracking`,value:function(){this.dirtyNodes.clear(),this.dirtyEdges.clear(),this.graphStateChanged=!1}},{key:`setHovered`,value:function(e){this.hovered=e}},{key:`clearHoveredFor`,value:function(e,t){this.hovered&&this.hovered.key===t&&oo(e).includes(this.hovered.kind)&&(this.hovered=null)}},{key:`clearHoveredForKinds`,value:function(e){this.hovered&&e.includes(this.hovered.kind)&&(this.hovered=null)}},{key:`updateGraphStateFromNodes`,value:function(){var e=!1,t=!1,n=!1,r=l(this.nodeStates),i;try{for(r.s();!(i=r.n()).done;){var a=c(i.value,2)[1];if(a.isHovered&&(e=!0),a.isHighlighted&&(t=!0),a.isDragged&&(n=!0),e&&t&&n)break}}catch(e){r.e(e)}finally{r.f()}!e&&this.hovered?.kind===`edge`&&(e=!0);var o=!this.graphState.isPanning&&!this.graphState.isZooming&&!n;(this.graphState.hasHovered!==e||this.graphState.hasHighlighted!==t||this.graphState.isDragging!==n||this.graphState.isIdle!==o)&&(this.graphStateChanged=!0),this.graphState=z(z({},this.graphState),{},{hasHovered:e,hasHighlighted:t,isDragging:n,isIdle:o})}},{key:`updateGraphStateFromEdges`,value:function(){var e=this.hovered?.kind===`node`;if(!e){var t=l(this.edgeStates),n;try{for(t.s();!(n=t.n()).done;)if(c(n.value,2)[1].isHovered){e=!0;break}}catch(e){t.e(e)}finally{t.f()}}this.graphState.hasHovered!==e&&(this.graphStateChanged=!0),this.graphState=z(z({},this.graphState),{},{hasHovered:e})}},{key:`flushGraphStateFlags`,value:function(){this.graphStateFlagsDirty&&=(this.updateGraphStateFromNodes(),this.updateGraphStateFromEdges(),!1)}},{key:`updateHoveredNodeTracking`,value:function(e,t,n){if(t.isHovered!==n.isHovered){if(n.isHovered){if(this.hovered?.kind===`node`&&this.hovered.key!==e){var r=this.hovered.key,i=this.getNodeState(r);this.nodeStates.set(r,z(z({},i),{},{isHovered:!1})),this.dirtyNodes.add(r)}this.hovered={kind:`node`,key:e}}else this.hovered?.kind===`node`&&this.hovered.key===e&&(this.hovered=null)}}},{key:`updateHoveredEdgeTracking`,value:function(e,t,n){if(t.isHovered!==n.isHovered){if(n.isHovered){if(this.hovered?.kind===`edge`&&this.hovered.key!==e){var r=this.hovered.key,i=this.getEdgeState(r);this.edgeStates.set(r,z(z({},i),{},{isHovered:!1})),this.dirtyEdges.add(r)}this.hovered={kind:`edge`,key:e}}else this.hovered?.kind===`edge`&&this.hovered.key===e&&(this.hovered=null)}}}])}(),zo=1,Bo=2,Vo=3,Ho=4,Uo=function(e){function t(e,n){var r,i,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};B(this,t),i=H(this,t),R(i,`nodeReducer`,null),R(i,`edgeReducer`,null),R(i,`stageCanvas`,null),R(i,`mouseLayer`,null),R(i,`gestureHint`,null),R(i,`extraElements`,{}),R(i,`webGLContext`,null),R(i,`pickingFrameBuffer`,null),R(i,`pickingTexture`,null),R(i,`pickingDepthBuffer`,null),R(i,`activeListeners`,{}),R(i,`nodeVariableEntries`,[]),R(i,`edgeVariableEntries`,[]),R(i,`edgePathsByName`,new Map),R(i,`nodeProgramIndex`,{}),R(i,`edgeProgramIndex`,{}),R(i,`edgeTextureIndexCache`,{}),R(i,`nodeGraphCoords`,{}),R(i,`nodeExtent`,{x:[0,1],y:[0,1]}),R(i,`matrix`,u()),R(i,`invMatrix`,u()),R(i,`correctionRatio`,1),R(i,`frameId`,0),R(i,`customBBox`,null),R(i,`gpuTimerExt`,void 0),R(i,`activeGpuTimerQuery`,null),R(i,`pendingGpuTimerQueries`,[]),R(i,`normalizationFunction`,jt({x:[0,1],y:[0,1]})),R(i,`graphToViewportRatio`,1),R(i,`pickingState`,Ja()),R(i,`prevNodeVisibilities`,{}),R(i,`width`,0),R(i,`height`,0),R(i,`autoRescaleFrozen`,!1),R(i,`stylesDeclaration`,null),R(i,`resolvedStageStyle`,{}),R(i,`renderFrame`,null),R(i,`contextLost`,!1),R(i,`pendingProcess`,`full`),R(i,`needToRefreshState`,!1),R(i,`checkEdgesEventsFrame`,null),R(i,`edgeStyleAnalysis`,{dependency:`static`,xAttribute:null,yAttribute:null}),R(i,`depthLayers`,W(Ee)),R(i,`customLayerPrograms`,new Map),R(i,`nodeShapeSlug`,null),R(i,`sdfAtlas`,null),R(i,`depthRanges`,{nodes:{},edges:{}}),R(i,`nodeBaseDepth`,{}),R(i,`edgeBaseDepth`,{});var o=a.primitives,s=a.styles,c=a.settings,l=c===void 0?{}:c,d=a.nodeReducer,f=a.edgeReducer,p=a.customNodeState,m=a.customEdgeState,h=a.customGraphState;i.stateManager=new Ro(function(){return i.scheduleStateRefresh()},p,m,h);var g=o??_t;i.stylesDeclaration=s?{nodes:s.nodes??We.nodes,edges:s.edges??We.edges,stage:s.stage}:We,i.nodeReducer=d??null,i.edgeReducer=f??null;var _=tt(i.stylesDeclaration.nodes);i.nodeReducer&&(_.dependency=`graph-state`),i.edgeStyleAnalysis=tt(i.stylesDeclaration.edges),i.edgeReducer&&(i.edgeStyleAnalysis.dependency=`graph-state`),i.stylesDeclaration.stage&&(i.resolvedStageStyle=mt(i.stylesDeclaration.stage,i.stateManager.graphState));var v=Pt(l);if(Nt(v),v.enableNodeDrag){var y=_.xAttribute,b=_.yAttribute;if((!y||!b)&&!v.dragPositionToAttributes)throw Error('Sigma: `enableNodeDrag` is true but position attribute names could not be inferred from styles. Either use attribute bindings for x/y in your node styles (e.g. `x: { attribute: "x" }`), or provide a `dragPositionToAttributes` setting.')}if(At(e),!(n instanceof HTMLElement))throw Error(`Sigma: container should be an html element.`);i.container=n,i.edgeGroups=new Ua(e,function(e,t){for(var n=0;n<e.length;n++){var r=i.stateManager.getEdgeState(e[n]);r.parallelIndex=n,r.parallelCount=t}});var x=new Va(e,i.viewportToGraph.bind(i),i.setNodesState.bind(i),function(e,t){return i.emit(e,t)});if(i.depthLayers=g.depthLayers??W(Ee),!(s!=null&&s.nodes)&&!we.every(function(e){return i.depthLayers.includes(e)}))throw Error(`Sigma: depthLayers must include ${we.join(`, `)} for the built-in node styles.`);if(!(s!=null&&s.edges)&&!Te.every(function(e){return i.depthLayers.includes(e)}))throw Error(`Sigma: depthLayers must include ${Te.join(`, `)} for the built-in edge styles.`);i.itemBuckets={nodes:new ma(i.depthLayers),edges:new ma(i.depthLayers)},i.initWebGLContext(),i.mouseLayer=Rt(`div`,{position:`absolute`,touchAction:`none`,userSelect:`none`},{class:`sigma-mouse`}),i.container.appendChild(i.mouseLayer),i.resolvedStageStyle.background&&(i.container.style.backgroundColor=i.resolvedStageStyle.background),i.resolvedStageStyle.cursor&&(i.container.style.cursor=i.resolvedStageStyle.cursor);var S=new ha(i.webGLContext),C=new ya(i.webGLContext,{channels:1}),w=new ba(i.webGLContext),T=new ya(i.webGLContext,{channels:4}),E=i.webGLContext,D=new Do({gl:E,getFrameBuffer:function(){return i.pickingFrameBuffer},getPixelRatio:function(){return i.internals.pixelRatio},getDownSizingRatio:function(){return i.internals.settings.pickingDownSizingRatio},isRenderPending:function(){return i.renderFrame!==null},onIndex:function(e,t){return uo(i.internals,i.pickingState.lookup[e]??null,t)}}),O=i.initPrograms(g,v),k=g==null||(r=g.nodes)==null?void 0:r.labelAttachments,A=null;return k&&Object.keys(k).length>0&&(A=new pa(E,k,function(){return i.scheduleRender()})),i.internals=z(z({nodeDataCache:{},edgeDataCache:{},nodesWithForcedLabels:new Set,nodesWithBackdrop:new Set,edgesWithForcedLabels:new Set,settings:v,primitives:g,pixelRatio:zt(),graph:e,stateManager:i.stateManager,dragManager:x,hoverResolver:D,nodeStyleAnalysis:_,pickingState:i.pickingState},O),{},{attachmentManager:A,nodeDataTexture:S,nodeFrameTexture:C,edgeDataTexture:w,edgeFrameTexture:T,getDimensions:function(){return i.getDimensions()},getGraphDimensions:function(){return i.getGraphDimensions()},getStagePadding:function(){return i.getStagePadding()},getCameraState:function(){return i.camera.getState()},getHitAtPosition:function(e){return i.getHitAtPosition(e)},setNodeState:function(e,t){return i.setNodeState(e,t)},setEdgeState:function(e,t){return i.setEdgeState(e,t)},updateContainerCursor:function(){return i.updateContainerCursor()},scheduleRefresh:function(){return i.scheduleRefresh()},viewportToFramedGraph:function(e){return i.viewportToFramedGraph(e)},viewportToGraph:function(e){return i.viewportToGraph(e)},framedGraphToViewport:function(e){return i.framedGraphToViewport(e)},scaleSize:function(e){return i.scaleSize(e)},emit:function(e,t){return i.emit(e,t)}}),i.labelRenderer=new Lo(i.internals),i.resize(),i.initializeWebGLLabels(),i.camera=new Da,i.bindCameraHandlers(),i.mouseCaptor=new Ra(i.mouseLayer,i),i.mouseCaptor.setSettings(i.internals.settings),i.touchCaptor=new Ba(i.mouseLayer,i),i.touchCaptor.setSettings(i.internals.settings),i.bindEventHandlers(),i.bindGraphHandlers(),i.handleSettingsUpdate(),i.refresh(),i}return U(t,e),V(t,[{key:`initializeWebGLLabels`,value:function(){this.sdfAtlas=new mr,this.sdfAtlas.registerFont({family:`sans-serif`,weight:`normal`,style:`normal`})}},{key:`resetWebGLTexture`,value:function(){var e=this.webGLContext;if(!this.pickingFrameBuffer)return this;var t=Math.ceil(this.width*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio),n=Math.ceil(this.height*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio);e.bindFramebuffer(e.FRAMEBUFFER,this.pickingFrameBuffer),this.pickingTexture&&e.deleteTexture(this.pickingTexture);var r=e.createTexture();r&&(e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,n,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),this.pickingTexture=r),this.pickingDepthBuffer&&e.deleteRenderbuffer(this.pickingDepthBuffer);var i=e.createRenderbuffer();return i&&(e.bindRenderbuffer(e.RENDERBUFFER,i),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,t,n),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,i),this.pickingDepthBuffer=i),e.bindFramebuffer(e.FRAMEBUFFER,null),this}},{key:`bindCameraHandlers`,value:function(){var e=this;return this.activeListeners.camera=function(){e.refreshMatrices(),e.labelRenderer.labelsDirty=!0,e.scheduleRender()},this.activeListeners.cameraAnimationStart=function(t){var n=t.from,r=t.to;n.ratio!==r.ratio&&e.stateManager.setGraphState({isZooming:!0})},this.activeListeners.cameraAnimationEnd=function(){e.stateManager.setGraphState({isZooming:!1})},this.camera.on(`updated`,this.activeListeners.camera),this.camera.on(`animationStart`,this.activeListeners.cameraAnimationStart),this.camera.on(`animationEnd`,this.activeListeners.cameraAnimationEnd),this}},{key:`unbindCameraHandlers`,value:function(){return this.camera.removeListener(`updated`,this.activeListeners.camera),this.camera.removeListener(`animationStart`,this.activeListeners.cameraAnimationStart),this.camera.removeListener(`animationEnd`,this.activeListeners.cameraAnimationEnd),this}},{key:`getHitAtPosition`,value:function(e){if(this.contextLost)return null;var t=this.webGLContext;t.bindFramebuffer(t.FRAMEBUFFER,this.pickingFrameBuffer);var n=I(t,this.pickingFrameBuffer,e.x,e.y,this.internals.pixelRatio,this.internals.settings.pickingDownSizingRatio),r=F.apply(void 0,W(n));return this.pickingState.lookup[r]??null}},{key:`bindEventHandlers`,value:function(){return fo(this.internals,this.mouseCaptor,this.touchCaptor,this.activeListeners),this}},{key:`bindGraphHandlers`,value:function(){return po({graph:this.internals.graph,edgeGroups:this.edgeGroups,addNode:this.addNode.bind(this),updateNode:this.updateNode.bind(this),removeNode:this.removeNode.bind(this),addEdge:this.addEdge.bind(this),updateEdge:this.updateEdge.bind(this),removeEdge:this.removeEdge.bind(this),clearEdgeState:this.clearEdgeState.bind(this),clearNodeState:this.clearNodeState.bind(this),clearEdgeIndices:this.clearEdgeIndices.bind(this),clearNodeIndices:this.clearNodeIndices.bind(this),refresh:this.refresh.bind(this)},this.activeListeners),this}},{key:`unbindGraphHandlers`,value:function(){mo(this.internals.graph,this.activeListeners)}},{key:`getNodeShapeId`,value:function(e){return this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&e.shape&&e.shape in this.internals.nodeShapeMap?this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[e.shape]]:en(e.shape||`circle`)}},{key:`processNodes`,value:function(){var e=this,t=this.internals.graph,n=this.internals.settings,r=this.getDimensions(),i=n.autoRescale,a=n.autoRescaleContent,o=this.nodeExtent;if(i===!1){var s=r.width,c=r.height;o={x:[-s/2,s/2],y:[-c/2,c/2]}}else i===`once`&&this.autoRescaleFrozen||(o=this.computeNodeExtent(),a!==`positions`&&!this.customBBox&&(o=vo({extent:o,coords:this.nodeGraphCoords,nodeData:this.internals.nodeDataCache,dimensions:r,stagePadding:this.getStagePadding(),zoomToSizeRatioFunction:n.zoomToSizeRatioFunction,itemSizesReference:n.itemSizesReference,fitLabels:a===`labels`,nodeLabelBox:function(t,n){return e.labelRenderer.nodeLabelBox(t,n)}})),i===`once`&&(this.autoRescaleFrozen=!0));this.nodeExtent=o,this.normalizationFunction=jt(this.customBBox||this.nodeExtent);var u=v(new Da().getState(),r,this.getGraphDimensions(),this.getStagePadding());this.labelRenderer.labelGrid.resizeAndClear(r,n.labelGridCellSize),this.labelRenderer.edgeAnchorGrid.resizeAndClear(r,n.labelGridCellSize);var d=n.renderEdgeLabels&&n.edgeLabelAnchors===`allNodes`,f=!1;Xa(this.pickingState,`node`);for(var p=t.nodes(),m=0,h=p.length;m<h;m++){var g=p[m],_=this.internals.nodeDataCache[g],y=this.nodeGraphCoords[g];_.x=y.x,_.y=y.y,this.normalizationFunction.applyTo(_),_.visibility!==this.prevNodeVisibilities[g]&&(f=!0),typeof _.label==`string`&&_.visibility!==`hidden`&&_.labelVisibility!==`hidden`&&this.labelRenderer.labelGrid.add(g,_.size,this.framedGraphToViewport(_,{matrix:u})),d&&_.visibility!==`hidden`&&this.labelRenderer.edgeAnchorGrid.add(g,_.size,this.framedGraphToViewport(_,{matrix:u}))}this.labelRenderer.labelGrid.organize(),this.labelRenderer.edgeAnchorGrid.organize(),this.nodeProgram.reallocate(p.length);var b=0;this.depthRanges.nodes={},this.nodeBaseDepth={};var x=this.internals.nodeDataCache,S=l(this.depthLayers),C;try{for(S.s();!(C=S.n()).done;){var w=C.value,T=this.itemBuckets.nodes.getSorted(w,function(e){return x[e].zIndex});if(T.length!==0){this.depthRanges.nodes[w]=[{offset:b,count:T.length}];var E=l(T),D;try{for(E.s();!(D=E.n()).done;){var O=D.value;this.nodeBaseDepth[O]=w,this.nodeProgram.allocateNode(O),Za(this.pickingState,`node`,O),this.addNodeToProgram(O,b++)}}catch(e){E.e(e)}finally{E.f()}}}}catch(e){S.e(e)}finally{S.f()}this.nodeProgram.invalidateBuffers();for(var k=0,A=p.length;k<A;k++)this.prevNodeVisibilities[p[k]]=this.internals.nodeDataCache[p[k]].visibility;this.labelRenderer.processWebGLLabels(p);var j=l(this.customLayerPrograms.values()),M;try{for(j.s();!(M=j.n()).done;){var N=M.value.program;N.cacheData&&N.cacheData()}}catch(e){j.e(e)}finally{j.f()}return f}},{key:`processEdges`,value:function(){var e=this.internals.graph.edges();this.edgeProgram.reallocate(e.length);var t=0;Xa(this.pickingState,`edge`),this.depthRanges.edges={},this.edgeBaseDepth={};var n=this.internals.edgeDataCache,r=l(this.depthLayers),i;try{for(r.s();!(i=r.n()).done;){var a=i.value,o=this.itemBuckets.edges.getSorted(a,function(e){return n[e].zIndex});if(o.length!==0){this.depthRanges.edges[a]=[{offset:t,count:o.length}];var s=l(o),c;try{for(s.s();!(c=s.n()).done;){var u=c.value;this.edgeBaseDepth[u]=a,Za(this.pickingState,`edge`,u),this.addEdgeToProgram(u,t++)}}catch(e){s.e(e)}finally{s.f()}}}}catch(e){r.e(e)}finally{r.f()}this.edgeProgram.invalidateBuffers()}},{key:`updateNodeDepthRanges`,value:function(e,t,n){var r=this.nodeProgramIndex[e];r!==void 0&&(Ot(this.depthRanges.nodes,t,r),kt(this.depthRanges.nodes,n,r))}},{key:`updateEdgeDepthRanges`,value:function(e,t,n){var r=this.edgeProgramIndex[e];r!==void 0&&(Ot(this.depthRanges.edges,t,r),kt(this.depthRanges.edges,n,r))}},{key:`handleSettingsUpdate`,value:function(){var e=this,t=this.internals.settings;return this.camera.minRatio=t.minCameraRatio,this.camera.maxRatio=t.maxCameraRatio,this.camera.enabledZooming=t.enableCameraZooming,this.camera.enabledPanning=t.enableCameraPanning,this.camera.enabledRotation=t.enableCameraRotation,t.cameraPanBoundaries?this.camera.constrainState=function(n){return e.cleanCameraState(n,t.cameraPanBoundaries&&G(t.cameraPanBoundaries)===`object`?t.cameraPanBoundaries:{})}:this.camera.constrainState=null,this.camera.setState(this.camera.getState()),this.mouseLayer.style.touchAction=t.gestureTarget===`graph`?`none`:t.gestureTarget===`shared`?`pan-x pan-y`:`auto`,t.gestureTarget!==`shared`&&this.gestureHint&&(this.gestureHint.kill(),this.gestureHint=null),this.mouseCaptor.setSettings(this.internals.settings),this.touchCaptor.setSettings(this.internals.settings),this}},{key:`cleanCameraState`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.tolerance,r=n===void 0?0:n,i=t.boundaries,a=z({},e),o=i||this.nodeExtent,s=c(o.x,2),l=s[0],u=s[1],d=c(o.y,2),f=d[0],p=d[1],m=[this.graphToViewport({x:l,y:f},{cameraState:e}),this.graphToViewport({x:u,y:f},{cameraState:e}),this.graphToViewport({x:l,y:p},{cameraState:e}),this.graphToViewport({x:u,y:p},{cameraState:e})],h=1/0,g=-1/0,_=1/0,v=-1/0;m.forEach(function(e){var t=e.x,n=e.y;h=Math.min(h,t),g=Math.max(g,t),_=Math.min(_,n),v=Math.max(v,n)});var y=g-h,b=v-_,x=this.getDimensions(),S=x.width,C=x.height,w=0,T=0;if(y>=S?g<S-r?w=g-(S-r):h>r&&(w=h-r):g>S+r?w=g-(S+r):h<-r&&(w=h+r),b>=C?v<C-r?T=v-(C-r):_>r&&(T=_-r):v>C+r?T=v-(C+r):_<-r&&(T=_+r),w||T){var E=this.viewportToFramedGraph({x:0,y:0},{cameraState:e}),D=this.viewportToFramedGraph({x:w,y:T},{cameraState:e});w=D.x-E.x,T=D.y-E.y,a.x+=w,a.y+=T}return a}},{key:`refreshMatrices`,value:function(){var e=this.camera.getState(),t=this.getDimensions(),n=this.getGraphDimensions(),r=this.getStagePadding();this.matrix=v(e,t,n,r),this.invMatrix=v(e,t,n,r,!0),this.correctionRatio=y(this.matrix,e,t),this.graphToViewportRatio=this.getGraphToViewportRatio()}},{key:`processData`,value:function(){var e;this.emit(`beforeProcess`),(e=this.internals.attachmentManager)==null||e.clear();var t=z({},this.pickingState.idsByKind),n=this.processNodes();(this.pendingProcess===`full`||n)&&this.processEdges(),Qa(this.pickingState,this.internals),$a(t,this.pickingState.idsByKind)||this.internals.hoverResolver.invalidate(),this.pendingProcess=`none`,this.emit(`afterProcess`)}},{key:`render`,value:function(){var e=this;if(this.contextLost)return this;this.emit(`beforeRender`);var t=function(){return e.internals.hoverResolver.frameRendered(),e.emit(`afterRender`),e};if(this.renderFrame&&=(cancelAnimationFrame(this.renderFrame),null),this.resize(),(this.pendingProcess!==`none`||this.needToRefreshState)&&(this.labelRenderer.labelsDirty=!0),this.pendingProcess!==`none`&&this.processData(),this.needToRefreshState&&this.refreshState(),this.needToRefreshState=!1,this.stateManager.clearDirtyTracking(),this.pendingProcess!==`none`&&this.processData(),this.clear(),this.resetWebGLTexture(),!this.internals.graph.order)return t();var n=this.mouseCaptor,r=this.camera.isAnimating()||n.isMoving||n.draggedEvents||n.currentWheelDirection;if(this.refreshMatrices(),this.frameId++,this.internals.settings.renderEdgeLabels&&!this.internals.edgeLabelProgram){var i=this.createEdgeLabelPrograms(),a=i.labelProgram,o=i.labelBackgroundProgram;this.internals.edgeLabelProgram=a,this.internals.edgeLabelBackgroundProgram=o}var s=this.internals.settings.DEBUG_logRenderStats?this.getDebugPrograms():null;s&&s.forEach(function(e){return e.resetDebugStats()}),this.internals.settings.DEBUG_gpuTimerQueries&&this.beginGpuTimerQuery(),this.internals.nodeFrameTexture.ensureCapacity(this.internals.nodeDataTexture.getCapacity()),this.internals.edgeFrameTexture.ensureCapacity(this.internals.edgeDataTexture.getCapacity());var c=this.getRenderParams(),u=$.edge.writesPickingThisFrame(this.internals)?c:z(z({},c),{},{pickingFrameBuffer:null});this.labelRenderer.resetFrame();var d=this.webGLContext,f=Math.ceil(this.width*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio),p=Math.ceil(this.height*this.internals.pixelRatio/this.internals.settings.pickingDownSizingRatio);if(d.bindFramebuffer(d.FRAMEBUFFER,this.pickingFrameBuffer),d.viewport(0,0,f,p),d.clear(d.COLOR_BUFFER_BIT|d.DEPTH_BUFFER_BIT),d.bindFramebuffer(d.FRAMEBUFFER,null),d.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio),d.clear(d.COLOR_BUFFER_BIT|d.DEPTH_BUFFER_BIT),this.internals.nodeDataTexture.upload(),this.internals.edgeDataTexture.upload(),this.nodeProgram.uploadLayerTexture(),this.edgeProgram.uploadAttributeTexture(),this.emit(`afterTexturesUpload`),this.internals.nodeDataTexture.bind(Vo),this.internals.edgeDataTexture.bind(Ho),this.edgeFramePass.run(c,this.internals.edgeFrameTexture,this.internals.edgeDataTexture.getHighWaterMark(),this.edgeProgram.getAttributeTexture(),this.nodeProgram.getAttributeTexture()),this.internals.edgeFrameTexture.bind(zo),this.internals.settings.renderLabels){this.labelRenderer.computeDisplayedNodeLabels();var m=this.labelRenderer.buildFramePassPoints(),h=m.data,g=m.count;this.nodeFramePass.run(h,g,this.internals.nodeFrameTexture,c,this.nodeProgram.getAttributeTexture()),this.internals.nodeFrameTexture.bind(Bo)}this.internals.settings.renderEdgeLabels&&this.labelRenderer.computeDisplayedEdgeLabels();var _=l(this.customLayerPrograms.values()),v;try{for(_.s();!(v=_.n()).done;){var y=v.value.program;y.preRender&&y.preRender(c)}}catch(e){_.e(e)}finally{_.f()}d.bindFramebuffer(d.FRAMEBUFFER,null),d.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio),d.blendFunc(d.ONE,d.ONE_MINUS_SRC_ALPHA);var b=!this.internals.settings.hideLabelsOnMove||!r,x=l(this.depthLayers),S;try{for(x.s();!(S=x.n()).done;){var C=S.value,w=l(this.customLayerPrograms.values()),T;try{for(w.s();!(T=w.n()).done;){var E=T.value;E.depth===C&&E.program.render(c)}}catch(e){w.e(e)}finally{w.f()}var D=this.depthRanges.edges[C];if(D&&(!this.internals.settings.hideEdgesOnMove||!r)){var O=l(D),k;try{for(O.s();!(k=O.n()).done;){var A=k.value,j=A.offset,M=A.count;M>0&&this.edgeProgram.render(u,j,M)}}catch(e){O.e(e)}finally{O.f()}}this.internals.settings.renderEdgeLabels&&b&&(this.labelRenderer.renderEdgeLabelBackgrounds($.edgeLabel.writesPickingThisFrame(this.internals)?c:z(z({},c),{},{pickingFrameBuffer:null}),C),this.labelRenderer.renderEdgeLabels(c,C)),this.labelRenderer.cacheAttachments(C),this.labelRenderer.renderBackdrops(z(z({},c),{},{pickingFrameBuffer:null}),C);var N=this.depthRanges.nodes[C];if(N){var P=l(N),F;try{for(P.s();!(F=P.n()).done;){var I=F.value,ee=I.offset,te=I.count;te>0&&this.nodeProgram.render(c,ee,te)}}catch(e){P.e(e)}finally{P.f()}}b&&(this.labelRenderer.renderAttachments(z(z({},c),{},{pickingFrameBuffer:null}),C),this.labelRenderer.renderLabelBackgrounds($.nodeLabel.writesPickingThisFrame(this.internals)?c:z(z({},c),{},{pickingFrameBuffer:null}),C),this.internals.settings.renderLabels&&this.labelRenderer.renderWebGLLabels(c,C))}}catch(e){x.e(e)}finally{x.f()}return this.labelRenderer.labelsDirty=!1,this.internals.settings.DEBUG_displayPickingLayer&&(d.bindFramebuffer(d.READ_FRAMEBUFFER,this.pickingFrameBuffer),d.bindFramebuffer(d.DRAW_FRAMEBUFFER,null),d.blitFramebuffer(0,0,f,p,0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio,d.COLOR_BUFFER_BIT,d.NEAREST)),this.internals.settings.DEBUG_gpuTimerQueries&&this.endGpuTimerQuery(),this.pollGpuTimerQueries(),s&&this.logRenderStats(s),t()}},{key:`getDebugPrograms`,value:function(){return[this.nodeProgram,this.edgeProgram,this.internals.labelProgram,this.internals.edgeLabelProgram,this.internals.edgeLabelBackgroundProgram,this.internals.backdropProgram,this.internals.labelBackgroundProgram,this.internals.attachmentProgram].filter(function(e){return e!==null})}},{key:`logRenderStats`,value:function(e){var t={},n=l(e),r;try{for(n.s();!(r=n.n()).done;){var i=r.value;t[i.constructor.name]=z({},i.debugStats)}}catch(e){n.e(e)}finally{n.f()}console.log(`[sigma] DEBUG_logRenderStats: frame #${this.frameId}`),console.table(t)}},{key:`getGpuTimerExtension`,value:function(){return this.gpuTimerExt===void 0&&(this.gpuTimerExt=this.webGLContext.getExtension(`EXT_disjoint_timer_query_webgl2`),this.gpuTimerExt||console.warn(`Sigma: DEBUG_gpuTimerQueries is enabled, but this browser/driver doesn't support EXT_disjoint_timer_query_webgl2.`)),this.gpuTimerExt}},{key:`beginGpuTimerQuery`,value:function(){var e=this.getGpuTimerExtension();if(e){var t=this.webGLContext,n=t.createQuery();n&&(t.beginQuery(e.TIME_ELAPSED_EXT,n),this.activeGpuTimerQuery=n)}}},{key:`endGpuTimerQuery`,value:function(){this.gpuTimerExt&&this.activeGpuTimerQuery&&(this.webGLContext.endQuery(this.gpuTimerExt.TIME_ELAPSED_EXT),this.pendingGpuTimerQueries.push({query:this.activeGpuTimerQuery,frameId:this.frameId}),this.activeGpuTimerQuery=null)}},{key:`pollGpuTimerQueries`,value:function(){if(this.pendingGpuTimerQueries.length!==0){var e=this.webGLContext,t=this.gpuTimerExt;if(!t)this.pendingGpuTimerQueries.forEach(function(t){var n=t.query;return e.deleteQuery(n)}),this.pendingGpuTimerQueries=[];else{var n=e.getParameter(t.GPU_DISJOINT_EXT),r=[],i=l(this.pendingGpuTimerQueries),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;if(!e.getQueryParameter(o.query,e.QUERY_RESULT_AVAILABLE))r.push(o);else{if(!n){var s=e.getQueryParameter(o.query,e.QUERY_RESULT);console.log(`[sigma] DEBUG_gpuTimerQueries: frame #${o.frameId} GPU time = ${(s/1e6).toFixed(2)}ms`)}e.deleteQuery(o.query)}}}catch(e){i.e(e)}finally{i.f()}this.pendingGpuTimerQueries=r}}}},{key:`postEvaluateNode`,value:function(e,t,n){var r=e;r.x===void 0&&(r.x=t.x),r.y===void 0&&(r.y=t.y),e.highlighted=n.isHighlighted;for(var i=0,a=this.nodeVariableEntries.length;i<a;i++){var o=c(this.nodeVariableEntries[i],2),s=o[0],l=o[1];r[s]=r[s]??t[s]??l.default}}},{key:`addNode`,value:function(e){var t=this.internals.graph.getNodeAttributes(e),n=this.stateManager.getNodeState(e),r=this.internals.nodeDataCache[e]||{};if(dt(this.stylesDeclaration.nodes,t,n,this.stateManager.graphState,this.internals.graph,r),this.postEvaluateNode(r,t,n),this.nodeReducer){var i=this.nodeReducer(e,r,t,n,this.stateManager.graphState,this.internals.graph);r=z(z({},r),i)}if(typeof r.x!=`number`||typeof r.y!=`number`)throw Error(`Sigma: could not find a valid position (x, y) for node "${e}". Provide coordinates via node attributes, styles, or a nodeReducer.`);this.internals.nodeShapeMap?r.shape&&r.shape in this.internals.nodeShapeMap||(r.shape=Object.keys(this.internals.nodeShapeMap)[0]):this.nodeShapeSlug&&(r.shape=this.nodeShapeSlug),this.internals.nodeDataCache[e]=r,this.nodeGraphCoords[e]={x:r.x,y:r.y},St(this.internals.nodesWithForcedLabels,e,Tt(r)),St(this.internals.nodesWithBackdrop,e,Et(r)),this.itemBuckets.nodes.set(e,r.depth)}},{key:`updateNode`,value:function(e){this.addNode(e);var t=this.internals.nodeDataCache[e];this.normalizationFunction.applyTo(t)}},{key:`removeNode`,value:function(e){this.itemBuckets.nodes.remove(e),delete this.internals.nodeDataCache[e],delete this.nodeGraphCoords[e],delete this.nodeProgramIndex[e],this.internals.dragManager.removeNode(e),this.stateManager.removeNode(e),this.internals.nodesWithForcedLabels.delete(e),this.internals.nodesWithBackdrop.delete(e)}},{key:`postEvaluateEdge`,value:function(e,t){for(var n=e,r=0,i=this.edgeVariableEntries.length;r<i;r++){var a=c(this.edgeVariableEntries[r],2),o=a[0],s=a[1];n[o]=n[o]??t[o]??s.default}}},{key:`applyEdgeSpread`,value:function(e,t,n){if(!(n.parallelCount<=1)){var r=this.internals.graph.source(e),i=this.internals.graph.target(e),a=r===i,o=a?t.selfLoopPath||t.path:t.parallelPath||t.path,s=o?this.edgePathsByName.get(o):void 0;if(s!=null&&s.spread){var c=t.parallelSpread??.25,l=s.spread.compute(n.parallelIndex,n.parallelCount,c);!a&&this.internals.graph.isDirected(e)&&r>i&&(l=-l),t[s.spread.variable]=l}}}},{key:`addEdge`,value:function(e){var t=this.internals.graph.getEdgeAttributes(e),n=this.stateManager.getEdgeState(e),r={};if(ft(this.stylesDeclaration.edges,t,n,this.stateManager.graphState,this.internals.graph,r),this.postEvaluateEdge(r,t),this.edgeReducer){var i=this.edgeReducer(e,r,t,n,this.stateManager.graphState,this.internals.graph);r=z(z({},r),i)}this.applyEdgeSpread(e,r,n),this.internals.edgeDataCache[e]=r,St(this.internals.edgesWithForcedLabels,e,Tt(r)),this.itemBuckets.edges.set(e,r.depth)}},{key:`updateEdge`,value:function(e){this.addEdge(e)}},{key:`removeEdge`,value:function(e){this.itemBuckets.edges.remove(e),delete this.internals.edgeDataCache[e],delete this.edgeProgramIndex[e],delete this.edgeTextureIndexCache[e],this.internals.edgeDataTexture.free(e),this.stateManager.removeEdge(e),this.internals.edgesWithForcedLabels.delete(e)}},{key:`clearNodeIndices`,value:function(){this.labelRenderer.resetLabelGrid(),this.autoRescaleFrozen||(this.nodeExtent={x:[0,1],y:[0,1]}),this.internals.nodeDataCache={},this.nodeGraphCoords={},this.edgeProgramIndex={},this.internals.nodesWithForcedLabels.clear(),this.internals.nodesWithBackdrop.clear(),this.prevNodeVisibilities={},this.itemBuckets.nodes.clearAll(),this.depthRanges.nodes={},this.nodeBaseDepth={}}},{key:`clearEdgeIndices`,value:function(){this.internals.edgeDataCache={},this.edgeProgramIndex={},this.edgeTextureIndexCache={},this.internals.edgesWithForcedLabels.clear(),Xa(this.pickingState,`edge`),this.itemBuckets.edges.clearAll(),this.depthRanges.edges={},this.edgeBaseDepth={},this.edgeGroups.clear()}},{key:`clearIndices`,value:function(){this.clearEdgeIndices(),this.clearNodeIndices()}},{key:`clearNodeState`,value:function(){this.labelRenderer.resetFrame(),this.internals.nodesWithBackdrop.clear(),this.internals.dragManager.clear(),this.autoRescaleFrozen=!1,this.stateManager.clearNodes()}},{key:`clearEdgeState`,value:function(){this.labelRenderer.clearEdgeLabels(),this.stateManager.clearEdges()}},{key:`clearState`,value:function(){this.clearEdgeState(),this.clearNodeState(),this.stateManager.resetGraphState()}},{key:`addNodeToProgram`,value:function(e,t){var n,r=this.internals.nodeDataCache[e];this.internals.nodeDataTexture.allocate(e),(n=this.internals.nodeDataTexture).updateNode.apply(n,[e,r.x,r.y,r.size,this.getNodeShapeId(r)].concat(W(Dt(r)),[r.color]));var i=this.internals.nodeDataTexture.getIndex(e);this.nodeProgram.process(Ya(this.pickingState,`node`,e),t,r,i,e),this.nodeProgramIndex[e]=t}},{key:`addEdgeToProgram`,value:function(e,t){var n=this.internals.edgeDataCache[e],r=this.internals.graph.source(e),i=this.internals.graph.target(e),a=this.internals.edgeDataTexture.allocate(e);this.edgeTextureIndexCache[e]=a;var o=r===i,s=!o&&(this.stateManager.getEdgeState(e)?.parallelCount??1)>1,c=this.edgeProgram.resolveEdgeIds(n,o,s),l=c.pathId,u=c.headId,d=c.tailId,f=c.headLengthRatio,p=c.tailLengthRatio;this.internals.edgeDataTexture.updateEdge(e,this.internals.nodeDataTexture.getIndex(r),this.internals.nodeDataTexture.getIndex(i),n.size,f,p,l,u,d),this.edgeProgram.process(Ya(this.pickingState,`edge`,e),t,this.internals.nodeDataCache[r],this.internals.nodeDataCache[i],n,a),this.edgeProgramIndex[e]=t}},{key:`getRenderParams`,value:function(){return{frameId:this.frameId,matrix:this.matrix,invMatrix:this.invMatrix,width:this.width,height:this.height,pixelRatio:this.internals.pixelRatio,zoomRatio:this.camera.ratio,cameraAngle:this.camera.angle,sizeRatio:1/this.scaleSize(),correctionRatio:this.correctionRatio,downSizingRatio:this.internals.settings.pickingDownSizingRatio,minEdgeThickness:this.internals.settings.minEdgeThickness,antiAliasingFeather:this.internals.settings.antiAliasingFeather,nodePickingPadding:this.internals.settings.nodePickingPadding,edgePickingPadding:this.internals.settings.edgePickingPadding,labelPickingPadding:this.internals.settings.labelPickingPadding,nodeDataTextureUnit:Vo,nodeDataTextureWidth:this.internals.nodeDataTexture.getTextureWidth(),nodeFrameTextureUnit:Bo,nodeFrameTextureWidth:this.internals.nodeFrameTexture.getTextureWidth(),edgeDataTextureUnit:Ho,edgeDataTextureWidth:this.internals.edgeDataTexture.getTextureWidth(),edgeFrameTextureUnit:zo,edgeFrameTextureWidth:this.internals.edgeFrameTexture.getTextureWidth(),pickingFrameBuffer:this.pickingFrameBuffer,labelPixelSnapping:+!!this.internals.settings.labelPixelSnapping}}},{key:`getStagePadding`,value:function(){var e=this.internals.settings,t=e.stagePadding;return e.autoRescale&&t||0}},{key:`getLayerElement`,value:function(e){if(e===`mouse`)return this.mouseLayer;var t=this.extraElements[e];if(!t)throw Error(`Sigma: layer "${e}" does not exist`);return t}},{key:`initWebGLContext`,value:function(){var e=this,t=this.createWebGLContext(`stage`);this.stageCanvas=this.extraElements.stage,this.webGLContext=t,this.stageCanvas.addEventListener(`webglcontextlost`,function(t){e.webGLContext&&(t.preventDefault(),e.contextLost=!0,e.renderFrame&&=(cancelAnimationFrame(e.renderFrame),null),e.gpuTimerExt=void 0,e.activeGpuTimerQuery=null,e.pendingGpuTimerQueries=[],e.emit(`webglContextLost`))}),this.stageCanvas.addEventListener(`webglcontextrestored`,function(){requestAnimationFrame(function(){e.webGLContext&&!e.webGLContext.isContextLost()&&e.restoreWebGLContext()})}),this.initPickingFramebuffer()}},{key:`initPickingFramebuffer`,value:function(){var e=this.webGLContext,t=e.createFramebuffer();if(!t)throw Error(`Sigma: cannot create picking frame buffer`);e.bindFramebuffer(e.FRAMEBUFFER,t);var n=e.createTexture();if(!n)throw Error(`Sigma: cannot create picking texture`);e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);var r=e.createRenderbuffer();if(!r)throw Error(`Sigma: cannot create picking depth buffer`);if(e.bindRenderbuffer(e.RENDERBUFFER,r),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,1,1),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,r),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw Error(`Sigma: picking framebuffer is not complete`);e.bindFramebuffer(e.FRAMEBUFFER,null),this.pickingFrameBuffer=t,this.pickingTexture=n,this.pickingDepthBuffer=r}},{key:`initPrograms`,value:function(e,t){var n=this,r=this.webGLContext,i=qi(r,this.pickingFrameBuffer,n,e?.nodes,t.antialiasNodes),a=i.nodeProgram,o=i.labelProgram,s=i.backdropProgram,c=i.labelBackgroundProgram,l=i.attachmentProgram,u=i.framePass,d=i.shapeSlug,f=i.shapeNameToIndex,p=i.shapeGlobalIds,m=i.variables;this.nodeProgram=a,this.nodeFramePass=u,this.nodeVariableEntries=Object.entries(m),d&&(this.nodeShapeSlug=d);var h=Ji(r,this.pickingFrameBuffer,n,e?.edges,t.antialiasEdges,e?.nodes),g=h.edgeProgram,_=h.createLabelPrograms,v=h.framePass,y=h.variables,b=h.paths;return this.createEdgeLabelPrograms=_,this.edgeProgram=g,this.edgeFramePass=v,this.edgeVariableEntries=Object.entries(y),this.edgePathsByName=new Map(b.map(function(e){return[e.name,e]})),{labelProgram:o,edgeLabelProgram:null,edgeLabelBackgroundProgram:null,backdropProgram:s,labelBackgroundProgram:c,attachmentProgram:l,nodeShapeMap:f??null,nodeGlobalShapeIds:p??null}}},{key:`restoreWebGLContext`,value:function(){var e,t,n,r,i,a=this.internals;this.initPickingFramebuffer(),(e=a.nodeDataTexture)==null||e.restore(),(t=a.nodeFrameTexture)==null||t.restore(),(n=a.edgeDataTexture)==null||n.restore(),(r=a.edgeFrameTexture)==null||r.restore(),(i=a.attachmentManager)==null||i.restore(),a.hoverResolver.reset(),Object.assign(a,this.initPrograms(a.primitives,a.settings));var o=l(this.customLayerPrograms.values()),s;try{for(o.s();!(s=o.n()).done;){var c=s.value;c.program.kill(),c.program=c.factory(this.webGLContext)}}catch(e){o.e(e)}finally{o.f()}this.contextLost=!1,this.emit(`webglContextRestored`),this.refresh()}},{key:`createLayer`,value:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.extraElements[e])throw Error(`Sigma: a layer named "${e}" already exists`);var r=Rt(t,{position:`absolute`},{class:`sigma-${e}`});return n.style&&Object.assign(r.style,n.style),this.extraElements[e]=r,`beforeLayer`in n&&n.beforeLayer?this.getLayerElement(n.beforeLayer).before(r):`afterLayer`in n&&n.afterLayer?this.getLayerElement(n.afterLayer).after(r):this.container.appendChild(r),r}},{key:`createCanvas`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.createLayer(e,`canvas`,t)}},{key:`createWebGLContext`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=this.createCanvas(e,t);t.hidden&&n.remove();var r=n.getContext(`webgl2`,z({preserveDrawingBuffer:!1,antialias:!1,depth:!0},t));if(!r)throw Error(`Sigma: WebGL 2 is not supported by your browser. Please use a modern browser (Chrome 56+, Firefox 51+, Safari 15+, Edge 79+).`);return r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA),r}},{key:`killLayer`,value:function(e){if(e===`stage`||e===`mouse`)throw Error(`Sigma: cannot kill built-in layer "${e}"`);var t=this.extraElements[e];if(!t)throw Error(`Sigma: cannot kill layer ${e}, which does not exist`);return t.remove(),delete this.extraElements[e],this}},{key:`getWebGLContext`,value:function(){if(!this.webGLContext)throw Error(`Sigma: WebGL context is not available`);return this.webGLContext}},{key:`getNodeDataTexture`,value:function(){if(!this.internals.nodeDataTexture)throw Error(`Sigma: node data texture is not available`);return this.internals.nodeDataTexture}},{key:`getNormalizationFunction`,value:function(){return this.normalizationFunction}},{key:`addCustomLayerProgram`,value:function(e,t,n){var r;if(!this.depthLayers.includes(t))throw Error(`Sigma: cannot add custom layer program at depth "${t}", it must be declared in primitives.depthLayers. Current layers: ${this.depthLayers.join(`, `)}`);(r=this.customLayerPrograms.get(e))==null||r.program.kill();var i=n(this.webGLContext);return this.customLayerPrograms.set(e,{depth:t,factory:n,program:i}),i.cacheData&&i.cacheData(),this.scheduleRender(),this}},{key:`removeCustomLayerProgram`,value:function(e){var t=this.customLayerPrograms.get(e);return t&&(t.program.kill(),this.customLayerPrograms.delete(e),this.scheduleRender()),this}},{key:`getCamera`,value:function(){return this.camera}},{key:`setCamera`,value:function(e){return this.camera.cancelAnimation(),this.unbindCameraHandlers(),this.camera=e,this.bindCameraHandlers(),this.scheduleRender(),this}},{key:`getContainer`,value:function(){return this.container}},{key:`getGraph`,value:function(){return this.internals.graph}},{key:`setGraph`,value:function(e){return e===this.internals.graph||(this.stateManager.pruneNodes(function(t){return e.hasNode(t)}),this.stateManager.pruneEdges(function(t){return e.hasEdge(t)}),this.unbindGraphHandlers(),this.checkEdgesEventsFrame!==null&&(cancelAnimationFrame(this.checkEdgesEventsFrame),this.checkEdgesEventsFrame=null),this.internals.graph=e,this.autoRescaleFrozen=!1,this.bindGraphHandlers(),this.refresh()),this}},{key:`getMouseCaptor`,value:function(){return this.mouseCaptor}},{key:`getTouchCaptor`,value:function(){return this.touchCaptor}},{key:`getDimensions`,value:function(){return{width:this.width,height:this.height}}},{key:`getGraphDimensions`,value:function(){var e=this.customBBox||this.nodeExtent;return{width:e.x[1]-e.x[0]||1,height:e.y[1]-e.y[0]||1}}},{key:`getNodeDisplayData`,value:function(e){var t=this.internals.nodeDataCache[e];return t?Object.assign({},t):void 0}},{key:`getEdgeDisplayData`,value:function(e){var t=this.internals.edgeDataCache[e];return t?Object.assign({},t):void 0}},{key:`getNodeState`,value:function(e){return this.stateManager.getNodeState(e)}},{key:`getEdgeState`,value:function(e){return this.stateManager.getEdgeState(e)}},{key:`getGraphState`,value:function(){return this.stateManager.getGraphState()}},{key:`setNodeState`,value:function(e,t){return this.stateManager.setNodeState(e,t),this}},{key:`setEdgeState`,value:function(e,t){return this.stateManager.setEdgeState(e,t),this}},{key:`setGraphState`,value:function(e){return this.stateManager.setGraphState(e),this}},{key:`_setPanning`,value:function(e){this.stateManager.setGraphState({isPanning:e})}},{key:`_setZooming`,value:function(e){this.stateManager.setGraphState({isZooming:e})}},{key:`_hasNodeDrag`,value:function(){var e=this.internals.dragManager;return!!(e.pendingNode||e.session)}},{key:`_showGestureHint`,value:function(e){var t=this.internals.settings;t.gestureTarget===`shared`&&(this.gestureHint=this.gestureHint||new Eo(this.container),this.gestureHint.show(e,t))}},{key:`setNodesState`,value:function(e,t){return this.stateManager.setNodesState(e,t),this}},{key:`setEdgesState`,value:function(e,t){return this.stateManager.setEdgesState(e,t),this}},{key:`updateContainerCursor`,value:function(){var e=this.stateManager.hovered,t=this.resolvedStageStyle.cursor||``;this.container.style.cursor=e&&to(this.internals,e)||t}},{key:`refreshStageStyle`,value:function(){this.resolvedStageStyle=mt(this.stylesDeclaration.stage,this.stateManager.graphState),this.resolvedStageStyle.background!==void 0&&(this.container.style.backgroundColor=this.resolvedStageStyle.background),this.updateContainerCursor()}},{key:`getNodeDisplayedLabels`,value:function(){return new Set(this.labelRenderer.displayedNodeLabels)}},{key:`getEdgeDisplayedLabels`,value:function(){return new Set(this.labelRenderer.displayedEdgeLabels)}},{key:`getSettings`,value:function(){return z({},this.internals.settings)}},{key:`getSetting`,value:function(e){return this.internals.settings[e]}},{key:`getStyles`,value:function(){return z({},this.stylesDeclaration)}},{key:`getPrimitives`,value:function(){return z({},this.internals.primitives)}},{key:`setSetting`,value:function(e,t){return this.internals.settings[e]=t,Nt(this.internals.settings),this.handleSettingsUpdate(),this.scheduleRefresh(),this}},{key:`updateSetting`,value:function(e,t){return this.setSetting(e,t(this.internals.settings[e])),this}},{key:`setSettings`,value:function(e){return this.internals.settings=z(z({},this.internals.settings),e),Nt(this.internals.settings),this.handleSettingsUpdate(),this.scheduleRefresh(),this}},{key:`resize`,value:function(e){var t=this.width,n=this.height;if(this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.internals.pixelRatio=zt(),this.width===0){if(this.internals.settings.allowInvalidContainer)this.width=1;else throw Error(`Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.`)}if(this.height===0){if(this.internals.settings.allowInvalidContainer)this.height=1;else throw Error(`Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.`)}if(!e&&t===this.width&&n===this.height)return this;this.labelRenderer.labelsDirty=!0;for(var r=0,i=[this.mouseLayer].concat(W(Object.values(this.extraElements)));r<i.length;r++){var a=i[r];a.style.width=this.width+`px`,a.style.height=this.height+`px`}return this.webGLContext&&(this.stageCanvas.setAttribute(`width`,this.width*this.internals.pixelRatio+`px`),this.stageCanvas.setAttribute(`height`,this.height*this.internals.pixelRatio+`px`),this.webGLContext.viewport(0,0,this.width*this.internals.pixelRatio,this.height*this.internals.pixelRatio)),this.emit(`resize`),this}},{key:`clear`,value:function(){return this.emit(`beforeClear`),this.webGLContext.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,null),this.webGLContext.clear(WebGLRenderingContext.COLOR_BUFFER_BIT),this.emit(`afterClear`),this}},{key:`scheduleStateRefresh`,value:function(){this.needToRefreshState=!0,this.scheduleRender()}},{key:`refreshState`,value:function(){var e=this,t;this.stateManager.flushGraphStateFlags();var n=this.stateManager.graphStateChanged&&this.internals.nodeStyleAnalysis.dependency===`graph-state`,r=this.stateManager.graphStateChanged&&this.edgeStyleAnalysis.dependency===`graph-state`,i=!1;if(n)this.internals.graph.forEachNode(function(t){e.refreshNodeState(t)&&(i=!0)});else if(this.internals.nodeStyleAnalysis.dependency!==`static`){var a=l(this.stateManager.dirtyNodes),o;try{for(a.s();!(o=a.n()).done;){var s=o.value;this.refreshNodeState(s)&&(i=!0)}}catch(e){a.e(e)}finally{a.f()}}if(r)this.internals.graph.forEachEdge(function(t){e.refreshEdgeState(t)&&(i=!0)});else if(this.edgeStyleAnalysis.dependency!==`static`){var c=l(this.stateManager.dirtyEdges),u;try{for(c.s();!(u=c.n()).done;){var d=u.value;this.refreshEdgeState(d)&&(i=!0)}}catch(e){c.e(e)}finally{c.f()}}this.stateManager.graphStateChanged&&(t=this.stylesDeclaration)!=null&&t.stage&&this.refreshStageStyle(),this.stateManager.clearDirtyTracking(),i&&(this.pendingProcess=`full`)}},{key:`refreshNodeState`,value:function(e){var t=this.internals.nodeDataCache[e];if(!t||this.nodeReducer){var n,r=this.internals.nodeDataCache[e]?.depth,i=this.internals.nodeDataCache[e]?.zIndex,a=this.internals.nodeDataCache[e]?.labelAttachment;this.updateNode(e);var o=this.internals.nodeDataCache[e];this.internals.attachmentManager&&o.labelAttachment!==a&&this.internals.attachmentManager.invalidateNode(e);var s=this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&o.shape&&o.shape in this.internals.nodeShapeMap?this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[o.shape]]:en(o.shape||`circle`);(n=this.internals.nodeDataTexture).updateNode.apply(n,[e,o.x,o.y,o.size,s].concat(W(Dt(o)),[o.color])),r&&o.depth!==r&&this.updateNodeDepthRanges(e,r,o.depth);var c=this.nodeProgramIndex[e];return c!==void 0&&(this.addNodeToProgram(e,c),this.nodeProgram.invalidateBuffers()),i!==void 0&&o.zIndex!==i}var l=this.internals.graph.getNodeAttributes(e),u=this.stateManager.getNodeState(e),d=t.size,f=t.shape,p=t.depth,m=t.zIndex,h=t.labelAttachment,g=t.rotationAlignment,_=t.labelRotationAlignment,v=t.color;dt(this.stylesDeclaration.nodes,l,u,this.stateManager.graphState,this.internals.graph,t),this.postEvaluateNode(t,l,u);var y=this.nodeGraphCoords[e],b=t.x!==y.x||t.y!==y.y;if(b&&(y.x=t.x,y.y=t.y),this.normalizationFunction.applyTo(t),this.internals.nodeShapeMap?t.shape&&t.shape in this.internals.nodeShapeMap||(t.shape=Object.keys(this.internals.nodeShapeMap)[0]):this.nodeShapeSlug&&(t.shape=this.nodeShapeSlug),this.internals.attachmentManager&&t.labelAttachment!==h&&this.internals.attachmentManager.invalidateNode(e),St(this.internals.nodesWithForcedLabels,e,Tt(t)),St(this.internals.nodesWithBackdrop,e,Et(t)),b||t.size!==d||t.shape!==f||t.rotationAlignment!==g||t.labelRotationAlignment!==_||t.color!==v){var x,S=this.internals.nodeShapeMap&&this.internals.nodeGlobalShapeIds&&t.shape&&t.shape in this.internals.nodeShapeMap?this.internals.nodeGlobalShapeIds[this.internals.nodeShapeMap[t.shape]]:en(t.shape||`circle`);(x=this.internals.nodeDataTexture).updateNode.apply(x,[e,t.x,t.y,t.size,S].concat(W(Dt(t)),[t.color]))}this.itemBuckets.nodes.set(e,t.depth),t.depth!==p&&this.updateNodeDepthRanges(e,p,t.depth);var C=this.nodeProgramIndex[e];return C!==void 0&&(this.addNodeToProgram(e,C),this.nodeProgram.invalidateBuffers()),t.zIndex!==m}},{key:`refreshEdgeState`,value:function(e){var t=this.internals.edgeDataCache[e];if(!t||this.edgeReducer){var n=t?.depth,r=t?.zIndex;this.updateEdge(e);var i=this.internals.edgeDataCache[e];n&&i.depth!==n&&this.updateEdgeDepthRanges(e,n,i.depth);var a=this.edgeProgramIndex[e];return a!==void 0&&(this.addEdgeToProgram(e,a),this.edgeProgram.invalidateBuffers()),r!==void 0&&i.zIndex!==r}var o=this.internals.graph.getEdgeAttributes(e),s=this.stateManager.getEdgeState(e),c=t.depth,l=t.zIndex,u=t.size,d=t.path,f=t.selfLoopPath,p=t.parallelPath,m=t.head,h=t.tail;ft(this.stylesDeclaration.edges,o,s,this.stateManager.graphState,this.internals.graph,t),this.postEvaluateEdge(t,o),this.applyEdgeSpread(e,t,s),St(this.internals.edgesWithForcedLabels,e,Tt(t)),this.itemBuckets.edges.set(e,t.depth),t.depth!==c&&this.updateEdgeDepthRanges(e,c,t.depth);var g=this.edgeProgramIndex[e];if(g!==void 0){if(t.size!==u||t.path!==d||t.selfLoopPath!==f||t.parallelPath!==p||t.head!==m||t.tail!==h)this.addEdgeToProgram(e,g),this.edgeProgram.invalidateBuffers();else{var _=this.internals.graph.source(e),v=this.internals.graph.target(e),y=this.internals.nodeDataCache[_],b=this.internals.nodeDataCache[v],x=this.edgeTextureIndexCache[e];this.edgeProgram.process(Ya(this.pickingState,`edge`,e),g,y,b,t,x),this.edgeProgram.invalidateBuffers()}}return t.zIndex!==l}},{key:`refresh`,value:function(e){var t=this,n=e?.skipIndexation!==void 0&&e?.skipIndexation,r=e?.schedule!==void 0&&e.schedule;if(!e||!e.partialGraph)this.clearEdgeIndices(),this.clearNodeIndices(),this.internals.graph.forEachNode(function(e){return t.addNode(e)}),this.edgeGroups.rebuild(),this.internals.graph.forEachEdge(function(e){return t.addEdge(e)}),this.pendingProcess=`full`;else{for(var i,a=e.partialGraph?.nodes||[],o=0,s=a?.length||0;o<s;o++){var c,l=``+a[o],u=this.internals.nodeDataCache[l]?.labelAttachment;if(this.updateNode(l),this.internals.attachmentManager&&((c=this.internals.nodeDataCache[l])!=null&&c.labelAttachment||u)&&this.internals.attachmentManager.invalidateNode(l),n){var d=this.nodeProgramIndex[l];if(d===void 0)throw Error(`Sigma: node "${l}" can't be repaint`);this.addNodeToProgram(l,d)}}n&&a.length>0&&(this.nodeProgram.invalidateBuffers(),this.labelRenderer.labelsDirty=!0);for(var f=(e==null||(i=e.partialGraph)==null?void 0:i.edges)||[],p=0,m=f.length;p<m;p++){var h=``+f[p];if(this.updateEdge(h),n){var g=this.edgeProgramIndex[h];if(g===void 0)throw Error(`Sigma: edge "${h}" can't be repaint`);this.addEdgeToProgram(h,g)}}n&&f.length>0&&(this.edgeProgram.invalidateBuffers(),this.labelRenderer.labelsDirty=!0),!n&&this.pendingProcess!==`full`&&(this.pendingProcess=f.length>0?`full`:`nodes`)}return r?this.scheduleRender():this.render(),this}},{key:`scheduleRender`,value:function(){var e=this;return this.renderFrame||=requestAnimationFrame(function(){e.render()}),this}},{key:`scheduleRefresh`,value:function(e){return this.refresh(z(z({},e),{},{schedule:!0}))}},{key:`getViewportZoomedState`,value:function(e,t){var n=this.camera.getState(),r=n.ratio,i=n.angle,a=n.x,o=n.y,s=this.internals.settings,c=s.minCameraRatio,l=s.maxCameraRatio;typeof l==`number`&&(t=Math.min(t,l)),typeof c==`number`&&(t=Math.max(t,c));var u=t/r,d={x:this.width/2,y:this.height/2},f=this.viewportToFramedGraph(e),p=this.viewportToFramedGraph(d);return{angle:i,x:(f.x-p.x)*(1-u)+a,y:(f.y-p.y)*(1-u)+o,ratio:t}}},{key:`viewRectangle`,value:function(){var e=this.viewportToFramedGraph({x:0,y:0}),t=this.viewportToFramedGraph({x:this.width,y:0}),n=this.viewportToFramedGraph({x:0,y:this.height});return{x1:e.x,y1:e.y,x2:t.x,y2:t.y,height:t.y-n.y}}},{key:`framedGraphToViewport`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=!!t.cameraState||!!t.viewportDimensions||!!t.graphDimensions||!!t.padding,r=g(t.matrix||(n?v(t.cameraState||this.camera.getState(),t.viewportDimensions||this.getDimensions(),t.graphDimensions||this.getGraphDimensions(),t.padding||this.getStagePadding()):this.matrix),e);return{x:(1+r.x)*this.width/2,y:(1-r.y)*this.height/2}}},{key:`viewportToFramedGraph`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=!!t.cameraState||!!t.viewportDimensions||!!t.graphDimensions||!!t.padding,r=g(t.matrix||(n?v(t.cameraState||this.camera.getState(),t.viewportDimensions||this.getDimensions(),t.graphDimensions||this.getGraphDimensions(),t.padding||this.getStagePadding(),!0):this.invMatrix),{x:e.x/this.width*2-1,y:1-e.y/this.height*2});return isNaN(r.x)&&(r.x=0),isNaN(r.y)&&(r.y=0),r}},{key:`viewportToGraph`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.normalizationFunction.inverse(this.viewportToFramedGraph(e,t))}},{key:`graphToViewport`,value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.framedGraphToViewport(this.normalizationFunction(e),t)}},{key:`graphToFramedGraph`,value:function(e){return this.normalizationFunction(e)}},{key:`framedGraphToGraph`,value:function(e){return this.normalizationFunction.inverse(e)}},{key:`getGraphToViewportRatio`,value:function(){var e={x:0,y:0},t={x:1,y:1},n=Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2),r=this.graphToViewport(e),i=this.graphToViewport(t);return Math.sqrt((r.x-i.x)**2+(r.y-i.y)**2)/n}},{key:`computeNodeExtent`,value:function(){var e=this.nodeGraphCoords,t=Object.keys(e);if(!t.length)return{x:[0,1],y:[0,1]};for(var n=1/0,r=-1/0,i=1/0,a=-1/0,o=0,s=t.length;o<s;o++){var c=e[t[o]],l=c.x,u=c.y;l<n&&(n=l),l>r&&(r=l),u<i&&(i=u),u>a&&(a=u)}return{x:[n,r],y:[i,a]}}},{key:`getBBox`,value:function(){return this.nodeExtent}},{key:`getCustomBBox`,value:function(){return this.customBBox}},{key:`setCustomBBox`,value:function(e){return this.customBBox=e,this.scheduleRender(),this}},{key:`kill`,value:function(){var e,t,n,r,i;this.emit(`kill`),this.removeAllListeners(),this.camera.cancelAnimation(),this.unbindCameraHandlers(),window.removeEventListener(`resize`,this.activeListeners.handleResize),this.mouseCaptor.kill(),this.touchCaptor.kill(),this.internals.hoverResolver.kill(),this.unbindGraphHandlers(),this.clearIndices(),this.clearState(),this.internals.nodeDataCache={},this.internals.edgeDataCache={},this.renderFrame&&=(cancelAnimationFrame(this.renderFrame),null);for(var a=this.container;a.firstChild;)a.removeChild(a.firstChild);this.nodeProgram.kill(),this.nodeFramePass.kill(),this.edgeProgram.kill(),this.edgeFramePass.kill(),this.internals.labelProgram.kill(),(e=this.internals.edgeLabelProgram)==null||e.kill(),(t=this.internals.edgeLabelBackgroundProgram)==null||t.kill(),this.internals.backdropProgram.kill(),this.internals.labelBackgroundProgram.kill(),(n=this.internals.attachmentProgram)==null||n.kill(),(r=this.internals.attachmentManager)==null||r.kill(),this.internals.attachmentProgram=null,this.internals.attachmentManager=null;var o=l(this.customLayerPrograms.values()),s;try{for(o.s();!(s=o.n()).done;)s.value.program.kill()}catch(e){o.e(e)}finally{o.f()}if(this.customLayerPrograms.clear(),this.sdfAtlas&&=null,this.internals.nodeDataTexture&&(this.internals.nodeDataTexture.kill(),this.internals.nodeDataTexture=null),this.internals.nodeFrameTexture&&(this.internals.nodeFrameTexture.kill(),this.internals.nodeFrameTexture=null),this.internals.edgeDataTexture&&(this.internals.edgeDataTexture.kill(),this.internals.edgeDataTexture=null),this.internals.edgeFrameTexture&&(this.internals.edgeFrameTexture.kill(),this.internals.edgeFrameTexture=null),this.webGLContext){var c;(c=this.webGLContext.getExtension(`WEBGL_lose_context`))==null||c.loseContext(),this.webGLContext=null}for(var u in(i=this.gestureHint)==null||i.kill(),this.gestureHint=null,this.mouseLayer.remove(),this.extraElements)this.extraElements[u].remove();this.extraElements={}}},{key:`scaleSize`,value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.camera.ratio;return e/this.internals.settings.zoomToSizeRatioFunction(t)*(this.getSetting(`itemSizesReference`)===`positions`?t*this.graphToViewportRatio:1)}},{key:`getStageCanvas`,value:function(){return this.stageCanvas}},{key:`getMouseLayer`,value:function(){return this.mouseLayer}}])}(gt),Wo=Uo,Go=Ee,Ko=we,qo=Te,Jo=Oe;export{Da as Camera,Ea as DEFAULT_CAMERA_STATE,Go as DEFAULT_DEPTH_LAYERS,qo as DEFAULT_EDGE_DEPTH_LAYERS,Ko as DEFAULT_NODE_DEPTH_LAYERS,We as DEFAULT_STYLES,Ue as DEPTHLESS_STYLES,Ra as MouseCaptor,mr as SDFAtlasManager,Uo as Sigma,Ba as TouchCaptor,Wo as default,Jo as easings};