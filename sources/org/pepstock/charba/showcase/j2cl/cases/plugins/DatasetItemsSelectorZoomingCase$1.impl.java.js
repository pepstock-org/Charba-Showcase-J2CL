goog.module('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorZoomingCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TooltipTitleCallback = goog.require('org.pepstock.charba.client.callbacks.TooltipTitleCallback$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let LineDataset = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset$impl');
let TimeUnit = goog.forwardDeclare('org.pepstock.charba.client.enums.TimeUnit$impl');
let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');
let DatasetItemsSelectorZoomingCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorZoomingCase$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {TooltipTitleCallback}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DatasetItemsSelectorZoomingCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase(/** DatasetItemsSelectorZoomingCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_1__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_1__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase(/** DatasetItemsSelectorZoomingCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {List<?string>} */
 m_onTitle__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ chart, /** List<TooltipItem> */ items) {
  let item = /**@type {TooltipItem}*/ ($Casts.$to(items.m_iterator__().m_next__(), TooltipItem));
  let ds = /**@type {LineDataset}*/ ($Casts.$to(chart.m_getData__().m_getDatasets__().getAtIndex(0), LineDataset));
  let dp = /**@type {DataPoint}*/ ($Casts.$to(ds.m_getDataPoints__().getAtIndex(item.m_getDataIndex__()), DataPoint));
  return /**@type {List<?string>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<?string>}*/ ($Arrays.$init([this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_1.f_adapter__org_pepstock_charba_showcase_j2cl_cases_plugins_DatasetItemsSelectorZoomingCase_.m_format__java_util_Date__org_pepstock_charba_client_enums_TimeUnit(dp.m_getXAsDate__(), TimeUnit.f_DAY__org_pepstock_charba_client_enums_TimeUnit)], j_l_String))));
 }
 //Default method forwarding stub.
 /** @override @return {List<?string>} */
 m_onAfterTitle__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ arg0, /** List<TooltipItem> */ arg1) {
  return TooltipTitleCallback.m_onAfterTitle__$default__org_pepstock_charba_client_callbacks_TooltipTitleCallback__org_pepstock_charba_client_IsChart__java_util_List(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @return {List<?string>} */
 m_onBeforeTitle__org_pepstock_charba_client_IsChart__java_util_List(/** IsChart */ arg0, /** List<TooltipItem> */ arg1) {
  return TooltipTitleCallback.m_onBeforeTitle__$default__org_pepstock_charba_client_callbacks_TooltipTitleCallback__org_pepstock_charba_client_IsChart__java_util_List(this, arg0, arg1);
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
  TooltipTitleCallback.$clinit();
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
TooltipTitleCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorZoomingCase$1");

exports = $1;

//# sourceMappingURL=DatasetItemsSelectorZoomingCase$1.js.map
