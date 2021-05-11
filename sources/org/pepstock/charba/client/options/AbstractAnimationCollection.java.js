goog.module('org.pepstock.charba.client.options.AbstractAnimationCollection');

goog.require('java.util.LinkedList');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.colors.ColorBuilder');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.AbstractNode');
goog.require('org.pepstock.charba.client.commons.ArrayString.$Overlay');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimationCollection');
goog.require('org.pepstock.charba.client.enums.AnimationType');
goog.require('org.pepstock.charba.client.enums.DefaultAnimationPropertyKey');
goog.require('org.pepstock.charba.client.options.AbstractAnimation');
goog.require('org.pepstock.charba.client.options.AbstractAnimationCollection.Property');
goog.require('org.pepstock.charba.client.options.IsAnimationPropertyKey');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const AbstractAnimationCollection = goog.require('org.pepstock.charba.client.options.AbstractAnimationCollection$impl');
exports = AbstractAnimationCollection;

