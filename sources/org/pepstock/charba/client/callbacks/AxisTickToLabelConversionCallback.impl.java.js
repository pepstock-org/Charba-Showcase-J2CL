goog.module('org.pepstock.charba.client.callbacks.AxisTickToLabelConversionCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let AxisItem = goog.forwardDeclare('org.pepstock.charba.client.items.AxisItem$impl');

/**
 * @interface
 */
class AxisTickToLabelConversionCallback {
 /** @abstract */
 m_onBeforeTickToLabelConversion__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(/** Axis */ axis, /** AxisItem */ item) {}
 /** @abstract */
 m_onAfterTickToLabelConversion__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(/** Axis */ axis, /** AxisItem */ item) {}
 
 static $clinit() {
  AxisTickToLabelConversionCallback.$clinit = () =>{};
  AxisTickToLabelConversionCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_AxisTickToLabelConversionCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_AxisTickToLabelConversionCallback;
 }
 
 static $loadModules() {}
}
AxisTickToLabelConversionCallback.$markImplementor(/**@type {Function}*/ (AxisTickToLabelConversionCallback));
$Util.$setClassMetadataForInterface(AxisTickToLabelConversionCallback, "org.pepstock.charba.client.callbacks.AxisTickToLabelConversionCallback");

exports = AxisTickToLabelConversionCallback;

//# sourceMappingURL=AxisTickToLabelConversionCallback.js.map
