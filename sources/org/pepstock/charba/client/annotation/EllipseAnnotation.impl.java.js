goog.module('org.pepstock.charba.client.annotation.EllipseAnnotation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractXYAnnotation = goog.require('org.pepstock.charba.client.annotation.AbstractXYAnnotation$impl');
const HasBackgroundColor = goog.require('org.pepstock.charba.client.annotation.HasBackgroundColor$impl');
const IsDefaultsEllipseAnnotation = goog.require('org.pepstock.charba.client.annotation.IsDefaultsEllipseAnnotation$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let AnnotationHelper = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationHelper$impl');
let AnnotationType = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationType$impl');
let BackgroundColorHandler = goog.forwardDeclare('org.pepstock.charba.client.annotation.BackgroundColorHandler$impl');
let IsAnnotationId = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsAnnotationId$impl');
let IsDefaultsAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsDefaultsAnnotation$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDefaultsEllipseAnnotation}
 * @implements {HasBackgroundColor}
 */
class EllipseAnnotation extends AbstractXYAnnotation {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultsEllipseAnnotation}*/
  this.f_defaultValues__org_pepstock_charba_client_annotation_EllipseAnnotation_;
  /**@type {BackgroundColorHandler}*/
  this.f_backgroundColorHandler__org_pepstock_charba_client_annotation_EllipseAnnotation_;
 }
 //Factory method corresponding to constructor 'EllipseAnnotation()'.
 /** @return {!EllipseAnnotation} */
 static $create__() {
  EllipseAnnotation.$clinit();
  let $instance = new EllipseAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_EllipseAnnotation__();
  return $instance;
 }
 //Initialization from constructor 'EllipseAnnotation()'.
 
 $ctor__org_pepstock_charba_client_annotation_EllipseAnnotation__() {
  this.$ctor__org_pepstock_charba_client_annotation_EllipseAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(AnnotationType.f_ELLIPSE__org_pepstock_charba_client_annotation_AnnotationType.m_createId__(), AnnotationType.f_ELLIPSE__org_pepstock_charba_client_annotation_AnnotationType.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation());
 }
 //Factory method corresponding to constructor 'EllipseAnnotation(String)'.
 /** @return {!EllipseAnnotation} */
 static $create__java_lang_String(/** ?string */ id) {
  EllipseAnnotation.$clinit();
  let $instance = new EllipseAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_EllipseAnnotation__java_lang_String(id);
  return $instance;
 }
 //Initialization from constructor 'EllipseAnnotation(String)'.
 
 $ctor__org_pepstock_charba_client_annotation_EllipseAnnotation__java_lang_String(/** ?string */ id) {
  this.$ctor__org_pepstock_charba_client_annotation_EllipseAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId(IsAnnotationId.m_create__java_lang_String(id));
 }
 //Factory method corresponding to constructor 'EllipseAnnotation(IsAnnotationId)'.
 /** @return {!EllipseAnnotation} */
 static $create__org_pepstock_charba_client_annotation_IsAnnotationId(/** IsAnnotationId */ id) {
  EllipseAnnotation.$clinit();
  let $instance = new EllipseAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_EllipseAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId(id);
  return $instance;
 }
 //Initialization from constructor 'EllipseAnnotation(IsAnnotationId)'.
 
 $ctor__org_pepstock_charba_client_annotation_EllipseAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId(/** IsAnnotationId */ id) {
  this.$ctor__org_pepstock_charba_client_annotation_EllipseAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(id, AnnotationHelper.m_get__().m_getDefaultsAnnotationOptionsByGlobal__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_annotation_IsAnnotationId_$pp_org_pepstock_charba_client_annotation(AnnotationType.f_ELLIPSE__org_pepstock_charba_client_annotation_AnnotationType, id));
 }
 //Factory method corresponding to constructor 'EllipseAnnotation(String, IsChart)'.
 /** @return {!EllipseAnnotation} */
 static $create__java_lang_String__org_pepstock_charba_client_IsChart(/** ?string */ id, /** IsChart */ chart) {
  EllipseAnnotation.$clinit();
  let $instance = new EllipseAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_EllipseAnnotation__java_lang_String__org_pepstock_charba_client_IsChart(id, chart);
  return $instance;
 }
 //Initialization from constructor 'EllipseAnnotation(String, IsChart)'.
 
 $ctor__org_pepstock_charba_client_annotation_EllipseAnnotation__java_lang_String__org_pepstock_charba_client_IsChart(/** ?string */ id, /** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_annotation_EllipseAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_IsChart(IsAnnotationId.m_create__java_lang_String(id), chart);
 }
 //Factory method corresponding to constructor 'EllipseAnnotation(IsAnnotationId, IsChart)'.
 /** @return {!EllipseAnnotation} */
 static $create__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_IsChart(/** IsAnnotationId */ id, /** IsChart */ chart) {
  EllipseAnnotation.$clinit();
  let $instance = new EllipseAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_EllipseAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_IsChart(id, chart);
  return $instance;
 }
 //Initialization from constructor 'EllipseAnnotation(IsAnnotationId, IsChart)'.
 
 $ctor__org_pepstock_charba_client_annotation_EllipseAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_IsChart(/** IsAnnotationId */ id, /** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_annotation_EllipseAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(id, AnnotationHelper.m_get__().m_getDefaultsAnnotationOptionsByChart__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_annotation(AnnotationType.f_ELLIPSE__org_pepstock_charba_client_annotation_AnnotationType, id, chart));
 }
 //Factory method corresponding to constructor 'EllipseAnnotation(IsAnnotationId, IsDefaultsAnnotation)'.
 /** @return {!EllipseAnnotation} */
 static $create__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** IsAnnotationId */ id, /** IsDefaultsAnnotation */ defaultValues) {
  let $instance = new EllipseAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_EllipseAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(id, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'EllipseAnnotation(IsAnnotationId, IsDefaultsAnnotation)'.
 
 $ctor__org_pepstock_charba_client_annotation_EllipseAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** IsAnnotationId */ id, /** IsDefaultsAnnotation */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_annotation_AbstractXYAnnotation__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(AnnotationType.f_ELLIPSE__org_pepstock_charba_client_annotation_AnnotationType, id, defaultValues);
  Checker.m_assertCheck__boolean__java_lang_String(IsDefaultsEllipseAnnotation.$isInstance(this.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation()), Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(AbstractAnnotation.f_INVALID_DEFAULTS_VALUES_CLASS__org_pepstock_charba_client_annotation_AbstractAnnotation, [AnnotationType.f_ELLIPSE__org_pepstock_charba_client_annotation_AnnotationType.m_value__()]));
  this.f_defaultValues__org_pepstock_charba_client_annotation_EllipseAnnotation_ = /**@type {IsDefaultsEllipseAnnotation}*/ ($Casts.$to(this.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation(), IsDefaultsEllipseAnnotation));
  this.f_backgroundColorHandler__org_pepstock_charba_client_annotation_EllipseAnnotation_ = BackgroundColorHandler.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_annotation_IsDefaultsBackgroundColorHandler__org_pepstock_charba_client_commons_NativeObject(this, this.f_defaultValues__org_pepstock_charba_client_annotation_EllipseAnnotation_, this.m_getNativeObject__());
 }
 //Factory method corresponding to constructor 'EllipseAnnotation(NativeObject, IsDefaultsAnnotation)'.
 /** @return {!EllipseAnnotation} */
 static $create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** ? */ nativeObject, /** IsDefaultsAnnotation */ defaultValues) {
  EllipseAnnotation.$clinit();
  let $instance = new EllipseAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_EllipseAnnotation__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(nativeObject, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'EllipseAnnotation(NativeObject, IsDefaultsAnnotation)'.
 
 $ctor__org_pepstock_charba_client_annotation_EllipseAnnotation__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** ? */ nativeObject, /** IsDefaultsAnnotation */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_annotation_AbstractXYAnnotation__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(AnnotationType.f_ELLIPSE__org_pepstock_charba_client_annotation_AnnotationType, nativeObject, defaultValues);
  Checker.m_assertCheck__boolean__java_lang_String(IsDefaultsEllipseAnnotation.$isInstance(this.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation()), Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(AbstractAnnotation.f_INVALID_DEFAULTS_VALUES_CLASS__org_pepstock_charba_client_annotation_AbstractAnnotation, [AnnotationType.f_ELLIPSE__org_pepstock_charba_client_annotation_AnnotationType.m_value__()]));
  this.f_defaultValues__org_pepstock_charba_client_annotation_EllipseAnnotation_ = /**@type {IsDefaultsEllipseAnnotation}*/ ($Casts.$to(this.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation(), IsDefaultsEllipseAnnotation));
  this.f_backgroundColorHandler__org_pepstock_charba_client_annotation_EllipseAnnotation_ = BackgroundColorHandler.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_annotation_IsDefaultsBackgroundColorHandler__org_pepstock_charba_client_commons_NativeObject(this, this.f_defaultValues__org_pepstock_charba_client_annotation_EllipseAnnotation_, this.m_getNativeObject__());
 }
 /** @override @return {BackgroundColorHandler} */
 m_getBackgroundColorHandler__() {
  return this.f_backgroundColorHandler__org_pepstock_charba_client_annotation_EllipseAnnotation_;
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBorderWidth__() {
  return IsDefaultsEllipseAnnotation.m_getBorderWidth__$default__org_pepstock_charba_client_annotation_IsDefaultsEllipseAnnotation(this);
 }
 //Default method forwarding stub.
 /** @override @return {ColorCallback<AnnotationContext>} */
 m_getBackgroundColorCallback__() {
  return HasBackgroundColor.m_getBackgroundColorCallback__$default__org_pepstock_charba_client_annotation_HasBackgroundColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_getBackgroundColor__() {
  return HasBackgroundColor.m_getBackgroundColor__$default__org_pepstock_charba_client_annotation_HasBackgroundColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return HasBackgroundColor.m_getBackgroundColorAsString__$default__org_pepstock_charba_client_annotation_HasBackgroundColor(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ arg0) {
  HasBackgroundColor.m_setBackgroundColor__$default__org_pepstock_charba_client_annotation_HasBackgroundColor__org_pepstock_charba_client_colors_IsColor(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBackgroundColor__java_lang_String(/** ?string */ arg0) {
  HasBackgroundColor.m_setBackgroundColor__$default__org_pepstock_charba_client_annotation_HasBackgroundColor__java_lang_String(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<AnnotationContext> */ arg0) {
  HasBackgroundColor.m_setBackgroundColor__$default__org_pepstock_charba_client_annotation_HasBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(this, arg0);
 }
 
 static $clinit() {
  EllipseAnnotation.$clinit = () =>{};
  EllipseAnnotation.$loadModules();
  AbstractXYAnnotation.$clinit();
  IsDefaultsEllipseAnnotation.$clinit();
  HasBackgroundColor.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EllipseAnnotation;
 }
 
 static $loadModules() {
  AbstractAnnotation = goog.module.get('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
  AnnotationHelper = goog.module.get('org.pepstock.charba.client.annotation.AnnotationHelper$impl');
  AnnotationType = goog.module.get('org.pepstock.charba.client.annotation.AnnotationType$impl');
  BackgroundColorHandler = goog.module.get('org.pepstock.charba.client.annotation.BackgroundColorHandler$impl');
  IsAnnotationId = goog.module.get('org.pepstock.charba.client.annotation.IsAnnotationId$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number}*/
EllipseAnnotation.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_annotation_EllipseAnnotation = 1;
IsDefaultsEllipseAnnotation.$markImplementor(EllipseAnnotation);
HasBackgroundColor.$markImplementor(EllipseAnnotation);
$Util.$setClassMetadata(EllipseAnnotation, "org.pepstock.charba.client.annotation.EllipseAnnotation");

exports = EllipseAnnotation;

//# sourceMappingURL=EllipseAnnotation.js.map
