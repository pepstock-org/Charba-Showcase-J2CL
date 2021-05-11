goog.module('org.pepstock.charba.client.options.Elements$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultElements = goog.require('org.pepstock.charba.client.defaults.IsDefaultElements$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');

let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Arc = goog.forwardDeclare('org.pepstock.charba.client.options.Arc$impl');
let Bar = goog.forwardDeclare('org.pepstock.charba.client.options.Bar$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.Elements.Property$impl');
let Line = goog.forwardDeclare('org.pepstock.charba.client.options.Line$impl');
let Options = goog.forwardDeclare('org.pepstock.charba.client.options.Options$impl');
let Point = goog.forwardDeclare('org.pepstock.charba.client.options.Point$impl');

/**
 * @extends {AbstractModel<Options, IsDefaultElements>}
 * @implements {IsDefaultElements}
 */
class Elements extends AbstractModel {
 /** @protected */
 constructor() {
  super();
  /**@type {Arc}*/
  this.f_arc__org_pepstock_charba_client_options_Elements_;
  /**@type {Line}*/
  this.f_line__org_pepstock_charba_client_options_Elements_;
  /**@type {Point}*/
  this.f_point__org_pepstock_charba_client_options_Elements_;
  /**@type {Bar}*/
  this.f_bar__org_pepstock_charba_client_options_Elements_;
 }
 /** @return {!Elements} */
 static $create__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultElements__org_pepstock_charba_client_commons_NativeObject(/** Options */ options, /** Key */ childKey, /** IsDefaultElements */ defaultValues, /** ? */ nativeObject) {
  Elements.$clinit();
  let $instance = new Elements();
  $instance.$ctor__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultElements__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultElements__org_pepstock_charba_client_commons_NativeObject(/** Options */ options, /** Key */ childKey, /** IsDefaultElements */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
  this.f_arc__org_pepstock_charba_client_options_Elements_ = Arc.$create__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultArc__org_pepstock_charba_client_commons_NativeObject(this, Property.f_ARC__org_pepstock_charba_client_options_Elements_Property, defaultValues.m_getArc__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_ARC__org_pepstock_charba_client_options_Elements_Property));
  this.f_line__org_pepstock_charba_client_options_Elements_ = Line.$create__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultLine__org_pepstock_charba_client_commons_NativeObject(this, Property.f_LINE__org_pepstock_charba_client_options_Elements_Property, defaultValues.m_getLine__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_LINE__org_pepstock_charba_client_options_Elements_Property));
  this.f_point__org_pepstock_charba_client_options_Elements_ = Point.$create__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPoint__org_pepstock_charba_client_commons_NativeObject(this, Property.f_POINT__org_pepstock_charba_client_options_Elements_Property, defaultValues.m_getPoint__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_POINT__org_pepstock_charba_client_options_Elements_Property));
  this.f_bar__org_pepstock_charba_client_options_Elements_ = Bar.$create__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultBar__org_pepstock_charba_client_commons_NativeObject(this, Property.f_BAR__org_pepstock_charba_client_options_Elements_Property, defaultValues.m_getBar__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_BAR__org_pepstock_charba_client_options_Elements_Property));
 }
 /** @override @return {Arc} */
 m_getArc__() {
  return this.f_arc__org_pepstock_charba_client_options_Elements_;
 }
 /** @override @return {Line} */
 m_getLine__() {
  return this.f_line__org_pepstock_charba_client_options_Elements_;
 }
 /** @override @return {Point} */
 m_getPoint__() {
  return this.f_point__org_pepstock_charba_client_options_Elements_;
 }
 /** @override @return {Bar} */
 m_getBar__() {
  return this.f_bar__org_pepstock_charba_client_options_Elements_;
 }
 
 static $clinit() {
  Elements.$clinit = () =>{};
  Elements.$loadModules();
  AbstractModel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Elements;
 }
 
 static $loadModules() {
  Arc = goog.module.get('org.pepstock.charba.client.options.Arc$impl');
  Bar = goog.module.get('org.pepstock.charba.client.options.Bar$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.Elements.Property$impl');
  Line = goog.module.get('org.pepstock.charba.client.options.Line$impl');
  Point = goog.module.get('org.pepstock.charba.client.options.Point$impl');
 }
}
IsDefaultElements.$markImplementor(Elements);
$Util.$setClassMetadata(Elements, "org.pepstock.charba.client.options.Elements");

exports = Elements;

//# sourceMappingURL=Elements.js.map
