goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBubbleCase.$4$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FormatterCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.FormatterCallback$impl');

let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataItem = goog.forwardDeclare('org.pepstock.charba.client.items.DataItem$impl');
let DataLabelsBubbleCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBubbleCase$impl');

/**
 * @implements {FormatterCallback}
 */
class $4 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsBubbleCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_4;
 }
 /** @return {!$4} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase(/** DataLabelsBubbleCase */ $outer_this) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_4__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_4__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase(/** DataLabelsBubbleCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_4 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext__org_pepstock_charba_client_items_DataItem(/** DataLabelsContext */ context, /** DataItem */ dataItem) {
  return dataItem.m_getValueAsDataPoint__().m_getX__() + "," + dataItem.m_getValueAsDataPoint__().m_getY__();
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
$Util.$setClassMetadata($4, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBubbleCase$4");

exports = $4;

//# sourceMappingURL=DataLabelsBubbleCase$4.js.map
