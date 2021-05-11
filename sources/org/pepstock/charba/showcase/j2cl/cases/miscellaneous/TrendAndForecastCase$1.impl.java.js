goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.TrendAndForecastCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LegendClickEventHandler = goog.require('org.pepstock.charba.client.events.LegendClickEventHandler$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let LegendClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendClickEvent$impl');
let TrendAndForecastCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.TrendAndForecastCase$impl');

/**
 * @implements {LegendClickEventHandler}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {TrendAndForecastCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase(/** TrendAndForecastCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase(/** TrendAndForecastCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onClick__org_pepstock_charba_client_events_LegendClickEvent(/** LegendClickEvent */ event) {
  if (event.m_getItem__().m_getDatasetIndex__() == 2) {
   if (this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_1.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_isDatasetVisible__int(2)) {
    this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_1.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getNode__().m_getOptions__().m_getScales__().m_getAxis__java_lang_String(TrendAndForecastCase.f_MY_SCALE_ID__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_).m_setMax__java_util_Date(Date.$create__long(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_1.f_nowDate__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getTime__()));
    this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_1.f_axis__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setMax__java_util_Date(Date.$create__long(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_1.f_nowDate__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getTime__()));
   } else {
    this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_1.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_getNode__().m_getOptions__().m_getScales__().m_getAxis__java_lang_String(TrendAndForecastCase.f_MY_SCALE_ID__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_).m_setMax__java_util_Date(/**@type {Date}*/ (null));
    this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_1.f_axis__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_TrendAndForecastCase_.m_setMax__java_util_Date(/**@type {Date}*/ (null));
   }
  }
  Defaults.m_get__().m_invokeLegendOnClick__org_pepstock_charba_client_events_LegendClickEvent(event);
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
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  TrendAndForecastCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.TrendAndForecastCase$impl');
 }
}
LegendClickEventHandler.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.TrendAndForecastCase$1");

exports = $1;

//# sourceMappingURL=TrendAndForecastCase$1.js.map
