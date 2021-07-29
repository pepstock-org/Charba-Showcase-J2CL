goog.module('org.pepstock.charba.client.configuration.Line$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractConfigurationElement = goog.require('org.pepstock.charba.client.configuration.AbstractConfigurationElement$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let BorderDashCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderDashCallback$impl');
let BorderDashOffsetCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderDashOffsetCallback$impl');
let CapStyleCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CapStyleCallback$impl');
let CubicInterpolationModeCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CubicInterpolationModeCallback$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let FillCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FillCallback$impl');
let JoinStyleCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.JoinStyleCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let SteppedCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.SteppedCallback$impl');
let ArrayInteger_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.Line.Property$impl');
let IsDefaultLine = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultLine$impl');
let CapStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.CapStyle$impl');
let CubicInterpolationMode = goog.forwardDeclare('org.pepstock.charba.client.enums.CubicInterpolationMode$impl');
let IsFill = goog.forwardDeclare('org.pepstock.charba.client.enums.IsFill$impl');
let JoinStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.JoinStyle$impl');
let Stepped = goog.forwardDeclare('org.pepstock.charba.client.enums.Stepped$impl');
let AbstractElement = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractElement$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @extends {AbstractConfigurationElement<IsDefaultLine>}
 */
class Line extends AbstractConfigurationElement {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):?string>}*/
  this.f_borderCapStyleCallbackProxy__org_pepstock_charba_client_configuration_Line_;
  /**@type {CharbaCallbackProxy<?function(?):Array>}*/
  this.f_borderDashCallbackProxy__org_pepstock_charba_client_configuration_Line_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_borderDashOffsetCallbackProxy__org_pepstock_charba_client_configuration_Line_;
  /**@type {CharbaCallbackProxy<?function(?):?string>}*/
  this.f_borderJoinStyleCallbackProxy__org_pepstock_charba_client_configuration_Line_;
  /**@type {CharbaCallbackProxy<?function(?):?string>}*/
  this.f_cubicInterpolationModeCallbackProxy__org_pepstock_charba_client_configuration_Line_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_fillCallbackProxy__org_pepstock_charba_client_configuration_Line_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_steppedCallbackProxy__org_pepstock_charba_client_configuration_Line_;
  /**@type {CapStyleCallback<DatasetContext>}*/
  this.f_borderCapStyleCallback__org_pepstock_charba_client_configuration_Line_;
  /**@type {BorderDashCallback<DatasetContext>}*/
  this.f_borderDashCallback__org_pepstock_charba_client_configuration_Line_;
  /**@type {BorderDashOffsetCallback<DatasetContext>}*/
  this.f_borderDashOffsetCallback__org_pepstock_charba_client_configuration_Line_;
  /**@type {JoinStyleCallback<DatasetContext>}*/
  this.f_borderJoinStyleCallback__org_pepstock_charba_client_configuration_Line_;
  /**@type {CubicInterpolationModeCallback}*/
  this.f_cubicInterpolationModeCallback__org_pepstock_charba_client_configuration_Line_;
  /**@type {FillCallback}*/
  this.f_fillCallback__org_pepstock_charba_client_configuration_Line_;
  /**@type {SteppedCallback}*/
  this.f_steppedCallback__org_pepstock_charba_client_configuration_Line_;
 }
 /** @return {!Line} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  Line.$clinit();
  let $instance = new Line();
  $instance.$ctor__org_pepstock_charba_client_configuration_Line__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Line__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractConfigurationElement__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  this.$init___$p_org_pepstock_charba_client_configuration_Line();
  this.f_borderCapStyleCallbackProxy__org_pepstock_charba_client_configuration_Line_.callback = (/** ? */ context) =>{
   return this.m_onBorderCapStyle__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_CapStyleCallback__org_pepstock_charba_client_enums_CapStyle_$p_org_pepstock_charba_client_configuration_Line(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context), this.m_getBorderCapStyleCallback__(), this.m_getDefaultElement__().m_getBorderCapStyle__());
  };
  this.f_borderDashCallbackProxy__org_pepstock_charba_client_configuration_Line_.callback = (/** ? */ context_1) =>{
   return this.m_onBorderDash__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_BorderDashCallback_$p_org_pepstock_charba_client_configuration_Line(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_1), this.m_getBorderDashCallback__());
  };
  this.f_borderDashOffsetCallbackProxy__org_pepstock_charba_client_configuration_Line_.callback = (/** ? */ context_2) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_2), this.m_getBorderDashOffsetCallback__(), this.m_getDefaultElement__().m_getBorderDashOffset__()), Double)));
  };
  this.f_borderJoinStyleCallbackProxy__org_pepstock_charba_client_configuration_Line_.callback = (/** ? */ context_3) =>{
   return this.m_onBorderJoinStyle__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_JoinStyleCallback__org_pepstock_charba_client_enums_JoinStyle_$p_org_pepstock_charba_client_configuration_Line(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_3), this.m_getBorderJoinStyleCallback__(), this.m_getDefaultElement__().m_getBorderJoinStyle__());
  };
  this.f_cubicInterpolationModeCallbackProxy__org_pepstock_charba_client_configuration_Line_.callback = (/** ? */ context_4) =>{
   return this.m_onCubicInterpolationMode__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_CubicInterpolationModeCallback__org_pepstock_charba_client_enums_CubicInterpolationMode_$p_org_pepstock_charba_client_configuration_Line(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_4), this.m_getCubicInterpolationModeCallback__(), this.m_getDefaultElement__().m_getCubicInterpolationMode__());
  };
  this.f_fillCallbackProxy__org_pepstock_charba_client_configuration_Line_.callback = (/** ? */ context_5) =>{
   return this.m_onFill__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_FillCallback__org_pepstock_charba_client_enums_IsFill_$p_org_pepstock_charba_client_configuration_Line(DatasetContext.$create__org_pepstock_charba_client_commons_NativeObject(context_5), this.m_getFillCallback__(), this.m_getDefaultElement__().m_getFill__());
  };
  this.f_steppedCallbackProxy__org_pepstock_charba_client_configuration_Line_.callback = (/** ? */ context_6) =>{
   return this.m_onStepped__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_SteppedCallback__org_pepstock_charba_client_enums_Stepped_$p_org_pepstock_charba_client_configuration_Line(DatasetContext.$create__org_pepstock_charba_client_commons_NativeObject(context_6), this.m_getSteppedCallback__(), this.m_getDefaultElement__().m_getStepped__());
  };
 }
 /** @override @return {AbstractElement<IsDefaultLine>} */
 m_getElement__() {
  return this.m_getConfiguration__().m_getElements__().m_getLine__();
 }
 /** @override @return {IsDefaultLine} */
 m_getDefaultElement__() {
  return this.m_getOptions__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getElements__().m_getLine__();
 }
 
 m_setTension__double(/** number */ tension) {
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setTension__double(tension);
 }
 /** @return {number} */
 m_getTension__() {
  return this.m_getConfiguration__().m_getElements__().m_getLine__().m_getTension__();
 }
 
 m_setBorderCapStyle__org_pepstock_charba_client_enums_CapStyle(/** CapStyle */ borderCapStyle) {
  this.m_setBorderCapStyle__org_pepstock_charba_client_callbacks_CapStyleCallback(/**@type {CapStyleCallback<DatasetContext>}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setBorderCapStyle__org_pepstock_charba_client_enums_CapStyle(borderCapStyle);
 }
 /** @return {CapStyle} */
 m_getBorderCapStyle__() {
  return this.m_getConfiguration__().m_getElements__().m_getLine__().m_getBorderCapStyle__();
 }
 
 m_setBorderDash__arrayOf_int(/** Array<number> */ borderDash) {
  this.m_setBorderDash__org_pepstock_charba_client_callbacks_BorderDashCallback(/**@type {BorderDashCallback<DatasetContext>}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setBorderDash__arrayOf_int(borderDash);
 }
 /** @return {List<Integer>} */
 m_getBorderDash__() {
  return this.m_getConfiguration__().m_getElements__().m_getLine__().m_getBorderDash__();
 }
 
 m_setBorderDashOffset__double(/** number */ borderDashOffset) {
  this.m_setBorderDashOffset__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback(/**@type {BorderDashOffsetCallback<DatasetContext>}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setBorderDashOffset__double(borderDashOffset);
 }
 /** @return {number} */
 m_getBorderDashOffset__() {
  return this.m_getConfiguration__().m_getElements__().m_getLine__().m_getBorderDashOffset__();
 }
 
 m_setBorderJoinStyle__org_pepstock_charba_client_enums_JoinStyle(/** JoinStyle */ borderJoinStyle) {
  this.m_setBorderJoinStyle__org_pepstock_charba_client_callbacks_JoinStyleCallback(/**@type {JoinStyleCallback<DatasetContext>}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setBorderJoinStyle__org_pepstock_charba_client_enums_JoinStyle(borderJoinStyle);
 }
 /** @return {JoinStyle} */
 m_getBorderJoinStyle__() {
  return this.m_getConfiguration__().m_getElements__().m_getLine__().m_getBorderJoinStyle__();
 }
 
 m_setCapBezierPoints__boolean(/** boolean */ capBezierPoints) {
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setCapBezierPoints__boolean(capBezierPoints);
 }
 /** @return {boolean} */
 m_isCapBezierPoints__() {
  return this.m_getConfiguration__().m_getElements__().m_getLine__().m_isCapBezierPoints__();
 }
 
 m_setCubicInterpolationMode__org_pepstock_charba_client_enums_CubicInterpolationMode(/** CubicInterpolationMode */ mode) {
  this.m_setCubicInterpolationMode__org_pepstock_charba_client_callbacks_CubicInterpolationModeCallback(/**@type {CubicInterpolationModeCallback}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setCubicInterpolationMode__org_pepstock_charba_client_enums_CubicInterpolationMode(mode);
 }
 /** @return {CubicInterpolationMode} */
 m_getCubicInterpolationMode__() {
  return this.m_getConfiguration__().m_getElements__().m_getLine__().m_getCubicInterpolationMode__();
 }
 
 m_setFill__boolean(/** boolean */ fill) {
  this.m_setFill__org_pepstock_charba_client_callbacks_FillCallback(/**@type {FillCallback}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setFill__boolean(fill);
 }
 
 m_setFill__int(/** number */ index) {
  this.m_setFill__org_pepstock_charba_client_callbacks_FillCallback(/**@type {FillCallback}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setFill__int(index);
 }
 
 m_setFill__java_lang_String(/** ?string */ index) {
  this.m_setFill__org_pepstock_charba_client_callbacks_FillCallback(/**@type {FillCallback}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setFill__java_lang_String(index);
 }
 
 m_setFill__org_pepstock_charba_client_enums_IsFill(/** IsFill */ fill) {
  this.m_setFill__org_pepstock_charba_client_callbacks_FillCallback(/**@type {FillCallback}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setFill__org_pepstock_charba_client_enums_IsFill(fill);
 }
 /** @return {IsFill} */
 m_getFill__() {
  return this.m_getConfiguration__().m_getElements__().m_getLine__().m_getFill__();
 }
 
 m_setStepped__boolean(/** boolean */ stepped) {
  this.m_setStepped__org_pepstock_charba_client_callbacks_SteppedCallback(/**@type {SteppedCallback}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setStepped__boolean(stepped);
 }
 
 m_setStepped__org_pepstock_charba_client_enums_Stepped(/** Stepped */ stepped) {
  this.m_setStepped__org_pepstock_charba_client_callbacks_SteppedCallback(/**@type {SteppedCallback}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getLine__().m_setStepped__org_pepstock_charba_client_enums_Stepped(stepped);
 }
 /** @return {Stepped} */
 m_getStepped__() {
  return this.m_getConfiguration__().m_getElements__().m_getLine__().m_getStepped__();
 }
 /** @return {CapStyleCallback<DatasetContext>} */
 m_getBorderCapStyleCallback__() {
  return this.f_borderCapStyleCallback__org_pepstock_charba_client_configuration_Line_;
 }
 
 m_setBorderCapStyle__org_pepstock_charba_client_callbacks_CapStyleCallback(/** CapStyleCallback<DatasetContext> */ borderCapStyleCallback) {
  this.f_borderCapStyleCallback__org_pepstock_charba_client_configuration_Line_ = borderCapStyleCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_BORDER_CAP_STYLE__org_pepstock_charba_client_configuration_Line_Property, borderCapStyleCallback, this.f_borderCapStyleCallbackProxy__org_pepstock_charba_client_configuration_Line_);
 }
 
 m_setBorderCapStyle__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderCapStyleCallback) {
  this.m_setBorderCapStyle__org_pepstock_charba_client_callbacks_CapStyleCallback(/**@type {CapStyleCallback<DatasetContext>}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_BORDER_CAP_STYLE__org_pepstock_charba_client_configuration_Line_Property, borderCapStyleCallback);
 }
 /** @return {BorderDashCallback<DatasetContext>} */
 m_getBorderDashCallback__() {
  return this.f_borderDashCallback__org_pepstock_charba_client_configuration_Line_;
 }
 
 m_setBorderDash__org_pepstock_charba_client_callbacks_BorderDashCallback(/** BorderDashCallback<DatasetContext> */ borderDashCallback) {
  this.f_borderDashCallback__org_pepstock_charba_client_configuration_Line_ = borderDashCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_BORDER_DASH__org_pepstock_charba_client_configuration_Line_Property, borderDashCallback, this.f_borderDashCallbackProxy__org_pepstock_charba_client_configuration_Line_);
 }
 
 m_setBorderDash__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderDashCallback) {
  this.m_setBorderDash__org_pepstock_charba_client_callbacks_BorderDashCallback(/**@type {BorderDashCallback<DatasetContext>}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_BORDER_DASH__org_pepstock_charba_client_configuration_Line_Property, borderDashCallback);
 }
 /** @return {BorderDashOffsetCallback<DatasetContext>} */
 m_getBorderDashOffsetCallback__() {
  return this.f_borderDashOffsetCallback__org_pepstock_charba_client_configuration_Line_;
 }
 
 m_setBorderDashOffset__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback(/** BorderDashOffsetCallback<DatasetContext> */ borderDashOffsetCallback) {
  this.f_borderDashOffsetCallback__org_pepstock_charba_client_configuration_Line_ = borderDashOffsetCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_BORDER_DASH_OFFSET__org_pepstock_charba_client_configuration_Line_Property, borderDashOffsetCallback, this.f_borderDashOffsetCallbackProxy__org_pepstock_charba_client_configuration_Line_);
 }
 
 m_setBorderDashOffset__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderDashOffsetCallback) {
  this.m_setBorderDashOffset__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback(/**@type {BorderDashOffsetCallback<DatasetContext>}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_BORDER_DASH_OFFSET__org_pepstock_charba_client_configuration_Line_Property, borderDashOffsetCallback);
 }
 /** @return {JoinStyleCallback<DatasetContext>} */
 m_getBorderJoinStyleCallback__() {
  return this.f_borderJoinStyleCallback__org_pepstock_charba_client_configuration_Line_;
 }
 
 m_setBorderJoinStyle__org_pepstock_charba_client_callbacks_JoinStyleCallback(/** JoinStyleCallback<DatasetContext> */ borderJoinStyleCallback) {
  this.f_borderJoinStyleCallback__org_pepstock_charba_client_configuration_Line_ = borderJoinStyleCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_BORDER_JOIN_STYLE__org_pepstock_charba_client_configuration_Line_Property, borderJoinStyleCallback, this.f_borderJoinStyleCallbackProxy__org_pepstock_charba_client_configuration_Line_);
 }
 
 m_setBorderJoinStyle__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderJoinStyleCallback) {
  this.m_setBorderJoinStyle__org_pepstock_charba_client_callbacks_JoinStyleCallback(/**@type {JoinStyleCallback<DatasetContext>}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_BORDER_JOIN_STYLE__org_pepstock_charba_client_configuration_Line_Property, borderJoinStyleCallback);
 }
 /** @return {CubicInterpolationModeCallback} */
 m_getCubicInterpolationModeCallback__() {
  return this.f_cubicInterpolationModeCallback__org_pepstock_charba_client_configuration_Line_;
 }
 
 m_setCubicInterpolationMode__org_pepstock_charba_client_callbacks_CubicInterpolationModeCallback(/** CubicInterpolationModeCallback */ cubicInterpolationModeCallback) {
  this.f_cubicInterpolationModeCallback__org_pepstock_charba_client_configuration_Line_ = cubicInterpolationModeCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_configuration_Line_Property, cubicInterpolationModeCallback, this.f_cubicInterpolationModeCallbackProxy__org_pepstock_charba_client_configuration_Line_);
 }
 
 m_setCubicInterpolationMode__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ cubicInterpolationModeCallback) {
  this.m_setCubicInterpolationMode__org_pepstock_charba_client_callbacks_CubicInterpolationModeCallback(/**@type {CubicInterpolationModeCallback}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_configuration_Line_Property, cubicInterpolationModeCallback);
 }
 /** @return {FillCallback} */
 m_getFillCallback__() {
  return this.f_fillCallback__org_pepstock_charba_client_configuration_Line_;
 }
 
 m_setFill__org_pepstock_charba_client_callbacks_FillCallback(/** FillCallback */ fillCallback) {
  this.f_fillCallback__org_pepstock_charba_client_configuration_Line_ = fillCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_FILL__org_pepstock_charba_client_configuration_Line_Property, fillCallback, this.f_fillCallbackProxy__org_pepstock_charba_client_configuration_Line_);
 }
 
 m_setFill__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ fillCallback) {
  this.m_setFill__org_pepstock_charba_client_callbacks_FillCallback(/**@type {FillCallback}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_FILL__org_pepstock_charba_client_configuration_Line_Property, fillCallback);
 }
 /** @return {SteppedCallback} */
 m_getSteppedCallback__() {
  return this.f_steppedCallback__org_pepstock_charba_client_configuration_Line_;
 }
 
 m_setStepped__org_pepstock_charba_client_callbacks_SteppedCallback(/** SteppedCallback */ steppedCallback) {
  this.f_steppedCallback__org_pepstock_charba_client_configuration_Line_ = steppedCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_STEPPED__org_pepstock_charba_client_configuration_Line_Property, steppedCallback, this.f_steppedCallbackProxy__org_pepstock_charba_client_configuration_Line_);
 }
 
 m_setStepped__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ steppedCallback) {
  this.m_setStepped__org_pepstock_charba_client_callbacks_SteppedCallback(/**@type {SteppedCallback}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_STEPPED__org_pepstock_charba_client_configuration_Line_Property, steppedCallback);
 }
 /** @return {?string} */
 m_onBorderCapStyle__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_CapStyleCallback__org_pepstock_charba_client_enums_CapStyle_$p_org_pepstock_charba_client_configuration_Line(/** DatasetContext */ context, /** CapStyleCallback<DatasetContext> */ callback, /** CapStyle */ defaultValue) {
  return this.m_checkCallbackResult__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_configuration_Line(/**@type {CapStyle}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, callback), CapStyle)), defaultValue);
 }
 /** @return {Array} */
 m_onBorderDash__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_BorderDashCallback_$p_org_pepstock_charba_client_configuration_Line(/** DatasetContext */ context, /** BorderDashCallback<DatasetContext> */ callback) {
  let result = /**@type {List<Integer>}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, callback), List));
  return ArrayInteger_$Overlay.m_fromOrEmpty__java_util_List(result);
 }
 /** @return {?string} */
 m_onBorderJoinStyle__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_JoinStyleCallback__org_pepstock_charba_client_enums_JoinStyle_$p_org_pepstock_charba_client_configuration_Line(/** DatasetContext */ context, /** JoinStyleCallback<DatasetContext> */ callback, /** JoinStyle */ defaultValue) {
  return this.m_checkCallbackResult__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_configuration_Line(/**@type {JoinStyle}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, callback), JoinStyle)), defaultValue);
 }
 /** @return {?string} */
 m_onCubicInterpolationMode__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_CubicInterpolationModeCallback__org_pepstock_charba_client_enums_CubicInterpolationMode_$p_org_pepstock_charba_client_configuration_Line(/** DatasetContext */ context, /** CubicInterpolationModeCallback */ callback, /** CubicInterpolationMode */ defaultValue) {
  return this.m_checkCallbackResult__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_configuration_Line(/**@type {CubicInterpolationMode}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, callback), CubicInterpolationMode)), defaultValue);
 }
 /** @return {?string} */
 m_checkCallbackResult__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_configuration_Line(/** Key */ result, /** Key */ defaultValue) {
  if (!$Equality.$same(result, null)) {
   return result.m_value__();
  }
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(defaultValue, "Default value argument");
  return defaultValue.m_value__();
 }
 /** @return {*} */
 m_onFill__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_FillCallback__org_pepstock_charba_client_enums_IsFill_$p_org_pepstock_charba_client_configuration_Line(/** DatasetContext */ context, /** FillCallback */ callback, /** IsFill */ defaultValue) {
  let result = ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, callback);
  let transformed = IsFill.m_transform__java_lang_Object(result);
  if (!$Equality.$same(transformed, null)) {
   return transformed;
  }
  return IsFill.m_toObject__org_pepstock_charba_client_enums_IsFill(/**@type {IsFill}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(defaultValue, "Default fill argument"), IsFill)));
 }
 /** @return {*} */
 m_onStepped__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_SteppedCallback__org_pepstock_charba_client_enums_Stepped_$p_org_pepstock_charba_client_configuration_Line(/** DatasetContext */ context, /** SteppedCallback */ callback, /** Stepped */ defaultValue) {
  let result = /**@type {Stepped}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, callback), Stepped));
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(Stepped.f_FALSE__org_pepstock_charba_client_enums_Stepped, result)) {
   return false;
  } else if (!$Equality.$same(result, null)) {
   return result.m_value__();
  }
  return /**@type {Stepped}*/ ($Casts.$to(Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(defaultValue), Stepped)).m_value__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_Line() {
  this.f_borderCapStyleCallbackProxy__org_pepstock_charba_client_configuration_Line_ = /**@type {CharbaCallbackProxy<?function(?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderDashCallbackProxy__org_pepstock_charba_client_configuration_Line_ = /**@type {CharbaCallbackProxy<?function(?):Array>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderDashOffsetCallbackProxy__org_pepstock_charba_client_configuration_Line_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderJoinStyleCallbackProxy__org_pepstock_charba_client_configuration_Line_ = /**@type {CharbaCallbackProxy<?function(?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_cubicInterpolationModeCallbackProxy__org_pepstock_charba_client_configuration_Line_ = /**@type {CharbaCallbackProxy<?function(?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_fillCallbackProxy__org_pepstock_charba_client_configuration_Line_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_steppedCallbackProxy__org_pepstock_charba_client_configuration_Line_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderCapStyleCallback__org_pepstock_charba_client_configuration_Line_ = null;
  this.f_borderDashCallback__org_pepstock_charba_client_configuration_Line_ = null;
  this.f_borderDashOffsetCallback__org_pepstock_charba_client_configuration_Line_ = null;
  this.f_borderJoinStyleCallback__org_pepstock_charba_client_configuration_Line_ = null;
  this.f_cubicInterpolationModeCallback__org_pepstock_charba_client_configuration_Line_ = null;
  this.f_fillCallback__org_pepstock_charba_client_configuration_Line_ = null;
  this.f_steppedCallback__org_pepstock_charba_client_configuration_Line_ = null;
 }
 
 static $clinit() {
  Line.$clinit = () =>{};
  Line.$loadModules();
  AbstractConfigurationElement.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Line;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  List = goog.module.get('java.util.List$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DatasetContext = goog.module.get('org.pepstock.charba.client.callbacks.DatasetContext$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  ArrayInteger_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Property = goog.module.get('org.pepstock.charba.client.configuration.Line.Property$impl');
  CapStyle = goog.module.get('org.pepstock.charba.client.enums.CapStyle$impl');
  CubicInterpolationMode = goog.module.get('org.pepstock.charba.client.enums.CubicInterpolationMode$impl');
  IsFill = goog.module.get('org.pepstock.charba.client.enums.IsFill$impl');
  JoinStyle = goog.module.get('org.pepstock.charba.client.enums.JoinStyle$impl');
  Stepped = goog.module.get('org.pepstock.charba.client.enums.Stepped$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(Line, "org.pepstock.charba.client.configuration.Line");

exports = Line;

//# sourceMappingURL=Line.js.map
