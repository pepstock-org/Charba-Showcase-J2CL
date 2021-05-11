goog.module('org.pepstock.charba.client.impl.plugins.enums.PointerElement$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<PointerElement>}
 * @implements {Key}
 */
class PointerElement extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_impl_plugins_enums_PointerElement_;
 }
 /** @return {!PointerElement} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new PointerElement();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_enums_PointerElement__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_enums_PointerElement__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_impl_plugins_enums_PointerElement_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_impl_plugins_enums_PointerElement_;
 }
 /** @return {!PointerElement} */
 static m_valueOf__java_lang_String(/** string */ name) {
  PointerElement.$clinit();
  if ($Equality.$same(PointerElement.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_PointerElement_, null)) {
   PointerElement.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_PointerElement_ = $Enums.createMapFromValues(PointerElement.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, PointerElement.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_PointerElement_);
 }
 /** @return {!Array<!PointerElement>} */
 static m_values__() {
  PointerElement.$clinit();
  return /**@type {!Array<PointerElement>}*/ ($Arrays.$init([PointerElement.$static_DATASET__org_pepstock_charba_client_impl_plugins_enums_PointerElement, PointerElement.$static_TITLE__org_pepstock_charba_client_impl_plugins_enums_PointerElement, PointerElement.$static_AXES__org_pepstock_charba_client_impl_plugins_enums_PointerElement, PointerElement.$static_LEGEND__org_pepstock_charba_client_impl_plugins_enums_PointerElement], PointerElement));
 }
 /** @return {!PointerElement} */
 static get f_DATASET__org_pepstock_charba_client_impl_plugins_enums_PointerElement() {
  return (PointerElement.$clinit(), PointerElement.$static_DATASET__org_pepstock_charba_client_impl_plugins_enums_PointerElement);
 }
 /** @return {!PointerElement} */
 static get f_TITLE__org_pepstock_charba_client_impl_plugins_enums_PointerElement() {
  return (PointerElement.$clinit(), PointerElement.$static_TITLE__org_pepstock_charba_client_impl_plugins_enums_PointerElement);
 }
 /** @return {!PointerElement} */
 static get f_AXES__org_pepstock_charba_client_impl_plugins_enums_PointerElement() {
  return (PointerElement.$clinit(), PointerElement.$static_AXES__org_pepstock_charba_client_impl_plugins_enums_PointerElement);
 }
 /** @return {!PointerElement} */
 static get f_LEGEND__org_pepstock_charba_client_impl_plugins_enums_PointerElement() {
  return (PointerElement.$clinit(), PointerElement.$static_LEGEND__org_pepstock_charba_client_impl_plugins_enums_PointerElement);
 }
 
 static $clinit() {
  PointerElement.$clinit = () =>{};
  PointerElement.$loadModules();
  Enum.$clinit();
  PointerElement.$static_DATASET__org_pepstock_charba_client_impl_plugins_enums_PointerElement = PointerElement.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DATASET"), PointerElement.$ordinal_DATASET__org_pepstock_charba_client_impl_plugins_enums_PointerElement, "dataset");
  PointerElement.$static_TITLE__org_pepstock_charba_client_impl_plugins_enums_PointerElement = PointerElement.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TITLE"), PointerElement.$ordinal_TITLE__org_pepstock_charba_client_impl_plugins_enums_PointerElement, "title");
  PointerElement.$static_AXES__org_pepstock_charba_client_impl_plugins_enums_PointerElement = PointerElement.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AXES"), PointerElement.$ordinal_AXES__org_pepstock_charba_client_impl_plugins_enums_PointerElement, "axes");
  PointerElement.$static_LEGEND__org_pepstock_charba_client_impl_plugins_enums_PointerElement = PointerElement.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LEGEND"), PointerElement.$ordinal_LEGEND__org_pepstock_charba_client_impl_plugins_enums_PointerElement, "legend");
  PointerElement.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_PointerElement_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PointerElement;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!PointerElement}*/
PointerElement.$static_DATASET__org_pepstock_charba_client_impl_plugins_enums_PointerElement;
/**@private {!PointerElement}*/
PointerElement.$static_TITLE__org_pepstock_charba_client_impl_plugins_enums_PointerElement;
/**@private {!PointerElement}*/
PointerElement.$static_AXES__org_pepstock_charba_client_impl_plugins_enums_PointerElement;
/**@private {!PointerElement}*/
PointerElement.$static_LEGEND__org_pepstock_charba_client_impl_plugins_enums_PointerElement;
/**@type {Map<?string, !PointerElement>}*/
PointerElement.f_namesToValuesMap__org_pepstock_charba_client_impl_plugins_enums_PointerElement_;
/**@const {number}*/
PointerElement.$ordinal_DATASET__org_pepstock_charba_client_impl_plugins_enums_PointerElement = 0;
/**@const {number}*/
PointerElement.$ordinal_TITLE__org_pepstock_charba_client_impl_plugins_enums_PointerElement = 1;
/**@const {number}*/
PointerElement.$ordinal_AXES__org_pepstock_charba_client_impl_plugins_enums_PointerElement = 2;
/**@const {number}*/
PointerElement.$ordinal_LEGEND__org_pepstock_charba_client_impl_plugins_enums_PointerElement = 3;
Key.$markImplementor(PointerElement);
$Util.$setClassMetadataForEnum(PointerElement, "org.pepstock.charba.client.impl.plugins.enums.PointerElement");

exports = PointerElement;

//# sourceMappingURL=PointerElement.js.map
