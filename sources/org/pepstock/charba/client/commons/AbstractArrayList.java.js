goog.module('org.pepstock.charba.client.commons.AbstractArrayList');

goog.require('java.lang.IndexOutOfBoundsException');
goog.require('java.lang.Iterable');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.Arrays');
goog.require('java.util.Collection');
goog.require('java.util.Comparator');
goog.require('java.util.Iterator');
goog.require('java.util.List');
goog.require('java.util.ListIterator');
goog.require('java.util.Spliterator');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Predicate');
goog.require('java.util.function.UnaryOperator');
goog.require('java.util.stream.Stream');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Array.$Overlay');
goog.require('org.pepstock.charba.client.commons.IteratorImpl');
goog.require('org.pepstock.charba.client.commons.ListIteratorImpl');
goog.require('org.pepstock.charba.client.utils.JSON.$Overlay');
goog.require('vmbootstrap.Exceptions');

const AbstractArrayList = goog.require('org.pepstock.charba.client.commons.AbstractArrayList$impl');
exports = AbstractArrayList;

