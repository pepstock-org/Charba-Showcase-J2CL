goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnTimeSeriesLineCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let SegmentContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.SegmentContext$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');
let SegmentOnTimeSeriesLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnTimeSeriesLineCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {ColorCallback<SegmentContext>}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {SegmentOnTimeSeriesLineCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase(/** SegmentOnTimeSeriesLineCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_2__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_2__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase(/** SegmentOnTimeSeriesLineCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {*} */
 m_invoke__org_pepstock_charba_client_callbacks_SegmentContext(/** SegmentContext */ context) {
  let myWeek = this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_2.f_adapter__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_.m_format__long__org_pepstock_charba_client_enums_TimeUnit($Primitives.$narrowDoubleToLong(context.m_getEndPoint__().m_getParsed__().m_getX__()), TimeUnit.f_WEEK__org_pepstock_charba_client_enums_TimeUnit);
  if (!j_l_String.m_equals__java_lang_String__java_lang_Object(myWeek, this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_2.f_week__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_)) {
   this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_2.f_week__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_ = myWeek;
   this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_2.f_counter__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_ = this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_2.f_counter__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_ + 1 | 0;
  }
  return GoogleChartColor.m_values__()[this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_2.f_counter__org_pepstock_charba_showcase_j2cl_cases_elements_SegmentOnTimeSeriesLineCase_];
 }
 //Bridge method.
 /** @override @return {*} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** SegmentContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_callbacks_SegmentContext(/**@type {SegmentContext}*/ ($Casts.$to(arg0, SegmentContext)));
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
  SegmentContext = goog.module.get('org.pepstock.charba.client.callbacks.SegmentContext$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  TimeUnit = goog.module.get('org.pepstock.charba.client.enums.TimeUnit$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
ColorCallback.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.elements.SegmentOnTimeSeriesLineCase$2");

exports = $2;

//# sourceMappingURL=SegmentOnTimeSeriesLineCase$2.js.map
