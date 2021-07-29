goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.TitleEventsCase.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TitleLeaveEventHandler = goog.require('org.pepstock.charba.client.events.TitleLeaveEventHandler$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let TitleLeaveEvent = goog.forwardDeclare('org.pepstock.charba.client.events.TitleLeaveEvent$impl');
let TitleEventsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.TitleEventsCase$impl');

/**
 * @implements {TitleLeaveEventHandler}
 */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {TitleEventsCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase_3;
 }
 /** @return {!$3} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase(/** TitleEventsCase */ $outer_this) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase_3__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase_3__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase(/** TitleEventsCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase_3 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onLeave__org_pepstock_charba_client_events_TitleLeaveEvent(/** TitleLeaveEvent */ event) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase_3.f_mylog__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase_.m_addLogEvent__java_lang_String("> LEAVE: event ScreenX: " + event.m_getNativeEvent__().screenX + ", ScreenY:" + event.m_getNativeEvent__().screenY);
  event.m_getItem__().m_setColor__org_pepstock_charba_client_colors_IsColor(Defaults.m_get__().m_getGlobal__().m_getTitle__().m_getColor__());
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
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
 }
}
TitleLeaveEventHandler.$markImplementor($3);
$Util.$setClassMetadata($3, "org.pepstock.charba.showcase.j2cl.cases.charts.TitleEventsCase$3");

exports = $3;

//# sourceMappingURL=TitleEventsCase$3.js.map
