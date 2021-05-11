goog.module('org.pepstock.charba.client.configuration.RadialPointLabels$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AxisContainer = goog.require('org.pepstock.charba.client.configuration.AxisContainer$impl');
const IsScriptableFontProvider = goog.require('org.pepstock.charba.client.options.IsScriptableFontProvider$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let FontCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FontCallback$impl');
let PointLabelCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PointLabelCallback$impl');
let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let SimplePaddingCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.SimplePaddingCallback$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let IsProvider = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.configuration.Font$impl');
let Padding = goog.forwardDeclare('org.pepstock.charba.client.configuration.Padding$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.RadialPointLabels.Property$impl');
let ExtendedScale = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedScale$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsScriptableFontProvider<ScaleContext>}
 */
class RadialPointLabels extends AxisContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, ?string, number):?string>}*/
  this.f_pointLabelCallbackProxy__org_pepstock_charba_client_configuration_RadialPointLabels_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):?>}*/
  this.f_fontCallbackProxy__org_pepstock_charba_client_configuration_RadialPointLabels_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/
  this.f_colorCallbackProxy__org_pepstock_charba_client_configuration_RadialPointLabels_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/
  this.f_paddingCallbackProxy__org_pepstock_charba_client_configuration_RadialPointLabels_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/
  this.f_backdropColorCallbackProxy__org_pepstock_charba_client_configuration_RadialPointLabels_;
  /**@type {PointLabelCallback}*/
  this.f_callback__org_pepstock_charba_client_configuration_RadialPointLabels_;
  /**@type {FontCallback<ScaleContext>}*/
  this.f_fontCallback__org_pepstock_charba_client_configuration_RadialPointLabels_;
  /**@type {ColorCallback<ScaleContext>}*/
  this.f_colorCallback__org_pepstock_charba_client_configuration_RadialPointLabels_;
  /**@type {SimplePaddingCallback}*/
  this.f_paddingCallback__org_pepstock_charba_client_configuration_RadialPointLabels_;
  /**@type {ColorCallback<ScaleContext>}*/
  this.f_backdropColorCallback__org_pepstock_charba_client_configuration_RadialPointLabels_;
  /**@type {Font}*/
  this.f_font__org_pepstock_charba_client_configuration_RadialPointLabels_;
  /**@type {Padding}*/
  this.f_backdropPadding__org_pepstock_charba_client_configuration_RadialPointLabels_;
 }
 /** @return {!RadialPointLabels} */
 static $create__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  RadialPointLabels.$clinit();
  let $instance = new RadialPointLabels();
  $instance.$ctor__org_pepstock_charba_client_configuration_RadialPointLabels__org_pepstock_charba_client_configuration_Axis(axis);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_RadialPointLabels__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  this.$ctor__org_pepstock_charba_client_configuration_AxisContainer__org_pepstock_charba_client_configuration_Axis(axis);
  this.$init___$p_org_pepstock_charba_client_configuration_RadialPointLabels();
  this.f_backdropPadding__org_pepstock_charba_client_configuration_RadialPointLabels_ = Padding.$create__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(IsProvider.$adapt(() =>{
   return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getPointLabels__().m_getBackdropPadding__();
  }));
  this.f_font__org_pepstock_charba_client_configuration_RadialPointLabels_ = Font.$create__org_pepstock_charba_client_options_IsScriptableFontProvider__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(this, IsProvider.$adapt(() =>{
   return /**@type {ExtendedScale}*/ ($Casts.$to(this.m_getAxis__().m_getConfiguration__(), ExtendedScale)).m_getPointLabels__().m_getFont__();
  }));
  this.f_pointLabelCallbackProxy__org_pepstock_charba_client_configuration_RadialPointLabels_.callback = (/** Object */ context, /** ?string */ item, /** number */ index) =>{
   let callback = this.m_getCallback__();
   if (!$Equality.$same(callback, null)) {
    return callback.m_onCallback__org_pepstock_charba_client_configuration_Axis__java_lang_String__int(this.m_getAxis__(), item, index);
   }
   return item;
  };
  this.f_fontCallbackProxy__org_pepstock_charba_client_configuration_RadialPointLabels_.callback = (/** Object */ contextFunction, /** ? */ context_1) =>{
   return ScriptableUtils.m_getOptionValueAsFont__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_defaults_IsDefaultFont(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_1), this.m_getFontCallback__(), this.m_getAxis__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getPointLabels__().m_getFont__()).m_nativeObject__();
  };
  this.f_colorCallbackProxy__org_pepstock_charba_client_configuration_RadialPointLabels_.callback = (/** Object */ contextFunction_1, /** ? */ context_2) =>{
   return this.m_onColor__org_pepstock_charba_client_callbacks_ScaleContext__org_pepstock_charba_client_callbacks_ColorCallback__java_lang_String_$p_org_pepstock_charba_client_configuration_RadialPointLabels(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_2), this.m_getColorCallback__(), this.m_getAxis__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getPointLabels__().m_getColorAsString__());
  };
  this.f_backdropColorCallbackProxy__org_pepstock_charba_client_configuration_RadialPointLabels_.callback = (/** Object */ contextFunction_2, /** ? */ context_3) =>{
   return this.m_onColor__org_pepstock_charba_client_callbacks_ScaleContext__org_pepstock_charba_client_callbacks_ColorCallback__java_lang_String_$p_org_pepstock_charba_client_configuration_RadialPointLabels(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_3), this.m_getBackdropColorCallback__(), this.m_getAxis__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getPointLabels__().m_getBackdropColorAsString__());
  };
  this.f_paddingCallbackProxy__org_pepstock_charba_client_configuration_RadialPointLabels_.callback = (/** Object */ contextFunction_3, /** ? */ context_4) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_4), this.m_getPaddingCallback__(), Integer.m_valueOf__int(this.m_getAxis__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getPointLabels__().m_getPadding__())), Integer)).m_intValue__();
  };
 }
 /** @return {Padding} */
 m_getBackdropPadding__() {
  return this.f_backdropPadding__org_pepstock_charba_client_configuration_RadialPointLabels_;
 }
 /** @return {Font} */
 m_getFont__() {
  return this.f_font__org_pepstock_charba_client_configuration_RadialPointLabels_;
 }
 
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setColor__java_lang_String(/** ?string */ color) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getPointLabels__().m_setColor__java_lang_String(color);
 }
 /** @return {?string} */
 m_getColorAsString__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getPointLabels__().m_getColorAsString__();
 }
 /** @return {IsColor} */
 m_getColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getColorAsString__());
 }
 
 m_setDisplay__boolean(/** boolean */ display) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getPointLabels__().m_setDisplay__boolean(display);
 }
 /** @return {boolean} */
 m_isDisplay__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getPointLabels__().m_isDisplay__();
 }
 
 m_setPadding__int(/** number */ padding) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getPointLabels__().m_setPadding__int(padding);
 }
 /** @return {number} */
 m_getPadding__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getPointLabels__().m_getPadding__();
 }
 
 m_setBackdropColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backdropColor) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getPointLabels__().m_setBackdropColor__org_pepstock_charba_client_colors_IsColor(backdropColor);
 }
 
 m_setBackdropColor__java_lang_String(/** ?string */ backdropColor) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getPointLabels__().m_setBackdropColor__java_lang_String(backdropColor);
 }
 /** @return {?string} */
 m_getBackdropColorAsString__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getPointLabels__().m_getBackdropColorAsString__();
 }
 /** @return {IsColor} */
 m_getBackdropColor__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getPointLabels__().m_getBackdropColor__();
 }
 /** @return {PointLabelCallback} */
 m_getCallback__() {
  return this.f_callback__org_pepstock_charba_client_configuration_RadialPointLabels_;
 }
 
 m_setCallback__org_pepstock_charba_client_callbacks_PointLabelCallback(/** PointLabelCallback */ callback) {
  this.f_callback__org_pepstock_charba_client_configuration_RadialPointLabels_ = callback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getAxis__().m_getConfiguration__(), ExtendedScale)).m_getPointLabels__(), Property.f_CALLBACK__org_pepstock_charba_client_configuration_RadialPointLabels_Property, callback, this.f_pointLabelCallbackProxy__org_pepstock_charba_client_configuration_RadialPointLabels_);
 }
 /** @override @return {FontCallback<ScaleContext>} */
 m_getFontCallback__() {
  return this.f_fontCallback__org_pepstock_charba_client_configuration_RadialPointLabels_;
 }
 /** @override */
 m_setFont__org_pepstock_charba_client_callbacks_FontCallback(/** FontCallback<ScaleContext> */ fontCallback) {
  this.f_fontCallback__org_pepstock_charba_client_configuration_RadialPointLabels_ = fontCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getAxis__().m_getConfiguration__(), ExtendedScale)).m_getPointLabels__(), Property.f_FONT__org_pepstock_charba_client_configuration_RadialPointLabels_Property, fontCallback, this.f_fontCallbackProxy__org_pepstock_charba_client_configuration_RadialPointLabels_);
 }
 /** @return {SimplePaddingCallback} */
 m_getPaddingCallback__() {
  return this.f_paddingCallback__org_pepstock_charba_client_configuration_RadialPointLabels_;
 }
 
 m_setPadding__org_pepstock_charba_client_callbacks_SimplePaddingCallback(/** SimplePaddingCallback */ paddingCallback) {
  this.f_paddingCallback__org_pepstock_charba_client_configuration_RadialPointLabels_ = paddingCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getAxis__().m_getConfiguration__(), ExtendedScale)).m_getPointLabels__(), Property.f_PADDING__org_pepstock_charba_client_configuration_RadialPointLabels_Property, paddingCallback, this.f_paddingCallbackProxy__org_pepstock_charba_client_configuration_RadialPointLabels_);
 }
 /** @return {ColorCallback<ScaleContext>} */
 m_getColorCallback__() {
  return this.f_colorCallback__org_pepstock_charba_client_configuration_RadialPointLabels_;
 }
 
 m_setColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<ScaleContext> */ colorCallback) {
  this.f_colorCallback__org_pepstock_charba_client_configuration_RadialPointLabels_ = colorCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getAxis__().m_getConfiguration__(), ExtendedScale)).m_getPointLabels__(), Property.f_COLOR__org_pepstock_charba_client_configuration_RadialPointLabels_Property, colorCallback, this.f_colorCallbackProxy__org_pepstock_charba_client_configuration_RadialPointLabels_);
 }
 /** @return {ColorCallback<ScaleContext>} */
 m_getBackdropColorCallback__() {
  return this.f_backdropColorCallback__org_pepstock_charba_client_configuration_RadialPointLabels_;
 }
 
 m_setBackdropColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<ScaleContext> */ backdropColorCallback) {
  this.f_backdropColorCallback__org_pepstock_charba_client_configuration_RadialPointLabels_ = backdropColorCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getAxis__().m_getConfiguration__(), ExtendedScale)).m_getPointLabels__(), Property.f_BACKDROP_COLOR__org_pepstock_charba_client_configuration_RadialPointLabels_Property, backdropColorCallback, this.f_backdropColorCallbackProxy__org_pepstock_charba_client_configuration_RadialPointLabels_);
 }
 /** @return {?string} */
 m_onColor__org_pepstock_charba_client_callbacks_ScaleContext__org_pepstock_charba_client_callbacks_ColorCallback__java_lang_String_$p_org_pepstock_charba_client_configuration_RadialPointLabels(/** ScaleContext */ context, /** ColorCallback<ScaleContext> */ callback, /** ?string */ defaultValue) {
  let result = ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String__boolean(context, callback, defaultValue, false);
  if (j_l_String.$isInstance(result)) {
   return /**@type {?string}*/ ($Casts.$to(result, j_l_String));
  }
  return defaultValue;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_RadialPointLabels() {
  this.f_pointLabelCallbackProxy__org_pepstock_charba_client_configuration_RadialPointLabels_ = /**@type {CharbaCallbackProxy<?function(Object, ?string, number):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_fontCallbackProxy__org_pepstock_charba_client_configuration_RadialPointLabels_ = /**@type {CharbaCallbackProxy<?function(Object, ?):?>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_colorCallbackProxy__org_pepstock_charba_client_configuration_RadialPointLabels_ = /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_paddingCallbackProxy__org_pepstock_charba_client_configuration_RadialPointLabels_ = /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_backdropColorCallbackProxy__org_pepstock_charba_client_configuration_RadialPointLabels_ = /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_callback__org_pepstock_charba_client_configuration_RadialPointLabels_ = null;
  this.f_fontCallback__org_pepstock_charba_client_configuration_RadialPointLabels_ = null;
  this.f_colorCallback__org_pepstock_charba_client_configuration_RadialPointLabels_ = null;
  this.f_paddingCallback__org_pepstock_charba_client_configuration_RadialPointLabels_ = null;
  this.f_backdropColorCallback__org_pepstock_charba_client_configuration_RadialPointLabels_ = null;
 }
 
 static $clinit() {
  RadialPointLabels.$clinit = () =>{};
  RadialPointLabels.$loadModules();
  AxisContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RadialPointLabels;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  IsProvider = goog.module.get('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
  Font = goog.module.get('org.pepstock.charba.client.configuration.Font$impl');
  Padding = goog.module.get('org.pepstock.charba.client.configuration.Padding$impl');
  Property = goog.module.get('org.pepstock.charba.client.configuration.RadialPointLabels.Property$impl');
  ExtendedScale = goog.module.get('org.pepstock.charba.client.options.ExtendedScale$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsScriptableFontProvider.$markImplementor(RadialPointLabels);
$Util.$setClassMetadata(RadialPointLabels, "org.pepstock.charba.client.configuration.RadialPointLabels");

exports = RadialPointLabels;

//# sourceMappingURL=RadialPointLabels.js.map
