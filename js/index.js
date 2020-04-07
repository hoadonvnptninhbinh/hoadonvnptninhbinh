$(function() {
    $('#selMHD').change(function() {
        var srcImage = 'image/' + $(this).val() + '.png';
        $("#image_hddt").attr("src", srcImage);
    });
})