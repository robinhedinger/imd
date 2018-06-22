
$(document).ready(function(){
    $('.work-container').click(function(event){
        //remove all pre-existing active classes
        $('.work-detail').removeClass('work-detail');

        //add the active class to the link we clicked
        $(this).toggleClass('work-detail'),
        //Load the content
        //e.g.
        //load the page that the link was pointing to
        //$('#content').load($(this).find(a).attr('href'));

        event.preventDefault();
          });

});
