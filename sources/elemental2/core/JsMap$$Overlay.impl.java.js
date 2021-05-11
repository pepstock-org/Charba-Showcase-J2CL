goog.module('elemental2.core.JsMap.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Map;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata($Overlay, "Map");

exports = $Overlay;

//# sourceMappingURL=JsMap$$Overlay.js.map
