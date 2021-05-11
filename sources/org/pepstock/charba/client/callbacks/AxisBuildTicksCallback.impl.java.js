goog.module('org.pepstock.charba.client.callbacks.AxisBuildTicksCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let AxisItem = goog.forwardDeclare('org.pepstock.charba.client.items.AxisItem$impl');

/**
 * @interface
 */
class AxisBuildTicksCallback {
 /** @abstract */
 m_onBeforeBuildTicks__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(/** Axis */ axis, /** AxisItem */ item) {}
 /** @abstract */
 m_onAfterBuildTicks__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(/** Axis */ axis, /** AxisItem */ item) {}
 
 static $clinit() {
  AxisBuildTicksCallback.$clinit = () =>{};
  AxisBuildTicksCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_AxisBuildTicksCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_AxisBuildTicksCallback;
 }
 
 static $loadModules() {}
}
AxisBuildTicksCallback.$markImplementor(/**@type {Function}*/ (AxisBuildTicksCallback));
$Util.$setClassMetadataForInterface(AxisBuildTicksCallback, "org.pepstock.charba.client.callbacks.AxisBuildTicksCallback");

exports = AxisBuildTicksCallback;

//# sourceMappingURL=AxisBuildTicksCallback.js.map
