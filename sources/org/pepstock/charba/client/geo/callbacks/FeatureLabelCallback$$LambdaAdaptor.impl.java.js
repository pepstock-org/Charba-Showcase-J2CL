goog.module('org.pepstock.charba.client.geo.callbacks.FeatureLabelCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FeatureLabelCallback = goog.require('org.pepstock.charba.client.geo.callbacks.FeatureLabelCallback$impl');

let Feature = goog.forwardDeclare('org.pepstock.charba.client.geo.Feature$impl');

/**
 * @implements {FeatureLabelCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(Feature):?string */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Feature):?string}*/
  this.f_fn__org_pepstock_charba_client_geo_callbacks_FeatureLabelCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_geo_callbacks_FeatureLabelCallback_$LambdaAdaptor__org_pepstock_charba_client_geo_callbacks_FeatureLabelCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_geo_callbacks_FeatureLabelCallback_$LambdaAdaptor__org_pepstock_charba_client_geo_callbacks_FeatureLabelCallback_$JsFunction(/** ?function(Feature):?string */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_geo_callbacks_FeatureLabelCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {?string} */
 m_label__org_pepstock_charba_client_geo_Feature(/** Feature */ arg0) {
  let /** ?function(Feature):?string */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_geo_callbacks_FeatureLabelCallback_$LambdaAdaptor, $function(arg0));
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
FeatureLabelCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.geo.callbacks.FeatureLabelCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=FeatureLabelCallback$$LambdaAdaptor.js.map
