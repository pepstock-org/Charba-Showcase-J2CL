goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.LogarithmicAxisOnScatterCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TickCallback = goog.require('org.pepstock.charba.client.callbacks.TickCallback$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let LogarithmicAxisOnScatterCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.LogarithmicAxisOnScatterCase$impl');

/**
 * @implements {TickCallback}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {LogarithmicAxisOnScatterCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase(/** LogarithmicAxisOnScatterCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_2__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_2__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase(/** LogarithmicAxisOnScatterCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_onCallback__org_pepstock_charba_client_configuration_Axis__double__int__java_util_List(/** Axis */ axis, /** number */ value, /** number */ index, /** List<?number> */ values) {
  return value + "dB";
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
TickCallback.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.elements.LogarithmicAxisOnScatterCase$2");

exports = $2;

//# sourceMappingURL=LogarithmicAxisOnScatterCase$2.js.map
