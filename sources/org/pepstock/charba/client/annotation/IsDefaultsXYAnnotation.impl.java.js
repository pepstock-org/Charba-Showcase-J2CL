goog.module('org.pepstock.charba.client.annotation.IsDefaultsXYAnnotation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultsAnnotation = goog.require('org.pepstock.charba.client.annotation.IsDefaultsAnnotation$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let ValueCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.ValueCallback$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');

/**
 * @interface
 * @extends {IsDefaultsAnnotation}
 */
class IsDefaultsXYAnnotation {
 /** @abstract @return {ScaleId} */
 m_getXScaleID__() {}
 /** @abstract @return {?string} */
 m_getXMaxAsString__() {}
 /** @abstract @return {number} */
 m_getXMaxAsDouble__() {}
 /** @abstract @return {Date} */
 m_getXMaxAsDate__() {}
 /** @abstract @return {?string} */
 m_getXMinAsString__() {}
 /** @abstract @return {number} */
 m_getXMinAsDouble__() {}
 /** @abstract @return {Date} */
 m_getXMinAsDate__() {}
 /** @abstract @return {ScaleId} */
 m_getYScaleID__() {}
 /** @abstract @return {?string} */
 m_getYMaxAsString__() {}
 /** @abstract @return {number} */
 m_getYMaxAsDouble__() {}
 /** @abstract @return {Date} */
 m_getYMaxAsDate__() {}
 /** @abstract @return {?string} */
 m_getYMinAsString__() {}
 /** @abstract @return {number} */
 m_getYMinAsDouble__() {}
 /** @abstract @return {Date} */
 m_getYMinAsDate__() {}
 /** @abstract @return {ValueCallback} */
 m_getXMinCallback__() {}
 /** @abstract @return {ValueCallback} */
 m_getXMaxCallback__() {}
 /** @abstract @return {ValueCallback} */
 m_getYMinCallback__() {}
 /** @abstract @return {ValueCallback} */
 m_getYMaxCallback__() {}
 /** @return {ScaleId} */
 static m_getXScaleID__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(/** !IsDefaultsXYAnnotation */ $thisArg) {
  IsDefaultsXYAnnotation.$clinit();
  return DefaultScaleId.f_X__org_pepstock_charba_client_enums_DefaultScaleId;
 }
 /** @return {?string} */
 static m_getXMaxAsString__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(/** !IsDefaultsXYAnnotation */ $thisArg) {
  IsDefaultsXYAnnotation.$clinit();
  return Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {number} */
 static m_getXMaxAsDouble__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(/** !IsDefaultsXYAnnotation */ $thisArg) {
  IsDefaultsXYAnnotation.$clinit();
  return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {Date} */
 static m_getXMaxAsDate__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(/** !IsDefaultsXYAnnotation */ $thisArg) {
  IsDefaultsXYAnnotation.$clinit();
  return null;
 }
 /** @return {?string} */
 static m_getXMinAsString__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(/** !IsDefaultsXYAnnotation */ $thisArg) {
  IsDefaultsXYAnnotation.$clinit();
  return Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {number} */
 static m_getXMinAsDouble__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(/** !IsDefaultsXYAnnotation */ $thisArg) {
  IsDefaultsXYAnnotation.$clinit();
  return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {Date} */
 static m_getXMinAsDate__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(/** !IsDefaultsXYAnnotation */ $thisArg) {
  IsDefaultsXYAnnotation.$clinit();
  return null;
 }
 /** @return {ScaleId} */
 static m_getYScaleID__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(/** !IsDefaultsXYAnnotation */ $thisArg) {
  IsDefaultsXYAnnotation.$clinit();
  return DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId;
 }
 /** @return {?string} */
 static m_getYMaxAsString__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(/** !IsDefaultsXYAnnotation */ $thisArg) {
  IsDefaultsXYAnnotation.$clinit();
  return Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {number} */
 static m_getYMaxAsDouble__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(/** !IsDefaultsXYAnnotation */ $thisArg) {
  IsDefaultsXYAnnotation.$clinit();
  return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {Date} */
 static m_getYMaxAsDate__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(/** !IsDefaultsXYAnnotation */ $thisArg) {
  IsDefaultsXYAnnotation.$clinit();
  return null;
 }
 /** @return {?string} */
 static m_getYMinAsString__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(/** !IsDefaultsXYAnnotation */ $thisArg) {
  IsDefaultsXYAnnotation.$clinit();
  return Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {number} */
 static m_getYMinAsDouble__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(/** !IsDefaultsXYAnnotation */ $thisArg) {
  IsDefaultsXYAnnotation.$clinit();
  return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {Date} */
 static m_getYMinAsDate__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(/** !IsDefaultsXYAnnotation */ $thisArg) {
  IsDefaultsXYAnnotation.$clinit();
  return null;
 }
 /** @return {ValueCallback} */
 static m_getXMinCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(/** !IsDefaultsXYAnnotation */ $thisArg) {
  IsDefaultsXYAnnotation.$clinit();
  return null;
 }
 /** @return {ValueCallback} */
 static m_getXMaxCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(/** !IsDefaultsXYAnnotation */ $thisArg) {
  IsDefaultsXYAnnotation.$clinit();
  return null;
 }
 /** @return {ValueCallback} */
 static m_getYMinCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(/** !IsDefaultsXYAnnotation */ $thisArg) {
  IsDefaultsXYAnnotation.$clinit();
  return null;
 }
 /** @return {ValueCallback} */
 static m_getYMaxCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(/** !IsDefaultsXYAnnotation */ $thisArg) {
  IsDefaultsXYAnnotation.$clinit();
  return null;
 }
 
 static $clinit() {
  IsDefaultsXYAnnotation.$clinit = () =>{};
  IsDefaultsXYAnnotation.$loadModules();
  IsDefaultsAnnotation.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultsAnnotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation;
 }
 
 static $loadModules() {
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
IsDefaultsXYAnnotation.$markImplementor(/**@type {Function}*/ (IsDefaultsXYAnnotation));
$Util.$setClassMetadataForInterface(IsDefaultsXYAnnotation, "org.pepstock.charba.client.annotation.IsDefaultsXYAnnotation");

exports = IsDefaultsXYAnnotation;

//# sourceMappingURL=IsDefaultsXYAnnotation.js.map
