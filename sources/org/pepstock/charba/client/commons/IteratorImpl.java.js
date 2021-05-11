goog.module('org.pepstock.charba.client.commons.IteratorImpl');

goog.require('java.lang.IllegalStateException');
goog.require('java.lang.Object');
goog.require('java.util.Iterator');
goog.require('java.util.List');
goog.require('java.util.NoSuchElementException');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Exceptions');

const IteratorImpl = goog.require('org.pepstock.charba.client.commons.IteratorImpl$impl');
exports = IteratorImpl;

