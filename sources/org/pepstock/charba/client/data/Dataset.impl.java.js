goog.module('org.pepstock.charba.client.data.Dataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');
const HasCallbackScope = goog.require('org.pepstock.charba.client.commons.HasCallbackScope$impl');
const HasDataset = goog.require('org.pepstock.charba.client.data.HasDataset$impl');
const HasAnimationOptions = goog.require('org.pepstock.charba.client.options.HasAnimationOptions$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let AtomicInteger = goog.forwardDeclare('java.util.concurrent.atomic.AtomicInteger$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let Scriptable = goog.forwardDeclare('org.pepstock.charba.client.callbacks.Scriptable$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let WidthCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.WidthCallback$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let ArrayDouble_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
let ArrayDoubleList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayDoubleList$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayObject_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
let ArrayObjectContainerList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObjectContainerList$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let Clip = goog.forwardDeclare('org.pepstock.charba.client.data.Clip$impl');
let DataEnvelop = goog.forwardDeclare('org.pepstock.charba.client.data.DataEnvelop$impl');
let DataPoint = goog.forwardDeclare('org.pepstock.charba.client.data.DataPoint$impl');
let CanvasObjectKey = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.CanvasObjectKey$impl');
let CanvasObjectProperty = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.CanvasObjectProperty$impl');
let CommonProperty = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.CommonProperty$impl');
let DataPointFactory = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.DataPointFactory$impl');
let InternalProperty = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.InternalProperty$impl');
let TimeSeriesItemFactory = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.TimeSeriesItemFactory$impl');
let GradientsContainer = goog.forwardDeclare('org.pepstock.charba.client.data.GradientsContainer$impl');
let PatternsContainer = goog.forwardDeclare('org.pepstock.charba.client.data.PatternsContainer$impl');
let TimeSeriesItem = goog.forwardDeclare('org.pepstock.charba.client.data.TimeSeriesItem$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
let IsDefaultTypedDataset = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTypedDataset$impl');
let DataType = goog.forwardDeclare('org.pepstock.charba.client.enums.DataType$impl');
let DefaultPluginId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultPluginId$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Animation = goog.forwardDeclare('org.pepstock.charba.client.options.Animation$impl');
let AnimationContainer = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationContainer$impl');
let Animations = goog.forwardDeclare('org.pepstock.charba.client.options.Animations$impl');
let Transitions = goog.forwardDeclare('org.pepstock.charba.client.options.Transitions$impl');
let AbstractPluginOptions = goog.forwardDeclare('org.pepstock.charba.client.plugins.AbstractPluginOptions$impl');
let AbstractPluginOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');
let PluginIdChecker = goog.forwardDeclare('org.pepstock.charba.client.plugins.PluginIdChecker$impl');
let JSON_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.utils.JSON.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @abstract
 * @implements {HasDataset}
 * @implements {HasAnimationOptions}
 * @implements {HasCallbackScope}
 */
class Dataset extends AbstractNode {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_backgroundColorCallbackProxy__org_pepstock_charba_client_data_Dataset_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_borderColorCallbackProxy__org_pepstock_charba_client_data_Dataset_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_borderWidthCallbackProxy__org_pepstock_charba_client_data_Dataset_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_hoverBackgroundColorCallbackProxy__org_pepstock_charba_client_data_Dataset_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_hoverBorderColorCallbackProxy__org_pepstock_charba_client_data_Dataset_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_hoverBorderWidthCallbackProxy__org_pepstock_charba_client_data_Dataset_;
  /**@type {ColorCallback<DatasetContext>}*/
  this.f_hoverBackgroundColorCallback__org_pepstock_charba_client_data_Dataset_;
  /**@type {ColorCallback<DatasetContext>}*/
  this.f_hoverBorderColorCallback__org_pepstock_charba_client_data_Dataset_;
  /**@type {WidthCallback<DatasetContext>}*/
  this.f_hoverBorderWidthCallback__org_pepstock_charba_client_data_Dataset_;
  /**@type {ColorCallback<DatasetContext>}*/
  this.f_backgroundColorCallback__org_pepstock_charba_client_data_Dataset_;
  /**@type {ColorCallback<DatasetContext>}*/
  this.f_borderColorCallback__org_pepstock_charba_client_data_Dataset_;
  /**@type {WidthCallback<DatasetContext>}*/
  this.f_borderWidthCallback__org_pepstock_charba_client_data_Dataset_;
  /**@type {PatternsContainer}*/
  this.f_patternsContainer__org_pepstock_charba_client_data_Dataset_;
  /**@type {GradientsContainer}*/
  this.f_gradientsContainer__org_pepstock_charba_client_data_Dataset_;
  /**@type {Map<?string, Gradient>}*/
  this.f_callbackGradientsContainer__org_pepstock_charba_client_data_Dataset_;
  /**@type {Map<?string, Pattern>}*/
  this.f_callbackPatternsContainer__org_pepstock_charba_client_data_Dataset_;
  /**@type {IsDefaultOptions}*/
  this.f_defaultValues__org_pepstock_charba_client_data_Dataset_;
  /**@type {Type}*/
  this.f_type__org_pepstock_charba_client_data_Dataset_;
  /**@type {?string}*/
  this.f_scope__org_pepstock_charba_client_data_Dataset_;
  /**@type {AnimationContainer}*/
  this.f_animationContainer__org_pepstock_charba_client_data_Dataset_;
 }
 
 $ctor__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_NativeObject(null);
  this.$init___$p_org_pepstock_charba_client_data_Dataset();
  this.f_defaultValues__org_pepstock_charba_client_data_Dataset_ = $Equality.$same(defaultValues, null) ? Defaults.m_get__().m_getOptions__org_pepstock_charba_client_Type(Type.m_checkAndGetIfValid__org_pepstock_charba_client_Type(type)) : defaultValues;
  this.f_scope__org_pepstock_charba_client_data_Dataset_ = Dataset.m_createScope__int(this.m_getId__());
  this.f_animationContainer__org_pepstock_charba_client_data_Dataset_ = AnimationContainer.$create__org_pepstock_charba_client_defaults_IsDefaultAnimationContainer__org_pepstock_charba_client_data_DataEnvelop__java_lang_String(this.m_getDefaultValues__(), /**@type {!DataEnvelop<?>}*/ (DataEnvelop.$create__java_lang_Object(this.m_getNativeObject__())), this.f_scope__org_pepstock_charba_client_data_Dataset_);
  this.f_type__org_pepstock_charba_client_data_Dataset_ = type;
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(InternalProperty.f_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty, type);
  if (hidden) {
   this.m_setHidden__boolean(hidden);
  }
  this.f_patternsContainer__org_pepstock_charba_client_data_Dataset_ = PatternsContainer.$create__org_pepstock_charba_client_data_Dataset(this);
  this.f_gradientsContainer__org_pepstock_charba_client_data_Dataset_ = GradientsContainer.$create__org_pepstock_charba_client_data_Dataset(this);
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(InternalProperty.f_CHARBA_ID__org_pepstock_charba_client_data_Dataset_InternalProperty, Dataset.f_COUNTER__org_pepstock_charba_client_data_Dataset_.m_getAndIncrement__());
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(InternalProperty.f_CHARBA_PATTERNS__org_pepstock_charba_client_data_Dataset_InternalProperty, this.f_patternsContainer__org_pepstock_charba_client_data_Dataset_);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(InternalProperty.f_CHARBA_GRADIENTS__org_pepstock_charba_client_data_Dataset_InternalProperty, this.f_gradientsContainer__org_pepstock_charba_client_data_Dataset_);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(InternalProperty.f_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty, DataType.f_UNKNOWN__org_pepstock_charba_client_enums_DataType);
  this.f_backgroundColorCallbackProxy__org_pepstock_charba_client_data_Dataset_.callback = (/** ? */ context) =>{
   return this.m_invokeColorCallback__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__java_lang_String(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context), this.m_getBackgroundColorCallback__(), CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, this.m_getDefaultBackgroundColorAsString__());
  };
  this.f_borderColorCallbackProxy__org_pepstock_charba_client_data_Dataset_.callback = (/** ? */ context_1) =>{
   return this.m_invokeColorCallback__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__java_lang_String(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_1), this.m_getBorderColorCallback__(), CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, this.m_getDefaultBorderColorAsString__());
  };
  this.f_borderWidthCallbackProxy__org_pepstock_charba_client_data_Dataset_.callback = (/** ? */ context_2) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_2), this.f_borderWidthCallback__org_pepstock_charba_client_data_Dataset_, Integer.m_valueOf__int(this.m_getDefaultBorderWidth__())), Integer)).m_intValue__();
  };
  this.f_hoverBackgroundColorCallbackProxy__org_pepstock_charba_client_data_Dataset_.callback = (/** ? */ context_3) =>{
   return this.m_invokeColorCallback__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__java_lang_String(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_3), this.m_getHoverBackgroundColorCallback__(), CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, this.m_getDefaultBackgroundColorAsString__());
  };
  this.f_hoverBorderColorCallbackProxy__org_pepstock_charba_client_data_Dataset_.callback = (/** ? */ context_4) =>{
   return this.m_invokeColorCallback__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__java_lang_String(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_4), this.m_getHoverBorderColorCallback__(), CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, this.m_getDefaultBorderColorAsString__());
  };
  this.f_hoverBorderWidthCallbackProxy__org_pepstock_charba_client_data_Dataset_.callback = (/** ? */ context_5) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_5), this.f_hoverBorderWidthCallback__org_pepstock_charba_client_data_Dataset_, Integer.m_valueOf__int(this.m_getDefaultBorderWidth__())), Integer)).m_intValue__();
  };
 }
 /** @override @return {AnimationContainer} */
 m_getAnimationContainer__() {
  return this.f_animationContainer__org_pepstock_charba_client_data_Dataset_;
 }
 /** @return {number} */
 m_getDataCount__() {
  let array = this.m_getArrayValue__org_pepstock_charba_client_commons_Key(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty);
  return !$Equality.$same(array, null) ? array.length : 0;
 }
 /** @return {number} */
 m_getId__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(InternalProperty.f_CHARBA_ID__org_pepstock_charba_client_data_Dataset_InternalProperty, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @override @return {?string} */
 m_getScope__() {
  return this.f_scope__org_pepstock_charba_client_data_Dataset_;
 }
 /** @return {DataType} */
 m_getDataType__() {
  return /**@type {DataType}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(InternalProperty.f_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty, DataType.m_values__(), DataType.f_UNKNOWN__org_pepstock_charba_client_enums_DataType), DataType));
 }
 /** @return {PatternsContainer} */
 m_getPatternsContainer___$pp_org_pepstock_charba_client_data() {
  return this.f_patternsContainer__org_pepstock_charba_client_data_Dataset_;
 }
 /** @return {GradientsContainer} */
 m_getGradientsContainer___$pp_org_pepstock_charba_client_data() {
  return this.f_gradientsContainer__org_pepstock_charba_client_data_Dataset_;
 }
 /** @return {IsDefaultOptions} */
 m_getDefaultValues__() {
  return this.f_defaultValues__org_pepstock_charba_client_data_Dataset_;
 }
 /** @return {IsDefaultTypedDataset} */
 m_getTypedDataset__() {
  return this.m_getDefaultValues__().m_getDatasets__().m_get__org_pepstock_charba_client_Type(this.m_getType__());
 }
 /** @return {boolean} */
 m_hasColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(/** Key */ key) {
  return !this.m_getPatternsContainer___$pp_org_pepstock_charba_client_data().m_hasObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(key) && !this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_hasObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(key);
 }
 /** @return {boolean} */
 m_hasPatterns__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(/** Key */ key) {
  return this.m_getPatternsContainer___$pp_org_pepstock_charba_client_data().m_hasObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(key);
 }
 /** @return {boolean} */
 m_hasGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(/** Key */ key) {
  return this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_hasObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(key);
 }
 
 m_resetBeingColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(/** Key */ key) {
  this.m_getPatternsContainer___$pp_org_pepstock_charba_client_data().m_removeObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(key);
  this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_removeObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(key);
 }
 
 m_resetBeingPatterns__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(/** Key */ key) {
  this.m_remove__org_pepstock_charba_client_commons_Key(key);
  this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_removeObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(key);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(key, this.m_getPatternsContainer___$pp_org_pepstock_charba_client_data().m_getProxy__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(key));
 }
 
 m_resetBeingGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(/** Key */ key) {
  this.m_remove__org_pepstock_charba_client_commons_Key(key);
  this.m_getPatternsContainer___$pp_org_pepstock_charba_client_data().m_removeObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(key);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(key, this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_getProxy__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(key));
 }
 
 m_resetBeingCallback__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(/** Key */ key) {
  this.m_remove__org_pepstock_charba_client_commons_Key(key);
  this.m_getPatternsContainer___$pp_org_pepstock_charba_client_data().m_removeObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(key);
  this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_removeObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(key);
 }
 /** @return {ColorCallback<DatasetContext>} */
 m_getBackgroundColorCallback__() {
  return this.f_backgroundColorCallback__org_pepstock_charba_client_data_Dataset_;
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<DatasetContext> */ backgroundColorCallback) {
  this.f_backgroundColorCallback__org_pepstock_charba_client_data_Dataset_ = backgroundColorCallback;
  if (!$Equality.$same(backgroundColorCallback, null)) {
   this.m_resetBeingCallback__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, this.f_backgroundColorCallbackProxy__org_pepstock_charba_client_data_Dataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
  }
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ backgroundColorCallback) {
  this.m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_resetBeingCallback__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, backgroundColorCallback);
 }
 /** @return {ColorCallback<DatasetContext>} */
 m_getBorderColorCallback__() {
  return this.f_borderColorCallback__org_pepstock_charba_client_data_Dataset_;
 }
 
 m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<DatasetContext> */ borderColorCallback) {
  this.f_borderColorCallback__org_pepstock_charba_client_data_Dataset_ = borderColorCallback;
  if (!$Equality.$same(borderColorCallback, null)) {
   this.m_resetBeingCallback__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, this.f_borderColorCallbackProxy__org_pepstock_charba_client_data_Dataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
  }
 }
 
 m_setBorderColor__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderColorCallback) {
  this.m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_resetBeingCallback__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, borderColorCallback);
 }
 /** @return {WidthCallback<DatasetContext>} */
 m_getInternalBorderWidthCallback___$pp_org_pepstock_charba_client_data() {
  return this.f_borderWidthCallback__org_pepstock_charba_client_data_Dataset_;
 }
 
 m_setInternalBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback_$pp_org_pepstock_charba_client_data(/** WidthCallback<DatasetContext> */ borderWidthCallback) {
  this.f_borderWidthCallback__org_pepstock_charba_client_data_Dataset_ = borderWidthCallback;
  if (!$Equality.$same(borderWidthCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(CommonProperty.f_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, this.f_borderWidthCallbackProxy__org_pepstock_charba_client_data_Dataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(CommonProperty.f_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty);
  }
 }
 
 m_setInternalBorderWidth__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_data(/** Function */ borderWidthCallback) {
  if (!$Equality.$same(borderWidthCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(CommonProperty.f_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, borderWidthCallback);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(CommonProperty.f_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty);
  }
 }
 /** @return {DatasetContext} */
 m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(/** ? */ context) {
  return DatasetContext.$create__org_pepstock_charba_client_commons_NativeObject(context);
 }
 /** @return {ColorCallback<DatasetContext>} */
 m_getHoverBackgroundColorCallback__() {
  return this.f_hoverBackgroundColorCallback__org_pepstock_charba_client_data_Dataset_;
 }
 
 m_setHoverBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<DatasetContext> */ hoverBackgroundColorCallback) {
  this.f_hoverBackgroundColorCallback__org_pepstock_charba_client_data_Dataset_ = hoverBackgroundColorCallback;
  if (!$Equality.$same(hoverBackgroundColorCallback, null)) {
   this.m_resetBeingCallback__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, this.f_hoverBackgroundColorCallbackProxy__org_pepstock_charba_client_data_Dataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
  }
 }
 
 m_setHoverBackgroundColor__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ hoverBackgroundColorCallback) {
  this.m_setHoverBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_resetBeingCallback__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, hoverBackgroundColorCallback);
 }
 /** @return {ColorCallback<DatasetContext>} */
 m_getHoverBorderColorCallback__() {
  return this.f_hoverBorderColorCallback__org_pepstock_charba_client_data_Dataset_;
 }
 
 m_setHoverBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<DatasetContext> */ hoverBorderColorCallback) {
  this.f_hoverBorderColorCallback__org_pepstock_charba_client_data_Dataset_ = hoverBorderColorCallback;
  if (!$Equality.$same(hoverBorderColorCallback, null)) {
   this.m_resetBeingCallback__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, this.f_hoverBorderColorCallbackProxy__org_pepstock_charba_client_data_Dataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
  }
 }
 
 m_setHoverBorderColor__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ hoverBorderColorCallback) {
  this.m_setHoverBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_resetBeingCallback__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, hoverBorderColorCallback);
 }
 /** @return {WidthCallback<DatasetContext>} */
 m_getInternalHoverBorderWidthCallback___$pp_org_pepstock_charba_client_data() {
  return this.f_hoverBorderWidthCallback__org_pepstock_charba_client_data_Dataset_;
 }
 
 m_setInternalHoverBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback_$pp_org_pepstock_charba_client_data(/** WidthCallback<DatasetContext> */ hoverBorderWidthCallback) {
  this.f_hoverBorderWidthCallback__org_pepstock_charba_client_data_Dataset_ = hoverBorderWidthCallback;
  if (!$Equality.$same(hoverBorderWidthCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(CommonProperty.f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, this.f_hoverBorderWidthCallbackProxy__org_pepstock_charba_client_data_Dataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(CommonProperty.f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty);
  }
 }
 
 m_setInternalHoverBorderWidth__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_data(/** Function */ hoverBorderWidthCallback) {
  if (!$Equality.$same(hoverBorderWidthCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(CommonProperty.f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, hoverBorderWidthCallback);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(CommonProperty.f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty);
  }
 }
 /** @return {?string} */
 m_getDefaultBackgroundColorAsString__() {
  return this.m_getDefaultValues__().m_getElements__().m_getArc__().m_getBackgroundColorAsString__();
 }
 /** @return {?string} */
 m_getDefaultBorderColorAsString__() {
  return this.m_getDefaultValues__().m_getElements__().m_getArc__().m_getBorderColorAsString__();
 }
 /** @return {number} */
 m_getDefaultBorderWidth__() {
  return this.m_getDefaultValues__().m_getElements__().m_getArc__().m_getBorderWidth__();
 }
 /** @return {?string} */
 m_getDefaultHoverBackgroundColorAsString__() {
  return this.m_getDefaultValues__().m_getElements__().m_getArc__().m_getBackgroundColorAsString__();
 }
 /** @return {?string} */
 m_getDefaultHoverBorderColorAsString__() {
  return this.m_getDefaultValues__().m_getElements__().m_getArc__().m_getBorderColorAsString__();
 }
 /** @return {number} */
 m_getDefaultHoverBorderWidth__() {
  return this.m_getDefaultValues__().m_getElements__().m_getArc__().m_getBorderWidth__();
 }
 
 m_setHidden__boolean(/** boolean */ hidden) {
  if (hidden) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(InternalProperty.f_HIDDEN__org_pepstock_charba_client_data_Dataset_InternalProperty, hidden);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(InternalProperty.f_HIDDEN__org_pepstock_charba_client_data_Dataset_InternalProperty);
  }
 }
 /** @return {boolean} */
 m_isHidden__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(InternalProperty.f_HIDDEN__org_pepstock_charba_client_data_Dataset_InternalProperty, Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 
 m_setParsing__boolean(/** boolean */ parsing) {
  if (!parsing) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(InternalProperty.f_PARSING__org_pepstock_charba_client_data_Dataset_InternalProperty, parsing);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(InternalProperty.f_PARSING__org_pepstock_charba_client_data_Dataset_InternalProperty);
  }
 }
 /** @return {boolean} */
 m_isParsing__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(InternalProperty.f_PARSING__org_pepstock_charba_client_data_Dataset_InternalProperty, Dataset.f_DEFAULT_PARSING__org_pepstock_charba_client_data_Dataset);
 }
 
 m_setNormalized__boolean(/** boolean */ normalized) {
  if (normalized) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(InternalProperty.f_NORMALIZED__org_pepstock_charba_client_data_Dataset_InternalProperty, normalized);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(InternalProperty.f_NORMALIZED__org_pepstock_charba_client_data_Dataset_InternalProperty);
  }
 }
 /** @return {boolean} */
 m_isNormalized__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(InternalProperty.f_NORMALIZED__org_pepstock_charba_client_data_Dataset_InternalProperty, Dataset.f_DEFAULT_NORMALIZED__org_pepstock_charba_client_data_Dataset);
 }
 
 m_setLabel__java_lang_String(/** ?string */ label) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(InternalProperty.f_LABEL__org_pepstock_charba_client_data_Dataset_InternalProperty, label);
 }
 /** @return {?string} */
 m_getLabel__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(InternalProperty.f_LABEL__org_pepstock_charba_client_data_Dataset_InternalProperty, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
 }
 
 m_setClip__double(/** number */ clip) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(CommonProperty.f_CLIP__org_pepstock_charba_client_data_Dataset_CommonProperty, clip);
 }
 
 m_setClip__org_pepstock_charba_client_data_Clip(/** Clip */ clip) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(CommonProperty.f_CLIP__org_pepstock_charba_client_data_Dataset_CommonProperty, clip);
 }
 /** @return {number} */
 m_getClip__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(CommonProperty.f_CLIP__org_pepstock_charba_client_data_Dataset_CommonProperty, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
   return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
  }
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(CommonProperty.f_CLIP__org_pepstock_charba_client_data_Dataset_CommonProperty, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {Clip} */
 m_getClipAsObject__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(CommonProperty.f_CLIP__org_pepstock_charba_client_data_Dataset_CommonProperty, ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType)) {
   return Clip.$create__double(this.m_getClip__());
  }
  return Clip.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(CommonProperty.f_CLIP__org_pepstock_charba_client_data_Dataset_CommonProperty));
 }
 /** @return {boolean} */
 m_mustUseDataPoints___$pp_org_pepstock_charba_client_data() {
  return false;
 }
 
 m_setData__arrayOf_double(/** Array<number> */ values) {
  this.m_checkIfDataPointsMustBeUsed___$pp_org_pepstock_charba_client_data();
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty, ArrayDouble_$Overlay.m_fromOrNull__arrayOf_double(values));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(InternalProperty.f_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty, this.m_has__org_pepstock_charba_client_commons_Key(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty) ? DataType.f_NUMBERS__org_pepstock_charba_client_enums_DataType : DataType.f_UNKNOWN__org_pepstock_charba_client_enums_DataType);
 }
 
 m_setData__java_util_List(/** List<?number> */ values) {
  this.m_checkIfDataPointsMustBeUsed___$pp_org_pepstock_charba_client_data();
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty, ArrayDouble_$Overlay.m_fromOrNull__java_util_List(values));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(InternalProperty.f_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty, this.m_has__org_pepstock_charba_client_commons_Key(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty) ? DataType.f_NUMBERS__org_pepstock_charba_client_enums_DataType : DataType.f_UNKNOWN__org_pepstock_charba_client_enums_DataType);
 }
 /** @return {List<?number>} */
 m_getData__() {
  return this.m_getData__boolean(false);
 }
 /** @return {List<?number>} */
 m_getData__boolean(/** boolean */ binding) {
  this.m_checkIfDataPointsMustBeUsed___$pp_org_pepstock_charba_client_data();
  if (this.m_has__org_pepstock_charba_client_commons_Key(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty) && $Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_NUMBERS__org_pepstock_charba_client_enums_DataType, this.m_getDataType__())) {
   let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty), ArrayDouble_$Overlay));
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayDouble(array);
  }
  if (binding) {
   let result = ArrayDoubleList.$create__();
   this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty, ArrayDouble_$Overlay.m_fromOrEmpty__java_util_List(result));
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(InternalProperty.f_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty, DataType.f_NUMBERS__org_pepstock_charba_client_enums_DataType);
   return result;
  }
  return /**@type {List<?number>}*/ (Collections.m_emptyList__());
 }
 /** @return {List<DataPoint>} */
 m_getDataPoints__org_pepstock_charba_client_data_Dataset_DataPointFactory__boolean_$pp_org_pepstock_charba_client_data(/** DataPointFactory */ factory, /** boolean */ binding) {
  if (this.m_has__org_pepstock_charba_client_commons_Key(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty) && $Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_POINTS__org_pepstock_charba_client_enums_DataType, this.m_getDataType__())) {
   let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty), ArrayObject_$Overlay));
   return /**@type {ArrayObjectContainerList<DataPoint>}*/ (ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, factory));
  }
  if (binding) {
   let result = /**@type {!ArrayObjectContainerList<DataPoint>}*/ (ArrayObjectContainerList.$create__());
   this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty, ArrayObject_$Overlay.m_fromOrEmpty__java_util_List(result));
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(InternalProperty.f_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty, DataType.f_POINTS__org_pepstock_charba_client_enums_DataType);
   return result;
  }
  return /**@type {List<DataPoint>}*/ (Collections.m_emptyList__());
 }
 
 m_setInternalDataPoints__arrayOf_org_pepstock_charba_client_data_DataPoint_$pp_org_pepstock_charba_client_data(/** Array<DataPoint> */ datapoints) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty, ArrayObject_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(datapoints));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(InternalProperty.f_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty, this.m_has__org_pepstock_charba_client_commons_Key(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty) ? DataType.f_POINTS__org_pepstock_charba_client_enums_DataType : DataType.f_UNKNOWN__org_pepstock_charba_client_enums_DataType);
 }
 
 m_setInternalDataPoints__java_util_List_$pp_org_pepstock_charba_client_data(/** List<DataPoint> */ datapoints) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty, ArrayObject_$Overlay.m_fromOrNull__java_util_List(datapoints));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(InternalProperty.f_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty, this.m_has__org_pepstock_charba_client_commons_Key(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty) ? DataType.f_POINTS__org_pepstock_charba_client_enums_DataType : DataType.f_UNKNOWN__org_pepstock_charba_client_enums_DataType);
 }
 /** @return {List<TimeSeriesItem>} */
 m_getTimeSeriesItems__org_pepstock_charba_client_data_Dataset_TimeSeriesItemFactory__boolean_$pp_org_pepstock_charba_client_data(/** TimeSeriesItemFactory */ factory, /** boolean */ binding) {
  if (this.m_has__org_pepstock_charba_client_commons_Key(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty) && $Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_POINTS__org_pepstock_charba_client_enums_DataType, this.m_getDataType__())) {
   let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty), ArrayObject_$Overlay));
   return /**@type {ArrayObjectContainerList<TimeSeriesItem>}*/ (ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, factory));
  }
  if (binding) {
   let result = /**@type {!ArrayObjectContainerList<TimeSeriesItem>}*/ (ArrayObjectContainerList.$create__());
   this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty, ArrayObject_$Overlay.m_fromOrEmpty__java_util_List(result));
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(InternalProperty.f_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty, DataType.f_POINTS__org_pepstock_charba_client_enums_DataType);
   return result;
  }
  return /**@type {List<TimeSeriesItem>}*/ (Collections.m_emptyList__());
 }
 
 m_setInternalTimeSeriesItems__arrayOf_org_pepstock_charba_client_data_TimeSeriesItem_$pp_org_pepstock_charba_client_data(/** Array<TimeSeriesItem> */ timeSeriesItems) {
  if (!$Equality.$same(timeSeriesItems, null)) {
   Arrays.m_sort__arrayOf_java_lang_Object__java_util_Comparator(timeSeriesItems, Dataset.f_COMPARATOR__org_pepstock_charba_client_data_Dataset_);
  }
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty, ArrayObject_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(timeSeriesItems));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(InternalProperty.f_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty, this.m_has__org_pepstock_charba_client_commons_Key(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty) ? DataType.f_POINTS__org_pepstock_charba_client_enums_DataType : DataType.f_UNKNOWN__org_pepstock_charba_client_enums_DataType);
 }
 
 m_setInternalTimeSeriesItems__java_util_List_$pp_org_pepstock_charba_client_data(/** List<TimeSeriesItem> */ timeSeriesItems) {
  if (!$Equality.$same(timeSeriesItems, null)) {
   Collections.m_sort__java_util_List__java_util_Comparator(timeSeriesItems, Dataset.f_COMPARATOR__org_pepstock_charba_client_data_Dataset_);
  }
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty, ArrayObject_$Overlay.m_fromOrNull__java_util_List(timeSeriesItems));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(InternalProperty.f_CHARBA_DATA_TYPE__org_pepstock_charba_client_data_Dataset_InternalProperty, this.m_has__org_pepstock_charba_client_commons_Key(CommonProperty.f_DATA__org_pepstock_charba_client_data_Dataset_CommonProperty) ? DataType.f_POINTS__org_pepstock_charba_client_enums_DataType : DataType.f_UNKNOWN__org_pepstock_charba_client_enums_DataType);
 }
 /** @override @return {Dataset} */
 m_getDataset__() {
  return this;
 }
 /** @return {Type} */
 m_getType__() {
  return this.f_type__org_pepstock_charba_client_data_Dataset_;
 }
 
 m_removeOptions__java_lang_String(/** ?string */ pluginId) {
  if (this.m_hasOptions__java_lang_String(pluginId)) {
   let pluginIdKey = PluginIdChecker.m_key__java_lang_String(pluginId);
   this.m_remove__org_pepstock_charba_client_commons_Key(pluginIdKey);
  }
 }
 /** @template T */
 m_setOptions__org_pepstock_charba_client_plugins_AbstractPluginOptions(/** T */ options) {
  if (!$Equality.$same(options, null) && !DefaultPluginId.m_is__java_lang_String(/**@type {AbstractPluginOptions}*/ (options).m_getPluginId__())) {
   let pluginIdKey = PluginIdChecker.m_key__java_lang_String(/**@type {AbstractPluginOptions}*/ (options).m_getPluginId__());
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(pluginIdKey, options);
  }
 }
 /** @template T */
 m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(/** ?string */ pluginId, /** T */ options) {
  if (!DefaultPluginId.m_is__java_lang_String(pluginId)) {
   if ($Equality.$same(options, null) && !DefaultPluginId.m_is__java_lang_String(pluginId)) {
    this.m_remove__org_pepstock_charba_client_commons_Key(PluginIdChecker.m_key__java_lang_String(pluginId));
   } else {
    this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(PluginIdChecker.m_key__java_lang_String(pluginId), options);
   }
  }
 }
 /** @return {boolean} */
 m_hasOptions__java_lang_String(/** ?string */ pluginId) {
  return this.m_has__org_pepstock_charba_client_commons_Key(PluginIdChecker.m_key__java_lang_String(pluginId)) && !DefaultPluginId.m_is__java_lang_String(pluginId);
 }
 /** @template T @return {T} */
 m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(/** ?string */ pluginId, /** AbstractPluginOptionsFactory<T> */ factory) {
  if (!$Equality.$same(factory, null) && !DefaultPluginId.m_is__java_lang_String(pluginId)) {
   return factory.m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(this.m_getValue__org_pepstock_charba_client_commons_Key(PluginIdChecker.m_key__java_lang_String(pluginId)), this.f_defaultValues__org_pepstock_charba_client_data_Dataset_.m_getPlugins__());
  }
  return null;
 }
 /** @template T @return {T} */
 m_getOptions__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(/** AbstractPluginOptionsFactory<T> */ factory) {
  if (!$Equality.$same(factory, null) && !DefaultPluginId.m_is__java_lang_String(factory.m_getPluginId__())) {
   return factory.m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(this.m_getValue__org_pepstock_charba_client_commons_Key(PluginIdChecker.m_key__java_lang_String(factory.m_getPluginId__())), this.f_defaultValues__org_pepstock_charba_client_data_Dataset_.m_getPlugins__());
  }
  return null;
 }
 
 m_clearCallbackPatternsAndGradients___$pp_org_pepstock_charba_client_data() {
  this.f_callbackGradientsContainer__org_pepstock_charba_client_data_Dataset_.clear();
  this.f_callbackPatternsContainer__org_pepstock_charba_client_data_Dataset_.clear();
 }
 
 m_resetCallbackGradients___$pp_org_pepstock_charba_client_data() {
  this.f_callbackGradientsContainer__org_pepstock_charba_client_data_Dataset_.clear();
 }
 /** @return {Gradient} */
 m_getCallbackGradient__org_pepstock_charba_client_commons_Key__int__int_$pp_org_pepstock_charba_client_data(/** Key */ property, /** number */ datasetIndex, /** number */ index) {
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(property) && !this.f_callbackGradientsContainer__org_pepstock_charba_client_data_Dataset_.isEmpty()) {
   let key = this.m_createCallbackCanvasObjectKey__org_pepstock_charba_client_commons_Key__int__int_$p_org_pepstock_charba_client_data_Dataset(property, datasetIndex, index);
   return /**@type {Gradient}*/ ($Casts.$to(this.f_callbackGradientsContainer__org_pepstock_charba_client_data_Dataset_.get(key), Gradient));
  }
  return null;
 }
 /** @return {Pattern} */
 m_getCallbackPattern__org_pepstock_charba_client_commons_Key__int__int_$pp_org_pepstock_charba_client_data(/** Key */ property, /** number */ datasetIndex, /** number */ index) {
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(property) && !this.f_callbackPatternsContainer__org_pepstock_charba_client_data_Dataset_.isEmpty()) {
   let key = this.m_createCallbackCanvasObjectKey__org_pepstock_charba_client_commons_Key__int__int_$p_org_pepstock_charba_client_data_Dataset(property, datasetIndex, index);
   return /**@type {Pattern}*/ ($Casts.$to(this.f_callbackPatternsContainer__org_pepstock_charba_client_data_Dataset_.get(key), Pattern));
  }
  return null;
 }
 /** @return {*} */
 m_invokeColorCallback__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__java_lang_String(/** DatasetContext */ context, /** Scriptable<?, DatasetContext> */ callback, /** CanvasObjectKey */ property, /** ?string */ defaultValue) {
  if (!$Equality.$same(context, null)) {
   let result = callback.m_invoke__org_pepstock_charba_client_callbacks_ChartContext(context);
   if (Gradient.$isInstance(result)) {
    let key = this.m_createCallbackCanvasObjectKey__org_pepstock_charba_client_commons_Key__int__int_$p_org_pepstock_charba_client_data_Dataset(property, context.m_getDatasetIndex__(), context.m_getDataIndex__());
    let gradient = /**@type {Gradient}*/ ($Casts.$to(result, Gradient));
    this.f_callbackGradientsContainer__org_pepstock_charba_client_data_Dataset_.put(key, gradient);
   } else if (Pattern.$isInstance(result)) {
    let key_1 = this.m_createCallbackCanvasObjectKey__org_pepstock_charba_client_commons_Key__int__int_$p_org_pepstock_charba_client_data_Dataset(property, context.m_getDatasetIndex__(), context.m_getDataIndex__());
    let pattern = /**@type {Pattern}*/ ($Casts.$to(result, Pattern));
    this.f_callbackPatternsContainer__org_pepstock_charba_client_data_Dataset_.put(key_1, pattern);
   }
   return ScriptableUtils.m_handleCallbackResultAsColor__org_pepstock_charba_client_callbacks_ChartContext__java_lang_Object__java_lang_String__boolean(context, result, defaultValue, property.m_hasPattern__());
  }
  return defaultValue;
 }
 /** @return {?string} */
 m_createCallbackCanvasObjectKey__org_pepstock_charba_client_commons_Key__int__int_$p_org_pepstock_charba_client_data_Dataset(/** Key */ property, /** number */ datasetIndex, /** number */ index) {
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(property);
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_String(property.m_value__()).m_append__java_lang_String(Constants.f_COMMA__org_pepstock_charba_client_commons_Constants);
  sb.m_append__int(Math.max(datasetIndex, 0)).m_append__java_lang_String(Constants.f_COMMA__org_pepstock_charba_client_commons_Constants);
  sb.m_append__int(Math.max(index, 0));
  return sb.toString();
 }
 
 m_checkIfDataPointsMustBeUsed___$pp_org_pepstock_charba_client_data() {
  if (this.m_mustUseDataPoints___$pp_org_pepstock_charba_client_data()) {
   throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(Dataset.f_DATA_USAGE_MESSAGE__org_pepstock_charba_client_data_Dataset));
  }
 }
 /** @return {?string} */
 m_toFilteredJSON___$pp_org_pepstock_charba_client_data() {
  return JSON_$Overlay.m_stringifyNativeObject__org_pepstock_charba_client_commons_NativeObject__int(this.m_getNativeObject__(), -1 | 0);
 }
 /** @return {?string} */
 static m_createScope__int(/** number */ id) {
  let sb = StringBuilder.$create__java_lang_String("dataset-");
  return sb.m_append__int(id).toString();
 }
 //Default method forwarding stub.
 /** @override @return {Animation} */
 m_getAnimation__() {
  return HasAnimationOptions.m_getAnimation__$default__org_pepstock_charba_client_options_HasAnimationOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {Animations} */
 m_getAnimations__() {
  return HasAnimationOptions.m_getAnimations__$default__org_pepstock_charba_client_options_HasAnimationOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {Transitions} */
 m_getTransitions__() {
  return HasAnimationOptions.m_getTransitions__$default__org_pepstock_charba_client_options_HasAnimationOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isAnimationEnabled__() {
  return HasAnimationOptions.m_isAnimationEnabled__$default__org_pepstock_charba_client_options_HasAnimationOptions(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setAnimationEnabled__boolean(/** boolean */ arg0) {
  HasAnimationOptions.m_setAnimationEnabled__$default__org_pepstock_charba_client_options_HasAnimationOptions__boolean(this, arg0);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_data_Dataset() {
  this.f_backgroundColorCallbackProxy__org_pepstock_charba_client_data_Dataset_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderColorCallbackProxy__org_pepstock_charba_client_data_Dataset_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderWidthCallbackProxy__org_pepstock_charba_client_data_Dataset_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hoverBackgroundColorCallbackProxy__org_pepstock_charba_client_data_Dataset_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hoverBorderColorCallbackProxy__org_pepstock_charba_client_data_Dataset_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hoverBorderWidthCallbackProxy__org_pepstock_charba_client_data_Dataset_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hoverBackgroundColorCallback__org_pepstock_charba_client_data_Dataset_ = null;
  this.f_hoverBorderColorCallback__org_pepstock_charba_client_data_Dataset_ = null;
  this.f_hoverBorderWidthCallback__org_pepstock_charba_client_data_Dataset_ = null;
  this.f_backgroundColorCallback__org_pepstock_charba_client_data_Dataset_ = null;
  this.f_borderColorCallback__org_pepstock_charba_client_data_Dataset_ = null;
  this.f_borderWidthCallback__org_pepstock_charba_client_data_Dataset_ = null;
  this.f_callbackGradientsContainer__org_pepstock_charba_client_data_Dataset_ = /**@type {!HashMap<?string, Gradient>}*/ (HashMap.$create__());
  this.f_callbackPatternsContainer__org_pepstock_charba_client_data_Dataset_ = /**@type {!HashMap<?string, Pattern>}*/ (HashMap.$create__());
 }
 /** @return {DataPointFactory} */
 static get f_DATAPOINTS_FACTORY__org_pepstock_charba_client_data_Dataset() {
  return (Dataset.$clinit(), Dataset.$static_DATAPOINTS_FACTORY__org_pepstock_charba_client_data_Dataset);
 }
 /** @return {TimeSeriesItemFactory} */
 static get f_TIMESERIES_ITEMS_FACTORY__org_pepstock_charba_client_data_Dataset() {
  return (Dataset.$clinit(), Dataset.$static_TIMESERIES_ITEMS_FACTORY__org_pepstock_charba_client_data_Dataset);
 }
 
 static $clinit() {
  Dataset.$clinit = () =>{};
  Dataset.$loadModules();
  AbstractNode.$clinit();
  HasAnimationOptions.$clinit();
  Dataset.f_COUNTER__org_pepstock_charba_client_data_Dataset_ = AtomicInteger.$create__int(0);
  Dataset.$static_DATAPOINTS_FACTORY__org_pepstock_charba_client_data_Dataset = DataPointFactory.$create__();
  Dataset.$static_TIMESERIES_ITEMS_FACTORY__org_pepstock_charba_client_data_Dataset = TimeSeriesItemFactory.$create__();
  Dataset.f_COMPARATOR__org_pepstock_charba_client_data_Dataset_ = Comparator.$adapt((o1, o2) =>{
   let o1_1 = /**@type {TimeSeriesItem}*/ ($Casts.$to(o1, TimeSeriesItem));
   let o2_1 = /**@type {TimeSeriesItem}*/ ($Casts.$to(o2, TimeSeriesItem));
   return o1_1.m_getTime__().m_compareTo__java_util_Date(o2_1.m_getTime__());
  });
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Dataset;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Comparator = goog.module.get('java.util.Comparator$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  AtomicInteger = goog.module.get('java.util.concurrent.atomic.AtomicInteger$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Type = goog.module.get('org.pepstock.charba.client.Type$impl');
  DatasetContext = goog.module.get('org.pepstock.charba.client.callbacks.DatasetContext$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  Gradient = goog.module.get('org.pepstock.charba.client.colors.Gradient$impl');
  Pattern = goog.module.get('org.pepstock.charba.client.colors.Pattern$impl');
  ArrayDouble_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
  ArrayDoubleList = goog.module.get('org.pepstock.charba.client.commons.ArrayDoubleList$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayObject_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
  ArrayObjectContainerList = goog.module.get('org.pepstock.charba.client.commons.ArrayObjectContainerList$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  Clip = goog.module.get('org.pepstock.charba.client.data.Clip$impl');
  DataEnvelop = goog.module.get('org.pepstock.charba.client.data.DataEnvelop$impl');
  CanvasObjectProperty = goog.module.get('org.pepstock.charba.client.data.Dataset.CanvasObjectProperty$impl');
  CommonProperty = goog.module.get('org.pepstock.charba.client.data.Dataset.CommonProperty$impl');
  DataPointFactory = goog.module.get('org.pepstock.charba.client.data.Dataset.DataPointFactory$impl');
  InternalProperty = goog.module.get('org.pepstock.charba.client.data.Dataset.InternalProperty$impl');
  TimeSeriesItemFactory = goog.module.get('org.pepstock.charba.client.data.Dataset.TimeSeriesItemFactory$impl');
  GradientsContainer = goog.module.get('org.pepstock.charba.client.data.GradientsContainer$impl');
  PatternsContainer = goog.module.get('org.pepstock.charba.client.data.PatternsContainer$impl');
  TimeSeriesItem = goog.module.get('org.pepstock.charba.client.data.TimeSeriesItem$impl');
  DataType = goog.module.get('org.pepstock.charba.client.enums.DataType$impl');
  DefaultPluginId = goog.module.get('org.pepstock.charba.client.enums.DefaultPluginId$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  AnimationContainer = goog.module.get('org.pepstock.charba.client.options.AnimationContainer$impl');
  PluginIdChecker = goog.module.get('org.pepstock.charba.client.plugins.PluginIdChecker$impl');
  JSON_$Overlay = goog.module.get('org.pepstock.charba.client.utils.JSON.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@type {AtomicInteger}*/
Dataset.f_COUNTER__org_pepstock_charba_client_data_Dataset_;
/**@const {boolean}*/
Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset = false;
/**@const {boolean}*/
Dataset.f_DEFAULT_PARSING__org_pepstock_charba_client_data_Dataset = true;
/**@const {boolean}*/
Dataset.f_DEFAULT_NORMALIZED__org_pepstock_charba_client_data_Dataset = false;
/**@private {DataPointFactory}*/
Dataset.$static_DATAPOINTS_FACTORY__org_pepstock_charba_client_data_Dataset;
/**@private {TimeSeriesItemFactory}*/
Dataset.$static_TIMESERIES_ITEMS_FACTORY__org_pepstock_charba_client_data_Dataset;
/**@const {?string}*/
Dataset.f_DATA_USAGE_MESSAGE__org_pepstock_charba_client_data_Dataset = "Use datapoints instead of data for this dataset";
/**@const {?string}*/
Dataset.f_TIME_SERIES_DATA_USAGE_MESSAGE__org_pepstock_charba_client_data_Dataset = "setData and getData methods are not invokable by a time series chart";
/**@type {Comparator<TimeSeriesItem>}*/
Dataset.f_COMPARATOR__org_pepstock_charba_client_data_Dataset_;
HasDataset.$markImplementor(Dataset);
HasAnimationOptions.$markImplementor(Dataset);
HasCallbackScope.$markImplementor(Dataset);
$Util.$setClassMetadata(Dataset, "org.pepstock.charba.client.data.Dataset");

exports = Dataset;

//# sourceMappingURL=Dataset.js.map
