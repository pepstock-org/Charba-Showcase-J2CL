goog.module('org.pepstock.charba.client.colors.tiles.TilesFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Locale = goog.forwardDeclare('java.util.Locale$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let PatternBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.PatternBuilder$impl');
let AbstractPointStyleShapeDrawer = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.AbstractPointStyleShapeDrawer$impl');
let IsShape = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.IsShape$impl');
let PointStyleShape = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.PointStyleShape$impl');
let TilesFactoryDefaults = goog.forwardDeclare('org.pepstock.charba.client.colors.tiles.TilesFactoryDefaults$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let DOMBuilder = goog.forwardDeclare('org.pepstock.charba.client.dom.DOMBuilder$impl');
let CanvasPatternItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.CanvasPatternItem.$Overlay$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let PointStyleType = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyleType$impl');
let HtmlLegendItem = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.HtmlLegendItem$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class TilesFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_isCanvasSupported__org_pepstock_charba_client_colors_tiles_TilesFactory_ = false;
  /**@type {HTMLCanvasElement}*/
  this.f_canvas__org_pepstock_charba_client_colors_tiles_TilesFactory_;
  /**@type {TilesFactoryDefaults}*/
  this.f_defaults__org_pepstock_charba_client_colors_tiles_TilesFactory_;
 }
 /** @return {!TilesFactory} */
 static $create__() {
  let $instance = new TilesFactory();
  $instance.$ctor__org_pepstock_charba_client_colors_tiles_TilesFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_tiles_TilesFactory__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_colors_tiles_TilesFactory();
  Checker.m_assertCheck__boolean__java_lang_String(this.f_isCanvasSupported__org_pepstock_charba_client_colors_tiles_TilesFactory_, TilesFactory.f_CANVAS_NOT_SUPPORTED_MESSAGE__org_pepstock_charba_client_colors_tiles_TilesFactory_);
  this.f_canvas__org_pepstock_charba_client_colors_tiles_TilesFactory_ = DOMBuilder.m_get__().m_createCanvasElement__();
  this.f_defaults__org_pepstock_charba_client_colors_tiles_TilesFactory_ = TilesFactoryDefaults.$create__();
 }
 /** @return {TilesFactoryDefaults} */
 static m_getDefaults__() {
  TilesFactory.$clinit();
  return TilesFactory.f_INSTANCE__org_pepstock_charba_client_colors_tiles_TilesFactory_.f_defaults__org_pepstock_charba_client_colors_tiles_TilesFactory_;
 }
 /** @return {CanvasPattern} */
 static m_createTile__() {
  TilesFactory.$clinit();
  return TilesFactory.m_createTile__org_pepstock_charba_client_colors_tiles_IsShape(TilesFactory.f_INSTANCE__org_pepstock_charba_client_colors_tiles_TilesFactory_.f_defaults__org_pepstock_charba_client_colors_tiles_TilesFactory_.m_getShape__());
 }
 /** @return {CanvasPattern} */
 static m_createTile__org_pepstock_charba_client_colors_tiles_IsShape(/** IsShape */ shape) {
  TilesFactory.$clinit();
  return TilesFactory.m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__java_lang_String(shape, TilesFactory.f_INSTANCE__org_pepstock_charba_client_colors_tiles_TilesFactory_.f_defaults__org_pepstock_charba_client_colors_tiles_TilesFactory_.m_getBackgroundColorAsString__());
 }
 /** @return {CanvasPattern} */
 static m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__org_pepstock_charba_client_colors_IsColor(/** IsShape */ shape, /** IsColor */ backgroundColor) {
  TilesFactory.$clinit();
  return TilesFactory.m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__org_pepstock_charba_client_colors_IsColor__org_pepstock_charba_client_colors_IsColor(shape, backgroundColor, TilesFactory.f_INSTANCE__org_pepstock_charba_client_colors_tiles_TilesFactory_.f_defaults__org_pepstock_charba_client_colors_tiles_TilesFactory_.m_getShapeColor__());
 }
 /** @return {CanvasPattern} */
 static m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__java_lang_String(/** IsShape */ shape, /** ?string */ backgroundColor) {
  TilesFactory.$clinit();
  return TilesFactory.m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__java_lang_String__java_lang_String(shape, backgroundColor, TilesFactory.f_INSTANCE__org_pepstock_charba_client_colors_tiles_TilesFactory_.f_defaults__org_pepstock_charba_client_colors_tiles_TilesFactory_.m_getShapeColorAsString__());
 }
 /** @return {CanvasPattern} */
 static m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__java_lang_String__java_lang_String(/** IsShape */ shape, /** ?string */ backgroundColor, /** ?string */ shapeColor) {
  TilesFactory.$clinit();
  return TilesFactory.m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__java_lang_String__java_lang_String__int(shape, backgroundColor, shapeColor, TilesFactory.f_INSTANCE__org_pepstock_charba_client_colors_tiles_TilesFactory_.f_defaults__org_pepstock_charba_client_colors_tiles_TilesFactory_.m_getSize__());
 }
 /** @return {CanvasPattern} */
 static m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__org_pepstock_charba_client_colors_IsColor__org_pepstock_charba_client_colors_IsColor(/** IsShape */ shape, /** IsColor */ backgroundColor, /** IsColor */ shapeColor) {
  TilesFactory.$clinit();
  return TilesFactory.m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__org_pepstock_charba_client_colors_IsColor__org_pepstock_charba_client_colors_IsColor__int(shape, backgroundColor, shapeColor, TilesFactory.f_INSTANCE__org_pepstock_charba_client_colors_tiles_TilesFactory_.f_defaults__org_pepstock_charba_client_colors_tiles_TilesFactory_.m_getSize__());
 }
 /** @return {CanvasPattern} */
 static m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__org_pepstock_charba_client_colors_IsColor__org_pepstock_charba_client_colors_IsColor__int(/** IsShape */ shape, /** IsColor */ backgroundColor, /** IsColor */ shapeColor, /** number */ size) {
  TilesFactory.$clinit();
  return TilesFactory.m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__java_lang_String__java_lang_String__int(shape, IsColor.m_isConsistent__org_pepstock_charba_client_colors_IsColor(backgroundColor) ? backgroundColor.m_toRGBA__() : TilesFactory.f_INSTANCE__org_pepstock_charba_client_colors_tiles_TilesFactory_.f_defaults__org_pepstock_charba_client_colors_tiles_TilesFactory_.m_getBackgroundColorAsString__(), IsColor.m_isConsistent__org_pepstock_charba_client_colors_IsColor(shapeColor) ? shapeColor.m_toRGBA__() : TilesFactory.f_INSTANCE__org_pepstock_charba_client_colors_tiles_TilesFactory_.f_defaults__org_pepstock_charba_client_colors_tiles_TilesFactory_.m_getShapeColorAsString__(), size);
 }
 /** @return {CanvasPattern} */
 static m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__java_lang_String__java_lang_String__int(/** IsShape */ shape, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  TilesFactory.$clinit();
  return TilesFactory.m_buildTile__org_pepstock_charba_client_colors_tiles_IsShape__java_lang_String__java_lang_String__int(shape, backgroundColor, shapeColor, size);
 }
 /** @return {Pattern} */
 static m_createPattern__() {
  TilesFactory.$clinit();
  return PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_CanvasPatternItem(TilesFactory.m_createTile__()).m_build__();
 }
 /** @return {Pattern} */
 static m_createPattern__org_pepstock_charba_client_colors_tiles_IsShape(/** IsShape */ shape) {
  TilesFactory.$clinit();
  return PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_CanvasPatternItem(TilesFactory.m_createTile__org_pepstock_charba_client_colors_tiles_IsShape(shape)).m_build__();
 }
 /** @return {Pattern} */
 static m_createPattern__org_pepstock_charba_client_colors_tiles_IsShape__org_pepstock_charba_client_colors_IsColor(/** IsShape */ shape, /** IsColor */ backgroundColor) {
  TilesFactory.$clinit();
  return PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_CanvasPatternItem(TilesFactory.m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__org_pepstock_charba_client_colors_IsColor(shape, backgroundColor)).m_build__();
 }
 /** @return {Pattern} */
 static m_createPattern__org_pepstock_charba_client_colors_tiles_IsShape__java_lang_String(/** IsShape */ shape, /** ?string */ backgroundColor) {
  TilesFactory.$clinit();
  return PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_CanvasPatternItem(TilesFactory.m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__java_lang_String(shape, backgroundColor)).m_build__();
 }
 /** @return {Pattern} */
 static m_createPattern__org_pepstock_charba_client_colors_tiles_IsShape__java_lang_String__java_lang_String(/** IsShape */ shape, /** ?string */ backgroundColor, /** ?string */ shapeColor) {
  TilesFactory.$clinit();
  return PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_CanvasPatternItem(TilesFactory.m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__java_lang_String__java_lang_String(shape, backgroundColor, shapeColor)).m_build__();
 }
 /** @return {Pattern} */
 static m_createPattern__org_pepstock_charba_client_colors_tiles_IsShape__org_pepstock_charba_client_colors_IsColor__org_pepstock_charba_client_colors_IsColor(/** IsShape */ shape, /** IsColor */ backgroundColor, /** IsColor */ shapeColor) {
  TilesFactory.$clinit();
  return PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_CanvasPatternItem(TilesFactory.m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__org_pepstock_charba_client_colors_IsColor__org_pepstock_charba_client_colors_IsColor(shape, backgroundColor, shapeColor)).m_build__();
 }
 /** @return {Pattern} */
 static m_createPattern__org_pepstock_charba_client_colors_tiles_IsShape__java_lang_String__java_lang_String__int(/** IsShape */ shape, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  TilesFactory.$clinit();
  return PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_CanvasPatternItem__int(TilesFactory.m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__java_lang_String__java_lang_String__int(shape, backgroundColor, shapeColor, size), size).m_build__();
 }
 /** @return {Pattern} */
 static m_createPattern__org_pepstock_charba_client_colors_tiles_IsShape__org_pepstock_charba_client_colors_IsColor__org_pepstock_charba_client_colors_IsColor__int(/** IsShape */ shape, /** IsColor */ backgroundColor, /** IsColor */ shapeColor, /** number */ size) {
  TilesFactory.$clinit();
  return PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_CanvasPatternItem__int(TilesFactory.m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__org_pepstock_charba_client_colors_IsColor__org_pepstock_charba_client_colors_IsColor__int(shape, backgroundColor, shapeColor, size), size).m_build__();
 }
 /** @return {Pattern} */
 static m_createPattern__org_pepstock_charba_client_enums_PointStyle(/** PointStyle */ style) {
  TilesFactory.$clinit();
  return PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_CanvasPatternItem(TilesFactory.m_createTile__org_pepstock_charba_client_colors_tiles_IsShape(PointStyleShape.m_get__org_pepstock_charba_client_enums_PointStyle(style))).m_build__();
 }
 /** @return {Pattern} */
 static m_createPattern__org_pepstock_charba_client_enums_PointStyle__org_pepstock_charba_client_colors_IsColor(/** PointStyle */ style, /** IsColor */ backgroundColor) {
  TilesFactory.$clinit();
  return PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_CanvasPatternItem(TilesFactory.m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__org_pepstock_charba_client_colors_IsColor(PointStyleShape.m_get__org_pepstock_charba_client_enums_PointStyle(style), backgroundColor)).m_build__();
 }
 /** @return {Pattern} */
 static m_createPattern__org_pepstock_charba_client_enums_PointStyle__java_lang_String(/** PointStyle */ style, /** ?string */ backgroundColor) {
  TilesFactory.$clinit();
  return PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_CanvasPatternItem(TilesFactory.m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__java_lang_String(PointStyleShape.m_get__org_pepstock_charba_client_enums_PointStyle(style), backgroundColor)).m_build__();
 }
 /** @return {Pattern} */
 static m_createPattern__org_pepstock_charba_client_enums_PointStyle__java_lang_String__java_lang_String(/** PointStyle */ style, /** ?string */ backgroundColor, /** ?string */ shapeColor) {
  TilesFactory.$clinit();
  return PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_CanvasPatternItem(TilesFactory.m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__java_lang_String__java_lang_String(PointStyleShape.m_get__org_pepstock_charba_client_enums_PointStyle(style), backgroundColor, shapeColor)).m_build__();
 }
 /** @return {Pattern} */
 static m_createPattern__org_pepstock_charba_client_enums_PointStyle__org_pepstock_charba_client_colors_IsColor__org_pepstock_charba_client_colors_IsColor(/** PointStyle */ style, /** IsColor */ backgroundColor, /** IsColor */ shapeColor) {
  TilesFactory.$clinit();
  return PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_CanvasPatternItem(TilesFactory.m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__org_pepstock_charba_client_colors_IsColor__org_pepstock_charba_client_colors_IsColor(PointStyleShape.m_get__org_pepstock_charba_client_enums_PointStyle(style), backgroundColor, shapeColor)).m_build__();
 }
 /** @return {Pattern} */
 static m_createPattern__org_pepstock_charba_client_enums_PointStyle__java_lang_String__java_lang_String__int(/** PointStyle */ style, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  TilesFactory.$clinit();
  return PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_CanvasPatternItem__int(TilesFactory.m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__java_lang_String__java_lang_String__int(PointStyleShape.m_get__org_pepstock_charba_client_enums_PointStyle(style), backgroundColor, shapeColor, size), size).m_build__();
 }
 /** @return {Pattern} */
 static m_createPattern__org_pepstock_charba_client_enums_PointStyle__org_pepstock_charba_client_colors_IsColor__org_pepstock_charba_client_colors_IsColor__int(/** PointStyle */ style, /** IsColor */ backgroundColor, /** IsColor */ shapeColor, /** number */ size) {
  TilesFactory.$clinit();
  return PatternBuilder.m_create__org_pepstock_charba_client_dom_elements_CanvasPatternItem__int(TilesFactory.m_createTile__org_pepstock_charba_client_colors_tiles_IsShape__org_pepstock_charba_client_colors_IsColor__org_pepstock_charba_client_colors_IsColor__int(PointStyleShape.m_get__org_pepstock_charba_client_enums_PointStyle(style), backgroundColor, shapeColor, size), size).m_build__();
 }
 /** @return {CanvasPattern} */
 static m_buildTile__org_pepstock_charba_client_colors_tiles_IsShape__java_lang_String__java_lang_String__int(/** IsShape */ shape, /** ?string */ backgroundColor, /** ?string */ shapeColor, /** number */ size) {
  let shapeParam = IsShape.m_isValid__org_pepstock_charba_client_colors_tiles_IsShape(shape) ? shape : TilesFactory.f_INSTANCE__org_pepstock_charba_client_colors_tiles_TilesFactory_.f_defaults__org_pepstock_charba_client_colors_tiles_TilesFactory_.m_getShape__();
  IsShape.m_checkIfValid__org_pepstock_charba_client_colors_tiles_IsShape(shapeParam);
  let backgroundColorParam = !$Equality.$same(backgroundColor, null) ? backgroundColor : TilesFactoryDefaults.f_DEFAULT_BACKGROUND_COLOR_AS_STRING__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults;
  let shapeColorParam = !$Equality.$same(shapeColor, null) ? shapeColor : TilesFactoryDefaults.f_DEFAULT_SHAPE_COLOR_AS_STRING__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults;
  let sizeParam = Math.max(size, TilesFactoryDefaults.f_MINIMUM_SIZE__org_pepstock_charba_client_colors_tiles_TilesFactoryDefaults);
  let keyBuilder = StringBuilder.$create__java_lang_String(shape.m_getKeyPrefix__());
  keyBuilder.m_append__java_lang_String(backgroundColor).m_append__java_lang_String(shapeColor).m_append__int(size);
  let key = j_l_String.m_toLowerCase__java_lang_String__java_util_Locale(j_l_String.m_replace__java_lang_String__java_lang_CharSequence__java_lang_CharSequence(keyBuilder.toString(), TilesFactory.f_REGEXP_TRIM_SPACES_PATTERN__org_pepstock_charba_client_colors_tiles_TilesFactory_, Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants), Locale.m_getDefault__());
  if (TilesFactory.f_CANVAS_PATTERNS__org_pepstock_charba_client_colors_tiles_TilesFactory_.containsKey(key)) {
   return /**@type {CanvasPattern}*/ ($Casts.$to(TilesFactory.f_CANVAS_PATTERNS__org_pepstock_charba_client_colors_tiles_TilesFactory_.get(key), CanvasPatternItem_$Overlay));
  }
  let pattern = shapeParam.m_getDrawer__().m_createTile__org_pepstock_charba_client_dom_elements_Canvas__java_lang_String__java_lang_String__int_$pp_org_pepstock_charba_client_colors_tiles(TilesFactory.f_INSTANCE__org_pepstock_charba_client_colors_tiles_TilesFactory_.f_canvas__org_pepstock_charba_client_colors_tiles_TilesFactory_, backgroundColorParam, shapeColorParam, sizeParam);
  TilesFactory.f_CANVAS_PATTERNS__org_pepstock_charba_client_colors_tiles_TilesFactory_.put(key, pattern);
  return pattern;
 }
 /** @return {?string} */
 static m_createHtmlLegendItem__org_pepstock_charba_client_impl_plugins_HtmlLegendItem(/** HtmlLegendItem */ htmlLegendItem) {
  TilesFactory.$clinit();
  if (!$Equality.$same(htmlLegendItem, null) && !$Equality.$same(htmlLegendItem.m_getLegendItem__(), null) && $Objects.m_equals__java_lang_Object__java_lang_Object(PointStyleType.f_STRING__org_pepstock_charba_client_enums_PointStyleType, htmlLegendItem.m_getLegendItem__().m_getPointStyleType__())) {
   let key = htmlLegendItem.m_toUniqueKey__();
   if (!$Equality.$same(key, null) && TilesFactory.f_HTML_LEGEND_ITEMS__org_pepstock_charba_client_colors_tiles_TilesFactory_.containsKey(key)) {
    return /**@type {?string}*/ ($Casts.$to(TilesFactory.f_HTML_LEGEND_ITEMS__org_pepstock_charba_client_colors_tiles_TilesFactory_.get(key), j_l_String));
   }
   let pointStyle = htmlLegendItem.m_getLegendItem__().m_getPointStyle__();
   let shape = PointStyleShape.m_get__org_pepstock_charba_client_enums_PointStyle(pointStyle);
   if (AbstractPointStyleShapeDrawer.$isInstance(shape.m_getDrawer__())) {
    let pointStyleShape = /**@type {AbstractPointStyleShapeDrawer}*/ ($Casts.$to(shape.m_getDrawer__(), AbstractPointStyleShapeDrawer));
    let result = pointStyleShape.m_drawTile__org_pepstock_charba_client_dom_elements_Canvas__org_pepstock_charba_client_impl_plugins_HtmlLegendItem_$pp_org_pepstock_charba_client_colors_tiles(TilesFactory.f_INSTANCE__org_pepstock_charba_client_colors_tiles_TilesFactory_.f_canvas__org_pepstock_charba_client_colors_tiles_TilesFactory_, htmlLegendItem);
    TilesFactory.f_HTML_LEGEND_ITEMS__org_pepstock_charba_client_colors_tiles_TilesFactory_.put(key, result);
    return result;
   }
  }
  return Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
 }
 
 static m_clearHtmlLegendItems__org_pepstock_charba_client_impl_plugins_HtmlLegendItem(/** HtmlLegendItem */ htmlLegendItem) {
  TilesFactory.$clinit();
  if (!$Equality.$same(htmlLegendItem, null)) {
   TilesFactory.f_HTML_LEGEND_ITEMS__org_pepstock_charba_client_colors_tiles_TilesFactory_.keySet().m_removeIf__java_util_function_Predicate(Predicate.$adapt((key) =>{
    let key_1 = /**@type {?string}*/ ($Casts.$to(key, j_l_String));
    return j_l_String.m_startsWith__java_lang_String__java_lang_String(key_1, htmlLegendItem.m_getChart__().m_getId__());
   }));
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_colors_tiles_TilesFactory() {
  this.f_isCanvasSupported__org_pepstock_charba_client_colors_tiles_TilesFactory_ = DOMBuilder.m_get__().m_isCanvasSupported__();
 }
 
 static $clinit() {
  TilesFactory.$clinit = () =>{};
  TilesFactory.$loadModules();
  j_l_Object.$clinit();
  TilesFactory.f_INSTANCE__org_pepstock_charba_client_colors_tiles_TilesFactory_ = TilesFactory.$create__();
  TilesFactory.f_CANVAS_PATTERNS__org_pepstock_charba_client_colors_tiles_TilesFactory_ = /**@type {!HashMap<?string, CanvasPattern>}*/ (HashMap.$create__());
  TilesFactory.f_HTML_LEGEND_ITEMS__org_pepstock_charba_client_colors_tiles_TilesFactory_ = /**@type {!HashMap<?string, ?string>}*/ (HashMap.$create__());
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TilesFactory;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Locale = goog.module.get('java.util.Locale$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  PatternBuilder = goog.module.get('org.pepstock.charba.client.colors.PatternBuilder$impl');
  AbstractPointStyleShapeDrawer = goog.module.get('org.pepstock.charba.client.colors.tiles.AbstractPointStyleShapeDrawer$impl');
  IsShape = goog.module.get('org.pepstock.charba.client.colors.tiles.IsShape$impl');
  PointStyleShape = goog.module.get('org.pepstock.charba.client.colors.tiles.PointStyleShape$impl');
  TilesFactoryDefaults = goog.module.get('org.pepstock.charba.client.colors.tiles.TilesFactoryDefaults$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  DOMBuilder = goog.module.get('org.pepstock.charba.client.dom.DOMBuilder$impl');
  CanvasPatternItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.CanvasPatternItem.$Overlay$impl');
  PointStyleType = goog.module.get('org.pepstock.charba.client.enums.PointStyleType$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@type {TilesFactory}*/
TilesFactory.f_INSTANCE__org_pepstock_charba_client_colors_tiles_TilesFactory_;
/**@type {Map<?string, CanvasPattern>}*/
TilesFactory.f_CANVAS_PATTERNS__org_pepstock_charba_client_colors_tiles_TilesFactory_;
/**@const {?string}*/
TilesFactory.f_CANVAS_NOT_SUPPORTED_MESSAGE__org_pepstock_charba_client_colors_tiles_TilesFactory_ = "Ops... Canvas element is not supported...";
/**@type {Map<?string, ?string>}*/
TilesFactory.f_HTML_LEGEND_ITEMS__org_pepstock_charba_client_colors_tiles_TilesFactory_;
/**@const {?string}*/
TilesFactory.f_REGEXP_TRIM_SPACES_PATTERN__org_pepstock_charba_client_colors_tiles_TilesFactory_ = "\\s+";
$Util.$setClassMetadata(TilesFactory, "org.pepstock.charba.client.colors.tiles.TilesFactory");

exports = TilesFactory;

//# sourceMappingURL=TilesFactory.js.map
