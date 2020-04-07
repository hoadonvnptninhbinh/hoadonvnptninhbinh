$(function() {
    $('#selMHD').change(function() {
        var srcImage = $(this).val() + '.png';
        $("#my_image").attr("src","second.jpg");
    });
})