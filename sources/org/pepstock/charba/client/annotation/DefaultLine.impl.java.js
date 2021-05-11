goog.module('org.pepstock.charba.client.annotation.DefaultLine$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultsLineAnnotation = goog.require('org.pepstock.charba.client.annotation.IsDefaultsLineAnnotation$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let AnnotationType = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationType$impl');
let DefaultLineLabel = goog.forwardDeclare('org.pepstock.charba.client.annotation.DefaultLineLabel$impl');
let IsDefaultsAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsDefaultsAnnotation$impl');
let IsDefaultsLineLabel = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsDefaultsLineLabel$impl');
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
 * @implements {IsDefaultsLineAnnotation}
 */
class DefaultLine extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultLine} */
 static $create__() {
  let $instance = new DefaultLine();
  $instance.$ctor__org_pepstock_charba_client_annotation_DefaultLine__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_annotation_DefaultLine__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {AnnotationType} */
 m_getType__() {
  return AnnotationType.f_LINE__org_pepstock_charba_client_annotation_AnnotationType;
 }
 /** @override @return {IsDefaultsLineLabel} */
 m_getLabel__() {
  return DefaultLineLabel.f_INSTANCE__org_pepstock_charba_client_annotation_DefaultLineLabel;
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
  return IsDefaultsLineAnnotation.m_getBorderWidth__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(this);
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
  return IsDefaultsLineAnnotation.m_getXScaleID__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(this);
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
  return IsDefaultsLineAnnotation.m_getYScaleID__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {Date} */
 m_getEndValueAsDate__() {
  return IsDefaultsLineAnnotation.m_getEndValueAsDate__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getEndValueAsDouble__() {
  return IsDefaultsLineAnnotation.m_getEndValueAsDouble__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getEndValueAsString__() {
  return IsDefaultsLineAnnotation.m_getEndValueAsString__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {ValueCallback} */
 m_getEndValueCallback__() {
  return IsDefaultsLineAnnotation.m_getEndValueCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsScaleId} */
 m_getScaleID__() {
  return IsDefaultsLineAnnotation.m_getScaleID__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {Date} */
 m_getValueAsDate__() {
  return IsDefaultsLineAnnotation.m_getValueAsDate__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getValueAsDouble__() {
  return IsDefaultsLineAnnotation.m_getValueAsDouble__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getValueAsString__() {
  return IsDefaultsLineAnnotation.m_getValueAsString__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {ValueCallback} */
 m_getValueCallback__() {
  return IsDefaultsLineAnnotation.m_getValueCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineAnnotation(this);
 }
 /** @return {DefaultLine} */
 static get f_INSTANCE__org_pepstock_charba_client_annotation_DefaultLine() {
  return (DefaultLine.$clinit(), DefaultLine.$static_INSTANCE__org_pepstock_charba_client_annotation_DefaultLine);
 }
 
 static $clinit() {
  DefaultLine.$clinit = () =>{};
  DefaultLine.$loadModules();
  j_l_Object.$clinit();
  IsDefaultsLineAnnotation.$clinit();
  DefaultLine.$static_INSTANCE__org_pepstock_charba_client_annotation_DefaultLine = DefaultLine.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultLine;
 }
 
 static $loadModules() {
  AnnotationType = goog.module.get('org.pepstock.charba.client.annotation.AnnotationType$impl');
  DefaultLineLabel = goog.module.get('org.pepstock.charba.client.annotation.DefaultLineLabel$impl');
  IsDefaultsAnnotation = goog.module.get('org.pepstock.charba.client.annotation.IsDefaultsAnnotation$impl');
  IsDefaultsXYAnnotation = goog.module.get('org.pepstock.charba.client.annotation.IsDefaultsXYAnnotation$impl');
 }
}
/**@private {DefaultLine}*/
DefaultLine.$static_INSTANCE__org_pepstock_charba_client_annotation_DefaultLine;
IsDefaultsLineAnnotation.$markImplementor(DefaultLine);
$Util.$setClassMetadata(DefaultLine, "org.pepstock.charba.client.annotation.DefaultLine");

exports = DefaultLine;

//# sourceMappingURL=DefaultLine.js.map
