goog.module('org.pepstock.charba.client.annotation.AbstractXYAnnotation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractAnnotation = goog.require('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
const IsDefaultsXYAnnotation = goog.require('org.pepstock.charba.client.annotation.IsDefaultsXYAnnotation$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractXYAnnotation.Property$impl');
let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let AnnotationPlugin = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
let AnnotationType = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationType$impl');
let IsAnnotationId = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsAnnotationId$impl');
let IsDefaultsAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsDefaultsAnnotation$impl');
let ValueCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.ValueCallback$impl');
let CallbackPropertyHandler = goog.forwardDeclare('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.IsScaleId$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @implements {IsDefaultsXYAnnotation}
 */
class AbstractXYAnnotation extends AbstractAnnotation {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/
  this.f_xMinCallbackProxy__org_pepstock_charba_client_annotation_AbstractXYAnnotation_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/
  this.f_xMaxCallbackProxy__org_pepstock_charba_client_annotation_AbstractXYAnnotation_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/
  this.f_yMinCallbackProxy__org_pepstock_charba_client_annotation_AbstractXYAnnotation_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/
  this.f_yMaxCallbackProxy__org_pepstock_charba_client_annotation_AbstractXYAnnotation_;
  /**@type {IsDefaultsXYAnnotation}*/
  this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractXYAnnotation_;
 }
 //Initialization from constructor 'AbstractXYAnnotation(AnnotationType, IsAnnotationId, IsDefaultsAnnotation)'.
 
 $ctor__org_pepstock_charba_client_annotation_AbstractXYAnnotation__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** AnnotationType */ type, /** IsAnnotationId */ id, /** IsDefaultsAnnotation */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/**@type {AnnotationType}*/ ($Casts.$to(Key.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Key(type), AnnotationType)), $Equality.$same(id, null) ? type.m_createId__() : id, $Equality.$same(defaultValues, null) ? type.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation() : defaultValues);
  this.$init___$p_org_pepstock_charba_client_annotation_AbstractXYAnnotation();
  Checker.m_assertCheck__boolean__java_lang_String(IsDefaultsXYAnnotation.$isInstance(this.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation()), Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(AbstractAnnotation.f_INVALID_DEFAULTS_VALUES_CLASS__org_pepstock_charba_client_annotation_AbstractAnnotation, [type.m_value__()]));
  this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractXYAnnotation_ = /**@type {IsDefaultsXYAnnotation}*/ ($Casts.$to(this.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation(), IsDefaultsXYAnnotation));
  this.m_initAbstractXYCallbacks___$p_org_pepstock_charba_client_annotation_AbstractXYAnnotation();
 }
 //Initialization from constructor 'AbstractXYAnnotation(AnnotationType, NativeObject, IsDefaultsAnnotation)'.
 
 $ctor__org_pepstock_charba_client_annotation_AbstractXYAnnotation__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** AnnotationType */ type, /** ? */ nativeObject, /** IsDefaultsAnnotation */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(nativeObject, defaultValues);
  this.$init___$p_org_pepstock_charba_client_annotation_AbstractXYAnnotation();
  Checker.m_assertCheck__boolean__java_lang_String(IsDefaultsXYAnnotation.$isInstance(this.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation()), Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(AbstractAnnotation.f_INVALID_DEFAULTS_VALUES_CLASS__org_pepstock_charba_client_annotation_AbstractAnnotation, [type.m_value__()]));
  this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractXYAnnotation_ = /**@type {IsDefaultsXYAnnotation}*/ ($Casts.$to(this.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation(), IsDefaultsXYAnnotation));
  this.m_initAbstractXYCallbacks___$p_org_pepstock_charba_client_annotation_AbstractXYAnnotation();
 }
 
 m_initAbstractXYCallbacks___$p_org_pepstock_charba_client_annotation_AbstractXYAnnotation() {
  this.f_xMinCallbackProxy__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.callback = (/** Object */ contextFunction, /** ? */ context) =>{
   return this.m_onValue__org_pepstock_charba_client_annotation_AnnotationContext__org_pepstock_charba_client_annotation_callbacks_ValueCallback_$pp_org_pepstock_charba_client_annotation(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this, context), this.m_getXMinCallback__());
  };
  this.f_xMaxCallbackProxy__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.callback = (/** Object */ contextFunction_1, /** ? */ context_1) =>{
   return this.m_onValue__org_pepstock_charba_client_annotation_AnnotationContext__org_pepstock_charba_client_annotation_callbacks_ValueCallback_$pp_org_pepstock_charba_client_annotation(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this, context_1), this.m_getXMaxCallback__());
  };
  this.f_yMinCallbackProxy__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.callback = (/** Object */ contextFunction_2, /** ? */ context_2) =>{
   return this.m_onValue__org_pepstock_charba_client_annotation_AnnotationContext__org_pepstock_charba_client_annotation_callbacks_ValueCallback_$pp_org_pepstock_charba_client_annotation(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this, context_2), this.m_getYMinCallback__());
  };
  this.f_yMaxCallbackProxy__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.callback = (/** Object */ contextFunction_3, /** ? */ context_3) =>{
   return this.m_onValue__org_pepstock_charba_client_annotation_AnnotationContext__org_pepstock_charba_client_annotation_callbacks_ValueCallback_$pp_org_pepstock_charba_client_annotation(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this, context_3), this.m_getYMaxCallback__());
  };
 }
 
 m_setXScaleID__java_lang_String(/** ?string */ scaleId) {
  IsScaleId.m_checkIfValid__java_lang_String(scaleId);
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_X_SCALE_ID__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, scaleId);
 }
 
 m_setXScaleID__org_pepstock_charba_client_options_IsScaleId(/** IsScaleId */ scaleId) {
  IsScaleId.m_checkIfValid__org_pepstock_charba_client_options_IsScaleId(scaleId);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_X_SCALE_ID__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, scaleId);
 }
 /** @override @return {IsScaleId} */
 m_getXScaleID__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_options_IsScaleId(Property.f_X_SCALE_ID__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_getXScaleID__());
 }
 
 m_setXMax__java_lang_String(/** ?string */ max) {
  this.m_setXMax__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_X_MAX__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, max);
 }
 
 m_setXMax__double(/** number */ max) {
  this.m_setXMax__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_X_MAX__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, max);
 }
 
 m_setXMax__java_util_Date(/** Date */ max) {
  this.m_setXMax__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_X_MAX__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, max);
 }
 /** @override @return {?string} */
 m_getXMaxAsString__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_X_MAX__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_getXMaxAsString__());
 }
 /** @override @return {number} */
 m_getXMaxAsDouble__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__double(Property.f_X_MAX__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_getXMaxAsDouble__());
 }
 /** @override @return {Date} */
 m_getXMaxAsDate__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_X_MAX__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_getXMaxAsDate__());
 }
 
 m_setXMin__java_lang_String(/** ?string */ min) {
  this.m_setXMin__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_X_MIN__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, min);
 }
 
 m_setXMin__double(/** number */ min) {
  this.m_setXMin__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_X_MIN__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, min);
 }
 
 m_setXMin__java_util_Date(/** Date */ min) {
  this.m_setXMin__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_X_MIN__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, min);
 }
 /** @override @return {?string} */
 m_getXMinAsString__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_X_MIN__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_getXMinAsString__());
 }
 /** @override @return {number} */
 m_getXMinAsDouble__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__double(Property.f_X_MIN__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_getXMinAsDouble__());
 }
 /** @override @return {Date} */
 m_getXMinAsDate__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_X_MIN__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_getXMinAsDate__());
 }
 
 m_setYScaleID__java_lang_String(/** ?string */ scaleId) {
  IsScaleId.m_checkIfValid__java_lang_String(scaleId);
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_Y_SCALE_ID__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, scaleId);
 }
 
 m_setYScaleID__org_pepstock_charba_client_options_IsScaleId(/** IsScaleId */ scaleId) {
  IsScaleId.m_checkIfValid__org_pepstock_charba_client_options_IsScaleId(scaleId);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_Y_SCALE_ID__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, scaleId);
 }
 /** @override @return {IsScaleId} */
 m_getYScaleID__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_options_IsScaleId(Property.f_Y_SCALE_ID__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_getYScaleID__());
 }
 
 m_setYMax__java_lang_String(/** ?string */ max) {
  this.m_setYMax__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_Y_MAX__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, max);
 }
 
 m_setYMax__double(/** number */ max) {
  this.m_setYMax__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_Y_MAX__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, max);
 }
 
 m_setYMax__java_util_Date(/** Date */ max) {
  this.m_setYMax__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_Y_MAX__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, max);
 }
 /** @override @return {?string} */
 m_getYMaxAsString__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_Y_MAX__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_getYMaxAsString__());
 }
 /** @override @return {number} */
 m_getYMaxAsDouble__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__double(Property.f_Y_MAX__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_getYMaxAsDouble__());
 }
 /** @override @return {Date} */
 m_getYMaxAsDate__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_Y_MAX__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_getYMaxAsDate__());
 }
 
 m_setYMin__java_lang_String(/** ?string */ min) {
  this.m_setYMin__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_Y_MIN__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, min);
 }
 
 m_setYMin__double(/** number */ min) {
  this.m_setYMin__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_Y_MIN__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, min);
 }
 
 m_setYMin__java_util_Date(/** Date */ min) {
  this.m_setYMin__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/**@type {ValueCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_Y_MIN__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, min);
 }
 /** @override @return {?string} */
 m_getYMinAsString__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_Y_MIN__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_getYMinAsString__());
 }
 /** @override @return {number} */
 m_getYMinAsDouble__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__double(Property.f_Y_MIN__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_getYMinAsDouble__());
 }
 /** @override @return {Date} */
 m_getYMinAsDate__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_Y_MIN__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_getYMinAsDate__());
 }
 /** @override @return {ValueCallback} */
 m_getXMinCallback__() {
  return /**@type {ValueCallback}*/ ($Casts.$to(AbstractXYAnnotation.f_X_MIN_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_getXMinCallback__()), ValueCallback));
 }
 
 m_setXMin__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/** ValueCallback */ valueCallback) {
  AbstractXYAnnotation.f_X_MIN_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, valueCallback, this.f_xMinCallbackProxy__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.proxy);
 }
 /** @override @return {ValueCallback} */
 m_getXMaxCallback__() {
  return /**@type {ValueCallback}*/ ($Casts.$to(AbstractXYAnnotation.f_X_MAX_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_getXMaxCallback__()), ValueCallback));
 }
 
 m_setXMax__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/** ValueCallback */ valueCallback) {
  AbstractXYAnnotation.f_X_MAX_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, valueCallback, this.f_xMaxCallbackProxy__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.proxy);
 }
 /** @override @return {ValueCallback} */
 m_getYMinCallback__() {
  return /**@type {ValueCallback}*/ ($Casts.$to(AbstractXYAnnotation.f_Y_MIN_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_getYMinCallback__()), ValueCallback));
 }
 
 m_setYMin__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/** ValueCallback */ valueCallback) {
  AbstractXYAnnotation.f_Y_MIN_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, valueCallback, this.f_yMinCallbackProxy__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.proxy);
 }
 /** @override @return {ValueCallback} */
 m_getYMaxCallback__() {
  return /**@type {ValueCallback}*/ ($Casts.$to(AbstractXYAnnotation.f_Y_MAX_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_getYMaxCallback__()), ValueCallback));
 }
 
 m_setYMax__org_pepstock_charba_client_annotation_callbacks_ValueCallback(/** ValueCallback */ valueCallback) {
  AbstractXYAnnotation.f_Y_MAX_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, valueCallback, this.f_yMaxCallbackProxy__org_pepstock_charba_client_annotation_AbstractXYAnnotation_.proxy);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_annotation_AbstractXYAnnotation() {
  this.f_xMinCallbackProxy__org_pepstock_charba_client_annotation_AbstractXYAnnotation_ = /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_xMaxCallbackProxy__org_pepstock_charba_client_annotation_AbstractXYAnnotation_ = /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_yMinCallbackProxy__org_pepstock_charba_client_annotation_AbstractXYAnnotation_ = /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_yMaxCallbackProxy__org_pepstock_charba_client_annotation_AbstractXYAnnotation_ = /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
 }
 
 static $clinit() {
  AbstractXYAnnotation.$clinit = () =>{};
  AbstractXYAnnotation.$loadModules();
  AbstractAnnotation.$clinit();
  IsDefaultsXYAnnotation.$clinit();
  AbstractXYAnnotation.f_X_MIN_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractXYAnnotation_ = /**@type {!CallbackPropertyHandler<ValueCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_X_MIN__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property));
  AbstractXYAnnotation.f_X_MAX_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractXYAnnotation_ = /**@type {!CallbackPropertyHandler<ValueCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_X_MAX__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property));
  AbstractXYAnnotation.f_Y_MIN_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractXYAnnotation_ = /**@type {!CallbackPropertyHandler<ValueCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_Y_MIN__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property));
  AbstractXYAnnotation.f_Y_MAX_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractXYAnnotation_ = /**@type {!CallbackPropertyHandler<ValueCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_Y_MAX__org_pepstock_charba_client_annotation_AbstractXYAnnotation_Property));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractXYAnnotation;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Property = goog.module.get('org.pepstock.charba.client.annotation.AbstractXYAnnotation.Property$impl');
  AnnotationContext = goog.module.get('org.pepstock.charba.client.annotation.AnnotationContext$impl');
  AnnotationPlugin = goog.module.get('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
  AnnotationType = goog.module.get('org.pepstock.charba.client.annotation.AnnotationType$impl');
  ValueCallback = goog.module.get('org.pepstock.charba.client.annotation.callbacks.ValueCallback$impl');
  CallbackPropertyHandler = goog.module.get('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  IsScaleId = goog.module.get('org.pepstock.charba.client.options.IsScaleId$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {CallbackPropertyHandler<ValueCallback>}*/
AbstractXYAnnotation.f_X_MIN_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractXYAnnotation_;
/**@type {CallbackPropertyHandler<ValueCallback>}*/
AbstractXYAnnotation.f_X_MAX_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractXYAnnotation_;
/**@type {CallbackPropertyHandler<ValueCallback>}*/
AbstractXYAnnotation.f_Y_MIN_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractXYAnnotation_;
/**@type {CallbackPropertyHandler<ValueCallback>}*/
AbstractXYAnnotation.f_Y_MAX_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractXYAnnotation_;
IsDefaultsXYAnnotation.$markImplementor(AbstractXYAnnotation);
$Util.$setClassMetadata(AbstractXYAnnotation, "org.pepstock.charba.client.annotation.AbstractXYAnnotation");

exports = AbstractXYAnnotation;

//# sourceMappingURL=AbstractXYAnnotation.js.map
