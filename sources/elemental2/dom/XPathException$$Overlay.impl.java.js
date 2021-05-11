goog.module('elemental2.dom.XPathException.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 /** @return {number} */
 static get f_INVALID_EXPRESSION_ERR__elemental2_dom_XPathException_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_INVALID_EXPRESSION_ERR__elemental2_dom_XPathException_$Overlay);
 }
 /** @return {number} */
 static get f_TYPE_ERR__elemental2_dom_XPathException_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$static_TYPE_ERR__elemental2_dom_XPathException_$Overlay);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$static_INVALID_EXPRESSION_ERR__elemental2_dom_XPathException_$Overlay = XPathException.INVALID_EXPRESSION_ERR;
  $Overlay.$static_TYPE_ERR__elemental2_dom_XPathException_$Overlay = XPathException.TYPE_ERR;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof XPathException;
 }
 
 static $loadModules() {}
}
/**@private {number}*/
$Overlay.$static_INVALID_EXPRESSION_ERR__elemental2_dom_XPathException_$Overlay = 0;
/**@private {number}*/
$Overlay.$static_TYPE_ERR__elemental2_dom_XPathException_$Overlay = 0;
$Util.$setClassMetadata($Overlay, "XPathException");

exports = $Overlay;

//# sourceMappingURL=XPathException$$Overlay.js.map
