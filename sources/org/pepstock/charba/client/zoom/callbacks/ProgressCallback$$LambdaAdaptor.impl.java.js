goog.module('org.pepstock.charba.client.zoom.callbacks.ProgressCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ProgressCallback = goog.require('org.pepstock.charba.client.zoom.callbacks.ProgressCallback$impl');

let ZoomContext = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomContext$impl');

/**
 * @implements {ProgressCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ZoomContext):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ZoomContext):void}*/
  this.f_fn__org_pepstock_charba_client_zoom_callbacks_ProgressCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_zoom_callbacks_ProgressCallback_$LambdaAdaptor__org_pepstock_charba_client_zoom_callbacks_ProgressCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_zoom_callbacks_ProgressCallback_$LambdaAdaptor__org_pepstock_charba_client_zoom_callbacks_ProgressCallback_$JsFunction(/** ?function(ZoomContext):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_zoom_callbacks_ProgressCallback_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onProgress__org_pepstock_charba_client_zoom_ZoomContext(/** ZoomContext */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_zoom_callbacks_ProgressCallback_$LambdaAdaptor;
   $function(arg0);
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
ProgressCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.zoom.callbacks.ProgressCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=ProgressCallback$$LambdaAdaptor.js.map
