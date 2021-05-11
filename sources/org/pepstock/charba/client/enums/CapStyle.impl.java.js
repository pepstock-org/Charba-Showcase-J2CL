goog.module('org.pepstock.charba.client.enums.CapStyle$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<CapStyle>}
 * @implements {Key}
 */
class CapStyle extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_CapStyle_;
 }
 /** @return {!CapStyle} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new CapStyle();
  $instance.$ctor__org_pepstock_charba_client_enums_CapStyle__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_CapStyle__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_CapStyle_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_CapStyle_;
 }
 /** @return {!CapStyle} */
 static m_valueOf__java_lang_String(/** string */ name) {
  CapStyle.$clinit();
  if ($Equality.$same(CapStyle.f_namesToValuesMap__org_pepstock_charba_client_enums_CapStyle_, null)) {
   CapStyle.f_namesToValuesMap__org_pepstock_charba_client_enums_CapStyle_ = $Enums.createMapFromValues(CapStyle.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, CapStyle.f_namesToValuesMap__org_pepstock_charba_client_enums_CapStyle_);
 }
 /** @return {!Array<!CapStyle>} */
 static m_values__() {
  CapStyle.$clinit();
  return /**@type {!Array<CapStyle>}*/ ($Arrays.$init([CapStyle.$static_BUTT__org_pepstock_charba_client_enums_CapStyle, CapStyle.$static_ROUND__org_pepstock_charba_client_enums_CapStyle, CapStyle.$static_SQUARE__org_pepstock_charba_client_enums_CapStyle], CapStyle));
 }
 /** @return {!CapStyle} */
 static get f_BUTT__org_pepstock_charba_client_enums_CapStyle() {
  return (CapStyle.$clinit(), CapStyle.$static_BUTT__org_pepstock_charba_client_enums_CapStyle);
 }
 /** @return {!CapStyle} */
 static get f_ROUND__org_pepstock_charba_client_enums_CapStyle() {
  return (CapStyle.$clinit(), CapStyle.$static_ROUND__org_pepstock_charba_client_enums_CapStyle);
 }
 /** @return {!CapStyle} */
 static get f_SQUARE__org_pepstock_charba_client_enums_CapStyle() {
  return (CapStyle.$clinit(), CapStyle.$static_SQUARE__org_pepstock_charba_client_enums_CapStyle);
 }
 
 static $clinit() {
  CapStyle.$clinit = () =>{};
  CapStyle.$loadModules();
  Enum.$clinit();
  CapStyle.$static_BUTT__org_pepstock_charba_client_enums_CapStyle = CapStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BUTT"), CapStyle.$ordinal_BUTT__org_pepstock_charba_client_enums_CapStyle, "butt");
  CapStyle.$static_ROUND__org_pepstock_charba_client_enums_CapStyle = CapStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ROUND"), CapStyle.$ordinal_ROUND__org_pepstock_charba_client_enums_CapStyle, "round");
  CapStyle.$static_SQUARE__org_pepstock_charba_client_enums_CapStyle = CapStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SQUARE"), CapStyle.$ordinal_SQUARE__org_pepstock_charba_client_enums_CapStyle, "square");
  CapStyle.f_namesToValuesMap__org_pepstock_charba_client_enums_CapStyle_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CapStyle;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!CapStyle}*/
CapStyle.$static_BUTT__org_pepstock_charba_client_enums_CapStyle;
/**@private {!CapStyle}*/
CapStyle.$static_ROUND__org_pepstock_charba_client_enums_CapStyle;
/**@private {!CapStyle}*/
CapStyle.$static_SQUARE__org_pepstock_charba_client_enums_CapStyle;
/**@type {Map<?string, !CapStyle>}*/
CapStyle.f_namesToValuesMap__org_pepstock_charba_client_enums_CapStyle_;
/**@const {number}*/
CapStyle.$ordinal_BUTT__org_pepstock_charba_client_enums_CapStyle = 0;
/**@const {number}*/
CapStyle.$ordinal_ROUND__org_pepstock_charba_client_enums_CapStyle = 1;
/**@const {number}*/
CapStyle.$ordinal_SQUARE__org_pepstock_charba_client_enums_CapStyle = 2;
Key.$markImplementor(CapStyle);
$Util.$setClassMetadataForEnum(CapStyle, "org.pepstock.charba.client.enums.CapStyle");

exports = CapStyle;

//# sourceMappingURL=CapStyle.js.map
