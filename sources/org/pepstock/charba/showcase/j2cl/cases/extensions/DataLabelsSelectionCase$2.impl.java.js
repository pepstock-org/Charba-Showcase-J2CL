goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsSelectionCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataLabelsSelectionCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsSelectionCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ColorCallback<DataLabelsContext>}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsSelectionCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase(/** DataLabelsSelectionCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase(/** DataLabelsSelectionCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {IsColor} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  let ds = /**@type {LineDataset}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_2.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_.m_getData__().m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), LineDataset));
  return ds.m_getBackgroundColor__();
 }
 //Bridge method.
 /** @override @return {IsColor} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** DataLabelsContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/**@type {DataLabelsContext}*/ ($Casts.$to(arg0, DataLabelsContext)));
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
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  DataLabelsContext = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ColorCallback.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsSelectionCase$2");

exports = $2;

//# sourceMappingURL=DataLabelsSelectionCase$2.js.map
