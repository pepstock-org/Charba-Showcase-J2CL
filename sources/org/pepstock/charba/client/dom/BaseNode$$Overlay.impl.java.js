goog.module('org.pepstock.charba.client.dom.BaseNode.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let NodeType = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.NodeType$impl');

class $Overlay {
 /** @return {NodeType} */
 static m_getNodeType__$devirt__org_pepstock_charba_client_dom_BaseNode(/** !Node */ $thisArg) {
  $Overlay.$clinit();
  return NodeType.m_getByType__int($thisArg.nodeType);
 }
 
 static m_removeAllChildren__$devirt__org_pepstock_charba_client_dom_BaseNode(/** !Node */ $thisArg) {
  $Overlay.$clinit();
  while (!$Equality.$same($thisArg.lastChild, null)) {
   $thisArg.removeChild($thisArg.lastChild);
  }
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Node;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  NodeType = goog.module.get('org.pepstock.charba.client.dom.enums.NodeType$impl');
 }
}
$Util.$setClassMetadata($Overlay, "Node");

exports = $Overlay;

//# sourceMappingURL=BaseNode$$Overlay.js.map
