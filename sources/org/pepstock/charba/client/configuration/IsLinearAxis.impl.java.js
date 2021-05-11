goog.module('org.pepstock.charba.client.configuration.IsLinearAxis$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsNumericAxis = goog.require('org.pepstock.charba.client.configuration.IsNumericAxis$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.configuration.IsLinearAxis.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {IsNumericAxis}
 */
class IsLinearAxis {
 /** @abstract */
 m_setBeginAtZero__boolean(/** boolean */ beginAtZero) {}
 /** @abstract @return {boolean} */
 m_isBeginAtZero__() {}
 /** @return {IsLinearAxis} */
 static $adapt(/** ?function():Axis */ fn) {
  IsLinearAxis.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_setBeginAtZero__$default__org_pepstock_charba_client_configuration_IsLinearAxis__boolean(/** !IsLinearAxis */ $thisArg, /** boolean */ beginAtZero) {
  IsLinearAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getAxisElement__(), null)) {
   $thisArg.m_getAxisElement__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_setBeginAtZero__boolean(beginAtZero);
  }
 }
 /** @return {boolean} */
 static m_isBeginAtZero__$default__org_pepstock_charba_client_configuration_IsLinearAxis(/** !IsLinearAxis */ $thisArg) {
  IsLinearAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getAxisElement__(), null)) {
   return $thisArg.m_getAxisElement__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_isBeginAtZero__();
  }
  return Defaults.m_get__().m_getScale__().m_isBeginAtZero__();
 }
 
 static $clinit() {
  IsLinearAxis.$clinit = () =>{};
  IsLinearAxis.$loadModules();
  IsNumericAxis.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsNumericAxis.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_configuration_IsLinearAxis = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_configuration_IsLinearAxis;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.configuration.IsLinearAxis.$LambdaAdaptor$impl');
 }
}
IsLinearAxis.$markImplementor(/**@type {Function}*/ (IsLinearAxis));
$Util.$setClassMetadataForInterface(IsLinearAxis, "org.pepstock.charba.client.configuration.IsLinearAxis");

exports = IsLinearAxis;

//# sourceMappingURL=IsLinearAxis.js.map
