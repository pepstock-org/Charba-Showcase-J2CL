goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.ChartClickEventCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ChartClickEventHandler = goog.require('org.pepstock.charba.client.events.ChartClickEventHandler$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let ChartClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.ChartClickEvent$impl');
let ChartClickEventCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.ChartClickEventCase$impl');

/**
 * @implements {ChartClickEventHandler}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ChartClickEventCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_ChartClickEventCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_charts_ChartClickEventCase(/** ChartClickEventCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_ChartClickEventCase_1__org_pepstock_charba_showcase_j2cl_cases_charts_ChartClickEventCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_ChartClickEventCase_1__org_pepstock_charba_showcase_j2cl_cases_charts_ChartClickEventCase(/** ChartClickEventCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_ChartClickEventCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onClick__org_pepstock_charba_client_events_ChartClickEvent(/** ChartClickEvent */ event) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_ChartClickEventCase_1.f_mylog__org_pepstock_charba_showcase_j2cl_cases_charts_ChartClickEventCase_.m_addLogEvent__java_lang_String("> CLICK: ScreenX: " + event.m_getNativeEvent__().screenX + ", ScreenY:" + event.m_getNativeEvent__().screenY);
  Defaults.m_get__().m_invokeChartOnClick__org_pepstock_charba_client_events_ChartClickEvent(event);
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
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
 }
}
ChartClickEventHandler.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.charts.ChartClickEventCase$1");

exports = $1;

//# sourceMappingURL=ChartClickEventCase$1.js.map
