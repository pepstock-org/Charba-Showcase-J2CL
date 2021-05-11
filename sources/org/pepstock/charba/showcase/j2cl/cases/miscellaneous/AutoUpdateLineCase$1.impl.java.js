goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.AutoUpdateLineCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ChartTimerTask = goog.require('org.pepstock.charba.client.ChartTimerTask$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let AutoUpdateLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.AutoUpdateLineCase$impl');

/**
 * @implements {ChartTimerTask}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {AutoUpdateLineCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase(/** AutoUpdateLineCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase(/** AutoUpdateLineCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_execute__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  let dataDp = DataPoint.$create__();
  dataDp.m_setY__double(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_1.m_getRandomDigit__boolean(false));
  dataDp.m_setX__java_util_Date(Date.$create__());
  let points = this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_1.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_.m_getDataPoints__boolean(true);
  points.add(dataDp);
  if (points.size() > AutoUpdateLineCase.f_AMOUNT_OF_POINTS__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AutoUpdateLineCase_) {
   points.removeAtIndex(0);
  }
  chart.m_update__();
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  Date = goog.module.get('java.util.Date$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  AutoUpdateLineCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.AutoUpdateLineCase$impl');
 }
}
ChartTimerTask.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.AutoUpdateLineCase$1");

exports = $1;

//# sourceMappingURL=AutoUpdateLineCase$1.js.map
