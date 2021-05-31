goog.module('org.pepstock.charba.client.zoom.IsDefaultPinch$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Pinch = goog.forwardDeclare('org.pepstock.charba.client.zoom.Pinch$impl');

/**
 * @interface
 */
class IsDefaultPinch {
 /** @abstract @return {boolean} */
 m_isEnabled__() {}
 /** @return {boolean} */
 static m_isEnabled__$default__org_pepstock_charba_client_zoom_IsDefaultPinch(/** !IsDefaultPinch */ $thisArg) {
  IsDefaultPinch.$clinit();
  return Pinch.f_DEFAULT_ENABLED__org_pepstock_charba_client_zoom_Pinch;
 }
 
 static $clinit() {
  IsDefaultPinch.$clinit = () =>{};
  IsDefaultPinch.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_zoom_IsDefaultPinch = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_zoom_IsDefaultPinch;
 }
 
 static $loadModules() {
  Pinch = goog.module.get('org.pepstock.charba.client.zoom.Pinch$impl');
 }
}
IsDefaultPinch.$markImplementor(/**@type {Function}*/ (IsDefaultPinch));
$Util.$setClassMetadataForInterface(IsDefaultPinch, "org.pepstock.charba.client.zoom.IsDefaultPinch");

exports = IsDefaultPinch;

//# sourceMappingURL=IsDefaultPinch.js.map
