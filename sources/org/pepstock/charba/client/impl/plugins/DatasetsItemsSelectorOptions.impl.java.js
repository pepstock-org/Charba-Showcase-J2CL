goog.module('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDatasetsItemsSelectorDefaultOptions = goog.require('org.pepstock.charba.client.impl.plugins.IsDatasetsItemsSelectorDefaultOptions$impl');
const AbstractPluginOptions = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptions$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let GwtMaterialColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GwtMaterialColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ArrayInteger_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let DatasetsItemsSelector = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions.Property$impl');
let SelectionCleaner = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.SelectionCleaner$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDatasetsItemsSelectorDefaultOptions}
 */
class DatasetsItemsSelectorOptions extends AbstractPluginOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDatasetsItemsSelectorDefaultOptions}*/
  this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_;
  /**@type {SelectionCleaner}*/
  this.f_selectionCleaner__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_;
 }
 //Factory method corresponding to constructor 'DatasetsItemsSelectorOptions()'.
 /** @return {!DatasetsItemsSelectorOptions} */
 static $create__() {
  DatasetsItemsSelectorOptions.$clinit();
  let $instance = new DatasetsItemsSelectorOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions__();
  return $instance;
 }
 //Initialization from constructor 'DatasetsItemsSelectorOptions()'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions__() {
  this.$ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions__org_pepstock_charba_client_commons_NativeObject(null, null);
 }
 //Factory method corresponding to constructor 'DatasetsItemsSelectorOptions(IsChart)'.
 /** @return {!DatasetsItemsSelectorOptions} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  DatasetsItemsSelectorOptions.$clinit();
  let $instance = new DatasetsItemsSelectorOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 //Initialization from constructor 'DatasetsItemsSelectorOptions(IsChart)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) ? /**@type {DatasetsItemsSelectorOptions}*/ ($Casts.$to(chart.m_getDefaultChartOptions__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(DatasetsItemsSelector.f_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector, DatasetsItemsSelector.f_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector), DatasetsItemsSelectorOptions)) : null);
 }
 //Factory method corresponding to constructor 'DatasetsItemsSelectorOptions(IsDatasetsItemsSelectorDefaultOptions)'.
 /** @return {!DatasetsItemsSelectorOptions} */
 static $create__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(/** IsDatasetsItemsSelectorDefaultOptions */ defaultOptions) {
  DatasetsItemsSelectorOptions.$clinit();
  let $instance = new DatasetsItemsSelectorOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(defaultOptions);
  return $instance;
 }
 //Initialization from constructor 'DatasetsItemsSelectorOptions(IsDatasetsItemsSelectorDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions(/** IsDatasetsItemsSelectorDefaultOptions */ defaultOptions) {
  this.$ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, null);
 }
 //Factory method corresponding to constructor 'DatasetsItemsSelectorOptions(IsDatasetsItemsSelectorDefaultOptions, NativeObject)'.
 /** @return {!DatasetsItemsSelectorOptions} */
 static $create__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions__org_pepstock_charba_client_commons_NativeObject(/** IsDatasetsItemsSelectorDefaultOptions */ defaultOptions, /** ? */ nativeObject) {
  DatasetsItemsSelectorOptions.$clinit();
  let $instance = new DatasetsItemsSelectorOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'DatasetsItemsSelectorOptions(IsDatasetsItemsSelectorDefaultOptions, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultOptions__org_pepstock_charba_client_commons_NativeObject(/** IsDatasetsItemsSelectorDefaultOptions */ defaultOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptions__java_lang_String__org_pepstock_charba_client_commons_NativeObject(DatasetsItemsSelector.f_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector, nativeObject);
  if ($Equality.$same(defaultOptions, null)) {
   this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_ = /**@type {DatasetsItemsSelectorOptions}*/ ($Casts.$to(this.m_loadGlobalsPluginOptions__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(DatasetsItemsSelector.f_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelector), DatasetsItemsSelectorOptions));
  } else {
   this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_ = defaultOptions;
  }
  this.f_selectionCleaner__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_ = SelectionCleaner.$create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_impl_plugins_IsDatasetsItemsSelectorDefaultSelectionCleaner(this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_SELECTION_CLEANER__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_Property), this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_.m_getSelectionCleaner__());
  if (!this.m_has__org_pepstock_charba_client_commons_Key(Property.f_SELECTION_CLEANER__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_Property)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_SELECTION_CLEANER__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_Property, this.f_selectionCleaner__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_);
  }
 }
 /** @override @return {SelectionCleaner} */
 m_getSelectionCleaner__() {
  return this.f_selectionCleaner__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_;
 }
 
 m_setEnabled__boolean(/** boolean */ enabled) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ENABLED__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_Property, enabled);
 }
 /** @override @return {boolean} */
 m_isEnabled__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ENABLED__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_Property, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_.m_isEnabled__());
 }
 
 m_setXAxisID__java_lang_String(/** ?string */ xAxisID) {
  ScaleId.m_checkIfValid__java_lang_String(xAxisID);
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_X_AXIS_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_Property, xAxisID);
 }
 
 m_setXAxisID__org_pepstock_charba_client_options_ScaleId(/** ScaleId */ xAxisID) {
  ScaleId.m_checkIfValid__org_pepstock_charba_client_options_ScaleId(xAxisID);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_X_AXIS_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_Property, xAxisID);
 }
 /** @override @return {ScaleId} */
 m_getXAxisID__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_options_ScaleId(Property.f_X_AXIS_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_Property, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_.m_getXAxisID__());
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_COLOR__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_Property, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_.m_getColorAsString__());
 }
 /** @return {IsColor} */
 m_getColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getColorAsString__());
 }
 
 m_setColor__java_lang_String(/** ?string */ color) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_COLOR__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_Property, color);
 }
 
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setBorderDash__arrayOf_int(/** Array<number> */ borderDash) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_BORDER_DASH__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_Property, ArrayInteger_$Overlay.m_fromOrNull__arrayOf_int(borderDash));
 }
 /** @override @return {List<Integer>} */
 m_getBorderDash__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_BORDER_DASH__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_Property), ArrayInteger_$Overlay));
  return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayInteger(array);
 }
 
 m_setBorderDashOffset__double(/** number */ borderDashOffset) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_BORDER_DASH_OFFSET__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_Property, borderDashOffset);
 }
 /** @override @return {number} */
 m_getBorderDashOffset__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_BORDER_DASH_OFFSET__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_Property, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_.m_getBorderDashOffset__());
 }
 
 m_setBorderWidth__int(/** number */ borderWidth) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_WIDTH__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_Property, Checker.m_positiveOrZero__int(borderWidth));
 }
 /** @override @return {number} */
 m_getBorderWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_WIDTH__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_Property, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_.m_getBorderWidth__());
 }
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BORDER_COLOR__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_Property, this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_.m_getBorderColorAsString__());
 }
 /** @return {IsColor} */
 m_getBorderColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getColorAsString__());
 }
 
 m_setBorderColor__java_lang_String(/** ?string */ color) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BORDER_COLOR__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions_Property, color);
 }
 
 m_setBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setBorderColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 /** @return {IsColor} */
 static get f_DEFAULT_COLOR__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions() {
  return (DatasetsItemsSelectorOptions.$clinit(), DatasetsItemsSelectorOptions.$static_DEFAULT_COLOR__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions);
 }
 /** @return {DefaultScaleId} */
 static get f_DEFAULT_AXIS_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions() {
  return (DatasetsItemsSelectorOptions.$clinit(), DatasetsItemsSelectorOptions.$static_DEFAULT_AXIS_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions);
 }
 /** @return {IsColor} */
 static get f_DEFAULT_BORDER_COLOR__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions() {
  return (DatasetsItemsSelectorOptions.$clinit(), DatasetsItemsSelectorOptions.$static_DEFAULT_BORDER_COLOR__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions);
 }
 /** @return {?string} */
 static get f_DEFAULT_BORDER_COLOR_AS_STRING__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions() {
  return (DatasetsItemsSelectorOptions.$clinit(), DatasetsItemsSelectorOptions.$static_DEFAULT_BORDER_COLOR_AS_STRING__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions);
 }
 
 static $clinit() {
  DatasetsItemsSelectorOptions.$clinit = () =>{};
  DatasetsItemsSelectorOptions.$loadModules();
  AbstractPluginOptions.$clinit();
  IsDatasetsItemsSelectorDefaultOptions.$clinit();
  DatasetsItemsSelectorOptions.$static_DEFAULT_COLOR__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions = GwtMaterialColor.f_ORANGE_LIGHTEN_3__org_pepstock_charba_client_colors_GwtMaterialColor.m_alpha__double(DatasetsItemsSelectorOptions.f_DEFAULT_ALPHA__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions);
  DatasetsItemsSelectorOptions.$static_DEFAULT_AXIS_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions = DefaultScaleId.f_X__org_pepstock_charba_client_enums_DefaultScaleId;
  DatasetsItemsSelectorOptions.$static_DEFAULT_BORDER_COLOR__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions = GwtMaterialColor.f_GREY_DARKEN_2__org_pepstock_charba_client_colors_GwtMaterialColor;
  DatasetsItemsSelectorOptions.$static_DEFAULT_BORDER_COLOR_AS_STRING__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions = DatasetsItemsSelectorOptions.$static_DEFAULT_BORDER_COLOR__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions.m_toRGBA__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DatasetsItemsSelectorOptions;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  GwtMaterialColor = goog.module.get('org.pepstock.charba.client.colors.GwtMaterialColor$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  ArrayInteger_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  DatasetsItemsSelector = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector$impl');
  Property = goog.module.get('org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions.Property$impl');
  SelectionCleaner = goog.module.get('org.pepstock.charba.client.impl.plugins.SelectionCleaner$impl');
  ScaleId = goog.module.get('org.pepstock.charba.client.options.ScaleId$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {boolean}*/
DatasetsItemsSelectorOptions.f_DEFAULT_ENABLED__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions = true;
/**@const {number}*/
DatasetsItemsSelectorOptions.f_DEFAULT_ALPHA__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions = 0.3;
/**@private {IsColor}*/
DatasetsItemsSelectorOptions.$static_DEFAULT_COLOR__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions;
/**@private {DefaultScaleId}*/
DatasetsItemsSelectorOptions.$static_DEFAULT_AXIS_ID__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions;
/**@const {number}*/
DatasetsItemsSelectorOptions.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions = 0;
/**@const {number}*/
DatasetsItemsSelectorOptions.f_DEFAULT_BORDER_DASH_OFFSET__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions = 0;
/**@private {IsColor}*/
DatasetsItemsSelectorOptions.$static_DEFAULT_BORDER_COLOR__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions;
/**@private {?string}*/
DatasetsItemsSelectorOptions.$static_DEFAULT_BORDER_COLOR_AS_STRING__org_pepstock_charba_client_impl_plugins_DatasetsItemsSelectorOptions;
IsDatasetsItemsSelectorDefaultOptions.$markImplementor(DatasetsItemsSelectorOptions);
$Util.$setClassMetadata(DatasetsItemsSelectorOptions, "org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions");

exports = DatasetsItemsSelectorOptions;

//# sourceMappingURL=DatasetsItemsSelectorOptions.js.map
