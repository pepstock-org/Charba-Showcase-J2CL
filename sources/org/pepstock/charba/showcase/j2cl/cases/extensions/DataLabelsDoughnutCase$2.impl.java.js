goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDoughnutCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DisplayCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.DisplayCallback$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let Display = goog.forwardDeclare('org.pepstock.charba.client.enums.Display$impl');
let DataLabelsDoughnutCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDoughnutCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {DisplayCallback}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsDoughnutCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase(/** DataLabelsDoughnutCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase(/** DataLabelsDoughnutCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {Display} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  let ds = /**@type {Dataset}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_2.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDoughnutCase_.m_getData__().m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), Dataset));
  let count = ds.m_getData__().size();
  let value = Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ds.m_getData__().getAtIndex(context.m_getDataIndex__()), Double)));
  return value > count * 1.5 ? Display.f_TRUE__org_pepstock_charba_client_enums_Display : Display.f_FALSE__org_pepstock_charba_client_enums_Display;
 }
 //Bridge method.
 /** @override @return {Display} */
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
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  DataLabelsContext = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
  Display = goog.module.get('org.pepstock.charba.client.enums.Display$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
DisplayCallback.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDoughnutCase$2");

exports = $2;

//# sourceMappingURL=DataLabelsDoughnutCase$2.js.map
