goog.module('org.pepstock.charba.client.zoom.callbacks.StartCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const StartCallback = goog.require('org.pepstock.charba.client.zoom.callbacks.StartCallback$impl');

let ZoomContext = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomContext$impl');

/**
 * @implements {StartCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ZoomContext):boolean */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ZoomContext):boolean}*/
  this.f_fn__org_pepstock_charba_client_zoom_callbacks_StartCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_zoom_callbacks_StartCallback_$LambdaAdaptor__org_pepstock_charba_client_zoom_callbacks_StartCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_zoom_callbacks_StartCallback_$LambdaAdaptor__org_pepstock_charba_client_zoom_callbacks_StartCallback_$JsFunction(/** ?function(ZoomContext):boolean */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_zoom_callbacks_StartCallback_$LambdaAdaptor = fn;
 }
 /** @override @return {boolean} */
 m_onStart__org_pepstock_charba_client_zoom_ZoomContext(/** ZoomContext */ arg0) {
  let /** ?function(ZoomContext):boolean */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_zoom_callbacks_StartCallback_$LambdaAdaptor, $function(arg0));
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
StartCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.zoom.callbacks.StartCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=StartCallback$$LambdaAdaptor.js.map
