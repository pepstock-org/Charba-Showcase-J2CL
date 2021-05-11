goog.module('org.pepstock.charba.client.options.Layout$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultLayout = goog.require('org.pepstock.charba.client.defaults.IsDefaultLayout$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.Layout.Property$impl');
let Options = goog.forwardDeclare('org.pepstock.charba.client.options.Options$impl');
let Padding = goog.forwardDeclare('org.pepstock.charba.client.options.Padding$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractModel<Options, IsDefaultLayout>}
 * @implements {IsDefaultLayout}
 */
class Layout extends AbstractModel {
 /** @protected */
 constructor() {
  super();
  /**@type {Padding}*/
  this.f_padding__org_pepstock_charba_client_options_Layout_;
 }
 /** @return {!Layout} */
 static $create__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultLayout__org_pepstock_charba_client_commons_NativeObject(/** Options */ options, /** Key */ childKey, /** IsDefaultLayout */ defaultValues, /** ? */ nativeObject) {
  Layout.$clinit();
  let $instance = new Layout();
  $instance.$ctor__org_pepstock_charba_client_options_Layout__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultLayout__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Layout__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultLayout__org_pepstock_charba_client_commons_NativeObject(/** Options */ options, /** Key */ childKey, /** IsDefaultLayout */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
  this.f_padding__org_pepstock_charba_client_options_Layout_ = this.m_loadPadding__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPadding(Property.f_PADDING__org_pepstock_charba_client_options_Layout_Property, /**@type {IsDefaultLayout}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLayout)).m_getPadding__());
 }
 /** @override @return {Padding} */
 m_getPadding__() {
  return this.f_padding__org_pepstock_charba_client_options_Layout_;
 }
 
 static $clinit() {
  Layout.$clinit = () =>{};
  Layout.$loadModules();
  AbstractModel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Layout;
 }
 
 static $loadModules() {
  Property = goog.module.get('org.pepstock.charba.client.options.Layout.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultLayout.$markImplementor(Layout);
$Util.$setClassMetadata(Layout, "org.pepstock.charba.client.options.Layout");

exports = Layout;

//# sourceMappingURL=Layout.js.map
