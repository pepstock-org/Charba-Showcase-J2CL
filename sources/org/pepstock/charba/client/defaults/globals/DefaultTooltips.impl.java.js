goog.module('org.pepstock.charba.client.defaults.globals.DefaultTooltips$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultTooltips = goog.require('org.pepstock.charba.client.defaults.IsDefaultTooltips$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsDefaultAnimation = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimation$impl');
let IsDefaultAnimations = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimations$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let IsDefaultTransitions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTransitions$impl');
let DefaultAnimation = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultAnimation$impl');
let DefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');
let DefaultRoutedFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultRoutedFont$impl');
let InternalAnimations = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTooltips.InternalAnimations$impl');
let InternalBodyFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTooltips.InternalBodyFont$impl');
let InternalFooterFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTooltips.InternalFooterFont$impl');
let InternalTitleFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTooltips.InternalTitleFont$impl');
let DefaultTransitions = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTransitions$impl');
let Event = goog.forwardDeclare('org.pepstock.charba.client.enums.Event$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');
let IsTooltipPosition = goog.forwardDeclare('org.pepstock.charba.client.enums.IsTooltipPosition$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');
let TextDirection = goog.forwardDeclare('org.pepstock.charba.client.enums.TextDirection$impl');
let TooltipAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TooltipAlign$impl');
let TooltipPosition = goog.forwardDeclare('org.pepstock.charba.client.enums.TooltipPosition$impl');

/**
 * @implements {IsDefaultTooltips}
 */
class DefaultTooltips extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultAnimation}*/
  this.f_animation__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
  /**@type {IsDefaultTransitions}*/
  this.f_transitions__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
  /**@type {IsDefaultAnimations}*/
  this.f_animations__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
  /**@type {DefaultPadding}*/
  this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
  /**@type {DefaultRoutedFont}*/
  this.f_titleFont__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
  /**@type {DefaultRoutedFont}*/
  this.f_bodyFont__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
  /**@type {DefaultRoutedFont}*/
  this.f_footerFont__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @return {!DefaultTooltips} */
 static $create__() {
  DefaultTooltips.$clinit();
  let $instance = new DefaultTooltips();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultTooltips__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultTooltips__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_defaults_globals_DefaultTooltips();
 }
 /** @override @return {IsDefaultTransitions} */
 m_getTransitions__() {
  return this.f_transitions__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {IsDefaultAnimation} */
 m_getAnimation__() {
  return this.f_animation__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {IsDefaultAnimations} */
 m_getAnimations__() {
  return this.f_animations__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {IsDefaultPadding} */
 m_getPadding__() {
  return this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {boolean} */
 m_isEnabled__() {
  return DefaultTooltips.f_DEFAULT_ENABLED__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {List<Event>} */
 m_getEvents__() {
  return /**@type {List<Event>}*/ (Collections.m_unmodifiableList__java_util_List(Defaults.m_get__().m_getGlobal__().m_getEvents__()));
 }
 /** @override @return {InteractionMode} */
 m_getMode__() {
  return Defaults.m_get__().m_getGlobal__().m_getInteraction__().m_getMode__();
 }
 /** @override @return {boolean} */
 m_isIntersect__() {
  return Defaults.m_get__().m_getGlobal__().m_getInteraction__().m_isIntersect__();
 }
 /** @override @return {IsTooltipPosition} */
 m_getPosition__() {
  return TooltipPosition.f_AVERAGE__org_pepstock_charba_client_enums_TooltipPosition;
 }
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return DefaultTooltips.f_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {IsDefaultFont} */
 m_getTitleFont__() {
  return this.f_titleFont__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {?string} */
 m_getTitleColorAsString__() {
  return DefaultTooltips.f_DEFAULT_TITLE_FONT_COLOR__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {TextAlign} */
 m_getTitleAlign__() {
  return TextAlign.f_LEFT__org_pepstock_charba_client_enums_TextAlign;
 }
 /** @override @return {number} */
 m_getTitleSpacing__() {
  return DefaultTooltips.f_DEFAULT_TITLE_SPACING__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {number} */
 m_getTitleMarginBottom__() {
  return DefaultTooltips.f_DEFAULT_TITLE_MARGIN_BOTTOM__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {IsDefaultFont} */
 m_getBodyFont__() {
  return this.f_bodyFont__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {?string} */
 m_getBodyColorAsString__() {
  return DefaultTooltips.f_DEFAULT_BODY_FONT_COLOR__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {TextAlign} */
 m_getBodyAlign__() {
  return TextAlign.f_LEFT__org_pepstock_charba_client_enums_TextAlign;
 }
 /** @override @return {number} */
 m_getBodySpacing__() {
  return DefaultTooltips.f_DEFAULT_BODY_SPACING__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {IsDefaultFont} */
 m_getFooterFont__() {
  return this.f_footerFont__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {?string} */
 m_getFooterColorAsString__() {
  return DefaultTooltips.f_DEFAULT_FOOTER_FONT_COLOR__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {TextAlign} */
 m_getFooterAlign__() {
  return TextAlign.f_LEFT__org_pepstock_charba_client_enums_TextAlign;
 }
 /** @override @return {number} */
 m_getFooterSpacing__() {
  return DefaultTooltips.f_DEFAULT_FOOTER_SPACING__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {number} */
 m_getFooterMarginTop__() {
  return DefaultTooltips.f_DEFAULT_FOOTER_MARGIN_TOP__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {number} */
 m_getCaretPadding__() {
  return DefaultTooltips.f_DEFAULT_CARET_PADDING__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {number} */
 m_getCaretSize__() {
  return DefaultTooltips.f_DEFAULT_CARET_SIZE__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {number} */
 m_getCornerRadius__() {
  return DefaultTooltips.f_DEFAULT_CORNER_RADIUS__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {?string} */
 m_getMultiKeyBackgroundAsString__() {
  return DefaultTooltips.f_DEFAULT_MULTI_KEY_BACKGROUND__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {boolean} */
 m_isDisplayColors__() {
  return DefaultTooltips.f_DEFAULT_DISPLAY_COLORS__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return DefaultTooltips.f_DEFAULT_BORDER_COLOR__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {number} */
 m_getBorderWidth__() {
  return DefaultTooltips.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {boolean} */
 m_isRtl__() {
  return DefaultTooltips.f_DEFAULT_RTL__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {TextDirection} */
 m_getTextDirection__() {
  return TextDirection.f_LEFT_TO_RIGHT__org_pepstock_charba_client_enums_TextDirection;
 }
 /** @override @return {number} */
 m_getBoxWidth__() {
  return this.f_bodyFont__org_pepstock_charba_client_defaults_globals_DefaultTooltips_.m_getSize__();
 }
 /** @override @return {number} */
 m_getBoxHeight__() {
  return this.f_bodyFont__org_pepstock_charba_client_defaults_globals_DefaultTooltips_.m_getSize__();
 }
 /** @override @return {boolean} */
 m_isUsePointStyle__() {
  return DefaultTooltips.f_DEFAULT_USE_POINT_STYLE__org_pepstock_charba_client_defaults_globals_DefaultTooltips_;
 }
 /** @override @return {TooltipAlign} */
 m_getXAlign__() {
  return TooltipAlign.f_AUTO__org_pepstock_charba_client_enums_TooltipAlign;
 }
 /** @override @return {TooltipAlign} */
 m_getYAlign__() {
  return TooltipAlign.f_AUTO__org_pepstock_charba_client_enums_TooltipAlign;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_defaults_globals_DefaultTooltips() {
  this.f_animation__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = DefaultAnimation.$create__();
  this.f_transitions__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = DefaultTransitions.$create__();
  this.f_animations__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = InternalAnimations.$create__();
  this.f_padding__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = DefaultPadding.$create__int(DefaultTooltips.f_DEFAULT_PADDING__org_pepstock_charba_client_defaults_globals_DefaultTooltips_);
  this.f_titleFont__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = InternalTitleFont.$create__();
  this.f_bodyFont__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = InternalBodyFont.$create__();
  this.f_footerFont__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = InternalFooterFont.$create__();
 }
 
 static $clinit() {
  DefaultTooltips.$clinit = () =>{};
  DefaultTooltips.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultTooltips;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  DefaultAnimation = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultAnimation$impl');
  DefaultPadding = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');
  InternalAnimations = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTooltips.InternalAnimations$impl');
  InternalBodyFont = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTooltips.InternalBodyFont$impl');
  InternalFooterFont = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTooltips.InternalFooterFont$impl');
  InternalTitleFont = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTooltips.InternalTitleFont$impl');
  DefaultTransitions = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTransitions$impl');
  TextAlign = goog.module.get('org.pepstock.charba.client.enums.TextAlign$impl');
  TextDirection = goog.module.get('org.pepstock.charba.client.enums.TextDirection$impl');
  TooltipAlign = goog.module.get('org.pepstock.charba.client.enums.TooltipAlign$impl');
  TooltipPosition = goog.module.get('org.pepstock.charba.client.enums.TooltipPosition$impl');
 }
}
/**@const {boolean}*/
DefaultTooltips.f_DEFAULT_ENABLED__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = true;
/**@const {?string}*/
DefaultTooltips.f_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = "rgba(0,0,0,0.8)";
/**@const {?string}*/
DefaultTooltips.f_DEFAULT_TITLE_FONT_COLOR__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = "#fff";
/**@const {number}*/
DefaultTooltips.f_DEFAULT_TITLE_SPACING__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = 2;
/**@const {number}*/
DefaultTooltips.f_DEFAULT_TITLE_MARGIN_BOTTOM__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = 6;
/**@const {?string}*/
DefaultTooltips.f_DEFAULT_BODY_FONT_COLOR__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = "#fff";
/**@const {number}*/
DefaultTooltips.f_DEFAULT_BODY_SPACING__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = 2;
/**@const {?string}*/
DefaultTooltips.f_DEFAULT_FOOTER_FONT_COLOR__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = "#fff";
/**@const {number}*/
DefaultTooltips.f_DEFAULT_FOOTER_SPACING__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = 2;
/**@const {number}*/
DefaultTooltips.f_DEFAULT_FOOTER_MARGIN_TOP__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = 6;
/**@const {number}*/
DefaultTooltips.f_DEFAULT_CARET_PADDING__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = 2;
/**@const {number}*/
DefaultTooltips.f_DEFAULT_CARET_SIZE__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = 5;
/**@const {number}*/
DefaultTooltips.f_DEFAULT_CORNER_RADIUS__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = 6;
/**@const {?string}*/
DefaultTooltips.f_DEFAULT_MULTI_KEY_BACKGROUND__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = "#fff";
/**@const {boolean}*/
DefaultTooltips.f_DEFAULT_DISPLAY_COLORS__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = true;
/**@const {?string}*/
DefaultTooltips.f_DEFAULT_BORDER_COLOR__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = "rgba(0,0,0,0)";
/**@const {number}*/
DefaultTooltips.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = 0;
/**@const {boolean}*/
DefaultTooltips.f_DEFAULT_RTL__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = false;
/**@const {boolean}*/
DefaultTooltips.f_DEFAULT_USE_POINT_STYLE__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = false;
/**@const {number}*/
DefaultTooltips.f_DEFAULT_PADDING__org_pepstock_charba_client_defaults_globals_DefaultTooltips_ = 6;
IsDefaultTooltips.$markImplementor(DefaultTooltips);
$Util.$setClassMetadata(DefaultTooltips, "org.pepstock.charba.client.defaults.globals.DefaultTooltips");

exports = DefaultTooltips;

//# sourceMappingURL=DefaultTooltips.js.map
