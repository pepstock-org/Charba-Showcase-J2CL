goog.module('org.pepstock.charba.client.commons.Array.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 /** @return {boolean} */
 static m_isEmpty__$devirt__org_pepstock_charba_client_commons_Array(/** !Array */ $thisArg) {
  $Overlay.$clinit();
  return $thisArg.length == 0;
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

//# sourceMappingURL=Array$$Overlay.js.map
