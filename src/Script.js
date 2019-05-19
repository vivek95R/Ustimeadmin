


  jQuery(document).ready(function() {
      jQuery('#timepicker1').timepicker({
              minuteStep: 15
          });
      jQuery('#timepicker2').timepicker({
              minuteStep: 15
          });
      jQuery('#timepicker3').timepicker({
              minuteStep: 15
          });
      jQuery('#timepicker4').timepicker({
              minuteStep: 15
          });jQuery('#timepicker5').timepicker({
              minuteStep: 15
          });jQuery('#timepicker6').timepicker({
              minuteStep: 15
          });jQuery('#timepicker7').timepicker({
              minuteStep: 15
          });jQuery('#timepicker8').timepicker({
              minuteStep: 15
          });jQuery('#timepicker9').timepicker({
              minuteStep: 15
          });jQuery('#timepicker10').timepicker({
              minuteStep: 15
          });jQuery('#timepicker11').timepicker({
              minuteStep: 15
          });jQuery('#timepicker12').timepicker({
              minuteStep: 15
          });jQuery('#timepicker13').timepicker({
              minuteStep: 15
          });jQuery('#timepicker14').timepicker({
              minuteStep: 15
          });
          
          var form = $("#branchform");
form.validate({
errorPlacement: function errorPlacement(error, element) { element.before(error); },
rules: {
  confirm: {
      equalTo: "#password"
  }
}
});
form.children("div").steps({
headerTag: "h3",
bodyTag: "section",
transitionEffect: "slideLeft",
onStepChanging: function (event, currentIndex, newIndex)
{
  form.validate().settings.ignore = ":disabled,:hidden";
  return form.valid();
},
onFinishing: function (event, currentIndex)
{
  form.validate().settings.ignore = ":disabled";
  return form.valid();
},
onFinished: function (event, currentIndex)
{
  $( "#branchform" ).submit();
}
});
          jQuery(".select2").select2({
              placeholder: "Add catagories",
              width: '100%',
              tags: true
          });

             $('.summernote').summernote({
              height: 100,                 // set editor height

              minHeight: null,             // set minimum height of editor
              maxHeight: null,             // set maximum height of editor

              focus: false                 // set focus to editable area after initializing summernote
          });

        

  });