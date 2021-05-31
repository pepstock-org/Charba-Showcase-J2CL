goog.module('org.pepstock.charba.client.annotation.LineAnnotation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractXYAnnotation = goog.require('org.pepstock.charba.client.annotation.AbstractXYAnnotation$impl');
const IsDefaultsLineAnnotation = goog.require('org.pepstock.charba.client.annotation.IsDefaultsLineAnnotation$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let AnnotationHelper = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationHelper$impl');
let AnnotationId = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationId$impl');
let AnnotationPlugin = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
let AnnotationType = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationType$impl');
let IsDefaultsAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsDefaultsAnnotation$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.annotation.LineAnnotation.Property$impl');
let LineLabel = goog.forwardDeclare('org.pepstock.charba.client.annotation.LineLabel$impl');
let ValueCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.ValueCallback$impl');
let CallbackPropertyHandler = goog.forwardDeclare('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDefaultsLineAnnotation}
 */
class LineAnnotation extends AbstractXYAnnotation {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_valueCallbackProxy__org_pepstock_charba_client_annotation_LineAnnotation_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_endValueCallbackProxy__org_pepstock_charba_client_annotation_LineAnnotation_;
  /**@type {IsDefaultsLineAnnotation}*/
  this.f_defaultValues__org_pepstock_charba_client_annotation_LineAnnotation_;
  /**@type {LineLabel}*/
  this.f_label__org_pepstock_charba_client_annotation_LineAnnotation_;
 }
 //Factory method corresponding to constructor 'LineAnnotation()'.
 /** @return {!LineAnnotation} */
 static $create__() {
  LineAnnotation.$clinit();
  let $instance = new LineAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_LineAnnotation__();
  return $instance;
 }
 //Initialization from constructor 'LineAnnotation()'.
 
 $ctor__org_pepstock_charba_client_annotation_LineAnnotation__() {
  this.$ctor__org_pepstock_charba_client_annotation_LineAnnotation__org_pepstock_charba_client_annotation_AnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(AnnotationType.f_LINE__org_pepstock_charba_client_annotation_AnnotationType.m_createId__(), AnnotationType.f_LINE__org_pepstock_charba_client_annotation_AnnotationType.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation());
 }
 //Factory method corresponding to constructor 'LineAnnotation(String)'.
 /** @return {!LineAnnotation} */
 static $create__java_lang_String(/** ?string */ id) {
  LineAnnotation.$clinit();
  let $instance = new LineAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_LineAnnotation__java_lang_String(id);
  return $instance;
 }
 //Initialization from constructor 'LineAnnotation(String)'.
 
 $ctor__org_pepstock_charba_client_annotation_LineAnnotation__java_lang_String(/** ?string */ id) {
  this.$ctor__org_pepstock_charba_client_annotation_LineAnnotation__org_pepstock_charba_client_annotation_AnnotationId(AnnotationId.m_create__java_lang_String(id));
 }
 //Factory method corresponding to constructor 'LineAnnotation(AnnotationId)'.
 /** @return {!LineAnnotation} */
 static $create__org_pepstock_charba_client_annotation_AnnotationId(/** AnnotationId */ id) {
  LineAnnotation.$clinit();
  let $instance = new LineAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_LineAnnotation__org_pepstock_charba_client_annotation_AnnotationId(id);
  return $instance;
 }
 //Initialization from constructor 'LineAnnotation(AnnotationId)'.
 
 $ctor__org_pepstock_charba_client_annotation_LineAnnotation__org_pepstock_charba_client_annotation_AnnotationId(/** AnnotationId */ id) {
  this.$ctor__org_pepstock_charba_client_annotation_LineAnnotation__org_pepstock_charba_client_annotation_AnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(id, AnnotationHelper.m_get__().m_getDefaultsAnnotationOptionsByGlobal__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_annotation_AnnotationId_$pp_org_pepstock_charba_client_annotation(AnnotationType.f_LINE__org_pepstock_charba_client_annotation_AnnotationType, id));
 }
 //Factory method corresponding to constructor 'LineAnnotation(String, IsChart)'.
 /** @return {!LineAnnotation} */
 static $create__java_lang_String__org_pepstock_charba_client_IsChart(/** ?string */ id, /** IsChart */ chart) {
  LineAnnotation.$clinit();
  let $instance = new LineAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_LineAnnotation__java_lang_String__org_pepstock_charba_client_IsChart(id, chart);
  return $instance;
 }
 //Initialization from constructor 'LineAnnotation(String, IsChart)'.
 
 $ctor__org_pepstock_charba_client_annotation_LineAnnotation__java_lang_String__org_pepstock_charba_client_IsChart(/** ?string */ id, /** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_annotation_LineAnnotation__org_pepstock_charba_client_annotation_AnnotationId__org_pepstock_charba_client_IsChart(AnnotationId.m_create__java_lang_String(id), chart);
 }
 //Factory method corresponding to constructor 'LineAnnotation(AnnotationId, IsChart)'.
 /** @return {!LineAnnotation} */
 static $create__org_pepstock_charba_client_annotation_AnnotationId__org_pepstock_charba_client_IsChart(/** AnnotationId */ id, /** IsChart */ chart) {
  LineAnnotation.$clinit();
  let $instance = new LineAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_LineAnnotation__org_pepstock_charba_client_annotation_AnnotationId__org_pepstock_charba_client_IsChart(id, chart);
  return $instance;
 }
 //Initialization from constructor 'LineAnnotation(AnnotationId, IsChart)'.
 
 $ctor__org_pepstock_charba_client_annotation_LineAnnotation__org_pepstock_charba_client_annotation_AnnotationId__org_pepstock_charba_client_IsChart(/** AnnotationId */ id, /** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_annotation_LineAnnotation__org_pepstock_charba_client_annotation_AnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(id, AnnotationHelper.m_get__().m_getDefaultsAnnotationOptionsByChart__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_annotation_AnnotationId__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_annotation(AnnotationType.f_LINE__org_pepstock_charba_client_annotation_AnnotationType, id, chart));
 }
 //Factory method corresponding to constructor 'LineAnnotation(AnnotationId, IsDefaultsAnnotation)'.
 /** @return {!LineAnnotation} */
 static $create__org_pepstock_charba_client_annotation_AnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** AnnotationId */ id, /** IsDefaultsAnnotation */ defaultValues) {
  let $instance = new LineAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_LineAnnotation__org_pepstock_charba_client_annotation_AnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(id, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'LineAnnotation(AnnotationId, IsDefaultsAnnotation)'.
 
 $ctor__org_pepstock_charba_client_annotation_LineAnnotation__org_pepstock_charba_client_annotation_AnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** AnnotationId */ id, /** IsDefaultsAnnotation */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_annotation_AbstractXYAnnotation__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_annotation_AnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(AnnotationType.f_LINE__org_pepstock_charba_client_annotation_AnnotationType, $Equality.$same(id, null) ? AnnotationType.f_LINE__org_pepstock_charba_client_annotation_AnnotationType.m_createId__() : id, $Equality.$same(defaultValues, null) ? AnnotationType.f_LINE__org_pepstock_charba_client_annotation_AnnotationType.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation() : defaultValues);
  this.$init___$p_org_pepstock_charba_client_annotation_LineAnnotation();
  Checker.m_assertCheck__boolean__java_lang_String(IsDefaultsLineAnnotation.$isInstance(this.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation()), Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(AbstractAnnotation.f_INVALID_DEFAULTS_VALUES_CLASS__org_pepstock_charba_client_annotation_AbstractAnnotation, [AnnotationType.f_LINE__org_pepstock_charba_client_annotation_AnnotationType.m_value__()]));
  this.f_defaultValues__org_pepstock_charba_client_annotation_LineAnnotation_ = /**@type {IsDefaultsLineAnnotation}*/ ($Casts.$to(this.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation(), IsDefaultsLineAnnotation));
  this.f_label__org_pepstock_charba_client_annotation_LineAnnotation_ = LineLabel.$create__org_pepstock_charba_client_annotation_LineAnnotation__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this, this.f_defaultValues__org_pepstock_charba_client_annotation_LineAnnotation_.m_getLabel__());
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_LABEL__org_pepstock_charba_client_annotation_LineAnnotation_Property, this.f_label__org_pepstock_charba_client_annotation_LineAnnotation_);
  this.m_initCallbacks___$p_org_pepstock_charba_client_annotation_LineAnnotation();
 }
 //Factory method corresponding to constructor 'LineAnnotation(NativeObject, IsDefaultsAnnotation)'.
 /** @return {!LineAnnotation} */
 static $create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** ? */ nativeObject, /** IsDefaultsAnnotation */ defaultValues) {
  LineAnnotation.$clinit();
  let $instance = new LineAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_LineAnnotation__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(nativeObject, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'LineAnnotation(NativeObject, IsDefaultsAnnotation)'.
 
 $ctor__org_pepstock_charba_client_annotation_LineAnnotation__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** ? */ nativeObject, /** IsDefaultsAnnotation */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_annotation_AbstractXYAnnotation__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(AnnotationType.f_LINE__org_pepstock_charba_client_annotation_AnnotationType, nativeObject, defaultValues);
  this.$init___$p_org_pepstock_charba_client_annotation_LineAnnotation();
  Checker.m_assertCheck__boolean__java_lang_String(IsDefaultsLineAnnotation.$isInstance(this.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation()), Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(AbstractAnnotation.f_INVALID_DEFAULTS_VALUES_CLASS__org_pepstock_charba_client_annotation_AbstractAnnotation, [AnnotationType.f_LINE__org_pepstock_charba_client_annotation_AnnotationType.m_value__()]));
  this.f_defaultValues__org_pepstock_charba_client_annotation_LineAnnotation_ = /**@type {IsDefaultsLineAnnotation}*/ ($Casts.$to(this.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation(), IsDefaultsLineAnnotation));
  this.f_label__org_pepstock_charba_client_annotation_LineAnnotation_ = LineLabel.$create__org_pepstock_charba_client_annotation_LineAnnotation__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this, this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_LABEL__org_pepstock_charba_client_annotation_LineAnnotation_Property), this.f_defaultValues__org_pepstock_charba_client_annotation_LineAnnotation_.m_getLabel__());
  this.m_initCallbacks___$p_org_pepstock_charba_client_annotation_LineAnnotation();
 }
 
 m_initCallbacks___$p_org_pepstock_charba_client_annotation_LineAnnotation() {
  this.f_valueCallbackProxy__org_pepstock_charba_client_annotation_LineAnnotation_.callback = (/** ? */ context) =>{
   return this.m_onValue__org_pepstock_charba_client_annotation_AnnotationContext__org_pepstock_charba_client_annotation_callbacks_ValueCallback_$pp_org_pepstock_charba_client_annotation(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this, context), this.m_getValueCallback__());
  };
  this.f_endValueCallbackProxy__org_pepstock_charba_client_annotation_LineAnnotation_.callback = (/** ? */ context_1) =>{
   return this.m_onValue__org_pepstock_charba_client_annotation_AnnotationContext__org_pepstock_charba_client_annotation_callbacks_ValueCallback_$pp_org_pepstock_charba_client_annotation(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this, context_1), this.m_getEndValueCallback__());
  };
 }
 /** @override @return {LineLabel} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_client_annotation_LineAnnotation_;
 }
 
 m_setScaleID__java_lang_String(/** ?string */ scaleId) {
  ScaleId.m_checkIfValid__java_lang_String(scaleId);
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_SCALE_ID__org_pepstock_charba_client_annotation_LineAnnotation_Property, scaleId);
 }
 
 m_setScaleID__org_pepstock_charba_client_options_ScaleId(/** ScaleId */ scaleId) {
  ScaleId.m_checkIfValid__org_pepstock_charba_client_options_ScaleId(scaleId);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_SCALE_ID__org_pepstock_charba_client_annotation_LineAnnotation_Property, scaleId);
 }
 /** @override @return {ScaleId} */
 m_getScaleID__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_options_ScaleId(Property.f_SCALE_ID__org_pepstock_charba_client_annotation_LineAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_LineAnnotation_.m_getScaleID__());
 }
 
 m_setValue__java_lang_String(/** ?string */ value) {
  this.m_setValue__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_VALUE__org_pepstock_charba_client_annotation_LineAnnotation_Property, value);
 }
 
 m_setValue__double(/** number */ value) {
  this.m_setValue__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_VALUE__org_pepstock_charba_client_annotation_LineAnnotation_Property, value);
 }
 
 m_setValue__java_util_Date(/** Date */ value) {
  this.m_setValue__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_VALUE__org_pepstock_charba_client_annotation_LineAnnotation_Property, value);
 }
 /** @override @return {?string} */
 m_getValueAsString__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_VALUE__org_pepstock_charba_client_annotation_LineAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_LineAnnotation_.m_getValueAsString__());
 }
 /** @override @return {number} */
 m_getValueAsDouble__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__double(Property.f_VALUE__org_pepstock_charba_client_annotation_LineAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_LineAnnotation_.m_getValueAsDouble__());
 }
 /** @override @return {Date} */
 m_getValueAsDate__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_VALUE__org_pepstock_charba_client_annotation_LineAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_LineAnnotation_.m_getValueAsDate__());
 }
 
 m_setEndValue__java_lang_String(/** ?string */ endValue) {
  this.m_setEndValue__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_END_VALUE__org_pepstock_charba_client_annotation_LineAnnotation_Property, endValue);
 }
 
 m_setEndValue__double(/** number */ endValue) {
  this.m_setEndValue__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_END_VALUE__org_pepstock_charba_client_annotation_LineAnnotation_Property, endValue);
 }
 
 m_setEndValue__java_util_Date(/** Date */ endValue) {
  this.m_setEndValue__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_END_VALUE__org_pepstock_charba_client_annotation_LineAnnotation_Property, endValue);
 }
 /** @override @return {?string} */
 m_getEndValueAsString__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_END_VALUE__org_pepstock_charba_client_annotation_LineAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_LineAnnotation_.m_getEndValueAsString__());
 }
 /** @override @return {number} */
 m_getEndValueAsDouble__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__double(Property.f_END_VALUE__org_pepstock_charba_client_annotation_LineAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_LineAnnotation_.m_getEndValueAsDouble__());
 }
 /** @override @return {Date} */
 m_getEndValueAsDate__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_END_VALUE__org_pepstock_charba_client_annotation_LineAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_LineAnnotation_.m_getEndValueAsDate__());
 }
 /** @override @return {ValueCallback} */
 m_getValueCallback__() {
  return /**@type {ValueCallback}*/ ($Casts.$to(LineAnnotation.f_VALUE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineAnnotation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_LineAnnotation_.m_getValueCallback__()), ValueCallback));
 }
 
 m_setValue__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/** ValueCallback */ valueCallback) {
  LineAnnotation.f_VALUE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineAnnotation_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, valueCallback, this.f_valueCallbackProxy__org_pepstock_charba_client_annotation_LineAnnotation_.proxy);
 }
 
 m_setValue__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ valueCallback) {
  this.m_setValue__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_VALUE__org_pepstock_charba_client_annotation_LineAnnotation_Property, valueCallback);
 }
 /** @override @return {ValueCallback} */
 m_getEndValueCallback__() {
  return /**@type {ValueCallback}*/ ($Casts.$to(LineAnnotation.f_END_VALUE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineAnnotation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_LineAnnotation_.m_getEndValueCallback__()), ValueCallback));
 }
 
 m_setEndValue__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/** ValueCallback */ valueCallback) {
  LineAnnotation.f_END_VALUE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineAnnotation_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, valueCallback, this.f_endValueCallbackProxy__org_pepstock_charba_client_annotation_LineAnnotation_.proxy);
 }
 
 m_setEndValue__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ valueCallback) {
  this.m_setEndValue__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_END_VALUE__org_pepstock_charba_client_annotation_LineAnnotation_Property, valueCallback);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBorderWidth__() {
  return IsDefaultsLineAnnotation.m_getBorderWidth__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(this);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_annotation_LineAnnotation() {
  this.f_valueCallbackProxy__org_pepstock_charba_client_annotation_LineAnnotation_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_endValueCallbackProxy__org_pepstock_charba_client_annotation_LineAnnotation_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
 }
 
 static $clinit() {
  LineAnnotation.$clinit = () =>{};
  LineAnnotation.$loadModules();
  AbstractXYAnnotation.$clinit();
  IsDefaultsLineAnnotation.$clinit();
  LineAnnotation.f_VALUE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineAnnotation_ = /**@type {!CallbackPropertyHandler<ValueCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_VALUE__org_pepstock_charba_client_annotation_LineAnnotation_Property));
  LineAnnotation.f_END_VALUE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineAnnotation_ = /**@type {!CallbackPropertyHandler<ValueCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_END_VALUE__org_pepstock_charba_client_annotation_LineAnnotation_Property));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LineAnnotation;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AbstractAnnotation = goog.module.get('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
  AnnotationContext = goog.module.get('org.pepstock.charba.client.annotation.AnnotationContext$impl');
  AnnotationHelper = goog.module.get('org.pepstock.charba.client.annotation.AnnotationHelper$impl');
  AnnotationId = goog.module.get('org.pepstock.charba.client.annotation.AnnotationId$impl');
  AnnotationPlugin = goog.module.get('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
  AnnotationType = goog.module.get('org.pepstock.charba.client.annotation.AnnotationType$impl');
  Property = goog.module.get('org.pepstock.charba.client.annotation.LineAnnotation.Property$impl');
  LineLabel = goog.module.get('org.pepstock.charba.client.annotation.LineLabel$impl');
  ValueCallback = goog.module.get('org.pepstock.charba.client.annotation.callbacks.ValueCallback$impl');
  CallbackPropertyHandler = goog.module.get('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  ScaleId = goog.module.get('org.pepstock.charba.client.options.ScaleId$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number}*/
LineAnnotation.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_annotation_LineAnnotation = 2;
/**@type {CallbackPropertyHandler<ValueCallback>}*/
LineAnnotation.f_VALUE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineAnnotation_;
/**@type {CallbackPropertyHandler<ValueCallback>}*/
LineAnnotation.f_END_VALUE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineAnnotation_;
IsDefaultsLineAnnotation.$markImplementor(LineAnnotation);
$Util.$setClassMetadata(LineAnnotation, "org.pepstock.charba.client.annotation.LineAnnotation");

exports = LineAnnotation;

//# sourceMappingURL=LineAnnotation.js.map
