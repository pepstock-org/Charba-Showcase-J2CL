goog.module('elemental2.dom.SourceBuffer.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 
 static m_appendBuffer__$devirt__elemental2_dom_SourceBuffer__elemental2_core_ArrayBuffer(/** !SourceBuffer */ $thisArg, /** ArrayBuffer */ data) {
  $Overlay.$clinit();
  $thisArg.appendBuffer(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 
 static m_appendBuffer__$devirt__elemental2_dom_SourceBuffer__elemental2_core_ArrayBufferView(/** !SourceBuffer */ $thisArg, /** ArrayBufferView */ data) {
  $Overlay.$clinit();
  $thisArg.appendBuffer(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SourceBuffer;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, "SourceBuffer");

exports = $Overlay;

//# sourceMappingURL=SourceBuffer$$Overlay.js.map
