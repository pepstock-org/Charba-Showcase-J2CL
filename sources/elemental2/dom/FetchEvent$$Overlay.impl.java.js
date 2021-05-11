goog.module('elemental2.dom.FetchEvent.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 
 static m_respondWith__$devirt__elemental2_dom_FetchEvent__elemental2_promise_IThenable(/** !FetchEvent */ $thisArg, /** IThenable<Response> */ r) {
  $Overlay.$clinit();
  $thisArg.respondWith(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(r)));
 }
 
 static m_respondWith__$devirt__elemental2_dom_FetchEvent__elemental2_dom_Response(/** !FetchEvent */ $thisArg, /** Response */ r) {
  $Overlay.$clinit();
  $thisArg.respondWith(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(r)));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FetchEvent;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, "FetchEvent");

exports = $Overlay;

//# sourceMappingURL=FetchEvent$$Overlay.js.map
