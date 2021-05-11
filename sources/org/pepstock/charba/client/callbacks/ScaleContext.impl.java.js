goog.module('org.pepstock.charba.client.callbacks.ScaleContext$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartContext = goog.require('org.pepstock.charba.client.callbacks.ChartContext$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CallbacksEnvelop = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CallbacksEnvelop$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext.Property$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let IsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.commons.IsEnvelop$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let ConfigurationEnvelop = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
let ScaleItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleItem$impl');
let ScaleTickItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleTickItem$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ScaleContext extends ChartContext {
 /** @protected */
 constructor() {
  super();
  /**@type {Axis}*/
  this.f_axis__org_pepstock_charba_client_callbacks_ScaleContext_;
  /**@type {ScaleItem}*/
  this.f_scale__org_pepstock_charba_client_callbacks_ScaleContext_;
  /**@type {ScaleTickItem}*/
  this.f_tick__org_pepstock_charba_client_callbacks_ScaleContext_;
 }
 /** @return {!ScaleContext} */
 static $create__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/** Axis */ axis, /** ConfigurationEnvelop<?> */ envelop) {
  ScaleContext.$clinit();
  let $instance = new ScaleContext();
  $instance.$ctor__org_pepstock_charba_client_callbacks_ScaleContext__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_ConfigurationEnvelop(axis, envelop);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_callbacks_ScaleContext__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/** Axis */ axis, /** ConfigurationEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {ConfigurationEnvelop<?>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), ConfigurationEnvelop)).m_getContent__()));
  this.$init___$p_org_pepstock_charba_client_callbacks_ScaleContext();
  this.f_axis__org_pepstock_charba_client_callbacks_ScaleContext_ = /**@type {Axis}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(axis, "Axis argument"), Axis));
 }
 /** @return {Axis} */
 m_getAxis__() {
  return this.f_axis__org_pepstock_charba_client_callbacks_ScaleContext_;
 }
 /** @return {number} */
 m_getIndex__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_INDEX__org_pepstock_charba_client_callbacks_ScaleContext_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {ScaleItem} */
 m_getScale__() {
  if ($Equality.$same(this.f_scale__org_pepstock_charba_client_callbacks_ScaleContext_, null)) {
   this.f_scale__org_pepstock_charba_client_callbacks_ScaleContext_ = ScaleItem.$create__org_pepstock_charba_client_callbacks_CallbacksEnvelop(/**@type {!CallbacksEnvelop<?>}*/ (CallbacksEnvelop.$create__java_lang_Object__boolean(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_SCALE__org_pepstock_charba_client_callbacks_ScaleContext_Property), true)));
  }
  return this.f_scale__org_pepstock_charba_client_callbacks_ScaleContext_;
 }
 /** @return {ScaleTickItem} */
 m_getTick__() {
  if ($Equality.$same(this.f_tick__org_pepstock_charba_client_callbacks_ScaleContext_, null)) {
   this.f_tick__org_pepstock_charba_client_callbacks_ScaleContext_ = ScaleTickItem.f_FACTORY__org_pepstock_charba_client_items_ScaleTickItem.m_create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_TICK__org_pepstock_charba_client_callbacks_ScaleContext_Property));
  }
  return this.f_tick__org_pepstock_charba_client_callbacks_ScaleContext_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_callbacks_ScaleContext() {
  this.f_scale__org_pepstock_charba_client_callbacks_ScaleContext_ = null;
  this.f_tick__org_pepstock_charba_client_callbacks_ScaleContext_ = null;
 }
 
 static $clinit() {
  ScaleContext.$clinit = () =>{};
  ScaleContext.$loadModules();
  ChartContext.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScaleContext;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  CallbacksEnvelop = goog.module.get('org.pepstock.charba.client.callbacks.CallbacksEnvelop$impl');
  Property = goog.module.get('org.pepstock.charba.client.callbacks.ScaleContext.Property$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  IsEnvelop = goog.module.get('org.pepstock.charba.client.commons.IsEnvelop$impl');
  Axis = goog.module.get('org.pepstock.charba.client.configuration.Axis$impl');
  ConfigurationEnvelop = goog.module.get('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
  ScaleItem = goog.module.get('org.pepstock.charba.client.items.ScaleItem$impl');
  ScaleTickItem = goog.module.get('org.pepstock.charba.client.items.ScaleTickItem$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ScaleContext, "org.pepstock.charba.client.callbacks.ScaleContext");

exports = ScaleContext;

//# sourceMappingURL=ScaleContext.js.map
