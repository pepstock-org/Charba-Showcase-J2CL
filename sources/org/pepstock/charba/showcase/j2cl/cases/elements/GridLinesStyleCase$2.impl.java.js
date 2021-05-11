goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.GridLinesStyleCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const WidthCallback = goog.require('org.pepstock.charba.client.callbacks.WidthCallback$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');
let GridLinesStyleCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.GridLinesStyleCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {WidthCallback<ScaleContext>}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {GridLinesStyleCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase(/** GridLinesStyleCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase_2__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase_2__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase(/** GridLinesStyleCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {Integer} */
 m_invoke__org_pepstock_charba_client_callbacks_ScaleContext(/** ScaleContext */ context) {
  return Integer.m_valueOf__int($Primitives.$coerceDivision(context.m_getIndex__() % 5));
 }
 //Bridge method.
 /** @override @return {Integer} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** ScaleContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_callbacks_ScaleContext(/**@type {ScaleContext}*/ ($Casts.$to(arg0, ScaleContext)));
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
  Integer = goog.module.get('java.lang.Integer$impl');
  ScaleContext = goog.module.get('org.pepstock.charba.client.callbacks.ScaleContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
WidthCallback.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.elements.GridLinesStyleCase$2");

exports = $2;

//# sourceMappingURL=GridLinesStyleCase$2.js.map
