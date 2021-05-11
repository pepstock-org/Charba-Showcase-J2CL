goog.module('org.pepstock.charba.client.colors.tiles.TilesBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let IsShape = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.IsShape$impl');
let PointStyleShape = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.PointStyleShape$impl');
let TilesFactory = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.TilesFactory$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');

class TilesBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsShape}*/
  this.f_shape__org_pepstock_charba_client_colors_tiles_TilesBuilder_;
  /**@type {?string}*/
  this.f_backgroundColor__org_pepstock_charba_client_colors_tiles_TilesBuilder_;
  /**@type {?string}*/
  this.f_shapeColor__org_pepstock_charba_client_colors_tiles_TilesBuilder;
  /**@type {number}*/
  this.f_size__org_pepstock_charba_client_colors_tiles_TilesBuilder = 0;
 }
 /** @return {!TilesBuilder} */
 static $create__() {
  let $instance = new TilesBuilder();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_TilesBuilder__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_TilesBuilder__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_colors_tiles_TilesBuilder();
  this.f_shape__org_pepstock_charba_client_colors_tiles_TilesBuilder_ = TilesFactory.m_getDefaults__().m_getShape__();
  this.f_backgroundColor__org_pepstock_charba_client_colors_tiles_TilesBuilder_ = TilesFactory.m_getDefaults__().m_getBackgroundColorAsString__();
  this.f_shapeColor__org_pepstock_charba_client_colors_tiles_TilesBuilder = TilesFactory.m_getDefaults__().m_getShapeColorAsString__();
  this.f_size__org_pepstock_charba_client_colors_tiles_TilesBuilder = TilesFactory.m_getDefaults__().m_getSize__();
 }
 /** @return {TilesBuilder} */
 static m_create__() {
  TilesBuilder.$clinit();
  return TilesBuilder.$create__();
 }
 /** @return {TilesBuilder} */
 m_setShape__org_pepstock_charba_client_colors_tiles_IsShape(/** IsShape */ shape) {
  this.f_shape__org_pepstock_charba_client_colors_tiles_TilesBuilder_ = $Equality.$same(shape, null) ? TilesFactory.m_getDefaults__().m_getShape__() : shape;
  return this;
 }
 /** @return {TilesBuilder} */
 m_setPointStyle__org_pepstock_charba_client_enums_PointStyle(/** PointStyle */ pointStyle) {
  this.f_shape__org_pepstock_charba_client_colors_tiles_TilesBuilder_ = PointStyleShape.m_get__org_pepstock_charba_client_enums_PointStyle(pointStyle);
  return this;
 }
 /** @return {TilesBuilder} */
 m_setSize__int(/** number */ size) {
  this.f_size__org_pepstock_charba_client_colors_tiles_TilesBuilder = Math.max(size, TilesFactory.m_getDefaults__().m_getSize__());
  return this;
 }
 /** @return {TilesBuilder} */
 m_setBackgroundColor__java_lang_String(/** ?string */ backgroundColor) {
  this.f_backgroundColor__org_pepstock_charba_client_colors_tiles_TilesBuilder_ = $Equality.$same(backgroundColor, null) ? TilesFactory.m_getDefaults__().m_getBackgroundColorAsString__() : backgroundColor;
  return this;
 }
 /** @return {TilesBuilder} */
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backgroundColor) {
  this.f_backgroundColor__org_pepstock_charba_client_colors_tiles_TilesBuilder_ = IsColor.m_isConsistent__org_pepstock_charba_client_colors_IsColor(backgroundColor) ? backgroundColor.m_toRGBA__() : TilesFactory.m_getDefaults__().m_getBackgroundColorAsString__();
  return this;
 }
 /** @return {TilesBuilder} */
 m_setShapeColor__java_lang_String(/** ?string */ shapeColor) {
  this.f_shapeColor__org_pepstock_charba_client_colors_tiles_TilesBuilder = $Equality.$same(shapeColor, null) ? TilesFactory.m_getDefaults__().m_getShapeColorAsString__() : shapeColor;
  return this;
 }
 /** @return {TilesBuilder} */
 m_setShapeColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ shapeColor) {
  this.f_shapeColor__org_pepstock_charba_client_colors_tiles_TilesBuilder = IsColor.m_isConsistent__org_pepstock_charba_client_colors_IsColor(shapeColor) ? shapeColor.m_toRGBA__() : TilesFactory.m_getDefaults__().m_getShapeColorAsString__();
  return this;
 }
 /** @return {CanvasPattern} */
 m_asTile__() {
  return TilesFactory.m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__java_lang_String__java_lang_String__int(this.f_shape__org_pepstock_charba_client_colors_tiles_TilesBuilder_, this.f_backgroundColor__org_pepstock_charba_client_colors_tiles_TilesBuilder_, this.f_shapeColor__org_pepstock_charba_client_colors_tiles_TilesBuilder, this.f_size__org_pepstock_charba_client_colors_tiles_TilesBuilder);
 }
 /** @return {Pattern} */
 m_asPattern__() {
  return TilesFactory.m_createPattern__org_pepstock_charba_client_colors_tiles_IsShape__java_lang_String__java_lang_String__int(this.f_shape__org_pepstock_charba_client_colors_tiles_TilesBuilder_, this.f_backgroundColor__org_pepstock_charba_client_colors_tiles_TilesBuilder_, this.f_shapeColor__org_pepstock_charba_client_colors_tiles_TilesBuilder, this.f_size__org_pepstock_charba_client_colors_tiles_TilesBuilder);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_colors_tiles_TilesBuilder() {
  this.f_shape__org_pepstock_charba_client_colors_tiles_TilesBuilder_ = null;
  this.f_backgroundColor__org_pepstock_charba_client_colors_tiles_TilesBuilder_ = null;
  this.f_shapeColor__org_pepstock_charba_client_colors_tiles_TilesBuilder = null;
  this.f_size__org_pepstock_charba_client_colors_tiles_TilesBuilder = Integer.f_MIN_VALUE__java_lang_Integer;
 }
 
 static $clinit() {
  TilesBuilder.$clinit = () =>{};
  TilesBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TilesBuilder;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  PointStyleShape = goog.module.get('org.pepstock.charba.client.colors.tiles.PointStyleShape$impl');
  TilesFactory = goog.module.get('org.pepstock.charba.client.colors.tiles.TilesFactory$impl');
 }
}
$Util.$setClassMetadata(TilesBuilder, "org.pepstock.charba.client.colors.tiles.TilesBuilder");

exports = TilesBuilder;

//# sourceMappingURL=TilesBuilder.js.map
