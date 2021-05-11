goog.module('org.pepstock.charba.client.annotation.listeners.LeaveCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.annotation.listeners.LeaveCallback.$LambdaAdaptor$impl');

/**
 * @interface
 */
class LeaveCallback {
 /** @abstract */
 m_onLeave__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_annotation_AbstractAnnotation(/** IsChart */ chart, /** AbstractAnnotation */ annotation) {}
 /** @return {LeaveCallback} */
 static $adapt(/** ?function(IsChart, AbstractAnnotation):void */ fn) {
  LeaveCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  LeaveCallback.$clinit = () =>{};
  LeaveCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_listeners_LeaveCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_listeners_LeaveCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.annotation.listeners.LeaveCallback.$LambdaAdaptor$impl');
 }
}
LeaveCallback.$markImplementor(/**@type {Function}*/ (LeaveCallback));
$Util.$setClassMetadataForInterface(LeaveCallback, "org.pepstock.charba.client.annotation.listeners.LeaveCallback");

exports = LeaveCallback;

//# sourceMappingURL=LeaveCallback.js.map
