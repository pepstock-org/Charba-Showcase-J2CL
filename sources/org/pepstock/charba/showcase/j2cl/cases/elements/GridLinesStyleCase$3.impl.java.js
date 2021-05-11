goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.GridLinesStyleCase.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const BorderDashOffsetCallback = goog.require('org.pepstock.charba.client.callbacks.BorderDashOffsetCallback$impl');

let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');
let GridLinesStyleCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.GridLinesStyleCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {BorderDashOffsetCallback<ScaleContext>}
 */
class $3 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {GridLinesStyleCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase_3;
 }
 /** @return {!$3} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase(/** GridLinesStyleCase */ $outer_this) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase_3__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase_3__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase(/** GridLinesStyleCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase_3 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {?number} */
 m_invoke__org_pepstock_charba_client_callbacks_ScaleContext(/** ScaleContext */ context) {
  return $Primitives.$coerceDivision(context.m_getIndex__() % 10);
 }
 //Bridge method.
 /** @override @return {?number} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** ScaleContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_callbacks_ScaleContext(/**@type {ScaleContext}*/ ($Casts.$to(arg0, ScaleContext)));
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
  ScaleContext = goog.module.get('org.pepstock.charba.client.callbacks.ScaleContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
BorderDashOffsetCallback.$markImplementor($3);
$Util.$setClassMetadata($3, "org.pepstock.charba.showcase.j2cl.cases.elements.GridLinesStyleCase$3");

exports = $3;

//# sourceMappingURL=GridLinesStyleCase$3.js.map
