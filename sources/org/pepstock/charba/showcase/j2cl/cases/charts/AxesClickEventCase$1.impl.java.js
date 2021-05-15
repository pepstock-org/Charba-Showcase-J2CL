goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.AxesClickEventCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AxisClickEventHandler = goog.require('org.pepstock.charba.client.events.AxisClickEventHandler$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let AxisClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AxisClickEvent$impl');
let AxesClickEventCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.AxesClickEventCase$impl');

/**
 * @implements {AxisClickEventHandler}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {AxesClickEventCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_AxesClickEventCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_charts_AxesClickEventCase(/** AxesClickEventCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_AxesClickEventCase_1__org_pepstock_charba_showcase_j2cl_cases_charts_AxesClickEventCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_AxesClickEventCase_1__org_pepstock_charba_showcase_j2cl_cases_charts_AxesClickEventCase(/** AxesClickEventCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_AxesClickEventCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onClick__org_pepstock_charba_client_events_AxisClickEvent(/** AxisClickEvent */ event) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_AxesClickEventCase_1.f_mylog__org_pepstock_charba_showcase_j2cl_cases_charts_AxesClickEventCase_.m_addLogEvent__java_lang_String("> CLICK: Axis value: " + j_l_String.m_valueOf__java_lang_Object(event.m_getValue__().m_getLabel__()));
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
 }
}
AxisClickEventHandler.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.charts.AxesClickEventCase$1");

exports = $1;

//# sourceMappingURL=AxesClickEventCase$1.js.map
