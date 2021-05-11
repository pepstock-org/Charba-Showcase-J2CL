goog.module('org.pepstock.charba.client.dom.BaseEventTarget.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EventTarget;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata($Overlay, "EventTarget");

exports = $Overlay;

//# sourceMappingURL=BaseEventTarget$$Overlay.js.map
