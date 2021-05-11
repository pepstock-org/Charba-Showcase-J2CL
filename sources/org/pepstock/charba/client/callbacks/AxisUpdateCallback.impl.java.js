goog.module('org.pepstock.charba.client.callbacks.AxisUpdateCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let AxisItem = goog.forwardDeclare('org.pepstock.charba.client.items.AxisItem$impl');

/**
 * @interface
 */
class AxisUpdateCallback {
 /** @abstract */
 m_onBeforeUpdate__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(/** Axis */ axis, /** AxisItem */ item) {}
 /** @abstract */
 m_onAfterUpdate__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(/** Axis */ axis, /** AxisItem */ item) {}
 
 static $clinit() {
  AxisUpdateCallback.$clinit = () =>{};
  AxisUpdateCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_AxisUpdateCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_AxisUpdateCallback;
 }
 
 static $loadModules() {}
}
AxisUpdateCallback.$markImplementor(/**@type {Function}*/ (AxisUpdateCallback));
$Util.$setClassMetadataForInterface(AxisUpdateCallback, "org.pepstock.charba.client.callbacks.AxisUpdateCallback");

exports = AxisUpdateCallback;

//# sourceMappingURL=AxisUpdateCallback.js.map
