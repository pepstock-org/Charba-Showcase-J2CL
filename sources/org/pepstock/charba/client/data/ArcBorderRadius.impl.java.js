goog.module('org.pepstock.charba.client.data.ArcBorderRadius$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractBarBorderItem = goog.require('org.pepstock.charba.client.data.AbstractBarBorderItem$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ArcBorderRadiusFactory = goog.forwardDeclare('org.pepstock.charba.client.data.ArcBorderRadius.ArcBorderRadiusFactory$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.data.ArcBorderRadius.Property$impl');
let DefaultsBuilder = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');

class ArcBorderRadius extends AbstractBarBorderItem {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'ArcBorderRadius()'.
 /** @return {!ArcBorderRadius} */
 static $create__() {
  ArcBorderRadius.$clinit();
  let $instance = new ArcBorderRadius();
  $instance.$ctor__org_pepstock_charba_client_data_ArcBorderRadius__();
  return $instance;
 }
 //Initialization from constructor 'ArcBorderRadius()'.
 
 $ctor__org_pepstock_charba_client_data_ArcBorderRadius__() {
  this.$ctor__org_pepstock_charba_client_data_ArcBorderRadius__int(DefaultsBuilder.m_get__().m_getOptions__().m_getElements__().m_getBar__().m_getBorderRadius__());
 }
 //Factory method corresponding to constructor 'ArcBorderRadius(int)'.
 /** @return {!ArcBorderRadius} */
 static $create__int(/** number */ borderRadius) {
  ArcBorderRadius.$clinit();
  let $instance = new ArcBorderRadius();
  $instance.$ctor__org_pepstock_charba_client_data_ArcBorderRadius__int(borderRadius);
  return $instance;
 }
 //Initialization from constructor 'ArcBorderRadius(int)'.
 
 $ctor__org_pepstock_charba_client_data_ArcBorderRadius__int(/** number */ borderRadius) {
  this.$ctor__org_pepstock_charba_client_data_AbstractBarBorderItem__int(borderRadius);
 }
 //Factory method corresponding to constructor 'ArcBorderRadius(NativeObject)'.
 /** @return {!ArcBorderRadius} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  ArcBorderRadius.$clinit();
  let $instance = new ArcBorderRadius();
  $instance.$ctor__org_pepstock_charba_client_data_ArcBorderRadius__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'ArcBorderRadius(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_data_ArcBorderRadius__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_data_AbstractBarBorderItem__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @override @return {List<Key>} */
 m_getKeys___$pp_org_pepstock_charba_client_data() {
  return ArcBorderRadius.f_KEYS__org_pepstock_charba_client_data_ArcBorderRadius_;
 }
 /** @override */
 m_set__int(/** number */ borderRadius) {
  this.m_setOuterStart__int(borderRadius);
  this.m_setOuterEnd__int(borderRadius);
  this.m_setInnerStart__int(borderRadius);
  this.m_setInnerEnd__int(borderRadius);
 }
 
 m_setOuterStart__int(/** number */ borderRadius) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_OUTER_START__org_pepstock_charba_client_data_ArcBorderRadius_Property, Checker.m_positiveOrZero__int(borderRadius));
 }
 /** @return {number} */
 m_getOuterStart__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_OUTER_START__org_pepstock_charba_client_data_ArcBorderRadius_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getArc__().m_getBorderRadius__());
 }
 
 m_setOuterEnd__int(/** number */ borderRadius) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_OUTER_END__org_pepstock_charba_client_data_ArcBorderRadius_Property, Checker.m_positiveOrZero__int(borderRadius));
 }
 /** @return {number} */
 m_getOuterEnd__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_OUTER_END__org_pepstock_charba_client_data_ArcBorderRadius_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getArc__().m_getBorderRadius__());
 }
 
 m_setInnerStart__int(/** number */ borderRadius) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_INNER_START__org_pepstock_charba_client_data_ArcBorderRadius_Property, Checker.m_positiveOrZero__int(borderRadius));
 }
 /** @return {number} */
 m_getInnerStart__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_INNER_START__org_pepstock_charba_client_data_ArcBorderRadius_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getArc__().m_getBorderRadius__());
 }
 
 m_setInnerEnd__int(/** number */ borderRadius) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_INNER_END__org_pepstock_charba_client_data_ArcBorderRadius_Property, Checker.m_positiveOrZero__int(borderRadius));
 }
 /** @return {number} */
 m_getInnerEnd__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_INNER_END__org_pepstock_charba_client_data_ArcBorderRadius_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getArc__().m_getBorderRadius__());
 }
 /** @return {ArcBorderRadiusFactory} */
 static get f_FACTORY__org_pepstock_charba_client_data_ArcBorderRadius() {
  return (ArcBorderRadius.$clinit(), ArcBorderRadius.$static_FACTORY__org_pepstock_charba_client_data_ArcBorderRadius);
 }
 
 static $clinit() {
  ArcBorderRadius.$clinit = () =>{};
  ArcBorderRadius.$loadModules();
  AbstractBarBorderItem.$clinit();
  ArcBorderRadius.$static_FACTORY__org_pepstock_charba_client_data_ArcBorderRadius = ArcBorderRadiusFactory.$create__();
  ArcBorderRadius.f_KEYS__org_pepstock_charba_client_data_ArcBorderRadius_ = /**@type {List<Key>}*/ (Collections.m_unmodifiableList__java_util_List(/**@type {List<Property>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(Property.m_values__()))));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ArcBorderRadius;
 }
 
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  ArcBorderRadiusFactory = goog.module.get('org.pepstock.charba.client.data.ArcBorderRadius.ArcBorderRadiusFactory$impl');
  Property = goog.module.get('org.pepstock.charba.client.data.ArcBorderRadius.Property$impl');
  DefaultsBuilder = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');
 }
}
/**@private {ArcBorderRadiusFactory}*/
ArcBorderRadius.$static_FACTORY__org_pepstock_charba_client_data_ArcBorderRadius;
/**@type {List<Key>}*/
ArcBorderRadius.f_KEYS__org_pepstock_charba_client_data_ArcBorderRadius_;
$Util.$setClassMetadata(ArcBorderRadius, "org.pepstock.charba.client.data.ArcBorderRadius");

exports = ArcBorderRadius;

//# sourceMappingURL=ArcBorderRadius.js.map
