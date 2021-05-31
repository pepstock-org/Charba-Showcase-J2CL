goog.module('org.pepstock.charba.client.configuration.Layout$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationOptionsContainer = goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer$impl');
const IsScriptablePaddingProvider = goog.require('org.pepstock.charba.client.options.IsScriptablePaddingProvider$impl');

let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let PaddingCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PaddingCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let IsProvider = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.Layout.Property$impl');
let Padding = goog.forwardDeclare('org.pepstock.charba.client.configuration.Padding$impl');
let ExtendedOptions = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsScriptablePaddingProvider<ChartContext>}
 */
class Layout extends ConfigurationOptionsContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):?>}*/
  this.f_paddingCallbackProxy__org_pepstock_charba_client_configuration_Layout_;
  /**@type {PaddingCallback<ChartContext>}*/
  this.f_paddingCallback__org_pepstock_charba_client_configuration_Layout_;
  /**@type {Padding}*/
  this.f_padding__org_pepstock_charba_client_configuration_Layout_;
 }
 /** @return {!Layout} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  Layout.$clinit();
  let $instance = new Layout();
  $instance.$ctor__org_pepstock_charba_client_configuration_Layout__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Layout__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  this.$init___$p_org_pepstock_charba_client_configuration_Layout();
  this.f_padding__org_pepstock_charba_client_configuration_Layout_ = Padding.$create__org_pepstock_charba_client_options_IsScriptablePaddingProvider__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(this, IsProvider.$adapt(() =>{
   return this.m_getConfiguration__().m_getLayout__().m_getPadding__();
  }));
  this.f_paddingCallbackProxy__org_pepstock_charba_client_configuration_Layout_.callback = (/** ? */ context) =>{
   return ScriptableUtils.m_getOptionValueAsPadding__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_defaults_IsDefaultPadding(this.m_getOptions__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context), this.m_getPaddingCallback__(), this.m_getOptions__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getLayout__().m_getPadding__()).m_nativeObject__();
  };
 }
 /** @return {Padding} */
 m_getPadding__() {
  return this.f_padding__org_pepstock_charba_client_configuration_Layout_;
 }
 /** @override @return {PaddingCallback<ChartContext>} */
 m_getPaddingCallback__() {
  return this.f_paddingCallback__org_pepstock_charba_client_configuration_Layout_;
 }
 /** @override */
 m_setPadding__org_pepstock_charba_client_callbacks_PaddingCallback(/** PaddingCallback<ChartContext> */ paddingCallback) {
  this.f_paddingCallback__org_pepstock_charba_client_configuration_Layout_ = paddingCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getOptions__().m_getConfiguration__(), ExtendedOptions)).m_getLayout__(), Property.f_PADDING__org_pepstock_charba_client_configuration_Layout_Property, paddingCallback, this.f_paddingCallbackProxy__org_pepstock_charba_client_configuration_Layout_);
 }
 /** @override */
 m_setPadding__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ paddingCallback) {
  this.m_setPadding__org_pepstock_charba_client_callbacks_PaddingCallback(/**@type {PaddingCallback<ChartContext>}*/ (null));
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedOptions}*/ ($Casts.$to(this.m_getOptions__().m_getConfiguration__(), ExtendedOptions)).m_getLayout__(), Property.f_PADDING__org_pepstock_charba_client_configuration_Layout_Property, paddingCallback);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_Layout() {
  this.f_paddingCallbackProxy__org_pepstock_charba_client_configuration_Layout_ = /**@type {CharbaCallbackProxy<?function(?):?>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_paddingCallback__org_pepstock_charba_client_configuration_Layout_ = null;
 }
 
 static $clinit() {
  Layout.$clinit = () =>{};
  Layout.$loadModules();
  ConfigurationOptionsContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Layout;
 }
 
 static $loadModules() {
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  IsProvider = goog.module.get('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
  Property = goog.module.get('org.pepstock.charba.client.configuration.Layout.Property$impl');
  Padding = goog.module.get('org.pepstock.charba.client.configuration.Padding$impl');
  ExtendedOptions = goog.module.get('org.pepstock.charba.client.options.ExtendedOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsScriptablePaddingProvider.$markImplementor(Layout);
$Util.$setClassMetadata(Layout, "org.pepstock.charba.client.configuration.Layout");

exports = Layout;

//# sourceMappingURL=Layout.js.map
