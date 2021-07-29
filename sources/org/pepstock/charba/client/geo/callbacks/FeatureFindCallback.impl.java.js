goog.module('org.pepstock.charba.client.geo.callbacks.FeatureFindCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Feature = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.geo.callbacks.FeatureFindCallback.$LambdaAdaptor$impl');

/**
 * @interface
 */
class FeatureFindCallback {
 /** @abstract @return {boolean} */
 m_find__org_pepstock_charba_client_geo_Feature__int(/** Feature */ feature, /** number */ index) {}
 /** @return {FeatureFindCallback} */
 static $adapt(/** ?function(Feature, number):boolean */ fn) {
  FeatureFindCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  FeatureFindCallback.$clinit = () =>{};
  FeatureFindCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_geo_callbacks_FeatureFindCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_geo_callbacks_FeatureFindCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.geo.callbacks.FeatureFindCallback.$LambdaAdaptor$impl');
 }
}
FeatureFindCallback.$markImplementor(/**@type {Function}*/ (FeatureFindCallback));
$Util.$setClassMetadataForInterface(FeatureFindCallback, "org.pepstock.charba.client.geo.callbacks.FeatureFindCallback");

exports = FeatureFindCallback;

//# sourceMappingURL=FeatureFindCallback.js.map
