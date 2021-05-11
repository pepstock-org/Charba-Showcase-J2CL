goog.module('org.pepstock.charba.client.colors.tiles.IsShape$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ShapeDrawer = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');

/**
 * @interface
 * @extends {Key}
 */
class IsShape {
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_colors_tiles_IsShape(/** IsShape */ shape) {
  IsShape.$clinit();
  return Key.m_isValid__org_pepstock_charba_client_commons_Key(shape) && !$Equality.$same(shape.m_getKeyPrefix__(), null) && !$Equality.$same(shape.m_getDrawer__(), null);
 }
 
 static m_checkIfValid__org_pepstock_charba_client_colors_tiles_IsShape(/** IsShape */ shape) {
  IsShape.$clinit();
  Checker.m_assertCheck__boolean__java_lang_String(IsShape.m_isValid__org_pepstock_charba_client_colors_tiles_IsShape(shape), "Shape is null or not consistent");
 }
 /** @abstract @return {ShapeDrawer} */
 m_getDrawer__() {}
 /** @abstract @return {?string} */
 m_getKeyPrefix__() {}
 
 static $clinit() {
  IsShape.$clinit = () =>{};
  IsShape.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Key.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_colors_tiles_IsShape = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_colors_tiles_IsShape;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
 }
}
IsShape.$markImplementor(/**@type {Function}*/ (IsShape));
$Util.$setClassMetadataForInterface(IsShape, "org.pepstock.charba.client.colors.tiles.IsShape");

exports = IsShape;

//# sourceMappingURL=IsShape.js.map
