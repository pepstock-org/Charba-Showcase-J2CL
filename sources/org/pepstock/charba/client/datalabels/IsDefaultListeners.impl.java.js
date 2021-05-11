goog.module('org.pepstock.charba.client.datalabels.IsDefaultListeners$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ClickEventHandler = goog.forwardDeclare('org.pepstock.charba.client.datalabels.events.ClickEventHandler$impl');
let EnterEventHandler = goog.forwardDeclare('org.pepstock.charba.client.datalabels.events.EnterEventHandler$impl');
let LeaveEventHandler = goog.forwardDeclare('org.pepstock.charba.client.datalabels.events.LeaveEventHandler$impl');

/**
 * @interface
 */
class IsDefaultListeners {
 /** @abstract @return {ClickEventHandler} */
 m_getClickEventHandler__() {}
 /** @abstract @return {EnterEventHandler} */
 m_getEnterEventHandler__() {}
 /** @abstract @return {LeaveEventHandler} */
 m_getLeaveEventHandler__() {}
 /** @return {ClickEventHandler} */
 static m_getClickEventHandler__$default__org_pepstock_charba_client_datalabels_IsDefaultListeners(/** !IsDefaultListeners */ $thisArg) {
  IsDefaultListeners.$clinit();
  return null;
 }
 /** @return {EnterEventHandler} */
 static m_getEnterEventHandler__$default__org_pepstock_charba_client_datalabels_IsDefaultListeners(/** !IsDefaultListeners */ $thisArg) {
  IsDefaultListeners.$clinit();
  return null;
 }
 /** @return {LeaveEventHandler} */
 static m_getLeaveEventHandler__$default__org_pepstock_charba_client_datalabels_IsDefaultListeners(/** !IsDefaultListeners */ $thisArg) {
  IsDefaultListeners.$clinit();
  return null;
 }
 
 static $clinit() {
  IsDefaultListeners.$clinit = () =>{};
  IsDefaultListeners.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_datalabels_IsDefaultListeners = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_datalabels_IsDefaultListeners;
 }
 
 static $loadModules() {}
}
IsDefaultListeners.$markImplementor(/**@type {Function}*/ (IsDefaultListeners));
$Util.$setClassMetadataForInterface(IsDefaultListeners, "org.pepstock.charba.client.datalabels.IsDefaultListeners");

exports = IsDefaultListeners;

//# sourceMappingURL=IsDefaultListeners.js.map
