goog.module('org.pepstock.charba.client.configuration.TooltipsCallbacks$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationOptionsContainer = goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let TooltipBodyCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TooltipBodyCallback$impl');
let TooltipFooterCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TooltipFooterCallback$impl');
let TooltipLabelCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TooltipLabelCallback$impl');
let TooltipTitleCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TooltipTitleCallback$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayString_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.TooltipsCallbacks.Property$impl');
let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');
let TooltipLabelColor = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipLabelColor$impl');
let TooltipLabelPointStyle = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipLabelPointStyle$impl');

class TooltipsCallbacks extends ConfigurationOptionsContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, Array):Array>}*/
  this.f_beforeTitleCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
  /**@type {CharbaCallbackProxy<?function(Object, Array):Array>}*/
  this.f_titleCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
  /**@type {CharbaCallbackProxy<?function(Object, Array):Array>}*/
  this.f_afterTitleCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
  /**@type {CharbaCallbackProxy<?function(Object, Array):Array>}*/
  this.f_beforeBodyCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
  /**@type {CharbaCallbackProxy<?function(Object, Array):Array>}*/
  this.f_afterBodyCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/
  this.f_beforeLabelCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/
  this.f_labelCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):?>}*/
  this.f_labelColorCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):?>}*/
  this.f_labelPointStyleCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/
  this.f_labelTextColorCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/
  this.f_afterLabelCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
  /**@type {CharbaCallbackProxy<?function(Object, Array):Array>}*/
  this.f_beforeFooterCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
  /**@type {CharbaCallbackProxy<?function(Object, Array):Array>}*/
  this.f_footerCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
  /**@type {CharbaCallbackProxy<?function(Object, Array):Array>}*/
  this.f_afterFooterCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
  /**@type {TooltipTitleCallback}*/
  this.f_titleCallback__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
  /**@type {TooltipBodyCallback}*/
  this.f_bodyCallback__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
  /**@type {TooltipLabelCallback}*/
  this.f_labelCallback__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
  /**@type {TooltipFooterCallback}*/
  this.f_footerCallback__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
 }
 /** @return {!TooltipsCallbacks} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  TooltipsCallbacks.$clinit();
  let $instance = new TooltipsCallbacks();
  $instance.$ctor__org_pepstock_charba_client_configuration_TooltipsCallbacks__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_TooltipsCallbacks__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  this.$init___$p_org_pepstock_charba_client_configuration_TooltipsCallbacks();
  this.f_beforeTitleCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_.callback = (/** Object */ context, /** Array */ items) =>{
   return this.m_onBeforeTitleCallback__org_pepstock_charba_client_commons_ArrayObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(items);
  };
  this.f_titleCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_.callback = (/** Object */ context_1, /** Array */ items_1) =>{
   return this.m_onTitleCallback__org_pepstock_charba_client_commons_ArrayObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(items_1);
  };
  this.f_afterTitleCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_.callback = (/** Object */ context_2, /** Array */ items_2) =>{
   return this.m_onAfterTitleCallback__org_pepstock_charba_client_commons_ArrayObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(items_2);
  };
  this.f_beforeBodyCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_.callback = (/** Object */ context_3, /** Array */ items_3) =>{
   return this.m_onBeforeBodyCallback__org_pepstock_charba_client_commons_ArrayObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(items_3);
  };
  this.f_afterBodyCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_.callback = (/** Object */ context_4, /** Array */ items_4) =>{
   return this.m_onAfterBodyCallback__org_pepstock_charba_client_commons_ArrayObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(items_4);
  };
  this.f_beforeLabelCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_.callback = (/** Object */ context_5, /** ? */ item) =>{
   return this.m_onBeforeLabelCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(item);
  };
  this.f_labelCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_.callback = (/** Object */ context_6, /** ? */ item_1) =>{
   return this.m_onLabelCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(item_1);
  };
  this.f_labelColorCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_.callback = (/** Object */ context_7, /** ? */ item_2) =>{
   return this.m_onLabelColorCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(item_2);
  };
  this.f_labelPointStyleCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_.callback = (/** Object */ context_8, /** ? */ item_3) =>{
   return this.m_onLabelPointStyleCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(item_3);
  };
  this.f_labelTextColorCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_.callback = (/** Object */ context_9, /** ? */ item_4) =>{
   return this.m_onLabelTextColorCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(item_4);
  };
  this.f_afterLabelCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_.callback = (/** Object */ context_10, /** ? */ item_5) =>{
   return this.m_onAfterLabelCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(item_5);
  };
  this.f_beforeFooterCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_.callback = (/** Object */ context_11, /** Array */ items_5) =>{
   return this.m_onBeforeFooterCallback__org_pepstock_charba_client_commons_ArrayObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(items_5);
  };
  this.f_footerCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_.callback = (/** Object */ context_12, /** Array */ items_6) =>{
   return this.m_onFooterCallback__org_pepstock_charba_client_commons_ArrayObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(items_6);
  };
  this.f_afterFooterCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_.callback = (/** Object */ context_13, /** Array */ items_7) =>{
   return this.m_onAfterFooterCallback__org_pepstock_charba_client_commons_ArrayObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(items_7);
  };
 }
 /** @return {TooltipTitleCallback} */
 m_getTitleCallback__() {
  return this.f_titleCallback__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
 }
 
 m_setTitleCallback__org_pepstock_charba_client_callbacks_TooltipTitleCallback(/** TooltipTitleCallback */ titleCallback) {
  this.f_titleCallback__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = titleCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getTooltips__().m_getCallbacks__(), Property.f_BEFORE_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, titleCallback, this.f_beforeTitleCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_);
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getTooltips__().m_getCallbacks__(), Property.f_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, titleCallback, this.f_titleCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_);
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getTooltips__().m_getCallbacks__(), Property.f_AFTER_TITLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, titleCallback, this.f_afterTitleCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_);
 }
 /** @return {TooltipBodyCallback} */
 m_getBodyCallback__() {
  return this.f_bodyCallback__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
 }
 
 m_setBodyCallback__org_pepstock_charba_client_callbacks_TooltipBodyCallback(/** TooltipBodyCallback */ bodyCallback) {
  this.f_bodyCallback__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = bodyCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getTooltips__().m_getCallbacks__(), Property.f_BEFORE_BODY__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, bodyCallback, this.f_beforeBodyCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_);
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getTooltips__().m_getCallbacks__(), Property.f_AFTER_BODY__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, bodyCallback, this.f_afterBodyCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_);
 }
 /** @return {TooltipLabelCallback} */
 m_getLabelCallback__() {
  return this.f_labelCallback__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
 }
 
 m_setLabelCallback__org_pepstock_charba_client_callbacks_TooltipLabelCallback(/** TooltipLabelCallback */ labelCallback) {
  this.f_labelCallback__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = labelCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getTooltips__().m_getCallbacks__(), Property.f_BEFORE_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, labelCallback, this.f_beforeLabelCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_);
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getTooltips__().m_getCallbacks__(), Property.f_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, labelCallback, this.f_labelCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_);
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getTooltips__().m_getCallbacks__(), Property.f_LABEL_COLOR__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, labelCallback, this.f_labelColorCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_);
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getTooltips__().m_getCallbacks__(), Property.f_LABEL_TEXT_COLOR__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, labelCallback, this.f_labelTextColorCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_);
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getTooltips__().m_getCallbacks__(), Property.f_AFTER_LABEL__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, labelCallback, this.f_afterLabelCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_);
 }
 /** @return {TooltipFooterCallback} */
 m_getFooterCallback__() {
  return this.f_footerCallback__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
 }
 
 m_setFooterCallback__org_pepstock_charba_client_callbacks_TooltipFooterCallback(/** TooltipFooterCallback */ footerCallback) {
  this.f_footerCallback__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = footerCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getTooltips__().m_getCallbacks__(), Property.f_BEFORE_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, footerCallback, this.f_beforeFooterCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_);
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getTooltips__().m_getCallbacks__(), Property.f_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, footerCallback, this.f_footerCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_);
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getTooltips__().m_getCallbacks__(), Property.f_AFTER_FOOTER__org_pepstock_charba_client_configuration_TooltipsCallbacks_Property, footerCallback, this.f_afterFooterCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_);
 }
 /** @return {Array} */
 m_onBeforeTitleCallback__org_pepstock_charba_client_commons_ArrayObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(/** Array */ items) {
  let callback = this.m_getTitleCallback__();
  if (!$Equality.$same(callback, null)) {
   let result = callback.m_onBeforeTitle__org_pepstock_charba_client_IsChart__java_util_List(this.m_getChart__(), /**@type {List<TooltipItem>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(items, TooltipItem.f_FACTORY__org_pepstock_charba_client_items_TooltipItem)));
   return ArrayString_$Overlay.m_fromOrEmpty__java_util_List(result);
  }
  return TooltipsCallbacks.f_EMPTY_ARRAY_STRING__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
 }
 /** @return {Array} */
 m_onTitleCallback__org_pepstock_charba_client_commons_ArrayObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(/** Array */ items) {
  let callback = this.m_getTitleCallback__();
  let tooltipItems = /**@type {List<TooltipItem>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(items, TooltipItem.f_FACTORY__org_pepstock_charba_client_items_TooltipItem));
  if (!$Equality.$same(callback, null)) {
   let result = callback.m_onTitle__org_pepstock_charba_client_IsChart__java_util_List(this.m_getChart__(), tooltipItems);
   return ArrayString_$Overlay.m_fromOrEmpty__java_util_List(result);
  }
  return ArrayString_$Overlay.m_fromOrEmpty__java_util_List(Defaults.m_get__().m_invokeTooltipsCallbackOnTitle__org_pepstock_charba_client_IsChart__java_util_List(this.m_getChart__(), tooltipItems));
 }
 /** @return {Array} */
 m_onAfterTitleCallback__org_pepstock_charba_client_commons_ArrayObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(/** Array */ items) {
  let callback = this.m_getTitleCallback__();
  if (!$Equality.$same(callback, null)) {
   let result = callback.m_onAfterTitle__org_pepstock_charba_client_IsChart__java_util_List(this.m_getChart__(), /**@type {List<TooltipItem>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(items, TooltipItem.f_FACTORY__org_pepstock_charba_client_items_TooltipItem)));
   return ArrayString_$Overlay.m_fromOrEmpty__java_util_List(result);
  }
  return TooltipsCallbacks.f_EMPTY_ARRAY_STRING__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
 }
 /** @return {Array} */
 m_onBeforeBodyCallback__org_pepstock_charba_client_commons_ArrayObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(/** Array */ items) {
  let callback = this.m_getBodyCallback__();
  if (!$Equality.$same(callback, null)) {
   let result = callback.m_onBeforeBody__org_pepstock_charba_client_IsChart__java_util_List(this.m_getChart__(), /**@type {List<TooltipItem>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(items, TooltipItem.f_FACTORY__org_pepstock_charba_client_items_TooltipItem)));
   return ArrayString_$Overlay.m_fromOrEmpty__java_util_List(result);
  }
  return TooltipsCallbacks.f_EMPTY_ARRAY_STRING__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
 }
 /** @return {Array} */
 m_onAfterBodyCallback__org_pepstock_charba_client_commons_ArrayObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(/** Array */ items) {
  let callback = this.m_getBodyCallback__();
  if (!$Equality.$same(callback, null)) {
   let result = callback.m_onAfterBody__org_pepstock_charba_client_IsChart__java_util_List(this.m_getChart__(), /**@type {List<TooltipItem>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(items, TooltipItem.f_FACTORY__org_pepstock_charba_client_items_TooltipItem)));
   return ArrayString_$Overlay.m_fromOrEmpty__java_util_List(result);
  }
  return TooltipsCallbacks.f_EMPTY_ARRAY_STRING__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
 }
 /** @return {?string} */
 m_onBeforeLabelCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(/** ? */ item) {
  let callback = this.m_getLabelCallback__();
  if (!$Equality.$same(callback, null)) {
   let result = callback.m_onBeforeLabel__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(this.m_getChart__(), TooltipItem.f_FACTORY__org_pepstock_charba_client_items_TooltipItem.m_create__org_pepstock_charba_client_commons_NativeObject(item));
   if (!$Equality.$same(result, null)) {
    return result;
   }
  }
  return Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
 }
 /** @return {?string} */
 m_onLabelCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(/** ? */ item) {
  let callback = this.m_getLabelCallback__();
  let tooltipItem = TooltipItem.f_FACTORY__org_pepstock_charba_client_items_TooltipItem.m_create__org_pepstock_charba_client_commons_NativeObject(item);
  if (!$Equality.$same(callback, null)) {
   let result = callback.m_onLabel__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(this.m_getChart__(), tooltipItem);
   if (!$Equality.$same(result, null)) {
    return result;
   }
  }
  return Defaults.m_get__().m_invokeTooltipsCallbackOnLabel__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(this.m_getChart__(), tooltipItem);
 }
 /** @return {?} */
 m_onLabelColorCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(/** ? */ item) {
  let callback = this.m_getLabelCallback__();
  let tooltipItem = TooltipItem.f_FACTORY__org_pepstock_charba_client_items_TooltipItem.m_create__org_pepstock_charba_client_commons_NativeObject(item);
  if (!$Equality.$same(callback, null)) {
   let result = callback.m_onLabelColor__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(this.m_getChart__(), tooltipItem);
   if (!$Equality.$same(result, null)) {
    return result.m_nativeObject__();
   }
  }
  let defaultColor = Defaults.m_get__().m_invokeTooltipsCallbackOnLabelColor__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(this.m_getChart__(), tooltipItem);
  if (!$Equality.$same(defaultColor, null)) {
   return defaultColor.m_nativeObject__();
  }
  return TooltipsCallbacks.f_DEFAULT_LABEL_COLOR__org_pepstock_charba_client_configuration_TooltipsCallbacks_.m_nativeObject__();
 }
 /** @return {?} */
 m_onLabelPointStyleCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(/** ? */ item) {
  let callback = this.m_getLabelCallback__();
  let tooltipItem = TooltipItem.f_FACTORY__org_pepstock_charba_client_items_TooltipItem.m_create__org_pepstock_charba_client_commons_NativeObject(item);
  if (!$Equality.$same(callback, null)) {
   let result = callback.m_onLabelPointStyle__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(this.m_getChart__(), tooltipItem);
   if (!$Equality.$same(result, null)) {
    return result.m_getObject__();
   }
  }
  let defaultPointSTyle = Defaults.m_get__().m_invokeTooltipsCallbackOnLabelPointStyle__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(this.m_getChart__(), tooltipItem);
  if (!$Equality.$same(defaultPointSTyle, null)) {
   return defaultPointSTyle.m_getObject__();
  }
  return TooltipsCallbacks.f_DEFAULT_LABEL_POINT_STYLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_.m_getObject__();
 }
 /** @return {?string} */
 m_onLabelTextColorCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(/** ? */ item) {
  let callback = this.m_getLabelCallback__();
  if (!$Equality.$same(callback, null)) {
   let result = callback.m_onLabelTextColor__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(this.m_getChart__(), TooltipItem.f_FACTORY__org_pepstock_charba_client_items_TooltipItem.m_create__org_pepstock_charba_client_commons_NativeObject(item));
   if (IsColor.m_isConsistent__org_pepstock_charba_client_colors_IsColor(result)) {
    return result.m_toRGBA__();
   }
  }
  return this.m_getConfiguration__().m_getTooltips__().m_getBodyColorAsString__();
 }
 /** @return {?string} */
 m_onAfterLabelCallback__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(/** ? */ item) {
  let callback = this.m_getLabelCallback__();
  if (!$Equality.$same(callback, null)) {
   let result = callback.m_onAfterLabel__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_items_TooltipItem(this.m_getChart__(), TooltipItem.f_FACTORY__org_pepstock_charba_client_items_TooltipItem.m_create__org_pepstock_charba_client_commons_NativeObject(item));
   if (!$Equality.$same(result, null)) {
    return result;
   }
  }
  return Constants.f_EMPTY_STRING__org_pepstock_charba_client_commons_Constants;
 }
 /** @return {Array} */
 m_onBeforeFooterCallback__org_pepstock_charba_client_commons_ArrayObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(/** Array */ items) {
  let callback = this.m_getFooterCallback__();
  if (!$Equality.$same(callback, null)) {
   let result = callback.m_onBeforeFooter__org_pepstock_charba_client_IsChart__java_util_List(this.m_getChart__(), /**@type {List<TooltipItem>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(items, TooltipItem.f_FACTORY__org_pepstock_charba_client_items_TooltipItem)));
   return ArrayString_$Overlay.m_fromOrEmpty__java_util_List(result);
  }
  return TooltipsCallbacks.f_EMPTY_ARRAY_STRING__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
 }
 /** @return {Array} */
 m_onFooterCallback__org_pepstock_charba_client_commons_ArrayObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(/** Array */ items) {
  let callback = this.m_getFooterCallback__();
  if (!$Equality.$same(callback, null)) {
   let result = callback.m_onFooter__org_pepstock_charba_client_IsChart__java_util_List(this.m_getChart__(), /**@type {List<TooltipItem>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(items, TooltipItem.f_FACTORY__org_pepstock_charba_client_items_TooltipItem)));
   return ArrayString_$Overlay.m_fromOrEmpty__java_util_List(result);
  }
  return TooltipsCallbacks.f_EMPTY_ARRAY_STRING__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
 }
 /** @return {Array} */
 m_onAfterFooterCallback__org_pepstock_charba_client_commons_ArrayObject_$p_org_pepstock_charba_client_configuration_TooltipsCallbacks(/** Array */ items) {
  let callback = this.m_getFooterCallback__();
  if (!$Equality.$same(callback, null)) {
   let result = callback.m_onAfterFooter__org_pepstock_charba_client_IsChart__java_util_List(this.m_getChart__(), /**@type {List<TooltipItem>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(items, TooltipItem.f_FACTORY__org_pepstock_charba_client_items_TooltipItem)));
   return ArrayString_$Overlay.m_fromOrEmpty__java_util_List(result);
  }
  return TooltipsCallbacks.f_EMPTY_ARRAY_STRING__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_TooltipsCallbacks() {
  this.f_beforeTitleCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = /**@type {CharbaCallbackProxy<?function(Object, Array):Array>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_titleCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = /**@type {CharbaCallbackProxy<?function(Object, Array):Array>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterTitleCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = /**@type {CharbaCallbackProxy<?function(Object, Array):Array>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_beforeBodyCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = /**@type {CharbaCallbackProxy<?function(Object, Array):Array>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterBodyCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = /**@type {CharbaCallbackProxy<?function(Object, Array):Array>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_beforeLabelCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_labelCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_labelColorCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = /**@type {CharbaCallbackProxy<?function(Object, ?):?>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_labelPointStyleCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = /**@type {CharbaCallbackProxy<?function(Object, ?):?>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_labelTextColorCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterLabelCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_beforeFooterCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = /**@type {CharbaCallbackProxy<?function(Object, Array):Array>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_footerCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = /**@type {CharbaCallbackProxy<?function(Object, Array):Array>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_afterFooterCallbackProxy__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = /**@type {CharbaCallbackProxy<?function(Object, Array):Array>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_titleCallback__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = null;
  this.f_bodyCallback__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = null;
  this.f_labelCallback__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = null;
  this.f_footerCallback__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = null;
 }
 
 static $clinit() {
  TooltipsCallbacks.$clinit = () =>{};
  TooltipsCallbacks.$loadModules();
  ConfigurationOptionsContainer.$clinit();
  TooltipsCallbacks.f_EMPTY_ARRAY_STRING__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = ArrayString_$Overlay.m_fromOrEmpty__java_util_List(/**@type {List<?string>}*/ (Collections.m_emptyList__()));
  TooltipsCallbacks.f_DEFAULT_LABEL_COLOR__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = TooltipLabelColor.$create__();
  TooltipsCallbacks.f_DEFAULT_LABEL_POINT_STYLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_ = TooltipLabelPointStyle.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TooltipsCallbacks;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayString_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Property = goog.module.get('org.pepstock.charba.client.configuration.TooltipsCallbacks.Property$impl');
  TooltipItem = goog.module.get('org.pepstock.charba.client.items.TooltipItem$impl');
  TooltipLabelColor = goog.module.get('org.pepstock.charba.client.items.TooltipLabelColor$impl');
  TooltipLabelPointStyle = goog.module.get('org.pepstock.charba.client.items.TooltipLabelPointStyle$impl');
 }
}
/**@type {Array}*/
TooltipsCallbacks.f_EMPTY_ARRAY_STRING__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
/**@type {TooltipLabelColor}*/
TooltipsCallbacks.f_DEFAULT_LABEL_COLOR__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
/**@type {TooltipLabelPointStyle}*/
TooltipsCallbacks.f_DEFAULT_LABEL_POINT_STYLE__org_pepstock_charba_client_configuration_TooltipsCallbacks_;
$Util.$setClassMetadata(TooltipsCallbacks, "org.pepstock.charba.client.configuration.TooltipsCallbacks");

exports = TooltipsCallbacks;

//# sourceMappingURL=TooltipsCallbacks.js.map
