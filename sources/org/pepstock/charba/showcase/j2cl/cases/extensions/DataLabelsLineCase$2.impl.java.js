goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsLineCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DatasetSelectionEventHandler = goog.require('org.pepstock.charba.client.events.DatasetSelectionEventHandler$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let DatasetSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetSelectionEvent$impl');
let DataLabelsLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsLineCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {DatasetSelectionEventHandler}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DataLabelsLineCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLineCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLineCase(/** DataLabelsLineCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLineCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLineCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLineCase_2__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLineCase(/** DataLabelsLineCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLineCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onSelect__org_pepstock_charba_client_events_DatasetSelectionEvent(/** DatasetSelectionEvent */ event) {
  let chart = /**@type {IsChart}*/ (event.m_getChart__());
  let labels = chart.m_getData__().m_getLabels__();
  let datasets = chart.m_getData__().m_getDatasets__();
  if (!$Equality.$same(datasets, null) && !datasets.isEmpty()) {
   let sb = StringBuilder.$create__();
   sb.m_append__java_lang_String("Dataset index: ").m_append__int(event.m_getItem__().m_getDatasetIndex__()).m_append__java_lang_String(" ");
   sb.m_append__java_lang_String("Dataset label: ").m_append__java_lang_String(/**@type {Dataset}*/ ($Casts.$to(datasets.getAtIndex(event.m_getItem__().m_getDatasetIndex__()), Dataset)).m_getLabel__()).m_append__java_lang_String(" ");
   sb.m_append__java_lang_String("Dataset data: ").m_append__java_lang_Object(/**@type {?number}*/ ($Casts.$to(/**@type {Dataset}*/ ($Casts.$to(datasets.getAtIndex(event.m_getItem__().m_getDatasetIndex__()), Dataset)).m_getData__().getAtIndex(event.m_getItem__().m_getIndex__()), Double))).m_append__java_lang_String(" ");
   sb.m_append__java_lang_String("Index: ").m_append__int(event.m_getItem__().m_getIndex__()).m_append__java_lang_String(" ");
   sb.m_append__java_lang_String("Value: ").m_append__java_lang_String(/**@type {?string}*/ ($Casts.$to(labels.m_getStrings__int(event.m_getItem__().m_getIndex__()).getAtIndex(0), j_l_String)));
   this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLineCase_2.f_mylog__org_pepstock_charba_showcase_j2cl_cases_extensions_DataLabelsLineCase_.m_addLogEvent__java_lang_String(sb.toString());
  }
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
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
DatasetSelectionEventHandler.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsLineCase$2");

exports = $2;

//# sourceMappingURL=DataLabelsLineCase$2.js.map
