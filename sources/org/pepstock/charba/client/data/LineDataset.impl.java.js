goog.module('org.pepstock.charba.client.data.LineDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasDataPoints = goog.require('org.pepstock.charba.client.data.HasDataPoints$impl');
const LiningDataset = goog.require('org.pepstock.charba.client.data.LiningDataset$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let CubicInterpolationModeCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CubicInterpolationModeCallback$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayString_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let ArrayStringList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayStringList$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let InternalProperty = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.InternalProperty$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.data.LineDataset.Property$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
let CubicInterpolationMode = goog.forwardDeclare('org.pepstock.charba.client.enums.CubicInterpolationMode$impl');
let DataType = goog.forwardDeclare('org.pepstock.charba.client.enums.DataType$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let IndexAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.IndexAxis$impl');
let Stepped = goog.forwardDeclare('org.pepstock.charba.client.enums.Stepped$impl');
let IsScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.IsScaleId$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {HasDataPoints}
 */
class LineDataset extends LiningDataset {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/
  this.f_cubicInterpolationModeCallbackProxy__org_pepstock_charba_client_data_LineDataset_;
  /**@type {CubicInterpolationModeCallback}*/
  this.f_cubicInterpolationModeCallback__org_pepstock_charba_client_data_LineDataset_;
 }
 //Factory method corresponding to constructor 'LineDataset()'.
 /** @return {!LineDataset} */
 static $create__() {
  LineDataset.$clinit();
  let $instance = new LineDataset();
  $instance.$ctor__org_pepstock_charba_client_data_LineDataset__();
  return $instance;
 }
 //Initialization from constructor 'LineDataset()'.
 
 $ctor__org_pepstock_charba_client_data_LineDataset__() {
  this.$ctor__org_pepstock_charba_client_data_LineDataset__boolean(Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'LineDataset(boolean)'.
 /** @return {!LineDataset} */
 static $create__boolean(/** boolean */ hidden) {
  LineDataset.$clinit();
  let $instance = new LineDataset();
  $instance.$ctor__org_pepstock_charba_client_data_LineDataset__boolean(hidden);
  return $instance;
 }
 //Initialization from constructor 'LineDataset(boolean)'.
 
 $ctor__org_pepstock_charba_client_data_LineDataset__boolean(/** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_Type__boolean(ChartType.f_LINE__org_pepstock_charba_client_ChartType, hidden);
 }
 //Factory method corresponding to constructor 'LineDataset(IsDefaultOptions)'.
 /** @return {!LineDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  LineDataset.$clinit();
  let $instance = new LineDataset();
  $instance.$ctor__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(defaultValues);
  return $instance;
 }
 //Initialization from constructor 'LineDataset(IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'LineDataset(IsDefaultOptions, boolean)'.
 /** @return {!LineDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  LineDataset.$clinit();
  let $instance = new LineDataset();
  $instance.$ctor__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'LineDataset(IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(ChartType.f_LINE__org_pepstock_charba_client_ChartType, defaultValues, hidden);
 }
 //Factory method corresponding to constructor 'LineDataset(Type, boolean)'.
 /** @return {!LineDataset} */
 static $create__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  LineDataset.$clinit();
  let $instance = new LineDataset();
  $instance.$ctor__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_Type__boolean(type, hidden);
  return $instance;
 }
 //Initialization from constructor 'LineDataset(Type, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, null, hidden);
 }
 //Factory method corresponding to constructor 'LineDataset(Type, IsDefaultOptions, boolean)'.
 /** @return {!LineDataset} */
 static $create__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  LineDataset.$clinit();
  let $instance = new LineDataset();
  $instance.$ctor__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'LineDataset(Type, IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_LiningDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  this.$init___$p_org_pepstock_charba_client_data_LineDataset();
  this.f_cubicInterpolationModeCallbackProxy__org_pepstock_charba_client_data_LineDataset_.callback = (/** Object */ contextFunction, /** ? */ context) =>{
   return this.m_onCubicInterpolationMode__org_pepstock_charba_client_callbacks_DatasetContext_$p_org_pepstock_charba_client_data_LineDataset(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context));
  };
 }
 
 m_setXAxisID__java_lang_String(/** ?string */ xAxisID) {
  IsScaleId.m_checkIfValid__java_lang_String(xAxisID);
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_X_AXIS_ID__org_pepstock_charba_client_data_LineDataset_Property, xAxisID);
 }
 
 m_setXAxisID__org_pepstock_charba_client_options_IsScaleId(/** IsScaleId */ xAxisID) {
  IsScaleId.m_checkIfValid__org_pepstock_charba_client_options_IsScaleId(xAxisID);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_X_AXIS_ID__org_pepstock_charba_client_data_LineDataset_Property, xAxisID);
 }
 /** @return {IsScaleId} */
 m_getXAxisID__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_options_IsScaleId(Property.f_X_AXIS_ID__org_pepstock_charba_client_data_LineDataset_Property, DefaultScaleId.f_X__org_pepstock_charba_client_enums_DefaultScaleId);
 }
 
 m_setYAxisID__java_lang_String(/** ?string */ yAxisID) {
  IsScaleId.m_checkIfValid__java_lang_String(yAxisID);
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_Y_AXIS_ID__org_pepstock_charba_client_data_LineDataset_Property, yAxisID);
 }
 
 m_setYAxisID__org_pepstock_charba_client_options_IsScaleId(/** IsScaleId */ yAxisID) {
  IsScaleId.m_checkIfValid__org_pepstock_charba_client_options_IsScaleId(yAxisID);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_Y_AXIS_ID__org_pepstock_charba_client_data_LineDataset_Property, yAxisID);
 }
 /** @return {IsScaleId} */
 m_getYAxisID__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_options_IsScaleId(Property.f_Y_AXIS_ID__org_pepstock_charba_client_data_LineDataset_Property, DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId);
 }
 
 m_setIndexAxis__org_pepstock_charba_client_enums_IndexAxis(/** IndexAxis */ indexAxis) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_INDEX_AXIS__org_pepstock_charba_client_data_LineDataset_Property, indexAxis);
 }
 /** @return {IndexAxis} */
 m_getIndexAxis__() {
  return /**@type {IndexAxis}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_INDEX_AXIS__org_pepstock_charba_client_data_LineDataset_Property, IndexAxis.m_values__(), this.m_getDefaultValues__().m_getIndexAxis__()), IndexAxis));
 }
 
 m_setCubicInterpolationMode__org_pepstock_charba_client_enums_CubicInterpolationMode(/** CubicInterpolationMode */ mode) {
  this.m_setCubicInterpolationMode__org_pepstock_charba_client_callbacks_CubicInterpolationModeCallback(/**@type {CubicInterpolationModeCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_data_LineDataset_Property, mode);
 }
 /** @return {CubicInterpolationMode} */
 m_getCubicInterpolationMode__() {
  if ($Equality.$same(this.m_getCubicInterpolationModeCallback__(), null)) {
   return /**@type {CubicInterpolationMode}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_data_LineDataset_Property, CubicInterpolationMode.m_values__(), this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getCubicInterpolationMode__()), CubicInterpolationMode));
  }
  return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getCubicInterpolationMode__();
 }
 
 m_setShowLine__boolean(/** boolean */ showLine) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_SHOW_LINE__org_pepstock_charba_client_data_LineDataset_Property, showLine);
 }
 /** @return {boolean} */
 m_isShowLine__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_SHOW_LINE__org_pepstock_charba_client_data_LineDataset_Property, this.m_getTypedDataset__().m_isShowLine__());
 }
 
 m_setStepped__boolean(/** boolean */ line) {
  if (!line) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_STEPPED__org_pepstock_charba_client_data_LineDataset_Property, false);
  } else {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_STEPPED__org_pepstock_charba_client_data_LineDataset_Property, Stepped.f_BEFORE__org_pepstock_charba_client_enums_Stepped);
  }
 }
 
 m_setStepped__org_pepstock_charba_client_enums_Stepped(/** Stepped */ line) {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(Stepped.f_FALSE__org_pepstock_charba_client_enums_Stepped, line)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_STEPPED__org_pepstock_charba_client_data_LineDataset_Property, false);
  } else {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_STEPPED__org_pepstock_charba_client_data_LineDataset_Property, line);
  }
 }
 /** @return {Stepped} */
 m_getStepped__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_STEPPED__org_pepstock_charba_client_data_LineDataset_Property, ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType)) {
   return Stepped.f_FALSE__org_pepstock_charba_client_enums_Stepped;
  } else {
   return /**@type {Stepped}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_STEPPED__org_pepstock_charba_client_data_LineDataset_Property, Stepped.m_values__(), Stepped.f_FALSE__org_pepstock_charba_client_enums_Stepped), Stepped));
  }
 }
 
 m_setDataString__arrayOf_java_lang_String(/** Array<?string> */ data) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(InternalProperty.f_DATA__org_pepstock_charba_client_data_Dataset_InternalProperty, ArrayString_$Overlay.m_fromOrNull__arrayOf_java_lang_String(data));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(InternalProperty.f_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty, this.m_has__org_pepstock_charba_client_commons_Key(InternalProperty.f_DATA__org_pepstock_charba_client_data_Dataset_InternalProperty) ? DataType.f_STRINGS__org_pepstock_charba_client_enums_DataType : DataType.f_UNKNOWN__org_pepstock_charba_client_enums_DataType);
 }
 
 m_setDataString__java_util_List(/** List<?string> */ data) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(InternalProperty.f_DATA__org_pepstock_charba_client_data_Dataset_InternalProperty, ArrayString_$Overlay.m_fromOrNull__java_util_List(data));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(InternalProperty.f_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty, this.m_has__org_pepstock_charba_client_commons_Key(InternalProperty.f_DATA__org_pepstock_charba_client_data_Dataset_InternalProperty) ? DataType.f_STRINGS__org_pepstock_charba_client_enums_DataType : DataType.f_UNKNOWN__org_pepstock_charba_client_enums_DataType);
 }
 /** @return {List<?string>} */
 m_getDataString__() {
  return this.m_getDataString__boolean(false);
 }
 /** @return {List<?string>} */
 m_getDataString__boolean(/** boolean */ binding) {
  if (this.m_has__org_pepstock_charba_client_commons_Key(InternalProperty.f_DATA__org_pepstock_charba_client_data_Dataset_InternalProperty) && $Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_STRINGS__org_pepstock_charba_client_enums_DataType, this.m_getDataType__())) {
   let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(InternalProperty.f_DATA__org_pepstock_charba_client_data_Dataset_InternalProperty), ArrayString_$Overlay));
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayString(array);
  }
  if (binding) {
   let result = ArrayStringList.$create__();
   this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(InternalProperty.f_DATA__org_pepstock_charba_client_data_Dataset_InternalProperty, ArrayString_$Overlay.m_fromOrEmpty__java_util_List(result));
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(InternalProperty.f_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty, DataType.f_STRINGS__org_pepstock_charba_client_enums_DataType);
   return result;
  }
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 /** @return {CubicInterpolationModeCallback} */
 m_getCubicInterpolationModeCallback__() {
  return this.f_cubicInterpolationModeCallback__org_pepstock_charba_client_data_LineDataset_;
 }
 
 m_setCubicInterpolationMode__org_pepstock_charba_client_callbacks_CubicInterpolationModeCallback(/** CubicInterpolationModeCallback */ cubicInterpolationModeCallback) {
  this.f_cubicInterpolationModeCallback__org_pepstock_charba_client_data_LineDataset_ = cubicInterpolationModeCallback;
  if (!$Equality.$same(cubicInterpolationModeCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_data_LineDataset_Property, this.f_cubicInterpolationModeCallbackProxy__org_pepstock_charba_client_data_LineDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_data_LineDataset_Property);
  }
 }
 /** @return {?string} */
 m_onCubicInterpolationMode__org_pepstock_charba_client_callbacks_DatasetContext_$p_org_pepstock_charba_client_data_LineDataset(/** DatasetContext */ context) {
  let result = /**@type {CubicInterpolationMode}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, this.m_getCubicInterpolationModeCallback__()), CubicInterpolationMode));
  if (!$Equality.$same(result, null)) {
   return result.m_value__();
  }
  return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getCubicInterpolationMode__().m_value__();
 }
 //Default method forwarding stub.
 /** @override @return {List<DataPoint>} */
 m_getDataPoints__() {
  return HasDataPoints.m_getDataPoints__$default__org_pepstock_charba_client_data_HasDataPoints(this);
 }
 //Default method forwarding stub.
 /** @override @return {List<DataPoint>} */
 m_getDataPoints__boolean(/** boolean */ arg0) {
  return HasDataPoints.m_getDataPoints__$default__org_pepstock_charba_client_data_HasDataPoints__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(/** Array<DataPoint> */ arg0) {
  HasDataPoints.m_setDataPoints__$default__org_pepstock_charba_client_data_HasDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setDataPoints__java_util_List(/** List<DataPoint> */ arg0) {
  HasDataPoints.m_setDataPoints__$default__org_pepstock_charba_client_data_HasDataPoints__java_util_List(this, arg0);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_data_LineDataset() {
  this.f_cubicInterpolationModeCallbackProxy__org_pepstock_charba_client_data_LineDataset_ = /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_cubicInterpolationModeCallback__org_pepstock_charba_client_data_LineDataset_ = null;
 }
 
 static $clinit() {
  LineDataset.$clinit = () =>{};
  LineDataset.$loadModules();
  LiningDataset.$clinit();
  HasDataPoints.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LineDataset;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayString_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  ArrayStringList = goog.module.get('org.pepstock.charba.client.commons.ArrayStringList$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  InternalProperty = goog.module.get('org.pepstock.charba.client.data.Dataset.InternalProperty$impl');
  Property = goog.module.get('org.pepstock.charba.client.data.LineDataset.Property$impl');
  CubicInterpolationMode = goog.module.get('org.pepstock.charba.client.enums.CubicInterpolationMode$impl');
  DataType = goog.module.get('org.pepstock.charba.client.enums.DataType$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  IndexAxis = goog.module.get('org.pepstock.charba.client.enums.IndexAxis$impl');
  Stepped = goog.module.get('org.pepstock.charba.client.enums.Stepped$impl');
  IsScaleId = goog.module.get('org.pepstock.charba.client.options.IsScaleId$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
HasDataPoints.$markImplementor(LineDataset);
$Util.$setClassMetadata(LineDataset, "org.pepstock.charba.client.data.LineDataset");

exports = LineDataset;

//# sourceMappingURL=LineDataset.js.map
