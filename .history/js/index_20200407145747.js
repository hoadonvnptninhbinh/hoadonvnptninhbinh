$(function() {
    $('#selMHD').change(function() {
        var srcImage = 'image/' + $(this).val() + '.png';
        $("#my_image").attr("src", srcImage);
    });
})