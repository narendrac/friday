(function ($) {

    $.fn.myPlugin = function (options) {

        var defaultVal = {

            Text: 'Your mouse is over',
            ForeColor: 'red',
            BackColor: 'gray'
        };
        
        var obj = $.extend(defaultVal, options);
        console.log(obj.texts.names);
        
            var $thiscls = $(this);
            $.each(obj.texts,function(key, val){
               var inputs = "<input type='text' name='"+key+"'/>"
              console.log(key);
               $thiscls.append(inputs);
            });
        
       
    }
})(jQuery);    