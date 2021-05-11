goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksBarCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let GoogleChartColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GoogleChartColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let CallbacksBarCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksBarCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ColorCallback<DatasetContext>}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CallbacksBarCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBarCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBarCase(/** CallbacksBarCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBarCase_2__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBarCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBarCase_2__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBarCase(/** CallbacksBarCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksBarCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {IsColor} */
 m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ context) {
  return GoogleChartColor.m_values__()[context.m_getDataIndex__() + 5 | 0];
 }
 //Bridge method.
 /** @override @return {IsColor} */
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
  GoogleChartColor = goog.module.get('org.pepstock.charba.client.colors.GoogleChartColor$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ColorCallback.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksBarCase$2");

exports = $2;

//# sourceMappingURL=CallbacksBarCase$2.js.map
