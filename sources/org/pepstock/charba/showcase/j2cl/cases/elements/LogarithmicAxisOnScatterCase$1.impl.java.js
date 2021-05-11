goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.LogarithmicAxisOnScatterCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TickCallback = goog.require('org.pepstock.charba.client.callbacks.TickCallback$impl');

let j_l_Math = goog.forwardDeclare('java.lang.Math$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let LogarithmicAxisOnScatterCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.LogarithmicAxisOnScatterCase$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {TickCallback}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {LogarithmicAxisOnScatterCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase(/** LogarithmicAxisOnScatterCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase(/** LogarithmicAxisOnScatterCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_LogarithmicAxisOnScatterCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_onCallback__org_pepstock_charba_client_configuration_Axis__double__int__java_util_List(/** Axis */ axis, /** number */ value, /** number */ index, /** List<?number> */ values) {
  let remain = $Primitives.$narrowDoubleToInt(value / Math.pow(10, Math.floor(j_l_Math.m_log10__double(value))));
  if (remain == 1 || remain == 2 || remain == 5) {
   return value + "Hz";
  }
  return "";
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
  j_l_Math = goog.module.get('java.lang.Math$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
TickCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.elements.LogarithmicAxisOnScatterCase$1");

exports = $1;

//# sourceMappingURL=LogarithmicAxisOnScatterCase$1.js.map
