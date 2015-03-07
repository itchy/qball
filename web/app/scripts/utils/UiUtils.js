// General

var UiEffectsCore = {
  flash: _flash,
  fadeOut: _fadeOut,
  fadeIn: _fadeIn,
  scrollToTop: _scrollToTop,
  scrollToBottom: _scrollToBottom,
  scrollToElement: _scrollToElement,
  scrollTo: _scrollTo,
  smoothScrollToBottom: _smoothScrollToBottom,
  smoothScrollTo: _smoothScrollTo,
  elementIsVisible: _elementIsVisible
};

var UiEffects = {
  targetElement: _targetElement,
  targetConsole: _targetConsole,
  hoistConsole: _hoistConsole
};


//function _currentYPosition(element) {
//  return element
//        ? element.offsetTop
//        : 0;
//}

function _elmYPosition(id) {
  var elm = document.querySelector(id);
  return elm
      ? elm.offsetTop
      : 0;
}

// UiEffectsCore
function _flash(element, count, speed, delay) {
  var defer = $.Deferred();
  var lastSpeed;

  speed = speed || 250;
  lastSpeed = speed * 3;
  count = count || 2;
  delay = delay || 0;
  element = $(element);

  if (element.length) {
    setTimeout(function() {
      for (var i = 0; i < count; i++) {
        $(element).fadeOut(speed).fadeIn((i === (count-1)) ? lastSpeed : speed);
      }
      defer.resolve();
    }, delay);
  }

  return defer.promise();
}

function _fadeOut(element, speed, delay) {
  var defer = $.Deferred();
  speed = speed || 300;
  delay = delay || 0;
  element = $(element);

  if (element.length) {
    setTimeout(function() {
      $(element).fadeOut(speed, function() {
        defer.resolve();
      });
    }, delay);
  }

  return defer.promise();
}

function _fadeIn(element, speed, delay) {
  var defer = $.Deferred();
  speed = speed || 300;
  delay = delay || 0;
  element = $(element);

  if (element.length) {
    setTimeout(function() {
      $(element).fadeIn(speed, function() {
        defer.resolve();
      });
    }, delay);
  }

  return defer.promise();
}

function _scrollToTop(element, speed) {
  speed = speed || 300;
  element = $(element);

  if (element.length) {
    this.scrollTo(element, 0, speed);
  }
}

function _scrollToBottom(element, speed, delay) {
  speed = speed || 300;
  delay = delay || 0;
  element = $(element);

  if (element.length) {
    // The setTimeout is used to work while updating the dom.
    // Heights aren't reported correctly if we don't do this.
    setTimeout(function() {
      this.scrollTo(element, element.prop('scrollHeight'), speed);
    }, delay);
  }
}

function _scrollToElement(scrollElement, toElement, speed, delay) {
  speed = speed || 300;
  delay = delay || 0;
  scrollElement = $(scrollElement);
  toElement = $(toElement);

  if (scrollElement.length
    && toElement.length) {
    // The setTimeout is used to work while updating the dom.
    // Heights aren't reported correctly if we don't do this.
    setTimeout(function() {
      this.scrollTo(scrollElement, $(toElement).offset().top + 'px', speed);
    }.bind(this), delay);
  }
}

function _scrollTo(element, height, speed) {
  element = $(element);

  if (element.length) {
    element.each(function() {
      $(this).stop().animate({
        scrollTop: height
      }, speed);
    });
  }
}

function _smoothScrollToBottom(target, speed) {
  target = $(target);
  speed = speed || 250;

  var scrollHeight = target[0].scrollHeight;

  target.animate({
    scrollTop: scrollHeight
  }, speed);
}

function _smoothScrollTo(parentId, childId, speed) {
  var defer = $.Deferred();
  var parentEl = $(document.querySelector(parentId));
//  var startY = _currentYPosition(parentEl);
  var stopY = _elmYPosition(childId);

  speed = speed || 250;

  if (parentEl.length) {
    parentEl
      .stop()
      .animate(
      {
        scrollTop: stopY
      },
      speed,
      function() {
        defer.resolve();
      }
    );
  }

  return defer.promise();
}

function _elementIsVisible(parent, el, type) {
  type = type || 'part';
  var _el = $(el);
  var _parent = $(parent);

  if (!_el.length || !_parent.length) {
    return;
  }

  var vpH = _parent.height(); // Viewport Height
  var vpT = _parent[0].offsetTop; // Parent offsetTop
  var st = _parent[0].scrollTop; // Scroll Top
  var y = _el[0].offsetTop;
  var h = _el.height();

  if (type === 'all') {
    return (((y - vpT) > st) && ((y+h) < (vpH + vpT + st)));
  }
  if (type === 'part') {
    return ((((y - vpT) + h) > st) && (y < (vpH + vpT + st)));
  }
  if (type === 'above') {
    return (((y - vpT) < (vpH + vpT + st)));
  }
}



// UiEffects
function _targetElement(container, element, visibility, flashCount, speed, noFlash) {
  function flash() {
    UiEffectsCore.flash(element, flashCount, speed);
  }

  if (!UiEffectsCore.elementIsVisible(container, element, visibility)) {
    UiEffectsCore.smoothScrollTo(container, element)
      .then(function() {
        !noFlash && flash();
      });
  } else {
    !noFlash && flash();
  }
}

function _targetConsole(id, noFlash) {
  var parent = '#console-list';
  var selector = '#consoleItem-' + id.replace(':', '\\:');

  _targetElement(parent, selector, 'all', 1, 100, noFlash);
}

function _hoistConsole(id) {
  _targetConsole(id, true);
}



module.exports = {
  UiEffectsCore: UiEffectsCore,
  UiEffects: UiEffects
};
