goog.module('org.pepstock.charba.client.ChartsLifecycleListener$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');

/**
 * @interface
 */
class ChartsLifecycleListener {
 /** @abstract */
 m_onBeforeInit__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract */
 m_onAfterInit__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract */
 m_onBeforeConfigure__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract */
 m_onAfterConfigure__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract */
 m_onBeforeDestroy__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @abstract */
 m_onAfterDestroy__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 
 static m_onBeforeInit__$default__org_pepstock_charba_client_ChartsLifecycleListener__org_pepstock_charba_client_IsChart(/** !ChartsLifecycleListener */ $thisArg, /** IsChart */ chart) {
  ChartsLifecycleListener.$clinit();
 }
 
 static m_onAfterInit__$default__org_pepstock_charba_client_ChartsLifecycleListener__org_pepstock_charba_client_IsChart(/** !ChartsLifecycleListener */ $thisArg, /** IsChart */ chart) {
  ChartsLifecycleListener.$clinit();
 }
 
 static m_onBeforeConfigure__$default__org_pepstock_charba_client_ChartsLifecycleListener__org_pepstock_charba_client_IsChart(/** !ChartsLifecycleListener */ $thisArg, /** IsChart */ chart) {
  ChartsLifecycleListener.$clinit();
 }
 
 static m_onAfterConfigure__$default__org_pepstock_charba_client_ChartsLifecycleListener__org_pepstock_charba_client_IsChart(/** !ChartsLifecycleListener */ $thisArg, /** IsChart */ chart) {
  ChartsLifecycleListener.$clinit();
 }
 
 static m_onBeforeDestroy__$default__org_pepstock_charba_client_ChartsLifecycleListener__org_pepstock_charba_client_IsChart(/** !ChartsLifecycleListener */ $thisArg, /** IsChart */ chart) {
  ChartsLifecycleListener.$clinit();
 }
 
 static m_onAfterDestroy__$default__org_pepstock_charba_client_ChartsLifecycleListener__org_pepstock_charba_client_IsChart(/** !ChartsLifecycleListener */ $thisArg, /** IsChart */ chart) {
  ChartsLifecycleListener.$clinit();
 }
 
 static $clinit() {
  ChartsLifecycleListener.$clinit = () =>{};
  ChartsLifecycleListener.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_ChartsLifecycleListener = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_ChartsLifecycleListener;
 }
 
 static $loadModules() {}
}
ChartsLifecycleListener.$markImplementor(/**@type {Function}*/ (ChartsLifecycleListener));
$Util.$setClassMetadataForInterface(ChartsLifecycleListener, "org.pepstock.charba.client.ChartsLifecycleListener");

exports = ChartsLifecycleListener;

//# sourceMappingURL=ChartsLifecycleListener.js.map
