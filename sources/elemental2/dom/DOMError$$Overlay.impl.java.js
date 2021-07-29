goog.module('elemental2.dom.DOMError.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 /** @return {number} */
 static get f_SEVERITY_ERROR__elemental2_dom_DOMError_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_SEVERITY_ERROR__elemental2_dom_DOMError_$Overlay);
 }
 /** @return {number} */
 static get f_SEVERITY_FATAL_ERROR__elemental2_dom_DOMError_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_SEVERITY_FATAL_ERROR__elemental2_dom_DOMError_$Overlay);
 }
 /** @return {number} */
 static get f_SEVERITY_WARNING__elemental2_dom_DOMError_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_SEVERITY_WARNING__elemental2_dom_DOMError_$Overlay);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_SEVERITY_ERROR__elemental2_dom_DOMError_$Overlay = DOMError.SEVERITY_ERROR;
  $Overlay.$static_SEVERITY_FATAL_ERROR__elemental2_dom_DOMError_$Overlay = DOMError.SEVERITY_FATAL_ERROR;
  $Overlay.$static_SEVERITY_WARNING__elemental2_dom_DOMError_$Overlay = DOMError.SEVERITY_WARNING;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DOMError;
 }
 
 static $loadModules() {}
}
/**@private {number}*/
$Overlay.$static_SEVERITY_ERROR__elemental2_dom_DOMError_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_SEVERITY_FATAL_ERROR__elemental2_dom_DOMError_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_SEVERITY_WARNING__elemental2_dom_DOMError_$Overlay = 0;
$Util.$setClassMetadata($Overlay, "DOMError");

exports = $Overlay;

//# sourceMappingURL=DOMError$$Overlay.js.map