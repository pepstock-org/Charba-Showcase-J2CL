goog.module('com.google.gwt.core.client.EntryPoint.$LambdaAdaptor$impl');

const EntryPoint = goog.require('com.google.gwt.core.client.EntryPoint$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @implements {EntryPoint}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():void}*/
  this.f_fn__com_google_gwt_core_client_EntryPoint_$LambdaAdaptor;
  this.$ctor__com_google_gwt_core_client_EntryPoint_$LambdaAdaptor__com_google_gwt_core_client_EntryPoint_$JsFunction(fn);
 }
 
 $ctor__com_google_gwt_core_client_EntryPoint_$LambdaAdaptor__com_google_gwt_core_client_EntryPoint_$JsFunction(/** ?function():void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__com_google_gwt_core_client_EntryPoint_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onModuleLoad__() {
  {
   let $function = this.f_fn__com_google_gwt_core_client_EntryPoint_$LambdaAdaptor;
   $function();
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
EntryPoint.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "com.google.gwt.core.client.EntryPoint$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=EntryPoint$$LambdaAdaptor.js.map
