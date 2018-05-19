      $(function(){
        $('.delete').click(function(e) {
          e.preventDefault();
          $('#result').val($(this).closest('tr').find('td:first').text());
          $('#result1').val($(this).closest('tr').find('td:nth-child(2)').text())
        });
      });
     $(function(){
        $('.edit').click(function(e) {
          var id = $(this).parent().parent().find('td').eq(0).html();
          var url = '/QLTK/editTK';
          $.ajax({

            url: url,
            type: 'POST',
            data: {Id: id},
          })
          .done(function(data) {
            $('#kq').val(data.Id);
            $('#kq1').val(data.TenThuThu);
            $('#kq2').val(data.Email);
            $('#kq3').val(data.SDT);
            $('#kq4').val(data.NgaySinh);
            $('#kq5').val(data.GioiTinh);
          })
        });
      });