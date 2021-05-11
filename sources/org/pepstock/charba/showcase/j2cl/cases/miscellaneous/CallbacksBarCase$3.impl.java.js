goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksBarCase.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const BorderSkippedCallback = goog.require('org.pepstock.charba.client.callbacks.BorderSkippedCallback$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let BorderSkipped = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderSkipped$impl');
let CallbacksBarCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksBarCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {BorderSkippedCallback}
 */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CallbacksBarCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBarCase_3;
 }
 /** @return {!$3} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBarCase(/** CallbacksBarCase */ $outer_this) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBarCase_3__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBarCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBarCase_3__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBarCase(/** CallbacksBarCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBarCase_3 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {BorderSkipped} */
 m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ context) {
  return BorderSkipped.f_BOTTOM__org_pepstock_charba_client_enums_BorderSkipped;
 }
 //Bridge method.
 /** @override @return {BorderSkipped} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** DatasetContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/**@type {DatasetContext}*/ ($Casts.$to(arg0, DatasetContext)));
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
  DatasetContext = goog.module.get('org.pepstock.charba.client.callbacks.DatasetContext$impl');
  BorderSkipped = goog.module.get('org.pepstock.charba.client.enums.BorderSkipped$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
BorderSkippedCallback.$markImplementor($3);
$Util.$setClassMetadata($3, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksBarCase$3");

exports = $3;

//# sourceMappingURL=CallbacksBarCase$3.js.map
