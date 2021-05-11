goog.module('org.pepstock.charba.client.configuration.IsLinearTick$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsNumericTick = goog.require('org.pepstock.charba.client.configuration.IsNumericTick$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let CountCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CountCallback$impl');
let MaxTicksLimitCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.MaxTicksLimitCallback$impl');
let PrecisionCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PrecisionCallback$impl');
let StepSizeCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.StepSizeCallback$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let LinearTickOptionsHandler = goog.forwardDeclare('org.pepstock.charba.client.configuration.LinearTickOptionsHandler$impl');

/**
 * @interface
 * @extends {IsNumericTick}
 */
class IsLinearTick {
 /** @abstract @return {Axis} */
 m_getAxis__() {}
 /** @abstract @return {LinearTickOptionsHandler} */
 m_getLinearTickOptionsHandler__() {}
 /** @abstract */
 m_setCount__int(/** number */ count) {}
 /** @abstract @return {number} */
 m_getCount__() {}
 /** @abstract */
 m_setMaxTicksLimit__int(/** number */ maxTicksLimit) {}
 /** @abstract @return {number} */
 m_getMaxTicksLimit__() {}
 /** @abstract */
 m_setStepSize__double(/** number */ stepSize) {}
 /** @abstract @return {number} */
 m_getStepSize__() {}
 /** @abstract */
 m_setPrecision__int(/** number */ precision) {}
 /** @abstract @return {number} */
 m_getPrecision__() {}
 /** @abstract @return {CountCallback} */
 m_getCountCallback__() {}
 /** @abstract */
 m_setCount__org_pepstock_charba_client_callbacks_CountCallback(/** CountCallback */ countCallback) {}
 /** @abstract @return {MaxTicksLimitCallback} */
 m_getMaxTicksLimitCallback__() {}
 /** @abstract */
 m_setMaxTicksLimit__org_pepstock_charba_client_callbacks_MaxTicksLimitCallback(/** MaxTicksLimitCallback */ maxTicksLimitCallback) {}
 /** @abstract @return {PrecisionCallback} */
 m_getPrecisionCallback__() {}
 /** @abstract */
 m_setPrecision__org_pepstock_charba_client_callbacks_PrecisionCallback(/** PrecisionCallback */ precisionCallback) {}
 /** @abstract @return {StepSizeCallback} */
 m_getStepSizeCallback__() {}
 /** @abstract */
 m_setStepSize__org_pepstock_charba_client_callbacks_StepSizeCallback(/** StepSizeCallback */ stepSizeCallback) {}
 
 static m_setCount__$default__org_pepstock_charba_client_configuration_IsLinearTick__int(/** !IsLinearTick */ $thisArg, /** number */ count) {
  IsLinearTick.$clinit();
  if (!$Equality.$same($thisArg.m_getAxis__(), null)) {
   $thisArg.m_setCount__org_pepstock_charba_client_callbacks_CountCallback(null);
   $thisArg.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTicks__().m_setCount__int(count);
  }
 }
 /** @return {number} */
 static m_getCount__$default__org_pepstock_charba_client_configuration_IsLinearTick(/** !IsLinearTick */ $thisArg) {
  IsLinearTick.$clinit();
  if (!$Equality.$same($thisArg.m_getAxis__(), null)) {
   return $thisArg.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTicks__().m_getCount__();
  }
  return Defaults.m_get__().m_getScale__().m_getTicks__().m_getCount__();
 }
 
 static m_setMaxTicksLimit__$default__org_pepstock_charba_client_configuration_IsLinearTick__int(/** !IsLinearTick */ $thisArg, /** number */ maxTicksLimit) {
  IsLinearTick.$clinit();
  if (!$Equality.$same($thisArg.m_getAxis__(), null)) {
   $thisArg.m_setMaxTicksLimit__org_pepstock_charba_client_callbacks_MaxTicksLimitCallback(null);
   $thisArg.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTicks__().m_setMaxTicksLimit__int(maxTicksLimit);
  }
 }
 /** @return {number} */
 static m_getMaxTicksLimit__$default__org_pepstock_charba_client_configuration_IsLinearTick(/** !IsLinearTick */ $thisArg) {
  IsLinearTick.$clinit();
  if (!$Equality.$same($thisArg.m_getAxis__(), null)) {
   return $thisArg.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTicks__().m_getMaxTicksLimit__();
  }
  return Defaults.m_get__().m_getScale__().m_getTicks__().m_getMaxTicksLimit__();
 }
 
 static m_setStepSize__$default__org_pepstock_charba_client_configuration_IsLinearTick__double(/** !IsLinearTick */ $thisArg, /** number */ stepSize) {
  IsLinearTick.$clinit();
  if (!$Equality.$same($thisArg.m_getAxis__(), null)) {
   $thisArg.m_setStepSize__org_pepstock_charba_client_callbacks_StepSizeCallback(null);
   $thisArg.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTicks__().m_setStepSize__double(stepSize);
  }
 }
 /** @return {number} */
 static m_getStepSize__$default__org_pepstock_charba_client_configuration_IsLinearTick(/** !IsLinearTick */ $thisArg) {
  IsLinearTick.$clinit();
  if (!$Equality.$same($thisArg.m_getAxis__(), null)) {
   return $thisArg.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTicks__().m_getStepSize__();
  }
  return Defaults.m_get__().m_getScale__().m_getTicks__().m_getStepSize__();
 }
 
 static m_setPrecision__$default__org_pepstock_charba_client_configuration_IsLinearTick__int(/** !IsLinearTick */ $thisArg, /** number */ precision) {
  IsLinearTick.$clinit();
  if (!$Equality.$same($thisArg.m_getAxis__(), null)) {
   $thisArg.m_setPrecision__org_pepstock_charba_client_callbacks_PrecisionCallback(null);
   $thisArg.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTicks__().m_setPrecision__int(precision);
  }
 }
 /** @return {number} */
 static m_getPrecision__$default__org_pepstock_charba_client_configuration_IsLinearTick(/** !IsLinearTick */ $thisArg) {
  IsLinearTick.$clinit();
  if (!$Equality.$same($thisArg.m_getAxis__(), null)) {
   return $thisArg.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTicks__().m_getPrecision__();
  }
  return Defaults.m_get__().m_getScale__().m_getTicks__().m_getPrecision__();
 }
 /** @return {CountCallback} */
 static m_getCountCallback__$default__org_pepstock_charba_client_configuration_IsLinearTick(/** !IsLinearTick */ $thisArg) {
  IsLinearTick.$clinit();
  if (!$Equality.$same($thisArg.m_getLinearTickOptionsHandler__(), null)) {
   return $thisArg.m_getLinearTickOptionsHandler__().m_getCountCallback___$pp_org_pepstock_charba_client_configuration();
  }
  return null;
 }
 
 static m_setCount__$default__org_pepstock_charba_client_configuration_IsLinearTick__org_pepstock_charba_client_callbacks_CountCallback(/** !IsLinearTick */ $thisArg, /** CountCallback */ countCallback) {
  IsLinearTick.$clinit();
  if (!$Equality.$same($thisArg.m_getLinearTickOptionsHandler__(), null)) {
   $thisArg.m_getLinearTickOptionsHandler__().m_setCount__org_pepstock_charba_client_callbacks_CountCallback_$pp_org_pepstock_charba_client_configuration(countCallback);
  }
 }
 /** @return {MaxTicksLimitCallback} */
 static m_getMaxTicksLimitCallback__$default__org_pepstock_charba_client_configuration_IsLinearTick(/** !IsLinearTick */ $thisArg) {
  IsLinearTick.$clinit();
  if (!$Equality.$same($thisArg.m_getLinearTickOptionsHandler__(), null)) {
   return $thisArg.m_getLinearTickOptionsHandler__().m_getMaxTicksLimitCallback___$pp_org_pepstock_charba_client_configuration();
  }
  return null;
 }
 
 static m_setMaxTicksLimit__$default__org_pepstock_charba_client_configuration_IsLinearTick__org_pepstock_charba_client_callbacks_MaxTicksLimitCallback(/** !IsLinearTick */ $thisArg, /** MaxTicksLimitCallback */ maxTicksLimitCallback) {
  IsLinearTick.$clinit();
  if (!$Equality.$same($thisArg.m_getLinearTickOptionsHandler__(), null)) {
   $thisArg.m_getLinearTickOptionsHandler__().m_setMaxTicksLimit__org_pepstock_charba_client_callbacks_MaxTicksLimitCallback_$pp_org_pepstock_charba_client_configuration(maxTicksLimitCallback);
  }
 }
 /** @return {PrecisionCallback} */
 static m_getPrecisionCallback__$default__org_pepstock_charba_client_configuration_IsLinearTick(/** !IsLinearTick */ $thisArg) {
  IsLinearTick.$clinit();
  if (!$Equality.$same($thisArg.m_getLinearTickOptionsHandler__(), null)) {
   return $thisArg.m_getLinearTickOptionsHandler__().m_getPrecisionCallback___$pp_org_pepstock_charba_client_configuration();
  }
  return null;
 }
 
 static m_setPrecision__$default__org_pepstock_charba_client_configuration_IsLinearTick__org_pepstock_charba_client_callbacks_PrecisionCallback(/** !IsLinearTick */ $thisArg, /** PrecisionCallback */ precisionCallback) {
  IsLinearTick.$clinit();
  if (!$Equality.$same($thisArg.m_getLinearTickOptionsHandler__(), null)) {
   $thisArg.m_getLinearTickOptionsHandler__().m_setPrecision__org_pepstock_charba_client_callbacks_PrecisionCallback_$pp_org_pepstock_charba_client_configuration(precisionCallback);
  }
 }
 /** @return {StepSizeCallback} */
 static m_getStepSizeCallback__$default__org_pepstock_charba_client_configuration_IsLinearTick(/** !IsLinearTick */ $thisArg) {
  IsLinearTick.$clinit();
  if (!$Equality.$same($thisArg.m_getLinearTickOptionsHandler__(), null)) {
   return $thisArg.m_getLinearTickOptionsHandler__().m_getStepSizeCallback___$pp_org_pepstock_charba_client_configuration();
  }
  return null;
 }
 
 static m_setStepSize__$default__org_pepstock_charba_client_configuration_IsLinearTick__org_pepstock_charba_client_callbacks_StepSizeCallback(/** !IsLinearTick */ $thisArg, /** StepSizeCallback */ stepSizeCallback) {
  IsLinearTick.$clinit();
  if (!$Equality.$same($thisArg.m_getLinearTickOptionsHandler__(), null)) {
   $thisArg.m_getLinearTickOptionsHandler__().m_setStepSize__org_pepstock_charba_client_callbacks_StepSizeCallback_$pp_org_pepstock_charba_client_configuration(stepSizeCallback);
  }
 }
 
 static $clinit() {
  IsLinearTick.$clinit = () =>{};
  IsLinearTick.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsNumericTick.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_configuration_IsLinearTick = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_configuration_IsLinearTick;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
 }
}
IsLinearTick.$markImplementor(/**@type {Function}*/ (IsLinearTick));
$Util.$setClassMetadataForInterface(IsLinearTick, "org.pepstock.charba.client.configuration.IsLinearTick");

exports = IsLinearTick;

//# sourceMappingURL=IsLinearTick.js.map
