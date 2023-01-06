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
            
            50:
            {
                items:2
            },

            100:
            {
                items:3
            },

            // 3:
            // {
            //     items:4
            // },

            // 4:
            // {
            //     items:5
            // },

        }
   
    });

    $('#arrow-l').click(function(){
        $('#slider').trigger('prev.owl.carousel');
    });

    $('#arrow-r').click(function(){
        $('#slider').trigger('next.owl.carousel');
    });
});