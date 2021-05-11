goog.module('org.pepstock.charba.client.zoom.DefaultPan$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultPan = goog.require('org.pepstock.charba.client.zoom.IsDefaultPan$impl');

let InteractionAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionAxis$impl');
let ModifierKey = goog.forwardDeclare('org.pepstock.charba.client.enums.ModifierKey$impl');
let IsDefaultConfigurationItem = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultConfigurationItem$impl');
let CompletedCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.CompletedCallback$impl');
let ModeCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.ModeCallback$impl');
let ProgressCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.ProgressCallback$impl');
let RejectedCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.RejectedCallback$impl');
let StartCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.StartCallback$impl');

/**
 * @implements {IsDefaultPan}
 */
class DefaultPan extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultPan} */
 static $create__() {
  DefaultPan.$clinit();
  let $instance = new DefaultPan();
  $instance.$ctor__org_pepstock_charba_client_zoom_DefaultPan__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_DefaultPan__() {
  this.$ctor__java_lang_Object__();
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
  return IsDefaultPan.m_getThreshold__$default__org_pepstock_charba_client_zoom_IsDefaultPan(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isEnabled__() {
  return IsDefaultConfigurationItem.m_isEnabled__$default__org_pepstock_charba_client_zoom_IsDefaultConfigurationItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {ModifierKey} */
 m_getModifierKey__() {
  return IsDefaultPan.m_getModifierKey__$default__org_pepstock_charba_client_zoom_IsDefaultPan(this);
 }
 
 static $clinit() {
  DefaultPan.$clinit = () =>{};
  DefaultPan.$loadModules();
  j_l_Object.$clinit();
  IsDefaultPan.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultPan;
 }
 
 static $loadModules() {
  IsDefaultConfigurationItem = goog.module.get('org.pepstock.charba.client.zoom.IsDefaultConfigurationItem$impl');
 }
}
IsDefaultPan.$markImplementor(DefaultPan);
$Util.$setClassMetadata(DefaultPan, "org.pepstock.charba.client.zoom.DefaultPan");

exports = DefaultPan;

//# sourceMappingURL=DefaultPan.js.map
