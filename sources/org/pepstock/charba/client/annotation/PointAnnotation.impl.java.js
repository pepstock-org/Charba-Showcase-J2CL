goog.module('org.pepstock.charba.client.annotation.PointAnnotation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractAnnotation = goog.require('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
const HasBackgroundColor = goog.require('org.pepstock.charba.client.annotation.HasBackgroundColor$impl');
const IsDefaultsPointAnnotation = goog.require('org.pepstock.charba.client.annotation.IsDefaultsPointAnnotation$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let AnnotationHelper = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationHelper$impl');
let AnnotationPlugin = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
let AnnotationType = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationType$impl');
let BackgroundColorHandler = goog.forwardDeclare('org.pepstock.charba.client.annotation.BackgroundColorHandler$impl');
let IsAnnotationId = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsAnnotationId$impl');
let IsDefaultsAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsDefaultsAnnotation$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.annotation.PointAnnotation.Property$impl');
let ValueCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.ValueCallback$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let RadiusCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.RadiusCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let CallbackPropertyHandler = goog.forwardDeclare('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let IsScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.IsScaleId$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDefaultsPointAnnotation}
 * @implements {HasBackgroundColor}
 */
class PointAnnotation extends AbstractAnnotation {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/
  this.f_radiusCallbackProxy__org_pepstock_charba_client_annotation_PointAnnotation_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/
  this.f_xValueCallbackProxy__org_pepstock_charba_client_annotation_PointAnnotation_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/
  this.f_yValueCallbackProxy__org_pepstock_charba_client_annotation_PointAnnotation_;
  /**@type {IsDefaultsPointAnnotation}*/
  this.f_defaultValues__org_pepstock_charba_client_annotation_PointAnnotation_;
  /**@type {BackgroundColorHandler}*/
  this.f_backgroundColorHandler__org_pepstock_charba_client_annotation_PointAnnotation_;
 }
 //Factory method corresponding to constructor 'PointAnnotation()'.
 /** @return {!PointAnnotation} */
 static $create__() {
  PointAnnotation.$clinit();
  let $instance = new PointAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_PointAnnotation__();
  return $instance;
 }
 //Initialization from constructor 'PointAnnotation()'.
 
 $ctor__org_pepstock_charba_client_annotation_PointAnnotation__() {
  this.$ctor__org_pepstock_charba_client_annotation_PointAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(AnnotationType.f_POINT__org_pepstock_charba_client_annotation_AnnotationType.m_createId__(), AnnotationType.f_POINT__org_pepstock_charba_client_annotation_AnnotationType.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation());
 }
 //Factory method corresponding to constructor 'PointAnnotation(String)'.
 /** @return {!PointAnnotation} */
 static $create__java_lang_String(/** ?string */ id) {
  PointAnnotation.$clinit();
  let $instance = new PointAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_PointAnnotation__java_lang_String(id);
  return $instance;
 }
 //Initialization from constructor 'PointAnnotation(String)'.
 
 $ctor__org_pepstock_charba_client_annotation_PointAnnotation__java_lang_String(/** ?string */ id) {
  this.$ctor__org_pepstock_charba_client_annotation_PointAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId(IsAnnotationId.m_create__java_lang_String(id));
 }
 //Factory method corresponding to constructor 'PointAnnotation(IsAnnotationId)'.
 /** @return {!PointAnnotation} */
 static $create__org_pepstock_charba_client_annotation_IsAnnotationId(/** IsAnnotationId */ id) {
  PointAnnotation.$clinit();
  let $instance = new PointAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_PointAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId(id);
  return $instance;
 }
 //Initialization from constructor 'PointAnnotation(IsAnnotationId)'.
 
 $ctor__org_pepstock_charba_client_annotation_PointAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId(/** IsAnnotationId */ id) {
  this.$ctor__org_pepstock_charba_client_annotation_PointAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(id, AnnotationHelper.m_get__().m_getDefaultsAnnotationOptionsByGlobal__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_annotation_IsAnnotationId_$pp_org_pepstock_charba_client_annotation(AnnotationType.f_POINT__org_pepstock_charba_client_annotation_AnnotationType, id));
 }
 //Factory method corresponding to constructor 'PointAnnotation(String, IsChart)'.
 /** @return {!PointAnnotation} */
 static $create__java_lang_String__org_pepstock_charba_client_IsChart(/** ?string */ id, /** IsChart */ chart) {
  PointAnnotation.$clinit();
  let $instance = new PointAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_PointAnnotation__java_lang_String__org_pepstock_charba_client_IsChart(id, chart);
  return $instance;
 }
 //Initialization from constructor 'PointAnnotation(String, IsChart)'.
 
 $ctor__org_pepstock_charba_client_annotation_PointAnnotation__java_lang_String__org_pepstock_charba_client_IsChart(/** ?string */ id, /** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_annotation_PointAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_IsChart(IsAnnotationId.m_create__java_lang_String(id), chart);
 }
 //Factory method corresponding to constructor 'PointAnnotation(IsAnnotationId, IsChart)'.
 /** @return {!PointAnnotation} */
 static $create__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_IsChart(/** IsAnnotationId */ id, /** IsChart */ chart) {
  PointAnnotation.$clinit();
  let $instance = new PointAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_PointAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_IsChart(id, chart);
  return $instance;
 }
 //Initialization from constructor 'PointAnnotation(IsAnnotationId, IsChart)'.
 
 $ctor__org_pepstock_charba_client_annotation_PointAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_IsChart(/** IsAnnotationId */ id, /** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_annotation_PointAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(id, AnnotationHelper.m_get__().m_getDefaultsAnnotationOptionsByChart__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_annotation(AnnotationType.f_POINT__org_pepstock_charba_client_annotation_AnnotationType, id, chart));
 }
 //Factory method corresponding to constructor 'PointAnnotation(IsAnnotationId, IsDefaultsAnnotation)'.
 /** @return {!PointAnnotation} */
 static $create__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** IsAnnotationId */ id, /** IsDefaultsAnnotation */ defaultValues) {
  let $instance = new PointAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_PointAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(id, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'PointAnnotation(IsAnnotationId, IsDefaultsAnnotation)'.
 
 $ctor__org_pepstock_charba_client_annotation_PointAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** IsAnnotationId */ id, /** IsDefaultsAnnotation */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(AnnotationType.f_POINT__org_pepstock_charba_client_annotation_AnnotationType, $Equality.$same(id, null) ? AnnotationType.f_POINT__org_pepstock_charba_client_annotation_AnnotationType.m_createId__() : id, $Equality.$same(defaultValues, null) ? AnnotationType.f_POINT__org_pepstock_charba_client_annotation_AnnotationType.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation() : defaultValues);
  this.$init___$p_org_pepstock_charba_client_annotation_PointAnnotation();
  Checker.m_assertCheck__boolean__java_lang_String(IsDefaultsPointAnnotation.$isInstance(this.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation()), Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(AbstractAnnotation.f_INVALID_DEFAULTS_VALUES_CLASS__org_pepstock_charba_client_annotation_AbstractAnnotation, [AnnotationType.f_POINT__org_pepstock_charba_client_annotation_AnnotationType.m_value__()]));
  this.f_defaultValues__org_pepstock_charba_client_annotation_PointAnnotation_ = /**@type {IsDefaultsPointAnnotation}*/ ($Casts.$to(this.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation(), IsDefaultsPointAnnotation));
  this.f_backgroundColorHandler__org_pepstock_charba_client_annotation_PointAnnotation_ = BackgroundColorHandler.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_annotation_IsDefaultsBackgroundColorHandler__org_pepstock_charba_client_commons_NativeObject(this, this.f_defaultValues__org_pepstock_charba_client_annotation_PointAnnotation_, this.m_getNativeObject__());
  this.m_initCallbacks___$p_org_pepstock_charba_client_annotation_PointAnnotation();
 }
 //Factory method corresponding to constructor 'PointAnnotation(NativeObject, IsDefaultsAnnotation)'.
 /** @return {!PointAnnotation} */
 static $create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** ? */ nativeObject, /** IsDefaultsAnnotation */ defaultValues) {
  PointAnnotation.$clinit();
  let $instance = new PointAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_PointAnnotation__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(nativeObject, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'PointAnnotation(NativeObject, IsDefaultsAnnotation)'.
 
 $ctor__org_pepstock_charba_client_annotation_PointAnnotation__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** ? */ nativeObject, /** IsDefaultsAnnotation */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(nativeObject, defaultValues);
  this.$init___$p_org_pepstock_charba_client_annotation_PointAnnotation();
  Checker.m_assertCheck__boolean__java_lang_String(IsDefaultsPointAnnotation.$isInstance(this.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation()), Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(AbstractAnnotation.f_INVALID_DEFAULTS_VALUES_CLASS__org_pepstock_charba_client_annotation_AbstractAnnotation, [AnnotationType.f_POINT__org_pepstock_charba_client_annotation_AnnotationType.m_value__()]));
  this.f_defaultValues__org_pepstock_charba_client_annotation_PointAnnotation_ = /**@type {IsDefaultsPointAnnotation}*/ ($Casts.$to(this.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation(), IsDefaultsPointAnnotation));
  this.f_backgroundColorHandler__org_pepstock_charba_client_annotation_PointAnnotation_ = BackgroundColorHandler.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_annotation_IsDefaultsBackgroundColorHandler__org_pepstock_charba_client_commons_NativeObject(this, this.f_defaultValues__org_pepstock_charba_client_annotation_PointAnnotation_, this.m_getNativeObject__());
  this.m_initCallbacks___$p_org_pepstock_charba_client_annotation_PointAnnotation();
 }
 
 m_initCallbacks___$p_org_pepstock_charba_client_annotation_PointAnnotation() {
  this.f_radiusCallbackProxy__org_pepstock_charba_client_annotation_PointAnnotation_.callback = (/** Object */ contextFunction, /** ? */ context) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this, context), this.m_getRadiusCallback__(), this.f_defaultValues__org_pepstock_charba_client_annotation_PointAnnotation_.m_getRadius__()), Double)));
  };
  this.f_xValueCallbackProxy__org_pepstock_charba_client_annotation_PointAnnotation_.callback = (/** Object */ contextFunction_1, /** ? */ context_1) =>{
   return this.m_onValue__org_pepstock_charba_client_annotation_AnnotationContext__org_pepstock_charba_client_annotation_callbacks_ValueCallback_$pp_org_pepstock_charba_client_annotation(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this, context_1), this.m_getXValueCallback__());
  };
  this.f_yValueCallbackProxy__org_pepstock_charba_client_annotation_PointAnnotation_.callback = (/** Object */ contextFunction_2, /** ? */ context_2) =>{
   return this.m_onValue__org_pepstock_charba_client_annotation_AnnotationContext__org_pepstock_charba_client_annotation_callbacks_ValueCallback_$pp_org_pepstock_charba_client_annotation(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this, context_2), this.m_getYValueCallback__());
  };
 }
 /** @override @return {BackgroundColorHandler} */
 m_getBackgroundColorHandler__() {
  return this.f_backgroundColorHandler__org_pepstock_charba_client_annotation_PointAnnotation_;
 }
 
 m_setRadius__double(/** number */ radius) {
  this.m_setRadius__org_pepstock_charba_client_callbacks_RadiusCallback(null);
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_RADIUS__org_pepstock_charba_client_annotation_PointAnnotation_Property, Checker.m_positiveOrZero__double(radius));
 }
 /** @override @return {number} */
 m_getRadius__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_RADIUS__org_pepstock_charba_client_annotation_PointAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_PointAnnotation_.m_getRadius__());
 }
 
 m_setYScaleID__java_lang_String(/** ?string */ scaleId) {
  IsScaleId.m_checkIfValid__java_lang_String(scaleId);
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_Y_SCALE_ID__org_pepstock_charba_client_annotation_PointAnnotation_Property, scaleId);
 }
 
 m_setYScaleID__org_pepstock_charba_client_options_IsScaleId(/** IsScaleId */ scaleId) {
  IsScaleId.m_checkIfValid__org_pepstock_charba_client_options_IsScaleId(scaleId);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_Y_SCALE_ID__org_pepstock_charba_client_annotation_PointAnnotation_Property, scaleId);
 }
 /** @override @return {IsScaleId} */
 m_getYScaleID__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_options_IsScaleId(Property.f_Y_SCALE_ID__org_pepstock_charba_client_annotation_PointAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_PointAnnotation_.m_getYScaleID__());
 }
 
 m_setXScaleID__java_lang_String(/** ?string */ scaleId) {
  IsScaleId.m_checkIfValid__java_lang_String(scaleId);
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_X_SCALE_ID__org_pepstock_charba_client_annotation_PointAnnotation_Property, scaleId);
 }
 
 m_setXScaleID__org_pepstock_charba_client_options_IsScaleId(/** IsScaleId */ scaleId) {
  IsScaleId.m_checkIfValid__org_pepstock_charba_client_options_IsScaleId(scaleId);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_X_SCALE_ID__org_pepstock_charba_client_annotation_PointAnnotation_Property, scaleId);
 }
 /** @override @return {IsScaleId} */
 m_getXScaleID__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_options_IsScaleId(Property.f_X_SCALE_ID__org_pepstock_charba_client_annotation_PointAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_PointAnnotation_.m_getXScaleID__());
 }
 
 m_setXValue__java_lang_String(/** ?string */ value) {
  this.m_setXValue__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_X_VALUE__org_pepstock_charba_client_annotation_PointAnnotation_Property, value);
 }
 
 m_setXValue__double(/** number */ value) {
  this.m_setXValue__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_X_VALUE__org_pepstock_charba_client_annotation_PointAnnotation_Property, value);
 }
 
 m_setXValue__java_util_Date(/** Date */ value) {
  this.m_setXValue__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_X_VALUE__org_pepstock_charba_client_annotation_PointAnnotation_Property, value);
 }
 /** @override @return {?string} */
 m_getXValueAsString__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_X_VALUE__org_pepstock_charba_client_annotation_PointAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_PointAnnotation_.m_getXValueAsString__());
 }
 /** @override @return {number} */
 m_getXValueAsDouble__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__double(Property.f_X_VALUE__org_pepstock_charba_client_annotation_PointAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_PointAnnotation_.m_getXValueAsDouble__());
 }
 /** @override @return {Date} */
 m_getXValueAsDate__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_X_VALUE__org_pepstock_charba_client_annotation_PointAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_PointAnnotation_.m_getXValueAsDate__());
 }
 
 m_setYValue__java_lang_String(/** ?string */ value) {
  this.m_setYValue__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_Y_VALUE__org_pepstock_charba_client_annotation_PointAnnotation_Property, value);
 }
 
 m_setYValue__double(/** number */ value) {
  this.m_setYValue__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_Y_VALUE__org_pepstock_charba_client_annotation_PointAnnotation_Property, value);
 }
 
 m_setYValue__java_util_Date(/** Date */ value) {
  this.m_setYValue__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_Y_VALUE__org_pepstock_charba_client_annotation_PointAnnotation_Property, value);
 }
 /** @override @return {?string} */
 m_getYValueAsString__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_Y_VALUE__org_pepstock_charba_client_annotation_PointAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_PointAnnotation_.m_getYValueAsString__());
 }
 /** @override @return {number} */
 m_getYValueAsDouble__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__double(Property.f_Y_VALUE__org_pepstock_charba_client_annotation_PointAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_PointAnnotation_.m_getYValueAsDouble__());
 }
 /** @override @return {Date} */
 m_getYValueAsDate__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_Y_VALUE__org_pepstock_charba_client_annotation_PointAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_PointAnnotation_.m_getYValueAsDate__());
 }
 /** @override @return {RadiusCallback<AnnotationContext>} */
 m_getRadiusCallback__() {
  return /**@type {RadiusCallback<AnnotationContext>}*/ ($Casts.$to(PointAnnotation.f_RADIUS_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_PointAnnotation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_PointAnnotation_.m_getRadiusCallback__()), RadiusCallback));
 }
 
 m_setRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/** RadiusCallback<AnnotationContext> */ radiusCallback) {
  PointAnnotation.f_RADIUS_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_PointAnnotation_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, radiusCallback, this.f_radiusCallbackProxy__org_pepstock_charba_client_annotation_PointAnnotation_.proxy);
 }
 /** @override @return {ValueCallback} */
 m_getXValueCallback__() {
  return /**@type {ValueCallback}*/ ($Casts.$to(PointAnnotation.f_X_VALUE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_PointAnnotation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_PointAnnotation_.m_getXValueCallback__()), ValueCallback));
 }
 
 m_setXValue__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/** ValueCallback */ valueCallback) {
  PointAnnotation.f_X_VALUE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_PointAnnotation_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, valueCallback, this.f_xValueCallbackProxy__org_pepstock_charba_client_annotation_PointAnnotation_.proxy);
 }
 /** @override @return {ValueCallback} */
 m_getYValueCallback__() {
  return /**@type {ValueCallback}*/ ($Casts.$to(PointAnnotation.f_Y_VALUE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_PointAnnotation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_PointAnnotation_.m_getYValueCallback__()), ValueCallback));
 }
 
 m_setYValue__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/** ValueCallback */ valueCallback) {
  PointAnnotation.f_Y_VALUE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_PointAnnotation_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, valueCallback, this.f_yValueCallbackProxy__org_pepstock_charba_client_annotation_PointAnnotation_.proxy);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBorderWidth__() {
  return IsDefaultsPointAnnotation.m_getBorderWidth__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {ColorCallback<AnnotationContext>} */
 m_getBackgroundColorCallback__() {
  return HasBackgroundColor.m_getBackgroundColorCallback__$default__org_pepstock_charba_client_annotation_HasBackgroundColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_getBackgroundColor__() {
  return HasBackgroundColor.m_getBackgroundColor__$default__org_pepstock_charba_client_annotation_HasBackgroundColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return HasBackgroundColor.m_getBackgroundColorAsString__$default__org_pepstock_charba_client_annotation_HasBackgroundColor(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ arg0) {
  HasBackgroundColor.m_setBackgroundColor__$default__org_pepstock_charba_client_annotation_HasBackgroundColor__org_pepstock_charba_client_colors_IsColor(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBackgroundColor__java_lang_String(/** ?string */ arg0) {
  HasBackgroundColor.m_setBackgroundColor__$default__org_pepstock_charba_client_annotation_HasBackgroundColor__java_lang_String(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<AnnotationContext> */ arg0) {
  HasBackgroundColor.m_setBackgroundColor__$default__org_pepstock_charba_client_annotation_HasBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(this, arg0);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_annotation_PointAnnotation() {
  this.f_radiusCallbackProxy__org_pepstock_charba_client_annotation_PointAnnotation_ = /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_xValueCallbackProxy__org_pepstock_charba_client_annotation_PointAnnotation_ = /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_yValueCallbackProxy__org_pepstock_charba_client_annotation_PointAnnotation_ = /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
 }
 
 static $clinit() {
  PointAnnotation.$clinit = () =>{};
  PointAnnotation.$loadModules();
  AbstractAnnotation.$clinit();
  IsDefaultsPointAnnotation.$clinit();
  HasBackgroundColor.$clinit();
  PointAnnotation.f_RADIUS_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_PointAnnotation_ = /**@type {!CallbackPropertyHandler<RadiusCallback<AnnotationContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_RADIUS__org_pepstock_charba_client_annotation_PointAnnotation_Property));
  PointAnnotation.f_X_VALUE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_PointAnnotation_ = /**@type {!CallbackPropertyHandler<ValueCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_X_VALUE__org_pepstock_charba_client_annotation_PointAnnotation_Property));
  PointAnnotation.f_Y_VALUE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_PointAnnotation_ = /**@type {!CallbackPropertyHandler<ValueCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_Y_VALUE__org_pepstock_charba_client_annotation_PointAnnotation_Property));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PointAnnotation;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AnnotationContext = goog.module.get('org.pepstock.charba.client.annotation.AnnotationContext$impl');
  AnnotationHelper = goog.module.get('org.pepstock.charba.client.annotation.AnnotationHelper$impl');
  AnnotationPlugin = goog.module.get('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
  AnnotationType = goog.module.get('org.pepstock.charba.client.annotation.AnnotationType$impl');
  BackgroundColorHandler = goog.module.get('org.pepstock.charba.client.annotation.BackgroundColorHandler$impl');
  IsAnnotationId = goog.module.get('org.pepstock.charba.client.annotation.IsAnnotationId$impl');
  Property = goog.module.get('org.pepstock.charba.client.annotation.PointAnnotation.Property$impl');
  ValueCallback = goog.module.get('org.pepstock.charba.client.annotation.callbacks.ValueCallback$impl');
  RadiusCallback = goog.module.get('org.pepstock.charba.client.callbacks.RadiusCallback$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  CallbackPropertyHandler = goog.module.get('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  IsScaleId = goog.module.get('org.pepstock.charba.client.options.IsScaleId$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number}*/
PointAnnotation.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_annotation_PointAnnotation = 2;
/**@const {number}*/
PointAnnotation.f_DEFAULT_RADIUS__org_pepstock_charba_client_annotation_PointAnnotation = 10;
/**@type {CallbackPropertyHandler<RadiusCallback<AnnotationContext>>}*/
PointAnnotation.f_RADIUS_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_PointAnnotation_;
/**@type {CallbackPropertyHandler<ValueCallback>}*/
PointAnnotation.f_X_VALUE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_PointAnnotation_;
/**@type {CallbackPropertyHandler<ValueCallback>}*/
PointAnnotation.f_Y_VALUE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_PointAnnotation_;
IsDefaultsPointAnnotation.$markImplementor(PointAnnotation);
HasBackgroundColor.$markImplementor(PointAnnotation);
$Util.$setClassMetadata(PointAnnotation, "org.pepstock.charba.client.annotation.PointAnnotation");

exports = PointAnnotation;

//# sourceMappingURL=PointAnnotation.js.map
