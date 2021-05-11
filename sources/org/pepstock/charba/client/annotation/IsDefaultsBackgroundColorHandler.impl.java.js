goog.module('org.pepstock.charba.client.annotation.IsDefaultsBackgroundColorHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');

/**
 * @interface
 */
class IsDefaultsBackgroundColorHandler {
 /** @abstract @return {ColorCallback<AnnotationContext>} */
 m_getBackgroundColorCallback__() {}
 /** @return {ColorCallback<AnnotationContext>} */
 static m_getBackgroundColorCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsBackgroundColorHandler(/** !IsDefaultsBackgroundColorHandler */ $thisArg) {
  IsDefaultsBackgroundColorHandler.$clinit();
  return null;
 }
 
 static $clinit() {
  IsDefaultsBackgroundColorHandler.$clinit = () =>{};
  IsDefaultsBackgroundColorHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_IsDefaultsBackgroundColorHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_IsDefaultsBackgroundColorHandler;
 }
 
 static $loadModules() {}
}
IsDefaultsBackgroundColorHandler.$markImplementor(/**@type {Function}*/ (IsDefaultsBackgroundColorHandler));
$Util.$setClassMetadataForInterface(IsDefaultsBackgroundColorHandler, "org.pepstock.charba.client.annotation.IsDefaultsBackgroundColorHandler");

exports = IsDefaultsBackgroundColorHandler;

//# sourceMappingURL=IsDefaultsBackgroundColorHandler.js.map
