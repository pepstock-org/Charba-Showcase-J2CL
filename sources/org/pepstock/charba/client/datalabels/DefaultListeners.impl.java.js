goog.module('org.pepstock.charba.client.datalabels.DefaultListeners$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultListeners = goog.require('org.pepstock.charba.client.datalabels.IsDefaultListeners$impl');

let ClickEventHandler = goog.forwardDeclare('org.pepstock.charba.client.datalabels.events.ClickEventHandler$impl');
let EnterEventHandler = goog.forwardDeclare('org.pepstock.charba.client.datalabels.events.EnterEventHandler$impl');
let LeaveEventHandler = goog.forwardDeclare('org.pepstock.charba.client.datalabels.events.LeaveEventHandler$impl');

/**
 * @implements {IsDefaultListeners}
 */
class DefaultListeners extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultListeners} */
 static $create__() {
  DefaultListeners.$clinit();
  let $instance = new DefaultListeners();
  $instance.$ctor__org_pepstock_charba_client_datalabels_DefaultListeners__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_datalabels_DefaultListeners__() {
  this.$ctor__java_lang_Object__();
 }
 //Default method forwarding stub.
 /** @override @return {ClickEventHandler} */
 m_getClickEventHandler__() {
  return IsDefaultListeners.m_getClickEventHandler__$default__org_pepstock_charba_client_datalabels_IsDefaultListeners(this);
 }
 //Default method forwarding stub.
 /** @override @return {EnterEventHandler} */
 m_getEnterEventHandler__() {
  return IsDefaultListeners.m_getEnterEventHandler__$default__org_pepstock_charba_client_datalabels_IsDefaultListeners(this);
 }
 //Default method forwarding stub.
 /** @override @return {LeaveEventHandler} */
 m_getLeaveEventHandler__() {
  return IsDefaultListeners.m_getLeaveEventHandler__$default__org_pepstock_charba_client_datalabels_IsDefaultListeners(this);
 }
 
 static $clinit() {
  DefaultListeners.$clinit = () =>{};
  DefaultListeners.$loadModules();
  j_l_Object.$clinit();
  IsDefaultListeners.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultListeners;
 }
 
 static $loadModules() {}
}
IsDefaultListeners.$markImplementor(DefaultListeners);
$Util.$setClassMetadata(DefaultListeners, "org.pepstock.charba.client.datalabels.DefaultListeners");

exports = DefaultListeners;

//# sourceMappingURL=DefaultListeners.js.map
