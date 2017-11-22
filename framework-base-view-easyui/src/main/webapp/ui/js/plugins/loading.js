define(['jquery'], function($) {

  var LoadingInstance;
  function Loading() {
    // 单例
    return LoadingInstance;
  }

  $.extend(Loading.prototype, {

    template: '<div style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; z-index: 9999; background: #fff;"></div>',

    loadings: [],

    timeout: 5 * 1000,

    create: function(context) {
      // 只能在 panel-body 里创建 loading
      if (!context || !context.is || !context.is('.panel-body')) return;
      return $(this.template).appendTo(context);
    },

    add: function(context) {
      var loading = this.create(context);
      var vm = this;

      if (loading) {
        // 压入清除 loading 方法
        this.loadings.unshift(function unLoading() {
          loading.fadeOut(vm.pop.bind(vm))
        });

        // 确保不会因为意外而造成loading无法消失
        setTimeout(vm.pop.bind(vm), vm.timeout)
      }
    },

    pop: function() {
      var unLoading = this.loadings.pop();

      if (typeof unLoading === 'function') {
        unLoading()
      }
    }
  });

  return LoadingInstance = new Loading();
});
