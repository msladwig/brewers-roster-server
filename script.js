//fetches information from json file stored on local or remote server
//then calls buildTable to populate
fetch('./data.json')
.then(response => {
   return response.json();
})
.then(players => buildTable(players));

function buildTable(data) {
  var table = document.getElementById('player-table')
  for (var i = 0; i < data.length; i++) {
    //builds a row with basic player data, then an additional hidden row to display
    //further data if name is clicked.
    //uses bootstrap's built in accordion functionality.
    var row = `<tr data-toggle="collapse" data-target="#accordion${[i]}" class ="clickable">
                    <td> ${data[i].firstName + " " + data[i].lastName} </td>
                    <td> ${data[i].number} </td>
                    <td> ${data[i].primaryPosition} </td>
                </tr>
                <tr>
                <td colspan="12" class = "hiddenRow">
                  <div id="accordion${[i]}" class="collapse">
                      <table class="table">
                      <thead>
                        <tr class="info">
			    <th scope = "col"></th>
                            <th scope="col">Bats</th>
                            <th scope="col">Throws</th>
			    <th scope = "col">Birth City</th>
			    <th scope = "col">Birth State/Province</th>		
			    <th scope = "col">Country of Birth</th>	
			</tr>
		        </thead>				  		
		        <tbody>						
                          <tr data-toggle="collapse"  class="accordion-toggle">
			    <td><img src ="${data[i].picture}" height = "125" width = "125" alt="${data[i].firstName} ${data[i].lastName}"></td>
                            <td> ${data[i].batSide} </td>
                            <td> ${data[i].throwSide} </td>
                            <td> ${data[i].birthCity}</td>
			    <td> ${data[i].birthStateProvince} </td>
		            <td> ${data[i].birthCountry}</td>
			  </tr>
                       </tbody>
                  </div>
                </td>`
    table.innerHTML += row
  }
}
