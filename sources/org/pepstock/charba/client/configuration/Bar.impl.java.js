goog.module('org.pepstock.charba.client.configuration.Bar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractConfigurationElement = goog.require('org.pepstock.charba.client.configuration.AbstractConfigurationElement$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let BorderRadiusCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderRadiusCallback$impl');
let BorderSkippedCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderSkippedCallback$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let EnableBorderRadiusCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.EnableBorderRadiusCallback$impl');
let PointStyleCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PointStyleCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.Bar.Property$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let IsDefaultBar = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultBar$impl');
let BorderSkipped = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderSkipped$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let PointStyleType = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyleType$impl');
let AbstractElement = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractElement$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @extends {AbstractConfigurationElement<IsDefaultBar>}
 */
class Bar extends AbstractConfigurationElement {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_borderSkippedCallbackProxy__org_pepstock_charba_client_configuration_Bar_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_borderRadiusCallbackProxy__org_pepstock_charba_client_configuration_Bar_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_hoverBorderRadiusCallbackProxy__org_pepstock_charba_client_configuration_Bar_;
  /**@type {CharbaCallbackProxy<?function(?):boolean>}*/
  this.f_enableBorderRadiusCallbackProxy__org_pepstock_charba_client_configuration_Bar_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_pointStyleCallbackProxy__org_pepstock_charba_client_configuration_Bar_;
  /**@type {BorderSkippedCallback}*/
  this.f_borderSkippedCallback__org_pepstock_charba_client_configuration_Bar_;
  /**@type {BorderRadiusCallback}*/
  this.f_borderRadiusCallback__org_pepstock_charba_client_configuration_Bar_;
  /**@type {BorderRadiusCallback}*/
  this.f_hoverBorderRadiusCallback__org_pepstock_charba_client_configuration_Bar_;
  /**@type {EnableBorderRadiusCallback}*/
  this.f_enableBorderRadiusCallback__org_pepstock_charba_client_configuration_Bar_;
  /**@type {PointStyleCallback}*/
  this.f_pointStyleCallback__org_pepstock_charba_client_configuration_Bar_;
 }
 /** @return {!Bar} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  Bar.$clinit();
  let $instance = new Bar();
  $instance.$ctor__org_pepstock_charba_client_configuration_Bar__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Bar__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractConfigurationElement__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  this.$init___$p_org_pepstock_charba_client_configuration_Bar();
  this.f_borderRadiusCallbackProxy__org_pepstock_charba_client_configuration_Bar_.callback = (/** ? */ context) =>{
   return this.m_onBorderRadius__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_BorderRadiusCallback__int_$pp_org_pepstock_charba_client_configuration(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context), this.m_getBorderRadiusCallback__(), this.m_getDefaultElement__().m_getBorderRadius__());
  };
  this.f_hoverBorderRadiusCallbackProxy__org_pepstock_charba_client_configuration_Bar_.callback = (/** ? */ context_1) =>{
   return this.m_onBorderRadius__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_BorderRadiusCallback__int_$pp_org_pepstock_charba_client_configuration(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_1), this.m_getHoverBorderRadiusCallback__(), this.m_getDefaultElement__().m_getHoverBorderRadius__());
  };
  this.f_borderSkippedCallbackProxy__org_pepstock_charba_client_configuration_Bar_.callback = (/** ? */ context_2) =>{
   return this.m_onBorderSkipped__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_enums_BorderSkipped_$p_org_pepstock_charba_client_configuration_Bar(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_2), this.m_getDefaultElement__().m_getBorderSkipped__());
  };
  this.f_enableBorderRadiusCallbackProxy__org_pepstock_charba_client_configuration_Bar_.callback = (/** ? */ context_3) =>{
   return Boolean.m_booleanValue__java_lang_Boolean(/**@type {?boolean}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_3), this.m_getEnableBorderRadiusCallback__(), this.m_getDefaultElement__().m_isEnableBorderRadius__()), Boolean)));
  };
  this.f_pointStyleCallbackProxy__org_pepstock_charba_client_configuration_Bar_.callback = (/** ? */ context_4) =>{
   return this.m_onPointStyle__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_PointStyleCallback__org_pepstock_charba_client_enums_PointStyle_$pp_org_pepstock_charba_client_configuration(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_4), this.m_getPointStyleCallback__(), this.m_getDefaultElement__().m_getPointStyle__());
  };
 }
 /** @override @return {AbstractElement<IsDefaultBar>} */
 m_getElement__() {
  return this.m_getConfiguration__().m_getElements__().m_getBar__();
 }
 /** @override @return {IsDefaultBar} */
 m_getDefaultElement__() {
  return this.m_getOptions__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getElements__().m_getBar__();
 }
 
 m_setBorderSkipped__boolean(/** boolean */ borderSkipped) {
  this.m_setBorderSkipped__org_pepstock_charba_client_callbacks_BorderSkippedCallback(/**@type {BorderSkippedCallback}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getBar__().m_setBorderSkipped__boolean(borderSkipped);
 }
 
 m_setBorderSkipped__org_pepstock_charba_client_enums_BorderSkipped(/** BorderSkipped */ borderSkipped) {
  this.m_setBorderSkipped__org_pepstock_charba_client_callbacks_BorderSkippedCallback(/**@type {BorderSkippedCallback}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getBar__().m_setBorderSkipped__org_pepstock_charba_client_enums_BorderSkipped(borderSkipped);
 }
 /** @return {BorderSkipped} */
 m_getBorderSkipped__() {
  return this.m_getConfiguration__().m_getElements__().m_getBar__().m_getBorderSkipped__();
 }
 
 m_setBorderRadius__int(/** number */ borderRadius) {
  this.m_setBorderRadius__org_pepstock_charba_client_callbacks_BorderRadiusCallback(/**@type {BorderRadiusCallback}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getBar__().m_setBorderRadius__int(borderRadius);
 }
 /** @return {number} */
 m_getBorderRadius__() {
  return this.m_getConfiguration__().m_getElements__().m_getBar__().m_getBorderRadius__();
 }
 
 m_setHoverBorderRadius__int(/** number */ borderRadius) {
  this.m_setHoverBorderRadius__org_pepstock_charba_client_callbacks_BorderRadiusCallback(/**@type {BorderRadiusCallback}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getBar__().m_setHoverBorderRadius__int(borderRadius);
 }
 /** @return {number} */
 m_getHoverBorderRadius__() {
  return this.m_getConfiguration__().m_getElements__().m_getBar__().m_getHoverBorderRadius__();
 }
 
 m_setPointStyle__org_pepstock_charba_client_enums_PointStyle(/** PointStyle */ pointStyle) {
  this.m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(/**@type {PointStyleCallback}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getBar__().m_setPointStyle__org_pepstock_charba_client_enums_PointStyle(pointStyle);
 }
 
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Img(/** HTMLImageElement */ pointStyle) {
  this.m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(/**@type {PointStyleCallback}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getBar__().m_setPointStyle__org_pepstock_charba_client_dom_elements_Img(pointStyle);
 }
 
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Canvas(/** HTMLCanvasElement */ pointStyle) {
  this.m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(/**@type {PointStyleCallback}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getBar__().m_setPointStyle__org_pepstock_charba_client_dom_elements_Canvas(pointStyle);
 }
 /** @return {PointStyleType} */
 m_getPointStyleType__() {
  return this.m_getConfiguration__().m_getElements__().m_getBar__().m_getPointStyleType__();
 }
 /** @return {PointStyle} */
 m_getPointStyle__() {
  return this.m_getConfiguration__().m_getElements__().m_getBar__().m_getPointStyle__();
 }
 /** @return {HTMLImageElement} */
 m_getPointStyleAsImage__() {
  return this.m_getConfiguration__().m_getElements__().m_getBar__().m_getPointStyleAsImage__();
 }
 /** @return {HTMLCanvasElement} */
 m_getPointStyleAsCanvas__() {
  return this.m_getConfiguration__().m_getElements__().m_getBar__().m_getPointStyleAsCanvas__();
 }
 
 m_setEnableBorderRadius__boolean(/** boolean */ enableBorderRadius) {
  this.m_setEnableBorderRadius__org_pepstock_charba_client_callbacks_EnableBorderRadiusCallback(/**@type {EnableBorderRadiusCallback}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getBar__().m_setEnableBorderRadius__boolean(enableBorderRadius);
 }
 /** @return {boolean} */
 m_isEnableBorderRadius__() {
  return this.m_getConfiguration__().m_getElements__().m_getBar__().m_isEnableBorderRadius__();
 }
 /** @return {BorderRadiusCallback} */
 m_getBorderRadiusCallback__() {
  return this.f_borderRadiusCallback__org_pepstock_charba_client_configuration_Bar_;
 }
 
 m_setBorderRadius__org_pepstock_charba_client_callbacks_BorderRadiusCallback(/** BorderRadiusCallback */ borderRadiusCallback) {
  this.f_borderRadiusCallback__org_pepstock_charba_client_configuration_Bar_ = borderRadiusCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_BORDER_RADIUS__org_pepstock_charba_client_configuration_Bar_Property, borderRadiusCallback, this.f_borderRadiusCallbackProxy__org_pepstock_charba_client_configuration_Bar_);
 }
 
 m_setBorderRadius__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderRadiusCallback) {
  this.m_setBorderRadius__org_pepstock_charba_client_callbacks_BorderRadiusCallback(/**@type {BorderRadiusCallback}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_BORDER_RADIUS__org_pepstock_charba_client_configuration_Bar_Property, borderRadiusCallback);
 }
 /** @return {BorderRadiusCallback} */
 m_getHoverBorderRadiusCallback__() {
  return this.f_hoverBorderRadiusCallback__org_pepstock_charba_client_configuration_Bar_;
 }
 
 m_setHoverBorderRadius__org_pepstock_charba_client_callbacks_BorderRadiusCallback(/** BorderRadiusCallback */ hoverBorderRadiusCallback) {
  this.f_hoverBorderRadiusCallback__org_pepstock_charba_client_configuration_Bar_ = hoverBorderRadiusCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_HOVER_BORDER_RADIUS__org_pepstock_charba_client_configuration_Bar_Property, hoverBorderRadiusCallback, this.f_hoverBorderRadiusCallbackProxy__org_pepstock_charba_client_configuration_Bar_);
 }
 
 m_setHoverBorderRadius__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ hoverBorderRadiusCallback) {
  this.m_setHoverBorderRadius__org_pepstock_charba_client_callbacks_BorderRadiusCallback(/**@type {BorderRadiusCallback}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_HOVER_BORDER_RADIUS__org_pepstock_charba_client_configuration_Bar_Property, hoverBorderRadiusCallback);
 }
 /** @return {BorderSkippedCallback} */
 m_getBorderSkippedCallback__() {
  return this.f_borderSkippedCallback__org_pepstock_charba_client_configuration_Bar_;
 }
 
 m_setBorderSkipped__org_pepstock_charba_client_callbacks_BorderSkippedCallback(/** BorderSkippedCallback */ borderSkippedCallback) {
  this.f_borderSkippedCallback__org_pepstock_charba_client_configuration_Bar_ = borderSkippedCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_BORDER_SKIPPED__org_pepstock_charba_client_configuration_Bar_Property, borderSkippedCallback, this.f_borderSkippedCallbackProxy__org_pepstock_charba_client_configuration_Bar_);
 }
 
 m_setBorderSkipped__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderSkippedCallback) {
  this.m_setBorderSkipped__org_pepstock_charba_client_callbacks_BorderSkippedCallback(/**@type {BorderSkippedCallback}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_BORDER_SKIPPED__org_pepstock_charba_client_configuration_Bar_Property, borderSkippedCallback);
 }
 /** @return {EnableBorderRadiusCallback} */
 m_getEnableBorderRadiusCallback__() {
  return this.f_enableBorderRadiusCallback__org_pepstock_charba_client_configuration_Bar_;
 }
 
 m_setEnableBorderRadius__org_pepstock_charba_client_callbacks_EnableBorderRadiusCallback(/** EnableBorderRadiusCallback */ enableBorderRadiusCallback) {
  this.f_enableBorderRadiusCallback__org_pepstock_charba_client_configuration_Bar_ = enableBorderRadiusCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_ENABLE_BORDER_RADIUS__org_pepstock_charba_client_configuration_Bar_Property, enableBorderRadiusCallback, this.f_enableBorderRadiusCallbackProxy__org_pepstock_charba_client_configuration_Bar_);
 }
 
 m_setEnableBorderRadius__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ enableBorderRadiusCallback) {
  this.m_setEnableBorderRadius__org_pepstock_charba_client_callbacks_EnableBorderRadiusCallback(/**@type {EnableBorderRadiusCallback}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_ENABLE_BORDER_RADIUS__org_pepstock_charba_client_configuration_Bar_Property, enableBorderRadiusCallback);
 }
 /** @return {PointStyleCallback} */
 m_getPointStyleCallback__() {
  return this.f_pointStyleCallback__org_pepstock_charba_client_configuration_Bar_;
 }
 
 m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(/** PointStyleCallback */ pointStyleCallback) {
  this.f_pointStyleCallback__org_pepstock_charba_client_configuration_Bar_ = pointStyleCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_POINT_STYLE__org_pepstock_charba_client_configuration_Bar_Property, pointStyleCallback, this.f_pointStyleCallbackProxy__org_pepstock_charba_client_configuration_Bar_);
 }
 
 m_setPointStyle__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ pointStyleCallback) {
  this.m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(/**@type {PointStyleCallback}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_POINT_STYLE__org_pepstock_charba_client_configuration_Bar_Property, pointStyleCallback);
 }
 /** @return {*} */
 m_onBorderSkipped__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_enums_BorderSkipped_$p_org_pepstock_charba_client_configuration_Bar(/** DatasetContext */ context, /** BorderSkipped */ defaultValue) {
  let value = /**@type {BorderSkipped}*/ ($Casts.$to(ScriptableUtils.m_getOptionValueAsString__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, this.m_getBorderSkippedCallback__()), BorderSkipped));
  let result = $Equality.$same(value, null) ? defaultValue : value;
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(BorderSkipped.f_FALSE__org_pepstock_charba_client_enums_BorderSkipped, result)) {
   return false;
  } else {
   return result.m_value__();
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_Bar() {
  this.f_borderSkippedCallbackProxy__org_pepstock_charba_client_configuration_Bar_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderRadiusCallbackProxy__org_pepstock_charba_client_configuration_Bar_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hoverBorderRadiusCallbackProxy__org_pepstock_charba_client_configuration_Bar_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_enableBorderRadiusCallbackProxy__org_pepstock_charba_client_configuration_Bar_ = /**@type {CharbaCallbackProxy<?function(?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_pointStyleCallbackProxy__org_pepstock_charba_client_configuration_Bar_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderSkippedCallback__org_pepstock_charba_client_configuration_Bar_ = null;
  this.f_borderRadiusCallback__org_pepstock_charba_client_configuration_Bar_ = null;
  this.f_hoverBorderRadiusCallback__org_pepstock_charba_client_configuration_Bar_ = null;
  this.f_enableBorderRadiusCallback__org_pepstock_charba_client_configuration_Bar_ = null;
  this.f_pointStyleCallback__org_pepstock_charba_client_configuration_Bar_ = null;
 }
 
 static $clinit() {
  Bar.$clinit = () =>{};
  Bar.$loadModules();
  AbstractConfigurationElement.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Bar;
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Property = goog.module.get('org.pepstock.charba.client.configuration.Bar.Property$impl');
  BorderSkipped = goog.module.get('org.pepstock.charba.client.enums.BorderSkipped$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(Bar, "org.pepstock.charba.client.configuration.Bar");

exports = Bar;

//# sourceMappingURL=Bar.js.map
