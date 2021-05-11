goog.module('org.pepstock.charba.client.utils.JSON.$Overlay');

goog.require('java.lang.String');
goog.require('java.lang.StringBuilder');
goog.require('java.util.HashSet');
goog.require('java.util.Locale');
goog.require('java.util.Set');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Constants');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.ObjectType');
goog.require('org.pepstock.charba.client.dom.BaseAttribute.$Overlay');
goog.require('org.pepstock.charba.client.dom.BaseElement.$Overlay');
goog.require('org.pepstock.charba.client.dom.BaseNode.$Overlay');
goog.require('org.pepstock.charba.client.dom.enums.NodeType');
goog.require('org.pepstock.charba.client.utils.JSONReplacerConstants');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const $Overlay = goog.require('org.pepstock.charba.client.utils.JSON.$Overlay$impl');
exports = $Overlay;

