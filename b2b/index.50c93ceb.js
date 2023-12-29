
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("j6PwP", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $de968c5adfd91d4c$export$2e2bcd8739ae039);

var $8V3Us = parcelRequire("8V3Us");

var $gE5OH = parcelRequire("gE5OH");

var $de968c5adfd91d4c$export$2e2bcd8739ae039 = {
    __name: "App",
    setup (__props, { expose: __expose }) {
        __expose();
        const _t = (t)=>t;
        const inTheBegining = (0, $8V3Us.ref)(null);
        const scrollToElm = (elm)=>window.scrollTo({
                top: elm.$el.offsetTop,
                behavior: "smooth"
            });
        const __returned__ = {
            _t: _t,
            inTheBegining: inTheBegining,
            scrollToElm: scrollToElm,
            ref: $8V3Us.ref,
            get Splide () {
                return 0, $gE5OH.Splide;
            },
            get SplideSlide () {
                return 0, $gE5OH.SplideSlide;
            },
            get styles () {
                return {};
            }
        };
        Object.defineProperty(__returned__, "__isScriptSetup", {
            enumerable: false,
            value: true
        });
        return __returned__;
    }
};

});
parcelRegister("8V3Us", function(module, exports) {

$parcel$export(module.exports, "toDisplayString", () => $67e6adf7fe63e8dd$export$b5b1545233b45293);
$parcel$export(module.exports, "ref", () => $67e6adf7fe63e8dd$export$eff4d24c3ff7876e);
$parcel$export(module.exports, "Fragment", () => $67e6adf7fe63e8dd$export$ffb0004e005737fa);
$parcel$export(module.exports, "withCtx", () => $67e6adf7fe63e8dd$export$694b237e827a3d23);
$parcel$export(module.exports, "createVNode", () => $67e6adf7fe63e8dd$export$bf5c4cf060303d58);
$parcel$export(module.exports, "resolveComponent", () => $67e6adf7fe63e8dd$export$681d65eec9d1d1e8);
$parcel$export(module.exports, "resolveDynamicComponent", () => $67e6adf7fe63e8dd$export$b44c564a05ca975);
$parcel$export(module.exports, "openBlock", () => $67e6adf7fe63e8dd$export$e7eaa45e502fe5cc);
$parcel$export(module.exports, "watch", () => $67e6adf7fe63e8dd$export$3db5d71bdb2d5499);
$parcel$export(module.exports, "onMounted", () => $67e6adf7fe63e8dd$export$6d1641039221b5cb);
$parcel$export(module.exports, "onBeforeUnmount", () => $67e6adf7fe63e8dd$export$40c420df62d2614);
$parcel$export(module.exports, "defineComponent", () => $67e6adf7fe63e8dd$export$afa64b67e5a01c3b);
$parcel$export(module.exports, "onUpdated", () => $67e6adf7fe63e8dd$export$5876c47052fb88b1);
$parcel$export(module.exports, "renderSlot", () => $67e6adf7fe63e8dd$export$4abee4c34694ada1);
$parcel$export(module.exports, "createBlock", () => $67e6adf7fe63e8dd$export$9f2dfe8048dfb22b);
$parcel$export(module.exports, "computed", () => $67e6adf7fe63e8dd$export$2983e091f1a1e8e2);
$parcel$export(module.exports, "provide", () => $67e6adf7fe63e8dd$export$abe1e183e22e10ad);
$parcel$export(module.exports, "inject", () => $67e6adf7fe63e8dd$export$a976684a0efeb93f);
$parcel$export(module.exports, "createTextVNode", () => $67e6adf7fe63e8dd$export$22f9b5ffd89dac9);
$parcel$export(module.exports, "createElementBlock", () => $67e6adf7fe63e8dd$export$167055419fc69ec1);
$parcel$export(module.exports, "createElementVNode", () => $67e6adf7fe63e8dd$export$42098e0eaa15c48e);
$parcel$export(module.exports, "createApp", () => $67e6adf7fe63e8dd$export$4e373c34abfa8c68);
function $67e6adf7fe63e8dd$var$makeMap(str, expectsLowerCase) {
    const set = new Set(str.split(","));
    return expectsLowerCase ? (val)=>set.has(val.toLowerCase()) : (val)=>set.has(val);
}
const $67e6adf7fe63e8dd$var$EMPTY_OBJ = Object.freeze({});
const $67e6adf7fe63e8dd$var$EMPTY_ARR = Object.freeze([]);
const $67e6adf7fe63e8dd$var$NOOP = ()=>{};
const $67e6adf7fe63e8dd$var$NO = ()=>false;
const $67e6adf7fe63e8dd$var$isOn = (key)=>key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
    (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const $67e6adf7fe63e8dd$var$isModelListener = (key)=>key.startsWith("onUpdate:");
const $67e6adf7fe63e8dd$var$extend = Object.assign;
const $67e6adf7fe63e8dd$var$remove = (arr, el)=>{
    const i = arr.indexOf(el);
    if (i > -1) arr.splice(i, 1);
};
const $67e6adf7fe63e8dd$var$hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const $67e6adf7fe63e8dd$var$hasOwn = (val, key)=>$67e6adf7fe63e8dd$var$hasOwnProperty$1.call(val, key);
const $67e6adf7fe63e8dd$var$isArray = Array.isArray;
const $67e6adf7fe63e8dd$var$isMap = (val)=>$67e6adf7fe63e8dd$var$toTypeString(val) === "[object Map]";
const $67e6adf7fe63e8dd$var$isSet = (val)=>$67e6adf7fe63e8dd$var$toTypeString(val) === "[object Set]";
const $67e6adf7fe63e8dd$var$isDate = (val)=>$67e6adf7fe63e8dd$var$toTypeString(val) === "[object Date]";
const $67e6adf7fe63e8dd$var$isRegExp = (val)=>$67e6adf7fe63e8dd$var$toTypeString(val) === "[object RegExp]";
const $67e6adf7fe63e8dd$var$isFunction = (val)=>typeof val === "function";
const $67e6adf7fe63e8dd$var$isString = (val)=>typeof val === "string";
const $67e6adf7fe63e8dd$var$isSymbol = (val)=>typeof val === "symbol";
const $67e6adf7fe63e8dd$var$isObject = (val)=>val !== null && typeof val === "object";
const $67e6adf7fe63e8dd$var$isPromise = (val)=>{
    return ($67e6adf7fe63e8dd$var$isObject(val) || $67e6adf7fe63e8dd$var$isFunction(val)) && $67e6adf7fe63e8dd$var$isFunction(val.then) && $67e6adf7fe63e8dd$var$isFunction(val.catch);
};
const $67e6adf7fe63e8dd$var$objectToString = Object.prototype.toString;
const $67e6adf7fe63e8dd$var$toTypeString = (value)=>$67e6adf7fe63e8dd$var$objectToString.call(value);
const $67e6adf7fe63e8dd$var$toRawType = (value)=>{
    return $67e6adf7fe63e8dd$var$toTypeString(value).slice(8, -1);
};
const $67e6adf7fe63e8dd$var$isPlainObject = (val)=>$67e6adf7fe63e8dd$var$toTypeString(val) === "[object Object]";
const $67e6adf7fe63e8dd$var$isIntegerKey = (key)=>$67e6adf7fe63e8dd$var$isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const $67e6adf7fe63e8dd$var$isReservedProp = /* @__PURE__ */ $67e6adf7fe63e8dd$var$makeMap(// the leading comma is intentional so empty string "" is also included
",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const $67e6adf7fe63e8dd$var$isBuiltInDirective = /* @__PURE__ */ $67e6adf7fe63e8dd$var$makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const $67e6adf7fe63e8dd$var$cacheStringFunction = (fn)=>{
    const cache = /* @__PURE__ */ Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};
const $67e6adf7fe63e8dd$var$camelizeRE = /-(\w)/g;
const $67e6adf7fe63e8dd$export$161d051f5dd25de7 = $67e6adf7fe63e8dd$var$cacheStringFunction((str)=>{
    return str.replace($67e6adf7fe63e8dd$var$camelizeRE, (_, c)=>c ? c.toUpperCase() : "");
});
const $67e6adf7fe63e8dd$var$hyphenateRE = /\B([A-Z])/g;
const $67e6adf7fe63e8dd$var$hyphenate = $67e6adf7fe63e8dd$var$cacheStringFunction((str)=>str.replace($67e6adf7fe63e8dd$var$hyphenateRE, "-$1").toLowerCase());
const $67e6adf7fe63e8dd$export$9a00dee1beb8f576 = $67e6adf7fe63e8dd$var$cacheStringFunction((str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
});
const $67e6adf7fe63e8dd$export$8c022799eeaaefcd = $67e6adf7fe63e8dd$var$cacheStringFunction((str)=>{
    const s = str ? `on${$67e6adf7fe63e8dd$export$9a00dee1beb8f576(str)}` : ``;
    return s;
});
const $67e6adf7fe63e8dd$var$hasChanged = (value, oldValue)=>!Object.is(value, oldValue);
const $67e6adf7fe63e8dd$var$invokeArrayFns = (fns, arg)=>{
    for(let i = 0; i < fns.length; i++)fns[i](arg);
};
const $67e6adf7fe63e8dd$var$def = (obj, key, value)=>{
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value: value
    });
};
const $67e6adf7fe63e8dd$var$looseToNumber = (val)=>{
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
const $67e6adf7fe63e8dd$var$toNumber = (val)=>{
    const n = $67e6adf7fe63e8dd$var$isString(val) ? Number(val) : NaN;
    return isNaN(n) ? val : n;
};
let $67e6adf7fe63e8dd$var$_globalThis;
const $67e6adf7fe63e8dd$var$getGlobalThis = ()=>{
    return $67e6adf7fe63e8dd$var$_globalThis || ($67e6adf7fe63e8dd$var$_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof $parcel$global !== "undefined" ? $parcel$global : {});
};
const $67e6adf7fe63e8dd$var$PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `NEED_HYDRATION`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `HOISTED`,
    [-2]: `BAIL`
};
const $67e6adf7fe63e8dd$var$slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
};
const $67e6adf7fe63e8dd$var$GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error";
const $67e6adf7fe63e8dd$var$isGloballyAllowed = /* @__PURE__ */ $67e6adf7fe63e8dd$var$makeMap($67e6adf7fe63e8dd$var$GLOBALS_ALLOWED);
const $67e6adf7fe63e8dd$var$range = 2;
function $67e6adf7fe63e8dd$var$generateCodeFrame(source, start = 0, end = source.length) {
    let lines = source.split(/(\r?\n)/);
    const newlineSequences = lines.filter((_, idx)=>idx % 2 === 1);
    lines = lines.filter((_, idx)=>idx % 2 === 0);
    let count = 0;
    const res = [];
    for(let i = 0; i < lines.length; i++){
        count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
        if (count >= start) {
            for(let j = i - $67e6adf7fe63e8dd$var$range; j <= i + $67e6adf7fe63e8dd$var$range || end > count; j++){
                if (j < 0 || j >= lines.length) continue;
                const line = j + 1;
                res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
                if (j === i) {
                    const pad = start - (count - (lineLength + newLineSeqLength));
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
                } else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + "^".repeat(length));
                    }
                    count += lineLength + newLineSeqLength;
                }
            }
            break;
        }
    }
    return res.join("\n");
}
function $67e6adf7fe63e8dd$export$8756898546458274(value) {
    if ($67e6adf7fe63e8dd$var$isArray(value)) {
        const res = {};
        for(let i = 0; i < value.length; i++){
            const item = value[i];
            const normalized = $67e6adf7fe63e8dd$var$isString(item) ? $67e6adf7fe63e8dd$var$parseStringStyle(item) : $67e6adf7fe63e8dd$export$8756898546458274(item);
            if (normalized) for(const key in normalized)res[key] = normalized[key];
        }
        return res;
    } else if ($67e6adf7fe63e8dd$var$isString(value) || $67e6adf7fe63e8dd$var$isObject(value)) return value;
}
const $67e6adf7fe63e8dd$var$listDelimiterRE = /;(?![^(]*\))/g;
const $67e6adf7fe63e8dd$var$propertyDelimiterRE = /:([^]+)/;
const $67e6adf7fe63e8dd$var$styleCommentRE = /\/\*[^]*?\*\//g;
function $67e6adf7fe63e8dd$var$parseStringStyle(cssText) {
    const ret = {};
    cssText.replace($67e6adf7fe63e8dd$var$styleCommentRE, "").split($67e6adf7fe63e8dd$var$listDelimiterRE).forEach((item)=>{
        if (item) {
            const tmp = item.split($67e6adf7fe63e8dd$var$propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function $67e6adf7fe63e8dd$var$stringifyStyle(styles) {
    let ret = "";
    if (!styles || $67e6adf7fe63e8dd$var$isString(styles)) return ret;
    for(const key in styles){
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : $67e6adf7fe63e8dd$var$hyphenate(key);
        if ($67e6adf7fe63e8dd$var$isString(value) || typeof value === "number") ret += `${normalizedKey}:${value};`;
    }
    return ret;
}
function $67e6adf7fe63e8dd$export$4f7022d2d68e2c5a(value) {
    let res = "";
    if ($67e6adf7fe63e8dd$var$isString(value)) res = value;
    else if ($67e6adf7fe63e8dd$var$isArray(value)) for(let i = 0; i < value.length; i++){
        const normalized = $67e6adf7fe63e8dd$export$4f7022d2d68e2c5a(value[i]);
        if (normalized) res += normalized + " ";
    }
    else if ($67e6adf7fe63e8dd$var$isObject(value)) {
        for(const name in value)if (value[name]) res += name + " ";
    }
    return res.trim();
}
function $67e6adf7fe63e8dd$export$601abcd8103db5e4(props) {
    if (!props) return null;
    let { class: klass, style: style } = props;
    if (klass && !$67e6adf7fe63e8dd$var$isString(klass)) props.class = $67e6adf7fe63e8dd$export$4f7022d2d68e2c5a(klass);
    if (style) props.style = $67e6adf7fe63e8dd$export$8756898546458274(style);
    return props;
}
const $67e6adf7fe63e8dd$var$HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const $67e6adf7fe63e8dd$var$SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const $67e6adf7fe63e8dd$var$MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
const $67e6adf7fe63e8dd$var$VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const $67e6adf7fe63e8dd$var$isHTMLTag = /* @__PURE__ */ $67e6adf7fe63e8dd$var$makeMap($67e6adf7fe63e8dd$var$HTML_TAGS);
const $67e6adf7fe63e8dd$var$isSVGTag = /* @__PURE__ */ $67e6adf7fe63e8dd$var$makeMap($67e6adf7fe63e8dd$var$SVG_TAGS);
const $67e6adf7fe63e8dd$var$isMathMLTag = /* @__PURE__ */ $67e6adf7fe63e8dd$var$makeMap($67e6adf7fe63e8dd$var$MATH_TAGS);
const $67e6adf7fe63e8dd$var$isVoidTag = /* @__PURE__ */ $67e6adf7fe63e8dd$var$makeMap($67e6adf7fe63e8dd$var$VOID_TAGS);
const $67e6adf7fe63e8dd$var$specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const $67e6adf7fe63e8dd$var$isSpecialBooleanAttr = /* @__PURE__ */ $67e6adf7fe63e8dd$var$makeMap($67e6adf7fe63e8dd$var$specialBooleanAttrs);
const $67e6adf7fe63e8dd$var$isBooleanAttr = /* @__PURE__ */ $67e6adf7fe63e8dd$var$makeMap($67e6adf7fe63e8dd$var$specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function $67e6adf7fe63e8dd$var$includeBooleanAttr(value) {
    return !!value || value === "";
}
const $67e6adf7fe63e8dd$var$isKnownHtmlAttr = /* @__PURE__ */ $67e6adf7fe63e8dd$var$makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
const $67e6adf7fe63e8dd$var$isKnownSvgAttr = /* @__PURE__ */ $67e6adf7fe63e8dd$var$makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
function $67e6adf7fe63e8dd$var$looseCompareArrays(a, b) {
    if (a.length !== b.length) return false;
    let equal = true;
    for(let i = 0; equal && i < a.length; i++)equal = $67e6adf7fe63e8dd$var$looseEqual(a[i], b[i]);
    return equal;
}
function $67e6adf7fe63e8dd$var$looseEqual(a, b) {
    if (a === b) return true;
    let aValidType = $67e6adf7fe63e8dd$var$isDate(a);
    let bValidType = $67e6adf7fe63e8dd$var$isDate(b);
    if (aValidType || bValidType) return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    aValidType = $67e6adf7fe63e8dd$var$isSymbol(a);
    bValidType = $67e6adf7fe63e8dd$var$isSymbol(b);
    if (aValidType || bValidType) return a === b;
    aValidType = $67e6adf7fe63e8dd$var$isArray(a);
    bValidType = $67e6adf7fe63e8dd$var$isArray(b);
    if (aValidType || bValidType) return aValidType && bValidType ? $67e6adf7fe63e8dd$var$looseCompareArrays(a, b) : false;
    aValidType = $67e6adf7fe63e8dd$var$isObject(a);
    bValidType = $67e6adf7fe63e8dd$var$isObject(b);
    if (aValidType || bValidType) {
        if (!aValidType || !bValidType) return false;
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) return false;
        for(const key in a){
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if (aHasKey && !bHasKey || !aHasKey && bHasKey || !$67e6adf7fe63e8dd$var$looseEqual(a[key], b[key])) return false;
        }
    }
    return String(a) === String(b);
}
function $67e6adf7fe63e8dd$var$looseIndexOf(arr, val) {
    return arr.findIndex((item)=>$67e6adf7fe63e8dd$var$looseEqual(item, val));
}
const $67e6adf7fe63e8dd$export$b5b1545233b45293 = (val)=>{
    return $67e6adf7fe63e8dd$var$isString(val) ? val : val == null ? "" : $67e6adf7fe63e8dd$var$isArray(val) || $67e6adf7fe63e8dd$var$isObject(val) && (val.toString === $67e6adf7fe63e8dd$var$objectToString || !$67e6adf7fe63e8dd$var$isFunction(val.toString)) ? JSON.stringify(val, $67e6adf7fe63e8dd$var$replacer, 2) : String(val);
};
const $67e6adf7fe63e8dd$var$replacer = (_key, val)=>{
    if (val && val.__v_isRef) return $67e6adf7fe63e8dd$var$replacer(_key, val.value);
    else if ($67e6adf7fe63e8dd$var$isMap(val)) return {
        [`Map(${val.size})`]: [
            ...val.entries()
        ].reduce((entries, [key, val2], i)=>{
            entries[$67e6adf7fe63e8dd$var$stringifySymbol(key, i) + " =>"] = val2;
            return entries;
        }, {})
    };
    else if ($67e6adf7fe63e8dd$var$isSet(val)) return {
        [`Set(${val.size})`]: [
            ...val.values()
        ].map((v1)=>$67e6adf7fe63e8dd$var$stringifySymbol(v1))
    };
    else if ($67e6adf7fe63e8dd$var$isSymbol(val)) return $67e6adf7fe63e8dd$var$stringifySymbol(val);
    else if ($67e6adf7fe63e8dd$var$isObject(val) && !$67e6adf7fe63e8dd$var$isArray(val) && !$67e6adf7fe63e8dd$var$isPlainObject(val)) return String(val);
    return val;
};
const $67e6adf7fe63e8dd$var$stringifySymbol = (v1, i = "")=>{
    var _a;
    return $67e6adf7fe63e8dd$var$isSymbol(v1) ? `Symbol(${(_a = v1.description) != null ? _a : i})` : v1;
};
function $67e6adf7fe63e8dd$var$warn$2(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
}
let $67e6adf7fe63e8dd$var$activeEffectScope;
class $67e6adf7fe63e8dd$export$1168ed9dbc71ddbd {
    constructor(detached = false){
        this.detached = detached;
        /**
     * @internal
     */ this._active = true;
        /**
     * @internal
     */ this.effects = [];
        /**
     * @internal
     */ this.cleanups = [];
        this.parent = $67e6adf7fe63e8dd$var$activeEffectScope;
        if (!detached && $67e6adf7fe63e8dd$var$activeEffectScope) this.index = ($67e6adf7fe63e8dd$var$activeEffectScope.scopes || ($67e6adf7fe63e8dd$var$activeEffectScope.scopes = [])).push(this) - 1;
    }
    get active() {
        return this._active;
    }
    run(fn) {
        if (this._active) {
            const currentEffectScope = $67e6adf7fe63e8dd$var$activeEffectScope;
            try {
                $67e6adf7fe63e8dd$var$activeEffectScope = this;
                return fn();
            } finally{
                $67e6adf7fe63e8dd$var$activeEffectScope = currentEffectScope;
            }
        } else $67e6adf7fe63e8dd$var$warn$2(`cannot run an inactive effect scope.`);
    }
    /**
   * This should only be called on non-detached scopes
   * @internal
   */ on() {
        $67e6adf7fe63e8dd$var$activeEffectScope = this;
    }
    /**
   * This should only be called on non-detached scopes
   * @internal
   */ off() {
        $67e6adf7fe63e8dd$var$activeEffectScope = this.parent;
    }
    stop(fromParent) {
        if (this._active) {
            let i, l;
            for(i = 0, l = this.effects.length; i < l; i++)this.effects[i].stop();
            for(i = 0, l = this.cleanups.length; i < l; i++)this.cleanups[i]();
            if (this.scopes) for(i = 0, l = this.scopes.length; i < l; i++)this.scopes[i].stop(true);
            if (!this.detached && this.parent && !fromParent) {
                const last = this.parent.scopes.pop();
                if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                }
            }
            this.parent = void 0;
            this._active = false;
        }
    }
}
function $67e6adf7fe63e8dd$export$7056603ea81600be(detached) {
    return new $67e6adf7fe63e8dd$export$1168ed9dbc71ddbd(detached);
}
function $67e6adf7fe63e8dd$var$recordEffectScope(effect, scope = $67e6adf7fe63e8dd$var$activeEffectScope) {
    if (scope && scope.active) scope.effects.push(effect);
}
function $67e6adf7fe63e8dd$export$c7be4b0125a10cba() {
    return $67e6adf7fe63e8dd$var$activeEffectScope;
}
function $67e6adf7fe63e8dd$export$a780418acd4762da(fn) {
    if ($67e6adf7fe63e8dd$var$activeEffectScope) $67e6adf7fe63e8dd$var$activeEffectScope.cleanups.push(fn);
    else $67e6adf7fe63e8dd$var$warn$2(`onScopeDispose() is called when there is no active effect scope to be associated with.`);
}
let $67e6adf7fe63e8dd$var$activeEffect;
class $67e6adf7fe63e8dd$export$28352bb4dd362521 {
    constructor(fn, trigger, scheduler, scope){
        this.fn = fn;
        this.trigger = trigger;
        this.scheduler = scheduler;
        this.active = true;
        this.deps = [];
        /**
     * @internal
     */ this._dirtyLevel = 3;
        /**
     * @internal
     */ this._trackId = 0;
        /**
     * @internal
     */ this._runnings = 0;
        /**
     * @internal
     */ this._queryings = 0;
        /**
     * @internal
     */ this._depsLength = 0;
        $67e6adf7fe63e8dd$var$recordEffectScope(this, scope);
    }
    get dirty() {
        if (this._dirtyLevel === 1) {
            this._dirtyLevel = 0;
            this._queryings++;
            $67e6adf7fe63e8dd$var$pauseTracking();
            for (const dep of this.deps)if (dep.computed) {
                $67e6adf7fe63e8dd$var$triggerComputed(dep.computed);
                if (this._dirtyLevel >= 2) break;
            }
            $67e6adf7fe63e8dd$var$resetTracking();
            this._queryings--;
        }
        return this._dirtyLevel >= 2;
    }
    set dirty(v1) {
        this._dirtyLevel = v1 ? 3 : 0;
    }
    run() {
        this._dirtyLevel = 0;
        if (!this.active) return this.fn();
        let lastShouldTrack = $67e6adf7fe63e8dd$var$shouldTrack;
        let lastEffect = $67e6adf7fe63e8dd$var$activeEffect;
        try {
            $67e6adf7fe63e8dd$var$shouldTrack = true;
            $67e6adf7fe63e8dd$var$activeEffect = this;
            this._runnings++;
            $67e6adf7fe63e8dd$var$preCleanupEffect(this);
            return this.fn();
        } finally{
            $67e6adf7fe63e8dd$var$postCleanupEffect(this);
            this._runnings--;
            $67e6adf7fe63e8dd$var$activeEffect = lastEffect;
            $67e6adf7fe63e8dd$var$shouldTrack = lastShouldTrack;
        }
    }
    stop() {
        var _a;
        if (this.active) {
            $67e6adf7fe63e8dd$var$preCleanupEffect(this);
            $67e6adf7fe63e8dd$var$postCleanupEffect(this);
            (_a = this.onStop) == null || _a.call(this);
            this.active = false;
        }
    }
}
function $67e6adf7fe63e8dd$var$triggerComputed(computed) {
    return computed.value;
}
function $67e6adf7fe63e8dd$var$preCleanupEffect(effect2) {
    effect2._trackId++;
    effect2._depsLength = 0;
}
function $67e6adf7fe63e8dd$var$postCleanupEffect(effect2) {
    if (effect2.deps && effect2.deps.length > effect2._depsLength) {
        for(let i = effect2._depsLength; i < effect2.deps.length; i++)$67e6adf7fe63e8dd$var$cleanupDepEffect(effect2.deps[i], effect2);
        effect2.deps.length = effect2._depsLength;
    }
}
function $67e6adf7fe63e8dd$var$cleanupDepEffect(dep, effect2) {
    const trackId = dep.get(effect2);
    if (trackId !== void 0 && effect2._trackId !== trackId) {
        dep.delete(effect2);
        if (dep.size === 0) dep.cleanup();
    }
}
function $67e6adf7fe63e8dd$export$dc573d8a6576cdb3(fn, options) {
    if (fn.effect instanceof $67e6adf7fe63e8dd$export$28352bb4dd362521) fn = fn.effect.fn;
    const _effect = new $67e6adf7fe63e8dd$export$28352bb4dd362521(fn, $67e6adf7fe63e8dd$var$NOOP, ()=>{
        if (_effect.dirty) _effect.run();
    });
    if (options) {
        $67e6adf7fe63e8dd$var$extend(_effect, options);
        if (options.scope) $67e6adf7fe63e8dd$var$recordEffectScope(_effect, options.scope);
    }
    if (!options || !options.lazy) _effect.run();
    const runner = _effect.run.bind(_effect);
    runner.effect = _effect;
    return runner;
}
function $67e6adf7fe63e8dd$export$fa6813432f753b0d(runner) {
    runner.effect.stop();
}
let $67e6adf7fe63e8dd$var$shouldTrack = true;
let $67e6adf7fe63e8dd$var$pauseScheduleStack = 0;
const $67e6adf7fe63e8dd$var$trackStack = [];
function $67e6adf7fe63e8dd$var$pauseTracking() {
    $67e6adf7fe63e8dd$var$trackStack.push($67e6adf7fe63e8dd$var$shouldTrack);
    $67e6adf7fe63e8dd$var$shouldTrack = false;
}
function $67e6adf7fe63e8dd$var$resetTracking() {
    const last = $67e6adf7fe63e8dd$var$trackStack.pop();
    $67e6adf7fe63e8dd$var$shouldTrack = last === void 0 ? true : last;
}
function $67e6adf7fe63e8dd$var$pauseScheduling() {
    $67e6adf7fe63e8dd$var$pauseScheduleStack++;
}
function $67e6adf7fe63e8dd$var$resetScheduling() {
    $67e6adf7fe63e8dd$var$pauseScheduleStack--;
    while(!$67e6adf7fe63e8dd$var$pauseScheduleStack && $67e6adf7fe63e8dd$var$queueEffectSchedulers.length)$67e6adf7fe63e8dd$var$queueEffectSchedulers.shift()();
}
function $67e6adf7fe63e8dd$var$trackEffect(effect2, dep, debuggerEventExtraInfo) {
    var _a;
    if (dep.get(effect2) !== effect2._trackId) {
        dep.set(effect2, effect2._trackId);
        const oldDep = effect2.deps[effect2._depsLength];
        if (oldDep !== dep) {
            if (oldDep) $67e6adf7fe63e8dd$var$cleanupDepEffect(oldDep, effect2);
            effect2.deps[effect2._depsLength++] = dep;
        } else effect2._depsLength++;
        (_a = effect2.onTrack) == null || _a.call(effect2, $67e6adf7fe63e8dd$var$extend({
            effect: effect2
        }, debuggerEventExtraInfo));
    }
}
const $67e6adf7fe63e8dd$var$queueEffectSchedulers = [];
function $67e6adf7fe63e8dd$var$triggerEffects(dep, dirtyLevel, debuggerEventExtraInfo) {
    var _a;
    $67e6adf7fe63e8dd$var$pauseScheduling();
    for (const effect2 of dep.keys()){
        if (!effect2.allowRecurse && effect2._runnings) continue;
        if (effect2._dirtyLevel < dirtyLevel && (!effect2._runnings || dirtyLevel !== 2)) {
            const lastDirtyLevel = effect2._dirtyLevel;
            effect2._dirtyLevel = dirtyLevel;
            if (lastDirtyLevel === 0 && (!effect2._queryings || dirtyLevel !== 2)) {
                (_a = effect2.onTrigger) == null || _a.call(effect2, $67e6adf7fe63e8dd$var$extend({
                    effect: effect2
                }, debuggerEventExtraInfo));
                effect2.trigger();
                if (effect2.scheduler) $67e6adf7fe63e8dd$var$queueEffectSchedulers.push(effect2.scheduler);
            }
        }
    }
    $67e6adf7fe63e8dd$var$resetScheduling();
}
const $67e6adf7fe63e8dd$var$createDep = (cleanup, computed)=>{
    const dep = /* @__PURE__ */ new Map();
    dep.cleanup = cleanup;
    dep.computed = computed;
    return dep;
};
const $67e6adf7fe63e8dd$var$targetMap = /* @__PURE__ */ new WeakMap();
const $67e6adf7fe63e8dd$var$ITERATE_KEY = Symbol("iterate");
const $67e6adf7fe63e8dd$var$MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
function $67e6adf7fe63e8dd$var$track(target, type, key) {
    if ($67e6adf7fe63e8dd$var$shouldTrack && $67e6adf7fe63e8dd$var$activeEffect) {
        let depsMap = $67e6adf7fe63e8dd$var$targetMap.get(target);
        if (!depsMap) $67e6adf7fe63e8dd$var$targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
        let dep = depsMap.get(key);
        if (!dep) depsMap.set(key, dep = $67e6adf7fe63e8dd$var$createDep(()=>depsMap.delete(key)));
        $67e6adf7fe63e8dd$var$trackEffect($67e6adf7fe63e8dd$var$activeEffect, dep, {
            target: target,
            type: type,
            key: key
        });
    }
}
function $67e6adf7fe63e8dd$var$trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = $67e6adf7fe63e8dd$var$targetMap.get(target);
    if (!depsMap) return;
    let deps = [];
    if (type === "clear") deps = [
        ...depsMap.values()
    ];
    else if (key === "length" && $67e6adf7fe63e8dd$var$isArray(target)) {
        const newLength = Number(newValue);
        depsMap.forEach((dep, key2)=>{
            if (key2 === "length" || !$67e6adf7fe63e8dd$var$isSymbol(key2) && key2 >= newLength) deps.push(dep);
        });
    } else {
        if (key !== void 0) deps.push(depsMap.get(key));
        switch(type){
            case "add":
                if (!$67e6adf7fe63e8dd$var$isArray(target)) {
                    deps.push(depsMap.get($67e6adf7fe63e8dd$var$ITERATE_KEY));
                    if ($67e6adf7fe63e8dd$var$isMap(target)) deps.push(depsMap.get($67e6adf7fe63e8dd$var$MAP_KEY_ITERATE_KEY));
                } else if ($67e6adf7fe63e8dd$var$isIntegerKey(key)) deps.push(depsMap.get("length"));
                break;
            case "delete":
                if (!$67e6adf7fe63e8dd$var$isArray(target)) {
                    deps.push(depsMap.get($67e6adf7fe63e8dd$var$ITERATE_KEY));
                    if ($67e6adf7fe63e8dd$var$isMap(target)) deps.push(depsMap.get($67e6adf7fe63e8dd$var$MAP_KEY_ITERATE_KEY));
                }
                break;
            case "set":
                if ($67e6adf7fe63e8dd$var$isMap(target)) deps.push(depsMap.get($67e6adf7fe63e8dd$var$ITERATE_KEY));
                break;
        }
    }
    $67e6adf7fe63e8dd$var$pauseScheduling();
    for (const dep of deps)if (dep) $67e6adf7fe63e8dd$var$triggerEffects(dep, 3, {
        target: target,
        type: type,
        key: key,
        newValue: newValue,
        oldValue: oldValue,
        oldTarget: oldTarget
    });
    $67e6adf7fe63e8dd$var$resetScheduling();
}
function $67e6adf7fe63e8dd$var$getDepFromReactive(object, key) {
    var _a;
    return (_a = $67e6adf7fe63e8dd$var$targetMap.get(object)) == null ? void 0 : _a.get(key);
}
const $67e6adf7fe63e8dd$var$isNonTrackableKeys = /* @__PURE__ */ $67e6adf7fe63e8dd$var$makeMap(`__proto__,__v_isRef,__isVue`);
const $67e6adf7fe63e8dd$var$builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key)=>key !== "arguments" && key !== "caller").map((key)=>Symbol[key]).filter($67e6adf7fe63e8dd$var$isSymbol));
const $67e6adf7fe63e8dd$var$arrayInstrumentations = /* @__PURE__ */ $67e6adf7fe63e8dd$var$createArrayInstrumentations();
function $67e6adf7fe63e8dd$var$createArrayInstrumentations() {
    const instrumentations = {};
    [
        "includes",
        "indexOf",
        "lastIndexOf"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            const arr = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(this);
            for(let i = 0, l = this.length; i < l; i++)$67e6adf7fe63e8dd$var$track(arr, "get", i + "");
            const res = arr[key](...args);
            if (res === -1 || res === false) return arr[key](...args.map($67e6adf7fe63e8dd$export$ab18938b9fc5f28e));
            else return res;
        };
    });
    [
        "push",
        "pop",
        "shift",
        "unshift",
        "splice"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            $67e6adf7fe63e8dd$var$pauseTracking();
            $67e6adf7fe63e8dd$var$pauseScheduling();
            const res = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(this)[key].apply(this, args);
            $67e6adf7fe63e8dd$var$resetScheduling();
            $67e6adf7fe63e8dd$var$resetTracking();
            return res;
        };
    });
    return instrumentations;
}
function $67e6adf7fe63e8dd$var$hasOwnProperty(key) {
    const obj = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(this);
    $67e6adf7fe63e8dd$var$track(obj, "has", key);
    return obj.hasOwnProperty(key);
}
class $67e6adf7fe63e8dd$var$BaseReactiveHandler {
    constructor(_isReadonly = false, _shallow = false){
        this._isReadonly = _isReadonly;
        this._shallow = _shallow;
    }
    get(target, key, receiver) {
        const isReadonly2 = this._isReadonly, shallow = this._shallow;
        if (key === "__v_isReactive") return !isReadonly2;
        else if (key === "__v_isReadonly") return isReadonly2;
        else if (key === "__v_isShallow") return shallow;
        else if (key === "__v_raw") {
            if (receiver === (isReadonly2 ? shallow ? $67e6adf7fe63e8dd$var$shallowReadonlyMap : $67e6adf7fe63e8dd$var$readonlyMap : shallow ? $67e6adf7fe63e8dd$var$shallowReactiveMap : $67e6adf7fe63e8dd$var$reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
            // this means the reciever is a user proxy of the reactive proxy
            Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) return target;
            return;
        }
        const targetIsArray = $67e6adf7fe63e8dd$var$isArray(target);
        if (!isReadonly2) {
            if (targetIsArray && $67e6adf7fe63e8dd$var$hasOwn($67e6adf7fe63e8dd$var$arrayInstrumentations, key)) return Reflect.get($67e6adf7fe63e8dd$var$arrayInstrumentations, key, receiver);
            if (key === "hasOwnProperty") return $67e6adf7fe63e8dd$var$hasOwnProperty;
        }
        const res = Reflect.get(target, key, receiver);
        if ($67e6adf7fe63e8dd$var$isSymbol(key) ? $67e6adf7fe63e8dd$var$builtInSymbols.has(key) : $67e6adf7fe63e8dd$var$isNonTrackableKeys(key)) return res;
        if (!isReadonly2) $67e6adf7fe63e8dd$var$track(target, "get", key);
        if (shallow) return res;
        if ($67e6adf7fe63e8dd$export$4f9f5282de18fc69(res)) return targetIsArray && $67e6adf7fe63e8dd$var$isIntegerKey(key) ? res : res.value;
        if ($67e6adf7fe63e8dd$var$isObject(res)) return isReadonly2 ? $67e6adf7fe63e8dd$export$6ec456bd5b7b3c51(res) : $67e6adf7fe63e8dd$export$90a44edba14e47be(res);
        return res;
    }
}
class $67e6adf7fe63e8dd$var$MutableReactiveHandler extends $67e6adf7fe63e8dd$var$BaseReactiveHandler {
    constructor(shallow = false){
        super(false, shallow);
    }
    set(target, key, value, receiver) {
        let oldValue = target[key];
        if (!this._shallow) {
            const isOldValueReadonly = $67e6adf7fe63e8dd$export$92d09b48637741e7(oldValue);
            if (!$67e6adf7fe63e8dd$export$7f3fe6025abfa26e(value) && !$67e6adf7fe63e8dd$export$92d09b48637741e7(value)) {
                oldValue = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(oldValue);
                value = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(value);
            }
            if (!$67e6adf7fe63e8dd$var$isArray(target) && $67e6adf7fe63e8dd$export$4f9f5282de18fc69(oldValue) && !$67e6adf7fe63e8dd$export$4f9f5282de18fc69(value)) {
                if (isOldValueReadonly) return false;
                else {
                    oldValue.value = value;
                    return true;
                }
            }
        }
        const hadKey = $67e6adf7fe63e8dd$var$isArray(target) && $67e6adf7fe63e8dd$var$isIntegerKey(key) ? Number(key) < target.length : $67e6adf7fe63e8dd$var$hasOwn(target, key);
        const result = Reflect.set(target, key, value, receiver);
        if (target === $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(receiver)) {
            if (!hadKey) $67e6adf7fe63e8dd$var$trigger(target, "add", key, value);
            else if ($67e6adf7fe63e8dd$var$hasChanged(value, oldValue)) $67e6adf7fe63e8dd$var$trigger(target, "set", key, value, oldValue);
        }
        return result;
    }
    deleteProperty(target, key) {
        const hadKey = $67e6adf7fe63e8dd$var$hasOwn(target, key);
        const oldValue = target[key];
        const result = Reflect.deleteProperty(target, key);
        if (result && hadKey) $67e6adf7fe63e8dd$var$trigger(target, "delete", key, void 0, oldValue);
        return result;
    }
    has(target, key) {
        const result = Reflect.has(target, key);
        if (!$67e6adf7fe63e8dd$var$isSymbol(key) || !$67e6adf7fe63e8dd$var$builtInSymbols.has(key)) $67e6adf7fe63e8dd$var$track(target, "has", key);
        return result;
    }
    ownKeys(target) {
        $67e6adf7fe63e8dd$var$track(target, "iterate", $67e6adf7fe63e8dd$var$isArray(target) ? "length" : $67e6adf7fe63e8dd$var$ITERATE_KEY);
        return Reflect.ownKeys(target);
    }
}
class $67e6adf7fe63e8dd$var$ReadonlyReactiveHandler extends $67e6adf7fe63e8dd$var$BaseReactiveHandler {
    constructor(shallow = false){
        super(true, shallow);
    }
    set(target, key) {
        $67e6adf7fe63e8dd$var$warn$2(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
    deleteProperty(target, key) {
        $67e6adf7fe63e8dd$var$warn$2(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
}
const $67e6adf7fe63e8dd$var$mutableHandlers = /* @__PURE__ */ new $67e6adf7fe63e8dd$var$MutableReactiveHandler();
const $67e6adf7fe63e8dd$var$readonlyHandlers = /* @__PURE__ */ new $67e6adf7fe63e8dd$var$ReadonlyReactiveHandler();
const $67e6adf7fe63e8dd$var$shallowReactiveHandlers = /* @__PURE__ */ new $67e6adf7fe63e8dd$var$MutableReactiveHandler(true);
const $67e6adf7fe63e8dd$var$shallowReadonlyHandlers = /* @__PURE__ */ new $67e6adf7fe63e8dd$var$ReadonlyReactiveHandler(true);
const $67e6adf7fe63e8dd$var$toShallow = (value)=>value;
const $67e6adf7fe63e8dd$var$getProto = (v1)=>Reflect.getPrototypeOf(v1);
function $67e6adf7fe63e8dd$var$get(target, key, isReadonly = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(target);
    const rawKey = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(key);
    if (!isReadonly) {
        if ($67e6adf7fe63e8dd$var$hasChanged(key, rawKey)) $67e6adf7fe63e8dd$var$track(rawTarget, "get", key);
        $67e6adf7fe63e8dd$var$track(rawTarget, "get", rawKey);
    }
    const { has: has2 } = $67e6adf7fe63e8dd$var$getProto(rawTarget);
    const wrap = isShallow ? $67e6adf7fe63e8dd$var$toShallow : isReadonly ? $67e6adf7fe63e8dd$var$toReadonly : $67e6adf7fe63e8dd$var$toReactive;
    if (has2.call(rawTarget, key)) return wrap(target.get(key));
    else if (has2.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
    else if (target !== rawTarget) target.get(key);
}
function $67e6adf7fe63e8dd$var$has(key, isReadonly = false) {
    const target = this["__v_raw"];
    const rawTarget = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(target);
    const rawKey = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(key);
    if (!isReadonly) {
        if ($67e6adf7fe63e8dd$var$hasChanged(key, rawKey)) $67e6adf7fe63e8dd$var$track(rawTarget, "has", key);
        $67e6adf7fe63e8dd$var$track(rawTarget, "has", rawKey);
    }
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function $67e6adf7fe63e8dd$var$size(target, isReadonly = false) {
    target = target["__v_raw"];
    !isReadonly && $67e6adf7fe63e8dd$var$track($67e6adf7fe63e8dd$export$ab18938b9fc5f28e(target), "iterate", $67e6adf7fe63e8dd$var$ITERATE_KEY);
    return Reflect.get(target, "size", target);
}
function $67e6adf7fe63e8dd$var$add(value) {
    value = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(value);
    const target = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(this);
    const proto = $67e6adf7fe63e8dd$var$getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        $67e6adf7fe63e8dd$var$trigger(target, "add", value, value);
    }
    return this;
}
function $67e6adf7fe63e8dd$var$set(key, value) {
    value = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(value);
    const target = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(this);
    const { has: has2, get: get2 } = $67e6adf7fe63e8dd$var$getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(key);
        hadKey = has2.call(target, key);
    } else $67e6adf7fe63e8dd$var$checkIdentityKeys(target, has2, key);
    const oldValue = get2.call(target, key);
    target.set(key, value);
    if (!hadKey) $67e6adf7fe63e8dd$var$trigger(target, "add", key, value);
    else if ($67e6adf7fe63e8dd$var$hasChanged(value, oldValue)) $67e6adf7fe63e8dd$var$trigger(target, "set", key, value, oldValue);
    return this;
}
function $67e6adf7fe63e8dd$var$deleteEntry(key) {
    const target = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(this);
    const { has: has2, get: get2 } = $67e6adf7fe63e8dd$var$getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(key);
        hadKey = has2.call(target, key);
    } else $67e6adf7fe63e8dd$var$checkIdentityKeys(target, has2, key);
    const oldValue = get2 ? get2.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) $67e6adf7fe63e8dd$var$trigger(target, "delete", key, void 0, oldValue);
    return result;
}
function $67e6adf7fe63e8dd$var$clear() {
    const target = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(this);
    const hadItems = target.size !== 0;
    const oldTarget = $67e6adf7fe63e8dd$var$isMap(target) ? new Map(target) : new Set(target);
    const result = target.clear();
    if (hadItems) $67e6adf7fe63e8dd$var$trigger(target, "clear", void 0, void 0, oldTarget);
    return result;
}
function $67e6adf7fe63e8dd$var$createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw"];
        const rawTarget = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(target);
        const wrap = isShallow ? $67e6adf7fe63e8dd$var$toShallow : isReadonly ? $67e6adf7fe63e8dd$var$toReadonly : $67e6adf7fe63e8dd$var$toReactive;
        !isReadonly && $67e6adf7fe63e8dd$var$track(rawTarget, "iterate", $67e6adf7fe63e8dd$var$ITERATE_KEY);
        return target.forEach((value, key)=>{
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function $67e6adf7fe63e8dd$var$createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(target);
        const targetIsMap = $67e6adf7fe63e8dd$var$isMap(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? $67e6adf7fe63e8dd$var$toShallow : isReadonly ? $67e6adf7fe63e8dd$var$toReadonly : $67e6adf7fe63e8dd$var$toReactive;
        !isReadonly && $67e6adf7fe63e8dd$var$track(rawTarget, "iterate", isKeyOnly ? $67e6adf7fe63e8dd$var$MAP_KEY_ITERATE_KEY : $67e6adf7fe63e8dd$var$ITERATE_KEY);
        return {
            // iterator protocol
            next () {
                const { value: value, done: done } = innerIterator.next();
                return done ? {
                    value: value,
                    done: done
                } : {
                    value: isPair ? [
                        wrap(value[0]),
                        wrap(value[1])
                    ] : wrap(value),
                    done: done
                };
            },
            // iterable protocol
            [Symbol.iterator] () {
                return this;
            }
        };
    };
}
function $67e6adf7fe63e8dd$var$createReadonlyMethod(type) {
    return function(...args) {
        {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            console.warn(`${$67e6adf7fe63e8dd$export$9a00dee1beb8f576(type)} operation ${key}failed: target is readonly.`, $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(this));
        }
        return type === "delete" ? false : type === "clear" ? void 0 : this;
    };
}
function $67e6adf7fe63e8dd$var$createInstrumentations() {
    const mutableInstrumentations2 = {
        get (key) {
            return $67e6adf7fe63e8dd$var$get(this, key);
        },
        get size () {
            return $67e6adf7fe63e8dd$var$size(this);
        },
        has: $67e6adf7fe63e8dd$var$has,
        add: $67e6adf7fe63e8dd$var$add,
        set: $67e6adf7fe63e8dd$var$set,
        delete: $67e6adf7fe63e8dd$var$deleteEntry,
        clear: $67e6adf7fe63e8dd$var$clear,
        forEach: $67e6adf7fe63e8dd$var$createForEach(false, false)
    };
    const shallowInstrumentations2 = {
        get (key) {
            return $67e6adf7fe63e8dd$var$get(this, key, false, true);
        },
        get size () {
            return $67e6adf7fe63e8dd$var$size(this);
        },
        has: $67e6adf7fe63e8dd$var$has,
        add: $67e6adf7fe63e8dd$var$add,
        set: $67e6adf7fe63e8dd$var$set,
        delete: $67e6adf7fe63e8dd$var$deleteEntry,
        clear: $67e6adf7fe63e8dd$var$clear,
        forEach: $67e6adf7fe63e8dd$var$createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
        get (key) {
            return $67e6adf7fe63e8dd$var$get(this, key, true);
        },
        get size () {
            return $67e6adf7fe63e8dd$var$size(this, true);
        },
        has (key) {
            return $67e6adf7fe63e8dd$var$has.call(this, key, true);
        },
        add: $67e6adf7fe63e8dd$var$createReadonlyMethod("add"),
        set: $67e6adf7fe63e8dd$var$createReadonlyMethod("set"),
        delete: $67e6adf7fe63e8dd$var$createReadonlyMethod("delete"),
        clear: $67e6adf7fe63e8dd$var$createReadonlyMethod("clear"),
        forEach: $67e6adf7fe63e8dd$var$createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
        get (key) {
            return $67e6adf7fe63e8dd$var$get(this, key, true, true);
        },
        get size () {
            return $67e6adf7fe63e8dd$var$size(this, true);
        },
        has (key) {
            return $67e6adf7fe63e8dd$var$has.call(this, key, true);
        },
        add: $67e6adf7fe63e8dd$var$createReadonlyMethod("add"),
        set: $67e6adf7fe63e8dd$var$createReadonlyMethod("set"),
        delete: $67e6adf7fe63e8dd$var$createReadonlyMethod("delete"),
        clear: $67e6adf7fe63e8dd$var$createReadonlyMethod("clear"),
        forEach: $67e6adf7fe63e8dd$var$createForEach(true, true)
    };
    const iteratorMethods = [
        "keys",
        "values",
        "entries",
        Symbol.iterator
    ];
    iteratorMethods.forEach((method)=>{
        mutableInstrumentations2[method] = $67e6adf7fe63e8dd$var$createIterableMethod(method, false, false);
        readonlyInstrumentations2[method] = $67e6adf7fe63e8dd$var$createIterableMethod(method, true, false);
        shallowInstrumentations2[method] = $67e6adf7fe63e8dd$var$createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations2[method] = $67e6adf7fe63e8dd$var$createIterableMethod(method, true, true);
    });
    return [
        mutableInstrumentations2,
        readonlyInstrumentations2,
        shallowInstrumentations2,
        shallowReadonlyInstrumentations2
    ];
}
const [$67e6adf7fe63e8dd$var$mutableInstrumentations, $67e6adf7fe63e8dd$var$readonlyInstrumentations, $67e6adf7fe63e8dd$var$shallowInstrumentations, $67e6adf7fe63e8dd$var$shallowReadonlyInstrumentations] = /* @__PURE__ */ $67e6adf7fe63e8dd$var$createInstrumentations();
function $67e6adf7fe63e8dd$var$createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? $67e6adf7fe63e8dd$var$shallowReadonlyInstrumentations : $67e6adf7fe63e8dd$var$shallowInstrumentations : isReadonly ? $67e6adf7fe63e8dd$var$readonlyInstrumentations : $67e6adf7fe63e8dd$var$mutableInstrumentations;
    return (target, key, receiver)=>{
        if (key === "__v_isReactive") return !isReadonly;
        else if (key === "__v_isReadonly") return isReadonly;
        else if (key === "__v_raw") return target;
        return Reflect.get($67e6adf7fe63e8dd$var$hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
const $67e6adf7fe63e8dd$var$mutableCollectionHandlers = {
    get: /* @__PURE__ */ $67e6adf7fe63e8dd$var$createInstrumentationGetter(false, false)
};
const $67e6adf7fe63e8dd$var$shallowCollectionHandlers = {
    get: /* @__PURE__ */ $67e6adf7fe63e8dd$var$createInstrumentationGetter(false, true)
};
const $67e6adf7fe63e8dd$var$readonlyCollectionHandlers = {
    get: /* @__PURE__ */ $67e6adf7fe63e8dd$var$createInstrumentationGetter(true, false)
};
const $67e6adf7fe63e8dd$var$shallowReadonlyCollectionHandlers = {
    get: /* @__PURE__ */ $67e6adf7fe63e8dd$var$createInstrumentationGetter(true, true)
};
function $67e6adf7fe63e8dd$var$checkIdentityKeys(target, has2, key) {
    const rawKey = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
        const type = $67e6adf7fe63e8dd$var$toRawType(target);
        console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
}
const $67e6adf7fe63e8dd$var$reactiveMap = /* @__PURE__ */ new WeakMap();
const $67e6adf7fe63e8dd$var$shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const $67e6adf7fe63e8dd$var$readonlyMap = /* @__PURE__ */ new WeakMap();
const $67e6adf7fe63e8dd$var$shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function $67e6adf7fe63e8dd$var$targetTypeMap(rawType) {
    switch(rawType){
        case "Object":
        case "Array":
            return 1 /* COMMON */ ;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2 /* COLLECTION */ ;
        default:
            return 0 /* INVALID */ ;
    }
}
function $67e6adf7fe63e8dd$var$getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 /* INVALID */  : $67e6adf7fe63e8dd$var$targetTypeMap($67e6adf7fe63e8dd$var$toRawType(value));
}
function $67e6adf7fe63e8dd$export$90a44edba14e47be(target) {
    if ($67e6adf7fe63e8dd$export$92d09b48637741e7(target)) return target;
    return $67e6adf7fe63e8dd$var$createReactiveObject(target, false, $67e6adf7fe63e8dd$var$mutableHandlers, $67e6adf7fe63e8dd$var$mutableCollectionHandlers, $67e6adf7fe63e8dd$var$reactiveMap);
}
function $67e6adf7fe63e8dd$export$8d81cefd22d22260(target) {
    return $67e6adf7fe63e8dd$var$createReactiveObject(target, false, $67e6adf7fe63e8dd$var$shallowReactiveHandlers, $67e6adf7fe63e8dd$var$shallowCollectionHandlers, $67e6adf7fe63e8dd$var$shallowReactiveMap);
}
function $67e6adf7fe63e8dd$export$6ec456bd5b7b3c51(target) {
    return $67e6adf7fe63e8dd$var$createReactiveObject(target, true, $67e6adf7fe63e8dd$var$readonlyHandlers, $67e6adf7fe63e8dd$var$readonlyCollectionHandlers, $67e6adf7fe63e8dd$var$readonlyMap);
}
function $67e6adf7fe63e8dd$export$7c4b5f2b50f09f6b(target) {
    return $67e6adf7fe63e8dd$var$createReactiveObject(target, true, $67e6adf7fe63e8dd$var$shallowReadonlyHandlers, $67e6adf7fe63e8dd$var$shallowReadonlyCollectionHandlers, $67e6adf7fe63e8dd$var$shallowReadonlyMap);
}
function $67e6adf7fe63e8dd$var$createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!$67e6adf7fe63e8dd$var$isObject(target)) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
        return target;
    }
    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) return target;
    const existingProxy = proxyMap.get(target);
    if (existingProxy) return existingProxy;
    const targetType = $67e6adf7fe63e8dd$var$getTargetType(target);
    if (targetType === 0 /* INVALID */ ) return target;
    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */  ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function $67e6adf7fe63e8dd$export$352205f445242f02(value) {
    if ($67e6adf7fe63e8dd$export$92d09b48637741e7(value)) return $67e6adf7fe63e8dd$export$352205f445242f02(value["__v_raw"]);
    return !!(value && value["__v_isReactive"]);
}
function $67e6adf7fe63e8dd$export$92d09b48637741e7(value) {
    return !!(value && value["__v_isReadonly"]);
}
function $67e6adf7fe63e8dd$export$7f3fe6025abfa26e(value) {
    return !!(value && value["__v_isShallow"]);
}
function $67e6adf7fe63e8dd$export$5f3ca29d057519b3(value) {
    return $67e6adf7fe63e8dd$export$352205f445242f02(value) || $67e6adf7fe63e8dd$export$92d09b48637741e7(value);
}
function $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(observed) {
    const raw = observed && observed["__v_raw"];
    return raw ? $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(raw) : observed;
}
function $67e6adf7fe63e8dd$export$995ab8b13ad7a9d0(value) {
    $67e6adf7fe63e8dd$var$def(value, "__v_skip", true);
    return value;
}
const $67e6adf7fe63e8dd$var$toReactive = (value)=>$67e6adf7fe63e8dd$var$isObject(value) ? $67e6adf7fe63e8dd$export$90a44edba14e47be(value) : value;
const $67e6adf7fe63e8dd$var$toReadonly = (value)=>$67e6adf7fe63e8dd$var$isObject(value) ? $67e6adf7fe63e8dd$export$6ec456bd5b7b3c51(value) : value;
class $67e6adf7fe63e8dd$var$ComputedRefImpl {
    constructor(getter, _setter, isReadonly, isSSR){
        this._setter = _setter;
        this.dep = void 0;
        this.__v_isRef = true;
        this["__v_isReadonly"] = false;
        this.effect = new $67e6adf7fe63e8dd$export$28352bb4dd362521(()=>getter(this._value), ()=>$67e6adf7fe63e8dd$var$triggerRefValue(this, 1));
        this.effect.computed = this;
        this.effect.active = this._cacheable = !isSSR;
        this["__v_isReadonly"] = isReadonly;
    }
    get value() {
        const self1 = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(this);
        $67e6adf7fe63e8dd$var$trackRefValue(self1);
        if (!self1._cacheable || self1.effect.dirty) {
            if ($67e6adf7fe63e8dd$var$hasChanged(self1._value, self1._value = self1.effect.run())) $67e6adf7fe63e8dd$var$triggerRefValue(self1, 2);
        }
        return self1._value;
    }
    set value(newValue) {
        this._setter(newValue);
    }
    // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
    get _dirty() {
        return this.effect.dirty;
    }
    set _dirty(v1) {
        this.effect.dirty = v1;
    }
}
function $67e6adf7fe63e8dd$var$computed$1(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    const onlyGetter = $67e6adf7fe63e8dd$var$isFunction(getterOrOptions);
    if (onlyGetter) {
        getter = getterOrOptions;
        setter = ()=>{
            console.warn("Write operation failed: computed value is readonly");
        };
    } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    const cRef = new $67e6adf7fe63e8dd$var$ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    if (debugOptions && !isSSR) {
        cRef.effect.onTrack = debugOptions.onTrack;
        cRef.effect.onTrigger = debugOptions.onTrigger;
    }
    return cRef;
}
function $67e6adf7fe63e8dd$var$trackRefValue(ref2) {
    if ($67e6adf7fe63e8dd$var$shouldTrack && $67e6adf7fe63e8dd$var$activeEffect) {
        ref2 = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(ref2);
        $67e6adf7fe63e8dd$var$trackEffect($67e6adf7fe63e8dd$var$activeEffect, ref2.dep || (ref2.dep = $67e6adf7fe63e8dd$var$createDep(()=>ref2.dep = void 0, ref2 instanceof $67e6adf7fe63e8dd$var$ComputedRefImpl ? ref2 : void 0)), {
            target: ref2,
            type: "get",
            key: "value"
        });
    }
}
function $67e6adf7fe63e8dd$var$triggerRefValue(ref2, dirtyLevel = 3, newVal) {
    ref2 = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(ref2);
    const dep = ref2.dep;
    if (dep) $67e6adf7fe63e8dd$var$triggerEffects(dep, dirtyLevel, {
        target: ref2,
        type: "set",
        key: "value",
        newValue: newVal
    });
}
function $67e6adf7fe63e8dd$export$4f9f5282de18fc69(r) {
    return !!(r && r.__v_isRef === true);
}
function $67e6adf7fe63e8dd$export$eff4d24c3ff7876e(value) {
    return $67e6adf7fe63e8dd$var$createRef(value, false);
}
function $67e6adf7fe63e8dd$export$9b7bc5fe3b17c8b3(value) {
    return $67e6adf7fe63e8dd$var$createRef(value, true);
}
function $67e6adf7fe63e8dd$var$createRef(rawValue, shallow) {
    if ($67e6adf7fe63e8dd$export$4f9f5282de18fc69(rawValue)) return rawValue;
    return new $67e6adf7fe63e8dd$var$RefImpl(rawValue, shallow);
}
class $67e6adf7fe63e8dd$var$RefImpl {
    constructor(value, __v_isShallow){
        this.__v_isShallow = __v_isShallow;
        this.dep = void 0;
        this.__v_isRef = true;
        this._rawValue = __v_isShallow ? value : $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(value);
        this._value = __v_isShallow ? value : $67e6adf7fe63e8dd$var$toReactive(value);
    }
    get value() {
        $67e6adf7fe63e8dd$var$trackRefValue(this);
        return this._value;
    }
    set value(newVal) {
        const useDirectValue = this.__v_isShallow || $67e6adf7fe63e8dd$export$7f3fe6025abfa26e(newVal) || $67e6adf7fe63e8dd$export$92d09b48637741e7(newVal);
        newVal = useDirectValue ? newVal : $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(newVal);
        if ($67e6adf7fe63e8dd$var$hasChanged(newVal, this._rawValue)) {
            this._rawValue = newVal;
            this._value = useDirectValue ? newVal : $67e6adf7fe63e8dd$var$toReactive(newVal);
            $67e6adf7fe63e8dd$var$triggerRefValue(this, 3, newVal);
        }
    }
}
function $67e6adf7fe63e8dd$export$f402f86588575ccc(ref2) {
    $67e6adf7fe63e8dd$var$triggerRefValue(ref2, 3, ref2.value);
}
function $67e6adf7fe63e8dd$export$a239a76781616204(ref2) {
    return $67e6adf7fe63e8dd$export$4f9f5282de18fc69(ref2) ? ref2.value : ref2;
}
function $67e6adf7fe63e8dd$export$30bdcc2218aa9458(source) {
    return $67e6adf7fe63e8dd$var$isFunction(source) ? source() : $67e6adf7fe63e8dd$export$a239a76781616204(source);
}
const $67e6adf7fe63e8dd$var$shallowUnwrapHandlers = {
    get: (target, key, receiver)=>$67e6adf7fe63e8dd$export$a239a76781616204(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver)=>{
        const oldValue = target[key];
        if ($67e6adf7fe63e8dd$export$4f9f5282de18fc69(oldValue) && !$67e6adf7fe63e8dd$export$4f9f5282de18fc69(value)) {
            oldValue.value = value;
            return true;
        } else return Reflect.set(target, key, value, receiver);
    }
};
function $67e6adf7fe63e8dd$export$f353fd1b97db3fa0(objectWithRefs) {
    return $67e6adf7fe63e8dd$export$352205f445242f02(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, $67e6adf7fe63e8dd$var$shallowUnwrapHandlers);
}
class $67e6adf7fe63e8dd$var$CustomRefImpl {
    constructor(factory){
        this.dep = void 0;
        this.__v_isRef = true;
        const { get: get, set: set } = factory(()=>$67e6adf7fe63e8dd$var$trackRefValue(this), ()=>$67e6adf7fe63e8dd$var$triggerRefValue(this));
        this._get = get;
        this._set = set;
    }
    get value() {
        return this._get();
    }
    set value(newVal) {
        this._set(newVal);
    }
}
function $67e6adf7fe63e8dd$export$a20c2dd6199824cb(factory) {
    return new $67e6adf7fe63e8dd$var$CustomRefImpl(factory);
}
function $67e6adf7fe63e8dd$export$2e9533675e5e70e0(object) {
    if (!$67e6adf7fe63e8dd$export$5f3ca29d057519b3(object)) console.warn(`toRefs() expects a reactive object but received a plain one.`);
    const ret = $67e6adf7fe63e8dd$var$isArray(object) ? new Array(object.length) : {};
    for(const key in object)ret[key] = $67e6adf7fe63e8dd$var$propertyToRef(object, key);
    return ret;
}
class $67e6adf7fe63e8dd$var$ObjectRefImpl {
    constructor(_object, _key, _defaultValue){
        this._object = _object;
        this._key = _key;
        this._defaultValue = _defaultValue;
        this.__v_isRef = true;
    }
    get value() {
        const val = this._object[this._key];
        return val === void 0 ? this._defaultValue : val;
    }
    set value(newVal) {
        this._object[this._key] = newVal;
    }
    get dep() {
        return $67e6adf7fe63e8dd$var$getDepFromReactive($67e6adf7fe63e8dd$export$ab18938b9fc5f28e(this._object), this._key);
    }
}
class $67e6adf7fe63e8dd$var$GetterRefImpl {
    constructor(_getter){
        this._getter = _getter;
        this.__v_isRef = true;
        this.__v_isReadonly = true;
    }
    get value() {
        return this._getter();
    }
}
function $67e6adf7fe63e8dd$export$1f60508e4f47b4b7(source, key, defaultValue) {
    if ($67e6adf7fe63e8dd$export$4f9f5282de18fc69(source)) return source;
    else if ($67e6adf7fe63e8dd$var$isFunction(source)) return new $67e6adf7fe63e8dd$var$GetterRefImpl(source);
    else if ($67e6adf7fe63e8dd$var$isObject(source) && arguments.length > 1) return $67e6adf7fe63e8dd$var$propertyToRef(source, key, defaultValue);
    else return $67e6adf7fe63e8dd$export$eff4d24c3ff7876e(source);
}
function $67e6adf7fe63e8dd$var$propertyToRef(source, key, defaultValue) {
    const val = source[key];
    return $67e6adf7fe63e8dd$export$4f9f5282de18fc69(val) ? val : new $67e6adf7fe63e8dd$var$ObjectRefImpl(source, key, defaultValue);
}
const $67e6adf7fe63e8dd$export$2ac2bd0a56e04551 = {
    "GET": "get",
    "HAS": "has",
    "ITERATE": "iterate"
};
const $67e6adf7fe63e8dd$export$1e8941c92696a26 = {
    "SET": "set",
    "ADD": "add",
    "DELETE": "delete",
    "CLEAR": "clear"
};
const $67e6adf7fe63e8dd$var$stack$1 = [];
function $67e6adf7fe63e8dd$var$pushWarningContext(vnode) {
    $67e6adf7fe63e8dd$var$stack$1.push(vnode);
}
function $67e6adf7fe63e8dd$var$popWarningContext() {
    $67e6adf7fe63e8dd$var$stack$1.pop();
}
function $67e6adf7fe63e8dd$var$warn$1(msg, ...args) {
    $67e6adf7fe63e8dd$var$pauseTracking();
    const instance = $67e6adf7fe63e8dd$var$stack$1.length ? $67e6adf7fe63e8dd$var$stack$1[$67e6adf7fe63e8dd$var$stack$1.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = $67e6adf7fe63e8dd$var$getComponentTrace();
    if (appWarnHandler) $67e6adf7fe63e8dd$export$b22fcaf88446e9bf(appWarnHandler, instance, 11, [
        msg + args.join(""),
        instance && instance.proxy,
        trace.map(({ vnode: vnode })=>`at <${$67e6adf7fe63e8dd$var$formatComponentName(instance, vnode.type)}>`).join("\n"),
        trace
    ]);
    else {
        const warnArgs = [
            `[Vue warn]: ${msg}`,
            ...args
        ];
        if (trace.length && // avoid spamming console during tests
        true) warnArgs.push(`
`, ...$67e6adf7fe63e8dd$var$formatTrace(trace));
        console.warn(...warnArgs);
    }
    $67e6adf7fe63e8dd$var$resetTracking();
}
function $67e6adf7fe63e8dd$var$getComponentTrace() {
    let currentVNode = $67e6adf7fe63e8dd$var$stack$1[$67e6adf7fe63e8dd$var$stack$1.length - 1];
    if (!currentVNode) return [];
    const normalizedStack = [];
    while(currentVNode){
        const last = normalizedStack[0];
        if (last && last.vnode === currentVNode) last.recurseCount++;
        else normalizedStack.push({
            vnode: currentVNode,
            recurseCount: 0
        });
        const parentInstance = currentVNode.component && currentVNode.component.parent;
        currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
}
function $67e6adf7fe63e8dd$var$formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i)=>{
        logs.push(...i === 0 ? [] : [
            `
`
        ], ...$67e6adf7fe63e8dd$var$formatTraceEntry(entry));
    });
    return logs;
}
function $67e6adf7fe63e8dd$var$formatTraceEntry({ vnode: vnode, recurseCount: recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${$67e6adf7fe63e8dd$var$formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props ? [
        open,
        ...$67e6adf7fe63e8dd$var$formatProps(vnode.props),
        close
    ] : [
        open + close
    ];
}
function $67e6adf7fe63e8dd$var$formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach((key)=>{
        res.push(...$67e6adf7fe63e8dd$var$formatProp(key, props[key]));
    });
    if (keys.length > 3) res.push(` ...`);
    return res;
}
function $67e6adf7fe63e8dd$var$formatProp(key, value, raw) {
    if ($67e6adf7fe63e8dd$var$isString(value)) {
        value = JSON.stringify(value);
        return raw ? value : [
            `${key}=${value}`
        ];
    } else if (typeof value === "number" || typeof value === "boolean" || value == null) return raw ? value : [
        `${key}=${value}`
    ];
    else if ($67e6adf7fe63e8dd$export$4f9f5282de18fc69(value)) {
        value = $67e6adf7fe63e8dd$var$formatProp(key, $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(value.value), true);
        return raw ? value : [
            `${key}=Ref<`,
            value,
            `>`
        ];
    } else if ($67e6adf7fe63e8dd$var$isFunction(value)) return [
        `${key}=fn${value.name ? `<${value.name}>` : ``}`
    ];
    else {
        value = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(value);
        return raw ? value : [
            `${key}=`,
            value
        ];
    }
}
function $67e6adf7fe63e8dd$export$dfbcecb440255e4a(val, type) {
    if (val === void 0) return;
    else if (typeof val !== "number") $67e6adf7fe63e8dd$var$warn$1(`${type} is not a valid number - got ${JSON.stringify(val)}.`);
    else if (isNaN(val)) $67e6adf7fe63e8dd$var$warn$1(`${type} is NaN - the duration expression might be incorrect.`);
}
const $67e6adf7fe63e8dd$export$10e8e1cf990558d7 = {
    "SETUP_FUNCTION": 0,
    "0": "SETUP_FUNCTION",
    "RENDER_FUNCTION": 1,
    "1": "RENDER_FUNCTION",
    "WATCH_GETTER": 2,
    "2": "WATCH_GETTER",
    "WATCH_CALLBACK": 3,
    "3": "WATCH_CALLBACK",
    "WATCH_CLEANUP": 4,
    "4": "WATCH_CLEANUP",
    "NATIVE_EVENT_HANDLER": 5,
    "5": "NATIVE_EVENT_HANDLER",
    "COMPONENT_EVENT_HANDLER": 6,
    "6": "COMPONENT_EVENT_HANDLER",
    "VNODE_HOOK": 7,
    "7": "VNODE_HOOK",
    "DIRECTIVE_HOOK": 8,
    "8": "DIRECTIVE_HOOK",
    "TRANSITION_HOOK": 9,
    "9": "TRANSITION_HOOK",
    "APP_ERROR_HANDLER": 10,
    "10": "APP_ERROR_HANDLER",
    "APP_WARN_HANDLER": 11,
    "11": "APP_WARN_HANDLER",
    "FUNCTION_REF": 12,
    "12": "FUNCTION_REF",
    "ASYNC_COMPONENT_LOADER": 13,
    "13": "ASYNC_COMPONENT_LOADER",
    "SCHEDULER": 14,
    "14": "SCHEDULER"
};
const $67e6adf7fe63e8dd$var$ErrorTypeStrings$1 = {
    ["sp"]: "serverPrefetch hook",
    ["bc"]: "beforeCreate hook",
    ["c"]: "created hook",
    ["bm"]: "beforeMount hook",
    ["m"]: "mounted hook",
    ["bu"]: "beforeUpdate hook",
    ["u"]: "updated",
    ["bum"]: "beforeUnmount hook",
    ["um"]: "unmounted hook",
    ["a"]: "activated hook",
    ["da"]: "deactivated hook",
    ["ec"]: "errorCaptured hook",
    ["rtc"]: "renderTracked hook",
    ["rtg"]: "renderTriggered hook",
    [0]: "setup function",
    [1]: "render function",
    [2]: "watcher getter",
    [3]: "watcher callback",
    [4]: "watcher cleanup function",
    [5]: "native event handler",
    [6]: "component event handler",
    [7]: "vnode hook",
    [8]: "directive hook",
    [9]: "transition hook",
    [10]: "app errorHandler",
    [11]: "app warnHandler",
    [12]: "ref function",
    [13]: "async component loader",
    [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function $67e6adf7fe63e8dd$export$b22fcaf88446e9bf(fn, instance, type, args) {
    let res;
    try {
        res = args ? fn(...args) : fn();
    } catch (err) {
        $67e6adf7fe63e8dd$export$d3da1ecaf1206c58(err, instance, type);
    }
    return res;
}
function $67e6adf7fe63e8dd$export$dae85862a8d94378(fn, instance, type, args) {
    if ($67e6adf7fe63e8dd$var$isFunction(fn)) {
        const res = $67e6adf7fe63e8dd$export$b22fcaf88446e9bf(fn, instance, type, args);
        if (res && $67e6adf7fe63e8dd$var$isPromise(res)) res.catch((err)=>{
            $67e6adf7fe63e8dd$export$d3da1ecaf1206c58(err, instance, type);
        });
        return res;
    }
    const values = [];
    for(let i = 0; i < fn.length; i++)values.push($67e6adf7fe63e8dd$export$dae85862a8d94378(fn[i], instance, type, args));
    return values;
}
function $67e6adf7fe63e8dd$export$d3da1ecaf1206c58(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
        let cur = instance.parent;
        const exposedInstance = instance.proxy;
        const errorInfo = $67e6adf7fe63e8dd$var$ErrorTypeStrings$1[type];
        while(cur){
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) for(let i = 0; i < errorCapturedHooks.length; i++){
                if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) return;
            }
            cur = cur.parent;
        }
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
            $67e6adf7fe63e8dd$export$b22fcaf88446e9bf(appErrorHandler, null, 10, [
                err,
                exposedInstance,
                errorInfo
            ]);
            return;
        }
    }
    $67e6adf7fe63e8dd$var$logError(err, type, contextVNode, throwInDev);
}
function $67e6adf7fe63e8dd$var$logError(err, type, contextVNode, throwInDev = true) {
    {
        const info = $67e6adf7fe63e8dd$var$ErrorTypeStrings$1[type];
        if (contextVNode) $67e6adf7fe63e8dd$var$pushWarningContext(contextVNode);
        $67e6adf7fe63e8dd$var$warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
        if (contextVNode) $67e6adf7fe63e8dd$var$popWarningContext();
        if (throwInDev) throw err;
        else console.error(err);
    }
}
let $67e6adf7fe63e8dd$var$isFlushing = false;
let $67e6adf7fe63e8dd$var$isFlushPending = false;
const $67e6adf7fe63e8dd$var$queue = [];
let $67e6adf7fe63e8dd$var$flushIndex = 0;
const $67e6adf7fe63e8dd$var$pendingPostFlushCbs = [];
let $67e6adf7fe63e8dd$var$activePostFlushCbs = null;
let $67e6adf7fe63e8dd$var$postFlushIndex = 0;
const $67e6adf7fe63e8dd$var$resolvedPromise = /* @__PURE__ */ Promise.resolve();
let $67e6adf7fe63e8dd$var$currentFlushPromise = null;
const $67e6adf7fe63e8dd$var$RECURSION_LIMIT = 100;
function $67e6adf7fe63e8dd$export$bdd553fddd433dcb(fn) {
    const p = $67e6adf7fe63e8dd$var$currentFlushPromise || $67e6adf7fe63e8dd$var$resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
function $67e6adf7fe63e8dd$var$findInsertionIndex(id) {
    let start = $67e6adf7fe63e8dd$var$flushIndex + 1;
    let end = $67e6adf7fe63e8dd$var$queue.length;
    while(start < end){
        const middle = start + end >>> 1;
        const middleJob = $67e6adf7fe63e8dd$var$queue[middle];
        const middleJobId = $67e6adf7fe63e8dd$var$getId(middleJob);
        if (middleJobId < id || middleJobId === id && middleJob.pre) start = middle + 1;
        else end = middle;
    }
    return start;
}
function $67e6adf7fe63e8dd$var$queueJob(job) {
    if (!$67e6adf7fe63e8dd$var$queue.length || !$67e6adf7fe63e8dd$var$queue.includes(job, $67e6adf7fe63e8dd$var$isFlushing && job.allowRecurse ? $67e6adf7fe63e8dd$var$flushIndex + 1 : $67e6adf7fe63e8dd$var$flushIndex)) {
        if (job.id == null) $67e6adf7fe63e8dd$var$queue.push(job);
        else $67e6adf7fe63e8dd$var$queue.splice($67e6adf7fe63e8dd$var$findInsertionIndex(job.id), 0, job);
        $67e6adf7fe63e8dd$var$queueFlush();
    }
}
function $67e6adf7fe63e8dd$var$queueFlush() {
    if (!$67e6adf7fe63e8dd$var$isFlushing && !$67e6adf7fe63e8dd$var$isFlushPending) {
        $67e6adf7fe63e8dd$var$isFlushPending = true;
        $67e6adf7fe63e8dd$var$currentFlushPromise = $67e6adf7fe63e8dd$var$resolvedPromise.then($67e6adf7fe63e8dd$var$flushJobs);
    }
}
function $67e6adf7fe63e8dd$var$invalidateJob(job) {
    const i = $67e6adf7fe63e8dd$var$queue.indexOf(job);
    if (i > $67e6adf7fe63e8dd$var$flushIndex) $67e6adf7fe63e8dd$var$queue.splice(i, 1);
}
function $67e6adf7fe63e8dd$export$59536a0199721cab(cb) {
    if (!$67e6adf7fe63e8dd$var$isArray(cb)) {
        if (!$67e6adf7fe63e8dd$var$activePostFlushCbs || !$67e6adf7fe63e8dd$var$activePostFlushCbs.includes(cb, cb.allowRecurse ? $67e6adf7fe63e8dd$var$postFlushIndex + 1 : $67e6adf7fe63e8dd$var$postFlushIndex)) $67e6adf7fe63e8dd$var$pendingPostFlushCbs.push(cb);
    } else $67e6adf7fe63e8dd$var$pendingPostFlushCbs.push(...cb);
    $67e6adf7fe63e8dd$var$queueFlush();
}
function $67e6adf7fe63e8dd$var$flushPreFlushCbs(instance, seen, i = $67e6adf7fe63e8dd$var$isFlushing ? $67e6adf7fe63e8dd$var$flushIndex + 1 : 0) {
    seen = seen || /* @__PURE__ */ new Map();
    for(; i < $67e6adf7fe63e8dd$var$queue.length; i++){
        const cb = $67e6adf7fe63e8dd$var$queue[i];
        if (cb && cb.pre) {
            if (instance && cb.id !== instance.uid) continue;
            if ($67e6adf7fe63e8dd$var$checkRecursiveUpdates(seen, cb)) continue;
            $67e6adf7fe63e8dd$var$queue.splice(i, 1);
            i--;
            cb();
        }
    }
}
function $67e6adf7fe63e8dd$var$flushPostFlushCbs(seen) {
    if ($67e6adf7fe63e8dd$var$pendingPostFlushCbs.length) {
        const deduped = [
            ...new Set($67e6adf7fe63e8dd$var$pendingPostFlushCbs)
        ];
        $67e6adf7fe63e8dd$var$pendingPostFlushCbs.length = 0;
        if ($67e6adf7fe63e8dd$var$activePostFlushCbs) {
            $67e6adf7fe63e8dd$var$activePostFlushCbs.push(...deduped);
            return;
        }
        $67e6adf7fe63e8dd$var$activePostFlushCbs = deduped;
        seen = seen || /* @__PURE__ */ new Map();
        $67e6adf7fe63e8dd$var$activePostFlushCbs.sort((a, b)=>$67e6adf7fe63e8dd$var$getId(a) - $67e6adf7fe63e8dd$var$getId(b));
        for($67e6adf7fe63e8dd$var$postFlushIndex = 0; $67e6adf7fe63e8dd$var$postFlushIndex < $67e6adf7fe63e8dd$var$activePostFlushCbs.length; $67e6adf7fe63e8dd$var$postFlushIndex++){
            if ($67e6adf7fe63e8dd$var$checkRecursiveUpdates(seen, $67e6adf7fe63e8dd$var$activePostFlushCbs[$67e6adf7fe63e8dd$var$postFlushIndex])) continue;
            $67e6adf7fe63e8dd$var$activePostFlushCbs[$67e6adf7fe63e8dd$var$postFlushIndex]();
        }
        $67e6adf7fe63e8dd$var$activePostFlushCbs = null;
        $67e6adf7fe63e8dd$var$postFlushIndex = 0;
    }
}
const $67e6adf7fe63e8dd$var$getId = (job)=>job.id == null ? Infinity : job.id;
const $67e6adf7fe63e8dd$var$comparator = (a, b)=>{
    const diff = $67e6adf7fe63e8dd$var$getId(a) - $67e6adf7fe63e8dd$var$getId(b);
    if (diff === 0) {
        if (a.pre && !b.pre) return -1;
        if (b.pre && !a.pre) return 1;
    }
    return diff;
};
function $67e6adf7fe63e8dd$var$flushJobs(seen) {
    $67e6adf7fe63e8dd$var$isFlushPending = false;
    $67e6adf7fe63e8dd$var$isFlushing = true;
    seen = seen || /* @__PURE__ */ new Map();
    $67e6adf7fe63e8dd$var$queue.sort($67e6adf7fe63e8dd$var$comparator);
    const check = (job)=>$67e6adf7fe63e8dd$var$checkRecursiveUpdates(seen, job);
    try {
        for($67e6adf7fe63e8dd$var$flushIndex = 0; $67e6adf7fe63e8dd$var$flushIndex < $67e6adf7fe63e8dd$var$queue.length; $67e6adf7fe63e8dd$var$flushIndex++){
            const job = $67e6adf7fe63e8dd$var$queue[$67e6adf7fe63e8dd$var$flushIndex];
            if (job && job.active !== false) {
                if (check(job)) continue;
                $67e6adf7fe63e8dd$export$b22fcaf88446e9bf(job, null, 14);
            }
        }
    } finally{
        $67e6adf7fe63e8dd$var$flushIndex = 0;
        $67e6adf7fe63e8dd$var$queue.length = 0;
        $67e6adf7fe63e8dd$var$flushPostFlushCbs(seen);
        $67e6adf7fe63e8dd$var$isFlushing = false;
        $67e6adf7fe63e8dd$var$currentFlushPromise = null;
        if ($67e6adf7fe63e8dd$var$queue.length || $67e6adf7fe63e8dd$var$pendingPostFlushCbs.length) $67e6adf7fe63e8dd$var$flushJobs(seen);
    }
}
function $67e6adf7fe63e8dd$var$checkRecursiveUpdates(seen, fn) {
    if (!seen.has(fn)) seen.set(fn, 1);
    else {
        const count = seen.get(fn);
        if (count > $67e6adf7fe63e8dd$var$RECURSION_LIMIT) {
            const instance = fn.ownerInstance;
            const componentName = instance && $67e6adf7fe63e8dd$var$getComponentName(instance.type);
            $67e6adf7fe63e8dd$export$d3da1ecaf1206c58(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`, null, 10);
            return true;
        } else seen.set(fn, count + 1);
    }
}
let $67e6adf7fe63e8dd$var$isHmrUpdating = false;
const $67e6adf7fe63e8dd$var$hmrDirtyComponents = /* @__PURE__ */ new Set();
$67e6adf7fe63e8dd$var$getGlobalThis().__VUE_HMR_RUNTIME__ = {
    createRecord: $67e6adf7fe63e8dd$var$tryWrap($67e6adf7fe63e8dd$var$createRecord),
    rerender: $67e6adf7fe63e8dd$var$tryWrap($67e6adf7fe63e8dd$var$rerender),
    reload: $67e6adf7fe63e8dd$var$tryWrap($67e6adf7fe63e8dd$var$reload)
};
const $67e6adf7fe63e8dd$var$map = /* @__PURE__ */ new Map();
function $67e6adf7fe63e8dd$var$registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = $67e6adf7fe63e8dd$var$map.get(id);
    if (!record) {
        $67e6adf7fe63e8dd$var$createRecord(id, instance.type);
        record = $67e6adf7fe63e8dd$var$map.get(id);
    }
    record.instances.add(instance);
}
function $67e6adf7fe63e8dd$var$unregisterHMR(instance) {
    $67e6adf7fe63e8dd$var$map.get(instance.type.__hmrId).instances.delete(instance);
}
function $67e6adf7fe63e8dd$var$createRecord(id, initialDef) {
    if ($67e6adf7fe63e8dd$var$map.has(id)) return false;
    $67e6adf7fe63e8dd$var$map.set(id, {
        initialDef: $67e6adf7fe63e8dd$var$normalizeClassComponent(initialDef),
        instances: /* @__PURE__ */ new Set()
    });
    return true;
}
function $67e6adf7fe63e8dd$var$normalizeClassComponent(component) {
    return $67e6adf7fe63e8dd$var$isClassComponent(component) ? component.__vccOpts : component;
}
function $67e6adf7fe63e8dd$var$rerender(id, newRender) {
    const record = $67e6adf7fe63e8dd$var$map.get(id);
    if (!record) return;
    record.initialDef.render = newRender;
    [
        ...record.instances
    ].forEach((instance)=>{
        if (newRender) {
            instance.render = newRender;
            $67e6adf7fe63e8dd$var$normalizeClassComponent(instance.type).render = newRender;
        }
        instance.renderCache = [];
        $67e6adf7fe63e8dd$var$isHmrUpdating = true;
        instance.effect.dirty = true;
        instance.update();
        $67e6adf7fe63e8dd$var$isHmrUpdating = false;
    });
}
function $67e6adf7fe63e8dd$var$reload(id, newComp) {
    const record = $67e6adf7fe63e8dd$var$map.get(id);
    if (!record) return;
    newComp = $67e6adf7fe63e8dd$var$normalizeClassComponent(newComp);
    $67e6adf7fe63e8dd$var$updateComponentDef(record.initialDef, newComp);
    const instances = [
        ...record.instances
    ];
    for (const instance of instances){
        const oldComp = $67e6adf7fe63e8dd$var$normalizeClassComponent(instance.type);
        if (!$67e6adf7fe63e8dd$var$hmrDirtyComponents.has(oldComp)) {
            if (oldComp !== record.initialDef) $67e6adf7fe63e8dd$var$updateComponentDef(oldComp, newComp);
            $67e6adf7fe63e8dd$var$hmrDirtyComponents.add(oldComp);
        }
        instance.appContext.propsCache.delete(instance.type);
        instance.appContext.emitsCache.delete(instance.type);
        instance.appContext.optionsCache.delete(instance.type);
        if (instance.ceReload) {
            $67e6adf7fe63e8dd$var$hmrDirtyComponents.add(oldComp);
            instance.ceReload(newComp.styles);
            $67e6adf7fe63e8dd$var$hmrDirtyComponents.delete(oldComp);
        } else if (instance.parent) {
            instance.parent.effect.dirty = true;
            $67e6adf7fe63e8dd$var$queueJob(instance.parent.update);
        } else if (instance.appContext.reload) instance.appContext.reload();
        else if (typeof window !== "undefined") window.location.reload();
        else console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
    }
    $67e6adf7fe63e8dd$export$59536a0199721cab(()=>{
        for (const instance of instances)$67e6adf7fe63e8dd$var$hmrDirtyComponents.delete($67e6adf7fe63e8dd$var$normalizeClassComponent(instance.type));
    });
}
function $67e6adf7fe63e8dd$var$updateComponentDef(oldComp, newComp) {
    $67e6adf7fe63e8dd$var$extend(oldComp, newComp);
    for(const key in oldComp)if (key !== "__file" && !(key in newComp)) delete oldComp[key];
}
function $67e6adf7fe63e8dd$var$tryWrap(fn) {
    return (id, arg)=>{
        try {
            return fn(id, arg);
        } catch (e) {
            console.error(e);
            console.warn(`[HMR] Something went wrong during Vue component hot-reload. Full reload required.`);
        }
    };
}
let $67e6adf7fe63e8dd$var$devtools$1;
let $67e6adf7fe63e8dd$var$buffer = [];
let $67e6adf7fe63e8dd$var$devtoolsNotInstalled = false;
function $67e6adf7fe63e8dd$var$emit$1(event, ...args) {
    if ($67e6adf7fe63e8dd$var$devtools$1) $67e6adf7fe63e8dd$var$devtools$1.emit(event, ...args);
    else if (!$67e6adf7fe63e8dd$var$devtoolsNotInstalled) $67e6adf7fe63e8dd$var$buffer.push({
        event: event,
        args: args
    });
}
function $67e6adf7fe63e8dd$var$setDevtoolsHook$1(hook, target) {
    var _a, _b;
    $67e6adf7fe63e8dd$var$devtools$1 = hook;
    if ($67e6adf7fe63e8dd$var$devtools$1) {
        $67e6adf7fe63e8dd$var$devtools$1.enabled = true;
        $67e6adf7fe63e8dd$var$buffer.forEach(({ event: event, args: args })=>$67e6adf7fe63e8dd$var$devtools$1.emit(event, ...args));
        $67e6adf7fe63e8dd$var$buffer = [];
    } else if (// handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))) {
        const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
        replay.push((newHook)=>{
            $67e6adf7fe63e8dd$var$setDevtoolsHook$1(newHook, target);
        });
        setTimeout(()=>{
            if (!$67e6adf7fe63e8dd$var$devtools$1) {
                target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
                $67e6adf7fe63e8dd$var$devtoolsNotInstalled = true;
                $67e6adf7fe63e8dd$var$buffer = [];
            }
        }, 3e3);
    } else {
        $67e6adf7fe63e8dd$var$devtoolsNotInstalled = true;
        $67e6adf7fe63e8dd$var$buffer = [];
    }
}
function $67e6adf7fe63e8dd$var$devtoolsInitApp(app, version) {
    $67e6adf7fe63e8dd$var$emit$1("app:init" /* APP_INIT */ , app, version, {
        Fragment: $67e6adf7fe63e8dd$export$ffb0004e005737fa,
        Text: $67e6adf7fe63e8dd$export$5f1af8db9871e1d6,
        Comment: $67e6adf7fe63e8dd$export$4d299b491347818a,
        Static: $67e6adf7fe63e8dd$export$c1b9a1d3af45b7b6
    });
}
function $67e6adf7fe63e8dd$var$devtoolsUnmountApp(app) {
    $67e6adf7fe63e8dd$var$emit$1("app:unmount" /* APP_UNMOUNT */ , app);
}
const $67e6adf7fe63e8dd$var$devtoolsComponentAdded = /* @__PURE__ */ $67e6adf7fe63e8dd$var$createDevtoolsComponentHook("component:added" /* COMPONENT_ADDED */ );
const $67e6adf7fe63e8dd$var$devtoolsComponentUpdated = /* @__PURE__ */ $67e6adf7fe63e8dd$var$createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */ );
const $67e6adf7fe63e8dd$var$_devtoolsComponentRemoved = /* @__PURE__ */ $67e6adf7fe63e8dd$var$createDevtoolsComponentHook("component:removed" /* COMPONENT_REMOVED */ );
const $67e6adf7fe63e8dd$var$devtoolsComponentRemoved = (component)=>{
    if ($67e6adf7fe63e8dd$var$devtools$1 && typeof $67e6adf7fe63e8dd$var$devtools$1.cleanupBuffer === "function" && // remove the component if it wasn't buffered
    !$67e6adf7fe63e8dd$var$devtools$1.cleanupBuffer(component)) $67e6adf7fe63e8dd$var$_devtoolsComponentRemoved(component);
};
function $67e6adf7fe63e8dd$var$createDevtoolsComponentHook(hook) {
    return (component)=>{
        $67e6adf7fe63e8dd$var$emit$1(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : void 0, component);
    };
}
const $67e6adf7fe63e8dd$var$devtoolsPerfStart = /* @__PURE__ */ $67e6adf7fe63e8dd$var$createDevtoolsPerformanceHook("perf:start" /* PERFORMANCE_START */ );
const $67e6adf7fe63e8dd$var$devtoolsPerfEnd = /* @__PURE__ */ $67e6adf7fe63e8dd$var$createDevtoolsPerformanceHook("perf:end" /* PERFORMANCE_END */ );
function $67e6adf7fe63e8dd$var$createDevtoolsPerformanceHook(hook) {
    return (component, type, time)=>{
        $67e6adf7fe63e8dd$var$emit$1(hook, component.appContext.app, component.uid, component, type, time);
    };
}
function $67e6adf7fe63e8dd$var$devtoolsComponentEmit(component, event, params) {
    $67e6adf7fe63e8dd$var$emit$1("component:emit" /* COMPONENT_EMIT */ , component.appContext.app, component, event, params);
}
function $67e6adf7fe63e8dd$var$emit(instance, event, ...rawArgs) {
    if (instance.isUnmounted) return;
    const props = instance.vnode.props || $67e6adf7fe63e8dd$var$EMPTY_OBJ;
    {
        const { emitsOptions: emitsOptions, propsOptions: [propsOptions] } = instance;
        if (emitsOptions) {
            if (!(event in emitsOptions) && true) {
                if (!propsOptions || !($67e6adf7fe63e8dd$export$8c022799eeaaefcd(event) in propsOptions)) $67e6adf7fe63e8dd$var$warn$1(`Component emitted event "${event}" but it is neither declared in the emits option nor as an "${$67e6adf7fe63e8dd$export$8c022799eeaaefcd(event)}" prop.`);
            } else {
                const validator = emitsOptions[event];
                if ($67e6adf7fe63e8dd$var$isFunction(validator)) {
                    const isValid = validator(...rawArgs);
                    if (!isValid) $67e6adf7fe63e8dd$var$warn$1(`Invalid event arguments: event validation failed for event "${event}".`);
                }
            }
        }
    }
    let args = rawArgs;
    const isModelListener = event.startsWith("update:");
    const modelArg = isModelListener && event.slice(7);
    if (modelArg && modelArg in props) {
        const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
        const { number: number, trim: trim } = props[modifiersKey] || $67e6adf7fe63e8dd$var$EMPTY_OBJ;
        if (trim) args = rawArgs.map((a)=>$67e6adf7fe63e8dd$var$isString(a) ? a.trim() : a);
        if (number) args = rawArgs.map($67e6adf7fe63e8dd$var$looseToNumber);
    }
    $67e6adf7fe63e8dd$var$devtoolsComponentEmit(instance, event, args);
    {
        const lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && props[$67e6adf7fe63e8dd$export$8c022799eeaaefcd(lowerCaseEvent)]) $67e6adf7fe63e8dd$var$warn$1(`Event "${lowerCaseEvent}" is emitted in component ${$67e6adf7fe63e8dd$var$formatComponentName(instance, instance.type)} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${$67e6adf7fe63e8dd$var$hyphenate(event)}" instead of "${event}".`);
    }
    let handlerName;
    let handler = props[handlerName = $67e6adf7fe63e8dd$export$8c022799eeaaefcd(event)] || // also try camelCase event handler (#2249)
    props[handlerName = $67e6adf7fe63e8dd$export$8c022799eeaaefcd($67e6adf7fe63e8dd$export$161d051f5dd25de7(event))];
    if (!handler && isModelListener) handler = props[handlerName = $67e6adf7fe63e8dd$export$8c022799eeaaefcd($67e6adf7fe63e8dd$var$hyphenate(event))];
    if (handler) $67e6adf7fe63e8dd$export$dae85862a8d94378(handler, instance, 6, args);
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
        if (!instance.emitted) instance.emitted = {};
        else if (instance.emitted[handlerName]) return;
        instance.emitted[handlerName] = true;
        $67e6adf7fe63e8dd$export$dae85862a8d94378(onceHandler, instance, 6, args);
    }
}
function $67e6adf7fe63e8dd$var$normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== void 0) return cached;
    const raw = comp.emits;
    let normalized = {};
    let hasExtends = false;
    if (!$67e6adf7fe63e8dd$var$isFunction(comp)) {
        const extendEmits = (raw2)=>{
            const normalizedFromExtend = $67e6adf7fe63e8dd$var$normalizeEmitsOptions(raw2, appContext, true);
            if (normalizedFromExtend) {
                hasExtends = true;
                $67e6adf7fe63e8dd$var$extend(normalized, normalizedFromExtend);
            }
        };
        if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendEmits);
        if (comp.extends) extendEmits(comp.extends);
        if (comp.mixins) comp.mixins.forEach(extendEmits);
    }
    if (!raw && !hasExtends) {
        if ($67e6adf7fe63e8dd$var$isObject(comp)) cache.set(comp, null);
        return null;
    }
    if ($67e6adf7fe63e8dd$var$isArray(raw)) raw.forEach((key)=>normalized[key] = null);
    else $67e6adf7fe63e8dd$var$extend(normalized, raw);
    if ($67e6adf7fe63e8dd$var$isObject(comp)) cache.set(comp, normalized);
    return normalized;
}
function $67e6adf7fe63e8dd$var$isEmitListener(options, key) {
    if (!options || !$67e6adf7fe63e8dd$var$isOn(key)) return false;
    key = key.slice(2).replace(/Once$/, "");
    return $67e6adf7fe63e8dd$var$hasOwn(options, key[0].toLowerCase() + key.slice(1)) || $67e6adf7fe63e8dd$var$hasOwn(options, $67e6adf7fe63e8dd$var$hyphenate(key)) || $67e6adf7fe63e8dd$var$hasOwn(options, key);
}
let $67e6adf7fe63e8dd$var$currentRenderingInstance = null;
let $67e6adf7fe63e8dd$var$currentScopeId = null;
function $67e6adf7fe63e8dd$var$setCurrentRenderingInstance(instance) {
    const prev = $67e6adf7fe63e8dd$var$currentRenderingInstance;
    $67e6adf7fe63e8dd$var$currentRenderingInstance = instance;
    $67e6adf7fe63e8dd$var$currentScopeId = instance && instance.type.__scopeId || null;
    return prev;
}
function $67e6adf7fe63e8dd$export$ac020265ca2cc4cd(id) {
    $67e6adf7fe63e8dd$var$currentScopeId = id;
}
function $67e6adf7fe63e8dd$export$f2dc6805dc11834e() {
    $67e6adf7fe63e8dd$var$currentScopeId = null;
}
const $67e6adf7fe63e8dd$export$15ba313e13f3dd04 = (_id)=>$67e6adf7fe63e8dd$export$694b237e827a3d23;
function $67e6adf7fe63e8dd$export$694b237e827a3d23(fn, ctx = $67e6adf7fe63e8dd$var$currentRenderingInstance, isNonScopedSlot) {
    if (!ctx) return fn;
    if (fn._n) return fn;
    const renderFnWithContext = (...args)=>{
        if (renderFnWithContext._d) $67e6adf7fe63e8dd$export$c20bee82f26f1e27(-1);
        const prevInstance = $67e6adf7fe63e8dd$var$setCurrentRenderingInstance(ctx);
        let res;
        try {
            res = fn(...args);
        } finally{
            $67e6adf7fe63e8dd$var$setCurrentRenderingInstance(prevInstance);
            if (renderFnWithContext._d) $67e6adf7fe63e8dd$export$c20bee82f26f1e27(1);
        }
        $67e6adf7fe63e8dd$var$devtoolsComponentUpdated(ctx);
        return res;
    };
    renderFnWithContext._n = true;
    renderFnWithContext._c = true;
    renderFnWithContext._d = true;
    return renderFnWithContext;
}
let $67e6adf7fe63e8dd$var$accessedAttrs = false;
function $67e6adf7fe63e8dd$var$markAttrsAccessed() {
    $67e6adf7fe63e8dd$var$accessedAttrs = true;
}
function $67e6adf7fe63e8dd$var$renderComponentRoot(instance) {
    const { type: Component, vnode: vnode, proxy: proxy, withProxy: withProxy, props: props, propsOptions: [propsOptions], slots: slots, attrs: attrs, emit: emit, render: render, renderCache: renderCache, data: data, setupState: setupState, ctx: ctx, inheritAttrs: inheritAttrs } = instance;
    let result;
    let fallthroughAttrs;
    const prev = $67e6adf7fe63e8dd$var$setCurrentRenderingInstance(instance);
    $67e6adf7fe63e8dd$var$accessedAttrs = false;
    try {
        if (vnode.shapeFlag & 4) {
            const proxyToUse = withProxy || proxy;
            const thisProxy = setupState.__isScriptSetup ? new Proxy(proxyToUse, {
                get (target, key, receiver) {
                    $67e6adf7fe63e8dd$var$warn$1(`Property '${String(key)}' was accessed via 'this'. Avoid using 'this' in templates.`);
                    return Reflect.get(target, key, receiver);
                }
            }) : proxyToUse;
            result = $67e6adf7fe63e8dd$var$normalizeVNode(render.call(thisProxy, proxyToUse, renderCache, props, setupState, data, ctx));
            fallthroughAttrs = attrs;
        } else {
            const render2 = Component;
            if (attrs === props) $67e6adf7fe63e8dd$var$markAttrsAccessed();
            result = $67e6adf7fe63e8dd$var$normalizeVNode(render2.length > 1 ? render2(props, {
                get attrs () {
                    $67e6adf7fe63e8dd$var$markAttrsAccessed();
                    return attrs;
                },
                slots: slots,
                emit: emit
            }) : render2(props, null));
            fallthroughAttrs = Component.props ? attrs : $67e6adf7fe63e8dd$var$getFunctionalFallthrough(attrs);
        }
    } catch (err) {
        $67e6adf7fe63e8dd$var$blockStack.length = 0;
        $67e6adf7fe63e8dd$export$d3da1ecaf1206c58(err, instance, 1);
        result = $67e6adf7fe63e8dd$export$bf5c4cf060303d58($67e6adf7fe63e8dd$export$4d299b491347818a);
    }
    let root = result;
    let setRoot = void 0;
    if (result.patchFlag > 0 && result.patchFlag & 2048) [root, setRoot] = $67e6adf7fe63e8dd$var$getChildRoot(result);
    if (fallthroughAttrs && inheritAttrs !== false) {
        const keys = Object.keys(fallthroughAttrs);
        const { shapeFlag: shapeFlag } = root;
        if (keys.length) {
            if (shapeFlag & 7) {
                if (propsOptions && keys.some($67e6adf7fe63e8dd$var$isModelListener)) fallthroughAttrs = $67e6adf7fe63e8dd$var$filterModelListeners(fallthroughAttrs, propsOptions);
                root = $67e6adf7fe63e8dd$export$ee4f9e12c0a92a1a(root, fallthroughAttrs);
            } else if (!$67e6adf7fe63e8dd$var$accessedAttrs && root.type !== $67e6adf7fe63e8dd$export$4d299b491347818a) {
                const allAttrs = Object.keys(attrs);
                const eventAttrs = [];
                const extraAttrs = [];
                for(let i = 0, l = allAttrs.length; i < l; i++){
                    const key = allAttrs[i];
                    if ($67e6adf7fe63e8dd$var$isOn(key)) {
                        if (!$67e6adf7fe63e8dd$var$isModelListener(key)) eventAttrs.push(key[2].toLowerCase() + key.slice(3));
                    } else extraAttrs.push(key);
                }
                if (extraAttrs.length) $67e6adf7fe63e8dd$var$warn$1(`Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`);
                if (eventAttrs.length) $67e6adf7fe63e8dd$var$warn$1(`Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
            }
        }
    }
    if (vnode.dirs) {
        if (!$67e6adf7fe63e8dd$var$isElementRoot(root)) $67e6adf7fe63e8dd$var$warn$1(`Runtime directive used on component with non-element root node. The directives will not function as intended.`);
        root = $67e6adf7fe63e8dd$export$ee4f9e12c0a92a1a(root);
        root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    if (vnode.transition) {
        if (!$67e6adf7fe63e8dd$var$isElementRoot(root)) $67e6adf7fe63e8dd$var$warn$1(`Component inside <Transition> renders non-element root node that cannot be animated.`);
        root.transition = vnode.transition;
    }
    if (setRoot) setRoot(root);
    else result = root;
    $67e6adf7fe63e8dd$var$setCurrentRenderingInstance(prev);
    return result;
}
const $67e6adf7fe63e8dd$var$getChildRoot = (vnode)=>{
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = $67e6adf7fe63e8dd$var$filterSingleRoot(rawChildren);
    if (!childRoot) return [
        vnode,
        void 0
    ];
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot)=>{
        rawChildren[index] = updatedRoot;
        if (dynamicChildren) {
            if (dynamicIndex > -1) dynamicChildren[dynamicIndex] = updatedRoot;
            else if (updatedRoot.patchFlag > 0) vnode.dynamicChildren = [
                ...dynamicChildren,
                updatedRoot
            ];
        }
    };
    return [
        $67e6adf7fe63e8dd$var$normalizeVNode(childRoot),
        setRoot
    ];
};
function $67e6adf7fe63e8dd$var$filterSingleRoot(children) {
    let singleRoot;
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        if ($67e6adf7fe63e8dd$export$3868d13f8734ae81(child)) {
            if (child.type !== $67e6adf7fe63e8dd$export$4d299b491347818a || child.children === "v-if") {
                if (singleRoot) return;
                else singleRoot = child;
            }
        } else return;
    }
    return singleRoot;
}
const $67e6adf7fe63e8dd$var$getFunctionalFallthrough = (attrs)=>{
    let res;
    for(const key in attrs)if (key === "class" || key === "style" || $67e6adf7fe63e8dd$var$isOn(key)) (res || (res = {}))[key] = attrs[key];
    return res;
};
const $67e6adf7fe63e8dd$var$filterModelListeners = (attrs, props)=>{
    const res = {};
    for(const key in attrs)if (!$67e6adf7fe63e8dd$var$isModelListener(key) || !(key.slice(9) in props)) res[key] = attrs[key];
    return res;
};
const $67e6adf7fe63e8dd$var$isElementRoot = (vnode)=>{
    return vnode.shapeFlag & 7 || vnode.type === $67e6adf7fe63e8dd$export$4d299b491347818a;
};
function $67e6adf7fe63e8dd$var$shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component: component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag: patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    if ((prevChildren || nextChildren) && $67e6adf7fe63e8dd$var$isHmrUpdating) return true;
    if (nextVNode.dirs || nextVNode.transition) return true;
    if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024) return true;
        if (patchFlag & 16) {
            if (!prevProps) return !!nextProps;
            return $67e6adf7fe63e8dd$var$hasPropsChanged(prevProps, nextProps, emits);
        } else if (patchFlag & 8) {
            const dynamicProps = nextVNode.dynamicProps;
            for(let i = 0; i < dynamicProps.length; i++){
                const key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key] && !$67e6adf7fe63e8dd$var$isEmitListener(emits, key)) return true;
            }
        }
    } else {
        if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) return true;
        }
        if (prevProps === nextProps) return false;
        if (!prevProps) return !!nextProps;
        if (!nextProps) return true;
        return $67e6adf7fe63e8dd$var$hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
}
function $67e6adf7fe63e8dd$var$hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) return true;
    for(let i = 0; i < nextKeys.length; i++){
        const key = nextKeys[i];
        if (nextProps[key] !== prevProps[key] && !$67e6adf7fe63e8dd$var$isEmitListener(emitsOptions, key)) return true;
    }
    return false;
}
function $67e6adf7fe63e8dd$var$updateHOCHostEl({ vnode: vnode, parent: parent }, el) {
    if (!el) return;
    while(parent){
        const root = parent.subTree;
        if (root.suspense && root.suspense.activeBranch === vnode) root.el = vnode.el;
        if (root === vnode) {
            (vnode = parent.vnode).el = el;
            parent = parent.parent;
        } else break;
    }
}
const $67e6adf7fe63e8dd$var$COMPONENTS = "components";
const $67e6adf7fe63e8dd$var$DIRECTIVES = "directives";
function $67e6adf7fe63e8dd$export$681d65eec9d1d1e8(name, maybeSelfReference) {
    return $67e6adf7fe63e8dd$var$resolveAsset($67e6adf7fe63e8dd$var$COMPONENTS, name, true, maybeSelfReference) || name;
}
const $67e6adf7fe63e8dd$var$NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function $67e6adf7fe63e8dd$export$b44c564a05ca975(component) {
    if ($67e6adf7fe63e8dd$var$isString(component)) return $67e6adf7fe63e8dd$var$resolveAsset($67e6adf7fe63e8dd$var$COMPONENTS, component, false) || component;
    else return component || $67e6adf7fe63e8dd$var$NULL_DYNAMIC_COMPONENT;
}
function $67e6adf7fe63e8dd$export$a1989e995cd481be(name) {
    return $67e6adf7fe63e8dd$var$resolveAsset($67e6adf7fe63e8dd$var$DIRECTIVES, name);
}
function $67e6adf7fe63e8dd$var$resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance = $67e6adf7fe63e8dd$var$currentRenderingInstance || $67e6adf7fe63e8dd$var$currentInstance;
    if (instance) {
        const Component = instance.type;
        if (type === $67e6adf7fe63e8dd$var$COMPONENTS) {
            const selfName = $67e6adf7fe63e8dd$var$getComponentName(Component, false);
            if (selfName && (selfName === name || selfName === $67e6adf7fe63e8dd$export$161d051f5dd25de7(name) || selfName === $67e6adf7fe63e8dd$export$9a00dee1beb8f576($67e6adf7fe63e8dd$export$161d051f5dd25de7(name)))) return Component;
        }
        const res = // local registration
        // check instance[type] first which is resolved for options API
        $67e6adf7fe63e8dd$var$resolve(instance[type] || Component[type], name) || // global registration
        $67e6adf7fe63e8dd$var$resolve(instance.appContext[type], name);
        if (!res && maybeSelfReference) return Component;
        if (warnMissing && !res) {
            const extra = type === $67e6adf7fe63e8dd$var$COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
            $67e6adf7fe63e8dd$var$warn$1(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
        }
        return res;
    } else $67e6adf7fe63e8dd$var$warn$1(`resolve${$67e6adf7fe63e8dd$export$9a00dee1beb8f576(type.slice(0, -1))} can only be used in render() or setup().`);
}
function $67e6adf7fe63e8dd$var$resolve(registry, name) {
    return registry && (registry[name] || registry[$67e6adf7fe63e8dd$export$161d051f5dd25de7(name)] || registry[$67e6adf7fe63e8dd$export$9a00dee1beb8f576($67e6adf7fe63e8dd$export$161d051f5dd25de7(name))]);
}
const $67e6adf7fe63e8dd$var$isSuspense = (type)=>type.__isSuspense;
let $67e6adf7fe63e8dd$var$suspenseId = 0;
const $67e6adf7fe63e8dd$var$SuspenseImpl = {
    name: "Suspense",
    // In order to make Suspense tree-shakable, we need to avoid importing it
    // directly in the renderer. The renderer checks for the __isSuspense flag
    // on a vnode's type and calls the `process` method, passing in renderer
    // internals.
    __isSuspense: true,
    process (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
        if (n1 == null) $67e6adf7fe63e8dd$var$mountSuspense(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals);
        else $67e6adf7fe63e8dd$var$patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, rendererInternals);
    },
    hydrate: $67e6adf7fe63e8dd$var$hydrateSuspense,
    create: $67e6adf7fe63e8dd$var$createSuspenseBoundary,
    normalize: $67e6adf7fe63e8dd$var$normalizeSuspenseChildren
};
const $67e6adf7fe63e8dd$export$74bf444e3cd11ea5 = $67e6adf7fe63e8dd$var$SuspenseImpl;
function $67e6adf7fe63e8dd$var$triggerEvent(vnode, name) {
    const eventListener = vnode.props && vnode.props[name];
    if ($67e6adf7fe63e8dd$var$isFunction(eventListener)) eventListener();
}
function $67e6adf7fe63e8dd$var$mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
    const { p: patch, o: { createElement: createElement } } = rendererInternals;
    const hiddenContainer = createElement("div");
    const suspense = vnode.suspense = $67e6adf7fe63e8dd$var$createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals);
    patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds);
    if (suspense.deps > 0) {
        $67e6adf7fe63e8dd$var$triggerEvent(vnode, "onPending");
        $67e6adf7fe63e8dd$var$triggerEvent(vnode, "onFallback");
        patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        namespace, slotScopeIds);
        $67e6adf7fe63e8dd$var$setActiveBranch(suspense, vnode.ssFallback);
    } else suspense.resolve(false, true);
}
function $67e6adf7fe63e8dd$var$patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement: createElement } }) {
    const suspense = n2.suspense = n1.suspense;
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch: activeBranch, pendingBranch: pendingBranch, isInFallback: isInFallback, isHydrating: isHydrating } = suspense;
    if (pendingBranch) {
        suspense.pendingBranch = newBranch;
        if ($67e6adf7fe63e8dd$var$isSameVNodeType(newBranch, pendingBranch)) {
            patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
            if (suspense.deps <= 0) suspense.resolve();
            else if (isInFallback) {
                if (!isHydrating) {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                    namespace, slotScopeIds, optimized);
                    $67e6adf7fe63e8dd$var$setActiveBranch(suspense, newFallback);
                }
            }
        } else {
            suspense.pendingId = $67e6adf7fe63e8dd$var$suspenseId++;
            if (isHydrating) {
                suspense.isHydrating = false;
                suspense.activeBranch = pendingBranch;
            } else unmount(pendingBranch, parentComponent, suspense);
            suspense.deps = 0;
            suspense.effects.length = 0;
            suspense.hiddenContainer = createElement("div");
            if (isInFallback) {
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
                if (suspense.deps <= 0) suspense.resolve();
                else {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                    namespace, slotScopeIds, optimized);
                    $67e6adf7fe63e8dd$var$setActiveBranch(suspense, newFallback);
                }
            } else if (activeBranch && $67e6adf7fe63e8dd$var$isSameVNodeType(newBranch, activeBranch)) {
                patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, namespace, slotScopeIds, optimized);
                suspense.resolve(true);
            } else {
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
                if (suspense.deps <= 0) suspense.resolve();
            }
        }
    } else if (activeBranch && $67e6adf7fe63e8dd$var$isSameVNodeType(newBranch, activeBranch)) {
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, namespace, slotScopeIds, optimized);
        $67e6adf7fe63e8dd$var$setActiveBranch(suspense, newBranch);
    } else {
        $67e6adf7fe63e8dd$var$triggerEvent(n2, "onPending");
        suspense.pendingBranch = newBranch;
        if (newBranch.shapeFlag & 512) suspense.pendingId = newBranch.component.suspenseId;
        else suspense.pendingId = $67e6adf7fe63e8dd$var$suspenseId++;
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
        if (suspense.deps <= 0) suspense.resolve();
        else {
            const { timeout: timeout, pendingId: pendingId } = suspense;
            if (timeout > 0) setTimeout(()=>{
                if (suspense.pendingId === pendingId) suspense.fallback(newFallback);
            }, timeout);
            else if (timeout === 0) suspense.fallback(newFallback);
        }
    }
}
let $67e6adf7fe63e8dd$var$hasWarned = false;
function $67e6adf7fe63e8dd$var$createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
    if (!$67e6adf7fe63e8dd$var$hasWarned) {
        $67e6adf7fe63e8dd$var$hasWarned = true;
        console[console.info ? "info" : "log"](`<Suspense> is an experimental feature and its API will likely change.`);
    }
    const { p: patch, m: move, um: unmount, n: next, o: { parentNode: parentNode, remove: remove } } = rendererInternals;
    let parentSuspenseId;
    const isSuspensible = $67e6adf7fe63e8dd$var$isVNodeSuspensible(vnode);
    if (isSuspensible) {
        if (parentSuspense == null ? void 0 : parentSuspense.pendingBranch) {
            parentSuspenseId = parentSuspense.pendingId;
            parentSuspense.deps++;
        }
    }
    const timeout = vnode.props ? $67e6adf7fe63e8dd$var$toNumber(vnode.props.timeout) : void 0;
    $67e6adf7fe63e8dd$export$dfbcecb440255e4a(timeout, `Suspense timeout`);
    const suspense = {
        vnode: vnode,
        parent: parentSuspense,
        parentComponent: parentComponent,
        namespace: namespace,
        container: container,
        hiddenContainer: hiddenContainer,
        anchor: anchor,
        deps: 0,
        pendingId: 0,
        timeout: typeof timeout === "number" ? timeout : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !isHydrating,
        isHydrating: isHydrating,
        isUnmounted: false,
        effects: [],
        resolve (resume = false, sync = false) {
            if (!resume && !suspense.pendingBranch) throw new Error(`suspense.resolve() is called without a pending branch.`);
            if (suspense.isUnmounted) throw new Error(`suspense.resolve() is called on an already unmounted suspense boundary.`);
            const { vnode: vnode2, activeBranch: activeBranch, pendingBranch: pendingBranch, pendingId: pendingId, effects: effects, parentComponent: parentComponent2, container: container2 } = suspense;
            let delayEnter = false;
            if (suspense.isHydrating) suspense.isHydrating = false;
            else if (!resume) {
                delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
                if (delayEnter) activeBranch.transition.afterLeave = ()=>{
                    if (pendingId === suspense.pendingId) {
                        move(pendingBranch, container2, next(activeBranch), 0);
                        $67e6adf7fe63e8dd$export$59536a0199721cab(effects);
                    }
                };
                let { anchor: anchor2 } = suspense;
                if (activeBranch) {
                    anchor2 = next(activeBranch);
                    unmount(activeBranch, parentComponent2, suspense, true);
                }
                if (!delayEnter) move(pendingBranch, container2, anchor2, 0);
            }
            $67e6adf7fe63e8dd$var$setActiveBranch(suspense, pendingBranch);
            suspense.pendingBranch = null;
            suspense.isInFallback = false;
            let parent = suspense.parent;
            let hasUnresolvedAncestor = false;
            while(parent){
                if (parent.pendingBranch) {
                    parent.effects.push(...effects);
                    hasUnresolvedAncestor = true;
                    break;
                }
                parent = parent.parent;
            }
            if (!hasUnresolvedAncestor && !delayEnter) $67e6adf7fe63e8dd$export$59536a0199721cab(effects);
            suspense.effects = [];
            if (isSuspensible) {
                if (parentSuspense && parentSuspense.pendingBranch && parentSuspenseId === parentSuspense.pendingId) {
                    parentSuspense.deps--;
                    if (parentSuspense.deps === 0 && !sync) parentSuspense.resolve();
                }
            }
            $67e6adf7fe63e8dd$var$triggerEvent(vnode2, "onResolve");
        },
        fallback (fallbackVNode) {
            if (!suspense.pendingBranch) return;
            const { vnode: vnode2, activeBranch: activeBranch, parentComponent: parentComponent2, container: container2, namespace: namespace2 } = suspense;
            $67e6adf7fe63e8dd$var$triggerEvent(vnode2, "onFallback");
            const anchor2 = next(activeBranch);
            const mountFallback = ()=>{
                if (!suspense.isInFallback) return;
                patch(null, fallbackVNode, container2, anchor2, parentComponent2, null, // fallback tree will not have suspense context
                namespace2, slotScopeIds, optimized);
                $67e6adf7fe63e8dd$var$setActiveBranch(suspense, fallbackVNode);
            };
            const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
            if (delayEnter) activeBranch.transition.afterLeave = mountFallback;
            suspense.isInFallback = true;
            unmount(activeBranch, parentComponent2, null, // no suspense so unmount hooks fire now
            true);
            if (!delayEnter) mountFallback();
        },
        move (container2, anchor2, type) {
            suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type);
            suspense.container = container2;
        },
        next () {
            return suspense.activeBranch && next(suspense.activeBranch);
        },
        registerDep (instance, setupRenderEffect) {
            const isInPendingSuspense = !!suspense.pendingBranch;
            if (isInPendingSuspense) suspense.deps++;
            const hydratedEl = instance.vnode.el;
            instance.asyncDep.catch((err)=>{
                $67e6adf7fe63e8dd$export$d3da1ecaf1206c58(err, instance, 0);
            }).then((asyncSetupResult)=>{
                if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) return;
                instance.asyncResolved = true;
                const { vnode: vnode2 } = instance;
                $67e6adf7fe63e8dd$var$pushWarningContext(vnode2);
                $67e6adf7fe63e8dd$var$handleSetupResult(instance, asyncSetupResult, false);
                if (hydratedEl) vnode2.el = hydratedEl;
                const placeholder = !hydratedEl && instance.subTree.el;
                setupRenderEffect(instance, vnode2, // component may have been moved before resolve.
                // if this is not a hydration, instance.subTree will be the comment
                // placeholder.
                parentNode(hydratedEl || instance.subTree.el), // anchor will not be used if this is hydration, so only need to
                // consider the comment placeholder case.
                hydratedEl ? null : next(instance.subTree), suspense, namespace, optimized);
                if (placeholder) remove(placeholder);
                $67e6adf7fe63e8dd$var$updateHOCHostEl(instance, vnode2.el);
                $67e6adf7fe63e8dd$var$popWarningContext();
                if (isInPendingSuspense && --suspense.deps === 0) suspense.resolve();
            });
        },
        unmount (parentSuspense2, doRemove) {
            suspense.isUnmounted = true;
            if (suspense.activeBranch) unmount(suspense.activeBranch, parentComponent, parentSuspense2, doRemove);
            if (suspense.pendingBranch) unmount(suspense.pendingBranch, parentComponent, parentSuspense2, doRemove);
        }
    };
    return suspense;
}
function $67e6adf7fe63e8dd$var$hydrateSuspense(node, vnode, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals, hydrateNode) {
    const suspense = vnode.suspense = $67e6adf7fe63e8dd$var$createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, // eslint-disable-next-line no-restricted-globals
    document.createElement("div"), null, namespace, slotScopeIds, optimized, rendererInternals, true);
    const result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);
    if (suspense.deps === 0) suspense.resolve(false, true);
    return result;
}
function $67e6adf7fe63e8dd$var$normalizeSuspenseChildren(vnode) {
    const { shapeFlag: shapeFlag, children: children } = vnode;
    const isSlotChildren = shapeFlag & 32;
    vnode.ssContent = $67e6adf7fe63e8dd$var$normalizeSuspenseSlot(isSlotChildren ? children.default : children);
    vnode.ssFallback = isSlotChildren ? $67e6adf7fe63e8dd$var$normalizeSuspenseSlot(children.fallback) : $67e6adf7fe63e8dd$export$bf5c4cf060303d58($67e6adf7fe63e8dd$export$4d299b491347818a);
}
function $67e6adf7fe63e8dd$var$normalizeSuspenseSlot(s) {
    let block;
    if ($67e6adf7fe63e8dd$var$isFunction(s)) {
        const trackBlock = $67e6adf7fe63e8dd$var$isBlockTreeEnabled && s._c;
        if (trackBlock) {
            s._d = false;
            $67e6adf7fe63e8dd$export$e7eaa45e502fe5cc();
        }
        s = s();
        if (trackBlock) {
            s._d = true;
            block = $67e6adf7fe63e8dd$var$currentBlock;
            $67e6adf7fe63e8dd$var$closeBlock();
        }
    }
    if ($67e6adf7fe63e8dd$var$isArray(s)) {
        const singleChild = $67e6adf7fe63e8dd$var$filterSingleRoot(s);
        if (!singleChild && s.filter((child)=>child !== $67e6adf7fe63e8dd$var$NULL_DYNAMIC_COMPONENT).length > 0) $67e6adf7fe63e8dd$var$warn$1(`<Suspense> slots expect a single root node.`);
        s = singleChild;
    }
    s = $67e6adf7fe63e8dd$var$normalizeVNode(s);
    if (block && !s.dynamicChildren) s.dynamicChildren = block.filter((c)=>c !== s);
    return s;
}
function $67e6adf7fe63e8dd$var$queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
        if ($67e6adf7fe63e8dd$var$isArray(fn)) suspense.effects.push(...fn);
        else suspense.effects.push(fn);
    } else $67e6adf7fe63e8dd$export$59536a0199721cab(fn);
}
function $67e6adf7fe63e8dd$var$setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode: vnode, parentComponent: parentComponent } = suspense;
    const el = vnode.el = branch.el;
    if (parentComponent && parentComponent.subTree === vnode) {
        parentComponent.vnode.el = el;
        $67e6adf7fe63e8dd$var$updateHOCHostEl(parentComponent, el);
    }
}
function $67e6adf7fe63e8dd$var$isVNodeSuspensible(vnode) {
    var _a;
    return ((_a = vnode.props) == null ? void 0 : _a.suspensible) != null && vnode.props.suspensible !== false;
}
function $67e6adf7fe63e8dd$export$ede35fc0e5500309(effect, options) {
    return $67e6adf7fe63e8dd$var$doWatch(effect, null, options);
}
function $67e6adf7fe63e8dd$export$b7f27ea67102d543(effect, options) {
    return $67e6adf7fe63e8dd$var$doWatch(effect, null, $67e6adf7fe63e8dd$var$extend({}, options, {
        flush: "post"
    }));
}
function $67e6adf7fe63e8dd$export$2035654f31b0e555(effect, options) {
    return $67e6adf7fe63e8dd$var$doWatch(effect, null, $67e6adf7fe63e8dd$var$extend({}, options, {
        flush: "sync"
    }));
}
const $67e6adf7fe63e8dd$var$INITIAL_WATCHER_VALUE = {};
function $67e6adf7fe63e8dd$export$3db5d71bdb2d5499(source, cb, options) {
    if (!$67e6adf7fe63e8dd$var$isFunction(cb)) $67e6adf7fe63e8dd$var$warn$1(`\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`);
    return $67e6adf7fe63e8dd$var$doWatch(source, cb, options);
}
function $67e6adf7fe63e8dd$var$doWatch(source, cb, { immediate: immediate, deep: deep, flush: flush, once: once, onTrack: onTrack, onTrigger: onTrigger } = $67e6adf7fe63e8dd$var$EMPTY_OBJ) {
    var _a;
    if (cb && once) {
        const _cb = cb;
        cb = (...args)=>{
            _cb(...args);
            unwatch();
        };
    }
    if (!cb) {
        if (immediate !== void 0) $67e6adf7fe63e8dd$var$warn$1(`watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`);
        if (deep !== void 0) $67e6adf7fe63e8dd$var$warn$1(`watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`);
        if (once !== void 0) $67e6adf7fe63e8dd$var$warn$1(`watch() "once" option is only respected when using the watch(source, callback, options?) signature.`);
    }
    const warnInvalidSource = (s)=>{
        $67e6adf7fe63e8dd$var$warn$1(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
    };
    const instance = $67e6adf7fe63e8dd$export$c7be4b0125a10cba() === ((_a = $67e6adf7fe63e8dd$var$currentInstance) == null ? void 0 : _a.scope) ? $67e6adf7fe63e8dd$var$currentInstance : null;
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if ($67e6adf7fe63e8dd$export$4f9f5282de18fc69(source)) {
        getter = ()=>source.value;
        forceTrigger = $67e6adf7fe63e8dd$export$7f3fe6025abfa26e(source);
    } else if ($67e6adf7fe63e8dd$export$352205f445242f02(source)) {
        getter = ()=>source;
        deep = true;
    } else if ($67e6adf7fe63e8dd$var$isArray(source)) {
        isMultiSource = true;
        forceTrigger = source.some((s)=>$67e6adf7fe63e8dd$export$352205f445242f02(s) || $67e6adf7fe63e8dd$export$7f3fe6025abfa26e(s));
        getter = ()=>source.map((s)=>{
                if ($67e6adf7fe63e8dd$export$4f9f5282de18fc69(s)) return s.value;
                else if ($67e6adf7fe63e8dd$export$352205f445242f02(s)) return $67e6adf7fe63e8dd$var$traverse(s);
                else if ($67e6adf7fe63e8dd$var$isFunction(s)) return $67e6adf7fe63e8dd$export$b22fcaf88446e9bf(s, instance, 2);
                else warnInvalidSource(s);
            });
    } else if ($67e6adf7fe63e8dd$var$isFunction(source)) {
        if (cb) getter = ()=>$67e6adf7fe63e8dd$export$b22fcaf88446e9bf(source, instance, 2);
        else getter = ()=>{
            if (instance && instance.isUnmounted) return;
            if (cleanup) cleanup();
            return $67e6adf7fe63e8dd$export$dae85862a8d94378(source, instance, 3, [
                onCleanup
            ]);
        };
    } else {
        getter = $67e6adf7fe63e8dd$var$NOOP;
        warnInvalidSource(source);
    }
    if (cb && deep) {
        const baseGetter = getter;
        getter = ()=>$67e6adf7fe63e8dd$var$traverse(baseGetter());
    }
    let cleanup;
    let onCleanup = (fn)=>{
        cleanup = effect.onStop = ()=>{
            $67e6adf7fe63e8dd$export$b22fcaf88446e9bf(fn, instance, 4);
            cleanup = effect.onStop = void 0;
        };
    };
    let oldValue = isMultiSource ? new Array(source.length).fill($67e6adf7fe63e8dd$var$INITIAL_WATCHER_VALUE) : $67e6adf7fe63e8dd$var$INITIAL_WATCHER_VALUE;
    const job = ()=>{
        if (!effect.active || !effect.dirty) return;
        if (cb) {
            const newValue = effect.run();
            if (deep || forceTrigger || (isMultiSource ? newValue.some((v1, i)=>$67e6adf7fe63e8dd$var$hasChanged(v1, oldValue[i])) : $67e6adf7fe63e8dd$var$hasChanged(newValue, oldValue)) || false) {
                if (cleanup) cleanup();
                $67e6adf7fe63e8dd$export$dae85862a8d94378(cb, instance, 3, [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === $67e6adf7fe63e8dd$var$INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === $67e6adf7fe63e8dd$var$INITIAL_WATCHER_VALUE ? [] : oldValue,
                    onCleanup
                ]);
                oldValue = newValue;
            }
        } else effect.run();
    };
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === "sync") scheduler = job;
    else if (flush === "post") scheduler = ()=>$67e6adf7fe63e8dd$var$queuePostRenderEffect(job, instance && instance.suspense);
    else {
        job.pre = true;
        if (instance) job.id = instance.uid;
        scheduler = ()=>$67e6adf7fe63e8dd$var$queueJob(job);
    }
    const effect = new $67e6adf7fe63e8dd$export$28352bb4dd362521(getter, $67e6adf7fe63e8dd$var$NOOP, scheduler);
    const unwatch = ()=>{
        effect.stop();
        if (instance && instance.scope) $67e6adf7fe63e8dd$var$remove(instance.scope.effects, effect);
    };
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
    if (cb) {
        if (immediate) job();
        else oldValue = effect.run();
    } else if (flush === "post") $67e6adf7fe63e8dd$var$queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
    else effect.run();
    return unwatch;
}
function $67e6adf7fe63e8dd$var$instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = $67e6adf7fe63e8dd$var$isString(source) ? source.includes(".") ? $67e6adf7fe63e8dd$var$createPathGetter(publicThis, source) : ()=>publicThis[source] : source.bind(publicThis, publicThis);
    let cb;
    if ($67e6adf7fe63e8dd$var$isFunction(value)) cb = value;
    else {
        cb = value.handler;
        options = value;
    }
    const cur = $67e6adf7fe63e8dd$var$currentInstance;
    $67e6adf7fe63e8dd$var$setCurrentInstance(this);
    const res = $67e6adf7fe63e8dd$var$doWatch(getter, cb.bind(publicThis), options);
    if (cur) $67e6adf7fe63e8dd$var$setCurrentInstance(cur);
    else $67e6adf7fe63e8dd$var$unsetCurrentInstance();
    return res;
}
function $67e6adf7fe63e8dd$var$createPathGetter(ctx, path) {
    const segments = path.split(".");
    return ()=>{
        let cur = ctx;
        for(let i = 0; i < segments.length && cur; i++)cur = cur[segments[i]];
        return cur;
    };
}
function $67e6adf7fe63e8dd$var$traverse(value, seen) {
    if (!$67e6adf7fe63e8dd$var$isObject(value) || value["__v_skip"]) return value;
    seen = seen || /* @__PURE__ */ new Set();
    if (seen.has(value)) return value;
    seen.add(value);
    if ($67e6adf7fe63e8dd$export$4f9f5282de18fc69(value)) $67e6adf7fe63e8dd$var$traverse(value.value, seen);
    else if ($67e6adf7fe63e8dd$var$isArray(value)) for(let i = 0; i < value.length; i++)$67e6adf7fe63e8dd$var$traverse(value[i], seen);
    else if ($67e6adf7fe63e8dd$var$isSet(value) || $67e6adf7fe63e8dd$var$isMap(value)) value.forEach((v1)=>{
        $67e6adf7fe63e8dd$var$traverse(v1, seen);
    });
    else if ($67e6adf7fe63e8dd$var$isPlainObject(value)) for(const key in value)$67e6adf7fe63e8dd$var$traverse(value[key], seen);
    return value;
}
function $67e6adf7fe63e8dd$var$validateDirectiveName(name) {
    if ($67e6adf7fe63e8dd$var$isBuiltInDirective(name)) $67e6adf7fe63e8dd$var$warn$1("Do not use built-in directive ids as custom directive id: " + name);
}
function $67e6adf7fe63e8dd$export$49729353e7c1e6c5(vnode, directives) {
    const internalInstance = $67e6adf7fe63e8dd$var$currentRenderingInstance;
    if (internalInstance === null) {
        $67e6adf7fe63e8dd$var$warn$1(`withDirectives can only be used inside render functions.`);
        return vnode;
    }
    const instance = $67e6adf7fe63e8dd$var$getExposeProxy(internalInstance) || internalInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for(let i = 0; i < directives.length; i++){
        let [dir, value, arg, modifiers = $67e6adf7fe63e8dd$var$EMPTY_OBJ] = directives[i];
        if (dir) {
            if ($67e6adf7fe63e8dd$var$isFunction(dir)) dir = {
                mounted: dir,
                updated: dir
            };
            if (dir.deep) $67e6adf7fe63e8dd$var$traverse(value);
            bindings.push({
                dir: dir,
                instance: instance,
                value: value,
                oldValue: void 0,
                arg: arg,
                modifiers: modifiers
            });
        }
    }
    return vnode;
}
function $67e6adf7fe63e8dd$var$invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for(let i = 0; i < bindings.length; i++){
        const binding = bindings[i];
        if (oldBindings) binding.oldValue = oldBindings[i].value;
        let hook = binding.dir[name];
        if (hook) {
            $67e6adf7fe63e8dd$var$pauseTracking();
            $67e6adf7fe63e8dd$export$dae85862a8d94378(hook, instance, 8, [
                vnode.el,
                binding,
                vnode,
                prevVNode
            ]);
            $67e6adf7fe63e8dd$var$resetTracking();
        }
    }
}
const $67e6adf7fe63e8dd$var$leaveCbKey = Symbol("_leaveCb");
const $67e6adf7fe63e8dd$var$enterCbKey$1 = Symbol("_enterCb");
function $67e6adf7fe63e8dd$export$d2a0a1bc267c90f6() {
    const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: /* @__PURE__ */ new Map()
    };
    $67e6adf7fe63e8dd$export$6d1641039221b5cb(()=>{
        state.isMounted = true;
    });
    $67e6adf7fe63e8dd$export$40c420df62d2614(()=>{
        state.isUnmounting = true;
    });
    return state;
}
const $67e6adf7fe63e8dd$var$TransitionHookValidator = [
    Function,
    Array
];
const $67e6adf7fe63e8dd$export$b876c99684f8cf3b = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: $67e6adf7fe63e8dd$var$TransitionHookValidator,
    onEnter: $67e6adf7fe63e8dd$var$TransitionHookValidator,
    onAfterEnter: $67e6adf7fe63e8dd$var$TransitionHookValidator,
    onEnterCancelled: $67e6adf7fe63e8dd$var$TransitionHookValidator,
    // leave
    onBeforeLeave: $67e6adf7fe63e8dd$var$TransitionHookValidator,
    onLeave: $67e6adf7fe63e8dd$var$TransitionHookValidator,
    onAfterLeave: $67e6adf7fe63e8dd$var$TransitionHookValidator,
    onLeaveCancelled: $67e6adf7fe63e8dd$var$TransitionHookValidator,
    // appear
    onBeforeAppear: $67e6adf7fe63e8dd$var$TransitionHookValidator,
    onAppear: $67e6adf7fe63e8dd$var$TransitionHookValidator,
    onAfterAppear: $67e6adf7fe63e8dd$var$TransitionHookValidator,
    onAppearCancelled: $67e6adf7fe63e8dd$var$TransitionHookValidator
};
const $67e6adf7fe63e8dd$var$BaseTransitionImpl = {
    name: `BaseTransition`,
    props: $67e6adf7fe63e8dd$export$b876c99684f8cf3b,
    setup (props, { slots: slots }) {
        const instance = $67e6adf7fe63e8dd$export$f13e630aa3915748();
        const state = $67e6adf7fe63e8dd$export$d2a0a1bc267c90f6();
        let prevTransitionKey;
        return ()=>{
            const children = slots.default && $67e6adf7fe63e8dd$export$a67f9b1229c7c97a(slots.default(), true);
            if (!children || !children.length) return;
            let child = children[0];
            if (children.length > 1) {
                let hasFound = false;
                for (const c of children)if (c.type !== $67e6adf7fe63e8dd$export$4d299b491347818a) {
                    if (hasFound) {
                        $67e6adf7fe63e8dd$var$warn$1("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
                        break;
                    }
                    child = c;
                    hasFound = true;
                }
            }
            const rawProps = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(props);
            const { mode: mode } = rawProps;
            if (mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") $67e6adf7fe63e8dd$var$warn$1(`invalid <transition> mode: ${mode}`);
            if (state.isLeaving) return $67e6adf7fe63e8dd$var$emptyPlaceholder(child);
            const innerChild = $67e6adf7fe63e8dd$var$getKeepAliveChild(child);
            if (!innerChild) return $67e6adf7fe63e8dd$var$emptyPlaceholder(child);
            const enterHooks = $67e6adf7fe63e8dd$export$76ac1779589cd824(innerChild, rawProps, state, instance);
            $67e6adf7fe63e8dd$export$7770a22486565649(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && $67e6adf7fe63e8dd$var$getKeepAliveChild(oldChild);
            let transitionKeyChanged = false;
            const { getTransitionKey: getTransitionKey } = innerChild.type;
            if (getTransitionKey) {
                const key = getTransitionKey();
                if (prevTransitionKey === void 0) prevTransitionKey = key;
                else if (key !== prevTransitionKey) {
                    prevTransitionKey = key;
                    transitionKeyChanged = true;
                }
            }
            if (oldInnerChild && oldInnerChild.type !== $67e6adf7fe63e8dd$export$4d299b491347818a && (!$67e6adf7fe63e8dd$var$isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
                const leavingHooks = $67e6adf7fe63e8dd$export$76ac1779589cd824(oldInnerChild, rawProps, state, instance);
                $67e6adf7fe63e8dd$export$7770a22486565649(oldInnerChild, leavingHooks);
                if (mode === "out-in") {
                    state.isLeaving = true;
                    leavingHooks.afterLeave = ()=>{
                        state.isLeaving = false;
                        if (instance.update.active !== false) {
                            instance.effect.dirty = true;
                            instance.update();
                        }
                    };
                    return $67e6adf7fe63e8dd$var$emptyPlaceholder(child);
                } else if (mode === "in-out" && innerChild.type !== $67e6adf7fe63e8dd$export$4d299b491347818a) leavingHooks.delayLeave = (el, earlyRemove, delayedLeave)=>{
                    const leavingVNodesCache = $67e6adf7fe63e8dd$var$getLeavingNodesForType(state, oldInnerChild);
                    leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                    el[$67e6adf7fe63e8dd$var$leaveCbKey] = ()=>{
                        earlyRemove();
                        el[$67e6adf7fe63e8dd$var$leaveCbKey] = void 0;
                        delete enterHooks.delayedLeave;
                    };
                    enterHooks.delayedLeave = delayedLeave;
                };
            }
            return child;
        };
    }
};
const $67e6adf7fe63e8dd$export$abd95b5f5e8a8837 = $67e6adf7fe63e8dd$var$BaseTransitionImpl;
function $67e6adf7fe63e8dd$var$getLeavingNodesForType(state, vnode) {
    const { leavingVNodes: leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
        leavingVNodesCache = /* @__PURE__ */ Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
}
function $67e6adf7fe63e8dd$export$76ac1779589cd824(vnode, props, state, instance) {
    const { appear: appear, mode: mode, persisted: persisted = false, onBeforeEnter: onBeforeEnter, onEnter: onEnter, onAfterEnter: onAfterEnter, onEnterCancelled: onEnterCancelled, onBeforeLeave: onBeforeLeave, onLeave: onLeave, onAfterLeave: onAfterLeave, onLeaveCancelled: onLeaveCancelled, onBeforeAppear: onBeforeAppear, onAppear: onAppear, onAfterAppear: onAfterAppear, onAppearCancelled: onAppearCancelled } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = $67e6adf7fe63e8dd$var$getLeavingNodesForType(state, vnode);
    const callHook = (hook, args)=>{
        hook && $67e6adf7fe63e8dd$export$dae85862a8d94378(hook, instance, 9, args);
    };
    const callAsyncHook = (hook, args)=>{
        const done = args[1];
        callHook(hook, args);
        if ($67e6adf7fe63e8dd$var$isArray(hook)) {
            if (hook.every((hook2)=>hook2.length <= 1)) done();
        } else if (hook.length <= 1) done();
    };
    const hooks = {
        mode: mode,
        persisted: persisted,
        beforeEnter (el) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
                if (appear) hook = onBeforeAppear || onBeforeEnter;
                else return;
            }
            if (el[$67e6adf7fe63e8dd$var$leaveCbKey]) el[$67e6adf7fe63e8dd$var$leaveCbKey](true);
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode && $67e6adf7fe63e8dd$var$isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[$67e6adf7fe63e8dd$var$leaveCbKey]) leavingVNode.el[$67e6adf7fe63e8dd$var$leaveCbKey]();
            callHook(hook, [
                el
            ]);
        },
        enter (el) {
            let hook = onEnter;
            let afterHook = onAfterEnter;
            let cancelHook = onEnterCancelled;
            if (!state.isMounted) {
                if (appear) {
                    hook = onAppear || onEnter;
                    afterHook = onAfterAppear || onAfterEnter;
                    cancelHook = onAppearCancelled || onEnterCancelled;
                } else return;
            }
            let called = false;
            const done = el[$67e6adf7fe63e8dd$var$enterCbKey$1] = (cancelled)=>{
                if (called) return;
                called = true;
                if (cancelled) callHook(cancelHook, [
                    el
                ]);
                else callHook(afterHook, [
                    el
                ]);
                if (hooks.delayedLeave) hooks.delayedLeave();
                el[$67e6adf7fe63e8dd$var$enterCbKey$1] = void 0;
            };
            if (hook) callAsyncHook(hook, [
                el,
                done
            ]);
            else done();
        },
        leave (el, remove) {
            const key2 = String(vnode.key);
            if (el[$67e6adf7fe63e8dd$var$enterCbKey$1]) el[$67e6adf7fe63e8dd$var$enterCbKey$1](true);
            if (state.isUnmounting) return remove();
            callHook(onBeforeLeave, [
                el
            ]);
            let called = false;
            const done = el[$67e6adf7fe63e8dd$var$leaveCbKey] = (cancelled)=>{
                if (called) return;
                called = true;
                remove();
                if (cancelled) callHook(onLeaveCancelled, [
                    el
                ]);
                else callHook(onAfterLeave, [
                    el
                ]);
                el[$67e6adf7fe63e8dd$var$leaveCbKey] = void 0;
                if (leavingVNodesCache[key2] === vnode) delete leavingVNodesCache[key2];
            };
            leavingVNodesCache[key2] = vnode;
            if (onLeave) callAsyncHook(onLeave, [
                el,
                done
            ]);
            else done();
        },
        clone (vnode2) {
            return $67e6adf7fe63e8dd$export$76ac1779589cd824(vnode2, props, state, instance);
        }
    };
    return hooks;
}
function $67e6adf7fe63e8dd$var$emptyPlaceholder(vnode) {
    if ($67e6adf7fe63e8dd$var$isKeepAlive(vnode)) {
        vnode = $67e6adf7fe63e8dd$export$ee4f9e12c0a92a1a(vnode);
        vnode.children = null;
        return vnode;
    }
}
function $67e6adf7fe63e8dd$var$getKeepAliveChild(vnode) {
    return $67e6adf7fe63e8dd$var$isKeepAlive(vnode) ? // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    vnode.component ? vnode.component.subTree : vnode.children ? vnode.children[0] : void 0 : vnode;
}
function $67e6adf7fe63e8dd$export$7770a22486565649(vnode, hooks) {
    if (vnode.shapeFlag & 6 && vnode.component) $67e6adf7fe63e8dd$export$7770a22486565649(vnode.component.subTree, hooks);
    else if (vnode.shapeFlag & 128) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else vnode.transition = hooks;
}
function $67e6adf7fe63e8dd$export$a67f9b1229c7c97a(children, keepComment = false, parentKey) {
    let ret = [];
    let keyedFragmentCount = 0;
    for(let i = 0; i < children.length; i++){
        let child = children[i];
        const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
        if (child.type === $67e6adf7fe63e8dd$export$ffb0004e005737fa) {
            if (child.patchFlag & 128) keyedFragmentCount++;
            ret = ret.concat($67e6adf7fe63e8dd$export$a67f9b1229c7c97a(child.children, keepComment, key));
        } else if (keepComment || child.type !== $67e6adf7fe63e8dd$export$4d299b491347818a) ret.push(key != null ? $67e6adf7fe63e8dd$export$ee4f9e12c0a92a1a(child, {
            key: key
        }) : child);
    }
    if (keyedFragmentCount > 1) for(let i = 0; i < ret.length; i++)ret[i].patchFlag = -2;
    return ret;
}
/*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
function $67e6adf7fe63e8dd$export$afa64b67e5a01c3b(options, extraOptions) {
    return $67e6adf7fe63e8dd$var$isFunction(options) ? // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (()=>$67e6adf7fe63e8dd$var$extend({
            name: options.name
        }, extraOptions, {
            setup: options
        }))() : options;
}
const $67e6adf7fe63e8dd$var$isAsyncWrapper = (i)=>!!i.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
function $67e6adf7fe63e8dd$export$d75d499b4c16cf21(source) {
    if ($67e6adf7fe63e8dd$var$isFunction(source)) source = {
        loader: source
    };
    const { loader: loader, loadingComponent: loadingComponent, errorComponent: errorComponent, delay: delay = 200, timeout: timeout, suspensible: // undefined = never times out
    suspensible = true, onError: userOnError } = source;
    let pendingRequest = null;
    let resolvedComp;
    let retries = 0;
    const retry = ()=>{
        retries++;
        pendingRequest = null;
        return load();
    };
    const load = ()=>{
        let thisRequest;
        return pendingRequest || (thisRequest = pendingRequest = loader().catch((err)=>{
            err = err instanceof Error ? err : new Error(String(err));
            if (userOnError) return new Promise((resolve, reject)=>{
                const userRetry = ()=>resolve(retry());
                const userFail = ()=>reject(err);
                userOnError(err, userRetry, userFail, retries + 1);
            });
            else throw err;
        }).then((comp)=>{
            if (thisRequest !== pendingRequest && pendingRequest) return pendingRequest;
            if (!comp) $67e6adf7fe63e8dd$var$warn$1(`Async component loader resolved to undefined. If you are using retry(), make sure to return its return value.`);
            if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) comp = comp.default;
            if (comp && !$67e6adf7fe63e8dd$var$isObject(comp) && !$67e6adf7fe63e8dd$var$isFunction(comp)) throw new Error(`Invalid async component load result: ${comp}`);
            resolvedComp = comp;
            return comp;
        }));
    };
    return $67e6adf7fe63e8dd$export$afa64b67e5a01c3b({
        name: "AsyncComponentWrapper",
        __asyncLoader: load,
        get __asyncResolved () {
            return resolvedComp;
        },
        setup () {
            const instance = $67e6adf7fe63e8dd$var$currentInstance;
            if (resolvedComp) return ()=>$67e6adf7fe63e8dd$var$createInnerComp(resolvedComp, instance);
            const onError = (err)=>{
                pendingRequest = null;
                $67e6adf7fe63e8dd$export$d3da1ecaf1206c58(err, instance, 13, !errorComponent);
            };
            if (suspensible && instance.suspense || false) return load().then((comp)=>{
                return ()=>$67e6adf7fe63e8dd$var$createInnerComp(comp, instance);
            }).catch((err)=>{
                onError(err);
                return ()=>errorComponent ? $67e6adf7fe63e8dd$export$bf5c4cf060303d58(errorComponent, {
                        error: err
                    }) : null;
            });
            const loaded = $67e6adf7fe63e8dd$export$eff4d24c3ff7876e(false);
            const error = $67e6adf7fe63e8dd$export$eff4d24c3ff7876e();
            const delayed = $67e6adf7fe63e8dd$export$eff4d24c3ff7876e(!!delay);
            if (delay) setTimeout(()=>{
                delayed.value = false;
            }, delay);
            if (timeout != null) setTimeout(()=>{
                if (!loaded.value && !error.value) {
                    const err = new Error(`Async component timed out after ${timeout}ms.`);
                    onError(err);
                    error.value = err;
                }
            }, timeout);
            load().then(()=>{
                loaded.value = true;
                if (instance.parent && $67e6adf7fe63e8dd$var$isKeepAlive(instance.parent.vnode)) {
                    instance.parent.effect.dirty = true;
                    $67e6adf7fe63e8dd$var$queueJob(instance.parent.update);
                }
            }).catch((err)=>{
                onError(err);
                error.value = err;
            });
            return ()=>{
                if (loaded.value && resolvedComp) return $67e6adf7fe63e8dd$var$createInnerComp(resolvedComp, instance);
                else if (error.value && errorComponent) return $67e6adf7fe63e8dd$export$bf5c4cf060303d58(errorComponent, {
                    error: error.value
                });
                else if (loadingComponent && !delayed.value) return $67e6adf7fe63e8dd$export$bf5c4cf060303d58(loadingComponent);
            };
        }
    });
}
function $67e6adf7fe63e8dd$var$createInnerComp(comp, parent) {
    const { ref: ref2, props: props, children: children, ce: ce } = parent.vnode;
    const vnode = $67e6adf7fe63e8dd$export$bf5c4cf060303d58(comp, props, children);
    vnode.ref = ref2;
    vnode.ce = ce;
    delete parent.vnode.ce;
    return vnode;
}
const $67e6adf7fe63e8dd$var$isKeepAlive = (vnode)=>vnode.type.__isKeepAlive;
const $67e6adf7fe63e8dd$var$KeepAliveImpl = {
    name: `KeepAlive`,
    // Marker for special handling inside the renderer. We are not using a ===
    // check directly on KeepAlive in the renderer, because importing it directly
    // would prevent it from being tree-shaken.
    __isKeepAlive: true,
    props: {
        include: [
            String,
            RegExp,
            Array
        ],
        exclude: [
            String,
            RegExp,
            Array
        ],
        max: [
            String,
            Number
        ]
    },
    setup (props, { slots: slots }) {
        const instance = $67e6adf7fe63e8dd$export$f13e630aa3915748();
        const sharedContext = instance.ctx;
        const cache = /* @__PURE__ */ new Map();
        const keys = /* @__PURE__ */ new Set();
        let current = null;
        instance.__v_cache = cache;
        const parentSuspense = instance.suspense;
        const { renderer: { p: patch, m: move, um: _unmount, o: { createElement: createElement } } } = sharedContext;
        const storageContainer = createElement("div");
        sharedContext.activate = (vnode, container, anchor, namespace, optimized)=>{
            const instance2 = vnode.component;
            move(vnode, container, anchor, 0, parentSuspense);
            patch(instance2.vnode, vnode, container, anchor, instance2, parentSuspense, namespace, vnode.slotScopeIds, optimized);
            $67e6adf7fe63e8dd$var$queuePostRenderEffect(()=>{
                instance2.isDeactivated = false;
                if (instance2.a) $67e6adf7fe63e8dd$var$invokeArrayFns(instance2.a);
                const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
                if (vnodeHook) $67e6adf7fe63e8dd$var$invokeVNodeHook(vnodeHook, instance2.parent, vnode);
            }, parentSuspense);
            $67e6adf7fe63e8dd$var$devtoolsComponentAdded(instance2);
        };
        sharedContext.deactivate = (vnode)=>{
            const instance2 = vnode.component;
            move(vnode, storageContainer, null, 1, parentSuspense);
            $67e6adf7fe63e8dd$var$queuePostRenderEffect(()=>{
                if (instance2.da) $67e6adf7fe63e8dd$var$invokeArrayFns(instance2.da);
                const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
                if (vnodeHook) $67e6adf7fe63e8dd$var$invokeVNodeHook(vnodeHook, instance2.parent, vnode);
                instance2.isDeactivated = true;
            }, parentSuspense);
            $67e6adf7fe63e8dd$var$devtoolsComponentAdded(instance2);
        };
        function unmount(vnode) {
            $67e6adf7fe63e8dd$var$resetShapeFlag(vnode);
            _unmount(vnode, instance, parentSuspense, true);
        }
        function pruneCache(filter) {
            cache.forEach((vnode, key)=>{
                const name = $67e6adf7fe63e8dd$var$getComponentName(vnode.type);
                if (name && (!filter || !filter(name))) pruneCacheEntry(key);
            });
        }
        function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || !$67e6adf7fe63e8dd$var$isSameVNodeType(cached, current)) unmount(cached);
            else if (current) $67e6adf7fe63e8dd$var$resetShapeFlag(current);
            cache.delete(key);
            keys.delete(key);
        }
        $67e6adf7fe63e8dd$export$3db5d71bdb2d5499(()=>[
                props.include,
                props.exclude
            ], ([include, exclude])=>{
            include && pruneCache((name)=>$67e6adf7fe63e8dd$var$matches(include, name));
            exclude && pruneCache((name)=>!$67e6adf7fe63e8dd$var$matches(exclude, name));
        }, // prune post-render after `current` has been updated
        {
            flush: "post",
            deep: true
        });
        let pendingCacheKey = null;
        const cacheSubtree = ()=>{
            if (pendingCacheKey != null) cache.set(pendingCacheKey, $67e6adf7fe63e8dd$var$getInnerChild(instance.subTree));
        };
        $67e6adf7fe63e8dd$export$6d1641039221b5cb(cacheSubtree);
        $67e6adf7fe63e8dd$export$5876c47052fb88b1(cacheSubtree);
        $67e6adf7fe63e8dd$export$40c420df62d2614(()=>{
            cache.forEach((cached)=>{
                const { subTree: subTree, suspense: suspense } = instance;
                const vnode = $67e6adf7fe63e8dd$var$getInnerChild(subTree);
                if (cached.type === vnode.type && cached.key === vnode.key) {
                    $67e6adf7fe63e8dd$var$resetShapeFlag(vnode);
                    const da = vnode.component.da;
                    da && $67e6adf7fe63e8dd$var$queuePostRenderEffect(da, suspense);
                    return;
                }
                unmount(cached);
            });
        });
        return ()=>{
            pendingCacheKey = null;
            if (!slots.default) return null;
            const children = slots.default();
            const rawVNode = children[0];
            if (children.length > 1) {
                $67e6adf7fe63e8dd$var$warn$1(`KeepAlive should contain exactly one component child.`);
                current = null;
                return children;
            } else if (!$67e6adf7fe63e8dd$export$3868d13f8734ae81(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
                current = null;
                return rawVNode;
            }
            let vnode = $67e6adf7fe63e8dd$var$getInnerChild(rawVNode);
            const comp = vnode.type;
            const name = $67e6adf7fe63e8dd$var$getComponentName($67e6adf7fe63e8dd$var$isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
            const { include: include, exclude: exclude, max: max } = props;
            if (include && (!name || !$67e6adf7fe63e8dd$var$matches(include, name)) || exclude && name && $67e6adf7fe63e8dd$var$matches(exclude, name)) {
                current = vnode;
                return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            if (vnode.el) {
                vnode = $67e6adf7fe63e8dd$export$ee4f9e12c0a92a1a(vnode);
                if (rawVNode.shapeFlag & 128) rawVNode.ssContent = vnode;
            }
            pendingCacheKey = key;
            if (cachedVNode) {
                vnode.el = cachedVNode.el;
                vnode.component = cachedVNode.component;
                if (vnode.transition) $67e6adf7fe63e8dd$export$7770a22486565649(vnode, vnode.transition);
                vnode.shapeFlag |= 512;
                keys.delete(key);
                keys.add(key);
            } else {
                keys.add(key);
                if (max && keys.size > parseInt(max, 10)) pruneCacheEntry(keys.values().next().value);
            }
            vnode.shapeFlag |= 256;
            current = vnode;
            return $67e6adf7fe63e8dd$var$isSuspense(rawVNode.type) ? rawVNode : vnode;
        };
    }
};
const $67e6adf7fe63e8dd$export$70eb8a58709972df = $67e6adf7fe63e8dd$var$KeepAliveImpl;
function $67e6adf7fe63e8dd$var$matches(pattern, name) {
    if ($67e6adf7fe63e8dd$var$isArray(pattern)) return pattern.some((p)=>$67e6adf7fe63e8dd$var$matches(p, name));
    else if ($67e6adf7fe63e8dd$var$isString(pattern)) return pattern.split(",").includes(name);
    else if ($67e6adf7fe63e8dd$var$isRegExp(pattern)) return pattern.test(name);
    return false;
}
function $67e6adf7fe63e8dd$export$ba52d824b95a2154(hook, target) {
    $67e6adf7fe63e8dd$var$registerKeepAliveHook(hook, "a", target);
}
function $67e6adf7fe63e8dd$export$bf1440eeaf5fa709(hook, target) {
    $67e6adf7fe63e8dd$var$registerKeepAliveHook(hook, "da", target);
}
function $67e6adf7fe63e8dd$var$registerKeepAliveHook(hook, type, target = $67e6adf7fe63e8dd$var$currentInstance) {
    const wrappedHook = hook.__wdc || (hook.__wdc = ()=>{
        let current = target;
        while(current){
            if (current.isDeactivated) return;
            current = current.parent;
        }
        return hook();
    });
    $67e6adf7fe63e8dd$var$injectHook(type, wrappedHook, target);
    if (target) {
        let current = target.parent;
        while(current && current.parent){
            if ($67e6adf7fe63e8dd$var$isKeepAlive(current.parent.vnode)) $67e6adf7fe63e8dd$var$injectToKeepAliveRoot(wrappedHook, type, target, current);
            current = current.parent;
        }
    }
}
function $67e6adf7fe63e8dd$var$injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    const injected = $67e6adf7fe63e8dd$var$injectHook(type, hook, keepAliveRoot, true);
    $67e6adf7fe63e8dd$export$13348a43ccacfe58(()=>{
        $67e6adf7fe63e8dd$var$remove(keepAliveRoot[type], injected);
    }, target);
}
function $67e6adf7fe63e8dd$var$resetShapeFlag(vnode) {
    vnode.shapeFlag &= -257;
    vnode.shapeFlag &= -513;
}
function $67e6adf7fe63e8dd$var$getInnerChild(vnode) {
    return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
}
function $67e6adf7fe63e8dd$var$injectHook(type, hook, target = $67e6adf7fe63e8dd$var$currentInstance, prepend = false) {
    if (target) {
        const hooks = target[type] || (target[type] = []);
        const wrappedHook = hook.__weh || (hook.__weh = (...args)=>{
            if (target.isUnmounted) return;
            $67e6adf7fe63e8dd$var$pauseTracking();
            $67e6adf7fe63e8dd$var$setCurrentInstance(target);
            const res = $67e6adf7fe63e8dd$export$dae85862a8d94378(hook, target, type, args);
            $67e6adf7fe63e8dd$var$unsetCurrentInstance();
            $67e6adf7fe63e8dd$var$resetTracking();
            return res;
        });
        if (prepend) hooks.unshift(wrappedHook);
        else hooks.push(wrappedHook);
        return wrappedHook;
    } else {
        const apiName = $67e6adf7fe63e8dd$export$8c022799eeaaefcd($67e6adf7fe63e8dd$var$ErrorTypeStrings$1[type].replace(/ hook$/, ""));
        $67e6adf7fe63e8dd$var$warn$1(`${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup().` + ` If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
    }
}
const $67e6adf7fe63e8dd$var$createHook = (lifecycle)=>(hook, target = $67e6adf7fe63e8dd$var$currentInstance)=>// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
        (!$67e6adf7fe63e8dd$var$isInSSRComponentSetup || lifecycle === "sp") && $67e6adf7fe63e8dd$var$injectHook(lifecycle, (...args)=>hook(...args), target);
const $67e6adf7fe63e8dd$export$23b7aeb0d671f804 = $67e6adf7fe63e8dd$var$createHook("bm");
const $67e6adf7fe63e8dd$export$6d1641039221b5cb = $67e6adf7fe63e8dd$var$createHook("m");
const $67e6adf7fe63e8dd$export$ab91988a13872e4c = $67e6adf7fe63e8dd$var$createHook("bu");
const $67e6adf7fe63e8dd$export$5876c47052fb88b1 = $67e6adf7fe63e8dd$var$createHook("u");
const $67e6adf7fe63e8dd$export$40c420df62d2614 = $67e6adf7fe63e8dd$var$createHook("bum");
const $67e6adf7fe63e8dd$export$13348a43ccacfe58 = $67e6adf7fe63e8dd$var$createHook("um");
const $67e6adf7fe63e8dd$export$ebf0c601f267bceb = $67e6adf7fe63e8dd$var$createHook("sp");
const $67e6adf7fe63e8dd$export$898295a813d662eb = $67e6adf7fe63e8dd$var$createHook("rtg");
const $67e6adf7fe63e8dd$export$2b41f4235363e921 = $67e6adf7fe63e8dd$var$createHook("rtc");
function $67e6adf7fe63e8dd$export$6a3a15856e50ad19(hook, target = $67e6adf7fe63e8dd$var$currentInstance) {
    $67e6adf7fe63e8dd$var$injectHook("ec", hook, target);
}
function $67e6adf7fe63e8dd$export$4bf387f59bfc6d67(source, renderItem, cache, index) {
    let ret;
    const cached = cache && cache[index];
    if ($67e6adf7fe63e8dd$var$isArray(source) || $67e6adf7fe63e8dd$var$isString(source)) {
        ret = new Array(source.length);
        for(let i = 0, l = source.length; i < l; i++)ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
    } else if (typeof source === "number") {
        if (!Number.isInteger(source)) $67e6adf7fe63e8dd$var$warn$1(`The v-for range expect an integer value but got ${source}.`);
        ret = new Array(source);
        for(let i = 0; i < source; i++)ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    } else if ($67e6adf7fe63e8dd$var$isObject(source)) {
        if (source[Symbol.iterator]) ret = Array.from(source, (item, i)=>renderItem(item, i, void 0, cached && cached[i]));
        else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for(let i = 0, l = keys.length; i < l; i++){
                const key = keys[i];
                ret[i] = renderItem(source[key], key, i, cached && cached[i]);
            }
        }
    } else ret = [];
    if (cache) cache[index] = ret;
    return ret;
}
function $67e6adf7fe63e8dd$export$85738f8fcd0a5430(slots, dynamicSlots) {
    for(let i = 0; i < dynamicSlots.length; i++){
        const slot = dynamicSlots[i];
        if ($67e6adf7fe63e8dd$var$isArray(slot)) for(let j = 0; j < slot.length; j++)slots[slot[j].name] = slot[j].fn;
        else if (slot) slots[slot.name] = slot.key ? (...args)=>{
            const res = slot.fn(...args);
            if (res) res.key = slot.key;
            return res;
        } : slot.fn;
    }
    return slots;
}
function $67e6adf7fe63e8dd$export$4abee4c34694ada1(slots, name, props = {}, fallback, noSlotted) {
    if ($67e6adf7fe63e8dd$var$currentRenderingInstance.isCE || $67e6adf7fe63e8dd$var$currentRenderingInstance.parent && $67e6adf7fe63e8dd$var$isAsyncWrapper($67e6adf7fe63e8dd$var$currentRenderingInstance.parent) && $67e6adf7fe63e8dd$var$currentRenderingInstance.parent.isCE) {
        if (name !== "default") props.name = name;
        return $67e6adf7fe63e8dd$export$bf5c4cf060303d58("slot", props, fallback && fallback());
    }
    let slot = slots[name];
    if (slot && slot.length > 1) {
        $67e6adf7fe63e8dd$var$warn$1(`SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.`);
        slot = ()=>[];
    }
    if (slot && slot._c) slot._d = false;
    $67e6adf7fe63e8dd$export$e7eaa45e502fe5cc();
    const validSlotContent = slot && $67e6adf7fe63e8dd$var$ensureValidVNode(slot(props));
    const rendered = $67e6adf7fe63e8dd$export$9f2dfe8048dfb22b($67e6adf7fe63e8dd$export$ffb0004e005737fa, {
        key: props.key || // slot content array of a dynamic conditional slot may have a branch
        // key attached in the `createSlots` helper, respect that
        validSlotContent && validSlotContent.key || `_${name}`
    }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
    if (!noSlotted && rendered.scopeId) rendered.slotScopeIds = [
        rendered.scopeId + "-s"
    ];
    if (slot && slot._c) slot._d = true;
    return rendered;
}
function $67e6adf7fe63e8dd$var$ensureValidVNode(vnodes) {
    return vnodes.some((child)=>{
        if (!$67e6adf7fe63e8dd$export$3868d13f8734ae81(child)) return true;
        if (child.type === $67e6adf7fe63e8dd$export$4d299b491347818a) return false;
        if (child.type === $67e6adf7fe63e8dd$export$ffb0004e005737fa && !$67e6adf7fe63e8dd$var$ensureValidVNode(child.children)) return false;
        return true;
    }) ? vnodes : null;
}
function $67e6adf7fe63e8dd$export$2fb94ff667a6a1a(obj, preserveCaseIfNecessary) {
    const ret = {};
    if (!$67e6adf7fe63e8dd$var$isObject(obj)) {
        $67e6adf7fe63e8dd$var$warn$1(`v-on with no argument expects an object value.`);
        return ret;
    }
    for(const key in obj)ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : $67e6adf7fe63e8dd$export$8c022799eeaaefcd(key)] = obj[key];
    return ret;
}
const $67e6adf7fe63e8dd$var$getPublicInstance = (i)=>{
    if (!i) return null;
    if ($67e6adf7fe63e8dd$var$isStatefulComponent(i)) return $67e6adf7fe63e8dd$var$getExposeProxy(i) || i.proxy;
    return $67e6adf7fe63e8dd$var$getPublicInstance(i.parent);
};
const $67e6adf7fe63e8dd$var$publicPropertiesMap = // Move PURE marker to new line to workaround compiler discarding it
// due to type annotation
/* @__PURE__ */ $67e6adf7fe63e8dd$var$extend(/* @__PURE__ */ Object.create(null), {
    $: (i)=>i,
    $el: (i)=>i.vnode.el,
    $data: (i)=>i.data,
    $props: (i)=>$67e6adf7fe63e8dd$export$7c4b5f2b50f09f6b(i.props),
    $attrs: (i)=>$67e6adf7fe63e8dd$export$7c4b5f2b50f09f6b(i.attrs),
    $slots: (i)=>$67e6adf7fe63e8dd$export$7c4b5f2b50f09f6b(i.slots),
    $refs: (i)=>$67e6adf7fe63e8dd$export$7c4b5f2b50f09f6b(i.refs),
    $parent: (i)=>$67e6adf7fe63e8dd$var$getPublicInstance(i.parent),
    $root: (i)=>$67e6adf7fe63e8dd$var$getPublicInstance(i.root),
    $emit: (i)=>i.emit,
    $options: (i)=>$67e6adf7fe63e8dd$var$resolveMergedOptions(i),
    $forceUpdate: (i)=>i.f || (i.f = ()=>{
            i.effect.dirty = true;
            $67e6adf7fe63e8dd$var$queueJob(i.update);
        }),
    $nextTick: (i)=>i.n || (i.n = $67e6adf7fe63e8dd$export$bdd553fddd433dcb.bind(i.proxy)),
    $watch: (i)=>$67e6adf7fe63e8dd$var$instanceWatch.bind(i)
});
const $67e6adf7fe63e8dd$var$isReservedPrefix = (key)=>key === "_" || key === "$";
const $67e6adf7fe63e8dd$var$hasSetupBinding = (state, key)=>state !== $67e6adf7fe63e8dd$var$EMPTY_OBJ && !state.__isScriptSetup && $67e6adf7fe63e8dd$var$hasOwn(state, key);
const $67e6adf7fe63e8dd$var$PublicInstanceProxyHandlers = {
    get ({ _: instance }, key) {
        const { ctx: ctx, setupState: setupState, data: data, props: props, accessCache: accessCache, type: type, appContext: appContext } = instance;
        if (key === "__isVue") return true;
        let normalizedProps;
        if (key[0] !== "$") {
            const n = accessCache[key];
            if (n !== void 0) switch(n){
                case 1 /* SETUP */ :
                    return setupState[key];
                case 2 /* DATA */ :
                    return data[key];
                case 4 /* CONTEXT */ :
                    return ctx[key];
                case 3 /* PROPS */ :
                    return props[key];
            }
            else if ($67e6adf7fe63e8dd$var$hasSetupBinding(setupState, key)) {
                accessCache[key] = 1 /* SETUP */ ;
                return setupState[key];
            } else if (data !== $67e6adf7fe63e8dd$var$EMPTY_OBJ && $67e6adf7fe63e8dd$var$hasOwn(data, key)) {
                accessCache[key] = 2 /* DATA */ ;
                return data[key];
            } else if (// only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) && $67e6adf7fe63e8dd$var$hasOwn(normalizedProps, key)) {
                accessCache[key] = 3 /* PROPS */ ;
                return props[key];
            } else if (ctx !== $67e6adf7fe63e8dd$var$EMPTY_OBJ && $67e6adf7fe63e8dd$var$hasOwn(ctx, key)) {
                accessCache[key] = 4 /* CONTEXT */ ;
                return ctx[key];
            } else if ($67e6adf7fe63e8dd$var$shouldCacheAccess) accessCache[key] = 0 /* OTHER */ ;
        }
        const publicGetter = $67e6adf7fe63e8dd$var$publicPropertiesMap[key];
        let cssModule, globalProperties;
        if (publicGetter) {
            if (key === "$attrs") {
                $67e6adf7fe63e8dd$var$track(instance, "get", key);
                $67e6adf7fe63e8dd$var$markAttrsAccessed();
            } else if (key === "$slots") $67e6adf7fe63e8dd$var$track(instance, "get", key);
            return publicGetter(instance);
        } else if (// css module (injected by vue-loader)
        (cssModule = type.__cssModules) && (cssModule = cssModule[key])) return cssModule;
        else if (ctx !== $67e6adf7fe63e8dd$var$EMPTY_OBJ && $67e6adf7fe63e8dd$var$hasOwn(ctx, key)) {
            accessCache[key] = 4 /* CONTEXT */ ;
            return ctx[key];
        } else if (// global properties
        globalProperties = appContext.config.globalProperties, $67e6adf7fe63e8dd$var$hasOwn(globalProperties, key)) return globalProperties[key];
        else if ($67e6adf7fe63e8dd$var$currentRenderingInstance && (!$67e6adf7fe63e8dd$var$isString(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
        // to infinite warning loop
        key.indexOf("__v") !== 0)) {
            if (data !== $67e6adf7fe63e8dd$var$EMPTY_OBJ && $67e6adf7fe63e8dd$var$isReservedPrefix(key[0]) && $67e6adf7fe63e8dd$var$hasOwn(data, key)) $67e6adf7fe63e8dd$var$warn$1(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`);
            else if (instance === $67e6adf7fe63e8dd$var$currentRenderingInstance) $67e6adf7fe63e8dd$var$warn$1(`Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`);
        }
    },
    set ({ _: instance }, key, value) {
        const { data: data, setupState: setupState, ctx: ctx } = instance;
        if ($67e6adf7fe63e8dd$var$hasSetupBinding(setupState, key)) {
            setupState[key] = value;
            return true;
        } else if (setupState.__isScriptSetup && $67e6adf7fe63e8dd$var$hasOwn(setupState, key)) {
            $67e6adf7fe63e8dd$var$warn$1(`Cannot mutate <script setup> binding "${key}" from Options API.`);
            return false;
        } else if (data !== $67e6adf7fe63e8dd$var$EMPTY_OBJ && $67e6adf7fe63e8dd$var$hasOwn(data, key)) {
            data[key] = value;
            return true;
        } else if ($67e6adf7fe63e8dd$var$hasOwn(instance.props, key)) {
            $67e6adf7fe63e8dd$var$warn$1(`Attempting to mutate prop "${key}". Props are readonly.`);
            return false;
        }
        if (key[0] === "$" && key.slice(1) in instance) {
            $67e6adf7fe63e8dd$var$warn$1(`Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`);
            return false;
        } else if (key in instance.appContext.config.globalProperties) Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            value: value
        });
        else ctx[key] = value;
        return true;
    },
    has ({ _: { data: data, setupState: setupState, accessCache: accessCache, ctx: ctx, appContext: appContext, propsOptions: propsOptions } }, key) {
        let normalizedProps;
        return !!accessCache[key] || data !== $67e6adf7fe63e8dd$var$EMPTY_OBJ && $67e6adf7fe63e8dd$var$hasOwn(data, key) || $67e6adf7fe63e8dd$var$hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && $67e6adf7fe63e8dd$var$hasOwn(normalizedProps, key) || $67e6adf7fe63e8dd$var$hasOwn(ctx, key) || $67e6adf7fe63e8dd$var$hasOwn($67e6adf7fe63e8dd$var$publicPropertiesMap, key) || $67e6adf7fe63e8dd$var$hasOwn(appContext.config.globalProperties, key);
    },
    defineProperty (target, key, descriptor) {
        if (descriptor.get != null) target._.accessCache[key] = 0;
        else if ($67e6adf7fe63e8dd$var$hasOwn(descriptor, "value")) this.set(target, key, descriptor.value, null);
        return Reflect.defineProperty(target, key, descriptor);
    }
};
$67e6adf7fe63e8dd$var$PublicInstanceProxyHandlers.ownKeys = (target)=>{
    $67e6adf7fe63e8dd$var$warn$1(`Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`);
    return Reflect.ownKeys(target);
};
const $67e6adf7fe63e8dd$var$RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */ $67e6adf7fe63e8dd$var$extend({}, $67e6adf7fe63e8dd$var$PublicInstanceProxyHandlers, {
    get (target, key) {
        if (key === Symbol.unscopables) return;
        return $67e6adf7fe63e8dd$var$PublicInstanceProxyHandlers.get(target, key, target);
    },
    has (_, key) {
        const has = key[0] !== "_" && !$67e6adf7fe63e8dd$var$isGloballyAllowed(key);
        if (!has && $67e6adf7fe63e8dd$var$PublicInstanceProxyHandlers.has(_, key)) $67e6adf7fe63e8dd$var$warn$1(`Property ${JSON.stringify(key)} should not start with _ which is a reserved prefix for Vue internals.`);
        return has;
    }
});
function $67e6adf7fe63e8dd$var$createDevRenderContext(instance) {
    const target = {};
    Object.defineProperty(target, `_`, {
        configurable: true,
        enumerable: false,
        get: ()=>instance
    });
    Object.keys($67e6adf7fe63e8dd$var$publicPropertiesMap).forEach((key)=>{
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: ()=>$67e6adf7fe63e8dd$var$publicPropertiesMap[key](instance),
            // intercepted by the proxy so no need for implementation,
            // but needed to prevent set errors
            set: $67e6adf7fe63e8dd$var$NOOP
        });
    });
    return target;
}
function $67e6adf7fe63e8dd$var$exposePropsOnRenderContext(instance) {
    const { ctx: ctx, propsOptions: [propsOptions] } = instance;
    if (propsOptions) Object.keys(propsOptions).forEach((key)=>{
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>instance.props[key],
            set: $67e6adf7fe63e8dd$var$NOOP
        });
    });
}
function $67e6adf7fe63e8dd$var$exposeSetupStateOnRenderContext(instance) {
    const { ctx: ctx, setupState: setupState } = instance;
    Object.keys($67e6adf7fe63e8dd$export$ab18938b9fc5f28e(setupState)).forEach((key)=>{
        if (!setupState.__isScriptSetup) {
            if ($67e6adf7fe63e8dd$var$isReservedPrefix(key[0])) {
                $67e6adf7fe63e8dd$var$warn$1(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
                return;
            }
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: ()=>setupState[key],
                set: $67e6adf7fe63e8dd$var$NOOP
            });
        }
    });
}
const $67e6adf7fe63e8dd$var$warnRuntimeUsage = (method)=>$67e6adf7fe63e8dd$var$warn$1(`${method}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
function $67e6adf7fe63e8dd$export$80b33eababae110e() {
    $67e6adf7fe63e8dd$var$warnRuntimeUsage(`defineProps`);
    return null;
}
function $67e6adf7fe63e8dd$export$51ecece22fc17ddc() {
    $67e6adf7fe63e8dd$var$warnRuntimeUsage(`defineEmits`);
    return null;
}
function $67e6adf7fe63e8dd$export$da25b65ca24b518a(exposed) {
    $67e6adf7fe63e8dd$var$warnRuntimeUsage(`defineExpose`);
}
function $67e6adf7fe63e8dd$export$77e79129327f3d0d(options) {
    $67e6adf7fe63e8dd$var$warnRuntimeUsage(`defineOptions`);
}
function $67e6adf7fe63e8dd$export$1b3acd4bb805b712() {
    $67e6adf7fe63e8dd$var$warnRuntimeUsage(`defineSlots`);
    return null;
}
function $67e6adf7fe63e8dd$export$acd55aa037e791bb() {
    $67e6adf7fe63e8dd$var$warnRuntimeUsage("defineModel");
}
function $67e6adf7fe63e8dd$export$4df9c0969a9e0160(props, defaults) {
    $67e6adf7fe63e8dd$var$warnRuntimeUsage(`withDefaults`);
    return null;
}
function $67e6adf7fe63e8dd$export$9203a8e84125433c() {
    return $67e6adf7fe63e8dd$var$getContext().slots;
}
function $67e6adf7fe63e8dd$export$75e29435042cd2ea() {
    return $67e6adf7fe63e8dd$var$getContext().attrs;
}
function $67e6adf7fe63e8dd$export$fb78bd113157f1a1(props, name, options = $67e6adf7fe63e8dd$var$EMPTY_OBJ) {
    const i = $67e6adf7fe63e8dd$export$f13e630aa3915748();
    if (!i) {
        $67e6adf7fe63e8dd$var$warn$1(`useModel() called without active instance.`);
        return $67e6adf7fe63e8dd$export$eff4d24c3ff7876e();
    }
    if (!i.propsOptions[0][name]) {
        $67e6adf7fe63e8dd$var$warn$1(`useModel() called with prop "${name}" which is not declared.`);
        return $67e6adf7fe63e8dd$export$eff4d24c3ff7876e();
    }
    const res = $67e6adf7fe63e8dd$export$a20c2dd6199824cb((track, trigger)=>{
        let localValue;
        $67e6adf7fe63e8dd$export$2035654f31b0e555(()=>{
            const propValue = props[name];
            if ($67e6adf7fe63e8dd$var$hasChanged(localValue, propValue)) {
                localValue = propValue;
                trigger();
            }
        });
        return {
            get () {
                track();
                return options.get ? options.get(localValue) : localValue;
            },
            set (value) {
                const rawProps = i.vnode.props;
                if (!(rawProps && name in rawProps) && $67e6adf7fe63e8dd$var$hasChanged(value, localValue)) {
                    localValue = value;
                    trigger();
                }
                i.emit(`update:${name}`, options.set ? options.set(value) : value);
            }
        };
    });
    const modifierKey = name === "modelValue" ? "modelModifiers" : `${name}Modifiers`;
    res[Symbol.iterator] = ()=>{
        let i2 = 0;
        return {
            next () {
                if (i2 < 2) return {
                    value: i2++ ? props[modifierKey] : res,
                    done: false
                };
                else return {
                    done: true
                };
            }
        };
    };
    return res;
}
function $67e6adf7fe63e8dd$var$getContext() {
    const i = $67e6adf7fe63e8dd$export$f13e630aa3915748();
    if (!i) $67e6adf7fe63e8dd$var$warn$1(`useContext() called without active instance.`);
    return i.setupContext || (i.setupContext = $67e6adf7fe63e8dd$var$createSetupContext(i));
}
function $67e6adf7fe63e8dd$var$normalizePropsOrEmits(props) {
    return $67e6adf7fe63e8dd$var$isArray(props) ? props.reduce((normalized, p)=>(normalized[p] = null, normalized), {}) : props;
}
function $67e6adf7fe63e8dd$export$ec60f47d4a8a2e7f(raw, defaults) {
    const props = $67e6adf7fe63e8dd$var$normalizePropsOrEmits(raw);
    for(const key in defaults){
        if (key.startsWith("__skip")) continue;
        let opt = props[key];
        if (opt) {
            if ($67e6adf7fe63e8dd$var$isArray(opt) || $67e6adf7fe63e8dd$var$isFunction(opt)) opt = props[key] = {
                type: opt,
                default: defaults[key]
            };
            else opt.default = defaults[key];
        } else if (opt === null) opt = props[key] = {
            default: defaults[key]
        };
        else $67e6adf7fe63e8dd$var$warn$1(`props default key "${key}" has no corresponding declaration.`);
        if (opt && defaults[`__skip_${key}`]) opt.skipFactory = true;
    }
    return props;
}
function $67e6adf7fe63e8dd$export$ad4f724f587e6828(a, b) {
    if (!a || !b) return a || b;
    if ($67e6adf7fe63e8dd$var$isArray(a) && $67e6adf7fe63e8dd$var$isArray(b)) return a.concat(b);
    return $67e6adf7fe63e8dd$var$extend({}, $67e6adf7fe63e8dd$var$normalizePropsOrEmits(a), $67e6adf7fe63e8dd$var$normalizePropsOrEmits(b));
}
function $67e6adf7fe63e8dd$export$7c343e855c563faa(props, excludedKeys) {
    const ret = {};
    for(const key in props)if (!excludedKeys.includes(key)) Object.defineProperty(ret, key, {
        enumerable: true,
        get: ()=>props[key]
    });
    return ret;
}
function $67e6adf7fe63e8dd$export$d6d6f7369f1fb104(getAwaitable) {
    const ctx = $67e6adf7fe63e8dd$export$f13e630aa3915748();
    if (!ctx) $67e6adf7fe63e8dd$var$warn$1(`withAsyncContext called without active current instance. This is likely a bug.`);
    let awaitable = getAwaitable();
    $67e6adf7fe63e8dd$var$unsetCurrentInstance();
    if ($67e6adf7fe63e8dd$var$isPromise(awaitable)) awaitable = awaitable.catch((e)=>{
        $67e6adf7fe63e8dd$var$setCurrentInstance(ctx);
        throw e;
    });
    return [
        awaitable,
        ()=>$67e6adf7fe63e8dd$var$setCurrentInstance(ctx)
    ];
}
function $67e6adf7fe63e8dd$var$createDuplicateChecker() {
    const cache = /* @__PURE__ */ Object.create(null);
    return (type, key)=>{
        if (cache[key]) $67e6adf7fe63e8dd$var$warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
        else cache[key] = type;
    };
}
let $67e6adf7fe63e8dd$var$shouldCacheAccess = true;
function $67e6adf7fe63e8dd$var$applyOptions(instance) {
    const options = $67e6adf7fe63e8dd$var$resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    $67e6adf7fe63e8dd$var$shouldCacheAccess = false;
    if (options.beforeCreate) $67e6adf7fe63e8dd$var$callHook$1(options.beforeCreate, instance, "bc");
    const { // state
    data: dataOptions, computed: computedOptions, methods: methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, created: // lifecycle
    created, beforeMount: beforeMount, mounted: mounted, beforeUpdate: beforeUpdate, updated: updated, activated: activated, deactivated: deactivated, beforeDestroy: beforeDestroy, beforeUnmount: beforeUnmount, destroyed: destroyed, unmounted: unmounted, render: render, renderTracked: renderTracked, renderTriggered: renderTriggered, errorCaptured: errorCaptured, serverPrefetch: serverPrefetch, expose: // public API
    expose, inheritAttrs: inheritAttrs, components: // assets
    components, directives: directives, filters: filters } = options;
    const checkDuplicateProperties = $67e6adf7fe63e8dd$var$createDuplicateChecker();
    {
        const [propsOptions] = instance.propsOptions;
        if (propsOptions) for(const key in propsOptions)checkDuplicateProperties("Props" /* PROPS */ , key);
    }
    if (injectOptions) $67e6adf7fe63e8dd$var$resolveInjections(injectOptions, ctx, checkDuplicateProperties);
    if (methods) for(const key in methods){
        const methodHandler = methods[key];
        if ($67e6adf7fe63e8dd$var$isFunction(methodHandler)) {
            Object.defineProperty(ctx, key, {
                value: methodHandler.bind(publicThis),
                configurable: true,
                enumerable: true,
                writable: true
            });
            checkDuplicateProperties("Methods" /* METHODS */ , key);
        } else $67e6adf7fe63e8dd$var$warn$1(`Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`);
    }
    if (dataOptions) {
        if (!$67e6adf7fe63e8dd$var$isFunction(dataOptions)) $67e6adf7fe63e8dd$var$warn$1(`The data option must be a function. Plain object usage is no longer supported.`);
        const data = dataOptions.call(publicThis, publicThis);
        if ($67e6adf7fe63e8dd$var$isPromise(data)) $67e6adf7fe63e8dd$var$warn$1(`data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`);
        if (!$67e6adf7fe63e8dd$var$isObject(data)) $67e6adf7fe63e8dd$var$warn$1(`data() should return an object.`);
        else {
            instance.data = $67e6adf7fe63e8dd$export$90a44edba14e47be(data);
            for(const key in data){
                checkDuplicateProperties("Data" /* DATA */ , key);
                if (!$67e6adf7fe63e8dd$var$isReservedPrefix(key[0])) Object.defineProperty(ctx, key, {
                    configurable: true,
                    enumerable: true,
                    get: ()=>data[key],
                    set: $67e6adf7fe63e8dd$var$NOOP
                });
            }
        }
    }
    $67e6adf7fe63e8dd$var$shouldCacheAccess = true;
    if (computedOptions) for(const key in computedOptions){
        const opt = computedOptions[key];
        const get = $67e6adf7fe63e8dd$var$isFunction(opt) ? opt.bind(publicThis, publicThis) : $67e6adf7fe63e8dd$var$isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : $67e6adf7fe63e8dd$var$NOOP;
        if (get === $67e6adf7fe63e8dd$var$NOOP) $67e6adf7fe63e8dd$var$warn$1(`Computed property "${key}" has no getter.`);
        const set = !$67e6adf7fe63e8dd$var$isFunction(opt) && $67e6adf7fe63e8dd$var$isFunction(opt.set) ? opt.set.bind(publicThis) : ()=>{
            $67e6adf7fe63e8dd$var$warn$1(`Write operation failed: computed property "${key}" is readonly.`);
        };
        const c = $67e6adf7fe63e8dd$export$2983e091f1a1e8e2({
            get: get,
            set: set
        });
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>c.value,
            set: (v1)=>c.value = v1
        });
        checkDuplicateProperties("Computed" /* COMPUTED */ , key);
    }
    if (watchOptions) for(const key in watchOptions)$67e6adf7fe63e8dd$var$createWatcher(watchOptions[key], ctx, publicThis, key);
    if (provideOptions) {
        const provides = $67e6adf7fe63e8dd$var$isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
        Reflect.ownKeys(provides).forEach((key)=>{
            $67e6adf7fe63e8dd$export$abe1e183e22e10ad(key, provides[key]);
        });
    }
    if (created) $67e6adf7fe63e8dd$var$callHook$1(created, instance, "c");
    function registerLifecycleHook(register, hook) {
        if ($67e6adf7fe63e8dd$var$isArray(hook)) hook.forEach((_hook)=>register(_hook.bind(publicThis)));
        else if (hook) register(hook.bind(publicThis));
    }
    registerLifecycleHook($67e6adf7fe63e8dd$export$23b7aeb0d671f804, beforeMount);
    registerLifecycleHook($67e6adf7fe63e8dd$export$6d1641039221b5cb, mounted);
    registerLifecycleHook($67e6adf7fe63e8dd$export$ab91988a13872e4c, beforeUpdate);
    registerLifecycleHook($67e6adf7fe63e8dd$export$5876c47052fb88b1, updated);
    registerLifecycleHook($67e6adf7fe63e8dd$export$ba52d824b95a2154, activated);
    registerLifecycleHook($67e6adf7fe63e8dd$export$bf1440eeaf5fa709, deactivated);
    registerLifecycleHook($67e6adf7fe63e8dd$export$6a3a15856e50ad19, errorCaptured);
    registerLifecycleHook($67e6adf7fe63e8dd$export$2b41f4235363e921, renderTracked);
    registerLifecycleHook($67e6adf7fe63e8dd$export$898295a813d662eb, renderTriggered);
    registerLifecycleHook($67e6adf7fe63e8dd$export$40c420df62d2614, beforeUnmount);
    registerLifecycleHook($67e6adf7fe63e8dd$export$13348a43ccacfe58, unmounted);
    registerLifecycleHook($67e6adf7fe63e8dd$export$ebf0c601f267bceb, serverPrefetch);
    if ($67e6adf7fe63e8dd$var$isArray(expose)) {
        if (expose.length) {
            const exposed = instance.exposed || (instance.exposed = {});
            expose.forEach((key)=>{
                Object.defineProperty(exposed, key, {
                    get: ()=>publicThis[key],
                    set: (val)=>publicThis[key] = val
                });
            });
        } else if (!instance.exposed) instance.exposed = {};
    }
    if (render && instance.render === $67e6adf7fe63e8dd$var$NOOP) instance.render = render;
    if (inheritAttrs != null) instance.inheritAttrs = inheritAttrs;
    if (components) instance.components = components;
    if (directives) instance.directives = directives;
}
function $67e6adf7fe63e8dd$var$resolveInjections(injectOptions, ctx, checkDuplicateProperties = $67e6adf7fe63e8dd$var$NOOP) {
    if ($67e6adf7fe63e8dd$var$isArray(injectOptions)) injectOptions = $67e6adf7fe63e8dd$var$normalizeInject(injectOptions);
    for(const key in injectOptions){
        const opt = injectOptions[key];
        let injected;
        if ($67e6adf7fe63e8dd$var$isObject(opt)) {
            if ("default" in opt) injected = $67e6adf7fe63e8dd$export$a976684a0efeb93f(opt.from || key, opt.default, true);
            else injected = $67e6adf7fe63e8dd$export$a976684a0efeb93f(opt.from || key);
        } else injected = $67e6adf7fe63e8dd$export$a976684a0efeb93f(opt);
        if ($67e6adf7fe63e8dd$export$4f9f5282de18fc69(injected)) Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>injected.value,
            set: (v1)=>injected.value = v1
        });
        else ctx[key] = injected;
        checkDuplicateProperties("Inject" /* INJECT */ , key);
    }
}
function $67e6adf7fe63e8dd$var$callHook$1(hook, instance, type) {
    $67e6adf7fe63e8dd$export$dae85862a8d94378($67e6adf7fe63e8dd$var$isArray(hook) ? hook.map((h)=>h.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function $67e6adf7fe63e8dd$var$createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes(".") ? $67e6adf7fe63e8dd$var$createPathGetter(publicThis, key) : ()=>publicThis[key];
    if ($67e6adf7fe63e8dd$var$isString(raw)) {
        const handler = ctx[raw];
        if ($67e6adf7fe63e8dd$var$isFunction(handler)) $67e6adf7fe63e8dd$export$3db5d71bdb2d5499(getter, handler);
        else $67e6adf7fe63e8dd$var$warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
    } else if ($67e6adf7fe63e8dd$var$isFunction(raw)) $67e6adf7fe63e8dd$export$3db5d71bdb2d5499(getter, raw.bind(publicThis));
    else if ($67e6adf7fe63e8dd$var$isObject(raw)) {
        if ($67e6adf7fe63e8dd$var$isArray(raw)) raw.forEach((r)=>$67e6adf7fe63e8dd$var$createWatcher(r, ctx, publicThis, key));
        else {
            const handler = $67e6adf7fe63e8dd$var$isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
            if ($67e6adf7fe63e8dd$var$isFunction(handler)) $67e6adf7fe63e8dd$export$3db5d71bdb2d5499(getter, handler, raw);
            else $67e6adf7fe63e8dd$var$warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
        }
    } else $67e6adf7fe63e8dd$var$warn$1(`Invalid watch option: "${key}"`, raw);
}
function $67e6adf7fe63e8dd$var$resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins: mixins, extends: extendsOptions } = base;
    const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies: optionMergeStrategies } } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) resolved = cached;
    else if (!globalMixins.length && !mixins && !extendsOptions) resolved = base;
    else {
        resolved = {};
        if (globalMixins.length) globalMixins.forEach((m)=>$67e6adf7fe63e8dd$var$mergeOptions(resolved, m, optionMergeStrategies, true));
        $67e6adf7fe63e8dd$var$mergeOptions(resolved, base, optionMergeStrategies);
    }
    if ($67e6adf7fe63e8dd$var$isObject(base)) cache.set(base, resolved);
    return resolved;
}
function $67e6adf7fe63e8dd$var$mergeOptions(to, from, strats, asMixin = false) {
    const { mixins: mixins, extends: extendsOptions } = from;
    if (extendsOptions) $67e6adf7fe63e8dd$var$mergeOptions(to, extendsOptions, strats, true);
    if (mixins) mixins.forEach((m)=>$67e6adf7fe63e8dd$var$mergeOptions(to, m, strats, true));
    for(const key in from)if (asMixin && key === "expose") $67e6adf7fe63e8dd$var$warn$1(`"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`);
    else {
        const strat = $67e6adf7fe63e8dd$var$internalOptionMergeStrats[key] || strats && strats[key];
        to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
    return to;
}
const $67e6adf7fe63e8dd$var$internalOptionMergeStrats = {
    data: $67e6adf7fe63e8dd$var$mergeDataFn,
    props: $67e6adf7fe63e8dd$var$mergeEmitsOrPropsOptions,
    emits: $67e6adf7fe63e8dd$var$mergeEmitsOrPropsOptions,
    // objects
    methods: $67e6adf7fe63e8dd$var$mergeObjectOptions,
    computed: $67e6adf7fe63e8dd$var$mergeObjectOptions,
    // lifecycle
    beforeCreate: $67e6adf7fe63e8dd$var$mergeAsArray$1,
    created: $67e6adf7fe63e8dd$var$mergeAsArray$1,
    beforeMount: $67e6adf7fe63e8dd$var$mergeAsArray$1,
    mounted: $67e6adf7fe63e8dd$var$mergeAsArray$1,
    beforeUpdate: $67e6adf7fe63e8dd$var$mergeAsArray$1,
    updated: $67e6adf7fe63e8dd$var$mergeAsArray$1,
    beforeDestroy: $67e6adf7fe63e8dd$var$mergeAsArray$1,
    beforeUnmount: $67e6adf7fe63e8dd$var$mergeAsArray$1,
    destroyed: $67e6adf7fe63e8dd$var$mergeAsArray$1,
    unmounted: $67e6adf7fe63e8dd$var$mergeAsArray$1,
    activated: $67e6adf7fe63e8dd$var$mergeAsArray$1,
    deactivated: $67e6adf7fe63e8dd$var$mergeAsArray$1,
    errorCaptured: $67e6adf7fe63e8dd$var$mergeAsArray$1,
    serverPrefetch: $67e6adf7fe63e8dd$var$mergeAsArray$1,
    // assets
    components: $67e6adf7fe63e8dd$var$mergeObjectOptions,
    directives: $67e6adf7fe63e8dd$var$mergeObjectOptions,
    // watch
    watch: $67e6adf7fe63e8dd$var$mergeWatchOptions,
    // provide / inject
    provide: $67e6adf7fe63e8dd$var$mergeDataFn,
    inject: $67e6adf7fe63e8dd$var$mergeInject
};
function $67e6adf7fe63e8dd$var$mergeDataFn(to, from) {
    if (!from) return to;
    if (!to) return from;
    return function mergedDataFn() {
        return $67e6adf7fe63e8dd$var$extend($67e6adf7fe63e8dd$var$isFunction(to) ? to.call(this, this) : to, $67e6adf7fe63e8dd$var$isFunction(from) ? from.call(this, this) : from);
    };
}
function $67e6adf7fe63e8dd$var$mergeInject(to, from) {
    return $67e6adf7fe63e8dd$var$mergeObjectOptions($67e6adf7fe63e8dd$var$normalizeInject(to), $67e6adf7fe63e8dd$var$normalizeInject(from));
}
function $67e6adf7fe63e8dd$var$normalizeInject(raw) {
    if ($67e6adf7fe63e8dd$var$isArray(raw)) {
        const res = {};
        for(let i = 0; i < raw.length; i++)res[raw[i]] = raw[i];
        return res;
    }
    return raw;
}
function $67e6adf7fe63e8dd$var$mergeAsArray$1(to, from) {
    return to ? [
        ...new Set([].concat(to, from))
    ] : from;
}
function $67e6adf7fe63e8dd$var$mergeObjectOptions(to, from) {
    return to ? $67e6adf7fe63e8dd$var$extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function $67e6adf7fe63e8dd$var$mergeEmitsOrPropsOptions(to, from) {
    if (to) {
        if ($67e6adf7fe63e8dd$var$isArray(to) && $67e6adf7fe63e8dd$var$isArray(from)) return [
            .../* @__PURE__ */ new Set([
                ...to,
                ...from
            ])
        ];
        return $67e6adf7fe63e8dd$var$extend(/* @__PURE__ */ Object.create(null), $67e6adf7fe63e8dd$var$normalizePropsOrEmits(to), $67e6adf7fe63e8dd$var$normalizePropsOrEmits(from != null ? from : {}));
    } else return from;
}
function $67e6adf7fe63e8dd$var$mergeWatchOptions(to, from) {
    if (!to) return from;
    if (!from) return to;
    const merged = $67e6adf7fe63e8dd$var$extend(/* @__PURE__ */ Object.create(null), to);
    for(const key in from)merged[key] = $67e6adf7fe63e8dd$var$mergeAsArray$1(to[key], from[key]);
    return merged;
}
function $67e6adf7fe63e8dd$var$createAppContext() {
    return {
        app: null,
        config: {
            isNativeTag: $67e6adf7fe63e8dd$var$NO,
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: /* @__PURE__ */ Object.create(null),
        optionsCache: /* @__PURE__ */ new WeakMap(),
        propsCache: /* @__PURE__ */ new WeakMap(),
        emitsCache: /* @__PURE__ */ new WeakMap()
    };
}
let $67e6adf7fe63e8dd$var$uid$1 = 0;
function $67e6adf7fe63e8dd$var$createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
        if (!$67e6adf7fe63e8dd$var$isFunction(rootComponent)) rootComponent = $67e6adf7fe63e8dd$var$extend({}, rootComponent);
        if (rootProps != null && !$67e6adf7fe63e8dd$var$isObject(rootProps)) {
            $67e6adf7fe63e8dd$var$warn$1(`root props passed to app.mount() must be an object.`);
            rootProps = null;
        }
        const context = $67e6adf7fe63e8dd$var$createAppContext();
        const installedPlugins = /* @__PURE__ */ new WeakSet();
        let isMounted = false;
        const app = context.app = {
            _uid: $67e6adf7fe63e8dd$var$uid$1++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            _instance: null,
            version: $67e6adf7fe63e8dd$export$83d89fbfd8236492,
            get config () {
                return context.config;
            },
            set config (v){
                $67e6adf7fe63e8dd$var$warn$1(`app.config cannot be replaced. Modify individual options instead.`);
            },
            use (plugin, ...options) {
                if (installedPlugins.has(plugin)) $67e6adf7fe63e8dd$var$warn$1(`Plugin has already been applied to target app.`);
                else if (plugin && $67e6adf7fe63e8dd$var$isFunction(plugin.install)) {
                    installedPlugins.add(plugin);
                    plugin.install(app, ...options);
                } else if ($67e6adf7fe63e8dd$var$isFunction(plugin)) {
                    installedPlugins.add(plugin);
                    plugin(app, ...options);
                } else $67e6adf7fe63e8dd$var$warn$1(`A plugin must either be a function or an object with an "install" function.`);
                return app;
            },
            mixin (mixin) {
                if (!context.mixins.includes(mixin)) context.mixins.push(mixin);
                else $67e6adf7fe63e8dd$var$warn$1("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
                return app;
            },
            component (name, component) {
                $67e6adf7fe63e8dd$var$validateComponentName(name, context.config);
                if (!component) return context.components[name];
                if (context.components[name]) $67e6adf7fe63e8dd$var$warn$1(`Component "${name}" has already been registered in target app.`);
                context.components[name] = component;
                return app;
            },
            directive (name, directive) {
                $67e6adf7fe63e8dd$var$validateDirectiveName(name);
                if (!directive) return context.directives[name];
                if (context.directives[name]) $67e6adf7fe63e8dd$var$warn$1(`Directive "${name}" has already been registered in target app.`);
                context.directives[name] = directive;
                return app;
            },
            mount (rootContainer, isHydrate, namespace) {
                if (!isMounted) {
                    if (rootContainer.__vue_app__) $67e6adf7fe63e8dd$var$warn$1(`There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`);
                    const vnode = $67e6adf7fe63e8dd$export$bf5c4cf060303d58(rootComponent, rootProps);
                    vnode.appContext = context;
                    if (namespace === true) namespace = "svg";
                    else if (namespace === false) namespace = void 0;
                    context.reload = ()=>{
                        render($67e6adf7fe63e8dd$export$ee4f9e12c0a92a1a(vnode), rootContainer, namespace);
                    };
                    if (isHydrate && hydrate) hydrate(vnode, rootContainer);
                    else render(vnode, rootContainer, namespace);
                    isMounted = true;
                    app._container = rootContainer;
                    rootContainer.__vue_app__ = app;
                    app._instance = vnode.component;
                    $67e6adf7fe63e8dd$var$devtoolsInitApp(app, $67e6adf7fe63e8dd$export$83d89fbfd8236492);
                    return $67e6adf7fe63e8dd$var$getExposeProxy(vnode.component) || vnode.component.proxy;
                } else $67e6adf7fe63e8dd$var$warn$1(`App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``);
            },
            unmount () {
                if (isMounted) {
                    render(null, app._container);
                    app._instance = null;
                    $67e6adf7fe63e8dd$var$devtoolsUnmountApp(app);
                    delete app._container.__vue_app__;
                } else $67e6adf7fe63e8dd$var$warn$1(`Cannot unmount an app that is not mounted.`);
            },
            provide (key, value) {
                if (key in context.provides) $67e6adf7fe63e8dd$var$warn$1(`App already provides property with key "${String(key)}". It will be overwritten with the new value.`);
                context.provides[key] = value;
                return app;
            },
            runWithContext (fn) {
                $67e6adf7fe63e8dd$var$currentApp = app;
                try {
                    return fn();
                } finally{
                    $67e6adf7fe63e8dd$var$currentApp = null;
                }
            }
        };
        return app;
    };
}
let $67e6adf7fe63e8dd$var$currentApp = null;
function $67e6adf7fe63e8dd$export$abe1e183e22e10ad(key, value) {
    if (!$67e6adf7fe63e8dd$var$currentInstance) $67e6adf7fe63e8dd$var$warn$1(`provide() can only be used inside setup().`);
    else {
        let provides = $67e6adf7fe63e8dd$var$currentInstance.provides;
        const parentProvides = $67e6adf7fe63e8dd$var$currentInstance.parent && $67e6adf7fe63e8dd$var$currentInstance.parent.provides;
        if (parentProvides === provides) provides = $67e6adf7fe63e8dd$var$currentInstance.provides = Object.create(parentProvides);
        provides[key] = value;
    }
}
function $67e6adf7fe63e8dd$export$a976684a0efeb93f(key, defaultValue, treatDefaultAsFactory = false) {
    const instance = $67e6adf7fe63e8dd$var$currentInstance || $67e6adf7fe63e8dd$var$currentRenderingInstance;
    if (instance || $67e6adf7fe63e8dd$var$currentApp) {
        const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : $67e6adf7fe63e8dd$var$currentApp._context.provides;
        if (provides && key in provides) return provides[key];
        else if (arguments.length > 1) return treatDefaultAsFactory && $67e6adf7fe63e8dd$var$isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
        else $67e6adf7fe63e8dd$var$warn$1(`injection "${String(key)}" not found.`);
    } else $67e6adf7fe63e8dd$var$warn$1(`inject() can only be used inside setup() or functional components.`);
}
function $67e6adf7fe63e8dd$export$caf6761f24fc571a() {
    return !!($67e6adf7fe63e8dd$var$currentInstance || $67e6adf7fe63e8dd$var$currentRenderingInstance || $67e6adf7fe63e8dd$var$currentApp);
}
function $67e6adf7fe63e8dd$var$initProps(instance, rawProps, isStateful, isSSR = false) {
    const props = {};
    const attrs = {};
    $67e6adf7fe63e8dd$var$def(attrs, $67e6adf7fe63e8dd$var$InternalObjectKey, 1);
    instance.propsDefaults = /* @__PURE__ */ Object.create(null);
    $67e6adf7fe63e8dd$var$setFullProps(instance, rawProps, props, attrs);
    for(const key in instance.propsOptions[0])if (!(key in props)) props[key] = void 0;
    $67e6adf7fe63e8dd$var$validateProps(rawProps || {}, props, instance);
    if (isStateful) instance.props = isSSR ? props : $67e6adf7fe63e8dd$export$8d81cefd22d22260(props);
    else if (!instance.type.props) instance.props = attrs;
    else instance.props = props;
    instance.attrs = attrs;
}
function $67e6adf7fe63e8dd$var$isInHmrContext(instance) {
    while(instance){
        if (instance.type.__hmrId) return true;
        instance = instance.parent;
    }
}
function $67e6adf7fe63e8dd$var$updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props: props, attrs: attrs, vnode: { patchFlag: patchFlag } } = instance;
    const rawCurrentProps = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (// always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !$67e6adf7fe63e8dd$var$isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)) {
        if (patchFlag & 8) {
            const propsToUpdate = instance.vnode.dynamicProps;
            for(let i = 0; i < propsToUpdate.length; i++){
                let key = propsToUpdate[i];
                if ($67e6adf7fe63e8dd$var$isEmitListener(instance.emitsOptions, key)) continue;
                const value = rawProps[key];
                if (options) {
                    if ($67e6adf7fe63e8dd$var$hasOwn(attrs, key)) {
                        if (value !== attrs[key]) {
                            attrs[key] = value;
                            hasAttrsChanged = true;
                        }
                    } else {
                        const camelizedKey = $67e6adf7fe63e8dd$export$161d051f5dd25de7(key);
                        props[camelizedKey] = $67e6adf7fe63e8dd$var$resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
                    }
                } else if (value !== attrs[key]) {
                    attrs[key] = value;
                    hasAttrsChanged = true;
                }
            }
        }
    } else {
        if ($67e6adf7fe63e8dd$var$setFullProps(instance, rawProps, props, attrs)) hasAttrsChanged = true;
        let kebabKey;
        for(const key in rawCurrentProps)if (!rawProps || // for camelCase
        !$67e6adf7fe63e8dd$var$hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
        // and converted to camelCase (#955)
        ((kebabKey = $67e6adf7fe63e8dd$var$hyphenate(key)) === key || !$67e6adf7fe63e8dd$var$hasOwn(rawProps, kebabKey))) {
            if (options) {
                if (rawPrevProps && // for camelCase
                (rawPrevProps[key] !== void 0 || // for kebab-case
                rawPrevProps[kebabKey] !== void 0)) props[key] = $67e6adf7fe63e8dd$var$resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
            } else delete props[key];
        }
        if (attrs !== rawCurrentProps) {
            for(const key in attrs)if (!rawProps || !$67e6adf7fe63e8dd$var$hasOwn(rawProps, key) && true) {
                delete attrs[key];
                hasAttrsChanged = true;
            }
        }
    }
    if (hasAttrsChanged) $67e6adf7fe63e8dd$var$trigger(instance, "set", "$attrs");
    $67e6adf7fe63e8dd$var$validateProps(rawProps || {}, props, instance);
}
function $67e6adf7fe63e8dd$var$setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) for(let key in rawProps){
        if ($67e6adf7fe63e8dd$var$isReservedProp(key)) continue;
        const value = rawProps[key];
        let camelKey;
        if (options && $67e6adf7fe63e8dd$var$hasOwn(options, camelKey = $67e6adf7fe63e8dd$export$161d051f5dd25de7(key))) {
            if (!needCastKeys || !needCastKeys.includes(camelKey)) props[camelKey] = value;
            else (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        } else if (!$67e6adf7fe63e8dd$var$isEmitListener(instance.emitsOptions, key)) {
            if (!(key in attrs) || value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
            }
        }
    }
    if (needCastKeys) {
        const rawCurrentProps = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(props);
        const castValues = rawCastValues || $67e6adf7fe63e8dd$var$EMPTY_OBJ;
        for(let i = 0; i < needCastKeys.length; i++){
            const key = needCastKeys[i];
            props[key] = $67e6adf7fe63e8dd$var$resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !$67e6adf7fe63e8dd$var$hasOwn(castValues, key));
        }
    }
    return hasAttrsChanged;
}
function $67e6adf7fe63e8dd$var$resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
        const hasDefault = $67e6adf7fe63e8dd$var$hasOwn(opt, "default");
        if (hasDefault && value === void 0) {
            const defaultValue = opt.default;
            if (opt.type !== Function && !opt.skipFactory && $67e6adf7fe63e8dd$var$isFunction(defaultValue)) {
                const { propsDefaults: propsDefaults } = instance;
                if (key in propsDefaults) value = propsDefaults[key];
                else {
                    $67e6adf7fe63e8dd$var$setCurrentInstance(instance);
                    value = propsDefaults[key] = defaultValue.call(null, props);
                    $67e6adf7fe63e8dd$var$unsetCurrentInstance();
                }
            } else value = defaultValue;
        }
        if (opt[0 /* shouldCast */ ]) {
            if (isAbsent && !hasDefault) value = false;
            else if (opt[1 /* shouldCastTrue */ ] && (value === "" || value === $67e6adf7fe63e8dd$var$hyphenate(key))) value = true;
        }
    }
    return value;
}
function $67e6adf7fe63e8dd$var$normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) return cached;
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    let hasExtends = false;
    if (!$67e6adf7fe63e8dd$var$isFunction(comp)) {
        const extendProps = (raw2)=>{
            hasExtends = true;
            const [props, keys] = $67e6adf7fe63e8dd$var$normalizePropsOptions(raw2, appContext, true);
            $67e6adf7fe63e8dd$var$extend(normalized, props);
            if (keys) needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendProps);
        if (comp.extends) extendProps(comp.extends);
        if (comp.mixins) comp.mixins.forEach(extendProps);
    }
    if (!raw && !hasExtends) {
        if ($67e6adf7fe63e8dd$var$isObject(comp)) cache.set(comp, $67e6adf7fe63e8dd$var$EMPTY_ARR);
        return $67e6adf7fe63e8dd$var$EMPTY_ARR;
    }
    if ($67e6adf7fe63e8dd$var$isArray(raw)) for(let i = 0; i < raw.length; i++){
        if (!$67e6adf7fe63e8dd$var$isString(raw[i])) $67e6adf7fe63e8dd$var$warn$1(`props must be strings when using array syntax.`, raw[i]);
        const normalizedKey = $67e6adf7fe63e8dd$export$161d051f5dd25de7(raw[i]);
        if ($67e6adf7fe63e8dd$var$validatePropName(normalizedKey)) normalized[normalizedKey] = $67e6adf7fe63e8dd$var$EMPTY_OBJ;
    }
    else if (raw) {
        if (!$67e6adf7fe63e8dd$var$isObject(raw)) $67e6adf7fe63e8dd$var$warn$1(`invalid props options`, raw);
        for(const key in raw){
            const normalizedKey = $67e6adf7fe63e8dd$export$161d051f5dd25de7(key);
            if ($67e6adf7fe63e8dd$var$validatePropName(normalizedKey)) {
                const opt = raw[key];
                const prop = normalized[normalizedKey] = $67e6adf7fe63e8dd$var$isArray(opt) || $67e6adf7fe63e8dd$var$isFunction(opt) ? {
                    type: opt
                } : $67e6adf7fe63e8dd$var$extend({}, opt);
                if (prop) {
                    const booleanIndex = $67e6adf7fe63e8dd$var$getTypeIndex(Boolean, prop.type);
                    const stringIndex = $67e6adf7fe63e8dd$var$getTypeIndex(String, prop.type);
                    prop[0 /* shouldCast */ ] = booleanIndex > -1;
                    prop[1 /* shouldCastTrue */ ] = stringIndex < 0 || booleanIndex < stringIndex;
                    if (booleanIndex > -1 || $67e6adf7fe63e8dd$var$hasOwn(prop, "default")) needCastKeys.push(normalizedKey);
                }
            }
        }
    }
    const res = [
        normalized,
        needCastKeys
    ];
    if ($67e6adf7fe63e8dd$var$isObject(comp)) cache.set(comp, res);
    return res;
}
function $67e6adf7fe63e8dd$var$validatePropName(key) {
    if (key[0] !== "$") return true;
    else $67e6adf7fe63e8dd$var$warn$1(`Invalid prop name: "${key}" is a reserved property.`);
    return false;
}
function $67e6adf7fe63e8dd$var$getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
    return match ? match[2] : ctor === null ? "null" : "";
}
function $67e6adf7fe63e8dd$var$isSameType(a, b) {
    return $67e6adf7fe63e8dd$var$getType(a) === $67e6adf7fe63e8dd$var$getType(b);
}
function $67e6adf7fe63e8dd$var$getTypeIndex(type, expectedTypes) {
    if ($67e6adf7fe63e8dd$var$isArray(expectedTypes)) return expectedTypes.findIndex((t)=>$67e6adf7fe63e8dd$var$isSameType(t, type));
    else if ($67e6adf7fe63e8dd$var$isFunction(expectedTypes)) return $67e6adf7fe63e8dd$var$isSameType(expectedTypes, type) ? 0 : -1;
    return -1;
}
function $67e6adf7fe63e8dd$var$validateProps(rawProps, props, instance) {
    const resolvedValues = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(props);
    const options = instance.propsOptions[0];
    for(const key in options){
        let opt = options[key];
        if (opt == null) continue;
        $67e6adf7fe63e8dd$var$validateProp(key, resolvedValues[key], opt, $67e6adf7fe63e8dd$export$7c4b5f2b50f09f6b(resolvedValues), !$67e6adf7fe63e8dd$var$hasOwn(rawProps, key) && !$67e6adf7fe63e8dd$var$hasOwn(rawProps, $67e6adf7fe63e8dd$var$hyphenate(key)));
    }
}
function $67e6adf7fe63e8dd$var$validateProp(name, value, prop, props, isAbsent) {
    const { type: type, required: required, validator: validator, skipCheck: skipCheck } = prop;
    if (required && isAbsent) {
        $67e6adf7fe63e8dd$var$warn$1('Missing required prop: "' + name + '"');
        return;
    }
    if (value == null && !required) return;
    if (type != null && type !== true && !skipCheck) {
        let isValid = false;
        const types = $67e6adf7fe63e8dd$var$isArray(type) ? type : [
            type
        ];
        const expectedTypes = [];
        for(let i = 0; i < types.length && !isValid; i++){
            const { valid: valid, expectedType: expectedType } = $67e6adf7fe63e8dd$var$assertType(value, types[i]);
            expectedTypes.push(expectedType || "");
            isValid = valid;
        }
        if (!isValid) {
            $67e6adf7fe63e8dd$var$warn$1($67e6adf7fe63e8dd$var$getInvalidTypeMessage(name, value, expectedTypes));
            return;
        }
    }
    if (validator && !validator(value, props)) $67e6adf7fe63e8dd$var$warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
}
const $67e6adf7fe63e8dd$var$isSimpleType = /* @__PURE__ */ $67e6adf7fe63e8dd$var$makeMap("String,Number,Boolean,Function,Symbol,BigInt");
function $67e6adf7fe63e8dd$var$assertType(value, type) {
    let valid;
    const expectedType = $67e6adf7fe63e8dd$var$getType(type);
    if ($67e6adf7fe63e8dd$var$isSimpleType(expectedType)) {
        const t = typeof value;
        valid = t === expectedType.toLowerCase();
        if (!valid && t === "object") valid = value instanceof type;
    } else if (expectedType === "Object") valid = $67e6adf7fe63e8dd$var$isObject(value);
    else if (expectedType === "Array") valid = $67e6adf7fe63e8dd$var$isArray(value);
    else if (expectedType === "null") valid = value === null;
    else valid = value instanceof type;
    return {
        valid: valid,
        expectedType: expectedType
    };
}
function $67e6adf7fe63e8dd$var$getInvalidTypeMessage(name, value, expectedTypes) {
    if (expectedTypes.length === 0) return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
    let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map($67e6adf7fe63e8dd$export$9a00dee1beb8f576).join(" | ")}`;
    const expectedType = expectedTypes[0];
    const receivedType = $67e6adf7fe63e8dd$var$toRawType(value);
    const expectedValue = $67e6adf7fe63e8dd$var$styleValue(value, expectedType);
    const receivedValue = $67e6adf7fe63e8dd$var$styleValue(value, receivedType);
    if (expectedTypes.length === 1 && $67e6adf7fe63e8dd$var$isExplicable(expectedType) && !$67e6adf7fe63e8dd$var$isBoolean(expectedType, receivedType)) message += ` with value ${expectedValue}`;
    message += `, got ${receivedType} `;
    if ($67e6adf7fe63e8dd$var$isExplicable(receivedType)) message += `with value ${receivedValue}.`;
    return message;
}
function $67e6adf7fe63e8dd$var$styleValue(value, type) {
    if (type === "String") return `"${value}"`;
    else if (type === "Number") return `${Number(value)}`;
    else return `${value}`;
}
function $67e6adf7fe63e8dd$var$isExplicable(type) {
    const explicitTypes = [
        "string",
        "number",
        "boolean"
    ];
    return explicitTypes.some((elem)=>type.toLowerCase() === elem);
}
function $67e6adf7fe63e8dd$var$isBoolean(...args) {
    return args.some((elem)=>elem.toLowerCase() === "boolean");
}
const $67e6adf7fe63e8dd$var$isInternalKey = (key)=>key[0] === "_" || key === "$stable";
const $67e6adf7fe63e8dd$var$normalizeSlotValue = (value)=>$67e6adf7fe63e8dd$var$isArray(value) ? value.map($67e6adf7fe63e8dd$var$normalizeVNode) : [
        $67e6adf7fe63e8dd$var$normalizeVNode(value)
    ];
const $67e6adf7fe63e8dd$var$normalizeSlot = (key, rawSlot, ctx)=>{
    if (rawSlot._n) return rawSlot;
    const normalized = $67e6adf7fe63e8dd$export$694b237e827a3d23((...args)=>{
        if ($67e6adf7fe63e8dd$var$currentInstance) $67e6adf7fe63e8dd$var$warn$1(`Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`);
        return $67e6adf7fe63e8dd$var$normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
};
const $67e6adf7fe63e8dd$var$normalizeObjectSlots = (rawSlots, slots, instance)=>{
    const ctx = rawSlots._ctx;
    for(const key in rawSlots){
        if ($67e6adf7fe63e8dd$var$isInternalKey(key)) continue;
        const value = rawSlots[key];
        if ($67e6adf7fe63e8dd$var$isFunction(value)) slots[key] = $67e6adf7fe63e8dd$var$normalizeSlot(key, value, ctx);
        else if (value != null) {
            $67e6adf7fe63e8dd$var$warn$1(`Non-function value encountered for slot "${key}". Prefer function slots for better performance.`);
            const normalized = $67e6adf7fe63e8dd$var$normalizeSlotValue(value);
            slots[key] = ()=>normalized;
        }
    }
};
const $67e6adf7fe63e8dd$var$normalizeVNodeSlots = (instance, children)=>{
    if (!$67e6adf7fe63e8dd$var$isKeepAlive(instance.vnode) && true) $67e6adf7fe63e8dd$var$warn$1(`Non-function value encountered for default slot. Prefer function slots for better performance.`);
    const normalized = $67e6adf7fe63e8dd$var$normalizeSlotValue(children);
    instance.slots.default = ()=>normalized;
};
const $67e6adf7fe63e8dd$var$initSlots = (instance, children)=>{
    if (instance.vnode.shapeFlag & 32) {
        const type = children._;
        if (type) {
            instance.slots = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(children);
            $67e6adf7fe63e8dd$var$def(children, "_", type);
        } else $67e6adf7fe63e8dd$var$normalizeObjectSlots(children, instance.slots = {});
    } else {
        instance.slots = {};
        if (children) $67e6adf7fe63e8dd$var$normalizeVNodeSlots(instance, children);
    }
    $67e6adf7fe63e8dd$var$def(instance.slots, $67e6adf7fe63e8dd$var$InternalObjectKey, 1);
};
const $67e6adf7fe63e8dd$var$updateSlots = (instance, children, optimized)=>{
    const { vnode: vnode, slots: slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = $67e6adf7fe63e8dd$var$EMPTY_OBJ;
    if (vnode.shapeFlag & 32) {
        const type = children._;
        if (type) {
            if ($67e6adf7fe63e8dd$var$isHmrUpdating) {
                $67e6adf7fe63e8dd$var$extend(slots, children);
                $67e6adf7fe63e8dd$var$trigger(instance, "set", "$slots");
            } else if (optimized && type === 1) needDeletionCheck = false;
            else {
                $67e6adf7fe63e8dd$var$extend(slots, children);
                if (!optimized && type === 1) delete slots._;
            }
        } else {
            needDeletionCheck = !children.$stable;
            $67e6adf7fe63e8dd$var$normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
    } else if (children) {
        $67e6adf7fe63e8dd$var$normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = {
            default: 1
        };
    }
    if (needDeletionCheck) {
        for(const key in slots)if (!$67e6adf7fe63e8dd$var$isInternalKey(key) && deletionComparisonTarget[key] == null) delete slots[key];
    }
};
function $67e6adf7fe63e8dd$var$setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if ($67e6adf7fe63e8dd$var$isArray(rawRef)) {
        rawRef.forEach((r, i)=>$67e6adf7fe63e8dd$var$setRef(r, oldRawRef && ($67e6adf7fe63e8dd$var$isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
        return;
    }
    if ($67e6adf7fe63e8dd$var$isAsyncWrapper(vnode) && !isUnmount) return;
    const refValue = vnode.shapeFlag & 4 ? $67e6adf7fe63e8dd$var$getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner, r: ref } = rawRef;
    if (!owner) {
        $67e6adf7fe63e8dd$var$warn$1(`Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`);
        return;
    }
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === $67e6adf7fe63e8dd$var$EMPTY_OBJ ? owner.refs = {} : owner.refs;
    const setupState = owner.setupState;
    if (oldRef != null && oldRef !== ref) {
        if ($67e6adf7fe63e8dd$var$isString(oldRef)) {
            refs[oldRef] = null;
            if ($67e6adf7fe63e8dd$var$hasOwn(setupState, oldRef)) setupState[oldRef] = null;
        } else if ($67e6adf7fe63e8dd$export$4f9f5282de18fc69(oldRef)) oldRef.value = null;
    }
    if ($67e6adf7fe63e8dd$var$isFunction(ref)) $67e6adf7fe63e8dd$export$b22fcaf88446e9bf(ref, owner, 12, [
        value,
        refs
    ]);
    else {
        const _isString = $67e6adf7fe63e8dd$var$isString(ref);
        const _isRef = $67e6adf7fe63e8dd$export$4f9f5282de18fc69(ref);
        if (_isString || _isRef) {
            const doSet = ()=>{
                if (rawRef.f) {
                    const existing = _isString ? $67e6adf7fe63e8dd$var$hasOwn(setupState, ref) ? setupState[ref] : refs[ref] : ref.value;
                    if (isUnmount) $67e6adf7fe63e8dd$var$isArray(existing) && $67e6adf7fe63e8dd$var$remove(existing, refValue);
                    else {
                        if (!$67e6adf7fe63e8dd$var$isArray(existing)) {
                            if (_isString) {
                                refs[ref] = [
                                    refValue
                                ];
                                if ($67e6adf7fe63e8dd$var$hasOwn(setupState, ref)) setupState[ref] = refs[ref];
                            } else {
                                ref.value = [
                                    refValue
                                ];
                                if (rawRef.k) refs[rawRef.k] = ref.value;
                            }
                        } else if (!existing.includes(refValue)) existing.push(refValue);
                    }
                } else if (_isString) {
                    refs[ref] = value;
                    if ($67e6adf7fe63e8dd$var$hasOwn(setupState, ref)) setupState[ref] = value;
                } else if (_isRef) {
                    ref.value = value;
                    if (rawRef.k) refs[rawRef.k] = value;
                } else $67e6adf7fe63e8dd$var$warn$1("Invalid template ref type:", ref, `(${typeof ref})`);
            };
            if (value) {
                doSet.id = -1;
                $67e6adf7fe63e8dd$var$queuePostRenderEffect(doSet, parentSuspense);
            } else doSet();
        } else $67e6adf7fe63e8dd$var$warn$1("Invalid template ref type:", ref, `(${typeof ref})`);
    }
}
let $67e6adf7fe63e8dd$var$hasMismatch = false;
const $67e6adf7fe63e8dd$var$isSVGContainer = (container)=>container.namespaceURI.includes("svg") && container.tagName !== "foreignObject";
const $67e6adf7fe63e8dd$var$isMathMLContainer = (container)=>container.namespaceURI.includes("MathML");
const $67e6adf7fe63e8dd$var$getContainerType = (container)=>{
    if ($67e6adf7fe63e8dd$var$isSVGContainer(container)) return "svg";
    if ($67e6adf7fe63e8dd$var$isMathMLContainer(container)) return "mathml";
    return void 0;
};
const $67e6adf7fe63e8dd$var$isComment = (node)=>node.nodeType === 8 /* COMMENT */ ;
function $67e6adf7fe63e8dd$var$createHydrationFunctions(rendererInternals) {
    const { mt: mountComponent, p: patch, o: { patchProp: patchProp, createText: createText, nextSibling: nextSibling, parentNode: parentNode, remove: remove, insert: insert, createComment: createComment } } = rendererInternals;
    const hydrate = (vnode, container)=>{
        if (!container.hasChildNodes()) {
            $67e6adf7fe63e8dd$var$warn$1(`Attempting to hydrate existing markup but container is empty. Performing full mount instead.`);
            patch(null, vnode, container);
            $67e6adf7fe63e8dd$var$flushPostFlushCbs();
            container._vnode = vnode;
            return;
        }
        $67e6adf7fe63e8dd$var$hasMismatch = false;
        hydrateNode(container.firstChild, vnode, null, null, null);
        $67e6adf7fe63e8dd$var$flushPostFlushCbs();
        container._vnode = vnode;
        if ($67e6adf7fe63e8dd$var$hasMismatch && true) console.error(`Hydration completed but contains mismatches.`);
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false)=>{
        const isFragmentStart = $67e6adf7fe63e8dd$var$isComment(node) && node.data === "[";
        const onMismatch = ()=>handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
        const { type: type, ref: ref, shapeFlag: shapeFlag, patchFlag: patchFlag } = vnode;
        let domType = node.nodeType;
        vnode.el = node;
        if (!("__vnode" in node)) Object.defineProperty(node, "__vnode", {
            value: vnode,
            enumerable: false
        });
        if (!("__vueParentComponent" in node)) Object.defineProperty(node, "__vueParentComponent", {
            value: parentComponent,
            enumerable: false
        });
        if (patchFlag === -2) {
            optimized = false;
            vnode.dynamicChildren = null;
        }
        let nextNode = null;
        switch(type){
            case $67e6adf7fe63e8dd$export$5f1af8db9871e1d6:
                if (domType !== 3 /* TEXT */ ) {
                    if (vnode.children === "") {
                        insert(vnode.el = createText(""), parentNode(node), node);
                        nextNode = node;
                    } else nextNode = onMismatch();
                } else {
                    if (node.data !== vnode.children) {
                        $67e6adf7fe63e8dd$var$hasMismatch = true;
                        $67e6adf7fe63e8dd$var$warn$1(`Hydration text mismatch in`, node.parentNode, `
  - rendered on server: ${JSON.stringify(node.data)}
  - expected on client: ${JSON.stringify(vnode.children)}`);
                        node.data = vnode.children;
                    }
                    nextNode = nextSibling(node);
                }
                break;
            case $67e6adf7fe63e8dd$export$4d299b491347818a:
                if (isTemplateNode(node)) {
                    nextNode = nextSibling(node);
                    replaceNode(vnode.el = node.content.firstChild, node, parentComponent);
                } else if (domType !== 8 /* COMMENT */  || isFragmentStart) nextNode = onMismatch();
                else nextNode = nextSibling(node);
                break;
            case $67e6adf7fe63e8dd$export$c1b9a1d3af45b7b6:
                if (isFragmentStart) {
                    node = nextSibling(node);
                    domType = node.nodeType;
                }
                if (domType === 1 /* ELEMENT */  || domType === 3 /* TEXT */ ) {
                    nextNode = node;
                    const needToAdoptContent = !vnode.children.length;
                    for(let i = 0; i < vnode.staticCount; i++){
                        if (needToAdoptContent) vnode.children += nextNode.nodeType === 1 /* ELEMENT */  ? nextNode.outerHTML : nextNode.data;
                        if (i === vnode.staticCount - 1) vnode.anchor = nextNode;
                        nextNode = nextSibling(nextNode);
                    }
                    return isFragmentStart ? nextSibling(nextNode) : nextNode;
                } else onMismatch();
                break;
            case $67e6adf7fe63e8dd$export$ffb0004e005737fa:
                if (!isFragmentStart) nextNode = onMismatch();
                else nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1) {
                    if ((domType !== 1 /* ELEMENT */  || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) && !isTemplateNode(node)) nextNode = onMismatch();
                    else nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                } else if (shapeFlag & 6) {
                    vnode.slotScopeIds = slotScopeIds;
                    const container = parentNode(node);
                    if (isFragmentStart) nextNode = locateClosingAnchor(node);
                    else if ($67e6adf7fe63e8dd$var$isComment(node) && node.data === "teleport start") nextNode = locateClosingAnchor(node, node.data, "teleport end");
                    else nextNode = nextSibling(node);
                    mountComponent(vnode, container, null, parentComponent, parentSuspense, $67e6adf7fe63e8dd$var$getContainerType(container), optimized);
                    if ($67e6adf7fe63e8dd$var$isAsyncWrapper(vnode)) {
                        let subTree;
                        if (isFragmentStart) {
                            subTree = $67e6adf7fe63e8dd$export$bf5c4cf060303d58($67e6adf7fe63e8dd$export$ffb0004e005737fa);
                            subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
                        } else subTree = node.nodeType === 3 ? $67e6adf7fe63e8dd$export$22f9b5ffd89dac9("") : $67e6adf7fe63e8dd$export$bf5c4cf060303d58("div");
                        subTree.el = node;
                        vnode.component.subTree = subTree;
                    }
                } else if (shapeFlag & 64) {
                    if (domType !== 8 /* COMMENT */ ) nextNode = onMismatch();
                    else nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
                } else if (shapeFlag & 128) nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, $67e6adf7fe63e8dd$var$getContainerType(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
                else $67e6adf7fe63e8dd$var$warn$1("Invalid HostVNode type:", type, `(${typeof type})`);
        }
        if (ref != null) $67e6adf7fe63e8dd$var$setRef(ref, null, parentSuspense, vnode);
        return nextNode;
    };
    const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        optimized = optimized || !!vnode.dynamicChildren;
        const { type: type, props: props, patchFlag: patchFlag, shapeFlag: shapeFlag, dirs: dirs, transition: transition } = vnode;
        const forcePatch = type === "input" || type === "option";
        {
            if (dirs) $67e6adf7fe63e8dd$var$invokeDirectiveHook(vnode, null, parentComponent, "created");
            let needCallTransitionHooks = false;
            if (isTemplateNode(el)) {
                needCallTransitionHooks = $67e6adf7fe63e8dd$var$needTransition(parentSuspense, transition) && parentComponent && parentComponent.vnode.props && parentComponent.vnode.props.appear;
                const content = el.content.firstChild;
                if (needCallTransitionHooks) transition.beforeEnter(content);
                replaceNode(content, el, parentComponent);
                vnode.el = el = content;
            }
            if (shapeFlag & 16 && // skip if element has innerHTML / textContent
            !(props && (props.innerHTML || props.textContent))) {
                let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
                let hasWarned = false;
                while(next){
                    $67e6adf7fe63e8dd$var$hasMismatch = true;
                    if (!hasWarned) {
                        $67e6adf7fe63e8dd$var$warn$1(`Hydration children mismatch on`, el, `
Server rendered element contains more child nodes than client vdom.`);
                        hasWarned = true;
                    }
                    const cur = next;
                    next = next.nextSibling;
                    remove(cur);
                }
            } else if (shapeFlag & 8) {
                if (el.textContent !== vnode.children) {
                    $67e6adf7fe63e8dd$var$hasMismatch = true;
                    $67e6adf7fe63e8dd$var$warn$1(`Hydration text content mismatch on`, el, `
  - rendered on server: ${el.textContent}
  - expected on client: ${vnode.children}`);
                    el.textContent = vnode.children;
                }
            }
            if (props) for(const key in props){
                if ($67e6adf7fe63e8dd$var$propHasMismatch(el, key, props[key])) $67e6adf7fe63e8dd$var$hasMismatch = true;
                if (forcePatch && (key.endsWith("value") || key === "indeterminate") || $67e6adf7fe63e8dd$var$isOn(key) && !$67e6adf7fe63e8dd$var$isReservedProp(key) || // force hydrate v-bind with .prop modifiers
                key[0] === ".") patchProp(el, key, null, props[key], void 0, void 0, parentComponent);
            }
            let vnodeHooks;
            if (vnodeHooks = props && props.onVnodeBeforeMount) $67e6adf7fe63e8dd$var$invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            if (dirs) $67e6adf7fe63e8dd$var$invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
            if ((vnodeHooks = props && props.onVnodeMounted) || dirs || needCallTransitionHooks) $67e6adf7fe63e8dd$var$queueEffectWithSuspense(()=>{
                vnodeHooks && $67e6adf7fe63e8dd$var$invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                needCallTransitionHooks && transition.enter(el);
                dirs && $67e6adf7fe63e8dd$var$invokeDirectiveHook(vnode, null, parentComponent, "mounted");
            }, parentSuspense);
        }
        return el.nextSibling;
    };
    const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        optimized = optimized || !!parentVNode.dynamicChildren;
        const children = parentVNode.children;
        const l = children.length;
        let hasWarned = false;
        for(let i = 0; i < l; i++){
            const vnode = optimized ? children[i] : children[i] = $67e6adf7fe63e8dd$var$normalizeVNode(children[i]);
            if (node) node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
            else if (vnode.type === $67e6adf7fe63e8dd$export$5f1af8db9871e1d6 && !vnode.children) continue;
            else {
                $67e6adf7fe63e8dd$var$hasMismatch = true;
                if (!hasWarned) {
                    $67e6adf7fe63e8dd$var$warn$1(`Hydration children mismatch on`, container, `
Server rendered element contains fewer child nodes than client vdom.`);
                    hasWarned = true;
                }
                patch(null, vnode, container, null, parentComponent, parentSuspense, $67e6adf7fe63e8dd$var$getContainerType(container), slotScopeIds);
            }
        }
        return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        const { slotScopeIds: fragmentSlotScopeIds } = vnode;
        if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        const container = parentNode(node);
        const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
        if (next && $67e6adf7fe63e8dd$var$isComment(next) && next.data === "]") return nextSibling(vnode.anchor = next);
        else {
            $67e6adf7fe63e8dd$var$hasMismatch = true;
            insert(vnode.anchor = createComment(`]`), container, next);
            return next;
        }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment)=>{
        $67e6adf7fe63e8dd$var$hasMismatch = true;
        $67e6adf7fe63e8dd$var$warn$1(`Hydration node mismatch:
- rendered on server:`, node, node.nodeType === 3 /* TEXT */  ? `(text)` : $67e6adf7fe63e8dd$var$isComment(node) && node.data === "[" ? `(start of fragment)` : ``, `
- expected on client:`, vnode.type);
        vnode.el = null;
        if (isFragment) {
            const end = locateClosingAnchor(node);
            while(true){
                const next2 = nextSibling(node);
                if (next2 && next2 !== end) remove(next2);
                else break;
            }
        }
        const next = nextSibling(node);
        const container = parentNode(node);
        remove(node);
        patch(null, vnode, container, next, parentComponent, parentSuspense, $67e6adf7fe63e8dd$var$getContainerType(container), slotScopeIds);
        return next;
    };
    const locateClosingAnchor = (node, open = "[", close = "]")=>{
        let match = 0;
        while(node){
            node = nextSibling(node);
            if (node && $67e6adf7fe63e8dd$var$isComment(node)) {
                if (node.data === open) match++;
                if (node.data === close) {
                    if (match === 0) return nextSibling(node);
                    else match--;
                }
            }
        }
        return node;
    };
    const replaceNode = (newNode, oldNode, parentComponent)=>{
        const parentNode2 = oldNode.parentNode;
        if (parentNode2) parentNode2.replaceChild(newNode, oldNode);
        let parent = parentComponent;
        while(parent){
            if (parent.vnode.el === oldNode) parent.vnode.el = parent.subTree.el = newNode;
            parent = parent.parent;
        }
    };
    const isTemplateNode = (node)=>{
        return node.nodeType === 1 /* ELEMENT */  && node.tagName.toLowerCase() === "template";
    };
    return [
        hydrate,
        hydrateNode
    ];
}
function $67e6adf7fe63e8dd$var$propHasMismatch(el, key, clientValue) {
    let mismatchType;
    let mismatchKey;
    let actual;
    let expected;
    if (key === "class") {
        actual = $67e6adf7fe63e8dd$var$toClassSet(el.getAttribute("class") || "");
        expected = $67e6adf7fe63e8dd$var$toClassSet($67e6adf7fe63e8dd$export$4f7022d2d68e2c5a(clientValue));
        if (!$67e6adf7fe63e8dd$var$isSetEqual(actual, expected)) mismatchType = mismatchKey = `class`;
    } else if (key === "style") {
        actual = el.getAttribute("style");
        expected = $67e6adf7fe63e8dd$var$isString(clientValue) ? clientValue : $67e6adf7fe63e8dd$var$stringifyStyle($67e6adf7fe63e8dd$export$8756898546458274(clientValue));
        if (actual !== expected) mismatchType = mismatchKey = "style";
    } else if (el instanceof SVGElement && $67e6adf7fe63e8dd$var$isKnownSvgAttr(key) || el instanceof HTMLElement && ($67e6adf7fe63e8dd$var$isBooleanAttr(key) || $67e6adf7fe63e8dd$var$isKnownHtmlAttr(key))) {
        actual = el.hasAttribute(key) && el.getAttribute(key);
        expected = $67e6adf7fe63e8dd$var$isBooleanAttr(key) ? $67e6adf7fe63e8dd$var$includeBooleanAttr(clientValue) ? "" : false : clientValue == null ? false : String(clientValue);
        if (actual !== expected) {
            mismatchType = `attribute`;
            mismatchKey = key;
        }
    }
    if (mismatchType) {
        const format = (v1)=>v1 === false ? `(not rendered)` : `${mismatchKey}="${v1}"`;
        $67e6adf7fe63e8dd$var$warn$1(`Hydration ${mismatchType} mismatch on`, el, `
  - rendered on server: ${format(actual)}
  - expected on client: ${format(expected)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`);
        return true;
    }
    return false;
}
function $67e6adf7fe63e8dd$var$toClassSet(str) {
    return new Set(str.trim().split(/\s+/));
}
function $67e6adf7fe63e8dd$var$isSetEqual(a, b) {
    if (a.size !== b.size) return false;
    for (const s of a){
        if (!b.has(s)) return false;
    }
    return true;
}
let $67e6adf7fe63e8dd$var$supported;
let $67e6adf7fe63e8dd$var$perf;
function $67e6adf7fe63e8dd$var$startMeasure(instance, type) {
    if (instance.appContext.config.performance && $67e6adf7fe63e8dd$var$isSupported()) $67e6adf7fe63e8dd$var$perf.mark(`vue-${type}-${instance.uid}`);
    $67e6adf7fe63e8dd$var$devtoolsPerfStart(instance, type, $67e6adf7fe63e8dd$var$isSupported() ? $67e6adf7fe63e8dd$var$perf.now() : Date.now());
}
function $67e6adf7fe63e8dd$var$endMeasure(instance, type) {
    if (instance.appContext.config.performance && $67e6adf7fe63e8dd$var$isSupported()) {
        const startTag = `vue-${type}-${instance.uid}`;
        const endTag = startTag + `:end`;
        $67e6adf7fe63e8dd$var$perf.mark(endTag);
        $67e6adf7fe63e8dd$var$perf.measure(`<${$67e6adf7fe63e8dd$var$formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
        $67e6adf7fe63e8dd$var$perf.clearMarks(startTag);
        $67e6adf7fe63e8dd$var$perf.clearMarks(endTag);
    }
    $67e6adf7fe63e8dd$var$devtoolsPerfEnd(instance, type, $67e6adf7fe63e8dd$var$isSupported() ? $67e6adf7fe63e8dd$var$perf.now() : Date.now());
}
function $67e6adf7fe63e8dd$var$isSupported() {
    if ($67e6adf7fe63e8dd$var$supported !== void 0) return $67e6adf7fe63e8dd$var$supported;
    if (typeof window !== "undefined" && window.performance) {
        $67e6adf7fe63e8dd$var$supported = true;
        $67e6adf7fe63e8dd$var$perf = window.performance;
    } else $67e6adf7fe63e8dd$var$supported = false;
    return $67e6adf7fe63e8dd$var$supported;
}
const $67e6adf7fe63e8dd$var$queuePostRenderEffect = $67e6adf7fe63e8dd$var$queueEffectWithSuspense;
function $67e6adf7fe63e8dd$export$53ae2f996c64e9a(options) {
    return $67e6adf7fe63e8dd$var$baseCreateRenderer(options);
}
function $67e6adf7fe63e8dd$export$200524cf0d997ff0(options) {
    return $67e6adf7fe63e8dd$var$baseCreateRenderer(options, $67e6adf7fe63e8dd$var$createHydrationFunctions);
}
function $67e6adf7fe63e8dd$var$baseCreateRenderer(options, createHydrationFns) {
    const target = $67e6adf7fe63e8dd$var$getGlobalThis();
    target.__VUE__ = true;
    $67e6adf7fe63e8dd$var$setDevtoolsHook$1(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = $67e6adf7fe63e8dd$var$NOOP, insertStaticContent: hostInsertStaticContent } = options;
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace, slotScopeIds = null, optimized = $67e6adf7fe63e8dd$var$isHmrUpdating ? false : !!n2.dynamicChildren)=>{
        if (n1 === n2) return;
        if (n1 && !$67e6adf7fe63e8dd$var$isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
        }
        if (n2.patchFlag === -2) {
            optimized = false;
            n2.dynamicChildren = null;
        }
        const { type: type, ref: ref, shapeFlag: shapeFlag } = n2;
        switch(type){
            case $67e6adf7fe63e8dd$export$5f1af8db9871e1d6:
                processText(n1, n2, container, anchor);
                break;
            case $67e6adf7fe63e8dd$export$4d299b491347818a:
                processCommentNode(n1, n2, container, anchor);
                break;
            case $67e6adf7fe63e8dd$export$c1b9a1d3af45b7b6:
                if (n1 == null) mountStaticNode(n2, container, anchor, namespace);
                else patchStaticNode(n1, n2, container, namespace);
                break;
            case $67e6adf7fe63e8dd$export$ffb0004e005737fa:
                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1) processElement(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                else if (shapeFlag & 6) processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                else if (shapeFlag & 64) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
                else if (shapeFlag & 128) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
                else $67e6adf7fe63e8dd$var$warn$1("Invalid VNode type:", type, `(${typeof type})`);
        }
        if (ref != null && parentComponent) $67e6adf7fe63e8dd$var$setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    };
    const processText = (n1, n2, container, anchor)=>{
        if (n1 == null) hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
        else {
            const el = n2.el = n1.el;
            if (n2.children !== n1.children) hostSetText(el, n2.children);
        }
    };
    const processCommentNode = (n1, n2, container, anchor)=>{
        if (n1 == null) hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
        else n2.el = n1.el;
    };
    const mountStaticNode = (n2, container, anchor, namespace)=>{
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace, n2.el, n2.anchor);
    };
    const patchStaticNode = (n1, n2, container, namespace)=>{
        if (n2.children !== n1.children) {
            const anchor = hostNextSibling(n1.anchor);
            removeStaticNode(n1);
            [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace);
        } else {
            n2.el = n1.el;
            n2.anchor = n1.anchor;
        }
    };
    const moveStaticNode = ({ el: el, anchor: anchor }, container, nextSibling)=>{
        let next;
        while(el && el !== anchor){
            next = hostNextSibling(el);
            hostInsert(el, container, nextSibling);
            el = next;
        }
        hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el: el, anchor: anchor })=>{
        let next;
        while(el && el !== anchor){
            next = hostNextSibling(el);
            hostRemove(el);
            el = next;
        }
        hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        if (n2.type === "svg") namespace = "svg";
        else if (n2.type === "math") namespace = "mathml";
        if (n1 == null) mountElement(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        else patchElement(n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        let el;
        let vnodeHook;
        const { props: props, shapeFlag: shapeFlag, transition: transition, dirs: dirs } = vnode;
        el = vnode.el = hostCreateElement(vnode.type, namespace, props && props.is, props);
        if (shapeFlag & 8) hostSetElementText(el, vnode.children);
        else if (shapeFlag & 16) mountChildren(vnode.children, el, null, parentComponent, parentSuspense, $67e6adf7fe63e8dd$var$resolveChildrenNamespace(vnode, namespace), slotScopeIds, optimized);
        if (dirs) $67e6adf7fe63e8dd$var$invokeDirectiveHook(vnode, null, parentComponent, "created");
        setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
        if (props) {
            for(const key in props)if (key !== "value" && !$67e6adf7fe63e8dd$var$isReservedProp(key)) hostPatchProp(el, key, null, props[key], namespace, vnode.children, parentComponent, parentSuspense, unmountChildren);
            if ("value" in props) hostPatchProp(el, "value", null, props.value, namespace);
            if (vnodeHook = props.onVnodeBeforeMount) $67e6adf7fe63e8dd$var$invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        Object.defineProperty(el, "__vnode", {
            value: vnode,
            enumerable: false
        });
        Object.defineProperty(el, "__vueParentComponent", {
            value: parentComponent,
            enumerable: false
        });
        if (dirs) $67e6adf7fe63e8dd$var$invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
        const needCallTransitionHooks = $67e6adf7fe63e8dd$var$needTransition(parentSuspense, transition);
        if (needCallTransitionHooks) transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) $67e6adf7fe63e8dd$var$queuePostRenderEffect(()=>{
            vnodeHook && $67e6adf7fe63e8dd$var$invokeVNodeHook(vnodeHook, parentComponent, vnode);
            needCallTransitionHooks && transition.enter(el);
            dirs && $67e6adf7fe63e8dd$var$invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent)=>{
        if (scopeId) hostSetScopeId(el, scopeId);
        if (slotScopeIds) for(let i = 0; i < slotScopeIds.length; i++)hostSetScopeId(el, slotScopeIds[i]);
        if (parentComponent) {
            let subTree = parentComponent.subTree;
            if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) subTree = $67e6adf7fe63e8dd$var$filterSingleRoot(subTree.children) || subTree;
            if (vnode === subTree) {
                const parentVNode = parentComponent.vnode;
                setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
            }
        }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0)=>{
        for(let i = start; i < children.length; i++){
            const child = children[i] = optimized ? $67e6adf7fe63e8dd$var$cloneIfMounted(children[i]) : $67e6adf7fe63e8dd$var$normalizeVNode(children[i]);
            patch(null, child, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        const el = n2.el = n1.el;
        let { patchFlag: patchFlag, dynamicChildren: dynamicChildren, dirs: dirs } = n2;
        patchFlag |= n1.patchFlag & 16;
        const oldProps = n1.props || $67e6adf7fe63e8dd$var$EMPTY_OBJ;
        const newProps = n2.props || $67e6adf7fe63e8dd$var$EMPTY_OBJ;
        let vnodeHook;
        parentComponent && $67e6adf7fe63e8dd$var$toggleRecurse(parentComponent, false);
        if (vnodeHook = newProps.onVnodeBeforeUpdate) $67e6adf7fe63e8dd$var$invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        if (dirs) $67e6adf7fe63e8dd$var$invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
        parentComponent && $67e6adf7fe63e8dd$var$toggleRecurse(parentComponent, true);
        if ($67e6adf7fe63e8dd$var$isHmrUpdating) {
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        if (dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, $67e6adf7fe63e8dd$var$resolveChildrenNamespace(n2, namespace), slotScopeIds);
            $67e6adf7fe63e8dd$var$traverseStaticChildren(n1, n2);
        } else if (!optimized) patchChildren(n1, n2, el, null, parentComponent, parentSuspense, $67e6adf7fe63e8dd$var$resolveChildrenNamespace(n2, namespace), slotScopeIds, false);
        if (patchFlag > 0) {
            if (patchFlag & 16) patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, namespace);
            else {
                if (patchFlag & 2) {
                    if (oldProps.class !== newProps.class) hostPatchProp(el, "class", null, newProps.class, namespace);
                }
                if (patchFlag & 4) hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
                if (patchFlag & 8) {
                    const propsToUpdate = n2.dynamicProps;
                    for(let i = 0; i < propsToUpdate.length; i++){
                        const key = propsToUpdate[i];
                        const prev = oldProps[key];
                        const next = newProps[key];
                        if (next !== prev || key === "value") hostPatchProp(el, key, prev, next, namespace, n1.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
            }
            if (patchFlag & 1) {
                if (n1.children !== n2.children) hostSetElementText(el, n2.children);
            }
        } else if (!optimized && dynamicChildren == null) patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, namespace);
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) $67e6adf7fe63e8dd$var$queuePostRenderEffect(()=>{
            vnodeHook && $67e6adf7fe63e8dd$var$invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
            dirs && $67e6adf7fe63e8dd$var$invokeDirectiveHook(n2, n1, parentComponent, "updated");
        }, parentSuspense);
    };
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds)=>{
        for(let i = 0; i < newChildren.length; i++){
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            const container = // oldVNode may be an errored async setup() component inside Suspense
            // which will not have a mounted element
            oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
            // of the Fragment itself so it can move its children.
            (oldVNode.type === $67e6adf7fe63e8dd$export$ffb0004e005737fa || // - In the case of different nodes, there is going to be a replacement
            // which also requires the correct parent container
            !$67e6adf7fe63e8dd$var$isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
            oldVNode.shapeFlag & 70) ? hostParentNode(oldVNode.el) : // In other cases, the parent container is not actually used so we
            // just pass the block element here to avoid a DOM parentNode call.
            fallbackContainer;
            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, true);
        }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, namespace)=>{
        if (oldProps !== newProps) {
            if (oldProps !== $67e6adf7fe63e8dd$var$EMPTY_OBJ) {
                for(const key in oldProps)if (!$67e6adf7fe63e8dd$var$isReservedProp(key) && !(key in newProps)) hostPatchProp(el, key, oldProps[key], null, namespace, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
            for(const key in newProps){
                if ($67e6adf7fe63e8dd$var$isReservedProp(key)) continue;
                const next = newProps[key];
                const prev = oldProps[key];
                if (next !== prev && key !== "value") hostPatchProp(el, key, prev, next, namespace, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
            if ("value" in newProps) hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
        }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
        const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
        let { patchFlag: patchFlag, dynamicChildren: dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
        if (// #5523 dev root fragment may inherit directives
        $67e6adf7fe63e8dd$var$isHmrUpdating || patchFlag & 2048) {
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        } else if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
        // of renderSlot() with no valid children
        n1.dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, namespace, slotScopeIds);
            $67e6adf7fe63e8dd$var$traverseStaticChildren(n1, n2);
        } else patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        n2.slotScopeIds = slotScopeIds;
        if (n1 == null) {
            if (n2.shapeFlag & 512) parentComponent.ctx.activate(n2, container, anchor, namespace, optimized);
            else mountComponent(n2, container, anchor, parentComponent, parentSuspense, namespace, optimized);
        } else updateComponent(n1, n2, optimized);
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized)=>{
        const instance = initialVNode.component = $67e6adf7fe63e8dd$var$createComponentInstance(initialVNode, parentComponent, parentSuspense);
        if (instance.type.__hmrId) $67e6adf7fe63e8dd$var$registerHMR(instance);
        $67e6adf7fe63e8dd$var$pushWarningContext(initialVNode);
        $67e6adf7fe63e8dd$var$startMeasure(instance, `mount`);
        if ($67e6adf7fe63e8dd$var$isKeepAlive(initialVNode)) instance.ctx.renderer = internals;
        $67e6adf7fe63e8dd$var$startMeasure(instance, `init`);
        $67e6adf7fe63e8dd$var$setupComponent(instance);
        $67e6adf7fe63e8dd$var$endMeasure(instance, `init`);
        if (instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
            if (!initialVNode.el) {
                const placeholder = instance.subTree = $67e6adf7fe63e8dd$export$bf5c4cf060303d58($67e6adf7fe63e8dd$export$4d299b491347818a);
                processCommentNode(null, placeholder, container, anchor);
            }
        } else setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, namespace, optimized);
        $67e6adf7fe63e8dd$var$popWarningContext();
        $67e6adf7fe63e8dd$var$endMeasure(instance, `mount`);
    };
    const updateComponent = (n1, n2, optimized)=>{
        const instance = n2.component = n1.component;
        if ($67e6adf7fe63e8dd$var$shouldUpdateComponent(n1, n2, optimized)) {
            if (instance.asyncDep && !instance.asyncResolved) {
                $67e6adf7fe63e8dd$var$pushWarningContext(n2);
                updateComponentPreRender(instance, n2, optimized);
                $67e6adf7fe63e8dd$var$popWarningContext();
                return;
            } else {
                instance.next = n2;
                $67e6adf7fe63e8dd$var$invalidateJob(instance.update);
                instance.effect.dirty = true;
                instance.update();
            }
        } else {
            n2.el = n1.el;
            instance.vnode = n2;
        }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized)=>{
        const componentUpdateFn = ()=>{
            if (!instance.isMounted) {
                let vnodeHook;
                const { el: el, props: props } = initialVNode;
                const { bm: bm, m: m, parent: parent } = instance;
                const isAsyncWrapperVNode = $67e6adf7fe63e8dd$var$isAsyncWrapper(initialVNode);
                $67e6adf7fe63e8dd$var$toggleRecurse(instance, false);
                if (bm) $67e6adf7fe63e8dd$var$invokeArrayFns(bm);
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) $67e6adf7fe63e8dd$var$invokeVNodeHook(vnodeHook, parent, initialVNode);
                $67e6adf7fe63e8dd$var$toggleRecurse(instance, true);
                if (el && hydrateNode) {
                    const hydrateSubTree = ()=>{
                        $67e6adf7fe63e8dd$var$startMeasure(instance, `render`);
                        instance.subTree = $67e6adf7fe63e8dd$var$renderComponentRoot(instance);
                        $67e6adf7fe63e8dd$var$endMeasure(instance, `render`);
                        $67e6adf7fe63e8dd$var$startMeasure(instance, `hydrate`);
                        hydrateNode(el, instance.subTree, instance, parentSuspense, null);
                        $67e6adf7fe63e8dd$var$endMeasure(instance, `hydrate`);
                    };
                    if (isAsyncWrapperVNode) initialVNode.type.__asyncLoader().then(// note: we are moving the render call into an async callback,
                    // which means it won't track dependencies - but it's ok because
                    // a server-rendered async wrapper is already in resolved state
                    // and it will never need to change.
                    ()=>!instance.isUnmounted && hydrateSubTree());
                    else hydrateSubTree();
                } else {
                    $67e6adf7fe63e8dd$var$startMeasure(instance, `render`);
                    const subTree = instance.subTree = $67e6adf7fe63e8dd$var$renderComponentRoot(instance);
                    $67e6adf7fe63e8dd$var$endMeasure(instance, `render`);
                    $67e6adf7fe63e8dd$var$startMeasure(instance, `patch`);
                    patch(null, subTree, container, anchor, instance, parentSuspense, namespace);
                    $67e6adf7fe63e8dd$var$endMeasure(instance, `patch`);
                    initialVNode.el = subTree.el;
                }
                if (m) $67e6adf7fe63e8dd$var$queuePostRenderEffect(m, parentSuspense);
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
                    const scopedInitialVNode = initialVNode;
                    $67e6adf7fe63e8dd$var$queuePostRenderEffect(()=>$67e6adf7fe63e8dd$var$invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
                }
                if (initialVNode.shapeFlag & 256 || parent && $67e6adf7fe63e8dd$var$isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) instance.a && $67e6adf7fe63e8dd$var$queuePostRenderEffect(instance.a, parentSuspense);
                instance.isMounted = true;
                $67e6adf7fe63e8dd$var$devtoolsComponentAdded(instance);
                initialVNode = container = anchor = null;
            } else {
                let { next: next, bu: bu, u: u, parent: parent, vnode: vnode } = instance;
                {
                    const nonHydratedAsyncRoot = $67e6adf7fe63e8dd$var$locateNonHydratedAsyncRoot(instance);
                    if (nonHydratedAsyncRoot) {
                        if (next) {
                            next.el = vnode.el;
                            updateComponentPreRender(instance, next, optimized);
                        }
                        nonHydratedAsyncRoot.asyncDep.then(()=>{
                            if (!instance.isUnmounted) componentUpdateFn();
                        });
                        return;
                    }
                }
                let originNext = next;
                let vnodeHook;
                $67e6adf7fe63e8dd$var$pushWarningContext(next || instance.vnode);
                $67e6adf7fe63e8dd$var$toggleRecurse(instance, false);
                if (next) {
                    next.el = vnode.el;
                    updateComponentPreRender(instance, next, optimized);
                } else next = vnode;
                if (bu) $67e6adf7fe63e8dd$var$invokeArrayFns(bu);
                if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) $67e6adf7fe63e8dd$var$invokeVNodeHook(vnodeHook, parent, next, vnode);
                $67e6adf7fe63e8dd$var$toggleRecurse(instance, true);
                $67e6adf7fe63e8dd$var$startMeasure(instance, `render`);
                const nextTree = $67e6adf7fe63e8dd$var$renderComponentRoot(instance);
                $67e6adf7fe63e8dd$var$endMeasure(instance, `render`);
                const prevTree = instance.subTree;
                instance.subTree = nextTree;
                $67e6adf7fe63e8dd$var$startMeasure(instance, `patch`);
                patch(prevTree, nextTree, // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el), // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, namespace);
                $67e6adf7fe63e8dd$var$endMeasure(instance, `patch`);
                next.el = nextTree.el;
                if (originNext === null) $67e6adf7fe63e8dd$var$updateHOCHostEl(instance, nextTree.el);
                if (u) $67e6adf7fe63e8dd$var$queuePostRenderEffect(u, parentSuspense);
                if (vnodeHook = next.props && next.props.onVnodeUpdated) $67e6adf7fe63e8dd$var$queuePostRenderEffect(()=>$67e6adf7fe63e8dd$var$invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
                $67e6adf7fe63e8dd$var$devtoolsComponentUpdated(instance);
                $67e6adf7fe63e8dd$var$popWarningContext();
            }
        };
        const effect = instance.effect = new $67e6adf7fe63e8dd$export$28352bb4dd362521(componentUpdateFn, $67e6adf7fe63e8dd$var$NOOP, ()=>$67e6adf7fe63e8dd$var$queueJob(update), instance.scope);
        const update = instance.update = ()=>{
            if (effect.dirty) effect.run();
        };
        update.id = instance.uid;
        $67e6adf7fe63e8dd$var$toggleRecurse(instance, true);
        effect.onTrack = instance.rtc ? (e)=>$67e6adf7fe63e8dd$var$invokeArrayFns(instance.rtc, e) : void 0;
        effect.onTrigger = instance.rtg ? (e)=>$67e6adf7fe63e8dd$var$invokeArrayFns(instance.rtg, e) : void 0;
        update.ownerInstance = instance;
        update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized)=>{
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        $67e6adf7fe63e8dd$var$updateProps(instance, nextVNode.props, prevProps, optimized);
        $67e6adf7fe63e8dd$var$updateSlots(instance, nextVNode.children, optimized);
        $67e6adf7fe63e8dd$var$pauseTracking();
        $67e6adf7fe63e8dd$var$flushPreFlushCbs(instance);
        $67e6adf7fe63e8dd$var$resetTracking();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false)=>{
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag: patchFlag, shapeFlag: shapeFlag } = n2;
        if (patchFlag > 0) {
            if (patchFlag & 128) {
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                return;
            } else if (patchFlag & 256) {
                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                return;
            }
        }
        if (shapeFlag & 8) {
            if (prevShapeFlag & 16) unmountChildren(c1, parentComponent, parentSuspense);
            if (c2 !== c1) hostSetElementText(container, c2);
        } else if (prevShapeFlag & 16) {
            if (shapeFlag & 16) patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            else unmountChildren(c1, parentComponent, parentSuspense, true);
        } else {
            if (prevShapeFlag & 8) hostSetElementText(container, "");
            if (shapeFlag & 16) mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        c1 = c1 || $67e6adf7fe63e8dd$var$EMPTY_ARR;
        c2 = c2 || $67e6adf7fe63e8dd$var$EMPTY_ARR;
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for(i = 0; i < commonLength; i++){
            const nextChild = c2[i] = optimized ? $67e6adf7fe63e8dd$var$cloneIfMounted(c2[i]) : $67e6adf7fe63e8dd$var$normalizeVNode(c2[i]);
            patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        }
        if (oldLength > newLength) unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
        else mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, commonLength);
    };
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1;
        let e2 = l2 - 1;
        while(i <= e1 && i <= e2){
            const n1 = c1[i];
            const n2 = c2[i] = optimized ? $67e6adf7fe63e8dd$var$cloneIfMounted(c2[i]) : $67e6adf7fe63e8dd$var$normalizeVNode(c2[i]);
            if ($67e6adf7fe63e8dd$var$isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            else break;
            i++;
        }
        while(i <= e1 && i <= e2){
            const n1 = c1[e1];
            const n2 = c2[e2] = optimized ? $67e6adf7fe63e8dd$var$cloneIfMounted(c2[e2]) : $67e6adf7fe63e8dd$var$normalizeVNode(c2[e2]);
            if ($67e6adf7fe63e8dd$var$isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            else break;
            e1--;
            e2--;
        }
        if (i > e1) {
            if (i <= e2) {
                const nextPos = e2 + 1;
                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while(i <= e2){
                    patch(null, c2[i] = optimized ? $67e6adf7fe63e8dd$var$cloneIfMounted(c2[i]) : $67e6adf7fe63e8dd$var$normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                    i++;
                }
            }
        } else if (i > e2) while(i <= e1){
            unmount(c1[i], parentComponent, parentSuspense, true);
            i++;
        }
        else {
            const s1 = i;
            const s2 = i;
            const keyToNewIndexMap = /* @__PURE__ */ new Map();
            for(i = s2; i <= e2; i++){
                const nextChild = c2[i] = optimized ? $67e6adf7fe63e8dd$var$cloneIfMounted(c2[i]) : $67e6adf7fe63e8dd$var$normalizeVNode(c2[i]);
                if (nextChild.key != null) {
                    if (keyToNewIndexMap.has(nextChild.key)) $67e6adf7fe63e8dd$var$warn$1(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
                    keyToNewIndexMap.set(nextChild.key, i);
                }
            }
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            let maxNewIndexSoFar = 0;
            const newIndexToOldIndexMap = new Array(toBePatched);
            for(i = 0; i < toBePatched; i++)newIndexToOldIndexMap[i] = 0;
            for(i = s1; i <= e1; i++){
                const prevChild = c1[i];
                if (patched >= toBePatched) {
                    unmount(prevChild, parentComponent, parentSuspense, true);
                    continue;
                }
                let newIndex;
                if (prevChild.key != null) newIndex = keyToNewIndexMap.get(prevChild.key);
                else {
                    for(j = s2; j <= e2; j++)if (newIndexToOldIndexMap[j - s2] === 0 && $67e6adf7fe63e8dd$var$isSameVNodeType(prevChild, c2[j])) {
                        newIndex = j;
                        break;
                    }
                }
                if (newIndex === void 0) unmount(prevChild, parentComponent, parentSuspense, true);
                else {
                    newIndexToOldIndexMap[newIndex - s2] = i + 1;
                    if (newIndex >= maxNewIndexSoFar) maxNewIndexSoFar = newIndex;
                    else moved = true;
                    patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                    patched++;
                }
            }
            const increasingNewIndexSequence = moved ? $67e6adf7fe63e8dd$var$getSequence(newIndexToOldIndexMap) : $67e6adf7fe63e8dd$var$EMPTY_ARR;
            j = increasingNewIndexSequence.length - 1;
            for(i = toBePatched - 1; i >= 0; i--){
                const nextIndex = s2 + i;
                const nextChild = c2[nextIndex];
                const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                if (newIndexToOldIndexMap[i] === 0) patch(null, nextChild, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                else if (moved) {
                    if (j < 0 || i !== increasingNewIndexSequence[j]) move(nextChild, container, anchor, 2);
                    else j--;
                }
            }
        }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null)=>{
        const { el: el, type: type, transition: transition, children: children, shapeFlag: shapeFlag } = vnode;
        if (shapeFlag & 6) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
        }
        if (shapeFlag & 128) {
            vnode.suspense.move(container, anchor, moveType);
            return;
        }
        if (shapeFlag & 64) {
            type.move(vnode, container, anchor, internals);
            return;
        }
        if (type === $67e6adf7fe63e8dd$export$ffb0004e005737fa) {
            hostInsert(el, container, anchor);
            for(let i = 0; i < children.length; i++)move(children[i], container, anchor, moveType);
            hostInsert(vnode.anchor, container, anchor);
            return;
        }
        if (type === $67e6adf7fe63e8dd$export$c1b9a1d3af45b7b6) {
            moveStaticNode(vnode, container, anchor);
            return;
        }
        const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
        if (needTransition2) {
            if (moveType === 0) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                $67e6adf7fe63e8dd$var$queuePostRenderEffect(()=>transition.enter(el), parentSuspense);
            } else {
                const { leave: leave, delayLeave: delayLeave, afterLeave: afterLeave } = transition;
                const remove2 = ()=>hostInsert(el, container, anchor);
                const performLeave = ()=>{
                    leave(el, ()=>{
                        remove2();
                        afterLeave && afterLeave();
                    });
                };
                if (delayLeave) delayLeave(el, remove2, performLeave);
                else performLeave();
            }
        } else hostInsert(el, container, anchor);
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false)=>{
        const { type: type, props: props, ref: ref, children: children, dynamicChildren: dynamicChildren, shapeFlag: shapeFlag, patchFlag: patchFlag, dirs: dirs } = vnode;
        if (ref != null) $67e6adf7fe63e8dd$var$setRef(ref, null, parentSuspense, vnode, true);
        if (shapeFlag & 256) {
            parentComponent.ctx.deactivate(vnode);
            return;
        }
        const shouldInvokeDirs = shapeFlag & 1 && dirs;
        const shouldInvokeVnodeHook = !$67e6adf7fe63e8dd$var$isAsyncWrapper(vnode);
        let vnodeHook;
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) $67e6adf7fe63e8dd$var$invokeVNodeHook(vnodeHook, parentComponent, vnode);
        if (shapeFlag & 6) unmountComponent(vnode.component, parentSuspense, doRemove);
        else {
            if (shapeFlag & 128) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
            }
            if (shouldInvokeDirs) $67e6adf7fe63e8dd$var$invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
            if (shapeFlag & 64) vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
            else if (dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
            (type !== $67e6adf7fe63e8dd$export$ffb0004e005737fa || patchFlag > 0 && patchFlag & 64)) unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
            else if (type === $67e6adf7fe63e8dd$export$ffb0004e005737fa && patchFlag & 384 || !optimized && shapeFlag & 16) unmountChildren(children, parentComponent, parentSuspense);
            if (doRemove) remove(vnode);
        }
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) $67e6adf7fe63e8dd$var$queuePostRenderEffect(()=>{
            vnodeHook && $67e6adf7fe63e8dd$var$invokeVNodeHook(vnodeHook, parentComponent, vnode);
            shouldInvokeDirs && $67e6adf7fe63e8dd$var$invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
        }, parentSuspense);
    };
    const remove = (vnode)=>{
        const { type: type, el: el, anchor: anchor, transition: transition } = vnode;
        if (type === $67e6adf7fe63e8dd$export$ffb0004e005737fa) {
            if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) vnode.children.forEach((child)=>{
                if (child.type === $67e6adf7fe63e8dd$export$4d299b491347818a) hostRemove(child.el);
                else remove(child);
            });
            else removeFragment(el, anchor);
            return;
        }
        if (type === $67e6adf7fe63e8dd$export$c1b9a1d3af45b7b6) {
            removeStaticNode(vnode);
            return;
        }
        const performRemove = ()=>{
            hostRemove(el);
            if (transition && !transition.persisted && transition.afterLeave) transition.afterLeave();
        };
        if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
            const { leave: leave, delayLeave: delayLeave } = transition;
            const performLeave = ()=>leave(el, performRemove);
            if (delayLeave) delayLeave(vnode.el, performRemove, performLeave);
            else performLeave();
        } else performRemove();
    };
    const removeFragment = (cur, end)=>{
        let next;
        while(cur !== end){
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
        }
        hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove)=>{
        if (instance.type.__hmrId) $67e6adf7fe63e8dd$var$unregisterHMR(instance);
        const { bum: bum, scope: scope, update: update, subTree: subTree, um: um } = instance;
        if (bum) $67e6adf7fe63e8dd$var$invokeArrayFns(bum);
        scope.stop();
        if (update) {
            update.active = false;
            unmount(subTree, instance, parentSuspense, doRemove);
        }
        if (um) $67e6adf7fe63e8dd$var$queuePostRenderEffect(um, parentSuspense);
        $67e6adf7fe63e8dd$var$queuePostRenderEffect(()=>{
            instance.isUnmounted = true;
        }, parentSuspense);
        if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) parentSuspense.resolve();
        }
        $67e6adf7fe63e8dd$var$devtoolsComponentRemoved(instance);
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0)=>{
        for(let i = start; i < children.length; i++)unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    };
    const getNextHostNode = (vnode)=>{
        if (vnode.shapeFlag & 6) return getNextHostNode(vnode.component.subTree);
        if (vnode.shapeFlag & 128) return vnode.suspense.next();
        return hostNextSibling(vnode.anchor || vnode.el);
    };
    const render = (vnode, container, namespace)=>{
        if (vnode == null) {
            if (container._vnode) unmount(container._vnode, null, null, true);
        } else patch(container._vnode || null, vnode, container, null, null, null, namespace);
        $67e6adf7fe63e8dd$var$flushPreFlushCbs();
        $67e6adf7fe63e8dd$var$flushPostFlushCbs();
        container._vnode = vnode;
    };
    const internals = {
        p: patch,
        um: unmount,
        m: move,
        r: remove,
        mt: mountComponent,
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        n: getNextHostNode,
        o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) [hydrate, hydrateNode] = createHydrationFns(internals);
    return {
        render: render,
        hydrate: hydrate,
        createApp: $67e6adf7fe63e8dd$var$createAppAPI(render, hydrate)
    };
}
function $67e6adf7fe63e8dd$var$resolveChildrenNamespace({ type: type, props: props }, currentNamespace) {
    return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function $67e6adf7fe63e8dd$var$toggleRecurse({ effect: effect, update: update }, allowed) {
    effect.allowRecurse = update.allowRecurse = allowed;
}
function $67e6adf7fe63e8dd$var$needTransition(parentSuspense, transition) {
    return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function $67e6adf7fe63e8dd$var$traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if ($67e6adf7fe63e8dd$var$isArray(ch1) && $67e6adf7fe63e8dd$var$isArray(ch2)) for(let i = 0; i < ch1.length; i++){
        const c1 = ch1[i];
        let c2 = ch2[i];
        if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
            if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
                c2 = ch2[i] = $67e6adf7fe63e8dd$var$cloneIfMounted(ch2[i]);
                c2.el = c1.el;
            }
            if (!shallow) $67e6adf7fe63e8dd$var$traverseStaticChildren(c1, c2);
        }
        if (c2.type === $67e6adf7fe63e8dd$export$5f1af8db9871e1d6) c2.el = c1.el;
        if (c2.type === $67e6adf7fe63e8dd$export$4d299b491347818a && !c2.el) c2.el = c1.el;
    }
}
function $67e6adf7fe63e8dd$var$getSequence(arr) {
    const p = arr.slice();
    const result = [
        0
    ];
    let i, j, u, v1, c;
    const len = arr.length;
    for(i = 0; i < len; i++){
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v1 = result.length - 1;
            while(u < v1){
                c = u + v1 >> 1;
                if (arr[result[c]] < arrI) u = c + 1;
                else v1 = c;
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) p[i] = result[u - 1];
                result[u] = i;
            }
        }
    }
    u = result.length;
    v1 = result[u - 1];
    while(u-- > 0){
        result[u] = v1;
        v1 = p[v1];
    }
    return result;
}
function $67e6adf7fe63e8dd$var$locateNonHydratedAsyncRoot(instance) {
    const subComponent = instance.subTree.component;
    if (subComponent) {
        if (subComponent.asyncDep && !subComponent.asyncResolved) return subComponent;
        else return $67e6adf7fe63e8dd$var$locateNonHydratedAsyncRoot(subComponent);
    }
}
const $67e6adf7fe63e8dd$var$isTeleport = (type)=>type.__isTeleport;
const $67e6adf7fe63e8dd$var$isTeleportDisabled = (props)=>props && (props.disabled || props.disabled === "");
const $67e6adf7fe63e8dd$var$isTargetSVG = (target)=>typeof SVGElement !== "undefined" && target instanceof SVGElement;
const $67e6adf7fe63e8dd$var$isTargetMathML = (target)=>typeof MathMLElement === "function" && target instanceof MathMLElement;
const $67e6adf7fe63e8dd$var$resolveTarget = (props, select)=>{
    const targetSelector = props && props.to;
    if ($67e6adf7fe63e8dd$var$isString(targetSelector)) {
        if (!select) {
            $67e6adf7fe63e8dd$var$warn$1(`Current renderer does not support string target for Teleports. (missing querySelector renderer option)`);
            return null;
        } else {
            const target = select(targetSelector);
            if (!target) $67e6adf7fe63e8dd$var$warn$1(`Failed to locate Teleport target with selector "${targetSelector}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`);
            return target;
        }
    } else {
        if (!targetSelector && !$67e6adf7fe63e8dd$var$isTeleportDisabled(props)) $67e6adf7fe63e8dd$var$warn$1(`Invalid Teleport target: ${targetSelector}`);
        return targetSelector;
    }
};
const $67e6adf7fe63e8dd$var$TeleportImpl = {
    name: "Teleport",
    __isTeleport: true,
    process (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
        const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert: insert, querySelector: querySelector, createText: createText, createComment: createComment } } = internals;
        const disabled = $67e6adf7fe63e8dd$var$isTeleportDisabled(n2.props);
        let { shapeFlag: shapeFlag, children: children, dynamicChildren: dynamicChildren } = n2;
        if ($67e6adf7fe63e8dd$var$isHmrUpdating) {
            optimized = false;
            dynamicChildren = null;
        }
        if (n1 == null) {
            const placeholder = n2.el = createComment("teleport start");
            const mainAnchor = n2.anchor = createComment("teleport end");
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const target = n2.target = $67e6adf7fe63e8dd$var$resolveTarget(n2.props, querySelector);
            const targetAnchor = n2.targetAnchor = createText("");
            if (target) {
                insert(targetAnchor, target);
                if (namespace === "svg" || $67e6adf7fe63e8dd$var$isTargetSVG(target)) namespace = "svg";
                else if (namespace === "mathml" || $67e6adf7fe63e8dd$var$isTargetMathML(target)) namespace = "mathml";
            } else if (!disabled) $67e6adf7fe63e8dd$var$warn$1("Invalid Teleport target on mount:", target, `(${typeof target})`);
            const mount = (container2, anchor2)=>{
                if (shapeFlag & 16) mountChildren(children, container2, anchor2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            };
            if (disabled) mount(container, mainAnchor);
            else if (target) mount(target, targetAnchor);
        } else {
            n2.el = n1.el;
            const mainAnchor = n2.anchor = n1.anchor;
            const target = n2.target = n1.target;
            const targetAnchor = n2.targetAnchor = n1.targetAnchor;
            const wasDisabled = $67e6adf7fe63e8dd$var$isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            if (namespace === "svg" || $67e6adf7fe63e8dd$var$isTargetSVG(target)) namespace = "svg";
            else if (namespace === "mathml" || $67e6adf7fe63e8dd$var$isTargetMathML(target)) namespace = "mathml";
            if (dynamicChildren) {
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, namespace, slotScopeIds);
                $67e6adf7fe63e8dd$var$traverseStaticChildren(n1, n2, true);
            } else if (!optimized) patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, false);
            if (disabled) {
                if (!wasDisabled) $67e6adf7fe63e8dd$var$moveTeleport(n2, container, mainAnchor, internals, 1);
                else if (n2.props && n1.props && n2.props.to !== n1.props.to) n2.props.to = n1.props.to;
            } else {
                if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                    const nextTarget = n2.target = $67e6adf7fe63e8dd$var$resolveTarget(n2.props, querySelector);
                    if (nextTarget) $67e6adf7fe63e8dd$var$moveTeleport(n2, nextTarget, null, internals, 0);
                    else $67e6adf7fe63e8dd$var$warn$1("Invalid Teleport target on update:", target, `(${typeof target})`);
                } else if (wasDisabled) $67e6adf7fe63e8dd$var$moveTeleport(n2, target, targetAnchor, internals, 1);
            }
        }
        $67e6adf7fe63e8dd$var$updateCssVars(n2);
    },
    remove (vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
        const { shapeFlag: shapeFlag, children: children, anchor: anchor, targetAnchor: targetAnchor, target: target, props: props } = vnode;
        if (target) hostRemove(targetAnchor);
        doRemove && hostRemove(anchor);
        if (shapeFlag & 16) {
            const shouldRemove = doRemove || !$67e6adf7fe63e8dd$var$isTeleportDisabled(props);
            for(let i = 0; i < children.length; i++){
                const child = children[i];
                unmount(child, parentComponent, parentSuspense, shouldRemove, !!child.dynamicChildren);
            }
        }
    },
    move: $67e6adf7fe63e8dd$var$moveTeleport,
    hydrate: $67e6adf7fe63e8dd$var$hydrateTeleport
};
function $67e6adf7fe63e8dd$var$moveTeleport(vnode, container, parentAnchor, { o: { insert: insert }, m: move }, moveType = 2) {
    if (moveType === 0) insert(vnode.targetAnchor, container, parentAnchor);
    const { el: el, anchor: anchor, shapeFlag: shapeFlag, children: children, props: props } = vnode;
    const isReorder = moveType === 2;
    if (isReorder) insert(el, container, parentAnchor);
    if (!isReorder || $67e6adf7fe63e8dd$var$isTeleportDisabled(props)) {
        if (shapeFlag & 16) for(let i = 0; i < children.length; i++)move(children[i], container, parentAnchor, 2);
    }
    if (isReorder) insert(anchor, container, parentAnchor);
}
function $67e6adf7fe63e8dd$var$hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling: nextSibling, parentNode: parentNode, querySelector: querySelector } }, hydrateChildren) {
    const target = vnode.target = $67e6adf7fe63e8dd$var$resolveTarget(vnode.props, querySelector);
    if (target) {
        const targetNode = target._lpa || target.firstChild;
        if (vnode.shapeFlag & 16) {
            if ($67e6adf7fe63e8dd$var$isTeleportDisabled(vnode.props)) {
                vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
                vnode.targetAnchor = targetNode;
            } else {
                vnode.anchor = nextSibling(node);
                let targetAnchor = targetNode;
                while(targetAnchor){
                    targetAnchor = nextSibling(targetAnchor);
                    if (targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === "teleport anchor") {
                        vnode.targetAnchor = targetAnchor;
                        target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
                        break;
                    }
                }
                hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
        }
        $67e6adf7fe63e8dd$var$updateCssVars(vnode);
    }
    return vnode.anchor && nextSibling(vnode.anchor);
}
const $67e6adf7fe63e8dd$export$76d55a0304a371f4 = $67e6adf7fe63e8dd$var$TeleportImpl;
function $67e6adf7fe63e8dd$var$updateCssVars(vnode) {
    const ctx = vnode.ctx;
    if (ctx && ctx.ut) {
        let node = vnode.children[0].el;
        while(node && node !== vnode.targetAnchor){
            if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
            node = node.nextSibling;
        }
        ctx.ut();
    }
}
const $67e6adf7fe63e8dd$export$ffb0004e005737fa = Symbol.for("v-fgt");
const $67e6adf7fe63e8dd$export$5f1af8db9871e1d6 = Symbol.for("v-txt");
const $67e6adf7fe63e8dd$export$4d299b491347818a = Symbol.for("v-cmt");
const $67e6adf7fe63e8dd$export$c1b9a1d3af45b7b6 = Symbol.for("v-stc");
const $67e6adf7fe63e8dd$var$blockStack = [];
let $67e6adf7fe63e8dd$var$currentBlock = null;
function $67e6adf7fe63e8dd$export$e7eaa45e502fe5cc(disableTracking = false) {
    $67e6adf7fe63e8dd$var$blockStack.push($67e6adf7fe63e8dd$var$currentBlock = disableTracking ? null : []);
}
function $67e6adf7fe63e8dd$var$closeBlock() {
    $67e6adf7fe63e8dd$var$blockStack.pop();
    $67e6adf7fe63e8dd$var$currentBlock = $67e6adf7fe63e8dd$var$blockStack[$67e6adf7fe63e8dd$var$blockStack.length - 1] || null;
}
let $67e6adf7fe63e8dd$var$isBlockTreeEnabled = 1;
function $67e6adf7fe63e8dd$export$c20bee82f26f1e27(value) {
    $67e6adf7fe63e8dd$var$isBlockTreeEnabled += value;
}
function $67e6adf7fe63e8dd$var$setupBlock(vnode) {
    vnode.dynamicChildren = $67e6adf7fe63e8dd$var$isBlockTreeEnabled > 0 ? $67e6adf7fe63e8dd$var$currentBlock || $67e6adf7fe63e8dd$var$EMPTY_ARR : null;
    $67e6adf7fe63e8dd$var$closeBlock();
    if ($67e6adf7fe63e8dd$var$isBlockTreeEnabled > 0 && $67e6adf7fe63e8dd$var$currentBlock) $67e6adf7fe63e8dd$var$currentBlock.push(vnode);
    return vnode;
}
function $67e6adf7fe63e8dd$export$167055419fc69ec1(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return $67e6adf7fe63e8dd$var$setupBlock($67e6adf7fe63e8dd$export$42098e0eaa15c48e(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function $67e6adf7fe63e8dd$export$9f2dfe8048dfb22b(type, props, children, patchFlag, dynamicProps) {
    return $67e6adf7fe63e8dd$var$setupBlock($67e6adf7fe63e8dd$export$bf5c4cf060303d58(type, props, children, patchFlag, dynamicProps, true));
}
function $67e6adf7fe63e8dd$export$3868d13f8734ae81(value) {
    return value ? value.__v_isVNode === true : false;
}
function $67e6adf7fe63e8dd$var$isSameVNodeType(n1, n2) {
    if (n2.shapeFlag & 6 && $67e6adf7fe63e8dd$var$hmrDirtyComponents.has(n2.type)) {
        n1.shapeFlag &= -257;
        n2.shapeFlag &= -513;
        return false;
    }
    return n1.type === n2.type && n1.key === n2.key;
}
let $67e6adf7fe63e8dd$var$vnodeArgsTransformer;
function $67e6adf7fe63e8dd$export$83beccd3afeeb809(transformer) {
    $67e6adf7fe63e8dd$var$vnodeArgsTransformer = transformer;
}
const $67e6adf7fe63e8dd$var$createVNodeWithArgsTransform = (...args)=>{
    return $67e6adf7fe63e8dd$var$_createVNode(...$67e6adf7fe63e8dd$var$vnodeArgsTransformer ? $67e6adf7fe63e8dd$var$vnodeArgsTransformer(args, $67e6adf7fe63e8dd$var$currentRenderingInstance) : args);
};
const $67e6adf7fe63e8dd$var$InternalObjectKey = `__vInternal`;
const $67e6adf7fe63e8dd$var$normalizeKey = ({ key: key })=>key != null ? key : null;
const $67e6adf7fe63e8dd$var$normalizeRef = ({ ref: ref, ref_key: ref_key, ref_for: ref_for })=>{
    if (typeof ref === "number") ref = "" + ref;
    return ref != null ? $67e6adf7fe63e8dd$var$isString(ref) || $67e6adf7fe63e8dd$export$4f9f5282de18fc69(ref) || $67e6adf7fe63e8dd$var$isFunction(ref) ? {
        i: $67e6adf7fe63e8dd$var$currentRenderingInstance,
        r: ref,
        k: ref_key,
        f: !!ref_for
    } : ref : null;
};
function $67e6adf7fe63e8dd$export$42098e0eaa15c48e(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === $67e6adf7fe63e8dd$export$ffb0004e005737fa ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
        __v_isVNode: true,
        __v_skip: true,
        type: type,
        props: props,
        key: props && $67e6adf7fe63e8dd$var$normalizeKey(props),
        ref: props && $67e6adf7fe63e8dd$var$normalizeRef(props),
        scopeId: $67e6adf7fe63e8dd$var$currentScopeId,
        slotScopeIds: null,
        children: children,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: shapeFlag,
        patchFlag: patchFlag,
        dynamicProps: dynamicProps,
        dynamicChildren: null,
        appContext: null,
        ctx: $67e6adf7fe63e8dd$var$currentRenderingInstance
    };
    if (needFullChildrenNormalization) {
        $67e6adf7fe63e8dd$var$normalizeChildren(vnode, children);
        if (shapeFlag & 128) type.normalize(vnode);
    } else if (children) vnode.shapeFlag |= $67e6adf7fe63e8dd$var$isString(children) ? 8 : 16;
    if (vnode.key !== vnode.key) $67e6adf7fe63e8dd$var$warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
    if ($67e6adf7fe63e8dd$var$isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
    !isBlockNode && // has current parent block
    $67e6adf7fe63e8dd$var$currentBlock && // presence of a patch flag indicates this node needs patching on updates.
    // component nodes also should always be patched, because even if the
    // component doesn't need to update, it needs to persist the instance on to
    // the next vnode so that it can be properly unmounted later.
    (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    vnode.patchFlag !== 32) $67e6adf7fe63e8dd$var$currentBlock.push(vnode);
    return vnode;
}
const $67e6adf7fe63e8dd$export$bf5c4cf060303d58 = $67e6adf7fe63e8dd$var$createVNodeWithArgsTransform;
function $67e6adf7fe63e8dd$var$_createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === $67e6adf7fe63e8dd$var$NULL_DYNAMIC_COMPONENT) {
        if (!type) $67e6adf7fe63e8dd$var$warn$1(`Invalid vnode type when creating vnode: ${type}.`);
        type = $67e6adf7fe63e8dd$export$4d299b491347818a;
    }
    if ($67e6adf7fe63e8dd$export$3868d13f8734ae81(type)) {
        const cloned = $67e6adf7fe63e8dd$export$ee4f9e12c0a92a1a(type, props, true);
        if (children) $67e6adf7fe63e8dd$var$normalizeChildren(cloned, children);
        if ($67e6adf7fe63e8dd$var$isBlockTreeEnabled > 0 && !isBlockNode && $67e6adf7fe63e8dd$var$currentBlock) {
            if (cloned.shapeFlag & 6) $67e6adf7fe63e8dd$var$currentBlock[$67e6adf7fe63e8dd$var$currentBlock.indexOf(type)] = cloned;
            else $67e6adf7fe63e8dd$var$currentBlock.push(cloned);
        }
        cloned.patchFlag |= -2;
        return cloned;
    }
    if ($67e6adf7fe63e8dd$var$isClassComponent(type)) type = type.__vccOpts;
    if (props) {
        props = $67e6adf7fe63e8dd$export$1f1be0e0e384d7d2(props);
        let { class: klass, style: style } = props;
        if (klass && !$67e6adf7fe63e8dd$var$isString(klass)) props.class = $67e6adf7fe63e8dd$export$4f7022d2d68e2c5a(klass);
        if ($67e6adf7fe63e8dd$var$isObject(style)) {
            if ($67e6adf7fe63e8dd$export$5f3ca29d057519b3(style) && !$67e6adf7fe63e8dd$var$isArray(style)) style = $67e6adf7fe63e8dd$var$extend({}, style);
            props.style = $67e6adf7fe63e8dd$export$8756898546458274(style);
        }
    }
    const shapeFlag = $67e6adf7fe63e8dd$var$isString(type) ? 1 : $67e6adf7fe63e8dd$var$isSuspense(type) ? 128 : $67e6adf7fe63e8dd$var$isTeleport(type) ? 64 : $67e6adf7fe63e8dd$var$isObject(type) ? 4 : $67e6adf7fe63e8dd$var$isFunction(type) ? 2 : 0;
    if (shapeFlag & 4 && $67e6adf7fe63e8dd$export$5f3ca29d057519b3(type)) {
        type = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(type);
        $67e6adf7fe63e8dd$var$warn$1(`Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`, `
Component that was made reactive: `, type);
    }
    return $67e6adf7fe63e8dd$export$42098e0eaa15c48e(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function $67e6adf7fe63e8dd$export$1f1be0e0e384d7d2(props) {
    if (!props) return null;
    return $67e6adf7fe63e8dd$export$5f3ca29d057519b3(props) || $67e6adf7fe63e8dd$var$InternalObjectKey in props ? $67e6adf7fe63e8dd$var$extend({}, props) : props;
}
function $67e6adf7fe63e8dd$export$ee4f9e12c0a92a1a(vnode, extraProps, mergeRef = false) {
    const { props: props, ref: ref, patchFlag: patchFlag, children: children } = vnode;
    const mergedProps = extraProps ? $67e6adf7fe63e8dd$export$9d1611c77c2fe928(props || {}, extraProps) : props;
    const cloned = {
        __v_isVNode: true,
        __v_skip: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && $67e6adf7fe63e8dd$var$normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref ? // #2078 in the case of <component :is="vnode" ref="extra"/>
        // if the vnode itself already has a ref, cloneVNode will need to merge
        // the refs so the single vnode can be set on multiple refs
        mergeRef && ref ? $67e6adf7fe63e8dd$var$isArray(ref) ? ref.concat($67e6adf7fe63e8dd$var$normalizeRef(extraProps)) : [
            ref,
            $67e6adf7fe63e8dd$var$normalizeRef(extraProps)
        ] : $67e6adf7fe63e8dd$var$normalizeRef(extraProps) : ref,
        scopeId: vnode.scopeId,
        slotScopeIds: vnode.slotScopeIds,
        children: patchFlag === -1 && $67e6adf7fe63e8dd$var$isArray(children) ? children.map($67e6adf7fe63e8dd$var$deepCloneVNode) : children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: preserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag: extraProps && vnode.type !== $67e6adf7fe63e8dd$export$ffb0004e005737fa ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition: vnode.transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && $67e6adf7fe63e8dd$export$ee4f9e12c0a92a1a(vnode.ssContent),
        ssFallback: vnode.ssFallback && $67e6adf7fe63e8dd$export$ee4f9e12c0a92a1a(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor,
        ctx: vnode.ctx,
        ce: vnode.ce
    };
    return cloned;
}
function $67e6adf7fe63e8dd$var$deepCloneVNode(vnode) {
    const cloned = $67e6adf7fe63e8dd$export$ee4f9e12c0a92a1a(vnode);
    if ($67e6adf7fe63e8dd$var$isArray(vnode.children)) cloned.children = vnode.children.map($67e6adf7fe63e8dd$var$deepCloneVNode);
    return cloned;
}
function $67e6adf7fe63e8dd$export$22f9b5ffd89dac9(text = " ", flag = 0) {
    return $67e6adf7fe63e8dd$export$bf5c4cf060303d58($67e6adf7fe63e8dd$export$5f1af8db9871e1d6, null, text, flag);
}
function $67e6adf7fe63e8dd$export$33a9f6dd2840e6bb(content, numberOfNodes) {
    const vnode = $67e6adf7fe63e8dd$export$bf5c4cf060303d58($67e6adf7fe63e8dd$export$c1b9a1d3af45b7b6, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
}
function $67e6adf7fe63e8dd$export$49553837c7236d3c(text = "", asBlock = false) {
    return asBlock ? ($67e6adf7fe63e8dd$export$e7eaa45e502fe5cc(), $67e6adf7fe63e8dd$export$9f2dfe8048dfb22b($67e6adf7fe63e8dd$export$4d299b491347818a, null, text)) : $67e6adf7fe63e8dd$export$bf5c4cf060303d58($67e6adf7fe63e8dd$export$4d299b491347818a, null, text);
}
function $67e6adf7fe63e8dd$var$normalizeVNode(child) {
    if (child == null || typeof child === "boolean") return $67e6adf7fe63e8dd$export$bf5c4cf060303d58($67e6adf7fe63e8dd$export$4d299b491347818a);
    else if ($67e6adf7fe63e8dd$var$isArray(child)) return $67e6adf7fe63e8dd$export$bf5c4cf060303d58($67e6adf7fe63e8dd$export$ffb0004e005737fa, null, // #3666, avoid reference pollution when reusing vnode
    child.slice());
    else if (typeof child === "object") return $67e6adf7fe63e8dd$var$cloneIfMounted(child);
    else return $67e6adf7fe63e8dd$export$bf5c4cf060303d58($67e6adf7fe63e8dd$export$5f1af8db9871e1d6, null, String(child));
}
function $67e6adf7fe63e8dd$var$cloneIfMounted(child) {
    return child.el === null && child.patchFlag !== -1 || child.memo ? child : $67e6adf7fe63e8dd$export$ee4f9e12c0a92a1a(child);
}
function $67e6adf7fe63e8dd$var$normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag: shapeFlag } = vnode;
    if (children == null) children = null;
    else if ($67e6adf7fe63e8dd$var$isArray(children)) type = 16;
    else if (typeof children === "object") {
        if (shapeFlag & 65) {
            const slot = children.default;
            if (slot) {
                slot._c && (slot._d = false);
                $67e6adf7fe63e8dd$var$normalizeChildren(vnode, slot());
                slot._c && (slot._d = true);
            }
            return;
        } else {
            type = 32;
            const slotFlag = children._;
            if (!slotFlag && !($67e6adf7fe63e8dd$var$InternalObjectKey in children)) children._ctx = $67e6adf7fe63e8dd$var$currentRenderingInstance;
            else if (slotFlag === 3 && $67e6adf7fe63e8dd$var$currentRenderingInstance) {
                if ($67e6adf7fe63e8dd$var$currentRenderingInstance.slots._ === 1) children._ = 1;
                else {
                    children._ = 2;
                    vnode.patchFlag |= 1024;
                }
            }
        }
    } else if ($67e6adf7fe63e8dd$var$isFunction(children)) {
        children = {
            default: children,
            _ctx: $67e6adf7fe63e8dd$var$currentRenderingInstance
        };
        type = 32;
    } else {
        children = String(children);
        if (shapeFlag & 64) {
            type = 16;
            children = [
                $67e6adf7fe63e8dd$export$22f9b5ffd89dac9(children)
            ];
        } else type = 8;
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
}
function $67e6adf7fe63e8dd$export$9d1611c77c2fe928(...args) {
    const ret = {};
    for(let i = 0; i < args.length; i++){
        const toMerge = args[i];
        for(const key in toMerge){
            if (key === "class") {
                if (ret.class !== toMerge.class) ret.class = $67e6adf7fe63e8dd$export$4f7022d2d68e2c5a([
                    ret.class,
                    toMerge.class
                ]);
            } else if (key === "style") ret.style = $67e6adf7fe63e8dd$export$8756898546458274([
                ret.style,
                toMerge.style
            ]);
            else if ($67e6adf7fe63e8dd$var$isOn(key)) {
                const existing = ret[key];
                const incoming = toMerge[key];
                if (incoming && existing !== incoming && !($67e6adf7fe63e8dd$var$isArray(existing) && existing.includes(incoming))) ret[key] = existing ? [].concat(existing, incoming) : incoming;
            } else if (key !== "") ret[key] = toMerge[key];
        }
    }
    return ret;
}
function $67e6adf7fe63e8dd$var$invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    $67e6adf7fe63e8dd$export$dae85862a8d94378(hook, instance, 7, [
        vnode,
        prevVNode
    ]);
}
const $67e6adf7fe63e8dd$var$emptyAppContext = $67e6adf7fe63e8dd$var$createAppContext();
let $67e6adf7fe63e8dd$var$uid = 0;
function $67e6adf7fe63e8dd$var$createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    const appContext = (parent ? parent.appContext : vnode.appContext) || $67e6adf7fe63e8dd$var$emptyAppContext;
    const instance = {
        uid: $67e6adf7fe63e8dd$var$uid++,
        vnode: vnode,
        type: type,
        parent: parent,
        appContext: appContext,
        root: null,
        // to be immediately set
        next: null,
        subTree: null,
        // will be set synchronously right after creation
        effect: null,
        update: null,
        // will be set synchronously right after creation
        scope: new $67e6adf7fe63e8dd$export$1168ed9dbc71ddbd(true),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: parent ? parent.provides : Object.create(appContext.provides),
        accessCache: null,
        renderCache: [],
        // local resolved assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: $67e6adf7fe63e8dd$var$normalizePropsOptions(type, appContext),
        emitsOptions: $67e6adf7fe63e8dd$var$normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        // to be set immediately
        emitted: null,
        // props default value
        propsDefaults: $67e6adf7fe63e8dd$var$EMPTY_OBJ,
        // inheritAttrs
        inheritAttrs: type.inheritAttrs,
        // state
        ctx: $67e6adf7fe63e8dd$var$EMPTY_OBJ,
        data: $67e6adf7fe63e8dd$var$EMPTY_OBJ,
        props: $67e6adf7fe63e8dd$var$EMPTY_OBJ,
        attrs: $67e6adf7fe63e8dd$var$EMPTY_OBJ,
        slots: $67e6adf7fe63e8dd$var$EMPTY_OBJ,
        refs: $67e6adf7fe63e8dd$var$EMPTY_OBJ,
        setupState: $67e6adf7fe63e8dd$var$EMPTY_OBJ,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        suspense: // suspense related
        suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    instance.ctx = $67e6adf7fe63e8dd$var$createDevRenderContext(instance);
    instance.root = parent ? parent.root : instance;
    instance.emit = $67e6adf7fe63e8dd$var$emit.bind(null, instance);
    if (vnode.ce) vnode.ce(instance);
    return instance;
}
let $67e6adf7fe63e8dd$var$currentInstance = null;
const $67e6adf7fe63e8dd$export$f13e630aa3915748 = ()=>$67e6adf7fe63e8dd$var$currentInstance || $67e6adf7fe63e8dd$var$currentRenderingInstance;
let $67e6adf7fe63e8dd$var$internalSetCurrentInstance;
let $67e6adf7fe63e8dd$var$setInSSRSetupState;
$67e6adf7fe63e8dd$var$internalSetCurrentInstance = (i)=>{
    $67e6adf7fe63e8dd$var$currentInstance = i;
};
$67e6adf7fe63e8dd$var$setInSSRSetupState = (v1)=>{
    $67e6adf7fe63e8dd$var$isInSSRComponentSetup = v1;
};
const $67e6adf7fe63e8dd$var$setCurrentInstance = (instance)=>{
    $67e6adf7fe63e8dd$var$internalSetCurrentInstance(instance);
    instance.scope.on();
};
const $67e6adf7fe63e8dd$var$unsetCurrentInstance = ()=>{
    $67e6adf7fe63e8dd$var$currentInstance && $67e6adf7fe63e8dd$var$currentInstance.scope.off();
    $67e6adf7fe63e8dd$var$internalSetCurrentInstance(null);
};
const $67e6adf7fe63e8dd$var$isBuiltInTag = /* @__PURE__ */ $67e6adf7fe63e8dd$var$makeMap("slot,component");
function $67e6adf7fe63e8dd$var$validateComponentName(name, config) {
    const appIsNativeTag = config.isNativeTag || $67e6adf7fe63e8dd$var$NO;
    if ($67e6adf7fe63e8dd$var$isBuiltInTag(name) || appIsNativeTag(name)) $67e6adf7fe63e8dd$var$warn$1("Do not use built-in or reserved HTML elements as component id: " + name);
}
function $67e6adf7fe63e8dd$var$isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4;
}
let $67e6adf7fe63e8dd$var$isInSSRComponentSetup = false;
function $67e6adf7fe63e8dd$var$setupComponent(instance, isSSR = false) {
    isSSR && $67e6adf7fe63e8dd$var$setInSSRSetupState(isSSR);
    const { props: props, children: children } = instance.vnode;
    const isStateful = $67e6adf7fe63e8dd$var$isStatefulComponent(instance);
    $67e6adf7fe63e8dd$var$initProps(instance, props, isStateful, isSSR);
    $67e6adf7fe63e8dd$var$initSlots(instance, children);
    const setupResult = isStateful ? $67e6adf7fe63e8dd$var$setupStatefulComponent(instance, isSSR) : void 0;
    isSSR && $67e6adf7fe63e8dd$var$setInSSRSetupState(false);
    return setupResult;
}
function $67e6adf7fe63e8dd$var$setupStatefulComponent(instance, isSSR) {
    var _a;
    const Component = instance.type;
    if (Component.name) $67e6adf7fe63e8dd$var$validateComponentName(Component.name, instance.appContext.config);
    if (Component.components) {
        const names = Object.keys(Component.components);
        for(let i = 0; i < names.length; i++)$67e6adf7fe63e8dd$var$validateComponentName(names[i], instance.appContext.config);
    }
    if (Component.directives) {
        const names = Object.keys(Component.directives);
        for(let i = 0; i < names.length; i++)$67e6adf7fe63e8dd$var$validateDirectiveName(names[i]);
    }
    if (Component.compilerOptions && $67e6adf7fe63e8dd$export$c93a9c496c5211fa()) $67e6adf7fe63e8dd$var$warn$1(`"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`);
    instance.accessCache = /* @__PURE__ */ Object.create(null);
    instance.proxy = $67e6adf7fe63e8dd$export$995ab8b13ad7a9d0(new Proxy(instance.ctx, $67e6adf7fe63e8dd$var$PublicInstanceProxyHandlers));
    $67e6adf7fe63e8dd$var$exposePropsOnRenderContext(instance);
    const { setup: setup } = Component;
    if (setup) {
        const setupContext = instance.setupContext = setup.length > 1 ? $67e6adf7fe63e8dd$var$createSetupContext(instance) : null;
        $67e6adf7fe63e8dd$var$setCurrentInstance(instance);
        $67e6adf7fe63e8dd$var$pauseTracking();
        const setupResult = $67e6adf7fe63e8dd$export$b22fcaf88446e9bf(setup, instance, 0, [
            $67e6adf7fe63e8dd$export$7c4b5f2b50f09f6b(instance.props),
            setupContext
        ]);
        $67e6adf7fe63e8dd$var$resetTracking();
        $67e6adf7fe63e8dd$var$unsetCurrentInstance();
        if ($67e6adf7fe63e8dd$var$isPromise(setupResult)) {
            setupResult.then($67e6adf7fe63e8dd$var$unsetCurrentInstance, $67e6adf7fe63e8dd$var$unsetCurrentInstance);
            if (isSSR) return setupResult.then((resolvedResult)=>{
                $67e6adf7fe63e8dd$var$handleSetupResult(instance, resolvedResult, isSSR);
            }).catch((e)=>{
                $67e6adf7fe63e8dd$export$d3da1ecaf1206c58(e, instance, 0);
            });
            else {
                instance.asyncDep = setupResult;
                if (!instance.suspense) {
                    const name = (_a = Component.name) != null ? _a : "Anonymous";
                    $67e6adf7fe63e8dd$var$warn$1(`Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
                }
            }
        } else $67e6adf7fe63e8dd$var$handleSetupResult(instance, setupResult, isSSR);
    } else $67e6adf7fe63e8dd$var$finishComponentSetup(instance, isSSR);
}
function $67e6adf7fe63e8dd$var$handleSetupResult(instance, setupResult, isSSR) {
    if ($67e6adf7fe63e8dd$var$isFunction(setupResult)) instance.render = setupResult;
    else if ($67e6adf7fe63e8dd$var$isObject(setupResult)) {
        if ($67e6adf7fe63e8dd$export$3868d13f8734ae81(setupResult)) $67e6adf7fe63e8dd$var$warn$1(`setup() should not return VNodes directly - return a render function instead.`);
        instance.devtoolsRawSetupState = setupResult;
        instance.setupState = $67e6adf7fe63e8dd$export$f353fd1b97db3fa0(setupResult);
        $67e6adf7fe63e8dd$var$exposeSetupStateOnRenderContext(instance);
    } else if (setupResult !== void 0) $67e6adf7fe63e8dd$var$warn$1(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
    $67e6adf7fe63e8dd$var$finishComponentSetup(instance, isSSR);
}
let $67e6adf7fe63e8dd$var$compile$1;
let $67e6adf7fe63e8dd$var$installWithProxy;
function $67e6adf7fe63e8dd$export$667bb5a67822b941(_compile) {
    $67e6adf7fe63e8dd$var$compile$1 = _compile;
    $67e6adf7fe63e8dd$var$installWithProxy = (i)=>{
        if (i.render._rc) i.withProxy = new Proxy(i.ctx, $67e6adf7fe63e8dd$var$RuntimeCompiledPublicInstanceProxyHandlers);
    };
}
const $67e6adf7fe63e8dd$export$c93a9c496c5211fa = ()=>!$67e6adf7fe63e8dd$var$compile$1;
function $67e6adf7fe63e8dd$var$finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    if (!instance.render) {
        if (!isSSR && $67e6adf7fe63e8dd$var$compile$1 && !Component.render) {
            const template = Component.template || $67e6adf7fe63e8dd$var$resolveMergedOptions(instance).template;
            if (template) {
                $67e6adf7fe63e8dd$var$startMeasure(instance, `compile`);
                const { isCustomElement: isCustomElement, compilerOptions: compilerOptions } = instance.appContext.config;
                const { delimiters: delimiters, compilerOptions: componentCompilerOptions } = Component;
                const finalCompilerOptions = $67e6adf7fe63e8dd$var$extend($67e6adf7fe63e8dd$var$extend({
                    isCustomElement: isCustomElement,
                    delimiters: delimiters
                }, compilerOptions), componentCompilerOptions);
                Component.render = $67e6adf7fe63e8dd$var$compile$1(template, finalCompilerOptions);
                $67e6adf7fe63e8dd$var$endMeasure(instance, `compile`);
            }
        }
        instance.render = Component.render || $67e6adf7fe63e8dd$var$NOOP;
        if ($67e6adf7fe63e8dd$var$installWithProxy) $67e6adf7fe63e8dd$var$installWithProxy(instance);
    }
    $67e6adf7fe63e8dd$var$setCurrentInstance(instance);
    $67e6adf7fe63e8dd$var$pauseTracking();
    try {
        $67e6adf7fe63e8dd$var$applyOptions(instance);
    } finally{
        $67e6adf7fe63e8dd$var$resetTracking();
        $67e6adf7fe63e8dd$var$unsetCurrentInstance();
    }
    if (!Component.render && instance.render === $67e6adf7fe63e8dd$var$NOOP && !isSSR) {
        if (!$67e6adf7fe63e8dd$var$compile$1 && Component.template) $67e6adf7fe63e8dd$var$warn$1(`Component provided template option but runtime compilation is not supported in this build of Vue.` + ` Use "vue.esm-browser.js" instead.`);
        else $67e6adf7fe63e8dd$var$warn$1(`Component is missing template or render function.`);
    }
}
function $67e6adf7fe63e8dd$var$getAttrsProxy(instance) {
    return instance.attrsProxy || (instance.attrsProxy = new Proxy(instance.attrs, {
        get (target, key) {
            $67e6adf7fe63e8dd$var$markAttrsAccessed();
            $67e6adf7fe63e8dd$var$track(instance, "get", "$attrs");
            return target[key];
        },
        set () {
            $67e6adf7fe63e8dd$var$warn$1(`setupContext.attrs is readonly.`);
            return false;
        },
        deleteProperty () {
            $67e6adf7fe63e8dd$var$warn$1(`setupContext.attrs is readonly.`);
            return false;
        }
    }));
}
function $67e6adf7fe63e8dd$var$getSlotsProxy(instance) {
    return instance.slotsProxy || (instance.slotsProxy = new Proxy(instance.slots, {
        get (target, key) {
            $67e6adf7fe63e8dd$var$track(instance, "get", "$slots");
            return target[key];
        }
    }));
}
function $67e6adf7fe63e8dd$var$createSetupContext(instance) {
    const expose = (exposed)=>{
        if (instance.exposed) $67e6adf7fe63e8dd$var$warn$1(`expose() should be called only once per setup().`);
        if (exposed != null) {
            let exposedType = typeof exposed;
            if (exposedType === "object") {
                if ($67e6adf7fe63e8dd$var$isArray(exposed)) exposedType = "array";
                else if ($67e6adf7fe63e8dd$export$4f9f5282de18fc69(exposed)) exposedType = "ref";
            }
            if (exposedType !== "object") $67e6adf7fe63e8dd$var$warn$1(`expose() should be passed a plain object, received ${exposedType}.`);
        }
        instance.exposed = exposed || {};
    };
    return Object.freeze({
        get attrs () {
            return $67e6adf7fe63e8dd$var$getAttrsProxy(instance);
        },
        get slots () {
            return $67e6adf7fe63e8dd$var$getSlotsProxy(instance);
        },
        get emit () {
            return (event, ...args)=>instance.emit(event, ...args);
        },
        expose: expose
    });
}
function $67e6adf7fe63e8dd$var$getExposeProxy(instance) {
    if (instance.exposed) return instance.exposeProxy || (instance.exposeProxy = new Proxy($67e6adf7fe63e8dd$export$f353fd1b97db3fa0($67e6adf7fe63e8dd$export$995ab8b13ad7a9d0(instance.exposed)), {
        get (target, key) {
            if (key in target) return target[key];
            else if (key in $67e6adf7fe63e8dd$var$publicPropertiesMap) return $67e6adf7fe63e8dd$var$publicPropertiesMap[key](instance);
        },
        has (target, key) {
            return key in target || key in $67e6adf7fe63e8dd$var$publicPropertiesMap;
        }
    }));
}
const $67e6adf7fe63e8dd$var$classifyRE = /(?:^|[-_])(\w)/g;
const $67e6adf7fe63e8dd$var$classify = (str)=>str.replace($67e6adf7fe63e8dd$var$classifyRE, (c)=>c.toUpperCase()).replace(/[-_]/g, "");
function $67e6adf7fe63e8dd$var$getComponentName(Component, includeInferred = true) {
    return $67e6adf7fe63e8dd$var$isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function $67e6adf7fe63e8dd$var$formatComponentName(instance, Component, isRoot = false) {
    let name = $67e6adf7fe63e8dd$var$getComponentName(Component);
    if (!name && Component.__file) {
        const match = Component.__file.match(/([^/\\]+)\.\w+$/);
        if (match) name = match[1];
    }
    if (!name && instance && instance.parent) {
        const inferFromRegistry = (registry)=>{
            for(const key in registry){
                if (registry[key] === Component) return key;
            }
        };
        name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? $67e6adf7fe63e8dd$var$classify(name) : isRoot ? `App` : `Anonymous`;
}
function $67e6adf7fe63e8dd$var$isClassComponent(value) {
    return $67e6adf7fe63e8dd$var$isFunction(value) && "__vccOpts" in value;
}
const $67e6adf7fe63e8dd$export$2983e091f1a1e8e2 = (getterOrOptions, debugOptions)=>{
    return $67e6adf7fe63e8dd$var$computed$1(getterOrOptions, debugOptions, $67e6adf7fe63e8dd$var$isInSSRComponentSetup);
};
function $67e6adf7fe63e8dd$export$dda1d9f60106f0e9(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
        if ($67e6adf7fe63e8dd$var$isObject(propsOrChildren) && !$67e6adf7fe63e8dd$var$isArray(propsOrChildren)) {
            if ($67e6adf7fe63e8dd$export$3868d13f8734ae81(propsOrChildren)) return $67e6adf7fe63e8dd$export$bf5c4cf060303d58(type, null, [
                propsOrChildren
            ]);
            return $67e6adf7fe63e8dd$export$bf5c4cf060303d58(type, propsOrChildren);
        } else return $67e6adf7fe63e8dd$export$bf5c4cf060303d58(type, null, propsOrChildren);
    } else {
        if (l > 3) children = Array.prototype.slice.call(arguments, 2);
        else if (l === 3 && $67e6adf7fe63e8dd$export$3868d13f8734ae81(children)) children = [
            children
        ];
        return $67e6adf7fe63e8dd$export$bf5c4cf060303d58(type, propsOrChildren, children);
    }
}
const $67e6adf7fe63e8dd$export$f2549a27e18acf2d = Symbol.for("v-scx");
const $67e6adf7fe63e8dd$export$6b1c54dc4befcda = ()=>{
    {
        const ctx = $67e6adf7fe63e8dd$export$a976684a0efeb93f($67e6adf7fe63e8dd$export$f2549a27e18acf2d);
        if (!ctx) $67e6adf7fe63e8dd$var$warn$1(`Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`);
        return ctx;
    }
};
function $67e6adf7fe63e8dd$export$aed4979be6a60047() {
    if (typeof window === "undefined") return;
    const vueStyle = {
        style: "color:#3ba776"
    };
    const numberStyle = {
        style: "color:#1677ff"
    };
    const stringStyle = {
        style: "color:#f5222d"
    };
    const keywordStyle = {
        style: "color:#eb2f96"
    };
    const formatter = {
        header (obj) {
            if (!$67e6adf7fe63e8dd$var$isObject(obj)) return null;
            if (obj.__isVue) return [
                "div",
                vueStyle,
                `VueInstance`
            ];
            else if ($67e6adf7fe63e8dd$export$4f9f5282de18fc69(obj)) return [
                "div",
                {},
                [
                    "span",
                    vueStyle,
                    genRefFlag(obj)
                ],
                "<",
                formatValue(obj.value),
                `>`
            ];
            else if ($67e6adf7fe63e8dd$export$352205f445242f02(obj)) return [
                "div",
                {},
                [
                    "span",
                    vueStyle,
                    $67e6adf7fe63e8dd$export$7f3fe6025abfa26e(obj) ? "ShallowReactive" : "Reactive"
                ],
                "<",
                formatValue(obj),
                `>${$67e6adf7fe63e8dd$export$92d09b48637741e7(obj) ? ` (readonly)` : ``}`
            ];
            else if ($67e6adf7fe63e8dd$export$92d09b48637741e7(obj)) return [
                "div",
                {},
                [
                    "span",
                    vueStyle,
                    $67e6adf7fe63e8dd$export$7f3fe6025abfa26e(obj) ? "ShallowReadonly" : "Readonly"
                ],
                "<",
                formatValue(obj),
                ">"
            ];
            return null;
        },
        hasBody (obj) {
            return obj && obj.__isVue;
        },
        body (obj) {
            if (obj && obj.__isVue) return [
                "div",
                {},
                ...formatInstance(obj.$)
            ];
        }
    };
    function formatInstance(instance) {
        const blocks = [];
        if (instance.type.props && instance.props) blocks.push(createInstanceBlock("props", $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(instance.props)));
        if (instance.setupState !== $67e6adf7fe63e8dd$var$EMPTY_OBJ) blocks.push(createInstanceBlock("setup", instance.setupState));
        if (instance.data !== $67e6adf7fe63e8dd$var$EMPTY_OBJ) blocks.push(createInstanceBlock("data", $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(instance.data)));
        const computed = extractKeys(instance, "computed");
        if (computed) blocks.push(createInstanceBlock("computed", computed));
        const injected = extractKeys(instance, "inject");
        if (injected) blocks.push(createInstanceBlock("injected", injected));
        blocks.push([
            "div",
            {},
            [
                "span",
                {
                    style: keywordStyle.style + ";opacity:0.66"
                },
                "$ (internal): "
            ],
            [
                "object",
                {
                    object: instance
                }
            ]
        ]);
        return blocks;
    }
    function createInstanceBlock(type, target) {
        target = $67e6adf7fe63e8dd$var$extend({}, target);
        if (!Object.keys(target).length) return [
            "span",
            {}
        ];
        return [
            "div",
            {
                style: "line-height:1.25em;margin-bottom:0.6em"
            },
            [
                "div",
                {
                    style: "color:#476582"
                },
                type
            ],
            [
                "div",
                {
                    style: "padding-left:1.25em"
                },
                ...Object.keys(target).map((key)=>{
                    return [
                        "div",
                        {},
                        [
                            "span",
                            keywordStyle,
                            key + ": "
                        ],
                        formatValue(target[key], false)
                    ];
                })
            ]
        ];
    }
    function formatValue(v1, asRaw = true) {
        if (typeof v1 === "number") return [
            "span",
            numberStyle,
            v1
        ];
        else if (typeof v1 === "string") return [
            "span",
            stringStyle,
            JSON.stringify(v1)
        ];
        else if (typeof v1 === "boolean") return [
            "span",
            keywordStyle,
            v1
        ];
        else if ($67e6adf7fe63e8dd$var$isObject(v1)) return [
            "object",
            {
                object: asRaw ? $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(v1) : v1
            }
        ];
        else return [
            "span",
            stringStyle,
            String(v1)
        ];
    }
    function extractKeys(instance, type) {
        const Comp = instance.type;
        if ($67e6adf7fe63e8dd$var$isFunction(Comp)) return;
        const extracted = {};
        for(const key in instance.ctx)if (isKeyOfType(Comp, key, type)) extracted[key] = instance.ctx[key];
        return extracted;
    }
    function isKeyOfType(Comp, key, type) {
        const opts = Comp[type];
        if ($67e6adf7fe63e8dd$var$isArray(opts) && opts.includes(key) || $67e6adf7fe63e8dd$var$isObject(opts) && key in opts) return true;
        if (Comp.extends && isKeyOfType(Comp.extends, key, type)) return true;
        if (Comp.mixins && Comp.mixins.some((m)=>isKeyOfType(m, key, type))) return true;
    }
    function genRefFlag(v1) {
        if ($67e6adf7fe63e8dd$export$7f3fe6025abfa26e(v1)) return `ShallowRef`;
        if (v1.effect) return `ComputedRef`;
        return `Ref`;
    }
    if (window.devtoolsFormatters) window.devtoolsFormatters.push(formatter);
    else window.devtoolsFormatters = [
        formatter
    ];
}
function $67e6adf7fe63e8dd$export$2a6d714a4d738ae(memo, render, cache, index) {
    const cached = cache[index];
    if (cached && $67e6adf7fe63e8dd$export$bf525184d622787c(cached, memo)) return cached;
    const ret = render();
    ret.memo = memo.slice();
    return cache[index] = ret;
}
function $67e6adf7fe63e8dd$export$bf525184d622787c(cached, memo) {
    const prev = cached.memo;
    if (prev.length != memo.length) return false;
    for(let i = 0; i < prev.length; i++){
        if ($67e6adf7fe63e8dd$var$hasChanged(prev[i], memo[i])) return false;
    }
    if ($67e6adf7fe63e8dd$var$isBlockTreeEnabled > 0 && $67e6adf7fe63e8dd$var$currentBlock) $67e6adf7fe63e8dd$var$currentBlock.push(cached);
    return true;
}
const $67e6adf7fe63e8dd$export$83d89fbfd8236492 = "3.4.0";
const $67e6adf7fe63e8dd$export$c106dd0671a0fc2d = $67e6adf7fe63e8dd$var$warn$1;
const $67e6adf7fe63e8dd$export$795e0ad4a0e2ed30 = $67e6adf7fe63e8dd$var$ErrorTypeStrings$1;
const $67e6adf7fe63e8dd$export$6922d3b3a607469e = $67e6adf7fe63e8dd$var$devtools$1;
const $67e6adf7fe63e8dd$export$b0c258b32c26c785 = $67e6adf7fe63e8dd$var$setDevtoolsHook$1;
const $67e6adf7fe63e8dd$export$a9679033567b336d = null;
const $67e6adf7fe63e8dd$export$83cf26e06ea620e1 = null;
const $67e6adf7fe63e8dd$export$dc678eddf276286e = null;
const $67e6adf7fe63e8dd$export$22072a82865312f6 = null;
const $67e6adf7fe63e8dd$var$svgNS = "http://www.w3.org/2000/svg";
const $67e6adf7fe63e8dd$var$mathmlNS = "http://www.w3.org/1998/Math/MathML";
const $67e6adf7fe63e8dd$var$doc = typeof document !== "undefined" ? document : null;
const $67e6adf7fe63e8dd$var$templateContainer = $67e6adf7fe63e8dd$var$doc && /* @__PURE__ */ $67e6adf7fe63e8dd$var$doc.createElement("template");
const $67e6adf7fe63e8dd$var$nodeOps = {
    insert: (child, parent, anchor)=>{
        parent.insertBefore(child, anchor || null);
    },
    remove: (child)=>{
        const parent = child.parentNode;
        if (parent) parent.removeChild(child);
    },
    createElement: (tag, namespace, is, props)=>{
        const el = namespace === "svg" ? $67e6adf7fe63e8dd$var$doc.createElementNS($67e6adf7fe63e8dd$var$svgNS, tag) : namespace === "mathml" ? $67e6adf7fe63e8dd$var$doc.createElementNS($67e6adf7fe63e8dd$var$mathmlNS, tag) : $67e6adf7fe63e8dd$var$doc.createElement(tag, is ? {
            is: is
        } : void 0);
        if (tag === "select" && props && props.multiple != null) el.setAttribute("multiple", props.multiple);
        return el;
    },
    createText: (text)=>$67e6adf7fe63e8dd$var$doc.createTextNode(text),
    createComment: (text)=>$67e6adf7fe63e8dd$var$doc.createComment(text),
    setText: (node, text)=>{
        node.nodeValue = text;
    },
    setElementText: (el, text)=>{
        el.textContent = text;
    },
    parentNode: (node)=>node.parentNode,
    nextSibling: (node)=>node.nextSibling,
    querySelector: (selector)=>$67e6adf7fe63e8dd$var$doc.querySelector(selector),
    setScopeId (el, id) {
        el.setAttribute(id, "");
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent (content, parent, anchor, namespace, start, end) {
        const before = anchor ? anchor.previousSibling : parent.lastChild;
        if (start && (start === end || start.nextSibling)) while(true){
            parent.insertBefore(start.cloneNode(true), anchor);
            if (start === end || !(start = start.nextSibling)) break;
        }
        else {
            $67e6adf7fe63e8dd$var$templateContainer.innerHTML = namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content;
            const template = $67e6adf7fe63e8dd$var$templateContainer.content;
            if (namespace === "svg" || namespace === "mathml") {
                const wrapper = template.firstChild;
                while(wrapper.firstChild)template.appendChild(wrapper.firstChild);
                template.removeChild(wrapper);
            }
            parent.insertBefore(template, anchor);
        }
        return [
            // first
            before ? before.nextSibling : parent.firstChild,
            // last
            anchor ? anchor.previousSibling : parent.lastChild
        ];
    }
};
const $67e6adf7fe63e8dd$var$TRANSITION$1 = "transition";
const $67e6adf7fe63e8dd$var$ANIMATION = "animation";
const $67e6adf7fe63e8dd$var$vtcKey = Symbol("_vtc");
const $67e6adf7fe63e8dd$export$be58926105124dd4 = (props, { slots: slots })=>$67e6adf7fe63e8dd$export$dda1d9f60106f0e9($67e6adf7fe63e8dd$export$abd95b5f5e8a8837, $67e6adf7fe63e8dd$var$resolveTransitionProps(props), slots);
$67e6adf7fe63e8dd$export$be58926105124dd4.displayName = "Transition";
const $67e6adf7fe63e8dd$var$DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: true
    },
    duration: [
        String,
        Number,
        Object
    ],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
const $67e6adf7fe63e8dd$var$TransitionPropsValidators = $67e6adf7fe63e8dd$export$be58926105124dd4.props = /* @__PURE__ */ $67e6adf7fe63e8dd$var$extend({}, $67e6adf7fe63e8dd$export$b876c99684f8cf3b, $67e6adf7fe63e8dd$var$DOMTransitionPropsValidators);
const $67e6adf7fe63e8dd$var$callHook = (hook, args = [])=>{
    if ($67e6adf7fe63e8dd$var$isArray(hook)) hook.forEach((h2)=>h2(...args));
    else if (hook) hook(...args);
};
const $67e6adf7fe63e8dd$var$hasExplicitCallback = (hook)=>{
    return hook ? $67e6adf7fe63e8dd$var$isArray(hook) ? hook.some((h2)=>h2.length > 1) : hook.length > 1 : false;
};
function $67e6adf7fe63e8dd$var$resolveTransitionProps(rawProps) {
    const baseProps = {};
    for(const key in rawProps)if (!(key in $67e6adf7fe63e8dd$var$DOMTransitionPropsValidators)) baseProps[key] = rawProps[key];
    if (rawProps.css === false) return baseProps;
    const { name: name = "v", type: type, duration: duration, enterFromClass: enterFromClass = `${name}-enter-from`, enterActiveClass: enterActiveClass = `${name}-enter-active`, enterToClass: enterToClass = `${name}-enter-to`, appearFromClass: appearFromClass = enterFromClass, appearActiveClass: appearActiveClass = enterActiveClass, appearToClass: appearToClass = enterToClass, leaveFromClass: leaveFromClass = `${name}-leave-from`, leaveActiveClass: leaveActiveClass = `${name}-leave-active`, leaveToClass: leaveToClass = `${name}-leave-to` } = rawProps;
    const durations = $67e6adf7fe63e8dd$var$normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter: onBeforeEnter, onEnter: onEnter, onEnterCancelled: onEnterCancelled, onLeave: onLeave, onLeaveCancelled: onLeaveCancelled, onBeforeAppear: onBeforeAppear = onBeforeEnter, onAppear: onAppear = onEnter, onAppearCancelled: onAppearCancelled = onEnterCancelled } = baseProps;
    const finishEnter = (el, isAppear, done)=>{
        $67e6adf7fe63e8dd$var$removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        $67e6adf7fe63e8dd$var$removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
        done && done();
    };
    const finishLeave = (el, done)=>{
        el._isLeaving = false;
        $67e6adf7fe63e8dd$var$removeTransitionClass(el, leaveFromClass);
        $67e6adf7fe63e8dd$var$removeTransitionClass(el, leaveToClass);
        $67e6adf7fe63e8dd$var$removeTransitionClass(el, leaveActiveClass);
        done && done();
    };
    const makeEnterHook = (isAppear)=>{
        return (el, done)=>{
            const hook = isAppear ? onAppear : onEnter;
            const resolve = ()=>finishEnter(el, isAppear, done);
            $67e6adf7fe63e8dd$var$callHook(hook, [
                el,
                resolve
            ]);
            $67e6adf7fe63e8dd$var$nextFrame(()=>{
                $67e6adf7fe63e8dd$var$removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                $67e6adf7fe63e8dd$var$addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                if (!$67e6adf7fe63e8dd$var$hasExplicitCallback(hook)) $67e6adf7fe63e8dd$var$whenTransitionEnds(el, type, enterDuration, resolve);
            });
        };
    };
    return $67e6adf7fe63e8dd$var$extend(baseProps, {
        onBeforeEnter (el) {
            $67e6adf7fe63e8dd$var$callHook(onBeforeEnter, [
                el
            ]);
            $67e6adf7fe63e8dd$var$addTransitionClass(el, enterFromClass);
            $67e6adf7fe63e8dd$var$addTransitionClass(el, enterActiveClass);
        },
        onBeforeAppear (el) {
            $67e6adf7fe63e8dd$var$callHook(onBeforeAppear, [
                el
            ]);
            $67e6adf7fe63e8dd$var$addTransitionClass(el, appearFromClass);
            $67e6adf7fe63e8dd$var$addTransitionClass(el, appearActiveClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave (el, done) {
            el._isLeaving = true;
            const resolve = ()=>finishLeave(el, done);
            $67e6adf7fe63e8dd$var$addTransitionClass(el, leaveFromClass);
            $67e6adf7fe63e8dd$var$forceReflow();
            $67e6adf7fe63e8dd$var$addTransitionClass(el, leaveActiveClass);
            $67e6adf7fe63e8dd$var$nextFrame(()=>{
                if (!el._isLeaving) return;
                $67e6adf7fe63e8dd$var$removeTransitionClass(el, leaveFromClass);
                $67e6adf7fe63e8dd$var$addTransitionClass(el, leaveToClass);
                if (!$67e6adf7fe63e8dd$var$hasExplicitCallback(onLeave)) $67e6adf7fe63e8dd$var$whenTransitionEnds(el, type, leaveDuration, resolve);
            });
            $67e6adf7fe63e8dd$var$callHook(onLeave, [
                el,
                resolve
            ]);
        },
        onEnterCancelled (el) {
            finishEnter(el, false);
            $67e6adf7fe63e8dd$var$callHook(onEnterCancelled, [
                el
            ]);
        },
        onAppearCancelled (el) {
            finishEnter(el, true);
            $67e6adf7fe63e8dd$var$callHook(onAppearCancelled, [
                el
            ]);
        },
        onLeaveCancelled (el) {
            finishLeave(el);
            $67e6adf7fe63e8dd$var$callHook(onLeaveCancelled, [
                el
            ]);
        }
    });
}
function $67e6adf7fe63e8dd$var$normalizeDuration(duration) {
    if (duration == null) return null;
    else if ($67e6adf7fe63e8dd$var$isObject(duration)) return [
        $67e6adf7fe63e8dd$var$NumberOf(duration.enter),
        $67e6adf7fe63e8dd$var$NumberOf(duration.leave)
    ];
    else {
        const n = $67e6adf7fe63e8dd$var$NumberOf(duration);
        return [
            n,
            n
        ];
    }
}
function $67e6adf7fe63e8dd$var$NumberOf(val) {
    const res = $67e6adf7fe63e8dd$var$toNumber(val);
    $67e6adf7fe63e8dd$export$dfbcecb440255e4a(res, "<transition> explicit duration");
    return res;
}
function $67e6adf7fe63e8dd$var$addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c)=>c && el.classList.add(c));
    (el[$67e6adf7fe63e8dd$var$vtcKey] || (el[$67e6adf7fe63e8dd$var$vtcKey] = /* @__PURE__ */ new Set())).add(cls);
}
function $67e6adf7fe63e8dd$var$removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c)=>c && el.classList.remove(c));
    const _vtc = el[$67e6adf7fe63e8dd$var$vtcKey];
    if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) el[$67e6adf7fe63e8dd$var$vtcKey] = void 0;
    }
}
function $67e6adf7fe63e8dd$var$nextFrame(cb) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(cb);
    });
}
let $67e6adf7fe63e8dd$var$endId = 0;
function $67e6adf7fe63e8dd$var$whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = el._endId = ++$67e6adf7fe63e8dd$var$endId;
    const resolveIfNotStale = ()=>{
        if (id === el._endId) resolve();
    };
    if (explicitTimeout) return setTimeout(resolveIfNotStale, explicitTimeout);
    const { type: type, timeout: timeout, propCount: propCount } = $67e6adf7fe63e8dd$var$getTransitionInfo(el, expectedType);
    if (!type) return resolve();
    const endEvent = type + "end";
    let ended = 0;
    const end = ()=>{
        el.removeEventListener(endEvent, onEnd);
        resolveIfNotStale();
    };
    const onEnd = (e)=>{
        if (e.target === el && ++ended >= propCount) end();
    };
    setTimeout(()=>{
        if (ended < propCount) end();
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
}
function $67e6adf7fe63e8dd$var$getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    const getStyleProperties = (key)=>(styles[key] || "").split(", ");
    const transitionDelays = getStyleProperties(`${$67e6adf7fe63e8dd$var$TRANSITION$1}Delay`);
    const transitionDurations = getStyleProperties(`${$67e6adf7fe63e8dd$var$TRANSITION$1}Duration`);
    const transitionTimeout = $67e6adf7fe63e8dd$var$getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(`${$67e6adf7fe63e8dd$var$ANIMATION}Delay`);
    const animationDurations = getStyleProperties(`${$67e6adf7fe63e8dd$var$ANIMATION}Duration`);
    const animationTimeout = $67e6adf7fe63e8dd$var$getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    if (expectedType === $67e6adf7fe63e8dd$var$TRANSITION$1) {
        if (transitionTimeout > 0) {
            type = $67e6adf7fe63e8dd$var$TRANSITION$1;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    } else if (expectedType === $67e6adf7fe63e8dd$var$ANIMATION) {
        if (animationTimeout > 0) {
            type = $67e6adf7fe63e8dd$var$ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0 ? transitionTimeout > animationTimeout ? $67e6adf7fe63e8dd$var$TRANSITION$1 : $67e6adf7fe63e8dd$var$ANIMATION : null;
        propCount = type ? type === $67e6adf7fe63e8dd$var$TRANSITION$1 ? transitionDurations.length : animationDurations.length : 0;
    }
    const hasTransform = type === $67e6adf7fe63e8dd$var$TRANSITION$1 && /\b(transform|all)(,|$)/.test(getStyleProperties(`${$67e6adf7fe63e8dd$var$TRANSITION$1}Property`).toString());
    return {
        type: type,
        timeout: timeout,
        propCount: propCount,
        hasTransform: hasTransform
    };
}
function $67e6adf7fe63e8dd$var$getTimeout(delays, durations) {
    while(delays.length < durations.length)delays = delays.concat(delays);
    return Math.max(...durations.map((d, i)=>$67e6adf7fe63e8dd$var$toMs(d) + $67e6adf7fe63e8dd$var$toMs(delays[i])));
}
function $67e6adf7fe63e8dd$var$toMs(s) {
    if (s === "auto") return 0;
    return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function $67e6adf7fe63e8dd$var$forceReflow() {
    return document.body.offsetHeight;
}
function $67e6adf7fe63e8dd$var$patchClass(el, value, isSVG) {
    const transitionClasses = el[$67e6adf7fe63e8dd$var$vtcKey];
    if (transitionClasses) value = (value ? [
        value,
        ...transitionClasses
    ] : [
        ...transitionClasses
    ]).join(" ");
    if (value == null) el.removeAttribute("class");
    else if (isSVG) el.setAttribute("class", value);
    else el.className = value;
}
const $67e6adf7fe63e8dd$var$vShowOldKey = Symbol("_vod");
const $67e6adf7fe63e8dd$export$5cb4fcdc6937d7e1 = {
    beforeMount (el, { value: value }, { transition: transition }) {
        el[$67e6adf7fe63e8dd$var$vShowOldKey] = el.style.display === "none" ? "" : el.style.display;
        if (transition && value) transition.beforeEnter(el);
        else $67e6adf7fe63e8dd$var$setDisplay(el, value);
    },
    mounted (el, { value: value }, { transition: transition }) {
        if (transition && value) transition.enter(el);
    },
    updated (el, { value: value, oldValue: oldValue }, { transition: transition }) {
        if (!value === !oldValue) return;
        if (transition) {
            if (value) {
                transition.beforeEnter(el);
                $67e6adf7fe63e8dd$var$setDisplay(el, true);
                transition.enter(el);
            } else transition.leave(el, ()=>{
                $67e6adf7fe63e8dd$var$setDisplay(el, false);
            });
        } else $67e6adf7fe63e8dd$var$setDisplay(el, value);
    },
    beforeUnmount (el, { value: value }) {
        $67e6adf7fe63e8dd$var$setDisplay(el, value);
    }
};
function $67e6adf7fe63e8dd$var$setDisplay(el, value) {
    el.style.display = value ? el[$67e6adf7fe63e8dd$var$vShowOldKey] : "none";
}
const $67e6adf7fe63e8dd$var$CSS_VAR_TEXT = Symbol("CSS_VAR_TEXT");
function $67e6adf7fe63e8dd$export$ef28b76f07940108(getter) {
    const instance = $67e6adf7fe63e8dd$export$f13e630aa3915748();
    if (!instance) {
        $67e6adf7fe63e8dd$export$c106dd0671a0fc2d(`useCssVars is called without current active component instance.`);
        return;
    }
    const updateTeleports = instance.ut = (vars = getter(instance.proxy))=>{
        Array.from(document.querySelectorAll(`[data-v-owner="${instance.uid}"]`)).forEach((node)=>$67e6adf7fe63e8dd$var$setVarsOnNode(node, vars));
    };
    const setVars = ()=>{
        const vars = getter(instance.proxy);
        $67e6adf7fe63e8dd$var$setVarsOnVNode(instance.subTree, vars);
        updateTeleports(vars);
    };
    $67e6adf7fe63e8dd$export$b7f27ea67102d543(setVars);
    $67e6adf7fe63e8dd$export$6d1641039221b5cb(()=>{
        const ob = new MutationObserver(setVars);
        ob.observe(instance.subTree.el.parentNode, {
            childList: true
        });
        $67e6adf7fe63e8dd$export$13348a43ccacfe58(()=>ob.disconnect());
    });
}
function $67e6adf7fe63e8dd$var$setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) suspense.effects.push(()=>{
            $67e6adf7fe63e8dd$var$setVarsOnVNode(suspense.activeBranch, vars);
        });
    }
    while(vnode.component)vnode = vnode.component.subTree;
    if (vnode.shapeFlag & 1 && vnode.el) $67e6adf7fe63e8dd$var$setVarsOnNode(vnode.el, vars);
    else if (vnode.type === $67e6adf7fe63e8dd$export$ffb0004e005737fa) vnode.children.forEach((c)=>$67e6adf7fe63e8dd$var$setVarsOnVNode(c, vars));
    else if (vnode.type === $67e6adf7fe63e8dd$export$c1b9a1d3af45b7b6) {
        let { el: el, anchor: anchor } = vnode;
        while(el){
            $67e6adf7fe63e8dd$var$setVarsOnNode(el, vars);
            if (el === anchor) break;
            el = el.nextSibling;
        }
    }
}
function $67e6adf7fe63e8dd$var$setVarsOnNode(el, vars) {
    if (el.nodeType === 1) {
        const style = el.style;
        let cssText = "";
        for(const key in vars){
            style.setProperty(`--${key}`, vars[key]);
            cssText += `--${key}: ${vars[key]};`;
        }
        style[$67e6adf7fe63e8dd$var$CSS_VAR_TEXT] = cssText;
    }
}
function $67e6adf7fe63e8dd$var$patchStyle(el, prev, next) {
    const style = el.style;
    const isCssString = $67e6adf7fe63e8dd$var$isString(next);
    if (next && !isCssString) {
        if (prev && !$67e6adf7fe63e8dd$var$isString(prev)) {
            for(const key in prev)if (next[key] == null) $67e6adf7fe63e8dd$var$setStyle(style, key, "");
        }
        for(const key in next)$67e6adf7fe63e8dd$var$setStyle(style, key, next[key]);
    } else {
        const currentDisplay = style.display;
        if (isCssString) {
            if (prev !== next) {
                const cssVarText = style[$67e6adf7fe63e8dd$var$CSS_VAR_TEXT];
                if (cssVarText) next += ";" + cssVarText;
                style.cssText = next;
            }
        } else if (prev) el.removeAttribute("style");
        if ($67e6adf7fe63e8dd$var$vShowOldKey in el) style.display = currentDisplay;
    }
}
const $67e6adf7fe63e8dd$var$semicolonRE = /[^\\];\s*$/;
const $67e6adf7fe63e8dd$var$importantRE = /\s*!important$/;
function $67e6adf7fe63e8dd$var$setStyle(style, name, val) {
    if ($67e6adf7fe63e8dd$var$isArray(val)) val.forEach((v1)=>$67e6adf7fe63e8dd$var$setStyle(style, name, v1));
    else {
        if (val == null) val = "";
        if ($67e6adf7fe63e8dd$var$semicolonRE.test(val)) $67e6adf7fe63e8dd$export$c106dd0671a0fc2d(`Unexpected semicolon at the end of '${name}' style value: '${val}'`);
        if (name.startsWith("--")) style.setProperty(name, val);
        else {
            const prefixed = $67e6adf7fe63e8dd$var$autoPrefix(style, name);
            if ($67e6adf7fe63e8dd$var$importantRE.test(val)) style.setProperty($67e6adf7fe63e8dd$var$hyphenate(prefixed), val.replace($67e6adf7fe63e8dd$var$importantRE, ""), "important");
            else style[prefixed] = val;
        }
    }
}
const $67e6adf7fe63e8dd$var$prefixes = [
    "Webkit",
    "Moz",
    "ms"
];
const $67e6adf7fe63e8dd$var$prefixCache = {};
function $67e6adf7fe63e8dd$var$autoPrefix(style, rawName) {
    const cached = $67e6adf7fe63e8dd$var$prefixCache[rawName];
    if (cached) return cached;
    let name = $67e6adf7fe63e8dd$export$161d051f5dd25de7(rawName);
    if (name !== "filter" && name in style) return $67e6adf7fe63e8dd$var$prefixCache[rawName] = name;
    name = $67e6adf7fe63e8dd$export$9a00dee1beb8f576(name);
    for(let i = 0; i < $67e6adf7fe63e8dd$var$prefixes.length; i++){
        const prefixed = $67e6adf7fe63e8dd$var$prefixes[i] + name;
        if (prefixed in style) return $67e6adf7fe63e8dd$var$prefixCache[rawName] = prefixed;
    }
    return rawName;
}
const $67e6adf7fe63e8dd$var$xlinkNS = "http://www.w3.org/1999/xlink";
function $67e6adf7fe63e8dd$var$patchAttr(el, key, value, isSVG, instance) {
    if (isSVG && key.startsWith("xlink:")) {
        if (value == null) el.removeAttributeNS($67e6adf7fe63e8dd$var$xlinkNS, key.slice(6, key.length));
        else el.setAttributeNS($67e6adf7fe63e8dd$var$xlinkNS, key, value);
    } else {
        const isBoolean = $67e6adf7fe63e8dd$var$isSpecialBooleanAttr(key);
        if (value == null || isBoolean && !$67e6adf7fe63e8dd$var$includeBooleanAttr(value)) el.removeAttribute(key);
        else el.setAttribute(key, isBoolean ? "" : value);
    }
}
function $67e6adf7fe63e8dd$var$patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === "innerHTML" || key === "textContent") {
        if (prevChildren) unmountChildren(prevChildren, parentComponent, parentSuspense);
        el[key] = value == null ? "" : value;
        return;
    }
    const tag = el.tagName;
    if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
    !tag.includes("-")) {
        el._value = value;
        const oldValue = tag === "OPTION" ? el.getAttribute("value") : el.value;
        const newValue = value == null ? "" : value;
        if (oldValue !== newValue) el.value = newValue;
        if (value == null) el.removeAttribute(key);
        return;
    }
    let needRemove = false;
    if (value === "" || value == null) {
        const type = typeof el[key];
        if (type === "boolean") value = $67e6adf7fe63e8dd$var$includeBooleanAttr(value);
        else if (value == null && type === "string") {
            value = "";
            needRemove = true;
        } else if (type === "number") {
            value = 0;
            needRemove = true;
        }
    }
    try {
        el[key] = value;
    } catch (e) {
        if (!needRemove) $67e6adf7fe63e8dd$export$c106dd0671a0fc2d(`Failed setting prop "${key}" on <${tag.toLowerCase()}>: value ${value} is invalid.`, e);
    }
    needRemove && el.removeAttribute(key);
}
function $67e6adf7fe63e8dd$var$addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function $67e6adf7fe63e8dd$var$removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
const $67e6adf7fe63e8dd$var$veiKey = Symbol("_vei");
function $67e6adf7fe63e8dd$var$patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    const invokers = el[$67e6adf7fe63e8dd$var$veiKey] || (el[$67e6adf7fe63e8dd$var$veiKey] = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) existingInvoker.value = nextValue;
    else {
        const [name, options] = $67e6adf7fe63e8dd$var$parseName(rawName);
        if (nextValue) {
            const invoker = invokers[rawName] = $67e6adf7fe63e8dd$var$createInvoker(nextValue, instance);
            $67e6adf7fe63e8dd$var$addEventListener(el, name, invoker, options);
        } else if (existingInvoker) {
            $67e6adf7fe63e8dd$var$removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = void 0;
        }
    }
}
const $67e6adf7fe63e8dd$var$optionsModifierRE = /(?:Once|Passive|Capture)$/;
function $67e6adf7fe63e8dd$var$parseName(name) {
    let options;
    if ($67e6adf7fe63e8dd$var$optionsModifierRE.test(name)) {
        options = {};
        let m;
        while(m = name.match($67e6adf7fe63e8dd$var$optionsModifierRE)){
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
        }
    }
    const event = name[2] === ":" ? name.slice(3) : $67e6adf7fe63e8dd$var$hyphenate(name.slice(2));
    return [
        event,
        options
    ];
}
let $67e6adf7fe63e8dd$var$cachedNow = 0;
const $67e6adf7fe63e8dd$var$p = /* @__PURE__ */ Promise.resolve();
const $67e6adf7fe63e8dd$var$getNow = ()=>$67e6adf7fe63e8dd$var$cachedNow || ($67e6adf7fe63e8dd$var$p.then(()=>$67e6adf7fe63e8dd$var$cachedNow = 0), $67e6adf7fe63e8dd$var$cachedNow = Date.now());
function $67e6adf7fe63e8dd$var$createInvoker(initialValue, instance) {
    const invoker = (e)=>{
        if (!e._vts) e._vts = Date.now();
        else if (e._vts <= invoker.attached) return;
        $67e6adf7fe63e8dd$export$dae85862a8d94378($67e6adf7fe63e8dd$var$patchStopImmediatePropagation(e, invoker.value), instance, 5, [
            e
        ]);
    };
    invoker.value = initialValue;
    invoker.attached = $67e6adf7fe63e8dd$var$getNow();
    return invoker;
}
function $67e6adf7fe63e8dd$var$patchStopImmediatePropagation(e, value) {
    if ($67e6adf7fe63e8dd$var$isArray(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = ()=>{
            originalStop.call(e);
            e._stopped = true;
        };
        return value.map((fn)=>(e2)=>!e2._stopped && fn && fn(e2));
    } else return value;
}
const $67e6adf7fe63e8dd$var$isNativeOn = (key)=>key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
    key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
const $67e6adf7fe63e8dd$var$patchProp = (el, key, prevValue, nextValue, namespace, prevChildren, parentComponent, parentSuspense, unmountChildren)=>{
    const isSVG = namespace === "svg";
    if (key === "class") $67e6adf7fe63e8dd$var$patchClass(el, nextValue, isSVG);
    else if (key === "style") $67e6adf7fe63e8dd$var$patchStyle(el, prevValue, nextValue);
    else if ($67e6adf7fe63e8dd$var$isOn(key)) {
        if (!$67e6adf7fe63e8dd$var$isModelListener(key)) $67e6adf7fe63e8dd$var$patchEvent(el, key, prevValue, nextValue, parentComponent);
    } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : $67e6adf7fe63e8dd$var$shouldSetAsProp(el, key, nextValue, isSVG)) $67e6adf7fe63e8dd$var$patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
    else {
        if (key === "true-value") el._trueValue = nextValue;
        else if (key === "false-value") el._falseValue = nextValue;
        $67e6adf7fe63e8dd$var$patchAttr(el, key, nextValue, isSVG);
    }
};
function $67e6adf7fe63e8dd$var$shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
        if (key === "innerHTML" || key === "textContent") return true;
        if (key in el && $67e6adf7fe63e8dd$var$isNativeOn(key) && $67e6adf7fe63e8dd$var$isFunction(value)) return true;
        return false;
    }
    if (key === "spellcheck" || key === "draggable" || key === "translate") return false;
    if (key === "form") return false;
    if (key === "list" && el.tagName === "INPUT") return false;
    if (key === "type" && el.tagName === "TEXTAREA") return false;
    if (key === "width" || key === "height") {
        const tag = el.tagName;
        if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") return false;
    }
    if ($67e6adf7fe63e8dd$var$isNativeOn(key) && $67e6adf7fe63e8dd$var$isString(value)) return false;
    return key in el;
}
/*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
function $67e6adf7fe63e8dd$export$a00e2346eabbdbef(options, hydrate2) {
    const Comp = $67e6adf7fe63e8dd$export$afa64b67e5a01c3b(options);
    class VueCustomElement extends $67e6adf7fe63e8dd$export$b337c1a55163dbe3 {
        constructor(initialProps){
            super(Comp, initialProps, hydrate2);
        }
    }
    VueCustomElement.def = Comp;
    return VueCustomElement;
}
/*! #__NO_SIDE_EFFECTS__ */ const $67e6adf7fe63e8dd$export$6debb2e68f212638 = /* @__NO_SIDE_EFFECTS__ */ (options)=>{
    return /* @__PURE__ */ $67e6adf7fe63e8dd$export$a00e2346eabbdbef(options, $67e6adf7fe63e8dd$export$fa8d919ba61d84db);
};
const $67e6adf7fe63e8dd$var$BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
};
class $67e6adf7fe63e8dd$export$b337c1a55163dbe3 extends $67e6adf7fe63e8dd$var$BaseClass {
    constructor(_def, _props = {}, hydrate2){
        super();
        this._def = _def;
        this._props = _props;
        /**
     * @internal
     */ this._instance = null;
        this._connected = false;
        this._resolved = false;
        this._numberProps = null;
        this._ob = null;
        if (this.shadowRoot && hydrate2) hydrate2(this._createVNode(), this.shadowRoot);
        else {
            if (this.shadowRoot) $67e6adf7fe63e8dd$export$c106dd0671a0fc2d(`Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use \`defineSSRCustomElement\`.`);
            this.attachShadow({
                mode: "open"
            });
            if (!this._def.__asyncLoader) this._resolveProps(this._def);
        }
    }
    connectedCallback() {
        this._connected = true;
        if (!this._instance) {
            if (this._resolved) this._update();
            else this._resolveDef();
        }
    }
    disconnectedCallback() {
        this._connected = false;
        if (this._ob) {
            this._ob.disconnect();
            this._ob = null;
        }
        $67e6adf7fe63e8dd$export$bdd553fddd433dcb(()=>{
            if (!this._connected) {
                $67e6adf7fe63e8dd$export$b3890eb0ae9dca99(null, this.shadowRoot);
                this._instance = null;
            }
        });
    }
    /**
   * resolve inner component definition (handle possible async component)
   */ _resolveDef() {
        this._resolved = true;
        for(let i = 0; i < this.attributes.length; i++)this._setAttr(this.attributes[i].name);
        this._ob = new MutationObserver((mutations)=>{
            for (const m of mutations)this._setAttr(m.attributeName);
        });
        this._ob.observe(this, {
            attributes: true
        });
        const resolve = (def, isAsync = false)=>{
            const { props: props, styles: styles } = def;
            let numberProps;
            if (props && !$67e6adf7fe63e8dd$var$isArray(props)) for(const key in props){
                const opt = props[key];
                if (opt === Number || opt && opt.type === Number) {
                    if (key in this._props) this._props[key] = $67e6adf7fe63e8dd$var$toNumber(this._props[key]);
                    (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[$67e6adf7fe63e8dd$export$161d051f5dd25de7(key)] = true;
                }
            }
            this._numberProps = numberProps;
            if (isAsync) this._resolveProps(def);
            this._applyStyles(styles);
            this._update();
        };
        const asyncDef = this._def.__asyncLoader;
        if (asyncDef) asyncDef().then((def)=>resolve(def, true));
        else resolve(this._def);
    }
    _resolveProps(def) {
        const { props: props } = def;
        const declaredPropKeys = $67e6adf7fe63e8dd$var$isArray(props) ? props : Object.keys(props || {});
        for (const key of Object.keys(this))if (key[0] !== "_" && declaredPropKeys.includes(key)) this._setProp(key, this[key], true, false);
        for (const key of declaredPropKeys.map($67e6adf7fe63e8dd$export$161d051f5dd25de7))Object.defineProperty(this, key, {
            get () {
                return this._getProp(key);
            },
            set (val) {
                this._setProp(key, val);
            }
        });
    }
    _setAttr(key) {
        let value = this.getAttribute(key);
        const camelKey = $67e6adf7fe63e8dd$export$161d051f5dd25de7(key);
        if (this._numberProps && this._numberProps[camelKey]) value = $67e6adf7fe63e8dd$var$toNumber(value);
        this._setProp(camelKey, value, false);
    }
    /**
   * @internal
   */ _getProp(key) {
        return this._props[key];
    }
    /**
   * @internal
   */ _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
        if (val !== this._props[key]) {
            this._props[key] = val;
            if (shouldUpdate && this._instance) this._update();
            if (shouldReflect) {
                if (val === true) this.setAttribute($67e6adf7fe63e8dd$var$hyphenate(key), "");
                else if (typeof val === "string" || typeof val === "number") this.setAttribute($67e6adf7fe63e8dd$var$hyphenate(key), val + "");
                else if (!val) this.removeAttribute($67e6adf7fe63e8dd$var$hyphenate(key));
            }
        }
    }
    _update() {
        $67e6adf7fe63e8dd$export$b3890eb0ae9dca99(this._createVNode(), this.shadowRoot);
    }
    _createVNode() {
        const vnode = $67e6adf7fe63e8dd$export$bf5c4cf060303d58(this._def, $67e6adf7fe63e8dd$var$extend({}, this._props));
        if (!this._instance) vnode.ce = (instance)=>{
            this._instance = instance;
            instance.isCE = true;
            instance.ceReload = (newStyles)=>{
                if (this._styles) {
                    this._styles.forEach((s)=>this.shadowRoot.removeChild(s));
                    this._styles.length = 0;
                }
                this._applyStyles(newStyles);
                this._instance = null;
                this._update();
            };
            const dispatch = (event, args)=>{
                this.dispatchEvent(new CustomEvent(event, {
                    detail: args
                }));
            };
            instance.emit = (event, ...args)=>{
                dispatch(event, args);
                if ($67e6adf7fe63e8dd$var$hyphenate(event) !== event) dispatch($67e6adf7fe63e8dd$var$hyphenate(event), args);
            };
            let parent = this;
            while(parent = parent && (parent.parentNode || parent.host))if (parent instanceof $67e6adf7fe63e8dd$export$b337c1a55163dbe3) {
                instance.parent = parent._instance;
                instance.provides = parent._instance.provides;
                break;
            }
        };
        return vnode;
    }
    _applyStyles(styles) {
        if (styles) styles.forEach((css)=>{
            const s = document.createElement("style");
            s.textContent = css;
            this.shadowRoot.appendChild(s);
            (this._styles || (this._styles = [])).push(s);
        });
    }
}
function $67e6adf7fe63e8dd$export$9300d5b90d56e3d1(name = "$style") {
    {
        const instance = $67e6adf7fe63e8dd$export$f13e630aa3915748();
        if (!instance) {
            $67e6adf7fe63e8dd$export$c106dd0671a0fc2d(`useCssModule must be called inside setup()`);
            return $67e6adf7fe63e8dd$var$EMPTY_OBJ;
        }
        const modules = instance.type.__cssModules;
        if (!modules) {
            $67e6adf7fe63e8dd$export$c106dd0671a0fc2d(`Current instance does not have CSS modules injected.`);
            return $67e6adf7fe63e8dd$var$EMPTY_OBJ;
        }
        const mod = modules[name];
        if (!mod) {
            $67e6adf7fe63e8dd$export$c106dd0671a0fc2d(`Current instance does not have CSS module named "${name}".`);
            return $67e6adf7fe63e8dd$var$EMPTY_OBJ;
        }
        return mod;
    }
}
const $67e6adf7fe63e8dd$var$positionMap = /* @__PURE__ */ new WeakMap();
const $67e6adf7fe63e8dd$var$newPositionMap = /* @__PURE__ */ new WeakMap();
const $67e6adf7fe63e8dd$var$moveCbKey = Symbol("_moveCb");
const $67e6adf7fe63e8dd$var$enterCbKey = Symbol("_enterCb");
const $67e6adf7fe63e8dd$var$TransitionGroupImpl = {
    name: "TransitionGroup",
    props: /* @__PURE__ */ $67e6adf7fe63e8dd$var$extend({}, $67e6adf7fe63e8dd$var$TransitionPropsValidators, {
        tag: String,
        moveClass: String
    }),
    setup (props, { slots: slots }) {
        const instance = $67e6adf7fe63e8dd$export$f13e630aa3915748();
        const state = $67e6adf7fe63e8dd$export$d2a0a1bc267c90f6();
        let prevChildren;
        let children;
        $67e6adf7fe63e8dd$export$5876c47052fb88b1(()=>{
            if (!prevChildren.length) return;
            const moveClass = props.moveClass || `${props.name || "v"}-move`;
            if (!$67e6adf7fe63e8dd$var$hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) return;
            prevChildren.forEach($67e6adf7fe63e8dd$var$callPendingCbs);
            prevChildren.forEach($67e6adf7fe63e8dd$var$recordPosition);
            const movedChildren = prevChildren.filter($67e6adf7fe63e8dd$var$applyTranslation);
            $67e6adf7fe63e8dd$var$forceReflow();
            movedChildren.forEach((c)=>{
                const el = c.el;
                const style = el.style;
                $67e6adf7fe63e8dd$var$addTransitionClass(el, moveClass);
                style.transform = style.webkitTransform = style.transitionDuration = "";
                const cb = el[$67e6adf7fe63e8dd$var$moveCbKey] = (e)=>{
                    if (e && e.target !== el) return;
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener("transitionend", cb);
                        el[$67e6adf7fe63e8dd$var$moveCbKey] = null;
                        $67e6adf7fe63e8dd$var$removeTransitionClass(el, moveClass);
                    }
                };
                el.addEventListener("transitionend", cb);
            });
        });
        return ()=>{
            const rawProps = $67e6adf7fe63e8dd$export$ab18938b9fc5f28e(props);
            const cssTransitionProps = $67e6adf7fe63e8dd$var$resolveTransitionProps(rawProps);
            let tag = rawProps.tag || $67e6adf7fe63e8dd$export$ffb0004e005737fa;
            prevChildren = children;
            children = slots.default ? $67e6adf7fe63e8dd$export$a67f9b1229c7c97a(slots.default()) : [];
            for(let i = 0; i < children.length; i++){
                const child = children[i];
                if (child.key != null) $67e6adf7fe63e8dd$export$7770a22486565649(child, $67e6adf7fe63e8dd$export$76ac1779589cd824(child, cssTransitionProps, state, instance));
                else $67e6adf7fe63e8dd$export$c106dd0671a0fc2d(`<TransitionGroup> children must be keyed.`);
            }
            if (prevChildren) for(let i = 0; i < prevChildren.length; i++){
                const child = prevChildren[i];
                $67e6adf7fe63e8dd$export$7770a22486565649(child, $67e6adf7fe63e8dd$export$76ac1779589cd824(child, cssTransitionProps, state, instance));
                $67e6adf7fe63e8dd$var$positionMap.set(child, child.el.getBoundingClientRect());
            }
            return $67e6adf7fe63e8dd$export$bf5c4cf060303d58(tag, null, children);
        };
    }
};
const $67e6adf7fe63e8dd$var$removeMode = (props)=>delete props.mode;
/* @__PURE__ */ $67e6adf7fe63e8dd$var$removeMode($67e6adf7fe63e8dd$var$TransitionGroupImpl.props);
const $67e6adf7fe63e8dd$export$19ffa8f511f7bc2e = $67e6adf7fe63e8dd$var$TransitionGroupImpl;
function $67e6adf7fe63e8dd$var$callPendingCbs(c) {
    const el = c.el;
    if (el[$67e6adf7fe63e8dd$var$moveCbKey]) el[$67e6adf7fe63e8dd$var$moveCbKey]();
    if (el[$67e6adf7fe63e8dd$var$enterCbKey]) el[$67e6adf7fe63e8dd$var$enterCbKey]();
}
function $67e6adf7fe63e8dd$var$recordPosition(c) {
    $67e6adf7fe63e8dd$var$newPositionMap.set(c, c.el.getBoundingClientRect());
}
function $67e6adf7fe63e8dd$var$applyTranslation(c) {
    const oldPos = $67e6adf7fe63e8dd$var$positionMap.get(c);
    const newPos = $67e6adf7fe63e8dd$var$newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = "0s";
        return c;
    }
}
function $67e6adf7fe63e8dd$var$hasCSSTransform(el, root, moveClass) {
    const clone = el.cloneNode();
    const _vtc = el[$67e6adf7fe63e8dd$var$vtcKey];
    if (_vtc) _vtc.forEach((cls)=>{
        cls.split(/\s+/).forEach((c)=>c && clone.classList.remove(c));
    });
    moveClass.split(/\s+/).forEach((c)=>c && clone.classList.add(c));
    clone.style.display = "none";
    const container = root.nodeType === 1 ? root : root.parentNode;
    container.appendChild(clone);
    const { hasTransform: hasTransform } = $67e6adf7fe63e8dd$var$getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}
const $67e6adf7fe63e8dd$var$getModelAssigner = (vnode)=>{
    const fn = vnode.props["onUpdate:modelValue"] || false;
    return $67e6adf7fe63e8dd$var$isArray(fn) ? (value)=>$67e6adf7fe63e8dd$var$invokeArrayFns(fn, value) : fn;
};
function $67e6adf7fe63e8dd$var$onCompositionStart(e) {
    e.target.composing = true;
}
function $67e6adf7fe63e8dd$var$onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
        target.composing = false;
        target.dispatchEvent(new Event("input"));
    }
}
const $67e6adf7fe63e8dd$var$assignKey = Symbol("_assign");
const $67e6adf7fe63e8dd$export$f1f88689f5728478 = {
    created (el, { modifiers: { lazy: lazy, trim: trim, number: number } }, vnode) {
        el[$67e6adf7fe63e8dd$var$assignKey] = $67e6adf7fe63e8dd$var$getModelAssigner(vnode);
        const castToNumber = number || vnode.props && vnode.props.type === "number";
        $67e6adf7fe63e8dd$var$addEventListener(el, lazy ? "change" : "input", (e)=>{
            if (e.target.composing) return;
            let domValue = el.value;
            if (trim) domValue = domValue.trim();
            if (castToNumber) domValue = $67e6adf7fe63e8dd$var$looseToNumber(domValue);
            el[$67e6adf7fe63e8dd$var$assignKey](domValue);
        });
        if (trim) $67e6adf7fe63e8dd$var$addEventListener(el, "change", ()=>{
            el.value = el.value.trim();
        });
        if (!lazy) {
            $67e6adf7fe63e8dd$var$addEventListener(el, "compositionstart", $67e6adf7fe63e8dd$var$onCompositionStart);
            $67e6adf7fe63e8dd$var$addEventListener(el, "compositionend", $67e6adf7fe63e8dd$var$onCompositionEnd);
            $67e6adf7fe63e8dd$var$addEventListener(el, "change", $67e6adf7fe63e8dd$var$onCompositionEnd);
        }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted (el, { value: value }) {
        el.value = value == null ? "" : value;
    },
    beforeUpdate (el, { value: value, modifiers: { lazy: lazy, trim: trim, number: number } }, vnode) {
        el[$67e6adf7fe63e8dd$var$assignKey] = $67e6adf7fe63e8dd$var$getModelAssigner(vnode);
        if (el.composing) return;
        const elValue = number || el.type === "number" ? $67e6adf7fe63e8dd$var$looseToNumber(el.value) : el.value;
        const newValue = value == null ? "" : value;
        if (elValue === newValue) return;
        if (document.activeElement === el && el.type !== "range") {
            if (lazy) return;
            if (trim && el.value.trim() === newValue) return;
        }
        el.value = newValue;
    }
};
const $67e6adf7fe63e8dd$export$8847c2e532b35714 = {
    // #4096 array checkboxes need to be deep traversed
    deep: true,
    created (el, _, vnode) {
        el[$67e6adf7fe63e8dd$var$assignKey] = $67e6adf7fe63e8dd$var$getModelAssigner(vnode);
        $67e6adf7fe63e8dd$var$addEventListener(el, "change", ()=>{
            const modelValue = el._modelValue;
            const elementValue = $67e6adf7fe63e8dd$var$getValue(el);
            const checked = el.checked;
            const assign = el[$67e6adf7fe63e8dd$var$assignKey];
            if ($67e6adf7fe63e8dd$var$isArray(modelValue)) {
                const index = $67e6adf7fe63e8dd$var$looseIndexOf(modelValue, elementValue);
                const found = index !== -1;
                if (checked && !found) assign(modelValue.concat(elementValue));
                else if (!checked && found) {
                    const filtered = [
                        ...modelValue
                    ];
                    filtered.splice(index, 1);
                    assign(filtered);
                }
            } else if ($67e6adf7fe63e8dd$var$isSet(modelValue)) {
                const cloned = new Set(modelValue);
                if (checked) cloned.add(elementValue);
                else cloned.delete(elementValue);
                assign(cloned);
            } else assign($67e6adf7fe63e8dd$var$getCheckboxValue(el, checked));
        });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: $67e6adf7fe63e8dd$var$setChecked,
    beforeUpdate (el, binding, vnode) {
        el[$67e6adf7fe63e8dd$var$assignKey] = $67e6adf7fe63e8dd$var$getModelAssigner(vnode);
        $67e6adf7fe63e8dd$var$setChecked(el, binding, vnode);
    }
};
function $67e6adf7fe63e8dd$var$setChecked(el, { value: value, oldValue: oldValue }, vnode) {
    el._modelValue = value;
    if ($67e6adf7fe63e8dd$var$isArray(value)) el.checked = $67e6adf7fe63e8dd$var$looseIndexOf(value, vnode.props.value) > -1;
    else if ($67e6adf7fe63e8dd$var$isSet(value)) el.checked = value.has(vnode.props.value);
    else if (value !== oldValue) el.checked = $67e6adf7fe63e8dd$var$looseEqual(value, $67e6adf7fe63e8dd$var$getCheckboxValue(el, true));
}
const $67e6adf7fe63e8dd$export$b4356c59b38b7aa9 = {
    created (el, { value: value }, vnode) {
        el.checked = $67e6adf7fe63e8dd$var$looseEqual(value, vnode.props.value);
        el[$67e6adf7fe63e8dd$var$assignKey] = $67e6adf7fe63e8dd$var$getModelAssigner(vnode);
        $67e6adf7fe63e8dd$var$addEventListener(el, "change", ()=>{
            el[$67e6adf7fe63e8dd$var$assignKey]($67e6adf7fe63e8dd$var$getValue(el));
        });
    },
    beforeUpdate (el, { value: value, oldValue: oldValue }, vnode) {
        el[$67e6adf7fe63e8dd$var$assignKey] = $67e6adf7fe63e8dd$var$getModelAssigner(vnode);
        if (value !== oldValue) el.checked = $67e6adf7fe63e8dd$var$looseEqual(value, vnode.props.value);
    }
};
const $67e6adf7fe63e8dd$export$87d227567b51ca39 = {
    // <select multiple> value need to be deep traversed
    deep: true,
    created (el, { value: value, modifiers: { number: number } }, vnode) {
        const isSetModel = $67e6adf7fe63e8dd$var$isSet(value);
        $67e6adf7fe63e8dd$var$addEventListener(el, "change", ()=>{
            const selectedVal = Array.prototype.filter.call(el.options, (o)=>o.selected).map((o)=>number ? $67e6adf7fe63e8dd$var$looseToNumber($67e6adf7fe63e8dd$var$getValue(o)) : $67e6adf7fe63e8dd$var$getValue(o));
            el[$67e6adf7fe63e8dd$var$assignKey](el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
        });
        el[$67e6adf7fe63e8dd$var$assignKey] = $67e6adf7fe63e8dd$var$getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted (el, { value: value }) {
        $67e6adf7fe63e8dd$var$setSelected(el, value);
    },
    beforeUpdate (el, _binding, vnode) {
        el[$67e6adf7fe63e8dd$var$assignKey] = $67e6adf7fe63e8dd$var$getModelAssigner(vnode);
    },
    updated (el, { value: value }) {
        $67e6adf7fe63e8dd$var$setSelected(el, value);
    }
};
function $67e6adf7fe63e8dd$var$setSelected(el, value) {
    const isMultiple = el.multiple;
    if (isMultiple && !$67e6adf7fe63e8dd$var$isArray(value) && !$67e6adf7fe63e8dd$var$isSet(value)) {
        $67e6adf7fe63e8dd$export$c106dd0671a0fc2d(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
        return;
    }
    for(let i = 0, l = el.options.length; i < l; i++){
        const option = el.options[i];
        const optionValue = $67e6adf7fe63e8dd$var$getValue(option);
        if (isMultiple) {
            if ($67e6adf7fe63e8dd$var$isArray(value)) option.selected = $67e6adf7fe63e8dd$var$looseIndexOf(value, optionValue) > -1;
            else option.selected = value.has(optionValue);
        } else if ($67e6adf7fe63e8dd$var$looseEqual($67e6adf7fe63e8dd$var$getValue(option), value)) {
            if (el.selectedIndex !== i) el.selectedIndex = i;
            return;
        }
    }
    if (!isMultiple && el.selectedIndex !== -1) el.selectedIndex = -1;
}
function $67e6adf7fe63e8dd$var$getValue(el) {
    return "_value" in el ? el._value : el.value;
}
function $67e6adf7fe63e8dd$var$getCheckboxValue(el, checked) {
    const key = checked ? "_trueValue" : "_falseValue";
    return key in el ? el[key] : checked;
}
const $67e6adf7fe63e8dd$export$5ad5c0e01ff62c5 = {
    created (el, binding, vnode) {
        $67e6adf7fe63e8dd$var$callModelHook(el, binding, vnode, null, "created");
    },
    mounted (el, binding, vnode) {
        $67e6adf7fe63e8dd$var$callModelHook(el, binding, vnode, null, "mounted");
    },
    beforeUpdate (el, binding, vnode, prevVNode) {
        $67e6adf7fe63e8dd$var$callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
    },
    updated (el, binding, vnode, prevVNode) {
        $67e6adf7fe63e8dd$var$callModelHook(el, binding, vnode, prevVNode, "updated");
    }
};
function $67e6adf7fe63e8dd$var$resolveDynamicModel(tagName, type) {
    switch(tagName){
        case "SELECT":
            return $67e6adf7fe63e8dd$export$87d227567b51ca39;
        case "TEXTAREA":
            return $67e6adf7fe63e8dd$export$f1f88689f5728478;
        default:
            switch(type){
                case "checkbox":
                    return $67e6adf7fe63e8dd$export$8847c2e532b35714;
                case "radio":
                    return $67e6adf7fe63e8dd$export$b4356c59b38b7aa9;
                default:
                    return $67e6adf7fe63e8dd$export$f1f88689f5728478;
            }
    }
}
function $67e6adf7fe63e8dd$var$callModelHook(el, binding, vnode, prevVNode, hook) {
    const modelToUse = $67e6adf7fe63e8dd$var$resolveDynamicModel(el.tagName, vnode.props && vnode.props.type);
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
}
const $67e6adf7fe63e8dd$var$systemModifiers = [
    "ctrl",
    "shift",
    "alt",
    "meta"
];
const $67e6adf7fe63e8dd$var$modifierGuards = {
    stop: (e)=>e.stopPropagation(),
    prevent: (e)=>e.preventDefault(),
    self: (e)=>e.target !== e.currentTarget,
    ctrl: (e)=>!e.ctrlKey,
    shift: (e)=>!e.shiftKey,
    alt: (e)=>!e.altKey,
    meta: (e)=>!e.metaKey,
    left: (e)=>"button" in e && e.button !== 0,
    middle: (e)=>"button" in e && e.button !== 1,
    right: (e)=>"button" in e && e.button !== 2,
    exact: (e, modifiers)=>$67e6adf7fe63e8dd$var$systemModifiers.some((m)=>e[`${m}Key`] && !modifiers.includes(m))
};
const $67e6adf7fe63e8dd$export$26bd3b8e29e6f273 = (fn, modifiers)=>{
    const cache = fn._withMods || (fn._withMods = {});
    const cacheKey = modifiers.join(".");
    return cache[cacheKey] || (cache[cacheKey] = (event, ...args)=>{
        for(let i = 0; i < modifiers.length; i++){
            const guard = $67e6adf7fe63e8dd$var$modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers)) return;
        }
        return fn(event, ...args);
    });
};
const $67e6adf7fe63e8dd$var$keyNames = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
};
const $67e6adf7fe63e8dd$export$f691a8759658f782 = (fn, modifiers)=>{
    const cache = fn._withKeys || (fn._withKeys = {});
    const cacheKey = modifiers.join(".");
    return cache[cacheKey] || (cache[cacheKey] = (event)=>{
        if (!("key" in event)) return;
        const eventKey = $67e6adf7fe63e8dd$var$hyphenate(event.key);
        if (modifiers.some((k)=>k === eventKey || $67e6adf7fe63e8dd$var$keyNames[k] === eventKey)) return fn(event);
    });
};
const $67e6adf7fe63e8dd$var$rendererOptions = /* @__PURE__ */ $67e6adf7fe63e8dd$var$extend({
    patchProp: $67e6adf7fe63e8dd$var$patchProp
}, $67e6adf7fe63e8dd$var$nodeOps);
let $67e6adf7fe63e8dd$var$renderer;
let $67e6adf7fe63e8dd$var$enabledHydration = false;
function $67e6adf7fe63e8dd$var$ensureRenderer() {
    return $67e6adf7fe63e8dd$var$renderer || ($67e6adf7fe63e8dd$var$renderer = $67e6adf7fe63e8dd$export$53ae2f996c64e9a($67e6adf7fe63e8dd$var$rendererOptions));
}
function $67e6adf7fe63e8dd$var$ensureHydrationRenderer() {
    $67e6adf7fe63e8dd$var$renderer = $67e6adf7fe63e8dd$var$enabledHydration ? $67e6adf7fe63e8dd$var$renderer : $67e6adf7fe63e8dd$export$200524cf0d997ff0($67e6adf7fe63e8dd$var$rendererOptions);
    $67e6adf7fe63e8dd$var$enabledHydration = true;
    return $67e6adf7fe63e8dd$var$renderer;
}
const $67e6adf7fe63e8dd$export$b3890eb0ae9dca99 = (...args)=>{
    $67e6adf7fe63e8dd$var$ensureRenderer().render(...args);
};
const $67e6adf7fe63e8dd$export$fa8d919ba61d84db = (...args)=>{
    $67e6adf7fe63e8dd$var$ensureHydrationRenderer().hydrate(...args);
};
const $67e6adf7fe63e8dd$export$4e373c34abfa8c68 = (...args)=>{
    const app = $67e6adf7fe63e8dd$var$ensureRenderer().createApp(...args);
    $67e6adf7fe63e8dd$var$injectNativeTagCheck(app);
    $67e6adf7fe63e8dd$var$injectCompilerOptionsCheck(app);
    const { mount: mount } = app;
    app.mount = (containerOrSelector)=>{
        const container = $67e6adf7fe63e8dd$var$normalizeContainer(containerOrSelector);
        if (!container) return;
        const component = app._component;
        if (!$67e6adf7fe63e8dd$var$isFunction(component) && !component.render && !component.template) component.template = container.innerHTML;
        container.innerHTML = "";
        const proxy = mount(container, false, $67e6adf7fe63e8dd$var$resolveRootNamespace(container));
        if (container instanceof Element) {
            container.removeAttribute("v-cloak");
            container.setAttribute("data-v-app", "");
        }
        return proxy;
    };
    return app;
};
const $67e6adf7fe63e8dd$export$35800275c0037383 = (...args)=>{
    const app = $67e6adf7fe63e8dd$var$ensureHydrationRenderer().createApp(...args);
    $67e6adf7fe63e8dd$var$injectNativeTagCheck(app);
    $67e6adf7fe63e8dd$var$injectCompilerOptionsCheck(app);
    const { mount: mount } = app;
    app.mount = (containerOrSelector)=>{
        const container = $67e6adf7fe63e8dd$var$normalizeContainer(containerOrSelector);
        if (container) return mount(container, true, $67e6adf7fe63e8dd$var$resolveRootNamespace(container));
    };
    return app;
};
function $67e6adf7fe63e8dd$var$resolveRootNamespace(container) {
    if (container instanceof SVGElement) return "svg";
    if (typeof MathMLElement === "function" && container instanceof MathMLElement) return "mathml";
}
function $67e6adf7fe63e8dd$var$injectNativeTagCheck(app) {
    Object.defineProperty(app.config, "isNativeTag", {
        value: (tag)=>$67e6adf7fe63e8dd$var$isHTMLTag(tag) || $67e6adf7fe63e8dd$var$isSVGTag(tag) || $67e6adf7fe63e8dd$var$isMathMLTag(tag),
        writable: false
    });
}
function $67e6adf7fe63e8dd$var$injectCompilerOptionsCheck(app) {
    if ($67e6adf7fe63e8dd$export$c93a9c496c5211fa()) {
        const isCustomElement = app.config.isCustomElement;
        Object.defineProperty(app.config, "isCustomElement", {
            get () {
                return isCustomElement;
            },
            set () {
                $67e6adf7fe63e8dd$export$c106dd0671a0fc2d(`The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`);
            }
        });
        const compilerOptions = app.config.compilerOptions;
        const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
        Object.defineProperty(app.config, "compilerOptions", {
            get () {
                $67e6adf7fe63e8dd$export$c106dd0671a0fc2d(msg);
                return compilerOptions;
            },
            set () {
                $67e6adf7fe63e8dd$export$c106dd0671a0fc2d(msg);
            }
        });
    }
}
function $67e6adf7fe63e8dd$var$normalizeContainer(container) {
    if ($67e6adf7fe63e8dd$var$isString(container)) {
        const res = document.querySelector(container);
        if (!res) $67e6adf7fe63e8dd$export$c106dd0671a0fc2d(`Failed to mount app: mount target selector "${container}" returned null.`);
        return res;
    }
    if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") $67e6adf7fe63e8dd$export$c106dd0671a0fc2d(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
    return container;
}
const $67e6adf7fe63e8dd$export$800b28255aa678d9 = $67e6adf7fe63e8dd$var$NOOP;
var $67e6adf7fe63e8dd$var$runtimeDom = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    BaseTransition: $67e6adf7fe63e8dd$export$abd95b5f5e8a8837,
    BaseTransitionPropsValidators: $67e6adf7fe63e8dd$export$b876c99684f8cf3b,
    Comment: $67e6adf7fe63e8dd$export$4d299b491347818a,
    DeprecationTypes: $67e6adf7fe63e8dd$export$22072a82865312f6,
    EffectScope: $67e6adf7fe63e8dd$export$1168ed9dbc71ddbd,
    ErrorCodes: $67e6adf7fe63e8dd$export$10e8e1cf990558d7,
    ErrorTypeStrings: $67e6adf7fe63e8dd$export$795e0ad4a0e2ed30,
    Fragment: $67e6adf7fe63e8dd$export$ffb0004e005737fa,
    KeepAlive: $67e6adf7fe63e8dd$export$70eb8a58709972df,
    ReactiveEffect: $67e6adf7fe63e8dd$export$28352bb4dd362521,
    Static: $67e6adf7fe63e8dd$export$c1b9a1d3af45b7b6,
    Suspense: $67e6adf7fe63e8dd$export$74bf444e3cd11ea5,
    Teleport: $67e6adf7fe63e8dd$export$76d55a0304a371f4,
    Text: $67e6adf7fe63e8dd$export$5f1af8db9871e1d6,
    TrackOpTypes: $67e6adf7fe63e8dd$export$2ac2bd0a56e04551,
    Transition: $67e6adf7fe63e8dd$export$be58926105124dd4,
    TransitionGroup: $67e6adf7fe63e8dd$export$19ffa8f511f7bc2e,
    TriggerOpTypes: $67e6adf7fe63e8dd$export$1e8941c92696a26,
    VueElement: $67e6adf7fe63e8dd$export$b337c1a55163dbe3,
    assertNumber: $67e6adf7fe63e8dd$export$dfbcecb440255e4a,
    callWithAsyncErrorHandling: $67e6adf7fe63e8dd$export$dae85862a8d94378,
    callWithErrorHandling: $67e6adf7fe63e8dd$export$b22fcaf88446e9bf,
    camelize: $67e6adf7fe63e8dd$export$161d051f5dd25de7,
    capitalize: $67e6adf7fe63e8dd$export$9a00dee1beb8f576,
    cloneVNode: $67e6adf7fe63e8dd$export$ee4f9e12c0a92a1a,
    compatUtils: $67e6adf7fe63e8dd$export$dc678eddf276286e,
    computed: $67e6adf7fe63e8dd$export$2983e091f1a1e8e2,
    createApp: $67e6adf7fe63e8dd$export$4e373c34abfa8c68,
    createBlock: $67e6adf7fe63e8dd$export$9f2dfe8048dfb22b,
    createCommentVNode: $67e6adf7fe63e8dd$export$49553837c7236d3c,
    createElementBlock: $67e6adf7fe63e8dd$export$167055419fc69ec1,
    createElementVNode: $67e6adf7fe63e8dd$export$42098e0eaa15c48e,
    createHydrationRenderer: $67e6adf7fe63e8dd$export$200524cf0d997ff0,
    createPropsRestProxy: $67e6adf7fe63e8dd$export$7c343e855c563faa,
    createRenderer: $67e6adf7fe63e8dd$export$53ae2f996c64e9a,
    createSSRApp: $67e6adf7fe63e8dd$export$35800275c0037383,
    createSlots: $67e6adf7fe63e8dd$export$85738f8fcd0a5430,
    createStaticVNode: $67e6adf7fe63e8dd$export$33a9f6dd2840e6bb,
    createTextVNode: $67e6adf7fe63e8dd$export$22f9b5ffd89dac9,
    createVNode: $67e6adf7fe63e8dd$export$bf5c4cf060303d58,
    customRef: $67e6adf7fe63e8dd$export$a20c2dd6199824cb,
    defineAsyncComponent: $67e6adf7fe63e8dd$export$d75d499b4c16cf21,
    defineComponent: $67e6adf7fe63e8dd$export$afa64b67e5a01c3b,
    defineCustomElement: $67e6adf7fe63e8dd$export$a00e2346eabbdbef,
    defineEmits: $67e6adf7fe63e8dd$export$51ecece22fc17ddc,
    defineExpose: $67e6adf7fe63e8dd$export$da25b65ca24b518a,
    defineModel: $67e6adf7fe63e8dd$export$acd55aa037e791bb,
    defineOptions: $67e6adf7fe63e8dd$export$77e79129327f3d0d,
    defineProps: $67e6adf7fe63e8dd$export$80b33eababae110e,
    defineSSRCustomElement: $67e6adf7fe63e8dd$export$6debb2e68f212638,
    defineSlots: $67e6adf7fe63e8dd$export$1b3acd4bb805b712,
    devtools: $67e6adf7fe63e8dd$export$6922d3b3a607469e,
    effect: $67e6adf7fe63e8dd$export$dc573d8a6576cdb3,
    effectScope: $67e6adf7fe63e8dd$export$7056603ea81600be,
    getCurrentInstance: $67e6adf7fe63e8dd$export$f13e630aa3915748,
    getCurrentScope: $67e6adf7fe63e8dd$export$c7be4b0125a10cba,
    getTransitionRawChildren: $67e6adf7fe63e8dd$export$a67f9b1229c7c97a,
    guardReactiveProps: $67e6adf7fe63e8dd$export$1f1be0e0e384d7d2,
    h: $67e6adf7fe63e8dd$export$dda1d9f60106f0e9,
    handleError: $67e6adf7fe63e8dd$export$d3da1ecaf1206c58,
    hasInjectionContext: $67e6adf7fe63e8dd$export$caf6761f24fc571a,
    hydrate: $67e6adf7fe63e8dd$export$fa8d919ba61d84db,
    initCustomFormatter: $67e6adf7fe63e8dd$export$aed4979be6a60047,
    initDirectivesForSSR: $67e6adf7fe63e8dd$export$800b28255aa678d9,
    inject: $67e6adf7fe63e8dd$export$a976684a0efeb93f,
    isMemoSame: $67e6adf7fe63e8dd$export$bf525184d622787c,
    isProxy: $67e6adf7fe63e8dd$export$5f3ca29d057519b3,
    isReactive: $67e6adf7fe63e8dd$export$352205f445242f02,
    isReadonly: $67e6adf7fe63e8dd$export$92d09b48637741e7,
    isRef: $67e6adf7fe63e8dd$export$4f9f5282de18fc69,
    isRuntimeOnly: $67e6adf7fe63e8dd$export$c93a9c496c5211fa,
    isShallow: $67e6adf7fe63e8dd$export$7f3fe6025abfa26e,
    isVNode: $67e6adf7fe63e8dd$export$3868d13f8734ae81,
    markRaw: $67e6adf7fe63e8dd$export$995ab8b13ad7a9d0,
    mergeDefaults: $67e6adf7fe63e8dd$export$ec60f47d4a8a2e7f,
    mergeModels: $67e6adf7fe63e8dd$export$ad4f724f587e6828,
    mergeProps: $67e6adf7fe63e8dd$export$9d1611c77c2fe928,
    nextTick: $67e6adf7fe63e8dd$export$bdd553fddd433dcb,
    normalizeClass: $67e6adf7fe63e8dd$export$4f7022d2d68e2c5a,
    normalizeProps: $67e6adf7fe63e8dd$export$601abcd8103db5e4,
    normalizeStyle: $67e6adf7fe63e8dd$export$8756898546458274,
    onActivated: $67e6adf7fe63e8dd$export$ba52d824b95a2154,
    onBeforeMount: $67e6adf7fe63e8dd$export$23b7aeb0d671f804,
    onBeforeUnmount: $67e6adf7fe63e8dd$export$40c420df62d2614,
    onBeforeUpdate: $67e6adf7fe63e8dd$export$ab91988a13872e4c,
    onDeactivated: $67e6adf7fe63e8dd$export$bf1440eeaf5fa709,
    onErrorCaptured: $67e6adf7fe63e8dd$export$6a3a15856e50ad19,
    onMounted: $67e6adf7fe63e8dd$export$6d1641039221b5cb,
    onRenderTracked: $67e6adf7fe63e8dd$export$2b41f4235363e921,
    onRenderTriggered: $67e6adf7fe63e8dd$export$898295a813d662eb,
    onScopeDispose: $67e6adf7fe63e8dd$export$a780418acd4762da,
    onServerPrefetch: $67e6adf7fe63e8dd$export$ebf0c601f267bceb,
    onUnmounted: $67e6adf7fe63e8dd$export$13348a43ccacfe58,
    onUpdated: $67e6adf7fe63e8dd$export$5876c47052fb88b1,
    openBlock: $67e6adf7fe63e8dd$export$e7eaa45e502fe5cc,
    popScopeId: $67e6adf7fe63e8dd$export$f2dc6805dc11834e,
    provide: $67e6adf7fe63e8dd$export$abe1e183e22e10ad,
    proxyRefs: $67e6adf7fe63e8dd$export$f353fd1b97db3fa0,
    pushScopeId: $67e6adf7fe63e8dd$export$ac020265ca2cc4cd,
    queuePostFlushCb: $67e6adf7fe63e8dd$export$59536a0199721cab,
    reactive: $67e6adf7fe63e8dd$export$90a44edba14e47be,
    readonly: $67e6adf7fe63e8dd$export$6ec456bd5b7b3c51,
    ref: $67e6adf7fe63e8dd$export$eff4d24c3ff7876e,
    registerRuntimeCompiler: $67e6adf7fe63e8dd$export$667bb5a67822b941,
    render: $67e6adf7fe63e8dd$export$b3890eb0ae9dca99,
    renderList: $67e6adf7fe63e8dd$export$4bf387f59bfc6d67,
    renderSlot: $67e6adf7fe63e8dd$export$4abee4c34694ada1,
    resolveComponent: $67e6adf7fe63e8dd$export$681d65eec9d1d1e8,
    resolveDirective: $67e6adf7fe63e8dd$export$a1989e995cd481be,
    resolveDynamicComponent: $67e6adf7fe63e8dd$export$b44c564a05ca975,
    resolveFilter: $67e6adf7fe63e8dd$export$83cf26e06ea620e1,
    resolveTransitionHooks: $67e6adf7fe63e8dd$export$76ac1779589cd824,
    setBlockTracking: $67e6adf7fe63e8dd$export$c20bee82f26f1e27,
    setDevtoolsHook: $67e6adf7fe63e8dd$export$b0c258b32c26c785,
    setTransitionHooks: $67e6adf7fe63e8dd$export$7770a22486565649,
    shallowReactive: $67e6adf7fe63e8dd$export$8d81cefd22d22260,
    shallowReadonly: $67e6adf7fe63e8dd$export$7c4b5f2b50f09f6b,
    shallowRef: $67e6adf7fe63e8dd$export$9b7bc5fe3b17c8b3,
    ssrContextKey: $67e6adf7fe63e8dd$export$f2549a27e18acf2d,
    ssrUtils: $67e6adf7fe63e8dd$export$a9679033567b336d,
    stop: $67e6adf7fe63e8dd$export$fa6813432f753b0d,
    toDisplayString: $67e6adf7fe63e8dd$export$b5b1545233b45293,
    toHandlerKey: $67e6adf7fe63e8dd$export$8c022799eeaaefcd,
    toHandlers: $67e6adf7fe63e8dd$export$2fb94ff667a6a1a,
    toRaw: $67e6adf7fe63e8dd$export$ab18938b9fc5f28e,
    toRef: $67e6adf7fe63e8dd$export$1f60508e4f47b4b7,
    toRefs: $67e6adf7fe63e8dd$export$2e9533675e5e70e0,
    toValue: $67e6adf7fe63e8dd$export$30bdcc2218aa9458,
    transformVNodeArgs: $67e6adf7fe63e8dd$export$83beccd3afeeb809,
    triggerRef: $67e6adf7fe63e8dd$export$f402f86588575ccc,
    unref: $67e6adf7fe63e8dd$export$a239a76781616204,
    useAttrs: $67e6adf7fe63e8dd$export$75e29435042cd2ea,
    useCssModule: $67e6adf7fe63e8dd$export$9300d5b90d56e3d1,
    useCssVars: $67e6adf7fe63e8dd$export$ef28b76f07940108,
    useModel: $67e6adf7fe63e8dd$export$fb78bd113157f1a1,
    useSSRContext: $67e6adf7fe63e8dd$export$6b1c54dc4befcda,
    useSlots: $67e6adf7fe63e8dd$export$9203a8e84125433c,
    useTransitionState: $67e6adf7fe63e8dd$export$d2a0a1bc267c90f6,
    vModelCheckbox: $67e6adf7fe63e8dd$export$8847c2e532b35714,
    vModelDynamic: $67e6adf7fe63e8dd$export$5ad5c0e01ff62c5,
    vModelRadio: $67e6adf7fe63e8dd$export$b4356c59b38b7aa9,
    vModelSelect: $67e6adf7fe63e8dd$export$87d227567b51ca39,
    vModelText: $67e6adf7fe63e8dd$export$f1f88689f5728478,
    vShow: $67e6adf7fe63e8dd$export$5cb4fcdc6937d7e1,
    version: $67e6adf7fe63e8dd$export$83d89fbfd8236492,
    warn: $67e6adf7fe63e8dd$export$c106dd0671a0fc2d,
    watch: $67e6adf7fe63e8dd$export$3db5d71bdb2d5499,
    watchEffect: $67e6adf7fe63e8dd$export$ede35fc0e5500309,
    watchPostEffect: $67e6adf7fe63e8dd$export$b7f27ea67102d543,
    watchSyncEffect: $67e6adf7fe63e8dd$export$2035654f31b0e555,
    withAsyncContext: $67e6adf7fe63e8dd$export$d6d6f7369f1fb104,
    withCtx: $67e6adf7fe63e8dd$export$694b237e827a3d23,
    withDefaults: $67e6adf7fe63e8dd$export$4df9c0969a9e0160,
    withDirectives: $67e6adf7fe63e8dd$export$49729353e7c1e6c5,
    withKeys: $67e6adf7fe63e8dd$export$f691a8759658f782,
    withMemo: $67e6adf7fe63e8dd$export$2a6d714a4d738ae,
    withModifiers: $67e6adf7fe63e8dd$export$26bd3b8e29e6f273,
    withScopeId: $67e6adf7fe63e8dd$export$15ba313e13f3dd04
});
function $67e6adf7fe63e8dd$var$initDev() {
    console.info(`You are running a development build of Vue.
Make sure to use the production build (*.prod.js) when deploying for production.`);
    $67e6adf7fe63e8dd$export$aed4979be6a60047();
}
const $67e6adf7fe63e8dd$var$FRAGMENT = Symbol(`Fragment`);
const $67e6adf7fe63e8dd$var$TELEPORT = Symbol(`Teleport`);
const $67e6adf7fe63e8dd$var$SUSPENSE = Symbol(`Suspense`);
const $67e6adf7fe63e8dd$var$KEEP_ALIVE = Symbol(`KeepAlive`);
const $67e6adf7fe63e8dd$var$BASE_TRANSITION = Symbol(`BaseTransition`);
const $67e6adf7fe63e8dd$var$OPEN_BLOCK = Symbol(`openBlock`);
const $67e6adf7fe63e8dd$var$CREATE_BLOCK = Symbol(`createBlock`);
const $67e6adf7fe63e8dd$var$CREATE_ELEMENT_BLOCK = Symbol(`createElementBlock`);
const $67e6adf7fe63e8dd$var$CREATE_VNODE = Symbol(`createVNode`);
const $67e6adf7fe63e8dd$var$CREATE_ELEMENT_VNODE = Symbol(`createElementVNode`);
const $67e6adf7fe63e8dd$var$CREATE_COMMENT = Symbol(`createCommentVNode`);
const $67e6adf7fe63e8dd$var$CREATE_TEXT = Symbol(`createTextVNode`);
const $67e6adf7fe63e8dd$var$CREATE_STATIC = Symbol(`createStaticVNode`);
const $67e6adf7fe63e8dd$var$RESOLVE_COMPONENT = Symbol(`resolveComponent`);
const $67e6adf7fe63e8dd$var$RESOLVE_DYNAMIC_COMPONENT = Symbol(`resolveDynamicComponent`);
const $67e6adf7fe63e8dd$var$RESOLVE_DIRECTIVE = Symbol(`resolveDirective`);
const $67e6adf7fe63e8dd$var$RESOLVE_FILTER = Symbol(`resolveFilter`);
const $67e6adf7fe63e8dd$var$WITH_DIRECTIVES = Symbol(`withDirectives`);
const $67e6adf7fe63e8dd$var$RENDER_LIST = Symbol(`renderList`);
const $67e6adf7fe63e8dd$var$RENDER_SLOT = Symbol(`renderSlot`);
const $67e6adf7fe63e8dd$var$CREATE_SLOTS = Symbol(`createSlots`);
const $67e6adf7fe63e8dd$var$TO_DISPLAY_STRING = Symbol(`toDisplayString`);
const $67e6adf7fe63e8dd$var$MERGE_PROPS = Symbol(`mergeProps`);
const $67e6adf7fe63e8dd$var$NORMALIZE_CLASS = Symbol(`normalizeClass`);
const $67e6adf7fe63e8dd$var$NORMALIZE_STYLE = Symbol(`normalizeStyle`);
const $67e6adf7fe63e8dd$var$NORMALIZE_PROPS = Symbol(`normalizeProps`);
const $67e6adf7fe63e8dd$var$GUARD_REACTIVE_PROPS = Symbol(`guardReactiveProps`);
const $67e6adf7fe63e8dd$var$TO_HANDLERS = Symbol(`toHandlers`);
const $67e6adf7fe63e8dd$var$CAMELIZE = Symbol(`camelize`);
const $67e6adf7fe63e8dd$var$CAPITALIZE = Symbol(`capitalize`);
const $67e6adf7fe63e8dd$var$TO_HANDLER_KEY = Symbol(`toHandlerKey`);
const $67e6adf7fe63e8dd$var$SET_BLOCK_TRACKING = Symbol(`setBlockTracking`);
const $67e6adf7fe63e8dd$var$PUSH_SCOPE_ID = Symbol(`pushScopeId`);
const $67e6adf7fe63e8dd$var$POP_SCOPE_ID = Symbol(`popScopeId`);
const $67e6adf7fe63e8dd$var$WITH_CTX = Symbol(`withCtx`);
const $67e6adf7fe63e8dd$var$UNREF = Symbol(`unref`);
const $67e6adf7fe63e8dd$var$IS_REF = Symbol(`isRef`);
const $67e6adf7fe63e8dd$var$WITH_MEMO = Symbol(`withMemo`);
const $67e6adf7fe63e8dd$var$IS_MEMO_SAME = Symbol(`isMemoSame`);
const $67e6adf7fe63e8dd$var$helperNameMap = {
    [$67e6adf7fe63e8dd$var$FRAGMENT]: `Fragment`,
    [$67e6adf7fe63e8dd$var$TELEPORT]: `Teleport`,
    [$67e6adf7fe63e8dd$var$SUSPENSE]: `Suspense`,
    [$67e6adf7fe63e8dd$var$KEEP_ALIVE]: `KeepAlive`,
    [$67e6adf7fe63e8dd$var$BASE_TRANSITION]: `BaseTransition`,
    [$67e6adf7fe63e8dd$var$OPEN_BLOCK]: `openBlock`,
    [$67e6adf7fe63e8dd$var$CREATE_BLOCK]: `createBlock`,
    [$67e6adf7fe63e8dd$var$CREATE_ELEMENT_BLOCK]: `createElementBlock`,
    [$67e6adf7fe63e8dd$var$CREATE_VNODE]: `createVNode`,
    [$67e6adf7fe63e8dd$var$CREATE_ELEMENT_VNODE]: `createElementVNode`,
    [$67e6adf7fe63e8dd$var$CREATE_COMMENT]: `createCommentVNode`,
    [$67e6adf7fe63e8dd$var$CREATE_TEXT]: `createTextVNode`,
    [$67e6adf7fe63e8dd$var$CREATE_STATIC]: `createStaticVNode`,
    [$67e6adf7fe63e8dd$var$RESOLVE_COMPONENT]: `resolveComponent`,
    [$67e6adf7fe63e8dd$var$RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
    [$67e6adf7fe63e8dd$var$RESOLVE_DIRECTIVE]: `resolveDirective`,
    [$67e6adf7fe63e8dd$var$RESOLVE_FILTER]: `resolveFilter`,
    [$67e6adf7fe63e8dd$var$WITH_DIRECTIVES]: `withDirectives`,
    [$67e6adf7fe63e8dd$var$RENDER_LIST]: `renderList`,
    [$67e6adf7fe63e8dd$var$RENDER_SLOT]: `renderSlot`,
    [$67e6adf7fe63e8dd$var$CREATE_SLOTS]: `createSlots`,
    [$67e6adf7fe63e8dd$var$TO_DISPLAY_STRING]: `toDisplayString`,
    [$67e6adf7fe63e8dd$var$MERGE_PROPS]: `mergeProps`,
    [$67e6adf7fe63e8dd$var$NORMALIZE_CLASS]: `normalizeClass`,
    [$67e6adf7fe63e8dd$var$NORMALIZE_STYLE]: `normalizeStyle`,
    [$67e6adf7fe63e8dd$var$NORMALIZE_PROPS]: `normalizeProps`,
    [$67e6adf7fe63e8dd$var$GUARD_REACTIVE_PROPS]: `guardReactiveProps`,
    [$67e6adf7fe63e8dd$var$TO_HANDLERS]: `toHandlers`,
    [$67e6adf7fe63e8dd$var$CAMELIZE]: `camelize`,
    [$67e6adf7fe63e8dd$var$CAPITALIZE]: `capitalize`,
    [$67e6adf7fe63e8dd$var$TO_HANDLER_KEY]: `toHandlerKey`,
    [$67e6adf7fe63e8dd$var$SET_BLOCK_TRACKING]: `setBlockTracking`,
    [$67e6adf7fe63e8dd$var$PUSH_SCOPE_ID]: `pushScopeId`,
    [$67e6adf7fe63e8dd$var$POP_SCOPE_ID]: `popScopeId`,
    [$67e6adf7fe63e8dd$var$WITH_CTX]: `withCtx`,
    [$67e6adf7fe63e8dd$var$UNREF]: `unref`,
    [$67e6adf7fe63e8dd$var$IS_REF]: `isRef`,
    [$67e6adf7fe63e8dd$var$WITH_MEMO]: `withMemo`,
    [$67e6adf7fe63e8dd$var$IS_MEMO_SAME]: `isMemoSame`
};
function $67e6adf7fe63e8dd$var$registerRuntimeHelpers(helpers) {
    Object.getOwnPropertySymbols(helpers).forEach((s)=>{
        $67e6adf7fe63e8dd$var$helperNameMap[s] = helpers[s];
    });
}
const $67e6adf7fe63e8dd$var$locStub = {
    start: {
        line: 1,
        column: 1,
        offset: 0
    },
    end: {
        line: 1,
        column: 1,
        offset: 0
    },
    source: ""
};
function $67e6adf7fe63e8dd$var$createRoot(children, source = "") {
    return {
        type: 0,
        source: source,
        children: children,
        helpers: /* @__PURE__ */ new Set(),
        components: [],
        directives: [],
        hoists: [],
        imports: [],
        cached: 0,
        temps: 0,
        codegenNode: void 0,
        loc: $67e6adf7fe63e8dd$var$locStub
    };
}
function $67e6adf7fe63e8dd$var$createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives, isBlock = false, disableTracking = false, isComponent = false, loc = $67e6adf7fe63e8dd$var$locStub) {
    if (context) {
        if (isBlock) {
            context.helper($67e6adf7fe63e8dd$var$OPEN_BLOCK);
            context.helper($67e6adf7fe63e8dd$var$getVNodeBlockHelper(context.inSSR, isComponent));
        } else context.helper($67e6adf7fe63e8dd$var$getVNodeHelper(context.inSSR, isComponent));
        if (directives) context.helper($67e6adf7fe63e8dd$var$WITH_DIRECTIVES);
    }
    return {
        type: 13,
        tag: tag,
        props: props,
        children: children,
        patchFlag: patchFlag,
        dynamicProps: dynamicProps,
        directives: directives,
        isBlock: isBlock,
        disableTracking: disableTracking,
        isComponent: isComponent,
        loc: loc
    };
}
function $67e6adf7fe63e8dd$var$createArrayExpression(elements, loc = $67e6adf7fe63e8dd$var$locStub) {
    return {
        type: 17,
        loc: loc,
        elements: elements
    };
}
function $67e6adf7fe63e8dd$var$createObjectExpression(properties, loc = $67e6adf7fe63e8dd$var$locStub) {
    return {
        type: 15,
        loc: loc,
        properties: properties
    };
}
function $67e6adf7fe63e8dd$var$createObjectProperty(key, value) {
    return {
        type: 16,
        loc: $67e6adf7fe63e8dd$var$locStub,
        key: $67e6adf7fe63e8dd$var$isString(key) ? $67e6adf7fe63e8dd$var$createSimpleExpression(key, true) : key,
        value: value
    };
}
function $67e6adf7fe63e8dd$var$createSimpleExpression(content, isStatic = false, loc = $67e6adf7fe63e8dd$var$locStub, constType = 0) {
    return {
        type: 4,
        loc: loc,
        content: content,
        isStatic: isStatic,
        constType: isStatic ? 3 : constType
    };
}
function $67e6adf7fe63e8dd$var$createCompoundExpression(children, loc = $67e6adf7fe63e8dd$var$locStub) {
    return {
        type: 8,
        loc: loc,
        children: children
    };
}
function $67e6adf7fe63e8dd$var$createCallExpression(callee, args = [], loc = $67e6adf7fe63e8dd$var$locStub) {
    return {
        type: 14,
        loc: loc,
        callee: callee,
        arguments: args
    };
}
function $67e6adf7fe63e8dd$var$createFunctionExpression(params, returns, newline = false, isSlot = false, loc = $67e6adf7fe63e8dd$var$locStub) {
    return {
        type: 18,
        params: params,
        returns: returns,
        newline: newline,
        isSlot: isSlot,
        loc: loc
    };
}
function $67e6adf7fe63e8dd$var$createConditionalExpression(test, consequent, alternate, newline = true) {
    return {
        type: 19,
        test: test,
        consequent: consequent,
        alternate: alternate,
        newline: newline,
        loc: $67e6adf7fe63e8dd$var$locStub
    };
}
function $67e6adf7fe63e8dd$var$createCacheExpression(index, value, isVNode = false) {
    return {
        type: 20,
        index: index,
        value: value,
        isVNode: isVNode,
        loc: $67e6adf7fe63e8dd$var$locStub
    };
}
function $67e6adf7fe63e8dd$var$createBlockStatement(body) {
    return {
        type: 21,
        body: body,
        loc: $67e6adf7fe63e8dd$var$locStub
    };
}
function $67e6adf7fe63e8dd$var$getVNodeHelper(ssr, isComponent) {
    return ssr || isComponent ? $67e6adf7fe63e8dd$var$CREATE_VNODE : $67e6adf7fe63e8dd$var$CREATE_ELEMENT_VNODE;
}
function $67e6adf7fe63e8dd$var$getVNodeBlockHelper(ssr, isComponent) {
    return ssr || isComponent ? $67e6adf7fe63e8dd$var$CREATE_BLOCK : $67e6adf7fe63e8dd$var$CREATE_ELEMENT_BLOCK;
}
function $67e6adf7fe63e8dd$var$convertToBlock(node, { helper: helper, removeHelper: removeHelper, inSSR: inSSR }) {
    if (!node.isBlock) {
        node.isBlock = true;
        removeHelper($67e6adf7fe63e8dd$var$getVNodeHelper(inSSR, node.isComponent));
        helper($67e6adf7fe63e8dd$var$OPEN_BLOCK);
        helper($67e6adf7fe63e8dd$var$getVNodeBlockHelper(inSSR, node.isComponent));
    }
}
const $67e6adf7fe63e8dd$var$defaultDelimitersOpen = new Uint8Array([
    123,
    123
]);
const $67e6adf7fe63e8dd$var$defaultDelimitersClose = new Uint8Array([
    125,
    125
]);
function $67e6adf7fe63e8dd$var$isTagStartChar(c) {
    return c >= 97 && c <= 122 || c >= 65 && c <= 90;
}
function $67e6adf7fe63e8dd$var$isWhitespace(c) {
    return c === 32 || c === 10 || c === 9 || c === 12 || c === 13;
}
function $67e6adf7fe63e8dd$var$isEndOfTagSection(c) {
    return c === 47 || c === 62 || $67e6adf7fe63e8dd$var$isWhitespace(c);
}
function $67e6adf7fe63e8dd$var$toCharCodes(str) {
    const ret = new Uint8Array(str.length);
    for(let i = 0; i < str.length; i++)ret[i] = str.charCodeAt(i);
    return ret;
}
const $67e6adf7fe63e8dd$var$Sequences = {
    Cdata: new Uint8Array([
        67,
        68,
        65,
        84,
        65,
        91
    ]),
    // CDATA[
    CdataEnd: new Uint8Array([
        93,
        93,
        62
    ]),
    // ]]>
    CommentEnd: new Uint8Array([
        45,
        45,
        62
    ]),
    // `-->`
    ScriptEnd: new Uint8Array([
        60,
        47,
        115,
        99,
        114,
        105,
        112,
        116
    ]),
    // `<\/script`
    StyleEnd: new Uint8Array([
        60,
        47,
        115,
        116,
        121,
        108,
        101
    ]),
    // `</style`
    TitleEnd: new Uint8Array([
        60,
        47,
        116,
        105,
        116,
        108,
        101
    ]),
    // `</title`
    TextareaEnd: new Uint8Array([
        60,
        47,
        116,
        101,
        120,
        116,
        97,
        114,
        101,
        97
    ])
};
class $67e6adf7fe63e8dd$var$Tokenizer {
    constructor(stack, cbs){
        this.stack = stack;
        this.cbs = cbs;
        /** The current state the tokenizer is in. */ this.state = 1;
        /** The read buffer. */ this.buffer = "";
        /** The beginning of the section that is currently being read. */ this.sectionStart = 0;
        /** The index within the buffer that we are currently looking at. */ this.index = 0;
        /** The start of the last entity. */ this.entityStart = 0;
        /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */ this.baseState = 1;
        /** For special parsing behavior inside of script and style tags. */ this.inRCDATA = false;
        /** For disabling RCDATA tags handling */ this.inXML = false;
        /** For disabling interpolation parsing in v-pre */ this.inVPre = false;
        /** Record newline positions for fast line / column calculation */ this.newlines = [];
        this.mode = 0;
        this.delimiterOpen = $67e6adf7fe63e8dd$var$defaultDelimitersOpen;
        this.delimiterClose = $67e6adf7fe63e8dd$var$defaultDelimitersClose;
        this.delimiterIndex = -1;
        this.currentSequence = void 0;
        this.sequenceIndex = 0;
    }
    get inSFCRoot() {
        return this.mode === 2 && this.stack.length === 0;
    }
    reset() {
        this.state = 1;
        this.mode = 0;
        this.buffer = "";
        this.sectionStart = 0;
        this.index = 0;
        this.baseState = 1;
        this.inRCDATA = false;
        this.currentSequence = void 0;
        this.newlines.length = 0;
        this.delimiterOpen = $67e6adf7fe63e8dd$var$defaultDelimitersOpen;
        this.delimiterClose = $67e6adf7fe63e8dd$var$defaultDelimitersClose;
    }
    /**
   * Generate Position object with line / column information using recorded
   * newline positions. We know the index is always going to be an already
   * processed index, so all the newlines up to this index should have been
   * recorded.
   */ getPos(index) {
        let line = 1;
        let column = index + 1;
        for(let i = this.newlines.length - 1; i >= 0; i--){
            const newlineIndex = this.newlines[i];
            if (index > newlineIndex) {
                line = i + 2;
                column = index - newlineIndex;
                break;
            }
        }
        return {
            column: column,
            line: line,
            offset: index
        };
    }
    peek() {
        return this.buffer.charCodeAt(this.index + 1);
    }
    stateText(c) {
        if (c === 60) {
            if (this.index > this.sectionStart) this.cbs.ontext(this.sectionStart, this.index);
            this.state = 5;
            this.sectionStart = this.index;
        } else if (!this.inVPre && c === this.delimiterOpen[0]) {
            this.state = 2;
            this.delimiterIndex = 0;
            this.stateInterpolationOpen(c);
        }
    }
    stateInterpolationOpen(c) {
        if (c === this.delimiterOpen[this.delimiterIndex]) {
            if (this.delimiterIndex === this.delimiterOpen.length - 1) {
                const start = this.index + 1 - this.delimiterOpen.length;
                if (start > this.sectionStart) this.cbs.ontext(this.sectionStart, start);
                this.state = 3;
                this.sectionStart = start;
            } else this.delimiterIndex++;
        } else if (this.inRCDATA) {
            this.state = 32;
            this.stateInRCDATA(c);
        } else {
            this.state = 1;
            this.stateText(c);
        }
    }
    stateInterpolation(c) {
        if (c === this.delimiterClose[0]) {
            this.state = 4;
            this.delimiterIndex = 0;
            this.stateInterpolationClose(c);
        }
    }
    stateInterpolationClose(c) {
        if (c === this.delimiterClose[this.delimiterIndex]) {
            if (this.delimiterIndex === this.delimiterClose.length - 1) {
                this.cbs.oninterpolation(this.sectionStart, this.index + 1);
                if (this.inRCDATA) this.state = 32;
                else this.state = 1;
                this.sectionStart = this.index + 1;
            } else this.delimiterIndex++;
        } else {
            this.state = 3;
            this.stateInterpolation(c);
        }
    }
    stateSpecialStartSequence(c) {
        const isEnd = this.sequenceIndex === this.currentSequence.length;
        const isMatch = isEnd ? // If we are at the end of the sequence, make sure the tag name has ended
        $67e6adf7fe63e8dd$var$isEndOfTagSection(c) : // Otherwise, do a case-insensitive comparison
        (c | 32) === this.currentSequence[this.sequenceIndex];
        if (!isMatch) this.inRCDATA = false;
        else if (!isEnd) {
            this.sequenceIndex++;
            return;
        }
        this.sequenceIndex = 0;
        this.state = 6;
        this.stateInTagName(c);
    }
    /** Look for an end tag. For <title> and <textarea>, also decode entities. */ stateInRCDATA(c) {
        if (this.sequenceIndex === this.currentSequence.length) {
            if (c === 62 || $67e6adf7fe63e8dd$var$isWhitespace(c)) {
                const endOfText = this.index - this.currentSequence.length;
                if (this.sectionStart < endOfText) {
                    const actualIndex = this.index;
                    this.index = endOfText;
                    this.cbs.ontext(this.sectionStart, endOfText);
                    this.index = actualIndex;
                }
                this.sectionStart = endOfText + 2;
                this.stateInClosingTagName(c);
                this.inRCDATA = false;
                return;
            }
            this.sequenceIndex = 0;
        }
        if ((c | 32) === this.currentSequence[this.sequenceIndex]) this.sequenceIndex += 1;
        else if (this.sequenceIndex === 0) {
            if (this.currentSequence === $67e6adf7fe63e8dd$var$Sequences.TitleEnd || this.currentSequence === $67e6adf7fe63e8dd$var$Sequences.TextareaEnd && !this.inSFCRoot) {
                if (c === this.delimiterOpen[0]) {
                    this.state = 2;
                    this.delimiterIndex = 0;
                    this.stateInterpolationOpen(c);
                }
            } else if (this.fastForwardTo(60)) this.sequenceIndex = 1;
        } else this.sequenceIndex = Number(c === 60);
    }
    stateCDATASequence(c) {
        if (c === $67e6adf7fe63e8dd$var$Sequences.Cdata[this.sequenceIndex]) {
            if (++this.sequenceIndex === $67e6adf7fe63e8dd$var$Sequences.Cdata.length) {
                this.state = 28;
                this.currentSequence = $67e6adf7fe63e8dd$var$Sequences.CdataEnd;
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
            }
        } else {
            this.sequenceIndex = 0;
            this.state = 23;
            this.stateInDeclaration(c);
        }
    }
    /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */ fastForwardTo(c) {
        while(++this.index < this.buffer.length){
            const cc = this.buffer.charCodeAt(this.index);
            if (cc === 10) this.newlines.push(this.index);
            if (cc === c) return true;
        }
        this.index = this.buffer.length - 1;
        return false;
    }
    /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */ stateInCommentLike(c) {
        if (c === this.currentSequence[this.sequenceIndex]) {
            if (++this.sequenceIndex === this.currentSequence.length) {
                if (this.currentSequence === $67e6adf7fe63e8dd$var$Sequences.CdataEnd) this.cbs.oncdata(this.sectionStart, this.index - 2);
                else this.cbs.oncomment(this.sectionStart, this.index - 2);
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
                this.state = 1;
            }
        } else if (this.sequenceIndex === 0) {
            if (this.fastForwardTo(this.currentSequence[0])) this.sequenceIndex = 1;
        } else if (c !== this.currentSequence[this.sequenceIndex - 1]) this.sequenceIndex = 0;
    }
    startSpecial(sequence, offset) {
        this.enterRCDATA(sequence, offset);
        this.state = 31;
    }
    enterRCDATA(sequence, offset) {
        this.inRCDATA = true;
        this.currentSequence = sequence;
        this.sequenceIndex = offset;
    }
    stateBeforeTagName(c) {
        if (c === 33) {
            this.state = 22;
            this.sectionStart = this.index + 1;
        } else if (c === 63) {
            this.state = 24;
            this.sectionStart = this.index + 1;
        } else if ($67e6adf7fe63e8dd$var$isTagStartChar(c)) {
            this.sectionStart = this.index;
            if (this.mode === 0) this.state = 6;
            else if (this.inSFCRoot) this.state = 34;
            else if (!this.inXML) {
                const lower = c | 32;
                if (lower === 116) this.state = 30;
                else this.state = lower === 115 ? 29 : 6;
            } else this.state = 6;
        } else if (c === 47) this.state = 8;
        else {
            this.state = 1;
            this.stateText(c);
        }
    }
    stateInTagName(c) {
        if ($67e6adf7fe63e8dd$var$isEndOfTagSection(c)) this.handleTagName(c);
    }
    stateInSFCRootTagName(c) {
        if ($67e6adf7fe63e8dd$var$isEndOfTagSection(c)) {
            const tag = this.buffer.slice(this.sectionStart, this.index);
            if (tag !== "template") this.enterRCDATA($67e6adf7fe63e8dd$var$toCharCodes(`</` + tag), 0);
            this.handleTagName(c);
        }
    }
    handleTagName(c) {
        this.cbs.onopentagname(this.sectionStart, this.index);
        this.sectionStart = -1;
        this.state = 11;
        this.stateBeforeAttrName(c);
    }
    stateBeforeClosingTagName(c) {
        if ($67e6adf7fe63e8dd$var$isWhitespace(c)) ;
        else if (c === 62) {
            this.cbs.onerr(14, this.index);
            this.state = 1;
            this.sectionStart = this.index + 1;
        } else {
            this.state = $67e6adf7fe63e8dd$var$isTagStartChar(c) ? 9 : 27;
            this.sectionStart = this.index;
        }
    }
    stateInClosingTagName(c) {
        if (c === 62 || $67e6adf7fe63e8dd$var$isWhitespace(c)) {
            this.cbs.onclosetag(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = 10;
            this.stateAfterClosingTagName(c);
        }
    }
    stateAfterClosingTagName(c) {
        if (c === 62) {
            this.state = 1;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeAttrName(c) {
        if (c === 62) {
            this.cbs.onopentagend(this.index);
            if (this.inRCDATA) this.state = 32;
            else this.state = 1;
            this.sectionStart = this.index + 1;
        } else if (c === 47) {
            this.state = 7;
            if (this.peek() !== 62) this.cbs.onerr(22, this.index);
        } else if (c === 60 && this.peek() === 47) {
            this.cbs.onopentagend(this.index);
            this.state = 5;
            this.sectionStart = this.index;
        } else if (!$67e6adf7fe63e8dd$var$isWhitespace(c)) {
            if (c === 61) this.cbs.onerr(19, this.index);
            this.handleAttrStart(c);
        }
    }
    handleAttrStart(c) {
        if (c === 118 && this.peek() === 45) {
            this.state = 13;
            this.sectionStart = this.index;
        } else if (c === 46 || c === 58 || c === 64 || c === 35) {
            this.cbs.ondirname(this.index, this.index + 1);
            this.state = 14;
            this.sectionStart = this.index + 1;
        } else {
            this.state = 12;
            this.sectionStart = this.index;
        }
    }
    stateInSelfClosingTag(c) {
        if (c === 62) {
            this.cbs.onselfclosingtag(this.index);
            this.state = 1;
            this.sectionStart = this.index + 1;
            this.inRCDATA = false;
        } else if (!$67e6adf7fe63e8dd$var$isWhitespace(c)) {
            this.state = 11;
            this.stateBeforeAttrName(c);
        }
    }
    stateInAttrName(c) {
        if (c === 61 || $67e6adf7fe63e8dd$var$isEndOfTagSection(c)) {
            this.cbs.onattribname(this.sectionStart, this.index);
            this.handleAttrNameEnd(c);
        } else if (c === 34 || c === 39 || c === 60) this.cbs.onerr(17, this.index);
    }
    stateInDirName(c) {
        if (c === 61 || $67e6adf7fe63e8dd$var$isEndOfTagSection(c)) {
            this.cbs.ondirname(this.sectionStart, this.index);
            this.handleAttrNameEnd(c);
        } else if (c === 58) {
            this.cbs.ondirname(this.sectionStart, this.index);
            this.state = 14;
            this.sectionStart = this.index + 1;
        } else if (c === 46) {
            this.cbs.ondirname(this.sectionStart, this.index);
            this.state = 16;
            this.sectionStart = this.index + 1;
        }
    }
    stateInDirArg(c) {
        if (c === 61 || $67e6adf7fe63e8dd$var$isEndOfTagSection(c)) {
            this.cbs.ondirarg(this.sectionStart, this.index);
            this.handleAttrNameEnd(c);
        } else if (c === 91) this.state = 15;
        else if (c === 46) {
            this.cbs.ondirarg(this.sectionStart, this.index);
            this.state = 16;
            this.sectionStart = this.index + 1;
        }
    }
    stateInDynamicDirArg(c) {
        if (c === 93) this.state = 14;
        else if (c === 61 || $67e6adf7fe63e8dd$var$isEndOfTagSection(c)) {
            this.cbs.ondirarg(this.sectionStart, this.index + 1);
            this.handleAttrNameEnd(c);
            this.cbs.onerr(27, this.index);
        }
    }
    stateInDirModifier(c) {
        if (c === 61 || $67e6adf7fe63e8dd$var$isEndOfTagSection(c)) {
            this.cbs.ondirmodifier(this.sectionStart, this.index);
            this.handleAttrNameEnd(c);
        } else if (c === 46) {
            this.cbs.ondirmodifier(this.sectionStart, this.index);
            this.sectionStart = this.index + 1;
        }
    }
    handleAttrNameEnd(c) {
        this.sectionStart = this.index;
        this.state = 17;
        this.cbs.onattribnameend(this.index);
        this.stateAfterAttrName(c);
    }
    stateAfterAttrName(c) {
        if (c === 61) this.state = 18;
        else if (c === 47 || c === 62) {
            this.cbs.onattribend(0, this.sectionStart);
            this.sectionStart = -1;
            this.state = 11;
            this.stateBeforeAttrName(c);
        } else if (!$67e6adf7fe63e8dd$var$isWhitespace(c)) {
            this.cbs.onattribend(0, this.sectionStart);
            this.handleAttrStart(c);
        }
    }
    stateBeforeAttrValue(c) {
        if (c === 34) {
            this.state = 19;
            this.sectionStart = this.index + 1;
        } else if (c === 39) {
            this.state = 20;
            this.sectionStart = this.index + 1;
        } else if (!$67e6adf7fe63e8dd$var$isWhitespace(c)) {
            this.sectionStart = this.index;
            this.state = 21;
            this.stateInAttrValueNoQuotes(c);
        }
    }
    handleInAttrValue(c, quote) {
        if (c === quote || this.fastForwardTo(quote)) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(quote === 34 ? 3 : 2, this.index + 1);
            this.state = 11;
        }
    }
    stateInAttrValueDoubleQuotes(c) {
        this.handleInAttrValue(c, 34);
    }
    stateInAttrValueSingleQuotes(c) {
        this.handleInAttrValue(c, 39);
    }
    stateInAttrValueNoQuotes(c) {
        if ($67e6adf7fe63e8dd$var$isWhitespace(c) || c === 62) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(1, this.index);
            this.state = 11;
            this.stateBeforeAttrName(c);
        } else if (c === 34 || c === 39 || c === 60 || c === 61 || c === 96) this.cbs.onerr(18, this.index);
    }
    stateBeforeDeclaration(c) {
        if (c === 91) {
            this.state = 26;
            this.sequenceIndex = 0;
        } else this.state = c === 45 ? 25 : 23;
    }
    stateInDeclaration(c) {
        if (c === 62 || this.fastForwardTo(62)) {
            this.state = 1;
            this.sectionStart = this.index + 1;
        }
    }
    stateInProcessingInstruction(c) {
        if (c === 62 || this.fastForwardTo(62)) {
            this.cbs.onprocessinginstruction(this.sectionStart, this.index);
            this.state = 1;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeComment(c) {
        if (c === 45) {
            this.state = 28;
            this.currentSequence = $67e6adf7fe63e8dd$var$Sequences.CommentEnd;
            this.sequenceIndex = 2;
            this.sectionStart = this.index + 1;
        } else this.state = 23;
    }
    stateInSpecialComment(c) {
        if (c === 62 || this.fastForwardTo(62)) {
            this.cbs.oncomment(this.sectionStart, this.index);
            this.state = 1;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeSpecialS(c) {
        const lower = c | 32;
        if (lower === $67e6adf7fe63e8dd$var$Sequences.ScriptEnd[3]) this.startSpecial($67e6adf7fe63e8dd$var$Sequences.ScriptEnd, 4);
        else if (lower === $67e6adf7fe63e8dd$var$Sequences.StyleEnd[3]) this.startSpecial($67e6adf7fe63e8dd$var$Sequences.StyleEnd, 4);
        else {
            this.state = 6;
            this.stateInTagName(c);
        }
    }
    stateBeforeSpecialT(c) {
        const lower = c | 32;
        if (lower === $67e6adf7fe63e8dd$var$Sequences.TitleEnd[3]) this.startSpecial($67e6adf7fe63e8dd$var$Sequences.TitleEnd, 4);
        else if (lower === $67e6adf7fe63e8dd$var$Sequences.TextareaEnd[3]) this.startSpecial($67e6adf7fe63e8dd$var$Sequences.TextareaEnd, 4);
        else {
            this.state = 6;
            this.stateInTagName(c);
        }
    }
    startEntity() {}
    stateInEntity() {}
    /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */ parse(input) {
        this.buffer = input;
        while(this.index < this.buffer.length){
            const c = this.buffer.charCodeAt(this.index);
            if (c === 10) this.newlines.push(this.index);
            switch(this.state){
                case 1:
                    this.stateText(c);
                    break;
                case 2:
                    this.stateInterpolationOpen(c);
                    break;
                case 3:
                    this.stateInterpolation(c);
                    break;
                case 4:
                    this.stateInterpolationClose(c);
                    break;
                case 31:
                    this.stateSpecialStartSequence(c);
                    break;
                case 32:
                    this.stateInRCDATA(c);
                    break;
                case 26:
                    this.stateCDATASequence(c);
                    break;
                case 19:
                    this.stateInAttrValueDoubleQuotes(c);
                    break;
                case 12:
                    this.stateInAttrName(c);
                    break;
                case 13:
                    this.stateInDirName(c);
                    break;
                case 14:
                    this.stateInDirArg(c);
                    break;
                case 15:
                    this.stateInDynamicDirArg(c);
                    break;
                case 16:
                    this.stateInDirModifier(c);
                    break;
                case 28:
                    this.stateInCommentLike(c);
                    break;
                case 27:
                    this.stateInSpecialComment(c);
                    break;
                case 11:
                    this.stateBeforeAttrName(c);
                    break;
                case 6:
                    this.stateInTagName(c);
                    break;
                case 34:
                    this.stateInSFCRootTagName(c);
                    break;
                case 9:
                    this.stateInClosingTagName(c);
                    break;
                case 5:
                    this.stateBeforeTagName(c);
                    break;
                case 17:
                    this.stateAfterAttrName(c);
                    break;
                case 20:
                    this.stateInAttrValueSingleQuotes(c);
                    break;
                case 18:
                    this.stateBeforeAttrValue(c);
                    break;
                case 8:
                    this.stateBeforeClosingTagName(c);
                    break;
                case 10:
                    this.stateAfterClosingTagName(c);
                    break;
                case 29:
                    this.stateBeforeSpecialS(c);
                    break;
                case 30:
                    this.stateBeforeSpecialT(c);
                    break;
                case 21:
                    this.stateInAttrValueNoQuotes(c);
                    break;
                case 7:
                    this.stateInSelfClosingTag(c);
                    break;
                case 23:
                    this.stateInDeclaration(c);
                    break;
                case 22:
                    this.stateBeforeDeclaration(c);
                    break;
                case 25:
                    this.stateBeforeComment(c);
                    break;
                case 24:
                    this.stateInProcessingInstruction(c);
                    break;
                case 33:
                    this.stateInEntity();
                    break;
            }
            this.index++;
        }
        this.cleanup();
        this.finish();
    }
    /**
   * Remove data that has already been consumed from the buffer.
   */ cleanup() {
        if (this.sectionStart !== this.index) {
            if (this.state === 1 || this.state === 32 && this.sequenceIndex === 0) {
                this.cbs.ontext(this.sectionStart, this.index);
                this.sectionStart = this.index;
            } else if (this.state === 19 || this.state === 20 || this.state === 21) {
                this.cbs.onattribdata(this.sectionStart, this.index);
                this.sectionStart = this.index;
            }
        }
    }
    finish() {
        this.handleTrailingData();
        this.cbs.onend();
    }
    /** Handle any trailing data. */ handleTrailingData() {
        const endIndex = this.buffer.length;
        if (this.sectionStart >= endIndex) return;
        if (this.state === 28) {
            if (this.currentSequence === $67e6adf7fe63e8dd$var$Sequences.CdataEnd) this.cbs.oncdata(this.sectionStart, endIndex);
            else this.cbs.oncomment(this.sectionStart, endIndex);
        } else if (this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9) ;
        else this.cbs.ontext(this.sectionStart, endIndex);
    }
    emitCodePoint(cp, consumed) {}
}
function $67e6adf7fe63e8dd$var$defaultOnError(error) {
    throw error;
}
function $67e6adf7fe63e8dd$var$defaultOnWarn(msg) {
    console.warn(`[Vue warn] ${msg.message}`);
}
function $67e6adf7fe63e8dd$var$createCompilerError(code, loc, messages, additionalMessage) {
    const msg = (messages || $67e6adf7fe63e8dd$var$errorMessages)[code] + (additionalMessage || ``);
    const error = new SyntaxError(String(msg));
    error.code = code;
    error.loc = loc;
    return error;
}
const $67e6adf7fe63e8dd$var$errorMessages = {
    // parse errors
    [0]: "Illegal comment.",
    [1]: "CDATA section is allowed only in XML context.",
    [2]: "Duplicate attribute.",
    [3]: "End tag cannot have attributes.",
    [4]: "Illegal '/' in tags.",
    [5]: "Unexpected EOF in tag.",
    [6]: "Unexpected EOF in CDATA section.",
    [7]: "Unexpected EOF in comment.",
    [8]: "Unexpected EOF in script.",
    [9]: "Unexpected EOF in tag.",
    [10]: "Incorrectly closed comment.",
    [11]: "Incorrectly opened comment.",
    [12]: "Illegal tag name. Use '&lt;' to print '<'.",
    [13]: "Attribute value was expected.",
    [14]: "End tag name was expected.",
    [15]: "Whitespace was expected.",
    [16]: "Unexpected '<!--' in comment.",
    [17]: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
    [18]: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
    [19]: "Attribute name cannot start with '='.",
    [21]: "'<?' is allowed only in XML context.",
    [20]: `Unexpected null character.`,
    [22]: "Illegal '/' in tags.",
    // Vue-specific parse errors
    [23]: "Invalid end tag.",
    [24]: "Element is missing end tag.",
    [25]: "Interpolation end sign was not found.",
    [27]: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
    [26]: "Legal directive name was expected.",
    // transform errors
    [28]: `v-if/v-else-if is missing expression.`,
    [29]: `v-if/else branches must use unique keys.`,
    [30]: `v-else/v-else-if has no adjacent v-if or v-else-if.`,
    [31]: `v-for is missing expression.`,
    [32]: `v-for has invalid expression.`,
    [33]: `<template v-for> key should be placed on the <template> tag.`,
    [34]: `v-bind is missing expression.`,
    [35]: `v-on is missing expression.`,
    [36]: `Unexpected custom directive on <slot> outlet.`,
    [37]: `Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.`,
    [38]: `Duplicate slot names found. `,
    [39]: `Extraneous children found when component already has explicitly named default slot. These children will be ignored.`,
    [40]: `v-slot can only be used on components or <template> tags.`,
    [41]: `v-model is missing expression.`,
    [42]: `v-model value must be a valid JavaScript member expression.`,
    [43]: `v-model cannot be used on v-for or v-slot scope variables because they are not writable.`,
    [44]: `v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,
    [45]: `Error parsing JavaScript expression: `,
    [46]: `<KeepAlive> expects exactly one child component.`,
    [51]: `@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.`,
    // generic errors
    [47]: `"prefixIdentifiers" option is not supported in this build of compiler.`,
    [48]: `ES module mode is not supported in this build of compiler.`,
    [49]: `"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.`,
    [50]: `"scopeId" option is only supported in module mode.`,
    // just to fulfill types
    [52]: ``
};
const $67e6adf7fe63e8dd$var$isStaticExp = (p)=>p.type === 4 && p.isStatic;
function $67e6adf7fe63e8dd$var$isCoreComponent(tag) {
    switch(tag){
        case "Teleport":
        case "teleport":
            return $67e6adf7fe63e8dd$var$TELEPORT;
        case "Suspense":
        case "suspense":
            return $67e6adf7fe63e8dd$var$SUSPENSE;
        case "KeepAlive":
        case "keep-alive":
            return $67e6adf7fe63e8dd$var$KEEP_ALIVE;
        case "BaseTransition":
        case "base-transition":
            return $67e6adf7fe63e8dd$var$BASE_TRANSITION;
    }
}
const $67e6adf7fe63e8dd$var$nonIdentifierRE = /^\d|[^\$\w]/;
const $67e6adf7fe63e8dd$var$isSimpleIdentifier = (name)=>!$67e6adf7fe63e8dd$var$nonIdentifierRE.test(name);
const $67e6adf7fe63e8dd$var$validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
const $67e6adf7fe63e8dd$var$validIdentCharRE = /[\.\?\w$\xA0-\uFFFF]/;
const $67e6adf7fe63e8dd$var$whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
const $67e6adf7fe63e8dd$var$isMemberExpressionBrowser = (path)=>{
    path = path.trim().replace($67e6adf7fe63e8dd$var$whitespaceRE, (s)=>s.trim());
    let state = 0 /* inMemberExp */ ;
    let stateStack = [];
    let currentOpenBracketCount = 0;
    let currentOpenParensCount = 0;
    let currentStringType = null;
    for(let i = 0; i < path.length; i++){
        const char = path.charAt(i);
        switch(state){
            case 0 /* inMemberExp */ :
                if (char === "[") {
                    stateStack.push(state);
                    state = 1 /* inBrackets */ ;
                    currentOpenBracketCount++;
                } else if (char === "(") {
                    stateStack.push(state);
                    state = 2 /* inParens */ ;
                    currentOpenParensCount++;
                } else if (!(i === 0 ? $67e6adf7fe63e8dd$var$validFirstIdentCharRE : $67e6adf7fe63e8dd$var$validIdentCharRE).test(char)) return false;
                break;
            case 1 /* inBrackets */ :
                if (char === `'` || char === `"` || char === "`") {
                    stateStack.push(state);
                    state = 3 /* inString */ ;
                    currentStringType = char;
                } else if (char === `[`) currentOpenBracketCount++;
                else if (char === `]`) {
                    if (!--currentOpenBracketCount) state = stateStack.pop();
                }
                break;
            case 2 /* inParens */ :
                if (char === `'` || char === `"` || char === "`") {
                    stateStack.push(state);
                    state = 3 /* inString */ ;
                    currentStringType = char;
                } else if (char === `(`) currentOpenParensCount++;
                else if (char === `)`) {
                    if (i === path.length - 1) return false;
                    if (!--currentOpenParensCount) state = stateStack.pop();
                }
                break;
            case 3 /* inString */ :
                if (char === currentStringType) {
                    state = stateStack.pop();
                    currentStringType = null;
                }
                break;
        }
    }
    return !currentOpenBracketCount && !currentOpenParensCount;
};
const $67e6adf7fe63e8dd$var$isMemberExpression = $67e6adf7fe63e8dd$var$isMemberExpressionBrowser;
function $67e6adf7fe63e8dd$var$assert(condition, msg) {
    if (!condition) throw new Error(msg || `unexpected compiler condition`);
}
function $67e6adf7fe63e8dd$var$findDir(node, name, allowEmpty = false) {
    for(let i = 0; i < node.props.length; i++){
        const p = node.props[i];
        if (p.type === 7 && (allowEmpty || p.exp) && ($67e6adf7fe63e8dd$var$isString(name) ? p.name === name : name.test(p.name))) return p;
    }
}
function $67e6adf7fe63e8dd$var$findProp(node, name, dynamicOnly = false, allowEmpty = false) {
    for(let i = 0; i < node.props.length; i++){
        const p = node.props[i];
        if (p.type === 6) {
            if (dynamicOnly) continue;
            if (p.name === name && (p.value || allowEmpty)) return p;
        } else if (p.name === "bind" && (p.exp || allowEmpty) && $67e6adf7fe63e8dd$var$isStaticArgOf(p.arg, name)) return p;
    }
}
function $67e6adf7fe63e8dd$var$isStaticArgOf(arg, name) {
    return !!(arg && $67e6adf7fe63e8dd$var$isStaticExp(arg) && arg.content === name);
}
function $67e6adf7fe63e8dd$var$hasDynamicKeyVBind(node) {
    return node.props.some((p)=>p.type === 7 && p.name === "bind" && (!p.arg || // v-bind="obj"
        p.arg.type !== 4 || // v-bind:[_ctx.foo]
        !p.arg.isStatic));
}
function $67e6adf7fe63e8dd$var$isText$1(node) {
    return node.type === 5 || node.type === 2;
}
function $67e6adf7fe63e8dd$var$isVSlot(p) {
    return p.type === 7 && p.name === "slot";
}
function $67e6adf7fe63e8dd$var$isTemplateNode(node) {
    return node.type === 1 && node.tagType === 3;
}
function $67e6adf7fe63e8dd$var$isSlotOutlet(node) {
    return node.type === 1 && node.tagType === 2;
}
const $67e6adf7fe63e8dd$var$propsHelperSet = /* @__PURE__ */ new Set([
    $67e6adf7fe63e8dd$var$NORMALIZE_PROPS,
    $67e6adf7fe63e8dd$var$GUARD_REACTIVE_PROPS
]);
function $67e6adf7fe63e8dd$var$getUnnormalizedProps(props, callPath = []) {
    if (props && !$67e6adf7fe63e8dd$var$isString(props) && props.type === 14) {
        const callee = props.callee;
        if (!$67e6adf7fe63e8dd$var$isString(callee) && $67e6adf7fe63e8dd$var$propsHelperSet.has(callee)) return $67e6adf7fe63e8dd$var$getUnnormalizedProps(props.arguments[0], callPath.concat(props));
    }
    return [
        props,
        callPath
    ];
}
function $67e6adf7fe63e8dd$var$injectProp(node, prop, context) {
    let propsWithInjection;
    let props = node.type === 13 ? node.props : node.arguments[2];
    let callPath = [];
    let parentCall;
    if (props && !$67e6adf7fe63e8dd$var$isString(props) && props.type === 14) {
        const ret = $67e6adf7fe63e8dd$var$getUnnormalizedProps(props);
        props = ret[0];
        callPath = ret[1];
        parentCall = callPath[callPath.length - 1];
    }
    if (props == null || $67e6adf7fe63e8dd$var$isString(props)) propsWithInjection = $67e6adf7fe63e8dd$var$createObjectExpression([
        prop
    ]);
    else if (props.type === 14) {
        const first = props.arguments[0];
        if (!$67e6adf7fe63e8dd$var$isString(first) && first.type === 15) {
            if (!$67e6adf7fe63e8dd$var$hasProp(prop, first)) first.properties.unshift(prop);
        } else if (props.callee === $67e6adf7fe63e8dd$var$TO_HANDLERS) propsWithInjection = $67e6adf7fe63e8dd$var$createCallExpression(context.helper($67e6adf7fe63e8dd$var$MERGE_PROPS), [
            $67e6adf7fe63e8dd$var$createObjectExpression([
                prop
            ]),
            props
        ]);
        else props.arguments.unshift($67e6adf7fe63e8dd$var$createObjectExpression([
            prop
        ]));
        !propsWithInjection && (propsWithInjection = props);
    } else if (props.type === 15) {
        if (!$67e6adf7fe63e8dd$var$hasProp(prop, props)) props.properties.unshift(prop);
        propsWithInjection = props;
    } else {
        propsWithInjection = $67e6adf7fe63e8dd$var$createCallExpression(context.helper($67e6adf7fe63e8dd$var$MERGE_PROPS), [
            $67e6adf7fe63e8dd$var$createObjectExpression([
                prop
            ]),
            props
        ]);
        if (parentCall && parentCall.callee === $67e6adf7fe63e8dd$var$GUARD_REACTIVE_PROPS) parentCall = callPath[callPath.length - 2];
    }
    if (node.type === 13) {
        if (parentCall) parentCall.arguments[0] = propsWithInjection;
        else node.props = propsWithInjection;
    } else if (parentCall) parentCall.arguments[0] = propsWithInjection;
    else node.arguments[2] = propsWithInjection;
}
function $67e6adf7fe63e8dd$var$hasProp(prop, props) {
    let result = false;
    if (prop.key.type === 4) {
        const propKeyName = prop.key.content;
        result = props.properties.some((p)=>p.key.type === 4 && p.key.content === propKeyName);
    }
    return result;
}
function $67e6adf7fe63e8dd$var$toValidAssetId(name, type) {
    return `_${type}_${name.replace(/[^\w]/g, (searchValue, replaceValue)=>{
        return searchValue === "-" ? "_" : name.charCodeAt(replaceValue).toString();
    })}`;
}
function $67e6adf7fe63e8dd$var$getMemoedVNodeCall(node) {
    if (node.type === 14 && node.callee === $67e6adf7fe63e8dd$var$WITH_MEMO) return node.arguments[1].returns;
    else return node;
}
const $67e6adf7fe63e8dd$var$forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
const $67e6adf7fe63e8dd$var$defaultParserOptions = {
    parseMode: "base",
    ns: 0,
    delimiters: [
        `{{`,
        `}}`
    ],
    getNamespace: ()=>0,
    isVoidTag: $67e6adf7fe63e8dd$var$NO,
    isPreTag: $67e6adf7fe63e8dd$var$NO,
    isCustomElement: $67e6adf7fe63e8dd$var$NO,
    onError: $67e6adf7fe63e8dd$var$defaultOnError,
    onWarn: $67e6adf7fe63e8dd$var$defaultOnWarn,
    comments: true,
    prefixIdentifiers: false
};
let $67e6adf7fe63e8dd$var$currentOptions = $67e6adf7fe63e8dd$var$defaultParserOptions;
let $67e6adf7fe63e8dd$var$currentRoot = null;
let $67e6adf7fe63e8dd$var$currentInput = "";
let $67e6adf7fe63e8dd$var$currentOpenTag = null;
let $67e6adf7fe63e8dd$var$currentProp = null;
let $67e6adf7fe63e8dd$var$currentAttrValue = "";
let $67e6adf7fe63e8dd$var$currentAttrStartIndex = -1;
let $67e6adf7fe63e8dd$var$currentAttrEndIndex = -1;
let $67e6adf7fe63e8dd$var$inPre = 0;
let $67e6adf7fe63e8dd$var$inVPre = false;
let $67e6adf7fe63e8dd$var$currentVPreBoundary = null;
const $67e6adf7fe63e8dd$var$stack = [];
const $67e6adf7fe63e8dd$var$tokenizer = new $67e6adf7fe63e8dd$var$Tokenizer($67e6adf7fe63e8dd$var$stack, {
    onerr: $67e6adf7fe63e8dd$var$emitError,
    ontext (start, end) {
        $67e6adf7fe63e8dd$var$onText($67e6adf7fe63e8dd$var$getSlice(start, end), start, end);
    },
    ontextentity (char, start, end) {
        $67e6adf7fe63e8dd$var$onText(char, start, end);
    },
    oninterpolation (start, end) {
        if ($67e6adf7fe63e8dd$var$inVPre) return $67e6adf7fe63e8dd$var$onText($67e6adf7fe63e8dd$var$getSlice(start, end), start, end);
        let innerStart = start + $67e6adf7fe63e8dd$var$tokenizer.delimiterOpen.length;
        let innerEnd = end - $67e6adf7fe63e8dd$var$tokenizer.delimiterClose.length;
        while($67e6adf7fe63e8dd$var$isWhitespace($67e6adf7fe63e8dd$var$currentInput.charCodeAt(innerStart)))innerStart++;
        while($67e6adf7fe63e8dd$var$isWhitespace($67e6adf7fe63e8dd$var$currentInput.charCodeAt(innerEnd - 1)))innerEnd--;
        let exp = $67e6adf7fe63e8dd$var$getSlice(innerStart, innerEnd);
        if (exp.includes("&")) exp = $67e6adf7fe63e8dd$var$currentOptions.decodeEntities(exp, false);
        $67e6adf7fe63e8dd$var$addNode({
            type: 5,
            content: $67e6adf7fe63e8dd$var$createExp(exp, false, $67e6adf7fe63e8dd$var$getLoc(innerStart, innerEnd)),
            loc: $67e6adf7fe63e8dd$var$getLoc(start, end)
        });
    },
    onopentagname (start, end) {
        const name = $67e6adf7fe63e8dd$var$getSlice(start, end);
        $67e6adf7fe63e8dd$var$currentOpenTag = {
            type: 1,
            tag: name,
            ns: $67e6adf7fe63e8dd$var$currentOptions.getNamespace(name, $67e6adf7fe63e8dd$var$stack[0], $67e6adf7fe63e8dd$var$currentOptions.ns),
            tagType: 0,
            // will be refined on tag close
            props: [],
            children: [],
            loc: $67e6adf7fe63e8dd$var$getLoc(start - 1, end),
            codegenNode: void 0
        };
    },
    onopentagend (end) {
        $67e6adf7fe63e8dd$var$endOpenTag(end);
    },
    onclosetag (start, end) {
        const name = $67e6adf7fe63e8dd$var$getSlice(start, end);
        if (!$67e6adf7fe63e8dd$var$currentOptions.isVoidTag(name)) {
            let found = false;
            for(let i = 0; i < $67e6adf7fe63e8dd$var$stack.length; i++){
                const e = $67e6adf7fe63e8dd$var$stack[i];
                if (e.tag.toLowerCase() === name.toLowerCase()) {
                    found = true;
                    if (i > 0) $67e6adf7fe63e8dd$var$emitError(24, $67e6adf7fe63e8dd$var$stack[0].loc.start.offset);
                    for(let j = 0; j <= i; j++){
                        const el = $67e6adf7fe63e8dd$var$stack.shift();
                        $67e6adf7fe63e8dd$var$onCloseTag(el, end, j < i);
                    }
                    break;
                }
            }
            if (!found) $67e6adf7fe63e8dd$var$emitError(23, $67e6adf7fe63e8dd$var$backTrack(start, 60));
        }
    },
    onselfclosingtag (end) {
        var _a;
        const name = $67e6adf7fe63e8dd$var$currentOpenTag.tag;
        $67e6adf7fe63e8dd$var$currentOpenTag.isSelfClosing = true;
        $67e6adf7fe63e8dd$var$endOpenTag(end);
        if (((_a = $67e6adf7fe63e8dd$var$stack[0]) == null ? void 0 : _a.tag) === name) $67e6adf7fe63e8dd$var$onCloseTag($67e6adf7fe63e8dd$var$stack.shift(), end);
    },
    onattribname (start, end) {
        $67e6adf7fe63e8dd$var$currentProp = {
            type: 6,
            name: $67e6adf7fe63e8dd$var$getSlice(start, end),
            nameLoc: $67e6adf7fe63e8dd$var$getLoc(start, end),
            value: void 0,
            loc: $67e6adf7fe63e8dd$var$getLoc(start)
        };
    },
    ondirname (start, end) {
        const raw = $67e6adf7fe63e8dd$var$getSlice(start, end);
        const name = raw === "." || raw === ":" ? "bind" : raw === "@" ? "on" : raw === "#" ? "slot" : raw.slice(2);
        if (!$67e6adf7fe63e8dd$var$inVPre && name === "") $67e6adf7fe63e8dd$var$emitError(26, start);
        if ($67e6adf7fe63e8dd$var$inVPre || name === "") $67e6adf7fe63e8dd$var$currentProp = {
            type: 6,
            name: raw,
            nameLoc: $67e6adf7fe63e8dd$var$getLoc(start, end),
            value: void 0,
            loc: $67e6adf7fe63e8dd$var$getLoc(start)
        };
        else {
            $67e6adf7fe63e8dd$var$currentProp = {
                type: 7,
                name: name,
                rawName: raw,
                exp: void 0,
                arg: void 0,
                modifiers: raw === "." ? [
                    "prop"
                ] : [],
                loc: $67e6adf7fe63e8dd$var$getLoc(start)
            };
            if (name === "pre") {
                $67e6adf7fe63e8dd$var$inVPre = $67e6adf7fe63e8dd$var$tokenizer.inVPre = true;
                $67e6adf7fe63e8dd$var$currentVPreBoundary = $67e6adf7fe63e8dd$var$currentOpenTag;
                const props = $67e6adf7fe63e8dd$var$currentOpenTag.props;
                for(let i = 0; i < props.length; i++)if (props[i].type === 7) props[i] = $67e6adf7fe63e8dd$var$dirToAttr(props[i]);
            }
        }
    },
    ondirarg (start, end) {
        if (start === end) return;
        const arg = $67e6adf7fe63e8dd$var$getSlice(start, end);
        if ($67e6adf7fe63e8dd$var$inVPre) {
            $67e6adf7fe63e8dd$var$currentProp.name += arg;
            $67e6adf7fe63e8dd$var$setLocEnd($67e6adf7fe63e8dd$var$currentProp.nameLoc, end);
        } else {
            const isStatic = arg[0] !== `[`;
            $67e6adf7fe63e8dd$var$currentProp.arg = $67e6adf7fe63e8dd$var$createExp(isStatic ? arg : arg.slice(1, -1), isStatic, $67e6adf7fe63e8dd$var$getLoc(start, end), isStatic ? 3 : 0);
        }
    },
    ondirmodifier (start, end) {
        const mod = $67e6adf7fe63e8dd$var$getSlice(start, end);
        if ($67e6adf7fe63e8dd$var$inVPre) {
            $67e6adf7fe63e8dd$var$currentProp.name += "." + mod;
            $67e6adf7fe63e8dd$var$setLocEnd($67e6adf7fe63e8dd$var$currentProp.nameLoc, end);
        } else if ($67e6adf7fe63e8dd$var$currentProp.name === "slot") {
            const arg = $67e6adf7fe63e8dd$var$currentProp.arg;
            if (arg) {
                arg.content += "." + mod;
                $67e6adf7fe63e8dd$var$setLocEnd(arg.loc, end);
            }
        } else $67e6adf7fe63e8dd$var$currentProp.modifiers.push(mod);
    },
    onattribdata (start, end) {
        $67e6adf7fe63e8dd$var$currentAttrValue += $67e6adf7fe63e8dd$var$getSlice(start, end);
        if ($67e6adf7fe63e8dd$var$currentAttrStartIndex < 0) $67e6adf7fe63e8dd$var$currentAttrStartIndex = start;
        $67e6adf7fe63e8dd$var$currentAttrEndIndex = end;
    },
    onattribentity (char, start, end) {
        $67e6adf7fe63e8dd$var$currentAttrValue += char;
        if ($67e6adf7fe63e8dd$var$currentAttrStartIndex < 0) $67e6adf7fe63e8dd$var$currentAttrStartIndex = start;
        $67e6adf7fe63e8dd$var$currentAttrEndIndex = end;
    },
    onattribnameend (end) {
        const start = $67e6adf7fe63e8dd$var$currentProp.loc.start.offset;
        const name = $67e6adf7fe63e8dd$var$getSlice(start, end);
        if ($67e6adf7fe63e8dd$var$currentProp.type === 7) $67e6adf7fe63e8dd$var$currentProp.rawName = name;
        if ($67e6adf7fe63e8dd$var$currentOpenTag.props.some((p)=>(p.type === 7 ? p.rawName : p.name) === name)) $67e6adf7fe63e8dd$var$emitError(2, start);
    },
    onattribend (quote, end) {
        if ($67e6adf7fe63e8dd$var$currentOpenTag && $67e6adf7fe63e8dd$var$currentProp) {
            $67e6adf7fe63e8dd$var$setLocEnd($67e6adf7fe63e8dd$var$currentProp.loc, end);
            if (quote !== 0) {
                if ($67e6adf7fe63e8dd$var$currentAttrValue.includes("&")) $67e6adf7fe63e8dd$var$currentAttrValue = $67e6adf7fe63e8dd$var$currentOptions.decodeEntities($67e6adf7fe63e8dd$var$currentAttrValue, true);
                if ($67e6adf7fe63e8dd$var$currentProp.type === 6) {
                    if ($67e6adf7fe63e8dd$var$currentProp.name === "class") $67e6adf7fe63e8dd$var$currentAttrValue = $67e6adf7fe63e8dd$var$condense($67e6adf7fe63e8dd$var$currentAttrValue).trim();
                    if (quote === 1 && !$67e6adf7fe63e8dd$var$currentAttrValue) $67e6adf7fe63e8dd$var$emitError(13, end);
                    $67e6adf7fe63e8dd$var$currentProp.value = {
                        type: 2,
                        content: $67e6adf7fe63e8dd$var$currentAttrValue,
                        loc: quote === 1 ? $67e6adf7fe63e8dd$var$getLoc($67e6adf7fe63e8dd$var$currentAttrStartIndex, $67e6adf7fe63e8dd$var$currentAttrEndIndex) : $67e6adf7fe63e8dd$var$getLoc($67e6adf7fe63e8dd$var$currentAttrStartIndex - 1, $67e6adf7fe63e8dd$var$currentAttrEndIndex + 1)
                    };
                    if ($67e6adf7fe63e8dd$var$tokenizer.inSFCRoot && $67e6adf7fe63e8dd$var$currentOpenTag.tag === "template" && $67e6adf7fe63e8dd$var$currentProp.name === "lang" && $67e6adf7fe63e8dd$var$currentAttrValue && $67e6adf7fe63e8dd$var$currentAttrValue !== "html") $67e6adf7fe63e8dd$var$tokenizer.enterRCDATA($67e6adf7fe63e8dd$var$toCharCodes(`</template`), 0);
                } else {
                    let expParseMode = 0 /* Normal */ ;
                    $67e6adf7fe63e8dd$var$currentProp.exp = $67e6adf7fe63e8dd$var$createExp($67e6adf7fe63e8dd$var$currentAttrValue, false, $67e6adf7fe63e8dd$var$getLoc($67e6adf7fe63e8dd$var$currentAttrStartIndex, $67e6adf7fe63e8dd$var$currentAttrEndIndex), 0, expParseMode);
                    if ($67e6adf7fe63e8dd$var$currentProp.name === "for") $67e6adf7fe63e8dd$var$currentProp.forParseResult = $67e6adf7fe63e8dd$var$parseForExpression($67e6adf7fe63e8dd$var$currentProp.exp);
                }
            }
            if ($67e6adf7fe63e8dd$var$currentProp.type !== 7 || $67e6adf7fe63e8dd$var$currentProp.name !== "pre") $67e6adf7fe63e8dd$var$currentOpenTag.props.push($67e6adf7fe63e8dd$var$currentProp);
        }
        $67e6adf7fe63e8dd$var$currentAttrValue = "";
        $67e6adf7fe63e8dd$var$currentAttrStartIndex = $67e6adf7fe63e8dd$var$currentAttrEndIndex = -1;
    },
    oncomment (start, end) {
        if ($67e6adf7fe63e8dd$var$currentOptions.comments) $67e6adf7fe63e8dd$var$addNode({
            type: 3,
            content: $67e6adf7fe63e8dd$var$getSlice(start, end),
            loc: $67e6adf7fe63e8dd$var$getLoc(start - 4, end + 3)
        });
    },
    onend () {
        const end = $67e6adf7fe63e8dd$var$currentInput.length;
        if ($67e6adf7fe63e8dd$var$tokenizer.state !== 1) switch($67e6adf7fe63e8dd$var$tokenizer.state){
            case 5:
            case 8:
                $67e6adf7fe63e8dd$var$emitError(5, end);
                break;
            case 3:
            case 4:
                $67e6adf7fe63e8dd$var$emitError(25, $67e6adf7fe63e8dd$var$tokenizer.sectionStart);
                break;
            case 28:
                if ($67e6adf7fe63e8dd$var$tokenizer.currentSequence === $67e6adf7fe63e8dd$var$Sequences.CdataEnd) $67e6adf7fe63e8dd$var$emitError(6, end);
                else $67e6adf7fe63e8dd$var$emitError(7, end);
                break;
            case 6:
            case 7:
            case 9:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
                $67e6adf7fe63e8dd$var$emitError(9, end);
                break;
        }
        for(let index = 0; index < $67e6adf7fe63e8dd$var$stack.length; index++){
            $67e6adf7fe63e8dd$var$onCloseTag($67e6adf7fe63e8dd$var$stack[index], end - 1);
            $67e6adf7fe63e8dd$var$emitError(24, $67e6adf7fe63e8dd$var$stack[index].loc.start.offset);
        }
    },
    oncdata (start, end) {
        if ($67e6adf7fe63e8dd$var$stack[0].ns !== 0) $67e6adf7fe63e8dd$var$onText($67e6adf7fe63e8dd$var$getSlice(start, end), start, end);
        else $67e6adf7fe63e8dd$var$emitError(1, start - 9);
    },
    onprocessinginstruction (start) {
        if (($67e6adf7fe63e8dd$var$stack[0] ? $67e6adf7fe63e8dd$var$stack[0].ns : $67e6adf7fe63e8dd$var$currentOptions.ns) === 0) $67e6adf7fe63e8dd$var$emitError(21, start - 1);
    }
});
const $67e6adf7fe63e8dd$var$forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
const $67e6adf7fe63e8dd$var$stripParensRE = /^\(|\)$/g;
function $67e6adf7fe63e8dd$var$parseForExpression(input) {
    const loc = input.loc;
    const exp = input.content;
    const inMatch = exp.match($67e6adf7fe63e8dd$var$forAliasRE);
    if (!inMatch) return;
    const [, LHS, RHS] = inMatch;
    const createAliasExpression = (content, offset, asParam = false)=>{
        const start = loc.start.offset + offset;
        const end = start + content.length;
        return $67e6adf7fe63e8dd$var$createExp(content, false, $67e6adf7fe63e8dd$var$getLoc(start, end), 0, asParam ? 1 /* Params */  : 0 /* Normal */ );
    };
    const result = {
        source: createAliasExpression(RHS.trim(), exp.indexOf(RHS, LHS.length)),
        value: void 0,
        key: void 0,
        index: void 0,
        finalized: false
    };
    let valueContent = LHS.trim().replace($67e6adf7fe63e8dd$var$stripParensRE, "").trim();
    const trimmedOffset = LHS.indexOf(valueContent);
    const iteratorMatch = valueContent.match($67e6adf7fe63e8dd$var$forIteratorRE);
    if (iteratorMatch) {
        valueContent = valueContent.replace($67e6adf7fe63e8dd$var$forIteratorRE, "").trim();
        const keyContent = iteratorMatch[1].trim();
        let keyOffset;
        if (keyContent) {
            keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
            result.key = createAliasExpression(keyContent, keyOffset, true);
        }
        if (iteratorMatch[2]) {
            const indexContent = iteratorMatch[2].trim();
            if (indexContent) result.index = createAliasExpression(indexContent, exp.indexOf(indexContent, result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length), true);
        }
    }
    if (valueContent) result.value = createAliasExpression(valueContent, trimmedOffset, true);
    return result;
}
function $67e6adf7fe63e8dd$var$getSlice(start, end) {
    return $67e6adf7fe63e8dd$var$currentInput.slice(start, end);
}
function $67e6adf7fe63e8dd$var$endOpenTag(end) {
    if ($67e6adf7fe63e8dd$var$tokenizer.inSFCRoot) $67e6adf7fe63e8dd$var$currentOpenTag.innerLoc = $67e6adf7fe63e8dd$var$getLoc(end + 1, end + 1);
    $67e6adf7fe63e8dd$var$addNode($67e6adf7fe63e8dd$var$currentOpenTag);
    const { tag: tag, ns: ns } = $67e6adf7fe63e8dd$var$currentOpenTag;
    if (ns === 0 && $67e6adf7fe63e8dd$var$currentOptions.isPreTag(tag)) $67e6adf7fe63e8dd$var$inPre++;
    if ($67e6adf7fe63e8dd$var$currentOptions.isVoidTag(tag)) $67e6adf7fe63e8dd$var$onCloseTag($67e6adf7fe63e8dd$var$currentOpenTag, end);
    else {
        $67e6adf7fe63e8dd$var$stack.unshift($67e6adf7fe63e8dd$var$currentOpenTag);
        if (ns === 1 || ns === 2) $67e6adf7fe63e8dd$var$tokenizer.inXML = true;
    }
    $67e6adf7fe63e8dd$var$currentOpenTag = null;
}
function $67e6adf7fe63e8dd$var$onText(content, start, end) {
    var _a;
    {
        const tag = (_a = $67e6adf7fe63e8dd$var$stack[0]) == null ? void 0 : _a.tag;
        if (tag !== "script" && tag !== "style" && content.includes("&")) content = $67e6adf7fe63e8dd$var$currentOptions.decodeEntities(content, false);
    }
    const parent = $67e6adf7fe63e8dd$var$stack[0] || $67e6adf7fe63e8dd$var$currentRoot;
    const lastNode = parent.children[parent.children.length - 1];
    if ((lastNode == null ? void 0 : lastNode.type) === 2) {
        lastNode.content += content;
        $67e6adf7fe63e8dd$var$setLocEnd(lastNode.loc, end);
    } else parent.children.push({
        type: 2,
        content: content,
        loc: $67e6adf7fe63e8dd$var$getLoc(start, end)
    });
}
function $67e6adf7fe63e8dd$var$onCloseTag(el, end, isImplied = false) {
    if (isImplied) $67e6adf7fe63e8dd$var$setLocEnd(el.loc, $67e6adf7fe63e8dd$var$backTrack(end, 60));
    else $67e6adf7fe63e8dd$var$setLocEnd(el.loc, end + 1);
    if ($67e6adf7fe63e8dd$var$tokenizer.inSFCRoot) {
        if (el.children.length) el.innerLoc.end = $67e6adf7fe63e8dd$var$extend({}, el.children[el.children.length - 1].loc.end);
        else el.innerLoc.end = $67e6adf7fe63e8dd$var$extend({}, el.innerLoc.start);
        el.innerLoc.source = $67e6adf7fe63e8dd$var$getSlice(el.innerLoc.start.offset, el.innerLoc.end.offset);
    }
    const { tag: tag, ns: ns } = el;
    if (!$67e6adf7fe63e8dd$var$inVPre) {
        if (tag === "slot") el.tagType = 2;
        else if ($67e6adf7fe63e8dd$var$isFragmentTemplate(el)) el.tagType = 3;
        else if ($67e6adf7fe63e8dd$var$isComponent(el)) el.tagType = 1;
    }
    if (!$67e6adf7fe63e8dd$var$tokenizer.inRCDATA) el.children = $67e6adf7fe63e8dd$var$condenseWhitespace(el.children, el.tag);
    if (ns === 0 && $67e6adf7fe63e8dd$var$currentOptions.isPreTag(tag)) $67e6adf7fe63e8dd$var$inPre--;
    if ($67e6adf7fe63e8dd$var$currentVPreBoundary === el) {
        $67e6adf7fe63e8dd$var$inVPre = $67e6adf7fe63e8dd$var$tokenizer.inVPre = false;
        $67e6adf7fe63e8dd$var$currentVPreBoundary = null;
    }
    if ($67e6adf7fe63e8dd$var$tokenizer.inXML && ($67e6adf7fe63e8dd$var$stack[0] ? $67e6adf7fe63e8dd$var$stack[0].ns : $67e6adf7fe63e8dd$var$currentOptions.ns) === 0) $67e6adf7fe63e8dd$var$tokenizer.inXML = false;
}
function $67e6adf7fe63e8dd$var$backTrack(index, c) {
    let i = index;
    while($67e6adf7fe63e8dd$var$currentInput.charCodeAt(i) !== c && i >= 0)i--;
    return i;
}
const $67e6adf7fe63e8dd$var$specialTemplateDir = /* @__PURE__ */ new Set([
    "if",
    "else",
    "else-if",
    "for",
    "slot"
]);
function $67e6adf7fe63e8dd$var$isFragmentTemplate({ tag: tag, props: props }) {
    if (tag === "template") for(let i = 0; i < props.length; i++){
        if (props[i].type === 7 && $67e6adf7fe63e8dd$var$specialTemplateDir.has(props[i].name)) return true;
    }
    return false;
}
function $67e6adf7fe63e8dd$var$isComponent({ tag: tag, props: props }) {
    var _a;
    if ($67e6adf7fe63e8dd$var$currentOptions.isCustomElement(tag)) return false;
    if (tag === "component" || $67e6adf7fe63e8dd$var$isUpperCase(tag.charCodeAt(0)) || $67e6adf7fe63e8dd$var$isCoreComponent(tag) || ((_a = $67e6adf7fe63e8dd$var$currentOptions.isBuiltInComponent) == null ? void 0 : _a.call($67e6adf7fe63e8dd$var$currentOptions, tag)) || $67e6adf7fe63e8dd$var$currentOptions.isNativeTag && !$67e6adf7fe63e8dd$var$currentOptions.isNativeTag(tag)) return true;
    for(let i = 0; i < props.length; i++){
        const p = props[i];
        if (p.type === 6) {
            if (p.name === "is" && p.value) {
                if (p.value.content.startsWith("vue:")) return true;
            }
        }
    }
    return false;
}
function $67e6adf7fe63e8dd$var$isUpperCase(c) {
    return c > 64 && c < 91;
}
const $67e6adf7fe63e8dd$var$windowsNewlineRE = /\r\n/g;
function $67e6adf7fe63e8dd$var$condenseWhitespace(nodes, tag) {
    var _a, _b;
    const shouldCondense = $67e6adf7fe63e8dd$var$currentOptions.whitespace !== "preserve";
    let removedWhitespace = false;
    for(let i = 0; i < nodes.length; i++){
        const node = nodes[i];
        if (node.type === 2) {
            if (!$67e6adf7fe63e8dd$var$inPre) {
                if ($67e6adf7fe63e8dd$var$isAllWhitespace(node.content)) {
                    const prev = (_a = nodes[i - 1]) == null ? void 0 : _a.type;
                    const next = (_b = nodes[i + 1]) == null ? void 0 : _b.type;
                    if (!prev || !next || shouldCondense && (prev === 3 && (next === 3 || next === 1) || prev === 1 && (next === 3 || next === 1 && $67e6adf7fe63e8dd$var$hasNewlineChar(node.content)))) {
                        removedWhitespace = true;
                        nodes[i] = null;
                    } else node.content = " ";
                } else if (shouldCondense) node.content = $67e6adf7fe63e8dd$var$condense(node.content);
            } else node.content = node.content.replace($67e6adf7fe63e8dd$var$windowsNewlineRE, "\n");
        }
    }
    if ($67e6adf7fe63e8dd$var$inPre && tag && $67e6adf7fe63e8dd$var$currentOptions.isPreTag(tag)) {
        const first = nodes[0];
        if (first && first.type === 2) first.content = first.content.replace(/^\r?\n/, "");
    }
    return removedWhitespace ? nodes.filter(Boolean) : nodes;
}
function $67e6adf7fe63e8dd$var$isAllWhitespace(str) {
    for(let i = 0; i < str.length; i++){
        if (!$67e6adf7fe63e8dd$var$isWhitespace(str.charCodeAt(i))) return false;
    }
    return true;
}
function $67e6adf7fe63e8dd$var$hasNewlineChar(str) {
    for(let i = 0; i < str.length; i++){
        const c = str.charCodeAt(i);
        if (c === 10 || c === 13) return true;
    }
    return false;
}
function $67e6adf7fe63e8dd$var$condense(str) {
    let ret = "";
    let prevCharIsWhitespace = false;
    for(let i = 0; i < str.length; i++){
        if ($67e6adf7fe63e8dd$var$isWhitespace(str.charCodeAt(i))) {
            if (!prevCharIsWhitespace) {
                ret += " ";
                prevCharIsWhitespace = true;
            }
        } else {
            ret += str[i];
            prevCharIsWhitespace = false;
        }
    }
    return ret;
}
function $67e6adf7fe63e8dd$var$addNode(node) {
    ($67e6adf7fe63e8dd$var$stack[0] || $67e6adf7fe63e8dd$var$currentRoot).children.push(node);
}
function $67e6adf7fe63e8dd$var$getLoc(start, end) {
    return {
        start: $67e6adf7fe63e8dd$var$tokenizer.getPos(start),
        // @ts-expect-error allow late attachment
        end: end == null ? end : $67e6adf7fe63e8dd$var$tokenizer.getPos(end),
        // @ts-expect-error allow late attachment
        source: end == null ? end : $67e6adf7fe63e8dd$var$getSlice(start, end)
    };
}
function $67e6adf7fe63e8dd$var$setLocEnd(loc, end) {
    loc.end = $67e6adf7fe63e8dd$var$tokenizer.getPos(end);
    loc.source = $67e6adf7fe63e8dd$var$getSlice(loc.start.offset, end);
}
function $67e6adf7fe63e8dd$var$dirToAttr(dir) {
    const attr = {
        type: 6,
        name: dir.rawName,
        nameLoc: $67e6adf7fe63e8dd$var$getLoc(dir.loc.start.offset, dir.loc.start.offset + dir.rawName.length),
        value: void 0,
        loc: dir.loc
    };
    if (dir.exp) {
        const loc = dir.exp.loc;
        if (loc.end.offset < dir.loc.end.offset) {
            loc.start.offset--;
            loc.start.column--;
            loc.end.offset++;
            loc.end.column++;
        }
        attr.value = {
            type: 2,
            content: dir.exp.content,
            loc: loc
        };
    }
    return attr;
}
function $67e6adf7fe63e8dd$var$createExp(content, isStatic = false, loc, constType = 0, parseMode = 0 /* Normal */ ) {
    const exp = $67e6adf7fe63e8dd$var$createSimpleExpression(content, isStatic, loc, constType);
    return exp;
}
function $67e6adf7fe63e8dd$var$emitError(code, index, message) {
    $67e6adf7fe63e8dd$var$currentOptions.onError($67e6adf7fe63e8dd$var$createCompilerError(code, $67e6adf7fe63e8dd$var$getLoc(index, index), void 0, message));
}
function $67e6adf7fe63e8dd$var$reset() {
    $67e6adf7fe63e8dd$var$tokenizer.reset();
    $67e6adf7fe63e8dd$var$currentOpenTag = null;
    $67e6adf7fe63e8dd$var$currentProp = null;
    $67e6adf7fe63e8dd$var$currentAttrValue = "";
    $67e6adf7fe63e8dd$var$currentAttrStartIndex = -1;
    $67e6adf7fe63e8dd$var$currentAttrEndIndex = -1;
    $67e6adf7fe63e8dd$var$stack.length = 0;
}
function $67e6adf7fe63e8dd$var$baseParse(input, options) {
    $67e6adf7fe63e8dd$var$reset();
    $67e6adf7fe63e8dd$var$currentInput = input;
    $67e6adf7fe63e8dd$var$currentOptions = $67e6adf7fe63e8dd$var$extend({}, $67e6adf7fe63e8dd$var$defaultParserOptions);
    if (options) {
        let key;
        for(key in options)if (options[key] != null) $67e6adf7fe63e8dd$var$currentOptions[key] = options[key];
    }
    if (!$67e6adf7fe63e8dd$var$currentOptions.decodeEntities) throw new Error(`[@vue/compiler-core] decodeEntities option is required in browser builds.`);
    $67e6adf7fe63e8dd$var$tokenizer.mode = $67e6adf7fe63e8dd$var$currentOptions.parseMode === "html" ? 1 : $67e6adf7fe63e8dd$var$currentOptions.parseMode === "sfc" ? 2 : 0;
    $67e6adf7fe63e8dd$var$tokenizer.inXML = $67e6adf7fe63e8dd$var$currentOptions.ns === 1 || $67e6adf7fe63e8dd$var$currentOptions.ns === 2;
    const delimiters = options == null ? void 0 : options.delimiters;
    if (delimiters) {
        $67e6adf7fe63e8dd$var$tokenizer.delimiterOpen = $67e6adf7fe63e8dd$var$toCharCodes(delimiters[0]);
        $67e6adf7fe63e8dd$var$tokenizer.delimiterClose = $67e6adf7fe63e8dd$var$toCharCodes(delimiters[1]);
    }
    const root = $67e6adf7fe63e8dd$var$currentRoot = $67e6adf7fe63e8dd$var$createRoot([], input);
    $67e6adf7fe63e8dd$var$tokenizer.parse($67e6adf7fe63e8dd$var$currentInput);
    root.loc = $67e6adf7fe63e8dd$var$getLoc(0, input.length);
    root.children = $67e6adf7fe63e8dd$var$condenseWhitespace(root.children);
    $67e6adf7fe63e8dd$var$currentRoot = null;
    return root;
}
function $67e6adf7fe63e8dd$var$hoistStatic(root, context) {
    $67e6adf7fe63e8dd$var$walk(root, context, // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    $67e6adf7fe63e8dd$var$isSingleElementRoot(root, root.children[0]));
}
function $67e6adf7fe63e8dd$var$isSingleElementRoot(root, child) {
    const { children: children } = root;
    return children.length === 1 && child.type === 1 && !$67e6adf7fe63e8dd$var$isSlotOutlet(child);
}
function $67e6adf7fe63e8dd$var$walk(node, context, doNotHoistNode = false) {
    const { children: children } = node;
    const originalCount = children.length;
    let hoistedCount = 0;
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        if (child.type === 1 && child.tagType === 0) {
            const constantType = doNotHoistNode ? 0 : $67e6adf7fe63e8dd$var$getConstantType(child, context);
            if (constantType > 0) {
                if (constantType >= 2) {
                    child.codegenNode.patchFlag = -1 + ` /* HOISTED */`;
                    child.codegenNode = context.hoist(child.codegenNode);
                    hoistedCount++;
                    continue;
                }
            } else {
                const codegenNode = child.codegenNode;
                if (codegenNode.type === 13) {
                    const flag = $67e6adf7fe63e8dd$var$getPatchFlag(codegenNode);
                    if ((!flag || flag === 512 || flag === 1) && $67e6adf7fe63e8dd$var$getGeneratedPropsConstantType(child, context) >= 2) {
                        const props = $67e6adf7fe63e8dd$var$getNodeProps(child);
                        if (props) codegenNode.props = context.hoist(props);
                    }
                    if (codegenNode.dynamicProps) codegenNode.dynamicProps = context.hoist(codegenNode.dynamicProps);
                }
            }
        }
        if (child.type === 1) {
            const isComponent = child.tagType === 1;
            if (isComponent) context.scopes.vSlot++;
            $67e6adf7fe63e8dd$var$walk(child, context);
            if (isComponent) context.scopes.vSlot--;
        } else if (child.type === 11) $67e6adf7fe63e8dd$var$walk(child, context, child.children.length === 1);
        else if (child.type === 9) for(let i2 = 0; i2 < child.branches.length; i2++)$67e6adf7fe63e8dd$var$walk(child.branches[i2], context, child.branches[i2].children.length === 1);
    }
    if (hoistedCount && context.transformHoist) context.transformHoist(children, context, node);
    if (hoistedCount && hoistedCount === originalCount && node.type === 1 && node.tagType === 0 && node.codegenNode && node.codegenNode.type === 13 && $67e6adf7fe63e8dd$var$isArray(node.codegenNode.children)) {
        const hoisted = context.hoist($67e6adf7fe63e8dd$var$createArrayExpression(node.codegenNode.children));
        if (context.hmr) hoisted.content = `[...${hoisted.content}]`;
        node.codegenNode.children = hoisted;
    }
}
function $67e6adf7fe63e8dd$var$getConstantType(node, context) {
    const { constantCache: constantCache } = context;
    switch(node.type){
        case 1:
            if (node.tagType !== 0) return 0;
            const cached = constantCache.get(node);
            if (cached !== void 0) return cached;
            const codegenNode = node.codegenNode;
            if (codegenNode.type !== 13) return 0;
            if (codegenNode.isBlock && node.tag !== "svg" && node.tag !== "foreignObject") return 0;
            const flag = $67e6adf7fe63e8dd$var$getPatchFlag(codegenNode);
            if (!flag) {
                let returnType2 = 3;
                const generatedPropsType = $67e6adf7fe63e8dd$var$getGeneratedPropsConstantType(node, context);
                if (generatedPropsType === 0) {
                    constantCache.set(node, 0);
                    return 0;
                }
                if (generatedPropsType < returnType2) returnType2 = generatedPropsType;
                for(let i = 0; i < node.children.length; i++){
                    const childType = $67e6adf7fe63e8dd$var$getConstantType(node.children[i], context);
                    if (childType === 0) {
                        constantCache.set(node, 0);
                        return 0;
                    }
                    if (childType < returnType2) returnType2 = childType;
                }
                if (returnType2 > 1) for(let i = 0; i < node.props.length; i++){
                    const p = node.props[i];
                    if (p.type === 7 && p.name === "bind" && p.exp) {
                        const expType = $67e6adf7fe63e8dd$var$getConstantType(p.exp, context);
                        if (expType === 0) {
                            constantCache.set(node, 0);
                            return 0;
                        }
                        if (expType < returnType2) returnType2 = expType;
                    }
                }
                if (codegenNode.isBlock) {
                    for(let i = 0; i < node.props.length; i++){
                        const p = node.props[i];
                        if (p.type === 7) {
                            constantCache.set(node, 0);
                            return 0;
                        }
                    }
                    context.removeHelper($67e6adf7fe63e8dd$var$OPEN_BLOCK);
                    context.removeHelper($67e6adf7fe63e8dd$var$getVNodeBlockHelper(context.inSSR, codegenNode.isComponent));
                    codegenNode.isBlock = false;
                    context.helper($67e6adf7fe63e8dd$var$getVNodeHelper(context.inSSR, codegenNode.isComponent));
                }
                constantCache.set(node, returnType2);
                return returnType2;
            } else {
                constantCache.set(node, 0);
                return 0;
            }
        case 2:
        case 3:
            return 3;
        case 9:
        case 11:
        case 10:
            return 0;
        case 5:
        case 12:
            return $67e6adf7fe63e8dd$var$getConstantType(node.content, context);
        case 4:
            return node.constType;
        case 8:
            let returnType = 3;
            for(let i = 0; i < node.children.length; i++){
                const child = node.children[i];
                if ($67e6adf7fe63e8dd$var$isString(child) || $67e6adf7fe63e8dd$var$isSymbol(child)) continue;
                const childType = $67e6adf7fe63e8dd$var$getConstantType(child, context);
                if (childType === 0) return 0;
                else if (childType < returnType) returnType = childType;
            }
            return returnType;
        default:
            return 0;
    }
}
const $67e6adf7fe63e8dd$var$allowHoistedHelperSet = /* @__PURE__ */ new Set([
    $67e6adf7fe63e8dd$var$NORMALIZE_CLASS,
    $67e6adf7fe63e8dd$var$NORMALIZE_STYLE,
    $67e6adf7fe63e8dd$var$NORMALIZE_PROPS,
    $67e6adf7fe63e8dd$var$GUARD_REACTIVE_PROPS
]);
function $67e6adf7fe63e8dd$var$getConstantTypeOfHelperCall(value, context) {
    if (value.type === 14 && !$67e6adf7fe63e8dd$var$isString(value.callee) && $67e6adf7fe63e8dd$var$allowHoistedHelperSet.has(value.callee)) {
        const arg = value.arguments[0];
        if (arg.type === 4) return $67e6adf7fe63e8dd$var$getConstantType(arg, context);
        else if (arg.type === 14) return $67e6adf7fe63e8dd$var$getConstantTypeOfHelperCall(arg, context);
    }
    return 0;
}
function $67e6adf7fe63e8dd$var$getGeneratedPropsConstantType(node, context) {
    let returnType = 3;
    const props = $67e6adf7fe63e8dd$var$getNodeProps(node);
    if (props && props.type === 15) {
        const { properties: properties } = props;
        for(let i = 0; i < properties.length; i++){
            const { key: key, value: value } = properties[i];
            const keyType = $67e6adf7fe63e8dd$var$getConstantType(key, context);
            if (keyType === 0) return keyType;
            if (keyType < returnType) returnType = keyType;
            let valueType;
            if (value.type === 4) valueType = $67e6adf7fe63e8dd$var$getConstantType(value, context);
            else if (value.type === 14) valueType = $67e6adf7fe63e8dd$var$getConstantTypeOfHelperCall(value, context);
            else valueType = 0;
            if (valueType === 0) return valueType;
            if (valueType < returnType) returnType = valueType;
        }
    }
    return returnType;
}
function $67e6adf7fe63e8dd$var$getNodeProps(node) {
    const codegenNode = node.codegenNode;
    if (codegenNode.type === 13) return codegenNode.props;
}
function $67e6adf7fe63e8dd$var$getPatchFlag(node) {
    const flag = node.patchFlag;
    return flag ? parseInt(flag, 10) : void 0;
}
function $67e6adf7fe63e8dd$var$createTransformContext(root, { filename: filename = "", prefixIdentifiers: prefixIdentifiers = false, hoistStatic: hoistStatic2 = false, hmr: hmr = false, cacheHandlers: cacheHandlers = false, nodeTransforms: nodeTransforms = [], directiveTransforms: directiveTransforms = {}, transformHoist: transformHoist = null, isBuiltInComponent: isBuiltInComponent = $67e6adf7fe63e8dd$var$NOOP, isCustomElement: isCustomElement = $67e6adf7fe63e8dd$var$NOOP, expressionPlugins: expressionPlugins = [], scopeId: scopeId = null, slotted: slotted = true, ssr: ssr = false, inSSR: inSSR = false, ssrCssVars: ssrCssVars = ``, bindingMetadata: bindingMetadata = $67e6adf7fe63e8dd$var$EMPTY_OBJ, inline: inline = false, isTS: isTS = false, onError: onError = $67e6adf7fe63e8dd$var$defaultOnError, onWarn: onWarn = $67e6adf7fe63e8dd$var$defaultOnWarn, compatConfig: compatConfig }) {
    const nameMatch = filename.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/);
    const context = {
        filename: // options
        filename,
        selfName: nameMatch && $67e6adf7fe63e8dd$export$9a00dee1beb8f576($67e6adf7fe63e8dd$export$161d051f5dd25de7(nameMatch[1])),
        prefixIdentifiers: prefixIdentifiers,
        hoistStatic: hoistStatic2,
        hmr: hmr,
        cacheHandlers: cacheHandlers,
        nodeTransforms: nodeTransforms,
        directiveTransforms: directiveTransforms,
        transformHoist: transformHoist,
        isBuiltInComponent: isBuiltInComponent,
        isCustomElement: isCustomElement,
        expressionPlugins: expressionPlugins,
        scopeId: scopeId,
        slotted: slotted,
        ssr: ssr,
        inSSR: inSSR,
        ssrCssVars: ssrCssVars,
        bindingMetadata: bindingMetadata,
        inline: inline,
        isTS: isTS,
        onError: onError,
        onWarn: onWarn,
        compatConfig: compatConfig,
        root: // state
        root,
        helpers: /* @__PURE__ */ new Map(),
        components: /* @__PURE__ */ new Set(),
        directives: /* @__PURE__ */ new Set(),
        hoists: [],
        imports: [],
        constantCache: /* @__PURE__ */ new WeakMap(),
        temps: 0,
        cached: 0,
        identifiers: /* @__PURE__ */ Object.create(null),
        scopes: {
            vFor: 0,
            vSlot: 0,
            vPre: 0,
            vOnce: 0
        },
        parent: null,
        currentNode: root,
        childIndex: 0,
        inVOnce: false,
        // methods
        helper (name) {
            const count = context.helpers.get(name) || 0;
            context.helpers.set(name, count + 1);
            return name;
        },
        removeHelper (name) {
            const count = context.helpers.get(name);
            if (count) {
                const currentCount = count - 1;
                if (!currentCount) context.helpers.delete(name);
                else context.helpers.set(name, currentCount);
            }
        },
        helperString (name) {
            return `_${$67e6adf7fe63e8dd$var$helperNameMap[context.helper(name)]}`;
        },
        replaceNode (node) {
            if (!context.currentNode) throw new Error(`Node being replaced is already removed.`);
            if (!context.parent) throw new Error(`Cannot replace root node.`);
            context.parent.children[context.childIndex] = context.currentNode = node;
        },
        removeNode (node) {
            if (!context.parent) throw new Error(`Cannot remove root node.`);
            const list = context.parent.children;
            const removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
            if (removalIndex < 0) throw new Error(`node being removed is not a child of current parent`);
            if (!node || node === context.currentNode) {
                context.currentNode = null;
                context.onNodeRemoved();
            } else if (context.childIndex > removalIndex) {
                context.childIndex--;
                context.onNodeRemoved();
            }
            context.parent.children.splice(removalIndex, 1);
        },
        onNodeRemoved: ()=>{},
        addIdentifiers (exp) {},
        removeIdentifiers (exp) {},
        hoist (exp) {
            if ($67e6adf7fe63e8dd$var$isString(exp)) exp = $67e6adf7fe63e8dd$var$createSimpleExpression(exp);
            context.hoists.push(exp);
            const identifier = $67e6adf7fe63e8dd$var$createSimpleExpression(`_hoisted_${context.hoists.length}`, false, exp.loc, 2);
            identifier.hoisted = exp;
            return identifier;
        },
        cache (exp, isVNode = false) {
            return $67e6adf7fe63e8dd$var$createCacheExpression(context.cached++, exp, isVNode);
        }
    };
    return context;
}
function $67e6adf7fe63e8dd$var$transform(root, options) {
    const context = $67e6adf7fe63e8dd$var$createTransformContext(root, options);
    $67e6adf7fe63e8dd$var$traverseNode(root, context);
    if (options.hoistStatic) $67e6adf7fe63e8dd$var$hoistStatic(root, context);
    if (!options.ssr) $67e6adf7fe63e8dd$var$createRootCodegen(root, context);
    root.helpers = /* @__PURE__ */ new Set([
        ...context.helpers.keys()
    ]);
    root.components = [
        ...context.components
    ];
    root.directives = [
        ...context.directives
    ];
    root.imports = context.imports;
    root.hoists = context.hoists;
    root.temps = context.temps;
    root.cached = context.cached;
    root.transformed = true;
}
function $67e6adf7fe63e8dd$var$createRootCodegen(root, context) {
    const { helper: helper } = context;
    const { children: children } = root;
    if (children.length === 1) {
        const child = children[0];
        if ($67e6adf7fe63e8dd$var$isSingleElementRoot(root, child) && child.codegenNode) {
            const codegenNode = child.codegenNode;
            if (codegenNode.type === 13) $67e6adf7fe63e8dd$var$convertToBlock(codegenNode, context);
            root.codegenNode = codegenNode;
        } else root.codegenNode = child;
    } else if (children.length > 1) {
        let patchFlag = 64;
        let patchFlagText = $67e6adf7fe63e8dd$var$PatchFlagNames[64];
        if (children.filter((c)=>c.type !== 3).length === 1) {
            patchFlag |= 2048;
            patchFlagText += `, ${$67e6adf7fe63e8dd$var$PatchFlagNames[2048]}`;
        }
        root.codegenNode = $67e6adf7fe63e8dd$var$createVNodeCall(context, helper($67e6adf7fe63e8dd$var$FRAGMENT), void 0, root.children, patchFlag + ` /* ${patchFlagText} */`, void 0, void 0, true, void 0, false);
    }
}
function $67e6adf7fe63e8dd$var$traverseChildren(parent, context) {
    let i = 0;
    const nodeRemoved = ()=>{
        i--;
    };
    for(; i < parent.children.length; i++){
        const child = parent.children[i];
        if ($67e6adf7fe63e8dd$var$isString(child)) continue;
        context.parent = parent;
        context.childIndex = i;
        context.onNodeRemoved = nodeRemoved;
        $67e6adf7fe63e8dd$var$traverseNode(child, context);
    }
}
function $67e6adf7fe63e8dd$var$traverseNode(node, context) {
    context.currentNode = node;
    const { nodeTransforms: nodeTransforms } = context;
    const exitFns = [];
    for(let i2 = 0; i2 < nodeTransforms.length; i2++){
        const onExit = nodeTransforms[i2](node, context);
        if (onExit) {
            if ($67e6adf7fe63e8dd$var$isArray(onExit)) exitFns.push(...onExit);
            else exitFns.push(onExit);
        }
        if (!context.currentNode) return;
        else node = context.currentNode;
    }
    switch(node.type){
        case 3:
            if (!context.ssr) context.helper($67e6adf7fe63e8dd$var$CREATE_COMMENT);
            break;
        case 5:
            if (!context.ssr) context.helper($67e6adf7fe63e8dd$var$TO_DISPLAY_STRING);
            break;
        case 9:
            for(let i2 = 0; i2 < node.branches.length; i2++)$67e6adf7fe63e8dd$var$traverseNode(node.branches[i2], context);
            break;
        case 10:
        case 11:
        case 1:
        case 0:
            $67e6adf7fe63e8dd$var$traverseChildren(node, context);
            break;
    }
    context.currentNode = node;
    let i = exitFns.length;
    while(i--)exitFns[i]();
}
function $67e6adf7fe63e8dd$var$createStructuralDirectiveTransform(name, fn) {
    const matches = $67e6adf7fe63e8dd$var$isString(name) ? (n)=>n === name : (n)=>name.test(n);
    return (node, context)=>{
        if (node.type === 1) {
            const { props: props } = node;
            if (node.tagType === 3 && props.some($67e6adf7fe63e8dd$var$isVSlot)) return;
            const exitFns = [];
            for(let i = 0; i < props.length; i++){
                const prop = props[i];
                if (prop.type === 7 && matches(prop.name)) {
                    props.splice(i, 1);
                    i--;
                    const onExit = fn(node, prop, context);
                    if (onExit) exitFns.push(onExit);
                }
            }
            return exitFns;
        }
    };
}
const $67e6adf7fe63e8dd$var$PURE_ANNOTATION = `/*#__PURE__*/`;
const $67e6adf7fe63e8dd$var$aliasHelper = (s)=>`${$67e6adf7fe63e8dd$var$helperNameMap[s]}: _${$67e6adf7fe63e8dd$var$helperNameMap[s]}`;
function $67e6adf7fe63e8dd$var$createCodegenContext(ast, { mode: mode = "function", prefixIdentifiers: prefixIdentifiers = mode === "module", sourceMap: sourceMap = false, filename: filename = `template.vue.html`, scopeId: scopeId = null, optimizeImports: optimizeImports = false, runtimeGlobalName: runtimeGlobalName = `Vue`, runtimeModuleName: runtimeModuleName = `vue`, ssrRuntimeModuleName: ssrRuntimeModuleName = "vue/server-renderer", ssr: ssr = false, isTS: isTS = false, inSSR: inSSR = false }) {
    const context = {
        mode: mode,
        prefixIdentifiers: prefixIdentifiers,
        sourceMap: sourceMap,
        filename: filename,
        scopeId: scopeId,
        optimizeImports: optimizeImports,
        runtimeGlobalName: runtimeGlobalName,
        runtimeModuleName: runtimeModuleName,
        ssrRuntimeModuleName: ssrRuntimeModuleName,
        ssr: ssr,
        isTS: isTS,
        inSSR: inSSR,
        source: ast.source,
        code: ``,
        column: 1,
        line: 1,
        offset: 0,
        indentLevel: 0,
        pure: false,
        map: void 0,
        helper (key) {
            return `_${$67e6adf7fe63e8dd$var$helperNameMap[key]}`;
        },
        push (code, newlineIndex = -2 /* None */ , node) {
            context.code += code;
        },
        indent () {
            newline(++context.indentLevel);
        },
        deindent (withoutNewLine = false) {
            if (withoutNewLine) --context.indentLevel;
            else newline(--context.indentLevel);
        },
        newline () {
            newline(context.indentLevel);
        }
    };
    function newline(n) {
        context.push("\n" + `  `.repeat(n), 0 /* Start */ );
    }
    return context;
}
function $67e6adf7fe63e8dd$var$generate(ast, options = {}) {
    const context = $67e6adf7fe63e8dd$var$createCodegenContext(ast, options);
    if (options.onContextCreated) options.onContextCreated(context);
    const { mode: mode, push: push, prefixIdentifiers: prefixIdentifiers, indent: indent, deindent: deindent, newline: newline, scopeId: scopeId, ssr: ssr } = context;
    const helpers = Array.from(ast.helpers);
    const hasHelpers = helpers.length > 0;
    const useWithBlock = !prefixIdentifiers && mode !== "module";
    const isSetupInlined = false;
    const preambleContext = isSetupInlined ? $67e6adf7fe63e8dd$var$createCodegenContext(ast, options) : context;
    $67e6adf7fe63e8dd$var$genFunctionPreamble(ast, preambleContext);
    const functionName = ssr ? `ssrRender` : `render`;
    const args = ssr ? [
        "_ctx",
        "_push",
        "_parent",
        "_attrs"
    ] : [
        "_ctx",
        "_cache"
    ];
    const signature = args.join(", ");
    push(`function ${functionName}(${signature}) {`);
    indent();
    if (useWithBlock) {
        push(`with (_ctx) {`);
        indent();
        if (hasHelpers) {
            push(`const { ${helpers.map($67e6adf7fe63e8dd$var$aliasHelper).join(", ")} } = _Vue
`, -1 /* End */ );
            newline();
        }
    }
    if (ast.components.length) {
        $67e6adf7fe63e8dd$var$genAssets(ast.components, "component", context);
        if (ast.directives.length || ast.temps > 0) newline();
    }
    if (ast.directives.length) {
        $67e6adf7fe63e8dd$var$genAssets(ast.directives, "directive", context);
        if (ast.temps > 0) newline();
    }
    if (ast.temps > 0) {
        push(`let `);
        for(let i = 0; i < ast.temps; i++)push(`${i > 0 ? `, ` : ``}_temp${i}`);
    }
    if (ast.components.length || ast.directives.length || ast.temps) {
        push(`
`, 0 /* Start */ );
        newline();
    }
    if (!ssr) push(`return `);
    if (ast.codegenNode) $67e6adf7fe63e8dd$var$genNode(ast.codegenNode, context);
    else push(`null`);
    if (useWithBlock) {
        deindent();
        push(`}`);
    }
    deindent();
    push(`}`);
    return {
        ast: ast,
        code: context.code,
        preamble: isSetupInlined ? preambleContext.code : ``,
        map: context.map ? context.map.toJSON() : void 0
    };
}
function $67e6adf7fe63e8dd$var$genFunctionPreamble(ast, context) {
    const { ssr: ssr, prefixIdentifiers: prefixIdentifiers, push: push, newline: newline, runtimeModuleName: runtimeModuleName, runtimeGlobalName: runtimeGlobalName, ssrRuntimeModuleName: ssrRuntimeModuleName } = context;
    const VueBinding = runtimeGlobalName;
    const helpers = Array.from(ast.helpers);
    if (helpers.length > 0) {
        push(`const _Vue = ${VueBinding}
`, -1 /* End */ );
        if (ast.hoists.length) {
            const staticHelpers = [
                $67e6adf7fe63e8dd$var$CREATE_VNODE,
                $67e6adf7fe63e8dd$var$CREATE_ELEMENT_VNODE,
                $67e6adf7fe63e8dd$var$CREATE_COMMENT,
                $67e6adf7fe63e8dd$var$CREATE_TEXT,
                $67e6adf7fe63e8dd$var$CREATE_STATIC
            ].filter((helper)=>helpers.includes(helper)).map($67e6adf7fe63e8dd$var$aliasHelper).join(", ");
            push(`const { ${staticHelpers} } = _Vue
`, -1 /* End */ );
        }
    }
    $67e6adf7fe63e8dd$var$genHoists(ast.hoists, context);
    newline();
    push(`return `);
}
function $67e6adf7fe63e8dd$var$genAssets(assets, type, { helper: helper, push: push, newline: newline, isTS: isTS }) {
    const resolver = helper(type === "component" ? $67e6adf7fe63e8dd$var$RESOLVE_COMPONENT : $67e6adf7fe63e8dd$var$RESOLVE_DIRECTIVE);
    for(let i = 0; i < assets.length; i++){
        let id = assets[i];
        const maybeSelfReference = id.endsWith("__self");
        if (maybeSelfReference) id = id.slice(0, -6);
        push(`const ${$67e6adf7fe63e8dd$var$toValidAssetId(id, type)} = ${resolver}(${JSON.stringify(id)}${maybeSelfReference ? `, true` : ``})${isTS ? `!` : ``}`);
        if (i < assets.length - 1) newline();
    }
}
function $67e6adf7fe63e8dd$var$genHoists(hoists, context) {
    if (!hoists.length) return;
    context.pure = true;
    const { push: push, newline: newline, helper: helper, scopeId: scopeId, mode: mode } = context;
    newline();
    for(let i = 0; i < hoists.length; i++){
        const exp = hoists[i];
        if (exp) {
            push(`const _hoisted_${i + 1} = ${``}`);
            $67e6adf7fe63e8dd$var$genNode(exp, context);
            newline();
        }
    }
    context.pure = false;
}
function $67e6adf7fe63e8dd$var$isText(n) {
    return $67e6adf7fe63e8dd$var$isString(n) || n.type === 4 || n.type === 2 || n.type === 5 || n.type === 8;
}
function $67e6adf7fe63e8dd$var$genNodeListAsArray(nodes, context) {
    const multilines = nodes.length > 3 || nodes.some((n)=>$67e6adf7fe63e8dd$var$isArray(n) || !$67e6adf7fe63e8dd$var$isText(n));
    context.push(`[`);
    multilines && context.indent();
    $67e6adf7fe63e8dd$var$genNodeList(nodes, context, multilines);
    multilines && context.deindent();
    context.push(`]`);
}
function $67e6adf7fe63e8dd$var$genNodeList(nodes, context, multilines = false, comma = true) {
    const { push: push, newline: newline } = context;
    for(let i = 0; i < nodes.length; i++){
        const node = nodes[i];
        if ($67e6adf7fe63e8dd$var$isString(node)) push(node, -3 /* Unknown */ );
        else if ($67e6adf7fe63e8dd$var$isArray(node)) $67e6adf7fe63e8dd$var$genNodeListAsArray(node, context);
        else $67e6adf7fe63e8dd$var$genNode(node, context);
        if (i < nodes.length - 1) {
            if (multilines) {
                comma && push(",");
                newline();
            } else comma && push(", ");
        }
    }
}
function $67e6adf7fe63e8dd$var$genNode(node, context) {
    if ($67e6adf7fe63e8dd$var$isString(node)) {
        context.push(node, -3 /* Unknown */ );
        return;
    }
    if ($67e6adf7fe63e8dd$var$isSymbol(node)) {
        context.push(context.helper(node));
        return;
    }
    switch(node.type){
        case 1:
        case 9:
        case 11:
            $67e6adf7fe63e8dd$var$assert(node.codegenNode != null, `Codegen node is missing for element/if/for node. Apply appropriate transforms first.`);
            $67e6adf7fe63e8dd$var$genNode(node.codegenNode, context);
            break;
        case 2:
            $67e6adf7fe63e8dd$var$genText(node, context);
            break;
        case 4:
            $67e6adf7fe63e8dd$var$genExpression(node, context);
            break;
        case 5:
            $67e6adf7fe63e8dd$var$genInterpolation(node, context);
            break;
        case 12:
            $67e6adf7fe63e8dd$var$genNode(node.codegenNode, context);
            break;
        case 8:
            $67e6adf7fe63e8dd$var$genCompoundExpression(node, context);
            break;
        case 3:
            $67e6adf7fe63e8dd$var$genComment(node, context);
            break;
        case 13:
            $67e6adf7fe63e8dd$var$genVNodeCall(node, context);
            break;
        case 14:
            $67e6adf7fe63e8dd$var$genCallExpression(node, context);
            break;
        case 15:
            $67e6adf7fe63e8dd$var$genObjectExpression(node, context);
            break;
        case 17:
            $67e6adf7fe63e8dd$var$genArrayExpression(node, context);
            break;
        case 18:
            $67e6adf7fe63e8dd$var$genFunctionExpression(node, context);
            break;
        case 19:
            $67e6adf7fe63e8dd$var$genConditionalExpression(node, context);
            break;
        case 20:
            $67e6adf7fe63e8dd$var$genCacheExpression(node, context);
            break;
        case 21:
            $67e6adf7fe63e8dd$var$genNodeList(node.body, context, true, false);
            break;
        case 22:
            break;
        case 23:
            break;
        case 24:
            break;
        case 25:
            break;
        case 26:
            break;
        case 10:
            break;
        default:
            {
                $67e6adf7fe63e8dd$var$assert(false, `unhandled codegen node type: ${node.type}`);
                const exhaustiveCheck = node;
                return exhaustiveCheck;
            }
    }
}
function $67e6adf7fe63e8dd$var$genText(node, context) {
    context.push(JSON.stringify(node.content), -3 /* Unknown */ , node);
}
function $67e6adf7fe63e8dd$var$genExpression(node, context) {
    const { content: content, isStatic: isStatic } = node;
    context.push(isStatic ? JSON.stringify(content) : content, -3 /* Unknown */ , node);
}
function $67e6adf7fe63e8dd$var$genInterpolation(node, context) {
    const { push: push, helper: helper, pure: pure } = context;
    if (pure) push($67e6adf7fe63e8dd$var$PURE_ANNOTATION);
    push(`${helper($67e6adf7fe63e8dd$var$TO_DISPLAY_STRING)}(`);
    $67e6adf7fe63e8dd$var$genNode(node.content, context);
    push(`)`);
}
function $67e6adf7fe63e8dd$var$genCompoundExpression(node, context) {
    for(let i = 0; i < node.children.length; i++){
        const child = node.children[i];
        if ($67e6adf7fe63e8dd$var$isString(child)) context.push(child, -3 /* Unknown */ );
        else $67e6adf7fe63e8dd$var$genNode(child, context);
    }
}
function $67e6adf7fe63e8dd$var$genExpressionAsPropertyKey(node, context) {
    const { push: push } = context;
    if (node.type === 8) {
        push(`[`);
        $67e6adf7fe63e8dd$var$genCompoundExpression(node, context);
        push(`]`);
    } else if (node.isStatic) {
        const text = $67e6adf7fe63e8dd$var$isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
        push(text, -2 /* None */ , node);
    } else push(`[${node.content}]`, -3 /* Unknown */ , node);
}
function $67e6adf7fe63e8dd$var$genComment(node, context) {
    const { push: push, helper: helper, pure: pure } = context;
    if (pure) push($67e6adf7fe63e8dd$var$PURE_ANNOTATION);
    push(`${helper($67e6adf7fe63e8dd$var$CREATE_COMMENT)}(${JSON.stringify(node.content)})`, -3 /* Unknown */ , node);
}
function $67e6adf7fe63e8dd$var$genVNodeCall(node, context) {
    const { push: push, helper: helper, pure: pure } = context;
    const { tag: tag, props: props, children: children, patchFlag: patchFlag, dynamicProps: dynamicProps, directives: directives, isBlock: isBlock, disableTracking: disableTracking, isComponent: isComponent } = node;
    if (directives) push(helper($67e6adf7fe63e8dd$var$WITH_DIRECTIVES) + `(`);
    if (isBlock) push(`(${helper($67e6adf7fe63e8dd$var$OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
    if (pure) push($67e6adf7fe63e8dd$var$PURE_ANNOTATION);
    const callHelper = isBlock ? $67e6adf7fe63e8dd$var$getVNodeBlockHelper(context.inSSR, isComponent) : $67e6adf7fe63e8dd$var$getVNodeHelper(context.inSSR, isComponent);
    push(helper(callHelper) + `(`, -2 /* None */ , node);
    $67e6adf7fe63e8dd$var$genNodeList($67e6adf7fe63e8dd$var$genNullableArgs([
        tag,
        props,
        children,
        patchFlag,
        dynamicProps
    ]), context);
    push(`)`);
    if (isBlock) push(`)`);
    if (directives) {
        push(`, `);
        $67e6adf7fe63e8dd$var$genNode(directives, context);
        push(`)`);
    }
}
function $67e6adf7fe63e8dd$var$genNullableArgs(args) {
    let i = args.length;
    while(i--){
        if (args[i] != null) break;
    }
    return args.slice(0, i + 1).map((arg)=>arg || `null`);
}
function $67e6adf7fe63e8dd$var$genCallExpression(node, context) {
    const { push: push, helper: helper, pure: pure } = context;
    const callee = $67e6adf7fe63e8dd$var$isString(node.callee) ? node.callee : helper(node.callee);
    if (pure) push($67e6adf7fe63e8dd$var$PURE_ANNOTATION);
    push(callee + `(`, -2 /* None */ , node);
    $67e6adf7fe63e8dd$var$genNodeList(node.arguments, context);
    push(`)`);
}
function $67e6adf7fe63e8dd$var$genObjectExpression(node, context) {
    const { push: push, indent: indent, deindent: deindent, newline: newline } = context;
    const { properties: properties } = node;
    if (!properties.length) {
        push(`{}`, -2 /* None */ , node);
        return;
    }
    const multilines = properties.length > 1 || properties.some((p)=>p.value.type !== 4);
    push(multilines ? `{` : `{ `);
    multilines && indent();
    for(let i = 0; i < properties.length; i++){
        const { key: key, value: value } = properties[i];
        $67e6adf7fe63e8dd$var$genExpressionAsPropertyKey(key, context);
        push(`: `);
        $67e6adf7fe63e8dd$var$genNode(value, context);
        if (i < properties.length - 1) {
            push(`,`);
            newline();
        }
    }
    multilines && deindent();
    push(multilines ? `}` : ` }`);
}
function $67e6adf7fe63e8dd$var$genArrayExpression(node, context) {
    $67e6adf7fe63e8dd$var$genNodeListAsArray(node.elements, context);
}
function $67e6adf7fe63e8dd$var$genFunctionExpression(node, context) {
    const { push: push, indent: indent, deindent: deindent } = context;
    const { params: params, returns: returns, body: body, newline: newline, isSlot: isSlot } = node;
    if (isSlot) push(`_${$67e6adf7fe63e8dd$var$helperNameMap[$67e6adf7fe63e8dd$var$WITH_CTX]}(`);
    push(`(`, -2 /* None */ , node);
    if ($67e6adf7fe63e8dd$var$isArray(params)) $67e6adf7fe63e8dd$var$genNodeList(params, context);
    else if (params) $67e6adf7fe63e8dd$var$genNode(params, context);
    push(`) => `);
    if (newline || body) {
        push(`{`);
        indent();
    }
    if (returns) {
        if (newline) push(`return `);
        if ($67e6adf7fe63e8dd$var$isArray(returns)) $67e6adf7fe63e8dd$var$genNodeListAsArray(returns, context);
        else $67e6adf7fe63e8dd$var$genNode(returns, context);
    } else if (body) $67e6adf7fe63e8dd$var$genNode(body, context);
    if (newline || body) {
        deindent();
        push(`}`);
    }
    if (isSlot) push(`)`);
}
function $67e6adf7fe63e8dd$var$genConditionalExpression(node, context) {
    const { test: test, consequent: consequent, alternate: alternate, newline: needNewline } = node;
    const { push: push, indent: indent, deindent: deindent, newline: newline } = context;
    if (test.type === 4) {
        const needsParens = !$67e6adf7fe63e8dd$var$isSimpleIdentifier(test.content);
        needsParens && push(`(`);
        $67e6adf7fe63e8dd$var$genExpression(test, context);
        needsParens && push(`)`);
    } else {
        push(`(`);
        $67e6adf7fe63e8dd$var$genNode(test, context);
        push(`)`);
    }
    needNewline && indent();
    context.indentLevel++;
    needNewline || push(` `);
    push(`? `);
    $67e6adf7fe63e8dd$var$genNode(consequent, context);
    context.indentLevel--;
    needNewline && newline();
    needNewline || push(` `);
    push(`: `);
    const isNested = alternate.type === 19;
    if (!isNested) context.indentLevel++;
    $67e6adf7fe63e8dd$var$genNode(alternate, context);
    if (!isNested) context.indentLevel--;
    needNewline && deindent(true);
}
function $67e6adf7fe63e8dd$var$genCacheExpression(node, context) {
    const { push: push, helper: helper, indent: indent, deindent: deindent, newline: newline } = context;
    push(`_cache[${node.index}] || (`);
    if (node.isVNode) {
        indent();
        push(`${helper($67e6adf7fe63e8dd$var$SET_BLOCK_TRACKING)}(-1),`);
        newline();
    }
    push(`_cache[${node.index}] = `);
    $67e6adf7fe63e8dd$var$genNode(node.value, context);
    if (node.isVNode) {
        push(`,`);
        newline();
        push(`${helper($67e6adf7fe63e8dd$var$SET_BLOCK_TRACKING)}(1),`);
        newline();
        push(`_cache[${node.index}]`);
        deindent();
    }
    push(`)`);
}
const $67e6adf7fe63e8dd$var$prohibitedKeywordRE = new RegExp("\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b");
const $67e6adf7fe63e8dd$var$stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function $67e6adf7fe63e8dd$var$validateBrowserExpression(node, context, asParams = false, asRawStatements = false) {
    const exp = node.content;
    if (!exp.trim()) return;
    try {
        new Function(asRawStatements ? ` ${exp} ` : `return ${asParams ? `(${exp}) => {}` : `(${exp})`}`);
    } catch (e) {
        let message = e.message;
        const keywordMatch = exp.replace($67e6adf7fe63e8dd$var$stripStringRE, "").match($67e6adf7fe63e8dd$var$prohibitedKeywordRE);
        if (keywordMatch) message = `avoid using JavaScript keyword as property name: "${keywordMatch[0]}"`;
        context.onError($67e6adf7fe63e8dd$var$createCompilerError(45, node.loc, void 0, message));
    }
}
const $67e6adf7fe63e8dd$var$transformExpression = (node, context)=>{
    if (node.type === 5) node.content = $67e6adf7fe63e8dd$var$processExpression(node.content, context);
    else if (node.type === 1) for(let i = 0; i < node.props.length; i++){
        const dir = node.props[i];
        if (dir.type === 7 && dir.name !== "for") {
            const exp = dir.exp;
            const arg = dir.arg;
            if (exp && exp.type === 4 && !(dir.name === "on" && arg)) dir.exp = $67e6adf7fe63e8dd$var$processExpression(exp, context, // slot args must be processed as function params
            dir.name === "slot");
            if (arg && arg.type === 4 && !arg.isStatic) dir.arg = $67e6adf7fe63e8dd$var$processExpression(arg, context);
        }
    }
};
function $67e6adf7fe63e8dd$var$processExpression(node, context, asParams = false, asRawStatements = false, localVars = Object.create(context.identifiers)) {
    $67e6adf7fe63e8dd$var$validateBrowserExpression(node, context, asParams, asRawStatements);
    return node;
}
const $67e6adf7fe63e8dd$var$transformIf = $67e6adf7fe63e8dd$var$createStructuralDirectiveTransform(/^(if|else|else-if)$/, (node, dir, context)=>{
    return $67e6adf7fe63e8dd$var$processIf(node, dir, context, (ifNode, branch, isRoot)=>{
        const siblings = context.parent.children;
        let i = siblings.indexOf(ifNode);
        let key = 0;
        while(i-- >= 0){
            const sibling = siblings[i];
            if (sibling && sibling.type === 9) key += sibling.branches.length;
        }
        return ()=>{
            if (isRoot) ifNode.codegenNode = $67e6adf7fe63e8dd$var$createCodegenNodeForBranch(branch, key, context);
            else {
                const parentCondition = $67e6adf7fe63e8dd$var$getParentCondition(ifNode.codegenNode);
                parentCondition.alternate = $67e6adf7fe63e8dd$var$createCodegenNodeForBranch(branch, key + ifNode.branches.length - 1, context);
            }
        };
    });
});
function $67e6adf7fe63e8dd$var$processIf(node, dir, context, processCodegen) {
    if (dir.name !== "else" && (!dir.exp || !dir.exp.content.trim())) {
        const loc = dir.exp ? dir.exp.loc : node.loc;
        context.onError($67e6adf7fe63e8dd$var$createCompilerError(28, dir.loc));
        dir.exp = $67e6adf7fe63e8dd$var$createSimpleExpression(`true`, false, loc);
    }
    if (dir.exp) $67e6adf7fe63e8dd$var$validateBrowserExpression(dir.exp, context);
    if (dir.name === "if") {
        const branch = $67e6adf7fe63e8dd$var$createIfBranch(node, dir);
        const ifNode = {
            type: 9,
            loc: node.loc,
            branches: [
                branch
            ]
        };
        context.replaceNode(ifNode);
        if (processCodegen) return processCodegen(ifNode, branch, true);
    } else {
        const siblings = context.parent.children;
        const comments = [];
        let i = siblings.indexOf(node);
        while(i-- >= -1){
            const sibling = siblings[i];
            if (sibling && sibling.type === 3) {
                context.removeNode(sibling);
                comments.unshift(sibling);
                continue;
            }
            if (sibling && sibling.type === 2 && !sibling.content.trim().length) {
                context.removeNode(sibling);
                continue;
            }
            if (sibling && sibling.type === 9) {
                if (dir.name === "else-if" && sibling.branches[sibling.branches.length - 1].condition === void 0) context.onError($67e6adf7fe63e8dd$var$createCompilerError(30, node.loc));
                context.removeNode();
                const branch = $67e6adf7fe63e8dd$var$createIfBranch(node, dir);
                if (comments.length && // #3619 ignore comments if the v-if is direct child of <transition>
                !(context.parent && context.parent.type === 1 && (context.parent.tag === "transition" || context.parent.tag === "Transition"))) branch.children = [
                    ...comments,
                    ...branch.children
                ];
                {
                    const key = branch.userKey;
                    if (key) sibling.branches.forEach(({ userKey: userKey })=>{
                        if ($67e6adf7fe63e8dd$var$isSameKey(userKey, key)) context.onError($67e6adf7fe63e8dd$var$createCompilerError(29, branch.userKey.loc));
                    });
                }
                sibling.branches.push(branch);
                const onExit = processCodegen && processCodegen(sibling, branch, false);
                $67e6adf7fe63e8dd$var$traverseNode(branch, context);
                if (onExit) onExit();
                context.currentNode = null;
            } else context.onError($67e6adf7fe63e8dd$var$createCompilerError(30, node.loc));
            break;
        }
    }
}
function $67e6adf7fe63e8dd$var$createIfBranch(node, dir) {
    const isTemplateIf = node.tagType === 3;
    return {
        type: 10,
        loc: node.loc,
        condition: dir.name === "else" ? void 0 : dir.exp,
        children: isTemplateIf && !$67e6adf7fe63e8dd$var$findDir(node, "for") ? node.children : [
            node
        ],
        userKey: $67e6adf7fe63e8dd$var$findProp(node, `key`),
        isTemplateIf: isTemplateIf
    };
}
function $67e6adf7fe63e8dd$var$createCodegenNodeForBranch(branch, keyIndex, context) {
    if (branch.condition) return $67e6adf7fe63e8dd$var$createConditionalExpression(branch.condition, $67e6adf7fe63e8dd$var$createChildrenCodegenNode(branch, keyIndex, context), // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    $67e6adf7fe63e8dd$var$createCallExpression(context.helper($67e6adf7fe63e8dd$var$CREATE_COMMENT), [
        '"v-if"',
        "true"
    ]));
    else return $67e6adf7fe63e8dd$var$createChildrenCodegenNode(branch, keyIndex, context);
}
function $67e6adf7fe63e8dd$var$createChildrenCodegenNode(branch, keyIndex, context) {
    const { helper: helper } = context;
    const keyProperty = $67e6adf7fe63e8dd$var$createObjectProperty(`key`, $67e6adf7fe63e8dd$var$createSimpleExpression(`${keyIndex}`, false, $67e6adf7fe63e8dd$var$locStub, 2));
    const { children: children } = branch;
    const firstChild = children[0];
    const needFragmentWrapper = children.length !== 1 || firstChild.type !== 1;
    if (needFragmentWrapper) {
        if (children.length === 1 && firstChild.type === 11) {
            const vnodeCall = firstChild.codegenNode;
            $67e6adf7fe63e8dd$var$injectProp(vnodeCall, keyProperty, context);
            return vnodeCall;
        } else {
            let patchFlag = 64;
            let patchFlagText = $67e6adf7fe63e8dd$var$PatchFlagNames[64];
            if (!branch.isTemplateIf && children.filter((c)=>c.type !== 3).length === 1) {
                patchFlag |= 2048;
                patchFlagText += `, ${$67e6adf7fe63e8dd$var$PatchFlagNames[2048]}`;
            }
            return $67e6adf7fe63e8dd$var$createVNodeCall(context, helper($67e6adf7fe63e8dd$var$FRAGMENT), $67e6adf7fe63e8dd$var$createObjectExpression([
                keyProperty
            ]), children, patchFlag + ` /* ${patchFlagText} */`, void 0, void 0, true, false, false, branch.loc);
        }
    } else {
        const ret = firstChild.codegenNode;
        const vnodeCall = $67e6adf7fe63e8dd$var$getMemoedVNodeCall(ret);
        if (vnodeCall.type === 13) $67e6adf7fe63e8dd$var$convertToBlock(vnodeCall, context);
        $67e6adf7fe63e8dd$var$injectProp(vnodeCall, keyProperty, context);
        return ret;
    }
}
function $67e6adf7fe63e8dd$var$isSameKey(a, b) {
    if (!a || a.type !== b.type) return false;
    if (a.type === 6) {
        if (a.value.content !== b.value.content) return false;
    } else {
        const exp = a.exp;
        const branchExp = b.exp;
        if (exp.type !== branchExp.type) return false;
        if (exp.type !== 4 || exp.isStatic !== branchExp.isStatic || exp.content !== branchExp.content) return false;
    }
    return true;
}
function $67e6adf7fe63e8dd$var$getParentCondition(node) {
    while(true){
        if (node.type === 19) {
            if (node.alternate.type === 19) node = node.alternate;
            else return node;
        } else if (node.type === 20) node = node.value;
    }
}
const $67e6adf7fe63e8dd$var$transformFor = $67e6adf7fe63e8dd$var$createStructuralDirectiveTransform("for", (node, dir, context)=>{
    const { helper: helper, removeHelper: removeHelper } = context;
    return $67e6adf7fe63e8dd$var$processFor(node, dir, context, (forNode)=>{
        const renderExp = $67e6adf7fe63e8dd$var$createCallExpression(helper($67e6adf7fe63e8dd$var$RENDER_LIST), [
            forNode.source
        ]);
        const isTemplate = $67e6adf7fe63e8dd$var$isTemplateNode(node);
        const memo = $67e6adf7fe63e8dd$var$findDir(node, "memo");
        const keyProp = $67e6adf7fe63e8dd$var$findProp(node, `key`);
        const keyExp = keyProp && (keyProp.type === 6 ? $67e6adf7fe63e8dd$var$createSimpleExpression(keyProp.value.content, true) : keyProp.exp);
        const keyProperty = keyProp ? $67e6adf7fe63e8dd$var$createObjectProperty(`key`, keyExp) : null;
        const isStableFragment = forNode.source.type === 4 && forNode.source.constType > 0;
        const fragmentFlag = isStableFragment ? 64 : keyProp ? 128 : 256;
        forNode.codegenNode = $67e6adf7fe63e8dd$var$createVNodeCall(context, helper($67e6adf7fe63e8dd$var$FRAGMENT), void 0, renderExp, fragmentFlag + ` /* ${$67e6adf7fe63e8dd$var$PatchFlagNames[fragmentFlag]} */`, void 0, void 0, true, !isStableFragment, false, node.loc);
        return ()=>{
            let childBlock;
            const { children: children } = forNode;
            if (isTemplate) node.children.some((c)=>{
                if (c.type === 1) {
                    const key = $67e6adf7fe63e8dd$var$findProp(c, "key");
                    if (key) {
                        context.onError($67e6adf7fe63e8dd$var$createCompilerError(33, key.loc));
                        return true;
                    }
                }
            });
            const needFragmentWrapper = children.length !== 1 || children[0].type !== 1;
            const slotOutlet = $67e6adf7fe63e8dd$var$isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && $67e6adf7fe63e8dd$var$isSlotOutlet(node.children[0]) ? node.children[0] : null;
            if (slotOutlet) {
                childBlock = slotOutlet.codegenNode;
                if (isTemplate && keyProperty) $67e6adf7fe63e8dd$var$injectProp(childBlock, keyProperty, context);
            } else if (needFragmentWrapper) childBlock = $67e6adf7fe63e8dd$var$createVNodeCall(context, helper($67e6adf7fe63e8dd$var$FRAGMENT), keyProperty ? $67e6adf7fe63e8dd$var$createObjectExpression([
                keyProperty
            ]) : void 0, node.children, 64 + ` /* ${$67e6adf7fe63e8dd$var$PatchFlagNames[64]} */`, void 0, void 0, true, void 0, false);
            else {
                childBlock = children[0].codegenNode;
                if (isTemplate && keyProperty) $67e6adf7fe63e8dd$var$injectProp(childBlock, keyProperty, context);
                if (childBlock.isBlock !== !isStableFragment) {
                    if (childBlock.isBlock) {
                        removeHelper($67e6adf7fe63e8dd$var$OPEN_BLOCK);
                        removeHelper($67e6adf7fe63e8dd$var$getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
                    } else removeHelper($67e6adf7fe63e8dd$var$getVNodeHelper(context.inSSR, childBlock.isComponent));
                }
                childBlock.isBlock = !isStableFragment;
                if (childBlock.isBlock) {
                    helper($67e6adf7fe63e8dd$var$OPEN_BLOCK);
                    helper($67e6adf7fe63e8dd$var$getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
                } else helper($67e6adf7fe63e8dd$var$getVNodeHelper(context.inSSR, childBlock.isComponent));
            }
            if (memo) {
                const loop = $67e6adf7fe63e8dd$var$createFunctionExpression($67e6adf7fe63e8dd$var$createForLoopParams(forNode.parseResult, [
                    $67e6adf7fe63e8dd$var$createSimpleExpression(`_cached`)
                ]));
                loop.body = $67e6adf7fe63e8dd$var$createBlockStatement([
                    $67e6adf7fe63e8dd$var$createCompoundExpression([
                        `const _memo = (`,
                        memo.exp,
                        `)`
                    ]),
                    $67e6adf7fe63e8dd$var$createCompoundExpression([
                        `if (_cached`,
                        ...keyExp ? [
                            ` && _cached.key === `,
                            keyExp
                        ] : [],
                        ` && ${context.helperString($67e6adf7fe63e8dd$var$IS_MEMO_SAME)}(_cached, _memo)) return _cached`
                    ]),
                    $67e6adf7fe63e8dd$var$createCompoundExpression([
                        `const _item = `,
                        childBlock
                    ]),
                    $67e6adf7fe63e8dd$var$createSimpleExpression(`_item.memo = _memo`),
                    $67e6adf7fe63e8dd$var$createSimpleExpression(`return _item`)
                ]);
                renderExp.arguments.push(loop, $67e6adf7fe63e8dd$var$createSimpleExpression(`_cache`), $67e6adf7fe63e8dd$var$createSimpleExpression(String(context.cached++)));
            } else renderExp.arguments.push($67e6adf7fe63e8dd$var$createFunctionExpression($67e6adf7fe63e8dd$var$createForLoopParams(forNode.parseResult), childBlock, true));
        };
    });
});
function $67e6adf7fe63e8dd$var$processFor(node, dir, context, processCodegen) {
    if (!dir.exp) {
        context.onError($67e6adf7fe63e8dd$var$createCompilerError(31, dir.loc));
        return;
    }
    const parseResult = dir.forParseResult;
    if (!parseResult) {
        context.onError($67e6adf7fe63e8dd$var$createCompilerError(32, dir.loc));
        return;
    }
    $67e6adf7fe63e8dd$var$finalizeForParseResult(parseResult, context);
    const { addIdentifiers: addIdentifiers, removeIdentifiers: removeIdentifiers, scopes: scopes } = context;
    const { source: source, value: value, key: key, index: index } = parseResult;
    const forNode = {
        type: 11,
        loc: dir.loc,
        source: source,
        valueAlias: value,
        keyAlias: key,
        objectIndexAlias: index,
        parseResult: parseResult,
        children: $67e6adf7fe63e8dd$var$isTemplateNode(node) ? node.children : [
            node
        ]
    };
    context.replaceNode(forNode);
    scopes.vFor++;
    const onExit = processCodegen && processCodegen(forNode);
    return ()=>{
        scopes.vFor--;
        if (onExit) onExit();
    };
}
function $67e6adf7fe63e8dd$var$finalizeForParseResult(result, context) {
    if (result.finalized) return;
    $67e6adf7fe63e8dd$var$validateBrowserExpression(result.source, context);
    if (result.key) $67e6adf7fe63e8dd$var$validateBrowserExpression(result.key, context, true);
    if (result.index) $67e6adf7fe63e8dd$var$validateBrowserExpression(result.index, context, true);
    if (result.value) $67e6adf7fe63e8dd$var$validateBrowserExpression(result.value, context, true);
    result.finalized = true;
}
function $67e6adf7fe63e8dd$var$createForLoopParams({ value: value, key: key, index: index }, memoArgs = []) {
    return $67e6adf7fe63e8dd$var$createParamsList([
        value,
        key,
        index,
        ...memoArgs
    ]);
}
function $67e6adf7fe63e8dd$var$createParamsList(args) {
    let i = args.length;
    while(i--){
        if (args[i]) break;
    }
    return args.slice(0, i + 1).map((arg, i2)=>arg || $67e6adf7fe63e8dd$var$createSimpleExpression(`_`.repeat(i2 + 1), false));
}
const $67e6adf7fe63e8dd$var$defaultFallback = $67e6adf7fe63e8dd$var$createSimpleExpression(`undefined`, false);
const $67e6adf7fe63e8dd$var$trackSlotScopes = (node, context)=>{
    if (node.type === 1 && (node.tagType === 1 || node.tagType === 3)) {
        const vSlot = $67e6adf7fe63e8dd$var$findDir(node, "slot");
        if (vSlot) {
            vSlot.exp;
            context.scopes.vSlot++;
            return ()=>{
                context.scopes.vSlot--;
            };
        }
    }
};
const $67e6adf7fe63e8dd$var$buildClientSlotFn = (props, _vForExp, children, loc)=>$67e6adf7fe63e8dd$var$createFunctionExpression(props, children, false, true, children.length ? children[0].loc : loc);
function $67e6adf7fe63e8dd$var$buildSlots(node, context, buildSlotFn = $67e6adf7fe63e8dd$var$buildClientSlotFn) {
    context.helper($67e6adf7fe63e8dd$var$WITH_CTX);
    const { children: children, loc: loc } = node;
    const slotsProperties = [];
    const dynamicSlots = [];
    let hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0;
    const onComponentSlot = $67e6adf7fe63e8dd$var$findDir(node, "slot", true);
    if (onComponentSlot) {
        const { arg: arg, exp: exp } = onComponentSlot;
        if (arg && !$67e6adf7fe63e8dd$var$isStaticExp(arg)) hasDynamicSlots = true;
        slotsProperties.push($67e6adf7fe63e8dd$var$createObjectProperty(arg || $67e6adf7fe63e8dd$var$createSimpleExpression("default", true), buildSlotFn(exp, void 0, children, loc)));
    }
    let hasTemplateSlots = false;
    let hasNamedDefaultSlot = false;
    const implicitDefaultChildren = [];
    const seenSlotNames = /* @__PURE__ */ new Set();
    let conditionalBranchIndex = 0;
    for(let i = 0; i < children.length; i++){
        const slotElement = children[i];
        let slotDir;
        if (!$67e6adf7fe63e8dd$var$isTemplateNode(slotElement) || !(slotDir = $67e6adf7fe63e8dd$var$findDir(slotElement, "slot", true))) {
            if (slotElement.type !== 3) implicitDefaultChildren.push(slotElement);
            continue;
        }
        if (onComponentSlot) {
            context.onError($67e6adf7fe63e8dd$var$createCompilerError(37, slotDir.loc));
            break;
        }
        hasTemplateSlots = true;
        const { children: slotChildren, loc: slotLoc } = slotElement;
        const { arg: slotName = $67e6adf7fe63e8dd$var$createSimpleExpression(`default`, true), exp: slotProps, loc: dirLoc } = slotDir;
        let staticSlotName;
        if ($67e6adf7fe63e8dd$var$isStaticExp(slotName)) staticSlotName = slotName ? slotName.content : `default`;
        else hasDynamicSlots = true;
        const vFor = $67e6adf7fe63e8dd$var$findDir(slotElement, "for");
        const slotFunction = buildSlotFn(slotProps, vFor, slotChildren, slotLoc);
        let vIf;
        let vElse;
        if (vIf = $67e6adf7fe63e8dd$var$findDir(slotElement, "if")) {
            hasDynamicSlots = true;
            dynamicSlots.push($67e6adf7fe63e8dd$var$createConditionalExpression(vIf.exp, $67e6adf7fe63e8dd$var$buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++), $67e6adf7fe63e8dd$var$defaultFallback));
        } else if (vElse = $67e6adf7fe63e8dd$var$findDir(slotElement, /^else(-if)?$/, true)) {
            let j = i;
            let prev;
            while(j--){
                prev = children[j];
                if (prev.type !== 3) break;
            }
            if (prev && $67e6adf7fe63e8dd$var$isTemplateNode(prev) && $67e6adf7fe63e8dd$var$findDir(prev, "if")) {
                children.splice(i, 1);
                i--;
                let conditional = dynamicSlots[dynamicSlots.length - 1];
                while(conditional.alternate.type === 19)conditional = conditional.alternate;
                conditional.alternate = vElse.exp ? $67e6adf7fe63e8dd$var$createConditionalExpression(vElse.exp, $67e6adf7fe63e8dd$var$buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++), $67e6adf7fe63e8dd$var$defaultFallback) : $67e6adf7fe63e8dd$var$buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++);
            } else context.onError($67e6adf7fe63e8dd$var$createCompilerError(30, vElse.loc));
        } else if (vFor) {
            hasDynamicSlots = true;
            const parseResult = vFor.forParseResult;
            if (parseResult) {
                $67e6adf7fe63e8dd$var$finalizeForParseResult(parseResult, context);
                dynamicSlots.push($67e6adf7fe63e8dd$var$createCallExpression(context.helper($67e6adf7fe63e8dd$var$RENDER_LIST), [
                    parseResult.source,
                    $67e6adf7fe63e8dd$var$createFunctionExpression($67e6adf7fe63e8dd$var$createForLoopParams(parseResult), $67e6adf7fe63e8dd$var$buildDynamicSlot(slotName, slotFunction), true)
                ]));
            } else context.onError($67e6adf7fe63e8dd$var$createCompilerError(32, vFor.loc));
        } else {
            if (staticSlotName) {
                if (seenSlotNames.has(staticSlotName)) {
                    context.onError($67e6adf7fe63e8dd$var$createCompilerError(38, dirLoc));
                    continue;
                }
                seenSlotNames.add(staticSlotName);
                if (staticSlotName === "default") hasNamedDefaultSlot = true;
            }
            slotsProperties.push($67e6adf7fe63e8dd$var$createObjectProperty(slotName, slotFunction));
        }
    }
    if (!onComponentSlot) {
        const buildDefaultSlotProperty = (props, children2)=>{
            const fn = buildSlotFn(props, void 0, children2, loc);
            return $67e6adf7fe63e8dd$var$createObjectProperty(`default`, fn);
        };
        if (!hasTemplateSlots) slotsProperties.push(buildDefaultSlotProperty(void 0, children));
        else if (implicitDefaultChildren.length && // #3766
        // with whitespace: 'preserve', whitespaces between slots will end up in
        // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
        implicitDefaultChildren.some((node2)=>$67e6adf7fe63e8dd$var$isNonWhitespaceContent(node2))) {
            if (hasNamedDefaultSlot) context.onError($67e6adf7fe63e8dd$var$createCompilerError(39, implicitDefaultChildren[0].loc));
            else slotsProperties.push(buildDefaultSlotProperty(void 0, implicitDefaultChildren));
        }
    }
    const slotFlag = hasDynamicSlots ? 2 : $67e6adf7fe63e8dd$var$hasForwardedSlots(node.children) ? 3 : 1;
    let slots = $67e6adf7fe63e8dd$var$createObjectExpression(slotsProperties.concat($67e6adf7fe63e8dd$var$createObjectProperty(`_`, // 2 = compiled but dynamic = can skip normalization, but must run diff
    // 1 = compiled and static = can skip normalization AND diff as optimized
    $67e6adf7fe63e8dd$var$createSimpleExpression(slotFlag + ` /* ${$67e6adf7fe63e8dd$var$slotFlagsText[slotFlag]} */`, false))), loc);
    if (dynamicSlots.length) slots = $67e6adf7fe63e8dd$var$createCallExpression(context.helper($67e6adf7fe63e8dd$var$CREATE_SLOTS), [
        slots,
        $67e6adf7fe63e8dd$var$createArrayExpression(dynamicSlots)
    ]);
    return {
        slots: slots,
        hasDynamicSlots: hasDynamicSlots
    };
}
function $67e6adf7fe63e8dd$var$buildDynamicSlot(name, fn, index) {
    const props = [
        $67e6adf7fe63e8dd$var$createObjectProperty(`name`, name),
        $67e6adf7fe63e8dd$var$createObjectProperty(`fn`, fn)
    ];
    if (index != null) props.push($67e6adf7fe63e8dd$var$createObjectProperty(`key`, $67e6adf7fe63e8dd$var$createSimpleExpression(String(index), true)));
    return $67e6adf7fe63e8dd$var$createObjectExpression(props);
}
function $67e6adf7fe63e8dd$var$hasForwardedSlots(children) {
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        switch(child.type){
            case 1:
                if (child.tagType === 2 || $67e6adf7fe63e8dd$var$hasForwardedSlots(child.children)) return true;
                break;
            case 9:
                if ($67e6adf7fe63e8dd$var$hasForwardedSlots(child.branches)) return true;
                break;
            case 10:
            case 11:
                if ($67e6adf7fe63e8dd$var$hasForwardedSlots(child.children)) return true;
                break;
        }
    }
    return false;
}
function $67e6adf7fe63e8dd$var$isNonWhitespaceContent(node) {
    if (node.type !== 2 && node.type !== 12) return true;
    return node.type === 2 ? !!node.content.trim() : $67e6adf7fe63e8dd$var$isNonWhitespaceContent(node.content);
}
const $67e6adf7fe63e8dd$var$directiveImportMap = /* @__PURE__ */ new WeakMap();
const $67e6adf7fe63e8dd$var$transformElement = (node, context)=>{
    return function postTransformElement() {
        node = context.currentNode;
        if (!(node.type === 1 && (node.tagType === 0 || node.tagType === 1))) return;
        const { tag: tag, props: props } = node;
        const isComponent = node.tagType === 1;
        let vnodeTag = isComponent ? $67e6adf7fe63e8dd$var$resolveComponentType(node, context) : `"${tag}"`;
        const isDynamicComponent = $67e6adf7fe63e8dd$var$isObject(vnodeTag) && vnodeTag.callee === $67e6adf7fe63e8dd$var$RESOLVE_DYNAMIC_COMPONENT;
        let vnodeProps;
        let vnodeChildren;
        let vnodePatchFlag;
        let patchFlag = 0;
        let vnodeDynamicProps;
        let dynamicPropNames;
        let vnodeDirectives;
        let shouldUseBlock = // dynamic component may resolve to plain elements
        isDynamicComponent || vnodeTag === $67e6adf7fe63e8dd$var$TELEPORT || vnodeTag === $67e6adf7fe63e8dd$var$SUSPENSE || !isComponent && // <svg> and <foreignObject> must be forced into blocks so that block
        // updates inside get proper isSVG flag at runtime. (#639, #643)
        // This is technically web-specific, but splitting the logic out of core
        // leads to too much unnecessary complexity.
        (tag === "svg" || tag === "foreignObject");
        if (props.length > 0) {
            const propsBuildResult = $67e6adf7fe63e8dd$var$buildProps(node, context, void 0, isComponent, isDynamicComponent);
            vnodeProps = propsBuildResult.props;
            patchFlag = propsBuildResult.patchFlag;
            dynamicPropNames = propsBuildResult.dynamicPropNames;
            const directives = propsBuildResult.directives;
            vnodeDirectives = directives && directives.length ? $67e6adf7fe63e8dd$var$createArrayExpression(directives.map((dir)=>$67e6adf7fe63e8dd$var$buildDirectiveArgs(dir, context))) : void 0;
            if (propsBuildResult.shouldUseBlock) shouldUseBlock = true;
        }
        if (node.children.length > 0) {
            if (vnodeTag === $67e6adf7fe63e8dd$var$KEEP_ALIVE) {
                shouldUseBlock = true;
                patchFlag |= 1024;
                if (node.children.length > 1) context.onError($67e6adf7fe63e8dd$var$createCompilerError(46, {
                    start: node.children[0].loc.start,
                    end: node.children[node.children.length - 1].loc.end,
                    source: ""
                }));
            }
            const shouldBuildAsSlots = isComponent && // Teleport is not a real component and has dedicated runtime handling
            vnodeTag !== $67e6adf7fe63e8dd$var$TELEPORT && // explained above.
            vnodeTag !== $67e6adf7fe63e8dd$var$KEEP_ALIVE;
            if (shouldBuildAsSlots) {
                const { slots: slots, hasDynamicSlots: hasDynamicSlots } = $67e6adf7fe63e8dd$var$buildSlots(node, context);
                vnodeChildren = slots;
                if (hasDynamicSlots) patchFlag |= 1024;
            } else if (node.children.length === 1 && vnodeTag !== $67e6adf7fe63e8dd$var$TELEPORT) {
                const child = node.children[0];
                const type = child.type;
                const hasDynamicTextChild = type === 5 || type === 8;
                if (hasDynamicTextChild && $67e6adf7fe63e8dd$var$getConstantType(child, context) === 0) patchFlag |= 1;
                if (hasDynamicTextChild || type === 2) vnodeChildren = child;
                else vnodeChildren = node.children;
            } else vnodeChildren = node.children;
        }
        if (patchFlag !== 0) {
            if (patchFlag < 0) vnodePatchFlag = patchFlag + ` /* ${$67e6adf7fe63e8dd$var$PatchFlagNames[patchFlag]} */`;
            else {
                const flagNames = Object.keys($67e6adf7fe63e8dd$var$PatchFlagNames).map(Number).filter((n)=>n > 0 && patchFlag & n).map((n)=>$67e6adf7fe63e8dd$var$PatchFlagNames[n]).join(`, `);
                vnodePatchFlag = patchFlag + ` /* ${flagNames} */`;
            }
            if (dynamicPropNames && dynamicPropNames.length) vnodeDynamicProps = $67e6adf7fe63e8dd$var$stringifyDynamicPropNames(dynamicPropNames);
        }
        node.codegenNode = $67e6adf7fe63e8dd$var$createVNodeCall(context, vnodeTag, vnodeProps, vnodeChildren, vnodePatchFlag, vnodeDynamicProps, vnodeDirectives, !!shouldUseBlock, false, isComponent, node.loc);
    };
};
function $67e6adf7fe63e8dd$var$resolveComponentType(node, context, ssr = false) {
    let { tag: tag } = node;
    const isExplicitDynamic = $67e6adf7fe63e8dd$var$isComponentTag(tag);
    const isProp = $67e6adf7fe63e8dd$var$findProp(node, "is");
    if (isProp) {
        if (isExplicitDynamic || false) {
            const exp = isProp.type === 6 ? isProp.value && $67e6adf7fe63e8dd$var$createSimpleExpression(isProp.value.content, true) : isProp.exp;
            if (exp) return $67e6adf7fe63e8dd$var$createCallExpression(context.helper($67e6adf7fe63e8dd$var$RESOLVE_DYNAMIC_COMPONENT), [
                exp
            ]);
        } else if (isProp.type === 6 && isProp.value.content.startsWith("vue:")) tag = isProp.value.content.slice(4);
    }
    const builtIn = $67e6adf7fe63e8dd$var$isCoreComponent(tag) || context.isBuiltInComponent(tag);
    if (builtIn) {
        if (!ssr) context.helper(builtIn);
        return builtIn;
    }
    context.helper($67e6adf7fe63e8dd$var$RESOLVE_COMPONENT);
    context.components.add(tag);
    return $67e6adf7fe63e8dd$var$toValidAssetId(tag, `component`);
}
function $67e6adf7fe63e8dd$var$buildProps(node, context, props = node.props, isComponent, isDynamicComponent, ssr = false) {
    const { tag: tag, loc: elementLoc, children: children } = node;
    let properties = [];
    const mergeArgs = [];
    const runtimeDirectives = [];
    const hasChildren = children.length > 0;
    let shouldUseBlock = false;
    let patchFlag = 0;
    let hasRef = false;
    let hasClassBinding = false;
    let hasStyleBinding = false;
    let hasHydrationEventBinding = false;
    let hasDynamicKeys = false;
    let hasVnodeHook = false;
    const dynamicPropNames = [];
    const pushMergeArg = (arg)=>{
        if (properties.length) {
            mergeArgs.push($67e6adf7fe63e8dd$var$createObjectExpression($67e6adf7fe63e8dd$var$dedupeProperties(properties), elementLoc));
            properties = [];
        }
        if (arg) mergeArgs.push(arg);
    };
    const analyzePatchFlag = ({ key: key, value: value })=>{
        if ($67e6adf7fe63e8dd$var$isStaticExp(key)) {
            const name = key.content;
            const isEventHandler = $67e6adf7fe63e8dd$var$isOn(name);
            if (isEventHandler && (!isComponent || isDynamicComponent) && // omit the flag for click handlers because hydration gives click
            // dedicated fast path.
            name.toLowerCase() !== "onclick" && // omit v-model handlers
            name !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
            !$67e6adf7fe63e8dd$var$isReservedProp(name)) hasHydrationEventBinding = true;
            if (isEventHandler && $67e6adf7fe63e8dd$var$isReservedProp(name)) hasVnodeHook = true;
            if (isEventHandler && value.type === 14) value = value.arguments[0];
            if (value.type === 20 || (value.type === 4 || value.type === 8) && $67e6adf7fe63e8dd$var$getConstantType(value, context) > 0) return;
            if (name === "ref") hasRef = true;
            else if (name === "class") hasClassBinding = true;
            else if (name === "style") hasStyleBinding = true;
            else if (name !== "key" && !dynamicPropNames.includes(name)) dynamicPropNames.push(name);
            if (isComponent && (name === "class" || name === "style") && !dynamicPropNames.includes(name)) dynamicPropNames.push(name);
        } else hasDynamicKeys = true;
    };
    for(let i = 0; i < props.length; i++){
        const prop = props[i];
        if (prop.type === 6) {
            const { loc: loc, name: name, nameLoc: nameLoc, value: value } = prop;
            let isStatic = true;
            if (name === "ref") {
                hasRef = true;
                if (context.scopes.vFor > 0) properties.push($67e6adf7fe63e8dd$var$createObjectProperty($67e6adf7fe63e8dd$var$createSimpleExpression("ref_for", true), $67e6adf7fe63e8dd$var$createSimpleExpression("true")));
            }
            if (name === "is" && ($67e6adf7fe63e8dd$var$isComponentTag(tag) || value && value.content.startsWith("vue:") || false)) continue;
            properties.push($67e6adf7fe63e8dd$var$createObjectProperty($67e6adf7fe63e8dd$var$createSimpleExpression(name, true, nameLoc), $67e6adf7fe63e8dd$var$createSimpleExpression(value ? value.content : "", isStatic, value ? value.loc : loc)));
        } else {
            const { name: name, arg: arg, exp: exp, loc: loc, modifiers: modifiers } = prop;
            const isVBind = name === "bind";
            const isVOn = name === "on";
            if (name === "slot") {
                if (!isComponent) context.onError($67e6adf7fe63e8dd$var$createCompilerError(40, loc));
                continue;
            }
            if (name === "once" || name === "memo") continue;
            if (name === "is" || isVBind && $67e6adf7fe63e8dd$var$isStaticArgOf(arg, "is") && ($67e6adf7fe63e8dd$var$isComponentTag(tag) || false)) continue;
            if (isVOn && ssr) continue;
            if (// #938: elements with dynamic keys should be forced into blocks
            isVBind && $67e6adf7fe63e8dd$var$isStaticArgOf(arg, "key") || // inline before-update hooks need to force block so that it is invoked
            // before children
            isVOn && hasChildren && $67e6adf7fe63e8dd$var$isStaticArgOf(arg, "vue:before-update")) shouldUseBlock = true;
            if (isVBind && $67e6adf7fe63e8dd$var$isStaticArgOf(arg, "ref") && context.scopes.vFor > 0) properties.push($67e6adf7fe63e8dd$var$createObjectProperty($67e6adf7fe63e8dd$var$createSimpleExpression("ref_for", true), $67e6adf7fe63e8dd$var$createSimpleExpression("true")));
            if (!arg && (isVBind || isVOn)) {
                hasDynamicKeys = true;
                if (exp) {
                    if (isVBind) {
                        pushMergeArg();
                        mergeArgs.push(exp);
                    } else pushMergeArg({
                        type: 14,
                        loc: loc,
                        callee: context.helper($67e6adf7fe63e8dd$var$TO_HANDLERS),
                        arguments: isComponent ? [
                            exp
                        ] : [
                            exp,
                            `true`
                        ]
                    });
                } else context.onError($67e6adf7fe63e8dd$var$createCompilerError(isVBind ? 34 : 35, loc));
                continue;
            }
            if (isVBind && modifiers.includes("prop")) patchFlag |= 32;
            const directiveTransform = context.directiveTransforms[name];
            if (directiveTransform) {
                const { props: props2, needRuntime: needRuntime } = directiveTransform(prop, node, context);
                !ssr && props2.forEach(analyzePatchFlag);
                if (isVOn && arg && !$67e6adf7fe63e8dd$var$isStaticExp(arg)) pushMergeArg($67e6adf7fe63e8dd$var$createObjectExpression(props2, elementLoc));
                else properties.push(...props2);
                if (needRuntime) {
                    runtimeDirectives.push(prop);
                    if ($67e6adf7fe63e8dd$var$isSymbol(needRuntime)) $67e6adf7fe63e8dd$var$directiveImportMap.set(prop, needRuntime);
                }
            } else if (!$67e6adf7fe63e8dd$var$isBuiltInDirective(name)) {
                runtimeDirectives.push(prop);
                if (hasChildren) shouldUseBlock = true;
            }
        }
    }
    let propsExpression = void 0;
    if (mergeArgs.length) {
        pushMergeArg();
        if (mergeArgs.length > 1) propsExpression = $67e6adf7fe63e8dd$var$createCallExpression(context.helper($67e6adf7fe63e8dd$var$MERGE_PROPS), mergeArgs, elementLoc);
        else propsExpression = mergeArgs[0];
    } else if (properties.length) propsExpression = $67e6adf7fe63e8dd$var$createObjectExpression($67e6adf7fe63e8dd$var$dedupeProperties(properties), elementLoc);
    if (hasDynamicKeys) patchFlag |= 16;
    else {
        if (hasClassBinding && !isComponent) patchFlag |= 2;
        if (hasStyleBinding && !isComponent) patchFlag |= 4;
        if (dynamicPropNames.length) patchFlag |= 8;
        if (hasHydrationEventBinding) patchFlag |= 32;
    }
    if (!shouldUseBlock && (patchFlag === 0 || patchFlag === 32) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) patchFlag |= 512;
    if (!context.inSSR && propsExpression) switch(propsExpression.type){
        case 15:
            let classKeyIndex = -1;
            let styleKeyIndex = -1;
            let hasDynamicKey = false;
            for(let i = 0; i < propsExpression.properties.length; i++){
                const key = propsExpression.properties[i].key;
                if ($67e6adf7fe63e8dd$var$isStaticExp(key)) {
                    if (key.content === "class") classKeyIndex = i;
                    else if (key.content === "style") styleKeyIndex = i;
                } else if (!key.isHandlerKey) hasDynamicKey = true;
            }
            const classProp = propsExpression.properties[classKeyIndex];
            const styleProp = propsExpression.properties[styleKeyIndex];
            if (!hasDynamicKey) {
                if (classProp && !$67e6adf7fe63e8dd$var$isStaticExp(classProp.value)) classProp.value = $67e6adf7fe63e8dd$var$createCallExpression(context.helper($67e6adf7fe63e8dd$var$NORMALIZE_CLASS), [
                    classProp.value
                ]);
                if (styleProp && // the static style is compiled into an object,
                // so use `hasStyleBinding` to ensure that it is a dynamic style binding
                (hasStyleBinding || styleProp.value.type === 4 && styleProp.value.content.trim()[0] === `[` || // v-bind:style and style both exist,
                // v-bind:style with static literal object
                styleProp.value.type === 17)) styleProp.value = $67e6adf7fe63e8dd$var$createCallExpression(context.helper($67e6adf7fe63e8dd$var$NORMALIZE_STYLE), [
                    styleProp.value
                ]);
            } else propsExpression = $67e6adf7fe63e8dd$var$createCallExpression(context.helper($67e6adf7fe63e8dd$var$NORMALIZE_PROPS), [
                propsExpression
            ]);
            break;
        case 14:
            break;
        default:
            propsExpression = $67e6adf7fe63e8dd$var$createCallExpression(context.helper($67e6adf7fe63e8dd$var$NORMALIZE_PROPS), [
                $67e6adf7fe63e8dd$var$createCallExpression(context.helper($67e6adf7fe63e8dd$var$GUARD_REACTIVE_PROPS), [
                    propsExpression
                ])
            ]);
            break;
    }
    return {
        props: propsExpression,
        directives: runtimeDirectives,
        patchFlag: patchFlag,
        dynamicPropNames: dynamicPropNames,
        shouldUseBlock: shouldUseBlock
    };
}
function $67e6adf7fe63e8dd$var$dedupeProperties(properties) {
    const knownProps = /* @__PURE__ */ new Map();
    const deduped = [];
    for(let i = 0; i < properties.length; i++){
        const prop = properties[i];
        if (prop.key.type === 8 || !prop.key.isStatic) {
            deduped.push(prop);
            continue;
        }
        const name = prop.key.content;
        const existing = knownProps.get(name);
        if (existing) {
            if (name === "style" || name === "class" || $67e6adf7fe63e8dd$var$isOn(name)) $67e6adf7fe63e8dd$var$mergeAsArray(existing, prop);
        } else {
            knownProps.set(name, prop);
            deduped.push(prop);
        }
    }
    return deduped;
}
function $67e6adf7fe63e8dd$var$mergeAsArray(existing, incoming) {
    if (existing.value.type === 17) existing.value.elements.push(incoming.value);
    else existing.value = $67e6adf7fe63e8dd$var$createArrayExpression([
        existing.value,
        incoming.value
    ], existing.loc);
}
function $67e6adf7fe63e8dd$var$buildDirectiveArgs(dir, context) {
    const dirArgs = [];
    const runtime = $67e6adf7fe63e8dd$var$directiveImportMap.get(dir);
    if (runtime) dirArgs.push(context.helperString(runtime));
    else {
        context.helper($67e6adf7fe63e8dd$var$RESOLVE_DIRECTIVE);
        context.directives.add(dir.name);
        dirArgs.push($67e6adf7fe63e8dd$var$toValidAssetId(dir.name, `directive`));
    }
    const { loc: loc } = dir;
    if (dir.exp) dirArgs.push(dir.exp);
    if (dir.arg) {
        if (!dir.exp) dirArgs.push(`void 0`);
        dirArgs.push(dir.arg);
    }
    if (Object.keys(dir.modifiers).length) {
        if (!dir.arg) {
            if (!dir.exp) dirArgs.push(`void 0`);
            dirArgs.push(`void 0`);
        }
        const trueExpression = $67e6adf7fe63e8dd$var$createSimpleExpression(`true`, false, loc);
        dirArgs.push($67e6adf7fe63e8dd$var$createObjectExpression(dir.modifiers.map((modifier)=>$67e6adf7fe63e8dd$var$createObjectProperty(modifier, trueExpression)), loc));
    }
    return $67e6adf7fe63e8dd$var$createArrayExpression(dirArgs, dir.loc);
}
function $67e6adf7fe63e8dd$var$stringifyDynamicPropNames(props) {
    let propsNamesString = `[`;
    for(let i = 0, l = props.length; i < l; i++){
        propsNamesString += JSON.stringify(props[i]);
        if (i < l - 1) propsNamesString += ", ";
    }
    return propsNamesString + `]`;
}
function $67e6adf7fe63e8dd$var$isComponentTag(tag) {
    return tag === "component" || tag === "Component";
}
const $67e6adf7fe63e8dd$var$transformSlotOutlet = (node, context)=>{
    if ($67e6adf7fe63e8dd$var$isSlotOutlet(node)) {
        const { children: children, loc: loc } = node;
        const { slotName: slotName, slotProps: slotProps } = $67e6adf7fe63e8dd$var$processSlotOutlet(node, context);
        const slotArgs = [
            context.prefixIdentifiers ? `_ctx.$slots` : `$slots`,
            slotName,
            "{}",
            "undefined",
            "true"
        ];
        let expectedLen = 2;
        if (slotProps) {
            slotArgs[2] = slotProps;
            expectedLen = 3;
        }
        if (children.length) {
            slotArgs[3] = $67e6adf7fe63e8dd$var$createFunctionExpression([], children, false, false, loc);
            expectedLen = 4;
        }
        if (context.scopeId && !context.slotted) expectedLen = 5;
        slotArgs.splice(expectedLen);
        node.codegenNode = $67e6adf7fe63e8dd$var$createCallExpression(context.helper($67e6adf7fe63e8dd$var$RENDER_SLOT), slotArgs, loc);
    }
};
function $67e6adf7fe63e8dd$var$processSlotOutlet(node, context) {
    let slotName = `"default"`;
    let slotProps = void 0;
    const nonNameProps = [];
    for(let i = 0; i < node.props.length; i++){
        const p = node.props[i];
        if (p.type === 6) {
            if (p.value) {
                if (p.name === "name") slotName = JSON.stringify(p.value.content);
                else {
                    p.name = $67e6adf7fe63e8dd$export$161d051f5dd25de7(p.name);
                    nonNameProps.push(p);
                }
            }
        } else {
            if (p.name === "bind" && $67e6adf7fe63e8dd$var$isStaticArgOf(p.arg, "name")) {
                if (p.exp) slotName = p.exp;
            } else {
                if (p.name === "bind" && p.arg && $67e6adf7fe63e8dd$var$isStaticExp(p.arg)) p.arg.content = $67e6adf7fe63e8dd$export$161d051f5dd25de7(p.arg.content);
                nonNameProps.push(p);
            }
        }
    }
    if (nonNameProps.length > 0) {
        const { props: props, directives: directives } = $67e6adf7fe63e8dd$var$buildProps(node, context, nonNameProps, false, false);
        slotProps = props;
        if (directives.length) context.onError($67e6adf7fe63e8dd$var$createCompilerError(36, directives[0].loc));
    }
    return {
        slotName: slotName,
        slotProps: slotProps
    };
}
const $67e6adf7fe63e8dd$var$fnExpRE = /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;
const $67e6adf7fe63e8dd$var$transformOn$1 = (dir, node, context, augmentor)=>{
    const { loc: loc, modifiers: modifiers, arg: arg } = dir;
    if (!dir.exp && !modifiers.length) context.onError($67e6adf7fe63e8dd$var$createCompilerError(35, loc));
    let eventName;
    if (arg.type === 4) {
        if (arg.isStatic) {
            let rawName = arg.content;
            if (rawName.startsWith("vnode")) context.onError($67e6adf7fe63e8dd$var$createCompilerError(51, arg.loc));
            if (rawName.startsWith("vue:")) rawName = `vnode-${rawName.slice(4)}`;
            const eventString = node.tagType !== 0 || rawName.startsWith("vnode") || !/[A-Z]/.test(rawName) ? // for non-element and vnode lifecycle event listeners, auto convert
            // it to camelCase. See issue #2249
            $67e6adf7fe63e8dd$export$8c022799eeaaefcd($67e6adf7fe63e8dd$export$161d051f5dd25de7(rawName)) : // preserve case for plain element listeners that have uppercase
            // letters, as these may be custom elements' custom events
            `on:${rawName}`;
            eventName = $67e6adf7fe63e8dd$var$createSimpleExpression(eventString, true, arg.loc);
        } else eventName = $67e6adf7fe63e8dd$var$createCompoundExpression([
            `${context.helperString($67e6adf7fe63e8dd$var$TO_HANDLER_KEY)}(`,
            arg,
            `)`
        ]);
    } else {
        eventName = arg;
        eventName.children.unshift(`${context.helperString($67e6adf7fe63e8dd$var$TO_HANDLER_KEY)}(`);
        eventName.children.push(`)`);
    }
    let exp = dir.exp;
    if (exp && !exp.content.trim()) exp = void 0;
    let shouldCache = context.cacheHandlers && !exp && !context.inVOnce;
    if (exp) {
        const isMemberExp = $67e6adf7fe63e8dd$var$isMemberExpression(exp.content);
        const isInlineStatement = !(isMemberExp || $67e6adf7fe63e8dd$var$fnExpRE.test(exp.content));
        const hasMultipleStatements = exp.content.includes(`;`);
        $67e6adf7fe63e8dd$var$validateBrowserExpression(exp, context, false, hasMultipleStatements);
        if (isInlineStatement || shouldCache && isMemberExp) exp = $67e6adf7fe63e8dd$var$createCompoundExpression([
            `${isInlineStatement ? `$event` : `${``}(...args)`} => ${hasMultipleStatements ? `{` : `(`}`,
            exp,
            hasMultipleStatements ? `}` : `)`
        ]);
    }
    let ret = {
        props: [
            $67e6adf7fe63e8dd$var$createObjectProperty(eventName, exp || $67e6adf7fe63e8dd$var$createSimpleExpression(`() => {}`, false, loc))
        ]
    };
    if (augmentor) ret = augmentor(ret);
    if (shouldCache) ret.props[0].value = context.cache(ret.props[0].value);
    ret.props.forEach((p)=>p.key.isHandlerKey = true);
    return ret;
};
const $67e6adf7fe63e8dd$var$transformBind = (dir, _node, context)=>{
    const { modifiers: modifiers, loc: loc } = dir;
    const arg = dir.arg;
    let { exp: exp } = dir;
    if (!exp && arg.type === 4) {
        const propName = $67e6adf7fe63e8dd$export$161d051f5dd25de7(arg.content);
        exp = dir.exp = $67e6adf7fe63e8dd$var$createSimpleExpression(propName, false, arg.loc);
    }
    if (arg.type !== 4) {
        arg.children.unshift(`(`);
        arg.children.push(`) || ""`);
    } else if (!arg.isStatic) arg.content = `${arg.content} || ""`;
    if (modifiers.includes("camel")) {
        if (arg.type === 4) {
            if (arg.isStatic) arg.content = $67e6adf7fe63e8dd$export$161d051f5dd25de7(arg.content);
            else arg.content = `${context.helperString($67e6adf7fe63e8dd$var$CAMELIZE)}(${arg.content})`;
        } else {
            arg.children.unshift(`${context.helperString($67e6adf7fe63e8dd$var$CAMELIZE)}(`);
            arg.children.push(`)`);
        }
    }
    if (!context.inSSR) {
        if (modifiers.includes("prop")) $67e6adf7fe63e8dd$var$injectPrefix(arg, ".");
        if (modifiers.includes("attr")) $67e6adf7fe63e8dd$var$injectPrefix(arg, "^");
    }
    if (!exp || exp.type === 4 && !exp.content.trim()) {
        context.onError($67e6adf7fe63e8dd$var$createCompilerError(34, loc));
        return {
            props: [
                $67e6adf7fe63e8dd$var$createObjectProperty(arg, $67e6adf7fe63e8dd$var$createSimpleExpression("", true, loc))
            ]
        };
    }
    return {
        props: [
            $67e6adf7fe63e8dd$var$createObjectProperty(arg, exp)
        ]
    };
};
const $67e6adf7fe63e8dd$var$injectPrefix = (arg, prefix)=>{
    if (arg.type === 4) {
        if (arg.isStatic) arg.content = prefix + arg.content;
        else arg.content = `\`${prefix}\${${arg.content}}\``;
    } else {
        arg.children.unshift(`'${prefix}' + (`);
        arg.children.push(`)`);
    }
};
const $67e6adf7fe63e8dd$var$transformText = (node, context)=>{
    if (node.type === 0 || node.type === 1 || node.type === 11 || node.type === 10) return ()=>{
        const children = node.children;
        let currentContainer = void 0;
        let hasText = false;
        for(let i = 0; i < children.length; i++){
            const child = children[i];
            if ($67e6adf7fe63e8dd$var$isText$1(child)) {
                hasText = true;
                for(let j = i + 1; j < children.length; j++){
                    const next = children[j];
                    if ($67e6adf7fe63e8dd$var$isText$1(next)) {
                        if (!currentContainer) currentContainer = children[i] = $67e6adf7fe63e8dd$var$createCompoundExpression([
                            child
                        ], child.loc);
                        currentContainer.children.push(` + `, next);
                        children.splice(j, 1);
                        j--;
                    } else {
                        currentContainer = void 0;
                        break;
                    }
                }
            }
        }
        if (!hasText || // if this is a plain element with a single text child, leave it
        // as-is since the runtime has dedicated fast path for this by directly
        // setting textContent of the element.
        // for component root it's always normalized anyway.
        children.length === 1 && (node.type === 0 || node.type === 1 && node.tagType === 0 && // #3756
        // custom directives can potentially add DOM elements arbitrarily,
        // we need to avoid setting textContent of the element at runtime
        // to avoid accidentally overwriting the DOM elements added
        // by the user through custom directives.
        !node.props.find((p)=>p.type === 7 && !context.directiveTransforms[p.name]) && // in compat mode, <template> tags with no special directives
        // will be rendered as a fragment so its children must be
        // converted into vnodes.
        true)) return;
        for(let i = 0; i < children.length; i++){
            const child = children[i];
            if ($67e6adf7fe63e8dd$var$isText$1(child) || child.type === 8) {
                const callArgs = [];
                if (child.type !== 2 || child.content !== " ") callArgs.push(child);
                if (!context.ssr && $67e6adf7fe63e8dd$var$getConstantType(child, context) === 0) callArgs.push(1 + ` /* ${$67e6adf7fe63e8dd$var$PatchFlagNames[1]} */`);
                children[i] = {
                    type: 12,
                    content: child,
                    loc: child.loc,
                    codegenNode: $67e6adf7fe63e8dd$var$createCallExpression(context.helper($67e6adf7fe63e8dd$var$CREATE_TEXT), callArgs)
                };
            }
        }
    };
};
const $67e6adf7fe63e8dd$var$seen$1 = /* @__PURE__ */ new WeakSet();
const $67e6adf7fe63e8dd$var$transformOnce = (node, context)=>{
    if (node.type === 1 && $67e6adf7fe63e8dd$var$findDir(node, "once", true)) {
        if ($67e6adf7fe63e8dd$var$seen$1.has(node) || context.inVOnce || context.inSSR) return;
        $67e6adf7fe63e8dd$var$seen$1.add(node);
        context.inVOnce = true;
        context.helper($67e6adf7fe63e8dd$var$SET_BLOCK_TRACKING);
        return ()=>{
            context.inVOnce = false;
            const cur = context.currentNode;
            if (cur.codegenNode) cur.codegenNode = context.cache(cur.codegenNode, true);
        };
    }
};
const $67e6adf7fe63e8dd$var$transformModel$1 = (dir, node, context)=>{
    const { exp: exp, arg: arg } = dir;
    if (!exp) {
        context.onError($67e6adf7fe63e8dd$var$createCompilerError(41, dir.loc));
        return $67e6adf7fe63e8dd$var$createTransformProps();
    }
    const rawExp = exp.loc.source;
    const expString = exp.type === 4 ? exp.content : rawExp;
    const bindingType = context.bindingMetadata[rawExp];
    if (bindingType === "props" || bindingType === "props-aliased") {
        context.onError($67e6adf7fe63e8dd$var$createCompilerError(44, exp.loc));
        return $67e6adf7fe63e8dd$var$createTransformProps();
    }
    const maybeRef = false;
    if (!expString.trim() || !$67e6adf7fe63e8dd$var$isMemberExpression(expString) && !maybeRef) {
        context.onError($67e6adf7fe63e8dd$var$createCompilerError(42, exp.loc));
        return $67e6adf7fe63e8dd$var$createTransformProps();
    }
    const propName = arg ? arg : $67e6adf7fe63e8dd$var$createSimpleExpression("modelValue", true);
    const eventName = arg ? $67e6adf7fe63e8dd$var$isStaticExp(arg) ? `onUpdate:${$67e6adf7fe63e8dd$export$161d051f5dd25de7(arg.content)}` : $67e6adf7fe63e8dd$var$createCompoundExpression([
        '"onUpdate:" + ',
        arg
    ]) : `onUpdate:modelValue`;
    let assignmentExp;
    const eventArg = context.isTS ? `($event: any)` : `$event`;
    assignmentExp = $67e6adf7fe63e8dd$var$createCompoundExpression([
        `${eventArg} => ((`,
        exp,
        `) = $event)`
    ]);
    const props = [
        // modelValue: foo
        $67e6adf7fe63e8dd$var$createObjectProperty(propName, dir.exp),
        // "onUpdate:modelValue": $event => (foo = $event)
        $67e6adf7fe63e8dd$var$createObjectProperty(eventName, assignmentExp)
    ];
    if (dir.modifiers.length && node.tagType === 1) {
        const modifiers = dir.modifiers.map((m)=>($67e6adf7fe63e8dd$var$isSimpleIdentifier(m) ? m : JSON.stringify(m)) + `: true`).join(`, `);
        const modifiersKey = arg ? $67e6adf7fe63e8dd$var$isStaticExp(arg) ? `${arg.content}Modifiers` : $67e6adf7fe63e8dd$var$createCompoundExpression([
            arg,
            ' + "Modifiers"'
        ]) : `modelModifiers`;
        props.push($67e6adf7fe63e8dd$var$createObjectProperty(modifiersKey, $67e6adf7fe63e8dd$var$createSimpleExpression(`{ ${modifiers} }`, false, dir.loc, 2)));
    }
    return $67e6adf7fe63e8dd$var$createTransformProps(props);
};
function $67e6adf7fe63e8dd$var$createTransformProps(props = []) {
    return {
        props: props
    };
}
const $67e6adf7fe63e8dd$var$seen = /* @__PURE__ */ new WeakSet();
const $67e6adf7fe63e8dd$var$transformMemo = (node, context)=>{
    if (node.type === 1) {
        const dir = $67e6adf7fe63e8dd$var$findDir(node, "memo");
        if (!dir || $67e6adf7fe63e8dd$var$seen.has(node)) return;
        $67e6adf7fe63e8dd$var$seen.add(node);
        return ()=>{
            const codegenNode = node.codegenNode || context.currentNode.codegenNode;
            if (codegenNode && codegenNode.type === 13) {
                if (node.tagType !== 1) $67e6adf7fe63e8dd$var$convertToBlock(codegenNode, context);
                node.codegenNode = $67e6adf7fe63e8dd$var$createCallExpression(context.helper($67e6adf7fe63e8dd$var$WITH_MEMO), [
                    dir.exp,
                    $67e6adf7fe63e8dd$var$createFunctionExpression(void 0, codegenNode),
                    `_cache`,
                    String(context.cached++)
                ]);
            }
        };
    }
};
function $67e6adf7fe63e8dd$var$getBaseTransformPreset(prefixIdentifiers) {
    return [
        [
            $67e6adf7fe63e8dd$var$transformOnce,
            $67e6adf7fe63e8dd$var$transformIf,
            $67e6adf7fe63e8dd$var$transformMemo,
            $67e6adf7fe63e8dd$var$transformFor,
            $67e6adf7fe63e8dd$var$transformExpression,
            $67e6adf7fe63e8dd$var$transformSlotOutlet,
            $67e6adf7fe63e8dd$var$transformElement,
            $67e6adf7fe63e8dd$var$trackSlotScopes,
            $67e6adf7fe63e8dd$var$transformText
        ],
        {
            on: $67e6adf7fe63e8dd$var$transformOn$1,
            bind: $67e6adf7fe63e8dd$var$transformBind,
            model: $67e6adf7fe63e8dd$var$transformModel$1
        }
    ];
}
function $67e6adf7fe63e8dd$var$baseCompile(source, options = {}) {
    const onError = options.onError || $67e6adf7fe63e8dd$var$defaultOnError;
    const isModuleMode = options.mode === "module";
    if (options.prefixIdentifiers === true) onError($67e6adf7fe63e8dd$var$createCompilerError(47));
    else if (isModuleMode) onError($67e6adf7fe63e8dd$var$createCompilerError(48));
    const prefixIdentifiers = false;
    if (options.cacheHandlers) onError($67e6adf7fe63e8dd$var$createCompilerError(49));
    if (options.scopeId && !isModuleMode) onError($67e6adf7fe63e8dd$var$createCompilerError(50));
    const resolvedOptions = $67e6adf7fe63e8dd$var$extend({}, options, {
        prefixIdentifiers: prefixIdentifiers
    });
    const ast = $67e6adf7fe63e8dd$var$isString(source) ? $67e6adf7fe63e8dd$var$baseParse(source, resolvedOptions) : source;
    const [nodeTransforms, directiveTransforms] = $67e6adf7fe63e8dd$var$getBaseTransformPreset();
    $67e6adf7fe63e8dd$var$transform(ast, $67e6adf7fe63e8dd$var$extend({}, resolvedOptions, {
        nodeTransforms: [
            ...nodeTransforms,
            ...options.nodeTransforms || []
        ],
        directiveTransforms: $67e6adf7fe63e8dd$var$extend({}, directiveTransforms, options.directiveTransforms || {})
    }));
    return $67e6adf7fe63e8dd$var$generate(ast, resolvedOptions);
}
const $67e6adf7fe63e8dd$var$noopDirectiveTransform = ()=>({
        props: []
    });
const $67e6adf7fe63e8dd$var$V_MODEL_RADIO = Symbol(`vModelRadio`);
const $67e6adf7fe63e8dd$var$V_MODEL_CHECKBOX = Symbol(`vModelCheckbox`);
const $67e6adf7fe63e8dd$var$V_MODEL_TEXT = Symbol(`vModelText`);
const $67e6adf7fe63e8dd$var$V_MODEL_SELECT = Symbol(`vModelSelect`);
const $67e6adf7fe63e8dd$var$V_MODEL_DYNAMIC = Symbol(`vModelDynamic`);
const $67e6adf7fe63e8dd$var$V_ON_WITH_MODIFIERS = Symbol(`vOnModifiersGuard`);
const $67e6adf7fe63e8dd$var$V_ON_WITH_KEYS = Symbol(`vOnKeysGuard`);
const $67e6adf7fe63e8dd$var$V_SHOW = Symbol(`vShow`);
const $67e6adf7fe63e8dd$var$TRANSITION = Symbol(`Transition`);
const $67e6adf7fe63e8dd$var$TRANSITION_GROUP = Symbol(`TransitionGroup`);
$67e6adf7fe63e8dd$var$registerRuntimeHelpers({
    [$67e6adf7fe63e8dd$var$V_MODEL_RADIO]: `vModelRadio`,
    [$67e6adf7fe63e8dd$var$V_MODEL_CHECKBOX]: `vModelCheckbox`,
    [$67e6adf7fe63e8dd$var$V_MODEL_TEXT]: `vModelText`,
    [$67e6adf7fe63e8dd$var$V_MODEL_SELECT]: `vModelSelect`,
    [$67e6adf7fe63e8dd$var$V_MODEL_DYNAMIC]: `vModelDynamic`,
    [$67e6adf7fe63e8dd$var$V_ON_WITH_MODIFIERS]: `withModifiers`,
    [$67e6adf7fe63e8dd$var$V_ON_WITH_KEYS]: `withKeys`,
    [$67e6adf7fe63e8dd$var$V_SHOW]: `vShow`,
    [$67e6adf7fe63e8dd$var$TRANSITION]: `Transition`,
    [$67e6adf7fe63e8dd$var$TRANSITION_GROUP]: `TransitionGroup`
});
let $67e6adf7fe63e8dd$var$decoder;
function $67e6adf7fe63e8dd$var$decodeHtmlBrowser(raw, asAttr = false) {
    if (!$67e6adf7fe63e8dd$var$decoder) $67e6adf7fe63e8dd$var$decoder = document.createElement("div");
    if (asAttr) {
        $67e6adf7fe63e8dd$var$decoder.innerHTML = `<div foo="${raw.replace(/"/g, "&quot;")}">`;
        return $67e6adf7fe63e8dd$var$decoder.children[0].getAttribute("foo");
    } else {
        $67e6adf7fe63e8dd$var$decoder.innerHTML = raw;
        return $67e6adf7fe63e8dd$var$decoder.textContent;
    }
}
const $67e6adf7fe63e8dd$var$parserOptions = {
    parseMode: "html",
    isVoidTag: $67e6adf7fe63e8dd$var$isVoidTag,
    isNativeTag: (tag)=>$67e6adf7fe63e8dd$var$isHTMLTag(tag) || $67e6adf7fe63e8dd$var$isSVGTag(tag) || $67e6adf7fe63e8dd$var$isMathMLTag(tag),
    isPreTag: (tag)=>tag === "pre",
    decodeEntities: $67e6adf7fe63e8dd$var$decodeHtmlBrowser,
    isBuiltInComponent: (tag)=>{
        if (tag === "Transition" || tag === "transition") return $67e6adf7fe63e8dd$var$TRANSITION;
        else if (tag === "TransitionGroup" || tag === "transition-group") return $67e6adf7fe63e8dd$var$TRANSITION_GROUP;
    },
    // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
    getNamespace (tag, parent, rootNamespace) {
        let ns = parent ? parent.ns : rootNamespace;
        if (parent && ns === 2) {
            if (parent.tag === "annotation-xml") {
                if (tag === "svg") return 1;
                if (parent.props.some((a)=>a.type === 6 && a.name === "encoding" && a.value != null && (a.value.content === "text/html" || a.value.content === "application/xhtml+xml"))) ns = 0;
            } else if (/^m(?:[ions]|text)$/.test(parent.tag) && tag !== "mglyph" && tag !== "malignmark") ns = 0;
        } else if (parent && ns === 1) {
            if (parent.tag === "foreignObject" || parent.tag === "desc" || parent.tag === "title") ns = 0;
        }
        if (ns === 0) {
            if (tag === "svg") return 1;
            if (tag === "math") return 2;
        }
        return ns;
    }
};
const $67e6adf7fe63e8dd$var$transformStyle = (node)=>{
    if (node.type === 1) node.props.forEach((p, i)=>{
        if (p.type === 6 && p.name === "style" && p.value) node.props[i] = {
            type: 7,
            name: `bind`,
            arg: $67e6adf7fe63e8dd$var$createSimpleExpression(`style`, true, p.loc),
            exp: $67e6adf7fe63e8dd$var$parseInlineCSS(p.value.content, p.loc),
            modifiers: [],
            loc: p.loc
        };
    });
};
const $67e6adf7fe63e8dd$var$parseInlineCSS = (cssText, loc)=>{
    const normalized = $67e6adf7fe63e8dd$var$parseStringStyle(cssText);
    return $67e6adf7fe63e8dd$var$createSimpleExpression(JSON.stringify(normalized), false, loc, 3);
};
function $67e6adf7fe63e8dd$var$createDOMCompilerError(code, loc) {
    return $67e6adf7fe63e8dd$var$createCompilerError(code, loc, $67e6adf7fe63e8dd$var$DOMErrorMessages);
}
const $67e6adf7fe63e8dd$var$DOMErrorMessages = {
    [53]: `v-html is missing expression.`,
    [54]: `v-html will override element children.`,
    [55]: `v-text is missing expression.`,
    [56]: `v-text will override element children.`,
    [57]: `v-model can only be used on <input>, <textarea> and <select> elements.`,
    [58]: `v-model argument is not supported on plain elements.`,
    [59]: `v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.`,
    [60]: `Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.`,
    [61]: `v-show is missing expression.`,
    [62]: `<Transition> expects exactly one child element or component.`,
    [63]: `Tags with side effect (<script> and <style>) are ignored in client component templates.`
};
const $67e6adf7fe63e8dd$var$transformVHtml = (dir, node, context)=>{
    const { exp: exp, loc: loc } = dir;
    if (!exp) context.onError($67e6adf7fe63e8dd$var$createDOMCompilerError(53, loc));
    if (node.children.length) {
        context.onError($67e6adf7fe63e8dd$var$createDOMCompilerError(54, loc));
        node.children.length = 0;
    }
    return {
        props: [
            $67e6adf7fe63e8dd$var$createObjectProperty($67e6adf7fe63e8dd$var$createSimpleExpression(`innerHTML`, true, loc), exp || $67e6adf7fe63e8dd$var$createSimpleExpression("", true))
        ]
    };
};
const $67e6adf7fe63e8dd$var$transformVText = (dir, node, context)=>{
    const { exp: exp, loc: loc } = dir;
    if (!exp) context.onError($67e6adf7fe63e8dd$var$createDOMCompilerError(55, loc));
    if (node.children.length) {
        context.onError($67e6adf7fe63e8dd$var$createDOMCompilerError(56, loc));
        node.children.length = 0;
    }
    return {
        props: [
            $67e6adf7fe63e8dd$var$createObjectProperty($67e6adf7fe63e8dd$var$createSimpleExpression(`textContent`, true), exp ? $67e6adf7fe63e8dd$var$getConstantType(exp, context) > 0 ? exp : $67e6adf7fe63e8dd$var$createCallExpression(context.helperString($67e6adf7fe63e8dd$var$TO_DISPLAY_STRING), [
                exp
            ], loc) : $67e6adf7fe63e8dd$var$createSimpleExpression("", true))
        ]
    };
};
const $67e6adf7fe63e8dd$var$transformModel = (dir, node, context)=>{
    const baseResult = $67e6adf7fe63e8dd$var$transformModel$1(dir, node, context);
    if (!baseResult.props.length || node.tagType === 1) return baseResult;
    if (dir.arg) context.onError($67e6adf7fe63e8dd$var$createDOMCompilerError(58, dir.arg.loc));
    function checkDuplicatedValue() {
        const value = $67e6adf7fe63e8dd$var$findDir(node, "bind");
        if (value && $67e6adf7fe63e8dd$var$isStaticArgOf(value.arg, "value")) context.onError($67e6adf7fe63e8dd$var$createDOMCompilerError(60, value.loc));
    }
    const { tag: tag } = node;
    const isCustomElement = context.isCustomElement(tag);
    if (tag === "input" || tag === "textarea" || tag === "select" || isCustomElement) {
        let directiveToUse = $67e6adf7fe63e8dd$var$V_MODEL_TEXT;
        let isInvalidType = false;
        if (tag === "input" || isCustomElement) {
            const type = $67e6adf7fe63e8dd$var$findProp(node, `type`);
            if (type) {
                if (type.type === 7) directiveToUse = $67e6adf7fe63e8dd$var$V_MODEL_DYNAMIC;
                else if (type.value) switch(type.value.content){
                    case "radio":
                        directiveToUse = $67e6adf7fe63e8dd$var$V_MODEL_RADIO;
                        break;
                    case "checkbox":
                        directiveToUse = $67e6adf7fe63e8dd$var$V_MODEL_CHECKBOX;
                        break;
                    case "file":
                        isInvalidType = true;
                        context.onError($67e6adf7fe63e8dd$var$createDOMCompilerError(59, dir.loc));
                        break;
                    default:
                        checkDuplicatedValue();
                        break;
                }
            } else if ($67e6adf7fe63e8dd$var$hasDynamicKeyVBind(node)) directiveToUse = $67e6adf7fe63e8dd$var$V_MODEL_DYNAMIC;
            else checkDuplicatedValue();
        } else if (tag === "select") directiveToUse = $67e6adf7fe63e8dd$var$V_MODEL_SELECT;
        else checkDuplicatedValue();
        if (!isInvalidType) baseResult.needRuntime = context.helper(directiveToUse);
    } else context.onError($67e6adf7fe63e8dd$var$createDOMCompilerError(57, dir.loc));
    baseResult.props = baseResult.props.filter((p)=>!(p.key.type === 4 && p.key.content === "modelValue"));
    return baseResult;
};
const $67e6adf7fe63e8dd$var$isEventOptionModifier = /* @__PURE__ */ $67e6adf7fe63e8dd$var$makeMap(`passive,once,capture`);
const $67e6adf7fe63e8dd$var$isNonKeyModifier = /* @__PURE__ */ $67e6adf7fe63e8dd$var$makeMap(// event propagation management
`stop,prevent,self,ctrl,shift,alt,meta,exact,middle`);
const $67e6adf7fe63e8dd$var$maybeKeyModifier = /* @__PURE__ */ $67e6adf7fe63e8dd$var$makeMap("left,right");
const $67e6adf7fe63e8dd$var$isKeyboardEvent = /* @__PURE__ */ $67e6adf7fe63e8dd$var$makeMap(`onkeyup,onkeydown,onkeypress`, true);
const $67e6adf7fe63e8dd$var$resolveModifiers = (key, modifiers, context, loc)=>{
    const keyModifiers = [];
    const nonKeyModifiers = [];
    const eventOptionModifiers = [];
    for(let i = 0; i < modifiers.length; i++){
        const modifier = modifiers[i];
        if ($67e6adf7fe63e8dd$var$isEventOptionModifier(modifier)) eventOptionModifiers.push(modifier);
        else {
            if ($67e6adf7fe63e8dd$var$maybeKeyModifier(modifier)) {
                if ($67e6adf7fe63e8dd$var$isStaticExp(key)) {
                    if ($67e6adf7fe63e8dd$var$isKeyboardEvent(key.content)) keyModifiers.push(modifier);
                    else nonKeyModifiers.push(modifier);
                } else {
                    keyModifiers.push(modifier);
                    nonKeyModifiers.push(modifier);
                }
            } else if ($67e6adf7fe63e8dd$var$isNonKeyModifier(modifier)) nonKeyModifiers.push(modifier);
            else keyModifiers.push(modifier);
        }
    }
    return {
        keyModifiers: keyModifiers,
        nonKeyModifiers: nonKeyModifiers,
        eventOptionModifiers: eventOptionModifiers
    };
};
const $67e6adf7fe63e8dd$var$transformClick = (key, event)=>{
    const isStaticClick = $67e6adf7fe63e8dd$var$isStaticExp(key) && key.content.toLowerCase() === "onclick";
    return isStaticClick ? $67e6adf7fe63e8dd$var$createSimpleExpression(event, true) : key.type !== 4 ? $67e6adf7fe63e8dd$var$createCompoundExpression([
        `(`,
        key,
        `) === "onClick" ? "${event}" : (`,
        key,
        `)`
    ]) : key;
};
const $67e6adf7fe63e8dd$var$transformOn = (dir, node, context)=>{
    return $67e6adf7fe63e8dd$var$transformOn$1(dir, node, context, (baseResult)=>{
        const { modifiers: modifiers } = dir;
        if (!modifiers.length) return baseResult;
        let { key: key, value: handlerExp } = baseResult.props[0];
        const { keyModifiers: keyModifiers, nonKeyModifiers: nonKeyModifiers, eventOptionModifiers: eventOptionModifiers } = $67e6adf7fe63e8dd$var$resolveModifiers(key, modifiers, context, dir.loc);
        if (nonKeyModifiers.includes("right")) key = $67e6adf7fe63e8dd$var$transformClick(key, `onContextmenu`);
        if (nonKeyModifiers.includes("middle")) key = $67e6adf7fe63e8dd$var$transformClick(key, `onMouseup`);
        if (nonKeyModifiers.length) handlerExp = $67e6adf7fe63e8dd$var$createCallExpression(context.helper($67e6adf7fe63e8dd$var$V_ON_WITH_MODIFIERS), [
            handlerExp,
            JSON.stringify(nonKeyModifiers)
        ]);
        if (keyModifiers.length && // if event name is dynamic, always wrap with keys guard
        (!$67e6adf7fe63e8dd$var$isStaticExp(key) || $67e6adf7fe63e8dd$var$isKeyboardEvent(key.content))) handlerExp = $67e6adf7fe63e8dd$var$createCallExpression(context.helper($67e6adf7fe63e8dd$var$V_ON_WITH_KEYS), [
            handlerExp,
            JSON.stringify(keyModifiers)
        ]);
        if (eventOptionModifiers.length) {
            const modifierPostfix = eventOptionModifiers.map($67e6adf7fe63e8dd$export$9a00dee1beb8f576).join("");
            key = $67e6adf7fe63e8dd$var$isStaticExp(key) ? $67e6adf7fe63e8dd$var$createSimpleExpression(`${key.content}${modifierPostfix}`, true) : $67e6adf7fe63e8dd$var$createCompoundExpression([
                `(`,
                key,
                `) + "${modifierPostfix}"`
            ]);
        }
        return {
            props: [
                $67e6adf7fe63e8dd$var$createObjectProperty(key, handlerExp)
            ]
        };
    });
};
const $67e6adf7fe63e8dd$var$transformShow = (dir, node, context)=>{
    const { exp: exp, loc: loc } = dir;
    if (!exp) context.onError($67e6adf7fe63e8dd$var$createDOMCompilerError(61, loc));
    return {
        props: [],
        needRuntime: context.helper($67e6adf7fe63e8dd$var$V_SHOW)
    };
};
const $67e6adf7fe63e8dd$var$transformTransition = (node, context)=>{
    if (node.type === 1 && node.tagType === 1) {
        const component = context.isBuiltInComponent(node.tag);
        if (component === $67e6adf7fe63e8dd$var$TRANSITION) return ()=>{
            if (!node.children.length) return;
            if ($67e6adf7fe63e8dd$var$hasMultipleChildren(node)) context.onError($67e6adf7fe63e8dd$var$createDOMCompilerError(62, {
                start: node.children[0].loc.start,
                end: node.children[node.children.length - 1].loc.end,
                source: ""
            }));
            const child = node.children[0];
            if (child.type === 1) {
                for (const p of child.props)if (p.type === 7 && p.name === "show") node.props.push({
                    type: 6,
                    name: "persisted",
                    nameLoc: node.loc,
                    value: void 0,
                    loc: node.loc
                });
            }
        };
    }
};
function $67e6adf7fe63e8dd$var$hasMultipleChildren(node) {
    const children = node.children = node.children.filter((c)=>c.type !== 3 && !(c.type === 2 && !c.content.trim()));
    const child = children[0];
    return children.length !== 1 || child.type === 11 || child.type === 9 && child.branches.some($67e6adf7fe63e8dd$var$hasMultipleChildren);
}
const $67e6adf7fe63e8dd$var$ignoreSideEffectTags = (node, context)=>{
    if (node.type === 1 && node.tagType === 0 && (node.tag === "script" || node.tag === "style")) {
        context.onError($67e6adf7fe63e8dd$var$createDOMCompilerError(63, node.loc));
        context.removeNode();
    }
};
const $67e6adf7fe63e8dd$var$DOMNodeTransforms = [
    $67e6adf7fe63e8dd$var$transformStyle,
    $67e6adf7fe63e8dd$var$transformTransition
];
const $67e6adf7fe63e8dd$var$DOMDirectiveTransforms = {
    cloak: $67e6adf7fe63e8dd$var$noopDirectiveTransform,
    html: $67e6adf7fe63e8dd$var$transformVHtml,
    text: $67e6adf7fe63e8dd$var$transformVText,
    model: $67e6adf7fe63e8dd$var$transformModel,
    // override compiler-core
    on: $67e6adf7fe63e8dd$var$transformOn,
    // override compiler-core
    show: $67e6adf7fe63e8dd$var$transformShow
};
function $67e6adf7fe63e8dd$var$compile(src, options = {}) {
    return $67e6adf7fe63e8dd$var$baseCompile(src, $67e6adf7fe63e8dd$var$extend({}, $67e6adf7fe63e8dd$var$parserOptions, options, {
        nodeTransforms: [
            // ignore <script> and <tag>
            // this is not put inside DOMNodeTransforms because that list is used
            // by compiler-ssr to generate vnode fallback branches
            $67e6adf7fe63e8dd$var$ignoreSideEffectTags,
            ...$67e6adf7fe63e8dd$var$DOMNodeTransforms,
            ...options.nodeTransforms || []
        ],
        directiveTransforms: $67e6adf7fe63e8dd$var$extend({}, $67e6adf7fe63e8dd$var$DOMDirectiveTransforms, options.directiveTransforms || {}),
        transformHoist: null
    }));
}
$67e6adf7fe63e8dd$var$initDev();
const $67e6adf7fe63e8dd$var$compileCache = /* @__PURE__ */ new WeakMap();
function $67e6adf7fe63e8dd$var$getCache(options) {
    let c = $67e6adf7fe63e8dd$var$compileCache.get(options != null ? options : $67e6adf7fe63e8dd$var$EMPTY_OBJ);
    if (!c) {
        c = /* @__PURE__ */ Object.create(null);
        $67e6adf7fe63e8dd$var$compileCache.set(options != null ? options : $67e6adf7fe63e8dd$var$EMPTY_OBJ, c);
    }
    return c;
}
function $67e6adf7fe63e8dd$export$ef7acd7185315e22(template, options) {
    if (!$67e6adf7fe63e8dd$var$isString(template)) {
        if (template.nodeType) template = template.innerHTML;
        else {
            $67e6adf7fe63e8dd$export$c106dd0671a0fc2d(`invalid template option: `, template);
            return $67e6adf7fe63e8dd$var$NOOP;
        }
    }
    const key = template;
    const cache = $67e6adf7fe63e8dd$var$getCache(options);
    const cached = cache[key];
    if (cached) return cached;
    if (template[0] === "#") {
        const el = document.querySelector(template);
        if (!el) $67e6adf7fe63e8dd$export$c106dd0671a0fc2d(`Template element not found or is empty: ${template}`);
        template = el ? el.innerHTML : ``;
    }
    const opts = $67e6adf7fe63e8dd$var$extend({
        hoistStatic: true,
        onError: onError,
        onWarn: (e)=>onError(e, true)
    }, options);
    if (!opts.isCustomElement && typeof customElements !== "undefined") opts.isCustomElement = (tag)=>!!customElements.get(tag);
    const { code: code } = $67e6adf7fe63e8dd$var$compile(template, opts);
    function onError(err, asWarning = false) {
        const message = asWarning ? err.message : `Template compilation error: ${err.message}`;
        const codeFrame = err.loc && $67e6adf7fe63e8dd$var$generateCodeFrame(template, err.loc.start.offset, err.loc.end.offset);
        $67e6adf7fe63e8dd$export$c106dd0671a0fc2d(codeFrame ? `${message}
${codeFrame}` : message);
    }
    const render = new Function("Vue", code)($67e6adf7fe63e8dd$var$runtimeDom);
    render._rc = true;
    return cache[key] = render;
}
$67e6adf7fe63e8dd$export$667bb5a67822b941($67e6adf7fe63e8dd$export$ef7acd7185315e22);

});

parcelRegister("gE5OH", function(module, exports) {

$parcel$export(module.exports, "Splide", () => $c1e4e4dda02dcd92$export$24494c7438c070bf);
$parcel$export(module.exports, "SplideSlide", () => $c1e4e4dda02dcd92$export$bb7d0bac054249f6);

var $8V3Us = parcelRequire("8V3Us");
function $c1e4e4dda02dcd92$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $c1e4e4dda02dcd92$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $c1e4e4dda02dcd92$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $c1e4e4dda02dcd92$var$_defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */ var $c1e4e4dda02dcd92$var$MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
var $c1e4e4dda02dcd92$var$CREATED = 1;
var $c1e4e4dda02dcd92$var$MOUNTED = 2;
var $c1e4e4dda02dcd92$var$IDLE = 3;
var $c1e4e4dda02dcd92$var$MOVING = 4;
var $c1e4e4dda02dcd92$var$SCROLLING = 5;
var $c1e4e4dda02dcd92$var$DRAGGING = 6;
var $c1e4e4dda02dcd92$var$DESTROYED = 7;
var $c1e4e4dda02dcd92$var$STATES = {
    CREATED: $c1e4e4dda02dcd92$var$CREATED,
    MOUNTED: $c1e4e4dda02dcd92$var$MOUNTED,
    IDLE: $c1e4e4dda02dcd92$var$IDLE,
    MOVING: $c1e4e4dda02dcd92$var$MOVING,
    SCROLLING: $c1e4e4dda02dcd92$var$SCROLLING,
    DRAGGING: $c1e4e4dda02dcd92$var$DRAGGING,
    DESTROYED: $c1e4e4dda02dcd92$var$DESTROYED
};
function $c1e4e4dda02dcd92$var$empty(array) {
    array.length = 0;
}
function $c1e4e4dda02dcd92$var$slice(arrayLike, start, end) {
    return Array.prototype.slice.call(arrayLike, start, end);
}
function $c1e4e4dda02dcd92$var$apply(func) {
    return func.bind.apply(func, [
        null
    ].concat($c1e4e4dda02dcd92$var$slice(arguments, 1)));
}
var $c1e4e4dda02dcd92$var$nextTick = setTimeout;
var $c1e4e4dda02dcd92$var$noop = function noop2() {};
function $c1e4e4dda02dcd92$var$raf(func) {
    return requestAnimationFrame(func);
}
function $c1e4e4dda02dcd92$var$typeOf(type, subject) {
    return typeof subject === type;
}
function $c1e4e4dda02dcd92$var$isObject$1(subject) {
    return !$c1e4e4dda02dcd92$var$isNull(subject) && $c1e4e4dda02dcd92$var$typeOf("object", subject);
}
var $c1e4e4dda02dcd92$var$isArray = Array.isArray;
var $c1e4e4dda02dcd92$var$isFunction = $c1e4e4dda02dcd92$var$apply($c1e4e4dda02dcd92$var$typeOf, "function");
var $c1e4e4dda02dcd92$var$isString = $c1e4e4dda02dcd92$var$apply($c1e4e4dda02dcd92$var$typeOf, "string");
var $c1e4e4dda02dcd92$var$isUndefined = $c1e4e4dda02dcd92$var$apply($c1e4e4dda02dcd92$var$typeOf, "undefined");
function $c1e4e4dda02dcd92$var$isNull(subject) {
    return subject === null;
}
function $c1e4e4dda02dcd92$var$isHTMLElement(subject) {
    try {
        return subject instanceof (subject.ownerDocument.defaultView || window).HTMLElement;
    } catch (e) {
        return false;
    }
}
function $c1e4e4dda02dcd92$var$toArray(value) {
    return $c1e4e4dda02dcd92$var$isArray(value) ? value : [
        value
    ];
}
function $c1e4e4dda02dcd92$var$forEach(values, iteratee) {
    $c1e4e4dda02dcd92$var$toArray(values).forEach(iteratee);
}
function $c1e4e4dda02dcd92$var$includes(array, value) {
    return array.indexOf(value) > -1;
}
function $c1e4e4dda02dcd92$var$push(array, items) {
    array.push.apply(array, $c1e4e4dda02dcd92$var$toArray(items));
    return array;
}
function $c1e4e4dda02dcd92$var$toggleClass(elm, classes, add) {
    if (elm) $c1e4e4dda02dcd92$var$forEach(classes, function(name) {
        if (name) elm.classList[add ? "add" : "remove"](name);
    });
}
function $c1e4e4dda02dcd92$var$addClass(elm, classes) {
    $c1e4e4dda02dcd92$var$toggleClass(elm, $c1e4e4dda02dcd92$var$isString(classes) ? classes.split(" ") : classes, true);
}
function $c1e4e4dda02dcd92$var$append(parent, children2) {
    $c1e4e4dda02dcd92$var$forEach(children2, parent.appendChild.bind(parent));
}
function $c1e4e4dda02dcd92$var$before(nodes, ref2) {
    $c1e4e4dda02dcd92$var$forEach(nodes, function(node) {
        var parent = (ref2 || node).parentNode;
        if (parent) parent.insertBefore(node, ref2);
    });
}
function $c1e4e4dda02dcd92$var$matches(elm, selector) {
    return $c1e4e4dda02dcd92$var$isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}
function $c1e4e4dda02dcd92$var$children(parent, selector) {
    var children2 = parent ? $c1e4e4dda02dcd92$var$slice(parent.children) : [];
    return selector ? children2.filter(function(child2) {
        return $c1e4e4dda02dcd92$var$matches(child2, selector);
    }) : children2;
}
function $c1e4e4dda02dcd92$var$child(parent, selector) {
    return selector ? $c1e4e4dda02dcd92$var$children(parent, selector)[0] : parent.firstElementChild;
}
var $c1e4e4dda02dcd92$var$ownKeys = Object.keys;
function $c1e4e4dda02dcd92$var$forOwn$1(object, iteratee, right) {
    if (object) (right ? $c1e4e4dda02dcd92$var$ownKeys(object).reverse() : $c1e4e4dda02dcd92$var$ownKeys(object)).forEach(function(key) {
        key !== "__proto__" && iteratee(object[key], key);
    });
    return object;
}
function $c1e4e4dda02dcd92$var$assign(object) {
    $c1e4e4dda02dcd92$var$slice(arguments, 1).forEach(function(source) {
        $c1e4e4dda02dcd92$var$forOwn$1(source, function(value, key) {
            object[key] = source[key];
        });
    });
    return object;
}
function $c1e4e4dda02dcd92$var$merge$1(object) {
    $c1e4e4dda02dcd92$var$slice(arguments, 1).forEach(function(source) {
        $c1e4e4dda02dcd92$var$forOwn$1(source, function(value, key) {
            if ($c1e4e4dda02dcd92$var$isArray(value)) object[key] = value.slice();
            else if ($c1e4e4dda02dcd92$var$isObject$1(value)) object[key] = $c1e4e4dda02dcd92$var$merge$1({}, $c1e4e4dda02dcd92$var$isObject$1(object[key]) ? object[key] : {}, value);
            else object[key] = value;
        });
    });
    return object;
}
function $c1e4e4dda02dcd92$var$omit(object, keys) {
    $c1e4e4dda02dcd92$var$forEach(keys || $c1e4e4dda02dcd92$var$ownKeys(object), function(key) {
        delete object[key];
    });
}
function $c1e4e4dda02dcd92$var$removeAttribute(elms, attrs) {
    $c1e4e4dda02dcd92$var$forEach(elms, function(elm) {
        $c1e4e4dda02dcd92$var$forEach(attrs, function(attr) {
            elm && elm.removeAttribute(attr);
        });
    });
}
function $c1e4e4dda02dcd92$var$setAttribute(elms, attrs, value) {
    if ($c1e4e4dda02dcd92$var$isObject$1(attrs)) $c1e4e4dda02dcd92$var$forOwn$1(attrs, function(value2, name) {
        $c1e4e4dda02dcd92$var$setAttribute(elms, name, value2);
    });
    else $c1e4e4dda02dcd92$var$forEach(elms, function(elm) {
        $c1e4e4dda02dcd92$var$isNull(value) || value === "" ? $c1e4e4dda02dcd92$var$removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
    });
}
function $c1e4e4dda02dcd92$var$create(tag, attrs, parent) {
    var elm = document.createElement(tag);
    if (attrs) $c1e4e4dda02dcd92$var$isString(attrs) ? $c1e4e4dda02dcd92$var$addClass(elm, attrs) : $c1e4e4dda02dcd92$var$setAttribute(elm, attrs);
    parent && $c1e4e4dda02dcd92$var$append(parent, elm);
    return elm;
}
function $c1e4e4dda02dcd92$var$style(elm, prop, value) {
    if ($c1e4e4dda02dcd92$var$isUndefined(value)) return getComputedStyle(elm)[prop];
    if (!$c1e4e4dda02dcd92$var$isNull(value)) elm.style[prop] = "" + value;
}
function $c1e4e4dda02dcd92$var$display(elm, display2) {
    $c1e4e4dda02dcd92$var$style(elm, "display", display2);
}
function $c1e4e4dda02dcd92$var$focus(elm) {
    elm["setActive"] && elm["setActive"]() || elm.focus({
        preventScroll: true
    });
}
function $c1e4e4dda02dcd92$var$getAttribute(elm, attr) {
    return elm.getAttribute(attr);
}
function $c1e4e4dda02dcd92$var$hasClass(elm, className) {
    return elm && elm.classList.contains(className);
}
function $c1e4e4dda02dcd92$var$rect(target) {
    return target.getBoundingClientRect();
}
function $c1e4e4dda02dcd92$var$remove(nodes) {
    $c1e4e4dda02dcd92$var$forEach(nodes, function(node) {
        if (node && node.parentNode) node.parentNode.removeChild(node);
    });
}
function $c1e4e4dda02dcd92$var$parseHtml(html) {
    return $c1e4e4dda02dcd92$var$child(new DOMParser().parseFromString(html, "text/html").body);
}
function $c1e4e4dda02dcd92$var$prevent(e, stopPropagation) {
    e.preventDefault();
    if (stopPropagation) {
        e.stopPropagation();
        e.stopImmediatePropagation();
    }
}
function $c1e4e4dda02dcd92$var$query(parent, selector) {
    return parent && parent.querySelector(selector);
}
function $c1e4e4dda02dcd92$var$queryAll(parent, selector) {
    return selector ? $c1e4e4dda02dcd92$var$slice(parent.querySelectorAll(selector)) : [];
}
function $c1e4e4dda02dcd92$var$removeClass(elm, classes) {
    $c1e4e4dda02dcd92$var$toggleClass(elm, classes, false);
}
function $c1e4e4dda02dcd92$var$timeOf(e) {
    return e.timeStamp;
}
function $c1e4e4dda02dcd92$var$unit(value) {
    return $c1e4e4dda02dcd92$var$isString(value) ? value : value ? value + "px" : "";
}
var $c1e4e4dda02dcd92$var$PROJECT_CODE = "splide";
var $c1e4e4dda02dcd92$var$DATA_ATTRIBUTE = "data-" + $c1e4e4dda02dcd92$var$PROJECT_CODE;
function $c1e4e4dda02dcd92$var$assert(condition, message) {
    if (!condition) throw new Error("[" + $c1e4e4dda02dcd92$var$PROJECT_CODE + "] " + (message || ""));
}
var $c1e4e4dda02dcd92$var$min = Math.min, $c1e4e4dda02dcd92$var$max = Math.max, $c1e4e4dda02dcd92$var$floor = Math.floor, $c1e4e4dda02dcd92$var$ceil = Math.ceil, $c1e4e4dda02dcd92$var$abs = Math.abs;
function $c1e4e4dda02dcd92$var$approximatelyEqual(x, y, epsilon) {
    return $c1e4e4dda02dcd92$var$abs(x - y) < epsilon;
}
function $c1e4e4dda02dcd92$var$between(number, x, y, exclusive) {
    var minimum = $c1e4e4dda02dcd92$var$min(x, y);
    var maximum = $c1e4e4dda02dcd92$var$max(x, y);
    return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
}
function $c1e4e4dda02dcd92$var$clamp(number, x, y) {
    var minimum = $c1e4e4dda02dcd92$var$min(x, y);
    var maximum = $c1e4e4dda02dcd92$var$max(x, y);
    return $c1e4e4dda02dcd92$var$min($c1e4e4dda02dcd92$var$max(minimum, number), maximum);
}
function $c1e4e4dda02dcd92$var$sign(x) {
    return +(x > 0) - +(x < 0);
}
function $c1e4e4dda02dcd92$var$format(string, replacements) {
    $c1e4e4dda02dcd92$var$forEach(replacements, function(replacement) {
        string = string.replace("%s", "" + replacement);
    });
    return string;
}
function $c1e4e4dda02dcd92$var$pad(number) {
    return number < 10 ? "0" + number : "" + number;
}
var $c1e4e4dda02dcd92$var$ids = {};
function $c1e4e4dda02dcd92$var$uniqueId(prefix) {
    return "" + prefix + $c1e4e4dda02dcd92$var$pad($c1e4e4dda02dcd92$var$ids[prefix] = ($c1e4e4dda02dcd92$var$ids[prefix] || 0) + 1);
}
function $c1e4e4dda02dcd92$var$EventBinder() {
    var listeners = [];
    function bind(targets, events, callback, options) {
        forEachEvent(targets, events, function(target, event, namespace) {
            var isEventTarget = "addEventListener" in target;
            var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
            isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
            listeners.push([
                target,
                event,
                namespace,
                callback,
                remover
            ]);
        });
    }
    function unbind(targets, events, callback) {
        forEachEvent(targets, events, function(target, event, namespace) {
            listeners = listeners.filter(function(listener) {
                if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
                    listener[4]();
                    return false;
                }
                return true;
            });
        });
    }
    function dispatch(target, type, detail) {
        var e;
        var bubbles = true;
        if (typeof CustomEvent === "function") e = new CustomEvent(type, {
            bubbles: bubbles,
            detail: detail
        });
        else {
            e = document.createEvent("CustomEvent");
            e.initCustomEvent(type, bubbles, false, detail);
        }
        target.dispatchEvent(e);
        return e;
    }
    function forEachEvent(targets, events, iteratee) {
        $c1e4e4dda02dcd92$var$forEach(targets, function(target) {
            target && $c1e4e4dda02dcd92$var$forEach(events, function(events2) {
                events2.split(" ").forEach(function(eventNS) {
                    var fragment = eventNS.split(".");
                    iteratee(target, fragment[0], fragment[1]);
                });
            });
        });
    }
    function destroy() {
        listeners.forEach(function(data) {
            data[4]();
        });
        $c1e4e4dda02dcd92$var$empty(listeners);
    }
    return {
        bind: bind,
        unbind: unbind,
        dispatch: dispatch,
        destroy: destroy
    };
}
var $c1e4e4dda02dcd92$var$EVENT_MOUNTED = "mounted";
var $c1e4e4dda02dcd92$var$EVENT_READY = "ready";
var $c1e4e4dda02dcd92$var$EVENT_MOVE = "move";
var $c1e4e4dda02dcd92$var$EVENT_MOVED = "moved";
var $c1e4e4dda02dcd92$var$EVENT_CLICK = "click";
var $c1e4e4dda02dcd92$var$EVENT_ACTIVE = "active";
var $c1e4e4dda02dcd92$var$EVENT_INACTIVE = "inactive";
var $c1e4e4dda02dcd92$var$EVENT_VISIBLE = "visible";
var $c1e4e4dda02dcd92$var$EVENT_HIDDEN = "hidden";
var $c1e4e4dda02dcd92$var$EVENT_REFRESH = "refresh";
var $c1e4e4dda02dcd92$var$EVENT_UPDATED = "updated";
var $c1e4e4dda02dcd92$var$EVENT_RESIZE = "resize";
var $c1e4e4dda02dcd92$var$EVENT_RESIZED = "resized";
var $c1e4e4dda02dcd92$var$EVENT_DRAG = "drag";
var $c1e4e4dda02dcd92$var$EVENT_DRAGGING = "dragging";
var $c1e4e4dda02dcd92$var$EVENT_DRAGGED = "dragged";
var $c1e4e4dda02dcd92$var$EVENT_SCROLL = "scroll";
var $c1e4e4dda02dcd92$var$EVENT_SCROLLED = "scrolled";
var $c1e4e4dda02dcd92$var$EVENT_OVERFLOW = "overflow";
var $c1e4e4dda02dcd92$var$EVENT_DESTROY = "destroy";
var $c1e4e4dda02dcd92$var$EVENT_ARROWS_MOUNTED = "arrows:mounted";
var $c1e4e4dda02dcd92$var$EVENT_ARROWS_UPDATED = "arrows:updated";
var $c1e4e4dda02dcd92$var$EVENT_PAGINATION_MOUNTED = "pagination:mounted";
var $c1e4e4dda02dcd92$var$EVENT_PAGINATION_UPDATED = "pagination:updated";
var $c1e4e4dda02dcd92$var$EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
var $c1e4e4dda02dcd92$var$EVENT_AUTOPLAY_PLAY = "autoplay:play";
var $c1e4e4dda02dcd92$var$EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
var $c1e4e4dda02dcd92$var$EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
var $c1e4e4dda02dcd92$var$EVENT_LAZYLOAD_LOADED = "lazyload:loaded";
var $c1e4e4dda02dcd92$var$EVENT_SLIDE_KEYDOWN = "sk";
var $c1e4e4dda02dcd92$var$EVENT_SHIFTED = "sh";
var $c1e4e4dda02dcd92$var$EVENT_END_INDEX_CHANGED = "ei";
function $c1e4e4dda02dcd92$var$EventInterface(Splide2) {
    var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
    var binder = $c1e4e4dda02dcd92$var$EventBinder();
    function on(events, callback) {
        binder.bind(bus, $c1e4e4dda02dcd92$var$toArray(events).join(" "), function(e) {
            callback.apply(callback, $c1e4e4dda02dcd92$var$isArray(e.detail) ? e.detail : []);
        });
    }
    function emit(event) {
        binder.dispatch(bus, event, $c1e4e4dda02dcd92$var$slice(arguments, 1));
    }
    if (Splide2) Splide2.event.on($c1e4e4dda02dcd92$var$EVENT_DESTROY, binder.destroy);
    return $c1e4e4dda02dcd92$var$assign(binder, {
        bus: bus,
        on: on,
        off: $c1e4e4dda02dcd92$var$apply(binder.unbind, bus),
        emit: emit
    });
}
function $c1e4e4dda02dcd92$var$RequestInterval(interval, onInterval, onUpdate, limit) {
    var now = Date.now;
    var startTime;
    var rate = 0;
    var id;
    var paused = true;
    var count = 0;
    function update() {
        if (!paused) {
            rate = interval ? $c1e4e4dda02dcd92$var$min((now() - startTime) / interval, 1) : 1;
            onUpdate && onUpdate(rate);
            if (rate >= 1) {
                onInterval();
                startTime = now();
                if (limit && ++count >= limit) return pause();
            }
            id = $c1e4e4dda02dcd92$var$raf(update);
        }
    }
    function start(resume) {
        resume || cancel();
        startTime = now() - (resume ? rate * interval : 0);
        paused = false;
        id = $c1e4e4dda02dcd92$var$raf(update);
    }
    function pause() {
        paused = true;
    }
    function rewind() {
        startTime = now();
        rate = 0;
        if (onUpdate) onUpdate(rate);
    }
    function cancel() {
        id && cancelAnimationFrame(id);
        rate = 0;
        id = 0;
        paused = true;
    }
    function set(time) {
        interval = time;
    }
    function isPaused() {
        return paused;
    }
    return {
        start: start,
        rewind: rewind,
        pause: pause,
        cancel: cancel,
        set: set,
        isPaused: isPaused
    };
}
function $c1e4e4dda02dcd92$var$State(initialState) {
    var state = initialState;
    function set(value) {
        state = value;
    }
    function is(states) {
        return $c1e4e4dda02dcd92$var$includes($c1e4e4dda02dcd92$var$toArray(states), state);
    }
    return {
        set: set,
        is: is
    };
}
function $c1e4e4dda02dcd92$var$Throttle(func, duration) {
    var interval = $c1e4e4dda02dcd92$var$RequestInterval(duration || 0, func, null, 1);
    return function() {
        interval.isPaused() && interval.start();
    };
}
function $c1e4e4dda02dcd92$var$Media(Splide2, Components2, options) {
    var state = Splide2.state;
    var breakpoints = options.breakpoints || {};
    var reducedMotion = options.reducedMotion || {};
    var binder = $c1e4e4dda02dcd92$var$EventBinder();
    var queries = [];
    function setup() {
        var isMin = options.mediaQuery === "min";
        $c1e4e4dda02dcd92$var$ownKeys(breakpoints).sort(function(n, m) {
            return isMin ? +n - +m : +m - +n;
        }).forEach(function(key) {
            register(breakpoints[key], "(" + (isMin ? "min" : "max") + "-width:" + key + "px)");
        });
        register(reducedMotion, $c1e4e4dda02dcd92$var$MEDIA_PREFERS_REDUCED_MOTION);
        update();
    }
    function destroy(completely) {
        if (completely) binder.destroy();
    }
    function register(options2, query2) {
        var queryList = matchMedia(query2);
        binder.bind(queryList, "change", update);
        queries.push([
            options2,
            queryList
        ]);
    }
    function update() {
        var destroyed = state.is($c1e4e4dda02dcd92$var$DESTROYED);
        var direction = options.direction;
        var merged = queries.reduce(function(merged2, entry) {
            return $c1e4e4dda02dcd92$var$merge$1(merged2, entry[1].matches ? entry[0] : {});
        }, {});
        $c1e4e4dda02dcd92$var$omit(options);
        set(merged);
        if (options.destroy) Splide2.destroy(options.destroy === "completely");
        else if (destroyed) {
            destroy(true);
            Splide2.mount();
        } else direction !== options.direction && Splide2.refresh();
    }
    function reduce(enable) {
        if (matchMedia($c1e4e4dda02dcd92$var$MEDIA_PREFERS_REDUCED_MOTION).matches) enable ? $c1e4e4dda02dcd92$var$merge$1(options, reducedMotion) : $c1e4e4dda02dcd92$var$omit(options, $c1e4e4dda02dcd92$var$ownKeys(reducedMotion));
    }
    function set(opts, base, notify) {
        $c1e4e4dda02dcd92$var$merge$1(options, opts);
        base && $c1e4e4dda02dcd92$var$merge$1(Object.getPrototypeOf(options), opts);
        if (notify || !state.is($c1e4e4dda02dcd92$var$CREATED)) Splide2.emit($c1e4e4dda02dcd92$var$EVENT_UPDATED, options);
    }
    return {
        setup: setup,
        destroy: destroy,
        reduce: reduce,
        set: set
    };
}
var $c1e4e4dda02dcd92$var$ARROW = "Arrow";
var $c1e4e4dda02dcd92$var$ARROW_LEFT = $c1e4e4dda02dcd92$var$ARROW + "Left";
var $c1e4e4dda02dcd92$var$ARROW_RIGHT = $c1e4e4dda02dcd92$var$ARROW + "Right";
var $c1e4e4dda02dcd92$var$ARROW_UP = $c1e4e4dda02dcd92$var$ARROW + "Up";
var $c1e4e4dda02dcd92$var$ARROW_DOWN = $c1e4e4dda02dcd92$var$ARROW + "Down";
var $c1e4e4dda02dcd92$var$RTL = "rtl";
var $c1e4e4dda02dcd92$var$TTB = "ttb";
var $c1e4e4dda02dcd92$var$ORIENTATION_MAP = {
    width: [
        "height"
    ],
    left: [
        "top",
        "right"
    ],
    right: [
        "bottom",
        "left"
    ],
    x: [
        "y"
    ],
    X: [
        "Y"
    ],
    Y: [
        "X"
    ],
    ArrowLeft: [
        $c1e4e4dda02dcd92$var$ARROW_UP,
        $c1e4e4dda02dcd92$var$ARROW_RIGHT
    ],
    ArrowRight: [
        $c1e4e4dda02dcd92$var$ARROW_DOWN,
        $c1e4e4dda02dcd92$var$ARROW_LEFT
    ]
};
function $c1e4e4dda02dcd92$var$Direction(Splide2, Components2, options) {
    function resolve(prop, axisOnly, direction) {
        direction = direction || options.direction;
        var index = direction === $c1e4e4dda02dcd92$var$RTL && !axisOnly ? 1 : direction === $c1e4e4dda02dcd92$var$TTB ? 0 : -1;
        return $c1e4e4dda02dcd92$var$ORIENTATION_MAP[prop] && $c1e4e4dda02dcd92$var$ORIENTATION_MAP[prop][index] || prop.replace(/width|left|right/i, function(match, offset) {
            var replacement = $c1e4e4dda02dcd92$var$ORIENTATION_MAP[match.toLowerCase()][index] || match;
            return offset > 0 ? replacement.charAt(0).toUpperCase() + replacement.slice(1) : replacement;
        });
    }
    function orient(value) {
        return value * (options.direction === $c1e4e4dda02dcd92$var$RTL ? 1 : -1);
    }
    return {
        resolve: resolve,
        orient: orient
    };
}
var $c1e4e4dda02dcd92$var$ROLE = "role";
var $c1e4e4dda02dcd92$var$TAB_INDEX = "tabindex";
var $c1e4e4dda02dcd92$var$DISABLED = "disabled";
var $c1e4e4dda02dcd92$var$ARIA_PREFIX = "aria-";
var $c1e4e4dda02dcd92$var$ARIA_CONTROLS = $c1e4e4dda02dcd92$var$ARIA_PREFIX + "controls";
var $c1e4e4dda02dcd92$var$ARIA_CURRENT = $c1e4e4dda02dcd92$var$ARIA_PREFIX + "current";
var $c1e4e4dda02dcd92$var$ARIA_SELECTED = $c1e4e4dda02dcd92$var$ARIA_PREFIX + "selected";
var $c1e4e4dda02dcd92$var$ARIA_LABEL = $c1e4e4dda02dcd92$var$ARIA_PREFIX + "label";
var $c1e4e4dda02dcd92$var$ARIA_LABELLEDBY = $c1e4e4dda02dcd92$var$ARIA_PREFIX + "labelledby";
var $c1e4e4dda02dcd92$var$ARIA_HIDDEN = $c1e4e4dda02dcd92$var$ARIA_PREFIX + "hidden";
var $c1e4e4dda02dcd92$var$ARIA_ORIENTATION = $c1e4e4dda02dcd92$var$ARIA_PREFIX + "orientation";
var $c1e4e4dda02dcd92$var$ARIA_ROLEDESCRIPTION = $c1e4e4dda02dcd92$var$ARIA_PREFIX + "roledescription";
var $c1e4e4dda02dcd92$var$ARIA_LIVE = $c1e4e4dda02dcd92$var$ARIA_PREFIX + "live";
var $c1e4e4dda02dcd92$var$ARIA_BUSY = $c1e4e4dda02dcd92$var$ARIA_PREFIX + "busy";
var $c1e4e4dda02dcd92$var$ARIA_ATOMIC = $c1e4e4dda02dcd92$var$ARIA_PREFIX + "atomic";
var $c1e4e4dda02dcd92$var$ALL_ATTRIBUTES = [
    $c1e4e4dda02dcd92$var$ROLE,
    $c1e4e4dda02dcd92$var$TAB_INDEX,
    $c1e4e4dda02dcd92$var$DISABLED,
    $c1e4e4dda02dcd92$var$ARIA_CONTROLS,
    $c1e4e4dda02dcd92$var$ARIA_CURRENT,
    $c1e4e4dda02dcd92$var$ARIA_LABEL,
    $c1e4e4dda02dcd92$var$ARIA_LABELLEDBY,
    $c1e4e4dda02dcd92$var$ARIA_HIDDEN,
    $c1e4e4dda02dcd92$var$ARIA_ORIENTATION,
    $c1e4e4dda02dcd92$var$ARIA_ROLEDESCRIPTION
];
var $c1e4e4dda02dcd92$var$CLASS_PREFIX = $c1e4e4dda02dcd92$var$PROJECT_CODE + "__";
var $c1e4e4dda02dcd92$var$STATUS_CLASS_PREFIX = "is-";
var $c1e4e4dda02dcd92$var$CLASS_ROOT = $c1e4e4dda02dcd92$var$PROJECT_CODE;
var $c1e4e4dda02dcd92$var$CLASS_TRACK = $c1e4e4dda02dcd92$var$CLASS_PREFIX + "track";
var $c1e4e4dda02dcd92$var$CLASS_LIST = $c1e4e4dda02dcd92$var$CLASS_PREFIX + "list";
var $c1e4e4dda02dcd92$var$CLASS_SLIDE = $c1e4e4dda02dcd92$var$CLASS_PREFIX + "slide";
var $c1e4e4dda02dcd92$var$CLASS_CLONE = $c1e4e4dda02dcd92$var$CLASS_SLIDE + "--clone";
var $c1e4e4dda02dcd92$var$CLASS_CONTAINER = $c1e4e4dda02dcd92$var$CLASS_SLIDE + "__container";
var $c1e4e4dda02dcd92$var$CLASS_ARROWS = $c1e4e4dda02dcd92$var$CLASS_PREFIX + "arrows";
var $c1e4e4dda02dcd92$var$CLASS_ARROW = $c1e4e4dda02dcd92$var$CLASS_PREFIX + "arrow";
var $c1e4e4dda02dcd92$var$CLASS_ARROW_PREV = $c1e4e4dda02dcd92$var$CLASS_ARROW + "--prev";
var $c1e4e4dda02dcd92$var$CLASS_ARROW_NEXT = $c1e4e4dda02dcd92$var$CLASS_ARROW + "--next";
var $c1e4e4dda02dcd92$var$CLASS_PAGINATION = $c1e4e4dda02dcd92$var$CLASS_PREFIX + "pagination";
var $c1e4e4dda02dcd92$var$CLASS_PAGINATION_PAGE = $c1e4e4dda02dcd92$var$CLASS_PAGINATION + "__page";
var $c1e4e4dda02dcd92$var$CLASS_PROGRESS = $c1e4e4dda02dcd92$var$CLASS_PREFIX + "progress";
var $c1e4e4dda02dcd92$var$CLASS_PROGRESS_BAR = $c1e4e4dda02dcd92$var$CLASS_PROGRESS + "__bar";
var $c1e4e4dda02dcd92$var$CLASS_TOGGLE = $c1e4e4dda02dcd92$var$CLASS_PREFIX + "toggle";
var $c1e4e4dda02dcd92$var$CLASS_SPINNER = $c1e4e4dda02dcd92$var$CLASS_PREFIX + "spinner";
var $c1e4e4dda02dcd92$var$CLASS_SR = $c1e4e4dda02dcd92$var$CLASS_PREFIX + "sr";
var $c1e4e4dda02dcd92$var$CLASS_INITIALIZED = $c1e4e4dda02dcd92$var$STATUS_CLASS_PREFIX + "initialized";
var $c1e4e4dda02dcd92$var$CLASS_ACTIVE = $c1e4e4dda02dcd92$var$STATUS_CLASS_PREFIX + "active";
var $c1e4e4dda02dcd92$var$CLASS_PREV = $c1e4e4dda02dcd92$var$STATUS_CLASS_PREFIX + "prev";
var $c1e4e4dda02dcd92$var$CLASS_NEXT = $c1e4e4dda02dcd92$var$STATUS_CLASS_PREFIX + "next";
var $c1e4e4dda02dcd92$var$CLASS_VISIBLE = $c1e4e4dda02dcd92$var$STATUS_CLASS_PREFIX + "visible";
var $c1e4e4dda02dcd92$var$CLASS_LOADING = $c1e4e4dda02dcd92$var$STATUS_CLASS_PREFIX + "loading";
var $c1e4e4dda02dcd92$var$CLASS_FOCUS_IN = $c1e4e4dda02dcd92$var$STATUS_CLASS_PREFIX + "focus-in";
var $c1e4e4dda02dcd92$var$CLASS_OVERFLOW = $c1e4e4dda02dcd92$var$STATUS_CLASS_PREFIX + "overflow";
var $c1e4e4dda02dcd92$var$STATUS_CLASSES = [
    $c1e4e4dda02dcd92$var$CLASS_ACTIVE,
    $c1e4e4dda02dcd92$var$CLASS_VISIBLE,
    $c1e4e4dda02dcd92$var$CLASS_PREV,
    $c1e4e4dda02dcd92$var$CLASS_NEXT,
    $c1e4e4dda02dcd92$var$CLASS_LOADING,
    $c1e4e4dda02dcd92$var$CLASS_FOCUS_IN,
    $c1e4e4dda02dcd92$var$CLASS_OVERFLOW
];
var $c1e4e4dda02dcd92$var$CLASSES = {
    slide: $c1e4e4dda02dcd92$var$CLASS_SLIDE,
    clone: $c1e4e4dda02dcd92$var$CLASS_CLONE,
    arrows: $c1e4e4dda02dcd92$var$CLASS_ARROWS,
    arrow: $c1e4e4dda02dcd92$var$CLASS_ARROW,
    prev: $c1e4e4dda02dcd92$var$CLASS_ARROW_PREV,
    next: $c1e4e4dda02dcd92$var$CLASS_ARROW_NEXT,
    pagination: $c1e4e4dda02dcd92$var$CLASS_PAGINATION,
    page: $c1e4e4dda02dcd92$var$CLASS_PAGINATION_PAGE,
    spinner: $c1e4e4dda02dcd92$var$CLASS_SPINNER
};
function $c1e4e4dda02dcd92$var$closest(from, selector) {
    if ($c1e4e4dda02dcd92$var$isFunction(from.closest)) return from.closest(selector);
    var elm = from;
    while(elm && elm.nodeType === 1){
        if ($c1e4e4dda02dcd92$var$matches(elm, selector)) break;
        elm = elm.parentElement;
    }
    return elm;
}
var $c1e4e4dda02dcd92$var$FRICTION = 5;
var $c1e4e4dda02dcd92$var$LOG_INTERVAL = 200;
var $c1e4e4dda02dcd92$var$POINTER_DOWN_EVENTS = "touchstart mousedown";
var $c1e4e4dda02dcd92$var$POINTER_MOVE_EVENTS = "touchmove mousemove";
var $c1e4e4dda02dcd92$var$POINTER_UP_EVENTS = "touchend touchcancel mouseup click";
function $c1e4e4dda02dcd92$var$Elements(Splide2, Components2, options) {
    var _EventInterface = $c1e4e4dda02dcd92$var$EventInterface(Splide2), on = _EventInterface.on, bind = _EventInterface.bind;
    var root = Splide2.root;
    var i18n = options.i18n;
    var elements = {};
    var slides = [];
    var rootClasses = [];
    var trackClasses = [];
    var track;
    var list;
    var isUsingKey;
    function setup() {
        collect();
        init();
        update();
    }
    function mount() {
        on($c1e4e4dda02dcd92$var$EVENT_REFRESH, destroy);
        on($c1e4e4dda02dcd92$var$EVENT_REFRESH, setup);
        on($c1e4e4dda02dcd92$var$EVENT_UPDATED, update);
        bind(document, $c1e4e4dda02dcd92$var$POINTER_DOWN_EVENTS + " keydown", function(e) {
            isUsingKey = e.type === "keydown";
        }, {
            capture: true
        });
        bind(root, "focusin", function() {
            $c1e4e4dda02dcd92$var$toggleClass(root, $c1e4e4dda02dcd92$var$CLASS_FOCUS_IN, !!isUsingKey);
        });
    }
    function destroy(completely) {
        var attrs = $c1e4e4dda02dcd92$var$ALL_ATTRIBUTES.concat("style");
        $c1e4e4dda02dcd92$var$empty(slides);
        $c1e4e4dda02dcd92$var$removeClass(root, rootClasses);
        $c1e4e4dda02dcd92$var$removeClass(track, trackClasses);
        $c1e4e4dda02dcd92$var$removeAttribute([
            track,
            list
        ], attrs);
        $c1e4e4dda02dcd92$var$removeAttribute(root, completely ? attrs : [
            "style",
            $c1e4e4dda02dcd92$var$ARIA_ROLEDESCRIPTION
        ]);
    }
    function update() {
        $c1e4e4dda02dcd92$var$removeClass(root, rootClasses);
        $c1e4e4dda02dcd92$var$removeClass(track, trackClasses);
        rootClasses = getClasses($c1e4e4dda02dcd92$var$CLASS_ROOT);
        trackClasses = getClasses($c1e4e4dda02dcd92$var$CLASS_TRACK);
        $c1e4e4dda02dcd92$var$addClass(root, rootClasses);
        $c1e4e4dda02dcd92$var$addClass(track, trackClasses);
        $c1e4e4dda02dcd92$var$setAttribute(root, $c1e4e4dda02dcd92$var$ARIA_LABEL, options.label);
        $c1e4e4dda02dcd92$var$setAttribute(root, $c1e4e4dda02dcd92$var$ARIA_LABELLEDBY, options.labelledby);
    }
    function collect() {
        track = find("." + $c1e4e4dda02dcd92$var$CLASS_TRACK);
        list = $c1e4e4dda02dcd92$var$child(track, "." + $c1e4e4dda02dcd92$var$CLASS_LIST);
        $c1e4e4dda02dcd92$var$assert(track && list, "A track/list element is missing.");
        $c1e4e4dda02dcd92$var$push(slides, $c1e4e4dda02dcd92$var$children(list, "." + $c1e4e4dda02dcd92$var$CLASS_SLIDE + ":not(." + $c1e4e4dda02dcd92$var$CLASS_CLONE + ")"));
        $c1e4e4dda02dcd92$var$forOwn$1({
            arrows: $c1e4e4dda02dcd92$var$CLASS_ARROWS,
            pagination: $c1e4e4dda02dcd92$var$CLASS_PAGINATION,
            prev: $c1e4e4dda02dcd92$var$CLASS_ARROW_PREV,
            next: $c1e4e4dda02dcd92$var$CLASS_ARROW_NEXT,
            bar: $c1e4e4dda02dcd92$var$CLASS_PROGRESS_BAR,
            toggle: $c1e4e4dda02dcd92$var$CLASS_TOGGLE
        }, function(className, key) {
            elements[key] = find("." + className);
        });
        $c1e4e4dda02dcd92$var$assign(elements, {
            root: root,
            track: track,
            list: list,
            slides: slides
        });
    }
    function init() {
        var id = root.id || $c1e4e4dda02dcd92$var$uniqueId($c1e4e4dda02dcd92$var$PROJECT_CODE);
        var role = options.role;
        root.id = id;
        track.id = track.id || id + "-track";
        list.id = list.id || id + "-list";
        if (!$c1e4e4dda02dcd92$var$getAttribute(root, $c1e4e4dda02dcd92$var$ROLE) && root.tagName !== "SECTION" && role) $c1e4e4dda02dcd92$var$setAttribute(root, $c1e4e4dda02dcd92$var$ROLE, role);
        $c1e4e4dda02dcd92$var$setAttribute(root, $c1e4e4dda02dcd92$var$ARIA_ROLEDESCRIPTION, i18n.carousel);
        $c1e4e4dda02dcd92$var$setAttribute(list, $c1e4e4dda02dcd92$var$ROLE, "presentation");
    }
    function find(selector) {
        var elm = $c1e4e4dda02dcd92$var$query(root, selector);
        return elm && $c1e4e4dda02dcd92$var$closest(elm, "." + $c1e4e4dda02dcd92$var$CLASS_ROOT) === root ? elm : void 0;
    }
    function getClasses(base) {
        return [
            base + "--" + options.type,
            base + "--" + options.direction,
            options.drag && base + "--draggable",
            options.isNavigation && base + "--nav",
            base === $c1e4e4dda02dcd92$var$CLASS_ROOT && $c1e4e4dda02dcd92$var$CLASS_ACTIVE
        ];
    }
    return $c1e4e4dda02dcd92$var$assign(elements, {
        setup: setup,
        mount: mount,
        destroy: destroy
    });
}
var $c1e4e4dda02dcd92$var$SLIDE = "slide";
var $c1e4e4dda02dcd92$var$LOOP = "loop";
var $c1e4e4dda02dcd92$var$FADE = "fade";
function $c1e4e4dda02dcd92$var$Slide$1(Splide2, index, slideIndex, slide) {
    var event = $c1e4e4dda02dcd92$var$EventInterface(Splide2);
    var on = event.on, emit = event.emit, bind = event.bind;
    var Components = Splide2.Components, root = Splide2.root, options = Splide2.options;
    var isNavigation = options.isNavigation, updateOnMove = options.updateOnMove, i18n = options.i18n, pagination = options.pagination, slideFocus = options.slideFocus;
    var resolve = Components.Direction.resolve;
    var styles = $c1e4e4dda02dcd92$var$getAttribute(slide, "style");
    var label = $c1e4e4dda02dcd92$var$getAttribute(slide, $c1e4e4dda02dcd92$var$ARIA_LABEL);
    var isClone = slideIndex > -1;
    var container = $c1e4e4dda02dcd92$var$child(slide, "." + $c1e4e4dda02dcd92$var$CLASS_CONTAINER);
    var destroyed;
    function mount() {
        if (!isClone) {
            slide.id = root.id + "-slide" + $c1e4e4dda02dcd92$var$pad(index + 1);
            $c1e4e4dda02dcd92$var$setAttribute(slide, $c1e4e4dda02dcd92$var$ROLE, pagination ? "tabpanel" : "group");
            $c1e4e4dda02dcd92$var$setAttribute(slide, $c1e4e4dda02dcd92$var$ARIA_ROLEDESCRIPTION, i18n.slide);
            $c1e4e4dda02dcd92$var$setAttribute(slide, $c1e4e4dda02dcd92$var$ARIA_LABEL, label || $c1e4e4dda02dcd92$var$format(i18n.slideLabel, [
                index + 1,
                Splide2.length
            ]));
        }
        listen();
    }
    function listen() {
        bind(slide, "click", $c1e4e4dda02dcd92$var$apply(emit, $c1e4e4dda02dcd92$var$EVENT_CLICK, self));
        bind(slide, "keydown", $c1e4e4dda02dcd92$var$apply(emit, $c1e4e4dda02dcd92$var$EVENT_SLIDE_KEYDOWN, self));
        on([
            $c1e4e4dda02dcd92$var$EVENT_MOVED,
            $c1e4e4dda02dcd92$var$EVENT_SHIFTED,
            $c1e4e4dda02dcd92$var$EVENT_SCROLLED
        ], update);
        on($c1e4e4dda02dcd92$var$EVENT_NAVIGATION_MOUNTED, initNavigation);
        if (updateOnMove) on($c1e4e4dda02dcd92$var$EVENT_MOVE, onMove);
    }
    function destroy() {
        destroyed = true;
        event.destroy();
        $c1e4e4dda02dcd92$var$removeClass(slide, $c1e4e4dda02dcd92$var$STATUS_CLASSES);
        $c1e4e4dda02dcd92$var$removeAttribute(slide, $c1e4e4dda02dcd92$var$ALL_ATTRIBUTES);
        $c1e4e4dda02dcd92$var$setAttribute(slide, "style", styles);
        $c1e4e4dda02dcd92$var$setAttribute(slide, $c1e4e4dda02dcd92$var$ARIA_LABEL, label || "");
    }
    function initNavigation() {
        var controls = Splide2.splides.map(function(target) {
            var Slide2 = target.splide.Components.Slides.getAt(index);
            return Slide2 ? Slide2.slide.id : "";
        }).join(" ");
        $c1e4e4dda02dcd92$var$setAttribute(slide, $c1e4e4dda02dcd92$var$ARIA_LABEL, $c1e4e4dda02dcd92$var$format(i18n.slideX, (isClone ? slideIndex : index) + 1));
        $c1e4e4dda02dcd92$var$setAttribute(slide, $c1e4e4dda02dcd92$var$ARIA_CONTROLS, controls);
        $c1e4e4dda02dcd92$var$setAttribute(slide, $c1e4e4dda02dcd92$var$ROLE, slideFocus ? "button" : "");
        slideFocus && $c1e4e4dda02dcd92$var$removeAttribute(slide, $c1e4e4dda02dcd92$var$ARIA_ROLEDESCRIPTION);
    }
    function onMove() {
        if (!destroyed) update();
    }
    function update() {
        if (!destroyed) {
            var curr = Splide2.index;
            updateActivity();
            updateVisibility();
            $c1e4e4dda02dcd92$var$toggleClass(slide, $c1e4e4dda02dcd92$var$CLASS_PREV, index === curr - 1);
            $c1e4e4dda02dcd92$var$toggleClass(slide, $c1e4e4dda02dcd92$var$CLASS_NEXT, index === curr + 1);
        }
    }
    function updateActivity() {
        var active = isActive();
        if (active !== $c1e4e4dda02dcd92$var$hasClass(slide, $c1e4e4dda02dcd92$var$CLASS_ACTIVE)) {
            $c1e4e4dda02dcd92$var$toggleClass(slide, $c1e4e4dda02dcd92$var$CLASS_ACTIVE, active);
            $c1e4e4dda02dcd92$var$setAttribute(slide, $c1e4e4dda02dcd92$var$ARIA_CURRENT, isNavigation && active || "");
            emit(active ? $c1e4e4dda02dcd92$var$EVENT_ACTIVE : $c1e4e4dda02dcd92$var$EVENT_INACTIVE, self);
        }
    }
    function updateVisibility() {
        var visible = isVisible();
        var hidden = !visible && (!isActive() || isClone);
        if (!Splide2.state.is([
            $c1e4e4dda02dcd92$var$MOVING,
            $c1e4e4dda02dcd92$var$SCROLLING
        ])) $c1e4e4dda02dcd92$var$setAttribute(slide, $c1e4e4dda02dcd92$var$ARIA_HIDDEN, hidden || "");
        $c1e4e4dda02dcd92$var$setAttribute($c1e4e4dda02dcd92$var$queryAll(slide, options.focusableNodes || ""), $c1e4e4dda02dcd92$var$TAB_INDEX, hidden ? -1 : "");
        if (slideFocus) $c1e4e4dda02dcd92$var$setAttribute(slide, $c1e4e4dda02dcd92$var$TAB_INDEX, hidden ? -1 : 0);
        if (visible !== $c1e4e4dda02dcd92$var$hasClass(slide, $c1e4e4dda02dcd92$var$CLASS_VISIBLE)) {
            $c1e4e4dda02dcd92$var$toggleClass(slide, $c1e4e4dda02dcd92$var$CLASS_VISIBLE, visible);
            emit(visible ? $c1e4e4dda02dcd92$var$EVENT_VISIBLE : $c1e4e4dda02dcd92$var$EVENT_HIDDEN, self);
        }
        if (!visible && document.activeElement === slide) {
            var Slide2 = Components.Slides.getAt(Splide2.index);
            Slide2 && $c1e4e4dda02dcd92$var$focus(Slide2.slide);
        }
    }
    function style$1(prop, value, useContainer) {
        $c1e4e4dda02dcd92$var$style(useContainer && container || slide, prop, value);
    }
    function isActive() {
        var curr = Splide2.index;
        return curr === index || options.cloneStatus && curr === slideIndex;
    }
    function isVisible() {
        if (Splide2.is($c1e4e4dda02dcd92$var$FADE)) return isActive();
        var trackRect = $c1e4e4dda02dcd92$var$rect(Components.Elements.track);
        var slideRect = $c1e4e4dda02dcd92$var$rect(slide);
        var left = resolve("left", true);
        var right = resolve("right", true);
        return $c1e4e4dda02dcd92$var$floor(trackRect[left]) <= $c1e4e4dda02dcd92$var$ceil(slideRect[left]) && $c1e4e4dda02dcd92$var$floor(slideRect[right]) <= $c1e4e4dda02dcd92$var$ceil(trackRect[right]);
    }
    function isWithin(from, distance) {
        var diff = $c1e4e4dda02dcd92$var$abs(from - index);
        if (!isClone && (options.rewind || Splide2.is($c1e4e4dda02dcd92$var$LOOP))) diff = $c1e4e4dda02dcd92$var$min(diff, Splide2.length - diff);
        return diff <= distance;
    }
    var self = {
        index: index,
        slideIndex: slideIndex,
        slide: slide,
        container: container,
        isClone: isClone,
        mount: mount,
        destroy: destroy,
        update: update,
        style: style$1,
        isWithin: isWithin
    };
    return self;
}
function $c1e4e4dda02dcd92$var$Slides(Splide2, Components2, options) {
    var _EventInterface2 = $c1e4e4dda02dcd92$var$EventInterface(Splide2), on = _EventInterface2.on, emit = _EventInterface2.emit, bind = _EventInterface2.bind;
    var _Components2$Elements = Components2.Elements, slides = _Components2$Elements.slides, list = _Components2$Elements.list;
    var Slides2 = [];
    function mount() {
        init();
        on($c1e4e4dda02dcd92$var$EVENT_REFRESH, destroy);
        on($c1e4e4dda02dcd92$var$EVENT_REFRESH, init);
    }
    function init() {
        slides.forEach(function(slide, index) {
            register(slide, index, -1);
        });
    }
    function destroy() {
        forEach$1(function(Slide2) {
            Slide2.destroy();
        });
        $c1e4e4dda02dcd92$var$empty(Slides2);
    }
    function update() {
        forEach$1(function(Slide2) {
            Slide2.update();
        });
    }
    function register(slide, index, slideIndex) {
        var object = $c1e4e4dda02dcd92$var$Slide$1(Splide2, index, slideIndex, slide);
        object.mount();
        Slides2.push(object);
        Slides2.sort(function(Slide1, Slide2) {
            return Slide1.index - Slide2.index;
        });
    }
    function get(excludeClones) {
        return excludeClones ? filter(function(Slide2) {
            return !Slide2.isClone;
        }) : Slides2;
    }
    function getIn(page) {
        var Controller2 = Components2.Controller;
        var index = Controller2.toIndex(page);
        var max2 = Controller2.hasFocus() ? 1 : options.perPage;
        return filter(function(Slide2) {
            return $c1e4e4dda02dcd92$var$between(Slide2.index, index, index + max2 - 1);
        });
    }
    function getAt(index) {
        return filter(index)[0];
    }
    function add(items, index) {
        $c1e4e4dda02dcd92$var$forEach(items, function(slide) {
            if ($c1e4e4dda02dcd92$var$isString(slide)) slide = $c1e4e4dda02dcd92$var$parseHtml(slide);
            if ($c1e4e4dda02dcd92$var$isHTMLElement(slide)) {
                var ref2 = slides[index];
                ref2 ? $c1e4e4dda02dcd92$var$before(slide, ref2) : $c1e4e4dda02dcd92$var$append(list, slide);
                $c1e4e4dda02dcd92$var$addClass(slide, options.classes.slide);
                observeImages(slide, $c1e4e4dda02dcd92$var$apply(emit, $c1e4e4dda02dcd92$var$EVENT_RESIZE));
            }
        });
        emit($c1e4e4dda02dcd92$var$EVENT_REFRESH);
    }
    function remove$1(matcher) {
        $c1e4e4dda02dcd92$var$remove(filter(matcher).map(function(Slide2) {
            return Slide2.slide;
        }));
        emit($c1e4e4dda02dcd92$var$EVENT_REFRESH);
    }
    function forEach$1(iteratee, excludeClones) {
        get(excludeClones).forEach(iteratee);
    }
    function filter(matcher) {
        return Slides2.filter($c1e4e4dda02dcd92$var$isFunction(matcher) ? matcher : function(Slide2) {
            return $c1e4e4dda02dcd92$var$isString(matcher) ? $c1e4e4dda02dcd92$var$matches(Slide2.slide, matcher) : $c1e4e4dda02dcd92$var$includes($c1e4e4dda02dcd92$var$toArray(matcher), Slide2.index);
        });
    }
    function style2(prop, value, useContainer) {
        forEach$1(function(Slide2) {
            Slide2.style(prop, value, useContainer);
        });
    }
    function observeImages(elm, callback) {
        var images = $c1e4e4dda02dcd92$var$queryAll(elm, "img");
        var length = images.length;
        if (length) images.forEach(function(img) {
            bind(img, "load error", function() {
                if (!--length) callback();
            });
        });
        else callback();
    }
    function getLength(excludeClones) {
        return excludeClones ? slides.length : Slides2.length;
    }
    function isEnough() {
        return Slides2.length > options.perPage;
    }
    return {
        mount: mount,
        destroy: destroy,
        update: update,
        register: register,
        get: get,
        getIn: getIn,
        getAt: getAt,
        add: add,
        remove: remove$1,
        forEach: forEach$1,
        filter: filter,
        style: style2,
        getLength: getLength,
        isEnough: isEnough
    };
}
function $c1e4e4dda02dcd92$var$Layout(Splide2, Components2, options) {
    var _EventInterface3 = $c1e4e4dda02dcd92$var$EventInterface(Splide2), on = _EventInterface3.on, bind = _EventInterface3.bind, emit = _EventInterface3.emit;
    var Slides2 = Components2.Slides;
    var resolve = Components2.Direction.resolve;
    var _Components2$Elements2 = Components2.Elements, root = _Components2$Elements2.root, track = _Components2$Elements2.track, list = _Components2$Elements2.list;
    var getAt = Slides2.getAt, styleSlides = Slides2.style;
    var vertical;
    var rootRect;
    var overflow;
    function mount() {
        init();
        bind(window, "resize load", $c1e4e4dda02dcd92$var$Throttle($c1e4e4dda02dcd92$var$apply(emit, $c1e4e4dda02dcd92$var$EVENT_RESIZE)));
        on([
            $c1e4e4dda02dcd92$var$EVENT_UPDATED,
            $c1e4e4dda02dcd92$var$EVENT_REFRESH
        ], init);
        on($c1e4e4dda02dcd92$var$EVENT_RESIZE, resize);
    }
    function init() {
        vertical = options.direction === $c1e4e4dda02dcd92$var$TTB;
        $c1e4e4dda02dcd92$var$style(root, "maxWidth", $c1e4e4dda02dcd92$var$unit(options.width));
        $c1e4e4dda02dcd92$var$style(track, resolve("paddingLeft"), cssPadding(false));
        $c1e4e4dda02dcd92$var$style(track, resolve("paddingRight"), cssPadding(true));
        resize(true);
    }
    function resize(force) {
        var newRect = $c1e4e4dda02dcd92$var$rect(root);
        if (force || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
            $c1e4e4dda02dcd92$var$style(track, "height", cssTrackHeight());
            styleSlides(resolve("marginRight"), $c1e4e4dda02dcd92$var$unit(options.gap));
            styleSlides("width", cssSlideWidth());
            styleSlides("height", cssSlideHeight(), true);
            rootRect = newRect;
            emit($c1e4e4dda02dcd92$var$EVENT_RESIZED);
            if (overflow !== (overflow = isOverflow())) {
                $c1e4e4dda02dcd92$var$toggleClass(root, $c1e4e4dda02dcd92$var$CLASS_OVERFLOW, overflow);
                emit($c1e4e4dda02dcd92$var$EVENT_OVERFLOW, overflow);
            }
        }
    }
    function cssPadding(right) {
        var padding = options.padding;
        var prop = resolve(right ? "right" : "left");
        return padding && $c1e4e4dda02dcd92$var$unit(padding[prop] || ($c1e4e4dda02dcd92$var$isObject$1(padding) ? 0 : padding)) || "0px";
    }
    function cssTrackHeight() {
        var height = "";
        if (vertical) {
            height = cssHeight();
            $c1e4e4dda02dcd92$var$assert(height, "height or heightRatio is missing.");
            height = "calc(" + height + " - " + cssPadding(false) + " - " + cssPadding(true) + ")";
        }
        return height;
    }
    function cssHeight() {
        return $c1e4e4dda02dcd92$var$unit(options.height || $c1e4e4dda02dcd92$var$rect(list).width * options.heightRatio);
    }
    function cssSlideWidth() {
        return options.autoWidth ? null : $c1e4e4dda02dcd92$var$unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
    }
    function cssSlideHeight() {
        return $c1e4e4dda02dcd92$var$unit(options.fixedHeight) || (vertical ? options.autoHeight ? null : cssSlideSize() : cssHeight());
    }
    function cssSlideSize() {
        var gap = $c1e4e4dda02dcd92$var$unit(options.gap);
        return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
    }
    function listSize() {
        return $c1e4e4dda02dcd92$var$rect(list)[resolve("width")];
    }
    function slideSize(index, withoutGap) {
        var Slide2 = getAt(index || 0);
        return Slide2 ? $c1e4e4dda02dcd92$var$rect(Slide2.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
    }
    function totalSize(index, withoutGap) {
        var Slide2 = getAt(index);
        if (Slide2) {
            var right = $c1e4e4dda02dcd92$var$rect(Slide2.slide)[resolve("right")];
            var left = $c1e4e4dda02dcd92$var$rect(list)[resolve("left")];
            return $c1e4e4dda02dcd92$var$abs(right - left) + (withoutGap ? 0 : getGap());
        }
        return 0;
    }
    function sliderSize(withoutGap) {
        return totalSize(Splide2.length - 1) - totalSize(0) + slideSize(0, withoutGap);
    }
    function getGap() {
        var Slide2 = getAt(0);
        return Slide2 && parseFloat($c1e4e4dda02dcd92$var$style(Slide2.slide, resolve("marginRight"))) || 0;
    }
    function getPadding(right) {
        return parseFloat($c1e4e4dda02dcd92$var$style(track, resolve("padding" + (right ? "Right" : "Left")))) || 0;
    }
    function isOverflow() {
        return Splide2.is($c1e4e4dda02dcd92$var$FADE) || sliderSize(true) > listSize();
    }
    return {
        mount: mount,
        resize: resize,
        listSize: listSize,
        slideSize: slideSize,
        sliderSize: sliderSize,
        totalSize: totalSize,
        getPadding: getPadding,
        isOverflow: isOverflow
    };
}
var $c1e4e4dda02dcd92$var$MULTIPLIER = 2;
function $c1e4e4dda02dcd92$var$Clones(Splide2, Components2, options) {
    var event = $c1e4e4dda02dcd92$var$EventInterface(Splide2);
    var on = event.on;
    var Elements2 = Components2.Elements, Slides2 = Components2.Slides;
    var resolve = Components2.Direction.resolve;
    var clones = [];
    var cloneCount;
    function mount() {
        on($c1e4e4dda02dcd92$var$EVENT_REFRESH, remount);
        on([
            $c1e4e4dda02dcd92$var$EVENT_UPDATED,
            $c1e4e4dda02dcd92$var$EVENT_RESIZE
        ], observe);
        if (cloneCount = computeCloneCount()) {
            generate(cloneCount);
            Components2.Layout.resize(true);
        }
    }
    function remount() {
        destroy();
        mount();
    }
    function destroy() {
        $c1e4e4dda02dcd92$var$remove(clones);
        $c1e4e4dda02dcd92$var$empty(clones);
        event.destroy();
    }
    function observe() {
        var count = computeCloneCount();
        if (cloneCount !== count) {
            if (cloneCount < count || !count) event.emit($c1e4e4dda02dcd92$var$EVENT_REFRESH);
        }
    }
    function generate(count) {
        var slides = Slides2.get().slice();
        var length = slides.length;
        if (length) {
            while(slides.length < count)$c1e4e4dda02dcd92$var$push(slides, slides);
            $c1e4e4dda02dcd92$var$push(slides.slice(-count), slides.slice(0, count)).forEach(function(Slide2, index) {
                var isHead = index < count;
                var clone = cloneDeep(Slide2.slide, index);
                isHead ? $c1e4e4dda02dcd92$var$before(clone, slides[0].slide) : $c1e4e4dda02dcd92$var$append(Elements2.list, clone);
                $c1e4e4dda02dcd92$var$push(clones, clone);
                Slides2.register(clone, index - count + (isHead ? 0 : length), Slide2.index);
            });
        }
    }
    function cloneDeep(elm, index) {
        var clone = elm.cloneNode(true);
        $c1e4e4dda02dcd92$var$addClass(clone, options.classes.clone);
        clone.id = Splide2.root.id + "-clone" + $c1e4e4dda02dcd92$var$pad(index + 1);
        return clone;
    }
    function computeCloneCount() {
        var clones2 = options.clones;
        if (!Splide2.is($c1e4e4dda02dcd92$var$LOOP)) clones2 = 0;
        else if ($c1e4e4dda02dcd92$var$isUndefined(clones2)) {
            var fixedSize = options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
            var fixedCount = fixedSize && $c1e4e4dda02dcd92$var$ceil($c1e4e4dda02dcd92$var$rect(Elements2.track)[resolve("width")] / fixedSize);
            clones2 = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage * $c1e4e4dda02dcd92$var$MULTIPLIER;
        }
        return clones2;
    }
    return {
        mount: mount,
        destroy: destroy
    };
}
function $c1e4e4dda02dcd92$var$Move(Splide2, Components2, options) {
    var _EventInterface4 = $c1e4e4dda02dcd92$var$EventInterface(Splide2), on = _EventInterface4.on, emit = _EventInterface4.emit;
    var set = Splide2.state.set;
    var _Components2$Layout = Components2.Layout, slideSize = _Components2$Layout.slideSize, getPadding = _Components2$Layout.getPadding, totalSize = _Components2$Layout.totalSize, listSize = _Components2$Layout.listSize, sliderSize = _Components2$Layout.sliderSize;
    var _Components2$Directio = Components2.Direction, resolve = _Components2$Directio.resolve, orient = _Components2$Directio.orient;
    var _Components2$Elements3 = Components2.Elements, list = _Components2$Elements3.list, track = _Components2$Elements3.track;
    var Transition;
    function mount() {
        Transition = Components2.Transition;
        on([
            $c1e4e4dda02dcd92$var$EVENT_MOUNTED,
            $c1e4e4dda02dcd92$var$EVENT_RESIZED,
            $c1e4e4dda02dcd92$var$EVENT_UPDATED,
            $c1e4e4dda02dcd92$var$EVENT_REFRESH
        ], reposition);
    }
    function reposition() {
        if (!Components2.Controller.isBusy()) {
            Components2.Scroll.cancel();
            jump(Splide2.index);
            Components2.Slides.update();
        }
    }
    function move(dest, index, prev, callback) {
        if (dest !== index && canShift(dest > prev)) {
            cancel();
            translate(shift(getPosition(), dest > prev), true);
        }
        set($c1e4e4dda02dcd92$var$MOVING);
        emit($c1e4e4dda02dcd92$var$EVENT_MOVE, index, prev, dest);
        Transition.start(index, function() {
            set($c1e4e4dda02dcd92$var$IDLE);
            emit($c1e4e4dda02dcd92$var$EVENT_MOVED, index, prev, dest);
            callback && callback();
        });
    }
    function jump(index) {
        translate(toPosition(index, true));
    }
    function translate(position, preventLoop) {
        if (!Splide2.is($c1e4e4dda02dcd92$var$FADE)) {
            var destination = preventLoop ? position : loop(position);
            $c1e4e4dda02dcd92$var$style(list, "transform", "translate" + resolve("X") + "(" + destination + "px)");
            position !== destination && emit($c1e4e4dda02dcd92$var$EVENT_SHIFTED);
        }
    }
    function loop(position) {
        if (Splide2.is($c1e4e4dda02dcd92$var$LOOP)) {
            var index = toIndex(position);
            var exceededMax = index > Components2.Controller.getEnd();
            var exceededMin = index < 0;
            if (exceededMin || exceededMax) position = shift(position, exceededMax);
        }
        return position;
    }
    function shift(position, backwards) {
        var excess = position - getLimit(backwards);
        var size = sliderSize();
        position -= orient(size * ($c1e4e4dda02dcd92$var$ceil($c1e4e4dda02dcd92$var$abs(excess) / size) || 1)) * (backwards ? 1 : -1);
        return position;
    }
    function cancel() {
        translate(getPosition(), true);
        Transition.cancel();
    }
    function toIndex(position) {
        var Slides2 = Components2.Slides.get();
        var index = 0;
        var minDistance = Infinity;
        for(var i = 0; i < Slides2.length; i++){
            var slideIndex = Slides2[i].index;
            var distance = $c1e4e4dda02dcd92$var$abs(toPosition(slideIndex, true) - position);
            if (distance <= minDistance) {
                minDistance = distance;
                index = slideIndex;
            } else break;
        }
        return index;
    }
    function toPosition(index, trimming) {
        var position = orient(totalSize(index - 1) - offset(index));
        return trimming ? trim(position) : position;
    }
    function getPosition() {
        var left = resolve("left");
        return $c1e4e4dda02dcd92$var$rect(list)[left] - $c1e4e4dda02dcd92$var$rect(track)[left] + orient(getPadding(false));
    }
    function trim(position) {
        if (options.trimSpace && Splide2.is($c1e4e4dda02dcd92$var$SLIDE)) position = $c1e4e4dda02dcd92$var$clamp(position, 0, orient(sliderSize(true) - listSize()));
        return position;
    }
    function offset(index) {
        var focus2 = options.focus;
        return focus2 === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus2 * slideSize(index) || 0;
    }
    function getLimit(max2) {
        return toPosition(max2 ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
    }
    function canShift(backwards) {
        var shifted = orient(shift(getPosition(), backwards));
        return backwards ? shifted >= 0 : shifted <= list[resolve("scrollWidth")] - $c1e4e4dda02dcd92$var$rect(track)[resolve("width")];
    }
    function exceededLimit(max2, position) {
        position = $c1e4e4dda02dcd92$var$isUndefined(position) ? getPosition() : position;
        var exceededMin = max2 !== true && orient(position) < orient(getLimit(false));
        var exceededMax = max2 !== false && orient(position) > orient(getLimit(true));
        return exceededMin || exceededMax;
    }
    return {
        mount: mount,
        move: move,
        jump: jump,
        translate: translate,
        shift: shift,
        cancel: cancel,
        toIndex: toIndex,
        toPosition: toPosition,
        getPosition: getPosition,
        getLimit: getLimit,
        exceededLimit: exceededLimit,
        reposition: reposition
    };
}
function $c1e4e4dda02dcd92$var$Controller(Splide2, Components2, options) {
    var _EventInterface5 = $c1e4e4dda02dcd92$var$EventInterface(Splide2), on = _EventInterface5.on, emit = _EventInterface5.emit;
    var Move2 = Components2.Move;
    var getPosition = Move2.getPosition, getLimit = Move2.getLimit, toPosition = Move2.toPosition;
    var _Components2$Slides = Components2.Slides, isEnough = _Components2$Slides.isEnough, getLength = _Components2$Slides.getLength;
    var omitEnd = options.omitEnd;
    var isLoop = Splide2.is($c1e4e4dda02dcd92$var$LOOP);
    var isSlide = Splide2.is($c1e4e4dda02dcd92$var$SLIDE);
    var getNext = $c1e4e4dda02dcd92$var$apply(getAdjacent, false);
    var getPrev = $c1e4e4dda02dcd92$var$apply(getAdjacent, true);
    var currIndex = options.start || 0;
    var endIndex;
    var prevIndex = currIndex;
    var slideCount;
    var perMove;
    var perPage;
    function mount() {
        init();
        on([
            $c1e4e4dda02dcd92$var$EVENT_UPDATED,
            $c1e4e4dda02dcd92$var$EVENT_REFRESH,
            $c1e4e4dda02dcd92$var$EVENT_END_INDEX_CHANGED
        ], init);
        on($c1e4e4dda02dcd92$var$EVENT_RESIZED, onResized);
    }
    function init() {
        slideCount = getLength(true);
        perMove = options.perMove;
        perPage = options.perPage;
        endIndex = getEnd();
        var index = $c1e4e4dda02dcd92$var$clamp(currIndex, 0, omitEnd ? endIndex : slideCount - 1);
        if (index !== currIndex) {
            currIndex = index;
            Move2.reposition();
        }
    }
    function onResized() {
        if (endIndex !== getEnd()) emit($c1e4e4dda02dcd92$var$EVENT_END_INDEX_CHANGED);
    }
    function go(control, allowSameIndex, callback) {
        if (!isBusy()) {
            var dest = parse(control);
            var index = loop(dest);
            if (index > -1 && (allowSameIndex || index !== currIndex)) {
                setIndex(index);
                Move2.move(dest, index, prevIndex, callback);
            }
        }
    }
    function scroll(destination, duration, snap, callback) {
        Components2.Scroll.scroll(destination, duration, snap, function() {
            var index = loop(Move2.toIndex(getPosition()));
            setIndex(omitEnd ? $c1e4e4dda02dcd92$var$min(index, endIndex) : index);
            callback && callback();
        });
    }
    function parse(control) {
        var index = currIndex;
        if ($c1e4e4dda02dcd92$var$isString(control)) {
            var _ref = control.match(/([+\-<>])(\d+)?/) || [], indicator = _ref[1], number = _ref[2];
            if (indicator === "+" || indicator === "-") index = computeDestIndex(currIndex + +("" + indicator + (+number || 1)), currIndex);
            else if (indicator === ">") index = number ? toIndex(+number) : getNext(true);
            else if (indicator === "<") index = getPrev(true);
        } else index = isLoop ? control : $c1e4e4dda02dcd92$var$clamp(control, 0, endIndex);
        return index;
    }
    function getAdjacent(prev, destination) {
        var number = perMove || (hasFocus() ? 1 : perPage);
        var dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex, !(perMove || hasFocus()));
        if (dest === -1 && isSlide) {
            if (!$c1e4e4dda02dcd92$var$approximatelyEqual(getPosition(), getLimit(!prev), 1)) return prev ? 0 : endIndex;
        }
        return destination ? dest : loop(dest);
    }
    function computeDestIndex(dest, from, snapPage) {
        if (isEnough() || hasFocus()) {
            var index = computeMovableDestIndex(dest);
            if (index !== dest) {
                from = dest;
                dest = index;
                snapPage = false;
            }
            if (dest < 0 || dest > endIndex) {
                if (!perMove && ($c1e4e4dda02dcd92$var$between(0, dest, from, true) || $c1e4e4dda02dcd92$var$between(endIndex, from, dest, true))) dest = toIndex(toPage(dest));
                else {
                    if (isLoop) dest = snapPage ? dest < 0 ? -(slideCount % perPage || perPage) : slideCount : dest;
                    else if (options.rewind) dest = dest < 0 ? endIndex : 0;
                    else dest = -1;
                }
            } else if (snapPage && dest !== from) dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
        } else dest = -1;
        return dest;
    }
    function computeMovableDestIndex(dest) {
        if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
            var position = getPosition();
            while(position === toPosition(dest, true) && $c1e4e4dda02dcd92$var$between(dest, 0, Splide2.length - 1, !options.rewind))dest < currIndex ? --dest : ++dest;
        }
        return dest;
    }
    function loop(index) {
        return isLoop ? (index + slideCount) % slideCount || 0 : index;
    }
    function getEnd() {
        var end = slideCount - (hasFocus() || isLoop && perMove ? 1 : perPage);
        while(omitEnd && end-- > 0)if (toPosition(slideCount - 1, true) !== toPosition(end, true)) {
            end++;
            break;
        }
        return $c1e4e4dda02dcd92$var$clamp(end, 0, slideCount - 1);
    }
    function toIndex(page) {
        return $c1e4e4dda02dcd92$var$clamp(hasFocus() ? page : perPage * page, 0, endIndex);
    }
    function toPage(index) {
        return hasFocus() ? $c1e4e4dda02dcd92$var$min(index, endIndex) : $c1e4e4dda02dcd92$var$floor((index >= endIndex ? slideCount - 1 : index) / perPage);
    }
    function toDest(destination) {
        var closest2 = Move2.toIndex(destination);
        return isSlide ? $c1e4e4dda02dcd92$var$clamp(closest2, 0, endIndex) : closest2;
    }
    function setIndex(index) {
        if (index !== currIndex) {
            prevIndex = currIndex;
            currIndex = index;
        }
    }
    function getIndex(prev) {
        return prev ? prevIndex : currIndex;
    }
    function hasFocus() {
        return !$c1e4e4dda02dcd92$var$isUndefined(options.focus) || options.isNavigation;
    }
    function isBusy() {
        return Splide2.state.is([
            $c1e4e4dda02dcd92$var$MOVING,
            $c1e4e4dda02dcd92$var$SCROLLING
        ]) && !!options.waitForTransition;
    }
    return {
        mount: mount,
        go: go,
        scroll: scroll,
        getNext: getNext,
        getPrev: getPrev,
        getAdjacent: getAdjacent,
        getEnd: getEnd,
        setIndex: setIndex,
        getIndex: getIndex,
        toIndex: toIndex,
        toPage: toPage,
        toDest: toDest,
        hasFocus: hasFocus,
        isBusy: isBusy
    };
}
var $c1e4e4dda02dcd92$var$XML_NAME_SPACE = "http://www.w3.org/2000/svg";
var $c1e4e4dda02dcd92$var$PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
var $c1e4e4dda02dcd92$var$SIZE = 40;
function $c1e4e4dda02dcd92$var$Arrows(Splide2, Components2, options) {
    var event = $c1e4e4dda02dcd92$var$EventInterface(Splide2);
    var on = event.on, bind = event.bind, emit = event.emit;
    var classes = options.classes, i18n = options.i18n;
    var Elements2 = Components2.Elements, Controller2 = Components2.Controller;
    var placeholder = Elements2.arrows, track = Elements2.track;
    var wrapper = placeholder;
    var prev = Elements2.prev;
    var next = Elements2.next;
    var created;
    var wrapperClasses;
    var arrows = {};
    function mount() {
        init();
        on($c1e4e4dda02dcd92$var$EVENT_UPDATED, remount);
    }
    function remount() {
        destroy();
        mount();
    }
    function init() {
        var enabled = options.arrows;
        if (enabled && !(prev && next)) createArrows();
        if (prev && next) {
            $c1e4e4dda02dcd92$var$assign(arrows, {
                prev: prev,
                next: next
            });
            $c1e4e4dda02dcd92$var$display(wrapper, enabled ? "" : "none");
            $c1e4e4dda02dcd92$var$addClass(wrapper, wrapperClasses = $c1e4e4dda02dcd92$var$CLASS_ARROWS + "--" + options.direction);
            if (enabled) {
                listen();
                update();
                $c1e4e4dda02dcd92$var$setAttribute([
                    prev,
                    next
                ], $c1e4e4dda02dcd92$var$ARIA_CONTROLS, track.id);
                emit($c1e4e4dda02dcd92$var$EVENT_ARROWS_MOUNTED, prev, next);
            }
        }
    }
    function destroy() {
        event.destroy();
        $c1e4e4dda02dcd92$var$removeClass(wrapper, wrapperClasses);
        if (created) {
            $c1e4e4dda02dcd92$var$remove(placeholder ? [
                prev,
                next
            ] : wrapper);
            prev = next = null;
        } else $c1e4e4dda02dcd92$var$removeAttribute([
            prev,
            next
        ], $c1e4e4dda02dcd92$var$ALL_ATTRIBUTES);
    }
    function listen() {
        on([
            $c1e4e4dda02dcd92$var$EVENT_MOUNTED,
            $c1e4e4dda02dcd92$var$EVENT_MOVED,
            $c1e4e4dda02dcd92$var$EVENT_REFRESH,
            $c1e4e4dda02dcd92$var$EVENT_SCROLLED,
            $c1e4e4dda02dcd92$var$EVENT_END_INDEX_CHANGED
        ], update);
        bind(next, "click", $c1e4e4dda02dcd92$var$apply(go, ">"));
        bind(prev, "click", $c1e4e4dda02dcd92$var$apply(go, "<"));
    }
    function go(control) {
        Controller2.go(control, true);
    }
    function createArrows() {
        wrapper = placeholder || $c1e4e4dda02dcd92$var$create("div", classes.arrows);
        prev = createArrow(true);
        next = createArrow(false);
        created = true;
        $c1e4e4dda02dcd92$var$append(wrapper, [
            prev,
            next
        ]);
        !placeholder && $c1e4e4dda02dcd92$var$before(wrapper, track);
    }
    function createArrow(prev2) {
        var arrow = '<button class="' + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + '" type="button"><svg xmlns="' + $c1e4e4dda02dcd92$var$XML_NAME_SPACE + '" viewBox="0 0 ' + $c1e4e4dda02dcd92$var$SIZE + " " + $c1e4e4dda02dcd92$var$SIZE + '" width="' + $c1e4e4dda02dcd92$var$SIZE + '" height="' + $c1e4e4dda02dcd92$var$SIZE + '" focusable="false"><path d="' + (options.arrowPath || $c1e4e4dda02dcd92$var$PATH) + '" />';
        return $c1e4e4dda02dcd92$var$parseHtml(arrow);
    }
    function update() {
        if (prev && next) {
            var index = Splide2.index;
            var prevIndex = Controller2.getPrev();
            var nextIndex = Controller2.getNext();
            var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
            var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
            prev.disabled = prevIndex < 0;
            next.disabled = nextIndex < 0;
            $c1e4e4dda02dcd92$var$setAttribute(prev, $c1e4e4dda02dcd92$var$ARIA_LABEL, prevLabel);
            $c1e4e4dda02dcd92$var$setAttribute(next, $c1e4e4dda02dcd92$var$ARIA_LABEL, nextLabel);
            emit($c1e4e4dda02dcd92$var$EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
        }
    }
    return {
        arrows: arrows,
        mount: mount,
        destroy: destroy,
        update: update
    };
}
var $c1e4e4dda02dcd92$var$INTERVAL_DATA_ATTRIBUTE = $c1e4e4dda02dcd92$var$DATA_ATTRIBUTE + "-interval";
function $c1e4e4dda02dcd92$var$Autoplay(Splide2, Components2, options) {
    var _EventInterface6 = $c1e4e4dda02dcd92$var$EventInterface(Splide2), on = _EventInterface6.on, bind = _EventInterface6.bind, emit = _EventInterface6.emit;
    var interval = $c1e4e4dda02dcd92$var$RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), onAnimationFrame);
    var isPaused = interval.isPaused;
    var Elements2 = Components2.Elements, _Components2$Elements4 = Components2.Elements, root = _Components2$Elements4.root, toggle = _Components2$Elements4.toggle;
    var autoplay = options.autoplay;
    var hovered;
    var focused;
    var stopped = autoplay === "pause";
    function mount() {
        if (autoplay) {
            listen();
            toggle && $c1e4e4dda02dcd92$var$setAttribute(toggle, $c1e4e4dda02dcd92$var$ARIA_CONTROLS, Elements2.track.id);
            stopped || play();
            update();
        }
    }
    function listen() {
        if (options.pauseOnHover) bind(root, "mouseenter mouseleave", function(e) {
            hovered = e.type === "mouseenter";
            autoToggle();
        });
        if (options.pauseOnFocus) bind(root, "focusin focusout", function(e) {
            focused = e.type === "focusin";
            autoToggle();
        });
        if (toggle) bind(toggle, "click", function() {
            stopped ? play() : pause(true);
        });
        on([
            $c1e4e4dda02dcd92$var$EVENT_MOVE,
            $c1e4e4dda02dcd92$var$EVENT_SCROLL,
            $c1e4e4dda02dcd92$var$EVENT_REFRESH
        ], interval.rewind);
        on($c1e4e4dda02dcd92$var$EVENT_MOVE, onMove);
    }
    function play() {
        if (isPaused() && Components2.Slides.isEnough()) {
            interval.start(!options.resetProgress);
            focused = hovered = stopped = false;
            update();
            emit($c1e4e4dda02dcd92$var$EVENT_AUTOPLAY_PLAY);
        }
    }
    function pause(stop) {
        if (stop === void 0) stop = true;
        stopped = !!stop;
        update();
        if (!isPaused()) {
            interval.pause();
            emit($c1e4e4dda02dcd92$var$EVENT_AUTOPLAY_PAUSE);
        }
    }
    function autoToggle() {
        if (!stopped) hovered || focused ? pause(false) : play();
    }
    function update() {
        if (toggle) {
            $c1e4e4dda02dcd92$var$toggleClass(toggle, $c1e4e4dda02dcd92$var$CLASS_ACTIVE, !stopped);
            $c1e4e4dda02dcd92$var$setAttribute(toggle, $c1e4e4dda02dcd92$var$ARIA_LABEL, options.i18n[stopped ? "play" : "pause"]);
        }
    }
    function onAnimationFrame(rate) {
        var bar = Elements2.bar;
        bar && $c1e4e4dda02dcd92$var$style(bar, "width", rate * 100 + "%");
        emit($c1e4e4dda02dcd92$var$EVENT_AUTOPLAY_PLAYING, rate);
    }
    function onMove(index) {
        var Slide2 = Components2.Slides.getAt(index);
        interval.set(Slide2 && +$c1e4e4dda02dcd92$var$getAttribute(Slide2.slide, $c1e4e4dda02dcd92$var$INTERVAL_DATA_ATTRIBUTE) || options.interval);
    }
    return {
        mount: mount,
        destroy: interval.cancel,
        play: play,
        pause: pause,
        isPaused: isPaused
    };
}
function $c1e4e4dda02dcd92$var$Cover(Splide2, Components2, options) {
    var _EventInterface7 = $c1e4e4dda02dcd92$var$EventInterface(Splide2), on = _EventInterface7.on;
    function mount() {
        if (options.cover) {
            on($c1e4e4dda02dcd92$var$EVENT_LAZYLOAD_LOADED, $c1e4e4dda02dcd92$var$apply(toggle, true));
            on([
                $c1e4e4dda02dcd92$var$EVENT_MOUNTED,
                $c1e4e4dda02dcd92$var$EVENT_UPDATED,
                $c1e4e4dda02dcd92$var$EVENT_REFRESH
            ], $c1e4e4dda02dcd92$var$apply(cover, true));
        }
    }
    function cover(cover2) {
        Components2.Slides.forEach(function(Slide2) {
            var img = $c1e4e4dda02dcd92$var$child(Slide2.container || Slide2.slide, "img");
            if (img && img.src) toggle(cover2, img, Slide2);
        });
    }
    function toggle(cover2, img, Slide2) {
        Slide2.style("background", cover2 ? 'center/cover no-repeat url("' + img.src + '")' : "", true);
        $c1e4e4dda02dcd92$var$display(img, cover2 ? "none" : "");
    }
    return {
        mount: mount,
        destroy: $c1e4e4dda02dcd92$var$apply(cover, false)
    };
}
var $c1e4e4dda02dcd92$var$BOUNCE_DIFF_THRESHOLD = 10;
var $c1e4e4dda02dcd92$var$BOUNCE_DURATION = 600;
var $c1e4e4dda02dcd92$var$FRICTION_FACTOR = 0.6;
var $c1e4e4dda02dcd92$var$BASE_VELOCITY = 1.5;
var $c1e4e4dda02dcd92$var$MIN_DURATION = 800;
function $c1e4e4dda02dcd92$var$Scroll(Splide2, Components2, options) {
    var _EventInterface8 = $c1e4e4dda02dcd92$var$EventInterface(Splide2), on = _EventInterface8.on, emit = _EventInterface8.emit;
    var set = Splide2.state.set;
    var Move2 = Components2.Move;
    var getPosition = Move2.getPosition, getLimit = Move2.getLimit, exceededLimit = Move2.exceededLimit, translate = Move2.translate;
    var isSlide = Splide2.is($c1e4e4dda02dcd92$var$SLIDE);
    var interval;
    var callback;
    var friction = 1;
    function mount() {
        on($c1e4e4dda02dcd92$var$EVENT_MOVE, clear);
        on([
            $c1e4e4dda02dcd92$var$EVENT_UPDATED,
            $c1e4e4dda02dcd92$var$EVENT_REFRESH
        ], cancel);
    }
    function scroll(destination, duration, snap, onScrolled, noConstrain) {
        var from = getPosition();
        clear();
        if (snap && (!isSlide || !exceededLimit())) {
            var size = Components2.Layout.sliderSize();
            var offset = $c1e4e4dda02dcd92$var$sign(destination) * size * $c1e4e4dda02dcd92$var$floor($c1e4e4dda02dcd92$var$abs(destination) / size) || 0;
            destination = Move2.toPosition(Components2.Controller.toDest(destination % size)) + offset;
        }
        var noDistance = $c1e4e4dda02dcd92$var$approximatelyEqual(from, destination, 1);
        friction = 1;
        duration = noDistance ? 0 : duration || $c1e4e4dda02dcd92$var$max($c1e4e4dda02dcd92$var$abs(destination - from) / $c1e4e4dda02dcd92$var$BASE_VELOCITY, $c1e4e4dda02dcd92$var$MIN_DURATION);
        callback = onScrolled;
        interval = $c1e4e4dda02dcd92$var$RequestInterval(duration, onEnd, $c1e4e4dda02dcd92$var$apply(update, from, destination, noConstrain), 1);
        set($c1e4e4dda02dcd92$var$SCROLLING);
        emit($c1e4e4dda02dcd92$var$EVENT_SCROLL);
        interval.start();
    }
    function onEnd() {
        set($c1e4e4dda02dcd92$var$IDLE);
        callback && callback();
        emit($c1e4e4dda02dcd92$var$EVENT_SCROLLED);
    }
    function update(from, to, noConstrain, rate) {
        var position = getPosition();
        var target = from + (to - from) * easing(rate);
        var diff = (target - position) * friction;
        translate(position + diff);
        if (isSlide && !noConstrain && exceededLimit()) {
            friction *= $c1e4e4dda02dcd92$var$FRICTION_FACTOR;
            if ($c1e4e4dda02dcd92$var$abs(diff) < $c1e4e4dda02dcd92$var$BOUNCE_DIFF_THRESHOLD) scroll(getLimit(exceededLimit(true)), $c1e4e4dda02dcd92$var$BOUNCE_DURATION, false, callback, true);
        }
    }
    function clear() {
        if (interval) interval.cancel();
    }
    function cancel() {
        if (interval && !interval.isPaused()) {
            clear();
            onEnd();
        }
    }
    function easing(t) {
        var easingFunc = options.easingFunc;
        return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
    }
    return {
        mount: mount,
        destroy: clear,
        scroll: scroll,
        cancel: cancel
    };
}
var $c1e4e4dda02dcd92$var$SCROLL_LISTENER_OPTIONS = {
    passive: false,
    capture: true
};
function $c1e4e4dda02dcd92$var$Drag(Splide2, Components2, options) {
    var _EventInterface9 = $c1e4e4dda02dcd92$var$EventInterface(Splide2), on = _EventInterface9.on, emit = _EventInterface9.emit, bind = _EventInterface9.bind, unbind = _EventInterface9.unbind;
    var state = Splide2.state;
    var Move2 = Components2.Move, Scroll2 = Components2.Scroll, Controller2 = Components2.Controller, track = Components2.Elements.track, reduce = Components2.Media.reduce;
    var _Components2$Directio2 = Components2.Direction, resolve = _Components2$Directio2.resolve, orient = _Components2$Directio2.orient;
    var getPosition = Move2.getPosition, exceededLimit = Move2.exceededLimit;
    var basePosition;
    var baseEvent;
    var prevBaseEvent;
    var isFree;
    var dragging;
    var exceeded = false;
    var clickPrevented;
    var disabled;
    var target;
    function mount() {
        bind(track, $c1e4e4dda02dcd92$var$POINTER_MOVE_EVENTS, $c1e4e4dda02dcd92$var$noop, $c1e4e4dda02dcd92$var$SCROLL_LISTENER_OPTIONS);
        bind(track, $c1e4e4dda02dcd92$var$POINTER_UP_EVENTS, $c1e4e4dda02dcd92$var$noop, $c1e4e4dda02dcd92$var$SCROLL_LISTENER_OPTIONS);
        bind(track, $c1e4e4dda02dcd92$var$POINTER_DOWN_EVENTS, onPointerDown, $c1e4e4dda02dcd92$var$SCROLL_LISTENER_OPTIONS);
        bind(track, "click", onClick, {
            capture: true
        });
        bind(track, "dragstart", $c1e4e4dda02dcd92$var$prevent);
        on([
            $c1e4e4dda02dcd92$var$EVENT_MOUNTED,
            $c1e4e4dda02dcd92$var$EVENT_UPDATED
        ], init);
    }
    function init() {
        var drag = options.drag;
        disable(!drag);
        isFree = drag === "free";
    }
    function onPointerDown(e) {
        clickPrevented = false;
        if (!disabled) {
            var isTouch = isTouchEvent(e);
            if (isDraggable(e.target) && (isTouch || !e.button)) {
                if (!Controller2.isBusy()) {
                    target = isTouch ? track : window;
                    dragging = state.is([
                        $c1e4e4dda02dcd92$var$MOVING,
                        $c1e4e4dda02dcd92$var$SCROLLING
                    ]);
                    prevBaseEvent = null;
                    bind(target, $c1e4e4dda02dcd92$var$POINTER_MOVE_EVENTS, onPointerMove, $c1e4e4dda02dcd92$var$SCROLL_LISTENER_OPTIONS);
                    bind(target, $c1e4e4dda02dcd92$var$POINTER_UP_EVENTS, onPointerUp, $c1e4e4dda02dcd92$var$SCROLL_LISTENER_OPTIONS);
                    Move2.cancel();
                    Scroll2.cancel();
                    save(e);
                } else $c1e4e4dda02dcd92$var$prevent(e, true);
            }
        }
    }
    function onPointerMove(e) {
        if (!state.is($c1e4e4dda02dcd92$var$DRAGGING)) {
            state.set($c1e4e4dda02dcd92$var$DRAGGING);
            emit($c1e4e4dda02dcd92$var$EVENT_DRAG);
        }
        if (e.cancelable) {
            if (dragging) {
                Move2.translate(basePosition + constrain(diffCoord(e)));
                var expired = diffTime(e) > $c1e4e4dda02dcd92$var$LOG_INTERVAL;
                var hasExceeded = exceeded !== (exceeded = exceededLimit());
                if (expired || hasExceeded) save(e);
                clickPrevented = true;
                emit($c1e4e4dda02dcd92$var$EVENT_DRAGGING);
                $c1e4e4dda02dcd92$var$prevent(e);
            } else if (isSliderDirection(e)) {
                dragging = shouldStart(e);
                $c1e4e4dda02dcd92$var$prevent(e);
            }
        }
    }
    function onPointerUp(e) {
        if (state.is($c1e4e4dda02dcd92$var$DRAGGING)) {
            state.set($c1e4e4dda02dcd92$var$IDLE);
            emit($c1e4e4dda02dcd92$var$EVENT_DRAGGED);
        }
        if (dragging) {
            move(e);
            $c1e4e4dda02dcd92$var$prevent(e);
        }
        unbind(target, $c1e4e4dda02dcd92$var$POINTER_MOVE_EVENTS, onPointerMove);
        unbind(target, $c1e4e4dda02dcd92$var$POINTER_UP_EVENTS, onPointerUp);
        dragging = false;
    }
    function onClick(e) {
        if (!disabled && clickPrevented) $c1e4e4dda02dcd92$var$prevent(e, true);
    }
    function save(e) {
        prevBaseEvent = baseEvent;
        baseEvent = e;
        basePosition = getPosition();
    }
    function move(e) {
        var velocity = computeVelocity(e);
        var destination = computeDestination(velocity);
        var rewind = options.rewind && options.rewindByDrag;
        reduce(false);
        if (isFree) Controller2.scroll(destination, 0, options.snap);
        else if (Splide2.is($c1e4e4dda02dcd92$var$FADE)) Controller2.go(orient($c1e4e4dda02dcd92$var$sign(velocity)) < 0 ? rewind ? "<" : "-" : rewind ? ">" : "+");
        else if (Splide2.is($c1e4e4dda02dcd92$var$SLIDE) && exceeded && rewind) Controller2.go(exceededLimit(true) ? ">" : "<");
        else Controller2.go(Controller2.toDest(destination), true);
        reduce(true);
    }
    function shouldStart(e) {
        var thresholds = options.dragMinThreshold;
        var isObj = $c1e4e4dda02dcd92$var$isObject$1(thresholds);
        var mouse = isObj && thresholds.mouse || 0;
        var touch = (isObj ? thresholds.touch : +thresholds) || 10;
        return $c1e4e4dda02dcd92$var$abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
    }
    function isSliderDirection(e) {
        return $c1e4e4dda02dcd92$var$abs(diffCoord(e)) > $c1e4e4dda02dcd92$var$abs(diffCoord(e, true));
    }
    function computeVelocity(e) {
        if (Splide2.is($c1e4e4dda02dcd92$var$LOOP) || !exceeded) {
            var time = diffTime(e);
            if (time && time < $c1e4e4dda02dcd92$var$LOG_INTERVAL) return diffCoord(e) / time;
        }
        return 0;
    }
    function computeDestination(velocity) {
        return getPosition() + $c1e4e4dda02dcd92$var$sign(velocity) * $c1e4e4dda02dcd92$var$min($c1e4e4dda02dcd92$var$abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
    }
    function diffCoord(e, orthogonal) {
        return coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal);
    }
    function diffTime(e) {
        return $c1e4e4dda02dcd92$var$timeOf(e) - $c1e4e4dda02dcd92$var$timeOf(getBaseEvent(e));
    }
    function getBaseEvent(e) {
        return baseEvent === e && prevBaseEvent || baseEvent;
    }
    function coordOf(e, orthogonal) {
        return (isTouchEvent(e) ? e.changedTouches[0] : e)["page" + resolve(orthogonal ? "Y" : "X")];
    }
    function constrain(diff) {
        return diff / (exceeded && Splide2.is($c1e4e4dda02dcd92$var$SLIDE) ? $c1e4e4dda02dcd92$var$FRICTION : 1);
    }
    function isDraggable(target2) {
        var noDrag = options.noDrag;
        return !$c1e4e4dda02dcd92$var$matches(target2, "." + $c1e4e4dda02dcd92$var$CLASS_PAGINATION_PAGE + ", ." + $c1e4e4dda02dcd92$var$CLASS_ARROW) && (!noDrag || !$c1e4e4dda02dcd92$var$matches(target2, noDrag));
    }
    function isTouchEvent(e) {
        return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
    }
    function isDragging() {
        return dragging;
    }
    function disable(value) {
        disabled = value;
    }
    return {
        mount: mount,
        disable: disable,
        isDragging: isDragging
    };
}
var $c1e4e4dda02dcd92$var$NORMALIZATION_MAP = {
    Spacebar: " ",
    Right: $c1e4e4dda02dcd92$var$ARROW_RIGHT,
    Left: $c1e4e4dda02dcd92$var$ARROW_LEFT,
    Up: $c1e4e4dda02dcd92$var$ARROW_UP,
    Down: $c1e4e4dda02dcd92$var$ARROW_DOWN
};
function $c1e4e4dda02dcd92$var$normalizeKey(key) {
    key = $c1e4e4dda02dcd92$var$isString(key) ? key : key.key;
    return $c1e4e4dda02dcd92$var$NORMALIZATION_MAP[key] || key;
}
var $c1e4e4dda02dcd92$var$KEYBOARD_EVENT = "keydown";
function $c1e4e4dda02dcd92$var$Keyboard(Splide2, Components2, options) {
    var _EventInterface10 = $c1e4e4dda02dcd92$var$EventInterface(Splide2), on = _EventInterface10.on, bind = _EventInterface10.bind, unbind = _EventInterface10.unbind;
    var root = Splide2.root;
    var resolve = Components2.Direction.resolve;
    var target;
    var disabled;
    function mount() {
        init();
        on($c1e4e4dda02dcd92$var$EVENT_UPDATED, destroy);
        on($c1e4e4dda02dcd92$var$EVENT_UPDATED, init);
        on($c1e4e4dda02dcd92$var$EVENT_MOVE, onMove);
    }
    function init() {
        var keyboard = options.keyboard;
        if (keyboard) {
            target = keyboard === "global" ? window : root;
            bind(target, $c1e4e4dda02dcd92$var$KEYBOARD_EVENT, onKeydown);
        }
    }
    function destroy() {
        unbind(target, $c1e4e4dda02dcd92$var$KEYBOARD_EVENT);
    }
    function disable(value) {
        disabled = value;
    }
    function onMove() {
        var _disabled = disabled;
        disabled = true;
        $c1e4e4dda02dcd92$var$nextTick(function() {
            disabled = _disabled;
        });
    }
    function onKeydown(e) {
        if (!disabled) {
            var key = $c1e4e4dda02dcd92$var$normalizeKey(e);
            if (key === resolve($c1e4e4dda02dcd92$var$ARROW_LEFT)) Splide2.go("<");
            else if (key === resolve($c1e4e4dda02dcd92$var$ARROW_RIGHT)) Splide2.go(">");
        }
    }
    return {
        mount: mount,
        destroy: destroy,
        disable: disable
    };
}
var $c1e4e4dda02dcd92$var$SRC_DATA_ATTRIBUTE = $c1e4e4dda02dcd92$var$DATA_ATTRIBUTE + "-lazy";
var $c1e4e4dda02dcd92$var$SRCSET_DATA_ATTRIBUTE = $c1e4e4dda02dcd92$var$SRC_DATA_ATTRIBUTE + "-srcset";
var $c1e4e4dda02dcd92$var$IMAGE_SELECTOR = "[" + $c1e4e4dda02dcd92$var$SRC_DATA_ATTRIBUTE + "], [" + $c1e4e4dda02dcd92$var$SRCSET_DATA_ATTRIBUTE + "]";
function $c1e4e4dda02dcd92$var$LazyLoad(Splide2, Components2, options) {
    var _EventInterface11 = $c1e4e4dda02dcd92$var$EventInterface(Splide2), on = _EventInterface11.on, off = _EventInterface11.off, bind = _EventInterface11.bind, emit = _EventInterface11.emit;
    var isSequential = options.lazyLoad === "sequential";
    var events = [
        $c1e4e4dda02dcd92$var$EVENT_MOVED,
        $c1e4e4dda02dcd92$var$EVENT_SCROLLED
    ];
    var entries = [];
    function mount() {
        if (options.lazyLoad) {
            init();
            on($c1e4e4dda02dcd92$var$EVENT_REFRESH, init);
        }
    }
    function init() {
        $c1e4e4dda02dcd92$var$empty(entries);
        register();
        if (isSequential) loadNext();
        else {
            off(events);
            on(events, check);
            check();
        }
    }
    function register() {
        Components2.Slides.forEach(function(Slide2) {
            $c1e4e4dda02dcd92$var$queryAll(Slide2.slide, $c1e4e4dda02dcd92$var$IMAGE_SELECTOR).forEach(function(img) {
                var src = $c1e4e4dda02dcd92$var$getAttribute(img, $c1e4e4dda02dcd92$var$SRC_DATA_ATTRIBUTE);
                var srcset = $c1e4e4dda02dcd92$var$getAttribute(img, $c1e4e4dda02dcd92$var$SRCSET_DATA_ATTRIBUTE);
                if (src !== img.src || srcset !== img.srcset) {
                    var className = options.classes.spinner;
                    var parent = img.parentElement;
                    var spinner = $c1e4e4dda02dcd92$var$child(parent, "." + className) || $c1e4e4dda02dcd92$var$create("span", className, parent);
                    entries.push([
                        img,
                        Slide2,
                        spinner
                    ]);
                    img.src || $c1e4e4dda02dcd92$var$display(img, "none");
                }
            });
        });
    }
    function check() {
        entries = entries.filter(function(data) {
            var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
            return data[1].isWithin(Splide2.index, distance) ? load(data) : true;
        });
        entries.length || off(events);
    }
    function load(data) {
        var img = data[0];
        $c1e4e4dda02dcd92$var$addClass(data[1].slide, $c1e4e4dda02dcd92$var$CLASS_LOADING);
        bind(img, "load error", $c1e4e4dda02dcd92$var$apply(onLoad, data));
        $c1e4e4dda02dcd92$var$setAttribute(img, "src", $c1e4e4dda02dcd92$var$getAttribute(img, $c1e4e4dda02dcd92$var$SRC_DATA_ATTRIBUTE));
        $c1e4e4dda02dcd92$var$setAttribute(img, "srcset", $c1e4e4dda02dcd92$var$getAttribute(img, $c1e4e4dda02dcd92$var$SRCSET_DATA_ATTRIBUTE));
        $c1e4e4dda02dcd92$var$removeAttribute(img, $c1e4e4dda02dcd92$var$SRC_DATA_ATTRIBUTE);
        $c1e4e4dda02dcd92$var$removeAttribute(img, $c1e4e4dda02dcd92$var$SRCSET_DATA_ATTRIBUTE);
    }
    function onLoad(data, e) {
        var img = data[0], Slide2 = data[1];
        $c1e4e4dda02dcd92$var$removeClass(Slide2.slide, $c1e4e4dda02dcd92$var$CLASS_LOADING);
        if (e.type !== "error") {
            $c1e4e4dda02dcd92$var$remove(data[2]);
            $c1e4e4dda02dcd92$var$display(img, "");
            emit($c1e4e4dda02dcd92$var$EVENT_LAZYLOAD_LOADED, img, Slide2);
            emit($c1e4e4dda02dcd92$var$EVENT_RESIZE);
        }
        isSequential && loadNext();
    }
    function loadNext() {
        entries.length && load(entries.shift());
    }
    return {
        mount: mount,
        destroy: $c1e4e4dda02dcd92$var$apply($c1e4e4dda02dcd92$var$empty, entries),
        check: check
    };
}
function $c1e4e4dda02dcd92$var$Pagination(Splide2, Components2, options) {
    var event = $c1e4e4dda02dcd92$var$EventInterface(Splide2);
    var on = event.on, emit = event.emit, bind = event.bind;
    var Slides2 = Components2.Slides, Elements2 = Components2.Elements, Controller2 = Components2.Controller;
    var hasFocus = Controller2.hasFocus, getIndex = Controller2.getIndex, go = Controller2.go;
    var resolve = Components2.Direction.resolve;
    var placeholder = Elements2.pagination;
    var items = [];
    var list;
    var paginationClasses;
    function mount() {
        destroy();
        on([
            $c1e4e4dda02dcd92$var$EVENT_UPDATED,
            $c1e4e4dda02dcd92$var$EVENT_REFRESH,
            $c1e4e4dda02dcd92$var$EVENT_END_INDEX_CHANGED
        ], mount);
        var enabled = options.pagination;
        placeholder && $c1e4e4dda02dcd92$var$display(placeholder, enabled ? "" : "none");
        if (enabled) {
            on([
                $c1e4e4dda02dcd92$var$EVENT_MOVE,
                $c1e4e4dda02dcd92$var$EVENT_SCROLL,
                $c1e4e4dda02dcd92$var$EVENT_SCROLLED
            ], update);
            createPagination();
            update();
            emit($c1e4e4dda02dcd92$var$EVENT_PAGINATION_MOUNTED, {
                list: list,
                items: items
            }, getAt(Splide2.index));
        }
    }
    function destroy() {
        if (list) {
            $c1e4e4dda02dcd92$var$remove(placeholder ? $c1e4e4dda02dcd92$var$slice(list.children) : list);
            $c1e4e4dda02dcd92$var$removeClass(list, paginationClasses);
            $c1e4e4dda02dcd92$var$empty(items);
            list = null;
        }
        event.destroy();
    }
    function createPagination() {
        var length = Splide2.length;
        var classes = options.classes, i18n = options.i18n, perPage = options.perPage;
        var max2 = hasFocus() ? Controller2.getEnd() + 1 : $c1e4e4dda02dcd92$var$ceil(length / perPage);
        list = placeholder || $c1e4e4dda02dcd92$var$create("ul", classes.pagination, Elements2.track.parentElement);
        $c1e4e4dda02dcd92$var$addClass(list, paginationClasses = $c1e4e4dda02dcd92$var$CLASS_PAGINATION + "--" + getDirection());
        $c1e4e4dda02dcd92$var$setAttribute(list, $c1e4e4dda02dcd92$var$ROLE, "tablist");
        $c1e4e4dda02dcd92$var$setAttribute(list, $c1e4e4dda02dcd92$var$ARIA_LABEL, i18n.select);
        $c1e4e4dda02dcd92$var$setAttribute(list, $c1e4e4dda02dcd92$var$ARIA_ORIENTATION, getDirection() === $c1e4e4dda02dcd92$var$TTB ? "vertical" : "");
        for(var i = 0; i < max2; i++){
            var li = $c1e4e4dda02dcd92$var$create("li", null, list);
            var button = $c1e4e4dda02dcd92$var$create("button", {
                class: classes.page,
                type: "button"
            }, li);
            var controls = Slides2.getIn(i).map(function(Slide2) {
                return Slide2.slide.id;
            });
            var text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
            bind(button, "click", $c1e4e4dda02dcd92$var$apply(onClick, i));
            if (options.paginationKeyboard) bind(button, "keydown", $c1e4e4dda02dcd92$var$apply(onKeydown, i));
            $c1e4e4dda02dcd92$var$setAttribute(li, $c1e4e4dda02dcd92$var$ROLE, "presentation");
            $c1e4e4dda02dcd92$var$setAttribute(button, $c1e4e4dda02dcd92$var$ROLE, "tab");
            $c1e4e4dda02dcd92$var$setAttribute(button, $c1e4e4dda02dcd92$var$ARIA_CONTROLS, controls.join(" "));
            $c1e4e4dda02dcd92$var$setAttribute(button, $c1e4e4dda02dcd92$var$ARIA_LABEL, $c1e4e4dda02dcd92$var$format(text, i + 1));
            $c1e4e4dda02dcd92$var$setAttribute(button, $c1e4e4dda02dcd92$var$TAB_INDEX, -1);
            items.push({
                li: li,
                button: button,
                page: i
            });
        }
    }
    function onClick(page) {
        go(">" + page, true);
    }
    function onKeydown(page, e) {
        var length = items.length;
        var key = $c1e4e4dda02dcd92$var$normalizeKey(e);
        var dir = getDirection();
        var nextPage = -1;
        if (key === resolve($c1e4e4dda02dcd92$var$ARROW_RIGHT, false, dir)) nextPage = ++page % length;
        else if (key === resolve($c1e4e4dda02dcd92$var$ARROW_LEFT, false, dir)) nextPage = (--page + length) % length;
        else if (key === "Home") nextPage = 0;
        else if (key === "End") nextPage = length - 1;
        var item = items[nextPage];
        if (item) {
            $c1e4e4dda02dcd92$var$focus(item.button);
            go(">" + nextPage);
            $c1e4e4dda02dcd92$var$prevent(e, true);
        }
    }
    function getDirection() {
        return options.paginationDirection || options.direction;
    }
    function getAt(index) {
        return items[Controller2.toPage(index)];
    }
    function update() {
        var prev = getAt(getIndex(true));
        var curr = getAt(getIndex());
        if (prev) {
            var button = prev.button;
            $c1e4e4dda02dcd92$var$removeClass(button, $c1e4e4dda02dcd92$var$CLASS_ACTIVE);
            $c1e4e4dda02dcd92$var$removeAttribute(button, $c1e4e4dda02dcd92$var$ARIA_SELECTED);
            $c1e4e4dda02dcd92$var$setAttribute(button, $c1e4e4dda02dcd92$var$TAB_INDEX, -1);
        }
        if (curr) {
            var _button = curr.button;
            $c1e4e4dda02dcd92$var$addClass(_button, $c1e4e4dda02dcd92$var$CLASS_ACTIVE);
            $c1e4e4dda02dcd92$var$setAttribute(_button, $c1e4e4dda02dcd92$var$ARIA_SELECTED, true);
            $c1e4e4dda02dcd92$var$setAttribute(_button, $c1e4e4dda02dcd92$var$TAB_INDEX, "");
        }
        emit($c1e4e4dda02dcd92$var$EVENT_PAGINATION_UPDATED, {
            list: list,
            items: items
        }, prev, curr);
    }
    return {
        items: items,
        mount: mount,
        destroy: destroy,
        getAt: getAt,
        update: update
    };
}
var $c1e4e4dda02dcd92$var$TRIGGER_KEYS = [
    " ",
    "Enter"
];
function $c1e4e4dda02dcd92$var$Sync(Splide2, Components2, options) {
    var isNavigation = options.isNavigation, slideFocus = options.slideFocus;
    var events = [];
    function mount() {
        Splide2.splides.forEach(function(target) {
            if (!target.isParent) {
                sync(Splide2, target.splide);
                sync(target.splide, Splide2);
            }
        });
        if (isNavigation) navigate();
    }
    function destroy() {
        events.forEach(function(event) {
            event.destroy();
        });
        $c1e4e4dda02dcd92$var$empty(events);
    }
    function remount() {
        destroy();
        mount();
    }
    function sync(splide, target) {
        var event = $c1e4e4dda02dcd92$var$EventInterface(splide);
        event.on($c1e4e4dda02dcd92$var$EVENT_MOVE, function(index, prev, dest) {
            target.go(target.is($c1e4e4dda02dcd92$var$LOOP) ? dest : index);
        });
        events.push(event);
    }
    function navigate() {
        var event = $c1e4e4dda02dcd92$var$EventInterface(Splide2);
        var on = event.on;
        on($c1e4e4dda02dcd92$var$EVENT_CLICK, onClick);
        on($c1e4e4dda02dcd92$var$EVENT_SLIDE_KEYDOWN, onKeydown);
        on([
            $c1e4e4dda02dcd92$var$EVENT_MOUNTED,
            $c1e4e4dda02dcd92$var$EVENT_UPDATED
        ], update);
        events.push(event);
        event.emit($c1e4e4dda02dcd92$var$EVENT_NAVIGATION_MOUNTED, Splide2.splides);
    }
    function update() {
        $c1e4e4dda02dcd92$var$setAttribute(Components2.Elements.list, $c1e4e4dda02dcd92$var$ARIA_ORIENTATION, options.direction === $c1e4e4dda02dcd92$var$TTB ? "vertical" : "");
    }
    function onClick(Slide2) {
        Splide2.go(Slide2.index);
    }
    function onKeydown(Slide2, e) {
        if ($c1e4e4dda02dcd92$var$includes($c1e4e4dda02dcd92$var$TRIGGER_KEYS, $c1e4e4dda02dcd92$var$normalizeKey(e))) {
            onClick(Slide2);
            $c1e4e4dda02dcd92$var$prevent(e);
        }
    }
    return {
        setup: $c1e4e4dda02dcd92$var$apply(Components2.Media.set, {
            slideFocus: $c1e4e4dda02dcd92$var$isUndefined(slideFocus) ? isNavigation : slideFocus
        }, true),
        mount: mount,
        destroy: destroy,
        remount: remount
    };
}
function $c1e4e4dda02dcd92$var$Wheel(Splide2, Components2, options) {
    var _EventInterface12 = $c1e4e4dda02dcd92$var$EventInterface(Splide2), bind = _EventInterface12.bind;
    var lastTime = 0;
    function mount() {
        if (options.wheel) bind(Components2.Elements.track, "wheel", onWheel, $c1e4e4dda02dcd92$var$SCROLL_LISTENER_OPTIONS);
    }
    function onWheel(e) {
        if (e.cancelable) {
            var deltaY = e.deltaY;
            var backwards = deltaY < 0;
            var timeStamp = $c1e4e4dda02dcd92$var$timeOf(e);
            var _min = options.wheelMinThreshold || 0;
            var sleep = options.wheelSleep || 0;
            if ($c1e4e4dda02dcd92$var$abs(deltaY) > _min && timeStamp - lastTime > sleep) {
                Splide2.go(backwards ? "<" : ">");
                lastTime = timeStamp;
            }
            shouldPrevent(backwards) && $c1e4e4dda02dcd92$var$prevent(e);
        }
    }
    function shouldPrevent(backwards) {
        return !options.releaseWheel || Splide2.state.is($c1e4e4dda02dcd92$var$MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
    }
    return {
        mount: mount
    };
}
var $c1e4e4dda02dcd92$var$SR_REMOVAL_DELAY = 90;
function $c1e4e4dda02dcd92$var$Live(Splide2, Components2, options) {
    var _EventInterface13 = $c1e4e4dda02dcd92$var$EventInterface(Splide2), on = _EventInterface13.on;
    var track = Components2.Elements.track;
    var enabled = options.live && !options.isNavigation;
    var sr = $c1e4e4dda02dcd92$var$create("span", $c1e4e4dda02dcd92$var$CLASS_SR);
    var interval = $c1e4e4dda02dcd92$var$RequestInterval($c1e4e4dda02dcd92$var$SR_REMOVAL_DELAY, $c1e4e4dda02dcd92$var$apply(toggle, false));
    function mount() {
        if (enabled) {
            disable(!Components2.Autoplay.isPaused());
            $c1e4e4dda02dcd92$var$setAttribute(track, $c1e4e4dda02dcd92$var$ARIA_ATOMIC, true);
            sr.textContent = "\u2026";
            on($c1e4e4dda02dcd92$var$EVENT_AUTOPLAY_PLAY, $c1e4e4dda02dcd92$var$apply(disable, true));
            on($c1e4e4dda02dcd92$var$EVENT_AUTOPLAY_PAUSE, $c1e4e4dda02dcd92$var$apply(disable, false));
            on([
                $c1e4e4dda02dcd92$var$EVENT_MOVED,
                $c1e4e4dda02dcd92$var$EVENT_SCROLLED
            ], $c1e4e4dda02dcd92$var$apply(toggle, true));
        }
    }
    function toggle(active) {
        $c1e4e4dda02dcd92$var$setAttribute(track, $c1e4e4dda02dcd92$var$ARIA_BUSY, active);
        if (active) {
            $c1e4e4dda02dcd92$var$append(track, sr);
            interval.start();
        } else {
            $c1e4e4dda02dcd92$var$remove(sr);
            interval.cancel();
        }
    }
    function destroy() {
        $c1e4e4dda02dcd92$var$removeAttribute(track, [
            $c1e4e4dda02dcd92$var$ARIA_LIVE,
            $c1e4e4dda02dcd92$var$ARIA_ATOMIC,
            $c1e4e4dda02dcd92$var$ARIA_BUSY
        ]);
        $c1e4e4dda02dcd92$var$remove(sr);
    }
    function disable(disabled) {
        if (enabled) $c1e4e4dda02dcd92$var$setAttribute(track, $c1e4e4dda02dcd92$var$ARIA_LIVE, disabled ? "off" : "polite");
    }
    return {
        mount: mount,
        disable: disable,
        destroy: destroy
    };
}
var $c1e4e4dda02dcd92$var$ComponentConstructors = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Media: $c1e4e4dda02dcd92$var$Media,
    Direction: $c1e4e4dda02dcd92$var$Direction,
    Elements: $c1e4e4dda02dcd92$var$Elements,
    Slides: $c1e4e4dda02dcd92$var$Slides,
    Layout: $c1e4e4dda02dcd92$var$Layout,
    Clones: $c1e4e4dda02dcd92$var$Clones,
    Move: $c1e4e4dda02dcd92$var$Move,
    Controller: $c1e4e4dda02dcd92$var$Controller,
    Arrows: $c1e4e4dda02dcd92$var$Arrows,
    Autoplay: $c1e4e4dda02dcd92$var$Autoplay,
    Cover: $c1e4e4dda02dcd92$var$Cover,
    Scroll: $c1e4e4dda02dcd92$var$Scroll,
    Drag: $c1e4e4dda02dcd92$var$Drag,
    Keyboard: $c1e4e4dda02dcd92$var$Keyboard,
    LazyLoad: $c1e4e4dda02dcd92$var$LazyLoad,
    Pagination: $c1e4e4dda02dcd92$var$Pagination,
    Sync: $c1e4e4dda02dcd92$var$Sync,
    Wheel: $c1e4e4dda02dcd92$var$Wheel,
    Live: $c1e4e4dda02dcd92$var$Live
});
var $c1e4e4dda02dcd92$var$I18N = {
    prev: "Previous slide",
    next: "Next slide",
    first: "Go to first slide",
    last: "Go to last slide",
    slideX: "Go to slide %s",
    pageX: "Go to page %s",
    play: "Start autoplay",
    pause: "Pause autoplay",
    carousel: "carousel",
    slide: "slide",
    select: "Select a slide to show",
    slideLabel: "%s of %s"
};
var $c1e4e4dda02dcd92$var$DEFAULTS = {
    type: "slide",
    role: "region",
    speed: 400,
    perPage: 1,
    cloneStatus: true,
    arrows: true,
    pagination: true,
    paginationKeyboard: true,
    interval: 5e3,
    pauseOnHover: true,
    pauseOnFocus: true,
    resetProgress: true,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    drag: true,
    direction: "ltr",
    trimSpace: true,
    focusableNodes: "a, button, textarea, input, select, iframe",
    live: true,
    classes: $c1e4e4dda02dcd92$var$CLASSES,
    i18n: $c1e4e4dda02dcd92$var$I18N,
    reducedMotion: {
        speed: 0,
        rewindSpeed: 0,
        autoplay: "pause"
    }
};
function $c1e4e4dda02dcd92$var$Fade(Splide2, Components2, options) {
    var Slides2 = Components2.Slides;
    function mount() {
        $c1e4e4dda02dcd92$var$EventInterface(Splide2).on([
            $c1e4e4dda02dcd92$var$EVENT_MOUNTED,
            $c1e4e4dda02dcd92$var$EVENT_REFRESH
        ], init);
    }
    function init() {
        Slides2.forEach(function(Slide2) {
            Slide2.style("transform", "translateX(-" + 100 * Slide2.index + "%)");
        });
    }
    function start(index, done) {
        Slides2.style("transition", "opacity " + options.speed + "ms " + options.easing);
        $c1e4e4dda02dcd92$var$nextTick(done);
    }
    return {
        mount: mount,
        start: start,
        cancel: $c1e4e4dda02dcd92$var$noop
    };
}
function $c1e4e4dda02dcd92$var$Slide(Splide2, Components2, options) {
    var Move2 = Components2.Move, Controller2 = Components2.Controller, Scroll2 = Components2.Scroll;
    var list = Components2.Elements.list;
    var transition = $c1e4e4dda02dcd92$var$apply($c1e4e4dda02dcd92$var$style, list, "transition");
    var endCallback;
    function mount() {
        $c1e4e4dda02dcd92$var$EventInterface(Splide2).bind(list, "transitionend", function(e) {
            if (e.target === list && endCallback) {
                cancel();
                endCallback();
            }
        });
    }
    function start(index, done) {
        var destination = Move2.toPosition(index, true);
        var position = Move2.getPosition();
        var speed = getSpeed(index);
        if ($c1e4e4dda02dcd92$var$abs(destination - position) >= 1 && speed >= 1) {
            if (options.useScroll) Scroll2.scroll(destination, speed, false, done);
            else {
                transition("transform " + speed + "ms " + options.easing);
                Move2.translate(destination, true);
                endCallback = done;
            }
        } else {
            Move2.jump(index);
            done();
        }
    }
    function cancel() {
        transition("");
        Scroll2.cancel();
    }
    function getSpeed(index) {
        var rewindSpeed = options.rewindSpeed;
        if (Splide2.is($c1e4e4dda02dcd92$var$SLIDE) && rewindSpeed) {
            var prev = Controller2.getIndex(true);
            var end = Controller2.getEnd();
            if (prev === 0 && index >= end || prev >= end && index === 0) return rewindSpeed;
        }
        return options.speed;
    }
    return {
        mount: mount,
        start: start,
        cancel: cancel
    };
}
var $c1e4e4dda02dcd92$var$_Splide = /* @__PURE__ */ function() {
    function _Splide2(target, options) {
        this.event = $c1e4e4dda02dcd92$var$EventInterface();
        this.Components = {};
        this.state = $c1e4e4dda02dcd92$var$State($c1e4e4dda02dcd92$var$CREATED);
        this.splides = [];
        this._o = {};
        this._E = {};
        var root = $c1e4e4dda02dcd92$var$isString(target) ? $c1e4e4dda02dcd92$var$query(document, target) : target;
        $c1e4e4dda02dcd92$var$assert(root, root + " is invalid.");
        this.root = root;
        options = $c1e4e4dda02dcd92$var$merge$1({
            label: $c1e4e4dda02dcd92$var$getAttribute(root, $c1e4e4dda02dcd92$var$ARIA_LABEL) || "",
            labelledby: $c1e4e4dda02dcd92$var$getAttribute(root, $c1e4e4dda02dcd92$var$ARIA_LABELLEDBY) || ""
        }, $c1e4e4dda02dcd92$var$DEFAULTS, _Splide2.defaults, options || {});
        try {
            $c1e4e4dda02dcd92$var$merge$1(options, JSON.parse($c1e4e4dda02dcd92$var$getAttribute(root, $c1e4e4dda02dcd92$var$DATA_ATTRIBUTE)));
        } catch (e) {
            $c1e4e4dda02dcd92$var$assert(false, "Invalid JSON");
        }
        this._o = Object.create($c1e4e4dda02dcd92$var$merge$1({}, options));
    }
    var _proto = _Splide2.prototype;
    _proto.mount = function mount(Extensions, Transition) {
        var _this = this;
        var state = this.state, Components2 = this.Components;
        $c1e4e4dda02dcd92$var$assert(state.is([
            $c1e4e4dda02dcd92$var$CREATED,
            $c1e4e4dda02dcd92$var$DESTROYED
        ]), "Already mounted!");
        state.set($c1e4e4dda02dcd92$var$CREATED);
        this._C = Components2;
        this._T = Transition || this._T || (this.is($c1e4e4dda02dcd92$var$FADE) ? $c1e4e4dda02dcd92$var$Fade : $c1e4e4dda02dcd92$var$Slide);
        this._E = Extensions || this._E;
        var Constructors = $c1e4e4dda02dcd92$var$assign({}, $c1e4e4dda02dcd92$var$ComponentConstructors, this._E, {
            Transition: this._T
        });
        $c1e4e4dda02dcd92$var$forOwn$1(Constructors, function(Component, key) {
            var component = Component(_this, Components2, _this._o);
            Components2[key] = component;
            component.setup && component.setup();
        });
        $c1e4e4dda02dcd92$var$forOwn$1(Components2, function(component) {
            component.mount && component.mount();
        });
        this.emit($c1e4e4dda02dcd92$var$EVENT_MOUNTED);
        $c1e4e4dda02dcd92$var$addClass(this.root, $c1e4e4dda02dcd92$var$CLASS_INITIALIZED);
        state.set($c1e4e4dda02dcd92$var$IDLE);
        this.emit($c1e4e4dda02dcd92$var$EVENT_READY);
        return this;
    };
    _proto.sync = function sync(splide) {
        this.splides.push({
            splide: splide
        });
        splide.splides.push({
            splide: this,
            isParent: true
        });
        if (this.state.is($c1e4e4dda02dcd92$var$IDLE)) {
            this._C.Sync.remount();
            splide.Components.Sync.remount();
        }
        return this;
    };
    _proto.go = function go(control) {
        this._C.Controller.go(control);
        return this;
    };
    _proto.on = function on(events, callback) {
        this.event.on(events, callback);
        return this;
    };
    _proto.off = function off(events) {
        this.event.off(events);
        return this;
    };
    _proto.emit = function emit(event) {
        var _this$event;
        (_this$event = this.event).emit.apply(_this$event, [
            event
        ].concat($c1e4e4dda02dcd92$var$slice(arguments, 1)));
        return this;
    };
    _proto.add = function add(slides, index) {
        this._C.Slides.add(slides, index);
        return this;
    };
    _proto.remove = function remove2(matcher) {
        this._C.Slides.remove(matcher);
        return this;
    };
    _proto.is = function is(type) {
        return this._o.type === type;
    };
    _proto.refresh = function refresh() {
        this.emit($c1e4e4dda02dcd92$var$EVENT_REFRESH);
        return this;
    };
    _proto.destroy = function destroy(completely) {
        if (completely === void 0) completely = true;
        var event = this.event, state = this.state;
        if (state.is($c1e4e4dda02dcd92$var$CREATED)) $c1e4e4dda02dcd92$var$EventInterface(this).on($c1e4e4dda02dcd92$var$EVENT_READY, this.destroy.bind(this, completely));
        else {
            $c1e4e4dda02dcd92$var$forOwn$1(this._C, function(component) {
                component.destroy && component.destroy(completely);
            }, true);
            event.emit($c1e4e4dda02dcd92$var$EVENT_DESTROY);
            event.destroy();
            completely && $c1e4e4dda02dcd92$var$empty(this.splides);
            state.set($c1e4e4dda02dcd92$var$DESTROYED);
        }
        return this;
    };
    $c1e4e4dda02dcd92$var$_createClass(_Splide2, [
        {
            key: "options",
            get: function get() {
                return this._o;
            },
            set: function set(options) {
                this._C.Media.set(options, true, true);
            }
        },
        {
            key: "length",
            get: function get() {
                return this._C.Slides.getLength(true);
            }
        },
        {
            key: "index",
            get: function get() {
                return this._C.Controller.getIndex();
            }
        }
    ]);
    return _Splide2;
}();
var $c1e4e4dda02dcd92$var$Splide$1 = $c1e4e4dda02dcd92$var$_Splide;
$c1e4e4dda02dcd92$var$Splide$1.defaults = {};
$c1e4e4dda02dcd92$var$Splide$1.STATES = $c1e4e4dda02dcd92$var$STATES;
const $c1e4e4dda02dcd92$var$EVENTS = [
    $c1e4e4dda02dcd92$var$EVENT_ACTIVE,
    $c1e4e4dda02dcd92$var$EVENT_ARROWS_MOUNTED,
    $c1e4e4dda02dcd92$var$EVENT_ARROWS_UPDATED,
    $c1e4e4dda02dcd92$var$EVENT_AUTOPLAY_PAUSE,
    $c1e4e4dda02dcd92$var$EVENT_AUTOPLAY_PLAY,
    $c1e4e4dda02dcd92$var$EVENT_AUTOPLAY_PLAYING,
    $c1e4e4dda02dcd92$var$EVENT_CLICK,
    $c1e4e4dda02dcd92$var$EVENT_DESTROY,
    $c1e4e4dda02dcd92$var$EVENT_DRAG,
    $c1e4e4dda02dcd92$var$EVENT_DRAGGED,
    $c1e4e4dda02dcd92$var$EVENT_DRAGGING,
    $c1e4e4dda02dcd92$var$EVENT_HIDDEN,
    $c1e4e4dda02dcd92$var$EVENT_INACTIVE,
    $c1e4e4dda02dcd92$var$EVENT_LAZYLOAD_LOADED,
    $c1e4e4dda02dcd92$var$EVENT_MOUNTED,
    $c1e4e4dda02dcd92$var$EVENT_MOVE,
    $c1e4e4dda02dcd92$var$EVENT_MOVED,
    $c1e4e4dda02dcd92$var$EVENT_NAVIGATION_MOUNTED,
    $c1e4e4dda02dcd92$var$EVENT_PAGINATION_MOUNTED,
    $c1e4e4dda02dcd92$var$EVENT_PAGINATION_UPDATED,
    $c1e4e4dda02dcd92$var$EVENT_REFRESH,
    $c1e4e4dda02dcd92$var$EVENT_RESIZE,
    $c1e4e4dda02dcd92$var$EVENT_RESIZED,
    $c1e4e4dda02dcd92$var$EVENT_SCROLL,
    $c1e4e4dda02dcd92$var$EVENT_SCROLLED,
    $c1e4e4dda02dcd92$var$EVENT_UPDATED,
    $c1e4e4dda02dcd92$var$EVENT_VISIBLE
];
const $c1e4e4dda02dcd92$var$SPLIDE_INJECTION_KEY = "splide";
function $c1e4e4dda02dcd92$var$isObject(subject) {
    return subject !== null && typeof subject === "object";
}
function $c1e4e4dda02dcd92$var$forOwn(object, iteratee) {
    if (object) {
        const keys = Object.keys(object);
        for(let i = 0; i < keys.length; i++){
            const key = keys[i];
            if (key !== "__proto__") {
                if (iteratee(object[key], key) === false) break;
            }
        }
    }
    return object;
}
function $c1e4e4dda02dcd92$var$merge(object, source) {
    const merged = object;
    $c1e4e4dda02dcd92$var$forOwn(source, (value, key)=>{
        if (Array.isArray(value)) merged[key] = value.slice();
        else if ($c1e4e4dda02dcd92$var$isObject(value)) merged[key] = $c1e4e4dda02dcd92$var$merge($c1e4e4dda02dcd92$var$isObject(merged[key]) ? merged[key] : {}, value);
        else merged[key] = value;
    });
    return merged;
}
const $c1e4e4dda02dcd92$var$_sfc_main$2 = (0, $8V3Us.defineComponent)({
    name: "SplideTrack",
    setup () {
        (0, $8V3Us.onUpdated)(()=>{
            var _a;
            const splide = (0, $8V3Us.inject)($c1e4e4dda02dcd92$var$SPLIDE_INJECTION_KEY);
            (_a = splide == null ? void 0 : splide.value) == null || _a.refresh();
        });
    }
});
const $c1e4e4dda02dcd92$var$_export_sfc = (sfc, props)=>{
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props)target[key] = val;
    return target;
};
const $c1e4e4dda02dcd92$var$_hoisted_1$1 = {
    class: "splide__track"
};
const $c1e4e4dda02dcd92$var$_hoisted_2 = {
    class: "splide__list"
};
function $c1e4e4dda02dcd92$var$_sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, $8V3Us.openBlock)(), (0, $8V3Us.createElementBlock)("div", $c1e4e4dda02dcd92$var$_hoisted_1$1, [
        (0, $8V3Us.createElementVNode)("ul", $c1e4e4dda02dcd92$var$_hoisted_2, [
            (0, $8V3Us.renderSlot)(_ctx.$slots, "default")
        ])
    ]);
}
const $c1e4e4dda02dcd92$export$137594065e0e634d = /* @__PURE__ */ $c1e4e4dda02dcd92$var$_export_sfc($c1e4e4dda02dcd92$var$_sfc_main$2, [
    [
        "render",
        $c1e4e4dda02dcd92$var$_sfc_render$2
    ]
]);
const $c1e4e4dda02dcd92$var$_sfc_main$1 = (0, $8V3Us.defineComponent)({
    name: "Splide",
    emits: $c1e4e4dda02dcd92$var$EVENTS.map((event)=>`splide:${event}`),
    components: {
        SplideTrack: $c1e4e4dda02dcd92$export$137594065e0e634d
    },
    props: {
        tag: {
            default: "div",
            type: String
        },
        options: {
            default: {},
            type: Object
        },
        extensions: Object,
        transition: Function,
        hasTrack: {
            default: true,
            type: Boolean
        }
    },
    setup (props, context) {
        const splide = (0, $8V3Us.ref)();
        const root = (0, $8V3Us.ref)();
        (0, $8V3Us.onMounted)(()=>{
            if (root.value) {
                splide.value = new $c1e4e4dda02dcd92$var$Splide$1(root.value, props.options);
                bind(splide.value);
                splide.value.mount(props.extensions, props.transition);
            }
        });
        (0, $8V3Us.onBeforeUnmount)(()=>{
            var _a;
            (_a = splide.value) == null || _a.destroy();
        });
        (0, $8V3Us.watch)(()=>$c1e4e4dda02dcd92$var$merge({}, props.options), (options)=>{
            if (splide.value) splide.value.options = options;
        }, {
            deep: true
        });
        (0, $8V3Us.provide)($c1e4e4dda02dcd92$var$SPLIDE_INJECTION_KEY, splide);
        const index = (0, $8V3Us.computed)(()=>{
            var _a;
            return ((_a = splide.value) == null ? void 0 : _a.index) || 0;
        });
        const length = (0, $8V3Us.computed)(()=>{
            var _a;
            return ((_a = splide.value) == null ? void 0 : _a.length) || 0;
        });
        function go(control) {
            var _a;
            (_a = splide.value) == null || _a.go(control);
        }
        function sync(target) {
            var _a;
            (_a = splide.value) == null || _a.sync(target);
        }
        function bind(splide2) {
            $c1e4e4dda02dcd92$var$EVENTS.forEach((event)=>{
                splide2.on(event, (...args)=>{
                    context.emit(`splide:${event}`, splide2, ...args);
                });
            });
        }
        return {
            splide: splide,
            root: root,
            index: index,
            length: length,
            go: go,
            sync: sync
        };
    }
});
function $c1e4e4dda02dcd92$var$_sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_SplideTrack = (0, $8V3Us.resolveComponent)("SplideTrack");
    return (0, $8V3Us.openBlock)(), (0, $8V3Us.createBlock)((0, $8V3Us.resolveDynamicComponent)(_ctx.tag), {
        class: "splide",
        ref: "root"
    }, {
        default: (0, $8V3Us.withCtx)(()=>[
                _ctx.hasTrack ? ((0, $8V3Us.openBlock)(), (0, $8V3Us.createBlock)(_component_SplideTrack, {
                    key: 0
                }, {
                    default: (0, $8V3Us.withCtx)(()=>[
                            (0, $8V3Us.renderSlot)(_ctx.$slots, "default")
                        ]),
                    _: 3
                })) : (0, $8V3Us.renderSlot)(_ctx.$slots, "default", {
                    key: 1
                })
            ]),
        _: 3
    }, 512);
}
const $c1e4e4dda02dcd92$export$24494c7438c070bf = /* @__PURE__ */ $c1e4e4dda02dcd92$var$_export_sfc($c1e4e4dda02dcd92$var$_sfc_main$1, [
    [
        "render",
        $c1e4e4dda02dcd92$var$_sfc_render$1
    ]
]);
const $c1e4e4dda02dcd92$var$_sfc_main = (0, $8V3Us.defineComponent)({
    name: "SplideSlide"
});
const $c1e4e4dda02dcd92$var$_hoisted_1 = {
    class: "splide__slide"
};
function $c1e4e4dda02dcd92$var$_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, $8V3Us.openBlock)(), (0, $8V3Us.createElementBlock)("li", $c1e4e4dda02dcd92$var$_hoisted_1, [
        (0, $8V3Us.renderSlot)(_ctx.$slots, "default")
    ]);
}
const $c1e4e4dda02dcd92$export$bb7d0bac054249f6 = /* @__PURE__ */ $c1e4e4dda02dcd92$var$_export_sfc($c1e4e4dda02dcd92$var$_sfc_main, [
    [
        "render",
        $c1e4e4dda02dcd92$var$_sfc_render
    ]
]);
const $c1e4e4dda02dcd92$export$2e2bcd8739ae039 = {
    install (app) {
        app.component($c1e4e4dda02dcd92$export$24494c7438c070bf.name, $c1e4e4dda02dcd92$export$24494c7438c070bf);
        app.component($c1e4e4dda02dcd92$export$bb7d0bac054249f6.name, $c1e4e4dda02dcd92$export$bb7d0bac054249f6);
    }
};

});


parcelRegister("cdGRj", function(module, exports) {

$parcel$export(module.exports, "render", () => $8e57f1d0bdaf965b$export$b3890eb0ae9dca99);

var $8V3Us = parcelRequire("8V3Us");

var $b1Y2C = parcelRequire("b1Y2C");

var $kZXMZ = parcelRequire("kZXMZ");

var $fpNOA = parcelRequire("fpNOA");

var $66v0v = parcelRequire("66v0v");
const $8e57f1d0bdaf965b$var$_hoisted_1 = {
    class: "w-full h-14 flex items-center shadow-lg relative z-50"
};
const $8e57f1d0bdaf965b$var$_hoisted_2 = {
    class: "container mx-auto px-5 sm:px-0 flex items-center justify-between"
};
const $8e57f1d0bdaf965b$var$_hoisted_3 = {
    class: "flex items-center justify-start text-2xl text-blue-700 leading-5"
};
const $8e57f1d0bdaf965b$var$_hoisted_4 = /*#__PURE__*/ (0, $8V3Us.createElementVNode)("img", {
    src: (0, (/*@__PURE__*/$parcel$interopDefault($b1Y2C))),
    class: "w-auto h-full max-h-7"
}, null, -1);
const $8e57f1d0bdaf965b$var$_hoisted_5 = {
    class: "pl-3 font-bold"
};
const $8e57f1d0bdaf965b$var$_hoisted_6 = /*#__PURE__*/ (0, $8V3Us.createElementVNode)("h2", null, [
    /*#__PURE__*/ (0, $8V3Us.createElementVNode)("img", {
        src: (0, (/*@__PURE__*/$parcel$interopDefault($kZXMZ))),
        class: "w-auto h-full max-h-7"
    })
], -1);
const $8e57f1d0bdaf965b$var$_hoisted_7 = {
    class: "relative z-0"
};
const $8e57f1d0bdaf965b$var$_hoisted_8 = {
    class: "grid grid-cols-1 md:grid-cols-2 md:gap-4 welcome bg-cover bg-no-repeat bg-scroll bg-center bg-gradient-to-r from-green-100 to-blue-200"
};
const $8e57f1d0bdaf965b$var$_hoisted_9 = {
    class: "w-full h-full flex items-center justify-center mt-3 md:mt-auto"
};
const $8e57f1d0bdaf965b$var$_hoisted_10 = {
    class: "max-w-[90%] md:max-w-full"
};
const $8e57f1d0bdaf965b$var$_hoisted_11 = {
    class: "text-3xl lg:text-6xl font-bold mb-3 text-blue-700"
};
const $8e57f1d0bdaf965b$var$_hoisted_12 = {
    class: "tracking-[-6px] lg:tracking-[-14px] mr-2"
};
const $8e57f1d0bdaf965b$var$_hoisted_13 = {
    class: "md:text-lg"
};
const $8e57f1d0bdaf965b$var$_hoisted_14 = {
    class: "md:text-lg"
};
const $8e57f1d0bdaf965b$var$_hoisted_15 = {
    class: "md:text-lg"
};
const $8e57f1d0bdaf965b$var$_hoisted_16 = {
    class: "mt-3 md:mt-10"
};
const $8e57f1d0bdaf965b$var$_hoisted_17 = {
    class: "ml-2 mr-3"
};
const $8e57f1d0bdaf965b$var$_hoisted_18 = /*#__PURE__*/ (0, $8V3Us.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-6 h-6"
}, [
    /*#__PURE__*/ (0, $8V3Us.createElementVNode)("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
    })
], -1);
const $8e57f1d0bdaf965b$var$_hoisted_19 = /*#__PURE__*/ (0, $8V3Us.createElementVNode)("div", {
    class: "py-8 xl:pr-72 lg:pr-40 md:pr-24 text-center"
}, [
    /*#__PURE__*/ (0, $8V3Us.createElementVNode)("img", {
        src: (0, (/*@__PURE__*/$parcel$interopDefault($fpNOA))),
        class: "border border-white rounded-xl shadow-lg shadow-gray-600/30 mx-auto max-w-[90%] md:max-w-[100%]"
    })
], -1);
const $8e57f1d0bdaf965b$var$_hoisted_20 = {
    class: "p-10"
};
const $8e57f1d0bdaf965b$var$_hoisted_21 = /*#__PURE__*/ (0, $8V3Us.createElementVNode)("img", {
    src: (0, (/*@__PURE__*/$parcel$interopDefault($66v0v))),
    class: "border border-white rounded-xl shadow-lg shadow-gray-600/30 mx-auto max-w-[90%] md:max-w-[100%]"
}, null, -1);
const $8e57f1d0bdaf965b$var$_hoisted_22 = /*#__PURE__*/ (0, $8V3Us.createElementVNode)("img", {
    src: (0, (/*@__PURE__*/$parcel$interopDefault($66v0v))),
    class: "border border-white rounded-xl shadow-lg shadow-gray-600/30 mx-auto max-w-[90%] md:max-w-[100%]"
}, null, -1);
function $8e57f1d0bdaf965b$export$b3890eb0ae9dca99(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, $8V3Us.openBlock)(), (0, $8V3Us.createElementBlock)((0, $8V3Us.Fragment), null, [
        (0, $8V3Us.createElementVNode)("header", $8e57f1d0bdaf965b$var$_hoisted_1, [
            (0, $8V3Us.createElementVNode)("div", $8e57f1d0bdaf965b$var$_hoisted_2, [
                (0, $8V3Us.createElementVNode)("h1", $8e57f1d0bdaf965b$var$_hoisted_3, [
                    $8e57f1d0bdaf965b$var$_hoisted_4,
                    (0, $8V3Us.createElementVNode)("span", $8e57f1d0bdaf965b$var$_hoisted_5, (0, $8V3Us.toDisplayString)($setup._t("GenCloud")), 1)
                ]),
                $8e57f1d0bdaf965b$var$_hoisted_6
            ])
        ]),
        (0, $8V3Us.createElementVNode)("main", $8e57f1d0bdaf965b$var$_hoisted_7, [
            (0, $8V3Us.createElementVNode)("div", $8e57f1d0bdaf965b$var$_hoisted_8, [
                (0, $8V3Us.createElementVNode)("div", $8e57f1d0bdaf965b$var$_hoisted_9, [
                    (0, $8V3Us.createElementVNode)("div", $8e57f1d0bdaf965b$var$_hoisted_10, [
                        (0, $8V3Us.createElementVNode)("h3", $8e57f1d0bdaf965b$var$_hoisted_11, [
                            (0, $8V3Us.createElementVNode)("span", $8e57f1d0bdaf965b$var$_hoisted_12, (0, $8V3Us.toDisplayString)($setup._t("B2B")), 1),
                            (0, $8V3Us.createTextVNode)(" " + (0, $8V3Us.toDisplayString)($setup._t("\u043E\u0442 GenCloud")), 1)
                        ]),
                        (0, $8V3Us.createElementVNode)("p", $8e57f1d0bdaf965b$var$_hoisted_13, (0, $8V3Us.toDisplayString)($setup._t("\u041F\u0430\u0437\u0430\u0440\u0443\u0432\u0430\u0439\u0442\u0435 \u043E\u043D\u043B\u0430\u0439\u043D - \u0433\u043E\u0442\u0438\u043D\u043E \u0435!")), 1),
                        (0, $8V3Us.createElementVNode)("p", $8e57f1d0bdaf965b$var$_hoisted_14, (0, $8V3Us.toDisplayString)($setup._t("\u041F\u043E\u0434 \u0440\u044A\u043A\u0430 \u0435 \u0432 \u0434\u0436\u043E\u0431\u0430, \u0438 \u043D\u0430 \u0431\u044E\u0440\u043E\u0442\u043E, \u0438 \u0432 \u043A\u043E\u043B\u0430\u0442\u0430, \u0438...")), 1),
                        (0, $8V3Us.createElementVNode)("p", $8e57f1d0bdaf965b$var$_hoisted_15, (0, $8V3Us.toDisplayString)($setup._t("\u041C\u043D\u043E\u0433\u043E \u0435 \u043B\u0435\u0441\u043D\u043E, \u0431\u044A\u0440\u0437\u043E \u0438 \u0435\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E.")), 1),
                        (0, $8V3Us.createElementVNode)("div", $8e57f1d0bdaf965b$var$_hoisted_16, [
                            (0, $8V3Us.createElementVNode)("button", {
                                onClick: _cache[0] || (_cache[0] = ($event)=>$setup.scrollToElm($setup.inTheBegining)),
                                class: "inline-flex justify-between items-center bg-blue-700 hover:bg-blue-500 transition-colors text-white font-medium uppercase py-2 px-4 rounded-md"
                            }, [
                                (0, $8V3Us.createElementVNode)("span", $8e57f1d0bdaf965b$var$_hoisted_17, (0, $8V3Us.toDisplayString)($setup._t("\u0420\u0430\u0437\u0433\u043B\u0435\u0434\u0430\u0439")), 1),
                                $8e57f1d0bdaf965b$var$_hoisted_18
                            ])
                        ])
                    ])
                ]),
                $8e57f1d0bdaf965b$var$_hoisted_19
            ]),
            (0, $8V3Us.createElementVNode)("section", $8e57f1d0bdaf965b$var$_hoisted_20, [
                (0, $8V3Us.createVNode)($setup["Splide"], {
                    ref: "inTheBegining",
                    options: {
                        dragMinThreshold: 10,
                        type: "loop",
                        arrows: false,
                        pagination: false,
                        gap: 10
                    },
                    "aria-label": "This is Bizzio",
                    class: "rounded-xl"
                }, {
                    default: (0, $8V3Us.withCtx)(()=>[
                            (0, $8V3Us.createVNode)($setup["SplideSlide"], {
                                class: "rounded-xl bg-slate-300 flex items-center py-10"
                            }, {
                                default: (0, $8V3Us.withCtx)(()=>[
                                        $8e57f1d0bdaf965b$var$_hoisted_21
                                    ]),
                                _: 1
                            }),
                            (0, $8V3Us.createVNode)($setup["SplideSlide"], {
                                class: "rounded-xl bg-slate-500 flex items-center py-10"
                            }, {
                                default: (0, $8V3Us.withCtx)(()=>[
                                        $8e57f1d0bdaf965b$var$_hoisted_22
                                    ]),
                                _: 1
                            })
                        ]),
                    _: 1
                }, 512)
            ])
        ])
    ], 64);
}

});
parcelRegister("b1Y2C", function(module, exports) {
module.exports = new URL("gencloud_logo_small.ea79d2ec.jpg", import.meta.url).toString();

});

parcelRegister("kZXMZ", function(module, exports) {
module.exports = new URL("b2b-logo.8db04811.jpg", import.meta.url).toString();

});

parcelRegister("fpNOA", function(module, exports) {
module.exports = new URL("login-screen.a513e040.png", import.meta.url).toString();

});

parcelRegister("66v0v", function(module, exports) {
module.exports = new URL("gencloud_logo_text.d71a4866.png", import.meta.url).toString();

});


parcelRegister("dKTU3", function(module, exports) {

$parcel$export(module.exports, "default", () => $a03aef7508c169ae$export$2e2bcd8739ae039);
let $a03aef7508c169ae$var$NOOP = ()=>{};
var $a03aef7508c169ae$export$2e2bcd8739ae039 = (script)=>{};

});


var $8V3Us = parcelRequire("8V3Us");
let $ee03056cc6a8bcfa$var$script;




let $ee03056cc6a8bcfa$var$initialize = ()=>{
    $ee03056cc6a8bcfa$var$script = (parcelRequire("j6PwP"));
    if ($ee03056cc6a8bcfa$var$script.__esModule) $ee03056cc6a8bcfa$var$script = $ee03056cc6a8bcfa$var$script.default;
    $ee03056cc6a8bcfa$var$script.render = (parcelRequire("cdGRj")).render;
    $ee03056cc6a8bcfa$var$script.__cssModules = {};
    (parcelRequire("dKTU3")).default($ee03056cc6a8bcfa$var$script);
    $ee03056cc6a8bcfa$var$script.__scopeId = "data-v-4a2298";
    $ee03056cc6a8bcfa$var$script.__file = "App.vue";
};
$ee03056cc6a8bcfa$var$initialize();
var $ee03056cc6a8bcfa$export$2e2bcd8739ae039 = $ee03056cc6a8bcfa$var$script;


globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = false;
const $74a5b179c5969087$var$app = (0, $8V3Us.createApp)((0, $ee03056cc6a8bcfa$export$2e2bcd8739ae039));
$74a5b179c5969087$var$app.mount("#app");


