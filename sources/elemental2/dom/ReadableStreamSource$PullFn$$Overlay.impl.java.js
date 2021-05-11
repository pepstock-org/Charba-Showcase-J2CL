goog.module('elemental2.dom.ReadableStreamSource.PullFn.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @template VALUE @return {IThenable<*>} */
 static m_onInvoke__$devirt__elemental2_dom_ReadableStreamSource_PullFn__elemental2_dom_ReadableByteStreamController(/** function(?):IThenable<*> */ $thisArg, /** ReadableByteStreamController */ p0) {
  $Overlay.$clinit();
  return $thisArg(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(p0)));
 }
 /** @template VALUE @return {IThenable<*>} */
 static m_onInvoke__$devirt__elemental2_dom_ReadableStreamSource_PullFn__elemental2_dom_ReadableStreamDefaultController(/** function(?):IThenable<*> */ $thisArg, /** ReadableStreamDefaultController<VALUE> */ p0) {
  $Overlay.$clinit();
  return $thisArg(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(p0)));
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

//# sourceMappingURL=ReadableStreamSource$PullFn$$Overlay.js.map
