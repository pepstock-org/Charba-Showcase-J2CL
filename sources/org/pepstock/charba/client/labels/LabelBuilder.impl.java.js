goog.module('org.pepstock.charba.client.labels.LabelBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let FontCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FontCallback$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let FontStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.FontStyle$impl');
let Label = goog.forwardDeclare('org.pepstock.charba.client.labels.Label$impl');
let LabelsContext = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsContext$impl');
let LabelsOptionsBuilder = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsOptionsBuilder$impl');
let RenderCallback = goog.forwardDeclare('org.pepstock.charba.client.labels.callbacks.RenderCallback$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.labels.enums.Position$impl');
let Render = goog.forwardDeclare('org.pepstock.charba.client.labels.enums.Render$impl');

class LabelBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {LabelsOptionsBuilder}*/
  this.f_builder__org_pepstock_charba_client_labels_LabelBuilder_;
  /**@type {Label}*/
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_;
 }
 /** @return {!LabelBuilder} */
 static $create__org_pepstock_charba_client_labels_LabelsOptionsBuilder__org_pepstock_charba_client_labels_Label(/** LabelsOptionsBuilder */ builder, /** Label */ label) {
  LabelBuilder.$clinit();
  let $instance = new LabelBuilder();
  $instance.$ctor__org_pepstock_charba_client_labels_LabelBuilder__org_pepstock_charba_client_labels_LabelsOptionsBuilder__org_pepstock_charba_client_labels_Label(builder, label);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_labels_LabelBuilder__org_pepstock_charba_client_labels_LabelsOptionsBuilder__org_pepstock_charba_client_labels_Label(/** LabelsOptionsBuilder */ builder, /** Label */ label) {
  this.$ctor__java_lang_Object__();
  this.f_builder__org_pepstock_charba_client_labels_LabelBuilder_ = builder;
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_ = label;
 }
 
 m_setOptionsBuilder__org_pepstock_charba_client_labels_LabelsOptionsBuilder_$pp_org_pepstock_charba_client_labels(/** LabelsOptionsBuilder */ builder) {
  this.f_builder__org_pepstock_charba_client_labels_LabelBuilder_ = builder;
 }
 /** @return {LabelsOptionsBuilder} */
 m_getOptionsBuilder__() {
  return this.f_builder__org_pepstock_charba_client_labels_LabelBuilder_;
 }
 /** @return {LabelBuilder} */
 m_setRender__org_pepstock_charba_client_labels_enums_Render(/** Render */ render) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_setRender__org_pepstock_charba_client_labels_enums_Render(render);
  return this;
 }
 /** @return {LabelBuilder} */
 m_setPrecision__int(/** number */ precision) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_setPrecision__int(precision);
  return this;
 }
 /** @return {LabelBuilder} */
 m_setShowZero__boolean(/** boolean */ showZero) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_setShowZero__boolean(showZero);
  return this;
 }
 /** @return {LabelBuilder} */
 m_setFontSize__int(/** number */ size) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_getFont__().m_setSize__int(size);
  return this;
 }
 /** @return {LabelBuilder} */
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_setColor__org_pepstock_charba_client_colors_IsColor(color);
  return this;
 }
 /** @return {LabelBuilder} */
 m_setColor__java_lang_String(/** ?string */ color) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_setColor__java_lang_String(color);
  return this;
 }
 /** @return {LabelBuilder} */
 m_setFontStyle__org_pepstock_charba_client_enums_FontStyle(/** FontStyle */ fontStyle) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_getFont__().m_setStyle__org_pepstock_charba_client_enums_FontStyle(fontStyle);
  return this;
 }
 /** @return {LabelBuilder} */
 m_setFontFamily__java_lang_String(/** ?string */ fontFamily) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_getFont__().m_setFamily__java_lang_String(fontFamily);
  return this;
 }
 /** @return {LabelBuilder} */
 m_setTextShadow__boolean(/** boolean */ textShadow) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_setTextShadow__boolean(textShadow);
  return this;
 }
 /** @return {LabelBuilder} */
 m_setShadowBlur__int(/** number */ shadowBlur) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_setShadowBlur__int(shadowBlur);
  return this;
 }
 /** @return {LabelBuilder} */
 m_setShadowOffsetX__int(/** number */ shadowOffsetX) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_setShadowOffsetX__int(shadowOffsetX);
  return this;
 }
 /** @return {LabelBuilder} */
 m_setShadowOffsetY__int(/** number */ shadowOffsetY) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_setShadowOffsetY__int(shadowOffsetY);
  return this;
 }
 /** @return {LabelBuilder} */
 m_setShadowColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ shadowColor) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_setShadowColor__org_pepstock_charba_client_colors_IsColor(shadowColor);
  return this;
 }
 /** @return {LabelBuilder} */
 m_setShadowColor__java_lang_String(/** ?string */ shadowColor) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_setShadowColor__java_lang_String(shadowColor);
  return this;
 }
 /** @return {LabelBuilder} */
 m_setArc__boolean(/** boolean */ arc) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_setArc__boolean(arc);
  return this;
 }
 /** @return {LabelBuilder} */
 m_setPosition__org_pepstock_charba_client_labels_enums_Position(/** Position */ position) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_setPosition__org_pepstock_charba_client_labels_enums_Position(position);
  return this;
 }
 /** @return {LabelBuilder} */
 m_setOverlap__boolean(/** boolean */ overlap) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_setOverlap__boolean(overlap);
  return this;
 }
 /** @return {LabelBuilder} */
 m_setShowActualPercentages__boolean(/** boolean */ showActualPercentages) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_setShowActualPercentages__boolean(showActualPercentages);
  return this;
 }
 /** @return {LabelBuilder} */
 m_setOutsidePadding__int(/** number */ outsidePadding) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_setOutsidePadding__int(outsidePadding);
  return this;
 }
 /** @return {LabelBuilder} */
 m_setTextMargin__int(/** number */ textMargin) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_setTextMargin__int(textMargin);
  return this;
 }
 /** @return {LabelBuilder} */
 m_setImages__arrayOf_org_pepstock_charba_client_dom_elements_Img(/** Array<HTMLImageElement> */ images) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_setImages__arrayOf_org_pepstock_charba_client_dom_elements_Img(images);
  return this;
 }
 /** @return {LabelBuilder} */
 m_setRender__org_pepstock_charba_client_labels_callbacks_RenderCallback(/** RenderCallback */ renderCallback) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_setRender__org_pepstock_charba_client_labels_callbacks_RenderCallback(renderCallback);
  return this;
 }
 /** @return {LabelBuilder} */
 m_setFont__org_pepstock_charba_client_callbacks_FontCallback(/** FontCallback<LabelsContext> */ fontColorCallback) {
  this.f_label__org_pepstock_charba_client_labels_LabelBuilder_.m_setFont__org_pepstock_charba_client_callbacks_FontCallback(fontColorCallback);
  return this;
 }
 
 static $clinit() {
  LabelBuilder.$clinit = () =>{};
  LabelBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LabelBuilder;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(LabelBuilder, "org.pepstock.charba.client.labels.LabelBuilder");

exports = LabelBuilder;

//# sourceMappingURL=LabelBuilder.js.map
