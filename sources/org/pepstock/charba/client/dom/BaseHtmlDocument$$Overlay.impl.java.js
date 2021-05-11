goog.module('org.pepstock.charba.client.dom.BaseHtmlDocument.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLDocument;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata($Overlay, "HTMLDocument");

exports = $Overlay;

//# sourceMappingURL=BaseHtmlDocument$$Overlay.js.map
