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
          console.log(id)
          var url = '/sach/editbook';
          $.ajax({

            url: url,
            type: 'POST',
            data: {Id: id},
          })
          .done(function(data) {
            $('#kq').val(data.Id);
            $('#kq1').val(data.TenSach);
            $('#kq2').val(data.TacGia);
            $('#kq3').val(data.NgayNhap);
            $('#kq4').val(data.NamXB);
            $('#kq5').val(data.SoLuong);
            $('#kq6').val(data.IdTheLoai).change();
            $('#kq7').val(data.IdNXB).change();
          })
        });
      });