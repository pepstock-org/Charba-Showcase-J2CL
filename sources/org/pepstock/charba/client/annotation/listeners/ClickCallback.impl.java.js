goog.module('org.pepstock.charba.client.annotation.listeners.ClickCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let AbstractAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.annotation.listeners.ClickCallback.$LambdaAdaptor$impl');

/**
 * @interface
 */
class ClickCallback {
 /** @abstract */
 m_onClick__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_annotation_AbstractAnnotation(/** IsChart */ chart, /** AbstractAnnotation */ annotation) {}
 /** @return {ClickCallback} */
 static $adapt(/** ?function(IsChart, AbstractAnnotation):void */ fn) {
  ClickCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ClickCallback.$clinit = () =>{};
  ClickCallback.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_listeners_ClickCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_listeners_ClickCallback;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.annotation.listeners.ClickCallback.$LambdaAdaptor$impl');
 }
}
ClickCallback.$markImplementor(/**@type {Function}*/ (ClickCallback));
$Util.$setClassMetadataForInterface(ClickCallback, "org.pepstock.charba.client.annotation.listeners.ClickCallback");

exports = ClickCallback;

//# sourceMappingURL=ClickCallback.js.map
