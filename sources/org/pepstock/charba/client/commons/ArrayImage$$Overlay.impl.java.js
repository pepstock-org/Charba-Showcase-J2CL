goog.module('org.pepstock.charba.client.commons.ArrayImage.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ArrayImageList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayImageList$impl');
let Img_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Img.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {Array} */
 static m_fromOrNull__arrayOf_org_pepstock_charba_client_dom_elements_Img(/** Array<HTMLImageElement> */ items) {
  $Overlay.$clinit();
  if ($Equality.$same(items, null) || items.length == 0) {
   return null;
  }
  return Array.of(...InternalPreconditions.m_checkNotNull__java_lang_Object(items));
 }
 /** @return {Array} */
 static m_fromOrEmpty__arrayOf_org_pepstock_charba_client_dom_elements_Img(/** Array<HTMLImageElement> */ items) {
  $Overlay.$clinit();
  if ($Equality.$same(items, null) || items.length == 0) {
   return new Array();
  }
  return Array.of(...InternalPreconditions.m_checkNotNull__java_lang_Object(items));
 }
 /** @return {Array} */
 static m_fromOrNull__java_util_List(/** List<HTMLImageElement> */ items) {
  $Overlay.$clinit();
  if ($Equality.$same(items, null) || items.isEmpty()) {
   return null;
  }
  if (ArrayImageList.$isInstance(items)) {
   let list = /**@type {ArrayImageList}*/ ($Casts.$to(items, ArrayImageList));
   return list.m_getArray___$pp_org_pepstock_charba_client_commons();
  }
  let result = new Array();
  for (let $iterator = items.m_iterator__(); $iterator.m_hasNext__(); ) {
   let value = /**@type {HTMLImageElement}*/ ($Casts.$to($iterator.m_next__(), Img_$Overlay));
   {
    result.push(value);
   }
  }
  return result;
 }
 /** @return {Array} */
 static m_fromOrEmpty__java_util_List(/** List<HTMLImageElement> */ items) {
  $Overlay.$clinit();
  if (ArrayImageList.$isInstance(items)) {
   let list = /**@type {ArrayImageList}*/ ($Casts.$to(items, ArrayImageList));
   return list.m_getArray___$pp_org_pepstock_charba_client_commons();
  }
  let result = new Array();
  if ($Equality.$same(items, null) || items.isEmpty()) {
   return result;
  }
  for (let $iterator = items.m_iterator__(); $iterator.m_hasNext__(); ) {
   let value = /**@type {HTMLImageElement}*/ ($Casts.$to($iterator.m_next__(), Img_$Overlay));
   {
    result.push(value);
   }
  }
  return result;
 }
 
 static m_clear__$devirt__org_pepstock_charba_client_commons_ArrayImage(/** !Array */ $thisArg) {
  $Overlay.$clinit();
  $thisArg.splice(0, $thisArg.length);
 }
 /** @return {HTMLImageElement} */
 static m_remove__$devirt__org_pepstock_charba_client_commons_ArrayImage__int(/** !Array */ $thisArg, /** number */ index) {
  $Overlay.$clinit();
  return $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayImage__int($thisArg.splice(index, 1), 0);
 }
 
 static m_insertAt__$devirt__org_pepstock_charba_client_commons_ArrayImage__int__org_pepstock_charba_client_dom_elements_Img(/** !Array */ $thisArg, /** number */ index, /** HTMLImageElement */ item) {
  $Overlay.$clinit();
  $thisArg.splice(index, 0, item);
 }
 /** @return {HTMLImageElement} */
 static m_get__$devirt__org_pepstock_charba_client_commons_ArrayImage__int(/** !Array */ $thisArg, /** number */ index) {
  $Overlay.$clinit();
  return $thisArg.slice(index, index + 1 | 0).pop();
 }
 
 static m_set__$devirt__org_pepstock_charba_client_commons_ArrayImage__int__org_pepstock_charba_client_dom_elements_Img(/** !Array */ $thisArg, /** number */ index, /** HTMLImageElement */ item) {
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
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ArrayImageList = goog.module.get('org.pepstock.charba.client.commons.ArrayImageList$impl');
  Img_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Img.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($Overlay, "Array");

exports = $Overlay;

//# sourceMappingURL=ArrayImage$$Overlay.js.map
