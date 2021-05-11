goog.module('org.pepstock.charba.client.enums.CrossAlign$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<CrossAlign>}
 * @implements {Key}
 */
class CrossAlign extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_CrossAlign_;
 }
 /** @return {!CrossAlign} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new CrossAlign();
  $instance.$ctor__org_pepstock_charba_client_enums_CrossAlign__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_CrossAlign__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_CrossAlign_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_CrossAlign_;
 }
 /** @return {!CrossAlign} */
 static m_valueOf__java_lang_String(/** string */ name) {
  CrossAlign.$clinit();
  if ($Equality.$same(CrossAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_CrossAlign_, null)) {
   CrossAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_CrossAlign_ = $Enums.createMapFromValues(CrossAlign.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, CrossAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_CrossAlign_);
 }
 /** @return {!Array<!CrossAlign>} */
 static m_values__() {
  CrossAlign.$clinit();
  return /**@type {!Array<CrossAlign>}*/ ($Arrays.$init([CrossAlign.$static_NEAR__org_pepstock_charba_client_enums_CrossAlign, CrossAlign.$static_CENTER__org_pepstock_charba_client_enums_CrossAlign, CrossAlign.$static_FAR__org_pepstock_charba_client_enums_CrossAlign], CrossAlign));
 }
 /** @return {!CrossAlign} */
 static get f_NEAR__org_pepstock_charba_client_enums_CrossAlign() {
  return (CrossAlign.$clinit(), CrossAlign.$static_NEAR__org_pepstock_charba_client_enums_CrossAlign);
 }
 /** @return {!CrossAlign} */
 static get f_CENTER__org_pepstock_charba_client_enums_CrossAlign() {
  return (CrossAlign.$clinit(), CrossAlign.$static_CENTER__org_pepstock_charba_client_enums_CrossAlign);
 }
 /** @return {!CrossAlign} */
 static get f_FAR__org_pepstock_charba_client_enums_CrossAlign() {
  return (CrossAlign.$clinit(), CrossAlign.$static_FAR__org_pepstock_charba_client_enums_CrossAlign);
 }
 
 static $clinit() {
  CrossAlign.$clinit = () =>{};
  CrossAlign.$loadModules();
  Enum.$clinit();
  CrossAlign.$static_NEAR__org_pepstock_charba_client_enums_CrossAlign = CrossAlign.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NEAR"), CrossAlign.$ordinal_NEAR__org_pepstock_charba_client_enums_CrossAlign, "near");
  CrossAlign.$static_CENTER__org_pepstock_charba_client_enums_CrossAlign = CrossAlign.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CENTER"), CrossAlign.$ordinal_CENTER__org_pepstock_charba_client_enums_CrossAlign, "center");
  CrossAlign.$static_FAR__org_pepstock_charba_client_enums_CrossAlign = CrossAlign.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FAR"), CrossAlign.$ordinal_FAR__org_pepstock_charba_client_enums_CrossAlign, "far");
  CrossAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_CrossAlign_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CrossAlign;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!CrossAlign}*/
CrossAlign.$static_NEAR__org_pepstock_charba_client_enums_CrossAlign;
/**@private {!CrossAlign}*/
CrossAlign.$static_CENTER__org_pepstock_charba_client_enums_CrossAlign;
/**@private {!CrossAlign}*/
CrossAlign.$static_FAR__org_pepstock_charba_client_enums_CrossAlign;
/**@type {Map<?string, !CrossAlign>}*/
CrossAlign.f_namesToValuesMap__org_pepstock_charba_client_enums_CrossAlign_;
/**@const {number}*/
CrossAlign.$ordinal_NEAR__org_pepstock_charba_client_enums_CrossAlign = 0;
/**@const {number}*/
CrossAlign.$ordinal_CENTER__org_pepstock_charba_client_enums_CrossAlign = 1;
/**@const {number}*/
CrossAlign.$ordinal_FAR__org_pepstock_charba_client_enums_CrossAlign = 2;
Key.$markImplementor(CrossAlign);
$Util.$setClassMetadataForEnum(CrossAlign, "org.pepstock.charba.client.enums.CrossAlign");

exports = CrossAlign;

//# sourceMappingURL=CrossAlign.js.map
