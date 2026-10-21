
(function () {
  'use strict';

  // ==========================================
  // 1. LIGHT AND DARK THEME
  // ==========================================

  var root = document.documentElement;
  var themeButton = document.getElementById('theme');

  try {
    var savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light' || savedTheme === 'dark') {
      root.setAttribute('data-theme', savedTheme);
    }
  } catch (error) {
    // The page still works if browser storage is unavailable.
  }

  themeButton.addEventListener('click', function () {
    var currentTheme = root.getAttribute('data-theme');

    if (!currentTheme) {
      currentTheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches ? 'dark' : 'light';
    }

    var nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    root.setAttribute('data-theme', nextTheme);

    try {
      localStorage.setItem('theme', nextTheme);
    } catch (error) {}
  });


  // ==========================================
  // 2. AUTOMATIC COPYRIGHT YEAR
  // ==========================================

  document.getElementById('yr').textContent =
    new Date().getFullYear();


  // ==========================================
  // 3. SKILLS AND ANIMATED PROGRESS BARS
  // ==========================================

  var skills = [
    ['Digital forensics (acquisition and analysis)', 85],
    ['Network and log analysis', 75],
    ['Python and scripting', 80],
    ['Machine learning for security', 70],
    ['Social engineering awareness', 90],
    ['Teaching and technical writing', 90]
  ];

  var skillGrid = document.getElementById('skillgrid');

  skills.forEach(function (skill) {
    var item = document.createElement('div');
    item.className = 'sk';

    var label = document.createElement('label');
    var name = document.createElement('span');
    var percentage = document.createElement('span');

    name.textContent = skill[0];
    percentage.textContent = skill[1] + '%';

    label.appendChild(name);
    label.appendChild(percentage);

    var bar = document.createElement('div');
    bar.className = 'bar';

    var fill = document.createElement('span');
    fill.dataset.w = String(skill[1]);

    bar.appendChild(fill);
    item.appendChild(label);
    item.appendChild(bar);

    skillGrid.appendChild(item);
  });


  // ==========================================
  // 4. SCROLL-BASED ANIMATIONS AND NAVIGATION
  // ==========================================

  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.links a')
  );

  if ('IntersectionObserver' in window) {
    var skillObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.bar span').forEach(
            function (bar) {
              bar.style.width = bar.dataset.w + '%';
            }
          );

          skillObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.3
    });

    skillObserver.observe(skillGrid);

    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (link) {
              link.classList.toggle(
                'on',
                link.getAttribute('href') ===
                '#' + entry.target.id
              );
            });
          }
        });
      },
      {
        rootMargin: '-40% 0px -55% 0px'
      }
    );

    navLinks.forEach(function (link) {
      var section = document.querySelector(
        link.getAttribute('href')
      );

      if (section) {
        sectionObserver.observe(section);
      }
    });

  } else {
    // Fallback for browsers without IntersectionObserver.
    skillGrid.querySelectorAll('.bar span').forEach(function (bar) {
      bar.style.width = bar.dataset.w + '%';
    });
  }


  // ==========================================
  // 5. VISHING CALL CHECKER
  // ==========================================

  // This is a rule-based demonstration, not an ML model.
  var rules = [
    [
      'urg',
      /\b(immediately|right now|within \d+ (?:hours?|minutes?)|urgent(?:ly)?|last chance|will be (?:blocked|closed|suspended))\b/gi
    ],
    [
      'aut',
      /\b(security department|your bank|police|tax authority|revenue|fraud team|customer support|government)\b/gi
    ],
    [
      'cred',
      /\b(pin|otp|password|verification code|card number|cvv|security code|one-time code)\b/gi
    ],
    [
      'pay',
      /\b(gift cards?|wire transfer|send money|mobile money|transfer (?:the )?funds|pay(?:ment)? now)\b/gi
    ],
    [
      'sec',
      /\b(do not tell anyone|don't tell anyone|don’t tell anyone|do not hang up|keep this (?:call )?secret|tell no one)\b/gi
    ]
  ];

  function escapeHTML(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  document.getElementById('run').addEventListener(
    'click',
    function () {
      var transcript = document.getElementById('tx').value.trim();
      var output = document.getElementById('out');

      if (!transcript) {
        output.classList.remove('show');
        return;
      }

      var highlighted = escapeHTML(transcript);
      var categories = {};
      var hits = 0;

      rules.forEach(function (rule) {
        // Reset regular-expression state before processing each rule.
        rule[1].lastIndex = 0;

        highlighted = highlighted.replace(
          rule[1],
          function (match) {
            categories[rule[0]] = true;
            hits++;

            return '<mark class="' + rule[0] + '">' +
              match + '</mark>';
          }
        );
      });

      var categoryCount = Object.keys(categories).length;

      // A heuristic indicator, not a statistical probability.
      var score = Math.min(
        100,
        categoryCount * 22 + Math.min(hits, 6) * 2
      );

      var verdict;

      if (categoryCount >= 3) {
        verdict = 'High risk: several vishing signals found';
      } else if (categoryCount === 2) {
        verdict = 'Medium risk: review this call carefully';
      } else if (categoryCount === 1) {
        verdict = 'Low risk: one signal found';
      } else {
        verdict = 'No known signals found';
      }

      document.getElementById('verdict').textContent =
        verdict + ' (' + categoryCount + ' of 5 signal types)';

      document.getElementById('fill').style.width = score + '%';
      document.getElementById('marked').innerHTML = highlighted;

      output.classList.add('show');
    }
  );


  // ==========================================
  // 6. CONTACT FORM
  // ==========================================

  document.getElementById('send').addEventListener(
    'click',
    function () {
      var name = document.getElementById('n').value.trim();
      var message = document.getElementById('m').value.trim();
      var status = document.getElementById('status');

      if (!name || !message) {
        status.textContent =
          'Add your name and a message first.';
        return;
      }

      // IMPORTANT: Replace with your real email address.
      var recipient = 'you@example.com';

      var subject = encodeURIComponent(
        'Portfolio message from ' + name
      );

      var body = encodeURIComponent(
        'Name: ' + name + '\n\n' + message
      );

      status.textContent =
        'Opening your email application...';

      window.location.href =
        'mailto:' + recipient +
        '?subject=' + subject +
        '&body=' + body;
    }
  );

})();
