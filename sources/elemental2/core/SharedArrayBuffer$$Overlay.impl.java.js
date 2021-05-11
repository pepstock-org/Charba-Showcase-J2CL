goog.module('elemental2.core.SharedArrayBuffer.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SharedArrayBuffer;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata($Overlay, "SharedArrayBuffer");

exports = $Overlay;

//# sourceMappingURL=SharedArrayBuffer$$Overlay.js.map
