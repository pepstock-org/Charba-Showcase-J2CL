goog.module('org.pepstock.charba.client.configuration.LegendLabels$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationOptionsContainer = goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let LegendFilterCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.LegendFilterCallback$impl');
let LegendItemSortCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.LegendItemSortCallback$impl');
let LegendLabelsCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.LegendLabelsCallback$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ArrayObject_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let IsProvider = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.configuration.Font$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.LegendLabels.Property$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');
let LegendLabelItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendLabelItem$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LegendLabels extends ConfigurationOptionsContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, Chart):Array>}*/
  this.f_labelsCallbackProxy__org_pepstock_charba_client_configuration_LegendLabels_;
  /**@type {CharbaCallbackProxy<?function(Object, ?, Chart):boolean>}*/
  this.f_filterCallbackProxy__org_pepstock_charba_client_configuration_LegendLabels_;
  /**@type {CharbaCallbackProxy<?function(Object, ?, ?, Chart):number>}*/
  this.f_itemSortCallbackProxy__org_pepstock_charba_client_configuration_LegendLabels_;
  /**@type {LegendFilterCallback}*/
  this.f_filterCallback__org_pepstock_charba_client_configuration_LegendLabels_;
  /**@type {LegendLabelsCallback}*/
  this.f_labelsCallback__org_pepstock_charba_client_configuration_LegendLabels_;
  /**@type {LegendItemSortCallback}*/
  this.f_itemSortCallback__org_pepstock_charba_client_configuration_LegendLabels_;
  /**@type {Font}*/
  this.f_font__org_pepstock_charba_client_configuration_LegendLabels_;
 }
 /** @return {!LegendLabels} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  LegendLabels.$clinit();
  let $instance = new LegendLabels();
  $instance.$ctor__org_pepstock_charba_client_configuration_LegendLabels__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_LegendLabels__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  this.$init___$p_org_pepstock_charba_client_configuration_LegendLabels();
  this.f_font__org_pepstock_charba_client_configuration_LegendLabels_ = Font.$create__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(IsProvider.$adapt(() =>{
   return this.m_getConfiguration__().m_getLegend__().m_getLabels__().m_getFont__();
  }));
  this.f_filterCallbackProxy__org_pepstock_charba_client_configuration_LegendLabels_.callback = (/** Object */ context, /** ? */ item, /** Chart */ nativeChart) =>{
   let filterCallback = this.m_getFilterCallback__();
   if (!$Equality.$same(filterCallback, null)) {
    return filterCallback.m_onFilter__org_pepstock_charba_client_IsChart__java_lang_Object(this.m_getChart__(), LegendLabelItem.f_FACTORY__org_pepstock_charba_client_items_LegendLabelItem.m_create__org_pepstock_charba_client_commons_NativeObject(item));
   }
   return true;
  };
  this.f_itemSortCallbackProxy__org_pepstock_charba_client_configuration_LegendLabels_.callback = (/** Object */ context_1, /** ? */ item1, /** ? */ item2, /** Chart */ nativeChart_1) =>{
   let itemSortCallback = this.m_getItemSortCallback__();
   if (!$Equality.$same(itemSortCallback, null)) {
    return itemSortCallback.m_onItemSort__org_pepstock_charba_client_IsChart__java_lang_Object__java_lang_Object(this.m_getChart__(), LegendLabelItem.f_FACTORY__org_pepstock_charba_client_items_LegendLabelItem.m_create__org_pepstock_charba_client_commons_NativeObject(item1), LegendLabelItem.f_FACTORY__org_pepstock_charba_client_items_LegendLabelItem.m_create__org_pepstock_charba_client_commons_NativeObject(item2));
   }
   return 0;
  };
  this.f_labelsCallbackProxy__org_pepstock_charba_client_configuration_LegendLabels_.callback = (/** Object */ context_2, /** Chart */ nativeChart_2) =>{
   let labelsCallback = this.m_getLabelsCallback__();
   if (!$Equality.$same(labelsCallback, null)) {
    let result = labelsCallback.m_generateLegendLabels__org_pepstock_charba_client_IsChart__java_util_List(this.m_getChart__(), Defaults.m_get__().m_generateLabels__org_pepstock_charba_client_Chart(nativeChart_2));
    return ArrayObject_$Overlay.m_fromOrEmpty__java_util_List(result);
   }
   return ArrayObject_$Overlay.m_fromOrEmpty__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(LegendLabels.f_EMPTY_RESULT__org_pepstock_charba_client_configuration_LegendLabels_);
  };
 }
 /** @return {Font} */
 m_getFont__() {
  return this.f_font__org_pepstock_charba_client_configuration_LegendLabels_;
 }
 
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setColor__java_lang_String(/** ?string */ color) {
  this.m_getConfiguration__().m_getLegend__().m_getLabels__().m_setColor__java_lang_String(color);
 }
 /** @return {?string} */
 m_getColorAsString__() {
  return this.m_getConfiguration__().m_getLegend__().m_getLabels__().m_getColorAsString__();
 }
 /** @return {IsColor} */
 m_getColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getColorAsString__());
 }
 
 m_setUsePointStyle__boolean(/** boolean */ usePointStyle) {
  this.m_getConfiguration__().m_getLegend__().m_getLabels__().m_setUsePointStyle__boolean(usePointStyle);
 }
 /** @return {boolean} */
 m_isUsePointStyle__() {
  return this.m_getConfiguration__().m_getLegend__().m_getLabels__().m_isUsePointStyle__();
 }
 
 m_setPointStyle__org_pepstock_charba_client_enums_PointStyle(/** PointStyle */ pointStyle) {
  this.m_getConfiguration__().m_getLegend__().m_getLabels__().m_setPointStyle__org_pepstock_charba_client_enums_PointStyle(pointStyle);
 }
 
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Img(/** HTMLImageElement */ pointStyle) {
  this.m_getConfiguration__().m_getLegend__().m_getLabels__().m_setPointStyle__org_pepstock_charba_client_dom_elements_Img(pointStyle);
 }
 /** @return {boolean} */
 m_isPointStyleAsImage__() {
  return this.m_getConfiguration__().m_getLegend__().m_getLabels__().m_isPointStyleAsImage__();
 }
 /** @return {PointStyle} */
 m_getPointStyle__() {
  return this.m_getConfiguration__().m_getLegend__().m_getLabels__().m_getPointStyle__();
 }
 /** @return {HTMLImageElement} */
 m_getPointStyleAsImage__() {
  return this.m_getConfiguration__().m_getLegend__().m_getLabels__().m_getPointStyleAsImage__();
 }
 
 m_setBoxWidth__int(/** number */ boxWidth) {
  this.m_getConfiguration__().m_getLegend__().m_getLabels__().m_setBoxWidth__int(boxWidth);
 }
 /** @return {number} */
 m_getBoxWidth__() {
  return this.m_getConfiguration__().m_getLegend__().m_getLabels__().m_getBoxWidth__();
 }
 
 m_setBoxHeight__int(/** number */ boxHeight) {
  this.m_getConfiguration__().m_getLegend__().m_getLabels__().m_setBoxHeight__int(boxHeight);
 }
 /** @return {number} */
 m_getBoxHeight__() {
  return this.m_getConfiguration__().m_getLegend__().m_getLabels__().m_getBoxHeight__();
 }
 
 m_setPadding__int(/** number */ padding) {
  this.m_getConfiguration__().m_getLegend__().m_getLabels__().m_setPadding__int(padding);
 }
 /** @return {number} */
 m_getPadding__() {
  return this.m_getConfiguration__().m_getLegend__().m_getLabels__().m_getPadding__();
 }
 
 m_setTextAlign__org_pepstock_charba_client_enums_TextAlign(/** TextAlign */ align) {
  this.m_getConfiguration__().m_getLegend__().m_getLabels__().m_setTextAlign__org_pepstock_charba_client_enums_TextAlign(align);
 }
 /** @return {TextAlign} */
 m_getTextAlign__() {
  return this.m_getConfiguration__().m_getLegend__().m_getLabels__().m_getTextAlign__();
 }
 /** @return {LegendFilterCallback} */
 m_getFilterCallback__() {
  return this.f_filterCallback__org_pepstock_charba_client_configuration_LegendLabels_;
 }
 
 m_setFilterCallback__org_pepstock_charba_client_callbacks_LegendFilterCallback(/** LegendFilterCallback */ filterCallback) {
  this.f_filterCallback__org_pepstock_charba_client_configuration_LegendLabels_ = filterCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getLegend__().m_getLabels__(), Property.f_FILTER__org_pepstock_charba_client_configuration_LegendLabels_Property, filterCallback, this.f_filterCallbackProxy__org_pepstock_charba_client_configuration_LegendLabels_);
 }
 /** @return {LegendLabelsCallback} */
 m_getLabelsCallback__() {
  return this.f_labelsCallback__org_pepstock_charba_client_configuration_LegendLabels_;
 }
 
 m_setLabelsCallback__org_pepstock_charba_client_callbacks_LegendLabelsCallback(/** LegendLabelsCallback */ labelsCallback) {
  this.f_labelsCallback__org_pepstock_charba_client_configuration_LegendLabels_ = labelsCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getLegend__().m_getLabels__(), Property.f_GENERATE_LABELS__org_pepstock_charba_client_configuration_LegendLabels_Property, labelsCallback, this.f_labelsCallbackProxy__org_pepstock_charba_client_configuration_LegendLabels_);
 }
 /** @return {LegendItemSortCallback} */
 m_getItemSortCallback__() {
  return this.f_itemSortCallback__org_pepstock_charba_client_configuration_LegendLabels_;
 }
 
 m_setItemSortCallback__org_pepstock_charba_client_callbacks_LegendItemSortCallback(/** LegendItemSortCallback */ itemSortCallback) {
  this.f_itemSortCallback__org_pepstock_charba_client_configuration_LegendLabels_ = itemSortCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getLegend__().m_getLabels__(), Property.f_SORT__org_pepstock_charba_client_configuration_LegendLabels_Property, itemSortCallback, this.f_itemSortCallbackProxy__org_pepstock_charba_client_configuration_LegendLabels_);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_LegendLabels() {
  this.f_labelsCallbackProxy__org_pepstock_charba_client_configuration_LegendLabels_ = /**@type {CharbaCallbackProxy<?function(Object, Chart):Array>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_filterCallbackProxy__org_pepstock_charba_client_configuration_LegendLabels_ = /**@type {CharbaCallbackProxy<?function(Object, ?, Chart):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_itemSortCallbackProxy__org_pepstock_charba_client_configuration_LegendLabels_ = /**@type {CharbaCallbackProxy<?function(Object, ?, ?, Chart):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_filterCallback__org_pepstock_charba_client_configuration_LegendLabels_ = null;
  this.f_labelsCallback__org_pepstock_charba_client_configuration_LegendLabels_ = null;
  this.f_itemSortCallback__org_pepstock_charba_client_configuration_LegendLabels_ = null;
 }
 
 static $clinit() {
  LegendLabels.$clinit = () =>{};
  LegendLabels.$loadModules();
  ConfigurationOptionsContainer.$clinit();
  LegendLabels.f_EMPTY_RESULT__org_pepstock_charba_client_configuration_LegendLabels_ = /**@type {!Array<LegendLabelItem>}*/ ($Arrays.$create([0], LegendLabelItem));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LegendLabels;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  ArrayObject_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  IsProvider = goog.module.get('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
  Font = goog.module.get('org.pepstock.charba.client.configuration.Font$impl');
  Property = goog.module.get('org.pepstock.charba.client.configuration.LegendLabels.Property$impl');
  LegendLabelItem = goog.module.get('org.pepstock.charba.client.items.LegendLabelItem$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@type {Array<LegendLabelItem>}*/
LegendLabels.f_EMPTY_RESULT__org_pepstock_charba_client_configuration_LegendLabels_;
$Util.$setClassMetadata(LegendLabels, "org.pepstock.charba.client.configuration.LegendLabels");

exports = LegendLabels;

//# sourceMappingURL=LegendLabels.js.map
