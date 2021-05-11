goog.module('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ArrayStringList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayStringList$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {Array} */
 static m_fromOrNull__arrayOf_java_lang_String(/** Array<?string> */ items) {
  $Overlay.$clinit();
  if ($Equality.$same(items, null) || items.length == 0) {
   return null;
  }
  return Array.of(...InternalPreconditions.m_checkNotNull__java_lang_Object(items));
 }
 /** @return {Array} */
 static m_fromOrEmpty__arrayOf_java_lang_String(/** Array<?string> */ items) {
  $Overlay.$clinit();
  if ($Equality.$same(items, null) || items.length == 0) {
   return new Array();
  }
  return Array.of(...InternalPreconditions.m_checkNotNull__java_lang_Object(items));
 }
 /** @return {Array} */
 static m_fromOrNull__java_util_List(/** List<?string> */ items) {
  $Overlay.$clinit();
  if ($Equality.$same(items, null) || items.isEmpty()) {
   return null;
  }
  if (ArrayStringList.$isInstance(items)) {
   let list = /**@type {ArrayStringList}*/ ($Casts.$to(items, ArrayStringList));
   return list.m_getArray___$pp_org_pepstock_charba_client_commons();
  }
  let result = new Array();
  for (let $iterator = items.m_iterator__(); $iterator.m_hasNext__(); ) {
   let value = /**@type {?string}*/ ($Casts.$to($iterator.m_next__(), j_l_String));
   {
    result.push(value);
   }
  }
  return result;
 }
 /** @return {Array} */
 static m_fromOrEmpty__java_util_List(/** List<?string> */ items) {
  $Overlay.$clinit();
  if (ArrayStringList.$isInstance(items)) {
   let list = /**@type {ArrayStringList}*/ ($Casts.$to(items, ArrayStringList));
   return list.m_getArray___$pp_org_pepstock_charba_client_commons();
  }
  let result = new Array();
  if ($Equality.$same(items, null) || items.isEmpty()) {
   return result;
  }
  for (let $iterator = items.m_iterator__(); $iterator.m_hasNext__(); ) {
   let value = /**@type {?string}*/ ($Casts.$to($iterator.m_next__(), j_l_String));
   {
    result.push(value);
   }
  }
  return result;
 }
 /** @return {Array} */
 static m_fromOrNull__arrayOf_org_pepstock_charba_client_colors_IsColor(/** Array<IsColor> */ items) {
  $Overlay.$clinit();
  if ($Equality.$same(items, null) || items.length == 0) {
   return null;
  }
  let result = new Array();
  for (let $array = items, $index = 0; $index < $array.length; $index++) {
   let color = $array[$index];
   {
    IsColor.m_checkIfValid__org_pepstock_charba_client_colors_IsColor(color);
    result.push(color.m_toRGBA__());
   }
  }
  return result;
 }
 /** @return {Array} */
 static m_fromOrEmpty__arrayOf_org_pepstock_charba_client_colors_IsColor(/** Array<IsColor> */ items) {
  $Overlay.$clinit();
  let result = new Array();
  if ($Equality.$same(items, null) || items.length == 0) {
   return result;
  }
  for (let $array = items, $index = 0; $index < $array.length; $index++) {
   let color = $array[$index];
   {
    IsColor.m_checkIfValid__org_pepstock_charba_client_colors_IsColor(color);
    result.push(color.m_toRGBA__());
   }
  }
  return result;
 }
 /** @return {Array} */
 static m_fromOrNull__arrayOf_org_pepstock_charba_client_commons_Key(/** Array<Key> */ items) {
  $Overlay.$clinit();
  if ($Equality.$same(items, null) || items.length == 0) {
   return null;
  }
  let result = new Array();
  for (let $array = items, $index = 0; $index < $array.length; $index++) {
   let key = $array[$index];
   {
    if (Key.m_isValid__org_pepstock_charba_client_commons_Key(key)) {
     result.push(key.m_value__());
    }
   }
  }
  return result;
 }
 /** @return {Array} */
 static m_fromOrEmpty__arrayOf_org_pepstock_charba_client_commons_Key(/** Array<Key> */ items) {
  $Overlay.$clinit();
  let result = new Array();
  if ($Equality.$same(items, null) || items.length == 0) {
   return result;
  }
  for (let $array = items, $index = 0; $index < $array.length; $index++) {
   let key = $array[$index];
   {
    if (Key.m_isValid__org_pepstock_charba_client_commons_Key(key)) {
     result.push(key.m_value__());
    }
   }
  }
  return result;
 }
 
 static m_clear__$devirt__org_pepstock_charba_client_commons_ArrayString(/** !Array */ $thisArg) {
  $Overlay.$clinit();
  $thisArg.splice(0, $thisArg.length);
 }
 /** @return {?string} */
 static m_remove__$devirt__org_pepstock_charba_client_commons_ArrayString__int(/** !Array */ $thisArg, /** number */ index) {
  $Overlay.$clinit();
  return $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayString__int($thisArg.splice(index, 1), 0);
 }
 
 static m_insertAt__$devirt__org_pepstock_charba_client_commons_ArrayString__int__java_lang_String(/** !Array */ $thisArg, /** number */ index, /** ?string */ item) {
  $Overlay.$clinit();
  $thisArg.splice(index, 0, item);
 }
 /** @return {?string} */
 static m_get__$devirt__org_pepstock_charba_client_commons_ArrayString__int(/** !Array */ $thisArg, /** number */ index) {
  $Overlay.$clinit();
  return $thisArg.slice(index, index + 1 | 0).pop();
 }
 
 static m_set__$devirt__org_pepstock_charba_client_commons_ArrayString__int__java_lang_String(/** !Array */ $thisArg, /** number */ index, /** ?string */ item) {
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
  j_l_String = goog.module.get('java.lang.String$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  ArrayStringList = goog.module.get('org.pepstock.charba.client.commons.ArrayStringList$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($Overlay, "Array");

exports = $Overlay;

//# sourceMappingURL=ArrayString$$Overlay.js.map
