goog.module('org.pepstock.charba.client.enums.Render$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Render>}
 * @implements {Key}
 */
class Render extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_Render_;
 }
 /** @return {!Render} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Render();
  $instance.$ctor__org_pepstock_charba_client_enums_Render__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_Render__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_Render_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_Render_;
 }
 /** @return {!Render} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Render.$clinit();
  if ($Equality.$same(Render.f_namesToValuesMap__org_pepstock_charba_client_enums_Render_, null)) {
   Render.f_namesToValuesMap__org_pepstock_charba_client_enums_Render_ = $Enums.createMapFromValues(Render.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Render.f_namesToValuesMap__org_pepstock_charba_client_enums_Render_);
 }
 /** @return {!Array<!Render>} */
 static m_values__() {
  Render.$clinit();
  return /**@type {!Array<Render>}*/ ($Arrays.$init([Render.$static_VALUE__org_pepstock_charba_client_enums_Render, Render.$static_PERCENTAGE__org_pepstock_charba_client_enums_Render, Render.$static_VALUE_AND_LABEL__org_pepstock_charba_client_enums_Render, Render.$static_PERCENTAGE_AND_LABEL__org_pepstock_charba_client_enums_Render, Render.$static_NONE__org_pepstock_charba_client_enums_Render], Render));
 }
 /** @return {!Render} */
 static get f_VALUE__org_pepstock_charba_client_enums_Render() {
  return (Render.$clinit(), Render.$static_VALUE__org_pepstock_charba_client_enums_Render);
 }
 /** @return {!Render} */
 static get f_PERCENTAGE__org_pepstock_charba_client_enums_Render() {
  return (Render.$clinit(), Render.$static_PERCENTAGE__org_pepstock_charba_client_enums_Render);
 }
 /** @return {!Render} */
 static get f_VALUE_AND_LABEL__org_pepstock_charba_client_enums_Render() {
  return (Render.$clinit(), Render.$static_VALUE_AND_LABEL__org_pepstock_charba_client_enums_Render);
 }
 /** @return {!Render} */
 static get f_PERCENTAGE_AND_LABEL__org_pepstock_charba_client_enums_Render() {
  return (Render.$clinit(), Render.$static_PERCENTAGE_AND_LABEL__org_pepstock_charba_client_enums_Render);
 }
 /** @return {!Render} */
 static get f_NONE__org_pepstock_charba_client_enums_Render() {
  return (Render.$clinit(), Render.$static_NONE__org_pepstock_charba_client_enums_Render);
 }
 
 static $clinit() {
  Render.$clinit = () =>{};
  Render.$loadModules();
  Enum.$clinit();
  Render.$static_VALUE__org_pepstock_charba_client_enums_Render = Render.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("VALUE"), Render.$ordinal_VALUE__org_pepstock_charba_client_enums_Render, "value");
  Render.$static_PERCENTAGE__org_pepstock_charba_client_enums_Render = Render.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PERCENTAGE"), Render.$ordinal_PERCENTAGE__org_pepstock_charba_client_enums_Render, "percentage");
  Render.$static_VALUE_AND_LABEL__org_pepstock_charba_client_enums_Render = Render.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("VALUE_AND_LABEL"), Render.$ordinal_VALUE_AND_LABEL__org_pepstock_charba_client_enums_Render, "valueAndLabel");
  Render.$static_PERCENTAGE_AND_LABEL__org_pepstock_charba_client_enums_Render = Render.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PERCENTAGE_AND_LABEL"), Render.$ordinal_PERCENTAGE_AND_LABEL__org_pepstock_charba_client_enums_Render, "percentageAndLabel");
  Render.$static_NONE__org_pepstock_charba_client_enums_Render = Render.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NONE"), Render.$ordinal_NONE__org_pepstock_charba_client_enums_Render, "none");
  Render.f_namesToValuesMap__org_pepstock_charba_client_enums_Render_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Render;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Render}*/
Render.$static_VALUE__org_pepstock_charba_client_enums_Render;
/**@private {!Render}*/
Render.$static_PERCENTAGE__org_pepstock_charba_client_enums_Render;
/**@private {!Render}*/
Render.$static_VALUE_AND_LABEL__org_pepstock_charba_client_enums_Render;
/**@private {!Render}*/
Render.$static_PERCENTAGE_AND_LABEL__org_pepstock_charba_client_enums_Render;
/**@private {!Render}*/
Render.$static_NONE__org_pepstock_charba_client_enums_Render;
/**@type {Map<?string, !Render>}*/
Render.f_namesToValuesMap__org_pepstock_charba_client_enums_Render_;
/**@const {number}*/
Render.$ordinal_VALUE__org_pepstock_charba_client_enums_Render = 0;
/**@const {number}*/
Render.$ordinal_PERCENTAGE__org_pepstock_charba_client_enums_Render = 1;
/**@const {number}*/
Render.$ordinal_VALUE_AND_LABEL__org_pepstock_charba_client_enums_Render = 2;
/**@const {number}*/
Render.$ordinal_PERCENTAGE_AND_LABEL__org_pepstock_charba_client_enums_Render = 3;
/**@const {number}*/
Render.$ordinal_NONE__org_pepstock_charba_client_enums_Render = 4;
Key.$markImplementor(Render);
$Util.$setClassMetadataForEnum(Render, "org.pepstock.charba.client.enums.Render");

exports = Render;

//# sourceMappingURL=Render.js.map
