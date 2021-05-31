goog.module('org.pepstock.charba.client.annotation.AnnotationHelper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
let AnnotationId = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationId$impl');
let AnnotationOptions = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationOptions$impl');
let AnnotationPlugin = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
let AnnotationType = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationType$impl');
let IsDefaultsAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsDefaultsAnnotation$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class AnnotationHelper extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<Integer, AbstractAnnotation>}*/
  this.f_annotationInstancesCache__org_pepstock_charba_client_annotation_AnnotationHelper_;
 }
 /** @return {!AnnotationHelper} */
 static $create__() {
  let $instance = new AnnotationHelper();
  $instance.$ctor__org_pepstock_charba_client_annotation_AnnotationHelper__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_annotation_AnnotationHelper__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_annotation_AnnotationHelper();
 }
 /** @return {AnnotationHelper} */
 static m_get__() {
  AnnotationHelper.$clinit();
  return AnnotationHelper.f_INSTANCE__org_pepstock_charba_client_annotation_AnnotationHelper_;
 }
 
 m_addAnnotation__org_pepstock_charba_client_annotation_AbstractAnnotation_$pp_org_pepstock_charba_client_annotation(/** AbstractAnnotation */ annotation) {
  if (!$Equality.$same(annotation, null) && Undefined.m_isNot__int(annotation.m_getAnnotationId___$pp_org_pepstock_charba_client_annotation())) {
   this.f_annotationInstancesCache__org_pepstock_charba_client_annotation_AnnotationHelper_.put(Integer.m_valueOf__int(annotation.m_getAnnotationId___$pp_org_pepstock_charba_client_annotation()), annotation);
  }
 }
 /** @return {AbstractAnnotation} */
 m_getAnnotation__int_$pp_org_pepstock_charba_client_annotation(/** number */ annotationId) {
  return /**@type {AbstractAnnotation}*/ ($Casts.$to(this.f_annotationInstancesCache__org_pepstock_charba_client_annotation_AnnotationHelper_.get(Integer.m_valueOf__int(annotationId)), AbstractAnnotation));
 }
 /** @return {IsDefaultsAnnotation} */
 m_getDefaultsAnnotationOptionsByChart__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_annotation_AnnotationId__org_pepstock_charba_client_IsChart_$pp_org_pepstock_charba_client_annotation(/** AnnotationType */ type, /** AnnotationId */ id, /** IsChart */ chart) {
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(type);
  if (IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) && AnnotationId.m_isValid__org_pepstock_charba_client_annotation_AnnotationId(id)) {
   return this.m_inspectChartToGetAnnotation__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_annotation_AnnotationId__org_pepstock_charba_client_annotation_AnnotationOptions_$p_org_pepstock_charba_client_annotation_AnnotationHelper(type, id, /**@type {AnnotationOptions}*/ ($Casts.$to(chart.m_getDefaultChartOptions__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, AnnotationPlugin.f_FACTORY__org_pepstock_charba_client_annotation_AnnotationPlugin), AnnotationOptions)));
  }
  return type.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation();
 }
 /** @return {IsDefaultsAnnotation} */
 m_getDefaultsAnnotationOptionsByGlobal__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_annotation_AnnotationId_$pp_org_pepstock_charba_client_annotation(/** AnnotationType */ type, /** AnnotationId */ id) {
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(type);
  return this.m_inspectChartToGetAnnotation__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_annotation_AnnotationId__org_pepstock_charba_client_annotation_AnnotationOptions_$p_org_pepstock_charba_client_annotation_AnnotationHelper(type, id, /**@type {AnnotationOptions}*/ ($Casts.$to(Defaults.m_get__().m_getGlobal__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, AnnotationPlugin.f_FACTORY__org_pepstock_charba_client_annotation_AnnotationPlugin), AnnotationOptions)));
 }
 /** @return {IsDefaultsAnnotation} */
 m_inspectChartToGetAnnotation__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_annotation_AnnotationId__org_pepstock_charba_client_annotation_AnnotationOptions_$p_org_pepstock_charba_client_annotation_AnnotationHelper(/** AnnotationType */ type, /** AnnotationId */ id, /** AnnotationOptions */ options) {
  if (AnnotationId.m_isValid__org_pepstock_charba_client_annotation_AnnotationId(id) && !$Equality.$same(options, null) && options.m_hasAnnotation__org_pepstock_charba_client_annotation_AnnotationId(id)) {
   let result = options.m_getAnnotation__org_pepstock_charba_client_annotation_AnnotationId(id);
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(type, result.m_getType__())) {
    return result;
   }
  }
  return type.m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_annotation_AnnotationHelper() {
  this.f_annotationInstancesCache__org_pepstock_charba_client_annotation_AnnotationHelper_ = /**@type {!HashMap<Integer, AbstractAnnotation>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  AnnotationHelper.$clinit = () =>{};
  AnnotationHelper.$loadModules();
  j_l_Object.$clinit();
  AnnotationHelper.f_INSTANCE__org_pepstock_charba_client_annotation_AnnotationHelper_ = AnnotationHelper.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnnotationHelper;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  AbstractAnnotation = goog.module.get('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
  AnnotationId = goog.module.get('org.pepstock.charba.client.annotation.AnnotationId$impl');
  AnnotationOptions = goog.module.get('org.pepstock.charba.client.annotation.AnnotationOptions$impl');
  AnnotationPlugin = goog.module.get('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@type {AnnotationHelper}*/
AnnotationHelper.f_INSTANCE__org_pepstock_charba_client_annotation_AnnotationHelper_;
$Util.$setClassMetadata(AnnotationHelper, "org.pepstock.charba.client.annotation.AnnotationHelper");

exports = AnnotationHelper;

//# sourceMappingURL=AnnotationHelper.js.map
