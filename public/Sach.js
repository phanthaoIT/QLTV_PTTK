      $(function(){
        $('.delete').click(function(e) {
          e.preventDefault();
          $('#result').val($(this).closest('tr').find('td:first').text());
          $('#result1').val($(this).closest('tr').find('td:nth-child(2)').text())
        });
      });
      $(function(){
        $('.edit').click(function(e) {
          e.preventDefault();
          $('#kq').val($(this).closest('tr').find('td:first').text());
          $('#kq1').val($(this).closest('tr').find('td:nth-child(2)').text());
          $('#kq2').val($(this).closest('tr').find('td:nth-child(3)').text());
          $('#kq3').val($(this).closest('tr').find('td:nth-child(4)').text());
          $('#kq4').val($(this).closest('tr').find('td:nth-child(5)').text());
          $('#kq5').val($(this).closest('tr').find('td:nth-child(6)').text());
          $('#kq7').val($(this).closest('tr').find('td:nth-child(7)').text());
        });
      });