goog.module('org.pepstock.charba.client.annotation.AnnotationOptionsFactory');

goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.annotation.AnnotationOptions');
goog.require('org.pepstock.charba.client.annotation.AnnotationPlugin');
goog.require('org.pepstock.charba.client.annotation.DefaultOptions');
goog.require('org.pepstock.charba.client.annotation.IsDefaultsAnnotationOptions');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.defaults.IsDefaultPlugins');
goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptionsFactory');
goog.require('vmbootstrap.Casts');

const AnnotationOptionsFactory = goog.require('org.pepstock.charba.client.annotation.AnnotationOptionsFactory$impl');
exports = AnnotationOptionsFactory;

