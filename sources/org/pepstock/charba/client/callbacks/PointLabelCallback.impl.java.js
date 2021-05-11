goog.module('org.pepstock.charba.client.callbacks.PointLabelCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PointLabelCallback.$LambdaAdaptor$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');

/**
 * @interface
 */
class PointLabelCallback {
 /** @abstract @return {?string} */
 m_onCallback__org_pepstock_charba_client_configuration_Axis__java_lang_String__int(/** Axis */ axis, /** ?string */ item, /** number */ index) {}
 /** @return {PointLabelCallback} */
 static $adapt(/** ?function(Axis, ?string, number):?string */ fn) {
  PointLabelCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  PointLabelCallback.$clinit = () =>{};
  PointLabelCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_callbacks_PointLabelCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_callbacks_PointLabelCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.callbacks.PointLabelCallback.$LambdaAdaptor$impl');
 }
}
PointLabelCallback.$markImplementor(/**@type {Function}*/ (PointLabelCallback));
$Util.$setClassMetadataForInterface(PointLabelCallback, "org.pepstock.charba.client.callbacks.PointLabelCallback");

exports = PointLabelCallback;

//# sourceMappingURL=PointLabelCallback.js.map
