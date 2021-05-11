goog.module('org.pepstock.charba.client.data.AbstractContainer');

goog.require('java.util.Collections');
goog.require('java.util.HashMap');
goog.require('java.util.List');
goog.require('java.util.Map');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.CanvasObject');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.ArrayObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainerFactory');
goog.require('org.pepstock.charba.client.data.AbstractCanvasObjectCallback');
goog.require('org.pepstock.charba.client.data.AbstractContainer.CallbackWrapper');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.data.Dataset.CanvasObjectKey');
goog.require('vmbootstrap.Casts');

const AbstractContainer = goog.require('org.pepstock.charba.client.data.AbstractContainer$impl');
exports = AbstractContainer;

