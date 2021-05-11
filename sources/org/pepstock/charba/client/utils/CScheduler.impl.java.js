goog.module('org.pepstock.charba.client.utils.CScheduler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let RunnableWrapper = goog.forwardDeclare('org.pepstock.charba.client.utils.CScheduler.RunnableWrapper$impl');
let CSchedulerRegistration = goog.forwardDeclare('org.pepstock.charba.client.utils.CSchedulerRegistration$impl');

class CScheduler extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!CScheduler} */
 static $create__() {
  let $instance = new CScheduler();
  $instance.$ctor__org_pepstock_charba_client_utils_CScheduler__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_utils_CScheduler__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {CScheduler} */
 static m_get__() {
  CScheduler.$clinit();
  return CScheduler.f_INSTANCE__org_pepstock_charba_client_utils_CScheduler_;
 }
 /** @return {CSchedulerRegistration} */
 m_submit__java_lang_Runnable(/** Runnable */ task) {
  return this.m_submit__java_lang_Runnable__int(task, 0);
 }
 /** @return {CSchedulerRegistration} */
 m_submit__java_lang_Runnable__int(/** Runnable */ task, /** number */ delay) {
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(task, "Task instance");
  let normDelay = Math.max(delay, 0);
  let wrapper = RunnableWrapper.$create__java_lang_Runnable(task);
  let timeoutID = window.setTimeout(() =>{
   wrapper.m_run__();
  }, normDelay);
  wrapper.m_setTimeoutID__int_$p_org_pepstock_charba_client_utils_CScheduler_RunnableWrapper(timeoutID);
  return CSchedulerRegistration.$create__int(timeoutID);
 }
 
 static $clinit() {
  CScheduler.$clinit = () =>{};
  CScheduler.$loadModules();
  j_l_Object.$clinit();
  CScheduler.f_INSTANCE__org_pepstock_charba_client_utils_CScheduler_ = CScheduler.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CScheduler;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  RunnableWrapper = goog.module.get('org.pepstock.charba.client.utils.CScheduler.RunnableWrapper$impl');
  CSchedulerRegistration = goog.module.get('org.pepstock.charba.client.utils.CSchedulerRegistration$impl');
 }
}
/**@type {CScheduler}*/
CScheduler.f_INSTANCE__org_pepstock_charba_client_utils_CScheduler_;
$Util.$setClassMetadata(CScheduler, "org.pepstock.charba.client.utils.CScheduler");

exports = CScheduler;

//# sourceMappingURL=CScheduler.js.map
