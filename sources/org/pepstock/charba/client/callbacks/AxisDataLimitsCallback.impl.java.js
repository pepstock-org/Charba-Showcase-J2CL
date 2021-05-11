goog.module('org.pepstock.charba.client.callbacks.AxisDataLimitsCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let AxisItem = goog.forwardDeclare('org.pepstock.charba.client.items.AxisItem$impl');

/**
 * @interface
 */
class AxisDataLimitsCallback {
 /** @abstract */
 m_onBeforeDataLimits__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(/** Axis */ axis, /** AxisItem */ item) {}
 /** @abstract */
 m_onAfterDataLimits__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(/** Axis */ axis, /** AxisItem */ item) {}
 
 static $clinit() {
  AxisDataLimitsCallback.$clinit = () =>{};
  AxisDataLimitsCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_AxisDataLimitsCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_AxisDataLimitsCallback;
 }
 
 static $loadModules() {}
}
AxisDataLimitsCallback.$markImplementor(/**@type {Function}*/ (AxisDataLimitsCallback));
$Util.$setClassMetadataForInterface(AxisDataLimitsCallback, "org.pepstock.charba.client.callbacks.AxisDataLimitsCallback");

exports = AxisDataLimitsCallback;

//# sourceMappingURL=AxisDataLimitsCallback.js.map
