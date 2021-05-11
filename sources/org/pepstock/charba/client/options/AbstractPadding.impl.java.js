goog.module('org.pepstock.charba.client.options.AbstractPadding$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
const IsPadding = goog.require('org.pepstock.charba.client.options.IsPadding$impl');

let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let PaddingItem = goog.forwardDeclare('org.pepstock.charba.client.items.PaddingItem$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractPadding.Property$impl');
let Padding = goog.forwardDeclare('org.pepstock.charba.client.options.Padding$impl');

/**
 * @abstract
 * @implements {IsPadding}
 */
class AbstractPadding extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {Padding}*/
  this.f_padding__org_pepstock_charba_client_options_AbstractPadding_;
 }
 //Initialization from constructor 'AbstractPadding(IsDefaultPadding)'.
 
 $ctor__org_pepstock_charba_client_options_AbstractPadding__org_pepstock_charba_client_defaults_IsDefaultPadding(/** IsDefaultPadding */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_options_AbstractPadding__org_pepstock_charba_client_defaults_IsDefaultPadding__org_pepstock_charba_client_commons_NativeObject(defaultValues, null);
 }
 //Initialization from constructor 'AbstractPadding(IsDefaultPadding, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_options_AbstractPadding__org_pepstock_charba_client_defaults_IsDefaultPadding__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultPadding */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_padding__org_pepstock_charba_client_options_AbstractPadding_ = Padding.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPadding__org_pepstock_charba_client_commons_NativeObject__int(null, Property.f_PADDING__org_pepstock_charba_client_options_AbstractPadding_Property, defaultValues, this.m_getNativeObject__(), Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @override */
 m_setLeft__int(/** number */ value) {
  this.f_padding__org_pepstock_charba_client_options_AbstractPadding_.m_setLeft__int(value);
 }
 /** @override @return {number} */
 m_getLeft__() {
  return this.f_padding__org_pepstock_charba_client_options_AbstractPadding_.m_getLeft__();
 }
 /** @override */
 m_setRight__int(/** number */ value) {
  this.f_padding__org_pepstock_charba_client_options_AbstractPadding_.m_setRight__int(value);
 }
 /** @override @return {number} */
 m_getRight__() {
  return this.f_padding__org_pepstock_charba_client_options_AbstractPadding_.m_getRight__();
 }
 /** @override */
 m_setTop__int(/** number */ value) {
  this.f_padding__org_pepstock_charba_client_options_AbstractPadding_.m_setTop__int(value);
 }
 /** @override @return {number} */
 m_getTop__() {
  return this.f_padding__org_pepstock_charba_client_options_AbstractPadding_.m_getTop__();
 }
 /** @override */
 m_setBottom__int(/** number */ value) {
  this.f_padding__org_pepstock_charba_client_options_AbstractPadding_.m_setBottom__int(value);
 }
 /** @override @return {number} */
 m_getBottom__() {
  return this.f_padding__org_pepstock_charba_client_options_AbstractPadding_.m_getBottom__();
 }
 /** @return {?} */
 m_getObject__() {
  return this.f_padding__org_pepstock_charba_client_options_AbstractPadding_.m_nativeObject___$pp_org_pepstock_charba_client_options();
 }
 //Default method forwarding stub.
 /** @override @return {PaddingItem} */
 m_create__() {
  return IsDefaultPadding.m_create__$default__org_pepstock_charba_client_defaults_IsDefaultPadding(this);
 }
 //Default method forwarding stub.
 /** @override @return {PaddingItem} */
 m_create__org_pepstock_charba_client_defaults_IsDefaultPadding(/** IsDefaultPadding */ arg0) {
  return IsDefaultPadding.m_create__$default__org_pepstock_charba_client_defaults_IsDefaultPadding__org_pepstock_charba_client_defaults_IsDefaultPadding(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_set__int(/** number */ arg0) {
  IsPadding.m_set__$default__org_pepstock_charba_client_options_IsPadding__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setX__int(/** number */ arg0) {
  IsPadding.m_setX__$default__org_pepstock_charba_client_options_IsPadding__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setY__int(/** number */ arg0) {
  IsPadding.m_setY__$default__org_pepstock_charba_client_options_IsPadding__int(this, arg0);
 }
 
 static $clinit() {
  AbstractPadding.$clinit = () =>{};
  AbstractPadding.$loadModules();
  NativeObjectContainer.$clinit();
  IsPadding.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractPadding;
 }
 
 static $loadModules() {
  IsDefaultPadding = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.AbstractPadding.Property$impl');
  Padding = goog.module.get('org.pepstock.charba.client.options.Padding$impl');
 }
}
IsPadding.$markImplementor(AbstractPadding);
$Util.$setClassMetadata(AbstractPadding, "org.pepstock.charba.client.options.AbstractPadding");

exports = AbstractPadding;

//# sourceMappingURL=AbstractPadding.js.map
