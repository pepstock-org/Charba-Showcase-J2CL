goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsSelectionCase.SelectionItem$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class SelectionItem extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_datasetIndex__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_SelectionItem_ = 0;
  /**@type {number}*/
  this.f_index__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_SelectionItem_ = 0;
  /**@type {number}*/
  this.f_value__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_SelectionItem_ = 0;
 }
 /** @return {!SelectionItem} */
 static $create__int__int__double(/** number */ datasetIndex, /** number */ index, /** number */ value) {
  SelectionItem.$clinit();
  let $instance = new SelectionItem();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_SelectionItem__int__int__double(datasetIndex, index, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_SelectionItem__int__int__double(/** number */ datasetIndex, /** number */ index, /** number */ value) {
  this.$ctor__java_lang_Object__();
  this.f_datasetIndex__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_SelectionItem_ = datasetIndex;
  this.f_index__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_SelectionItem_ = index;
  this.f_value__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_SelectionItem_ = value;
 }
 /** @return {number} */
 m_getDatasetIndex__() {
  return this.f_datasetIndex__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_SelectionItem_;
 }
 /** @return {number} */
 m_getIndex__() {
  return this.f_index__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_SelectionItem_;
 }
 /** @return {number} */
 m_getValue__() {
  return this.f_value__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_SelectionItem_;
 }
 /** @override @return {?string} */
 toString() {
  return "SelectionItem [datasetIndex=" + this.f_datasetIndex__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_SelectionItem_ + ", index=" + this.f_index__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_SelectionItem_ + ", value=" + this.f_value__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_SelectionItem_ + "]";
 }
 
 static $clinit() {
  SelectionItem.$clinit = () =>{};
  SelectionItem.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SelectionItem;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(SelectionItem, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsSelectionCase$SelectionItem");

exports = SelectionItem;

//# sourceMappingURL=DataLabelsSelectionCase$SelectionItem.js.map
