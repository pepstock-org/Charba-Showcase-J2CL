goog.module('elemental2.dom.Element.MatchesSelectorRefNodesUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let NodeList_$Overlay = goog.forwardDeclare('elemental2.dom.NodeList.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {Node} */
 static m_asNode__$devirt__elemental2_dom_Element_MatchesSelectorRefNodesUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {Node}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), Node_$Overlay));
 }
 /** @return {NodeList<*>} */
 static m_asNodeList__$devirt__elemental2_dom_Element_MatchesSelectorRefNodesUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {NodeList<*>}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), NodeList_$Overlay));
 }
 /** @return {boolean} */
 static m_isNode__$devirt__elemental2_dom_Element_MatchesSelectorRefNodesUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Node_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isNodeList__$devirt__elemental2_dom_Element_MatchesSelectorRefNodesUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return NodeList_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  NodeList_$Overlay = goog.module.get('elemental2.dom.NodeList.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}

exports = $Overlay;

//# sourceMappingURL=Element$MatchesSelectorRefNodesUnionType$$Overlay.js.map
