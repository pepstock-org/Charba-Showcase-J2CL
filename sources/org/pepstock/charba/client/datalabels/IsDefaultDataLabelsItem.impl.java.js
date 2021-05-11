goog.module('org.pepstock.charba.client.datalabels.IsDefaultDataLabelsItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let FontCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FontCallback$impl');
let OffsetCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.OffsetCallback$impl');
let PaddingCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PaddingCallback$impl');
let RadiusCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.RadiusCallback$impl');
let RotationCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.RotationCallback$impl');
let TextAlignCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TextAlignCallback$impl');
let WidthCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.WidthCallback$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataLabelsOptions = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
let IsDefaultListeners = goog.forwardDeclare('org.pepstock.charba.client.datalabels.IsDefaultListeners$impl');
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
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let Display = goog.forwardDeclare('org.pepstock.charba.client.enums.Display$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');

/**
 * @interface
 */
class IsDefaultDataLabelsItem {
 /** @abstract @return {IsDefaultFont} */
 m_getFont__() {}
 /** @abstract @return {IsDefaultPadding} */
 m_getPadding__() {}
 /** @abstract @return {IsDefaultListeners} */
 m_getListeners__() {}
 /** @abstract @return {Align} */
 m_getAlign__() {}
 /** @abstract @return {Anchor} */
 m_getAnchor__() {}
 /** @abstract @return {?string} */
 m_getBackgroundColorAsString__() {}
 /** @abstract @return {?string} */
 m_getBorderColorAsString__() {}
 /** @abstract @return {number} */
 m_getBorderRadius__() {}
 /** @abstract @return {number} */
 m_getBorderWidth__() {}
 /** @abstract @return {boolean} */
 m_isClamp__() {}
 /** @abstract @return {boolean} */
 m_isClip__() {}
 /** @abstract @return {?string} */
 m_getColorAsString__() {}
 /** @abstract @return {Display} */
 m_getDisplay__() {}
 /** @abstract @return {number} */
 m_getOffset__() {}
 /** @abstract @return {number} */
 m_getOpacity__() {}
 /** @abstract @return {number} */
 m_getRotation__() {}
 /** @abstract @return {TextAlign} */
 m_getTextAlign__() {}
 /** @abstract @return {?string} */
 m_getTextStrokeColorAsString__() {}
 /** @abstract @return {number} */
 m_getTextStrokeWidth__() {}
 /** @abstract @return {number} */
 m_getTextShadowBlur__() {}
 /** @abstract @return {?string} */
 m_getTextShadowColorAsString__() {}
 /** @abstract @return {ColorCallback<DataLabelsContext>} */
 m_getBackgroundColorCallback__() {}
 /** @abstract @return {ColorCallback<DataLabelsContext>} */
 m_getBorderColorCallback__() {}
 /** @abstract @return {ColorCallback<DataLabelsContext>} */
 m_getColorCallback__() {}
 /** @abstract @return {FormatterCallback} */
 m_getFormatterCallback__() {}
 /** @abstract @return {AlignCallback} */
 m_getAlignCallback__() {}
 /** @abstract @return {AnchorCallback} */
 m_getAnchorCallback__() {}
 /** @abstract @return {RadiusCallback<DataLabelsContext>} */
 m_getBorderRadiusCallback__() {}
 /** @abstract @return {WidthCallback<DataLabelsContext>} */
 m_getBorderWidthCallback__() {}
 /** @abstract @return {ClampCallback} */
 m_getClampCallback__() {}
 /** @abstract @return {ClipCallback} */
 m_getClipCallback__() {}
 /** @abstract @return {DisplayCallback} */
 m_getDisplayCallback__() {}
 /** @abstract @return {OffsetCallback<DataLabelsContext>} */
 m_getOffsetCallback__() {}
 /** @abstract @return {OpacityCallback} */
 m_getOpacityCallback__() {}
 /** @abstract @return {RotationCallback<DataLabelsContext>} */
 m_getRotationCallback__() {}
 /** @abstract @return {TextAlignCallback<DataLabelsContext>} */
 m_getTextAlignCallback__() {}
 /** @abstract @return {ColorCallback<DataLabelsContext>} */
 m_getTextStrokeColorCallback__() {}
 /** @abstract @return {WidthCallback<DataLabelsContext>} */
 m_getTextStrokeWidthCallback__() {}
 /** @abstract @return {TextShadowBlurCallback} */
 m_getTextShadowBlurCallback__() {}
 /** @abstract @return {ColorCallback<DataLabelsContext>} */
 m_getTextShadowColorCallback__() {}
 /** @abstract @return {FontCallback<DataLabelsContext>} */
 m_getFontCallback__() {}
 /** @abstract @return {PaddingCallback<DataLabelsContext>} */
 m_getPaddingCallback__() {}
 /** @return {Align} */
 static m_getAlign__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return DataLabelsOptions.f_DEFAULT_ALIGN__org_pepstock_charba_client_datalabels_DataLabelsOptions;
 }
 /** @return {Anchor} */
 static m_getAnchor__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return DataLabelsOptions.f_DEFAULT_ANCHOR__org_pepstock_charba_client_datalabels_DataLabelsOptions;
 }
 /** @return {?string} */
 static m_getBackgroundColorAsString__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return DataLabelsOptions.f_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_datalabels_DataLabelsOptions;
 }
 /** @return {?string} */
 static m_getBorderColorAsString__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return DataLabelsOptions.f_DEFAULT_BORDER_COLOR__org_pepstock_charba_client_datalabels_DataLabelsOptions;
 }
 /** @return {number} */
 static m_getBorderRadius__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return DataLabelsOptions.f_DEFAULT_BORDER_RADIUS__org_pepstock_charba_client_datalabels_DataLabelsOptions;
 }
 /** @return {number} */
 static m_getBorderWidth__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return DataLabelsOptions.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_datalabels_DataLabelsOptions;
 }
 /** @return {boolean} */
 static m_isClamp__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return DataLabelsOptions.f_DEFAULT_CLAMP__org_pepstock_charba_client_datalabels_DataLabelsOptions;
 }
 /** @return {boolean} */
 static m_isClip__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return DataLabelsOptions.f_DEFAULT_CLIP__org_pepstock_charba_client_datalabels_DataLabelsOptions;
 }
 /** @return {?string} */
 static m_getColorAsString__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return Defaults.m_get__().m_getGlobal__().m_getColorAsString__();
 }
 /** @return {Display} */
 static m_getDisplay__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return DataLabelsOptions.f_DEFAULT_DISPLAY__org_pepstock_charba_client_datalabels_DataLabelsOptions;
 }
 /** @return {number} */
 static m_getOffset__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return DataLabelsOptions.f_DEFAULT_OFFSET__org_pepstock_charba_client_datalabels_DataLabelsOptions;
 }
 /** @return {number} */
 static m_getOpacity__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return DataLabelsOptions.f_DEFAULT_OPACITY__org_pepstock_charba_client_datalabels_DataLabelsOptions;
 }
 /** @return {number} */
 static m_getRotation__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return DataLabelsOptions.f_DEFAULT_ROTATION__org_pepstock_charba_client_datalabels_DataLabelsOptions;
 }
 /** @return {TextAlign} */
 static m_getTextAlign__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return DataLabelsOptions.f_DEFAULT_TEXT_ALIGN__org_pepstock_charba_client_datalabels_DataLabelsOptions;
 }
 /** @return {?string} */
 static m_getTextStrokeColorAsString__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return $thisArg.m_getColorAsString__();
 }
 /** @return {number} */
 static m_getTextStrokeWidth__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return DataLabelsOptions.f_DEFAULT_TEXT_STROKE_WIDTH__org_pepstock_charba_client_datalabels_DataLabelsOptions;
 }
 /** @return {number} */
 static m_getTextShadowBlur__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return DataLabelsOptions.f_DEFAULT_TEXT_SHADOW_BLUR__org_pepstock_charba_client_datalabels_DataLabelsOptions;
 }
 /** @return {?string} */
 static m_getTextShadowColorAsString__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return $thisArg.m_getColorAsString__();
 }
 /** @return {ColorCallback<DataLabelsContext>} */
 static m_getBackgroundColorCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return null;
 }
 /** @return {ColorCallback<DataLabelsContext>} */
 static m_getBorderColorCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return null;
 }
 /** @return {ColorCallback<DataLabelsContext>} */
 static m_getColorCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return null;
 }
 /** @return {FormatterCallback} */
 static m_getFormatterCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return null;
 }
 /** @return {AlignCallback} */
 static m_getAlignCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return null;
 }
 /** @return {AnchorCallback} */
 static m_getAnchorCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return null;
 }
 /** @return {RadiusCallback<DataLabelsContext>} */
 static m_getBorderRadiusCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return null;
 }
 /** @return {WidthCallback<DataLabelsContext>} */
 static m_getBorderWidthCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return null;
 }
 /** @return {ClampCallback} */
 static m_getClampCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return null;
 }
 /** @return {ClipCallback} */
 static m_getClipCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return null;
 }
 /** @return {DisplayCallback} */
 static m_getDisplayCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return null;
 }
 /** @return {OffsetCallback<DataLabelsContext>} */
 static m_getOffsetCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return null;
 }
 /** @return {OpacityCallback} */
 static m_getOpacityCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return null;
 }
 /** @return {RotationCallback<DataLabelsContext>} */
 static m_getRotationCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return null;
 }
 /** @return {TextAlignCallback<DataLabelsContext>} */
 static m_getTextAlignCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return null;
 }
 /** @return {ColorCallback<DataLabelsContext>} */
 static m_getTextStrokeColorCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return null;
 }
 /** @return {WidthCallback<DataLabelsContext>} */
 static m_getTextStrokeWidthCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return null;
 }
 /** @return {TextShadowBlurCallback} */
 static m_getTextShadowBlurCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return null;
 }
 /** @return {ColorCallback<DataLabelsContext>} */
 static m_getTextShadowColorCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return null;
 }
 /** @return {FontCallback<DataLabelsContext>} */
 static m_getFontCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return null;
 }
 /** @return {PaddingCallback<DataLabelsContext>} */
 static m_getPaddingCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(/** !IsDefaultDataLabelsItem */ $thisArg) {
  IsDefaultDataLabelsItem.$clinit();
  return null;
 }
 
 static $clinit() {
  IsDefaultDataLabelsItem.$clinit = () =>{};
  IsDefaultDataLabelsItem.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  DataLabelsOptions = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
 }
}
IsDefaultDataLabelsItem.$markImplementor(/**@type {Function}*/ (IsDefaultDataLabelsItem));
$Util.$setClassMetadataForInterface(IsDefaultDataLabelsItem, "org.pepstock.charba.client.datalabels.IsDefaultDataLabelsItem");

exports = IsDefaultDataLabelsItem;

//# sourceMappingURL=IsDefaultDataLabelsItem.js.map
