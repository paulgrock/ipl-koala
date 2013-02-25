Koala.templates.add('matchup_form', '<legend>Matchup</legend><div class="controls"><div class="alert alert-warning"><button type="button" data-dismiss="alert" class="close">&times;</button><strong>Please Note!</strong> Teams entered into the matchup below must have first been added through the \'Teams\' section!</div></div><div class="control-group"><label class="control-label">Team A Name:</label><div class="controls teamA"></div></div><div class="control-group"><label class="control-label">Team B Name:</label><div class="controls teamB"></div></div><div class="control-group"><label class="control-label">Best Of:</label><div class="controls"><ul id="bestOf" class="nav nav-pills"><% for(var i = 1; i <= 13; i+=2) { %><% if(i === best_of) { %><li class="active"><a><%= i %></a></li><% } else { %><li><a><%= i %></a></li><% } %><% } %></ul></div></div><% if(games && games.length) { %><div class="control-group"><label class="control-label">Games:</label><div class="controls gameTable"></div></div><% } %>');