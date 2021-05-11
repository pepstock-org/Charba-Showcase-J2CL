goog.module('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ArrayObjectContainerList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObjectContainerList$impl');
let NativeObjectContainer = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @template E @return {Array} */
 static m_fromOrNull__org_pepstock_charba_client_commons_NativeObjectContainer(/** E */ item) {
  $Overlay.$clinit();
  if ($Equality.$same(item, null)) {
   return null;
  }
  return Array.of(/**@type {NativeObjectContainer}*/ (item).m_getNativeObject__());
 }
 /** @template E @return {Array} */
 static m_fromOrEmpty__org_pepstock_charba_client_commons_NativeObjectContainer(/** E */ item) {
  $Overlay.$clinit();
  let result = new Array();
  if ($Equality.$same(item, null)) {
   return result;
  }
  result.push(/**@type {NativeObjectContainer}*/ (item).m_getNativeObject__());
  return result;
 }
 /** @template E @return {Array} */
 static m_fromOrNull__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(/** Array<E> */ items) {
  $Overlay.$clinit();
  if ($Equality.$same(items, null) || items.length == 0) {
   return null;
  }
  let result = new Array();
  for (let $array = items, $index = 0; $index < $array.length; $index++) {
   let value = $array[$index];
   {
    result.push(/**@type {NativeObjectContainer}*/ (value).m_getNativeObject__());
   }
  }
  return result;
 }
 /** @template E @return {Array} */
 static m_fromOrEmpty__arrayOf_org_pepstock_charba_client_commons_NativeObjectContainer(/** Array<E> */ items) {
  $Overlay.$clinit();
  let result = new Array();
  if ($Equality.$same(items, null) || items.length == 0) {
   return result;
  }
  for (let $array = items, $index = 0; $index < $array.length; $index++) {
   let value = $array[$index];
   {
    result.push(/**@type {NativeObjectContainer}*/ (value).m_getNativeObject__());
   }
  }
  return result;
 }
 /** @template E @return {Array} */
 static m_fromOrNull__java_util_List(/** List<E> */ items) {
  $Overlay.$clinit();
  if ($Equality.$same(items, null) || items.isEmpty()) {
   return null;
  }
  if (ArrayObjectContainerList.$isInstance(items)) {
   let list = /**@type {ArrayObjectContainerList<NativeObjectContainer>}*/ ($Casts.$to(items, ArrayObjectContainerList));
   return list.m_getArray___$pp_org_pepstock_charba_client_commons();
  }
  let result = new Array();
  for (let $iterator = items.m_iterator__(); $iterator.m_hasNext__(); ) {
   let value = /**@type {E}*/ ($Casts.$to($iterator.m_next__(), NativeObjectContainer));
   {
    result.push(/**@type {NativeObjectContainer}*/ (value).m_getNativeObject__());
   }
  }
  return result;
 }
 /** @template E @return {Array} */
 static m_fromOrEmpty__java_util_List(/** List<E> */ items) {
  $Overlay.$clinit();
  if (ArrayObjectContainerList.$isInstance(items)) {
   let list = /**@type {ArrayObjectContainerList<NativeObjectContainer>}*/ ($Casts.$to(items, ArrayObjectContainerList));
   return list.m_getArray___$pp_org_pepstock_charba_client_commons();
  }
  let result = new Array();
  if ($Equality.$same(items, null) || items.isEmpty()) {
   return result;
  }
  for (let $iterator = items.m_iterator__(); $iterator.m_hasNext__(); ) {
   let value = /**@type {E}*/ ($Casts.$to($iterator.m_next__(), NativeObjectContainer));
   {
    result.push(/**@type {NativeObjectContainer}*/ (value).m_getNativeObject__());
   }
  }
  return result;
 }
 
 static m_clear__$devirt__org_pepstock_charba_client_commons_ArrayObject(/** !Array */ $thisArg) {
  $Overlay.$clinit();
  $thisArg.splice(0, $thisArg.length);
 }
 /** @return {?} */
 static m_remove__$devirt__org_pepstock_charba_client_commons_ArrayObject__int(/** !Array */ $thisArg, /** number */ index) {
  $Overlay.$clinit();
  return $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayObject__int($thisArg.splice(index, 1), 0);
 }
 
 static m_insertAt__$devirt__org_pepstock_charba_client_commons_ArrayObject__int__org_pepstock_charba_client_commons_NativeObject(/** !Array */ $thisArg, /** number */ index, /** ? */ item) {
  $Overlay.$clinit();
  $thisArg.splice(index, 0, item);
 }
 /** @return {?} */
 static m_get__$devirt__org_pepstock_charba_client_commons_ArrayObject__int(/** !Array */ $thisArg, /** number */ index) {
  $Overlay.$clinit();
  return $thisArg.slice(index, index + 1 | 0).pop();
 }
 
 static m_set__$devirt__org_pepstock_charba_client_commons_ArrayObject__int__org_pepstock_charba_client_commons_NativeObject(/** !Array */ $thisArg, /** number */ index, /** ? */ item) {
  $Overlay.$clinit();
  $thisArg.fill(item, index, index + 1 | 0);
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Array;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ArrayObjectContainerList = goog.module.get('org.pepstock.charba.client.commons.ArrayObjectContainerList$impl');
  NativeObjectContainer = goog.module.get('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($Overlay, "Array");

exports = $Overlay;

//# sourceMappingURL=ArrayObject$$Overlay.js.map
