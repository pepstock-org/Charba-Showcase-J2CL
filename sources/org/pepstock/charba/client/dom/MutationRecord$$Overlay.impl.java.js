goog.module('org.pepstock.charba.client.dom.MutationRecord.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let BaseHtmlElement_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.BaseHtmlElement.$Overlay$impl');
let MutationType = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.MutationType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {List<HTMLElement>} */
 static m_getAddedElements__$devirt__org_pepstock_charba_client_dom_MutationRecord(/** !MutationRecord */ $thisArg) {
  $Overlay.$clinit();
  return $Overlay.m_loadElements__$devirt__org_pepstock_charba_client_dom_MutationRecord__org_pepstock_charba_client_dom_NodeList($thisArg, $thisArg.addedNodes);
 }
 /** @return {List<HTMLElement>} */
 static m_getRemovedElements__$devirt__org_pepstock_charba_client_dom_MutationRecord(/** !MutationRecord */ $thisArg) {
  $Overlay.$clinit();
  return $Overlay.m_loadElements__$devirt__org_pepstock_charba_client_dom_MutationRecord__org_pepstock_charba_client_dom_NodeList($thisArg, $thisArg.removedNodes);
 }
 /** @return {MutationType} */
 static m_getType__$devirt__org_pepstock_charba_client_dom_MutationRecord(/** !MutationRecord */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {MutationType}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(MutationType.m_values__(), $thisArg.type), MutationType));
 }
 /** @return {List<HTMLElement>} */
 static m_loadElements__$devirt__org_pepstock_charba_client_dom_MutationRecord__org_pepstock_charba_client_dom_NodeList(/** !MutationRecord */ $thisArg, /** NodeList<Node> */ nodes) {
  let result = /**@type {!LinkedList<HTMLElement>}*/ (LinkedList.$create__());
  if (!$Equality.$same(nodes, null)) {
   for (let i = 0; i < nodes.length; i = i + 1 | 0) {
    let node = nodes.item(i);
    if (BaseHtmlElement_$Overlay.$isInstance(node)) {
     let element = /**@type {HTMLElement}*/ ($Casts.$to(node, BaseHtmlElement_$Overlay));
     result.add(element);
    }
   }
  }
  return result;
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MutationRecord;
 }
 
 static $loadModules() {
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  BaseHtmlElement_$Overlay = goog.module.get('org.pepstock.charba.client.dom.BaseHtmlElement.$Overlay$impl');
  MutationType = goog.module.get('org.pepstock.charba.client.dom.enums.MutationType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($Overlay, "MutationRecord");

exports = $Overlay;

//# sourceMappingURL=MutationRecord$$Overlay.js.map
