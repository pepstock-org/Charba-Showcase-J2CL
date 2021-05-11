goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksWithThresholdBarCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let CallbacksWithThresholdBarCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksWithThresholdBarCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ColorCallback<DatasetContext>}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CallbacksWithThresholdBarCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase(/** CallbacksWithThresholdBarCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase(/** CallbacksWithThresholdBarCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {IsColor} */
 m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ context) {
  let dataset = /**@type {Dataset}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_1.f_chart__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_.m_getData__().m_getDatasets__().getAtIndex(context.m_getDatasetIndex__()), Dataset));
  let value = /**@type {?number}*/ ($Casts.$to(dataset.m_getData__().getAtIndex(context.m_getDataIndex__()), Double));
  if (Double.m_doubleValue__java_lang_Double(value) >= CallbacksWithThresholdBarCase.f_ERROR__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_) {
   return CallbacksWithThresholdBarCase.f_ERROR_COLOR__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_.m_alpha__double(0.2);
  } else if (Double.m_doubleValue__java_lang_Double(value) >= CallbacksWithThresholdBarCase.f_WARNING__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_) {
   return CallbacksWithThresholdBarCase.f_WARNING_COLOR__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_.m_alpha__double(0.2);
  }
  return CallbacksWithThresholdBarCase.f_INFO_COLOR__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksWithThresholdBarCase_.m_alpha__double(0.2);
 }
 //Bridge method.
 /** @override @return {IsColor} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** DatasetContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/**@type {DatasetContext}*/ ($Casts.$to(arg0, DatasetContext)));
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
  DatasetContext = goog.module.get('org.pepstock.charba.client.callbacks.DatasetContext$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  CallbacksWithThresholdBarCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksWithThresholdBarCase$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ColorCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksWithThresholdBarCase$1");

exports = $1;

//# sourceMappingURL=CallbacksWithThresholdBarCase$1.js.map
