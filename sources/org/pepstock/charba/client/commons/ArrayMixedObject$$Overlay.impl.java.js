goog.module('org.pepstock.charba.client.commons.ArrayMixedObject.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 
 static m_clear__$devirt__org_pepstock_charba_client_commons_ArrayMixedObject(/** !Array */ $thisArg) {
  $Overlay.$clinit();
  $thisArg.splice(0, $thisArg.length);
 }
 /** @return {*} */
 static m_remove__$devirt__org_pepstock_charba_client_commons_ArrayMixedObject__int(/** !Array */ $thisArg, /** number */ index) {
  $Overlay.$clinit();
  return $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayMixedObject__int($thisArg.splice(index, 1), 0);
 }
 
 static m_insertAt__$devirt__org_pepstock_charba_client_commons_ArrayMixedObject__int__java_lang_Object(/** !Array */ $thisArg, /** number */ index, /** * */ item) {
  $Overlay.$clinit();
  $thisArg.splice(index, 0, item);
 }
 /** @return {*} */
 static m_get__$devirt__org_pepstock_charba_client_commons_ArrayMixedObject__int(/** !Array */ $thisArg, /** number */ index) {
  $Overlay.$clinit();
  return $thisArg.slice(index, index + 1 | 0).pop();
 }
 
 static m_set__$devirt__org_pepstock_charba_client_commons_ArrayMixedObject__int__java_lang_Object(/** !Array */ $thisArg, /** number */ index, /** * */ item) {
  $Overlay.$clinit();
  $thisArg.fill(item, index, index + 1 | 0);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Array;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata($Overlay, "Array");

exports = $Overlay;

//# sourceMappingURL=ArrayMixedObject$$Overlay.js.map
