goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.TitleEventsCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TitleClickEventHandler = goog.require('org.pepstock.charba.client.events.TitleClickEventHandler$impl');

let TitleClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.TitleClickEvent$impl');
let TitleEventsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.TitleEventsCase$impl');

/**
 * @implements {TitleClickEventHandler}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {TitleEventsCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase(/** TitleEventsCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase_1__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase_1__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase(/** TitleEventsCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onClick__org_pepstock_charba_client_events_TitleClickEvent(/** TitleClickEvent */ event) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase_1.f_mylog__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase_.m_addLogEvent__java_lang_String("> CLICK: event ScreenX: " + event.m_getNativeEvent__().screenX + ", ScreenY:" + event.m_getNativeEvent__().screenY);
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
 
 static $loadModules() {}
}
TitleClickEventHandler.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.charts.TitleEventsCase$1");

exports = $1;

//# sourceMappingURL=TitleEventsCase$1.js.map
