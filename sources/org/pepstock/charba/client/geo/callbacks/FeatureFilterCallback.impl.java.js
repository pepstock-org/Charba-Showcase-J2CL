goog.module('org.pepstock.charba.client.geo.callbacks.FeatureFilterCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Feature = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.geo.callbacks.FeatureFilterCallback.$LambdaAdaptor$impl');

/**
 * @interface
 */
class FeatureFilterCallback {
 /** @abstract @return {boolean} */
 m_filter__org_pepstock_charba_client_geo_Feature__int(/** Feature */ feature, /** number */ index) {}
 /** @return {FeatureFilterCallback} */
 static $adapt(/** ?function(Feature, number):boolean */ fn) {
  FeatureFilterCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  FeatureFilterCallback.$clinit = () =>{};
  FeatureFilterCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.geo.callbacks.FeatureFilterCallback.$LambdaAdaptor$impl');
 }
}
FeatureFilterCallback.$markImplementor(/**@type {Function}*/ (FeatureFilterCallback));
$Util.$setClassMetadataForInterface(FeatureFilterCallback, "org.pepstock.charba.client.geo.callbacks.FeatureFilterCallback");

exports = FeatureFilterCallback;

//# sourceMappingURL=FeatureFilterCallback.js.map
