goog.module('org.pepstock.charba.client.annotation.DefaultLineLabel$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultsLineLabel = goog.require('org.pepstock.charba.client.annotation.IsDefaultsLineLabel$impl');

let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let InternalFont = goog.forwardDeclare('org.pepstock.charba.client.annotation.DefaultLineLabel.InternalFont$impl');
let IsDefaultsBackgroundColorHandler = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsDefaultsBackgroundColorHandler$impl');
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

/**
 * @implements {IsDefaultsLineLabel}
 */
class DefaultLineLabel extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultFont}*/
  this.f_font__org_pepstock_charba_client_annotation_DefaultLineLabel_;
 }
 /** @return {!DefaultLineLabel} */
 static $create__() {
  let $instance = new DefaultLineLabel();
  $instance.$ctor__org_pepstock_charba_client_annotation_DefaultLineLabel__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_annotation_DefaultLineLabel__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_annotation_DefaultLineLabel();
 }
 /** @override @return {IsDefaultFont} */
 m_getFont__() {
  return this.f_font__org_pepstock_charba_client_annotation_DefaultLineLabel_;
 }
 //Default method forwarding stub.
 /** @override @return {ColorCallback<AnnotationContext>} */
 m_getBackgroundColorCallback__() {
  return IsDefaultsBackgroundColorHandler.m_getBackgroundColorCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsBackgroundColorHandler(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getColorAsString__() {
  return IsDefaultsLineLabel.m_getColorAsString__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {ColorCallback<AnnotationContext>} */
 m_getColorCallback__() {
  return IsDefaultsLineLabel.m_getColorCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {ContentCallback} */
 m_getContentCallback__() {
  return IsDefaultsLineLabel.m_getContentCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getCornerRadius__() {
  return IsDefaultsLineLabel.m_getCornerRadius__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {CornerRadiusCallback<AnnotationContext>} */
 m_getCornerRadiusCallback__() {
  return IsDefaultsLineLabel.m_getCornerRadiusCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {DisplayCallback<AnnotationContext>} */
 m_getDisplayCallback__() {
  return IsDefaultsLineLabel.m_getDisplayCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {DrawTime} */
 m_getDrawTime__() {
  return IsDefaultsLineLabel.m_getDrawTime__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {FontCallback<AnnotationContext>} */
 m_getFontCallback__() {
  return IsDefaultsLineLabel.m_getFontCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getImageHeight__() {
  return IsDefaultsLineLabel.m_getImageHeight__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getImageHeightAsPercentage__() {
  return IsDefaultsLineLabel.m_getImageHeightAsPercentage__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {ImageSizeCallback} */
 m_getImageHeightCallback__() {
  return IsDefaultsLineLabel.m_getImageHeightCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getImageWidth__() {
  return IsDefaultsLineLabel.m_getImageWidth__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getImageWidthAsPercentage__() {
  return IsDefaultsLineLabel.m_getImageWidthAsPercentage__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {ImageSizeCallback} */
 m_getImageWidthCallback__() {
  return IsDefaultsLineLabel.m_getImageWidthCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {LabelPosition} */
 m_getPosition__() {
  return IsDefaultsLineLabel.m_getPosition__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {LabelPositionCallback} */
 m_getPositionCallback__() {
  return IsDefaultsLineLabel.m_getPositionCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getRotation__() {
  return IsDefaultsLineLabel.m_getRotation__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {RotationCallback<AnnotationContext>} */
 m_getRotationCallback__() {
  return IsDefaultsLineLabel.m_getRotationCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {TextAlign} */
 m_getTextAlign__() {
  return IsDefaultsLineLabel.m_getTextAlign__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {TextAlignCallback<AnnotationContext>} */
 m_getTextAlignCallback__() {
  return IsDefaultsLineLabel.m_getTextAlignCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getXAdjust__() {
  return IsDefaultsLineLabel.m_getXAdjust__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {AdjustSizeCallback} */
 m_getXAdjustCallback__() {
  return IsDefaultsLineLabel.m_getXAdjustCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getXPadding__() {
  return IsDefaultsLineLabel.m_getXPadding__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {PaddingSizeCallback} */
 m_getXPaddingCallback__() {
  return IsDefaultsLineLabel.m_getXPaddingCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getYAdjust__() {
  return IsDefaultsLineLabel.m_getYAdjust__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {AdjustSizeCallback} */
 m_getYAdjustCallback__() {
  return IsDefaultsLineLabel.m_getYAdjustCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getYPadding__() {
  return IsDefaultsLineLabel.m_getYPadding__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {PaddingSizeCallback} */
 m_getYPaddingCallback__() {
  return IsDefaultsLineLabel.m_getYPaddingCallback__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isAutoRotation__() {
  return IsDefaultsLineLabel.m_isAutoRotation__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isDisplay__() {
  return IsDefaultsLineLabel.m_isDisplay__$default__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(this);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_annotation_DefaultLineLabel() {
  this.f_font__org_pepstock_charba_client_annotation_DefaultLineLabel_ = InternalFont.$create__();
 }
 /** @return {DefaultLineLabel} */
 static get f_INSTANCE__org_pepstock_charba_client_annotation_DefaultLineLabel() {
  return (DefaultLineLabel.$clinit(), DefaultLineLabel.$static_INSTANCE__org_pepstock_charba_client_annotation_DefaultLineLabel);
 }
 
 static $clinit() {
  DefaultLineLabel.$clinit = () =>{};
  DefaultLineLabel.$loadModules();
  j_l_Object.$clinit();
  IsDefaultsLineLabel.$clinit();
  DefaultLineLabel.$static_INSTANCE__org_pepstock_charba_client_annotation_DefaultLineLabel = DefaultLineLabel.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultLineLabel;
 }
 
 static $loadModules() {
  InternalFont = goog.module.get('org.pepstock.charba.client.annotation.DefaultLineLabel.InternalFont$impl');
  IsDefaultsBackgroundColorHandler = goog.module.get('org.pepstock.charba.client.annotation.IsDefaultsBackgroundColorHandler$impl');
 }
}
/**@private {DefaultLineLabel}*/
DefaultLineLabel.$static_INSTANCE__org_pepstock_charba_client_annotation_DefaultLineLabel;
IsDefaultsLineLabel.$markImplementor(DefaultLineLabel);
$Util.$setClassMetadata(DefaultLineLabel, "org.pepstock.charba.client.annotation.DefaultLineLabel");

exports = DefaultLineLabel;

//# sourceMappingURL=DefaultLineLabel.js.map
