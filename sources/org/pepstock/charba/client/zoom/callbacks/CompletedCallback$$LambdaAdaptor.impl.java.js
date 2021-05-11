goog.module('org.pepstock.charba.client.zoom.callbacks.CompletedCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CompletedCallback = goog.require('org.pepstock.charba.client.zoom.callbacks.CompletedCallback$impl');

let ZoomContext = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomContext$impl');

/**
 * @implements {CompletedCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ZoomContext):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ZoomContext):void}*/
  this.f_fn__org_pepstock_charba_client_zoom_callbacks_CompletedCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_zoom_callbacks_CompletedCallback_$LambdaAdaptor__org_pepstock_charba_client_zoom_callbacks_CompletedCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_zoom_callbacks_CompletedCallback_$LambdaAdaptor__org_pepstock_charba_client_zoom_callbacks_CompletedCallback_$JsFunction(/** ?function(ZoomContext):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_zoom_callbacks_CompletedCallback_$LambdaAdaptor = fn;
 }
 /** @override */
 m_onCompleted__org_pepstock_charba_client_zoom_ZoomContext(/** ZoomContext */ arg0) {
  {
   let $function = this.f_fn__org_pepstock_charba_client_zoom_callbacks_CompletedCallback_$LambdaAdaptor;
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
CompletedCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.zoom.callbacks.CompletedCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=CompletedCallback$$LambdaAdaptor.js.map
