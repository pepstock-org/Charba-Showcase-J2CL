goog.module('org.pepstock.charba.client.data.PieDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasBorderAlign = goog.require('org.pepstock.charba.client.data.HasBorderAlign$impl');
const HovingDataset = goog.require('org.pepstock.charba.client.data.HovingDataset$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let BorderAlignCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderAlignCallback$impl');
let BorderRadiusCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderRadiusCallback$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let OffsetCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.OffsetCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let ArcBorderRadius = goog.forwardDeclare('org.pepstock.charba.client.data.ArcBorderRadius$impl');
let BorderAlignHandler = goog.forwardDeclare('org.pepstock.charba.client.data.BorderAlignHandler$impl');
let BorderItemsHandler = goog.forwardDeclare('org.pepstock.charba.client.data.BorderItemsHandler$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.data.PieDataset.Property$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
let BorderAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderAlign$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {HasBorderAlign}
 */
class PieDataset extends HovingDataset {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_offsetCallbackProxy__org_pepstock_charba_client_data_PieDataset_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_hoverOffsetCallbackProxy__org_pepstock_charba_client_data_PieDataset_;
  /**@type {CharbaCallbackProxy<?function(?):?>}*/
  this.f_borderRadiusCallbackProxy__org_pepstock_charba_client_data_PieDataset_;
  /**@type {OffsetCallback<DatasetContext>}*/
  this.f_offsetCallback__org_pepstock_charba_client_data_PieDataset_;
  /**@type {OffsetCallback<DatasetContext>}*/
  this.f_hoverOffsetCallback__org_pepstock_charba_client_data_PieDataset_;
  /**@type {BorderRadiusCallback}*/
  this.f_borderRadiusCallback__org_pepstock_charba_client_data_PieDataset_;
  /**@type {BorderAlignHandler}*/
  this.f_borderAlignHandler__org_pepstock_charba_client_data_PieDataset_;
  /**@type {BorderItemsHandler}*/
  this.f_borderItemsHandler__org_pepstock_charba_client_data_PieDataset_;
 }
 //Factory method corresponding to constructor 'PieDataset()'.
 /** @return {!PieDataset} */
 static $create__() {
  PieDataset.$clinit();
  let $instance = new PieDataset();
  $instance.$ctor__org_pepstock_charba_client_data_PieDataset__();
  return $instance;
 }
 //Initialization from constructor 'PieDataset()'.
 
 $ctor__org_pepstock_charba_client_data_PieDataset__() {
  this.$ctor__org_pepstock_charba_client_data_PieDataset__boolean(Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'PieDataset(boolean)'.
 /** @return {!PieDataset} */
 static $create__boolean(/** boolean */ hidden) {
  PieDataset.$clinit();
  let $instance = new PieDataset();
  $instance.$ctor__org_pepstock_charba_client_data_PieDataset__boolean(hidden);
  return $instance;
 }
 //Initialization from constructor 'PieDataset(boolean)'.
 
 $ctor__org_pepstock_charba_client_data_PieDataset__boolean(/** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_PieDataset__org_pepstock_charba_client_Type__boolean(ChartType.f_PIE__org_pepstock_charba_client_ChartType, hidden);
 }
 //Factory method corresponding to constructor 'PieDataset(IsDefaultOptions)'.
 /** @return {!PieDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  PieDataset.$clinit();
  let $instance = new PieDataset();
  $instance.$ctor__org_pepstock_charba_client_data_PieDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(defaultValues);
  return $instance;
 }
 //Initialization from constructor 'PieDataset(IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_data_PieDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_data_PieDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'PieDataset(IsDefaultOptions, boolean)'.
 /** @return {!PieDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  PieDataset.$clinit();
  let $instance = new PieDataset();
  $instance.$ctor__org_pepstock_charba_client_data_PieDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'PieDataset(IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_PieDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_PieDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(ChartType.f_PIE__org_pepstock_charba_client_ChartType, defaultValues, hidden);
 }
 //Factory method corresponding to constructor 'PieDataset(Type, boolean)'.
 /** @return {!PieDataset} */
 static $create__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  PieDataset.$clinit();
  let $instance = new PieDataset();
  $instance.$ctor__org_pepstock_charba_client_data_PieDataset__org_pepstock_charba_client_Type__boolean(type, hidden);
  return $instance;
 }
 //Initialization from constructor 'PieDataset(Type, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_PieDataset__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_PieDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, null, hidden);
 }
 //Factory method corresponding to constructor 'PieDataset(Type, IsDefaultOptions, boolean)'.
 /** @return {!PieDataset} */
 static $create__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  PieDataset.$clinit();
  let $instance = new PieDataset();
  $instance.$ctor__org_pepstock_charba_client_data_PieDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'PieDataset(Type, IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_PieDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_HovingDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  this.$init___$p_org_pepstock_charba_client_data_PieDataset();
  this.f_borderItemsHandler__org_pepstock_charba_client_data_PieDataset_ = BorderItemsHandler.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getNativeObject__());
  this.f_borderAlignHandler__org_pepstock_charba_client_data_PieDataset_ = BorderAlignHandler.$create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultOptions(this.m_getNativeObject__(), this.m_getDefaultValues__());
  this.f_offsetCallbackProxy__org_pepstock_charba_client_data_PieDataset_.callback = (/** ? */ context) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context), this.m_getOffsetCallback__(), Integer.m_valueOf__int(this.m_getDefaultValues__().m_getElements__().m_getArc__().m_getOffset__())), Integer)).m_intValue__();
  };
  this.f_hoverOffsetCallbackProxy__org_pepstock_charba_client_data_PieDataset_.callback = (/** ? */ context_1) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_1), this.m_getHoverOffsetCallback__(), Integer.m_valueOf__int(this.m_getDefaultValues__().m_getElements__().m_getArc__().m_getOffset__())), Integer)).m_intValue__();
  };
  this.f_borderRadiusCallbackProxy__org_pepstock_charba_client_data_PieDataset_.callback = (/** ? */ context_2) =>{
   return this.f_borderItemsHandler__org_pepstock_charba_client_data_PieDataset_.m_onBorderItem__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_commons_NativeObjectContainerFactory__int_$pp_org_pepstock_charba_client_data(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_2), this.m_getBorderRadiusCallback__(), ArcBorderRadius.f_FACTORY__org_pepstock_charba_client_data_ArcBorderRadius, this.m_getDefaultValues__().m_getElements__().m_getArc__().m_getBorderRadius__());
  };
 }
 /** @override @return {BorderAlignHandler} */
 m_getBorderAlignHandler__() {
  return this.f_borderAlignHandler__org_pepstock_charba_client_data_PieDataset_;
 }
 
 m_setRotation__double(/** number */ rotation) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_ROTATION__org_pepstock_charba_client_data_PieDataset_Property, rotation);
 }
 /** @return {number} */
 m_getRotation__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_ROTATION__org_pepstock_charba_client_data_PieDataset_Property, this.m_getDefaultValues__().m_getRotation__());
 }
 
 m_setSpacing__int(/** number */ spacing) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_SPACING__org_pepstock_charba_client_data_PieDataset_Property, spacing);
 }
 /** @return {number} */
 m_getSpacing__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_SPACING__org_pepstock_charba_client_data_PieDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getArc__().m_getSpacing__());
 }
 
 m_setCircumference__double(/** number */ circumference) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_CIRCUMFERENCE__org_pepstock_charba_client_data_PieDataset_Property, circumference);
 }
 /** @return {number} */
 m_getCircumference__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_CIRCUMFERENCE__org_pepstock_charba_client_data_PieDataset_Property, this.m_getDefaultValues__().m_getCircumference__());
 }
 
 m_setWeight__double(/** number */ weight) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_WEIGHT__org_pepstock_charba_client_data_PieDataset_Property, weight);
 }
 /** @return {number} */
 m_getWeight__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_WEIGHT__org_pepstock_charba_client_data_PieDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getArc__().m_getWeight__());
 }
 
 m_setOffset__arrayOf_int(/** Array<number> */ offset) {
  this.m_setOffset__org_pepstock_charba_client_callbacks_OffsetCallback(/**@type {OffsetCallback<DatasetContext>}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_int(Property.f_OFFSET__org_pepstock_charba_client_data_PieDataset_Property, offset);
 }
 /** @return {List<Integer>} */
 m_getOffset__() {
  if ($Equality.$same(this.m_getOffsetCallback__(), null)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__int(Property.f_OFFSET__org_pepstock_charba_client_data_PieDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getArc__().m_getOffset__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayInteger(array);
  }
  return /**@type {List<Integer>}*/ (Collections.m_emptyList__());
 }
 
 m_setHoverOffset__arrayOf_int(/** Array<number> */ offset) {
  this.m_setHoverOffset__org_pepstock_charba_client_callbacks_OffsetCallback(/**@type {OffsetCallback<DatasetContext>}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_int(Property.f_HOVER_OFFSET__org_pepstock_charba_client_data_PieDataset_Property, offset);
 }
 /** @return {List<Integer>} */
 m_getHoverOffset__() {
  if ($Equality.$same(this.m_getHoverOffsetCallback__(), null)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__int(Property.f_HOVER_OFFSET__org_pepstock_charba_client_data_PieDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getArc__().m_getHoverOffset__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayInteger(array);
  }
  return /**@type {List<Integer>}*/ (Collections.m_emptyList__());
 }
 
 m_setBorderRadius__arrayOf_int(/** Array<number> */ borderRadius) {
  this.m_setBorderRadius__org_pepstock_charba_client_callbacks_BorderRadiusCallback(/**@type {BorderRadiusCallback}*/ (null));
  this.f_borderItemsHandler__org_pepstock_charba_client_data_PieDataset_.m_setBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__arrayOf_int_$pp_org_pepstock_charba_client_data(Property.f_BORDER_RADIUS__org_pepstock_charba_client_data_PieDataset_Property, Property.f_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_PieDataset_Property, borderRadius);
 }
 
 m_setBorderRadius__arrayOf_org_pepstock_charba_client_data_ArcBorderRadius(/** Array<ArcBorderRadius> */ borderRadius) {
  this.m_setBorderRadius__org_pepstock_charba_client_callbacks_BorderRadiusCallback(/**@type {BorderRadiusCallback}*/ (null));
  this.f_borderItemsHandler__org_pepstock_charba_client_data_PieDataset_.m_setBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_data_AbstractBarBorderItem_$pp_org_pepstock_charba_client_data(Property.f_BORDER_RADIUS__org_pepstock_charba_client_data_PieDataset_Property, Property.f_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_PieDataset_Property, borderRadius);
 }
 
 m_setBorderRadius__java_util_List(/** List<ArcBorderRadius> */ borderRadius) {
  this.m_setBorderRadius__org_pepstock_charba_client_callbacks_BorderRadiusCallback(/**@type {BorderRadiusCallback}*/ (null));
  this.f_borderItemsHandler__org_pepstock_charba_client_data_PieDataset_.m_setBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__java_util_List__arrayOf_org_pepstock_charba_client_data_AbstractBarBorderItem_$pp_org_pepstock_charba_client_data(Property.f_BORDER_RADIUS__org_pepstock_charba_client_data_PieDataset_Property, Property.f_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_PieDataset_Property, borderRadius, PieDataset.f_BORDER_RADIUS_EMPTY_ARRAY__org_pepstock_charba_client_data_PieDataset_);
 }
 /** @return {List<Integer>} */
 m_getBorderRadius__() {
  return this.f_borderItemsHandler__org_pepstock_charba_client_data_PieDataset_.m_getBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__int_$pp_org_pepstock_charba_client_data(Property.f_BORDER_RADIUS__org_pepstock_charba_client_data_PieDataset_Property, Property.f_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_PieDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getArc__().m_getBorderRadius__());
 }
 /** @return {List<ArcBorderRadius>} */
 m_getBorderRadiusAsObjects__() {
  return /**@type {List<ArcBorderRadius>}*/ (this.f_borderItemsHandler__org_pepstock_charba_client_data_PieDataset_.m_getBorderItemAsObjects__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainerFactory__int_$pp_org_pepstock_charba_client_data(Property.f_BORDER_RADIUS__org_pepstock_charba_client_data_PieDataset_Property, Property.f_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_PieDataset_Property, ArcBorderRadius.f_FACTORY__org_pepstock_charba_client_data_ArcBorderRadius, this.m_getDefaultValues__().m_getElements__().m_getArc__().m_getBorderRadius__()));
 }
 /** @return {OffsetCallback<DatasetContext>} */
 m_getOffsetCallback__() {
  return this.f_offsetCallback__org_pepstock_charba_client_data_PieDataset_;
 }
 
 m_setOffset__org_pepstock_charba_client_callbacks_OffsetCallback(/** OffsetCallback<DatasetContext> */ offsetCallback) {
  this.f_offsetCallback__org_pepstock_charba_client_data_PieDataset_ = offsetCallback;
  if (!$Equality.$same(offsetCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_OFFSET__org_pepstock_charba_client_data_PieDataset_Property, this.f_offsetCallbackProxy__org_pepstock_charba_client_data_PieDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_OFFSET__org_pepstock_charba_client_data_PieDataset_Property);
  }
 }
 
 m_setOffset__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ offsetCallback) {
  this.m_setOffset__org_pepstock_charba_client_callbacks_OffsetCallback(/**@type {OffsetCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_OFFSET__org_pepstock_charba_client_data_PieDataset_Property, offsetCallback);
 }
 /** @return {OffsetCallback<DatasetContext>} */
 m_getHoverOffsetCallback__() {
  return this.f_hoverOffsetCallback__org_pepstock_charba_client_data_PieDataset_;
 }
 
 m_setHoverOffset__org_pepstock_charba_client_callbacks_OffsetCallback(/** OffsetCallback<DatasetContext> */ hoverOffsetCallback) {
  this.f_hoverOffsetCallback__org_pepstock_charba_client_data_PieDataset_ = hoverOffsetCallback;
  if (!$Equality.$same(hoverOffsetCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_HOVER_OFFSET__org_pepstock_charba_client_data_PieDataset_Property, this.f_hoverOffsetCallbackProxy__org_pepstock_charba_client_data_PieDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_HOVER_OFFSET__org_pepstock_charba_client_data_PieDataset_Property);
  }
 }
 
 m_setHoverOffset__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ hoverOffsetCallback) {
  this.m_setHoverOffset__org_pepstock_charba_client_callbacks_OffsetCallback(/**@type {OffsetCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_HOVER_OFFSET__org_pepstock_charba_client_data_PieDataset_Property, hoverOffsetCallback);
 }
 /** @return {BorderRadiusCallback} */
 m_getBorderRadiusCallback__() {
  return this.f_borderRadiusCallback__org_pepstock_charba_client_data_PieDataset_;
 }
 
 m_setBorderRadius__org_pepstock_charba_client_callbacks_BorderRadiusCallback(/** BorderRadiusCallback */ borderRadiusCallback) {
  this.f_borderRadiusCallback__org_pepstock_charba_client_data_PieDataset_ = borderRadiusCallback;
  this.f_borderItemsHandler__org_pepstock_charba_client_data_PieDataset_.m_setBorderItemCallback__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy_$pp_org_pepstock_charba_client_data(Property.f_BORDER_RADIUS__org_pepstock_charba_client_data_PieDataset_Property, Property.f_CHARBA_BORDER_RADIUS_TYPE__org_pepstock_charba_client_data_PieDataset_Property, borderRadiusCallback, this.f_borderRadiusCallbackProxy__org_pepstock_charba_client_data_PieDataset_.proxy);
 }
 
 m_setBorderRadius__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderRadiusCallback) {
  this.m_setBorderRadius__org_pepstock_charba_client_callbacks_BorderRadiusCallback(/**@type {BorderRadiusCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_BORDER_RADIUS__org_pepstock_charba_client_data_PieDataset_Property, borderRadiusCallback);
 }
 //Default method forwarding stub.
 /** @override @return {List<BorderAlign>} */
 m_getBorderAlign__() {
  return HasBorderAlign.m_getBorderAlign__$default__org_pepstock_charba_client_data_HasBorderAlign(this);
 }
 //Default method forwarding stub.
 /** @override @return {BorderAlignCallback} */
 m_getBorderAlignCallback__() {
  return HasBorderAlign.m_getBorderAlignCallback__$default__org_pepstock_charba_client_data_HasBorderAlign(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBorderAlign__arrayOf_org_pepstock_charba_client_enums_BorderAlign(/** Array<BorderAlign> */ arg0) {
  HasBorderAlign.m_setBorderAlign__$default__org_pepstock_charba_client_data_HasBorderAlign__arrayOf_org_pepstock_charba_client_enums_BorderAlign(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBorderAlign__java_util_List(/** List<BorderAlign> */ arg0) {
  HasBorderAlign.m_setBorderAlign__$default__org_pepstock_charba_client_data_HasBorderAlign__java_util_List(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBorderAlign__org_pepstock_charba_client_callbacks_BorderAlignCallback(/** BorderAlignCallback */ arg0) {
  HasBorderAlign.m_setBorderAlign__$default__org_pepstock_charba_client_data_HasBorderAlign__org_pepstock_charba_client_callbacks_BorderAlignCallback(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBorderAlign__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ arg0) {
  HasBorderAlign.m_setBorderAlign__$default__org_pepstock_charba_client_data_HasBorderAlign__org_pepstock_charba_client_callbacks_NativeCallback(this, arg0);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_data_PieDataset() {
  this.f_offsetCallbackProxy__org_pepstock_charba_client_data_PieDataset_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hoverOffsetCallbackProxy__org_pepstock_charba_client_data_PieDataset_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderRadiusCallbackProxy__org_pepstock_charba_client_data_PieDataset_ = /**@type {CharbaCallbackProxy<?function(?):?>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_offsetCallback__org_pepstock_charba_client_data_PieDataset_ = null;
  this.f_hoverOffsetCallback__org_pepstock_charba_client_data_PieDataset_ = null;
  this.f_borderRadiusCallback__org_pepstock_charba_client_data_PieDataset_ = null;
 }
 
 static $clinit() {
  PieDataset.$clinit = () =>{};
  PieDataset.$loadModules();
  HovingDataset.$clinit();
  HasBorderAlign.$clinit();
  PieDataset.f_BORDER_RADIUS_EMPTY_ARRAY__org_pepstock_charba_client_data_PieDataset_ = /**@type {!Array<ArcBorderRadius>}*/ ($Arrays.$create([0], ArcBorderRadius));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PieDataset;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  ArcBorderRadius = goog.module.get('org.pepstock.charba.client.data.ArcBorderRadius$impl');
  BorderAlignHandler = goog.module.get('org.pepstock.charba.client.data.BorderAlignHandler$impl');
  BorderItemsHandler = goog.module.get('org.pepstock.charba.client.data.BorderItemsHandler$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  Property = goog.module.get('org.pepstock.charba.client.data.PieDataset.Property$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Array<ArcBorderRadius>}*/
PieDataset.f_BORDER_RADIUS_EMPTY_ARRAY__org_pepstock_charba_client_data_PieDataset_;
HasBorderAlign.$markImplementor(PieDataset);
$Util.$setClassMetadata(PieDataset, "org.pepstock.charba.client.data.PieDataset");

exports = PieDataset;

//# sourceMappingURL=PieDataset.js.map
