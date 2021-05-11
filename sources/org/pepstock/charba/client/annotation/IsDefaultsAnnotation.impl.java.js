goog.module('org.pepstock.charba.client.annotation.IsDefaultsAnnotation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let AnnotationOptions = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationOptions$impl');
let AnnotationType = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationType$impl');
let AdjustScaleRangeCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.AdjustScaleRangeCallback$impl');
let DrawTimeCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.DrawTimeCallback$impl');
let DrawTime = goog.forwardDeclare('org.pepstock.charba.client.annotation.enums.DrawTime$impl');
let ClickCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.listeners.ClickCallback$impl');
let DoubleClickCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.listeners.DoubleClickCallback$impl');
let EnterCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.listeners.EnterCallback$impl');
let LeaveCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.listeners.LeaveCallback$impl');
let BorderDashCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderDashCallback$impl');
let BorderDashOffsetCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderDashOffsetCallback$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let DisplayCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DisplayCallback$impl');
let WidthCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.WidthCallback$impl');

/**
 * @interface
 */
class IsDefaultsAnnotation {
 /** @abstract @return {AnnotationType} */
 m_getType__() {}
 /** @abstract @return {boolean} */
 m_isDisplay__() {}
 /** @abstract @return {boolean} */
 m_isAdjustScaleRange__() {}
 /** @abstract @return {DrawTime} */
 m_getDrawTime__() {}
 /** @abstract @return {?string} */
 m_getBorderColorAsString__() {}
 /** @abstract @return {number} */
 m_getBorderWidth__() {}
 /** @abstract @return {List<Integer>} */
 m_getBorderDash__() {}
 /** @abstract @return {number} */
 m_getBorderDashOffset__() {}
 /** @abstract @return {EnterCallback} */
 m_getEnterCallback__() {}
 /** @abstract @return {LeaveCallback} */
 m_getLeaveCallback__() {}
 /** @abstract @return {ClickCallback} */
 m_getClickCallback__() {}
 /** @abstract @return {DoubleClickCallback} */
 m_getDoubleClickCallback__() {}
 /** @abstract @return {DrawTimeCallback} */
 m_getDrawTimeCallback__() {}
 /** @abstract @return {DisplayCallback<AnnotationContext>} */
 m_getDisplayCallback__() {}
 /** @abstract @return {ColorCallback<AnnotationContext>} */
 m_getBorderColorCallback__() {}
 /** @abstract @return {WidthCallback<AnnotationContext>} */
 m_getBorderWidthCallback__() {}
 /** @abstract @return {BorderDashCallback<AnnotationContext>} */
 m_getBorderDashCallback__() {}
 /** @abstract @return {BorderDashOffsetCallback<AnnotationContext>} */
 m_getBorderDashOffsetCallback__() {}
 /** @abstract @return {AdjustScaleRangeCallback} */
 m_getAdjustScaleRangeCallback__() {}
 /** @return {boolean} */
 static m_isDisplay__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** !IsDefaultsAnnotation */ $thisArg) {
  IsDefaultsAnnotation.$clinit();
  return AbstractAnnotation.f_DEFAULT_DISPLAY__org_pepstock_charba_client_annotation_AbstractAnnotation;
 }
 /** @return {boolean} */
 static m_isAdjustScaleRange__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** !IsDefaultsAnnotation */ $thisArg) {
  IsDefaultsAnnotation.$clinit();
  return AbstractAnnotation.f_DEFAULT_ADJUST_SCALE_RANGE__org_pepstock_charba_client_annotation_AbstractAnnotation;
 }
 /** @return {DrawTime} */
 static m_getDrawTime__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** !IsDefaultsAnnotation */ $thisArg) {
  IsDefaultsAnnotation.$clinit();
  return AnnotationOptions.f_DEFAULT_DRAW_TIME__org_pepstock_charba_client_annotation_AnnotationOptions;
 }
 /** @return {?string} */
 static m_getBorderColorAsString__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** !IsDefaultsAnnotation */ $thisArg) {
  IsDefaultsAnnotation.$clinit();
  return Defaults.m_get__().m_getGlobal__().m_getBorderColorAsString__();
 }
 /** @return {List<Integer>} */
 static m_getBorderDash__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** !IsDefaultsAnnotation */ $thisArg) {
  IsDefaultsAnnotation.$clinit();
  return /**@type {List<Integer>}*/ (Collections.m_emptyList__());
 }
 /** @return {number} */
 static m_getBorderDashOffset__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** !IsDefaultsAnnotation */ $thisArg) {
  IsDefaultsAnnotation.$clinit();
  return Defaults.m_get__().m_getGlobal__().m_getElements__().m_getLine__().m_getBorderDashOffset__();
 }
 /** @return {EnterCallback} */
 static m_getEnterCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** !IsDefaultsAnnotation */ $thisArg) {
  IsDefaultsAnnotation.$clinit();
  return null;
 }
 /** @return {LeaveCallback} */
 static m_getLeaveCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** !IsDefaultsAnnotation */ $thisArg) {
  IsDefaultsAnnotation.$clinit();
  return null;
 }
 /** @return {ClickCallback} */
 static m_getClickCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** !IsDefaultsAnnotation */ $thisArg) {
  IsDefaultsAnnotation.$clinit();
  return null;
 }
 /** @return {DoubleClickCallback} */
 static m_getDoubleClickCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** !IsDefaultsAnnotation */ $thisArg) {
  IsDefaultsAnnotation.$clinit();
  return null;
 }
 /** @return {DrawTimeCallback} */
 static m_getDrawTimeCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** !IsDefaultsAnnotation */ $thisArg) {
  IsDefaultsAnnotation.$clinit();
  return null;
 }
 /** @return {DisplayCallback<AnnotationContext>} */
 static m_getDisplayCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** !IsDefaultsAnnotation */ $thisArg) {
  IsDefaultsAnnotation.$clinit();
  return null;
 }
 /** @return {ColorCallback<AnnotationContext>} */
 static m_getBorderColorCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** !IsDefaultsAnnotation */ $thisArg) {
  IsDefaultsAnnotation.$clinit();
  return null;
 }
 /** @return {WidthCallback<AnnotationContext>} */
 static m_getBorderWidthCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** !IsDefaultsAnnotation */ $thisArg) {
  IsDefaultsAnnotation.$clinit();
  return null;
 }
 /** @return {BorderDashCallback<AnnotationContext>} */
 static m_getBorderDashCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** !IsDefaultsAnnotation */ $thisArg) {
  IsDefaultsAnnotation.$clinit();
  return null;
 }
 /** @return {BorderDashOffsetCallback<AnnotationContext>} */
 static m_getBorderDashOffsetCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** !IsDefaultsAnnotation */ $thisArg) {
  IsDefaultsAnnotation.$clinit();
  return null;
 }
 /** @return {AdjustScaleRangeCallback} */
 static m_getAdjustScaleRangeCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** !IsDefaultsAnnotation */ $thisArg) {
  IsDefaultsAnnotation.$clinit();
  return null;
 }
 
 static $clinit() {
  IsDefaultsAnnotation.$clinit = () =>{};
  IsDefaultsAnnotation.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_IsDefaultsAnnotation = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_IsDefaultsAnnotation;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  AbstractAnnotation = goog.module.get('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
  AnnotationOptions = goog.module.get('org.pepstock.charba.client.annotation.AnnotationOptions$impl');
 }
}
IsDefaultsAnnotation.$markImplementor(/**@type {Function}*/ (IsDefaultsAnnotation));
$Util.$setClassMetadataForInterface(IsDefaultsAnnotation, "org.pepstock.charba.client.annotation.IsDefaultsAnnotation");

exports = IsDefaultsAnnotation;

//# sourceMappingURL=IsDefaultsAnnotation.js.map
