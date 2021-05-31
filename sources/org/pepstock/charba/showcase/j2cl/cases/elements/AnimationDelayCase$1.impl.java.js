goog.module('org.pepstock.charba.showcase.j2cl.cases.elements.AnimationDelayCase.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AnimationCompleteEventHandler = goog.require('org.pepstock.charba.client.events.AnimationCompleteEventHandler$impl');

let AnimationCompleteEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AnimationCompleteEvent$impl');
let AnimationDelayCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.elements.AnimationDelayCase$impl');

/**
 * @implements {AnimationCompleteEventHandler}
 */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {AnimationDelayCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationDelayCase_1;
 }
 /** @return {!$1} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationDelayCase(/** AnimationDelayCase */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationDelayCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationDelayCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationDelayCase_1__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationDelayCase(/** AnimationDelayCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationDelayCase_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onComplete__org_pepstock_charba_client_events_AnimationCompleteEvent(/** AnimationCompleteEvent */ event) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationDelayCase_1.f_delayed__org_pepstock_charba_showcase_j2cl_cases_elements_AnimationDelayCase_ = true;
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
AnimationCompleteEventHandler.$markImplementor($1);
$Util.$setClassMetadata($1, "org.pepstock.charba.showcase.j2cl.cases.elements.AnimationDelayCase$1");

exports = $1;

//# sourceMappingURL=AnimationDelayCase$1.js.map
