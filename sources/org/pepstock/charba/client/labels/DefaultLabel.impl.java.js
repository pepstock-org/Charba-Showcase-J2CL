goog.module('org.pepstock.charba.client.labels.DefaultLabel$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultLabel = goog.require('org.pepstock.charba.client.labels.IsDefaultLabel$impl');

let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let FontCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FontCallback$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let LabelsContext = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsContext$impl');
let RenderCallback = goog.forwardDeclare('org.pepstock.charba.client.labels.callbacks.RenderCallback$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.labels.enums.Position$impl');
let Render = goog.forwardDeclare('org.pepstock.charba.client.labels.enums.Render$impl');

/**
 * @implements {IsDefaultLabel}
 */
class DefaultLabel extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultLabel} */
 static $create__() {
  let $instance = new DefaultLabel();
  $instance.$ctor__org_pepstock_charba_client_labels_DefaultLabel__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_labels_DefaultLabel__() {
  this.$ctor__java_lang_Object__();
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getColorAsString__() {
  return IsDefaultLabel.m_getColorAsString__$default__org_pepstock_charba_client_labels_IsDefaultLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {ColorCallback<LabelsContext>} */
 m_getColorCallback__() {
  return IsDefaultLabel.m_getColorCallback__$default__org_pepstock_charba_client_labels_IsDefaultLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsDefaultFont} */
 m_getFont__() {
  return IsDefaultLabel.m_getFont__$default__org_pepstock_charba_client_labels_IsDefaultLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {FontCallback<LabelsContext>} */
 m_getFontCallback__() {
  return IsDefaultLabel.m_getFontCallback__$default__org_pepstock_charba_client_labels_IsDefaultLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getOutsidePadding__() {
  return IsDefaultLabel.m_getOutsidePadding__$default__org_pepstock_charba_client_labels_IsDefaultLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {Position} */
 m_getPosition__() {
  return IsDefaultLabel.m_getPosition__$default__org_pepstock_charba_client_labels_IsDefaultLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getPrecision__() {
  return IsDefaultLabel.m_getPrecision__$default__org_pepstock_charba_client_labels_IsDefaultLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {Render} */
 m_getRender__() {
  return IsDefaultLabel.m_getRender__$default__org_pepstock_charba_client_labels_IsDefaultLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {RenderCallback} */
 m_getRenderCallback__() {
  return IsDefaultLabel.m_getRenderCallback__$default__org_pepstock_charba_client_labels_IsDefaultLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getShadowBlur__() {
  return IsDefaultLabel.m_getShadowBlur__$default__org_pepstock_charba_client_labels_IsDefaultLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getShadowColorAsString__() {
  return IsDefaultLabel.m_getShadowColorAsString__$default__org_pepstock_charba_client_labels_IsDefaultLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getShadowOffsetX__() {
  return IsDefaultLabel.m_getShadowOffsetX__$default__org_pepstock_charba_client_labels_IsDefaultLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getShadowOffsetY__() {
  return IsDefaultLabel.m_getShadowOffsetY__$default__org_pepstock_charba_client_labels_IsDefaultLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getTextMargin__() {
  return IsDefaultLabel.m_getTextMargin__$default__org_pepstock_charba_client_labels_IsDefaultLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isArc__() {
  return IsDefaultLabel.m_isArc__$default__org_pepstock_charba_client_labels_IsDefaultLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isOverlap__() {
  return IsDefaultLabel.m_isOverlap__$default__org_pepstock_charba_client_labels_IsDefaultLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isShowActualPercentages__() {
  return IsDefaultLabel.m_isShowActualPercentages__$default__org_pepstock_charba_client_labels_IsDefaultLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isShowZero__() {
  return IsDefaultLabel.m_isShowZero__$default__org_pepstock_charba_client_labels_IsDefaultLabel(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isTextShadow__() {
  return IsDefaultLabel.m_isTextShadow__$default__org_pepstock_charba_client_labels_IsDefaultLabel(this);
 }
 /** @return {DefaultLabel} */
 static get f_INSTANCE__org_pepstock_charba_client_labels_DefaultLabel() {
  return (DefaultLabel.$clinit(), DefaultLabel.$static_INSTANCE__org_pepstock_charba_client_labels_DefaultLabel);
 }
 
 static $clinit() {
  DefaultLabel.$clinit = () =>{};
  DefaultLabel.$loadModules();
  j_l_Object.$clinit();
  IsDefaultLabel.$clinit();
  DefaultLabel.$static_INSTANCE__org_pepstock_charba_client_labels_DefaultLabel = DefaultLabel.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultLabel;
 }
 
 static $loadModules() {}
}
/**@private {DefaultLabel}*/
DefaultLabel.$static_INSTANCE__org_pepstock_charba_client_labels_DefaultLabel;
IsDefaultLabel.$markImplementor(DefaultLabel);
$Util.$setClassMetadata(DefaultLabel, "org.pepstock.charba.client.labels.DefaultLabel");

exports = DefaultLabel;

//# sourceMappingURL=DefaultLabel.js.map
