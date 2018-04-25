	var inpHeight, inpWidth, color;
	//after submit save height and width into variables
	$('#sizePicker').submit(function(event){
		event.preventDefault();
		inpHeight = $('#inpHeight').val();  //save the value of height of the table
		inpWidth = $('#inpWeight').val();   //save the value of width of the table
		makeGrid();  //calling function makeGrid
	})
	//function to create grid
	function makeGrid()
	{
		$('tr').remove();  //remove the every row
		for(var i = 1; i <= inpHeight; i++) //loop untill gird height value is reached
		{
			$('#pixelCanvas').append('<tr id=tablerow'+ i +'></tr>'); // append row in table
			
			for(var j = 1; j <= inpWidth; j++)  //loop untill gird width value is reached
			{
				$('#tablerow'+ i).append('<td></td>');  //here we gonna add a cell for each row
			}
		}
		
		$('td').click(function()  //on clicking the cell it will add the color
		{
			pickColor = $('#colorPicker').val();  //value of color which we picked
			console.log($(this).attr('style'));
			
			if ($(this).attr('style') === undefined)
			{	
				$(this).attr('style','background-color:' + pickColor); //set the color to grid
			}
			else
			{
				$(this).removeAttr('style');//if it is there then we're want to remove the style attribute
			}
		})
	}
