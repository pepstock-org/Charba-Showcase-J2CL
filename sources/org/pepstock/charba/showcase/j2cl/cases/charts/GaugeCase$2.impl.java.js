goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let GaugeDataset = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.GaugeDataset$impl');
let MeterContext = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.MeterContext$impl');
let GaugeCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ColorCallback<MeterContext>}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {GaugeCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase(/** GaugeCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_2__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_2__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase(/** GaugeCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {*} */
 m_invoke__org_pepstock_charba_client_impl_charts_MeterContext(/** MeterContext */ context) {
  let dataset = /**@type {GaugeDataset}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_2.f_chartValue__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_.m_getData__().m_getDatasets__().getAtIndex(0), GaugeDataset));
  return dataset.m_getCurrent__().m_getColor__();
 }
 //Bridge method.
 /** @override @return {*} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** MeterContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_impl_charts_MeterContext(/**@type {MeterContext}*/ ($Casts.$to(arg0, MeterContext)));
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
  GaugeDataset = goog.module.get('org.pepstock.charba.client.impl.charts.GaugeDataset$impl');
  MeterContext = goog.module.get('org.pepstock.charba.client.impl.charts.MeterContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ColorCallback.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase$2");

exports = $2;

//# sourceMappingURL=GaugeCase$2.js.map
