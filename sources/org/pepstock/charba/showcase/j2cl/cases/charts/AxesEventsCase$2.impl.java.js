goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.AxesEventsCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AxisLeaveEventHandler = goog.require('org.pepstock.charba.client.events.AxisLeaveEventHandler$impl');

let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let AxisLeaveEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AxisLeaveEvent$impl');
let AxesEventsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.AxesEventsCase$impl');

/**
 * @implements {AxisLeaveEventHandler}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {AxesEventsCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase(/** AxesEventsCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase_2__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase_2__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase(/** AxesEventsCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onLeave__org_pepstock_charba_client_events_AxisLeaveEvent(/** AxisLeaveEvent */ event) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase_2.f_mylog__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase_.m_addLogEvent__java_lang_String("> LEAVE: event ScreenX: " + event.m_getNativeEvent__().screenX + ", ScreenY:" + event.m_getNativeEvent__().screenY);
  event.m_getChart__().m_getNode__().m_getOptions__().m_getScales__().m_getAxis__org_pepstock_charba_client_options_ScaleId(event.m_getItem__().m_getId__()).m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_TRANSPARENT__org_pepstock_charba_client_colors_HtmlColor);
  event.m_getChart__().m_update__();
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
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
 }
}
AxisLeaveEventHandler.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.charts.AxesEventsCase$2");

exports = $2;

//# sourceMappingURL=AxesEventsCase$2.js.map
