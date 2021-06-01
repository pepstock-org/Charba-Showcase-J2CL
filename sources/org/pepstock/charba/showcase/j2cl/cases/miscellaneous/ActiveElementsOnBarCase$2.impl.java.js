goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ActiveElementsOnBarCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ChartHoverEventHandler = goog.require('org.pepstock.charba.client.events.ChartHoverEventHandler$impl');

let ChartHoverEvent = goog.forwardDeclare('org.pepstock.charba.client.events.ChartHoverEvent$impl');
let ActiveElementsOnBarCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ActiveElementsOnBarCase$impl');

/**
 * @implements {ChartHoverEventHandler}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ActiveElementsOnBarCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase(/** ActiveElementsOnBarCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_2__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_2__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase(/** ActiveElementsOnBarCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onHover__org_pepstock_charba_client_events_ChartHoverEvent(/** ChartHoverEvent */ event) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_2.f_datasets__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.selectedIndex = 0;
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_2.f_data__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_ActiveElementsOnBarCase_.selectedIndex = 0;
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
 
 static $loadModules() {}
}
ChartHoverEventHandler.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ActiveElementsOnBarCase$2");

exports = $2;

//# sourceMappingURL=ActiveElementsOnBarCase$2.js.map
