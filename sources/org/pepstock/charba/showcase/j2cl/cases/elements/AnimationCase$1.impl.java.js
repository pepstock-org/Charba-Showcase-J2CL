goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.AnimationCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AnimationProgressEventHandler = goog.require('org.pepstock.charba.client.events.AnimationProgressEventHandler$impl');

let AnimationProgressEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AnimationProgressEvent$impl');
let AnimationCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.AnimationCase$impl');

/**
 * @implements {AnimationProgressEventHandler}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {AnimationCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationCase(/** AnimationCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationCase(/** AnimationCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onProgress__org_pepstock_charba_client_events_AnimationProgressEvent(/** AnimationProgressEvent */ event) {
  let value = event.m_getItem__().m_getCurrentStep__() / event.m_getItem__().m_getNumSteps__() * 100;
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationCase_1.f_progress__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationCase_.m_setProgress__double(value);
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
 
 static $loadModules() {}
}
AnimationProgressEventHandler.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.elements.AnimationCase$1");

exports = $1;

//# sourceMappingURL=AnimationCase$1.js.map
