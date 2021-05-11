goog.module('org.pepstock.charba.client.data.BorderAlignHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let BorderAlignCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderAlignCallback$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let ArrayEnumList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayEnumList$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayString_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.data.BorderAlignHandler.Property$impl');
let DataEnvelop = goog.forwardDeclare('org.pepstock.charba.client.data.DataEnvelop$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
let BorderAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderAlign$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class BorderAlignHandler extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/
  this.f_borderAlignCallbackProxy__org_pepstock_charba_client_data_BorderAlignHandler_;
  /**@type {BorderAlignCallback}*/
  this.f_borderAlignCallback__org_pepstock_charba_client_data_BorderAlignHandler_;
  /**@type {IsDefaultOptions}*/
  this.f_defaultValues__org_pepstock_charba_client_data_BorderAlignHandler_;
 }
 /** @return {!BorderAlignHandler} */
 static $create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultOptions(/** ? */ nativeObject, /** IsDefaultOptions */ defaultValues) {
  BorderAlignHandler.$clinit();
  let $instance = new BorderAlignHandler();
  $instance.$ctor__org_pepstock_charba_client_data_BorderAlignHandler__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultOptions(nativeObject, defaultValues);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_BorderAlignHandler__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultOptions(/** ? */ nativeObject, /** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.$init___$p_org_pepstock_charba_client_data_BorderAlignHandler();
  this.f_defaultValues__org_pepstock_charba_client_data_BorderAlignHandler_ = defaultValues;
  this.f_borderAlignCallbackProxy__org_pepstock_charba_client_data_BorderAlignHandler_.callback = (/** Object */ contextFunction, /** ? */ context) =>{
   return /**@type {BorderAlign}*/ ($Casts.$to(ScriptableUtils.m_getOptionValueAsString__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_commons_Key(DatasetContext.$create__org_pepstock_charba_client_data_DataEnvelop(/**@type {!DataEnvelop<?>}*/ (DataEnvelop.$create__java_lang_Object(context))), this.m_getBorderAlignCallback___$pp_org_pepstock_charba_client_data(), defaultValues.m_getElements__().m_getArc__().m_getBorderAlign__()), BorderAlign)).m_value__();
  };
 }
 
 m_setBorderAlign__arrayOf_org_pepstock_charba_client_enums_BorderAlign_$pp_org_pepstock_charba_client_data(/** Array<BorderAlign> */ align) {
  this.m_setBorderAlign__org_pepstock_charba_client_callbacks_BorderAlignCallback_$pp_org_pepstock_charba_client_data(/**@type {BorderAlignCallback}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key(Property.f_BORDER_ALIGN__org_pepstock_charba_client_data_BorderAlignHandler_Property, align);
 }
 
 m_setBorderAlign__java_util_List_$pp_org_pepstock_charba_client_data(/** List<BorderAlign> */ align) {
  if (!$Equality.$same(align, null) && !align.isEmpty()) {
   this.m_setBorderAlign__arrayOf_org_pepstock_charba_client_enums_BorderAlign_$pp_org_pepstock_charba_client_data(/**@type {Array<BorderAlign>}*/ ($Arrays.$castTo(align.m_toArray__arrayOf_java_lang_Object(/**@type {!Array<BorderAlign>}*/ ($Arrays.$create([0], BorderAlign))), BorderAlign, 1)));
  } else {
   this.m_setBorderAlign__org_pepstock_charba_client_callbacks_BorderAlignCallback_$pp_org_pepstock_charba_client_data(/**@type {BorderAlignCallback}*/ (null));
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_BORDER_ALIGN__org_pepstock_charba_client_data_BorderAlignHandler_Property);
  }
 }
 /** @return {List<BorderAlign>} */
 m_getBorderAlign___$pp_org_pepstock_charba_client_data() {
  let defaultAlign = this.f_defaultValues__org_pepstock_charba_client_data_BorderAlignHandler_.m_getElements__().m_getArc__().m_getBorderAlign__();
  let type = this.m_type__org_pepstock_charba_client_commons_Key(Property.f_BORDER_ALIGN__org_pepstock_charba_client_data_BorderAlignHandler_Property);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType, type)) {
   return /**@type {List<BorderAlign>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<BorderAlign>}*/ ($Arrays.$init([/**@type {BorderAlign}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(BorderAlign.m_values__(), this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BORDER_ALIGN__org_pepstock_charba_client_data_BorderAlignHandler_Property, defaultAlign.m_value__())), BorderAlign))], BorderAlign))));
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_ARRAY__org_pepstock_charba_client_commons_ObjectType, type)) {
   let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_BORDER_ALIGN__org_pepstock_charba_client_data_BorderAlignHandler_Property), ArrayString_$Overlay));
   return /**@type {ArrayEnumList<BorderAlign>}*/ (ArrayListHelper.m_list__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayString(BorderAlign.m_values__(), array));
  }
  return /**@type {List<BorderAlign>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<BorderAlign>}*/ ($Arrays.$init([defaultAlign], BorderAlign))));
 }
 /** @return {BorderAlignCallback} */
 m_getBorderAlignCallback___$pp_org_pepstock_charba_client_data() {
  return this.f_borderAlignCallback__org_pepstock_charba_client_data_BorderAlignHandler_;
 }
 
 m_setBorderAlign__org_pepstock_charba_client_callbacks_BorderAlignCallback_$pp_org_pepstock_charba_client_data(/** BorderAlignCallback */ borderAlignCallback) {
  this.f_borderAlignCallback__org_pepstock_charba_client_data_BorderAlignHandler_ = borderAlignCallback;
  if (!$Equality.$same(borderAlignCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(Property.f_BORDER_ALIGN__org_pepstock_charba_client_data_BorderAlignHandler_Property, this.f_borderAlignCallbackProxy__org_pepstock_charba_client_data_BorderAlignHandler_.proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_BORDER_ALIGN__org_pepstock_charba_client_data_BorderAlignHandler_Property);
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_data_BorderAlignHandler() {
  this.f_borderAlignCallbackProxy__org_pepstock_charba_client_data_BorderAlignHandler_ = /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderAlignCallback__org_pepstock_charba_client_data_BorderAlignHandler_ = null;
 }
 
 static $clinit() {
  BorderAlignHandler.$clinit = () =>{};
  BorderAlignHandler.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BorderAlignHandler;
 }
 
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DatasetContext = goog.module.get('org.pepstock.charba.client.callbacks.DatasetContext$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayString_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  Property = goog.module.get('org.pepstock.charba.client.data.BorderAlignHandler.Property$impl');
  DataEnvelop = goog.module.get('org.pepstock.charba.client.data.DataEnvelop$impl');
  BorderAlign = goog.module.get('org.pepstock.charba.client.enums.BorderAlign$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(BorderAlignHandler, "org.pepstock.charba.client.data.BorderAlignHandler");

exports = BorderAlignHandler;

//# sourceMappingURL=BorderAlignHandler.js.map
