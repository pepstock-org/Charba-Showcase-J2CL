goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.ChartResizeEventCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ChartResizeEventHandler = goog.require('org.pepstock.charba.client.events.ChartResizeEventHandler$impl');

let ChartResizeEvent = goog.forwardDeclare('org.pepstock.charba.client.events.ChartResizeEvent$impl');
let ChartResizeEventCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.ChartResizeEventCase$impl');

/**
 * @implements {ChartResizeEventHandler}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ChartResizeEventCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_ChartResizeEventCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_charts_ChartResizeEventCase(/** ChartResizeEventCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_ChartResizeEventCase_1__org_pepstock_charba_showcase_j2cl_cases_charts_ChartResizeEventCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_ChartResizeEventCase_1__org_pepstock_charba_showcase_j2cl_cases_charts_ChartResizeEventCase(/** ChartResizeEventCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_ChartResizeEventCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onResize__org_pepstock_charba_client_events_ChartResizeEvent(/** ChartResizeEvent */ event) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_ChartResizeEventCase_1.f_mylog__org_pepstock_charba_showcase_j2cl_cases_charts_ChartResizeEventCase_.m_addLogEvent__java_lang_String("> RESIZE: width: " + event.m_getSize__().m_getWidth__() + "px , height: " + event.m_getSize__().m_getHeight__() + "px");
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
ChartResizeEventHandler.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.charts.ChartResizeEventCase$1");

exports = $1;

//# sourceMappingURL=ChartResizeEventCase$1.js.map
