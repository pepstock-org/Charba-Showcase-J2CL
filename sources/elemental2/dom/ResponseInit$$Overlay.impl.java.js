goog.module('elemental2.dom.ResponseInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class $Overlay {
 /** @return {ResponseInit} */
 static m_create__() {
  $Overlay.$clinit();
  return /**@type {ResponseInit}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_of__()));
 }
 
 static m_setHeaders__$devirt__elemental2_dom_ResponseInit__elemental2_dom_Headers(/** !ResponseInit */ $thisArg, /** Headers */ headers) {
  $Overlay.$clinit();
  $thisArg.headers = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(headers));
 }
 
 static m_setHeaders__$devirt__elemental2_dom_ResponseInit__elemental2_core_JsArray(/** !ResponseInit */ $thisArg, /** Array<Array<?string>> */ headers) {
  $Overlay.$clinit();
  $thisArg.headers = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(headers));
 }
 
 static m_setHeaders__$devirt__elemental2_dom_ResponseInit__jsinterop_base_JsPropertyMap(/** !ResponseInit */ $thisArg, /** Object<string, ?string> */ headers) {
  $Overlay.$clinit();
  $thisArg.headers = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(headers));
 }
 
 static m_setHeaders__$devirt__elemental2_dom_ResponseInit__arrayOf_arrayOf_java_lang_String(/** !ResponseInit */ $thisArg, /** Array<Array<?string>> */ headers) {
  $Overlay.$clinit();
  $Overlay.m_setHeaders__$devirt__elemental2_dom_ResponseInit__elemental2_core_JsArray($thisArg, /**@type {Array<Array<?string>>}*/ (Js.m_uncheckedCast__java_lang_Object(headers)));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=ResponseInit$$Overlay.js.map
