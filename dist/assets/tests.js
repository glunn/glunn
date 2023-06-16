'use strict';

// import { module, test } from 'qunit';
// import { setupRenderingTest } from 'ember-qunit';
// import { render } from '@ember/test-helpers';
// import hbs from 'htmlbars-inline-precompile';
// 
// module('Integration | Component | alpaca-game', function(hooks) {
//   setupRenderingTest(hooks);
// 
//   test('it renders', async function(assert) {
//     // Set any properties with this.set('myProperty', 'value');
//     // Handle any actions with this.set('myAction', function(val) { ... });
// 
//     await render(hbs`{{alpaca-game}}`);
// 
//     assert.equal(this.element.textContent.trim(), '');
// 
//     // Template block usage:
//     await render(hbs`
//       {{#alpaca-game}}
//         template block text
//       {{/alpaca-game}}
//     `);
// 
//     assert.equal(this.element.textContent.trim(), 'template block text');
//   });
// });
define("mountain-portfolio/tests/integration/components/alpaca-game/component-test", [], function () {
  "use strict";
});
define("mountain-portfolio/tests/integration/components/keyboard-key/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | keyboard-key', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "s+HfeZL8",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"keyboard-key\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), '');
    });
  });
});
define("mountain-portfolio/tests/integration/components/keyboard-keys/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | keyboard-keys', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "LMd3WmC+",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"keyboard-keys\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.replace(/\s+/g, "").trim(), 'wasd');
    });
  });
});
// import { module, test } from 'qunit';
// import { setupRenderingTest } from 'ember-qunit';
// import { render } from '@ember/test-helpers';
// import hbs from 'htmlbars-inline-precompile';
// 
// module('Integration | Component | portfolio-cards', function(hooks) {
//   setupRenderingTest(hooks);
// 
//   test('it renders', async function(assert) {
//     // Set any properties with this.set('myProperty', 'value');
//     // Handle any actions with this.set('myAction', function(val) { ... });
// 
//     await render(hbs`{{portfolio-cards}}`);
// 
//     assert.equal(this.element.textContent.trim(), '');
// 
//     // Template block usage:
//     await render(hbs`
//       {{#portfolio-cards}}
//         template block text
//       {{/portfolio-cards}}
//     `);
// 
//     assert.equal(this.element.textContent.trim(), 'template block text');
//   });
// });
define("mountain-portfolio/tests/integration/components/portfolio-cards/component-test", [], function () {
  "use strict";
});
define("mountain-portfolio/tests/integration/components/site-footer/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | site-footer', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "5KKd987O",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"site-footer\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.replace(/\s+/g, "").trim(), 'https://github.com/glunnhttps://www.linkedin.com/in/aglunn/');
    });
  });
});
// import { module, test } from 'qunit';
// import { setupRenderingTest } from 'ember-qunit';
// import { render } from '@ember/test-helpers';
// import hbs from 'htmlbars-inline-precompile';
// 
// module('Integration | Component | sticky-mountains', function(hooks) {
//   setupRenderingTest(hooks);
// 
//   test('it renders', async function(assert) {
//     // Set any properties with this.set('myProperty', 'value');
//     // Handle any actions with this.set('myAction', function(val) { ... });
// 
//     await render(hbs`{{sticky-mountains}}`);
// 
//     assert.equal(this.element.textContent.trim(), '');
// 
//     // Template block usage:
//     await render(hbs`
//       {{#sticky-mountains}}
//         template block text
//       {{/sticky-mountains}}
//     `);
// 
//     assert.equal(this.element.textContent.trim(), 'template block text');
//   });
// });
define("mountain-portfolio/tests/integration/components/sticky-mountains/component-test", [], function () {
  "use strict";
});
define("mountain-portfolio/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('breakpoints.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'breakpoints.js should pass ESLint\n\n');
  });
  QUnit.test('components/alpaca-game/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/alpaca-game/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/keyboard-key/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/keyboard-key/component.js should pass ESLint\n\n6:3 - Use closure actions, unless you need bubbling (ember/closure-actions)\n10:3 - Use closure actions, unless you need bubbling (ember/closure-actions)');
  });
  QUnit.test('components/keyboard-keys/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/keyboard-keys/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/portfolio-cards/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/portfolio-cards/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/site-footer/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/site-footer/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/sticky-mountains/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/sticky-mountains/component.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/awesome.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/awesome.js should pass ESLint\n\n');
  });
  QUnit.test('initializers/user-agent.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/user-agent.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/awesome.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/awesome.js should pass ESLint\n\n');
  });
  QUnit.test('services/sprite.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/sprite.js should pass ESLint\n\n');
  });
});
define("mountain-portfolio/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('mountain-portfolio/components/alpaca-game/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mountain-portfolio/components/alpaca-game/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('mountain-portfolio/components/keyboard-key/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mountain-portfolio/components/keyboard-key/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('mountain-portfolio/components/keyboard-keys/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mountain-portfolio/components/keyboard-keys/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('mountain-portfolio/components/portfolio-cards/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'mountain-portfolio/components/portfolio-cards/template.hbs should pass TemplateLint.\n\nmountain-portfolio/components/portfolio-cards/template.hbs\n  1:10  error  Using {{unless}} in combination with other helpers should be avoided. MaxHelpers: 0  simple-unless\n');
  });
  QUnit.test('mountain-portfolio/components/site-footer/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mountain-portfolio/components/site-footer/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('mountain-portfolio/components/sticky-mountains/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mountain-portfolio/components/sticky-mountains/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('mountain-portfolio/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mountain-portfolio/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('mountain-portfolio/templates/awesome.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mountain-portfolio/templates/awesome.hbs should pass TemplateLint.\n\n');
  });
});
define("mountain-portfolio/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/alpaca-game/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/alpaca-game/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/keyboard-key/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/keyboard-key/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/keyboard-keys/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/keyboard-keys/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/portfolio-cards/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/portfolio-cards/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/site-footer/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/site-footer/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/sticky-mountains/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/sticky-mountains/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/awesome-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/awesome-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/awesome-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/awesome-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/services/sprite-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/sprite-test.js should pass ESLint\n\n');
  });
});
define("mountain-portfolio/tests/test-helper", ["mountain-portfolio/app", "mountain-portfolio/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("mountain-portfolio/tests/unit/controllers/awesome-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | awesome', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:awesome');
      assert.ok(controller);
    });
  });
});
define("mountain-portfolio/tests/unit/routes/awesome-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | awesome', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:awesome');
      assert.ok(route);
    });
  });
});
define("mountain-portfolio/tests/unit/services/sprite-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | sprite', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:sprite');
      assert.ok(service);
    });
  });
});
define('mountain-portfolio/config/environment', [], function() {
  var prefix = 'mountain-portfolio';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('mountain-portfolio/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
