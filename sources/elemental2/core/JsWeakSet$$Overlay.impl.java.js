goog.module('elemental2.core.JsWeakSet.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WeakSet;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata($Overlay, "WeakSet");

exports = $Overlay;

//# sourceMappingURL=JsWeakSet$$Overlay.js.map
