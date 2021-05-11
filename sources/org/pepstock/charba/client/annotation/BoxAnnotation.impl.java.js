goog.module('org.pepstock.charba.client.annotation.BoxAnnotation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractXYAnnotation = goog.require('org.pepstock.charba.client.annotation.AbstractXYAnnotation$impl');
const HasBackgroundColor = goog.require('org.pepstock.charba.client.annotation.HasBackgroundColor$impl');
const IsDefaultsBoxAnnotation = goog.require('org.pepstock.charba.client.annotation.IsDefaultsBoxAnnotation$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation.Property$impl');
let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let AnnotationHelper = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationHelper$impl');
let AnnotationPlugin = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
let AnnotationType = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationType$impl');
let BackgroundColorHandler = goog.forwardDeclare('org.pepstock.charba.client.annotation.BackgroundColorHandler$impl');
let BoxAnnotation_Property = goog.forwardDeclare('org.pepstock.charba.client.annotation.BoxAnnotation.Property$impl');
let IsAnnotationId = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsAnnotationId$impl');
let IsDefaultsAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsDefaultsAnnotation$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let CornerRadiusCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CornerRadiusCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let CallbackPropertyHandler = goog.forwardDeclare('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDefaultsBoxAnnotation}
 * @implements {HasBackgroundColor}
 */
class BoxAnnotation extends AbstractXYAnnotation {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/
  this.f_cornerRadiusCallbackProxy__org_pepstock_charba_client_annotation_BoxAnnotation_;
  /**@type {IsDefaultsBoxAnnotation}*/
  this.f_defaultValues__org_pepstock_charba_client_annotation_BoxAnnotation_;
  /**@type {BackgroundColorHandler}*/
  this.f_backgroundColorHandler__org_pepstock_charba_client_annotation_BoxAnnotation_;
 }
 //Factory method corresponding to constructor 'BoxAnnotation()'.
 /** @return {!BoxAnnotation} */
 static $create__() {
  BoxAnnotation.$clinit();
  let $instance = new BoxAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_BoxAnnotation__();
  return $instance;
 }
 //Initialization from constructor 'BoxAnnotation()'.
 
 $ctor__org_pepstock_charba_client_annotation_BoxAnnotation__() {
  this.$ctor__org_pepstock_charba_client_annotation_BoxAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(AnnotationType.f_BOX__org_pepstock_charba_client_annotation_AnnotationType.m_createId__(), AnnotationType.f_BOX__org_pepstock_charba_client_annotation_AnnotationType.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation());
 }
 //Factory method corresponding to constructor 'BoxAnnotation(String)'.
 /** @return {!BoxAnnotation} */
 static $create__java_lang_String(/** ?string */ id) {
  BoxAnnotation.$clinit();
  let $instance = new BoxAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_BoxAnnotation__java_lang_String(id);
  return $instance;
 }
 //Initialization from constructor 'BoxAnnotation(String)'.
 
 $ctor__org_pepstock_charba_client_annotation_BoxAnnotation__java_lang_String(/** ?string */ id) {
  this.$ctor__org_pepstock_charba_client_annotation_BoxAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId(IsAnnotationId.m_create__java_lang_String(id));
 }
 //Factory method corresponding to constructor 'BoxAnnotation(IsAnnotationId)'.
 /** @return {!BoxAnnotation} */
 static $create__org_pepstock_charba_client_annotation_IsAnnotationId(/** IsAnnotationId */ id) {
  BoxAnnotation.$clinit();
  let $instance = new BoxAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_BoxAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId(id);
  return $instance;
 }
 //Initialization from constructor 'BoxAnnotation(IsAnnotationId)'.
 
 $ctor__org_pepstock_charba_client_annotation_BoxAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId(/** IsAnnotationId */ id) {
  this.$ctor__org_pepstock_charba_client_annotation_BoxAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(id, AnnotationHelper.m_get__().m_getDefaultsAnnotationOptionsByGlobal__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_annotation_IsAnnotationId_$pp_org_pepstock_charba_client_annotation(AnnotationType.f_BOX__org_pepstock_charba_client_annotation_AnnotationType, id));
 }
 //Factory method corresponding to constructor 'BoxAnnotation(String, IsChart)'.
 /** @return {!BoxAnnotation} */
 static $create__java_lang_String__org_pepstock_charba_client_IsChart(/** ?string */ id, /** IsChart */ chart) {
  BoxAnnotation.$clinit();
  let $instance = new BoxAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_BoxAnnotation__java_lang_String__org_pepstock_charba_client_IsChart(id, chart);
  return $instance;
 }
 //Initialization from constructor 'BoxAnnotation(String, IsChart)'.
 
 $ctor__org_pepstock_charba_client_annotation_BoxAnnotation__java_lang_String__org_pepstock_charba_client_IsChart(/** ?string */ id, /** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_annotation_BoxAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_IsChart(IsAnnotationId.m_create__java_lang_String(id), chart);
 }
 //Factory method corresponding to constructor 'BoxAnnotation(IsAnnotationId, IsChart)'.
 /** @return {!BoxAnnotation} */
 static $create__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_IsChart(/** IsAnnotationId */ id, /** IsChart */ chart) {
  BoxAnnotation.$clinit();
  let $instance = new BoxAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_BoxAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_IsChart(id, chart);
  return $instance;
 }
 //Initialization from constructor 'BoxAnnotation(IsAnnotationId, IsChart)'.
 
 $ctor__org_pepstock_charba_client_annotation_BoxAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_IsChart(/** IsAnnotationId */ id, /** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_annotation_BoxAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(id, AnnotationHelper.m_get__().m_getDefaultsAnnotationOptionsByChart__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_annotation(AnnotationType.f_BOX__org_pepstock_charba_client_annotation_AnnotationType, id, chart));
 }
 //Factory method corresponding to constructor 'BoxAnnotation(IsAnnotationId, IsDefaultsAnnotation)'.
 /** @return {!BoxAnnotation} */
 static $create__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** IsAnnotationId */ id, /** IsDefaultsAnnotation */ defaultValues) {
  let $instance = new BoxAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_BoxAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(id, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'BoxAnnotation(IsAnnotationId, IsDefaultsAnnotation)'.
 
 $ctor__org_pepstock_charba_client_annotation_BoxAnnotation__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** IsAnnotationId */ id, /** IsDefaultsAnnotation */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_annotation_AbstractXYAnnotation__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_annotation_IsAnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(AnnotationType.f_BOX__org_pepstock_charba_client_annotation_AnnotationType, id, defaultValues);
  this.$init___$p_org_pepstock_charba_client_annotation_BoxAnnotation();
  Checker.m_assertCheck__boolean__java_lang_String(IsDefaultsBoxAnnotation.$isInstance(this.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation()), Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(AbstractAnnotation.f_INVALID_DEFAULTS_VALUES_CLASS__org_pepstock_charba_client_annotation_AbstractAnnotation, [AnnotationType.f_BOX__org_pepstock_charba_client_annotation_AnnotationType.m_value__()]));
  this.f_defaultValues__org_pepstock_charba_client_annotation_BoxAnnotation_ = /**@type {IsDefaultsBoxAnnotation}*/ ($Casts.$to(this.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation(), IsDefaultsBoxAnnotation));
  this.f_backgroundColorHandler__org_pepstock_charba_client_annotation_BoxAnnotation_ = BackgroundColorHandler.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_annotation_IsDefaultsBackgroundColorHandler__org_pepstock_charba_client_commons_NativeObject(this, this.f_defaultValues__org_pepstock_charba_client_annotation_BoxAnnotation_, this.m_getNativeObject__());
  this.m_initCallbacks___$p_org_pepstock_charba_client_annotation_BoxAnnotation();
 }
 //Factory method corresponding to constructor 'BoxAnnotation(NativeObject, IsDefaultsAnnotation)'.
 /** @return {!BoxAnnotation} */
 static $create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** ? */ nativeObject, /** IsDefaultsAnnotation */ defaultValues) {
  BoxAnnotation.$clinit();
  let $instance = new BoxAnnotation();
  $instance.$ctor__org_pepstock_charba_client_annotation_BoxAnnotation__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(nativeObject, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'BoxAnnotation(NativeObject, IsDefaultsAnnotation)'.
 
 $ctor__org_pepstock_charba_client_annotation_BoxAnnotation__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** ? */ nativeObject, /** IsDefaultsAnnotation */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_annotation_AbstractXYAnnotation__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(AnnotationType.f_BOX__org_pepstock_charba_client_annotation_AnnotationType, nativeObject, defaultValues);
  this.$init___$p_org_pepstock_charba_client_annotation_BoxAnnotation();
  Checker.m_assertCheck__boolean__java_lang_String(IsDefaultsBoxAnnotation.$isInstance(this.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation()), Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(AbstractAnnotation.f_INVALID_DEFAULTS_VALUES_CLASS__org_pepstock_charba_client_annotation_AbstractAnnotation, [AnnotationType.f_BOX__org_pepstock_charba_client_annotation_AnnotationType.m_value__()]));
  this.f_defaultValues__org_pepstock_charba_client_annotation_BoxAnnotation_ = /**@type {IsDefaultsBoxAnnotation}*/ ($Casts.$to(this.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation(), IsDefaultsBoxAnnotation));
  this.f_backgroundColorHandler__org_pepstock_charba_client_annotation_BoxAnnotation_ = BackgroundColorHandler.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_annotation_IsDefaultsBackgroundColorHandler__org_pepstock_charba_client_commons_NativeObject(this, this.f_defaultValues__org_pepstock_charba_client_annotation_BoxAnnotation_, this.m_getNativeObject__());
  this.m_initCallbacks___$p_org_pepstock_charba_client_annotation_BoxAnnotation();
 }
 
 m_initCallbacks___$p_org_pepstock_charba_client_annotation_BoxAnnotation() {
  this.f_cornerRadiusCallbackProxy__org_pepstock_charba_client_annotation_BoxAnnotation_.callback = (/** Object */ contextFunction, /** ? */ context) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this, context), this.m_getCornerRadiusCallback__(), Integer.m_valueOf__int(this.f_defaultValues__org_pepstock_charba_client_annotation_BoxAnnotation_.m_getCornerRadius__())), Integer)).m_intValue__();
  };
 }
 /** @override @return {BackgroundColorHandler} */
 m_getBackgroundColorHandler__() {
  return this.f_backgroundColorHandler__org_pepstock_charba_client_annotation_BoxAnnotation_;
 }
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BORDER_COLOR__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_BoxAnnotation_.m_getBorderColorAsString__());
 }
 /** @override @return {number} */
 m_getBorderWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_WIDTH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_BoxAnnotation_.m_getBorderWidth__());
 }
 
 m_setCornerRadius__int(/** number */ corner) {
  this.m_setCornerRadius__org_pepstock_charba_client_callbacks_CornerRadiusCallback(null);
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(BoxAnnotation_Property.f_CORNER_RADIUS__org_pepstock_charba_client_annotation_BoxAnnotation_Property, Checker.m_positiveOrZero__int(corner));
 }
 /** @override @return {number} */
 m_getCornerRadius__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(BoxAnnotation_Property.f_CORNER_RADIUS__org_pepstock_charba_client_annotation_BoxAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_BoxAnnotation_.m_getCornerRadius__());
 }
 /** @override @return {CornerRadiusCallback<AnnotationContext>} */
 m_getCornerRadiusCallback__() {
  return /**@type {CornerRadiusCallback<AnnotationContext>}*/ ($Casts.$to(BoxAnnotation.f_CORNER_RADIUS_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_BoxAnnotation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_BoxAnnotation_.m_getCornerRadiusCallback__()), CornerRadiusCallback));
 }
 
 m_setCornerRadius__org_pepstock_charba_client_callbacks_CornerRadiusCallback(/** CornerRadiusCallback<AnnotationContext> */ cornerRadiusCallback) {
  BoxAnnotation.f_CORNER_RADIUS_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_BoxAnnotation_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, cornerRadiusCallback, this.f_cornerRadiusCallbackProxy__org_pepstock_charba_client_annotation_BoxAnnotation_.proxy);
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
 /** @private */
 $init___$p_org_pepstock_charba_client_annotation_BoxAnnotation() {
  this.f_cornerRadiusCallbackProxy__org_pepstock_charba_client_annotation_BoxAnnotation_ = /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
 }
 
 static $clinit() {
  BoxAnnotation.$clinit = () =>{};
  BoxAnnotation.$loadModules();
  AbstractXYAnnotation.$clinit();
  IsDefaultsBoxAnnotation.$clinit();
  HasBackgroundColor.$clinit();
  BoxAnnotation.f_CORNER_RADIUS_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_BoxAnnotation_ = /**@type {!CallbackPropertyHandler<CornerRadiusCallback<AnnotationContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(BoxAnnotation_Property.f_CORNER_RADIUS__org_pepstock_charba_client_annotation_BoxAnnotation_Property));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BoxAnnotation;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  AbstractAnnotation = goog.module.get('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
  Property = goog.module.get('org.pepstock.charba.client.annotation.AbstractAnnotation.Property$impl');
  AnnotationContext = goog.module.get('org.pepstock.charba.client.annotation.AnnotationContext$impl');
  AnnotationHelper = goog.module.get('org.pepstock.charba.client.annotation.AnnotationHelper$impl');
  AnnotationPlugin = goog.module.get('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
  AnnotationType = goog.module.get('org.pepstock.charba.client.annotation.AnnotationType$impl');
  BackgroundColorHandler = goog.module.get('org.pepstock.charba.client.annotation.BackgroundColorHandler$impl');
  BoxAnnotation_Property = goog.module.get('org.pepstock.charba.client.annotation.BoxAnnotation.Property$impl');
  IsAnnotationId = goog.module.get('org.pepstock.charba.client.annotation.IsAnnotationId$impl');
  CornerRadiusCallback = goog.module.get('org.pepstock.charba.client.callbacks.CornerRadiusCallback$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  CallbackPropertyHandler = goog.module.get('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number}*/
BoxAnnotation.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_annotation_BoxAnnotation = 1;
/**@const {number}*/
BoxAnnotation.f_DEFAULT_CORNER_RADIUS__org_pepstock_charba_client_annotation_BoxAnnotation = 0;
/**@type {CallbackPropertyHandler<CornerRadiusCallback<AnnotationContext>>}*/
BoxAnnotation.f_CORNER_RADIUS_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_BoxAnnotation_;
IsDefaultsBoxAnnotation.$markImplementor(BoxAnnotation);
HasBackgroundColor.$markImplementor(BoxAnnotation);
$Util.$setClassMetadata(BoxAnnotation, "org.pepstock.charba.client.annotation.BoxAnnotation");

exports = BoxAnnotation;

//# sourceMappingURL=BoxAnnotation.js.map
