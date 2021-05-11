goog.module('org.pepstock.charba.client.data.PatternsContainer');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.Pattern');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory');
goog.require('org.pepstock.charba.client.data.AbstractCanvasObjectCallback');
goog.require('org.pepstock.charba.client.data.AbstractContainer');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.Dataset.CanvasObjectKey');
goog.require('org.pepstock.charba.client.data.DatasetPatternCallback');
goog.require('org.pepstock.charba.client.data.PatternsContainer.PatternContainerFactory');

const PatternsContainer = goog.require('org.pepstock.charba.client.data.PatternsContainer$impl');
exports = PatternsContainer;

