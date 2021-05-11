goog.module('org.pepstock.charba.client.intl.CLocaleBuilder.LocaleRegExpGroupsFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainerFactory = goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory$impl');

let LocaleRegExpGroups = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocaleBuilder.LocaleRegExpGroups$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NativeObjectContainerFactory<LocaleRegExpGroups>}
 */
class LocaleRegExpGroupsFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LocaleRegExpGroupsFactory} */
 static $create__() {
  LocaleRegExpGroupsFactory.$clinit();
  let $instance = new LocaleRegExpGroupsFactory();
  $instance.$ctor__org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroupsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroupsFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {LocaleRegExpGroups} */
 m_create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  return LocaleRegExpGroups.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 //Default method forwarding stub.
 /** @override @return {LocaleRegExpGroups} */
 m_create__() {
  return /**@type {LocaleRegExpGroups}*/ ($Casts.$to(NativeObjectContainerFactory.m_create__$default__org_pepstock_charba_client_commons_NativeObjectContainerFactory(this), LocaleRegExpGroups));
 }
 
 static $clinit() {
  LocaleRegExpGroupsFactory.$clinit = () =>{};
  LocaleRegExpGroupsFactory.$loadModules();
  j_l_Object.$clinit();
  NativeObjectContainerFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocaleRegExpGroupsFactory;
 }
 
 static $loadModules() {
  LocaleRegExpGroups = goog.module.get('org.pepstock.charba.client.intl.CLocaleBuilder.LocaleRegExpGroups$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
NativeObjectContainerFactory.$markImplementor(LocaleRegExpGroupsFactory);
$Util.$setClassMetadata(LocaleRegExpGroupsFactory, "org.pepstock.charba.client.intl.CLocaleBuilder$LocaleRegExpGroupsFactory");

exports = LocaleRegExpGroupsFactory;

//# sourceMappingURL=CLocaleBuilder$LocaleRegExpGroupsFactory.js.map
