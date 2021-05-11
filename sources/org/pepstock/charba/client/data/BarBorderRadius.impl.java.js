goog.module('org.pepstock.charba.client.data.BarBorderRadius$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractBarBorderItem = goog.require('org.pepstock.charba.client.data.AbstractBarBorderItem$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let BarBorderRadiusFactory = goog.forwardDeclare('org.pepstock.charba.client.data.BarBorderRadius.BarBorderRadiusFactory$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.data.BarBorderRadius.Property$impl');
let DefaultsBuilder = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');

class BarBorderRadius extends AbstractBarBorderItem {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'BarBorderRadius()'.
 /** @return {!BarBorderRadius} */
 static $create__() {
  BarBorderRadius.$clinit();
  let $instance = new BarBorderRadius();
  $instance.$ctor__org_pepstock_charba_client_data_BarBorderRadius__();
  return $instance;
 }
 //Initialization from constructor 'BarBorderRadius()'.
 
 $ctor__org_pepstock_charba_client_data_BarBorderRadius__() {
  this.$ctor__org_pepstock_charba_client_data_BarBorderRadius__int(DefaultsBuilder.m_get__().m_getOptions__().m_getElements__().m_getBar__().m_getBorderRadius__());
 }
 //Factory method corresponding to constructor 'BarBorderRadius(int)'.
 /** @return {!BarBorderRadius} */
 static $create__int(/** number */ borderRadius) {
  BarBorderRadius.$clinit();
  let $instance = new BarBorderRadius();
  $instance.$ctor__org_pepstock_charba_client_data_BarBorderRadius__int(borderRadius);
  return $instance;
 }
 //Initialization from constructor 'BarBorderRadius(int)'.
 
 $ctor__org_pepstock_charba_client_data_BarBorderRadius__int(/** number */ borderRadius) {
  this.$ctor__org_pepstock_charba_client_data_AbstractBarBorderItem__int(borderRadius);
 }
 //Factory method corresponding to constructor 'BarBorderRadius(NativeObject)'.
 /** @return {!BarBorderRadius} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  BarBorderRadius.$clinit();
  let $instance = new BarBorderRadius();
  $instance.$ctor__org_pepstock_charba_client_data_BarBorderRadius__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'BarBorderRadius(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_data_BarBorderRadius__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_data_AbstractBarBorderItem__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @override @return {List<Key>} */
 m_getKeys___$pp_org_pepstock_charba_client_data() {
  return BarBorderRadius.f_KEYS__org_pepstock_charba_client_data_BarBorderRadius_;
 }
 /** @override */
 m_set__int(/** number */ borderRadius) {
  this.m_setTopLeft__int(borderRadius);
  this.m_setBottomLeft__int(borderRadius);
  this.m_setTopRight__int(borderRadius);
  this.m_setBottomRight__int(borderRadius);
 }
 
 m_setTopLeft__int(/** number */ borderRadius) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_TOP_LEFT__org_pepstock_charba_client_data_BarBorderRadius_Property, Checker.m_positiveOrZero__int(borderRadius));
 }
 /** @return {number} */
 m_getTopLeft__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_TOP_LEFT__org_pepstock_charba_client_data_BarBorderRadius_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getBar__().m_getBorderRadius__());
 }
 
 m_setTopRight__int(/** number */ borderRadius) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_TOP_RIGHT__org_pepstock_charba_client_data_BarBorderRadius_Property, Checker.m_positiveOrZero__int(borderRadius));
 }
 /** @return {number} */
 m_getTopRight__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_TOP_RIGHT__org_pepstock_charba_client_data_BarBorderRadius_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getBar__().m_getBorderRadius__());
 }
 
 m_setBottomLeft__int(/** number */ borderRadius) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_BOTTOM_LEFT__org_pepstock_charba_client_data_BarBorderRadius_Property, Checker.m_positiveOrZero__int(borderRadius));
 }
 /** @return {number} */
 m_getBottomLeft__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BOTTOM_LEFT__org_pepstock_charba_client_data_BarBorderRadius_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getBar__().m_getBorderRadius__());
 }
 
 m_setBottomRight__int(/** number */ borderRadius) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_BOTTOM_RIGHT__org_pepstock_charba_client_data_BarBorderRadius_Property, Checker.m_positiveOrZero__int(borderRadius));
 }
 /** @return {number} */
 m_getBottomRight__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BOTTOM_RIGHT__org_pepstock_charba_client_data_BarBorderRadius_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getBar__().m_getBorderRadius__());
 }
 /** @return {BarBorderRadiusFactory} */
 static get f_FACTORY__org_pepstock_charba_client_data_BarBorderRadius() {
  return (BarBorderRadius.$clinit(), BarBorderRadius.$static_FACTORY__org_pepstock_charba_client_data_BarBorderRadius);
 }
 
 static $clinit() {
  BarBorderRadius.$clinit = () =>{};
  BarBorderRadius.$loadModules();
  AbstractBarBorderItem.$clinit();
  BarBorderRadius.$static_FACTORY__org_pepstock_charba_client_data_BarBorderRadius = BarBorderRadiusFactory.$create__();
  BarBorderRadius.f_KEYS__org_pepstock_charba_client_data_BarBorderRadius_ = /**@type {List<Key>}*/ (Collections.m_unmodifiableList__java_util_List(/**@type {List<Property>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(Property.m_values__()))));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BarBorderRadius;
 }
 
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  BarBorderRadiusFactory = goog.module.get('org.pepstock.charba.client.data.BarBorderRadius.BarBorderRadiusFactory$impl');
  Property = goog.module.get('org.pepstock.charba.client.data.BarBorderRadius.Property$impl');
  DefaultsBuilder = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');
 }
}
/**@private {BarBorderRadiusFactory}*/
BarBorderRadius.$static_FACTORY__org_pepstock_charba_client_data_BarBorderRadius;
/**@type {List<Key>}*/
BarBorderRadius.f_KEYS__org_pepstock_charba_client_data_BarBorderRadius_;
$Util.$setClassMetadata(BarBorderRadius, "org.pepstock.charba.client.data.BarBorderRadius");

exports = BarBorderRadius;

//# sourceMappingURL=BarBorderRadius.js.map
