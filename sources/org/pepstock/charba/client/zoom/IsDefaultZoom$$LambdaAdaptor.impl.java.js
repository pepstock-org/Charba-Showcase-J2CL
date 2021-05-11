goog.module('org.pepstock.charba.client.zoom.IsDefaultZoom.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultZoom = goog.require('org.pepstock.charba.client.zoom.IsDefaultZoom$impl');

let InteractionAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionAxis$impl');
let ModifierKey = goog.forwardDeclare('org.pepstock.charba.client.enums.ModifierKey$impl');
let IsDefaultConfigurationItem = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultConfigurationItem$impl');
let IsDefaultDrag = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultDrag$impl');
let CompletedCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.CompletedCallback$impl');
let ModeCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.ModeCallback$impl');
let ProgressCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.ProgressCallback$impl');
let RejectedCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.RejectedCallback$impl');
let StartCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.StartCallback$impl');

/**
 * @implements {IsDefaultZoom}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():IsDefaultDrag */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():IsDefaultDrag}*/
  this.f_fn__org_pepstock_charba_client_zoom_IsDefaultZoom_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_zoom_IsDefaultZoom_$LambdaAdaptor__org_pepstock_charba_client_zoom_IsDefaultZoom_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_zoom_IsDefaultZoom_$LambdaAdaptor__org_pepstock_charba_client_zoom_IsDefaultZoom_$JsFunction(/** ?function():IsDefaultDrag */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_zoom_IsDefaultZoom_$LambdaAdaptor = fn;
 }
 /** @override @return {IsDefaultDrag} */
 m_getDrag__() {
  let /** ?function():IsDefaultDrag */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_zoom_IsDefaultZoom_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {CompletedCallback} */
 m_getCompletedCallback__() {
  return IsDefaultConfigurationItem.m_getCompletedCallback__$default__org_pepstock_charba_client_zoom_IsDefaultConfigurationItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {InteractionAxis} */
 m_getMode__() {
  return IsDefaultConfigurationItem.m_getMode__$default__org_pepstock_charba_client_zoom_IsDefaultConfigurationItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {ModeCallback} */
 m_getModeCallback__() {
  return IsDefaultConfigurationItem.m_getModeCallback__$default__org_pepstock_charba_client_zoom_IsDefaultConfigurationItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {InteractionAxis} */
 m_getOverScaleMode__() {
  return IsDefaultConfigurationItem.m_getOverScaleMode__$default__org_pepstock_charba_client_zoom_IsDefaultConfigurationItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {ModeCallback} */
 m_getOverScaleModeCallback__() {
  return IsDefaultConfigurationItem.m_getOverScaleModeCallback__$default__org_pepstock_charba_client_zoom_IsDefaultConfigurationItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {ProgressCallback} */
 m_getProgressCallback__() {
  return IsDefaultConfigurationItem.m_getProgressCallback__$default__org_pepstock_charba_client_zoom_IsDefaultConfigurationItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {RejectedCallback} */
 m_getRejectedCallback__() {
  return IsDefaultConfigurationItem.m_getRejectedCallback__$default__org_pepstock_charba_client_zoom_IsDefaultConfigurationItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {StartCallback} */
 m_getStartCallback__() {
  return IsDefaultConfigurationItem.m_getStartCallback__$default__org_pepstock_charba_client_zoom_IsDefaultConfigurationItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getThreshold__() {
  return IsDefaultZoom.m_getThreshold__$default__org_pepstock_charba_client_zoom_IsDefaultZoom(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isEnabled__() {
  return IsDefaultConfigurationItem.m_isEnabled__$default__org_pepstock_charba_client_zoom_IsDefaultConfigurationItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getSpeed__() {
  return IsDefaultZoom.m_getSpeed__$default__org_pepstock_charba_client_zoom_IsDefaultZoom(this);
 }
 //Default method forwarding stub.
 /** @override @return {ModifierKey} */
 m_getWheelModifierKey__() {
  return IsDefaultZoom.m_getWheelModifierKey__$default__org_pepstock_charba_client_zoom_IsDefaultZoom(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isDrag__() {
  return IsDefaultZoom.m_isDrag__$default__org_pepstock_charba_client_zoom_IsDefaultZoom(this);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  IsDefaultZoom.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {
  IsDefaultConfigurationItem = goog.module.get('org.pepstock.charba.client.zoom.IsDefaultConfigurationItem$impl');
 }
}
IsDefaultZoom.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.zoom.IsDefaultZoom$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=IsDefaultZoom$$LambdaAdaptor.js.map
