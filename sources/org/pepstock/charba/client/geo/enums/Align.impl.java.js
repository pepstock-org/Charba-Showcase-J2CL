goog.module('org.pepstock.charba.client.geo.enums.Align$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Align>}
 * @implements {Key}
 */
class Align extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_geo_enums_Align_;
 }
 /** @return {!Align} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Align();
  $instance.$ctor__org_pepstock_charba_client_geo_enums_Align__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_enums_Align__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_geo_enums_Align_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_geo_enums_Align_;
 }
 /** @return {!Align} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Align.$clinit();
  if ($Equality.$same(Align.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_Align_, null)) {
   Align.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_Align_ = $Enums.createMapFromValues(Align.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Align.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_Align_);
 }
 /** @return {!Array<!Align>} */
 static m_values__() {
  Align.$clinit();
  return /**@type {!Array<Align>}*/ ($Arrays.$init([Align.$static_RIGHT__org_pepstock_charba_client_geo_enums_Align, Align.$static_BOTTOM__org_pepstock_charba_client_geo_enums_Align, Align.$static_LEFT__org_pepstock_charba_client_geo_enums_Align, Align.$static_TOP__org_pepstock_charba_client_geo_enums_Align], Align));
 }
 /** @return {!Align} */
 static get f_RIGHT__org_pepstock_charba_client_geo_enums_Align() {
  return (Align.$clinit(), Align.$static_RIGHT__org_pepstock_charba_client_geo_enums_Align);
 }
 /** @return {!Align} */
 static get f_BOTTOM__org_pepstock_charba_client_geo_enums_Align() {
  return (Align.$clinit(), Align.$static_BOTTOM__org_pepstock_charba_client_geo_enums_Align);
 }
 /** @return {!Align} */
 static get f_LEFT__org_pepstock_charba_client_geo_enums_Align() {
  return (Align.$clinit(), Align.$static_LEFT__org_pepstock_charba_client_geo_enums_Align);
 }
 /** @return {!Align} */
 static get f_TOP__org_pepstock_charba_client_geo_enums_Align() {
  return (Align.$clinit(), Align.$static_TOP__org_pepstock_charba_client_geo_enums_Align);
 }
 
 static $clinit() {
  Align.$clinit = () =>{};
  Align.$loadModules();
  Enum.$clinit();
  Align.$static_RIGHT__org_pepstock_charba_client_geo_enums_Align = Align.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RIGHT"), Align.$ordinal_RIGHT__org_pepstock_charba_client_geo_enums_Align, "right");
  Align.$static_BOTTOM__org_pepstock_charba_client_geo_enums_Align = Align.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BOTTOM"), Align.$ordinal_BOTTOM__org_pepstock_charba_client_geo_enums_Align, "bottom");
  Align.$static_LEFT__org_pepstock_charba_client_geo_enums_Align = Align.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LEFT"), Align.$ordinal_LEFT__org_pepstock_charba_client_geo_enums_Align, "left");
  Align.$static_TOP__org_pepstock_charba_client_geo_enums_Align = Align.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TOP"), Align.$ordinal_TOP__org_pepstock_charba_client_geo_enums_Align, "top");
  Align.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_Align_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Align;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Align}*/
Align.$static_RIGHT__org_pepstock_charba_client_geo_enums_Align;
/**@private {!Align}*/
Align.$static_BOTTOM__org_pepstock_charba_client_geo_enums_Align;
/**@private {!Align}*/
Align.$static_LEFT__org_pepstock_charba_client_geo_enums_Align;
/**@private {!Align}*/
Align.$static_TOP__org_pepstock_charba_client_geo_enums_Align;
/**@type {Map<?string, !Align>}*/
Align.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_Align_;
/**@const {number}*/
Align.$ordinal_RIGHT__org_pepstock_charba_client_geo_enums_Align = 0;
/**@const {number}*/
Align.$ordinal_BOTTOM__org_pepstock_charba_client_geo_enums_Align = 1;
/**@const {number}*/
Align.$ordinal_LEFT__org_pepstock_charba_client_geo_enums_Align = 2;
/**@const {number}*/
Align.$ordinal_TOP__org_pepstock_charba_client_geo_enums_Align = 3;
Key.$markImplementor(Align);
$Util.$setClassMetadataForEnum(Align, "org.pepstock.charba.client.geo.enums.Align");

exports = Align;

//# sourceMappingURL=Align.js.map
