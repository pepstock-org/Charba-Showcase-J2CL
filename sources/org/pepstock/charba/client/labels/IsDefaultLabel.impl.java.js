goog.module('org.pepstock.charba.client.labels.IsDefaultLabel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let FontCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FontCallback$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let Label = goog.forwardDeclare('org.pepstock.charba.client.labels.Label$impl');
let LabelsContext = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsContext$impl');
let RenderCallback = goog.forwardDeclare('org.pepstock.charba.client.labels.callbacks.RenderCallback$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.labels.enums.Position$impl');
let Render = goog.forwardDeclare('org.pepstock.charba.client.labels.enums.Render$impl');

/**
 * @interface
 */
class IsDefaultLabel {
 /** @abstract @return {Render} */
 m_getRender__() {}
 /** @abstract @return {number} */
 m_getPrecision__() {}
 /** @abstract @return {boolean} */
 m_isShowZero__() {}
 /** @abstract @return {?string} */
 m_getColorAsString__() {}
 /** @abstract @return {IsDefaultFont} */
 m_getFont__() {}
 /** @abstract @return {boolean} */
 m_isTextShadow__() {}
 /** @abstract @return {number} */
 m_getShadowBlur__() {}
 /** @abstract @return {number} */
 m_getShadowOffsetX__() {}
 /** @abstract @return {number} */
 m_getShadowOffsetY__() {}
 /** @abstract @return {?string} */
 m_getShadowColorAsString__() {}
 /** @abstract @return {boolean} */
 m_isArc__() {}
 /** @abstract @return {Position} */
 m_getPosition__() {}
 /** @abstract @return {boolean} */
 m_isOverlap__() {}
 /** @abstract @return {boolean} */
 m_isShowActualPercentages__() {}
 /** @abstract @return {number} */
 m_getOutsidePadding__() {}
 /** @abstract @return {number} */
 m_getTextMargin__() {}
 /** @abstract @return {RenderCallback} */
 m_getRenderCallback__() {}
 /** @abstract @return {FontCallback<LabelsContext>} */
 m_getFontCallback__() {}
 /** @abstract @return {ColorCallback<LabelsContext>} */
 m_getColorCallback__() {}
 /** @return {Render} */
 static m_getRender__$default__org_pepstock_charba_client_labels_IsDefaultLabel(/** !IsDefaultLabel */ $thisArg) {
  IsDefaultLabel.$clinit();
  return Label.f_DEFAULT_RENDER__org_pepstock_charba_client_labels_Label;
 }
 /** @return {number} */
 static m_getPrecision__$default__org_pepstock_charba_client_labels_IsDefaultLabel(/** !IsDefaultLabel */ $thisArg) {
  IsDefaultLabel.$clinit();
  return Label.f_DEFAULT_PRECISION__org_pepstock_charba_client_labels_Label;
 }
 /** @return {boolean} */
 static m_isShowZero__$default__org_pepstock_charba_client_labels_IsDefaultLabel(/** !IsDefaultLabel */ $thisArg) {
  IsDefaultLabel.$clinit();
  return Label.f_DEFAULT_SHOW_ZERO__org_pepstock_charba_client_labels_Label;
 }
 /** @return {?string} */
 static m_getColorAsString__$default__org_pepstock_charba_client_labels_IsDefaultLabel(/** !IsDefaultLabel */ $thisArg) {
  IsDefaultLabel.$clinit();
  return Defaults.m_get__().m_getGlobal__().m_getColorAsString__();
 }
 /** @return {IsDefaultFont} */
 static m_getFont__$default__org_pepstock_charba_client_labels_IsDefaultLabel(/** !IsDefaultLabel */ $thisArg) {
  IsDefaultLabel.$clinit();
  return Defaults.m_get__().m_getGlobal__().m_getFont__();
 }
 /** @return {boolean} */
 static m_isTextShadow__$default__org_pepstock_charba_client_labels_IsDefaultLabel(/** !IsDefaultLabel */ $thisArg) {
  IsDefaultLabel.$clinit();
  return Label.f_DEFAULT_TEXT_SHADOW__org_pepstock_charba_client_labels_Label;
 }
 /** @return {number} */
 static m_getShadowBlur__$default__org_pepstock_charba_client_labels_IsDefaultLabel(/** !IsDefaultLabel */ $thisArg) {
  IsDefaultLabel.$clinit();
  return Label.f_DEFAULT_SHADOW_BLUR__org_pepstock_charba_client_labels_Label;
 }
 /** @return {number} */
 static m_getShadowOffsetX__$default__org_pepstock_charba_client_labels_IsDefaultLabel(/** !IsDefaultLabel */ $thisArg) {
  IsDefaultLabel.$clinit();
  return Label.f_DEFAULT_SHADOW_OFFSET_X__org_pepstock_charba_client_labels_Label;
 }
 /** @return {number} */
 static m_getShadowOffsetY__$default__org_pepstock_charba_client_labels_IsDefaultLabel(/** !IsDefaultLabel */ $thisArg) {
  IsDefaultLabel.$clinit();
  return Label.f_DEFAULT_SHADOW_OFFSET_Y__org_pepstock_charba_client_labels_Label;
 }
 /** @return {?string} */
 static m_getShadowColorAsString__$default__org_pepstock_charba_client_labels_IsDefaultLabel(/** !IsDefaultLabel */ $thisArg) {
  IsDefaultLabel.$clinit();
  return Label.f_DEFAULT_SHADOW_COLOR__org_pepstock_charba_client_labels_Label;
 }
 /** @return {boolean} */
 static m_isArc__$default__org_pepstock_charba_client_labels_IsDefaultLabel(/** !IsDefaultLabel */ $thisArg) {
  IsDefaultLabel.$clinit();
  return Label.f_DEFAULT_ARC__org_pepstock_charba_client_labels_Label;
 }
 /** @return {Position} */
 static m_getPosition__$default__org_pepstock_charba_client_labels_IsDefaultLabel(/** !IsDefaultLabel */ $thisArg) {
  IsDefaultLabel.$clinit();
  return Label.f_DEFAULT_POSITION__org_pepstock_charba_client_labels_Label;
 }
 /** @return {boolean} */
 static m_isOverlap__$default__org_pepstock_charba_client_labels_IsDefaultLabel(/** !IsDefaultLabel */ $thisArg) {
  IsDefaultLabel.$clinit();
  return Label.f_DEFAULT_OVERLAP__org_pepstock_charba_client_labels_Label;
 }
 /** @return {boolean} */
 static m_isShowActualPercentages__$default__org_pepstock_charba_client_labels_IsDefaultLabel(/** !IsDefaultLabel */ $thisArg) {
  IsDefaultLabel.$clinit();
  return Label.f_DEFAULT_SHOW_ACTUAL_PERCENTAGES__org_pepstock_charba_client_labels_Label;
 }
 /** @return {number} */
 static m_getOutsidePadding__$default__org_pepstock_charba_client_labels_IsDefaultLabel(/** !IsDefaultLabel */ $thisArg) {
  IsDefaultLabel.$clinit();
  return Label.f_DEFAULT_OUTSIDE_PADDING__org_pepstock_charba_client_labels_Label;
 }
 /** @return {number} */
 static m_getTextMargin__$default__org_pepstock_charba_client_labels_IsDefaultLabel(/** !IsDefaultLabel */ $thisArg) {
  IsDefaultLabel.$clinit();
  return Label.f_DEFAULT_TEXT_MARGIN__org_pepstock_charba_client_labels_Label;
 }
 /** @return {RenderCallback} */
 static m_getRenderCallback__$default__org_pepstock_charba_client_labels_IsDefaultLabel(/** !IsDefaultLabel */ $thisArg) {
  IsDefaultLabel.$clinit();
  return null;
 }
 /** @return {FontCallback<LabelsContext>} */
 static m_getFontCallback__$default__org_pepstock_charba_client_labels_IsDefaultLabel(/** !IsDefaultLabel */ $thisArg) {
  IsDefaultLabel.$clinit();
  return null;
 }
 /** @return {ColorCallback<LabelsContext>} */
 static m_getColorCallback__$default__org_pepstock_charba_client_labels_IsDefaultLabel(/** !IsDefaultLabel */ $thisArg) {
  IsDefaultLabel.$clinit();
  return null;
 }
 
 static $clinit() {
  IsDefaultLabel.$clinit = () =>{};
  IsDefaultLabel.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_labels_IsDefaultLabel = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_labels_IsDefaultLabel;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Label = goog.module.get('org.pepstock.charba.client.labels.Label$impl');
 }
}
IsDefaultLabel.$markImplementor(/**@type {Function}*/ (IsDefaultLabel));
$Util.$setClassMetadataForInterface(IsDefaultLabel, "org.pepstock.charba.client.labels.IsDefaultLabel");

exports = IsDefaultLabel;

//# sourceMappingURL=IsDefaultLabel.js.map
