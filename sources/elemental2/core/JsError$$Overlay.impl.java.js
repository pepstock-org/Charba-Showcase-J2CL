goog.module('elemental2.core.JsError.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 
 static m_captureStackTrace__java_lang_Object__elemental2_core_Function(/** * */ error, /** Function */ constructor) {
  $Overlay.$clinit();
  Error.captureStackTrace(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(error)), constructor);
 }
 
 static m_captureStackTrace__java_lang_Object(/** * */ error) {
  $Overlay.$clinit();
  Error.captureStackTrace(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(error)));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Error;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, "Error");

exports = $Overlay;

//# sourceMappingURL=JsError$$Overlay.js.map
