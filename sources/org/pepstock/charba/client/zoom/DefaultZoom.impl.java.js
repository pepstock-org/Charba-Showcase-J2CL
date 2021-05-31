goog.module('org.pepstock.charba.client.zoom.DefaultZoom$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultZoom = goog.require('org.pepstock.charba.client.zoom.IsDefaultZoom$impl');

let InteractionAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionAxis$impl');
let DefaultDrag = goog.forwardDeclare('org.pepstock.charba.client.zoom.DefaultDrag$impl');
let DefaultPinch = goog.forwardDeclare('org.pepstock.charba.client.zoom.DefaultPinch$impl');
let DefaultWheel = goog.forwardDeclare('org.pepstock.charba.client.zoom.DefaultWheel$impl');
let IsDefaultConfigurationItem = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultConfigurationItem$impl');
let IsDefaultDrag = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultDrag$impl');
let IsDefaultPinch = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultPinch$impl');
let IsDefaultWheel = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultWheel$impl');
let CompletedCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.CompletedCallback$impl');
let ModeCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.ModeCallback$impl');
let ProgressCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.ProgressCallback$impl');
let RejectedCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.RejectedCallback$impl');
let StartCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.StartCallback$impl');

/**
 * @implements {IsDefaultZoom}
 */
class DefaultZoom extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultZoom} */
 static $create__() {
  DefaultZoom.$clinit();
  let $instance = new DefaultZoom();
  $instance.$ctor__org_pepstock_charba_client_zoom_DefaultZoom__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_DefaultZoom__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {IsDefaultDrag} */
 m_getDrag__() {
  return DefaultDrag.f_INSTANCE__org_pepstock_charba_client_zoom_DefaultDrag;
 }
 /** @override @return {IsDefaultWheel} */
 m_getWheel__() {
  return DefaultWheel.f_INSTANCE__org_pepstock_charba_client_zoom_DefaultWheel;
 }
 /** @override @return {IsDefaultPinch} */
 m_getPinch__() {
  return DefaultPinch.f_INSTANCE__org_pepstock_charba_client_zoom_DefaultPinch;
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
 
 static $clinit() {
  DefaultZoom.$clinit = () =>{};
  DefaultZoom.$loadModules();
  j_l_Object.$clinit();
  IsDefaultConfigurationItem.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultZoom;
 }
 
 static $loadModules() {
  DefaultDrag = goog.module.get('org.pepstock.charba.client.zoom.DefaultDrag$impl');
  DefaultPinch = goog.module.get('org.pepstock.charba.client.zoom.DefaultPinch$impl');
  DefaultWheel = goog.module.get('org.pepstock.charba.client.zoom.DefaultWheel$impl');
  IsDefaultConfigurationItem = goog.module.get('org.pepstock.charba.client.zoom.IsDefaultConfigurationItem$impl');
 }
}
IsDefaultZoom.$markImplementor(DefaultZoom);
$Util.$setClassMetadata(DefaultZoom, "org.pepstock.charba.client.zoom.DefaultZoom");

exports = DefaultZoom;

//# sourceMappingURL=DefaultZoom.js.map
