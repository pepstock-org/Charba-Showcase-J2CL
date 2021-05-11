goog.module('org.pepstock.charba.client.dom.BaseHtmlElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {HTMLElement} */
 static m_getParentHtmlElement__$devirt__org_pepstock_charba_client_dom_BaseHtmlElement(/** !HTMLElement */ $thisArg) {
  $Overlay.$clinit();
  let parent = $thisArg.parentElement;
  if ($Overlay.$isInstance(parent)) {
   return /**@type {HTMLElement}*/ ($Casts.$to(parent, $Overlay));
  }
  return null;
 }
 
 static m_removeFromParent__$devirt__org_pepstock_charba_client_dom_BaseHtmlElement(/** !HTMLElement */ $thisArg) {
  $Overlay.$clinit();
  let parent = $thisArg.parentElement;
  if (!$Equality.$same(parent, null)) {
   parent.removeChild($thisArg);
  }
 }
 /** @return {number} */
 static m_getAbsoluteTop__$devirt__org_pepstock_charba_client_dom_BaseHtmlElement(/** !HTMLElement */ $thisArg) {
  $Overlay.$clinit();
  let top = 0;
  let currentElement = $thisArg;
  while (!$Equality.$same(currentElement, null) && !$Equality.$same(currentElement.offsetParent, null)) {
   top -= currentElement.scrollTop;
   currentElement = $Overlay.m_getParentHtmlElement__$devirt__org_pepstock_charba_client_dom_BaseHtmlElement(currentElement);
  }
  currentElement = $thisArg;
  while (!$Equality.$same(currentElement, null)) {
   top += currentElement.offsetTop;
   if ($Overlay.$isInstance(currentElement.offsetParent)) {
    currentElement = /**@type {HTMLElement}*/ ($Casts.$to(currentElement.offsetParent, $Overlay));
   } else {
    currentElement = null;
   }
  }
  return top;
 }
 /** @return {number} */
 static m_getAbsoluteLeft__$devirt__org_pepstock_charba_client_dom_BaseHtmlElement(/** !HTMLElement */ $thisArg) {
  $Overlay.$clinit();
  let left = 0;
  let currentElement = $thisArg;
  while (!$Equality.$same(currentElement, null) && !$Equality.$same(currentElement.offsetParent, null)) {
   left -= currentElement.scrollLeft;
   currentElement = $Overlay.m_getParentHtmlElement__$devirt__org_pepstock_charba_client_dom_BaseHtmlElement(currentElement);
  }
  currentElement = $thisArg;
  while (!$Equality.$same(currentElement, null)) {
   left += currentElement.offsetLeft;
   if ($Overlay.$isInstance(currentElement.offsetParent)) {
    currentElement = /**@type {HTMLElement}*/ ($Casts.$to(currentElement.offsetParent, $Overlay));
   } else {
    currentElement = null;
   }
  }
  return left;
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLElement;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($Overlay, "HTMLElement");

exports = $Overlay;

//# sourceMappingURL=BaseHtmlElement$$Overlay.js.map
