goog.module('org.pepstock.charba.client.dom.enums.NodeType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<NodeType>}
 */
class NodeType extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_type__org_pepstock_charba_client_dom_enums_NodeType_ = 0;
 }
 /** @return {!NodeType} */
 static $create__java_lang_String__int__int(/** ?string */ $name, /** number */ $ordinal, /** number */ type) {
  let $instance = new NodeType();
  $instance.$ctor__org_pepstock_charba_client_dom_enums_NodeType__java_lang_String__int__int($name, $ordinal, type);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_dom_enums_NodeType__java_lang_String__int__int(/** ?string */ $name, /** number */ $ordinal, /** number */ type) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_type__org_pepstock_charba_client_dom_enums_NodeType_ = type;
 }
 /** @return {number} */
 m_getType__() {
  return this.f_type__org_pepstock_charba_client_dom_enums_NodeType_;
 }
 /** @return {NodeType} */
 static m_getByType__int(/** number */ nodeType) {
  NodeType.$clinit();
  for (let $array = NodeType.m_values__(), $index = 0; $index < $array.length; $index++) {
   let type = $array[$index];
   {
    if (type.m_getType__() == nodeType) {
     return type;
    }
   }
  }
  return NodeType.$static_UNKNOWN__org_pepstock_charba_client_dom_enums_NodeType;
 }
 /** @return {!NodeType} */
 static m_valueOf__java_lang_String(/** string */ name) {
  NodeType.$clinit();
  if ($Equality.$same(NodeType.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_NodeType_, null)) {
   NodeType.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_NodeType_ = $Enums.createMapFromValues(NodeType.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, NodeType.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_NodeType_);
 }
 /** @return {!Array<!NodeType>} */
 static m_values__() {
  NodeType.$clinit();
  return /**@type {!Array<NodeType>}*/ ($Arrays.$init([NodeType.$static_ELEMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType, NodeType.$static_ATTRIBUTE_NODE__org_pepstock_charba_client_dom_enums_NodeType, NodeType.$static_TEXT_NODE__org_pepstock_charba_client_dom_enums_NodeType, NodeType.$static_CDATA_SECTION_NODE__org_pepstock_charba_client_dom_enums_NodeType, NodeType.$static_ENTITY_REFERENCE_NODE__org_pepstock_charba_client_dom_enums_NodeType, NodeType.$static_ENTITY_NODE__org_pepstock_charba_client_dom_enums_NodeType, NodeType.$static_PROCESSING_INSTRUCTION_NODE__org_pepstock_charba_client_dom_enums_NodeType, NodeType.$static_COMMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType, NodeType.$static_DOCUMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType, NodeType.$static_DOCUMENT_TYPE_NODE__org_pepstock_charba_client_dom_enums_NodeType, NodeType.$static_DOCUMENT_FRAGMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType, NodeType.$static_NOTATION_NODE__org_pepstock_charba_client_dom_enums_NodeType, NodeType.$static_UNKNOWN__org_pepstock_charba_client_dom_enums_NodeType], NodeType));
 }
 /** @return {!NodeType} */
 static get f_ELEMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType() {
  return (NodeType.$clinit(), NodeType.$static_ELEMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType);
 }
 /** @return {!NodeType} */
 static get f_ATTRIBUTE_NODE__org_pepstock_charba_client_dom_enums_NodeType() {
  return (NodeType.$clinit(), NodeType.$static_ATTRIBUTE_NODE__org_pepstock_charba_client_dom_enums_NodeType);
 }
 /** @return {!NodeType} */
 static get f_TEXT_NODE__org_pepstock_charba_client_dom_enums_NodeType() {
  return (NodeType.$clinit(), NodeType.$static_TEXT_NODE__org_pepstock_charba_client_dom_enums_NodeType);
 }
 /** @return {!NodeType} */
 static get f_CDATA_SECTION_NODE__org_pepstock_charba_client_dom_enums_NodeType() {
  return (NodeType.$clinit(), NodeType.$static_CDATA_SECTION_NODE__org_pepstock_charba_client_dom_enums_NodeType);
 }
 /** @return {!NodeType} */
 static get f_ENTITY_REFERENCE_NODE__org_pepstock_charba_client_dom_enums_NodeType() {
  return (NodeType.$clinit(), NodeType.$static_ENTITY_REFERENCE_NODE__org_pepstock_charba_client_dom_enums_NodeType);
 }
 /** @return {!NodeType} */
 static get f_ENTITY_NODE__org_pepstock_charba_client_dom_enums_NodeType() {
  return (NodeType.$clinit(), NodeType.$static_ENTITY_NODE__org_pepstock_charba_client_dom_enums_NodeType);
 }
 /** @return {!NodeType} */
 static get f_PROCESSING_INSTRUCTION_NODE__org_pepstock_charba_client_dom_enums_NodeType() {
  return (NodeType.$clinit(), NodeType.$static_PROCESSING_INSTRUCTION_NODE__org_pepstock_charba_client_dom_enums_NodeType);
 }
 /** @return {!NodeType} */
 static get f_COMMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType() {
  return (NodeType.$clinit(), NodeType.$static_COMMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType);
 }
 /** @return {!NodeType} */
 static get f_DOCUMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType() {
  return (NodeType.$clinit(), NodeType.$static_DOCUMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType);
 }
 /** @return {!NodeType} */
 static get f_DOCUMENT_TYPE_NODE__org_pepstock_charba_client_dom_enums_NodeType() {
  return (NodeType.$clinit(), NodeType.$static_DOCUMENT_TYPE_NODE__org_pepstock_charba_client_dom_enums_NodeType);
 }
 /** @return {!NodeType} */
 static get f_DOCUMENT_FRAGMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType() {
  return (NodeType.$clinit(), NodeType.$static_DOCUMENT_FRAGMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType);
 }
 /** @return {!NodeType} */
 static get f_NOTATION_NODE__org_pepstock_charba_client_dom_enums_NodeType() {
  return (NodeType.$clinit(), NodeType.$static_NOTATION_NODE__org_pepstock_charba_client_dom_enums_NodeType);
 }
 /** @return {!NodeType} */
 static get f_UNKNOWN__org_pepstock_charba_client_dom_enums_NodeType() {
  return (NodeType.$clinit(), NodeType.$static_UNKNOWN__org_pepstock_charba_client_dom_enums_NodeType);
 }
 
 static $clinit() {
  NodeType.$clinit = () =>{};
  NodeType.$loadModules();
  Enum.$clinit();
  NodeType.$static_ELEMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType = NodeType.$create__java_lang_String__int__int($Util.$makeEnumName("ELEMENT_NODE"), NodeType.$ordinal_ELEMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType, 1);
  NodeType.$static_ATTRIBUTE_NODE__org_pepstock_charba_client_dom_enums_NodeType = NodeType.$create__java_lang_String__int__int($Util.$makeEnumName("ATTRIBUTE_NODE"), NodeType.$ordinal_ATTRIBUTE_NODE__org_pepstock_charba_client_dom_enums_NodeType, 2);
  NodeType.$static_TEXT_NODE__org_pepstock_charba_client_dom_enums_NodeType = NodeType.$create__java_lang_String__int__int($Util.$makeEnumName("TEXT_NODE"), NodeType.$ordinal_TEXT_NODE__org_pepstock_charba_client_dom_enums_NodeType, 3);
  NodeType.$static_CDATA_SECTION_NODE__org_pepstock_charba_client_dom_enums_NodeType = NodeType.$create__java_lang_String__int__int($Util.$makeEnumName("CDATA_SECTION_NODE"), NodeType.$ordinal_CDATA_SECTION_NODE__org_pepstock_charba_client_dom_enums_NodeType, 4);
  NodeType.$static_ENTITY_REFERENCE_NODE__org_pepstock_charba_client_dom_enums_NodeType = NodeType.$create__java_lang_String__int__int($Util.$makeEnumName("ENTITY_REFERENCE_NODE"), NodeType.$ordinal_ENTITY_REFERENCE_NODE__org_pepstock_charba_client_dom_enums_NodeType, 5);
  NodeType.$static_ENTITY_NODE__org_pepstock_charba_client_dom_enums_NodeType = NodeType.$create__java_lang_String__int__int($Util.$makeEnumName("ENTITY_NODE"), NodeType.$ordinal_ENTITY_NODE__org_pepstock_charba_client_dom_enums_NodeType, 6);
  NodeType.$static_PROCESSING_INSTRUCTION_NODE__org_pepstock_charba_client_dom_enums_NodeType = NodeType.$create__java_lang_String__int__int($Util.$makeEnumName("PROCESSING_INSTRUCTION_NODE"), NodeType.$ordinal_PROCESSING_INSTRUCTION_NODE__org_pepstock_charba_client_dom_enums_NodeType, 7);
  NodeType.$static_COMMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType = NodeType.$create__java_lang_String__int__int($Util.$makeEnumName("COMMENT_NODE"), NodeType.$ordinal_COMMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType, 8);
  NodeType.$static_DOCUMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType = NodeType.$create__java_lang_String__int__int($Util.$makeEnumName("DOCUMENT_NODE"), NodeType.$ordinal_DOCUMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType, 9);
  NodeType.$static_DOCUMENT_TYPE_NODE__org_pepstock_charba_client_dom_enums_NodeType = NodeType.$create__java_lang_String__int__int($Util.$makeEnumName("DOCUMENT_TYPE_NODE"), NodeType.$ordinal_DOCUMENT_TYPE_NODE__org_pepstock_charba_client_dom_enums_NodeType, 10);
  NodeType.$static_DOCUMENT_FRAGMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType = NodeType.$create__java_lang_String__int__int($Util.$makeEnumName("DOCUMENT_FRAGMENT_NODE"), NodeType.$ordinal_DOCUMENT_FRAGMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType, 11);
  NodeType.$static_NOTATION_NODE__org_pepstock_charba_client_dom_enums_NodeType = NodeType.$create__java_lang_String__int__int($Util.$makeEnumName("NOTATION_NODE"), NodeType.$ordinal_NOTATION_NODE__org_pepstock_charba_client_dom_enums_NodeType, 12);
  NodeType.$static_UNKNOWN__org_pepstock_charba_client_dom_enums_NodeType = NodeType.$create__java_lang_String__int__int($Util.$makeEnumName("UNKNOWN"), NodeType.$ordinal_UNKNOWN__org_pepstock_charba_client_dom_enums_NodeType, Integer.f_MIN_VALUE__java_lang_Integer);
  NodeType.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_NodeType_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NodeType;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!NodeType}*/
NodeType.$static_ELEMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType;
/**@private {!NodeType}*/
NodeType.$static_ATTRIBUTE_NODE__org_pepstock_charba_client_dom_enums_NodeType;
/**@private {!NodeType}*/
NodeType.$static_TEXT_NODE__org_pepstock_charba_client_dom_enums_NodeType;
/**@private {!NodeType}*/
NodeType.$static_CDATA_SECTION_NODE__org_pepstock_charba_client_dom_enums_NodeType;
/**@private {!NodeType}*/
NodeType.$static_ENTITY_REFERENCE_NODE__org_pepstock_charba_client_dom_enums_NodeType;
/**@private {!NodeType}*/
NodeType.$static_ENTITY_NODE__org_pepstock_charba_client_dom_enums_NodeType;
/**@private {!NodeType}*/
NodeType.$static_PROCESSING_INSTRUCTION_NODE__org_pepstock_charba_client_dom_enums_NodeType;
/**@private {!NodeType}*/
NodeType.$static_COMMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType;
/**@private {!NodeType}*/
NodeType.$static_DOCUMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType;
/**@private {!NodeType}*/
NodeType.$static_DOCUMENT_TYPE_NODE__org_pepstock_charba_client_dom_enums_NodeType;
/**@private {!NodeType}*/
NodeType.$static_DOCUMENT_FRAGMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType;
/**@private {!NodeType}*/
NodeType.$static_NOTATION_NODE__org_pepstock_charba_client_dom_enums_NodeType;
/**@private {!NodeType}*/
NodeType.$static_UNKNOWN__org_pepstock_charba_client_dom_enums_NodeType;
/**@type {Map<?string, !NodeType>}*/
NodeType.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_NodeType_;
/**@const {number}*/
NodeType.$ordinal_ELEMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType = 0;
/**@const {number}*/
NodeType.$ordinal_ATTRIBUTE_NODE__org_pepstock_charba_client_dom_enums_NodeType = 1;
/**@const {number}*/
NodeType.$ordinal_TEXT_NODE__org_pepstock_charba_client_dom_enums_NodeType = 2;
/**@const {number}*/
NodeType.$ordinal_CDATA_SECTION_NODE__org_pepstock_charba_client_dom_enums_NodeType = 3;
/**@const {number}*/
NodeType.$ordinal_ENTITY_REFERENCE_NODE__org_pepstock_charba_client_dom_enums_NodeType = 4;
/**@const {number}*/
NodeType.$ordinal_ENTITY_NODE__org_pepstock_charba_client_dom_enums_NodeType = 5;
/**@const {number}*/
NodeType.$ordinal_PROCESSING_INSTRUCTION_NODE__org_pepstock_charba_client_dom_enums_NodeType = 6;
/**@const {number}*/
NodeType.$ordinal_COMMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType = 7;
/**@const {number}*/
NodeType.$ordinal_DOCUMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType = 8;
/**@const {number}*/
NodeType.$ordinal_DOCUMENT_TYPE_NODE__org_pepstock_charba_client_dom_enums_NodeType = 9;
/**@const {number}*/
NodeType.$ordinal_DOCUMENT_FRAGMENT_NODE__org_pepstock_charba_client_dom_enums_NodeType = 10;
/**@const {number}*/
NodeType.$ordinal_NOTATION_NODE__org_pepstock_charba_client_dom_enums_NodeType = 11;
/**@const {number}*/
NodeType.$ordinal_UNKNOWN__org_pepstock_charba_client_dom_enums_NodeType = 12;
$Util.$setClassMetadataForEnum(NodeType, "org.pepstock.charba.client.dom.enums.NodeType");

exports = NodeType;

//# sourceMappingURL=NodeType.js.map
