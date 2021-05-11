goog.module('org.pepstock.charba.client.utils.CScheduler.RunnableWrapper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Runnable = goog.require('java.lang.Runnable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Status = goog.forwardDeclare('org.pepstock.charba.client.utils.CScheduler.RunnableWrapper.Status$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {Runnable}
 */
class RunnableWrapper extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Runnable}*/
  this.f_task__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_;
  /**@type {number}*/
  this.f_timeoutID__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_ = 0;
  /**@type {Status}*/
  this.f_status__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_;
 }
 /** @return {!RunnableWrapper} */
 static $create__java_lang_Runnable(/** Runnable */ task) {
  RunnableWrapper.$clinit();
  let $instance = new RunnableWrapper();
  $instance.$ctor__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper__java_lang_Runnable(task);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper__java_lang_Runnable(/** Runnable */ task) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_utils_CScheduler_RunnableWrapper();
  this.f_task__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_ = task;
 }
 
 m_setTimeoutID__int_$p_org_pepstock_charba_client_utils_CScheduler_RunnableWrapper(/** number */ timeoutID) {
  this.f_timeoutID__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_ = timeoutID;
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(Status.f_ENDED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status, this.f_status__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_)) {
   this.m_clear___$p_org_pepstock_charba_client_utils_CScheduler_RunnableWrapper();
  }
 }
 /** @override */
 m_run__() {
  this.f_status__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_ = Status.f_STARTED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status;
  this.f_task__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_.m_run__();
  this.m_clear___$p_org_pepstock_charba_client_utils_CScheduler_RunnableWrapper();
 }
 
 m_clear___$p_org_pepstock_charba_client_utils_CScheduler_RunnableWrapper() {
  if (Undefined.m_isNot__int(this.f_timeoutID__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_)) {
   window.clearTimeout(this.f_timeoutID__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_);
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_utils_CScheduler_RunnableWrapper() {
  this.f_timeoutID__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_ = Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined;
  this.f_status__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_ = Status.f_NOT_STARTED__org_pepstock_charba_client_utils_CScheduler_RunnableWrapper_Status;
 }
 
 static $clinit() {
  RunnableWrapper.$clinit = () =>{};
  RunnableWrapper.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RunnableWrapper;
 }
 
 static $loadModules() {
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Status = goog.module.get('org.pepstock.charba.client.utils.CScheduler.RunnableWrapper.Status$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
Runnable.$markImplementor(RunnableWrapper);
$Util.$setClassMetadata(RunnableWrapper, "org.pepstock.charba.client.utils.CScheduler$RunnableWrapper");

exports = RunnableWrapper;

//# sourceMappingURL=CScheduler$RunnableWrapper.js.map
