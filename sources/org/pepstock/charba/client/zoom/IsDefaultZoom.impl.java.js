goog.module('org.pepstock.charba.client.zoom.IsDefaultZoom$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultConfigurationItem = goog.require('org.pepstock.charba.client.zoom.IsDefaultConfigurationItem$impl');

let IsDefaultDrag = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultDrag$impl');
let IsDefaultPinch = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultPinch$impl');
let IsDefaultWheel = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultWheel$impl');

/**
 * @interface
 * @extends {IsDefaultConfigurationItem}
 */
class IsDefaultZoom {
 /** @abstract @return {IsDefaultWheel} */
 m_getWheel__() {}
 /** @abstract @return {IsDefaultDrag} */
 m_getDrag__() {}
 /** @abstract @return {IsDefaultPinch} */
 m_getPinch__() {}
 
 static $clinit() {
  IsDefaultZoom.$clinit = () =>{};
  IsDefaultZoom.$loadModules();
  IsDefaultConfigurationItem.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultConfigurationItem.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_zoom_IsDefaultZoom = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_zoom_IsDefaultZoom;
 }
 
 static $loadModules() {}
}
IsDefaultZoom.$markImplementor(/**@type {Function}*/ (IsDefaultZoom));
$Util.$setClassMetadataForInterface(IsDefaultZoom, "org.pepstock.charba.client.zoom.IsDefaultZoom");

exports = IsDefaultZoom;

//# sourceMappingURL=IsDefaultZoom.js.map
