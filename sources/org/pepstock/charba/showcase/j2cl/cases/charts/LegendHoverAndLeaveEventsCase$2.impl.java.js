goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.LegendHoverAndLeaveEventsCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LegendLeaveEventHandler = goog.require('org.pepstock.charba.client.events.LegendLeaveEventHandler$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let LegendLeaveEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendLeaveEvent$impl');
let LegendHoverAndLeaveEventsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.LegendHoverAndLeaveEventsCase$impl');

/**
 * @implements {LegendLeaveEventHandler}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {LegendHoverAndLeaveEventsCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_LegendHoverAndLeaveEventsCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_charts_LegendHoverAndLeaveEventsCase(/** LegendHoverAndLeaveEventsCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_LegendHoverAndLeaveEventsCase_2__org_pepstock_charba_showcase_j2cl_cases_charts_LegendHoverAndLeaveEventsCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_LegendHoverAndLeaveEventsCase_2__org_pepstock_charba_showcase_j2cl_cases_charts_LegendHoverAndLeaveEventsCase(/** LegendHoverAndLeaveEventsCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_LegendHoverAndLeaveEventsCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onLeave__org_pepstock_charba_client_events_LegendLeaveEvent(/** LegendLeaveEvent */ event) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_LegendHoverAndLeaveEventsCase_2.f_mylog__org_pepstock_charba_showcase_j2cl_cases_charts_LegendHoverAndLeaveEventsCase_.m_addLogEvent__java_lang_String("> LEAVE: Legend text: " + j_l_String.m_valueOf__java_lang_Object(event.m_getItem__().m_getText__()) + ", dataset : " + event.m_getItem__().m_getDatasetIndex__());
  Defaults.m_get__().m_invokeLegendOnLeave__org_pepstock_charba_client_events_LegendLeaveEvent(event);
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
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
 }
}
LegendLeaveEventHandler.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.charts.LegendHoverAndLeaveEventsCase$2");

exports = $2;

//# sourceMappingURL=LegendHoverAndLeaveEventsCase$2.js.map
