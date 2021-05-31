goog.module('org.pepstock.charba.client.annotation.IsDefaultsLineAnnotation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultsXYAnnotation = goog.require('org.pepstock.charba.client.annotation.IsDefaultsXYAnnotation$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let AnnotationType = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationType$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsDefaultsLineAnnotation.$LambdaAdaptor$impl');
let IsDefaultsLineLabel = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsDefaultsLineLabel$impl');
let LineAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.LineAnnotation$impl');
let ValueCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.ValueCallback$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');

/**
 * @interface
 * @extends {IsDefaultsXYAnnotation}
 */
class IsDefaultsLineAnnotation {
 /** @abstract @override @return {AnnotationType} */
 m_getType__() {}
 /** @abstract @override @return {ScaleId} */
 m_getXScaleID__() {}
 /** @abstract @override @return {ScaleId} */
 m_getYScaleID__() {}
 /** @abstract @override @return {number} */
 m_getBorderWidth__() {}
 /** @abstract @return {IsDefaultsLineLabel} */
 m_getLabel__() {}
 /** @abstract @return {ScaleId} */
 m_getScaleID__() {}
 /** @abstract @return {?string} */
 m_getValueAsString__() {}
 /** @abstract @return {number} */
 m_getValueAsDouble__() {}
 /** @abstract @return {Date} */
 m_getValueAsDate__() {}
 /** @abstract @return {?string} */
 m_getEndValueAsString__() {}
 /** @abstract @return {number} */
 m_getEndValueAsDouble__() {}
 /** @abstract @return {Date} */
 m_getEndValueAsDate__() {}
 /** @abstract @return {ValueCallback} */
 m_getValueCallback__() {}
 /** @abstract @return {ValueCallback} */
 m_getEndValueCallback__() {}
 /** @return {IsDefaultsLineAnnotation} */
 static $adapt(/** ?function():IsDefaultsLineLabel */ fn) {
  IsDefaultsLineAnnotation.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {AnnotationType} */
 static m_getType__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(/** !IsDefaultsLineAnnotation */ $thisArg) {
  IsDefaultsLineAnnotation.$clinit();
  return null;
 }
 /** @return {ScaleId} */
 static m_getXScaleID__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(/** !IsDefaultsLineAnnotation */ $thisArg) {
  IsDefaultsLineAnnotation.$clinit();
  return IsDefaultsXYAnnotation.m_getXScaleID__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation($thisArg);
 }
 /** @return {ScaleId} */
 static m_getYScaleID__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(/** !IsDefaultsLineAnnotation */ $thisArg) {
  IsDefaultsLineAnnotation.$clinit();
  return IsDefaultsXYAnnotation.m_getYScaleID__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation($thisArg);
 }
 /** @return {number} */
 static m_getBorderWidth__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(/** !IsDefaultsLineAnnotation */ $thisArg) {
  IsDefaultsLineAnnotation.$clinit();
  return LineAnnotation.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_annotation_LineAnnotation;
 }
 /** @return {ScaleId} */
 static m_getScaleID__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(/** !IsDefaultsLineAnnotation */ $thisArg) {
  IsDefaultsLineAnnotation.$clinit();
  return null;
 }
 /** @return {?string} */
 static m_getValueAsString__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(/** !IsDefaultsLineAnnotation */ $thisArg) {
  IsDefaultsLineAnnotation.$clinit();
  return Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {number} */
 static m_getValueAsDouble__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(/** !IsDefaultsLineAnnotation */ $thisArg) {
  IsDefaultsLineAnnotation.$clinit();
  return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {Date} */
 static m_getValueAsDate__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(/** !IsDefaultsLineAnnotation */ $thisArg) {
  IsDefaultsLineAnnotation.$clinit();
  return null;
 }
 /** @return {?string} */
 static m_getEndValueAsString__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(/** !IsDefaultsLineAnnotation */ $thisArg) {
  IsDefaultsLineAnnotation.$clinit();
  return Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {number} */
 static m_getEndValueAsDouble__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(/** !IsDefaultsLineAnnotation */ $thisArg) {
  IsDefaultsLineAnnotation.$clinit();
  return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {Date} */
 static m_getEndValueAsDate__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(/** !IsDefaultsLineAnnotation */ $thisArg) {
  IsDefaultsLineAnnotation.$clinit();
  return null;
 }
 /** @return {ValueCallback} */
 static m_getValueCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(/** !IsDefaultsLineAnnotation */ $thisArg) {
  IsDefaultsLineAnnotation.$clinit();
  return null;
 }
 /** @return {ValueCallback} */
 static m_getEndValueCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(/** !IsDefaultsLineAnnotation */ $thisArg) {
  IsDefaultsLineAnnotation.$clinit();
  return null;
 }
 
 static $clinit() {
  IsDefaultsLineAnnotation.$clinit = () =>{};
  IsDefaultsLineAnnotation.$loadModules();
  IsDefaultsXYAnnotation.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultsXYAnnotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.annotation.IsDefaultsLineAnnotation.$LambdaAdaptor$impl');
  LineAnnotation = goog.module.get('org.pepstock.charba.client.annotation.LineAnnotation$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
IsDefaultsLineAnnotation.$markImplementor(/**@type {Function}*/ (IsDefaultsLineAnnotation));
$Util.$setClassMetadataForInterface(IsDefaultsLineAnnotation, "org.pepstock.charba.client.annotation.IsDefaultsLineAnnotation");

exports = IsDefaultsLineAnnotation;

//# sourceMappingURL=IsDefaultsLineAnnotation.js.map
