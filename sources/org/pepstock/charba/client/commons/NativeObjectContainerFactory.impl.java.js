goog.module('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let NativeObjectContainer = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainerFactory.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class NativeObjectContainerFactory {
 /** @abstract @return {T} */
 m_create__() {}
 /** @abstract @return {T} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {}
 /** @template T @return {NativeObjectContainerFactory<T>} */
 static $adapt(/** ?function(?):T */ fn) {
  NativeObjectContainerFactory.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 /** @template T @return {T} */
 static m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(/** !NativeObjectContainerFactory<T> */ $thisArg) {
  NativeObjectContainerFactory.$clinit();
  return $thisArg.m_create__org_pepstock_charba_client_commons_NativeObject(null);
 }
 
 static $clinit() {
  NativeObjectContainerFactory.$clinit = () =>{};
  NativeObjectContainerFactory.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_commons_NativeObjectContainerFactory = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_commons_NativeObjectContainerFactory;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.commons.NativeObjectContainerFactory.$LambdaAdaptor$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(/**@type {Function}*/ (NativeObjectContainerFactory));
$Util.$setClassMetadataForInterface(NativeObjectContainerFactory, "org.pepstock.charba.client.commons.NativeObjectContainerFactory");

exports = NativeObjectContainerFactory;

//# sourceMappingURL=NativeObjectContainerFactory.js.map
