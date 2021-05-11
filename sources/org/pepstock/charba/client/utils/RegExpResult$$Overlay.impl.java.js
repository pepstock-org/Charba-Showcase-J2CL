goog.module('org.pepstock.charba.client.utils.RegExpResult.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let NativeObjectContainer = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
let NativeObjectContainerFactory = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

class $Overlay {
 /** @return {?string} */
 static m_get__$devirt__org_pepstock_charba_client_utils_RegExpResult__int(/** !Array */ $thisArg, /** number */ index) {
  $Overlay.$clinit();
  return $thisArg.slice(index, index + 1 | 0).pop();
 }
 /** @template T @return {T} */
 static m_groups__$devirt__org_pepstock_charba_client_utils_RegExpResult__org_pepstock_charba_client_commons_NativeObjectContainerFactory(/** !Array */ $thisArg, /** NativeObjectContainerFactory<T> */ factory) {
  $Overlay.$clinit();
  if (!$Equality.$same(factory, null)) {
   return factory.m_create__org_pepstock_charba_client_commons_NativeObject($thisArg.groups);
  }
  return null;
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Array;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
$Util.$setClassMetadata($Overlay, "Array");

exports = $Overlay;

//# sourceMappingURL=RegExpResult$$Overlay.js.map
