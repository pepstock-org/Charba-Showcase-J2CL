goog.module('org.pepstock.charba.client.annotation.IsDefaultsEllipseAnnotation.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultsEllipseAnnotation = goog.require('org.pepstock.charba.client.annotation.IsDefaultsEllipseAnnotation$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let AnnotationType = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationType$impl');
let IsDefaultsAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsDefaultsAnnotation$impl');
let IsDefaultsBackgroundColorHandler = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsDefaultsBackgroundColorHandler$impl');
let IsDefaultsXYAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsDefaultsXYAnnotation$impl');
let AdjustScaleRangeCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.AdjustScaleRangeCallback$impl');
let DrawTimeCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.DrawTimeCallback$impl');
let ValueCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.ValueCallback$impl');
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
let IsScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.IsScaleId$impl');

/**
 * @implements {IsDefaultsEllipseAnnotation}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():AnnotationType */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():AnnotationType}*/
  this.f_fn__org_pepstock_charba_client_annotation_IsDefaultsEllipseAnnotation_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_annotation_IsDefaultsEllipseAnnotation_$LambdaAdaptor__org_pepstock_charba_client_annotation_IsDefaultsEllipseAnnotation_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_annotation_IsDefaultsEllipseAnnotation_$LambdaAdaptor__org_pepstock_charba_client_annotation_IsDefaultsEllipseAnnotation_$JsFunction(/** ?function():AnnotationType */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_annotation_IsDefaultsEllipseAnnotation_$LambdaAdaptor = fn;
 }
 /** @override @return {AnnotationType} */
 m_getType__() {
  let /** ?function():AnnotationType */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_annotation_IsDefaultsEllipseAnnotation_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {AdjustScaleRangeCallback} */
 m_getAdjustScaleRangeCallback__() {
  return IsDefaultsAnnotation.m_getAdjustScaleRangeCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return IsDefaultsAnnotation.m_getBorderColorAsString__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {ColorCallback<AnnotationContext>} */
 m_getBorderColorCallback__() {
  return IsDefaultsAnnotation.m_getBorderColorCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {List<Integer>} */
 m_getBorderDash__() {
  return IsDefaultsAnnotation.m_getBorderDash__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {BorderDashCallback<AnnotationContext>} */
 m_getBorderDashCallback__() {
  return IsDefaultsAnnotation.m_getBorderDashCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBorderDashOffset__() {
  return IsDefaultsAnnotation.m_getBorderDashOffset__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {BorderDashOffsetCallback<AnnotationContext>} */
 m_getBorderDashOffsetCallback__() {
  return IsDefaultsAnnotation.m_getBorderDashOffsetCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBorderWidth__() {
  return IsDefaultsEllipseAnnotation.m_getBorderWidth__$default__org_pepstock_charba_client_annotation_IsDefaultsEllipseAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {WidthCallback<AnnotationContext>} */
 m_getBorderWidthCallback__() {
  return IsDefaultsAnnotation.m_getBorderWidthCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {ClickCallback} */
 m_getClickCallback__() {
  return IsDefaultsAnnotation.m_getClickCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {DisplayCallback<AnnotationContext>} */
 m_getDisplayCallback__() {
  return IsDefaultsAnnotation.m_getDisplayCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {DoubleClickCallback} */
 m_getDoubleClickCallback__() {
  return IsDefaultsAnnotation.m_getDoubleClickCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {DrawTime} */
 m_getDrawTime__() {
  return IsDefaultsAnnotation.m_getDrawTime__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {DrawTimeCallback} */
 m_getDrawTimeCallback__() {
  return IsDefaultsAnnotation.m_getDrawTimeCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {EnterCallback} */
 m_getEnterCallback__() {
  return IsDefaultsAnnotation.m_getEnterCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {LeaveCallback} */
 m_getLeaveCallback__() {
  return IsDefaultsAnnotation.m_getLeaveCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isAdjustScaleRange__() {
  return IsDefaultsAnnotation.m_isAdjustScaleRange__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isDisplay__() {
  return IsDefaultsAnnotation.m_isDisplay__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {Date} */
 m_getXMaxAsDate__() {
  return IsDefaultsXYAnnotation.m_getXMaxAsDate__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getXMaxAsDouble__() {
  return IsDefaultsXYAnnotation.m_getXMaxAsDouble__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getXMaxAsString__() {
  return IsDefaultsXYAnnotation.m_getXMaxAsString__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {ValueCallback} */
 m_getXMaxCallback__() {
  return IsDefaultsXYAnnotation.m_getXMaxCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {Date} */
 m_getXMinAsDate__() {
  return IsDefaultsXYAnnotation.m_getXMinAsDate__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getXMinAsDouble__() {
  return IsDefaultsXYAnnotation.m_getXMinAsDouble__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getXMinAsString__() {
  return IsDefaultsXYAnnotation.m_getXMinAsString__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {ValueCallback} */
 m_getXMinCallback__() {
  return IsDefaultsXYAnnotation.m_getXMinCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsScaleId} */
 m_getXScaleID__() {
  return IsDefaultsXYAnnotation.m_getXScaleID__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {Date} */
 m_getYMaxAsDate__() {
  return IsDefaultsXYAnnotation.m_getYMaxAsDate__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getYMaxAsDouble__() {
  return IsDefaultsXYAnnotation.m_getYMaxAsDouble__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getYMaxAsString__() {
  return IsDefaultsXYAnnotation.m_getYMaxAsString__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {ValueCallback} */
 m_getYMaxCallback__() {
  return IsDefaultsXYAnnotation.m_getYMaxCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {Date} */
 m_getYMinAsDate__() {
  return IsDefaultsXYAnnotation.m_getYMinAsDate__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getYMinAsDouble__() {
  return IsDefaultsXYAnnotation.m_getYMinAsDouble__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getYMinAsString__() {
  return IsDefaultsXYAnnotation.m_getYMinAsString__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {ValueCallback} */
 m_getYMinCallback__() {
  return IsDefaultsXYAnnotation.m_getYMinCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsScaleId} */
 m_getYScaleID__() {
  return IsDefaultsXYAnnotation.m_getYScaleID__$default__org_pepstock_charba_client_annotation_IsDefaultsXYAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {ColorCallback<AnnotationContext>} */
 m_getBackgroundColorCallback__() {
  return IsDefaultsBackgroundColorHandler.m_getBackgroundColorCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsBackgroundColorHandler(this);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  IsDefaultsEllipseAnnotation.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {
  IsDefaultsAnnotation = goog.module.get('org.pepstock.charba.client.annotation.IsDefaultsAnnotation$impl');
  IsDefaultsBackgroundColorHandler = goog.module.get('org.pepstock.charba.client.annotation.IsDefaultsBackgroundColorHandler$impl');
  IsDefaultsXYAnnotation = goog.module.get('org.pepstock.charba.client.annotation.IsDefaultsXYAnnotation$impl');
 }
}
IsDefaultsEllipseAnnotation.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.annotation.IsDefaultsEllipseAnnotation$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=IsDefaultsEllipseAnnotation$$LambdaAdaptor.js.map
