goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBubbleCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AnchorCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.AnchorCallback$impl');

let BubbleDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BubbleDataset$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let Anchor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Anchor$impl');
let DataLabelsBubbleCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBubbleCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {AnchorCallback}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsBubbleCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase(/** DataLabelsBubbleCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase(/** DataLabelsBubbleCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {Anchor} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  let ds = /**@type {BubbleDataset}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_1.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBubbleCase_.m_getData__().m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), BubbleDataset));
  let point = /**@type {DataPoint}*/ ($Casts.$to(ds.m_getDataPoints__().getAtIndex(context.m_getDataIndex__()), DataPoint));
  return point.m_getR__() < 20 ? Anchor.f_END__org_pepstock_charba_client_datalabels_enums_Anchor : Anchor.f_CENTER__org_pepstock_charba_client_datalabels_enums_Anchor;
 }
 //Bridge method.
 /** @override @return {Anchor} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** DataLabelsContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/**@type {DataLabelsContext}*/ ($Casts.$to(arg0, DataLabelsContext)));
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  BubbleDataset = goog.module.get('org.pepstock.charba.client.data.BubbleDataset$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  DataLabelsContext = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
  Anchor = goog.module.get('org.pepstock.charba.client.datalabels.enums.Anchor$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
AnchorCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBubbleCase$1");

exports = $1;

//# sourceMappingURL=DataLabelsBubbleCase$1.js.map
