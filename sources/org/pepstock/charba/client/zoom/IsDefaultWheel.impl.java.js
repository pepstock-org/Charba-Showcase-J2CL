goog.module('org.pepstock.charba.client.zoom.IsDefaultWheel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ModifierKey = goog.forwardDeclare('org.pepstock.charba.client.enums.ModifierKey$impl');
let Wheel = goog.forwardDeclare('org.pepstock.charba.client.zoom.Wheel$impl');

/**
 * @interface
 */
class IsDefaultWheel {
 /** @abstract @return {boolean} */
 m_isEnabled__() {}
 /** @abstract @return {number} */
 m_getSpeed__() {}
 /** @abstract @return {ModifierKey} */
 m_getModifierKey__() {}
 /** @return {boolean} */
 static m_isEnabled__$default__org_pepstock_charba_client_zoom_IsDefaultWheel(/** !IsDefaultWheel */ $thisArg) {
  IsDefaultWheel.$clinit();
  return Wheel.f_DEFAULT_ENABLED__org_pepstock_charba_client_zoom_Wheel;
 }
 /** @return {number} */
 static m_getSpeed__$default__org_pepstock_charba_client_zoom_IsDefaultWheel(/** !IsDefaultWheel */ $thisArg) {
  IsDefaultWheel.$clinit();
  return Wheel.f_DEFAULT_SPEED__org_pepstock_charba_client_zoom_Wheel;
 }
 /** @return {ModifierKey} */
 static m_getModifierKey__$default__org_pepstock_charba_client_zoom_IsDefaultWheel(/** !IsDefaultWheel */ $thisArg) {
  IsDefaultWheel.$clinit();
  return null;
 }
 
 static $clinit() {
  IsDefaultWheel.$clinit = () =>{};
  IsDefaultWheel.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_zoom_IsDefaultWheel = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_zoom_IsDefaultWheel;
 }
 
 static $loadModules() {
  Wheel = goog.module.get('org.pepstock.charba.client.zoom.Wheel$impl');
 }
}
IsDefaultWheel.$markImplementor(/**@type {Function}*/ (IsDefaultWheel));
$Util.$setClassMetadataForInterface(IsDefaultWheel, "org.pepstock.charba.client.zoom.IsDefaultWheel");

exports = IsDefaultWheel;

//# sourceMappingURL=IsDefaultWheel.js.map
