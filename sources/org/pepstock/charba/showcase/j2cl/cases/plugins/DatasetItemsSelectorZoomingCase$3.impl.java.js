goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorZoomingCase.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DatasetRangeSelectionEventHandler = goog.require('org.pepstock.charba.client.events.DatasetRangeSelectionEventHandler$impl');

let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let CartesianTimeSeriesAxis = goog.forwardDeclare('org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let DatasetRangeSelectionEvent = goog.forwardDeclare('org.pepstock.charba.client.events.DatasetRangeSelectionEvent$impl');
let DatasetItemsSelectorZoomingCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorZoomingCase$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {DatasetRangeSelectionEventHandler}
 */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DatasetItemsSelectorZoomingCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_3;
  /**@type {LineDataset}*/
  this.$captured_dataset2__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_3;
  /**@type {CartesianTimeSeriesAxis}*/
  this.$captured_axis__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_3;
 }
 /** @return {!$3} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis(/** DatasetItemsSelectorZoomingCase */ $outer_this, /** LineDataset */ $captured_dataset2, /** CartesianTimeSeriesAxis */ $captured_axis) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_3__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis($outer_this, $captured_dataset2, $captured_axis);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_3__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_configuration_CartesianTimeSeriesAxis(/** DatasetItemsSelectorZoomingCase */ $outer_this, /** LineDataset */ $captured_dataset2, /** CartesianTimeSeriesAxis */ $captured_axis) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_3 = $outer_this;
  this.$captured_dataset2__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_3 = $captured_dataset2;
  this.$captured_axis__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_3 = $captured_axis;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onSelect__org_pepstock_charba_client_events_DatasetRangeSelectionEvent(/** DatasetRangeSelectionEvent */ event) {
  let newDataPoints = /**@type {!LinkedList<DataPoint>}*/ (LinkedList.$create__());
  for (let $iterator = this.$captured_dataset2__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_3.m_getDataPoints__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let dp = /**@type {DataPoint}*/ ($Casts.$to($iterator.m_next__(), DataPoint));
   {
    newDataPoints.add(dp);
   }
  }
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_3.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_setDataPoints__java_util_List(newDataPoints);
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_3.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_getData__().m_setDatasets__arrayOf_org_pepstock_charba_client_data_Dataset(/**@type {!Array<Dataset>}*/ ($Arrays.$init([this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_3.f_dataset1__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_], Dataset)));
  this.$captured_axis__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_3.m_setMin__java_util_Date(event.m_getFrom__().m_getValueAsDate__());
  this.$captured_axis__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_3.m_setMax__java_util_Date(event.m_getTo__().m_getValueAsDate__());
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_3.f_chart__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_reconfigure__();
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
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
DatasetRangeSelectionEventHandler.$markImplementor($3);
$Util.$setClassMetadata($3, "org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorZoomingCase$3");

exports = $3;

//# sourceMappingURL=DatasetItemsSelectorZoomingCase$3.js.map
