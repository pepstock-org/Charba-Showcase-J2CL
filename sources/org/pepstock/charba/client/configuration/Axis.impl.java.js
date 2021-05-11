goog.module('org.pepstock.charba.client.configuration.Axis$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationContainer = goog.require('org.pepstock.charba.client.configuration.ConfigurationContainer$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ScaleType = goog.forwardDeclare('org.pepstock.charba.client.ScaleType$impl');
let AxisBuildTicksCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.AxisBuildTicksCallback$impl');
let AxisCalculateTickRotationCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.AxisCalculateTickRotationCallback$impl');
let AxisDataLimitsCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.AxisDataLimitsCallback$impl');
let AxisDimensionsCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.AxisDimensionsCallback$impl');
let AxisFitCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.AxisFitCallback$impl');
let AxisTickToLabelConversionCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.AxisTickToLabelConversionCallback$impl');
let AxisUpdateCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.AxisUpdateCallback$impl');
let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis.Property$impl');
let ConfigurationEnvelop = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let IsDefaultScale = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScale$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let AxisType = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisType$impl');
let Display = goog.forwardDeclare('org.pepstock.charba.client.enums.Display$impl');
let AxisItem = goog.forwardDeclare('org.pepstock.charba.client.items.AxisItem$impl');
let ExtendedScale = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedScale$impl');
let IsScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.IsScaleId$impl');
let Scale = goog.forwardDeclare('org.pepstock.charba.client.options.Scale$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @abstract
 * @extends {ConfigurationContainer<ExtendedScale>}
 */
class Axis extends ConfigurationContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/
  this.f_beforeUpdateCallbackProxy__org_pepstock_charba_client_configuration_Axis_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/
  this.f_beforeSetDimensionsCallbackProxy__org_pepstock_charba_client_configuration_Axis_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/
  this.f_afterSetDimensionsCallbackProxy__org_pepstock_charba_client_configuration_Axis_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/
  this.f_beforeDataLimitsCallbackProxy__org_pepstock_charba_client_configuration_Axis_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/
  this.f_afterDataLimitsCallbackProxy__org_pepstock_charba_client_configuration_Axis_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/
  this.f_beforeTickToLabelConversionCallbackProxy__org_pepstock_charba_client_configuration_Axis_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/
  this.f_afterTickToLabelConversionCallbackProxy__org_pepstock_charba_client_configuration_Axis_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/
  this.f_beforeCalculateTickRotationCallbackProxy__org_pepstock_charba_client_configuration_Axis_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/
  this.f_afterCalculateTickRotationCallbackProxy__org_pepstock_charba_client_configuration_Axis_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/
  this.f_beforeFitCallbackProxy__org_pepstock_charba_client_configuration_Axis_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/
  this.f_afterFitCallbackProxy__org_pepstock_charba_client_configuration_Axis_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/
  this.f_afterUpdateCallbackProxy__org_pepstock_charba_client_configuration_Axis_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/
  this.f_beforeBuildTicksCallbackProxy__org_pepstock_charba_client_configuration_Axis_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/
  this.f_afterBuildTicksCallbackProxy__org_pepstock_charba_client_configuration_Axis_;
  /**@type {AxisCalculateTickRotationCallback}*/
  this.f_axisCalculateTickRotationCallback__org_pepstock_charba_client_configuration_Axis_;
  /**@type {AxisDataLimitsCallback}*/
  this.f_axisDataLimitsCallback__org_pepstock_charba_client_configuration_Axis_;
  /**@type {AxisDimensionsCallback}*/
  this.f_axisDimensionsCallback__org_pepstock_charba_client_configuration_Axis_;
  /**@type {AxisFitCallback}*/
  this.f_axisFitCallback__org_pepstock_charba_client_configuration_Axis_;
  /**@type {AxisTickToLabelConversionCallback}*/
  this.f_axisTickToLabelConversionCallback__org_pepstock_charba_client_configuration_Axis_;
  /**@type {AxisUpdateCallback}*/
  this.f_axisUpdateCallback__org_pepstock_charba_client_configuration_Axis_;
  /**@type {AxisBuildTicksCallback}*/
  this.f_axisBuildTicksCallback__org_pepstock_charba_client_configuration_Axis_;
  /**@type {AxisType}*/
  this.f_storeType__org_pepstock_charba_client_configuration_Axis_;
  /**@type {IsDefaultScale}*/
  this.f_defaultValues__org_pepstock_charba_client_configuration_Axis_;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisType__org_pepstock_charba_client_enums_AxisKind(/** IsChart */ chart, /** IsScaleId */ id, /** AxisType */ type, /** AxisKind */ kind) {
  this.$ctor__org_pepstock_charba_client_configuration_ConfigurationContainer__org_pepstock_charba_client_IsChart(chart);
  this.$init___$p_org_pepstock_charba_client_configuration_Axis();
  IsScaleId.m_checkIfValid__org_pepstock_charba_client_options_IsScaleId(id);
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(kind);
  this.f_storeType__org_pepstock_charba_client_configuration_Axis_ = /**@type {AxisType}*/ ($Casts.$to(Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(type), AxisType));
  this.f_defaultValues__org_pepstock_charba_client_configuration_Axis_ = this.m_getDefaultScale__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisKind_$p_org_pepstock_charba_client_configuration_Axis(id, kind);
  this.m_setConfiguration__org_pepstock_charba_client_commons_NativeObjectContainer(ExtendedScale.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop__org_pepstock_charba_client_enums_AxisType__org_pepstock_charba_client_enums_AxisKind__org_pepstock_charba_client_defaults_IsDefaultScale(/**@type {!ConfigurationEnvelop<IsScaleId>}*/ (ConfigurationEnvelop.$create__java_lang_Object(id)), type, kind, this.f_defaultValues__org_pepstock_charba_client_configuration_Axis_));
  this.f_beforeUpdateCallbackProxy__org_pepstock_charba_client_configuration_Axis_.callback = (/** Object */ context, /** ? */ item) =>{
   this.m_onBeforeUpdateCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(item);
  };
  this.f_beforeSetDimensionsCallbackProxy__org_pepstock_charba_client_configuration_Axis_.callback = (/** Object */ context_1, /** ? */ item_1) =>{
   this.m_onBeforeSetDimensionsCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(item_1);
  };
  this.f_afterSetDimensionsCallbackProxy__org_pepstock_charba_client_configuration_Axis_.callback = (/** Object */ context_2, /** ? */ item_2) =>{
   this.m_onAfterSetDimensionsCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(item_2);
  };
  this.f_beforeDataLimitsCallbackProxy__org_pepstock_charba_client_configuration_Axis_.callback = (/** Object */ context_3, /** ? */ item_3) =>{
   this.m_onBeforeDataLimitsCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(item_3);
  };
  this.f_afterDataLimitsCallbackProxy__org_pepstock_charba_client_configuration_Axis_.callback = (/** Object */ context_4, /** ? */ item_4) =>{
   this.m_onAfterDataLimitsCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(item_4);
  };
  this.f_beforeTickToLabelConversionCallbackProxy__org_pepstock_charba_client_configuration_Axis_.callback = (/** Object */ context_5, /** ? */ item_5) =>{
   this.m_onBeforeTickToLabelConversionCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(item_5);
  };
  this.f_afterTickToLabelConversionCallbackProxy__org_pepstock_charba_client_configuration_Axis_.callback = (/** Object */ context_6, /** ? */ item_6) =>{
   this.m_onAfterTickToLabelConversionCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(item_6);
  };
  this.f_beforeCalculateTickRotationCallbackProxy__org_pepstock_charba_client_configuration_Axis_.callback = (/** Object */ context_7, /** ? */ item_7) =>{
   this.m_onBeforeCalculateTickRotationCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(item_7);
  };
  this.f_afterCalculateTickRotationCallbackProxy__org_pepstock_charba_client_configuration_Axis_.callback = (/** Object */ context_8, /** ? */ item_8) =>{
   this.m_onAfterCalculateTickRotationCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(item_8);
  };
  this.f_beforeFitCallbackProxy__org_pepstock_charba_client_configuration_Axis_.callback = (/** Object */ context_9, /** ? */ item_9) =>{
   this.m_onBeforeFitCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(item_9);
  };
  this.f_afterFitCallbackProxy__org_pepstock_charba_client_configuration_Axis_.callback = (/** Object */ context_10, /** ? */ item_10) =>{
   this.m_onAfterFitCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(item_10);
  };
  this.f_afterUpdateCallbackProxy__org_pepstock_charba_client_configuration_Axis_.callback = (/** Object */ context_11, /** ? */ item_11) =>{
   this.m_onAfterUpdateCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(item_11);
  };
  this.f_beforeBuildTicksCallbackProxy__org_pepstock_charba_client_configuration_Axis_.callback = (/** Object */ context_12, /** ? */ item_12) =>{
   this.m_onBeforeBuildTicksCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(item_12);
  };
  this.f_afterBuildTicksCallbackProxy__org_pepstock_charba_client_configuration_Axis_.callback = (/** Object */ context_13, /** ? */ item_13) =>{
   this.m_onAfterBuildTicksCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(item_13);
  };
 }
 /** @return {number} */
 m_getCharbaId__() {
  return /**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)).m_getCharbaId__();
 }
 /** @return {IsScaleId} */
 m_getId__() {
  return /**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)).m_getId__();
 }
 /** @return {AxisType} */
 m_getType__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_getType__();
 }
 /** @return {AxisKind} */
 m_getAxis__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_getAxis__();
 }
 
 m_setDisplay__boolean(/** boolean */ display) {
  this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_setDisplay__boolean(display);
 }
 
 m_setDisplay__org_pepstock_charba_client_enums_Display(/** Display */ display) {
  this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_setDisplay__org_pepstock_charba_client_enums_Display(display);
 }
 /** @return {Display} */
 m_getDisplay__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_getDisplay__();
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backgroundColor) {
  this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(backgroundColor);
 }
 
 m_setBackgroundColor__java_lang_String(/** ?string */ backgroundColor) {
  this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_setBackgroundColor__java_lang_String(backgroundColor);
 }
 /** @return {?string} */
 m_getBackgroundColorAsString__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_getBackgroundColorAsString__();
 }
 /** @return {IsColor} */
 m_getBackgroundColor__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_getBackgroundColor__();
 }
 
 m_setWeight__double(/** number */ weight) {
  this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_setWeight__double(weight);
 }
 /** @return {number} */
 m_getWeight__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_getWeight__();
 }
 
 m_setAlignToPixels__boolean(/** boolean */ alignToPixels) {
  this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_setAlignToPixels__boolean(alignToPixels);
 }
 /** @return {boolean} */
 m_isAlignToPixels__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_isAlignToPixels__();
 }
 
 m_setReverse__boolean(/** boolean */ reverse) {
  this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_setReverse__boolean(reverse);
 }
 /** @return {boolean} */
 m_isReverse__() {
  return this.m_getScale___$pp_org_pepstock_charba_client_configuration().m_isReverse__();
 }
 /** @return {Scale} */
 m_getScale___$pp_org_pepstock_charba_client_configuration() {
  return /**@type {ExtendedScale}*/ ($Casts.$to(super.m_getConfiguration__(), ExtendedScale));
 }
 /** @return {IsDefaultScale} */
 m_getDefaultValues___$pp_org_pepstock_charba_client_configuration() {
  return this.f_defaultValues__org_pepstock_charba_client_configuration_Axis_;
 }
 /** @return {IsDefaultScale} */
 m_getDefaultScale__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisKind_$p_org_pepstock_charba_client_configuration_Axis(/** IsScaleId */ scaleId, /** AxisKind */ kind) {
  let options = this.m_getChart__().m_getDefaultChartOptions__();
  if (!$Objects.m_equals__java_lang_Object__java_lang_Object(ScaleType.f_NONE__org_pepstock_charba_client_ScaleType, this.m_getChart__().m_getType__().m_scaleType__()) && Key.m_isValid__org_pepstock_charba_client_commons_Key(kind)) {
   return options.m_getScales__().m_getAxis__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_enums_AxisKind(scaleId, kind);
  }
  return Defaults.m_get__().m_getScale__org_pepstock_charba_client_enums_AxisType(this.f_storeType__org_pepstock_charba_client_configuration_Axis_);
 }
 /** @return {AxisCalculateTickRotationCallback} */
 m_getAxisCalculateTickRotationCallback__() {
  return this.f_axisCalculateTickRotationCallback__org_pepstock_charba_client_configuration_Axis_;
 }
 
 m_setAxisCalculateTickRotationCallback__org_pepstock_charba_client_callbacks_AxisCalculateTickRotationCallback(/** AxisCalculateTickRotationCallback */ axisCalculateTickRotationCallback) {
  this.f_axisCalculateTickRotationCallback__org_pepstock_charba_client_configuration_Axis_ = axisCalculateTickRotationCallback;
  this.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)), Property.f_BEFORE_CALCULATE_TICK_ROTATION__org_pepstock_charba_client_configuration_Axis_Property, axisCalculateTickRotationCallback, this.f_beforeCalculateTickRotationCallbackProxy__org_pepstock_charba_client_configuration_Axis_);
  this.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)), Property.f_AFTER_CALCULATE_TICK_ROTATION__org_pepstock_charba_client_configuration_Axis_Property, axisCalculateTickRotationCallback, this.f_afterCalculateTickRotationCallbackProxy__org_pepstock_charba_client_configuration_Axis_);
 }
 /** @return {AxisDataLimitsCallback} */
 m_getAxisDataLimitsCallback__() {
  return this.f_axisDataLimitsCallback__org_pepstock_charba_client_configuration_Axis_;
 }
 
 m_setAxisDataLimitsCallback__org_pepstock_charba_client_callbacks_AxisDataLimitsCallback(/** AxisDataLimitsCallback */ axisDataLimitsCallback) {
  this.f_axisDataLimitsCallback__org_pepstock_charba_client_configuration_Axis_ = axisDataLimitsCallback;
  this.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)), Property.f_BEFORE_DATA_LIMITS__org_pepstock_charba_client_configuration_Axis_Property, axisDataLimitsCallback, this.f_beforeDataLimitsCallbackProxy__org_pepstock_charba_client_configuration_Axis_);
  this.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)), Property.f_AFTER_DATA_LIMITS__org_pepstock_charba_client_configuration_Axis_Property, axisDataLimitsCallback, this.f_afterDataLimitsCallbackProxy__org_pepstock_charba_client_configuration_Axis_);
 }
 /** @return {AxisDimensionsCallback} */
 m_getAxisDimensionsCallback__() {
  return this.f_axisDimensionsCallback__org_pepstock_charba_client_configuration_Axis_;
 }
 
 m_setAxisDimensionsCallback__org_pepstock_charba_client_callbacks_AxisDimensionsCallback(/** AxisDimensionsCallback */ axisDimensionsCallback) {
  this.f_axisDimensionsCallback__org_pepstock_charba_client_configuration_Axis_ = axisDimensionsCallback;
  this.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)), Property.f_BEFORE_SET_DIMENSIONS__org_pepstock_charba_client_configuration_Axis_Property, axisDimensionsCallback, this.f_beforeSetDimensionsCallbackProxy__org_pepstock_charba_client_configuration_Axis_);
  this.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)), Property.f_AFTER_SET_DIMENSIONS__org_pepstock_charba_client_configuration_Axis_Property, axisDimensionsCallback, this.f_afterSetDimensionsCallbackProxy__org_pepstock_charba_client_configuration_Axis_);
 }
 /** @return {AxisFitCallback} */
 m_getAxisFitCallback__() {
  return this.f_axisFitCallback__org_pepstock_charba_client_configuration_Axis_;
 }
 
 m_setAxisFitCallback__org_pepstock_charba_client_callbacks_AxisFitCallback(/** AxisFitCallback */ axisFitCallback) {
  this.f_axisFitCallback__org_pepstock_charba_client_configuration_Axis_ = axisFitCallback;
  this.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)), Property.f_BEFORE_FIT__org_pepstock_charba_client_configuration_Axis_Property, axisFitCallback, this.f_beforeFitCallbackProxy__org_pepstock_charba_client_configuration_Axis_);
  this.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)), Property.f_AFTER_FIT__org_pepstock_charba_client_configuration_Axis_Property, axisFitCallback, this.f_afterFitCallbackProxy__org_pepstock_charba_client_configuration_Axis_);
 }
 /** @return {AxisTickToLabelConversionCallback} */
 m_getAxisTickToLabelConversionCallback__() {
  return this.f_axisTickToLabelConversionCallback__org_pepstock_charba_client_configuration_Axis_;
 }
 
 m_setAxisTickToLabelConversionCallback__org_pepstock_charba_client_callbacks_AxisTickToLabelConversionCallback(/** AxisTickToLabelConversionCallback */ axisTickToLabelConversionCallback) {
  this.f_axisTickToLabelConversionCallback__org_pepstock_charba_client_configuration_Axis_ = axisTickToLabelConversionCallback;
  this.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)), Property.f_BEFORE_TICK_TO_LABEL_CONVERSION__org_pepstock_charba_client_configuration_Axis_Property, axisTickToLabelConversionCallback, this.f_beforeTickToLabelConversionCallbackProxy__org_pepstock_charba_client_configuration_Axis_);
  this.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)), Property.f_AFTER_TICK_TO_LABEL_CONVERSION__org_pepstock_charba_client_configuration_Axis_Property, axisTickToLabelConversionCallback, this.f_afterTickToLabelConversionCallbackProxy__org_pepstock_charba_client_configuration_Axis_);
 }
 /** @return {AxisBuildTicksCallback} */
 m_getAxisBuildTicksCallback__() {
  return this.f_axisBuildTicksCallback__org_pepstock_charba_client_configuration_Axis_;
 }
 
 m_setAxisBuildTicksCallback__org_pepstock_charba_client_callbacks_AxisBuildTicksCallback(/** AxisBuildTicksCallback */ axisBuildTicksCallback) {
  this.f_axisBuildTicksCallback__org_pepstock_charba_client_configuration_Axis_ = axisBuildTicksCallback;
  this.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)), Property.f_BEFORE_BUILD_TICKS__org_pepstock_charba_client_configuration_Axis_Property, axisBuildTicksCallback, this.f_beforeBuildTicksCallbackProxy__org_pepstock_charba_client_configuration_Axis_);
  this.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)), Property.f_AFTER_BUILD_TICKS__org_pepstock_charba_client_configuration_Axis_Property, axisBuildTicksCallback, this.f_afterBuildTicksCallbackProxy__org_pepstock_charba_client_configuration_Axis_);
 }
 /** @return {AxisUpdateCallback} */
 m_getAxisUpdateCallback__() {
  return this.f_axisUpdateCallback__org_pepstock_charba_client_configuration_Axis_;
 }
 
 m_setAxisUpdateCallback__org_pepstock_charba_client_callbacks_AxisUpdateCallback(/** AxisUpdateCallback */ axisUpdateCallback) {
  this.f_axisUpdateCallback__org_pepstock_charba_client_configuration_Axis_ = axisUpdateCallback;
  this.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)), Property.f_BEFORE_UPDATE__org_pepstock_charba_client_configuration_Axis_Property, axisUpdateCallback, this.f_beforeUpdateCallbackProxy__org_pepstock_charba_client_configuration_Axis_);
  this.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)), Property.f_AFTER_UPDATE__org_pepstock_charba_client_configuration_Axis_Property, axisUpdateCallback, this.f_afterUpdateCallbackProxy__org_pepstock_charba_client_configuration_Axis_);
 }
 
 m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/** AbstractNode */ node, /** Key */ property, /** * */ callBack, /** CharbaCallbackProxy<?> */ callbackProxy) {
  this.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy_$pp_org_pepstock_charba_client_configuration(node, property, callBack, callbackProxy.proxy);
 }
 
 m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy_$pp_org_pepstock_charba_client_configuration(/** AbstractNode */ node, /** Key */ property, /** * */ callBack, /** ?function():void */ proxy) {
  if (!$Equality.$same(callBack, null)) {
   /**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)).m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_configuration_ConfigurationEnvelop(node, property, /**@type {!ConfigurationEnvelop<?function():void>}*/ (ConfigurationEnvelop.$create__java_lang_Object(proxy)));
  } else {
   /**@type {ExtendedScale}*/ ($Casts.$to(this.m_getConfiguration__(), ExtendedScale)).m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_configuration_ConfigurationEnvelop(node, property, ConfigurationOptions.f_RESET_CALLBACK_ENVELOP__org_pepstock_charba_client_configuration_ConfigurationOptions);
  }
 }
 /** @return {ScaleContext} */
 m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(/** ? */ context) {
  return ScaleContext.$create__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_configuration_ConfigurationEnvelop(this, /**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object(context)));
 }
 
 m_onBeforeUpdateCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(/** ? */ item) {
  let callback = this.m_getAxisUpdateCallback__();
  if (!$Equality.$same(callback, null)) {
   callback.m_onBeforeUpdate__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(this, AxisItem.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object__boolean(item, true))));
  }
 }
 
 m_onBeforeSetDimensionsCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(/** ? */ item) {
  let callback = this.m_getAxisDimensionsCallback__();
  if (!$Equality.$same(callback, null)) {
   callback.m_onBeforeSetDimensions__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(this, AxisItem.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object__boolean(item, true))));
  }
 }
 
 m_onAfterSetDimensionsCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(/** ? */ item) {
  let callback = this.m_getAxisDimensionsCallback__();
  if (!$Equality.$same(callback, null)) {
   callback.m_onAfterSetDimensions__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(this, AxisItem.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object__boolean(item, true))));
  }
 }
 
 m_onBeforeDataLimitsCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(/** ? */ item) {
  let callback = this.m_getAxisDataLimitsCallback__();
  if (!$Equality.$same(callback, null)) {
   callback.m_onBeforeDataLimits__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(this, AxisItem.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object__boolean(item, true))));
  }
 }
 
 m_onAfterDataLimitsCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(/** ? */ item) {
  let callback = this.m_getAxisDataLimitsCallback__();
  if (!$Equality.$same(callback, null)) {
   callback.m_onAfterDataLimits__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(this, AxisItem.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object__boolean(item, true))));
  }
 }
 
 m_onBeforeTickToLabelConversionCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(/** ? */ item) {
  let callback = this.m_getAxisTickToLabelConversionCallback__();
  if (!$Equality.$same(callback, null)) {
   callback.m_onBeforeTickToLabelConversion__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(this, AxisItem.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object__boolean(item, true))));
  }
 }
 
 m_onAfterTickToLabelConversionCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(/** ? */ item) {
  let callback = this.m_getAxisTickToLabelConversionCallback__();
  if (!$Equality.$same(callback, null)) {
   callback.m_onAfterTickToLabelConversion__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(this, AxisItem.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object__boolean(item, true))));
  }
 }
 
 m_onBeforeCalculateTickRotationCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(/** ? */ item) {
  let callback = this.m_getAxisCalculateTickRotationCallback__();
  if (!$Equality.$same(callback, null)) {
   callback.m_onBeforeCalculateTickRotation__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(this, AxisItem.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object__boolean(item, true))));
  }
 }
 
 m_onAfterCalculateTickRotationCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(/** ? */ item) {
  let callback = this.m_getAxisCalculateTickRotationCallback__();
  if (!$Equality.$same(callback, null)) {
   callback.m_onAfterCalculateTickRotation__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(this, AxisItem.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object__boolean(item, true))));
  }
 }
 
 m_onBeforeFitCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(/** ? */ item) {
  let callback = this.m_getAxisFitCallback__();
  if (!$Equality.$same(callback, null)) {
   callback.m_onBeforeFit__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(this, AxisItem.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object__boolean(item, true))));
  }
 }
 
 m_onAfterFitCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(/** ? */ item) {
  let callback = this.m_getAxisFitCallback__();
  if (!$Equality.$same(callback, null)) {
   callback.m_onAfterFit__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(this, AxisItem.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object__boolean(item, true))));
  }
 }
 
 m_onAfterUpdateCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(/** ? */ item) {
  let callback = this.m_getAxisUpdateCallback__();
  if (!$Equality.$same(callback, null)) {
   callback.m_onAfterUpdate__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(this, AxisItem.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object__boolean(item, true))));
  }
 }
 
 m_onBeforeBuildTicksCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(/** ? */ item) {
  let callback = this.m_getAxisBuildTicksCallback__();
  if (!$Equality.$same(callback, null)) {
   callback.m_onBeforeBuildTicks__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(this, AxisItem.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object__boolean(item, true))));
  }
 }
 
 m_onAfterBuildTicksCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Axis(/** ? */ item) {
  let callback = this.m_getAxisBuildTicksCallback__();
  if (!$Equality.$same(callback, null)) {
   callback.m_onAfterBuildTicks__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_AxisItem(this, AxisItem.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object__boolean(item, true))));
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_Axis() {
  this.f_beforeUpdateCallbackProxy__org_pepstock_charba_client_configuration_Axis_ = /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_beforeSetDimensionsCallbackProxy__org_pepstock_charba_client_configuration_Axis_ = /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterSetDimensionsCallbackProxy__org_pepstock_charba_client_configuration_Axis_ = /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_beforeDataLimitsCallbackProxy__org_pepstock_charba_client_configuration_Axis_ = /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterDataLimitsCallbackProxy__org_pepstock_charba_client_configuration_Axis_ = /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_beforeTickToLabelConversionCallbackProxy__org_pepstock_charba_client_configuration_Axis_ = /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterTickToLabelConversionCallbackProxy__org_pepstock_charba_client_configuration_Axis_ = /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_beforeCalculateTickRotationCallbackProxy__org_pepstock_charba_client_configuration_Axis_ = /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterCalculateTickRotationCallbackProxy__org_pepstock_charba_client_configuration_Axis_ = /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_beforeFitCallbackProxy__org_pepstock_charba_client_configuration_Axis_ = /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterFitCallbackProxy__org_pepstock_charba_client_configuration_Axis_ = /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterUpdateCallbackProxy__org_pepstock_charba_client_configuration_Axis_ = /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_beforeBuildTicksCallbackProxy__org_pepstock_charba_client_configuration_Axis_ = /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterBuildTicksCallbackProxy__org_pepstock_charba_client_configuration_Axis_ = /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_axisCalculateTickRotationCallback__org_pepstock_charba_client_configuration_Axis_ = null;
  this.f_axisDataLimitsCallback__org_pepstock_charba_client_configuration_Axis_ = null;
  this.f_axisDimensionsCallback__org_pepstock_charba_client_configuration_Axis_ = null;
  this.f_axisFitCallback__org_pepstock_charba_client_configuration_Axis_ = null;
  this.f_axisTickToLabelConversionCallback__org_pepstock_charba_client_configuration_Axis_ = null;
  this.f_axisUpdateCallback__org_pepstock_charba_client_configuration_Axis_ = null;
  this.f_axisBuildTicksCallback__org_pepstock_charba_client_configuration_Axis_ = null;
 }
 
 static $clinit() {
  Axis.$clinit = () =>{};
  Axis.$loadModules();
  ConfigurationContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Axis;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  ScaleType = goog.module.get('org.pepstock.charba.client.ScaleType$impl');
  ScaleContext = goog.module.get('org.pepstock.charba.client.callbacks.ScaleContext$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Property = goog.module.get('org.pepstock.charba.client.configuration.Axis.Property$impl');
  ConfigurationEnvelop = goog.module.get('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
  ConfigurationOptions = goog.module.get('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
  AxisType = goog.module.get('org.pepstock.charba.client.enums.AxisType$impl');
  AxisItem = goog.module.get('org.pepstock.charba.client.items.AxisItem$impl');
  ExtendedScale = goog.module.get('org.pepstock.charba.client.options.ExtendedScale$impl');
  IsScaleId = goog.module.get('org.pepstock.charba.client.options.IsScaleId$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(Axis, "org.pepstock.charba.client.configuration.Axis");

exports = Axis;

//# sourceMappingURL=Axis.js.map
