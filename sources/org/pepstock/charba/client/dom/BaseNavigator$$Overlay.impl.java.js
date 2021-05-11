goog.module('org.pepstock.charba.client.dom.BaseNavigator.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Navigator;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata($Overlay, "Navigator");

exports = $Overlay;

//# sourceMappingURL=BaseNavigator$$Overlay.js.map
