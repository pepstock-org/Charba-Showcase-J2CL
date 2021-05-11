goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksBubbleCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let CallbacksBubbleCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksBubbleCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ColorCallback<DatasetContext>}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CallbacksBubbleCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase(/** CallbacksBubbleCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_2__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_2__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase(/** CallbacksBubbleCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {*} */
 m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ context) {
  let dp = /**@type {DataPoint}*/ ($Casts.$to(this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_2.f_dataset__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_.m_getDataPoints__().getAtIndex(context.m_getDataIndex__()), DataPoint));
  return this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase_2.m_colorize__boolean__org_pepstock_charba_client_data_DataPoint_$p_org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBubbleCase(true, dp);
 }
 //Bridge method.
 /** @override @return {*} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** DatasetContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/**@type {DatasetContext}*/ ($Casts.$to(arg0, DatasetContext)));
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
  DatasetContext = goog.module.get('org.pepstock.charba.client.callbacks.DatasetContext$impl');
  DataPoint = goog.module.get('org.pepstock.charba.client.data.DataPoint$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ColorCallback.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksBubbleCase$2");

exports = $2;

//# sourceMappingURL=CallbacksBubbleCase$2.js.map
