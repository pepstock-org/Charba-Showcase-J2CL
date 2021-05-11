goog.module('org.pepstock.charba.client.options.Filler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultFiller = goog.require('org.pepstock.charba.client.defaults.IsDefaultFiller$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let DrawTime = goog.forwardDeclare('org.pepstock.charba.client.enums.DrawTime$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.Filler.Property$impl');
let Plugins = goog.forwardDeclare('org.pepstock.charba.client.options.Plugins$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractModel<Plugins, IsDefaultFiller>}
 * @implements {IsDefaultFiller}
 */
class Filler extends AbstractModel {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Filler} */
 static $create__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultFiller__org_pepstock_charba_client_commons_NativeObject(/** Plugins */ options, /** Key */ childKey, /** IsDefaultFiller */ defaultValues, /** ? */ nativeObject) {
  Filler.$clinit();
  let $instance = new Filler();
  $instance.$ctor__org_pepstock_charba_client_options_Filler__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultFiller__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Filler__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultFiller__org_pepstock_charba_client_commons_NativeObject(/** Plugins */ options, /** Key */ childKey, /** IsDefaultFiller */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
 }
 
 m_setPropagate__boolean(/** boolean */ propagate) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_PROPAGATE__org_pepstock_charba_client_options_Filler_Property, propagate);
 }
 /** @override @return {boolean} */
 m_isPropagate__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_PROPAGATE__org_pepstock_charba_client_options_Filler_Property, /**@type {IsDefaultFiller}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultFiller)).m_isPropagate__());
 }
 
 m_setDrawTime__org_pepstock_charba_client_enums_DrawTime(/** DrawTime */ drawTime) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_DRAW_TIME__org_pepstock_charba_client_options_Filler_Property, drawTime);
 }
 /** @override @return {DrawTime} */
 m_getDrawTime__() {
  return /**@type {DrawTime}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_DRAW_TIME__org_pepstock_charba_client_options_Filler_Property, DrawTime.m_values__(), /**@type {IsDefaultFiller}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultFiller)).m_getDrawTime__()), DrawTime));
 }
 
 static $clinit() {
  Filler.$clinit = () =>{};
  Filler.$loadModules();
  AbstractModel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Filler;
 }
 
 static $loadModules() {
  DrawTime = goog.module.get('org.pepstock.charba.client.enums.DrawTime$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.Filler.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultFiller.$markImplementor(Filler);
$Util.$setClassMetadata(Filler, "org.pepstock.charba.client.options.Filler");

exports = Filler;

//# sourceMappingURL=Filler.js.map
