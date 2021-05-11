goog.module('org.pepstock.charba.client.zoom.IsDefaultZoom$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultConfigurationItem = goog.require('org.pepstock.charba.client.zoom.IsDefaultConfigurationItem$impl');

let ModifierKey = goog.forwardDeclare('org.pepstock.charba.client.enums.ModifierKey$impl');
let IsDefaultDrag = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultDrag$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultZoom.$LambdaAdaptor$impl');
let Zoom = goog.forwardDeclare('org.pepstock.charba.client.zoom.Zoom$impl');

/**
 * @interface
 * @extends {IsDefaultConfigurationItem}
 */
class IsDefaultZoom {
 /** @abstract @override @return {number} */
 m_getThreshold__() {}
 /** @abstract @return {boolean} */
 m_isDrag__() {}
 /** @abstract @return {IsDefaultDrag} */
 m_getDrag__() {}
 /** @abstract @return {number} */
 m_getSpeed__() {}
 /** @abstract @return {ModifierKey} */
 m_getWheelModifierKey__() {}
 /** @return {IsDefaultZoom} */
 static $adapt(/** ?function():IsDefaultDrag */ fn) {
  IsDefaultZoom.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {number} */
 static m_getThreshold__$default__org_pepstock_charba_client_zoom_IsDefaultZoom(/** !IsDefaultZoom */ $thisArg) {
  IsDefaultZoom.$clinit();
  return Zoom.f_DEFAULT_THRESHOLD__org_pepstock_charba_client_zoom_Zoom;
 }
 /** @return {boolean} */
 static m_isDrag__$default__org_pepstock_charba_client_zoom_IsDefaultZoom(/** !IsDefaultZoom */ $thisArg) {
  IsDefaultZoom.$clinit();
  return Zoom.f_DEFAULT_DRAG__org_pepstock_charba_client_zoom_Zoom;
 }
 /** @return {number} */
 static m_getSpeed__$default__org_pepstock_charba_client_zoom_IsDefaultZoom(/** !IsDefaultZoom */ $thisArg) {
  IsDefaultZoom.$clinit();
  return Zoom.f_DEFAULT_SPEED__org_pepstock_charba_client_zoom_Zoom;
 }
 /** @return {ModifierKey} */
 static m_getWheelModifierKey__$default__org_pepstock_charba_client_zoom_IsDefaultZoom(/** !IsDefaultZoom */ $thisArg) {
  IsDefaultZoom.$clinit();
  return null;
 }
 
 static $clinit() {
  IsDefaultZoom.$clinit = () =>{};
  IsDefaultZoom.$loadModules();
  IsDefaultConfigurationItem.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultConfigurationItem.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_zoom_IsDefaultZoom = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_zoom_IsDefaultZoom;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.zoom.IsDefaultZoom.$LambdaAdaptor$impl');
  Zoom = goog.module.get('org.pepstock.charba.client.zoom.Zoom$impl');
 }
}
IsDefaultZoom.$markImplementor(/**@type {Function}*/ (IsDefaultZoom));
$Util.$setClassMetadataForInterface(IsDefaultZoom, "org.pepstock.charba.client.zoom.IsDefaultZoom");

exports = IsDefaultZoom;

//# sourceMappingURL=IsDefaultZoom.js.map
