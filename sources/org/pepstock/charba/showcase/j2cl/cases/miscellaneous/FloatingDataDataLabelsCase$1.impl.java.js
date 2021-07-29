goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FloatingDataDataLabelsCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FormatterCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.FormatterCallback$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataItem = goog.forwardDeclare('org.pepstock.charba.client.items.DataItem$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let FloatingDataDataLabelsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FloatingDataDataLabelsCase$impl');

/**
 * @implements {FormatterCallback}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {FloatingDataDataLabelsCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase(/** FloatingDataDataLabelsCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase(/** FloatingDataDataLabelsCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_FloatingDataDataLabelsCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext__org_pepstock_charba_client_items_DataItem(/** DataLabelsContext */ context, /** DataItem */ dataItem) {
  return Utilities.m_applyPrecision__double__int(dataItem.m_getValueAsFloatingData__().m_getEnd__(), 0);
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
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
 }
}
FormatterCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FloatingDataDataLabelsCase$1");

exports = $1;

//# sourceMappingURL=FloatingDataDataLabelsCase$1.js.map