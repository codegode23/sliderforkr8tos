$(document).ready(function()
{
    $('#slider').owlCarousel(
    {
        loop:true,
        dots:false,
        center:true,
        responsive:
        {

            0:
            {
                items:1
            },
            
            10:
            {
                items:2
            },

            20:
            {
                items:3
            },

            30:
            {
                items:4
            },

            40:
            {
                items:5
            },

        }
   
    });

    $('#arrow-l').click(function(){
        $('#slider').trigger('prev.owl.carousel');
    });

    $('#arrow-r').click(function(){
        $('#slider').trigger('next.owl.carousel');
    });
});