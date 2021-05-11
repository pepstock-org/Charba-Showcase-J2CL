goog.module('org.pepstock.charba.client.enums.Easing$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Easing>}
 * @implements {Key}
 */
class Easing extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_Easing_;
 }
 /** @return {!Easing} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Easing();
  $instance.$ctor__org_pepstock_charba_client_enums_Easing__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_Easing__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_Easing_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_Easing_;
 }
 /** @return {!Easing} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Easing.$clinit();
  if ($Equality.$same(Easing.f_namesToValuesMap__org_pepstock_charba_client_enums_Easing_, null)) {
   Easing.f_namesToValuesMap__org_pepstock_charba_client_enums_Easing_ = $Enums.createMapFromValues(Easing.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Easing.f_namesToValuesMap__org_pepstock_charba_client_enums_Easing_);
 }
 /** @return {!Array<!Easing>} */
 static m_values__() {
  Easing.$clinit();
  return /**@type {!Array<Easing>}*/ ($Arrays.$init([Easing.$static_LINEAR__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_IN_QUAD__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_OUT_QUAD__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_IN_OUT_QUAD__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_IN_CUBIC__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_OUT_CUBIC__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_IN_OUT_CUBIC__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_IN_QUART__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_OUT_QUART__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_IN_OUT_QUART__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_IN_QUINT__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_OUT_QUINT__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_IN_OUT_QUINT__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_IN_SINE__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_OUT_SINE__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_IN_OUT_SINE__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_IN_EXPO__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_OUT_EXPO__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_IN_OUT_EXPO__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_IN_CIRC__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_OUT_CIRC__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_IN_OUT_CIRC__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_IN_ELASTIC__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_OUT_ELASTIC__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_IN_OUT_ELASTIC__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_IN_BACK__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_OUT_BACK__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_IN_OUT_BACK__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_IN_BOUNCE__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_OUT_BOUNCE__org_pepstock_charba_client_enums_Easing, Easing.$static_EASE_IN_OUT_BOUNCE__org_pepstock_charba_client_enums_Easing], Easing));
 }
 /** @return {!Easing} */
 static get f_LINEAR__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_LINEAR__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_IN_QUAD__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_IN_QUAD__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_OUT_QUAD__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_OUT_QUAD__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_IN_OUT_QUAD__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_IN_OUT_QUAD__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_IN_CUBIC__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_IN_CUBIC__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_OUT_CUBIC__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_OUT_CUBIC__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_IN_OUT_CUBIC__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_IN_OUT_CUBIC__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_IN_QUART__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_IN_QUART__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_OUT_QUART__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_OUT_QUART__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_IN_OUT_QUART__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_IN_OUT_QUART__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_IN_QUINT__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_IN_QUINT__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_OUT_QUINT__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_OUT_QUINT__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_IN_OUT_QUINT__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_IN_OUT_QUINT__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_IN_SINE__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_IN_SINE__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_OUT_SINE__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_OUT_SINE__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_IN_OUT_SINE__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_IN_OUT_SINE__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_IN_EXPO__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_IN_EXPO__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_OUT_EXPO__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_OUT_EXPO__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_IN_OUT_EXPO__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_IN_OUT_EXPO__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_IN_CIRC__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_IN_CIRC__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_OUT_CIRC__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_OUT_CIRC__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_IN_OUT_CIRC__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_IN_OUT_CIRC__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_IN_ELASTIC__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_IN_ELASTIC__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_OUT_ELASTIC__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_OUT_ELASTIC__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_IN_OUT_ELASTIC__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_IN_OUT_ELASTIC__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_IN_BACK__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_IN_BACK__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_OUT_BACK__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_OUT_BACK__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_IN_OUT_BACK__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_IN_OUT_BACK__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_IN_BOUNCE__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_IN_BOUNCE__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_OUT_BOUNCE__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_OUT_BOUNCE__org_pepstock_charba_client_enums_Easing);
 }
 /** @return {!Easing} */
 static get f_EASE_IN_OUT_BOUNCE__org_pepstock_charba_client_enums_Easing() {
  return (Easing.$clinit(), Easing.$static_EASE_IN_OUT_BOUNCE__org_pepstock_charba_client_enums_Easing);
 }
 
 static $clinit() {
  Easing.$clinit = () =>{};
  Easing.$loadModules();
  Enum.$clinit();
  Easing.$static_LINEAR__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LINEAR"), Easing.$ordinal_LINEAR__org_pepstock_charba_client_enums_Easing, "linear");
  Easing.$static_EASE_IN_QUAD__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_IN_QUAD"), Easing.$ordinal_EASE_IN_QUAD__org_pepstock_charba_client_enums_Easing, "easeInQuad");
  Easing.$static_EASE_OUT_QUAD__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_OUT_QUAD"), Easing.$ordinal_EASE_OUT_QUAD__org_pepstock_charba_client_enums_Easing, "easeOutQuad");
  Easing.$static_EASE_IN_OUT_QUAD__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_IN_OUT_QUAD"), Easing.$ordinal_EASE_IN_OUT_QUAD__org_pepstock_charba_client_enums_Easing, "easeInOutQuad");
  Easing.$static_EASE_IN_CUBIC__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_IN_CUBIC"), Easing.$ordinal_EASE_IN_CUBIC__org_pepstock_charba_client_enums_Easing, "easeInCubic");
  Easing.$static_EASE_OUT_CUBIC__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_OUT_CUBIC"), Easing.$ordinal_EASE_OUT_CUBIC__org_pepstock_charba_client_enums_Easing, "easeOutCubic");
  Easing.$static_EASE_IN_OUT_CUBIC__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_IN_OUT_CUBIC"), Easing.$ordinal_EASE_IN_OUT_CUBIC__org_pepstock_charba_client_enums_Easing, "easeInOutCubic");
  Easing.$static_EASE_IN_QUART__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_IN_QUART"), Easing.$ordinal_EASE_IN_QUART__org_pepstock_charba_client_enums_Easing, "easeInQuart");
  Easing.$static_EASE_OUT_QUART__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_OUT_QUART"), Easing.$ordinal_EASE_OUT_QUART__org_pepstock_charba_client_enums_Easing, "easeOutQuart");
  Easing.$static_EASE_IN_OUT_QUART__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_IN_OUT_QUART"), Easing.$ordinal_EASE_IN_OUT_QUART__org_pepstock_charba_client_enums_Easing, "easeInOutQuart");
  Easing.$static_EASE_IN_QUINT__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_IN_QUINT"), Easing.$ordinal_EASE_IN_QUINT__org_pepstock_charba_client_enums_Easing, "easeInQuint");
  Easing.$static_EASE_OUT_QUINT__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_OUT_QUINT"), Easing.$ordinal_EASE_OUT_QUINT__org_pepstock_charba_client_enums_Easing, "easeOutQuint");
  Easing.$static_EASE_IN_OUT_QUINT__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_IN_OUT_QUINT"), Easing.$ordinal_EASE_IN_OUT_QUINT__org_pepstock_charba_client_enums_Easing, "easeInOutQuint");
  Easing.$static_EASE_IN_SINE__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_IN_SINE"), Easing.$ordinal_EASE_IN_SINE__org_pepstock_charba_client_enums_Easing, "easeInSine");
  Easing.$static_EASE_OUT_SINE__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_OUT_SINE"), Easing.$ordinal_EASE_OUT_SINE__org_pepstock_charba_client_enums_Easing, "easeOutSine");
  Easing.$static_EASE_IN_OUT_SINE__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_IN_OUT_SINE"), Easing.$ordinal_EASE_IN_OUT_SINE__org_pepstock_charba_client_enums_Easing, "easeInOutSine");
  Easing.$static_EASE_IN_EXPO__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_IN_EXPO"), Easing.$ordinal_EASE_IN_EXPO__org_pepstock_charba_client_enums_Easing, "easeInExpo");
  Easing.$static_EASE_OUT_EXPO__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_OUT_EXPO"), Easing.$ordinal_EASE_OUT_EXPO__org_pepstock_charba_client_enums_Easing, "easeOutExpo");
  Easing.$static_EASE_IN_OUT_EXPO__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_IN_OUT_EXPO"), Easing.$ordinal_EASE_IN_OUT_EXPO__org_pepstock_charba_client_enums_Easing, "easeInOutExpo");
  Easing.$static_EASE_IN_CIRC__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_IN_CIRC"), Easing.$ordinal_EASE_IN_CIRC__org_pepstock_charba_client_enums_Easing, "easeInCirc");
  Easing.$static_EASE_OUT_CIRC__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_OUT_CIRC"), Easing.$ordinal_EASE_OUT_CIRC__org_pepstock_charba_client_enums_Easing, "easeOutCirc");
  Easing.$static_EASE_IN_OUT_CIRC__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_IN_OUT_CIRC"), Easing.$ordinal_EASE_IN_OUT_CIRC__org_pepstock_charba_client_enums_Easing, "easeInOutCirc");
  Easing.$static_EASE_IN_ELASTIC__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_IN_ELASTIC"), Easing.$ordinal_EASE_IN_ELASTIC__org_pepstock_charba_client_enums_Easing, "easeInElastic");
  Easing.$static_EASE_OUT_ELASTIC__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_OUT_ELASTIC"), Easing.$ordinal_EASE_OUT_ELASTIC__org_pepstock_charba_client_enums_Easing, "easeOutElastic");
  Easing.$static_EASE_IN_OUT_ELASTIC__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_IN_OUT_ELASTIC"), Easing.$ordinal_EASE_IN_OUT_ELASTIC__org_pepstock_charba_client_enums_Easing, "easeInOutElastic");
  Easing.$static_EASE_IN_BACK__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_IN_BACK"), Easing.$ordinal_EASE_IN_BACK__org_pepstock_charba_client_enums_Easing, "easeInBack");
  Easing.$static_EASE_OUT_BACK__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_OUT_BACK"), Easing.$ordinal_EASE_OUT_BACK__org_pepstock_charba_client_enums_Easing, "easeOutBack");
  Easing.$static_EASE_IN_OUT_BACK__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_IN_OUT_BACK"), Easing.$ordinal_EASE_IN_OUT_BACK__org_pepstock_charba_client_enums_Easing, "easeInOutBack");
  Easing.$static_EASE_IN_BOUNCE__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_IN_BOUNCE"), Easing.$ordinal_EASE_IN_BOUNCE__org_pepstock_charba_client_enums_Easing, "easeInBounce");
  Easing.$static_EASE_OUT_BOUNCE__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_OUT_BOUNCE"), Easing.$ordinal_EASE_OUT_BOUNCE__org_pepstock_charba_client_enums_Easing, "easeOutBounce");
  Easing.$static_EASE_IN_OUT_BOUNCE__org_pepstock_charba_client_enums_Easing = Easing.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EASE_IN_OUT_BOUNCE"), Easing.$ordinal_EASE_IN_OUT_BOUNCE__org_pepstock_charba_client_enums_Easing, "easeInOutBounce");
  Easing.f_namesToValuesMap__org_pepstock_charba_client_enums_Easing_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Easing;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Easing}*/
Easing.$static_LINEAR__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_IN_QUAD__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_OUT_QUAD__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_IN_OUT_QUAD__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_IN_CUBIC__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_OUT_CUBIC__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_IN_OUT_CUBIC__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_IN_QUART__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_OUT_QUART__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_IN_OUT_QUART__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_IN_QUINT__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_OUT_QUINT__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_IN_OUT_QUINT__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_IN_SINE__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_OUT_SINE__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_IN_OUT_SINE__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_IN_EXPO__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_OUT_EXPO__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_IN_OUT_EXPO__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_IN_CIRC__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_OUT_CIRC__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_IN_OUT_CIRC__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_IN_ELASTIC__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_OUT_ELASTIC__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_IN_OUT_ELASTIC__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_IN_BACK__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_OUT_BACK__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_IN_OUT_BACK__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_IN_BOUNCE__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_OUT_BOUNCE__org_pepstock_charba_client_enums_Easing;
/**@private {!Easing}*/
Easing.$static_EASE_IN_OUT_BOUNCE__org_pepstock_charba_client_enums_Easing;
/**@type {Map<?string, !Easing>}*/
Easing.f_namesToValuesMap__org_pepstock_charba_client_enums_Easing_;
/**@const {number}*/
Easing.$ordinal_LINEAR__org_pepstock_charba_client_enums_Easing = 0;
/**@const {number}*/
Easing.$ordinal_EASE_IN_QUAD__org_pepstock_charba_client_enums_Easing = 1;
/**@const {number}*/
Easing.$ordinal_EASE_OUT_QUAD__org_pepstock_charba_client_enums_Easing = 2;
/**@const {number}*/
Easing.$ordinal_EASE_IN_OUT_QUAD__org_pepstock_charba_client_enums_Easing = 3;
/**@const {number}*/
Easing.$ordinal_EASE_IN_CUBIC__org_pepstock_charba_client_enums_Easing = 4;
/**@const {number}*/
Easing.$ordinal_EASE_OUT_CUBIC__org_pepstock_charba_client_enums_Easing = 5;
/**@const {number}*/
Easing.$ordinal_EASE_IN_OUT_CUBIC__org_pepstock_charba_client_enums_Easing = 6;
/**@const {number}*/
Easing.$ordinal_EASE_IN_QUART__org_pepstock_charba_client_enums_Easing = 7;
/**@const {number}*/
Easing.$ordinal_EASE_OUT_QUART__org_pepstock_charba_client_enums_Easing = 8;
/**@const {number}*/
Easing.$ordinal_EASE_IN_OUT_QUART__org_pepstock_charba_client_enums_Easing = 9;
/**@const {number}*/
Easing.$ordinal_EASE_IN_QUINT__org_pepstock_charba_client_enums_Easing = 10;
/**@const {number}*/
Easing.$ordinal_EASE_OUT_QUINT__org_pepstock_charba_client_enums_Easing = 11;
/**@const {number}*/
Easing.$ordinal_EASE_IN_OUT_QUINT__org_pepstock_charba_client_enums_Easing = 12;
/**@const {number}*/
Easing.$ordinal_EASE_IN_SINE__org_pepstock_charba_client_enums_Easing = 13;
/**@const {number}*/
Easing.$ordinal_EASE_OUT_SINE__org_pepstock_charba_client_enums_Easing = 14;
/**@const {number}*/
Easing.$ordinal_EASE_IN_OUT_SINE__org_pepstock_charba_client_enums_Easing = 15;
/**@const {number}*/
Easing.$ordinal_EASE_IN_EXPO__org_pepstock_charba_client_enums_Easing = 16;
/**@const {number}*/
Easing.$ordinal_EASE_OUT_EXPO__org_pepstock_charba_client_enums_Easing = 17;
/**@const {number}*/
Easing.$ordinal_EASE_IN_OUT_EXPO__org_pepstock_charba_client_enums_Easing = 18;
/**@const {number}*/
Easing.$ordinal_EASE_IN_CIRC__org_pepstock_charba_client_enums_Easing = 19;
/**@const {number}*/
Easing.$ordinal_EASE_OUT_CIRC__org_pepstock_charba_client_enums_Easing = 20;
/**@const {number}*/
Easing.$ordinal_EASE_IN_OUT_CIRC__org_pepstock_charba_client_enums_Easing = 21;
/**@const {number}*/
Easing.$ordinal_EASE_IN_ELASTIC__org_pepstock_charba_client_enums_Easing = 22;
/**@const {number}*/
Easing.$ordinal_EASE_OUT_ELASTIC__org_pepstock_charba_client_enums_Easing = 23;
/**@const {number}*/
Easing.$ordinal_EASE_IN_OUT_ELASTIC__org_pepstock_charba_client_enums_Easing = 24;
/**@const {number}*/
Easing.$ordinal_EASE_IN_BACK__org_pepstock_charba_client_enums_Easing = 25;
/**@const {number}*/
Easing.$ordinal_EASE_OUT_BACK__org_pepstock_charba_client_enums_Easing = 26;
/**@const {number}*/
Easing.$ordinal_EASE_IN_OUT_BACK__org_pepstock_charba_client_enums_Easing = 27;
/**@const {number}*/
Easing.$ordinal_EASE_IN_BOUNCE__org_pepstock_charba_client_enums_Easing = 28;
/**@const {number}*/
Easing.$ordinal_EASE_OUT_BOUNCE__org_pepstock_charba_client_enums_Easing = 29;
/**@const {number}*/
Easing.$ordinal_EASE_IN_OUT_BOUNCE__org_pepstock_charba_client_enums_Easing = 30;
Key.$markImplementor(Easing);
$Util.$setClassMetadataForEnum(Easing, "org.pepstock.charba.client.enums.Easing");

exports = Easing;

//# sourceMappingURL=Easing.js.map
