goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBubbleCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AlignCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.AlignCallback$impl');

let BubbleDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BubbleDataset$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let Align = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Align$impl');
let DataLabelsBubbleCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBubbleCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {AlignCallback}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsBubbleCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase(/** DataLabelsBubbleCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase(/** DataLabelsBubbleCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {Align} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  let ds = /**@type {BubbleDataset}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_2.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_.m_getData__().m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), BubbleDataset));
  let point = /**@type {DataPoint}*/ ($Casts.$to(ds.m_getDataPoints__().getAtIndex(context.m_getDataIndex__()), DataPoint));
  return point.m_getR__() < 20 ? Align.f_END__org_pepstock_charba_client_datalabels_enums_Align : Align.f_CENTER__org_pepstock_charba_client_datalabels_enums_Align;
 }
 //Bridge method.
 /** @override @return {Align} */
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
  BubbleDataset = goog.module.get('org.pepstock.charba.client.data.BubbleDataset$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  DataLabelsContext = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
  Align = goog.module.get('org.pepstock.charba.client.datalabels.enums.Align$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
AlignCallback.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBubbleCase$2");

exports = $2;

//# sourceMappingURL=DataLabelsBubbleCase$2.js.map
