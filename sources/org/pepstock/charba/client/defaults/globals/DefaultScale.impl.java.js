goog.module('org.pepstock.charba.client.defaults.globals.DefaultScale$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultScale = goog.require('org.pepstock.charba.client.defaults.IsDefaultScale$impl');

let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let IsDefaultAdapters = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAdapters$impl');
let IsDefaultAngleLines = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAngleLines$impl');
let IsDefaultGrid = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultGrid$impl');
let IsDefaultPointLabels = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPointLabels$impl');
let IsDefaultScaleTitle = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaleTitle$impl');
let IsDefaultTicks = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTicks$impl');
let IsDefaultTime = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTime$impl');
let DefaultAdapters = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultAdapters$impl');
let DefaultAngleLines = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultAngleLines$impl');
let DefaultGrid = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultGrid$impl');
let DefaultPointLabels = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultPointLabels$impl');
let DefaultScaleTitle = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultScaleTitle$impl');
let DefaultTicks = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTicks$impl');
let DefaultTime = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTime$impl');
let AxisPosition = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisPosition$impl');
let Bounds = goog.forwardDeclare('org.pepstock.charba.client.enums.Bounds$impl');
let Display = goog.forwardDeclare('org.pepstock.charba.client.enums.Display$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

/**
 * @implements {IsDefaultScale}
 */
class DefaultScale extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultAngleLines}*/
  this.f_angleLines__org_pepstock_charba_client_defaults_globals_DefaultScale_;
  /**@type {DefaultGrid}*/
  this.f_grid__org_pepstock_charba_client_defaults_globals_DefaultScale_;
  /**@type {DefaultPointLabels}*/
  this.f_pointLabels__org_pepstock_charba_client_defaults_globals_DefaultScale_;
  /**@type {DefaultScaleTitle}*/
  this.f_title__org_pepstock_charba_client_defaults_globals_DefaultScale_;
  /**@type {DefaultTicks}*/
  this.f_ticks__org_pepstock_charba_client_defaults_globals_DefaultScale_;
  /**@type {DefaultTime}*/
  this.f_time__org_pepstock_charba_client_defaults_globals_DefaultScale_;
  /**@type {DefaultAdapters}*/
  this.f_adapters__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @return {!DefaultScale} */
 static $create__() {
  DefaultScale.$clinit();
  let $instance = new DefaultScale();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultScale__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultScale__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_defaults_globals_DefaultScale();
 }
 /** @override @return {IsDefaultAngleLines} */
 m_getAngleLines__() {
  return this.f_angleLines__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {IsDefaultGrid} */
 m_getGrid__() {
  return this.f_grid__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {IsDefaultPointLabels} */
 m_getPointLabels__() {
  return this.f_pointLabels__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {IsDefaultScaleTitle} */
 m_getTitle__() {
  return this.f_title__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {IsDefaultTicks} */
 m_getTicks__() {
  return this.f_ticks__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {IsDefaultTime} */
 m_getTime__() {
  return this.f_time__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {IsDefaultAdapters} */
 m_getAdapters__() {
  return this.f_adapters__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {boolean} */
 m_isStacked__() {
  return DefaultScale.f_DEFAULT_STACKED__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {boolean} */
 m_isSingleStacked__() {
  return DefaultScale.f_DEFAULT_SINGLE_STACKED__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {number} */
 m_getWeight__() {
  return DefaultScale.f_DEFAULT_WEIGHT__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {Display} */
 m_getDisplay__() {
  return Display.f_TRUE__org_pepstock_charba_client_enums_Display;
 }
 /** @override @return {boolean} */
 m_isOffset__() {
  return DefaultScale.f_DEFAULT_OFFSET__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {AxisPosition} */
 m_getPosition__() {
  return AxisPosition.f_TOP__org_pepstock_charba_client_enums_AxisPosition;
 }
 /** @override @return {Bounds} */
 m_getBounds__() {
  return Bounds.f_TICKS__org_pepstock_charba_client_enums_Bounds;
 }
 /** @override @return {boolean} */
 m_isBeginAtZero__() {
  return DefaultScale.f_DEFAULT_BEGIN_AT_ZERO__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {number} */
 m_getGrace__() {
  return DefaultScale.f_DEFAULT_GRACE__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {?string} */
 m_getGraceAsPercentage__() {
  return DefaultScale.f_DEFAULT_GRACE_AS_PERCENTAGE__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {number} */
 m_getMin__() {
  return DefaultScale.f_DEFAULT_MIN__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {number} */
 m_getMax__() {
  return DefaultScale.f_DEFAULT_MAX__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {number} */
 m_getSuggestedMax__() {
  return DefaultScale.f_DEFAULT_SUGGESTED_MAX__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {number} */
 m_getSuggestedMin__() {
  return DefaultScale.f_DEFAULT_SUGGESTED_MIN__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {boolean} */
 m_isAlignToPixels__() {
  return DefaultScale.f_DEFAULT_ALIGN_TO_PIXEL__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {boolean} */
 m_isReverse__() {
  return DefaultScale.f_DEFAULT_REVERSE__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {boolean} */
 m_isAnimate__() {
  return DefaultScale.f_DEFAULT_ANIMATE__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {number} */
 m_getStartAngle__() {
  return DefaultScale.f_DEFAULT_START_ANGLE__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return DefaultScale.f_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {?string} */
 m_getStack__() {
  return DefaultScale.f_DEFAULT_STACK__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @override @return {number} */
 m_getStackWeight__() {
  return DefaultScale.f_DEFAULT_STACK_WEIGHT__org_pepstock_charba_client_defaults_globals_DefaultScale_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_defaults_globals_DefaultScale() {
  this.f_angleLines__org_pepstock_charba_client_defaults_globals_DefaultScale_ = DefaultAngleLines.$create__();
  this.f_grid__org_pepstock_charba_client_defaults_globals_DefaultScale_ = DefaultGrid.$create__();
  this.f_pointLabels__org_pepstock_charba_client_defaults_globals_DefaultScale_ = DefaultPointLabels.$create__();
  this.f_title__org_pepstock_charba_client_defaults_globals_DefaultScale_ = DefaultScaleTitle.$create__();
  this.f_ticks__org_pepstock_charba_client_defaults_globals_DefaultScale_ = DefaultTicks.$create__();
  this.f_time__org_pepstock_charba_client_defaults_globals_DefaultScale_ = DefaultTime.$create__();
  this.f_adapters__org_pepstock_charba_client_defaults_globals_DefaultScale_ = DefaultAdapters.$create__();
 }
 
 static $clinit() {
  DefaultScale.$clinit = () =>{};
  DefaultScale.$loadModules();
  j_l_Object.$clinit();
  DefaultScale.f_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_defaults_globals_DefaultScale_ = HtmlColor.f_TRANSPARENT__org_pepstock_charba_client_colors_HtmlColor.m_toRGBA__();
  DefaultScale.f_DEFAULT_STACK__org_pepstock_charba_client_defaults_globals_DefaultScale_ = Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultScale;
 }
 
 static $loadModules() {
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  DefaultAdapters = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultAdapters$impl');
  DefaultAngleLines = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultAngleLines$impl');
  DefaultGrid = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultGrid$impl');
  DefaultPointLabels = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultPointLabels$impl');
  DefaultScaleTitle = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultScaleTitle$impl');
  DefaultTicks = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTicks$impl');
  DefaultTime = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTime$impl');
  AxisPosition = goog.module.get('org.pepstock.charba.client.enums.AxisPosition$impl');
  Bounds = goog.module.get('org.pepstock.charba.client.enums.Bounds$impl');
  Display = goog.module.get('org.pepstock.charba.client.enums.Display$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
/**@const {boolean}*/
DefaultScale.f_DEFAULT_ALIGN_TO_PIXEL__org_pepstock_charba_client_defaults_globals_DefaultScale_ = false;
/**@const {boolean}*/
DefaultScale.f_DEFAULT_ANIMATE__org_pepstock_charba_client_defaults_globals_DefaultScale_ = true;
/**@const {boolean}*/
DefaultScale.f_DEFAULT_OFFSET__org_pepstock_charba_client_defaults_globals_DefaultScale_ = false;
/**@const {number}*/
DefaultScale.f_DEFAULT_WEIGHT__org_pepstock_charba_client_defaults_globals_DefaultScale_ = 0;
/**@const {number}*/
DefaultScale.f_DEFAULT_START_ANGLE__org_pepstock_charba_client_defaults_globals_DefaultScale_ = 0;
/**@const {boolean}*/
DefaultScale.f_DEFAULT_STACKED__org_pepstock_charba_client_defaults_globals_DefaultScale_ = false;
/**@const {boolean}*/
DefaultScale.f_DEFAULT_SINGLE_STACKED__org_pepstock_charba_client_defaults_globals_DefaultScale_ = false;
/**@const {boolean}*/
DefaultScale.f_DEFAULT_BEGIN_AT_ZERO__org_pepstock_charba_client_defaults_globals_DefaultScale_ = true;
/**@const {boolean}*/
DefaultScale.f_DEFAULT_REVERSE__org_pepstock_charba_client_defaults_globals_DefaultScale_ = false;
/**@const {number}*/
DefaultScale.f_DEFAULT_GRACE__org_pepstock_charba_client_defaults_globals_DefaultScale_ = 0;
/**@const {?string}*/
DefaultScale.f_DEFAULT_GRACE_AS_PERCENTAGE__org_pepstock_charba_client_defaults_globals_DefaultScale_ = "0%";
/**@const {number}*/
DefaultScale.f_DEFAULT_MIN__org_pepstock_charba_client_defaults_globals_DefaultScale_ = 4.9E-324;
/**@const {number}*/
DefaultScale.f_DEFAULT_MAX__org_pepstock_charba_client_defaults_globals_DefaultScale_ = 1.7976931348623157E308;
/**@const {number}*/
DefaultScale.f_DEFAULT_SUGGESTED_MAX__org_pepstock_charba_client_defaults_globals_DefaultScale_ = 1.7976931348623157E308;
/**@const {number}*/
DefaultScale.f_DEFAULT_SUGGESTED_MIN__org_pepstock_charba_client_defaults_globals_DefaultScale_ = 4.9E-324;
/**@type {?string}*/
DefaultScale.f_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_defaults_globals_DefaultScale_;
/**@type {?string}*/
DefaultScale.f_DEFAULT_STACK__org_pepstock_charba_client_defaults_globals_DefaultScale_;
/**@const {number}*/
DefaultScale.f_DEFAULT_STACK_WEIGHT__org_pepstock_charba_client_defaults_globals_DefaultScale_ = 1;
IsDefaultScale.$markImplementor(DefaultScale);
$Util.$setClassMetadata(DefaultScale, "org.pepstock.charba.client.defaults.globals.DefaultScale");

exports = DefaultScale;

//# sourceMappingURL=DefaultScale.js.map
