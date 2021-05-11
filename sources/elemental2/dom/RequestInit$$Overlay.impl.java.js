goog.module('elemental2.dom.RequestInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class $Overlay {
 /** @return {RequestInit} */
 static m_create__() {
  $Overlay.$clinit();
  return /**@type {RequestInit}*/ (Js.m_uncheckedCast__java_lang_Object(JsPropertyMap_$Overlay.m_of__()));
 }
 
 static m_setBody__$devirt__elemental2_dom_RequestInit__elemental2_core_ArrayBuffer(/** !RequestInit */ $thisArg, /** ArrayBuffer */ body) {
  $Overlay.$clinit();
  $thisArg.body = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(body));
 }
 
 static m_setBody__$devirt__elemental2_dom_RequestInit__elemental2_core_ArrayBufferView(/** !RequestInit */ $thisArg, /** ArrayBufferView */ body) {
  $Overlay.$clinit();
  $thisArg.body = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(body));
 }
 
 static m_setBody__$devirt__elemental2_dom_RequestInit__elemental2_dom_Blob(/** !RequestInit */ $thisArg, /** Blob */ body) {
  $Overlay.$clinit();
  $thisArg.body = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(body));
 }
 
 static m_setBody__$devirt__elemental2_dom_RequestInit__elemental2_dom_FormData(/** !RequestInit */ $thisArg, /** FormData */ body) {
  $Overlay.$clinit();
  $thisArg.body = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(body));
 }
 
 static m_setBody__$devirt__elemental2_dom_RequestInit__elemental2_dom_ReadableStream(/** !RequestInit */ $thisArg, /** ReadableStream */ body) {
  $Overlay.$clinit();
  $thisArg.body = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(body));
 }
 
 static m_setBody__$devirt__elemental2_dom_RequestInit__java_lang_String(/** !RequestInit */ $thisArg, /** ?string */ body) {
  $Overlay.$clinit();
  $thisArg.body = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(body));
 }
 
 static m_setBody__$devirt__elemental2_dom_RequestInit__elemental2_dom_URLSearchParams(/** !RequestInit */ $thisArg, /** URLSearchParams */ body) {
  $Overlay.$clinit();
  $thisArg.body = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(body));
 }
 
 static m_setHeaders__$devirt__elemental2_dom_RequestInit__elemental2_dom_Headers(/** !RequestInit */ $thisArg, /** Headers */ headers) {
  $Overlay.$clinit();
  $thisArg.headers = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(headers));
 }
 
 static m_setHeaders__$devirt__elemental2_dom_RequestInit__elemental2_core_JsArray(/** !RequestInit */ $thisArg, /** Array<Array<?string>> */ headers) {
  $Overlay.$clinit();
  $thisArg.headers = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(headers));
 }
 
 static m_setHeaders__$devirt__elemental2_dom_RequestInit__jsinterop_base_JsPropertyMap(/** !RequestInit */ $thisArg, /** Object<string, ?string> */ headers) {
  $Overlay.$clinit();
  $thisArg.headers = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(headers));
 }
 
 static m_setHeaders__$devirt__elemental2_dom_RequestInit__arrayOf_arrayOf_java_lang_String(/** !RequestInit */ $thisArg, /** Array<Array<?string>> */ headers) {
  $Overlay.$clinit();
  $Overlay.m_setHeaders__$devirt__elemental2_dom_RequestInit__elemental2_core_JsArray($thisArg, /**@type {Array<Array<?string>>}*/ (Js.m_uncheckedCast__java_lang_Object(headers)));
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

//# sourceMappingURL=RequestInit$$Overlay.js.map
