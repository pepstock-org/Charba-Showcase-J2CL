goog.module('org.pepstock.charba.client.geo.callbacks.FeatureLabelCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Feature = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.geo.callbacks.FeatureLabelCallback.$LambdaAdaptor$impl');

/**
 * @interface
 */
class FeatureLabelCallback {
 /** @abstract @return {?string} */
 m_label__org_pepstock_charba_client_geo_Feature(/** Feature */ feature) {}
 /** @return {FeatureLabelCallback} */
 static $adapt(/** ?function(Feature):?string */ fn) {
  FeatureLabelCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  FeatureLabelCallback.$clinit = () =>{};
  FeatureLabelCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_geo_callbacks_FeatureLabelCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_geo_callbacks_FeatureLabelCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.geo.callbacks.FeatureLabelCallback.$LambdaAdaptor$impl');
 }
}
FeatureLabelCallback.$markImplementor(/**@type {Function}*/ (FeatureLabelCallback));
$Util.$setClassMetadataForInterface(FeatureLabelCallback, "org.pepstock.charba.client.geo.callbacks.FeatureLabelCallback");

exports = FeatureLabelCallback;

//# sourceMappingURL=FeatureLabelCallback.js.map
