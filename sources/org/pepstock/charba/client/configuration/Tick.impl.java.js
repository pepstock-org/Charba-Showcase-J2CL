goog.module('org.pepstock.charba.client.configuration.Tick$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AxisContainer = goog.require('org.pepstock.charba.client.configuration.AxisContainer$impl');
const IsScriptableFontProvider = goog.require('org.pepstock.charba.client.options.IsScriptableFontProvider$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let FontCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FontCallback$impl');
let PaddingCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PaddingCallback$impl');
let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let ShowLabelBackdropCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ShowLabelBackdropCallback$impl');
let WidthCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.WidthCallback$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let IsProvider = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.configuration.Font$impl');
let Major = goog.forwardDeclare('org.pepstock.charba.client.configuration.Major$impl');
let Padding = goog.forwardDeclare('org.pepstock.charba.client.configuration.Padding$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.Tick.Property$impl');
let ExtendedScale = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedScale$impl');
let Ticks = goog.forwardDeclare('org.pepstock.charba.client.options.Ticks$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @implements {IsScriptableFontProvider<ScaleContext>}
 */
class Tick extends AxisContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, ?):?>}*/
  this.f_fontCallbackProxy__org_pepstock_charba_client_configuration_Tick_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/
  this.f_colorCallbackProxy__org_pepstock_charba_client_configuration_Tick_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/
  this.f_textStrokeColorCallbackProxy__org_pepstock_charba_client_configuration_Tick_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/
  this.f_textStrokeWidthCallbackProxy__org_pepstock_charba_client_configuration_Tick_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):?>}*/
  this.f_backdropPaddingCallbackProxy__org_pepstock_charba_client_configuration_Tick_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/
  this.f_backdropColorCallbackProxy__org_pepstock_charba_client_configuration_Tick_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):boolean>}*/
  this.f_showLabelBackdropCallbackProxy__org_pepstock_charba_client_configuration_Tick_;
  /**@type {FontCallback<ScaleContext>}*/
  this.f_fontCallback__org_pepstock_charba_client_configuration_Tick_;
  /**@type {ColorCallback<ScaleContext>}*/
  this.f_colorCallback__org_pepstock_charba_client_configuration_Tick_;
  /**@type {ColorCallback<ScaleContext>}*/
  this.f_textStrokeColorCallback__org_pepstock_charba_client_configuration_Tick_;
  /**@type {WidthCallback<ScaleContext>}*/
  this.f_textStrokeWidthCallback__org_pepstock_charba_client_configuration_Tick_;
  /**@type {PaddingCallback<ScaleContext>}*/
  this.f_backdropPaddingCallback__org_pepstock_charba_client_configuration_Tick_;
  /**@type {ColorCallback<ScaleContext>}*/
  this.f_backdropColorCallback__org_pepstock_charba_client_configuration_Tick_;
  /**@type {ShowLabelBackdropCallback}*/
  this.f_showLabelBackdropCallback__org_pepstock_charba_client_configuration_Tick_;
  /**@type {Major}*/
  this.f_major__org_pepstock_charba_client_configuration_Tick_;
  /**@type {Font}*/
  this.f_font__org_pepstock_charba_client_configuration_Tick_;
  /**@type {Padding}*/
  this.f_backdropPadding__org_pepstock_charba_client_configuration_Tick_;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Tick__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  this.$ctor__org_pepstock_charba_client_configuration_AxisContainer__org_pepstock_charba_client_configuration_Axis(axis);
  this.$init___$p_org_pepstock_charba_client_configuration_Tick();
  this.f_major__org_pepstock_charba_client_configuration_Tick_ = Major.$create__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_Tick(axis, this);
  this.f_font__org_pepstock_charba_client_configuration_Tick_ = Font.$create__org_pepstock_charba_client_options_IsScriptableFontProvider__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(this, IsProvider.$adapt(() =>{
   return this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getFont__();
  }));
  this.f_backdropPadding__org_pepstock_charba_client_configuration_Tick_ = Padding.$create__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(IsProvider.$adapt(() =>{
   return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTicks__().m_getBackdropPadding__();
  }));
  this.f_fontCallbackProxy__org_pepstock_charba_client_configuration_Tick_.callback = (/** Object */ contextFunction, /** ? */ context) =>{
   return ScriptableUtils.m_getOptionValueAsFont__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_defaults_IsDefaultFont(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context), this.m_getFontCallback__(), this.m_getAxis__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getTicks__().m_getFont__()).m_nativeObject__();
  };
  this.f_backdropPaddingCallbackProxy__org_pepstock_charba_client_configuration_Tick_.callback = (/** Object */ contextFunction_1, /** ? */ context_1) =>{
   return ScriptableUtils.m_getOptionValueAsPadding__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_defaults_IsDefaultPadding(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_1), this.m_getBackdropPaddingCallback__(), this.m_getAxis__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getTicks__().m_getBackdropPadding__()).m_nativeObject__();
  };
  this.f_colorCallbackProxy__org_pepstock_charba_client_configuration_Tick_.callback = (/** Object */ contextFunction_2, /** ? */ context_2) =>{
   return this.m_onColor__org_pepstock_charba_client_callbacks_ScaleContext__org_pepstock_charba_client_callbacks_ColorCallback_$p_org_pepstock_charba_client_configuration_Tick(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_2), this.m_getColorCallback__());
  };
  this.f_textStrokeColorCallbackProxy__org_pepstock_charba_client_configuration_Tick_.callback = (/** Object */ contextFunction_3, /** ? */ context_3) =>{
   return this.m_onColor__org_pepstock_charba_client_callbacks_ScaleContext__org_pepstock_charba_client_callbacks_ColorCallback_$p_org_pepstock_charba_client_configuration_Tick(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_3), this.m_getTextStrokeColorCallback__());
  };
  this.f_textStrokeWidthCallbackProxy__org_pepstock_charba_client_configuration_Tick_.callback = (/** Object */ contextFunction_4, /** ? */ context_4) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_4), this.m_getTextStrokeWidthCallback__(), Integer.m_valueOf__int(this.m_getAxis__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getTicks__().m_getTextStrokeWidth__())), Integer)).m_intValue__();
  };
  this.f_backdropColorCallbackProxy__org_pepstock_charba_client_configuration_Tick_.callback = (/** Object */ contextFunction_5, /** ? */ context_5) =>{
   return ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String__boolean(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_5), this.m_getBackdropColorCallback__(), this.m_getAxis__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getTicks__().m_getBackdropColorAsString__(), false);
  };
  this.f_showLabelBackdropCallbackProxy__org_pepstock_charba_client_configuration_Tick_.callback = (/** Object */ contextFunction_6, /** ? */ context_6) =>{
   return Boolean.m_booleanValue__java_lang_Boolean(/**@type {?boolean}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_6), this.m_getShowLabelBackdropCallback__(), this.m_getAxis__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getTicks__().m_isShowLabelBackdrop__()), Boolean)));
  };
 }
 /** @return {Ticks} */
 m_getConfiguration___$pp_org_pepstock_charba_client_configuration() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTicks__();
 }
 /** @return {Major} */
 m_getMajor__() {
  return this.f_major__org_pepstock_charba_client_configuration_Tick_;
 }
 /** @return {Font} */
 m_getFont__() {
  return this.f_font__org_pepstock_charba_client_configuration_Tick_;
 }
 /** @return {Padding} */
 m_getBackdropPadding__() {
  return this.f_backdropPadding__org_pepstock_charba_client_configuration_Tick_;
 }
 
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setColor__java_lang_String(/** ?string */ color) {
  this.m_setColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<ScaleContext>}*/ (null));
  this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_setColor__java_lang_String(color);
 }
 /** @return {?string} */
 m_getColorAsString__() {
  return this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getColorAsString__();
 }
 /** @return {IsColor} */
 m_getColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getColorAsString__());
 }
 
 m_setDisplay__boolean(/** boolean */ display) {
  this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_setDisplay__boolean(display);
 }
 /** @return {boolean} */
 m_isDisplay__() {
  return this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_isDisplay__();
 }
 
 m_setZ__int(/** number */ z) {
  this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_setZ__int(z);
 }
 /** @return {number} */
 m_getZ__() {
  return this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getZ__();
 }
 
 m_setTextStrokeColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setTextStrokeColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setTextStrokeColor__java_lang_String(/** ?string */ color) {
  this.m_setTextStrokeColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<ScaleContext>}*/ (null));
  this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_setTextStrokeColor__java_lang_String(color);
 }
 /** @return {?string} */
 m_getTextStrokeColorAsString__() {
  return this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getTextStrokeColorAsString__();
 }
 /** @return {IsColor} */
 m_getTextStrokeColor__() {
  return this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getTextStrokeColor__();
 }
 
 m_setTextStrokeWidth__int(/** number */ textStrokeWidth) {
  this.m_setTextStrokeWidth__org_pepstock_charba_client_callbacks_WidthCallback(/**@type {WidthCallback<ScaleContext>}*/ (null));
  this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_setTextStrokeWidth__int(textStrokeWidth);
 }
 /** @return {number} */
 m_getTextStrokeWidth__() {
  return this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getTextStrokeWidth__();
 }
 
 m_setPadding__int(/** number */ padding) {
  this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_setPadding__int(padding);
 }
 /** @return {number} */
 m_getPadding__() {
  return this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getPadding__();
 }
 
 m_setBackdropColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backdropColor) {
  this.m_setBackdropColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<ScaleContext>}*/ (null));
  this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_setBackdropColor__org_pepstock_charba_client_colors_IsColor(backdropColor);
 }
 
 m_setBackdropColor__java_lang_String(/** ?string */ backdropColor) {
  this.m_setBackdropColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<ScaleContext>}*/ (null));
  this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_setBackdropColor__java_lang_String(backdropColor);
 }
 /** @return {?string} */
 m_getBackdropColorAsString__() {
  return this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getBackdropColorAsString__();
 }
 /** @return {IsColor} */
 m_getBackdropColor__() {
  return this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getBackdropColor__();
 }
 
 m_setShowLabelBackdrop__boolean(/** boolean */ showLabelBackdrop) {
  this.m_setShowLabelBackdrop__org_pepstock_charba_client_callbacks_ShowLabelBackdropCallback(/**@type {ShowLabelBackdropCallback}*/ (null));
  this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_setShowLabelBackdrop__boolean(showLabelBackdrop);
 }
 /** @return {boolean} */
 m_isShowLabelBackdrop__() {
  return this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_isShowLabelBackdrop__();
 }
 /** @override @return {FontCallback<ScaleContext>} */
 m_getFontCallback__() {
  return this.f_fontCallback__org_pepstock_charba_client_configuration_Tick_;
 }
 /** @return {PaddingCallback<ScaleContext>} */
 m_getBackdropPaddingCallback__() {
  return this.f_backdropPaddingCallback__org_pepstock_charba_client_configuration_Tick_;
 }
 /** @return {ColorCallback<ScaleContext>} */
 m_getColorCallback__() {
  return this.f_colorCallback__org_pepstock_charba_client_configuration_Tick_;
 }
 /** @return {ColorCallback<ScaleContext>} */
 m_getTextStrokeColorCallback__() {
  return this.f_textStrokeColorCallback__org_pepstock_charba_client_configuration_Tick_;
 }
 /** @return {WidthCallback<ScaleContext>} */
 m_getTextStrokeWidthCallback__() {
  return this.f_textStrokeWidthCallback__org_pepstock_charba_client_configuration_Tick_;
 }
 
 m_setColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<ScaleContext> */ colorCallback) {
  this.f_colorCallback__org_pepstock_charba_client_configuration_Tick_ = colorCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration(), Property.f_COLOR__org_pepstock_charba_client_configuration_Tick_Property, colorCallback, this.f_colorCallbackProxy__org_pepstock_charba_client_configuration_Tick_);
 }
 
 m_setTextStrokeColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<ScaleContext> */ textStrokeColorCallback) {
  this.f_textStrokeColorCallback__org_pepstock_charba_client_configuration_Tick_ = textStrokeColorCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration(), Property.f_TEXT_STROKE_COLOR__org_pepstock_charba_client_configuration_Tick_Property, textStrokeColorCallback, this.f_textStrokeColorCallbackProxy__org_pepstock_charba_client_configuration_Tick_);
 }
 
 m_setTextStrokeWidth__org_pepstock_charba_client_callbacks_WidthCallback(/** WidthCallback<ScaleContext> */ textStrokeWidthCallback) {
  this.f_textStrokeWidthCallback__org_pepstock_charba_client_configuration_Tick_ = textStrokeWidthCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration(), Property.f_TEXT_STROKE_WIDTH__org_pepstock_charba_client_configuration_Tick_Property, textStrokeWidthCallback, this.f_textStrokeWidthCallbackProxy__org_pepstock_charba_client_configuration_Tick_);
 }
 /** @override */
 m_setFont__org_pepstock_charba_client_callbacks_FontCallback(/** FontCallback<ScaleContext> */ fontCallback) {
  this.f_fontCallback__org_pepstock_charba_client_configuration_Tick_ = fontCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration(), Property.f_FONT__org_pepstock_charba_client_configuration_Tick_Property, fontCallback, this.f_fontCallbackProxy__org_pepstock_charba_client_configuration_Tick_);
 }
 
 m_setBackdropPadding__org_pepstock_charba_client_callbacks_PaddingCallback(/** PaddingCallback<ScaleContext> */ backdropPaddingCallback) {
  this.f_backdropPaddingCallback__org_pepstock_charba_client_configuration_Tick_ = backdropPaddingCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration(), Property.f_BACKDROP_PADDING__org_pepstock_charba_client_configuration_Tick_Property, backdropPaddingCallback, this.f_backdropPaddingCallbackProxy__org_pepstock_charba_client_configuration_Tick_);
 }
 /** @return {ColorCallback<ScaleContext>} */
 m_getBackdropColorCallback__() {
  return this.f_backdropColorCallback__org_pepstock_charba_client_configuration_Tick_;
 }
 
 m_setBackdropColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<ScaleContext> */ backdropColorCallback) {
  this.f_backdropColorCallback__org_pepstock_charba_client_configuration_Tick_ = backdropColorCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getAxis__().m_getConfiguration__(), ExtendedScale)).m_getTicks__(), Property.f_BACKDROP_COLOR__org_pepstock_charba_client_configuration_Tick_Property, backdropColorCallback, this.f_backdropColorCallbackProxy__org_pepstock_charba_client_configuration_Tick_);
 }
 /** @return {ShowLabelBackdropCallback} */
 m_getShowLabelBackdropCallback__() {
  return this.f_showLabelBackdropCallback__org_pepstock_charba_client_configuration_Tick_;
 }
 
 m_setShowLabelBackdrop__org_pepstock_charba_client_callbacks_ShowLabelBackdropCallback(/** ShowLabelBackdropCallback */ showLabelBackdropCallback) {
  this.f_showLabelBackdropCallback__org_pepstock_charba_client_configuration_Tick_ = showLabelBackdropCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getAxis__().m_getConfiguration__(), ExtendedScale)).m_getTicks__(), Property.f_SHOW_LABEL_BACKDROP__org_pepstock_charba_client_configuration_Tick_Property, showLabelBackdropCallback, this.f_showLabelBackdropCallbackProxy__org_pepstock_charba_client_configuration_Tick_);
 }
 /** @return {?string} */
 m_onColor__org_pepstock_charba_client_callbacks_ScaleContext__org_pepstock_charba_client_callbacks_ColorCallback_$p_org_pepstock_charba_client_configuration_Tick(/** ScaleContext */ context, /** ColorCallback<ScaleContext> */ callback) {
  let defaultColor = this.m_getAxis__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getTicks__().m_getColorAsString__();
  let result = ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String__boolean(context, callback, defaultColor, false);
  if (j_l_String.$isInstance(result)) {
   return /**@type {?string}*/ ($Casts.$to(result, j_l_String));
  }
  return defaultColor;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_Tick() {
  this.f_fontCallbackProxy__org_pepstock_charba_client_configuration_Tick_ = /**@type {CharbaCallbackProxy<?function(Object, ?):?>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_colorCallbackProxy__org_pepstock_charba_client_configuration_Tick_ = /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_textStrokeColorCallbackProxy__org_pepstock_charba_client_configuration_Tick_ = /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_textStrokeWidthCallbackProxy__org_pepstock_charba_client_configuration_Tick_ = /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_backdropPaddingCallbackProxy__org_pepstock_charba_client_configuration_Tick_ = /**@type {CharbaCallbackProxy<?function(Object, ?):?>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_backdropColorCallbackProxy__org_pepstock_charba_client_configuration_Tick_ = /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_showLabelBackdropCallbackProxy__org_pepstock_charba_client_configuration_Tick_ = /**@type {CharbaCallbackProxy<?function(Object, ?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_fontCallback__org_pepstock_charba_client_configuration_Tick_ = null;
  this.f_colorCallback__org_pepstock_charba_client_configuration_Tick_ = null;
  this.f_textStrokeColorCallback__org_pepstock_charba_client_configuration_Tick_ = null;
  this.f_textStrokeWidthCallback__org_pepstock_charba_client_configuration_Tick_ = null;
  this.f_backdropPaddingCallback__org_pepstock_charba_client_configuration_Tick_ = null;
  this.f_backdropColorCallback__org_pepstock_charba_client_configuration_Tick_ = null;
  this.f_showLabelBackdropCallback__org_pepstock_charba_client_configuration_Tick_ = null;
 }
 
 static $clinit() {
  Tick.$clinit = () =>{};
  Tick.$loadModules();
  AxisContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Tick;
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  IsProvider = goog.module.get('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
  Font = goog.module.get('org.pepstock.charba.client.configuration.Font$impl');
  Major = goog.module.get('org.pepstock.charba.client.configuration.Major$impl');
  Padding = goog.module.get('org.pepstock.charba.client.configuration.Padding$impl');
  Property = goog.module.get('org.pepstock.charba.client.configuration.Tick.Property$impl');
  ExtendedScale = goog.module.get('org.pepstock.charba.client.options.ExtendedScale$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsScriptableFontProvider.$markImplementor(Tick);
$Util.$setClassMetadata(Tick, "org.pepstock.charba.client.configuration.Tick");

exports = Tick;

//# sourceMappingURL=Tick.js.map
