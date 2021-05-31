goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.AnimationDelayCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DelayCallback = goog.require('org.pepstock.charba.client.callbacks.DelayCallback$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let ContextType = goog.forwardDeclare('org.pepstock.charba.client.enums.ContextType$impl');
let DefaultTransitionKey = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultTransitionKey$impl');
let AnimationDelayCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.AnimationDelayCase$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {DelayCallback}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {AnimationDelayCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationDelayCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationDelayCase(/** AnimationDelayCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationDelayCase_2__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationDelayCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationDelayCase_2__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationDelayCase(/** AnimationDelayCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationDelayCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @return {Integer} */
 m_invoke__org_pepstock_charba_client_callbacks_DatasetContext(/** DatasetContext */ context) {
  let delay = 0;
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ContextType.f_DATA__org_pepstock_charba_client_enums_ContextType, context.m_getType__()) && $Objects.m_equals__java_lang_Object__java_lang_Object(DefaultTransitionKey.f_DEFAULT__org_pepstock_charba_client_enums_DefaultTransitionKey, context.m_getMode__()) && !this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationDelayCase_2.f_delayed__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationDelayCase_) {
   delay = Math.imul(context.m_getDataIndex__(), 300) + Math.imul(context.m_getDatasetIndex__(), 100) | 0;
  }
  return Integer.m_valueOf__int(delay);
 }
 //Bridge method.
 /** @override @return {Integer} */
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
  Integer = goog.module.get('java.lang.Integer$impl');
  DatasetContext = goog.module.get('org.pepstock.charba.client.callbacks.DatasetContext$impl');
  ContextType = goog.module.get('org.pepstock.charba.client.enums.ContextType$impl');
  DefaultTransitionKey = goog.module.get('org.pepstock.charba.client.enums.DefaultTransitionKey$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
DelayCallback.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.elements.AnimationDelayCase$2");

exports = $2;

//# sourceMappingURL=AnimationDelayCase$2.js.map
