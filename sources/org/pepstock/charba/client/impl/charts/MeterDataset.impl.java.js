goog.module('org.pepstock.charba.client.impl.charts.MeterDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Dataset = goog.require('org.pepstock.charba.client.data.Dataset$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let Color = goog.forwardDeclare('org.pepstock.charba.client.colors.Color$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
let ArrayString_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let ControllerType = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerType$impl');
let CanvasObjectProperty = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.CanvasObjectProperty$impl');
let CommonProperty = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.CommonProperty$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
let DefaultTransitionKey = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultTransitionKey$impl');
let MeterChart = goog.forwardDeclare('org.pepstock.charba.client.impl.charts.MeterChart$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

class MeterDataset extends Dataset {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_max__org_pepstock_charba_client_impl_charts_MeterDataset_ = 0;
  /**@type {number}*/
  this.f_value__org_pepstock_charba_client_impl_charts_MeterDataset_ = 0;
  /**@type {number}*/
  this.f_valueMaximumRatio__org_pepstock_charba_client_impl_charts_MeterDataset_ = 0;
 }
 //Factory method corresponding to constructor 'MeterDataset(double)'.
 /** @return {!MeterDataset} */
 static $create__double(/** number */ max) {
  MeterDataset.$clinit();
  let $instance = new MeterDataset();
  $instance.$ctor__org_pepstock_charba_client_impl_charts_MeterDataset__double(max);
  return $instance;
 }
 //Initialization from constructor 'MeterDataset(double)'.
 
 $ctor__org_pepstock_charba_client_impl_charts_MeterDataset__double(/** number */ max) {
  this.$ctor__org_pepstock_charba_client_impl_charts_MeterDataset__double__org_pepstock_charba_client_defaults_IsDefaultOptions(max, Defaults.m_get__().m_getGlobal__());
 }
 //Factory method corresponding to constructor 'MeterDataset(double, IsDefaultOptions)'.
 /** @return {!MeterDataset} */
 static $create__double__org_pepstock_charba_client_defaults_IsDefaultOptions(/** number */ max, /** IsDefaultOptions */ defaultValues) {
  MeterDataset.$clinit();
  let $instance = new MeterDataset();
  $instance.$ctor__org_pepstock_charba_client_impl_charts_MeterDataset__double__org_pepstock_charba_client_defaults_IsDefaultOptions(max, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'MeterDataset(double, IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_impl_charts_MeterDataset__double__org_pepstock_charba_client_defaults_IsDefaultOptions(/** number */ max, /** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_impl_charts_MeterDataset__org_pepstock_charba_client_controllers_ControllerType__double__org_pepstock_charba_client_defaults_IsDefaultOptions(MeterChart.f_CONTROLLER_TYPE__org_pepstock_charba_client_impl_charts_MeterChart, max, defaultValues);
 }
 //Factory method corresponding to constructor 'MeterDataset(ControllerType, double, IsDefaultOptions)'.
 /** @return {!MeterDataset} */
 static $create__org_pepstock_charba_client_controllers_ControllerType__double__org_pepstock_charba_client_defaults_IsDefaultOptions(/** ControllerType */ type, /** number */ max, /** IsDefaultOptions */ defaultValues) {
  MeterDataset.$clinit();
  let $instance = new MeterDataset();
  $instance.$ctor__org_pepstock_charba_client_impl_charts_MeterDataset__org_pepstock_charba_client_controllers_ControllerType__double__org_pepstock_charba_client_defaults_IsDefaultOptions(type, max, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'MeterDataset(ControllerType, double, IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_impl_charts_MeterDataset__org_pepstock_charba_client_controllers_ControllerType__double__org_pepstock_charba_client_defaults_IsDefaultOptions(/** ControllerType */ type, /** number */ max, /** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
  this.$init___$p_org_pepstock_charba_client_impl_charts_MeterDataset();
  this.f_max__org_pepstock_charba_client_impl_charts_MeterDataset_ = Math.max(max, MeterDataset.f_MINIMUM_VALUE__org_pepstock_charba_client_impl_charts_MeterDataset);
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(CommonProperty.f_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, $Overlay.m_fromOrNull__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([0, 0], $int))));
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(CommonProperty.f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, $Overlay.m_fromOrNull__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([0, 0], $int))));
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, ArrayString_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([MeterDataset.$static_DEFAULT_VALUE_COLOR__org_pepstock_charba_client_impl_charts_MeterDataset, MeterDataset.$static_DEFAULT_EMPTY_VALUE_COLOR__org_pepstock_charba_client_impl_charts_MeterDataset], IsColor))));
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, ArrayString_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {!Array<IsColor>}*/ ($Arrays.$init([MeterDataset.$static_DEFAULT_VALUE_COLOR__org_pepstock_charba_client_impl_charts_MeterDataset, MeterDataset.$static_DEFAULT_EMPTY_VALUE_COLOR__org_pepstock_charba_client_impl_charts_MeterDataset], IsColor))));
  this.m_getTransitions__().m_create__org_pepstock_charba_client_options_IsTransitionKey(DefaultTransitionKey.f_ACTIVE__org_pepstock_charba_client_enums_DefaultTransitionKey).m_getAnimation__().m_setDuration__int(0);
 }
 
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ valueColor) {
  this.m_setColor__java_lang_String(IsColor.m_isConsistent__org_pepstock_charba_client_colors_IsColor(valueColor) ? valueColor.m_toRGBA__() : MeterDataset.$static_DEFAULT_VALUE_COLOR_AS_STRING__org_pepstock_charba_client_impl_charts_MeterDataset);
 }
 
 m_setColor__java_lang_String(/** ?string */ valueColor) {
  let valueToSet = !$Equality.$same(valueColor, null) ? valueColor : MeterDataset.$static_DEFAULT_VALUE_COLOR_AS_STRING__org_pepstock_charba_client_impl_charts_MeterDataset;
  let array = ArrayString_$Overlay.m_fromOrEmpty__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([valueToSet, this.m_getEmptyColorAsString__()], j_l_String)));
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, array);
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, array);
 }
 /** @return {?string} */
 m_getColorAsString__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty), ArrayString_$Overlay));
  return ArrayString_$Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayString__int(array, 0);
 }
 /** @return {IsColor} */
 m_getColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getColorAsString__());
 }
 
 m_setEmptyColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ emptyValueColor) {
  this.m_setEmptyColor__java_lang_String(IsColor.m_isConsistent__org_pepstock_charba_client_colors_IsColor(emptyValueColor) ? emptyValueColor.m_toRGBA__() : MeterDataset.$static_DEFAULT_EMPTY_VALUE_COLOR_AS_STRING__org_pepstock_charba_client_impl_charts_MeterDataset);
 }
 
 m_setEmptyColor__java_lang_String(/** ?string */ emptyValueColor) {
  let valueToSet = !$Equality.$same(emptyValueColor, null) ? emptyValueColor : MeterDataset.$static_DEFAULT_EMPTY_VALUE_COLOR_AS_STRING__org_pepstock_charba_client_impl_charts_MeterDataset;
  let array = ArrayString_$Overlay.m_fromOrEmpty__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([this.m_getColorAsString__(), valueToSet], j_l_String)));
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, array);
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, array);
 }
 /** @return {?string} */
 m_getEmptyColorAsString__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty), ArrayString_$Overlay));
  if (!$Equality.$same(array, null)) {
   return ArrayString_$Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayString__int(array, 1);
  } else {
   return MeterDataset.$static_DEFAULT_EMPTY_VALUE_COLOR_AS_STRING__org_pepstock_charba_client_impl_charts_MeterDataset;
  }
 }
 /** @return {IsColor} */
 m_getEmptyColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getColorAsString__());
 }
 /** @return {number} */
 m_getMax__() {
  return this.f_max__org_pepstock_charba_client_impl_charts_MeterDataset_;
 }
 /** @return {number} */
 m_getValue__() {
  return this.f_value__org_pepstock_charba_client_impl_charts_MeterDataset_;
 }
 /** @return {number} */
 m_getValueMaximumRatio___$pp_org_pepstock_charba_client_impl_charts() {
  return this.f_valueMaximumRatio__org_pepstock_charba_client_impl_charts_MeterDataset_;
 }
 
 m_setValue__double(/** number */ value) {
  this.f_value__org_pepstock_charba_client_impl_charts_MeterDataset_ = Undefined.m_is__double(value) ? 0 : Math.max(Math.min(this.f_max__org_pepstock_charba_client_impl_charts_MeterDataset_, value), MeterDataset.f_MINIMUM_VALUE__org_pepstock_charba_client_impl_charts_MeterDataset);
  super.m_setData__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([this.f_value__org_pepstock_charba_client_impl_charts_MeterDataset_, Math.max(MeterDataset.f_MINIMUM_VALUE__org_pepstock_charba_client_impl_charts_MeterDataset, this.f_max__org_pepstock_charba_client_impl_charts_MeterDataset_ - value)], $double)));
  this.f_valueMaximumRatio__org_pepstock_charba_client_impl_charts_MeterDataset_ = Math.abs(value / Math.max(Math.abs(this.f_max__org_pepstock_charba_client_impl_charts_MeterDataset_), 1));
 }
 
 m_hide___$pp_org_pepstock_charba_client_impl_charts() {
  super.m_setHidden__boolean(true);
 }
 /** @override */
 m_setData__arrayOf_double(/** Array<number> */ values) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(MeterDataset.f_INVALID_SET_DATA_CALL__org_pepstock_charba_client_impl_charts_MeterDataset_));
 }
 /** @override */
 m_setData__java_util_List(/** List<?number> */ values) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(MeterDataset.f_INVALID_SET_DATA_CALL__org_pepstock_charba_client_impl_charts_MeterDataset_));
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_impl_charts_MeterDataset() {
  this.f_value__org_pepstock_charba_client_impl_charts_MeterDataset_ = MeterDataset.f_MINIMUM_VALUE__org_pepstock_charba_client_impl_charts_MeterDataset;
  this.f_valueMaximumRatio__org_pepstock_charba_client_impl_charts_MeterDataset_ = Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {IsColor} */
 static get f_DEFAULT_VALUE_COLOR__org_pepstock_charba_client_impl_charts_MeterDataset() {
  return (MeterDataset.$clinit(), MeterDataset.$static_DEFAULT_VALUE_COLOR__org_pepstock_charba_client_impl_charts_MeterDataset);
 }
 /** @return {?string} */
 static get f_DEFAULT_VALUE_COLOR_AS_STRING__org_pepstock_charba_client_impl_charts_MeterDataset() {
  return (MeterDataset.$clinit(), MeterDataset.$static_DEFAULT_VALUE_COLOR_AS_STRING__org_pepstock_charba_client_impl_charts_MeterDataset);
 }
 /** @return {IsColor} */
 static get f_DEFAULT_EMPTY_VALUE_COLOR__org_pepstock_charba_client_impl_charts_MeterDataset() {
  return (MeterDataset.$clinit(), MeterDataset.$static_DEFAULT_EMPTY_VALUE_COLOR__org_pepstock_charba_client_impl_charts_MeterDataset);
 }
 /** @return {?string} */
 static get f_DEFAULT_EMPTY_VALUE_COLOR_AS_STRING__org_pepstock_charba_client_impl_charts_MeterDataset() {
  return (MeterDataset.$clinit(), MeterDataset.$static_DEFAULT_EMPTY_VALUE_COLOR_AS_STRING__org_pepstock_charba_client_impl_charts_MeterDataset);
 }
 
 static $clinit() {
  MeterDataset.$clinit = () =>{};
  MeterDataset.$loadModules();
  Dataset.$clinit();
  MeterDataset.$static_DEFAULT_VALUE_COLOR__org_pepstock_charba_client_impl_charts_MeterDataset = Color.$create__int__int__int(140, 214, 16);
  MeterDataset.$static_DEFAULT_VALUE_COLOR_AS_STRING__org_pepstock_charba_client_impl_charts_MeterDataset = MeterDataset.$static_DEFAULT_VALUE_COLOR__org_pepstock_charba_client_impl_charts_MeterDataset.m_toRGBA__();
  MeterDataset.$static_DEFAULT_EMPTY_VALUE_COLOR__org_pepstock_charba_client_impl_charts_MeterDataset = Color.$create__int__int__int(234, 234, 234);
  MeterDataset.$static_DEFAULT_EMPTY_VALUE_COLOR_AS_STRING__org_pepstock_charba_client_impl_charts_MeterDataset = MeterDataset.$static_DEFAULT_EMPTY_VALUE_COLOR__org_pepstock_charba_client_impl_charts_MeterDataset.m_toRGBA__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MeterDataset;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Color = goog.module.get('org.pepstock.charba.client.colors.Color$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
  ArrayString_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  CanvasObjectProperty = goog.module.get('org.pepstock.charba.client.data.Dataset.CanvasObjectProperty$impl');
  CommonProperty = goog.module.get('org.pepstock.charba.client.data.Dataset.CommonProperty$impl');
  DefaultTransitionKey = goog.module.get('org.pepstock.charba.client.enums.DefaultTransitionKey$impl');
  MeterChart = goog.module.get('org.pepstock.charba.client.impl.charts.MeterChart$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $double = goog.module.get('vmbootstrap.primitives.$double$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
/**@const {?string}*/
MeterDataset.f_INVALID_SET_DATA_CALL__org_pepstock_charba_client_impl_charts_MeterDataset_ = "'setData' method is not invokable by a meter chart. Use 'setValue' method";
/**@private {IsColor}*/
MeterDataset.$static_DEFAULT_VALUE_COLOR__org_pepstock_charba_client_impl_charts_MeterDataset;
/**@private {?string}*/
MeterDataset.$static_DEFAULT_VALUE_COLOR_AS_STRING__org_pepstock_charba_client_impl_charts_MeterDataset;
/**@private {IsColor}*/
MeterDataset.$static_DEFAULT_EMPTY_VALUE_COLOR__org_pepstock_charba_client_impl_charts_MeterDataset;
/**@private {?string}*/
MeterDataset.$static_DEFAULT_EMPTY_VALUE_COLOR_AS_STRING__org_pepstock_charba_client_impl_charts_MeterDataset;
/**@const {number}*/
MeterDataset.f_DEFAULT_MAXIMUM_VALUE__org_pepstock_charba_client_impl_charts_MeterDataset = 100;
/**@const {number}*/
MeterDataset.f_MINIMUM_VALUE__org_pepstock_charba_client_impl_charts_MeterDataset = 0;
$Util.$setClassMetadata(MeterDataset, "org.pepstock.charba.client.impl.charts.MeterDataset");

exports = MeterDataset;

//# sourceMappingURL=MeterDataset.js.map
