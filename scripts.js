var result = $.getJSON("https://api.adviceslip.com/advice",
    function (data) {
        var result = data['slip']['advice']
        var result_id = data['slip']['id']
      $('.response').html(`<p>"${result}"</p>`);
      $('.advice-id').html(`Advice #${result_id} `);
     
    }
);

$(".dice-container").click(function (e) { 
    var slid_id = Math.floor(Math.random()*50)
   $.getJSON(`https://api.adviceslip.com/advice/${slid_id}`,
    function (data , textStatus) {
        var result = data['slip']['advice']
        var result_id = data['slip']['id']
      $('.response').html(`<p>"${result}"</p>`);
      $('.advice-id').html(`Advice #${result_id} `);
    }
   );

  
});
