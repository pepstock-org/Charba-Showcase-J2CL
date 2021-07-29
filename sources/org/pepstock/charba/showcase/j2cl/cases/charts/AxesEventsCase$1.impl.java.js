goog.module('org.pepstock.charba.showcase.j2cl.cases.charts.AxesEventsCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AxisClickEventHandler = goog.require('org.pepstock.charba.client.events.AxisClickEventHandler$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ScaleDataType = goog.forwardDeclare('org.pepstock.charba.client.enums.ScaleDataType$impl');
let AxisClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AxisClickEvent$impl');
let AxesEventsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.charts.AxesEventsCase$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {AxisClickEventHandler}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {AxesEventsCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase(/** AxesEventsCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase_1__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase_1__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase(/** AxesEventsCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onClick__org_pepstock_charba_client_events_AxisClickEvent(/** AxisClickEvent */ event) {
  let value = $Objects.m_equals__java_lang_Object__java_lang_Object(ScaleDataType.f_NUMBER__org_pepstock_charba_client_enums_ScaleDataType, event.m_getValue__().m_getDataType__()) ? event.m_getValue__().m_getValueAsString__() : event.m_getValue__().m_getLabel__();
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase_1.f_mylog__org_pepstock_charba_showcase_j2cl_cases_charts_AxesEventsCase_.m_addLogEvent__java_lang_String("> CLICK: event ScreenX: " + event.m_getNativeEvent__().screenX + ", ScreenY:" + event.m_getNativeEvent__().screenY + ", value:" + j_l_String.m_valueOf__java_lang_Object(value));
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
  ScaleDataType = goog.module.get('org.pepstock.charba.client.enums.ScaleDataType$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
AxisClickEventHandler.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.charts.AxesEventsCase$1");

exports = $1;

//# sourceMappingURL=AxesEventsCase$1.js.map
