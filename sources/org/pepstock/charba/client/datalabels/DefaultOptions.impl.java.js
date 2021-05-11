goog.module('org.pepstock.charba.client.datalabels.DefaultOptions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultDataLabelsOptions = goog.require('org.pepstock.charba.client.datalabels.IsDefaultDataLabelsOptions$impl');

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
let DefaultLabels = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DefaultLabels$impl');
let DefaultListeners = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DefaultListeners$impl');
let IsDefaultDataLabelsItem = goog.forwardDeclare('org.pepstock.charba.client.datalabels.IsDefaultDataLabelsItem$impl');
let IsDefaultLabels = goog.forwardDeclare('org.pepstock.charba.client.datalabels.IsDefaultLabels$impl');
let IsDefaultListeners = goog.forwardDeclare('org.pepstock.charba.client.datalabels.IsDefaultListeners$impl');
let Padding = goog.forwardDeclare('org.pepstock.charba.client.datalabels.Padding$impl');
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
let DefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');
let Display = goog.forwardDeclare('org.pepstock.charba.client.enums.Display$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');

/**
 * @implements {IsDefaultDataLabelsOptions}
 */
class DefaultOptions extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultPadding}*/
  this.f_padding__org_pepstock_charba_client_datalabels_DefaultOptions_;
  /**@type {DefaultListeners}*/
  this.f_listeners__org_pepstock_charba_client_datalabels_DefaultOptions_;
  /**@type {DefaultLabels}*/
  this.f_labels__org_pepstock_charba_client_datalabels_DefaultOptions_;
 }
 /** @return {!DefaultOptions} */
 static $create__() {
  let $instance = new DefaultOptions();
  $instance.$ctor__org_pepstock_charba_client_datalabels_DefaultOptions__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_datalabels_DefaultOptions__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_datalabels_DefaultOptions();
 }
 /** @override @return {IsDefaultFont} */
 m_getFont__() {
  return Defaults.m_get__().m_getGlobal__().m_getFont__();
 }
 /** @override @return {IsDefaultPadding} */
 m_getPadding__() {
  return this.f_padding__org_pepstock_charba_client_datalabels_DefaultOptions_;
 }
 /** @override @return {IsDefaultListeners} */
 m_getListeners__() {
  return this.f_listeners__org_pepstock_charba_client_datalabels_DefaultOptions_;
 }
 /** @override @return {IsDefaultLabels} */
 m_getLabels__() {
  return this.f_labels__org_pepstock_charba_client_datalabels_DefaultOptions_;
 }
 //Default method forwarding stub.
 /** @override @return {Align} */
 m_getAlign__() {
  return IsDefaultDataLabelsItem.m_getAlign__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {AlignCallback} */
 m_getAlignCallback__() {
  return IsDefaultDataLabelsItem.m_getAlignCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {Anchor} */
 m_getAnchor__() {
  return IsDefaultDataLabelsItem.m_getAnchor__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {AnchorCallback} */
 m_getAnchorCallback__() {
  return IsDefaultDataLabelsItem.m_getAnchorCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return IsDefaultDataLabelsItem.m_getBackgroundColorAsString__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {ColorCallback<DataLabelsContext>} */
 m_getBackgroundColorCallback__() {
  return IsDefaultDataLabelsItem.m_getBackgroundColorCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return IsDefaultDataLabelsItem.m_getBorderColorAsString__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {ColorCallback<DataLabelsContext>} */
 m_getBorderColorCallback__() {
  return IsDefaultDataLabelsItem.m_getBorderColorCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBorderRadius__() {
  return IsDefaultDataLabelsItem.m_getBorderRadius__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {RadiusCallback<DataLabelsContext>} */
 m_getBorderRadiusCallback__() {
  return IsDefaultDataLabelsItem.m_getBorderRadiusCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBorderWidth__() {
  return IsDefaultDataLabelsItem.m_getBorderWidth__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {WidthCallback<DataLabelsContext>} */
 m_getBorderWidthCallback__() {
  return IsDefaultDataLabelsItem.m_getBorderWidthCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {ClampCallback} */
 m_getClampCallback__() {
  return IsDefaultDataLabelsItem.m_getClampCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {ClipCallback} */
 m_getClipCallback__() {
  return IsDefaultDataLabelsItem.m_getClipCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getColorAsString__() {
  return IsDefaultDataLabelsItem.m_getColorAsString__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {ColorCallback<DataLabelsContext>} */
 m_getColorCallback__() {
  return IsDefaultDataLabelsItem.m_getColorCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {Display} */
 m_getDisplay__() {
  return IsDefaultDataLabelsItem.m_getDisplay__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {DisplayCallback} */
 m_getDisplayCallback__() {
  return IsDefaultDataLabelsItem.m_getDisplayCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {FontCallback<DataLabelsContext>} */
 m_getFontCallback__() {
  return IsDefaultDataLabelsItem.m_getFontCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {FormatterCallback} */
 m_getFormatterCallback__() {
  return IsDefaultDataLabelsItem.m_getFormatterCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getOffset__() {
  return IsDefaultDataLabelsItem.m_getOffset__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {OffsetCallback<DataLabelsContext>} */
 m_getOffsetCallback__() {
  return IsDefaultDataLabelsItem.m_getOffsetCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getOpacity__() {
  return IsDefaultDataLabelsItem.m_getOpacity__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {OpacityCallback} */
 m_getOpacityCallback__() {
  return IsDefaultDataLabelsItem.m_getOpacityCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {PaddingCallback<DataLabelsContext>} */
 m_getPaddingCallback__() {
  return IsDefaultDataLabelsItem.m_getPaddingCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getRotation__() {
  return IsDefaultDataLabelsItem.m_getRotation__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {RotationCallback<DataLabelsContext>} */
 m_getRotationCallback__() {
  return IsDefaultDataLabelsItem.m_getRotationCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {TextAlign} */
 m_getTextAlign__() {
  return IsDefaultDataLabelsItem.m_getTextAlign__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {TextAlignCallback<DataLabelsContext>} */
 m_getTextAlignCallback__() {
  return IsDefaultDataLabelsItem.m_getTextAlignCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getTextShadowBlur__() {
  return IsDefaultDataLabelsItem.m_getTextShadowBlur__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {TextShadowBlurCallback} */
 m_getTextShadowBlurCallback__() {
  return IsDefaultDataLabelsItem.m_getTextShadowBlurCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getTextShadowColorAsString__() {
  return IsDefaultDataLabelsItem.m_getTextShadowColorAsString__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {ColorCallback<DataLabelsContext>} */
 m_getTextShadowColorCallback__() {
  return IsDefaultDataLabelsItem.m_getTextShadowColorCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getTextStrokeColorAsString__() {
  return IsDefaultDataLabelsItem.m_getTextStrokeColorAsString__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {ColorCallback<DataLabelsContext>} */
 m_getTextStrokeColorCallback__() {
  return IsDefaultDataLabelsItem.m_getTextStrokeColorCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getTextStrokeWidth__() {
  return IsDefaultDataLabelsItem.m_getTextStrokeWidth__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {WidthCallback<DataLabelsContext>} */
 m_getTextStrokeWidthCallback__() {
  return IsDefaultDataLabelsItem.m_getTextStrokeWidthCallback__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isClamp__() {
  return IsDefaultDataLabelsItem.m_isClamp__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isClip__() {
  return IsDefaultDataLabelsItem.m_isClip__$default__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem(this);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_datalabels_DefaultOptions() {
  this.f_padding__org_pepstock_charba_client_datalabels_DefaultOptions_ = DefaultPadding.$create__int(Padding.f_DEFAULT_PADDING__org_pepstock_charba_client_datalabels_Padding);
  this.f_listeners__org_pepstock_charba_client_datalabels_DefaultOptions_ = DefaultListeners.$create__();
  this.f_labels__org_pepstock_charba_client_datalabels_DefaultOptions_ = DefaultLabels.$create__();
 }
 /** @return {DefaultOptions} */
 static get f_INSTANCE__org_pepstock_charba_client_datalabels_DefaultOptions() {
  return (DefaultOptions.$clinit(), DefaultOptions.$static_INSTANCE__org_pepstock_charba_client_datalabels_DefaultOptions);
 }
 
 static $clinit() {
  DefaultOptions.$clinit = () =>{};
  DefaultOptions.$loadModules();
  j_l_Object.$clinit();
  IsDefaultDataLabelsItem.$clinit();
  DefaultOptions.$static_INSTANCE__org_pepstock_charba_client_datalabels_DefaultOptions = DefaultOptions.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultOptions;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  DefaultLabels = goog.module.get('org.pepstock.charba.client.datalabels.DefaultLabels$impl');
  DefaultListeners = goog.module.get('org.pepstock.charba.client.datalabels.DefaultListeners$impl');
  IsDefaultDataLabelsItem = goog.module.get('org.pepstock.charba.client.datalabels.IsDefaultDataLabelsItem$impl');
  Padding = goog.module.get('org.pepstock.charba.client.datalabels.Padding$impl');
  DefaultPadding = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');
 }
}
/**@private {DefaultOptions}*/
DefaultOptions.$static_INSTANCE__org_pepstock_charba_client_datalabels_DefaultOptions;
IsDefaultDataLabelsOptions.$markImplementor(DefaultOptions);
$Util.$setClassMetadata(DefaultOptions, "org.pepstock.charba.client.datalabels.DefaultOptions");

exports = DefaultOptions;

//# sourceMappingURL=DefaultOptions.js.map
