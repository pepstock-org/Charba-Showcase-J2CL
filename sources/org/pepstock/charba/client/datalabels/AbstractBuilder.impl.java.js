goog.module('org.pepstock.charba.client.datalabels.AbstractBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let FontCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FontCallback$impl');
let OffsetCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.OffsetCallback$impl');
let PaddingCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PaddingCallback$impl');
let RadiusCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.RadiusCallback$impl');
let RotationCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.RotationCallback$impl');
let TextAlignCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TextAlignCallback$impl');
let WidthCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.WidthCallback$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataLabelsOptionsBuilder = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsOptionsBuilder$impl');
let LabelItem = goog.forwardDeclare('org.pepstock.charba.client.datalabels.LabelItem$impl');
let AlignCallback = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.AlignCallback$impl');
let AnchorCallback = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.AnchorCallback$impl');
let ClampCallback = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.ClampCallback$impl');
let ClipCallback = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.ClipCallback$impl');
let DisplayCallback = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.DisplayCallback$impl');
let FormatterCallback = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.FormatterCallback$impl');
let OpacityCallback = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.OpacityCallback$impl');
let TextShadowBlurCallback = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.TextShadowBlurCallback$impl');
let Align = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Align$impl');
let Anchor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Anchor$impl');
let AbstractEventHandler = goog.forwardDeclare('org.pepstock.charba.client.datalabels.events.AbstractEventHandler$impl');
let ClickEventHandler = goog.forwardDeclare('org.pepstock.charba.client.datalabels.events.ClickEventHandler$impl');
let EnterEventHandler = goog.forwardDeclare('org.pepstock.charba.client.datalabels.events.EnterEventHandler$impl');
let LeaveEventHandler = goog.forwardDeclare('org.pepstock.charba.client.datalabels.events.LeaveEventHandler$impl');
let Display = goog.forwardDeclare('org.pepstock.charba.client.enums.Display$impl');
let FontStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.FontStyle$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');
let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');

/**
 * @template T
 */
class AbstractBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {T}*/
  this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_;
  /**@type {DataLabelsOptionsBuilder}*/
  this.f_builder__org_pepstock_charba_client_datalabels_AbstractBuilder_;
 }
 /** @template T @return {!AbstractBuilder<T>} */
 static $create__org_pepstock_charba_client_datalabels_LabelItem(/** T */ label) {
  AbstractBuilder.$clinit();
  let $instance = new AbstractBuilder();
  $instance.$ctor__org_pepstock_charba_client_datalabels_AbstractBuilder__org_pepstock_charba_client_datalabels_LabelItem(label);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_datalabels_AbstractBuilder__org_pepstock_charba_client_datalabels_LabelItem(/** T */ label) {
  this.$ctor__java_lang_Object__();
  this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_ = label;
 }
 /** @return {T} */
 m_getLabel___$pp_org_pepstock_charba_client_datalabels() {
  return this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_;
 }
 
 m_setOptionsBuilder__org_pepstock_charba_client_datalabels_DataLabelsOptionsBuilder_$pp_org_pepstock_charba_client_datalabels(/** DataLabelsOptionsBuilder */ builder) {
  this.f_builder__org_pepstock_charba_client_datalabels_AbstractBuilder_ = builder;
 }
 /** @return {DataLabelsOptionsBuilder} */
 m_getOptionsBuilder__() {
  return this.f_builder__org_pepstock_charba_client_datalabels_AbstractBuilder_;
 }
 /** @return {AbstractBuilder<T>} */
 m_setListenersHandler__org_pepstock_charba_client_datalabels_events_AbstractEventHandler(/** AbstractEventHandler */ handler) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setListenersHandler__org_pepstock_charba_client_datalabels_events_AbstractEventHandler(handler);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setAlign__org_pepstock_charba_client_datalabels_enums_Align(/** Align */ align) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setAlign__org_pepstock_charba_client_datalabels_enums_Align(align);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setAnchor__org_pepstock_charba_client_datalabels_enums_Anchor(/** Anchor */ anchor) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setAnchor__org_pepstock_charba_client_datalabels_enums_Anchor(anchor);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(color);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setBackgroundColor__java_lang_String(/** ?string */ color) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setBackgroundColor__java_lang_String(color);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setBorderColor__org_pepstock_charba_client_colors_IsColor(color);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setBorderColor__java_lang_String(/** ?string */ color) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setBorderColor__java_lang_String(color);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setBorderRadius__double(/** number */ radius) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setBorderRadius__double(radius);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setBorderWidth__int(/** number */ width) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setBorderWidth__int(width);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setClamp__boolean(/** boolean */ clamp) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setClamp__boolean(clamp);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setClip__boolean(/** boolean */ clip) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setClip__boolean(clip);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setColor__org_pepstock_charba_client_colors_IsColor(color);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setColor__java_lang_String(/** ?string */ color) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setColor__java_lang_String(color);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setDisplay__boolean(/** boolean */ display) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setDisplay__boolean(display);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setDisplay__org_pepstock_charba_client_enums_Display(/** Display */ display) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setDisplay__org_pepstock_charba_client_enums_Display(display);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setOffset__int(/** number */ offset) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setOffset__int(offset);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setOpacity__double(/** number */ opacity) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setOpacity__double(opacity);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setRotation__double(/** number */ rotation) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setRotation__double(rotation);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setTextAlign__org_pepstock_charba_client_enums_TextAlign(/** TextAlign */ textAlign) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setTextAlign__org_pepstock_charba_client_enums_TextAlign(textAlign);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setTextStrokeColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setTextStrokeColor__org_pepstock_charba_client_colors_IsColor(color);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setTextStrokeColor__java_lang_String(/** ?string */ color) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setTextStrokeColor__java_lang_String(color);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setTextStrokeWidth__int(/** number */ textStrokeWidth) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setTextStrokeWidth__int(textStrokeWidth);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setTextShadowBlur__double(/** number */ textShadowBlur) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setTextShadowBlur__double(textShadowBlur);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setTextShadowColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setTextShadowColor__org_pepstock_charba_client_colors_IsColor(color);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setTextShadowColor__java_lang_String(/** ?string */ color) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setTextShadowColor__java_lang_String(color);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<DataLabelsContext> */ backgroundColorCallback) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(backgroundColorCallback);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<DataLabelsContext> */ borderColorCallback) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(borderColorCallback);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<DataLabelsContext> */ colorCallback) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setColor__org_pepstock_charba_client_callbacks_ColorCallback(colorCallback);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setFormatter__org_pepstock_charba_client_datalabels_callbacks_FormatterCallback(/** FormatterCallback */ formatterCallback) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setFormatter__org_pepstock_charba_client_datalabels_callbacks_FormatterCallback(formatterCallback);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setAlign__org_pepstock_charba_client_datalabels_callbacks_AlignCallback(/** AlignCallback */ alignCallback) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setAlign__org_pepstock_charba_client_datalabels_callbacks_AlignCallback(alignCallback);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setAnchor__org_pepstock_charba_client_datalabels_callbacks_AnchorCallback(/** AnchorCallback */ anchorCallback) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setAnchor__org_pepstock_charba_client_datalabels_callbacks_AnchorCallback(anchorCallback);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setBorderRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/** RadiusCallback<DataLabelsContext> */ borderRadiusCallback) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setBorderRadius__org_pepstock_charba_client_callbacks_RadiusCallback(borderRadiusCallback);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/** WidthCallback<DataLabelsContext> */ borderWidthCallback) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(borderWidthCallback);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setClamp__org_pepstock_charba_client_datalabels_callbacks_ClampCallback(/** ClampCallback */ clampCallback) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setClamp__org_pepstock_charba_client_datalabels_callbacks_ClampCallback(clampCallback);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setClip__org_pepstock_charba_client_datalabels_callbacks_ClipCallback(/** ClipCallback */ clipCallback) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setClip__org_pepstock_charba_client_datalabels_callbacks_ClipCallback(clipCallback);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setDisplay__org_pepstock_charba_client_datalabels_callbacks_DisplayCallback(/** DisplayCallback */ displayCallback) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setDisplay__org_pepstock_charba_client_datalabels_callbacks_DisplayCallback(displayCallback);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setOffset__org_pepstock_charba_client_callbacks_OffsetCallback(/** OffsetCallback<DataLabelsContext> */ offsetCallback) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setOffset__org_pepstock_charba_client_callbacks_OffsetCallback(offsetCallback);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setOpacity__org_pepstock_charba_client_datalabels_callbacks_OpacityCallback(/** OpacityCallback */ opacityCallback) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setOpacity__org_pepstock_charba_client_datalabels_callbacks_OpacityCallback(opacityCallback);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setRotation__org_pepstock_charba_client_callbacks_RotationCallback(/** RotationCallback<DataLabelsContext> */ rotationCallback) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setRotation__org_pepstock_charba_client_callbacks_RotationCallback(rotationCallback);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setTextAlign__org_pepstock_charba_client_callbacks_TextAlignCallback(/** TextAlignCallback<DataLabelsContext> */ textAlignCallback) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setTextAlign__org_pepstock_charba_client_callbacks_TextAlignCallback(textAlignCallback);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setTextStrokeColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<DataLabelsContext> */ textStrokeColorCallback) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setTextStrokeColor__org_pepstock_charba_client_callbacks_ColorCallback(textStrokeColorCallback);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setTextStrokeWidth__org_pepstock_charba_client_callbacks_WidthCallback(/** WidthCallback<DataLabelsContext> */ textStrokeWidthCallback) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setTextStrokeWidth__org_pepstock_charba_client_callbacks_WidthCallback(textStrokeWidthCallback);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setTextShadowBlur__org_pepstock_charba_client_datalabels_callbacks_TextShadowBlurCallback(/** TextShadowBlurCallback */ textShadowBlurCallback) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setTextShadowBlur__org_pepstock_charba_client_datalabels_callbacks_TextShadowBlurCallback(textShadowBlurCallback);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setTextShadowColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<DataLabelsContext> */ textShadowColorCallback) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setTextShadowColor__org_pepstock_charba_client_callbacks_ColorCallback(textShadowColorCallback);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setFont__org_pepstock_charba_client_callbacks_FontCallback(/** FontCallback<DataLabelsContext> */ fontCallback) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setFont__org_pepstock_charba_client_callbacks_FontCallback(fontCallback);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setPadding__org_pepstock_charba_client_callbacks_PaddingCallback(/** PaddingCallback<DataLabelsContext> */ paddingCallback) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_setPadding__org_pepstock_charba_client_callbacks_PaddingCallback(paddingCallback);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setFontSize__int(/** number */ fontSize) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_getFont__().m_setSize__int(fontSize);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setFontStyle__org_pepstock_charba_client_enums_FontStyle(/** FontStyle */ fontStyle) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_getFont__().m_setStyle__org_pepstock_charba_client_enums_FontStyle(fontStyle);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setFontFamily__java_lang_String(/** ?string */ fontFamily) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_getFont__().m_setFamily__java_lang_String(fontFamily);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setFontWeight__org_pepstock_charba_client_enums_Weight(/** Weight */ weight) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_getFont__().m_setWeight__org_pepstock_charba_client_enums_Weight(weight);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setFontLineHeight__double(/** number */ lineHeight) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_getFont__().m_setLineHeight__double(lineHeight);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setFontLineHeight__java_lang_String(/** ?string */ lineHeight) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_getFont__().m_setLineHeight__java_lang_String(lineHeight);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setPadding__int(/** number */ padding) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_getPadding__().m_set__int(padding);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setPaddingLeft__int(/** number */ padding) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_getPadding__().m_setLeft__int(padding);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setPaddingRight__int(/** number */ padding) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_getPadding__().m_setRight__int(padding);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setPaddingTop__int(/** number */ padding) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_getPadding__().m_setTop__int(padding);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setPaddingBottom__int(/** number */ padding) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_getPadding__().m_setBottom__int(padding);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setClickEventHandler__org_pepstock_charba_client_datalabels_events_ClickEventHandler(/** ClickEventHandler */ clickEventHandler) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_getListeners__().m_setClickEventHandler__org_pepstock_charba_client_datalabels_events_ClickEventHandler(clickEventHandler);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setEnterEventHandler__org_pepstock_charba_client_datalabels_events_EnterEventHandler(/** EnterEventHandler */ enterEventHandler) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_getListeners__().m_setEnterEventHandler__org_pepstock_charba_client_datalabels_events_EnterEventHandler(enterEventHandler);
  return this;
 }
 /** @return {AbstractBuilder<T>} */
 m_setLeaveEventHandler__org_pepstock_charba_client_datalabels_events_LeaveEventHandler(/** LeaveEventHandler */ leaveEventHandler) {
  /**@type {LabelItem}*/ (this.f_label__org_pepstock_charba_client_datalabels_AbstractBuilder_).m_getListeners__().m_setLeaveEventHandler__org_pepstock_charba_client_datalabels_events_LeaveEventHandler(leaveEventHandler);
  return this;
 }
 
 static $clinit() {
  AbstractBuilder.$clinit = () =>{};
  AbstractBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractBuilder;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(AbstractBuilder, "org.pepstock.charba.client.datalabels.AbstractBuilder");

exports = AbstractBuilder;

//# sourceMappingURL=AbstractBuilder.js.map
