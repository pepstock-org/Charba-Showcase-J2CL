goog.module('org.pepstock.charba.client.annotation.AnnotationOptionsFactory.AnnotationDefaultsOptionsFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPluginOptionsFactory = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory$impl');

let AnnotationOptions = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationOptions$impl');
let AnnotationPlugin = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
let DefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.annotation.DefaultOptions$impl');
let IsDefaultPlugins = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPlugins$impl');

/**
 * @extends {AbstractPluginOptionsFactory<AnnotationOptions>}
 */
class AnnotationDefaultsOptionsFactory extends AbstractPluginOptionsFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!AnnotationDefaultsOptionsFactory} */
 static $create__() {
  AnnotationDefaultsOptionsFactory.$clinit();
  let $instance = new AnnotationDefaultsOptionsFactory();
  $instance.$ctor__org_pepstock_charba_client_annotation_AnnotationOptionsFactory_AnnotationDefaultsOptionsFactory__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_annotation_AnnotationOptionsFactory_AnnotationDefaultsOptionsFactory__() {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory__java_lang_String(AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin);
 }
 /** @override @return {AnnotationOptions} */
 m_create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_defaults_IsDefaultPlugins(/** ? */ nativeObject, /** IsDefaultPlugins */ defaultValues) {
  return AnnotationOptions.$create__org_pepstock_charba_client_annotation_IsDefaultsAnnotationOptions__org_pepstock_charba_client_commons_NativeObject(DefaultOptions.f_INSTANCE__org_pepstock_charba_client_annotation_DefaultOptions, nativeObject);
 }
 
 static $clinit() {
  AnnotationDefaultsOptionsFactory.$clinit = () =>{};
  AnnotationDefaultsOptionsFactory.$loadModules();
  AbstractPluginOptionsFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AnnotationDefaultsOptionsFactory;
 }
 
 static $loadModules() {
  AnnotationOptions = goog.module.get('org.pepstock.charba.client.annotation.AnnotationOptions$impl');
  AnnotationPlugin = goog.module.get('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
  DefaultOptions = goog.module.get('org.pepstock.charba.client.annotation.DefaultOptions$impl');
 }
}
$Util.$setClassMetadata(AnnotationDefaultsOptionsFactory, "org.pepstock.charba.client.annotation.AnnotationOptionsFactory$AnnotationDefaultsOptionsFactory");

exports = AnnotationDefaultsOptionsFactory;

//# sourceMappingURL=AnnotationOptionsFactory$AnnotationDefaultsOptionsFactory.js.map
