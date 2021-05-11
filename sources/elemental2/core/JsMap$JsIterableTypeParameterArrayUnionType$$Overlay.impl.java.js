goog.module('elemental2.core.JsMap.JsIterableTypeParameterArrayUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @template KEY, VALUE @return {KEY} */
 static m_asKEY__$devirt__elemental2_core_JsMap_JsIterableTypeParameterArrayUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_cast__java_lang_Object($thisArg);
 }
 /** @template KEY, VALUE @return {VALUE} */
 static m_asVALUE__$devirt__elemental2_core_JsMap_JsIterableTypeParameterArrayUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_cast__java_lang_Object($thisArg);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=JsMap$JsIterableTypeParameterArrayUnionType$$Overlay.js.map
