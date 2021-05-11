goog.module('org.pepstock.charba.client.enums.JoinStyle$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<JoinStyle>}
 * @implements {Key}
 */
class JoinStyle extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_JoinStyle_;
 }
 /** @return {!JoinStyle} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new JoinStyle();
  $instance.$ctor__org_pepstock_charba_client_enums_JoinStyle__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_JoinStyle__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_JoinStyle_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_JoinStyle_;
 }
 /** @return {!JoinStyle} */
 static m_valueOf__java_lang_String(/** string */ name) {
  JoinStyle.$clinit();
  if ($Equality.$same(JoinStyle.f_namesToValuesMap__org_pepstock_charba_client_enums_JoinStyle_, null)) {
   JoinStyle.f_namesToValuesMap__org_pepstock_charba_client_enums_JoinStyle_ = $Enums.createMapFromValues(JoinStyle.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, JoinStyle.f_namesToValuesMap__org_pepstock_charba_client_enums_JoinStyle_);
 }
 /** @return {!Array<!JoinStyle>} */
 static m_values__() {
  JoinStyle.$clinit();
  return /**@type {!Array<JoinStyle>}*/ ($Arrays.$init([JoinStyle.$static_BEVEL__org_pepstock_charba_client_enums_JoinStyle, JoinStyle.$static_ROUND__org_pepstock_charba_client_enums_JoinStyle, JoinStyle.$static_MITER__org_pepstock_charba_client_enums_JoinStyle], JoinStyle));
 }
 /** @return {!JoinStyle} */
 static get f_BEVEL__org_pepstock_charba_client_enums_JoinStyle() {
  return (JoinStyle.$clinit(), JoinStyle.$static_BEVEL__org_pepstock_charba_client_enums_JoinStyle);
 }
 /** @return {!JoinStyle} */
 static get f_ROUND__org_pepstock_charba_client_enums_JoinStyle() {
  return (JoinStyle.$clinit(), JoinStyle.$static_ROUND__org_pepstock_charba_client_enums_JoinStyle);
 }
 /** @return {!JoinStyle} */
 static get f_MITER__org_pepstock_charba_client_enums_JoinStyle() {
  return (JoinStyle.$clinit(), JoinStyle.$static_MITER__org_pepstock_charba_client_enums_JoinStyle);
 }
 
 static $clinit() {
  JoinStyle.$clinit = () =>{};
  JoinStyle.$loadModules();
  Enum.$clinit();
  JoinStyle.$static_BEVEL__org_pepstock_charba_client_enums_JoinStyle = JoinStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEVEL"), JoinStyle.$ordinal_BEVEL__org_pepstock_charba_client_enums_JoinStyle, "bevel");
  JoinStyle.$static_ROUND__org_pepstock_charba_client_enums_JoinStyle = JoinStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ROUND"), JoinStyle.$ordinal_ROUND__org_pepstock_charba_client_enums_JoinStyle, "round");
  JoinStyle.$static_MITER__org_pepstock_charba_client_enums_JoinStyle = JoinStyle.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MITER"), JoinStyle.$ordinal_MITER__org_pepstock_charba_client_enums_JoinStyle, "miter");
  JoinStyle.f_namesToValuesMap__org_pepstock_charba_client_enums_JoinStyle_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JoinStyle;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!JoinStyle}*/
JoinStyle.$static_BEVEL__org_pepstock_charba_client_enums_JoinStyle;
/**@private {!JoinStyle}*/
JoinStyle.$static_ROUND__org_pepstock_charba_client_enums_JoinStyle;
/**@private {!JoinStyle}*/
JoinStyle.$static_MITER__org_pepstock_charba_client_enums_JoinStyle;
/**@type {Map<?string, !JoinStyle>}*/
JoinStyle.f_namesToValuesMap__org_pepstock_charba_client_enums_JoinStyle_;
/**@const {number}*/
JoinStyle.$ordinal_BEVEL__org_pepstock_charba_client_enums_JoinStyle = 0;
/**@const {number}*/
JoinStyle.$ordinal_ROUND__org_pepstock_charba_client_enums_JoinStyle = 1;
/**@const {number}*/
JoinStyle.$ordinal_MITER__org_pepstock_charba_client_enums_JoinStyle = 2;
Key.$markImplementor(JoinStyle);
$Util.$setClassMetadataForEnum(JoinStyle, "org.pepstock.charba.client.enums.JoinStyle");

exports = JoinStyle;

//# sourceMappingURL=JoinStyle.js.map
