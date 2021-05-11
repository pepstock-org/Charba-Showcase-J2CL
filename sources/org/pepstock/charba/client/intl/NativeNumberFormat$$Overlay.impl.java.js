goog.module('org.pepstock.charba.client.intl.NativeNumberFormat.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Intl.NumberFormat;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata($Overlay, "Intl.NumberFormat");

exports = $Overlay;

//# sourceMappingURL=NativeNumberFormat$$Overlay.js.map
