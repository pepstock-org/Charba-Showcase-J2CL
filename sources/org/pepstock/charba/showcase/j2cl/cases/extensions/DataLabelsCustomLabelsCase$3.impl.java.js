goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsCustomLabelsCase.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FormatterCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.FormatterCallback$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataItem = goog.forwardDeclare('org.pepstock.charba.client.items.DataItem$impl');
let DataLabelsCustomLabelsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsCustomLabelsCase$impl');

/**
 * @implements {FormatterCallback}
 */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsCustomLabelsCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsCustomLabelsCase_3;
 }
 /** @return {!$3} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsCustomLabelsCase(/** DataLabelsCustomLabelsCase */ $outer_this) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsCustomLabelsCase_3__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsCustomLabelsCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsCustomLabelsCase_3__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsCustomLabelsCase(/** DataLabelsCustomLabelsCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsCustomLabelsCase_3 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext__org_pepstock_charba_client_items_DataItem(/** DataLabelsContext */ context, /** DataItem */ dataItem) {
  let labels = this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsCustomLabelsCase_3.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsCustomLabelsCase_.m_getData__().m_getLabels__();
  return labels.m_getString__int(context.m_getDataIndex__());
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
 
 static $loadModules() {}
}
FormatterCallback.$markImplementor($3);
$Util.$setClassMetadata($3, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsCustomLabelsCase$3");

exports = $3;

//# sourceMappingURL=DataLabelsCustomLabelsCase$3.js.map
