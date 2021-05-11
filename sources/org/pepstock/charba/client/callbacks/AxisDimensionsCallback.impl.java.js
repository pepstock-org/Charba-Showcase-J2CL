goog.module('org.pepstock.charba.client.callbacks.AxisDimensionsCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let AxisItem = goog.forwardDeclare('org.pepstock.charba.client.items.AxisItem$impl');

/**
 * @interface
 */
class AxisDimensionsCallback {
 /** @abstract */
 m_onBeforeSetDimensions__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(/** Axis */ axis, /** AxisItem */ item) {}
 /** @abstract */
 m_onAfterSetDimensions__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(/** Axis */ axis, /** AxisItem */ item) {}
 
 static $clinit() {
  AxisDimensionsCallback.$clinit = () =>{};
  AxisDimensionsCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_AxisDimensionsCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_AxisDimensionsCallback;
 }
 
 static $loadModules() {}
}
AxisDimensionsCallback.$markImplementor(/**@type {Function}*/ (AxisDimensionsCallback));
$Util.$setClassMetadataForInterface(AxisDimensionsCallback, "org.pepstock.charba.client.callbacks.AxisDimensionsCallback");

exports = AxisDimensionsCallback;

//# sourceMappingURL=AxisDimensionsCallback.js.map
