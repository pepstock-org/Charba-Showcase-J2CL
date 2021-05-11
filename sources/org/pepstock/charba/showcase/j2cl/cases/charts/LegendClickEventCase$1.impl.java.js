goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.LegendClickEventCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LegendClickEventHandler = goog.require('org.pepstock.charba.client.events.LegendClickEventHandler$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let LegendClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendClickEvent$impl');
let LegendClickEventCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.LegendClickEventCase$impl');

/**
 * @implements {LegendClickEventHandler}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {LegendClickEventCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_LegendClickEventCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_charts_LegendClickEventCase(/** LegendClickEventCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_LegendClickEventCase_1__org_pepstock_charba_showcase_j2cl_cases_charts_LegendClickEventCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_LegendClickEventCase_1__org_pepstock_charba_showcase_j2cl_cases_charts_LegendClickEventCase(/** LegendClickEventCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_LegendClickEventCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onClick__org_pepstock_charba_client_events_LegendClickEvent(/** LegendClickEvent */ event) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_LegendClickEventCase_1.f_mylog__org_pepstock_charba_showcase_j2cl_cases_charts_LegendClickEventCase_.m_addLogEvent__java_lang_String("> CLICK: Dataset label:" + j_l_String.m_valueOf__java_lang_Object(event.m_getItem__().m_getText__()) + ", index: " + event.m_getItem__().m_getDatasetIndex__());
  if (this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_LegendClickEventCase_1.f_forward__org_pepstock_charba_showcase_j2cl_cases_charts_LegendClickEventCase_.checked) {
   Defaults.m_get__().m_invokeLegendOnClick__org_pepstock_charba_client_events_LegendClickEvent(event);
  }
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
  j_l_String = goog.module.get('java.lang.String$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
 }
}
LegendClickEventHandler.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.charts.LegendClickEventCase$1");

exports = $1;

//# sourceMappingURL=LegendClickEventCase$1.js.map
