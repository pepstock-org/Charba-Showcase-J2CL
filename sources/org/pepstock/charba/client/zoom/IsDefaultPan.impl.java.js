goog.module('org.pepstock.charba.client.zoom.IsDefaultPan$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultConfigurationItem = goog.require('org.pepstock.charba.client.zoom.IsDefaultConfigurationItem$impl');

let ModifierKey = goog.forwardDeclare('org.pepstock.charba.client.enums.ModifierKey$impl');
let Pan = goog.forwardDeclare('org.pepstock.charba.client.zoom.Pan$impl');

/**
 * @interface
 * @extends {IsDefaultConfigurationItem}
 */
class IsDefaultPan {
 /** @abstract @return {boolean} */
 m_isEnabled__() {}
 /** @abstract @return {number} */
 m_getThreshold__() {}
 /** @abstract @return {ModifierKey} */
 m_getModifierKey__() {}
 /** @return {boolean} */
 static m_isEnabled__$default__org_pepstock_charba_client_zoom_IsDefaultPan(/** !IsDefaultPan */ $thisArg) {
  IsDefaultPan.$clinit();
  return Pan.f_DEFAULT_ENABLED__org_pepstock_charba_client_zoom_Pan;
 }
 /** @return {number} */
 static m_getThreshold__$default__org_pepstock_charba_client_zoom_IsDefaultPan(/** !IsDefaultPan */ $thisArg) {
  IsDefaultPan.$clinit();
  return Pan.f_DEFAULT_THRESHOLD__org_pepstock_charba_client_zoom_Pan;
 }
 /** @return {ModifierKey} */
 static m_getModifierKey__$default__org_pepstock_charba_client_zoom_IsDefaultPan(/** !IsDefaultPan */ $thisArg) {
  IsDefaultPan.$clinit();
  return null;
 }
 
 static $clinit() {
  IsDefaultPan.$clinit = () =>{};
  IsDefaultPan.$loadModules();
  IsDefaultConfigurationItem.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultConfigurationItem.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_zoom_IsDefaultPan = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_zoom_IsDefaultPan;
 }
 
 static $loadModules() {
  Pan = goog.module.get('org.pepstock.charba.client.zoom.Pan$impl');
 }
}
IsDefaultPan.$markImplementor(/**@type {Function}*/ (IsDefaultPan));
$Util.$setClassMetadataForInterface(IsDefaultPan, "org.pepstock.charba.client.zoom.IsDefaultPan");

exports = IsDefaultPan;

//# sourceMappingURL=IsDefaultPan.js.map
