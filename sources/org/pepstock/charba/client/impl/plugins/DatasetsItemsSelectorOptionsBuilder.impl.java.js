goog.module('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptionsBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let FontStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.FontStyle$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let DatasetsItemsSelectorOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');
let Align = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.Align$impl');
let Render = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.Render$impl');
let IsScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.IsScaleId$impl');

class DatasetsItemsSelectorOptionsBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DatasetsItemsSelectorOptions}*/
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_;
 }
 /** @return {!DatasetsItemsSelectorOptionsBuilder} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  let $instance = new DatasetsItemsSelectorOptionsBuilder();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__java_lang_Object__();
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_ = DatasetsItemsSelectorOptions.$create__org_pepstock_charba_client_IsChart(chart);
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 static m_create__() {
  DatasetsItemsSelectorOptionsBuilder.$clinit();
  return DatasetsItemsSelectorOptionsBuilder.m_create__org_pepstock_charba_client_IsChart(null);
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 static m_create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  DatasetsItemsSelectorOptionsBuilder.$clinit();
  return DatasetsItemsSelectorOptionsBuilder.$create__org_pepstock_charba_client_IsChart(chart);
 }
 /** @return {DatasetsItemsSelectorOptions} */
 m_build__() {
  return this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setEnabled__boolean(/** boolean */ enabled) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_setEnabled__boolean(enabled);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setXAxisID__java_lang_String(/** ?string */ xAxisID) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_setXAxisID__java_lang_String(xAxisID);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setXAxisID__org_pepstock_charba_client_options_IsScaleId(/** IsScaleId */ xAxisID) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_setXAxisID__org_pepstock_charba_client_options_IsScaleId(xAxisID);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setColor__java_lang_String(/** ?string */ color) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_setColor__java_lang_String(color);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_setColor__org_pepstock_charba_client_colors_IsColor(color);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setBorderDash__arrayOf_int(/** Array<number> */ borderDash) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_setBorderDash__arrayOf_int(borderDash);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setBorderWidth__int(/** number */ borderWidth) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_setBorderWidth__int(borderWidth);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setBorderColor__java_lang_String(/** ?string */ color) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_setBorderColor__java_lang_String(color);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_setBorderColor__org_pepstock_charba_client_colors_IsColor(color);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setDisplay__boolean(/** boolean */ display) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_getSelectionCleaner__().m_setDisplay__boolean(display);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setLabel__java_lang_String(/** ?string */ label) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_getSelectionCleaner__().m_setLabel__java_lang_String(label);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setFontSize__int(/** number */ fontSize) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_getSelectionCleaner__().m_getFont__().m_setSize__int(fontSize);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setFontStyle__org_pepstock_charba_client_enums_FontStyle(/** FontStyle */ fontStyle) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_getSelectionCleaner__().m_getFont__().m_setStyle__org_pepstock_charba_client_enums_FontStyle(fontStyle);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setFontFamily__java_lang_String(/** ?string */ fontFamily) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_getSelectionCleaner__().m_getFont__().m_setFamily__java_lang_String(fontFamily);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setFontColor__java_lang_String(/** ?string */ color) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_getSelectionCleaner__().m_setColor__java_lang_String(color);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setFontColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_getSelectionCleaner__().m_setColor__org_pepstock_charba_client_colors_IsColor(color);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setAlign__org_pepstock_charba_client_impl_plugins_enums_Align(/** Align */ align) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_getSelectionCleaner__().m_setAlign__org_pepstock_charba_client_impl_plugins_enums_Align(align);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setRender__org_pepstock_charba_client_impl_plugins_enums_Render(/** Render */ render) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_getSelectionCleaner__().m_setRender__org_pepstock_charba_client_impl_plugins_enums_Render(render);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setPosition__org_pepstock_charba_client_enums_Position(/** Position */ position) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_getSelectionCleaner__().m_setPosition__org_pepstock_charba_client_enums_Position(position);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setImage__org_pepstock_charba_client_dom_elements_Img(/** HTMLImageElement */ image) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_getSelectionCleaner__().m_setImage__org_pepstock_charba_client_dom_elements_Img(image);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setMargin__int(/** number */ margin) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_getSelectionCleaner__().m_setMargin__int(margin);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setPadding__int(/** number */ padding) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_getSelectionCleaner__().m_setPadding__int(padding);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setSpacing__int(/** number */ spacing) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_getSelectionCleaner__().m_setSpacing__int(spacing);
  return this;
 }
 /** @return {DatasetsItemsSelectorOptionsBuilder} */
 m_setUseSelectionStyle__boolean(/** boolean */ useSelectionStyle) {
  this.f_options__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptionsBuilder_.m_getSelectionCleaner__().m_setUseSelectionStyle__boolean(useSelectionStyle);
  return this;
 }
 
 static $clinit() {
  DatasetsItemsSelectorOptionsBuilder.$clinit = () =>{};
  DatasetsItemsSelectorOptionsBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetsItemsSelectorOptionsBuilder;
 }
 
 static $loadModules() {
  DatasetsItemsSelectorOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');
 }
}
$Util.$setClassMetadata(DatasetsItemsSelectorOptionsBuilder, "org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptionsBuilder");

exports = DatasetsItemsSelectorOptionsBuilder;

//# sourceMappingURL=DatasetsItemsSelectorOptionsBuilder.js.map
