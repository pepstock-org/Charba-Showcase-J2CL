goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.TrendAndForecastCase.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DisplayCallback = goog.require('org.pepstock.charba.client.callbacks.DisplayCallback$impl');

let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let TrendAndForecastCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.TrendAndForecastCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {DisplayCallback<AnnotationContext>}
 */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {TrendAndForecastCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_3;
 }
 /** @return {!$3} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase(/** TrendAndForecastCase */ $outer_this) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_3__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_3__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase(/** TrendAndForecastCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_3 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {?boolean} */
 m_invoke__org_pepstock_charba_client_annotation_AnnotationContext(/** AnnotationContext */ context) {
  return context.m_getChart__().m_isDatasetVisible__int(2);
 }
 //Bridge method.
 /** @override @return {?boolean} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** AnnotationContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_annotation_AnnotationContext(/**@type {AnnotationContext}*/ ($Casts.$to(arg0, AnnotationContext)));
 }
 
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $3;
 }
 
 static $loadModules() {
  AnnotationContext = goog.module.get('org.pepstock.charba.client.annotation.AnnotationContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
DisplayCallback.$markImplementor($3);
$Util.$setClassMetadata($3, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.TrendAndForecastCase$3");

exports = $3;

//# sourceMappingURL=TrendAndForecastCase$3.js.map
