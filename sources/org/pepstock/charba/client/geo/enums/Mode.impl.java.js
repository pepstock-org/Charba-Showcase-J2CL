goog.module('org.pepstock.charba.client.geo.enums.Mode$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Mode>}
 * @implements {Key}
 */
class Mode extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_geo_enums_Mode_;
 }
 /** @return {!Mode} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Mode();
  $instance.$ctor__org_pepstock_charba_client_geo_enums_Mode__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_enums_Mode__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_geo_enums_Mode_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_geo_enums_Mode_;
 }
 /** @return {!Mode} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Mode.$clinit();
  if ($Equality.$same(Mode.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_Mode_, null)) {
   Mode.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_Mode_ = $Enums.createMapFromValues(Mode.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Mode.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_Mode_);
 }
 /** @return {!Array<!Mode>} */
 static m_values__() {
  Mode.$clinit();
  return /**@type {!Array<Mode>}*/ ($Arrays.$init([Mode.$static_AREA__org_pepstock_charba_client_geo_enums_Mode, Mode.$static_RADIUS__org_pepstock_charba_client_geo_enums_Mode], Mode));
 }
 /** @return {!Mode} */
 static get f_AREA__org_pepstock_charba_client_geo_enums_Mode() {
  return (Mode.$clinit(), Mode.$static_AREA__org_pepstock_charba_client_geo_enums_Mode);
 }
 /** @return {!Mode} */
 static get f_RADIUS__org_pepstock_charba_client_geo_enums_Mode() {
  return (Mode.$clinit(), Mode.$static_RADIUS__org_pepstock_charba_client_geo_enums_Mode);
 }
 
 static $clinit() {
  Mode.$clinit = () =>{};
  Mode.$loadModules();
  Enum.$clinit();
  Mode.$static_AREA__org_pepstock_charba_client_geo_enums_Mode = Mode.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AREA"), Mode.$ordinal_AREA__org_pepstock_charba_client_geo_enums_Mode, "area");
  Mode.$static_RADIUS__org_pepstock_charba_client_geo_enums_Mode = Mode.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RADIUS"), Mode.$ordinal_RADIUS__org_pepstock_charba_client_geo_enums_Mode, "radius");
  Mode.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_Mode_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Mode;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Mode}*/
Mode.$static_AREA__org_pepstock_charba_client_geo_enums_Mode;
/**@private {!Mode}*/
Mode.$static_RADIUS__org_pepstock_charba_client_geo_enums_Mode;
/**@type {Map<?string, !Mode>}*/
Mode.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_Mode_;
/**@const {number}*/
Mode.$ordinal_AREA__org_pepstock_charba_client_geo_enums_Mode = 0;
/**@const {number}*/
Mode.$ordinal_RADIUS__org_pepstock_charba_client_geo_enums_Mode = 1;
Key.$markImplementor(Mode);
$Util.$setClassMetadataForEnum(Mode, "org.pepstock.charba.client.geo.enums.Mode");

exports = Mode;

//# sourceMappingURL=Mode.js.map
