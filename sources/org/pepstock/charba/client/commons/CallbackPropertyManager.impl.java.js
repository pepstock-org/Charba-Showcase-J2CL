goog.module('org.pepstock.charba.client.commons.CallbackPropertyManager$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Charts = goog.forwardDeclare('org.pepstock.charba.client.Charts$impl');
let CallbackPropertyNotifier = goog.forwardDeclare('org.pepstock.charba.client.commons.CallbackPropertyManager.CallbackPropertyNotifier$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let IsCallbackPropertyHandler = goog.forwardDeclare('org.pepstock.charba.client.commons.IsCallbackPropertyHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CallbackPropertyManager extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Set<IsCallbackPropertyHandler>}*/
  this.f_handlers__org_pepstock_charba_client_commons_CallbackPropertyManager_;
  /**@type {CallbackPropertyNotifier}*/
  this.f_notifier__org_pepstock_charba_client_commons_CallbackPropertyManager_;
 }
 /** @return {!CallbackPropertyManager} */
 static $create__() {
  CallbackPropertyManager.$clinit();
  let $instance = new CallbackPropertyManager();
  $instance.$ctor__org_pepstock_charba_client_commons_CallbackPropertyManager__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_commons_CallbackPropertyManager__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_commons_CallbackPropertyManager();
  Charts.m_addLifecycleListener__org_pepstock_charba_client_ChartsLifecycleListener(this.f_notifier__org_pepstock_charba_client_commons_CallbackPropertyManager_);
 }
 /** @return {CallbackPropertyManager} */
 static m_get__() {
  CallbackPropertyManager.$clinit();
  return CallbackPropertyManager.f_INSTANCE__org_pepstock_charba_client_commons_CallbackPropertyManager_;
 }
 /** @return {Set<IsCallbackPropertyHandler>} */
 m_getHandlers___$pp_org_pepstock_charba_client_commons() {
  return this.f_handlers__org_pepstock_charba_client_commons_CallbackPropertyManager_;
 }
 
 m_addHandler__org_pepstock_charba_client_commons_IsCallbackPropertyHandler_$pp_org_pepstock_charba_client_commons(/** IsCallbackPropertyHandler */ handler) {
  this.f_handlers__org_pepstock_charba_client_commons_CallbackPropertyManager_.add(/**@type {IsCallbackPropertyHandler}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(handler, "Callback property handler"), IsCallbackPropertyHandler)));
 }
 
 m_removeHandler__org_pepstock_charba_client_commons_IsCallbackPropertyHandler_$pp_org_pepstock_charba_client_commons(/** IsCallbackPropertyHandler */ handler) {
  if (!$Equality.$same(handler, null)) {
   this.f_handlers__org_pepstock_charba_client_commons_CallbackPropertyManager_.remove(handler);
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_commons_CallbackPropertyManager() {
  this.f_handlers__org_pepstock_charba_client_commons_CallbackPropertyManager_ = /**@type {!HashSet<IsCallbackPropertyHandler>}*/ (HashSet.$create__());
  this.f_notifier__org_pepstock_charba_client_commons_CallbackPropertyManager_ = CallbackPropertyNotifier.$create__();
 }
 
 static $clinit() {
  CallbackPropertyManager.$clinit = () =>{};
  CallbackPropertyManager.$loadModules();
  j_l_Object.$clinit();
  CallbackPropertyManager.f_INSTANCE__org_pepstock_charba_client_commons_CallbackPropertyManager_ = CallbackPropertyManager.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CallbackPropertyManager;
 }
 
 static $loadModules() {
  HashSet = goog.module.get('java.util.HashSet$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Charts = goog.module.get('org.pepstock.charba.client.Charts$impl');
  CallbackPropertyNotifier = goog.module.get('org.pepstock.charba.client.commons.CallbackPropertyManager.CallbackPropertyNotifier$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  IsCallbackPropertyHandler = goog.module.get('org.pepstock.charba.client.commons.IsCallbackPropertyHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {CallbackPropertyManager}*/
CallbackPropertyManager.f_INSTANCE__org_pepstock_charba_client_commons_CallbackPropertyManager_;
$Util.$setClassMetadata(CallbackPropertyManager, "org.pepstock.charba.client.commons.CallbackPropertyManager");

exports = CallbackPropertyManager;

//# sourceMappingURL=CallbackPropertyManager.js.map
