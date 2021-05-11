goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLineOnTimeSeriesLineCase.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractTooltipTitleCallback = goog.require('org.pepstock.charba.client.callbacks.AbstractTooltipTitleCallback$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let DateAdapter = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapter$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');
let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');
let AnnotationLineOnTimeSeriesLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLineOnTimeSeriesLineCase$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $1 extends AbstractTooltipTitleCallback {
 /** @protected */
 constructor() {
  super();
  /**@type {AnnotationLineOnTimeSeriesLineCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_1;
  /**@type {DateAdapter}*/
  this.$captured_adapter__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase__org_pepstock_charba_client_adapters_DateAdapter(/** AnnotationLineOnTimeSeriesLineCase */ $outer_this, /** DateAdapter */ $captured_adapter) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase__org_pepstock_charba_client_adapters_DateAdapter($outer_this, $captured_adapter);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_1__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase__org_pepstock_charba_client_adapters_DateAdapter(/** AnnotationLineOnTimeSeriesLineCase */ $outer_this, /** DateAdapter */ $captured_adapter) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_1 = $outer_this;
  this.$captured_adapter__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_1 = $captured_adapter;
  this.$ctor__org_pepstock_charba_client_callbacks_AbstractTooltipTitleCallback__();
 }
 /** @override @return {List<?string>} */
 m_onTitle__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<TooltipItem> */ items) {
  let item = /**@type {TooltipItem}*/ ($Casts.$to(items.m_iterator__().m_next__(), TooltipItem));
  let ds = /**@type {LineDataset}*/ ($Casts.$to(chart.m_getData__().m_getDatasets__().getAtIndex(0), LineDataset));
  let dp = /**@type {DataPoint}*/ ($Casts.$to(ds.m_getDataPoints__().getAtIndex(item.m_getDataIndex__()), DataPoint));
  return /**@type {List<?string>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<?string>}*/ ($Arrays.$init([this.$captured_adapter__org_pepstock_charba_showcase_j2cl_cases_extensions_AnnotationLineOnTimeSeriesLineCase_1.m_format__java_util_Date__org_pepstock_charba_client_enums_TimeUnit(dp.m_getXAsDate__(), TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit)], j_l_String))));
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  AbstractTooltipTitleCallback.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  LineDataset = goog.module.get('org.pepstock.charba.client.data.LineDataset$impl');
  TimeUnit = goog.module.get('org.pepstock.charba.client.enums.TimeUnit$impl');
  TooltipItem = goog.module.get('org.pepstock.charba.client.items.TooltipItem$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLineOnTimeSeriesLineCase$1");

exports = $1;

//# sourceMappingURL=AnnotationLineOnTimeSeriesLineCase$1.js.map
