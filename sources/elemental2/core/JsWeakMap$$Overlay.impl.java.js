goog.module('elemental2.core.JsWeakMap.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WeakMap;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata($Overlay, "WeakMap");

exports = $Overlay;

//# sourceMappingURL=JsWeakMap$$Overlay.js.map
