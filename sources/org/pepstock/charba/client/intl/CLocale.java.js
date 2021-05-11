goog.module('org.pepstock.charba.client.intl.CLocale');

goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Defaults');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.Constants');
goog.require('org.pepstock.charba.client.commons.Id');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.dom.BaseElement.$Overlay');
goog.require('org.pepstock.charba.client.dom.BaseLocation.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Meta.$Overlay');
goog.require('org.pepstock.charba.client.intl.CLocaleBuilder');
goog.require('org.pepstock.charba.client.intl.Language');
goog.require('org.pepstock.charba.client.intl.Region');
goog.require('org.pepstock.charba.client.intl.Script');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const CLocale = goog.require('org.pepstock.charba.client.intl.CLocale$impl');
exports = CLocale;

