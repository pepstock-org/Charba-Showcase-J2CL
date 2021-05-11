goog.module('org.pepstock.charba.client.annotation.AnnotationPlugin');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.Injector');
goog.require('org.pepstock.charba.client.annotation.AnnotationOptions');
goog.require('org.pepstock.charba.client.annotation.AnnotationOptionsFactory');
goog.require('org.pepstock.charba.client.annotation.AnnotationOptionsFactory.AnnotationDefaultsOptionsFactory');
goog.require('org.pepstock.charba.client.annotation.AnnotationPluginResource');
goog.require('org.pepstock.charba.client.plugins.AbstractExtensionPlugin');
goog.require('org.pepstock.charba.client.resources.ResourceName');
goog.require('org.pepstock.charba.client.resources.ResourcesType');

const AnnotationPlugin = goog.require('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
exports = AnnotationPlugin;

