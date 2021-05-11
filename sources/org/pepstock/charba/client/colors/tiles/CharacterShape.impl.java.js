goog.module('org.pepstock.charba.client.colors.tiles.CharacterShape$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractShape = goog.require('org.pepstock.charba.client.colors.tiles.AbstractShape$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
let TextBaseline = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.TextBaseline$impl');
let FontStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.FontStyle$impl');
let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class CharacterShape extends AbstractShape {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_character__org_pepstock_charba_client_colors_tiles_CharacterShape_;
  /**@type {?string}*/
  this.f_fontFamily__org_pepstock_charba_client_colors_tiles_CharacterShape_;
 }
 //Factory method corresponding to constructor 'CharacterShape(String)'.
 /** @return {!CharacterShape} */
 static $create__java_lang_String(/** ?string */ character) {
  CharacterShape.$clinit();
  let $instance = new CharacterShape();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_CharacterShape__java_lang_String(character);
  return $instance;
 }
 //Initialization from constructor 'CharacterShape(String)'.
 
 $ctor__org_pepstock_charba_client_colors_tiles_CharacterShape__java_lang_String(/** ?string */ character) {
  this.$ctor__org_pepstock_charba_client_colors_tiles_CharacterShape__java_lang_String__java_lang_String(character, Defaults.m_get__().m_getGlobal__().m_getFont__().m_getFamily__());
 }
 //Factory method corresponding to constructor 'CharacterShape(String, String)'.
 /** @return {!CharacterShape} */
 static $create__java_lang_String__java_lang_String(/** ?string */ character, /** ?string */ fontFamily) {
  CharacterShape.$clinit();
  let $instance = new CharacterShape();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_CharacterShape__java_lang_String__java_lang_String(character, fontFamily);
  return $instance;
 }
 //Initialization from constructor 'CharacterShape(String, String)'.
 
 $ctor__org_pepstock_charba_client_colors_tiles_CharacterShape__java_lang_String__java_lang_String(/** ?string */ character, /** ?string */ fontFamily) {
  this.$ctor__org_pepstock_charba_client_colors_tiles_AbstractShape__java_lang_String(CharacterShape.f_CHARACTER_SHAPE_NAME__org_pepstock_charba_client_colors_tiles_CharacterShape);
  Checker.m_checkIfEqualTo__int__int__java_lang_String(j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(/**@type {?string}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(character, "Character argument"), j_l_String)))), 1, "Character argument length");
  this.f_character__org_pepstock_charba_client_colors_tiles_CharacterShape_ = character;
  this.f_fontFamily__org_pepstock_charba_client_colors_tiles_CharacterShape_ = !$Equality.$same(fontFamily, null) ? fontFamily : Defaults.m_get__().m_getGlobal__().m_getFont__().m_getFamily__();
  super.m_setKeyPrefix__java_lang_String(j_l_String.m_valueOf__java_lang_Object(CharacterShape.f_CHARACTER_SHAPE_NAME__org_pepstock_charba_client_colors_tiles_CharacterShape) + j_l_String.m_valueOf__java_lang_Object(character) + j_l_String.m_valueOf__java_lang_Object(fontFamily));
 }
 /** @override */
 m_drawTile__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__java_lang_String__int(/** CanvasRenderingContext2D */ context, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let halfSize = size / 2;
  let realFontSize = this.m_calculateFontSize__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__double__org_pepstock_charba_client_enums_FontStyle__java_lang_String_$p_org_pepstock_charba_client_colors_tiles_CharacterShape(context, this.f_character__org_pepstock_charba_client_colors_tiles_CharacterShape_, halfSize, FontStyle.f_NORMAL__org_pepstock_charba_client_enums_FontStyle, this.f_fontFamily__org_pepstock_charba_client_colors_tiles_CharacterShape_);
  this.m_applyFillProperties__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(context, shapeColor);
  context.font = Utilities.m_toCSSFontProperty__org_pepstock_charba_client_enums_FontStyle__org_pepstock_charba_client_enums_Weight__int__java_lang_String__java_lang_String(FontStyle.f_NORMAL__org_pepstock_charba_client_enums_FontStyle, Weight.f_NORMAL__org_pepstock_charba_client_enums_Weight, realFontSize, Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants, this.f_fontFamily__org_pepstock_charba_client_colors_tiles_CharacterShape_);
  $Overlay.m_setTextBaseline__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_enums_TextBaseline(context, TextBaseline.f_TOP__org_pepstock_charba_client_dom_enums_TextBaseline);
  let metrics = context.measureText(this.f_character__org_pepstock_charba_client_colors_tiles_CharacterShape_);
  this.m_drawChar__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__java_lang_String__int__org_pepstock_charba_client_dom_elements_TextMetricsItem_$p_org_pepstock_charba_client_colors_tiles_CharacterShape(context, size, 0, 0, this.f_character__org_pepstock_charba_client_colors_tiles_CharacterShape_, realFontSize, metrics);
  this.m_drawChar__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__java_lang_String__int__org_pepstock_charba_client_dom_elements_TextMetricsItem_$p_org_pepstock_charba_client_colors_tiles_CharacterShape(context, size, halfSize, halfSize, this.f_character__org_pepstock_charba_client_colors_tiles_CharacterShape_, realFontSize, metrics);
  context.fill();
 }
 
 m_drawChar__org_pepstock_charba_client_dom_elements_Context2dItem__int__double__double__java_lang_String__int__org_pepstock_charba_client_dom_elements_TextMetricsItem_$p_org_pepstock_charba_client_colors_tiles_CharacterShape(/** CanvasRenderingContext2D */ context, /** number */ size, /** number */ offsetX, /** number */ offsetY, /** ?string */ character, /** number */ fontSize, /** TextMetrics */ metrics) {
  let halfSize = size / 2;
  let x = (halfSize - metrics.width) / 2 + offsetX;
  let y = (halfSize - fontSize) / 2 + offsetY;
  context.fillText(character, x, y);
 }
 /** @return {number} */
 m_calculateFontSize__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String__double__org_pepstock_charba_client_enums_FontStyle__java_lang_String_$p_org_pepstock_charba_client_colors_tiles_CharacterShape(/** CanvasRenderingContext2D */ context, /** ?string */ value, /** number */ size, /** FontStyle */ style, /** ?string */ fontFamily) {
  let calculatedFontSize = $Primitives.$narrowDoubleToInt(size);
  let check = true;
  while (check) {
   context.font = Utilities.m_toCSSFontProperty__org_pepstock_charba_client_enums_FontStyle__org_pepstock_charba_client_enums_Weight__int__java_lang_String__java_lang_String(style, Weight.f_NORMAL__org_pepstock_charba_client_enums_Weight, calculatedFontSize, Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants, fontFamily);
   let metrics = context.measureText(value);
   if (metrics.width < $Primitives.$narrowDoubleToInt(size)) {
    check = false;
   } else {
    calculatedFontSize = calculatedFontSize - CharacterShape.f_FONT_SIZE_DECREMENT__org_pepstock_charba_client_colors_tiles_CharacterShape_ | 0;
   }
  }
  return calculatedFontSize;
 }
 
 static $clinit() {
  CharacterShape.$clinit = () =>{};
  CharacterShape.$loadModules();
  AbstractShape.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CharacterShape;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');
  TextBaseline = goog.module.get('org.pepstock.charba.client.dom.enums.TextBaseline$impl');
  FontStyle = goog.module.get('org.pepstock.charba.client.enums.FontStyle$impl');
  Weight = goog.module.get('org.pepstock.charba.client.enums.Weight$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {?string}*/
CharacterShape.f_CHARACTER_SHAPE_NAME__org_pepstock_charba_client_colors_tiles_CharacterShape = "char";
/**@const {number}*/
CharacterShape.f_FONT_SIZE_DECREMENT__org_pepstock_charba_client_colors_tiles_CharacterShape_ = 2;
$Util.$setClassMetadata(CharacterShape, "org.pepstock.charba.client.colors.tiles.CharacterShape");

exports = CharacterShape;

//# sourceMappingURL=CharacterShape.js.map
