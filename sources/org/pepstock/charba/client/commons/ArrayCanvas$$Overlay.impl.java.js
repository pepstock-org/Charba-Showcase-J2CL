goog.module('org.pepstock.charba.client.commons.ArrayCanvas.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ArrayCanvasList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayCanvasList$impl');
let Canvas_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {Array} */
 static m_fromOrNull__arrayOf_org_pepstock_charba_client_dom_elements_Canvas(/** Array<HTMLCanvasElement> */ items) {
  $Overlay.$clinit();
  if ($Equality.$same(items, null) || items.length == 0) {
   return null;
  }
  return Array.of(...InternalPreconditions.m_checkNotNull__java_lang_Object(items));
 }
 /** @return {Array} */
 static m_fromOrEmpty__arrayOf_org_pepstock_charba_client_dom_elements_Canvas(/** Array<HTMLCanvasElement> */ items) {
  $Overlay.$clinit();
  if ($Equality.$same(items, null) || items.length == 0) {
   return new Array();
  }
  return Array.of(...InternalPreconditions.m_checkNotNull__java_lang_Object(items));
 }
 /** @return {Array} */
 static m_fromOrNull__java_util_List(/** List<HTMLCanvasElement> */ items) {
  $Overlay.$clinit();
  if ($Equality.$same(items, null) || items.isEmpty()) {
   return null;
  }
  if (ArrayCanvasList.$isInstance(items)) {
   let list = /**@type {ArrayCanvasList}*/ ($Casts.$to(items, ArrayCanvasList));
   return list.m_getArray___$pp_org_pepstock_charba_client_commons();
  }
  let result = new Array();
  for (let $iterator = items.m_iterator__(); $iterator.m_hasNext__(); ) {
   let value = /**@type {HTMLCanvasElement}*/ ($Casts.$to($iterator.m_next__(), Canvas_$Overlay));
   {
    result.push(value);
   }
  }
  return result;
 }
 /** @return {Array} */
 static m_fromOrEmpty__java_util_List(/** List<HTMLCanvasElement> */ items) {
  $Overlay.$clinit();
  if (ArrayCanvasList.$isInstance(items)) {
   let list = /**@type {ArrayCanvasList}*/ ($Casts.$to(items, ArrayCanvasList));
   return list.m_getArray___$pp_org_pepstock_charba_client_commons();
  }
  let result = new Array();
  if ($Equality.$same(items, null) || items.isEmpty()) {
   return result;
  }
  for (let $iterator = items.m_iterator__(); $iterator.m_hasNext__(); ) {
   let value = /**@type {HTMLCanvasElement}*/ ($Casts.$to($iterator.m_next__(), Canvas_$Overlay));
   {
    result.push(value);
   }
  }
  return result;
 }
 
 static m_clear__$devirt__org_pepstock_charba_client_commons_ArrayCanvas(/** !Array */ $thisArg) {
  $Overlay.$clinit();
  $thisArg.splice(0, $thisArg.length);
 }
 /** @return {HTMLCanvasElement} */
 static m_remove__$devirt__org_pepstock_charba_client_commons_ArrayCanvas__int(/** !Array */ $thisArg, /** number */ index) {
  $Overlay.$clinit();
  return $Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayCanvas__int($thisArg.splice(index, 1), 0);
 }
 
 static m_insertAt__$devirt__org_pepstock_charba_client_commons_ArrayCanvas__int__org_pepstock_charba_client_dom_elements_Canvas(/** !Array */ $thisArg, /** number */ index, /** HTMLCanvasElement */ item) {
  $Overlay.$clinit();
  $thisArg.splice(index, 0, item);
 }
 /** @return {HTMLCanvasElement} */
 static m_get__$devirt__org_pepstock_charba_client_commons_ArrayCanvas__int(/** !Array */ $thisArg, /** number */ index) {
  $Overlay.$clinit();
  return $thisArg.slice(index, index + 1 | 0).pop();
 }
 
 static m_set__$devirt__org_pepstock_charba_client_commons_ArrayCanvas__int__org_pepstock_charba_client_dom_elements_Canvas(/** !Array */ $thisArg, /** number */ index, /** HTMLCanvasElement */ item) {
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
  ArrayCanvasList = goog.module.get('org.pepstock.charba.client.commons.ArrayCanvasList$impl');
  Canvas_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($Overlay, "Array");

exports = $Overlay;

//# sourceMappingURL=ArrayCanvas$$Overlay.js.map
