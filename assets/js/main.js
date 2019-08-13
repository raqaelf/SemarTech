

$(document).ready(function() {
    var inputs = $(".progress-container").find($("label") );
  
        for(var i =0 ; i< inputs.length; i ++)
        { 
            var index = i +1;
            var time = ((inputs.length)-i ) * 100;
            $(".progress-container label:nth-child("+index+")").css( "-webkit-animation", "anim 8s "+time+"ms infinite ease-in-out" );
            $(".progress-container label:nth-child("+index+")").css( "-animation", "anim 8s "+time+"ms infinite ease-in-out" );
            
        }

})
