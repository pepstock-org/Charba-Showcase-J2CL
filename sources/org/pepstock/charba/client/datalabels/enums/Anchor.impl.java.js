goog.module('org.pepstock.charba.client.datalabels.enums.Anchor$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Anchor>}
 * @implements {Key}
 */
class Anchor extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_datalabels_enums_Anchor_;
 }
 /** @return {!Anchor} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Anchor();
  $instance.$ctor__org_pepstock_charba_client_datalabels_enums_Anchor__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_datalabels_enums_Anchor__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_datalabels_enums_Anchor_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_datalabels_enums_Anchor_;
 }
 /** @return {!Anchor} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Anchor.$clinit();
  if ($Equality.$same(Anchor.f_namesToValuesMap__org_pepstock_charba_client_datalabels_enums_Anchor_, null)) {
   Anchor.f_namesToValuesMap__org_pepstock_charba_client_datalabels_enums_Anchor_ = $Enums.createMapFromValues(Anchor.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Anchor.f_namesToValuesMap__org_pepstock_charba_client_datalabels_enums_Anchor_);
 }
 /** @return {!Array<!Anchor>} */
 static m_values__() {
  Anchor.$clinit();
  return /**@type {!Array<Anchor>}*/ ($Arrays.$init([Anchor.$static_CENTER__org_pepstock_charba_client_datalabels_enums_Anchor, Anchor.$static_START__org_pepstock_charba_client_datalabels_enums_Anchor, Anchor.$static_END__org_pepstock_charba_client_datalabels_enums_Anchor], Anchor));
 }
 /** @return {!Anchor} */
 static get f_CENTER__org_pepstock_charba_client_datalabels_enums_Anchor() {
  return (Anchor.$clinit(), Anchor.$static_CENTER__org_pepstock_charba_client_datalabels_enums_Anchor);
 }
 /** @return {!Anchor} */
 static get f_START__org_pepstock_charba_client_datalabels_enums_Anchor() {
  return (Anchor.$clinit(), Anchor.$static_START__org_pepstock_charba_client_datalabels_enums_Anchor);
 }
 /** @return {!Anchor} */
 static get f_END__org_pepstock_charba_client_datalabels_enums_Anchor() {
  return (Anchor.$clinit(), Anchor.$static_END__org_pepstock_charba_client_datalabels_enums_Anchor);
 }
 
 static $clinit() {
  Anchor.$clinit = () =>{};
  Anchor.$loadModules();
  Enum.$clinit();
  Anchor.$static_CENTER__org_pepstock_charba_client_datalabels_enums_Anchor = Anchor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CENTER"), Anchor.$ordinal_CENTER__org_pepstock_charba_client_datalabels_enums_Anchor, "center");
  Anchor.$static_START__org_pepstock_charba_client_datalabels_enums_Anchor = Anchor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("START"), Anchor.$ordinal_START__org_pepstock_charba_client_datalabels_enums_Anchor, "start");
  Anchor.$static_END__org_pepstock_charba_client_datalabels_enums_Anchor = Anchor.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("END"), Anchor.$ordinal_END__org_pepstock_charba_client_datalabels_enums_Anchor, "end");
  Anchor.f_namesToValuesMap__org_pepstock_charba_client_datalabels_enums_Anchor_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Anchor;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Anchor}*/
Anchor.$static_CENTER__org_pepstock_charba_client_datalabels_enums_Anchor;
/**@private {!Anchor}*/
Anchor.$static_START__org_pepstock_charba_client_datalabels_enums_Anchor;
/**@private {!Anchor}*/
Anchor.$static_END__org_pepstock_charba_client_datalabels_enums_Anchor;
/**@type {Map<?string, !Anchor>}*/
Anchor.f_namesToValuesMap__org_pepstock_charba_client_datalabels_enums_Anchor_;
/**@const {number}*/
Anchor.$ordinal_CENTER__org_pepstock_charba_client_datalabels_enums_Anchor = 0;
/**@const {number}*/
Anchor.$ordinal_START__org_pepstock_charba_client_datalabels_enums_Anchor = 1;
/**@const {number}*/
Anchor.$ordinal_END__org_pepstock_charba_client_datalabels_enums_Anchor = 2;
Key.$markImplementor(Anchor);
$Util.$setClassMetadataForEnum(Anchor, "org.pepstock.charba.client.datalabels.enums.Anchor");

exports = Anchor;

//# sourceMappingURL=Anchor.js.map
