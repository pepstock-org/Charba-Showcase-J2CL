goog.module('org.pepstock.charba.client.configuration.Grid$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractScaleLines = goog.require('org.pepstock.charba.client.configuration.AbstractScaleLines$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let BorderDashOffsetCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderDashOffsetCallback$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let WidthCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.WidthCallback$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.Grid.Property$impl');
let ExtendedScale = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedScale$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Grid extends AbstractScaleLines {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_tickColorCallbackProxy__org_pepstock_charba_client_configuration_Grid_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_tickWidthCallbackProxy__org_pepstock_charba_client_configuration_Grid_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_tickBorderDashOffsetCallbackProxy__org_pepstock_charba_client_configuration_Grid_;
  /**@type {ColorCallback<ScaleContext>}*/
  this.f_tickColorCallback__org_pepstock_charba_client_configuration_Grid_;
  /**@type {WidthCallback<ScaleContext>}*/
  this.f_tickWidthCallback__org_pepstock_charba_client_configuration_Grid_;
  /**@type {BorderDashOffsetCallback<ScaleContext>}*/
  this.f_tickBorderDashOffsetCallback__org_pepstock_charba_client_configuration_Grid_;
 }
 /** @return {!Grid} */
 static $create__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  Grid.$clinit();
  let $instance = new Grid();
  $instance.$ctor__org_pepstock_charba_client_configuration_Grid__org_pepstock_charba_client_configuration_Axis(axis);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Grid__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractScaleLines__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_defaults_IsDefaultScaleLines(axis, axis.m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getGrid__());
  this.$init___$p_org_pepstock_charba_client_configuration_Grid();
  this.f_tickColorCallbackProxy__org_pepstock_charba_client_configuration_Grid_.callback = (/** ? */ context) =>{
   return ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String__boolean(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context), this.m_getTickColorCallback__(), this.m_getAxis__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_getTickColorAsString__(), false);
  };
  this.f_tickWidthCallbackProxy__org_pepstock_charba_client_configuration_Grid_.callback = (/** ? */ context_1) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_1), this.m_getTickWidthCallback__(), Integer.m_valueOf__int(this.m_getAxis__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_getTickWidth__())), Integer)).m_intValue__();
  };
  this.f_tickBorderDashOffsetCallbackProxy__org_pepstock_charba_client_configuration_Grid_.callback = (/** ? */ context_2) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_2), this.m_getTickBorderDashOffsetCallback__(), this.m_getAxis__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_getTickBorderDashOffset__()), Double)));
  };
 }
 /** @override @return {AbstractNode} */
 m_getElement___$pp_org_pepstock_charba_client_configuration() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__();
 }
 
 m_setDisplay__boolean(/** boolean */ display) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_setDisplay__boolean(display);
 }
 /** @return {boolean} */
 m_isDisplay__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_isDisplay__();
 }
 
 m_setCircular__boolean(/** boolean */ circular) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_setCircular__boolean(circular);
 }
 /** @return {boolean} */
 m_isCircular__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_isCircular__();
 }
 
 m_setColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/** Array<IsColor> */ color) {
  this.m_setColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<ScaleContext>}*/ (null));
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_setColor__arrayOf_org_pepstock_charba_client_colors_IsColor(color);
 }
 
 m_setColor__arrayOf_java_lang_String(/** Array<?string> */ color) {
  this.m_setColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<ScaleContext>}*/ (null));
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_setColor__arrayOf_java_lang_String(color);
 }
 /** @return {List<?string>} */
 m_getColorAsString__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_getColorsAsString__();
 }
 /** @return {List<IsColor>} */
 m_getColor__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_getColor__();
 }
 
 m_setBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_setBorderColor__org_pepstock_charba_client_colors_IsColor(color);
 }
 
 m_setBorderColor__java_lang_String(/** ?string */ color) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_setBorderColor__java_lang_String(color);
 }
 /** @return {?string} */
 m_getBorderColorAsString__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_getBorderColorAsString__();
 }
 /** @return {IsColor} */
 m_getBorderColor__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_getBorderColor__();
 }
 
 m_setBorderWidth__int(/** number */ borderWidth) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_setBorderWidth__int(borderWidth);
 }
 /** @return {number} */
 m_getBorderWidth__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_getBorderWidth__();
 }
 
 m_setBorderDash__arrayOf_int(/** Array<number> */ borderDash) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_setBorderDash__arrayOf_int(borderDash);
 }
 /** @return {List<Integer>} */
 m_getBorderDash__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_getBorderDash__();
 }
 
 m_setBorderDashOffset__double(/** number */ borderDashOffset) {
  this.m_setBorderDashOffset__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback(/**@type {BorderDashOffsetCallback<ScaleContext>}*/ (null));
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_setBorderDashOffset__double(borderDashOffset);
 }
 /** @return {number} */
 m_getBorderDashOffset__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_getBorderDashOffset__();
 }
 
 m_setLineWidth__arrayOf_int(/** Array<number> */ lineWidth) {
  this.m_setLineWidth__org_pepstock_charba_client_callbacks_WidthCallback(/**@type {WidthCallback<ScaleContext>}*/ (null));
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_setLineWidth__arrayOf_int(lineWidth);
 }
 /** @return {List<Integer>} */
 m_getLineWidth__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_getLinesWidth__();
 }
 
 m_setDrawBorder__boolean(/** boolean */ drawBorder) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_setDrawBorder__boolean(drawBorder);
 }
 /** @return {boolean} */
 m_isDrawBorder__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_isDrawBorder__();
 }
 
 m_setDrawOnChartArea__boolean(/** boolean */ drawOnChartArea) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_setDrawOnChartArea__boolean(drawOnChartArea);
 }
 /** @return {boolean} */
 m_isDrawOnChartArea__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_isDrawOnChartArea__();
 }
 
 m_setDrawTicks__boolean(/** boolean */ drawTicks) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_setDrawTicks__boolean(drawTicks);
 }
 /** @return {boolean} */
 m_isDrawTicks__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_isDrawTicks__();
 }
 
 m_setTickLength__int(/** number */ tickLength) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_setTickLength__int(tickLength);
 }
 /** @return {number} */
 m_getTickLength__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_getTickLength__();
 }
 
 m_setOffset__boolean(/** boolean */ offset) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_setOffset__boolean(offset);
 }
 /** @return {boolean} */
 m_isOffset__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_isOffset__();
 }
 
 m_setZ__int(/** number */ z) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_setZ__int(z);
 }
 /** @return {number} */
 m_getZ__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_getZ__();
 }
 
 m_setTickBorderDash__int(/** number */ tickBorderDash) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_setTickBorderDash__int(tickBorderDash);
 }
 /** @return {List<Integer>} */
 m_getTickBorderDash__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_getTickBorderDash__();
 }
 
 m_setTickBorderDashOffset__double(/** number */ tickBorderDashOffset) {
  this.m_setTickBorderDashOffset__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback(/**@type {BorderDashOffsetCallback<ScaleContext>}*/ (null));
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_setTickBorderDashOffset__double(tickBorderDashOffset);
 }
 /** @return {number} */
 m_getTickBorderDashOffset__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_getTickBorderDashOffset__();
 }
 
 m_setTickColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/** Array<IsColor> */ color) {
  this.m_setTickColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<ScaleContext>}*/ (null));
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_setTickColor__arrayOf_org_pepstock_charba_client_colors_IsColor(color);
 }
 
 m_setTickColor__arrayOf_java_lang_String(/** Array<?string> */ color) {
  this.m_setTickColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<ScaleContext>}*/ (null));
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_setTickColor__arrayOf_java_lang_String(color);
 }
 /** @return {?string} */
 m_getTickColorAsString__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_getTickColorAsString__();
 }
 /** @return {List<?string>} */
 m_getTickColorsAsString__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_getTickColorsAsString__();
 }
 /** @return {List<IsColor>} */
 m_getTickColor__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_getTickColor__();
 }
 
 m_setTickWidth__arrayOf_int(/** Array<number> */ tickWidth) {
  this.m_setTickWidth__org_pepstock_charba_client_callbacks_WidthCallback(/**@type {WidthCallback<ScaleContext>}*/ (null));
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_setTickWidth__arrayOf_int(tickWidth);
 }
 /** @return {number} */
 m_getTickWidth__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_getTickWidth__();
 }
 /** @return {List<Integer>} */
 m_getTicksWidth__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getGrid__().m_getTicksWidth__();
 }
 /** @return {ColorCallback<ScaleContext>} */
 m_getTickColorCallback__() {
  return this.f_tickColorCallback__org_pepstock_charba_client_configuration_Grid_;
 }
 
 m_setTickColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<ScaleContext> */ tickColorCallback) {
  this.f_tickColorCallback__org_pepstock_charba_client_configuration_Grid_ = tickColorCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getAxis__().m_getConfiguration__(), ExtendedScale)).m_getGrid__(), Property.f_TICK_COLOR__org_pepstock_charba_client_configuration_Grid_Property, tickColorCallback, this.f_tickColorCallbackProxy__org_pepstock_charba_client_configuration_Grid_);
 }
 
 m_setTickColor__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ tickColorCallback) {
  this.m_setTickColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<ScaleContext>}*/ (null));
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getAxis__().m_getConfiguration__(), ExtendedScale)).m_getGrid__(), Property.f_TICK_COLOR__org_pepstock_charba_client_configuration_Grid_Property, tickColorCallback);
 }
 /** @return {WidthCallback<ScaleContext>} */
 m_getTickWidthCallback__() {
  return this.f_tickWidthCallback__org_pepstock_charba_client_configuration_Grid_;
 }
 
 m_setTickWidth__org_pepstock_charba_client_callbacks_WidthCallback(/** WidthCallback<ScaleContext> */ tickWidthCallback) {
  this.f_tickWidthCallback__org_pepstock_charba_client_configuration_Grid_ = tickWidthCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getAxis__().m_getConfiguration__(), ExtendedScale)).m_getGrid__(), Property.f_TICK_WIDTH__org_pepstock_charba_client_configuration_Grid_Property, tickWidthCallback, this.f_tickWidthCallbackProxy__org_pepstock_charba_client_configuration_Grid_);
 }
 
 m_setTickWidth__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ tickWidthCallback) {
  this.m_setTickWidth__org_pepstock_charba_client_callbacks_WidthCallback(/**@type {WidthCallback<ScaleContext>}*/ (null));
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getAxis__().m_getConfiguration__(), ExtendedScale)).m_getGrid__(), Property.f_TICK_WIDTH__org_pepstock_charba_client_configuration_Grid_Property, tickWidthCallback);
 }
 /** @return {BorderDashOffsetCallback<ScaleContext>} */
 m_getTickBorderDashOffsetCallback__() {
  return this.f_tickBorderDashOffsetCallback__org_pepstock_charba_client_configuration_Grid_;
 }
 
 m_setTickBorderDashOffset__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback(/** BorderDashOffsetCallback<ScaleContext> */ tickBorderDashOffsetCallback) {
  this.f_tickBorderDashOffsetCallback__org_pepstock_charba_client_configuration_Grid_ = tickBorderDashOffsetCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getAxis__().m_getConfiguration__(), ExtendedScale)).m_getGrid__(), Property.f_TICK_BORDER_DASH_OFFSET__org_pepstock_charba_client_configuration_Grid_Property, tickBorderDashOffsetCallback, this.f_tickBorderDashOffsetCallbackProxy__org_pepstock_charba_client_configuration_Grid_);
 }
 
 m_setTickBorderDashOffset__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ tickBorderDashOffsetCallback) {
  this.m_setTickBorderDashOffset__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback(/**@type {BorderDashOffsetCallback<ScaleContext>}*/ (null));
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getAxis__().m_getConfiguration__(), ExtendedScale)).m_getGrid__(), Property.f_TICK_BORDER_DASH_OFFSET__org_pepstock_charba_client_configuration_Grid_Property, tickBorderDashOffsetCallback);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_Grid() {
  this.f_tickColorCallbackProxy__org_pepstock_charba_client_configuration_Grid_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_tickWidthCallbackProxy__org_pepstock_charba_client_configuration_Grid_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_tickBorderDashOffsetCallbackProxy__org_pepstock_charba_client_configuration_Grid_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_tickColorCallback__org_pepstock_charba_client_configuration_Grid_ = null;
  this.f_tickWidthCallback__org_pepstock_charba_client_configuration_Grid_ = null;
  this.f_tickBorderDashOffsetCallback__org_pepstock_charba_client_configuration_Grid_ = null;
 }
 
 static $clinit() {
  Grid.$clinit = () =>{};
  Grid.$loadModules();
  AbstractScaleLines.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Grid;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Property = goog.module.get('org.pepstock.charba.client.configuration.Grid.Property$impl');
  ExtendedScale = goog.module.get('org.pepstock.charba.client.options.ExtendedScale$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Grid, "org.pepstock.charba.client.configuration.Grid");

exports = Grid;

//# sourceMappingURL=Grid.js.map
