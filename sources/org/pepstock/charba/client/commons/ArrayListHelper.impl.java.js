goog.module('org.pepstock.charba.client.commons.ArrayListHelper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ArrayDoubleArrayList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayDoubleArrayList$impl');
let ArrayDoubleList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayDoubleList$impl');
let ArrayEnumList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayEnumList$impl');
let ArrayImageList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayImageList$impl');
let ArrayIntegerList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayIntegerList$impl');
let ArrayObjectContainerList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObjectContainerList$impl');
let ArrayObjectList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObjectList$impl');
let ArrayString_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let ArrayStringList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayStringList$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let NativeArrayContainer = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeArrayContainer$impl');
let NativeArrayContainerFactory = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeArrayContainerFactory$impl');
let NativeObjectContainer = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
let NativeObjectContainerFactory = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

class ArrayListHelper extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ArrayListHelper} */
 static $create__() {
  let $instance = new ArrayListHelper();
  $instance.$ctor__org_pepstock_charba_client_commons_ArrayListHelper__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_commons_ArrayListHelper__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {ArrayDoubleList} */
 static m_list__org_pepstock_charba_client_commons_ArrayDouble(/** Array */ values) {
  ArrayListHelper.$clinit();
  return ArrayDoubleList.$create__org_pepstock_charba_client_commons_ArrayDouble(values);
 }
 /** @return {ArrayIntegerList} */
 static m_list__org_pepstock_charba_client_commons_ArrayInteger(/** Array */ values) {
  ArrayListHelper.$clinit();
  return ArrayIntegerList.$create__org_pepstock_charba_client_commons_ArrayInteger(values);
 }
 /** @return {ArrayStringList} */
 static m_list__org_pepstock_charba_client_commons_ArrayString(/** Array */ values) {
  ArrayListHelper.$clinit();
  return ArrayStringList.$create__org_pepstock_charba_client_commons_ArrayString(values);
 }
 /** @return {ArrayImageList} */
 static m_list__org_pepstock_charba_client_commons_ArrayImage(/** Array */ values) {
  ArrayListHelper.$clinit();
  return ArrayImageList.$create__org_pepstock_charba_client_commons_ArrayImage(values);
 }
 /** @return {ArrayStringList} */
 static m_list__arrayOf_org_pepstock_charba_client_colors_IsColor(/** Array<IsColor> */ values) {
  ArrayListHelper.$clinit();
  return ArrayStringList.$create__org_pepstock_charba_client_commons_ArrayString(ArrayString_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_colors_IsColor(values));
 }
 /** @template E @return {ArrayEnumList<E>} */
 static m_list__arrayOf_org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key(/** Array<E> */ enumValues, /** Array<E> */ values) {
  ArrayListHelper.$clinit();
  let result = /**@type {!ArrayEnumList<E>}*/ (ArrayEnumList.$create__arrayOf_org_pepstock_charba_client_commons_Key(enumValues));
  if (!$Equality.$same(values, null)) {
   result.m_addAll__arrayOf_org_pepstock_charba_client_commons_Key(values);
  }
  return result;
 }
 /** @template E @return {ArrayEnumList<E>} */
 static m_list__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayString(/** Array<E> */ enumValues, /** Array */ array) {
  ArrayListHelper.$clinit();
  return /**@type {!ArrayEnumList<E>}*/ (ArrayEnumList.$create__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayString(enumValues, array));
 }
 /** @return {ArrayObjectList} */
 static m_list__org_pepstock_charba_client_commons_ArrayObject(/** Array */ values) {
  ArrayListHelper.$clinit();
  return ArrayObjectList.$create__org_pepstock_charba_client_commons_ArrayObject(values);
 }
 /** @template E @return {ArrayObjectContainerList<E>} */
 static m_list__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(/** Array */ array, /** NativeObjectContainerFactory<E> */ factory) {
  ArrayListHelper.$clinit();
  return /**@type {!ArrayObjectContainerList<E>}*/ (ArrayObjectContainerList.$create__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, factory));
 }
 /** @template E @return {ArrayDoubleArrayList<E>} */
 static m_list__org_pepstock_charba_client_commons_ArrayDoubleArray__org_pepstock_charba_client_commons_NativeArrayContainerFactory(/** Array */ array, /** NativeArrayContainerFactory<Array, E> */ factory) {
  ArrayListHelper.$clinit();
  return /**@type {!ArrayDoubleArrayList<E>}*/ (ArrayDoubleArrayList.$create__org_pepstock_charba_client_commons_ArrayDoubleArray__org_pepstock_charba_client_commons_NativeArrayContainerFactory(array, factory));
 }
 /** @return {List<?number>} */
 static m_unmodifiableList__org_pepstock_charba_client_commons_ArrayDouble(/** Array */ values) {
  ArrayListHelper.$clinit();
  return /**@type {List<?number>}*/ (Collections.m_unmodifiableList__java_util_List(ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayDouble(values)));
 }
 /** @return {List<Integer>} */
 static m_unmodifiableList__org_pepstock_charba_client_commons_ArrayInteger(/** Array */ values) {
  ArrayListHelper.$clinit();
  return /**@type {List<Integer>}*/ (Collections.m_unmodifiableList__java_util_List(ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayInteger(values)));
 }
 /** @return {List<?string>} */
 static m_unmodifiableList__org_pepstock_charba_client_commons_ArrayString(/** Array */ values) {
  ArrayListHelper.$clinit();
  return /**@type {List<?string>}*/ (Collections.m_unmodifiableList__java_util_List(ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayString(values)));
 }
 /** @return {List<HTMLImageElement>} */
 static m_unmodifiableList__org_pepstock_charba_client_commons_ArrayImage(/** Array */ values) {
  ArrayListHelper.$clinit();
  return /**@type {List<HTMLImageElement>}*/ (Collections.m_unmodifiableList__java_util_List(ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayImage(values)));
 }
 /** @template E @return {List<E>} */
 static m_unmodifiableList__arrayOf_org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key(/** Array<E> */ enumValues, /** Array<E> */ values) {
  ArrayListHelper.$clinit();
  return /**@type {List<E>}*/ (Collections.m_unmodifiableList__java_util_List(/**@type {ArrayEnumList<E>}*/ (ArrayListHelper.m_list__arrayOf_org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key(enumValues, values))));
 }
 /** @template E @return {List<E>} */
 static m_unmodifiableList__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayString(/** Array<E> */ enumValues, /** Array */ array) {
  ArrayListHelper.$clinit();
  return /**@type {List<E>}*/ (Collections.m_unmodifiableList__java_util_List(/**@type {ArrayEnumList<E>}*/ (ArrayListHelper.m_list__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayString(enumValues, array))));
 }
 /** @return {List<?>} */
 static m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject(/** Array */ values) {
  ArrayListHelper.$clinit();
  return /**@type {List<?>}*/ (Collections.m_unmodifiableList__java_util_List(ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayObject(values)));
 }
 /** @template E @return {List<E>} */
 static m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(/** Array */ array, /** NativeObjectContainerFactory<E> */ factory) {
  ArrayListHelper.$clinit();
  return /**@type {List<E>}*/ (Collections.m_unmodifiableList__java_util_List(/**@type {ArrayObjectContainerList<E>}*/ (ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, factory))));
 }
 /** @template E @return {List<E>} */
 static m_unmodifiableList__org_pepstock_charba_client_commons_ArrayDoubleArray__org_pepstock_charba_client_commons_NativeArrayContainerFactory(/** Array */ array, /** NativeArrayContainerFactory<Array, E> */ factory) {
  ArrayListHelper.$clinit();
  return /**@type {List<E>}*/ (Collections.m_unmodifiableList__java_util_List(/**@type {ArrayDoubleArrayList<E>}*/ (ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayDoubleArray__org_pepstock_charba_client_commons_NativeArrayContainerFactory(array, factory))));
 }
 
 static $clinit() {
  ArrayListHelper.$clinit = () =>{};
  ArrayListHelper.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ArrayListHelper;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ArrayDoubleArrayList = goog.module.get('org.pepstock.charba.client.commons.ArrayDoubleArrayList$impl');
  ArrayDoubleList = goog.module.get('org.pepstock.charba.client.commons.ArrayDoubleList$impl');
  ArrayEnumList = goog.module.get('org.pepstock.charba.client.commons.ArrayEnumList$impl');
  ArrayImageList = goog.module.get('org.pepstock.charba.client.commons.ArrayImageList$impl');
  ArrayIntegerList = goog.module.get('org.pepstock.charba.client.commons.ArrayIntegerList$impl');
  ArrayObjectContainerList = goog.module.get('org.pepstock.charba.client.commons.ArrayObjectContainerList$impl');
  ArrayObjectList = goog.module.get('org.pepstock.charba.client.commons.ArrayObjectList$impl');
  ArrayString_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  ArrayStringList = goog.module.get('org.pepstock.charba.client.commons.ArrayStringList$impl');
 }
}
$Util.$setClassMetadata(ArrayListHelper, "org.pepstock.charba.client.commons.ArrayListHelper");

exports = ArrayListHelper;

//# sourceMappingURL=ArrayListHelper.js.map
