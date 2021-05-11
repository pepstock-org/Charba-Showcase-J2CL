goog.module('org.pepstock.charba.client.zoom.callbacks.ModeCallback.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ModeCallback = goog.require('org.pepstock.charba.client.zoom.callbacks.ModeCallback$impl');

let InteractionAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionAxis$impl');
let ZoomContext = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomContext$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ModeCallback}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(ZoomContext):InteractionAxis */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(ZoomContext):InteractionAxis}*/
  this.f_fn__org_pepstock_charba_client_zoom_callbacks_ModeCallback_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_zoom_callbacks_ModeCallback_$LambdaAdaptor__org_pepstock_charba_client_zoom_callbacks_ModeCallback_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_zoom_callbacks_ModeCallback_$LambdaAdaptor__org_pepstock_charba_client_zoom_callbacks_ModeCallback_$JsFunction(/** ?function(ZoomContext):InteractionAxis */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_zoom_callbacks_ModeCallback_$LambdaAdaptor = fn;
 }
 /** @return {InteractionAxis} */
 m_invoke__org_pepstock_charba_client_zoom_ZoomContext(/** ZoomContext */ arg0) {
  let /** ?function(ZoomContext):InteractionAxis */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_zoom_callbacks_ModeCallback_$LambdaAdaptor, $function(arg0));
 }
 //Bridge method.
 /** @override @return {InteractionAxis} */
 m_invoke__org_pepstock_charba_client_callbacks_ChartContext(/** ZoomContext */ arg0) {
  return this.m_invoke__org_pepstock_charba_client_zoom_ZoomContext(/**@type {ZoomContext}*/ ($Casts.$to(arg0, ZoomContext)));
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
 
 static $loadModules() {
  ZoomContext = goog.module.get('org.pepstock.charba.client.zoom.ZoomContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
ModeCallback.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.zoom.callbacks.ModeCallback$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=ModeCallback$$LambdaAdaptor.js.map
