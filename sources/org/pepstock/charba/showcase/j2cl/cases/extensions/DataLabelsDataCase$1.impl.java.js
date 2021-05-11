goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDataCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AlignCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.AlignCallback$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let Align = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Align$impl');
let DataLabelsDataCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDataCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {AlignCallback}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsDataCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDataCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDataCase(/** DataLabelsDataCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDataCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDataCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDataCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDataCase(/** DataLabelsDataCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDataCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {Align} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  let ds = /**@type {LineDataset}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDataCase_1.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDataCase_.m_getData__().m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), LineDataset));
  let curr = Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ds.m_getData__().getAtIndex(context.m_getDataIndex__()), Double)));
  let prev = context.m_getDataIndex__() > 0 ? Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ds.m_getData__().getAtIndex(context.m_getDataIndex__() - 1 | 0), Double))) : 0;
  let next = context.m_getDataIndex__() < ds.m_getData__().size() ? Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ds.m_getData__().getAtIndex(context.m_getDataIndex__() + 1 | 0), Double))) : 0;
  return prev < curr && next < curr ? Align.f_END__org_pepstock_charba_client_datalabels_enums_Align : prev > curr && next > curr ? Align.f_START__org_pepstock_charba_client_datalabels_enums_Align : Align.f_CENTER__org_pepstock_charba_client_datalabels_enums_Align;
 }
 //Bridge method.
 /** @override @return {Align} */
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
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  DataLabelsContext = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
  Align = goog.module.get('org.pepstock.charba.client.datalabels.enums.Align$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
AlignCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDataCase$1");

exports = $1;

//# sourceMappingURL=DataLabelsDataCase$1.js.map
