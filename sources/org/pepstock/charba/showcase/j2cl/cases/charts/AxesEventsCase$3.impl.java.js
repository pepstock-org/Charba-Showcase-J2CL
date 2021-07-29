goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.AxesEventsCase.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AxisEnterEventHandler = goog.require('org.pepstock.charba.client.events.AxisEnterEventHandler$impl');

let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let AxisEnterEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AxisEnterEvent$impl');
let AxesEventsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.AxesEventsCase$impl');

/**
 * @implements {AxisEnterEventHandler}
 */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {AxesEventsCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase_3;
 }
 /** @return {!$3} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase(/** AxesEventsCase */ $outer_this) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase_3__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase_3__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase(/** AxesEventsCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase_3 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onEnter__org_pepstock_charba_client_events_AxisEnterEvent(/** AxisEnterEvent */ event) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase_3.f_mylog__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase_.m_addLogEvent__java_lang_String("> ENTER: event ScreenX: " + event.m_getNativeEvent__().screenX + ", ScreenY:" + event.m_getNativeEvent__().screenY);
  event.m_getChart__().m_getNode__().m_getOptions__().m_getScales__().m_getAxis__org_pepstock_charba_client_options_ScaleId(event.m_getItem__().m_getId__()).m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_LIGHT_GREEN__org_pepstock_charba_client_colors_HtmlColor.m_alpha__double(0.2));
  event.m_getChart__().m_update__();
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
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
 }
}
AxisEnterEventHandler.$markImplementor($3);
$Util.$setClassMetadata($3, "org.pepstock.charba.showcase.j2cl.cases.charts.AxesEventsCase$3");

exports = $3;

//# sourceMappingURL=AxesEventsCase$3.js.map
