(function ($) {
  Drupal.behaviors.pixture_reloaded = {
    attach: function () {
      $('#slideshow').cycle({
        fx:         'scrollLeft',
        timeout:     3000,
        pager:      '#nav', 
        pagerEvent: 'mouseover',
        fastOnEvent: true
      });
      //Change booking menu link to EN
      $('.i18n-es.page-node-20.page-type-webform .language-link').attr('href', '/en/content/booking');
      $('.i18n-en.page-node-21.page-type-webform .language-link').attr('href', '/es/content/reservas');
    }
  };
}(jQuery));