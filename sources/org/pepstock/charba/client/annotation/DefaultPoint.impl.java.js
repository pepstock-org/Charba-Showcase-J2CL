goog.module('org.pepstock.charba.client.annotation.DefaultPoint$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultsPointAnnotation = goog.require('org.pepstock.charba.client.annotation.IsDefaultsPointAnnotation$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let AnnotationType = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationType$impl');
let IsDefaultsAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsDefaultsAnnotation$impl');
let IsDefaultsBackgroundColorHandler = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsDefaultsBackgroundColorHandler$impl');
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
let RadiusCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.RadiusCallback$impl');
let WidthCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.WidthCallback$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');

/**
 * @implements {IsDefaultsPointAnnotation}
 */
class DefaultPoint extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultPoint} */
 static $create__() {
  let $instance = new DefaultPoint();
  $instance.$ctor__org_pepstock_charba_client_annotation_DefaultPoint__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_annotation_DefaultPoint__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {AnnotationType} */
 m_getType__() {
  return AnnotationType.f_POINT__org_pepstock_charba_client_annotation_AnnotationType;
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
  return IsDefaultsPointAnnotation.m_getBorderWidth__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(this);
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
 /** @override @return {ColorCallback<AnnotationContext>} */
 m_getBackgroundColorCallback__() {
  return IsDefaultsBackgroundColorHandler.m_getBackgroundColorCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsBackgroundColorHandler(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getRadius__() {
  return IsDefaultsPointAnnotation.m_getRadius__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {RadiusCallback<AnnotationContext>} */
 m_getRadiusCallback__() {
  return IsDefaultsPointAnnotation.m_getRadiusCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {ScaleId} */
 m_getXScaleID__() {
  return IsDefaultsPointAnnotation.m_getXScaleID__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {Date} */
 m_getXValueAsDate__() {
  return IsDefaultsPointAnnotation.m_getXValueAsDate__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getXValueAsDouble__() {
  return IsDefaultsPointAnnotation.m_getXValueAsDouble__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getXValueAsString__() {
  return IsDefaultsPointAnnotation.m_getXValueAsString__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {ValueCallback} */
 m_getXValueCallback__() {
  return IsDefaultsPointAnnotation.m_getXValueCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {ScaleId} */
 m_getYScaleID__() {
  return IsDefaultsPointAnnotation.m_getYScaleID__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {Date} */
 m_getYValueAsDate__() {
  return IsDefaultsPointAnnotation.m_getYValueAsDate__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getYValueAsDouble__() {
  return IsDefaultsPointAnnotation.m_getYValueAsDouble__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getYValueAsString__() {
  return IsDefaultsPointAnnotation.m_getYValueAsString__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {ValueCallback} */
 m_getYValueCallback__() {
  return IsDefaultsPointAnnotation.m_getYValueCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsPointAnnotation(this);
 }
 /** @return {DefaultPoint} */
 static get f_INSTANCE__org_pepstock_charba_client_annotation_DefaultPoint() {
  return (DefaultPoint.$clinit(), DefaultPoint.$static_INSTANCE__org_pepstock_charba_client_annotation_DefaultPoint);
 }
 
 static $clinit() {
  DefaultPoint.$clinit = () =>{};
  DefaultPoint.$loadModules();
  j_l_Object.$clinit();
  IsDefaultsPointAnnotation.$clinit();
  DefaultPoint.$static_INSTANCE__org_pepstock_charba_client_annotation_DefaultPoint = DefaultPoint.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultPoint;
 }
 
 static $loadModules() {
  AnnotationType = goog.module.get('org.pepstock.charba.client.annotation.AnnotationType$impl');
  IsDefaultsAnnotation = goog.module.get('org.pepstock.charba.client.annotation.IsDefaultsAnnotation$impl');
  IsDefaultsBackgroundColorHandler = goog.module.get('org.pepstock.charba.client.annotation.IsDefaultsBackgroundColorHandler$impl');
 }
}
/**@private {DefaultPoint}*/
DefaultPoint.$static_INSTANCE__org_pepstock_charba_client_annotation_DefaultPoint;
IsDefaultsPointAnnotation.$markImplementor(DefaultPoint);
$Util.$setClassMetadata(DefaultPoint, "org.pepstock.charba.client.annotation.DefaultPoint");

exports = DefaultPoint;

//# sourceMappingURL=DefaultPoint.js.map
