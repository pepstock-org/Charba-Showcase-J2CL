goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMirrorCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AnchorCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.AnchorCallback$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let BarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BarDataset$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let Anchor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Anchor$impl');
let DataLabelsMirrorCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMirrorCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {AnchorCallback}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsMirrorCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMirrorCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMirrorCase(/** DataLabelsMirrorCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMirrorCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMirrorCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMirrorCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMirrorCase(/** DataLabelsMirrorCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMirrorCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {Anchor} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  let ds = /**@type {BarDataset}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMirrorCase_2.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMirrorCase_.m_getData__().m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), BarDataset));
  return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ds.m_getData__().getAtIndex(context.m_getDataIndex__()), Double))) > 0 ? Anchor.f_END__org_pepstock_charba_client_datalabels_enums_Anchor : Anchor.f_START__org_pepstock_charba_client_datalabels_enums_Anchor;
 }
 //Bridge method.
 /** @override @return {Anchor} */
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
  Double = goog.module.get('java.lang.Double$impl');
  BarDataset = goog.module.get('org.pepstock.charba.client.data.BarDataset$impl');
  DataLabelsContext = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
  Anchor = goog.module.get('org.pepstock.charba.client.datalabels.enums.Anchor$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
AnchorCallback.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMirrorCase$2");

exports = $2;

//# sourceMappingURL=DataLabelsMirrorCase$2.js.map
