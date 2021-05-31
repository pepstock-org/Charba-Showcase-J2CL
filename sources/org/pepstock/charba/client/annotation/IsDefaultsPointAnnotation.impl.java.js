goog.module('org.pepstock.charba.client.annotation.IsDefaultsPointAnnotation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultsAnnotation = goog.require('org.pepstock.charba.client.annotation.IsDefaultsAnnotation$impl');
const IsDefaultsBackgroundColorHandler = goog.require('org.pepstock.charba.client.annotation.IsDefaultsBackgroundColorHandler$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let AnnotationType = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationType$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsDefaultsPointAnnotation.$LambdaAdaptor$impl');
let PointAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.PointAnnotation$impl');
let ValueCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.ValueCallback$impl');
let RadiusCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.RadiusCallback$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');

/**
 * @interface
 * @extends {IsDefaultsAnnotation}
 * @extends {IsDefaultsBackgroundColorHandler}
 */
class IsDefaultsPointAnnotation {
 /** @abstract @override @return {number} */
 m_getBorderWidth__() {}
 /** @abstract @return {number} */
 m_getRadius__() {}
 /** @abstract @return {ScaleId} */
 m_getXScaleID__() {}
 /** @abstract @return {ScaleId} */
 m_getYScaleID__() {}
 /** @abstract @return {?string} */
 m_getXValueAsString__() {}
 /** @abstract @return {number} */
 m_getXValueAsDouble__() {}
 /** @abstract @return {Date} */
 m_getXValueAsDate__() {}
 /** @abstract @return {?string} */
 m_getYValueAsString__() {}
 /** @abstract @return {number} */
 m_getYValueAsDouble__() {}
 /** @abstract @return {Date} */
 m_getYValueAsDate__() {}
 /** @abstract @return {RadiusCallback<AnnotationContext>} */
 m_getRadiusCallback__() {}
 /** @abstract @return {ValueCallback} */
 m_getXValueCallback__() {}
 /** @abstract @return {ValueCallback} */
 m_getYValueCallback__() {}
 /** @return {IsDefaultsPointAnnotation} */
 static $adapt(/** ?function():AnnotationType */ fn) {
  IsDefaultsPointAnnotation.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {number} */
 static m_getBorderWidth__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(/** !IsDefaultsPointAnnotation */ $thisArg) {
  IsDefaultsPointAnnotation.$clinit();
  return PointAnnotation.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_annotation_PointAnnotation;
 }
 /** @return {number} */
 static m_getRadius__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(/** !IsDefaultsPointAnnotation */ $thisArg) {
  IsDefaultsPointAnnotation.$clinit();
  return PointAnnotation.f_DEFAULT_RADIUS__org_pepstock_charba_client_annotation_PointAnnotation;
 }
 /** @return {ScaleId} */
 static m_getXScaleID__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(/** !IsDefaultsPointAnnotation */ $thisArg) {
  IsDefaultsPointAnnotation.$clinit();
  return DefaultScaleId.f_X__org_pepstock_charba_client_enums_DefaultScaleId;
 }
 /** @return {ScaleId} */
 static m_getYScaleID__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(/** !IsDefaultsPointAnnotation */ $thisArg) {
  IsDefaultsPointAnnotation.$clinit();
  return DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId;
 }
 /** @return {?string} */
 static m_getXValueAsString__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(/** !IsDefaultsPointAnnotation */ $thisArg) {
  IsDefaultsPointAnnotation.$clinit();
  return Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {number} */
 static m_getXValueAsDouble__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(/** !IsDefaultsPointAnnotation */ $thisArg) {
  IsDefaultsPointAnnotation.$clinit();
  return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {Date} */
 static m_getXValueAsDate__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(/** !IsDefaultsPointAnnotation */ $thisArg) {
  IsDefaultsPointAnnotation.$clinit();
  return null;
 }
 /** @return {?string} */
 static m_getYValueAsString__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(/** !IsDefaultsPointAnnotation */ $thisArg) {
  IsDefaultsPointAnnotation.$clinit();
  return Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {number} */
 static m_getYValueAsDouble__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(/** !IsDefaultsPointAnnotation */ $thisArg) {
  IsDefaultsPointAnnotation.$clinit();
  return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {Date} */
 static m_getYValueAsDate__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(/** !IsDefaultsPointAnnotation */ $thisArg) {
  IsDefaultsPointAnnotation.$clinit();
  return null;
 }
 /** @return {RadiusCallback<AnnotationContext>} */
 static m_getRadiusCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(/** !IsDefaultsPointAnnotation */ $thisArg) {
  IsDefaultsPointAnnotation.$clinit();
  return null;
 }
 /** @return {ValueCallback} */
 static m_getXValueCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(/** !IsDefaultsPointAnnotation */ $thisArg) {
  IsDefaultsPointAnnotation.$clinit();
  return null;
 }
 /** @return {ValueCallback} */
 static m_getYValueCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(/** !IsDefaultsPointAnnotation */ $thisArg) {
  IsDefaultsPointAnnotation.$clinit();
  return null;
 }
 
 static $clinit() {
  IsDefaultsPointAnnotation.$clinit = () =>{};
  IsDefaultsPointAnnotation.$loadModules();
  IsDefaultsAnnotation.$clinit();
  IsDefaultsBackgroundColorHandler.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultsAnnotation.$markImplementor(ctor);
  IsDefaultsBackgroundColorHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.annotation.IsDefaultsPointAnnotation.$LambdaAdaptor$impl');
  PointAnnotation = goog.module.get('org.pepstock.charba.client.annotation.PointAnnotation$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
IsDefaultsPointAnnotation.$markImplementor(/**@type {Function}*/ (IsDefaultsPointAnnotation));
$Util.$setClassMetadataForInterface(IsDefaultsPointAnnotation, "org.pepstock.charba.client.annotation.IsDefaultsPointAnnotation");

exports = IsDefaultsPointAnnotation;

//# sourceMappingURL=IsDefaultsPointAnnotation.js.map
