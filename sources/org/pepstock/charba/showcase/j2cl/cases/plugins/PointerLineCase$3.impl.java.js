goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.PointerLineCase.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AxisClickEventHandler = goog.require('org.pepstock.charba.client.events.AxisClickEventHandler$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let AxisClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AxisClickEvent$impl');
let PointerLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.PointerLineCase$impl');

/**
 * @implements {AxisClickEventHandler}
 */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {PointerLineCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_3;
 }
 /** @return {!$3} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase(/** PointerLineCase */ $outer_this) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_3__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_3__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase(/** PointerLineCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_3 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onClick__org_pepstock_charba_client_events_AxisClickEvent(/** AxisClickEvent */ event) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_3.f_mylog__org_pepstock_charba_showcase_j2cl_cases_plugins_PointerLineCase_.m_addLogEvent__java_lang_String("> Axis value: " + j_l_String.m_valueOf__java_lang_Object(event.m_getValue__().m_getLabel__()));
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
  j_l_String = goog.module.get('java.lang.String$impl');
 }
}
AxisClickEventHandler.$markImplementor($3);
$Util.$setClassMetadata($3, "org.pepstock.charba.showcase.j2cl.cases.plugins.PointerLineCase$3");

exports = $3;

//# sourceMappingURL=PointerLineCase$3.js.map
