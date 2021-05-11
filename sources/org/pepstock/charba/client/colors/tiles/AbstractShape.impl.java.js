goog.module('org.pepstock.charba.client.colors.tiles.AbstractShape$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsShape = goog.require('org.pepstock.charba.client.colors.tiles.IsShape$impl');
const ShapeDrawer = goog.require('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @implements {IsShape}
 */
class AbstractShape extends ShapeDrawer {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_shapeName__org_pepstock_charba_client_colors_tiles_AbstractShape_;
  /**@type {?string}*/
  this.f_keyPrefix__org_pepstock_charba_client_colors_tiles_AbstractShape_;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_AbstractShape__java_lang_String(/** ?string */ shapeName) {
  this.$ctor__org_pepstock_charba_client_colors_tiles_ShapeDrawer__();
  this.$init___$p_org_pepstock_charba_client_colors_tiles_AbstractShape();
  this.f_shapeName__org_pepstock_charba_client_colors_tiles_AbstractShape_ = /**@type {?string}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(shapeName, "Context Name of shape"), j_l_String));
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_shapeName__org_pepstock_charba_client_colors_tiles_AbstractShape_;
 }
 /** @override @return {ShapeDrawer} */
 m_getDrawer__() {
  return this;
 }
 /** @override @return {?string} */
 m_getKeyPrefix__() {
  return this.f_keyPrefix__org_pepstock_charba_client_colors_tiles_AbstractShape_;
 }
 
 m_setKeyPrefix__java_lang_String(/** ?string */ keyPrefix) {
  this.f_keyPrefix__org_pepstock_charba_client_colors_tiles_AbstractShape_ = keyPrefix;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_colors_tiles_AbstractShape() {
  this.f_keyPrefix__org_pepstock_charba_client_colors_tiles_AbstractShape_ = null;
 }
 
 static $clinit() {
  AbstractShape.$clinit = () =>{};
  AbstractShape.$loadModules();
  ShapeDrawer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractShape;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsShape.$markImplementor(AbstractShape);
$Util.$setClassMetadata(AbstractShape, "org.pepstock.charba.client.colors.tiles.AbstractShape");

exports = AbstractShape;

//# sourceMappingURL=AbstractShape.js.map
