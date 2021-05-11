goog.module('elemental2.core.JsArray.EntriesJsIteratorIterableTypeParameterArrayUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @template T @return {?number} */
 static m_asDouble__$devirt__elemental2_core_JsArray_EntriesJsIteratorIterableTypeParameterArrayUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {?number}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), Double));
 }
 /** @template T @return {T} */
 static m_asT__$devirt__elemental2_core_JsArray_EntriesJsIteratorIterableTypeParameterArrayUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_cast__java_lang_Object($thisArg);
 }
 /** @template T @return {boolean} */
 static m_isDouble__$devirt__elemental2_core_JsArray_EntriesJsIteratorIterableTypeParameterArrayUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Double.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=JsArray$EntriesJsIteratorIterableTypeParameterArrayUnionType$$Overlay.js.map
