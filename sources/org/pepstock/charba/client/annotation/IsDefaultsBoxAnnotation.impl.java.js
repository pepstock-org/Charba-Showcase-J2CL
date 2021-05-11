goog.module('org.pepstock.charba.client.annotation.IsDefaultsBoxAnnotation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultsBackgroundColorHandler = goog.require('org.pepstock.charba.client.annotation.IsDefaultsBackgroundColorHandler$impl');
const IsDefaultsXYAnnotation = goog.require('org.pepstock.charba.client.annotation.IsDefaultsXYAnnotation$impl');

let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let AnnotationType = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationType$impl');
let BoxAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.BoxAnnotation$impl');
let CornerRadiusCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CornerRadiusCallback$impl');

/**
 * @interface
 * @extends {IsDefaultsXYAnnotation}
 * @extends {IsDefaultsBackgroundColorHandler}
 */
class IsDefaultsBoxAnnotation {
 /** @abstract @override @return {AnnotationType} */
 m_getType__() {}
 /** @abstract @override @return {number} */
 m_getBorderWidth__() {}
 /** @abstract @return {number} */
 m_getCornerRadius__() {}
 /** @abstract @return {CornerRadiusCallback<AnnotationContext>} */
 m_getCornerRadiusCallback__() {}
 /** @return {AnnotationType} */
 static m_getType__$default__org_pepstock_charba_client_annotation_IsDefaultsBoxAnnotation(/** !IsDefaultsBoxAnnotation */ $thisArg) {
  IsDefaultsBoxAnnotation.$clinit();
  return null;
 }
 /** @return {number} */
 static m_getBorderWidth__$default__org_pepstock_charba_client_annotation_IsDefaultsBoxAnnotation(/** !IsDefaultsBoxAnnotation */ $thisArg) {
  IsDefaultsBoxAnnotation.$clinit();
  return BoxAnnotation.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_annotation_BoxAnnotation;
 }
 /** @return {number} */
 static m_getCornerRadius__$default__org_pepstock_charba_client_annotation_IsDefaultsBoxAnnotation(/** !IsDefaultsBoxAnnotation */ $thisArg) {
  IsDefaultsBoxAnnotation.$clinit();
  return BoxAnnotation.f_DEFAULT_CORNER_RADIUS__org_pepstock_charba_client_annotation_BoxAnnotation;
 }
 /** @return {CornerRadiusCallback<AnnotationContext>} */
 static m_getCornerRadiusCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsBoxAnnotation(/** !IsDefaultsBoxAnnotation */ $thisArg) {
  IsDefaultsBoxAnnotation.$clinit();
  return null;
 }
 
 static $clinit() {
  IsDefaultsBoxAnnotation.$clinit = () =>{};
  IsDefaultsBoxAnnotation.$loadModules();
  IsDefaultsXYAnnotation.$clinit();
  IsDefaultsBackgroundColorHandler.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultsXYAnnotation.$markImplementor(ctor);
  IsDefaultsBackgroundColorHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_IsDefaultsBoxAnnotation = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_IsDefaultsBoxAnnotation;
 }
 
 static $loadModules() {
  BoxAnnotation = goog.module.get('org.pepstock.charba.client.annotation.BoxAnnotation$impl');
 }
}
IsDefaultsBoxAnnotation.$markImplementor(/**@type {Function}*/ (IsDefaultsBoxAnnotation));
$Util.$setClassMetadataForInterface(IsDefaultsBoxAnnotation, "org.pepstock.charba.client.annotation.IsDefaultsBoxAnnotation");

exports = IsDefaultsBoxAnnotation;

//# sourceMappingURL=IsDefaultsBoxAnnotation.js.map
