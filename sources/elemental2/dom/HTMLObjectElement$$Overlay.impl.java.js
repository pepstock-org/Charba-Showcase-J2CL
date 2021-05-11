goog.module('elemental2.dom.HTMLObjectElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 
 static m_TSetProperty__$devirt__elemental2_dom_HTMLObjectElement__double__double__java_lang_String(/** !HTMLObjectElement */ $thisArg, /** number */ target, /** number */ property, /** ?string */ value) {
  $Overlay.$clinit();
  $thisArg.TSetProperty(target, property, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_TSetProperty__$devirt__elemental2_dom_HTMLObjectElement__double__double__double(/** !HTMLObjectElement */ $thisArg, /** number */ target, /** number */ property, /** number */ value) {
  $Overlay.$clinit();
  $thisArg.TSetProperty(target, property, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLObjectElement;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, "HTMLObjectElement");

exports = $Overlay;

//# sourceMappingURL=HTMLObjectElement$$Overlay.js.map
