goog.module('elemental2.core.JsSet.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Set;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata($Overlay, "Set");

exports = $Overlay;

//# sourceMappingURL=JsSet$$Overlay.js.map
