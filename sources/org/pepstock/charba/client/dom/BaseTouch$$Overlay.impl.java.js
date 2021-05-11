goog.module('org.pepstock.charba.client.dom.BaseTouch.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Touch;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata($Overlay, "Touch");

exports = $Overlay;

//# sourceMappingURL=BaseTouch$$Overlay.js.map
