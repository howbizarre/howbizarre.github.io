
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
parcelRequire("Q5TbH");
var $7BTmT = parcelRequire("7BTmT");

var $gE5OH = parcelRequire("gE5OH");

var $de968c5adfd91d4c$export$2e2bcd8739ae039 = {
    __name: "App",
    setup (__props, { expose: __expose }) {
        __expose();
        const _t = (t)=>t;
        const inTheBegining = (0, $7BTmT.ref)(null);
        const scrollToElm = (elm)=>window.scrollTo({
                top: elm.$el.offsetTop,
                behavior: "smooth"
            });
        const __returned__ = {
            _t: _t,
            inTheBegining: inTheBegining,
            scrollToElm: scrollToElm,
            ref: $7BTmT.ref,
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
parcelRegister("Q5TbH", function(module, exports) {
$parcel$export(module.exports, "computed", () => (parcelRequire("j2KKi")).computed);
$parcel$export(module.exports, "createBlock", () => (parcelRequire("j2KKi")).createBlock);
$parcel$export(module.exports, "createElementBlock", () => (parcelRequire("j2KKi")).createElementBlock);
$parcel$export(module.exports, "createElementVNode", () => (parcelRequire("j2KKi")).createElementVNode);
$parcel$export(module.exports, "createTextVNode", () => (parcelRequire("j2KKi")).createTextVNode);
$parcel$export(module.exports, "createVNode", () => (parcelRequire("j2KKi")).createVNode);
$parcel$export(module.exports, "defineComponent", () => (parcelRequire("j2KKi")).defineComponent);
$parcel$export(module.exports, "Fragment", () => (parcelRequire("j2KKi")).Fragment);
$parcel$export(module.exports, "initCustomFormatter", () => (parcelRequire("j2KKi")).initCustomFormatter);
$parcel$export(module.exports, "inject", () => (parcelRequire("j2KKi")).inject);
$parcel$export(module.exports, "onBeforeUnmount", () => (parcelRequire("j2KKi")).onBeforeUnmount);
$parcel$export(module.exports, "onMounted", () => (parcelRequire("j2KKi")).onMounted);
$parcel$export(module.exports, "onUpdated", () => (parcelRequire("j2KKi")).onUpdated);
$parcel$export(module.exports, "openBlock", () => (parcelRequire("j2KKi")).openBlock);
$parcel$export(module.exports, "provide", () => (parcelRequire("j2KKi")).provide);
$parcel$export(module.exports, "ref", () => (parcelRequire("7BTmT")).ref);
$parcel$export(module.exports, "renderSlot", () => (parcelRequire("j2KKi")).renderSlot);
$parcel$export(module.exports, "resolveComponent", () => (parcelRequire("j2KKi")).resolveComponent);
$parcel$export(module.exports, "resolveDynamicComponent", () => (parcelRequire("j2KKi")).resolveDynamicComponent);
$parcel$export(module.exports, "watch", () => (parcelRequire("j2KKi")).watch);
$parcel$export(module.exports, "withCtx", () => (parcelRequire("j2KKi")).withCtx);
$parcel$export(module.exports, "createApp", () => (parcelRequire("jdeLb")).createApp);
$parcel$export(module.exports, "toDisplayString", () => (parcelRequire("3JmrW")).toDisplayString);

var $j2KKi = parcelRequire("j2KKi");parcelRequire("jdeLb");parcelRequire("3JmrW");
function $09c96ce6abf25add$var$initDev() {
    (0, $j2KKi.initCustomFormatter)();
}
const $09c96ce6abf25add$export$ef7acd7185315e22 = ()=>{};

});
parcelRegister("j2KKi", function(module, exports) {

$parcel$export(module.exports, "callWithAsyncErrorHandling", () => $ddd276ef38f00731$export$dae85862a8d94378);
$parcel$export(module.exports, "nextTick", () => $ddd276ef38f00731$export$bdd553fddd433dcb);
$parcel$export(module.exports, "Fragment", () => $ddd276ef38f00731$export$ffb0004e005737fa);
$parcel$export(module.exports, "Static", () => $ddd276ef38f00731$export$c1b9a1d3af45b7b6);
$parcel$export(module.exports, "withCtx", () => $ddd276ef38f00731$export$694b237e827a3d23);
$parcel$export(module.exports, "createVNode", () => $ddd276ef38f00731$export$bf5c4cf060303d58);
$parcel$export(module.exports, "resolveComponent", () => $ddd276ef38f00731$export$681d65eec9d1d1e8);
$parcel$export(module.exports, "resolveDynamicComponent", () => $ddd276ef38f00731$export$b44c564a05ca975);
$parcel$export(module.exports, "openBlock", () => $ddd276ef38f00731$export$e7eaa45e502fe5cc);
$parcel$export(module.exports, "watchPostEffect", () => $ddd276ef38f00731$export$b7f27ea67102d543);
$parcel$export(module.exports, "watch", () => $ddd276ef38f00731$export$3db5d71bdb2d5499);
$parcel$export(module.exports, "useTransitionState", () => $ddd276ef38f00731$export$d2a0a1bc267c90f6);
$parcel$export(module.exports, "onMounted", () => $ddd276ef38f00731$export$6d1641039221b5cb);
$parcel$export(module.exports, "onBeforeUnmount", () => $ddd276ef38f00731$export$40c420df62d2614);
$parcel$export(module.exports, "BaseTransitionPropsValidators", () => $ddd276ef38f00731$export$b876c99684f8cf3b);
$parcel$export(module.exports, "getCurrentInstance", () => $ddd276ef38f00731$export$f13e630aa3915748);
$parcel$export(module.exports, "getTransitionRawChildren", () => $ddd276ef38f00731$export$a67f9b1229c7c97a);
$parcel$export(module.exports, "resolveTransitionHooks", () => $ddd276ef38f00731$export$76ac1779589cd824);
$parcel$export(module.exports, "setTransitionHooks", () => $ddd276ef38f00731$export$7770a22486565649);
$parcel$export(module.exports, "BaseTransition", () => $ddd276ef38f00731$export$abd95b5f5e8a8837);
$parcel$export(module.exports, "defineComponent", () => $ddd276ef38f00731$export$afa64b67e5a01c3b);
$parcel$export(module.exports, "onUpdated", () => $ddd276ef38f00731$export$5876c47052fb88b1);
$parcel$export(module.exports, "onUnmounted", () => $ddd276ef38f00731$export$13348a43ccacfe58);
$parcel$export(module.exports, "renderSlot", () => $ddd276ef38f00731$export$4abee4c34694ada1);
$parcel$export(module.exports, "createBlock", () => $ddd276ef38f00731$export$9f2dfe8048dfb22b);
$parcel$export(module.exports, "computed", () => $ddd276ef38f00731$export$2983e091f1a1e8e2);
$parcel$export(module.exports, "provide", () => $ddd276ef38f00731$export$abe1e183e22e10ad);
$parcel$export(module.exports, "inject", () => $ddd276ef38f00731$export$a976684a0efeb93f);
$parcel$export(module.exports, "createTextVNode", () => $ddd276ef38f00731$export$22f9b5ffd89dac9);
$parcel$export(module.exports, "createRenderer", () => $ddd276ef38f00731$export$53ae2f996c64e9a);
$parcel$export(module.exports, "createHydrationRenderer", () => $ddd276ef38f00731$export$200524cf0d997ff0);
$parcel$export(module.exports, "createElementBlock", () => $ddd276ef38f00731$export$167055419fc69ec1);
$parcel$export(module.exports, "createElementVNode", () => $ddd276ef38f00731$export$42098e0eaa15c48e);
$parcel$export(module.exports, "isRuntimeOnly", () => $ddd276ef38f00731$export$c93a9c496c5211fa);
$parcel$export(module.exports, "h", () => $ddd276ef38f00731$export$dda1d9f60106f0e9);
$parcel$export(module.exports, "initCustomFormatter", () => $ddd276ef38f00731$export$aed4979be6a60047);
$parcel$export(module.exports, "warn", () => $ddd276ef38f00731$export$c106dd0671a0fc2d);
$parcel$export(module.exports, "ref", () => (parcelRequire("7BTmT")).ref);
$parcel$export(module.exports, "toRaw", () => (parcelRequire("7BTmT")).toRaw);
$parcel$export(module.exports, "camelize", () => (parcelRequire("3JmrW")).camelize);

var $7BTmT = parcelRequire("7BTmT");

var $3JmrW = parcelRequire("3JmrW");
const $ddd276ef38f00731$var$stack = [];
function $ddd276ef38f00731$var$pushWarningContext(vnode) {
    $ddd276ef38f00731$var$stack.push(vnode);
}
function $ddd276ef38f00731$var$popWarningContext() {
    $ddd276ef38f00731$var$stack.pop();
}
function $ddd276ef38f00731$var$warn$1(msg, ...args) {
    (0, $7BTmT.pauseTracking)();
    const instance = $ddd276ef38f00731$var$stack.length ? $ddd276ef38f00731$var$stack[$ddd276ef38f00731$var$stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = $ddd276ef38f00731$var$getComponentTrace();
    if (appWarnHandler) $ddd276ef38f00731$export$b22fcaf88446e9bf(appWarnHandler, instance, 11, [
        msg + args.join(""),
        instance && instance.proxy,
        trace.map(({ vnode: vnode })=>`at <${$ddd276ef38f00731$var$formatComponentName(instance, vnode.type)}>`).join("\n"),
        trace
    ]);
    else {
        const warnArgs = [
            `[Vue warn]: ${msg}`,
            ...args
        ];
        if (trace.length && // avoid spamming console during tests
        true) warnArgs.push(`
`, ...$ddd276ef38f00731$var$formatTrace(trace));
        console.warn(...warnArgs);
    }
    (0, $7BTmT.resetTracking)();
}
function $ddd276ef38f00731$var$getComponentTrace() {
    let currentVNode = $ddd276ef38f00731$var$stack[$ddd276ef38f00731$var$stack.length - 1];
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
function $ddd276ef38f00731$var$formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i)=>{
        logs.push(...i === 0 ? [] : [
            `
`
        ], ...$ddd276ef38f00731$var$formatTraceEntry(entry));
    });
    return logs;
}
function $ddd276ef38f00731$var$formatTraceEntry({ vnode: vnode, recurseCount: recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${$ddd276ef38f00731$var$formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props ? [
        open,
        ...$ddd276ef38f00731$var$formatProps(vnode.props),
        close
    ] : [
        open + close
    ];
}
function $ddd276ef38f00731$var$formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach((key)=>{
        res.push(...$ddd276ef38f00731$var$formatProp(key, props[key]));
    });
    if (keys.length > 3) res.push(` ...`);
    return res;
}
function $ddd276ef38f00731$var$formatProp(key, value, raw) {
    if ((0, $3JmrW.isString)(value)) {
        value = JSON.stringify(value);
        return raw ? value : [
            `${key}=${value}`
        ];
    } else if (typeof value === "number" || typeof value === "boolean" || value == null) return raw ? value : [
        `${key}=${value}`
    ];
    else if ((0, $7BTmT.isRef)(value)) {
        value = $ddd276ef38f00731$var$formatProp(key, (0, $7BTmT.toRaw)(value.value), true);
        return raw ? value : [
            `${key}=Ref<`,
            value,
            `>`
        ];
    } else if ((0, $3JmrW.isFunction)(value)) return [
        `${key}=fn${value.name ? `<${value.name}>` : ``}`
    ];
    else {
        value = (0, $7BTmT.toRaw)(value);
        return raw ? value : [
            `${key}=`,
            value
        ];
    }
}
function $ddd276ef38f00731$export$dfbcecb440255e4a(val, type) {
    return;
}
const $ddd276ef38f00731$export$10e8e1cf990558d7 = {
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
const $ddd276ef38f00731$var$ErrorTypeStrings$1 = {
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
function $ddd276ef38f00731$export$b22fcaf88446e9bf(fn, instance, type, args) {
    let res;
    try {
        res = args ? fn(...args) : fn();
    } catch (err) {
        $ddd276ef38f00731$export$d3da1ecaf1206c58(err, instance, type);
    }
    return res;
}
function $ddd276ef38f00731$export$dae85862a8d94378(fn, instance, type, args) {
    if ((0, $3JmrW.isFunction)(fn)) {
        const res = $ddd276ef38f00731$export$b22fcaf88446e9bf(fn, instance, type, args);
        if (res && (0, $3JmrW.isPromise)(res)) res.catch((err)=>{
            $ddd276ef38f00731$export$d3da1ecaf1206c58(err, instance, type);
        });
        return res;
    }
    const values = [];
    for(let i = 0; i < fn.length; i++)values.push($ddd276ef38f00731$export$dae85862a8d94378(fn[i], instance, type, args));
    return values;
}
function $ddd276ef38f00731$export$d3da1ecaf1206c58(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
        let cur = instance.parent;
        const exposedInstance = instance.proxy;
        const errorInfo = `https://vuejs.org/errors/#runtime-${type}`;
        while(cur){
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) for(let i = 0; i < errorCapturedHooks.length; i++){
                if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) return;
            }
            cur = cur.parent;
        }
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
            $ddd276ef38f00731$export$b22fcaf88446e9bf(appErrorHandler, null, 10, [
                err,
                exposedInstance,
                errorInfo
            ]);
            return;
        }
    }
    $ddd276ef38f00731$var$logError(err, type, contextVNode, throwInDev);
}
function $ddd276ef38f00731$var$logError(err, type, contextVNode, throwInDev = true) {
    console.error(err);
}
let $ddd276ef38f00731$var$isFlushing = false;
let $ddd276ef38f00731$var$isFlushPending = false;
const $ddd276ef38f00731$var$queue = [];
let $ddd276ef38f00731$var$flushIndex = 0;
const $ddd276ef38f00731$var$pendingPostFlushCbs = [];
let $ddd276ef38f00731$var$activePostFlushCbs = null;
let $ddd276ef38f00731$var$postFlushIndex = 0;
const $ddd276ef38f00731$var$resolvedPromise = /* @__PURE__ */ Promise.resolve();
let $ddd276ef38f00731$var$currentFlushPromise = null;
const $ddd276ef38f00731$var$RECURSION_LIMIT = 100;
function $ddd276ef38f00731$export$bdd553fddd433dcb(fn) {
    const p = $ddd276ef38f00731$var$currentFlushPromise || $ddd276ef38f00731$var$resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
function $ddd276ef38f00731$var$findInsertionIndex(id) {
    let start = $ddd276ef38f00731$var$flushIndex + 1;
    let end = $ddd276ef38f00731$var$queue.length;
    while(start < end){
        const middle = start + end >>> 1;
        const middleJob = $ddd276ef38f00731$var$queue[middle];
        const middleJobId = $ddd276ef38f00731$var$getId(middleJob);
        if (middleJobId < id || middleJobId === id && middleJob.pre) start = middle + 1;
        else end = middle;
    }
    return start;
}
function $ddd276ef38f00731$var$queueJob(job) {
    if (!$ddd276ef38f00731$var$queue.length || !$ddd276ef38f00731$var$queue.includes(job, $ddd276ef38f00731$var$isFlushing && job.allowRecurse ? $ddd276ef38f00731$var$flushIndex + 1 : $ddd276ef38f00731$var$flushIndex)) {
        if (job.id == null) $ddd276ef38f00731$var$queue.push(job);
        else $ddd276ef38f00731$var$queue.splice($ddd276ef38f00731$var$findInsertionIndex(job.id), 0, job);
        $ddd276ef38f00731$var$queueFlush();
    }
}
function $ddd276ef38f00731$var$queueFlush() {
    if (!$ddd276ef38f00731$var$isFlushing && !$ddd276ef38f00731$var$isFlushPending) {
        $ddd276ef38f00731$var$isFlushPending = true;
        $ddd276ef38f00731$var$currentFlushPromise = $ddd276ef38f00731$var$resolvedPromise.then($ddd276ef38f00731$var$flushJobs);
    }
}
function $ddd276ef38f00731$var$invalidateJob(job) {
    const i = $ddd276ef38f00731$var$queue.indexOf(job);
    if (i > $ddd276ef38f00731$var$flushIndex) $ddd276ef38f00731$var$queue.splice(i, 1);
}
function $ddd276ef38f00731$export$59536a0199721cab(cb) {
    if (!(0, $3JmrW.isArray)(cb)) {
        if (!$ddd276ef38f00731$var$activePostFlushCbs || !$ddd276ef38f00731$var$activePostFlushCbs.includes(cb, cb.allowRecurse ? $ddd276ef38f00731$var$postFlushIndex + 1 : $ddd276ef38f00731$var$postFlushIndex)) $ddd276ef38f00731$var$pendingPostFlushCbs.push(cb);
    } else $ddd276ef38f00731$var$pendingPostFlushCbs.push(...cb);
    $ddd276ef38f00731$var$queueFlush();
}
function $ddd276ef38f00731$var$flushPreFlushCbs(instance, seen, i = $ddd276ef38f00731$var$isFlushing ? $ddd276ef38f00731$var$flushIndex + 1 : 0) {
    for(; i < $ddd276ef38f00731$var$queue.length; i++){
        const cb = $ddd276ef38f00731$var$queue[i];
        if (cb && cb.pre) {
            if (instance && cb.id !== instance.uid) continue;
            $ddd276ef38f00731$var$queue.splice(i, 1);
            i--;
            cb();
        }
    }
}
function $ddd276ef38f00731$var$flushPostFlushCbs(seen) {
    if ($ddd276ef38f00731$var$pendingPostFlushCbs.length) {
        const deduped = [
            ...new Set($ddd276ef38f00731$var$pendingPostFlushCbs)
        ];
        $ddd276ef38f00731$var$pendingPostFlushCbs.length = 0;
        if ($ddd276ef38f00731$var$activePostFlushCbs) {
            $ddd276ef38f00731$var$activePostFlushCbs.push(...deduped);
            return;
        }
        $ddd276ef38f00731$var$activePostFlushCbs = deduped;
        $ddd276ef38f00731$var$activePostFlushCbs.sort((a, b)=>$ddd276ef38f00731$var$getId(a) - $ddd276ef38f00731$var$getId(b));
        for($ddd276ef38f00731$var$postFlushIndex = 0; $ddd276ef38f00731$var$postFlushIndex < $ddd276ef38f00731$var$activePostFlushCbs.length; $ddd276ef38f00731$var$postFlushIndex++)$ddd276ef38f00731$var$activePostFlushCbs[$ddd276ef38f00731$var$postFlushIndex]();
        $ddd276ef38f00731$var$activePostFlushCbs = null;
        $ddd276ef38f00731$var$postFlushIndex = 0;
    }
}
const $ddd276ef38f00731$var$getId = (job)=>job.id == null ? Infinity : job.id;
const $ddd276ef38f00731$var$comparator = (a, b)=>{
    const diff = $ddd276ef38f00731$var$getId(a) - $ddd276ef38f00731$var$getId(b);
    if (diff === 0) {
        if (a.pre && !b.pre) return -1;
        if (b.pre && !a.pre) return 1;
    }
    return diff;
};
function $ddd276ef38f00731$var$flushJobs(seen) {
    $ddd276ef38f00731$var$isFlushPending = false;
    $ddd276ef38f00731$var$isFlushing = true;
    $ddd276ef38f00731$var$queue.sort($ddd276ef38f00731$var$comparator);
    const check = (0, $3JmrW.NOOP);
    try {
        for($ddd276ef38f00731$var$flushIndex = 0; $ddd276ef38f00731$var$flushIndex < $ddd276ef38f00731$var$queue.length; $ddd276ef38f00731$var$flushIndex++){
            const job = $ddd276ef38f00731$var$queue[$ddd276ef38f00731$var$flushIndex];
            if (job && job.active !== false) $ddd276ef38f00731$export$b22fcaf88446e9bf(job, null, 14);
        }
    } finally{
        $ddd276ef38f00731$var$flushIndex = 0;
        $ddd276ef38f00731$var$queue.length = 0;
        $ddd276ef38f00731$var$flushPostFlushCbs(seen);
        $ddd276ef38f00731$var$isFlushing = false;
        $ddd276ef38f00731$var$currentFlushPromise = null;
        if ($ddd276ef38f00731$var$queue.length || $ddd276ef38f00731$var$pendingPostFlushCbs.length) $ddd276ef38f00731$var$flushJobs(seen);
    }
}
function $ddd276ef38f00731$var$checkRecursiveUpdates(seen, fn) {
    if (!seen.has(fn)) seen.set(fn, 1);
    else {
        const count = seen.get(fn);
        if (count > $ddd276ef38f00731$var$RECURSION_LIMIT) {
            const instance = fn.ownerInstance;
            const componentName = instance && $ddd276ef38f00731$var$getComponentName(instance.type);
            $ddd276ef38f00731$export$d3da1ecaf1206c58(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`, null, 10);
            return true;
        } else seen.set(fn, count + 1);
    }
}
let $ddd276ef38f00731$var$isHmrUpdating = false;
const $ddd276ef38f00731$var$hmrDirtyComponents = /* @__PURE__ */ new Set();
const $ddd276ef38f00731$var$map = /* @__PURE__ */ new Map();
function $ddd276ef38f00731$var$registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = $ddd276ef38f00731$var$map.get(id);
    if (!record) {
        $ddd276ef38f00731$var$createRecord(id, instance.type);
        record = $ddd276ef38f00731$var$map.get(id);
    }
    record.instances.add(instance);
}
function $ddd276ef38f00731$var$unregisterHMR(instance) {
    $ddd276ef38f00731$var$map.get(instance.type.__hmrId).instances.delete(instance);
}
function $ddd276ef38f00731$var$createRecord(id, initialDef) {
    if ($ddd276ef38f00731$var$map.has(id)) return false;
    $ddd276ef38f00731$var$map.set(id, {
        initialDef: $ddd276ef38f00731$var$normalizeClassComponent(initialDef),
        instances: /* @__PURE__ */ new Set()
    });
    return true;
}
function $ddd276ef38f00731$var$normalizeClassComponent(component) {
    return $ddd276ef38f00731$var$isClassComponent(component) ? component.__vccOpts : component;
}
function $ddd276ef38f00731$var$rerender(id, newRender) {
    const record = $ddd276ef38f00731$var$map.get(id);
    if (!record) return;
    record.initialDef.render = newRender;
    [
        ...record.instances
    ].forEach((instance)=>{
        if (newRender) {
            instance.render = newRender;
            $ddd276ef38f00731$var$normalizeClassComponent(instance.type).render = newRender;
        }
        instance.renderCache = [];
        $ddd276ef38f00731$var$isHmrUpdating = true;
        instance.effect.dirty = true;
        instance.update();
        $ddd276ef38f00731$var$isHmrUpdating = false;
    });
}
function $ddd276ef38f00731$var$reload(id, newComp) {
    const record = $ddd276ef38f00731$var$map.get(id);
    if (!record) return;
    newComp = $ddd276ef38f00731$var$normalizeClassComponent(newComp);
    $ddd276ef38f00731$var$updateComponentDef(record.initialDef, newComp);
    const instances = [
        ...record.instances
    ];
    for (const instance of instances){
        const oldComp = $ddd276ef38f00731$var$normalizeClassComponent(instance.type);
        if (!$ddd276ef38f00731$var$hmrDirtyComponents.has(oldComp)) {
            if (oldComp !== record.initialDef) $ddd276ef38f00731$var$updateComponentDef(oldComp, newComp);
            $ddd276ef38f00731$var$hmrDirtyComponents.add(oldComp);
        }
        instance.appContext.propsCache.delete(instance.type);
        instance.appContext.emitsCache.delete(instance.type);
        instance.appContext.optionsCache.delete(instance.type);
        if (instance.ceReload) {
            $ddd276ef38f00731$var$hmrDirtyComponents.add(oldComp);
            instance.ceReload(newComp.styles);
            $ddd276ef38f00731$var$hmrDirtyComponents.delete(oldComp);
        } else if (instance.parent) {
            instance.parent.effect.dirty = true;
            $ddd276ef38f00731$var$queueJob(instance.parent.update);
        } else if (instance.appContext.reload) instance.appContext.reload();
        else if (typeof window !== "undefined") window.location.reload();
        else console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
    }
    $ddd276ef38f00731$export$59536a0199721cab(()=>{
        for (const instance of instances)$ddd276ef38f00731$var$hmrDirtyComponents.delete($ddd276ef38f00731$var$normalizeClassComponent(instance.type));
    });
}
function $ddd276ef38f00731$var$updateComponentDef(oldComp, newComp) {
    (0, $3JmrW.extend)(oldComp, newComp);
    for(const key in oldComp)if (key !== "__file" && !(key in newComp)) delete oldComp[key];
}
function $ddd276ef38f00731$var$tryWrap(fn) {
    return (id, arg)=>{
        try {
            return fn(id, arg);
        } catch (e) {
            console.error(e);
            console.warn(`[HMR] Something went wrong during Vue component hot-reload. Full reload required.`);
        }
    };
}
let $ddd276ef38f00731$var$devtools$1;
let $ddd276ef38f00731$var$buffer = [];
let $ddd276ef38f00731$var$devtoolsNotInstalled = false;
function $ddd276ef38f00731$var$emit$1(event, ...args) {
    if ($ddd276ef38f00731$var$devtools$1) $ddd276ef38f00731$var$devtools$1.emit(event, ...args);
    else if (!$ddd276ef38f00731$var$devtoolsNotInstalled) $ddd276ef38f00731$var$buffer.push({
        event: event,
        args: args
    });
}
function $ddd276ef38f00731$var$setDevtoolsHook$1(hook, target) {
    var _a, _b;
    $ddd276ef38f00731$var$devtools$1 = hook;
    if ($ddd276ef38f00731$var$devtools$1) {
        $ddd276ef38f00731$var$devtools$1.enabled = true;
        $ddd276ef38f00731$var$buffer.forEach(({ event: event, args: args })=>$ddd276ef38f00731$var$devtools$1.emit(event, ...args));
        $ddd276ef38f00731$var$buffer = [];
    } else if (// handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))) {
        const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
        replay.push((newHook)=>{
            $ddd276ef38f00731$var$setDevtoolsHook$1(newHook, target);
        });
        setTimeout(()=>{
            if (!$ddd276ef38f00731$var$devtools$1) {
                target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
                $ddd276ef38f00731$var$devtoolsNotInstalled = true;
                $ddd276ef38f00731$var$buffer = [];
            }
        }, 3e3);
    } else {
        $ddd276ef38f00731$var$devtoolsNotInstalled = true;
        $ddd276ef38f00731$var$buffer = [];
    }
}
function $ddd276ef38f00731$var$devtoolsInitApp(app, version) {
    $ddd276ef38f00731$var$emit$1("app:init" /* APP_INIT */ , app, version, {
        Fragment: $ddd276ef38f00731$export$ffb0004e005737fa,
        Text: $ddd276ef38f00731$export$5f1af8db9871e1d6,
        Comment: $ddd276ef38f00731$export$4d299b491347818a,
        Static: $ddd276ef38f00731$export$c1b9a1d3af45b7b6
    });
}
function $ddd276ef38f00731$var$devtoolsUnmountApp(app) {
    $ddd276ef38f00731$var$emit$1("app:unmount" /* APP_UNMOUNT */ , app);
}
const $ddd276ef38f00731$var$devtoolsComponentAdded = /* @__PURE__ */ $ddd276ef38f00731$var$createDevtoolsComponentHook("component:added" /* COMPONENT_ADDED */ );
const $ddd276ef38f00731$var$devtoolsComponentUpdated = /* @__PURE__ */ $ddd276ef38f00731$var$createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */ );
const $ddd276ef38f00731$var$_devtoolsComponentRemoved = /* @__PURE__ */ $ddd276ef38f00731$var$createDevtoolsComponentHook("component:removed" /* COMPONENT_REMOVED */ );
const $ddd276ef38f00731$var$devtoolsComponentRemoved = (component)=>{
    if ($ddd276ef38f00731$var$devtools$1 && typeof $ddd276ef38f00731$var$devtools$1.cleanupBuffer === "function" && // remove the component if it wasn't buffered
    !$ddd276ef38f00731$var$devtools$1.cleanupBuffer(component)) $ddd276ef38f00731$var$_devtoolsComponentRemoved(component);
};
function $ddd276ef38f00731$var$createDevtoolsComponentHook(hook) {
    return (component)=>{
        $ddd276ef38f00731$var$emit$1(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : void 0, component);
    };
}
const $ddd276ef38f00731$var$devtoolsPerfStart = /* @__PURE__ */ $ddd276ef38f00731$var$createDevtoolsPerformanceHook("perf:start" /* PERFORMANCE_START */ );
const $ddd276ef38f00731$var$devtoolsPerfEnd = /* @__PURE__ */ $ddd276ef38f00731$var$createDevtoolsPerformanceHook("perf:end" /* PERFORMANCE_END */ );
function $ddd276ef38f00731$var$createDevtoolsPerformanceHook(hook) {
    return (component, type, time)=>{
        $ddd276ef38f00731$var$emit$1(hook, component.appContext.app, component.uid, component, type, time);
    };
}
function $ddd276ef38f00731$var$devtoolsComponentEmit(component, event, params) {
    $ddd276ef38f00731$var$emit$1("component:emit" /* COMPONENT_EMIT */ , component.appContext.app, component, event, params);
}
function $ddd276ef38f00731$var$emit(instance, event, ...rawArgs) {
    if (instance.isUnmounted) return;
    const props = instance.vnode.props || (0, $3JmrW.EMPTY_OBJ);
    let args = rawArgs;
    const isModelListener = event.startsWith("update:");
    const modelArg = isModelListener && event.slice(7);
    if (modelArg && modelArg in props) {
        const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
        const { number: number, trim: trim } = props[modifiersKey] || (0, $3JmrW.EMPTY_OBJ);
        if (trim) args = rawArgs.map((a)=>(0, $3JmrW.isString)(a) ? a.trim() : a);
        if (number) args = rawArgs.map((0, $3JmrW.looseToNumber));
    }
    if (__VUE_PROD_DEVTOOLS__) $ddd276ef38f00731$var$devtoolsComponentEmit(instance, event, args);
    let handlerName;
    let handler = props[handlerName = (0, $3JmrW.toHandlerKey)(event)] || // also try camelCase event handler (#2249)
    props[handlerName = (0, $3JmrW.toHandlerKey)((0, $3JmrW.camelize)(event))];
    if (!handler && isModelListener) handler = props[handlerName = (0, $3JmrW.toHandlerKey)((0, $3JmrW.hyphenate)(event))];
    if (handler) $ddd276ef38f00731$export$dae85862a8d94378(handler, instance, 6, args);
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
        if (!instance.emitted) instance.emitted = {};
        else if (instance.emitted[handlerName]) return;
        instance.emitted[handlerName] = true;
        $ddd276ef38f00731$export$dae85862a8d94378(onceHandler, instance, 6, args);
    }
}
function $ddd276ef38f00731$var$normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== void 0) return cached;
    const raw = comp.emits;
    let normalized = {};
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !(0, $3JmrW.isFunction)(comp)) {
        const extendEmits = (raw2)=>{
            const normalizedFromExtend = $ddd276ef38f00731$var$normalizeEmitsOptions(raw2, appContext, true);
            if (normalizedFromExtend) {
                hasExtends = true;
                (0, $3JmrW.extend)(normalized, normalizedFromExtend);
            }
        };
        if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendEmits);
        if (comp.extends) extendEmits(comp.extends);
        if (comp.mixins) comp.mixins.forEach(extendEmits);
    }
    if (!raw && !hasExtends) {
        if ((0, $3JmrW.isObject)(comp)) cache.set(comp, null);
        return null;
    }
    if ((0, $3JmrW.isArray)(raw)) raw.forEach((key)=>normalized[key] = null);
    else (0, $3JmrW.extend)(normalized, raw);
    if ((0, $3JmrW.isObject)(comp)) cache.set(comp, normalized);
    return normalized;
}
function $ddd276ef38f00731$var$isEmitListener(options, key) {
    if (!options || !(0, $3JmrW.isOn)(key)) return false;
    key = key.slice(2).replace(/Once$/, "");
    return (0, $3JmrW.hasOwn)(options, key[0].toLowerCase() + key.slice(1)) || (0, $3JmrW.hasOwn)(options, (0, $3JmrW.hyphenate)(key)) || (0, $3JmrW.hasOwn)(options, key);
}
let $ddd276ef38f00731$var$currentRenderingInstance = null;
let $ddd276ef38f00731$var$currentScopeId = null;
function $ddd276ef38f00731$var$setCurrentRenderingInstance(instance) {
    const prev = $ddd276ef38f00731$var$currentRenderingInstance;
    $ddd276ef38f00731$var$currentRenderingInstance = instance;
    $ddd276ef38f00731$var$currentScopeId = instance && instance.type.__scopeId || null;
    return prev;
}
function $ddd276ef38f00731$export$ac020265ca2cc4cd(id) {
    $ddd276ef38f00731$var$currentScopeId = id;
}
function $ddd276ef38f00731$export$f2dc6805dc11834e() {
    $ddd276ef38f00731$var$currentScopeId = null;
}
const $ddd276ef38f00731$export$15ba313e13f3dd04 = (_id)=>$ddd276ef38f00731$export$694b237e827a3d23;
function $ddd276ef38f00731$export$694b237e827a3d23(fn, ctx = $ddd276ef38f00731$var$currentRenderingInstance, isNonScopedSlot) {
    if (!ctx) return fn;
    if (fn._n) return fn;
    const renderFnWithContext = (...args)=>{
        if (renderFnWithContext._d) $ddd276ef38f00731$export$c20bee82f26f1e27(-1);
        const prevInstance = $ddd276ef38f00731$var$setCurrentRenderingInstance(ctx);
        let res;
        try {
            res = fn(...args);
        } finally{
            $ddd276ef38f00731$var$setCurrentRenderingInstance(prevInstance);
            if (renderFnWithContext._d) $ddd276ef38f00731$export$c20bee82f26f1e27(1);
        }
        if (__VUE_PROD_DEVTOOLS__) $ddd276ef38f00731$var$devtoolsComponentUpdated(ctx);
        return res;
    };
    renderFnWithContext._n = true;
    renderFnWithContext._c = true;
    renderFnWithContext._d = true;
    return renderFnWithContext;
}
let $ddd276ef38f00731$var$accessedAttrs = false;
function $ddd276ef38f00731$var$markAttrsAccessed() {
    $ddd276ef38f00731$var$accessedAttrs = true;
}
function $ddd276ef38f00731$var$renderComponentRoot(instance) {
    const { type: Component, vnode: vnode, proxy: proxy, withProxy: withProxy, props: props, propsOptions: [propsOptions], slots: slots, attrs: attrs, emit: emit, render: render, renderCache: renderCache, data: data, setupState: setupState, ctx: ctx, inheritAttrs: inheritAttrs } = instance;
    let result;
    let fallthroughAttrs;
    const prev = $ddd276ef38f00731$var$setCurrentRenderingInstance(instance);
    try {
        if (vnode.shapeFlag & 4) {
            const proxyToUse = withProxy || proxy;
            const thisProxy = proxyToUse;
            result = $ddd276ef38f00731$var$normalizeVNode(render.call(thisProxy, proxyToUse, renderCache, props, setupState, data, ctx));
            fallthroughAttrs = attrs;
        } else {
            const render2 = Component;
            result = $ddd276ef38f00731$var$normalizeVNode(render2.length > 1 ? render2(props, {
                attrs: attrs,
                slots: slots,
                emit: emit
            }) : render2(props, null));
            fallthroughAttrs = Component.props ? attrs : $ddd276ef38f00731$var$getFunctionalFallthrough(attrs);
        }
    } catch (err) {
        $ddd276ef38f00731$var$blockStack.length = 0;
        $ddd276ef38f00731$export$d3da1ecaf1206c58(err, instance, 1);
        result = $ddd276ef38f00731$export$bf5c4cf060303d58($ddd276ef38f00731$export$4d299b491347818a);
    }
    let root = result;
    let setRoot = void 0;
    if (fallthroughAttrs && inheritAttrs !== false) {
        const keys = Object.keys(fallthroughAttrs);
        const { shapeFlag: shapeFlag } = root;
        if (keys.length) {
            if (shapeFlag & 7) {
                if (propsOptions && keys.some((0, $3JmrW.isModelListener))) fallthroughAttrs = $ddd276ef38f00731$var$filterModelListeners(fallthroughAttrs, propsOptions);
                root = $ddd276ef38f00731$export$ee4f9e12c0a92a1a(root, fallthroughAttrs);
            }
        }
    }
    if (vnode.dirs) {
        root = $ddd276ef38f00731$export$ee4f9e12c0a92a1a(root);
        root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    if (vnode.transition) root.transition = vnode.transition;
    result = root;
    $ddd276ef38f00731$var$setCurrentRenderingInstance(prev);
    return result;
}
const $ddd276ef38f00731$var$getChildRoot = (vnode)=>{
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = $ddd276ef38f00731$var$filterSingleRoot(rawChildren);
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
        $ddd276ef38f00731$var$normalizeVNode(childRoot),
        setRoot
    ];
};
function $ddd276ef38f00731$var$filterSingleRoot(children) {
    let singleRoot;
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        if ($ddd276ef38f00731$export$3868d13f8734ae81(child)) {
            if (child.type !== $ddd276ef38f00731$export$4d299b491347818a || child.children === "v-if") {
                if (singleRoot) return;
                else singleRoot = child;
            }
        } else return;
    }
    return singleRoot;
}
const $ddd276ef38f00731$var$getFunctionalFallthrough = (attrs)=>{
    let res;
    for(const key in attrs)if (key === "class" || key === "style" || (0, $3JmrW.isOn)(key)) (res || (res = {}))[key] = attrs[key];
    return res;
};
const $ddd276ef38f00731$var$filterModelListeners = (attrs, props)=>{
    const res = {};
    for(const key in attrs)if (!(0, $3JmrW.isModelListener)(key) || !(key.slice(9) in props)) res[key] = attrs[key];
    return res;
};
const $ddd276ef38f00731$var$isElementRoot = (vnode)=>{
    return vnode.shapeFlag & 7 || vnode.type === $ddd276ef38f00731$export$4d299b491347818a;
};
function $ddd276ef38f00731$var$shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component: component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag: patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    if (nextVNode.dirs || nextVNode.transition) return true;
    if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024) return true;
        if (patchFlag & 16) {
            if (!prevProps) return !!nextProps;
            return $ddd276ef38f00731$var$hasPropsChanged(prevProps, nextProps, emits);
        } else if (patchFlag & 8) {
            const dynamicProps = nextVNode.dynamicProps;
            for(let i = 0; i < dynamicProps.length; i++){
                const key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key] && !$ddd276ef38f00731$var$isEmitListener(emits, key)) return true;
            }
        }
    } else {
        if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) return true;
        }
        if (prevProps === nextProps) return false;
        if (!prevProps) return !!nextProps;
        if (!nextProps) return true;
        return $ddd276ef38f00731$var$hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
}
function $ddd276ef38f00731$var$hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) return true;
    for(let i = 0; i < nextKeys.length; i++){
        const key = nextKeys[i];
        if (nextProps[key] !== prevProps[key] && !$ddd276ef38f00731$var$isEmitListener(emitsOptions, key)) return true;
    }
    return false;
}
function $ddd276ef38f00731$var$updateHOCHostEl({ vnode: vnode, parent: parent }, el) {
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
const $ddd276ef38f00731$var$COMPONENTS = "components";
const $ddd276ef38f00731$var$DIRECTIVES = "directives";
function $ddd276ef38f00731$export$681d65eec9d1d1e8(name, maybeSelfReference) {
    return $ddd276ef38f00731$var$resolveAsset($ddd276ef38f00731$var$COMPONENTS, name, true, maybeSelfReference) || name;
}
const $ddd276ef38f00731$var$NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function $ddd276ef38f00731$export$b44c564a05ca975(component) {
    if ((0, $3JmrW.isString)(component)) return $ddd276ef38f00731$var$resolveAsset($ddd276ef38f00731$var$COMPONENTS, component, false) || component;
    else return component || $ddd276ef38f00731$var$NULL_DYNAMIC_COMPONENT;
}
function $ddd276ef38f00731$export$a1989e995cd481be(name) {
    return $ddd276ef38f00731$var$resolveAsset($ddd276ef38f00731$var$DIRECTIVES, name);
}
function $ddd276ef38f00731$var$resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance = $ddd276ef38f00731$var$currentRenderingInstance || $ddd276ef38f00731$var$currentInstance;
    if (instance) {
        const Component = instance.type;
        if (type === $ddd276ef38f00731$var$COMPONENTS) {
            const selfName = $ddd276ef38f00731$var$getComponentName(Component, false);
            if (selfName && (selfName === name || selfName === (0, $3JmrW.camelize)(name) || selfName === (0, $3JmrW.capitalize)((0, $3JmrW.camelize)(name)))) return Component;
        }
        const res = // local registration
        // check instance[type] first which is resolved for options API
        $ddd276ef38f00731$var$resolve(instance[type] || Component[type], name) || // global registration
        $ddd276ef38f00731$var$resolve(instance.appContext[type], name);
        if (!res && maybeSelfReference) return Component;
        return res;
    }
}
function $ddd276ef38f00731$var$resolve(registry, name) {
    return registry && (registry[name] || registry[(0, $3JmrW.camelize)(name)] || registry[(0, $3JmrW.capitalize)((0, $3JmrW.camelize)(name))]);
}
const $ddd276ef38f00731$var$isSuspense = (type)=>type.__isSuspense;
let $ddd276ef38f00731$var$suspenseId = 0;
const $ddd276ef38f00731$var$SuspenseImpl = {
    name: "Suspense",
    // In order to make Suspense tree-shakable, we need to avoid importing it
    // directly in the renderer. The renderer checks for the __isSuspense flag
    // on a vnode's type and calls the `process` method, passing in renderer
    // internals.
    __isSuspense: true,
    process (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
        if (n1 == null) $ddd276ef38f00731$var$mountSuspense(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals);
        else $ddd276ef38f00731$var$patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, rendererInternals);
    },
    hydrate: $ddd276ef38f00731$var$hydrateSuspense,
    create: $ddd276ef38f00731$var$createSuspenseBoundary,
    normalize: $ddd276ef38f00731$var$normalizeSuspenseChildren
};
const $ddd276ef38f00731$export$74bf444e3cd11ea5 = $ddd276ef38f00731$var$SuspenseImpl;
function $ddd276ef38f00731$var$triggerEvent(vnode, name) {
    const eventListener = vnode.props && vnode.props[name];
    if ((0, $3JmrW.isFunction)(eventListener)) eventListener();
}
function $ddd276ef38f00731$var$mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
    const { p: patch, o: { createElement: createElement } } = rendererInternals;
    const hiddenContainer = createElement("div");
    const suspense = vnode.suspense = $ddd276ef38f00731$var$createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals);
    patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds);
    if (suspense.deps > 0) {
        $ddd276ef38f00731$var$triggerEvent(vnode, "onPending");
        $ddd276ef38f00731$var$triggerEvent(vnode, "onFallback");
        patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        namespace, slotScopeIds);
        $ddd276ef38f00731$var$setActiveBranch(suspense, vnode.ssFallback);
    } else suspense.resolve(false, true);
}
function $ddd276ef38f00731$var$patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement: createElement } }) {
    const suspense = n2.suspense = n1.suspense;
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch: activeBranch, pendingBranch: pendingBranch, isInFallback: isInFallback, isHydrating: isHydrating } = suspense;
    if (pendingBranch) {
        suspense.pendingBranch = newBranch;
        if ($ddd276ef38f00731$var$isSameVNodeType(newBranch, pendingBranch)) {
            patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
            if (suspense.deps <= 0) suspense.resolve();
            else if (isInFallback) {
                if (!isHydrating) {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                    namespace, slotScopeIds, optimized);
                    $ddd276ef38f00731$var$setActiveBranch(suspense, newFallback);
                }
            }
        } else {
            suspense.pendingId = $ddd276ef38f00731$var$suspenseId++;
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
                    $ddd276ef38f00731$var$setActiveBranch(suspense, newFallback);
                }
            } else if (activeBranch && $ddd276ef38f00731$var$isSameVNodeType(newBranch, activeBranch)) {
                patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, namespace, slotScopeIds, optimized);
                suspense.resolve(true);
            } else {
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
                if (suspense.deps <= 0) suspense.resolve();
            }
        }
    } else if (activeBranch && $ddd276ef38f00731$var$isSameVNodeType(newBranch, activeBranch)) {
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, namespace, slotScopeIds, optimized);
        $ddd276ef38f00731$var$setActiveBranch(suspense, newBranch);
    } else {
        $ddd276ef38f00731$var$triggerEvent(n2, "onPending");
        suspense.pendingBranch = newBranch;
        if (newBranch.shapeFlag & 512) suspense.pendingId = newBranch.component.suspenseId;
        else suspense.pendingId = $ddd276ef38f00731$var$suspenseId++;
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
let $ddd276ef38f00731$var$hasWarned = false;
function $ddd276ef38f00731$var$createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
    const { p: patch, m: move, um: unmount, n: next, o: { parentNode: parentNode, remove: remove } } = rendererInternals;
    let parentSuspenseId;
    const isSuspensible = $ddd276ef38f00731$var$isVNodeSuspensible(vnode);
    if (isSuspensible) {
        if (parentSuspense == null ? void 0 : parentSuspense.pendingBranch) {
            parentSuspenseId = parentSuspense.pendingId;
            parentSuspense.deps++;
        }
    }
    const timeout = vnode.props ? (0, $3JmrW.toNumber)(vnode.props.timeout) : void 0;
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
            const { vnode: vnode2, activeBranch: activeBranch, pendingBranch: pendingBranch, pendingId: pendingId, effects: effects, parentComponent: parentComponent2, container: container2 } = suspense;
            let delayEnter = false;
            if (suspense.isHydrating) suspense.isHydrating = false;
            else if (!resume) {
                delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
                if (delayEnter) activeBranch.transition.afterLeave = ()=>{
                    if (pendingId === suspense.pendingId) {
                        move(pendingBranch, container2, next(activeBranch), 0);
                        $ddd276ef38f00731$export$59536a0199721cab(effects);
                    }
                };
                let { anchor: anchor2 } = suspense;
                if (activeBranch) {
                    anchor2 = next(activeBranch);
                    unmount(activeBranch, parentComponent2, suspense, true);
                }
                if (!delayEnter) move(pendingBranch, container2, anchor2, 0);
            }
            $ddd276ef38f00731$var$setActiveBranch(suspense, pendingBranch);
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
            if (!hasUnresolvedAncestor && !delayEnter) $ddd276ef38f00731$export$59536a0199721cab(effects);
            suspense.effects = [];
            if (isSuspensible) {
                if (parentSuspense && parentSuspense.pendingBranch && parentSuspenseId === parentSuspense.pendingId) {
                    parentSuspense.deps--;
                    if (parentSuspense.deps === 0 && !sync) parentSuspense.resolve();
                }
            }
            $ddd276ef38f00731$var$triggerEvent(vnode2, "onResolve");
        },
        fallback (fallbackVNode) {
            if (!suspense.pendingBranch) return;
            const { vnode: vnode2, activeBranch: activeBranch, parentComponent: parentComponent2, container: container2, namespace: namespace2 } = suspense;
            $ddd276ef38f00731$var$triggerEvent(vnode2, "onFallback");
            const anchor2 = next(activeBranch);
            const mountFallback = ()=>{
                if (!suspense.isInFallback) return;
                patch(null, fallbackVNode, container2, anchor2, parentComponent2, null, // fallback tree will not have suspense context
                namespace2, slotScopeIds, optimized);
                $ddd276ef38f00731$var$setActiveBranch(suspense, fallbackVNode);
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
                $ddd276ef38f00731$export$d3da1ecaf1206c58(err, instance, 0);
            }).then((asyncSetupResult)=>{
                if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) return;
                instance.asyncResolved = true;
                const { vnode: vnode2 } = instance;
                $ddd276ef38f00731$var$handleSetupResult(instance, asyncSetupResult, false);
                if (hydratedEl) vnode2.el = hydratedEl;
                const placeholder = !hydratedEl && instance.subTree.el;
                setupRenderEffect(instance, vnode2, // component may have been moved before resolve.
                // if this is not a hydration, instance.subTree will be the comment
                // placeholder.
                parentNode(hydratedEl || instance.subTree.el), // anchor will not be used if this is hydration, so only need to
                // consider the comment placeholder case.
                hydratedEl ? null : next(instance.subTree), suspense, namespace, optimized);
                if (placeholder) remove(placeholder);
                $ddd276ef38f00731$var$updateHOCHostEl(instance, vnode2.el);
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
function $ddd276ef38f00731$var$hydrateSuspense(node, vnode, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals, hydrateNode) {
    const suspense = vnode.suspense = $ddd276ef38f00731$var$createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, // eslint-disable-next-line no-restricted-globals
    document.createElement("div"), null, namespace, slotScopeIds, optimized, rendererInternals, true);
    const result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);
    if (suspense.deps === 0) suspense.resolve(false, true);
    return result;
}
function $ddd276ef38f00731$var$normalizeSuspenseChildren(vnode) {
    const { shapeFlag: shapeFlag, children: children } = vnode;
    const isSlotChildren = shapeFlag & 32;
    vnode.ssContent = $ddd276ef38f00731$var$normalizeSuspenseSlot(isSlotChildren ? children.default : children);
    vnode.ssFallback = isSlotChildren ? $ddd276ef38f00731$var$normalizeSuspenseSlot(children.fallback) : $ddd276ef38f00731$export$bf5c4cf060303d58($ddd276ef38f00731$export$4d299b491347818a);
}
function $ddd276ef38f00731$var$normalizeSuspenseSlot(s) {
    let block;
    if ((0, $3JmrW.isFunction)(s)) {
        const trackBlock = $ddd276ef38f00731$var$isBlockTreeEnabled && s._c;
        if (trackBlock) {
            s._d = false;
            $ddd276ef38f00731$export$e7eaa45e502fe5cc();
        }
        s = s();
        if (trackBlock) {
            s._d = true;
            block = $ddd276ef38f00731$var$currentBlock;
            $ddd276ef38f00731$var$closeBlock();
        }
    }
    if ((0, $3JmrW.isArray)(s)) {
        const singleChild = $ddd276ef38f00731$var$filterSingleRoot(s);
        s = singleChild;
    }
    s = $ddd276ef38f00731$var$normalizeVNode(s);
    if (block && !s.dynamicChildren) s.dynamicChildren = block.filter((c)=>c !== s);
    return s;
}
function $ddd276ef38f00731$var$queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
        if ((0, $3JmrW.isArray)(fn)) suspense.effects.push(...fn);
        else suspense.effects.push(fn);
    } else $ddd276ef38f00731$export$59536a0199721cab(fn);
}
function $ddd276ef38f00731$var$setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode: vnode, parentComponent: parentComponent } = suspense;
    const el = vnode.el = branch.el;
    if (parentComponent && parentComponent.subTree === vnode) {
        parentComponent.vnode.el = el;
        $ddd276ef38f00731$var$updateHOCHostEl(parentComponent, el);
    }
}
function $ddd276ef38f00731$var$isVNodeSuspensible(vnode) {
    var _a;
    return ((_a = vnode.props) == null ? void 0 : _a.suspensible) != null && vnode.props.suspensible !== false;
}
function $ddd276ef38f00731$export$ede35fc0e5500309(effect, options) {
    return $ddd276ef38f00731$var$doWatch(effect, null, options);
}
function $ddd276ef38f00731$export$b7f27ea67102d543(effect, options) {
    return $ddd276ef38f00731$var$doWatch(effect, null, {
        flush: "post"
    });
}
function $ddd276ef38f00731$export$2035654f31b0e555(effect, options) {
    return $ddd276ef38f00731$var$doWatch(effect, null, {
        flush: "sync"
    });
}
const $ddd276ef38f00731$var$INITIAL_WATCHER_VALUE = {};
function $ddd276ef38f00731$export$3db5d71bdb2d5499(source, cb, options) {
    return $ddd276ef38f00731$var$doWatch(source, cb, options);
}
function $ddd276ef38f00731$var$doWatch(source, cb, { immediate: immediate, deep: deep, flush: flush, once: once, onTrack: onTrack, onTrigger: onTrigger } = (0, $3JmrW.EMPTY_OBJ)) {
    var _a;
    if (cb && once) {
        const _cb = cb;
        cb = (...args)=>{
            _cb(...args);
            unwatch();
        };
    }
    const warnInvalidSource = (s)=>{
        $ddd276ef38f00731$var$warn$1(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
    };
    const instance = (0, $7BTmT.getCurrentScope)() === ((_a = $ddd276ef38f00731$var$currentInstance) == null ? void 0 : _a.scope) ? $ddd276ef38f00731$var$currentInstance : null;
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if ((0, $7BTmT.isRef)(source)) {
        getter = ()=>source.value;
        forceTrigger = (0, $7BTmT.isShallow)(source);
    } else if ((0, $7BTmT.isReactive)(source)) {
        getter = ()=>source;
        deep = true;
    } else if ((0, $3JmrW.isArray)(source)) {
        isMultiSource = true;
        forceTrigger = source.some((s)=>(0, $7BTmT.isReactive)(s) || (0, $7BTmT.isShallow)(s));
        getter = ()=>source.map((s)=>{
                if ((0, $7BTmT.isRef)(s)) return s.value;
                else if ((0, $7BTmT.isReactive)(s)) return $ddd276ef38f00731$var$traverse(s);
                else if ((0, $3JmrW.isFunction)(s)) return $ddd276ef38f00731$export$b22fcaf88446e9bf(s, instance, 2);
            });
    } else if ((0, $3JmrW.isFunction)(source)) {
        if (cb) getter = ()=>$ddd276ef38f00731$export$b22fcaf88446e9bf(source, instance, 2);
        else getter = ()=>{
            if (instance && instance.isUnmounted) return;
            if (cleanup) cleanup();
            return $ddd276ef38f00731$export$dae85862a8d94378(source, instance, 3, [
                onCleanup
            ]);
        };
    } else getter = (0, $3JmrW.NOOP);
    if (cb && deep) {
        const baseGetter = getter;
        getter = ()=>$ddd276ef38f00731$var$traverse(baseGetter());
    }
    let cleanup;
    let onCleanup = (fn)=>{
        cleanup = effect.onStop = ()=>{
            $ddd276ef38f00731$export$b22fcaf88446e9bf(fn, instance, 4);
            cleanup = effect.onStop = void 0;
        };
    };
    let ssrCleanup;
    if ($ddd276ef38f00731$var$isInSSRComponentSetup) {
        onCleanup = (0, $3JmrW.NOOP);
        if (!cb) getter();
        else if (immediate) $ddd276ef38f00731$export$dae85862a8d94378(cb, instance, 3, [
            getter(),
            isMultiSource ? [] : void 0,
            onCleanup
        ]);
        if (flush === "sync") {
            const ctx = $ddd276ef38f00731$export$6b1c54dc4befcda();
            ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
        } else return 0, $3JmrW.NOOP;
    }
    let oldValue = isMultiSource ? new Array(source.length).fill($ddd276ef38f00731$var$INITIAL_WATCHER_VALUE) : $ddd276ef38f00731$var$INITIAL_WATCHER_VALUE;
    const job = ()=>{
        if (!effect.active || !effect.dirty) return;
        if (cb) {
            const newValue = effect.run();
            if (deep || forceTrigger || (isMultiSource ? newValue.some((v1, i)=>(0, $3JmrW.hasChanged)(v1, oldValue[i])) : (0, $3JmrW.hasChanged)(newValue, oldValue)) || false) {
                if (cleanup) cleanup();
                $ddd276ef38f00731$export$dae85862a8d94378(cb, instance, 3, [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === $ddd276ef38f00731$var$INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === $ddd276ef38f00731$var$INITIAL_WATCHER_VALUE ? [] : oldValue,
                    onCleanup
                ]);
                oldValue = newValue;
            }
        } else effect.run();
    };
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === "sync") scheduler = job;
    else if (flush === "post") scheduler = ()=>$ddd276ef38f00731$var$queuePostRenderEffect(job, instance && instance.suspense);
    else {
        job.pre = true;
        if (instance) job.id = instance.uid;
        scheduler = ()=>$ddd276ef38f00731$var$queueJob(job);
    }
    const effect = new (0, $7BTmT.ReactiveEffect)(getter, (0, $3JmrW.NOOP), scheduler);
    const unwatch = ()=>{
        effect.stop();
        if (instance && instance.scope) (0, $3JmrW.remove)(instance.scope.effects, effect);
    };
    if (cb) {
        if (immediate) job();
        else oldValue = effect.run();
    } else if (flush === "post") $ddd276ef38f00731$var$queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
    else effect.run();
    if (ssrCleanup) ssrCleanup.push(unwatch);
    return unwatch;
}
function $ddd276ef38f00731$var$instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = (0, $3JmrW.isString)(source) ? source.includes(".") ? $ddd276ef38f00731$var$createPathGetter(publicThis, source) : ()=>publicThis[source] : source.bind(publicThis, publicThis);
    let cb;
    if ((0, $3JmrW.isFunction)(value)) cb = value;
    else {
        cb = value.handler;
        options = value;
    }
    const cur = $ddd276ef38f00731$var$currentInstance;
    $ddd276ef38f00731$var$setCurrentInstance(this);
    const res = $ddd276ef38f00731$var$doWatch(getter, cb.bind(publicThis), options);
    if (cur) $ddd276ef38f00731$var$setCurrentInstance(cur);
    else $ddd276ef38f00731$var$unsetCurrentInstance();
    return res;
}
function $ddd276ef38f00731$var$createPathGetter(ctx, path) {
    const segments = path.split(".");
    return ()=>{
        let cur = ctx;
        for(let i = 0; i < segments.length && cur; i++)cur = cur[segments[i]];
        return cur;
    };
}
function $ddd276ef38f00731$var$traverse(value, seen) {
    if (!(0, $3JmrW.isObject)(value) || value["__v_skip"]) return value;
    seen = seen || /* @__PURE__ */ new Set();
    if (seen.has(value)) return value;
    seen.add(value);
    if ((0, $7BTmT.isRef)(value)) $ddd276ef38f00731$var$traverse(value.value, seen);
    else if ((0, $3JmrW.isArray)(value)) for(let i = 0; i < value.length; i++)$ddd276ef38f00731$var$traverse(value[i], seen);
    else if ((0, $3JmrW.isSet)(value) || (0, $3JmrW.isMap)(value)) value.forEach((v1)=>{
        $ddd276ef38f00731$var$traverse(v1, seen);
    });
    else if ((0, $3JmrW.isPlainObject)(value)) for(const key in value)$ddd276ef38f00731$var$traverse(value[key], seen);
    return value;
}
function $ddd276ef38f00731$var$validateDirectiveName(name) {
    if ((0, $3JmrW.isBuiltInDirective)(name)) $ddd276ef38f00731$var$warn$1("Do not use built-in directive ids as custom directive id: " + name);
}
function $ddd276ef38f00731$export$49729353e7c1e6c5(vnode, directives) {
    const internalInstance = $ddd276ef38f00731$var$currentRenderingInstance;
    if (internalInstance === null) return vnode;
    const instance = $ddd276ef38f00731$var$getExposeProxy(internalInstance) || internalInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for(let i = 0; i < directives.length; i++){
        let [dir, value, arg, modifiers = (0, $3JmrW.EMPTY_OBJ)] = directives[i];
        if (dir) {
            if ((0, $3JmrW.isFunction)(dir)) dir = {
                mounted: dir,
                updated: dir
            };
            if (dir.deep) $ddd276ef38f00731$var$traverse(value);
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
function $ddd276ef38f00731$var$invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for(let i = 0; i < bindings.length; i++){
        const binding = bindings[i];
        if (oldBindings) binding.oldValue = oldBindings[i].value;
        let hook = binding.dir[name];
        if (hook) {
            (0, $7BTmT.pauseTracking)();
            $ddd276ef38f00731$export$dae85862a8d94378(hook, instance, 8, [
                vnode.el,
                binding,
                vnode,
                prevVNode
            ]);
            (0, $7BTmT.resetTracking)();
        }
    }
}
const $ddd276ef38f00731$var$leaveCbKey = Symbol("_leaveCb");
const $ddd276ef38f00731$var$enterCbKey = Symbol("_enterCb");
function $ddd276ef38f00731$export$d2a0a1bc267c90f6() {
    const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: /* @__PURE__ */ new Map()
    };
    $ddd276ef38f00731$export$6d1641039221b5cb(()=>{
        state.isMounted = true;
    });
    $ddd276ef38f00731$export$40c420df62d2614(()=>{
        state.isUnmounting = true;
    });
    return state;
}
const $ddd276ef38f00731$var$TransitionHookValidator = [
    Function,
    Array
];
const $ddd276ef38f00731$export$b876c99684f8cf3b = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: $ddd276ef38f00731$var$TransitionHookValidator,
    onEnter: $ddd276ef38f00731$var$TransitionHookValidator,
    onAfterEnter: $ddd276ef38f00731$var$TransitionHookValidator,
    onEnterCancelled: $ddd276ef38f00731$var$TransitionHookValidator,
    // leave
    onBeforeLeave: $ddd276ef38f00731$var$TransitionHookValidator,
    onLeave: $ddd276ef38f00731$var$TransitionHookValidator,
    onAfterLeave: $ddd276ef38f00731$var$TransitionHookValidator,
    onLeaveCancelled: $ddd276ef38f00731$var$TransitionHookValidator,
    // appear
    onBeforeAppear: $ddd276ef38f00731$var$TransitionHookValidator,
    onAppear: $ddd276ef38f00731$var$TransitionHookValidator,
    onAfterAppear: $ddd276ef38f00731$var$TransitionHookValidator,
    onAppearCancelled: $ddd276ef38f00731$var$TransitionHookValidator
};
const $ddd276ef38f00731$var$BaseTransitionImpl = {
    name: `BaseTransition`,
    props: $ddd276ef38f00731$export$b876c99684f8cf3b,
    setup (props, { slots: slots }) {
        const instance = $ddd276ef38f00731$export$f13e630aa3915748();
        const state = $ddd276ef38f00731$export$d2a0a1bc267c90f6();
        let prevTransitionKey;
        return ()=>{
            const children = slots.default && $ddd276ef38f00731$export$a67f9b1229c7c97a(slots.default(), true);
            if (!children || !children.length) return;
            let child = children[0];
            if (children.length > 1) {
                let hasFound = false;
                for (const c of children)if (c.type !== $ddd276ef38f00731$export$4d299b491347818a) {
                    child = c;
                    hasFound = true;
                    break;
                }
            }
            const rawProps = (0, $7BTmT.toRaw)(props);
            const { mode: mode } = rawProps;
            if (state.isLeaving) return $ddd276ef38f00731$var$emptyPlaceholder(child);
            const innerChild = $ddd276ef38f00731$var$getKeepAliveChild(child);
            if (!innerChild) return $ddd276ef38f00731$var$emptyPlaceholder(child);
            const enterHooks = $ddd276ef38f00731$export$76ac1779589cd824(innerChild, rawProps, state, instance);
            $ddd276ef38f00731$export$7770a22486565649(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && $ddd276ef38f00731$var$getKeepAliveChild(oldChild);
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
            if (oldInnerChild && oldInnerChild.type !== $ddd276ef38f00731$export$4d299b491347818a && (!$ddd276ef38f00731$var$isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
                const leavingHooks = $ddd276ef38f00731$export$76ac1779589cd824(oldInnerChild, rawProps, state, instance);
                $ddd276ef38f00731$export$7770a22486565649(oldInnerChild, leavingHooks);
                if (mode === "out-in") {
                    state.isLeaving = true;
                    leavingHooks.afterLeave = ()=>{
                        state.isLeaving = false;
                        if (instance.update.active !== false) {
                            instance.effect.dirty = true;
                            instance.update();
                        }
                    };
                    return $ddd276ef38f00731$var$emptyPlaceholder(child);
                } else if (mode === "in-out" && innerChild.type !== $ddd276ef38f00731$export$4d299b491347818a) leavingHooks.delayLeave = (el, earlyRemove, delayedLeave)=>{
                    const leavingVNodesCache = $ddd276ef38f00731$var$getLeavingNodesForType(state, oldInnerChild);
                    leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                    el[$ddd276ef38f00731$var$leaveCbKey] = ()=>{
                        earlyRemove();
                        el[$ddd276ef38f00731$var$leaveCbKey] = void 0;
                        delete enterHooks.delayedLeave;
                    };
                    enterHooks.delayedLeave = delayedLeave;
                };
            }
            return child;
        };
    }
};
const $ddd276ef38f00731$export$abd95b5f5e8a8837 = $ddd276ef38f00731$var$BaseTransitionImpl;
function $ddd276ef38f00731$var$getLeavingNodesForType(state, vnode) {
    const { leavingVNodes: leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
        leavingVNodesCache = /* @__PURE__ */ Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
}
function $ddd276ef38f00731$export$76ac1779589cd824(vnode, props, state, instance) {
    const { appear: appear, mode: mode, persisted: persisted = false, onBeforeEnter: onBeforeEnter, onEnter: onEnter, onAfterEnter: onAfterEnter, onEnterCancelled: onEnterCancelled, onBeforeLeave: onBeforeLeave, onLeave: onLeave, onAfterLeave: onAfterLeave, onLeaveCancelled: onLeaveCancelled, onBeforeAppear: onBeforeAppear, onAppear: onAppear, onAfterAppear: onAfterAppear, onAppearCancelled: onAppearCancelled } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = $ddd276ef38f00731$var$getLeavingNodesForType(state, vnode);
    const callHook = (hook, args)=>{
        hook && $ddd276ef38f00731$export$dae85862a8d94378(hook, instance, 9, args);
    };
    const callAsyncHook = (hook, args)=>{
        const done = args[1];
        callHook(hook, args);
        if ((0, $3JmrW.isArray)(hook)) {
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
            if (el[$ddd276ef38f00731$var$leaveCbKey]) el[$ddd276ef38f00731$var$leaveCbKey](true);
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode && $ddd276ef38f00731$var$isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[$ddd276ef38f00731$var$leaveCbKey]) leavingVNode.el[$ddd276ef38f00731$var$leaveCbKey]();
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
            const done = el[$ddd276ef38f00731$var$enterCbKey] = (cancelled)=>{
                if (called) return;
                called = true;
                if (cancelled) callHook(cancelHook, [
                    el
                ]);
                else callHook(afterHook, [
                    el
                ]);
                if (hooks.delayedLeave) hooks.delayedLeave();
                el[$ddd276ef38f00731$var$enterCbKey] = void 0;
            };
            if (hook) callAsyncHook(hook, [
                el,
                done
            ]);
            else done();
        },
        leave (el, remove) {
            const key2 = String(vnode.key);
            if (el[$ddd276ef38f00731$var$enterCbKey]) el[$ddd276ef38f00731$var$enterCbKey](true);
            if (state.isUnmounting) return remove();
            callHook(onBeforeLeave, [
                el
            ]);
            let called = false;
            const done = el[$ddd276ef38f00731$var$leaveCbKey] = (cancelled)=>{
                if (called) return;
                called = true;
                remove();
                if (cancelled) callHook(onLeaveCancelled, [
                    el
                ]);
                else callHook(onAfterLeave, [
                    el
                ]);
                el[$ddd276ef38f00731$var$leaveCbKey] = void 0;
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
            return $ddd276ef38f00731$export$76ac1779589cd824(vnode2, props, state, instance);
        }
    };
    return hooks;
}
function $ddd276ef38f00731$var$emptyPlaceholder(vnode) {
    if ($ddd276ef38f00731$var$isKeepAlive(vnode)) {
        vnode = $ddd276ef38f00731$export$ee4f9e12c0a92a1a(vnode);
        vnode.children = null;
        return vnode;
    }
}
function $ddd276ef38f00731$var$getKeepAliveChild(vnode) {
    return $ddd276ef38f00731$var$isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
}
function $ddd276ef38f00731$export$7770a22486565649(vnode, hooks) {
    if (vnode.shapeFlag & 6 && vnode.component) $ddd276ef38f00731$export$7770a22486565649(vnode.component.subTree, hooks);
    else if (vnode.shapeFlag & 128) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else vnode.transition = hooks;
}
function $ddd276ef38f00731$export$a67f9b1229c7c97a(children, keepComment = false, parentKey) {
    let ret = [];
    let keyedFragmentCount = 0;
    for(let i = 0; i < children.length; i++){
        let child = children[i];
        const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
        if (child.type === $ddd276ef38f00731$export$ffb0004e005737fa) {
            if (child.patchFlag & 128) keyedFragmentCount++;
            ret = ret.concat($ddd276ef38f00731$export$a67f9b1229c7c97a(child.children, keepComment, key));
        } else if (keepComment || child.type !== $ddd276ef38f00731$export$4d299b491347818a) ret.push(key != null ? $ddd276ef38f00731$export$ee4f9e12c0a92a1a(child, {
            key: key
        }) : child);
    }
    if (keyedFragmentCount > 1) for(let i = 0; i < ret.length; i++)ret[i].patchFlag = -2;
    return ret;
}
/*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
function $ddd276ef38f00731$export$afa64b67e5a01c3b(options, extraOptions) {
    return (0, $3JmrW.isFunction)(options) ? // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (()=>(0, $3JmrW.extend)({
            name: options.name
        }, extraOptions, {
            setup: options
        }))() : options;
}
const $ddd276ef38f00731$var$isAsyncWrapper = (i)=>!!i.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
function $ddd276ef38f00731$export$d75d499b4c16cf21(source) {
    if ((0, $3JmrW.isFunction)(source)) source = {
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
            if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) comp = comp.default;
            resolvedComp = comp;
            return comp;
        }));
    };
    return $ddd276ef38f00731$export$afa64b67e5a01c3b({
        name: "AsyncComponentWrapper",
        __asyncLoader: load,
        get __asyncResolved () {
            return resolvedComp;
        },
        setup () {
            const instance = $ddd276ef38f00731$var$currentInstance;
            if (resolvedComp) return ()=>$ddd276ef38f00731$var$createInnerComp(resolvedComp, instance);
            const onError = (err)=>{
                pendingRequest = null;
                $ddd276ef38f00731$export$d3da1ecaf1206c58(err, instance, 13, !errorComponent);
            };
            if (suspensible && instance.suspense || $ddd276ef38f00731$var$isInSSRComponentSetup) return load().then((comp)=>{
                return ()=>$ddd276ef38f00731$var$createInnerComp(comp, instance);
            }).catch((err)=>{
                onError(err);
                return ()=>errorComponent ? $ddd276ef38f00731$export$bf5c4cf060303d58(errorComponent, {
                        error: err
                    }) : null;
            });
            const loaded = (0, $7BTmT.ref)(false);
            const error = (0, $7BTmT.ref)();
            const delayed = (0, $7BTmT.ref)(!!delay);
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
                if (instance.parent && $ddd276ef38f00731$var$isKeepAlive(instance.parent.vnode)) {
                    instance.parent.effect.dirty = true;
                    $ddd276ef38f00731$var$queueJob(instance.parent.update);
                }
            }).catch((err)=>{
                onError(err);
                error.value = err;
            });
            return ()=>{
                if (loaded.value && resolvedComp) return $ddd276ef38f00731$var$createInnerComp(resolvedComp, instance);
                else if (error.value && errorComponent) return $ddd276ef38f00731$export$bf5c4cf060303d58(errorComponent, {
                    error: error.value
                });
                else if (loadingComponent && !delayed.value) return $ddd276ef38f00731$export$bf5c4cf060303d58(loadingComponent);
            };
        }
    });
}
function $ddd276ef38f00731$var$createInnerComp(comp, parent) {
    const { ref: ref2, props: props, children: children, ce: ce } = parent.vnode;
    const vnode = $ddd276ef38f00731$export$bf5c4cf060303d58(comp, props, children);
    vnode.ref = ref2;
    vnode.ce = ce;
    delete parent.vnode.ce;
    return vnode;
}
const $ddd276ef38f00731$var$isKeepAlive = (vnode)=>vnode.type.__isKeepAlive;
const $ddd276ef38f00731$var$KeepAliveImpl = {
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
        const instance = $ddd276ef38f00731$export$f13e630aa3915748();
        const sharedContext = instance.ctx;
        if (!sharedContext.renderer) return ()=>{
            const children = slots.default && slots.default();
            return children && children.length === 1 ? children[0] : children;
        };
        const cache = /* @__PURE__ */ new Map();
        const keys = /* @__PURE__ */ new Set();
        let current = null;
        if (__VUE_PROD_DEVTOOLS__) instance.__v_cache = cache;
        const parentSuspense = instance.suspense;
        const { renderer: { p: patch, m: move, um: _unmount, o: { createElement: createElement } } } = sharedContext;
        const storageContainer = createElement("div");
        sharedContext.activate = (vnode, container, anchor, namespace, optimized)=>{
            const instance2 = vnode.component;
            move(vnode, container, anchor, 0, parentSuspense);
            patch(instance2.vnode, vnode, container, anchor, instance2, parentSuspense, namespace, vnode.slotScopeIds, optimized);
            $ddd276ef38f00731$var$queuePostRenderEffect(()=>{
                instance2.isDeactivated = false;
                if (instance2.a) (0, $3JmrW.invokeArrayFns)(instance2.a);
                const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
                if (vnodeHook) $ddd276ef38f00731$var$invokeVNodeHook(vnodeHook, instance2.parent, vnode);
            }, parentSuspense);
            if (__VUE_PROD_DEVTOOLS__) $ddd276ef38f00731$var$devtoolsComponentAdded(instance2);
        };
        sharedContext.deactivate = (vnode)=>{
            const instance2 = vnode.component;
            move(vnode, storageContainer, null, 1, parentSuspense);
            $ddd276ef38f00731$var$queuePostRenderEffect(()=>{
                if (instance2.da) (0, $3JmrW.invokeArrayFns)(instance2.da);
                const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
                if (vnodeHook) $ddd276ef38f00731$var$invokeVNodeHook(vnodeHook, instance2.parent, vnode);
                instance2.isDeactivated = true;
            }, parentSuspense);
            if (__VUE_PROD_DEVTOOLS__) $ddd276ef38f00731$var$devtoolsComponentAdded(instance2);
        };
        function unmount(vnode) {
            $ddd276ef38f00731$var$resetShapeFlag(vnode);
            _unmount(vnode, instance, parentSuspense, true);
        }
        function pruneCache(filter) {
            cache.forEach((vnode, key)=>{
                const name = $ddd276ef38f00731$var$getComponentName(vnode.type);
                if (name && (!filter || !filter(name))) pruneCacheEntry(key);
            });
        }
        function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || !$ddd276ef38f00731$var$isSameVNodeType(cached, current)) unmount(cached);
            else if (current) $ddd276ef38f00731$var$resetShapeFlag(current);
            cache.delete(key);
            keys.delete(key);
        }
        $ddd276ef38f00731$export$3db5d71bdb2d5499(()=>[
                props.include,
                props.exclude
            ], ([include, exclude])=>{
            include && pruneCache((name)=>$ddd276ef38f00731$var$matches(include, name));
            exclude && pruneCache((name)=>!$ddd276ef38f00731$var$matches(exclude, name));
        }, // prune post-render after `current` has been updated
        {
            flush: "post",
            deep: true
        });
        let pendingCacheKey = null;
        const cacheSubtree = ()=>{
            if (pendingCacheKey != null) cache.set(pendingCacheKey, $ddd276ef38f00731$var$getInnerChild(instance.subTree));
        };
        $ddd276ef38f00731$export$6d1641039221b5cb(cacheSubtree);
        $ddd276ef38f00731$export$5876c47052fb88b1(cacheSubtree);
        $ddd276ef38f00731$export$40c420df62d2614(()=>{
            cache.forEach((cached)=>{
                const { subTree: subTree, suspense: suspense } = instance;
                const vnode = $ddd276ef38f00731$var$getInnerChild(subTree);
                if (cached.type === vnode.type && cached.key === vnode.key) {
                    $ddd276ef38f00731$var$resetShapeFlag(vnode);
                    const da = vnode.component.da;
                    da && $ddd276ef38f00731$var$queuePostRenderEffect(da, suspense);
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
                current = null;
                return children;
            } else if (!$ddd276ef38f00731$export$3868d13f8734ae81(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
                current = null;
                return rawVNode;
            }
            let vnode = $ddd276ef38f00731$var$getInnerChild(rawVNode);
            const comp = vnode.type;
            const name = $ddd276ef38f00731$var$getComponentName($ddd276ef38f00731$var$isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
            const { include: include, exclude: exclude, max: max } = props;
            if (include && (!name || !$ddd276ef38f00731$var$matches(include, name)) || exclude && name && $ddd276ef38f00731$var$matches(exclude, name)) {
                current = vnode;
                return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            if (vnode.el) {
                vnode = $ddd276ef38f00731$export$ee4f9e12c0a92a1a(vnode);
                if (rawVNode.shapeFlag & 128) rawVNode.ssContent = vnode;
            }
            pendingCacheKey = key;
            if (cachedVNode) {
                vnode.el = cachedVNode.el;
                vnode.component = cachedVNode.component;
                if (vnode.transition) $ddd276ef38f00731$export$7770a22486565649(vnode, vnode.transition);
                vnode.shapeFlag |= 512;
                keys.delete(key);
                keys.add(key);
            } else {
                keys.add(key);
                if (max && keys.size > parseInt(max, 10)) pruneCacheEntry(keys.values().next().value);
            }
            vnode.shapeFlag |= 256;
            current = vnode;
            return $ddd276ef38f00731$var$isSuspense(rawVNode.type) ? rawVNode : vnode;
        };
    }
};
const $ddd276ef38f00731$export$70eb8a58709972df = $ddd276ef38f00731$var$KeepAliveImpl;
function $ddd276ef38f00731$var$matches(pattern, name) {
    if ((0, $3JmrW.isArray)(pattern)) return pattern.some((p)=>$ddd276ef38f00731$var$matches(p, name));
    else if ((0, $3JmrW.isString)(pattern)) return pattern.split(",").includes(name);
    else if ((0, $3JmrW.isRegExp)(pattern)) return pattern.test(name);
    return false;
}
function $ddd276ef38f00731$export$ba52d824b95a2154(hook, target) {
    $ddd276ef38f00731$var$registerKeepAliveHook(hook, "a", target);
}
function $ddd276ef38f00731$export$bf1440eeaf5fa709(hook, target) {
    $ddd276ef38f00731$var$registerKeepAliveHook(hook, "da", target);
}
function $ddd276ef38f00731$var$registerKeepAliveHook(hook, type, target = $ddd276ef38f00731$var$currentInstance) {
    const wrappedHook = hook.__wdc || (hook.__wdc = ()=>{
        let current = target;
        while(current){
            if (current.isDeactivated) return;
            current = current.parent;
        }
        return hook();
    });
    $ddd276ef38f00731$var$injectHook(type, wrappedHook, target);
    if (target) {
        let current = target.parent;
        while(current && current.parent){
            if ($ddd276ef38f00731$var$isKeepAlive(current.parent.vnode)) $ddd276ef38f00731$var$injectToKeepAliveRoot(wrappedHook, type, target, current);
            current = current.parent;
        }
    }
}
function $ddd276ef38f00731$var$injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    const injected = $ddd276ef38f00731$var$injectHook(type, hook, keepAliveRoot, true);
    $ddd276ef38f00731$export$13348a43ccacfe58(()=>{
        (0, $3JmrW.remove)(keepAliveRoot[type], injected);
    }, target);
}
function $ddd276ef38f00731$var$resetShapeFlag(vnode) {
    vnode.shapeFlag &= -257;
    vnode.shapeFlag &= -513;
}
function $ddd276ef38f00731$var$getInnerChild(vnode) {
    return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
}
function $ddd276ef38f00731$var$injectHook(type, hook, target = $ddd276ef38f00731$var$currentInstance, prepend = false) {
    if (target) {
        const hooks = target[type] || (target[type] = []);
        const wrappedHook = hook.__weh || (hook.__weh = (...args)=>{
            if (target.isUnmounted) return;
            (0, $7BTmT.pauseTracking)();
            $ddd276ef38f00731$var$setCurrentInstance(target);
            const res = $ddd276ef38f00731$export$dae85862a8d94378(hook, target, type, args);
            $ddd276ef38f00731$var$unsetCurrentInstance();
            (0, $7BTmT.resetTracking)();
            return res;
        });
        if (prepend) hooks.unshift(wrappedHook);
        else hooks.push(wrappedHook);
        return wrappedHook;
    }
}
const $ddd276ef38f00731$var$createHook = (lifecycle)=>(hook, target = $ddd276ef38f00731$var$currentInstance)=>// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
        (!$ddd276ef38f00731$var$isInSSRComponentSetup || lifecycle === "sp") && $ddd276ef38f00731$var$injectHook(lifecycle, (...args)=>hook(...args), target);
const $ddd276ef38f00731$export$23b7aeb0d671f804 = $ddd276ef38f00731$var$createHook("bm");
const $ddd276ef38f00731$export$6d1641039221b5cb = $ddd276ef38f00731$var$createHook("m");
const $ddd276ef38f00731$export$ab91988a13872e4c = $ddd276ef38f00731$var$createHook("bu");
const $ddd276ef38f00731$export$5876c47052fb88b1 = $ddd276ef38f00731$var$createHook("u");
const $ddd276ef38f00731$export$40c420df62d2614 = $ddd276ef38f00731$var$createHook("bum");
const $ddd276ef38f00731$export$13348a43ccacfe58 = $ddd276ef38f00731$var$createHook("um");
const $ddd276ef38f00731$export$ebf0c601f267bceb = $ddd276ef38f00731$var$createHook("sp");
const $ddd276ef38f00731$export$898295a813d662eb = $ddd276ef38f00731$var$createHook("rtg");
const $ddd276ef38f00731$export$2b41f4235363e921 = $ddd276ef38f00731$var$createHook("rtc");
function $ddd276ef38f00731$export$6a3a15856e50ad19(hook, target = $ddd276ef38f00731$var$currentInstance) {
    $ddd276ef38f00731$var$injectHook("ec", hook, target);
}
function $ddd276ef38f00731$export$4bf387f59bfc6d67(source, renderItem, cache, index) {
    let ret;
    const cached = cache && cache[index];
    if ((0, $3JmrW.isArray)(source) || (0, $3JmrW.isString)(source)) {
        ret = new Array(source.length);
        for(let i = 0, l = source.length; i < l; i++)ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
    } else if (typeof source === "number") {
        ret = new Array(source);
        for(let i = 0; i < source; i++)ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    } else if ((0, $3JmrW.isObject)(source)) {
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
function $ddd276ef38f00731$export$85738f8fcd0a5430(slots, dynamicSlots) {
    for(let i = 0; i < dynamicSlots.length; i++){
        const slot = dynamicSlots[i];
        if ((0, $3JmrW.isArray)(slot)) for(let j = 0; j < slot.length; j++)slots[slot[j].name] = slot[j].fn;
        else if (slot) slots[slot.name] = slot.key ? (...args)=>{
            const res = slot.fn(...args);
            if (res) res.key = slot.key;
            return res;
        } : slot.fn;
    }
    return slots;
}
function $ddd276ef38f00731$export$4abee4c34694ada1(slots, name, props = {}, fallback, noSlotted) {
    if ($ddd276ef38f00731$var$currentRenderingInstance.isCE || $ddd276ef38f00731$var$currentRenderingInstance.parent && $ddd276ef38f00731$var$isAsyncWrapper($ddd276ef38f00731$var$currentRenderingInstance.parent) && $ddd276ef38f00731$var$currentRenderingInstance.parent.isCE) {
        if (name !== "default") props.name = name;
        return $ddd276ef38f00731$export$bf5c4cf060303d58("slot", props, fallback && fallback());
    }
    let slot = slots[name];
    if (slot && slot._c) slot._d = false;
    $ddd276ef38f00731$export$e7eaa45e502fe5cc();
    const validSlotContent = slot && $ddd276ef38f00731$var$ensureValidVNode(slot(props));
    const rendered = $ddd276ef38f00731$export$9f2dfe8048dfb22b($ddd276ef38f00731$export$ffb0004e005737fa, {
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
function $ddd276ef38f00731$var$ensureValidVNode(vnodes) {
    return vnodes.some((child)=>{
        if (!$ddd276ef38f00731$export$3868d13f8734ae81(child)) return true;
        if (child.type === $ddd276ef38f00731$export$4d299b491347818a) return false;
        if (child.type === $ddd276ef38f00731$export$ffb0004e005737fa && !$ddd276ef38f00731$var$ensureValidVNode(child.children)) return false;
        return true;
    }) ? vnodes : null;
}
function $ddd276ef38f00731$export$2fb94ff667a6a1a(obj, preserveCaseIfNecessary) {
    const ret = {};
    for(const key in obj)ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : (0, $3JmrW.toHandlerKey)(key)] = obj[key];
    return ret;
}
const $ddd276ef38f00731$var$getPublicInstance = (i)=>{
    if (!i) return null;
    if ($ddd276ef38f00731$var$isStatefulComponent(i)) return $ddd276ef38f00731$var$getExposeProxy(i) || i.proxy;
    return $ddd276ef38f00731$var$getPublicInstance(i.parent);
};
const $ddd276ef38f00731$var$publicPropertiesMap = // Move PURE marker to new line to workaround compiler discarding it
// due to type annotation
/* @__PURE__ */ (0, $3JmrW.extend)(/* @__PURE__ */ Object.create(null), {
    $: (i)=>i,
    $el: (i)=>i.vnode.el,
    $data: (i)=>i.data,
    $props: (i)=>(0, i.props),
    $attrs: (i)=>(0, i.attrs),
    $slots: (i)=>(0, i.slots),
    $refs: (i)=>(0, i.refs),
    $parent: (i)=>$ddd276ef38f00731$var$getPublicInstance(i.parent),
    $root: (i)=>$ddd276ef38f00731$var$getPublicInstance(i.root),
    $emit: (i)=>i.emit,
    $options: (i)=>__VUE_OPTIONS_API__ ? $ddd276ef38f00731$var$resolveMergedOptions(i) : i.type,
    $forceUpdate: (i)=>i.f || (i.f = ()=>{
            i.effect.dirty = true;
            $ddd276ef38f00731$var$queueJob(i.update);
        }),
    $nextTick: (i)=>i.n || (i.n = $ddd276ef38f00731$export$bdd553fddd433dcb.bind(i.proxy)),
    $watch: (i)=>__VUE_OPTIONS_API__ ? $ddd276ef38f00731$var$instanceWatch.bind(i) : (0, $3JmrW.NOOP)
});
const $ddd276ef38f00731$var$isReservedPrefix = (key)=>key === "_" || key === "$";
const $ddd276ef38f00731$var$hasSetupBinding = (state, key)=>state !== (0, $3JmrW.EMPTY_OBJ) && !state.__isScriptSetup && (0, $3JmrW.hasOwn)(state, key);
const $ddd276ef38f00731$var$PublicInstanceProxyHandlers = {
    get ({ _: instance }, key) {
        const { ctx: ctx, setupState: setupState, data: data, props: props, accessCache: accessCache, type: type, appContext: appContext } = instance;
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
            else if ($ddd276ef38f00731$var$hasSetupBinding(setupState, key)) {
                accessCache[key] = 1 /* SETUP */ ;
                return setupState[key];
            } else if (data !== (0, $3JmrW.EMPTY_OBJ) && (0, $3JmrW.hasOwn)(data, key)) {
                accessCache[key] = 2 /* DATA */ ;
                return data[key];
            } else if (// only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) && (0, $3JmrW.hasOwn)(normalizedProps, key)) {
                accessCache[key] = 3 /* PROPS */ ;
                return props[key];
            } else if (ctx !== (0, $3JmrW.EMPTY_OBJ) && (0, $3JmrW.hasOwn)(ctx, key)) {
                accessCache[key] = 4 /* CONTEXT */ ;
                return ctx[key];
            } else if (!__VUE_OPTIONS_API__ || $ddd276ef38f00731$var$shouldCacheAccess) accessCache[key] = 0 /* OTHER */ ;
        }
        const publicGetter = $ddd276ef38f00731$var$publicPropertiesMap[key];
        let cssModule, globalProperties;
        if (publicGetter) {
            if (key === "$attrs") (0, $7BTmT.track)(instance, "get", key);
            return publicGetter(instance);
        } else if (// css module (injected by vue-loader)
        (cssModule = type.__cssModules) && (cssModule = cssModule[key])) return cssModule;
        else if (ctx !== (0, $3JmrW.EMPTY_OBJ) && (0, $3JmrW.hasOwn)(ctx, key)) {
            accessCache[key] = 4 /* CONTEXT */ ;
            return ctx[key];
        } else if (// global properties
        globalProperties = appContext.config.globalProperties, (0, $3JmrW.hasOwn)(globalProperties, key)) return globalProperties[key];
    },
    set ({ _: instance }, key, value) {
        const { data: data, setupState: setupState, ctx: ctx } = instance;
        if ($ddd276ef38f00731$var$hasSetupBinding(setupState, key)) {
            setupState[key] = value;
            return true;
        } else {
            if (data !== (0, $3JmrW.EMPTY_OBJ) && (0, $3JmrW.hasOwn)(data, key)) {
                data[key] = value;
                return true;
            } else if ((0, $3JmrW.hasOwn)(instance.props, key)) return false;
        }
        if (key[0] === "$" && key.slice(1) in instance) return false;
        else ctx[key] = value;
        return true;
    },
    has ({ _: { data: data, setupState: setupState, accessCache: accessCache, ctx: ctx, appContext: appContext, propsOptions: propsOptions } }, key) {
        let normalizedProps;
        return !!accessCache[key] || data !== (0, $3JmrW.EMPTY_OBJ) && (0, $3JmrW.hasOwn)(data, key) || $ddd276ef38f00731$var$hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && (0, $3JmrW.hasOwn)(normalizedProps, key) || (0, $3JmrW.hasOwn)(ctx, key) || (0, $3JmrW.hasOwn)($ddd276ef38f00731$var$publicPropertiesMap, key) || (0, $3JmrW.hasOwn)(appContext.config.globalProperties, key);
    },
    defineProperty (target, key, descriptor) {
        if (descriptor.get != null) target._.accessCache[key] = 0;
        else if ((0, $3JmrW.hasOwn)(descriptor, "value")) this.set(target, key, descriptor.value, null);
        return Reflect.defineProperty(target, key, descriptor);
    }
};
var $ddd276ef38f00731$var$target;
const $ddd276ef38f00731$var$RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */ (0, $3JmrW.extend)({}, $ddd276ef38f00731$var$PublicInstanceProxyHandlers, {
    get (target, key) {
        if (key === Symbol.unscopables) return;
        return $ddd276ef38f00731$var$PublicInstanceProxyHandlers.get(target, key, target);
    },
    has (_, key) {
        const has = key[0] !== "_" && !(0, $3JmrW.isGloballyAllowed)(key);
        return has;
    }
});
function $ddd276ef38f00731$var$createDevRenderContext(instance) {
    const target = {};
    Object.defineProperty(target, `_`, {
        configurable: true,
        enumerable: false,
        get: ()=>instance
    });
    Object.keys($ddd276ef38f00731$var$publicPropertiesMap).forEach((key)=>{
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: ()=>$ddd276ef38f00731$var$publicPropertiesMap[key](instance),
            // intercepted by the proxy so no need for implementation,
            // but needed to prevent set errors
            set: (0, $3JmrW.NOOP)
        });
    });
    return target;
}
function $ddd276ef38f00731$var$exposePropsOnRenderContext(instance) {
    const { ctx: ctx, propsOptions: [propsOptions] } = instance;
    if (propsOptions) Object.keys(propsOptions).forEach((key)=>{
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>instance.props[key],
            set: (0, $3JmrW.NOOP)
        });
    });
}
function $ddd276ef38f00731$var$exposeSetupStateOnRenderContext(instance) {
    const { ctx: ctx, setupState: setupState } = instance;
    Object.keys((0, $7BTmT.toRaw)(setupState)).forEach((key)=>{
        if (!setupState.__isScriptSetup) {
            if ($ddd276ef38f00731$var$isReservedPrefix(key[0])) {
                $ddd276ef38f00731$var$warn$1(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
                return;
            }
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: ()=>setupState[key],
                set: (0, $3JmrW.NOOP)
            });
        }
    });
}
const $ddd276ef38f00731$var$warnRuntimeUsage = (method)=>$ddd276ef38f00731$var$warn$1(`${method}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
function $ddd276ef38f00731$export$80b33eababae110e() {
    return null;
}
function $ddd276ef38f00731$export$51ecece22fc17ddc() {
    return null;
}
function $ddd276ef38f00731$export$da25b65ca24b518a(exposed) {}
function $ddd276ef38f00731$export$77e79129327f3d0d(options) {}
function $ddd276ef38f00731$export$1b3acd4bb805b712() {
    return null;
}
function $ddd276ef38f00731$export$acd55aa037e791bb() {}
function $ddd276ef38f00731$export$4df9c0969a9e0160(props, defaults) {
    return null;
}
function $ddd276ef38f00731$export$9203a8e84125433c() {
    return $ddd276ef38f00731$var$getContext().slots;
}
function $ddd276ef38f00731$export$75e29435042cd2ea() {
    return $ddd276ef38f00731$var$getContext().attrs;
}
function $ddd276ef38f00731$export$fb78bd113157f1a1(props, name, options = (0, $3JmrW.EMPTY_OBJ)) {
    const i = $ddd276ef38f00731$export$f13e630aa3915748();
    const res = (0, $7BTmT.customRef)((track, trigger)=>{
        let localValue;
        $ddd276ef38f00731$export$2035654f31b0e555(()=>{
            const propValue = props[name];
            if ((0, $3JmrW.hasChanged)(localValue, propValue)) {
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
                if (!(rawProps && name in rawProps) && (0, $3JmrW.hasChanged)(value, localValue)) {
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
function $ddd276ef38f00731$var$getContext() {
    const i = $ddd276ef38f00731$export$f13e630aa3915748();
    return i.setupContext || (i.setupContext = $ddd276ef38f00731$var$createSetupContext(i));
}
function $ddd276ef38f00731$var$normalizePropsOrEmits(props) {
    return (0, $3JmrW.isArray)(props) ? props.reduce((normalized, p)=>(normalized[p] = null, normalized), {}) : props;
}
function $ddd276ef38f00731$export$ec60f47d4a8a2e7f(raw, defaults) {
    const props = $ddd276ef38f00731$var$normalizePropsOrEmits(raw);
    for(const key in defaults){
        if (key.startsWith("__skip")) continue;
        let opt = props[key];
        if (opt) {
            if ((0, $3JmrW.isArray)(opt) || (0, $3JmrW.isFunction)(opt)) opt = props[key] = {
                type: opt,
                default: defaults[key]
            };
            else opt.default = defaults[key];
        } else if (opt === null) opt = props[key] = {
            default: defaults[key]
        };
        if (opt && defaults[`__skip_${key}`]) opt.skipFactory = true;
    }
    return props;
}
function $ddd276ef38f00731$export$ad4f724f587e6828(a, b) {
    if (!a || !b) return a || b;
    if ((0, $3JmrW.isArray)(a) && (0, $3JmrW.isArray)(b)) return a.concat(b);
    return (0, $3JmrW.extend)({}, $ddd276ef38f00731$var$normalizePropsOrEmits(a), $ddd276ef38f00731$var$normalizePropsOrEmits(b));
}
function $ddd276ef38f00731$export$7c343e855c563faa(props, excludedKeys) {
    const ret = {};
    for(const key in props)if (!excludedKeys.includes(key)) Object.defineProperty(ret, key, {
        enumerable: true,
        get: ()=>props[key]
    });
    return ret;
}
function $ddd276ef38f00731$export$d6d6f7369f1fb104(getAwaitable) {
    const ctx = $ddd276ef38f00731$export$f13e630aa3915748();
    let awaitable = getAwaitable();
    $ddd276ef38f00731$var$unsetCurrentInstance();
    if ((0, $3JmrW.isPromise)(awaitable)) awaitable = awaitable.catch((e)=>{
        $ddd276ef38f00731$var$setCurrentInstance(ctx);
        throw e;
    });
    return [
        awaitable,
        ()=>$ddd276ef38f00731$var$setCurrentInstance(ctx)
    ];
}
function $ddd276ef38f00731$var$createDuplicateChecker() {
    const cache = /* @__PURE__ */ Object.create(null);
    return (type, key)=>{
        if (cache[key]) $ddd276ef38f00731$var$warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
        else cache[key] = type;
    };
}
let $ddd276ef38f00731$var$shouldCacheAccess = true;
function $ddd276ef38f00731$var$applyOptions(instance) {
    const options = $ddd276ef38f00731$var$resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    $ddd276ef38f00731$var$shouldCacheAccess = false;
    if (options.beforeCreate) $ddd276ef38f00731$var$callHook(options.beforeCreate, instance, "bc");
    const { // state
    data: dataOptions, computed: computedOptions, methods: methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, created: // lifecycle
    created, beforeMount: beforeMount, mounted: mounted, beforeUpdate: beforeUpdate, updated: updated, activated: activated, deactivated: deactivated, beforeDestroy: beforeDestroy, beforeUnmount: beforeUnmount, destroyed: destroyed, unmounted: unmounted, render: render, renderTracked: renderTracked, renderTriggered: renderTriggered, errorCaptured: errorCaptured, serverPrefetch: serverPrefetch, expose: // public API
    expose, inheritAttrs: inheritAttrs, components: // assets
    components, directives: directives, filters: filters } = options;
    const checkDuplicateProperties = null;
    if (injectOptions) $ddd276ef38f00731$var$resolveInjections(injectOptions, ctx, checkDuplicateProperties);
    if (methods) for(const key in methods){
        const methodHandler = methods[key];
        if ((0, $3JmrW.isFunction)(methodHandler)) ctx[key] = methodHandler.bind(publicThis);
    }
    if (dataOptions) {
        const data = dataOptions.call(publicThis, publicThis);
        if (!(0, $3JmrW.isObject)(data)) ;
        else instance.data = (0, $7BTmT.reactive)(data);
    }
    $ddd276ef38f00731$var$shouldCacheAccess = true;
    if (computedOptions) for(const key in computedOptions){
        const opt = computedOptions[key];
        const get = (0, $3JmrW.isFunction)(opt) ? opt.bind(publicThis, publicThis) : (0, $3JmrW.isFunction)(opt.get) ? opt.get.bind(publicThis, publicThis) : (0, $3JmrW.NOOP);
        const set = !(0, $3JmrW.isFunction)(opt) && (0, $3JmrW.isFunction)(opt.set) ? opt.set.bind(publicThis) : (0, $3JmrW.NOOP);
        const c = $ddd276ef38f00731$export$2983e091f1a1e8e2({
            get: get,
            set: set
        });
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>c.value,
            set: (v1)=>c.value = v1
        });
    }
    if (watchOptions) for(const key in watchOptions)$ddd276ef38f00731$var$createWatcher(watchOptions[key], ctx, publicThis, key);
    if (provideOptions) {
        const provides = (0, $3JmrW.isFunction)(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
        Reflect.ownKeys(provides).forEach((key)=>{
            $ddd276ef38f00731$export$abe1e183e22e10ad(key, provides[key]);
        });
    }
    if (created) $ddd276ef38f00731$var$callHook(created, instance, "c");
    function registerLifecycleHook(register, hook) {
        if ((0, $3JmrW.isArray)(hook)) hook.forEach((_hook)=>register(_hook.bind(publicThis)));
        else if (hook) register(hook.bind(publicThis));
    }
    registerLifecycleHook($ddd276ef38f00731$export$23b7aeb0d671f804, beforeMount);
    registerLifecycleHook($ddd276ef38f00731$export$6d1641039221b5cb, mounted);
    registerLifecycleHook($ddd276ef38f00731$export$ab91988a13872e4c, beforeUpdate);
    registerLifecycleHook($ddd276ef38f00731$export$5876c47052fb88b1, updated);
    registerLifecycleHook($ddd276ef38f00731$export$ba52d824b95a2154, activated);
    registerLifecycleHook($ddd276ef38f00731$export$bf1440eeaf5fa709, deactivated);
    registerLifecycleHook($ddd276ef38f00731$export$6a3a15856e50ad19, errorCaptured);
    registerLifecycleHook($ddd276ef38f00731$export$2b41f4235363e921, renderTracked);
    registerLifecycleHook($ddd276ef38f00731$export$898295a813d662eb, renderTriggered);
    registerLifecycleHook($ddd276ef38f00731$export$40c420df62d2614, beforeUnmount);
    registerLifecycleHook($ddd276ef38f00731$export$13348a43ccacfe58, unmounted);
    registerLifecycleHook($ddd276ef38f00731$export$ebf0c601f267bceb, serverPrefetch);
    if ((0, $3JmrW.isArray)(expose)) {
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
    if (render && instance.render === (0, $3JmrW.NOOP)) instance.render = render;
    if (inheritAttrs != null) instance.inheritAttrs = inheritAttrs;
    if (components) instance.components = components;
    if (directives) instance.directives = directives;
}
function $ddd276ef38f00731$var$resolveInjections(injectOptions, ctx, checkDuplicateProperties = (0, $3JmrW.NOOP)) {
    if ((0, $3JmrW.isArray)(injectOptions)) injectOptions = $ddd276ef38f00731$var$normalizeInject(injectOptions);
    for(const key in injectOptions){
        const opt = injectOptions[key];
        let injected;
        if ((0, $3JmrW.isObject)(opt)) {
            if ("default" in opt) injected = $ddd276ef38f00731$export$a976684a0efeb93f(opt.from || key, opt.default, true);
            else injected = $ddd276ef38f00731$export$a976684a0efeb93f(opt.from || key);
        } else injected = $ddd276ef38f00731$export$a976684a0efeb93f(opt);
        if ((0, $7BTmT.isRef)(injected)) Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>injected.value,
            set: (v1)=>injected.value = v1
        });
        else ctx[key] = injected;
    }
}
function $ddd276ef38f00731$var$callHook(hook, instance, type) {
    $ddd276ef38f00731$export$dae85862a8d94378((0, $3JmrW.isArray)(hook) ? hook.map((h)=>h.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function $ddd276ef38f00731$var$createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes(".") ? $ddd276ef38f00731$var$createPathGetter(publicThis, key) : ()=>publicThis[key];
    if ((0, $3JmrW.isString)(raw)) {
        const handler = ctx[raw];
        if ((0, $3JmrW.isFunction)(handler)) $ddd276ef38f00731$export$3db5d71bdb2d5499(getter, handler);
    } else if ((0, $3JmrW.isFunction)(raw)) $ddd276ef38f00731$export$3db5d71bdb2d5499(getter, raw.bind(publicThis));
    else if ((0, $3JmrW.isObject)(raw)) {
        if ((0, $3JmrW.isArray)(raw)) raw.forEach((r)=>$ddd276ef38f00731$var$createWatcher(r, ctx, publicThis, key));
        else {
            const handler = (0, $3JmrW.isFunction)(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
            if ((0, $3JmrW.isFunction)(handler)) $ddd276ef38f00731$export$3db5d71bdb2d5499(getter, handler, raw);
        }
    } else ;
}
function $ddd276ef38f00731$var$resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins: mixins, extends: extendsOptions } = base;
    const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies: optionMergeStrategies } } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) resolved = cached;
    else if (!globalMixins.length && !mixins && !extendsOptions) resolved = base;
    else {
        resolved = {};
        if (globalMixins.length) globalMixins.forEach((m)=>$ddd276ef38f00731$var$mergeOptions(resolved, m, optionMergeStrategies, true));
        $ddd276ef38f00731$var$mergeOptions(resolved, base, optionMergeStrategies);
    }
    if ((0, $3JmrW.isObject)(base)) cache.set(base, resolved);
    return resolved;
}
function $ddd276ef38f00731$var$mergeOptions(to, from, strats, asMixin = false) {
    const { mixins: mixins, extends: extendsOptions } = from;
    if (extendsOptions) $ddd276ef38f00731$var$mergeOptions(to, extendsOptions, strats, true);
    if (mixins) mixins.forEach((m)=>$ddd276ef38f00731$var$mergeOptions(to, m, strats, true));
    for(const key in from){
        if (asMixin && key === "expose") ;
        else {
            const strat = $ddd276ef38f00731$var$internalOptionMergeStrats[key] || strats && strats[key];
            to[key] = strat ? strat(to[key], from[key]) : from[key];
        }
    }
    return to;
}
const $ddd276ef38f00731$var$internalOptionMergeStrats = {
    data: $ddd276ef38f00731$var$mergeDataFn,
    props: $ddd276ef38f00731$var$mergeEmitsOrPropsOptions,
    emits: $ddd276ef38f00731$var$mergeEmitsOrPropsOptions,
    // objects
    methods: $ddd276ef38f00731$var$mergeObjectOptions,
    computed: $ddd276ef38f00731$var$mergeObjectOptions,
    // lifecycle
    beforeCreate: $ddd276ef38f00731$var$mergeAsArray,
    created: $ddd276ef38f00731$var$mergeAsArray,
    beforeMount: $ddd276ef38f00731$var$mergeAsArray,
    mounted: $ddd276ef38f00731$var$mergeAsArray,
    beforeUpdate: $ddd276ef38f00731$var$mergeAsArray,
    updated: $ddd276ef38f00731$var$mergeAsArray,
    beforeDestroy: $ddd276ef38f00731$var$mergeAsArray,
    beforeUnmount: $ddd276ef38f00731$var$mergeAsArray,
    destroyed: $ddd276ef38f00731$var$mergeAsArray,
    unmounted: $ddd276ef38f00731$var$mergeAsArray,
    activated: $ddd276ef38f00731$var$mergeAsArray,
    deactivated: $ddd276ef38f00731$var$mergeAsArray,
    errorCaptured: $ddd276ef38f00731$var$mergeAsArray,
    serverPrefetch: $ddd276ef38f00731$var$mergeAsArray,
    // assets
    components: $ddd276ef38f00731$var$mergeObjectOptions,
    directives: $ddd276ef38f00731$var$mergeObjectOptions,
    // watch
    watch: $ddd276ef38f00731$var$mergeWatchOptions,
    // provide / inject
    provide: $ddd276ef38f00731$var$mergeDataFn,
    inject: $ddd276ef38f00731$var$mergeInject
};
function $ddd276ef38f00731$var$mergeDataFn(to, from) {
    if (!from) return to;
    if (!to) return from;
    return function mergedDataFn() {
        return (0, $3JmrW.extend)((0, $3JmrW.isFunction)(to) ? to.call(this, this) : to, (0, $3JmrW.isFunction)(from) ? from.call(this, this) : from);
    };
}
function $ddd276ef38f00731$var$mergeInject(to, from) {
    return $ddd276ef38f00731$var$mergeObjectOptions($ddd276ef38f00731$var$normalizeInject(to), $ddd276ef38f00731$var$normalizeInject(from));
}
function $ddd276ef38f00731$var$normalizeInject(raw) {
    if ((0, $3JmrW.isArray)(raw)) {
        const res = {};
        for(let i = 0; i < raw.length; i++)res[raw[i]] = raw[i];
        return res;
    }
    return raw;
}
function $ddd276ef38f00731$var$mergeAsArray(to, from) {
    return to ? [
        ...new Set([].concat(to, from))
    ] : from;
}
function $ddd276ef38f00731$var$mergeObjectOptions(to, from) {
    return to ? (0, $3JmrW.extend)(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function $ddd276ef38f00731$var$mergeEmitsOrPropsOptions(to, from) {
    if (to) {
        if ((0, $3JmrW.isArray)(to) && (0, $3JmrW.isArray)(from)) return [
            .../* @__PURE__ */ new Set([
                ...to,
                ...from
            ])
        ];
        return (0, $3JmrW.extend)(/* @__PURE__ */ Object.create(null), $ddd276ef38f00731$var$normalizePropsOrEmits(to), $ddd276ef38f00731$var$normalizePropsOrEmits(from != null ? from : {}));
    } else return from;
}
function $ddd276ef38f00731$var$mergeWatchOptions(to, from) {
    if (!to) return from;
    if (!from) return to;
    const merged = (0, $3JmrW.extend)(/* @__PURE__ */ Object.create(null), to);
    for(const key in from)merged[key] = $ddd276ef38f00731$var$mergeAsArray(to[key], from[key]);
    return merged;
}
function $ddd276ef38f00731$var$createAppContext() {
    return {
        app: null,
        config: {
            isNativeTag: (0, $3JmrW.NO),
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
let $ddd276ef38f00731$var$uid$1 = 0;
function $ddd276ef38f00731$var$createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
        if (!(0, $3JmrW.isFunction)(rootComponent)) rootComponent = (0, $3JmrW.extend)({}, rootComponent);
        if (rootProps != null && !(0, $3JmrW.isObject)(rootProps)) rootProps = null;
        const context = $ddd276ef38f00731$var$createAppContext();
        const installedPlugins = /* @__PURE__ */ new WeakSet();
        let isMounted = false;
        const app = context.app = {
            _uid: $ddd276ef38f00731$var$uid$1++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            _instance: null,
            version: $ddd276ef38f00731$export$83d89fbfd8236492,
            get config () {
                return context.config;
            },
            set config (v){},
            use (plugin, ...options) {
                if (installedPlugins.has(plugin)) ;
                else if (plugin && (0, $3JmrW.isFunction)(plugin.install)) {
                    installedPlugins.add(plugin);
                    plugin.install(app, ...options);
                } else if ((0, $3JmrW.isFunction)(plugin)) {
                    installedPlugins.add(plugin);
                    plugin(app, ...options);
                }
                return app;
            },
            mixin (mixin) {
                if (__VUE_OPTIONS_API__) {
                    if (!context.mixins.includes(mixin)) context.mixins.push(mixin);
                }
                return app;
            },
            component (name, component) {
                if (!component) return context.components[name];
                context.components[name] = component;
                return app;
            },
            directive (name, directive) {
                if (!directive) return context.directives[name];
                context.directives[name] = directive;
                return app;
            },
            mount (rootContainer, isHydrate, namespace) {
                if (!isMounted) {
                    const vnode = $ddd276ef38f00731$export$bf5c4cf060303d58(rootComponent, rootProps);
                    vnode.appContext = context;
                    if (namespace === true) namespace = "svg";
                    else if (namespace === false) namespace = void 0;
                    if (isHydrate && hydrate) hydrate(vnode, rootContainer);
                    else render(vnode, rootContainer, namespace);
                    isMounted = true;
                    app._container = rootContainer;
                    rootContainer.__vue_app__ = app;
                    if (__VUE_PROD_DEVTOOLS__) {
                        app._instance = vnode.component;
                        $ddd276ef38f00731$var$devtoolsInitApp(app, $ddd276ef38f00731$export$83d89fbfd8236492);
                    }
                    return $ddd276ef38f00731$var$getExposeProxy(vnode.component) || vnode.component.proxy;
                }
            },
            unmount () {
                if (isMounted) {
                    render(null, app._container);
                    if (__VUE_PROD_DEVTOOLS__) {
                        app._instance = null;
                        $ddd276ef38f00731$var$devtoolsUnmountApp(app);
                    }
                    delete app._container.__vue_app__;
                }
            },
            provide (key, value) {
                context.provides[key] = value;
                return app;
            },
            runWithContext (fn) {
                $ddd276ef38f00731$var$currentApp = app;
                try {
                    return fn();
                } finally{
                    $ddd276ef38f00731$var$currentApp = null;
                }
            }
        };
        return app;
    };
}
let $ddd276ef38f00731$var$currentApp = null;
function $ddd276ef38f00731$export$abe1e183e22e10ad(key, value) {
    if (!$ddd276ef38f00731$var$currentInstance) ;
    else {
        let provides = $ddd276ef38f00731$var$currentInstance.provides;
        const parentProvides = $ddd276ef38f00731$var$currentInstance.parent && $ddd276ef38f00731$var$currentInstance.parent.provides;
        if (parentProvides === provides) provides = $ddd276ef38f00731$var$currentInstance.provides = Object.create(parentProvides);
        provides[key] = value;
    }
}
function $ddd276ef38f00731$export$a976684a0efeb93f(key, defaultValue, treatDefaultAsFactory = false) {
    const instance = $ddd276ef38f00731$var$currentInstance || $ddd276ef38f00731$var$currentRenderingInstance;
    if (instance || $ddd276ef38f00731$var$currentApp) {
        const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : $ddd276ef38f00731$var$currentApp._context.provides;
        if (provides && key in provides) return provides[key];
        else if (arguments.length > 1) return treatDefaultAsFactory && (0, $3JmrW.isFunction)(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    }
}
function $ddd276ef38f00731$export$caf6761f24fc571a() {
    return !!($ddd276ef38f00731$var$currentInstance || $ddd276ef38f00731$var$currentRenderingInstance || $ddd276ef38f00731$var$currentApp);
}
function $ddd276ef38f00731$var$initProps(instance, rawProps, isStateful, isSSR = false) {
    const props = {};
    const attrs = {};
    (0, $3JmrW.def)(attrs, $ddd276ef38f00731$var$InternalObjectKey, 1);
    instance.propsDefaults = /* @__PURE__ */ Object.create(null);
    $ddd276ef38f00731$var$setFullProps(instance, rawProps, props, attrs);
    for(const key in instance.propsOptions[0])if (!(key in props)) props[key] = void 0;
    if (isStateful) instance.props = isSSR ? props : (0, $7BTmT.shallowReactive)(props);
    else if (!instance.type.props) instance.props = attrs;
    else instance.props = props;
    instance.attrs = attrs;
}
function $ddd276ef38f00731$var$isInHmrContext(instance) {
    while(instance){
        if (instance.type.__hmrId) return true;
        instance = instance.parent;
    }
}
function $ddd276ef38f00731$var$updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props: props, attrs: attrs, vnode: { patchFlag: patchFlag } } = instance;
    const rawCurrentProps = (0, $7BTmT.toRaw)(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (// always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (optimized || patchFlag > 0) && !(patchFlag & 16)) {
        if (patchFlag & 8) {
            const propsToUpdate = instance.vnode.dynamicProps;
            for(let i = 0; i < propsToUpdate.length; i++){
                let key = propsToUpdate[i];
                if ($ddd276ef38f00731$var$isEmitListener(instance.emitsOptions, key)) continue;
                const value = rawProps[key];
                if (options) {
                    if ((0, $3JmrW.hasOwn)(attrs, key)) {
                        if (value !== attrs[key]) {
                            attrs[key] = value;
                            hasAttrsChanged = true;
                        }
                    } else {
                        const camelizedKey = (0, $3JmrW.camelize)(key);
                        props[camelizedKey] = $ddd276ef38f00731$var$resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
                    }
                } else if (value !== attrs[key]) {
                    attrs[key] = value;
                    hasAttrsChanged = true;
                }
            }
        }
    } else {
        if ($ddd276ef38f00731$var$setFullProps(instance, rawProps, props, attrs)) hasAttrsChanged = true;
        let kebabKey;
        for(const key in rawCurrentProps)if (!rawProps || // for camelCase
        !(0, $3JmrW.hasOwn)(rawProps, key) && // it's possible the original props was passed in as kebab-case
        // and converted to camelCase (#955)
        ((kebabKey = (0, $3JmrW.hyphenate)(key)) === key || !(0, $3JmrW.hasOwn)(rawProps, kebabKey))) {
            if (options) {
                if (rawPrevProps && // for camelCase
                (rawPrevProps[key] !== void 0 || // for kebab-case
                rawPrevProps[kebabKey] !== void 0)) props[key] = $ddd276ef38f00731$var$resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
            } else delete props[key];
        }
        if (attrs !== rawCurrentProps) {
            for(const key in attrs)if (!rawProps || !(0, $3JmrW.hasOwn)(rawProps, key) && true) {
                delete attrs[key];
                hasAttrsChanged = true;
            }
        }
    }
    if (hasAttrsChanged) (0, $7BTmT.trigger)(instance, "set", "$attrs");
}
function $ddd276ef38f00731$var$setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) for(let key in rawProps){
        if ((0, $3JmrW.isReservedProp)(key)) continue;
        const value = rawProps[key];
        let camelKey;
        if (options && (0, $3JmrW.hasOwn)(options, camelKey = (0, $3JmrW.camelize)(key))) {
            if (!needCastKeys || !needCastKeys.includes(camelKey)) props[camelKey] = value;
            else (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        } else if (!$ddd276ef38f00731$var$isEmitListener(instance.emitsOptions, key)) {
            if (!(key in attrs) || value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
            }
        }
    }
    if (needCastKeys) {
        const rawCurrentProps = (0, $7BTmT.toRaw)(props);
        const castValues = rawCastValues || (0, $3JmrW.EMPTY_OBJ);
        for(let i = 0; i < needCastKeys.length; i++){
            const key = needCastKeys[i];
            props[key] = $ddd276ef38f00731$var$resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !(0, $3JmrW.hasOwn)(castValues, key));
        }
    }
    return hasAttrsChanged;
}
function $ddd276ef38f00731$var$resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
        const hasDefault = (0, $3JmrW.hasOwn)(opt, "default");
        if (hasDefault && value === void 0) {
            const defaultValue = opt.default;
            if (opt.type !== Function && !opt.skipFactory && (0, $3JmrW.isFunction)(defaultValue)) {
                const { propsDefaults: propsDefaults } = instance;
                if (key in propsDefaults) value = propsDefaults[key];
                else {
                    $ddd276ef38f00731$var$setCurrentInstance(instance);
                    value = propsDefaults[key] = defaultValue.call(null, props);
                    $ddd276ef38f00731$var$unsetCurrentInstance();
                }
            } else value = defaultValue;
        }
        if (opt[0 /* shouldCast */ ]) {
            if (isAbsent && !hasDefault) value = false;
            else if (opt[1 /* shouldCastTrue */ ] && (value === "" || value === (0, $3JmrW.hyphenate)(key))) value = true;
        }
    }
    return value;
}
function $ddd276ef38f00731$var$normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) return cached;
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !(0, $3JmrW.isFunction)(comp)) {
        const extendProps = (raw2)=>{
            hasExtends = true;
            const [props, keys] = $ddd276ef38f00731$var$normalizePropsOptions(raw2, appContext, true);
            (0, $3JmrW.extend)(normalized, props);
            if (keys) needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendProps);
        if (comp.extends) extendProps(comp.extends);
        if (comp.mixins) comp.mixins.forEach(extendProps);
    }
    if (!raw && !hasExtends) {
        if ((0, $3JmrW.isObject)(comp)) cache.set(comp, (0, $3JmrW.EMPTY_ARR));
        return 0, $3JmrW.EMPTY_ARR;
    }
    if ((0, $3JmrW.isArray)(raw)) for(let i = 0; i < raw.length; i++){
        const normalizedKey = (0, $3JmrW.camelize)(raw[i]);
        if ($ddd276ef38f00731$var$validatePropName(normalizedKey)) normalized[normalizedKey] = (0, $3JmrW.EMPTY_OBJ);
    }
    else if (raw) for(const key in raw){
        const normalizedKey = (0, $3JmrW.camelize)(key);
        if ($ddd276ef38f00731$var$validatePropName(normalizedKey)) {
            const opt = raw[key];
            const prop = normalized[normalizedKey] = (0, $3JmrW.isArray)(opt) || (0, $3JmrW.isFunction)(opt) ? {
                type: opt
            } : (0, $3JmrW.extend)({}, opt);
            if (prop) {
                const booleanIndex = $ddd276ef38f00731$var$getTypeIndex(Boolean, prop.type);
                const stringIndex = $ddd276ef38f00731$var$getTypeIndex(String, prop.type);
                prop[0 /* shouldCast */ ] = booleanIndex > -1;
                prop[1 /* shouldCastTrue */ ] = stringIndex < 0 || booleanIndex < stringIndex;
                if (booleanIndex > -1 || (0, $3JmrW.hasOwn)(prop, "default")) needCastKeys.push(normalizedKey);
            }
        }
    }
    const res = [
        normalized,
        needCastKeys
    ];
    if ((0, $3JmrW.isObject)(comp)) cache.set(comp, res);
    return res;
}
function $ddd276ef38f00731$var$validatePropName(key) {
    if (key[0] !== "$") return true;
    return false;
}
function $ddd276ef38f00731$var$getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
    return match ? match[2] : ctor === null ? "null" : "";
}
function $ddd276ef38f00731$var$isSameType(a, b) {
    return $ddd276ef38f00731$var$getType(a) === $ddd276ef38f00731$var$getType(b);
}
function $ddd276ef38f00731$var$getTypeIndex(type, expectedTypes) {
    if ((0, $3JmrW.isArray)(expectedTypes)) return expectedTypes.findIndex((t)=>$ddd276ef38f00731$var$isSameType(t, type));
    else if ((0, $3JmrW.isFunction)(expectedTypes)) return $ddd276ef38f00731$var$isSameType(expectedTypes, type) ? 0 : -1;
    return -1;
}
function $ddd276ef38f00731$var$validateProps(rawProps, props, instance) {
    const resolvedValues = (0, $7BTmT.toRaw)(props);
    const options = instance.propsOptions[0];
    for(const key in options){
        let opt = options[key];
        if (opt == null) continue;
        $ddd276ef38f00731$var$validateProp(key, resolvedValues[key], opt, resolvedValues, !(0, $3JmrW.hasOwn)(rawProps, key) && !(0, $3JmrW.hasOwn)(rawProps, (0, $3JmrW.hyphenate)(key)));
    }
}
function $ddd276ef38f00731$var$validateProp(name, value, prop, props, isAbsent) {
    const { type: type, required: required, validator: validator, skipCheck: skipCheck } = prop;
    if (required && isAbsent) {
        $ddd276ef38f00731$var$warn$1('Missing required prop: "' + name + '"');
        return;
    }
    if (value == null && !required) return;
    if (type != null && type !== true && !skipCheck) {
        let isValid = false;
        const types = (0, $3JmrW.isArray)(type) ? type : [
            type
        ];
        const expectedTypes = [];
        for(let i = 0; i < types.length && !isValid; i++){
            const { valid: valid, expectedType: expectedType } = $ddd276ef38f00731$var$assertType(value, types[i]);
            expectedTypes.push(expectedType || "");
            isValid = valid;
        }
        if (!isValid) {
            $ddd276ef38f00731$var$warn$1($ddd276ef38f00731$var$getInvalidTypeMessage(name, value, expectedTypes));
            return;
        }
    }
    if (validator && !validator(value, props)) $ddd276ef38f00731$var$warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
}
const $ddd276ef38f00731$var$isSimpleType = /* @__PURE__ */ (0, $3JmrW.makeMap)("String,Number,Boolean,Function,Symbol,BigInt");
function $ddd276ef38f00731$var$assertType(value, type) {
    let valid;
    const expectedType = $ddd276ef38f00731$var$getType(type);
    if ($ddd276ef38f00731$var$isSimpleType(expectedType)) {
        const t = typeof value;
        valid = t === expectedType.toLowerCase();
        if (!valid && t === "object") valid = value instanceof type;
    } else if (expectedType === "Object") valid = (0, $3JmrW.isObject)(value);
    else if (expectedType === "Array") valid = (0, $3JmrW.isArray)(value);
    else if (expectedType === "null") valid = value === null;
    else valid = value instanceof type;
    return {
        valid: valid,
        expectedType: expectedType
    };
}
function $ddd276ef38f00731$var$getInvalidTypeMessage(name, value, expectedTypes) {
    if (expectedTypes.length === 0) return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
    let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map((0, $3JmrW.capitalize)).join(" | ")}`;
    const expectedType = expectedTypes[0];
    const receivedType = (0, $3JmrW.toRawType)(value);
    const expectedValue = $ddd276ef38f00731$var$styleValue(value, expectedType);
    const receivedValue = $ddd276ef38f00731$var$styleValue(value, receivedType);
    if (expectedTypes.length === 1 && $ddd276ef38f00731$var$isExplicable(expectedType) && !$ddd276ef38f00731$var$isBoolean(expectedType, receivedType)) message += ` with value ${expectedValue}`;
    message += `, got ${receivedType} `;
    if ($ddd276ef38f00731$var$isExplicable(receivedType)) message += `with value ${receivedValue}.`;
    return message;
}
function $ddd276ef38f00731$var$styleValue(value, type) {
    if (type === "String") return `"${value}"`;
    else if (type === "Number") return `${Number(value)}`;
    else return `${value}`;
}
function $ddd276ef38f00731$var$isExplicable(type) {
    const explicitTypes = [
        "string",
        "number",
        "boolean"
    ];
    return explicitTypes.some((elem)=>type.toLowerCase() === elem);
}
function $ddd276ef38f00731$var$isBoolean(...args) {
    return args.some((elem)=>elem.toLowerCase() === "boolean");
}
const $ddd276ef38f00731$var$isInternalKey = (key)=>key[0] === "_" || key === "$stable";
const $ddd276ef38f00731$var$normalizeSlotValue = (value)=>(0, $3JmrW.isArray)(value) ? value.map($ddd276ef38f00731$var$normalizeVNode) : [
        $ddd276ef38f00731$var$normalizeVNode(value)
    ];
const $ddd276ef38f00731$var$normalizeSlot = (key, rawSlot, ctx)=>{
    if (rawSlot._n) return rawSlot;
    const normalized = $ddd276ef38f00731$export$694b237e827a3d23((...args)=>{
        return $ddd276ef38f00731$var$normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
};
const $ddd276ef38f00731$var$normalizeObjectSlots = (rawSlots, slots, instance)=>{
    const ctx = rawSlots._ctx;
    for(const key in rawSlots){
        if ($ddd276ef38f00731$var$isInternalKey(key)) continue;
        const value = rawSlots[key];
        if ((0, $3JmrW.isFunction)(value)) slots[key] = $ddd276ef38f00731$var$normalizeSlot(key, value, ctx);
        else if (value != null) {
            const normalized = $ddd276ef38f00731$var$normalizeSlotValue(value);
            slots[key] = ()=>normalized;
        }
    }
};
const $ddd276ef38f00731$var$normalizeVNodeSlots = (instance, children)=>{
    const normalized = $ddd276ef38f00731$var$normalizeSlotValue(children);
    instance.slots.default = ()=>normalized;
};
const $ddd276ef38f00731$var$initSlots = (instance, children)=>{
    if (instance.vnode.shapeFlag & 32) {
        const type = children._;
        if (type) {
            instance.slots = (0, $7BTmT.toRaw)(children);
            (0, $3JmrW.def)(children, "_", type);
        } else $ddd276ef38f00731$var$normalizeObjectSlots(children, instance.slots = {});
    } else {
        instance.slots = {};
        if (children) $ddd276ef38f00731$var$normalizeVNodeSlots(instance, children);
    }
    (0, $3JmrW.def)(instance.slots, $ddd276ef38f00731$var$InternalObjectKey, 1);
};
const $ddd276ef38f00731$var$updateSlots = (instance, children, optimized)=>{
    const { vnode: vnode, slots: slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = (0, $3JmrW.EMPTY_OBJ);
    if (vnode.shapeFlag & 32) {
        const type = children._;
        if (type) {
            if (optimized && type === 1) needDeletionCheck = false;
            else {
                (0, $3JmrW.extend)(slots, children);
                if (!optimized && type === 1) delete slots._;
            }
        } else {
            needDeletionCheck = !children.$stable;
            $ddd276ef38f00731$var$normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
    } else if (children) {
        $ddd276ef38f00731$var$normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = {
            default: 1
        };
    }
    if (needDeletionCheck) {
        for(const key in slots)if (!$ddd276ef38f00731$var$isInternalKey(key) && deletionComparisonTarget[key] == null) delete slots[key];
    }
};
function $ddd276ef38f00731$var$setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if ((0, $3JmrW.isArray)(rawRef)) {
        rawRef.forEach((r, i)=>$ddd276ef38f00731$var$setRef(r, oldRawRef && ((0, $3JmrW.isArray)(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
        return;
    }
    if ($ddd276ef38f00731$var$isAsyncWrapper(vnode) && !isUnmount) return;
    const refValue = vnode.shapeFlag & 4 ? $ddd276ef38f00731$var$getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner, r: ref } = rawRef;
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === (0, $3JmrW.EMPTY_OBJ) ? owner.refs = {} : owner.refs;
    const setupState = owner.setupState;
    if (oldRef != null && oldRef !== ref) {
        if ((0, $3JmrW.isString)(oldRef)) {
            refs[oldRef] = null;
            if ((0, $3JmrW.hasOwn)(setupState, oldRef)) setupState[oldRef] = null;
        } else if ((0, $7BTmT.isRef)(oldRef)) oldRef.value = null;
    }
    if ((0, $3JmrW.isFunction)(ref)) $ddd276ef38f00731$export$b22fcaf88446e9bf(ref, owner, 12, [
        value,
        refs
    ]);
    else {
        const _isString = (0, $3JmrW.isString)(ref);
        const _isRef = (0, $7BTmT.isRef)(ref);
        if (_isString || _isRef) {
            const doSet = ()=>{
                if (rawRef.f) {
                    const existing = _isString ? (0, $3JmrW.hasOwn)(setupState, ref) ? setupState[ref] : refs[ref] : ref.value;
                    if (isUnmount) (0, $3JmrW.isArray)(existing) && (0, $3JmrW.remove)(existing, refValue);
                    else {
                        if (!(0, $3JmrW.isArray)(existing)) {
                            if (_isString) {
                                refs[ref] = [
                                    refValue
                                ];
                                if ((0, $3JmrW.hasOwn)(setupState, ref)) setupState[ref] = refs[ref];
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
                    if ((0, $3JmrW.hasOwn)(setupState, ref)) setupState[ref] = value;
                } else if (_isRef) {
                    ref.value = value;
                    if (rawRef.k) refs[rawRef.k] = value;
                }
            };
            if (value) {
                doSet.id = -1;
                $ddd276ef38f00731$var$queuePostRenderEffect(doSet, parentSuspense);
            } else doSet();
        }
    }
}
let $ddd276ef38f00731$var$hasMismatch = false;
const $ddd276ef38f00731$var$isSVGContainer = (container)=>container.namespaceURI.includes("svg") && container.tagName !== "foreignObject";
const $ddd276ef38f00731$var$isMathMLContainer = (container)=>container.namespaceURI.includes("MathML");
const $ddd276ef38f00731$var$getContainerType = (container)=>{
    if ($ddd276ef38f00731$var$isSVGContainer(container)) return "svg";
    if ($ddd276ef38f00731$var$isMathMLContainer(container)) return "mathml";
    return void 0;
};
const $ddd276ef38f00731$var$isComment = (node)=>node.nodeType === 8 /* COMMENT */ ;
function $ddd276ef38f00731$var$createHydrationFunctions(rendererInternals) {
    const { mt: mountComponent, p: patch, o: { patchProp: patchProp, createText: createText, nextSibling: nextSibling, parentNode: parentNode, remove: remove, insert: insert, createComment: createComment } } = rendererInternals;
    const hydrate = (vnode, container)=>{
        if (!container.hasChildNodes()) {
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ && $ddd276ef38f00731$var$warn$1(`Attempting to hydrate existing markup but container is empty. Performing full mount instead.`);
            patch(null, vnode, container);
            $ddd276ef38f00731$var$flushPostFlushCbs();
            container._vnode = vnode;
            return;
        }
        $ddd276ef38f00731$var$hasMismatch = false;
        hydrateNode(container.firstChild, vnode, null, null, null);
        $ddd276ef38f00731$var$flushPostFlushCbs();
        container._vnode = vnode;
        if ($ddd276ef38f00731$var$hasMismatch && true) console.error(`Hydration completed but contains mismatches.`);
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false)=>{
        const isFragmentStart = $ddd276ef38f00731$var$isComment(node) && node.data === "[";
        const onMismatch = ()=>handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
        const { type: type, ref: ref, shapeFlag: shapeFlag, patchFlag: patchFlag } = vnode;
        let domType = node.nodeType;
        vnode.el = node;
        if (__VUE_PROD_DEVTOOLS__) {
            if (!("__vnode" in node)) Object.defineProperty(node, "__vnode", {
                value: vnode,
                enumerable: false
            });
            if (!("__vueParentComponent" in node)) Object.defineProperty(node, "__vueParentComponent", {
                value: parentComponent,
                enumerable: false
            });
        }
        if (patchFlag === -2) {
            optimized = false;
            vnode.dynamicChildren = null;
        }
        let nextNode = null;
        switch(type){
            case $ddd276ef38f00731$export$5f1af8db9871e1d6:
                if (domType !== 3 /* TEXT */ ) {
                    if (vnode.children === "") {
                        insert(vnode.el = createText(""), parentNode(node), node);
                        nextNode = node;
                    } else nextNode = onMismatch();
                } else {
                    if (node.data !== vnode.children) {
                        $ddd276ef38f00731$var$hasMismatch = true;
                        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ && $ddd276ef38f00731$var$warn$1(`Hydration text mismatch in`, node.parentNode, `
  - rendered on server: ${JSON.stringify(node.data)}
  - expected on client: ${JSON.stringify(vnode.children)}`);
                        node.data = vnode.children;
                    }
                    nextNode = nextSibling(node);
                }
                break;
            case $ddd276ef38f00731$export$4d299b491347818a:
                if (isTemplateNode(node)) {
                    nextNode = nextSibling(node);
                    replaceNode(vnode.el = node.content.firstChild, node, parentComponent);
                } else if (domType !== 8 /* COMMENT */  || isFragmentStart) nextNode = onMismatch();
                else nextNode = nextSibling(node);
                break;
            case $ddd276ef38f00731$export$c1b9a1d3af45b7b6:
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
            case $ddd276ef38f00731$export$ffb0004e005737fa:
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
                    else if ($ddd276ef38f00731$var$isComment(node) && node.data === "teleport start") nextNode = locateClosingAnchor(node, node.data, "teleport end");
                    else nextNode = nextSibling(node);
                    mountComponent(vnode, container, null, parentComponent, parentSuspense, $ddd276ef38f00731$var$getContainerType(container), optimized);
                    if ($ddd276ef38f00731$var$isAsyncWrapper(vnode)) {
                        let subTree;
                        if (isFragmentStart) {
                            subTree = $ddd276ef38f00731$export$bf5c4cf060303d58($ddd276ef38f00731$export$ffb0004e005737fa);
                            subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
                        } else subTree = node.nodeType === 3 ? $ddd276ef38f00731$export$22f9b5ffd89dac9("") : $ddd276ef38f00731$export$bf5c4cf060303d58("div");
                        subTree.el = node;
                        vnode.component.subTree = subTree;
                    }
                } else if (shapeFlag & 64) {
                    if (domType !== 8 /* COMMENT */ ) nextNode = onMismatch();
                    else nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
                } else if (shapeFlag & 128) nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, $ddd276ef38f00731$var$getContainerType(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
                else if (__VUE_PROD_HYDRATION_MISMATCH_DETAILS__) $ddd276ef38f00731$var$warn$1("Invalid HostVNode type:", type, `(${typeof type})`);
        }
        if (ref != null) $ddd276ef38f00731$var$setRef(ref, null, parentSuspense, vnode);
        return nextNode;
    };
    const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        optimized = optimized || !!vnode.dynamicChildren;
        const { type: type, props: props, patchFlag: patchFlag, shapeFlag: shapeFlag, dirs: dirs, transition: transition } = vnode;
        const forcePatch = type === "input" || type === "option";
        if (forcePatch || patchFlag !== -1) {
            if (dirs) $ddd276ef38f00731$var$invokeDirectiveHook(vnode, null, parentComponent, "created");
            let needCallTransitionHooks = false;
            if (isTemplateNode(el)) {
                needCallTransitionHooks = $ddd276ef38f00731$var$needTransition(parentSuspense, transition) && parentComponent && parentComponent.vnode.props && parentComponent.vnode.props.appear;
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
                    $ddd276ef38f00731$var$hasMismatch = true;
                    if (__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ && !hasWarned) {
                        $ddd276ef38f00731$var$warn$1(`Hydration children mismatch on`, el, `
Server rendered element contains more child nodes than client vdom.`);
                        hasWarned = true;
                    }
                    const cur = next;
                    next = next.nextSibling;
                    remove(cur);
                }
            } else if (shapeFlag & 8) {
                if (el.textContent !== vnode.children) {
                    $ddd276ef38f00731$var$hasMismatch = true;
                    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ && $ddd276ef38f00731$var$warn$1(`Hydration text content mismatch on`, el, `
  - rendered on server: ${el.textContent}
  - expected on client: ${vnode.children}`);
                    el.textContent = vnode.children;
                }
            }
            if (props) {
                if (forcePatch || !optimized || patchFlag & 48) {
                    for(const key in props)if (forcePatch && (key.endsWith("value") || key === "indeterminate") || (0, $3JmrW.isOn)(key) && !(0, $3JmrW.isReservedProp)(key) || // force hydrate v-bind with .prop modifiers
                    key[0] === ".") patchProp(el, key, null, props[key], void 0, void 0, parentComponent);
                } else if (props.onClick) patchProp(el, "onClick", null, props.onClick, void 0, void 0, parentComponent);
            }
            let vnodeHooks;
            if (vnodeHooks = props && props.onVnodeBeforeMount) $ddd276ef38f00731$var$invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            if (dirs) $ddd276ef38f00731$var$invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
            if ((vnodeHooks = props && props.onVnodeMounted) || dirs || needCallTransitionHooks) $ddd276ef38f00731$var$queueEffectWithSuspense(()=>{
                vnodeHooks && $ddd276ef38f00731$var$invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                needCallTransitionHooks && transition.enter(el);
                dirs && $ddd276ef38f00731$var$invokeDirectiveHook(vnode, null, parentComponent, "mounted");
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
            const vnode = optimized ? children[i] : children[i] = $ddd276ef38f00731$var$normalizeVNode(children[i]);
            if (node) node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
            else if (vnode.type === $ddd276ef38f00731$export$5f1af8db9871e1d6 && !vnode.children) continue;
            else {
                $ddd276ef38f00731$var$hasMismatch = true;
                if (__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ && !hasWarned) {
                    $ddd276ef38f00731$var$warn$1(`Hydration children mismatch on`, container, `
Server rendered element contains fewer child nodes than client vdom.`);
                    hasWarned = true;
                }
                patch(null, vnode, container, null, parentComponent, parentSuspense, $ddd276ef38f00731$var$getContainerType(container), slotScopeIds);
            }
        }
        return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        const { slotScopeIds: fragmentSlotScopeIds } = vnode;
        if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        const container = parentNode(node);
        const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
        if (next && $ddd276ef38f00731$var$isComment(next) && next.data === "]") return nextSibling(vnode.anchor = next);
        else {
            $ddd276ef38f00731$var$hasMismatch = true;
            insert(vnode.anchor = createComment(`]`), container, next);
            return next;
        }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment)=>{
        $ddd276ef38f00731$var$hasMismatch = true;
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ && $ddd276ef38f00731$var$warn$1(`Hydration node mismatch:
- rendered on server:`, node, node.nodeType === 3 /* TEXT */  ? `(text)` : $ddd276ef38f00731$var$isComment(node) && node.data === "[" ? `(start of fragment)` : ``, `
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
        patch(null, vnode, container, next, parentComponent, parentSuspense, $ddd276ef38f00731$var$getContainerType(container), slotScopeIds);
        return next;
    };
    const locateClosingAnchor = (node, open = "[", close = "]")=>{
        let match = 0;
        while(node){
            node = nextSibling(node);
            if (node && $ddd276ef38f00731$var$isComment(node)) {
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
function $ddd276ef38f00731$var$propHasMismatch(el, key, clientValue) {
    let mismatchType;
    let mismatchKey;
    let actual;
    let expected;
    if (key === "class") {
        actual = $ddd276ef38f00731$var$toClassSet(el.getAttribute("class") || "");
        expected = $ddd276ef38f00731$var$toClassSet((0, $3JmrW.normalizeClass)(clientValue));
        if (!$ddd276ef38f00731$var$isSetEqual(actual, expected)) mismatchType = mismatchKey = `class`;
    } else if (key === "style") {
        actual = el.getAttribute("style");
        expected = (0, $3JmrW.isString)(clientValue) ? clientValue : (0, $3JmrW.stringifyStyle)((0, $3JmrW.normalizeStyle)(clientValue));
        if (actual !== expected) mismatchType = mismatchKey = "style";
    } else if (el instanceof SVGElement && (0, $3JmrW.isKnownSvgAttr)(key) || el instanceof HTMLElement && ((0, $3JmrW.isBooleanAttr)(key) || (0, $3JmrW.isKnownHtmlAttr)(key))) {
        actual = el.hasAttribute(key) && el.getAttribute(key);
        expected = (0, $3JmrW.isBooleanAttr)(key) ? (0, $3JmrW.includeBooleanAttr)(clientValue) ? "" : false : clientValue == null ? false : String(clientValue);
        if (actual !== expected) {
            mismatchType = `attribute`;
            mismatchKey = key;
        }
    }
    if (mismatchType) {
        const format = (v1)=>v1 === false ? `(not rendered)` : `${mismatchKey}="${v1}"`;
        $ddd276ef38f00731$var$warn$1(`Hydration ${mismatchType} mismatch on`, el, `
  - rendered on server: ${format(actual)}
  - expected on client: ${format(expected)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`);
        return true;
    }
    return false;
}
function $ddd276ef38f00731$var$toClassSet(str) {
    return new Set(str.trim().split(/\s+/));
}
function $ddd276ef38f00731$var$isSetEqual(a, b) {
    if (a.size !== b.size) return false;
    for (const s of a){
        if (!b.has(s)) return false;
    }
    return true;
}
let $ddd276ef38f00731$var$supported;
let $ddd276ef38f00731$var$perf;
function $ddd276ef38f00731$var$startMeasure(instance, type) {
    if (instance.appContext.config.performance && $ddd276ef38f00731$var$isSupported()) $ddd276ef38f00731$var$perf.mark(`vue-${type}-${instance.uid}`);
    if (__VUE_PROD_DEVTOOLS__) $ddd276ef38f00731$var$devtoolsPerfStart(instance, type, $ddd276ef38f00731$var$isSupported() ? $ddd276ef38f00731$var$perf.now() : Date.now());
}
function $ddd276ef38f00731$var$endMeasure(instance, type) {
    if (instance.appContext.config.performance && $ddd276ef38f00731$var$isSupported()) {
        const startTag = `vue-${type}-${instance.uid}`;
        const endTag = startTag + `:end`;
        $ddd276ef38f00731$var$perf.mark(endTag);
        $ddd276ef38f00731$var$perf.measure(`<${$ddd276ef38f00731$var$formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
        $ddd276ef38f00731$var$perf.clearMarks(startTag);
        $ddd276ef38f00731$var$perf.clearMarks(endTag);
    }
    if (__VUE_PROD_DEVTOOLS__) $ddd276ef38f00731$var$devtoolsPerfEnd(instance, type, $ddd276ef38f00731$var$isSupported() ? $ddd276ef38f00731$var$perf.now() : Date.now());
}
function $ddd276ef38f00731$var$isSupported() {
    if ($ddd276ef38f00731$var$supported !== void 0) return $ddd276ef38f00731$var$supported;
    if (typeof window !== "undefined" && window.performance) {
        $ddd276ef38f00731$var$supported = true;
        $ddd276ef38f00731$var$perf = window.performance;
    } else $ddd276ef38f00731$var$supported = false;
    return $ddd276ef38f00731$var$supported;
}
function $ddd276ef38f00731$var$initFeatureFlags() {
    const needWarn = [];
    if (typeof __VUE_OPTIONS_API__ !== "boolean") (0, $3JmrW.getGlobalThis)().__VUE_OPTIONS_API__ = true;
    if (typeof __VUE_PROD_DEVTOOLS__ !== "boolean") (0, $3JmrW.getGlobalThis)().__VUE_PROD_DEVTOOLS__ = false;
    if (typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ !== "boolean") (0, $3JmrW.getGlobalThis)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
}
const $ddd276ef38f00731$var$queuePostRenderEffect = $ddd276ef38f00731$var$queueEffectWithSuspense;
function $ddd276ef38f00731$export$53ae2f996c64e9a(options) {
    return $ddd276ef38f00731$var$baseCreateRenderer(options);
}
function $ddd276ef38f00731$export$200524cf0d997ff0(options) {
    return $ddd276ef38f00731$var$baseCreateRenderer(options, $ddd276ef38f00731$var$createHydrationFunctions);
}
function $ddd276ef38f00731$var$baseCreateRenderer(options, createHydrationFns) {
    $ddd276ef38f00731$var$initFeatureFlags();
    const target = (0, $3JmrW.getGlobalThis)();
    target.__VUE__ = true;
    if (__VUE_PROD_DEVTOOLS__) $ddd276ef38f00731$var$setDevtoolsHook$1(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = (0, $3JmrW.NOOP), insertStaticContent: hostInsertStaticContent } = options;
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace, slotScopeIds = null, optimized = !!n2.dynamicChildren)=>{
        if (n1 === n2) return;
        if (n1 && !$ddd276ef38f00731$var$isSameVNodeType(n1, n2)) {
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
            case $ddd276ef38f00731$export$5f1af8db9871e1d6:
                processText(n1, n2, container, anchor);
                break;
            case $ddd276ef38f00731$export$4d299b491347818a:
                processCommentNode(n1, n2, container, anchor);
                break;
            case $ddd276ef38f00731$export$c1b9a1d3af45b7b6:
                if (n1 == null) mountStaticNode(n2, container, anchor, namespace);
                break;
            case $ddd276ef38f00731$export$ffb0004e005737fa:
                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1) processElement(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                else if (shapeFlag & 6) processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                else if (shapeFlag & 64) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
                else if (shapeFlag & 128) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
        }
        if (ref != null && parentComponent) $ddd276ef38f00731$var$setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
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
        else if (shapeFlag & 16) mountChildren(vnode.children, el, null, parentComponent, parentSuspense, $ddd276ef38f00731$var$resolveChildrenNamespace(vnode, namespace), slotScopeIds, optimized);
        if (dirs) $ddd276ef38f00731$var$invokeDirectiveHook(vnode, null, parentComponent, "created");
        setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
        if (props) {
            for(const key in props)if (key !== "value" && !(0, $3JmrW.isReservedProp)(key)) hostPatchProp(el, key, null, props[key], namespace, vnode.children, parentComponent, parentSuspense, unmountChildren);
            if ("value" in props) hostPatchProp(el, "value", null, props.value, namespace);
            if (vnodeHook = props.onVnodeBeforeMount) $ddd276ef38f00731$var$invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        if (__VUE_PROD_DEVTOOLS__) {
            Object.defineProperty(el, "__vnode", {
                value: vnode,
                enumerable: false
            });
            Object.defineProperty(el, "__vueParentComponent", {
                value: parentComponent,
                enumerable: false
            });
        }
        if (dirs) $ddd276ef38f00731$var$invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
        const needCallTransitionHooks = $ddd276ef38f00731$var$needTransition(parentSuspense, transition);
        if (needCallTransitionHooks) transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) $ddd276ef38f00731$var$queuePostRenderEffect(()=>{
            vnodeHook && $ddd276ef38f00731$var$invokeVNodeHook(vnodeHook, parentComponent, vnode);
            needCallTransitionHooks && transition.enter(el);
            dirs && $ddd276ef38f00731$var$invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent)=>{
        if (scopeId) hostSetScopeId(el, scopeId);
        if (slotScopeIds) for(let i = 0; i < slotScopeIds.length; i++)hostSetScopeId(el, slotScopeIds[i]);
        if (parentComponent) {
            let subTree = parentComponent.subTree;
            if (vnode === subTree) {
                const parentVNode = parentComponent.vnode;
                setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
            }
        }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0)=>{
        for(let i = start; i < children.length; i++){
            const child = children[i] = optimized ? $ddd276ef38f00731$var$cloneIfMounted(children[i]) : $ddd276ef38f00731$var$normalizeVNode(children[i]);
            patch(null, child, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        const el = n2.el = n1.el;
        let { patchFlag: patchFlag, dynamicChildren: dynamicChildren, dirs: dirs } = n2;
        patchFlag |= n1.patchFlag & 16;
        const oldProps = n1.props || (0, $3JmrW.EMPTY_OBJ);
        const newProps = n2.props || (0, $3JmrW.EMPTY_OBJ);
        let vnodeHook;
        parentComponent && $ddd276ef38f00731$var$toggleRecurse(parentComponent, false);
        if (vnodeHook = newProps.onVnodeBeforeUpdate) $ddd276ef38f00731$var$invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        if (dirs) $ddd276ef38f00731$var$invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
        parentComponent && $ddd276ef38f00731$var$toggleRecurse(parentComponent, true);
        if (dynamicChildren) patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, $ddd276ef38f00731$var$resolveChildrenNamespace(n2, namespace), slotScopeIds);
        else if (!optimized) patchChildren(n1, n2, el, null, parentComponent, parentSuspense, $ddd276ef38f00731$var$resolveChildrenNamespace(n2, namespace), slotScopeIds, false);
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
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) $ddd276ef38f00731$var$queuePostRenderEffect(()=>{
            vnodeHook && $ddd276ef38f00731$var$invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
            dirs && $ddd276ef38f00731$var$invokeDirectiveHook(n2, n1, parentComponent, "updated");
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
            (oldVNode.type === $ddd276ef38f00731$export$ffb0004e005737fa || // - In the case of different nodes, there is going to be a replacement
            // which also requires the correct parent container
            !$ddd276ef38f00731$var$isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
            oldVNode.shapeFlag & 70) ? hostParentNode(oldVNode.el) : // In other cases, the parent container is not actually used so we
            // just pass the block element here to avoid a DOM parentNode call.
            fallbackContainer;
            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, true);
        }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, namespace)=>{
        if (oldProps !== newProps) {
            if (oldProps !== (0, $3JmrW.EMPTY_OBJ)) {
                for(const key in oldProps)if (!(0, $3JmrW.isReservedProp)(key) && !(key in newProps)) hostPatchProp(el, key, oldProps[key], null, namespace, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
            for(const key in newProps){
                if ((0, $3JmrW.isReservedProp)(key)) continue;
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
        if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        } else if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
        // of renderSlot() with no valid children
        n1.dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, namespace, slotScopeIds);
            if (// #2080 if the stable fragment has a key, it's a <template v-for> that may
            //  get moved around. Make sure all root level vnodes inherit el.
            // #2134 or if it's a component root, it may also get moved around
            // as the component is being moved.
            n2.key != null || parentComponent && n2 === parentComponent.subTree) $ddd276ef38f00731$var$traverseStaticChildren(n1, n2, true);
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
        const instance = initialVNode.component = $ddd276ef38f00731$var$createComponentInstance(initialVNode, parentComponent, parentSuspense);
        if ($ddd276ef38f00731$var$isKeepAlive(initialVNode)) instance.ctx.renderer = internals;
        $ddd276ef38f00731$var$setupComponent(instance);
        if (instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
            if (!initialVNode.el) {
                const placeholder = instance.subTree = $ddd276ef38f00731$export$bf5c4cf060303d58($ddd276ef38f00731$export$4d299b491347818a);
                processCommentNode(null, placeholder, container, anchor);
            }
        } else setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, namespace, optimized);
    };
    const updateComponent = (n1, n2, optimized)=>{
        const instance = n2.component = n1.component;
        if ($ddd276ef38f00731$var$shouldUpdateComponent(n1, n2, optimized)) {
            if (instance.asyncDep && !instance.asyncResolved) {
                updateComponentPreRender(instance, n2, optimized);
                return;
            } else {
                instance.next = n2;
                $ddd276ef38f00731$var$invalidateJob(instance.update);
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
                const isAsyncWrapperVNode = $ddd276ef38f00731$var$isAsyncWrapper(initialVNode);
                $ddd276ef38f00731$var$toggleRecurse(instance, false);
                if (bm) (0, $3JmrW.invokeArrayFns)(bm);
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) $ddd276ef38f00731$var$invokeVNodeHook(vnodeHook, parent, initialVNode);
                $ddd276ef38f00731$var$toggleRecurse(instance, true);
                if (el && hydrateNode) {
                    const hydrateSubTree = ()=>{
                        instance.subTree = $ddd276ef38f00731$var$renderComponentRoot(instance);
                        hydrateNode(el, instance.subTree, instance, parentSuspense, null);
                    };
                    if (isAsyncWrapperVNode) initialVNode.type.__asyncLoader().then(// note: we are moving the render call into an async callback,
                    // which means it won't track dependencies - but it's ok because
                    // a server-rendered async wrapper is already in resolved state
                    // and it will never need to change.
                    ()=>!instance.isUnmounted && hydrateSubTree());
                    else hydrateSubTree();
                } else {
                    const subTree = instance.subTree = $ddd276ef38f00731$var$renderComponentRoot(instance);
                    patch(null, subTree, container, anchor, instance, parentSuspense, namespace);
                    initialVNode.el = subTree.el;
                }
                if (m) $ddd276ef38f00731$var$queuePostRenderEffect(m, parentSuspense);
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
                    const scopedInitialVNode = initialVNode;
                    $ddd276ef38f00731$var$queuePostRenderEffect(()=>$ddd276ef38f00731$var$invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
                }
                if (initialVNode.shapeFlag & 256 || parent && $ddd276ef38f00731$var$isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) instance.a && $ddd276ef38f00731$var$queuePostRenderEffect(instance.a, parentSuspense);
                instance.isMounted = true;
                if (__VUE_PROD_DEVTOOLS__) $ddd276ef38f00731$var$devtoolsComponentAdded(instance);
                initialVNode = container = anchor = null;
            } else {
                let { next: next, bu: bu, u: u, parent: parent, vnode: vnode } = instance;
                {
                    const nonHydratedAsyncRoot = $ddd276ef38f00731$var$locateNonHydratedAsyncRoot(instance);
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
                $ddd276ef38f00731$var$toggleRecurse(instance, false);
                if (next) {
                    next.el = vnode.el;
                    updateComponentPreRender(instance, next, optimized);
                } else next = vnode;
                if (bu) (0, $3JmrW.invokeArrayFns)(bu);
                if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) $ddd276ef38f00731$var$invokeVNodeHook(vnodeHook, parent, next, vnode);
                $ddd276ef38f00731$var$toggleRecurse(instance, true);
                const nextTree = $ddd276ef38f00731$var$renderComponentRoot(instance);
                const prevTree = instance.subTree;
                instance.subTree = nextTree;
                patch(prevTree, nextTree, // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el), // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, namespace);
                next.el = nextTree.el;
                if (originNext === null) $ddd276ef38f00731$var$updateHOCHostEl(instance, nextTree.el);
                if (u) $ddd276ef38f00731$var$queuePostRenderEffect(u, parentSuspense);
                if (vnodeHook = next.props && next.props.onVnodeUpdated) $ddd276ef38f00731$var$queuePostRenderEffect(()=>$ddd276ef38f00731$var$invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
                if (__VUE_PROD_DEVTOOLS__) $ddd276ef38f00731$var$devtoolsComponentUpdated(instance);
            }
        };
        const effect = instance.effect = new (0, $7BTmT.ReactiveEffect)(componentUpdateFn, (0, $3JmrW.NOOP), ()=>$ddd276ef38f00731$var$queueJob(update), instance.scope);
        const update = instance.update = ()=>{
            if (effect.dirty) effect.run();
        };
        update.id = instance.uid;
        $ddd276ef38f00731$var$toggleRecurse(instance, true);
        var e, e1;
        update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized)=>{
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        $ddd276ef38f00731$var$updateProps(instance, nextVNode.props, prevProps, optimized);
        $ddd276ef38f00731$var$updateSlots(instance, nextVNode.children, optimized);
        (0, $7BTmT.pauseTracking)();
        $ddd276ef38f00731$var$flushPreFlushCbs(instance);
        (0, $7BTmT.resetTracking)();
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
        c1 = c1 || (0, $3JmrW.EMPTY_ARR);
        c2 = c2 || (0, $3JmrW.EMPTY_ARR);
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for(i = 0; i < commonLength; i++){
            const nextChild = c2[i] = optimized ? $ddd276ef38f00731$var$cloneIfMounted(c2[i]) : $ddd276ef38f00731$var$normalizeVNode(c2[i]);
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
            const n2 = c2[i] = optimized ? $ddd276ef38f00731$var$cloneIfMounted(c2[i]) : $ddd276ef38f00731$var$normalizeVNode(c2[i]);
            if ($ddd276ef38f00731$var$isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            else break;
            i++;
        }
        while(i <= e1 && i <= e2){
            const n1 = c1[e1];
            const n2 = c2[e2] = optimized ? $ddd276ef38f00731$var$cloneIfMounted(c2[e2]) : $ddd276ef38f00731$var$normalizeVNode(c2[e2]);
            if ($ddd276ef38f00731$var$isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            else break;
            e1--;
            e2--;
        }
        if (i > e1) {
            if (i <= e2) {
                const nextPos = e2 + 1;
                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while(i <= e2){
                    patch(null, c2[i] = optimized ? $ddd276ef38f00731$var$cloneIfMounted(c2[i]) : $ddd276ef38f00731$var$normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
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
                const nextChild = c2[i] = optimized ? $ddd276ef38f00731$var$cloneIfMounted(c2[i]) : $ddd276ef38f00731$var$normalizeVNode(c2[i]);
                if (nextChild.key != null) keyToNewIndexMap.set(nextChild.key, i);
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
                    for(j = s2; j <= e2; j++)if (newIndexToOldIndexMap[j - s2] === 0 && $ddd276ef38f00731$var$isSameVNodeType(prevChild, c2[j])) {
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
            const increasingNewIndexSequence = moved ? $ddd276ef38f00731$var$getSequence(newIndexToOldIndexMap) : (0, $3JmrW.EMPTY_ARR);
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
        if (type === $ddd276ef38f00731$export$ffb0004e005737fa) {
            hostInsert(el, container, anchor);
            for(let i = 0; i < children.length; i++)move(children[i], container, anchor, moveType);
            hostInsert(vnode.anchor, container, anchor);
            return;
        }
        if (type === $ddd276ef38f00731$export$c1b9a1d3af45b7b6) {
            moveStaticNode(vnode, container, anchor);
            return;
        }
        const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
        if (needTransition2) {
            if (moveType === 0) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                $ddd276ef38f00731$var$queuePostRenderEffect(()=>transition.enter(el), parentSuspense);
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
        if (ref != null) $ddd276ef38f00731$var$setRef(ref, null, parentSuspense, vnode, true);
        if (shapeFlag & 256) {
            parentComponent.ctx.deactivate(vnode);
            return;
        }
        const shouldInvokeDirs = shapeFlag & 1 && dirs;
        const shouldInvokeVnodeHook = !$ddd276ef38f00731$var$isAsyncWrapper(vnode);
        let vnodeHook;
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) $ddd276ef38f00731$var$invokeVNodeHook(vnodeHook, parentComponent, vnode);
        if (shapeFlag & 6) unmountComponent(vnode.component, parentSuspense, doRemove);
        else {
            if (shapeFlag & 128) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
            }
            if (shouldInvokeDirs) $ddd276ef38f00731$var$invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
            if (shapeFlag & 64) vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
            else if (dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
            (type !== $ddd276ef38f00731$export$ffb0004e005737fa || patchFlag > 0 && patchFlag & 64)) unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
            else if (type === $ddd276ef38f00731$export$ffb0004e005737fa && patchFlag & 384 || !optimized && shapeFlag & 16) unmountChildren(children, parentComponent, parentSuspense);
            if (doRemove) remove(vnode);
        }
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) $ddd276ef38f00731$var$queuePostRenderEffect(()=>{
            vnodeHook && $ddd276ef38f00731$var$invokeVNodeHook(vnodeHook, parentComponent, vnode);
            shouldInvokeDirs && $ddd276ef38f00731$var$invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
        }, parentSuspense);
    };
    const remove = (vnode)=>{
        const { type: type, el: el, anchor: anchor, transition: transition } = vnode;
        if (type === $ddd276ef38f00731$export$ffb0004e005737fa) {
            var child;
            removeFragment(el, anchor);
            return;
        }
        if (type === $ddd276ef38f00731$export$c1b9a1d3af45b7b6) {
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
        const { bum: bum, scope: scope, update: update, subTree: subTree, um: um } = instance;
        if (bum) (0, $3JmrW.invokeArrayFns)(bum);
        scope.stop();
        if (update) {
            update.active = false;
            unmount(subTree, instance, parentSuspense, doRemove);
        }
        if (um) $ddd276ef38f00731$var$queuePostRenderEffect(um, parentSuspense);
        $ddd276ef38f00731$var$queuePostRenderEffect(()=>{
            instance.isUnmounted = true;
        }, parentSuspense);
        if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) parentSuspense.resolve();
        }
        if (__VUE_PROD_DEVTOOLS__) $ddd276ef38f00731$var$devtoolsComponentRemoved(instance);
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
        $ddd276ef38f00731$var$flushPreFlushCbs();
        $ddd276ef38f00731$var$flushPostFlushCbs();
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
        createApp: $ddd276ef38f00731$var$createAppAPI(render, hydrate)
    };
}
function $ddd276ef38f00731$var$resolveChildrenNamespace({ type: type, props: props }, currentNamespace) {
    return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function $ddd276ef38f00731$var$toggleRecurse({ effect: effect, update: update }, allowed) {
    effect.allowRecurse = update.allowRecurse = allowed;
}
function $ddd276ef38f00731$var$needTransition(parentSuspense, transition) {
    return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function $ddd276ef38f00731$var$traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if ((0, $3JmrW.isArray)(ch1) && (0, $3JmrW.isArray)(ch2)) for(let i = 0; i < ch1.length; i++){
        const c1 = ch1[i];
        let c2 = ch2[i];
        if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
            if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
                c2 = ch2[i] = $ddd276ef38f00731$var$cloneIfMounted(ch2[i]);
                c2.el = c1.el;
            }
            if (!shallow) $ddd276ef38f00731$var$traverseStaticChildren(c1, c2);
        }
        if (c2.type === $ddd276ef38f00731$export$5f1af8db9871e1d6) c2.el = c1.el;
    }
}
function $ddd276ef38f00731$var$getSequence(arr) {
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
function $ddd276ef38f00731$var$locateNonHydratedAsyncRoot(instance) {
    const subComponent = instance.subTree.component;
    if (subComponent) {
        if (subComponent.asyncDep && !subComponent.asyncResolved) return subComponent;
        else return $ddd276ef38f00731$var$locateNonHydratedAsyncRoot(subComponent);
    }
}
const $ddd276ef38f00731$var$isTeleport = (type)=>type.__isTeleport;
const $ddd276ef38f00731$var$isTeleportDisabled = (props)=>props && (props.disabled || props.disabled === "");
const $ddd276ef38f00731$var$isTargetSVG = (target)=>typeof SVGElement !== "undefined" && target instanceof SVGElement;
const $ddd276ef38f00731$var$isTargetMathML = (target)=>typeof MathMLElement === "function" && target instanceof MathMLElement;
const $ddd276ef38f00731$var$resolveTarget = (props, select)=>{
    const targetSelector = props && props.to;
    if ((0, $3JmrW.isString)(targetSelector)) {
        if (!select) return null;
        else {
            const target = select(targetSelector);
            target;
            return target;
        }
    } else return targetSelector;
};
const $ddd276ef38f00731$var$TeleportImpl = {
    name: "Teleport",
    __isTeleport: true,
    process (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
        const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert: insert, querySelector: querySelector, createText: createText, createComment: createComment } } = internals;
        const disabled = $ddd276ef38f00731$var$isTeleportDisabled(n2.props);
        let { shapeFlag: shapeFlag, children: children, dynamicChildren: dynamicChildren } = n2;
        if (n1 == null) {
            const placeholder = n2.el = createText("");
            const mainAnchor = n2.anchor = createText("");
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const target = n2.target = $ddd276ef38f00731$var$resolveTarget(n2.props, querySelector);
            const targetAnchor = n2.targetAnchor = createText("");
            if (target) {
                insert(targetAnchor, target);
                if (namespace === "svg" || $ddd276ef38f00731$var$isTargetSVG(target)) namespace = "svg";
                else if (namespace === "mathml" || $ddd276ef38f00731$var$isTargetMathML(target)) namespace = "mathml";
            }
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
            const wasDisabled = $ddd276ef38f00731$var$isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            if (namespace === "svg" || $ddd276ef38f00731$var$isTargetSVG(target)) namespace = "svg";
            else if (namespace === "mathml" || $ddd276ef38f00731$var$isTargetMathML(target)) namespace = "mathml";
            if (dynamicChildren) {
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, namespace, slotScopeIds);
                $ddd276ef38f00731$var$traverseStaticChildren(n1, n2, true);
            } else if (!optimized) patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, false);
            if (disabled) {
                if (!wasDisabled) $ddd276ef38f00731$var$moveTeleport(n2, container, mainAnchor, internals, 1);
                else if (n2.props && n1.props && n2.props.to !== n1.props.to) n2.props.to = n1.props.to;
            } else {
                if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                    const nextTarget = n2.target = $ddd276ef38f00731$var$resolveTarget(n2.props, querySelector);
                    if (nextTarget) $ddd276ef38f00731$var$moveTeleport(n2, nextTarget, null, internals, 0);
                } else if (wasDisabled) $ddd276ef38f00731$var$moveTeleport(n2, target, targetAnchor, internals, 1);
            }
        }
        $ddd276ef38f00731$var$updateCssVars(n2);
    },
    remove (vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
        const { shapeFlag: shapeFlag, children: children, anchor: anchor, targetAnchor: targetAnchor, target: target, props: props } = vnode;
        if (target) hostRemove(targetAnchor);
        doRemove && hostRemove(anchor);
        if (shapeFlag & 16) {
            const shouldRemove = doRemove || !$ddd276ef38f00731$var$isTeleportDisabled(props);
            for(let i = 0; i < children.length; i++){
                const child = children[i];
                unmount(child, parentComponent, parentSuspense, shouldRemove, !!child.dynamicChildren);
            }
        }
    },
    move: $ddd276ef38f00731$var$moveTeleport,
    hydrate: $ddd276ef38f00731$var$hydrateTeleport
};
function $ddd276ef38f00731$var$moveTeleport(vnode, container, parentAnchor, { o: { insert: insert }, m: move }, moveType = 2) {
    if (moveType === 0) insert(vnode.targetAnchor, container, parentAnchor);
    const { el: el, anchor: anchor, shapeFlag: shapeFlag, children: children, props: props } = vnode;
    const isReorder = moveType === 2;
    if (isReorder) insert(el, container, parentAnchor);
    if (!isReorder || $ddd276ef38f00731$var$isTeleportDisabled(props)) {
        if (shapeFlag & 16) for(let i = 0; i < children.length; i++)move(children[i], container, parentAnchor, 2);
    }
    if (isReorder) insert(anchor, container, parentAnchor);
}
function $ddd276ef38f00731$var$hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling: nextSibling, parentNode: parentNode, querySelector: querySelector } }, hydrateChildren) {
    const target = vnode.target = $ddd276ef38f00731$var$resolveTarget(vnode.props, querySelector);
    if (target) {
        const targetNode = target._lpa || target.firstChild;
        if (vnode.shapeFlag & 16) {
            if ($ddd276ef38f00731$var$isTeleportDisabled(vnode.props)) {
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
        $ddd276ef38f00731$var$updateCssVars(vnode);
    }
    return vnode.anchor && nextSibling(vnode.anchor);
}
const $ddd276ef38f00731$export$76d55a0304a371f4 = $ddd276ef38f00731$var$TeleportImpl;
function $ddd276ef38f00731$var$updateCssVars(vnode) {
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
const $ddd276ef38f00731$export$ffb0004e005737fa = Symbol.for("v-fgt");
const $ddd276ef38f00731$export$5f1af8db9871e1d6 = Symbol.for("v-txt");
const $ddd276ef38f00731$export$4d299b491347818a = Symbol.for("v-cmt");
const $ddd276ef38f00731$export$c1b9a1d3af45b7b6 = Symbol.for("v-stc");
const $ddd276ef38f00731$var$blockStack = [];
let $ddd276ef38f00731$var$currentBlock = null;
function $ddd276ef38f00731$export$e7eaa45e502fe5cc(disableTracking = false) {
    $ddd276ef38f00731$var$blockStack.push($ddd276ef38f00731$var$currentBlock = disableTracking ? null : []);
}
function $ddd276ef38f00731$var$closeBlock() {
    $ddd276ef38f00731$var$blockStack.pop();
    $ddd276ef38f00731$var$currentBlock = $ddd276ef38f00731$var$blockStack[$ddd276ef38f00731$var$blockStack.length - 1] || null;
}
let $ddd276ef38f00731$var$isBlockTreeEnabled = 1;
function $ddd276ef38f00731$export$c20bee82f26f1e27(value) {
    $ddd276ef38f00731$var$isBlockTreeEnabled += value;
}
function $ddd276ef38f00731$var$setupBlock(vnode) {
    vnode.dynamicChildren = $ddd276ef38f00731$var$isBlockTreeEnabled > 0 ? $ddd276ef38f00731$var$currentBlock || (0, $3JmrW.EMPTY_ARR) : null;
    $ddd276ef38f00731$var$closeBlock();
    if ($ddd276ef38f00731$var$isBlockTreeEnabled > 0 && $ddd276ef38f00731$var$currentBlock) $ddd276ef38f00731$var$currentBlock.push(vnode);
    return vnode;
}
function $ddd276ef38f00731$export$167055419fc69ec1(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return $ddd276ef38f00731$var$setupBlock($ddd276ef38f00731$export$42098e0eaa15c48e(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function $ddd276ef38f00731$export$9f2dfe8048dfb22b(type, props, children, patchFlag, dynamicProps) {
    return $ddd276ef38f00731$var$setupBlock($ddd276ef38f00731$export$bf5c4cf060303d58(type, props, children, patchFlag, dynamicProps, true));
}
function $ddd276ef38f00731$export$3868d13f8734ae81(value) {
    return value ? value.__v_isVNode === true : false;
}
function $ddd276ef38f00731$var$isSameVNodeType(n1, n2) {
    return n1.type === n2.type && n1.key === n2.key;
}
let $ddd276ef38f00731$var$vnodeArgsTransformer;
function $ddd276ef38f00731$export$83beccd3afeeb809(transformer) {
    $ddd276ef38f00731$var$vnodeArgsTransformer = transformer;
}
const $ddd276ef38f00731$var$createVNodeWithArgsTransform = (...args)=>{
    return $ddd276ef38f00731$var$_createVNode(...$ddd276ef38f00731$var$vnodeArgsTransformer ? $ddd276ef38f00731$var$vnodeArgsTransformer(args, $ddd276ef38f00731$var$currentRenderingInstance) : args);
};
const $ddd276ef38f00731$var$InternalObjectKey = `__vInternal`;
const $ddd276ef38f00731$var$normalizeKey = ({ key: key })=>key != null ? key : null;
const $ddd276ef38f00731$var$normalizeRef = ({ ref: ref, ref_key: ref_key, ref_for: ref_for })=>{
    if (typeof ref === "number") ref = "" + ref;
    return ref != null ? (0, $3JmrW.isString)(ref) || (0, $7BTmT.isRef)(ref) || (0, $3JmrW.isFunction)(ref) ? {
        i: $ddd276ef38f00731$var$currentRenderingInstance,
        r: ref,
        k: ref_key,
        f: !!ref_for
    } : ref : null;
};
function $ddd276ef38f00731$export$42098e0eaa15c48e(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === $ddd276ef38f00731$export$ffb0004e005737fa ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
        __v_isVNode: true,
        __v_skip: true,
        type: type,
        props: props,
        key: props && $ddd276ef38f00731$var$normalizeKey(props),
        ref: props && $ddd276ef38f00731$var$normalizeRef(props),
        scopeId: $ddd276ef38f00731$var$currentScopeId,
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
        ctx: $ddd276ef38f00731$var$currentRenderingInstance
    };
    if (needFullChildrenNormalization) {
        $ddd276ef38f00731$var$normalizeChildren(vnode, children);
        if (shapeFlag & 128) type.normalize(vnode);
    } else if (children) vnode.shapeFlag |= (0, $3JmrW.isString)(children) ? 8 : 16;
    if ($ddd276ef38f00731$var$isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
    !isBlockNode && // has current parent block
    $ddd276ef38f00731$var$currentBlock && // presence of a patch flag indicates this node needs patching on updates.
    // component nodes also should always be patched, because even if the
    // component doesn't need to update, it needs to persist the instance on to
    // the next vnode so that it can be properly unmounted later.
    (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    vnode.patchFlag !== 32) $ddd276ef38f00731$var$currentBlock.push(vnode);
    return vnode;
}
const $ddd276ef38f00731$export$bf5c4cf060303d58 = $ddd276ef38f00731$var$_createVNode;
function $ddd276ef38f00731$var$_createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === $ddd276ef38f00731$var$NULL_DYNAMIC_COMPONENT) type = $ddd276ef38f00731$export$4d299b491347818a;
    if ($ddd276ef38f00731$export$3868d13f8734ae81(type)) {
        const cloned = $ddd276ef38f00731$export$ee4f9e12c0a92a1a(type, props, true);
        if (children) $ddd276ef38f00731$var$normalizeChildren(cloned, children);
        if ($ddd276ef38f00731$var$isBlockTreeEnabled > 0 && !isBlockNode && $ddd276ef38f00731$var$currentBlock) {
            if (cloned.shapeFlag & 6) $ddd276ef38f00731$var$currentBlock[$ddd276ef38f00731$var$currentBlock.indexOf(type)] = cloned;
            else $ddd276ef38f00731$var$currentBlock.push(cloned);
        }
        cloned.patchFlag |= -2;
        return cloned;
    }
    if ($ddd276ef38f00731$var$isClassComponent(type)) type = type.__vccOpts;
    if (props) {
        props = $ddd276ef38f00731$export$1f1be0e0e384d7d2(props);
        let { class: klass, style: style } = props;
        if (klass && !(0, $3JmrW.isString)(klass)) props.class = (0, $3JmrW.normalizeClass)(klass);
        if ((0, $3JmrW.isObject)(style)) {
            if ((0, $7BTmT.isProxy)(style) && !(0, $3JmrW.isArray)(style)) style = (0, $3JmrW.extend)({}, style);
            props.style = (0, $3JmrW.normalizeStyle)(style);
        }
    }
    const shapeFlag = (0, $3JmrW.isString)(type) ? 1 : $ddd276ef38f00731$var$isSuspense(type) ? 128 : $ddd276ef38f00731$var$isTeleport(type) ? 64 : (0, $3JmrW.isObject)(type) ? 4 : (0, $3JmrW.isFunction)(type) ? 2 : 0;
    return $ddd276ef38f00731$export$42098e0eaa15c48e(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function $ddd276ef38f00731$export$1f1be0e0e384d7d2(props) {
    if (!props) return null;
    return (0, $7BTmT.isProxy)(props) || $ddd276ef38f00731$var$InternalObjectKey in props ? (0, $3JmrW.extend)({}, props) : props;
}
function $ddd276ef38f00731$export$ee4f9e12c0a92a1a(vnode, extraProps, mergeRef = false) {
    const { props: props, ref: ref, patchFlag: patchFlag, children: children } = vnode;
    const mergedProps = extraProps ? $ddd276ef38f00731$export$9d1611c77c2fe928(props || {}, extraProps) : props;
    const cloned = {
        __v_isVNode: true,
        __v_skip: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && $ddd276ef38f00731$var$normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref ? // #2078 in the case of <component :is="vnode" ref="extra"/>
        // if the vnode itself already has a ref, cloneVNode will need to merge
        // the refs so the single vnode can be set on multiple refs
        mergeRef && ref ? (0, $3JmrW.isArray)(ref) ? ref.concat($ddd276ef38f00731$var$normalizeRef(extraProps)) : [
            ref,
            $ddd276ef38f00731$var$normalizeRef(extraProps)
        ] : $ddd276ef38f00731$var$normalizeRef(extraProps) : ref,
        scopeId: vnode.scopeId,
        slotScopeIds: vnode.slotScopeIds,
        children: children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: preserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag: extraProps && vnode.type !== $ddd276ef38f00731$export$ffb0004e005737fa ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
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
        ssContent: vnode.ssContent && $ddd276ef38f00731$export$ee4f9e12c0a92a1a(vnode.ssContent),
        ssFallback: vnode.ssFallback && $ddd276ef38f00731$export$ee4f9e12c0a92a1a(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor,
        ctx: vnode.ctx,
        ce: vnode.ce
    };
    return cloned;
}
function $ddd276ef38f00731$var$deepCloneVNode(vnode) {
    const cloned = $ddd276ef38f00731$export$ee4f9e12c0a92a1a(vnode);
    if ((0, $3JmrW.isArray)(vnode.children)) cloned.children = vnode.children.map($ddd276ef38f00731$var$deepCloneVNode);
    return cloned;
}
function $ddd276ef38f00731$export$22f9b5ffd89dac9(text = " ", flag = 0) {
    return $ddd276ef38f00731$export$bf5c4cf060303d58($ddd276ef38f00731$export$5f1af8db9871e1d6, null, text, flag);
}
function $ddd276ef38f00731$export$33a9f6dd2840e6bb(content, numberOfNodes) {
    const vnode = $ddd276ef38f00731$export$bf5c4cf060303d58($ddd276ef38f00731$export$c1b9a1d3af45b7b6, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
}
function $ddd276ef38f00731$export$49553837c7236d3c(text = "", asBlock = false) {
    return asBlock ? ($ddd276ef38f00731$export$e7eaa45e502fe5cc(), $ddd276ef38f00731$export$9f2dfe8048dfb22b($ddd276ef38f00731$export$4d299b491347818a, null, text)) : $ddd276ef38f00731$export$bf5c4cf060303d58($ddd276ef38f00731$export$4d299b491347818a, null, text);
}
function $ddd276ef38f00731$var$normalizeVNode(child) {
    if (child == null || typeof child === "boolean") return $ddd276ef38f00731$export$bf5c4cf060303d58($ddd276ef38f00731$export$4d299b491347818a);
    else if ((0, $3JmrW.isArray)(child)) return $ddd276ef38f00731$export$bf5c4cf060303d58($ddd276ef38f00731$export$ffb0004e005737fa, null, // #3666, avoid reference pollution when reusing vnode
    child.slice());
    else if (typeof child === "object") return $ddd276ef38f00731$var$cloneIfMounted(child);
    else return $ddd276ef38f00731$export$bf5c4cf060303d58($ddd276ef38f00731$export$5f1af8db9871e1d6, null, String(child));
}
function $ddd276ef38f00731$var$cloneIfMounted(child) {
    return child.el === null && child.patchFlag !== -1 || child.memo ? child : $ddd276ef38f00731$export$ee4f9e12c0a92a1a(child);
}
function $ddd276ef38f00731$var$normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag: shapeFlag } = vnode;
    if (children == null) children = null;
    else if ((0, $3JmrW.isArray)(children)) type = 16;
    else if (typeof children === "object") {
        if (shapeFlag & 65) {
            const slot = children.default;
            if (slot) {
                slot._c && (slot._d = false);
                $ddd276ef38f00731$var$normalizeChildren(vnode, slot());
                slot._c && (slot._d = true);
            }
            return;
        } else {
            type = 32;
            const slotFlag = children._;
            if (!slotFlag && !($ddd276ef38f00731$var$InternalObjectKey in children)) children._ctx = $ddd276ef38f00731$var$currentRenderingInstance;
            else if (slotFlag === 3 && $ddd276ef38f00731$var$currentRenderingInstance) {
                if ($ddd276ef38f00731$var$currentRenderingInstance.slots._ === 1) children._ = 1;
                else {
                    children._ = 2;
                    vnode.patchFlag |= 1024;
                }
            }
        }
    } else if ((0, $3JmrW.isFunction)(children)) {
        children = {
            default: children,
            _ctx: $ddd276ef38f00731$var$currentRenderingInstance
        };
        type = 32;
    } else {
        children = String(children);
        if (shapeFlag & 64) {
            type = 16;
            children = [
                $ddd276ef38f00731$export$22f9b5ffd89dac9(children)
            ];
        } else type = 8;
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
}
function $ddd276ef38f00731$export$9d1611c77c2fe928(...args) {
    const ret = {};
    for(let i = 0; i < args.length; i++){
        const toMerge = args[i];
        for(const key in toMerge){
            if (key === "class") {
                if (ret.class !== toMerge.class) ret.class = (0, $3JmrW.normalizeClass)([
                    ret.class,
                    toMerge.class
                ]);
            } else if (key === "style") ret.style = (0, $3JmrW.normalizeStyle)([
                ret.style,
                toMerge.style
            ]);
            else if ((0, $3JmrW.isOn)(key)) {
                const existing = ret[key];
                const incoming = toMerge[key];
                if (incoming && existing !== incoming && !((0, $3JmrW.isArray)(existing) && existing.includes(incoming))) ret[key] = existing ? [].concat(existing, incoming) : incoming;
            } else if (key !== "") ret[key] = toMerge[key];
        }
    }
    return ret;
}
function $ddd276ef38f00731$var$invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    $ddd276ef38f00731$export$dae85862a8d94378(hook, instance, 7, [
        vnode,
        prevVNode
    ]);
}
const $ddd276ef38f00731$var$emptyAppContext = $ddd276ef38f00731$var$createAppContext();
let $ddd276ef38f00731$var$uid = 0;
function $ddd276ef38f00731$var$createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    const appContext = (parent ? parent.appContext : vnode.appContext) || $ddd276ef38f00731$var$emptyAppContext;
    const instance = {
        uid: $ddd276ef38f00731$var$uid++,
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
        scope: new (0, $7BTmT.EffectScope)(true),
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
        propsOptions: $ddd276ef38f00731$var$normalizePropsOptions(type, appContext),
        emitsOptions: $ddd276ef38f00731$var$normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        // to be set immediately
        emitted: null,
        // props default value
        propsDefaults: (0, $3JmrW.EMPTY_OBJ),
        // inheritAttrs
        inheritAttrs: type.inheritAttrs,
        // state
        ctx: (0, $3JmrW.EMPTY_OBJ),
        data: (0, $3JmrW.EMPTY_OBJ),
        props: (0, $3JmrW.EMPTY_OBJ),
        attrs: (0, $3JmrW.EMPTY_OBJ),
        slots: (0, $3JmrW.EMPTY_OBJ),
        refs: (0, $3JmrW.EMPTY_OBJ),
        setupState: (0, $3JmrW.EMPTY_OBJ),
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
    instance.ctx = {
        _: instance
    };
    instance.root = parent ? parent.root : instance;
    instance.emit = $ddd276ef38f00731$var$emit.bind(null, instance);
    if (vnode.ce) vnode.ce(instance);
    return instance;
}
let $ddd276ef38f00731$var$currentInstance = null;
const $ddd276ef38f00731$export$f13e630aa3915748 = ()=>$ddd276ef38f00731$var$currentInstance || $ddd276ef38f00731$var$currentRenderingInstance;
let $ddd276ef38f00731$var$internalSetCurrentInstance;
let $ddd276ef38f00731$var$setInSSRSetupState;
{
    const g = (0, $3JmrW.getGlobalThis)();
    const registerGlobalSetter = (key, setter)=>{
        let setters;
        if (!(setters = g[key])) setters = g[key] = [];
        setters.push(setter);
        return (v1)=>{
            if (setters.length > 1) setters.forEach((set)=>set(v1));
            else setters[0](v1);
        };
    };
    $ddd276ef38f00731$var$internalSetCurrentInstance = registerGlobalSetter(`__VUE_INSTANCE_SETTERS__`, (v1)=>$ddd276ef38f00731$var$currentInstance = v1);
    $ddd276ef38f00731$var$setInSSRSetupState = registerGlobalSetter(`__VUE_SSR_SETTERS__`, (v1)=>$ddd276ef38f00731$var$isInSSRComponentSetup = v1);
}const $ddd276ef38f00731$var$setCurrentInstance = (instance)=>{
    $ddd276ef38f00731$var$internalSetCurrentInstance(instance);
    instance.scope.on();
};
const $ddd276ef38f00731$var$unsetCurrentInstance = ()=>{
    $ddd276ef38f00731$var$currentInstance && $ddd276ef38f00731$var$currentInstance.scope.off();
    $ddd276ef38f00731$var$internalSetCurrentInstance(null);
};
const $ddd276ef38f00731$var$isBuiltInTag = /* @__PURE__ */ (0, $3JmrW.makeMap)("slot,component");
function $ddd276ef38f00731$var$validateComponentName(name, config) {
    const appIsNativeTag = config.isNativeTag || (0, $3JmrW.NO);
    if ($ddd276ef38f00731$var$isBuiltInTag(name) || appIsNativeTag(name)) $ddd276ef38f00731$var$warn$1("Do not use built-in or reserved HTML elements as component id: " + name);
}
function $ddd276ef38f00731$var$isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4;
}
let $ddd276ef38f00731$var$isInSSRComponentSetup = false;
function $ddd276ef38f00731$var$setupComponent(instance, isSSR = false) {
    isSSR && $ddd276ef38f00731$var$setInSSRSetupState(isSSR);
    const { props: props, children: children } = instance.vnode;
    const isStateful = $ddd276ef38f00731$var$isStatefulComponent(instance);
    $ddd276ef38f00731$var$initProps(instance, props, isStateful, isSSR);
    $ddd276ef38f00731$var$initSlots(instance, children);
    const setupResult = isStateful ? $ddd276ef38f00731$var$setupStatefulComponent(instance, isSSR) : void 0;
    isSSR && $ddd276ef38f00731$var$setInSSRSetupState(false);
    return setupResult;
}
function $ddd276ef38f00731$var$setupStatefulComponent(instance, isSSR) {
    var _a;
    const Component = instance.type;
    instance.accessCache = /* @__PURE__ */ Object.create(null);
    instance.proxy = (0, $7BTmT.markRaw)(new Proxy(instance.ctx, $ddd276ef38f00731$var$PublicInstanceProxyHandlers));
    const { setup: setup } = Component;
    if (setup) {
        const setupContext = instance.setupContext = setup.length > 1 ? $ddd276ef38f00731$var$createSetupContext(instance) : null;
        $ddd276ef38f00731$var$setCurrentInstance(instance);
        (0, $7BTmT.pauseTracking)();
        const setupResult = $ddd276ef38f00731$export$b22fcaf88446e9bf(setup, instance, 0, [
            (0, instance.props),
            setupContext
        ]);
        (0, $7BTmT.resetTracking)();
        $ddd276ef38f00731$var$unsetCurrentInstance();
        if ((0, $3JmrW.isPromise)(setupResult)) {
            setupResult.then($ddd276ef38f00731$var$unsetCurrentInstance, $ddd276ef38f00731$var$unsetCurrentInstance);
            if (isSSR) return setupResult.then((resolvedResult)=>{
                $ddd276ef38f00731$var$handleSetupResult(instance, resolvedResult, isSSR);
            }).catch((e)=>{
                $ddd276ef38f00731$export$d3da1ecaf1206c58(e, instance, 0);
            });
            else instance.asyncDep = setupResult;
        } else $ddd276ef38f00731$var$handleSetupResult(instance, setupResult, isSSR);
    } else $ddd276ef38f00731$var$finishComponentSetup(instance, isSSR);
}
function $ddd276ef38f00731$var$handleSetupResult(instance, setupResult, isSSR) {
    if ((0, $3JmrW.isFunction)(setupResult)) {
        if (instance.type.__ssrInlineRender) instance.ssrRender = setupResult;
        else instance.render = setupResult;
    } else if ((0, $3JmrW.isObject)(setupResult)) {
        if (__VUE_PROD_DEVTOOLS__) instance.devtoolsRawSetupState = setupResult;
        instance.setupState = (0, $7BTmT.proxyRefs)(setupResult);
    }
    $ddd276ef38f00731$var$finishComponentSetup(instance, isSSR);
}
let $ddd276ef38f00731$var$compile;
let $ddd276ef38f00731$var$installWithProxy;
function $ddd276ef38f00731$export$667bb5a67822b941(_compile) {
    $ddd276ef38f00731$var$compile = _compile;
    $ddd276ef38f00731$var$installWithProxy = (i)=>{
        if (i.render._rc) i.withProxy = new Proxy(i.ctx, $ddd276ef38f00731$var$RuntimeCompiledPublicInstanceProxyHandlers);
    };
}
const $ddd276ef38f00731$export$c93a9c496c5211fa = ()=>!$ddd276ef38f00731$var$compile;
function $ddd276ef38f00731$var$finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    if (!instance.render) {
        if (!isSSR && $ddd276ef38f00731$var$compile && !Component.render) {
            const template = Component.template || $ddd276ef38f00731$var$resolveMergedOptions(instance).template;
            if (template) {
                const { isCustomElement: isCustomElement, compilerOptions: compilerOptions } = instance.appContext.config;
                const { delimiters: delimiters, compilerOptions: componentCompilerOptions } = Component;
                const finalCompilerOptions = (0, $3JmrW.extend)((0, $3JmrW.extend)({
                    isCustomElement: isCustomElement,
                    delimiters: delimiters
                }, compilerOptions), componentCompilerOptions);
                Component.render = $ddd276ef38f00731$var$compile(template, finalCompilerOptions);
            }
        }
        instance.render = Component.render || (0, $3JmrW.NOOP);
        if ($ddd276ef38f00731$var$installWithProxy) $ddd276ef38f00731$var$installWithProxy(instance);
    }
    if (__VUE_OPTIONS_API__ && true) {
        $ddd276ef38f00731$var$setCurrentInstance(instance);
        (0, $7BTmT.pauseTracking)();
        try {
            $ddd276ef38f00731$var$applyOptions(instance);
        } finally{
            (0, $7BTmT.resetTracking)();
            $ddd276ef38f00731$var$unsetCurrentInstance();
        }
    }
}
function $ddd276ef38f00731$var$getAttrsProxy(instance) {
    return instance.attrsProxy || (instance.attrsProxy = new Proxy(instance.attrs, {
        get (target, key) {
            (0, $7BTmT.track)(instance, "get", "$attrs");
            return target[key];
        }
    }));
}
function $ddd276ef38f00731$var$getSlotsProxy(instance) {
    return instance.slotsProxy || (instance.slotsProxy = new Proxy(instance.slots, {
        get (target, key) {
            (0, $7BTmT.track)(instance, "get", "$slots");
            return target[key];
        }
    }));
}
function $ddd276ef38f00731$var$createSetupContext(instance) {
    const expose = (exposed)=>{
        instance.exposed = exposed || {};
    };
    var event, args;
    return {
        get attrs () {
            return $ddd276ef38f00731$var$getAttrsProxy(instance);
        },
        slots: instance.slots,
        emit: instance.emit,
        expose: expose
    };
}
function $ddd276ef38f00731$var$getExposeProxy(instance) {
    if (instance.exposed) return instance.exposeProxy || (instance.exposeProxy = new Proxy((0, $7BTmT.proxyRefs)((0, $7BTmT.markRaw)(instance.exposed)), {
        get (target, key) {
            if (key in target) return target[key];
            else if (key in $ddd276ef38f00731$var$publicPropertiesMap) return $ddd276ef38f00731$var$publicPropertiesMap[key](instance);
        },
        has (target, key) {
            return key in target || key in $ddd276ef38f00731$var$publicPropertiesMap;
        }
    }));
}
const $ddd276ef38f00731$var$classifyRE = /(?:^|[-_])(\w)/g;
const $ddd276ef38f00731$var$classify = (str)=>str.replace($ddd276ef38f00731$var$classifyRE, (c)=>c.toUpperCase()).replace(/[-_]/g, "");
function $ddd276ef38f00731$var$getComponentName(Component, includeInferred = true) {
    return (0, $3JmrW.isFunction)(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function $ddd276ef38f00731$var$formatComponentName(instance, Component, isRoot = false) {
    let name = $ddd276ef38f00731$var$getComponentName(Component);
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
    return name ? $ddd276ef38f00731$var$classify(name) : isRoot ? `App` : `Anonymous`;
}
function $ddd276ef38f00731$var$isClassComponent(value) {
    return (0, $3JmrW.isFunction)(value) && "__vccOpts" in value;
}
const $ddd276ef38f00731$export$2983e091f1a1e8e2 = (getterOrOptions, debugOptions)=>{
    return (0, $7BTmT.computed)(getterOrOptions, debugOptions, $ddd276ef38f00731$var$isInSSRComponentSetup);
};
function $ddd276ef38f00731$export$dda1d9f60106f0e9(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
        if ((0, $3JmrW.isObject)(propsOrChildren) && !(0, $3JmrW.isArray)(propsOrChildren)) {
            if ($ddd276ef38f00731$export$3868d13f8734ae81(propsOrChildren)) return $ddd276ef38f00731$export$bf5c4cf060303d58(type, null, [
                propsOrChildren
            ]);
            return $ddd276ef38f00731$export$bf5c4cf060303d58(type, propsOrChildren);
        } else return $ddd276ef38f00731$export$bf5c4cf060303d58(type, null, propsOrChildren);
    } else {
        if (l > 3) children = Array.prototype.slice.call(arguments, 2);
        else if (l === 3 && $ddd276ef38f00731$export$3868d13f8734ae81(children)) children = [
            children
        ];
        return $ddd276ef38f00731$export$bf5c4cf060303d58(type, propsOrChildren, children);
    }
}
const $ddd276ef38f00731$export$f2549a27e18acf2d = Symbol.for("v-scx");
const $ddd276ef38f00731$export$6b1c54dc4befcda = ()=>{
    {
        const ctx = $ddd276ef38f00731$export$a976684a0efeb93f($ddd276ef38f00731$export$f2549a27e18acf2d);
        ctx;
        return ctx;
    }
};
function $ddd276ef38f00731$var$isShallow(value) {
    return !!(value && value["__v_isShallow"]);
}
function $ddd276ef38f00731$export$aed4979be6a60047() {
    return;
    function formatInstance(instance) {
        const blocks = [];
        if (instance.type.props && instance.props) blocks.push(createInstanceBlock("props", (0, $7BTmT.toRaw)(instance.props)));
        if (instance.setupState !== (0, $3JmrW.EMPTY_OBJ)) blocks.push(createInstanceBlock("setup", instance.setupState));
        if (instance.data !== (0, $3JmrW.EMPTY_OBJ)) blocks.push(createInstanceBlock("data", (0, $7BTmT.toRaw)(instance.data)));
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
        target = (0, $3JmrW.extend)({}, target);
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
        else if ((0, $3JmrW.isObject)(v1)) return [
            "object",
            {
                object: asRaw ? (0, $7BTmT.toRaw)(v1) : v1
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
        if ((0, $3JmrW.isFunction)(Comp)) return;
        const extracted = {};
        for(const key in instance.ctx)if (isKeyOfType(Comp, key, type)) extracted[key] = instance.ctx[key];
        return extracted;
    }
    function isKeyOfType(Comp, key, type) {
        const opts = Comp[type];
        if ((0, $3JmrW.isArray)(opts) && opts.includes(key) || (0, $3JmrW.isObject)(opts) && key in opts) return true;
        if (Comp.extends && isKeyOfType(Comp.extends, key, type)) return true;
        if (Comp.mixins && Comp.mixins.some((m)=>isKeyOfType(m, key, type))) return true;
    }
    function genRefFlag(v1) {
        if ($ddd276ef38f00731$var$isShallow(v1)) return `ShallowRef`;
        if (v1.effect) return `ComputedRef`;
        return `Ref`;
    }
}
function $ddd276ef38f00731$export$2a6d714a4d738ae(memo, render, cache, index) {
    const cached = cache[index];
    if (cached && $ddd276ef38f00731$export$bf525184d622787c(cached, memo)) return cached;
    const ret = render();
    ret.memo = memo.slice();
    return cache[index] = ret;
}
function $ddd276ef38f00731$export$bf525184d622787c(cached, memo) {
    const prev = cached.memo;
    if (prev.length != memo.length) return false;
    for(let i = 0; i < prev.length; i++){
        if ((0, $3JmrW.hasChanged)(prev[i], memo[i])) return false;
    }
    if ($ddd276ef38f00731$var$isBlockTreeEnabled > 0 && $ddd276ef38f00731$var$currentBlock) $ddd276ef38f00731$var$currentBlock.push(cached);
    return true;
}
const $ddd276ef38f00731$export$83d89fbfd8236492 = "3.4.0";
const $ddd276ef38f00731$export$c106dd0671a0fc2d = (0, $3JmrW.NOOP);
const $ddd276ef38f00731$export$795e0ad4a0e2ed30 = $ddd276ef38f00731$var$ErrorTypeStrings$1;
const $ddd276ef38f00731$export$6922d3b3a607469e = __VUE_PROD_DEVTOOLS__ ? $ddd276ef38f00731$var$devtools$1 : void 0;
const $ddd276ef38f00731$export$b0c258b32c26c785 = __VUE_PROD_DEVTOOLS__ ? $ddd276ef38f00731$var$setDevtoolsHook$1 : (0, $3JmrW.NOOP);
const $ddd276ef38f00731$var$_ssrUtils = {
    createComponentInstance: $ddd276ef38f00731$var$createComponentInstance,
    setupComponent: $ddd276ef38f00731$var$setupComponent,
    renderComponentRoot: $ddd276ef38f00731$var$renderComponentRoot,
    setCurrentRenderingInstance: $ddd276ef38f00731$var$setCurrentRenderingInstance,
    isVNode: $ddd276ef38f00731$export$3868d13f8734ae81,
    normalizeVNode: $ddd276ef38f00731$var$normalizeVNode
};
const $ddd276ef38f00731$export$a9679033567b336d = $ddd276ef38f00731$var$_ssrUtils;
const $ddd276ef38f00731$export$83cf26e06ea620e1 = null;
const $ddd276ef38f00731$export$dc678eddf276286e = null;
const $ddd276ef38f00731$export$22072a82865312f6 = null;

});
parcelRegister("7BTmT", function(module, exports) {

$parcel$export(module.exports, "EffectScope", () => $58a6f012aab6e453$export$1168ed9dbc71ddbd);
$parcel$export(module.exports, "getCurrentScope", () => $58a6f012aab6e453$export$c7be4b0125a10cba);
$parcel$export(module.exports, "ReactiveEffect", () => $58a6f012aab6e453$export$28352bb4dd362521);
$parcel$export(module.exports, "pauseTracking", () => $58a6f012aab6e453$export$938a971395fef855);
$parcel$export(module.exports, "resetTracking", () => $58a6f012aab6e453$export$c39176b1babaa8b8);
$parcel$export(module.exports, "track", () => $58a6f012aab6e453$export$6b2a7d5132615086);
$parcel$export(module.exports, "trigger", () => $58a6f012aab6e453$export$e614dc9140f7ae71);
$parcel$export(module.exports, "toRaw", () => $58a6f012aab6e453$export$ab18938b9fc5f28e);
$parcel$export(module.exports, "isRef", () => $58a6f012aab6e453$export$4f9f5282de18fc69);
$parcel$export(module.exports, "reactive", () => $58a6f012aab6e453$export$90a44edba14e47be);
$parcel$export(module.exports, "isShallow", () => $58a6f012aab6e453$export$7f3fe6025abfa26e);
$parcel$export(module.exports, "shallowReactive", () => $58a6f012aab6e453$export$8d81cefd22d22260);
$parcel$export(module.exports, "isReactive", () => $58a6f012aab6e453$export$352205f445242f02);
$parcel$export(module.exports, "isProxy", () => $58a6f012aab6e453$export$5f3ca29d057519b3);
$parcel$export(module.exports, "markRaw", () => $58a6f012aab6e453$export$995ab8b13ad7a9d0);
$parcel$export(module.exports, "computed", () => $58a6f012aab6e453$export$2983e091f1a1e8e2);
$parcel$export(module.exports, "ref", () => $58a6f012aab6e453$export$eff4d24c3ff7876e);
$parcel$export(module.exports, "proxyRefs", () => $58a6f012aab6e453$export$f353fd1b97db3fa0);
$parcel$export(module.exports, "customRef", () => $58a6f012aab6e453$export$a20c2dd6199824cb);

var $3JmrW = parcelRequire("3JmrW");
function $58a6f012aab6e453$var$warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
}
let $58a6f012aab6e453$var$activeEffectScope;
class $58a6f012aab6e453$export$1168ed9dbc71ddbd {
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
        this.parent = $58a6f012aab6e453$var$activeEffectScope;
        if (!detached && $58a6f012aab6e453$var$activeEffectScope) this.index = ($58a6f012aab6e453$var$activeEffectScope.scopes || ($58a6f012aab6e453$var$activeEffectScope.scopes = [])).push(this) - 1;
    }
    get active() {
        return this._active;
    }
    run(fn) {
        if (this._active) {
            const currentEffectScope = $58a6f012aab6e453$var$activeEffectScope;
            try {
                $58a6f012aab6e453$var$activeEffectScope = this;
                return fn();
            } finally{
                $58a6f012aab6e453$var$activeEffectScope = currentEffectScope;
            }
        }
    }
    /**
   * This should only be called on non-detached scopes
   * @internal
   */ on() {
        $58a6f012aab6e453$var$activeEffectScope = this;
    }
    /**
   * This should only be called on non-detached scopes
   * @internal
   */ off() {
        $58a6f012aab6e453$var$activeEffectScope = this.parent;
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
function $58a6f012aab6e453$export$7056603ea81600be(detached) {
    return new $58a6f012aab6e453$export$1168ed9dbc71ddbd(detached);
}
function $58a6f012aab6e453$var$recordEffectScope(effect, scope = $58a6f012aab6e453$var$activeEffectScope) {
    if (scope && scope.active) scope.effects.push(effect);
}
function $58a6f012aab6e453$export$c7be4b0125a10cba() {
    return $58a6f012aab6e453$var$activeEffectScope;
}
function $58a6f012aab6e453$export$a780418acd4762da(fn) {
    if ($58a6f012aab6e453$var$activeEffectScope) $58a6f012aab6e453$var$activeEffectScope.cleanups.push(fn);
}
let $58a6f012aab6e453$var$activeEffect;
class $58a6f012aab6e453$export$28352bb4dd362521 {
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
        $58a6f012aab6e453$var$recordEffectScope(this, scope);
    }
    get dirty() {
        if (this._dirtyLevel === 1) {
            this._dirtyLevel = 0;
            this._queryings++;
            $58a6f012aab6e453$export$938a971395fef855();
            for (const dep of this.deps)if (dep.computed) {
                $58a6f012aab6e453$var$triggerComputed(dep.computed);
                if (this._dirtyLevel >= 2) break;
            }
            $58a6f012aab6e453$export$c39176b1babaa8b8();
            this._queryings--;
        }
        return this._dirtyLevel >= 2;
    }
    set dirty(v) {
        this._dirtyLevel = v ? 3 : 0;
    }
    run() {
        this._dirtyLevel = 0;
        if (!this.active) return this.fn();
        let lastShouldTrack = $58a6f012aab6e453$var$shouldTrack;
        let lastEffect = $58a6f012aab6e453$var$activeEffect;
        try {
            $58a6f012aab6e453$var$shouldTrack = true;
            $58a6f012aab6e453$var$activeEffect = this;
            this._runnings++;
            $58a6f012aab6e453$var$preCleanupEffect(this);
            return this.fn();
        } finally{
            $58a6f012aab6e453$var$postCleanupEffect(this);
            this._runnings--;
            $58a6f012aab6e453$var$activeEffect = lastEffect;
            $58a6f012aab6e453$var$shouldTrack = lastShouldTrack;
        }
    }
    stop() {
        var _a;
        if (this.active) {
            $58a6f012aab6e453$var$preCleanupEffect(this);
            $58a6f012aab6e453$var$postCleanupEffect(this);
            (_a = this.onStop) == null || _a.call(this);
            this.active = false;
        }
    }
}
function $58a6f012aab6e453$var$triggerComputed(computed) {
    return computed.value;
}
function $58a6f012aab6e453$var$preCleanupEffect(effect2) {
    effect2._trackId++;
    effect2._depsLength = 0;
}
function $58a6f012aab6e453$var$postCleanupEffect(effect2) {
    if (effect2.deps && effect2.deps.length > effect2._depsLength) {
        for(let i = effect2._depsLength; i < effect2.deps.length; i++)$58a6f012aab6e453$var$cleanupDepEffect(effect2.deps[i], effect2);
        effect2.deps.length = effect2._depsLength;
    }
}
function $58a6f012aab6e453$var$cleanupDepEffect(dep, effect2) {
    const trackId = dep.get(effect2);
    if (trackId !== void 0 && effect2._trackId !== trackId) {
        dep.delete(effect2);
        if (dep.size === 0) dep.cleanup();
    }
}
function $58a6f012aab6e453$export$dc573d8a6576cdb3(fn, options) {
    if (fn.effect instanceof $58a6f012aab6e453$export$28352bb4dd362521) fn = fn.effect.fn;
    const _effect = new $58a6f012aab6e453$export$28352bb4dd362521(fn, (0, $3JmrW.NOOP), ()=>{
        if (_effect.dirty) _effect.run();
    });
    if (options) {
        (0, $3JmrW.extend)(_effect, options);
        if (options.scope) $58a6f012aab6e453$var$recordEffectScope(_effect, options.scope);
    }
    if (!options || !options.lazy) _effect.run();
    const runner = _effect.run.bind(_effect);
    runner.effect = _effect;
    return runner;
}
function $58a6f012aab6e453$export$fa6813432f753b0d(runner) {
    runner.effect.stop();
}
let $58a6f012aab6e453$var$shouldTrack = true;
let $58a6f012aab6e453$var$pauseScheduleStack = 0;
const $58a6f012aab6e453$var$trackStack = [];
function $58a6f012aab6e453$export$938a971395fef855() {
    $58a6f012aab6e453$var$trackStack.push($58a6f012aab6e453$var$shouldTrack);
    $58a6f012aab6e453$var$shouldTrack = false;
}
function $58a6f012aab6e453$export$1f8ffc6fd33b1d16() {
    $58a6f012aab6e453$var$trackStack.push($58a6f012aab6e453$var$shouldTrack);
    $58a6f012aab6e453$var$shouldTrack = true;
}
function $58a6f012aab6e453$export$c39176b1babaa8b8() {
    const last = $58a6f012aab6e453$var$trackStack.pop();
    $58a6f012aab6e453$var$shouldTrack = last === void 0 ? true : last;
}
function $58a6f012aab6e453$export$262a949f95482a17() {
    $58a6f012aab6e453$var$pauseScheduleStack++;
}
function $58a6f012aab6e453$export$3539fa10306ef581() {
    $58a6f012aab6e453$var$pauseScheduleStack--;
    while(!$58a6f012aab6e453$var$pauseScheduleStack && $58a6f012aab6e453$var$queueEffectSchedulers.length)$58a6f012aab6e453$var$queueEffectSchedulers.shift()();
}
function $58a6f012aab6e453$var$trackEffect(effect2, dep, debuggerEventExtraInfo) {
    var _a;
    if (dep.get(effect2) !== effect2._trackId) {
        dep.set(effect2, effect2._trackId);
        const oldDep = effect2.deps[effect2._depsLength];
        if (oldDep !== dep) {
            if (oldDep) $58a6f012aab6e453$var$cleanupDepEffect(oldDep, effect2);
            effect2.deps[effect2._depsLength++] = dep;
        } else effect2._depsLength++;
    }
}
const $58a6f012aab6e453$var$queueEffectSchedulers = [];
function $58a6f012aab6e453$var$triggerEffects(dep, dirtyLevel, debuggerEventExtraInfo) {
    var _a;
    $58a6f012aab6e453$export$262a949f95482a17();
    for (const effect2 of dep.keys()){
        if (!effect2.allowRecurse && effect2._runnings) continue;
        if (effect2._dirtyLevel < dirtyLevel && (!effect2._runnings || dirtyLevel !== 2)) {
            const lastDirtyLevel = effect2._dirtyLevel;
            effect2._dirtyLevel = dirtyLevel;
            if (lastDirtyLevel === 0 && (!effect2._queryings || dirtyLevel !== 2)) {
                effect2.trigger();
                if (effect2.scheduler) $58a6f012aab6e453$var$queueEffectSchedulers.push(effect2.scheduler);
            }
        }
    }
    $58a6f012aab6e453$export$3539fa10306ef581();
}
const $58a6f012aab6e453$var$createDep = (cleanup, computed)=>{
    const dep = /* @__PURE__ */ new Map();
    dep.cleanup = cleanup;
    dep.computed = computed;
    return dep;
};
const $58a6f012aab6e453$var$targetMap = /* @__PURE__ */ new WeakMap();
const $58a6f012aab6e453$export$3c41b1a4e06acc14 = Symbol("");
const $58a6f012aab6e453$var$MAP_KEY_ITERATE_KEY = Symbol("");
function $58a6f012aab6e453$export$6b2a7d5132615086(target, type, key) {
    if ($58a6f012aab6e453$var$shouldTrack && $58a6f012aab6e453$var$activeEffect) {
        let depsMap = $58a6f012aab6e453$var$targetMap.get(target);
        if (!depsMap) $58a6f012aab6e453$var$targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
        let dep = depsMap.get(key);
        if (!dep) depsMap.set(key, dep = $58a6f012aab6e453$var$createDep(()=>depsMap.delete(key)));
        $58a6f012aab6e453$var$trackEffect($58a6f012aab6e453$var$activeEffect, dep, void 0);
    }
}
function $58a6f012aab6e453$export$e614dc9140f7ae71(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = $58a6f012aab6e453$var$targetMap.get(target);
    if (!depsMap) return;
    let deps = [];
    if (type === "clear") deps = [
        ...depsMap.values()
    ];
    else if (key === "length" && (0, $3JmrW.isArray)(target)) {
        const newLength = Number(newValue);
        depsMap.forEach((dep, key2)=>{
            if (key2 === "length" || !(0, $3JmrW.isSymbol)(key2) && key2 >= newLength) deps.push(dep);
        });
    } else {
        if (key !== void 0) deps.push(depsMap.get(key));
        switch(type){
            case "add":
                if (!(0, $3JmrW.isArray)(target)) {
                    deps.push(depsMap.get($58a6f012aab6e453$export$3c41b1a4e06acc14));
                    if ((0, $3JmrW.isMap)(target)) deps.push(depsMap.get($58a6f012aab6e453$var$MAP_KEY_ITERATE_KEY));
                } else if ((0, $3JmrW.isIntegerKey)(key)) deps.push(depsMap.get("length"));
                break;
            case "delete":
                if (!(0, $3JmrW.isArray)(target)) {
                    deps.push(depsMap.get($58a6f012aab6e453$export$3c41b1a4e06acc14));
                    if ((0, $3JmrW.isMap)(target)) deps.push(depsMap.get($58a6f012aab6e453$var$MAP_KEY_ITERATE_KEY));
                }
                break;
            case "set":
                if ((0, $3JmrW.isMap)(target)) deps.push(depsMap.get($58a6f012aab6e453$export$3c41b1a4e06acc14));
                break;
        }
    }
    $58a6f012aab6e453$export$262a949f95482a17();
    for (const dep of deps)if (dep) $58a6f012aab6e453$var$triggerEffects(dep, 3, void 0);
    $58a6f012aab6e453$export$3539fa10306ef581();
}
function $58a6f012aab6e453$var$getDepFromReactive(object, key) {
    var _a;
    return (_a = $58a6f012aab6e453$var$targetMap.get(object)) == null ? void 0 : _a.get(key);
}
const $58a6f012aab6e453$var$isNonTrackableKeys = /* @__PURE__ */ (0, $3JmrW.makeMap)(`__proto__,__v_isRef,__isVue`);
const $58a6f012aab6e453$var$builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key)=>key !== "arguments" && key !== "caller").map((key)=>Symbol[key]).filter((0, $3JmrW.isSymbol)));
const $58a6f012aab6e453$var$arrayInstrumentations = /* @__PURE__ */ $58a6f012aab6e453$var$createArrayInstrumentations();
function $58a6f012aab6e453$var$createArrayInstrumentations() {
    const instrumentations = {};
    [
        "includes",
        "indexOf",
        "lastIndexOf"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            const arr = $58a6f012aab6e453$export$ab18938b9fc5f28e(this);
            for(let i = 0, l = this.length; i < l; i++)$58a6f012aab6e453$export$6b2a7d5132615086(arr, "get", i + "");
            const res = arr[key](...args);
            if (res === -1 || res === false) return arr[key](...args.map($58a6f012aab6e453$export$ab18938b9fc5f28e));
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
            $58a6f012aab6e453$export$938a971395fef855();
            $58a6f012aab6e453$export$262a949f95482a17();
            const res = $58a6f012aab6e453$export$ab18938b9fc5f28e(this)[key].apply(this, args);
            $58a6f012aab6e453$export$3539fa10306ef581();
            $58a6f012aab6e453$export$c39176b1babaa8b8();
            return res;
        };
    });
    return instrumentations;
}
function $58a6f012aab6e453$var$hasOwnProperty(key) {
    const obj = $58a6f012aab6e453$export$ab18938b9fc5f28e(this);
    $58a6f012aab6e453$export$6b2a7d5132615086(obj, "has", key);
    return obj.hasOwnProperty(key);
}
class $58a6f012aab6e453$var$BaseReactiveHandler {
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
            if (receiver === (isReadonly2 ? shallow ? $58a6f012aab6e453$var$shallowReadonlyMap : $58a6f012aab6e453$var$readonlyMap : shallow ? $58a6f012aab6e453$var$shallowReactiveMap : $58a6f012aab6e453$var$reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
            // this means the reciever is a user proxy of the reactive proxy
            Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) return target;
            return;
        }
        const targetIsArray = (0, $3JmrW.isArray)(target);
        if (!isReadonly2) {
            if (targetIsArray && (0, $3JmrW.hasOwn)($58a6f012aab6e453$var$arrayInstrumentations, key)) return Reflect.get($58a6f012aab6e453$var$arrayInstrumentations, key, receiver);
            if (key === "hasOwnProperty") return $58a6f012aab6e453$var$hasOwnProperty;
        }
        const res = Reflect.get(target, key, receiver);
        if ((0, $3JmrW.isSymbol)(key) ? $58a6f012aab6e453$var$builtInSymbols.has(key) : $58a6f012aab6e453$var$isNonTrackableKeys(key)) return res;
        if (!isReadonly2) $58a6f012aab6e453$export$6b2a7d5132615086(target, "get", key);
        if (shallow) return res;
        if ($58a6f012aab6e453$export$4f9f5282de18fc69(res)) return targetIsArray && (0, $3JmrW.isIntegerKey)(key) ? res : res.value;
        if ((0, $3JmrW.isObject)(res)) return isReadonly2 ? $58a6f012aab6e453$export$6ec456bd5b7b3c51(res) : $58a6f012aab6e453$export$90a44edba14e47be(res);
        return res;
    }
}
class $58a6f012aab6e453$var$MutableReactiveHandler extends $58a6f012aab6e453$var$BaseReactiveHandler {
    constructor(shallow = false){
        super(false, shallow);
    }
    set(target, key, value, receiver) {
        let oldValue = target[key];
        if (!this._shallow) {
            const isOldValueReadonly = $58a6f012aab6e453$export$92d09b48637741e7(oldValue);
            if (!$58a6f012aab6e453$export$7f3fe6025abfa26e(value) && !$58a6f012aab6e453$export$92d09b48637741e7(value)) {
                oldValue = $58a6f012aab6e453$export$ab18938b9fc5f28e(oldValue);
                value = $58a6f012aab6e453$export$ab18938b9fc5f28e(value);
            }
            if (!(0, $3JmrW.isArray)(target) && $58a6f012aab6e453$export$4f9f5282de18fc69(oldValue) && !$58a6f012aab6e453$export$4f9f5282de18fc69(value)) {
                if (isOldValueReadonly) return false;
                else {
                    oldValue.value = value;
                    return true;
                }
            }
        }
        const hadKey = (0, $3JmrW.isArray)(target) && (0, $3JmrW.isIntegerKey)(key) ? Number(key) < target.length : (0, $3JmrW.hasOwn)(target, key);
        const result = Reflect.set(target, key, value, receiver);
        if (target === $58a6f012aab6e453$export$ab18938b9fc5f28e(receiver)) {
            if (!hadKey) $58a6f012aab6e453$export$e614dc9140f7ae71(target, "add", key, value);
            else if ((0, $3JmrW.hasChanged)(value, oldValue)) $58a6f012aab6e453$export$e614dc9140f7ae71(target, "set", key, value, oldValue);
        }
        return result;
    }
    deleteProperty(target, key) {
        const hadKey = (0, $3JmrW.hasOwn)(target, key);
        const oldValue = target[key];
        const result = Reflect.deleteProperty(target, key);
        if (result && hadKey) $58a6f012aab6e453$export$e614dc9140f7ae71(target, "delete", key, void 0, oldValue);
        return result;
    }
    has(target, key) {
        const result = Reflect.has(target, key);
        if (!(0, $3JmrW.isSymbol)(key) || !$58a6f012aab6e453$var$builtInSymbols.has(key)) $58a6f012aab6e453$export$6b2a7d5132615086(target, "has", key);
        return result;
    }
    ownKeys(target) {
        $58a6f012aab6e453$export$6b2a7d5132615086(target, "iterate", (0, $3JmrW.isArray)(target) ? "length" : $58a6f012aab6e453$export$3c41b1a4e06acc14);
        return Reflect.ownKeys(target);
    }
}
class $58a6f012aab6e453$var$ReadonlyReactiveHandler extends $58a6f012aab6e453$var$BaseReactiveHandler {
    constructor(shallow = false){
        super(true, shallow);
    }
    set(target, key) {
        return true;
    }
    deleteProperty(target, key) {
        return true;
    }
}
const $58a6f012aab6e453$var$mutableHandlers = /* @__PURE__ */ new $58a6f012aab6e453$var$MutableReactiveHandler();
const $58a6f012aab6e453$var$readonlyHandlers = /* @__PURE__ */ new $58a6f012aab6e453$var$ReadonlyReactiveHandler();
const $58a6f012aab6e453$var$shallowReactiveHandlers = /* @__PURE__ */ new $58a6f012aab6e453$var$MutableReactiveHandler(true);
const $58a6f012aab6e453$var$shallowReadonlyHandlers = /* @__PURE__ */ new $58a6f012aab6e453$var$ReadonlyReactiveHandler(true);
const $58a6f012aab6e453$var$toShallow = (value)=>value;
const $58a6f012aab6e453$var$getProto = (v)=>Reflect.getPrototypeOf(v);
function $58a6f012aab6e453$var$get(target, key, isReadonly = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = $58a6f012aab6e453$export$ab18938b9fc5f28e(target);
    const rawKey = $58a6f012aab6e453$export$ab18938b9fc5f28e(key);
    if (!isReadonly) {
        if ((0, $3JmrW.hasChanged)(key, rawKey)) $58a6f012aab6e453$export$6b2a7d5132615086(rawTarget, "get", key);
        $58a6f012aab6e453$export$6b2a7d5132615086(rawTarget, "get", rawKey);
    }
    const { has: has2 } = $58a6f012aab6e453$var$getProto(rawTarget);
    const wrap = isShallow ? $58a6f012aab6e453$var$toShallow : isReadonly ? $58a6f012aab6e453$var$toReadonly : $58a6f012aab6e453$var$toReactive;
    if (has2.call(rawTarget, key)) return wrap(target.get(key));
    else if (has2.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
    else if (target !== rawTarget) target.get(key);
}
function $58a6f012aab6e453$var$has(key, isReadonly = false) {
    const target = this["__v_raw"];
    const rawTarget = $58a6f012aab6e453$export$ab18938b9fc5f28e(target);
    const rawKey = $58a6f012aab6e453$export$ab18938b9fc5f28e(key);
    if (!isReadonly) {
        if ((0, $3JmrW.hasChanged)(key, rawKey)) $58a6f012aab6e453$export$6b2a7d5132615086(rawTarget, "has", key);
        $58a6f012aab6e453$export$6b2a7d5132615086(rawTarget, "has", rawKey);
    }
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function $58a6f012aab6e453$var$size(target, isReadonly = false) {
    target = target["__v_raw"];
    !isReadonly && $58a6f012aab6e453$export$6b2a7d5132615086($58a6f012aab6e453$export$ab18938b9fc5f28e(target), "iterate", $58a6f012aab6e453$export$3c41b1a4e06acc14);
    return Reflect.get(target, "size", target);
}
function $58a6f012aab6e453$var$add(value) {
    value = $58a6f012aab6e453$export$ab18938b9fc5f28e(value);
    const target = $58a6f012aab6e453$export$ab18938b9fc5f28e(this);
    const proto = $58a6f012aab6e453$var$getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        $58a6f012aab6e453$export$e614dc9140f7ae71(target, "add", value, value);
    }
    return this;
}
function $58a6f012aab6e453$var$set(key, value) {
    value = $58a6f012aab6e453$export$ab18938b9fc5f28e(value);
    const target = $58a6f012aab6e453$export$ab18938b9fc5f28e(this);
    const { has: has2, get: get2 } = $58a6f012aab6e453$var$getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = $58a6f012aab6e453$export$ab18938b9fc5f28e(key);
        hadKey = has2.call(target, key);
    }
    const oldValue = get2.call(target, key);
    target.set(key, value);
    if (!hadKey) $58a6f012aab6e453$export$e614dc9140f7ae71(target, "add", key, value);
    else if ((0, $3JmrW.hasChanged)(value, oldValue)) $58a6f012aab6e453$export$e614dc9140f7ae71(target, "set", key, value, oldValue);
    return this;
}
function $58a6f012aab6e453$var$deleteEntry(key) {
    const target = $58a6f012aab6e453$export$ab18938b9fc5f28e(this);
    const { has: has2, get: get2 } = $58a6f012aab6e453$var$getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = $58a6f012aab6e453$export$ab18938b9fc5f28e(key);
        hadKey = has2.call(target, key);
    }
    const oldValue = get2 ? get2.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) $58a6f012aab6e453$export$e614dc9140f7ae71(target, "delete", key, void 0, oldValue);
    return result;
}
function $58a6f012aab6e453$var$clear() {
    const target = $58a6f012aab6e453$export$ab18938b9fc5f28e(this);
    const hadItems = target.size !== 0;
    const oldTarget = void 0;
    const result = target.clear();
    if (hadItems) $58a6f012aab6e453$export$e614dc9140f7ae71(target, "clear", void 0, void 0, oldTarget);
    return result;
}
function $58a6f012aab6e453$var$createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw"];
        const rawTarget = $58a6f012aab6e453$export$ab18938b9fc5f28e(target);
        const wrap = isShallow ? $58a6f012aab6e453$var$toShallow : isReadonly ? $58a6f012aab6e453$var$toReadonly : $58a6f012aab6e453$var$toReactive;
        !isReadonly && $58a6f012aab6e453$export$6b2a7d5132615086(rawTarget, "iterate", $58a6f012aab6e453$export$3c41b1a4e06acc14);
        return target.forEach((value, key)=>{
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function $58a6f012aab6e453$var$createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = $58a6f012aab6e453$export$ab18938b9fc5f28e(target);
        const targetIsMap = (0, $3JmrW.isMap)(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? $58a6f012aab6e453$var$toShallow : isReadonly ? $58a6f012aab6e453$var$toReadonly : $58a6f012aab6e453$var$toReactive;
        !isReadonly && $58a6f012aab6e453$export$6b2a7d5132615086(rawTarget, "iterate", isKeyOnly ? $58a6f012aab6e453$var$MAP_KEY_ITERATE_KEY : $58a6f012aab6e453$export$3c41b1a4e06acc14);
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
function $58a6f012aab6e453$var$createReadonlyMethod(type) {
    return function(...args) {
        return type === "delete" ? false : type === "clear" ? void 0 : this;
    };
}
function $58a6f012aab6e453$var$createInstrumentations() {
    const mutableInstrumentations2 = {
        get (key) {
            return $58a6f012aab6e453$var$get(this, key);
        },
        get size () {
            return $58a6f012aab6e453$var$size(this);
        },
        has: $58a6f012aab6e453$var$has,
        add: $58a6f012aab6e453$var$add,
        set: $58a6f012aab6e453$var$set,
        delete: $58a6f012aab6e453$var$deleteEntry,
        clear: $58a6f012aab6e453$var$clear,
        forEach: $58a6f012aab6e453$var$createForEach(false, false)
    };
    const shallowInstrumentations2 = {
        get (key) {
            return $58a6f012aab6e453$var$get(this, key, false, true);
        },
        get size () {
            return $58a6f012aab6e453$var$size(this);
        },
        has: $58a6f012aab6e453$var$has,
        add: $58a6f012aab6e453$var$add,
        set: $58a6f012aab6e453$var$set,
        delete: $58a6f012aab6e453$var$deleteEntry,
        clear: $58a6f012aab6e453$var$clear,
        forEach: $58a6f012aab6e453$var$createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
        get (key) {
            return $58a6f012aab6e453$var$get(this, key, true);
        },
        get size () {
            return $58a6f012aab6e453$var$size(this, true);
        },
        has (key) {
            return $58a6f012aab6e453$var$has.call(this, key, true);
        },
        add: $58a6f012aab6e453$var$createReadonlyMethod("add"),
        set: $58a6f012aab6e453$var$createReadonlyMethod("set"),
        delete: $58a6f012aab6e453$var$createReadonlyMethod("delete"),
        clear: $58a6f012aab6e453$var$createReadonlyMethod("clear"),
        forEach: $58a6f012aab6e453$var$createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
        get (key) {
            return $58a6f012aab6e453$var$get(this, key, true, true);
        },
        get size () {
            return $58a6f012aab6e453$var$size(this, true);
        },
        has (key) {
            return $58a6f012aab6e453$var$has.call(this, key, true);
        },
        add: $58a6f012aab6e453$var$createReadonlyMethod("add"),
        set: $58a6f012aab6e453$var$createReadonlyMethod("set"),
        delete: $58a6f012aab6e453$var$createReadonlyMethod("delete"),
        clear: $58a6f012aab6e453$var$createReadonlyMethod("clear"),
        forEach: $58a6f012aab6e453$var$createForEach(true, true)
    };
    const iteratorMethods = [
        "keys",
        "values",
        "entries",
        Symbol.iterator
    ];
    iteratorMethods.forEach((method)=>{
        mutableInstrumentations2[method] = $58a6f012aab6e453$var$createIterableMethod(method, false, false);
        readonlyInstrumentations2[method] = $58a6f012aab6e453$var$createIterableMethod(method, true, false);
        shallowInstrumentations2[method] = $58a6f012aab6e453$var$createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations2[method] = $58a6f012aab6e453$var$createIterableMethod(method, true, true);
    });
    return [
        mutableInstrumentations2,
        readonlyInstrumentations2,
        shallowInstrumentations2,
        shallowReadonlyInstrumentations2
    ];
}
const [$58a6f012aab6e453$var$mutableInstrumentations, $58a6f012aab6e453$var$readonlyInstrumentations, $58a6f012aab6e453$var$shallowInstrumentations, $58a6f012aab6e453$var$shallowReadonlyInstrumentations] = /* @__PURE__ */ $58a6f012aab6e453$var$createInstrumentations();
function $58a6f012aab6e453$var$createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? $58a6f012aab6e453$var$shallowReadonlyInstrumentations : $58a6f012aab6e453$var$shallowInstrumentations : isReadonly ? $58a6f012aab6e453$var$readonlyInstrumentations : $58a6f012aab6e453$var$mutableInstrumentations;
    return (target, key, receiver)=>{
        if (key === "__v_isReactive") return !isReadonly;
        else if (key === "__v_isReadonly") return isReadonly;
        else if (key === "__v_raw") return target;
        return Reflect.get((0, $3JmrW.hasOwn)(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
const $58a6f012aab6e453$var$mutableCollectionHandlers = {
    get: /* @__PURE__ */ $58a6f012aab6e453$var$createInstrumentationGetter(false, false)
};
const $58a6f012aab6e453$var$shallowCollectionHandlers = {
    get: /* @__PURE__ */ $58a6f012aab6e453$var$createInstrumentationGetter(false, true)
};
const $58a6f012aab6e453$var$readonlyCollectionHandlers = {
    get: /* @__PURE__ */ $58a6f012aab6e453$var$createInstrumentationGetter(true, false)
};
const $58a6f012aab6e453$var$shallowReadonlyCollectionHandlers = {
    get: /* @__PURE__ */ $58a6f012aab6e453$var$createInstrumentationGetter(true, true)
};
function $58a6f012aab6e453$var$checkIdentityKeys(target, has2, key) {
    const rawKey = $58a6f012aab6e453$export$ab18938b9fc5f28e(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
        const type = (0, $3JmrW.toRawType)(target);
        console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
}
const $58a6f012aab6e453$var$reactiveMap = /* @__PURE__ */ new WeakMap();
const $58a6f012aab6e453$var$shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const $58a6f012aab6e453$var$readonlyMap = /* @__PURE__ */ new WeakMap();
const $58a6f012aab6e453$var$shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function $58a6f012aab6e453$var$targetTypeMap(rawType) {
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
function $58a6f012aab6e453$var$getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 /* INVALID */  : $58a6f012aab6e453$var$targetTypeMap((0, $3JmrW.toRawType)(value));
}
function $58a6f012aab6e453$export$90a44edba14e47be(target) {
    if ($58a6f012aab6e453$export$92d09b48637741e7(target)) return target;
    return $58a6f012aab6e453$var$createReactiveObject(target, false, $58a6f012aab6e453$var$mutableHandlers, $58a6f012aab6e453$var$mutableCollectionHandlers, $58a6f012aab6e453$var$reactiveMap);
}
function $58a6f012aab6e453$export$8d81cefd22d22260(target) {
    return $58a6f012aab6e453$var$createReactiveObject(target, false, $58a6f012aab6e453$var$shallowReactiveHandlers, $58a6f012aab6e453$var$shallowCollectionHandlers, $58a6f012aab6e453$var$shallowReactiveMap);
}
function $58a6f012aab6e453$export$6ec456bd5b7b3c51(target) {
    return $58a6f012aab6e453$var$createReactiveObject(target, true, $58a6f012aab6e453$var$readonlyHandlers, $58a6f012aab6e453$var$readonlyCollectionHandlers, $58a6f012aab6e453$var$readonlyMap);
}
function $58a6f012aab6e453$export$7c4b5f2b50f09f6b(target) {
    return $58a6f012aab6e453$var$createReactiveObject(target, true, $58a6f012aab6e453$var$shallowReadonlyHandlers, $58a6f012aab6e453$var$shallowReadonlyCollectionHandlers, $58a6f012aab6e453$var$shallowReadonlyMap);
}
function $58a6f012aab6e453$var$createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!(0, $3JmrW.isObject)(target)) return target;
    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) return target;
    const existingProxy = proxyMap.get(target);
    if (existingProxy) return existingProxy;
    const targetType = $58a6f012aab6e453$var$getTargetType(target);
    if (targetType === 0 /* INVALID */ ) return target;
    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */  ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function $58a6f012aab6e453$export$352205f445242f02(value) {
    if ($58a6f012aab6e453$export$92d09b48637741e7(value)) return $58a6f012aab6e453$export$352205f445242f02(value["__v_raw"]);
    return !!(value && value["__v_isReactive"]);
}
function $58a6f012aab6e453$export$92d09b48637741e7(value) {
    return !!(value && value["__v_isReadonly"]);
}
function $58a6f012aab6e453$export$7f3fe6025abfa26e(value) {
    return !!(value && value["__v_isShallow"]);
}
function $58a6f012aab6e453$export$5f3ca29d057519b3(value) {
    return $58a6f012aab6e453$export$352205f445242f02(value) || $58a6f012aab6e453$export$92d09b48637741e7(value);
}
function $58a6f012aab6e453$export$ab18938b9fc5f28e(observed) {
    const raw = observed && observed["__v_raw"];
    return raw ? $58a6f012aab6e453$export$ab18938b9fc5f28e(raw) : observed;
}
function $58a6f012aab6e453$export$995ab8b13ad7a9d0(value) {
    (0, $3JmrW.def)(value, "__v_skip", true);
    return value;
}
const $58a6f012aab6e453$var$toReactive = (value)=>(0, $3JmrW.isObject)(value) ? $58a6f012aab6e453$export$90a44edba14e47be(value) : value;
const $58a6f012aab6e453$var$toReadonly = (value)=>(0, $3JmrW.isObject)(value) ? $58a6f012aab6e453$export$6ec456bd5b7b3c51(value) : value;
class $58a6f012aab6e453$var$ComputedRefImpl {
    constructor(getter, _setter, isReadonly, isSSR){
        this._setter = _setter;
        this.dep = void 0;
        this.__v_isRef = true;
        this["__v_isReadonly"] = false;
        this.effect = new $58a6f012aab6e453$export$28352bb4dd362521(()=>getter(this._value), ()=>$58a6f012aab6e453$var$triggerRefValue(this, 1));
        this.effect.computed = this;
        this.effect.active = this._cacheable = !isSSR;
        this["__v_isReadonly"] = isReadonly;
    }
    get value() {
        const self = $58a6f012aab6e453$export$ab18938b9fc5f28e(this);
        $58a6f012aab6e453$var$trackRefValue(self);
        if (!self._cacheable || self.effect.dirty) {
            if ((0, $3JmrW.hasChanged)(self._value, self._value = self.effect.run())) $58a6f012aab6e453$var$triggerRefValue(self, 2);
        }
        return self._value;
    }
    set value(newValue) {
        this._setter(newValue);
    }
    // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
    get _dirty() {
        return this.effect.dirty;
    }
    set _dirty(v) {
        this.effect.dirty = v;
    }
}
function $58a6f012aab6e453$export$2983e091f1a1e8e2(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    const onlyGetter = (0, $3JmrW.isFunction)(getterOrOptions);
    if (onlyGetter) {
        getter = getterOrOptions;
        setter = (0, $3JmrW.NOOP);
    } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    const cRef = new $58a6f012aab6e453$var$ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    return cRef;
}
function $58a6f012aab6e453$var$trackRefValue(ref2) {
    if ($58a6f012aab6e453$var$shouldTrack && $58a6f012aab6e453$var$activeEffect) {
        ref2 = $58a6f012aab6e453$export$ab18938b9fc5f28e(ref2);
        $58a6f012aab6e453$var$trackEffect($58a6f012aab6e453$var$activeEffect, ref2.dep || (ref2.dep = $58a6f012aab6e453$var$createDep(()=>ref2.dep = void 0, ref2 instanceof $58a6f012aab6e453$var$ComputedRefImpl ? ref2 : void 0)), void 0);
    }
}
function $58a6f012aab6e453$var$triggerRefValue(ref2, dirtyLevel = 3, newVal) {
    ref2 = $58a6f012aab6e453$export$ab18938b9fc5f28e(ref2);
    const dep = ref2.dep;
    if (dep) $58a6f012aab6e453$var$triggerEffects(dep, dirtyLevel, void 0);
}
function $58a6f012aab6e453$export$4f9f5282de18fc69(r) {
    return !!(r && r.__v_isRef === true);
}
function $58a6f012aab6e453$export$eff4d24c3ff7876e(value) {
    return $58a6f012aab6e453$var$createRef(value, false);
}
function $58a6f012aab6e453$export$9b7bc5fe3b17c8b3(value) {
    return $58a6f012aab6e453$var$createRef(value, true);
}
function $58a6f012aab6e453$var$createRef(rawValue, shallow) {
    if ($58a6f012aab6e453$export$4f9f5282de18fc69(rawValue)) return rawValue;
    return new $58a6f012aab6e453$var$RefImpl(rawValue, shallow);
}
class $58a6f012aab6e453$var$RefImpl {
    constructor(value, __v_isShallow){
        this.__v_isShallow = __v_isShallow;
        this.dep = void 0;
        this.__v_isRef = true;
        this._rawValue = __v_isShallow ? value : $58a6f012aab6e453$export$ab18938b9fc5f28e(value);
        this._value = __v_isShallow ? value : $58a6f012aab6e453$var$toReactive(value);
    }
    get value() {
        $58a6f012aab6e453$var$trackRefValue(this);
        return this._value;
    }
    set value(newVal) {
        const useDirectValue = this.__v_isShallow || $58a6f012aab6e453$export$7f3fe6025abfa26e(newVal) || $58a6f012aab6e453$export$92d09b48637741e7(newVal);
        newVal = useDirectValue ? newVal : $58a6f012aab6e453$export$ab18938b9fc5f28e(newVal);
        if ((0, $3JmrW.hasChanged)(newVal, this._rawValue)) {
            this._rawValue = newVal;
            this._value = useDirectValue ? newVal : $58a6f012aab6e453$var$toReactive(newVal);
            $58a6f012aab6e453$var$triggerRefValue(this, 3, newVal);
        }
    }
}
function $58a6f012aab6e453$export$f402f86588575ccc(ref2) {
    $58a6f012aab6e453$var$triggerRefValue(ref2, 3, void 0);
}
function $58a6f012aab6e453$export$a239a76781616204(ref2) {
    return $58a6f012aab6e453$export$4f9f5282de18fc69(ref2) ? ref2.value : ref2;
}
function $58a6f012aab6e453$export$30bdcc2218aa9458(source) {
    return (0, $3JmrW.isFunction)(source) ? source() : $58a6f012aab6e453$export$a239a76781616204(source);
}
const $58a6f012aab6e453$var$shallowUnwrapHandlers = {
    get: (target, key, receiver)=>$58a6f012aab6e453$export$a239a76781616204(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver)=>{
        const oldValue = target[key];
        if ($58a6f012aab6e453$export$4f9f5282de18fc69(oldValue) && !$58a6f012aab6e453$export$4f9f5282de18fc69(value)) {
            oldValue.value = value;
            return true;
        } else return Reflect.set(target, key, value, receiver);
    }
};
function $58a6f012aab6e453$export$f353fd1b97db3fa0(objectWithRefs) {
    return $58a6f012aab6e453$export$352205f445242f02(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, $58a6f012aab6e453$var$shallowUnwrapHandlers);
}
class $58a6f012aab6e453$var$CustomRefImpl {
    constructor(factory){
        this.dep = void 0;
        this.__v_isRef = true;
        const { get: get, set: set } = factory(()=>$58a6f012aab6e453$var$trackRefValue(this), ()=>$58a6f012aab6e453$var$triggerRefValue(this));
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
function $58a6f012aab6e453$export$a20c2dd6199824cb(factory) {
    return new $58a6f012aab6e453$var$CustomRefImpl(factory);
}
function $58a6f012aab6e453$export$2e9533675e5e70e0(object) {
    const ret = (0, $3JmrW.isArray)(object) ? new Array(object.length) : {};
    for(const key in object)ret[key] = $58a6f012aab6e453$var$propertyToRef(object, key);
    return ret;
}
class $58a6f012aab6e453$var$ObjectRefImpl {
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
        return $58a6f012aab6e453$var$getDepFromReactive($58a6f012aab6e453$export$ab18938b9fc5f28e(this._object), this._key);
    }
}
class $58a6f012aab6e453$var$GetterRefImpl {
    constructor(_getter){
        this._getter = _getter;
        this.__v_isRef = true;
        this.__v_isReadonly = true;
    }
    get value() {
        return this._getter();
    }
}
function $58a6f012aab6e453$export$1f60508e4f47b4b7(source, key, defaultValue) {
    if ($58a6f012aab6e453$export$4f9f5282de18fc69(source)) return source;
    else if ((0, $3JmrW.isFunction)(source)) return new $58a6f012aab6e453$var$GetterRefImpl(source);
    else if ((0, $3JmrW.isObject)(source) && arguments.length > 1) return $58a6f012aab6e453$var$propertyToRef(source, key, defaultValue);
    else return $58a6f012aab6e453$export$eff4d24c3ff7876e(source);
}
function $58a6f012aab6e453$var$propertyToRef(source, key, defaultValue) {
    const val = source[key];
    return $58a6f012aab6e453$export$4f9f5282de18fc69(val) ? val : new $58a6f012aab6e453$var$ObjectRefImpl(source, key, defaultValue);
}
const $58a6f012aab6e453$export$483264c4ec4c46ce = $58a6f012aab6e453$export$2983e091f1a1e8e2;
const $58a6f012aab6e453$export$2ac2bd0a56e04551 = {
    "GET": "get",
    "HAS": "has",
    "ITERATE": "iterate"
};
const $58a6f012aab6e453$export$1e8941c92696a26 = {
    "SET": "set",
    "ADD": "add",
    "DELETE": "delete",
    "CLEAR": "clear"
};
const $58a6f012aab6e453$export$e738ba173768902d = {
    "SKIP": "__v_skip",
    "IS_REACTIVE": "__v_isReactive",
    "IS_READONLY": "__v_isReadonly",
    "IS_SHALLOW": "__v_isShallow",
    "RAW": "__v_raw"
};

});
parcelRegister("3JmrW", function(module, exports) {

$parcel$export(module.exports, "makeMap", () => $2b76fd1e4efffafa$export$b41394a5437791c8);
$parcel$export(module.exports, "EMPTY_OBJ", () => $2b76fd1e4efffafa$export$cf583d23ab39677c);
$parcel$export(module.exports, "EMPTY_ARR", () => $2b76fd1e4efffafa$export$6bd8558f433f1cc1);
$parcel$export(module.exports, "NOOP", () => $2b76fd1e4efffafa$export$5702a91a6f42969f);
$parcel$export(module.exports, "NO", () => $2b76fd1e4efffafa$export$c01351c0af048e39);
$parcel$export(module.exports, "isOn", () => $2b76fd1e4efffafa$export$1a2d97de39ecbb75);
$parcel$export(module.exports, "isModelListener", () => $2b76fd1e4efffafa$export$793aa5469768d691);
$parcel$export(module.exports, "extend", () => $2b76fd1e4efffafa$export$8b58be045bf06082);
$parcel$export(module.exports, "remove", () => $2b76fd1e4efffafa$export$cd7f480d6b8286c3);
$parcel$export(module.exports, "hasOwn", () => $2b76fd1e4efffafa$export$b5a638e9b3fff9f3);
$parcel$export(module.exports, "isArray", () => $2b76fd1e4efffafa$export$43bee75e5e14138e);
$parcel$export(module.exports, "isMap", () => $2b76fd1e4efffafa$export$5c90113a285f2241);
$parcel$export(module.exports, "isSet", () => $2b76fd1e4efffafa$export$6750766a7c7ec627);
$parcel$export(module.exports, "isRegExp", () => $2b76fd1e4efffafa$export$49841c62b9eff15);
$parcel$export(module.exports, "isFunction", () => $2b76fd1e4efffafa$export$f6e2535fb5126e54);
$parcel$export(module.exports, "isString", () => $2b76fd1e4efffafa$export$844ec244b1367d54);
$parcel$export(module.exports, "isSymbol", () => $2b76fd1e4efffafa$export$a244864fd9645c7f);
$parcel$export(module.exports, "isObject", () => $2b76fd1e4efffafa$export$a6cdc56e425d0d0a);
$parcel$export(module.exports, "isPromise", () => $2b76fd1e4efffafa$export$4369c812aac99591);
$parcel$export(module.exports, "toRawType", () => $2b76fd1e4efffafa$export$5ad0a3c360b8fbb5);
$parcel$export(module.exports, "isPlainObject", () => $2b76fd1e4efffafa$export$53b83ca8eaab0383);
$parcel$export(module.exports, "isIntegerKey", () => $2b76fd1e4efffafa$export$e2a2b93446ec9fe);
$parcel$export(module.exports, "isReservedProp", () => $2b76fd1e4efffafa$export$bf7d3c0236f0aa85);
$parcel$export(module.exports, "isBuiltInDirective", () => $2b76fd1e4efffafa$export$a9c1fdb3030c2a6b);
$parcel$export(module.exports, "camelize", () => $2b76fd1e4efffafa$export$161d051f5dd25de7);
$parcel$export(module.exports, "hyphenate", () => $2b76fd1e4efffafa$export$6e6a0a3676c4b8bb);
$parcel$export(module.exports, "capitalize", () => $2b76fd1e4efffafa$export$9a00dee1beb8f576);
$parcel$export(module.exports, "toHandlerKey", () => $2b76fd1e4efffafa$export$8c022799eeaaefcd);
$parcel$export(module.exports, "hasChanged", () => $2b76fd1e4efffafa$export$f619eb8b89076d23);
$parcel$export(module.exports, "invokeArrayFns", () => $2b76fd1e4efffafa$export$39951422d618a9d3);
$parcel$export(module.exports, "def", () => $2b76fd1e4efffafa$export$8afb76124cf08683);
$parcel$export(module.exports, "looseToNumber", () => $2b76fd1e4efffafa$export$d3be7195bcc2f31b);
$parcel$export(module.exports, "toNumber", () => $2b76fd1e4efffafa$export$a0a81dc3380ce7d3);
$parcel$export(module.exports, "getGlobalThis", () => $2b76fd1e4efffafa$export$ff5f2eeb11fc7e14);
$parcel$export(module.exports, "isGloballyAllowed", () => $2b76fd1e4efffafa$export$f73b8c13b7f97ebf);
$parcel$export(module.exports, "normalizeStyle", () => $2b76fd1e4efffafa$export$8756898546458274);
$parcel$export(module.exports, "stringifyStyle", () => $2b76fd1e4efffafa$export$9466a5a0ee6f1479);
$parcel$export(module.exports, "normalizeClass", () => $2b76fd1e4efffafa$export$4f7022d2d68e2c5a);
$parcel$export(module.exports, "isHTMLTag", () => $2b76fd1e4efffafa$export$1ccf854a0984f890);
$parcel$export(module.exports, "isSVGTag", () => $2b76fd1e4efffafa$export$6328ce7565ea1049);
$parcel$export(module.exports, "isMathMLTag", () => $2b76fd1e4efffafa$export$4a46ca4c5be17b20);
$parcel$export(module.exports, "isSpecialBooleanAttr", () => $2b76fd1e4efffafa$export$d186f5eb2e810715);
$parcel$export(module.exports, "isBooleanAttr", () => $2b76fd1e4efffafa$export$f763ba3b84e9cd8c);
$parcel$export(module.exports, "includeBooleanAttr", () => $2b76fd1e4efffafa$export$e3f3cdb1390d56ce);
$parcel$export(module.exports, "isKnownHtmlAttr", () => $2b76fd1e4efffafa$export$f7e7a1cc7da8d5e9);
$parcel$export(module.exports, "isKnownSvgAttr", () => $2b76fd1e4efffafa$export$80da416f43933831);
$parcel$export(module.exports, "looseEqual", () => $2b76fd1e4efffafa$export$ae8015769846262c);
$parcel$export(module.exports, "looseIndexOf", () => $2b76fd1e4efffafa$export$42912a80cedb8bd4);
$parcel$export(module.exports, "toDisplayString", () => $2b76fd1e4efffafa$export$b5b1545233b45293);
function $2b76fd1e4efffafa$export$b41394a5437791c8(str, expectsLowerCase) {
    const set = new Set(str.split(","));
    return expectsLowerCase ? (val)=>set.has(val.toLowerCase()) : (val)=>set.has(val);
}
const $2b76fd1e4efffafa$export$cf583d23ab39677c = {};
const $2b76fd1e4efffafa$export$6bd8558f433f1cc1 = [];
const $2b76fd1e4efffafa$export$5702a91a6f42969f = ()=>{};
const $2b76fd1e4efffafa$export$c01351c0af048e39 = ()=>false;
const $2b76fd1e4efffafa$export$1a2d97de39ecbb75 = (key)=>key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
    (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const $2b76fd1e4efffafa$export$793aa5469768d691 = (key)=>key.startsWith("onUpdate:");
const $2b76fd1e4efffafa$export$8b58be045bf06082 = Object.assign;
const $2b76fd1e4efffafa$export$cd7f480d6b8286c3 = (arr, el)=>{
    const i = arr.indexOf(el);
    if (i > -1) arr.splice(i, 1);
};
const $2b76fd1e4efffafa$var$hasOwnProperty = Object.prototype.hasOwnProperty;
const $2b76fd1e4efffafa$export$b5a638e9b3fff9f3 = (val, key)=>$2b76fd1e4efffafa$var$hasOwnProperty.call(val, key);
const $2b76fd1e4efffafa$export$43bee75e5e14138e = Array.isArray;
const $2b76fd1e4efffafa$export$5c90113a285f2241 = (val)=>$2b76fd1e4efffafa$export$1dccc787cc36538b(val) === "[object Map]";
const $2b76fd1e4efffafa$export$6750766a7c7ec627 = (val)=>$2b76fd1e4efffafa$export$1dccc787cc36538b(val) === "[object Set]";
const $2b76fd1e4efffafa$export$871608497c498473 = (val)=>$2b76fd1e4efffafa$export$1dccc787cc36538b(val) === "[object Date]";
const $2b76fd1e4efffafa$export$49841c62b9eff15 = (val)=>$2b76fd1e4efffafa$export$1dccc787cc36538b(val) === "[object RegExp]";
const $2b76fd1e4efffafa$export$f6e2535fb5126e54 = (val)=>typeof val === "function";
const $2b76fd1e4efffafa$export$844ec244b1367d54 = (val)=>typeof val === "string";
const $2b76fd1e4efffafa$export$a244864fd9645c7f = (val)=>typeof val === "symbol";
const $2b76fd1e4efffafa$export$a6cdc56e425d0d0a = (val)=>val !== null && typeof val === "object";
const $2b76fd1e4efffafa$export$4369c812aac99591 = (val)=>{
    return ($2b76fd1e4efffafa$export$a6cdc56e425d0d0a(val) || $2b76fd1e4efffafa$export$f6e2535fb5126e54(val)) && $2b76fd1e4efffafa$export$f6e2535fb5126e54(val.then) && $2b76fd1e4efffafa$export$f6e2535fb5126e54(val.catch);
};
const $2b76fd1e4efffafa$export$830c053460e5ddf6 = Object.prototype.toString;
const $2b76fd1e4efffafa$export$1dccc787cc36538b = (value)=>$2b76fd1e4efffafa$export$830c053460e5ddf6.call(value);
const $2b76fd1e4efffafa$export$5ad0a3c360b8fbb5 = (value)=>{
    return $2b76fd1e4efffafa$export$1dccc787cc36538b(value).slice(8, -1);
};
const $2b76fd1e4efffafa$export$53b83ca8eaab0383 = (val)=>$2b76fd1e4efffafa$export$1dccc787cc36538b(val) === "[object Object]";
const $2b76fd1e4efffafa$export$e2a2b93446ec9fe = (key)=>$2b76fd1e4efffafa$export$844ec244b1367d54(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const $2b76fd1e4efffafa$export$bf7d3c0236f0aa85 = /* @__PURE__ */ $2b76fd1e4efffafa$export$b41394a5437791c8(// the leading comma is intentional so empty string "" is also included
",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const $2b76fd1e4efffafa$export$a9c1fdb3030c2a6b = /* @__PURE__ */ $2b76fd1e4efffafa$export$b41394a5437791c8("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const $2b76fd1e4efffafa$var$cacheStringFunction = (fn)=>{
    const cache = /* @__PURE__ */ Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};
const $2b76fd1e4efffafa$var$camelizeRE = /-(\w)/g;
const $2b76fd1e4efffafa$export$161d051f5dd25de7 = $2b76fd1e4efffafa$var$cacheStringFunction((str)=>{
    return str.replace($2b76fd1e4efffafa$var$camelizeRE, (_, c)=>c ? c.toUpperCase() : "");
});
const $2b76fd1e4efffafa$var$hyphenateRE = /\B([A-Z])/g;
const $2b76fd1e4efffafa$export$6e6a0a3676c4b8bb = $2b76fd1e4efffafa$var$cacheStringFunction((str)=>str.replace($2b76fd1e4efffafa$var$hyphenateRE, "-$1").toLowerCase());
const $2b76fd1e4efffafa$export$9a00dee1beb8f576 = $2b76fd1e4efffafa$var$cacheStringFunction((str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
});
const $2b76fd1e4efffafa$export$8c022799eeaaefcd = $2b76fd1e4efffafa$var$cacheStringFunction((str)=>{
    const s = str ? `on${$2b76fd1e4efffafa$export$9a00dee1beb8f576(str)}` : ``;
    return s;
});
const $2b76fd1e4efffafa$export$f619eb8b89076d23 = (value, oldValue)=>!Object.is(value, oldValue);
const $2b76fd1e4efffafa$export$39951422d618a9d3 = (fns, arg)=>{
    for(let i = 0; i < fns.length; i++)fns[i](arg);
};
const $2b76fd1e4efffafa$export$8afb76124cf08683 = (obj, key, value)=>{
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value: value
    });
};
const $2b76fd1e4efffafa$export$d3be7195bcc2f31b = (val)=>{
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
const $2b76fd1e4efffafa$export$a0a81dc3380ce7d3 = (val)=>{
    const n = $2b76fd1e4efffafa$export$844ec244b1367d54(val) ? Number(val) : NaN;
    return isNaN(n) ? val : n;
};
let $2b76fd1e4efffafa$var$_globalThis;
const $2b76fd1e4efffafa$export$ff5f2eeb11fc7e14 = ()=>{
    return $2b76fd1e4efffafa$var$_globalThis || ($2b76fd1e4efffafa$var$_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof $parcel$global !== "undefined" ? $parcel$global : {});
};
const $2b76fd1e4efffafa$var$identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function $2b76fd1e4efffafa$export$53d5e12f9a1d3cde(name) {
    return $2b76fd1e4efffafa$var$identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}
const $2b76fd1e4efffafa$export$4bcc674e2ac54ab0 = {
    "TEXT": 1,
    "1": "TEXT",
    "CLASS": 2,
    "2": "CLASS",
    "STYLE": 4,
    "4": "STYLE",
    "PROPS": 8,
    "8": "PROPS",
    "FULL_PROPS": 16,
    "16": "FULL_PROPS",
    "NEED_HYDRATION": 32,
    "32": "NEED_HYDRATION",
    "STABLE_FRAGMENT": 64,
    "64": "STABLE_FRAGMENT",
    "KEYED_FRAGMENT": 128,
    "128": "KEYED_FRAGMENT",
    "UNKEYED_FRAGMENT": 256,
    "256": "UNKEYED_FRAGMENT",
    "NEED_PATCH": 512,
    "512": "NEED_PATCH",
    "DYNAMIC_SLOTS": 1024,
    "1024": "DYNAMIC_SLOTS",
    "DEV_ROOT_FRAGMENT": 2048,
    "2048": "DEV_ROOT_FRAGMENT",
    "HOISTED": -1,
    "-1": "HOISTED",
    "BAIL": -2,
    "-2": "BAIL"
};
const $2b76fd1e4efffafa$export$def7dc2c2e95a08a = {
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
const $2b76fd1e4efffafa$export$ff27c1ebf2311072 = {
    "ELEMENT": 1,
    "1": "ELEMENT",
    "FUNCTIONAL_COMPONENT": 2,
    "2": "FUNCTIONAL_COMPONENT",
    "STATEFUL_COMPONENT": 4,
    "4": "STATEFUL_COMPONENT",
    "TEXT_CHILDREN": 8,
    "8": "TEXT_CHILDREN",
    "ARRAY_CHILDREN": 16,
    "16": "ARRAY_CHILDREN",
    "SLOTS_CHILDREN": 32,
    "32": "SLOTS_CHILDREN",
    "TELEPORT": 64,
    "64": "TELEPORT",
    "SUSPENSE": 128,
    "128": "SUSPENSE",
    "COMPONENT_SHOULD_KEEP_ALIVE": 256,
    "256": "COMPONENT_SHOULD_KEEP_ALIVE",
    "COMPONENT_KEPT_ALIVE": 512,
    "512": "COMPONENT_KEPT_ALIVE",
    "COMPONENT": 6,
    "6": "COMPONENT"
};
const $2b76fd1e4efffafa$export$b1e6fe37bcdef5be = {
    "STABLE": 1,
    "1": "STABLE",
    "DYNAMIC": 2,
    "2": "DYNAMIC",
    "FORWARDED": 3,
    "3": "FORWARDED"
};
const $2b76fd1e4efffafa$export$624972196ed3745f = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
};
const $2b76fd1e4efffafa$var$GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error";
const $2b76fd1e4efffafa$export$f73b8c13b7f97ebf = /* @__PURE__ */ $2b76fd1e4efffafa$export$b41394a5437791c8($2b76fd1e4efffafa$var$GLOBALS_ALLOWED);
const $2b76fd1e4efffafa$export$d6571a1911e4f27e = $2b76fd1e4efffafa$export$f73b8c13b7f97ebf;
const $2b76fd1e4efffafa$var$range = 2;
function $2b76fd1e4efffafa$export$f9c0d8b6684a279b(source, start = 0, end = source.length) {
    let lines = source.split(/(\r?\n)/);
    const newlineSequences = lines.filter((_, idx)=>idx % 2 === 1);
    lines = lines.filter((_, idx)=>idx % 2 === 0);
    let count = 0;
    const res = [];
    for(let i = 0; i < lines.length; i++){
        count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
        if (count >= start) {
            for(let j = i - $2b76fd1e4efffafa$var$range; j <= i + $2b76fd1e4efffafa$var$range || end > count; j++){
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
function $2b76fd1e4efffafa$export$8756898546458274(value) {
    if ($2b76fd1e4efffafa$export$43bee75e5e14138e(value)) {
        const res = {};
        for(let i = 0; i < value.length; i++){
            const item = value[i];
            const normalized = $2b76fd1e4efffafa$export$844ec244b1367d54(item) ? $2b76fd1e4efffafa$export$76a205ce979d066a(item) : $2b76fd1e4efffafa$export$8756898546458274(item);
            if (normalized) for(const key in normalized)res[key] = normalized[key];
        }
        return res;
    } else if ($2b76fd1e4efffafa$export$844ec244b1367d54(value) || $2b76fd1e4efffafa$export$a6cdc56e425d0d0a(value)) return value;
}
const $2b76fd1e4efffafa$var$listDelimiterRE = /;(?![^(]*\))/g;
const $2b76fd1e4efffafa$var$propertyDelimiterRE = /:([^]+)/;
const $2b76fd1e4efffafa$var$styleCommentRE = /\/\*[^]*?\*\//g;
function $2b76fd1e4efffafa$export$76a205ce979d066a(cssText) {
    const ret = {};
    cssText.replace($2b76fd1e4efffafa$var$styleCommentRE, "").split($2b76fd1e4efffafa$var$listDelimiterRE).forEach((item)=>{
        if (item) {
            const tmp = item.split($2b76fd1e4efffafa$var$propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function $2b76fd1e4efffafa$export$9466a5a0ee6f1479(styles) {
    let ret = "";
    if (!styles || $2b76fd1e4efffafa$export$844ec244b1367d54(styles)) return ret;
    for(const key in styles){
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : $2b76fd1e4efffafa$export$6e6a0a3676c4b8bb(key);
        if ($2b76fd1e4efffafa$export$844ec244b1367d54(value) || typeof value === "number") ret += `${normalizedKey}:${value};`;
    }
    return ret;
}
function $2b76fd1e4efffafa$export$4f7022d2d68e2c5a(value) {
    let res = "";
    if ($2b76fd1e4efffafa$export$844ec244b1367d54(value)) res = value;
    else if ($2b76fd1e4efffafa$export$43bee75e5e14138e(value)) for(let i = 0; i < value.length; i++){
        const normalized = $2b76fd1e4efffafa$export$4f7022d2d68e2c5a(value[i]);
        if (normalized) res += normalized + " ";
    }
    else if ($2b76fd1e4efffafa$export$a6cdc56e425d0d0a(value)) {
        for(const name in value)if (value[name]) res += name + " ";
    }
    return res.trim();
}
function $2b76fd1e4efffafa$export$601abcd8103db5e4(props) {
    if (!props) return null;
    let { class: klass, style: style } = props;
    if (klass && !$2b76fd1e4efffafa$export$844ec244b1367d54(klass)) props.class = $2b76fd1e4efffafa$export$4f7022d2d68e2c5a(klass);
    if (style) props.style = $2b76fd1e4efffafa$export$8756898546458274(style);
    return props;
}
const $2b76fd1e4efffafa$var$HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const $2b76fd1e4efffafa$var$SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const $2b76fd1e4efffafa$var$MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
const $2b76fd1e4efffafa$var$VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const $2b76fd1e4efffafa$export$1ccf854a0984f890 = /* @__PURE__ */ $2b76fd1e4efffafa$export$b41394a5437791c8($2b76fd1e4efffafa$var$HTML_TAGS);
const $2b76fd1e4efffafa$export$6328ce7565ea1049 = /* @__PURE__ */ $2b76fd1e4efffafa$export$b41394a5437791c8($2b76fd1e4efffafa$var$SVG_TAGS);
const $2b76fd1e4efffafa$export$4a46ca4c5be17b20 = /* @__PURE__ */ $2b76fd1e4efffafa$export$b41394a5437791c8($2b76fd1e4efffafa$var$MATH_TAGS);
const $2b76fd1e4efffafa$export$e5f2d3d97d9367a4 = /* @__PURE__ */ $2b76fd1e4efffafa$export$b41394a5437791c8($2b76fd1e4efffafa$var$VOID_TAGS);
const $2b76fd1e4efffafa$var$specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const $2b76fd1e4efffafa$export$d186f5eb2e810715 = /* @__PURE__ */ $2b76fd1e4efffafa$export$b41394a5437791c8($2b76fd1e4efffafa$var$specialBooleanAttrs);
const $2b76fd1e4efffafa$export$f763ba3b84e9cd8c = /* @__PURE__ */ $2b76fd1e4efffafa$export$b41394a5437791c8($2b76fd1e4efffafa$var$specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function $2b76fd1e4efffafa$export$e3f3cdb1390d56ce(value) {
    return !!value || value === "";
}
const $2b76fd1e4efffafa$var$unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const $2b76fd1e4efffafa$var$attrValidationCache = {};
function $2b76fd1e4efffafa$export$d55ef77660f30d12(name) {
    if ($2b76fd1e4efffafa$var$attrValidationCache.hasOwnProperty(name)) return $2b76fd1e4efffafa$var$attrValidationCache[name];
    const isUnsafe = $2b76fd1e4efffafa$var$unsafeAttrCharRE.test(name);
    if (isUnsafe) console.error(`unsafe attribute name: ${name}`);
    return $2b76fd1e4efffafa$var$attrValidationCache[name] = !isUnsafe;
}
const $2b76fd1e4efffafa$export$b66fd0cae8dec3c8 = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv"
};
const $2b76fd1e4efffafa$export$f7e7a1cc7da8d5e9 = /* @__PURE__ */ $2b76fd1e4efffafa$export$b41394a5437791c8(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
const $2b76fd1e4efffafa$export$80da416f43933831 = /* @__PURE__ */ $2b76fd1e4efffafa$export$b41394a5437791c8(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
const $2b76fd1e4efffafa$var$escapeRE = /["'&<>]/;
function $2b76fd1e4efffafa$export$4cf11838cdc2a8a8(string) {
    const str = "" + string;
    const match = $2b76fd1e4efffafa$var$escapeRE.exec(str);
    if (!match) return str;
    let html = "";
    let escaped;
    let index;
    let lastIndex = 0;
    for(index = match.index; index < str.length; index++){
        switch(str.charCodeAt(index)){
            case 34:
                escaped = "&quot;";
                break;
            case 38:
                escaped = "&amp;";
                break;
            case 39:
                escaped = "&#39;";
                break;
            case 60:
                escaped = "&lt;";
                break;
            case 62:
                escaped = "&gt;";
                break;
            default:
                continue;
        }
        if (lastIndex !== index) html += str.slice(lastIndex, index);
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
const $2b76fd1e4efffafa$var$commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function $2b76fd1e4efffafa$export$7b105034a53bde5f(src) {
    return src.replace($2b76fd1e4efffafa$var$commentStripRE, "");
}
function $2b76fd1e4efffafa$var$looseCompareArrays(a, b) {
    if (a.length !== b.length) return false;
    let equal = true;
    for(let i = 0; equal && i < a.length; i++)equal = $2b76fd1e4efffafa$export$ae8015769846262c(a[i], b[i]);
    return equal;
}
function $2b76fd1e4efffafa$export$ae8015769846262c(a, b) {
    if (a === b) return true;
    let aValidType = $2b76fd1e4efffafa$export$871608497c498473(a);
    let bValidType = $2b76fd1e4efffafa$export$871608497c498473(b);
    if (aValidType || bValidType) return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    aValidType = $2b76fd1e4efffafa$export$a244864fd9645c7f(a);
    bValidType = $2b76fd1e4efffafa$export$a244864fd9645c7f(b);
    if (aValidType || bValidType) return a === b;
    aValidType = $2b76fd1e4efffafa$export$43bee75e5e14138e(a);
    bValidType = $2b76fd1e4efffafa$export$43bee75e5e14138e(b);
    if (aValidType || bValidType) return aValidType && bValidType ? $2b76fd1e4efffafa$var$looseCompareArrays(a, b) : false;
    aValidType = $2b76fd1e4efffafa$export$a6cdc56e425d0d0a(a);
    bValidType = $2b76fd1e4efffafa$export$a6cdc56e425d0d0a(b);
    if (aValidType || bValidType) {
        if (!aValidType || !bValidType) return false;
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) return false;
        for(const key in a){
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if (aHasKey && !bHasKey || !aHasKey && bHasKey || !$2b76fd1e4efffafa$export$ae8015769846262c(a[key], b[key])) return false;
        }
    }
    return String(a) === String(b);
}
function $2b76fd1e4efffafa$export$42912a80cedb8bd4(arr, val) {
    return arr.findIndex((item)=>$2b76fd1e4efffafa$export$ae8015769846262c(item, val));
}
const $2b76fd1e4efffafa$export$b5b1545233b45293 = (val)=>{
    return $2b76fd1e4efffafa$export$844ec244b1367d54(val) ? val : val == null ? "" : $2b76fd1e4efffafa$export$43bee75e5e14138e(val) || $2b76fd1e4efffafa$export$a6cdc56e425d0d0a(val) && (val.toString === $2b76fd1e4efffafa$export$830c053460e5ddf6 || !$2b76fd1e4efffafa$export$f6e2535fb5126e54(val.toString)) ? JSON.stringify(val, $2b76fd1e4efffafa$var$replacer, 2) : String(val);
};
const $2b76fd1e4efffafa$var$replacer = (_key, val)=>{
    if (val && val.__v_isRef) return $2b76fd1e4efffafa$var$replacer(_key, val.value);
    else if ($2b76fd1e4efffafa$export$5c90113a285f2241(val)) return {
        [`Map(${val.size})`]: [
            ...val.entries()
        ].reduce((entries, [key, val2], i)=>{
            entries[$2b76fd1e4efffafa$var$stringifySymbol(key, i) + " =>"] = val2;
            return entries;
        }, {})
    };
    else if ($2b76fd1e4efffafa$export$6750766a7c7ec627(val)) return {
        [`Set(${val.size})`]: [
            ...val.values()
        ].map((v)=>$2b76fd1e4efffafa$var$stringifySymbol(v))
    };
    else if ($2b76fd1e4efffafa$export$a244864fd9645c7f(val)) return $2b76fd1e4efffafa$var$stringifySymbol(val);
    else if ($2b76fd1e4efffafa$export$a6cdc56e425d0d0a(val) && !$2b76fd1e4efffafa$export$43bee75e5e14138e(val) && !$2b76fd1e4efffafa$export$53b83ca8eaab0383(val)) return String(val);
    return val;
};
const $2b76fd1e4efffafa$var$stringifySymbol = (v, i = "")=>{
    var _a;
    return $2b76fd1e4efffafa$export$a244864fd9645c7f(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v;
};

});



parcelRegister("jdeLb", function(module, exports) {
$parcel$export(module.exports, "BaseTransition", () => (parcelRequire("j2KKi")).BaseTransition);
$parcel$export(module.exports, "BaseTransitionPropsValidators", () => (parcelRequire("j2KKi")).BaseTransitionPropsValidators);
$parcel$export(module.exports, "callWithAsyncErrorHandling", () => (parcelRequire("j2KKi")).callWithAsyncErrorHandling);
$parcel$export(module.exports, "camelize", () => (parcelRequire("3JmrW")).camelize);
$parcel$export(module.exports, "computed", () => (parcelRequire("j2KKi")).computed);
$parcel$export(module.exports, "createBlock", () => (parcelRequire("j2KKi")).createBlock);
$parcel$export(module.exports, "createElementBlock", () => (parcelRequire("j2KKi")).createElementBlock);
$parcel$export(module.exports, "createElementVNode", () => (parcelRequire("j2KKi")).createElementVNode);
$parcel$export(module.exports, "createHydrationRenderer", () => (parcelRequire("j2KKi")).createHydrationRenderer);
$parcel$export(module.exports, "createRenderer", () => (parcelRequire("j2KKi")).createRenderer);
$parcel$export(module.exports, "createTextVNode", () => (parcelRequire("j2KKi")).createTextVNode);
$parcel$export(module.exports, "createVNode", () => (parcelRequire("j2KKi")).createVNode);
$parcel$export(module.exports, "defineComponent", () => (parcelRequire("j2KKi")).defineComponent);
$parcel$export(module.exports, "Fragment", () => (parcelRequire("j2KKi")).Fragment);
$parcel$export(module.exports, "getCurrentInstance", () => (parcelRequire("j2KKi")).getCurrentInstance);
$parcel$export(module.exports, "getTransitionRawChildren", () => (parcelRequire("j2KKi")).getTransitionRawChildren);
$parcel$export(module.exports, "h", () => (parcelRequire("j2KKi")).h);
$parcel$export(module.exports, "initCustomFormatter", () => (parcelRequire("j2KKi")).initCustomFormatter);
$parcel$export(module.exports, "inject", () => (parcelRequire("j2KKi")).inject);
$parcel$export(module.exports, "isRuntimeOnly", () => (parcelRequire("j2KKi")).isRuntimeOnly);
$parcel$export(module.exports, "nextTick", () => (parcelRequire("j2KKi")).nextTick);
$parcel$export(module.exports, "onBeforeUnmount", () => (parcelRequire("j2KKi")).onBeforeUnmount);
$parcel$export(module.exports, "onMounted", () => (parcelRequire("j2KKi")).onMounted);
$parcel$export(module.exports, "onUnmounted", () => (parcelRequire("j2KKi")).onUnmounted);
$parcel$export(module.exports, "onUpdated", () => (parcelRequire("j2KKi")).onUpdated);
$parcel$export(module.exports, "openBlock", () => (parcelRequire("j2KKi")).openBlock);
$parcel$export(module.exports, "provide", () => (parcelRequire("j2KKi")).provide);
$parcel$export(module.exports, "ref", () => (parcelRequire("7BTmT")).ref);
$parcel$export(module.exports, "renderSlot", () => (parcelRequire("j2KKi")).renderSlot);
$parcel$export(module.exports, "resolveComponent", () => (parcelRequire("j2KKi")).resolveComponent);
$parcel$export(module.exports, "resolveDynamicComponent", () => (parcelRequire("j2KKi")).resolveDynamicComponent);
$parcel$export(module.exports, "resolveTransitionHooks", () => (parcelRequire("j2KKi")).resolveTransitionHooks);
$parcel$export(module.exports, "setTransitionHooks", () => (parcelRequire("j2KKi")).setTransitionHooks);
$parcel$export(module.exports, "Static", () => (parcelRequire("j2KKi")).Static);
$parcel$export(module.exports, "toRaw", () => (parcelRequire("7BTmT")).toRaw);
$parcel$export(module.exports, "useTransitionState", () => (parcelRequire("j2KKi")).useTransitionState);
$parcel$export(module.exports, "warn", () => (parcelRequire("j2KKi")).warn);
$parcel$export(module.exports, "watch", () => (parcelRequire("j2KKi")).watch);
$parcel$export(module.exports, "watchPostEffect", () => (parcelRequire("j2KKi")).watchPostEffect);
$parcel$export(module.exports, "withCtx", () => (parcelRequire("j2KKi")).withCtx);
$parcel$export(module.exports, "toDisplayString", () => (parcelRequire("3JmrW")).toDisplayString);

$parcel$export(module.exports, "createApp", () => $dfcaae3ae899f2c9$export$4e373c34abfa8c68);

var $j2KKi = parcelRequire("j2KKi");
var $3JmrW = parcelRequire("3JmrW");
var $7BTmT = parcelRequire("7BTmT");parcelRequire("3JmrW");

var $3JmrW = parcelRequire("3JmrW");
const $dfcaae3ae899f2c9$var$svgNS = "http://www.w3.org/2000/svg";
const $dfcaae3ae899f2c9$var$mathmlNS = "http://www.w3.org/1998/Math/MathML";
const $dfcaae3ae899f2c9$var$doc = typeof document !== "undefined" ? document : null;
const $dfcaae3ae899f2c9$var$templateContainer = $dfcaae3ae899f2c9$var$doc && /* @__PURE__ */ $dfcaae3ae899f2c9$var$doc.createElement("template");
const $dfcaae3ae899f2c9$var$nodeOps = {
    insert: (child, parent, anchor)=>{
        parent.insertBefore(child, anchor || null);
    },
    remove: (child)=>{
        const parent = child.parentNode;
        if (parent) parent.removeChild(child);
    },
    createElement: (tag, namespace, is, props)=>{
        const el = namespace === "svg" ? $dfcaae3ae899f2c9$var$doc.createElementNS($dfcaae3ae899f2c9$var$svgNS, tag) : namespace === "mathml" ? $dfcaae3ae899f2c9$var$doc.createElementNS($dfcaae3ae899f2c9$var$mathmlNS, tag) : $dfcaae3ae899f2c9$var$doc.createElement(tag, is ? {
            is: is
        } : void 0);
        if (tag === "select" && props && props.multiple != null) el.setAttribute("multiple", props.multiple);
        return el;
    },
    createText: (text)=>$dfcaae3ae899f2c9$var$doc.createTextNode(text),
    createComment: (text)=>$dfcaae3ae899f2c9$var$doc.createComment(text),
    setText: (node, text)=>{
        node.nodeValue = text;
    },
    setElementText: (el, text)=>{
        el.textContent = text;
    },
    parentNode: (node)=>node.parentNode,
    nextSibling: (node)=>node.nextSibling,
    querySelector: (selector)=>$dfcaae3ae899f2c9$var$doc.querySelector(selector),
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
            $dfcaae3ae899f2c9$var$templateContainer.innerHTML = namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content;
            const template = $dfcaae3ae899f2c9$var$templateContainer.content;
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
const $dfcaae3ae899f2c9$var$TRANSITION = "transition";
const $dfcaae3ae899f2c9$var$ANIMATION = "animation";
const $dfcaae3ae899f2c9$var$vtcKey = Symbol("_vtc");
const $dfcaae3ae899f2c9$export$be58926105124dd4 = (props, { slots: slots })=>(0, $j2KKi.h)((0, $j2KKi.BaseTransition), $dfcaae3ae899f2c9$var$resolveTransitionProps(props), slots);
$dfcaae3ae899f2c9$export$be58926105124dd4.displayName = "Transition";
const $dfcaae3ae899f2c9$var$DOMTransitionPropsValidators = {
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
const $dfcaae3ae899f2c9$var$TransitionPropsValidators = $dfcaae3ae899f2c9$export$be58926105124dd4.props = /* @__PURE__ */ (0, $3JmrW.extend)({}, (0, $j2KKi.BaseTransitionPropsValidators), $dfcaae3ae899f2c9$var$DOMTransitionPropsValidators);
const $dfcaae3ae899f2c9$var$callHook = (hook, args = [])=>{
    if ((0, $3JmrW.isArray)(hook)) hook.forEach((h2)=>h2(...args));
    else if (hook) hook(...args);
};
const $dfcaae3ae899f2c9$var$hasExplicitCallback = (hook)=>{
    return hook ? (0, $3JmrW.isArray)(hook) ? hook.some((h2)=>h2.length > 1) : hook.length > 1 : false;
};
function $dfcaae3ae899f2c9$var$resolveTransitionProps(rawProps) {
    const baseProps = {};
    for(const key in rawProps)if (!(key in $dfcaae3ae899f2c9$var$DOMTransitionPropsValidators)) baseProps[key] = rawProps[key];
    if (rawProps.css === false) return baseProps;
    const { name: name = "v", type: type, duration: duration, enterFromClass: enterFromClass = `${name}-enter-from`, enterActiveClass: enterActiveClass = `${name}-enter-active`, enterToClass: enterToClass = `${name}-enter-to`, appearFromClass: appearFromClass = enterFromClass, appearActiveClass: appearActiveClass = enterActiveClass, appearToClass: appearToClass = enterToClass, leaveFromClass: leaveFromClass = `${name}-leave-from`, leaveActiveClass: leaveActiveClass = `${name}-leave-active`, leaveToClass: leaveToClass = `${name}-leave-to` } = rawProps;
    const durations = $dfcaae3ae899f2c9$var$normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter: onBeforeEnter, onEnter: onEnter, onEnterCancelled: onEnterCancelled, onLeave: onLeave, onLeaveCancelled: onLeaveCancelled, onBeforeAppear: onBeforeAppear = onBeforeEnter, onAppear: onAppear = onEnter, onAppearCancelled: onAppearCancelled = onEnterCancelled } = baseProps;
    const finishEnter = (el, isAppear, done)=>{
        $dfcaae3ae899f2c9$var$removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        $dfcaae3ae899f2c9$var$removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
        done && done();
    };
    const finishLeave = (el, done)=>{
        el._isLeaving = false;
        $dfcaae3ae899f2c9$var$removeTransitionClass(el, leaveFromClass);
        $dfcaae3ae899f2c9$var$removeTransitionClass(el, leaveToClass);
        $dfcaae3ae899f2c9$var$removeTransitionClass(el, leaveActiveClass);
        done && done();
    };
    const makeEnterHook = (isAppear)=>{
        return (el, done)=>{
            const hook = isAppear ? onAppear : onEnter;
            const resolve = ()=>finishEnter(el, isAppear, done);
            $dfcaae3ae899f2c9$var$callHook(hook, [
                el,
                resolve
            ]);
            $dfcaae3ae899f2c9$var$nextFrame(()=>{
                $dfcaae3ae899f2c9$var$removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                $dfcaae3ae899f2c9$var$addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                if (!$dfcaae3ae899f2c9$var$hasExplicitCallback(hook)) $dfcaae3ae899f2c9$var$whenTransitionEnds(el, type, enterDuration, resolve);
            });
        };
    };
    return (0, $3JmrW.extend)(baseProps, {
        onBeforeEnter (el) {
            $dfcaae3ae899f2c9$var$callHook(onBeforeEnter, [
                el
            ]);
            $dfcaae3ae899f2c9$var$addTransitionClass(el, enterFromClass);
            $dfcaae3ae899f2c9$var$addTransitionClass(el, enterActiveClass);
        },
        onBeforeAppear (el) {
            $dfcaae3ae899f2c9$var$callHook(onBeforeAppear, [
                el
            ]);
            $dfcaae3ae899f2c9$var$addTransitionClass(el, appearFromClass);
            $dfcaae3ae899f2c9$var$addTransitionClass(el, appearActiveClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave (el, done) {
            el._isLeaving = true;
            const resolve = ()=>finishLeave(el, done);
            $dfcaae3ae899f2c9$var$addTransitionClass(el, leaveFromClass);
            $dfcaae3ae899f2c9$var$forceReflow();
            $dfcaae3ae899f2c9$var$addTransitionClass(el, leaveActiveClass);
            $dfcaae3ae899f2c9$var$nextFrame(()=>{
                if (!el._isLeaving) return;
                $dfcaae3ae899f2c9$var$removeTransitionClass(el, leaveFromClass);
                $dfcaae3ae899f2c9$var$addTransitionClass(el, leaveToClass);
                if (!$dfcaae3ae899f2c9$var$hasExplicitCallback(onLeave)) $dfcaae3ae899f2c9$var$whenTransitionEnds(el, type, leaveDuration, resolve);
            });
            $dfcaae3ae899f2c9$var$callHook(onLeave, [
                el,
                resolve
            ]);
        },
        onEnterCancelled (el) {
            finishEnter(el, false);
            $dfcaae3ae899f2c9$var$callHook(onEnterCancelled, [
                el
            ]);
        },
        onAppearCancelled (el) {
            finishEnter(el, true);
            $dfcaae3ae899f2c9$var$callHook(onAppearCancelled, [
                el
            ]);
        },
        onLeaveCancelled (el) {
            finishLeave(el);
            $dfcaae3ae899f2c9$var$callHook(onLeaveCancelled, [
                el
            ]);
        }
    });
}
function $dfcaae3ae899f2c9$var$normalizeDuration(duration) {
    if (duration == null) return null;
    else if ((0, $3JmrW.isObject)(duration)) return [
        $dfcaae3ae899f2c9$var$NumberOf(duration.enter),
        $dfcaae3ae899f2c9$var$NumberOf(duration.leave)
    ];
    else {
        const n = $dfcaae3ae899f2c9$var$NumberOf(duration);
        return [
            n,
            n
        ];
    }
}
function $dfcaae3ae899f2c9$var$NumberOf(val) {
    const res = (0, $3JmrW.toNumber)(val);
    return res;
}
function $dfcaae3ae899f2c9$var$addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c)=>c && el.classList.add(c));
    (el[$dfcaae3ae899f2c9$var$vtcKey] || (el[$dfcaae3ae899f2c9$var$vtcKey] = /* @__PURE__ */ new Set())).add(cls);
}
function $dfcaae3ae899f2c9$var$removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c)=>c && el.classList.remove(c));
    const _vtc = el[$dfcaae3ae899f2c9$var$vtcKey];
    if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) el[$dfcaae3ae899f2c9$var$vtcKey] = void 0;
    }
}
function $dfcaae3ae899f2c9$var$nextFrame(cb) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(cb);
    });
}
let $dfcaae3ae899f2c9$var$endId = 0;
function $dfcaae3ae899f2c9$var$whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = el._endId = ++$dfcaae3ae899f2c9$var$endId;
    const resolveIfNotStale = ()=>{
        if (id === el._endId) resolve();
    };
    if (explicitTimeout) return setTimeout(resolveIfNotStale, explicitTimeout);
    const { type: type, timeout: timeout, propCount: propCount } = $dfcaae3ae899f2c9$var$getTransitionInfo(el, expectedType);
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
function $dfcaae3ae899f2c9$var$getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    const getStyleProperties = (key)=>(styles[key] || "").split(", ");
    const transitionDelays = getStyleProperties(`${$dfcaae3ae899f2c9$var$TRANSITION}Delay`);
    const transitionDurations = getStyleProperties(`${$dfcaae3ae899f2c9$var$TRANSITION}Duration`);
    const transitionTimeout = $dfcaae3ae899f2c9$var$getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(`${$dfcaae3ae899f2c9$var$ANIMATION}Delay`);
    const animationDurations = getStyleProperties(`${$dfcaae3ae899f2c9$var$ANIMATION}Duration`);
    const animationTimeout = $dfcaae3ae899f2c9$var$getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    if (expectedType === $dfcaae3ae899f2c9$var$TRANSITION) {
        if (transitionTimeout > 0) {
            type = $dfcaae3ae899f2c9$var$TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    } else if (expectedType === $dfcaae3ae899f2c9$var$ANIMATION) {
        if (animationTimeout > 0) {
            type = $dfcaae3ae899f2c9$var$ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0 ? transitionTimeout > animationTimeout ? $dfcaae3ae899f2c9$var$TRANSITION : $dfcaae3ae899f2c9$var$ANIMATION : null;
        propCount = type ? type === $dfcaae3ae899f2c9$var$TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    const hasTransform = type === $dfcaae3ae899f2c9$var$TRANSITION && /\b(transform|all)(,|$)/.test(getStyleProperties(`${$dfcaae3ae899f2c9$var$TRANSITION}Property`).toString());
    return {
        type: type,
        timeout: timeout,
        propCount: propCount,
        hasTransform: hasTransform
    };
}
function $dfcaae3ae899f2c9$var$getTimeout(delays, durations) {
    while(delays.length < durations.length)delays = delays.concat(delays);
    return Math.max(...durations.map((d, i)=>$dfcaae3ae899f2c9$var$toMs(d) + $dfcaae3ae899f2c9$var$toMs(delays[i])));
}
function $dfcaae3ae899f2c9$var$toMs(s) {
    if (s === "auto") return 0;
    return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function $dfcaae3ae899f2c9$var$forceReflow() {
    return document.body.offsetHeight;
}
function $dfcaae3ae899f2c9$var$patchClass(el, value, isSVG) {
    const transitionClasses = el[$dfcaae3ae899f2c9$var$vtcKey];
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
const $dfcaae3ae899f2c9$var$vShowOldKey = Symbol("_vod");
const $dfcaae3ae899f2c9$export$5cb4fcdc6937d7e1 = {
    beforeMount (el, { value: value }, { transition: transition }) {
        el[$dfcaae3ae899f2c9$var$vShowOldKey] = el.style.display === "none" ? "" : el.style.display;
        if (transition && value) transition.beforeEnter(el);
        else $dfcaae3ae899f2c9$var$setDisplay(el, value);
    },
    mounted (el, { value: value }, { transition: transition }) {
        if (transition && value) transition.enter(el);
    },
    updated (el, { value: value, oldValue: oldValue }, { transition: transition }) {
        if (!value === !oldValue) return;
        if (transition) {
            if (value) {
                transition.beforeEnter(el);
                $dfcaae3ae899f2c9$var$setDisplay(el, true);
                transition.enter(el);
            } else transition.leave(el, ()=>{
                $dfcaae3ae899f2c9$var$setDisplay(el, false);
            });
        } else $dfcaae3ae899f2c9$var$setDisplay(el, value);
    },
    beforeUnmount (el, { value: value }) {
        $dfcaae3ae899f2c9$var$setDisplay(el, value);
    }
};
function $dfcaae3ae899f2c9$var$setDisplay(el, value) {
    el.style.display = value ? el[$dfcaae3ae899f2c9$var$vShowOldKey] : "none";
}
function $dfcaae3ae899f2c9$var$initVShowForSSR() {
    $dfcaae3ae899f2c9$export$5cb4fcdc6937d7e1.getSSRProps = ({ value: value })=>{
        if (!value) return {
            style: {
                display: "none"
            }
        };
    };
}
const $dfcaae3ae899f2c9$var$CSS_VAR_TEXT = Symbol("");
function $dfcaae3ae899f2c9$export$ef28b76f07940108(getter) {
    const instance = (0, $j2KKi.getCurrentInstance)();
    if (!instance) return;
    const updateTeleports = instance.ut = (vars = getter(instance.proxy))=>{
        Array.from(document.querySelectorAll(`[data-v-owner="${instance.uid}"]`)).forEach((node)=>$dfcaae3ae899f2c9$var$setVarsOnNode(node, vars));
    };
    const setVars = ()=>{
        const vars = getter(instance.proxy);
        $dfcaae3ae899f2c9$var$setVarsOnVNode(instance.subTree, vars);
        updateTeleports(vars);
    };
    (0, $j2KKi.watchPostEffect)(setVars);
    (0, $j2KKi.onMounted)(()=>{
        const ob = new MutationObserver(setVars);
        ob.observe(instance.subTree.el.parentNode, {
            childList: true
        });
        (0, $j2KKi.onUnmounted)(()=>ob.disconnect());
    });
}
function $dfcaae3ae899f2c9$var$setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) suspense.effects.push(()=>{
            $dfcaae3ae899f2c9$var$setVarsOnVNode(suspense.activeBranch, vars);
        });
    }
    while(vnode.component)vnode = vnode.component.subTree;
    if (vnode.shapeFlag & 1 && vnode.el) $dfcaae3ae899f2c9$var$setVarsOnNode(vnode.el, vars);
    else if (vnode.type === (0, $j2KKi.Fragment)) vnode.children.forEach((c)=>$dfcaae3ae899f2c9$var$setVarsOnVNode(c, vars));
    else if (vnode.type === (0, $j2KKi.Static)) {
        let { el: el, anchor: anchor } = vnode;
        while(el){
            $dfcaae3ae899f2c9$var$setVarsOnNode(el, vars);
            if (el === anchor) break;
            el = el.nextSibling;
        }
    }
}
function $dfcaae3ae899f2c9$var$setVarsOnNode(el, vars) {
    if (el.nodeType === 1) {
        const style = el.style;
        let cssText = "";
        for(const key in vars){
            style.setProperty(`--${key}`, vars[key]);
            cssText += `--${key}: ${vars[key]};`;
        }
        style[$dfcaae3ae899f2c9$var$CSS_VAR_TEXT] = cssText;
    }
}
function $dfcaae3ae899f2c9$var$patchStyle(el, prev, next) {
    const style = el.style;
    const isCssString = (0, $3JmrW.isString)(next);
    if (next && !isCssString) {
        if (prev && !(0, $3JmrW.isString)(prev)) {
            for(const key in prev)if (next[key] == null) $dfcaae3ae899f2c9$var$setStyle(style, key, "");
        }
        for(const key in next)$dfcaae3ae899f2c9$var$setStyle(style, key, next[key]);
    } else {
        const currentDisplay = style.display;
        if (isCssString) {
            if (prev !== next) {
                const cssVarText = style[$dfcaae3ae899f2c9$var$CSS_VAR_TEXT];
                if (cssVarText) next += ";" + cssVarText;
                style.cssText = next;
            }
        } else if (prev) el.removeAttribute("style");
        if ($dfcaae3ae899f2c9$var$vShowOldKey in el) style.display = currentDisplay;
    }
}
const $dfcaae3ae899f2c9$var$semicolonRE = /[^\\];\s*$/;
const $dfcaae3ae899f2c9$var$importantRE = /\s*!important$/;
function $dfcaae3ae899f2c9$var$setStyle(style, name, val) {
    if ((0, $3JmrW.isArray)(val)) val.forEach((v)=>$dfcaae3ae899f2c9$var$setStyle(style, name, v));
    else {
        if (val == null) val = "";
        if (name.startsWith("--")) style.setProperty(name, val);
        else {
            const prefixed = $dfcaae3ae899f2c9$var$autoPrefix(style, name);
            if ($dfcaae3ae899f2c9$var$importantRE.test(val)) style.setProperty((0, $3JmrW.hyphenate)(prefixed), val.replace($dfcaae3ae899f2c9$var$importantRE, ""), "important");
            else style[prefixed] = val;
        }
    }
}
const $dfcaae3ae899f2c9$var$prefixes = [
    "Webkit",
    "Moz",
    "ms"
];
const $dfcaae3ae899f2c9$var$prefixCache = {};
function $dfcaae3ae899f2c9$var$autoPrefix(style, rawName) {
    const cached = $dfcaae3ae899f2c9$var$prefixCache[rawName];
    if (cached) return cached;
    let name = (0, $3JmrW.camelize)(rawName);
    if (name !== "filter" && name in style) return $dfcaae3ae899f2c9$var$prefixCache[rawName] = name;
    name = (0, $3JmrW.capitalize)(name);
    for(let i = 0; i < $dfcaae3ae899f2c9$var$prefixes.length; i++){
        const prefixed = $dfcaae3ae899f2c9$var$prefixes[i] + name;
        if (prefixed in style) return $dfcaae3ae899f2c9$var$prefixCache[rawName] = prefixed;
    }
    return rawName;
}
const $dfcaae3ae899f2c9$var$xlinkNS = "http://www.w3.org/1999/xlink";
function $dfcaae3ae899f2c9$var$patchAttr(el, key, value, isSVG, instance) {
    if (isSVG && key.startsWith("xlink:")) {
        if (value == null) el.removeAttributeNS($dfcaae3ae899f2c9$var$xlinkNS, key.slice(6, key.length));
        else el.setAttributeNS($dfcaae3ae899f2c9$var$xlinkNS, key, value);
    } else {
        const isBoolean = (0, $3JmrW.isSpecialBooleanAttr)(key);
        if (value == null || isBoolean && !(0, $3JmrW.includeBooleanAttr)(value)) el.removeAttribute(key);
        else el.setAttribute(key, isBoolean ? "" : value);
    }
}
function $dfcaae3ae899f2c9$var$patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
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
        if (type === "boolean") value = (0, $3JmrW.includeBooleanAttr)(value);
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
    } catch (e) {}
    needRemove && el.removeAttribute(key);
}
function $dfcaae3ae899f2c9$var$addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function $dfcaae3ae899f2c9$var$removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
const $dfcaae3ae899f2c9$var$veiKey = Symbol("_vei");
function $dfcaae3ae899f2c9$var$patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    const invokers = el[$dfcaae3ae899f2c9$var$veiKey] || (el[$dfcaae3ae899f2c9$var$veiKey] = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) existingInvoker.value = nextValue;
    else {
        const [name, options] = $dfcaae3ae899f2c9$var$parseName(rawName);
        if (nextValue) {
            const invoker = invokers[rawName] = $dfcaae3ae899f2c9$var$createInvoker(nextValue, instance);
            $dfcaae3ae899f2c9$var$addEventListener(el, name, invoker, options);
        } else if (existingInvoker) {
            $dfcaae3ae899f2c9$var$removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = void 0;
        }
    }
}
const $dfcaae3ae899f2c9$var$optionsModifierRE = /(?:Once|Passive|Capture)$/;
function $dfcaae3ae899f2c9$var$parseName(name) {
    let options;
    if ($dfcaae3ae899f2c9$var$optionsModifierRE.test(name)) {
        options = {};
        let m;
        while(m = name.match($dfcaae3ae899f2c9$var$optionsModifierRE)){
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
        }
    }
    const event = name[2] === ":" ? name.slice(3) : (0, $3JmrW.hyphenate)(name.slice(2));
    return [
        event,
        options
    ];
}
let $dfcaae3ae899f2c9$var$cachedNow = 0;
const $dfcaae3ae899f2c9$var$p = /* @__PURE__ */ Promise.resolve();
const $dfcaae3ae899f2c9$var$getNow = ()=>$dfcaae3ae899f2c9$var$cachedNow || ($dfcaae3ae899f2c9$var$p.then(()=>$dfcaae3ae899f2c9$var$cachedNow = 0), $dfcaae3ae899f2c9$var$cachedNow = Date.now());
function $dfcaae3ae899f2c9$var$createInvoker(initialValue, instance) {
    const invoker = (e)=>{
        if (!e._vts) e._vts = Date.now();
        else if (e._vts <= invoker.attached) return;
        (0, $j2KKi.callWithAsyncErrorHandling)($dfcaae3ae899f2c9$var$patchStopImmediatePropagation(e, invoker.value), instance, 5, [
            e
        ]);
    };
    invoker.value = initialValue;
    invoker.attached = $dfcaae3ae899f2c9$var$getNow();
    return invoker;
}
function $dfcaae3ae899f2c9$var$patchStopImmediatePropagation(e, value) {
    if ((0, $3JmrW.isArray)(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = ()=>{
            originalStop.call(e);
            e._stopped = true;
        };
        return value.map((fn)=>(e2)=>!e2._stopped && fn && fn(e2));
    } else return value;
}
const $dfcaae3ae899f2c9$var$isNativeOn = (key)=>key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
    key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
const $dfcaae3ae899f2c9$var$patchProp = (el, key, prevValue, nextValue, namespace, prevChildren, parentComponent, parentSuspense, unmountChildren)=>{
    const isSVG = namespace === "svg";
    if (key === "class") $dfcaae3ae899f2c9$var$patchClass(el, nextValue, isSVG);
    else if (key === "style") $dfcaae3ae899f2c9$var$patchStyle(el, prevValue, nextValue);
    else if ((0, $3JmrW.isOn)(key)) {
        if (!(0, $3JmrW.isModelListener)(key)) $dfcaae3ae899f2c9$var$patchEvent(el, key, prevValue, nextValue, parentComponent);
    } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : $dfcaae3ae899f2c9$var$shouldSetAsProp(el, key, nextValue, isSVG)) $dfcaae3ae899f2c9$var$patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
    else {
        if (key === "true-value") el._trueValue = nextValue;
        else if (key === "false-value") el._falseValue = nextValue;
        $dfcaae3ae899f2c9$var$patchAttr(el, key, nextValue, isSVG);
    }
};
function $dfcaae3ae899f2c9$var$shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
        if (key === "innerHTML" || key === "textContent") return true;
        if (key in el && $dfcaae3ae899f2c9$var$isNativeOn(key) && (0, $3JmrW.isFunction)(value)) return true;
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
    if ($dfcaae3ae899f2c9$var$isNativeOn(key) && (0, $3JmrW.isString)(value)) return false;
    return key in el;
}
/*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
function $dfcaae3ae899f2c9$export$a00e2346eabbdbef(options, hydrate2) {
    const Comp = (0, $j2KKi.defineComponent)(options);
    class VueCustomElement extends $dfcaae3ae899f2c9$export$b337c1a55163dbe3 {
        constructor(initialProps){
            super(Comp, initialProps, hydrate2);
        }
    }
    VueCustomElement.def = Comp;
    return VueCustomElement;
}
/*! #__NO_SIDE_EFFECTS__ */ const $dfcaae3ae899f2c9$export$6debb2e68f212638 = /* @__NO_SIDE_EFFECTS__ */ (options)=>{
    return /* @__PURE__ */ $dfcaae3ae899f2c9$export$a00e2346eabbdbef(options, $dfcaae3ae899f2c9$export$fa8d919ba61d84db);
};
const $dfcaae3ae899f2c9$var$BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
};
class $dfcaae3ae899f2c9$export$b337c1a55163dbe3 extends $dfcaae3ae899f2c9$var$BaseClass {
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
        (0, $j2KKi.nextTick)(()=>{
            if (!this._connected) {
                $dfcaae3ae899f2c9$export$b3890eb0ae9dca99(null, this.shadowRoot);
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
            if (props && !(0, $3JmrW.isArray)(props)) for(const key in props){
                const opt = props[key];
                if (opt === Number || opt && opt.type === Number) {
                    if (key in this._props) this._props[key] = (0, $3JmrW.toNumber)(this._props[key]);
                    (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[(0, $3JmrW.camelize)(key)] = true;
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
        const declaredPropKeys = (0, $3JmrW.isArray)(props) ? props : Object.keys(props || {});
        for (const key of Object.keys(this))if (key[0] !== "_" && declaredPropKeys.includes(key)) this._setProp(key, this[key], true, false);
        for (const key of declaredPropKeys.map((0, $3JmrW.camelize)))Object.defineProperty(this, key, {
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
        const camelKey = (0, $3JmrW.camelize)(key);
        if (this._numberProps && this._numberProps[camelKey]) value = (0, $3JmrW.toNumber)(value);
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
                if (val === true) this.setAttribute((0, $3JmrW.hyphenate)(key), "");
                else if (typeof val === "string" || typeof val === "number") this.setAttribute((0, $3JmrW.hyphenate)(key), val + "");
                else if (!val) this.removeAttribute((0, $3JmrW.hyphenate)(key));
            }
        }
    }
    _update() {
        $dfcaae3ae899f2c9$export$b3890eb0ae9dca99(this._createVNode(), this.shadowRoot);
    }
    _createVNode() {
        const vnode = (0, $j2KKi.createVNode)(this._def, (0, $3JmrW.extend)({}, this._props));
        if (!this._instance) vnode.ce = (instance)=>{
            this._instance = instance;
            instance.isCE = true;
            var newStyles, s;
            const dispatch = (event, args)=>{
                this.dispatchEvent(new CustomEvent(event, {
                    detail: args
                }));
            };
            instance.emit = (event, ...args)=>{
                dispatch(event, args);
                if ((0, $3JmrW.hyphenate)(event) !== event) dispatch((0, $3JmrW.hyphenate)(event), args);
            };
            let parent = this;
            while(parent = parent && (parent.parentNode || parent.host))if (parent instanceof $dfcaae3ae899f2c9$export$b337c1a55163dbe3) {
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
        });
    }
}
function $dfcaae3ae899f2c9$export$9300d5b90d56e3d1(name = "$style") {
    {
        const instance = (0, $j2KKi.getCurrentInstance)();
        if (!instance) return 0, $3JmrW.EMPTY_OBJ;
        const modules = instance.type.__cssModules;
        if (!modules) return 0, $3JmrW.EMPTY_OBJ;
        const mod = modules[name];
        if (!mod) return 0, $3JmrW.EMPTY_OBJ;
        return mod;
    }
}
const $dfcaae3ae899f2c9$var$positionMap = /* @__PURE__ */ new WeakMap();
const $dfcaae3ae899f2c9$var$newPositionMap = /* @__PURE__ */ new WeakMap();
const $dfcaae3ae899f2c9$var$moveCbKey = Symbol("_moveCb");
const $dfcaae3ae899f2c9$var$enterCbKey = Symbol("_enterCb");
const $dfcaae3ae899f2c9$var$TransitionGroupImpl = {
    name: "TransitionGroup",
    props: /* @__PURE__ */ (0, $3JmrW.extend)({}, $dfcaae3ae899f2c9$var$TransitionPropsValidators, {
        tag: String,
        moveClass: String
    }),
    setup (props, { slots: slots }) {
        const instance = (0, $j2KKi.getCurrentInstance)();
        const state = (0, $j2KKi.useTransitionState)();
        let prevChildren;
        let children;
        (0, $j2KKi.onUpdated)(()=>{
            if (!prevChildren.length) return;
            const moveClass = props.moveClass || `${props.name || "v"}-move`;
            if (!$dfcaae3ae899f2c9$var$hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) return;
            prevChildren.forEach($dfcaae3ae899f2c9$var$callPendingCbs);
            prevChildren.forEach($dfcaae3ae899f2c9$var$recordPosition);
            const movedChildren = prevChildren.filter($dfcaae3ae899f2c9$var$applyTranslation);
            $dfcaae3ae899f2c9$var$forceReflow();
            movedChildren.forEach((c)=>{
                const el = c.el;
                const style = el.style;
                $dfcaae3ae899f2c9$var$addTransitionClass(el, moveClass);
                style.transform = style.webkitTransform = style.transitionDuration = "";
                const cb = el[$dfcaae3ae899f2c9$var$moveCbKey] = (e)=>{
                    if (e && e.target !== el) return;
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener("transitionend", cb);
                        el[$dfcaae3ae899f2c9$var$moveCbKey] = null;
                        $dfcaae3ae899f2c9$var$removeTransitionClass(el, moveClass);
                    }
                };
                el.addEventListener("transitionend", cb);
            });
        });
        return ()=>{
            const rawProps = (0, $7BTmT.toRaw)(props);
            const cssTransitionProps = $dfcaae3ae899f2c9$var$resolveTransitionProps(rawProps);
            let tag = rawProps.tag || (0, $j2KKi.Fragment);
            prevChildren = children;
            children = slots.default ? (0, $j2KKi.getTransitionRawChildren)(slots.default()) : [];
            for(let i = 0; i < children.length; i++){
                const child = children[i];
                if (child.key != null) (0, $j2KKi.setTransitionHooks)(child, (0, $j2KKi.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
            }
            if (prevChildren) for(let i = 0; i < prevChildren.length; i++){
                const child = prevChildren[i];
                (0, $j2KKi.setTransitionHooks)(child, (0, $j2KKi.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
                $dfcaae3ae899f2c9$var$positionMap.set(child, child.el.getBoundingClientRect());
            }
            return (0, $j2KKi.createVNode)(tag, null, children);
        };
    }
};
const $dfcaae3ae899f2c9$var$removeMode = (props)=>delete props.mode;
/* @__PURE__ */ $dfcaae3ae899f2c9$var$removeMode($dfcaae3ae899f2c9$var$TransitionGroupImpl.props);
const $dfcaae3ae899f2c9$export$19ffa8f511f7bc2e = $dfcaae3ae899f2c9$var$TransitionGroupImpl;
function $dfcaae3ae899f2c9$var$callPendingCbs(c) {
    const el = c.el;
    if (el[$dfcaae3ae899f2c9$var$moveCbKey]) el[$dfcaae3ae899f2c9$var$moveCbKey]();
    if (el[$dfcaae3ae899f2c9$var$enterCbKey]) el[$dfcaae3ae899f2c9$var$enterCbKey]();
}
function $dfcaae3ae899f2c9$var$recordPosition(c) {
    $dfcaae3ae899f2c9$var$newPositionMap.set(c, c.el.getBoundingClientRect());
}
function $dfcaae3ae899f2c9$var$applyTranslation(c) {
    const oldPos = $dfcaae3ae899f2c9$var$positionMap.get(c);
    const newPos = $dfcaae3ae899f2c9$var$newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = "0s";
        return c;
    }
}
function $dfcaae3ae899f2c9$var$hasCSSTransform(el, root, moveClass) {
    const clone = el.cloneNode();
    const _vtc = el[$dfcaae3ae899f2c9$var$vtcKey];
    if (_vtc) _vtc.forEach((cls)=>{
        cls.split(/\s+/).forEach((c)=>c && clone.classList.remove(c));
    });
    moveClass.split(/\s+/).forEach((c)=>c && clone.classList.add(c));
    clone.style.display = "none";
    const container = root.nodeType === 1 ? root : root.parentNode;
    container.appendChild(clone);
    const { hasTransform: hasTransform } = $dfcaae3ae899f2c9$var$getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}
const $dfcaae3ae899f2c9$var$getModelAssigner = (vnode)=>{
    const fn = vnode.props["onUpdate:modelValue"] || false;
    return (0, $3JmrW.isArray)(fn) ? (value)=>(0, $3JmrW.invokeArrayFns)(fn, value) : fn;
};
function $dfcaae3ae899f2c9$var$onCompositionStart(e) {
    e.target.composing = true;
}
function $dfcaae3ae899f2c9$var$onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
        target.composing = false;
        target.dispatchEvent(new Event("input"));
    }
}
const $dfcaae3ae899f2c9$var$assignKey = Symbol("_assign");
const $dfcaae3ae899f2c9$export$f1f88689f5728478 = {
    created (el, { modifiers: { lazy: lazy, trim: trim, number: number } }, vnode) {
        el[$dfcaae3ae899f2c9$var$assignKey] = $dfcaae3ae899f2c9$var$getModelAssigner(vnode);
        const castToNumber = number || vnode.props && vnode.props.type === "number";
        $dfcaae3ae899f2c9$var$addEventListener(el, lazy ? "change" : "input", (e)=>{
            if (e.target.composing) return;
            let domValue = el.value;
            if (trim) domValue = domValue.trim();
            if (castToNumber) domValue = (0, $3JmrW.looseToNumber)(domValue);
            el[$dfcaae3ae899f2c9$var$assignKey](domValue);
        });
        if (trim) $dfcaae3ae899f2c9$var$addEventListener(el, "change", ()=>{
            el.value = el.value.trim();
        });
        if (!lazy) {
            $dfcaae3ae899f2c9$var$addEventListener(el, "compositionstart", $dfcaae3ae899f2c9$var$onCompositionStart);
            $dfcaae3ae899f2c9$var$addEventListener(el, "compositionend", $dfcaae3ae899f2c9$var$onCompositionEnd);
            $dfcaae3ae899f2c9$var$addEventListener(el, "change", $dfcaae3ae899f2c9$var$onCompositionEnd);
        }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted (el, { value: value }) {
        el.value = value == null ? "" : value;
    },
    beforeUpdate (el, { value: value, modifiers: { lazy: lazy, trim: trim, number: number } }, vnode) {
        el[$dfcaae3ae899f2c9$var$assignKey] = $dfcaae3ae899f2c9$var$getModelAssigner(vnode);
        if (el.composing) return;
        const elValue = number || el.type === "number" ? (0, $3JmrW.looseToNumber)(el.value) : el.value;
        const newValue = value == null ? "" : value;
        if (elValue === newValue) return;
        if (document.activeElement === el && el.type !== "range") {
            if (lazy) return;
            if (trim && el.value.trim() === newValue) return;
        }
        el.value = newValue;
    }
};
const $dfcaae3ae899f2c9$export$8847c2e532b35714 = {
    // #4096 array checkboxes need to be deep traversed
    deep: true,
    created (el, _, vnode) {
        el[$dfcaae3ae899f2c9$var$assignKey] = $dfcaae3ae899f2c9$var$getModelAssigner(vnode);
        $dfcaae3ae899f2c9$var$addEventListener(el, "change", ()=>{
            const modelValue = el._modelValue;
            const elementValue = $dfcaae3ae899f2c9$var$getValue(el);
            const checked = el.checked;
            const assign = el[$dfcaae3ae899f2c9$var$assignKey];
            if ((0, $3JmrW.isArray)(modelValue)) {
                const index = (0, $3JmrW.looseIndexOf)(modelValue, elementValue);
                const found = index !== -1;
                if (checked && !found) assign(modelValue.concat(elementValue));
                else if (!checked && found) {
                    const filtered = [
                        ...modelValue
                    ];
                    filtered.splice(index, 1);
                    assign(filtered);
                }
            } else if ((0, $3JmrW.isSet)(modelValue)) {
                const cloned = new Set(modelValue);
                if (checked) cloned.add(elementValue);
                else cloned.delete(elementValue);
                assign(cloned);
            } else assign($dfcaae3ae899f2c9$var$getCheckboxValue(el, checked));
        });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: $dfcaae3ae899f2c9$var$setChecked,
    beforeUpdate (el, binding, vnode) {
        el[$dfcaae3ae899f2c9$var$assignKey] = $dfcaae3ae899f2c9$var$getModelAssigner(vnode);
        $dfcaae3ae899f2c9$var$setChecked(el, binding, vnode);
    }
};
function $dfcaae3ae899f2c9$var$setChecked(el, { value: value, oldValue: oldValue }, vnode) {
    el._modelValue = value;
    if ((0, $3JmrW.isArray)(value)) el.checked = (0, $3JmrW.looseIndexOf)(value, vnode.props.value) > -1;
    else if ((0, $3JmrW.isSet)(value)) el.checked = value.has(vnode.props.value);
    else if (value !== oldValue) el.checked = (0, $3JmrW.looseEqual)(value, $dfcaae3ae899f2c9$var$getCheckboxValue(el, true));
}
const $dfcaae3ae899f2c9$export$b4356c59b38b7aa9 = {
    created (el, { value: value }, vnode) {
        el.checked = (0, $3JmrW.looseEqual)(value, vnode.props.value);
        el[$dfcaae3ae899f2c9$var$assignKey] = $dfcaae3ae899f2c9$var$getModelAssigner(vnode);
        $dfcaae3ae899f2c9$var$addEventListener(el, "change", ()=>{
            el[$dfcaae3ae899f2c9$var$assignKey]($dfcaae3ae899f2c9$var$getValue(el));
        });
    },
    beforeUpdate (el, { value: value, oldValue: oldValue }, vnode) {
        el[$dfcaae3ae899f2c9$var$assignKey] = $dfcaae3ae899f2c9$var$getModelAssigner(vnode);
        if (value !== oldValue) el.checked = (0, $3JmrW.looseEqual)(value, vnode.props.value);
    }
};
const $dfcaae3ae899f2c9$export$87d227567b51ca39 = {
    // <select multiple> value need to be deep traversed
    deep: true,
    created (el, { value: value, modifiers: { number: number } }, vnode) {
        const isSetModel = (0, $3JmrW.isSet)(value);
        $dfcaae3ae899f2c9$var$addEventListener(el, "change", ()=>{
            const selectedVal = Array.prototype.filter.call(el.options, (o)=>o.selected).map((o)=>number ? (0, $3JmrW.looseToNumber)($dfcaae3ae899f2c9$var$getValue(o)) : $dfcaae3ae899f2c9$var$getValue(o));
            el[$dfcaae3ae899f2c9$var$assignKey](el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
        });
        el[$dfcaae3ae899f2c9$var$assignKey] = $dfcaae3ae899f2c9$var$getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted (el, { value: value }) {
        $dfcaae3ae899f2c9$var$setSelected(el, value);
    },
    beforeUpdate (el, _binding, vnode) {
        el[$dfcaae3ae899f2c9$var$assignKey] = $dfcaae3ae899f2c9$var$getModelAssigner(vnode);
    },
    updated (el, { value: value }) {
        $dfcaae3ae899f2c9$var$setSelected(el, value);
    }
};
function $dfcaae3ae899f2c9$var$setSelected(el, value) {
    const isMultiple = el.multiple;
    if (isMultiple && !(0, $3JmrW.isArray)(value) && !(0, $3JmrW.isSet)(value)) return;
    for(let i = 0, l = el.options.length; i < l; i++){
        const option = el.options[i];
        const optionValue = $dfcaae3ae899f2c9$var$getValue(option);
        if (isMultiple) {
            if ((0, $3JmrW.isArray)(value)) option.selected = (0, $3JmrW.looseIndexOf)(value, optionValue) > -1;
            else option.selected = value.has(optionValue);
        } else if ((0, $3JmrW.looseEqual)($dfcaae3ae899f2c9$var$getValue(option), value)) {
            if (el.selectedIndex !== i) el.selectedIndex = i;
            return;
        }
    }
    if (!isMultiple && el.selectedIndex !== -1) el.selectedIndex = -1;
}
function $dfcaae3ae899f2c9$var$getValue(el) {
    return "_value" in el ? el._value : el.value;
}
function $dfcaae3ae899f2c9$var$getCheckboxValue(el, checked) {
    const key = checked ? "_trueValue" : "_falseValue";
    return key in el ? el[key] : checked;
}
const $dfcaae3ae899f2c9$export$5ad5c0e01ff62c5 = {
    created (el, binding, vnode) {
        $dfcaae3ae899f2c9$var$callModelHook(el, binding, vnode, null, "created");
    },
    mounted (el, binding, vnode) {
        $dfcaae3ae899f2c9$var$callModelHook(el, binding, vnode, null, "mounted");
    },
    beforeUpdate (el, binding, vnode, prevVNode) {
        $dfcaae3ae899f2c9$var$callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
    },
    updated (el, binding, vnode, prevVNode) {
        $dfcaae3ae899f2c9$var$callModelHook(el, binding, vnode, prevVNode, "updated");
    }
};
function $dfcaae3ae899f2c9$var$resolveDynamicModel(tagName, type) {
    switch(tagName){
        case "SELECT":
            return $dfcaae3ae899f2c9$export$87d227567b51ca39;
        case "TEXTAREA":
            return $dfcaae3ae899f2c9$export$f1f88689f5728478;
        default:
            switch(type){
                case "checkbox":
                    return $dfcaae3ae899f2c9$export$8847c2e532b35714;
                case "radio":
                    return $dfcaae3ae899f2c9$export$b4356c59b38b7aa9;
                default:
                    return $dfcaae3ae899f2c9$export$f1f88689f5728478;
            }
    }
}
function $dfcaae3ae899f2c9$var$callModelHook(el, binding, vnode, prevVNode, hook) {
    const modelToUse = $dfcaae3ae899f2c9$var$resolveDynamicModel(el.tagName, vnode.props && vnode.props.type);
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
}
function $dfcaae3ae899f2c9$var$initVModelForSSR() {
    $dfcaae3ae899f2c9$export$f1f88689f5728478.getSSRProps = ({ value: value })=>({
            value: value
        });
    $dfcaae3ae899f2c9$export$b4356c59b38b7aa9.getSSRProps = ({ value: value }, vnode)=>{
        if (vnode.props && (0, $3JmrW.looseEqual)(vnode.props.value, value)) return {
            checked: true
        };
    };
    $dfcaae3ae899f2c9$export$8847c2e532b35714.getSSRProps = ({ value: value }, vnode)=>{
        if ((0, $3JmrW.isArray)(value)) {
            if (vnode.props && (0, $3JmrW.looseIndexOf)(value, vnode.props.value) > -1) return {
                checked: true
            };
        } else if ((0, $3JmrW.isSet)(value)) {
            if (vnode.props && value.has(vnode.props.value)) return {
                checked: true
            };
        } else if (value) return {
            checked: true
        };
    };
    $dfcaae3ae899f2c9$export$5ad5c0e01ff62c5.getSSRProps = (binding, vnode)=>{
        if (typeof vnode.type !== "string") return;
        const modelToUse = $dfcaae3ae899f2c9$var$resolveDynamicModel(// resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
        vnode.type.toUpperCase(), vnode.props && vnode.props.type);
        if (modelToUse.getSSRProps) return modelToUse.getSSRProps(binding, vnode);
    };
}
const $dfcaae3ae899f2c9$var$systemModifiers = [
    "ctrl",
    "shift",
    "alt",
    "meta"
];
const $dfcaae3ae899f2c9$var$modifierGuards = {
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
    exact: (e, modifiers)=>$dfcaae3ae899f2c9$var$systemModifiers.some((m)=>e[`${m}Key`] && !modifiers.includes(m))
};
const $dfcaae3ae899f2c9$export$26bd3b8e29e6f273 = (fn, modifiers)=>{
    const cache = fn._withMods || (fn._withMods = {});
    const cacheKey = modifiers.join(".");
    return cache[cacheKey] || (cache[cacheKey] = (event, ...args)=>{
        for(let i = 0; i < modifiers.length; i++){
            const guard = $dfcaae3ae899f2c9$var$modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers)) return;
        }
        return fn(event, ...args);
    });
};
const $dfcaae3ae899f2c9$var$keyNames = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
};
const $dfcaae3ae899f2c9$export$f691a8759658f782 = (fn, modifiers)=>{
    const cache = fn._withKeys || (fn._withKeys = {});
    const cacheKey = modifiers.join(".");
    return cache[cacheKey] || (cache[cacheKey] = (event)=>{
        if (!("key" in event)) return;
        const eventKey = (0, $3JmrW.hyphenate)(event.key);
        if (modifiers.some((k)=>k === eventKey || $dfcaae3ae899f2c9$var$keyNames[k] === eventKey)) return fn(event);
    });
};
const $dfcaae3ae899f2c9$var$rendererOptions = /* @__PURE__ */ (0, $3JmrW.extend)({
    patchProp: $dfcaae3ae899f2c9$var$patchProp
}, $dfcaae3ae899f2c9$var$nodeOps);
let $dfcaae3ae899f2c9$var$renderer;
let $dfcaae3ae899f2c9$var$enabledHydration = false;
function $dfcaae3ae899f2c9$var$ensureRenderer() {
    return $dfcaae3ae899f2c9$var$renderer || ($dfcaae3ae899f2c9$var$renderer = (0, $j2KKi.createRenderer)($dfcaae3ae899f2c9$var$rendererOptions));
}
function $dfcaae3ae899f2c9$var$ensureHydrationRenderer() {
    $dfcaae3ae899f2c9$var$renderer = $dfcaae3ae899f2c9$var$enabledHydration ? $dfcaae3ae899f2c9$var$renderer : (0, $j2KKi.createHydrationRenderer)($dfcaae3ae899f2c9$var$rendererOptions);
    $dfcaae3ae899f2c9$var$enabledHydration = true;
    return $dfcaae3ae899f2c9$var$renderer;
}
const $dfcaae3ae899f2c9$export$b3890eb0ae9dca99 = (...args)=>{
    $dfcaae3ae899f2c9$var$ensureRenderer().render(...args);
};
const $dfcaae3ae899f2c9$export$fa8d919ba61d84db = (...args)=>{
    $dfcaae3ae899f2c9$var$ensureHydrationRenderer().hydrate(...args);
};
const $dfcaae3ae899f2c9$export$4e373c34abfa8c68 = (...args)=>{
    const app = $dfcaae3ae899f2c9$var$ensureRenderer().createApp(...args);
    const { mount: mount } = app;
    app.mount = (containerOrSelector)=>{
        const container = $dfcaae3ae899f2c9$var$normalizeContainer(containerOrSelector);
        if (!container) return;
        const component = app._component;
        if (!(0, $3JmrW.isFunction)(component) && !component.render && !component.template) component.template = container.innerHTML;
        container.innerHTML = "";
        const proxy = mount(container, false, $dfcaae3ae899f2c9$var$resolveRootNamespace(container));
        if (container instanceof Element) {
            container.removeAttribute("v-cloak");
            container.setAttribute("data-v-app", "");
        }
        return proxy;
    };
    return app;
};
const $dfcaae3ae899f2c9$export$35800275c0037383 = (...args)=>{
    const app = $dfcaae3ae899f2c9$var$ensureHydrationRenderer().createApp(...args);
    const { mount: mount } = app;
    app.mount = (containerOrSelector)=>{
        const container = $dfcaae3ae899f2c9$var$normalizeContainer(containerOrSelector);
        if (container) return mount(container, true, $dfcaae3ae899f2c9$var$resolveRootNamespace(container));
    };
    return app;
};
function $dfcaae3ae899f2c9$var$resolveRootNamespace(container) {
    if (container instanceof SVGElement) return "svg";
    if (typeof MathMLElement === "function" && container instanceof MathMLElement) return "mathml";
}
function $dfcaae3ae899f2c9$var$injectNativeTagCheck(app) {
    Object.defineProperty(app.config, "isNativeTag", {
        value: (tag)=>(0, $3JmrW.isHTMLTag)(tag) || (0, $3JmrW.isSVGTag)(tag) || (0, $3JmrW.isMathMLTag)(tag),
        writable: false
    });
}
function $dfcaae3ae899f2c9$var$injectCompilerOptionsCheck(app) {
    if ((0, $j2KKi.isRuntimeOnly)()) {
        const isCustomElement = app.config.isCustomElement;
        Object.defineProperty(app.config, "isCustomElement", {
            get () {
                return isCustomElement;
            },
            set () {
                (0, $j2KKi.warn)(`The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`);
            }
        });
        const compilerOptions = app.config.compilerOptions;
        const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
        Object.defineProperty(app.config, "compilerOptions", {
            get () {
                (0, $j2KKi.warn)(msg);
                return compilerOptions;
            },
            set () {
                (0, $j2KKi.warn)(msg);
            }
        });
    }
}
function $dfcaae3ae899f2c9$var$normalizeContainer(container) {
    if ((0, $3JmrW.isString)(container)) {
        const res = document.querySelector(container);
        return res;
    }
    return container;
}
let $dfcaae3ae899f2c9$var$ssrDirectiveInitialized = false;
const $dfcaae3ae899f2c9$export$800b28255aa678d9 = ()=>{
    if (!$dfcaae3ae899f2c9$var$ssrDirectiveInitialized) {
        $dfcaae3ae899f2c9$var$ssrDirectiveInitialized = true;
        $dfcaae3ae899f2c9$var$initVModelForSSR();
        $dfcaae3ae899f2c9$var$initVShowForSSR();
    }
};

});


parcelRegister("gE5OH", function(module, exports) {

$parcel$export(module.exports, "Splide", () => $c1e4e4dda02dcd92$export$24494c7438c070bf);
$parcel$export(module.exports, "SplideSlide", () => $c1e4e4dda02dcd92$export$bb7d0bac054249f6);
parcelRequire("Q5TbH");
var $j2KKi = parcelRequire("j2KKi");
var $7BTmT = parcelRequire("7BTmT");
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
const $c1e4e4dda02dcd92$var$_sfc_main$2 = (0, $j2KKi.defineComponent)({
    name: "SplideTrack",
    setup () {
        (0, $j2KKi.onUpdated)(()=>{
            var _a;
            const splide = (0, $j2KKi.inject)($c1e4e4dda02dcd92$var$SPLIDE_INJECTION_KEY);
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
    return (0, $j2KKi.openBlock)(), (0, $j2KKi.createElementBlock)("div", $c1e4e4dda02dcd92$var$_hoisted_1$1, [
        (0, $j2KKi.createElementVNode)("ul", $c1e4e4dda02dcd92$var$_hoisted_2, [
            (0, $j2KKi.renderSlot)(_ctx.$slots, "default")
        ])
    ]);
}
const $c1e4e4dda02dcd92$export$137594065e0e634d = /* @__PURE__ */ $c1e4e4dda02dcd92$var$_export_sfc($c1e4e4dda02dcd92$var$_sfc_main$2, [
    [
        "render",
        $c1e4e4dda02dcd92$var$_sfc_render$2
    ]
]);
const $c1e4e4dda02dcd92$var$_sfc_main$1 = (0, $j2KKi.defineComponent)({
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
        const splide = (0, $7BTmT.ref)();
        const root = (0, $7BTmT.ref)();
        (0, $j2KKi.onMounted)(()=>{
            if (root.value) {
                splide.value = new $c1e4e4dda02dcd92$var$Splide$1(root.value, props.options);
                bind(splide.value);
                splide.value.mount(props.extensions, props.transition);
            }
        });
        (0, $j2KKi.onBeforeUnmount)(()=>{
            var _a;
            (_a = splide.value) == null || _a.destroy();
        });
        (0, $j2KKi.watch)(()=>$c1e4e4dda02dcd92$var$merge({}, props.options), (options)=>{
            if (splide.value) splide.value.options = options;
        }, {
            deep: true
        });
        (0, $j2KKi.provide)($c1e4e4dda02dcd92$var$SPLIDE_INJECTION_KEY, splide);
        const index = (0, $j2KKi.computed)(()=>{
            var _a;
            return ((_a = splide.value) == null ? void 0 : _a.index) || 0;
        });
        const length = (0, $j2KKi.computed)(()=>{
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
    const _component_SplideTrack = (0, $j2KKi.resolveComponent)("SplideTrack");
    return (0, $j2KKi.openBlock)(), (0, $j2KKi.createBlock)((0, $j2KKi.resolveDynamicComponent)(_ctx.tag), {
        class: "splide",
        ref: "root"
    }, {
        default: (0, $j2KKi.withCtx)(()=>[
                _ctx.hasTrack ? ((0, $j2KKi.openBlock)(), (0, $j2KKi.createBlock)(_component_SplideTrack, {
                    key: 0
                }, {
                    default: (0, $j2KKi.withCtx)(()=>[
                            (0, $j2KKi.renderSlot)(_ctx.$slots, "default")
                        ]),
                    _: 3
                })) : (0, $j2KKi.renderSlot)(_ctx.$slots, "default", {
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
const $c1e4e4dda02dcd92$var$_sfc_main = (0, $j2KKi.defineComponent)({
    name: "SplideSlide"
});
const $c1e4e4dda02dcd92$var$_hoisted_1 = {
    class: "splide__slide"
};
function $c1e4e4dda02dcd92$var$_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, $j2KKi.openBlock)(), (0, $j2KKi.createElementBlock)("li", $c1e4e4dda02dcd92$var$_hoisted_1, [
        (0, $j2KKi.renderSlot)(_ctx.$slots, "default")
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
parcelRequire("Q5TbH");
var $j2KKi = parcelRequire("j2KKi");
var $3JmrW = parcelRequire("3JmrW");

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
const $8e57f1d0bdaf965b$var$_hoisted_4 = /*#__PURE__*/ (0, $j2KKi.createElementVNode)("img", {
    src: (0, (/*@__PURE__*/$parcel$interopDefault($b1Y2C))),
    class: "w-auto h-full max-h-7"
}, null, -1);
const $8e57f1d0bdaf965b$var$_hoisted_5 = {
    class: "pl-3 font-bold"
};
const $8e57f1d0bdaf965b$var$_hoisted_6 = /*#__PURE__*/ (0, $j2KKi.createElementVNode)("h2", null, [
    /*#__PURE__*/ (0, $j2KKi.createElementVNode)("img", {
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
const $8e57f1d0bdaf965b$var$_hoisted_18 = /*#__PURE__*/ (0, $j2KKi.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-6 h-6"
}, [
    /*#__PURE__*/ (0, $j2KKi.createElementVNode)("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
    })
], -1);
const $8e57f1d0bdaf965b$var$_hoisted_19 = /*#__PURE__*/ (0, $j2KKi.createElementVNode)("div", {
    class: "py-8 xl:pr-72 lg:pr-40 md:pr-24 text-center"
}, [
    /*#__PURE__*/ (0, $j2KKi.createElementVNode)("img", {
        src: (0, (/*@__PURE__*/$parcel$interopDefault($fpNOA))),
        class: "border border-white rounded-xl shadow-lg shadow-gray-600/30 mx-auto max-w-[90%] md:max-w-[100%]"
    })
], -1);
const $8e57f1d0bdaf965b$var$_hoisted_20 = {
    class: "p-10"
};
const $8e57f1d0bdaf965b$var$_hoisted_21 = /*#__PURE__*/ (0, $j2KKi.createElementVNode)("img", {
    src: (0, (/*@__PURE__*/$parcel$interopDefault($66v0v))),
    class: "border border-white rounded-xl shadow-lg shadow-gray-600/30 mx-auto max-w-[90%] md:max-w-[100%]"
}, null, -1);
const $8e57f1d0bdaf965b$var$_hoisted_22 = /*#__PURE__*/ (0, $j2KKi.createElementVNode)("img", {
    src: (0, (/*@__PURE__*/$parcel$interopDefault($66v0v))),
    class: "border border-white rounded-xl shadow-lg shadow-gray-600/30 mx-auto max-w-[90%] md:max-w-[100%]"
}, null, -1);
function $8e57f1d0bdaf965b$export$b3890eb0ae9dca99(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, $j2KKi.openBlock)(), (0, $j2KKi.createElementBlock)((0, $j2KKi.Fragment), null, [
        (0, $j2KKi.createElementVNode)("header", $8e57f1d0bdaf965b$var$_hoisted_1, [
            (0, $j2KKi.createElementVNode)("div", $8e57f1d0bdaf965b$var$_hoisted_2, [
                (0, $j2KKi.createElementVNode)("h1", $8e57f1d0bdaf965b$var$_hoisted_3, [
                    $8e57f1d0bdaf965b$var$_hoisted_4,
                    (0, $j2KKi.createElementVNode)("span", $8e57f1d0bdaf965b$var$_hoisted_5, (0, $3JmrW.toDisplayString)($setup._t("GenCloud")), 1)
                ]),
                $8e57f1d0bdaf965b$var$_hoisted_6
            ])
        ]),
        (0, $j2KKi.createElementVNode)("main", $8e57f1d0bdaf965b$var$_hoisted_7, [
            (0, $j2KKi.createElementVNode)("div", $8e57f1d0bdaf965b$var$_hoisted_8, [
                (0, $j2KKi.createElementVNode)("div", $8e57f1d0bdaf965b$var$_hoisted_9, [
                    (0, $j2KKi.createElementVNode)("div", $8e57f1d0bdaf965b$var$_hoisted_10, [
                        (0, $j2KKi.createElementVNode)("h3", $8e57f1d0bdaf965b$var$_hoisted_11, [
                            (0, $j2KKi.createElementVNode)("span", $8e57f1d0bdaf965b$var$_hoisted_12, (0, $3JmrW.toDisplayString)($setup._t("B2B")), 1),
                            (0, $j2KKi.createTextVNode)(" " + (0, $3JmrW.toDisplayString)($setup._t("\u043E\u0442 GenCloud")), 1)
                        ]),
                        (0, $j2KKi.createElementVNode)("p", $8e57f1d0bdaf965b$var$_hoisted_13, (0, $3JmrW.toDisplayString)($setup._t("\u041F\u0430\u0437\u0430\u0440\u0443\u0432\u0430\u0439\u0442\u0435 \u043E\u043D\u043B\u0430\u0439\u043D - \u0433\u043E\u0442\u0438\u043D\u043E \u0435!")), 1),
                        (0, $j2KKi.createElementVNode)("p", $8e57f1d0bdaf965b$var$_hoisted_14, (0, $3JmrW.toDisplayString)($setup._t("\u041F\u043E\u0434 \u0440\u044A\u043A\u0430 \u0435 \u0432 \u0434\u0436\u043E\u0431\u0430, \u0438 \u043D\u0430 \u0431\u044E\u0440\u043E\u0442\u043E, \u0438 \u0432 \u043A\u043E\u043B\u0430\u0442\u0430, \u0438...")), 1),
                        (0, $j2KKi.createElementVNode)("p", $8e57f1d0bdaf965b$var$_hoisted_15, (0, $3JmrW.toDisplayString)($setup._t("\u041C\u043D\u043E\u0433\u043E \u0435 \u043B\u0435\u0441\u043D\u043E, \u0431\u044A\u0440\u0437\u043E \u0438 \u0435\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E.")), 1),
                        (0, $j2KKi.createElementVNode)("div", $8e57f1d0bdaf965b$var$_hoisted_16, [
                            (0, $j2KKi.createElementVNode)("button", {
                                onClick: _cache[0] || (_cache[0] = ($event)=>$setup.scrollToElm($setup.inTheBegining)),
                                class: "inline-flex justify-between items-center bg-blue-700 hover:bg-blue-500 transition-colors text-white font-medium uppercase py-2 px-4 rounded-md"
                            }, [
                                (0, $j2KKi.createElementVNode)("span", $8e57f1d0bdaf965b$var$_hoisted_17, (0, $3JmrW.toDisplayString)($setup._t("\u0420\u0430\u0437\u0433\u043B\u0435\u0434\u0430\u0439")), 1),
                                $8e57f1d0bdaf965b$var$_hoisted_18
                            ])
                        ])
                    ])
                ]),
                $8e57f1d0bdaf965b$var$_hoisted_19
            ]),
            (0, $j2KKi.createElementVNode)("section", $8e57f1d0bdaf965b$var$_hoisted_20, [
                (0, $j2KKi.createVNode)($setup["Splide"], {
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
                    default: (0, $j2KKi.withCtx)(()=>[
                            (0, $j2KKi.createVNode)($setup["SplideSlide"], {
                                class: "rounded-xl bg-slate-300 flex items-center py-10"
                            }, {
                                default: (0, $j2KKi.withCtx)(()=>[
                                        $8e57f1d0bdaf965b$var$_hoisted_21
                                    ]),
                                _: 1
                            }),
                            (0, $j2KKi.createVNode)($setup["SplideSlide"], {
                                class: "rounded-xl bg-slate-500 flex items-center py-10"
                            }, {
                                default: (0, $j2KKi.withCtx)(()=>[
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

parcelRequire("Q5TbH");
var $jdeLb = parcelRequire("jdeLb");
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
globalThis.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
globalThis.__VUE_PROD_DEVTOOLS__ = false;
const $74a5b179c5969087$var$app = (0, $jdeLb.createApp)((0, $ee03056cc6a8bcfa$export$2e2bcd8739ae039));
$74a5b179c5969087$var$app.mount("#app");


