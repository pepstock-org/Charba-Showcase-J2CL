goog.module('jsinterop.base.JsArrayLike.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let InternalJsUtil = goog.forwardDeclare('jsinterop.base.InternalJsUtil$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @template T @return {number} */
 static m_getLength__$devirt__jsinterop_base_JsArrayLike(/** !IArrayLike<T> */ $thisArg) {
  $Overlay.$clinit();
  return InternalJsUtil.getLength($thisArg);
 }
 /** @template T */
 static m_setLength__$devirt__jsinterop_base_JsArrayLike__int(/** !IArrayLike<T> */ $thisArg, /** number */ length) {
  $Overlay.$clinit();
  InternalJsUtil.setLength($thisArg, length);
 }
 /** @template T @return {T} */
 static m_getAt__$devirt__jsinterop_base_JsArrayLike__int(/** !IArrayLike<T> */ $thisArg, /** number */ index) {
  $Overlay.$clinit();
  return /**@type {T}*/ (InternalJsUtil.getIndexed($thisArg, index));
 }
 /** @template T @return {*} @deprecated */
 static m_getAnyAt__$devirt__jsinterop_base_JsArrayLike__int(/** !IArrayLike<T> */ $thisArg, /** number */ index) {
  $Overlay.$clinit();
  return $Overlay.m_getAtAsAny__$devirt__jsinterop_base_JsArrayLike__int($thisArg, index);
 }
 /** @template T @return {*} */
 static m_getAtAsAny__$devirt__jsinterop_base_JsArrayLike__int(/** !IArrayLike<T> */ $thisArg, /** number */ index) {
  $Overlay.$clinit();
  return /**@type {*}*/ (InternalJsUtil.getIndexed($thisArg, index));
 }
 /** @template T */
 static m_setAt__$devirt__jsinterop_base_JsArrayLike__int__java_lang_Object(/** !IArrayLike<T> */ $thisArg, /** number */ index, /** T */ value) {
  $Overlay.$clinit();
  InternalJsUtil.setIndexed($thisArg, index, value);
 }
 /** @template T */
 static m_delete__$devirt__jsinterop_base_JsArrayLike__int(/** !IArrayLike<T> */ $thisArg, /** number */ index) {
  $Overlay.$clinit();
  InternalJsUtil.deleteIndexed($thisArg, index);
 }
 /** @template T @return {List<T>} */
 static m_asList__$devirt__jsinterop_base_JsArrayLike(/** !IArrayLike<T> */ $thisArg) {
  $Overlay.$clinit();
  let asArray = /**@type {Array<T>}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg));
  return /**@type {List<T>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(asArray));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  InternalJsUtil = goog.module.get('jsinterop.base.InternalJsUtil$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=JsArrayLike$$Overlay.js.map
