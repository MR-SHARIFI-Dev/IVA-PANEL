(function () {
  function pad(n) { return n.toString().padStart(2, '0'); }

  function stamp() {
    var now = new Date();
    var ts = now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate()) +
      ' ' + pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
    var el = document.querySelector('[data-iva-time]');
    if (el) el.textContent = ts;

    var reqEl = document.querySelector('[data-iva-reqid]');
    if (reqEl && !reqEl.textContent.trim()) {
      var id = 'iva_' + Math.random().toString(16).slice(2, 6) + '-' + Math.random().toString(16).slice(2, 6);
      reqEl.textContent = id;
    }
  }

  document.addEventListener('DOMContentLoaded', stamp);
})();
