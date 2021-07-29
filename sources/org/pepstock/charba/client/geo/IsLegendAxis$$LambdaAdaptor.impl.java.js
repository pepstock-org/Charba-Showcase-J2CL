goog.module('org.pepstock.charba.client.geo.IsLegendAxis.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsLegendAxis = goog.require('org.pepstock.charba.client.geo.IsLegendAxis$impl');

let Legend = goog.forwardDeclare('org.pepstock.charba.client.geo.Legend$impl');
let LegendAxisMapper = goog.forwardDeclare('org.pepstock.charba.client.geo.LegendAxisMapper$impl');

/**
 * @implements {IsLegendAxis}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():LegendAxisMapper */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():LegendAxisMapper}*/
  this.f_fn__org_pepstock_charba_client_geo_IsLegendAxis_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_geo_IsLegendAxis_$LambdaAdaptor__org_pepstock_charba_client_geo_IsLegendAxis_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_geo_IsLegendAxis_$LambdaAdaptor__org_pepstock_charba_client_geo_IsLegendAxis_$JsFunction(/** ?function():LegendAxisMapper */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_geo_IsLegendAxis_$LambdaAdaptor = fn;
 }
 /** @override @return {LegendAxisMapper} */
 m_getMapper__() {
  let /** ?function():LegendAxisMapper */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_geo_IsLegendAxis_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {Legend} */
 m_getLegend__() {
  return IsLegendAxis.m_getLegend__$default__org_pepstock_charba_client_geo_IsLegendAxis(this);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  IsLegendAxis.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
IsLegendAxis.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.geo.IsLegendAxis$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=IsLegendAxis$$LambdaAdaptor.js.map
