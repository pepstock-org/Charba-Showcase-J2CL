goog.module('elemental2.core.JsMap.ConstructorIterableUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @template KEY, VALUE @return {Array<Array<?>>} */
 static m_asJsArray__$devirt__elemental2_core_JsMap_ConstructorIterableUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Array<Array<?>>}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), JsArray_$Overlay));
 }
 /** @template KEY, VALUE @return {Iterable<Array<?>>} */
 static m_asJsIterable__$devirt__elemental2_core_JsMap_ConstructorIterableUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Iterable<Array<?>>}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @template KEY, VALUE @return {boolean} */
 static m_isJsArray__$devirt__elemental2_core_JsMap_ConstructorIterableUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return JsArray_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  JsArray_$Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=JsMap$ConstructorIterableUnionType$$Overlay.js.map
