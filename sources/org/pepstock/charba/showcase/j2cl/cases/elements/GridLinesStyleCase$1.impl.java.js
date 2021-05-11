goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.GridLinesStyleCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorCallback = goog.require('org.pepstock.charba.client.callbacks.ColorCallback$impl');

let ScaleContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScaleContext$impl');
let GridLinesStyleCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.GridLinesStyleCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {ColorCallback<ScaleContext>}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {GridLinesStyleCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase(/** GridLinesStyleCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase(/** GridLinesStyleCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {*} */
 m_invoke__org_pepstock_charba_client_callbacks_ScaleContext(/** ScaleContext */ context) {
  let mod = $Primitives.$coerceDivision(context.m_getIndex__() % GridLinesStyleCase.f_COLORS__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase_.length);
  return GridLinesStyleCase.f_COLORS__org_pepstock_charba_showcase_j2cl_cases_elements_GridLinesStyleCase_[mod];
 }
 //Bridge method.
 /** @override @return {*} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** ScaleContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_callbacks_ScaleContext(/**@type {ScaleContext}*/ ($Casts.$to(arg0, ScaleContext)));
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
  ScaleContext = goog.module.get('org.pepstock.charba.client.callbacks.ScaleContext$impl');
  GridLinesStyleCase = goog.module.get('org.pepstock.charba.showcase.j2cl.cases.elements.GridLinesStyleCase$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
ColorCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.elements.GridLinesStyleCase$1");

exports = $1;

//# sourceMappingURL=GridLinesStyleCase$1.js.map
