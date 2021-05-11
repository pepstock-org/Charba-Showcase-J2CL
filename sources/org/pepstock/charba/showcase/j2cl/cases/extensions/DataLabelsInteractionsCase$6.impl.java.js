goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsInteractionsCase.$6$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FormatterCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.FormatterCallback$impl');

let Math = goog.forwardDeclare('java.lang.Math$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataItem = goog.forwardDeclare('org.pepstock.charba.client.items.DataItem$impl');
let DataLabelsInteractionsCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsInteractionsCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {FormatterCallback}
 */
class $6 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsInteractionsCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsInteractionsCase_6;
 }
 /** @return {!$6} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsInteractionsCase(/** DataLabelsInteractionsCase */ $outer_this) {
  $6.$clinit();
  let $instance = new $6();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsInteractionsCase_6__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsInteractionsCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsInteractionsCase_6__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsInteractionsCase(/** DataLabelsInteractionsCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsInteractionsCase_6 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext__org_pepstock_charba_client_items_DataItem(/** DataLabelsContext */ context, /** DataItem */ dataItem) {
  let ds = /**@type {LineDataset}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsInteractionsCase_6.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsInteractionsCase_.m_getData__().m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), LineDataset));
  let myValue = $Primitives.$widenLongToDouble($LongUtils.$divide(Math.m_round__double(dataItem.m_getValue__() * 100), $Long.fromInt(100)));
  return context.m_isActive__() ? j_l_String.m_valueOf__java_lang_Object(ds.m_getLabel__()) + "\n" + myValue + "%" : Math.m_round__double(myValue) + "";
 }
 
 static $clinit() {
  $6.$clinit = () =>{};
  $6.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $6;
 }
 
 static $loadModules() {
  Math = goog.module.get('java.lang.Math$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
FormatterCallback.$markImplementor($6);
$Util.$setClassMetadata($6, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsInteractionsCase$6");

exports = $6;

//# sourceMappingURL=DataLabelsInteractionsCase$6.js.map
