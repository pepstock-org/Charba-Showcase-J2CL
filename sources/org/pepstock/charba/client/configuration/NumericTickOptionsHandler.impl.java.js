goog.module('org.pepstock.charba.client.configuration.NumericTickOptionsHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AxisContainer = goog.require('org.pepstock.charba.client.configuration.AxisContainer$impl');

let NumberFormatCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.NumberFormatCallback$impl');
let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.NumericTickOptionsHandler.Property$impl');
let IsDefaultNumberFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions$impl');
let NumberFormatItem = goog.forwardDeclare('org.pepstock.charba.client.items.NumberFormatItem$impl');
let ExtendedScale = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedScale$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class NumericTickOptionsHandler extends AxisContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):?>}*/
  this.f_numberFormatCallbackProxy__org_pepstock_charba_client_configuration_NumericTickOptionsHandler_;
  /**@type {NumberFormatCallback}*/
  this.f_numberFormatCallback__org_pepstock_charba_client_configuration_NumericTickOptionsHandler_;
 }
 /** @return {!NumericTickOptionsHandler} */
 static $create__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  NumericTickOptionsHandler.$clinit();
  let $instance = new NumericTickOptionsHandler();
  $instance.$ctor__org_pepstock_charba_client_configuration_NumericTickOptionsHandler__org_pepstock_charba_client_configuration_Axis(axis);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_NumericTickOptionsHandler__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  this.$ctor__org_pepstock_charba_client_configuration_AxisContainer__org_pepstock_charba_client_configuration_Axis(axis);
  this.$init___$p_org_pepstock_charba_client_configuration_NumericTickOptionsHandler();
  this.f_numberFormatCallbackProxy__org_pepstock_charba_client_configuration_NumericTickOptionsHandler_.callback = (/** ? */ context) =>{
   return this.m_onNumberFormat__org_pepstock_charba_client_callbacks_ScaleContext__org_pepstock_charba_client_callbacks_NumberFormatCallback__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions_$p_org_pepstock_charba_client_configuration_NumericTickOptionsHandler(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context), this.m_getNumberFormatCallback___$pp_org_pepstock_charba_client_configuration(), this.m_getAxis__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getTicks__().m_getNumberFormat__());
  };
 }
 /** @return {NumberFormatCallback} */
 m_getNumberFormatCallback___$pp_org_pepstock_charba_client_configuration() {
  return this.f_numberFormatCallback__org_pepstock_charba_client_configuration_NumericTickOptionsHandler_;
 }
 
 m_setNumberFormat__org_pepstock_charba_client_callbacks_NumberFormatCallback_$pp_org_pepstock_charba_client_configuration(/** NumberFormatCallback */ numberFormatCallback) {
  this.f_numberFormatCallback__org_pepstock_charba_client_configuration_NumericTickOptionsHandler_ = numberFormatCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getAxis__().m_getConfiguration__(), ExtendedScale)).m_getTicks__(), Property.f_FORMAT__org_pepstock_charba_client_configuration_NumericTickOptionsHandler_Property, numberFormatCallback, this.f_numberFormatCallbackProxy__org_pepstock_charba_client_configuration_NumericTickOptionsHandler_);
 }
 
 m_setNumberFormat__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(/** Function */ numberFormatCallback) {
  this.m_setNumberFormat__org_pepstock_charba_client_callbacks_NumberFormatCallback_$pp_org_pepstock_charba_client_configuration(/**@type {NumberFormatCallback}*/ (null));
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getAxis__().m_getConfiguration__(), ExtendedScale)).m_getTicks__(), Property.f_FORMAT__org_pepstock_charba_client_configuration_NumericTickOptionsHandler_Property, numberFormatCallback);
 }
 /** @return {?} */
 m_onNumberFormat__org_pepstock_charba_client_callbacks_ScaleContext__org_pepstock_charba_client_callbacks_NumberFormatCallback__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions_$p_org_pepstock_charba_client_configuration_NumericTickOptionsHandler(/** ScaleContext */ context, /** NumberFormatCallback */ callback, /** IsDefaultNumberFormatOptions */ defaultValue) {
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(defaultValue, "Default number format item");
  let result = /**@type {NumberFormatItem}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(context, callback, defaultValue.m_create__()), NumberFormatItem));
  return result.m_nativeObject__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_NumericTickOptionsHandler() {
  this.f_numberFormatCallbackProxy__org_pepstock_charba_client_configuration_NumericTickOptionsHandler_ = /**@type {CharbaCallbackProxy<?function(?):?>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_numberFormatCallback__org_pepstock_charba_client_configuration_NumericTickOptionsHandler_ = null;
 }
 
 static $clinit() {
  NumericTickOptionsHandler.$clinit = () =>{};
  NumericTickOptionsHandler.$loadModules();
  AxisContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NumericTickOptionsHandler;
 }
 
 static $loadModules() {
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Property = goog.module.get('org.pepstock.charba.client.configuration.NumericTickOptionsHandler.Property$impl');
  NumberFormatItem = goog.module.get('org.pepstock.charba.client.items.NumberFormatItem$impl');
  ExtendedScale = goog.module.get('org.pepstock.charba.client.options.ExtendedScale$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(NumericTickOptionsHandler, "org.pepstock.charba.client.configuration.NumericTickOptionsHandler");

exports = NumericTickOptionsHandler;

//# sourceMappingURL=NumericTickOptionsHandler.js.map
