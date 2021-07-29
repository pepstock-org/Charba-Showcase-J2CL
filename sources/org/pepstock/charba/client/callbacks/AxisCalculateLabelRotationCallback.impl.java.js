goog.module('org.pepstock.charba.client.callbacks.AxisCalculateLabelRotationCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let AxisItem = goog.forwardDeclare('org.pepstock.charba.client.items.AxisItem$impl');

/**
 * @interface
 */
class AxisCalculateLabelRotationCallback {
 /** @abstract */
 m_onBeforeCalculateLabelRotation__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(/** Axis */ axis, /** AxisItem */ item) {}
 /** @abstract */
 m_onAfterCalculateLabelRotation__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(/** Axis */ axis, /** AxisItem */ item) {}
 
 static $clinit() {
  AxisCalculateLabelRotationCallback.$clinit = () =>{};
  AxisCalculateLabelRotationCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_AxisCalculateLabelRotationCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_AxisCalculateLabelRotationCallback;
 }
 
 static $loadModules() {}
}
AxisCalculateLabelRotationCallback.$markImplementor(/**@type {Function}*/ (AxisCalculateLabelRotationCallback));
$Util.$setClassMetadataForInterface(AxisCalculateLabelRotationCallback, "org.pepstock.charba.client.callbacks.AxisCalculateLabelRotationCallback");

exports = AxisCalculateLabelRotationCallback;

//# sourceMappingURL=AxisCalculateLabelRotationCallback.js.map
