goog.module('elemental2.promise.Promise.ResolveValueUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @template V @return {IThenable<V>} */
 static m_asIThenable__$devirt__elemental2_promise_Promise_ResolveValueUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {IThenable<V>}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @template V @return {V} */
 static m_asV__$devirt__elemental2_promise_Promise_ResolveValueUnionType(/** ? */ $thisArg) {
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

//# sourceMappingURL=Promise$ResolveValueUnionType$$Overlay.js.map
