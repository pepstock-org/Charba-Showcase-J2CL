goog.module('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.AnimationCase.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AnimationCompleteEventHandler = goog.require('org.pepstock.charba.client.events.AnimationCompleteEventHandler$impl');

let AnimationCompleteEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AnimationCompleteEvent$impl');
let AnimationCase = goog.forwardDeclare('org.pepstock.charba.showcase.j2cl.cases.miscellaneous.AnimationCase$impl');

/**
 * @implements {AnimationCompleteEventHandler}
 */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {AnimationCase}*/
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AnimationCase_2;
 }
 /** @return {!$2} */
 static $create__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AnimationCase(/** AnimationCase */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AnimationCase_2__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AnimationCase($outer_this);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AnimationCase_2__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AnimationCase(/** AnimationCase */ $outer_this) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AnimationCase_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onComplete__org_pepstock_charba_client_events_AnimationCompleteEvent(/** AnimationCompleteEvent */ event) {
  this.$outer_this__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AnimationCase_2.f_progress__org_pepstock_charba_showcase_j2cl_cases_miscellaneous_AnimationCase_.m_setProgress__double(100);
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
 
 static $loadModules() {}
}
AnimationCompleteEventHandler.$markImplementor($2);
$Util.$setClassMetadata($2, "org.pepstock.charba.showcase.j2cl.cases.miscellaneous.AnimationCase$2");

exports = $2;

//# sourceMappingURL=AnimationCase$2.js.map
