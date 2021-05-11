goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLineOnTimeSeriesLineCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ContentCallback = goog.require('org.pepstock.charba.client.annotation.callbacks.ContentCallback$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let AnnotationLineOnTimeSeriesLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLineOnTimeSeriesLineCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ContentCallback}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {AnnotationLineOnTimeSeriesLineCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase(/** AnnotationLineOnTimeSeriesLineCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase(/** AnnotationLineOnTimeSeriesLineCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {?string} */
 m_invoke__org_pepstock_charba_client_annotation_AnnotationContext(/** AnnotationContext */ context) {
  return "Average of datasets is " + j_l_String.m_valueOf__java_lang_Object(Utilities.m_applyPrecision__double__int(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_2.m_getAverage___$p_org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase(), 2));
 }
 //Bridge method.
 /** @override @return {?string} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** AnnotationContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_annotation_AnnotationContext(/**@type {AnnotationContext}*/ ($Casts.$to(arg0, AnnotationContext)));
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  AnnotationContext = goog.module.get('org.pepstock.charba.client.annotation.AnnotationContext$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ContentCallback.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLineOnTimeSeriesLineCase$2");

exports = $2;

//# sourceMappingURL=AnnotationLineOnTimeSeriesLineCase$2.js.map
