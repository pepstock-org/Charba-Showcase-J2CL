goog.module('elemental2.core.Reflect.OwnKeysArrayUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {*} */
 static m_asObject__$devirt__elemental2_core_Reflect_OwnKeysArrayUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_cast__java_lang_Object($thisArg);
 }
 /** @return {?string} */
 static m_asString__$devirt__elemental2_core_Reflect_OwnKeysArrayUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {boolean} */
 static m_isObject__$devirt__elemental2_core_Reflect_OwnKeysArrayUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return !$Equality.$same(/**@type {*}*/ ($thisArg), null);
 }
 /** @return {boolean} */
 static m_isString__$devirt__elemental2_core_Reflect_OwnKeysArrayUnionType(/** ? */ $thisArg) {
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
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=Reflect$OwnKeysArrayUnionType$$Overlay.js.map
