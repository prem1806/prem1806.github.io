app.controller("myctrl",["$scope","$http","$interval",function($scope,$http,$interval){
	$scope.my = false;
	$scope.sub= function(){
		
		var s= document.getElementById("title").value;
			// console.log(s);
			var api = "https://api.themoviedb.org/3/search/movie?api_key=2bcc8bc7932766f61ccf677eaa208209&language=en-US&query="+s+"&page=1&include_adult=false";
		$http.get(api).then(function(response){
	        $scope.details = response.data;
	        $scope.d= $scope.details.results;

	        $scope.list_data = [];

	        for(var i=0; i <= $scope.d.length-1; i++){
	        	// alert();
	            $scope.total = $scope.d[i];
	            $scope.img ="https://image.tmdb.org/t/p/w185_and_h278_bestv2"+$scope.d[i].poster_path;
	            $scope.total["img"]=$scope.img;
	            $scope.list_data.push($scope.total);
	        }
	        $scope.my = true;    

	        $scope.myvar = false;
	        $scope.moreinfo = function(val,id) {
	        	 $scope.myvar = true;
	            $scope.more_data = $scope.list_data[id]; 
	            $scope.userscore=($scope.more_data.vote_average)*10;
	            $scope.lscore=($scope.more_data.vote_average)*10+"%";
	            console.log($scope.more_data);

	           	};
	        });
	};
}]);

