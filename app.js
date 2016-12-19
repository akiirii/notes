var notes = angular.module('notes', ['ngStorage']);

notes.controller('mainController', ['$scope', '$localStorage', function ($scope, $localStorage) {
  $scope.notes = [];

  let storageSave = function () {
    $localStorage.notes = {
      notes: $scope.notes,
    };
  }

  $scope.addNote = function () {
    $scope.notes.push({
      text: '',
      editing: true
    });
    storageSave();
  };

  $scope.editNote = function (note) {
    note.editing = !note.editing;
    storageSave();
  };

  $scope.removeNote = function (note) {
    var index = this.notes.indexOf(note);
    this.notes.splice(index, 1);
    storageSave();
  };

  if ($localStorage.notes)
    $scope.notes = $localStorage.notes.notes;
  else
    $scope.addNote();


}])
