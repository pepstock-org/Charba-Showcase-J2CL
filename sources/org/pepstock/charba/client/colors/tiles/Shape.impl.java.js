goog.module('org.pepstock.charba.client.colors.tiles.Shape$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsShape = goog.require('org.pepstock.charba.client.colors.tiles.IsShape$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let BackSlashedLine = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.BackSlashedLine$impl');
let Box = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Box$impl');
let Cross = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Cross$impl');
let CrossDash = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.CrossDash$impl');
let Dash = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Dash$impl');
let Diagonal = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Diagonal$impl');
let Diamond = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Diamond$impl');
let DiamondBox = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.DiamondBox$impl');
let Disc = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Disc$impl');
let Dot = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Dot$impl');
let DotDash = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.DotDash$impl');
let DoubleDiagonal = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.DoubleDiagonal$impl');
let EmptyStar = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.EmptyStar$impl');
let InvertedDiagonal = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.InvertedDiagonal$impl');
let InvertedDoubleDiagonal = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.InvertedDoubleDiagonal$impl');
let InvertedTriangle = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.InvertedTriangle$impl');
let Line = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Line$impl');
let Plus = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Plus$impl');
let Ring = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Ring$impl');
let ShapeDrawer = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.ShapeDrawer$impl');
let SlashedLine = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.SlashedLine$impl');
let Solid = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Solid$impl');
let Square = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Square$impl');
let Star = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Star$impl');
let Triangle = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Triangle$impl');
let VerticalLine = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.VerticalLine$impl');
let VerticalZigZag = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.VerticalZigZag$impl');
let Weave = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.Weave$impl');
let ZigZag = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.ZigZag$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Shape>}
 * @implements {IsShape}
 */
class Shape extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {ShapeDrawer}*/
  this.f_drawer__org_pepstock_charba_client_colors_tiles_Shape_;
 }
 /** @return {!Shape} */
 static $create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer(/** ?string */ $name, /** number */ $ordinal, /** ShapeDrawer */ drawer) {
  let $instance = new Shape();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_Shape__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($name, $ordinal, drawer);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_Shape__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer(/** ?string */ $name, /** number */ $ordinal, /** ShapeDrawer */ drawer) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_drawer__org_pepstock_charba_client_colors_tiles_Shape_ = drawer;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.name();
 }
 /** @override @return {?string} */
 m_getKeyPrefix__() {
  return this.name();
 }
 /** @override @return {ShapeDrawer} */
 m_getDrawer__() {
  return this.f_drawer__org_pepstock_charba_client_colors_tiles_Shape_;
 }
 /** @return {!Shape} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Shape.$clinit();
  if ($Equality.$same(Shape.f_namesToValuesMap__org_pepstock_charba_client_colors_tiles_Shape_, null)) {
   Shape.f_namesToValuesMap__org_pepstock_charba_client_colors_tiles_Shape_ = $Enums.createMapFromValues(Shape.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Shape.f_namesToValuesMap__org_pepstock_charba_client_colors_tiles_Shape_);
 }
 /** @return {!Array<!Shape>} */
 static m_values__() {
  Shape.$clinit();
  return /**@type {!Array<Shape>}*/ ($Arrays.$init([Shape.$static_BACK_SLASHED_LINE__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_BOX__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_CROSS__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_CROSS_DASH__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_DASH__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_DIAMOND__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_DIAMOND_BOX__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_DISC__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_DOT__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_DOT_DASH__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_DOUBLE_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_EMPTY_STAR__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_INVERTED_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_INVERTED_DOUBLE_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_INVERTED_TRIANGLE__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_LINE__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_PLUS__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_RING__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_SLASHED_LINE__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_SOLID__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_STAR__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_SQUARE__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_TRIANGLE__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_WEAVE__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_ZIGZAG__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_VERTICAL_LINE__org_pepstock_charba_client_colors_tiles_Shape, Shape.$static_VERTICAL_ZIGZAG__org_pepstock_charba_client_colors_tiles_Shape], Shape));
 }
 /** @return {!Shape} */
 static get f_BACK_SLASHED_LINE__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_BACK_SLASHED_LINE__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_BOX__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_BOX__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_CROSS__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_CROSS__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_CROSS_DASH__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_CROSS_DASH__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_DASH__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_DASH__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_DIAMOND__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_DIAMOND__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_DIAMOND_BOX__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_DIAMOND_BOX__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_DISC__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_DISC__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_DOT__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_DOT__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_DOT_DASH__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_DOT_DASH__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_DOUBLE_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_DOUBLE_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_EMPTY_STAR__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_EMPTY_STAR__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_INVERTED_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_INVERTED_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_INVERTED_DOUBLE_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_INVERTED_DOUBLE_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_INVERTED_TRIANGLE__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_INVERTED_TRIANGLE__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_LINE__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_LINE__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_PLUS__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_PLUS__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_RING__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_RING__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_SLASHED_LINE__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_SLASHED_LINE__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_SOLID__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_SOLID__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_STAR__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_STAR__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_SQUARE__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_SQUARE__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_TRIANGLE__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_TRIANGLE__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_WEAVE__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_WEAVE__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_ZIGZAG__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_ZIGZAG__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_VERTICAL_LINE__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_VERTICAL_LINE__org_pepstock_charba_client_colors_tiles_Shape);
 }
 /** @return {!Shape} */
 static get f_VERTICAL_ZIGZAG__org_pepstock_charba_client_colors_tiles_Shape() {
  return (Shape.$clinit(), Shape.$static_VERTICAL_ZIGZAG__org_pepstock_charba_client_colors_tiles_Shape);
 }
 
 static $clinit() {
  Shape.$clinit = () =>{};
  Shape.$loadModules();
  Enum.$clinit();
  Shape.$static_BACK_SLASHED_LINE__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("BACK_SLASHED_LINE"), Shape.$ordinal_BACK_SLASHED_LINE__org_pepstock_charba_client_colors_tiles_Shape, BackSlashedLine.$create__());
  Shape.$static_BOX__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("BOX"), Shape.$ordinal_BOX__org_pepstock_charba_client_colors_tiles_Shape, Box.$create__());
  Shape.$static_CROSS__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("CROSS"), Shape.$ordinal_CROSS__org_pepstock_charba_client_colors_tiles_Shape, Cross.$create__());
  Shape.$static_CROSS_DASH__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("CROSS_DASH"), Shape.$ordinal_CROSS_DASH__org_pepstock_charba_client_colors_tiles_Shape, CrossDash.$create__());
  Shape.$static_DASH__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("DASH"), Shape.$ordinal_DASH__org_pepstock_charba_client_colors_tiles_Shape, Dash.$create__());
  Shape.$static_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("DIAGONAL"), Shape.$ordinal_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape, Diagonal.$create__());
  Shape.$static_DIAMOND__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("DIAMOND"), Shape.$ordinal_DIAMOND__org_pepstock_charba_client_colors_tiles_Shape, Diamond.$create__());
  Shape.$static_DIAMOND_BOX__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("DIAMOND_BOX"), Shape.$ordinal_DIAMOND_BOX__org_pepstock_charba_client_colors_tiles_Shape, DiamondBox.$create__());
  Shape.$static_DISC__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("DISC"), Shape.$ordinal_DISC__org_pepstock_charba_client_colors_tiles_Shape, Disc.$create__());
  Shape.$static_DOT__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("DOT"), Shape.$ordinal_DOT__org_pepstock_charba_client_colors_tiles_Shape, Dot.$create__());
  Shape.$static_DOT_DASH__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("DOT_DASH"), Shape.$ordinal_DOT_DASH__org_pepstock_charba_client_colors_tiles_Shape, DotDash.$create__());
  Shape.$static_DOUBLE_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("DOUBLE_DIAGONAL"), Shape.$ordinal_DOUBLE_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape, DoubleDiagonal.$create__());
  Shape.$static_EMPTY_STAR__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("EMPTY_STAR"), Shape.$ordinal_EMPTY_STAR__org_pepstock_charba_client_colors_tiles_Shape, EmptyStar.$create__());
  Shape.$static_INVERTED_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("INVERTED_DIAGONAL"), Shape.$ordinal_INVERTED_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape, InvertedDiagonal.$create__());
  Shape.$static_INVERTED_DOUBLE_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("INVERTED_DOUBLE_DIAGONAL"), Shape.$ordinal_INVERTED_DOUBLE_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape, InvertedDoubleDiagonal.$create__());
  Shape.$static_INVERTED_TRIANGLE__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("INVERTED_TRIANGLE"), Shape.$ordinal_INVERTED_TRIANGLE__org_pepstock_charba_client_colors_tiles_Shape, InvertedTriangle.$create__());
  Shape.$static_LINE__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("LINE"), Shape.$ordinal_LINE__org_pepstock_charba_client_colors_tiles_Shape, Line.$create__());
  Shape.$static_PLUS__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("PLUS"), Shape.$ordinal_PLUS__org_pepstock_charba_client_colors_tiles_Shape, Plus.$create__());
  Shape.$static_RING__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("RING"), Shape.$ordinal_RING__org_pepstock_charba_client_colors_tiles_Shape, Ring.$create__());
  Shape.$static_SLASHED_LINE__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("SLASHED_LINE"), Shape.$ordinal_SLASHED_LINE__org_pepstock_charba_client_colors_tiles_Shape, SlashedLine.$create__());
  Shape.$static_SOLID__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("SOLID"), Shape.$ordinal_SOLID__org_pepstock_charba_client_colors_tiles_Shape, Solid.$create__());
  Shape.$static_STAR__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("STAR"), Shape.$ordinal_STAR__org_pepstock_charba_client_colors_tiles_Shape, Star.$create__());
  Shape.$static_SQUARE__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("SQUARE"), Shape.$ordinal_SQUARE__org_pepstock_charba_client_colors_tiles_Shape, Square.$create__());
  Shape.$static_TRIANGLE__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("TRIANGLE"), Shape.$ordinal_TRIANGLE__org_pepstock_charba_client_colors_tiles_Shape, Triangle.$create__());
  Shape.$static_WEAVE__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("WEAVE"), Shape.$ordinal_WEAVE__org_pepstock_charba_client_colors_tiles_Shape, Weave.$create__());
  Shape.$static_ZIGZAG__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("ZIGZAG"), Shape.$ordinal_ZIGZAG__org_pepstock_charba_client_colors_tiles_Shape, ZigZag.$create__());
  Shape.$static_VERTICAL_LINE__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("VERTICAL_LINE"), Shape.$ordinal_VERTICAL_LINE__org_pepstock_charba_client_colors_tiles_Shape, VerticalLine.$create__());
  Shape.$static_VERTICAL_ZIGZAG__org_pepstock_charba_client_colors_tiles_Shape = Shape.$create__java_lang_String__int__org_pepstock_charba_client_colors_tiles_ShapeDrawer($Util.$makeEnumName("VERTICAL_ZIGZAG"), Shape.$ordinal_VERTICAL_ZIGZAG__org_pepstock_charba_client_colors_tiles_Shape, VerticalZigZag.$create__());
  Shape.f_namesToValuesMap__org_pepstock_charba_client_colors_tiles_Shape_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Shape;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  BackSlashedLine = goog.module.get('org.pepstock.charba.client.colors.tiles.BackSlashedLine$impl');
  Box = goog.module.get('org.pepstock.charba.client.colors.tiles.Box$impl');
  Cross = goog.module.get('org.pepstock.charba.client.colors.tiles.Cross$impl');
  CrossDash = goog.module.get('org.pepstock.charba.client.colors.tiles.CrossDash$impl');
  Dash = goog.module.get('org.pepstock.charba.client.colors.tiles.Dash$impl');
  Diagonal = goog.module.get('org.pepstock.charba.client.colors.tiles.Diagonal$impl');
  Diamond = goog.module.get('org.pepstock.charba.client.colors.tiles.Diamond$impl');
  DiamondBox = goog.module.get('org.pepstock.charba.client.colors.tiles.DiamondBox$impl');
  Disc = goog.module.get('org.pepstock.charba.client.colors.tiles.Disc$impl');
  Dot = goog.module.get('org.pepstock.charba.client.colors.tiles.Dot$impl');
  DotDash = goog.module.get('org.pepstock.charba.client.colors.tiles.DotDash$impl');
  DoubleDiagonal = goog.module.get('org.pepstock.charba.client.colors.tiles.DoubleDiagonal$impl');
  EmptyStar = goog.module.get('org.pepstock.charba.client.colors.tiles.EmptyStar$impl');
  InvertedDiagonal = goog.module.get('org.pepstock.charba.client.colors.tiles.InvertedDiagonal$impl');
  InvertedDoubleDiagonal = goog.module.get('org.pepstock.charba.client.colors.tiles.InvertedDoubleDiagonal$impl');
  InvertedTriangle = goog.module.get('org.pepstock.charba.client.colors.tiles.InvertedTriangle$impl');
  Line = goog.module.get('org.pepstock.charba.client.colors.tiles.Line$impl');
  Plus = goog.module.get('org.pepstock.charba.client.colors.tiles.Plus$impl');
  Ring = goog.module.get('org.pepstock.charba.client.colors.tiles.Ring$impl');
  SlashedLine = goog.module.get('org.pepstock.charba.client.colors.tiles.SlashedLine$impl');
  Solid = goog.module.get('org.pepstock.charba.client.colors.tiles.Solid$impl');
  Square = goog.module.get('org.pepstock.charba.client.colors.tiles.Square$impl');
  Star = goog.module.get('org.pepstock.charba.client.colors.tiles.Star$impl');
  Triangle = goog.module.get('org.pepstock.charba.client.colors.tiles.Triangle$impl');
  VerticalLine = goog.module.get('org.pepstock.charba.client.colors.tiles.VerticalLine$impl');
  VerticalZigZag = goog.module.get('org.pepstock.charba.client.colors.tiles.VerticalZigZag$impl');
  Weave = goog.module.get('org.pepstock.charba.client.colors.tiles.Weave$impl');
  ZigZag = goog.module.get('org.pepstock.charba.client.colors.tiles.ZigZag$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Shape}*/
Shape.$static_BACK_SLASHED_LINE__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_BOX__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_CROSS__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_CROSS_DASH__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_DASH__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_DIAMOND__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_DIAMOND_BOX__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_DISC__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_DOT__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_DOT_DASH__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_DOUBLE_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_EMPTY_STAR__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_INVERTED_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_INVERTED_DOUBLE_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_INVERTED_TRIANGLE__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_LINE__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_PLUS__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_RING__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_SLASHED_LINE__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_SOLID__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_STAR__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_SQUARE__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_TRIANGLE__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_WEAVE__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_ZIGZAG__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_VERTICAL_LINE__org_pepstock_charba_client_colors_tiles_Shape;
/**@private {!Shape}*/
Shape.$static_VERTICAL_ZIGZAG__org_pepstock_charba_client_colors_tiles_Shape;
/**@type {Map<?string, !Shape>}*/
Shape.f_namesToValuesMap__org_pepstock_charba_client_colors_tiles_Shape_;
/**@const {number}*/
Shape.$ordinal_BACK_SLASHED_LINE__org_pepstock_charba_client_colors_tiles_Shape = 0;
/**@const {number}*/
Shape.$ordinal_BOX__org_pepstock_charba_client_colors_tiles_Shape = 1;
/**@const {number}*/
Shape.$ordinal_CROSS__org_pepstock_charba_client_colors_tiles_Shape = 2;
/**@const {number}*/
Shape.$ordinal_CROSS_DASH__org_pepstock_charba_client_colors_tiles_Shape = 3;
/**@const {number}*/
Shape.$ordinal_DASH__org_pepstock_charba_client_colors_tiles_Shape = 4;
/**@const {number}*/
Shape.$ordinal_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape = 5;
/**@const {number}*/
Shape.$ordinal_DIAMOND__org_pepstock_charba_client_colors_tiles_Shape = 6;
/**@const {number}*/
Shape.$ordinal_DIAMOND_BOX__org_pepstock_charba_client_colors_tiles_Shape = 7;
/**@const {number}*/
Shape.$ordinal_DISC__org_pepstock_charba_client_colors_tiles_Shape = 8;
/**@const {number}*/
Shape.$ordinal_DOT__org_pepstock_charba_client_colors_tiles_Shape = 9;
/**@const {number}*/
Shape.$ordinal_DOT_DASH__org_pepstock_charba_client_colors_tiles_Shape = 10;
/**@const {number}*/
Shape.$ordinal_DOUBLE_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape = 11;
/**@const {number}*/
Shape.$ordinal_EMPTY_STAR__org_pepstock_charba_client_colors_tiles_Shape = 12;
/**@const {number}*/
Shape.$ordinal_INVERTED_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape = 13;
/**@const {number}*/
Shape.$ordinal_INVERTED_DOUBLE_DIAGONAL__org_pepstock_charba_client_colors_tiles_Shape = 14;
/**@const {number}*/
Shape.$ordinal_INVERTED_TRIANGLE__org_pepstock_charba_client_colors_tiles_Shape = 15;
/**@const {number}*/
Shape.$ordinal_LINE__org_pepstock_charba_client_colors_tiles_Shape = 16;
/**@const {number}*/
Shape.$ordinal_PLUS__org_pepstock_charba_client_colors_tiles_Shape = 17;
/**@const {number}*/
Shape.$ordinal_RING__org_pepstock_charba_client_colors_tiles_Shape = 18;
/**@const {number}*/
Shape.$ordinal_SLASHED_LINE__org_pepstock_charba_client_colors_tiles_Shape = 19;
/**@const {number}*/
Shape.$ordinal_SOLID__org_pepstock_charba_client_colors_tiles_Shape = 20;
/**@const {number}*/
Shape.$ordinal_STAR__org_pepstock_charba_client_colors_tiles_Shape = 21;
/**@const {number}*/
Shape.$ordinal_SQUARE__org_pepstock_charba_client_colors_tiles_Shape = 22;
/**@const {number}*/
Shape.$ordinal_TRIANGLE__org_pepstock_charba_client_colors_tiles_Shape = 23;
/**@const {number}*/
Shape.$ordinal_WEAVE__org_pepstock_charba_client_colors_tiles_Shape = 24;
/**@const {number}*/
Shape.$ordinal_ZIGZAG__org_pepstock_charba_client_colors_tiles_Shape = 25;
/**@const {number}*/
Shape.$ordinal_VERTICAL_LINE__org_pepstock_charba_client_colors_tiles_Shape = 26;
/**@const {number}*/
Shape.$ordinal_VERTICAL_ZIGZAG__org_pepstock_charba_client_colors_tiles_Shape = 27;
IsShape.$markImplementor(Shape);
$Util.$setClassMetadataForEnum(Shape, "org.pepstock.charba.client.colors.tiles.Shape");

exports = Shape;

//# sourceMappingURL=Shape.js.map
