goog.module('org.pepstock.charba.client.data.AbstractCanvasObjectCallback');

goog.require('java.lang.Object');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.callbacks.ColorCallback');
goog.require('org.pepstock.charba.client.callbacks.DatasetContext');
goog.require('org.pepstock.charba.client.colors.CanvasObject');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.data.AbstractContainer');
goog.require('org.pepstock.charba.client.data.Dataset.CanvasObjectKey');
goog.require('org.pepstock.charba.client.items.IsArea');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Primitives');

const AbstractCanvasObjectCallback = goog.require('org.pepstock.charba.client.data.AbstractCanvasObjectCallback$impl');
exports = AbstractCanvasObjectCallback;

