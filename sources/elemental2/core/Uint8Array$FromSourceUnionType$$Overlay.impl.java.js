goog.module('elemental2.core.Uint8Array.FromSourceUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {IArrayLike<?number>} */
 static m_asJsArrayLike__$devirt__elemental2_core_Uint8Array_FromSourceUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {IArrayLike<?number>}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @return {Iterable<?number>} */
 static m_asJsIterable__$devirt__elemental2_core_Uint8Array_FromSourceUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Iterable<?number>}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @return {?string} */
 static m_asString__$devirt__elemental2_core_Uint8Array_FromSourceUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {boolean} */
 static m_isString__$devirt__elemental2_core_Uint8Array_FromSourceUnionType(/** ? */ $thisArg) {
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

//# sourceMappingURL=Uint8Array$FromSourceUnionType$$Overlay.js.map
