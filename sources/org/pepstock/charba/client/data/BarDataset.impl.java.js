goog.module('org.pepstock.charba.client.data.BarDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasDataPoints = goog.require('org.pepstock.charba.client.data.HasDataPoints$impl');
const HasOrder = goog.require('org.pepstock.charba.client.data.HasOrder$impl');
const HovingFlexDataset = goog.require('org.pepstock.charba.client.data.HovingFlexDataset$impl');
const HasBarDatasetOptions = goog.require('org.pepstock.charba.client.options.HasBarDatasetOptions$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let BarBorderWidthCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BarBorderWidthCallback$impl');
let BaseCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BaseCallback$impl');
let BorderRadiusCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderRadiusCallback$impl');
let BorderSkippedCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderSkippedCallback$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let EnableBorderRadiusCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.EnableBorderRadiusCallback$impl');
let PointStyleCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PointStyleCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let ArrayDouble_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
let ArrayDoubleArray_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayDoubleArray.$Overlay$impl');
let ArrayDoubleArrayList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayDoubleArrayList$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayMixedObject_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayMixedObject.$Overlay$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let BarBorderRadius = goog.forwardDeclare('org.pepstock.charba.client.data.BarBorderRadius$impl');
let BarBorderWidth = goog.forwardDeclare('org.pepstock.charba.client.data.BarBorderWidth$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.data.BarDataset.Property$impl');
let BorderItemsHandler = goog.forwardDeclare('org.pepstock.charba.client.data.BorderItemsHandler$impl');
let DataEnvelop = goog.forwardDeclare('org.pepstock.charba.client.data.DataEnvelop$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let CommonProperty = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.CommonProperty$impl');
let InternalProperty = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.InternalProperty$impl');
let FloatingData = goog.forwardDeclare('org.pepstock.charba.client.data.FloatingData$impl');
let FloatingDatatFactory = goog.forwardDeclare('org.pepstock.charba.client.data.FloatingDatatFactory$impl');
let OrderHandler = goog.forwardDeclare('org.pepstock.charba.client.data.OrderHandler$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
let Canvas_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let Img_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Img.$Overlay$impl');
let BorderSkipped = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderSkipped$impl');
let DataType = goog.forwardDeclare('org.pepstock.charba.client.enums.DataType$impl');
let DefaultScaleId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultScaleId$impl');
let IndexAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.IndexAxis$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let PointStyleType = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyleType$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let BarDatasetOptionsHandler = goog.forwardDeclare('org.pepstock.charba.client.options.BarDatasetOptionsHandler$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {HasDataPoints}
 * @implements {HasOrder}
 * @implements {HasBarDatasetOptions}
 */
class BarDataset extends HovingFlexDataset {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_borderSkippedCallbackProxy__org_pepstock_charba_client_data_BarDataset_;
  /**@type {CharbaCallbackProxy<?function(?):?>}*/
  this.f_borderRadiusCallbackProxy__org_pepstock_charba_client_data_BarDataset_;
  /**@type {CharbaCallbackProxy<?function(?):?>}*/
  this.f_borderWidthCallbackProxy__org_pepstock_charba_client_data_BarDataset_;
  /**@type {CharbaCallbackProxy<?function(?):?>}*/
  this.f_hoverBorderWidthCallbackProxy__org_pepstock_charba_client_data_BarDataset_;
  /**@type {CharbaCallbackProxy<?function(?):?>}*/
  this.f_hoverBorderRadiusCallbackProxy__org_pepstock_charba_client_data_BarDataset_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_pointStyleCallbackProxy__org_pepstock_charba_client_data_BarDataset_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_baseCallbackProxy__org_pepstock_charba_client_data_BarDataset_;
  /**@type {CharbaCallbackProxy<?function(?):boolean>}*/
  this.f_enableBorderRadiusCallbackProxy__org_pepstock_charba_client_data_BarDataset_;
  /**@type {BorderSkippedCallback}*/
  this.f_borderSkippedCallback__org_pepstock_charba_client_data_BarDataset_;
  /**@type {BorderRadiusCallback}*/
  this.f_borderRadiusCallback__org_pepstock_charba_client_data_BarDataset_;
  /**@type {BarBorderWidthCallback}*/
  this.f_hoverBorderWidthCallback__org_pepstock_charba_client_data_BarDataset_;
  /**@type {BarBorderWidthCallback}*/
  this.f_borderWidthCallback__org_pepstock_charba_client_data_BarDataset_;
  /**@type {BorderRadiusCallback}*/
  this.f_hoverBorderRadiusCallback__org_pepstock_charba_client_data_BarDataset_;
  /**@type {EnableBorderRadiusCallback}*/
  this.f_enableBorderRadiusCallback__org_pepstock_charba_client_data_BarDataset_;
  /**@type {PointStyleCallback}*/
  this.f_pointStyleCallback__org_pepstock_charba_client_data_BarDataset_;
  /**@type {BaseCallback}*/
  this.f_baseCallback__org_pepstock_charba_client_data_BarDataset_;
  /**@type {OrderHandler}*/
  this.f_orderHandler__org_pepstock_charba_client_data_BarDataset_;
  /**@type {BarDatasetOptionsHandler}*/
  this.f_barOptionsHandler__org_pepstock_charba_client_data_BarDataset_;
  /**@type {BorderItemsHandler}*/
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_;
 }
 //Factory method corresponding to constructor 'BarDataset()'.
 /** @return {!BarDataset} */
 static $create__() {
  BarDataset.$clinit();
  let $instance = new BarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_BarDataset__();
  return $instance;
 }
 //Initialization from constructor 'BarDataset()'.
 
 $ctor__org_pepstock_charba_client_data_BarDataset__() {
  this.$ctor__org_pepstock_charba_client_data_BarDataset__boolean(Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'BarDataset(boolean)'.
 /** @return {!BarDataset} */
 static $create__boolean(/** boolean */ hidden) {
  BarDataset.$clinit();
  let $instance = new BarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_BarDataset__boolean(hidden);
  return $instance;
 }
 //Initialization from constructor 'BarDataset(boolean)'.
 
 $ctor__org_pepstock_charba_client_data_BarDataset__boolean(/** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_BarDataset__org_pepstock_charba_client_Type__boolean(ChartType.f_BAR__org_pepstock_charba_client_ChartType, hidden);
 }
 //Factory method corresponding to constructor 'BarDataset(IsDefaultOptions)'.
 /** @return {!BarDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  BarDataset.$clinit();
  let $instance = new BarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_BarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(defaultValues);
  return $instance;
 }
 //Initialization from constructor 'BarDataset(IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_data_BarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_data_BarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'BarDataset(IsDefaultOptions, boolean)'.
 /** @return {!BarDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  BarDataset.$clinit();
  let $instance = new BarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_BarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'BarDataset(IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_BarDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_BarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(ChartType.f_BAR__org_pepstock_charba_client_ChartType, defaultValues, hidden);
 }
 //Factory method corresponding to constructor 'BarDataset(Type, boolean)'.
 /** @return {!BarDataset} */
 static $create__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  BarDataset.$clinit();
  let $instance = new BarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_BarDataset__org_pepstock_charba_client_Type__boolean(type, hidden);
  return $instance;
 }
 //Initialization from constructor 'BarDataset(Type, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_BarDataset__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_BarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, null, hidden);
 }
 //Factory method corresponding to constructor 'BarDataset(Type, IsDefaultOptions, boolean)'.
 /** @return {!BarDataset} */
 static $create__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  BarDataset.$clinit();
  let $instance = new BarDataset();
  $instance.$ctor__org_pepstock_charba_client_data_BarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'BarDataset(Type, IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_BarDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_HovingFlexDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  this.$init___$p_org_pepstock_charba_client_data_BarDataset();
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_ = BorderItemsHandler.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getNativeObject__());
  this.f_orderHandler__org_pepstock_charba_client_data_BarDataset_ = OrderHandler.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getNativeObject__());
  this.f_barOptionsHandler__org_pepstock_charba_client_data_BarDataset_ = BarDatasetOptionsHandler.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultTypedDataset__org_pepstock_charba_client_data_DataEnvelop(this, this.m_getTypedDataset__(), /**@type {!DataEnvelop<?>}*/ (DataEnvelop.$create__java_lang_Object__boolean(this.m_getNativeObject__(), true)));
  this.f_borderSkippedCallbackProxy__org_pepstock_charba_client_data_BarDataset_.callback = (/** ? */ context) =>{
   return this.m_onBorderSkipped__org_pepstock_charba_client_callbacks_DatasetContext_$p_org_pepstock_charba_client_data_BarDataset(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context));
  };
  this.f_borderRadiusCallbackProxy__org_pepstock_charba_client_data_BarDataset_.callback = (/** ? */ context_1) =>{
   return this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_onBorderItem__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_commons_NativeObjectContainerFactory__int_$pp_org_pepstock_charba_client_data(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_1), this.m_getBorderRadiusCallback__(), BarBorderRadius.f_FACTORY__org_pepstock_charba_client_data_BarBorderRadius, this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getBorderRadius__());
  };
  this.f_borderWidthCallbackProxy__org_pepstock_charba_client_data_BarDataset_.callback = (/** ? */ context_2) =>{
   return this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_onBorderItem__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_commons_NativeObjectContainerFactory__int_$pp_org_pepstock_charba_client_data(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_2), this.m_getBorderWidthCallback__(), BarBorderWidth.f_FACTORY__org_pepstock_charba_client_data_BarBorderWidth, this.m_getDefaultBorderWidth__());
  };
  this.f_hoverBorderWidthCallbackProxy__org_pepstock_charba_client_data_BarDataset_.callback = (/** ? */ context_3) =>{
   return this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_onBorderItem__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_commons_NativeObjectContainerFactory__int_$pp_org_pepstock_charba_client_data(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_3), this.m_getHoverBorderWidthCallback__(), BarBorderWidth.f_FACTORY__org_pepstock_charba_client_data_BarBorderWidth, this.m_getDefaultBorderWidth__());
  };
  this.f_hoverBorderRadiusCallbackProxy__org_pepstock_charba_client_data_BarDataset_.callback = (/** ? */ context_4) =>{
   return this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_onBorderItem__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_commons_NativeObjectContainerFactory__int_$pp_org_pepstock_charba_client_data(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_4), this.m_getHoverBorderRadiusCallback__(), BarBorderRadius.f_FACTORY__org_pepstock_charba_client_data_BarBorderRadius, this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getHoverBorderRadius__());
  };
  this.f_pointStyleCallbackProxy__org_pepstock_charba_client_data_BarDataset_.callback = (/** ? */ context_5) =>{
   return this.m_onPointStyle__org_pepstock_charba_client_callbacks_DatasetContext_$p_org_pepstock_charba_client_data_BarDataset(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_5));
  };
  this.f_baseCallbackProxy__org_pepstock_charba_client_data_BarDataset_.callback = (/** ? */ context_6) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_6), this.m_getBaseCallback__(), Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined), Double)));
  };
  this.f_enableBorderRadiusCallbackProxy__org_pepstock_charba_client_data_BarDataset_.callback = (/** ? */ context_7) =>{
   return Boolean.m_booleanValue__java_lang_Boolean(/**@type {?boolean}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_7), this.m_getEnableBorderRadiusCallback__(), this.m_getDefaultValues__().m_getElements__().m_getBar__().m_isEnableBorderRadius__()), Boolean)));
  };
 }
 /** @override @return {OrderHandler} */
 m_getOrderHandler__() {
  return this.f_orderHandler__org_pepstock_charba_client_data_BarDataset_;
 }
 /** @override @return {BarDatasetOptionsHandler} */
 m_getDatasetOptionsHandler__() {
  return this.f_barOptionsHandler__org_pepstock_charba_client_data_BarDataset_;
 }
 /** @override @return {?string} */
 m_getDefaultBackgroundColorAsString__() {
  return this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getBackgroundColorAsString__();
 }
 /** @override @return {?string} */
 m_getDefaultBorderColorAsString__() {
  return this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getBorderColorAsString__();
 }
 /** @override @return {number} */
 m_getDefaultBorderWidth__() {
  return this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getBorderWidth__();
 }
 /** @override @return {?string} */
 m_getDefaultHoverBackgroundColorAsString__() {
  return this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getHoverBackgroundColorAsString__();
 }
 /** @override @return {?string} */
 m_getDefaultHoverBorderColorAsString__() {
  return this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getHoverBorderColorAsString__();
 }
 /** @override @return {number} */
 m_getDefaultHoverBorderWidth__() {
  return this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getHoverBorderWidth__();
 }
 
 m_setBase__arrayOf_double(/** Array<number> */ base) {
  this.m_setBase__org_pepstock_charba_client_callbacks_BaseCallback(/**@type {BaseCallback}*/ (null));
  this.m_setValueOrArrayAndAddToParent__org_pepstock_charba_client_commons_Key__arrayOf_double(Property.f_BASE__org_pepstock_charba_client_data_BarDataset_Property, base);
 }
 /** @return {List<?number>} */
 m_getBase__() {
  if (!this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_BASE__org_pepstock_charba_client_data_BarDataset_Property, ObjectType.f_FUNCTION__org_pepstock_charba_client_commons_ObjectType) && $Equality.$same(this.m_getBaseCallback__(), null)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__double(Property.f_BASE__org_pepstock_charba_client_data_BarDataset_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayDouble(array);
  }
  return /**@type {List<?number>}*/ (Collections.m_emptyList__());
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(InternalProperty.f_LABEL__org_pepstock_charba_client_data_Dataset_InternalProperty, BarDataset.f_DEFAULT_LABEL__org_pepstock_charba_client_data_BarDataset_);
 }
 
 m_setXAxisID__java_lang_String(/** ?string */ xAxisID) {
  ScaleId.m_checkIfValid__java_lang_String(xAxisID);
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_X_AXIS_ID__org_pepstock_charba_client_data_BarDataset_Property, xAxisID);
 }
 
 m_setXAxisID__org_pepstock_charba_client_options_ScaleId(/** ScaleId */ xAxisID) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_X_AXIS_ID__org_pepstock_charba_client_data_BarDataset_Property, xAxisID);
 }
 /** @return {ScaleId} */
 m_getXAxisID__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_options_ScaleId(Property.f_X_AXIS_ID__org_pepstock_charba_client_data_BarDataset_Property, DefaultScaleId.f_X__org_pepstock_charba_client_enums_DefaultScaleId);
 }
 
 m_setYAxisID__java_lang_String(/** ?string */ yAxisID) {
  ScaleId.m_checkIfValid__java_lang_String(yAxisID);
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_Y_AXIS_ID__org_pepstock_charba_client_data_BarDataset_Property, yAxisID);
 }
 
 m_setYAxisID__org_pepstock_charba_client_options_ScaleId(/** ScaleId */ yAxisID) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_Y_AXIS_ID__org_pepstock_charba_client_data_BarDataset_Property, yAxisID);
 }
 /** @return {ScaleId} */
 m_getYAxisID__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_options_ScaleId(Property.f_Y_AXIS_ID__org_pepstock_charba_client_data_BarDataset_Property, DefaultScaleId.f_Y__org_pepstock_charba_client_enums_DefaultScaleId);
 }
 
 m_setIndexAxis__org_pepstock_charba_client_enums_IndexAxis(/** IndexAxis */ indexAxis) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_INDEX_AXIS__org_pepstock_charba_client_data_BarDataset_Property, indexAxis);
 }
 /** @return {IndexAxis} */
 m_getIndexAxis__() {
  return /**@type {IndexAxis}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_INDEX_AXIS__org_pepstock_charba_client_data_BarDataset_Property, IndexAxis.m_values__(), this.m_getDefaultValues__().m_getIndexAxis__()), IndexAxis));
 }
 /** @override */
 m_setBorderWidth__arrayOf_int(/** Array<number> */ borderWidth) {
  this.m_setBorderWidth__org_pepstock_charba_client_callbacks_BarBorderWidthCallback(/**@type {BarBorderWidthCallback}*/ (null));
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_setBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__arrayOf_int_$pp_org_pepstock_charba_client_data(CommonProperty.f_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, Property.f_CHARBA_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property, borderWidth);
 }
 
 m_setBorderWidth__arrayOf_org_pepstock_charba_client_data_BarBorderWidth(/** Array<BarBorderWidth> */ borderWidth) {
  this.m_setBorderWidth__org_pepstock_charba_client_callbacks_BarBorderWidthCallback(/**@type {BarBorderWidthCallback}*/ (null));
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_setBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_data_AbstractBarBorderItem_$pp_org_pepstock_charba_client_data(CommonProperty.f_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, Property.f_CHARBA_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property, borderWidth);
 }
 
 m_setBorderWidth__java_util_List(/** List<BarBorderWidth> */ borderWidth) {
  this.m_setBorderWidth__org_pepstock_charba_client_callbacks_BarBorderWidthCallback(/**@type {BarBorderWidthCallback}*/ (null));
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_setBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__java_util_List__arrayOf_org_pepstock_charba_client_data_AbstractBarBorderItem_$pp_org_pepstock_charba_client_data(CommonProperty.f_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, Property.f_CHARBA_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property, borderWidth, BarDataset.f_BORDER_WIDTH_EMPTY_ARRAY__org_pepstock_charba_client_data_BarDataset_);
 }
 /** @override @return {List<Integer>} */
 m_getBorderWidth__() {
  return this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_getBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__int_$pp_org_pepstock_charba_client_data(CommonProperty.f_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, Property.f_CHARBA_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property, this.m_getDefaultBorderWidth__());
 }
 /** @return {List<BarBorderWidth>} */
 m_getBorderWidthAsObjects__() {
  return /**@type {List<BarBorderWidth>}*/ (this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_getBorderItemAsObjects__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainerFactory__int_$pp_org_pepstock_charba_client_data(CommonProperty.f_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, Property.f_CHARBA_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property, BarBorderWidth.f_FACTORY__org_pepstock_charba_client_data_BarBorderWidth, this.m_getDefaultBorderWidth__()));
 }
 /** @override */
 m_setHoverBorderWidth__arrayOf_int(/** Array<number> */ borderWidth) {
  this.m_setHoverBorderWidth__org_pepstock_charba_client_callbacks_BarBorderWidthCallback(/**@type {BarBorderWidthCallback}*/ (null));
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_setBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__arrayOf_int_$pp_org_pepstock_charba_client_data(CommonProperty.f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, Property.f_CHARBA_HOVER_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property, borderWidth);
 }
 
 m_setHoverBorderWidth__arrayOf_org_pepstock_charba_client_data_BarBorderWidth(/** Array<BarBorderWidth> */ borderWidth) {
  this.m_setHoverBorderWidth__org_pepstock_charba_client_callbacks_BarBorderWidthCallback(/**@type {BarBorderWidthCallback}*/ (null));
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_setBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_data_AbstractBarBorderItem_$pp_org_pepstock_charba_client_data(CommonProperty.f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, Property.f_CHARBA_HOVER_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property, borderWidth);
 }
 
 m_setHoverBorderWidth__java_util_List(/** List<BarBorderWidth> */ borderWidth) {
  this.m_setHoverBorderWidth__org_pepstock_charba_client_callbacks_BarBorderWidthCallback(/**@type {BarBorderWidthCallback}*/ (null));
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_setBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__java_util_List__arrayOf_org_pepstock_charba_client_data_AbstractBarBorderItem_$pp_org_pepstock_charba_client_data(CommonProperty.f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, Property.f_CHARBA_HOVER_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property, borderWidth, BarDataset.f_BORDER_WIDTH_EMPTY_ARRAY__org_pepstock_charba_client_data_BarDataset_);
 }
 /** @override @return {List<Integer>} */
 m_getHoverBorderWidth__() {
  return this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_getBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__int_$pp_org_pepstock_charba_client_data(CommonProperty.f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, Property.f_CHARBA_HOVER_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property, this.m_getDefaultBorderWidth__());
 }
 /** @return {List<BarBorderWidth>} */
 m_getHoverBorderWidthAsObjects__() {
  return /**@type {List<BarBorderWidth>}*/ (this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_getBorderItemAsObjects__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainerFactory__int_$pp_org_pepstock_charba_client_data(CommonProperty.f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, Property.f_CHARBA_HOVER_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property, BarBorderWidth.f_FACTORY__org_pepstock_charba_client_data_BarBorderWidth, this.m_getDefaultBorderWidth__()));
 }
 
 m_setBorderSkipped__boolean(/** boolean */ borderskip) {
  if (!borderskip) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BORDER_SKIPPED__org_pepstock_charba_client_data_BarDataset_Property, BorderSkipped.f_FALSE__org_pepstock_charba_client_enums_BorderSkipped);
  }
 }
 
 m_setBorderSkipped__arrayOf_org_pepstock_charba_client_enums_BorderSkipped(/** Array<BorderSkipped> */ borderskips) {
  this.m_setBorderSkipped__org_pepstock_charba_client_callbacks_BorderSkippedCallback(/**@type {BorderSkippedCallback}*/ (null));
  if (!$Equality.$same(borderskips, null) && borderskips.length > 0) {
   if (borderskips.length == 1) {
    this.m_setSingleBorderSkipped__org_pepstock_charba_client_enums_BorderSkipped_$p_org_pepstock_charba_client_data_BarDataset(borderskips[0]);
   } else {
    this.m_setMultiBorderSkipped__arrayOf_org_pepstock_charba_client_enums_BorderSkipped_$p_org_pepstock_charba_client_data_BarDataset(borderskips);
   }
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_BORDER_SKIPPED__org_pepstock_charba_client_data_BarDataset_Property);
  }
 }
 
 m_setBorderSkipped__java_util_List(/** List<BorderSkipped> */ borderskips) {
  if (!$Equality.$same(borderskips, null) && !borderskips.isEmpty()) {
   this.m_setBorderSkipped__arrayOf_org_pepstock_charba_client_enums_BorderSkipped(/**@type {Array<BorderSkipped>}*/ ($Arrays.$castTo(borderskips.m_toArray__arrayOf_java_lang_Object(/**@type {!Array<BorderSkipped>}*/ ($Arrays.$create([0], BorderSkipped))), BorderSkipped, 1)));
  }
 }
 
 m_setMultiBorderSkipped__arrayOf_org_pepstock_charba_client_enums_BorderSkipped_$p_org_pepstock_charba_client_data_BarDataset(/** Array<BorderSkipped> */ borderskips) {
  let array = new Array();
  for (let $array = borderskips, $index = 0; $index < $array.length; $index++) {
   let borderskip = $array[$index];
   {
    if ($Objects.m_equals__java_lang_Object__java_lang_Object(BorderSkipped.f_FALSE__org_pepstock_charba_client_enums_BorderSkipped, borderskip)) {
     array.push(false);
    } else {
     array.push(borderskip.m_value__());
    }
   }
  }
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_BORDER_SKIPPED__org_pepstock_charba_client_data_BarDataset_Property, array);
 }
 
 m_setSingleBorderSkipped__org_pepstock_charba_client_enums_BorderSkipped_$p_org_pepstock_charba_client_data_BarDataset(/** BorderSkipped */ borderskip) {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(BorderSkipped.f_FALSE__org_pepstock_charba_client_enums_BorderSkipped, borderskip)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_BORDER_SKIPPED__org_pepstock_charba_client_data_BarDataset_Property, false);
  } else {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BORDER_SKIPPED__org_pepstock_charba_client_data_BarDataset_Property, borderskip);
  }
 }
 /** @return {List<BorderSkipped>} */
 m_getBorderSkipped__() {
  let type = this.m_type__org_pepstock_charba_client_commons_Key(Property.f_BORDER_SKIPPED__org_pepstock_charba_client_data_BarDataset_Property);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType, type)) {
   return /**@type {List<BorderSkipped>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<BorderSkipped>}*/ ($Arrays.$init([BorderSkipped.f_FALSE__org_pepstock_charba_client_enums_BorderSkipped], BorderSkipped))));
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_FUNCTION__org_pepstock_charba_client_commons_ObjectType, type)) {
   return /**@type {List<BorderSkipped>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<BorderSkipped>}*/ ($Arrays.$init([this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getBorderSkipped__()], BorderSkipped))));
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_ARRAY__org_pepstock_charba_client_commons_ObjectType, type)) {
   let result = /**@type {!LinkedList<BorderSkipped>}*/ (LinkedList.$create__());
   let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_BORDER_SKIPPED__org_pepstock_charba_client_data_BarDataset_Property), ArrayMixedObject_$Overlay));
   for (let i = 0; i < array.length; i = i + 1 | 0) {
    let value = ArrayMixedObject_$Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayMixedObject__int(array, i);
    if (Boolean.$isInstance(value)) {
     result.add(BorderSkipped.f_FALSE__org_pepstock_charba_client_enums_BorderSkipped);
    } else if (j_l_String.$isInstance(value)) {
     result.add(/**@type {BorderSkipped}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String__org_pepstock_charba_client_commons_Key(BorderSkipped.m_values__(), /**@type {?string}*/ ($Casts.$to(value, j_l_String)), this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getBorderSkipped__()), BorderSkipped)));
    }
   }
   return result;
  }
  return /**@type {List<BorderSkipped>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<BorderSkipped>}*/ ($Arrays.$init([/**@type {BorderSkipped}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BORDER_SKIPPED__org_pepstock_charba_client_data_BarDataset_Property, BorderSkipped.m_values__(), this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getBorderSkipped__()), BorderSkipped))], BorderSkipped))));
 }
 
 m_setBorderRadius__arrayOf_int(/** Array<number> */ borderRadius) {
  this.m_setBorderRadius__org_pepstock_charba_client_callbacks_BorderRadiusCallback(/**@type {BorderRadiusCallback}*/ (null));
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_setBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__arrayOf_int_$pp_org_pepstock_charba_client_data(Property.f_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, Property.f_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property, borderRadius);
 }
 
 m_setBorderRadius__arrayOf_org_pepstock_charba_client_data_BarBorderRadius(/** Array<BarBorderRadius> */ borderRadius) {
  this.m_setBorderRadius__org_pepstock_charba_client_callbacks_BorderRadiusCallback(/**@type {BorderRadiusCallback}*/ (null));
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_setBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_data_AbstractBarBorderItem_$pp_org_pepstock_charba_client_data(Property.f_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, Property.f_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property, borderRadius);
 }
 
 m_setBorderRadius__java_util_List(/** List<BarBorderRadius> */ borderRadius) {
  this.m_setBorderRadius__org_pepstock_charba_client_callbacks_BorderRadiusCallback(/**@type {BorderRadiusCallback}*/ (null));
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_setBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__java_util_List__arrayOf_org_pepstock_charba_client_data_AbstractBarBorderItem_$pp_org_pepstock_charba_client_data(Property.f_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, Property.f_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property, borderRadius, BarDataset.f_BORDER_RADIUS_EMPTY_ARRAY__org_pepstock_charba_client_data_BarDataset_);
 }
 /** @return {List<Integer>} */
 m_getBorderRadius__() {
  return this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_getBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__int_$pp_org_pepstock_charba_client_data(Property.f_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, Property.f_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getBorderRadius__());
 }
 /** @return {List<BarBorderRadius>} */
 m_getBorderRadiusAsObjects__() {
  return /**@type {List<BarBorderRadius>}*/ (this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_getBorderItemAsObjects__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainerFactory__int_$pp_org_pepstock_charba_client_data(Property.f_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, Property.f_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property, BarBorderRadius.f_FACTORY__org_pepstock_charba_client_data_BarBorderRadius, this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getBorderRadius__()));
 }
 
 m_setHoverBorderRadius__arrayOf_int(/** Array<number> */ borderRadius) {
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_setBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__arrayOf_int_$pp_org_pepstock_charba_client_data(Property.f_HOVER_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, Property.f_CHARBA_HOVER_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property, borderRadius);
 }
 
 m_setHoverBorderRadius__arrayOf_org_pepstock_charba_client_data_BarBorderRadius(/** Array<BarBorderRadius> */ borderRadius) {
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_setBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_data_AbstractBarBorderItem_$pp_org_pepstock_charba_client_data(Property.f_HOVER_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, Property.f_CHARBA_HOVER_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property, borderRadius);
 }
 
 m_setHoverBorderRadius__java_util_List(/** List<BarBorderRadius> */ borderRadius) {
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_setBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__java_util_List__arrayOf_org_pepstock_charba_client_data_AbstractBarBorderItem_$pp_org_pepstock_charba_client_data(Property.f_HOVER_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, Property.f_CHARBA_HOVER_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property, borderRadius, BarDataset.f_BORDER_RADIUS_EMPTY_ARRAY__org_pepstock_charba_client_data_BarDataset_);
 }
 /** @return {List<Integer>} */
 m_getHoverBorderRadius__() {
  return this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_getBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__int_$pp_org_pepstock_charba_client_data(Property.f_HOVER_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, Property.f_CHARBA_HOVER_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getHoverBorderRadius__());
 }
 /** @return {List<BarBorderRadius>} */
 m_getHoverBorderRadiusAsObjects__() {
  return /**@type {List<BarBorderRadius>}*/ (this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_getBorderItemAsObjects__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainerFactory__int_$pp_org_pepstock_charba_client_data(Property.f_HOVER_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, Property.f_CHARBA_HOVER_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property, BarBorderRadius.f_FACTORY__org_pepstock_charba_client_data_BarBorderRadius, this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getHoverBorderRadius__()));
 }
 /** @return {List<FloatingData>} */
 m_getFloatingData__() {
  return this.m_getFloatingData__boolean(false);
 }
 /** @return {List<FloatingData>} */
 m_getFloatingData__boolean(/** boolean */ binding) {
  if (this.m_has__org_pepstock_charba_client_commons_Key(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty) && $Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_ARRAYS__org_pepstock_charba_client_enums_DataType, this.m_getDataType__())) {
   let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty), ArrayDoubleArray_$Overlay));
   return /**@type {ArrayDoubleArrayList<FloatingData>}*/ (ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayDoubleArray__org_pepstock_charba_client_commons_NativeArrayContainerFactory(array, BarDataset.$static_FLOATING_BAR_DATA_FACTORY__org_pepstock_charba_client_data_BarDataset));
  }
  if (binding) {
   let result = /**@type {!ArrayDoubleArrayList<FloatingData>}*/ (ArrayDoubleArrayList.$create__());
   this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty, ArrayDoubleArray_$Overlay.m_fromOrEmpty__java_util_List(result));
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(InternalProperty.f_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty, DataType.f_ARRAYS__org_pepstock_charba_client_enums_DataType);
   return result;
  }
  return /**@type {List<FloatingData>}*/ (Collections.m_emptyList__());
 }
 
 m_setFloatingData__arrayOf_arrayOf_double(/** Array<Array<number>> */ floatingData) {
  if (!$Equality.$same(floatingData, null) && floatingData.length > 0) {
   let dataList = /**@type {!LinkedList<FloatingData>}*/ (LinkedList.$create__());
   for (let i = 0; i < floatingData.length; i = i + 1 | 0) {
    dataList.add(BarDataset.$static_FLOATING_BAR_DATA_FACTORY__org_pepstock_charba_client_data_BarDataset.m_create__org_pepstock_charba_client_commons_ArrayDouble(ArrayDouble_$Overlay.m_fromOrEmpty__arrayOf_double(floatingData[i])));
   }
   this.m_setFloatingData__java_util_List(dataList);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty);
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(InternalProperty.f_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty, DataType.f_UNKNOWN__org_pepstock_charba_client_enums_DataType);
  }
 }
 
 m_setFloatingData__arrayOf_org_pepstock_charba_client_data_FloatingData(/** Array<FloatingData> */ floatingData) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty, ArrayDoubleArray_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_commons_NativeArrayContainer(floatingData));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(InternalProperty.f_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty, this.m_has__org_pepstock_charba_client_commons_Key(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty) ? DataType.f_ARRAYS__org_pepstock_charba_client_enums_DataType : DataType.f_UNKNOWN__org_pepstock_charba_client_enums_DataType);
 }
 
 m_setFloatingData__java_util_List(/** List<FloatingData> */ floatingData) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty, ArrayDoubleArray_$Overlay.m_fromOrNull__java_util_List(floatingData));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(InternalProperty.f_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty, this.m_has__org_pepstock_charba_client_commons_Key(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty) ? DataType.f_ARRAYS__org_pepstock_charba_client_enums_DataType : DataType.f_UNKNOWN__org_pepstock_charba_client_enums_DataType);
 }
 /** @return {PointStyleType} */
 m_getPointStyleType__() {
  return PointStyleType.m_getType__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_Key(this, Property.f_POINT_STYLE__org_pepstock_charba_client_data_BarDataset_Property);
 }
 
 m_setPointStyle__org_pepstock_charba_client_enums_PointStyle(/** PointStyle */ pointStyle) {
  this.m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(/**@type {PointStyleCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POINT_STYLE__org_pepstock_charba_client_data_BarDataset_Property, pointStyle);
 }
 /** @return {PointStyle} */
 m_getPointStyle__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(PointStyleType.f_STRING__org_pepstock_charba_client_enums_PointStyleType, this.m_getPointStyleType__())) {
   return /**@type {PointStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POINT_STYLE__org_pepstock_charba_client_data_BarDataset_Property, PointStyle.m_values__(), this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getPointStyle__()), PointStyle));
  }
  return this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getPointStyle__();
 }
 
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Img(/** HTMLImageElement */ pointStyle) {
  this.m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(/**@type {PointStyleCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(Property.f_POINT_STYLE__org_pepstock_charba_client_data_BarDataset_Property, pointStyle);
 }
 /** @return {HTMLImageElement} */
 m_getPointStyleAsImage__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(PointStyleType.f_IMAGE__org_pepstock_charba_client_enums_PointStyleType, this.m_getPointStyleType__())) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(Property.f_POINT_STYLE__org_pepstock_charba_client_data_BarDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getPointStyleAsImage__());
  }
  return this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getPointStyleAsImage__();
 }
 
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Canvas(/** HTMLCanvasElement */ pointStyle) {
  this.m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(/**@type {PointStyleCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Canvas(Property.f_POINT_STYLE__org_pepstock_charba_client_data_BarDataset_Property, pointStyle);
 }
 /** @return {HTMLCanvasElement} */
 m_getPointStyleAsCanvas__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(PointStyleType.f_CANVAS__org_pepstock_charba_client_enums_PointStyleType, this.m_getPointStyleType__())) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Canvas(Property.f_POINT_STYLE__org_pepstock_charba_client_data_BarDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getPointStyleAsCanvas__());
  }
  return this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getPointStyleAsCanvas__();
 }
 
 m_setEnableBorderRadius__boolean(/** boolean */ enableBorderRadius) {
  this.m_setEnableBorderRadius__org_pepstock_charba_client_callbacks_EnableBorderRadiusCallback(/**@type {EnableBorderRadiusCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ENABLE_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, enableBorderRadius);
 }
 /** @return {boolean} */
 m_isEnableBorderRadius__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ENABLE_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getBar__().m_isEnableBorderRadius__());
 }
 /** @return {BarBorderWidthCallback} */
 m_getBorderWidthCallback__() {
  return this.f_borderWidthCallback__org_pepstock_charba_client_data_BarDataset_;
 }
 
 m_setBorderWidth__org_pepstock_charba_client_callbacks_BarBorderWidthCallback(/** BarBorderWidthCallback */ borderWidthCallback) {
  this.f_borderWidthCallback__org_pepstock_charba_client_data_BarDataset_ = borderWidthCallback;
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_setBorderItemCallback__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy_$pp_org_pepstock_charba_client_data(CommonProperty.f_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, Property.f_CHARBA_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property, borderWidthCallback, this.f_borderWidthCallbackProxy__org_pepstock_charba_client_data_BarDataset_.proxy);
 }
 
 m_setBorderWidth__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderWidthCallback) {
  this.m_setBorderWidth__org_pepstock_charba_client_callbacks_BarBorderWidthCallback(/**@type {BarBorderWidthCallback}*/ (null));
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_setBorderItemCallback__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_data(CommonProperty.f_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, Property.f_CHARBA_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property, borderWidthCallback);
 }
 /** @return {BarBorderWidthCallback} */
 m_getHoverBorderWidthCallback__() {
  return this.f_hoverBorderWidthCallback__org_pepstock_charba_client_data_BarDataset_;
 }
 
 m_setHoverBorderWidth__org_pepstock_charba_client_callbacks_BarBorderWidthCallback(/** BarBorderWidthCallback */ hoverBorderWidthCallback) {
  this.f_hoverBorderWidthCallback__org_pepstock_charba_client_data_BarDataset_ = hoverBorderWidthCallback;
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_setBorderItemCallback__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy_$pp_org_pepstock_charba_client_data(CommonProperty.f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, Property.f_CHARBA_HOVER_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property, hoverBorderWidthCallback, this.f_hoverBorderWidthCallbackProxy__org_pepstock_charba_client_data_BarDataset_.proxy);
 }
 
 m_setHoverBorderWidth__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ hoverBorderWidthCallback) {
  this.m_setHoverBorderWidth__org_pepstock_charba_client_callbacks_BarBorderWidthCallback(/**@type {BarBorderWidthCallback}*/ (null));
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_setBorderItemCallback__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_data(CommonProperty.f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, Property.f_CHARBA_HOVER_BORDER_WIDTH_TYPE__org_pepstock_charba_client_data_BarDataset_Property, hoverBorderWidthCallback);
 }
 /** @return {BorderSkippedCallback} */
 m_getBorderSkippedCallback__() {
  return this.f_borderSkippedCallback__org_pepstock_charba_client_data_BarDataset_;
 }
 
 m_setBorderSkipped__org_pepstock_charba_client_callbacks_BorderSkippedCallback(/** BorderSkippedCallback */ borderSkippedCallback) {
  this.f_borderSkippedCallback__org_pepstock_charba_client_data_BarDataset_ = borderSkippedCallback;
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_setBorderItemCallback__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy_$pp_org_pepstock_charba_client_data(Property.f_BORDER_SKIPPED__org_pepstock_charba_client_data_BarDataset_Property, borderSkippedCallback, this.f_borderSkippedCallbackProxy__org_pepstock_charba_client_data_BarDataset_.proxy);
 }
 
 m_setBorderSkipped__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderSkippedCallback) {
  this.m_setBorderSkipped__org_pepstock_charba_client_callbacks_BorderSkippedCallback(/**@type {BorderSkippedCallback}*/ (null));
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_setBorderItemCallback__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_data(Property.f_BORDER_SKIPPED__org_pepstock_charba_client_data_BarDataset_Property, borderSkippedCallback);
 }
 /** @return {BorderRadiusCallback} */
 m_getBorderRadiusCallback__() {
  return this.f_borderRadiusCallback__org_pepstock_charba_client_data_BarDataset_;
 }
 
 m_setBorderRadius__org_pepstock_charba_client_callbacks_BorderRadiusCallback(/** BorderRadiusCallback */ borderRadiusCallback) {
  this.f_borderRadiusCallback__org_pepstock_charba_client_data_BarDataset_ = borderRadiusCallback;
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_setBorderItemCallback__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy_$pp_org_pepstock_charba_client_data(Property.f_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, Property.f_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property, borderRadiusCallback, this.f_borderRadiusCallbackProxy__org_pepstock_charba_client_data_BarDataset_.proxy);
 }
 
 m_setBorderRadius__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderRadiusCallback) {
  this.m_setBorderRadius__org_pepstock_charba_client_callbacks_BorderRadiusCallback(/**@type {BorderRadiusCallback}*/ (null));
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_setBorderItemCallback__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_data(Property.f_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, Property.f_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property, borderRadiusCallback);
 }
 /** @return {BorderRadiusCallback} */
 m_getHoverBorderRadiusCallback__() {
  return this.f_hoverBorderRadiusCallback__org_pepstock_charba_client_data_BarDataset_;
 }
 
 m_setHoverBorderRadius__org_pepstock_charba_client_callbacks_BorderRadiusCallback(/** BorderRadiusCallback */ hoverBorderRadiusCallback) {
  this.f_hoverBorderRadiusCallback__org_pepstock_charba_client_data_BarDataset_ = hoverBorderRadiusCallback;
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_setBorderItemCallback__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy_$pp_org_pepstock_charba_client_data(Property.f_HOVER_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, Property.f_CHARBA_HOVER_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property, hoverBorderRadiusCallback, this.f_hoverBorderRadiusCallbackProxy__org_pepstock_charba_client_data_BarDataset_.proxy);
 }
 
 m_setHoverBorderRadius__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ hoverBorderRadiusCallback) {
  this.m_setHoverBorderRadius__org_pepstock_charba_client_callbacks_BorderRadiusCallback(/**@type {BorderRadiusCallback}*/ (null));
  this.f_borderItemsHandler__org_pepstock_charba_client_data_BarDataset_.m_setBorderItemCallback__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_data(Property.f_HOVER_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, Property.f_CHARBA_HOVER_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_BarDataset_Property, hoverBorderRadiusCallback);
 }
 /** @return {PointStyleCallback} */
 m_getPointStyleCallback__() {
  return this.f_pointStyleCallback__org_pepstock_charba_client_data_BarDataset_;
 }
 
 m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(/** PointStyleCallback */ pointStyleCallback) {
  this.f_pointStyleCallback__org_pepstock_charba_client_data_BarDataset_ = pointStyleCallback;
  if (!$Equality.$same(pointStyleCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_POINT_STYLE__org_pepstock_charba_client_data_BarDataset_Property, this.f_pointStyleCallbackProxy__org_pepstock_charba_client_data_BarDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_POINT_STYLE__org_pepstock_charba_client_data_BarDataset_Property);
  }
 }
 
 m_setPointStyle__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ pointStyleCallback) {
  this.m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(/**@type {PointStyleCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_POINT_STYLE__org_pepstock_charba_client_data_BarDataset_Property, pointStyleCallback);
 }
 /** @return {BaseCallback} */
 m_getBaseCallback__() {
  return this.f_baseCallback__org_pepstock_charba_client_data_BarDataset_;
 }
 
 m_setBase__org_pepstock_charba_client_callbacks_BaseCallback(/** BaseCallback */ baseCallback) {
  this.f_baseCallback__org_pepstock_charba_client_data_BarDataset_ = baseCallback;
  if (!$Equality.$same(baseCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_BASE__org_pepstock_charba_client_data_BarDataset_Property, this.f_baseCallbackProxy__org_pepstock_charba_client_data_BarDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_BASE__org_pepstock_charba_client_data_BarDataset_Property);
  }
 }
 
 m_setBase__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ baseCallback) {
  this.m_setBase__org_pepstock_charba_client_callbacks_BaseCallback(/**@type {BaseCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_BASE__org_pepstock_charba_client_data_BarDataset_Property, baseCallback);
 }
 /** @return {EnableBorderRadiusCallback} */
 m_getEnableBorderRadiusCallback__() {
  return this.f_enableBorderRadiusCallback__org_pepstock_charba_client_data_BarDataset_;
 }
 
 m_setEnableBorderRadius__org_pepstock_charba_client_callbacks_EnableBorderRadiusCallback(/** EnableBorderRadiusCallback */ enableBorderRadiusCallback) {
  this.f_enableBorderRadiusCallback__org_pepstock_charba_client_data_BarDataset_ = enableBorderRadiusCallback;
  if (!$Equality.$same(enableBorderRadiusCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_ENABLE_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, this.f_enableBorderRadiusCallbackProxy__org_pepstock_charba_client_data_BarDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_ENABLE_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property);
  }
 }
 
 m_setEnableBorderRadius__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ enableBorderRadiusCallback) {
  this.m_setEnableBorderRadius__org_pepstock_charba_client_callbacks_EnableBorderRadiusCallback(/**@type {EnableBorderRadiusCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_ENABLE_BORDER_RADIUS__org_pepstock_charba_client_data_BarDataset_Property, enableBorderRadiusCallback);
 }
 /** @return {*} */
 m_onBorderSkipped__org_pepstock_charba_client_callbacks_DatasetContext_$p_org_pepstock_charba_client_data_BarDataset(/** DatasetContext */ context) {
  let value = /**@type {BorderSkipped}*/ ($Casts.$to(ScriptableUtils.m_getOptionValueAsString__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, this.m_getBorderSkippedCallback__()), BorderSkipped));
  let result = $Equality.$same(value, null) ? this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getBorderSkipped__() : value;
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(BorderSkipped.f_FALSE__org_pepstock_charba_client_enums_BorderSkipped, result)) {
   return false;
  } else {
   return result.m_value__();
  }
 }
 /** @return {*} */
 m_onPointStyle__org_pepstock_charba_client_callbacks_DatasetContext_$p_org_pepstock_charba_client_data_BarDataset(/** DatasetContext */ context) {
  let result = ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, this.m_getPointStyleCallback__());
  if (PointStyle.$isInstance(result)) {
   let style = /**@type {PointStyle}*/ ($Casts.$to(result, PointStyle));
   return style.m_value__();
  } else if (Img_$Overlay.$isInstance(result)) {
   return result;
  } else if (Canvas_$Overlay.$isInstance(result)) {
   return result;
  }
  return this.m_getDefaultValues__().m_getElements__().m_getBar__().m_getPointStyle__().m_value__();
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
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getOrder__() {
  return HasOrder.m_getOrder__$default__org_pepstock_charba_client_data_HasOrder(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setOrder__int(/** number */ arg0) {
  HasOrder.m_setOrder__$default__org_pepstock_charba_client_data_HasOrder__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBarPercentage__() {
  return HasBarDatasetOptions.m_getBarPercentage__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBarThickness__() {
  return HasBarDatasetOptions.m_getBarThickness__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getCategoryPercentage__() {
  return HasBarDatasetOptions.m_getCategoryPercentage__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getMaxBarThickness__() {
  return HasBarDatasetOptions.m_getMaxBarThickness__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getMinBarLength__() {
  return HasBarDatasetOptions.m_getMinBarLength__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isGrouped__() {
  return HasBarDatasetOptions.m_isGrouped__$default__org_pepstock_charba_client_options_HasBarDatasetOptions(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBarPercentage__double(/** number */ arg0) {
  HasBarDatasetOptions.m_setBarPercentage__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBarThickness__int(/** number */ arg0) {
  HasBarDatasetOptions.m_setBarThickness__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setCategoryPercentage__double(/** number */ arg0) {
  HasBarDatasetOptions.m_setCategoryPercentage__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setGrouped__boolean(/** boolean */ arg0) {
  HasBarDatasetOptions.m_setGrouped__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setMaxBarThickness__int(/** number */ arg0) {
  HasBarDatasetOptions.m_setMaxBarThickness__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setMinBarLength__int(/** number */ arg0) {
  HasBarDatasetOptions.m_setMinBarLength__$default__org_pepstock_charba_client_options_HasBarDatasetOptions__int(this, arg0);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_data_BarDataset() {
  this.f_borderSkippedCallbackProxy__org_pepstock_charba_client_data_BarDataset_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderRadiusCallbackProxy__org_pepstock_charba_client_data_BarDataset_ = /**@type {CharbaCallbackProxy<?function(?):?>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderWidthCallbackProxy__org_pepstock_charba_client_data_BarDataset_ = /**@type {CharbaCallbackProxy<?function(?):?>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hoverBorderWidthCallbackProxy__org_pepstock_charba_client_data_BarDataset_ = /**@type {CharbaCallbackProxy<?function(?):?>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hoverBorderRadiusCallbackProxy__org_pepstock_charba_client_data_BarDataset_ = /**@type {CharbaCallbackProxy<?function(?):?>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_pointStyleCallbackProxy__org_pepstock_charba_client_data_BarDataset_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_baseCallbackProxy__org_pepstock_charba_client_data_BarDataset_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_enableBorderRadiusCallbackProxy__org_pepstock_charba_client_data_BarDataset_ = /**@type {CharbaCallbackProxy<?function(?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderSkippedCallback__org_pepstock_charba_client_data_BarDataset_ = null;
  this.f_borderRadiusCallback__org_pepstock_charba_client_data_BarDataset_ = null;
  this.f_hoverBorderWidthCallback__org_pepstock_charba_client_data_BarDataset_ = null;
  this.f_borderWidthCallback__org_pepstock_charba_client_data_BarDataset_ = null;
  this.f_hoverBorderRadiusCallback__org_pepstock_charba_client_data_BarDataset_ = null;
  this.f_enableBorderRadiusCallback__org_pepstock_charba_client_data_BarDataset_ = null;
  this.f_pointStyleCallback__org_pepstock_charba_client_data_BarDataset_ = null;
  this.f_baseCallback__org_pepstock_charba_client_data_BarDataset_ = null;
 }
 /** @return {FloatingDatatFactory} */
 static get f_FLOATING_BAR_DATA_FACTORY__org_pepstock_charba_client_data_BarDataset() {
  return (BarDataset.$clinit(), BarDataset.$static_FLOATING_BAR_DATA_FACTORY__org_pepstock_charba_client_data_BarDataset);
 }
 
 static $clinit() {
  BarDataset.$clinit = () =>{};
  BarDataset.$loadModules();
  HovingFlexDataset.$clinit();
  HasDataPoints.$clinit();
  HasOrder.$clinit();
  HasBarDatasetOptions.$clinit();
  BarDataset.f_BORDER_RADIUS_EMPTY_ARRAY__org_pepstock_charba_client_data_BarDataset_ = /**@type {!Array<BarBorderRadius>}*/ ($Arrays.$create([0], BarBorderRadius));
  BarDataset.f_BORDER_WIDTH_EMPTY_ARRAY__org_pepstock_charba_client_data_BarDataset_ = /**@type {!Array<BarBorderWidth>}*/ ($Arrays.$create([0], BarBorderWidth));
  BarDataset.$static_FLOATING_BAR_DATA_FACTORY__org_pepstock_charba_client_data_BarDataset = FloatingDatatFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BarDataset;
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Double = goog.module.get('java.lang.Double$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  ArrayDouble_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
  ArrayDoubleArray_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayDoubleArray.$Overlay$impl');
  ArrayDoubleArrayList = goog.module.get('org.pepstock.charba.client.commons.ArrayDoubleArrayList$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayMixedObject_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayMixedObject.$Overlay$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  BarBorderRadius = goog.module.get('org.pepstock.charba.client.data.BarBorderRadius$impl');
  BarBorderWidth = goog.module.get('org.pepstock.charba.client.data.BarBorderWidth$impl');
  Property = goog.module.get('org.pepstock.charba.client.data.BarDataset.Property$impl');
  BorderItemsHandler = goog.module.get('org.pepstock.charba.client.data.BorderItemsHandler$impl');
  DataEnvelop = goog.module.get('org.pepstock.charba.client.data.DataEnvelop$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  CommonProperty = goog.module.get('org.pepstock.charba.client.data.Dataset.CommonProperty$impl');
  InternalProperty = goog.module.get('org.pepstock.charba.client.data.Dataset.InternalProperty$impl');
  FloatingDatatFactory = goog.module.get('org.pepstock.charba.client.data.FloatingDatatFactory$impl');
  OrderHandler = goog.module.get('org.pepstock.charba.client.data.OrderHandler$impl');
  Canvas_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  Img_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Img.$Overlay$impl');
  BorderSkipped = goog.module.get('org.pepstock.charba.client.enums.BorderSkipped$impl');
  DataType = goog.module.get('org.pepstock.charba.client.enums.DataType$impl');
  DefaultScaleId = goog.module.get('org.pepstock.charba.client.enums.DefaultScaleId$impl');
  IndexAxis = goog.module.get('org.pepstock.charba.client.enums.IndexAxis$impl');
  PointStyle = goog.module.get('org.pepstock.charba.client.enums.PointStyle$impl');
  PointStyleType = goog.module.get('org.pepstock.charba.client.enums.PointStyleType$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  BarDatasetOptionsHandler = goog.module.get('org.pepstock.charba.client.options.BarDatasetOptionsHandler$impl');
  ScaleId = goog.module.get('org.pepstock.charba.client.options.ScaleId$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@const {?string}*/
BarDataset.f_DEFAULT_LABEL__org_pepstock_charba_client_data_BarDataset_ = "";
/**@type {Array<BarBorderRadius>}*/
BarDataset.f_BORDER_RADIUS_EMPTY_ARRAY__org_pepstock_charba_client_data_BarDataset_;
/**@type {Array<BarBorderWidth>}*/
BarDataset.f_BORDER_WIDTH_EMPTY_ARRAY__org_pepstock_charba_client_data_BarDataset_;
/**@private {FloatingDatatFactory}*/
BarDataset.$static_FLOATING_BAR_DATA_FACTORY__org_pepstock_charba_client_data_BarDataset;
HasDataPoints.$markImplementor(BarDataset);
HasOrder.$markImplementor(BarDataset);
HasBarDatasetOptions.$markImplementor(BarDataset);
$Util.$setClassMetadata(BarDataset, "org.pepstock.charba.client.data.BarDataset");

exports = BarDataset;

//# sourceMappingURL=BarDataset.js.map
