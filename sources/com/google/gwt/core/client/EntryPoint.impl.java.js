goog.module('com.google.gwt.core.client.EntryPoint$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('com.google.gwt.core.client.EntryPoint.$LambdaAdaptor$impl');

/**
 * @interface
 */
class EntryPoint {
 /** @abstract */
 m_onModuleLoad__() {}
 /** @return {EntryPoint} */
 static $adapt(/** ?function():void */ fn) {
  EntryPoint.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  EntryPoint.$clinit = () =>{};
  EntryPoint.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__com_google_gwt_core_client_EntryPoint = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__com_google_gwt_core_client_EntryPoint;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('com.google.gwt.core.client.EntryPoint.$LambdaAdaptor$impl');
 }
}
EntryPoint.$markImplementor(/**@type {Function}*/ (EntryPoint));
$Util.$setClassMetadataForInterface(EntryPoint, "com.google.gwt.core.client.EntryPoint");

exports = EntryPoint;

//# sourceMappingURL=EntryPoint.js.map
