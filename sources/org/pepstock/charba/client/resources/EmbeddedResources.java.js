goog.module('org.pepstock.charba.client.resources.EmbeddedResources');

goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Injector');
goog.require('org.pepstock.charba.client.adapters.DateAdapterModule');
goog.require('org.pepstock.charba.client.resources.AbstractInjectableResource');
goog.require('org.pepstock.charba.client.resources.AbstractResources');
goog.require('org.pepstock.charba.client.resources.ChartJsResource');
goog.require('org.pepstock.charba.client.resources.DateAdapterInjectionComplete');
goog.require('org.pepstock.charba.client.resources.EmptyResource');
goog.require('org.pepstock.charba.client.resources.IsResourceType');
goog.require('org.pepstock.charba.client.resources.LuxonAdapterResource');
goog.require('org.pepstock.charba.client.resources.LuxonLibraryResource');
goog.require('org.pepstock.charba.client.resources.ResourceName');
goog.require('org.pepstock.charba.client.resources.ResourcesType');
goog.require('vmbootstrap.Exceptions');

const EmbeddedResources = goog.require('org.pepstock.charba.client.resources.EmbeddedResources$impl');
exports = EmbeddedResources;

