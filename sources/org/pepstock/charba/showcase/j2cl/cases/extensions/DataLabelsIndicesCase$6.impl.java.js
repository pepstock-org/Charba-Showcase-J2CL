goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsIndicesCase.$6$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FormatterCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.FormatterCallback$impl');

let Math = goog.forwardDeclare('java.lang.Math$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataItem = goog.forwardDeclare('org.pepstock.charba.client.items.DataItem$impl');
let DataLabelsIndicesCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsIndicesCase$impl');

/**
 * @implements {FormatterCallback}
 */
class $6 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsIndicesCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase_6;
 }
 /** @return {!$6} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase(/** DataLabelsIndicesCase */ $outer_this) {
  $6.$clinit();
  let $instance = new $6();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase_6__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase_6__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase(/** DataLabelsIndicesCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase_6 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext__org_pepstock_charba_client_items_DataItem(/** DataLabelsContext */ context, /** DataItem */ dataItem) {
  return context.m_getDataIndex__() + ": " + Math.m_round__double(dataItem.m_getValue__()) + "'";
 }
 
 static $clinit() {
  $6.$clinit = () =>{};
  $6.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $6;
 }
 
 static $loadModules() {
  Math = goog.module.get('java.lang.Math$impl');
 }
}
FormatterCallback.$markImplementor($6);
$Util.$setClassMetadata($6, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsIndicesCase$6");

exports = $6;

//# sourceMappingURL=DataLabelsIndicesCase$6.js.map
