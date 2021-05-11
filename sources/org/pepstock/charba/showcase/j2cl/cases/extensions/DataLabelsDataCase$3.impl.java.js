goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDataCase.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FormatterCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.FormatterCallback$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Math = goog.forwardDeclare('java.lang.Math$impl');
let StringBuffer = goog.forwardDeclare('java.lang.StringBuffer$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataItem = goog.forwardDeclare('org.pepstock.charba.client.items.DataItem$impl');
let DataLabelsDataCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDataCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {FormatterCallback}
 */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsDataCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDataCase_3;
 }
 /** @return {!$3} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDataCase(/** DataLabelsDataCase */ $outer_this) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDataCase_3__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDataCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDataCase_3__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDataCase(/** DataLabelsDataCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDataCase_3 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext__org_pepstock_charba_client_items_DataItem(/** DataLabelsContext */ context, /** DataItem */ dataItem) {
  let ds = /**@type {LineDataset}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDataCase_3.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsDataCase_.m_getData__().m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), LineDataset));
  let diff = context.m_getDataIndex__() > 0 ? dataItem.m_getValue__() - Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ds.m_getData__().getAtIndex(context.m_getDataIndex__() - 1 | 0), Double))) : 0;
  let sb = StringBuffer.$create__();
  sb.m_append__char(diff > 0 ? 9650 /* "\u25B2" */ : diff < 0 ? 9660 /* "\u25BC" */ : 9670 /* "\u25C6" */);
  return sb.m_append__java_lang_String(" ").m_append__long(Math.m_round__double(dataItem.m_getValue__())).toString();
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
  Double = goog.module.get('java.lang.Double$impl');
  Math = goog.module.get('java.lang.Math$impl');
  StringBuffer = goog.module.get('java.lang.StringBuffer$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
FormatterCallback.$markImplementor($3);
$Util.$setClassMetadata($3, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDataCase$3");

exports = $3;

//# sourceMappingURL=DataLabelsDataCase$3.js.map
