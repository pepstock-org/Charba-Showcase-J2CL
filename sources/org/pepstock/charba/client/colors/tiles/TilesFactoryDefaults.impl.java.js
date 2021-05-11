goog.module('org.pepstock.charba.client.colors.tiles.TilesFactoryDefaults$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let IsShape = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.IsShape$impl');
let Shape = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Shape$impl');
let CapStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.CapStyle$impl');
let JoinStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.JoinStyle$impl');

class TilesFactoryDefaults extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsShape}*/
  this.f_shape__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_;
  /**@type {number}*/
  this.f_size__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_ = 0;
  /**@type {?string}*/
  this.f_backgroundColor__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_;
  /**@type {?string}*/
  this.f_shapeColor__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_;
  /**@type {CapStyle}*/
  this.f_lineCap__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_;
  /**@type {JoinStyle}*/
  this.f_lineJoin__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_;
 }
 /** @return {!TilesFactoryDefaults} */
 static $create__() {
  TilesFactoryDefaults.$clinit();
  let $instance = new TilesFactoryDefaults();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults();
 }
 /** @return {IsShape} */
 m_getShape__() {
  return this.f_shape__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_;
 }
 
 m_setShape__org_pepstock_charba_client_colors_tiles_IsShape(/** IsShape */ shape) {
  this.f_shape__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_ = $Equality.$same(shape, null) ? TilesFactoryDefaults.$static_DEFAULT_SHAPE__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults : shape;
 }
 /** @return {number} */
 m_getSize__() {
  return this.f_size__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_;
 }
 
 m_setSize__int(/** number */ size) {
  this.f_size__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_ = Math.max(size, TilesFactoryDefaults.f_MINIMUM_SIZE__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults);
 }
 /** @return {?string} */
 m_getBackgroundColorAsString__() {
  return this.f_backgroundColor__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_;
 }
 /** @return {IsColor} */
 m_getBackgroundColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getBackgroundColorAsString__());
 }
 
 m_setBackgroundColor__java_lang_String(/** ?string */ backgroundColor) {
  this.f_backgroundColor__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_ = $Equality.$same(backgroundColor, null) ? TilesFactoryDefaults.f_DEFAULT_BACKGROUND_COLOR_AS_STRING__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults : backgroundColor;
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backgroundColor) {
  this.f_backgroundColor__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_ = IsColor.m_isConsistent__org_pepstock_charba_client_colors_IsColor(backgroundColor) ? backgroundColor.m_toRGBA__() : TilesFactoryDefaults.f_DEFAULT_BACKGROUND_COLOR_AS_STRING__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults;
 }
 /** @return {?string} */
 m_getShapeColorAsString__() {
  return this.f_shapeColor__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_;
 }
 /** @return {IsColor} */
 m_getShapeColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getShapeColorAsString__());
 }
 
 m_setShapeColor__java_lang_String(/** ?string */ shapeColor) {
  this.f_shapeColor__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_ = $Equality.$same(shapeColor, null) ? TilesFactoryDefaults.f_DEFAULT_SHAPE_COLOR_AS_STRING__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults : shapeColor;
 }
 
 m_setShapeColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ shapeColor) {
  this.f_shapeColor__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_ = IsColor.m_isConsistent__org_pepstock_charba_client_colors_IsColor(shapeColor) ? shapeColor.m_toRGBA__() : TilesFactoryDefaults.f_DEFAULT_SHAPE_COLOR_AS_STRING__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults;
 }
 /** @return {CapStyle} */
 m_getLineCap__() {
  return this.f_lineCap__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_;
 }
 
 m_setLineCap__org_pepstock_charba_client_enums_CapStyle(/** CapStyle */ lineCap) {
  this.f_lineCap__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_ = $Equality.$same(lineCap, null) ? TilesFactoryDefaults.$static_DEFAULT_LINE_CAP__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults : lineCap;
 }
 /** @return {JoinStyle} */
 m_getLineJoin__() {
  return this.f_lineJoin__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_;
 }
 
 m_setLineJoin__org_pepstock_charba_client_enums_JoinStyle(/** JoinStyle */ lineJoin) {
  this.f_lineJoin__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_ = lineJoin;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults() {
  this.f_shape__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_ = TilesFactoryDefaults.$static_DEFAULT_SHAPE__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults;
  this.f_size__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_ = TilesFactoryDefaults.f_DEFAULT_SIZE__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults;
  this.f_backgroundColor__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_ = TilesFactoryDefaults.f_DEFAULT_BACKGROUND_COLOR_AS_STRING__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults;
  this.f_shapeColor__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_ = TilesFactoryDefaults.f_DEFAULT_SHAPE_COLOR_AS_STRING__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults;
  this.f_lineCap__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_ = TilesFactoryDefaults.$static_DEFAULT_LINE_CAP__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults;
  this.f_lineJoin__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults_ = TilesFactoryDefaults.$static_DEFAULT_LINE_JOIN__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults;
 }
 /** @return {IsColor} */
 static get f_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults() {
  return (TilesFactoryDefaults.$clinit(), TilesFactoryDefaults.$static_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults);
 }
 /** @return {IsColor} */
 static get f_DEFAULT_SHAPE_COLOR__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults() {
  return (TilesFactoryDefaults.$clinit(), TilesFactoryDefaults.$static_DEFAULT_SHAPE_COLOR__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults);
 }
 /** @return {CapStyle} */
 static get f_DEFAULT_LINE_CAP__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults() {
  return (TilesFactoryDefaults.$clinit(), TilesFactoryDefaults.$static_DEFAULT_LINE_CAP__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults);
 }
 /** @return {IsShape} */
 static get f_DEFAULT_SHAPE__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults() {
  return (TilesFactoryDefaults.$clinit(), TilesFactoryDefaults.$static_DEFAULT_SHAPE__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults);
 }
 /** @return {JoinStyle} */
 static get f_DEFAULT_LINE_JOIN__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults() {
  return (TilesFactoryDefaults.$clinit(), TilesFactoryDefaults.$static_DEFAULT_LINE_JOIN__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults);
 }
 
 static $clinit() {
  TilesFactoryDefaults.$clinit = () =>{};
  TilesFactoryDefaults.$loadModules();
  j_l_Object.$clinit();
  TilesFactoryDefaults.$static_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults = ColorBuilder.m_parse__java_lang_String(TilesFactoryDefaults.f_DEFAULT_BACKGROUND_COLOR_AS_STRING__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults);
  TilesFactoryDefaults.$static_DEFAULT_SHAPE_COLOR__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults = ColorBuilder.m_parse__java_lang_String(TilesFactoryDefaults.f_DEFAULT_SHAPE_COLOR_AS_STRING__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults);
  TilesFactoryDefaults.$static_DEFAULT_LINE_CAP__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults = CapStyle.f_ROUND__org_pepstock_charba_client_enums_CapStyle;
  TilesFactoryDefaults.$static_DEFAULT_SHAPE__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults = Shape.f_SQUARE__org_pepstock_charba_client_colors_tiles_Shape;
  TilesFactoryDefaults.$static_DEFAULT_LINE_JOIN__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults = JoinStyle.f_ROUND__org_pepstock_charba_client_enums_JoinStyle;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TilesFactoryDefaults;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Shape = goog.module.get('org.pepstock.charba.client.colors.tiles.Shape$impl');
  CapStyle = goog.module.get('org.pepstock.charba.client.enums.CapStyle$impl');
  JoinStyle = goog.module.get('org.pepstock.charba.client.enums.JoinStyle$impl');
 }
}
/**@const {?string}*/
TilesFactoryDefaults.f_DEFAULT_BACKGROUND_COLOR_AS_STRING__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults = "rgba(100, 100, 100, 0.7)";
/**@const {?string}*/
TilesFactoryDefaults.f_DEFAULT_SHAPE_COLOR_AS_STRING__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults = "rgba(255, 255, 255, 0.8)";
/**@private {IsColor}*/
TilesFactoryDefaults.$static_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults;
/**@private {IsColor}*/
TilesFactoryDefaults.$static_DEFAULT_SHAPE_COLOR__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults;
/**@const {number}*/
TilesFactoryDefaults.f_DEFAULT_SIZE__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults = 20;
/**@const {number}*/
TilesFactoryDefaults.f_MINIMUM_SIZE__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults = 10;
/**@private {CapStyle}*/
TilesFactoryDefaults.$static_DEFAULT_LINE_CAP__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults;
/**@private {IsShape}*/
TilesFactoryDefaults.$static_DEFAULT_SHAPE__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults;
/**@private {JoinStyle}*/
TilesFactoryDefaults.$static_DEFAULT_LINE_JOIN__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults;
$Util.$setClassMetadata(TilesFactoryDefaults, "org.pepstock.charba.client.colors.tiles.TilesFactoryDefaults");

exports = TilesFactoryDefaults;

//# sourceMappingURL=TilesFactoryDefaults.js.map
