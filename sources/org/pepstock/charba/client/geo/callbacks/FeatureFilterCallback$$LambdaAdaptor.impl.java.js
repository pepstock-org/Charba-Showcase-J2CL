goog.module('org.pepstock.charba.client.geo.callbacks.FeatureFilterCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FeatureFilterCallback = goog.require('org.pepstock.charba.client.geo.callbacks.FeatureFilterCallback$impl');

let Feature = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature$impl');

/**
 * @implements {FeatureFilterCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(Feature, number):boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Feature, number):boolean}*/
  this.f_fn__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback_$LambdaAdaptor__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback_$LambdaAdaptor__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback_$JsFunction(/** ?function(Feature, number):boolean */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {boolean} */
 m_filter__org_pepstock_charba_client_geo_Feature__int(/** Feature */ arg0, /** number */ arg1) {
  let /** ?function(Feature, number):boolean */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_geo_callbacks_FeatureFilterCallback_$LambdaAdaptor, $function(arg0, arg1));
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
FeatureFilterCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.geo.callbacks.FeatureFilterCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=FeatureFilterCallback$$LambdaAdaptor.js.map
