goog.module('org.pepstock.charba.client.data.Labels$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Array_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.Array.$Overlay$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayMixedObject.$Overlay$impl');
let ArrayString_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class Labels extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Array}*/
  this.f_array__org_pepstock_charba_client_data_Labels_;
 }
 /** @return {!Labels} */
 static $create__org_pepstock_charba_client_commons_ArrayMixedObject(/** Array */ array) {
  let $instance = new Labels();
  $instance.$ctor__org_pepstock_charba_client_data_Labels__org_pepstock_charba_client_commons_ArrayMixedObject(array);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_data_Labels__org_pepstock_charba_client_commons_ArrayMixedObject(/** Array */ array) {
  this.$ctor__java_lang_Object__();
  this.f_array__org_pepstock_charba_client_data_Labels_ = !$Equality.$same(array, null) ? array : new Array();
 }
 /** @return {Array} */
 m_getArray___$pp_org_pepstock_charba_client_data() {
  return this.f_array__org_pepstock_charba_client_data_Labels_;
 }
 /** @return {Labels} */
 static m_build__() {
  Labels.$clinit();
  return Labels.$create__org_pepstock_charba_client_commons_ArrayMixedObject(new Array());
 }
 /** @return {Labels} */
 static m_load__org_pepstock_charba_client_commons_ArrayMixedObject(/** Array */ array) {
  Labels.$clinit();
  return Labels.$create__org_pepstock_charba_client_commons_ArrayMixedObject(array);
 }
 
 m_load__arrayOf_java_lang_String(/** Array<?string> */ values) {
  if (!$Equality.$same(values, null) && values.length > 0) {
   for (let $array = values, $index = 0; $index < $array.length; $index++) {
    let value = $array[$index];
    {
     if (!$Equality.$same(value, null)) {
      this.m_add__java_lang_String(value);
     }
    }
   }
  }
 }
 
 m_load__java_util_List(/** List<?string> */ values) {
  if (!$Equality.$same(values, null) && !values.isEmpty()) {
   for (let $iterator = values.m_iterator__(); $iterator.m_hasNext__(); ) {
    let value = /**@type {?string}*/ ($Casts.$to($iterator.m_next__(), j_l_String));
    {
     if (!$Equality.$same(value, null)) {
      this.m_add__java_lang_String(value);
     }
    }
   }
  }
 }
 
 m_add__java_lang_String(/** ?string */ value) {
  if (!$Equality.$same(value, null)) {
   if (j_l_String.m_contains__java_lang_String__java_lang_CharSequence(value, Constants.f_LINE_SEPARATOR__org_pepstock_charba_client_commons_Constants)) {
    this.f_array__org_pepstock_charba_client_data_Labels_.push(ArrayString_$Overlay.m_fromOrEmpty__arrayOf_java_lang_String(j_l_String.m_split__java_lang_String__java_lang_String(value, Constants.f_LINE_SEPARATOR__org_pepstock_charba_client_commons_Constants)));
   } else {
    this.f_array__org_pepstock_charba_client_data_Labels_.push(value);
   }
  }
 }
 
 m_add__arrayOf_java_lang_String(/** Array<?string> */ values) {
  if (!$Equality.$same(values, null) && values.length > 0) {
   this.f_array__org_pepstock_charba_client_data_Labels_.push(ArrayString_$Overlay.m_fromOrEmpty__arrayOf_java_lang_String(values));
  }
 }
 
 m_remove__int(/** number */ index) {
  this.m_checkRange__int_$p_org_pepstock_charba_client_data_Labels(index);
  $Overlay.m_remove__$devirt__org_pepstock_charba_client_commons_ArrayMixedObject__int(this.f_array__org_pepstock_charba_client_data_Labels_, index);
 }
 /** @return {number} */
 m_size__() {
  return this.f_array__org_pepstock_charba_client_data_Labels_.length;
 }
 /** @return {boolean} */
 m_isEmpty__() {
  return Array_$Overlay.m_isEmpty__$devirt__org_pepstock_charba_client_commons_Array(this.f_array__org_pepstock_charba_client_data_Labels_);
 }
 /** @return {number} */
 m_indexOf__arrayOf_java_lang_String(/** Array<?string> */ values) {
  if (!$Equality.$same(values, null) && values.length > 0 && !this.m_isEmpty__()) {
   let internalArray = ArrayString_$Overlay.m_fromOrEmpty__arrayOf_java_lang_String(values);
   let value = Array_$Overlay.m_join__$devirt__org_pepstock_charba_client_commons_Array__java_lang_String(internalArray, Constants.f_LINE_SEPARATOR__org_pepstock_charba_client_commons_Constants);
   for (let i = 0; i < this.m_size__(); i = i + 1 | 0) {
    let storedvalue = this.m_getString__int(i);
    if (j_l_String.m_equals__java_lang_String__java_lang_Object(value, storedvalue)) {
     return i;
    }
   }
  }
  return -1 | 0;
 }
 /** @return {?string} */
 m_getString__int(/** number */ index) {
  let type = this.m_getType__int(index);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_ARRAY__org_pepstock_charba_client_commons_ObjectType, type)) {
   let internalArray = /**@type {Array}*/ ($Casts.$to($Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayMixedObject__int(this.f_array__org_pepstock_charba_client_data_Labels_, index), ArrayString_$Overlay));
   return Array_$Overlay.m_join__$devirt__org_pepstock_charba_client_commons_Array__java_lang_String(internalArray, Constants.f_LINE_SEPARATOR__org_pepstock_charba_client_commons_Constants);
  }
  return /**@type {?string}*/ ($Casts.$to($Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayMixedObject__int(this.f_array__org_pepstock_charba_client_data_Labels_, index), j_l_String));
 }
 /** @return {List<?string>} */
 m_getStrings__int(/** number */ index) {
  let type = this.m_getType__int(index);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_ARRAY__org_pepstock_charba_client_commons_ObjectType, type)) {
   let internalArray = /**@type {Array}*/ ($Casts.$to($Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayMixedObject__int(this.f_array__org_pepstock_charba_client_data_Labels_, index), ArrayString_$Overlay));
   return ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayString(internalArray);
  }
  return /**@type {List<?string>}*/ (Collections.m_unmodifiableList__java_util_List(/**@type {List<?string>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<?string>}*/ ($Arrays.$init([/**@type {?string}*/ ($Casts.$to($Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayMixedObject__int(this.f_array__org_pepstock_charba_client_data_Labels_, index), j_l_String))], j_l_String))))));
 }
 /** @return {ObjectType} */
 m_getType__int(/** number */ index) {
  this.m_checkRange__int_$p_org_pepstock_charba_client_data_Labels(index);
  return Array.isArray($Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayMixedObject__int(this.f_array__org_pepstock_charba_client_data_Labels_, index)) ? ObjectType.f_ARRAY__org_pepstock_charba_client_commons_ObjectType : ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType;
 }
 
 m_checkRange__int_$p_org_pepstock_charba_client_data_Labels(/** number */ index) {
  if (index < 0 || index >= this.f_array__org_pepstock_charba_client_data_Labels_.length) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__java_lang_String("Index " + index + " is out of bouds [0, " + this.f_array__org_pepstock_charba_client_data_Labels_.length + "]"));
  }
 }
 
 static $clinit() {
  Labels.$clinit = () =>{};
  Labels.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Labels;
 }
 
 static $loadModules() {
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Array_$Overlay = goog.module.get('org.pepstock.charba.client.commons.Array.$Overlay$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayMixedObject.$Overlay$impl');
  ArrayString_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(Labels, "org.pepstock.charba.client.data.Labels");

exports = Labels;

//# sourceMappingURL=Labels.js.map
