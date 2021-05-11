goog.module('org.pepstock.charba.client.enums.AxisKind$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<AxisKind>}
 * @implements {Key}
 */
class AxisKind extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_AxisKind_;
 }
 /** @return {!AxisKind} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new AxisKind();
  $instance.$ctor__org_pepstock_charba_client_enums_AxisKind__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_AxisKind__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_AxisKind_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_AxisKind_;
 }
 /** @return {!AxisKind} */
 static m_valueOf__java_lang_String(/** string */ name) {
  AxisKind.$clinit();
  if ($Equality.$same(AxisKind.f_namesToValuesMap__org_pepstock_charba_client_enums_AxisKind_, null)) {
   AxisKind.f_namesToValuesMap__org_pepstock_charba_client_enums_AxisKind_ = $Enums.createMapFromValues(AxisKind.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, AxisKind.f_namesToValuesMap__org_pepstock_charba_client_enums_AxisKind_);
 }
 /** @return {!Array<!AxisKind>} */
 static m_values__() {
  AxisKind.$clinit();
  return /**@type {!Array<AxisKind>}*/ ($Arrays.$init([AxisKind.$static_X__org_pepstock_charba_client_enums_AxisKind, AxisKind.$static_Y__org_pepstock_charba_client_enums_AxisKind, AxisKind.$static_R__org_pepstock_charba_client_enums_AxisKind], AxisKind));
 }
 /** @return {!AxisKind} */
 static get f_X__org_pepstock_charba_client_enums_AxisKind() {
  return (AxisKind.$clinit(), AxisKind.$static_X__org_pepstock_charba_client_enums_AxisKind);
 }
 /** @return {!AxisKind} */
 static get f_Y__org_pepstock_charba_client_enums_AxisKind() {
  return (AxisKind.$clinit(), AxisKind.$static_Y__org_pepstock_charba_client_enums_AxisKind);
 }
 /** @return {!AxisKind} */
 static get f_R__org_pepstock_charba_client_enums_AxisKind() {
  return (AxisKind.$clinit(), AxisKind.$static_R__org_pepstock_charba_client_enums_AxisKind);
 }
 
 static $clinit() {
  AxisKind.$clinit = () =>{};
  AxisKind.$loadModules();
  Enum.$clinit();
  AxisKind.$static_X__org_pepstock_charba_client_enums_AxisKind = AxisKind.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("X"), AxisKind.$ordinal_X__org_pepstock_charba_client_enums_AxisKind, "x");
  AxisKind.$static_Y__org_pepstock_charba_client_enums_AxisKind = AxisKind.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Y"), AxisKind.$ordinal_Y__org_pepstock_charba_client_enums_AxisKind, "y");
  AxisKind.$static_R__org_pepstock_charba_client_enums_AxisKind = AxisKind.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("R"), AxisKind.$ordinal_R__org_pepstock_charba_client_enums_AxisKind, "r");
  AxisKind.f_namesToValuesMap__org_pepstock_charba_client_enums_AxisKind_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AxisKind;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!AxisKind}*/
AxisKind.$static_X__org_pepstock_charba_client_enums_AxisKind;
/**@private {!AxisKind}*/
AxisKind.$static_Y__org_pepstock_charba_client_enums_AxisKind;
/**@private {!AxisKind}*/
AxisKind.$static_R__org_pepstock_charba_client_enums_AxisKind;
/**@type {Map<?string, !AxisKind>}*/
AxisKind.f_namesToValuesMap__org_pepstock_charba_client_enums_AxisKind_;
/**@const {number}*/
AxisKind.$ordinal_X__org_pepstock_charba_client_enums_AxisKind = 0;
/**@const {number}*/
AxisKind.$ordinal_Y__org_pepstock_charba_client_enums_AxisKind = 1;
/**@const {number}*/
AxisKind.$ordinal_R__org_pepstock_charba_client_enums_AxisKind = 2;
Key.$markImplementor(AxisKind);
$Util.$setClassMetadataForEnum(AxisKind, "org.pepstock.charba.client.enums.AxisKind");

exports = AxisKind;

//# sourceMappingURL=AxisKind.js.map
