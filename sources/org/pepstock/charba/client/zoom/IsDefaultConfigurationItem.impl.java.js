goog.module('org.pepstock.charba.client.zoom.IsDefaultConfigurationItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let InteractionAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionAxis$impl');
let AbstractConfigurationItem = goog.forwardDeclare('org.pepstock.charba.client.zoom.AbstractConfigurationItem$impl');
let CompletedCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.CompletedCallback$impl');
let ModeCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.ModeCallback$impl');
let ProgressCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.ProgressCallback$impl');
let RejectedCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.RejectedCallback$impl');
let StartCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.StartCallback$impl');

/**
 * @interface
 */
class IsDefaultConfigurationItem {
 /** @abstract @return {InteractionAxis} */
 m_getMode__() {}
 /** @abstract @return {InteractionAxis} */
 m_getOverScaleMode__() {}
 /** @abstract @return {ModeCallback} */
 m_getModeCallback__() {}
 /** @abstract @return {ModeCallback} */
 m_getOverScaleModeCallback__() {}
 /** @abstract @return {ProgressCallback} */
 m_getProgressCallback__() {}
 /** @abstract @return {CompletedCallback} */
 m_getCompletedCallback__() {}
 /** @abstract @return {RejectedCallback} */
 m_getRejectedCallback__() {}
 /** @abstract @return {StartCallback} */
 m_getStartCallback__() {}
 /** @return {InteractionAxis} */
 static m_getMode__$default__org_pepstock_charba_client_zoom_IsDefaultConfigurationItem(/** !IsDefaultConfigurationItem */ $thisArg) {
  IsDefaultConfigurationItem.$clinit();
  return AbstractConfigurationItem.f_DEFAULT_MODE__org_pepstock_charba_client_zoom_AbstractConfigurationItem;
 }
 /** @return {InteractionAxis} */
 static m_getOverScaleMode__$default__org_pepstock_charba_client_zoom_IsDefaultConfigurationItem(/** !IsDefaultConfigurationItem */ $thisArg) {
  IsDefaultConfigurationItem.$clinit();
  return AbstractConfigurationItem.f_DEFAULT_OVER_SCALE_MODE__org_pepstock_charba_client_zoom_AbstractConfigurationItem;
 }
 /** @return {ModeCallback} */
 static m_getModeCallback__$default__org_pepstock_charba_client_zoom_IsDefaultConfigurationItem(/** !IsDefaultConfigurationItem */ $thisArg) {
  IsDefaultConfigurationItem.$clinit();
  return null;
 }
 /** @return {ModeCallback} */
 static m_getOverScaleModeCallback__$default__org_pepstock_charba_client_zoom_IsDefaultConfigurationItem(/** !IsDefaultConfigurationItem */ $thisArg) {
  IsDefaultConfigurationItem.$clinit();
  return null;
 }
 /** @return {ProgressCallback} */
 static m_getProgressCallback__$default__org_pepstock_charba_client_zoom_IsDefaultConfigurationItem(/** !IsDefaultConfigurationItem */ $thisArg) {
  IsDefaultConfigurationItem.$clinit();
  return null;
 }
 /** @return {CompletedCallback} */
 static m_getCompletedCallback__$default__org_pepstock_charba_client_zoom_IsDefaultConfigurationItem(/** !IsDefaultConfigurationItem */ $thisArg) {
  IsDefaultConfigurationItem.$clinit();
  return null;
 }
 /** @return {RejectedCallback} */
 static m_getRejectedCallback__$default__org_pepstock_charba_client_zoom_IsDefaultConfigurationItem(/** !IsDefaultConfigurationItem */ $thisArg) {
  IsDefaultConfigurationItem.$clinit();
  return null;
 }
 /** @return {StartCallback} */
 static m_getStartCallback__$default__org_pepstock_charba_client_zoom_IsDefaultConfigurationItem(/** !IsDefaultConfigurationItem */ $thisArg) {
  IsDefaultConfigurationItem.$clinit();
  return null;
 }
 
 static $clinit() {
  IsDefaultConfigurationItem.$clinit = () =>{};
  IsDefaultConfigurationItem.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_zoom_IsDefaultConfigurationItem = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_zoom_IsDefaultConfigurationItem;
 }
 
 static $loadModules() {
  AbstractConfigurationItem = goog.module.get('org.pepstock.charba.client.zoom.AbstractConfigurationItem$impl');
 }
}
IsDefaultConfigurationItem.$markImplementor(/**@type {Function}*/ (IsDefaultConfigurationItem));
$Util.$setClassMetadataForInterface(IsDefaultConfigurationItem, "org.pepstock.charba.client.zoom.IsDefaultConfigurationItem");

exports = IsDefaultConfigurationItem;

//# sourceMappingURL=IsDefaultConfigurationItem.js.map
