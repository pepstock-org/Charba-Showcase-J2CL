goog.module('org.pepstock.charba.client.annotation.IsDefaultsLineLabel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultsBackgroundColorHandler = goog.require('org.pepstock.charba.client.annotation.IsDefaultsBackgroundColorHandler$impl');

let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let AnnotationOptions = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationOptions$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsDefaultsLineLabel.$LambdaAdaptor$impl');
let LineLabel = goog.forwardDeclare('org.pepstock.charba.client.annotation.LineLabel$impl');
let AdjustSizeCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.AdjustSizeCallback$impl');
let ContentCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.ContentCallback$impl');
let ImageSizeCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.ImageSizeCallback$impl');
let LabelPositionCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.LabelPositionCallback$impl');
let PaddingSizeCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.PaddingSizeCallback$impl');
let DrawTime = goog.forwardDeclare('org.pepstock.charba.client.annotation.enums.DrawTime$impl');
let LabelPosition = goog.forwardDeclare('org.pepstock.charba.client.annotation.enums.LabelPosition$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let CornerRadiusCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CornerRadiusCallback$impl');
let DisplayCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DisplayCallback$impl');
let FontCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FontCallback$impl');
let RotationCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.RotationCallback$impl');
let TextAlignCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TextAlignCallback$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

/**
 * @interface
 * @extends {IsDefaultsBackgroundColorHandler}
 */
class IsDefaultsLineLabel {
 /** @abstract @return {IsDefaultFont} */
 m_getFont__() {}
 /** @abstract @return {boolean} */
 m_isDisplay__() {}
 /** @abstract @return {DrawTime} */
 m_getDrawTime__() {}
 /** @abstract @return {?string} */
 m_getColorAsString__() {}
 /** @abstract @return {number} */
 m_getXPadding__() {}
 /** @abstract @return {number} */
 m_getYPadding__() {}
 /** @abstract @return {number} */
 m_getCornerRadius__() {}
 /** @abstract @return {LabelPosition} */
 m_getPosition__() {}
 /** @abstract @return {number} */
 m_getXAdjust__() {}
 /** @abstract @return {number} */
 m_getYAdjust__() {}
 /** @abstract @return {number} */
 m_getRotation__() {}
 /** @abstract @return {TextAlign} */
 m_getTextAlign__() {}
 /** @abstract @return {boolean} */
 m_isAutoRotation__() {}
 /** @abstract @return {number} */
 m_getImageHeight__() {}
 /** @abstract @return {?string} */
 m_getImageHeightAsPercentage__() {}
 /** @abstract @return {number} */
 m_getImageWidth__() {}
 /** @abstract @return {?string} */
 m_getImageWidthAsPercentage__() {}
 /** @abstract @return {ColorCallback<AnnotationContext>} */
 m_getColorCallback__() {}
 /** @abstract @return {CornerRadiusCallback<AnnotationContext>} */
 m_getCornerRadiusCallback__() {}
 /** @abstract @return {ContentCallback} */
 m_getContentCallback__() {}
 /** @abstract @return {DisplayCallback<AnnotationContext>} */
 m_getDisplayCallback__() {}
 /** @abstract @return {RotationCallback<AnnotationContext>} */
 m_getRotationCallback__() {}
 /** @abstract @return {ImageSizeCallback} */
 m_getImageHeightCallback__() {}
 /** @abstract @return {ImageSizeCallback} */
 m_getImageWidthCallback__() {}
 /** @abstract @return {LabelPositionCallback} */
 m_getPositionCallback__() {}
 /** @abstract @return {PaddingSizeCallback} */
 m_getXPaddingCallback__() {}
 /** @abstract @return {PaddingSizeCallback} */
 m_getYPaddingCallback__() {}
 /** @abstract @return {AdjustSizeCallback} */
 m_getXAdjustCallback__() {}
 /** @abstract @return {AdjustSizeCallback} */
 m_getYAdjustCallback__() {}
 /** @abstract @return {TextAlignCallback<AnnotationContext>} */
 m_getTextAlignCallback__() {}
 /** @abstract @return {FontCallback<AnnotationContext>} */
 m_getFontCallback__() {}
 /** @return {IsDefaultsLineLabel} */
 static $adapt(/** ?function():IsDefaultFont */ fn) {
  IsDefaultsLineLabel.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {boolean} */
 static m_isDisplay__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return LineLabel.f_DEFAULT_DISPLAY__org_pepstock_charba_client_annotation_LineLabel;
 }
 /** @return {DrawTime} */
 static m_getDrawTime__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return AnnotationOptions.f_DEFAULT_DRAW_TIME__org_pepstock_charba_client_annotation_AnnotationOptions;
 }
 /** @return {?string} */
 static m_getColorAsString__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return LineLabel.f_DEFAULT_FONT_COLOR_AS_STRING__org_pepstock_charba_client_annotation_LineLabel;
 }
 /** @return {number} */
 static m_getXPadding__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return LineLabel.f_DEFAULT_X_PADDING__org_pepstock_charba_client_annotation_LineLabel;
 }
 /** @return {number} */
 static m_getYPadding__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return LineLabel.f_DEFAULT_Y_PADDING__org_pepstock_charba_client_annotation_LineLabel;
 }
 /** @return {number} */
 static m_getCornerRadius__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return LineLabel.f_DEFAULT_CORNER_RADIUS__org_pepstock_charba_client_annotation_LineLabel;
 }
 /** @return {LabelPosition} */
 static m_getPosition__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return LineLabel.f_DEFAULT_POSITION__org_pepstock_charba_client_annotation_LineLabel;
 }
 /** @return {number} */
 static m_getXAdjust__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return LineLabel.f_DEFAULT_X_ADJUST__org_pepstock_charba_client_annotation_LineLabel;
 }
 /** @return {number} */
 static m_getYAdjust__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return LineLabel.f_DEFAULT_Y_ADJUST__org_pepstock_charba_client_annotation_LineLabel;
 }
 /** @return {number} */
 static m_getRotation__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return LineLabel.f_DEFAULT_ROTATION__org_pepstock_charba_client_annotation_LineLabel;
 }
 /** @return {TextAlign} */
 static m_getTextAlign__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return LineLabel.f_DEFAULT_TEXT_ALIGN__org_pepstock_charba_client_annotation_LineLabel;
 }
 /** @return {boolean} */
 static m_isAutoRotation__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return false;
 }
 /** @return {number} */
 static m_getImageHeight__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {?string} */
 static m_getImageHeightAsPercentage__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return null;
 }
 /** @return {number} */
 static m_getImageWidth__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {?string} */
 static m_getImageWidthAsPercentage__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return null;
 }
 /** @return {ColorCallback<AnnotationContext>} */
 static m_getColorCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return null;
 }
 /** @return {CornerRadiusCallback<AnnotationContext>} */
 static m_getCornerRadiusCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return null;
 }
 /** @return {ContentCallback} */
 static m_getContentCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return null;
 }
 /** @return {DisplayCallback<AnnotationContext>} */
 static m_getDisplayCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return null;
 }
 /** @return {RotationCallback<AnnotationContext>} */
 static m_getRotationCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return null;
 }
 /** @return {ImageSizeCallback} */
 static m_getImageHeightCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return null;
 }
 /** @return {ImageSizeCallback} */
 static m_getImageWidthCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return null;
 }
 /** @return {LabelPositionCallback} */
 static m_getPositionCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return null;
 }
 /** @return {PaddingSizeCallback} */
 static m_getXPaddingCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return null;
 }
 /** @return {PaddingSizeCallback} */
 static m_getYPaddingCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return null;
 }
 /** @return {AdjustSizeCallback} */
 static m_getXAdjustCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return null;
 }
 /** @return {AdjustSizeCallback} */
 static m_getYAdjustCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return null;
 }
 /** @return {TextAlignCallback<AnnotationContext>} */
 static m_getTextAlignCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return null;
 }
 /** @return {FontCallback<AnnotationContext>} */
 static m_getFontCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** !IsDefaultsLineLabel */ $thisArg) {
  IsDefaultsLineLabel.$clinit();
  return null;
 }
 
 static $clinit() {
  IsDefaultsLineLabel.$clinit = () =>{};
  IsDefaultsLineLabel.$loadModules();
  IsDefaultsBackgroundColorHandler.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultsBackgroundColorHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_annotation_IsDefaultsLineLabel = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_annotation_IsDefaultsLineLabel;
 }
 
 static $loadModules() {
  AnnotationOptions = goog.module.get('org.pepstock.charba.client.annotation.AnnotationOptions$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.annotation.IsDefaultsLineLabel.$LambdaAdaptor$impl');
  LineLabel = goog.module.get('org.pepstock.charba.client.annotation.LineLabel$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
IsDefaultsLineLabel.$markImplementor(/**@type {Function}*/ (IsDefaultsLineLabel));
$Util.$setClassMetadataForInterface(IsDefaultsLineLabel, "org.pepstock.charba.client.annotation.IsDefaultsLineLabel");

exports = IsDefaultsLineLabel;

//# sourceMappingURL=IsDefaultsLineLabel.js.map
