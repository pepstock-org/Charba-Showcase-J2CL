goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase.$6$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let PieDataset = goog.forwardDeclare('org.pepstock.charba.client.data.PieDataset$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataLabelsMultiLabelsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ColorCallback<DataLabelsContext>}
 */
class $6 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsMultiLabelsCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_6;
 }
 /** @return {!$6} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase(/** DataLabelsMultiLabelsCase */ $outer_this) {
  $6.$clinit();
  let $instance = new $6();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_6__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_6__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase(/** DataLabelsMultiLabelsCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_6 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {*} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  let ds = /**@type {PieDataset}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_6.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMultiLabelsCase_.m_getData__().m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), PieDataset));
  let value = Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ds.m_getData__().getAtIndex(context.m_getDataIndex__()), Double)));
  return value > 50 ? HtmlColor.f_BLACK__org_pepstock_charba_client_colors_HtmlColor : HtmlColor.f_WHITE__org_pepstock_charba_client_colors_HtmlColor;
 }
 //Bridge method.
 /** @override @return {*} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** DataLabelsContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/**@type {DataLabelsContext}*/ ($Casts.$to(arg0, DataLabelsContext)));
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
  Double = goog.module.get('java.lang.Double$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  PieDataset = goog.module.get('org.pepstock.charba.client.data.PieDataset$impl');
  DataLabelsContext = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ColorCallback.$markImplementor($6);
$Util.$setClassMetadata($6, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase$6");

exports = $6;

//# sourceMappingURL=DataLabelsMultiLabelsCase$6.js.map
