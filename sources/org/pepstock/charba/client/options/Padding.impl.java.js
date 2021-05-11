goog.module('org.pepstock.charba.client.options.Padding$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');
const IsPadding = goog.require('org.pepstock.charba.client.options.IsPadding$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let PaddingItem = goog.forwardDeclare('org.pepstock.charba.client.items.PaddingItem$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.Padding.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsPadding}
 */
class Padding extends AbstractNode {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultPadding}*/
  this.f_defaultValues__org_pepstock_charba_client_options_Padding_;
 }
 /** @return {!Padding} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPadding__org_pepstock_charba_client_commons_NativeObject__int(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultPadding */ defaultValues, /** ? */ nativeObject, /** number */ originalPadding) {
  Padding.$clinit();
  let $instance = new Padding();
  $instance.$ctor__org_pepstock_charba_client_options_Padding__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPadding__org_pepstock_charba_client_commons_NativeObject__int(parent, childKey, defaultValues, nativeObject, originalPadding);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Padding__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPadding__org_pepstock_charba_client_commons_NativeObject__int(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultPadding */ defaultValues, /** ? */ nativeObject, /** number */ originalPadding) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(parent, childKey, nativeObject);
  this.f_defaultValues__org_pepstock_charba_client_options_Padding_ = /**@type {IsDefaultPadding}*/ ($Casts.$to(this.m_checkDefaultValuesArgument__java_lang_Object(defaultValues), IsDefaultPadding));
  if (Undefined.m_isNot__int(originalPadding)) {
   this.m_set__int(originalPadding);
  } else if (!$Equality.$same(nativeObject, null)) {
   if (this.m_has__org_pepstock_charba_client_commons_Key(Property.f_X__org_pepstock_charba_client_options_Padding_Property)) {
    this.m_setX__int(this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_X__org_pepstock_charba_client_options_Padding_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined));
    this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_X__org_pepstock_charba_client_options_Padding_Property);
   }
   if (this.m_has__org_pepstock_charba_client_commons_Key(Property.f_Y__org_pepstock_charba_client_options_Padding_Property)) {
    this.m_setX__int(this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_Y__org_pepstock_charba_client_options_Padding_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined));
    this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_Y__org_pepstock_charba_client_options_Padding_Property);
   }
  } else {
   this.m_setDefaultPadding__org_pepstock_charba_client_commons_Key__int_$p_org_pepstock_charba_client_options_Padding(Position.f_TOP__org_pepstock_charba_client_enums_Position, defaultValues.m_getTop__());
   this.m_setDefaultPadding__org_pepstock_charba_client_commons_Key__int_$p_org_pepstock_charba_client_options_Padding(Position.f_BOTTOM__org_pepstock_charba_client_enums_Position, defaultValues.m_getBottom__());
   this.m_setDefaultPadding__org_pepstock_charba_client_commons_Key__int_$p_org_pepstock_charba_client_options_Padding(Position.f_LEFT__org_pepstock_charba_client_enums_Position, defaultValues.m_getLeft__());
   this.m_setDefaultPadding__org_pepstock_charba_client_commons_Key__int_$p_org_pepstock_charba_client_options_Padding(Position.f_RIGHT__org_pepstock_charba_client_enums_Position, defaultValues.m_getRight__());
  }
 }
 /** @override */
 m_setLeft__int(/** number */ padding) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Position.f_LEFT__org_pepstock_charba_client_enums_Position, Checker.m_positiveOrZero__int(padding));
 }
 /** @override @return {number} */
 m_getLeft__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Position.f_LEFT__org_pepstock_charba_client_enums_Position, this.f_defaultValues__org_pepstock_charba_client_options_Padding_.m_getLeft__());
 }
 /** @override */
 m_setRight__int(/** number */ padding) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Position.f_RIGHT__org_pepstock_charba_client_enums_Position, Checker.m_positiveOrZero__int(padding));
 }
 /** @override @return {number} */
 m_getRight__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Position.f_RIGHT__org_pepstock_charba_client_enums_Position, this.f_defaultValues__org_pepstock_charba_client_options_Padding_.m_getRight__());
 }
 /** @override */
 m_setTop__int(/** number */ padding) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Position.f_TOP__org_pepstock_charba_client_enums_Position, Checker.m_positiveOrZero__int(padding));
 }
 /** @override @return {number} */
 m_getTop__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Position.f_TOP__org_pepstock_charba_client_enums_Position, this.f_defaultValues__org_pepstock_charba_client_options_Padding_.m_getTop__());
 }
 /** @override */
 m_setBottom__int(/** number */ padding) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Position.f_BOTTOM__org_pepstock_charba_client_enums_Position, Checker.m_positiveOrZero__int(padding));
 }
 /** @override @return {number} */
 m_getBottom__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Position.f_BOTTOM__org_pepstock_charba_client_enums_Position, this.f_defaultValues__org_pepstock_charba_client_options_Padding_.m_getBottom__());
 }
 
 m_setDefaultPadding__org_pepstock_charba_client_commons_Key__int_$p_org_pepstock_charba_client_options_Padding(/** Key */ key, /** number */ padding) {
  if (Undefined.m_isNot__int(padding)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__int(key, Checker.m_positiveOrZero__int(padding));
  }
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_options() {
  return this.m_getNativeObject__();
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
  Padding.$clinit = () =>{};
  Padding.$loadModules();
  AbstractNode.$clinit();
  IsPadding.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Padding;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  IsDefaultPadding = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.Padding.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsPadding.$markImplementor(Padding);
$Util.$setClassMetadata(Padding, "org.pepstock.charba.client.options.Padding");

exports = Padding;

//# sourceMappingURL=Padding.js.map
