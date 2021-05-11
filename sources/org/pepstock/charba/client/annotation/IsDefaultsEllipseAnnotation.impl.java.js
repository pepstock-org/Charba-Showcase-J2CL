goog.module('org.pepstock.charba.client.annotation.IsDefaultsEllipseAnnotation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultsBackgroundColorHandler = goog.require('org.pepstock.charba.client.annotation.IsDefaultsBackgroundColorHandler$impl');
const IsDefaultsXYAnnotation = goog.require('org.pepstock.charba.client.annotation.IsDefaultsXYAnnotation$impl');

let AnnotationType = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationType$impl');
let EllipseAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.EllipseAnnotation$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsDefaultsEllipseAnnotation.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {IsDefaultsXYAnnotation}
 * @extends {IsDefaultsBackgroundColorHandler}
 */
class IsDefaultsEllipseAnnotation {
 /** @abstract @override @return {number} */
 m_getBorderWidth__() {}
 /** @return {IsDefaultsEllipseAnnotation} */
 static $adapt(/** ?function():AnnotationType */ fn) {
  IsDefaultsEllipseAnnotation.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {number} */
 static m_getBorderWidth__$default__org_pepstock_charba_client_annotation_IsDefaultsEllipseAnnotation(/** !IsDefaultsEllipseAnnotation */ $thisArg) {
  IsDefaultsEllipseAnnotation.$clinit();
  return EllipseAnnotation.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_annotation_EllipseAnnotation;
 }
 
 static $clinit() {
  IsDefaultsEllipseAnnotation.$clinit = () =>{};
  IsDefaultsEllipseAnnotation.$loadModules();
  IsDefaultsXYAnnotation.$clinit();
  IsDefaultsBackgroundColorHandler.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultsXYAnnotation.$markImplementor(ctor);
  IsDefaultsBackgroundColorHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_IsDefaultsEllipseAnnotation = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_IsDefaultsEllipseAnnotation;
 }
 
 static $loadModules() {
  EllipseAnnotation = goog.module.get('org.pepstock.charba.client.annotation.EllipseAnnotation$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.annotation.IsDefaultsEllipseAnnotation.$LambdaAdaptor$impl');
 }
}
IsDefaultsEllipseAnnotation.$markImplementor(/**@type {Function}*/ (IsDefaultsEllipseAnnotation));
$Util.$setClassMetadataForInterface(IsDefaultsEllipseAnnotation, "org.pepstock.charba.client.annotation.IsDefaultsEllipseAnnotation");

exports = IsDefaultsEllipseAnnotation;

//# sourceMappingURL=IsDefaultsEllipseAnnotation.js.map
