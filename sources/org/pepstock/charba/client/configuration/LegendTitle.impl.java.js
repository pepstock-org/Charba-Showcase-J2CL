goog.module('org.pepstock.charba.client.configuration.LegendTitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationOptionsContainer = goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer$impl');
const HasLegendText = goog.require('org.pepstock.charba.client.items.HasLegendText$impl');

let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let IsProvider = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.configuration.Font$impl');
let Padding = goog.forwardDeclare('org.pepstock.charba.client.configuration.Padding$impl');
let SafeHtml = goog.forwardDeclare('org.pepstock.charba.client.dom.safehtml.SafeHtml$impl');
let LegendTextHandler = goog.forwardDeclare('org.pepstock.charba.client.items.LegendTextHandler$impl');

/**
 * @implements {HasLegendText}
 */
class LegendTitle extends ConfigurationOptionsContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {Font}*/
  this.f_font__org_pepstock_charba_client_configuration_LegendTitle_;
  /**@type {Padding}*/
  this.f_padding__org_pepstock_charba_client_configuration_LegendTitle_;
 }
 /** @return {!LegendTitle} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  LegendTitle.$clinit();
  let $instance = new LegendTitle();
  $instance.$ctor__org_pepstock_charba_client_configuration_LegendTitle__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_LegendTitle__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  this.f_font__org_pepstock_charba_client_configuration_LegendTitle_ = Font.$create__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(IsProvider.$adapt(() =>{
   return this.m_getConfiguration__().m_getLegend__().m_getTitle__().m_getFont__();
  }));
  this.f_padding__org_pepstock_charba_client_configuration_LegendTitle_ = Padding.$create__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(IsProvider.$adapt(() =>{
   return this.m_getConfiguration__().m_getLegend__().m_getTitle__().m_getPadding__();
  }));
 }
 /** @override @return {LegendTextHandler} */
 m_getLegendTextHandler__() {
  return this.m_getConfiguration__().m_getLegend__().m_getTitle__().m_getLegendTextHandler__();
 }
 /** @return {Padding} */
 m_getPadding__() {
  return this.f_padding__org_pepstock_charba_client_configuration_LegendTitle_;
 }
 /** @return {Font} */
 m_getFont__() {
  return this.f_font__org_pepstock_charba_client_configuration_LegendTitle_;
 }
 
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setColor__java_lang_String(/** ?string */ color) {
  this.m_getConfiguration__().m_getLegend__().m_getTitle__().m_setColor__java_lang_String(color);
 }
 /** @return {?string} */
 m_getColorAsString__() {
  return this.m_getConfiguration__().m_getLegend__().m_getTitle__().m_getColorAsString__();
 }
 /** @return {IsColor} */
 m_getColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getColorAsString__());
 }
 
 m_setDisplay__boolean(/** boolean */ display) {
  this.m_getConfiguration__().m_getLegend__().m_getTitle__().m_setDisplay__boolean(display);
 }
 /** @return {boolean} */
 m_isDisplay__() {
  return this.m_getConfiguration__().m_getLegend__().m_getTitle__().m_isDisplay__();
 }
 /** @override */
 m_setText__java_lang_String(/** ?string */ text) {
  this.m_getConfiguration__().m_getLegend__().m_getTitle__().m_setText__java_lang_String(text);
 }
 /** @override @return {?string} */
 m_getText__() {
  return this.m_getConfiguration__().m_getLegend__().m_getTitle__().m_getText__();
 }
 /** @override */
 m_setText__org_pepstock_charba_client_dom_safehtml_SafeHtml(/** SafeHtml */ text) {
  this.m_getConfiguration__().m_getLegend__().m_getTitle__().m_setText__org_pepstock_charba_client_dom_safehtml_SafeHtml(text);
 }
 /** @override @return {SafeHtml} */
 m_getTextAsHtml__() {
  return this.m_getConfiguration__().m_getLegend__().m_getTitle__().m_getTextAsHtml__();
 }
 /** @override @return {boolean} */
 m_isHtmlText__() {
  return this.m_getConfiguration__().m_getLegend__().m_getTitle__().m_isHtmlText__();
 }
 /** @override */
 m_setHtmlText__boolean(/** boolean */ htmlText) {
  this.m_getConfiguration__().m_getLegend__().m_getTitle__().m_setHtmlText__boolean(htmlText);
 }
 
 static $clinit() {
  LegendTitle.$clinit = () =>{};
  LegendTitle.$loadModules();
  ConfigurationOptionsContainer.$clinit();
  HasLegendText.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LegendTitle;
 }
 
 static $loadModules() {
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  IsProvider = goog.module.get('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
  Font = goog.module.get('org.pepstock.charba.client.configuration.Font$impl');
  Padding = goog.module.get('org.pepstock.charba.client.configuration.Padding$impl');
 }
}
HasLegendText.$markImplementor(LegendTitle);
$Util.$setClassMetadata(LegendTitle, "org.pepstock.charba.client.configuration.LegendTitle");

exports = LegendTitle;

//# sourceMappingURL=LegendTitle.js.map
