goog.module('org.pepstock.charba.client.data.GradientsContainer');

goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.Gradient');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory');
goog.require('org.pepstock.charba.client.data.AbstractCanvasObjectCallback');
goog.require('org.pepstock.charba.client.data.AbstractContainer');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.Dataset.CanvasObjectKey');
goog.require('org.pepstock.charba.client.data.DatasetGrandientCallback');
goog.require('org.pepstock.charba.client.data.GradientsContainer.GradientContainerFactory');

const GradientsContainer = goog.require('org.pepstock.charba.client.data.GradientsContainer$impl');
exports = GradientsContainer;

