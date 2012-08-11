(function ($) {

    $.fn.validator = function (options) {

        var defaultVal = {

            event: 'keyup',
            trigger: 'submit'
            
        };
        
        var obj = $.extend(defaultVal, options);
        //console.log(obj.texts.names);
        
         this.css({'opacity':"0","font-size":"50"});
               return this.animate({'opacity':"1","font-size":"16"},5000);
           
       
    }
})(jQuery);    