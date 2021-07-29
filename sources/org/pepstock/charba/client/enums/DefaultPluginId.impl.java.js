goog.module('org.pepstock.charba.client.enums.DefaultPluginId$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<DefaultPluginId>}
 * @implements {Key}
 */
class DefaultPluginId extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_DefaultPluginId_;
 }
 /** @return {!DefaultPluginId} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new DefaultPluginId();
  $instance.$ctor__org_pepstock_charba_client_enums_DefaultPluginId__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_DefaultPluginId__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_DefaultPluginId_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_DefaultPluginId_;
 }
 /** @return {boolean} */
 static m_is__org_pepstock_charba_client_commons_Key(/** Key */ pluginId) {
  DefaultPluginId.$clinit();
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(pluginId)) {
   return DefaultPluginId.m_is__java_lang_String(pluginId.m_value__());
  }
  return false;
 }
 /** @return {boolean} */
 static m_is__java_lang_String(/** ?string */ pluginId) {
  DefaultPluginId.$clinit();
  return Key.m_hasKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(DefaultPluginId.m_values__(), pluginId);
 }
 /** @return {!DefaultPluginId} */
 static m_valueOf__java_lang_String(/** string */ name) {
  DefaultPluginId.$clinit();
  if ($Equality.$same(DefaultPluginId.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultPluginId_, null)) {
   DefaultPluginId.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultPluginId_ = $Enums.createMapFromValues(DefaultPluginId.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, DefaultPluginId.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultPluginId_);
 }
 /** @return {!Array<!DefaultPluginId>} */
 static m_values__() {
  DefaultPluginId.$clinit();
  return /**@type {!Array<DefaultPluginId>}*/ ($Arrays.$init([DefaultPluginId.$static_LEGEND__org_pepstock_charba_client_enums_DefaultPluginId, DefaultPluginId.$static_FILLER__org_pepstock_charba_client_enums_DefaultPluginId, DefaultPluginId.$static_DECIMATION__org_pepstock_charba_client_enums_DefaultPluginId, DefaultPluginId.$static_TITLE__org_pepstock_charba_client_enums_DefaultPluginId, DefaultPluginId.$static_SUBTITLE__org_pepstock_charba_client_enums_DefaultPluginId, DefaultPluginId.$static_TOOLTIP__org_pepstock_charba_client_enums_DefaultPluginId], DefaultPluginId));
 }
 /** @return {!DefaultPluginId} */
 static get f_LEGEND__org_pepstock_charba_client_enums_DefaultPluginId() {
  return (DefaultPluginId.$clinit(), DefaultPluginId.$static_LEGEND__org_pepstock_charba_client_enums_DefaultPluginId);
 }
 /** @return {!DefaultPluginId} */
 static get f_FILLER__org_pepstock_charba_client_enums_DefaultPluginId() {
  return (DefaultPluginId.$clinit(), DefaultPluginId.$static_FILLER__org_pepstock_charba_client_enums_DefaultPluginId);
 }
 /** @return {!DefaultPluginId} */
 static get f_DECIMATION__org_pepstock_charba_client_enums_DefaultPluginId() {
  return (DefaultPluginId.$clinit(), DefaultPluginId.$static_DECIMATION__org_pepstock_charba_client_enums_DefaultPluginId);
 }
 /** @return {!DefaultPluginId} */
 static get f_TITLE__org_pepstock_charba_client_enums_DefaultPluginId() {
  return (DefaultPluginId.$clinit(), DefaultPluginId.$static_TITLE__org_pepstock_charba_client_enums_DefaultPluginId);
 }
 /** @return {!DefaultPluginId} */
 static get f_SUBTITLE__org_pepstock_charba_client_enums_DefaultPluginId() {
  return (DefaultPluginId.$clinit(), DefaultPluginId.$static_SUBTITLE__org_pepstock_charba_client_enums_DefaultPluginId);
 }
 /** @return {!DefaultPluginId} */
 static get f_TOOLTIP__org_pepstock_charba_client_enums_DefaultPluginId() {
  return (DefaultPluginId.$clinit(), DefaultPluginId.$static_TOOLTIP__org_pepstock_charba_client_enums_DefaultPluginId);
 }
 
 static $clinit() {
  DefaultPluginId.$clinit = () =>{};
  DefaultPluginId.$loadModules();
  Enum.$clinit();
  DefaultPluginId.$static_LEGEND__org_pepstock_charba_client_enums_DefaultPluginId = DefaultPluginId.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LEGEND"), DefaultPluginId.$ordinal_LEGEND__org_pepstock_charba_client_enums_DefaultPluginId, "legend");
  DefaultPluginId.$static_FILLER__org_pepstock_charba_client_enums_DefaultPluginId = DefaultPluginId.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FILLER"), DefaultPluginId.$ordinal_FILLER__org_pepstock_charba_client_enums_DefaultPluginId, "filler");
  DefaultPluginId.$static_DECIMATION__org_pepstock_charba_client_enums_DefaultPluginId = DefaultPluginId.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DECIMATION"), DefaultPluginId.$ordinal_DECIMATION__org_pepstock_charba_client_enums_DefaultPluginId, "decimation");
  DefaultPluginId.$static_TITLE__org_pepstock_charba_client_enums_DefaultPluginId = DefaultPluginId.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TITLE"), DefaultPluginId.$ordinal_TITLE__org_pepstock_charba_client_enums_DefaultPluginId, "title");
  DefaultPluginId.$static_SUBTITLE__org_pepstock_charba_client_enums_DefaultPluginId = DefaultPluginId.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SUBTITLE"), DefaultPluginId.$ordinal_SUBTITLE__org_pepstock_charba_client_enums_DefaultPluginId, "subtitle");
  DefaultPluginId.$static_TOOLTIP__org_pepstock_charba_client_enums_DefaultPluginId = DefaultPluginId.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TOOLTIP"), DefaultPluginId.$ordinal_TOOLTIP__org_pepstock_charba_client_enums_DefaultPluginId, "tooltip");
  DefaultPluginId.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultPluginId_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultPluginId;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!DefaultPluginId}*/
DefaultPluginId.$static_LEGEND__org_pepstock_charba_client_enums_DefaultPluginId;
/**@private {!DefaultPluginId}*/
DefaultPluginId.$static_FILLER__org_pepstock_charba_client_enums_DefaultPluginId;
/**@private {!DefaultPluginId}*/
DefaultPluginId.$static_DECIMATION__org_pepstock_charba_client_enums_DefaultPluginId;
/**@private {!DefaultPluginId}*/
DefaultPluginId.$static_TITLE__org_pepstock_charba_client_enums_DefaultPluginId;
/**@private {!DefaultPluginId}*/
DefaultPluginId.$static_SUBTITLE__org_pepstock_charba_client_enums_DefaultPluginId;
/**@private {!DefaultPluginId}*/
DefaultPluginId.$static_TOOLTIP__org_pepstock_charba_client_enums_DefaultPluginId;
/**@type {Map<?string, !DefaultPluginId>}*/
DefaultPluginId.f_namesToValuesMap__org_pepstock_charba_client_enums_DefaultPluginId_;
/**@const {number}*/
DefaultPluginId.$ordinal_LEGEND__org_pepstock_charba_client_enums_DefaultPluginId = 0;
/**@const {number}*/
DefaultPluginId.$ordinal_FILLER__org_pepstock_charba_client_enums_DefaultPluginId = 1;
/**@const {number}*/
DefaultPluginId.$ordinal_DECIMATION__org_pepstock_charba_client_enums_DefaultPluginId = 2;
/**@const {number}*/
DefaultPluginId.$ordinal_TITLE__org_pepstock_charba_client_enums_DefaultPluginId = 3;
/**@const {number}*/
DefaultPluginId.$ordinal_SUBTITLE__org_pepstock_charba_client_enums_DefaultPluginId = 4;
/**@const {number}*/
DefaultPluginId.$ordinal_TOOLTIP__org_pepstock_charba_client_enums_DefaultPluginId = 5;
Key.$markImplementor(DefaultPluginId);
$Util.$setClassMetadataForEnum(DefaultPluginId, "org.pepstock.charba.client.enums.DefaultPluginId");

exports = DefaultPluginId;

//# sourceMappingURL=DefaultPluginId.js.map
