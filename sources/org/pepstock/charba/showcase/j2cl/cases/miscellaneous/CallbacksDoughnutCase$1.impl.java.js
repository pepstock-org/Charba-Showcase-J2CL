goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksDoughnutCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let CallbacksDoughnutCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksDoughnutCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ColorCallback<DatasetContext>}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CallbacksDoughnutCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksDoughnutCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksDoughnutCase(/** CallbacksDoughnutCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksDoughnutCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksDoughnutCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksDoughnutCase_1__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksDoughnutCase(/** CallbacksDoughnutCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksDoughnutCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {IsColor} */
 m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ context) {
  let size = GoogleChartColor.m_values__().length - 1 | 0;
  return GoogleChartColor.m_values__()[size - context.m_getDataIndex__() | 0];
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
  DatasetContext = goog.module.get('org.pepstock.charba.client.callbacks.DatasetContext$impl');
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ColorCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksDoughnutCase$1");

exports = $1;

//# sourceMappingURL=CallbacksDoughnutCase$1.js.map