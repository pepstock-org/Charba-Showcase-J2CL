goog.module('org.pepstock.charba.client.enums.LegendEventProperty$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<LegendEventProperty>}
 * @implements {Key}
 */
class LegendEventProperty extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_LegendEventProperty_;
 }
 /** @return {!LegendEventProperty} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new LegendEventProperty();
  $instance.$ctor__org_pepstock_charba_client_enums_LegendEventProperty__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_LegendEventProperty__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_LegendEventProperty_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_LegendEventProperty_;
 }
 /** @return {!LegendEventProperty} */
 static m_valueOf__java_lang_String(/** string */ name) {
  LegendEventProperty.$clinit();
  if ($Equality.$same(LegendEventProperty.f_namesToValuesMap__org_pepstock_charba_client_enums_LegendEventProperty_, null)) {
   LegendEventProperty.f_namesToValuesMap__org_pepstock_charba_client_enums_LegendEventProperty_ = $Enums.createMapFromValues(LegendEventProperty.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, LegendEventProperty.f_namesToValuesMap__org_pepstock_charba_client_enums_LegendEventProperty_);
 }
 /** @return {!Array<!LegendEventProperty>} */
 static m_values__() {
  LegendEventProperty.$clinit();
  return /**@type {!Array<LegendEventProperty>}*/ ($Arrays.$init([LegendEventProperty.$static_ON_CLICK__org_pepstock_charba_client_enums_LegendEventProperty, LegendEventProperty.$static_ON_HOVER__org_pepstock_charba_client_enums_LegendEventProperty, LegendEventProperty.$static_ON_LEAVE__org_pepstock_charba_client_enums_LegendEventProperty], LegendEventProperty));
 }
 /** @return {!LegendEventProperty} */
 static get f_ON_CLICK__org_pepstock_charba_client_enums_LegendEventProperty() {
  return (LegendEventProperty.$clinit(), LegendEventProperty.$static_ON_CLICK__org_pepstock_charba_client_enums_LegendEventProperty);
 }
 /** @return {!LegendEventProperty} */
 static get f_ON_HOVER__org_pepstock_charba_client_enums_LegendEventProperty() {
  return (LegendEventProperty.$clinit(), LegendEventProperty.$static_ON_HOVER__org_pepstock_charba_client_enums_LegendEventProperty);
 }
 /** @return {!LegendEventProperty} */
 static get f_ON_LEAVE__org_pepstock_charba_client_enums_LegendEventProperty() {
  return (LegendEventProperty.$clinit(), LegendEventProperty.$static_ON_LEAVE__org_pepstock_charba_client_enums_LegendEventProperty);
 }
 
 static $clinit() {
  LegendEventProperty.$clinit = () =>{};
  LegendEventProperty.$loadModules();
  Enum.$clinit();
  LegendEventProperty.$static_ON_CLICK__org_pepstock_charba_client_enums_LegendEventProperty = LegendEventProperty.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ON_CLICK"), LegendEventProperty.$ordinal_ON_CLICK__org_pepstock_charba_client_enums_LegendEventProperty, "onClick");
  LegendEventProperty.$static_ON_HOVER__org_pepstock_charba_client_enums_LegendEventProperty = LegendEventProperty.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ON_HOVER"), LegendEventProperty.$ordinal_ON_HOVER__org_pepstock_charba_client_enums_LegendEventProperty, "onHover");
  LegendEventProperty.$static_ON_LEAVE__org_pepstock_charba_client_enums_LegendEventProperty = LegendEventProperty.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ON_LEAVE"), LegendEventProperty.$ordinal_ON_LEAVE__org_pepstock_charba_client_enums_LegendEventProperty, "onLeave");
  LegendEventProperty.f_namesToValuesMap__org_pepstock_charba_client_enums_LegendEventProperty_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LegendEventProperty;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!LegendEventProperty}*/
LegendEventProperty.$static_ON_CLICK__org_pepstock_charba_client_enums_LegendEventProperty;
/**@private {!LegendEventProperty}*/
LegendEventProperty.$static_ON_HOVER__org_pepstock_charba_client_enums_LegendEventProperty;
/**@private {!LegendEventProperty}*/
LegendEventProperty.$static_ON_LEAVE__org_pepstock_charba_client_enums_LegendEventProperty;
/**@type {Map<?string, !LegendEventProperty>}*/
LegendEventProperty.f_namesToValuesMap__org_pepstock_charba_client_enums_LegendEventProperty_;
/**@const {number}*/
LegendEventProperty.$ordinal_ON_CLICK__org_pepstock_charba_client_enums_LegendEventProperty = 0;
/**@const {number}*/
LegendEventProperty.$ordinal_ON_HOVER__org_pepstock_charba_client_enums_LegendEventProperty = 1;
/**@const {number}*/
LegendEventProperty.$ordinal_ON_LEAVE__org_pepstock_charba_client_enums_LegendEventProperty = 2;
Key.$markImplementor(LegendEventProperty);
$Util.$setClassMetadataForEnum(LegendEventProperty, "org.pepstock.charba.client.enums.LegendEventProperty");

exports = LegendEventProperty;

//# sourceMappingURL=LegendEventProperty.js.map
