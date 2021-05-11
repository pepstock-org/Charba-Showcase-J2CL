goog.module('elemental2.core.Atomics.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Atomics;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata($Overlay, "Atomics");

exports = $Overlay;

//# sourceMappingURL=Atomics$$Overlay.js.map
