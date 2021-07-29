goog.module('org.pepstock.charba.client.data.DataPointStyleHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let PointStyleCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PointStyleCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let ArrayEnumList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayEnumList$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.data.DataPointStyleHandler.Property$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsDefaultPoint = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPoint$impl');
let Canvas_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let Img_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Img.$Overlay$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let PointStyleType = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyleType$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class DataPointStyleHandler extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_pointStyleCallbackProxy__org_pepstock_charba_client_data_DataPointStyleHandler_;
  /**@type {PointStyleCallback}*/
  this.f_pointStyleCallback__org_pepstock_charba_client_data_DataPointStyleHandler_;
  /**@type {IsDefaultPoint}*/
  this.f_defaultValues__org_pepstock_charba_client_data_DataPointStyleHandler_;
 }
 /** @return {!DataPointStyleHandler} */
 static $create__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPoint(/** Dataset */ dataset, /** ? */ nativeObject, /** IsDefaultPoint */ defaultValues) {
  DataPointStyleHandler.$clinit();
  let $instance = new DataPointStyleHandler();
  $instance.$ctor__org_pepstock_charba_client_data_DataPointStyleHandler__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPoint(dataset, nativeObject, defaultValues);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_DataPointStyleHandler__org_pepstock_charba_client_data_Dataset__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPoint(/** Dataset */ dataset, /** ? */ nativeObject, /** IsDefaultPoint */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.$init___$p_org_pepstock_charba_client_data_DataPointStyleHandler();
  this.f_defaultValues__org_pepstock_charba_client_data_DataPointStyleHandler_ = /**@type {IsDefaultPoint}*/ ($Casts.$to(this.m_checkDefaultValuesArgument__java_lang_Object(defaultValues), IsDefaultPoint));
  this.f_pointStyleCallbackProxy__org_pepstock_charba_client_data_DataPointStyleHandler_.callback = (/** ? */ context) =>{
   return this.m_onPointStyle__org_pepstock_charba_client_callbacks_DatasetContext_$p_org_pepstock_charba_client_data_DataPointStyleHandler(dataset.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_data(context));
  };
 }
 /** @return {PointStyleType} */
 m_getPointStyleType___$pp_org_pepstock_charba_client_data() {
  return /**@type {PointStyleType}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_POINT_STYLE__org_pepstock_charba_client_data_DataPointStyleHandler_Property, PointStyleType.m_values__(), this.f_defaultValues__org_pepstock_charba_client_data_DataPointStyleHandler_.m_getPointStyleType__()), PointStyleType));
 }
 
 m_setPointStyle__arrayOf_org_pepstock_charba_client_enums_PointStyle_$pp_org_pepstock_charba_client_data(/** Array<PointStyle> */ pointStyle) {
  this.m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback_$pp_org_pepstock_charba_client_data(/**@type {PointStyleCallback}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key(Property.f_POINT_STYLE__org_pepstock_charba_client_data_DataPointStyleHandler_Property, pointStyle);
  this.m_managePointStyleType__org_pepstock_charba_client_enums_PointStyleType_$p_org_pepstock_charba_client_data_DataPointStyleHandler(PointStyleType.f_STRING__org_pepstock_charba_client_enums_PointStyleType);
 }
 /** @return {List<PointStyle>} */
 m_getPointStyle___$pp_org_pepstock_charba_client_data() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(PointStyleType.f_STRING__org_pepstock_charba_client_enums_PointStyleType, this.m_getPointStyleType___$pp_org_pepstock_charba_client_data()) && $Equality.$same(this.f_pointStyleCallback__org_pepstock_charba_client_data_DataPointStyleHandler_, null)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POINT_STYLE__org_pepstock_charba_client_data_DataPointStyleHandler_Property, this.f_defaultValues__org_pepstock_charba_client_data_DataPointStyleHandler_.m_getPointStyle__());
   return /**@type {ArrayEnumList<PointStyle>}*/ (ArrayListHelper.m_list__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayString(PointStyle.m_values__(), array));
  } else {
   return /**@type {ArrayEnumList<PointStyle>}*/ (ArrayListHelper.m_list__arrayOf_org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key(PointStyle.m_values__(), /**@type {!Array<PointStyle>}*/ ($Arrays.$create([0], PointStyle))));
  }
 }
 
 m_setPointStyle__arrayOf_org_pepstock_charba_client_dom_elements_Img_$pp_org_pepstock_charba_client_data(/** Array<HTMLImageElement> */ pointStyle) {
  this.m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback_$pp_org_pepstock_charba_client_data(/**@type {PointStyleCallback}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_dom_elements_Img(Property.f_POINT_STYLE__org_pepstock_charba_client_data_DataPointStyleHandler_Property, pointStyle);
  this.m_managePointStyleType__org_pepstock_charba_client_enums_PointStyleType_$p_org_pepstock_charba_client_data_DataPointStyleHandler(PointStyleType.f_IMAGE__org_pepstock_charba_client_enums_PointStyleType);
 }
 /** @return {List<HTMLImageElement>} */
 m_getPointStyleAsImages___$pp_org_pepstock_charba_client_data() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(PointStyleType.f_IMAGE__org_pepstock_charba_client_enums_PointStyleType, this.m_getPointStyleType___$pp_org_pepstock_charba_client_data()) && $Equality.$same(this.m_getPointStyleCallback___$pp_org_pepstock_charba_client_data(), null)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(Property.f_POINT_STYLE__org_pepstock_charba_client_data_DataPointStyleHandler_Property, this.f_defaultValues__org_pepstock_charba_client_data_DataPointStyleHandler_.m_getPointStyleAsImage__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayImage(array);
  } else {
   return /**@type {List<HTMLImageElement>}*/ (Collections.m_emptyList__());
  }
 }
 
 m_setPointStyle__arrayOf_org_pepstock_charba_client_dom_elements_Canvas_$pp_org_pepstock_charba_client_data(/** Array<HTMLCanvasElement> */ pointStyle) {
  this.m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback_$pp_org_pepstock_charba_client_data(/**@type {PointStyleCallback}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_dom_elements_Canvas(Property.f_POINT_STYLE__org_pepstock_charba_client_data_DataPointStyleHandler_Property, pointStyle);
  this.m_managePointStyleType__org_pepstock_charba_client_enums_PointStyleType_$p_org_pepstock_charba_client_data_DataPointStyleHandler(PointStyleType.f_CANVAS__org_pepstock_charba_client_enums_PointStyleType);
 }
 /** @return {List<HTMLCanvasElement>} */
 m_getPointStyleAsCanvas___$pp_org_pepstock_charba_client_data() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(PointStyleType.f_CANVAS__org_pepstock_charba_client_enums_PointStyleType, this.m_getPointStyleType___$pp_org_pepstock_charba_client_data()) && $Equality.$same(this.m_getPointStyleCallback___$pp_org_pepstock_charba_client_data(), null)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Canvas(Property.f_POINT_STYLE__org_pepstock_charba_client_data_DataPointStyleHandler_Property, this.f_defaultValues__org_pepstock_charba_client_data_DataPointStyleHandler_.m_getPointStyleAsCanvas__());
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayCanvas(array);
  } else {
   return /**@type {List<HTMLCanvasElement>}*/ (Collections.m_emptyList__());
  }
 }
 /** @return {PointStyleCallback} */
 m_getPointStyleCallback___$pp_org_pepstock_charba_client_data() {
  return this.f_pointStyleCallback__org_pepstock_charba_client_data_DataPointStyleHandler_;
 }
 
 m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback_$pp_org_pepstock_charba_client_data(/** PointStyleCallback */ pointStyleCallback) {
  this.f_pointStyleCallback__org_pepstock_charba_client_data_DataPointStyleHandler_ = pointStyleCallback;
  if (!$Equality.$same(pointStyleCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_POINT_STYLE__org_pepstock_charba_client_data_DataPointStyleHandler_Property, this.f_pointStyleCallbackProxy__org_pepstock_charba_client_data_DataPointStyleHandler_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_POINT_STYLE__org_pepstock_charba_client_data_DataPointStyleHandler_Property);
  }
  this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_POINT_STYLE__org_pepstock_charba_client_data_DataPointStyleHandler_Property);
 }
 
 m_setPointStyle__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_data(/** Function */ pointStyleCallback) {
  this.m_setPointStyle__org_pepstock_charba_client_callbacks_PointStyleCallback_$pp_org_pepstock_charba_client_data(/**@type {PointStyleCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_POINT_STYLE__org_pepstock_charba_client_data_DataPointStyleHandler_Property, pointStyleCallback);
 }
 
 m_managePointStyleType__org_pepstock_charba_client_enums_PointStyleType_$p_org_pepstock_charba_client_data_DataPointStyleHandler(/** PointStyleType */ type) {
  if (this.m_has__org_pepstock_charba_client_commons_Key(Property.f_POINT_STYLE__org_pepstock_charba_client_data_DataPointStyleHandler_Property)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_POINT_STYLE__org_pepstock_charba_client_data_DataPointStyleHandler_Property, type);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_POINT_STYLE__org_pepstock_charba_client_data_DataPointStyleHandler_Property);
  }
 }
 /** @return {*} */
 m_onPointStyle__org_pepstock_charba_client_callbacks_DatasetContext_$p_org_pepstock_charba_client_data_DataPointStyleHandler(/** DatasetContext */ context) {
  let result = ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, this.m_getPointStyleCallback___$pp_org_pepstock_charba_client_data());
  if (PointStyle.$isInstance(result)) {
   let style = /**@type {PointStyle}*/ ($Casts.$to(result, PointStyle));
   return style.m_value__();
  } else if (Img_$Overlay.$isInstance(result)) {
   return result;
  } else if (Canvas_$Overlay.$isInstance(result)) {
   return result;
  }
  return this.f_defaultValues__org_pepstock_charba_client_data_DataPointStyleHandler_.m_getPointStyle__().m_value__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_data_DataPointStyleHandler() {
  this.f_pointStyleCallbackProxy__org_pepstock_charba_client_data_DataPointStyleHandler_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_pointStyleCallback__org_pepstock_charba_client_data_DataPointStyleHandler_ = null;
 }
 
 static $clinit() {
  DataPointStyleHandler.$clinit = () =>{};
  DataPointStyleHandler.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataPointStyleHandler;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Property = goog.module.get('org.pepstock.charba.client.data.DataPointStyleHandler.Property$impl');
  IsDefaultPoint = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultPoint$impl');
  Canvas_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  Img_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Img.$Overlay$impl');
  PointStyle = goog.module.get('org.pepstock.charba.client.enums.PointStyle$impl');
  PointStyleType = goog.module.get('org.pepstock.charba.client.enums.PointStyleType$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(DataPointStyleHandler, "org.pepstock.charba.client.data.DataPointStyleHandler");

exports = DataPointStyleHandler;

//# sourceMappingURL=DataPointStyleHandler.js.map
