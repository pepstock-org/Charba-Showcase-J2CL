goog.module('org.pepstock.charba.client.annotation.IsDefaultsAnnotationOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
let AnnotationOptions = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationOptions$impl');
let IsAnnotationId = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsAnnotationId$impl');
let DrawTime = goog.forwardDeclare('org.pepstock.charba.client.annotation.enums.DrawTime$impl');

/**
 * @interface
 */
class IsDefaultsAnnotationOptions {
 /** @abstract @return {number} */
 m_getDoubleClickSpeed__() {}
 /** @abstract @return {DrawTime} */
 m_getDrawTime__() {}
 /** @abstract @return {boolean} */
 m_hasAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId(/** IsAnnotationId */ id) {}
 /** @abstract @return {List<AbstractAnnotation>} */
 m_getAnnotations__() {}
 /** @abstract @return {AbstractAnnotation} */
 m_getAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId(/** IsAnnotationId */ id) {}
 /** @return {number} */
 static m_getDoubleClickSpeed__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions(/** !IsDefaultsAnnotationOptions */ $thisArg) {
  IsDefaultsAnnotationOptions.$clinit();
  return AnnotationOptions.f_DEFAULT_DOUBLE_CLICK_SPEED__org_pepstock_charba_client_annotation_AnnotationOptions;
 }
 /** @return {DrawTime} */
 static m_getDrawTime__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions(/** !IsDefaultsAnnotationOptions */ $thisArg) {
  IsDefaultsAnnotationOptions.$clinit();
  return AnnotationOptions.f_DEFAULT_DRAW_TIME__org_pepstock_charba_client_annotation_AnnotationOptions;
 }
 /** @return {boolean} */
 static m_hasAnnotation__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions__org_pepstock_charba_client_annotation_IsAnnotationId(/** !IsDefaultsAnnotationOptions */ $thisArg, /** IsAnnotationId */ id) {
  IsDefaultsAnnotationOptions.$clinit();
  return false;
 }
 /** @return {List<AbstractAnnotation>} */
 static m_getAnnotations__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions(/** !IsDefaultsAnnotationOptions */ $thisArg) {
  IsDefaultsAnnotationOptions.$clinit();
  return /**@type {List<AbstractAnnotation>}*/ (Collections.m_emptyList__());
 }
 /** @return {AbstractAnnotation} */
 static m_getAnnotation__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions__org_pepstock_charba_client_annotation_IsAnnotationId(/** !IsDefaultsAnnotationOptions */ $thisArg, /** IsAnnotationId */ id) {
  IsDefaultsAnnotationOptions.$clinit();
  return null;
 }
 
 static $clinit() {
  IsDefaultsAnnotationOptions.$clinit = () =>{};
  IsDefaultsAnnotationOptions.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  AnnotationOptions = goog.module.get('org.pepstock.charba.client.annotation.AnnotationOptions$impl');
 }
}
IsDefaultsAnnotationOptions.$markImplementor(/**@type {Function}*/ (IsDefaultsAnnotationOptions));
$Util.$setClassMetadataForInterface(IsDefaultsAnnotationOptions, "org.pepstock.charba.client.annotation.IsDefaultsAnnotationOptions");

exports = IsDefaultsAnnotationOptions;

//# sourceMappingURL=IsDefaultsAnnotationOptions.js.map
