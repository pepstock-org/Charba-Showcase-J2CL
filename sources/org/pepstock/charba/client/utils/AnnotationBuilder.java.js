goog.module('org.pepstock.charba.client.utils.AnnotationBuilder');

goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.lang.StringBuilder');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.dom.BaseElement.$Overlay');
goog.require('org.pepstock.charba.client.dom.BaseHtmlElement.$Overlay');
goog.require('org.pepstock.charba.client.dom.BaseNode.$Overlay');
goog.require('org.pepstock.charba.client.dom.DOMBuilder');
goog.require('org.pepstock.charba.client.dom.elements.Img.$Overlay');
goog.require('org.pepstock.charba.client.utils.Utilities');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Objects');

const AnnotationBuilder = goog.require('org.pepstock.charba.client.utils.AnnotationBuilder$impl');
exports = AnnotationBuilder;

