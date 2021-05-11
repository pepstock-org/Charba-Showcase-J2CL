goog.module('org.pepstock.charba.client.callbacks.AxisFitCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let AxisItem = goog.forwardDeclare('org.pepstock.charba.client.items.AxisItem$impl');

/**
 * @interface
 */
class AxisFitCallback {
 /** @abstract */
 m_onBeforeFit__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(/** Axis */ axis, /** AxisItem */ item) {}
 /** @abstract */
 m_onAfterFit__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(/** Axis */ axis, /** AxisItem */ item) {}
 
 static $clinit() {
  AxisFitCallback.$clinit = () =>{};
  AxisFitCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_AxisFitCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_AxisFitCallback;
 }
 
 static $loadModules() {}
}
AxisFitCallback.$markImplementor(/**@type {Function}*/ (AxisFitCallback));
$Util.$setClassMetadataForInterface(AxisFitCallback, "org.pepstock.charba.client.callbacks.AxisFitCallback");

exports = AxisFitCallback;

//# sourceMappingURL=AxisFitCallback.js.map
