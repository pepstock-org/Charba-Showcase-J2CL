goog.module('org.pepstock.charba.client.defaults.globals.DefaultTicks$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultTicks = goog.require('org.pepstock.charba.client.defaults.IsDefaultTicks$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let IsDefaultMajor = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultMajor$impl');
let IsDefaultNumberFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let DefaultMajor = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultMajor$impl');
let DefaultNumberFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultNumberFormatOptions$impl');
let DefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');
let DefaultRoutedFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultRoutedFont$impl');
let CrossAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.CrossAlign$impl');
let ElementAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ElementAlign$impl');
let TickSource = goog.forwardDeclare('org.pepstock.charba.client.enums.TickSource$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

/**
 * @implements {IsDefaultTicks}
 */
class DefaultTicks extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultMajor}*/
  this.f_major__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
  /**@type {DefaultRoutedFont}*/
  this.f_font__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
  /**@type {DefaultPadding}*/
  this.f_backdropPadding__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
 }
 /** @return {!DefaultTicks} */
 static $create__() {
  DefaultTicks.$clinit();
  let $instance = new DefaultTicks();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultTicks__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultTicks__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_defaults_globals_DefaultTicks();
 }
 /** @override @return {IsDefaultFont} */
 m_getFont__() {
  return this.f_font__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
 }
 /** @override @return {IsDefaultPadding} */
 m_getBackdropPadding__() {
  return this.f_backdropPadding__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
 }
 /** @override @return {IsDefaultMajor} */
 m_getMajor__() {
  return this.f_major__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
 }
 /** @override @return {IsDefaultNumberFormatOptions} */
 m_getNumberFormat__() {
  return DefaultNumberFormatOptions.f_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultNumberFormatOptions;
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return Defaults.m_get__().m_getGlobal__().m_getColorAsString__();
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return DefaultTicks.f_DEFAULT_DISPLAY__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
 }
 /** @override @return {boolean} */
 m_isAutoSkip__() {
  return DefaultTicks.f_DEFAULT_AUTO_SKIP__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
 }
 /** @override @return {number} */
 m_getAutoSkipPadding__() {
  return DefaultTicks.f_DEFAULT_AUTO_SKIP_PADDING__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
 }
 /** @override @return {boolean} */
 m_isIncludeBounds__() {
  return DefaultTicks.f_DEFAULT_INCLUDE_BOUNDS__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
 }
 /** @override @return {number} */
 m_getLabelOffset__() {
  return DefaultTicks.f_DEFAULT_LABEL_OFFSET__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
 }
 /** @override @return {number} */
 m_getCount__() {
  return DefaultTicks.f_DEFAULT_COUNT__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
 }
 /** @override @return {number} */
 m_getMaxRotation__() {
  return DefaultTicks.f_DEFAULT_MAX_ROTATION__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
 }
 /** @override @return {number} */
 m_getMinRotation__() {
  return DefaultTicks.f_DEFAULT_MIN_ROTATION__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
 }
 /** @override @return {boolean} */
 m_isMirror__() {
  return DefaultTicks.f_DEFAULT_MIRROR__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
 }
 /** @override @return {number} */
 m_getPadding__() {
  return DefaultTicks.f_DEFAULT_PADDING__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
 }
 /** @override @return {number} */
 m_getMaxTicksLimit__() {
  return DefaultTicks.f_DEFAULT_MAX_TICKS_LIMIT__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
 }
 /** @override @return {number} */
 m_getStepSize__() {
  return DefaultTicks.f_DEFAULT_STEP_SIZE__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
 }
 /** @override @return {?string} */
 m_getBackdropColorAsString__() {
  return DefaultTicks.f_DEFAULT_BACKDROP_COLOR__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
 }
 /** @override @return {boolean} */
 m_isShowLabelBackdrop__() {
  return DefaultTicks.f_DEFAULT_SHOW_LABEL_BACKDROP__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
 }
 /** @override @return {TickSource} */
 m_getSource__() {
  return TickSource.f_AUTO__org_pepstock_charba_client_enums_TickSource;
 }
 /** @override @return {number} */
 m_getPrecision__() {
  return DefaultTicks.f_DEFAULT_PRECISION__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
 }
 /** @override @return {number} */
 m_getZ__() {
  return DefaultTicks.f_DEFAULT_Z__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
 }
 /** @override @return {number} */
 m_getSampleSize__() {
  return Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined;
 }
 /** @override @return {ElementAlign} */
 m_getAlign__() {
  return ElementAlign.f_CENTER__org_pepstock_charba_client_enums_ElementAlign;
 }
 /** @override @return {CrossAlign} */
 m_getCrossAlign__() {
  return CrossAlign.f_NEAR__org_pepstock_charba_client_enums_CrossAlign;
 }
 /** @override @return {?string} */
 m_getTextStrokeColorAsString__() {
  return DefaultTicks.f_DEFAULT_TEXT_STROKE_COLOR__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
 }
 /** @override @return {number} */
 m_getTextStrokeWidth__() {
  return DefaultTicks.f_DEFAULT_TEXT_STROKE_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_defaults_globals_DefaultTicks() {
  this.f_major__org_pepstock_charba_client_defaults_globals_DefaultTicks_ = DefaultMajor.$create__();
  this.f_font__org_pepstock_charba_client_defaults_globals_DefaultTicks_ = DefaultRoutedFont.$create__();
  this.f_backdropPadding__org_pepstock_charba_client_defaults_globals_DefaultTicks_ = DefaultPadding.$create__int(DefaultTicks.f_DEFAULT_BACKDROP_PADDING__org_pepstock_charba_client_defaults_globals_DefaultTicks_);
 }
 
 static $clinit() {
  DefaultTicks.$clinit = () =>{};
  DefaultTicks.$loadModules();
  j_l_Object.$clinit();
  DefaultTicks.f_DEFAULT_TEXT_STROKE_COLOR__org_pepstock_charba_client_defaults_globals_DefaultTicks_ = HtmlColor.f_TRANSPARENT__org_pepstock_charba_client_colors_HtmlColor.m_toRGBA__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultTicks;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  DefaultMajor = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultMajor$impl');
  DefaultNumberFormatOptions = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultNumberFormatOptions$impl');
  DefaultPadding = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');
  DefaultRoutedFont = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultRoutedFont$impl');
  CrossAlign = goog.module.get('org.pepstock.charba.client.enums.CrossAlign$impl');
  ElementAlign = goog.module.get('org.pepstock.charba.client.enums.ElementAlign$impl');
  TickSource = goog.module.get('org.pepstock.charba.client.enums.TickSource$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
/**@const {boolean}*/
DefaultTicks.f_DEFAULT_DISPLAY__org_pepstock_charba_client_defaults_globals_DefaultTicks_ = true;
/**@const {boolean}*/
DefaultTicks.f_DEFAULT_AUTO_SKIP__org_pepstock_charba_client_defaults_globals_DefaultTicks_ = true;
/**@const {boolean}*/
DefaultTicks.f_DEFAULT_INCLUDE_BOUNDS__org_pepstock_charba_client_defaults_globals_DefaultTicks_ = true;
/**@const {number}*/
DefaultTicks.f_DEFAULT_AUTO_SKIP_PADDING__org_pepstock_charba_client_defaults_globals_DefaultTicks_ = 3;
/**@const {number}*/
DefaultTicks.f_DEFAULT_LABEL_OFFSET__org_pepstock_charba_client_defaults_globals_DefaultTicks_ = 0;
/**@const {number}*/
DefaultTicks.f_DEFAULT_MAX_ROTATION__org_pepstock_charba_client_defaults_globals_DefaultTicks_ = 50;
/**@const {number}*/
DefaultTicks.f_DEFAULT_MIN_ROTATION__org_pepstock_charba_client_defaults_globals_DefaultTicks_ = 0;
/**@const {boolean}*/
DefaultTicks.f_DEFAULT_MIRROR__org_pepstock_charba_client_defaults_globals_DefaultTicks_ = false;
/**@const {number}*/
DefaultTicks.f_DEFAULT_PADDING__org_pepstock_charba_client_defaults_globals_DefaultTicks_ = 3;
/**@const {number}*/
DefaultTicks.f_DEFAULT_MAX_TICKS_LIMIT__org_pepstock_charba_client_defaults_globals_DefaultTicks_ = 11;
/**@const {number}*/
DefaultTicks.f_DEFAULT_STEP_SIZE__org_pepstock_charba_client_defaults_globals_DefaultTicks_ = 4.9E-324;
/**@const {?string}*/
DefaultTicks.f_DEFAULT_BACKDROP_COLOR__org_pepstock_charba_client_defaults_globals_DefaultTicks_ = "rgba(255,255,255,0.75)";
/**@const {number}*/
DefaultTicks.f_DEFAULT_BACKDROP_PADDING__org_pepstock_charba_client_defaults_globals_DefaultTicks_ = 2;
/**@const {boolean}*/
DefaultTicks.f_DEFAULT_SHOW_LABEL_BACKDROP__org_pepstock_charba_client_defaults_globals_DefaultTicks_ = true;
/**@const {number}*/
DefaultTicks.f_DEFAULT_PRECISION__org_pepstock_charba_client_defaults_globals_DefaultTicks_ = 0;
/**@const {number}*/
DefaultTicks.f_DEFAULT_Z__org_pepstock_charba_client_defaults_globals_DefaultTicks_ = 0;
/**@type {?string}*/
DefaultTicks.f_DEFAULT_TEXT_STROKE_COLOR__org_pepstock_charba_client_defaults_globals_DefaultTicks_;
/**@const {number}*/
DefaultTicks.f_DEFAULT_TEXT_STROKE_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultTicks_ = 0;
/**@const {number}*/
DefaultTicks.f_DEFAULT_COUNT__org_pepstock_charba_client_defaults_globals_DefaultTicks_ = -2147483648;
IsDefaultTicks.$markImplementor(DefaultTicks);
$Util.$setClassMetadata(DefaultTicks, "org.pepstock.charba.client.defaults.globals.DefaultTicks");

exports = DefaultTicks;

//# sourceMappingURL=DefaultTicks.js.map
