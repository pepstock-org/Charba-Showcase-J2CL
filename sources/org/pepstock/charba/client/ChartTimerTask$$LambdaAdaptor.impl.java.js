goog.module('org.pepstock.charba.client.ChartTimerTask.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ChartTimerTask = goog.require('org.pepstock.charba.client.ChartTimerTask$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');

/**
 * @implements {ChartTimerTask}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(IsChart):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(IsChart):void}*/
  this.f_fn__org_pepstock_charba_client_ChartTimerTask_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_ChartTimerTask_$LambdaAdaptor__org_pepstock_charba_client_ChartTimerTask_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_ChartTimerTask_$LambdaAdaptor__org_pepstock_charba_client_ChartTimerTask_$JsFunction(/** ?function(IsChart):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_ChartTimerTask_$LambdaAdaptor = fn;
 }
 /** @override */
 m_execute__org_pepstock_charba_client_IsChart(/** IsChart */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_ChartTimerTask_$LambdaAdaptor;
   $function(arg0);
  }
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
ChartTimerTask.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.ChartTimerTask$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=ChartTimerTask$$LambdaAdaptor.js.map
