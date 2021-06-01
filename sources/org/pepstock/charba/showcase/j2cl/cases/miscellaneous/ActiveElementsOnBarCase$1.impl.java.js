goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ActiveElementsOnBarCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LegendClickEventHandler = goog.require('org.pepstock.charba.client.events.LegendClickEventHandler$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let LegendClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendClickEvent$impl');
let ActiveElementsOnBarCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ActiveElementsOnBarCase$impl');

/**
 * @implements {LegendClickEventHandler}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ActiveElementsOnBarCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase(/** ActiveElementsOnBarCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase(/** ActiveElementsOnBarCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onClick__org_pepstock_charba_client_events_LegendClickEvent(/** LegendClickEvent */ event) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_1.f_datasets__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.selectedIndex = 0;
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_1.f_data__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.selectedIndex = 0;
  Defaults.m_get__().m_invokeLegendOnClick__org_pepstock_charba_client_events_LegendClickEvent(event);
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
LegendClickEventHandler.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ActiveElementsOnBarCase$1");

exports = $1;

//# sourceMappingURL=ActiveElementsOnBarCase$1.js.map
