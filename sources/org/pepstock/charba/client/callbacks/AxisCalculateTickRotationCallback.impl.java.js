goog.module('org.pepstock.charba.client.callbacks.AxisCalculateTickRotationCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let AxisItem = goog.forwardDeclare('org.pepstock.charba.client.items.AxisItem$impl');

/**
 * @interface
 */
class AxisCalculateTickRotationCallback {
 /** @abstract */
 m_onBeforeCalculateTickRotation__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(/** Axis */ axis, /** AxisItem */ item) {}
 /** @abstract */
 m_onAfterCalculateTickRotation__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(/** Axis */ axis, /** AxisItem */ item) {}
 
 static $clinit() {
  AxisCalculateTickRotationCallback.$clinit = () =>{};
  AxisCalculateTickRotationCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_AxisCalculateTickRotationCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_AxisCalculateTickRotationCallback;
 }
 
 static $loadModules() {}
}
AxisCalculateTickRotationCallback.$markImplementor(/**@type {Function}*/ (AxisCalculateTickRotationCallback));
$Util.$setClassMetadataForInterface(AxisCalculateTickRotationCallback, "org.pepstock.charba.client.callbacks.AxisCalculateTickRotationCallback");

exports = AxisCalculateTickRotationCallback;

//# sourceMappingURL=AxisCalculateTickRotationCallback.js.map
