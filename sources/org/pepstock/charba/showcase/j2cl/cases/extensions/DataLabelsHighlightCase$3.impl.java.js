goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataLabelsHighlightCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase$impl');
let Hovered = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase.Hovered$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ColorCallback<DataLabelsContext>}
 */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsHighlightCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_3;
 }
 /** @return {!$3} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase(/** DataLabelsHighlightCase */ $outer_this) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_3__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_3__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase(/** DataLabelsHighlightCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_3 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {IsColor} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  let hovered = /**@type {Hovered}*/ ($Casts.$to(context.m_getAttributes__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_3.f_factory__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_), Hovered));
  let ds = /**@type {LineDataset}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_3.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsHighlightCase_.m_getData__().m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), LineDataset));
  return hovered.m_isHovered__() ? HtmlColor.f_WHITE__org_pepstock_charba_client_colors_HtmlColor : ds.m_getBackgroundColor__();
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
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  DataLabelsContext = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
  Hovered = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase.Hovered$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ColorCallback.$markImplementor($3);
$Util.$setClassMetadata($3, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase$3");

exports = $3;

//# sourceMappingURL=DataLabelsHighlightCase$3.js.map
