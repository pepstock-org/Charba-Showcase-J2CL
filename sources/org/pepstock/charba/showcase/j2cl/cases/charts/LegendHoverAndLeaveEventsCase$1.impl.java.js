goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.LegendHoverAndLeaveEventsCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LegendHoverEventHandler = goog.require('org.pepstock.charba.client.events.LegendHoverEventHandler$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let LegendHoverEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendHoverEvent$impl');
let LegendHoverAndLeaveEventsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.LegendHoverAndLeaveEventsCase$impl');

/**
 * @implements {LegendHoverEventHandler}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {LegendHoverAndLeaveEventsCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_LegendHoverAndLeaveEventsCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_charts_LegendHoverAndLeaveEventsCase(/** LegendHoverAndLeaveEventsCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_LegendHoverAndLeaveEventsCase_1__org_pepstock_charba_showcase_j2cl_cases_charts_LegendHoverAndLeaveEventsCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_LegendHoverAndLeaveEventsCase_1__org_pepstock_charba_showcase_j2cl_cases_charts_LegendHoverAndLeaveEventsCase(/** LegendHoverAndLeaveEventsCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_LegendHoverAndLeaveEventsCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onHover__org_pepstock_charba_client_events_LegendHoverEvent(/** LegendHoverEvent */ event) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_LegendHoverAndLeaveEventsCase_1.f_mylog__org_pepstock_charba_showcase_j2cl_cases_charts_LegendHoverAndLeaveEventsCase_.m_addLogEvent__java_lang_String("> HOVER: Legend text: " + j_l_String.m_valueOf__java_lang_Object(event.m_getItem__().m_getText__()) + ", dataset : " + event.m_getItem__().m_getDatasetIndex__());
  Defaults.m_get__().m_invokeLegendOnHover__org_pepstock_charba_client_events_LegendHoverEvent(event);
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
LegendHoverEventHandler.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.charts.LegendHoverAndLeaveEventsCase$1");

exports = $1;

//# sourceMappingURL=LegendHoverAndLeaveEventsCase$1.js.map
