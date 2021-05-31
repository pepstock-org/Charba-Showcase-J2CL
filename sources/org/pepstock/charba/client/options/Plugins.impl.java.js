goog.module('org.pepstock.charba.client.options.Plugins$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultPlugins = goog.require('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let ConfigurationEnvelop = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
let DefaultPluginId = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultPluginId$impl');
let Options = goog.forwardDeclare('org.pepstock.charba.client.options.Options$impl');
let AbstractPluginOptions = goog.forwardDeclare('org.pepstock.charba.client.plugins.AbstractPluginOptions$impl');
let AbstractPluginOptionsFactory = goog.forwardDeclare('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');
let PluginIdChecker = goog.forwardDeclare('org.pepstock.charba.client.plugins.PluginIdChecker$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @extends {AbstractModel<Options, IsDefaultPlugins>}
 * @implements {IsDefaultPlugins}
 */
class Plugins extends AbstractModel {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'Plugins(ChartEnvelop)'.
 /** @return {!Plugins} */
 static $create__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<Plugins> */ envelop) {
  Plugins.$clinit();
  let $instance = new Plugins();
  $instance.$ctor__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_ChartEnvelop(envelop);
  return $instance;
 }
 //Initialization from constructor 'Plugins(ChartEnvelop)'.
 
 $ctor__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<Plugins> */ envelop) {
  this.$ctor__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPlugins__org_pepstock_charba_client_commons_NativeObject(/**@type {Options}*/ ($Casts.$to(/**@type {Plugins}*/ ($Casts.$to(/**@type {ChartEnvelop<Plugins>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), ChartEnvelop)).m_getContent__(), Plugins)).m_getParent__(), Options)), /**@type {Plugins}*/ ($Casts.$to(/**@type {ChartEnvelop<Plugins>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), ChartEnvelop)).m_getContent__(), Plugins)).m_getChildKey__(), /**@type {IsDefaultPlugins}*/ ($Casts.$to(/**@type {Plugins}*/ ($Casts.$to(/**@type {ChartEnvelop<Plugins>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), ChartEnvelop)).m_getContent__(), Plugins)).m_getDefaultValues__(), IsDefaultPlugins)), /**@type {Plugins}*/ ($Casts.$to(/**@type {ChartEnvelop<Plugins>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), ChartEnvelop)).m_getContent__(), Plugins)).m_getNativeObject__());
 }
 //Factory method corresponding to constructor 'Plugins(Options, Key, IsDefaultPlugins, NativeObject)'.
 /** @return {!Plugins} */
 static $create__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPlugins__org_pepstock_charba_client_commons_NativeObject(/** Options */ options, /** Key */ childKey, /** IsDefaultPlugins */ defaultValues, /** ? */ nativeObject) {
  Plugins.$clinit();
  let $instance = new Plugins();
  $instance.$ctor__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPlugins__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'Plugins(Options, Key, IsDefaultPlugins, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_options_Plugins__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultPlugins__org_pepstock_charba_client_commons_NativeObject(/** Options */ options, /** Key */ childKey, /** IsDefaultPlugins */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(options, childKey, defaultValues, nativeObject);
 }
 /** @return {?} */
 m_getDefaultPluginOptions__org_pepstock_charba_client_enums_DefaultPluginId_$pp_org_pepstock_charba_client_options(/** DefaultPluginId */ plugin) {
  return this.m_getValue__org_pepstock_charba_client_commons_Key(plugin);
 }
 /** @return {List<Key>} */
 m_getAllIds__() {
  return /**@type {List<Key>}*/ (Collections.m_unmodifiableList__java_util_List(this.m_keys__()));
 }
 
 m_setEnabled__java_lang_String__boolean(/** ?string */ pluginId, /** boolean */ enabled) {
  this.m_setEnabled__org_pepstock_charba_client_commons_Key__boolean__boolean_$p_org_pepstock_charba_client_options_Plugins(PluginIdChecker.m_key__java_lang_String(pluginId), enabled, false);
 }
 
 m_setEnabled__org_pepstock_charba_client_configuration_ConfigurationEnvelop__boolean(/** ConfigurationEnvelop<DefaultPluginId> */ envelop, /** boolean */ enabled) {
  if (Envelop.m_isValid__org_pepstock_charba_client_commons_Envelop(envelop)) {
   this.m_setEnabled__org_pepstock_charba_client_commons_Key__boolean__boolean_$p_org_pepstock_charba_client_options_Plugins(/**@type {DefaultPluginId}*/ ($Casts.$to(envelop.m_getContent__(), DefaultPluginId)), enabled, true);
  }
 }
 
 m_setEnabled__org_pepstock_charba_client_commons_Key__boolean__boolean_$p_org_pepstock_charba_client_options_Plugins(/** Key */ pluginId, /** boolean */ enabled, /** boolean */ overrideDefaultPlugin) {
  if (!DefaultPluginId.m_is__org_pepstock_charba_client_commons_Key(pluginId) || overrideDefaultPlugin) {
   if (!enabled) {
    this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(pluginId, false);
   } else if (DefaultPluginId.m_is__org_pepstock_charba_client_commons_Key(pluginId)) {
    this.m_reEnableDefaultPlugin__org_pepstock_charba_client_enums_DefaultPluginId_$p_org_pepstock_charba_client_options_Plugins(/**@type {DefaultPluginId}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(DefaultPluginId.m_values__(), pluginId.m_value__()), DefaultPluginId)));
   } else if (!this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(pluginId, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
    this.m_setEmptyValue__org_pepstock_charba_client_commons_Key(pluginId);
   }
  }
 }
 
 m_reEnableDefaultPlugin__org_pepstock_charba_client_enums_DefaultPluginId_$p_org_pepstock_charba_client_options_Plugins(/** DefaultPluginId */ pluginId) {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(pluginId, ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType)) {
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(DefaultPluginId.f_LEGEND__org_pepstock_charba_client_enums_DefaultPluginId, pluginId)) {
    this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(pluginId, /**@type {Options}*/ ($Casts.$to(this.m_getParent__(), Options)).m_getLegend__());
   } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(DefaultPluginId.f_TITLE__org_pepstock_charba_client_enums_DefaultPluginId, pluginId)) {
    this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(pluginId, /**@type {Options}*/ ($Casts.$to(this.m_getParent__(), Options)).m_getTitle__());
   } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(DefaultPluginId.f_TOOLTIP__org_pepstock_charba_client_enums_DefaultPluginId, pluginId)) {
    this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(pluginId, /**@type {Options}*/ ($Casts.$to(this.m_getParent__(), Options)).m_getTooltips__());
   } else {
    this.m_remove__org_pepstock_charba_client_commons_Key(pluginId);
   }
  }
 }
 /** @return {boolean} */
 m_isEnabled__org_pepstock_charba_client_enums_DefaultPluginId(/** DefaultPluginId */ pluginId) {
  return this.m_isEnabledByKey__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_options_Plugins(pluginId);
 }
 /** @override @return {boolean} */
 m_isEnabled__java_lang_String(/** ?string */ pluginId) {
  return this.m_isEnabledByKey__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_options_Plugins(PluginIdChecker.m_key__java_lang_String(pluginId));
 }
 /** @return {boolean} */
 m_isEnabledByKey__org_pepstock_charba_client_commons_Key_$p_org_pepstock_charba_client_options_Plugins(/** Key */ pluginId) {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(pluginId, ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(pluginId, /**@type {IsDefaultPlugins}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPlugins)).m_isEnabled__java_lang_String(pluginId.m_value__()));
  }
  return this.m_has__org_pepstock_charba_client_commons_Key(pluginId) || /**@type {IsDefaultPlugins}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPlugins)).m_isEnabled__java_lang_String(pluginId.m_value__());
 }
 /** @return {boolean} */
 m_hasEnabled__java_lang_String(/** ?string */ pluginId) {
  return this.m_has__org_pepstock_charba_client_commons_Key(PluginIdChecker.m_key__java_lang_String(pluginId));
 }
 
 m_removeOptions__java_lang_String(/** ?string */ pluginId) {
  if (this.m_hasOptions__java_lang_String(pluginId)) {
   let pluginIdKey = PluginIdChecker.m_key__java_lang_String(pluginId);
   this.m_remove__org_pepstock_charba_client_commons_Key(pluginIdKey);
  }
 }
 /** @template T */
 m_setOptions__org_pepstock_charba_client_plugins_AbstractPluginOptions(/** T */ options) {
  if (!$Equality.$same(options, null) && !DefaultPluginId.m_is__java_lang_String(/**@type {AbstractPluginOptions}*/ (options).m_getPluginId__())) {
   let pluginIdKey = PluginIdChecker.m_key__java_lang_String(/**@type {AbstractPluginOptions}*/ (options).m_getPluginId__());
   this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(pluginIdKey, options);
  }
 }
 /** @template T */
 m_setOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptions(/** ?string */ pluginId, /** T */ options) {
  let pluginIdKey = PluginIdChecker.m_key__java_lang_String(pluginId);
  if ($Equality.$same(options, null) && this.m_hasOptions__java_lang_String(pluginId)) {
   this.m_remove__org_pepstock_charba_client_commons_Key(pluginIdKey);
  } else if (!DefaultPluginId.m_is__java_lang_String(pluginId)) {
   this.m_checkPluginIdConsistency__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_plugins_AbstractPluginOptions_$p_org_pepstock_charba_client_options_Plugins(pluginIdKey, options);
   this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(pluginIdKey, options);
  }
 }
 /** @override @return {boolean} */
 m_hasOptions__java_lang_String(/** ?string */ pluginId) {
  let pluginIdKey = PluginIdChecker.m_key__java_lang_String(pluginId);
  if (!DefaultPluginId.m_is__java_lang_String(pluginId)) {
   return !this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(pluginIdKey, ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType) && this.m_has__org_pepstock_charba_client_commons_Key(pluginIdKey);
  }
  return false;
 }
 /** @template T @return {T} */
 m_getOptions__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(/** AbstractPluginOptionsFactory<T> */ factory) {
  if (!$Equality.$same(factory, null) && !DefaultPluginId.m_is__java_lang_String(factory.m_getPluginId__())) {
   let pluginIdKey = PluginIdChecker.m_key__java_lang_String(factory.m_getPluginId__());
   if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(pluginIdKey, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
    return factory.m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(this.m_getValue__org_pepstock_charba_client_commons_Key(pluginIdKey), /**@type {IsDefaultPlugins}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPlugins)));
   } else {
    return factory.m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(null, /**@type {IsDefaultPlugins}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPlugins)));
   }
  }
  return null;
 }
 /** @override @template T @return {T} */
 m_getOptions__java_lang_String__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(/** ?string */ pluginId, /** AbstractPluginOptionsFactory<T> */ factory) {
  if (!$Equality.$same(factory, null) && !DefaultPluginId.m_is__java_lang_String(pluginId)) {
   let pluginIdKey = PluginIdChecker.m_key__java_lang_String(pluginId);
   this.m_checkPluginIdConsistency__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory_$p_org_pepstock_charba_client_options_Plugins(pluginIdKey, factory);
   if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(pluginIdKey, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
    return factory.m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(this.m_getValue__org_pepstock_charba_client_commons_Key(pluginIdKey), /**@type {IsDefaultPlugins}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPlugins)));
   } else {
    return factory.m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(null, /**@type {IsDefaultPlugins}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPlugins)));
   }
  }
  return null;
 }
 
 m_checkPluginIdConsistency__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_plugins_AbstractPluginOptions_$p_org_pepstock_charba_client_options_Plugins(/** Key */ pluginIdKey, /** AbstractPluginOptions */ options) {
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(pluginIdKey) && !$Equality.$same(options, null) && !j_l_String.m_equals__java_lang_String__java_lang_Object(pluginIdKey.m_value__(), options.m_getPluginId__())) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String(Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(Plugins.f_INVALID_ID_NOT_EQUALS_IN_OPTIONS__org_pepstock_charba_client_options_Plugins_, [pluginIdKey.m_value__(), options.m_getPluginId__()])));
  }
 }
 
 m_checkPluginIdConsistency__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory_$p_org_pepstock_charba_client_options_Plugins(/** Key */ pluginIdKey, /** AbstractPluginOptionsFactory<?> */ factory) {
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(pluginIdKey) && !$Equality.$same(factory, null) && !j_l_String.m_equals__java_lang_String__java_lang_Object(pluginIdKey.m_value__(), factory.m_getPluginId__())) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String(Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(Plugins.f_INVALID_ID_NOT_EQUALS_IN_FACTORY__org_pepstock_charba_client_options_Plugins_, [pluginIdKey.m_value__(), factory.m_getPluginId__()])));
  }
 }
 
 static $clinit() {
  Plugins.$clinit = () =>{};
  Plugins.$loadModules();
  AbstractModel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Plugins;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  DefaultPluginId = goog.module.get('org.pepstock.charba.client.enums.DefaultPluginId$impl');
  Options = goog.module.get('org.pepstock.charba.client.options.Options$impl');
  PluginIdChecker = goog.module.get('org.pepstock.charba.client.plugins.PluginIdChecker$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@const {?string}*/
Plugins.f_INVALID_ID_NOT_EQUALS_IN_OPTIONS__org_pepstock_charba_client_options_Plugins_ = "Plugin id '{0}' is not equals to plugin id '{1}'of options";
/**@const {?string}*/
Plugins.f_INVALID_ID_NOT_EQUALS_IN_FACTORY__org_pepstock_charba_client_options_Plugins_ = "Plugin id '{0}' is not equals to plugin id '{1}'of factory";
IsDefaultPlugins.$markImplementor(Plugins);
$Util.$setClassMetadata(Plugins, "org.pepstock.charba.client.options.Plugins");

exports = Plugins;

//# sourceMappingURL=Plugins.js.map
