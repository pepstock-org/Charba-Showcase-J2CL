goog.module('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Array_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.Array.$Overlay$impl');
let ArrayCanvas_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayCanvas.$Overlay$impl');
let ArrayDouble_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
let ArrayDoubleArrayList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayDoubleArrayList$impl');
let ArrayGradient_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayGradient.$Overlay$impl');
let ArrayImage_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayImage.$Overlay$impl');
let ArrayInteger_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
let ArrayObject_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
let ArrayObjectContainerList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObjectContainerList$impl');
let ArrayPattern_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayPattern.$Overlay$impl');
let ArrayString_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let ImmutableDate = goog.forwardDeclare('org.pepstock.charba.client.commons.ImmutableDate$impl');
let IncrementalIdHandler = goog.forwardDeclare('org.pepstock.charba.client.commons.IncrementalIdHandler$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let NativeArrayContainer = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeArrayContainer$impl');
let NativeObjectUtils = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectUtils$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');
let JSON_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.utils.JSON.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

/**
 * @abstract
 */
class NativeObjectContainer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?}*/
  this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_;
 }
 //Initialization from constructor 'NativeObjectContainer()'.
 
 $ctor__org_pepstock_charba_client_commons_NativeObjectContainer__() {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(NativeObjectUtils.m_create__());
 }
 //Initialization from constructor 'NativeObjectContainer(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__java_lang_Object__();
  this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_ = $Equality.$same(nativeObject, null) ? NativeObjectUtils.m_create__() : nativeObject;
 }
 /** @template T @return {T} */
 m_checkDefaultValuesArgument__java_lang_Object(/** T */ defaultValues) {
  return Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(defaultValues, "Default values argument");
 }
 /** @return {?} */
 m_getNativeObject__() {
  return this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_;
 }
 /** @return {ChartEnvelop<?>} */
 m_loadNativeObject__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<?> */ envelop) {
  Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop);
  envelop.m_setContent__java_lang_Object(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_);
  return envelop;
 }
 /** @return {?string} */
 m_toJSON__() {
  return JSON_$Overlay.m_stringifyWithReplacer__java_lang_Object__int(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, 3);
 }
 /** @return {boolean} */
 m_empty__() {
  let keys = Object.keys(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_);
  if (!$Equality.$same(keys, null)) {
   return Array_$Overlay.m_isEmpty__$devirt__org_pepstock_charba_client_commons_Array(keys);
  }
  return true;
 }
 /** @return {boolean} */
 m_has__org_pepstock_charba_client_commons_Key(/** Key */ key) {
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(key)) {
   return NativeObjectUtils.m_hasProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__());
  }
  return false;
 }
 /** @return {boolean} */
 m_has__arrayOf_org_pepstock_charba_client_commons_Key(/** Array<Key> */ keys) {
  if (!$Equality.$same(keys, null) && keys.length > 0) {
   for (let $array = keys, $index = 0; $index < $array.length; $index++) {
    let key = $array[$index];
    {
     if (!this.m_has__org_pepstock_charba_client_commons_Key(key)) {
      return false;
     }
    }
   }
   return true;
  }
  return false;
 }
 /** @return {List<Key>} */
 m_keys__() {
  let keys = /**@type {!ArrayList<Key>}*/ (ArrayList.$create__());
  for (let $iterator = NativeObjectUtils.m_propertiesKeys__org_pepstock_charba_client_commons_NativeObject(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_).m_iterator__(); $iterator.m_hasNext__(); ) {
   let key = /**@type {?string}*/ ($Casts.$to($iterator.m_next__(), j_l_String));
   {
    keys.add(Key.m_create__java_lang_String(key));
   }
  }
  return keys;
 }
 /** @return {ObjectType} */
 m_type__org_pepstock_charba_client_commons_Key(/** Key */ key) {
  return Key.m_isValid__org_pepstock_charba_client_commons_Key(key) ? JsHelper.m_get__().m_typeOf__java_lang_Object__java_lang_String(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__()) : ObjectType.f_UNDEFINED__org_pepstock_charba_client_commons_ObjectType;
 }
 /** @return {boolean} */
 m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(/** Key */ key, /** ObjectType */ type) {
  if (!$Equality.$same(type, null)) {
   return $Objects.m_equals__java_lang_Object__java_lang_Object(type, this.m_type__org_pepstock_charba_client_commons_Key(key));
  }
  return false;
 }
 
 m_remove__org_pepstock_charba_client_commons_Key(/** Key */ key) {
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(key)) {
   NativeObjectUtils.m_removeProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__());
  }
 }
 
 m_remove__arrayOf_org_pepstock_charba_client_commons_Key(/** Array<Key> */ keys) {
  if (!$Equality.$same(keys, null) && keys.length > 0) {
   for (let $array = keys, $index = 0; $index < $array.length; $index++) {
    let key = $array[$index];
    {
     this.m_remove__org_pepstock_charba_client_commons_Key(key);
    }
   }
  }
 }
 
 m_setValue__org_pepstock_charba_client_commons_Key__int(/** Key */ key, /** number */ value) {
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(key);
  NativeObjectUtils.m_defineIntProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__int(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), value);
 }
 /** @return {number} */
 m_getValue__org_pepstock_charba_client_commons_Key__int(/** Key */ key, /** number */ defaultValue) {
  if (!this.m_has__org_pepstock_charba_client_commons_Key(key)) {
   return defaultValue;
  }
  return NativeObjectUtils.m_getIntProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__int(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), defaultValue);
 }
 
 m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_int(/** Key */ key, /** Array<number> */ values) {
  if (!$Equality.$same(values, null)) {
   if (values.length == 1) {
    this.m_setValue__org_pepstock_charba_client_commons_Key__int(key, values[0]);
   } else {
    this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(key, ArrayInteger_$Overlay.m_fromOrEmpty__arrayOf_int(values));
   }
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  }
 }
 /** @return {Array} */
 m_getValueOrArray__org_pepstock_charba_client_commons_Key__int(/** Key */ key, /** number */ defaultValue) {
  let type = this.m_type__org_pepstock_charba_client_commons_Key(key);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType, type)) {
   return ArrayInteger_$Overlay.m_fromOrEmpty__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([this.m_getValue__org_pepstock_charba_client_commons_Key__int(key, defaultValue)], $int)));
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_ARRAY__org_pepstock_charba_client_commons_ObjectType, type)) {
   return /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(key), ArrayInteger_$Overlay));
  }
  return ArrayInteger_$Overlay.m_fromOrEmpty__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([defaultValue], $int)));
 }
 
 m_setValue__org_pepstock_charba_client_commons_Key__double(/** Key */ key, /** number */ value) {
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(key);
  NativeObjectUtils.m_defineDoubleProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__double(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), value);
 }
 /** @return {number} */
 m_getValue__org_pepstock_charba_client_commons_Key__double(/** Key */ key, /** number */ defaultValue) {
  if (!this.m_has__org_pepstock_charba_client_commons_Key(key)) {
   return defaultValue;
  }
  return NativeObjectUtils.m_getDoubleProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__double(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), defaultValue);
 }
 
 m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_double(/** Key */ key, /** Array<number> */ values) {
  if (!$Equality.$same(values, null)) {
   if (values.length == 1) {
    this.m_setValue__org_pepstock_charba_client_commons_Key__double(key, values[0]);
   } else {
    this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(key, ArrayDouble_$Overlay.m_fromOrEmpty__arrayOf_double(values));
   }
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  }
 }
 /** @return {Array} */
 m_getValueOrArray__org_pepstock_charba_client_commons_Key__double(/** Key */ key, /** number */ defaultValue) {
  let type = this.m_type__org_pepstock_charba_client_commons_Key(key);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType, type)) {
   return ArrayDouble_$Overlay.m_fromOrEmpty__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([this.m_getValue__org_pepstock_charba_client_commons_Key__double(key, defaultValue)], $double)));
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_ARRAY__org_pepstock_charba_client_commons_ObjectType, type)) {
   return /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(key), ArrayDouble_$Overlay));
  }
  return ArrayDouble_$Overlay.m_fromOrEmpty__arrayOf_double(/**@type {!Array<number>}*/ ($Arrays.$init([defaultValue], $double)));
 }
 
 m_setValue__org_pepstock_charba_client_commons_Key__boolean(/** Key */ key, /** boolean */ value) {
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(key);
  NativeObjectUtils.m_defineBooleanProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__boolean(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), value);
 }
 /** @return {boolean} */
 m_getValue__org_pepstock_charba_client_commons_Key__boolean(/** Key */ key, /** boolean */ defaultValue) {
  if (!this.m_has__org_pepstock_charba_client_commons_Key(key)) {
   return defaultValue;
  }
  return NativeObjectUtils.m_getBooleanProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__boolean(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), defaultValue);
 }
 /** @return {?string} */
 m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(/** Key */ key, /** ?string */ defaultValue) {
  if (!this.m_has__org_pepstock_charba_client_commons_Key(key)) {
   return defaultValue;
  }
  return NativeObjectUtils.m_getStringProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__java_lang_String(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), defaultValue);
 }
 
 m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(/** Key */ key, /** ?string */ value) {
  if ($Equality.$same(value, null)) {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  } else {
   Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(key);
   NativeObjectUtils.m_defineStringProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__java_lang_String(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), value);
  }
 }
 
 m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String(/** Key */ key, /** Array<?string> */ values) {
  if (!$Equality.$same(values, null)) {
   if (values.length == 1) {
    this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(key, values[0]);
   } else {
    this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(key, ArrayString_$Overlay.m_fromOrEmpty__arrayOf_java_lang_String(values));
   }
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  }
 }
 /** @return {Array} */
 m_getValueOrArray__org_pepstock_charba_client_commons_Key__java_lang_String(/** Key */ key, /** ?string */ defaultValue) {
  let type = this.m_type__org_pepstock_charba_client_commons_Key(key);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType, type)) {
   return ArrayString_$Overlay.m_fromOrEmpty__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(key, defaultValue)], j_l_String)));
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_ARRAY__org_pepstock_charba_client_commons_ObjectType, type)) {
   return /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(key), ArrayString_$Overlay));
  }
  return ArrayString_$Overlay.m_fromOrEmpty__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init([defaultValue], j_l_String)));
 }
 /** @return {Date} */
 m_getValue__org_pepstock_charba_client_commons_Key__java_util_Date(/** Key */ key, /** Date */ defaultValue) {
  let type = this.m_type__org_pepstock_charba_client_commons_Key(key);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType, type)) {
   let value = NativeObjectUtils.m_getDoubleProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__double(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
   if (Checker.m_isGreaterThan__double__double(value, 1)) {
    return ImmutableDate.$create__long($Primitives.$narrowDoubleToLong(value));
   }
  }
  return defaultValue;
 }
 
 m_setValue__org_pepstock_charba_client_commons_Key__java_util_Date(/** Key */ key, /** Date */ value) {
  if ($Equality.$same(value, null)) {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  } else {
   this.m_setValue__org_pepstock_charba_client_commons_Key__double(key, $Primitives.$widenLongToDouble(value.m_getTime__()));
  }
 }
 /** @return {?} */
 m_getValue__org_pepstock_charba_client_commons_Key(/** Key */ key) {
  if (!this.m_has__org_pepstock_charba_client_commons_Key(key)) {
   return null;
  }
  return NativeObjectUtils.m_getObjectProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__());
 }
 
 m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(/** Key */ key, /** ? */ value) {
  if ($Equality.$same(value, null)) {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  } else {
   Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(key);
   NativeObjectUtils.m_defineObjectProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_commons_NativeObject(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), value);
  }
 }
 
 m_setEmptyValue__org_pepstock_charba_client_commons_Key(/** Key */ key) {
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(key);
  NativeObjectUtils.m_defineObjectProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_commons_NativeObject(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), NativeObjectUtils.m_create__());
 }
 
 m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(/** Key */ key, /** NativeObjectContainer */ value) {
  if ($Equality.$same(value, null)) {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  } else {
   Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(key);
   NativeObjectUtils.m_defineObjectProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_commons_NativeObject(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), value.m_getNativeObject__());
  }
 }
 
 m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(/** Key */ key, /** Array<NativeObjectContainer> */ values) {
  if (!$Equality.$same(values, null)) {
   if (values.length == 1) {
    this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(key, values[0]);
   } else {
    this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(key, ArrayObject_$Overlay.m_fromOrEmpty__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(values));
   }
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  }
 }
 
 m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayObjectContainerList(/** Key */ key, /** ArrayObjectContainerList<?> */ container) {
  if ($Equality.$same(container, null)) {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  } else {
   Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(key);
   NativeObjectUtils.m_defineArrayProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_commons_Array(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), container.m_getArray___$pp_org_pepstock_charba_client_commons());
  }
 }
 
 m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeArrayContainer(/** Key */ key, /** NativeArrayContainer<?> */ value) {
  if ($Equality.$same(value, null)) {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  } else {
   Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(key);
   NativeObjectUtils.m_defineArrayProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_commons_Array(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), value.m_getNativeArray__());
  }
 }
 
 m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayDoubleArrayList(/** Key */ key, /** ArrayDoubleArrayList<?> */ container) {
  if ($Equality.$same(container, null)) {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  } else {
   Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(key);
   NativeObjectUtils.m_defineArrayProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_commons_Array(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), container.m_getArray___$pp_org_pepstock_charba_client_commons());
  }
 }
 
 m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(/** Key */ key, /** ?function():void */ value) {
  if ($Equality.$same(value, null)) {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  } else {
   Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(key);
   NativeObjectUtils.m_defineCallbackProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), value);
  }
 }
 
 m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(/** Key */ key, /** Function */ value) {
  if ($Equality.$same(value, null)) {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  } else {
   Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(key);
   NativeObjectUtils.m_defineCallbackProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_callbacks_NativeCallback(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), value);
  }
 }
 /** @return {HTMLCanvasElement} */
 m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Canvas(/** Key */ key, /** HTMLCanvasElement */ defaultValue) {
  if (!this.m_has__org_pepstock_charba_client_commons_Key(key)) {
   return defaultValue;
  }
  return NativeObjectUtils.m_getCanvasProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_dom_elements_Canvas(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), defaultValue);
 }
 
 m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Canvas(/** Key */ key, /** HTMLCanvasElement */ value) {
  if ($Equality.$same(value, null)) {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  } else {
   Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(key);
   NativeObjectUtils.m_defineCanvasProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_dom_elements_Canvas(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), value);
  }
 }
 
 m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_dom_elements_Canvas(/** Key */ key, /** Array<HTMLCanvasElement> */ values) {
  if (!$Equality.$same(values, null)) {
   if (values.length == 1) {
    this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Canvas(key, values[0]);
   } else {
    this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(key, ArrayCanvas_$Overlay.m_fromOrEmpty__arrayOf_org_pepstock_charba_client_dom_elements_Canvas(values));
   }
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  }
 }
 /** @return {Array} */
 m_getValueOrArray__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Canvas(/** Key */ key, /** HTMLCanvasElement */ defaultValue) {
  let type = this.m_type__org_pepstock_charba_client_commons_Key(key);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType, type)) {
   return ArrayCanvas_$Overlay.m_fromOrEmpty__arrayOf_org_pepstock_charba_client_dom_elements_Canvas([this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Canvas(key, defaultValue)]);
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_ARRAY__org_pepstock_charba_client_commons_ObjectType, type)) {
   return /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(key), ArrayCanvas_$Overlay));
  }
  return ArrayCanvas_$Overlay.m_fromOrEmpty__arrayOf_org_pepstock_charba_client_dom_elements_Canvas([defaultValue]);
 }
 /** @return {HTMLImageElement} */
 m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(/** Key */ key, /** HTMLImageElement */ defaultValue) {
  if (!this.m_has__org_pepstock_charba_client_commons_Key(key)) {
   return defaultValue;
  }
  return NativeObjectUtils.m_getImageProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_dom_elements_Img(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), defaultValue);
 }
 
 m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(/** Key */ key, /** HTMLImageElement */ value) {
  if ($Equality.$same(value, null)) {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  } else {
   Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(key);
   NativeObjectUtils.m_defineImageProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_dom_elements_Img(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), value);
  }
 }
 
 m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_dom_elements_Img(/** Key */ key, /** Array<HTMLImageElement> */ values) {
  if (!$Equality.$same(values, null)) {
   if (values.length == 1) {
    this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(key, values[0]);
   } else {
    this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(key, ArrayImage_$Overlay.m_fromOrEmpty__arrayOf_org_pepstock_charba_client_dom_elements_Img(values));
   }
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  }
 }
 /** @return {Array} */
 m_getValueOrArray__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(/** Key */ key, /** HTMLImageElement */ defaultValue) {
  let type = this.m_type__org_pepstock_charba_client_commons_Key(key);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType, type)) {
   return ArrayImage_$Overlay.m_fromOrEmpty__arrayOf_org_pepstock_charba_client_dom_elements_Img([this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(key, defaultValue)]);
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_ARRAY__org_pepstock_charba_client_commons_ObjectType, type)) {
   return /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(key), ArrayImage_$Overlay));
  }
  return ArrayImage_$Overlay.m_fromOrEmpty__arrayOf_org_pepstock_charba_client_dom_elements_Img([defaultValue]);
 }
 /** @return {CanvasGradient} */
 m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasGradientItem(/** Key */ key, /** CanvasGradient */ defaultValue) {
  if (!this.m_has__org_pepstock_charba_client_commons_Key(key)) {
   return defaultValue;
  }
  return NativeObjectUtils.m_getGradientProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_dom_elements_CanvasGradientItem(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), defaultValue);
 }
 
 m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasGradientItem(/** Key */ key, /** CanvasGradient */ value) {
  if ($Equality.$same(value, null)) {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  } else {
   Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(key);
   NativeObjectUtils.m_defineGradientProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_dom_elements_CanvasGradientItem(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), value);
  }
 }
 
 m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_dom_elements_CanvasGradientItem(/** Key */ key, /** Array<CanvasGradient> */ values) {
  if (!$Equality.$same(values, null)) {
   if (values.length == 1) {
    this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasGradientItem(key, values[0]);
   } else {
    this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(key, ArrayGradient_$Overlay.m_fromOrEmpty__arrayOf_org_pepstock_charba_client_dom_elements_CanvasGradientItem(values));
   }
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  }
 }
 /** @return {Array} */
 m_getValueOrArray__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasGradientItem(/** Key */ key, /** CanvasGradient */ defaultValue) {
  let type = this.m_type__org_pepstock_charba_client_commons_Key(key);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType, type)) {
   return ArrayGradient_$Overlay.m_fromOrEmpty__arrayOf_org_pepstock_charba_client_dom_elements_CanvasGradientItem([this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasGradientItem(key, defaultValue)]);
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_ARRAY__org_pepstock_charba_client_commons_ObjectType, type)) {
   return /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(key), ArrayGradient_$Overlay));
  }
  return ArrayGradient_$Overlay.m_fromOrEmpty__arrayOf_org_pepstock_charba_client_dom_elements_CanvasGradientItem([defaultValue]);
 }
 /** @return {CanvasPattern} */
 m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasPatternItem(/** Key */ key, /** CanvasPattern */ defaultValue) {
  if (!this.m_has__org_pepstock_charba_client_commons_Key(key)) {
   return defaultValue;
  }
  return NativeObjectUtils.m_getPatternProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_dom_elements_CanvasPatternItem(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), defaultValue);
 }
 
 m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasPatternItem(/** Key */ key, /** CanvasPattern */ value) {
  if ($Equality.$same(value, null)) {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  } else {
   Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(key);
   NativeObjectUtils.m_definePatternProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_dom_elements_CanvasPatternItem(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), value);
  }
 }
 
 m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_dom_elements_CanvasPatternItem(/** Key */ key, /** Array<CanvasPattern> */ values) {
  if (!$Equality.$same(values, null)) {
   if (values.length == 1) {
    this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasPatternItem(key, values[0]);
   } else {
    this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(key, ArrayPattern_$Overlay.m_fromOrEmpty__arrayOf_org_pepstock_charba_client_dom_elements_CanvasPatternItem(values));
   }
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  }
 }
 /** @return {Array} */
 m_getValueOrArray__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasPatternItem(/** Key */ key, /** CanvasPattern */ defaultValue) {
  let type = this.m_type__org_pepstock_charba_client_commons_Key(key);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType, type)) {
   return ArrayPattern_$Overlay.m_fromOrEmpty__arrayOf_org_pepstock_charba_client_dom_elements_CanvasPatternItem([this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasPatternItem(key, defaultValue)]);
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_ARRAY__org_pepstock_charba_client_commons_ObjectType, type)) {
   return /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(key), ArrayPattern_$Overlay));
  }
  return ArrayPattern_$Overlay.m_fromOrEmpty__arrayOf_org_pepstock_charba_client_dom_elements_CanvasPatternItem([defaultValue]);
 }
 /** @return {?string} */
 m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(/** Key */ key, /** Key */ defaultValue) {
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(defaultValue);
  if (!this.m_has__org_pepstock_charba_client_commons_Key(key)) {
   return defaultValue.m_value__();
  }
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(key, defaultValue.m_value__());
 }
 /** @template T */
 m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(/** Key */ key, /** T */ value) {
  if ($Equality.$same(value, null)) {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  } else {
   Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(key);
   Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(value);
   NativeObjectUtils.m_defineStringProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__java_lang_String(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), /**@type {Key}*/ (value).m_value__());
  }
 }
 /** @return {ScaleId} */
 m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_options_ScaleId(/** Key */ key, /** ScaleId */ defaultValue) {
  if (!this.m_has__org_pepstock_charba_client_commons_Key(key)) {
   return defaultValue;
  }
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(defaultValue);
  return ScaleId.m_checkAndGetScaleID__java_lang_String__org_pepstock_charba_client_options_ScaleId(this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(key, defaultValue.m_value__()), defaultValue);
 }
 /** @template T @return {T} */
 m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(/** Key */ key, /** Array<T> */ enumValues, /** T */ defaultValue) {
  if (!this.m_has__org_pepstock_charba_client_commons_Key(key)) {
   return defaultValue;
  }
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(defaultValue)) {
   let value = this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(key, /**@type {Key}*/ (defaultValue).m_value__());
   return Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String__org_pepstock_charba_client_commons_Key(enumValues, value, defaultValue);
  } else {
   return Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(enumValues, this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(key, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined));
  }
 }
 
 m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key(/** Key */ key, /** Array<Key> */ values) {
  if (!$Equality.$same(values, null)) {
   if (values.length == 1) {
    this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(key, values[0]);
   } else {
    this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(key, ArrayString_$Overlay.m_fromOrEmpty__arrayOf_org_pepstock_charba_client_commons_Key(values));
   }
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  }
 }
 /** @return {Array} */
 m_getValueOrArray__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(/** Key */ key, /** Key */ defaultValue) {
  return this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__java_lang_String(key, Key.m_isValid__org_pepstock_charba_client_commons_Key(defaultValue) ? defaultValue.m_value__() : null);
 }
 /** @template T @return {T} */
 m_getArrayValue__org_pepstock_charba_client_commons_Key(/** Key */ key) {
  if (!this.m_has__org_pepstock_charba_client_commons_Key(key)) {
   return null;
  }
  return NativeObjectUtils.m_getArrayProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__());
 }
 /** @template T */
 m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(/** Key */ key, /** T */ value) {
  if ($Equality.$same(value, null)) {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  } else {
   Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(key);
   NativeObjectUtils.m_defineArrayProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_commons_Array(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), value);
  }
 }
 
 m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_colors_IsColor(/** Key */ key, /** Array<IsColor> */ values) {
  if (!$Equality.$same(values, null)) {
   if (values.length == 1) {
    IsColor.m_checkIfValid__org_pepstock_charba_client_colors_IsColor(values[0]);
    this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(key, values[0].m_toRGBA__());
   } else {
    this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(key, ArrayString_$Overlay.m_fromOrEmpty__arrayOf_org_pepstock_charba_client_colors_IsColor(values));
   }
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  }
 }
 
 m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_Chart(/** Key */ key, /** Chart */ value) {
  if ($Equality.$same(value, null)) {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  } else {
   Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(key);
   NativeObjectUtils.m_defineChartProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_Chart(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), value);
  }
 }
 /** @return {Chart} */
 m_getNativeChart__org_pepstock_charba_client_commons_Key(/** Key */ key) {
  if (!this.m_has__org_pepstock_charba_client_commons_Key(key)) {
   return null;
  }
  return NativeObjectUtils.m_getChartProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__());
 }
 
 m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_BaseNativeEvent(/** Key */ key, /** Object */ value) {
  if ($Equality.$same(value, null)) {
   this.m_remove__org_pepstock_charba_client_commons_Key(key);
  } else {
   Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(key);
   NativeObjectUtils.m_defineEventProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String__org_pepstock_charba_client_dom_BaseNativeEvent(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__(), value);
  }
 }
 /** @return {Object} */
 m_getNativeEvent__org_pepstock_charba_client_commons_Key(/** Key */ key) {
  if (!this.m_has__org_pepstock_charba_client_commons_Key(key)) {
   return null;
  }
  return NativeObjectUtils.m_getEventProperty__org_pepstock_charba_client_commons_NativeObject__java_lang_String(this.f_nativeObject__org_pepstock_charba_client_commons_NativeObjectContainer_, key.m_value__());
 }
 /** @return {?string} */
 m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_lang_String(/** Key */ key, /** ?string */ defaultsValue) {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(key, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(key, defaultsValue);
  }
  return defaultsValue;
 }
 /** @return {number} */
 m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__double(/** Key */ key, /** number */ defaultsValue) {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(key, ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__double(key, defaultsValue);
  }
  return defaultsValue;
 }
 /** @return {Date} */
 m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_util_Date(/** Key */ key, /** Date */ defaultsValue) {
  let value = this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__double(key, Double.f_NaN__java_lang_Double);
  if (Checker.m_isGreaterThan__double__double(value, 1)) {
   return ImmutableDate.$create__long($Primitives.$narrowDoubleToLong(value));
  }
  return defaultsValue;
 }
 
 m_setNewIncrementalId__() {
  this.m_setNewIncrementalId__java_lang_String(null);
 }
 
 m_setNewIncrementalId__java_lang_String(/** ?string */ prefix) {
  IncrementalIdHandler.m_get__().m_checkAndSetId__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String_$pp_org_pepstock_charba_client_commons(this, prefix);
 }
 /** @return {?string} */
 m_getIncrementalId__() {
  return IncrementalIdHandler.m_get__().m_getId__org_pepstock_charba_client_commons_NativeObjectContainer_$pp_org_pepstock_charba_client_commons(this);
 }
 
 static $clinit() {
  NativeObjectContainer.$clinit = () =>{};
  NativeObjectContainer.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NativeObjectContainer;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Array_$Overlay = goog.module.get('org.pepstock.charba.client.commons.Array.$Overlay$impl');
  ArrayCanvas_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayCanvas.$Overlay$impl');
  ArrayDouble_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayDouble.$Overlay$impl');
  ArrayGradient_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayGradient.$Overlay$impl');
  ArrayImage_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayImage.$Overlay$impl');
  ArrayInteger_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
  ArrayObject_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
  ArrayPattern_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayPattern.$Overlay$impl');
  ArrayString_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  ImmutableDate = goog.module.get('org.pepstock.charba.client.commons.ImmutableDate$impl');
  IncrementalIdHandler = goog.module.get('org.pepstock.charba.client.commons.IncrementalIdHandler$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  NativeObjectUtils = goog.module.get('org.pepstock.charba.client.commons.NativeObjectUtils$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  ScaleId = goog.module.get('org.pepstock.charba.client.options.ScaleId$impl');
  JSON_$Overlay = goog.module.get('org.pepstock.charba.client.utils.JSON.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $double = goog.module.get('vmbootstrap.primitives.$double$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
$Util.$setClassMetadata(NativeObjectContainer, "org.pepstock.charba.client.commons.NativeObjectContainer");

exports = NativeObjectContainer;

//# sourceMappingURL=NativeObjectContainer.js.map
