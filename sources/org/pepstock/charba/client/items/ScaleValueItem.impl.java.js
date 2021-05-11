goog.module('org.pepstock.charba.client.items.ScaleValueItem$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Date = goog.forwardDeclare('java.util.Date$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ImmutableDate = goog.forwardDeclare('org.pepstock.charba.client.commons.ImmutableDate$impl');
let ScaleDataType = goog.forwardDeclare('org.pepstock.charba.client.enums.ScaleDataType$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class ScaleValueItem extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_value__org_pepstock_charba_client_items_ScaleValueItem_ = 0;
  /**@type {ImmutableDate}*/
  this.f_valueAsDate__org_pepstock_charba_client_items_ScaleValueItem_;
  /**@type {?string}*/
  this.f_valueAsString__org_pepstock_charba_client_items_ScaleValueItem_;
  /**@type {ScaleDataType}*/
  this.f_dataType__org_pepstock_charba_client_items_ScaleValueItem_;
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_client_items_ScaleValueItem_;
 }
 //Factory method corresponding to constructor 'ScaleValueItem(String, String)'.
 /** @return {!ScaleValueItem} */
 static $create__java_lang_String__java_lang_String(/** ?string */ value, /** ?string */ label) {
  ScaleValueItem.$clinit();
  let $instance = new ScaleValueItem();
  $instance.$ctor__org_pepstock_charba_client_items_ScaleValueItem__java_lang_String__java_lang_String(value, label);
  return $instance;
 }
 //Initialization from constructor 'ScaleValueItem(String, String)'.
 
 $ctor__org_pepstock_charba_client_items_ScaleValueItem__java_lang_String__java_lang_String(/** ?string */ value, /** ?string */ label) {
  this.$ctor__java_lang_Object__();
  this.f_value__org_pepstock_charba_client_items_ScaleValueItem_ = Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
  this.f_valueAsDate__org_pepstock_charba_client_items_ScaleValueItem_ = null;
  this.f_valueAsString__org_pepstock_charba_client_items_ScaleValueItem_ = value;
  this.f_dataType__org_pepstock_charba_client_items_ScaleValueItem_ = ScaleDataType.f_STRING__org_pepstock_charba_client_enums_ScaleDataType;
  this.f_label__org_pepstock_charba_client_items_ScaleValueItem_ = label;
 }
 //Factory method corresponding to constructor 'ScaleValueItem(ImmutableDate, String)'.
 /** @return {!ScaleValueItem} */
 static $create__org_pepstock_charba_client_commons_ImmutableDate__java_lang_String(/** ImmutableDate */ value, /** ?string */ label) {
  ScaleValueItem.$clinit();
  let $instance = new ScaleValueItem();
  $instance.$ctor__org_pepstock_charba_client_items_ScaleValueItem__org_pepstock_charba_client_commons_ImmutableDate__java_lang_String(value, label);
  return $instance;
 }
 //Initialization from constructor 'ScaleValueItem(ImmutableDate, String)'.
 
 $ctor__org_pepstock_charba_client_items_ScaleValueItem__org_pepstock_charba_client_commons_ImmutableDate__java_lang_String(/** ImmutableDate */ value, /** ?string */ label) {
  this.$ctor__java_lang_Object__();
  this.f_value__org_pepstock_charba_client_items_ScaleValueItem_ = !$Equality.$same(value, null) ? $Primitives.$widenLongToDouble(value.m_getTime__()) : Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
  this.f_valueAsDate__org_pepstock_charba_client_items_ScaleValueItem_ = value;
  this.f_valueAsString__org_pepstock_charba_client_items_ScaleValueItem_ = label;
  this.f_dataType__org_pepstock_charba_client_items_ScaleValueItem_ = ScaleDataType.f_DATE__org_pepstock_charba_client_enums_ScaleDataType;
  this.f_label__org_pepstock_charba_client_items_ScaleValueItem_ = label;
 }
 //Factory method corresponding to constructor 'ScaleValueItem(double, String)'.
 /** @return {!ScaleValueItem} */
 static $create__double__java_lang_String(/** number */ value, /** ?string */ label) {
  ScaleValueItem.$clinit();
  let $instance = new ScaleValueItem();
  $instance.$ctor__org_pepstock_charba_client_items_ScaleValueItem__double__java_lang_String(value, label);
  return $instance;
 }
 //Initialization from constructor 'ScaleValueItem(double, String)'.
 
 $ctor__org_pepstock_charba_client_items_ScaleValueItem__double__java_lang_String(/** number */ value, /** ?string */ label) {
  this.$ctor__java_lang_Object__();
  this.f_value__org_pepstock_charba_client_items_ScaleValueItem_ = value;
  this.f_valueAsDate__org_pepstock_charba_client_items_ScaleValueItem_ = null;
  this.f_valueAsString__org_pepstock_charba_client_items_ScaleValueItem_ = label;
  this.f_dataType__org_pepstock_charba_client_items_ScaleValueItem_ = ScaleDataType.f_NUMBER__org_pepstock_charba_client_enums_ScaleDataType;
  this.f_label__org_pepstock_charba_client_items_ScaleValueItem_ = label;
 }
 /** @return {ScaleDataType} */
 m_getDataType__() {
  return this.f_dataType__org_pepstock_charba_client_items_ScaleValueItem_;
 }
 /** @return {number} */
 m_getValue__() {
  return this.f_value__org_pepstock_charba_client_items_ScaleValueItem_;
 }
 /** @return {Date} */
 m_getValueAsDate__() {
  return this.f_valueAsDate__org_pepstock_charba_client_items_ScaleValueItem_;
 }
 /** @return {?string} */
 m_getValueAsString__() {
  return this.f_valueAsString__org_pepstock_charba_client_items_ScaleValueItem_;
 }
 /** @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_client_items_ScaleValueItem_;
 }
 
 static $clinit() {
  ScaleValueItem.$clinit = () =>{};
  ScaleValueItem.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScaleValueItem;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ScaleDataType = goog.module.get('org.pepstock.charba.client.enums.ScaleDataType$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
$Util.$setClassMetadata(ScaleValueItem, "org.pepstock.charba.client.items.ScaleValueItem");

exports = ScaleValueItem;

//# sourceMappingURL=ScaleValueItem.js.map
