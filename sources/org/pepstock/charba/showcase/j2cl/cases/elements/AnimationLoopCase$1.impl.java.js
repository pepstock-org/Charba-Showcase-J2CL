goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.AnimationLoopCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LoopCallback = goog.require('org.pepstock.charba.client.callbacks.LoopCallback$impl');

let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let AnimationLoopCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.AnimationLoopCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {LoopCallback}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {AnimationLoopCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationLoopCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationLoopCase(/** AnimationLoopCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationLoopCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationLoopCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationLoopCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationLoopCase(/** AnimationLoopCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationLoopCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {?boolean} */
 m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ context) {
  return context.m_isActive__();
 }
 //Bridge method.
 /** @override @return {?boolean} */
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
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
LoopCallback.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.elements.AnimationLoopCase$1");

exports = $1;

//# sourceMappingURL=AnimationLoopCase$1.js.map
