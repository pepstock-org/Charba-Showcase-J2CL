goog.module('org.pepstock.charba.client.annotation.AnnotationOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPluginOptionsFactory = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AnnotationOptions = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationOptions$impl');
let AnnotationPlugin = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
let DefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.annotation.DefaultOptions$impl');
let IsDefaultsAnnotationOptions = goog.forwardDeclare('org.pepstock.charba.client.annotation.IsDefaultsAnnotationOptions$impl');
let IsDefaultPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractPluginOptionsFactory<AnnotationOptions>}
 */
class AnnotationOptionsFactory extends AbstractPluginOptionsFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!AnnotationOptionsFactory} */
 static $create__() {
  AnnotationOptionsFactory.$clinit();
  let $instance = new AnnotationOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_annotation_AnnotationOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_annotation_AnnotationOptionsFactory__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory__java_lang_String(AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin);
 }
 /** @override @return {AnnotationOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(/** ? */ nativeObject, /** IsDefaultPlugins */ defaultValues) {
  let /** IsDefaultsAnnotationOptions */ defaultOptions;
  if (!$Equality.$same(defaultValues, null)) {
   defaultOptions = /**@type {AnnotationOptions}*/ ($Casts.$to(this.m_loadDefaultsPluginOptions__org_pepstock_charba_client_defaults_IsDefaultPlugins__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(defaultValues, AnnotationPlugin.f_DEFAULTS_FACTORY__org_pepstock_charba_client_annotation_AnnotationPlugin), AnnotationOptions));
  } else {
   defaultOptions = DefaultOptions.f_INSTANCE__org_pepstock_charba_client_annotation_DefaultOptions;
  }
  return AnnotationOptions.$create__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions__org_pepstock_charba_client_commons_NativeObject(!$Equality.$same(defaultOptions, null) ? defaultOptions : DefaultOptions.f_INSTANCE__org_pepstock_charba_client_annotation_DefaultOptions, nativeObject);
 }
 
 static $clinit() {
  AnnotationOptionsFactory.$clinit = () =>{};
  AnnotationOptionsFactory.$loadModules();
  AbstractPluginOptionsFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnnotationOptionsFactory;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AnnotationOptions = goog.module.get('org.pepstock.charba.client.annotation.AnnotationOptions$impl');
  AnnotationPlugin = goog.module.get('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
  DefaultOptions = goog.module.get('org.pepstock.charba.client.annotation.DefaultOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AnnotationOptionsFactory, "org.pepstock.charba.client.annotation.AnnotationOptionsFactory");

exports = AnnotationOptionsFactory;

//# sourceMappingURL=AnnotationOptionsFactory.js.map
