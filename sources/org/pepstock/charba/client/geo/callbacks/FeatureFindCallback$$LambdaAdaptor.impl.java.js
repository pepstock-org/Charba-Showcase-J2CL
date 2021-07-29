goog.module('org.pepstock.charba.client.geo.callbacks.FeatureFindCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FeatureFindCallback = goog.require('org.pepstock.charba.client.geo.callbacks.FeatureFindCallback$impl');

let Feature = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature$impl');

/**
 * @implements {FeatureFindCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(Feature, number):boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Feature, number):boolean}*/
  this.f_fn__org_pepstock_charba_client_geo_callbacks_FeatureFindCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_geo_callbacks_FeatureFindCallback_$LambdaAdaptor__org_pepstock_charba_client_geo_callbacks_FeatureFindCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_geo_callbacks_FeatureFindCallback_$LambdaAdaptor__org_pepstock_charba_client_geo_callbacks_FeatureFindCallback_$JsFunction(/** ?function(Feature, number):boolean */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_geo_callbacks_FeatureFindCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {boolean} */
 m_find__org_pepstock_charba_client_geo_Feature__int(/** Feature */ arg0, /** number */ arg1) {
  let /** ?function(Feature, number):boolean */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_geo_callbacks_FeatureFindCallback_$LambdaAdaptor, $function(arg0, arg1));
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
FeatureFindCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.geo.callbacks.FeatureFindCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=FeatureFindCallback$$LambdaAdaptor.js.map
