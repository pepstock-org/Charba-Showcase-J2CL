goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorZoomingCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DatasetRangeCleanSelectionEventHandler = goog.require('org.pepstock.charba.client.events.DatasetRangeCleanSelectionEventHandler$impl');

let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let CartesianTimeSeriesAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let DatasetRangeCleanSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetRangeCleanSelectionEvent$impl');
let DatasetItemsSelectorZoomingCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorZoomingCase$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @implements {DatasetRangeCleanSelectionEventHandler}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DatasetItemsSelectorZoomingCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_2;
  /**@type {CartesianTimeSeriesAxis}*/
  this.$captured_axis__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis(/** DatasetItemsSelectorZoomingCase */ $outer_this, /** CartesianTimeSeriesAxis */ $captured_axis) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_2__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis($outer_this, $captured_axis);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_2__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis(/** DatasetItemsSelectorZoomingCase */ $outer_this, /** CartesianTimeSeriesAxis */ $captured_axis) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_2 = $outer_this;
  this.$captured_axis__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_2 = $captured_axis;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onClean__org_pepstock_charba_client_events_DatasetRangeCleanSelectionEvent(/** DatasetRangeCleanSelectionEvent */ event) {
  this.$captured_axis__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_2.m_setMin__java_util_Date(null);
  this.$captured_axis__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_2.m_setMax__java_util_Date(null);
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_2.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_setDataPoints__java_util_List(/**@type {!LinkedList<DataPoint>}*/ (LinkedList.$create__()));
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_2.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_2.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_], Dataset)));
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_2.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_reconfigure__();
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
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
DatasetRangeCleanSelectionEventHandler.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorZoomingCase$2");

exports = $2;

//# sourceMappingURL=DatasetItemsSelectorZoomingCase$2.js.map
