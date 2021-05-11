goog.module('org.pepstock.charba.client.items.PaddingItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPadding = goog.require('org.pepstock.charba.client.options.AbstractPadding$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let DefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');

class PaddingItem extends AbstractPadding {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'PaddingItem()'.
 /** @return {!PaddingItem} */
 static $create__() {
  PaddingItem.$clinit();
  let $instance = new PaddingItem();
  $instance.$ctor__org_pepstock_charba_client_items_PaddingItem__();
  return $instance;
 }
 //Initialization from constructor 'PaddingItem()'.
 
 $ctor__org_pepstock_charba_client_items_PaddingItem__() {
  this.$ctor__org_pepstock_charba_client_items_PaddingItem__org_pepstock_charba_client_defaults_IsDefaultPadding(null);
 }
 //Factory method corresponding to constructor 'PaddingItem(int)'.
 /** @return {!PaddingItem} */
 static $create__int(/** number */ padding) {
  PaddingItem.$clinit();
  let $instance = new PaddingItem();
  $instance.$ctor__org_pepstock_charba_client_items_PaddingItem__int(padding);
  return $instance;
 }
 //Initialization from constructor 'PaddingItem(int)'.
 
 $ctor__org_pepstock_charba_client_items_PaddingItem__int(/** number */ padding) {
  this.$ctor__org_pepstock_charba_client_items_PaddingItem__org_pepstock_charba_client_defaults_IsDefaultPadding__int(null, padding);
 }
 //Factory method corresponding to constructor 'PaddingItem(IsDefaultPadding)'.
 /** @return {!PaddingItem} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultPadding(/** IsDefaultPadding */ defaultValues) {
  PaddingItem.$clinit();
  let $instance = new PaddingItem();
  $instance.$ctor__org_pepstock_charba_client_items_PaddingItem__org_pepstock_charba_client_defaults_IsDefaultPadding(defaultValues);
  return $instance;
 }
 //Initialization from constructor 'PaddingItem(IsDefaultPadding)'.
 
 $ctor__org_pepstock_charba_client_items_PaddingItem__org_pepstock_charba_client_defaults_IsDefaultPadding(/** IsDefaultPadding */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_options_AbstractPadding__org_pepstock_charba_client_defaults_IsDefaultPadding($Equality.$same(defaultValues, null) ? PaddingItem.f_DEFAULT_PADDING__org_pepstock_charba_client_items_PaddingItem_ : defaultValues);
 }
 //Factory method corresponding to constructor 'PaddingItem(IsDefaultPadding, int)'.
 /** @return {!PaddingItem} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultPadding__int(/** IsDefaultPadding */ defaultValues, /** number */ padding) {
  PaddingItem.$clinit();
  let $instance = new PaddingItem();
  $instance.$ctor__org_pepstock_charba_client_items_PaddingItem__org_pepstock_charba_client_defaults_IsDefaultPadding__int(defaultValues, padding);
  return $instance;
 }
 //Initialization from constructor 'PaddingItem(IsDefaultPadding, int)'.
 
 $ctor__org_pepstock_charba_client_items_PaddingItem__org_pepstock_charba_client_defaults_IsDefaultPadding__int(/** IsDefaultPadding */ defaultValues, /** number */ padding) {
  this.$ctor__org_pepstock_charba_client_items_PaddingItem__org_pepstock_charba_client_defaults_IsDefaultPadding(defaultValues);
  this.m_set__int(Checker.m_positiveOrZero__int(padding));
 }
 /** @return {?} */
 m_nativeObject__() {
  return this.m_getObject__();
 }
 
 static $clinit() {
  PaddingItem.$clinit = () =>{};
  PaddingItem.$loadModules();
  AbstractPadding.$clinit();
  PaddingItem.f_DEFAULT_PADDING__org_pepstock_charba_client_items_PaddingItem_ = DefaultPadding.$create__int(0);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PaddingItem;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  DefaultPadding = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultPadding$impl');
 }
}
/**@type {IsDefaultPadding}*/
PaddingItem.f_DEFAULT_PADDING__org_pepstock_charba_client_items_PaddingItem_;
$Util.$setClassMetadata(PaddingItem, "org.pepstock.charba.client.items.PaddingItem");

exports = PaddingItem;

//# sourceMappingURL=PaddingItem.js.map
