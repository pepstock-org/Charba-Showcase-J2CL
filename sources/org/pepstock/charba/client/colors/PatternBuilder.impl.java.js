goog.module('org.pepstock.charba.client.colors.PatternBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CanvasObject = goog.forwardDeclare('org.pepstock.charba.client.colors.CanvasObject$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.colors.CanvasObject.Property$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let TilesFactoryDefaults = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.TilesFactoryDefaults$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let Id = goog.forwardDeclare('org.pepstock.charba.client.commons.Id$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Repetition = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.Repetition$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptObject = goog.forwardDeclare('vmbootstrap.JavaScriptObject$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class PatternBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLImageElement}*/
  this.f_image__org_pepstock_charba_client_colors_PatternBuilder_;
  /**@type {CanvasPattern}*/
  this.f_canvasPatternItem__org_pepstock_charba_client_colors_PatternBuilder_;
  /**@type {Repetition}*/
  this.f_repetition__org_pepstock_charba_client_colors_PatternBuilder_;
  /**@type {number}*/
  this.f_width__org_pepstock_charba_client_colors_PatternBuilder_ = 0;
  /**@type {number}*/
  this.f_height__org_pepstock_charba_client_colors_PatternBuilder_ = 0;
 }
 //Factory method corresponding to constructor 'PatternBuilder(Img, Repetition, int, int)'.
 /** @return {!PatternBuilder} */
 static $create__org_pepstock_charba_client_dom_elements_Img__org_pepstock_charba_client_dom_enums_Repetition__int__int(/** HTMLImageElement */ image, /** Repetition */ repetition, /** number */ width, /** number */ height) {
  let $instance = new PatternBuilder();
  $instance.$ctor__org_pepstock_charba_client_colors_PatternBuilder__org_pepstock_charba_client_dom_elements_Img__org_pepstock_charba_client_dom_enums_Repetition__int__int(image, repetition, width, height);
  return $instance;
 }
 //Initialization from constructor 'PatternBuilder(Img, Repetition, int, int)'.
 
 $ctor__org_pepstock_charba_client_colors_PatternBuilder__org_pepstock_charba_client_dom_elements_Img__org_pepstock_charba_client_dom_enums_Repetition__int__int(/** HTMLImageElement */ image, /** Repetition */ repetition, /** number */ width, /** number */ height) {
  this.$ctor__java_lang_Object__();
  this.f_image__org_pepstock_charba_client_colors_PatternBuilder_ = image;
  this.f_repetition__org_pepstock_charba_client_colors_PatternBuilder_ = repetition;
  this.f_width__org_pepstock_charba_client_colors_PatternBuilder_ = width;
  this.f_height__org_pepstock_charba_client_colors_PatternBuilder_ = height;
  this.f_canvasPatternItem__org_pepstock_charba_client_colors_PatternBuilder_ = null;
 }
 //Factory method corresponding to constructor 'PatternBuilder(CanvasPatternItem, int, int)'.
 /** @return {!PatternBuilder} */
 static $create__org_pepstock_charba_client_dom_elements_CanvasPatternItem__int__int(/** CanvasPattern */ canvasPatternItem, /** number */ width, /** number */ height) {
  let $instance = new PatternBuilder();
  $instance.$ctor__org_pepstock_charba_client_colors_PatternBuilder__org_pepstock_charba_client_dom_elements_CanvasPatternItem__int__int(canvasPatternItem, width, height);
  return $instance;
 }
 //Initialization from constructor 'PatternBuilder(CanvasPatternItem, int, int)'.
 
 $ctor__org_pepstock_charba_client_colors_PatternBuilder__org_pepstock_charba_client_dom_elements_CanvasPatternItem__int__int(/** CanvasPattern */ canvasPatternItem, /** number */ width, /** number */ height) {
  this.$ctor__java_lang_Object__();
  this.f_canvasPatternItem__org_pepstock_charba_client_colors_PatternBuilder_ = canvasPatternItem;
  this.f_repetition__org_pepstock_charba_client_colors_PatternBuilder_ = Repetition.f_REPEAT__org_pepstock_charba_client_dom_enums_Repetition;
  this.f_width__org_pepstock_charba_client_colors_PatternBuilder_ = width;
  this.f_height__org_pepstock_charba_client_colors_PatternBuilder_ = height;
  this.f_image__org_pepstock_charba_client_colors_PatternBuilder_ = null;
 }
 /** @return {PatternBuilder} */
 static m_create__org_pepstock_charba_client_dom_elements_Img(/** HTMLImageElement */ image) {
  PatternBuilder.$clinit();
  return PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_Img__org_pepstock_charba_client_dom_enums_Repetition(image, Repetition.f_REPEAT__org_pepstock_charba_client_dom_enums_Repetition);
 }
 /** @return {PatternBuilder} */
 static m_create__org_pepstock_charba_client_dom_elements_Img__org_pepstock_charba_client_dom_enums_Repetition(/** HTMLImageElement */ image, /** Repetition */ repetition) {
  PatternBuilder.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(image, "Image argument");
  return PatternBuilder.$create__org_pepstock_charba_client_dom_elements_Img__org_pepstock_charba_client_dom_enums_Repetition__int__int(image, $Equality.$same(repetition, null) ? Repetition.f_REPEAT__org_pepstock_charba_client_dom_enums_Repetition : repetition, image.width, image.height);
 }
 /** @return {PatternBuilder} */
 static m_create__org_pepstock_charba_client_dom_elements_CanvasPatternItem(/** CanvasPattern */ canvasPattern) {
  PatternBuilder.$clinit();
  return PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_CanvasPatternItem__int__int(canvasPattern, TilesFactoryDefaults.f_DEFAULT_SIZE__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults, TilesFactoryDefaults.f_DEFAULT_SIZE__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults);
 }
 /** @return {PatternBuilder} */
 static m_create__org_pepstock_charba_client_dom_elements_CanvasPatternItem__int(/** CanvasPattern */ canvasPattern, /** number */ squareSize) {
  PatternBuilder.$clinit();
  return PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_CanvasPatternItem__int__int(canvasPattern, squareSize, squareSize);
 }
 /** @return {PatternBuilder} */
 static m_create__org_pepstock_charba_client_dom_elements_CanvasPatternItem__int__int(/** CanvasPattern */ canvasPattern, /** number */ width, /** number */ height) {
  PatternBuilder.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(canvasPattern, "Canvas pattern argument");
  return PatternBuilder.$create__org_pepstock_charba_client_dom_elements_CanvasPatternItem__int__int(canvasPattern, width, height);
 }
 /** @return {Pattern} */
 m_build__() {
  let id = this.m_generateId___$p_org_pepstock_charba_client_colors_PatternBuilder();
  if (PatternBuilder.f_PATTERNS__org_pepstock_charba_client_colors_PatternBuilder_.containsKey(id)) {
   return /**@type {Pattern}*/ ($Casts.$to(PatternBuilder.f_PATTERNS__org_pepstock_charba_client_colors_PatternBuilder_.get(id), Pattern));
  }
  let /** Pattern */ result;
  if (!$Equality.$same(this.f_image__org_pepstock_charba_client_colors_PatternBuilder_, null)) {
   result = Pattern.$create__java_lang_String__org_pepstock_charba_client_dom_elements_Img__org_pepstock_charba_client_dom_enums_Repetition__int__int(id, this.f_image__org_pepstock_charba_client_colors_PatternBuilder_, this.f_repetition__org_pepstock_charba_client_colors_PatternBuilder_, this.f_width__org_pepstock_charba_client_colors_PatternBuilder_, this.f_height__org_pepstock_charba_client_colors_PatternBuilder_);
  } else {
   result = Pattern.$create__java_lang_String__org_pepstock_charba_client_dom_elements_CanvasPatternItem__int__int(id, this.f_canvasPatternItem__org_pepstock_charba_client_colors_PatternBuilder_, this.f_width__org_pepstock_charba_client_colors_PatternBuilder_, this.f_height__org_pepstock_charba_client_colors_PatternBuilder_);
  }
  PatternBuilder.f_PATTERNS__org_pepstock_charba_client_colors_PatternBuilder_.put(id, result);
  return result;
 }
 /** @return {Pattern} */
 static m_build__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  PatternBuilder.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(nativeObject, "Native object argument");
  let id = Id.m_getStringProperty__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(Property.f_CHARBA_OBJECT_ID__org_pepstock_charba_client_colors_CanvasObject_Property, nativeObject);
  Checker.m_assertCheck__boolean__java_lang_String(!$Equality.$same(id, null), Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(CanvasObject.f_MISSING_PROPERTY__org_pepstock_charba_client_colors_CanvasObject, [Property.f_CHARBA_OBJECT_ID__org_pepstock_charba_client_colors_CanvasObject_Property.m_value__()]));
  if (PatternBuilder.f_PATTERNS__org_pepstock_charba_client_colors_PatternBuilder_.containsKey(id)) {
   return /**@type {Pattern}*/ ($Casts.$to(PatternBuilder.f_PATTERNS__org_pepstock_charba_client_colors_PatternBuilder_.get(id), Pattern));
  }
  let result = Pattern.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  PatternBuilder.f_PATTERNS__org_pepstock_charba_client_colors_PatternBuilder_.put(id, result);
  return result;
 }
 /** @return {Pattern} */
 static m_retrieve__org_pepstock_charba_client_dom_elements_CanvasPatternItem(/** CanvasPattern */ canvasPattern) {
  PatternBuilder.$clinit();
  if (!$Equality.$same(canvasPattern, null)) {
   let id = Id.m_get__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(canvasPattern)));
   if (!$Equality.$same(id, null) && PatternBuilder.f_PATTERNS__org_pepstock_charba_client_colors_PatternBuilder_.containsKey(id)) {
    return /**@type {Pattern}*/ ($Casts.$to(PatternBuilder.f_PATTERNS__org_pepstock_charba_client_colors_PatternBuilder_.get(id), Pattern));
   }
  }
  return null;
 }
 /** @return {?string} */
 m_generateId___$p_org_pepstock_charba_client_colors_PatternBuilder() {
  let sb = StringBuilder.$create__();
  if (!$Equality.$same(this.f_image__org_pepstock_charba_client_colors_PatternBuilder_, null)) {
   sb.m_append__java_lang_String(Class.$get($JavaScriptObject).m_getSimpleName__()).m_append__java_lang_String(Constants.f_MINUS__org_pepstock_charba_client_commons_Constants);
   sb.m_append__int($Objects.m_hashCode__java_lang_Object(this.f_image__org_pepstock_charba_client_colors_PatternBuilder_)).m_append__java_lang_String(Constants.f_MINUS__org_pepstock_charba_client_commons_Constants);
  } else {
   sb.m_append__java_lang_String(Class.$get($JavaScriptObject).m_getSimpleName__()).m_append__java_lang_String(Constants.f_MINUS__org_pepstock_charba_client_commons_Constants);
   sb.m_append__int($Objects.m_hashCode__java_lang_Object(this.f_canvasPatternItem__org_pepstock_charba_client_colors_PatternBuilder_)).m_append__java_lang_String(Constants.f_MINUS__org_pepstock_charba_client_commons_Constants);
  }
  sb.m_append__java_lang_Object(this.f_repetition__org_pepstock_charba_client_colors_PatternBuilder_).m_append__java_lang_String(Constants.f_MINUS__org_pepstock_charba_client_commons_Constants);
  sb.m_append__int(this.f_width__org_pepstock_charba_client_colors_PatternBuilder_).m_append__java_lang_String(Constants.f_MINUS__org_pepstock_charba_client_commons_Constants);
  sb.m_append__int(this.f_height__org_pepstock_charba_client_colors_PatternBuilder_);
  return sb.toString();
 }
 
 static $clinit() {
  PatternBuilder.$clinit = () =>{};
  PatternBuilder.$loadModules();
  j_l_Object.$clinit();
  PatternBuilder.f_PATTERNS__org_pepstock_charba_client_colors_PatternBuilder_ = /**@type {!HashMap<?string, Pattern>}*/ (HashMap.$create__());
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PatternBuilder;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  CanvasObject = goog.module.get('org.pepstock.charba.client.colors.CanvasObject$impl');
  Property = goog.module.get('org.pepstock.charba.client.colors.CanvasObject.Property$impl');
  Pattern = goog.module.get('org.pepstock.charba.client.colors.Pattern$impl');
  TilesFactoryDefaults = goog.module.get('org.pepstock.charba.client.colors.tiles.TilesFactoryDefaults$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  Id = goog.module.get('org.pepstock.charba.client.commons.Id$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Repetition = goog.module.get('org.pepstock.charba.client.dom.enums.Repetition$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptObject = goog.module.get('vmbootstrap.JavaScriptObject$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@type {Map<?string, Pattern>}*/
PatternBuilder.f_PATTERNS__org_pepstock_charba_client_colors_PatternBuilder_;
$Util.$setClassMetadata(PatternBuilder, "org.pepstock.charba.client.colors.PatternBuilder");

exports = PatternBuilder;

//# sourceMappingURL=PatternBuilder.js.map
