goog.module('org.pepstock.charba.client.items.NumberFormatItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNumberFormat = goog.require('org.pepstock.charba.client.options.AbstractNumberFormat$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsDefaultNumberFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultNumberFormatOptions$impl');
let DefaultNumberFormatOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultNumberFormatOptions$impl');

class NumberFormatItem extends AbstractNumberFormat {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'NumberFormatItem()'.
 /** @return {!NumberFormatItem} */
 static $create__() {
  NumberFormatItem.$clinit();
  let $instance = new NumberFormatItem();
  $instance.$ctor__org_pepstock_charba_client_items_NumberFormatItem__();
  return $instance;
 }
 //Initialization from constructor 'NumberFormatItem()'.
 
 $ctor__org_pepstock_charba_client_items_NumberFormatItem__() {
  this.$ctor__org_pepstock_charba_client_items_NumberFormatItem__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions(null);
 }
 //Factory method corresponding to constructor 'NumberFormatItem(IsDefaultNumberFormatOptions)'.
 /** @return {!NumberFormatItem} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions(/** IsDefaultNumberFormatOptions */ defaultValues) {
  NumberFormatItem.$clinit();
  let $instance = new NumberFormatItem();
  $instance.$ctor__org_pepstock_charba_client_items_NumberFormatItem__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions(defaultValues);
  return $instance;
 }
 //Initialization from constructor 'NumberFormatItem(IsDefaultNumberFormatOptions)'.
 
 $ctor__org_pepstock_charba_client_items_NumberFormatItem__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions(/** IsDefaultNumberFormatOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_options_AbstractNumberFormat__org_pepstock_charba_client_defaults_IsDefaultNumberFormatOptions($Equality.$same(defaultValues, null) ? DefaultNumberFormatOptions.$create__() : defaultValues);
 }
 /** @return {?} */
 m_nativeObject__() {
  return this.m_getNativeObject__();
 }
 
 static $clinit() {
  NumberFormatItem.$clinit = () =>{};
  NumberFormatItem.$loadModules();
  AbstractNumberFormat.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NumberFormatItem;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DefaultNumberFormatOptions = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultNumberFormatOptions$impl');
 }
}
$Util.$setClassMetadata(NumberFormatItem, "org.pepstock.charba.client.items.NumberFormatItem");

exports = NumberFormatItem;

//# sourceMappingURL=NumberFormatItem.js.map
