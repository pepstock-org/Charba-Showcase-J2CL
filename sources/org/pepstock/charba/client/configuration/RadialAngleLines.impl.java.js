goog.module('org.pepstock.charba.client.configuration.RadialAngleLines$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractScaleLines = goog.require('org.pepstock.charba.client.configuration.AbstractScaleLines$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let BorderDashCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderDashCallback$impl');
let BorderDashOffsetCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderDashOffsetCallback$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let WidthCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.WidthCallback$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let ArrayInteger_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.RadialAngleLines.Property$impl');
let ExtendedScale = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedScale$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class RadialAngleLines extends AbstractScaleLines {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, ?):Array>}*/
  this.f_borderDashCallbackProxy__org_pepstock_charba_client_configuration_RadialAngleLines_;
  /**@type {BorderDashCallback<ScaleContext>}*/
  this.f_borderDashCallback__org_pepstock_charba_client_configuration_RadialAngleLines_;
 }
 /** @return {!RadialAngleLines} */
 static $create__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  RadialAngleLines.$clinit();
  let $instance = new RadialAngleLines();
  $instance.$ctor__org_pepstock_charba_client_configuration_RadialAngleLines__org_pepstock_charba_client_configuration_Axis(axis);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_RadialAngleLines__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractScaleLines__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_defaults_IsDefaultScaleLines(axis, axis.m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getAngleLines__());
  this.$init___$p_org_pepstock_charba_client_configuration_RadialAngleLines();
  this.f_borderDashCallbackProxy__org_pepstock_charba_client_configuration_RadialAngleLines_.callback = (/** Object */ contextFunction, /** ? */ context) =>{
   return this.m_onBorderDash__org_pepstock_charba_client_callbacks_ScaleContext__org_pepstock_charba_client_callbacks_BorderDashCallback__java_util_List_$p_org_pepstock_charba_client_configuration_RadialAngleLines(this.m_getAxis__().m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context), this.m_getBorderDashCallback__(), this.m_getAxis__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getAngleLines__().m_getBorderDash__());
  };
 }
 /** @override @return {AbstractNode} */
 m_getElement___$pp_org_pepstock_charba_client_configuration() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAngleLines__();
 }
 
 m_setDisplay__boolean(/** boolean */ display) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAngleLines__().m_setDisplay__boolean(display);
 }
 /** @return {boolean} */
 m_isDisplay__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAngleLines__().m_isDisplay__();
 }
 
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<ScaleContext>}*/ (null));
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAngleLines__().m_setColor__org_pepstock_charba_client_colors_IsColor(color);
 }
 
 m_setColor__java_lang_String(/** ?string */ color) {
  this.m_setColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<ScaleContext>}*/ (null));
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAngleLines__().m_setColor__java_lang_String(color);
 }
 /** @return {?string} */
 m_getColorAsString__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAngleLines__().m_getColorAsString__();
 }
 /** @return {IsColor} */
 m_getColor__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAngleLines__().m_getColor__();
 }
 
 m_setLineWidth__int(/** number */ lineWidth) {
  this.m_setLineWidth__org_pepstock_charba_client_callbacks_WidthCallback(/**@type {WidthCallback<ScaleContext>}*/ (null));
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAngleLines__().m_setLineWidth__int(lineWidth);
 }
 /** @return {number} */
 m_getLineWidth__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAngleLines__().m_getLineWidth__();
 }
 
 m_setBorderDash__arrayOf_int(/** Array<number> */ borderDash) {
  this.m_setBorderDash__org_pepstock_charba_client_callbacks_BorderDashCallback(/**@type {BorderDashCallback<ScaleContext>}*/ (null));
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAngleLines__().m_setBorderDash__arrayOf_int(borderDash);
 }
 /** @return {List<Integer>} */
 m_getBorderDash__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAngleLines__().m_getBorderDash__();
 }
 
 m_setBorderDashOffset__double(/** number */ borderDashOffset) {
  this.m_setBorderDashOffset__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback(/**@type {BorderDashOffsetCallback<ScaleContext>}*/ (null));
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAngleLines__().m_setBorderDashOffset__double(borderDashOffset);
 }
 /** @return {number} */
 m_getBorderDashOffset__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAngleLines__().m_getBorderDashOffset__();
 }
 /** @return {BorderDashCallback<ScaleContext>} */
 m_getBorderDashCallback__() {
  return this.f_borderDashCallback__org_pepstock_charba_client_configuration_RadialAngleLines_;
 }
 
 m_setBorderDash__org_pepstock_charba_client_callbacks_BorderDashCallback(/** BorderDashCallback<ScaleContext> */ borderDashCallback) {
  this.f_borderDashCallback__org_pepstock_charba_client_configuration_RadialAngleLines_ = borderDashCallback;
  this.m_getAxis__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getAxis__().m_getConfiguration__(), ExtendedScale)).m_getAngleLines__(), Property.f_BORDER_DASH__org_pepstock_charba_client_configuration_RadialAngleLines_Property, borderDashCallback, this.f_borderDashCallbackProxy__org_pepstock_charba_client_configuration_RadialAngleLines_);
 }
 /** @return {Array} */
 m_onBorderDash__org_pepstock_charba_client_callbacks_ScaleContext__org_pepstock_charba_client_callbacks_BorderDashCallback__java_util_List_$p_org_pepstock_charba_client_configuration_RadialAngleLines(/** ScaleContext */ context, /** BorderDashCallback<ScaleContext> */ borderDashCallback, /** List<Integer> */ defaultValue) {
  let result = /**@type {List<Integer>}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, borderDashCallback), List));
  if (!$Equality.$same(result, null)) {
   return ArrayInteger_$Overlay.m_fromOrEmpty__java_util_List(result);
  }
  return ArrayInteger_$Overlay.m_fromOrEmpty__java_util_List(defaultValue);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_RadialAngleLines() {
  this.f_borderDashCallbackProxy__org_pepstock_charba_client_configuration_RadialAngleLines_ = /**@type {CharbaCallbackProxy<?function(Object, ?):Array>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderDashCallback__org_pepstock_charba_client_configuration_RadialAngleLines_ = null;
 }
 
 static $clinit() {
  RadialAngleLines.$clinit = () =>{};
  RadialAngleLines.$loadModules();
  AbstractScaleLines.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RadialAngleLines;
 }
 
 static $loadModules() {
  List = goog.module.get('java.util.List$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  ArrayInteger_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Property = goog.module.get('org.pepstock.charba.client.configuration.RadialAngleLines.Property$impl');
  ExtendedScale = goog.module.get('org.pepstock.charba.client.options.ExtendedScale$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(RadialAngleLines, "org.pepstock.charba.client.configuration.RadialAngleLines");

exports = RadialAngleLines;

//# sourceMappingURL=RadialAngleLines.js.map
