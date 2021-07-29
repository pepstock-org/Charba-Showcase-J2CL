goog.module('org.pepstock.charba.client.geo.callbacks.InterpolateCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const InterpolateCallback = goog.require('org.pepstock.charba.client.geo.callbacks.InterpolateCallback$impl');

/**
 * @implements {InterpolateCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(number):* */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(number):*}*/
  this.f_fn__org_pepstock_charba_client_geo_callbacks_InterpolateCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_geo_callbacks_InterpolateCallback_$LambdaAdaptor__org_pepstock_charba_client_geo_callbacks_InterpolateCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_geo_callbacks_InterpolateCallback_$LambdaAdaptor__org_pepstock_charba_client_geo_callbacks_InterpolateCallback_$JsFunction(/** ?function(number):* */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_geo_callbacks_InterpolateCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {*} */
 m_interpolate__double(/** number */ arg0) {
  let /** ?function(number):* */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_geo_callbacks_InterpolateCallback_$LambdaAdaptor, $function(arg0));
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
InterpolateCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.geo.callbacks.InterpolateCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=InterpolateCallback$$LambdaAdaptor.js.map
