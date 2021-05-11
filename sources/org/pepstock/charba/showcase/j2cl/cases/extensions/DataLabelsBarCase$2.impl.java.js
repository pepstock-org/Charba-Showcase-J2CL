goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBarCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FormatterCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.FormatterCallback$impl');

let Math = goog.forwardDeclare('java.lang.Math$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let Percentage = goog.forwardDeclare('org.pepstock.charba.client.impl.callbacks.Percentage$impl');
let DataItem = goog.forwardDeclare('org.pepstock.charba.client.items.DataItem$impl');
let DataLabelsBarCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBarCase$impl');

/**
 * @implements {FormatterCallback}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsBarCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBarCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBarCase(/** DataLabelsBarCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBarCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBarCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBarCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBarCase(/** DataLabelsBarCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBarCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext__org_pepstock_charba_client_items_DataItem(/** DataLabelsContext */ context, /** DataItem */ dataItem) {
  let percentage = Percentage.m_compute__org_pepstock_charba_client_IsChart__double__org_pepstock_charba_client_callbacks_AbstractDatasetContext__boolean(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBarCase_2.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBarCase_, dataItem.m_getValue__(), context, true);
  return Math.m_round__double(percentage * 100) + "%";
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
 
 static $loadModules() {
  Math = goog.module.get('java.lang.Math$impl');
  Percentage = goog.module.get('org.pepstock.charba.client.impl.callbacks.Percentage$impl');
 }
}
FormatterCallback.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBarCase$2");

exports = $2;

//# sourceMappingURL=DataLabelsBarCase$2.js.map
