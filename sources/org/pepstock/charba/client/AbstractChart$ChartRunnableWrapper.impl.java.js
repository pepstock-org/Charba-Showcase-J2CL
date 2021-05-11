goog.module('org.pepstock.charba.client.AbstractChart.ChartRunnableWrapper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Runnable = goog.require('java.lang.Runnable$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ChartTimerTask = goog.forwardDeclare('org.pepstock.charba.client.ChartTimerTask$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');

/**
 * @implements {Runnable}
 */
class ChartRunnableWrapper extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsChart}*/
  this.f_chart__org_pepstock_charba_client_AbstractChart_ChartRunnableWrapper_;
  /**@type {ChartTimerTask}*/
  this.f_task__org_pepstock_charba_client_AbstractChart_ChartRunnableWrapper_;
 }
 /** @return {!ChartRunnableWrapper} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_ChartTimerTask(/** IsChart */ chart, /** ChartTimerTask */ task) {
  ChartRunnableWrapper.$clinit();
  let $instance = new ChartRunnableWrapper();
  $instance.$ctor__org_pepstock_charba_client_AbstractChart_ChartRunnableWrapper__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_ChartTimerTask(chart, task);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_AbstractChart_ChartRunnableWrapper__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_ChartTimerTask(/** IsChart */ chart, /** ChartTimerTask */ task) {
  this.$ctor__java_lang_Object__();
  this.f_chart__org_pepstock_charba_client_AbstractChart_ChartRunnableWrapper_ = chart;
  this.f_task__org_pepstock_charba_client_AbstractChart_ChartRunnableWrapper_ = task;
 }
 /** @override */
 m_run__() {
  this.f_task__org_pepstock_charba_client_AbstractChart_ChartRunnableWrapper_.m_execute__org_pepstock_charba_client_IsChart(this.f_chart__org_pepstock_charba_client_AbstractChart_ChartRunnableWrapper_);
 }
 
 static $clinit() {
  ChartRunnableWrapper.$clinit = () =>{};
  ChartRunnableWrapper.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartRunnableWrapper;
 }
 
 static $loadModules() {}
}
Runnable.$markImplementor(ChartRunnableWrapper);
$Util.$setClassMetadata(ChartRunnableWrapper, "org.pepstock.charba.client.AbstractChart$ChartRunnableWrapper");

exports = ChartRunnableWrapper;

//# sourceMappingURL=AbstractChart$ChartRunnableWrapper.js.map
