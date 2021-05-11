goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsIndicesCase.$4$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataLabelsIndicesCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsIndicesCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {ColorCallback<DataLabelsContext>}
 */
class $4 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsIndicesCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase_4;
 }
 /** @return {!$4} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase(/** DataLabelsIndicesCase */ $outer_this) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase_4__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase_4__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase(/** DataLabelsIndicesCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase_4 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {IsColor} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  let ds = /**@type {LineDataset}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase_4.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsIndicesCase_.m_getData__().m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), LineDataset));
  return $Primitives.$coerceDivision(context.m_getDataIndex__() % 2) == 0 ? HtmlColor.f_WHITE__org_pepstock_charba_client_colors_HtmlColor : ds.m_getBorderColor__();
 }
 //Bridge method.
 /** @override @return {IsColor} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** DataLabelsContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/**@type {DataLabelsContext}*/ ($Casts.$to(arg0, DataLabelsContext)));
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
 
 static $loadModules() {
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  DataLabelsContext = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
ColorCallback.$markImplementor($4);
$Util.$setClassMetadata($4, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsIndicesCase$4");

exports = $4;

//# sourceMappingURL=DataLabelsIndicesCase$4.js.map
