goog.module('org.pepstock.charba.client.dom.elements.CanvasGradientItem.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let GradientColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');

class $Overlay {
 
 static m_addColorStop__$devirt__org_pepstock_charba_client_dom_elements_CanvasGradientItem__double__java_lang_String(/** !CanvasGradient */ $thisArg, /** number */ offset, /** ?string */ color) {
  $Overlay.$clinit();
  GradientColor.m_checkOffsetWithinBounds__double(offset);
  let checkedColor = $Equality.$same(color, null) ? Defaults.m_get__().m_getGlobal__().m_getElements__().m_getLine__().m_getBackgroundColorAsString__() : color;
  $thisArg.addColorStop(offset, checkedColor);
 }
 
 static m_addColorStop__$devirt__org_pepstock_charba_client_dom_elements_CanvasGradientItem__double__org_pepstock_charba_client_colors_IsColor(/** !CanvasGradient */ $thisArg, /** number */ offset, /** IsColor */ color) {
  $Overlay.$clinit();
  GradientColor.m_checkOffsetWithinBounds__double(offset);
  let checkedColor = IsColor.m_isValid__org_pepstock_charba_client_colors_IsColor(color) ? color.m_toRGBA__() : null;
  $thisArg.addColorStop(offset, checkedColor);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CanvasGradient;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  GradientColor = goog.module.get('org.pepstock.charba.client.colors.GradientColor$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
 }
}
$Util.$setClassMetadata($Overlay, "CanvasGradient");

exports = $Overlay;

//# sourceMappingURL=CanvasGradientItem$$Overlay.js.map
