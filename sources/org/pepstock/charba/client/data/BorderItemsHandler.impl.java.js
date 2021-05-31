goog.module('org.pepstock.charba.client.data.BorderItemsHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let Scriptable = goog.forwardDeclare('org.pepstock.charba.client.callbacks.Scriptable$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let ArrayInteger_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayObject_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
let ArrayObjectContainerList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObjectContainerList$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let NativeObjectContainerFactory = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let AbstractBarBorderItem = goog.forwardDeclare('org.pepstock.charba.client.data.AbstractBarBorderItem$impl');
let BorderItemType = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderItemType$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class BorderItemsHandler extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BorderItemsHandler} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  BorderItemsHandler.$clinit();
  let $instance = new BorderItemsHandler();
  $instance.$ctor__org_pepstock_charba_client_data_BorderItemsHandler__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_BorderItemsHandler__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @template T @return {?} */
 m_onBorderItem__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_commons_NativeObjectContainerFactory__int_$pp_org_pepstock_charba_client_data(/** DatasetContext */ context, /** Scriptable<*, DatasetContext> */ borderItemCallback, /** NativeObjectContainerFactory<T> */ factory, /** number */ defaultValue) {
  let value = ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, borderItemCallback);
  if (AbstractBarBorderItem.$isInstance(value)) {
   let result = /**@type {AbstractBarBorderItem}*/ ($Casts.$to(value, AbstractBarBorderItem));
   return result.m_nativeObject___$pp_org_pepstock_charba_client_data();
  } else if (Integer.$isInstance(value)) {
   let intValue = /**@type {Integer}*/ ($Casts.$to(value, Integer));
   let result_1 = /**@type {T}*/ ($Casts.$to(factory.m_create__(), AbstractBarBorderItem));
   /**@type {AbstractBarBorderItem}*/ (result_1).m_set__int(intValue.m_intValue__());
   return /**@type {AbstractBarBorderItem}*/ (result_1).m_nativeObject___$pp_org_pepstock_charba_client_data();
  }
  let result_2 = /**@type {T}*/ ($Casts.$to(factory.m_create__(), AbstractBarBorderItem));
  /**@type {AbstractBarBorderItem}*/ (result_2).m_set__int(defaultValue);
  return /**@type {AbstractBarBorderItem}*/ (result_2).m_nativeObject___$pp_org_pepstock_charba_client_data();
 }
 
 m_setBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__arrayOf_int_$pp_org_pepstock_charba_client_data(/** Key */ property, /** Key */ propertyType, /** Array<number> */ array) {
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_int(property, array);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(propertyType, this.m_has__org_pepstock_charba_client_commons_Key(property) ? BorderItemType.f_INTEGERS__org_pepstock_charba_client_enums_BorderItemType : BorderItemType.f_UNKNOWN__org_pepstock_charba_client_enums_BorderItemType);
 }
 /** @template T */
 m_setBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_data_AbstractBarBorderItem_$pp_org_pepstock_charba_client_data(/** Key */ property, /** Key */ propertyType, /** Array<T> */ array) {
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(property, array);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(propertyType, this.m_has__org_pepstock_charba_client_commons_Key(property) ? BorderItemType.f_OBJECTS__org_pepstock_charba_client_enums_BorderItemType : BorderItemType.f_UNKNOWN__org_pepstock_charba_client_enums_BorderItemType);
 }
 /** @template T */
 m_setBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__java_util_List__arrayOf_org_pepstock_charba_client_data_AbstractBarBorderItem_$pp_org_pepstock_charba_client_data(/** Key */ property, /** Key */ propertyType, /** List<T> */ list, /** Array<T> */ array) {
  if (!$Equality.$same(list, null) && !list.isEmpty()) {
   this.m_setBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_data_AbstractBarBorderItem_$pp_org_pepstock_charba_client_data(property, propertyType, /**@type {Array<T>}*/ ($Arrays.$castTo(list.m_toArray__arrayOf_java_lang_Object(array), AbstractBarBorderItem, 1)));
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(property);
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(propertyType, BorderItemType.f_UNKNOWN__org_pepstock_charba_client_enums_BorderItemType);
  }
 }
 /** @return {List<Integer>} */
 m_getBorderItem__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__int_$pp_org_pepstock_charba_client_data(/** Key */ property, /** Key */ propertyType, /** number */ defaultValue) {
  let type = this.m_type__org_pepstock_charba_client_commons_Key(property);
  let borderWidthType = /**@type {BorderItemType}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(propertyType, BorderItemType.m_values__(), BorderItemType.f_UNKNOWN__org_pepstock_charba_client_enums_BorderItemType), BorderItemType));
  if (!$Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_FUNCTION__org_pepstock_charba_client_commons_ObjectType, type) && !$Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType, type) && $Objects.m_equals__java_lang_Object__java_lang_Object(BorderItemType.f_INTEGERS__org_pepstock_charba_client_enums_BorderItemType, borderWidthType)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__int(property, defaultValue);
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayInteger(array);
  }
  return /**@type {List<Integer>}*/ (Collections.m_emptyList__());
 }
 /** @template T @return {List<T>} */
 m_getBorderItemAsObjects__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainerFactory__int_$pp_org_pepstock_charba_client_data(/** Key */ property, /** Key */ propertyType, /** NativeObjectContainerFactory<T> */ factory, /** number */ defaultValue) {
  let type = this.m_type__org_pepstock_charba_client_commons_Key(property);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType, type)) {
   return /**@type {List<T>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<T>}*/ ($Arrays.$init([/**@type {T}*/ ($Casts.$to(factory.m_create__org_pepstock_charba_client_commons_NativeObject(this.m_getValue__org_pepstock_charba_client_commons_Key(property)), AbstractBarBorderItem))], AbstractBarBorderItem))));
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType, type)) {
   let borderItem = /**@type {T}*/ ($Casts.$to(factory.m_create__(), AbstractBarBorderItem));
   /**@type {AbstractBarBorderItem}*/ (borderItem).m_set__int(this.m_getValue__org_pepstock_charba_client_commons_Key__int(property, defaultValue));
   return /**@type {List<T>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<T>}*/ ($Arrays.$init([borderItem], AbstractBarBorderItem))));
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_ARRAY__org_pepstock_charba_client_commons_ObjectType, type)) {
   let borderItemType = /**@type {BorderItemType}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(propertyType, BorderItemType.m_values__(), BorderItemType.f_UNKNOWN__org_pepstock_charba_client_enums_BorderItemType), BorderItemType));
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(BorderItemType.f_OBJECTS__org_pepstock_charba_client_enums_BorderItemType, borderItemType)) {
    let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(property), ArrayObject_$Overlay));
    return /**@type {ArrayObjectContainerList<T>}*/ (ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, factory));
   } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(BorderItemType.f_INTEGERS__org_pepstock_charba_client_enums_BorderItemType, borderItemType)) {
    let array_1 = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(property), ArrayInteger_$Overlay));
    let result = /**@type {!LinkedList<T>}*/ (LinkedList.$create__());
    for (let i = 0; i < array_1.length; i = i + 1 | 0) {
     let borderItem_1 = /**@type {T}*/ ($Casts.$to(factory.m_create__(), AbstractBarBorderItem));
     /**@type {AbstractBarBorderItem}*/ (borderItem_1).m_set__int(ArrayInteger_$Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayInteger__int(array_1, i));
     result.add(borderItem_1);
    }
    return result;
   }
  }
  return /**@type {List<T>}*/ (Collections.m_emptyList__());
 }
 
 m_setBorderItemCallback__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy_$pp_org_pepstock_charba_client_data(/** Key */ property, /** * */ borderItemCallback, /** ?function():void */ proxy) {
  this.m_setBorderItemCallback__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy_$pp_org_pepstock_charba_client_data(property, null, borderItemCallback, proxy);
 }
 
 m_setBorderItemCallback__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_data(/** Key */ property, /** Function */ borderItemCallback) {
  this.m_setBorderItemCallback__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_data(property, null, borderItemCallback);
 }
 
 m_setBorderItemCallback__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy_$pp_org_pepstock_charba_client_data(/** Key */ property, /** Key */ propertyType, /** * */ borderItemCallback, /** ?function():void */ proxy) {
  if (!$Equality.$same(borderItemCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(property, proxy);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(property);
  }
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(propertyType)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(propertyType, BorderItemType.f_UNKNOWN__org_pepstock_charba_client_enums_BorderItemType);
  }
 }
 
 m_setBorderItemCallback__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_data(/** Key */ property, /** Key */ propertyType, /** Function */ borderItemCallback) {
  if (!$Equality.$same(borderItemCallback, null)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(property, borderItemCallback);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(property);
  }
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(propertyType)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(propertyType, BorderItemType.f_UNKNOWN__org_pepstock_charba_client_enums_BorderItemType);
  }
 }
 
 static $clinit() {
  BorderItemsHandler.$clinit = () =>{};
  BorderItemsHandler.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BorderItemsHandler;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  ArrayInteger_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayObject_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  AbstractBarBorderItem = goog.module.get('org.pepstock.charba.client.data.AbstractBarBorderItem$impl');
  BorderItemType = goog.module.get('org.pepstock.charba.client.enums.BorderItemType$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(BorderItemsHandler, "org.pepstock.charba.client.data.BorderItemsHandler");

exports = BorderItemsHandler;

//# sourceMappingURL=BorderItemsHandler.js.map
