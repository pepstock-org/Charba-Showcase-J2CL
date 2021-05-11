goog.module('org.pepstock.charba.client.commons.NativeArrayContainerFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let NativeArrayContainer = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeArrayContainer$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeArrayContainerFactory.$LambdaAdaptor$impl');

/**
 * @interface
 * @template A, T
 */
class NativeArrayContainerFactory {
 /** @abstract @return {T} */
 m_create__() {}
 /** @abstract @return {T} */
 m_create__org_pepstock_charba_client_commons_Array(/** A */ nativeArray) {}
 /** @template A, T @return {NativeArrayContainerFactory<A, T>} */
 static $adapt(/** ?function(A):T */ fn) {
  NativeArrayContainerFactory.$clinit();
  return /**@type {!$LambdaAdaptor<A, T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @template A, T @return {T} */
 static m_create__$default__org_pepstock_charba_client_commons_NativeArrayContainerFactory(/** !NativeArrayContainerFactory<A, T> */ $thisArg) {
  NativeArrayContainerFactory.$clinit();
  return $thisArg.m_create__org_pepstock_charba_client_commons_Array(null);
 }
 
 static $clinit() {
  NativeArrayContainerFactory.$clinit = () =>{};
  NativeArrayContainerFactory.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_commons_NativeArrayContainerFactory = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_commons_NativeArrayContainerFactory;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.commons.NativeArrayContainerFactory.$LambdaAdaptor$impl');
 }
}
NativeArrayContainerFactory.$markImplementor(/**@type {Function}*/ (NativeArrayContainerFactory));
$Util.$setClassMetadataForInterface(NativeArrayContainerFactory, "org.pepstock.charba.client.commons.NativeArrayContainerFactory");

exports = NativeArrayContainerFactory;

//# sourceMappingURL=NativeArrayContainerFactory.js.map
