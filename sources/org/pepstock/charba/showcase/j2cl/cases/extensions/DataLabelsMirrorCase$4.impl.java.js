goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMirrorCase.$4$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let BarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BarDataset$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataLabelsMirrorCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMirrorCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ColorCallback<DataLabelsContext>}
 */
class $4 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsMirrorCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMirrorCase_4;
 }
 /** @return {!$4} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMirrorCase(/** DataLabelsMirrorCase */ $outer_this) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMirrorCase_4__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMirrorCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMirrorCase_4__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMirrorCase(/** DataLabelsMirrorCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMirrorCase_4 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {?string} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  let ds = /**@type {BarDataset}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMirrorCase_4.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsMirrorCase_.m_getData__().m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), BarDataset));
  return /**@type {?string}*/ ($Casts.$to(ds.m_getBackgroundColorAsString__().getAtIndex(0), j_l_String));
 }
 //Bridge method.
 /** @override @return {?string} */
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
  j_l_String = goog.module.get('java.lang.String$impl');
  BarDataset = goog.module.get('org.pepstock.charba.client.data.BarDataset$impl');
  DataLabelsContext = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ColorCallback.$markImplementor($4);
$Util.$setClassMetadata($4, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMirrorCase$4");

exports = $4;

//# sourceMappingURL=DataLabelsMirrorCase$4.js.map
