goog.module('org.pepstock.charba.client.impl.plugins.ChartPointerOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractCursorPointerOptions = goog.require('org.pepstock.charba.client.impl.plugins.AbstractCursorPointerOptions$impl');
const IsChartPointerDefaultOptions = goog.require('org.pepstock.charba.client.impl.plugins.IsChartPointerDefaultOptions$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ArrayEnumList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayEnumList$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayString_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let ChartPointer = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointer$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ChartPointerOptions.Property$impl');
let PointerElement = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.PointerElement$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsChartPointerDefaultOptions}
 */
class ChartPointerOptions extends AbstractCursorPointerOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {IsChartPointerDefaultOptions}*/
  this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_ChartPointerOptions_;
 }
 //Factory method corresponding to constructor 'ChartPointerOptions()'.
 /** @return {!ChartPointerOptions} */
 static $create__() {
  ChartPointerOptions.$clinit();
  let $instance = new ChartPointerOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartPointerOptions__();
  return $instance;
 }
 //Initialization from constructor 'ChartPointerOptions()'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartPointerOptions__() {
  this.$ctor__org_pepstock_charba_client_impl_plugins_ChartPointerOptions__org_pepstock_charba_client_impl_plugins_IsChartPointerDefaultOptions__org_pepstock_charba_client_commons_NativeObject(null, null);
 }
 //Factory method corresponding to constructor 'ChartPointerOptions(IsChart)'.
 /** @return {!ChartPointerOptions} */
 static $create__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  ChartPointerOptions.$clinit();
  let $instance = new ChartPointerOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartPointerOptions__org_pepstock_charba_client_IsChart(chart);
  return $instance;
 }
 //Initialization from constructor 'ChartPointerOptions(IsChart)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartPointerOptions__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_impl_plugins_ChartPointerOptions__org_pepstock_charba_client_impl_plugins_IsChartPointerDefaultOptions(IsChart.m_isConsistent__org_pepstock_charba_client_IsChart(chart) ? /**@type {ChartPointerOptions}*/ ($Casts.$to(chart.m_getDefaultChartOptions__().m_getPlugins__().m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ChartPointer.f_ID__org_pepstock_charba_client_impl_plugins_ChartPointer, ChartPointer.f_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_ChartPointer), ChartPointerOptions)) : null);
 }
 //Factory method corresponding to constructor 'ChartPointerOptions(IsChartPointerDefaultOptions)'.
 /** @return {!ChartPointerOptions} */
 static $create__org_pepstock_charba_client_impl_plugins_IsChartPointerDefaultOptions(/** IsChartPointerDefaultOptions */ defaultOptions) {
  ChartPointerOptions.$clinit();
  let $instance = new ChartPointerOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartPointerOptions__org_pepstock_charba_client_impl_plugins_IsChartPointerDefaultOptions(defaultOptions);
  return $instance;
 }
 //Initialization from constructor 'ChartPointerOptions(IsChartPointerDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartPointerOptions__org_pepstock_charba_client_impl_plugins_IsChartPointerDefaultOptions(/** IsChartPointerDefaultOptions */ defaultOptions) {
  this.$ctor__org_pepstock_charba_client_impl_plugins_ChartPointerOptions__org_pepstock_charba_client_impl_plugins_IsChartPointerDefaultOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, null);
 }
 //Factory method corresponding to constructor 'ChartPointerOptions(IsChartPointerDefaultOptions, NativeObject)'.
 /** @return {!ChartPointerOptions} */
 static $create__org_pepstock_charba_client_impl_plugins_IsChartPointerDefaultOptions__org_pepstock_charba_client_commons_NativeObject(/** IsChartPointerDefaultOptions */ defaultOptions, /** ? */ nativeObject) {
  ChartPointerOptions.$clinit();
  let $instance = new ChartPointerOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartPointerOptions__org_pepstock_charba_client_impl_plugins_IsChartPointerDefaultOptions__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'ChartPointerOptions(IsChartPointerDefaultOptions, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartPointerOptions__org_pepstock_charba_client_impl_plugins_IsChartPointerDefaultOptions__org_pepstock_charba_client_commons_NativeObject(/** IsChartPointerDefaultOptions */ defaultOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_impl_plugins_AbstractCursorPointerOptions__java_lang_String__org_pepstock_charba_client_commons_NativeObject(ChartPointer.f_ID__org_pepstock_charba_client_impl_plugins_ChartPointer, nativeObject);
  if ($Equality.$same(defaultOptions, null)) {
   this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_ChartPointerOptions_ = /**@type {ChartPointerOptions}*/ ($Casts.$to(this.m_loadGlobalsPluginOptions__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(ChartPointer.f_DEFAULTS_FACTORY__org_pepstock_charba_client_impl_plugins_ChartPointer), ChartPointerOptions));
  } else {
   this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_ChartPointerOptions_ = defaultOptions;
  }
 }
 
 m_setElements__arrayOf_org_pepstock_charba_client_impl_plugins_enums_PointerElement(/** Array<PointerElement> */ elements) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_ELEMENTS__org_pepstock_charba_client_impl_plugins_ChartPointerOptions_Property, ArrayString_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_commons_Key(elements));
 }
 /** @override @return {List<PointerElement>} */
 m_getElements__() {
  if (this.m_has__org_pepstock_charba_client_commons_Key(Property.f_ELEMENTS__org_pepstock_charba_client_impl_plugins_ChartPointerOptions_Property)) {
   let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_ELEMENTS__org_pepstock_charba_client_impl_plugins_ChartPointerOptions_Property), ArrayString_$Overlay));
   return /**@type {ArrayEnumList<PointerElement>}*/ (ArrayListHelper.m_list__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayString(PointerElement.m_values__(), array));
  }
  return this.f_defaultOptions__org_pepstock_charba_client_impl_plugins_ChartPointerOptions_.m_getElements__();
 }
 /** @return {List<PointerElement>} */
 static get f_DEFAULTS_ELEMENTS__org_pepstock_charba_client_impl_plugins_ChartPointerOptions() {
  return (ChartPointerOptions.$clinit(), ChartPointerOptions.$static_DEFAULTS_ELEMENTS__org_pepstock_charba_client_impl_plugins_ChartPointerOptions);
 }
 
 static $clinit() {
  ChartPointerOptions.$clinit = () =>{};
  ChartPointerOptions.$loadModules();
  AbstractCursorPointerOptions.$clinit();
  IsChartPointerDefaultOptions.$clinit();
  ChartPointerOptions.$static_DEFAULTS_ELEMENTS__org_pepstock_charba_client_impl_plugins_ChartPointerOptions = /**@type {List<PointerElement>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(PointerElement.m_values__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartPointerOptions;
 }
 
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayString_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  ChartPointer = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointer$impl');
  Property = goog.module.get('org.pepstock.charba.client.impl.plugins.ChartPointerOptions.Property$impl');
  PointerElement = goog.module.get('org.pepstock.charba.client.impl.plugins.enums.PointerElement$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {List<PointerElement>}*/
ChartPointerOptions.$static_DEFAULTS_ELEMENTS__org_pepstock_charba_client_impl_plugins_ChartPointerOptions;
IsChartPointerDefaultOptions.$markImplementor(ChartPointerOptions);
$Util.$setClassMetadata(ChartPointerOptions, "org.pepstock.charba.client.impl.plugins.ChartPointerOptions");

exports = ChartPointerOptions;

//# sourceMappingURL=ChartPointerOptions.js.map
