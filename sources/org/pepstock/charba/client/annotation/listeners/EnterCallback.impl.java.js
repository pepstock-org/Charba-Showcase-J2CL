goog.module('org.pepstock.charba.client.annotation.listeners.EnterCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.annotation.listeners.EnterCallback.$LambdaAdaptor$impl');

/**
 * @interface
 */
class EnterCallback {
 /** @abstract */
 m_onEnter__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_annotation_AbstractAnnotation(/** IsChart */ chart, /** AbstractAnnotation */ annotation) {}
 /** @return {EnterCallback} */
 static $adapt(/** ?function(IsChart, AbstractAnnotation):void */ fn) {
  EnterCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  EnterCallback.$clinit = () =>{};
  EnterCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_listeners_EnterCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_listeners_EnterCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.annotation.listeners.EnterCallback.$LambdaAdaptor$impl');
 }
}
EnterCallback.$markImplementor(/**@type {Function}*/ (EnterCallback));
$Util.$setClassMetadataForInterface(EnterCallback, "org.pepstock.charba.client.annotation.listeners.EnterCallback");

exports = EnterCallback;

//# sourceMappingURL=EnterCallback.js.map
