goog.module('org.pepstock.charba.client.utils.CTimer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Status = goog.forwardDeclare('org.pepstock.charba.client.utils.CTimer.Status$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class CTimer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Runnable}*/
  this.f_task__org_pepstock_charba_client_utils_CTimer_;
  /**@type {number}*/
  this.f_interval__org_pepstock_charba_client_utils_CTimer_ = 0;
  /**@type {Status}*/
  this.f_status__org_pepstock_charba_client_utils_CTimer_;
  /**@type {number}*/
  this.f_intervalID__org_pepstock_charba_client_utils_CTimer_ = 0;
 }
 /** @return {!CTimer} */
 static $create__java_lang_Runnable__int(/** Runnable */ task, /** number */ interval) {
  CTimer.$clinit();
  let $instance = new CTimer();
  $instance.$ctor__org_pepstock_charba_client_utils_CTimer__java_lang_Runnable__int(task, interval);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_utils_CTimer__java_lang_Runnable__int(/** Runnable */ task, /** number */ interval) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_utils_CTimer();
  this.f_task__org_pepstock_charba_client_utils_CTimer_ = /**@type {Runnable}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(task, "Task instance"), Runnable));
  this.f_interval__org_pepstock_charba_client_utils_CTimer_ = Checker.m_checkAndGetIfGreaterThan__int__int__java_lang_String(interval, 1, "Interval");
 }
 /** @return {number} */
 m_getInterval__() {
  return this.f_interval__org_pepstock_charba_client_utils_CTimer_;
 }
 /** @return {Status} */
 m_getStatus__() {
  return this.f_status__org_pepstock_charba_client_utils_CTimer_;
 }
 
 m_start__int(/** number */ interval) {
  this.f_interval__org_pepstock_charba_client_utils_CTimer_ = Checker.m_checkAndGetIfGreaterThan__int__int__java_lang_String(interval, 1, "Interval");
  this.m_start__();
 }
 
 m_start__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(Status.f_INITIALIZED__org_pepstock_charba_client_utils_CTimer_Status, this.f_status__org_pepstock_charba_client_utils_CTimer_) || $Objects.m_equals__java_lang_Object__java_lang_Object(Status.f_STOPPED__org_pepstock_charba_client_utils_CTimer_Status, this.f_status__org_pepstock_charba_client_utils_CTimer_)) {
   let /** Runnable */ $$q;
   this.f_intervalID__org_pepstock_charba_client_utils_CTimer_ = window.setInterval(($$q = this.f_task__org_pepstock_charba_client_utils_CTimer_, () =>{
    $$q.m_run__();
   }), this.f_interval__org_pepstock_charba_client_utils_CTimer_);
   this.f_status__org_pepstock_charba_client_utils_CTimer_ = Status.f_RUNNING__org_pepstock_charba_client_utils_CTimer_Status;
  }
 }
 
 m_stop__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(Status.f_RUNNING__org_pepstock_charba_client_utils_CTimer_Status, this.f_status__org_pepstock_charba_client_utils_CTimer_)) {
   window.clearInterval(this.f_intervalID__org_pepstock_charba_client_utils_CTimer_);
   this.f_status__org_pepstock_charba_client_utils_CTimer_ = Status.f_STOPPED__org_pepstock_charba_client_utils_CTimer_Status;
   this.f_intervalID__org_pepstock_charba_client_utils_CTimer_ = Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined;
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_utils_CTimer() {
  this.f_status__org_pepstock_charba_client_utils_CTimer_ = Status.f_INITIALIZED__org_pepstock_charba_client_utils_CTimer_Status;
  this.f_intervalID__org_pepstock_charba_client_utils_CTimer_ = Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined;
 }
 
 static $clinit() {
  CTimer.$clinit = () =>{};
  CTimer.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CTimer;
 }
 
 static $loadModules() {
  Runnable = goog.module.get('java.lang.Runnable$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Status = goog.module.get('org.pepstock.charba.client.utils.CTimer.Status$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(CTimer, "org.pepstock.charba.client.utils.CTimer");

exports = CTimer;

//# sourceMappingURL=CTimer.js.map
