goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksRadarCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const RadiusCallback = goog.require('org.pepstock.charba.client.callbacks.RadiusCallback$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let CallbacksRadarCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksRadarCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {RadiusCallback<DatasetContext>}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CallbacksRadarCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksRadarCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksRadarCase(/** CallbacksRadarCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksRadarCase_2__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksRadarCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksRadarCase_2__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksRadarCase(/** CallbacksRadarCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksRadarCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {?number} */
 m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ context) {
  return $Primitives.$narrowDoubleToInt(Math.random() * (CallbacksRadarCase.f_MAX__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksRadarCase_ - CallbacksRadarCase.f_MIN__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksRadarCase_)) + CallbacksRadarCase.f_MIN__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_CallbacksRadarCase_;
 }
 //Bridge method.
 /** @override @return {?number} */
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
  CallbacksRadarCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksRadarCase$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
RadiusCallback.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksRadarCase$2");

exports = $2;

//# sourceMappingURL=CallbacksRadarCase$2.js.map