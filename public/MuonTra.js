      $(function(){
        $('.delete').click(function(e) {
          e.preventDefault();
          $('#result').val($(this).closest('tr').find('td:first').text());
          $('#result1').val($(this).closest('tr').find('td:nth-child(3)').text());
          $('#result2').val($(this).closest('tr').find('td:nth-child(8)').text());
        });
      });