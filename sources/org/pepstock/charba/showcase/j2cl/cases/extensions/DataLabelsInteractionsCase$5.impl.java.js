goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsInteractionsCase.$5$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataLabelsInteractionsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsInteractionsCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ColorCallback<DataLabelsContext>}
 */
class $5 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsInteractionsCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsInteractionsCase_5;
 }
 /** @return {!$5} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsInteractionsCase(/** DataLabelsInteractionsCase */ $outer_this) {
  $5.$clinit();
  let $instance = new $5();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsInteractionsCase_5__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsInteractionsCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsInteractionsCase_5__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsInteractionsCase(/** DataLabelsInteractionsCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsInteractionsCase_5 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {?string} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  let ds = /**@type {LineDataset}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsInteractionsCase_5.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsInteractionsCase_.m_getData__().m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), LineDataset));
  return context.m_isActive__() ? HtmlColor.f_WHITE__org_pepstock_charba_client_colors_HtmlColor.m_toRGBA__() : ds.m_getBackgroundColorAsString__();
 }
 //Bridge method.
 /** @override @return {?string} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** DataLabelsContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/**@type {DataLabelsContext}*/ ($Casts.$to(arg0, DataLabelsContext)));
 }
 
 static $clinit() {
  $5.$clinit = () =>{};
  $5.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $5;
 }
 
 static $loadModules() {
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  DataLabelsContext = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ColorCallback.$markImplementor($5);
$Util.$setClassMetadata($5, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsInteractionsCase$5");

exports = $5;

//# sourceMappingURL=DataLabelsInteractionsCase$5.js.map
