goog.module('org.pepstock.charba.client.dom.enums.GlobalCompositeOperation$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<GlobalCompositeOperation>}
 * @implements {Key}
 */
class GlobalCompositeOperation extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation_;
 }
 /** @return {!GlobalCompositeOperation} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new GlobalCompositeOperation();
  $instance.$ctor__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation_;
 }
 /** @return {!GlobalCompositeOperation} */
 static m_valueOf__java_lang_String(/** string */ name) {
  GlobalCompositeOperation.$clinit();
  if ($Equality.$same(GlobalCompositeOperation.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation_, null)) {
   GlobalCompositeOperation.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation_ = $Enums.createMapFromValues(GlobalCompositeOperation.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, GlobalCompositeOperation.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation_);
 }
 /** @return {!Array<!GlobalCompositeOperation>} */
 static m_values__() {
  GlobalCompositeOperation.$clinit();
  return /**@type {!Array<GlobalCompositeOperation>}*/ ($Arrays.$init([GlobalCompositeOperation.$static_SOURCE_OVER__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_SOURCE_IN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_SOURCE_OUT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_SOURCE_ATOP__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_DESTINATION_OVER__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_DESTINATION_IN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_DESTINATION_OUT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_DESTINATION_ATOP__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_LIGHTER__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_COPY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_XOR__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_MULTIPLY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_SCREEN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_OVERLAY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_DARKEN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_LIGHTEN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_COLOR_DODGE__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_COLOR_BURN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_HARD_LIGHT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_SOFT_LIGHT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_DIFFERENCE__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_EXCLUSION__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_HUE__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_SATURATION__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_COLOR__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, GlobalCompositeOperation.$static_LUMINOSITY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation], GlobalCompositeOperation));
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_SOURCE_OVER__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_SOURCE_OVER__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_SOURCE_IN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_SOURCE_IN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_SOURCE_OUT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_SOURCE_OUT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_SOURCE_ATOP__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_SOURCE_ATOP__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_DESTINATION_OVER__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_DESTINATION_OVER__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_DESTINATION_IN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_DESTINATION_IN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_DESTINATION_OUT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_DESTINATION_OUT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_DESTINATION_ATOP__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_DESTINATION_ATOP__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_LIGHTER__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_LIGHTER__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_COPY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_COPY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_XOR__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_XOR__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_MULTIPLY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_MULTIPLY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_SCREEN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_SCREEN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_OVERLAY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_OVERLAY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_DARKEN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_DARKEN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_LIGHTEN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_LIGHTEN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_COLOR_DODGE__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_COLOR_DODGE__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_COLOR_BURN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_COLOR_BURN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_HARD_LIGHT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_HARD_LIGHT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_SOFT_LIGHT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_SOFT_LIGHT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_DIFFERENCE__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_DIFFERENCE__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_EXCLUSION__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_EXCLUSION__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_HUE__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_HUE__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_SATURATION__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_SATURATION__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_COLOR__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_COLOR__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 /** @return {!GlobalCompositeOperation} */
 static get f_LUMINOSITY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation() {
  return (GlobalCompositeOperation.$clinit(), GlobalCompositeOperation.$static_LUMINOSITY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation);
 }
 
 static $clinit() {
  GlobalCompositeOperation.$clinit = () =>{};
  GlobalCompositeOperation.$loadModules();
  Enum.$clinit();
  GlobalCompositeOperation.$static_SOURCE_OVER__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SOURCE_OVER"), GlobalCompositeOperation.$ordinal_SOURCE_OVER__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "source-over");
  GlobalCompositeOperation.$static_SOURCE_IN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SOURCE_IN"), GlobalCompositeOperation.$ordinal_SOURCE_IN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "source-in");
  GlobalCompositeOperation.$static_SOURCE_OUT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SOURCE_OUT"), GlobalCompositeOperation.$ordinal_SOURCE_OUT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "source-out");
  GlobalCompositeOperation.$static_SOURCE_ATOP__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SOURCE_ATOP"), GlobalCompositeOperation.$ordinal_SOURCE_ATOP__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "source-atop");
  GlobalCompositeOperation.$static_DESTINATION_OVER__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DESTINATION_OVER"), GlobalCompositeOperation.$ordinal_DESTINATION_OVER__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "destination-over");
  GlobalCompositeOperation.$static_DESTINATION_IN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DESTINATION_IN"), GlobalCompositeOperation.$ordinal_DESTINATION_IN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "destination-in");
  GlobalCompositeOperation.$static_DESTINATION_OUT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DESTINATION_OUT"), GlobalCompositeOperation.$ordinal_DESTINATION_OUT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "destination-out");
  GlobalCompositeOperation.$static_DESTINATION_ATOP__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DESTINATION_ATOP"), GlobalCompositeOperation.$ordinal_DESTINATION_ATOP__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "destination-atop");
  GlobalCompositeOperation.$static_LIGHTER__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIGHTER"), GlobalCompositeOperation.$ordinal_LIGHTER__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "lighter");
  GlobalCompositeOperation.$static_COPY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COPY"), GlobalCompositeOperation.$ordinal_COPY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "copy");
  GlobalCompositeOperation.$static_XOR__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("XOR"), GlobalCompositeOperation.$ordinal_XOR__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "xor");
  GlobalCompositeOperation.$static_MULTIPLY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MULTIPLY"), GlobalCompositeOperation.$ordinal_MULTIPLY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "multiply");
  GlobalCompositeOperation.$static_SCREEN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SCREEN"), GlobalCompositeOperation.$ordinal_SCREEN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "screen");
  GlobalCompositeOperation.$static_OVERLAY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OVERLAY"), GlobalCompositeOperation.$ordinal_OVERLAY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "overlay");
  GlobalCompositeOperation.$static_DARKEN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DARKEN"), GlobalCompositeOperation.$ordinal_DARKEN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "darken");
  GlobalCompositeOperation.$static_LIGHTEN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIGHTEN"), GlobalCompositeOperation.$ordinal_LIGHTEN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "lighten");
  GlobalCompositeOperation.$static_COLOR_DODGE__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_DODGE"), GlobalCompositeOperation.$ordinal_COLOR_DODGE__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "color-dodge");
  GlobalCompositeOperation.$static_COLOR_BURN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR_BURN"), GlobalCompositeOperation.$ordinal_COLOR_BURN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "color-burn");
  GlobalCompositeOperation.$static_HARD_LIGHT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HARD_LIGHT"), GlobalCompositeOperation.$ordinal_HARD_LIGHT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "hard-light");
  GlobalCompositeOperation.$static_SOFT_LIGHT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SOFT_LIGHT"), GlobalCompositeOperation.$ordinal_SOFT_LIGHT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "soft-light");
  GlobalCompositeOperation.$static_DIFFERENCE__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DIFFERENCE"), GlobalCompositeOperation.$ordinal_DIFFERENCE__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "difference");
  GlobalCompositeOperation.$static_EXCLUSION__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EXCLUSION"), GlobalCompositeOperation.$ordinal_EXCLUSION__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "exclusion");
  GlobalCompositeOperation.$static_HUE__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HUE"), GlobalCompositeOperation.$ordinal_HUE__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "hue");
  GlobalCompositeOperation.$static_SATURATION__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SATURATION"), GlobalCompositeOperation.$ordinal_SATURATION__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "saturation");
  GlobalCompositeOperation.$static_COLOR__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COLOR"), GlobalCompositeOperation.$ordinal_COLOR__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "color");
  GlobalCompositeOperation.$static_LUMINOSITY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = GlobalCompositeOperation.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LUMINOSITY"), GlobalCompositeOperation.$ordinal_LUMINOSITY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation, "luminosity");
  GlobalCompositeOperation.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GlobalCompositeOperation;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_SOURCE_OVER__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_SOURCE_IN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_SOURCE_OUT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_SOURCE_ATOP__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_DESTINATION_OVER__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_DESTINATION_IN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_DESTINATION_OUT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_DESTINATION_ATOP__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_LIGHTER__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_COPY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_XOR__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_MULTIPLY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_SCREEN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_OVERLAY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_DARKEN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_LIGHTEN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_COLOR_DODGE__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_COLOR_BURN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_HARD_LIGHT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_SOFT_LIGHT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_DIFFERENCE__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_EXCLUSION__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_HUE__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_SATURATION__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_COLOR__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@private {!GlobalCompositeOperation}*/
GlobalCompositeOperation.$static_LUMINOSITY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation;
/**@type {Map<?string, !GlobalCompositeOperation>}*/
GlobalCompositeOperation.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation_;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_SOURCE_OVER__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 0;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_SOURCE_IN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 1;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_SOURCE_OUT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 2;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_SOURCE_ATOP__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 3;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_DESTINATION_OVER__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 4;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_DESTINATION_IN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 5;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_DESTINATION_OUT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 6;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_DESTINATION_ATOP__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 7;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_LIGHTER__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 8;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_COPY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 9;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_XOR__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 10;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_MULTIPLY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 11;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_SCREEN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 12;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_OVERLAY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 13;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_DARKEN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 14;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_LIGHTEN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 15;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_COLOR_DODGE__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 16;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_COLOR_BURN__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 17;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_HARD_LIGHT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 18;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_SOFT_LIGHT__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 19;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_DIFFERENCE__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 20;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_EXCLUSION__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 21;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_HUE__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 22;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_SATURATION__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 23;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_COLOR__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 24;
/**@const {number}*/
GlobalCompositeOperation.$ordinal_LUMINOSITY__org_pepstock_charba_client_dom_enums_GlobalCompositeOperation = 25;
Key.$markImplementor(GlobalCompositeOperation);
$Util.$setClassMetadataForEnum(GlobalCompositeOperation, "org.pepstock.charba.client.dom.enums.GlobalCompositeOperation");

exports = GlobalCompositeOperation;

//# sourceMappingURL=GlobalCompositeOperation.js.map
