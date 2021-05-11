goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase.$4$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FormatterCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.FormatterCallback$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataItem = goog.forwardDeclare('org.pepstock.charba.client.items.DataItem$impl');
let DataLabelsMultiLabelsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase$impl');

/**
 * @implements {FormatterCallback}
 */
class $4 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsMultiLabelsCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_4;
 }
 /** @return {!$4} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase(/** DataLabelsMultiLabelsCase */ $outer_this) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_4__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_4__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase(/** DataLabelsMultiLabelsCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_4 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext__org_pepstock_charba_client_items_DataItem(/** DataLabelsContext */ context, /** DataItem */ dataItem) {
  return context.m_isActive__() ? "name" : this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_4.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_.m_getData__().m_getLabels__().m_getString__int(context.m_getDataIndex__());
 }
 
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 static $loadModules() {}
}
FormatterCallback.$markImplementor($4);
$Util.$setClassMetadata($4, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase$4");

exports = $4;

//# sourceMappingURL=DataLabelsMultiLabelsCase$4.js.map
