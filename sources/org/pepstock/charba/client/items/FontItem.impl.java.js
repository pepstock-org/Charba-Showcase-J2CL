goog.module('org.pepstock.charba.client.items.FontItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractFont = goog.require('org.pepstock.charba.client.options.AbstractFont$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');

class FontItem extends AbstractFont {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'FontItem()'.
 /** @return {!FontItem} */
 static $create__() {
  FontItem.$clinit();
  let $instance = new FontItem();
  $instance.$ctor__org_pepstock_charba_client_items_FontItem__();
  return $instance;
 }
 //Initialization from constructor 'FontItem()'.
 
 $ctor__org_pepstock_charba_client_items_FontItem__() {
  this.$ctor__org_pepstock_charba_client_items_FontItem__org_pepstock_charba_client_defaults_IsDefaultFont(null);
 }
 //Factory method corresponding to constructor 'FontItem(IsDefaultFont)'.
 /** @return {!FontItem} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultFont(/** IsDefaultFont */ defaultValues) {
  FontItem.$clinit();
  let $instance = new FontItem();
  $instance.$ctor__org_pepstock_charba_client_items_FontItem__org_pepstock_charba_client_defaults_IsDefaultFont(defaultValues);
  return $instance;
 }
 //Initialization from constructor 'FontItem(IsDefaultFont)'.
 
 $ctor__org_pepstock_charba_client_items_FontItem__org_pepstock_charba_client_defaults_IsDefaultFont(/** IsDefaultFont */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_options_AbstractFont__org_pepstock_charba_client_defaults_IsDefaultFont($Equality.$same(defaultValues, null) ? Defaults.m_get__().m_getGlobal__().m_getFont__() : defaultValues);
 }
 /** @return {?} */
 m_nativeObject__() {
  return this.m_getObject__();
 }
 
 static $clinit() {
  FontItem.$clinit = () =>{};
  FontItem.$loadModules();
  AbstractFont.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FontItem;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
 }
}
$Util.$setClassMetadata(FontItem, "org.pepstock.charba.client.items.FontItem");

exports = FontItem;

//# sourceMappingURL=FontItem.js.map
