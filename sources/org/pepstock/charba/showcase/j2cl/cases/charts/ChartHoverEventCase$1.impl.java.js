goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.ChartHoverEventCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ChartHoverEventHandler = goog.require('org.pepstock.charba.client.events.ChartHoverEventHandler$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let ChartHoverEvent = goog.forwardDeclare('org.pepstock.charba.client.events.ChartHoverEvent$impl');
let ChartHoverEventCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.ChartHoverEventCase$impl');

/**
 * @implements {ChartHoverEventHandler}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ChartHoverEventCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_ChartHoverEventCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_charts_ChartHoverEventCase(/** ChartHoverEventCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_ChartHoverEventCase_1__org_pepstock_charba_showcase_j2cl_cases_charts_ChartHoverEventCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_ChartHoverEventCase_1__org_pepstock_charba_showcase_j2cl_cases_charts_ChartHoverEventCase(/** ChartHoverEventCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_ChartHoverEventCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onHover__org_pepstock_charba_client_events_ChartHoverEvent(/** ChartHoverEvent */ event) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_ChartHoverEventCase_1.f_mylog__org_pepstock_charba_showcase_j2cl_cases_charts_ChartHoverEventCase_.m_addLogEvent__java_lang_String("> HOVER: ScreenX: " + event.m_getNativeEvent__().screenX + ", ScreenY:" + event.m_getNativeEvent__().screenY);
  Defaults.m_get__().m_invokeChartOnHover__org_pepstock_charba_client_events_ChartHoverEvent(event);
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
ChartHoverEventHandler.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.charts.ChartHoverEventCase$1");

exports = $1;

//# sourceMappingURL=ChartHoverEventCase$1.js.map
