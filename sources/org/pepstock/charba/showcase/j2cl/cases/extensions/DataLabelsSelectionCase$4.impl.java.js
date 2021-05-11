goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsSelectionCase.$4$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ClickEventHandler = goog.require('org.pepstock.charba.client.datalabels.events.ClickEventHandler$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataLabelsSelectionCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsSelectionCase$impl');
let SelectionItem = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsSelectionCase.SelectionItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ClickEventHandler}
 */
class $4 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsSelectionCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_4;
 }
 /** @return {!$4} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase(/** DataLabelsSelectionCase */ $outer_this) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_4__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_4__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase(/** DataLabelsSelectionCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_4 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {boolean} */
 m_onClick__org_pepstock_charba_client_datalabels_DataLabelsContext(/** DataLabelsContext */ context) {
  let key = Math.imul(context.m_getDatasetIndex__(), 1000) + context.m_getDataIndex__() | 0;
  if (this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_4.f_items__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_.containsKey(Integer.m_valueOf__int(key))) {
   this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_4.f_items__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_.remove(Integer.m_valueOf__int(key));
  } else {
   let ds = /**@type {LineDataset}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_4.f_chart__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_.m_getData__().m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), LineDataset));
   this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_4.f_items__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_.put(Integer.m_valueOf__int(key), SelectionItem.$create__int__int__double(context.m_getDatasetIndex__(), context.m_getDataIndex__(), Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ds.m_getData__().getAtIndex(context.m_getDataIndex__()), Double)))));
  }
  if (!this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_4.f_items__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_.isEmpty()) {
   this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_4.f_mylog__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_.m_addLogEvent__java_lang_String(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_4.f_items__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsSelectionCase_.values().size() + " selected labels");
  }
  return true;
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
  Double = goog.module.get('java.lang.Double$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  SelectionItem = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsSelectionCase.SelectionItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ClickEventHandler.$markImplementor($4);
$Util.$setClassMetadata($4, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsSelectionCase$4");

exports = $4;

//# sourceMappingURL=DataLabelsSelectionCase$4.js.map
