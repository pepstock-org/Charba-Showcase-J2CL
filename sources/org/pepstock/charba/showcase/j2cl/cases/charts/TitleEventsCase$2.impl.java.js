goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.TitleEventsCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TitleEnterEventHandler = goog.require('org.pepstock.charba.client.events.TitleEnterEventHandler$impl');

let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let TitleEnterEvent = goog.forwardDeclare('org.pepstock.charba.client.events.TitleEnterEvent$impl');
let TitleEventsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.TitleEventsCase$impl');

/**
 * @implements {TitleEnterEventHandler}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {TitleEventsCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase(/** TitleEventsCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase_2__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase_2__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase(/** TitleEventsCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onEnter__org_pepstock_charba_client_events_TitleEnterEvent(/** TitleEnterEvent */ event) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase_2.f_mylog__org_pepstock_charba_showcase_j2cl_cases_charts_TitleEventsCase_.m_addLogEvent__java_lang_String("> ENTER: event ScreenX: " + event.m_getNativeEvent__().screenX + ", ScreenY:" + event.m_getNativeEvent__().screenY);
  event.m_getItem__().m_setColor__org_pepstock_charba_client_colors_IsColor(HtmlColor.f_RED__org_pepstock_charba_client_colors_HtmlColor);
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
TitleEnterEventHandler.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.charts.TitleEventsCase$2");

exports = $2;

//# sourceMappingURL=TitleEventsCase$2.js.map
