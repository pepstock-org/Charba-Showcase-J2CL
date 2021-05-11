goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksLineCase.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let CallbacksLineCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksLineCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ColorCallback<DatasetContext>}
 */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CallbacksLineCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksLineCase_3;
 }
 /** @return {!$3} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksLineCase(/** CallbacksLineCase */ $outer_this) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksLineCase_3__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksLineCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksLineCase_3__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksLineCase(/** CallbacksLineCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksLineCase_3 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {*} */
 m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ context) {
  return HtmlColor.f_PINK__org_pepstock_charba_client_colors_HtmlColor;
 }
 //Bridge method.
 /** @override @return {*} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** DatasetContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/**@type {DatasetContext}*/ ($Casts.$to(arg0, DatasetContext)));
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
  DatasetContext = goog.module.get('org.pepstock.charba.client.callbacks.DatasetContext$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ColorCallback.$markImplementor($3);
$Util.$setClassMetadata($3, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksLineCase$3");

exports = $3;

//# sourceMappingURL=CallbacksLineCase$3.js.map
