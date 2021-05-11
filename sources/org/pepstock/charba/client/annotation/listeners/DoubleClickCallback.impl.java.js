goog.module('org.pepstock.charba.client.annotation.listeners.DoubleClickCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.annotation.listeners.DoubleClickCallback.$LambdaAdaptor$impl');

/**
 * @interface
 */
class DoubleClickCallback {
 /** @abstract */
 m_onDoubleClick__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_annotation_AbstractAnnotation(/** IsChart */ chart, /** AbstractAnnotation */ annotation) {}
 /** @return {DoubleClickCallback} */
 static $adapt(/** ?function(IsChart, AbstractAnnotation):void */ fn) {
  DoubleClickCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  DoubleClickCallback.$clinit = () =>{};
  DoubleClickCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_listeners_DoubleClickCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_listeners_DoubleClickCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.annotation.listeners.DoubleClickCallback.$LambdaAdaptor$impl');
 }
}
DoubleClickCallback.$markImplementor(/**@type {Function}*/ (DoubleClickCallback));
$Util.$setClassMetadataForInterface(DoubleClickCallback, "org.pepstock.charba.client.annotation.listeners.DoubleClickCallback");

exports = DoubleClickCallback;

//# sourceMappingURL=DoubleClickCallback.js.map
