goog.module('elemental2.promise.Promise.PromiseExecutorCallbackFn.ResolveCallbackFn.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @template T */
 static m_onInvoke__$devirt__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__elemental2_promise_IThenable(/** function(?):void */ $thisArg, /** IThenable<T> */ value) {
  $Overlay.$clinit();
  $thisArg(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 /** @template T */
 static m_onInvoke__$devirt__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__java_lang_Object(/** function(?):void */ $thisArg, /** T */ value) {
  $Overlay.$clinit();
  $thisArg(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=Promise$PromiseExecutorCallbackFn$ResolveCallbackFn$$Overlay.js.map
