goog.module('elemental2.dom.HTMLCanvasElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @return {Object} */
 static m_getContext__$devirt__elemental2_dom_HTMLCanvasElement__java_lang_String__java_lang_Object(/** !HTMLCanvasElement */ $thisArg, /** ?string */ contextId, /** * */ args) {
  $Overlay.$clinit();
  return $thisArg.getContext(contextId, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(args)));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLCanvasElement;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, "HTMLCanvasElement");

exports = $Overlay;

//# sourceMappingURL=HTMLCanvasElement$$Overlay.js.map
