goog.module('org.pepstock.charba.client.impl.charts.MeterOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPieOptions = goog.require('org.pepstock.charba.client.configuration.AbstractPieOptions$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let MeterFormatCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.MeterFormatCallback$impl');
let Color = goog.forwardDeclare('org.pepstock.charba.client.colors.Color$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
let Render = goog.forwardDeclare('org.pepstock.charba.client.enums.Render$impl');
let BaseContext = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.BaseContext$impl');
let MeterContext = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.MeterContext$impl');
let FontItem = goog.forwardDeclare('org.pepstock.charba.client.items.FontItem$impl');

class MeterOptions extends AbstractPieOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {Render}*/
  this.f_render__org_pepstock_charba_client_impl_charts_MeterOptions_;
  /**@type {number}*/
  this.f_precision__org_pepstock_charba_client_impl_charts_MeterOptions_ = 0;
  /**@type {IsColor}*/
  this.f_fontColor__org_pepstock_charba_client_impl_charts_MeterOptions_;
  /**@type {boolean}*/
  this.f_animated__org_pepstock_charba_client_impl_charts_MeterOptions_ = false;
  /**@type {boolean}*/
  this.f_autoFontSize__org_pepstock_charba_client_impl_charts_MeterOptions_ = false;
  /**@type {FontItem}*/
  this.f_fontItem__org_pepstock_charba_client_impl_charts_MeterOptions_;
  /**@type {MeterContext}*/
  this.f_context__org_pepstock_charba_client_impl_charts_MeterOptions_;
  /**@type {MeterFormatCallback}*/
  this.f_formatCallback__org_pepstock_charba_client_impl_charts_MeterOptions_;
  /**@type {ColorCallback<MeterContext>}*/
  this.f_fontColorCallback__org_pepstock_charba_client_impl_charts_MeterOptions_;
 }
 /** @return {!MeterOptions} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  MeterOptions.$clinit();
  let $instance = new MeterOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_charts_MeterOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_charts_MeterOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractPieOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions(chart, defaultValues);
  this.$init___$p_org_pepstock_charba_client_impl_charts_MeterOptions();
  this.m_getLegend__().m_setDisplay__boolean(false);
  this.m_getTooltips__().m_setEnabled__boolean(false);
  super.m_setCutoutPercentage__java_lang_String(MeterOptions.f_DEFAULT_CUTOUT_PERCENTAGE__org_pepstock_charba_client_impl_charts_MeterOptions_);
  super.m_setCircumference__double(MeterOptions.f_DEFAULT_CIRCUMFERENCE__org_pepstock_charba_client_impl_charts_MeterOptions_);
  super.m_setRotation__double(MeterOptions.f_DEFAULT_ROTATION__org_pepstock_charba_client_impl_charts_MeterOptions_);
 }
 /** @return {FontItem} */
 m_getFontItem___$pp_org_pepstock_charba_client_impl_charts() {
  return this.f_fontItem__org_pepstock_charba_client_impl_charts_MeterOptions_;
 }
 
 m_resetFontItem___$pp_org_pepstock_charba_client_impl_charts() {
  this.f_fontItem__org_pepstock_charba_client_impl_charts_MeterOptions_ = this.m_getFont__().m_create__();
 }
 /** @return {MeterContext} */
 m_getContext___$pp_org_pepstock_charba_client_impl_charts() {
  if ($Equality.$same(this.f_context__org_pepstock_charba_client_impl_charts_MeterOptions_, null)) {
   this.f_context__org_pepstock_charba_client_impl_charts_MeterOptions_ = MeterContext.$create__org_pepstock_charba_client_impl_charts_BaseContext(BaseContext.$create__org_pepstock_charba_client_IsChart(this.m_getChart__()));
  }
  return this.f_context__org_pepstock_charba_client_impl_charts_MeterOptions_;
 }
 /** @override */
 m_setCutoutPercentage__java_lang_String(/** ?string */ cutout) {
  super.m_setCutoutPercentage__java_lang_String(MeterOptions.f_DEFAULT_CUTOUT_PERCENTAGE__org_pepstock_charba_client_impl_charts_MeterOptions_);
 }
 /** @override */
 m_setCutout__double(/** number */ cutout) {
  this.m_setCutoutPercentage__java_lang_String(MeterOptions.f_DEFAULT_CUTOUT_PERCENTAGE__org_pepstock_charba_client_impl_charts_MeterOptions_);
 }
 /** @override @return {number} */
 m_getCutout__() {
  return Double.f_NaN__java_lang_Double;
 }
 /** @override */
 m_setCircumference__double(/** number */ circumference) {
  super.m_setCircumference__double(MeterOptions.f_DEFAULT_CIRCUMFERENCE__org_pepstock_charba_client_impl_charts_MeterOptions_);
 }
 /** @return {Render} */
 m_getRender__() {
  return this.f_render__org_pepstock_charba_client_impl_charts_MeterOptions_;
 }
 
 m_setRender__org_pepstock_charba_client_enums_Render(/** Render */ render) {
  this.f_render__org_pepstock_charba_client_impl_charts_MeterOptions_ = $Equality.$same(render, null) ? Render.f_VALUE__org_pepstock_charba_client_enums_Render : render;
 }
 /** @return {number} */
 m_getPrecision__() {
  return this.f_precision__org_pepstock_charba_client_impl_charts_MeterOptions_;
 }
 
 m_setPrecision__int(/** number */ precision) {
  this.f_precision__org_pepstock_charba_client_impl_charts_MeterOptions_ = precision;
 }
 /** @return {IsColor} */
 m_getFontColor__() {
  return this.f_fontColor__org_pepstock_charba_client_impl_charts_MeterOptions_;
 }
 
 m_setFontColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ fontColor) {
  this.m_setFontColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<MeterContext>}*/ (null));
  this.f_fontColor__org_pepstock_charba_client_impl_charts_MeterOptions_ = IsColor.m_isValid__org_pepstock_charba_client_colors_IsColor(fontColor) ? fontColor : MeterOptions.$static_DEFAULT_FONT_COLOR__org_pepstock_charba_client_impl_charts_MeterOptions;
 }
 /** @return {boolean} */
 m_isAnimated__() {
  return this.f_animated__org_pepstock_charba_client_impl_charts_MeterOptions_;
 }
 
 m_setAnimated__boolean(/** boolean */ animated) {
  this.f_animated__org_pepstock_charba_client_impl_charts_MeterOptions_ = animated;
 }
 /** @return {boolean} */
 m_isAutoFontSize__() {
  return this.f_autoFontSize__org_pepstock_charba_client_impl_charts_MeterOptions_;
 }
 
 m_setAutoFontSize__boolean(/** boolean */ autoFontSize) {
  this.f_autoFontSize__org_pepstock_charba_client_impl_charts_MeterOptions_ = autoFontSize;
 }
 /** @return {MeterFormatCallback} */
 m_getFormatCallback__() {
  return this.f_formatCallback__org_pepstock_charba_client_impl_charts_MeterOptions_;
 }
 
 m_setFormatCallback__org_pepstock_charba_client_callbacks_MeterFormatCallback(/** MeterFormatCallback */ formatCallback) {
  this.f_formatCallback__org_pepstock_charba_client_impl_charts_MeterOptions_ = formatCallback;
 }
 /** @return {ColorCallback<MeterContext>} */
 m_getFontColorCallback__() {
  return this.f_fontColorCallback__org_pepstock_charba_client_impl_charts_MeterOptions_;
 }
 
 m_setFontColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<MeterContext> */ fontColorCallback) {
  this.f_fontColorCallback__org_pepstock_charba_client_impl_charts_MeterOptions_ = fontColorCallback;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_impl_charts_MeterOptions() {
  this.f_render__org_pepstock_charba_client_impl_charts_MeterOptions_ = Render.f_VALUE__org_pepstock_charba_client_enums_Render;
  this.f_precision__org_pepstock_charba_client_impl_charts_MeterOptions_ = MeterOptions.f_DEFAULT_PRECISION__org_pepstock_charba_client_impl_charts_MeterOptions;
  this.f_fontColor__org_pepstock_charba_client_impl_charts_MeterOptions_ = MeterOptions.$static_DEFAULT_FONT_COLOR__org_pepstock_charba_client_impl_charts_MeterOptions;
  this.f_animated__org_pepstock_charba_client_impl_charts_MeterOptions_ = MeterOptions.f_DEFAULT_ANIMATED__org_pepstock_charba_client_impl_charts_MeterOptions_;
  this.f_autoFontSize__org_pepstock_charba_client_impl_charts_MeterOptions_ = MeterOptions.f_DEFAULT_AUTO_FONT_SIZE__org_pepstock_charba_client_impl_charts_MeterOptions_;
  this.f_fontItem__org_pepstock_charba_client_impl_charts_MeterOptions_ = null;
  this.f_context__org_pepstock_charba_client_impl_charts_MeterOptions_ = null;
  this.f_formatCallback__org_pepstock_charba_client_impl_charts_MeterOptions_ = null;
  this.f_fontColorCallback__org_pepstock_charba_client_impl_charts_MeterOptions_ = null;
 }
 /** @return {IsColor} */
 static get f_DEFAULT_FONT_COLOR__org_pepstock_charba_client_impl_charts_MeterOptions() {
  return (MeterOptions.$clinit(), MeterOptions.$static_DEFAULT_FONT_COLOR__org_pepstock_charba_client_impl_charts_MeterOptions);
 }
 /** @return {?string} */
 static get f_DEFAULT_FONT_COLOR_AS_STRING__org_pepstock_charba_client_impl_charts_MeterOptions() {
  return (MeterOptions.$clinit(), MeterOptions.$static_DEFAULT_FONT_COLOR_AS_STRING__org_pepstock_charba_client_impl_charts_MeterOptions);
 }
 
 static $clinit() {
  MeterOptions.$clinit = () =>{};
  MeterOptions.$loadModules();
  AbstractPieOptions.$clinit();
  MeterOptions.$static_DEFAULT_FONT_COLOR__org_pepstock_charba_client_impl_charts_MeterOptions = Color.$create__int__int__int(128, 128, 128);
  MeterOptions.$static_DEFAULT_FONT_COLOR_AS_STRING__org_pepstock_charba_client_impl_charts_MeterOptions = MeterOptions.$static_DEFAULT_FONT_COLOR__org_pepstock_charba_client_impl_charts_MeterOptions.m_toRGBA__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MeterOptions;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Color = goog.module.get('org.pepstock.charba.client.colors.Color$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Render = goog.module.get('org.pepstock.charba.client.enums.Render$impl');
  BaseContext = goog.module.get('org.pepstock.charba.client.impl.charts.BaseContext$impl');
  MeterContext = goog.module.get('org.pepstock.charba.client.impl.charts.MeterContext$impl');
 }
}
/**@const {number}*/
MeterOptions.f_DEFAULT_PRECISION__org_pepstock_charba_client_impl_charts_MeterOptions = 2;
/**@private {IsColor}*/
MeterOptions.$static_DEFAULT_FONT_COLOR__org_pepstock_charba_client_impl_charts_MeterOptions;
/**@private {?string}*/
MeterOptions.$static_DEFAULT_FONT_COLOR_AS_STRING__org_pepstock_charba_client_impl_charts_MeterOptions;
/**@const {number}*/
MeterOptions.f_DEFAULT_CIRCUMFERENCE__org_pepstock_charba_client_impl_charts_MeterOptions_ = 360;
/**@const {number}*/
MeterOptions.f_DEFAULT_ROTATION__org_pepstock_charba_client_impl_charts_MeterOptions_ = 0;
/**@const {?string}*/
MeterOptions.f_DEFAULT_CUTOUT_PERCENTAGE__org_pepstock_charba_client_impl_charts_MeterOptions_ = "90%";
/**@const {boolean}*/
MeterOptions.f_DEFAULT_ANIMATED__org_pepstock_charba_client_impl_charts_MeterOptions_ = false;
/**@const {boolean}*/
MeterOptions.f_DEFAULT_AUTO_FONT_SIZE__org_pepstock_charba_client_impl_charts_MeterOptions_ = true;
$Util.$setClassMetadata(MeterOptions, "org.pepstock.charba.client.impl.charts.MeterOptions");

exports = MeterOptions;

//# sourceMappingURL=MeterOptions.js.map
