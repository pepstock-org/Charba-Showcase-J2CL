goog.module('org.pepstock.charba.client.enums.TickSource$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<TickSource>}
 * @implements {Key}
 */
class TickSource extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_TickSource_;
 }
 /** @return {!TickSource} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new TickSource();
  $instance.$ctor__org_pepstock_charba_client_enums_TickSource__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_TickSource__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_TickSource_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_TickSource_;
 }
 /** @return {!TickSource} */
 static m_valueOf__java_lang_String(/** string */ name) {
  TickSource.$clinit();
  if ($Equality.$same(TickSource.f_namesToValuesMap__org_pepstock_charba_client_enums_TickSource_, null)) {
   TickSource.f_namesToValuesMap__org_pepstock_charba_client_enums_TickSource_ = $Enums.createMapFromValues(TickSource.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TickSource.f_namesToValuesMap__org_pepstock_charba_client_enums_TickSource_);
 }
 /** @return {!Array<!TickSource>} */
 static m_values__() {
  TickSource.$clinit();
  return /**@type {!Array<TickSource>}*/ ($Arrays.$init([TickSource.$static_AUTO__org_pepstock_charba_client_enums_TickSource, TickSource.$static_DATA__org_pepstock_charba_client_enums_TickSource, TickSource.$static_LABELS__org_pepstock_charba_client_enums_TickSource], TickSource));
 }
 /** @return {!TickSource} */
 static get f_AUTO__org_pepstock_charba_client_enums_TickSource() {
  return (TickSource.$clinit(), TickSource.$static_AUTO__org_pepstock_charba_client_enums_TickSource);
 }
 /** @return {!TickSource} */
 static get f_DATA__org_pepstock_charba_client_enums_TickSource() {
  return (TickSource.$clinit(), TickSource.$static_DATA__org_pepstock_charba_client_enums_TickSource);
 }
 /** @return {!TickSource} */
 static get f_LABELS__org_pepstock_charba_client_enums_TickSource() {
  return (TickSource.$clinit(), TickSource.$static_LABELS__org_pepstock_charba_client_enums_TickSource);
 }
 
 static $clinit() {
  TickSource.$clinit = () =>{};
  TickSource.$loadModules();
  Enum.$clinit();
  TickSource.$static_AUTO__org_pepstock_charba_client_enums_TickSource = TickSource.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AUTO"), TickSource.$ordinal_AUTO__org_pepstock_charba_client_enums_TickSource, "auto");
  TickSource.$static_DATA__org_pepstock_charba_client_enums_TickSource = TickSource.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DATA"), TickSource.$ordinal_DATA__org_pepstock_charba_client_enums_TickSource, "data");
  TickSource.$static_LABELS__org_pepstock_charba_client_enums_TickSource = TickSource.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LABELS"), TickSource.$ordinal_LABELS__org_pepstock_charba_client_enums_TickSource, "labels");
  TickSource.f_namesToValuesMap__org_pepstock_charba_client_enums_TickSource_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TickSource;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!TickSource}*/
TickSource.$static_AUTO__org_pepstock_charba_client_enums_TickSource;
/**@private {!TickSource}*/
TickSource.$static_DATA__org_pepstock_charba_client_enums_TickSource;
/**@private {!TickSource}*/
TickSource.$static_LABELS__org_pepstock_charba_client_enums_TickSource;
/**@type {Map<?string, !TickSource>}*/
TickSource.f_namesToValuesMap__org_pepstock_charba_client_enums_TickSource_;
/**@const {number}*/
TickSource.$ordinal_AUTO__org_pepstock_charba_client_enums_TickSource = 0;
/**@const {number}*/
TickSource.$ordinal_DATA__org_pepstock_charba_client_enums_TickSource = 1;
/**@const {number}*/
TickSource.$ordinal_LABELS__org_pepstock_charba_client_enums_TickSource = 2;
Key.$markImplementor(TickSource);
$Util.$setClassMetadataForEnum(TickSource, "org.pepstock.charba.client.enums.TickSource");

exports = TickSource;

//# sourceMappingURL=TickSource.js.map
