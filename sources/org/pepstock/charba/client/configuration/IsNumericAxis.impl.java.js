goog.module('org.pepstock.charba.client.configuration.IsNumericAxis$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.configuration.IsNumericAxis.$LambdaAdaptor$impl');

/**
 * @interface
 */
class IsNumericAxis {
 /** @abstract @return {Axis} */
 m_getAxisElement__() {}
 /** @abstract */
 m_setMin__double(/** number */ min) {}
 /** @abstract @return {number} */
 m_getMin__() {}
 /** @abstract */
 m_setMax__double(/** number */ max) {}
 /** @abstract @return {number} */
 m_getMax__() {}
 /** @abstract */
 m_setSuggestedMax__double(/** number */ suggestedMax) {}
 /** @abstract @return {number} */
 m_getSuggestedMax__() {}
 /** @abstract */
 m_setSuggestedMin__double(/** number */ suggestedMin) {}
 /** @abstract @return {number} */
 m_getSuggestedMin__() {}
 /** @return {IsNumericAxis} */
 static $adapt(/** ?function():Axis */ fn) {
  IsNumericAxis.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_setMin__$default__org_pepstock_charba_client_configuration_IsNumericAxis__double(/** !IsNumericAxis */ $thisArg, /** number */ min) {
  IsNumericAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getAxisElement__(), null)) {
   $thisArg.m_getAxisElement__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_setMin__double(min);
  }
 }
 /** @return {number} */
 static m_getMin__$default__org_pepstock_charba_client_configuration_IsNumericAxis(/** !IsNumericAxis */ $thisArg) {
  IsNumericAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getAxisElement__(), null)) {
   return $thisArg.m_getAxisElement__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getMin__();
  }
  return Defaults.m_get__().m_getScale__().m_getMin__();
 }
 
 static m_setMax__$default__org_pepstock_charba_client_configuration_IsNumericAxis__double(/** !IsNumericAxis */ $thisArg, /** number */ max) {
  IsNumericAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getAxisElement__(), null)) {
   $thisArg.m_getAxisElement__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_setMax__double(max);
  }
 }
 /** @return {number} */
 static m_getMax__$default__org_pepstock_charba_client_configuration_IsNumericAxis(/** !IsNumericAxis */ $thisArg) {
  IsNumericAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getAxisElement__(), null)) {
   return $thisArg.m_getAxisElement__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getMax__();
  }
  return Defaults.m_get__().m_getScale__().m_getMax__();
 }
 
 static m_setSuggestedMax__$default__org_pepstock_charba_client_configuration_IsNumericAxis__double(/** !IsNumericAxis */ $thisArg, /** number */ suggestedMax) {
  IsNumericAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getAxisElement__(), null)) {
   $thisArg.m_getAxisElement__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_setSuggestedMax__double(suggestedMax);
  }
 }
 /** @return {number} */
 static m_getSuggestedMax__$default__org_pepstock_charba_client_configuration_IsNumericAxis(/** !IsNumericAxis */ $thisArg) {
  IsNumericAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getAxisElement__(), null)) {
   return $thisArg.m_getAxisElement__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getSuggestedMax__();
  }
  return Defaults.m_get__().m_getScale__().m_getSuggestedMax__();
 }
 
 static m_setSuggestedMin__$default__org_pepstock_charba_client_configuration_IsNumericAxis__double(/** !IsNumericAxis */ $thisArg, /** number */ suggestedMin) {
  IsNumericAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getAxisElement__(), null)) {
   $thisArg.m_getAxisElement__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_setSuggestedMin__double(suggestedMin);
  }
 }
 /** @return {number} */
 static m_getSuggestedMin__$default__org_pepstock_charba_client_configuration_IsNumericAxis(/** !IsNumericAxis */ $thisArg) {
  IsNumericAxis.$clinit();
  if (!$Equality.$same($thisArg.m_getAxisElement__(), null)) {
   return $thisArg.m_getAxisElement__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getSuggestedMin__();
  }
  return Defaults.m_get__().m_getScale__().m_getSuggestedMin__();
 }
 
 static $clinit() {
  IsNumericAxis.$clinit = () =>{};
  IsNumericAxis.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_configuration_IsNumericAxis = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_configuration_IsNumericAxis;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.configuration.IsNumericAxis.$LambdaAdaptor$impl');
 }
}
IsNumericAxis.$markImplementor(/**@type {Function}*/ (IsNumericAxis));
$Util.$setClassMetadataForInterface(IsNumericAxis, "org.pepstock.charba.client.configuration.IsNumericAxis");

exports = IsNumericAxis;

//# sourceMappingURL=IsNumericAxis.js.map
