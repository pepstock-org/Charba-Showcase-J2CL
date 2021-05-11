goog.module('org.pepstock.charba.client.colors.tiles.PointStyleShape$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsShape = goog.require('org.pepstock.charba.client.colors.tiles.IsShape$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let PointStyleCircle = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.PointStyleCircle$impl');
let PointStyleCross = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.PointStyleCross$impl');
let PointStyleCrossRot = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.PointStyleCrossRot$impl');
let PointStyleDash = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.PointStyleDash$impl');
let PointStyleLine = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.PointStyleLine$impl');
let PointStyleRect = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.PointStyleRect$impl');
let PointStyleRectRot = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.PointStyleRectRot$impl');
let PointStyleRectRounded = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.PointStyleRectRounded$impl');
let PointStyleStar = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.PointStyleStar$impl');
let PointStyleTriangle = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.PointStyleTriangle$impl');
let ShapeDrawer = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @extends {Enum<PointStyleShape>}
 * @implements {IsShape}
 */
class PointStyleShape extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {PointStyle}*/
  this.f_pointStyle__org_pepstock_charba_client_colors_tiles_PointStyleShape_;
  /**@type {ShapeDrawer}*/
  this.f_drawer__org_pepstock_charba_client_colors_tiles_PointStyleShape_;
  /**@type {?string}*/
  this.f_keyPrefix__org_pepstock_charba_client_colors_tiles_PointStyleShape_;
 }
 /** @return {!PointStyleShape} */
 static $create__java_lang_String__int__org_pepstock_charba_client_enums_PointStyle__org_pepstock_charba_client_colors_tiles_ShapeDrawer(/** ?string */ $name, /** number */ $ordinal, /** PointStyle */ pointStyle, /** ShapeDrawer */ drawer) {
  let $instance = new PointStyleShape();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_PointStyleShape__java_lang_String__int__org_pepstock_charba_client_enums_PointStyle__org_pepstock_charba_client_colors_tiles_ShapeDrawer($name, $ordinal, pointStyle, drawer);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_PointStyleShape__java_lang_String__int__org_pepstock_charba_client_enums_PointStyle__org_pepstock_charba_client_colors_tiles_ShapeDrawer(/** ?string */ $name, /** number */ $ordinal, /** PointStyle */ pointStyle, /** ShapeDrawer */ drawer) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_pointStyle__org_pepstock_charba_client_colors_tiles_PointStyleShape_ = pointStyle;
  this.f_drawer__org_pepstock_charba_client_colors_tiles_PointStyleShape_ = drawer;
  this.f_keyPrefix__org_pepstock_charba_client_colors_tiles_PointStyleShape_ = j_l_String.m_valueOf__java_lang_Object(PointStyleShape.f_KEY_PREFIX__org_pepstock_charba_client_colors_tiles_PointStyleShape_) + j_l_String.m_valueOf__java_lang_Object(this.name());
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_pointStyle__org_pepstock_charba_client_colors_tiles_PointStyleShape_.m_value__();
 }
 /** @override @return {?string} */
 m_getKeyPrefix__() {
  return this.f_keyPrefix__org_pepstock_charba_client_colors_tiles_PointStyleShape_;
 }
 /** @override @return {ShapeDrawer} */
 m_getDrawer__() {
  return this.f_drawer__org_pepstock_charba_client_colors_tiles_PointStyleShape_;
 }
 /** @return {PointStyle} */
 m_getPointStyle__() {
  return this.f_pointStyle__org_pepstock_charba_client_colors_tiles_PointStyleShape_;
 }
 /** @return {PointStyleShape} */
 static m_get__org_pepstock_charba_client_enums_PointStyle(/** PointStyle */ pointStyle) {
  PointStyleShape.$clinit();
  let changedPointStyle = null;
  if (!$Equality.$same(pointStyle, null)) {
   changedPointStyle = pointStyle;
  } else {
   changedPointStyle = Defaults.m_get__().m_getGlobal__().m_getElements__().m_getPoint__().m_getPointStyle__();
  }
  for (let $array = PointStyleShape.m_values__(), $index = 0; $index < $array.length; $index++) {
   let shape = $array[$index];
   {
    if ($Objects.m_equals__java_lang_Object__java_lang_Object(shape.m_getPointStyle__(), changedPointStyle)) {
     return shape;
    }
   }
  }
  return PointStyleShape.$static_CIRCLE__org_pepstock_charba_client_colors_tiles_PointStyleShape;
 }
 /** @return {!PointStyleShape} */
 static m_valueOf__java_lang_String(/** string */ name) {
  PointStyleShape.$clinit();
  if ($Equality.$same(PointStyleShape.f_namesToValuesMap__org_pepstock_charba_client_colors_tiles_PointStyleShape_, null)) {
   PointStyleShape.f_namesToValuesMap__org_pepstock_charba_client_colors_tiles_PointStyleShape_ = $Enums.createMapFromValues(PointStyleShape.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, PointStyleShape.f_namesToValuesMap__org_pepstock_charba_client_colors_tiles_PointStyleShape_);
 }
 /** @return {!Array<!PointStyleShape>} */
 static m_values__() {
  PointStyleShape.$clinit();
  return /**@type {!Array<PointStyleShape>}*/ ($Arrays.$init([PointStyleShape.$static_CIRCLE__org_pepstock_charba_client_colors_tiles_PointStyleShape, PointStyleShape.$static_CROSS__org_pepstock_charba_client_colors_tiles_PointStyleShape, PointStyleShape.$static_CROSS_ROT__org_pepstock_charba_client_colors_tiles_PointStyleShape, PointStyleShape.$static_DASH__org_pepstock_charba_client_colors_tiles_PointStyleShape, PointStyleShape.$static_LINE__org_pepstock_charba_client_colors_tiles_PointStyleShape, PointStyleShape.$static_RECT__org_pepstock_charba_client_colors_tiles_PointStyleShape, PointStyleShape.$static_RECT_ROUNDED__org_pepstock_charba_client_colors_tiles_PointStyleShape, PointStyleShape.$static_RECT_ROT__org_pepstock_charba_client_colors_tiles_PointStyleShape, PointStyleShape.$static_STAR__org_pepstock_charba_client_colors_tiles_PointStyleShape, PointStyleShape.$static_TRIANGLE__org_pepstock_charba_client_colors_tiles_PointStyleShape], PointStyleShape));
 }
 /** @return {!PointStyleShape} */
 static get f_CIRCLE__org_pepstock_charba_client_colors_tiles_PointStyleShape() {
  return (PointStyleShape.$clinit(), PointStyleShape.$static_CIRCLE__org_pepstock_charba_client_colors_tiles_PointStyleShape);
 }
 /** @return {!PointStyleShape} */
 static get f_CROSS__org_pepstock_charba_client_colors_tiles_PointStyleShape() {
  return (PointStyleShape.$clinit(), PointStyleShape.$static_CROSS__org_pepstock_charba_client_colors_tiles_PointStyleShape);
 }
 /** @return {!PointStyleShape} */
 static get f_CROSS_ROT__org_pepstock_charba_client_colors_tiles_PointStyleShape() {
  return (PointStyleShape.$clinit(), PointStyleShape.$static_CROSS_ROT__org_pepstock_charba_client_colors_tiles_PointStyleShape);
 }
 /** @return {!PointStyleShape} */
 static get f_DASH__org_pepstock_charba_client_colors_tiles_PointStyleShape() {
  return (PointStyleShape.$clinit(), PointStyleShape.$static_DASH__org_pepstock_charba_client_colors_tiles_PointStyleShape);
 }
 /** @return {!PointStyleShape} */
 static get f_LINE__org_pepstock_charba_client_colors_tiles_PointStyleShape() {
  return (PointStyleShape.$clinit(), PointStyleShape.$static_LINE__org_pepstock_charba_client_colors_tiles_PointStyleShape);
 }
 /** @return {!PointStyleShape} */
 static get f_RECT__org_pepstock_charba_client_colors_tiles_PointStyleShape() {
  return (PointStyleShape.$clinit(), PointStyleShape.$static_RECT__org_pepstock_charba_client_colors_tiles_PointStyleShape);
 }
 /** @return {!PointStyleShape} */
 static get f_RECT_ROUNDED__org_pepstock_charba_client_colors_tiles_PointStyleShape() {
  return (PointStyleShape.$clinit(), PointStyleShape.$static_RECT_ROUNDED__org_pepstock_charba_client_colors_tiles_PointStyleShape);
 }
 /** @return {!PointStyleShape} */
 static get f_RECT_ROT__org_pepstock_charba_client_colors_tiles_PointStyleShape() {
  return (PointStyleShape.$clinit(), PointStyleShape.$static_RECT_ROT__org_pepstock_charba_client_colors_tiles_PointStyleShape);
 }
 /** @return {!PointStyleShape} */
 static get f_STAR__org_pepstock_charba_client_colors_tiles_PointStyleShape() {
  return (PointStyleShape.$clinit(), PointStyleShape.$static_STAR__org_pepstock_charba_client_colors_tiles_PointStyleShape);
 }
 /** @return {!PointStyleShape} */
 static get f_TRIANGLE__org_pepstock_charba_client_colors_tiles_PointStyleShape() {
  return (PointStyleShape.$clinit(), PointStyleShape.$static_TRIANGLE__org_pepstock_charba_client_colors_tiles_PointStyleShape);
 }
 
 static $clinit() {
  PointStyleShape.$clinit = () =>{};
  PointStyleShape.$loadModules();
  Enum.$clinit();
  PointStyleShape.$static_CIRCLE__org_pepstock_charba_client_colors_tiles_PointStyleShape = PointStyleShape.$create__java_lang_String__int__org_pepstock_charba_client_enums_PointStyle__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("CIRCLE"), PointStyleShape.$ordinal_CIRCLE__org_pepstock_charba_client_colors_tiles_PointStyleShape, PointStyle.f_CIRCLE__org_pepstock_charba_client_enums_PointStyle, PointStyleCircle.$create__());
  PointStyleShape.$static_CROSS__org_pepstock_charba_client_colors_tiles_PointStyleShape = PointStyleShape.$create__java_lang_String__int__org_pepstock_charba_client_enums_PointStyle__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("CROSS"), PointStyleShape.$ordinal_CROSS__org_pepstock_charba_client_colors_tiles_PointStyleShape, PointStyle.f_CROSS__org_pepstock_charba_client_enums_PointStyle, PointStyleCross.$create__());
  PointStyleShape.$static_CROSS_ROT__org_pepstock_charba_client_colors_tiles_PointStyleShape = PointStyleShape.$create__java_lang_String__int__org_pepstock_charba_client_enums_PointStyle__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("CROSS_ROT"), PointStyleShape.$ordinal_CROSS_ROT__org_pepstock_charba_client_colors_tiles_PointStyleShape, PointStyle.f_CROSS_ROT__org_pepstock_charba_client_enums_PointStyle, PointStyleCrossRot.$create__());
  PointStyleShape.$static_DASH__org_pepstock_charba_client_colors_tiles_PointStyleShape = PointStyleShape.$create__java_lang_String__int__org_pepstock_charba_client_enums_PointStyle__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("DASH"), PointStyleShape.$ordinal_DASH__org_pepstock_charba_client_colors_tiles_PointStyleShape, PointStyle.f_DASH__org_pepstock_charba_client_enums_PointStyle, PointStyleDash.$create__());
  PointStyleShape.$static_LINE__org_pepstock_charba_client_colors_tiles_PointStyleShape = PointStyleShape.$create__java_lang_String__int__org_pepstock_charba_client_enums_PointStyle__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("LINE"), PointStyleShape.$ordinal_LINE__org_pepstock_charba_client_colors_tiles_PointStyleShape, PointStyle.f_LINE__org_pepstock_charba_client_enums_PointStyle, PointStyleLine.$create__());
  PointStyleShape.$static_RECT__org_pepstock_charba_client_colors_tiles_PointStyleShape = PointStyleShape.$create__java_lang_String__int__org_pepstock_charba_client_enums_PointStyle__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("RECT"), PointStyleShape.$ordinal_RECT__org_pepstock_charba_client_colors_tiles_PointStyleShape, PointStyle.f_RECT__org_pepstock_charba_client_enums_PointStyle, PointStyleRect.$create__());
  PointStyleShape.$static_RECT_ROUNDED__org_pepstock_charba_client_colors_tiles_PointStyleShape = PointStyleShape.$create__java_lang_String__int__org_pepstock_charba_client_enums_PointStyle__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("RECT_ROUNDED"), PointStyleShape.$ordinal_RECT_ROUNDED__org_pepstock_charba_client_colors_tiles_PointStyleShape, PointStyle.f_RECT_ROUNDED__org_pepstock_charba_client_enums_PointStyle, PointStyleRectRounded.$create__());
  PointStyleShape.$static_RECT_ROT__org_pepstock_charba_client_colors_tiles_PointStyleShape = PointStyleShape.$create__java_lang_String__int__org_pepstock_charba_client_enums_PointStyle__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("RECT_ROT"), PointStyleShape.$ordinal_RECT_ROT__org_pepstock_charba_client_colors_tiles_PointStyleShape, PointStyle.f_RECT_ROT__org_pepstock_charba_client_enums_PointStyle, PointStyleRectRot.$create__());
  PointStyleShape.$static_STAR__org_pepstock_charba_client_colors_tiles_PointStyleShape = PointStyleShape.$create__java_lang_String__int__org_pepstock_charba_client_enums_PointStyle__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("STAR"), PointStyleShape.$ordinal_STAR__org_pepstock_charba_client_colors_tiles_PointStyleShape, PointStyle.f_STAR__org_pepstock_charba_client_enums_PointStyle, PointStyleStar.$create__());
  PointStyleShape.$static_TRIANGLE__org_pepstock_charba_client_colors_tiles_PointStyleShape = PointStyleShape.$create__java_lang_String__int__org_pepstock_charba_client_enums_PointStyle__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("TRIANGLE"), PointStyleShape.$ordinal_TRIANGLE__org_pepstock_charba_client_colors_tiles_PointStyleShape, PointStyle.f_TRIANGLE__org_pepstock_charba_client_enums_PointStyle, PointStyleTriangle.$create__());
  PointStyleShape.f_namesToValuesMap__org_pepstock_charba_client_colors_tiles_PointStyleShape_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PointStyleShape;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  PointStyleCircle = goog.module.get('org.pepstock.charba.client.colors.tiles.PointStyleCircle$impl');
  PointStyleCross = goog.module.get('org.pepstock.charba.client.colors.tiles.PointStyleCross$impl');
  PointStyleCrossRot = goog.module.get('org.pepstock.charba.client.colors.tiles.PointStyleCrossRot$impl');
  PointStyleDash = goog.module.get('org.pepstock.charba.client.colors.tiles.PointStyleDash$impl');
  PointStyleLine = goog.module.get('org.pepstock.charba.client.colors.tiles.PointStyleLine$impl');
  PointStyleRect = goog.module.get('org.pepstock.charba.client.colors.tiles.PointStyleRect$impl');
  PointStyleRectRot = goog.module.get('org.pepstock.charba.client.colors.tiles.PointStyleRectRot$impl');
  PointStyleRectRounded = goog.module.get('org.pepstock.charba.client.colors.tiles.PointStyleRectRounded$impl');
  PointStyleStar = goog.module.get('org.pepstock.charba.client.colors.tiles.PointStyleStar$impl');
  PointStyleTriangle = goog.module.get('org.pepstock.charba.client.colors.tiles.PointStyleTriangle$impl');
  PointStyle = goog.module.get('org.pepstock.charba.client.enums.PointStyle$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@private {!PointStyleShape}*/
PointStyleShape.$static_CIRCLE__org_pepstock_charba_client_colors_tiles_PointStyleShape;
/**@private {!PointStyleShape}*/
PointStyleShape.$static_CROSS__org_pepstock_charba_client_colors_tiles_PointStyleShape;
/**@private {!PointStyleShape}*/
PointStyleShape.$static_CROSS_ROT__org_pepstock_charba_client_colors_tiles_PointStyleShape;
/**@private {!PointStyleShape}*/
PointStyleShape.$static_DASH__org_pepstock_charba_client_colors_tiles_PointStyleShape;
/**@private {!PointStyleShape}*/
PointStyleShape.$static_LINE__org_pepstock_charba_client_colors_tiles_PointStyleShape;
/**@private {!PointStyleShape}*/
PointStyleShape.$static_RECT__org_pepstock_charba_client_colors_tiles_PointStyleShape;
/**@private {!PointStyleShape}*/
PointStyleShape.$static_RECT_ROUNDED__org_pepstock_charba_client_colors_tiles_PointStyleShape;
/**@private {!PointStyleShape}*/
PointStyleShape.$static_RECT_ROT__org_pepstock_charba_client_colors_tiles_PointStyleShape;
/**@private {!PointStyleShape}*/
PointStyleShape.$static_STAR__org_pepstock_charba_client_colors_tiles_PointStyleShape;
/**@private {!PointStyleShape}*/
PointStyleShape.$static_TRIANGLE__org_pepstock_charba_client_colors_tiles_PointStyleShape;
/**@const {?string}*/
PointStyleShape.f_KEY_PREFIX__org_pepstock_charba_client_colors_tiles_PointStyleShape_ = "POINT_STYLE_";
/**@type {Map<?string, !PointStyleShape>}*/
PointStyleShape.f_namesToValuesMap__org_pepstock_charba_client_colors_tiles_PointStyleShape_;
/**@const {number}*/
PointStyleShape.$ordinal_CIRCLE__org_pepstock_charba_client_colors_tiles_PointStyleShape = 0;
/**@const {number}*/
PointStyleShape.$ordinal_CROSS__org_pepstock_charba_client_colors_tiles_PointStyleShape = 1;
/**@const {number}*/
PointStyleShape.$ordinal_CROSS_ROT__org_pepstock_charba_client_colors_tiles_PointStyleShape = 2;
/**@const {number}*/
PointStyleShape.$ordinal_DASH__org_pepstock_charba_client_colors_tiles_PointStyleShape = 3;
/**@const {number}*/
PointStyleShape.$ordinal_LINE__org_pepstock_charba_client_colors_tiles_PointStyleShape = 4;
/**@const {number}*/
PointStyleShape.$ordinal_RECT__org_pepstock_charba_client_colors_tiles_PointStyleShape = 5;
/**@const {number}*/
PointStyleShape.$ordinal_RECT_ROUNDED__org_pepstock_charba_client_colors_tiles_PointStyleShape = 6;
/**@const {number}*/
PointStyleShape.$ordinal_RECT_ROT__org_pepstock_charba_client_colors_tiles_PointStyleShape = 7;
/**@const {number}*/
PointStyleShape.$ordinal_STAR__org_pepstock_charba_client_colors_tiles_PointStyleShape = 8;
/**@const {number}*/
PointStyleShape.$ordinal_TRIANGLE__org_pepstock_charba_client_colors_tiles_PointStyleShape = 9;
IsShape.$markImplementor(PointStyleShape);
$Util.$setClassMetadataForEnum(PointStyleShape, "org.pepstock.charba.client.colors.tiles.PointStyleShape");

exports = PointStyleShape;

//# sourceMappingURL=PointStyleShape.js.map
