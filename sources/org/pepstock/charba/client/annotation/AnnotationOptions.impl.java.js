goog.module('org.pepstock.charba.client.annotation.AnnotationOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultsAnnotationOptions = goog.require('org.pepstock.charba.client.annotation.IsDefaultsAnnotationOptions$impl');
const AbstractPluginOptions = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptions$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
let AnnotationCachedMap = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationCachedMap$impl');
let AnnotationId = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationId$impl');
let AnnotationMap = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationMap$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationOptions.Property$impl');
let AnnotationPlugin = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
let DrawTime = goog.forwardDeclare('org.pepstock.charba.client.annotation.enums.DrawTime$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDefaultsAnnotationOptions}
 */
class AnnotationOptions extends AbstractPluginOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultsAnnotationOptions}*/
  this.f_defaultOptions__org_pepstock_charba_client_annotation_AnnotationOptions_;
  /**@type {AnnotationMap}*/
  this.f_annotationsMap__org_pepstock_charba_client_annotation_AnnotationOptions_;
 }
 //Factory method corresponding to constructor 'AnnotationOptions()'.
 /** @return {!AnnotationOptions} */
 static $create__() {
  AnnotationOptions.$clinit();
  let $instance = new AnnotationOptions();
  $instance.$ctor__org_pepstock_charba_client_annotation_AnnotationOptions__();
  return $instance;
 }
 //Initialization from constructor 'AnnotationOptions()'.
 
 $ctor__org_pepstock_charba_client_annotation_AnnotationOptions__() {
  this.$ctor__org_pepstock_charba_client_annotation_AnnotationOptions__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions__org_pepstock_charba_client_commons_NativeObject(null, null);
 }
 //Factory method corresponding to constructor 'AnnotationOptions(IsChart)'.
 /** @return {!AnnotationOptions} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  AnnotationOptions.$clinit();
  let $instance = new AnnotationOptions();
  $instance.$ctor__org_pepstock_charba_client_annotation_AnnotationOptions__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 //Initialization from constructor 'AnnotationOptions(IsChart)'.
 
 $ctor__org_pepstock_charba_client_annotation_AnnotationOptions__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_annotation_AnnotationOptions__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions__org_pepstock_charba_client_commons_NativeObject(IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) ? /**@type {AnnotationOptions}*/ ($Casts.$to(chart.m_getDefaultChartOptions__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, AnnotationPlugin.f_DEFAULTS_FACTORY__org_pepstock_charba_client_annotation_AnnotationPlugin), AnnotationOptions)) : null, null);
 }
 //Factory method corresponding to constructor 'AnnotationOptions(IsDefaultsAnnotationOptions)'.
 /** @return {!AnnotationOptions} */
 static $create__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions(/** IsDefaultsAnnotationOptions */ defaultOptions) {
  AnnotationOptions.$clinit();
  let $instance = new AnnotationOptions();
  $instance.$ctor__org_pepstock_charba_client_annotation_AnnotationOptions__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions(defaultOptions);
  return $instance;
 }
 //Initialization from constructor 'AnnotationOptions(IsDefaultsAnnotationOptions)'.
 
 $ctor__org_pepstock_charba_client_annotation_AnnotationOptions__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions(/** IsDefaultsAnnotationOptions */ defaultOptions) {
  this.$ctor__org_pepstock_charba_client_annotation_AnnotationOptions__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, null);
 }
 //Factory method corresponding to constructor 'AnnotationOptions(IsDefaultsAnnotationOptions, NativeObject)'.
 /** @return {!AnnotationOptions} */
 static $create__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultsAnnotationOptions */ defaultOptions, /** ? */ nativeObject) {
  AnnotationOptions.$clinit();
  let $instance = new AnnotationOptions();
  $instance.$ctor__org_pepstock_charba_client_annotation_AnnotationOptions__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'AnnotationOptions(IsDefaultsAnnotationOptions, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_annotation_AnnotationOptions__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultsAnnotationOptions */ defaultOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptions__java_lang_String__org_pepstock_charba_client_commons_NativeObject(AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, nativeObject);
  if ($Equality.$same(defaultOptions, null)) {
   this.f_defaultOptions__org_pepstock_charba_client_annotation_AnnotationOptions_ = /**@type {AnnotationOptions}*/ ($Casts.$to(this.m_loadGlobalsPluginOptions__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(AnnotationPlugin.f_DEFAULTS_FACTORY__org_pepstock_charba_client_annotation_AnnotationPlugin), AnnotationOptions));
  } else {
   this.f_defaultOptions__org_pepstock_charba_client_annotation_AnnotationOptions_ = defaultOptions;
  }
  if (this.m_has__org_pepstock_charba_client_commons_Key(Property.f_ANNOTATIONS__org_pepstock_charba_client_annotation_AnnotationOptions_Property)) {
   this.f_annotationsMap__org_pepstock_charba_client_annotation_AnnotationOptions_ = AnnotationMap.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_ANNOTATIONS__org_pepstock_charba_client_annotation_AnnotationOptions_Property));
  } else {
   this.f_annotationsMap__org_pepstock_charba_client_annotation_AnnotationOptions_ = AnnotationCachedMap.$create__();
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_ANNOTATIONS__org_pepstock_charba_client_annotation_AnnotationOptions_Property, this.f_annotationsMap__org_pepstock_charba_client_annotation_AnnotationOptions_);
  }
 }
 /** @override */
 m_applyingDefaults__() {
  AnnotationPlugin.m_get__().m_mergeDefaults__org_pepstock_charba_client_annotation_AnnotationOptions_$pp_org_pepstock_charba_client_annotation(this);
 }
 
 m_setDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime(/** DrawTime */ drawTime) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_DRAW_TIME__org_pepstock_charba_client_annotation_AnnotationOptions_Property, drawTime);
  this.f_annotationsMap__org_pepstock_charba_client_annotation_AnnotationOptions_.m_resetDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime_$pp_org_pepstock_charba_client_annotation(drawTime);
 }
 /** @override @return {DrawTime} */
 m_getDrawTime__() {
  return /**@type {DrawTime}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_DRAW_TIME__org_pepstock_charba_client_annotation_AnnotationOptions_Property, DrawTime.m_values__(), this.f_defaultOptions__org_pepstock_charba_client_annotation_AnnotationOptions_.m_getDrawTime__()), DrawTime));
 }
 
 m_setDoubleClickSpeed__int(/** number */ speed) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_DOUBLE_CLICK_SPEED__org_pepstock_charba_client_annotation_AnnotationOptions_Property, Checker.m_positiveOrZero__int(speed));
 }
 /** @override @return {number} */
 m_getDoubleClickSpeed__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_DOUBLE_CLICK_SPEED__org_pepstock_charba_client_annotation_AnnotationOptions_Property, this.f_defaultOptions__org_pepstock_charba_client_annotation_AnnotationOptions_.m_getDoubleClickSpeed__());
 }
 /** @return {boolean} */
 m_hasAnnotation__java_lang_String(/** ?string */ id) {
  return this.m_hasAnnotation__org_pepstock_charba_client_annotation_AnnotationId(AnnotationId.m_create__java_lang_String(id));
 }
 /** @override @return {boolean} */
 m_hasAnnotation__org_pepstock_charba_client_annotation_AnnotationId(/** AnnotationId */ id) {
  return this.f_annotationsMap__org_pepstock_charba_client_annotation_AnnotationOptions_.m_hasAnnotation__org_pepstock_charba_client_annotation_AnnotationId_$pp_org_pepstock_charba_client_annotation(id) || this.f_defaultOptions__org_pepstock_charba_client_annotation_AnnotationOptions_.m_hasAnnotation__org_pepstock_charba_client_annotation_AnnotationId(id);
 }
 
 m_removeAnnotation__java_lang_String(/** ?string */ id) {
  this.m_removeAnnotation__org_pepstock_charba_client_annotation_AnnotationId(AnnotationId.m_create__java_lang_String(id));
 }
 
 m_removeAnnotation__org_pepstock_charba_client_annotation_AnnotationId(/** AnnotationId */ id) {
  this.f_annotationsMap__org_pepstock_charba_client_annotation_AnnotationOptions_.m_removeAnnotation__org_pepstock_charba_client_annotation_AnnotationId_$pp_org_pepstock_charba_client_annotation(id);
 }
 
 m_addAnnotations__arrayOf_org_pepstock_charba_client_annotation_AbstractAnnotation(/** Array<AbstractAnnotation> */ annotations) {
  this.f_annotationsMap__org_pepstock_charba_client_annotation_AnnotationOptions_.m_addAnnotations__org_pepstock_charba_client_annotation_enums_DrawTime__arrayOf_org_pepstock_charba_client_annotation_AbstractAnnotation_$pp_org_pepstock_charba_client_annotation(this.m_getDrawTime__(), annotations);
 }
 
 m_setAnnotations__arrayOf_org_pepstock_charba_client_annotation_AbstractAnnotation(/** Array<AbstractAnnotation> */ annotations) {
  this.f_annotationsMap__org_pepstock_charba_client_annotation_AnnotationOptions_.m_setAnnotations__org_pepstock_charba_client_annotation_enums_DrawTime__arrayOf_org_pepstock_charba_client_annotation_AbstractAnnotation_$pp_org_pepstock_charba_client_annotation(this.m_getDrawTime__(), annotations);
 }
 /** @override @return {List<AbstractAnnotation>} */
 m_getAnnotations__() {
  return this.f_annotationsMap__org_pepstock_charba_client_annotation_AnnotationOptions_.m_getAnnotations___$pp_org_pepstock_charba_client_annotation();
 }
 /** @return {AbstractAnnotation} */
 m_getAnnotation__java_lang_String(/** ?string */ id) {
  return this.m_getAnnotation__org_pepstock_charba_client_annotation_AnnotationId(AnnotationId.m_create__java_lang_String(id));
 }
 /** @override @return {AbstractAnnotation} */
 m_getAnnotation__org_pepstock_charba_client_annotation_AnnotationId(/** AnnotationId */ id) {
  let result = this.f_annotationsMap__org_pepstock_charba_client_annotation_AnnotationOptions_.m_getAnnotation__org_pepstock_charba_client_annotation_AnnotationId_$pp_org_pepstock_charba_client_annotation(id);
  if ($Equality.$same(result, null)) {
   return this.f_defaultOptions__org_pepstock_charba_client_annotation_AnnotationOptions_.m_getAnnotation__org_pepstock_charba_client_annotation_AnnotationId(id);
  }
  return result;
 }
 /** @return {DrawTime} */
 static get f_DEFAULT_DRAW_TIME__org_pepstock_charba_client_annotation_AnnotationOptions() {
  return (AnnotationOptions.$clinit(), AnnotationOptions.$static_DEFAULT_DRAW_TIME__org_pepstock_charba_client_annotation_AnnotationOptions);
 }
 
 static $clinit() {
  AnnotationOptions.$clinit = () =>{};
  AnnotationOptions.$loadModules();
  AbstractPluginOptions.$clinit();
  IsDefaultsAnnotationOptions.$clinit();
  AnnotationOptions.$static_DEFAULT_DRAW_TIME__org_pepstock_charba_client_annotation_AnnotationOptions = DrawTime.f_AFTER_DATASETS_DRAW__org_pepstock_charba_client_annotation_enums_DrawTime;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnnotationOptions;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  AnnotationCachedMap = goog.module.get('org.pepstock.charba.client.annotation.AnnotationCachedMap$impl');
  AnnotationId = goog.module.get('org.pepstock.charba.client.annotation.AnnotationId$impl');
  AnnotationMap = goog.module.get('org.pepstock.charba.client.annotation.AnnotationMap$impl');
  Property = goog.module.get('org.pepstock.charba.client.annotation.AnnotationOptions.Property$impl');
  AnnotationPlugin = goog.module.get('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
  DrawTime = goog.module.get('org.pepstock.charba.client.annotation.enums.DrawTime$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number}*/
AnnotationOptions.f_DEFAULT_DOUBLE_CLICK_SPEED__org_pepstock_charba_client_annotation_AnnotationOptions = 350;
/**@private {DrawTime}*/
AnnotationOptions.$static_DEFAULT_DRAW_TIME__org_pepstock_charba_client_annotation_AnnotationOptions;
IsDefaultsAnnotationOptions.$markImplementor(AnnotationOptions);
$Util.$setClassMetadata(AnnotationOptions, "org.pepstock.charba.client.annotation.AnnotationOptions");

exports = AnnotationOptions;

//# sourceMappingURL=AnnotationOptions.js.map
