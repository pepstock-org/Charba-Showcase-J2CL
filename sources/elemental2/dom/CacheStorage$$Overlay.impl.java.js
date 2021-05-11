goog.module('elemental2.dom.CacheStorage.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @return {Promise<Response>} */
 static m_match__$devirt__elemental2_dom_CacheStorage__elemental2_dom_Request__elemental2_dom_CacheQueryOptions(/** !CacheStorage */ $thisArg, /** Request */ request, /** CacheQueryOptions */ options) {
  $Overlay.$clinit();
  return $thisArg.match(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)), options);
 }
 /** @return {Promise<Response>} */
 static m_match__$devirt__elemental2_dom_CacheStorage__elemental2_dom_Request(/** !CacheStorage */ $thisArg, /** Request */ request) {
  $Overlay.$clinit();
  return $thisArg.match(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)));
 }
 /** @return {Promise<Response>} */
 static m_match__$devirt__elemental2_dom_CacheStorage__java_lang_String__elemental2_dom_CacheQueryOptions(/** !CacheStorage */ $thisArg, /** ?string */ request, /** CacheQueryOptions */ options) {
  $Overlay.$clinit();
  return $thisArg.match(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)), options);
 }
 /** @return {Promise<Response>} */
 static m_match__$devirt__elemental2_dom_CacheStorage__java_lang_String(/** !CacheStorage */ $thisArg, /** ?string */ request) {
  $Overlay.$clinit();
  return $thisArg.match(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)));
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

//# sourceMappingURL=CacheStorage$$Overlay.js.map
