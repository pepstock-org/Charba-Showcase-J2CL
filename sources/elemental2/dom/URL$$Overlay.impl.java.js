goog.module('elemental2.dom.URL.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @return {?string} */
 static m_createObjectURL__elemental2_dom_Blob(/** Blob */ obj) {
  $Overlay.$clinit();
  return URL.createObjectURL(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(obj)));
 }
 /** @return {?string} */
 static m_createObjectURL__elemental2_dom_MediaSource(/** MediaSource */ obj) {
  $Overlay.$clinit();
  return URL.createObjectURL(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(obj)));
 }
 /** @return {?string} */
 static m_createObjectURL__elemental2_dom_MediaStream(/** MediaStream */ obj) {
  $Overlay.$clinit();
  return URL.createObjectURL(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(obj)));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof URL;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, "URL");

exports = $Overlay;

//# sourceMappingURL=URL$$Overlay.js.map
