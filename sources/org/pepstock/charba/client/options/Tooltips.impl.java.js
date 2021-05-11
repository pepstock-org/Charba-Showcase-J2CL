goog.module('org.pepstock.charba.client.options.Tooltips$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultTooltips = goog.require('org.pepstock.charba.client.defaults.IsDefaultTooltips$impl');
const AbstractInteraction = goog.require('org.pepstock.charba.client.options.AbstractInteraction$impl');
const HasAnimationOptions = goog.require('org.pepstock.charba.client.options.HasAnimationOptions$impl');
const HasBox = goog.require('org.pepstock.charba.client.options.HasBox$impl');
const HasTextDirection = goog.require('org.pepstock.charba.client.options.HasTextDirection$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ArrayEnumList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayEnumList$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayString_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Event = goog.forwardDeclare('org.pepstock.charba.client.enums.Event$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');
let IsTooltipPosition = goog.forwardDeclare('org.pepstock.charba.client.enums.IsTooltipPosition$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');
let TextDirection = goog.forwardDeclare('org.pepstock.charba.client.enums.TextDirection$impl');
let TooltipAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TooltipAlign$impl');
let TooltipPosition = goog.forwardDeclare('org.pepstock.charba.client.enums.TooltipPosition$impl');
let Animation = goog.forwardDeclare('org.pepstock.charba.client.options.Animation$impl');
let AnimationContainer = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationContainer$impl');
let Animations = goog.forwardDeclare('org.pepstock.charba.client.options.Animations$impl');
let BoxHandler = goog.forwardDeclare('org.pepstock.charba.client.options.BoxHandler$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.options.Font$impl');
let Padding = goog.forwardDeclare('org.pepstock.charba.client.options.Padding$impl');
let Plugins = goog.forwardDeclare('org.pepstock.charba.client.options.Plugins$impl');
let TextDirectionHandler = goog.forwardDeclare('org.pepstock.charba.client.options.TextDirectionHandler$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.Tooltips.Property$impl');
let TooltipsCallbacks = goog.forwardDeclare('org.pepstock.charba.client.options.TooltipsCallbacks$impl');
let Transitions = goog.forwardDeclare('org.pepstock.charba.client.options.Transitions$impl');
let Positioner = goog.forwardDeclare('org.pepstock.charba.client.positioner.Positioner$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {AbstractInteraction<Plugins, IsDefaultTooltips>}
 * @implements {IsDefaultTooltips}
 * @implements {HasTextDirection}
 * @implements {HasBox}
 * @implements {HasAnimationOptions}
 */
class Tooltips extends AbstractInteraction {
 /** @protected */
 constructor() {
  super();
  /**@type {TooltipsCallbacks}*/
  this.f_callbacks__org_pepstock_charba_client_options_Tooltips_;
  /**@type {TextDirectionHandler}*/
  this.f_textDirectionHandler__org_pepstock_charba_client_options_Tooltips_;
  /**@type {Font}*/
  this.f_titleFont__org_pepstock_charba_client_options_Tooltips_;
  /**@type {Font}*/
  this.f_bodyFont__org_pepstock_charba_client_options_Tooltips_;
  /**@type {Font}*/
  this.f_footerFont__org_pepstock_charba_client_options_Tooltips_;
  /**@type {Padding}*/
  this.f_padding__org_pepstock_charba_client_options_Tooltips_;
  /**@type {BoxHandler}*/
  this.f_boxHandler__org_pepstock_charba_client_options_Tooltips_;
  /**@type {AnimationContainer}*/
  this.f_animationContainer__org_pepstock_charba_client_options_Tooltips_;
 }
 /** @return {!Tooltips} */
 static $create__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTooltips__org_pepstock_charba_client_commons_NativeObject(/** Plugins */ options, /** Key */ childKey, /** IsDefaultTooltips */ defaultValues, /** ? */ nativeObject) {
  Tooltips.$clinit();
  let $instance = new Tooltips();
  $instance.$ctor__org_pepstock_charba_client_options_Tooltips__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTooltips__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Tooltips__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTooltips__org_pepstock_charba_client_commons_NativeObject(/** Plugins */ options, /** Key */ childKey, /** IsDefaultTooltips */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractInteraction__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
  this.f_padding__org_pepstock_charba_client_options_Tooltips_ = this.m_loadPadding__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPadding(Property.f_PADDING__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getPadding__());
  this.f_callbacks__org_pepstock_charba_client_options_Tooltips_ = TooltipsCallbacks.$create__org_pepstock_charba_client_options_Tooltips__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultTooltips__org_pepstock_charba_client_commons_NativeObject(this, Property.f_CALLBACKS__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_CALLBACKS__org_pepstock_charba_client_options_Tooltips_Property));
  this.f_titleFont__org_pepstock_charba_client_options_Tooltips_ = Font.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(this, Property.f_TITLE_FONT__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getTitleFont__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_TITLE_FONT__org_pepstock_charba_client_options_Tooltips_Property));
  this.f_bodyFont__org_pepstock_charba_client_options_Tooltips_ = Font.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(this, Property.f_BODY_FONT__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getBodyFont__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_BODY_FONT__org_pepstock_charba_client_options_Tooltips_Property));
  this.f_footerFont__org_pepstock_charba_client_options_Tooltips_ = Font.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(this, Property.f_FOOTER_FONT__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getFooterFont__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_FOOTER_FONT__org_pepstock_charba_client_options_Tooltips_Property));
  this.f_textDirectionHandler__org_pepstock_charba_client_options_Tooltips_ = TextDirectionHandler.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultTextDirectionHandler__org_pepstock_charba_client_commons_NativeObject(this, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)), this.m_getNativeObject__());
  this.f_boxHandler__org_pepstock_charba_client_options_Tooltips_ = BoxHandler.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultBoxHandler__org_pepstock_charba_client_commons_NativeObject(this, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)), this.m_getNativeObject__());
  this.f_animationContainer__org_pepstock_charba_client_options_Tooltips_ = AnimationContainer.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_commons_NativeObject(options, childKey, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)), this.m_getNativeObject__());
 }
 /** @override @return {BoxHandler} */
 m_getBoxHandler__() {
  return this.f_boxHandler__org_pepstock_charba_client_options_Tooltips_;
 }
 /** @override @return {TextDirectionHandler} */
 m_getTextDirectionHandler__() {
  return this.f_textDirectionHandler__org_pepstock_charba_client_options_Tooltips_;
 }
 /** @override @return {AnimationContainer} */
 m_getAnimationContainer__() {
  return this.f_animationContainer__org_pepstock_charba_client_options_Tooltips_;
 }
 /** @return {TooltipsCallbacks} */
 m_getCallbacks__() {
  return this.f_callbacks__org_pepstock_charba_client_options_Tooltips_;
 }
 /** @override @return {Padding} */
 m_getPadding__() {
  return this.f_padding__org_pepstock_charba_client_options_Tooltips_;
 }
 /** @override @return {InteractionMode} */
 m_getDefaultMode___$pp_org_pepstock_charba_client_options() {
  return /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getMode__();
 }
 /** @override @return {boolean} */
 m_isDefaultIntersect___$pp_org_pepstock_charba_client_options() {
  return /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_isIntersect__();
 }
 
 m_setEnabled__boolean(/** boolean */ enabled) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_ENABLED__org_pepstock_charba_client_options_Tooltips_Property, enabled);
 }
 /** @override @return {boolean} */
 m_isEnabled__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ENABLED__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_isEnabled__());
 }
 
 m_setEvents__arrayOf_org_pepstock_charba_client_enums_Event(/** Array<Event> */ events) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_EVENTS__org_pepstock_charba_client_options_Tooltips_Property, ArrayString_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_commons_Key(events));
 }
 /** @override @return {List<Event>} */
 m_getEvents__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_EVENTS__org_pepstock_charba_client_options_Tooltips_Property), ArrayString_$Overlay));
  return !$Equality.$same(array, null) ? /**@type {ArrayEnumList<Event>}*/ (ArrayListHelper.m_list__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayString(Event.m_values__(), array)) : /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getEvents__();
 }
 
 m_setPosition__org_pepstock_charba_client_enums_IsTooltipPosition(/** IsTooltipPosition */ position) {
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(position);
  if (!Key.m_hasKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(TooltipPosition.m_values__(), position.m_value__()) && !Positioner.m_get__().m_hasTooltipPosition__java_lang_String(position.m_value__())) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("The tooltip position '" + j_l_String.m_valueOf__java_lang_Object(position) + "' is not consistent"));
  }
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POSITION__org_pepstock_charba_client_options_Tooltips_Property, position);
 }
 /** @override @return {IsTooltipPosition} */
 m_getPosition__() {
  let value = this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_POSITION__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getPosition__().m_value__());
  if (Key.m_hasKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(TooltipPosition.m_values__(), value)) {
   return /**@type {TooltipPosition}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(TooltipPosition.m_values__(), value), TooltipPosition));
  }
  if (Positioner.m_get__().m_hasTooltipPosition__java_lang_String(value)) {
   return Positioner.m_get__().m_getTooltipPosition__java_lang_String(value);
  }
  return /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getPosition__();
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backgroundColor) {
  this.m_setBackgroundColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(backgroundColor));
 }
 
 m_setBackgroundColor__java_lang_String(/** ?string */ backgroundColor) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_options_Tooltips_Property, backgroundColor);
 }
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getBackgroundColorAsString__());
 }
 /** @return {IsColor} */
 m_getBackgroundColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getBackgroundColorAsString__());
 }
 
 m_setXAlign__org_pepstock_charba_client_enums_TooltipAlign(/** TooltipAlign */ align) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_X_ALIGN__org_pepstock_charba_client_options_Tooltips_Property, Key.m_isValid__org_pepstock_charba_client_commons_Key(align) && align.m_isHorizontal__() ? align : null);
 }
 /** @override @return {TooltipAlign} */
 m_getXAlign__() {
  return /**@type {TooltipAlign}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_X_ALIGN__org_pepstock_charba_client_options_Tooltips_Property, TooltipAlign.m_values__(), /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getXAlign__()), TooltipAlign));
 }
 
 m_setYAlign__org_pepstock_charba_client_enums_TooltipAlign(/** TooltipAlign */ align) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_Y_ALIGN__org_pepstock_charba_client_options_Tooltips_Property, Key.m_isValid__org_pepstock_charba_client_commons_Key(align) && align.m_isVertical__() ? align : null);
 }
 /** @override @return {TooltipAlign} */
 m_getYAlign__() {
  return /**@type {TooltipAlign}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_Y_ALIGN__org_pepstock_charba_client_options_Tooltips_Property, TooltipAlign.m_values__(), /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getYAlign__()), TooltipAlign));
 }
 /** @override @return {Font} */
 m_getTitleFont__() {
  return this.f_titleFont__org_pepstock_charba_client_options_Tooltips_;
 }
 
 m_setTitleColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setTitleColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setTitleColor__java_lang_String(/** ?string */ color) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TITLE_COLOR__org_pepstock_charba_client_options_Tooltips_Property, color);
 }
 /** @override @return {?string} */
 m_getTitleColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TITLE_COLOR__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getTitleColorAsString__());
 }
 /** @return {IsColor} */
 m_getTitleColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getTitleColorAsString__());
 }
 
 m_setTitleAlign__org_pepstock_charba_client_enums_TextAlign(/** TextAlign */ align) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TITLE_ALIGN__org_pepstock_charba_client_options_Tooltips_Property, Key.m_isValid__org_pepstock_charba_client_commons_Key(align) ? align.m_getLeftRightValue__() : null);
 }
 /** @override @return {TextAlign} */
 m_getTitleAlign__() {
  return /**@type {TextAlign}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TITLE_ALIGN__org_pepstock_charba_client_options_Tooltips_Property, TextAlign.m_values__(), /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getTitleAlign__()), TextAlign));
 }
 
 m_setTitleSpacing__int(/** number */ titleSpacing) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_TITLE_SPACING__org_pepstock_charba_client_options_Tooltips_Property, Checker.m_positiveOrZero__int(titleSpacing));
 }
 /** @override @return {number} */
 m_getTitleSpacing__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_TITLE_SPACING__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getTitleSpacing__());
 }
 
 m_setTitleMarginBottom__int(/** number */ titleMarginBottom) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_TITLE_MARGIN_BOTTOM__org_pepstock_charba_client_options_Tooltips_Property, Checker.m_positiveOrZero__int(titleMarginBottom));
 }
 /** @override @return {number} */
 m_getTitleMarginBottom__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_TITLE_MARGIN_BOTTOM__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getTitleMarginBottom__());
 }
 /** @override @return {Font} */
 m_getBodyFont__() {
  return this.f_bodyFont__org_pepstock_charba_client_options_Tooltips_;
 }
 
 m_setBodyColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setBodyColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setBodyColor__java_lang_String(/** ?string */ color) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BODY_COLOR__org_pepstock_charba_client_options_Tooltips_Property, color);
 }
 /** @override @return {?string} */
 m_getBodyColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BODY_COLOR__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getBodyColorAsString__());
 }
 /** @return {IsColor} */
 m_getBodyColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getBodyColorAsString__());
 }
 
 m_setBodyAlign__org_pepstock_charba_client_enums_TextAlign(/** TextAlign */ align) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BODY_ALIGN__org_pepstock_charba_client_options_Tooltips_Property, Key.m_isValid__org_pepstock_charba_client_commons_Key(align) ? align.m_getLeftRightValue__() : null);
 }
 /** @override @return {TextAlign} */
 m_getBodyAlign__() {
  return /**@type {TextAlign}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BODY_ALIGN__org_pepstock_charba_client_options_Tooltips_Property, TextAlign.m_values__(), /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getBodyAlign__()), TextAlign));
 }
 
 m_setBodySpacing__int(/** number */ bodySpacing) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_BODY_SPACING__org_pepstock_charba_client_options_Tooltips_Property, Checker.m_positiveOrZero__int(bodySpacing));
 }
 /** @override @return {number} */
 m_getBodySpacing__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BODY_SPACING__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getBodySpacing__());
 }
 /** @override @return {Font} */
 m_getFooterFont__() {
  return this.f_footerFont__org_pepstock_charba_client_options_Tooltips_;
 }
 
 m_setFooterColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setFooterColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setFooterColor__java_lang_String(/** ?string */ color) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_FOOTER_COLOR__org_pepstock_charba_client_options_Tooltips_Property, color);
 }
 /** @override @return {?string} */
 m_getFooterColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_FOOTER_COLOR__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getFooterColorAsString__());
 }
 /** @return {IsColor} */
 m_getFooterColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getFooterColorAsString__());
 }
 
 m_setFooterAlign__org_pepstock_charba_client_enums_TextAlign(/** TextAlign */ align) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_FOOTER_ALIGN__org_pepstock_charba_client_options_Tooltips_Property, Key.m_isValid__org_pepstock_charba_client_commons_Key(align) ? align.m_getLeftRightValue__() : null);
 }
 /** @override @return {TextAlign} */
 m_getFooterAlign__() {
  return /**@type {TextAlign}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_FOOTER_ALIGN__org_pepstock_charba_client_options_Tooltips_Property, TextAlign.m_values__(), /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getFooterAlign__()), TextAlign));
 }
 
 m_setFooterSpacing__int(/** number */ footerSpacing) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_FOOTER_SPACING__org_pepstock_charba_client_options_Tooltips_Property, Checker.m_positiveOrZero__int(footerSpacing));
 }
 /** @override @return {number} */
 m_getFooterSpacing__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_FOOTER_SPACING__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getFooterSpacing__());
 }
 
 m_setFooterMarginTop__int(/** number */ footerMarginTop) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_FOOTER_MARGIN_TOP__org_pepstock_charba_client_options_Tooltips_Property, Checker.m_positiveOrZero__int(footerMarginTop));
 }
 /** @override @return {number} */
 m_getFooterMarginTop__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_FOOTER_MARGIN_TOP__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getFooterMarginTop__());
 }
 
 m_setCaretPadding__int(/** number */ caretPadding) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_CARET_PADDING__org_pepstock_charba_client_options_Tooltips_Property, Checker.m_positiveOrZero__int(caretPadding));
 }
 /** @override @return {number} */
 m_getCaretPadding__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_CARET_PADDING__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getCaretPadding__());
 }
 
 m_setCaretSize__int(/** number */ caretSize) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_CARET_SIZE__org_pepstock_charba_client_options_Tooltips_Property, Checker.m_positiveOrZero__int(caretSize));
 }
 /** @override @return {number} */
 m_getCaretSize__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_CARET_SIZE__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getCaretSize__());
 }
 
 m_setCornerRadius__int(/** number */ cornerRadius) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_CORNER_RADIUS__org_pepstock_charba_client_options_Tooltips_Property, Checker.m_positiveOrZero__int(cornerRadius));
 }
 /** @override @return {number} */
 m_getCornerRadius__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_CORNER_RADIUS__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getCornerRadius__());
 }
 
 m_setMultiKeyBackground__org_pepstock_charba_client_colors_IsColor(/** IsColor */ multiKeyBackground) {
  this.m_setMultiKeyBackground__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(multiKeyBackground));
 }
 
 m_setMultiKeyBackground__java_lang_String(/** ?string */ multiKeyBackground) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_MULTI_KEY_BACKGROUND__org_pepstock_charba_client_options_Tooltips_Property, multiKeyBackground);
 }
 /** @override @return {?string} */
 m_getMultiKeyBackgroundAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_MULTI_KEY_BACKGROUND__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getMultiKeyBackgroundAsString__());
 }
 /** @return {IsColor} */
 m_getMultiKeyBackground__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getMultiKeyBackgroundAsString__());
 }
 
 m_setDisplayColors__boolean(/** boolean */ displayColors) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY_COLORS__org_pepstock_charba_client_options_Tooltips_Property, displayColors);
 }
 /** @override @return {boolean} */
 m_isDisplayColors__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY_COLORS__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_isDisplayColors__());
 }
 
 m_setBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ borderColor) {
  this.m_setBorderColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(borderColor));
 }
 
 m_setBorderColor__java_lang_String(/** ?string */ borderColor) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BORDER_COLOR__org_pepstock_charba_client_options_Tooltips_Property, borderColor);
 }
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BORDER_COLOR__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getBorderColorAsString__());
 }
 /** @return {IsColor} */
 m_getBorderColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getBorderColorAsString__());
 }
 
 m_setBorderWidth__int(/** number */ borderWidth) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_WIDTH__org_pepstock_charba_client_options_Tooltips_Property, Checker.m_positiveOrZero__int(borderWidth));
 }
 /** @override @return {number} */
 m_getBorderWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_WIDTH__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_getBorderWidth__());
 }
 
 m_setUsePointStyle__boolean(/** boolean */ usePointStyle) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_USE_POINT_STYLE__org_pepstock_charba_client_options_Tooltips_Property, usePointStyle);
 }
 /** @override @return {boolean} */
 m_isUsePointStyle__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_USE_POINT_STYLE__org_pepstock_charba_client_options_Tooltips_Property, /**@type {IsDefaultTooltips}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTooltips)).m_isUsePointStyle__());
 }
 //Default method forwarding stub.
 /** @override @return {TextDirection} */
 m_getTextDirection__() {
  return HasTextDirection.m_getTextDirection__$default__org_pepstock_charba_client_options_HasTextDirection(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isRtl__() {
  return HasTextDirection.m_isRtl__$default__org_pepstock_charba_client_options_HasTextDirection(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBoxHeight__() {
  return HasBox.m_getBoxHeight__$default__org_pepstock_charba_client_options_HasBox(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBoxWidth__() {
  return HasBox.m_getBoxWidth__$default__org_pepstock_charba_client_options_HasBox(this);
 }
 //Default method forwarding stub.
 /** @override @return {Animation} */
 m_getAnimation__() {
  return HasAnimationOptions.m_getAnimation__$default__org_pepstock_charba_client_options_HasAnimationOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {Animations} */
 m_getAnimations__() {
  return HasAnimationOptions.m_getAnimations__$default__org_pepstock_charba_client_options_HasAnimationOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {Transitions} */
 m_getTransitions__() {
  return HasAnimationOptions.m_getTransitions__$default__org_pepstock_charba_client_options_HasAnimationOptions(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setRtl__boolean(/** boolean */ arg0) {
  HasTextDirection.m_setRtl__$default__org_pepstock_charba_client_options_HasTextDirection__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setTextDirection__org_pepstock_charba_client_enums_TextDirection(/** TextDirection */ arg0) {
  HasTextDirection.m_setTextDirection__$default__org_pepstock_charba_client_options_HasTextDirection__org_pepstock_charba_client_enums_TextDirection(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBoxHeight__int(/** number */ arg0) {
  HasBox.m_setBoxHeight__$default__org_pepstock_charba_client_options_HasBox__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBoxWidth__int(/** number */ arg0) {
  HasBox.m_setBoxWidth__$default__org_pepstock_charba_client_options_HasBox__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isAnimationEnabled__() {
  return HasAnimationOptions.m_isAnimationEnabled__$default__org_pepstock_charba_client_options_HasAnimationOptions(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setAnimationEnabled__boolean(/** boolean */ arg0) {
  HasAnimationOptions.m_setAnimationEnabled__$default__org_pepstock_charba_client_options_HasAnimationOptions__boolean(this, arg0);
 }
 
 static $clinit() {
  Tooltips.$clinit = () =>{};
  Tooltips.$loadModules();
  AbstractInteraction.$clinit();
  HasTextDirection.$clinit();
  HasBox.$clinit();
  HasAnimationOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Tooltips;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayString_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Event = goog.module.get('org.pepstock.charba.client.enums.Event$impl');
  TextAlign = goog.module.get('org.pepstock.charba.client.enums.TextAlign$impl');
  TooltipAlign = goog.module.get('org.pepstock.charba.client.enums.TooltipAlign$impl');
  TooltipPosition = goog.module.get('org.pepstock.charba.client.enums.TooltipPosition$impl');
  AnimationContainer = goog.module.get('org.pepstock.charba.client.options.AnimationContainer$impl');
  BoxHandler = goog.module.get('org.pepstock.charba.client.options.BoxHandler$impl');
  Font = goog.module.get('org.pepstock.charba.client.options.Font$impl');
  TextDirectionHandler = goog.module.get('org.pepstock.charba.client.options.TextDirectionHandler$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.Tooltips.Property$impl');
  TooltipsCallbacks = goog.module.get('org.pepstock.charba.client.options.TooltipsCallbacks$impl');
  Positioner = goog.module.get('org.pepstock.charba.client.positioner.Positioner$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
IsDefaultTooltips.$markImplementor(Tooltips);
HasTextDirection.$markImplementor(Tooltips);
HasBox.$markImplementor(Tooltips);
HasAnimationOptions.$markImplementor(Tooltips);
$Util.$setClassMetadata(Tooltips, "org.pepstock.charba.client.options.Tooltips");

exports = Tooltips;

//# sourceMappingURL=Tooltips.js.map
