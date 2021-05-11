goog.module('org.pepstock.charba.client.commons.NativeArrayContainerFactory.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeArrayContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeArrayContainerFactory$impl');

let NativeArrayContainer = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeArrayContainer$impl');

/**
 * @template A, T
 * @implements {NativeArrayContainerFactory<A, T>}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(A):T */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(A):T}*/
  this.f_fn__org_pepstock_charba_client_commons_NativeArrayContainerFactory_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_commons_NativeArrayContainerFactory_$LambdaAdaptor__org_pepstock_charba_client_commons_NativeArrayContainerFactory_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_commons_NativeArrayContainerFactory_$LambdaAdaptor__org_pepstock_charba_client_commons_NativeArrayContainerFactory_$JsFunction(/** ?function(A):T */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_commons_NativeArrayContainerFactory_$LambdaAdaptor = fn;
 }
 /** @override @return {T} */
 m_create__org_pepstock_charba_client_commons_Array(/** A */ arg0) {
  let /** ?function(A):T */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_commons_NativeArrayContainerFactory_$LambdaAdaptor, $function(arg0));
 }
 //Default method forwarding stub.
 /** @override @return {T} */
 m_create__() {
  return NativeArrayContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeArrayContainerFactory(this);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  NativeArrayContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
NativeArrayContainerFactory.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.commons.NativeArrayContainerFactory$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=NativeArrayContainerFactory$$LambdaAdaptor.js.map
