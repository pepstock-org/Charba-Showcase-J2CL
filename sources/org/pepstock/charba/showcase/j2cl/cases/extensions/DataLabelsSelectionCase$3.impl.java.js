goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsSelectionCase.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataLabelsSelectionCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsSelectionCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ColorCallback<DataLabelsContext>}
 */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsSelectionCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_3;
 }
 /** @return {!$3} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase(/** DataLabelsSelectionCase */ $outer_this) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_3__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_3__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase(/** DataLabelsSelectionCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_3 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {IsColor} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  let ds = /**@type {LineDataset}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_3.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_.m_getData__().m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), LineDataset));
  let key = Math.imul(context.m_getDatasetIndex__(), 1000) + context.m_getDataIndex__() | 0;
  return !this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_3.f_items__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_.containsKey(Integer.m_valueOf__int(key)) ? ds.m_getBackgroundColor__() : HtmlColor.f_WHITE__org_pepstock_charba_client_colors_HtmlColor;
 }
 //Bridge method.
 /** @override @return {IsColor} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** DataLabelsContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/**@type {DataLabelsContext}*/ ($Casts.$to(arg0, DataLabelsContext)));
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
  Integer = goog.module.get('java.lang.Integer$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  DataLabelsContext = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ColorCallback.$markImplementor($3);
$Util.$setClassMetadata($3, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsSelectionCase$3");

exports = $3;

//# sourceMappingURL=DataLabelsSelectionCase$3.js.map
