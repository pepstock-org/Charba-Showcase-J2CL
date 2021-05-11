goog.module('org.pepstock.charba.client.ChartTimerTask$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.ChartTimerTask.$LambdaAdaptor$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');

/**
 * @interface
 */
class ChartTimerTask {
 /** @abstract */
 m_execute__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {}
 /** @return {ChartTimerTask} */
 static $adapt(/** ?function(IsChart):void */ fn) {
  ChartTimerTask.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ChartTimerTask.$clinit = () =>{};
  ChartTimerTask.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_ChartTimerTask = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_ChartTimerTask;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.ChartTimerTask.$LambdaAdaptor$impl');
 }
}
ChartTimerTask.$markImplementor(/**@type {Function}*/ (ChartTimerTask));
$Util.$setClassMetadataForInterface(ChartTimerTask, "org.pepstock.charba.client.ChartTimerTask");

exports = ChartTimerTask;

//# sourceMappingURL=ChartTimerTask.js.map
