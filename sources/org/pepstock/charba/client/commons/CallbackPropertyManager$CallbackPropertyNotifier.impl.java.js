goog.module('org.pepstock.charba.client.commons.CallbackPropertyManager.CallbackPropertyNotifier$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ChartsLifecycleListener = goog.require('org.pepstock.charba.client.ChartsLifecycleListener$impl');

let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let CallbackPropertyManager = goog.forwardDeclare('org.pepstock.charba.client.commons.CallbackPropertyManager$impl');
let IsCallbackPropertyHandler = goog.forwardDeclare('org.pepstock.charba.client.commons.IsCallbackPropertyHandler$impl');
let CScheduler = goog.forwardDeclare('org.pepstock.charba.client.utils.CScheduler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ChartsLifecycleListener}
 */
class CallbackPropertyNotifier extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!CallbackPropertyNotifier} */
 static $create__() {
  CallbackPropertyNotifier.$clinit();
  let $instance = new CallbackPropertyNotifier();
  $instance.$ctor__org_pepstock_charba_client_commons_CallbackPropertyManager_CallbackPropertyNotifier__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_commons_CallbackPropertyManager_CallbackPropertyNotifier__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onBeforeDestroy__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart) && !CallbackPropertyManager.m_get__().m_getHandlers___$pp_org_pepstock_charba_client_commons().isEmpty()) {
   CScheduler.m_get__().m_submit__java_lang_Runnable(Runnable.$adapt(() =>{
    let iterator = CallbackPropertyManager.m_get__().m_getHandlers___$pp_org_pepstock_charba_client_commons().m_iterator__();
    while (iterator.m_hasNext__()) {
     let handler = /**@type {IsCallbackPropertyHandler}*/ ($Casts.$to(iterator.m_next__(), IsCallbackPropertyHandler));
     if (!handler.m_removeChartScope__java_lang_String(chart.m_getId__())) {
      iterator.m_remove__();
     }
    }
   }));
  }
 }
 //Default method forwarding stub.
 /** @override */
 m_onAfterConfigure__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  ChartsLifecycleListener.m_onAfterConfigure__$default__org_pepstock_charba_client_ChartsLifecycleListener__org_pepstock_charba_client_IsChart(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_onAfterDestroy__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  ChartsLifecycleListener.m_onAfterDestroy__$default__org_pepstock_charba_client_ChartsLifecycleListener__org_pepstock_charba_client_IsChart(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_onAfterInit__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  ChartsLifecycleListener.m_onAfterInit__$default__org_pepstock_charba_client_ChartsLifecycleListener__org_pepstock_charba_client_IsChart(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_onBeforeConfigure__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  ChartsLifecycleListener.m_onBeforeConfigure__$default__org_pepstock_charba_client_ChartsLifecycleListener__org_pepstock_charba_client_IsChart(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_onBeforeInit__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  ChartsLifecycleListener.m_onBeforeInit__$default__org_pepstock_charba_client_ChartsLifecycleListener__org_pepstock_charba_client_IsChart(this, arg0);
 }
 
 static $clinit() {
  CallbackPropertyNotifier.$clinit = () =>{};
  CallbackPropertyNotifier.$loadModules();
  j_l_Object.$clinit();
  ChartsLifecycleListener.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CallbackPropertyNotifier;
 }
 
 static $loadModules() {
  Runnable = goog.module.get('java.lang.Runnable$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  CallbackPropertyManager = goog.module.get('org.pepstock.charba.client.commons.CallbackPropertyManager$impl');
  IsCallbackPropertyHandler = goog.module.get('org.pepstock.charba.client.commons.IsCallbackPropertyHandler$impl');
  CScheduler = goog.module.get('org.pepstock.charba.client.utils.CScheduler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ChartsLifecycleListener.$markImplementor(CallbackPropertyNotifier);
$Util.$setClassMetadata(CallbackPropertyNotifier, "org.pepstock.charba.client.commons.CallbackPropertyManager$CallbackPropertyNotifier");

exports = CallbackPropertyNotifier;

//# sourceMappingURL=CallbackPropertyManager$CallbackPropertyNotifier.js.map
