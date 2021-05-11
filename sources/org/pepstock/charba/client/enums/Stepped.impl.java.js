goog.module('org.pepstock.charba.client.enums.Stepped$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Stepped>}
 * @implements {Key}
 */
class Stepped extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_Stepped_;
 }
 /** @return {!Stepped} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Stepped();
  $instance.$ctor__org_pepstock_charba_client_enums_Stepped__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_Stepped__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_Stepped_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_Stepped_;
 }
 /** @return {!Stepped} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Stepped.$clinit();
  if ($Equality.$same(Stepped.f_namesToValuesMap__org_pepstock_charba_client_enums_Stepped_, null)) {
   Stepped.f_namesToValuesMap__org_pepstock_charba_client_enums_Stepped_ = $Enums.createMapFromValues(Stepped.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Stepped.f_namesToValuesMap__org_pepstock_charba_client_enums_Stepped_);
 }
 /** @return {!Array<!Stepped>} */
 static m_values__() {
  Stepped.$clinit();
  return /**@type {!Array<Stepped>}*/ ($Arrays.$init([Stepped.$static_BEFORE__org_pepstock_charba_client_enums_Stepped, Stepped.$static_AFTER__org_pepstock_charba_client_enums_Stepped, Stepped.$static_MIDDLE__org_pepstock_charba_client_enums_Stepped, Stepped.$static_FALSE__org_pepstock_charba_client_enums_Stepped], Stepped));
 }
 /** @return {!Stepped} */
 static get f_BEFORE__org_pepstock_charba_client_enums_Stepped() {
  return (Stepped.$clinit(), Stepped.$static_BEFORE__org_pepstock_charba_client_enums_Stepped);
 }
 /** @return {!Stepped} */
 static get f_AFTER__org_pepstock_charba_client_enums_Stepped() {
  return (Stepped.$clinit(), Stepped.$static_AFTER__org_pepstock_charba_client_enums_Stepped);
 }
 /** @return {!Stepped} */
 static get f_MIDDLE__org_pepstock_charba_client_enums_Stepped() {
  return (Stepped.$clinit(), Stepped.$static_MIDDLE__org_pepstock_charba_client_enums_Stepped);
 }
 /** @return {!Stepped} */
 static get f_FALSE__org_pepstock_charba_client_enums_Stepped() {
  return (Stepped.$clinit(), Stepped.$static_FALSE__org_pepstock_charba_client_enums_Stepped);
 }
 
 static $clinit() {
  Stepped.$clinit = () =>{};
  Stepped.$loadModules();
  Enum.$clinit();
  Stepped.$static_BEFORE__org_pepstock_charba_client_enums_Stepped = Stepped.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE"), Stepped.$ordinal_BEFORE__org_pepstock_charba_client_enums_Stepped, "before");
  Stepped.$static_AFTER__org_pepstock_charba_client_enums_Stepped = Stepped.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AFTER"), Stepped.$ordinal_AFTER__org_pepstock_charba_client_enums_Stepped, "after");
  Stepped.$static_MIDDLE__org_pepstock_charba_client_enums_Stepped = Stepped.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MIDDLE"), Stepped.$ordinal_MIDDLE__org_pepstock_charba_client_enums_Stepped, "middle");
  Stepped.$static_FALSE__org_pepstock_charba_client_enums_Stepped = Stepped.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FALSE"), Stepped.$ordinal_FALSE__org_pepstock_charba_client_enums_Stepped, "false");
  Stepped.f_namesToValuesMap__org_pepstock_charba_client_enums_Stepped_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Stepped;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Stepped}*/
Stepped.$static_BEFORE__org_pepstock_charba_client_enums_Stepped;
/**@private {!Stepped}*/
Stepped.$static_AFTER__org_pepstock_charba_client_enums_Stepped;
/**@private {!Stepped}*/
Stepped.$static_MIDDLE__org_pepstock_charba_client_enums_Stepped;
/**@private {!Stepped}*/
Stepped.$static_FALSE__org_pepstock_charba_client_enums_Stepped;
/**@type {Map<?string, !Stepped>}*/
Stepped.f_namesToValuesMap__org_pepstock_charba_client_enums_Stepped_;
/**@const {number}*/
Stepped.$ordinal_BEFORE__org_pepstock_charba_client_enums_Stepped = 0;
/**@const {number}*/
Stepped.$ordinal_AFTER__org_pepstock_charba_client_enums_Stepped = 1;
/**@const {number}*/
Stepped.$ordinal_MIDDLE__org_pepstock_charba_client_enums_Stepped = 2;
/**@const {number}*/
Stepped.$ordinal_FALSE__org_pepstock_charba_client_enums_Stepped = 3;
Key.$markImplementor(Stepped);
$Util.$setClassMetadataForEnum(Stepped, "org.pepstock.charba.client.enums.Stepped");

exports = Stepped;

//# sourceMappingURL=Stepped.js.map
