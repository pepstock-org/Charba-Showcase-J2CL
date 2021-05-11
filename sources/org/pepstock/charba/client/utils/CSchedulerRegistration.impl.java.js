goog.module('org.pepstock.charba.client.utils.CSchedulerRegistration$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class CSchedulerRegistration extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_timeoutID__org_pepstock_charba_client_utils_CSchedulerRegistration_ = 0;
 }
 /** @return {!CSchedulerRegistration} */
 static $create__int(/** number */ timeoutID) {
  CSchedulerRegistration.$clinit();
  let $instance = new CSchedulerRegistration();
  $instance.$ctor__org_pepstock_charba_client_utils_CSchedulerRegistration__int(timeoutID);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_utils_CSchedulerRegistration__int(/** number */ timeoutID) {
  this.$ctor__java_lang_Object__();
  this.f_timeoutID__org_pepstock_charba_client_utils_CSchedulerRegistration_ = timeoutID;
 }
 
 m_cancel__() {
  window.clearTimeout(this.f_timeoutID__org_pepstock_charba_client_utils_CSchedulerRegistration_);
 }
 
 static $clinit() {
  CSchedulerRegistration.$clinit = () =>{};
  CSchedulerRegistration.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CSchedulerRegistration;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(CSchedulerRegistration, "org.pepstock.charba.client.utils.CSchedulerRegistration");

exports = CSchedulerRegistration;

//# sourceMappingURL=CSchedulerRegistration.js.map
