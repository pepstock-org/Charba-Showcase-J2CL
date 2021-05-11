goog.module('org.pepstock.charba.client.commons.NativeObjectContainerFactory.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let NativeObjectContainer = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

/**
 * @template T
 * @implements {NativeObjectContainerFactory<T>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(?):T */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(?):T}*/
  this.f_fn__org_pepstock_charba_client_commons_NativeObjectContainerFactory_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainerFactory_$LambdaAdaptor__org_pepstock_charba_client_commons_NativeObjectContainerFactory_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_commons_NativeObjectContainerFactory_$LambdaAdaptor__org_pepstock_charba_client_commons_NativeObjectContainerFactory_$JsFunction(/** ?function(?):T */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_commons_NativeObjectContainerFactory_$LambdaAdaptor = fn;
 }
 /** @override @return {T} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ arg0) {
  let /** ?function(?):T */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_commons_NativeObjectContainerFactory_$LambdaAdaptor, $function(arg0));
 }
 //Default method forwarding stub.
 /** @override @return {T} */
 m_create__() {
  return NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
NativeObjectContainerFactory.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.commons.NativeObjectContainerFactory$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=NativeObjectContainerFactory$$LambdaAdaptor.js.map
