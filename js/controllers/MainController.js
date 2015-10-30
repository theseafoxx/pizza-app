app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  
  $scope.mains = [
    {
      name: 'Monalisa Chicken',
      description: 'Chicken, ricotta, mozzarella, garlic, brown sauce',
      price: 17.95
    },
    {
      name: 'Penne a la Vodka',
      description: 'Canadian bacon, cream, tomatoe',
      price: 15.95
    },
    {
      name: 'Grandma Pizza',
      description: 'Garlic, basil, fresh mozzarella',
      price: 14.95
    }
  ];
  
  $scope.extras = [
    {
      name: 'Broccoli rabe',
      description: 'Sauted with garlic in oil',
      price: 4.95
    },
    {
      name: 'Garlic bread with mozzarella',
      description: 'Awesome carbs with proteins',
      price: 5.55
    },
    {
      name: 'Fish Cheese',
      description: 'Dough in a sauce with anchovies and lots of mozzarella. A heart attack on a plate.',
      price: 9.95
    }
    
  ];

}]);