goog.module('elemental2.dom.FormData.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 
 static m_append__$devirt__elemental2_dom_FormData__java_lang_String__elemental2_dom_Blob__java_lang_String(/** !FormData */ $thisArg, /** ?string */ name, /** Blob */ value, /** ?string */ filename) {
  $Overlay.$clinit();
  $thisArg.append(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)), filename);
 }
 
 static m_append__$devirt__elemental2_dom_FormData__java_lang_String__elemental2_dom_Blob(/** !FormData */ $thisArg, /** ?string */ name, /** Blob */ value) {
  $Overlay.$clinit();
  $thisArg.append(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_append__$devirt__elemental2_dom_FormData__java_lang_String__java_lang_String__java_lang_String(/** !FormData */ $thisArg, /** ?string */ name, /** ?string */ value, /** ?string */ filename) {
  $Overlay.$clinit();
  $thisArg.append(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)), filename);
 }
 
 static m_append__$devirt__elemental2_dom_FormData__java_lang_String__java_lang_String(/** !FormData */ $thisArg, /** ?string */ name, /** ?string */ value) {
  $Overlay.$clinit();
  $thisArg.append(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_set__$devirt__elemental2_dom_FormData__java_lang_String__elemental2_dom_Blob__java_lang_String(/** !FormData */ $thisArg, /** ?string */ name, /** Blob */ value, /** ?string */ filename) {
  $Overlay.$clinit();
  $thisArg.set(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)), filename);
 }
 
 static m_set__$devirt__elemental2_dom_FormData__java_lang_String__elemental2_dom_Blob(/** !FormData */ $thisArg, /** ?string */ name, /** Blob */ value) {
  $Overlay.$clinit();
  $thisArg.set(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_set__$devirt__elemental2_dom_FormData__java_lang_String__java_lang_String__java_lang_String(/** !FormData */ $thisArg, /** ?string */ name, /** ?string */ value, /** ?string */ filename) {
  $Overlay.$clinit();
  $thisArg.set(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)), filename);
 }
 
 static m_set__$devirt__elemental2_dom_FormData__java_lang_String__java_lang_String(/** !FormData */ $thisArg, /** ?string */ name, /** ?string */ value) {
  $Overlay.$clinit();
  $thisArg.set(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormData;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, "FormData");

exports = $Overlay;

//# sourceMappingURL=FormData$$Overlay.js.map
