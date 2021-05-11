goog.module('org.pepstock.charba.client.configuration.Tooltips$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationOptionsContainer = goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer$impl');
const HasAnimation = goog.require('org.pepstock.charba.client.configuration.HasAnimation$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let TooltipExternalCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TooltipExternalCallback$impl');
let TooltipFilterCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TooltipFilterCallback$impl');
let TooltipItemSortCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TooltipItemSortCallback$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let IsProvider = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
let Animation = goog.forwardDeclare('org.pepstock.charba.client.configuration.Animation$impl');
let AnimationContainer = goog.forwardDeclare('org.pepstock.charba.client.configuration.AnimationContainer$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.configuration.Font$impl');
let Padding = goog.forwardDeclare('org.pepstock.charba.client.configuration.Padding$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.Tooltips.Property$impl');
let TooltipContext = goog.forwardDeclare('org.pepstock.charba.client.configuration.Tooltips.TooltipContext$impl');
let TooltipsCallbacks = goog.forwardDeclare('org.pepstock.charba.client.configuration.TooltipsCallbacks$impl');
let Transitions = goog.forwardDeclare('org.pepstock.charba.client.configuration.Transitions$impl');
let Event = goog.forwardDeclare('org.pepstock.charba.client.enums.Event$impl');
let InteractionMode = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionMode$impl');
let IsTooltipPosition = goog.forwardDeclare('org.pepstock.charba.client.enums.IsTooltipPosition$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');
let TextDirection = goog.forwardDeclare('org.pepstock.charba.client.enums.TextDirection$impl');
let TooltipAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TooltipAlign$impl');
let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');
let IsAnimations = goog.forwardDeclare('org.pepstock.charba.client.options.IsAnimations$impl');

/**
 * @implements {HasAnimation}
 */
class Tooltips extends ConfigurationOptionsContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/
  this.f_externalCallbackProxy__org_pepstock_charba_client_configuration_Tooltips_;
  /**@type {CharbaCallbackProxy<?function(Object, ?, ?):number>}*/
  this.f_itemSortCallbackProxy__org_pepstock_charba_client_configuration_Tooltips_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):boolean>}*/
  this.f_filterCallbackProxy__org_pepstock_charba_client_configuration_Tooltips_;
  /**@type {TooltipExternalCallback}*/
  this.f_externalCallback__org_pepstock_charba_client_configuration_Tooltips_;
  /**@type {TooltipItemSortCallback}*/
  this.f_itemSortCallback__org_pepstock_charba_client_configuration_Tooltips_;
  /**@type {TooltipFilterCallback}*/
  this.f_filterCallback__org_pepstock_charba_client_configuration_Tooltips_;
  /**@type {TooltipsCallbacks}*/
  this.f_callbacks__org_pepstock_charba_client_configuration_Tooltips_;
  /**@type {Font}*/
  this.f_titleFont__org_pepstock_charba_client_configuration_Tooltips_;
  /**@type {Font}*/
  this.f_bodyFont__org_pepstock_charba_client_configuration_Tooltips_;
  /**@type {Font}*/
  this.f_footerFont__org_pepstock_charba_client_configuration_Tooltips_;
  /**@type {Padding}*/
  this.f_padding__org_pepstock_charba_client_configuration_Tooltips_;
  /**@type {AnimationContainer}*/
  this.f_animationContainer__org_pepstock_charba_client_configuration_Tooltips_;
 }
 /** @return {!Tooltips} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  Tooltips.$clinit();
  let $instance = new Tooltips();
  $instance.$ctor__org_pepstock_charba_client_configuration_Tooltips__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Tooltips__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  this.$init___$p_org_pepstock_charba_client_configuration_Tooltips();
  this.f_callbacks__org_pepstock_charba_client_configuration_Tooltips_ = TooltipsCallbacks.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this.m_getOptions__());
  this.f_padding__org_pepstock_charba_client_configuration_Tooltips_ = Padding.$create__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(IsProvider.$adapt(() =>{
   return this.m_getConfiguration__().m_getTooltips__().m_getPadding__();
  }));
  this.f_animationContainer__org_pepstock_charba_client_configuration_Tooltips_ = AnimationContainer.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(this.m_getChart__(), IsProvider.$adapt(() =>{
   return this.m_getConfiguration__().m_getTooltips__();
  }));
  this.f_titleFont__org_pepstock_charba_client_configuration_Tooltips_ = Font.$create__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(IsProvider.$adapt(() =>{
   return this.m_getConfiguration__().m_getTooltips__().m_getTitleFont__();
  }));
  this.f_bodyFont__org_pepstock_charba_client_configuration_Tooltips_ = Font.$create__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(IsProvider.$adapt(() =>{
   return this.m_getConfiguration__().m_getTooltips__().m_getBodyFont__();
  }));
  this.f_footerFont__org_pepstock_charba_client_configuration_Tooltips_ = Font.$create__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(IsProvider.$adapt(() =>{
   return this.m_getConfiguration__().m_getTooltips__().m_getFooterFont__();
  }));
  this.f_externalCallbackProxy__org_pepstock_charba_client_configuration_Tooltips_.callback = (/** Object */ context, /** ? */ tooltipContext) =>{
   let externalCallback = this.m_getExternalCallback__();
   if (!$Equality.$same(externalCallback, null)) {
    let tempContext = TooltipContext.$create__org_pepstock_charba_client_commons_NativeObject(tooltipContext);
    externalCallback.m_onExternal__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipModel(this.m_getChart__(), tempContext.m_getModel___$pp_org_pepstock_charba_client_configuration());
   }
  };
  this.f_itemSortCallbackProxy__org_pepstock_charba_client_configuration_Tooltips_.callback = (/** Object */ context_1, /** ? */ item1, /** ? */ item2) =>{
   let itemSortCallback = this.m_getItemSortCallback__();
   if (!$Equality.$same(itemSortCallback, null)) {
    return itemSortCallback.m_onItemSort__org_pepstock_charba_client_IsChart__java_lang_Object__java_lang_Object(this.m_getChart__(), TooltipItem.f_FACTORY__org_pepstock_charba_client_items_TooltipItem.m_create__org_pepstock_charba_client_commons_NativeObject(item1), TooltipItem.f_FACTORY__org_pepstock_charba_client_items_TooltipItem.m_create__org_pepstock_charba_client_commons_NativeObject(item2));
   }
   return 0;
  };
  this.f_filterCallbackProxy__org_pepstock_charba_client_configuration_Tooltips_.callback = (/** Object */ context_2, /** ? */ item) =>{
   let filterCallback = this.m_getFilterCallback__();
   if (!$Equality.$same(filterCallback, null)) {
    return filterCallback.m_onFilter__org_pepstock_charba_client_IsChart__java_lang_Object(this.m_getChart__(), TooltipItem.f_FACTORY__org_pepstock_charba_client_items_TooltipItem.m_create__org_pepstock_charba_client_commons_NativeObject(item));
   }
   return true;
  };
 }
 /** @override @return {AnimationContainer} */
 m_getAnimationContainer__() {
  return this.f_animationContainer__org_pepstock_charba_client_configuration_Tooltips_;
 }
 /** @return {TooltipsCallbacks} */
 m_getCallbacks__() {
  return this.f_callbacks__org_pepstock_charba_client_configuration_Tooltips_;
 }
 /** @return {Padding} */
 m_getPadding__() {
  return this.f_padding__org_pepstock_charba_client_configuration_Tooltips_;
 }
 
 m_setEnabled__boolean(/** boolean */ enabled) {
  this.m_getConfiguration__().m_getTooltips__().m_setEnabled__boolean(enabled);
 }
 /** @return {boolean} */
 m_isEnabled__() {
  return this.m_getConfiguration__().m_getTooltips__().m_isEnabled__();
 }
 
 m_setEvents__arrayOf_org_pepstock_charba_client_enums_Event(/** Array<Event> */ events) {
  this.m_getConfiguration__().m_getTooltips__().m_setEvents__arrayOf_org_pepstock_charba_client_enums_Event(events);
 }
 /** @return {List<Event>} */
 m_getEvents__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getEvents__();
 }
 
 m_setMode__org_pepstock_charba_client_enums_InteractionMode(/** InteractionMode */ mode) {
  this.m_getConfiguration__().m_getTooltips__().m_setMode__org_pepstock_charba_client_enums_InteractionMode(mode);
 }
 /** @return {InteractionMode} */
 m_getMode__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getMode__();
 }
 
 m_setIntersect__boolean(/** boolean */ intersect) {
  this.m_getConfiguration__().m_getTooltips__().m_setIntersect__boolean(intersect);
 }
 /** @return {boolean} */
 m_isIntersect__() {
  return this.m_getConfiguration__().m_getTooltips__().m_isIntersect__();
 }
 
 m_setPosition__org_pepstock_charba_client_enums_IsTooltipPosition(/** IsTooltipPosition */ position) {
  this.m_getConfiguration__().m_getTooltips__().m_setPosition__org_pepstock_charba_client_enums_IsTooltipPosition(position);
 }
 /** @return {IsTooltipPosition} */
 m_getPosition__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getPosition__();
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backgroundColor) {
  this.m_getConfiguration__().m_getTooltips__().m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(backgroundColor);
 }
 
 m_setBackgroundColor__java_lang_String(/** ?string */ backgroundColor) {
  this.m_getConfiguration__().m_getTooltips__().m_setBackgroundColor__java_lang_String(backgroundColor);
 }
 /** @return {?string} */
 m_getBackgroundColorAsString__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getBackgroundColorAsString__();
 }
 /** @return {IsColor} */
 m_getBackgroundColor__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getBackgroundColor__();
 }
 /** @return {Font} */
 m_getTitleFont__() {
  return this.f_titleFont__org_pepstock_charba_client_configuration_Tooltips_;
 }
 
 m_setTitleColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_getConfiguration__().m_getTooltips__().m_setTitleColor__org_pepstock_charba_client_colors_IsColor(color);
 }
 
 m_setTitleColor__java_lang_String(/** ?string */ color) {
  this.m_getConfiguration__().m_getTooltips__().m_setTitleColor__java_lang_String(color);
 }
 /** @return {?string} */
 m_getTitleColorAsString__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getTitleColorAsString__();
 }
 /** @return {IsColor} */
 m_getTitleColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getTitleColorAsString__());
 }
 
 m_setTitleAlign__org_pepstock_charba_client_enums_TextAlign(/** TextAlign */ align) {
  this.m_getConfiguration__().m_getTooltips__().m_setTitleAlign__org_pepstock_charba_client_enums_TextAlign(align);
 }
 /** @return {TextAlign} */
 m_getTitleAlign__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getTitleAlign__();
 }
 
 m_setTitleSpacing__int(/** number */ titleSpacing) {
  this.m_getConfiguration__().m_getTooltips__().m_setTitleSpacing__int(titleSpacing);
 }
 /** @return {number} */
 m_getTitleSpacing__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getTitleSpacing__();
 }
 
 m_setTitleMarginBottom__int(/** number */ titleMarginBottom) {
  this.m_getConfiguration__().m_getTooltips__().m_setTitleMarginBottom__int(titleMarginBottom);
 }
 /** @return {number} */
 m_getTitleMarginBottom__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getTitleMarginBottom__();
 }
 /** @return {Font} */
 m_getBodyFont__() {
  return this.f_bodyFont__org_pepstock_charba_client_configuration_Tooltips_;
 }
 
 m_setBodyColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_getConfiguration__().m_getTooltips__().m_setBodyColor__org_pepstock_charba_client_colors_IsColor(color);
 }
 
 m_setBodyColor__java_lang_String(/** ?string */ color) {
  this.m_getConfiguration__().m_getTooltips__().m_setBodyColor__java_lang_String(color);
 }
 /** @return {?string} */
 m_getBodyColorAsString__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getBodyColorAsString__();
 }
 /** @return {IsColor} */
 m_getBodyColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getBodyColorAsString__());
 }
 
 m_setBodyAlign__org_pepstock_charba_client_enums_TextAlign(/** TextAlign */ align) {
  this.m_getConfiguration__().m_getTooltips__().m_setBodyAlign__org_pepstock_charba_client_enums_TextAlign(align);
 }
 /** @return {TextAlign} */
 m_getBodyAlign__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getBodyAlign__();
 }
 
 m_setBodySpacing__int(/** number */ bodySpacing) {
  this.m_getConfiguration__().m_getTooltips__().m_setBodySpacing__int(bodySpacing);
 }
 /** @return {number} */
 m_getBodySpacing__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getBodySpacing__();
 }
 /** @return {Font} */
 m_getFooterFont__() {
  return this.f_footerFont__org_pepstock_charba_client_configuration_Tooltips_;
 }
 
 m_setFooterColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_getConfiguration__().m_getTooltips__().m_setFooterColor__org_pepstock_charba_client_colors_IsColor(color);
 }
 
 m_setFooterColor__java_lang_String(/** ?string */ color) {
  this.m_getConfiguration__().m_getTooltips__().m_setFooterColor__java_lang_String(color);
 }
 /** @return {?string} */
 m_getFooterColorAsString__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getFooterColorAsString__();
 }
 /** @return {IsColor} */
 m_getFooterColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getFooterColorAsString__());
 }
 
 m_setFooterAlign__org_pepstock_charba_client_enums_TextAlign(/** TextAlign */ align) {
  this.m_getConfiguration__().m_getTooltips__().m_setFooterAlign__org_pepstock_charba_client_enums_TextAlign(align);
 }
 /** @return {TextAlign} */
 m_getFooterAlign__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getFooterAlign__();
 }
 
 m_setFooterSpacing__int(/** number */ footerSpacing) {
  this.m_getConfiguration__().m_getTooltips__().m_setFooterSpacing__int(footerSpacing);
 }
 /** @return {number} */
 m_getFooterSpacing__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getFooterSpacing__();
 }
 
 m_setFooterMarginTop__int(/** number */ footerMarginTop) {
  this.m_getConfiguration__().m_getTooltips__().m_setFooterMarginTop__int(footerMarginTop);
 }
 /** @return {number} */
 m_getFooterMarginTop__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getFooterMarginTop__();
 }
 
 m_setCaretPadding__int(/** number */ caretPadding) {
  this.m_getConfiguration__().m_getTooltips__().m_setCaretPadding__int(caretPadding);
 }
 /** @return {number} */
 m_getCaretPadding__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getCaretPadding__();
 }
 
 m_setCaretSize__int(/** number */ caretSize) {
  this.m_getConfiguration__().m_getTooltips__().m_setCaretSize__int(caretSize);
 }
 /** @return {number} */
 m_getCaretSize__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getCaretSize__();
 }
 
 m_setCornerRadius__int(/** number */ cornerRadius) {
  this.m_getConfiguration__().m_getTooltips__().m_setCornerRadius__int(cornerRadius);
 }
 /** @return {number} */
 m_getCornerRadius__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getCornerRadius__();
 }
 
 m_setMultiKeyBackground__org_pepstock_charba_client_colors_IsColor(/** IsColor */ multiKeyBackground) {
  this.m_getConfiguration__().m_getTooltips__().m_setMultiKeyBackground__org_pepstock_charba_client_colors_IsColor(multiKeyBackground);
 }
 
 m_setMultiKeyBackground__java_lang_String(/** ?string */ multiKeyBackground) {
  this.m_getConfiguration__().m_getTooltips__().m_setMultiKeyBackground__java_lang_String(multiKeyBackground);
 }
 /** @return {?string} */
 m_getMultiKeyBackgroundAsString__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getMultiKeyBackgroundAsString__();
 }
 /** @return {IsColor} */
 m_getMultiKeyBackground__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getMultiKeyBackground__();
 }
 
 m_setDisplayColors__boolean(/** boolean */ displayColors) {
  this.m_getConfiguration__().m_getTooltips__().m_setDisplayColors__boolean(displayColors);
 }
 /** @return {boolean} */
 m_isDisplayColors__() {
  return this.m_getConfiguration__().m_getTooltips__().m_isDisplayColors__();
 }
 
 m_setBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ borderColor) {
  this.m_getConfiguration__().m_getTooltips__().m_setBorderColor__org_pepstock_charba_client_colors_IsColor(borderColor);
 }
 
 m_setBorderColor__java_lang_String(/** ?string */ borderColor) {
  this.m_getConfiguration__().m_getTooltips__().m_setBorderColor__java_lang_String(borderColor);
 }
 /** @return {?string} */
 m_getBorderColorAsString__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getBorderColorAsString__();
 }
 /** @return {IsColor} */
 m_getBorderColor__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getBorderColor__();
 }
 
 m_setBorderWidth__int(/** number */ borderWidth) {
  this.m_getConfiguration__().m_getTooltips__().m_setBorderWidth__int(borderWidth);
 }
 /** @return {number} */
 m_getBorderWidth__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getBorderWidth__();
 }
 
 m_setBoxWidth__int(/** number */ boxWidth) {
  this.m_getConfiguration__().m_getTooltips__().m_setBoxWidth__int(boxWidth);
 }
 /** @return {number} */
 m_getBoxWidth__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getBoxWidth__();
 }
 
 m_setBoxHeight__int(/** number */ boxHeight) {
  this.m_getConfiguration__().m_getTooltips__().m_setBoxHeight__int(boxHeight);
 }
 /** @return {number} */
 m_getBoxHeight__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getBoxHeight__();
 }
 
 m_setRtl__boolean(/** boolean */ rtl) {
  this.m_getConfiguration__().m_getTooltips__().m_setRtl__boolean(rtl);
 }
 /** @return {boolean} */
 m_isRtl__() {
  return this.m_getConfiguration__().m_getTooltips__().m_isRtl__();
 }
 
 m_setTextDirection__org_pepstock_charba_client_enums_TextDirection(/** TextDirection */ textDirection) {
  this.m_getConfiguration__().m_getTooltips__().m_setTextDirection__org_pepstock_charba_client_enums_TextDirection(textDirection);
 }
 /** @return {TextDirection} */
 m_getTextDirection__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getTextDirection__();
 }
 
 m_setUsePointStyle__boolean(/** boolean */ usePointStyle) {
  this.m_getConfiguration__().m_getTooltips__().m_setUsePointStyle__boolean(usePointStyle);
 }
 /** @return {boolean} */
 m_isUsePointStyle__() {
  return this.m_getConfiguration__().m_getTooltips__().m_isUsePointStyle__();
 }
 
 m_setXAlign__org_pepstock_charba_client_enums_TooltipAlign(/** TooltipAlign */ align) {
  this.m_getConfiguration__().m_getTooltips__().m_setXAlign__org_pepstock_charba_client_enums_TooltipAlign(align);
 }
 /** @return {TooltipAlign} */
 m_getXAlign__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getXAlign__();
 }
 
 m_setYAlign__org_pepstock_charba_client_enums_TooltipAlign(/** TooltipAlign */ align) {
  this.m_getConfiguration__().m_getTooltips__().m_setYAlign__org_pepstock_charba_client_enums_TooltipAlign(align);
 }
 /** @return {TooltipAlign} */
 m_getYAlign__() {
  return this.m_getConfiguration__().m_getTooltips__().m_getYAlign__();
 }
 /** @return {TooltipExternalCallback} */
 m_getExternalCallback__() {
  return this.f_externalCallback__org_pepstock_charba_client_configuration_Tooltips_;
 }
 
 m_setExternalCallback__org_pepstock_charba_client_callbacks_TooltipExternalCallback(/** TooltipExternalCallback */ externalCallback) {
  this.f_externalCallback__org_pepstock_charba_client_configuration_Tooltips_ = externalCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getTooltips__(), Property.f_EXTERNAL__org_pepstock_charba_client_configuration_Tooltips_Property, externalCallback, this.f_externalCallbackProxy__org_pepstock_charba_client_configuration_Tooltips_);
 }
 /** @return {TooltipItemSortCallback} */
 m_getItemSortCallback__() {
  return this.f_itemSortCallback__org_pepstock_charba_client_configuration_Tooltips_;
 }
 
 m_setItemSortCallback__org_pepstock_charba_client_callbacks_TooltipItemSortCallback(/** TooltipItemSortCallback */ itemSortCallback) {
  this.f_itemSortCallback__org_pepstock_charba_client_configuration_Tooltips_ = itemSortCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getTooltips__(), Property.f_ITEM_SORT__org_pepstock_charba_client_configuration_Tooltips_Property, itemSortCallback, this.f_itemSortCallbackProxy__org_pepstock_charba_client_configuration_Tooltips_);
 }
 /** @return {TooltipFilterCallback} */
 m_getFilterCallback__() {
  return this.f_filterCallback__org_pepstock_charba_client_configuration_Tooltips_;
 }
 
 m_setFilterCallback__org_pepstock_charba_client_callbacks_TooltipFilterCallback(/** TooltipFilterCallback */ filterCallback) {
  this.f_filterCallback__org_pepstock_charba_client_configuration_Tooltips_ = filterCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getTooltips__(), Property.f_FILTER__org_pepstock_charba_client_configuration_Tooltips_Property, filterCallback, this.f_filterCallbackProxy__org_pepstock_charba_client_configuration_Tooltips_);
 }
 //Default method forwarding stub.
 /** @override @return {Animation} */
 m_getAnimation__() {
  return HasAnimation.m_getAnimation__$default__org_pepstock_charba_client_configuration_HasAnimation(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsAnimations} */
 m_getAnimations__() {
  return HasAnimation.m_getAnimations__$default__org_pepstock_charba_client_configuration_HasAnimation(this);
 }
 //Default method forwarding stub.
 /** @override @return {Transitions} */
 m_getTransitions__() {
  return HasAnimation.m_getTransitions__$default__org_pepstock_charba_client_configuration_HasAnimation(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isAnimationEnabled__() {
  return HasAnimation.m_isAnimationEnabled__$default__org_pepstock_charba_client_configuration_HasAnimation(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setAnimationEnabled__boolean(/** boolean */ arg0) {
  HasAnimation.m_setAnimationEnabled__$default__org_pepstock_charba_client_configuration_HasAnimation__boolean(this, arg0);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_Tooltips() {
  this.f_externalCallbackProxy__org_pepstock_charba_client_configuration_Tooltips_ = /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_itemSortCallbackProxy__org_pepstock_charba_client_configuration_Tooltips_ = /**@type {CharbaCallbackProxy<?function(Object, ?, ?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_filterCallbackProxy__org_pepstock_charba_client_configuration_Tooltips_ = /**@type {CharbaCallbackProxy<?function(Object, ?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_externalCallback__org_pepstock_charba_client_configuration_Tooltips_ = null;
  this.f_itemSortCallback__org_pepstock_charba_client_configuration_Tooltips_ = null;
  this.f_filterCallback__org_pepstock_charba_client_configuration_Tooltips_ = null;
 }
 
 static $clinit() {
  Tooltips.$clinit = () =>{};
  Tooltips.$loadModules();
  ConfigurationOptionsContainer.$clinit();
  HasAnimation.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Tooltips;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  IsProvider = goog.module.get('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
  AnimationContainer = goog.module.get('org.pepstock.charba.client.configuration.AnimationContainer$impl');
  Font = goog.module.get('org.pepstock.charba.client.configuration.Font$impl');
  Padding = goog.module.get('org.pepstock.charba.client.configuration.Padding$impl');
  Property = goog.module.get('org.pepstock.charba.client.configuration.Tooltips.Property$impl');
  TooltipContext = goog.module.get('org.pepstock.charba.client.configuration.Tooltips.TooltipContext$impl');
  TooltipsCallbacks = goog.module.get('org.pepstock.charba.client.configuration.TooltipsCallbacks$impl');
  TooltipItem = goog.module.get('org.pepstock.charba.client.items.TooltipItem$impl');
 }
}
HasAnimation.$markImplementor(Tooltips);
$Util.$setClassMetadata(Tooltips, "org.pepstock.charba.client.configuration.Tooltips");

exports = Tooltips;

//# sourceMappingURL=Tooltips.js.map
