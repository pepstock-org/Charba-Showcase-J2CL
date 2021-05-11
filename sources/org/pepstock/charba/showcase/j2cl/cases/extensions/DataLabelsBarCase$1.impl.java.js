goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBarCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DisplayCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.DisplayCallback$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let Display = goog.forwardDeclare('org.pepstock.charba.client.enums.Display$impl');
let DataLabelsBarCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBarCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {DisplayCallback}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsBarCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBarCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBarCase(/** DataLabelsBarCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBarCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBarCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBarCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBarCase(/** DataLabelsBarCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBarCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {Display} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  let ds = /**@type {Dataset}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBarCase_1.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsBarCase_.m_getData__().m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), Dataset));
  let value = Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ds.m_getData__().getAtIndex(context.m_getDataIndex__()), Double)));
  return value > 15 ? Display.f_TRUE__org_pepstock_charba_client_enums_Display : Display.f_FALSE__org_pepstock_charba_client_enums_Display;
 }
 //Bridge method.
 /** @override @return {Display} */
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
  Double = goog.module.get('java.lang.Double$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  DataLabelsContext = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
  Display = goog.module.get('org.pepstock.charba.client.enums.Display$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
DisplayCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBarCase$1");

exports = $1;

//# sourceMappingURL=DataLabelsBarCase$1.js.map
