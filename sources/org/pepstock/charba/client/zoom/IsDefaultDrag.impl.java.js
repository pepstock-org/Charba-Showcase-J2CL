goog.module('org.pepstock.charba.client.zoom.IsDefaultDrag$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Drag = goog.forwardDeclare('org.pepstock.charba.client.zoom.Drag$impl');

/**
 * @interface
 */
class IsDefaultDrag {
 /** @abstract @return {boolean} */
 m_isEnabled__() {}
 /** @abstract @return {?string} */
 m_getBackgroundColorAsString__() {}
 /** @abstract @return {?string} */
 m_getBorderColorAsString__() {}
 /** @abstract @return {number} */
 m_getBorderWidth__() {}
 /** @return {boolean} */
 static m_isEnabled__$default__org_pepstock_charba_client_zoom_IsDefaultDrag(/** !IsDefaultDrag */ $thisArg) {
  IsDefaultDrag.$clinit();
  return Drag.f_DEFAULT_ENABLED__org_pepstock_charba_client_zoom_Drag;
 }
 /** @return {?string} */
 static m_getBackgroundColorAsString__$default__org_pepstock_charba_client_zoom_IsDefaultDrag(/** !IsDefaultDrag */ $thisArg) {
  IsDefaultDrag.$clinit();
  return Drag.f_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_zoom_Drag;
 }
 /** @return {?string} */
 static m_getBorderColorAsString__$default__org_pepstock_charba_client_zoom_IsDefaultDrag(/** !IsDefaultDrag */ $thisArg) {
  IsDefaultDrag.$clinit();
  return Drag.f_DEFAULT_BORDER_COLOR__org_pepstock_charba_client_zoom_Drag;
 }
 /** @return {number} */
 static m_getBorderWidth__$default__org_pepstock_charba_client_zoom_IsDefaultDrag(/** !IsDefaultDrag */ $thisArg) {
  IsDefaultDrag.$clinit();
  return Drag.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_zoom_Drag;
 }
 
 static $clinit() {
  IsDefaultDrag.$clinit = () =>{};
  IsDefaultDrag.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_zoom_IsDefaultDrag = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_zoom_IsDefaultDrag;
 }
 
 static $loadModules() {
  Drag = goog.module.get('org.pepstock.charba.client.zoom.Drag$impl');
 }
}
IsDefaultDrag.$markImplementor(/**@type {Function}*/ (IsDefaultDrag));
$Util.$setClassMetadataForInterface(IsDefaultDrag, "org.pepstock.charba.client.zoom.IsDefaultDrag");

exports = IsDefaultDrag;

//# sourceMappingURL=IsDefaultDrag.js.map
