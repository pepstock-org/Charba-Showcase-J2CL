goog.module('org.pepstock.charba.client.annotation.AbstractAnnotation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultsAnnotation = goog.require('org.pepstock.charba.client.annotation.IsDefaultsAnnotation$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Number = goog.forwardDeclare('java.lang.Number$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let AtomicInteger = goog.forwardDeclare('java.util.concurrent.atomic.AtomicInteger$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.annotation.AbstractAnnotation.Property$impl');
let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let AnnotationHelper = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationHelper$impl');
let AnnotationId = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationId$impl');
let AnnotationOptions_Property = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationOptions.Property$impl');
let AnnotationPlugin = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
let AnnotationType = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationType$impl');
let LineAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.LineAnnotation$impl');
let AdjustScaleRangeCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.AdjustScaleRangeCallback$impl');
let DrawTimeCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.DrawTimeCallback$impl');
let ValueCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.ValueCallback$impl');
let DrawTime = goog.forwardDeclare('org.pepstock.charba.client.annotation.enums.DrawTime$impl');
let ClickCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.listeners.ClickCallback$impl');
let DoubleClickCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.listeners.DoubleClickCallback$impl');
let EnterCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.listeners.EnterCallback$impl');
let LeaveCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.listeners.LeaveCallback$impl');
let BorderDashCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderDashCallback$impl');
let BorderDashOffsetCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderDashOffsetCallback$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let DisplayCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DisplayCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let WidthCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.WidthCallback$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ArrayInteger_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let CallbackPropertyHandler = goog.forwardDeclare('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Numbers = goog.forwardDeclare('vmbootstrap.Numbers$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @abstract
 * @implements {IsDefaultsAnnotation}
 */
class AbstractAnnotation extends AbstractNode {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):boolean>}*/
  this.f_displayCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_borderColorCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_borderWidthCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_;
  /**@type {CharbaCallbackProxy<?function(?):Array>}*/
  this.f_borderDashCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_borderDashOffsetCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_;
  /**@type {CharbaCallbackProxy<?function(?):?string>}*/
  this.f_drawTimeCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_;
  /**@type {CharbaCallbackProxy<?function(?):boolean>}*/
  this.f_adjustScaleRangeCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_;
  /**@type {CharbaCallbackProxy<?function(?):void>}*/
  this.f_enterCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_;
  /**@type {CharbaCallbackProxy<?function(?):void>}*/
  this.f_leaveCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_;
  /**@type {CharbaCallbackProxy<?function(?):void>}*/
  this.f_clickCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_;
  /**@type {CharbaCallbackProxy<?function(?):void>}*/
  this.f_dblclickCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_;
  /**@type {IsDefaultsAnnotation}*/
  this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractAnnotation_;
  /**@type {DrawTime}*/
  this.f_parentDrawTime__org_pepstock_charba_client_annotation_AbstractAnnotation_;
 }
 //Initialization from constructor 'AbstractAnnotation(AnnotationType, AnnotationId, IsDefaultsAnnotation)'.
 
 $ctor__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_annotation_AnnotationType__org_pepstock_charba_client_annotation_AnnotationId__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** AnnotationType */ type, /** AnnotationId */ id, /** IsDefaultsAnnotation */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(null, defaultValues);
  AnnotationId.m_checkIfValid__org_pepstock_charba_client_annotation_AnnotationId(id);
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(type);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ID__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, id);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TYPE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, type);
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_CHARBA_ANNOTATION_ID__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, AbstractAnnotation.f_COUNTER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getAndIncrement__());
  this.m_setNewIncrementalId__();
  AnnotationHelper.m_get__().m_addAnnotation__org_pepstock_charba_client_annotation_AbstractAnnotation_$pp_org_pepstock_charba_client_annotation(this);
  this.f_displayCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_.callback = (/** ? */ context) =>{
   return Boolean.m_booleanValue__java_lang_Boolean(/**@type {?boolean}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this, context), this.m_getDisplayCallback__(), defaultValues.m_isDisplay__()), Boolean)));
  };
  this.f_borderColorCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_.callback = (/** ? */ context_1) =>{
   return ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String__boolean(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this, context_1), this.m_getBorderColorCallback__(), defaultValues.m_getBorderColorAsString__(), false);
  };
  this.f_borderWidthCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_.callback = (/** ? */ context_2) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this, context_2), this.m_getBorderWidthCallback__(), Integer.m_valueOf__int(defaultValues.m_getBorderWidth__())), Integer)).m_intValue__();
  };
  this.f_borderDashCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_.callback = (/** ? */ context_3) =>{
   return this.m_onBorderDash__org_pepstock_charba_client_annotation_AnnotationContext__org_pepstock_charba_client_callbacks_BorderDashCallback__java_util_List_$p_org_pepstock_charba_client_annotation_AbstractAnnotation(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this, context_3), this.m_getBorderDashCallback__(), defaultValues.m_getBorderDash__());
  };
  this.f_borderDashOffsetCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_.callback = (/** ? */ context_4) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this, context_4), this.m_getBorderDashOffsetCallback__(), defaultValues.m_getBorderDashOffset__()), Double)));
  };
  this.f_drawTimeCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_.callback = (/** ? */ context_5) =>{
   return /**@type {DrawTime}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this, context_5), this.m_getDrawTimeCallback__(), defaultValues.m_getDrawTime__()), DrawTime)).m_value__();
  };
  this.f_adjustScaleRangeCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_.callback = (/** ? */ context_6) =>{
   return Boolean.m_booleanValue__java_lang_Boolean(/**@type {?boolean}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this, context_6), this.m_getAdjustScaleRangeCallback__(), defaultValues.m_isAdjustScaleRange__()), Boolean)));
  };
  this.f_enterCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_.callback = (/** ? */ arg0) =>{
   this.m_onEnter__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_annotation_AbstractAnnotation(arg0);
  };
  this.f_leaveCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_.callback = (/** ? */ arg0_1) =>{
   this.m_onLeave__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_annotation_AbstractAnnotation(arg0_1);
  };
  this.f_clickCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_.callback = (/** ? */ arg0_2) =>{
   this.m_onClick__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_annotation_AbstractAnnotation(arg0_2);
  };
  this.f_dblclickCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_.callback = (/** ? */ arg0_3) =>{
   this.m_onDblclick__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_annotation_AbstractAnnotation(arg0_3);
  };
 }
 //Initialization from constructor 'AbstractAnnotation(NativeObject, IsDefaultsAnnotation)'.
 
 $ctor__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(/** ? */ nativeObject, /** IsDefaultsAnnotation */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.$init___$p_org_pepstock_charba_client_annotation_AbstractAnnotation();
  this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {IsDefaultsAnnotation}*/ ($Casts.$to(this.m_checkDefaultValuesArgument__java_lang_Object(defaultValues), IsDefaultsAnnotation));
 }
 /** @return {IsDefaultsAnnotation} */
 m_getDefaultsValues___$pp_org_pepstock_charba_client_annotation() {
  return this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractAnnotation_;
 }
 /** @return {number} */
 m_getAnnotationId___$pp_org_pepstock_charba_client_annotation() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_CHARBA_ANNOTATION_ID__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {AnnotationId} */
 m_getId__() {
  return AnnotationId.m_create__java_lang_String(this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_ID__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined));
 }
 /** @override @return {AnnotationType} */
 m_getType__() {
  return /**@type {AnnotationType}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TYPE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, AnnotationType.m_values__(), this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getType__()), AnnotationType));
 }
 
 m_setDisplay__boolean(/** boolean */ display) {
  this.m_setDisplay__org_pepstock_charba_client_callbacks_DisplayCallback(/**@type {DisplayCallback<AnnotationContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, display);
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_isDisplay__());
 }
 
 m_setAdjustScaleRange__boolean(/** boolean */ display) {
  this.m_setAdjustScaleRange__org_pepstock_charba_client_annotation_callbacks_AdjustScaleRangeCallback(/**@type {AdjustScaleRangeCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ADJUST_SCALE_RANGE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, display);
 }
 /** @override @return {boolean} */
 m_isAdjustScaleRange__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ADJUST_SCALE_RANGE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_isAdjustScaleRange__());
 }
 
 m_setParentDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime_$pp_org_pepstock_charba_client_annotation(/** DrawTime */ parentDrawTime) {
  this.f_parentDrawTime__org_pepstock_charba_client_annotation_AbstractAnnotation_ = parentDrawTime;
  if (LineAnnotation.$isInstance(this) && this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(AnnotationOptions_Property.f_DRAW_TIME__org_pepstock_charba_client_annotation_AnnotationOptions_Property, ObjectType.f_UNDEFINED__org_pepstock_charba_client_commons_ObjectType)) {
   let line = /**@type {LineAnnotation}*/ ($Casts.$to(this, LineAnnotation));
   line.m_getLabel__().m_setParentDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime_$pp_org_pepstock_charba_client_annotation(parentDrawTime);
  }
 }
 
 m_setDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime(/** DrawTime */ drawTime) {
  this.m_setDrawTime__org_pepstock_charba_client_annotation_callbacks_DrawTimeCallback(/**@type {DrawTimeCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(AnnotationOptions_Property.f_DRAW_TIME__org_pepstock_charba_client_annotation_AnnotationOptions_Property, drawTime);
  if (LineAnnotation.$isInstance(this)) {
   let line = /**@type {LineAnnotation}*/ ($Casts.$to(this, LineAnnotation));
   line.m_getLabel__().m_setParentDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime_$pp_org_pepstock_charba_client_annotation(drawTime);
  }
 }
 /** @override @return {DrawTime} */
 m_getDrawTime__() {
  return /**@type {DrawTime}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(AnnotationOptions_Property.f_DRAW_TIME__org_pepstock_charba_client_annotation_AnnotationOptions_Property, DrawTime.m_values__(), !$Equality.$same(this.f_parentDrawTime__org_pepstock_charba_client_annotation_AbstractAnnotation_, null) ? this.f_parentDrawTime__org_pepstock_charba_client_annotation_AbstractAnnotation_ : this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getDrawTime__()), DrawTime));
 }
 
 m_setBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ borderColor) {
  this.m_setBorderColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(borderColor));
 }
 
 m_setBorderColor__java_lang_String(/** ?string */ borderColor) {
  this.m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<AnnotationContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BORDER_COLOR__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, borderColor);
 }
 /** @return {IsColor} */
 m_getBorderColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getBorderColorAsString__());
 }
 
 m_setBorderWidth__int(/** number */ borderWidth) {
  this.m_setBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/**@type {WidthCallback<AnnotationContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_WIDTH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, Checker.m_positiveOrZero__int(borderWidth));
 }
 
 m_setBorderDash__arrayOf_int(/** Array<number> */ borderDash) {
  this.m_setBorderDash__org_pepstock_charba_client_callbacks_BorderDashCallback(/**@type {BorderDashCallback<AnnotationContext>}*/ (null));
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_BORDER_DASH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, ArrayInteger_$Overlay.m_fromOrNull__arrayOf_int(borderDash));
 }
 /** @override @return {List<Integer>} */
 m_getBorderDash__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_BORDER_DASH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, ObjectType.f_ARRAY__org_pepstock_charba_client_commons_ObjectType)) {
   let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_BORDER_DASH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property), ArrayInteger_$Overlay));
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayInteger(array);
  }
  return this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getBorderDash__();
 }
 
 m_setBorderDashOffset__double(/** number */ borderDashOffset) {
  this.m_setBorderDashOffset__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback(/**@type {BorderDashOffsetCallback<AnnotationContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_BORDER_DASH_OFFSET__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, borderDashOffset);
 }
 /** @override @return {number} */
 m_getBorderDashOffset__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_BORDER_DASH_OFFSET__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getBorderDashOffset__());
 }
 /** @override @return {DrawTimeCallback} */
 m_getDrawTimeCallback__() {
  return /**@type {DrawTimeCallback}*/ ($Casts.$to(AbstractAnnotation.f_DRAW_TIME_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getDrawTimeCallback__()), DrawTimeCallback));
 }
 
 m_setDrawTime__org_pepstock_charba_client_annotation_callbacks_DrawTimeCallback(/** DrawTimeCallback */ drawTimeCallback) {
  AbstractAnnotation.f_DRAW_TIME_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, drawTimeCallback, this.f_drawTimeCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_.proxy);
 }
 
 m_setDrawTime__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ drawTimeCallback) {
  this.m_setDrawTime__org_pepstock_charba_client_annotation_callbacks_DrawTimeCallback(/**@type {DrawTimeCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(AnnotationOptions_Property.f_DRAW_TIME__org_pepstock_charba_client_annotation_AnnotationOptions_Property, drawTimeCallback);
 }
 /** @override @return {DisplayCallback<AnnotationContext>} */
 m_getDisplayCallback__() {
  return /**@type {DisplayCallback<AnnotationContext>}*/ ($Casts.$to(AbstractAnnotation.f_DISPLAY_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getDisplayCallback__()), DisplayCallback));
 }
 
 m_setDisplay__org_pepstock_charba_client_callbacks_DisplayCallback(/** DisplayCallback<AnnotationContext> */ displayCallback) {
  AbstractAnnotation.f_DISPLAY_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, displayCallback, this.f_displayCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_.proxy);
 }
 
 m_setDisplay__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ displayCallback) {
  this.m_setDisplay__org_pepstock_charba_client_callbacks_DisplayCallback(/**@type {DisplayCallback<AnnotationContext>}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_DISPLAY__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, displayCallback);
 }
 /** @override @return {ColorCallback<AnnotationContext>} */
 m_getBorderColorCallback__() {
  return /**@type {ColorCallback<AnnotationContext>}*/ ($Casts.$to(AbstractAnnotation.f_BORDER_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getBorderColorCallback__()), ColorCallback));
 }
 
 m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<AnnotationContext> */ borderColorCallback) {
  AbstractAnnotation.f_BORDER_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, borderColorCallback, this.f_borderColorCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_.proxy);
 }
 
 m_setBorderColor__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderColorCallback) {
  this.m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<AnnotationContext>}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_BORDER_COLOR__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, borderColorCallback);
 }
 /** @override @return {WidthCallback<AnnotationContext>} */
 m_getBorderWidthCallback__() {
  return /**@type {WidthCallback<AnnotationContext>}*/ ($Casts.$to(AbstractAnnotation.f_BORDER_WIDTH_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getBorderWidthCallback__()), WidthCallback));
 }
 
 m_setBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/** WidthCallback<AnnotationContext> */ borderWidthCallback) {
  AbstractAnnotation.f_BORDER_WIDTH_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, borderWidthCallback, this.f_borderWidthCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_.proxy);
 }
 
 m_setBorderWidth__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderWidthCallback) {
  this.m_setBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/**@type {WidthCallback<AnnotationContext>}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_BORDER_WIDTH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, borderWidthCallback);
 }
 /** @override @return {BorderDashCallback<AnnotationContext>} */
 m_getBorderDashCallback__() {
  return /**@type {BorderDashCallback<AnnotationContext>}*/ ($Casts.$to(AbstractAnnotation.f_BORDER_DASH_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getBorderDashCallback__()), BorderDashCallback));
 }
 
 m_setBorderDash__org_pepstock_charba_client_callbacks_BorderDashCallback(/** BorderDashCallback<AnnotationContext> */ borderDashCallback) {
  AbstractAnnotation.f_BORDER_DASH_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, borderDashCallback, this.f_borderDashCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_.proxy);
 }
 
 m_setBorderDash__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderDashCallback) {
  this.m_setBorderDash__org_pepstock_charba_client_callbacks_BorderDashCallback(/**@type {BorderDashCallback<AnnotationContext>}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_BORDER_DASH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, borderDashCallback);
 }
 /** @override @return {BorderDashOffsetCallback<AnnotationContext>} */
 m_getBorderDashOffsetCallback__() {
  return /**@type {BorderDashOffsetCallback<AnnotationContext>}*/ ($Casts.$to(AbstractAnnotation.f_BORDER_DASH_OFFSET_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getBorderDashOffsetCallback__()), BorderDashOffsetCallback));
 }
 
 m_setBorderDashOffset__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback(/** BorderDashOffsetCallback<AnnotationContext> */ borderDashOffsetCallback) {
  AbstractAnnotation.f_BORDER_DASH_OFFSET_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, borderDashOffsetCallback, this.f_borderDashOffsetCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_.proxy);
 }
 
 m_setBorderDashOffset__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderDashOffsetCallback) {
  this.m_setBorderDashOffset__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback(/**@type {BorderDashOffsetCallback<AnnotationContext>}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_BORDER_DASH_OFFSET__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, borderDashOffsetCallback);
 }
 /** @override @return {AdjustScaleRangeCallback} */
 m_getAdjustScaleRangeCallback__() {
  return /**@type {AdjustScaleRangeCallback}*/ ($Casts.$to(AbstractAnnotation.f_ADJUST_SCALE_RANGE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getAdjustScaleRangeCallback__()), AdjustScaleRangeCallback));
 }
 
 m_setAdjustScaleRange__org_pepstock_charba_client_annotation_callbacks_AdjustScaleRangeCallback(/** AdjustScaleRangeCallback */ adjustScaleRangeCallback) {
  AbstractAnnotation.f_ADJUST_SCALE_RANGE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, adjustScaleRangeCallback, this.f_adjustScaleRangeCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_.proxy);
 }
 
 m_setAdjustScaleRange__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ adjustScaleRangeCallback) {
  this.m_setAdjustScaleRange__org_pepstock_charba_client_annotation_callbacks_AdjustScaleRangeCallback(/**@type {AdjustScaleRangeCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_ADJUST_SCALE_RANGE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property, adjustScaleRangeCallback);
 }
 /** @override @return {EnterCallback} */
 m_getEnterCallback__() {
  return /**@type {EnterCallback}*/ ($Casts.$to(AbstractAnnotation.f_ENTER_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getEnterCallback__()), EnterCallback));
 }
 
 m_setEnterCallback__org_pepstock_charba_client_annotation_listeners_EnterCallback(/** EnterCallback */ enterCallback) {
  AbstractAnnotation.f_ENTER_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, enterCallback, this.f_enterCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_.proxy);
 }
 /** @override @return {LeaveCallback} */
 m_getLeaveCallback__() {
  return /**@type {LeaveCallback}*/ ($Casts.$to(AbstractAnnotation.f_LEAVE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getLeaveCallback__()), LeaveCallback));
 }
 
 m_setLeaveCallback__org_pepstock_charba_client_annotation_listeners_LeaveCallback(/** LeaveCallback */ leaveCallback) {
  AbstractAnnotation.f_LEAVE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, leaveCallback, this.f_leaveCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_.proxy);
 }
 /** @override @return {ClickCallback} */
 m_getClickCallback__() {
  return /**@type {ClickCallback}*/ ($Casts.$to(AbstractAnnotation.f_CLICK_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getClickCallback__()), ClickCallback));
 }
 
 m_setClickCallback__org_pepstock_charba_client_annotation_listeners_ClickCallback(/** ClickCallback */ clickCallback) {
  AbstractAnnotation.f_CLICK_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, clickCallback, this.f_clickCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_.proxy);
 }
 /** @override @return {DoubleClickCallback} */
 m_getDoubleClickCallback__() {
  return /**@type {DoubleClickCallback}*/ ($Casts.$to(AbstractAnnotation.f_DOUBLE_CLICK_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_getDoubleClickCallback__()), DoubleClickCallback));
 }
 
 m_setDoubleClickCallback__org_pepstock_charba_client_annotation_listeners_DoubleClickCallback(/** DoubleClickCallback */ dblclickCallback) {
  AbstractAnnotation.f_DOUBLE_CLICK_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, dblclickCallback, this.f_dblclickCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_.proxy);
 }
 
 m_onEnter__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_annotation_AbstractAnnotation(/** ? */ context) {
  let enterCallback = this.m_getEnterCallback__();
  let internalContext = AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this, context);
  let chart = internalContext.m_getChart__();
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart) && !$Equality.$same(enterCallback, null)) {
   enterCallback.m_onEnter__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_annotation_AbstractAnnotation(chart, this);
  }
 }
 
 m_onLeave__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_annotation_AbstractAnnotation(/** ? */ context) {
  let leaveCallback = this.m_getLeaveCallback__();
  let internalContext = AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this, context);
  let chart = internalContext.m_getChart__();
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart) && !$Equality.$same(leaveCallback, null)) {
   leaveCallback.m_onLeave__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_annotation_AbstractAnnotation(chart, this);
  }
 }
 
 m_onClick__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_annotation_AbstractAnnotation(/** ? */ context) {
  let clickCallback = this.m_getClickCallback__();
  let internalContext = AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this, context);
  let chart = internalContext.m_getChart__();
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart) && !$Equality.$same(clickCallback, null)) {
   clickCallback.m_onClick__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_annotation_AbstractAnnotation(chart, this);
  }
 }
 
 m_onDblclick__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_annotation_AbstractAnnotation(/** ? */ context) {
  let dblclickCallback = this.m_getDoubleClickCallback__();
  let internalContext = AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this, context);
  let chart = internalContext.m_getChart__();
  if (IsChart.m_isValid__org_pepstock_charba_client_IsChart(chart) && !$Equality.$same(dblclickCallback, null)) {
   dblclickCallback.m_onDoubleClick__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_annotation_AbstractAnnotation(chart, this);
  }
 }
 /** @return {Array} */
 m_onBorderDash__org_pepstock_charba_client_annotation_AnnotationContext__org_pepstock_charba_client_callbacks_BorderDashCallback__java_util_List_$p_org_pepstock_charba_client_annotation_AbstractAnnotation(/** AnnotationContext */ context, /** BorderDashCallback<AnnotationContext> */ borderDashCallback, /** List<Integer> */ defaultValue) {
  let result = /**@type {List<Integer>}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, borderDashCallback), List));
  if (!$Equality.$same(result, null)) {
   return ArrayInteger_$Overlay.m_fromOrEmpty__java_util_List(result);
  }
  return ArrayInteger_$Overlay.m_fromOrEmpty__java_util_List(defaultValue);
 }
 /** @return {*} */
 m_onValue__org_pepstock_charba_client_annotation_AnnotationContext__org_pepstock_charba_client_annotation_callbacks_ValueCallback_$pp_org_pepstock_charba_client_annotation(/** AnnotationContext */ context, /** ValueCallback */ valueCallback) {
  let result = ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, valueCallback);
  if (Number.$isInstance(result)) {
   let number_1 = /**@type {(Number|number)}*/ ($Casts.$to(result, Number));
   return $Numbers.m_doubleValue__java_lang_Number(number_1);
  } else if (j_l_String.$isInstance(result)) {
   return result;
  } else if (Date.$isInstance(result)) {
   let date = /**@type {Date}*/ ($Casts.$to(result, Date));
   return $Primitives.$widenLongToDouble(date.m_getTime__());
  }
  return window.undefined;
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return IsDefaultsAnnotation.m_getBorderColorAsString__$default__org_pepstock_charba_client_annotation_IsDefaultsAnnotation(this);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_annotation_AbstractAnnotation() {
  this.f_displayCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {CharbaCallbackProxy<?function(?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderColorCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderWidthCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderDashCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {CharbaCallbackProxy<?function(?):Array>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderDashOffsetCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_drawTimeCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {CharbaCallbackProxy<?function(?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_adjustScaleRangeCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {CharbaCallbackProxy<?function(?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_enterCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {CharbaCallbackProxy<?function(?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_leaveCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {CharbaCallbackProxy<?function(?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_clickCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {CharbaCallbackProxy<?function(?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_dblclickCallbackProxy__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {CharbaCallbackProxy<?function(?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_parentDrawTime__org_pepstock_charba_client_annotation_AbstractAnnotation_ = null;
 }
 
 static $clinit() {
  AbstractAnnotation.$clinit = () =>{};
  AbstractAnnotation.$loadModules();
  AbstractNode.$clinit();
  IsDefaultsAnnotation.$clinit();
  AbstractAnnotation.f_COUNTER__org_pepstock_charba_client_annotation_AbstractAnnotation_ = AtomicInteger.$create__int(0);
  AbstractAnnotation.f_DISPLAY_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {!CallbackPropertyHandler<DisplayCallback<AnnotationContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_DISPLAY__org_pepstock_charba_client_annotation_AbstractAnnotation_Property));
  AbstractAnnotation.f_BORDER_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {!CallbackPropertyHandler<ColorCallback<AnnotationContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_BORDER_COLOR__org_pepstock_charba_client_annotation_AbstractAnnotation_Property));
  AbstractAnnotation.f_BORDER_WIDTH_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {!CallbackPropertyHandler<WidthCallback<AnnotationContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_BORDER_WIDTH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property));
  AbstractAnnotation.f_BORDER_DASH_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {!CallbackPropertyHandler<BorderDashCallback<AnnotationContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_BORDER_DASH__org_pepstock_charba_client_annotation_AbstractAnnotation_Property));
  AbstractAnnotation.f_BORDER_DASH_OFFSET_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {!CallbackPropertyHandler<BorderDashOffsetCallback<AnnotationContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_BORDER_DASH_OFFSET__org_pepstock_charba_client_annotation_AbstractAnnotation_Property));
  AbstractAnnotation.f_DRAW_TIME_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {!CallbackPropertyHandler<DrawTimeCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(AnnotationOptions_Property.f_DRAW_TIME__org_pepstock_charba_client_annotation_AnnotationOptions_Property));
  AbstractAnnotation.f_ADJUST_SCALE_RANGE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {!CallbackPropertyHandler<AdjustScaleRangeCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_ADJUST_SCALE_RANGE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property));
  AbstractAnnotation.f_CLICK_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {!CallbackPropertyHandler<ClickCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_CLICK__org_pepstock_charba_client_annotation_AbstractAnnotation_Property));
  AbstractAnnotation.f_ENTER_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {!CallbackPropertyHandler<EnterCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_ENTER__org_pepstock_charba_client_annotation_AbstractAnnotation_Property));
  AbstractAnnotation.f_LEAVE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {!CallbackPropertyHandler<LeaveCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_LEAVE__org_pepstock_charba_client_annotation_AbstractAnnotation_Property));
  AbstractAnnotation.f_DOUBLE_CLICK_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_ = /**@type {!CallbackPropertyHandler<DoubleClickCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_DOUBLE_CLICK__org_pepstock_charba_client_annotation_AbstractAnnotation_Property));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractAnnotation;
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Number = goog.module.get('java.lang.Number$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Date = goog.module.get('java.util.Date$impl');
  List = goog.module.get('java.util.List$impl');
  AtomicInteger = goog.module.get('java.util.concurrent.atomic.AtomicInteger$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  Property = goog.module.get('org.pepstock.charba.client.annotation.AbstractAnnotation.Property$impl');
  AnnotationContext = goog.module.get('org.pepstock.charba.client.annotation.AnnotationContext$impl');
  AnnotationHelper = goog.module.get('org.pepstock.charba.client.annotation.AnnotationHelper$impl');
  AnnotationId = goog.module.get('org.pepstock.charba.client.annotation.AnnotationId$impl');
  AnnotationOptions_Property = goog.module.get('org.pepstock.charba.client.annotation.AnnotationOptions.Property$impl');
  AnnotationPlugin = goog.module.get('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
  AnnotationType = goog.module.get('org.pepstock.charba.client.annotation.AnnotationType$impl');
  LineAnnotation = goog.module.get('org.pepstock.charba.client.annotation.LineAnnotation$impl');
  AdjustScaleRangeCallback = goog.module.get('org.pepstock.charba.client.annotation.callbacks.AdjustScaleRangeCallback$impl');
  DrawTimeCallback = goog.module.get('org.pepstock.charba.client.annotation.callbacks.DrawTimeCallback$impl');
  DrawTime = goog.module.get('org.pepstock.charba.client.annotation.enums.DrawTime$impl');
  ClickCallback = goog.module.get('org.pepstock.charba.client.annotation.listeners.ClickCallback$impl');
  DoubleClickCallback = goog.module.get('org.pepstock.charba.client.annotation.listeners.DoubleClickCallback$impl');
  EnterCallback = goog.module.get('org.pepstock.charba.client.annotation.listeners.EnterCallback$impl');
  LeaveCallback = goog.module.get('org.pepstock.charba.client.annotation.listeners.LeaveCallback$impl');
  BorderDashCallback = goog.module.get('org.pepstock.charba.client.callbacks.BorderDashCallback$impl');
  BorderDashOffsetCallback = goog.module.get('org.pepstock.charba.client.callbacks.BorderDashOffsetCallback$impl');
  ColorCallback = goog.module.get('org.pepstock.charba.client.callbacks.ColorCallback$impl');
  DisplayCallback = goog.module.get('org.pepstock.charba.client.callbacks.DisplayCallback$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  WidthCallback = goog.module.get('org.pepstock.charba.client.callbacks.WidthCallback$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  ArrayInteger_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  CallbackPropertyHandler = goog.module.get('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Numbers = goog.module.get('vmbootstrap.Numbers$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@const {boolean}*/
AbstractAnnotation.f_DEFAULT_DISPLAY__org_pepstock_charba_client_annotation_AbstractAnnotation = true;
/**@const {boolean}*/
AbstractAnnotation.f_DEFAULT_ADJUST_SCALE_RANGE__org_pepstock_charba_client_annotation_AbstractAnnotation = true;
/**@type {AtomicInteger}*/
AbstractAnnotation.f_COUNTER__org_pepstock_charba_client_annotation_AbstractAnnotation_;
/**@const {?string}*/
AbstractAnnotation.f_INVALID_DEFAULTS_VALUES_CLASS__org_pepstock_charba_client_annotation_AbstractAnnotation = "Defaults options are not invalid because is not a {0} annotation defaults";
/**@type {CallbackPropertyHandler<DisplayCallback<AnnotationContext>>}*/
AbstractAnnotation.f_DISPLAY_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_;
/**@type {CallbackPropertyHandler<ColorCallback<AnnotationContext>>}*/
AbstractAnnotation.f_BORDER_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_;
/**@type {CallbackPropertyHandler<WidthCallback<AnnotationContext>>}*/
AbstractAnnotation.f_BORDER_WIDTH_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_;
/**@type {CallbackPropertyHandler<BorderDashCallback<AnnotationContext>>}*/
AbstractAnnotation.f_BORDER_DASH_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_;
/**@type {CallbackPropertyHandler<BorderDashOffsetCallback<AnnotationContext>>}*/
AbstractAnnotation.f_BORDER_DASH_OFFSET_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_;
/**@type {CallbackPropertyHandler<DrawTimeCallback>}*/
AbstractAnnotation.f_DRAW_TIME_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_;
/**@type {CallbackPropertyHandler<AdjustScaleRangeCallback>}*/
AbstractAnnotation.f_ADJUST_SCALE_RANGE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_;
/**@type {CallbackPropertyHandler<ClickCallback>}*/
AbstractAnnotation.f_CLICK_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_;
/**@type {CallbackPropertyHandler<EnterCallback>}*/
AbstractAnnotation.f_ENTER_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_;
/**@type {CallbackPropertyHandler<LeaveCallback>}*/
AbstractAnnotation.f_LEAVE_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_;
/**@type {CallbackPropertyHandler<DoubleClickCallback>}*/
AbstractAnnotation.f_DOUBLE_CLICK_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_AbstractAnnotation_;
IsDefaultsAnnotation.$markImplementor(AbstractAnnotation);
$Util.$setClassMetadata(AbstractAnnotation, "org.pepstock.charba.client.annotation.AbstractAnnotation");

exports = AbstractAnnotation;

//# sourceMappingURL=AbstractAnnotation.js.map
