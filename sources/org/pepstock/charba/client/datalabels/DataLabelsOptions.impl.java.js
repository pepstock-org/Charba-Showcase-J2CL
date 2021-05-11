goog.module('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultDataLabelsOptions = goog.require('org.pepstock.charba.client.datalabels.IsDefaultDataLabelsOptions$impl');
const LabelItem = goog.require('org.pepstock.charba.client.datalabels.LabelItem$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsOptions.Property$impl');
let DataLabelsPlugin = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
let IsDefaultDataLabelsItem = goog.forwardDeclare('org.pepstock.charba.client.datalabels.IsDefaultDataLabelsItem$impl');
let Labels = goog.forwardDeclare('org.pepstock.charba.client.datalabels.Labels$impl');
let Align = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Align$impl');
let Anchor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Anchor$impl');
let Display = goog.forwardDeclare('org.pepstock.charba.client.enums.Display$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {IsDefaultDataLabelsOptions}
 */
class DataLabelsOptions extends LabelItem {
 /** @protected */
 constructor() {
  super();
  /**@type {Labels}*/
  this.f_labels__org_pepstock_charba_client_datalabels_DataLabelsOptions_;
 }
 //Factory method corresponding to constructor 'DataLabelsOptions()'.
 /** @return {!DataLabelsOptions} */
 static $create__() {
  DataLabelsOptions.$clinit();
  let $instance = new DataLabelsOptions();
  $instance.$ctor__org_pepstock_charba_client_datalabels_DataLabelsOptions__();
  return $instance;
 }
 //Initialization from constructor 'DataLabelsOptions()'.
 
 $ctor__org_pepstock_charba_client_datalabels_DataLabelsOptions__() {
  this.$ctor__org_pepstock_charba_client_datalabels_DataLabelsOptions__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsOptions__org_pepstock_charba_client_commons_NativeObject(null, null);
 }
 //Factory method corresponding to constructor 'DataLabelsOptions(IsChart)'.
 /** @return {!DataLabelsOptions} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  DataLabelsOptions.$clinit();
  let $instance = new DataLabelsOptions();
  $instance.$ctor__org_pepstock_charba_client_datalabels_DataLabelsOptions__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 //Initialization from constructor 'DataLabelsOptions(IsChart)'.
 
 $ctor__org_pepstock_charba_client_datalabels_DataLabelsOptions__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_datalabels_DataLabelsOptions__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsOptions__org_pepstock_charba_client_commons_NativeObject(IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) ? /**@type {DataLabelsOptions}*/ ($Casts.$to(chart.m_getDefaultChartOptions__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, DataLabelsPlugin.f_DEFAULTS_FACTORY__org_pepstock_charba_client_datalabels_DataLabelsPlugin), DataLabelsOptions)) : null, null);
 }
 //Factory method corresponding to constructor 'DataLabelsOptions(IsDefaultDataLabelsOptions, NativeObject)'.
 /** @return {!DataLabelsOptions} */
 static $create__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsOptions__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultDataLabelsOptions */ defaultOptions, /** ? */ nativeObject) {
  DataLabelsOptions.$clinit();
  let $instance = new DataLabelsOptions();
  $instance.$ctor__org_pepstock_charba_client_datalabels_DataLabelsOptions__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'DataLabelsOptions(IsDefaultDataLabelsOptions, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_datalabels_DataLabelsOptions__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsOptions__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultDataLabelsOptions */ defaultOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  let defaultValue = this.m_getDefaultsOptions___$pp_org_pepstock_charba_client_datalabels();
  Checker.m_assertCheck__boolean__java_lang_String(IsDefaultDataLabelsOptions.$isInstance(defaultValue), "The default instance is not correct type, " + j_l_String.m_valueOf__java_lang_Object($Objects.m_getClass__java_lang_Object(defaultValue).m_getName__()));
  let values = /**@type {IsDefaultDataLabelsOptions}*/ ($Casts.$to(defaultValue, IsDefaultDataLabelsOptions));
  this.f_labels__org_pepstock_charba_client_datalabels_DataLabelsOptions_ = Labels.$create__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsOptions__org_pepstock_charba_client_datalabels_IsDefaultLabels__org_pepstock_charba_client_commons_NativeObject(this, values.m_getLabels__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_LABELS__org_pepstock_charba_client_datalabels_DataLabelsOptions_Property));
  if (!this.m_has__org_pepstock_charba_client_commons_Key(Property.f_LABELS__org_pepstock_charba_client_datalabels_DataLabelsOptions_Property)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_LABELS__org_pepstock_charba_client_datalabels_DataLabelsOptions_Property, this.f_labels__org_pepstock_charba_client_datalabels_DataLabelsOptions_);
  }
 }
 /** @override */
 m_applyingDefaults__() {
  DataLabelsPlugin.m_get__().m_mergeDefaults__org_pepstock_charba_client_datalabels_DataLabelsOptions_$pp_org_pepstock_charba_client_datalabels(this);
 }
 /** @override @return {Labels} */
 m_getLabels__() {
  return this.f_labels__org_pepstock_charba_client_datalabels_DataLabelsOptions_;
 }
 /** @return {Align} */
 static get f_DEFAULT_ALIGN__org_pepstock_charba_client_datalabels_DataLabelsOptions() {
  return (DataLabelsOptions.$clinit(), DataLabelsOptions.$static_DEFAULT_ALIGN__org_pepstock_charba_client_datalabels_DataLabelsOptions);
 }
 /** @return {Anchor} */
 static get f_DEFAULT_ANCHOR__org_pepstock_charba_client_datalabels_DataLabelsOptions() {
  return (DataLabelsOptions.$clinit(), DataLabelsOptions.$static_DEFAULT_ANCHOR__org_pepstock_charba_client_datalabels_DataLabelsOptions);
 }
 /** @return {?string} */
 static get f_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_datalabels_DataLabelsOptions() {
  return (DataLabelsOptions.$clinit(), DataLabelsOptions.$static_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_datalabels_DataLabelsOptions);
 }
 /** @return {?string} */
 static get f_DEFAULT_BORDER_COLOR__org_pepstock_charba_client_datalabels_DataLabelsOptions() {
  return (DataLabelsOptions.$clinit(), DataLabelsOptions.$static_DEFAULT_BORDER_COLOR__org_pepstock_charba_client_datalabels_DataLabelsOptions);
 }
 /** @return {Display} */
 static get f_DEFAULT_DISPLAY__org_pepstock_charba_client_datalabels_DataLabelsOptions() {
  return (DataLabelsOptions.$clinit(), DataLabelsOptions.$static_DEFAULT_DISPLAY__org_pepstock_charba_client_datalabels_DataLabelsOptions);
 }
 /** @return {TextAlign} */
 static get f_DEFAULT_TEXT_ALIGN__org_pepstock_charba_client_datalabels_DataLabelsOptions() {
  return (DataLabelsOptions.$clinit(), DataLabelsOptions.$static_DEFAULT_TEXT_ALIGN__org_pepstock_charba_client_datalabels_DataLabelsOptions);
 }
 
 static $clinit() {
  DataLabelsOptions.$clinit = () =>{};
  DataLabelsOptions.$loadModules();
  LabelItem.$clinit();
  IsDefaultDataLabelsItem.$clinit();
  DataLabelsOptions.$static_DEFAULT_ALIGN__org_pepstock_charba_client_datalabels_DataLabelsOptions = Align.f_CENTER__org_pepstock_charba_client_datalabels_enums_Align;
  DataLabelsOptions.$static_DEFAULT_ANCHOR__org_pepstock_charba_client_datalabels_DataLabelsOptions = Anchor.f_CENTER__org_pepstock_charba_client_datalabels_enums_Anchor;
  DataLabelsOptions.$static_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_datalabels_DataLabelsOptions = null;
  DataLabelsOptions.$static_DEFAULT_BORDER_COLOR__org_pepstock_charba_client_datalabels_DataLabelsOptions = null;
  DataLabelsOptions.$static_DEFAULT_DISPLAY__org_pepstock_charba_client_datalabels_DataLabelsOptions = Display.f_TRUE__org_pepstock_charba_client_enums_Display;
  DataLabelsOptions.$static_DEFAULT_TEXT_ALIGN__org_pepstock_charba_client_datalabels_DataLabelsOptions = TextAlign.f_START__org_pepstock_charba_client_enums_TextAlign;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataLabelsOptions;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Property = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsOptions.Property$impl');
  DataLabelsPlugin = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
  IsDefaultDataLabelsItem = goog.module.get('org.pepstock.charba.client.datalabels.IsDefaultDataLabelsItem$impl');
  Labels = goog.module.get('org.pepstock.charba.client.datalabels.Labels$impl');
  Align = goog.module.get('org.pepstock.charba.client.datalabels.enums.Align$impl');
  Anchor = goog.module.get('org.pepstock.charba.client.datalabels.enums.Anchor$impl');
  Display = goog.module.get('org.pepstock.charba.client.enums.Display$impl');
  TextAlign = goog.module.get('org.pepstock.charba.client.enums.TextAlign$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@private {Align}*/
DataLabelsOptions.$static_DEFAULT_ALIGN__org_pepstock_charba_client_datalabels_DataLabelsOptions;
/**@private {Anchor}*/
DataLabelsOptions.$static_DEFAULT_ANCHOR__org_pepstock_charba_client_datalabels_DataLabelsOptions;
/**@private {?string}*/
DataLabelsOptions.$static_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_datalabels_DataLabelsOptions;
/**@private {?string}*/
DataLabelsOptions.$static_DEFAULT_BORDER_COLOR__org_pepstock_charba_client_datalabels_DataLabelsOptions;
/**@const {number}*/
DataLabelsOptions.f_DEFAULT_BORDER_RADIUS__org_pepstock_charba_client_datalabels_DataLabelsOptions = 0;
/**@const {number}*/
DataLabelsOptions.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_datalabels_DataLabelsOptions = 0;
/**@const {boolean}*/
DataLabelsOptions.f_DEFAULT_CLAMP__org_pepstock_charba_client_datalabels_DataLabelsOptions = false;
/**@const {boolean}*/
DataLabelsOptions.f_DEFAULT_CLIP__org_pepstock_charba_client_datalabels_DataLabelsOptions = false;
/**@private {Display}*/
DataLabelsOptions.$static_DEFAULT_DISPLAY__org_pepstock_charba_client_datalabels_DataLabelsOptions;
/**@const {number}*/
DataLabelsOptions.f_DEFAULT_OFFSET__org_pepstock_charba_client_datalabels_DataLabelsOptions = 4;
/**@const {number}*/
DataLabelsOptions.f_DEFAULT_OPACITY__org_pepstock_charba_client_datalabels_DataLabelsOptions = 1;
/**@const {number}*/
DataLabelsOptions.f_DEFAULT_ROTATION__org_pepstock_charba_client_datalabels_DataLabelsOptions = 0;
/**@private {TextAlign}*/
DataLabelsOptions.$static_DEFAULT_TEXT_ALIGN__org_pepstock_charba_client_datalabels_DataLabelsOptions;
/**@const {number}*/
DataLabelsOptions.f_DEFAULT_TEXT_STROKE_WIDTH__org_pepstock_charba_client_datalabels_DataLabelsOptions = 0;
/**@const {number}*/
DataLabelsOptions.f_DEFAULT_TEXT_SHADOW_BLUR__org_pepstock_charba_client_datalabels_DataLabelsOptions = 0;
IsDefaultDataLabelsOptions.$markImplementor(DataLabelsOptions);
$Util.$setClassMetadata(DataLabelsOptions, "org.pepstock.charba.client.datalabels.DataLabelsOptions");

exports = DataLabelsOptions;

//# sourceMappingURL=DataLabelsOptions.js.map
