goog.module('org.pepstock.charba.client.configuration.AbstractScaleLines$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AxisContainer = goog.require('org.pepstock.charba.client.configuration.AxisContainer$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let BorderDashOffsetCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderDashOffsetCallback$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let WidthCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.WidthCallback$impl');
let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractScaleLines.Property$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let IsDefaultScaleLines = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaleLines$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 */
class AbstractScaleLines extends AxisContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/
  this.f_colorCallbackProxy__org_pepstock_charba_client_configuration_AbstractScaleLines_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/
  this.f_lineWidthCallbackProxy__org_pepstock_charba_client_configuration_AbstractScaleLines_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/
  this.f_borderDashOffsetCallbackProxy__org_pepstock_charba_client_configuration_AbstractScaleLines_;
  /**@type {ColorCallback<ScaleContext>}*/
  this.f_colorCallback__org_pepstock_charba_client_configuration_AbstractScaleLines_;
  /**@type {WidthCallback<ScaleContext>}*/
  this.f_lineWidthCallback__org_pepstock_charba_client_configuration_AbstractScaleLines_;
  /**@type {BorderDashOffsetCallback<ScaleContext>}*/
  this.f_borderDashOffsetCallback__org_pepstock_charba_client_configuration_AbstractScaleLines_;
 }
 
 $ctor__org_pepstock_charba_client_configuration_AbstractScaleLines__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_defaults_IsDefaultScaleLines(/** Axis */ axis, /** IsDefaultScaleLines */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_configuration_AxisContainer__org_pepstock_charba_client_configuration_Axis(axis);
  this.$init___$p_org_pepstock_charba_client_configuration_AbstractScaleLines();
  Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(defaultValues, "Default value argument");
  this.f_colorCallbackProxy__org_pepstock_charba_client_configuration_AbstractScaleLines_.callback = (/** Object */ contextFunction, /** ? */ context) =>{
   return ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String__boolean(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context), this.m_getColorCallback__(), defaultValues.m_getColorAsString__(), false);
  };
  this.f_lineWidthCallbackProxy__org_pepstock_charba_client_configuration_AbstractScaleLines_.callback = (/** Object */ contextFunction_1, /** ? */ context_1) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_1), this.m_getLineWidthCallback__(), Integer.m_valueOf__int(defaultValues.m_getLineWidth__())), Integer)).m_intValue__();
  };
  this.f_borderDashOffsetCallbackProxy__org_pepstock_charba_client_configuration_AbstractScaleLines_.callback = (/** Object */ contextFunction_2, /** ? */ context_2) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_2), this.m_getBorderDashOffsetCallback__(), defaultValues.m_getBorderDashOffset__()), Double)));
  };
 }
 /** @abstract @return {AbstractNode} */
 m_getElement___$pp_org_pepstock_charba_client_configuration() {}
 /** @return {ColorCallback<ScaleContext>} */
 m_getColorCallback__() {
  return this.f_colorCallback__org_pepstock_charba_client_configuration_AbstractScaleLines_;
 }
 
 m_setColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<ScaleContext> */ colorCallback) {
  this.f_colorCallback__org_pepstock_charba_client_configuration_AbstractScaleLines_ = colorCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_checkAndGet___$p_org_pepstock_charba_client_configuration_AbstractScaleLines(), Property.f_COLOR__org_pepstock_charba_client_configuration_AbstractScaleLines_Property, colorCallback, this.f_colorCallbackProxy__org_pepstock_charba_client_configuration_AbstractScaleLines_);
 }
 /** @return {WidthCallback<ScaleContext>} */
 m_getLineWidthCallback__() {
  return this.f_lineWidthCallback__org_pepstock_charba_client_configuration_AbstractScaleLines_;
 }
 
 m_setLineWidth__org_pepstock_charba_client_callbacks_WidthCallback(/** WidthCallback<ScaleContext> */ lineWidthCallback) {
  this.f_lineWidthCallback__org_pepstock_charba_client_configuration_AbstractScaleLines_ = lineWidthCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_checkAndGet___$p_org_pepstock_charba_client_configuration_AbstractScaleLines(), Property.f_LINE_WIDTH__org_pepstock_charba_client_configuration_AbstractScaleLines_Property, lineWidthCallback, this.f_lineWidthCallbackProxy__org_pepstock_charba_client_configuration_AbstractScaleLines_);
 }
 /** @return {BorderDashOffsetCallback<ScaleContext>} */
 m_getBorderDashOffsetCallback__() {
  return this.f_borderDashOffsetCallback__org_pepstock_charba_client_configuration_AbstractScaleLines_;
 }
 
 m_setBorderDashOffset__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback(/** BorderDashOffsetCallback<ScaleContext> */ borderDashOffsetCallback) {
  this.f_borderDashOffsetCallback__org_pepstock_charba_client_configuration_AbstractScaleLines_ = borderDashOffsetCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_checkAndGet___$p_org_pepstock_charba_client_configuration_AbstractScaleLines(), Property.f_BORDER_DASH_OFFSET__org_pepstock_charba_client_configuration_AbstractScaleLines_Property, borderDashOffsetCallback, this.f_borderDashOffsetCallbackProxy__org_pepstock_charba_client_configuration_AbstractScaleLines_);
 }
 /** @return {AbstractNode} */
 m_checkAndGet___$p_org_pepstock_charba_client_configuration_AbstractScaleLines() {
  return /**@type {AbstractNode}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(this.m_getElement___$pp_org_pepstock_charba_client_configuration(), "Node element"), AbstractNode));
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_AbstractScaleLines() {
  this.f_colorCallbackProxy__org_pepstock_charba_client_configuration_AbstractScaleLines_ = /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_lineWidthCallbackProxy__org_pepstock_charba_client_configuration_AbstractScaleLines_ = /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderDashOffsetCallbackProxy__org_pepstock_charba_client_configuration_AbstractScaleLines_ = /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_colorCallback__org_pepstock_charba_client_configuration_AbstractScaleLines_ = null;
  this.f_lineWidthCallback__org_pepstock_charba_client_configuration_AbstractScaleLines_ = null;
  this.f_borderDashOffsetCallback__org_pepstock_charba_client_configuration_AbstractScaleLines_ = null;
 }
 
 static $clinit() {
  AbstractScaleLines.$clinit = () =>{};
  AbstractScaleLines.$loadModules();
  AxisContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractScaleLines;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  AbstractNode = goog.module.get('org.pepstock.charba.client.commons.AbstractNode$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Property = goog.module.get('org.pepstock.charba.client.configuration.AbstractScaleLines.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AbstractScaleLines, "org.pepstock.charba.client.configuration.AbstractScaleLines");

exports = AbstractScaleLines;

//# sourceMappingURL=AbstractScaleLines.js.map
