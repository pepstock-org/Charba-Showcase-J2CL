goog.module('elemental2.promise.Promise.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @template V @return {Promise<Array<V>>} */
 static m_all__arrayOf_elemental2_promise_IThenable(/** Array<IThenable<?>> */ promises) {
  $Overlay.$clinit();
  return /**@type {Promise<Array<V>>}*/ (Promise.all(promises));
 }
 /** @template V @return {Promise<V>} */
 static m_race__arrayOf_elemental2_promise_IThenable(/** Array<IThenable<?>> */ promises) {
  $Overlay.$clinit();
  return /**@type {Promise<V>}*/ (Promise.race(promises));
 }
 /** @template V @return {Promise<V>} */
 static m_resolve__elemental2_promise_IThenable(/** IThenable<V> */ value) {
  $Overlay.$clinit();
  return /**@type {Promise<V>}*/ (Promise.resolve(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value))));
 }
 /** @template V @return {Promise<V>} */
 static m_resolve__java_lang_Object(/** V */ value) {
  $Overlay.$clinit();
  return /**@type {Promise<V>}*/ (Promise.resolve(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value))));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Promise;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, "Promise");

exports = $Overlay;

//# sourceMappingURL=Promise$$Overlay.js.map
