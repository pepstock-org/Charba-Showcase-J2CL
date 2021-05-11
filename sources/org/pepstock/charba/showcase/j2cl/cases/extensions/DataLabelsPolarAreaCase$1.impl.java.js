goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsPolarAreaCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let PolarAreaDataset = goog.forwardDeclare('org.pepstock.charba.client.data.PolarAreaDataset$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataLabelsPolarAreaCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsPolarAreaCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ColorCallback<DataLabelsContext>}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsPolarAreaCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsPolarAreaCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsPolarAreaCase(/** DataLabelsPolarAreaCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsPolarAreaCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsPolarAreaCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsPolarAreaCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsPolarAreaCase(/** DataLabelsPolarAreaCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsPolarAreaCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {?string} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  let ds = /**@type {PolarAreaDataset}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsPolarAreaCase_1.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsPolarAreaCase_.m_getData__().m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), PolarAreaDataset));
  return /**@type {IsColor}*/ ($Casts.$to(ds.m_getBackgroundColor__().getAtIndex(context.m_getDataIndex__()), IsColor)).m_alpha__double(1).m_toRGBA__();
 }
 //Bridge method.
 /** @override @return {?string} */
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
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  PolarAreaDataset = goog.module.get('org.pepstock.charba.client.data.PolarAreaDataset$impl');
  DataLabelsContext = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ColorCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsPolarAreaCase$1");

exports = $1;

//# sourceMappingURL=DataLabelsPolarAreaCase$1.js.map
