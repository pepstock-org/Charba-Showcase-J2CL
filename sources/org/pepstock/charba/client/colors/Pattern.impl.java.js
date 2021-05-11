goog.module('org.pepstock.charba.client.colors.Pattern$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CanvasObject = goog.require('org.pepstock.charba.client.colors.CanvasObject$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern.Property$impl');
let TilesFactoryDefaults = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.TilesFactoryDefaults$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let Repetition = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.Repetition$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Pattern extends CanvasObject {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'Pattern(String, Img, Repetition, int, int)'.
 /** @return {!Pattern} */
 static $create__java_lang_String__org_pepstock_charba_client_dom_elements_Img__org_pepstock_charba_client_dom_enums_Repetition__int__int(/** ?string */ id, /** HTMLImageElement */ image, /** Repetition */ repetition, /** number */ width, /** number */ height) {
  Pattern.$clinit();
  let $instance = new Pattern();
  $instance.$ctor__org_pepstock_charba_client_colors_Pattern__java_lang_String__org_pepstock_charba_client_dom_elements_Img__org_pepstock_charba_client_dom_enums_Repetition__int__int(id, image, repetition, width, height);
  return $instance;
 }
 //Initialization from constructor 'Pattern(String, Img, Repetition, int, int)'.
 
 $ctor__org_pepstock_charba_client_colors_Pattern__java_lang_String__org_pepstock_charba_client_dom_elements_Img__org_pepstock_charba_client_dom_enums_Repetition__int__int(/** ?string */ id, /** HTMLImageElement */ image, /** Repetition */ repetition, /** number */ width, /** number */ height) {
  this.$ctor__org_pepstock_charba_client_colors_CanvasObject__java_lang_String(id);
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(image, "Image argument");
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(Property.f_CHARBA_PATTERN_IMG__org_pepstock_charba_client_colors_Pattern_Property, image);
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_CHARBA_PATTERN_WIDTH__org_pepstock_charba_client_colors_Pattern_Property, Checker.m_positiveOrZero__int(width));
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_CHARBA_PATTERN_HEIGHT__org_pepstock_charba_client_colors_Pattern_Property, Checker.m_positiveOrZero__int(height));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_PATTERN_REPETITION__org_pepstock_charba_client_colors_Pattern_Property, $Equality.$same(repetition, null) ? Repetition.f_REPEAT__org_pepstock_charba_client_dom_enums_Repetition : repetition);
 }
 //Factory method corresponding to constructor 'Pattern(String, CanvasPatternItem, int, int)'.
 /** @return {!Pattern} */
 static $create__java_lang_String__org_pepstock_charba_client_dom_elements_CanvasPatternItem__int__int(/** ?string */ id, /** CanvasPattern */ canvasPattern, /** number */ width, /** number */ height) {
  Pattern.$clinit();
  let $instance = new Pattern();
  $instance.$ctor__org_pepstock_charba_client_colors_Pattern__java_lang_String__org_pepstock_charba_client_dom_elements_CanvasPatternItem__int__int(id, canvasPattern, width, height);
  return $instance;
 }
 //Initialization from constructor 'Pattern(String, CanvasPatternItem, int, int)'.
 
 $ctor__org_pepstock_charba_client_colors_Pattern__java_lang_String__org_pepstock_charba_client_dom_elements_CanvasPatternItem__int__int(/** ?string */ id, /** CanvasPattern */ canvasPattern, /** number */ width, /** number */ height) {
  this.$ctor__org_pepstock_charba_client_colors_CanvasObject__java_lang_String(id);
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(canvasPattern, "Canvas pattern argument");
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasPatternItem(Property.f_CHARBA_PATTERN_CANVAS__org_pepstock_charba_client_colors_Pattern_Property, canvasPattern);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_PATTERN_REPETITION__org_pepstock_charba_client_colors_Pattern_Property, Repetition.f_REPEAT__org_pepstock_charba_client_dom_enums_Repetition);
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_CHARBA_PATTERN_WIDTH__org_pepstock_charba_client_colors_Pattern_Property, Math.max(width, TilesFactoryDefaults.f_DEFAULT_SIZE__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults));
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_CHARBA_PATTERN_HEIGHT__org_pepstock_charba_client_colors_Pattern_Property, Math.max(height, TilesFactoryDefaults.f_DEFAULT_SIZE__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults));
  this.m_store__org_pepstock_charba_client_dom_IsCastable_$pp_org_pepstock_charba_client_colors(canvasPattern);
 }
 //Factory method corresponding to constructor 'Pattern(NativeObject)'.
 /** @return {!Pattern} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  Pattern.$clinit();
  let $instance = new Pattern();
  $instance.$ctor__org_pepstock_charba_client_colors_Pattern__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'Pattern(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_colors_Pattern__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_colors_CanvasObject__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  if (this.m_has__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_PATTERN_IMG__org_pepstock_charba_client_colors_Pattern_Property)) {
   this.m_checkNativeObject__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType_$pp_org_pepstock_charba_client_colors(Property.f_CHARBA_PATTERN_IMG__org_pepstock_charba_client_colors_Pattern_Property, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType);
  } else {
   this.m_checkNativeObject__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType_$pp_org_pepstock_charba_client_colors(Property.f_CHARBA_PATTERN_CANVAS__org_pepstock_charba_client_colors_Pattern_Property, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType);
  }
  this.m_checkNativeObject__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType_$pp_org_pepstock_charba_client_colors(Property.f_CHARBA_PATTERN_REPETITION__org_pepstock_charba_client_colors_Pattern_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType);
  this.m_checkNativeObject__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType_$pp_org_pepstock_charba_client_colors(Property.f_CHARBA_PATTERN_WIDTH__org_pepstock_charba_client_colors_Pattern_Property, ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType);
  this.m_checkNativeObject__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType_$pp_org_pepstock_charba_client_colors(Property.f_CHARBA_PATTERN_HEIGHT__org_pepstock_charba_client_colors_Pattern_Property, ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType);
 }
 /** @return {HTMLImageElement} */
 m_getImage__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(Property.f_CHARBA_PATTERN_IMG__org_pepstock_charba_client_colors_Pattern_Property, Pattern.f_DEFAULT_IMAGE__org_pepstock_charba_client_colors_Pattern_);
 }
 /** @return {number} */
 m_getWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_CHARBA_PATTERN_WIDTH__org_pepstock_charba_client_colors_Pattern_Property, TilesFactoryDefaults.f_DEFAULT_SIZE__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults);
 }
 /** @return {number} */
 m_getHeight__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_CHARBA_PATTERN_HEIGHT__org_pepstock_charba_client_colors_Pattern_Property, TilesFactoryDefaults.f_DEFAULT_SIZE__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults);
 }
 /** @return {Repetition} */
 m_getRepetition__() {
  return /**@type {Repetition}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_PATTERN_REPETITION__org_pepstock_charba_client_colors_Pattern_Property, Repetition.m_values__(), Repetition.f_REPEAT__org_pepstock_charba_client_dom_enums_Repetition), Repetition));
 }
 /** @return {CanvasPattern} */
 m_getCanvasPattern__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasPatternItem(Property.f_CHARBA_PATTERN_CANVAS__org_pepstock_charba_client_colors_Pattern_Property, Pattern.f_DEFAULT_CANVAS_PATTERN__org_pepstock_charba_client_colors_Pattern_);
 }
 /** @override @return {number} */
 hashCode() {
  return super.hashCode();
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  return super.equals(obj);
 }
 
 static $clinit() {
  Pattern.$clinit = () =>{};
  Pattern.$loadModules();
  CanvasObject.$clinit();
  Pattern.f_DEFAULT_IMAGE__org_pepstock_charba_client_colors_Pattern_ = null;
  Pattern.f_DEFAULT_CANVAS_PATTERN__org_pepstock_charba_client_colors_Pattern_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Pattern;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Property = goog.module.get('org.pepstock.charba.client.colors.Pattern.Property$impl');
  TilesFactoryDefaults = goog.module.get('org.pepstock.charba.client.colors.tiles.TilesFactoryDefaults$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  Repetition = goog.module.get('org.pepstock.charba.client.dom.enums.Repetition$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {HTMLImageElement}*/
Pattern.f_DEFAULT_IMAGE__org_pepstock_charba_client_colors_Pattern_;
/**@type {CanvasPattern}*/
Pattern.f_DEFAULT_CANVAS_PATTERN__org_pepstock_charba_client_colors_Pattern_;
$Util.$setClassMetadata(Pattern, "org.pepstock.charba.client.colors.Pattern");

exports = Pattern;

//# sourceMappingURL=Pattern.js.map
