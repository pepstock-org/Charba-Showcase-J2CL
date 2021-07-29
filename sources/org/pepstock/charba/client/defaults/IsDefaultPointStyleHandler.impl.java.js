goog.module('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let PointStyleType = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyleType$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

/**
 * @interface
 */
class IsDefaultPointStyleHandler {
 /** @abstract @return {PointStyle} */
 m_getPointStyle__() {}
 /** @abstract @return {PointStyleType} */
 m_getPointStyleType__() {}
 /** @abstract @return {HTMLImageElement} */
 m_getPointStyleAsImage__() {}
 /** @abstract @return {HTMLCanvasElement} */
 m_getPointStyleAsCanvas__() {}
 /** @return {PointStyle} */
 static m_getPointStyle__$default__org_pepstock_charba_client_defaults_IsDefaultPointStyleHandler(/** !IsDefaultPointStyleHandler */ $thisArg) {
  IsDefaultPointStyleHandler.$clinit();
  return PointStyle.f_CIRCLE__org_pepstock_charba_client_enums_PointStyle;
 }
 /** @return {PointStyleType} */
 static m_getPointStyleType__$default__org_pepstock_charba_client_defaults_IsDefaultPointStyleHandler(/** !IsDefaultPointStyleHandler */ $thisArg) {
  IsDefaultPointStyleHandler.$clinit();
  return PointStyleType.f_STRING__org_pepstock_charba_client_enums_PointStyleType;
 }
 /** @return {HTMLImageElement} */
 static m_getPointStyleAsImage__$default__org_pepstock_charba_client_defaults_IsDefaultPointStyleHandler(/** !IsDefaultPointStyleHandler */ $thisArg) {
  IsDefaultPointStyleHandler.$clinit();
  return Undefined.f_IMAGE_ELEMENT__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {HTMLCanvasElement} */
 static m_getPointStyleAsCanvas__$default__org_pepstock_charba_client_defaults_IsDefaultPointStyleHandler(/** !IsDefaultPointStyleHandler */ $thisArg) {
  IsDefaultPointStyleHandler.$clinit();
  return Undefined.f_CANVAS_ELEMENT__org_pepstock_charba_client_items_Undefined;
 }
 
 static $clinit() {
  IsDefaultPointStyleHandler.$clinit = () =>{};
  IsDefaultPointStyleHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultPointStyleHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultPointStyleHandler;
 }
 
 static $loadModules() {
  PointStyle = goog.module.get('org.pepstock.charba.client.enums.PointStyle$impl');
  PointStyleType = goog.module.get('org.pepstock.charba.client.enums.PointStyleType$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
IsDefaultPointStyleHandler.$markImplementor(/**@type {Function}*/ (IsDefaultPointStyleHandler));
$Util.$setClassMetadataForInterface(IsDefaultPointStyleHandler, "org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler");

exports = IsDefaultPointStyleHandler;

//# sourceMappingURL=IsDefaultPointStyleHandler.js.map
