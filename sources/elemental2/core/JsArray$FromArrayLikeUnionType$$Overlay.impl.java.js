goog.module('elemental2.core.JsArray.FromArrayLikeUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @template T @return {IArrayLike<T>} */
 static m_asJsArrayLike__$devirt__elemental2_core_JsArray_FromArrayLikeUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {IArrayLike<T>}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @template T @return {Iterable<T>} */
 static m_asJsIterable__$devirt__elemental2_core_JsArray_FromArrayLikeUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Iterable<T>}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @template T @return {?string} */
 static m_asString__$devirt__elemental2_core_JsArray_FromArrayLikeUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @template T @return {boolean} */
 static m_isString__$devirt__elemental2_core_JsArray_FromArrayLikeUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=JsArray$FromArrayLikeUnionType$$Overlay.js.map
