goog.module('org.pepstock.charba.client.data.BubbleDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasDataPoints = goog.require('org.pepstock.charba.client.data.HasDataPoints$impl');
const HasOrder = goog.require('org.pepstock.charba.client.data.HasOrder$impl');
const HovingDataset = goog.require('org.pepstock.charba.client.data.HovingDataset$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let PointStyleCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PointStyleCallback$impl');
let RadiusCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.RadiusCallback$impl');
let RotationCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.RotationCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let ArrayEnumList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayEnumList$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.data.BubbleDataset.Property$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let OrderHandler = goog.forwardDeclare('org.pepstock.charba.client.data.OrderHandler$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {HasDataPoints}
 * @implements {HasOrder}
 */
class BubbleDataset extends HovingDataset {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_radiusCallbackProxy__org_pepstock_charba_client_data_BubbleDataset_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_hitRadiusCallbackProxy__org_pepstock_charba_client_data_BubbleDataset_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_hoverRadiusCallbackProxy__org_pepstock_charba_client_data_BubbleDataset_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_rotationCallbackProxy__org_pepstock_charba_client_data_BubbleDataset_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_pointStyleCallbackProxy__org_pepstock_charba_client_data_BubbleDataset_;
  /**@type {RadiusCallback<DatasetContext>}*/
  this.f_radiusCallback__org_pepstock_charba_client_data_BubbleDataset_;
  /**@type {RadiusCallback<DatasetContext>}*/
  this.f_hitRadiusCallback__org_pepstock_charba_client_data_BubbleDataset_;
  /**@type {RadiusCallback<DatasetContext>}*/
  this.f_hoverRadiusCallback__org_pepstock_charba_client_data_BubbleDataset_;
  /**@type {RotationCallback<DatasetContext>}*/
  this.f_rotationCallback__org_pepstock_charba_client_data_BubbleDataset_;
  /**@type {PointStyleCallback}*/
  this.f_pointStyleCallback__org_pepstock_charba_client_data_BubbleDataset_;
  /**@type {OrderHandler}*/
  this.f_orderHandler__org_pepstock_charba_client_data_BubbleDataset_;
 }
 //Factory method corresponding to constructor 'BubbleDataset()'.
 /** @return {!BubbleDataset} */
 static $create__() {
  BubbleDataset.$clinit();
  let $instance = new BubbleDataset();
  $instance.$ctor__org_pepstock_charba_client_data_BubbleDataset__();
  return $instance;
 }
 //Initialization from constructor 'BubbleDataset()'.
 
 $ctor__org_pepstock_charba_client_data_BubbleDataset__() {
  this.$ctor__org_pepstock_charba_client_data_BubbleDataset__boolean(Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'BubbleDataset(boolean)'.
 /** @return {!BubbleDataset} */
 static $create__boolean(/** boolean */ hidden) {
  BubbleDataset.$clinit();
  let $instance = new BubbleDataset();
  $instance.$ctor__org_pepstock_charba_client_data_BubbleDataset__boolean(hidden);
  return $instance;
 }
 //Initialization from constructor 'BubbleDataset(boolean)'.
 
 $ctor__org_pepstock_charba_client_data_BubbleDataset__boolean(/** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_BubbleDataset__org_pepstock_charba_client_Type__boolean(ChartType.f_BUBBLE__org_pepstock_charba_client_ChartType, hidden);
 }
 //Factory method corresponding to constructor 'BubbleDataset(IsDefaultOptions)'.
 /** @return {!BubbleDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  BubbleDataset.$clinit();
  let $instance = new BubbleDataset();
  $instance.$ctor__org_pepstock_charba_client_data_BubbleDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(defaultValues);
  return $instance;
 }
 //Initialization from constructor 'BubbleDataset(IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_data_BubbleDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_data_BubbleDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'BubbleDataset(IsDefaultOptions, boolean)'.
 /** @return {!BubbleDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  BubbleDataset.$clinit();
  let $instance = new BubbleDataset();
  $instance.$ctor__org_pepstock_charba_client_data_BubbleDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'BubbleDataset(IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_BubbleDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_BubbleDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(ChartType.f_BUBBLE__org_pepstock_charba_client_ChartType, defaultValues, hidden);
 }
 //Factory method corresponding to constructor 'BubbleDataset(Type, boolean)'.
 /** @return {!BubbleDataset} */
 static $create__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  BubbleDataset.$clinit();
  let $instance = new BubbleDataset();
  $instance.$ctor__org_pepstock_charba_client_data_BubbleDataset__org_pepstock_charba_client_Type__boolean(type, hidden);
  return $instance;
 }
 //Initialization from constructor 'BubbleDataset(Type, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_BubbleDataset__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_BubbleDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, null, hidden);
 }
 //Factory method corresponding to constructor 'BubbleDataset(Type, IsDefaultOptions, boolean)'.
 /** @return {!BubbleDataset} */
 static $create__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  BubbleDataset.$clinit();
  let $instance = new BubbleDataset();
  $instance.$ctor__org_pepstock_charba_client_data_BubbleDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'BubbleDataset(Type, IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_BubbleDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_HovingDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  this.$init___$p_org_pepstock_charba_client_data_BubbleDataset();
  this.f_orderHandler__org_pepstock_charba_client_data_BubbleDataset_ = OrderHandler.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getNativeObject__());
  this.f_radiusCallbackProxy__org_pepstock_charba_client_data_BubbleDataset_.callback = (/** ? */ context) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context), this.m_getRadiusCallback__(), this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getRadius__()), Double)));
  };
  this.f_hitRadiusCallbackProxy__org_pepstock_charba_client_data_BubbleDataset_.callback = (/** ? */ context_1) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_1), this.m_getHitRadiusCallback__(), this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getHitRadius__()), Double)));
  };
  this.f_hoverRadiusCallbackProxy__org_pepstock_charba_client_data_BubbleDataset_.callback = (/** ? */ context_2) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_2), this.m_getHoverRadiusCallback__(), this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getHoverRadius__()), Double)));
  };
  this.f_rotationCallbackProxy__org_pepstock_charba_client_data_BubbleDataset_.callback = (/** ? */ context_3) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_3), this.m_getRotationCallback__(), this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getRotation__()), Double)));
  };
  this.f_pointStyleCallbackProxy__org_pepstock_charba_client_data_BubbleDataset_.callback = (/** ? */ context_4) =>{
   return this.m_onPointStyle__org_pepstock_charba_client_callbacks_DatasetContext_$p_org_pepstock_charba_client_data_BubbleDataset(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_4));
  };
 }
 /** @override @return {boolean} */
 m_mustUseDataPoints___$pp_org_pepstock_charba_client_data() {
  return true;
 }
 /** @override @return {OrderHandler} */
 m_getOrderHandler__() {
  return this.f_orderHandler__org_pepstock_charba_client_data_BubbleDataset_;
 }
 /** @override @return {?string} */
 m_getDefaultBackgroundColorAsString__() {
  return this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getBackgroundColorAsString__();
 }
 /** @override @return {?string} */
 m_getDefaultBorderColorAsString__() {
  return this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getBorderColorAsString__();
 }
 /** @override @return {number} */
 m_getDefaultBorderWidth__() {
  return this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getBorderWidth__();
 }
 /** @override @return {?string} */
 m_getDefaultHoverBackgroundColorAsString__() {
  return this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getHoverBackgroundColorAsString__();
 }
 /** @override @return {?string} */
 m_getDefaultHoverBorderColorAsString__() {
  return this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getHoverBorderColorAsString__();
 }
 /** @override @return {number} */
 m_getDefaultHoverBorderWidth__() {
  return this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getHoverBorderWidth__();
 }
 
 m_setPointStyle__arrayOf_org_pepstock_charba_client_enums_PointStyle(/** Array<PointStyle> */ pointStyle) {
  this.m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(/**@type {PointStyleCallback}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key(Property.f_POINT_STYLE__org_pepstock_charba_client_data_BubbleDataset_Property, pointStyle);
 }
 /** @return {List<PointStyle>} */
 m_getPointStyle__() {
  if ($Equality.$same(this.m_getPointStyleCallback__(), null)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POINT_STYLE__org_pepstock_charba_client_data_BubbleDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getPointStyle__());
   return /**@type {ArrayEnumList<PointStyle>}*/ (ArrayListHelper.m_list__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayString(PointStyle.m_values__(), array));
  }
  return /**@type {List<PointStyle>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(PointStyle.m_values__()));
 }
 
 m_setHitRadius__arrayOf_double(/** Array<number> */ hitRadius) {
  this.m_setHitRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/**@type {RadiusCallback<DatasetContext>}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_double(Property.f_HIT_RADIUS__org_pepstock_charba_client_data_BubbleDataset_Property, hitRadius);
 }
 /** @return {List<?number>} */
 m_getHitRadius__() {
  if ($Equality.$same(this.m_getHitRadiusCallback__(), null)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__double(Property.f_HIT_RADIUS__org_pepstock_charba_client_data_BubbleDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getHitRadius__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayDouble(array);
  }
  return /**@type {List<?number>}*/ (Collections.m_emptyList__());
 }
 
 m_setHoverRadius__arrayOf_double(/** Array<number> */ hoverRadius) {
  this.m_setHoverRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/**@type {RadiusCallback<DatasetContext>}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_double(Property.f_HOVER_RADIUS__org_pepstock_charba_client_data_BubbleDataset_Property, hoverRadius);
 }
 /** @return {List<?number>} */
 m_getHoverRadius__() {
  if ($Equality.$same(this.m_getHoverRadiusCallback__(), null)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__double(Property.f_HOVER_RADIUS__org_pepstock_charba_client_data_BubbleDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getHoverRadius__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayDouble(array);
  }
  return /**@type {List<?number>}*/ (Collections.m_emptyList__());
 }
 
 m_setRadius__arrayOf_double(/** Array<number> */ radius) {
  this.m_setRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/**@type {RadiusCallback<DatasetContext>}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_double(Property.f_RADIUS__org_pepstock_charba_client_data_BubbleDataset_Property, radius);
 }
 /** @return {List<?number>} */
 m_getRadius__() {
  if ($Equality.$same(this.m_getRadiusCallback__(), null)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__double(Property.f_RADIUS__org_pepstock_charba_client_data_BubbleDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getRadius__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayDouble(array);
  }
  return /**@type {List<?number>}*/ (Collections.m_emptyList__());
 }
 
 m_setRotation__arrayOf_double(/** Array<number> */ rotation) {
  this.m_setRotation__org_pepstock_charba_client_callbacks_RotationCallback(/**@type {RotationCallback<DatasetContext>}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_double(Property.f_ROTATION__org_pepstock_charba_client_data_BubbleDataset_Property, rotation);
 }
 /** @return {List<?number>} */
 m_getRotation__() {
  if ($Equality.$same(this.m_getRotationCallback__(), null)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__double(Property.f_ROTATION__org_pepstock_charba_client_data_BubbleDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getRotation__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayDouble(array);
  }
  return /**@type {List<?number>}*/ (Collections.m_emptyList__());
 }
 /** @return {RadiusCallback<DatasetContext>} */
 m_getRadiusCallback__() {
  return this.f_radiusCallback__org_pepstock_charba_client_data_BubbleDataset_;
 }
 
 m_setRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/** RadiusCallback<DatasetContext> */ radiusCallback) {
  this.f_radiusCallback__org_pepstock_charba_client_data_BubbleDataset_ = radiusCallback;
  if (!$Equality.$same(radiusCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_RADIUS__org_pepstock_charba_client_data_BubbleDataset_Property, this.f_radiusCallbackProxy__org_pepstock_charba_client_data_BubbleDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_RADIUS__org_pepstock_charba_client_data_BubbleDataset_Property);
  }
 }
 
 m_setRadius__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ radiusCallback) {
  this.m_setRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/**@type {RadiusCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_RADIUS__org_pepstock_charba_client_data_BubbleDataset_Property, radiusCallback);
 }
 /** @return {RadiusCallback<DatasetContext>} */
 m_getHitRadiusCallback__() {
  return this.f_hitRadiusCallback__org_pepstock_charba_client_data_BubbleDataset_;
 }
 
 m_setHitRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/** RadiusCallback<DatasetContext> */ hitRadiusCallback) {
  this.f_hitRadiusCallback__org_pepstock_charba_client_data_BubbleDataset_ = hitRadiusCallback;
  if (!$Equality.$same(hitRadiusCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_HIT_RADIUS__org_pepstock_charba_client_data_BubbleDataset_Property, this.f_hitRadiusCallbackProxy__org_pepstock_charba_client_data_BubbleDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_HIT_RADIUS__org_pepstock_charba_client_data_BubbleDataset_Property);
  }
 }
 
 m_setHitRadius__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ hitRadiusCallback) {
  this.m_setHitRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/**@type {RadiusCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_HIT_RADIUS__org_pepstock_charba_client_data_BubbleDataset_Property, hitRadiusCallback);
 }
 /** @return {RadiusCallback<DatasetContext>} */
 m_getHoverRadiusCallback__() {
  return this.f_hoverRadiusCallback__org_pepstock_charba_client_data_BubbleDataset_;
 }
 
 m_setHoverRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/** RadiusCallback<DatasetContext> */ hoverRadiusCallback) {
  this.f_hoverRadiusCallback__org_pepstock_charba_client_data_BubbleDataset_ = hoverRadiusCallback;
  if (!$Equality.$same(hoverRadiusCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_HOVER_RADIUS__org_pepstock_charba_client_data_BubbleDataset_Property, this.f_hoverRadiusCallbackProxy__org_pepstock_charba_client_data_BubbleDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_HOVER_RADIUS__org_pepstock_charba_client_data_BubbleDataset_Property);
  }
 }
 
 m_setHoverRadius__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ hoverRadiusCallback) {
  this.m_setHoverRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/**@type {RadiusCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_HOVER_RADIUS__org_pepstock_charba_client_data_BubbleDataset_Property, hoverRadiusCallback);
 }
 /** @return {RotationCallback<DatasetContext>} */
 m_getRotationCallback__() {
  return this.f_rotationCallback__org_pepstock_charba_client_data_BubbleDataset_;
 }
 
 m_setRotation__org_pepstock_charba_client_callbacks_RotationCallback(/** RotationCallback<DatasetContext> */ rotationCallback) {
  this.f_rotationCallback__org_pepstock_charba_client_data_BubbleDataset_ = rotationCallback;
  if (!$Equality.$same(rotationCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_ROTATION__org_pepstock_charba_client_data_BubbleDataset_Property, this.f_rotationCallbackProxy__org_pepstock_charba_client_data_BubbleDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_ROTATION__org_pepstock_charba_client_data_BubbleDataset_Property);
  }
 }
 
 m_setRotation__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ rotationCallback) {
  this.m_setRotation__org_pepstock_charba_client_callbacks_RotationCallback(/**@type {RotationCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_ROTATION__org_pepstock_charba_client_data_BubbleDataset_Property, rotationCallback);
 }
 /** @return {PointStyleCallback} */
 m_getPointStyleCallback__() {
  return this.f_pointStyleCallback__org_pepstock_charba_client_data_BubbleDataset_;
 }
 
 m_setPointStyle__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ pointStyleCallback) {
  this.m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(/**@type {PointStyleCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_POINT_STYLE__org_pepstock_charba_client_data_BubbleDataset_Property, pointStyleCallback);
 }
 
 m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(/** PointStyleCallback */ pointStyleCallback) {
  this.f_pointStyleCallback__org_pepstock_charba_client_data_BubbleDataset_ = pointStyleCallback;
  if (!$Equality.$same(pointStyleCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_POINT_STYLE__org_pepstock_charba_client_data_BubbleDataset_Property, this.f_pointStyleCallbackProxy__org_pepstock_charba_client_data_BubbleDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_POINT_STYLE__org_pepstock_charba_client_data_BubbleDataset_Property);
  }
 }
 /** @return {?string} */
 m_onPointStyle__org_pepstock_charba_client_callbacks_DatasetContext_$p_org_pepstock_charba_client_data_BubbleDataset(/** DatasetContext */ context) {
  let result = ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, this.m_getPointStyleCallback__());
  if (PointStyle.$isInstance(result)) {
   let style = /**@type {PointStyle}*/ ($Casts.$to(result, PointStyle));
   return style.m_value__();
  }
  return this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getPointStyle__().m_value__();
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
 /** @private */
 $init___$p_org_pepstock_charba_client_data_BubbleDataset() {
  this.f_radiusCallbackProxy__org_pepstock_charba_client_data_BubbleDataset_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hitRadiusCallbackProxy__org_pepstock_charba_client_data_BubbleDataset_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hoverRadiusCallbackProxy__org_pepstock_charba_client_data_BubbleDataset_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_rotationCallbackProxy__org_pepstock_charba_client_data_BubbleDataset_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_pointStyleCallbackProxy__org_pepstock_charba_client_data_BubbleDataset_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_radiusCallback__org_pepstock_charba_client_data_BubbleDataset_ = null;
  this.f_hitRadiusCallback__org_pepstock_charba_client_data_BubbleDataset_ = null;
  this.f_hoverRadiusCallback__org_pepstock_charba_client_data_BubbleDataset_ = null;
  this.f_rotationCallback__org_pepstock_charba_client_data_BubbleDataset_ = null;
  this.f_pointStyleCallback__org_pepstock_charba_client_data_BubbleDataset_ = null;
 }
 
 static $clinit() {
  BubbleDataset.$clinit = () =>{};
  BubbleDataset.$loadModules();
  HovingDataset.$clinit();
  HasDataPoints.$clinit();
  HasOrder.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BubbleDataset;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Property = goog.module.get('org.pepstock.charba.client.data.BubbleDataset.Property$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  OrderHandler = goog.module.get('org.pepstock.charba.client.data.OrderHandler$impl');
  PointStyle = goog.module.get('org.pepstock.charba.client.enums.PointStyle$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HasDataPoints.$markImplementor(BubbleDataset);
HasOrder.$markImplementor(BubbleDataset);
$Util.$setClassMetadata(BubbleDataset, "org.pepstock.charba.client.data.BubbleDataset");

exports = BubbleDataset;

//# sourceMappingURL=BubbleDataset.js.map
