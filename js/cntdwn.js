(function ($) {

    $.fn.cntdwn = function (options) {

        var defaultVal = {

            start: {"hour":0,"min":0,"sec":0}
            
            
        };
        
        var obj = $.extend(defaultVal, options);
        
        var sec = obj.start.sec;
        var $thisdiv = this
        
        var addCntDwn = function(obj){
            $.each(obj.start,function(key, val){
               if(val < 10 ) val = "0"+val;
               $thisdiv.append('<span id="'+key+'"> '+key+': <span id="'+key+'Cnt">'+val+'</span></span>');
                
            })
        }
        var changeAfterSixty = function(cause,effect){
           // alert(paresInt($(cause).html()));
            var $newVal = parseInt($(cause).html(), 10) + 1;
            if($newVal <= 59 ) return true;
            else{
 //           if($newVal > 59 ) {
                 $(cause).html("00");
                 var $newVal = parseInt($(effect).html(), 10) + 1;
                 if($newVal < 10 ) $newVal = "0" + $newVal;
                 $(effect).html($newVal);
                 return true;
             }
        }
        var runCntDwn = function(){
             
             var newsec = parseInt($("#secCnt").html(),10) + 1;              
             if(newsec < 10 ) {newsec = "0"+newsec;}
             $("#secCnt").html(newsec);
             changeAfterSixty("#secCnt","#minCnt");
             changeAfterSixty("#minCnt","#hourCnt");
            //alert(newsec);
        }
        
        
        addCntDwn(obj);
        setInterval(runCntDwn,1000);
       
        
         
           
       
    }
})(jQuery);    