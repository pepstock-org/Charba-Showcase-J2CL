goog.module('org.pepstock.charba.client.data.LiningDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Dataset = goog.require('org.pepstock.charba.client.data.Dataset$impl');
const HasDataPointStyle = goog.require('org.pepstock.charba.client.data.HasDataPointStyle$impl');
const HasOrder = goog.require('org.pepstock.charba.client.data.HasOrder$impl');
const HasPointFillStrokeStyles = goog.require('org.pepstock.charba.client.data.HasPointFillStrokeStyles$impl');
const HasFill = goog.require('org.pepstock.charba.client.options.HasFill$impl');
const HasSpanGaps = goog.require('org.pepstock.charba.client.options.HasSpanGaps$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let BorderDashCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderDashCallback$impl');
let BorderDashOffsetCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderDashOffsetCallback$impl');
let CapStyleCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CapStyleCallback$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let FillCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FillCallback$impl');
let JoinStyleCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.JoinStyleCallback$impl');
let PointStyleCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PointStyleCallback$impl');
let RadiusCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.RadiusCallback$impl');
let RotationCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.RotationCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let WidthCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.WidthCallback$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let ArrayInteger_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayObject_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
let ArrayString_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let DataEnvelop = goog.forwardDeclare('org.pepstock.charba.client.data.DataEnvelop$impl');
let DataPointStyleHandler = goog.forwardDeclare('org.pepstock.charba.client.data.DataPointStyleHandler$impl');
let CanvasObjectProperty = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.CanvasObjectProperty$impl');
let CommonProperty = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.CommonProperty$impl');
let InternalProperty = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset.InternalProperty$impl');
let InternalCanvasObjectProperty = goog.forwardDeclare('org.pepstock.charba.client.data.LiningDataset.InternalCanvasObjectProperty$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.data.LiningDataset.Property$impl');
let LiningDatasetFillHandler = goog.forwardDeclare('org.pepstock.charba.client.data.LiningDatasetFillHandler$impl');
let OrderHandler = goog.forwardDeclare('org.pepstock.charba.client.data.OrderHandler$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
let CapStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.CapStyle$impl');
let IsFill = goog.forwardDeclare('org.pepstock.charba.client.enums.IsFill$impl');
let JoinStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.JoinStyle$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let PointStyleType = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyleType$impl');
let FillHandler = goog.forwardDeclare('org.pepstock.charba.client.options.FillHandler$impl');
let SpanGapHandler = goog.forwardDeclare('org.pepstock.charba.client.options.SpanGapHandler$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @implements {HasFill}
 * @implements {HasOrder}
 * @implements {HasPointFillStrokeStyles}
 * @implements {HasSpanGaps}
 * @implements {HasDataPointStyle}
 */
class LiningDataset extends Dataset {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):?string>}*/
  this.f_borderCapStyleCallbackProxy__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {CharbaCallbackProxy<?function(?):Array>}*/
  this.f_borderDashCallbackProxy__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_borderDashOffsetCallbackProxy__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {CharbaCallbackProxy<?function(?):?string>}*/
  this.f_borderJoinStyleCallbackProxy__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {CharbaCallbackProxy<?function(?):?string>}*/
  this.f_hoverBorderCapStyleCallbackProxy__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {CharbaCallbackProxy<?function(?):Array>}*/
  this.f_hoverBorderDashCallbackProxy__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_hoverBorderDashOffsetCallbackProxy__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {CharbaCallbackProxy<?function(?):?string>}*/
  this.f_hoverBorderJoinStyleCallbackProxy__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_pointBackgroundColorCallbackProxy__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_pointBorderColorCallbackProxy__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_pointBorderWidthCallbackProxy__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_pointHoverBackgroundColorCallbackProxy__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_pointHoverBorderColorCallbackProxy__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_pointHoverBorderWidthCallbackProxy__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_pointRadiusCallbackProxy__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_pointHitRadiusCallbackProxy__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_pointHoverRadiusCallbackProxy__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_pointRotationCallbackProxy__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {ColorCallback<DatasetContext>}*/
  this.f_pointBackgroundColorCallback__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {ColorCallback<DatasetContext>}*/
  this.f_pointBorderColorCallback__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {WidthCallback<DatasetContext>}*/
  this.f_pointBorderWidthCallback__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {ColorCallback<DatasetContext>}*/
  this.f_pointHoverBackgroundColorCallback__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {ColorCallback<DatasetContext>}*/
  this.f_pointHoverBorderColorCallback__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {WidthCallback<DatasetContext>}*/
  this.f_pointHoverBorderWidthCallback__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {RadiusCallback<DatasetContext>}*/
  this.f_pointRadiusCallback__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {RadiusCallback<DatasetContext>}*/
  this.f_pointHitRadiusCallback__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {RadiusCallback<DatasetContext>}*/
  this.f_pointHoverRadiusCallback__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {RotationCallback<DatasetContext>}*/
  this.f_pointRotationCallback__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {CapStyleCallback<DatasetContext>}*/
  this.f_borderCapStyleCallback__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {BorderDashCallback<DatasetContext>}*/
  this.f_borderDashCallback__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {BorderDashOffsetCallback<DatasetContext>}*/
  this.f_borderDashOffsetCallback__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {JoinStyleCallback<DatasetContext>}*/
  this.f_borderJoinStyleCallback__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {CapStyleCallback<DatasetContext>}*/
  this.f_hoverBorderCapStyleCallback__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {BorderDashCallback<DatasetContext>}*/
  this.f_hoverBorderDashCallback__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {BorderDashOffsetCallback<DatasetContext>}*/
  this.f_hoverBorderDashOffsetCallback__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {JoinStyleCallback<DatasetContext>}*/
  this.f_hoverBorderJoinStyleCallback__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {LiningDatasetFillHandler}*/
  this.f_fillHandler__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {OrderHandler}*/
  this.f_orderHandler__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {SpanGapHandler}*/
  this.f_spanGapHandler__org_pepstock_charba_client_data_LiningDataset_;
  /**@type {DataPointStyleHandler}*/
  this.f_pointStyleHandler__org_pepstock_charba_client_data_LiningDataset_;
 }
 
 $ctor__org_pepstock_charba_client_data_LiningDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  this.$init___$p_org_pepstock_charba_client_data_LiningDataset();
  this.f_fillHandler__org_pepstock_charba_client_data_LiningDataset_ = LiningDatasetFillHandler.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_enums_IsFill__org_pepstock_charba_client_commons_NativeObject(this, this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getFill__(), this.m_getNativeObject__());
  this.f_orderHandler__org_pepstock_charba_client_data_LiningDataset_ = OrderHandler.$create__org_pepstock_charba_client_commons_NativeObject(this.m_getNativeObject__());
  this.f_spanGapHandler__org_pepstock_charba_client_data_LiningDataset_ = SpanGapHandler.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultOptions__org_pepstock_charba_client_data_DataEnvelop(this, this.m_getDefaultValues__(), /**@type {!DataEnvelop<?>}*/ (DataEnvelop.$create__java_lang_Object__boolean(this.m_getNativeObject__(), true)));
  this.f_pointStyleHandler__org_pepstock_charba_client_data_LiningDataset_ = DataPointStyleHandler.$create__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPoint(this, this.m_getNativeObject__(), this.m_getDefaultValues__().m_getElements__().m_getPoint__());
  this.f_pointBackgroundColorCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.callback = (/** ? */ context) =>{
   return this.m_invokeColorCallback__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__java_lang_String(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context), this.m_getPointBackgroundColorCallback__(), InternalCanvasObjectProperty.f_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getBackgroundColorAsString__());
  };
  this.f_pointBorderColorCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.callback = (/** ? */ context_1) =>{
   return this.m_invokeColorCallback__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__java_lang_String(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_1), this.m_getPointBorderColorCallback__(), InternalCanvasObjectProperty.f_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getBorderColorAsString__());
  };
  this.f_pointBorderWidthCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.callback = (/** ? */ context_2) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_2), this.m_getPointBorderWidthCallback__(), Integer.m_valueOf__int(this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getBorderWidth__())), Integer)).m_intValue__();
  };
  this.f_pointHoverBackgroundColorCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.callback = (/** ? */ context_3) =>{
   return this.m_invokeColorCallback__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__java_lang_String(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_3), this.m_getPointHoverBackgroundColorCallback__(), InternalCanvasObjectProperty.f_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getBackgroundColorAsString__());
  };
  this.f_pointHoverBorderColorCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.callback = (/** ? */ context_4) =>{
   return this.m_invokeColorCallback__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__java_lang_String(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_4), this.m_getPointHoverBorderColorCallback__(), InternalCanvasObjectProperty.f_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getBorderColorAsString__());
  };
  this.f_pointHoverBorderWidthCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.callback = (/** ? */ context_5) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_5), this.m_getPointHoverBorderWidthCallback__(), Integer.m_valueOf__int(this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getBorderWidth__())), Integer)).m_intValue__();
  };
  this.f_pointRadiusCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.callback = (/** ? */ context_6) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_6), this.m_getPointRadiusCallback__(), this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getRadius__()), Double)));
  };
  this.f_pointHitRadiusCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.callback = (/** ? */ context_7) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_7), this.m_getPointHitRadiusCallback__(), this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getHitRadius__()), Double)));
  };
  this.f_pointHoverRadiusCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.callback = (/** ? */ context_8) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_8), this.m_getPointHoverRadiusCallback__(), this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getHoverRadius__()), Double)));
  };
  this.f_pointRotationCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.callback = (/** ? */ context_9) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_9), this.m_getPointRotationCallback__(), this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getRotation__()), Double)));
  };
  this.f_borderCapStyleCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.callback = (/** ? */ context_10) =>{
   return this.m_onBorderCapStyle__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_CapStyleCallback_$p_org_pepstock_charba_client_data_LiningDataset(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_10), this.m_getBorderCapStyleCallback__());
  };
  this.f_borderDashCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.callback = (/** ? */ context_11) =>{
   return this.m_onBorderDash__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_BorderDashCallback_$p_org_pepstock_charba_client_data_LiningDataset(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_11), this.m_getBorderDashCallback__());
  };
  this.f_borderDashOffsetCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.callback = (/** ? */ context_12) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_12), this.m_getBorderDashOffsetCallback__(), this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderDashOffset__()), Double)));
  };
  this.f_borderJoinStyleCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.callback = (/** ? */ context_13) =>{
   return this.m_onBorderJoinStyle__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_JoinStyleCallback_$p_org_pepstock_charba_client_data_LiningDataset(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_13), this.m_getBorderJoinStyleCallback__());
  };
  this.f_hoverBorderCapStyleCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.callback = (/** ? */ context_14) =>{
   return this.m_onBorderCapStyle__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_CapStyleCallback_$p_org_pepstock_charba_client_data_LiningDataset(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_14), this.m_getHoverBorderCapStyleCallback__());
  };
  this.f_hoverBorderDashCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.callback = (/** ? */ context_15) =>{
   return this.m_onBorderDash__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_BorderDashCallback_$p_org_pepstock_charba_client_data_LiningDataset(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_15), this.m_getHoverBorderDashCallback__());
  };
  this.f_hoverBorderDashOffsetCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.callback = (/** ? */ context_16) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_16), this.m_getHoverBorderDashOffsetCallback__(), this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderDashOffset__()), Double)));
  };
  this.f_hoverBorderJoinStyleCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.callback = (/** ? */ context_17) =>{
   return this.m_onBorderJoinStyle__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_JoinStyleCallback_$p_org_pepstock_charba_client_data_LiningDataset(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context_17), this.m_getHoverBorderJoinStyleCallback__());
  };
 }
 /** @override @return {FillHandler} */
 m_getFillHandler__() {
  return this.f_fillHandler__org_pepstock_charba_client_data_LiningDataset_;
 }
 /** @override @return {OrderHandler} */
 m_getOrderHandler__() {
  return this.f_orderHandler__org_pepstock_charba_client_data_LiningDataset_;
 }
 /** @override @return {SpanGapHandler} */
 m_getSpanGapHandler__() {
  return this.f_spanGapHandler__org_pepstock_charba_client_data_LiningDataset_;
 }
 /** @override @return {DataPointStyleHandler} */
 m_getPointStyleHandler__() {
  return this.f_pointStyleHandler__org_pepstock_charba_client_data_LiningDataset_;
 }
 /** @override @return {Key} */
 m_getPointFillStyleProperty__() {
  return InternalCanvasObjectProperty.f_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty;
 }
 /** @override @return {Key} */
 m_getPointStrokeStyleProperty__() {
  return InternalCanvasObjectProperty.f_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty;
 }
 /** @override @return {?string} */
 m_getLabel__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(InternalProperty.f_LABEL__org_pepstock_charba_client_data_Dataset_InternalProperty, LiningDataset.f_DEFAULT_LABEL__org_pepstock_charba_client_data_LiningDataset_);
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backgroundColor) {
  this.m_setBackgroundColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(backgroundColor));
 }
 
 m_setBackgroundColor__java_lang_String(/** ?string */ backgroundColor) {
  this.m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, backgroundColor);
  this.m_resetBeingColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_colors_Pattern(/** Pattern */ backgroundColor) {
  this.m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_getPatternsContainer___$pp_org_pepstock_charba_client_data().m_setObjects__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__org_pepstock_charba_client_commons_ArrayObject__java_lang_String_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, ArrayObject_$Overlay.m_fromOrNull__org_pepstock_charba_client_commons_NativeObjectContainer(backgroundColor), this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBackgroundColorAsString__());
  this.m_resetBeingPatterns__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_colors_Gradient(/** Gradient */ backgroundColor) {
  this.m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_setObjects__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__org_pepstock_charba_client_commons_ArrayObject__java_lang_String_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, ArrayObject_$Overlay.m_fromOrNull__org_pepstock_charba_client_commons_NativeObjectContainer(backgroundColor), this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBackgroundColorAsString__());
  this.m_resetBeingGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 /** @return {?string} */
 m_getBackgroundColorAsString__() {
  if (this.m_hasColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty) && $Equality.$same(this.m_getBackgroundColorCallback__(), null)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBackgroundColorAsString__());
  } else {
   return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBackgroundColorAsString__();
  }
 }
 /** @return {IsColor} */
 m_getBackgroundColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getBackgroundColorAsString__());
 }
 /** @return {Pattern} */
 m_getBackgroundColorAsPattern__() {
  if (this.m_hasPatterns__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty) && $Equality.$same(this.m_getBackgroundColorCallback__(), null)) {
   let patterns = this.m_getPatternsContainer___$pp_org_pepstock_charba_client_data().m_getObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
   return /**@type {Pattern}*/ ($Casts.$to(patterns.getAtIndex(0), Pattern));
  } else {
   return null;
  }
 }
 /** @return {Gradient} */
 m_getBackgroundColorAsGradient__() {
  if (this.m_hasGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty) && $Equality.$same(this.m_getBackgroundColorCallback__(), null)) {
   let gradients = this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_getObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
   return /**@type {Gradient}*/ ($Casts.$to(gradients.getAtIndex(0), Gradient));
  } else {
   return null;
  }
 }
 
 m_setBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ borderColor) {
  this.m_setBorderColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(borderColor));
 }
 
 m_setBorderColor__java_lang_String(/** ?string */ borderColor) {
  this.m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, borderColor);
  this.m_resetBeingColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 
 m_setBorderColor__org_pepstock_charba_client_colors_Gradient(/** Gradient */ borderColor) {
  this.m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_setObjects__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__org_pepstock_charba_client_commons_ArrayObject__java_lang_String_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, ArrayObject_$Overlay.m_fromOrNull__org_pepstock_charba_client_commons_NativeObjectContainer(borderColor), this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderColorAsString__());
  this.m_resetBeingGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 /** @return {?string} */
 m_getBorderColorAsString__() {
  if (this.m_hasColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty) && $Equality.$same(this.m_getBorderColorCallback__(), null)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderColorAsString__());
  } else {
   return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderColorAsString__();
  }
 }
 /** @return {IsColor} */
 m_getBorderColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getBorderColorAsString__());
 }
 /** @return {Gradient} */
 m_getBorderColorAsGradient__() {
  if (this.m_hasGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty) && $Equality.$same(this.m_getBorderColorCallback__(), null)) {
   let gradients = this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_getObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
   return /**@type {Gradient}*/ ($Casts.$to(gradients.getAtIndex(0), Gradient));
  } else {
   return null;
  }
 }
 
 m_setBorderWidth__int(/** number */ borderWidth) {
  this.m_setBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/**@type {WidthCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(CommonProperty.f_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, borderWidth);
 }
 /** @return {number} */
 m_getBorderWidth__() {
  if ($Equality.$same(this.m_getBorderWidthCallback__(), null)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__int(CommonProperty.f_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderWidth__());
  }
  return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderWidth__();
 }
 /** @return {WidthCallback<DatasetContext>} */
 m_getBorderWidthCallback__() {
  return this.m_getInternalBorderWidthCallback___$pp_org_pepstock_charba_client_data();
 }
 
 m_setBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/** WidthCallback<DatasetContext> */ borderWidthCallback) {
  this.m_setInternalBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback_$pp_org_pepstock_charba_client_data(borderWidthCallback);
 }
 
 m_setBorderWidth__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderWidthCallback) {
  this.m_setInternalBorderWidth__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_data(borderWidthCallback);
 }
 
 m_setBorderDash__arrayOf_int(/** Array<number> */ borderDash) {
  this.m_setBorderDash__org_pepstock_charba_client_callbacks_BorderDashCallback(/**@type {BorderDashCallback<DatasetContext>}*/ (null));
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property, ArrayInteger_$Overlay.m_fromOrNull__arrayOf_int(borderDash));
 }
 /** @return {List<Integer>} */
 m_getBorderDash__() {
  if ($Equality.$same(this.m_getBorderDashCallback__(), null)) {
   let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property), ArrayInteger_$Overlay));
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayInteger(array);
  }
  return /**@type {List<Integer>}*/ (Collections.m_emptyList__());
 }
 
 m_setBorderDashOffset__double(/** number */ borderDashOffset) {
  this.m_setBorderDashOffset__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback(/**@type {BorderDashOffsetCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property, borderDashOffset);
 }
 /** @return {number} */
 m_getBorderDashOffset__() {
  if ($Equality.$same(this.m_getBorderDashOffsetCallback__(), null)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderDashOffset__());
  }
  return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderDashOffset__();
 }
 
 m_setBorderCapStyle__org_pepstock_charba_client_enums_CapStyle(/** CapStyle */ borderCapStyle) {
  this.m_setBorderCapStyle__org_pepstock_charba_client_callbacks_CapStyleCallback(/**@type {CapStyleCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, borderCapStyle);
 }
 /** @return {CapStyle} */
 m_getBorderCapStyle__() {
  if ($Equality.$same(this.m_getBorderCapStyleCallback__(), null)) {
   return /**@type {CapStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, CapStyle.m_values__(), this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderCapStyle__()), CapStyle));
  }
  return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderCapStyle__();
 }
 
 m_setBorderJoinStyle__org_pepstock_charba_client_enums_JoinStyle(/** JoinStyle */ borderJoinStyle) {
  this.m_setBorderJoinStyle__org_pepstock_charba_client_callbacks_JoinStyleCallback(/**@type {JoinStyleCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, borderJoinStyle);
 }
 /** @return {JoinStyle} */
 m_getBorderJoinStyle__() {
  if ($Equality.$same(this.m_getBorderJoinStyleCallback__(), null)) {
   return /**@type {JoinStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, JoinStyle.m_values__(), this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderJoinStyle__()), JoinStyle));
  }
  return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderJoinStyle__();
 }
 /** @override @return {IsFill} */
 m_getFill__() {
  return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getFill__();
 }
 
 m_setTension__double(/** number */ tension) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_TENSION__org_pepstock_charba_client_data_LiningDataset_Property, tension);
 }
 /** @return {number} */
 m_getTension__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_TENSION__org_pepstock_charba_client_data_LiningDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getTension__());
 }
 
 m_setHoverBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setHoverBackgroundColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setHoverBackgroundColor__java_lang_String(/** ?string */ color) {
  this.m_setHoverBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, color);
  this.m_resetBeingColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 
 m_setHoverBackgroundColor__org_pepstock_charba_client_colors_Pattern(/** Pattern */ pattern) {
  this.m_setHoverBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_getPatternsContainer___$pp_org_pepstock_charba_client_data().m_setObjects__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__org_pepstock_charba_client_commons_ArrayObject__java_lang_String_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, ArrayObject_$Overlay.m_fromOrNull__org_pepstock_charba_client_commons_NativeObjectContainer(pattern), this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBackgroundColorAsString__());
  this.m_resetBeingPatterns__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 
 m_setHoverBackgroundColor__org_pepstock_charba_client_colors_Gradient(/** Gradient */ gradient) {
  this.m_setHoverBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_setObjects__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__org_pepstock_charba_client_commons_ArrayObject__java_lang_String_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, ArrayObject_$Overlay.m_fromOrNull__org_pepstock_charba_client_commons_NativeObjectContainer(gradient), this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getHoverBackgroundColorAsString__());
  this.m_resetBeingGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 /** @return {?string} */
 m_getHoverBackgroundColorAsString__() {
  if (this.m_hasColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty) && $Equality.$same(this.m_getHoverBackgroundColorCallback__(), null)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getHoverBackgroundColorAsString__());
  } else {
   return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getHoverBackgroundColorAsString__();
  }
 }
 /** @return {IsColor} */
 m_getHoverBackgroundColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getHoverBackgroundColorAsString__());
 }
 /** @return {Pattern} */
 m_getHoverBackgroundColorAsPatterns__() {
  if (this.m_hasPatterns__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty) && $Equality.$same(this.m_getHoverBackgroundColorCallback__(), null)) {
   let patterns = this.m_getPatternsContainer___$pp_org_pepstock_charba_client_data().m_getObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
   return /**@type {Pattern}*/ ($Casts.$to(patterns.getAtIndex(0), Pattern));
  } else {
   return null;
  }
 }
 /** @return {Gradient} */
 m_getHoverBackgroundColorAsGradient__() {
  if (this.m_hasGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty) && $Equality.$same(this.m_getHoverBackgroundColorCallback__(), null)) {
   let gradients = this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_getObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
   return /**@type {Gradient}*/ ($Casts.$to(gradients.getAtIndex(0), Gradient));
  } else {
   return null;
  }
 }
 
 m_setHoverBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setHoverBorderColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setHoverBorderColor__java_lang_String(/** ?string */ color) {
  this.m_setHoverBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, color);
  this.m_resetBeingColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 
 m_setHoverBorderColor__org_pepstock_charba_client_colors_Gradient(/** Gradient */ gradient) {
  this.m_setHoverBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_setObjects__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__org_pepstock_charba_client_commons_ArrayObject__java_lang_String_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, ArrayObject_$Overlay.m_fromOrNull__org_pepstock_charba_client_commons_NativeObjectContainer(gradient), this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getHoverBorderColorAsString__());
  this.m_resetBeingGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
 }
 /** @return {?string} */
 m_getHoverBorderColorAsString__() {
  if (this.m_hasColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty) && $Equality.$same(this.m_getBorderColorCallback__(), null)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty, this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getHoverBorderColorAsString__());
  } else {
   return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getHoverBorderColorAsString__();
  }
 }
 /** @return {IsColor} */
 m_getHoverBorderColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getHoverBorderColorAsString__());
 }
 /** @return {Gradient} */
 m_getHoverBorderColorAsGradient__() {
  if (this.m_hasGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty) && $Equality.$same(this.m_getBorderColorCallback__(), null)) {
   let gradients = this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_getObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(CanvasObjectProperty.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_Dataset_CanvasObjectProperty);
   return /**@type {Gradient}*/ ($Casts.$to(gradients.getAtIndex(0), Gradient));
  } else {
   return null;
  }
 }
 
 m_setHoverBorderWidth__int(/** number */ width) {
  this.m_setHoverBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/**@type {WidthCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(CommonProperty.f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, width);
 }
 /** @return {number} */
 m_getHoverBorderWidth__() {
  if ($Equality.$same(this.m_getHoverBorderWidthCallback__(), null)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__int(CommonProperty.f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_Dataset_CommonProperty, this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getHoverBorderWidth__());
  }
  return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getHoverBorderWidth__();
 }
 /** @return {WidthCallback<DatasetContext>} */
 m_getHoverBorderWidthCallback__() {
  return this.m_getInternalHoverBorderWidthCallback___$pp_org_pepstock_charba_client_data();
 }
 
 m_setHoverBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/** WidthCallback<DatasetContext> */ hoverBorderWidthCallback) {
  this.m_setInternalHoverBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback_$pp_org_pepstock_charba_client_data(hoverBorderWidthCallback);
 }
 
 m_setHoverBorderWidth__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ hoverBorderWidthCallback) {
  this.m_setInternalHoverBorderWidth__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_data(hoverBorderWidthCallback);
 }
 
 m_setHoverBorderDash__arrayOf_int(/** Array<number> */ borderDash) {
  this.m_setHoverBorderDash__org_pepstock_charba_client_callbacks_BorderDashCallback(/**@type {BorderDashCallback<DatasetContext>}*/ (null));
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_HOVER_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property, ArrayInteger_$Overlay.m_fromOrNull__arrayOf_int(borderDash));
 }
 /** @return {List<Integer>} */
 m_getHoverBorderDash__() {
  if ($Equality.$same(this.m_getHoverBorderDashCallback__(), null)) {
   let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_HOVER_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property), ArrayInteger_$Overlay));
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayInteger(array);
  }
  return /**@type {List<Integer>}*/ (Collections.m_emptyList__());
 }
 
 m_setHoverBorderDashOffset__double(/** number */ borderDashOffset) {
  this.m_setHoverBorderDashOffset__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback(/**@type {BorderDashOffsetCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_HOVER_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property, borderDashOffset);
 }
 /** @return {number} */
 m_getHoverBorderDashOffset__() {
  if ($Equality.$same(this.m_getHoverBorderDashOffsetCallback__(), null)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_HOVER_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderDashOffset__());
  }
  return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderDashOffset__();
 }
 
 m_setHoverBorderCapStyle__org_pepstock_charba_client_enums_CapStyle(/** CapStyle */ borderCapStyle) {
  this.m_setHoverBorderCapStyle__org_pepstock_charba_client_callbacks_CapStyleCallback(/**@type {CapStyleCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_HOVER_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, borderCapStyle);
 }
 /** @return {CapStyle} */
 m_getHoverBorderCapStyle__() {
  if ($Equality.$same(this.m_getHoverBorderCapStyleCallback__(), null)) {
   return /**@type {CapStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_HOVER_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, CapStyle.m_values__(), this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderCapStyle__()), CapStyle));
  }
  return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderCapStyle__();
 }
 
 m_setHoverBorderJoinStyle__org_pepstock_charba_client_enums_JoinStyle(/** JoinStyle */ borderJoinStyle) {
  this.m_setHoverBorderJoinStyle__org_pepstock_charba_client_callbacks_JoinStyleCallback(/**@type {JoinStyleCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_HOVER_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, borderJoinStyle);
 }
 /** @return {JoinStyle} */
 m_getHoverBorderJoinStyle__() {
  if ($Equality.$same(this.m_getHoverBorderJoinStyleCallback__(), null)) {
   return /**@type {JoinStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_HOVER_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, JoinStyle.m_values__(), this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderJoinStyle__()), JoinStyle));
  }
  return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderJoinStyle__();
 }
 
 m_setPointBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/** Array<IsColor> */ pointBackgroundColor) {
  this.m_setPointBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_colors_IsColor(InternalCanvasObjectProperty.f_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, pointBackgroundColor);
  this.m_resetBeingColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
 }
 
 m_setPointBackgroundColor__arrayOf_java_lang_String(/** Array<?string> */ pointBackgroundColor) {
  this.m_setPointBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String(InternalCanvasObjectProperty.f_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, pointBackgroundColor);
  this.m_resetBeingColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
 }
 
 m_setPointBackgroundColor__arrayOf_org_pepstock_charba_client_colors_Gradient(/** Array<Gradient> */ pointBackgroundColor) {
  this.m_setPointBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_setObjects__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__org_pepstock_charba_client_commons_ArrayObject__java_lang_String_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, ArrayObject_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(pointBackgroundColor), this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getBackgroundColorAsString__());
  this.m_resetBeingGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
 }
 /** @return {List<?string>} */
 m_getPointBackgroundColorAsString__() {
  if (this.m_hasColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty) && $Equality.$same(this.m_getPointBackgroundColorCallback__(), null)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__java_lang_String(InternalCanvasObjectProperty.f_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getBackgroundColorAsString__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayString(array);
  } else {
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayString(ArrayString_$Overlay.m_fromOrEmpty__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getBackgroundColorAsString__()], j_l_String))));
  }
 }
 /** @return {List<IsColor>} */
 m_getPointBackgroundColor__() {
  return ColorBuilder.m_parse__java_util_List(this.m_getPointBackgroundColorAsString__());
 }
 /** @return {List<Gradient>} */
 m_getPointBackgroundColorAsGradient__() {
  if (this.m_hasGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty) && $Equality.$same(this.m_getPointBackgroundColorCallback__(), null)) {
   return this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_getObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
  } else {
   return /**@type {List<Gradient>}*/ (Collections.m_emptyList__());
  }
 }
 
 m_setPointBorderColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/** Array<IsColor> */ pointBorderColor) {
  this.m_setPointBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_colors_IsColor(InternalCanvasObjectProperty.f_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, pointBorderColor);
  this.m_resetBeingColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
 }
 
 m_setPointBorderColor__arrayOf_java_lang_String(/** Array<?string> */ pointBorderColor) {
  this.m_setPointBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String(InternalCanvasObjectProperty.f_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, pointBorderColor);
  this.m_resetBeingColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
 }
 
 m_setPointBorderColor__arrayOf_org_pepstock_charba_client_colors_Gradient(/** Array<Gradient> */ pointBorderColor) {
  this.m_setPointBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_setObjects__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__org_pepstock_charba_client_commons_ArrayObject__java_lang_String_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, ArrayObject_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(pointBorderColor), this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getBorderColorAsString__());
  this.m_resetBeingGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
 }
 /** @return {List<?string>} */
 m_getPointBorderColorAsString__() {
  if (this.m_hasColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty) && $Equality.$same(this.m_getPointBorderColorCallback__(), null)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__java_lang_String(InternalCanvasObjectProperty.f_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getBorderColorAsString__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayString(array);
  } else {
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayString(ArrayString_$Overlay.m_fromOrEmpty__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderColorAsString__()], j_l_String))));
  }
 }
 /** @return {List<IsColor>} */
 m_getPointBorderColor__() {
  return ColorBuilder.m_parse__java_util_List(this.m_getPointBorderColorAsString__());
 }
 /** @return {List<Gradient>} */
 m_getPointBorderColorAsGradient__() {
  if (this.m_hasGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty) && $Equality.$same(this.m_getPointBorderColorCallback__(), null)) {
   return this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_getObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
  } else {
   return /**@type {List<Gradient>}*/ (Collections.m_emptyList__());
  }
 }
 
 m_setPointBorderWidth__arrayOf_int(/** Array<number> */ pointBorderWidth) {
  this.m_setPointBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/**@type {WidthCallback<DatasetContext>}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_int(Property.f_POINT_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property, pointBorderWidth);
 }
 /** @return {List<Integer>} */
 m_getPointBorderWidth__() {
  if ($Equality.$same(this.m_getPointBorderWidthCallback__(), null)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__int(Property.f_POINT_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getBorderWidth__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayInteger(array);
  }
  return /**@type {List<Integer>}*/ (Collections.m_emptyList__());
 }
 
 m_setPointHitRadius__arrayOf_double(/** Array<number> */ pointHitRadius) {
  this.m_setPointHitRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/**@type {RadiusCallback<DatasetContext>}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_double(Property.f_POINT_HIT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property, pointHitRadius);
 }
 /** @return {List<?number>} */
 m_getPointHitRadius__() {
  if ($Equality.$same(this.m_getPointHitRadiusCallback__(), null)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__double(Property.f_POINT_HIT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getHitRadius__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayDouble(array);
  }
  return /**@type {List<?number>}*/ (Collections.m_emptyList__());
 }
 
 m_setPointHoverBackgroundColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/** Array<IsColor> */ pointHoverBackgroundColor) {
  this.m_setPointHoverBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_colors_IsColor(InternalCanvasObjectProperty.f_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, pointHoverBackgroundColor);
  this.m_resetBeingColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
 }
 
 m_setPointHoverBackgroundColor__arrayOf_java_lang_String(/** Array<?string> */ pointHoverBackgroundColor) {
  this.m_setPointHoverBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String(InternalCanvasObjectProperty.f_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, pointHoverBackgroundColor);
  this.m_resetBeingColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
 }
 
 m_setPointHoverBackgroundColor__arrayOf_org_pepstock_charba_client_colors_Gradient(/** Array<Gradient> */ pointHoverBackgroundColor) {
  this.m_setPointHoverBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_setObjects__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__org_pepstock_charba_client_commons_ArrayObject__java_lang_String_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, ArrayObject_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(pointHoverBackgroundColor), this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getBackgroundColorAsString__());
  this.m_resetBeingGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
 }
 /** @return {List<?string>} */
 m_getPointHoverBackgroundColorAsString__() {
  if (this.m_hasColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty) && $Equality.$same(this.m_getPointHoverBackgroundColorCallback__(), null)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__java_lang_String(InternalCanvasObjectProperty.f_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getBackgroundColorAsString__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayString(array);
  } else {
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayString(ArrayString_$Overlay.m_fromOrEmpty__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getBackgroundColorAsString__()], j_l_String))));
  }
 }
 /** @return {List<IsColor>} */
 m_getPointHoverBackgroundColor__() {
  return ColorBuilder.m_parse__java_util_List(this.m_getPointHoverBackgroundColorAsString__());
 }
 /** @return {List<Gradient>} */
 m_getPointHoverBackgroundColorAsGradient__() {
  if (this.m_hasGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty) && $Equality.$same(this.m_getPointHoverBackgroundColorCallback__(), null)) {
   return this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_getObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
  } else {
   return /**@type {List<Gradient>}*/ (Collections.m_emptyList__());
  }
 }
 
 m_setPointHoverBorderColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/** Array<IsColor> */ pointHoverBorderColor) {
  this.m_setPointHoverBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_colors_IsColor(InternalCanvasObjectProperty.f_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, pointHoverBorderColor);
  this.m_resetBeingColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
 }
 
 m_setPointHoverBorderColor__arrayOf_java_lang_String(/** Array<?string> */ pointHoverBorderColor) {
  this.m_setPointHoverBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String(InternalCanvasObjectProperty.f_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, pointHoverBorderColor);
  this.m_resetBeingColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
 }
 
 m_setPointHoverBorderColor__arrayOf_org_pepstock_charba_client_colors_Gradient(/** Array<Gradient> */ pointHoverBorderColor) {
  this.m_setPointHoverBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_setObjects__org_pepstock_charba_client_data_Dataset_CanvasObjectKey__org_pepstock_charba_client_commons_ArrayObject__java_lang_String_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, ArrayObject_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(pointHoverBorderColor), this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getBorderColorAsString__());
  this.m_resetBeingGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
 }
 /** @return {List<?string>} */
 m_getPointHoverBorderColorAsString__() {
  if (this.m_hasColors__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty) && $Equality.$same(this.m_getPointHoverBorderColorCallback__(), null)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__java_lang_String(InternalCanvasObjectProperty.f_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getBorderColorAsString__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayString(array);
  } else {
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayString(ArrayString_$Overlay.m_fromOrEmpty__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getBorderColorAsString__()], j_l_String))));
  }
 }
 /** @return {List<IsColor>} */
 m_getPointHoverBorderColor__() {
  return ColorBuilder.m_parse__java_util_List(this.m_getPointHoverBorderColorAsString__());
 }
 /** @return {List<Gradient>} */
 m_getPointHoverBorderColorAsGradient__() {
  if (this.m_hasGradients__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty) && $Equality.$same(this.m_getPointHoverBorderColorCallback__(), null)) {
   return this.m_getGradientsContainer___$pp_org_pepstock_charba_client_data().m_getObjects__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
  } else {
   return /**@type {List<Gradient>}*/ (Collections.m_emptyList__());
  }
 }
 
 m_setPointHoverBorderWidth__arrayOf_int(/** Array<number> */ pointHoverBorderWidth) {
  this.m_setPointHoverBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/**@type {WidthCallback<DatasetContext>}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_int(Property.f_POINT_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property, pointHoverBorderWidth);
 }
 /** @return {List<Integer>} */
 m_getPointHoverBorderWidth__() {
  if ($Equality.$same(this.m_getPointHoverBorderWidthCallback__(), null)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__int(Property.f_POINT_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getHoverBorderWidth__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayInteger(array);
  }
  return /**@type {List<Integer>}*/ (Collections.m_emptyList__());
 }
 
 m_setPointHoverRadius__arrayOf_double(/** Array<number> */ pointHoverRadius) {
  this.m_setPointHoverRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/**@type {RadiusCallback<DatasetContext>}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_double(Property.f_POINT_HOVER_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property, pointHoverRadius);
 }
 /** @return {List<?number>} */
 m_getPointHoverRadius__() {
  if ($Equality.$same(this.m_getPointHoverRadiusCallback__(), null)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__double(Property.f_POINT_HOVER_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getHoverRadius__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayDouble(array);
  }
  return /**@type {List<?number>}*/ (Collections.m_emptyList__());
 }
 
 m_setPointRadius__arrayOf_double(/** Array<number> */ pointRadius) {
  this.m_setPointRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/**@type {RadiusCallback<DatasetContext>}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_double(Property.f_POINT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property, pointRadius);
 }
 /** @return {List<?number>} */
 m_getPointRadius__() {
  if ($Equality.$same(this.m_getPointRadiusCallback__(), null)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__double(Property.f_POINT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getRadius__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayDouble(array);
  }
  return /**@type {List<?number>}*/ (Collections.m_emptyList__());
 }
 
 m_setPointRotation__arrayOf_double(/** Array<number> */ pointRotation) {
  this.m_setPointRotation__org_pepstock_charba_client_callbacks_RotationCallback(/**@type {RotationCallback<DatasetContext>}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_double(Property.f_POINT_ROTATION__org_pepstock_charba_client_data_LiningDataset_Property, pointRotation);
 }
 /** @return {List<?number>} */
 m_getPointRotation__() {
  if ($Equality.$same(this.m_getPointRotationCallback__(), null)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__double(Property.f_POINT_ROTATION__org_pepstock_charba_client_data_LiningDataset_Property, this.m_getDefaultValues__().m_getElements__().m_getPoint__().m_getRotation__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayDouble(array);
  }
  return /**@type {List<?number>}*/ (Collections.m_emptyList__());
 }
 /** @return {ColorCallback<DatasetContext>} */
 m_getPointBackgroundColorCallback__() {
  return this.f_pointBackgroundColorCallback__org_pepstock_charba_client_data_LiningDataset_;
 }
 
 m_setPointBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<DatasetContext> */ pointBackgroundColorCallback) {
  this.f_pointBackgroundColorCallback__org_pepstock_charba_client_data_LiningDataset_ = pointBackgroundColorCallback;
  if (!$Equality.$same(pointBackgroundColorCallback, null)) {
   this.m_resetBeingCallback__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(InternalCanvasObjectProperty.f_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, this.f_pointBackgroundColorCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(InternalCanvasObjectProperty.f_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
  }
 }
 
 m_setPointBackgroundColor__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ pointBackgroundColorCallback) {
  this.m_setPointBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_resetBeingCallback__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(InternalCanvasObjectProperty.f_POINT_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, pointBackgroundColorCallback);
 }
 /** @return {ColorCallback<DatasetContext>} */
 m_getPointBorderColorCallback__() {
  return this.f_pointBorderColorCallback__org_pepstock_charba_client_data_LiningDataset_;
 }
 
 m_setPointBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<DatasetContext> */ pointBorderColorCallback) {
  this.f_pointBorderColorCallback__org_pepstock_charba_client_data_LiningDataset_ = pointBorderColorCallback;
  if (!$Equality.$same(pointBorderColorCallback, null)) {
   this.m_resetBeingCallback__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(InternalCanvasObjectProperty.f_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, this.f_pointBorderColorCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(InternalCanvasObjectProperty.f_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
  }
 }
 
 m_setPointBorderColor__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ pointBorderColorCallback) {
  this.m_setPointBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_resetBeingCallback__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(InternalCanvasObjectProperty.f_POINT_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, pointBorderColorCallback);
 }
 /** @return {WidthCallback<DatasetContext>} */
 m_getPointBorderWidthCallback__() {
  return this.f_pointBorderWidthCallback__org_pepstock_charba_client_data_LiningDataset_;
 }
 
 m_setPointBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/** WidthCallback<DatasetContext> */ pointBorderWidthCallback) {
  this.f_pointBorderWidthCallback__org_pepstock_charba_client_data_LiningDataset_ = pointBorderWidthCallback;
  if (!$Equality.$same(pointBorderWidthCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_POINT_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property, this.f_pointBorderWidthCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_POINT_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property);
  }
 }
 
 m_setPointBorderWidth__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ pointBorderWidthCallback) {
  this.m_setPointBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/**@type {WidthCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_POINT_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property, pointBorderWidthCallback);
 }
 /** @return {ColorCallback<DatasetContext>} */
 m_getPointHoverBackgroundColorCallback__() {
  return this.f_pointHoverBackgroundColorCallback__org_pepstock_charba_client_data_LiningDataset_;
 }
 
 m_setPointHoverBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<DatasetContext> */ pointHoverBackgroundColorCallback) {
  this.f_pointHoverBackgroundColorCallback__org_pepstock_charba_client_data_LiningDataset_ = pointHoverBackgroundColorCallback;
  if (!$Equality.$same(pointHoverBackgroundColorCallback, null)) {
   this.m_resetBeingCallback__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(InternalCanvasObjectProperty.f_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, this.f_pointHoverBackgroundColorCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(InternalCanvasObjectProperty.f_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
  }
 }
 
 m_setPointHoverBackgroundColor__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ pointHoverBackgroundColorCallback) {
  this.m_setPointHoverBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_resetBeingCallback__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(InternalCanvasObjectProperty.f_POINT_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, pointHoverBackgroundColorCallback);
 }
 /** @return {ColorCallback<DatasetContext>} */
 m_getPointHoverBorderColorCallback__() {
  return this.f_pointHoverBorderColorCallback__org_pepstock_charba_client_data_LiningDataset_;
 }
 
 m_setPointHoverBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<DatasetContext> */ pointHoverBorderColorCallback) {
  this.f_pointHoverBorderColorCallback__org_pepstock_charba_client_data_LiningDataset_ = pointHoverBorderColorCallback;
  if (!$Equality.$same(pointHoverBorderColorCallback, null)) {
   this.m_resetBeingCallback__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(InternalCanvasObjectProperty.f_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, this.f_pointHoverBorderColorCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(InternalCanvasObjectProperty.f_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
  }
 }
 
 m_setPointHoverBorderColor__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ pointHoverBorderColorCallback) {
  this.m_setPointHoverBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DatasetContext>}*/ (null));
  this.m_resetBeingCallback__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_data(InternalCanvasObjectProperty.f_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(InternalCanvasObjectProperty.f_POINT_HOVER_BORDER_COLOR__org_pepstock_charba_client_data_LiningDataset_InternalCanvasObjectProperty, pointHoverBorderColorCallback);
 }
 /** @return {WidthCallback<DatasetContext>} */
 m_getPointHoverBorderWidthCallback__() {
  return this.f_pointHoverBorderWidthCallback__org_pepstock_charba_client_data_LiningDataset_;
 }
 
 m_setPointHoverBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/** WidthCallback<DatasetContext> */ pointHoverBorderWidthCallback) {
  this.f_pointHoverBorderWidthCallback__org_pepstock_charba_client_data_LiningDataset_ = pointHoverBorderWidthCallback;
  if (!$Equality.$same(pointHoverBorderWidthCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_POINT_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property, this.f_pointHoverBorderWidthCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_POINT_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property);
  }
 }
 
 m_setPointHoverBorderWidth__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ pointHoverBorderWidthCallback) {
  this.m_setPointHoverBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/**@type {WidthCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_POINT_HOVER_BORDER_WIDTH__org_pepstock_charba_client_data_LiningDataset_Property, pointHoverBorderWidthCallback);
 }
 /** @return {RadiusCallback<DatasetContext>} */
 m_getPointRadiusCallback__() {
  return this.f_pointRadiusCallback__org_pepstock_charba_client_data_LiningDataset_;
 }
 
 m_setPointRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/** RadiusCallback<DatasetContext> */ pointRadiusCallback) {
  this.f_pointRadiusCallback__org_pepstock_charba_client_data_LiningDataset_ = pointRadiusCallback;
  if (!$Equality.$same(pointRadiusCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_POINT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property, this.f_pointRadiusCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_POINT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property);
  }
 }
 
 m_setPointRadius__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ pointRadiusCallback) {
  this.m_setPointRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/**@type {RadiusCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_POINT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property, pointRadiusCallback);
 }
 /** @return {RadiusCallback<DatasetContext>} */
 m_getPointHitRadiusCallback__() {
  return this.f_pointHitRadiusCallback__org_pepstock_charba_client_data_LiningDataset_;
 }
 
 m_setPointHitRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/** RadiusCallback<DatasetContext> */ pointHitRadiusCallback) {
  this.f_pointHitRadiusCallback__org_pepstock_charba_client_data_LiningDataset_ = pointHitRadiusCallback;
  if (!$Equality.$same(pointHitRadiusCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_POINT_HIT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property, this.f_pointHitRadiusCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_POINT_HIT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property);
  }
 }
 
 m_setPointHitRadius__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ pointHitRadiusCallback) {
  this.m_setPointHitRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/**@type {RadiusCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_POINT_HIT_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property, pointHitRadiusCallback);
 }
 /** @return {RadiusCallback<DatasetContext>} */
 m_getPointHoverRadiusCallback__() {
  return this.f_pointHoverRadiusCallback__org_pepstock_charba_client_data_LiningDataset_;
 }
 
 m_setPointHoverRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/** RadiusCallback<DatasetContext> */ pointHoverRadiusCallback) {
  this.f_pointHoverRadiusCallback__org_pepstock_charba_client_data_LiningDataset_ = pointHoverRadiusCallback;
  if (!$Equality.$same(pointHoverRadiusCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_POINT_HOVER_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property, this.f_pointHoverRadiusCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_POINT_HOVER_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property);
  }
 }
 
 m_setPointHoverRadius__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ pointHoverRadiusCallback) {
  this.m_setPointHoverRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/**@type {RadiusCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_POINT_HOVER_RADIUS__org_pepstock_charba_client_data_LiningDataset_Property, pointHoverRadiusCallback);
 }
 /** @return {RotationCallback<DatasetContext>} */
 m_getPointRotationCallback__() {
  return this.f_pointRotationCallback__org_pepstock_charba_client_data_LiningDataset_;
 }
 
 m_setPointRotation__org_pepstock_charba_client_callbacks_RotationCallback(/** RotationCallback<DatasetContext> */ pointRotationCallback) {
  this.f_pointRotationCallback__org_pepstock_charba_client_data_LiningDataset_ = pointRotationCallback;
  if (!$Equality.$same(pointRotationCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_POINT_ROTATION__org_pepstock_charba_client_data_LiningDataset_Property, this.f_pointRotationCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_POINT_ROTATION__org_pepstock_charba_client_data_LiningDataset_Property);
  }
 }
 
 m_setPointRotation__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ pointRotationCallback) {
  this.m_setPointRotation__org_pepstock_charba_client_callbacks_RotationCallback(/**@type {RotationCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_POINT_ROTATION__org_pepstock_charba_client_data_LiningDataset_Property, pointRotationCallback);
 }
 /** @return {CapStyleCallback<DatasetContext>} */
 m_getBorderCapStyleCallback__() {
  return this.f_borderCapStyleCallback__org_pepstock_charba_client_data_LiningDataset_;
 }
 
 m_setBorderCapStyle__org_pepstock_charba_client_callbacks_CapStyleCallback(/** CapStyleCallback<DatasetContext> */ borderCapStyleCallback) {
  this.f_borderCapStyleCallback__org_pepstock_charba_client_data_LiningDataset_ = borderCapStyleCallback;
  if (!$Equality.$same(borderCapStyleCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, this.f_borderCapStyleCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property);
  }
 }
 
 m_setBorderCapStyle__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderCapStyleCallback) {
  this.m_setBorderCapStyle__org_pepstock_charba_client_callbacks_CapStyleCallback(/**@type {CapStyleCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, borderCapStyleCallback);
 }
 /** @return {JoinStyleCallback<DatasetContext>} */
 m_getBorderJoinStyleCallback__() {
  return this.f_borderJoinStyleCallback__org_pepstock_charba_client_data_LiningDataset_;
 }
 
 m_setBorderJoinStyle__org_pepstock_charba_client_callbacks_JoinStyleCallback(/** JoinStyleCallback<DatasetContext> */ borderJoinStyleCallback) {
  this.f_borderJoinStyleCallback__org_pepstock_charba_client_data_LiningDataset_ = borderJoinStyleCallback;
  if (!$Equality.$same(borderJoinStyleCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, this.f_borderJoinStyleCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property);
  }
 }
 
 m_setBorderJoinStyle__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderJoinStyleCallback) {
  this.m_setBorderJoinStyle__org_pepstock_charba_client_callbacks_JoinStyleCallback(/**@type {JoinStyleCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, borderJoinStyleCallback);
 }
 /** @return {BorderDashCallback<DatasetContext>} */
 m_getBorderDashCallback__() {
  return this.f_borderDashCallback__org_pepstock_charba_client_data_LiningDataset_;
 }
 
 m_setBorderDash__org_pepstock_charba_client_callbacks_BorderDashCallback(/** BorderDashCallback<DatasetContext> */ borderDashCallback) {
  this.f_borderDashCallback__org_pepstock_charba_client_data_LiningDataset_ = borderDashCallback;
  if (!$Equality.$same(borderDashCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property, this.f_borderDashCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property);
  }
 }
 
 m_setBorderDash__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderDashCallback) {
  this.m_setBorderDash__org_pepstock_charba_client_callbacks_BorderDashCallback(/**@type {BorderDashCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property, borderDashCallback);
 }
 /** @return {BorderDashOffsetCallback<DatasetContext>} */
 m_getBorderDashOffsetCallback__() {
  return this.f_borderDashOffsetCallback__org_pepstock_charba_client_data_LiningDataset_;
 }
 
 m_setBorderDashOffset__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback(/** BorderDashOffsetCallback<DatasetContext> */ borderDashOffsetCallback) {
  this.f_borderDashOffsetCallback__org_pepstock_charba_client_data_LiningDataset_ = borderDashOffsetCallback;
  if (!$Equality.$same(borderDashOffsetCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property, this.f_borderDashOffsetCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property);
  }
 }
 
 m_setBorderDashOffset__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderDashOffsetCallback) {
  this.m_setBorderDashOffset__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback(/**@type {BorderDashOffsetCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property, borderDashOffsetCallback);
 }
 /** @return {CapStyleCallback<DatasetContext>} */
 m_getHoverBorderCapStyleCallback__() {
  return this.f_hoverBorderCapStyleCallback__org_pepstock_charba_client_data_LiningDataset_;
 }
 
 m_setHoverBorderCapStyle__org_pepstock_charba_client_callbacks_CapStyleCallback(/** CapStyleCallback<DatasetContext> */ borderCapStyleCallback) {
  this.f_hoverBorderCapStyleCallback__org_pepstock_charba_client_data_LiningDataset_ = borderCapStyleCallback;
  if (!$Equality.$same(borderCapStyleCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_HOVER_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, this.f_hoverBorderCapStyleCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_HOVER_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property);
  }
 }
 
 m_setHoverBorderCapStyle__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderCapStyleCallback) {
  this.m_setHoverBorderCapStyle__org_pepstock_charba_client_callbacks_CapStyleCallback(/**@type {CapStyleCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_HOVER_BORDER_CAP_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, borderCapStyleCallback);
 }
 /** @return {JoinStyleCallback<DatasetContext>} */
 m_getHoverBorderJoinStyleCallback__() {
  return this.f_hoverBorderJoinStyleCallback__org_pepstock_charba_client_data_LiningDataset_;
 }
 
 m_setHoverBorderJoinStyle__org_pepstock_charba_client_callbacks_JoinStyleCallback(/** JoinStyleCallback<DatasetContext> */ borderJoinStyleCallback) {
  this.f_hoverBorderJoinStyleCallback__org_pepstock_charba_client_data_LiningDataset_ = borderJoinStyleCallback;
  if (!$Equality.$same(borderJoinStyleCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_HOVER_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, this.f_hoverBorderJoinStyleCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_HOVER_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property);
  }
 }
 
 m_setHoverBorderJoinStyle__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderJoinStyleCallback) {
  this.m_setHoverBorderJoinStyle__org_pepstock_charba_client_callbacks_JoinStyleCallback(/**@type {JoinStyleCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_HOVER_BORDER_JOIN_STYLE__org_pepstock_charba_client_data_LiningDataset_Property, borderJoinStyleCallback);
 }
 /** @return {BorderDashCallback<DatasetContext>} */
 m_getHoverBorderDashCallback__() {
  return this.f_hoverBorderDashCallback__org_pepstock_charba_client_data_LiningDataset_;
 }
 
 m_setHoverBorderDash__org_pepstock_charba_client_callbacks_BorderDashCallback(/** BorderDashCallback<DatasetContext> */ borderDashCallback) {
  this.f_hoverBorderDashCallback__org_pepstock_charba_client_data_LiningDataset_ = borderDashCallback;
  if (!$Equality.$same(borderDashCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_HOVER_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property, this.f_hoverBorderDashCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_HOVER_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property);
  }
 }
 
 m_setHoverBorderDash__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderDashCallback) {
  this.m_setHoverBorderDash__org_pepstock_charba_client_callbacks_BorderDashCallback(/**@type {BorderDashCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_HOVER_BORDER_DASH__org_pepstock_charba_client_data_LiningDataset_Property, borderDashCallback);
 }
 /** @return {BorderDashOffsetCallback<DatasetContext>} */
 m_getHoverBorderDashOffsetCallback__() {
  return this.f_hoverBorderDashOffsetCallback__org_pepstock_charba_client_data_LiningDataset_;
 }
 
 m_setHoverBorderDashOffset__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback(/** BorderDashOffsetCallback<DatasetContext> */ borderDashOffsetCallback) {
  this.f_hoverBorderDashOffsetCallback__org_pepstock_charba_client_data_LiningDataset_ = borderDashOffsetCallback;
  if (!$Equality.$same(borderDashOffsetCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_HOVER_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property, this.f_hoverBorderDashOffsetCallbackProxy__org_pepstock_charba_client_data_LiningDataset_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_HOVER_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property);
  }
 }
 
 m_setHoverBorderDashOffset__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderDashOffsetCallback) {
  this.m_setHoverBorderDashOffset__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback(/**@type {BorderDashOffsetCallback<DatasetContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_HOVER_BORDER_DASH_OFFSET__org_pepstock_charba_client_data_LiningDataset_Property, borderDashOffsetCallback);
 }
 /** @return {FillCallback} */
 m_getFillCallback__() {
  return this.f_fillHandler__org_pepstock_charba_client_data_LiningDataset_.m_getFillCallback___$pp_org_pepstock_charba_client_data();
 }
 
 m_setFill__org_pepstock_charba_client_callbacks_FillCallback(/** FillCallback */ fillCallback) {
  this.f_fillHandler__org_pepstock_charba_client_data_LiningDataset_.m_setFill__org_pepstock_charba_client_callbacks_FillCallback_$pp_org_pepstock_charba_client_data(fillCallback);
 }
 
 m_setFill__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ fillCallback) {
  this.f_fillHandler__org_pepstock_charba_client_data_LiningDataset_.m_setFill__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_data(fillCallback);
 }
 /** @override @return {?string} */
 m_getDefaultBackgroundColorAsString__() {
  return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBackgroundColorAsString__();
 }
 /** @override @return {?string} */
 m_getDefaultBorderColorAsString__() {
  return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderColorAsString__();
 }
 /** @override @return {number} */
 m_getDefaultBorderWidth__() {
  return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderWidth__();
 }
 /** @override @return {?string} */
 m_getDefaultHoverBackgroundColorAsString__() {
  return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getHoverBackgroundColorAsString__();
 }
 /** @override @return {?string} */
 m_getDefaultHoverBorderColorAsString__() {
  return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getHoverBorderColorAsString__();
 }
 /** @override @return {number} */
 m_getDefaultHoverBorderWidth__() {
  return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getHoverBorderWidth__();
 }
 /** @return {?string} */
 m_onBorderCapStyle__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_CapStyleCallback_$p_org_pepstock_charba_client_data_LiningDataset(/** DatasetContext */ context, /** CapStyleCallback<DatasetContext> */ borderCapStyleCallback) {
  let result = /**@type {CapStyle}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, borderCapStyleCallback), CapStyle));
  if (!$Equality.$same(result, null)) {
   return result.m_value__();
  }
  return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderCapStyle__().m_value__();
 }
 /** @return {?string} */
 m_onBorderJoinStyle__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_JoinStyleCallback_$p_org_pepstock_charba_client_data_LiningDataset(/** DatasetContext */ context, /** JoinStyleCallback<DatasetContext> */ borderJoinStyleCallback) {
  let result = /**@type {JoinStyle}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, borderJoinStyleCallback), JoinStyle));
  if (!$Equality.$same(result, null)) {
   return result.m_value__();
  }
  return this.m_getDefaultValues__().m_getElements__().m_getLine__().m_getBorderJoinStyle__().m_value__();
 }
 /** @return {Array} */
 m_onBorderDash__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_BorderDashCallback_$p_org_pepstock_charba_client_data_LiningDataset(/** DatasetContext */ context, /** BorderDashCallback<DatasetContext> */ borderDashCallback) {
  let result = /**@type {List<Integer>}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, borderDashCallback), List));
  return ArrayInteger_$Overlay.m_fromOrEmpty__java_util_List(result);
 }
 //Default method forwarding stub.
 /** @override */
 m_setFill__boolean(/** boolean */ arg0) {
  HasFill.m_setFill__$default__org_pepstock_charba_client_options_HasFill__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setFill__int(/** number */ arg0) {
  HasFill.m_setFill__$default__org_pepstock_charba_client_options_HasFill__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setFill__java_lang_String(/** ?string */ arg0) {
  HasFill.m_setFill__$default__org_pepstock_charba_client_options_HasFill__java_lang_String(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setFill__org_pepstock_charba_client_enums_IsFill(/** IsFill */ arg0) {
  HasFill.m_setFill__$default__org_pepstock_charba_client_options_HasFill__org_pepstock_charba_client_enums_IsFill(this, arg0);
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
 m_getSpanGaps__() {
  return HasSpanGaps.m_getSpanGaps__$default__org_pepstock_charba_client_options_HasSpanGaps(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isSpanGaps__() {
  return HasSpanGaps.m_isSpanGaps__$default__org_pepstock_charba_client_options_HasSpanGaps(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setSpanGaps__boolean(/** boolean */ arg0) {
  HasSpanGaps.m_setSpanGaps__$default__org_pepstock_charba_client_options_HasSpanGaps__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setSpanGaps__double(/** number */ arg0) {
  HasSpanGaps.m_setSpanGaps__$default__org_pepstock_charba_client_options_HasSpanGaps__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {List<PointStyle>} */
 m_getPointStyle__() {
  return HasDataPointStyle.m_getPointStyle__$default__org_pepstock_charba_client_data_HasDataPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override @return {List<HTMLCanvasElement>} */
 m_getPointStyleAsCanvas__() {
  return HasDataPointStyle.m_getPointStyleAsCanvas__$default__org_pepstock_charba_client_data_HasDataPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override @return {List<HTMLImageElement>} */
 m_getPointStyleAsImages__() {
  return HasDataPointStyle.m_getPointStyleAsImages__$default__org_pepstock_charba_client_data_HasDataPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override @return {PointStyleCallback} */
 m_getPointStyleCallback__() {
  return HasDataPointStyle.m_getPointStyleCallback__$default__org_pepstock_charba_client_data_HasDataPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override @return {PointStyleType} */
 m_getPointStyleType__() {
  return HasDataPointStyle.m_getPointStyleType__$default__org_pepstock_charba_client_data_HasDataPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setPointStyle__arrayOf_org_pepstock_charba_client_enums_PointStyle(/** Array<PointStyle> */ arg0) {
  HasDataPointStyle.m_setPointStyle__$default__org_pepstock_charba_client_data_HasDataPointStyle__arrayOf_org_pepstock_charba_client_enums_PointStyle(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setPointStyle__arrayOf_org_pepstock_charba_client_dom_elements_Img(/** Array<HTMLImageElement> */ arg0) {
  HasDataPointStyle.m_setPointStyle__$default__org_pepstock_charba_client_data_HasDataPointStyle__arrayOf_org_pepstock_charba_client_dom_elements_Img(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setPointStyle__arrayOf_org_pepstock_charba_client_dom_elements_Canvas(/** Array<HTMLCanvasElement> */ arg0) {
  HasDataPointStyle.m_setPointStyle__$default__org_pepstock_charba_client_data_HasDataPointStyle__arrayOf_org_pepstock_charba_client_dom_elements_Canvas(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(/** PointStyleCallback */ arg0) {
  HasDataPointStyle.m_setPointStyle__$default__org_pepstock_charba_client_data_HasDataPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback(this, arg0);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_data_LiningDataset() {
  this.f_borderCapStyleCallbackProxy__org_pepstock_charba_client_data_LiningDataset_ = /**@type {CharbaCallbackProxy<?function(?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderDashCallbackProxy__org_pepstock_charba_client_data_LiningDataset_ = /**@type {CharbaCallbackProxy<?function(?):Array>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderDashOffsetCallbackProxy__org_pepstock_charba_client_data_LiningDataset_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderJoinStyleCallbackProxy__org_pepstock_charba_client_data_LiningDataset_ = /**@type {CharbaCallbackProxy<?function(?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hoverBorderCapStyleCallbackProxy__org_pepstock_charba_client_data_LiningDataset_ = /**@type {CharbaCallbackProxy<?function(?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hoverBorderDashCallbackProxy__org_pepstock_charba_client_data_LiningDataset_ = /**@type {CharbaCallbackProxy<?function(?):Array>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hoverBorderDashOffsetCallbackProxy__org_pepstock_charba_client_data_LiningDataset_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hoverBorderJoinStyleCallbackProxy__org_pepstock_charba_client_data_LiningDataset_ = /**@type {CharbaCallbackProxy<?function(?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_pointBackgroundColorCallbackProxy__org_pepstock_charba_client_data_LiningDataset_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_pointBorderColorCallbackProxy__org_pepstock_charba_client_data_LiningDataset_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_pointBorderWidthCallbackProxy__org_pepstock_charba_client_data_LiningDataset_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_pointHoverBackgroundColorCallbackProxy__org_pepstock_charba_client_data_LiningDataset_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_pointHoverBorderColorCallbackProxy__org_pepstock_charba_client_data_LiningDataset_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_pointHoverBorderWidthCallbackProxy__org_pepstock_charba_client_data_LiningDataset_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_pointRadiusCallbackProxy__org_pepstock_charba_client_data_LiningDataset_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_pointHitRadiusCallbackProxy__org_pepstock_charba_client_data_LiningDataset_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_pointHoverRadiusCallbackProxy__org_pepstock_charba_client_data_LiningDataset_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_pointRotationCallbackProxy__org_pepstock_charba_client_data_LiningDataset_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_pointBackgroundColorCallback__org_pepstock_charba_client_data_LiningDataset_ = null;
  this.f_pointBorderColorCallback__org_pepstock_charba_client_data_LiningDataset_ = null;
  this.f_pointBorderWidthCallback__org_pepstock_charba_client_data_LiningDataset_ = null;
  this.f_pointHoverBackgroundColorCallback__org_pepstock_charba_client_data_LiningDataset_ = null;
  this.f_pointHoverBorderColorCallback__org_pepstock_charba_client_data_LiningDataset_ = null;
  this.f_pointHoverBorderWidthCallback__org_pepstock_charba_client_data_LiningDataset_ = null;
  this.f_pointRadiusCallback__org_pepstock_charba_client_data_LiningDataset_ = null;
  this.f_pointHitRadiusCallback__org_pepstock_charba_client_data_LiningDataset_ = null;
  this.f_pointHoverRadiusCallback__org_pepstock_charba_client_data_LiningDataset_ = null;
  this.f_pointRotationCallback__org_pepstock_charba_client_data_LiningDataset_ = null;
  this.f_borderCapStyleCallback__org_pepstock_charba_client_data_LiningDataset_ = null;
  this.f_borderDashCallback__org_pepstock_charba_client_data_LiningDataset_ = null;
  this.f_borderDashOffsetCallback__org_pepstock_charba_client_data_LiningDataset_ = null;
  this.f_borderJoinStyleCallback__org_pepstock_charba_client_data_LiningDataset_ = null;
  this.f_hoverBorderCapStyleCallback__org_pepstock_charba_client_data_LiningDataset_ = null;
  this.f_hoverBorderDashCallback__org_pepstock_charba_client_data_LiningDataset_ = null;
  this.f_hoverBorderDashOffsetCallback__org_pepstock_charba_client_data_LiningDataset_ = null;
  this.f_hoverBorderJoinStyleCallback__org_pepstock_charba_client_data_LiningDataset_ = null;
 }
 
 static $clinit() {
  LiningDataset.$clinit = () =>{};
  LiningDataset.$loadModules();
  Dataset.$clinit();
  HasFill.$clinit();
  HasOrder.$clinit();
  HasSpanGaps.$clinit();
  HasDataPointStyle.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LiningDataset;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  List = goog.module.get('java.util.List$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  Gradient = goog.module.get('org.pepstock.charba.client.colors.Gradient$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Pattern = goog.module.get('org.pepstock.charba.client.colors.Pattern$impl');
  ArrayInteger_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayObject_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
  ArrayString_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  DataEnvelop = goog.module.get('org.pepstock.charba.client.data.DataEnvelop$impl');
  DataPointStyleHandler = goog.module.get('org.pepstock.charba.client.data.DataPointStyleHandler$impl');
  CanvasObjectProperty = goog.module.get('org.pepstock.charba.client.data.Dataset.CanvasObjectProperty$impl');
  CommonProperty = goog.module.get('org.pepstock.charba.client.data.Dataset.CommonProperty$impl');
  InternalProperty = goog.module.get('org.pepstock.charba.client.data.Dataset.InternalProperty$impl');
  InternalCanvasObjectProperty = goog.module.get('org.pepstock.charba.client.data.LiningDataset.InternalCanvasObjectProperty$impl');
  Property = goog.module.get('org.pepstock.charba.client.data.LiningDataset.Property$impl');
  LiningDatasetFillHandler = goog.module.get('org.pepstock.charba.client.data.LiningDatasetFillHandler$impl');
  OrderHandler = goog.module.get('org.pepstock.charba.client.data.OrderHandler$impl');
  CapStyle = goog.module.get('org.pepstock.charba.client.enums.CapStyle$impl');
  JoinStyle = goog.module.get('org.pepstock.charba.client.enums.JoinStyle$impl');
  SpanGapHandler = goog.module.get('org.pepstock.charba.client.options.SpanGapHandler$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {?string}*/
LiningDataset.f_DEFAULT_LABEL__org_pepstock_charba_client_data_LiningDataset_ = "";
HasFill.$markImplementor(LiningDataset);
HasOrder.$markImplementor(LiningDataset);
HasPointFillStrokeStyles.$markImplementor(LiningDataset);
HasSpanGaps.$markImplementor(LiningDataset);
HasDataPointStyle.$markImplementor(LiningDataset);
$Util.$setClassMetadata(LiningDataset, "org.pepstock.charba.client.data.LiningDataset");

exports = LiningDataset;

//# sourceMappingURL=LiningDataset.js.map
