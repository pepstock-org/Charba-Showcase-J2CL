goog.module('org.pepstock.charba.client.configuration.LinearTickOptionsHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AxisContainer = goog.require('org.pepstock.charba.client.configuration.AxisContainer$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let CountCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CountCallback$impl');
let MaxTicksLimitCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.MaxTicksLimitCallback$impl');
let PrecisionCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PrecisionCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let StepSizeCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.StepSizeCallback$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.LinearTickOptionsHandler.Property$impl');
let ExtendedScale = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedScale$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class LinearTickOptionsHandler extends AxisContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/
  this.f_countCallbackProxy__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/
  this.f_maxTicksLimitCallbackProxy__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/
  this.f_precisionCallbackProxy__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/
  this.f_stepSizeCallbackProxy__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_;
  /**@type {CountCallback}*/
  this.f_countCallback__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_;
  /**@type {MaxTicksLimitCallback}*/
  this.f_maxTicksLimitCallback__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_;
  /**@type {PrecisionCallback}*/
  this.f_precisionCallback__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_;
  /**@type {StepSizeCallback}*/
  this.f_stepSizeCallback__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_;
 }
 /** @return {!LinearTickOptionsHandler} */
 static $create__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  LinearTickOptionsHandler.$clinit();
  let $instance = new LinearTickOptionsHandler();
  $instance.$ctor__org_pepstock_charba_client_configuration_LinearTickOptionsHandler__org_pepstock_charba_client_configuration_Axis(axis);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_LinearTickOptionsHandler__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  this.$ctor__org_pepstock_charba_client_configuration_AxisContainer__org_pepstock_charba_client_configuration_Axis(axis);
  this.$init___$p_org_pepstock_charba_client_configuration_LinearTickOptionsHandler();
  this.f_countCallbackProxy__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_.callback = (/** Object */ contextFunction, /** ? */ context) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context), this.m_getCountCallback___$pp_org_pepstock_charba_client_configuration(), Integer.m_valueOf__int(this.m_getAxis__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getTicks__().m_getCount__())), Integer)).m_intValue__();
  };
  this.f_maxTicksLimitCallbackProxy__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_.callback = (/** Object */ contextFunction_1, /** ? */ context_1) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_1), this.m_getMaxTicksLimitCallback___$pp_org_pepstock_charba_client_configuration(), Integer.m_valueOf__int(this.m_getAxis__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getTicks__().m_getMaxTicksLimit__())), Integer)).m_intValue__();
  };
  this.f_precisionCallbackProxy__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_.callback = (/** Object */ contextFunction_2, /** ? */ context_2) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_2), this.m_getPrecisionCallback___$pp_org_pepstock_charba_client_configuration(), Integer.m_valueOf__int(this.m_getAxis__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getTicks__().m_getPrecision__())), Integer)).m_intValue__();
  };
  this.f_stepSizeCallbackProxy__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_.callback = (/** Object */ contextFunction_3, /** ? */ context_3) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_3), this.m_getStepSizeCallback___$pp_org_pepstock_charba_client_configuration(), this.m_getAxis__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getTicks__().m_getStepSize__()), Double)));
  };
 }
 /** @return {CountCallback} */
 m_getCountCallback___$pp_org_pepstock_charba_client_configuration() {
  return this.f_countCallback__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_;
 }
 
 m_setCount__org_pepstock_charba_client_callbacks_CountCallback_$pp_org_pepstock_charba_client_configuration(/** CountCallback */ countCallback) {
  this.f_countCallback__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_ = countCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getAxis__().m_getConfiguration__(), ExtendedScale)).m_getTicks__(), Property.f_COUNT__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_Property, countCallback, this.f_countCallbackProxy__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_);
 }
 /** @return {MaxTicksLimitCallback} */
 m_getMaxTicksLimitCallback___$pp_org_pepstock_charba_client_configuration() {
  return this.f_maxTicksLimitCallback__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_;
 }
 
 m_setMaxTicksLimit__org_pepstock_charba_client_callbacks_MaxTicksLimitCallback_$pp_org_pepstock_charba_client_configuration(/** MaxTicksLimitCallback */ maxTicksLimitCallback) {
  this.f_maxTicksLimitCallback__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_ = maxTicksLimitCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getAxis__().m_getConfiguration__(), ExtendedScale)).m_getTicks__(), Property.f_MAX_TICKS_LIMIT__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_Property, maxTicksLimitCallback, this.f_maxTicksLimitCallbackProxy__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_);
 }
 /** @return {PrecisionCallback} */
 m_getPrecisionCallback___$pp_org_pepstock_charba_client_configuration() {
  return this.f_precisionCallback__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_;
 }
 
 m_setPrecision__org_pepstock_charba_client_callbacks_PrecisionCallback_$pp_org_pepstock_charba_client_configuration(/** PrecisionCallback */ precisionCallback) {
  this.f_precisionCallback__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_ = precisionCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getAxis__().m_getConfiguration__(), ExtendedScale)).m_getTicks__(), Property.f_PRECISION__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_Property, precisionCallback, this.f_precisionCallbackProxy__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_);
 }
 /** @return {StepSizeCallback} */
 m_getStepSizeCallback___$pp_org_pepstock_charba_client_configuration() {
  return this.f_stepSizeCallback__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_;
 }
 
 m_setStepSize__org_pepstock_charba_client_callbacks_StepSizeCallback_$pp_org_pepstock_charba_client_configuration(/** StepSizeCallback */ stepSizeCallback) {
  this.f_stepSizeCallback__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_ = stepSizeCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getAxis__().m_getConfiguration__(), ExtendedScale)).m_getTicks__(), Property.f_STEP_SIZE__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_Property, stepSizeCallback, this.f_stepSizeCallbackProxy__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_LinearTickOptionsHandler() {
  this.f_countCallbackProxy__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_ = /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_maxTicksLimitCallbackProxy__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_ = /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_precisionCallbackProxy__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_ = /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_stepSizeCallbackProxy__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_ = /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_countCallback__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_ = null;
  this.f_maxTicksLimitCallback__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_ = null;
  this.f_precisionCallback__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_ = null;
  this.f_stepSizeCallback__org_pepstock_charba_client_configuration_LinearTickOptionsHandler_ = null;
 }
 
 static $clinit() {
  LinearTickOptionsHandler.$clinit = () =>{};
  LinearTickOptionsHandler.$loadModules();
  AxisContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LinearTickOptionsHandler;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Property = goog.module.get('org.pepstock.charba.client.configuration.LinearTickOptionsHandler.Property$impl');
  ExtendedScale = goog.module.get('org.pepstock.charba.client.options.ExtendedScale$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(LinearTickOptionsHandler, "org.pepstock.charba.client.configuration.LinearTickOptionsHandler");

exports = LinearTickOptionsHandler;

//# sourceMappingURL=LinearTickOptionsHandler.js.map
