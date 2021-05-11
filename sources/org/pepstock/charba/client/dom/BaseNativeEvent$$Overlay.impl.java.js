goog.module('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let BaseHtmlElement_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseHtmlElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {number} */
 static m_getX__$devirt__org_pepstock_charba_client_dom_BaseNativeEvent(/** !Object */ $thisArg) {
  $Overlay.$clinit();
  let target = $thisArg.target;
  if (BaseHtmlElement_$Overlay.$isInstance(target)) {
   let element = /**@type {HTMLElement}*/ ($Casts.$to(target, BaseHtmlElement_$Overlay));
   let scrollElement = $Overlay.m_getScrollingElement__$devirt__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_dom_BaseDocument($thisArg, element.ownerDocument);
   return $thisArg.clientX - BaseHtmlElement_$Overlay.m_getAbsoluteLeft__$devirt__org_pepstock_charba_client_dom_BaseHtmlElement(element) + element.scrollLeft + scrollElement.scrollLeft;
  }
  return $thisArg.clientX;
 }
 /** @return {number} */
 static m_getY__$devirt__org_pepstock_charba_client_dom_BaseNativeEvent(/** !Object */ $thisArg) {
  $Overlay.$clinit();
  let target = $thisArg.target;
  if (BaseHtmlElement_$Overlay.$isInstance(target)) {
   let element = /**@type {HTMLElement}*/ ($Casts.$to(target, BaseHtmlElement_$Overlay));
   let scrollElement = $Overlay.m_getScrollingElement__$devirt__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_dom_BaseDocument($thisArg, element.ownerDocument);
   return $thisArg.clientY - BaseHtmlElement_$Overlay.m_getAbsoluteTop__$devirt__org_pepstock_charba_client_dom_BaseHtmlElement(element) + element.scrollTop + scrollElement.scrollTop;
  }
  return $thisArg.clientY;
 }
 /** @return {Element} */
 static m_getScrollingElement__$devirt__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_dom_BaseDocument(/** !Object */ $thisArg, /** Document */ document) {
  if (!$Equality.$same(document.scrollingElement, null)) {
   return document.scrollingElement;
  }
  return document.documentElement;
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  BaseHtmlElement_$Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseHtmlElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($Overlay, "Object");

exports = $Overlay;

//# sourceMappingURL=BaseNativeEvent$$Overlay.js.map
