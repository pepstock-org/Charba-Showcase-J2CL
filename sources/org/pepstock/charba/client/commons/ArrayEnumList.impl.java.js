goog.module('org.pepstock.charba.client.commons.ArrayEnumList$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractArrayContainerList = goog.require('org.pepstock.charba.client.commons.AbstractArrayContainerList$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AbstractArrayList = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractArrayList$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template E
 * @extends {AbstractArrayContainerList<E, Array>}
 */
class ArrayEnumList extends AbstractArrayContainerList {
 /** @protected */
 constructor() {
  super();
  /**@type {Array}*/
  this.f_array__org_pepstock_charba_client_commons_ArrayEnumList_;
  /**@type {Array<E>}*/
  this.f_definedValues__org_pepstock_charba_client_commons_ArrayEnumList_;
 }
 //Factory method corresponding to constructor 'ArrayEnumList(Key[], ArrayString)'.
 /** @template E @return {!ArrayEnumList<E>} */
 static $create__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayString(/** Array<E> */ values, /** Array */ array) {
  ArrayEnumList.$clinit();
  let $instance = new ArrayEnumList();
  $instance.$ctor__org_pepstock_charba_client_commons_ArrayEnumList__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayString(values, array);
  return $instance;
 }
 //Initialization from constructor 'ArrayEnumList(Key[], ArrayString)'.
 
 $ctor__org_pepstock_charba_client_commons_ArrayEnumList__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayString(/** Array<E> */ values, /** Array */ array) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractArrayContainerList__();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(values, "Values argument");
  Checker.m_checkIfNotEqualTo__int__int__java_lang_String(values.length, 0, "Values argument size");
  this.f_definedValues__org_pepstock_charba_client_commons_ArrayEnumList_ = values;
  if ($Equality.$same(array, null)) {
   this.f_array__org_pepstock_charba_client_commons_ArrayEnumList_ = new Array();
  } else {
   this.f_array__org_pepstock_charba_client_commons_ArrayEnumList_ = array;
  }
 }
 //Factory method corresponding to constructor 'ArrayEnumList(Key[])'.
 /** @template E @return {!ArrayEnumList<E>} */
 static $create__arrayOf_org_pepstock_charba_client_commons_Key(/** Array<E> */ values) {
  ArrayEnumList.$clinit();
  let $instance = new ArrayEnumList();
  $instance.$ctor__org_pepstock_charba_client_commons_ArrayEnumList__arrayOf_org_pepstock_charba_client_commons_Key(values);
  return $instance;
 }
 //Initialization from constructor 'ArrayEnumList(Key[])'.
 
 $ctor__org_pepstock_charba_client_commons_ArrayEnumList__arrayOf_org_pepstock_charba_client_commons_Key(/** Array<E> */ values) {
  this.$ctor__org_pepstock_charba_client_commons_ArrayEnumList__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayString(values, null);
 }
 /** @override @return {Array} */
 m_getArray___$pp_org_pepstock_charba_client_commons() {
  return this.f_array__org_pepstock_charba_client_commons_ArrayEnumList_;
 }
 
 m_addAll__arrayOf_org_pepstock_charba_client_commons_Key(/** Array<E> */ values) {
  if (!$Equality.$same(values, null) && values.length > 0) {
   for (let $array = values, $index = 0; $index < $array.length; $index++) {
    let val = $array[$index];
    {
     this.add(val);
    }
   }
  }
 }
 /** @override @return {boolean} */
 add(/** E */ element) {
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(element)) {
   this.f_array__org_pepstock_charba_client_commons_ArrayEnumList_.push(/**@type {Key}*/ (element).m_value__());
   return true;
  }
  return false;
 }
 /** @override */
 clear() {
  $Overlay.m_clear__$devirt__org_pepstock_charba_client_commons_ArrayString(this.f_array__org_pepstock_charba_client_commons_ArrayEnumList_);
 }
 /** @override @return {E} */
 getAtIndex(/** number */ index) {
  if (this.m_checkRange__int(index)) {
   let value = $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayString__int(this.f_array__org_pepstock_charba_client_commons_ArrayEnumList_, index);
   return Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(this.f_definedValues__org_pepstock_charba_client_commons_ArrayEnumList_, value);
  }
  return null;
 }
 /** @override @return {E} */
 setAtIndex(/** number */ index, /** E */ element) {
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(element) && this.m_checkRange__int(index)) {
   let old = $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayString__int(this.f_array__org_pepstock_charba_client_commons_ArrayEnumList_, index);
   let oldValue = Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(this.f_definedValues__org_pepstock_charba_client_commons_ArrayEnumList_, old);
   $Overlay.m_set__$devirt__org_pepstock_charba_client_commons_ArrayString__int__java_lang_String(this.f_array__org_pepstock_charba_client_commons_ArrayEnumList_, index, /**@type {Key}*/ (element).m_value__());
   return oldValue;
  }
  return null;
 }
 /** @override */
 addAtIndex(/** number */ index, /** E */ element) {
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(element)) {
   $Overlay.m_insertAt__$devirt__org_pepstock_charba_client_commons_ArrayString__int__java_lang_String(this.f_array__org_pepstock_charba_client_commons_ArrayEnumList_, index, /**@type {Key}*/ (element).m_value__());
  }
 }
 /** @override @return {E} */
 removeAtIndex(/** number */ index) {
  if (this.m_checkRange__int(index)) {
   let value = $Overlay.m_remove__$devirt__org_pepstock_charba_client_commons_ArrayString__int(this.f_array__org_pepstock_charba_client_commons_ArrayEnumList_, index);
   return Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(this.f_definedValues__org_pepstock_charba_client_commons_ArrayEnumList_, value);
  }
  return null;
 }
 /** @override @return {number} */
 indexOf(/** * */ object) {
  if (Key.$isInstance(object)) {
   let value = /**@type {Key}*/ ($Casts.$to(object, Key));
   if (Key.m_isValid__org_pepstock_charba_client_commons_Key(value)) {
    return this.f_array__org_pepstock_charba_client_commons_ArrayEnumList_.indexOf(value.m_value__());
   }
  }
  return AbstractArrayList.f_NOT_FOUND__org_pepstock_charba_client_commons_AbstractArrayList;
 }
 /** @override @return {number} */
 lastIndexOf(/** * */ object) {
  if (Key.$isInstance(object)) {
   let value = /**@type {Key}*/ ($Casts.$to(object, Key));
   if (Key.m_isValid__org_pepstock_charba_client_commons_Key(value)) {
    return this.f_array__org_pepstock_charba_client_commons_ArrayEnumList_.lastIndexOf(value.m_value__());
   }
  }
  return AbstractArrayList.f_NOT_FOUND__org_pepstock_charba_client_commons_AbstractArrayList;
 }
 /** @override @return {Array<*>} */
 toArray() {
  let toArray = new Array(this.f_array__org_pepstock_charba_client_commons_ArrayEnumList_.length);
  for (let i = 0; i < this.f_array__org_pepstock_charba_client_commons_ArrayEnumList_.length; i = i + 1 | 0) {
   $Arrays.$set(toArray, i, Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(this.f_definedValues__org_pepstock_charba_client_commons_ArrayEnumList_, $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayString__int(this.f_array__org_pepstock_charba_client_commons_ArrayEnumList_, i)));
  }
  return toArray;
 }
 
 static $clinit() {
  ArrayEnumList.$clinit = () =>{};
  ArrayEnumList.$loadModules();
  AbstractArrayContainerList.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ArrayEnumList;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AbstractArrayList = goog.module.get('org.pepstock.charba.client.commons.AbstractArrayList$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ArrayEnumList, "org.pepstock.charba.client.commons.ArrayEnumList");

exports = ArrayEnumList;

//# sourceMappingURL=ArrayEnumList.js.map
