goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase.$4$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const MeterFormatCallback = goog.require('org.pepstock.charba.client.callbacks.MeterFormatCallback$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let MeterContext = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.MeterContext$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let GaugeCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {MeterFormatCallback}
 */
class $4 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {GaugeCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_4;
 }
 /** @return {!$4} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase(/** GaugeCase */ $outer_this) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_4__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_4__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase(/** GaugeCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_GaugeCase_4 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {?string} */
 m_invoke__org_pepstock_charba_client_impl_charts_MeterContext(/** MeterContext */ context) {
  return j_l_String.m_valueOf__java_lang_Object(Utilities.m_applyPrecision__double__int(context.m_getValue__(), 0)) + " GB";
 }
 //Bridge method.
 /** @override @return {?string} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** MeterContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_impl_charts_MeterContext(/**@type {MeterContext}*/ ($Casts.$to(arg0, MeterContext)));
 }
 
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  MeterContext = goog.module.get('org.pepstock.charba.client.impl.charts.MeterContext$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
MeterFormatCallback.$markImplementor($4);
$Util.$setClassMetadata($4, "org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase$4");

exports = $4;

//# sourceMappingURL=GaugeCase$4.js.map
