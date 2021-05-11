goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.FilteringAxisLabelsCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CategoryTickCallback = goog.require('org.pepstock.charba.client.callbacks.CategoryTickCallback$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let FilteringAxisLabelsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.FilteringAxisLabelsCase$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {CategoryTickCallback}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {FilteringAxisLabelsCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringAxisLabelsCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringAxisLabelsCase(/** FilteringAxisLabelsCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringAxisLabelsCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringAxisLabelsCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringAxisLabelsCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringAxisLabelsCase(/** FilteringAxisLabelsCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_FilteringAxisLabelsCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_onCallback__org_pepstock_charba_client_configuration_Axis__java_lang_String__int__java_util_List(/** Axis */ axis, /** ?string */ value, /** number */ index, /** List<?string> */ values) {
  return $Primitives.$coerceDivision(index % 2) == 0 ? value : "";
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
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
CategoryTickCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.elements.FilteringAxisLabelsCase$1");

exports = $1;

//# sourceMappingURL=FilteringAxisLabelsCase$1.js.map
