goog.module('org.pepstock.charba.client.options.Arc$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultArc = goog.require('org.pepstock.charba.client.defaults.IsDefaultArc$impl');
const AbstractElement = goog.require('org.pepstock.charba.client.options.AbstractElement$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let BorderAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderAlign$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.Arc.Property$impl');
let Elements = goog.forwardDeclare('org.pepstock.charba.client.options.Elements$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractElement<IsDefaultArc>}
 * @implements {IsDefaultArc}
 */
class Arc extends AbstractElement {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Arc} */
 static $create__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultArc__org_pepstock_charba_client_commons_NativeObject(/** Elements */ elements, /** Key */ childKey, /** IsDefaultArc */ defaultValues, /** ? */ nativeObject) {
  Arc.$clinit();
  let $instance = new Arc();
  $instance.$ctor__org_pepstock_charba_client_options_Arc__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultArc__org_pepstock_charba_client_commons_NativeObject(elements, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Arc__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultArc__org_pepstock_charba_client_commons_NativeObject(/** Elements */ elements, /** Key */ childKey, /** IsDefaultArc */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractElement__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultOptionsElement__org_pepstock_charba_client_commons_NativeObject(elements, childKey, defaultValues, nativeObject);
 }
 
 m_setBorderAlign__org_pepstock_charba_client_enums_BorderAlign(/** BorderAlign */ align) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BORDER_ALIGN__org_pepstock_charba_client_options_Arc_Property, align);
 }
 /** @override @return {BorderAlign} */
 m_getBorderAlign__() {
  return /**@type {BorderAlign}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BORDER_ALIGN__org_pepstock_charba_client_options_Arc_Property, BorderAlign.m_values__(), /**@type {IsDefaultArc}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultArc)).m_getBorderAlign__()), BorderAlign));
 }
 
 m_setWeight__double(/** number */ weight) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_WEIGHT__org_pepstock_charba_client_options_Arc_Property, weight);
 }
 /** @override @return {number} */
 m_getWeight__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_WEIGHT__org_pepstock_charba_client_options_Arc_Property, /**@type {IsDefaultArc}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultArc)).m_getWeight__());
 }
 
 m_setAngle__double(/** number */ angle) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_ANGLE__org_pepstock_charba_client_options_Arc_Property, angle);
 }
 /** @override @return {number} */
 m_getAngle__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_ANGLE__org_pepstock_charba_client_options_Arc_Property, /**@type {IsDefaultArc}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultArc)).m_getAngle__());
 }
 
 m_setOffset__int(/** number */ offset) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_OFFSET__org_pepstock_charba_client_options_Arc_Property, offset);
 }
 /** @override @return {number} */
 m_getOffset__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_OFFSET__org_pepstock_charba_client_options_Arc_Property, /**@type {IsDefaultArc}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultArc)).m_getOffset__());
 }
 
 m_setBorderRadius__int(/** number */ borderRadius) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_RADIUS__org_pepstock_charba_client_options_Arc_Property, Checker.m_positiveOrZero__int(borderRadius));
 }
 /** @override @return {number} */
 m_getBorderRadius__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_RADIUS__org_pepstock_charba_client_options_Arc_Property, /**@type {IsDefaultArc}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultArc)).m_getBorderRadius__());
 }
 
 m_setHoverOffset__int(/** number */ offset) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_HOVER_OFFSET__org_pepstock_charba_client_options_Arc_Property, offset);
 }
 /** @override @return {number} */
 m_getHoverOffset__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_HOVER_OFFSET__org_pepstock_charba_client_options_Arc_Property, /**@type {IsDefaultArc}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultArc)).m_getHoverOffset__());
 }
 
 static $clinit() {
  Arc.$clinit = () =>{};
  Arc.$loadModules();
  AbstractElement.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Arc;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  BorderAlign = goog.module.get('org.pepstock.charba.client.enums.BorderAlign$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.Arc.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultArc.$markImplementor(Arc);
$Util.$setClassMetadata(Arc, "org.pepstock.charba.client.options.Arc");

exports = Arc;

//# sourceMappingURL=Arc.js.map
