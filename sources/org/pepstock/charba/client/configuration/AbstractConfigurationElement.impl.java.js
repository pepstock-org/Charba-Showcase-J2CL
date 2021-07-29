goog.module('org.pepstock.charba.client.configuration.AbstractConfigurationElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationOptionsContainer = goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Number = goog.forwardDeclare('java.lang.Number$impl');
let BorderRadiusCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderRadiusCallback$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let PointStyleCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PointStyleCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let WidthCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.WidthCallback$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractConfigurationElement.Property$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let IsDefaultOptionsElement = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptionsElement$impl');
let Canvas_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let Img_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Img.$Overlay$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let AbstractElement = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractElement$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Numbers = goog.forwardDeclare('vmbootstrap.Numbers$impl');

/**
 * @abstract
 * @template D
 */
class AbstractConfigurationElement extends ConfigurationOptionsContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_hoverBackgroundColorCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_hoverBorderColorCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_hoverBorderWidthCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_backgroundColorCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_borderColorCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_borderWidthCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_;
  /**@type {ColorCallback<DatasetContext>}*/
  this.f_backgroundColorCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_;
  /**@type {ColorCallback<DatasetContext>}*/
  this.f_borderColorCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_;
  /**@type {WidthCallback<DatasetContext>}*/
  this.f_borderWidthCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_;
  /**@type {ColorCallback<DatasetContext>}*/
  this.f_hoverBackgroundColorCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_;
  /**@type {ColorCallback<DatasetContext>}*/
  this.f_hoverBorderColorCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_;
  /**@type {WidthCallback<DatasetContext>}*/
  this.f_hoverBorderWidthCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_;
 }
 
 $ctor__org_pepstock_charba_client_configuration_AbstractConfigurationElement__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  this.$init___$p_org_pepstock_charba_client_configuration_AbstractConfigurationElement();
  this.f_backgroundColorCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_.callback = (/** ? */ context) =>{
   return ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context), this.m_getBackgroundColorCallback__(), /**@type {IsDefaultOptionsElement}*/ (this.m_getDefaultElement__()).m_getBackgroundColorAsString__());
  };
  this.f_borderColorCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_.callback = (/** ? */ context_1) =>{
   return ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String__boolean(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_1), this.m_getBorderColorCallback__(), /**@type {IsDefaultOptionsElement}*/ (this.m_getDefaultElement__()).m_getBorderColorAsString__(), false);
  };
  this.f_borderWidthCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_.callback = (/** ? */ context_2) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_2), this.m_getBorderWidthCallback__(), Integer.m_valueOf__int(/**@type {IsDefaultOptionsElement}*/ (this.m_getDefaultElement__()).m_getBorderWidth__())), Integer)).m_intValue__();
  };
  this.f_hoverBackgroundColorCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_.callback = (/** ? */ context_3) =>{
   return ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_3), this.m_getHoverBackgroundColorCallback__(), /**@type {IsDefaultOptionsElement}*/ (this.m_getDefaultElement__()).m_getHoverBackgroundColorAsString__());
  };
  this.f_hoverBorderColorCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_.callback = (/** ? */ context_4) =>{
   return ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String__boolean(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_4), this.m_getHoverBorderColorCallback__(), /**@type {IsDefaultOptionsElement}*/ (this.m_getDefaultElement__()).m_getHoverBorderColorAsString__(), false);
  };
  this.f_hoverBorderWidthCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_.callback = (/** ? */ context_5) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_5), this.m_getHoverBorderWidthCallback__(), Integer.m_valueOf__int(/**@type {IsDefaultOptionsElement}*/ (this.m_getDefaultElement__()).m_getHoverBorderWidth__())), Integer)).m_intValue__();
  };
 }
 /** @abstract @return {AbstractElement<D>} */
 m_getElement__() {}
 /** @abstract @return {D} */
 m_getDefaultElement__() {}
 /** @return {DatasetContext} */
 m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(/** ? */ context) {
  return DatasetContext.$create__org_pepstock_charba_client_commons_NativeObject(context);
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backgroundColor) {
  this.m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_getElement__().m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(backgroundColor);
 }
 
 m_setBackgroundColor__java_lang_String(/** ?string */ backgroundColor) {
  this.m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_getElement__().m_setBackgroundColor__java_lang_String(backgroundColor);
 }
 /** @return {?string} */
 m_getBackgroundColorAsString__() {
  return this.m_getElement__().m_getBackgroundColorAsString__();
 }
 /** @return {IsColor} */
 m_getBackgroundColor__() {
  return this.m_getElement__().m_getBackgroundColor__();
 }
 
 m_setBorderWidth__int(/** number */ borderWidth) {
  this.m_setBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/**@type {WidthCallback<DatasetContext>}*/ (null));
  this.m_getElement__().m_setBorderWidth__int(borderWidth);
 }
 /** @return {number} */
 m_getBorderWidth__() {
  return this.m_getElement__().m_getBorderWidth__();
 }
 
 m_setBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ borderColor) {
  this.m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_getElement__().m_setBorderColor__org_pepstock_charba_client_colors_IsColor(borderColor);
 }
 
 m_setBorderColor__java_lang_String(/** ?string */ borderColor) {
  this.m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_getElement__().m_setBorderColor__java_lang_String(borderColor);
 }
 /** @return {?string} */
 m_getBorderColorAsString__() {
  return this.m_getElement__().m_getBorderColorAsString__();
 }
 /** @return {IsColor} */
 m_getBorderColor__() {
  return this.m_getElement__().m_getBorderColor__();
 }
 
 m_setHoverBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backgroundColor) {
  this.m_getElement__().m_setHoverBackgroundColor__org_pepstock_charba_client_colors_IsColor(backgroundColor);
 }
 
 m_setHoverBackgroundColor__java_lang_String(/** ?string */ backgroundColor) {
  this.m_getElement__().m_setHoverBackgroundColor__java_lang_String(backgroundColor);
 }
 /** @return {?string} */
 m_getHoverBackgroundColorAsString__() {
  return this.m_getElement__().m_getHoverBackgroundColorAsString__();
 }
 /** @return {IsColor} */
 m_getHoverBackgroundColor__() {
  return this.m_getElement__().m_getHoverBackgroundColor__();
 }
 
 m_setHoverBorderWidth__int(/** number */ borderWidth) {
  this.m_getElement__().m_setHoverBorderWidth__int(borderWidth);
 }
 /** @return {number} */
 m_getHoverBorderWidth__() {
  return this.m_getElement__().m_getHoverBorderWidth__();
 }
 
 m_setHoverBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ borderColor) {
  this.m_getElement__().m_setHoverBorderColor__org_pepstock_charba_client_colors_IsColor(borderColor);
 }
 
 m_setHoverBorderColor__java_lang_String(/** ?string */ borderColor) {
  this.m_getElement__().m_setHoverBorderColor__java_lang_String(borderColor);
 }
 /** @return {?string} */
 m_getHoverBorderColorAsString__() {
  return this.m_getElement__().m_getHoverBorderColorAsString__();
 }
 /** @return {IsColor} */
 m_getHoverBorderColor__() {
  return this.m_getElement__().m_getHoverBorderColor__();
 }
 /** @return {ColorCallback<DatasetContext>} */
 m_getBackgroundColorCallback__() {
  return this.f_backgroundColorCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_;
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<DatasetContext> */ backgroundColorCallback) {
  this.f_backgroundColorCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_ = backgroundColorCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_configuration_AbstractConfigurationElement_Property, backgroundColorCallback, this.f_backgroundColorCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_);
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ backgroundColorCallback) {
  this.m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_configuration_AbstractConfigurationElement_Property, backgroundColorCallback);
 }
 /** @return {ColorCallback<DatasetContext>} */
 m_getBorderColorCallback__() {
  return this.f_borderColorCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_;
 }
 
 m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<DatasetContext> */ borderColorCallback) {
  this.f_borderColorCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_ = borderColorCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_BORDER_COLOR__org_pepstock_charba_client_configuration_AbstractConfigurationElement_Property, borderColorCallback, this.f_borderColorCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_);
 }
 
 m_setBorderColor__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderColorCallback) {
  this.m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_BORDER_COLOR__org_pepstock_charba_client_configuration_AbstractConfigurationElement_Property, borderColorCallback);
 }
 /** @return {WidthCallback<DatasetContext>} */
 m_getBorderWidthCallback__() {
  return this.f_borderWidthCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_;
 }
 
 m_setBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/** WidthCallback<DatasetContext> */ borderWidthCallback) {
  this.f_borderWidthCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_ = borderWidthCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_BORDER_WIDTH__org_pepstock_charba_client_configuration_AbstractConfigurationElement_Property, borderWidthCallback, this.f_borderWidthCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_);
 }
 
 m_setBorderWidth__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderWidthCallback) {
  this.m_setBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/**@type {WidthCallback<DatasetContext>}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_BORDER_WIDTH__org_pepstock_charba_client_configuration_AbstractConfigurationElement_Property, borderWidthCallback);
 }
 /** @return {ColorCallback<DatasetContext>} */
 m_getHoverBackgroundColorCallback__() {
  return this.f_hoverBackgroundColorCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_;
 }
 
 m_setHoverBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<DatasetContext> */ hoverBackgroundColorCallback) {
  this.f_hoverBackgroundColorCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_ = hoverBackgroundColorCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_configuration_AbstractConfigurationElement_Property, hoverBackgroundColorCallback, this.f_hoverBackgroundColorCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_);
 }
 
 m_setHoverBackgroundColor__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ hoverBackgroundColorCallback) {
  this.m_setHoverBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_configuration_AbstractConfigurationElement_Property, hoverBackgroundColorCallback);
 }
 /** @return {ColorCallback<DatasetContext>} */
 m_getHoverBorderColorCallback__() {
  return this.f_hoverBorderColorCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_;
 }
 
 m_setHoverBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<DatasetContext> */ hoverBorderColorCallback) {
  this.f_hoverBorderColorCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_ = hoverBorderColorCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_configuration_AbstractConfigurationElement_Property, hoverBorderColorCallback, this.f_hoverBorderColorCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_);
 }
 
 m_setHoverBorderColor__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ hoverBorderColorCallback) {
  this.m_setHoverBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_configuration_AbstractConfigurationElement_Property, hoverBorderColorCallback);
 }
 /** @return {WidthCallback<DatasetContext>} */
 m_getHoverBorderWidthCallback__() {
  return this.f_hoverBorderWidthCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_;
 }
 
 m_setHoverBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/** WidthCallback<DatasetContext> */ hoverBorderWidthCallback) {
  this.f_hoverBorderWidthCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_ = hoverBorderWidthCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_configuration_AbstractConfigurationElement_Property, hoverBorderWidthCallback, this.f_hoverBorderWidthCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_);
 }
 
 m_setHoverBorderWidth__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ hoverBorderWidthCallback) {
  this.m_setHoverBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/**@type {WidthCallback<DatasetContext>}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_configuration_AbstractConfigurationElement_Property, hoverBorderWidthCallback);
 }
 /** @return {number} */
 m_onBorderRadius__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_BorderRadiusCallback__int_$pp_org_pepstock_charba_client_configuration(/** DatasetContext */ context, /** BorderRadiusCallback */ callback, /** number */ defaultValue) {
  let value = ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, callback);
  if (Number.$isInstance(value)) {
   let number_1 = /**@type {(Number|number)}*/ ($Casts.$to(value, Number));
   return $Numbers.m_intValue__java_lang_Number(number_1);
  }
  return defaultValue;
 }
 /** @return {*} */
 m_onPointStyle__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_PointStyleCallback__org_pepstock_charba_client_enums_PointStyle_$pp_org_pepstock_charba_client_configuration(/** DatasetContext */ context, /** PointStyleCallback */ callback, /** PointStyle */ defaultValue) {
  let result = ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, callback);
  if (PointStyle.$isInstance(result)) {
   let style = /**@type {PointStyle}*/ ($Casts.$to(result, PointStyle));
   return style.m_value__();
  } else if (Img_$Overlay.$isInstance(result)) {
   return result;
  } else if (Canvas_$Overlay.$isInstance(result)) {
   return result;
  }
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(defaultValue, "Default point style argument");
  return defaultValue.m_value__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_AbstractConfigurationElement() {
  this.f_hoverBackgroundColorCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hoverBorderColorCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hoverBorderWidthCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_backgroundColorCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderColorCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderWidthCallbackProxy__org_pepstock_charba_client_configuration_AbstractConfigurationElement_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_backgroundColorCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_ = null;
  this.f_borderColorCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_ = null;
  this.f_borderWidthCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_ = null;
  this.f_hoverBackgroundColorCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_ = null;
  this.f_hoverBorderColorCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_ = null;
  this.f_hoverBorderWidthCallback__org_pepstock_charba_client_configuration_AbstractConfigurationElement_ = null;
 }
 
 static $clinit() {
  AbstractConfigurationElement.$clinit = () =>{};
  AbstractConfigurationElement.$loadModules();
  ConfigurationOptionsContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractConfigurationElement;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  Number = goog.module.get('java.lang.Number$impl');
  DatasetContext = goog.module.get('org.pepstock.charba.client.callbacks.DatasetContext$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Property = goog.module.get('org.pepstock.charba.client.configuration.AbstractConfigurationElement.Property$impl');
  Canvas_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  Img_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Img.$Overlay$impl');
  PointStyle = goog.module.get('org.pepstock.charba.client.enums.PointStyle$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Numbers = goog.module.get('vmbootstrap.Numbers$impl');
 }
}
$Util.$setClassMetadata(AbstractConfigurationElement, "org.pepstock.charba.client.configuration.AbstractConfigurationElement");

exports = AbstractConfigurationElement;

//# sourceMappingURL=AbstractConfigurationElement.js.map
