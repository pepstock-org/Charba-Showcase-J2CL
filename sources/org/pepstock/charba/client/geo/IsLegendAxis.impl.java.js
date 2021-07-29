goog.module('org.pepstock.charba.client.geo.IsLegendAxis$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.geo.IsLegendAxis.$LambdaAdaptor$impl');
let Legend = goog.forwardDeclare('org.pepstock.charba.client.geo.Legend$impl');
let LegendAxisMapper = goog.forwardDeclare('org.pepstock.charba.client.geo.LegendAxisMapper$impl');

/**
 * @interface
 */
class IsLegendAxis {
 /** @abstract @return {LegendAxisMapper} */
 m_getMapper__() {}
 /** @abstract @return {Legend} */
 m_getLegend__() {}
 /** @return {IsLegendAxis} */
 static $adapt(/** ?function():LegendAxisMapper */ fn) {
  IsLegendAxis.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {Legend} */
 static m_getLegend__$default__org_pepstock_charba_client_geo_IsLegendAxis(/** !IsLegendAxis */ $thisArg) {
  IsLegendAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getMapper__(), null)) {
   return $thisArg.m_getMapper__().m_getLegend___$pp_org_pepstock_charba_client_geo();
  }
  return null;
 }
 
 static $clinit() {
  IsLegendAxis.$clinit = () =>{};
  IsLegendAxis.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_geo_IsLegendAxis = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_geo_IsLegendAxis;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.geo.IsLegendAxis.$LambdaAdaptor$impl');
 }
}
IsLegendAxis.$markImplementor(/**@type {Function}*/ (IsLegendAxis));
$Util.$setClassMetadataForInterface(IsLegendAxis, "org.pepstock.charba.client.geo.IsLegendAxis");

exports = IsLegendAxis;

//# sourceMappingURL=IsLegendAxis.js.map
