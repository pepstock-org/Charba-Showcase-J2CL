goog.module('org.pepstock.charba.client.configuration.AbstractTitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationOptionsContainer = goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer$impl');
const IsScriptableFontProvider = goog.require('org.pepstock.charba.client.options.IsScriptableFontProvider$impl');
const IsScriptablePaddingProvider = goog.require('org.pepstock.charba.client.options.IsScriptablePaddingProvider$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let DisplayCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DisplayCallback$impl');
let ElementAlignCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ElementAlignCallback$impl');
let FontCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FontCallback$impl');
let FullSizeCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FullSizeCallback$impl');
let PaddingCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PaddingCallback$impl');
let PositionCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PositionCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let TextCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TextCallback$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let ArrayString_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let IsProvider = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractTitle.Property$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.configuration.Font$impl');
let Padding = goog.forwardDeclare('org.pepstock.charba.client.configuration.Padding$impl');
let ElementAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ElementAlign$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let IsTitle = goog.forwardDeclare('org.pepstock.charba.client.options.IsTitle$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @abstract
 * @implements {IsScriptableFontProvider<ChartContext>}
 * @implements {IsScriptablePaddingProvider<ChartContext>}
 */
class AbstractTitle extends ConfigurationOptionsContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):?>}*/
  this.f_paddingCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_;
  /**@type {CharbaCallbackProxy<?function(?):?>}*/
  this.f_fontCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_;
  /**@type {CharbaCallbackProxy<?function(?):boolean>}*/
  this.f_displayCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_colorCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_textCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_;
  /**@type {CharbaCallbackProxy<?function(?):?string>}*/
  this.f_alignCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_;
  /**@type {CharbaCallbackProxy<?function(?):?string>}*/
  this.f_positionCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_;
  /**@type {CharbaCallbackProxy<?function(?):boolean>}*/
  this.f_fullSizeCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_;
  /**@type {PaddingCallback<ChartContext>}*/
  this.f_paddingCallback__org_pepstock_charba_client_configuration_AbstractTitle_;
  /**@type {FontCallback<ChartContext>}*/
  this.f_fontCallback__org_pepstock_charba_client_configuration_AbstractTitle_;
  /**@type {DisplayCallback<ChartContext>}*/
  this.f_displayCallback__org_pepstock_charba_client_configuration_AbstractTitle_;
  /**@type {ColorCallback<ChartContext>}*/
  this.f_colorCallback__org_pepstock_charba_client_configuration_AbstractTitle_;
  /**@type {TextCallback<ChartContext>}*/
  this.f_textCallback__org_pepstock_charba_client_configuration_AbstractTitle_;
  /**@type {ElementAlignCallback<ChartContext>}*/
  this.f_alignCallback__org_pepstock_charba_client_configuration_AbstractTitle_;
  /**@type {PositionCallback<ChartContext>}*/
  this.f_positionCallback__org_pepstock_charba_client_configuration_AbstractTitle_;
  /**@type {FullSizeCallback<ChartContext>}*/
  this.f_fullSizeCallback__org_pepstock_charba_client_configuration_AbstractTitle_;
  /**@type {Font}*/
  this.f_font__org_pepstock_charba_client_configuration_AbstractTitle_;
  /**@type {Padding}*/
  this.f_padding__org_pepstock_charba_client_configuration_AbstractTitle_;
 }
 
 $ctor__org_pepstock_charba_client_configuration_AbstractTitle__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  this.$init___$p_org_pepstock_charba_client_configuration_AbstractTitle();
  this.f_font__org_pepstock_charba_client_configuration_AbstractTitle_ = Font.$create__org_pepstock_charba_client_options_IsScriptableFontProvider__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(this, IsProvider.$adapt(() =>{
   return this.m_getTitleElement___$pp_org_pepstock_charba_client_configuration().m_getFont__();
  }));
  this.f_padding__org_pepstock_charba_client_configuration_AbstractTitle_ = Padding.$create__org_pepstock_charba_client_options_IsScriptablePaddingProvider__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(this, IsProvider.$adapt(() =>{
   return this.m_getTitleElement___$pp_org_pepstock_charba_client_configuration().m_getPadding__();
  }));
  this.f_displayCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_.callback = (/** ? */ context) =>{
   return Boolean.m_booleanValue__java_lang_Boolean(/**@type {?boolean}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_getOptions__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context), this.m_getDisplayCallback__(), this.m_getOptions__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getTitle__().m_isDisplay__()), Boolean)));
  };
  this.f_paddingCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_.callback = (/** ? */ context_1) =>{
   return ScriptableUtils.m_getOptionValueAsPadding__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_defaults_IsDefaultPadding(this.m_getOptions__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_1), this.m_getPaddingCallback__(), this.m_getOptions__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getTitle__().m_getPadding__()).m_nativeObject__();
  };
  this.f_fontCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_.callback = (/** ? */ context_2) =>{
   return ScriptableUtils.m_getOptionValueAsFont__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_defaults_IsDefaultFont(this.m_getOptions__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_2), this.m_getFontCallback__(), this.m_getOptions__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getTitle__().m_getFont__()).m_nativeObject__();
  };
  this.f_colorCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_.callback = (/** ? */ context_3) =>{
   return ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String(this.m_getOptions__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_3), this.m_getColorCallback__(), this.m_getOptions__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getTitle__().m_getColorAsString__());
  };
  this.f_textCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_.callback = (/** ? */ context_4) =>{
   return this.m_onText__org_pepstock_charba_client_callbacks_ChartContext_$p_org_pepstock_charba_client_configuration_AbstractTitle(this.m_getOptions__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_4));
  };
  this.f_positionCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_.callback = (/** ? */ context_5) =>{
   return /**@type {Position}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_getOptions__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_5), this.m_getPositionCallback__(), this.m_getOptions__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getTitle__().m_getPosition__()), Position)).m_value__();
  };
  this.f_alignCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_.callback = (/** ? */ context_6) =>{
   return /**@type {ElementAlign}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_getOptions__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_6), this.m_getAlignCallback__(), this.m_getOptions__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getTitle__().m_getAlign__()), ElementAlign)).m_value__();
  };
  this.f_fullSizeCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_.callback = (/** ? */ context_7) =>{
   return Boolean.m_booleanValue__java_lang_Boolean(/**@type {?boolean}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_getOptions__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_7), this.m_getFullSizeCallback__(), this.m_getOptions__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getTitle__().m_isFullSize__()), Boolean)));
  };
 }
 /** @abstract @return {IsTitle} */
 m_getTitleElement___$pp_org_pepstock_charba_client_configuration() {}
 /** @abstract @return {AbstractNode} */
 m_getTitleNode___$pp_org_pepstock_charba_client_configuration() {}
 /** @return {AbstractNode} */
 m_checkAndGetNode___$pp_org_pepstock_charba_client_configuration() {
  return /**@type {AbstractNode}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(this.m_getTitleNode___$pp_org_pepstock_charba_client_configuration(), "Options node"), AbstractNode));
 }
 /** @return {IsTitle} */
 m_checkAndGet___$pp_org_pepstock_charba_client_configuration() {
  return /**@type {IsTitle}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(this.m_getTitleElement___$pp_org_pepstock_charba_client_configuration(), "Options element"), IsTitle));
 }
 /** @return {Font} */
 m_getFont__() {
  return this.f_font__org_pepstock_charba_client_configuration_AbstractTitle_;
 }
 /** @return {Padding} */
 m_getPadding__() {
  return this.f_padding__org_pepstock_charba_client_configuration_AbstractTitle_;
 }
 
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setColor__java_lang_String(/** ?string */ color) {
  this.m_setColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<ChartContext>}*/ (null));
  this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration().m_setColor__java_lang_String(color);
 }
 /** @return {?string} */
 m_getColorAsString__() {
  return this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration().m_getColorAsString__();
 }
 /** @return {IsColor} */
 m_getColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getColorAsString__());
 }
 
 m_setDisplay__boolean(/** boolean */ display) {
  this.m_setDisplay__org_pepstock_charba_client_callbacks_DisplayCallback(/**@type {DisplayCallback<ChartContext>}*/ (null));
  this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration().m_setDisplay__boolean(display);
 }
 /** @return {boolean} */
 m_isDisplay__() {
  return this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration().m_isDisplay__();
 }
 
 m_setText__arrayOf_java_lang_String(/** Array<?string> */ text) {
  this.m_setText__org_pepstock_charba_client_callbacks_TextCallback(/**@type {TextCallback<ChartContext>}*/ (null));
  this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration().m_setText__arrayOf_java_lang_String(text);
 }
 /** @return {List<?string>} */
 m_getText__() {
  return this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration().m_getText__();
 }
 
 m_setPosition__org_pepstock_charba_client_enums_Position(/** Position */ position) {
  this.m_setPosition__org_pepstock_charba_client_callbacks_PositionCallback(/**@type {PositionCallback<ChartContext>}*/ (null));
  this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration().m_setPosition__org_pepstock_charba_client_enums_Position(position);
 }
 /** @return {Position} */
 m_getPosition__() {
  return this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration().m_getPosition__();
 }
 
 m_setFullSize__boolean(/** boolean */ fullSize) {
  this.m_setFullSize__org_pepstock_charba_client_callbacks_FullSizeCallback(/**@type {FullSizeCallback<ChartContext>}*/ (null));
  this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration().m_setFullSize__boolean(fullSize);
 }
 /** @return {boolean} */
 m_isFullSize__() {
  return this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration().m_isFullSize__();
 }
 
 m_setAlign__org_pepstock_charba_client_enums_ElementAlign(/** ElementAlign */ alignment) {
  this.m_setAlign__org_pepstock_charba_client_callbacks_ElementAlignCallback(/**@type {ElementAlignCallback<ChartContext>}*/ (null));
  this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration().m_setAlign__org_pepstock_charba_client_enums_ElementAlign(alignment);
 }
 /** @return {ElementAlign} */
 m_getAlign__() {
  return this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration().m_getAlign__();
 }
 /** @return {DisplayCallback<ChartContext>} */
 m_getDisplayCallback__() {
  return this.f_displayCallback__org_pepstock_charba_client_configuration_AbstractTitle_;
 }
 
 m_setDisplay__org_pepstock_charba_client_callbacks_DisplayCallback(/** DisplayCallback<ChartContext> */ displayCallback) {
  this.f_displayCallback__org_pepstock_charba_client_configuration_AbstractTitle_ = displayCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_checkAndGetNode___$pp_org_pepstock_charba_client_configuration(), Property.f_DISPLAY__org_pepstock_charba_client_configuration_AbstractTitle_Property, displayCallback, this.f_displayCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_);
 }
 
 m_setDisplay__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ displayCallback) {
  this.m_setDisplay__org_pepstock_charba_client_callbacks_DisplayCallback(/**@type {DisplayCallback<ChartContext>}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_checkAndGetNode___$pp_org_pepstock_charba_client_configuration(), Property.f_DISPLAY__org_pepstock_charba_client_configuration_AbstractTitle_Property, displayCallback);
 }
 /** @return {FullSizeCallback<ChartContext>} */
 m_getFullSizeCallback__() {
  return this.f_fullSizeCallback__org_pepstock_charba_client_configuration_AbstractTitle_;
 }
 
 m_setFullSize__org_pepstock_charba_client_callbacks_FullSizeCallback(/** FullSizeCallback<ChartContext> */ fullSizeCallback) {
  this.f_fullSizeCallback__org_pepstock_charba_client_configuration_AbstractTitle_ = fullSizeCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_checkAndGetNode___$pp_org_pepstock_charba_client_configuration(), Property.f_FULL_SIZE__org_pepstock_charba_client_configuration_AbstractTitle_Property, fullSizeCallback, this.f_fullSizeCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_);
 }
 
 m_setFullSize__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ fullSizeCallback) {
  this.m_setFullSize__org_pepstock_charba_client_callbacks_FullSizeCallback(/**@type {FullSizeCallback<ChartContext>}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_checkAndGetNode___$pp_org_pepstock_charba_client_configuration(), Property.f_FULL_SIZE__org_pepstock_charba_client_configuration_AbstractTitle_Property, fullSizeCallback);
 }
 /** @override @return {PaddingCallback<ChartContext>} */
 m_getPaddingCallback__() {
  return this.f_paddingCallback__org_pepstock_charba_client_configuration_AbstractTitle_;
 }
 /** @override */
 m_setPadding__org_pepstock_charba_client_callbacks_PaddingCallback(/** PaddingCallback<ChartContext> */ paddingCallback) {
  this.f_paddingCallback__org_pepstock_charba_client_configuration_AbstractTitle_ = paddingCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_checkAndGetNode___$pp_org_pepstock_charba_client_configuration(), Property.f_PADDING__org_pepstock_charba_client_configuration_AbstractTitle_Property, paddingCallback, this.f_paddingCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_);
 }
 /** @override */
 m_setPadding__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ paddingCallback) {
  this.m_setPadding__org_pepstock_charba_client_callbacks_PaddingCallback(/**@type {PaddingCallback<ChartContext>}*/ (null));
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_checkAndGetNode___$pp_org_pepstock_charba_client_configuration(), Property.f_PADDING__org_pepstock_charba_client_configuration_AbstractTitle_Property, paddingCallback);
 }
 /** @override @return {FontCallback<ChartContext>} */
 m_getFontCallback__() {
  return this.f_fontCallback__org_pepstock_charba_client_configuration_AbstractTitle_;
 }
 /** @override */
 m_setFont__org_pepstock_charba_client_callbacks_FontCallback(/** FontCallback<ChartContext> */ fontCallback) {
  this.f_fontCallback__org_pepstock_charba_client_configuration_AbstractTitle_ = fontCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_checkAndGetNode___$pp_org_pepstock_charba_client_configuration(), Property.f_FONT__org_pepstock_charba_client_configuration_AbstractTitle_Property, fontCallback, this.f_fontCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_);
 }
 /** @override */
 m_setFont__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ fontCallback) {
  this.m_setFont__org_pepstock_charba_client_callbacks_FontCallback(/**@type {FontCallback<ChartContext>}*/ (null));
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_checkAndGetNode___$pp_org_pepstock_charba_client_configuration(), Property.f_FONT__org_pepstock_charba_client_configuration_AbstractTitle_Property, fontCallback);
 }
 /** @return {ColorCallback<ChartContext>} */
 m_getColorCallback__() {
  return this.f_colorCallback__org_pepstock_charba_client_configuration_AbstractTitle_;
 }
 
 m_setColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<ChartContext> */ colorCallback) {
  this.f_colorCallback__org_pepstock_charba_client_configuration_AbstractTitle_ = colorCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_checkAndGetNode___$pp_org_pepstock_charba_client_configuration(), Property.f_COLOR__org_pepstock_charba_client_configuration_AbstractTitle_Property, colorCallback, this.f_colorCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_);
 }
 
 m_setColor__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ colorCallback) {
  this.m_setColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<ChartContext>}*/ (null));
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_checkAndGetNode___$pp_org_pepstock_charba_client_configuration(), Property.f_COLOR__org_pepstock_charba_client_configuration_AbstractTitle_Property, colorCallback);
 }
 /** @return {TextCallback<ChartContext>} */
 m_getTextCallback__() {
  return this.f_textCallback__org_pepstock_charba_client_configuration_AbstractTitle_;
 }
 
 m_setText__org_pepstock_charba_client_callbacks_TextCallback(/** TextCallback<ChartContext> */ textCallback) {
  this.f_textCallback__org_pepstock_charba_client_configuration_AbstractTitle_ = textCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_checkAndGetNode___$pp_org_pepstock_charba_client_configuration(), Property.f_TEXT__org_pepstock_charba_client_configuration_AbstractTitle_Property, textCallback, this.f_textCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_);
 }
 
 m_setText__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ textCallback) {
  this.m_setText__org_pepstock_charba_client_callbacks_TextCallback(/**@type {TextCallback<ChartContext>}*/ (null));
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_checkAndGetNode___$pp_org_pepstock_charba_client_configuration(), Property.f_TEXT__org_pepstock_charba_client_configuration_AbstractTitle_Property, textCallback);
 }
 /** @return {PositionCallback<ChartContext>} */
 m_getPositionCallback__() {
  return this.f_positionCallback__org_pepstock_charba_client_configuration_AbstractTitle_;
 }
 
 m_setPosition__org_pepstock_charba_client_callbacks_PositionCallback(/** PositionCallback<ChartContext> */ positionCallback) {
  this.f_positionCallback__org_pepstock_charba_client_configuration_AbstractTitle_ = positionCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_checkAndGetNode___$pp_org_pepstock_charba_client_configuration(), Property.f_POSITION__org_pepstock_charba_client_configuration_AbstractTitle_Property, positionCallback, this.f_positionCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_);
 }
 
 m_setPosition__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ positionCallback) {
  this.m_setPosition__org_pepstock_charba_client_callbacks_PositionCallback(/**@type {PositionCallback<ChartContext>}*/ (null));
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_checkAndGetNode___$pp_org_pepstock_charba_client_configuration(), Property.f_POSITION__org_pepstock_charba_client_configuration_AbstractTitle_Property, positionCallback);
 }
 /** @return {ElementAlignCallback<ChartContext>} */
 m_getAlignCallback__() {
  return this.f_alignCallback__org_pepstock_charba_client_configuration_AbstractTitle_;
 }
 
 m_setAlign__org_pepstock_charba_client_callbacks_ElementAlignCallback(/** ElementAlignCallback<ChartContext> */ alignCallback) {
  this.f_alignCallback__org_pepstock_charba_client_configuration_AbstractTitle_ = alignCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_checkAndGetNode___$pp_org_pepstock_charba_client_configuration(), Property.f_ALIGN__org_pepstock_charba_client_configuration_AbstractTitle_Property, alignCallback, this.f_alignCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_);
 }
 
 m_setAlign__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ alignCallback) {
  this.m_setAlign__org_pepstock_charba_client_callbacks_ElementAlignCallback(/**@type {ElementAlignCallback<ChartContext>}*/ (null));
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_checkAndGetNode___$pp_org_pepstock_charba_client_configuration(), Property.f_ALIGN__org_pepstock_charba_client_configuration_AbstractTitle_Property, alignCallback);
 }
 /** @return {*} */
 m_onText__org_pepstock_charba_client_callbacks_ChartContext_$p_org_pepstock_charba_client_configuration_AbstractTitle(/** ChartContext */ context) {
  let result = ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, this.m_getTextCallback__());
  if (j_l_String.$isInstance(result)) {
   return result;
  } else if (List.$isInstance(result)) {
   let list = /**@type {List<*>}*/ ($Casts.$to(result, List));
   if (!list.isEmpty()) {
    let normalizedList = /**@type {!LinkedList<?string>}*/ (LinkedList.$create__());
    for (let $iterator = list.m_iterator__(); $iterator.m_hasNext__(); ) {
     let textItem = $iterator.m_next__();
     {
      normalizedList.add($Objects.m_toString__java_lang_Object(textItem));
     }
    }
    return normalizedList.size() == 1 ? /**@type {?string}*/ ($Casts.$to(normalizedList.getAtIndex(0), j_l_String)) : ArrayString_$Overlay.m_fromOrNull__java_util_List(normalizedList);
   }
  }
  return window.undefined;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_AbstractTitle() {
  this.f_paddingCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_ = /**@type {CharbaCallbackProxy<?function(?):?>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_fontCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_ = /**@type {CharbaCallbackProxy<?function(?):?>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_displayCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_ = /**@type {CharbaCallbackProxy<?function(?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_colorCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_textCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_alignCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_ = /**@type {CharbaCallbackProxy<?function(?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_positionCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_ = /**@type {CharbaCallbackProxy<?function(?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_fullSizeCallbackProxy__org_pepstock_charba_client_configuration_AbstractTitle_ = /**@type {CharbaCallbackProxy<?function(?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_paddingCallback__org_pepstock_charba_client_configuration_AbstractTitle_ = null;
  this.f_fontCallback__org_pepstock_charba_client_configuration_AbstractTitle_ = null;
  this.f_displayCallback__org_pepstock_charba_client_configuration_AbstractTitle_ = null;
  this.f_colorCallback__org_pepstock_charba_client_configuration_AbstractTitle_ = null;
  this.f_textCallback__org_pepstock_charba_client_configuration_AbstractTitle_ = null;
  this.f_alignCallback__org_pepstock_charba_client_configuration_AbstractTitle_ = null;
  this.f_positionCallback__org_pepstock_charba_client_configuration_AbstractTitle_ = null;
  this.f_fullSizeCallback__org_pepstock_charba_client_configuration_AbstractTitle_ = null;
 }
 
 static $clinit() {
  AbstractTitle.$clinit = () =>{};
  AbstractTitle.$loadModules();
  ConfigurationOptionsContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractTitle;
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  List = goog.module.get('java.util.List$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  AbstractNode = goog.module.get('org.pepstock.charba.client.commons.AbstractNode$impl');
  ArrayString_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  IsProvider = goog.module.get('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
  Property = goog.module.get('org.pepstock.charba.client.configuration.AbstractTitle.Property$impl');
  Font = goog.module.get('org.pepstock.charba.client.configuration.Font$impl');
  Padding = goog.module.get('org.pepstock.charba.client.configuration.Padding$impl');
  ElementAlign = goog.module.get('org.pepstock.charba.client.enums.ElementAlign$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  IsTitle = goog.module.get('org.pepstock.charba.client.options.IsTitle$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
IsScriptableFontProvider.$markImplementor(AbstractTitle);
IsScriptablePaddingProvider.$markImplementor(AbstractTitle);
$Util.$setClassMetadata(AbstractTitle, "org.pepstock.charba.client.configuration.AbstractTitle");

exports = AbstractTitle;

//# sourceMappingURL=AbstractTitle.js.map
